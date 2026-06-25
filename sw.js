const CACHE_NAME = 'azeche-ph-v7';

// Solo cachear assets estáticos, NUNCA los HTML
const STATIC_ASSETS = [
  './Logo/1.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = event.request.url;

  // No interceptar Firebase ni APIs externas
  if (
    url.includes('firebaseio.com') ||
    url.includes('googleapis.com') ||
    url.includes('firebaseapp.com') ||
    url.includes('gstatic.com')
  ) {
    return;
  }

  // HTML siempre desde la red (nunca desde caché)
  if (event.request.destination === 'document' || url.endsWith('.html')) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }

  // Imágenes y otros assets: caché primero
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
