<script setup lang="ts">
// Static content mostly
</script>

<template>
    <div class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <span class="text-brand-primary font-bold tracking-widest uppercase text-xs mb-2 block">Customer Service</span>
                <h2 class="text-4xl font-display font-bold text-white mb-6">Hubungi Kami</h2>
                <p class="text-slate-400 mb-10 leading-relaxed">
                    Ada pertanyaan seputar ketersediaan unit, jangkauan area antar, atau ingin melaporkan kendala teknis? Tim support kami standby siap membantu Anda.
                </p>

                <div class="space-y-6">
                    <a href="https://wa.me/6285591142923?text=Halo%20Admin%20GameZone,%20saya%20butuh%20bantuan%20support." target="_blank" class="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-white/5 hover:bg-slate-800/50 transition cursor-pointer group">
                        <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-white shrink-0 group-hover:bg-brand-success transition-colors">
                            <i class="fa-brands fa-whatsapp text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold">WhatsApp Admin</h4>
                            <p class="text-slate-400 text-sm mb-1">0855 91142923</p>
                            <span class="inline-block px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wide">Online</span>
                        </div>
                    </a>
                    <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-white/5">
                        <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-white shrink-0">
                            <i class="fa-solid fa-location-dot text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold">Lokasi Store</h4>
                            <p class="text-slate-400 text-sm">Jl. Tebet Raya No. 123, Jakarta Selatan</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="glass-panel p-8 rounded-2xl border border-white/5">
                <h3 class="text-xl font-bold text-white mb-6">Kirim Pesan Email</h3>
                <form @submit.prevent class="space-y-5">
                    <div class="grid grid-cols-2 gap-5">
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-slate-500 uppercase">Nama</label>
                            <input type="text" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition">
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-slate-500 uppercase">No. HP</label>
                            <input type="text" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition">
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-xs font-bold text-slate-500 uppercase">Pesan</label>
                        <textarea rows="4" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition"></textarea>
                    </div>
                    <button class="w-full bg-slate-100 hover:bg-white text-slate-900 font-bold py-4 rounded-xl transition shadow-lg">
                        Kirim Pesan
                    </button>
                </form>
            </div>
        </div>

        <!-- Map & Hours (New) -->
        <div class="mt-20">
            <div class="glass-panel rounded-2xl overflow-hidden border border-white/5">
                <div class="grid grid-cols-1 md:grid-cols-3">
                     <!-- Hours -->
                     <div class="p-8 bg-slate-900/50">
                         <h3 class="text-xl font-bold text-white mb-6">Jam Operasional</h3>
                         <ul class="space-y-4">
                             <li class="flex justify-between text-sm">
                                 <span class="text-slate-400">Senin - Jumat</span>
                                 <span class="text-white font-bold">10:00 - 20:00</span>
                             </li>
                             <li class="flex justify-between text-sm">
                                 <span class="text-slate-400">Sabtu</span>
                                 <span class="text-white font-bold">09:00 - 21:00</span>
                             </li>
                             <li class="flex justify-between text-sm">
                                 <span class="text-slate-400">Minggu</span>
                                 <span class="text-white font-bold">09:00 - 18:00</span>
                             </li>
                         </ul>
                         <div class="mt-8 pt-6 border-t border-white/5">
                             <p class="text-xs text-slate-500">Note: Chat WhatsApp tetap aktif hingga jam 23.00.</p>
                         </div>
                     </div>
                     
                     <!-- Map -->
                     <div class="md:col-span-2 relative h-full min-h-[300px] bg-slate-800">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.176467364868!2d106.84883391295286!3d-6.223594875681024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3a613271791%3A0x67ee1c0704337b5d!2sTebet%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1716383672535!5m2!1sen!2sid" width="100%" height="100%" style="border:0; filter: grayscale(100%) invert(90%) contrast(80%);" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>
