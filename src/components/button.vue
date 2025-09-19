<script setup lang="ts">
type ButtonProps = {
    label: string;
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
    class?: string;
};

const buttonProps = defineProps<ButtonProps>();
</script>

<template>
    <button :type="buttonProps.type || 'button'" :class="buttonProps.class" :disabled="buttonProps.disabled">
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
    transition: opacity 0.2s ease-in-out;
}

button:hover {
    opacity: 0.8;
}
</style>