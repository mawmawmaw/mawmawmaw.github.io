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
  '/static/css/232.83be8f14.chunk.css',
  '/static/css/232.83be8f14.chunk.css.map',
  '/static/css/291.b32a7faa.chunk.css',
  '/static/css/291.b32a7faa.chunk.css.map',
  '/static/css/408.31d6cfe0.chunk.css',
  '/static/css/589.8822fbd5.chunk.css',
  '/static/css/589.8822fbd5.chunk.css.map',
  '/static/css/795.fec990cc.chunk.css',
  '/static/css/795.fec990cc.chunk.css.map',
  '/static/css/897.92d7ba99.chunk.css',
  '/static/css/897.92d7ba99.chunk.css.map',
  '/static/css/987.5c9751d5.chunk.css',
  '/static/css/987.5c9751d5.chunk.css.map',
  '/static/css/main.8090beca.css',
  '/static/css/main.8090beca.css.map',
  '/static/js/232.7909e717.chunk.js',
  '/static/js/232.7909e717.chunk.js.map',
  '/static/js/291.632c0e52.chunk.js',
  '/static/js/291.632c0e52.chunk.js.map',
  '/static/js/408.d84b652a.chunk.js',
  '/static/js/408.d84b652a.chunk.js.map',
  '/static/js/488.833cbc2f.chunk.js',
  '/static/js/488.833cbc2f.chunk.js.map',
  '/static/js/589.d021c17f.chunk.js',
  '/static/js/589.d021c17f.chunk.js.map',
  '/static/js/795.9c2b8249.chunk.js',
  '/static/js/795.9c2b8249.chunk.js.map',
  '/static/js/810.ec3484cd.chunk.js',
  '/static/js/810.ec3484cd.chunk.js.LICENSE.txt',
  '/static/js/810.ec3484cd.chunk.js.map',
  '/static/js/897.449a63b3.chunk.js',
  '/static/js/897.449a63b3.chunk.js.map',
  '/static/js/987.c0319392.chunk.js',
  '/static/js/987.c0319392.chunk.js.map',
  '/static/js/main.23665044.js',
  '/static/js/main.23665044.js.LICENSE.txt',
  '/static/js/main.23665044.js.map',
  '/static/media/bg_grass_dark.790c77e40c89e2cb2689.webp',
  '/static/media/bg_grass_light.f28667a238d321b78100.webp',
  '/static/media/bg_sky_dark.24c2673a4517c3cbdad4.webp',
  '/static/media/bg_sky_light.900e8d3fc7dfa792320a.webp',
  '/static/media/bg_water_dark.4c9c2f80aac7f8dc4867.webp',
  '/static/media/bg_water_light.d81219760484f5726cff.webp',
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