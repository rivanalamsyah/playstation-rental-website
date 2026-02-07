<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
const isMobileMenuOpen = ref(false);

const closeMenu = () => {
    isMobileMenuOpen.value = false;
};
</script>

<template>
    <nav class="fixed w-full z-50 glass-nav transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <!-- Logo -->
                <div class="flex items-center gap-3 group cursor-pointer" @click="router.push('/')">
                    <div class="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                        <i class="fa-solid fa-gamepad text-lg"></i>
                    </div>
                    <div class="flex flex-col">
                        <span class="font-display font-bold text-xl tracking-tight text-white leading-none">GAME<span class="text-brand-primary">ZONE</span></span>
                        <span class="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Premium Rental</span>
                    </div>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center gap-8">
                    <RouterLink to="/" class="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2" active-class="text-brand-primary">Beranda</RouterLink>
                    <RouterLink to="/paket" class="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2" active-class="text-brand-primary">Katalog</RouterLink>
                    <RouterLink to="/cara-rental" class="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2" active-class="text-brand-primary">Cara Sewa</RouterLink>
                    <RouterLink to="/kontak" class="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2" active-class="text-brand-primary">Bantuan</RouterLink>
                    
                    <div class="h-6 w-px bg-slate-700 mx-2"></div>
                    
                    <a href="https://wa.me/6281234567890" target="_blank" class="group relative px-6 py-2.5 bg-brand-primary hover:bg-brand-primaryHover text-white text-sm font-bold rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center gap-2 overflow-hidden">
                        <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <span>Booking</span>
                        <i class="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                    </a>
                </div>

                <!-- Mobile Toggle -->
                <div class="flex md:hidden">
                    <button @click="isMobileMenuOpen = !isMobileMenuOpen" type="button" class="w-10 h-10 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                        <i class="fa-solid text-xl" :class="isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <transition enter-active-class="transition duration-200 ease-out" enter-from-class="transform -translate-y-4 opacity-0" enter-to-class="transform translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="transform translate-y-0 opacity-100" leave-to-class="transform -translate-y-4 opacity-0">
            <div v-show="isMobileMenuOpen" class="md:hidden glass-nav border-t border-slate-800">
                <div class="px-4 pt-4 pb-6 space-y-2">
                    <RouterLink @click="closeMenu" to="/" class="block px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition" active-class="text-brand-primary bg-white/5">Beranda</RouterLink>
                    <RouterLink @click="closeMenu" to="/paket" class="block px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition" active-class="text-brand-primary bg-white/5">Katalog Paket</RouterLink>
                    <RouterLink @click="closeMenu" to="/cara-rental" class="block px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition" active-class="text-brand-primary bg-white/5">Cara Sewa</RouterLink>
                    <RouterLink @click="closeMenu" to="/kontak" class="block px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition" active-class="text-brand-primary bg-white/5">Hubungi Kami</RouterLink>
                </div>
            </div>
        </transition>
    </nav>
</template>
