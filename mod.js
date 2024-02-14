// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(r){return"string"==typeof r}var u=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":u(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,b,"e"),i=f.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),r.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===l.call(r.specifier)?l.call(i):p.call(i)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var i=e-r.length;return i<0?r:r=t?r+E(i):E(i)+r}var k=String.fromCharCode,S=isNaN,V=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,i,a,o,u,p,l,f;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",p=1,l=0;l<r.length;l++)if(s(i=r[l]))u+=i;else{if(e=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),u+=i.arg||"",p+=1}return u}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,t,i,n;for(t=[],n=0,i=A.exec(r);i;)(e=r.slice(n,A.lastIndex-i[0].length)).length&&t.push(e),t.push(I(i)),n=A.lastIndex,i=A.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function F(r){return"string"==typeof r}function C(r){var e,t;if(!F(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return T.apply(null,e)}var R,O=Object.prototype,_=O.toString,L=O.__defineGetter__,Z=O.__defineSetter__,N=O.__lookupGetter__,W=O.__lookupSetter__;R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===_.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===_.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(N.call(r,e)||W.call(r,e)?(i=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(r,e,t.get),o&&Z&&Z.call(r,e,t.set),r};var P=R;function B(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=/./;function X(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(r){return"boolean"==typeof r}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var z=M();function Y(){return z&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&D.call(r,e)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=Y()?function(r){var e,t,i;if(null==r)return q.call(r);t=r[K],e=H(r,K);try{r[K]=void 0}catch(e){return q.call(r)}return i=q.call(r),e?r[K]=t:delete r[K],i}:function(r){return q.call(r)},rr=Boolean,er=Boolean.prototype.toString;var tr=Y();function ir(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function nr(r){return U(r)||ir(r)}function ar(r){return"number"==typeof r}function or(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function cr(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+or(n):or(n)+r,i&&(r="-"+r)),r}X(nr,"isPrimitive",U),X(nr,"isObject",ir);var sr=String.prototype.toLowerCase,ur=String.prototype.toUpperCase;function pr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!ar(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=cr(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=cr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===ur.call(r.specifier)?ur.call(t):sr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function lr(r){return"string"==typeof r}var fr=Math.abs,gr=String.prototype.toLowerCase,dr=String.prototype.toUpperCase,hr=String.prototype.replace,wr=/e\+(\d)$/,vr=/e-(\d)$/,br=/^(\d+)$/,yr=/^(\d+)e/,mr=/\.0$/,Er=/\.0*e/,xr=/(\..*[^0])0*e/;function kr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!ar(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":fr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=hr.call(t,xr,"$1e"),t=hr.call(t,Er,"e"),t=hr.call(t,mr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=hr.call(t,wr,"e+0$1"),t=hr.call(t,vr,"e-0$1"),r.alternate&&(t=hr.call(t,br,"$1."),t=hr.call(t,yr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===dr.call(r.specifier)?dr.call(t):gr.call(t)}function Sr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Vr(r,e,t){var i=e-r.length;return i<0?r:r=t?r+Sr(i):Sr(i)+r}var jr=String.fromCharCode,Tr=isNaN,Ar=Array.isArray;function Ir(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $r(r){var e,t,i,n,a,o,c,s,u;if(!Ar(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(lr(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=Ir(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Tr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Tr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=pr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Tr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Tr(a)?String(i.arg):jr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=kr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=cr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Vr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Fr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Cr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Rr(r){var e,t,i,n;for(t=[],n=0,i=Fr.exec(r);i;)(e=r.slice(n,Fr.lastIndex-i[0].length)).length&&t.push(e),t.push(Cr(i)),n=Fr.lastIndex,i=Fr.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Or(r){return"string"==typeof r}function _r(r){var e,t;if(!Or(r))throw new TypeError(_r("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Rr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return $r.apply(null,e)}function Lr(){return new Function("return this;")()}var Zr="object"==typeof self?self:null,Nr="object"==typeof window?window:null,Wr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Pr="object"==typeof Wr?Wr:null,Br="object"==typeof globalThis?globalThis:null;function Gr(r){if(arguments.length){if(!U(r))throw new TypeError(_r("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Lr()}if(Br)return Br;if(Zr)return Zr;if(Nr)return Nr;if(Pr)return Pr;throw new Error("unexpected error. Unable to resolve global object.")}var Xr=Gr(),Ur=Xr.document&&Xr.document.childNodes,Mr=Int8Array;var zr=M();function Yr(){return zr&&"symbol"==typeof Symbol.toStringTag}var qr=Object.prototype.toString;var Dr="function"==typeof Symbol?Symbol:void 0,Hr="function"==typeof Dr?Dr.toStringTag:"";var Jr=Yr()?function(r){var e,t,i;if(null==r)return qr.call(r);t=r[Hr],e=H(r,Hr);try{r[Hr]=void 0}catch(e){return qr.call(r)}return i=qr.call(r),e?r[Hr]=t:delete r[Hr],i}:function(r){return qr.call(r)};function Kr(){return/^\s*function\s*([^(]*)/i}var Qr,re=/^\s*function\s*([^(]*)/i;B(Kr,"REGEXP",re),Qr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Jr(r)};var ee=Qr;function te(r){return"number"==typeof r}function ie(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ne(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+ie(n):ie(n)+r,i&&(r="-"+r)),r}var ae=String.prototype.toLowerCase,oe=String.prototype.toUpperCase;function ce(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!te(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=ne(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=ne(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===oe.call(r.specifier)?oe.call(t):ae.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function se(r){return"string"==typeof r}var ue=Math.abs,pe=String.prototype.toLowerCase,le=String.prototype.toUpperCase,fe=String.prototype.replace,ge=/e\+(\d)$/,de=/e-(\d)$/,he=/^(\d+)$/,we=/^(\d+)e/,ve=/\.0$/,be=/\.0*e/,ye=/(\..*[^0])0*e/;function me(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!te(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":ue(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=fe.call(t,ye,"$1e"),t=fe.call(t,be,"e"),t=fe.call(t,ve,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=fe.call(t,ge,"e+0$1"),t=fe.call(t,de,"e-0$1"),r.alternate&&(t=fe.call(t,he,"$1."),t=fe.call(t,we,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===le.call(r.specifier)?le.call(t):pe.call(t)}function Ee(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function xe(r,e,t){var i=e-r.length;return i<0?r:r=t?r+Ee(i):Ee(i)+r}var ke=String.fromCharCode,Se=isNaN,Ve=Array.isArray;function je(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Te(r){var e,t,i,n,a,o,c,s,u;if(!Ve(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(se(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=je(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Se(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Se(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=ce(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Se(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Se(a)?String(i.arg):ke(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=me(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ne(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=xe(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ie(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $e(r){var e,t,i,n;for(t=[],n=0,i=Ae.exec(r);i;)(e=r.slice(n,Ae.lastIndex-i[0].length)).length&&t.push(e),t.push(Ie(i)),n=Ae.lastIndex,i=Ae.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Fe(r){return"string"==typeof r}function Ce(r){var e,t;if(!Fe(r))throw new TypeError(Ce("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$e(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Te.apply(null,e)}function Re(r){return null!==r&&"object"==typeof r}var Oe=function(r){if("function"!=typeof r)throw new TypeError(Ce("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!ee(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(Re);function _e(r){var e,t,i,n;if(("Object"===(t=Jr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=re.exec(i.toString()))return e[1]}return Re(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}B(Re,"isObjectLikeArray",Oe);var Le="function"==typeof G||"object"==typeof Mr||"function"==typeof Ur?function(r){return _e(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?_e(r).toLowerCase():e};function Ze(r){return"function"===Le(r)}var Ne=/./,We=Gr(),Pe=We.document&&We.document.childNodes,Be=Int8Array;var Ge=M();var Xe=Object.prototype.toString;var Ue="function"==typeof Symbol?Symbol:void 0,Me="function"==typeof Ue?Ue.toStringTag:"";var ze=Ge&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return Xe.call(r);t=r[Me],e=H(r,Me);try{r[Me]=void 0}catch(e){return Xe.call(r)}return i=Xe.call(r),e?r[Me]=t:delete r[Me],i}:function(r){return Xe.call(r)};function Ye(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function qe(){return/^\s*function\s*([^(]*)/i}var De,He=/^\s*function\s*([^(]*)/i;Ye(qe,"REGEXP",He),De=Array.isArray?Array.isArray:function(r){return"[object Array]"===ze(r)};var Je=De;function Ke(r){return"number"==typeof r}function Qe(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function rt(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+Qe(n):Qe(n)+r,i&&(r="-"+r)),r}var et=String.prototype.toLowerCase,tt=String.prototype.toUpperCase;function it(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Ke(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=rt(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=rt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===tt.call(r.specifier)?tt.call(t):et.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function nt(r){return"string"==typeof r}var at=Math.abs,ot=String.prototype.toLowerCase,ct=String.prototype.toUpperCase,st=String.prototype.replace,ut=/e\+(\d)$/,pt=/e-(\d)$/,lt=/^(\d+)$/,ft=/^(\d+)e/,gt=/\.0$/,dt=/\.0*e/,ht=/(\..*[^0])0*e/;function wt(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Ke(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":at(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=st.call(t,ht,"$1e"),t=st.call(t,dt,"e"),t=st.call(t,gt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=st.call(t,ut,"e+0$1"),t=st.call(t,pt,"e-0$1"),r.alternate&&(t=st.call(t,lt,"$1."),t=st.call(t,ft,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ct.call(r.specifier)?ct.call(t):ot.call(t)}function vt(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function bt(r,e,t){var i=e-r.length;return i<0?r:r=t?r+vt(i):vt(i)+r}var yt=String.fromCharCode,mt=isNaN,Et=Array.isArray;function xt(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function kt(r){var e,t,i,n,a,o,c,s,u;if(!Et(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(nt(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=xt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,mt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,mt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=it(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!mt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=mt(a)?String(i.arg):yt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=wt(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=rt(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=bt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var St=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Vt(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function jt(r){var e,t,i,n;for(t=[],n=0,i=St.exec(r);i;)(e=r.slice(n,St.lastIndex-i[0].length)).length&&t.push(e),t.push(Vt(i)),n=St.lastIndex,i=St.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Tt(r){return"string"==typeof r}function At(r){var e,t;if(!Tt(r))throw new TypeError(At("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[jt(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return kt.apply(null,e)}function It(r){return null!==r&&"object"==typeof r}var $t=function(r){if("function"!=typeof r)throw new TypeError(At("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!Je(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(It);function Ft(r){var e,t,i,n;if(("Object"===(t=ze(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=He.exec(i.toString()))return e[1]}return It(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}Ye(It,"isObjectLikeArray",$t);var Ct="function"==typeof Ne||"object"==typeof Be||"function"==typeof Pe?function(r){return Ft(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ft(r).toLowerCase():e};function Rt(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&function(r){return"function"===Ct(r)}(r.next)}function Ot(r){return"number"==typeof r}var _t=Number,Lt=_t.prototype.toString;var Zt=Yr();function Nt(r){return"object"==typeof r&&(r instanceof _t||(Zt?function(r){try{return Lt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Jr(r)))}function Wt(r){return Ot(r)||Nt(r)}B(Wt,"isPrimitive",Ot),B(Wt,"isObject",Nt);var Pt="function"==typeof Dr&&"symbol"==typeof Dr("foo")&&H(Dr,"iterator")&&"symbol"==typeof Dr.iterator?Symbol.iterator:null,Bt=M();var Gt=Object.prototype.toString;var Xt="function"==typeof Symbol?Symbol:void 0,Ut="function"==typeof Xt?Xt.toStringTag:"";var Mt,zt=Bt&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return Gt.call(r);t=r[Ut],e=H(r,Ut);try{r[Ut]=void 0}catch(e){return Gt.call(r)}return i=Gt.call(r),e?r[Ut]=t:delete r[Ut],i}:function(r){return Gt.call(r)};Mt=Array.isArray?Array.isArray:function(r){return"[object Array]"===zt(r)};var Yt=Mt;var qt=/./,Dt=Gr(),Ht=Dt.document&&Dt.document.childNodes,Jt=Int8Array;function Kt(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Qt(){return/^\s*function\s*([^(]*)/i}var ri=/^\s*function\s*([^(]*)/i;function ei(r){return"number"==typeof r}function ti(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ii(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+ti(n):ti(n)+r,i&&(r="-"+r)),r}Kt(Qt,"REGEXP",ri);var ni=String.prototype.toLowerCase,ai=String.prototype.toUpperCase;function oi(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!ei(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=ii(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=ii(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===ai.call(r.specifier)?ai.call(t):ni.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ci(r){return"string"==typeof r}var si=Math.abs,ui=String.prototype.toLowerCase,pi=String.prototype.toUpperCase,li=String.prototype.replace,fi=/e\+(\d)$/,gi=/e-(\d)$/,di=/^(\d+)$/,hi=/^(\d+)e/,wi=/\.0$/,vi=/\.0*e/,bi=/(\..*[^0])0*e/;function yi(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!ei(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":si(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=li.call(t,bi,"$1e"),t=li.call(t,vi,"e"),t=li.call(t,wi,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=li.call(t,fi,"e+0$1"),t=li.call(t,gi,"e-0$1"),r.alternate&&(t=li.call(t,di,"$1."),t=li.call(t,hi,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===pi.call(r.specifier)?pi.call(t):ui.call(t)}function mi(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Ei(r,e,t){var i=e-r.length;return i<0?r:r=t?r+mi(i):mi(i)+r}var xi=String.fromCharCode,ki=isNaN,Si=Array.isArray;function Vi(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ji(r){var e,t,i,n,a,o,c,s,u;if(!Si(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(ci(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=Vi(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,ki(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,ki(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=oi(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!ki(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ki(a)?String(i.arg):xi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=yi(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ii(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ei(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ti=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ai(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ii(r){var e,t,i,n;for(t=[],n=0,i=Ti.exec(r);i;)(e=r.slice(n,Ti.lastIndex-i[0].length)).length&&t.push(e),t.push(Ai(i)),n=Ti.lastIndex,i=Ti.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function $i(r){return"string"==typeof r}function Fi(r){var e,t;if(!$i(r))throw new TypeError(Fi("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Ii(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return ji.apply(null,e)}function Ci(r){return null!==r&&"object"==typeof r}var Ri=function(r){if("function"!=typeof r)throw new TypeError(Fi("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!Yt(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(Ci);function Oi(r){var e,t,i,n;if(("Object"===(t=zt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=ri.exec(i.toString()))return e[1]}return Ci(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}Kt(Ci,"isObjectLikeArray",Ri);var _i="function"==typeof qt||"object"==typeof Jt||"function"==typeof Ht?function(r){return Oi(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Oi(r).toLowerCase():e};function Li(r){return"function"===_i(r)}var Zi=Object,Ni=/./,Wi=Gr(),Pi=Wi.document&&Wi.document.childNodes,Bi=Int8Array;var Gi=M();var Xi=Object.prototype.toString;var Ui="function"==typeof Symbol?Symbol:void 0,Mi="function"==typeof Ui?Ui.toStringTag:"";var zi=Gi&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return Xi.call(r);t=r[Mi],e=H(r,Mi);try{r[Mi]=void 0}catch(e){return Xi.call(r)}return i=Xi.call(r),e?r[Mi]=t:delete r[Mi],i}:function(r){return Xi.call(r)};function Yi(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function qi(){return/^\s*function\s*([^(]*)/i}var Di,Hi=/^\s*function\s*([^(]*)/i;Yi(qi,"REGEXP",Hi),Di=Array.isArray?Array.isArray:function(r){return"[object Array]"===zi(r)};var Ji=Di;function Ki(r){return"number"==typeof r}function Qi(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function rn(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+Qi(n):Qi(n)+r,i&&(r="-"+r)),r}var en=String.prototype.toLowerCase,tn=String.prototype.toUpperCase;function nn(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Ki(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=rn(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=rn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===tn.call(r.specifier)?tn.call(t):en.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function an(r){return"string"==typeof r}var on=Math.abs,cn=String.prototype.toLowerCase,sn=String.prototype.toUpperCase,un=String.prototype.replace,pn=/e\+(\d)$/,ln=/e-(\d)$/,fn=/^(\d+)$/,gn=/^(\d+)e/,dn=/\.0$/,hn=/\.0*e/,wn=/(\..*[^0])0*e/;function vn(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Ki(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":on(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=un.call(t,wn,"$1e"),t=un.call(t,hn,"e"),t=un.call(t,dn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=un.call(t,pn,"e+0$1"),t=un.call(t,ln,"e-0$1"),r.alternate&&(t=un.call(t,fn,"$1."),t=un.call(t,gn,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===sn.call(r.specifier)?sn.call(t):cn.call(t)}function bn(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function yn(r,e,t){var i=e-r.length;return i<0?r:r=t?r+bn(i):bn(i)+r}var mn=String.fromCharCode,En=isNaN,xn=Array.isArray;function kn(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Sn(r){var e,t,i,n,a,o,c,s,u;if(!xn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(an(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=kn(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,En(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,En(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=nn(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!En(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=En(a)?String(i.arg):mn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=vn(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=rn(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=yn(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Vn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function jn(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Tn(r){var e,t,i,n;for(t=[],n=0,i=Vn.exec(r);i;)(e=r.slice(n,Vn.lastIndex-i[0].length)).length&&t.push(e),t.push(jn(i)),n=Vn.lastIndex,i=Vn.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function An(r){return"string"==typeof r}function In(r){var e,t;if(!An(r))throw new TypeError(In("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Tn(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Sn.apply(null,e)}function $n(r){return null!==r&&"object"==typeof r}var Fn=function(r){if("function"!=typeof r)throw new TypeError(In("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!Ji(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}($n);function Cn(r){var e,t,i,n;if(("Object"===(t=zi(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=Hi.exec(i.toString()))return e[1]}return $n(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}Yi($n,"isObjectLikeArray",Fn);var Rn="function"==typeof Ni||"object"==typeof Bi||"function"==typeof Pi?function(r){return Cn(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Cn(r).toLowerCase():e};var On,_n,Ln=Object.getPrototypeOf;_n=Object.getPrototypeOf,On="function"===Rn(_n)?Ln:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===zi(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Zn=On;var Nn=Object.prototype;function Wn(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Yt(r)}(r)&&(e=function(r){return null==r?null:(r=Zi(r),Zn(r))}(r),!e||!H(r,"constructor")&&H(e,"constructor")&&Li(e.constructor)&&"[object Function]"===zt(e.constructor)&&H(e,"isPrototypeOf")&&Li(e.isPrototypeOf)&&(e===Nn||function(r){var e;for(e in r)if(!H(r,e))return!1;return!0}(r)))}function Pn(r,e){return Wn(e)?(H(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(Ce("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Bn(r,e,t){var i,n,a,o;if(!Rt(r))throw new TypeError(Ce("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!Ze(e))throw new TypeError(Ce("invalid argument. Second argument must be a function. Value: `%s`.",e));if(i={invalid:NaN},arguments.length>2&&(a=Pn(i,t)))throw a;return B(n={},"next",c),B(n,"return",s),Pt&&Ze(r[Pt])&&B(n,Pt,u),n;function c(){var t;return o?{done:!0}:(t=r.next()).done?(o=!0,t):{value:Ot(t.value)?e(t.value):i.invalid,done:!1}}function s(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}}function u(){return Bn(r[Pt](),e,i)}}var Gn=Number.POSITIVE_INFINITY,Xn=1.5707963267948966,Un=Number.NEGATIVE_INFINITY;function Mn(r){return function(r){var e,t,i,n;return function(r){return r!=r}(r)||0===r?r:r===Gn?Xn:r===Un?-Xn:(r<0&&(t=!0,r=-r),e=0,r>2.414213562373095?(i=Xn,e=1,r=-1/r):r<=.66?i=0:(i=.7853981633974483,e=2,r=(r-1)/(r+1)),n=(n=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(n)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(n),n=r*n+r,2===e?n+=3061616997868383e-32:1===e&&(n+=6123233995736766e-32),i+=n,t?-i:i)}(1/r)}function zn(r){return Bn(r,Mn)}export{zn as default};
//# sourceMappingURL=mod.js.map
