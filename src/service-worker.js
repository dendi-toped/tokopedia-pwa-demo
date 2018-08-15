import workbox from 'workbox-sw';

const self = this;

if(workbox){
  console.log('yeay! workbox is loaded');
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
} else {
  console.log('boo! workbox didnt load');
}
// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config

// app-shell
workbox.routing.registerRoute("/", workbox.strategies.networkFirst({})
);