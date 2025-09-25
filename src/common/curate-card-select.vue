<script setup lang="ts">
// import curateimage from "@/assets/image/curate-image.png";
import CircleEmptyIcon from "@/components/icons/circle-empty-icon.vue";
import CircleFilledIcon from "@/components/icons/circle-filled-icon.vue";

type CurateCardSelectProps = {
    selected: boolean;
    name: string;
    image: string;
};

const props = defineProps<CurateCardSelectProps>();

const emit = defineEmits<{
    (e: "select"): void;
}>();

function handleSelect() {
    emit("select");
}
</script>

<template>
    <div @click="handleSelect" class="curate-card">
        <div class="curate-header">
            <div class="curate-icon">
                <component :is="props.selected ? CircleFilledIcon : CircleEmptyIcon" />
            </div>
            <div class="curate-text">
                <p>{{ props.name }}</p>
            </div>
        </div>
        <img class="curate-image" :src="props.image" alt="Curate Image" />
    </div>
</template>

<style scoped>
.curate-card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 4px;
    transition: opacity 0.2s ease-in-out;
    margin-bottom: 10px;
}

.curate-card:hover {
    opacity: 0.7;
}

.curate-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
}

.curate-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.curate-text {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    margin-top: 0;
}

.curate-image {
    width: 100%;
    max-width: 100%;
    border-radius: 8px;
    object-fit: cover;
}

p {
    margin: 0;
}
</style>
