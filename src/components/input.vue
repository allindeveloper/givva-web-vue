<script setup lang="ts">
import type { Component } from 'vue';

type InputProps = {
    placeholder: string
    startIcon?: Component
}
const inputProps = defineProps<InputProps>()
</script>

<template>
    <div class="input-container">
        <component :is="inputProps.startIcon" />
        <input :placeholder="inputProps.placeholder" />
    </div>
</template>
<style scoped>
.input-container {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #F9FAFB;
    border-radius: 8px;
    width: 100%;
    height: 42px;
    padding-left: 10px;
    padding-right: 10px;
}

input {
    background-color: #F9FAFB;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    border: none;
    padding-right: 20px;
}

input:focus {
    outline: none;
}
</style>