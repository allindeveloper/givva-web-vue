<script setup lang="ts">
import Input from '../components/input.vue';
import SearchIcon from './icons/search-icon.vue';

</script>
<template>
    <div class="container">
        <div>
            <p>Top picks</p>
        </div>
        <div>
            <Input :startIcon="SearchIcon" :placeholder="'What type of gift ideas are you interested in?'" />
        </div>
    </div>
    <hr />
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

p {
    font-weight: 600;
    font-size: 32px;
    color: #1D1D1D;
}
</style>