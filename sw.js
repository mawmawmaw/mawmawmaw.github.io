var APP_PREFIX = 'MAWMAWMAW'
var VERSION = '_v_0.2'
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
  '/static/css/19.d8561508.chunk.css',
  '/static/css/19.d8561508.chunk.css.map',
  '/static/css/291.0b68e9d4.chunk.css',
  '/static/css/291.0b68e9d4.chunk.css.map',
  '/static/css/325.67642968.chunk.css',
  '/static/css/325.67642968.chunk.css.map',
  '/static/css/408.7dc1562e.chunk.css',
  '/static/css/408.7dc1562e.chunk.css.map',
  '/static/css/589.9c73a38f.chunk.css',
  '/static/css/589.9c73a38f.chunk.css.map',
  '/static/css/795.84d98ac1.chunk.css',
  '/static/css/795.84d98ac1.chunk.css.map',
  '/static/css/987.da7c4e33.chunk.css',
  '/static/css/987.da7c4e33.chunk.css.map',
  '/static/css/main.36ee2fe8.css',
  '/static/css/main.36ee2fe8.css.map',
  '/static/js/19.f2ef3841.chunk.js',
  '/static/js/19.f2ef3841.chunk.js.map',
  '/static/js/291.7e240ea1.chunk.js',
  '/static/js/291.7e240ea1.chunk.js.map',
  '/static/js/325.1b88499c.chunk.js',
  '/static/js/325.1b88499c.chunk.js.map',
  '/static/js/408.a8fd8f74.chunk.js',
  '/static/js/408.a8fd8f74.chunk.js.map',
  '/static/js/488.833cbc2f.chunk.js',
  '/static/js/488.833cbc2f.chunk.js.map',
  '/static/js/589.22fcd229.chunk.js',
  '/static/js/589.22fcd229.chunk.js.map',
  '/static/js/795.5e4e6e44.chunk.js',
  '/static/js/795.5e4e6e44.chunk.js.map',
  '/static/js/810.ec3484cd.chunk.js',
  '/static/js/810.ec3484cd.chunk.js.LICENSE.txt',
  '/static/js/810.ec3484cd.chunk.js.map',
  '/static/js/987.3a12d57a.chunk.js',
  '/static/js/987.3a12d57a.chunk.js.map',
  '/static/js/main.67838f00.js',
  '/static/js/main.67838f00.js.LICENSE.txt',
  '/static/js/main.67838f00.js.map',
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
  '/static/media/radio.2e4b65b05b89eddf441a.webp'
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