<script setup lang="ts">
import { RouterLink } from "vue-router";
import PlusIcon from "./icons/plus-icon.vue";
import Button from "./button.vue";

interface WelcomeContainerProps {
    handleCreate?: () => void;
    title?: string;
    description?: string;
    showNavigation?: boolean;
}

defineProps<WelcomeContainerProps>();
</script>

<template>
    <div class="welcome-container">
        <div class="welcome-text">

            <p v-if="title" class="welcome-title">
                {{ title }}
            </p>

            <p v-if="description" class="welcome-description">
                {{ description }}
            </p>

            <div v-if="showNavigation" class="welcome-nav">
                <RouterLink to="/">Home</RouterLink>
                <span>-</span>
                <div>Details</div>
            </div>
        </div>

        <div v-if="handleCreate" class="welcome-button">
            <Button class="btn-create" label="Curate gift" :onClick="handleCreate">
                <template #startIcon>
                    <PlusIcon style="margin-right: 0.5rem;" />
                </template>
            </Button>
        </div>
    </div>
</template>

<style scoped>
.welcome-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.welcome-text {
    display: flex;
    flex-direction: column;
}

.welcome-title {
    color: #1D1D1DB2;
    font-weight: 400;
    font-family: "Degular", sans-serif;
    font-size: 24px;
    margin: 0;
}

.welcome-description {
    color: #1D1D1DE5;
    font-weight: 500;
    font-family: "Degular Medium", sans-serif;
    font-size: 32px;
    margin-bottom: 0;
    margin-top: 10px;
}

.welcome-nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #4b5563;
    margin-top: 0.5rem;
}

.welcome-button {
    margin-top: 1rem;
}

.btn-create {
    background-color: #4DA1FF;

}
</style>
