self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("static").then(
            cache => {
                return cache.addAll(["./index.html", "./style.css", "./assets/", "./script.js", "./assets/game-icon.PNG"]);

            }
        )
    )
});

self.addEventListener("fetch", e => {
    // // console.log(`getir from ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
});