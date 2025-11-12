const CACHE_HOC = 'meu-pwa-cache-hoc';
const urlsToCache = [
    '/',
    '/index.html',
    'empresa.html',
    'contato.html',
    'css/style.css',
    'js/script.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_HOC)
        .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
});