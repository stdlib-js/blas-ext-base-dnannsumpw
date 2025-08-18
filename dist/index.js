"use strict";var w=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var S=w(function(N,M){
var q=require('@stdlib/math-base-assert-is-nan/dist'),H=require('@stdlib/math-base-special-floor/dist'),J=128;function C(n,e,v,c,f,p,y){var a,l,u,j,b,k,E,R,_,B,L,m,i,r,s;if(n<=0)return f;if(l=y,a=c,v===0)return q(e[a])||(f[l]+=e[a]*n,f[l+p]+=n),f;for(s=0;s<n&&(r=e[a],q(r)!==!1);s++)a+=v;if(s===n)return f;if(i=1,m=r,a+=v,s+=1,m===0)for(;s<n;s++){if(r=e[a],q(r)===!1){if(r!==0)break;m+=r,i+=1}a+=v}if(s===n)return f[l]+=m,f[l+p]+=i,f;if(n-s<8){for(;s<n;s++)r=e[a],q(r)===!1&&(m+=r,i+=1),a+=v;return f[l]+=m,f[l+p]+=i,f}if(n-s<=J){for(u=-0,j=-0,b=-0,k=-0,E=-0,R=-0,_=-0,B=-0,L=(n-s)%8;s<n-L;s+=8)r=e[a],q(r)===!1&&(u+=r,i+=1),a+=v,r=e[a],q(r)===!1&&(j+=r,i+=1),a+=v,r=e[a],q(r)===!1&&(b+=r,i+=1),a+=v,r=e[a],q(r)===!1&&(k+=r,i+=1),a+=v,r=e[a],q(r)===!1&&(E+=r,i+=1),a+=v,r=e[a],q(r)===!1&&(R+=r,i+=1),a+=v,r=e[a],q(r)===!1&&(_+=r,i+=1),a+=v,r=e[a],q(r)===!1&&(B+=r,i+=1),a+=v;for(m+=u+j+(b+k)+(E+R+(_+B));s<n;s++)r=e[a],q(r)===!1&&(m+=r,i+=1),a+=v;return f[l]+=m,f[l+p]+=i,f}return f[l]+=m,f[l+p]+=i,i=H((n-s)/2),i-=i%8,C(i,e,v,a,f,p,l),C(n-s-i,e,v,a+i*v,f,p,l),f}M.exports=C
});var I=w(function(d,Z){
var P=S();function Q(n,e,v,c,f,p,y){var a=y;return f[a]=-0,f[a+p]=0,P(n,e,v,c,f,p,a),f[a+p]===0&&(f[a]=0),f}Z.exports=Q
});var z=w(function(X,h){
var g=require('@stdlib/strided-base-stride2offset/dist'),T=I();function U(n,e,v,c,f){return T(n,e,v,g(n,v),c,f,g(2,f))}h.exports=U
});var F=w(function(t,D){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=z(),W=I();V(A,"ndarray",W);D.exports=A
});var Y=require("path").join,$=require('@stdlib/utils-try-require/dist'),o=require('@stdlib/assert-is-error/dist'),O=F(),K,G=$(Y(__dirname,"./native.js"));o(G)?K=O:K=G;module.exports=K;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
