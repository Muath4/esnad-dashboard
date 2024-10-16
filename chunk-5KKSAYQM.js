import{h as D,j}from"./chunk-YMYRQ6W5.js";import{a as d,b as k,d as G,g as ae,h as z}from"./chunk-FU75TI2F.js";var te=G((nt,ee)=>{"use strict";var y=1e3,v=y*60,E=v*60,S=E*24,we=S*7,Fe=S*365.25;ee.exports=function(e,o){o=o||{};var t=typeof e;if(t==="string"&&e.length>0)return Ie(e);if(t==="number"&&isFinite(e))return o.long?be(e):Se(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function Ie(e){if(e=String(e),!(e.length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(o){var t=parseFloat(o[1]),n=(o[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return t*Fe;case"weeks":case"week":case"w":return t*we;case"days":case"day":case"d":return t*S;case"hours":case"hour":case"hrs":case"hr":case"h":return t*E;case"minutes":case"minute":case"mins":case"min":case"m":return t*v;case"seconds":case"second":case"secs":case"sec":case"s":return t*y;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return t;default:return}}}}function Se(e){var o=Math.abs(e);return o>=S?Math.round(e/S)+"d":o>=E?Math.round(e/E)+"h":o>=v?Math.round(e/v)+"m":o>=y?Math.round(e/y)+"s":e+"ms"}function be(e){var o=Math.abs(e);return o>=S?M(e,o,S,"day"):o>=E?M(e,o,E,"hour"):o>=v?M(e,o,v,"minute"):o>=y?M(e,o,y,"second"):e+" ms"}function M(e,o,t,n){var r=o>=t*1.5;return Math.round(e/t)+" "+n+(r?"s":"")}});var re=G((it,oe)=>{"use strict";function ye(e){t.debug=t,t.default=t,t.coerce=h,t.disable=s,t.enable=r,t.enabled=a,t.humanize=te(),t.destroy=C,Object.keys(e).forEach(i=>{t[i]=e[i]}),t.names=[],t.skips=[],t.formatters={};function o(i){let c=0;for(let u=0;u<i.length;u++)c=(c<<5)-c+i.charCodeAt(u),c|=0;return t.colors[Math.abs(c)%t.colors.length]}t.selectColor=o;function t(i){let c,u=null,F,T;function p(...l){if(!p.enabled)return;let w=p,I=Number(new Date),x=I-(c||I);w.diff=x,w.prev=c,w.curr=I,c=I,l[0]=t.coerce(l[0]),typeof l[0]!="string"&&l.unshift("%O");let m=0;l[0]=l[0].replace(/%([a-zA-Z%])/g,(V,se)=>{if(V==="%%")return"%";m++;let _=t.formatters[se];if(typeof _=="function"){let ce=l[m];V=_.call(w,ce),l.splice(m,1),m--}return V}),t.formatArgs.call(w,l),(w.log||t.log).apply(w,l)}return p.namespace=i,p.useColors=t.useColors(),p.color=t.selectColor(i),p.extend=n,p.destroy=t.destroy,Object.defineProperty(p,"enabled",{enumerable:!0,configurable:!1,get:()=>u!==null?u:(F!==t.namespaces&&(F=t.namespaces,T=t.enabled(i)),T),set:l=>{u=l}}),typeof t.init=="function"&&t.init(p),p}function n(i,c){let u=t(this.namespace+(typeof c>"u"?":":c)+i);return u.log=this.log,u}function r(i){t.save(i),t.namespaces=i,t.names=[],t.skips=[];let c,u=(typeof i=="string"?i:"").split(/[\s,]+/),F=u.length;for(c=0;c<F;c++)u[c]&&(i=u[c].replace(/\*/g,".*?"),i[0]==="-"?t.skips.push(new RegExp("^"+i.slice(1)+"$")):t.names.push(new RegExp("^"+i+"$")))}function s(){let i=[...t.names.map(f),...t.skips.map(f).map(c=>"-"+c)].join(",");return t.enable(""),i}function a(i){if(i[i.length-1]==="*")return!0;let c,u;for(c=0,u=t.skips.length;c<u;c++)if(t.skips[c].test(i))return!1;for(c=0,u=t.names.length;c<u;c++)if(t.names[c].test(i))return!0;return!1}function f(i){return i.toString().substring(2,i.toString().length-2).replace(/\.\*\?$/,"*")}function h(i){return i instanceof Error?i.stack||i.message:i}function C(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return t.enable(t.load()),t}oe.exports=ye});var ne=G((g,P)=>{"use strict";g.formatArgs=Ee;g.save=Te;g.load=je;g.useColors=ve;g.storage=ke();g.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})();g.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function ve(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let e;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(e=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(e[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function Ee(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+P.exports.humanize(this.diff),!this.useColors)return;let o="color: "+this.color;e.splice(1,0,o,"color: inherit");let t=0,n=0;e[0].replace(/%[a-zA-Z%]/g,r=>{r!=="%%"&&(t++,r==="%c"&&(n=t))}),e.splice(n,0,o)}g.log=console.debug||console.log||(()=>{});function Te(e){try{e?g.storage.setItem("debug",e):g.storage.removeItem("debug")}catch{}}function je(){let e;try{e=g.storage.getItem("debug")}catch{}return!e&&typeof process<"u"&&"env"in process&&(e=process.env.DEBUG),e}function ke(){try{return localStorage}catch{}}P.exports=re()(g);var{formatters:De}=P.exports;De.j=function(e){try{return JSON.stringify(e)}catch(o){return"[UnexpectedJSONParseError]: "+o.message}}});var fe=Object.freeze({left:0,top:0,width:16,height:16}),b=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),$=Object.freeze(d(d({},fe),b)),J=Object.freeze(k(d({},$),{body:"",hidden:!1}));var le=Object.freeze({width:null,height:null}),W=Object.freeze(d(d({},le),b));var O=/^[a-z0-9]+(-[a-z0-9]+)*$/,L=(e,o,t,n="")=>{let r=e.split(":");if(e.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;n=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){let f=r.pop(),h=r.pop(),C={provider:r.length>0?r[0]:n,prefix:h,name:f};return o&&!A(C)?null:C}let s=r[0],a=s.split("-");if(a.length>1){let f={provider:n,prefix:a.shift(),name:a.join("-")};return o&&!A(f)?null:f}if(t&&n===""){let f={provider:n,prefix:"",name:s};return o&&!A(f,t)?null:f}return null},A=(e,o)=>e?!!((e.provider===""||e.provider.match(O))&&(o&&e.prefix===""||e.prefix.match(O))&&e.name.match(O)):!1;function Z(e,o){let t={};!e.hFlip!=!o.hFlip&&(t.hFlip=!0),!e.vFlip!=!o.vFlip&&(t.vFlip=!0);let n=((e.rotate||0)+(o.rotate||0))%4;return n&&(t.rotate=n),t}function U(e,o){let t=Z(e,o);for(let n in J)n in b?n in e&&!(n in t)&&(t[n]=b[n]):n in o?t[n]=o[n]:n in e&&(t[n]=e[n]);return t}function Q(e,o){let t=e.icons,n=e.aliases||Object.create(null),r=Object.create(null);function s(a){if(t[a])return r[a]=[];if(!(a in r)){r[a]=null;let f=n[a]&&n[a].parent,h=f&&s(f);h&&(r[a]=[f].concat(h))}return r[a]}return(o||Object.keys(t).concat(Object.keys(n))).forEach(s),r}function X(e,o,t){let n=e.icons,r=e.aliases||Object.create(null),s={};function a(f){s=U(n[f]||r[f],s)}return a(o),t.forEach(a),U(e,s)}function q(e,o){if(e.icons[o])return X(e,o,[]);let t=Q(e,[o])[o];return t?X(e,o,t):null}var ue=/(-?[0-9.]*[0-9]+[0-9.]*)/g,pe=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function N(e,o,t){if(o===1)return e;if(t=t||100,typeof e=="number")return Math.ceil(e*o*t)/t;if(typeof e!="string")return e;let n=e.split(ue);if(n===null||!n.length)return e;let r=[],s=n.shift(),a=pe.test(s);for(;;){if(a){let f=parseFloat(s);isNaN(f)?r.push(s):r.push(Math.ceil(f*o*t)/t)}else r.push(s);if(s=n.shift(),s===void 0)return r.join("");a=!a}}function me(e,o="defs"){let t="",n=e.indexOf("<"+o);for(;n>=0;){let r=e.indexOf(">",n),s=e.indexOf("</"+o);if(r===-1||s===-1)break;let a=e.indexOf(">",s);if(a===-1)break;t+=e.slice(r+1,s).trim(),e=e.slice(0,n).trim()+e.slice(a+1)}return{defs:t,content:e}}function de(e,o){return e?"<defs>"+e+"</defs>"+o:o}function Y(e,o,t){let n=me(e);return de(n.defs,o+n.content+t)}var ge=e=>e==="unset"||e==="undefined"||e==="none";function R(e,o){let t=d(d({},$),e),n=d(d({},W),o),r={left:t.left,top:t.top,width:t.width,height:t.height},s=t.body;[t,n].forEach(p=>{let l=[],w=p.hFlip,I=p.vFlip,x=p.rotate;w?I?x+=2:(l.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),l.push("scale(-1 1)"),r.top=r.left=0):I&&(l.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),l.push("scale(1 -1)"),r.top=r.left=0);let m;switch(x<0&&(x-=Math.floor(x/4)*4),x=x%4,x){case 1:m=r.height/2+r.top,l.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:l.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:m=r.width/2+r.left,l.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}x%2===1&&(r.left!==r.top&&(m=r.left,r.left=r.top,r.top=m),r.width!==r.height&&(m=r.width,r.width=r.height,r.height=m)),l.length&&(s=Y(s,'<g transform="'+l.join(" ")+'">',"</g>"))});let a=n.width,f=n.height,h=r.width,C=r.height,i,c;a===null?(c=f===null?"1em":f==="auto"?C:f,i=N(c,h/C)):(i=a==="auto"?h:a,c=f===null?N(i,C/h):f==="auto"?C:f);let u={},F=(p,l)=>{ge(l)||(u[p]=l.toString())};F("width",i),F("height",c);let T=[r.left,r.top,h,C];return u.viewBox=T.join(" "),{attributes:u,viewBox:T,body:s}}var he=/\sid="(\S+)"/g,Ce="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16),xe=0;function H(e,o=Ce){let t=[],n;for(;n=he.exec(e);)t.push(n[1]);if(!t.length)return e;let r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return t.forEach(s=>{let a=typeof o=="function"?o(s):o+(xe++).toString(),f=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+f+')([")]|\\.[a-z])',"g"),"$1"+a+r+"$3")}),e=e.replace(new RegExp(r,"g"),""),e}function B(e,o){let t=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(let n in o)t+=" "+n+'="'+o[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+e+"</svg>"}var st=ae(ne(),1);var Oe={body:'<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',height:80,width:80},K=new Map,ie=new Map,gt=D(e=>{for(let o of e){if(!o.name)throw new Error('Invalid icon loader. Must have a "name" property with non-empty string value.');if(j.debug("Registering icon pack:",o.name),"loader"in o)ie.set(o.name,o.loader);else if("icons"in o)K.set(o.name,o.icons);else throw j.error("Invalid icon loader:",o),new Error('Invalid icon loader. Must have either "icons" or "loader" property.')}},"registerIconPacks"),Ae=D((e,o)=>z(void 0,null,function*(){let t=L(e,!0,o!==void 0);if(!t)throw new Error(`Invalid icon name: ${e}`);let n=t.prefix||o;if(!n)throw new Error(`Icon name must contain a prefix: ${e}`);let r=K.get(n);if(!r){let a=ie.get(n);if(!a)throw new Error(`Icon set not found: ${t.prefix}`);try{let f=yield a();r=k(d({},f),{prefix:n}),K.set(n,r)}catch(f){throw j.error(f),new Error(`Failed to load icon set: ${t.prefix}`)}}let s=q(r,t.name);if(!s)throw new Error(`Icon not found: ${e}`);return s}),"getRegisteredIconData"),ht=D((e,o)=>z(void 0,null,function*(){let t;try{t=yield Ae(e,o?.fallbackPrefix)}catch(s){j.error(s),t=Oe}let n=R(t,o);return B(H(n.body),n.attributes)}),"getIconSVG");export{Oe as a,gt as b,ht as c};
