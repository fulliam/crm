if(!self.define){let e,r={};const s=(s,c)=>(s=new URL(s+".js",c).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let o={};const t=e=>s(e,n),l={module:{uri:n},exports:o,require:t};r[n]=Promise.all(c.map((e=>l[e]||t(e)))).then((e=>(i(...e),o)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"acticom"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/crm/css/app.4468368d.css",revision:null},{url:"/crm/index.html",revision:"78e5020bff098cc72ca7ad70942d619f"},{url:"/crm/js/app.97a34e44.js",revision:null},{url:"/crm/js/chunk-vendors.83cf67d2.js",revision:null},{url:"/crm/manifest.json",revision:"4038ec68d58442a75cbc0f600c23ad5f"},{url:"/crm/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map