<script setup lang="ts">
import { ref } from 'vue';
import Input from '../components/input.vue';
import SearchIcon from './icons/search-icon.vue';

const props = defineProps<{
    handleChange?: (e: HTMLInputElement) => void;
}>();

const searchValue = ref('');

const handleInput = (e: HTMLInputElement) => {
    searchValue.value = e.value;
    props.handleChange?.(e);
};
</script>

<template>
    <div class="container">
        <div>
            <p>Top picks</p>
        </div>
        <div class="search-wrapper">
            <Input :modelValue="searchValue" @input="handleInput" customClass="search-field"
                :iconProps="{ className: 'search-icon' }" :startIcon="SearchIcon"
                :placeholder="'What type of gift ideas are you interested in?'" />
        </div>
    </div>
    <hr />
</template>

<style scoped>
:deep(.search-icon) {
    margin-left: 20px;
}

.search-wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

:deep(.search-field) {
    width: 100%;
    max-width: 600px;
    /* longer by default */
    min-width: 280px;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    gap: 16px;
    flex-wrap: wrap;
}

hr {
    border: 1px solid #EAECF0;
    margin-bottom: 10px;
    margin-top: 20px;
}

p {
    font-weight: 600;
    font-size: 32px;
    color: #1D1D1D;
    margin-bottom: 0;
}
</style>
