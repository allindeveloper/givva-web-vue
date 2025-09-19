<script setup lang="ts">
import Pagination from '@/components/pagination.vue';
import Header from '../components/header.vue';
import { ref } from 'vue';
import SearchFilterContainer from '@/components/search-filter-container.vue';
import CurateCard from '@/components/card/curate-card.vue';
import { getCurations } from '@/utils/curation-storage';
import { usePagination } from '@/composables/use-pagination';
import type { CreateCurationFormType } from '@/curation';
import ActionHeaderContainer from '@/components/action-header-container.vue';

const curations = ref(getCurations())

const { paginatedData, totalPages, currentPage, setCurrentPage } = usePagination<CreateCurationFormType>(curations.value, 10);

const handleNext = () => {
  if (currentPage.value === totalPages.value) {
    return;
  }
  setCurrentPage(currentPage.value + 1);
};

const handlePrevious = () => {
  if (currentPage.value === 1) {
    return;
  }
  setCurrentPage(currentPage.value - 1);
};

const handleCreate = () => {
  console.log('Create new curation');
}
</script>

<template>
  <main>
    <Header />

    <div class="action-header-container">
      <ActionHeaderContainer :handleCreate="handleCreate" :title="'Hey Precious 👋 '" :description="'Welcome Back'" />
    </div>
    <div class="search-filter-container">
      <SearchFilterContainer />
    </div>

    <div class="curation-list">
      <CurateCard v-for="curation in paginatedData" :key="curation.id" :id="curation.id" :name="curation.name"
        :description="'Curation by Precious'" />
    </div>
    <Pagination :handlePreviousPage="handlePrevious" :handleNextPage="handleNext" :currentPage="currentPage"
      :totalPages="totalPages" />
  </main>
</template>

<style scoped>
main {
  max-width: 1220px;
  margin: 0 auto;

  @media (max-width: 678px) {
    margin-inline: 6px;
  }
}

.action-header-container {
  margin-top: 50px;
  margin-bottom: 20px;
}

.search-filter-container {
  margin-top: 40px;
}

.curation-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  margin: 40px 0;

  @media (max-width: 678px) {
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
