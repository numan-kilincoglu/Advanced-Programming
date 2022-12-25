const CACHE = 'termProject'
const FILES = ['assets/','index.html', 'script.js', 'sw.js', 'manifest.json']
function installCB(e) {
    e.waitUntil(
        caches.open(CACHE)
            .then(cache => cache.addAll(FILES))
            .catch(console.log)
    )
}

self.addEventListener('install', installCB)

function cacheCB(e) { //cache first
    let req = e.request
    e.respondWith(
        caches.match(req)
            .then(r1 => r1 || fetch(req))
            .catch(console.log)
    )
}
self.addEventListener('fetch', cacheCB);