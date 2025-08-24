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
  '/static/css/193.31d6cfe0.chunk.css',
  '/static/css/279.b852d6a6.chunk.css',
  '/static/css/279.b852d6a6.chunk.css.map',
  '/static/css/4.58c4258b.chunk.css',
  '/static/css/4.58c4258b.chunk.css.map',
  '/static/css/409.10846926.chunk.css',
  '/static/css/409.10846926.chunk.css.map',
  '/static/css/50.560d66a6.chunk.css',
  '/static/css/50.560d66a6.chunk.css.map',
  '/static/css/590.5c3cabbf.chunk.css',
  '/static/css/590.5c3cabbf.chunk.css.map',
  '/static/css/846.67853116.chunk.css',
  '/static/css/846.67853116.chunk.css.map',
  '/static/css/main.c81ed254.css',
  '/static/css/main.c81ed254.css.map',
  '/static/js/193.313e2faf.chunk.js',
  '/static/js/193.313e2faf.chunk.js.map',
  '/static/js/279.ec3d91dd.chunk.js',
  '/static/js/279.ec3d91dd.chunk.js.map',
  '/static/js/4.79b5503d.chunk.js',
  '/static/js/4.79b5503d.chunk.js.map',
  '/static/js/409.8a11b7bc.chunk.js',
  '/static/js/409.8a11b7bc.chunk.js.map',
  '/static/js/50.c01c7cae.chunk.js',
  '/static/js/50.c01c7cae.chunk.js.map',
  '/static/js/590.6f8b1098.chunk.js',
  '/static/js/590.6f8b1098.chunk.js.map',
  '/static/js/810.a9a6bd38.chunk.js',
  '/static/js/810.a9a6bd38.chunk.js.LICENSE.txt',
  '/static/js/810.a9a6bd38.chunk.js.map',
  '/static/js/846.e1f90188.chunk.js',
  '/static/js/846.e1f90188.chunk.js.map',
  '/static/js/main.a2b0ea01.js',
  '/static/js/main.a2b0ea01.js.LICENSE.txt',
  '/static/js/main.a2b0ea01.js.map',
  '/static/media/bg_grass.bc75dcf931c14c658f1c.png',
  '/static/media/bg_grass_dark.4bcc2369f637179c620f.png',
  '/static/media/bg_sky.359b82b65dda7105d7fc.png',
  '/static/media/bg_sky_dark.c4a1dd8acb93e011dafd.png',
  '/static/media/bg_water.ccf8b3f5d65968e60896.png',
  '/static/media/bg_water_dark.e5efccfa2351c82212c6.png',
  '/static/media/border.74df8f98218a3d9f80d1f2854bb22cf6.svg',
  '/static/media/border_blue.83984a484f5413c72fc2a1d27265feb9.svg',
  '/static/media/border_dark.7e52f86205f268d455c603e6be129b34.svg',
  '/static/media/border_red.11edf34b3a1966debdb26b3b9b9cb64c.svg',
  '/static/media/logo.919736420461c893ddda.png',
  '/static/media/maw_poked.91d8a70a018a688e6108.gif',
  '/static/media/maw_standing.b737e7ebc25c1e386866.gif',
  '/static/media/maw_walking.8ed401cf17fdc814c9dd.gif',
  '/static/media/maw_waving.c1f9aef73ce81b23a6b9.gif',
  '/static/media/moralis.d41812ed5191432034eb.png',
  '/static/media/torn1.99ab1dbb6146298f7dc6.png',
  '/static/media/torn2.01ddfff89a899a0ec4be.png'
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