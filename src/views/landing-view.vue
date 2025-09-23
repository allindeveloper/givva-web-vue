<script setup lang="ts">
import LandingImage from '../components/icons/landing-image-icon.vue'
import Button from '../components/button.vue';
import BlueSmileyIcon from '@/components/icons/blue-smiley-icon.vue';
import SpiralOneIcon from '@/components/icons/spiral-one-icon.vue';
import DotOneIcon from '@/components/icons/dot-one-icon.vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const goToHome = () => {
  router.push('/home')
}
</script>

<template>
  <main>
    <div class="container">
      <div class="root">
        <div class="leftsection">
          <div class="dot-one">
            <DotOneIcon />
          </div>
          <BlueSmileyIcon />
          <h1>Givva.</h1>
          <p>
            Find the perfect gift in seconds!
          </p>
          <Button @click="goToHome" className="btn-get-started" label="Get started" />
          <div class="spiralone">
            <SpiralOneIcon />
          </div>
        </div>
        <div>
          <LandingImage />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.btn-get-started {
  width: 236px;
}

main {
  background-color: white;

}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

h1 {
  color: #191919;
  font-size: 88px;
  font-weight: 900;
  width: 100%;
  margin-top: 10px;
}

p {
  font-weight: 600;
  font-size: 48px;
  margin-bottom: 70px;
}

.root {
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  align-items: center;

  @media (max-width: 678px) {
    display: block;
  }
}

.leftsection {
  position: relative;
}

.spiralone {
  position: absolute;
  bottom: 54px;
  left: 230px;
}

.dot-one {
  position: absolute;
  top: -90px;
  left: -60px;
}
</style>