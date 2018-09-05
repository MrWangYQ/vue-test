const cache_name = 'my_cache';
const offlineUrl = '../static/offline.html';
const urlsToCache = [
  '/',
  'index.html',
  '/static/js/app.js',
  '/static/offline.html',
]
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(cache_name).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
  return self.skipWaiting();
})

self.addEventListener('fetch', function(event){
  if (!self.navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return caches.match(offlineUrl);
      })
    )
  }
});