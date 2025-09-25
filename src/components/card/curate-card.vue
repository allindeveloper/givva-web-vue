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
    image?: string
    cardImageClassName?: string
    count?: number
}>()
</script>

<template>
    <component :is="props.detailsPage ? 'div' : RouterLink"
        v-bind="!props.detailsPage ? { to: `/curation/${props.id}` } : {}"
        :class="!props.detailsPage ? 'card-wrapper' : 'card-wrapper-default'">
        <img :src="props.image || curateimage" alt="Curate Image" :class="['card-image', props.cardImageClassName]" />
        <div v-if="!!props.count" class="count">
            {{ props.count }}
        </div>
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
.count {
    background-color: #FFFFFF33;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #FFFFFF;
    font-size: 22px;
    top: 14px;
    right: 14px;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
}

.card-wrapper {
    transition: opacity 0.2s ease-in-out;
    text-decoration: none;
    position: relative;
}

.card-wrapper:hover {
    opacity: 0.7;
}

.card-wrapper-default {
    transition: opacity 0.2s ease-in-out;
    text-decoration: none;
    position: relative;
}

.card-image {
    display: block;
    width: 208px;
    height: 138px;

    @media (max-width: 678px) {
        width: 100%;
        height: 124px;
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
