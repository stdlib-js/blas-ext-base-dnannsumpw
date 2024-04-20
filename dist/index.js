"use strict";var l=function(f,v){return function(){return v||f((v={exports:{}}).exports,v),v.exports}};var K=l(function(N,S){
var F=require('@stdlib/math-base-assert-is-nan/dist'),G=require('@stdlib/math-base-special-floor/dist'),H=128;function I(f,v,i,m,n,q,p){var a,c,u,y,j,E,R,_,B,C,M,w,e,r,s;if(f<=0)return n;if(a=m,c=p,f===1||i===0)return F(v[a])||(n[c]+=v[a],n[c+q]+=1),n;if(f<8){for(w=0,e=0,s=0;s<f;s++)r=v[a],r===r&&(w+=r,e+=1),a+=i;return n[c]+=w,n[c+q]+=e,n}if(f<=H){for(u=0,y=0,j=0,E=0,R=0,_=0,B=0,C=0,e=0,M=f%8,s=0;s<f-M;s+=8)r=v[a],r===r&&(u+=r,e+=1),a+=i,r=v[a],r===r&&(y+=r,e+=1),a+=i,r=v[a],r===r&&(j+=r,e+=1),a+=i,r=v[a],r===r&&(E+=r,e+=1),a+=i,r=v[a],r===r&&(R+=r,e+=1),a+=i,r=v[a],r===r&&(_+=r,e+=1),a+=i,r=v[a],r===r&&(B+=r,e+=1),a+=i,r=v[a],r===r&&(C+=r,e+=1),a+=i;for(w=u+y+(j+E)+(R+_+(B+C)),s;s<f;s++)r=v[a],r===r&&(w+=r,e+=1),a+=i;return n[c]+=w,n[c+q]+=e,n}return e=G(f/2),e-=e%8,I(e,v,i,a,n,q,p),I(f-e,v,i,a+e*i,n,q,p),n}S.exports=I
});var b=l(function(O,Z){
var J=K();function P(f,v,i,m,n){var q,p;return i<0?q=(1-f)*i:q=0,n<0?p=-n:p=0,m[p]=0,m[p+n]=0,J(f,v,i,q,m,n,p),m}Z.exports=P
});var h=l(function(d,g){
var Q=K();function T(f,v,i,m,n,q,p){return n[p]=0,n[p+q]=0,Q(f,v,i,m,n,q,p),n}g.exports=T
});var A=l(function(X,z){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=b(),V=h();U(k,"ndarray",V);z.exports=k
});var W=require("path").join,Y=require('@stdlib/utils-try-require/dist'),$=require('@stdlib/assert-is-error/dist'),o=A(),L,D=Y(W(__dirname,"./native.js"));$(D)?L=o:L=D;module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
