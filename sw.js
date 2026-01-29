var APP_PREFIX = 'MAW.dev'
var VERSION = '_v_' + 1769652355553
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [
  'favicon.png',
  '/images/pwa/logo192.webp',
  '/images/pwa/logo512.webp',
  '/images/pwa/logo1024.webp',
  '/images/social/fbtw.webp',
  '/images/screenshots/screenshot-wide.webp',
  '/images/screenshots/screenshot-narrow.webp',
  '/sounds/music/music.mp3',
  '/sounds/ui/click.mp3',
  '/sounds/ui/sent.mp3',
  '/sounds/ui/typing.mp3',
  '/sounds/game/poke.mp3',
  '/sounds/game/lose.mp3',
  '/static/css/152.3d4060b3.chunk.css',
  '/static/css/152.3d4060b3.chunk.css.map',
  '/static/css/408.31d6cfe0.chunk.css',
  '/static/css/542.1273b832.chunk.css',
  '/static/css/542.1273b832.chunk.css.map',
  '/static/css/589.a4596172.chunk.css',
  '/static/css/589.a4596172.chunk.css.map',
  '/static/css/795.b2ab3fcc.chunk.css',
  '/static/css/795.b2ab3fcc.chunk.css.map',
  '/static/css/98.0f64d09a.chunk.css',
  '/static/css/98.0f64d09a.chunk.css.map',
  '/static/css/987.c09557c2.chunk.css',
  '/static/css/987.c09557c2.chunk.css.map',
  '/static/css/main.f3018ff0.css',
  '/static/css/main.f3018ff0.css.map',
  '/static/js/152.95a06f4f.chunk.js',
  '/static/js/152.95a06f4f.chunk.js.map',
  '/static/js/289.2a68ced0.chunk.js',
  '/static/js/289.2a68ced0.chunk.js.LICENSE.txt',
  '/static/js/289.2a68ced0.chunk.js.map',
  '/static/js/404.26d713b0.chunk.js',
  '/static/js/404.26d713b0.chunk.js.map',
  '/static/js/408.c2dde53a.chunk.js',
  '/static/js/408.c2dde53a.chunk.js.map',
  '/static/js/416.380383ce.chunk.js',
  '/static/js/416.380383ce.chunk.js.LICENSE.txt',
  '/static/js/416.380383ce.chunk.js.map',
  '/static/js/488.5f29b785.chunk.js',
  '/static/js/488.5f29b785.chunk.js.map',
  '/static/js/542.e9817f32.chunk.js',
  '/static/js/542.e9817f32.chunk.js.map',
  '/static/js/589.4064391d.chunk.js',
  '/static/js/589.4064391d.chunk.js.map',
  '/static/js/795.bdb3238f.chunk.js',
  '/static/js/795.bdb3238f.chunk.js.map',
  '/static/js/810.3fa8ac31.chunk.js',
  '/static/js/810.3fa8ac31.chunk.js.LICENSE.txt',
  '/static/js/810.3fa8ac31.chunk.js.map',
  '/static/js/849.63dc0dfd.chunk.js',
  '/static/js/849.63dc0dfd.chunk.js.map',
  '/static/js/98.1aadb51c.chunk.js',
  '/static/js/98.1aadb51c.chunk.js.map',
  '/static/js/987.3b24db69.chunk.js',
  '/static/js/987.3b24db69.chunk.js.map',
  '/static/js/main.a7bbedc5.js',
  '/static/js/main.a7bbedc5.js.LICENSE.txt',
  '/static/js/main.a7bbedc5.js.map',
  '/static/media/aws.0db2175b638c3193b1fc.webp',
  '/static/media/bg_grass_dark.fe0860d81fefcb61f67e.webp',
  '/static/media/bg_grass_light.017013e6a2b6014f6d9d.webp',
  '/static/media/bg_mobile_grass_dark.a6aa278a30901b080070.webp',
  '/static/media/bg_mobile_grass_light.a8181f317ee3e292b05f.webp',
  '/static/media/bg_mobile_sky_dark.de7c104abfd3a7cc99a6.webp',
  '/static/media/bg_mobile_sky_light.17c61bbf3ae781ae7602.webp',
  '/static/media/bg_mobile_water_dark.72cbe5fdb768ca12ffad.webp',
  '/static/media/bg_mobile_water_light.463771ebf4c44870726f.webp',
  '/static/media/bg_sky_dark.c4fb402e263ce8dc7e81.webp',
  '/static/media/bg_sky_light.900e8d3fc7dfa792320a.webp',
  '/static/media/bg_water_dark.d04186cd402d0b0f22b6.webp',
  '/static/media/bg_water_light.1b1de3b5868a5bb91f75.webp',
  '/static/media/console.e06ad12dcdaac295d120.webp',
  '/static/media/controller.fd7a3670dd200185c351.webp',
  '/static/media/css3.8e4a4830c10f55a8832a.webp',
  '/static/media/firebase.89746fe9c9bd71ae408d.webp',
  '/static/media/github.1cc644befc6a257c0215.webp',
  '/static/media/headerbg.9ff9f2354409587ceea7.webp',
  '/static/media/headericonsleft.f07a6d10985df2400773.webp',
  '/static/media/headericonsright.bd9295dc3c1f9ddcae83.webp',
  '/static/media/html5.25769c5ad2d710361043.webp',
  '/static/media/javascript.b8561a47358c98141e78.webp',
  '/static/media/logo.fc8267db00bf2f6db60f.webp',
  '/static/media/maduro.e07b7a928b384a613dc6.webp',
  '/static/media/maw_poked.91d8a70a018a688e6108.gif',
  '/static/media/maw_standing.b737e7ebc25c1e386866.gif',
  '/static/media/maw_walking.8ed401cf17fdc814c9dd.gif',
  '/static/media/maw_waving.c1f9aef73ce81b23a6b9.gif',
  '/static/media/mongodb.7fcc99d172a65eded784.webp',
  '/static/media/moralis.0e3398a6b92ae5c170c8.webp',
  '/static/media/next-js.33e1c7e71ea48b3da2fa.webp',
  '/static/media/nodejs.da4ffc41dcdb15a7d274.webp',
  '/static/media/npm.f90dd8fccc71905b7b3b.webp',
  '/static/media/pc.88a36eeaaad7c754562b.webp',
  '/static/media/php.9e77d7a556ba2cd4db39.webp',
  '/static/media/postgresql.323579a9ecbb6a5f3b0b.webp',
  '/static/media/python.25678ef68ca850e4aa6b.webp',
  '/static/media/radio.2437e93202efe3a27448.webp',
  '/static/media/react.0f9079e9a44fb2dcf8f5.webp',
  '/static/media/redux.75ffb5f8b06732d52cf5.webp',
  '/static/media/stackoverflow.4337c99a6b377d53325b.webp',
  '/static/media/tailwind.5515ae16eae102ac3602.webp',
  '/static/media/vscode.700ff5d49d5bbb25d5f1.webp',
  '/static/media/webpack.14d2eca96aa06b14b87f.webp',
  '/static/media/wordpress.ef142268666f11459304.webp'
]

self.addEventListener('install', function (e) {
  self.skipWaiting()
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
    Promise.all([
      clients.claim(),
      caches.keys().then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key.indexOf(APP_PREFIX) === 0 && key !== CACHE_NAME) {
            return caches.delete(key)
          }
        }))
      })
    ])
  )
})

self.addEventListener('fetch', function(event) {
  var request = event.request

  // Network-first for navigation requests (ensures fresh HTML)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then(function(response) {
        return caches.open(CACHE_NAME).then(function(cache) {
          cache.put(request, response.clone())
          return response
        })
      }).catch(function() {
        return caches.match(request)
      })
    )
    return
  }

  // Cache-first for static assets
  event.respondWith(
    caches.match(request).then(function(response) {
      return response || fetch(request).then(function(fetchResponse) {
        return caches.open(CACHE_NAME).then(function(cache) {
          cache.put(request, fetchResponse.clone())
          return fetchResponse
        })
      })
    }).catch(function() {
      return
    })
  )
})