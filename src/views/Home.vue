<template>
  <div class="top"></div>
  <Navbar />
  <Hero />
  <Info />
  <Discover />
  <Roadmap />
  <Subscribe />
  <Footer />
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Info from '@/components/Info.vue'
import Discover from '@/components/Discover.vue'
import Roadmap from '@/components/Roadmap.vue'
import Subscribe from '@/components/Subscribe.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {Navbar, Hero, Info, Discover, Roadmap, Subscribe, Footer},

}
</script>

<style scoped>
  
</style>