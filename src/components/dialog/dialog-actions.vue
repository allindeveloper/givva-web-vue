<script lang="ts" setup>
import type { DialogActionProps } from '@/types/dialog';
import Button from '../button.vue';


const props = defineProps<DialogActionProps>();

</script>
<template>
    <div class="step-two-actions">
        <Button v-if="showCancel" :label="props.cancelText ?? 'Cancel'" type="reset" @click="handleCancel"
            className="cancel-button" />
        <Button v-if="showSubmit" type="submit" :disabled="props.submitDisabled" :label="props.submitText ?? 'Save'"
            className="save-button" @click="handleSubmit" />
    </div>
</template>

<style scoped>
.step-two-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
}

.cancel-button {
    background: #FDFDFD;
    border: 1px solid #D5D7DA;
    box-shadow: 0px 1px 2px 0px #0A0D120D;
    color: #292929;
    font-weight: 500;
    font-size: 14px;
}

.save-button {
    background: #4DA1FF;
}
</style>