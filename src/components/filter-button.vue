<script setup lang="ts">
import FilterIcon from "./icons/filter-icon.vue";

type ButtonProps = {
    className?: string;
};

const buttonFilterProps = defineProps<ButtonProps>();
</script>

<template>
    <button :class="buttonFilterProps.className">
        <FilterIcon />
        Filters
    </button>
</template>

<style scoped>
button {
    border: 1px solid #D5D7DA;
    box-shadow: 0px 1px 2px 0px #0A0D120D;
    cursor: pointer;
    text-align: center;
    width: 88px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}

button:hover {
    opacity: 0.8;
}

button:disabled {
    opacity: 0.4;
    cursor: default;
}
</style>
