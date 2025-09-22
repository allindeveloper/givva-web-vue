<script setup lang="ts">
type ButtonProps = {
    label: string;
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
    className?: string;
};

const buttonProps = defineProps<ButtonProps>();
</script>

<template>
    <button :type="buttonProps.type || 'button'" :class="buttonProps.className" :disabled="buttonProps.disabled">
        <slot class="start-icon" name="startIcon" />
        {{ buttonProps.label }}
    </button>
</template>

<style scoped>
button {
    background-color: #0A1207;
    border-radius: 100px;
    padding-inline: 44px;
    padding-block: 14px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    transition: opacity 0.2s ease-in-out;
}

button:hover {
    opacity: 0.8;
}
</style>
