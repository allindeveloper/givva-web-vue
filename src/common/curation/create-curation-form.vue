<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";
import { useForm, type FormMeta } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { CreateCurationFormSchema, type CreateCurationFormType, type Gift } from "@/types/curation";
import Textarea from "@/components/textarea.vue";
import NoteIcon from "@/components/icons/note-icon.vue";
import Select from "@/components/select.vue";
import RelationshipIcon from "@/components/icons/relationship-icon.vue";
import OccassionIcon from "@/components/icons/occassion-icon.vue";
import InterestsIcon from "@/components/icons/interests-icon.vue";
import AgeRangeIcon from "@/components/icons/age-range-icon.vue";
import Input from "@/components/input.vue";
import AccountIcon from "@/components/icons/account-icon.vue";
import { ageRanges, dummyGifts, ocassionData, relationshipData } from "@/data/dummy-curations";
import CurateCardSelect from "@/components/card/curate-card-select.vue";

const props = defineProps<{
    handleCreate: (data: CreateCurationFormType) => void;
    handleCancel: () => void;
}>();
const emit = defineEmits<{
    (e: 'stepChange', step: number): void
    (e: 'formMeta', meta: FormMeta<CreateCurationFormType>): void
    (e: 'giftTypesSelected', giftType: Gift[]): void
}>();

const step = ref(1);
const giftTypes = ref<Gift[]>([]);


const { handleSubmit, errors, values, validate, meta, setFieldValue } = useForm<CreateCurationFormType>({
    validationSchema: toTypedSchema(CreateCurationFormSchema),
    validateOnMount: false,
    initialValues: {
        name: "",
        note: "",
        ageRange: "",
        relationship: "",
        occassion: "",
        interests: "",
    },
});

onMounted(() => {
    Object.keys(values).forEach(key => {
        setFieldValue(key as keyof CreateCurationFormType, values[key as keyof CreateCurationFormType], false);
    });
});

const onSubmit = handleSubmit(() => {
    step.value = 2;
    emit('stepChange', 2);
});

const handleSelectGift = (gift: Gift) => {
    const index = giftTypes.value.findIndex(g => g.name === gift.name);
    if (index >= 0) {
        giftTypes.value.splice(index, 1);
    } else {
        giftTypes.value.push(gift);
    }
    emit("giftTypesSelected", giftTypes.value)
};

watch(meta, (newMeta) => {
    emit('formMeta', newMeta);
}, {
    deep: false,
    immediate: true
});

const handleSave = async () => {
    const { valid } = await validate();
    if (!valid) {
        return
    }
    if (step.value === 1) {
        step.value = 2
        emit('stepChange', 2);
        await nextTick();
        return;
    }
    emit('stepChange', 1);
    props.handleCreate({
        ...values,
        giftTypes: giftTypes.value,
    });
};

function setupDialogListeners() {
    const handleDialogSave = () => {
        handleSave()
    }

    const handleDialogCancel = () => {
        emit('stepChange', 1);
        props.handleCancel()
    }

    const handleDialogClose = () => {
        emit('stepChange', 1);
        props.handleCancel()
    }

    window.addEventListener('dialog-close', handleDialogClose)
    window.addEventListener('dialog-save', handleDialogSave)
    window.addEventListener('dialog-cancel', handleDialogCancel)

    return () => {
        window.removeEventListener('dialog-close', handleDialogClose)
        window.removeEventListener('dialog-save', handleDialogSave)
        window.removeEventListener('dialog-cancel', handleDialogCancel)
    }
}

onMounted(() => {
    setupDialogListeners()
})

</script>

<template>
    <div class="root">
        <div v-if="step === 1">
            <form @submit="onSubmit">
                <Input customClass="input-field" placeholder="e.g Turning 25th" label="Curation name"
                    :modelValue="values.name" @update:modelValue="setFieldValue('name', $event)"
                    :labelIcon="AccountIcon" :errorMessage="errors.name" />

                <Select :modelValue="values.ageRange" @update:modelValue="setFieldValue('ageRange', $event)"
                    :items="ageRanges" label="Age range" placeholder="Select" :labelIcon="AgeRangeIcon"
                    :errorMessage="errors.ageRange" />

                <Select :modelValue="values.relationship" @update:modelValue="setFieldValue('relationship', $event)"
                    :items="relationshipData" label="Relationship" placeholder="Select" :labelIcon="RelationshipIcon"
                    :errorMessage="errors.relationship" />

                <Input customClass="input-field" placeholder="e.g tech, books" label="Interest"
                    :modelValue="values.interests" @update:modelValue="setFieldValue('interests', $event)"
                    :labelIcon="InterestsIcon" :errorMessage="errors.interests" />

                <Select :modelValue="values.occassion" @update:modelValue="setFieldValue('occassion', $event)"
                    :items="ocassionData" label="Occassion" placeholder="Select" :labelIcon="OccassionIcon"
                    :errorMessage="errors.occassion" />

                <Textarea className="input-field" placeholder="Any other thing you want us to know" label="Note"
                    :modelValue="values.note" @update:modelValue="setFieldValue('note', $event)" :labelIcon="NoteIcon"
                    :errorMessage="errors.note" />

            </form>
        </div>

        <div v-else-if="step === 2" class="step-two-container">
            <div class="gift-select">
                <CurateCardSelect v-for="(gift, index) in dummyGifts" :key="index" :selected="giftTypes.includes(gift)"
                    :name="gift.name" :image="gift.image" @click="handleSelectGift(gift)" />
            </div>

        </div>
    </div>
</template>

<style scoped>
.root {
    width: 497px;
    margin-inline: auto;
    position: relative;
    margin-top: 20px;

    @media (max-width: 678px) {
        width: 100%;
    }
}

.gift-select {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
    margin-top: 20px;
}

:deep(.input-field) {
    box-shadow: 0px 1px 2px 0px #1018280D;
    border: 1px solid #D0D5DD;
    background: #fff;
}

.submit-button {
    margin-top: 20px;
    background-color: #4DA1FF;
}

.step-two-container {
    margin-bottom: 0px;
}
</style>