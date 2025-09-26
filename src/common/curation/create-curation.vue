<script setup lang="ts">
import { nextTick, ref } from 'vue';
import Dialog from '@/components/dialog.vue';
import type { CreateCurationFormType, Gift } from '@/types/curation';
import { useRoute, useRouter } from 'vue-router';
import CreateCurationForm from './create-curation-form.vue';
import CreateCurationSuccess from './create-curation-success.vue';
import type { FormMeta } from 'vee-validate';

const router = useRouter()
const route = useRoute()
type CreateCurationProps = {
    showDialog: boolean;
    handleCloseDialog: () => void
    handleSaveCuration: (data: CreateCurationFormType) => void;
    handleDetailsCallback: () => void;
};

const props = defineProps<CreateCurationProps>();

const showSuccessDialog = ref(false);
const curateCreateStep = ref(1);
const formMeta = ref<FormMeta<CreateCurationFormType>>()
const giftTypes = ref<Gift[]>([]);

const handleSave = async (data: CreateCurationFormType) => {
    props.handleSaveCuration(data)
    showSuccessDialog.value = true;
};

const handleCancelCuration = () => {
    props.handleCloseDialog()
};

const handleDetails = () => {
    showSuccessDialog.value = false;

    props.handleDetailsCallback()
};

const handleGoHome = () => {
    showSuccessDialog.value = false;
    router.push('/home');
};

const handleStepChange = (newStep: number) => {
    curateCreateStep.value = newStep;
};

const handleFormMetaCallback = (meta: FormMeta<CreateCurationFormType>) => {
    formMeta.value = meta
}

const handleGiftTypeSelected = (params: Gift[]) => {
    giftTypes.value = params
}

</script>

<template>
    <main>
        <Dialog
            :actionProps="{ submitDisabled: curateCreateStep === 1 ? !formMeta?.valid : giftTypes.length === 0, showCancel: curateCreateStep === 2, showSubmit: true }"
            :open="props.showDialog" title="Create a Gift" description="Please fill the input field below"
            :showClose="true" @close="props.handleCloseDialog">

            <CreateCurationForm @gift-types-selected="handleGiftTypeSelected" @form-meta="handleFormMetaCallback"
                @step-change="handleStepChange" :handleCancel="handleCancelCuration" :handleCreate="handleSave" />
        </Dialog>

        <Dialog :actionProps="{ showCancel: false, showSubmit: false }" :open="showSuccessDialog" :showClose="false"
            @close="showSuccessDialog = false">
            <CreateCurationSuccess :handleGoHome="handleGoHome" :handleDetails="handleDetails" />
        </Dialog>
    </main>
</template>

<style scoped></style>
