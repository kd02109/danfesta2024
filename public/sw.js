if(!self.define){let e,a={};const c=(c,s)=>(c=new URL(c+".js",s).href,a[c]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=a,document.head.appendChild(e)}else e=c,importScripts(c),a()})).then((()=>{let e=a[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let i={};const l=e=>c(e,t),r={module:{uri:t},exports:i,require:l};a[t]=Promise.all(s.map((e=>r[e]||l(e)))).then((e=>(n(...e),i)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"c6ecd087708c8e056188a9336376e4df"},{url:"/_next/static/chunks/0e762574-88535e9325c4d30d.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/0e762574-88535e9325c4d30d.js.map",revision:"fc1e2f2e77f3219c10f745c031a0133c"},{url:"/_next/static/chunks/1192-dd5e42b33c7735e9.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/1192-dd5e42b33c7735e9.js.map",revision:"7fc79ef952aea229866e5db2f6cc3491"},{url:"/_next/static/chunks/146-4bc3ac7bfeeac655.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/146-4bc3ac7bfeeac655.js.map",revision:"e4650e6d6a80a335e56f53edc03e7c43"},{url:"/_next/static/chunks/1749-261b095058d04c45.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/1749-261b095058d04c45.js.map",revision:"ef9c6fc65a6574dc6955062b11ec3563"},{url:"/_next/static/chunks/248-c5f0da968d311b68.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/248-c5f0da968d311b68.js.map",revision:"8bd7249ec9318dcf8a8acfc4f0f45cdd"},{url:"/_next/static/chunks/2499-0c06dc44d5af34f7.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/2499-0c06dc44d5af34f7.js.map",revision:"822cb18a3c3c63489d7e881a3c33a389"},{url:"/_next/static/chunks/396464d2-6403dc51c357bec3.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/396464d2-6403dc51c357bec3.js.map",revision:"3b8b83f0682db65cdb8fbe3f106b5161"},{url:"/_next/static/chunks/5414-e37bc82090ac1842.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/5414-e37bc82090ac1842.js.map",revision:"eb1a79190d3700ccba3268f96045fde0"},{url:"/_next/static/chunks/6289-4b4a49479cf9a198.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/6289-4b4a49479cf9a198.js.map",revision:"4160444f0cf669c8c9ded7c9ce94c3a4"},{url:"/_next/static/chunks/6977-d23ce891770f8d25.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/6977-d23ce891770f8d25.js.map",revision:"9f45e48a4e05766fcea4566dd8c0f4e5"},{url:"/_next/static/chunks/7057-42e6dfc072d6ec34.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/7057-42e6dfc072d6ec34.js.map",revision:"a22f11dc26b3029a150858448c4e583e"},{url:"/_next/static/chunks/795d4814-1825ceedbd4b9b37.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/820-4da19da031dcf6e6.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/820-4da19da031dcf6e6.js.map",revision:"e1eeee774411601bb91723e6bec5c02f"},{url:"/_next/static/chunks/8269-776efddda2d0e8bc.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/8269-776efddda2d0e8bc.js.map",revision:"f790814be14c0ea1fb4498f4380ab4ff"},{url:"/_next/static/chunks/8599-3f27d2cb21481826.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/8599-3f27d2cb21481826.js.map",revision:"51af8822112f1c2601be6159b2f63567"},{url:"/_next/static/chunks/899-a64a5a38849de045.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/899-a64a5a38849de045.js.map",revision:"2509e2d1b6c9c5934b72beacea1751cb"},{url:"/_next/static/chunks/9c4e2130-30c361cfea5800aa.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/9c4e2130-30c361cfea5800aa.js.map",revision:"aa1167c50b89f8cc3442925535621420"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/events/page-3ab4708a6843064f.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/id/complete/page-508d027f4bebddb4.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/id/complete/page-508d027f4bebddb4.js.map",revision:"35184983e01f4ad05493198ee2862f95"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/layout-6af65318fecc7073.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/page-a05c7aa4c820b973.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/page-a05c7aa4c820b973.js.map",revision:"7c8c01024ee713b5a478e395976bfaff"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/password/complete/page-13bb2ae2c51a1814.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/password/complete/page-13bb2ae2c51a1814.js.map",revision:"63faaba70e5ba3cdb46ef1ff96b4cd6e"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/jeomshim/layout-b471a1da0e009d65.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/jeomshim/page-1752468e379ad521.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/jeomshim/page-1752468e379ad521.js.map",revision:"568af31c5329271cfe842186ead80f90"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/layout-3eba0f0f5239ee49.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/layout-3eba0f0f5239ee49.js.map",revision:"901a08ec3633aeef894862014556bf98"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/lineup/page-c01f09ff3a0cf6fb.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/lineup/page-c01f09ff3a0cf6fb.js.map",revision:"70a05624a16eea53ec2dc57932bf6f21"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/live-map/page-1e9a48a2952cb3ab.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/login/page-fbdf5a42c8a93367.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/login/page-fbdf5a42c8a93367.js.map",revision:"6a634b5dec4a5c00379e79cbabea0a11"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/my-tickets/page-970ae110bd6a2626.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/my-tickets/page-970ae110bd6a2626.js.map",revision:"5792cc175d9c2bb3a413cf8bf4d91e91"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/mypage/layout-2e9d014b3d28d93c.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/mypage/page-c5d682711c83e0b2.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/mypage/page-c5d682711c83e0b2.js.map",revision:"1b38b57dd1bec9f3848c1a96d895b348"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/notice/page-410316c877c09c7f.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/notice/page-410316c877c09c7f.js.map",revision:"1b1609df1c2d6e020d1b000aa2f2b8e5"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/password/layout-3ad363614f58a1d2.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/password/page-91f0ead061293cdf.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/password/page-91f0ead061293cdf.js.map",revision:"a8cb1931910691d2ade999e237e8460c"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/signup/complete/page-c51ea89c4679e410.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/signup/complete/page-c51ea89c4679e410.js.map",revision:"338abaa00b1ee251e886f865c6e64f10"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/signup/layout-74b930fcd8078329.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/signup/page-4466f1a5eb4d8b90.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/sms/layout-41068f7b40d26eb8.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/sms/page-f5d60581146c9abb.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/sms/page-f5d60581146c9abb.js.map",revision:"45ba106b7d98d5472e9a420d454b9743"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/ticketing/%5BeventId%5D/page-7e3ecfce3165c482.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/ticketing/%5BeventId%5D/page-7e3ecfce3165c482.js.map",revision:"06c75ef12a00690e1bdcc04654006d6a"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/ticketing/%5BeventId%5D/result/page-df41306aaccca82f.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/ticketing/%5BeventId%5D/result/page-df41306aaccca82f.js.map",revision:"e7ba3650f0dc5ba3ddd7c2e9afb2421c"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/ticketing/page-0b65b82f0bb38943.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/ticketing/page-0b65b82f0bb38943.js.map",revision:"ab76bed6f8f2b8991d8132093e6b7831"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/verify/layout-ac97e9fec26287e9.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/verify/page-9de9883649581dc7.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/verify/page-9de9883649581dc7.js.map",revision:"0fd73159c5d380154ccdbaa835d71d16"},{url:"/_next/static/chunks/app/%5Blocale%5D/(root-nav)/layout-14dddac3b8e9371d.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(root-nav)/layout-14dddac3b8e9371d.js.map",revision:"1d3594ef7226db1379fd11181b3b6411"},{url:"/_next/static/chunks/app/%5Blocale%5D/(root-nav)/page-423f5ee7d3016da9.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/(root-nav)/page-423f5ee7d3016da9.js.map",revision:"3e00f88db02e44d6a0285c2f743ef9b2"},{url:"/_next/static/chunks/app/%5Blocale%5D/error-39e27c483d556eaa.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/%5Blocale%5D/error-39e27c483d556eaa.js.map",revision:"8667c8060b6ed78443790b680f0b00ff"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-58b3cf3b42a024e3.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/global-error-38f09e44e9d91157.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/global-error-38f09e44e9d91157.js.map",revision:"313768326e56f081ee4395166217da27"},{url:"/_next/static/chunks/app/layout-09416a8fbe43f992.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/layout-09416a8fbe43f992.js.map",revision:"ff27912b128db001064798265d3bd495"},{url:"/_next/static/chunks/app/not-found-bdb13884281a898d.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/app/not-found-bdb13884281a898d.js.map",revision:"6c932c1e7f1191808419adfd42da26ab"},{url:"/_next/static/chunks/app/page-d11402a8ab5a33aa.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/ee560e2c-fd01205a31de2fd4.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/ee560e2c-fd01205a31de2fd4.js.map",revision:"dd686c250a107d509532c3cd869128da"},{url:"/_next/static/chunks/f7333993-e3b5cc76884412c1.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/f7333993-e3b5cc76884412c1.js.map",revision:"c2138854f86015080c7f1e66e142c6a7"},{url:"/_next/static/chunks/fd9d1056-c2c56fe980bab7e3.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/fd9d1056-c2c56fe980bab7e3.js.map",revision:"c2a88be39685b7aa9c489578030d9144"},{url:"/_next/static/chunks/framework-9317b1ce0f036b87.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/framework-9317b1ce0f036b87.js.map",revision:"449f3e0236bc5724626b5ce34687690f"},{url:"/_next/static/chunks/main-46ca9092173d4388.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/main-46ca9092173d4388.js.map",revision:"27efe4c574fb6b5ca4a95b441f0f6632"},{url:"/_next/static/chunks/main-app-fc69dcfeabde6942.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/main-app-fc69dcfeabde6942.js.map",revision:"28d3a21aba348116e3cf254d9c33f3a2"},{url:"/_next/static/chunks/pages/_app-189ff7cf6f201b1a.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/pages/_app-189ff7cf6f201b1a.js.map",revision:"9da00d08e2996019e2e9118c1815f737"},{url:"/_next/static/chunks/pages/_error-bd178edd4bc85d3f.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/pages/_error-bd178edd4bc85d3f.js.map",revision:"54b84c03874446e45358ffecbc507680"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-9478e6d45a5dca2b.js",revision:"mR4SrySlg8OhYt5zmG2pl"},{url:"/_next/static/chunks/webpack-9478e6d45a5dca2b.js.map",revision:"6c6b639597b80f0d1a5e7cb6cd5effeb"},{url:"/_next/static/css/54a5a0f82b06a4ce.css",revision:"54a5a0f82b06a4ce"},{url:"/_next/static/css/54a5a0f82b06a4ce.css.map",revision:"5a4c0882dab78d00c7af81743e82fcce"},{url:"/_next/static/mR4SrySlg8OhYt5zmG2pl/_buildManifest.js",revision:"a6a1b02b264b0bd331368dbd8a70f310"},{url:"/_next/static/mR4SrySlg8OhYt5zmG2pl/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/feasta-logo.55d8e0c5.png",revision:"bc48c32abce854242186a1c89bf4699c"},{url:"/_next/static/media/perspaleta2_0020.280822ee.png",revision:"1ed6cc95733bc4b46294c9fbc4c63786"},{url:"/android-icon-144x144.png",revision:"443a9f512bea8510e5e9c10707d3a8ae"},{url:"/android-icon-192x192.png",revision:"c7edbbe8788d0be373d0407fad366b66"},{url:"/android-icon-36x36.png",revision:"4b298b2462abaae463bc7cfa9d49eda2"},{url:"/android-icon-48x48.png",revision:"28db9addbd3cd60129dbf9cc96dea120"},{url:"/android-icon-72x72.png",revision:"b09b61f96350d2c579590b7dd6a9f102"},{url:"/android-icon-96x96.png",revision:"1ba0538c51ebd1f67d7746364212df19"},{url:"/icons/feasta-logo.png",revision:"bc48c32abce854242186a1c89bf4699c"},{url:"/icons/github.svg",revision:"f25e1f27108b1129feb44146a5de3104"},{url:"/icons/logo.svg",revision:"6e9dc1a7cf26d332535900766941b376"},{url:"/icons/ticket.svg",revision:"b247fd9d87b1ceb717a6f54f20ce159a"},{url:"/images/glass.jpeg",revision:"c0d159c41fa5b80a9e2f180d4ca5d8a0"},{url:"/images/perspaleta2_0020.png",revision:"1ed6cc95733bc4b46294c9fbc4c63786"},{url:"/manifest.json",revision:"fda875c04c6f43c55db6f73f41dbeb09"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/qr-scanner.svg",revision:"34c11a3a8a64e6002d012b4ed2af747e"},{url:"/thumbnail.webp",revision:"bd1b1f9b792de4fc3708d6eddf7ac395"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:c,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
