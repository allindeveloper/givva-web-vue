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
        icon: HomeIcon,
        link: "/"
    },
    {
        label: "Explore",
        icon: ExploreIcon,
        link: "/explore"
    },
    {
        label: "Collections",
        icon: CollectionsIcon,
        link: "/collections"
    },
    {
        label: "Ideas",
        icon: IdeasIcon,
        link: "/ideas"
    },
    {
        label: "Profile",
        icon: ProfileIcon,
        link: "/profile"
    }
]
</script>
<template>
    <header>
        <div class="header-items">
            <div class="header-item" v-for="(item, index) in headerItems">
                <component v-if="item.icon" :key="index" :is="item.icon" />
                <span>{{ item.label }}</span>
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

    span {
        color: #1C1B1F;
        font-weight: 400;
        transition: color 0.2s ease-in-out;
    }
}

.header-item {

    span:hover {
        color: #4DA1FF;
    }
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