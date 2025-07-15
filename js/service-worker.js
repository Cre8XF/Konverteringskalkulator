
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("konverteringskalkulator").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/style.css",
        "/js/script.js",
        "/js/units.js",
        "/js/converter.js",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
