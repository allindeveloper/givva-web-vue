<script setup lang="ts">
import ArrowLeftIcon from './icons/arrow-left-icon.vue';
import ArrowRightIcon from './icons/arrow-right-icon.vue';


type PaginationProps = {
    currentPage: number
    totalPages: number
}

const paginationProps = defineProps<PaginationProps>()
</script>
<template>
    <div class="container">
        <div class="arrow-left">
            <ArrowLeftIcon />
        </div>
        <div>
            Page {{ paginationProps.currentPage }} of {{ paginationProps.totalPages }}
        </div>
        <div class="arrow-right">
            <ArrowRightIcon />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.arrow-left,
.arrow-right {
    cursor: pointer;
}
</style>