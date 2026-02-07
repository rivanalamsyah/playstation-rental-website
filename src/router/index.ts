import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PackageView from '../views/PackageView.vue'
import DetailView from '../views/DetailView.vue'
import HowToView from '../views/HowToView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home - GameZone Premium Rental',
        description: 'Sewa PS5 & PS4 terbaik di Jakarta. Unit ready stock, game terbaru, antar jemput.'
      }
    },
    {
      path: '/paket',
      name: 'paket',
      component: PackageView,
      meta: {
        title: 'Katalog Paket Sewa - GameZone',
        description: 'Daftar harga sewa PS5 & PS4 harian dan mingguan. Paket bundling game murah.'
      }
    },
    {
      path: '/paket/:id',
      name: 'detail',
      component: DetailView,
      meta: {
        title: 'Detail Paket - GameZone',
        description: 'Spesifikasi lengkap dan kelengkapan unit sewa.'
      }
    },
    {
      path: '/cara-rental',
      name: 'cara-rental',
      component: HowToView,
      meta: {
        title: 'Cara Sewa - GameZone',
        description: 'Panduan mudah menyewa PS5 di GameZone. Syarat KTP dan proses cepat.'
      }
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: ContactView,
      meta: {
        title: 'Hubungi Kami - GameZone',
        description: 'Kontak WhatsApp dan lokasi GameZone Rental Jakarta Selatan.'
      }
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string
  const description = to.meta.description as string

  if (title) {
    document.title = title
  }
  
  if (description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta)
    }
  }

  next()
})

export default router
