const CACHE = 'termProject'
const FILES =
    [
        "/",
        "/style.css",
        "/index.html",
        "/manifest.json",
        "/assets/",
        "/script.js",
        "/assets/game-icon192.PNG",
        "/assets/itemImages/"
    ];

const ICONS =
    [
        "./assets/cart.png",
        "./assets/csgo.jpg",
        "./assets/delete.svg",
        "./assets/dota.png",
        "./assets/down-arrow.png",
        "./assets/down.png",
        "./assets/download.svg",
        "./assets/eur.PNG",
        "./assets/filter-exterior.svg",
        "./assets/filter-price.svg",
        "./assets/filter-reset.svg",
        "./assets/filter-type.svg",
        "./assets/filter.png",
        "./assets/flag-en.png",
        "./assets/flag-tr.png",
        "./assets/menu.png",
        "./assets/logout.svg",
        "./assets/mail.svg",
        "./assets/money.svg",
        "./assets/profile-icon.jpg",
        "./assets/profile.svg",
        "./assets/refresh.svg",
        "./assets/search.svg",
        "./assets/sort.svg",
        "./assets/tf2.jpg",
        "./assets/rust.png",
        "./assets/up.png",
        "./assets/usd.PNG",
        "./assets/try.PNG",
        "./assets/itemImages/csgo/bayonet-doppler.png",
        "./assets/itemImages/csgo/butterfly-fade.png",
        "./assets/itemImages/csgo/butterfly-ruby.png",
        "./assets/itemImages/csgo/crimson.png",
        "./assets/itemImages/csgo/dragon-lore.png",
        "./assets/itemImages/csgo/gungnir.png",
        "./assets/itemImages/csgo/howl.png",
        "./assets/itemImages/csgo/karambit-ruby.png",
        "./assets/itemImages/csgo/lore.png",
        "./assets/itemImages/csgo/pandora.png",
        "./assets/itemImages/csgo/spearmint.png",
        "./assets/itemImages/csgo/vice.png",
        "./assets/itemImages/tf2/alaka.png",
        "./assets/itemImages/tf2/france.png",
        "./assets/itemImages/tf2/key.png",
        "./assets/itemImages/tf2/kritz.png",
        "./assets/itemImages/tf2/lawn.png",
        "./assets/itemImages/dota2/axia.png",
        "./assets/itemImages/dota2/blade.png",
        "./assets/itemImages/dota2/claw.png",
        "./assets/itemImages/dota2/demon.png",
        "./assets/itemImages/dota2/fractal.png",
        "./assets/itemImages/dota2/hair.png",
        "./assets/itemImages/dota2/kantusa.png",
        "./assets/itemImages/dota2/rotten.png",
        "./assets/itemImages/dota2/soul.png",
        "./assets/itemImages/rust/jacket.png",
        "./assets/itemImages/rust/mask.png",
        "./assets/itemImages/rust/red.png",
        "./assets/itemImages/rust/sar.png",
        "./assets/itemImages/rust/thompson.png",
        "./assets/itemImages/rust/vest.png"
    ];


self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE).then(
            cache => {
                return cache.addAll(["./style.css", "./index.html", "./manifest.json", "./script.js"]);
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