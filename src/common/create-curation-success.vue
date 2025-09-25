<script setup lang="ts">
import Button from "@/components/button.vue";
import SuccessIcon from "@/components/icons/success-icon.vue";

const props = defineProps<{
    handleDetails: () => void;
    handleGoHome: () => void;
}>();

</script>

<template>
    <div class="root">
        <div class="success-icon">
            <SuccessIcon />
        </div>
        <div class="content-container">
            <p>Your Gift Package Is Ready!</p>
            <p>
                Your selections have been saved. You can view the curated details or start curating another.
            </p>
        </div>
        <Button @click="props.handleGoHome" className="go-home-btn" label="Go home" />

        <Button @click="props.handleDetails" className="view-details-btn" label="View details" />

    </div>
</template>

<style scoped>
.root {
    margin-bottom: 10px;
    width: 450px;
    margin-inline: auto;

    @media (max-width: 678px) {
        width: 100%;
    }
}

.go-home-btn {
    background: #4DA1FF;
}

.view-details-btn {
    background: #F5F5F5;
    color: #252B37;
    margin-top: 20px;
}

.success-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
}

.content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 40px;
    text-align: center;

    p:first-child {
        color: #1D1D1D;
        font-weight: 600;
        font-size: 24px;
        margin: 0;
    }

    p:nth-child(2) {
        color: #1D1D1D;
        font-weight: 400;
        font-size: 14px;
    }
}
</style>