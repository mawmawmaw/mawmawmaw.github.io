var APP_PREFIX = 'MAWMAWMAW'
var VERSION = '_v_0.1b'
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [
  'favicon.png',
  '/images/logo192.webp',
  '/images/logo512.webp',
  '/images/fbtw.webp',
  '/images/radio.webp',
  '/sounds/music.mp3',
  '/sounds/click.mp3',
  '/sounds/sent.mp3',
  '/sounds/typing.mp3',
  '/sounds/poke.mp3',
  '/sounds/lose.mp3',
  '/static/css/291.b32a7faa.chunk.css',
  '/static/css/291.b32a7faa.chunk.css.map',
  '/static/css/325.3d075e99.chunk.css',
  '/static/css/325.3d075e99.chunk.css.map',
  '/static/css/408.31d6cfe0.chunk.css',
  '/static/css/515.869e18e4.chunk.css',
  '/static/css/515.869e18e4.chunk.css.map',
  '/static/css/589.7d3beafe.chunk.css',
  '/static/css/589.7d3beafe.chunk.css.map',
  '/static/css/795.fec990cc.chunk.css',
  '/static/css/795.fec990cc.chunk.css.map',
  '/static/css/987.5c9751d5.chunk.css',
  '/static/css/987.5c9751d5.chunk.css.map',
  '/static/css/main.bc29c1a8.css',
  '/static/css/main.bc29c1a8.css.map',
  '/static/js/291.3d2f8234.chunk.js',
  '/static/js/291.3d2f8234.chunk.js.map',
  '/static/js/325.a1fca530.chunk.js',
  '/static/js/325.a1fca530.chunk.js.map',
  '/static/js/408.dcec44a3.chunk.js',
  '/static/js/408.dcec44a3.chunk.js.map',
  '/static/js/488.833cbc2f.chunk.js',
  '/static/js/488.833cbc2f.chunk.js.map',
  '/static/js/515.68e3bbf5.chunk.js',
  '/static/js/515.68e3bbf5.chunk.js.map',
  '/static/js/589.a3492cd9.chunk.js',
  '/static/js/589.a3492cd9.chunk.js.map',
  '/static/js/795.9c2b8249.chunk.js',
  '/static/js/795.9c2b8249.chunk.js.map',
  '/static/js/810.ec3484cd.chunk.js',
  '/static/js/810.ec3484cd.chunk.js.LICENSE.txt',
  '/static/js/810.ec3484cd.chunk.js.map',
  '/static/js/987.8d5265d7.chunk.js',
  '/static/js/987.8d5265d7.chunk.js.map',
  '/static/js/main.bd0f1883.js',
  '/static/js/main.bd0f1883.js.LICENSE.txt',
  '/static/js/main.bd0f1883.js.map',
  '/static/media/bg_grass_dark.32a0e93adde9eccd67ca.webp',
  '/static/media/bg_grass_light.18bfe4dc4359fa2e6961.webp',
  '/static/media/bg_sky_dark.24c2673a4517c3cbdad4.webp',
  '/static/media/bg_sky_light.900e8d3fc7dfa792320a.webp',
  '/static/media/bg_water_dark.4c9c2f80aac7f8dc4867.webp',
  '/static/media/bg_water_light.d81219760484f5726cff.webp',
  '/static/media/border.74df8f98218a3d9f80d1f2854bb22cf6.svg',
  '/static/media/border_blue.83984a484f5413c72fc2a1d27265feb9.svg',
  '/static/media/border_dark.7e52f86205f268d455c603e6be129b34.svg',
  '/static/media/border_red.11edf34b3a1966debdb26b3b9b9cb64c.svg',
  '/static/media/headerbg.9ff9f2354409587ceea7.webp',
  '/static/media/headericonsleft.f07a6d10985df2400773.webp',
  '/static/media/headericonsright.bd9295dc3c1f9ddcae83.webp',
  '/static/media/logo.fc8267db00bf2f6db60f.webp',
  '/static/media/maw_poked.91d8a70a018a688e6108.gif',
  '/static/media/maw_standing.b737e7ebc25c1e386866.gif',
  '/static/media/maw_walking.8ed401cf17fdc814c9dd.gif',
  '/static/media/maw_waving.c1f9aef73ce81b23a6b9.gif',
  '/static/media/moralis.d41812ed5191432034eb.png',
  '/static/media/radio.2e4b65b05b89eddf441a.webp',
  '/static/media/signbase.38fc40e38cdc3b946d9c.webp',
  '/static/media/torn1.99ab1dbb6146298f7dc6.png',
  '/static/media/torn2.01ddfff89a899a0ec4be.png',
  '/static/media/wood.fd5e3caf5c6ef6a5bebf.webp'
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