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
  '/static/css/223.429f433e.chunk.css',
  '/static/css/223.429f433e.chunk.css.map',
  '/static/css/302.0c18ea10.chunk.css',
  '/static/css/302.0c18ea10.chunk.css.map',
  '/static/css/408.31d6cfe0.chunk.css',
  '/static/css/420.ee27dc91.chunk.css',
  '/static/css/420.ee27dc91.chunk.css.map',
  '/static/css/589.5fe102ff.chunk.css',
  '/static/css/589.5fe102ff.chunk.css.map',
  '/static/css/613.736adff0.chunk.css',
  '/static/css/613.736adff0.chunk.css.map',
  '/static/css/795.001e99f6.chunk.css',
  '/static/css/795.001e99f6.chunk.css.map',
  '/static/css/987.25422c2f.chunk.css',
  '/static/css/987.25422c2f.chunk.css.map',
  '/static/css/main.deec33b9.css',
  '/static/css/main.deec33b9.css.map',
  '/static/js/223.a70ef8c3.chunk.js',
  '/static/js/223.a70ef8c3.chunk.js.map',
  '/static/js/302.308c0f3f.chunk.js',
  '/static/js/302.308c0f3f.chunk.js.map',
  '/static/js/408.06be7969.chunk.js',
  '/static/js/408.06be7969.chunk.js.map',
  '/static/js/420.aafa0b65.chunk.js',
  '/static/js/420.aafa0b65.chunk.js.map',
  '/static/js/488.5f29b785.chunk.js',
  '/static/js/488.5f29b785.chunk.js.map',
  '/static/js/589.73ddcdc7.chunk.js',
  '/static/js/589.73ddcdc7.chunk.js.map',
  '/static/js/795.127d7f22.chunk.js',
  '/static/js/795.127d7f22.chunk.js.map',
  '/static/js/810.3fa8ac31.chunk.js',
  '/static/js/810.3fa8ac31.chunk.js.LICENSE.txt',
  '/static/js/810.3fa8ac31.chunk.js.map',
  '/static/js/987.f9008566.chunk.js',
  '/static/js/987.f9008566.chunk.js.map',
  '/static/js/main.36b208a4.js',
  '/static/js/main.36b208a4.js.LICENSE.txt',
  '/static/js/main.36b208a4.js.map',
  '/static/media/aws.0db2175b638c3193b1fc.webp',
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