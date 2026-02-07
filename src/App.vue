<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const showScrollButton = ref(false)

const checkScroll = () => {
  showScrollButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />

    <!-- Main Content with Transitions -->
    <main class="flex-grow pt-20">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <FooterBar />

    <!-- Back to Top Button -->
    <button 
      @click="scrollToTop" 
      :class="{'translate-y-0 opacity-100': showScrollButton, 'translate-y-16 opacity-0': !showScrollButton}"
      class="fixed bottom-8 right-8 bg-brand-primary hover:bg-brand-primaryHover text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 transform"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
