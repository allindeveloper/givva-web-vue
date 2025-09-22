<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    className?: string;
    htmlFor?: string;
}>();

const emit = defineEmits<{
    (e: "click"): void;
}>();

const classes = computed(() => props.className);
</script>

<template>
    <label :for="props.htmlFor" @click="emit('click')">
        <slot />
    </label>
</template>

<style scoped>
label {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
}
</style>