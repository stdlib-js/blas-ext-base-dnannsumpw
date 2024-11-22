"use strict";var w=function(q,n){return function(){return n||q((n={exports:{}}).exports,n),n.exports}};var S=w(function(d,M){
var F=require('@stdlib/math-base-assert-is-nan/dist'),G=require('@stdlib/math-base-special-floor/dist'),H=128;function C(q,n,e,f,v,m,p){var a,y,j,l,u,E,R,_,B,L,s,i,r,c;if(q<=0)return v;if(a=f,e===0)return F(n[a])||(v[p]+=n[a]*q,v[p+m]+=q),v;if(q<8){for(s=0,i=0,c=0;c<q;c++)r=n[a],r===r&&(s+=r,i+=1),a+=e;return v[p]+=s,v[p+m]+=i,v}if(q<=H){for(y=0,j=0,l=0,u=0,E=0,R=0,_=0,B=0,i=0,L=q%8,c=0;c<q-L;c+=8)r=n[a],r===r&&(y+=r,i+=1),a+=e,r=n[a],r===r&&(j+=r,i+=1),a+=e,r=n[a],r===r&&(l+=r,i+=1),a+=e,r=n[a],r===r&&(u+=r,i+=1),a+=e,r=n[a],r===r&&(E+=r,i+=1),a+=e,r=n[a],r===r&&(R+=r,i+=1),a+=e,r=n[a],r===r&&(_+=r,i+=1),a+=e,r=n[a],r===r&&(B+=r,i+=1),a+=e;for(s=y+j+(l+u)+(E+R+(_+B)),c;c<q;c++)r=n[a],r===r&&(s+=r,i+=1),a+=e;return v[p]+=s,v[p+m]+=i,v}return i=G(q/2),i-=i%8,C(i,n,e,a,v,m,p),C(q-i,n,e,a+i*e,v,m,p),v}M.exports=C
});var I=w(function(N,Z){
var J=S();function P(q,n,e,f,v,m,p){return v[p]=0,v[p+m]=0,J(q,n,e,f,v,m,p)}Z.exports=P
});var h=w(function(O,g){
var b=require('@stdlib/strided-base-stride2offset/dist'),Q=I();function T(q,n,e,f,v){var m,p;return m=b(q,e),p=b(2,v),f[p]=0,f[p+v]=0,Q(q,n,e,m,f,v,p)}g.exports=T
});var A=w(function(X,z){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=h(),V=I();U(k,"ndarray",V);z.exports=k
});var W=require("path").join,Y=require('@stdlib/utils-try-require/dist'),$=require('@stdlib/assert-is-error/dist'),x=A(),K,D=Y(W(__dirname,"./native.js"));$(D)?K=x:K=D;module.exports=K;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
