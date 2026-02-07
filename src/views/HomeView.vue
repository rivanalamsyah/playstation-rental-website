<script setup lang="ts">
import { RouterLink } from 'vue-router'

const games = [
    { title: 'God of War Ragnarok', image: '/images/game-god-of-war.jpg' },
    { title: 'GTA V', image: '/images/game-gta-v.png' }, 
    { title: 'God of War', image: '/images/game-god-of-war.jpg' },
    { title: 'Grand Theft Auto V', image: '/images/game-gta-v.png' },
    { title: 'Ragnarok', image: '/images/game-god-of-war.jpg' },
    { title: 'GTA 5', image: '/images/game-gta-v.png' },
    { title: 'God of War 2', image: '/images/game-god-of-war.jpg' },
    { title: 'GTA Online', image: '/images/game-gta-v.png' }
]
</script>

<template>
    <div>
        <!-- Hero Section -->
        <div class="relative pt-16 pb-32 overflow-hidden">
            <!-- Background FX -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
            <div class="absolute bottom-0 right-0 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10 opacity-30"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-8 hover:bg-white/10 transition cursor-default">
                    <span class="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
                    Unit Ready Stock Hari Ini
                </div>
                
                <h1 class="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
                    Next-Gen Gaming <br> 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-300">On Demand.</span>
                </h1>
                
                <p class="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Rasakan performa PS5 dan kelengkapan library game terbaru tanpa harus membeli.
                    Diantar langsung ke depan pintu Anda dalam hitungan jam.
                </p>
                
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <RouterLink to="/paket" class="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-primaryHover text-white font-bold rounded-xl transition-all shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)] hover:transform hover:-translate-y-1">
                        Lihat Katalog Unit
                    </RouterLink>
                    <RouterLink to="/cara-rental" class="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all">
                        Pelajari Cara Sewa
                    </RouterLink>
                </div>
            </div>
        </div>

        <!-- Stats Grid -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-24 relative z-20">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition duration-300 border-t-4 border-t-brand-primary">
                    <div class="text-3xl font-display font-bold text-white mb-1">500+</div>
                    <div class="text-xs text-slate-400 font-bold uppercase tracking-widest">User Aktif</div>
                </div>
                <div class="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition duration-300 border-t-4 border-t-purple-500">
                    <div class="text-3xl font-display font-bold text-white mb-1">24 Jam</div>
                    <div class="text-xs text-slate-400 font-bold uppercase tracking-widest">Support</div>
                </div>
                <div class="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition duration-300 border-t-4 border-t-brand-accent">
                    <div class="text-3xl font-display font-bold text-white mb-1">100%</div>
                    <div class="text-xs text-slate-400 font-bold uppercase tracking-widest">Original</div>
                </div>
                <div class="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition duration-300 border-t-4 border-t-brand-success">
                    <div class="text-3xl font-display font-bold text-white mb-1">45 Mnt</div>
                    <div class="text-xs text-slate-400 font-bold uppercase tracking-widest">Avg. Delivery</div>
                </div>
            </div>
        </div>

        <!-- Features / Value Prop -->
        <div class="py-20 bg-brand-surface/30 border-y border-white/5">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div class="space-y-8">
                        <div>
                            <h2 class="text-3xl font-display font-bold text-white mb-4">Kenapa Memilih <span class="text-brand-primary">GameZone?</span></h2>
                            <p class="text-slate-400 leading-relaxed">Kami bukan sekadar rental biasa. Kami memastikan setiap unit dalam kondisi prima (sanitized), stik responsif, dan library game selalu update setiap minggu.</p>
                        </div>
                        
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                                    <i class="fa-solid fa-microchip text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-1">Performa Maksimal</h4>
                                    <p class="text-sm text-slate-400">Unit dibersihkan rutin, pasta pendingin diganti berkala. No overheat.</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                                    <i class="fa-solid fa-gamepad text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-1">Stik Anti-Drift</h4>
                                    <p class="text-sm text-slate-400">Kami menggunakan controller original yang dikalibrasi secara rutin.</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 shrink-0">
                                    <i class="fa-solid fa-truck-fast text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-1">Antar Jemput Instan</h4>
                                    <p class="text-sm text-slate-400">Kurir internal kami siap mengantar dan memasang unit di rumah Anda.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="absolute inset-0 bg-brand-primary/20 blur-3xl -z-10 rounded-full"></div>
                        <img src="/images/ps5-digital.png" class="rounded-3xl border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition duration-500 w-full" alt="PS5 Console">
                    </div>
                </div>
            </div>
        </div>

        <!-- Latest Games Marquee (New) -->
        <div class="py-16 overflow-hidden relative">
             <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-10"></div>
             <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-10"></div>
             
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <span class="text-brand-primary font-bold tracking-widest uppercase text-xs mb-2 block">New Arrivals</span>
                <h2 class="text-2xl font-display font-bold text-white">Game Terbaru Minggu Ini</h2>
             </div>

             <div class="flex gap-6 animate-[scroll_20s_linear_infinite] w-max hover:pause">
                <!-- Duplicate this block for infinite scroll effect ideally, usually needs JS or CSS trick, simple flex for now -->
                <div v-for="(game, i) in games" :key="i" class="w-48 h-72 rounded-xl overflow-hidden relative group shrink-0 border border-white/10 hover:border-brand-primary transition-all cursor-pointer">
                    <img :src="game.image" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span class="text-white font-bold text-sm">{{ game.title }}</span>
                    </div>
                </div>
             </div>
        </div>

        <!-- Testimonials (New) -->
        <div class="py-20 bg-brand-surface/20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-display font-bold text-white mb-4">Kata Mereka</h2>
                    <p class="text-slate-400">Pengalaman nyata dari gamers Jakarta Selatan.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="(review, idx) in [
                        { name: 'Dimas Anggara', role: 'Mahasiswa', text: 'Nyewa buat mabar FIFA ama temen kosan. Stik enak banget masih baru, ga drift sama sekali. Recommended!', rating: 5 },
                        { name: 'Sarah Wijaya', role: 'Karyawan', text: 'Admin fast respon banget. Jam 8 malem chat, jam 9 udah sampe unitnya. Penyelamat weekend gabut.', rating: 5 },
                        { name: 'Budi Santoso', role: 'Freelancer', text: 'Udah langganan 3x disini. Paling suka karena game nya update terus. Tekken 8 udah ada dong.', rating: 5 }
                    ]" :key="idx" class="glass-panel p-8 rounded-2xl relative">
                        <i class="fa-solid fa-quote-right absolute top-8 right-8 text-4xl text-white/5"></i>
                        <div class="flex gap-1 text-brand-accent mb-6">
                            <i v-for="n in review.rating" :key="n" class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-slate-300 mb-8 leading-relaxed">"{{ review.text }}"</p>
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full bg-slate-700 overflow-hidden">
                                <img :src="`https://placehold.co/100x100/png?text=${review.name.charAt(0)}`" alt="Avatar">
                            </div>
                            <div>
                                <h4 class="text-white font-bold text-sm">{{ review.name }}</h4>
                                <p class="text-slate-500 text-xs">{{ review.role }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- FAQ Section (New) -->
        <div class="py-20 max-w-4xl mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-display font-bold text-white mb-4">Sering Ditanyakan</h2>
            </div>
            
            <div class="space-y-4">
                <div v-for="(faq, i) in [
                    { q: 'Apakah ada uang jaminan?', a: 'Tidak ada deposit uang. Cukup titipkan e-KTP asli sebagai jaminan keamanan unit.' },
                    { q: 'Bagaimana jika unit rusak saat dipakai?', a: 'Kerusakan software/system ditanggung kami. Kerusakan fisik (jatuh, kena air, kabel putus) menjadi tanggung jawab penyewa.' },
                    { q: 'Apakah game bisa request?', a: 'Bisa banget! List game request kamu saat booking, admin akan installkan sebelum unit dikirim (jika storage cukup).' },
                    { q: 'Area pengantaran mana saja?', a: 'Saat ini fokus di Jakarta Selatan (Tebet, Pancoran, Kalibata, Kemang, Kuningan). Diluar itu kena ongkir tambahan.' }
                ]" :key="i" class="glass-panel rounded-xl overflow-hidden group">
                    <button class="w-full text-left p-6 flex items-center justify-between text-white font-bold hover:bg-white/5 transition">
                        <span>{{ faq.q }}</span>
                        <i class="fa-solid fa-chevron-down text-slate-500 group-hover:text-white transition"></i>
                    </button>
                    <div class="px-6 pb-6 text-slate-400 text-sm leading-relaxed hidden group-hover:block transition-all">
                        {{ faq.a }}
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="py-24 px-4">
            <div class="max-w-5xl mx-auto glass-panel p-12 rounded-3xl text-center relative overflow-hidden border border-brand-primary/30">
                <div class="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[80px] -z-10"></div>
                <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[80px] -z-10"></div>
                
                <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-6">Siap Untuk Bermain Weekend Ini?</h2>
                <p class="text-slate-400 mb-8 max-w-xl mx-auto">Slot terbatas di akhir pekan. Amankan unit Anda sekarang sebelum kehabisan.</p>
                <RouterLink to="/paket" class="inline-block bg-white text-brand-bg px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition transform hover:-translate-y-1">
                    Cek Ketersediaan Unit
                </RouterLink>
            </div>
        </div>
    </div>
</template>
