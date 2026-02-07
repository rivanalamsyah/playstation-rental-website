import type { Package } from '../types';

export const packagesData: Package[] = [
    { id: 1, type: 'PS5', model: 'PlayStation 5', name: 'PS5 Digital Edition', desc: 'Versi digital only. Loading super cepat dengan SSD.', price_daily: 200000, controllers: 2, games: ['FC 24', 'Spider-Man 2', 'God of War', 'GTA V'], games_count: 15, image: '/images/ps5-digital.png' },
    { id: 2, type: 'PS5', model: 'PlayStation 5', name: 'PS5 Disc Edition', desc: 'Versi disc drive. Bisa main kaset fisik & digital.', price_daily: 220000, controllers: 2, games: ['Elden Ring', 'Tekken 8', 'RE 4 Remake', 'COD MW3'], games_count: 20, image: '/images/ps5-digital.png' },
    { id: 3, type: 'PS4', model: 'PlayStation 4', name: 'PS4 Pro 1TB', desc: 'Resolusi 4K upscaled. Performa stabil 60 FPS.', price_daily: 120000, controllers: 2, games: ['PES 2021', 'Naruto Storm 4', 'MotoGP 23', 'It Takes Two'], games_count: 30, image: '/images/ps4-console.jpg' },
    { id: 4, type: 'PS4', model: 'PlayStation 4', name: 'PS4 Slim Bundle', desc: 'Paket hemat & lengkap. Game paling banyak.', price_daily: 100000, controllers: 2, games: ['FIFA 23', 'CTR Nitro', 'MK 11', 'Lego Marvel'], games_count: 40, image: '/images/ps4-console.jpg' },
];
