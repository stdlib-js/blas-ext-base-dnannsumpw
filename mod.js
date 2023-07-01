// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r};var c=e;var f=Math.floor;function _(r,e,t,n,o,a,u){var i,l,c,p,b,y,d,v,s,j,g,m,w,h,O;if(r<=0)return o;if(i=n,l=u,1===r||0===t)return function(r){return r!=r}(e[i])||(o[l]+=e[i],o[l+a]+=1),o;if(r<8){for(m=0,w=0,O=0;O<r;O++)(h=e[i])==h&&(m+=h,w+=1),i+=t;return o[l]+=m,o[l+a]+=w,o}if(r<=128){for(c=0,p=0,b=0,y=0,d=0,v=0,s=0,j=0,w=0,g=r%8,O=0;O<r-g;O+=8)(h=e[i])==h&&(c+=h,w+=1),(h=e[i+=t])==h&&(p+=h,w+=1),(h=e[i+=t])==h&&(b+=h,w+=1),(h=e[i+=t])==h&&(y+=h,w+=1),(h=e[i+=t])==h&&(d+=h,w+=1),(h=e[i+=t])==h&&(v+=h,w+=1),(h=e[i+=t])==h&&(s+=h,w+=1),(h=e[i+=t])==h&&(j+=h,w+=1),i+=t;for(m=c+p+(b+y)+(d+v+(s+j));O<r;O++)(h=e[i])==h&&(m+=h,w+=1),i+=t;return o[l]+=m,o[l+a]+=w,o}return w=f(r/2),_(w-=w%8,e,t,i,o,a,u),_(r-w,e,t,i+w*t,o,a,u),o}function p(r,e,t,n,o){var a,u;return a=t<0?(1-r)*t:0,n[u=o<0?-o:0]=0,n[u+o]=0,_(r,e,t,a,n,o,u),n}function b(r,e,t,n,o,a,u){return o[u]=0,o[u+a]=0,_(r,e,t,n,o,a,u),o}c(p,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:b});export{p as default,b as ndarray};
//# sourceMappingURL=mod.js.map
