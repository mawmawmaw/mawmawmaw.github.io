var APP_PREFIX = 'MAWMAWMAW'
var VERSION = '_v_0.1b'
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [
  'favicon.png',
  '/images/logo192.jpg',
  '/images/logo512.jpg',
  '/images/fbtw.jpg',
  '/images/radio.png',
  '/sounds/music.mp3',
  '/sounds/click.mp3',
  '/sounds/sent.mp3',
  '/sounds/typing.mp3',
  '/sounds/poke.mp3',
  '/sounds/lose.mp3',
  '/static/css/10.72736e52.chunk.css',
  '/static/css/10.72736e52.chunk.css.map',
  '/static/css/11.e131341f.chunk.css',
  '/static/css/11.e131341f.chunk.css.map',
  '/static/css/5.9791e44e.chunk.css',
  '/static/css/5.9791e44e.chunk.css.map',
  '/static/css/6.54175936.chunk.css',
  '/static/css/6.54175936.chunk.css.map',
  '/static/css/7.afd7172b.chunk.css',
  '/static/css/7.afd7172b.chunk.css.map',
  '/static/css/8.c2d6ea4f.chunk.css',
  '/static/css/8.c2d6ea4f.chunk.css.map',
  '/static/css/9.580a2a91.chunk.css',
  '/static/css/9.580a2a91.chunk.css.map',
  '/static/css/main.8a0e88eb.chunk.css',
  '/static/css/main.8a0e88eb.chunk.css.map',
  '/static/js/10.89032cd4.chunk.js',
  '/static/js/10.89032cd4.chunk.js.map',
  '/static/js/11.96738c17.chunk.js',
  '/static/js/11.96738c17.chunk.js.map',
  '/static/js/2.bdc9311e.chunk.js',
  '/static/js/2.bdc9311e.chunk.js.LICENSE.txt',
  '/static/js/2.bdc9311e.chunk.js.map',
  '/static/js/3.de206701.chunk.js',
  '/static/js/3.de206701.chunk.js.LICENSE.txt',
  '/static/js/3.de206701.chunk.js.map',
  '/static/js/4.cfd1fcae.chunk.js',
  '/static/js/4.cfd1fcae.chunk.js.map',
  '/static/js/5.707217ec.chunk.js',
  '/static/js/5.707217ec.chunk.js.map',
  '/static/js/6.c9bc0554.chunk.js',
  '/static/js/6.c9bc0554.chunk.js.map',
  '/static/js/7.88b31dff.chunk.js',
  '/static/js/7.88b31dff.chunk.js.map',
  '/static/js/8.c8224a7b.chunk.js',
  '/static/js/8.c8224a7b.chunk.js.map',
  '/static/js/9.6ae48150.chunk.js',
  '/static/js/9.6ae48150.chunk.js.map',
  '/static/js/main.ddef09b3.chunk.js',
  '/static/js/main.ddef09b3.chunk.js.map',
  '/static/js/runtime-main.93ab9d1b.js',
  '/static/js/runtime-main.93ab9d1b.js.map',
  '/static/media/bg_grass.bc75dcf9.png',
  '/static/media/bg_grass_dark.4bcc2369.png',
  '/static/media/bg_sky.359b82b6.png',
  '/static/media/bg_sky_dark.c4a1dd8a.png',
  '/static/media/bg_water.ccf8b3f5.png',
  '/static/media/bg_water_dark.e5efccfa.png',
  '/static/media/border.74df8f98.svg',
  '/static/media/border_blue.83984a48.svg',
  '/static/media/border_dark.7e52f862.svg',
  '/static/media/border_red.11edf34b.svg',
  '/static/media/logo.91973642.png',
  '/static/media/maw_poked.91d8a70a.gif',
  '/static/media/maw_standing.b737e7eb.gif',
  '/static/media/maw_walking.8ed401cf.gif',
  '/static/media/maw_waving.c1f9aef7.gif',
  '/static/media/moralis.d41812ed.png',
  '/static/media/torn1.99ab1dbb.png',
  '/static/media/torn2.01ddfff8.png'
]

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
        return cache.addAll(URLS)
    }).catch(function() {
      return;
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME)

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    }).catch(function() {
      return;
    })
  );
});