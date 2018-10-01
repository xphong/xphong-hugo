importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "4f3946ef2f814ff0fb5f9fb5639061e5"
  },
  {
    "url": "admin/index.html",
    "revision": "c1e695726bee24670f9d5284d0bc7fa6"
  },
  {
    "url": "blog/2011-05-20-about-phong-huynh/index.html",
    "revision": "998e35bfe97c33e81f9a109bdfd96ce5"
  },
  {
    "url": "blog/2012-03-03-unix-commands/index.html",
    "revision": "c50f0277160d6569cdcb906a14cbedd1"
  },
  {
    "url": "blog/2012-03-09-unix-commands-2/index.html",
    "revision": "0d8849e5605f97d79367a9de0953d65e"
  },
  {
    "url": "blog/2012-04-10-web-application-deployment-descriptor/index.html",
    "revision": "65a53c23eacb275acdded2271d801159"
  },
  {
    "url": "blog/2012-04-14-java-servlet/index.html",
    "revision": "432f55440914ff4e7f7b20b92d9065c9"
  },
  {
    "url": "blog/2012-04-26-java-entity-bean/index.html",
    "revision": "7bb622ea32ac907add55a52ce578664f"
  },
  {
    "url": "blog/2012-04-30-java-session-bean/index.html",
    "revision": "ceec1aceb7266f4081ab7dc4a4a5c9e4"
  },
  {
    "url": "blog/2012-05-16-flyweight-design-pattern/index.html",
    "revision": "e66119e0eb992f0b51a6a98ade8053cf"
  },
  {
    "url": "blog/2012-06-11-asp-net-assignment-2-problem/index.html",
    "revision": "326e1beac4eeda42d468bf83d7b0c097"
  },
  {
    "url": "blog/2012-07-08-software-development-cycle/index.html",
    "revision": "70d94981ebee09b202a28cc374ae3d18"
  },
  {
    "url": "blog/2012-07-17-mediator-design-pattern/index.html",
    "revision": "e992ccf2bd1667f502b3c532bdb30ee6"
  },
  {
    "url": "blog/2012-09-15-seo-and-google-search/index.html",
    "revision": "116d1f27e48afb19049b09a41d376496"
  },
  {
    "url": "blog/2012-09-19-asp-net-wizard-step/index.html",
    "revision": "31fd75a00cdfb7d1be4de8dbd44f1b68"
  },
  {
    "url": "blog/2012-09-22-importance-of-a-portfolio/index.html",
    "revision": "0ca75e29b0b344945155f6123b42da4f"
  },
  {
    "url": "blog/2012-10-08-grouping-layers/index.html",
    "revision": "d0d298e95ec6f1290537ba60ab62cfbb"
  },
  {
    "url": "blog/2012-11-10-early-morning-thoughts/index.html",
    "revision": "265057c42bbabf37ec33e9165a7a5046"
  },
  {
    "url": "blog/2012-11-17-little-things-are-merely-the-cause-of-great-problems/index.html",
    "revision": "2ad5c6b08dc94a402691c5da28721586"
  },
  {
    "url": "blog/2013-02-16-fonts-fonts-everywhere/index.html",
    "revision": "2241d2a91ae7916b4c46b974a1c6bdce"
  },
  {
    "url": "blog/2013-06-01-sql-server-data-transfer-with-visual-studio-2010-ultimate/index.html",
    "revision": "22838ec76debc546d287bfb14a97a71f"
  },
  {
    "url": "blog/2013-10-20-internship-learning-experience/index.html",
    "revision": "e16d2ebcb8a20174038f80b99a4c6903"
  },
  {
    "url": "blog/2014-04-01-learning-new-technology/index.html",
    "revision": "9f48c9a91945f8ee6dcd1ff253e265b0"
  },
  {
    "url": "blog/2014-07-22-transitioning-school-workplace/index.html",
    "revision": "1092d6b766f604b2963024e320fa9290"
  },
  {
    "url": "blog/2016-01-21-javascript-unit-testing/index.html",
    "revision": "dc58bfb0bebfc2b499cb403f629928c4"
  },
  {
    "url": "blog/2017-01-07-simple-react-redux-starter-guide-documentation/index.html",
    "revision": "a6adb38e46a429e79afbe189c83cf293"
  },
  {
    "url": "blog/2017-03-06-angular-vs-react/index.html",
    "revision": "15da4ed6e5f34ec9661a880ae56776f6"
  },
  {
    "url": "blog/2017-11-12-marvel-api-vuepack-vue-vuex/index.html",
    "revision": "9cd2e7708b1d492fe3574b52339eb492"
  },
  {
    "url": "blog/2017-12-16-end-end-testing-important-team/index.html",
    "revision": "4b6f18a56062ae770f7964ec4543c2d5"
  },
  {
    "url": "blog/2018-09-22-why-migrate-from-wordpress-static-site-generator/index.html",
    "revision": "db9dc4645378b7bfc71c6b81a9252585"
  },
  {
    "url": "blog/2018-09-24-portfolio-wordpress-to-hugo-static-site-migration/index.html",
    "revision": "2ea0dc37a92cb03c0da6c76cd6c0e256"
  },
  {
    "url": "blog/index.html",
    "revision": "780255cb189b202fc0fa25052fb3bc74"
  },
  {
    "url": "css/main.css",
    "revision": "8c4cfc517ac2dbcdc1afb2847b56464e"
  },
  {
    "url": "index.html",
    "revision": "218e38d805107266e738dc6d2cfdab03"
  },
  {
    "url": "js/docs.min.js",
    "revision": "10f6448593c200dd250a5af5cfc74a36"
  },
  {
    "url": "js/ie10-viewport-bug-workaround.js",
    "revision": "e00b941fbb45e15c1fca528cdcce2444"
  },
  {
    "url": "js/main.js",
    "revision": "297bf0988e86d41792d4338456efb77d"
  },
  {
    "url": "main.css",
    "revision": "efd9f53b9d145b7c2f3f9ccb8f2a21b2"
  },
  {
    "url": "portfolio/architech/index.html",
    "revision": "5a44408bf5d1a72f49309fe43ef6fda7"
  },
  {
    "url": "portfolio/hubba/index.html",
    "revision": "cc8dbbba80167c411ad3ef7aee9fd36a"
  },
  {
    "url": "portfolio/index.html",
    "revision": "aafd26b4a1c6ca130b89b4d5cc0bede8"
  },
  {
    "url": "portfolio/jabfadc/index.html",
    "revision": "e021eb802a59ac691e52b4bdfa935e8d"
  },
  {
    "url": "portfolio/scribblelive/index.html",
    "revision": "62797ea026e9813a86ff5a95bfb39c34"
  },
  {
    "url": "projects/index.html",
    "revision": "1c0bfad9f522aa182db4938edad928ea"
  },
  {
    "url": "img/avatar.jpeg",
    "revision": "306fead1ac448b450aa2a007791ce38e"
  },
  {
    "url": "img/favicon.ico",
    "revision": "8d1580b2bb05bc397f4e179d483eb32f"
  }
]);

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  workbox.strategies.cacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-resources',
  }),
);

workbox.googleAnalytics.initialize();

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);

workbox.routing.registerRoute(
  /.*(?:googleapis|gstatic)\.com.*$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'external-resources'
  }),
);
