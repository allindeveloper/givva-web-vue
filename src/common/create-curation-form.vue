<script setup lang="ts">
import { ref, reactive } from "vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import Button from "@/components/button.vue";
import { CreateCurationFormSchema, type CreateCurationFormType } from "@/types/curation";
import Textarea from "@/components/textarea.vue";
import NoteIcon from "@/components/icons/note-icon.vue";
import Select from "@/components/select.vue";
import RelationshipIcon from "@/components/icons/relationship-icon.vue";
import OccassionIcon from "@/components/icons/occassion-icon.vue";
import InterestsIcon from "@/components/icons/interests-icon.vue";
import AgeRangeIcon from "@/components/icons/age-range-icon.vue";
import Input from "@/components/input.vue";
import AccountIcon from "@/components/icons/account-icon.vue";
import CurateCardSelect from "./curate-card-select.vue";

const props = defineProps<{
    handleCreate: (data: CreateCurationFormType) => void;
}>();

const step = ref(1);
const giftTypes = ref<string[]>([]);

const ageRanges = [
    { label: "9-15", value: "9-15" },
    { label: "15-30", value: "15-30" },
    { label: "30-35", value: "30-35" },
];

const relationshipData = [
    { label: "Single", value: "single" },
    { label: "Married", value: "married" },
    { label: "Divorced", value: "divorced" },
];

const dummyGifts = ["Cake", "Bag", "Heels", "Glasses", "Bracelet", "Shoes"];

const { handleSubmit, errors, values: formValues } = useForm<CreateCurationFormType>({
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


const onSubmit = handleSubmit(() => {
    step.value = 2;
});

const handleSelectGift = (gift: string) => {
    if (giftTypes.value.includes(gift)) {
        giftTypes.value = giftTypes.value.filter((g) => g !== gift);
    } else {
        giftTypes.value.push(gift);
    }
};

const handleSave = () => {
    props.handleCreate({
        ...formValues,
        giftTypes: giftTypes.value,
    });
};
</script>

<template>
    <div class="h-[576px]">
        <div v-if="step === 1">
            <form @submit="onSubmit">
                <Input customClass="input-field" placeholder="e.g Turning 25th" label="Curation name"
                    v-model="formValues.name" :labelIcon="AccountIcon" :errorMessage="errors.name" />

                <Select v-model="formValues.ageRange" :items="relationshipData" label="Age range" placeholder="Select"
                    :labelIcon="AgeRangeIcon" :errorMessage="errors.ageRange" />

                <Select v-model="formValues.relationship" :items="ageRanges" label="Relationship" placeholder="Select"
                    :labelIcon="RelationshipIcon" :errorMessage="errors.relationship" />

                <Input customClass="input-field" placeholder="e.g tech, books" label="Interest"
                    v-model="formValues.interests" :labelIcon="AccountIcon" :errorMessage="errors.interests" />

                <Select v-model="formValues.occassion" :items="relationshipData" label="Occassion" placeholder="Select"
                    :labelIcon="OccassionIcon" :errorMessage="errors.occassion" />

                <Textarea className="input-field" placeholder="e.g Turning 25th" label="Note" v-model="formValues.note"
                    :labelIcon="NoteIcon" :errorMessage="errors.note" />

                <div>
                    <Button label="Curate" type="submit" className="submit-button" />
                </div>
            </form>
        </div>

        <div v-else-if="step === 2" class="step-two-container">
            <div class="gift-select">
                <CurateCardSelect v-for="(gift, index) in dummyGifts" :key="index" :selected="giftTypes.includes(gift)"
                    :name="gift" @click="handleSelectGift(gift)" />
            </div>

            <div class="step-two-actions">
                <Button label="Cancel" type="reset" class="" />
                <Button label="Save" class="" @click="handleSave" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.gift-select {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
}

:deep(.input-field) {
    box-shadow: 0px 1px 2px 0px #1018280D;
    border: 1px solid #D0D5DD;
    background: #fff;
}

.submit-button {
    margin-top: 20px;
    background-color: #4DA1FF;
    margin-bottom: 30px;
}

.step-two-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>