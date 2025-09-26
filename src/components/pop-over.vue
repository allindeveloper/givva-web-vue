<script setup>
import { ref, reactive, nextTick, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
    action: {
        type: [Object, Function, String],
        required: true,
    },
    content: {
        type: [Object, Function, String],
        required: true,
    },
});

const isOpen = ref(false);
const popoverWrapper = ref(null);
const popoverContent = ref(null);
const popoverStyle = reactive({
    left: "0px",
    right: "auto",
});

const togglePopover = async () => {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
        await nextTick();
        adjustPopoverPosition();
    }
};

const adjustPopoverPosition = () => {
    const wrapperRect = popoverWrapper.value?.getBoundingClientRect();
    const contentRect = popoverContent.value?.getBoundingClientRect();

    const spaceLeft = wrapperRect.left;
    const spaceRight = window.innerWidth - wrapperRect.right;

    popoverStyle.left = "auto";
    popoverStyle.right = "0px";

    if (spaceLeft < contentRect.width && spaceRight > contentRect.width) {
        popoverStyle.left = "auto";
        popoverStyle.right = "0px";
    }
};

const handleClickOutside = (event) => {
    if (
        popoverWrapper.value &&
        !popoverWrapper.value.contains(event.target)
    ) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", adjustPopoverPosition);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
    window.removeEventListener("resize", adjustPopoverPosition);
});
</script>

<template>
    <div class="popover-wrapper" ref="popoverWrapper">
        <!-- Action Element -->
        <div @click="togglePopover" class="popover-action">
            <component :is="action" />
        </div>

        <!-- Popover Content -->
        <transition name="fade">
            <div v-if="isOpen" class="popover-content" :style="popoverStyle" ref="popoverContent">
                <component :is="content" />
            </div>
        </transition>
    </div>
</template>

<style scoped>
.popover-wrapper {
    position: relative;
    display: inline-block;
}

.popover-action {
    cursor: pointer;
}

.popover-content {
    position: absolute;
    top: 100%;
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 8px 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-top: 8px;
    z-index: 10;
    min-width: 250px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
