var APP_PREFIX = 'MAW.dev'
var VERSION = '_v_' + 1771798538965
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
  '/static/css/197.2f0abc70.chunk.css',
  '/static/css/197.2f0abc70.chunk.css.map',
  '/static/css/27.31d6cfe0.chunk.css',
  '/static/css/451.43c677e4.chunk.css',
  '/static/css/451.43c677e4.chunk.css.map',
  '/static/css/749.9067034b.chunk.css',
  '/static/css/749.9067034b.chunk.css.map',
  '/static/css/795.b2ab3fcc.chunk.css',
  '/static/css/795.b2ab3fcc.chunk.css.map',
  '/static/css/98.434a8ef4.chunk.css',
  '/static/css/98.434a8ef4.chunk.css.map',
  '/static/css/987.c58b7266.chunk.css',
  '/static/css/987.c58b7266.chunk.css.map',
  '/static/css/main.e1704067.css',
  '/static/css/main.e1704067.css.map',
  '/static/js/197.9efb5243.chunk.js',
  '/static/js/197.9efb5243.chunk.js.map',
  '/static/js/224.15c1a4ae.chunk.js',
  '/static/js/224.15c1a4ae.chunk.js.map',
  '/static/js/27.0998cb2b.chunk.js',
  '/static/js/27.0998cb2b.chunk.js.map',
  '/static/js/289.c50de12c.chunk.js',
  '/static/js/289.c50de12c.chunk.js.LICENSE.txt',
  '/static/js/289.c50de12c.chunk.js.map',
  '/static/js/299.bba67693.chunk.js',
  '/static/js/299.bba67693.chunk.js.map',
  '/static/js/404.afe0f37a.chunk.js',
  '/static/js/404.afe0f37a.chunk.js.map',
  '/static/js/408.8056de63.chunk.js',
  '/static/js/408.8056de63.chunk.js.LICENSE.txt',
  '/static/js/408.8056de63.chunk.js.map',
  '/static/js/416.9af31ab5.chunk.js',
  '/static/js/416.9af31ab5.chunk.js.LICENSE.txt',
  '/static/js/416.9af31ab5.chunk.js.map',
  '/static/js/451.480f02fa.chunk.js',
  '/static/js/451.480f02fa.chunk.js.map',
  '/static/js/479.4afbc090.chunk.js',
  '/static/js/479.4afbc090.chunk.js.map',
  '/static/js/488.277fa9bf.chunk.js',
  '/static/js/488.277fa9bf.chunk.js.map',
  '/static/js/491.e40013b1.chunk.js',
  '/static/js/491.e40013b1.chunk.js.map',
  '/static/js/749.87a7fcc4.chunk.js',
  '/static/js/749.87a7fcc4.chunk.js.map',
  '/static/js/795.17003780.chunk.js',
  '/static/js/795.17003780.chunk.js.map',
  '/static/js/865.65a065e6.chunk.js',
  '/static/js/865.65a065e6.chunk.js.map',
  '/static/js/98.470a60d5.chunk.js',
  '/static/js/98.470a60d5.chunk.js.map',
  '/static/js/987.f409310d.chunk.js',
  '/static/js/987.f409310d.chunk.js.map',
  '/static/js/989.b10ee7f5.chunk.js',
  '/static/js/989.b10ee7f5.chunk.js.map',
  '/static/js/main.a6e8ea24.js',
  '/static/js/main.a6e8ea24.js.LICENSE.txt',
  '/static/js/main.a6e8ea24.js.map',
  '/static/media/apache.de58a5885561d0c46854b7a8aa4e1ee1.svg',
  '/static/media/apollographql.62b065057c477094ce6c2d0c63c71e25.svg',
  '/static/media/aws.0db2175b638c3193b1fc.webp',
  '/static/media/bg_grass_dark.2746742e5f7996e18fec.webp',
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
  '/static/media/blender.c31b246925b0a869b9e544087f5bf487.svg',
  '/static/media/bootstrap.ee0c611cd9332c0f84e9ea91e7229fbc.svg',
  '/static/media/bun.62ba9c6bd9227753197425c698356918.svg',
  '/static/media/c.797520509cf8c9829afec70a1bf92ac1.svg',
  '/static/media/chakraui.8569189478300ba251d38a0dae4b1e3b.svg',
  '/static/media/claude.1dafc8c640c7e2d5ab9d2b595d25e509.svg',
  '/static/media/controller.fd7a3670dd200185c351.webp',
  '/static/media/convex.67ddbbb36f07572df1f11cfa52549f82.svg',
  '/static/media/cplusplus.3869c4da4a47c02531b5f985550061f6.svg',
  '/static/media/css.11f162aefa139cf2e84907b081b11d02.svg',
  '/static/media/docker.f9f97b60eb161535b80d3d8ec8e54560.svg',
  '/static/media/dotnet.1c7fb8dc55cbb7f35c8ab1e74f19bb22.svg',
  '/static/media/drupal.860c372a883dbf88d65998f5378ca305.svg',
  '/static/media/ethereum.f2d1e4fcbb187e988eff1ce6c6b2533a.svg',
  '/static/media/ethers.05895af4d6d179f703c67710173846e8.svg',
  '/static/media/figma.178024bde7a6c34f287b3a464d1d77d4.svg',
  '/static/media/firebase.3777ac2d42ddf0f59a2327d45389e326.svg',
  '/static/media/gimp.a6e079e93a7e725399b831393e1704d6.svg',
  '/static/media/git.19064d2f488c9f4fcd25ba3896b0f66a.svg',
  '/static/media/github.7b8957dbab85107e12b6a994680a0b7c.svg',
  '/static/media/githubactions.c1e301e9c03e571db47139adfb575695.svg',
  '/static/media/githubcopilot.db9147f0c88fb3e97d2085ae4c2367e0.svg',
  '/static/media/gnubash.41b9926f5c0dd0f64671e8d2ae528ef2.svg',
  '/static/media/googleanalytics.ae372ec51904ef71a3390ad093d5ae0d.svg',
  '/static/media/googleappsscript.c6e8120a5ae341872947500c98ded50d.svg',
  '/static/media/graphql.520cc591fde466ac2efe0831dc00490c.svg',
  '/static/media/headerbg.9ff9f2354409587ceea7.webp',
  '/static/media/headericonsleft.f07a6d10985df2400773.webp',
  '/static/media/headericonsright.bd9295dc3c1f9ddcae83.webp',
  '/static/media/homebrew.059995bcd8da7766d4f406afddc1f2b3.svg',
  '/static/media/html5.74577817dde8fee285d3c8af53312ca6.svg',
  '/static/media/iterm2.e9fe5adbf59dc6649c3f7257c8bca646.svg',
  '/static/media/javascript.75fa9cdf8b00c1ddc571fbe57667c38f.svg',
  '/static/media/joomla.a28eedecd13b4444f9672bbecdf71ccd.svg',
  '/static/media/jquery.36057119c858e85dfb6548bbe2605e1a.svg',
  '/static/media/logo.fc8267db00bf2f6db60f.webp',
  '/static/media/maduro.e07b7a928b384a613dc6.webp',
  '/static/media/maw_poked.91d8a70a018a688e6108.gif',
  '/static/media/maw_standing.b737e7ebc25c1e386866.gif',
  '/static/media/maw_walking.8ed401cf17fdc814c9dd.gif',
  '/static/media/maw_waving.c1f9aef73ce81b23a6b9.gif',
  '/static/media/mongodb.4a790e2582289412e0a4231ceed7faa4.svg',
  '/static/media/moralis.0e3398a6b92ae5c170c8.webp',
  '/static/media/mysql.72bab5fa7feeb9a145757ae05fffc00e.svg',
  '/static/media/netlify.9837716dbc64ff437053ea700446c878.svg',
  '/static/media/nextdotjs.10d70a5cf0d559c0eb4207542afb9f72.svg',
  '/static/media/nodedotjs.dd4b66b98a4a174f0db5e89c1189ead6.svg',
  '/static/media/npm.2b9f00532406a32dcac6b23b93ab2e45.svg',
  '/static/media/nvm.233094477291af6cdbcfc6a914bef4d2.svg',
  '/static/media/pc.88a36eeaaad7c754562b.webp',
  '/static/media/php.e4210e03f1cb945dbe3d64ebc14b5fad.svg',
  '/static/media/phpmyadmin.0187e0f58721c20b297407bb8eec3ebc.svg',
  '/static/media/postgresql.665a7ea642ea53ee6518509534d89d42.svg',
  '/static/media/posthog.006747825df2446a80336492d1eeb0bc.svg',
  '/static/media/postman.96ecf7ba8bef907c606ffef96f10eaee.svg',
  '/static/media/pwa.8afee95d323047b244eaa44c2cb812fb.svg',
  '/static/media/python.cd1e1de5623bcbd8c00476be7777946f.svg',
  '/static/media/radio.2437e93202efe3a27448.webp',
  '/static/media/react.1495a6a0c751ac52af3164f785e64d7b.svg',
  '/static/media/redux.f00e75102a7095565fdc3515ae2d4cf5.svg',
  '/static/media/sanity.47bfbd573d6249115fa509d0c1da0886.svg',
  '/static/media/stackoverflow.4f129c6580484b5b157bad4f526a43cb.svg',
  '/static/media/strapi.61053d8acf23d65fe23efdf52e329a24.svg',
  '/static/media/stripe.5bc7e11ce567a53084e950c15e9b3a3b.svg',
  '/static/media/supabase.bcf7f6d128a5e50780dc6baad66e339e.svg',
  '/static/media/tailwindcss.d09fc953e7affe05a4e0202f8596256f.svg',
  '/static/media/tmux.66bb88bea38c581b17162844285e08a6.svg',
  '/static/media/typescript.81185ef2134e44bcaed5cb3a0ddb5f33.svg',
  '/static/media/vercel.e8b00b740a0728d3dea722f8f3f0ef3a.svg',
  '/static/media/virtualbox.8b43f236b7cc26989baee88dae25d1e8.svg',
  '/static/media/vite.858b7afaa0ccbf45a2a89a3222fbfad7.svg',
  '/static/media/vscode.700ff5d49d5bbb25d5f1.webp',
  '/static/media/web3dotjs.d66f26336bd54f86a2eae6aa2c7eee5a.svg',
  '/static/media/webassembly.ca31b669b0be73b4961d13799ccb0f4f.svg',
  '/static/media/webgl.96c1f6312c5ea8b2c2a3021eb463e787.svg',
  '/static/media/webpack.37bd18a14fe4296df978c64f4b1849e9.svg',
  '/static/media/wordpress.9a8f7e6f0baa5b6b3eed270a75687e8c.svg',
  '/static/media/zsh.b75e98edc05df0d11a9beb5a2be7d967.svg'
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