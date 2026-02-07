<script setup lang="ts">
</script>

<template>
    <footer class="border-t border-slate-800 bg-[#080a0f] mt-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
                <!-- Brand & Contact -->
                <div class="md:col-span-4 space-y-6">
                    <div class="flex items-center gap-2">
                        <span class="font-display font-bold text-2xl text-white">GAME<span class="text-brand-primary">ZONE</span></span>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed max-w-sm">
                        Menyediakan pengalaman gaming terbaik dengan perangkat terawat dan pelayanan profesional. Siap antar ke seluruh area Jakarta Selatan.
                    </p>
                    
                    <div class="space-y-3 mt-4">
                         <div class="flex items-start gap-3 text-slate-400 text-sm">
                            <i class="fa-solid fa-user mt-1 text-brand-primary"></i>
                            <span>Rivan Alamsyah</span>
                        </div>
                        <div class="flex items-start gap-3 text-slate-400 text-sm">
                            <i class="fa-solid fa-envelope mt-1 text-brand-primary"></i>
                            <a href="mailto:alamsyahrivan14@gmail.com" class="hover:text-white transition">alamsyahrivan14@gmail.com</a>
                        </div>
                        <div class="flex items-start gap-3 text-slate-400 text-sm">
                            <i class="fa-brands fa-whatsapp mt-1 text-brand-primary"></i>
                            <a href="https://wa.me/6285591142923?text=Halo%20GameZone,%20saya%20ingin%20tanya-tanya%20seputar%20rental%20PS." target="_blank" class="hover:text-white transition">0855 91142923</a>
                        </div>
                    </div>

                    <div class="flex gap-4 pt-2">
                        <a href="https://instagram.com/rivanalamsyah" target="_blank" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://github.com/rivanalamsyah" target="_blank" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gray-100 hover:text-black transition-all"><i class="fa-brands fa-github"></i></a>
                        <a href="https://wa.me/6285591142923?text=Halo%20GameZone,%20saya%20ingin%20tanya-tanya%20seputar%20rental%20PS." target="_blank" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-success hover:text-white transition-all"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>

                <!-- Google Maps -->
                <div class="md:col-span-8">
                     <h4 class="text-white font-display font-bold mb-6">Lokasi Kami</h4>
                     <div class="w-full h-64 rounded-xl overflow-hidden glass-panel border border-white/10">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.96205705359!2d106.7323835!3d-6.2842007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b423%3A0xbc014a27c1500c2c!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1707321000000!5m2!1sid!2sid" 
                            width="100%" 
                            height="100%" 
                            style="border:0;" 
                            allowfullscreen="true" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                     </div>
                </div>
            </div>
            
            <div class="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <p>&copy; {{ new Date().getFullYear() }} GameZone Rental Indonesia. All rights reserved.</p>
                <div class="flex gap-6">
                    <span>Jakarta Selatan</span>
                    <span>•</span>
                    <span>Est. 2020</span>
                </div>
            </div>
        </div>
    </footer>
</template>
