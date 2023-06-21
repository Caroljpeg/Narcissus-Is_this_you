(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function q(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var t="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function aa(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var u=aa(this);function v(a,b){if(b)a:{var c=u;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&t(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(g||"")+"_"+f++,g)}function c(g,e){this.g=g;t(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",f=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=u[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&t(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ba(q(this))}})}return a});function ba(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:q(a)}}function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(a[f]=d[f])}return a};v("Object.assign",function(a){return a||ca});
function y(){this.l=!1;this.h=null;this.i=void 0;this.g=1;this.u=this.m=0;this.j=null}function B(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}y.prototype.o=function(a){this.i=a};function C(a,b){a.j={K:b,L:!0};a.g=a.m||a.u}y.prototype.return=function(a){this.j={return:a};this.g=this.u};function D(a,b,c){a.g=c;return{value:b}}function da(a){a.g=3;a.m=0}function ea(a){a.m=0;a.j=null}function fa(a){this.g=new y;this.h=a}
function ha(a,b){B(a.g);var c=a.g.h;if(c)return E(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return F(a)}function E(a,b,c,d){try{var f=b.call(a.g.h,c);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return a.g.l=!1,f;var g=f.value}catch(e){return a.g.h=null,C(a.g,e),F(a)}a.g.h=null;d.call(a.g,g);return F(a)}
function F(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.l=!1,{value:b.value,done:!1}}catch(c){a.g.i=void 0,C(a.g,c)}a.g.l=!1;if(a.g.j){b=a.g.j;a.g.j=null;if(b.L)throw b.K;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ia(a){this.next=function(b){B(a.g);a.g.h?b=E(a,a.g.h.next,b,a.g.o):(a.g.o(b),b=F(a));return b};this.throw=function(b){B(a.g);a.g.h?b=E(a,a.g.h["throw"],b,a.g.o):(C(a.g,b),b=F(a));return b};this.return=function(b){return ha(a,b)};this[Symbol.iterator]=function(){return this}}function ja(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}return new Promise(function(d,f){function g(e){e.done?d(e.value):Promise.resolve(e.value).then(b,c).then(g,f)}g(a.next())})}
function G(a){return ja(new ia(new fa(a)))}
v("Promise",function(a){function b(e){this.h=0;this.i=void 0;this.g=[];this.o=!1;var h=this.j();try{e(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.g=null}function d(e){return e instanceof b?e:new b(function(h){h(e)})}if(a)return a;c.prototype.h=function(e){if(null==this.g){this.g=[];var h=this;this.i(function(){h.l()})}this.g.push(e)};var f=u.setTimeout;c.prototype.i=function(e){f(e,0)};c.prototype.l=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var h=0;h<e.length;++h){var k=
e[h];e[h]=null;try{k()}catch(m){this.j(m)}}}this.g=null};c.prototype.j=function(e){this.i(function(){throw e;})};b.prototype.j=function(){function e(m){return function(l){k||(k=!0,m.call(h,l))}}var h=this,k=!1;return{resolve:e(this.F),reject:e(this.l)}};b.prototype.F=function(e){if(e===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.H(e);else{a:switch(typeof e){case "object":var h=null!=e;break a;case "function":h=!0;break a;default:h=!1}h?this.D(e):this.m(e)}};
b.prototype.D=function(e){var h=void 0;try{h=e.then}catch(k){this.l(k);return}"function"==typeof h?this.I(h,e):this.m(e)};b.prototype.l=function(e){this.u(2,e)};b.prototype.m=function(e){this.u(1,e)};b.prototype.u=function(e,h){if(0!=this.h)throw Error("Cannot settle("+e+", "+h+"): Promise already settled in state"+this.h);this.h=e;this.i=h;2===this.h&&this.G();this.C()};b.prototype.G=function(){var e=this;f(function(){if(e.N()){var h=u.console;"undefined"!==typeof h&&h.error(e.i)}},1)};b.prototype.N=
function(){if(this.o)return!1;var e=u.CustomEvent,h=u.Event,k=u.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof h?e=new h("unhandledrejection",{cancelable:!0}):(e=u.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return k(e)};b.prototype.C=function(){if(null!=this.g){for(var e=0;e<this.g.length;++e)g.h(this.g[e]);this.g=null}};var g=new c;b.prototype.H=
function(e){var h=this.j();e.v(h.resolve,h.reject)};b.prototype.I=function(e,h){var k=this.j();try{e.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};b.prototype.then=function(e,h){function k(n,p){return"function"==typeof n?function(A){try{m(n(A))}catch(z){l(z)}}:p}var m,l,r=new b(function(n,p){m=n;l=p});this.v(k(e,m),k(h,l));return r};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.v=function(e,h){function k(){switch(m.h){case 1:e(m.i);break;case 2:h(m.i);break;default:throw Error("Unexpected state: "+
m.h);}}var m=this;null==this.g?g.h(k):this.g.push(k);this.o=!0};b.resolve=d;b.reject=function(e){return new b(function(h,k){k(e)})};b.race=function(e){return new b(function(h,k){for(var m=w(e),l=m.next();!l.done;l=m.next())d(l.value).v(h,k)})};b.all=function(e){var h=w(e),k=h.next();return k.done?d([]):new b(function(m,l){function r(A){return function(z){n[A]=z;p--;0==p&&m(n)}}var n=[],p=0;do n.push(void 0),p++,d(k.value).v(r(n.length-1),l),k=h.next();while(!k.done)})};return b});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var f=d.length,g=0;g<f;g++){var e=d[g];if(b.call(c,e,g,d)){b=e;break a}}b=void 0}return b}});function ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,f={next:function(){if(!d&&c<a.length){var g=c++;return{value:b(g,a[g]),done:!1}}d=!0;return{done:!0,value:void 0}}};f[Symbol.iterator]=function(){return f};return f}
v("Array.prototype.keys",function(a){return a?a:function(){return ka(this,function(b){return b})}});v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};var f=[],g="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof g){b=g.call(b);for(var e=0;!(g=b.next()).done;)f.push(c.call(d,g.value,e++))}else for(g=b.length,e=0;e<g;e++)f.push(c.call(d,b[e],e));return f}});
v("Array.prototype.fill",function(a){return a?a:function(b,c,d){var f=this.length||0;0>c&&(c=Math.max(0,f+c));if(null==d||d>f)d=f;d=Number(d);0>d&&(d=Math.max(0,f+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});function H(a){return a?a:Array.prototype.fill}v("Int8Array.prototype.fill",H);v("Uint8Array.prototype.fill",H);v("Uint8ClampedArray.prototype.fill",H);v("Int16Array.prototype.fill",H);v("Uint16Array.prototype.fill",H);v("Int32Array.prototype.fill",H);
v("Uint32Array.prototype.fill",H);v("Float32Array.prototype.fill",H);v("Float64Array.prototype.fill",H);v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});var la=this||self;function I(a,b){a=a.split(".");var c=la;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};function J(a){this.g=ma===ma?a:""}J.prototype.toString=function(){return this.g.toString()};var ma={};function K(a,b,c){a=document.createElement(a);b&&a.classList.add(b);if(c)for(b=w(c),c=b.next();!c.done;c=b.next())a.appendChild(c.value);return a}function L(a,b){return K("div",a,b)}function M(a,b){return K("span",a,b)}function N(a){var b=K("img","");b.src=a||"";return b};function na(a,b){var c=this;this.config=a;this.h={};var d,f=L("dropdown-wrapper",[d=L("dropdown",[L("dropdown-trigger",[this.g=M(),L("arrow")]),this.options=L("dropdown-options")])]);f.onclick=function(){a.B&&a.B();d.classList.toggle("open");d.g=function(){a.A&&a.A()}};for(var g={},e=w(a.options),h=e.next();!h.done;g={s:g.s},h=e.next())g.s=h.value,h=void 0,this.options.appendChild(h=M("dropdown-option")),this.h[g.s.value]=h,h.textContent=g.s.name,g.s.prefix&&h.prepend(g.s.prefix),h.setAttribute("data-value",
g.s.value),h.onclick=function(k){return function(){O(c,k.s.value)}}(g);window.addEventListener("click",function(k){d.contains(k.target)||d.classList.remove("open")});b.appendChild(f)}
function O(a,b){for(var c=w(a.config.options),d=c.next();!d.done;d=c.next()){d=d.value;var f=a.h[d.value];if(d.value===b&&!f.classList.contains("selected"))return(b=a.options.querySelector(".selected"))&&b.classList.remove("selected"),f.classList.add("selected"),a.g.textContent=f.textContent,a.config.onclick(d),!0}return!1}function P(a,b){var c=a.options.querySelector(".selected");c&&(c.classList.remove("selected"),a.g.textContent=void 0===b?"":b)};function Q(a){this.config=a}
Q.prototype.create=function(a,b,c){var d=this,f=c.appendChild(document.createElement("div"));f.classList.add("control-panel-entry");f.classList.add("control-panel-slider");c=f.appendChild(document.createElement("span"));c.classList.add("label");c.textContent=this.config.title;c=new na({options:this.config.options.map(function(g){return Object.assign({},g,{data:null})}),B:function(){f.style.zIndex="1000"},onclick:function(g){b[d.config.field]=g.value;a();if(d.config.onselectionchanged)d.config.onselectionchanged(g)},A:function(){f.style.zIndex=
"100"}},f);0<this.config.options.length&&O(c,b[this.config.field]||this.config.options[0].value)};Q.prototype.update=function(){};function R(){this.i=this.counter=0;this.g=Array.from({length:10}).fill(0)}
R.prototype.create=function(a,b,c){b=c.appendChild(document.createElement("div"));b.classList.add("control-panel-entry");b.classList.add("control-panel-fps");a=b.appendChild(document.createElement("canvas"));this.h=b.appendChild(document.createElement("div"));this.h.classList.add("fps-text");c=b.appendChild(document.createElement("div"));c.classList.add("fps-30");c.textContent="30";b=b.appendChild(document.createElement("div"));b.classList.add("fps-60");b.textContent="60";a.width=100;a.height=100;
this.j=a.getContext("2d");oa(this,0)};R.prototype.update=function(){};R.prototype.tick=function(){var a=Math.floor(performance.now()/1E3);1<=a-this.i&&(oa(this,this.counter),this.i=a,this.counter=0);++this.counter};
function oa(a,b){a.g.shift();a.g.push(b);var c=a.j;c.fillStyle="#309f93";c.clearRect(0,0,c.canvas.width,c.canvas.height);for(var d=0;10>d;++d){var f=Math.min(100,Math.max(0,a.g[d]));c.fillRect(10*d+1,100-f+1,8,f)}c.setLineDash([2,2]);c.strokeStyle="#a0a0a0a0";c.lineWidth=2;c.beginPath();c.moveTo(0,30);c.lineTo(100,30);c.stroke();c.beginPath();c.moveTo(0,60);c.lineTo(100,60);c.stroke();a.h.textContent=b.toFixed(0)+" fps"};function S(a){this.config=a}
S.prototype.create=function(a,b,c){var d=this;this.options=b;b=this.config;c=c.appendChild(document.createElement("div"));c.classList.add("control-panel-entry");c.classList.add("control-panel-slider");var f=c.appendChild(document.createElement("span"));f.classList.add("label");(this.g=c.appendChild(document.createElement("span"))).classList.add("callout");var g=this.h=c.appendChild(document.createElement("input"));g.classList.add("value");g.type="range";b.range?(g.min=""+b.range[0],g.max=""+b.range[1],
g.step=void 0===b.step?"any":""+b.step):b.discrete&&(g.min="0",g.max=""+(Object.keys(b.discrete).length-1),g.step="1");g.oninput=function(){pa(d,Number(g.value))};g.onchange=function(){var e=Number(g.value);d.config.discrete&&(e=Object.keys(d.config.discrete)[e],Array.isArray(d.config.discrete)&&(e=Number(e)));d.options[d.config.field]=e;a()};f.textContent=b.title};
S.prototype.update=function(){var a=this.options[this.config.field];a=this.config.discrete&&!Array.isArray(this.config.discrete)?Object.keys(this.config.discrete).indexOf(a):a;this.h.value=""+a;pa(this,a)};function pa(a,b){b=a.config.discrete?Object.values(a.config.discrete)[b]:b;a.g.textContent=""+b};/*

 SPDX-License-Identifier: Apache-2.0
*/
var qa={facingMode:"user",width:640,height:480},ra={allowVideo:!0,allowImage:!0,examples:{videos:[],images:[]}};function T(a){return"https://fonts.gstatic.com/s/i/googlematerialicons/"+a+"/v8/white-24dp/1x/gm_"+a+"_white_24dp.png"}
function sa(a,b){var c=a.getVideoTracks()[0],d=c.getSettings().width,f=c.getSettings().height,g=d/f;if(1E-6>Math.abs(g-b))return a;if(g>b){var e=f;var h=2*Math.floor(f*b/2)}else h=d,e=2*Math.floor(d/b/2);a=new MediaStreamTrackProcessor({track:c});b=new MediaStreamTrackGenerator({kind:"video"});c=new TransformStream({transform:function(k,m){var l,r,n,p;return G(function(A){l=2*Math.floor((d-h)/4);r=2*Math.floor((f-e)/4);n={x:l,y:r,width:h,height:e};p=new VideoFrame(k,{visibleRect:n});k.close();m.enqueue(p);
A.g=0})}});a.readable.pipeThrough(c).pipeTo(b.writable);return new MediaStream([b])}function U(a){this.j=[];this.u=0;this.l=!1;this.aspectRatio=0;this.config=Object.assign({},ra,a);this.config.cameraOptions=Object.assign({},qa,a.cameraOptions||{})}
function ta(){var a,b,c,d,f,g;return G(function(e){switch(e.g){case 1:return D(e,navigator.mediaDevices.enumerateDevices(),2);case 2:a=e.i;b=a.filter(function(h){return"videoinput"===h.kind&&h.label});if(b.length){e.g=3;break}e.m=4;return D(e,navigator.mediaDevices.getUserMedia({video:!0}),6);case 6:c=e.i;d=w(c.getTracks());for(f=d.next();!f.done;f=d.next())g=f.value,g.stop();da(e);break;case 4:return ea(e),e.return(!1);case 3:return e.return(!0)}})}
function ua(){var a,b,c,d,f,g;return G(function(e){switch(e.g){case 1:return a=[],D(e,ta(),2);case 2:b=e.i;if(!b){e.g=3;break}return D(e,navigator.mediaDevices.enumerateDevices(),4);case 4:for(c=e.i,d=w(c),f=d.next();!f.done;f=d.next())g=f.value,""!==g.label&&"videoinput"===g.kind&&a.push({label:g.label,deviceId:g.deviceId});case 3:return e.return(a)}})}function V(a){window.requestAnimationFrame(function(){a.tick()})}
U.prototype.tick=function(){var a=this,b=null;this.l&&(this.video.paused||this.video.currentTime===this.u||(this.i||(va(this,this.video.currentTime/this.video.duration),this.h.time.textContent=wa(this.video.currentTime)),this.u=this.video.currentTime,b=this.config.onFrame?this.config.onFrame(this.video,{width:this.video.videoWidth,height:this.video.videoHeight}):null),b?b.then(function(){V(a)}):V(this))};U.prototype.setVideoCameraAspectRatio=function(a){this.aspectRatio=a;this.i&&xa(this,this.i)};
function xa(a,b){function c(){a.video.play();a.l=!0;V(a);a.video.removeEventListener("loadedmetadata",c)}b=0!==a.aspectRatio?sa(b,a.aspectRatio):b;a.i=b;a.video.srcObject=b;a.video.addEventListener("loadedmetadata",c)}function ya(a){var b,c,d,f;return G(function(g){a.h.parent.style.display="none";a.l=!1;if(a.i){b=a.i.getTracks();c=w(b);for(d=c.next();!d.done;d=c.next())f=d.value,f.stop();a.i=void 0}g.g=0})}
function za(a){var b,c,d,f,g,e,h,k,m;return G(function(l){if(1==l.g)return D(l,ua(),2);b=l.i.map(function(r){return{label:r.label,type:"webcam",O:r,start:function(){return Aa(a,r)}}});f=null==(c=a.config.examples)?void 0:null==(d=c.videos)?void 0:d.map(function(r){return{label:r.name,type:"video",video:a.video,start:function(){Ba(a,r.src)}}});h=null==(g=a.config.examples)?void 0:null==(e=g.images)?void 0:e.map(function(r){return{label:r.name,type:"image",image:a.g,start:function(){Ca(a,r.src)}}});
return l.return([].concat(x(b),x(null!=(k=f)?k:[]),x(null!=(m=h)?m:[])))})}function Da(a,b){var c,d;return G(function(f){return 1==f.g?D(f,null==(d=(c=a.config).M)?void 0:d.call(c),2):3!=f.g?D(f,ya(a),3):D(f,b.start(),0)})}function Ea(a,b){var c,d,f,g,e;return G(function(h){return 1==h.g?D(h,null==(d=(c=a.config).onFrame)?void 0:d.call(c,b,{width:b.naturalWidth,height:b.naturalHeight}),2):h.return(null==(f=a.config)?void 0:null==(e=(g=f).onSourceChanged)?void 0:e.call(g,b.src,"image"))})}
function Fa(a){var b,c,d;return G(function(f){if(1==f.g)return a.h.parent.style.display="flex",va(a,0),D(f,a.video.play(),2);a.C();a.l=!0;V(a);return f.return(null==(b=a.config)?void 0:null==(d=(c=b).onSourceChanged)?void 0:d.call(c,a.video.src,"video"))})}
function Aa(a,b){var c,d,f,g,e;return G(function(h){return 1==h.g?(d={video:Object.assign({},{deviceId:b.deviceId},null!=(c=a.config.cameraOptions)?c:{})},D(h,null==(f=a.config)?void 0:null==(e=(g=f).M)?void 0:e.call(g),2)):3!=h.g?D(h,ya(a),3):h.return(navigator.mediaDevices.getUserMedia(d).then(function(k){xa(a,k);var m,l;return null==(m=a.config)?void 0:null==(l=m.onSourceChanged)?void 0:l.call(m,b.deviceId,"webcam")}).catch(function(k){console.error("Failed to acquire camera feed: "+k);alert("Failed to acquire camera feed: "+
k);throw k;}))})}
function Ga(a,b){a.m=new na({options:a.j.map(function(c){var d=void 0;"image"===c.type?d=N("https://fonts.gstatic.com/s/i/googlematerialicons/image/v12/gm_grey-24dp/1x/gm_image_gm_grey_24dp.png"):"video"===c.type&&(d=N("https://fonts.gstatic.com/s/i/googlematerialicons/videocam/v12/gm_grey-24dp/1x/gm_videocam_gm_grey_24dp.png"));return{name:c.label,value:c.label,data:c,prefix:d}}),onclick:function(c){a.h.parent.style.display="none";c=c.data;c.start();window.localStorage.setItem("SOURCE_PICKER_LAST_SOURCE",c.label)},
B:function(){a.o.style.zIndex="2000"},A:function(){a.o.style.zIndex="100"}},b)}
function Ha(a,b){var c=b.appendChild(document.createElement("input"));c.type="file";c.style.display="none";b.appendChild(M("file-selection",[b=L("",[N(T("file_upload"))])]));b.onclick=function(){c.click()};c.onchange=function(){var d,f,g,e,h,k;return G(function(m){d=c.files;if(null==(f=d)?0:f.length){g=d[0];e=g.type.toLowerCase();h=e.substring(0,e.indexOf("/"));var l;(l="undefined"!==typeof MediaSource&&g instanceof MediaSource)||(l=g.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i),l=2===(null==
l?void 0:l.length)&&(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif)$/i.test(l[1])||/^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(l[1])||/^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(l[1])));if(!l)throw Error("");l=new J(URL.createObjectURL(g));k=l.toString();"image"===h?(P(a.m,g.name),Ca(a,k)):"video"===h&&(P(a.m,g.name),Ba(a,k))}m.g=0})}}
function Ca(a,b){a.g.onload=function(){return G(function(c){a.config.onFrame?c=D(c,Da(a,{label:"file",type:"image",image:a.g,start:function(){return G(function(d){return D(d,Ea(a,a.g),0)})}}),0):(c.g=0,c=void 0);return c})};a.g.src=b}
function Ba(a,b){function c(){return G(function(d){if(1==d.g)return a.video.loop=!0,a.config?d=D(d,Da(a,{label:"file",type:"video",video:a.video,start:function(){return Fa(a)}}),2):(d.g=2,d=void 0),d;a.video.removeEventListener("loadedmetadata",c);d.g=0})}a.video.addEventListener("loadedmetadata",c);a.video.srcObject=null;a.video.src=b}function Ia(a,b){O(a.m,b.label)||P(a.m)}
function Ja(a){var b=window.localStorage.getItem("SOURCE_PICKER_LAST_SOURCE"),c=a.j.find(function(d){return d.label===b});c?Ia(a,c):0<a.j.length&&Ia(a,a.j[0])}
U.prototype.create=function(a,b,c){var d=this,f=this.o=c.appendChild(document.createElement("div"));f.classList.add("control-panel-entry");f.classList.add("control-panel-source-picker");var g=L("source-selection");f.append(g);za(this).then(function(e){d.j=e;Ga(d,g);Ha(d,g);e=g.appendChild(document.createElement("div"));e.classList.add("inputs");d.video=e.appendChild(document.createElement("video"));d.video.setAttribute("crossorigin","anonymous");d.video.setAttribute("playsinline","true");d.g=e.appendChild(document.createElement("img"));
d.g.setAttribute("crossorigin","anonymous");var h,k;null==(k=(h=d.config).onVideoElementCreated)||k.call(h,d.video);Ka(d,f);Ja(d)})};
function Ka(a,b){var c=T("pause"),d=T("play_arrow"),f,g,e,h;b.append(e=L("video-controls",[h=N(c),g=L("video-track"),f=L("video-slider-ball"),b=M("video-time")]));a.h={parent:e,J:f,track:g,time:b};b.textContent="00:00";f.style.display="inline-block";f.onmousedown=function(k){function m(){k.preventDefault();document.removeEventListener("mousemove",l);r||a.video.play();document.removeEventListener("mouseup",m)}function l(n){k.preventDefault();var p=e.getBoundingClientRect(),A=f.getBoundingClientRect(),
z=g.getBoundingClientRect();n=n.clientX-p.left-A.width/2;p=z.left-p.left;n<p?n=p:n>p+z.width&&(n=p+z.width);f.style.left=n+"px";a.video.currentTime=(n-p)/z.width*a.video.duration}k.preventDefault();var r=a.video.paused;a.video.pause();document.addEventListener("mousemove",l);document.addEventListener("mouseup",m)};h.onclick=function(){a.video.paused?(a.video.play(),h.src=c):(a.video.pause(),h.src=d)};a.C=function(){a.video.paused&&(h.src=d);h.src=c}}
function va(a,b){var c=a.h.J,d=a.h.track.getBoundingClientRect();a=a.h.parent.getBoundingClientRect();c.style.left=d.left-a.left+d.width*b+"px"}function wa(a){var b=Math.floor(a%60).toString();b=1===b.length?"0"+b:b;a=Math.floor(a/60).toString();a=1===a.length?"0"+a:a;return a+":"+b}U.prototype.update=function(){if(this.g&&!this.l&&this.config.onFrame)this.config.onFrame(this.g,{width:this.g.naturalWidth,height:this.g.naturalHeight})};function W(a){this.config=a}W.prototype.create=function(a,b,c){a=c.appendChild(document.createElement("div"));a.classList.add("control-panel-entry");a.classList.add("control-panel-text");a.textContent=this.config.title};W.prototype.update=function(){};function X(a){this.config=a}
X.prototype.create=function(a,b,c){var d=this;this.h=a;this.options=b;this.g=c.appendChild(document.createElement("div"));this.g.classList.add("control-panel-entry");this.g.classList.add("control-panel-toggle");this.g.onclick=function(){d.options[d.config.field]=!d.options[d.config.field];d.h()};a=this.g.appendChild(document.createElement("span"));a.classList.add("label");this.value=this.g.appendChild(document.createElement("span"));this.value.classList.add("value");a.textContent=this.config.title};
X.prototype.update=function(){this.options[this.config.field]?(this.value.textContent="Yes",this.g.classList.add("yes"),this.g.classList.remove("no")):(this.value.textContent="No",this.g.classList.add("no"),this.g.classList.remove("yes"))};function Y(a,b){var c=this;this.parent=a;this.options=b;this.i=[];this.h=!0;a=[L("hamburger-menu"),L("hamburger-menu"),L("hamburger-menu")];var d=L("control-panel-shell",[this.g=L("control-panel"),this.l=L("control-panel-expander",a)]);this.l.onclick=function(){c.h=!c.h;d.style.left=c.h?"0px":"-"+(d.offsetLeft+c.g.offsetLeft+c.g.offsetWidth-15)+"px";d.classList.toggle("control-panel-expanded")};this.parent.appendChild(d)}
Y.prototype.add=function(a){var b=this;a=w(a);for(var c=a.next();!c.done;c=a.next())c=c.value,this.i.push(c),c.create(function(){Z(b)},this.options,this.g);Z(this);return this};Y.prototype.on=function(a){this.j=a;Z(this);return this};function Z(a){for(var b=w(a.i),c=b.next();!c.done;c=b.next())c.value.update();a.j&&a.j(a.options)}I("ControlPanel",Y);I("Slider",S);I("StaticText",W);I("Toggle",X);I("SourcePicker",U);I("FPS",R);I("DropDownControl",Q);}).call(this);