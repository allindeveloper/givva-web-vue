<script setup lang="ts">

type ButtonProps = {
    label: string
    type?: 'submit' | 'reset'
    disabled?: boolean;
}

const buttonProps = defineProps<ButtonProps>()
</script>
<template>
    <button v-bind:type="buttonProps.type">
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
}
</style>