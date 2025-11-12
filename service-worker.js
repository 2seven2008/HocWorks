const CACHE_HOC = 'hoc-works-cache';
const urlsToCache = [
    './',
    '/index.html',
    '/empresa.html',
    '/contato.html',
    '/css/style.css',
    '/js/script.js',
    '/img/icones/icones_png/icone_192.png',
    '/img/icones/icones_png/icone_512.png'
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_HOC).then((cache) => {
            cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );

});

