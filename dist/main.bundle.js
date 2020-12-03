(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(15),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"* {\r\n  box-sizing: border-box;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  width: 500px;\r\n  border: 1px solid #eee;\r\n  border-radius: 3px;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nbutton {\r\n  font-weight: bold;\r\n  padding: 5px 15px;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  margin: 0 3px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput {\r\n  padding: 8px 15px;\r\n  outline: 0;\r\n  border: 1px solid #ddd;\r\n  border-radius: 3px;\r\n}\r\n\r\nform input {\r\n  flex: 1;\r\n  margin-right: 15px;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px 0px;\r\n}\r\n\r\nli input {\r\n  flex: 1;\r\n}\r\n\r\nli p {\r\n  flex: 1;\r\n}\r\n\r\nli .todo {\r\n  flex: 0 0 20px;\r\n  height: 20px;\r\n  border-radius: 30px;\r\n  margin-right: 15px;\r\n  border: 2px solid #333;\r\n}\r\n\r\nli .todo.done {\r\n  background: #333;\r\n}\r\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,SAAS;EACT,kBAAkB;EAClB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  width: 500px;\r\n  border: 1px solid #eee;\r\n  border-radius: 3px;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nbutton {\r\n  font-weight: bold;\r\n  padding: 5px 15px;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  margin: 0 3px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput {\r\n  padding: 8px 15px;\r\n  outline: 0;\r\n  border: 1px solid #ddd;\r\n  border-radius: 3px;\r\n}\r\n\r\nform input {\r\n  flex: 1;\r\n  margin-right: 15px;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px 0px;\r\n}\r\n\r\nli input {\r\n  flex: 1;\r\n}\r\n\r\nli p {\r\n  flex: 1;\r\n}\r\n\r\nli .todo {\r\n  flex: 0 0 20px;\r\n  height: 20px;\r\n  border-radius: 30px;\r\n  margin-right: 15px;\r\n  border: 2px solid #333;\r\n}\r\n\r\nli .todo.done {\r\n  background: #333;\r\n}\r\n"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&o[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),r.push(d))}},r}},15:n=>{function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}n.exports=function(n){var e,t,o=(t=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],t=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(t=(a=c.next()).done)&&(e.push(a.value),!r||e.length!==r);t=!0);}catch(n){o=!0,i=n}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return e}}(e,t)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(d," */"),A=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[i].concat(A).concat([u]).join("\n")}return[i].join("\n")}},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function a(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},t=[],o=0;o<n.length;o++){var c=n[o],d=r.base?c[0]+r.base:c[0],u=e[d]||0,A="".concat(d," ").concat(u);e[d]=u+1;var l=a(A),s={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(s)):i.push({identifier:A,updater:m(s,r),references:1}),t.push(A)}return t}function d(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var u,A=(u=[],function(n,r){return u[n]=r,u.filter(Boolean).join("\n")});function l(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=A(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function s(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,f=0;function m(n,r){var e,t,o;if(r.singleton){var i=f++;e=p||(p=d(r)),t=l.bind(null,e,i,!1),o=l.bind(null,e,i,!0)}else e=d(r),t=s.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var d=c(n,r),u=0;u<e.length;u++){var A=a(e[u]);0===i[A].references&&(i[A].updater(),i.splice(A,1))}e=d}}}}},r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={id:t,exports:{}};return n[t](o,o.exports,e),o.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=e(379),r=e.n(n),t=e(426);function o(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}r()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var i=document.querySelector("ul"),a=document.querySelector("form"),c=document.querySelector("form > input");a.addEventListener("submit",(function(n){n.preventDefault();var r=c.value;c.value="",s(r)}));var d=[{text:"je suis une todo",done:!1,editMode:!1},{text:"faire du Javascript",done:!0,editMode:!1}],u=function(){var n,r=d.map((function(n,r){return n.editMode?l(n,r):A(n,r)}));i.innerHTML="",i.append.apply(i,function(n){if(Array.isArray(n))return o(n)}(n=r)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,r){if(n){if("string"==typeof n)return o(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,r):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())},A=function(n,r){var e=document.createElement("li"),t=document.createElement("button");t.innerHTML="Supprimer";var o=document.createElement("button");return o.innerHTML="Edit",t.addEventListener("click",(function(n){n.stopPropagation(),p(r)})),o.addEventListener("click",(function(n){n.stopPropagation(),m(r)})),e.innerHTML='\n        <span class="todo '.concat(n.done?"done":"",'"></span>\n        <p>').concat(n.text,"</p>\n    "),e.addEventListener("click",(function(n){f(r)})),e.append(o,t),e},l=function(n,r){var e=document.createElement("li"),t=document.createElement("input");t.type="text",t.value=n.text;var o=document.createElement("button");o.innerHTML="Save";var i=document.createElement("button");return i.innerHTML="Cancel",i.addEventListener("click",(function(n){n.stopPropagation(),m(r)})),o.addEventListener("click",(function(n){b(r,t)})),e.append(t,i,o),e},s=function(n){d.push({text:n,done:!1}),u()},p=function(n){d.splice(n,1),u()},f=function(n){d[n].done=!d[n].done,u()},m=function(n){d[n].editMode=!d[n].editMode,u()},b=function(n,r){var e=r.value;d[n].text=e,d[n].editMode=!1,u()};u()})()})();
//# sourceMappingURL=main.bundle.js.map