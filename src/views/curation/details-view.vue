<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { getCurationById } from '@/utils/curation-storage'
import CurateCard from '@/components/card/curate-card.vue'
import AgeRangeIcon from '@/components/icons/age-range-icon.vue'
import RelationshipIcon from '@/components/icons/relationship-icon.vue'
import OccassionIcon from '@/components/icons/occassion-icon.vue'
import InterestsIcon from '@/components/icons/interests-icon.vue'
import Header from '@/components/header.vue';
import ActionHeaderContainer from '@/components/action-header-container.vue'

const route = useRoute()
const router = useRouter()

const id = route.params.id as string

const curationDetails = getCurationById(id ?? '')

const handleGoBack = () => {
    router.back()
}
</script>

<template>
    <div class="curation-details-container">
        <Header />
        <!-- <div class="header">
            <p class="back-link" @click="handleGoBack">Back</p>

        </div> -->
        <div class="action-header-container">
            <ActionHeaderContainer :showNavigation="true" :title="curationDetails?.name" />
        </div>

        <div class="details-card">
            <div class="details-row">
                <div class="details-label">
                    <AgeRangeIcon />
                    <span class="label-text">Age range</span>
                </div>
                <div>
                    <span class="label-value">{{ curationDetails?.ageRange }}</span>
                </div>
            </div>

            <div class="details-row">
                <div class="details-label">
                    <RelationshipIcon />
                    <span class="label-text">Relationship</span>
                </div>
                <div>
                    <span class="label-value">{{ curationDetails?.relationship }}</span>
                </div>
            </div>

            <div class="details-row">
                <div class="details-label">
                    <OccassionIcon />
                    <span class="label-text">Occassion</span>
                </div>
                <div>
                    <span class="label-value">{{ curationDetails?.occassion }}</span>
                </div>
            </div>

            <div class="details-row">
                <div class="details-label">
                    <InterestsIcon />
                    <span class="label-text">Interests</span>
                </div>
                <div>
                    <span class="label-value">{{ curationDetails?.interests }}</span>
                </div>
            </div>
        </div>

        <hr class="divider" />

        <div class="curation-grid">
            <div v-for="(gift, index) in curationDetails?.giftTypes" :key="index">
                <CurateCard :detailsPage="true" :name="gift" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.action-header-container {
    margin-top: 60px;
    margin-bottom: 20px;
}

.curation-details-container {
    max-width: 1220px;
    margin: 0 auto;
    width: 100%;
}

.label-value {
    font-weight: 400;
    font-size: 16px;
    color: #252B37;
}

.header {
    margin-top: 40px;
}

.back-link {
    cursor: pointer;
    margin-bottom: 16px;
    display: inline-block;
    font-weight: 500;
}

.details-card {
    background-color: #F2F2F2;
    padding: 24px 36px;
    border-radius: 20px;
    margin-top: 26px;
}

.details-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
}

.details-row:last-child {
    border-bottom: none;
}

.details-label {
    display: flex;
    align-items: center;
    gap: 8px;
}

.label-text {
    font-weight: 500;
    font-size: 14px;
    color: #344054;
}

.divider {
    border: 1px solid #E9EAEB;
    margin: 50px 0 50px;
}

.curation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 30px;
}

.curate-card {
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    border: 1px solid #ddd;
}
</style>
