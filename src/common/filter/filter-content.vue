<script setup lang="ts">
import { ref } from "vue";
import Button from "@/components/button.vue";
import OccassionIcon from "@/components/icons/occassion-icon.vue";
import RelationshipIcon from "@/components/icons/relationship-icon.vue";
import Select from "@/components/select.vue";
import { ageRanges, ocassionData, relationshipData } from "@/data/dummy-curations";
import type { CurationFilterPayload } from "@/types/curation";
import AgeRangeIcon from "@/components/icons/age-range-icon.vue";

const emit = defineEmits<{
  (e: "filter", payload: CurationFilterPayload): void;
  (e: "reset"): void;
}>();

const values = ref({
  occassion: "",
  relationship: "",
  ageRange: ""
});

const setFieldValue = (field: keyof CurationFilterPayload, value: string) => {
  values.value[field] = value;
};

const handleFilter = () => {
  emit("filter", { ...values.value });
};

const handleReset = () => {
  values.value = { occassion: "", relationship: "", ageRange: "" };
  emit("reset");
};
</script>

<template>
  <div class="filter-content-container">
    <Select :modelValue="values.occassion" @update:modelValue="setFieldValue('occassion', $event)" :items="ocassionData"
      label="Occassion" placeholder="Select occassion" :labelIcon="OccassionIcon" />

    <Select :modelValue="values.relationship" @update:modelValue="setFieldValue('relationship', $event)"
      :items="relationshipData" label="Relationship" placeholder="Select relationship" :labelIcon="RelationshipIcon" />

    <Select :modelValue="values.ageRange" @update:modelValue="setFieldValue('ageRange', $event)" :items="ageRanges"
      label="Age Range" placeholder="Select age range" :labelIcon="AgeRangeIcon" />

    <div class="filter-actions">
      <Button className="reset-button" label="Reset" variant="secondary" @click="handleReset" />
      <Button className="filter-button" label="Filter" @click="handleFilter" />
    </div>
  </div>
</template>

<style scoped>
.filter-content-container {
  margin-inline: 10px;
  margin-top: 14px;
  margin-bottom: 20px;
}

.filter-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 50px;
}

.filter-button {
  background-color: #4DA1FF;
}

.reset-button {
  background-color: transparent;
  border: 1px solid #d1d5db;
  color: #4b5563;
}
</style>
