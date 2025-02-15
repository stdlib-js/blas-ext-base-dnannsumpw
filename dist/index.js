"use strict";var w=function(q,n){return function(){return n||q((n={exports:{}}).exports,n),n.exports}};var S=w(function(d,M){
var F=require('@stdlib/math-base-assert-is-nan/dist'),G=require('@stdlib/math-base-special-floor/dist'),H=128;function C(q,n,e,f,v,c,p){var a,u,y,j,l,E,R,_,B,L,s,i,r,m;if(q<=0)return v;if(a=f,e===0)return F(n[a])||(v[p]+=n[a]*q,v[p+c]+=q),v;if(q<8){for(s=0,i=0,m=0;m<q;m++)r=n[a],r===r&&(s+=r,i+=1),a+=e;return v[p]+=s,v[p+c]+=i,v}if(q<=H){for(u=0,y=0,j=0,l=0,E=0,R=0,_=0,B=0,i=0,L=q%8,m=0;m<q-L;m+=8)r=n[a],r===r&&(u+=r,i+=1),a+=e,r=n[a],r===r&&(y+=r,i+=1),a+=e,r=n[a],r===r&&(j+=r,i+=1),a+=e,r=n[a],r===r&&(l+=r,i+=1),a+=e,r=n[a],r===r&&(E+=r,i+=1),a+=e,r=n[a],r===r&&(R+=r,i+=1),a+=e,r=n[a],r===r&&(_+=r,i+=1),a+=e,r=n[a],r===r&&(B+=r,i+=1),a+=e;for(s=u+y+(j+l)+(E+R+(_+B)),m;m<q;m++)r=n[a],r===r&&(s+=r,i+=1),a+=e;return v[p]+=s,v[p+c]+=i,v}return i=G(q/2),i-=i%8,C(i,n,e,a,v,c,p),C(q-i,n,e,a+i*e,v,c,p),v}M.exports=C
});var I=w(function(N,Z){
var J=S();function P(q,n,e,f,v,c,p){return v[p]=0,v[p+c]=0,J(q,n,e,f,v,c,p)}Z.exports=P
});var h=w(function(O,g){
var b=require('@stdlib/strided-base-stride2offset/dist'),Q=I();function T(q,n,e,f,v){return Q(q,n,e,b(q,e),f,v,b(2,v))}g.exports=T
});var A=w(function(X,z){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=h(),V=I();U(k,"ndarray",V);z.exports=k
});var W=require("path").join,Y=require('@stdlib/utils-try-require/dist'),$=require('@stdlib/assert-is-error/dist'),o=A(),K,D=Y(W(__dirname,"./native.js"));$(D)?K=o:K=D;module.exports=K;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
