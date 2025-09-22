<script setup lang="ts">
import type { Component } from "vue";
import Label from "./label.vue";

type SelectItem = {
    label: string;
    value: string;
};

const props = defineProps<{
    modelValue: string;
    items: SelectItem[];
    label?: string;
    labelFor?: string;
    labelIcon?: Component;
    placeholder?: string;
    errorMessage?: string;
    className?: string;
}>();

const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
    (e: "change", value: string): void;
}>();

const handleChange = (event: Event) => {
    const value = (event.target as HTMLSelectElement).value;
    emit("update:modelValue", value);
    emit("change", value);
};
</script>

<template>
    <div class="select-wrapper">
        <Label v-if="props.label" :htmlFor="props.labelFor">
            <span class="label-content">
                <component v-if="props.labelIcon" :is="props.labelIcon" class="label-icon" />
                {{ props.label }}
            </span>
        </Label>

        <select :id="props.labelFor" :class="['select-box', props.className]" :value="props.modelValue"
            @change="handleChange">
            <option value="" disabled hidden>
                {{ props.placeholder || "Select" }}
            </option>
            <option v-for="item in props.items" :key="item.value" :value="item.value">
                {{ item.label }}
            </option>
        </select>

        <p v-if="props.errorMessage" class="select-error">
            {{ props.errorMessage }}
        </p>
    </div>
</template>

<style scoped>
.select-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    margin-bottom: 14px;
}

.label-content {
    display: flex;
    align-items: center;
    gap: 6px;
}

.label-icon {
    width: 16px;
    height: 16px;
}

.select-box {
    width: 100%;
    height: 41px;
    padding-inline: 15px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    background-color: white;
    font-size: 14px;
    font-family: inherit;
    cursor: pointer;
    box-shadow: 0px 1px 2px 0px #1018280D;
}

.select-box:focus {
    outline: none;
    border-color: #3b82f6;
}

.select-error {
    font-size: 12px;
    color: #dc2626;
    margin-top: 0px;
    margin-bottom: 0;
}
</style>
