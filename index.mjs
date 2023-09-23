// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.0-esm/index.mjs";function n(r,s,i,a,o,d,f){var m,u,l,p,j,h,c,v,b,x,y,g,k,q,w;if(r<=0)return o;if(m=a,u=f,1===r||0===i)return e(s[m])||(o[u]+=s[m],o[u+d]+=1),o;if(r<8){for(g=0,k=0,w=0;w<r;w++)(q=s[m])==q&&(g+=q,k+=1),m+=i;return o[u]+=g,o[u+d]+=k,o}if(r<=128){for(l=0,p=0,j=0,h=0,c=0,v=0,b=0,x=0,k=0,y=r%8,w=0;w<r-y;w+=8)(q=s[m])==q&&(l+=q,k+=1),(q=s[m+=i])==q&&(p+=q,k+=1),(q=s[m+=i])==q&&(j+=q,k+=1),(q=s[m+=i])==q&&(h+=q,k+=1),(q=s[m+=i])==q&&(c+=q,k+=1),(q=s[m+=i])==q&&(v+=q,k+=1),(q=s[m+=i])==q&&(b+=q,k+=1),(q=s[m+=i])==q&&(x+=q,k+=1),m+=i;for(g=l+p+(j+h)+(c+v+(b+x));w<r;w++)(q=s[m])==q&&(g+=q,k+=1),m+=i;return o[u]+=g,o[u+d]+=k,o}return k=t(r/2),n(k-=k%8,s,i,m,o,d,f),n(r-k,s,i,m+k*i,o,d,f),o}function s(r,e,t,s,i){var a,o;return a=t<0?(1-r)*t:0,s[o=i<0?-i:0]=0,s[o+i]=0,n(r,e,t,a,s,i,o),s}function i(r,e,t,s,i,a,o){return i[o]=0,i[o+a]=0,n(r,e,t,s,i,a,o),i}r(s,"ndarray",i);export{s as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
