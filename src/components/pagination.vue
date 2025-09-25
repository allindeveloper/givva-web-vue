<script setup lang="ts">
import ArrowLeftIcon from './icons/arrow-left-icon.vue';
import ArrowRightIcon from './icons/arrow-right-icon.vue';


type PaginationProps = {
    currentPage: number
    totalPages: number
    handleNextPage: () => void
    handlePreviousPage: () => void
}

const paginationProps = defineProps<PaginationProps>()
</script>
<template>
    <hr />
    <div class="container">
        <div :class="currentPage === 1 ? 'arrow-disabled' : 'arrow-left'" @click="paginationProps.handlePreviousPage">
            <ArrowLeftIcon />
        </div>
        <div>
            Page {{ paginationProps.currentPage }} of {{ paginationProps.totalPages }}
        </div>
        <div @click="paginationProps.handleNextPage"
            :class="currentPage === totalPages ? 'arrow-desabled' : 'arrow-right'">
            <ArrowRightIcon />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 50px;
}

hr {
    border: 1px solid #EAECF0;
    margin-top: 10px;
}

.arrow-left,
.arrow-right {
    cursor: pointer;
}

.arrow-desabled {
    cursor: default;
    opacity: 0.5;
}
</style>