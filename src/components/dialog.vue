<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import CloseIcon from "./icons/close-icon.vue";

interface DialogProps {
    open: boolean;
    title?: string;
    description?: string;
    showClose?: boolean;
    handleSave?: () => void;
    handleCancel?: () => void;
}

const props = defineProps<DialogProps>();

const emit = defineEmits<{
    (e: "close"): void;
}>();

function handleClose() {
    emit("close");
}

function onBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
        handleClose();
    }
}

watch(
    () => props.open,
    (isOpen) => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }
);

onUnmounted(() => {
    document.body.style.overflow = "";
});
</script>

<template>
    <Teleport to="body">
        <div v-if="open" class="dialog-backdrop" @click="onBackdropClick">
            <div class="dialog-box">
                <p v-if="title" class="dialog-title">
                    {{ title }}
                </p>

                <p v-if="description" class="dialog-description">
                    {{ description }}
                </p>
                <hr v-if="!!title" />

                <button v-if="showClose" @click="handleClose" class="dialog-close-btn" aria-label="Close dialog">
                    <CloseIcon />
                </button>

                <div class="dialog-content">
                    <slot />
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

    @media (max-width: 678px) {
        align-items: start;
        padding-top: 20px;
    }
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

.dialog-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 20px;
    padding-inline: 24px;
}

.dialog-description {
    font-size: 16px;
    color: #1D1D1D;
    margin-bottom: 16px;
    margin-top: 10px;
    font-weight: 400;
    padding-inline: 24px;
}

.dialog-close-btn {
    position: absolute;
    top: 16px;
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
    padding-bottom: 40px;
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
