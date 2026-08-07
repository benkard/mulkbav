/* Altersvorsorge-Vergleich — Service Worker
 *
 * Strategie: stale-while-revalidate für alles im Scope.
 * Die App ist eine einzige statische Datei ohne Backend; Korrektheit hängt
 * also nicht an Frische, wohl aber Verfügbarkeit. Deshalb wird sofort aus
 * dem Cache geliefert und im Hintergrund aktualisiert. Beim Aktivieren
 * werden alte Cache-Versionen gelöscht.
 *
 * Beim Ändern der App die Version hochzählen — sonst sieht ein bereits
 * installierter Client die Änderung erst nach zwei Aufrufen.
 */
const VERSION = 'av-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION)
      .then((c) => c.addAll(ASSETS).catch(() => c.add('./index.html')))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  e.respondWith(
    caches.open(VERSION).then((cache) =>
      cache.match(req, { ignoreSearch: true }).then((hit) => {
        const net = fetch(req)
          .then((res) => {
            if (res && res.status === 200 && res.type === 'basic') cache.put(req, res.clone());
            return res;
          })
          .catch(() => hit || cache.match('./index.html'));
        return hit || net;
      })
    )
  );
});
