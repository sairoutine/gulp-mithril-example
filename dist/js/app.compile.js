!function e(t,n,r){function o(i,u){if(!n[i]){if(!t[i]){var l="function"==typeof require&&require;if(!u&&l)return l(i,!0);if(a)return a(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[i]={exports:{}};t[i][0].call(s.exports,function(e){var n=t[i][1][e];return o(n?n:e)},s,s.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){var r=function o(e,t){"use strict";function n(e){return"function"==typeof e}function r(e){return"[object Object]"===ge.call(e)}function a(e){return"[object String]"===ge.call(e)}function i(e){se=e.document,fe=e.location,he=e.cancelAnimationFrame||e.clearTimeout,de=e.requestAnimationFrame||e.setTimeout}function u(e,t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(r(e))return V(e,n);var i,u=null!=t&&r(t)&&!("tag"in t||"view"in t||"subtree"in t),l=u?t:{},c="class"in l?"class":"className",s={tag:"div",attrs:{}},f=[];if(!a(e))throw new Error("selector in m(selector, attrs, children) should be a string");for(;null!=(i=me.exec(e));)if(""===i[1]&&i[2])s.tag=i[2];else if("#"===i[1])s.attrs.id=i[2];else if("."===i[1])f.push(i[2]);else if("["===i[3][0]){var d=ye.exec(i[3]);s.attrs[d[1]]=d[3]||(d[2]?"":!0)}var h=u?n.slice(1):n;1===h.length&&ve(h[0])?s.children=h[0]:s.children=h;for(var p in l)l.hasOwnProperty(p)&&(p===c&&null!=l[p]&&""!==l[p]?(f.push(l[p]),s.attrs[p]=""):s.attrs[p]=l[p]);return f.length&&(s.attrs[c]=f.join(" ")),s}function l(e,t){for(var n=0;n<e.length&&!t(e[n],n++););}function c(e,t){l(e,function(e,n){return(e=e&&e.attrs)&&null!=e.key&&t(e,n)})}function s(e){try{if(null==e||null==e.toString())return""}catch(t){return""}return e}function f(e,t,n,r){try{h(e,t,n),t.nodeValue=r}catch(o){}}function d(e){for(var t=0;t<e.length;t++)ve(e[t])&&(e=e.concat.apply([],e),t--);return e}function h(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}function p(e,t,n,r){c(e,function(e,r){t[e=e.key]=t[e]?{action:Ne,index:r,from:t[e].index,element:n.nodes[t[e].index]||se.createElement("div")}:{action:be,index:r}});var o=[];for(var a in t)o.push(t[a]);var i=o.sort(_),u=new Array(n.length);return u.nodes=n.nodes.slice(),l(i,function(t){var o=t.index;if(t.action===Ee&&(B(n[o].nodes,n[o]),u.splice(o,1)),t.action===be){var a=se.createElement("div");a.key=e[o].attrs.key,h(r,a,o),u.splice(o,0,{attrs:{key:e[o].attrs.key},nodes:[a]}),u.nodes[o]=a}if(t.action===Ne){var i=t.element,l=r.childNodes[o];l!==i&&null!==i&&r.insertBefore(i,l||null),u[o]=n[t.from],u.nodes[o]=i}}),u}function v(e,t,n,r){var o=e.length!==t.length;return o||c(e,function(e,n){var r=t[n];return o=r&&r.attrs&&r.attrs.key!==e.key}),o?p(e,n,t,r):t}function g(e,t,n){l(e,function(e,r){null!=t[r]&&n.push.apply(n,t[r].nodes)}),l(t.nodes,function(e,r){null!=e.parentNode&&n.indexOf(e)<0&&B([e],[t[r]])}),e.length<t.length&&(t.length=e.length),t.nodes=n}function m(e){var t=0;c(e,function(){return l(e,function(e){(e=e&&e.attrs)&&null==e.key&&(e.key="__mithril__"+t++)}),1})}function y(e,t,r){(e.tag!==t.tag||r.sort().join()!==Object.keys(t.attrs).sort().join()||e.attrs.id!==t.attrs.id||e.attrs.key!==t.attrs.key||"all"===u.redraw.strategy()&&(!t.configContext||t.configContext.retain!==!0)||"diff"===u.redraw.strategy()&&t.configContext&&t.configContext.retain===!1)&&(t.nodes.length&&B(t.nodes),t.configContext&&n(t.configContext.onunload)&&t.configContext.onunload(),t.controllers&&l(t.controllers,function(e){e.unload&&e.onunload({preventDefault:xe})}))}function w(e,t){return e.attrs.xmlns?e.attrs.xmlns:"svg"===e.tag?"http://www.w3.org/2000/svg":"math"===e.tag?"http://www.w3.org/1998/Math/MathML":t}function x(e,t,n){n.length&&(e.views=t,e.controllers=n,l(n,function(e){if(e.onunload&&e.onunload.$old&&(e.onunload=e.onunload.$old),ze&&e.onunload){var t=e.onunload;e.onunload=xe,e.onunload.$old=t}}))}function C(e,t,r,o,a){if(n(t.attrs.config)){var i=a.configContext=a.configContext||{};e.push(function(){return t.attrs.config.call(t,r,!o,i,a)})}}function E(e,n,r,o,a,i,u,l){var c=e.nodes[0];return o&&z(c,n.tag,n.attrs,e.attrs,a),e.children=$(c,n.tag,t,t,n.children,e.children,!1,0,n.attrs.contenteditable?c:r,a,u),e.nodes.intact=!0,l.length&&(e.views=i,e.controllers=l),c}function b(e,t,n){var r;e.$trusted?r=H(t,n,e):(r=[se.createTextNode(e)],t.nodeName.match(we)||h(t,r[0],n));var o="string"==typeof e||"number"==typeof e||"boolean"==typeof e?new e.constructor(e):e;return o.nodes=r,o}function N(e,t,n,r,o,a){var i=t.nodes;return r&&r===se.activeElement||(e.$trusted?(B(i,t),i=H(n,o,e)):"textarea"===a?n.value=e:r?r.innerHTML=e:((1===i[0].nodeType||i.length>1||i[0].nodeValue.trim&&!i[0].nodeValue.trim())&&(B(t.nodes,t),i=[se.createTextNode(e)]),f(n,i[0],o,e))),t=new e.constructor(e),t.nodes=i,t}function k(e,t,n,r,o,a,i){return 0===e.nodes.length?b(t,r,n):e.valueOf()!==t.valueOf()||o===!0?N(t,e,r,a,n,i):(e.nodes.intact=!0,e)}function O(e){if(e.$trusted){var t=e.match(/<[^\/]|\>\s*[^<]/g);if(null!=t)return t.length}else if(ve(e))return e.length;return 1}function T(e,n,r,o,a,i,u,l,s){e=d(e);var f=[],h=n.length===e.length,p=0,y={},w=!1;c(n,function(e,t){w=!0,y[n[t].attrs.key]={action:Ee,index:t}}),m(e),w&&(n=v(e,n,y,r));for(var x=0,C=0,E=e.length;E>C;C++){var b=$(r,a,n,o,e[C],n[x],i,o+p||p,u,l,s);b!==t&&(h=h&&b.nodes.intact,p+=O(b),n[x++]=b)}return h||g(e,n,f),n}function j(e,t,n,r,o){if(null!=t){if(ge.call(t)===ge.call(e))return t;if(o&&o.nodes){var a=n-r,i=a+(ve(e)?e:t.nodes).length;B(o.nodes.slice(a,i),o.slice(a,i))}else t.nodes&&B(t.nodes,t)}return t=new e.constructor,t.tag&&(t={}),t.nodes=[],t}function A(e,n){return n===t?e.attrs.is?se.createElement(e.tag,e.attrs.is):se.createElement(e.tag):e.attrs.is?se.createElementNS(n,e.tag,e.attrs.is):se.createElementNS(n,e.tag)}function S(e,t,n,r){return r?z(t,e.tag,e.attrs,{},n):e.attrs}function R(e,n,r,o,a,i){return null!=e.children&&e.children.length>0?$(n,e.tag,t,t,e.children,r.children,!0,0,e.attrs.contenteditable?n:o,a,i):e.children}function M(e,t,n,r,o,a,i){var u={tag:e.tag,attrs:t,children:n,nodes:[r]};return x(u,a,i),u.children&&!u.children.nodes&&(u.children.nodes=[]),"select"===e.tag&&"value"in e.attrs&&z(r,e.tag,{value:e.attrs.value},{},o),u}function D(e,t,n,r){var o="diff"===u.redraw.strategy()&&e?e.indexOf(t):-1;return o>-1?n[o]:"function"==typeof r?new r:{}}function L(e,t,n,r){null!=r.onunload&&qe.push({controller:r,handler:r.onunload}),e.push(n),t.push(r)}function U(e,t,n,r,o,a){var i=D(n.views,t,r,e.controller),u=+(e&&e.attrs&&e.attrs.key);return e=0===ze||_e||r&&r.indexOf(i)>-1?e.view(i):{tag:"placeholder"},"retain"===e.subtree?n:(u===u&&((e.attrs=e.attrs||{}).key=u),L(a,o,t,i),e)}function q(e,t,n,r){for(var o=t&&t.controllers;null!=e.view;)e=U(e,e.view.$original||e.view,t,o,r,n);return e}function I(e,t,n,r,o,i,u,l){var c=[],s=[];if(e=q(e,t,c,s),!e.tag&&s.length)throw new Error("Component template must return a virtual element, not an array, string, etc.");e.attrs=e.attrs||{},t.attrs=t.attrs||{};var f=Object.keys(e.attrs),d=f.length>("key"in e.attrs?1:0);if(y(e,t,f),a(e.tag)){var p=0===t.nodes.length;u=w(e,u);var v;if(p){v=A(e,u);var g=S(e,v,u,d),m=R(e,v,t,n,u,l);t=M(e,g,m,v,u,c,s)}else v=E(t,e,n,d,u,c,l,s);return(p||i===!0&&null!=v)&&h(r,v,o),C(l,e,v,p,t),t}}function $(e,t,o,a,i,u,l,c,f,d,h){return i=s(i),"retain"===i.subtree?u:(u=j(i,u,c,a,o),ve(i)?T(i,u,e,c,t,l,f,d,h):null!=i&&r(i)?I(i,u,f,e,c,l,d,h):n(i)?u:k(u,i,c,e,l,f,t))}function _(e,t){return e.action-t.action||e.index-t.index}function z(e,t,o,a,i){for(var u in o){var l=o[u],c=a[u];if(u in a&&c===l)"value"===u&&"input"===t&&e.value!=l&&(e.value=l);else{a[u]=l;try{if("config"===u||"key"===u)continue;if(n(l)&&"on"===u.slice(0,2))e[u]=J(l,e);else if("style"===u&&null!=l&&r(l)){for(var s in l)(null==c||c[s]!==l[s])&&(e.style[s]=l[s]);for(var s in c)s in l||(e.style[s]="")}else null!=i?"href"===u?e.setAttributeNS("http://www.w3.org/1999/xlink","href",l):e.setAttribute("className"===u?"class":u,l):u in e&&"list"!==u&&"style"!==u&&"form"!==u&&"type"!==u&&"width"!==u&&"height"!==u?("input"!==t||e[u]!==l)&&(e[u]=l):e.setAttribute(u,l)}catch(f){if(f.message.indexOf("Invalid argument")<0)throw f}}}return a}function B(e,t){for(var n=e.length-1;n>-1;n--)if(e[n]&&e[n].parentNode){try{e[n].parentNode.removeChild(e[n])}catch(r){}t=[].concat(t),t[n]&&F(t[n])}e.length&&(e.length=0)}function F(e){e.configContext&&n(e.configContext.onunload)&&(e.configContext.onunload(),e.configContext.onunload=null),e.controllers&&l(e.controllers,function(e){n(e.onunload)&&e.onunload({preventDefault:xe})}),e.children&&(ve(e.children)?l(e.children,F):e.children.tag&&F(e.children))}function H(t,n,r){var o=t.childNodes[n];if(o){var a=1!==o.nodeType,i=se.createElement("span");a?(t.insertBefore(i,o||null),i.insertAdjacentHTML("beforebegin",r),t.removeChild(i)):o.insertAdjacentHTML("beforebegin",r)}else e.Range&&e.Range.prototype.createContextualFragment?t.appendChild(se.createRange().createContextualFragment(r)):t.insertAdjacentHTML("beforeend",r);for(var u=[];t.childNodes[n]!==o;)u.push(t.childNodes[n]),n++;return u}function J(e,t){return function(n){n=n||event,u.redraw.strategy("diff"),u.startComputation();try{return e.call(t,n)}finally{Y()}}}function K(e){var t=Oe.indexOf(e);return 0>t?Oe.push(e)-1:t}function G(e){var t=function(){return arguments.length&&(e=arguments[0]),e};return t.toJSON=function(){return e},t}function V(e,t){var n=function(){return(e.controller||xe).apply(this,t)||this};e.controller&&(n.prototype=e.controller.prototype);var r=function(n){var r=arguments.length>1?t.concat([].slice.call(arguments,1)):t;return e.view.apply(e,r?[n].concat(r):[n])};r.$original=e.view;var o={controller:n,view:r};return t[0]&&null!=t[0].key&&(o.attrs={key:t[0].key}),o}function P(e,t){Ae.splice(t,1),Re.splice(t,1),Se.splice(t,1),re(e),Oe.splice(K(e),1)}function Q(){Le&&(Le(),Le=null),l(Ae,function(e,t){var n=Se[t];if(Re[t]){var r=[Re[t]];u.render(e,n.view?n.view(Re[t],r):"")}}),Ue&&(Ue(),Ue=null),Me=null,De=new Date,u.redraw.strategy("diff")}function Y(){"none"===u.redraw.strategy()?(ze--,u.redraw.strategy("diff")):u.endComputation()}function W(e){return e.slice(He[u.route.mode].length)}function X(e,t,n){Be={};var r=n.indexOf("?");-1!==r&&(Be=ne(n.substr(r+1,n.length)),n=n.substr(0,r));var o=Object.keys(t),a=o.indexOf(n);if(-1!==a)return u.mount(e,t[o[a]]),!0;for(var i in t){if(i===n)return u.mount(e,t[i]),!0;var c=new RegExp("^"+i.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(c.test(n))return n.replace(c,function(){var n=i.match(/:[^\/]+/g)||[],r=[].slice.call(arguments,1,-2);l(n,function(e,t){Be[e.replace(/:|\./g,"")]=decodeURIComponent(r[t])}),u.mount(e,t[i])}),!0}}function Z(e){if(e=e||event,!e.ctrlKey&&!e.metaKey&&2!==e.which){e.preventDefault?e.preventDefault():e.returnValue=!1;for(var t=e.currentTarget||e.srcElement,n="pathname"===u.route.mode&&t.search?ne(t.search.slice(1)):{};t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;ze=0,u.route(t[u.route.mode].slice(He[u.route.mode].length),n)}}function ee(){"hash"!==u.route.mode&&fe.hash?fe.hash=fe.hash:e.scrollTo(0,0)}function te(e,n){var o={},a=[];for(var i in e){var u=n?n+"["+i+"]":i,c=e[i];if(null===c)a.push(encodeURIComponent(u));else if(r(c))a.push(te(c,u));else if(ve(c)){var s=[];o[u]=o[u]||{},l(c,function(e){o[u][e]||(o[u][e]=!0,s.push(encodeURIComponent(u)+"="+encodeURIComponent(e)))}),a.push(s.join("&"))}else c!==t&&a.push(encodeURIComponent(u)+"="+encodeURIComponent(c))}return a.join("&")}function ne(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));var t=e.split("&"),n={};return l(t,function(e){var t=e.split("="),r=decodeURIComponent(t[0]),o=2===t.length?decodeURIComponent(t[1]):null;null!=n[r]?(ve(n[r])||(n[r]=[n[r]]),n[r].push(o)):n[r]=o}),n}function re(e){var n=K(e);B(e.childNodes,Te[n]),Te[n]=t}function oe(e,t){var n=u.prop(t);return e.then(n),n.then=function(n,r){return oe(e.then(n,r),t)},n["catch"]=n.then.bind(null,null),n}function ae(e,t){function o(e){h=e||f,v.map(function(e){h===s?e.resolve(p):e.reject(p)})}function a(e,t,o,a){if((null!=p&&r(p)||n(p))&&n(e))try{var i=0;e.call(p,function(e){i++||(p=e,t())},function(e){i++||(p=e,o())})}catch(l){u.deferred.onerror(l),p=l,o()}else a()}function i(){var r;try{r=p&&p.then}catch(f){return u.deferred.onerror(f),p=f,h=c,i()}h===c&&u.deferred.onerror(p),a(r,function(){h=l,i()},function(){h=c,i()},function(){try{h===l&&n(e)?p=e(p):h===c&&n(t)&&(p=t(p),h=l)}catch(i){return u.deferred.onerror(i),p=i,o()}p===d?(p=TypeError(),o()):a(r,function(){o(s)},o,function(){o(h===l&&s)})})}var l=1,c=2,s=3,f=4,d=this,h=0,p=0,v=[];d.promise={},d.resolve=function(e){return h||(p=e,h=l,i()),this},d.reject=function(e){return h||(p=e,h=c,i()),this},d.promise.then=function(e,t){var n=new ae(e,t);return h===s?n.resolve(p):h===f?n.reject(p):v.push(n),n.promise}}function ie(e){return e}function ue(r){if(!r.dataType||"jsonp"!==r.dataType.toLowerCase()){var o=new e.XMLHttpRequest;if(o.open(r.method,r.url,!0,r.user,r.password),o.onreadystatechange=function(){4===o.readyState&&(o.status>=200&&o.status<300?r.onload({type:"load",target:o}):r.onerror({type:"error",target:o}))},r.serialize===JSON.stringify&&r.data&&"GET"!==r.method&&o.setRequestHeader("Content-Type","application/json; charset=utf-8"),r.deserialize===JSON.parse&&o.setRequestHeader("Accept","application/json, text/*"),n(r.config)){var i=r.config(o,r);null!=i&&(o=i)}var u="GET"!==r.method&&r.data?r.data:"";if(u&&!a(u)&&u.constructor!==e.FormData)throw new Error("Request data should be either be a string or FormData. Check the `serialize` option in `m.request`");return o.send(u),o}var l="mithril_callback_"+(new Date).getTime()+"_"+Math.round(1e16*Math.random()).toString(36),c=se.createElement("script");e[l]=function(n){c.parentNode.removeChild(c),r.onload({type:"load",target:{responseText:n}}),e[l]=t},c.onerror=function(){return c.parentNode.removeChild(c),r.onerror({type:"error",target:{status:500,responseText:JSON.stringify({error:"Error making jsonp request"})}}),e[l]=t,!1},c.onload=function(){return!1},c.src=r.url+(r.url.indexOf("?")>0?"&":"?")+(r.callbackKey?r.callbackKey:"callback")+"="+l+"&"+te(r.data||{}),se.body.appendChild(c)}function le(e,t,n){if("GET"===e.method&&"jsonp"!==e.dataType){var r=e.url.indexOf("?")<0?"?":"&",o=te(t);e.url=e.url+(o?r+o:"")}else e.data=n(t);return e}function ce(e,t){var n=e.match(/:[a-z]\w+/gi);return n&&t&&l(n,function(n){var r=n.slice(1);e=e.replace(n,t[r]),delete t[r]}),e}var se,fe,de,he,pe="v0.2.2-rc.1",ve=Array.isArray||function(e){return"[object Array]"===ge.call(e)},ge={}.toString,me=/(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g,ye=/\[(.+?)(?:=("|'|)(.*?)\2)?\]/,we=/^(AREA|BASE|BR|COL|COMMAND|EMBED|HR|IMG|INPUT|KEYGEN|LINK|META|PARAM|SOURCE|TRACK|WBR)$/,xe=function(){};i(e),u.version=function(){return pe};var Ce,Ee=1,be=2,Ne=3,ke={appendChild:function(e){Ce===t&&(Ce=se.createElement("html")),se.documentElement&&se.documentElement!==e?se.replaceChild(e,se.documentElement):se.appendChild(e),this.childNodes=se.childNodes},insertBefore:function(e){this.appendChild(e)},childNodes:[]},Oe=[],Te={};u.render=function(e,n,r){var o=[];if(!e)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var a=K(e),i=e===se,u=i||e===se.documentElement?ke:e;i&&"html"!==n.tag&&(n={tag:"html",attrs:{},children:n}),Te[a]===t&&B(u.childNodes),r===!0&&re(e),Te[a]=$(u,null,t,t,n,Te[a],!1,0,null,t,o),l(o,function(e){e()})},u.trust=function(e){return e=new String(e),e.$trusted=!0,e},u.prop=function(e){return(null!=e&&r(e)||n(e))&&n(e.then)?oe(e):G(e)};var je,Ae=[],Se=[],Re=[],Me=null,De=0,Le=null,Ue=null,qe=[],Ie=16;u.component=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);return V(e,t)},u.mount=u.module=function(e,t){if(!e)throw new Error("Please ensure the DOM element exists before rendering a template into it.");var r=Ae.indexOf(e);0>r&&(r=Ae.length);var o=!1,a={preventDefault:function(){o=!0,Le=Ue=null}};l(qe,function(e){e.handler.call(e.controller,a),e.controller.onunload=null}),o?l(qe,function(e){e.controller.onunload=e.handler}):qe=[],Re[r]&&n(Re[r].onunload)&&Re[r].onunload(a);var i=null===t;if(!o){u.redraw.strategy("all"),u.startComputation(),Ae[r]=e;var c=je=t?t:t={controller:xe},s=new(t.controller||xe);return c===je&&(Re[r]=s,Se[r]=t),Y(),i&&P(e,r),Re[r]}i&&P(e,r)};var $e=!1,_e=!1;u.redraw=function(t){if(!$e){$e=!0,t&&(_e=!0);try{Me&&!t?(de===e.requestAnimationFrame||new Date-De>Ie)&&(Me>0&&he(Me),Me=de(Q,Ie)):(Q(),Me=de(function(){Me=null},Ie))}finally{$e=_e=!1}}},u.redraw.strategy=u.prop();var ze=0;u.startComputation=function(){ze++},u.endComputation=function(){ze>1?ze--:(ze=0,u.redraw())},u.withAttr=function(e,t,n){return function(r){r=r||event;var o=r.currentTarget||this,a=n||this;t.call(a,e in o?o[e]:o.getAttribute(e))}};var Be,Fe,He={pathname:"",hash:"#",search:"?"},Je=xe,Ke=!1;return u.route=function(t,n,r,o){if(0===arguments.length)return Fe;if(3===arguments.length&&a(n)){Je=function(e){var o=Fe=W(e);if(!X(t,r,o)){if(Ke)throw new Error("Ensure the default route matches one of the routes defined in m.route");Ke=!0,u.route(n,!0),Ke=!1}};var i="hash"===u.route.mode?"onhashchange":"onpopstate";e[i]=function(){var e=fe[u.route.mode];"pathname"===u.route.mode&&(e+=fe.search),Fe!==W(e)&&Je(e)},Le=ee,e[i]()}else if(t.addEventListener||t.attachEvent)t.href=("pathname"!==u.route.mode?fe.pathname:"")+He[u.route.mode]+o.attrs.href,t.addEventListener?(t.removeEventListener("click",Z),t.addEventListener("click",Z)):(t.detachEvent("onclick",Z),t.attachEvent("onclick",Z));else if(a(t)){var l=Fe;Fe=t;var c=n||{},s=Fe.indexOf("?"),f=s>-1?ne(Fe.slice(s+1)):{};for(var d in c)f[d]=c[d];var h=te(f),p=s>-1?Fe.slice(0,s):Fe;h&&(Fe=p+(-1===p.indexOf("?")?"?":"&")+h);var v=(3===arguments.length?r:n)===!0||l===t;e.history.pushState?(Le=ee,Ue=function(){e.history[v?"replaceState":"pushState"](null,se.title,He[u.route.mode]+Fe)},Je(He[u.route.mode]+Fe)):(fe[u.route.mode]=Fe,Je(He[u.route.mode]+Fe))}},u.route.param=function(e){if(!Be)throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");return e?Be[e]:Be},u.route.mode="search",u.route.buildQueryString=te,u.route.parseQueryString=ne,u.deferred=function(){var e=new ae;return e.promise=oe(e.promise),e},u.deferred.onerror=function(e){if("[object Error]"===ge.call(e)&&!e.constructor.toString().match(/ Error/))throw ze=0,e},u.sync=function(e){function t(e,t){return function(i){return a[e]=i,t||(n="reject"),0===--o&&(r.promise(a),r[n](a)),i}}var n="resolve",r=u.deferred(),o=e.length,a=new Array(o);return e.length>0?l(e,function(e,n){e.then(t(n,!0),t(n,!1))}):r.resolve([]),r.promise},u.request=function(e){e.background!==!0&&u.startComputation();var t=new ae,n=e.dataType&&"jsonp"===e.dataType.toLowerCase(),r=e.serialize=n?ie:e.serialize||JSON.stringify,o=e.deserialize=n?ie:e.deserialize||JSON.parse,a=n?function(e){return e.responseText}:e.extract||function(e){return 0===e.responseText.length&&o===JSON.parse?null:e.responseText};return e.method=(e.method||"GET").toUpperCase(),e.url=ce(e.url,e.data),e=le(e,e.data,r),e.onload=e.onerror=function(n){try{n=n||event;var r=("load"===n.type?e.unwrapSuccess:e.unwrapError)||ie,i=r(o(a(n.target,e)),n.target);"load"===n.type?(ve(i)&&e.type?l(i,function(t,n){i[n]=new e.type(t)}):e.type&&(i=new e.type(i)),t.resolve(i)):t.reject(i),t["load"===n.type?"resolve":"reject"](i)}catch(n){t.reject(n)}finally{e.background!==!0&&u.endComputation()}},ue(e),t.promise=oe(t.promise,e.initialValue),t.promise},u.deps=function(t){return i(e=t||e),e},u.deps.factory=o,u}("undefined"!=typeof window?window:{});"object"==typeof t&&null!=t&&t.exports?t.exports=r:"function"==typeof define&&define.amd&&define(function(){return r})},{}],2:[function(e,t,n){function r(){return"count: "+a}var o=e("mithril"),a=0;setInterval(function(){a++,o.redraw(!0)},1e3),o.mount(document.body,{view:r})},{mithril:1}]},{},[2]);