<script setup lang="ts">
import CollectionsIcon from './icons/collections-icon.vue';
import ExploreIcon from './icons/explore-icon.vue';
import HomeIcon from './icons/home-icon.vue';
import IdeasIcon from './icons/ideas-icon.vue';
import NotificationIcon from './icons/notification-icon.vue';
import ProfileIcon from './icons/profile-icon.vue';

const headerItems = [
    {
        label: "Home",
        icon: HomeIcon
    },
    {
        label: "Explore",
        icon: ExploreIcon
    },
    {
        label: "Collections",
        icon: CollectionsIcon
    },
    {
        label: "Ideas",
        icon: IdeasIcon
    },
    {
        label: "Profile",
        icon: ProfileIcon
    }
]
</script>
<template>
    <header>
        <div class="header-items">
            <div class="header-item" v-for="(item, index) in headerItems">
                <component v-if="item.icon" :key="index" :is="item.icon" />
                <spam>{{ item.label }}</spam>
            </div>
        </div>
        <div class="header-logos">
            <img class="profile-image" src="../assets/image/profile-image.png" alt="Precious Uchendu" />
            <NotificationIcon />
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;

    @media (max-width: 678px) {
        margin-inline: 6px;
    }
}

.header-items {
    display: flex;
    gap: 30px;

    @media (max-width: 678px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

.header-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

.header-logos {
    display: flex;
    gap: 10px;
    align-items: center;
}

.header-logos img {
    width: 40px;
    height: 40px;
}
</style>