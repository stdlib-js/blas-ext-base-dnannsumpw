// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,f=function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},_=e()?c:f;var p=function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})};var b=function(r){return r!=r},y=Math.floor;function v(r,e,t,n,o,a,u){var i,l,c,f,_,p,d,s,j,g,m,w,h,O,P;if(r<=0)return o;if(i=n,l=u,1===r||0===t)return b(e[i])||(o[l]+=e[i],o[l+a]+=1),o;if(r<8){for(w=0,h=0,P=0;P<r;P++)(O=e[i])==O&&(w+=O,h+=1),i+=t;return o[l]+=w,o[l+a]+=h,o}if(r<=128){for(c=0,f=0,_=0,p=0,d=0,s=0,j=0,g=0,h=0,m=r%8,P=0;P<r-m;P+=8)(O=e[i])==O&&(c+=O,h+=1),(O=e[i+=t])==O&&(f+=O,h+=1),(O=e[i+=t])==O&&(_+=O,h+=1),(O=e[i+=t])==O&&(p+=O,h+=1),(O=e[i+=t])==O&&(d+=O,h+=1),(O=e[i+=t])==O&&(s+=O,h+=1),(O=e[i+=t])==O&&(j+=O,h+=1),(O=e[i+=t])==O&&(g+=O,h+=1),i+=t;for(w=c+f+(_+p)+(d+s+(j+g));P<r;P++)(O=e[i])==O&&(w+=O,h+=1),i+=t;return o[l]+=w,o[l+a]+=h,o}return h=y(r/2),v(h-=h%8,e,t,i,o,a,u),v(r-h,e,t,i+h*t,o,a,u),o}function d(r,e,t,n,o){var a,u;return a=t<0?(1-r)*t:0,n[u=o<0?-o:0]=0,n[u+o]=0,v(r,e,t,a,n,o,u),n}function s(r,e,t,n,o,a,u){return o[u]=0,o[u+a]=0,v(r,e,t,n,o,a,u),o}p(d,"ndarray",s);export{d as default,s as ndarray};
//# sourceMappingURL=mod.js.map
