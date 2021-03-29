var APP_PREFIX = 'MAWMAWMAW'
var VERSION = '_v_0_1b'
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
  '/static/css/10.5c1badd2.chunk.css',
  '/static/css/10.5c1badd2.chunk.css.map',
  '/static/css/11.48e940c9.chunk.css',
  '/static/css/11.48e940c9.chunk.css.map',
  '/static/css/4.2710a51e.chunk.css',
  '/static/css/4.2710a51e.chunk.css.map',
  '/static/css/6.885f8535.chunk.css',
  '/static/css/6.885f8535.chunk.css.map',
  '/static/css/7.f0ead6c2.chunk.css',
  '/static/css/7.f0ead6c2.chunk.css.map',
  '/static/css/8.b184a1d1.chunk.css',
  '/static/css/8.b184a1d1.chunk.css.map',
  '/static/css/9.661387e8.chunk.css',
  '/static/css/9.661387e8.chunk.css.map',
  '/static/css/main.5362887e.chunk.css',
  '/static/css/main.5362887e.chunk.css.map',
  '/static/js/10.5f37d016.chunk.js',
  '/static/js/10.5f37d016.chunk.js.map',
  '/static/js/11.c9a6361d.chunk.js',
  '/static/js/11.c9a6361d.chunk.js.map',
  '/static/js/2.36821349.chunk.js',
  '/static/js/2.36821349.chunk.js.LICENSE.txt',
  '/static/js/2.36821349.chunk.js.map',
  '/static/js/3.de206701.chunk.js',
  '/static/js/3.de206701.chunk.js.LICENSE.txt',
  '/static/js/3.de206701.chunk.js.map',
  '/static/js/4.e4bf4d48.chunk.js',
  '/static/js/4.e4bf4d48.chunk.js.map',
  '/static/js/5.a2989d38.chunk.js',
  '/static/js/5.a2989d38.chunk.js.map',
  '/static/js/6.34ae4727.chunk.js',
  '/static/js/6.34ae4727.chunk.js.map',
  '/static/js/7.b6549dc3.chunk.js',
  '/static/js/7.b6549dc3.chunk.js.map',
  '/static/js/8.75033af7.chunk.js',
  '/static/js/8.75033af7.chunk.js.map',
  '/static/js/9.44da3dc3.chunk.js',
  '/static/js/9.44da3dc3.chunk.js.map',
  '/static/js/main.8921e53a.chunk.js',
  '/static/js/main.8921e53a.chunk.js.map',
  '/static/js/runtime-main.50db856a.js',
  '/static/js/runtime-main.50db856a.js.map',
  '/static/media/aws.abc17026.png',
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
  '/static/media/mongodb.26af6c37.png',
  '/static/media/php.41176e87.png',
  '/static/media/postgresql.41f2547f.png',
  '/static/media/react.bd6f202b.png',
  '/static/media/redux.5c74c6db.png',
  '/static/media/torn1.99ab1dbb.png',
  '/static/media/torn2.01ddfff8.png',
  '/static/media/webpack.97ad6798.png',
  '/static/media/wordpress.b687aff4.png'
]

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        return request
      } else {
        return fetch(e.request)
      }
    })
  )
})

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
        return cache.addAll(URLS)
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