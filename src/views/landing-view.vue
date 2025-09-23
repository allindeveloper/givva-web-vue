<script setup lang="ts">
import Button from '../components/button.vue';
import BlueSmileyIcon from '@/components/icons/blue-smiley-icon.vue';
import SpiralOneIcon from '@/components/icons/spiral-one-icon.vue';
import DotOneIcon from '@/components/icons/dot-one-icon.vue';
import { useRouter } from 'vue-router';
import LandingImageIcon from '../components/icons/landing-image-icon.vue';
import SpiralTwoIcon from '@/components/icons/spiral-two-icon.vue';
import DotTwoIcon from '@/components/icons/dot-two-icon.vue';
import DotThreeIcon from '@/components/icons/dot-three-icon.vue';
import DotFourIcon from '@/components/icons/dot-four-icon.vue';
import DotFiveIcon from '@/components/icons/dot-five-icon.vue';
import DotSixIcon from '@/components/icons/dot-six-icon.vue';
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
          <div class="blue-smiley">
            <BlueSmileyIcon />
            <div class="spiral-two">
              <SpiralTwoIcon />
            </div>
            <div class="dot-three">
              <DotThreeIcon />
            </div>

          </div>

          <div class="dot-six">
            <DotSixIcon />
          </div>
          <h1>Givva.</h1>
          <p>
            Find the perfect gift in seconds!
          </p>
          <div class="dot-five">
            <DotFiveIcon />
          </div>
          <Button @click="goToHome" className="btn-get-started" label="Get started" />
          <div class="spiralone">
            <SpiralOneIcon />
          </div>
          <div class="dot-two">
            <DotTwoIcon />
          </div>
          <div class="dot-four">
            <DotFourIcon />
          </div>
        </div>
        <div>
          <LandingImageIcon className="right-image" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.right-image {
  width: 100%;
  max-width: 600px;
}

.btn-get-started {
  width: 236px;
  height: 56px;
  padding-inline: 0px;
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
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  align-items: center;

  @media (max-width: 678px) {
    display: block;
    margin-inline: 8px;
  }
}

.leftsection {
  position: relative;
}

.spiralone {
  position: absolute;
  bottom: 54px;
  left: 270px;
}

.spiral-two {
  position: absolute;
  top: -50px;
  left: 180px;
}

.dot-one {
  position: absolute;
  top: -90px;
  left: -60px;
}

.dot-two {
  position: absolute;
  bottom: 20px;
  right: 140px;
}

.dot-three {
  position: absolute;
  top: -80px;
  left: 195px;
}

.dot-four {
  position: absolute;
  top: -20px;
  right: 90px;
}

.dot-five {
  position: absolute;
  top: 220px;
  left: -80px;
}

.dot-six {
  position: absolute;
  top: 70px;
  right: 45%;
}

.blue-smiley {
  position: relative;
}
</style>