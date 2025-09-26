<script setup lang="ts">
import Pagination from '@/components/pagination.vue';
import Header from '../components/header.vue';
import { ref } from 'vue';
import SearchFilterContainer from '@/components/search-filter-container.vue';
import CurateCard from '@/components/card/curate-card.vue';
import { addCuration, getCurations } from '@/utils/curation-storage';
import { usePagination } from '@/composables/use-pagination';
import ActionHeaderContainer from '@/components/action-header-container.vue';
import type { CreateCurationFormType, CurationFilterPayload } from '@/types/curation';
import CreateCuration from '@/common/curation/create-curation.vue';
import { useRouter } from 'vue-router';

const curations = ref(getCurations())
const showDialog = ref(false);
const { paginatedData, totalPages, currentPage, setCurrentPage } = usePagination<CreateCurationFormType>(curations, 10);
const router = useRouter()
const createdCuration = ref<CreateCurationFormType | null>(null)

const handlePapinationScrol = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
const handleNext = () => {
  if (currentPage.value === totalPages.value) {
    return;
  }
  handlePapinationScrol()
  setCurrentPage(currentPage.value + 1);
};

const handlePrevious = () => {
  if (currentPage.value === 1) {
    return;
  }
  handlePapinationScrol()
  setCurrentPage(currentPage.value - 1);
};


const handleInputChange = (e: HTMLInputElement) => {
  const searchValue = e.value;
  const allCurations = getCurations();

  const filteredData = allCurations.filter(
    (c) =>
      c.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      c.interests.toLowerCase().includes(searchValue.toLowerCase()) ||
      c.note.toLowerCase().includes(searchValue.toLowerCase()) ||
      c.occassion.toLowerCase().includes(searchValue.toLowerCase()) ||
      c.relationship.toLowerCase().includes(searchValue.toLowerCase()) ||
      c.ageRange.toLowerCase().includes(searchValue.toLowerCase()),
  );
  curations.value = filteredData;

  setCurrentPage(1);
};

const handleApplyFilter = (filterParams: CurationFilterPayload) => {
  const allCurations = getCurations();

  const filteredData = allCurations.filter((c) =>
    Object.entries(filterParams).every(
      ([key, value]) =>
        !value || c[key as keyof CurationFilterPayload]?.toLowerCase() === value.toLowerCase()
    )
  );

  curations.value = filteredData;
  setCurrentPage(1);
};


const handleResetFilter = () => {
  const allCurations = getCurations();
  curations.value = allCurations;
  setCurrentPage(1);
}

const handleCreate = () => {
  showDialog.value = true;
}

const handleCloseDialog = () => {
  showDialog.value = false;
}

const handleSaveCuration = (data: CreateCurationFormType) => {
  handleCloseDialog();
  const newCreation = addCuration(data);
  curations.value.unshift(newCreation);
  createdCuration.value = newCreation
}

const handleDetailsCallback = () => {
  router.push(`/curation/${createdCuration.value?.id}`);

}

</script>

<template>
  <main>
    <Header />

    <div class="action-header-container">
      <ActionHeaderContainer :handleCreate="handleCreate" :title="'Hey Precious 👋 '" :description="'Welcome Back'" />
    </div>
    <div class="search-filter-container">
      <SearchFilterContainer :handleResetFilter="handleResetFilter" :handleApplyFilter="handleApplyFilter"
        :handleChange="handleInputChange" />
    </div>

    <div class="curation-list">
      <CurateCard v-for="curation in paginatedData" :key="curation.id" :id="curation.id" :name="curation.name"
        :description="'Curation by Precious'" :count="curation.giftTypes?.length"
        :image="curation.giftTypes?.[0]?.image" />
    </div>
    <Pagination v-if="Number(totalPages) > 1" :handlePreviousPage="handlePrevious" :handleNextPage="handleNext"
      :currentPage="currentPage" :totalPages="totalPages" />

    <div v-if="paginatedData.length === 0">
      <p class="no-records">No Records found!</p>
    </div>

    <CreateCuration :handleDetailsCallback="handleDetailsCallback" :handleSaveCuration="handleSaveCuration"
      :handleCloseDialog="handleCloseDialog" :showDialog="showDialog" />
  </main>

</template>

<style scoped>
main {
  max-width: 1220px;
  margin: 0 auto;

  @media (max-width: 678px) {
    margin-inline: 12px;
  }

  @media (max-width: 1024px) {
    margin-inline: 12px;
  }

  @media (max-width: 1280px) {
    margin-inline: 12px;
  }
}

.action-header-container {
  margin-top: 50px;
  margin-bottom: 20px;
}

.search-filter-container {
  margin-top: 40px;
}

.no-records {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 18px;
  font-weight: 500;
  color: #6b7280;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px dashed #d1d5db;
  margin-inline: auto;
  width: 400px;
}

.curation-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  margin: 40px 0;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  @media (max-width: 678px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
</style>
