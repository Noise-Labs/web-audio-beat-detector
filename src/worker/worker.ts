// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const n=(e,t,r)=>{const n=e.length,o=[];let s=!1;for(let l=0;l<n;l+=1)e[l]>t?s=!0:s&&(s=!1,o.push(l-1),l+=r/4-1);return s&&o.push(n-1),o},o=(e,t)=>{const r=(e=>{let t=0;const r=e.length;for(let n=0;n<r;n+=1)e[n]>t&&(t=e[n]);return t})(e),o=.3*r;let s=[],l=r-.05*r;if(r>.25)for(;s.length<30&&l>=o;)s=n(e,l,t),l-=.05*r;const f=((e,t)=>{const r=[];return e.forEach(e=>{let n=60/(e.interval/t);for(;n<90;)n*=2;for(;n>180;)n/=2;let o=!1,s=e.peaks.length;r.forEach(t=>{if(t.tempo===n&&(t.score+=e.peaks.length,t.peaks=[...t.peaks,...e.peaks],o=!0),t.tempo>n-.5&&t.tempo<n+.5){const r=2*Math.abs(t.tempo-n);s+=(1-r)*t.peaks.length,t.score+=(1-r)*e.peaks.length}}),o||r.push({peaks:e.peaks,score:s,tempo:n})}),r})((e=>{const t=[];return e.forEach((r,n)=>{const o=Math.min(e.length-n,10);for(let s=1;s<o;s+=1){const o=e[n+s]-r;t.some(e=>e.interval===o&&(e.peaks.push(r),!0))||t.push({interval:o,peaks:[r]})}}),t})(s),t);return f.sort((e,t)=>t.score-e.score),f};addEventListener("message",e=>{let t=e.data;try{if("analyze"===t.method){const e=t.id,r=t.params,n=((e,t)=>{const r=o(e,t);if(0===r.length)throw new Error("The given channelData does not contain any detectable beats.");return r[0].tempo})(r.channelData,r.sampleRate);postMessage({error:null,id:e,result:{tempo:n}})}else{if("guess"!==t.method)throw new Error('The given method "'.concat(t.method,'" is not supported'));{const e=t.id,r=t.params,n=((e,t)=>{const r=o(e,t);if(0===r.length)throw new Error("The given channelData does not contain any detectable beats.");const n=r[0],s=n.peaks,l=n.tempo,f=Math.round(l),u=60/f;s.sort((e,t)=>e-t);let i=s[0]/t;for(;i>u;)i-=u;return{bpm:f,offset:i}})(r.channelData,r.sampleRate),s=n.bpm,l=n.offset;postMessage({error:null,id:e,result:{bpm:s,offset:l}})}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}})}]);`;
