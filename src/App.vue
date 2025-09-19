<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { initCurations } from './utils/curation-storage';
import { dummyCurations } from './data/dummy-curations';

onMounted(() => {
  initCurations(dummyCurations)
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
