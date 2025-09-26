<script setup lang="ts">
import type { Component } from "vue";
import Label from "./label.vue";

type InputProps = {
    modelValue?: string;
    placeholder: string;
    label?: string;
    startIcon?: Component;
    customClass?: string;
    labelIcon?: Component;
    errorMessage?: string;
    iconProps?: {
        className: string;
    };
};

const props = defineProps<InputProps>();

const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
    (e: "input", event: HTMLInputElement): void;
}>();

const handleInput = (event: Event) => {
    emit("update:modelValue", (event.target as HTMLInputElement).value);
    emit("input", event.target as HTMLInputElement);
}
</script>

<template>
    <div class="root">
        <Label v-if="props.label" :htmlFor="props.label">
            <span class="label-content">
                <component v-if="props.labelIcon" :is="props.labelIcon" class="label-icon" />
                {{ props.label }}
            </span>
        </Label>

        <div class="input-container">
            <component :class="props.iconProps?.className" v-if="props.startIcon" :is="props.startIcon" class="" />
            <input :value="props.modelValue" @input="handleInput" :id="props.label" :placeholder="props.placeholder"
                :class="['input-base', props.customClass]" />
        </div>
        <p v-if="props.errorMessage" class="label-error">
            {{ props.errorMessage }}
        </p>
    </div>
</template>

<style scoped>
.root {
    margin-bottom: 14px;
}

.label-error {
    font-size: 12px;
    color: #dc2626;
    margin-top: 10px;
}

.label-content {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 10px;
}

.input-container {
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    width: 100%;
    background-color: #F9FAFB;
    height: 42px;
}

.input-base {
    background-color: #F9FAFB;
    border-radius: 8px;
    padding-right: 10px;
    width: 100%;
    height: 42px;
    font-weight: 400;
    font-size: 16px;
    border: none;
    padding-left: 14px;
}

.input-base:focus {
    outline: none;
}
</style>