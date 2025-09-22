<script setup lang="ts">
import type { Component } from "vue";
import Label from "./label.vue";

type TextAreaProps = {
    placeholder: string;
    label?: string;
    labelFor?: string;
    labelIcon?: Component;
    className?: string;
    errorMessage?: string;
    modelValue?: string;
};

const props = defineProps<TextAreaProps>();

const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
}>();

const handleInput = (event: Event) => {
    emit("update:modelValue", (event.target as HTMLTextAreaElement).value);
}
</script>

<template>
    <div class="textarea-wrapper">

        <Label v-if="props.label" :htmlFor="props.labelFor" class="textarea-label">
            <span class="label-content">
                <component v-if="props.labelIcon" :is="props.labelIcon" class="label-icon" />
                {{ props.label }}
            </span>
        </Label>

        <div class="textarea-container">
            <textarea :value="props.modelValue" @input="handleInput" :class="props.className" :id="props.labelFor"
                rows="5" :placeholder="props.placeholder" />
            <p v-if="props.errorMessage" class="label-error">
                {{ props.errorMessage }}
            </p>
        </div>
    </div>
</template>
<style scoped>
.textarea-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
}

.textarea-label {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
}

.label-content {
    display: flex;
    align-items: center;
    gap: 6px;
}

.label-icon {
    width: 16px;
    height: 16px;
    display: inline-block;
}

textarea {
    border-radius: 8px;
    width: 100%;
    border: 1px solid #D0D5DD;
    resize: none;
    font-size: 14px;
    font-weight: 400;
    padding-inline: 20px;
    padding-block: 10px;
    box-sizing: border-box;
    overflow-x: hidden;
    word-wrap: break-word;
}

textarea:focus {
    outline: none;
}

.label-error {
    font-size: 12px;
    color: #dc2626;
    margin-top: 0px;
}
</style>
