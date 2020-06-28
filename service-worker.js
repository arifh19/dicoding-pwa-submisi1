const CACHE_NAME = "jogjaapp-v2";
var urlsToCache = [
    "/",
    "/manifest.json",
    "/index.html",
    "/nav.html",
    "/pages/sejarah.html",
    "/pages/geografis.html",
    "/pages/sosial.html",
    "/pages/wisata.html",
    "/image/ekonomi.jpg",
    "/image/geografis-jogja.jpg",
    "/image/jogja.jpg",
    "/image/keraton.jpg",
    "/image/logo.png",
    "/image/malioboro.jpg",
    "/image/sejarah.jpg",
    "/image/sosial.jpg",
    "/image/tamansari.jpg",
    "/image/icon-192x192.png",
    "/image/icon-512x512.png",
    "/css/materialize.min.css",
    "/css/styles.css",
    "/js/materialize.min.js",
    "/js/components/side-bar.js",
    "/js/nav.js",
    "/icon.ico",
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});
self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches
        .match(event.request, {
            cacheName: CACHE_NAME
        })
        .then(function (response) {
            if (response) {
                console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
                return response;
            }

            console.log(
                "ServiceWorker: Memuat aset dari server: ",
                event.request.url
            );
            return fetch(event.request);
        })
    );
});
self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName != CACHE_NAME) {
                        console.log("ServiceWorker: cache " + cacheName + " dihapus");
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});