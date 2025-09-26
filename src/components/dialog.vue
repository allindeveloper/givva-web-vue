<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import CloseIcon from "./icons/close-icon.vue";
import DialogActions from "./dialog/dialog-actions.vue";
import type { DialogActionProps } from "@/types/dialog";

interface DialogProps {
    open: boolean;
    title?: string;
    description?: string;
    showClose?: boolean;
    handleSave?: () => void;
    handleCancel?: () => void;
    actionProps?: DialogActionProps
}

const props = defineProps<DialogProps>();
const emit = defineEmits<{
    (e: "close"): void;
    (e: "cancel"): void;
    (e: "save"): void;
}>();

function handleClose(e: any) {
    emit("close");
    const event = new CustomEvent('dialog-cancel', { bubbles: true });
    (e.currentTarget as HTMLElement)?.dispatchEvent(event);
}

function onBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) handleClose(e);
}

watch(() => props.open, (isOpen) => {
    document.body.style.overflow = isOpen ? "hidden" : "";
});

onUnmounted(() => {
    document.body.style.overflow = "";
});

function handleCancel(e: any) {
    emit("cancel");
    const event = new CustomEvent('dialog-cancel', { bubbles: true });
    (e.currentTarget as HTMLElement)?.dispatchEvent(event);
}

function handleSave(e: any) {
    emit("save");
    const event = new CustomEvent('dialog-save', { bubbles: true });
    (e.currentTarget as HTMLElement)?.dispatchEvent(event);
}
</script>

<template>
    <Teleport to="body">
        <div v-if="open" class="dialog-backdrop" @click="onBackdropClick">
            <div class="dialog-box">
                <div class="dialog-header">
                    <p v-if="title" class="dialog-title">{{ title }}</p>
                    <p v-if="description" class="dialog-description">{{ description }}</p>

                    <hr v-if="!!title" />
                    <button v-if="showClose" @click="handleClose" class="dialog-close-btn" aria-label="Close dialog">
                        <CloseIcon />
                    </button>
                </div>

                <div class="dialog-content">
                    <slot />
                </div>

                <div class="bottom-actions">
                    <DialogActions :cancelDisabled="props.actionProps?.cancelDisabled"
                        :submitDisabled="props.actionProps?.submitDisabled" :showCancel="props.actionProps?.showCancel"
                        :showSubmit="props.actionProps?.showSubmit" :handleCancel="handleCancel"
                        :handleSubmit="handleSave" fullWidth />
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.dialog-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px 0;
}

.dialog-box {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    width: fit-content;
    max-height: 80vh;
    position: relative;
    overflow: hidden;
    animation: fadeIn 0.2s ease-out;

    @media (max-width: 678px) {
        margin-inline: 6px;
        width: 100%;
    }
}

.dialog-header {
    position: relative;
    flex-shrink: 0;
}

.dialog-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0px;
    padding-inline: 24px;
}

.dialog-description {
    font-size: 16px;
    color: #1D1D1D;
    font-weight: 400;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-inline: 24px;
}

.dialog-close-btn {
    position: absolute;
    top: 0px;
    right: 16px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 4px;
}

.dialog-content {
    overflow-x: hidden;
    max-height: calc(80vh - 100px);
    padding-inline: 24px;
    box-sizing: border-box;
    padding-bottom: 80px;
}

.bottom-actions {
    position: sticky;
    bottom: 0;
    width: 100%;
    background-color: white;
    padding-inline: 24px;
    display: flex;
    justify-content: stretch;
    z-index: 10;
    box-sizing: border-box;
}

/* Make buttons inside DialogActions stretch */
.bottom-actions :deep(button) {
    flex: 1;
    margin: 0 8px;
    width: 100%;
}

hr {
    border: 0.5px solid #D5D7DA;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.98);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
