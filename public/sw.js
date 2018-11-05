let staticCacheName = 'neighborhood-map-v1';

self.addEventListener('install', function (event) {
  let urlsToCache = [
    '/',
    'index.html',
    '../src/App.css',
    '../src/index.js',
    '../src/components/App.js',
    '../src/components/ErrorPage.js',
    '../src/components/InfoTab.js',
    '../src/components/MyMap.js',
    '../src/components/MyMarker.js',
    '../src/components/Panorama.js',
    '../src/components/Search.js'
  ]

  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  )
});