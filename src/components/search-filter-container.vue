<script setup lang="ts">
import { h, ref } from 'vue';
import Input from '../components/input.vue';
import SearchIcon from './icons/search-icon.vue';
import FilterButton from './filter-button.vue';
import FilterContent from '@/common/filter/filter-content.vue';
import type { CurationFilterPayload } from '@/types/curation';
import PopOver from './pop-over.vue';

const props = defineProps<{
    handleChange?: (e: HTMLInputElement) => void;
    handleApplyFilter: (payload: CurationFilterPayload) => void
    handleResetFilter: () => void
}>();

const searchValue = ref('');

const handleInput = (e: HTMLInputElement) => {
    searchValue.value = e.value;
    props.handleChange?.(e);
};

const FilterContentWithEmit = () =>
    h(FilterContent, {
        onFilter: props.handleApplyFilter,
        onReset: props.handleResetFilter
    });

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
            <div class="filter-pop-over">
                <PopOver :action="FilterButton" :content="FilterContentWithEmit" />
            </div>
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
    align-items: baseline;
    gap: 20px;

    @media (max-width: 678px) {
        display: block;
    }
}

.filter-pop-over {
    @media (max-width: 678px) {
        display: flex;
        justify-content: end;
    }
}

:deep(.search-field) {
    width: 100%;
    max-width: 600px;

    margin-bottom: 0;
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
    margin-top: 0;
}
</style>
