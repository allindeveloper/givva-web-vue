<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import curateimage from '@/assets/image/curate-image.png'

const props = defineProps<{
    name?: string
    description?: string
    id?: string
    detailsPage?: boolean
    giftType?: string
}>()
</script>

<template>
    <component :is="props.detailsPage ? 'div' : RouterLink"
        v-bind="!props.detailsPage ? { to: `/curation/${props.id}` } : {}" class="card-wrapper">
        <img :src="curateimage" alt="Curate Image" class="card-image" />

        <p v-if="props.name" class="card-name">
            {{ props.name }}
        </p>

        <p v-if="props.description" class="card-description">
            {{ props.description }}
        </p>

        <p v-if="props.detailsPage && props.giftType" class="card-gift-type">
            {{ props.giftType }}
        </p>
    </component>
</template>

<style scoped>
.card-wrapper {
    transition: opacity 0.2s ease-in-out;
    text-decoration: none;
}

.card-wrapper:hover {
    opacity: 0.7;
}

.card-image {
    display: block;
    width: 207px;
    height: 161px;

    @media (max-width: 678px) {
        width: 100%;
    }
}

.card-name {
    color: #191919;
    margin-top: 20px;
    font-weight: 500;
    font-size: 22.5px;
    margin-bottom: 0;
}

.card-description {
    color: #9C9C9E;
    font-weight: 400;
    font-size: 16.9px;
    margin: 6px 0;
}

.card-gift-type {
    color: #252B37;
    font-weight: 600;
    font-size: 16.9px;
}
</style>
