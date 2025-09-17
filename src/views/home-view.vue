<script setup lang="ts">
import Pagination from '@/components/pagination.vue';
import Header from '../components/header.vue';
import { ref } from 'vue';
import SearchFilterContainer from '@/components/search-filter-container.vue';

const currentPage = ref(1);
const totalPages = ref(10);
</script>

<template>
  <main>
    <Header />

    <SearchFilterContainer />
    <!-- list -->
    <Pagination :currentPage="currentPage" :totalPages="totalPages" />
  </main>
</template>

<style scoped>
main {
  max-width: 1220px;
  margin: 0 auto;
}
</style>
