/* Altersvorsorge-Vergleich — Service Worker
 *
 * Strategie: stale-while-revalidate für alles im Scope.
 * Die App besteht aus einer Seite und neunzehn Woerterbuechern, ohne Backend; Korrektheit hängt
 * also nicht an Frische, wohl aber Verfügbarkeit. Deshalb wird sofort aus
 * dem Cache geliefert und im Hintergrund aktualisiert. Beim Aktivieren
 * werden alte Cache-Versionen gelöscht.
 *
 * Beim Ändern der App die Version hochzählen — sonst sieht ein bereits
 * installierter Client die Änderung erst nach zwei Aufrufen.
 */
const VERSION = 'av-v21';
const ASSETS = [
  './',
  './index.html',
  './i18n.de.js',
  './i18n.de-x-amt.js',
  './i18n.de-x-sales.js',
  './i18n.en.js',
  './i18n.nl.js',
  './i18n.nds.js',
  './i18n.bar.js',
  './i18n.fr.js',
  './i18n.eu.js',
  './i18n.eo.js',
  './i18n.tr.js',
  './i18n.uk.js',
  './i18n.la.js',
  './i18n.got.js',
  './i18n.goh.js',
  './i18n.gmh.js',
  './i18n.grc.js',
  './i18n.sa.js',
  './i18n.ja.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION)
      /* addAll ist atomar: fehlt eine Datei, faellt alles durch. Der
         Rueckfall traegt nur index.html und das deutsche Woerterbuch: das
         ist zugleich die Rueckfallebene von tRaw(), also die kleinste Menge,
         mit der die App vollstaendig beschriftet laeuft. */
      .then((c) => c.addAll(ASSETS)
        .catch(() => c.addAll(['./index.html', './i18n.de.js'])))
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
