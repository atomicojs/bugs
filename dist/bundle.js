(()=>{"use strict";const e=e=>"function"==typeof e,t=e=>"object"==typeof e,n=null,r=[!0,1,"","1","true"];function o(o,u,a,c,f){let{type:d,reflect:p,event:h,value:m,attr:y=s(u)}=t(a)&&a!=n?a:{type:a},v=!(d==Function||d==n);Object.defineProperty(o,u,{set(t){let o=this[u],{error:s,value:a}=function(e,t){if(e==n)return{value:t};try{if(e==Boolean?t=r.includes(t):"string"==typeof t&&(t=e==Number?Number(t):e==Object||e==Array?JSON.parse(t):t),{}.toString.call(t)==`[object ${e.name}]`)return{value:t,error:e==Number&&Number.isNaN(t)}}catch(e){}return{value:t,error:!0}}(d,v&&e(t)?t(o):t);if(s&&null!=a)throw{message:`The value defined for prop '${u}' must be of type '${d.name}'`,value:a,target:this};o!=a&&(this._props[u]=a,this.update(),h&&l(this,h),this.updated.then((()=>{p&&(this._ignoreAttr=y,i(this,d,y,this[u]),this._ignoreAttr=null)})))},get(){return this._props[u]}}),null!=m&&(f[u]=m),c[y]=u}const l=(e,{type:t,base:n=CustomEvent,...r})=>e.dispatchEvent(new n(t,r)),s=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),i=(e,n,r,o)=>null==o||n==Boolean&&!o?e.removeAttribute(r):e.setAttribute(r,t(o)?JSON.stringify(o):n==Boolean?"":o);let u,a;function c(e,t,n){return u.use(e,t,n)}const f={id:1,className:1,checked:1,value:1,selected:1},d={list:1,type:1,size:1,form:1,width:1,height:1,src:1},p={},h=[],m=document,y=Symbol(),v=Symbol();function g(e,t,n=v,r){let o;if(t&&t[n]&&t[n].vnode==e||e.vdom!=y)return t;!e&&t||(r=r||"svg"==e.type,o=!("host"==e.type||(1==e.raw?t==e.type:2==e.raw?t instanceof e.type:t?t.localName==e.type:t)),o&&(e.ref?(t=e.ref.cloneNode(!0))[n]=e.ref[n]:null!=e.type&&(e.ref=t=1==e.raw?e.type:2==e.raw?new e.type:r?m.createElementNS("http://www.w3.org/2000/svg",e.type):m.createElement(e.type,e.is?{is:e.is}:void 0))));let l=t[n]?t[n].vnode:p,s=l.props||p,i=l.children||h,u=o||!t[n]?{}:t[n].handlers,a=t[n]&&t[n].fragment;if(e.shadow&&(t.shadowRoot||t.attachShadow({mode:"open"})),e.props!=s&&function(e,t,n,r,o){for(let l in t)l in n||w(e,l,t[l],null,o,r);for(let l in n)w(e,l,t[l],n[l],o,r)}(t,s,e.props,u,r),e.children!=i){let o=e.shadow?t.shadowRoot:t;a=function(e,t,n,r,o){e=e?Array.isArray(e)?e:[e]:null;let l,s=t||{s:n.appendChild(new Comment),e:n.appendChild(new Comment)},{s:i,e:u,k:a}=s,c=a&&new Set,f=i;const d=e=>{const{length:t}=e;for(let s=0;s<t;s++){const t=e[s],i=typeof t;if(null==t||"boolean"==i||"function"==i)continue;if(Array.isArray(t)){d(t);continue}if("object"==i&&t.vdom!=y)continue;const p=t.vdom&&t.key,h=a&&null!=p&&a.get(p);f!=u&&f===h?c.delete(f):f=f==u?u:f.nextSibling;const m=a?h:f;let v=m;if(t.vdom)v=g(t,m,r,o);else{const e=t+"";3!=v.nodeType?v=new Text(e):v.data!=e&&(v.data=e)}v!=f&&(a&&c.delete(v),!m||a?(n.insertBefore(v,f),a&&f!=u&&c.add(f)):m==u?n.insertBefore(v,u):(n.replaceChild(v,m),f=v)),null!=p&&(l=l||new Map,l.set(p,v))}};if(e&&d(e),f=f==u?u:f.nextSibling,t&&f!=u)for(;f!=u;){let e=f;f=f.nextSibling,e.remove()}return c&&c.forEach((e=>e.remove())),s.k=l,s}(e.children,a,o,n,(!r||"foreignObject"!=e.type)&&r)}return t[n]={vnode:e,handlers:u,fragment:a},t}function w(n,r,o,l,s,i){if(o=null==o?null:o,l=null==l?null:l,(r="class"!=r||s?r:"className")in n&&f[r]&&(o=n[r]),l!==o&&"shadowDom"!=r&&"children"!=r&&"key"!=r&&"_"!=r[0])if("o"==r[0]&&"n"==r[1]&&(e(l)||e(o)))!function(e,t,n,r){r.handleEvent||(r.handleEvent=t=>r[t.type].call(e,t)),n?(r[t]||e.addEventListener(t,r),r[t]=n):r[t]&&(e.removeEventListener(t,r),delete r[t])}(n,r.slice(2),l,i);else if("ref"==r)l&&(l.current=n);else if("style"==r){let e=n.style;l=l||"";let r=t(o=o||""),s=t(l);if(r)for(let t in o){if(!s)break;t in l||b(e,t,null)}if(s)for(let t in l){let n=l[t];r&&o[t]===n||b(e,t,n)}else e.cssText=l}else!s&&!d[r]&&r in n||e(l)||e(o)?n[r]=null==l?"":l:null==l?n.removeAttribute(r):n.setAttribute(r,t(l)?JSON.stringify(l):l)}function b(e,t,n){let r="setProperty";null==n&&(r="removeProperty",n=null),~t.indexOf("-")?e[r](t,n):e[t]=n}async function E(e,t){let n,r=Symbol(),o=function(t,n){let r={},o={use:function(e,t,n){let o=a++;return r[o]=[e(r[o]?r[o][0]:void 0),t,n],r[o][0]},host:n,update:()=>e.update()};function l(e,t){for(let n in r){let o=r[n];o[e]&&(o[0]=o[e](o[0],t))}}return{load:function(e){let t;a=0,u=o;try{t=e()}finally{u=null}return t},cleanEffects:function(e){return l(1,e),()=>{l(2,e),e&&(r={})}}}}(0,e);e.symbolId=r,e.mounted=new Promise((t=>e.mount=t)),e.unmounted=new Promise((t=>e.unmount=t));const l=()=>t({...e._props});e.update=async()=>{if(!n){let t;n=!0,e.updated=new Promise((e=>t=e)).then((e=>e())),await e.mounted,g(o.load(l),e,r),n=!1,t(o.cleanEffects())}},await e.unmounted,o.cleanEffects(!0)()}let N=t=>(n,r)=>{let o=([t,r],o)=>{if(!o)return[t||n(r),r];e(t)&&t()};c((([t,n]=[])=>(!n&&n||(n&&function(e,t){let n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}(n,r)?t=t||!0:(e(t)&&t(),t=null)),[t,r])),1==t&&o,2==t&&o)},A=(N(1),N(2));var S=function(e,t,n,r){var o;t[0]=0;for(var l=1;l<t.length;l++){var s=t[l++],i=t[l]?(t[0]|=s?1:2,n[t[l++]]):t[++l];3===s?r[0]=i:4===s?r[1]=Object.assign(r[1]||{},i):5===s?(r[1]=r[1]||{})[t[++l]]=i:6===s?r[1][t[++l]]+=i+"":s?(o=e.apply(i,S(e,i,n,["",null])),r.push(o),i[0]?t[0]|=2:(t[l-2]=0,t[l]=o)):r.push(i)}return r},k=new Map;const C=function(e){var t=k.get(this);return t||(t=new Map,k.set(this,t)),(t=S(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,r=1,o="",l="",s=[0],i=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?s.push(0,e,o):3===r&&(e||o)?(s.push(3,e,o),r=2):2===r&&"..."===o&&e?s.push(4,e,0):2===r&&o&&!e?s.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(s.push(r,0,o,n),r=6),e&&(s.push(r,e,0,n),r=6)),o=""},u=0;u<e.length;u++){u&&(1===r&&i(),i(u));for(var a=0;a<e[u].length;a++)t=e[u][a],1===r?"<"===t?(i(),s=[s],r=3):o+=t:4===r?"--"===o&&">"===t?(r=1,o=""):o=t+o[0]:l?t===l?l="":o+=t:'"'===t||"'"===t?l=t:">"===t?(i(),r=1):r&&("="===t?(r=5,n=o,o=""):"/"===t&&(r<5||">"===e[u][a+1])?(i(),3===r&&(s=s[0]),r=s,(s=s[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(i(),r=2):o+=t),3===r&&"!--"===o&&(r=4,s=s[0])}return i(),s}(e)),t),arguments,[])).length>1?t:t[0]}.bind((function(e,t,...n){let r=t||p,{children:o}=r;o=null!=o?o:n.length?n:h;const l=!!e&&(e instanceof Node?1:e.prototype instanceof HTMLElement&&2);return{vdom:y,type:e,props:r,children:o,key:r.key,shadow:r.shadowDom,raw:l}}));customElements.define("my-component",function(e,t=HTMLElement){let n={},r={},{props:l}=e;class s extends t{constructor(){super(),this._props={},E(this,e);for(let e in r)this[e]=r[e];this.update()}connectedCallback(){this.mount()}async disconnectedCallback(){await this.mounted,!this.isConnected&&this.unmount()}attributeChangedCallback(e,t,r){e!==this._ignoreAttr&&t!==r&&(this[n[e]]=r)}}for(let e in l)o(s.prototype,e,l[e],n,r);return s.observedAttributes=Object.keys(n),s}((function(){const t=c(((e={current:undefined})=>e));const n=function(t){const[n,r]=function(t){let n=u.update;return c(((r=[])=>(r[1]||(r[0]=e(t)?t():t,r[1]=t=>{(t=e(t)?t(r[0]):t)!=r[0]&&(r[0]=t,n())}),r)))}([]);return A((()=>{const{current:e}=t,n="slotchange";r(e.assignedElements());const o=()=>r(e.assignedElements());return e.addEventListener(n,o),()=>e.removeEventListener(n,o)}),[]),n}(t);return console.log(n),C`<host shadowDom>
    <slot ref=${t}></slot>
  </host>`})))})();