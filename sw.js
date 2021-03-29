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
  '/sounds/lose.mp3'
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