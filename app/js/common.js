//SVG sprite injection
"use strict";!function(e,t){if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return;var n,o,a="localStorage"in e&&null!==e.localStorage,r=function(){t.body.insertAdjacentHTML("afterbegin",o)},i=function(){t.body?r():t.addEventListener("DOMContentLoaded",r)};if(a&&1==localStorage.getItem("inlineSVGrev")&&(o=localStorage.getItem("inlineSVGdata")))return i();try{(n=new XMLHttpRequest).open("GET","../img/sprite.svg",!0),n.onload=function(){200<=n.status&&n.status<400&&(o=n.responseText,i())},n.send()}catch(e){}}(window,document);
//Use this to local cache injection:
//let revision = 1;
//"use strict";!function(e,t){if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return;var n,a,o="localStorage"in e&&null!==e.localStorage,r=function(){t.body.insertAdjacentHTML("afterbegin",a)},i=function(){t.body?r():t.addEventListener("DOMContentLoaded",r)};if(o&&1==localStorage.getItem("inlineSVGrev")&&(a=localStorage.getItem("inlineSVGdata")))return i();try{(n=new XMLHttpRequest).open("GET","../img/sprite.svg",!0),n.onload=function(){200<=n.status&&n.status<400&&(a=n.responseText,i(),o&&(localStorage.setItem("inlineSVGdata",a),localStorage.setItem("inlineSVGrev",revision)))},n.send()}catch(e){}}(window,document);
