if(!self.define){let e,i={};const n=(n,t)=>(n=new URL(n+".js",t).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const c=e=>n(e,o),d={module:{uri:o},exports:s,require:c};i[o]=Promise.all(t.map((e=>d[e]||c(e)))).then((e=>(r(...e),s)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"8815e814b8d1c02492461aabf47bd8e3"},{url:"main.bundle.js",revision:"718e1d0634e83d21bb9768ac6624f850"},{url:"main.bundle.js.LICENSE.txt",revision:"dca2216dcfc4f9591480833c2418b5cd"}],{})}));
