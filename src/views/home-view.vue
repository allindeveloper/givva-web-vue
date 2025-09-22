<script setup lang="ts">
import Pagination from '@/components/pagination.vue';
import Header from '../components/header.vue';
import { ref } from 'vue';
import SearchFilterContainer from '@/components/search-filter-container.vue';
import CurateCard from '@/components/card/curate-card.vue';
import { addCuration, getCurations } from '@/utils/curation-storage';
import { usePagination } from '@/composables/use-pagination';
import ActionHeaderContainer from '@/components/action-header-container.vue';
import Dialog from '@/components/dialog.vue';
import CreateCurationForm from '@/common/create-curation-form.vue';
import type { CreateCurationFormType } from '@/types/curation';
import CreateCurationSuccess from '@/common/create-curation-success.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const curations = ref(getCurations())
const showDialog = ref(true);
const showSuccessDialog = ref(false);

const { paginatedData, recalculate, totalPages, currentPage, setCurrentPage } = usePagination<CreateCurationFormType>(curations.value, 10);

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
  showDialog.value = true;
}

const handleSaveCuration = (data: CreateCurationFormType) => {
  const newCreation = addCuration(data);
  curations.value.unshift(newCreation);
  recalculate();
  showDialog.value = false;

  showSuccessDialog.value = true;
};

const handleCancelCuration = () => {
  showDialog.value = false;
};

const handleDetails = () => {
  showSuccessDialog.value = false;
  router.push('/curation/' + curations.value[0].id);
};

const handleGoHome = () => {
  showSuccessDialog.value = false;
  router.push('/home');
};
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

    <Dialog :open="showDialog" title="Create a Gift" description="Please fill the input field below" :showClose="true"
      @close="showDialog = false">
      <CreateCurationForm :handleCancel="handleCancelCuration" :handleCreate="handleSaveCuration" />
    </Dialog>

    <Dialog :open="showSuccessDialog" :showClose="false" @close="showSuccessDialog = false">
      <CreateCurationSuccess :handleGoHome="handleGoHome" :handleDetails="handleDetails" />
    </Dialog>
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
