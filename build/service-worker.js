"use strict";var precacheConfig=[["/index.html","d12e9237464a6e42aedcb9d5483b5fae"],["/static/css/main.bb2e8af8.css","0157f1415cb78025a547f71ac187f692"],["/static/js/main.91b2f399.js","3ffad6d8c8c29a4704a036191e670fe8"],["/static/media/MEight.474ddc9a.jpg","474ddc9acf495ecf31be9379b4f83ce0"],["/static/media/MEighteen.1e2797c3.jpg","1e2797c35776dc920d088915c38f009e"],["/static/media/MEleven.2049db25.jpg","2049db257b72dbf1d88c137476777add"],["/static/media/MFour.2646237e.jpg","2646237e7c303427f0a93d36aa78e179"],["/static/media/MFourteen.eddc430d.jpg","eddc430d3dc0385dfbd88f99b464a4aa"],["/static/media/MNine.ce7212f0.jpg","ce7212f004e547365b75495149b049ef"],["/static/media/MOne.26f78feb.jpg","26f78febbc2215d321c9d7cc218b8442"],["/static/media/MSeven.db1c67c0.jpg","db1c67c0acff9d81a7c1f6f743fd4713"],["/static/media/MSeventeen.506aa8f3.jpg","506aa8f3675295493aa693fadef83f91"],["/static/media/MSix.5796533a.jpg","5796533ad9cbb03cf5faa6a8f64c3db9"],["/static/media/MSixteen.5c63c531.jpg","5c63c531a0d4fe5faa1af99b5e702bcb"],["/static/media/MTen.f7dddf95.jpg","f7dddf95ee0b2f6a5f551a45e93912ea"],["/static/media/MThirteen.40727902.jpg","407279026a108154e4bbd548a9df643e"],["/static/media/MThree.75a1c95b.jpg","75a1c95b5f8f00042d975e9f276d0b36"],["/static/media/MTwelve.c5a0d086.jpg","c5a0d086d922bf2496fb2155c2d2c5ff"],["/static/media/MTwo.bc0d707f.jpg","bc0d707f19b1e35aac1e4ed281fc12fd"],["/static/media/Mfifteen.e584b634.jpg","e584b634dc9220c7632a4380d4ca21f9"],["/static/media/REight.36de5376.jpg","36de537644809c530730de95c9469e8f"],["/static/media/RFive.ff647093.jpg","ff647093dce362785ea59ca6841b5486"],["/static/media/RFour.02b52afe.jpg","02b52afefd271d846767e005b1b5edb6"],["/static/media/RNine.1c7f8cd4.jpg","1c7f8cd447a29ac9be3da17af201f82b"],["/static/media/ROne.5ddc2f28.jpg","5ddc2f283cba3276ecdf4ff4b46e38d8"],["/static/media/RSeven.0ceabbde.jpg","0ceabbdefa26cd642a5e55f6c8086296"],["/static/media/RSix.a521da5a.jpg","a521da5a682a706d88c1236c91e330e0"],["/static/media/RTen.335e14c0.jpg","335e14c0a5667baf9b71c31c9633c473"],["/static/media/RThree.30766115.jpg","30766115e274da2f74744e434bead24a"],["/static/media/RTwo.f3bfa664.jpg","f3bfa66440093f4be8348774e81b511b"],["/static/media/W.b1e29db9.png","b1e29db98fc2ef00fa197af862c229bf"],["/static/media/backdrop.88cd927a.jpg","88cd927a454bfecc7301dadcf95bec8f"],["/static/media/kitchen.3e9fef12.jpg","3e9fef121428c9671d745af32adafe57"],["/static/media/kitchenTwo.f7dddf95.jpg","f7dddf95ee0b2f6a5f551a45e93912ea"],["/static/media/outdoors.5c63c531.jpg","5c63c531a0d4fe5faa1af99b5e702bcb"],["/static/media/stairs.eddc430d.jpg","eddc430d3dc0385dfbd88f99b464a4aa"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});