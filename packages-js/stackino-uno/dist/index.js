!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("tslib"),require("@uirouter/react"),require("react"),require("prop-types"),require("classnames"),require("inversify"),require("moment"),require("inversify-react"),require("topbar")):"function"==typeof define&&define.amd?define(["tslib","@uirouter/react","react","prop-types","classnames","inversify","moment","inversify-react","topbar"],t):"object"==typeof exports?exports.StackinoUno=t(require("tslib"),require("@uirouter/react"),require("react"),require("prop-types"),require("classnames"),require("inversify"),require("moment"),require("inversify-react"),require("topbar")):e.StackinoUno=t(e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0])}(window,function(e,t,n,r,o,i,s,a,u){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t,n){"use strict";(function(e){function r(t,n){void 0===t&&(t=64),void 0===n&&(n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-");var r,o="";if("Uint8Array"in e&&"crypto"in e)r=new Uint8Array(t),crypto.getRandomValues(r);else{r=new Array(t);for(var i=0;i<t;i++)r[i]=Math.floor(Math.random()*n.length)}for(i=0;i<t;i++)o+=n.charAt(r[i]%n.length);return o}n.d(t,"a",function(){return r})}).call(this,n(10))},function(e,t){e.exports=s},function(e,t){e.exports=a},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"Page",function(){return d});var o={};n.r(o),n.d(o,"getScrollbarWidth",function(){return h}),n.d(o,"injectCssRule",function(){return y});var i={};n.r(i),n.d(i,"DisplayErrorPlugin",function(){return C}),n.d(i,"DisplayProgressPlugin",function(){return _}),n.d(i,"state",function(){return I});var s={};n.r(s),n.d(s,"container",function(){return w}),n.d(s,"router",function(){return k});var a={};n.r(a),n.d(a,"getUid",function(){return P}),n.d(a,"getRandomString",function(){return M.a});var u={};n.r(u),n.d(u,"JsonRpcClient",function(){return W}),n.d(u,"JsonRpcError",function(){return D});var c={};n.r(c),n.d(c,"Bsod",function(){return j}),n.d(c,"TopBar",function(){return U}),n.d(c,"Link",function(){return V});var l={};n.r(l),n.d(l,"ValidationLevel",function(){return F}),n.d(l,"ValidationState",function(){return K});var f=n(0),d=function(e){function t(t,n,r){var o=e.call(this)||this;return o.number=n,o.count=r,o.push.apply(o,t),o}return f.__extends(t,e),t}(Array),p=null;function h(){return null===p&&(p=function(){var e=document.createElement("div");e.style.cssText="\n\t\twidth: 50px !important;\n\t\theight: 50px !important;\n\t\toverflow: scroll !important;\n\t\tposition: absolute !important;\n\t\ttop: 9999px !important;\n\t\tleft: 9999px !important;\n\t",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth,n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{vertical:t,horizontal:n}}()),p}var v=null,m=null;function y(e){var t;null!==v&&null!==m||((t=document.createElement("style")).appendChild(document.createTextNode("")),document.head.appendChild(t),m=(v=t).sheet),m.insertRule(e,m.cssRules.length)}var b,g=n(5),w=new g.Container,E=n(1),x=n(4),R=n(16),j=function(){function e(){}return e.show=function(t,n,r){e.hide();var o=b=document.createElement("div");r&&r.id&&(o.id=r.id),o.className=x(R.container,"bsod",r&&r.className);var i=document.createElement("h2");if(i.className=x(R.title,"bsod-title"),i.innerText=t,o.appendChild(i),n)if("string"==typeof n){var s=document.createElement("p");s.className=x(R.message,"bsod-message"),s.innerText=n,o.appendChild(s)}else if("object"==typeof n){var a,u;if(n.stack)(a=document.createElement("pre")).className=x(R.stack,"bsod-stack"),(u=document.createElement("code")).innerText=n.stack,a.appendChild(u),o.appendChild(a);if(n.data)(a=document.createElement("pre")).className=x(R.data,"bsod-data"),(u=document.createElement("code")).innerText=n.data,a.appendChild(u),o.appendChild(a)}document.body.appendChild(o)},e.hide=function(){b&&b.remove()},e}(),C=function(){function e(e,t){this.name="DisplayErrorPlugin",this.disposers=[];var n=t&&t.handler||j;e.stateService.defaultErrorHandler(function(e){if(e instanceof E.Rejection){if(e.type===E.RejectType.IGNORED||e.type===E.RejectType.SUPERSEDED)return;n.show("Transition error",e.detail)}else n.show("Transition error",e)})}return e.prototype.dispose=function(e){if(this.disposers){for(var t=0,n=this.disposers;t<n.length;t++){(0,n[t])()}this.disposers.length=0}},e}(),T=n(11),S=0,U=function(){function e(){}return e.hideInternal=function(){S>0||T.hide()},e.show=function(){return 1===++S&&T.show(),this.hide},e.hide=function(){S<=0||0===--S&&setTimeout(this.hideInternal,100)},e}(),_=function(){function e(e,t){this.name="DisplayProgressPlugin",this.disposers=[];var n=e.transitionService,r=t&&t.handler||U;this.disposers.push(n.onStart({},function(e){r.show()})),this.disposers.push(n.onError({},function(e){r.hide()})),this.disposers.push(n.onSuccess({},function(e){r.hide()}))}return e.prototype.dispose=function(e){if(this.disposers){for(var t=0,n=this.disposers;t<n.length;t++){(0,n[t])()}this.disposers.length=0}},e}(),A=n(2),N=n(8),O={abstract:!1};function I(e,t,n){var r=this,o=n||O,i=o.store,s=o.data,a=o.abstract;return function(n){var o,u=n,c={name:e,url:t,component:(o=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return f.__extends(n,t),n.prototype.render=function(){var t=A.createElement(u,null),n=this.props[e+":container"];return n?A.createElement(N.Provider,{container:n,standalone:!0},t):t},n}(A.Component),o.displayName="Page("+e+")",o),resolve:[]};return a&&(c.abstract=a),s&&(c.data=s),c.resolve.push({token:e+":container",resolveFn:function(t){return f.__awaiter(r,void 0,void 0,function(){var n,r,o,s,a,u,c,l,d,p,h;return f.__generator(this,function(f){switch(f.label){case 0:if(!(n=t.to().$$state))throw new Error("Cannot get internal state object");for(r=n().path,o=null,s=0;s<r.length;s++)if(r[s].name===e){o=r[s];break}if(!o)throw new Error("Cannot find self state");for(a=null,u=o.parent;u;u=u.parent)for(c=0,l=u.resolvables;c<l.length;c++)if((d=l[c]).token===u.name+":container"){a=d;break}return a?[4,t.injector().getAsync(a.token)]:[3,2];case 1:return p=f.sent(),[3,3];case 2:p=w,f.label=3;case 3:return(h=new g.Container).parent=p,h.bind(E.Transition).toConstantValue(t),i&&h.bind(i).toSelf().inSingletonScope(),[2,h]}})})},deps:[E.Transition]}),i&&c.resolve.push({token:e+":store-enter",resolveFn:function(e){return e.get(i).enter()},deps:[e+":container"]}),k.stateRegistry.register(c),n}}var k=new E.UIRouterReact;k.plugin(E.servicesPlugin),k.plugin(E.pushStateLocationPlugin),k.plugin(_),k.plugin(C);var L=4096;function P(){return L++}var M=n(6),q=n(7),D=function(e){function t(n,r,o){var i=e.call(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i.code=n,i.message=r,i.data=o,i}return f.__extends(t,e),t.PARSE_ERROR=-32700,t.INVALID_REQUEST=-32600,t.METHOD_NOT_FOUND=-32601,t.INVALID_PARAMS=-32602,t.INTERNAL_ERROR=-32603,t.NOTIFICATION_EXPECTED=-32e3,t.UNAUTHORIZED=-32001,t.FORBIDDEN=-32002,t}(Error);function B(e,t){var n=new FormData,r=function e(t,n,r){var o=typeof r;if("undefined"===o||null===r)return null;switch(o){case"boolean":case"string":case"number":if(!n)throw new Error("Key must be defined for primitive values");return r;case"object":if(Array.isArray(r)||FileList&&r instanceof FileList){if(!n)throw new Error("Key must be defined for array values");for(var i=[],s=0;s<r.length;s++){var a=e(t,n+"["+s+"]",r[s]);i.push(a)}return i}if(Object(q.isMoment)(r))return r.format();if(File&&r instanceof File){if(!n)throw new Error("Key must be defined for file values");return t.append(n,r),n}for(var u in i={},r)r.hasOwnProperty(u)&&(a=e(t,n?n+"."+u:u,r[u]),i[u]=a);return i;default:throw new Error("Undefined behavior for data type '"+o+"' and key '"+n+"'")}}(n,null,e);return n.append(t,JSON.stringify(r)),n}var F,W=function(){function e(e){this.useJsonRpcConstant=!1,this.formRequestKey="~request~",this.requestFilters=[],this.responseFilters=[],this.endpoint=e}return e.prototype.processRequestAsync=function(e){return f.__awaiter(this,void 0,void 0,function(){var t,n,r,o;return f.__generator(this,function(i){switch(i.label){case 0:return t=new Headers,this.authorization&&t.append("Authorization",this.authorization),n=B(e,this.formRequestKey),[4,fetch(this.endpoint,{method:"POST",headers:t,body:n})];case 1:if(!(r=i.sent()).ok)throw new Error("RPC call failed - "+r.status+": "+r.statusText);return[4,r.json()];case 2:if("object"!=typeof(o=i.sent())||null===o)throw new Error("Malformed RPC response");return[2,o]}})})},e.prototype.callAsync=function(e,t){return f.__awaiter(this,void 0,void 0,function(){var n,r,o,i,s,a;return f.__generator(this,function(u){switch(u.label){case 0:n={id:P(),method:e,params:t},r=0,o=this.requestFilters,u.label=1;case 1:return r<o.length?[4,(0,o[r])(this,n)]:[3,4];case 2:n=u.sent(),u.label=3;case 3:return r++,[3,1];case 4:return this.useJsonRpcConstant&&(n.jsonrpc="2.0"),[4,this.processRequestAsync(n)];case 5:i=u.sent(),s=0,a=this.responseFilters,u.label=6;case 6:return s<a.length?[4,(0,a[s])(this,n,i)]:[3,9];case 7:i=u.sent(),u.label=8;case 8:return s++,[3,6];case 9:if(i.error)throw new D(i.error.code,i.error.message,i.error.data);return[2,i.result]}})})},e}(),J=n(3),H=function(e){var t=e.href,n=e.id,r=e.className,o=e.style,i=e.onClick,s=e.children;return A.createElement("a",{id:n,className:r,style:o,href:t,onClick:i},s)},V=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return f.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.component,n=e.to,r=e.params,o=e.options,i=e.activeClassName,s=e.exact,a=e.id,u=e.className,c=e.style,l=e.children,f=e.isListItem,d=e.listItemClassName,p=t||H;return A.createElement(E.UIRouterConsumer,null,function(e){var t=e.stateService.href(n,r||{},o),h=A.createElement(E.UISref,{to:n,params:r,options:o},f?A.createElement("li",{className:d},A.createElement(H,{href:t,id:a,className:u,style:c},l)):A.createElement(p,{href:t,id:a,className:u,style:c},l));return i?A.createElement(E.UISrefActive,{class:i,exact:s},h):h})},t.propTypes={component:J.any,to:J.string.isRequired,params:J.object,options:J.object,activeClassName:J.string,exact:J.bool,id:J.string,className:J.string,style:J.object,isListItem:J.bool,listItemClassName:J.string},t}(A.Component);!function(e){e[e.warning=100]="warning",e[e.error=200]="error"}(F||(F={}));var K=function(){function e(e){e||(e={}),this.state=e}return e.prototype.getMessage=function(e){var t=this.state[e];return!t||t.length<=0?null:t[0]},e.prototype.getWarning=function(e){var t=this.state[e];if(!t||t.length<=0)return null;for(var n=0,r=t;n<r.length;n++){var o=r[n];if(o.level===F.warning)return o.message}return null},e.prototype.getError=function(e){var t=this.state[e];if(!t||t.length<=0)return null;for(var n=0,r=t;n<r.length;n++){var o=r[n];if(o.level===F.error)return o.message}return null},e.create=function(t){return"object"!=typeof t||null===t?null:new e(t)},e}();n.d(t,"Page",function(){return d}),n.d(t,"getScrollbarWidth",function(){return h}),n.d(t,"injectCssRule",function(){return y}),n.d(t,"container",function(){return w}),n.d(t,"JsonRpcClient",function(){return W}),n.d(t,"JsonRpcError",function(){return D}),n.d(t,"DisplayErrorPlugin",function(){return C}),n.d(t,"DisplayProgressPlugin",function(){return _}),n.d(t,"state",function(){return I}),n.d(t,"getUid",function(){return P}),n.d(t,"getRandomString",function(){return M.a}),n.d(t,"Bsod",function(){return j}),n.d(t,"TopBar",function(){return U}),n.d(t,"Link",function(){return V}),n.d(t,"ValidationLevel",function(){return F}),n.d(t,"ValidationState",function(){return K}),n.d(t,"core",function(){return r}),n.d(t,"dom",function(){return o}),n.d(t,"globals",function(){return s}),n.d(t,"net",function(){return u}),n.d(t,"router",function(){return i}),n.d(t,"tools",function(){return a}),n.d(t,"ui",function(){return c}),n.d(t,"validation",function(){return l})},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=u},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),u=null,c=0,l=[],f=n(12);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(b(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function h(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var s=c++;n=u||(u=m(t)),r=E.bind(null,n,s,!1),o=E.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}e&&d(p(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete i[a.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function E(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){(t=e.exports=n(14)(!1)).push([e.i,"._3vNpDypsj4OL0SuMct945O {\n  position: fixed;\n  background-color: #0000AA;\n  color: white;\n  padding: 5em;\n  top: 0;\n  left: 0;\n  font-family: monospace;\n  width: 100%;\n  height: 100vh;\n  text-align: left;\n  overflow: auto;\n  z-index: 999999; }\n\n.dErPYa_KYxe0jAEskv3mw {\n  font-family: monospace;\n  color: white; }\n\n.W6YCLhdWk_1DiBUmTnAvT, ._2XcTcIXv29iUj3ga8MBMQ6 {\n  color: white;\n  text-align: left; }\n  .W6YCLhdWk_1DiBUmTnAvT::-webkit-scrollbar, ._2XcTcIXv29iUj3ga8MBMQ6::-webkit-scrollbar {\n    width: 0px;\n    background: transparent; }\n",""]),t.locals={container:"_3vNpDypsj4OL0SuMct945O",title:"dErPYa_KYxe0jAEskv3mw",data:"W6YCLhdWk_1DiBUmTnAvT",stack:"_2XcTcIXv29iUj3ga8MBMQ6"}},function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(13)(r,o);r.locals&&(e.exports=r.locals)}])});
//# sourceMappingURL=index.js.map