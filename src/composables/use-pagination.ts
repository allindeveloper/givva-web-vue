import { ref, computed, type Ref } from "vue";

export function usePagination<T>(data: Ref<T[]>, pageSize: number = 10) {
  const currentPage = ref(1);

  const totalItems = computed(() => data.value.length);
  const totalPages = computed(() => Math.ceil(totalItems.value / pageSize));

  const paginatedData = computed(() => {
    const safePage = Math.min(Math.max(currentPage.value, 1), totalPages.value || 1);
    const startIndex = (safePage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.value.slice(startIndex, endIndex);
  });

  return {
    paginatedData,
    totalPages,
    totalItems,
    currentPage,
    setCurrentPage: (page: number) => (currentPage.value = page),
  };
}
