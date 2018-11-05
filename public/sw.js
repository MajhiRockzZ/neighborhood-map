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
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request).then(function(response) {
        // check whether event request was resolved successfully
        if (response.status !== 404) {
          return caches.open(staticCacheName).then(function(cache) {
            cache.put(event.request.url, response.clone());
            return response;
          });
        }
      });
    })
  );
});