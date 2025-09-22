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
  '/static/css/19.e1cc9191.chunk.css',
  '/static/css/19.e1cc9191.chunk.css.map',
  '/static/css/291.0b68e9d4.chunk.css',
  '/static/css/291.0b68e9d4.chunk.css.map',
  '/static/css/325.6a81e0aa.chunk.css',
  '/static/css/325.6a81e0aa.chunk.css.map',
  '/static/css/408.7dc1562e.chunk.css',
  '/static/css/408.7dc1562e.chunk.css.map',
  '/static/css/589.9c73a38f.chunk.css',
  '/static/css/589.9c73a38f.chunk.css.map',
  '/static/css/795.84d98ac1.chunk.css',
  '/static/css/795.84d98ac1.chunk.css.map',
  '/static/css/987.da7c4e33.chunk.css',
  '/static/css/987.da7c4e33.chunk.css.map',
  '/static/css/main.deec33b9.css',
  '/static/css/main.deec33b9.css.map',
  '/static/js/19.72b49d9a.chunk.js',
  '/static/js/19.72b49d9a.chunk.js.map',
  '/static/js/291.985d4d5e.chunk.js',
  '/static/js/291.985d4d5e.chunk.js.map',
  '/static/js/325.678712f9.chunk.js',
  '/static/js/325.678712f9.chunk.js.map',
  '/static/js/408.31ab1010.chunk.js',
  '/static/js/408.31ab1010.chunk.js.map',
  '/static/js/488.5f29b785.chunk.js',
  '/static/js/488.5f29b785.chunk.js.map',
  '/static/js/589.1e73c497.chunk.js',
  '/static/js/589.1e73c497.chunk.js.map',
  '/static/js/795.088b01bb.chunk.js',
  '/static/js/795.088b01bb.chunk.js.map',
  '/static/js/810.1843f510.chunk.js',
  '/static/js/810.1843f510.chunk.js.LICENSE.txt',
  '/static/js/810.1843f510.chunk.js.map',
  '/static/js/987.e6b8e5ea.chunk.js',
  '/static/js/987.e6b8e5ea.chunk.js.map',
  '/static/js/main.836da92e.js',
  '/static/js/main.836da92e.js.LICENSE.txt',
  '/static/js/main.836da92e.js.map',
  '/static/media/bg_grass_dark.fe0860d81fefcb61f67e.webp',
  '/static/media/bg_grass_light.017013e6a2b6014f6d9d.webp',
  '/static/media/bg_mobile_grass_dark.a6aa278a30901b080070.webp',
  '/static/media/bg_mobile_grass_light.a8181f317ee3e292b05f.webp',
  '/static/media/bg_mobile_sky_dark.323e8298e7cfd19b98c4.webp',
  '/static/media/bg_mobile_sky_light.9c4b8dd63187706cedd7.webp',
  '/static/media/bg_mobile_water_dark.72cbe5fdb768ca12ffad.webp',
  '/static/media/bg_mobile_water_light.463771ebf4c44870726f.webp',
  '/static/media/bg_sky_dark.24c2673a4517c3cbdad4.webp',
  '/static/media/bg_sky_light.900e8d3fc7dfa792320a.webp',
  '/static/media/bg_water_dark.d04186cd402d0b0f22b6.webp',
  '/static/media/bg_water_light.1b1de3b5868a5bb91f75.webp',
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