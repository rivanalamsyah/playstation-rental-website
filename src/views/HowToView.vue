<script setup lang="ts">
// Static content, no logic needed
</script>

<template>
    <div class="py-16 max-w-5xl mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-4">Cara Rental Mudah</h2>
            <p class="text-slate-400">Hanya butuh 4 langkah untuk mulai bermain.</p>
        </div>

        <div class="relative">
            <!-- Connecting Line (Desktop) -->
            <div class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                <!-- Step 1 -->
                <div class="group text-center">
                    <div class="w-24 h-24 mx-auto bg-brand-bg border border-slate-700 rounded-full flex items-center justify-center text-2xl font-bold text-slate-500 mb-6 shadow-xl group-hover:border-brand-primary group-hover:text-white transition-all duration-500 relative">
                        <span class="absolute inset-0 rounded-full bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></span>
                        1
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">Pilih Paket</h3>
                    <p class="text-sm text-slate-400 px-4">Tentukan konsol dan durasi sewa di halaman katalog.</p>
                </div>

                <!-- Step 2 -->
                <div class="group text-center">
                    <div class="w-24 h-24 mx-auto bg-brand-bg border border-slate-700 rounded-full flex items-center justify-center text-2xl font-bold text-slate-500 mb-6 shadow-xl group-hover:border-brand-primary group-hover:text-white transition-all duration-500 relative">
                            <span class="absolute inset-0 rounded-full bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></span>
                        2
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">Booking WA</h3>
                    <p class="text-sm text-slate-400 px-4">Klik tombol pesan, kirim format order ke admin kami.</p>
                </div>

                <!-- Step 3 -->
                <div class="group text-center">
                    <div class="w-24 h-24 mx-auto bg-brand-bg border border-slate-700 rounded-full flex items-center justify-center text-2xl font-bold text-slate-500 mb-6 shadow-xl group-hover:border-brand-primary group-hover:text-white transition-all duration-500 relative">
                            <span class="absolute inset-0 rounded-full bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></span>
                        3
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">Verifikasi</h3>
                    <p class="text-sm text-slate-400 px-4">Kirim foto KTP/Identitas untuk validasi data penyewa.</p>
                </div>

                <!-- Step 4 -->
                <div class="group text-center">
                    <div class="w-24 h-24 mx-auto bg-brand-bg border border-slate-700 rounded-full flex items-center justify-center text-2xl font-bold text-slate-500 mb-6 shadow-xl group-hover:border-brand-primary group-hover:text-white transition-all duration-500 relative">
                            <span class="absolute inset-0 rounded-full bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></span>
                        4
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">Unit Diantar</h3>
                    <p class="text-sm text-slate-400 px-4">Kurir mengantar unit, pasang, dan bayar di tempat (COD).</p>
                </div>
            </div>
        </div>

        <!-- Documents Section -->
        <div class="mt-20 glass-panel p-8 rounded-2xl border border-white/5">
            <h3 class="text-xl font-bold text-white mb-6 text-center">Dokumen Persyaratan</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-slate-800/50 p-6 rounded-xl border border-white/5 text-center">
                    <i class="fa-solid fa-id-card text-3xl text-blue-400 mb-4"></i>
                    <h4 class="text-white font-bold text-sm mb-2">KTP Asli</h4>
                    <p class="text-xs text-slate-400">Wajib dititipkan selama masa sewa sebagai jaminan utama.</p>
                </div>
                <div class="bg-slate-800/50 p-6 rounded-xl border border-white/5 text-center">
                    <i class="fa-solid fa-file-contract text-3xl text-purple-400 mb-4"></i>
                    <h4 class="text-white font-bold text-sm mb-2">Dokumen Pendukung</h4>
                    <p class="text-xs text-slate-400">Salah satu dari: SIM / STNK / KTM / KK (Hanya ditunjukkan).</p>
                </div>
                <div class="bg-slate-800/50 p-6 rounded-xl border border-white/5 text-center">
                    <i class="fa-solid fa-camera text-3xl text-green-400 mb-4"></i>
                    <h4 class="text-white font-bold text-sm mb-2">Foto Selfie</h4>
                    <p class="text-xs text-slate-400">Verifikasi wajah dengan memegang KTP saat pemesanan.</p>
                </div>
            </div>
        </div>

        <!-- Delivery Area (New) -->
        <div class="mt-20">
            <h2 class="text-2xl font-display font-bold text-white mb-8 text-center">Area Pengantaran</h2>
            <div class="glass-panel p-2 rounded-2xl border border-white/5 relative overflow-hidden h-96">
                <!-- Map Placeholder -->
                <div class="absolute inset-0 bg-slate-800 flex items-center justify-center">
                    <div class="text-center opacity-50">
                        <i class="fa-solid fa-map-location-dot text-6xl text-brand-primary mb-4"></i>
                        <p class="text-white font-bold">Peta Jangkauan Jakarta Selatan</p>
                    </div>
                    <!-- Decorative Circles -->
                    <div class="absolute w-64 h-64 border border-brand-primary/20 rounded-full animate-ping"></div>
                    <div class="absolute w-48 h-48 border border-brand-primary/40 rounded-full"></div>
                </div>
                
                <div class="absolute bottom-4 left-4 bg-black/80 backdrop-blur p-4 rounded-xl border border-white/10 max-w-xs">
                    <h4 class="text-white font-bold text-sm mb-2">Free Delivery Area:</h4>
                    <ul class="text-xs text-slate-400 space-y-1 list-disc pl-4">
                        <li>Tebet, Pancoran, Kalibata</li>
                        <li>Kuningan, Setiabudi</li>
                        <li>Mampang, Kemang</li>
                        <li>Pejaten, Pasar Minggu</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Rental Rules FAQ (New) -->
        <div class="mt-20 mb-20">
             <h2 class="text-2xl font-display font-bold text-white mb-8 text-center">Ketentuan Sewa</h2>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div class="glass-panel p-6 rounded-xl border-l-4 border-l-brand-accent">
                     <h4 class="text-white font-bold mb-2">Denda Keterlambatan</h4>
                     <p class="text-sm text-slate-400">Pengembalian unit maksimal jam 22.00 di hari terakhir. Lewat dari itu dikenakan denda Rp 20.000 / jam.</p>
                 </div>
                 <div class="glass-panel p-6 rounded-xl border-l-4 border-l-red-500">
                     <h4 class="text-white font-bold mb-2">Kerusakan Unit</h4>
                     <p class="text-sm text-slate-400">Penyewa bertanggung jawab penuh atas kerusakan fisik (jatuh, tersiram air, kabel putus) selama masa sewa.</p>
                 </div>
                 <div class="glass-panel p-6 rounded-xl border-l-4 border-l-blue-500">
                     <h4 class="text-white font-bold mb-2">Perpanjang Durasi</h4>
                     <p class="text-sm text-slate-400">Harap info admin H-1 sebelum masa sewa habis jika ingin memperpanjang (selama unit tidak dibooking orang lain).</p>
                 </div>
                 <div class="glass-panel p-6 rounded-xl border-l-4 border-l-green-500">
                     <h4 class="text-white font-bold mb-2">Pengembalian</h4>
                     <p class="text-sm text-slate-400">Tim kurir kami akan menjemput unit ke lokasi Anda sesuai jadwal yang disepakati.</p>
                 </div>
             </div>
        </div>
    </div>
</template>
