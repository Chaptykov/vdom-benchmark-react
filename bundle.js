!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];null!==r.children?t.push(u["default"].createElement("div",{key:r.key},o(r.children))):t.push(u["default"].createElement("span",{key:r.key},r.key))}return t}function i(e,t,n){this.container=e,this.a=t,this.b=n}var a=n(2),u=r(a),s=n(2),c=r(s),l=n(8),f="Preact",p="4.8.0";i.prototype.setUp=function(){},i.prototype.tearDown=function(){u["default"].unmountComponentAtNode(this.container)},i.prototype.render=function(){c["default"].render(u["default"].createElement("div",null,o(this.a)),this.container)},i.prototype.update=function(){c["default"].render(u["default"].createElement("div",null,o(this.b)),this.container)},document.addEventListener("DOMContentLoaded",function(e){l(f,p,i)},!1)},function(e,t,n){(function(e){!function(e,r){r(t,n(4),n(5),n(6))}(this,function(t,n,r,o){"use strict";function i(e,t,n){var r=t._preactCompatRendered;r&&r.parentNode!==t&&(r=null);var i=o.render(e,t,r);return t._preactCompatRendered=i,"function"==typeof n&&n(),i&&i._component}function a(e){var t=e._preactCompatRendered;return t&&t.parentNode===e?(o.render(o.h(P),e,t),!0):!1}function u(e){return function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return s.apply(void 0,[e].concat(n))}}function s(){var e=o.h.apply(void 0,arguments);"svg"===e.nodeName&&(e.nodeName=r),p(e);var t=e.attributes&&e.attributes.ref;return j&&t&&"string"==typeof t&&(e.attributes.ref=f(t,j)),e}function c(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;n>o;o++)r[o-2]=arguments[o];return s.apply(void 0,[e.nodeName||e.type,d({},e.attributes||e.props||{},t)].concat(r))}function l(e){return e&&(e instanceof A||e.$$typeof===N)}function f(e,t){return t._refProxies[e]||(t._refProxies[e]=function(n){t&&t.refs&&(t.refs[e]=n,null===n&&(delete t._refProxies[e],t=null))})}function p(e){var t=e.attributes;if(t){var n=t.className||t["class"];n&&(t.className=n)}}function d(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];for(var o=0;o<n.length;o++)for(var i in n[o])if(n[o].hasOwnProperty(i)){var a=n[o][i];null!==a&&void 0!==a&&(e[i]=a)}return e}function h(){}function v(e){var t=function(t,n){d(this,e),L.call(this,t,n,k),m(this),g.call(this,t,n)};return e.propTypes&&(t.propTypes=e.propTypes),e.defaultProps&&(t.defaultProps=e.defaultProps),e.getDefaultProps&&(t.defaultProps=e.getDefaultProps()),h.prototype=L.prototype,t.prototype=new h,t.prototype.constructor=t,t.displayName=e.displayName||"Component",t}function m(e){for(var t in e){var n=e[t];"function"!=typeof n||n.__bound||T.hasOwnProperty(t)||((e[t]=n.bind(e)).__bound=!0)}}function y(e,t,n){return"string"==typeof t&&(t=e.constructor.prototype[t]),"function"==typeof t?t.apply(e,n):void 0}function b(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(){for(var e=void 0,n=arguments.length,r=Array(n),o=0;n>o;o++)r[o]=arguments[o];for(var i=0;i<t.length;i++){var a=y(this,t[i],r);void 0!==a&&(e=a)}return e}}function g(e,t){_.call(this,e,t),this.componentWillReceiveProps=b(this.componentWillReceiveProps||"componentWillReceiveProps",_),this.render=b(w,this.render||"render",C)}function _(e){if(e){var t=e.children;if(t&&1===t.length&&(e.children=t[0],e.children&&"object"==typeof e.children&&(e.children.length=1,e.children[0]=e.children)),O){var n=this.propTypes||this.constructor.propTypes;if(n)for(var r in n)if(n.hasOwnProperty(r)&&"function"==typeof n[r]){var o=n[r](e,r,this.constructor.name,"prop");if(o)throw o}}}}function w(){j=this}function C(){j===this&&(j=null)}n="default"in n?n["default"]:n,r="default"in r?r["default"]:r;var x={};x.classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},x.createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),x.inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},x.possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};var E="a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),N="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,T={constructor:1,render:1,shouldComponentUpdate:1,componentWillRecieveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},k={},O="undefined"!=typeof e&&{NODE_ENV:"production"}&&!1,P=function(){return null},A=o.h("").constructor;A.prototype.$$typeof=N,Object.defineProperty(A.prototype,"type",{get:function(){return this.nodeName},set:function(e){this.nodeName=e}}),Object.defineProperty(A.prototype,"props",{get:function(){return this.attributes},set:function(e){this.attributes=e}});for(var S=[],I={map:function(e,t,n){return e=I.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t)},forEach:function(e,t,n){e=I.toArray(e),n&&n!==e&&(t=t.bind(n)),e.forEach(t)},count:function(e){return e=I.toArray(e),e.length},only:function(e){if(e=I.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return Array.isArray&&Array.isArray(e)?e:S.concat(e)}},j=void 0,R={},M=E.length;M--;)R[E[M]]=u(E[M]);var D=function(e){return e.base||e},L=function(e){function t(e,n,r){x.classCallCheck(this,t);var o=x.possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,n));return o.refs={},o._refProxies={},r!==k&&g.call(o,e,n),o}return x.inherits(t,e),x.createClass(t,[{key:"getDOMNode",value:function(){return this.base}},{key:"isMounted",value:function(){return!!this.base}}]),t}(o.Component),U={DOM:R,PropTypes:n,Children:I,render:i,createClass:v,createFactory:u,createElement:s,cloneElement:c,isValidElement:l,findDOMNode:D,unmountComponentAtNode:a,Component:L};t.DOM=R,t.PropTypes=n,t.Children=I,t.render=i,t.createClass=v,t.createFactory=u,t.createElement=s,t.cloneElement=c,t.isValidElement=l,t.findDOMNode=D,t.unmountComponentAtNode=a,t.Component=L,t["default"]=U})}).call(t,n(3))},function(e,t){function n(){c&&a&&(c=!1,a.length?s=a.concat(s):l=-1,s.length&&r())}function r(){if(!c){var e=setTimeout(n);c=!0;for(var t=s.length;t;){for(a=s,s=[];++l<t;)a&&a[l].run();l=-1,t=s.length}a=null,c=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function i(){}var a,u=e.exports={},s=[],c=!1,l=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new o(e,t)),1!==s.length||c||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=i,u.addListener=i,u.once=i,u.off=i,u.removeListener=i,u.removeAllListeners=i,u.emit=i,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},function(e,t,n){var r,o,i;!function(n,a){o=[t,e],r=a,i="function"==typeof r?r.apply(t,o):r,!(void 0!==i&&(e.exports=i))}(this,function(e,t){"use strict";function n(e){var t=e&&(C&&e[C]||e[x]);return"function"==typeof t?t:void 0}function r(e){function t(t,n,r,o,i,a){if(o=o||E,a=a||r,null==n[r]){var u=_[i];return t?new Error("Required "+u+" `"+a+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i,a)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o,i){var a=t[n],u=v(a);if(u!==e){var s=_[o],c=m(a);return new Error("Invalid "+s+" `"+i+"` of type "+("`"+c+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return r(t)}function i(){return r(w.thatReturns(null))}function a(e){function t(t,n,r,o,i){var a=t[n];if(!Array.isArray(a)){var u=_[o],s=v(a);return new Error("Invalid "+u+" `"+i+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an array."))}for(var c=0;c<a.length;c++){var l=e(a,c,r,o,i+"["+c+"]");if(l instanceof Error)return l}return null}return r(t)}function u(){function e(e,t,n,r,o){if(!g.isValidElement(e[t])){var i=_[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a single ReactElement."))}return null}return r(e)}function s(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=_[o],u=e.name||E,s=y(t[n]);return new Error("Invalid "+a+" `"+i+"` of type "+("`"+s+"` supplied to `"+r+"`, expected ")+("instance of `"+u+"`."))}return null}return r(t)}function c(e){function t(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(a===e[u])return null;var s=_[o],c=JSON.stringify(e);return new Error("Invalid "+s+" `"+i+"` of value `"+a+"` "+("supplied to `"+r+"`, expected one of "+c+"."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOf, expected an instance of array.")})}function l(e){function t(t,n,r,o,i){var a=t[n],u=v(a);if("object"!==u){var s=_[o];return new Error("Invalid "+s+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an object."))}for(var c in a)if(a.hasOwnProperty(c)){var l=e(a,c,r,o,i+"."+c);if(l instanceof Error)return l}return null}return r(t)}function f(e){function t(t,n,r,o,i){for(var a=0;a<e.length;a++){var u=e[a];if(null==u(t,n,r,o,i))return null}var s=_[o];return new Error("Invalid "+s+" `"+i+"` supplied to "+("`"+r+"`."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")})}function p(){function e(e,t,n,r,o){if(!h(e[t])){var i=_[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function d(e){function t(t,n,r,o,i){var a=t[n],u=v(a);if("object"!==u){var s=_[o];return new Error("Invalid "+s+" `"+i+"` of type `"+u+"` "+("supplied to `"+r+"`, expected `object`."))}for(var c in e){var l=e[c];if(l){var f=l(a,c,r,o,i+"."+c);if(f)return f}}return null}return r(t)}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||g.isValidElement(e))return!0;var t=n(e);if(!t)return!1;var r,o=t.call(e);if(t!==e.entries){for(;!(r=o.next()).done;)if(!h(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function m(e){var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function y(e){return e.constructor&&e.constructor.name?e.constructor.name:E}var b="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,g={};g.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===b};var _={prop:"prop",context:"context",childContext:"child context"},w={thatReturns:function(e){return function(){return e}}},C="function"==typeof Symbol&&Symbol.iterator,x="@@iterator",E="<<anonymous>>",N={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:a,element:u(),instanceOf:s,node:p(),objectOf:l,oneOf:c,oneOfType:f,shape:d};t.exports=N})},function(e,t,n){!function(t,r){e.exports=r(n(6))}(this,function(e){"use strict";function t(e,t){var r=p[t];r===!1?Object.defineProperty(e,t,v(t)):n(e,t)}function n(e,t){try{Object.defineProperty(e,t,v(t)),p[t]=!1}catch(n){if(!p[t]){var r=e.nodeName+": "+n;p[t]=r,!d&&"undefined"!=typeof console&&console.warn&&(d=!0,console.warn("Error overwriting some SVG properties.",{errors:p}))}}}function r(e){return function(){e.componentDidUpdate(),e=null}}var o={};o.classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o.createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o["extends"]=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},o.objectWithoutProperties=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},o.possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};var i="undefined"!=typeof document&&!!document.createElement,a=["viewBox"],u={xlink:"http://www.w3.org/1999/xlink"},s=/^([a-zA-Z]+)(?:\:|([A-Z]))/,c={className:"class"},l={},f=!1;i&&!function(){var e=document.createElement("div"),n=document.createElement;document.createElement=function(r){if(f||"svg"===r){var o=document.createElementNS("http://www.w3.org/2000/svg",r);o.setAttribute=m("setAttribute"),o.getAttribute=m("getAttribute"),o.removeAttribute=m("removeAttribute");for(var i in o)!~a.indexOf(i)&&i in e&&!c.hasOwnProperty(i)||t(o,i);return o}return n.call(document,r)}}();var p={},d=!1,h=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return function(n){return t.hasOwnProperty(n)?t[n]:t[n]=e(n)}},v=h(function(e){var t=arguments.length<=1||void 0===arguments[1]?c[e]||e:arguments[1];return{set:function(e){null===e||void 0===e?this.removeAttribute(t):this.setAttribute(t,e)},get:function(){return this.getAttribute(t)}}}),m=h(function(e){return function(t,n){var r=this.constructor.prototype,o=t.match(s);if(o&&u.hasOwnProperty(o[1])){t=t.replace(s,"$2").toLowerCase();var i=u[o[1]];return r[e+"NS"].call(this,i,t,n)}return r[e].call(this,t,n)}}),y=function(t){function n(){return o.classCallCheck(this,n),o.possibleConstructorReturn(this,Object.getPrototypeOf(n).apply(this,arguments))}return o.inherits(n,t),o.createClass(n,[{key:"componentWillUpdate",value:function(){f=!0}},{key:"componentDidUpdate",value:function(){if(f=!1,this.base)for(var e in this.props)(~a.indexOf(e)||p.hasOwnProperty(e)&&p[e]!==!1)&&this.base.setAttribute(e,this.props[e])}},{key:"render",value:function(t){var n=t.children,i=o.objectWithoutProperties(t,["children"]);this.hasRendered||(this.hasRendered=f=!0,this.setState(l,r(this)));for(var u in i)(~a.indexOf(u)||p.hasOwnProperty(u)&&p[u]!==!1)&&delete i[u];return e.h("svg",o["extends"]({version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i),n)}}]),n}(e.Component);return y})},function(e,t,n){(function(t){!function(t,n){e.exports=n()}(this,function(){"use strict";function e(e,t,n){this.nodeName=e,this.attributes=t,this.children=n}function t(e,t){for(var n in t)ue.call(t,n)&&(e[n]=t[n]);return e}function n(e){var t={};for(var n in e)t[n]=e[n];return t}function r(e,t){return t=t||{},function(n){return ue.call(t,n)?t[n]:t[n]=e(n)}}function o(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}function i(e){for(var t=[],n=e.length;n--;)t[n]=e[n];return t}function a(e){var t="";for(var n in e){var r=e[n];se(r)||(t&&(t+=" "),t+=le(n),t+=": ",t+=r,"number"!=typeof r||oe[n]||(t+="px"),t+=";")}return t}function u(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function s(e,t,n){var r=e[t];r&&!ae(r)&&(e[t]=n(r))}function c(e,t,n){return l(ve,e,t,n)}function l(e,t,n,r,o){return e[t]?e[t](n,r,o):void 0}function f(e,t){do l(e,t);while(e=e._component)}function p(t,n){var r=arguments.length,o=n&&n.children,i=void 0,a=void 0,u=void 0;if(o&&(delete n.children,3>r))return p(t,n,o);for(var s=2;r>s;s++){var l=arguments[s];if(!ce(l)){i||(i=[]),l.join?a=l:(a=me,a[0]=l);for(var f=0;f<a.length;f++){var d=a[f],h=!(ce(d)||d instanceof e);h&&(d=String(d)),h&&u?i[i.length-1]+=d:ce(d)||i.push(d),u=h}}}var v=new e(t,n||void 0,i||void 0);return c("vnode",v),v}function d(e,t,n){var r=t.split("."),i=r[0],a=r.length;return function(t){var u,s=this,c=e.state,l=c,f=void 0,p=void 0;if(ae(n)?(f=o(t,n),se(f)&&(s=s._component)&&(f=o(s,n))):f=(s.nodeName+s.type).match(/^input(check|rad)/i)?s.checked:s.value,ie(f)&&(f=f.call(s)),a>1){for(p=0;a-1>p;p++)l=l[r[p]]||(l[r[p]]={});l[r[p]]=f,f=c[i]}e.setState((u={},u[i]=f,u))}}function h(e){1===ye.push(e)&&(ve.debounceRendering||he)(v)}function v(){if(ye.length){var e=ye,t=void 0;for(ye=be,be=e;t=e.pop();)t._dirty&&V(t)}}function m(e){var t=e.nodeName;return ie(t)&&!(t.prototype&&t.prototype.render)}function y(e,t){return e.nodeName(A(e),t||X)||Y}function b(e){return e[ne]||(e[ne]={})}function g(e){return e.nodeType}function _(e,t){for(var n=t.length,r=n>2,o=r?document.createDocumentFragment():e,i=0;n>i;i++)o.appendChild(t[i]);r&&e.appendChild(o)}function w(e){var t=e.parentNode;t&&t.removeChild(e)}function C(e,t,n,r){if("type"!==t&&"style"!==t&&t in e)return e[t];var o=e[ne];return r!==!1&&o&&ue.call(o,t)?o[t]:"class"===t?e.className:"style"===t?e.style.cssText:n}function x(e,t,n){"class"===t?e.className=n||"":"style"===t?e.style.cssText=n||"":"dangerouslySetInnerHTML"===t?n&&n.__html&&(e.innerHTML=n.__html):"key"===t||t in e&&"type"!==t?(e[t]=n,ce(n)&&e.removeAttribute(t)):E(e,t,n),b(e)[t]=n}function E(e,t,n){if("on"!==t.substring(0,2)){var r=typeof n;ce(n)?e.removeAttribute(t):"function"!==r&&"object"!==r&&e.setAttribute(t,n)}else{var o=ge(t),i=e._listeners||(e._listeners={}),a=i[o]?n?null:"remove":"add";a&&e[a+"EventListener"](o,N),i[o]=n}}function N(e){var t=this._listeners[ge(e.type)];return t?t.call(this,c("event",e)||e):void 0}function T(e){return e[ne]||k(e)||X}function k(e){var t=e.attributes;return t&&t.getNamedItem?O(t):t}function O(e){for(var t=void 0,n=e.length;n--;){var r=e[n];t||(t={}),t[r.name]=r.value}return t}function P(e,t){if(m(t))return!0;var n=t.nodeName;return ie(n)?e._componentConstructor===n:3===g(e)?ae(t):fe(e.nodeName)===n}function A(e){var t=n(e.attributes),r=e.children;r&&(t.children=r);var o=e.nodeName.defaultProps;if(o)for(var i in o)!ue.call(o,i)||i in t||(t[i]=o[i]);return t}function S(e){j(e);var t=we(e.nodeName),n=_e[t];n?n.push(e):_e[t]=[e]}function I(e){var t=we(e),n=_e[t],r=n&&n.pop()||document.createElement(e);return b(r),r}function j(e){w(e),3!==g(e)&&(e[ne]||(e[ne]=k(e)),e._component=e._componentConstructor=null)}function R(e,t,n){for(var r=t.attributes;m(t);)t=y(t,n);if(ie(t.nodeName))return $(e,t,n);if(ae(t)){if(e){var o=g(e);if(3===o)return e[te]=t,e;1===o&&S(e)}return document.createTextNode(t)}var a=e,u=t.nodeName||re;return e?fe(e.nodeName)!==u&&(a=I(u),_(a,i(e.childNodes)),L(e)):a=I(u),M(a,t,n),U(a,t),r&&r.ref&&(a[ne].ref=r.ref)(a),a}function M(e,t,n){var r=void 0,o=void 0,i=0,a=e.childNodes.length,u=0;if(a){r=[];for(var s=0;a>s;s++){var c=e.childNodes[s],l=c._component?c._component.__key:C(c,"key");se(l)?r[u++]=c:(o||(o={}),o[l]=c,i++)}}var p=t.children,d=p&&p.length,h=0;if(d)for(var s=0;d>s;s++){var v=p[s],c=void 0;if(i){var m=v.attributes,l=m&&m.key;!se(l)&&ue.call(o,l)&&(c=o[l],o[l]=null,i--)}if(!c&&u>h)for(var y=h;u>y;y++){var b=r[y];if(b&&P(b,v)){c=b,r[y]=null,y===u-1&&u--,y===h&&h++;break}}if(c=R(c,v,n),e.childNodes[s]!==c){var b=c.parentNode!==e&&c._component,g=e.childNodes[s+1];b&&f(b,"componentWillMount"),g?e.insertBefore(c,g):e.appendChild(c),b&&f(b,"componentDidMount")}}if(i)for(var s in o)ue.call(o,s)&&o[s]&&(r[h=u++]=o[s]);u>h&&D(r)}function D(e,t){for(var n=e.length;n--;){var r=e[n];r&&L(r,t)}}function L(e,t){var n=e[ne];n&&l(n,"ref",null);var r=e._component;if(r)G(r,!t);else{if(!t){if(1!==g(e))return void w(e);S(e)}var o=e.childNodes;o&&o.length&&D(o,t)}}function U(e,t){var n=T(e)||X,r=t.attributes||X,o=void 0,i=void 0;for(o in n)se(r[o])&&x(e,o,null);if(r!==X)for(o in r)ue.call(r,o)&&(i=r[o],se(i)||i==C(e,o)||x(e,o,i))}function W(e){var t=e.constructor.name,n=Ce[t];n?n.push(e):Ce[t]=[e]}function B(e,t,n){for(var r=Ce[e.name],o=r&&r.length,i=void 0,a=0;o>a;a++)if(i=r[a],i.constructor===e){r.splice(a,1);var u=new e(t,n);return u.nextBase=i.base,u}return new e(t,n)}function F(e){e._dirty||(e._dirty=!0,h(e))}function H(e,t,n,r){var o=e._disableRendering;e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,e._disableRendering=!0,r&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.base&&l(e,"componentWillReceiveProps",t,e.context),e.prevProps||(e.prevProps=e.props),e.props=t,e._disableRendering=o,n&&n.render===!1||(n&&n.renderSync||ve.syncComponentUpdates!==!1?V(e):F(e)),l(e,"__ref",e)}function V(e,t){if(!e._disableRendering){var n=void 0,r=void 0,o=e.props,i=e.state,a=e.context,u=e.prevProps||o,s=e.prevState||i,c=e.prevContext||a,p=e.base,d=p||e.nextBase;if(p&&(e.props=u,e.state=s,e.context=c,l(e,"shouldComponentUpdate",o,i,a)===!1?n=!0:l(e,"componentWillUpdate",o,i,a),e.props=o,e.state=i,e.context=a),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!n){r=l(e,"render",o,i,a);var h=r&&r.nodeName,v=e.getChildContext?e.getChildContext():a,m=void 0,y=void 0;if(ie(h)&&h.prototype.render){var b=e._component;b&&b.constructor!==h&&(m=b,b=null);var g=A(r);b?H(b,g,K,v):(b=B(h,g,v),b._parentComponent=e,e._component=b,p&&f(b,"componentWillMount"),H(b,g,J,v),V(b,Q),p&&f(b,"componentDidMount")),y=b.base}else{var _=d;m=e._component,m&&(_=e._component=null),(d||t&&t.build)&&(y=R(_,r||Y,v))}if(d&&y!==d){var w=d.parentNode;w&&y!==w&&w.replaceChild(y,d)}if(m&&G(m,!0),e.base=y,y){for(var C=e,x=e;x=x._parentComponent;)C=x;y._component=C,y._componentConstructor=C.constructor}p&&l(e,"componentDidUpdate",u,s,c)}var E=e._renderCallbacks,N=void 0;if(E)for(;N=E.pop();)N.call(e);return r}}function $(e,t,n){for(var r=e&&e._component,o=e,i=r&&e._componentConstructor===t.nodeName;r&&!i&&(r=r._parentComponent);)i=r.constructor===t.nodeName;return i?(H(r,A(t),K,n),e=r.base):(r&&(G(r,!0),e=o=null),e=z(t,e,n),o&&e!==o&&(o._component=null,L(o))),e}function z(e,t,n){var r=A(e),o=B(e.nodeName,r,n);return t&&!o.base&&(o.base=t),H(o,r,J,n),V(o,Q),o.base}function G(e,t){l(e,"__ref",null),l(e,"componentWillUnmount");var n=e._component;n&&(G(n,t),t=!1);var r=e.base;r&&(t!==!1&&w(r),D(r.childNodes,!0)),t&&(e._parentComponent=null,W(e)),l(e,"componentDidUnmount")}function q(e,t){this._dirty=this._disableRendering=!1,this.prevState=this.prevProps=this.prevContext=this.base=this.nextBase=this._parentComponent=this._component=this.__ref=this.__key=this._linkedStates=this._renderCallbacks=null,this.context=t||{},this.props=e,this.state=l(this,"getInitialState")||{}}function Z(e,t,n){var r=n&&n._component&&n._componentConstructor===e.nodeName,o=R(n,e),i=!r&&o._component;return i&&f(i,"componentWillMount"),o.parentNode!==t&&t.appendChild(o),i&&f(i,"componentDidMount"),o}var J={render:!1},K={renderSync:!0},Q={build:!0},X={},Y="",ee="undefined"!=typeof document,te=!ee||"textContent"in document?"textContent":"nodeValue",ne="undefined"!=typeof Symbol?Symbol["for"]("preactattr"):"__preactattr_",re="undefined",oe={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},ie=function(e){return"function"==typeof e},ae=function(e){return"string"==typeof e},ue={}.hasOwnProperty,se=function(e){return null==e},ce=function(e){return e===!1||null==e},le=r(function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}),fe=r(function(e){return e.toLowerCase()}),pe=void 0;try{pe=new MessageChannel}catch(de){}var he=pe?function(e){pe.port1.onmessage=e,pe.port2.postMessage("")}:setTimeout,ve={vnode:function(e){var t=e.attributes;if(t&&!ie(e.nodeName)){var n=t.className;n&&(t["class"]=n,delete t.className),t["class"]&&s(t,"class",u),t.style&&s(t,"style",a)}}},me=[],ye=[],be=[],ge=r(function(e){return e.replace(/^on/i,"").toLowerCase()}),_e={},we=r(function(e){return e.toUpperCase()}),Ce={};t(q.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={}),r=e+"|"+(t||"");return n[r]||(n[r]=d(this,e,t))},setState:function(e,r){var o=this.state;this.prevState||(this.prevState=n(o)),t(o,ie(e)?e(o,this.props):e),r&&(this._renderCallbacks=this._renderCallbacks||[]).push(r),F(this)},forceUpdate:function(){V(this)},render:function(){return null}});var xe={h:p,Component:q,render:Z,rerender:v,options:ve,hooks:ve};return xe})}).call(t,n(7).setImmediate)},function(e,t,n){(function(e,r){function o(e,t){this._id=e,this._clearFn=t}var i=n(3).nextTick,a=Function.prototype.apply,u=Array.prototype.slice,s={},c=0;t.setTimeout=function(){return new o(a.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new o(a.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},t.setImmediate="function"==typeof e?e:function(e){var n=c++,r=arguments.length<2?!1:u.call(arguments,1);return s[n]=!0,i(function(){s[n]&&(r?e.apply(null,r):e.call(null),t.clearImmediate(n))}),n},t.clearImmediate="function"==typeof r?r:function(e){delete s[e]}}).call(t,n(7).setImmediate,n(7).clearImmediate)},function(e,t,n){"use strict";function r(e,t){var n=document.createElement("script");n.src=e,n.onload=function(){u.tests=window.generateBenchmarkData().units,u.ready(!0)},document.head.appendChild(n)}function o(e,t,n,r){window.addEventListener("message",function(o){var i=o.data,a=i.type;"tests"===a?(u.tests=i.data,u.reportCallback=function(o){e.postMessage({type:"report",data:{name:t,version:n,samples:o},id:r},"*")},u.ready(!0),e.postMessage({type:"ready",data:null,id:r},"*")):"run"===a&&u.run(i.data.iterations)},!1),e.postMessage({type:"init",data:null,id:r},"*")}function i(e,t,n){var i=function(e){if(""==e)return{};for(var t={},n=0;n<e.length;++n){var r=e[n].split("=",2);1==r.length?t[r[0]]="":t[r[0]]=decodeURIComponent(r[1].replace(/\+/g," "))}return t}(window.location.search.substr(1).split("&"));void 0!==i.name&&(e=i.name),void 0!==i.version&&(t=i.version);var a=i.type;void 0!==i.test&&(u.enableTests=!0,console.log("tests enabled"));var s;if("iframe"===a)s=i.id,void 0===s&&(s=null),o(window.parent,e,t,s);else if("window"===a)null!=window.opener?(s=i.id,void 0===s&&(s=null),o(window.opener,e,t,s)):console.log("Failed to initialize: opener window is NULL");else{var c=i.data;void 0!==c?r(c):console.log("Failed to initialize: cannot load tests data")}u.impl=n}var a=n(9),u=new a;if("undefined"==typeof window.performance&&(window.performance={}),!window.performance.now){var s=Date.now();performance.timing&&performance.timing.navigationStart&&(s=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-s}}e.exports=i},function(e,t,n){"use strict";function r(){this.running=!1,this.impl=null,this.tests=null,this.reportCallback=null,this.enableTests=!1,this.container=document.createElement("div"),this._runButton=document.getElementById("RunButton"),this._iterationsElement=document.getElementById("Iterations"),this._reportElement=document.createElement("pre"),document.body.appendChild(this.container),document.body.appendChild(this._reportElement);var e=this;this._runButton.addEventListener("click",function(t){if(t.preventDefault(),!e.running){var n=parseInt(e._iterationsElement.value);0>=n&&(n=10),e.run(n)}},!1),this.ready(!0)}var o=n(10);r.prototype.ready=function(e){e?this._runButton.disabled="":this._runButton.disabled="true"},r.prototype.run=function(e){var t=this;this.running=!0,this.ready(!1),new o(t.impl,t.container,t.tests,1,function(){new o(t.impl,t.container,t.tests,e,function(e){t._reportElement.textContent=JSON.stringify(e,null," "),t.running=!1,t.ready(!0),null!=t.reportCallback&&t.reportCallback(e)},void 0,!1).start()},void 0,this.enableTests).start()},e.exports=r},function(e,t){"use strict";function n(e){var t,r,o,i,a,u=[];for(o=0;o<e.length;o++)if(a=e[o],null!==a.children){for(i=document.createElement("div"),r=n(a.children),t=0;t<r.length;t++)i.appendChild(r[t]);u.push(i)}else i=document.createElement("span"),i.textContent=a.key.toString(),u.push(i);return u}function r(e,t,r){for(var o=document.createElement("div"),i=document.createElement("div"),a=n(t),u=0;u<a.length;u++)i.appendChild(a[u]);o.appendChild(i),o.innerHTML!==r.innerHTML&&(console.log("error in test: "+e),console.log("container.innerHTML:"),console.log(r.innerHTML),console.log("should be:"),console.log(o.innerHTML))}function o(e,t,n,r,o,i,a){void 0===i&&(i=null),this.impl=e,this.container=t,this.tests=n,this.iterations=r,this.cb=o,this.iterCb=i,this.enableTests=a,this._currentTest=0,this._currentIter=0,this._renderSamples=[],this._updateSamples=[],this._result=[],this._tasksCount=n.length*r,this._iter=this.iter.bind(this)}o.prototype.start=function(){this._iter()},o.prototype.finished=function(){this.cb(this._result)},o.prototype.progress=function(){if(0===this._currentTest&&0===this._currentIter)return 0;var e=this.tests;return(this._currentTest*e.length+this._currentIter)/(e.length*this.iterataions)},o.prototype.iter=function(){null!=this.iterCb&&this.iterCb(this);var e=this.tests;if(this._currentTest<e.length){var t=e[this._currentTest];if(this._currentIter<this.iterations){var n,o,i,a;n=new this.impl(this.container,t.data.a,t.data.b),n.setUp(),o=window.performance.now(),n.render(),i=window.performance.now()-o,this.enableTests&&r(t.name+"render()",t.data.a,this.container),o=window.performance.now(),n.update(),a=window.performance.now()-o,this.enableTests&&r(t.name+"update()",t.data.b,this.container),n.tearDown(),this._renderSamples.push(i),this._updateSamples.push(a),this._currentIter++}else this._result.push({name:t.name+" render()",data:this._renderSamples.slice(0)}),this._result.push({name:t.name+" update()",data:this._updateSamples.slice(0)}),this._currentTest++,this._currentIter=0,this._renderSamples=[],this._updateSamples=[];setTimeout(this._iter,0)}else this.finished()},e.exports=o}]);