const CACHE_V = 'v0'
console.log('9934343')
self.addEventListener('install', (ev) => {
    console.log('22', ev)
    ev.waitUntil(
        caches.open(CACHE_V).then((cache) => {
            console.log('cache', cache)
            cache.addAll([
                './jquery.min.js'
            ])
        })
    )
});
self.addEventListener('activate', (ev) => {
    console.log('99900', ev)
})