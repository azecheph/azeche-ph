const CACHE_NAME = 'azeche-ph-v5';

const ASSETS = [
  './index.html',
  './Dashboard.html',
  './edificios.html',
  './proveedores.html',
  './contratos.html',
  './cuentas-cobro-jefa.html',
  './cuentas-por-cobrar.html',
  './cuentas-por-pagar.html',
  './facturas-automaticas.html',
  './asambleas.html',
  './asamblea-propietario.html',
  './registro-asamblea.html',
  './resultados-vivo.html',
  './votacion-admin.html',
  './votacion-pantalla.html',
  './votacion-propietario.html',
  './solicitud-insumos.html',
  './gestion-insumos.html',
  './consejos-administracion.html',
  './checklist-recepcion.html',
  './generador-actas-v2.html',
  './supervisiones.html',
  './caja-chica.html',
  './Residentes_y_Propietarios_-_Azeche_P_H_.html',
  './Logo/1.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
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

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
