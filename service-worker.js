"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/woodtheory/index.html","e60c4300c7c5a37a544eaa8e05a5af5e"],["/woodtheory/static/css/main.484afbd6.css","10ac20d2aa695c971881a73e15140fed"],["/woodtheory/static/js/main.daf47e65.js","73c8010d5a33ce9354a0d5e11c72cd29"],["/woodtheory/static/media/Cal1.df1e1312.jpg","df1e1312f00b3ee846409e336449c19a"],["/woodtheory/static/media/Cal2.6fc91ea7.jpg","6fc91ea7d8734fc99c1c7abff1819919"],["/woodtheory/static/media/Cal3.30e95996.jpg","30e95996ec951eeff488e273144c98bf"],["/woodtheory/static/media/Che1.90d8121e.jpg","90d8121e433fc77b5a4886bdeb2ffb7c"],["/woodtheory/static/media/Che2.f917ce7e.jpg","f917ce7eda324e0c4508152bda79944f"],["/woodtheory/static/media/Cup1.8ee873a3.jpg","8ee873a39919e6d4ba413ed335c02aea"],["/woodtheory/static/media/Cup2.f16ab3b1.jpg","f16ab3b1f2831b78752efe2686682b12"],["/woodtheory/static/media/Cut.fc10bf49.jpg","fc10bf498d88b1a12dbba484b231194a"],["/woodtheory/static/media/Dock1.c514f101.jpg","c514f10196122840eede0861f24ffe25"],["/woodtheory/static/media/Dock2.a3be4694.jpg","a3be4694d0cc73416be0122f134ba892"],["/woodtheory/static/media/Dock3.0c8ea578.jpg","0c8ea578c17a33ba7e4a880cf58d88c1"],["/woodtheory/static/media/Lin1.fe846831.jpg","fe84683167eed694c5fc795858752a70"],["/woodtheory/static/media/Lin2.fcce5a09.jpg","fcce5a092441c884b72d61d2e47c9055"],["/woodtheory/static/media/Pla1.63039c83.jpg","63039c83e7487fde20ed2bcdbf58e396"],["/woodtheory/static/media/Sboard.20bd22c2.jpg","20bd22c2f9b0130035caf2c2101540b6"],["/woodtheory/static/media/card.ba5881bc.jpg","ba5881bc1427b8d8d55f0cd1e409a26f"],["/woodtheory/static/media/logo.5021ab7c.png","5021ab7ce728d3d243e02366ed688676"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var n="/woodtheory/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});