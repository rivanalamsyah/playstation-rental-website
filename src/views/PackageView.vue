<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { packagesData } from '../data/packages'; // Now importing data and implicitly types if needed (or separately)
import { useCurrency } from '../composables/useCurrency';

const { formatPrice } = useCurrency();
const filter = ref('all');

const filteredPaket = computed(() => {
    if (filter.value === 'all') return packagesData;
    return packagesData.filter(p => p.type === filter.value);
});
</script>

<template>
    <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <span class="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Katalog Lengkap</span>
            <h2 class="text-4xl font-display font-bold text-white">Pilih Paket Rental</h2>
        </div>

        <!-- Filters -->
        <div class="flex justify-center gap-2 mb-12 flex-wrap">
            <button v-for="cat in ['all', 'PS5', 'PS4']" :key="cat"
                @click="filter = cat"
                class="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border"
                :class="filter === cat ? 'bg-white text-brand-bg border-white' : 'bg-transparent text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white'">
                {{ cat === 'all' ? 'Semua Unit' : cat }}
            </button>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="paket in filteredPaket" :key="paket.id" class="glass-panel rounded-2xl overflow-hidden hover-card-effect flex flex-col group h-full">
                <!-- Image Area -->
                <div class="relative h-64 overflow-hidden bg-slate-800">
                    <img :src="paket.image" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" alt="Console Image">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent"></div>
                    <div class="absolute top-4 right-4 bg-brand-primary/90 backdrop-blur text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                        Best Seller
                    </div>
                </div>

                <!-- Content -->
                <div class="p-6 flex-grow flex flex-col">
                    <div class="mb-4">
                        <p class="text-xs text-brand-primary font-bold uppercase mb-1">{{ paket.type }} Series</p>
                        <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{{ paket.name }}</h3>
                    </div>
                    
                    <div class="space-y-3 mb-8">
                        <div class="flex items-center gap-3 text-sm text-slate-400">
                            <i class="fa-solid fa-gamepad w-5 text-center text-slate-500"></i>
                            <span>{{ paket.controllers }} DualSense Controller</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-slate-400">
                            <i class="fa-solid fa-layer-group w-5 text-center text-slate-500"></i>
                            <span>{{ paket.games_count }} Games Digital</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-slate-400">
                            <i class="fa-solid fa-tv w-5 text-center text-slate-500"></i>
                            <span>4K HDR @120Hz Ready</span>
                        </div>
                    </div>

                    <div class="mt-auto pt-6 border-t border-white/5 flex items-end justify-between">
                        <div>
                            <p class="text-xs text-slate-500 mb-1">Harga Mulai</p>
                            <p class="text-2xl font-display font-bold text-white">Rp {{ formatPrice(paket.price_daily) }}</p>
                        </div>
                        <RouterLink :to="{ name: 'detail', params: { id: paket.id }}" class="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary transition-all group">
                            <i class="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <!-- Accessories Section (New) -->
        <div class="mt-24 mb-24">
            <h2 class="text-3xl font-display font-bold text-white mb-8 text-center">Aksesoris Tambahan</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <div class="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition group">
                    <div class="w-20 h-20 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors text-slate-500 text-3xl">
                        <i class="fa-solid fa-gamepad"></i>
                    </div>
                    <h3 class="text-white font-bold mb-1">Extra DualSense</h3>
                    <p class="text-brand-primary font-bold">Rp 25.000 <span class="text-slate-500 text-xs font-normal">/hari</span></p>
                 </div>
                 <div class="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition group">
                    <div class="w-20 h-20 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors text-slate-500 text-3xl">
                        <i class="fa-solid fa-headset"></i>
                    </div>
                    <h3 class="text-white font-bold mb-1">Headset Gaming</h3>
                    <p class="text-brand-primary font-bold">Rp 30.000 <span class="text-slate-500 text-xs font-normal">/hari</span></p>
                 </div>
                 <div class="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition group">
                    <div class="w-20 h-20 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors text-slate-500 text-3xl">
                        <i class="fa-solid fa-display"></i>
                    </div>
                    <h3 class="text-white font-bold mb-1">Monitor 24" 144Hz</h3>
                    <p class="text-brand-primary font-bold">Rp 50.000 <span class="text-slate-500 text-xs font-normal">/hari</span></p>
                 </div>
                 <div class="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition group">
                    <div class="w-20 h-20 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors text-slate-500 text-3xl">
                        <i class="fa-solid fa-vr-cardboard"></i>
                    </div>
                    <h3 class="text-white font-bold mb-1">PS VR2 (Coming Soon)</h3>
                    <p class="text-slate-500 font-bold text-sm">Waiting List</p>
                 </div>
            </div>
        </div>

        <!-- Spec Comparison Table (New) -->
        <div class="mt-16 pb-12">
             <div class="glass-panel rounded-2xl overflow-hidden border border-white/5">
                <div class="p-8 border-b border-white/5 text-center">
                    <h2 class="text-3xl font-display font-bold text-white">Perbandingan Unit</h2>
                    <p class="text-slate-400 mt-2">Pilih yang sesuai dengan kebutuhan gaming Anda.</p>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-white/5">
                                <th class="p-6 text-sm font-bold text-slate-400 uppercase tracking-wider">Features</th>
                                <th class="p-6 text-xl font-bold text-white text-center">PS4 Slim</th>
                                <th class="p-6 text-xl font-bold text-white text-center">PS4 Pro</th>
                                <th class="p-6 text-xl font-bold text-brand-primary text-center">PS5 Digital</th>
                                <th class="p-6 text-xl font-bold text-brand-primary text-center">PS5 Disc</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-white/5 text-sm">
                            <tr>
                                <td class="p-6 font-bold text-slate-300">Resolusi Max</td>
                                <td class="p-6 text-center text-slate-400">1080p HDR</td>
                                <td class="p-6 text-center text-slate-400">4K Upscale</td>
                                <td class="p-6 text-center text-white font-bold">4K Native 120Hz</td>
                                <td class="p-6 text-center text-white font-bold">4K Native 120Hz</td>
                            </tr>
                            <tr>
                                <td class="p-6 font-bold text-slate-300">Loading Speed</td>
                                <td class="p-6 text-center text-slate-400">Standard HDD</td>
                                <td class="p-6 text-center text-slate-400">Standard HDD</td>
                                <td class="p-6 text-center text-brand-success font-bold">Ultra Fast SSD</td>
                                <td class="p-6 text-center text-brand-success font-bold">Ultra Fast SSD</td>
                            </tr>
                            <tr>
                                <td class="p-6 font-bold text-slate-300">Ray Tracing</td>
                                <td class="p-6 text-center text-slate-500"><i class="fa-solid fa-xmark"></i></td>
                                <td class="p-6 text-center text-slate-500"><i class="fa-solid fa-xmark"></i></td>
                                <td class="p-6 text-center text-brand-success"><i class="fa-solid fa-check"></i></td>
                                <td class="p-6 text-center text-brand-success"><i class="fa-solid fa-check"></i></td>
                            </tr>
                            <tr>
                                <td class="p-6 font-bold text-slate-300">Disc Drive</td>
                                <td class="p-6 text-center text-slate-400">Yes (Blu-ray)</td>
                                <td class="p-6 text-center text-slate-400">Yes (Blu-ray)</td>
                                <td class="p-6 text-center text-slate-500">No (Digital Only)</td>
                                <td class="p-6 text-center text-brand-success">Yes (4K Blu-ray)</td>
                            </tr>
                            <tr>
                                <td class="p-6 font-bold text-slate-300">Game Exclusive</td>
                                <td class="p-6 text-center text-slate-400">Standard Lib</td>
                                <td class="p-6 text-center text-slate-400">Standard Lib</td>
                                <td class="p-6 text-center text-white font-bold">Next-Gen Exclusives</td>
                                <td class="p-6 text-center text-white font-bold">Next-Gen Exclusives</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
        </div>
    </div>
</template>
