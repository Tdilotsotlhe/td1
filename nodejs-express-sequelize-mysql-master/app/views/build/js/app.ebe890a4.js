(function(e){function t(t){for(var o,c,l=t[0],u=t[1],i=t[2],d=0,f=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(f.length)f.shift()();return n.push.apply(n,i||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(o=!1)}o&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},a={app:0},n=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c4e4d8bf"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=a[e]=[t,o]}));t.push(r[2]=o);var n,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var i=new Error;n=function(t){u.onerror=u.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,r[1](i)}a[e]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:u})}),12e4);u.onerror=u.onload=n,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var s=i;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3785:function(e,t,r){"use strict";r("4570")},4570:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("7a23"),a={id:"nav"},n=Object(o["g"])("Home"),c=Object(o["g"])(" | "),l=Object(o["g"])("About");function u(e,t){var r=Object(o["w"])("router-link"),u=Object(o["w"])("router-view");return Object(o["q"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",a,[Object(o["h"])(r,{to:"/"},{default:Object(o["B"])((function(){return[n]})),_:1}),c,Object(o["h"])(r,{to:"/about"},{default:Object(o["B"])((function(){return[l]})),_:1})]),Object(o["h"])(u)],64)}r("3785");const i={};i.render=u;var d=i,s=r("9483");Object(s["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var f=r("6c02"),v=r("cf05"),p=r.n(v),b={class:"home"},h=Object(o["e"])("img",{alt:"Vue logo",src:p.a},null,-1);function g(e,t,r,a,n,c){var l=Object(o["w"])("HelloWorld");return Object(o["q"])(),Object(o["d"])("div",b,[h,Object(o["h"])(l,{msg:"Welcome to Your Vue.js App"})])}Object(o["t"])("data-v-100d1cf0");var j={class:"hello"},m=Object(o["f"])('<p data-v-100d1cf0> For a guide and recipes on how to configure / customize this project,<br data-v-100d1cf0> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-100d1cf0>vue-cli documentation</a>. </p><h3 data-v-100d1cf0>Installed CLI Plugins</h3><ul data-v-100d1cf0><li data-v-100d1cf0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-100d1cf0>babel</a></li><li data-v-100d1cf0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-100d1cf0>pwa</a></li><li data-v-100d1cf0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-100d1cf0>router</a></li><li data-v-100d1cf0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-100d1cf0>eslint</a></li></ul><h3 data-v-100d1cf0>Essential Links</h3><ul data-v-100d1cf0><li data-v-100d1cf0><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-100d1cf0>Core Docs</a></li><li data-v-100d1cf0><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-100d1cf0>Forum</a></li><li data-v-100d1cf0><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-100d1cf0>Community Chat</a></li><li data-v-100d1cf0><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-100d1cf0>Twitter</a></li><li data-v-100d1cf0><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-100d1cf0>News</a></li></ul><h3 data-v-100d1cf0>Ecosystem</h3><ul data-v-100d1cf0><li data-v-100d1cf0><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-100d1cf0>vue-router</a></li><li data-v-100d1cf0><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-100d1cf0>vuex</a></li><li data-v-100d1cf0><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-100d1cf0>vue-devtools</a></li><li data-v-100d1cf0><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-100d1cf0>vue-loader</a></li><li data-v-100d1cf0><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-100d1cf0>awesome-vue</a></li></ul>',7);function O(e,t,r,a,n,c){return Object(o["q"])(),Object(o["d"])("div",j,[Object(o["e"])("h1",null,Object(o["y"])(r.msg),1),m])}Object(o["r"])();var w={name:"HelloWorld",props:{msg:String}};r("5954");w.render=O,w.__scopeId="data-v-100d1cf0";var k=w,y={name:"Home",components:{HelloWorld:k}};y.render=g;var _=y,P=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],x=Object(f["a"])({history:Object(f["b"])(),routes:P}),A=x;Object(o["c"])(d).use(A).mount("#app")},5954:function(e,t,r){"use strict";r("7ca0")},"7ca0":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ebe890a4.js.map