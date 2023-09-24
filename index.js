// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterAcot=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var e,n,a;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,a=parseInt(n,10),!isFinite(a)){if(!t(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===r.specifier||10!==e)&&(a=4294967295+a+1),a<0?(n=(-a).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=a.toString(e),a||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===u.call(r.specifier)?u.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,b=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,b,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,T=isNaN,O=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,u,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,T(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!T(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(u)?String(n.arg):_(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,o;for(t=[],o=0,n=B.exec(r);n;)(e=r.slice(o,B.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),o=B.lastIndex,n=B.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function k(r){return"string"==typeof r}function I(r){var e,t,n;if(!k(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var P,F=Object.prototype,N=F.toString,C=F.__defineGetter__,L=F.__defineSetter__,R=F.__lookupGetter__,$=F.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),u&&L&&L.call(r,e,t.set),r};var G=P;function M(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var U=/./;function X(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&z.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=W()?function(r){var e,t,n;if(null==r)return Y.call(r);t=r[H],e=q(r,H);try{r[H]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[H]=t:delete r[H],n}:function(r){return Y.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=W();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return X(r)||er(r)}function nr(){return new Function("return this;")()}M(tr,"isPrimitive",X),M(tr,"isObject",er);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="object"==typeof global?global:null,ar="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!X(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(or)return or;if(ir)return ir;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr,br=/^\s*function\s*([^(]*)/i;M(sr,"REGEXP",br),pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var yr=pr;function gr(r){return null!==r&&"object"==typeof r}var vr=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(gr);function dr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=br.exec(n.toString()))return e[1]}return gr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(gr,"isObjectLikeArray",vr);var hr="function"==typeof U||"object"==typeof lr||"function"==typeof fr?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e};function wr(r){return"function"===hr(r)}var mr=/./;function jr(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Er(r){return"boolean"==typeof r}var _r=Boolean.prototype.toString;var Tr=W();function Or(r){return"object"==typeof r&&(r instanceof K||(Tr?function(r){try{return _r.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Sr(r){return Er(r)||Or(r)}function xr(){return new Function("return this;")()}jr(Sr,"isPrimitive",Er),jr(Sr,"isObject",Or);var Br="object"==typeof self?self:null,Vr="object"==typeof window?window:null,Ar="object"==typeof global?global:null,kr="object"==typeof globalThis?globalThis:null;var Ir=function(r){if(arguments.length){if(!Er(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return xr()}if(kr)return kr;if(Br)return Br;if(Vr)return Vr;if(Ar)return Ar;throw new Error("unexpected error. Unable to resolve global object.")}(),Pr=Ir.document&&Ir.document.childNodes,Fr=Int8Array;function Nr(){return/^\s*function\s*([^(]*)/i}var Cr=/^\s*function\s*([^(]*)/i;function Lr(r){return null!==r&&"object"==typeof r}jr(Nr,"REGEXP",Cr);var Rr=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Lr);function $r(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Cr.exec(n.toString()))return e[1]}return Lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}jr(Lr,"isObjectLikeArray",Rr);var Gr="function"==typeof mr||"object"==typeof Fr||"function"==typeof Pr?function(r){return $r(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?$r(r).toLowerCase():e};function Mr(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&function(r){return"function"===Gr(r)}(r.next)}function Ur(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Xr(r){return"number"==typeof r}var Zr=Number,Wr=Zr.prototype.toString;var Yr=W();function zr(r){return"object"==typeof r&&(r instanceof Zr||(Yr?function(r){try{return Wr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function qr(r){return Xr(r)||zr(r)}Ur(qr,"isPrimitive",Xr),Ur(qr,"isObject",zr);var Dr="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;var Hr=/./;function Jr(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Kr(r){return"boolean"==typeof r}var Qr=Boolean.prototype.toString;var re=W();function ee(r){return"object"==typeof r&&(r instanceof K||(re?function(r){try{return Qr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function te(r){return Kr(r)||ee(r)}function ne(){return new Function("return this;")()}Jr(te,"isPrimitive",Kr),Jr(te,"isObject",ee);var oe="object"==typeof self?self:null,ie="object"==typeof window?window:null,ue="object"==typeof global?global:null,ae="object"==typeof globalThis?globalThis:null;var ce=function(r){if(arguments.length){if(!Kr(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ne()}if(ae)return ae;if(oe)return oe;if(ie)return ie;if(ue)return ue;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=ce.document&&ce.document.childNodes,le=Int8Array;function se(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;function be(r){return null!==r&&"object"==typeof r}Jr(se,"REGEXP",pe);var ye=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(be);function ge(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pe.exec(n.toString()))return e[1]}return be(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Jr(be,"isObjectLikeArray",ye);var ve="function"==typeof Hr||"object"==typeof le||"function"==typeof fe?function(r){return ge(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ge(r).toLowerCase():e};function de(r){return"function"===ve(r)}var he=Object,we=/./;function me(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function je(r){return"boolean"==typeof r}var Ee=Boolean.prototype.toString;var _e=W();function Te(r){return"object"==typeof r&&(r instanceof K||(_e?function(r){try{return Ee.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Oe(r){return je(r)||Te(r)}function Se(){return new Function("return this;")()}me(Oe,"isPrimitive",je),me(Oe,"isObject",Te);var xe="object"==typeof self?self:null,Be="object"==typeof window?window:null,Ve="object"==typeof global?global:null,Ae="object"==typeof globalThis?globalThis:null;var ke=function(r){if(arguments.length){if(!je(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Se()}if(Ae)return Ae;if(xe)return xe;if(Be)return Be;if(Ve)return Ve;throw new Error("unexpected error. Unable to resolve global object.")}(),Ie=ke.document&&ke.document.childNodes,Pe=Int8Array;function Fe(){return/^\s*function\s*([^(]*)/i}var Ne=/^\s*function\s*([^(]*)/i;function Ce(r){return null!==r&&"object"==typeof r}me(Fe,"REGEXP",Ne);var Le=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ce);function Re(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ne.exec(n.toString()))return e[1]}return Ce(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}me(Ce,"isObjectLikeArray",Le);var $e="function"==typeof we||"object"==typeof Pe||"function"==typeof Ie?function(r){return Re(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Re(r).toLowerCase():e};var Ge,Me,Ue=Object.getPrototypeOf;Me=Object.getPrototypeOf,Ge="function"===$e(Me)?Ue:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Xe=Ge;var Ze=Object.prototype;function We(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(e=function(r){return null==r?null:(r=he(r),Xe(r))}(r),!e||!q(r,"constructor")&&q(e,"constructor")&&de(e.constructor)&&"[object Function]"===J(e.constructor)&&q(e,"isPrototypeOf")&&de(e.isPrototypeOf)&&(e===Ze||function(r){var e;for(e in r)if(!q(r,e))return!1;return!0}(r)))}function Ye(r,e){return We(e)?(q(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",e))}function ze(r,e,t){var n,o,i,u;if(!Mr(r))throw new TypeError(I("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(e))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=Ye(n,t)))throw i;return M(o={},"next",a),M(o,"return",c),Dr&&wr(r[Dr])&&M(o,Dr,f),o;function a(){var t;return u?{done:!0}:(t=r.next()).done?(u=!0,t):{value:Xr(t.value)?e(t.value):n.invalid,done:!1}}function c(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return ze(r[Dr](),e,n)}}var qe=Number.POSITIVE_INFINITY,De=1.5707963267948966,He=Zr.NEGATIVE_INFINITY;var Je=6123233995736766e-32;function Ke(r){return function(r){var e,t,n,o;return function(r){return r!=r}(r)||0===r?r:r===qe?De:r===He?-De:(r<0&&(t=!0,r=-r),e=0,r>2.414213562373095?(n=De,e=1,r=-1/r):r<=.66?n=0:(n=.7853981633974483,e=2,r=(r-1)/(r+1)),o=(o=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=r*o+r,2===e?o+=.5*Je:1===e&&(o+=Je),n+=o,t?-n:n)}(1/r)}return function(r){return ze(r,Ke)}}));
//# sourceMappingURL=index.js.map
