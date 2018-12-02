!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.r(t),n.d(t,"h",function(){return l}),n.d(t,"createElement",function(){return l}),n.d(t,"cloneElement",function(){return s}),n.d(t,"Component",function(){return B}),n.d(t,"render",function(){return D}),n.d(t,"rerender",function(){return _}),n.d(t,"options",function(){return o});var r=function(){},o={},i=[],a=[];function l(e,t){var n,l,u,c,s=a;for(c=arguments.length;c-- >2;)i.push(arguments[c]);for(t&&null!=t.children&&(i.length||i.push(t.children),delete t.children);i.length;)if((l=i.pop())&&void 0!==l.pop)for(c=l.length;c--;)i.push(l[c]);else"boolean"==typeof l&&(l=null),(u="function"!=typeof e)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(u=!1)),u&&n?s[s.length-1]+=l:s===a?s=[l]:s.push(l),n=u;var p=new r;return p.nodeName=e,p.children=s,p.attributes=null==t?void 0:t,p.key=null==t?void 0:t.key,void 0!==o.vnode&&o.vnode(p),p}function u(e,t){for(var n in t)e[n]=t[n];return e}var c="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function s(e,t){return l(e.nodeName,u(u({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,f=[];function d(e){!e._dirty&&(e._dirty=!0)&&1==f.push(e)&&(o.debounceRendering||c)(_)}function _(){var e,t=f;for(f=[];e=t.pop();)e._dirty&&W(e)}function h(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function v(e){var t=u({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===p.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,b,a):e.removeEventListener(t,b,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var l=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function b(e){return this._listeners[e.type](o.event&&o.event(e)||e)}var g=[],C=0,x=!1,w=!1;function N(){for(var e;e=g.pop();)o.afterMount&&o.afterMount(e),e.componentDidMount&&e.componentDidMount()}function S(e,t,n,r,o,i){C++||(x=null!=o&&void 0!==o.ownerSVGElement,w=null!=e&&!("__preactattr_"in e));var a=k(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--C||(w=!1,i||N()),a}function k(e,t,n,r,o){var i=e,a=x;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),P(e,!0))),i.__preactattr_=!0,i;var l,u,c=t.nodeName;if("function"==typeof c)return function(e,t,n,r){var o=e&&e._component,i=o,a=e,l=o&&e._componentConstructor===t.nodeName,u=l,c=v(t);for(;o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;o&&u&&(!r||o._component)?(E(o,c,3,n,r),e=o.base):(i&&!l&&(T(i),e=a=null),o=j(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,a=null),E(o,c,1,n,r),e=o.base,a&&e!==a&&(a._component=null,P(a,!1)));return e}(e,t,n,r);if(x="svg"===c||"foreignObject"!==c&&x,c=String(c),(!e||!h(e,c))&&(l=c,(u=x?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l)).normalizedNodeName=l,i=u,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),P(e,!0)}var s=i.firstChild,p=i.__preactattr_,f=t.children;if(null==p){p=i.__preactattr_={};for(var d=i.attributes,_=d.length;_--;)p[d[_].name]=d[_].value}return!w&&f&&1===f.length&&"string"==typeof f[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=f[0]&&(s.nodeValue=f[0]):(f&&f.length||null!=s)&&function(e,t,n,r,o){var i,a,l,u,c,s=e.childNodes,p=[],f={},d=0,_=0,v=s.length,y=0,b=t?t.length:0;if(0!==v)for(var g=0;g<v;g++){var C=s[g],x=C.__preactattr_,w=b&&x?C._component?C._component.__key:x.key:null;null!=w?(d++,f[w]=C):(x||(void 0!==C.splitText?!o||C.nodeValue.trim():o))&&(p[y++]=C)}if(0!==b)for(var g=0;g<b;g++){u=t[g],c=null;var w=u.key;if(null!=w)d&&void 0!==f[w]&&(c=f[w],f[w]=void 0,d--);else if(_<y)for(i=_;i<y;i++)if(void 0!==p[i]&&(N=a=p[i],O=o,"string"==typeof(S=u)||"number"==typeof S?void 0!==N.splitText:"string"==typeof S.nodeName?!N._componentConstructor&&h(N,S.nodeName):O||N._componentConstructor===S.nodeName)){c=a,p[i]=void 0,i===y-1&&y--,i===_&&_++;break}c=k(c,u,n,r),l=s[g],c&&c!==e&&c!==l&&(null==l?e.appendChild(c):c===l.nextSibling?m(l):e.insertBefore(c,l))}var N,S,O;if(d)for(var g in f)void 0!==f[g]&&P(f[g],!1);for(;_<=y;)void 0!==(c=p[y--])&&P(c,!1)}(i,f,n,r,w||null!=p.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||y(e,r,n[r],n[r]=void 0,x);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||y(e,r,n[r],n[r]=t[r],x)}(i,t.attributes,p),x=a,i}function P(e,t){var n=e._component;n?T(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||m(e),O(e))}function O(e){for(e=e.lastChild;e;){var t=e.previousSibling;P(e,!0),e=t}}var U=[];function j(e,t,n){var r,o=U.length;for(e.prototype&&e.prototype.render?(r=new e(t,n),B.call(r,t,n)):((r=new B(t,n)).constructor=e,r.render=M);o--;)if(U[o].constructor===e)return r.nextBase=U[o].nextBase,U.splice(o,1),r;return r}function M(e,t,n){return this.constructor(e,n)}function E(e,t,n,r,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===o.syncComponentUpdates&&e.base?d(e):W(e,1,i)),e.__ref&&e.__ref(e))}function W(e,t,n,r){if(!e._disable){var i,a,l,c=e.props,s=e.state,p=e.context,f=e.prevProps||c,d=e.prevState||s,_=e.prevContext||p,h=e.base,m=e.nextBase,y=h||m,b=e._component,x=!1,w=_;if(e.constructor.getDerivedStateFromProps&&(s=u(u({},s),e.constructor.getDerivedStateFromProps(c,s)),e.state=s),h&&(e.props=f,e.state=d,e.context=_,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,s,p)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(c,s,p),e.props=c,e.state=s,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){i=e.render(c,s,p),e.getChildContext&&(p=u(u({},p),e.getChildContext())),h&&e.getSnapshotBeforeUpdate&&(w=e.getSnapshotBeforeUpdate(f,d));var k,O,U=i&&i.nodeName;if("function"==typeof U){var M=v(i);(a=b)&&a.constructor===U&&M.key==a.__key?E(a,M,1,p,!1):(k=a,e._component=a=j(U,M,p),a.nextBase=a.nextBase||m,a._parentComponent=e,E(a,M,0,p,!1),W(a,1,n,!0)),O=a.base}else l=y,(k=b)&&(l=e._component=null),(y||1===t)&&(l&&(l._component=null),O=S(l,i,p,n||!h,y&&y.parentNode,!0));if(y&&O!==y&&a!==b){var B=y.parentNode;B&&O!==B&&(B.replaceChild(O,y),k||(y._component=null,P(y,!1)))}if(k&&T(k),e.base=O,O&&!r){for(var D=e,L=e;L=L._parentComponent;)(D=L).base=O;O._component=D,O._componentConstructor=D.constructor}}for(!h||n?g.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(f,d,w),o.afterUpdate&&o.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);C||r||N()}}function T(e){o.beforeUnmount&&o.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?T(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,m(t),U.push(e),O(t)),e.__ref&&e.__ref(null)}function B(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function D(e,t,n){return S(n,e,{},!1,t,!1)}u(B.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=u(u({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),d(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),W(this,2)},render:function(){}});var L={h:l,createElement:l,cloneElement:s,Component:B,render:D,rerender:_,options:o};t.default=L},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(3);r.render(r.h(o.default,null),document.querySelector("#app"))},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n(4),l=n(5),u=n(6),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(e){return console.log(l.characters),i.h("div",null," ",l.characters.map(function(e){return i.h(a.default,{character:e,onCharacterClick:function(e){return u.starWarsApiCall(e)}})})," ")},t}(i.Component);t.default=c},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(e){var t=this,n=this.props.character.name;return i.h("button",{onClick:function(){return t.onClick()}},n)},t.prototype.onClick=function(){var e=this.props.character.url;this.props.onCharacterClick(e).then(function(){return console.log("I work")})},t}(i.Component);t.default=a},function(e){e.exports={characters:[{name:"Luke Skywalker",url:"https://swapi.co/api/people/1/"},{name:"Darth Vader",url:"https://swapi.co/api/people/4/"},{name:"Obi-wan Kenobi",url:"https://swapi.co/api/people/unknown/"},{name:"R2-D2",url:"https://swapi.co/api/people/3/"}]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);t.starWarsApiCall=function(e){return fetch(e).then(function(e){return e.json()}).catch(function(e){throw new r.StarWarsError(e.status)})}},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.DetailsNotFound=404]="DetailsNotFound",e[e.UnexpectedError=500]="UnexpectedError"}(r=t.StarWarsErrorCode||(t.StarWarsErrorCode={}));var o=function(){return function(e){switch(e){case 404:this.code=r.DetailsNotFound,this.message="Sorry No Info";break;default:this.code=r.UnexpectedError,this.message="Sorry we are having Unexpected troubles right now"}}}();t.StarWarsError=o}]);
//# sourceMappingURL=app.js.map