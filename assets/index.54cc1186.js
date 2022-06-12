var cu=Object.defineProperty,uu=Object.defineProperties;var hu=Object.getOwnPropertyDescriptors;var ao=Object.getOwnPropertySymbols;var du=Object.prototype.hasOwnProperty,fu=Object.prototype.propertyIsEnumerable;var co=(t,e,n)=>e in t?cu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,uo=(t,e)=>{for(var n in e||(e={}))du.call(e,n)&&co(t,n,e[n]);if(ao)for(var n of ao(e))fu.call(e,n)&&co(t,n,e[n]);return t},ho=(t,e)=>uu(t,hu(e));const pu=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};pu();function tr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const _u="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gu=tr(_u);function kl(t){return!!t||t===""}function Ps(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=le(s)?bu(s):Ps(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(le(t))return t;if(ae(t))return t}}const mu=/;(?![^(]*\))/g,yu=/:(.+)/;function bu(t){const e={};return t.split(mu).forEach(n=>{if(n){const s=n.split(yu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function tn(t){let e="";if(le(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const s=tn(t[n]);s&&(e+=s+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nr=t=>le(t)?t:t==null?"":D(t)||ae(t)&&(t.toString===Ml||!M(t.toString))?JSON.stringify(t,Pl,2):String(t),Pl=(t,e)=>e&&e.__v_isRef?Pl(t,e.value):$t(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Ol(e)?{[`Set(${e.size})`]:[...e.values()]}:ae(e)&&!D(e)&&!Fl(e)?String(e):e,G={},Ut=[],Me=()=>{},wu=()=>!1,Cu=/^on[^a-z]/,Os=t=>Cu.test(t),sr=t=>t.startsWith("onUpdate:"),ge=Object.assign,ir=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vu=Object.prototype.hasOwnProperty,W=(t,e)=>vu.call(t,e),D=Array.isArray,$t=t=>Ds(t)==="[object Map]",Ol=t=>Ds(t)==="[object Set]",M=t=>typeof t=="function",le=t=>typeof t=="string",rr=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",Dl=t=>ae(t)&&M(t.then)&&M(t.catch),Ml=Object.prototype.toString,Ds=t=>Ml.call(t),Eu=t=>Ds(t).slice(8,-1),Fl=t=>Ds(t)==="[object Object]",or=t=>le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ls=tr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ms=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Iu=/-(\w)/g,ze=Ms(t=>t.replace(Iu,(e,n)=>n?n.toUpperCase():"")),Tu=/\B([A-Z])/g,nn=Ms(t=>t.replace(Tu,"-$1").toLowerCase()),Fs=Ms(t=>t.charAt(0).toUpperCase()+t.slice(1)),ii=Ms(t=>t?`on${Fs(t)}`:""),us=(t,e)=>!Object.is(t,e),ri=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},hs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fo;const Su=()=>fo||(fo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let He;class Nu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&He&&(this.parent=He,this.index=(He.scopes||(He.scopes=[])).push(this)-1)}run(e){if(this.active){const n=He;try{return He=this,e()}finally{He=n}}}on(){He=this}off(){He=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Ru(t,e=He){e&&e.active&&e.effects.push(t)}const lr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ll=t=>(t.w&at)>0,Bl=t=>(t.n&at)>0,Au=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=at},ku=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ll(i)&&!Bl(i)?i.delete(t):e[n++]=i,i.w&=~at,i.n&=~at}e.length=n}},vi=new WeakMap;let bn=0,at=1;const Ei=30;let Ae;const bt=Symbol(""),Ii=Symbol("");class ar{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ru(this,s)}run(){if(!this.active)return this.fn();let e=Ae,n=it;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ae,Ae=this,it=!0,at=1<<++bn,bn<=Ei?Au(this):po(this),this.fn()}finally{bn<=Ei&&ku(this),at=1<<--bn,Ae=this.parent,it=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(po(this),this.onStop&&this.onStop(),this.active=!1)}}function po(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let it=!0;const Wl=[];function sn(){Wl.push(it),it=!1}function rn(){const t=Wl.pop();it=t===void 0?!0:t}function Se(t,e,n){if(it&&Ae){let s=vi.get(t);s||vi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=lr()),Hl(i)}}function Hl(t,e){let n=!1;bn<=Ei?Bl(t)||(t.n|=at,n=!Ll(t)):n=!t.has(Ae),n&&(t.add(Ae),Ae.deps.push(t))}function Qe(t,e,n,s,i,r){const o=vi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&D(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":D(t)?or(n)&&l.push(o.get("length")):(l.push(o.get(bt)),$t(t)&&l.push(o.get(Ii)));break;case"delete":D(t)||(l.push(o.get(bt)),$t(t)&&l.push(o.get(Ii)));break;case"set":$t(t)&&l.push(o.get(bt));break}if(l.length===1)l[0]&&Ti(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Ti(lr(a))}}function Ti(t,e){const n=D(t)?t:[...t];for(const s of n)s.computed&&_o(s);for(const s of n)s.computed||_o(s)}function _o(t,e){(t!==Ae||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Pu=tr("__proto__,__v_isRef,__isVue"),Ul=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rr)),Ou=cr(),Du=cr(!1,!0),Mu=cr(!0),go=Fu();function Fu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=j(this);for(let r=0,o=this.length;r<o;r++)Se(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(j)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){sn();const s=j(this)[e].apply(this,n);return rn(),s}}),t}function cr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Ju:Kl:e?Vl:zl).get(s))return s;const o=D(s);if(!t&&o&&W(go,i))return Reflect.get(go,i,r);const l=Reflect.get(s,i,r);return(rr(i)?Ul.has(i):Pu(i))||(t||Se(s,"get",i),e)?l:_e(l)?o&&or(i)?l:l.value:ae(l)?t?ql(l):Bs(l):l}}const Lu=$l(),Bu=$l(!0);function $l(t=!1){return function(n,s,i,r){let o=n[s];if(An(o)&&_e(o)&&!_e(i))return!1;if(!t&&!An(i)&&(xi(i)||(i=j(i),o=j(o)),!D(n)&&_e(o)&&!_e(i)))return o.value=i,!0;const l=D(n)&&or(s)?Number(s)<n.length:W(n,s),a=Reflect.set(n,s,i,r);return n===j(r)&&(l?us(i,o)&&Qe(n,"set",s,i):Qe(n,"add",s,i)),a}}function Wu(t,e){const n=W(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Qe(t,"delete",e,void 0),s}function Hu(t,e){const n=Reflect.has(t,e);return(!rr(e)||!Ul.has(e))&&Se(t,"has",e),n}function Uu(t){return Se(t,"iterate",D(t)?"length":bt),Reflect.ownKeys(t)}const jl={get:Ou,set:Lu,deleteProperty:Wu,has:Hu,ownKeys:Uu},$u={get:Mu,set(t,e){return!0},deleteProperty(t,e){return!0}},ju=ge({},jl,{get:Du,set:Bu}),ur=t=>t,Ls=t=>Reflect.getPrototypeOf(t);function es(t,e,n=!1,s=!1){t=t.__v_raw;const i=j(t),r=j(e);n||(e!==r&&Se(i,"get",e),Se(i,"get",r));const{has:o}=Ls(i),l=s?ur:n?pr:fr;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function ts(t,e=!1){const n=this.__v_raw,s=j(n),i=j(t);return e||(t!==i&&Se(s,"has",t),Se(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ns(t,e=!1){return t=t.__v_raw,!e&&Se(j(t),"iterate",bt),Reflect.get(t,"size",t)}function mo(t){t=j(t);const e=j(this);return Ls(e).has.call(e,t)||(e.add(t),Qe(e,"add",t,t)),this}function yo(t,e){e=j(e);const n=j(this),{has:s,get:i}=Ls(n);let r=s.call(n,t);r||(t=j(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?us(e,o)&&Qe(n,"set",t,e):Qe(n,"add",t,e),this}function bo(t){const e=j(this),{has:n,get:s}=Ls(e);let i=n.call(e,t);i||(t=j(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Qe(e,"delete",t,void 0),r}function wo(){const t=j(this),e=t.size!==0,n=t.clear();return e&&Qe(t,"clear",void 0,void 0),n}function ss(t,e){return function(s,i){const r=this,o=r.__v_raw,l=j(o),a=e?ur:t?pr:fr;return!t&&Se(l,"iterate",bt),o.forEach((c,h)=>s.call(i,a(c),a(h),r))}}function is(t,e,n){return function(...s){const i=this.__v_raw,r=j(i),o=$t(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),h=n?ur:e?pr:fr;return!e&&Se(r,"iterate",a?Ii:bt),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:l?[h(u[0]),h(u[1])]:h(u),done:p}},[Symbol.iterator](){return this}}}}function tt(t){return function(...e){return t==="delete"?!1:this}}function zu(){const t={get(r){return es(this,r)},get size(){return ns(this)},has:ts,add:mo,set:yo,delete:bo,clear:wo,forEach:ss(!1,!1)},e={get(r){return es(this,r,!1,!0)},get size(){return ns(this)},has:ts,add:mo,set:yo,delete:bo,clear:wo,forEach:ss(!1,!0)},n={get(r){return es(this,r,!0)},get size(){return ns(this,!0)},has(r){return ts.call(this,r,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:ss(!0,!1)},s={get(r){return es(this,r,!0,!0)},get size(){return ns(this,!0)},has(r){return ts.call(this,r,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:ss(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=is(r,!1,!1),n[r]=is(r,!0,!1),e[r]=is(r,!1,!0),s[r]=is(r,!0,!0)}),[t,n,e,s]}const[Vu,Ku,qu,Gu]=zu();function hr(t,e){const n=e?t?Gu:qu:t?Ku:Vu;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(W(n,i)&&i in s?n:s,i,r)}const Yu={get:hr(!1,!1)},Qu={get:hr(!1,!0)},Xu={get:hr(!0,!1)},zl=new WeakMap,Vl=new WeakMap,Kl=new WeakMap,Ju=new WeakMap;function Zu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eh(t){return t.__v_skip||!Object.isExtensible(t)?0:Zu(Eu(t))}function Bs(t){return An(t)?t:dr(t,!1,jl,Yu,zl)}function th(t){return dr(t,!1,ju,Qu,Vl)}function ql(t){return dr(t,!0,$u,Xu,Kl)}function dr(t,e,n,s,i){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=eh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function jt(t){return An(t)?jt(t.__v_raw):!!(t&&t.__v_isReactive)}function An(t){return!!(t&&t.__v_isReadonly)}function xi(t){return!!(t&&t.__v_isShallow)}function Gl(t){return jt(t)||An(t)}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function Yl(t){return hs(t,"__v_skip",!0),t}const fr=t=>ae(t)?Bs(t):t,pr=t=>ae(t)?ql(t):t;function nh(t){it&&Ae&&(t=j(t),Hl(t.dep||(t.dep=lr())))}function sh(t,e){t=j(t),t.dep&&Ti(t.dep)}function _e(t){return!!(t&&t.__v_isRef===!0)}function ih(t){return _e(t)?t.value:t}const rh={get:(t,e,n)=>ih(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return _e(i)&&!_e(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ql(t){return jt(t)?t:new Proxy(t,rh)}class oh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ar(e,()=>{this._dirty||(this._dirty=!0,sh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=j(this);return nh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function lh(t,e,n=!1){let s,i;const r=M(t);return r?(s=t,i=Me):(s=t.get,i=t.set),new oh(s,i,r||!i,n)}function rt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ws(r,e,n)}return i}function Fe(t,e,n,s){if(M(t)){const r=rt(t,e,n,s);return r&&Dl(r)&&r.catch(o=>{Ws(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Fe(t[r],e,n,s));return i}function Ws(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){rt(a,null,10,[t,o,l]);return}}ah(t,n,i,s)}function ah(t,e,n,s=!0){console.error(t)}let ds=!1,Si=!1;const Te=[];let qe=0;const Cn=[];let wn=null,Ft=0;const vn=[];let nt=null,Lt=0;const Xl=Promise.resolve();let _r=null,Ni=null;function ch(t){const e=_r||Xl;return t?e.then(this?t.bind(this):t):e}function uh(t){let e=qe+1,n=Te.length;for(;e<n;){const s=e+n>>>1;kn(Te[s])<t?e=s+1:n=s}return e}function Jl(t){(!Te.length||!Te.includes(t,ds&&t.allowRecurse?qe+1:qe))&&t!==Ni&&(t.id==null?Te.push(t):Te.splice(uh(t.id),0,t),Zl())}function Zl(){!ds&&!Si&&(Si=!0,_r=Xl.then(na))}function hh(t){const e=Te.indexOf(t);e>qe&&Te.splice(e,1)}function ea(t,e,n,s){D(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Zl()}function dh(t){ea(t,wn,Cn,Ft)}function fh(t){ea(t,nt,vn,Lt)}function Hs(t,e=null){if(Cn.length){for(Ni=e,wn=[...new Set(Cn)],Cn.length=0,Ft=0;Ft<wn.length;Ft++)wn[Ft]();wn=null,Ft=0,Ni=null,Hs(t,e)}}function ta(t){if(Hs(),vn.length){const e=[...new Set(vn)];if(vn.length=0,nt){nt.push(...e);return}for(nt=e,nt.sort((n,s)=>kn(n)-kn(s)),Lt=0;Lt<nt.length;Lt++)nt[Lt]();nt=null,Lt=0}}const kn=t=>t.id==null?1/0:t.id;function na(t){Si=!1,ds=!0,Hs(t),Te.sort((n,s)=>kn(n)-kn(s));const e=Me;try{for(qe=0;qe<Te.length;qe++){const n=Te[qe];n&&n.active!==!1&&rt(n,null,14)}}finally{qe=0,Te.length=0,ta(),ds=!1,_r=null,(Te.length||Cn.length||vn.length)&&na(t)}}function ph(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||G;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:p}=s[h]||G;p&&(i=n.map(y=>y.trim())),u&&(i=n.map(xu))}let l,a=s[l=ii(e)]||s[l=ii(ze(e))];!a&&r&&(a=s[l=ii(nn(e))]),a&&Fe(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Fe(c,t,6,i)}}function sa(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!M(t)){const a=c=>{const h=sa(c,e,!0);h&&(l=!0,ge(o,h))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(s.set(t,null),null):(D(r)?r.forEach(a=>o[a]=null):ge(o,r),s.set(t,o),o)}function Us(t,e){return!t||!Os(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,nn(e))||W(t,e))}let be=null,ia=null;function fs(t){const e=be;return be=t,ia=t&&t.type.__scopeId||null,e}function ra(t,e=be,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ao(-1);const r=fs(e),o=t(...i);return fs(r),s._d&&Ao(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function oi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:h,renderCache:u,data:p,setupState:y,ctx:I,inheritAttrs:O}=t;let A,H;const Ee=fs(t);try{if(n.shapeFlag&4){const ce=i||s;A=Ue(h.call(ce,ce,u,r,y,p,I)),H=a}else{const ce=e;A=Ue(ce.length>1?ce(r,{attrs:a,slots:l,emit:c}):ce(r,null)),H=e.props?a:_h(a)}}catch(ce){Tn.length=0,Ws(ce,t,1),A=ne(Gt)}let te=A;if(H&&O!==!1){const ce=Object.keys(H),{shapeFlag:At}=te;ce.length&&At&7&&(o&&ce.some(sr)&&(H=gh(H,o)),te=Yt(te,H))}return n.dirs&&(te=Yt(te),te.dirs=te.dirs?te.dirs.concat(n.dirs):n.dirs),n.transition&&(te.transition=n.transition),A=te,fs(Ee),A}const _h=t=>{let e;for(const n in t)(n==="class"||n==="style"||Os(n))&&((e||(e={}))[n]=t[n]);return e},gh=(t,e)=>{const n={};for(const s in t)(!sr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function mh(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Co(s,o,c):!!o;if(a&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const p=h[u];if(o[p]!==s[p]&&!Us(c,p))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Co(s,o,c):!0:!!o;return!1}function Co(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Us(n,r))return!0}return!1}function yh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const bh=t=>t.__isSuspense;function wh(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):fh(t)}function Ch(t,e){if(ue){let n=ue.provides;const s=ue.parent&&ue.parent.provides;s===n&&(n=ue.provides=Object.create(s)),n[t]=e}}function li(t,e,n=!1){const s=ue||be;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&M(e)?e.call(s.proxy):e}}const vo={};function ai(t,e,n){return oa(t,e,n)}function oa(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=G){const l=ue;let a,c=!1,h=!1;if(_e(t)?(a=()=>t.value,c=xi(t)):jt(t)?(a=()=>t,s=!0):D(t)?(h=!0,c=t.some(H=>jt(H)||xi(H)),a=()=>t.map(H=>{if(_e(H))return H.value;if(jt(H))return Bt(H);if(M(H))return rt(H,l,2)})):M(t)?e?a=()=>rt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return u&&u(),Fe(t,l,3,[p])}:a=Me,e&&s){const H=a;a=()=>Bt(H())}let u,p=H=>{u=A.onStop=()=>{rt(H,l,4)}};if(On)return p=Me,e?n&&Fe(e,l,3,[a(),h?[]:void 0,p]):a(),Me;let y=h?[]:vo;const I=()=>{if(!!A.active)if(e){const H=A.run();(s||c||(h?H.some((Ee,te)=>us(Ee,y[te])):us(H,y)))&&(u&&u(),Fe(e,l,3,[H,y===vo?void 0:y,p]),y=H)}else A.run()};I.allowRecurse=!!e;let O;i==="sync"?O=I:i==="post"?O=()=>ye(I,l&&l.suspense):O=()=>dh(I);const A=new ar(a,O);return e?n?I():y=A.run():i==="post"?ye(A.run.bind(A),l&&l.suspense):A.run(),()=>{A.stop(),l&&l.scope&&ir(l.scope.effects,A)}}function vh(t,e,n){const s=this.proxy,i=le(t)?t.includes(".")?la(s,t):()=>s[t]:t.bind(s,s);let r;M(e)?r=e:(r=e.handler,n=e);const o=ue;Qt(this);const l=oa(i,r.bind(s),n);return o?Qt(o):wt(),l}function la(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Bt(t,e){if(!ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),_e(t))Bt(t.value,e);else if(D(t))for(let n=0;n<t.length;n++)Bt(t[n],e);else if(Ol(t)||$t(t))t.forEach(n=>{Bt(n,e)});else if(Fl(t))for(const n in t)Bt(t[n],e);return t}function zn(t){return M(t)?{setup:t,name:t.name}:t}const En=t=>!!t.type.__asyncLoader,aa=t=>t.type.__isKeepAlive;function Eh(t,e){ca(t,"a",e)}function Ih(t,e){ca(t,"da",e)}function ca(t,e,n=ue){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if($s(e,s,n),n){let i=n.parent;for(;i&&i.parent;)aa(i.parent.vnode)&&Th(s,e,n,i),i=i.parent}}function Th(t,e,n,s){const i=$s(e,t,s,!0);ua(()=>{ir(s[e],i)},n)}function $s(t,e,n=ue,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;sn(),Qt(n);const l=Fe(e,n,t,o);return wt(),rn(),l});return s?i.unshift(r):i.push(r),r}}const Xe=t=>(e,n=ue)=>(!On||t==="sp")&&$s(t,e,n),xh=Xe("bm"),Sh=Xe("m"),Nh=Xe("bu"),Rh=Xe("u"),Ah=Xe("bum"),ua=Xe("um"),kh=Xe("sp"),Ph=Xe("rtg"),Oh=Xe("rtc");function Dh(t,e=ue){$s("ec",t,e)}function dt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(sn(),Fe(a,n,8,[t.el,l,t,e]),rn())}}const ha="components";function In(t,e){return Fh(ha,t,!0,e)||t}const Mh=Symbol();function Fh(t,e,n=!0,s=!1){const i=be||ue;if(i){const r=i.type;if(t===ha){const l=dd(r,!1);if(l&&(l===e||l===ze(e)||l===Fs(ze(e))))return r}const o=Eo(i[t]||r[t],e)||Eo(i.appContext[t],e);return!o&&s?r:o}}function Eo(t,e){return t&&(t[e]||t[ze(e)]||t[Fs(ze(e))])}function as(t,e,n,s){let i;const r=n&&n[s];if(D(t)||le(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ae(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}function Lh(t,e,n={},s,i){if(be.isCE||be.parent&&En(be.parent)&&be.parent.isCE)return ne("slot",e==="default"?null:{name:e},s&&s());let r=t[e];r&&r._c&&(r._d=!1),Ne();const o=r&&da(r(n)),l=Ea(he,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function da(t){return t.some(e=>Ia(e)?!(e.type===Gt||e.type===he&&!da(e.children)):!0)?t:null}const Ri=t=>t?Sa(t)?br(t)||t.proxy:Ri(t.parent):null,ps=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ri(t.parent),$root:t=>Ri(t.root),$emit:t=>t.emit,$options:t=>pa(t),$forceUpdate:t=>t.f||(t.f=()=>Jl(t.update)),$nextTick:t=>t.n||(t.n=ch.bind(t.proxy)),$watch:t=>vh.bind(t)}),Bh={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==G&&W(s,e))return o[e]=1,s[e];if(i!==G&&W(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&W(c,e))return o[e]=3,r[e];if(n!==G&&W(n,e))return o[e]=4,n[e];Ai&&(o[e]=0)}}const h=ps[e];let u,p;if(h)return e==="$attrs"&&Se(t,"get",e),h(t);if((u=l.__cssModules)&&(u=u[e]))return u;if(n!==G&&W(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==G&&W(i,e)?(i[e]=n,!0):s!==G&&W(s,e)?(s[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==G&&W(t,o)||e!==G&&W(e,o)||(l=r[0])&&W(l,o)||W(s,o)||W(ps,o)||W(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ai=!0;function Wh(t){const e=pa(t),n=t.proxy,s=t.ctx;Ai=!1,e.beforeCreate&&Io(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:h,beforeMount:u,mounted:p,beforeUpdate:y,updated:I,activated:O,deactivated:A,beforeDestroy:H,beforeUnmount:Ee,destroyed:te,unmounted:ce,render:At,renderTracked:Js,renderTriggered:Zs,errorCaptured:Xn,serverPrefetch:ht,expose:un,inheritAttrs:kt,components:hn,directives:Jn,filters:no}=e;if(c&&Hh(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const Q=o[Z];M(Q)&&(s[Z]=Q.bind(n))}if(i){const Z=i.call(n,n);ae(Z)&&(t.data=Bs(Z))}if(Ai=!0,r)for(const Z in r){const Q=r[Z],Ve=M(Q)?Q.bind(n,n):M(Q.get)?Q.get.bind(n,n):Me,ti=!M(Q)&&M(Q.set)?Q.set.bind(n):Me,dn=pd({get:Ve,set:ti});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>dn.value,set:Pt=>dn.value=Pt})}if(l)for(const Z in l)fa(l[Z],s,n,Z);if(a){const Z=M(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(Q=>{Ch(Q,Z[Q])})}h&&Io(h,t,"c");function me(Z,Q){D(Q)?Q.forEach(Ve=>Z(Ve.bind(n))):Q&&Z(Q.bind(n))}if(me(xh,u),me(Sh,p),me(Nh,y),me(Rh,I),me(Eh,O),me(Ih,A),me(Dh,Xn),me(Oh,Js),me(Ph,Zs),me(Ah,Ee),me(ua,ce),me(kh,ht),D(un))if(un.length){const Z=t.exposed||(t.exposed={});un.forEach(Q=>{Object.defineProperty(Z,Q,{get:()=>n[Q],set:Ve=>n[Q]=Ve})})}else t.exposed||(t.exposed={});At&&t.render===Me&&(t.render=At),kt!=null&&(t.inheritAttrs=kt),hn&&(t.components=hn),Jn&&(t.directives=Jn)}function Hh(t,e,n=Me,s=!1){D(t)&&(t=ki(t));for(const i in t){const r=t[i];let o;ae(r)?"default"in r?o=li(r.from||i,r.default,!0):o=li(r.from||i):o=li(r),_e(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Io(t,e,n){Fe(D(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function fa(t,e,n,s){const i=s.includes(".")?la(n,s):()=>n[s];if(le(t)){const r=e[t];M(r)&&ai(i,r)}else if(M(t))ai(i,t.bind(n));else if(ae(t))if(D(t))t.forEach(r=>fa(r,e,n,s));else{const r=M(t.handler)?t.handler.bind(n):e[t.handler];M(r)&&ai(i,r,t)}}function pa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>_s(a,c,o,!0)),_s(a,e,o)),r.set(e,a),a}function _s(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&_s(t,r,n,!0),i&&i.forEach(o=>_s(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Uh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Uh={data:To,props:pt,emits:pt,methods:pt,computed:pt,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:pt,directives:pt,watch:jh,provide:To,inject:$h};function To(t,e){return e?t?function(){return ge(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function $h(t,e){return pt(ki(t),ki(e))}function ki(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pe(t,e){return t?[...new Set([].concat(t,e))]:e}function pt(t,e){return t?ge(ge(Object.create(null),t),e):e}function jh(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const s in e)n[s]=pe(t[s],e[s]);return n}function zh(t,e,n,s=!1){const i={},r={};hs(r,js,1),t.propsDefaults=Object.create(null),_a(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:th(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Vh(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=j(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let p=h[u];if(Us(t.emitsOptions,p))continue;const y=e[p];if(a)if(W(r,p))y!==r[p]&&(r[p]=y,c=!0);else{const I=ze(p);i[I]=Pi(a,l,I,y,t,!1)}else y!==r[p]&&(r[p]=y,c=!0)}}}else{_a(t,e,i,r)&&(c=!0);let h;for(const u in l)(!e||!W(e,u)&&((h=nn(u))===u||!W(e,h)))&&(a?n&&(n[u]!==void 0||n[h]!==void 0)&&(i[u]=Pi(a,l,u,void 0,t,!0)):delete i[u]);if(r!==l)for(const u in r)(!e||!W(e,u)&&!0)&&(delete r[u],c=!0)}c&&Qe(t,"set","$attrs")}function _a(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ls(a))continue;const c=e[a];let h;i&&W(i,h=ze(a))?!r||!r.includes(h)?n[h]=c:(l||(l={}))[h]=c:Us(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=j(n),c=l||G;for(let h=0;h<r.length;h++){const u=r[h];n[u]=Pi(i,a,u,c[u],t,!W(c,u))}}return o}function Pi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=W(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&M(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(Qt(i),s=c[n]=a.call(null,e),wt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===nn(n))&&(s=!0))}return s}function ga(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!M(t)){const h=u=>{a=!0;const[p,y]=ga(u,e,!0);ge(o,p),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!a)return s.set(t,Ut),Ut;if(D(r))for(let h=0;h<r.length;h++){const u=ze(r[h]);xo(u)&&(o[u]=G)}else if(r)for(const h in r){const u=ze(h);if(xo(u)){const p=r[h],y=o[u]=D(p)||M(p)?{type:p}:p;if(y){const I=Ro(Boolean,y.type),O=Ro(String,y.type);y[0]=I>-1,y[1]=O<0||I<O,(I>-1||W(y,"default"))&&l.push(u)}}}const c=[o,l];return s.set(t,c),c}function xo(t){return t[0]!=="$"}function So(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function No(t,e){return So(t)===So(e)}function Ro(t,e){return D(e)?e.findIndex(n=>No(n,t)):M(e)&&No(e,t)?0:-1}const ma=t=>t[0]==="_"||t==="$stable",gr=t=>D(t)?t.map(Ue):[Ue(t)],Kh=(t,e,n)=>{if(e._n)return e;const s=ra((...i)=>gr(e(...i)),n);return s._c=!1,s},ya=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ma(i))continue;const r=t[i];if(M(r))e[i]=Kh(i,r,s);else if(r!=null){const o=gr(r);e[i]=()=>o}}},ba=(t,e)=>{const n=gr(e);t.slots.default=()=>n},qh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=j(e),hs(e,"_",n)):ya(e,t.slots={})}else t.slots={},e&&ba(t,e);hs(t.slots,js,1)},Gh=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=G;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ge(i,e),!n&&l===1&&delete i._):(r=!e.$stable,ya(e,i)),o=e}else e&&(ba(t,e),o={default:1});if(r)for(const l in i)!ma(l)&&!(l in o)&&delete i[l]};function wa(){return{app:null,config:{isNativeTag:wu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yh=0;function Qh(t,e){return function(s,i=null){M(s)||(s=Object.assign({},s)),i!=null&&!ae(i)&&(i=null);const r=wa(),o=new Set;let l=!1;const a=r.app={_uid:Yh++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:_d,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&M(c.install)?(o.add(c),c.install(a,...h)):M(c)&&(o.add(c),c(a,...h))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,h){return h?(r.components[c]=h,a):r.components[c]},directive(c,h){return h?(r.directives[c]=h,a):r.directives[c]},mount(c,h,u){if(!l){const p=ne(s,i);return p.appContext=r,h&&e?e(p,c):t(p,c,u),l=!0,a._container=c,c.__vue_app__=a,br(p.component)||p.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,h){return r.provides[c]=h,a}};return a}}function Oi(t,e,n,s,i=!1){if(D(t)){t.forEach((p,y)=>Oi(p,e&&(D(e)?e[y]:e),n,s,i));return}if(En(s)&&!i)return;const r=s.shapeFlag&4?br(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,h=l.refs===G?l.refs={}:l.refs,u=l.setupState;if(c!=null&&c!==a&&(le(c)?(h[c]=null,W(u,c)&&(u[c]=null)):_e(c)&&(c.value=null)),M(a))rt(a,l,12,[o,h]);else{const p=le(a),y=_e(a);if(p||y){const I=()=>{if(t.f){const O=p?h[a]:a.value;i?D(O)&&ir(O,r):D(O)?O.includes(r)||O.push(r):p?(h[a]=[r],W(u,a)&&(u[a]=h[a])):(a.value=[r],t.k&&(h[t.k]=a.value))}else p?(h[a]=o,W(u,a)&&(u[a]=o)):y&&(a.value=o,t.k&&(h[t.k]=o))};o?(I.id=-1,ye(I,n)):I()}}}const ye=wh;function Xh(t){return Jh(t)}function Jh(t,e){const n=Su();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:h,parentNode:u,nextSibling:p,setScopeId:y=Me,cloneNode:I,insertStaticContent:O}=t,A=(d,f,_,m=null,g=null,v=null,T=!1,C=null,E=!!f.dynamicChildren)=>{if(d===f)return;d&&!pn(d,f)&&(m=Zn(d),et(d,g,v,!0),d=null),f.patchFlag===-2&&(E=!1,f.dynamicChildren=null);const{type:b,ref:N,shapeFlag:x}=f;switch(b){case mr:H(d,f,_,m);break;case Gt:Ee(d,f,_,m);break;case ci:d==null&&te(f,_,m,T);break;case he:Jn(d,f,_,m,g,v,T,C,E);break;default:x&1?Js(d,f,_,m,g,v,T,C,E):x&6?no(d,f,_,m,g,v,T,C,E):(x&64||x&128)&&b.process(d,f,_,m,g,v,T,C,E,Ot)}N!=null&&g&&Oi(N,d&&d.ref,v,f||d,!f)},H=(d,f,_,m)=>{if(d==null)s(f.el=l(f.children),_,m);else{const g=f.el=d.el;f.children!==d.children&&c(g,f.children)}},Ee=(d,f,_,m)=>{d==null?s(f.el=a(f.children||""),_,m):f.el=d.el},te=(d,f,_,m)=>{[d.el,d.anchor]=O(d.children,f,_,m,d.el,d.anchor)},ce=({el:d,anchor:f},_,m)=>{let g;for(;d&&d!==f;)g=p(d),s(d,_,m),d=g;s(f,_,m)},At=({el:d,anchor:f})=>{let _;for(;d&&d!==f;)_=p(d),i(d),d=_;i(f)},Js=(d,f,_,m,g,v,T,C,E)=>{T=T||f.type==="svg",d==null?Zs(f,_,m,g,v,T,C,E):un(d,f,g,v,T,C,E)},Zs=(d,f,_,m,g,v,T,C)=>{let E,b;const{type:N,props:x,shapeFlag:R,transition:P,patchFlag:U,dirs:z}=d;if(d.el&&I!==void 0&&U===-1)E=d.el=I(d.el);else{if(E=d.el=o(d.type,v,x&&x.is,x),R&8?h(E,d.children):R&16&&ht(d.children,E,null,m,g,v&&N!=="foreignObject",T,C),z&&dt(d,null,m,"created"),x){for(const X in x)X!=="value"&&!ls(X)&&r(E,X,null,x[X],v,d.children,m,g,Ke);"value"in x&&r(E,"value",null,x.value),(b=x.onVnodeBeforeMount)&&We(b,m,d)}Xn(E,d,d.scopeId,T,m)}z&&dt(d,null,m,"beforeMount");const V=(!g||g&&!g.pendingBranch)&&P&&!P.persisted;V&&P.beforeEnter(E),s(E,f,_),((b=x&&x.onVnodeMounted)||V||z)&&ye(()=>{b&&We(b,m,d),V&&P.enter(E),z&&dt(d,null,m,"mounted")},g)},Xn=(d,f,_,m,g)=>{if(_&&y(d,_),m)for(let v=0;v<m.length;v++)y(d,m[v]);if(g){let v=g.subTree;if(f===v){const T=g.vnode;Xn(d,T,T.scopeId,T.slotScopeIds,g.parent)}}},ht=(d,f,_,m,g,v,T,C,E=0)=>{for(let b=E;b<d.length;b++){const N=d[b]=C?st(d[b]):Ue(d[b]);A(null,N,f,_,m,g,v,T,C)}},un=(d,f,_,m,g,v,T)=>{const C=f.el=d.el;let{patchFlag:E,dynamicChildren:b,dirs:N}=f;E|=d.patchFlag&16;const x=d.props||G,R=f.props||G;let P;_&&ft(_,!1),(P=R.onVnodeBeforeUpdate)&&We(P,_,f,d),N&&dt(f,d,_,"beforeUpdate"),_&&ft(_,!0);const U=g&&f.type!=="foreignObject";if(b?kt(d.dynamicChildren,b,C,_,m,U,v):T||Ve(d,f,C,null,_,m,U,v,!1),E>0){if(E&16)hn(C,f,x,R,_,m,g);else if(E&2&&x.class!==R.class&&r(C,"class",null,R.class,g),E&4&&r(C,"style",x.style,R.style,g),E&8){const z=f.dynamicProps;for(let V=0;V<z.length;V++){const X=z[V],Re=x[X],Dt=R[X];(Dt!==Re||X==="value")&&r(C,X,Re,Dt,g,d.children,_,m,Ke)}}E&1&&d.children!==f.children&&h(C,f.children)}else!T&&b==null&&hn(C,f,x,R,_,m,g);((P=R.onVnodeUpdated)||N)&&ye(()=>{P&&We(P,_,f,d),N&&dt(f,d,_,"updated")},m)},kt=(d,f,_,m,g,v,T)=>{for(let C=0;C<f.length;C++){const E=d[C],b=f[C],N=E.el&&(E.type===he||!pn(E,b)||E.shapeFlag&70)?u(E.el):_;A(E,b,N,null,m,g,v,T,!0)}},hn=(d,f,_,m,g,v,T)=>{if(_!==m){for(const C in m){if(ls(C))continue;const E=m[C],b=_[C];E!==b&&C!=="value"&&r(d,C,b,E,T,f.children,g,v,Ke)}if(_!==G)for(const C in _)!ls(C)&&!(C in m)&&r(d,C,_[C],null,T,f.children,g,v,Ke);"value"in m&&r(d,"value",_.value,m.value)}},Jn=(d,f,_,m,g,v,T,C,E)=>{const b=f.el=d?d.el:l(""),N=f.anchor=d?d.anchor:l("");let{patchFlag:x,dynamicChildren:R,slotScopeIds:P}=f;P&&(C=C?C.concat(P):P),d==null?(s(b,_,m),s(N,_,m),ht(f.children,_,N,g,v,T,C,E)):x>0&&x&64&&R&&d.dynamicChildren?(kt(d.dynamicChildren,R,_,g,v,T,C),(f.key!=null||g&&f===g.subTree)&&Ca(d,f,!0)):Ve(d,f,_,N,g,v,T,C,E)},no=(d,f,_,m,g,v,T,C,E)=>{f.slotScopeIds=C,d==null?f.shapeFlag&512?g.ctx.activate(f,_,m,T,E):ei(f,_,m,g,v,T,E):me(d,f,E)},ei=(d,f,_,m,g,v,T)=>{const C=d.component=ld(d,m,g);if(aa(d)&&(C.ctx.renderer=Ot),ad(C),C.asyncDep){if(g&&g.registerDep(C,Z),!d.el){const E=C.subTree=ne(Gt);Ee(null,E,f,_)}return}Z(C,d,f,_,g,v,T)},me=(d,f,_)=>{const m=f.component=d.component;if(mh(d,f,_))if(m.asyncDep&&!m.asyncResolved){Q(m,f,_);return}else m.next=f,hh(m.update),m.update();else f.el=d.el,m.vnode=f},Z=(d,f,_,m,g,v,T)=>{const C=()=>{if(d.isMounted){let{next:N,bu:x,u:R,parent:P,vnode:U}=d,z=N,V;ft(d,!1),N?(N.el=U.el,Q(d,N,T)):N=U,x&&ri(x),(V=N.props&&N.props.onVnodeBeforeUpdate)&&We(V,P,N,U),ft(d,!0);const X=oi(d),Re=d.subTree;d.subTree=X,A(Re,X,u(Re.el),Zn(Re),d,g,v),N.el=X.el,z===null&&yh(d,X.el),R&&ye(R,g),(V=N.props&&N.props.onVnodeUpdated)&&ye(()=>We(V,P,N,U),g)}else{let N;const{el:x,props:R}=f,{bm:P,m:U,parent:z}=d,V=En(f);if(ft(d,!1),P&&ri(P),!V&&(N=R&&R.onVnodeBeforeMount)&&We(N,z,f),ft(d,!0),x&&si){const X=()=>{d.subTree=oi(d),si(x,d.subTree,d,g,null)};V?f.type.__asyncLoader().then(()=>!d.isUnmounted&&X()):X()}else{const X=d.subTree=oi(d);A(null,X,_,m,d,g,v),f.el=X.el}if(U&&ye(U,g),!V&&(N=R&&R.onVnodeMounted)){const X=f;ye(()=>We(N,z,X),g)}(f.shapeFlag&256||z&&En(z.vnode)&&z.vnode.shapeFlag&256)&&d.a&&ye(d.a,g),d.isMounted=!0,f=_=m=null}},E=d.effect=new ar(C,()=>Jl(b),d.scope),b=d.update=()=>E.run();b.id=d.uid,ft(d,!0),b()},Q=(d,f,_)=>{f.component=d;const m=d.vnode.props;d.vnode=f,d.next=null,Vh(d,f.props,m,_),Gh(d,f.children,_),sn(),Hs(void 0,d.update),rn()},Ve=(d,f,_,m,g,v,T,C,E=!1)=>{const b=d&&d.children,N=d?d.shapeFlag:0,x=f.children,{patchFlag:R,shapeFlag:P}=f;if(R>0){if(R&128){dn(b,x,_,m,g,v,T,C,E);return}else if(R&256){ti(b,x,_,m,g,v,T,C,E);return}}P&8?(N&16&&Ke(b,g,v),x!==b&&h(_,x)):N&16?P&16?dn(b,x,_,m,g,v,T,C,E):Ke(b,g,v,!0):(N&8&&h(_,""),P&16&&ht(x,_,m,g,v,T,C,E))},ti=(d,f,_,m,g,v,T,C,E)=>{d=d||Ut,f=f||Ut;const b=d.length,N=f.length,x=Math.min(b,N);let R;for(R=0;R<x;R++){const P=f[R]=E?st(f[R]):Ue(f[R]);A(d[R],P,_,null,g,v,T,C,E)}b>N?Ke(d,g,v,!0,!1,x):ht(f,_,m,g,v,T,C,E,x)},dn=(d,f,_,m,g,v,T,C,E)=>{let b=0;const N=f.length;let x=d.length-1,R=N-1;for(;b<=x&&b<=R;){const P=d[b],U=f[b]=E?st(f[b]):Ue(f[b]);if(pn(P,U))A(P,U,_,null,g,v,T,C,E);else break;b++}for(;b<=x&&b<=R;){const P=d[x],U=f[R]=E?st(f[R]):Ue(f[R]);if(pn(P,U))A(P,U,_,null,g,v,T,C,E);else break;x--,R--}if(b>x){if(b<=R){const P=R+1,U=P<N?f[P].el:m;for(;b<=R;)A(null,f[b]=E?st(f[b]):Ue(f[b]),_,U,g,v,T,C,E),b++}}else if(b>R)for(;b<=x;)et(d[b],g,v,!0),b++;else{const P=b,U=b,z=new Map;for(b=U;b<=R;b++){const Ie=f[b]=E?st(f[b]):Ue(f[b]);Ie.key!=null&&z.set(Ie.key,b)}let V,X=0;const Re=R-U+1;let Dt=!1,ro=0;const fn=new Array(Re);for(b=0;b<Re;b++)fn[b]=0;for(b=P;b<=x;b++){const Ie=d[b];if(X>=Re){et(Ie,g,v,!0);continue}let Be;if(Ie.key!=null)Be=z.get(Ie.key);else for(V=U;V<=R;V++)if(fn[V-U]===0&&pn(Ie,f[V])){Be=V;break}Be===void 0?et(Ie,g,v,!0):(fn[Be-U]=b+1,Be>=ro?ro=Be:Dt=!0,A(Ie,f[Be],_,null,g,v,T,C,E),X++)}const oo=Dt?Zh(fn):Ut;for(V=oo.length-1,b=Re-1;b>=0;b--){const Ie=U+b,Be=f[Ie],lo=Ie+1<N?f[Ie+1].el:m;fn[b]===0?A(null,Be,_,lo,g,v,T,C,E):Dt&&(V<0||b!==oo[V]?Pt(Be,_,lo,2):V--)}}},Pt=(d,f,_,m,g=null)=>{const{el:v,type:T,transition:C,children:E,shapeFlag:b}=d;if(b&6){Pt(d.component.subTree,f,_,m);return}if(b&128){d.suspense.move(f,_,m);return}if(b&64){T.move(d,f,_,Ot);return}if(T===he){s(v,f,_);for(let x=0;x<E.length;x++)Pt(E[x],f,_,m);s(d.anchor,f,_);return}if(T===ci){ce(d,f,_);return}if(m!==2&&b&1&&C)if(m===0)C.beforeEnter(v),s(v,f,_),ye(()=>C.enter(v),g);else{const{leave:x,delayLeave:R,afterLeave:P}=C,U=()=>s(v,f,_),z=()=>{x(v,()=>{U(),P&&P()})};R?R(v,U,z):z()}else s(v,f,_)},et=(d,f,_,m=!1,g=!1)=>{const{type:v,props:T,ref:C,children:E,dynamicChildren:b,shapeFlag:N,patchFlag:x,dirs:R}=d;if(C!=null&&Oi(C,null,_,d,!0),N&256){f.ctx.deactivate(d);return}const P=N&1&&R,U=!En(d);let z;if(U&&(z=T&&T.onVnodeBeforeUnmount)&&We(z,f,d),N&6)au(d.component,_,m);else{if(N&128){d.suspense.unmount(_,m);return}P&&dt(d,null,f,"beforeUnmount"),N&64?d.type.remove(d,f,_,g,Ot,m):b&&(v!==he||x>0&&x&64)?Ke(b,f,_,!1,!0):(v===he&&x&384||!g&&N&16)&&Ke(E,f,_),m&&so(d)}(U&&(z=T&&T.onVnodeUnmounted)||P)&&ye(()=>{z&&We(z,f,d),P&&dt(d,null,f,"unmounted")},_)},so=d=>{const{type:f,el:_,anchor:m,transition:g}=d;if(f===he){lu(_,m);return}if(f===ci){At(d);return}const v=()=>{i(_),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(d.shapeFlag&1&&g&&!g.persisted){const{leave:T,delayLeave:C}=g,E=()=>T(_,v);C?C(d.el,v,E):E()}else v()},lu=(d,f)=>{let _;for(;d!==f;)_=p(d),i(d),d=_;i(f)},au=(d,f,_)=>{const{bum:m,scope:g,update:v,subTree:T,um:C}=d;m&&ri(m),g.stop(),v&&(v.active=!1,et(T,d,f,_)),C&&ye(C,f),ye(()=>{d.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Ke=(d,f,_,m=!1,g=!1,v=0)=>{for(let T=v;T<d.length;T++)et(d[T],f,_,m,g)},Zn=d=>d.shapeFlag&6?Zn(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),io=(d,f,_)=>{d==null?f._vnode&&et(f._vnode,null,null,!0):A(f._vnode||null,d,f,null,null,null,_),ta(),f._vnode=d},Ot={p:A,um:et,m:Pt,r:so,mt:ei,mc:ht,pc:Ve,pbc:kt,n:Zn,o:t};let ni,si;return e&&([ni,si]=e(Ot)),{render:io,hydrate:ni,createApp:Qh(io,ni)}}function ft({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ca(t,e,n=!1){const s=t.children,i=e.children;if(D(s)&&D(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=st(i[r]),l.el=o.el),n||Ca(o,l))}}function Zh(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const ed=t=>t.__isTeleport,he=Symbol(void 0),mr=Symbol(void 0),Gt=Symbol(void 0),ci=Symbol(void 0),Tn=[];let Pe=null;function Ne(t=!1){Tn.push(Pe=t?null:[])}function td(){Tn.pop(),Pe=Tn[Tn.length-1]||null}let Pn=1;function Ao(t){Pn+=t}function va(t){return t.dynamicChildren=Pn>0?Pe||Ut:null,td(),Pn>0&&Pe&&Pe.push(t),t}function $e(t,e,n,s,i,r){return va(je(t,e,n,s,i,r,!0))}function Ea(t,e,n,s,i){return va(ne(t,e,n,s,i,!0))}function Ia(t){return t?t.__v_isVNode===!0:!1}function pn(t,e){return t.type===e.type&&t.key===e.key}const js="__vInternal",Ta=({key:t})=>t!=null?t:null,cs=({ref:t,ref_key:e,ref_for:n})=>t!=null?le(t)||_e(t)||M(t)?{i:be,r:t,k:e,f:!!n}:t:null;function je(t,e=null,n=null,s=0,i=null,r=t===he?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ta(e),ref:e&&cs(e),scopeId:ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(yr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=le(n)?8:16),Pn>0&&!o&&Pe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Pe.push(a),a}const ne=nd;function nd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Mh)&&(t=Gt),Ia(t)){const l=Yt(t,e,!0);return n&&yr(l,n),Pn>0&&!r&&Pe&&(l.shapeFlag&6?Pe[Pe.indexOf(t)]=l:Pe.push(l)),l.patchFlag|=-2,l}if(fd(t)&&(t=t.__vccOpts),e){e=sd(e);let{class:l,style:a}=e;l&&!le(l)&&(e.class=tn(l)),ae(a)&&(Gl(a)&&!D(a)&&(a=ge({},a)),e.style=Ps(a))}const o=le(t)?1:bh(t)?128:ed(t)?64:ae(t)?4:M(t)?2:0;return je(t,e,n,s,i,o,r,!0)}function sd(t){return t?Gl(t)||js in t?ge({},t):t:null}function Yt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?id(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ta(l),ref:e&&e.ref?n&&i?D(i)?i.concat(cs(e)):[i,cs(e)]:cs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==he?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yt(t.ssContent),ssFallback:t.ssFallback&&Yt(t.ssFallback),el:t.el,anchor:t.anchor}}function xa(t=" ",e=0){return ne(mr,null,t,e)}function Ue(t){return t==null||typeof t=="boolean"?ne(Gt):D(t)?ne(he,null,t.slice()):typeof t=="object"?st(t):ne(mr,null,String(t))}function st(t){return t.el===null||t.memo?t:Yt(t)}function yr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),yr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(js in e)?e._ctx=be:i===3&&be&&(be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:be},n=32):(e=String(e),s&64?(n=16,e=[xa(e)]):n=8);t.children=e,t.shapeFlag|=n}function id(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=tn([e.class,s.class]));else if(i==="style")e.style=Ps([e.style,s.style]);else if(Os(i)){const r=e[i],o=s[i];o&&r!==o&&!(D(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function We(t,e,n,s=null){Fe(t,e,7,[n,s])}const rd=wa();let od=0;function ld(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||rd,r={uid:od++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ga(s,i),emitsOptions:sa(s,i),emit:null,emitted:null,propsDefaults:G,inheritAttrs:s.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ph.bind(null,r),t.ce&&t.ce(r),r}let ue=null;const Qt=t=>{ue=t,t.scope.on()},wt=()=>{ue&&ue.scope.off(),ue=null};function Sa(t){return t.vnode.shapeFlag&4}let On=!1;function ad(t,e=!1){On=e;const{props:n,children:s}=t.vnode,i=Sa(t);zh(t,n,i,e),qh(t,s);const r=i?cd(t,e):void 0;return On=!1,r}function cd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Yl(new Proxy(t.ctx,Bh));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?hd(t):null;Qt(t),sn();const r=rt(s,t,0,[t.props,i]);if(rn(),wt(),Dl(r)){if(r.then(wt,wt),e)return r.then(o=>{ko(t,o,e)}).catch(o=>{Ws(o,t,0)});t.asyncDep=r}else ko(t,r,e)}else Na(t,e)}function ko(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=Ql(e)),Na(t,n)}let Po;function Na(t,e,n){const s=t.type;if(!t.render){if(!e&&Po&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=ge(ge({isCustomElement:r,delimiters:l},o),a);s.render=Po(i,c)}}t.render=s.render||Me}Qt(t),sn(),Wh(t),rn(),wt()}function ud(t){return new Proxy(t.attrs,{get(e,n){return Se(t,"get","$attrs"),e[n]}})}function hd(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=ud(t))},slots:t.slots,emit:t.emit,expose:e}}function br(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ql(Yl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ps)return ps[n](t)}}))}function dd(t,e=!0){return M(t)?t.displayName||t.name:t.name||e&&t.__name}function fd(t){return M(t)&&"__vccOpts"in t}const pd=(t,e)=>lh(t,e,On),_d="3.2.37",gd="http://www.w3.org/2000/svg",mt=typeof document!="undefined"?document:null,Oo=mt&&mt.createElement("template"),md={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?mt.createElementNS(gd,t):mt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>mt.createTextNode(t),createComment:t=>mt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Oo.innerHTML=s?`<svg>${t}</svg>`:t;const l=Oo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function yd(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function bd(t,e,n){const s=t.style,i=le(n);if(n&&!i){for(const r in n)Di(s,r,n[r]);if(e&&!le(e))for(const r in e)n[r]==null&&Di(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Do=/\s*!important$/;function Di(t,e,n){if(D(n))n.forEach(s=>Di(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=wd(t,e);Do.test(n)?t.setProperty(nn(s),n.replace(Do,""),"important"):t[s]=n}}const Mo=["Webkit","Moz","ms"],ui={};function wd(t,e){const n=ui[e];if(n)return n;let s=ze(e);if(s!=="filter"&&s in t)return ui[e]=s;s=Fs(s);for(let i=0;i<Mo.length;i++){const r=Mo[i]+s;if(r in t)return ui[e]=r}return e}const Fo="http://www.w3.org/1999/xlink";function Cd(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Fo,e.slice(6,e.length)):t.setAttributeNS(Fo,e,n);else{const r=gu(e);n==null||r&&!kl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function vd(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=kl(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[Ra,Ed]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Mi=0;const Id=Promise.resolve(),Td=()=>{Mi=0},xd=()=>Mi||(Id.then(Td),Mi=Ra());function Sd(t,e,n,s){t.addEventListener(e,n,s)}function Nd(t,e,n,s){t.removeEventListener(e,n,s)}function Rd(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Ad(e);if(s){const c=r[e]=kd(s,i);Sd(t,l,c,a)}else o&&(Nd(t,l,o,a),r[e]=void 0)}}const Lo=/(?:Once|Passive|Capture)$/;function Ad(t){let e;if(Lo.test(t)){e={};let n;for(;n=t.match(Lo);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[nn(t.slice(2)),e]}function kd(t,e){const n=s=>{const i=s.timeStamp||Ra();(Ed||i>=n.attached-1)&&Fe(Pd(s,n.value),e,5,[s])};return n.value=t,n.attached=xd(),n}function Pd(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Bo=/^on[a-z]/,Od=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?yd(t,s,i):e==="style"?bd(t,n,s):Os(e)?sr(e)||Rd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dd(t,e,s,i))?vd(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Cd(t,e,s,i))};function Dd(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Bo.test(e)&&M(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bo.test(e)&&le(n)?!1:e in t}const Md=ge({patchProp:Od},md);let Wo;function Fd(){return Wo||(Wo=Xh(Md))}const Ld=(...t)=>{const e=Fd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Bd(s);if(!i)return;const r=e._component;!M(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Bd(t){return le(t)?document.querySelector(t):t}var on=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};const Wd={},Hd={class:"box-border select-none border w-full inline-flex justify-center items-center text-2xl font-bold leading-8 align-middle w-16 h-16"};function Ud(t,e){return Ne(),$e("div",Hd,[Lh(t.$slots,"default")])}var $d=on(Wd,[["render",Ud]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=function(t,e){if(!t)throw ln(e)},ln=function(t){return new Error("Firebase Database ("+Aa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},wr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,h=r>>2,u=(r&3)<<4|l>>4;let p=(l&15)<<2|c>>6,y=c&63;a||(y=64,o||(p=64)),s.push(n[h],n[u],n[p],n[y])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ka(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||u==null)throw Error();const p=r<<2|l>>4;if(s.push(p),c!==64){const y=l<<4&240|c>>2;if(s.push(y),u!==64){const I=c<<6&192|u;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Pa=function(t){const e=ka(t);return wr.encodeByteArray(e,!0)},Oa=function(t){return Pa(t).replace(/\./g,"")},Ho=function(t){try{return wr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){return Da(void 0,t)}function Da(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Vd(n)||(t[n]=Da(t[n],e[n]));return t}function Vd(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ma(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kd())}function qd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fa(){return Aa.NODE_ADMIN===!0}function Gd(){return typeof indexedDB=="object"}function Yd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="FirebaseError";class vr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Qd,Object.setPrototypeOf(this,vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Xd(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new vr(i,l,s)}}function Xd(t,e){return t.replace(Jd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Jd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){return JSON.parse(t)}function oe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Dn(Ho(r[0])||""),n=Dn(Ho(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Zd=function(t){const e=Ba(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ef=function(t){const e=Ba(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Uo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Fi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if($o(r)&&$o(o)){if(!Fi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function $o(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const p=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=l^r&(o^l),h=1518500249):(c=r^o^l,h=1859775393):u<60?(c=r&o|l&(r|o),h=2400959708):(c=r^o^l,h=3395469782);const p=(i<<5|i>>>27)+c+a+h+s[u]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Wa(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,w(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zs=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Cr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lf(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=_t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_t){return this.instances.has(e)}getOptions(e=_t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:of(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_t){return this.component?this.component.multipleInstances?e:_t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function of(t){return t===_t?void 0:t}function lf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const cf={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},uf=q.INFO,hf={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},df=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=hf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ha{constructor(e){this.name=e,this._logLevel=uf,this._logHandler=df,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const ff=(t,e)=>e.some(n=>t instanceof n);let jo,zo;function pf(){return jo||(jo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _f(){return zo||(zo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ua=new WeakMap,Li=new WeakMap,$a=new WeakMap,hi=new WeakMap,Ir=new WeakMap;function gf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ot(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ua.set(n,t)}).catch(()=>{}),Ir.set(e,t),e}function mf(t){if(Li.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Li.set(t,e)}let Bi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Li.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$a.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yf(t){Bi=t(Bi)}function bf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(di(this),e,...n);return $a.set(s,e.sort?e.sort():[e]),ot(s)}:_f().includes(t)?function(...e){return t.apply(di(this),e),ot(Ua.get(this))}:function(...e){return ot(t.apply(di(this),e))}}function wf(t){return typeof t=="function"?bf(t):(t instanceof IDBTransaction&&mf(t),ff(t,pf())?new Proxy(t,Bi):t)}function ot(t){if(t instanceof IDBRequest)return gf(t);if(hi.has(t))return hi.get(t);const e=wf(t);return e!==t&&(hi.set(t,e),Ir.set(e,t)),e}const di=t=>Ir.get(t);function Cf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=ot(o);return s&&o.addEventListener("upgradeneeded",a=>{s(ot(o.result),a.oldVersion,a.newVersion,ot(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const vf=["get","getKey","getAll","getAllKeys","count"],Ef=["put","add","delete","clear"],fi=new Map;function Vo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fi.get(e))return fi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ef.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||vf.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return fi.set(e,r),r}yf(t=>ho(uo({},t),{get:(e,n,s)=>Vo(e,n)||t.get(e,n,s),has:(e,n)=>!!Vo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Tf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wi="@firebase/app",Ko="0.7.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Ha("@firebase/app"),xf="@firebase/app-compat",Sf="@firebase/analytics-compat",Nf="@firebase/analytics",Rf="@firebase/app-check-compat",Af="@firebase/app-check",kf="@firebase/auth",Pf="@firebase/auth-compat",Of="@firebase/database",Df="@firebase/database-compat",Mf="@firebase/functions",Ff="@firebase/functions-compat",Lf="@firebase/installations",Bf="@firebase/installations-compat",Wf="@firebase/messaging",Hf="@firebase/messaging-compat",Uf="@firebase/performance",$f="@firebase/performance-compat",jf="@firebase/remote-config",zf="@firebase/remote-config-compat",Vf="@firebase/storage",Kf="@firebase/storage-compat",qf="@firebase/firestore",Gf="@firebase/firestore-compat",Yf="firebase",Qf="9.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="[DEFAULT]",Xf={[Wi]:"fire-core",[xf]:"fire-core-compat",[Nf]:"fire-analytics",[Sf]:"fire-analytics-compat",[Af]:"fire-app-check",[Rf]:"fire-app-check-compat",[kf]:"fire-auth",[Pf]:"fire-auth-compat",[Of]:"fire-rtdb",[Df]:"fire-rtdb-compat",[Mf]:"fire-fn",[Ff]:"fire-fn-compat",[Lf]:"fire-iid",[Bf]:"fire-iid-compat",[Wf]:"fire-fcm",[Hf]:"fire-fcm-compat",[Uf]:"fire-perf",[$f]:"fire-perf-compat",[jf]:"fire-rc",[zf]:"fire-rc-compat",[Vf]:"fire-gcs",[Kf]:"fire-gcs-compat",[qf]:"fire-fst",[Gf]:"fire-fst-compat","fire-js":"fire-js",[Yf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Map,Hi=new Map;function Jf(t,e){try{t.container.addComponent(e)}catch(n){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ys(t){const e=t.name;if(Hi.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;Hi.set(e,t);for(const n of ms.values())Jf(n,t);return!0}function Zf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},vt=new La("app","Firebase",ep);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=Qf;function sp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ja,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw vt.create("bad-app-name",{appName:String(s)});const i=ms.get(s);if(i){if(Fi(t,i.options)&&Fi(n,i.config))return i;throw vt.create("duplicate-app",{appName:s})}const r=new af(s);for(const l of Hi.values())r.addComponent(l);const o=new tp(t,n,r);return ms.set(s,o),o}function ip(t=ja){const e=ms.get(t);if(!e)throw vt.create("no-app",{appName:t});return e}function zt(t,e,n){var s;let i=(s=Xf[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(l.join(" "));return}ys(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="firebase-heartbeat-database",op=1,Fn="firebase-heartbeat-store";let pi=null;function za(){return pi||(pi=Cf(rp,op,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fn)}}}).catch(t=>{throw vt.create("storage-open",{originalErrorMessage:t.message})})),pi}async function lp(t){var e;try{return(await za()).transaction(Fn).objectStore(Fn).get(Va(t))}catch(n){throw vt.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function qo(t,e){var n;try{const i=(await za()).transaction(Fn,"readwrite");return await i.objectStore(Fn).put(e,Va(t)),i.done}catch(s){throw vt.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Va(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=1024,cp=30*24*60*60*1e3;class up{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Go();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=cp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Go(),{heartbeatsToSend:n,unsentEntries:s}=hp(this._heartbeatsCache.heartbeats),i=Oa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Go(){return new Date().toISOString().substring(0,10)}function hp(t,e=ap){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Yo(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class dp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gd()?Yd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yo(t){return Oa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){ys(new Mn("platform-logger",e=>new If(e),"PRIVATE")),ys(new Mn("heartbeat",e=>new up(e),"PRIVATE")),zt(Wi,Ko,t),zt(Wi,Ko,"esm2017"),zt("fire-js","")}fp("");const Qo="@firebase/database",Xo="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka="";function pp(t){Ka=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Dn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Je(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _p(e)}}catch{}return new gp},yt=qa("localStorage"),Ui=qa("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new Ha("@firebase/database"),mp=function(){let t=1;return function(){return t++}}(),Ga=function(t){const e=sf(t),n=new nf;n.update(e);const s=n.digest();return wr.encodeByteArray(s)},Vn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Vn.apply(null,s):typeof s=="object"?e+=oe(s):e+=s,e+=" "}return e};let Ct=null,Jo=!0;const yp=function(t,e){w(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Vt.logLevel=q.VERBOSE,Ct=Vt.log.bind(Vt),e&&Ui.set("logging_enabled",!0)):typeof t=="function"?Ct=t:(Ct=null,Ui.remove("logging_enabled"))},de=function(...t){if(Jo===!0&&(Jo=!1,Ct===null&&Ui.get("logging_enabled")===!0&&yp(!0)),Ct){const e=Vn.apply(null,t);Ct(e)}},Kn=function(t){return function(...e){de(t,...e)}},$i=function(...t){const e="FIREBASE INTERNAL ERROR: "+Vn(...t);Vt.error(e)},Et=function(...t){const e=`FIREBASE FATAL ERROR: ${Vn(...t)}`;throw Vt.error(e),new Error(e)},xe=function(...t){const e="FIREBASE WARNING: "+Vn(...t);Vt.warn(e)},bp=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ya=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wp=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Jt="[MIN_NAME]",It="[MAX_NAME]",an=function(t,e){if(t===e)return 0;if(t===Jt||e===It)return-1;if(e===Jt||t===It)return 1;{const n=Zo(t),s=Zo(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Cp=function(t,e){return t===e?0:t<e?-1:1},_n=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+oe(e))},xr=function(t){if(typeof t!="object"||t===null)return oe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=oe(e[s]),n+=":",n+=xr(t[e[s]]);return n+="}",n},Qa=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Xa=function(t){w(!Ya(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(a=0;a<64;a+=8){let p=parseInt(h.substr(a,8),2).toString(16);p.length===1&&(p="0"+p),u=u+p}return u.toLowerCase()},vp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ep=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ip(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Tp=new RegExp("^-?(0*)\\d{1,10}$"),xp=-2147483648,Sp=2147483647,Zo=function(t){if(Tp.test(t)){const e=Number(t);if(e>=xp&&e<=Sp)return e}return null},qn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Np=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xn=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(de("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xe(e)}}class ji{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ji.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="5",Ja="v",Za="s",ec="r",tc="f",nc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sc="ls",ic="p",zi="ac",rc="websocket",oc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Pp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function lc(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let s;if(e===rc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===oc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Pp(t)&&(n.ns=t.namespace);const i=[];return ve(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(){this.counters_={}}incrementCounter(e,n=1){Je(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i={},gi={};function Nr(t){const e=t.toString();return _i[e]||(_i[e]=new Op),_i[e]}function Dp(t,e){const n=t.toString();return gi[n]||(gi[n]=e()),gi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&qn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="start",Fp="close",Lp="pLPCommand",Bp="pRTLPCB",ac="id",cc="pw",uc="ser",Wp="cb",Hp="seg",Up="ts",$p="d",jp="dframe",hc=1870,dc=30,zp=hc-dc,Vp=25e3,Kp=3e4;class Wt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Kn(e),this.stats_=Nr(n),this.urlFn=a=>(this.appCheckToken&&(a[zi]=this.appCheckToken),lc(n,oc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Mp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Kp)),wp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rr((...r)=>{const[o,l,a,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===el)this.id=l,this.password=a;else if(o===Fp)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[el]="t",s[uc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Wp]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ja]=Sr,this.transportSessionId&&(s[Za]=this.transportSessionId),this.lastSessionId&&(s[sc]=this.lastSessionId),this.applicationId&&(s[ic]=this.applicationId),this.appCheckToken&&(s[zi]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&nc.test(location.hostname)&&(s[ec]=tc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wt.forceAllow_=!0}static forceDisallow(){Wt.forceDisallow_=!0}static isAvailable(){return Wt.forceAllow_?!0:!Wt.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!vp()&&!Ep()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Pa(n),i=Qa(s,zp);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[jp]="t",s[ac]=e,s[cc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Rr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mp(),window[Lp+this.uniqueCallbackIdentifier]=e,window[Bp+this.uniqueCallbackIdentifier]=n,this.myIFrame=Rr.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){de("frame writing exception"),l.stack&&de(l.stack),de(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||de("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ac]=this.myID,e[cc]=this.myPW,e[uc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+dc+s.length<=hc;){const o=this.pendingSegs.shift();s=s+"&"+Hp+i+"="+o.seg+"&"+Up+i+"="+o.ts+"&"+$p+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Vp)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{de("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=16384,Gp=45e3;let bs=null;typeof MozWebSocket!="undefined"?bs=MozWebSocket:typeof WebSocket!="undefined"&&(bs=WebSocket);class ke{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Kn(this.connId),this.stats_=Nr(n),this.connURL=ke.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ja]=Sr,typeof location!="undefined"&&location.hostname&&nc.test(location.hostname)&&(o[ec]=tc),n&&(o[Za]=n),s&&(o[sc]=s),i&&(o[zi]=i),r&&(o[ic]=r),lc(e,rc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yt.set("previous_websocket_failure",!0);try{let s;Fa(),this.mySock=new bs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&bs!==null&&!ke.forceDisallow_}static previouslyFailed(){return yt.isInMemoryStorage||yt.get("previous_websocket_failure")===!0}markConnectionHealthy(){yt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Dn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Qa(n,qp);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Gp))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ke.responsesRequiredToBeHealthy=2;ke.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Wt,ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ke&&ke.isAvailable();let s=n&&!ke.previouslyFailed();if(e.webSocketOnly&&(n||xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ke];else{const i=this.transports_=[];for(const r of Ln.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ln.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ln.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=6e4,Qp=5e3,Xp=10*1024,Jp=100*1024,mi="t",tl="d",Zp="s",nl="r",e_="e",sl="o",il="a",rl="n",ol="p",t_="h";class n_{constructor(e,n,s,i,r,o,l,a,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Kn("c:"+this.id+":"),this.transportManager_=new Ln(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=xn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mi in e){const n=e[mi];n===il?this.upgradeIfSecondaryHealthy_():n===nl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===sl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_n("t",e),s=_n("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ol,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:il,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_n("t",e),s=_n("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_n(mi,e);if(tl in e){const s=e[tl];if(n===t_)this.onHandshake_(s);else if(n===rl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Zp?this.onConnectionShutdown_(s):n===nl?this.onReset_(s):n===e_?$i("Server Error: "+s):n===sl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$i("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Sr!==s&&xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),xn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Yp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Qp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ol,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends pc{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Ma()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ws}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=32,al=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new K("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ct(t){return t.pieces_.length-t.pieceNum_}function Y(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function _c(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function s_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function gc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function mc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function se(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof K)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new K(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function we(t,e){const n=L(t),s=L(e);if(n===null)return e;if(n===s)return we(Y(t),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ar(t,e){if(ct(t)!==ct(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Oe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ct(t)>ct(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class i_{constructor(e,n){this.errorPrefix_=n,this.parts_=gc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=zs(this.parts_[s]);yc(this)}}function r_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zs(e),yc(t)}function o_(t){const e=t.parts_.pop();t.byteLength_-=zs(e),t.parts_.length>0&&(t.byteLength_-=1)}function yc(t){if(t.byteLength_>al)throw new Error(t.errorPrefix_+"has a key path longer than "+al+" bytes ("+t.byteLength_+").");if(t.parts_.length>ll)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ll+") or object contains a cycle "+gt(t))}function gt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends pc{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new kr}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=1e3,l_=60*5*1e3,a_=3*1e3,cl=30*1e3,c_=1.3,u_=3e4,h_="server_kill",ul=3;class Ye extends fc{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ye.nextPersistentConnectionId_++,this.log_=Kn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gn,this.maxReconnectDelay_=l_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Fa())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ws.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(oe(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Cr,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?(this.onDataUpdate_(s.p,l,!1,null),n.resolve(l)):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||i!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},a_),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Ye.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Je(e,"w")){const s=Xt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ef(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Zd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+oe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$i("Unrecognized action received from server: "+oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>u_&&(this.reconnectDelay_=gn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*c_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ye.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(u){w(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?de("getToken() completed but was canceled"):(de("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=p&&p.token,l=new n_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,y=>{xe(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(h_)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&xe(u),a())}}}interrupt(e){de("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){de("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Uo(this.interruptReasons_)&&(this.reconnectDelay_=gn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>xr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new K(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){de("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ul&&(this.reconnectDelay_=cl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){de("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ul&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ka.replace(/\./g,"-")]=1,Ma()?e["framework.cordova"]=1:qd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ws.getInstance().currentlyOnline();return Uo(this.interruptReasons_)&&e}}Ye.nextPersistentConnectionId_=0;Ye.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(Jt,e),i=new F(Jt,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;class bc extends Vs{static get __EMPTY_NODE(){return rs}static set __EMPTY_NODE(e){rs=e}compare(e,n){return an(e.name,n.name)}isDefinedOn(e){throw ln("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(It,rs)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,rs)}toString(){return".key"}}const Kt=new bc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class re{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:re.RED,this.left=i!=null?i:Ce.EMPTY_NODE,this.right=r!=null?r:Ce.EMPTY_NODE}copy(e,n,s,i,r){return new re(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ce.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ce.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}re.RED=!0;re.BLACK=!1;class d_{copy(e,n,s,i,r){return this}insert(e,n,s){return new re(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ce{constructor(e,n=Ce.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ce(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,re.BLACK,null,null))}remove(e){return new Ce(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,re.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new os(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new os(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new os(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new os(this.root_,null,this.comparator_,!0,e)}}Ce.EMPTY_NODE=new d_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t,e){return an(t.name,e.name)}function Pr(t,e){return an(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi;function p_(t){Vi=t}const wc=function(t){return typeof t=="number"?"number:"+Xa(t):"string:"+t},Cc=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Je(e,".sv"),"Priority must be a string or number.")}else w(t===Vi||t.isEmpty(),"priority of unexpected type.");w(t===Vi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl;class ie{constructor(e,n=ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cc(this.priorityNode_)}static set __childrenNodeConstructor(e){hl=e}static get __childrenNodeConstructor(){return hl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:L(e)===".priority"?this.priorityNode_:ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=L(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||ct(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Xa(this.value_):e+=this.value_,this.lazyHash_=Ga(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ie.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ie.VALUE_TYPE_ORDER.indexOf(n),r=ie.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc,Ec;function __(t){vc=t}function g_(t){Ec=t}class m_ extends Vs{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?an(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(It,new ie("[PRIORITY-POST]",Ec))}makePost(e,n){const s=vc(e);return new F(n,new ie("[PRIORITY-POST]",s))}toString(){return".priority"}}const ee=new m_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=Math.log(2);class b_{constructor(e){const n=r=>parseInt(Math.log(r)/y_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Cs=function(t,e,n,s){t.sort(e);const i=function(a,c){const h=c-a;let u,p;if(h===0)return null;if(h===1)return u=t[a],p=n?n(u):u,new re(p,u.node,re.BLACK,null,null);{const y=parseInt(h/2,10)+a,I=i(a,y),O=i(y+1,c);return u=t[y],p=n?n(u):u,new re(p,u.node,re.BLACK,I,O)}},r=function(a){let c=null,h=null,u=t.length;const p=function(I,O){const A=u-I,H=u;u-=I;const Ee=i(A+1,H),te=t[A],ce=n?n(te):te;y(new re(ce,te.node,O,null,Ee))},y=function(I){c?(c.left=I,c=I):(h=I,c=I)};for(let I=0;I<a.count;++I){const O=a.nextBitIsOne(),A=Math.pow(2,a.count-(I+1));O?p(A,re.BLACK):(p(A,re.BLACK),p(A,re.RED))}return h},o=new b_(t.length),l=r(o);return new Ce(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi;const Mt={};class Ge{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return w(Mt&&ee,"ChildrenNode.ts has not been loaded"),yi=yi||new Ge({".priority":Mt},{".priority":ee}),yi}get(e){const n=Xt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ce?n:null}hasIndex(e){return Je(this.indexSet_,e.toString())}addIndex(e,n){w(e!==Kt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Cs(s,e.getCompare()):l=Mt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Ge(h,c)}addToIndexes(e,n){const s=gs(this.indexes_,(i,r)=>{const o=Xt(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===Mt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Cs(l,o.getCompare())}else return Mt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new Ge(s,this.indexSet_)}removeFromIndexes(e,n){const s=gs(this.indexes_,i=>{if(i===Mt)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new Ge(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn;class k{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Cc(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mn||(mn=new k(new Ce(Pr),null,Ge.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mn}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?mn:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?mn:this.priorityNode_;return new k(i,o,r)}}updateChild(e,n){const s=L(e);if(s===null)return n;{w(L(e)!==".priority"||ct(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Y(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ee,(o,l)=>{n[o]=l.val(e),s++,r&&k.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wc(this.getPriority().val())+":"),this.forEachChild(ee,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ga(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gn?-1:0}withIndex(e){if(e===Kt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Kt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ee),i=n.getIterator(ee);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kt?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class w_ extends k{constructor(){super(new Ce(Pr),k.EMPTY_NODE,Ge.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const Gn=new w_;Object.defineProperties(F,{MIN:{value:new F(Jt,k.EMPTY_NODE)},MAX:{value:new F(It,Gn)}});bc.__EMPTY_NODE=k.EMPTY_NODE;ie.__childrenNodeConstructor=k;p_(Gn);g_(Gn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=!0;function fe(t,e=null){if(t===null)return k.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ie(n,fe(e))}if(!(t instanceof Array)&&C_){const n=[];let s=!1;if(ve(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=fe(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return k.EMPTY_NODE;const r=Cs(n,f_,o=>o.name,Pr);if(s){const o=Cs(n,ee.getCompare());return new k(r,fe(e),new Ge({".priority":o},{".priority":ee}))}else return new k(r,fe(e),Ge.Default)}else{let n=k.EMPTY_NODE;return ve(t,(s,i)=>{if(Je(t,s)&&s.substring(0,1)!=="."){const r=fe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(fe(e))}}__(fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_ extends Vs{constructor(e){super(),this.indexPath_=e,w(!B(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?an(e.name,n.name):r}makePost(e,n){const s=fe(e),i=k.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,Gn);return new F(It,e)}toString(){return gc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_ extends Vs{compare(e,n){const s=e.node.compareTo(n.node);return s===0?an(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=fe(e);return new F(n,s)}toString(){return".value"}}const I_=new E_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){return{type:"value",snapshotNode:t}}function Zt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Bn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Wn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function T_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Bn(n,l)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Zt(n,s)):o.trackChildChange(Wn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ee,(i,r)=>{n.hasChild(i)||s.trackChildChange(Bn(i,r))}),n.isLeafNode()||n.forEachChild(ee,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Wn(i,r,o))}else s.trackChildChange(Zt(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.indexedFilter_=new Or(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Hn.getStartPost_(e),this.endPost_=Hn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=k.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(k.EMPTY_NODE);const r=this;return n.forEachChild(ee,(o,l)=>{r.matches(new F(o,l))||(i=i.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.rangedFilter_=new Hn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=k.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=k.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(k.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();l=(p,y)=>u(y,p)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,h=!1;for(;a.hasNext();){const u=a.getNext();!h&&l(r,u)<=0&&(h=!0),h&&c<this.limit_&&l(u,o)<=0?c++:i=i.updateImmediateChild(u.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(p,y)=>u(y,p)}else o=this.index_.getCompare();const l=e;w(l.numChildren()===this.limit_,"");const a=new F(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||l.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const y=p==null?1:o(p,a);if(h&&!s.isEmpty()&&y>=0)return r!=null&&r.trackChildChange(Wn(n,s,u)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Bn(n,u));const O=l.updateImmediateChild(n,k.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(Zt(p.name,p.node)),O.updateImmediateChild(p.name,p.node)):O}}else return s.isEmpty()?e:h&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Bn(c.name,c.node)),r.trackChildChange(Zt(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,k.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jt}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:It}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ee}copy(){const e=new Dr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function S_(t){return t.loadsAllData()?new Or(t.getIndex()):t.hasLimit()?new x_(t):new Hn(t)}function dl(t){const e={};if(t.isDefault())return e;let n;return t.index_===ee?n="$priority":t.index_===I_?n="$value":t.index_===Kt?n="$key":(w(t.index_ instanceof v_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=oe(n),t.startSet_&&(e.startAt=oe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+oe(t.indexStartName_))),t.endSet_&&(e.endAt=oe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+oe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function fl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends fc{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Kn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vs.getListenId_(e,s),l={};this.listens_[o]=l;const a=dl(e._queryParams);this.restRequest_(r+".json",a,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),Xt(this.listens_,o)===l){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const s=vs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=dl(e._queryParams),s=e._path.toString(),i=new Cr;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tf(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Dn(l.responseText)}catch{xe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&xe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(){return{value:null,children:new Map}}function Tc(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=L(e);t.children.has(s)||t.children.set(s,Es());const i=t.children.get(s);e=Y(e),Tc(i,e,n)}}function Ki(t,e,n){t.value!==null?n(e,t.value):R_(t,(s,i)=>{const r=new K(e.toString()+"/"+s);Ki(i,r,n)})}function R_(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ve(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=10*1e3,k_=30*1e3,P_=5*60*1e3;class O_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new A_(e);const s=pl+(k_-pl)*Math.random();xn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ve(e,(i,r)=>{r>0&&Je(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),xn(this.reportStats_.bind(this),Math.floor(Math.random()*2*P_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(De||(De={}));function xc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Mr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=De.ACK_USER_WRITE,this.source=xc()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new Is($(),n,this.revert)}}else return w(L(this.path)===e,"operationForChild called for unrelated child."),new Is(Y(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){this.source=e,this.path=n,this.type=De.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new Un(this.source,$()):new Un(this.source,Y(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=De.OVERWRITE}operationForChild(e){return B(this.path)?new Tt(this.source,$(),this.snap.getImmediateChild(e)):new Tt(this.source,Y(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=De.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new Tt(this.source,$(),n.value):new $n(this.source,$(),n)}else return w(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $n(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function M_(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(T_(o.childName,o.snapshotNode))}),yn(t,i,"child_removed",e,s,n),yn(t,i,"child_added",e,s,n),yn(t,i,"child_moved",r,s,n),yn(t,i,"child_changed",e,s,n),yn(t,i,"value",e,s,n),i}function yn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>L_(t,l,a)),o.forEach(l=>{const a=F_(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function F_(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function L_(t,e,n){if(e.childName==null||n.childName==null)throw ln("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t,e){return{eventCache:t,serverCache:e}}function Sn(t,e,n,s){return Ks(new xt(e,n,s),t.serverCache)}function Sc(t,e,n,s){return Ks(t.eventCache,new xt(e,n,s))}function qi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function St(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi;const B_=()=>(bi||(bi=new Ce(Cp)),bi);class J{constructor(e,n=B_()){this.value=e,this.children=n}static fromObject(e){let n=new J(null);return ve(e,(s,i)=>{n=n.set(new K(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(B(e))return null;{const s=L(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Y(e),n);return r!=null?{path:se(new K(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=L(e),s=this.children.get(n);return s!==null?s.subtree(Y(e)):new J(null)}}set(e,n){if(B(e))return new J(n,this.children);{const s=L(e),r=(this.children.get(s)||new J(null)).set(Y(e),n),o=this.children.insert(s,r);return new J(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=L(e),s=this.children.get(n);if(s){const i=s.remove(Y(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new J(null):new J(this.value,r)}else return this}}get(e){if(B(e))return this.value;{const n=L(e),s=this.children.get(n);return s?s.get(Y(e)):null}}setTree(e,n){if(B(e))return n;{const s=L(e),r=(this.children.get(s)||new J(null)).setTree(Y(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new J(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(se(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(B(e))return null;{const r=L(e),o=this.children.get(r);return o?o.findOnPath_(Y(e),se(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,s){if(B(e))return this;{this.value&&s(n,this.value);const i=L(e),r=this.children.get(i);return r?r.foreachOnPath_(Y(e),se(n,i),s):new J(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(se(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.writeTree_=e}static empty(){return new Le(new J(null))}}function Nn(t,e,n){if(B(e))return new Le(new J(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=we(i,e);return r=r.updateChild(o,n),new Le(t.writeTree_.set(i,r))}else{const i=new J(n),r=t.writeTree_.setTree(e,i);return new Le(r)}}}function _l(t,e,n){let s=t;return ve(n,(i,r)=>{s=Nn(s,se(e,i),r)}),s}function gl(t,e){if(B(e))return Le.empty();{const n=t.writeTree_.setTree(e,new J(null));return new Le(n)}}function Gi(t,e){return Nt(t,e)!=null}function Nt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(we(n.path,e)):null}function ml(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ee,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function lt(t,e){if(B(e))return t;{const n=Nt(t,e);return n!=null?new Le(new J(n)):new Le(t.writeTree_.subtree(e))}}function Yi(t){return t.writeTree_.isEmpty()}function en(t,e){return Nc($(),t.writeTree_,e)}function Nc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Nc(se(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(se(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t,e){return Pc(e,t)}function W_(t,e,n,s,i){w(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Nn(t.visibleWrites,e,n)),t.lastWriteId=s}function H_(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function U_(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&$_(l,s.path)?i=!1:Oe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return j_(t),!0;if(s.snap)t.visibleWrites=gl(t.visibleWrites,s.path);else{const l=s.children;ve(l,a=>{t.visibleWrites=gl(t.visibleWrites,se(s.path,a))})}return!0}else return!1}function $_(t,e){if(t.snap)return Oe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Oe(se(t.path,n),e))return!0;return!1}function j_(t){t.visibleWrites=Rc(t.allWrites,z_,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function z_(t){return t.visible}function Rc(t,e,n){let s=Le.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Oe(n,o)?(l=we(n,o),s=Nn(s,l,r.snap)):Oe(o,n)&&(l=we(o,n),s=Nn(s,$(),r.snap.getChild(l)));else if(r.children){if(Oe(n,o))l=we(n,o),s=_l(s,l,r.children);else if(Oe(o,n))if(l=we(o,n),B(l))s=_l(s,$(),r.children);else{const a=Xt(r.children,L(l));if(a){const c=a.getChild(Y(l));s=Nn(s,$(),c)}}}else throw ln("WriteRecord should have .snap or .children")}}return s}function Ac(t,e,n,s,i){if(!s&&!i){const r=Nt(t.visibleWrites,e);if(r!=null)return r;{const o=lt(t.visibleWrites,e);if(Yi(o))return n;if(n==null&&!Gi(o,$()))return null;{const l=n||k.EMPTY_NODE;return en(o,l)}}}else{const r=lt(t.visibleWrites,e);if(!i&&Yi(r))return n;if(!i&&n==null&&!Gi(r,$()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Oe(c.path,e)||Oe(e,c.path))},l=Rc(t.allWrites,o,e),a=n||k.EMPTY_NODE;return en(l,a)}}}function V_(t,e,n){let s=k.EMPTY_NODE;const i=Nt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ee,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=lt(t.visibleWrites,e);return n.forEachChild(ee,(o,l)=>{const a=en(lt(r,new K(o)),l);s=s.updateImmediateChild(o,a)}),ml(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=lt(t.visibleWrites,e);return ml(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function K_(t,e,n,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=se(e,n);if(Gi(t.visibleWrites,r))return null;{const o=lt(t.visibleWrites,r);return Yi(o)?i.getChild(n):en(o,i.getChild(n))}}function q_(t,e,n,s){const i=se(e,n),r=Nt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=lt(t.visibleWrites,i);return en(o,s.getNode().getImmediateChild(n))}else return null}function G_(t,e){return Nt(t.visibleWrites,e)}function Y_(t,e,n,s,i,r,o){let l;const a=lt(t.visibleWrites,e),c=Nt(a,$());if(c!=null)l=c;else if(n!=null)l=en(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),p=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let y=p.getNext();for(;y&&h.length<i;)u(y,s)!==0&&h.push(y),y=p.getNext();return h}else return[]}function Q_(){return{visibleWrites:Le.empty(),allWrites:[],lastWriteId:-1}}function Ts(t,e,n,s){return Ac(t.writeTree,t.treePath,e,n,s)}function Br(t,e){return V_(t.writeTree,t.treePath,e)}function yl(t,e,n,s){return K_(t.writeTree,t.treePath,e,n,s)}function xs(t,e){return G_(t.writeTree,se(t.treePath,e))}function X_(t,e,n,s,i,r){return Y_(t.writeTree,t.treePath,e,n,s,i,r)}function Wr(t,e,n){return q_(t.writeTree,t.treePath,e,n)}function kc(t,e){return Pc(se(t.treePath,e),t.writeTree)}function Pc(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Wn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Bn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Zt(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Wn(s,e.snapshotNode,i.oldSnap));else throw ln("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Oc=new Z_;class Hr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new xt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:St(this.viewCache_),r=X_(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t){return{filter:t}}function tg(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ng(t,e,n,s,i){const r=new J_;let o,l;if(n.type===De.OVERWRITE){const c=n;c.source.fromUser?o=Qi(t,e,c.path,c.snap,s,i,r):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=Ss(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===De.MERGE){const c=n;c.source.fromUser?o=ig(t,e,c.path,c.children,s,i,r):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Xi(t,e,c.path,c.children,s,i,l,r))}else if(n.type===De.ACK_USER_WRITE){const c=n;c.revert?o=lg(t,e,c.path,s,i,r):o=rg(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===De.LISTEN_COMPLETE)o=og(t,e,n.path,s,r);else throw ln("Unknown operation type: "+n.type);const a=r.getChanges();return sg(e,o,a),{viewCache:o,changes:a}}function sg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=qi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Ic(qi(e)))}}function Dc(t,e,n,s,i,r){const o=e.eventCache;if(xs(s,n)!=null)return e;{let l,a;if(B(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=St(e),h=c instanceof k?c:k.EMPTY_NODE,u=Br(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Ts(s,St(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=L(n);if(c===".priority"){w(ct(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const u=yl(s,n,h,a);u!=null?l=t.filter.updatePriority(h,u):l=o.getNode()}else{const h=Y(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const p=yl(s,n,o.getNode(),a);p!=null?u=o.getNode().getImmediateChild(c).updateChild(h,p):u=o.getNode().getImmediateChild(c)}else u=Wr(s,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,h,i,r):l=o.getNode()}}return Sn(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function Ss(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(B(n))c=h.updateFullNode(a.getNode(),s,null);else if(h.filtersNodes()&&!a.isFiltered()){const y=a.getNode().updateChild(n,s);c=h.updateFullNode(a.getNode(),y,null)}else{const y=L(n);if(!a.isCompleteForPath(n)&&ct(n)>1)return e;const I=Y(n),A=a.getNode().getImmediateChild(y).updateChild(I,s);y===".priority"?c=h.updatePriority(a.getNode(),A):c=h.updateChild(a.getNode(),y,A,I,Oc,null)}const u=Sc(e,c,a.isFullyInitialized()||B(n),h.filtersNodes()),p=new Hr(i,u,r);return Dc(t,u,n,i,p,l)}function Qi(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const h=new Hr(i,e,r);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Sn(e,c,!0,t.filter.filtersNodes());else{const u=L(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Sn(e,c,l.isFullyInitialized(),l.isFiltered());else{const p=Y(n),y=l.getNode().getImmediateChild(u);let I;if(B(p))I=s;else{const O=h.getCompleteChild(u);O!=null?_c(p)===".priority"&&O.getChild(mc(p)).isEmpty()?I=O:I=O.updateChild(p,s):I=k.EMPTY_NODE}if(y.equals(I))a=e;else{const O=t.filter.updateChild(l.getNode(),u,I,p,h,o);a=Sn(e,O,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function bl(t,e){return t.eventCache.isCompleteForChild(e)}function ig(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const h=se(n,a);bl(e,L(h))&&(l=Qi(t,l,h,c,i,r,o))}),s.foreach((a,c)=>{const h=se(n,a);bl(e,L(h))||(l=Qi(t,l,h,c,i,r,o))}),l}function wl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Xi(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;B(n)?c=s:c=new J(null).setTree(n,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,p)=>{if(h.hasChild(u)){const y=e.serverCache.getNode().getImmediateChild(u),I=wl(t,y,p);a=Ss(t,a,new K(u),I,i,r,o,l)}}),c.children.inorderTraversal((u,p)=>{const y=!e.serverCache.isCompleteForChild(u)&&p.value===void 0;if(!h.hasChild(u)&&!y){const I=e.serverCache.getNode().getImmediateChild(u),O=wl(t,I,p);a=Ss(t,a,new K(u),O,i,r,o,l)}}),a}function rg(t,e,n,s,i,r,o){if(xs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ss(t,e,n,a.getNode().getChild(n),i,r,l,o);if(B(n)){let c=new J(null);return a.getNode().forEachChild(Kt,(h,u)=>{c=c.set(new K(h),u)}),Xi(t,e,n,c,i,r,l,o)}else return e}else{let c=new J(null);return s.foreach((h,u)=>{const p=se(n,h);a.isCompleteForPath(p)&&(c=c.set(h,a.getNode().getChild(p)))}),Xi(t,e,n,c,i,r,l,o)}}function og(t,e,n,s,i){const r=e.serverCache,o=Sc(e,r.getNode(),r.isFullyInitialized()||B(n),r.isFiltered());return Dc(t,o,n,s,Oc,i)}function lg(t,e,n,s,i,r){let o;if(xs(s,n)!=null)return e;{const l=new Hr(s,e,i),a=e.eventCache.getNode();let c;if(B(n)||L(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Ts(s,St(e));else{const u=e.serverCache.getNode();w(u instanceof k,"serverChildren would be complete if leaf node"),h=Br(s,u)}h=h,c=t.filter.updateFullNode(a,h,r)}else{const h=L(n);let u=Wr(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=a.getImmediateChild(h)),u!=null?c=t.filter.updateChild(a,h,u,Y(n),l,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(a,h,k.EMPTY_NODE,Y(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ts(s,St(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||xs(s,$())!=null,Sn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Or(s.getIndex()),r=S_(s);this.processor_=eg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(k.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(k.EMPTY_NODE,l.getNode(),null),h=new xt(a,o.isFullyInitialized(),i.filtersNodes()),u=new xt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ks(u,h),this.eventGenerator_=new D_(this.query_)}get query(){return this.query_}}function cg(t){return t.viewCache_.serverCache.getNode()}function ug(t,e){const n=St(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function Cl(t){return t.eventRegistrations_.length===0}function hg(t,e){t.eventRegistrations_.push(e)}function vl(t,e,n){const s=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function El(t,e,n,s){e.type===De.MERGE&&e.source.queryId!==null&&(w(St(t.viewCache_),"We should always have a full cache before handling merges"),w(qi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=ng(t.processor_,i,e,n,s);return tg(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Mc(t,r.changes,r.viewCache.eventCache.getNode(),null)}function dg(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ee,(r,o)=>{s.push(Zt(r,o))}),n.isFullyInitialized()&&s.push(Ic(n.getNode())),Mc(t,s,n.getNode(),e)}function Mc(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return M_(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns;class fg{constructor(){this.views=new Map}}function pg(t){w(!Ns,"__referenceConstructor has already been defined"),Ns=t}function _g(){return w(Ns,"Reference.ts has not been loaded"),Ns}function gg(t){return t.views.size===0}function Ur(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),El(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(El(o,e,n,s));return r}}function mg(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ts(n,i?s:null),a=!1;l?a=!0:s instanceof k?(l=Br(n,s),a=!1):(l=k.EMPTY_NODE,a=!1);const c=Ks(new xt(l,a,!1),new xt(s,i,!1));return new ag(e,c)}return o}function yg(t,e,n,s,i,r){const o=mg(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hg(o,n),dg(o,n)}function bg(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=ut(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(vl(c,n,s)),Cl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(vl(a,n,s)),Cl(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!ut(t)&&r.push(new(_g())(e._repo,e._path)),{removed:r,events:o}}function Fc(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function qt(t,e){let n=null;for(const s of t.views.values())n=n||ug(s,e);return n}function Lc(t,e){if(e._queryParams.loadsAllData())return qs(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Bc(t,e){return Lc(t,e)!=null}function ut(t){return qs(t)!=null}function qs(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs;function wg(t){w(!Rs,"__referenceConstructor has already been defined"),Rs=t}function Cg(){return w(Rs,"Reference.ts has not been loaded"),Rs}let vg=1;class Il{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=Q_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Eg(t,e,n,s,i){return W_(t.pendingWriteTree_,e,n,s,i),i?Yn(t,new Tt(xc(),e,n)):[]}function Ht(t,e,n=!1){const s=H_(t.pendingWriteTree_,e);if(U_(t.pendingWriteTree_,e)){let r=new J(null);return s.snap!=null?r=r.set($(),!0):ve(s.children,o=>{r=r.set(new K(o),!0)}),Yn(t,new Is(s.path,r,n))}else return[]}function Gs(t,e,n){return Yn(t,new Tt(Mr(),e,n))}function Ig(t,e,n){const s=J.fromObject(n);return Yn(t,new $n(Mr(),e,s))}function Tg(t,e){return Yn(t,new Un(Mr(),e))}function xg(t,e,n){const s=$r(t,n);if(s){const i=jr(s),r=i.path,o=i.queryId,l=we(r,e),a=new Un(Fr(o),l);return zr(t,r,a)}else return[]}function Ji(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||Bc(r,e))){const l=bg(r,e,n,s);gg(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const a=l.removed;o=l.events;const c=a.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(u,p)=>ut(p));if(c&&!h){const u=t.syncPointTree_.subtree(i);if(!u.isEmpty()){const p=Rg(u);for(let y=0;y<p.length;++y){const I=p[y],O=I.query,A=$c(t,I);t.listenProvider_.startListening(Rn(O),As(t,O),A.hashFn,A.onComplete)}}}!h&&a.length>0&&!s&&(c?t.listenProvider_.stopListening(Rn(e),null):a.forEach(u=>{const p=t.queryToTagMap.get(Ys(u));t.listenProvider_.stopListening(Rn(u),p)})),Ag(t,a)}return o}function Sg(t,e,n,s){const i=$r(t,s);if(i!=null){const r=jr(i),o=r.path,l=r.queryId,a=we(o,e),c=new Tt(Fr(l),a,n);return zr(t,o,c)}else return[]}function Ng(t,e,n,s){const i=$r(t,s);if(i){const r=jr(i),o=r.path,l=r.queryId,a=we(o,e),c=J.fromObject(n),h=new $n(Fr(l),a,c);return zr(t,o,h)}else return[]}function Tl(t,e,n){const s=e._path;let i=null,r=!1;t.syncPointTree_.foreachOnPath(s,(u,p)=>{const y=we(u,s);i=i||qt(p,y),r=r||ut(p)});let o=t.syncPointTree_.get(s);o?(r=r||ut(o),i=i||qt(o,$())):(o=new fg,t.syncPointTree_=t.syncPointTree_.set(s,o));let l;i!=null?l=!0:(l=!1,i=k.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,y)=>{const I=qt(y,$());I&&(i=i.updateImmediateChild(p,I))}));const a=Bc(o,e);if(!a&&!e._queryParams.loadsAllData()){const u=Ys(e);w(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const p=kg();t.queryToTagMap.set(u,p),t.tagToQueryMap.set(p,u)}const c=Lr(t.pendingWriteTree_,s);let h=yg(o,e,n,c,i,l);if(!a&&!r){const u=Lc(o,e);h=h.concat(Pg(t,e,u))}return h}function Wc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=we(o,e),c=qt(l,a);if(c)return c});return Ac(i,e,r,n,!0)}function Yn(t,e){return Hc(e,t.syncPointTree_,null,Lr(t.pendingWriteTree_,$()))}function Hc(t,e,n,s){if(B(t.path))return Uc(t,e,n,s);{const i=e.get($());n==null&&i!=null&&(n=qt(i,$()));let r=[];const o=L(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,h=kc(s,o);r=r.concat(Hc(l,a,c,h))}return i&&(r=r.concat(Ur(i,t,s,n))),r}}function Uc(t,e,n,s){const i=e.get($());n==null&&i!=null&&(n=qt(i,$()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=kc(s,o),h=t.operationForChild(o);h&&(r=r.concat(Uc(h,l,a,c)))}),i&&(r=r.concat(Ur(i,t,s,n))),r}function $c(t,e){const n=e.query,s=As(t,n);return{hashFn:()=>(cg(e)||k.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?xg(t,n._path,s):Tg(t,n._path);{const r=Ip(i,n);return Ji(t,n,null,r)}}}}function As(t,e){const n=Ys(e);return t.queryToTagMap.get(n)}function Ys(t){return t._path.toString()+"$"+t._queryIdentifier}function $r(t,e){return t.tagToQueryMap.get(e)}function jr(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function zr(t,e,n){const s=t.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=Lr(t.pendingWriteTree_,e);return Ur(s,n,i,null)}function Rg(t){return t.fold((e,n,s)=>{if(n&&ut(n))return[qs(n)];{let i=[];return n&&(i=Fc(n)),ve(s,(r,o)=>{i=i.concat(o)}),i}})}function Rn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Cg())(t._repo,t._path):t}function Ag(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ys(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function kg(){return vg++}function Pg(t,e,n){const s=e._path,i=As(t,e),r=$c(t,n),o=t.listenProvider_.startListening(Rn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)w(!ut(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,u)=>{if(!B(c)&&h&&ut(h))return[qs(h).query];{let p=[];return h&&(p=p.concat(Fc(h).map(y=>y.query))),ve(u,(y,I)=>{p=p.concat(I)}),p}});for(let c=0;c<a.length;++c){const h=a[c];t.listenProvider_.stopListening(Rn(h),As(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vr(n)}node(){return this.node_}}class Kr{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=se(this.path_,e);return new Kr(this.syncTree_,n)}node(){return Wc(this.syncTree_,this.path_)}}const Og=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xl=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Dg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Mg(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Dg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},Mg=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Fg=function(t,e,n,s){return qr(e,new Kr(n,t),s)},Lg=function(t,e,n){return qr(t,new Vr(e),n)};function qr(t,e,n){const s=t.getPriority().val(),i=xl(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=xl(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ie(l,fe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ie(i))),o.forEachChild(ee,(l,a)=>{const c=qr(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Yr(t,e){let n=e instanceof K?e:new K(e),s=t,i=L(n);for(;i!==null;){const r=Xt(s.node.children,i)||{children:{},childCount:0};s=new Gr(i,s,r),n=Y(n),i=L(n)}return s}function cn(t){return t.node.value}function jc(t,e){t.node.value=e,Zi(t)}function zc(t){return t.node.childCount>0}function Bg(t){return cn(t)===void 0&&!zc(t)}function Qs(t,e){ve(t.node.children,(n,s)=>{e(new Gr(n,t,s))})}function Vc(t,e,n,s){n&&!s&&e(t),Qs(t,i=>{Vc(i,e,!0,s)}),n&&s&&e(t)}function Wg(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Qn(t){return new K(t.parent===null?t.name:Qn(t.parent)+"/"+t.name)}function Zi(t){t.parent!==null&&Hg(t.parent,t.name,t)}function Hg(t,e,n){const s=Bg(n),i=Je(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Zi(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Zi(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=/[\[\].#$\/\u0000-\u001F\u007F]/,$g=/[\[\].#$\u0000-\u001F\u007F]/,wi=10*1024*1024,Kc=function(t){return typeof t=="string"&&t.length!==0&&!Ug.test(t)},qc=function(t){return typeof t=="string"&&t.length!==0&&!$g.test(t)},jg=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qc(t)},Gc=function(t,e,n){const s=n instanceof K?new i_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+gt(s));if(typeof e=="function")throw new Error(t+"contains a function "+gt(s)+" with contents = "+e.toString());if(Ya(e))throw new Error(t+"contains "+e.toString()+" "+gt(s));if(typeof e=="string"&&e.length>wi/3&&zs(e)>wi)throw new Error(t+"contains a string greater than "+wi+" utf8 bytes "+gt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ve(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Kc(o)))throw new Error(t+" contains an invalid key ("+o+") "+gt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);r_(s,o),Gc(t,l,s),o_(s)}),i&&r)throw new Error(t+' contains ".value" child '+gt(s)+" in addition to actual children.")}},Yc=function(t,e,n,s){if(!(s&&n===void 0)&&!qc(n))throw new Error(Wa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zg=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Yc(t,e,n,s)},Vg=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!jg(n))throw new Error(Wa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qc(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ar(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Xc(t,e,n){Qc(t,n),Jc(t,s=>Ar(s,e))}function Rt(t,e,n){Qc(t,n),Jc(t,s=>Oe(s,e)||Oe(e,s))}function Jc(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(qg(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qg(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ct&&de("event: "+n.toString()),qn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="repo_interrupt",Yg=25;class Qg{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Kg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Es(),this.transactionQueueTree_=new Gr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xg(t,e,n){if(t.stats_=Nr(t.repoInfo_),t.forceRestClient_||Np())t.server_=new vs(t.repoInfo_,(s,i,r,o)=>{Sl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Nl(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{oe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ye(t.repoInfo_,e,(s,i,r,o)=>{Sl(t,s,i,r,o)},s=>{Nl(t,s)},s=>{Zg(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Dp(t.repoInfo_,()=>new O_(t.stats_,t.server_)),t.infoData_=new N_,t.infoSyncTree_=new Il({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Gs(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Qr(t,"connected",!1),t.serverSyncTree_=new Il({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Rt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Jg(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zc(t){return Og({timestamp:Jg(t)})}function Sl(t,e,n,s,i){t.dataUpdateCount++;const r=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=gs(n,c=>fe(c));o=Ng(t.serverSyncTree_,r,a,i)}else{const a=fe(n);o=Sg(t.serverSyncTree_,r,a,i)}else if(s){const a=gs(n,c=>fe(c));o=Ig(t.serverSyncTree_,r,a)}else{const a=fe(n);o=Gs(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Jr(t,r)),Rt(t.eventQueue_,l,o)}function Nl(t,e){Qr(t,"connected",e),e===!1&&tm(t)}function Zg(t,e){ve(e,(n,s)=>{Qr(t,n,s)})}function Qr(t,e,n){const s=new K("/.info/"+e),i=fe(n);t.infoData_.updateSnapshot(s,i);const r=Gs(t.infoSyncTree_,s,i);Rt(t.eventQueue_,s,r)}function em(t){return t.nextWriteId_++}function tm(t){eu(t,"onDisconnectEvents");const e=Zc(t),n=Es();Ki(t.onDisconnect_,$(),(i,r)=>{const o=Fg(i,r,t.serverSyncTree_,e);Tc(n,i,o)});let s=[];Ki(n,$(),(i,r)=>{s=s.concat(Gs(t.serverSyncTree_,i,r));const o=om(t,i);Jr(t,o)}),t.onDisconnect_=Es(),Rt(t.eventQueue_,$(),s)}function nm(t,e,n){let s;L(e._path)===".info"?s=Tl(t.infoSyncTree_,e,n):s=Tl(t.serverSyncTree_,e,n),Xc(t.eventQueue_,e._path,s)}function Rl(t,e,n){let s;L(e._path)===".info"?s=Ji(t.infoSyncTree_,e,n):s=Ji(t.serverSyncTree_,e,n),Xc(t.eventQueue_,e._path,s)}function sm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Gg)}function eu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),de(n,...e)}function tu(t,e,n){return Wc(t.serverSyncTree_,e,n)||k.EMPTY_NODE}function Xr(t,e=t.transactionQueueTree_){if(e||Xs(t,e),cn(e)){const n=su(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&im(t,Qn(e),n)}else zc(e)&&Qs(e,n=>{Xr(t,n)})}function im(t,e,n){const s=n.map(c=>c.currentWriteId),i=tu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];w(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=we(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{eu(t,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Ht(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&u.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Xs(t,Yr(t.transactionQueueTree_,e)),Xr(t,t.transactionQueueTree_),Rt(t.eventQueue_,e,h);for(let p=0;p<u.length;p++)qn(u[p])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{xe("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Jr(t,e)}},o)}function Jr(t,e){const n=nu(t,e),s=Qn(n),i=su(t,n);return rm(t,i,s),s}function rm(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=we(n,a.path);let h=!1,u;if(w(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,u=a.abortReason,i=i.concat(Ht(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Yg)h=!0,u="maxretry",i=i.concat(Ht(t.serverSyncTree_,a.currentWriteId,!0));else{const p=tu(t,a.path,o);a.currentInputSnapshot=p;const y=e[l].update(p.val());if(y!==void 0){Gc("transaction failed: Data returned ",y,a.path);let I=fe(y);typeof y=="object"&&y!=null&&Je(y,".priority")||(I=I.updatePriority(p.getPriority()));const A=a.currentWriteId,H=Zc(t),Ee=Lg(I,p,H);a.currentOutputSnapshotRaw=I,a.currentOutputSnapshotResolved=Ee,a.currentWriteId=em(t),o.splice(o.indexOf(A),1),i=i.concat(Eg(t.serverSyncTree_,a.path,Ee,a.currentWriteId,a.applyLocally)),i=i.concat(Ht(t.serverSyncTree_,A,!0))}else h=!0,u="nodata",i=i.concat(Ht(t.serverSyncTree_,a.currentWriteId,!0))}Rt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(p){setTimeout(p,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}Xs(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)qn(s[l]);Xr(t,t.transactionQueueTree_)}function nu(t,e){let n,s=t.transactionQueueTree_;for(n=L(e);n!==null&&cn(s)===void 0;)s=Yr(s,n),e=Y(e),n=L(e);return s}function su(t,e){const n=[];return iu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function iu(t,e,n){const s=cn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Qs(e,i=>{iu(t,i,n)})}function Xs(t,e){const n=cn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,jc(e,n.length>0?n:void 0)}Qs(e,s=>{Xs(t,s)})}function om(t,e){const n=Qn(nu(t,e)),s=Yr(t.transactionQueueTree_,e);return Wg(s,i=>{Ci(t,i)}),Ci(t,s),Vc(s,i=>{Ci(t,i)}),n}function Ci(t,e){const n=cn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ht(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?jc(e,void 0):n.length=r+1,Rt(t.eventQueue_,Qn(e),i);for(let o=0;o<s.length;o++)qn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function am(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Al=function(t,e){const n=cm(t),s=n.namespace;n.domain==="firebase.com"&&Et(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Et("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||bp();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new K(n.pathString)}},cm=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=lm(t.substring(h,u)));const p=am(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const y=e.slice(0,c);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+oe(this.snapshot.exportVal())}}class ou{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return B(this._path)?null:_c(this._path)}get ref(){return new Ze(this._repo,this._path)}get _queryIdentifier(){const e=fl(this._queryParams),n=xr(e);return n==="{}"?"default":n}get _queryObject(){return fl(this._queryParams)}isEqual(e){if(e=Er(e),!(e instanceof Zr))return!1;const n=this._repo===e._repo,s=Ar(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+s_(this._path)}}class Ze extends Zr{constructor(e,n){super(e,n,new Dr,!1)}get parent(){const e=mc(this._path);return e===null?null:new Ze(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class jn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),s=ks(this.ref,e);return new jn(this._node.getChild(n),s,ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new jn(i,ks(this.ref,s),ee)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function hm(t,e){return t=Er(t),t._checkNotDeleted("ref"),e!==void 0?ks(t._root,e):t._root}function ks(t,e){return t=Er(t),L(t._path)===null?zg("child","path",e,!1):Yc("child","path",e,!1),new Ze(t._repo,se(t._path,e))}class eo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new ru("value",this,new jn(e.snapshotNode,new Ze(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ou(this,e,n):null}matches(e){return e instanceof eo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class to{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ou(this,e,n):null}createEvent(e,n){w(e.childName!=null,"Child events should have a childName.");const s=ks(new Ze(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new ru(e.type,this,new jn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof to?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function dm(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(h,u)=>{Rl(t._repo,t,l),a(h,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new um(n,r||void 0),l=e==="value"?new eo(o):new to(e,o);return nm(t._repo,t,l),()=>Rl(t._repo,t,l)}function fm(t,e,n,s){return dm(t,"value",e,n,s)}pg(Ze);wg(Ze);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="FIREBASE_DATABASE_EMULATOR_HOST",er={};let _m=!1;function gm(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Et("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),de("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Al(r,i),l=o.repoInfo,a,c;typeof process!="undefined"&&process.env&&(c=process.env[pm]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Al(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new ji(ji.OWNER):new Ap(t.name,t.options,e);Vg("Invalid Firebase Database URL",o),B(o.path)||Et("Database URL must point to the root of a Firebase Database (not including a child path).");const u=ym(l,t,h,new Rp(t.name,n));return new bm(u,t)}function mm(t,e){const n=er[e];(!n||n[t.key]!==t)&&Et(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sm(t),delete n[t.key]}function ym(t,e,n,s){let i=er[e.name];i||(i={},er[e.name]=i);let r=i[t.toURLString()];return r&&Et("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Qg(t,_m,n,s),i[t.toURLString()]=r,r}class bm{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ze(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Et("Cannot call "+e+" on a deleted database.")}}function wm(t=ip(),e){return Zf(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t){pp(np),ys(new Mn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return gm(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),zt(Qo,Xo,t),zt(Qo,Xo,"esm2017")}Ye.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ye.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Cm();var vm="firebase",Em="9.8.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(vm,Em,"app");const Im=sp({apiKey:"AIzaSyAkPs2-RDIXWOtwEEsZlTK5HWpH5XBDTLw",authDomain:"kirdle-6a570.firebaseapp.com",databaseURL:"https://kirdle-6a570-default-rtdb.firebaseio.com",projectId:"kirdle-6a570",storageBucket:"kirdle-6a570.appspot.com",messagingSenderId:"355421662749",appId:"1:355421662749:web:1d1c3087985488e0c120f4",measurementId:"G-R5BD79R2YW"}),Tm=wm(Im),S=Bs({tileArray:Array(30).fill(0).map(t=>({ch:" ",color:"bg-white"})),curTile:0,solution:["S","W","E","E","T"],guessStatus:Array(26).fill(-1),isDone:!1,alerts:{success:!1,failure:!1,errors:{notEnoughLetters:!1}}}),xm=zn({name:"KirdleGrid",components:{Tile:$d},data(){return{store:S}}}),Sm={class:"grid grid-cols-5 gap-1",id:"grid"};function Nm(t,e,n,s,i,r){const o=In("Tile");return Ne(),$e("div",Sm,[(Ne(!0),$e(he,null,as(t.store.tileArray,l=>(Ne(),Ea(o,{class:tn([l.color])},{default:ra(()=>[xa(nr(l.ch),1)]),_:2},1032,["class"]))),256))])}var Rm=on(xm,[["render",Nm]]);const Am=zn({name:"KeyboardButton",props:{text:{required:!0,type:String},scaleW:{type:Number,default:1}},created(){},data(){return{}},methods:{typeLetter(t){if(!S.isDone&&!(S.curTile>=S.tileArray.length)){if(S.curTile%5==4){S.tileArray[S.curTile].ch==" "&&(S.tileArray[S.curTile].ch=t);return}S.tileArray[S.curTile].ch=t,S.curTile++}},guess(){if(S.isDone)return;if(S.curTile%5!=4||S.tileArray[S.curTile].ch==" "){S.alerts.errors.notEnoughLetters=!0,setTimeout(()=>{S.alerts.errors.notEnoughLetters=!1},500);return}let t=Math.floor(S.curTile/5),e=!0;for(let n=t*5;n<t*5+5;n++){if(S.solution.includes(S.tileArray[n].ch)){if(S.tileArray[n].ch==" "){S.alerts.errors.notEnoughLetters=!0;return}if(S.solution[n-t*5]==S.tileArray[n].ch){S.tileArray[n].color="bg-green-300",S.guessStatus[S.tileArray[n].ch.charCodeAt(0)-41]=2;continue}S.tileArray[n].color="bg-yellow-300",S.guessStatus[S.tileArray[n].ch.charCodeAt(0)-41]=1,e=!1;continue}S.tileArray[n].color="bg-gray-300",S.guessStatus[S.tileArray[n].ch.charCodeAt(0)-41]=0,e=!1}if(e){S.alerts.success=!0,setTimeout(()=>{S.alerts.success=!1},500),S.isDone=!0;return}if(t==5){S.alerts.failure=!0,setTimeout(()=>{S.alerts.failure=!1},500),S.isDone=!0;return}S.curTile++},deleteLetter(){if(!S.isDone&&S.curTile%5!=0){if(S.curTile%5==4){S.tileArray[S.curTile].ch==" "&&S.curTile--,S.tileArray[S.curTile].ch=" ";return}S.curTile--,S.tileArray[S.curTile].ch=" "}},getColor(){if(this.text=="Enter"||this.text=="Back")return"bg-gray-200";switch(S.guessStatus[this.text.charCodeAt(0)-41]){case 0:return"bg-gray-300";case 1:return"bg-yellow-300";case 2:return"bg-green-300";default:return"bg-gray-200"}}}});function km(t,e,n,s,i,r){return Ne(),$e("button",{onClick:e[0]||(e[0]=o=>t.text=="Enter"?t.guess():t.text=="Back"?t.deleteLetter():t.typeLetter(t.text)),class:tn(["flex justify-center items-center font-bold mr-1 rounded-md h-8",[t.getColor()]]),style:Ps({width:28*t.scaleW+"px"})},nr(t.text),7)}var Pm=on(Am,[["render",km]]);const Om=zn({name:"KirdleKeyboard",components:{KeyboardButton:Pm}}),Dm={class:"w-full"},Mm={class:"keyboard-row"},Fm={class:"keyboard-row"},Lm={class:"keyboard-row"};function Bm(t,e,n,s,i,r){const o=In("KeyboardButton");return Ne(),$e("div",Dm,[je("div",Mm,[(Ne(),$e(he,null,as("QWERTYUIOP",l=>ne(o,{text:l,id:"button-"+l},null,8,["text","id"])),64))]),je("div",Fm,[(Ne(),$e(he,null,as("ASDFGHJKL",l=>ne(o,{text:l,id:"button-"+l},null,8,["text","id"])),64))]),je("div",Lm,[ne(o,{text:"Enter",id:"button-enter","scale-w":2}),(Ne(),$e(he,null,as("ZXCVBNM",l=>ne(o,{text:l,id:"button-"+l},null,8,["text","id"])),64)),ne(o,{text:"Back",id:"button-back","scale-w":2})])])}var Wm=on(Om,[["render",Bm]]);const Hm=zn({name:"KeyboardButton",props:{text:{required:!0,type:String},show:{required:!0,type:Boolean}},data(){return{store:S}}});function Um(t,e,n,s,i,r){return Ne(),$e("div",{class:tn(["box-border bg-black p-5 text-white flex justify-center items-center w-36 h-16 text-center rounded-xl",[t.show?"opacity-1":"opacity-0 transition transition-opacity duration-500"]])},nr(t.text),3)}var $m=on(Hm,[["render",Um]]);const jm=zn({name:"App",components:{KirdleGrid:Rm,KirdleKeyboard:Wm,ErrorMessage:$m},mounted(){const t=hm(Tm,"/"),e=Math.ceil(Math.abs(new Date().getTime()-new Date("6/12/2022").getTime())/(1e3*60*60*24));fm(t,n=>{let s=n.val()[e];S.solution=s.split("")})},data(){return console.log(S.solution),{store:S}}}),zm={class:"flex flex-col justify-center items-center"},Vm=je("nav",{class:"flex justify-center bg-blue-300 w-full p-5 border-blue-400 border-b-2"},[je("h1",{class:"text-4xl font-bold tracking-widest"},"KIRDLE")],-1),Km={class:"absolute top-0 left-0 w-screen flex justify-center mt-28 z-10"};function qm(t,e,n,s,i,r){const o=In("KirdleGrid"),l=In("KirdleKeyboard"),a=In("ErrorMessage");return Ne(),$e(he,null,[je("div",zm,[Vm,ne(o,{class:"my-5"}),ne(l)]),je("div",Km,[je("div",null,[ne(a,{show:t.store.alerts.errors.notEnoughLetters,text:"Not enough letters"},null,8,["show"]),ne(a,{show:t.store.alerts.success,text:"Success!"},null,8,["show"]),ne(a,{show:t.store.alerts.failure,text:"Try again next time!"},null,8,["show"])])])],64)}var Gm=on(jm,[["render",qm]]);Ld(Gm).mount("#app");
