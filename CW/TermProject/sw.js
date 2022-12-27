const CACHE = 'termProject'

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE).then(
            cache => {
                return cache.addAll(["./","./style.css", "./index.html", "./manifest.json", "./script.js",]);
            }
        )
    )
});

self.addEventListener("fetch", e => {
    console.log(`getir from ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})