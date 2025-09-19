<script setup lang="ts">
import CloseIcon from "./icons/close-icon.vue";

interface DialogProps {
    open: boolean;
    title?: string;
    description?: string;
    showClose?: boolean;
}

const props = defineProps<DialogProps>();
const emit = defineEmits<{
    (e: "close"): void;
}>();

function handleClose() {
    emit("close");
}
</script>

<template>
    <Teleport to="body">
        <div v-if="open" class="fixed inset-0 bg-dark-custom-4 flex items-center justify-center z-50">
            <div class="bg-white rounded-2xl shadow-xl w-[597px] p-6 relative">
                <p v-if="title" class="text-xl font-semibold mb-4">
                    {{ title }}
                </p>

                <p v-if="description" class="text-primary font-degular font-normal text-base">
                    {{ description }}
                </p>

                <button v-if="showClose" @click="handleClose" class="absolute top-10 right-10 cursor-pointer"
                    aria-label="Close dialog">
                    <CloseIcon />
                </button>

                <div class="overflow-y-auto">
                    <slot />
                </div>
            </div>
        </div>
    </Teleport>
</template>