<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { packagesData } from '../data/packages';
import type { Package } from '../types';
import { useCurrency } from '../composables/useCurrency';

const route = useRoute();
const itemId = computed(() => Number(route.params.id));
const item = computed(() => packagesData.find(p => p.id === itemId.value) as Package | undefined);

const relatedPackages = computed(() => {
    return packagesData.filter(p => p.id !== itemId.value).slice(0, 3);
});
const { formatPrice } = useCurrency();

const selectedDuration = ref(1);
const startDate = ref(new Date().toISOString().split('T')[0]);
const extraController = ref(0);
const extraControllerPrice = 25000;

const basePrice = computed(() => {
    if (!item.value) return 0;
    let price = item.value.price_daily * selectedDuration.value;
    if (selectedDuration.value === 3) price = price * 0.90; 
    if (selectedDuration.value === 7) price = price * 0.80; 
    return price;
});

const extraPrice = computed(() => extraController.value * extraControllerPrice * selectedDuration.value);
const totalPrice = computed(() => basePrice.value + extraPrice.value);

const whatsappMessage = computed(() => {
    if (!item.value) return '';
    const durasiText = selectedDuration.value === 1 ? '1 Hari (24 Jam)' : `${selectedDuration.value} Hari`;
    const stikText = extraController.value > 0 ? `+ ${extraController.value} Extra Stick` : '-';
    
    return `👋 Halo Admin, saya mau sewa unit:
━━━━━━━━━━━━━━
🎮 *${item.value.name}*
📅 Tgl: ${startDate.value}
⏳ Durasi: ${durasiText}
🕹 Extra: ${stikText}
━━━━━━━━━━━━━━
💰 *Total: Rp ${formatPrice(totalPrice.value)}*

Apakah unit tersedia?`;
});

const whatsappLink = computed(() => `https://wa.me/6285591142923?text=${encodeURIComponent(whatsappMessage.value)}`);
</script>

<template>
    <div class="min-h-screen pb-20">
        <div v-if="item" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Header Actions -->
            <div class="mb-8">
                <RouterLink to="/paket" class="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                    <i class="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i> Kembali ke Katalog
                </RouterLink>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <!-- Left: Gallery & Specs (8 cols) -->
                <div class="lg:col-span-8 space-y-10">
                    <div class="rounded-3xl overflow-hidden border border-white/10 relative bg-slate-800 aspect-video">
                        <img :src="item.image" class="w-full h-full object-cover">
                    </div>
                    
                    <!-- Specs Tabs -->
                    <div class="space-y-6">
                        <h3 class="text-xl font-display font-bold text-white border-b border-white/10 pb-4">Spesifikasi & Kelengkapan</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="glass-panel p-4 rounded-xl flex items-start gap-4">
                                <div class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-brand-success shrink-0"><i class="fa-solid fa-check"></i></div>
                                <div>
                                    <h4 class="text-white font-bold text-sm">Mesin Terawat</h4>
                                    <p class="text-slate-400 text-xs mt-1">Suhu stabil, fan silent, firmware terbaru.</p>
                                </div>
                            </div>
                            <div class="glass-panel p-4 rounded-xl flex items-start gap-4">
                                <div class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-brand-success shrink-0"><i class="fa-solid fa-check"></i></div>
                                <div>
                                    <h4 class="text-white font-bold text-sm">{{ item.controllers }}x Controller</h4>
                                    <p class="text-slate-400 text-xs mt-1">Baterai sehat, analog presisi (no drift).</p>
                                </div>
                            </div>
                            <div class="glass-panel p-4 rounded-xl flex items-start gap-4">
                                <div class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-brand-success shrink-0"><i class="fa-solid fa-check"></i></div>
                                <div>
                                    <h4 class="text-white font-bold text-sm">Full Games</h4>
                                    <p class="text-slate-400 text-xs mt-1">Akses library game digital & fisik.</p>
                                </div>
                            </div>
                            <div class="glass-panel p-4 rounded-xl flex items-start gap-4">
                                <div class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-brand-success shrink-0"><i class="fa-solid fa-check"></i></div>
                                <div>
                                    <h4 class="text-white font-bold text-sm">Tas & Kabel</h4>
                                    <p class="text-slate-400 text-xs mt-1">HDMI 2.1, Power, USB-C, Tas Travel.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Games List -->
                    <div>
                        <h3 class="text-xl font-display font-bold text-white border-b border-white/10 pb-4 mb-6">Game Terinstall</h3>
                        <div class="flex flex-wrap gap-3">
                            <span v-for="game in item.games" :key="game" class="px-4 py-2 bg-slate-800 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 hover:border-brand-primary/50 hover:text-white transition cursor-default">
                                {{ game }}
                            </span>
                            <span class="px-4 py-2 bg-brand-primary/10 text-brand-primary text-sm font-bold rounded-lg cursor-pointer hover:bg-brand-primary/20 transition">
                                + Request Lainnya
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Right: Sticky Booking Widget (4 cols) -->
                <div class="lg:col-span-4">
                    <div class="lg:sticky lg:top-24 space-y-6">
                        <div class="glass-panel p-6 rounded-2xl border-t-4 border-t-brand-primary shadow-2xl shadow-black/50">
                            <div class="mb-6">
                                <h1 class="text-2xl font-bold text-white">{{ item.name }}</h1>
                                <p class="text-slate-400 text-sm mt-2 leading-relaxed">{{ item.desc }}</p>
                            </div>

                            <!-- Step 1: Duration -->
                            <div class="mb-6">
                                <label class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 block">Pilih Durasi</label>
                                <div class="grid grid-cols-3 gap-2">
                                    <button v-for="d in [1, 3, 7]" :key="d" 
                                        @click="selectedDuration = d"
                                        class="py-3 px-2 rounded-xl border transition-all relative overflow-hidden group"
                                        :class="selectedDuration === d ? 'bg-brand-primary border-brand-primary text-white shadow-lg' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'">
                                        <div v-if="d > 1" class="absolute top-0 right-0 bg-brand-accent text-[#0B0E14] text-[9px] font-bold px-1.5 py-0.5 rounded-bl-lg">HEMAT</div>
                                        <div class="text-lg font-bold">{{ d }} Hari</div>
                                        <div class="text-[10px] opacity-70">{{ d === 1 ? 'Normal' : 'Diskon' }}</div>
                                    </button>
                                </div>
                            </div>

                            <!-- Step 2: Date & Extras -->
                            <div class="space-y-4 mb-8">
                                <div>
                                    <label class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Tanggal Mulai</label>
                                    <input type="date" v-model="startDate" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition">
                                </div>
                                <div class="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-700">
                                    <div class="flex items-center gap-3">
                                        <div class="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400"><i class="fa-solid fa-plus"></i></div>
                                        <div class="text-sm text-slate-300 font-medium">Extra Stick (+25rb)</div>
                                    </div>
                                    <div class="flex items-center gap-3 bg-slate-800 rounded-lg p-1">
                                        <button @click="extraController > 0 ? extraController-- : 0" class="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white">-</button>
                                        <span class="text-white text-sm font-bold w-4 text-center">{{ extraController }}</span>
                                        <button @click="extraController++" class="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white">+</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Total & Action -->
                            <div class="border-t border-dashed border-slate-700 pt-6">
                                <div class="flex justify-between items-end mb-6">
                                    <span class="text-slate-400 text-sm">Total Estimasi</span>
                                    <span class="text-3xl font-display font-bold text-white tracking-tight">Rp {{ formatPrice(totalPrice) }}</span>
                                </div>
                                <a :href="whatsappLink" target="_blank" class="w-full py-4 bg-brand-success hover:bg-[#0ea371] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-900/20 group">
                                    <i class="fa-brands fa-whatsapp text-xl group-hover:scale-110 transition-transform"></i>
                                    Pesan via WhatsApp
                                </a>
                                <p class="text-center text-slate-500 text-xs mt-4">Admin akan memverifikasi jadwal ketersediaan.</p>
                            </div>
                        </div>
                        
                        <!-- Preview Message Mini -->
                        <div class="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                            <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold text-center">Preview Pesan Otomatis</p>
                            <div class="text-xs text-slate-400 font-mono bg-black/30 p-3 rounded border border-white/5 whitespace-pre-line leading-relaxed">
                                {{ whatsappMessage }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Packages (New) -->
        <div class="mt-20 border-t border-white/5 pt-12">
            <h2 class="text-2xl font-display font-bold text-white mb-8">Unit Lainnya</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <RouterLink v-for="related in relatedPackages" :key="related.id" :to="{name: 'detail', params: {id: related.id}}" class="glass-panel p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition group">
                      <div class="w-20 h-20 rounded-lg bg-slate-800 overflow-hidden shrink-0">
                           <img :src="related.image" class="w-full h-full object-cover">
                      </div>
                      <div>
                          <p class="text-xs text-brand-primary font-bold uppercase">{{ related.type }}</p>
                          <h4 class="text-white font-bold group-hover:text-blue-400 transition-colors">{{ related.name }}</h4>
                          <p class="text-slate-400 text-xs mt-1">Rp {{ formatPrice(related.price_daily) }} /hari</p>
                      </div>
                 </RouterLink>
            </div>
        </div>

         <!-- Mobile Sticky Footer Action -->
        <div v-if="item" class="md:hidden fixed bottom-0 left-0 w-full glass-nav border-t border-slate-700 p-4 z-40 flex items-center gap-4 safe-pb">
            <div class="flex-1">
                <div class="text-[10px] text-slate-400 uppercase font-bold">Total</div>
                <div class="text-xl font-bold text-white">Rp {{ formatPrice(totalPrice) }}</div>
            </div>
            <a :href="whatsappLink" target="_blank" class="flex-1 bg-brand-success text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg">
                <i class="fa-brands fa-whatsapp"></i> Booking
            </a>
        </div>
        
        <div v-else class="text-center py-20 text-slate-400">
            Unit tidak ditemukan.
            <RouterLink to="/paket" class="text-brand-primary underline ml-2">Kembali ke Katalog</RouterLink>
        </div>
    </div>
</template>
