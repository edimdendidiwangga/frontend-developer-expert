import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
}, { passive: true });

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
}, { passive: true });

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
}, { passive: true });
