var dataCacheName = 'pwa-v1';
var cacheName = 'pwa-step-8-1';
var filesToCache = [
    '/',
    '/javascripts/app.js',
    '/stylesheets/style.css',
    '/stylesheets/bootstrap.min.css',
    '/javascripts/bootstrap.min.js',
    '/javascripts/jquery.min.js',
    '/dashboard',
    '/index'
    ];


/**
 * installation event: it adds all the files to be cached
 */
self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName && key !== dataCacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});
self.addEventListener('fetch', function (e) {
    console.log('[Service Worker] Fetch', e.request.url);
    var dataUrl = '/events';
    if (e.request.url.indexOf(dataUrl) > -1) {

        return fetch(e.request).then(function (response) {

            return response;
        })
    } else {

        e.respondWith(
            caches.match(e.request).then(function (response) {
                return response
                    || fetch(e.request)
                        .then(function (response) {
                            if (!response.ok) {
                                console.log("error: " + err);
                            }
                        })
                        .catch(function (e) {
                            console.log("error: " + err);
                        })
            })
        );
    }
});
