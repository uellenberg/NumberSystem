_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7eYB":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"8Kt/":function(e,t,n){"use strict";var r=n("oI91");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),s=(i=n("Xuae"))&&i.__esModule?i:{default:i},c=n("lwAK"),u=n("FYa8"),p=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function b(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var p=h[c];if(o.props.hasOwnProperty(p))if("charSet"===p)n.has(p)?i=!1:n.add(p);else{var l=o.props[p],f=r[p]||new Set;"name"===p&&a||!f.has(l)?(f.add(l),r[p]=f):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,a.default.cloneElement(e,s)}return a.default.cloneElement(e,{key:i})}))}function m(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:b,headManager:r,inAmpMode:(0,p.isInAmpMode)(n)},t)}m.rewind=function(){};var y=m;t.default=y},"C+bE":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},EqR4:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("bmeg"),i=n("ddIo"),a=n("q1tI"),s=n("oBXg"),c=(n("Oqez").Num,{version:"4",objects:{922:{id:"922",type:"segment",hidden:!0,parents:{point1:"923",point2:"924"},color:"#2d70b3"},923:{hidden:!1,type:"point",x:-4.464597902097905,y:.019667832167829857,parents:{},id:"923",color:"#6042a6",label:"B",showLabel:!0},924:{hidden:!0,type:"point",x:1.7373251748251732,y:-.05900349650349934,parents:{},id:"924",color:"#6042a6",label:"A",showLabel:!0},927:{id:"927",type:"circle",hidden:!0,parents:{point1:"923",point2:"929"},color:"#388c46"},929:{hidden:!0,type:"glider",t:.7039013115156058,parents:{host:"922"},id:"929",color:"#6042a6"},932:{id:"932",type:"segment",hidden:!0,parents:{point1:"923",point2:"929"},color:"#2d70b3"},937:{id:"937",type:"compass",hidden:!0,parents:{straight:"932",center:"924"},color:"#388c46"},940:{id:"940",type:"segment",hidden:!1,parents:{point1:"923",point2:"942"},color:"#2d70b3",label:"H",showLabel:!0},942:{hidden:!1,type:"intersection",negRoot:!1,parents:{host1:"937",host2:"927"},id:"942",color:"#6042a6"},945:{id:"945",type:"perpendicular",hidden:!0,parents:{straight:"932",point:"942"},color:"#2d70b3"},948:{type:"segment",id:"948",hidden:!1,parents:{point1:"923",point2:"953"},color:"#2d70b3",label:"L1",showLabel:!0},949:{type:"segment",id:"949",hidden:!1,parents:{point1:"953",point2:"942"},color:"#2d70b3",label:"L2",showLabel:!0},951:{id:"951",type:"polygon",hidden:!1,parents:{points:["923","953","942"]},color:"#2d70b3"},953:{hidden:!1,type:"intersection",negRoot:!1,parents:{host1:"945",host2:"932"},id:"953",color:"#6042a6"},962:{id:"962",type:"segment",hidden:!1,parents:{point1:"953",point2:"942"},color:"#2d70b3"},967:{id:"967",type:"angle",hidden:!1,showLabel:!0,label:"{angle}",parents:{point1:"942",point2:"953",point3:"923"},color:"#000000"},971:{id:"971",type:"angle",hidden:!1,showLabel:!0,label:"{angle}",parents:{point1:"942",point2:"923",point3:"953"},color:"#000000"},975:{id:"975",type:"angle",hidden:!1,showLabel:!0,label:"{angle}",parents:{point1:"923",point2:"942",point3:"953"},color:"#000000"}},viewport:{centerX:0,centerY:0,size:15},customTools:{},graphSettings:{showGrid:!1,showAxes:!1,showAxisNumbers:!1}});t.default=function(){return Object(a.useEffect)((function(){!function(){var e=Math.cos(45*Math.PI/180),t=Math.sin(45*Math.PI/180),n=Desmos.Geometry(document.getElementById("geometry"),{sidebarCollapsed:!0});n.setState(c),setInterval((function(){var r=n.getState();if(r){try{Math.hypot(Math.abs(r.objects[923].x-r.objects[924].x),Math.abs(r.objects[923].y-r.objects[924].y))}catch(c){console.error(c),console.log(r)}var o=Math.hypot(Math.abs(r.objects[923].x-r.objects[924].x),Math.abs(r.objects[923].y-r.objects[924].y))/2,i=o/e,a=t*i;Object(s.a)(["948"],new decimalsystem.Num(o).toBase(Math.SQRT2).toNumber(0).toLocaleString(),r),Object(s.a)(["949"],new decimalsystem.Num(a).toBase(Math.SQRT2).toNumber(0).toLocaleString(),r),Object(s.a)(["940"],new decimalsystem.Num(i).toBase(Math.SQRT2).toNumber(0).toLocaleString(),r),n.setState(r)}}),100)}()})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{title:"DecimalSystem Triangle Demo",url:"https://decimalsystem.js.org/triangle"}),Object(r.jsx)(o.a,{})]})}},FExj:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/triangle",function(){return n("EqR4")}])},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},KckH:function(e,t,n){var r=n("7eYB");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},Oqez:function(e,t,n){"use strict";n.r(t),n.d(t,"Num",(function(){return i}));var r=function(e){var t=parseInt(e,10);return isNaN(t)&&(t=e.charCodeAt(0)-87),t},o=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},i=function(){function e(e){if(this._base=10,this._isNegative=!1,this._cache={},"number"!==typeof e&&"string"!==typeof e||(e={num:e}),null!=e.base&&10!==e.base){if("string"!==typeof e.num&&(e.num=e.num.toString().trim().toLowerCase()),isNaN(e.base))throw new Error("The base field is not a valid number.");this._base=e.base,e.num.startsWith("-")&&(e.num=e.num.substring(1),this._isNegative=!0);var t=e.num.split(/\./g);if(t.length>2)throw new Error("The input number contains multiple decimals.");for(var n=t[0].length,o=t.join(""),i=0,a=0;a<o.length;a++)i+=r(o[a])*Math.pow(this._base,n-a-1);this._number=i}else{if("string"===typeof e.num&&(e.num=parseInt(e.num.trim().toLowerCase(),10)),isNaN(e.num))throw new Error("The input number is not valid. If you are trying to use a non-base 10 number, supply a base field to the options.");e.num<0&&(e.num*=-1,this._isNegative=!0),this._number=e.num}}return Object.defineProperty(e.prototype,"base",{get:function(){return this._base},enumerable:!1,configurable:!0}),e.prototype.Convert=function(e,t){if(!this._cache.hasOwnProperty(e.toString()+"|"+t.toString())){if(10===e){var n=this._number.toString();return n.startsWith("0")&&(n=n.substring(1)),void(this._cache[e.toString()+"|"+t.toString()]=(this._isNegative?"-":"")+n)}var r=this._number,i=Math.ceil(Math.log(r)/Math.log(this._base))+(r%this._base===0?1:0);i<0&&(i=0);for(var a,s=[],c=[],u=i-1;u>-1*t-1;u--){var p=Math.floor(r/Math.pow(this._base,u)%this._base);r-=p*Math.pow(this._base,u);var l=(a=p)<10?a.toString():String.fromCharCode(a+87);if("0"===l&&s.length<1)i--;else if("0"!==l||s.length<i?(s.push.apply(s,o(o([],c),[l])),c=[]):c.push("0"),r<=0)break}s.length<i&&s.push.apply(s,"0".repeat(i-s.length).split("")),s.length>i&&s.splice(i,0,"."),this._cache[e.toString()+"|"+t.toString()]=(this._isNegative?"-":"")+s.join("")}},e.prototype.toBase=function(e){return this._base===e||(this._base=e),this},e.prototype.toString=function(e){return void 0===e&&(e=8),this._cache.hasOwnProperty(this._base.toString()+"|"+e.toString())||this.Convert(this._base,e),this._cache[this._base.toString()+"|"+e.toString()]},e.prototype.toNumber=function(e){return void 0===e&&(e=8),parseFloat(this.toString(e))},e}()},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),i=n("i2R6"),a=(n("qXWd"),n("48fX")),s=n("tCBg"),c=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var p=n("q1tI"),l=function(e){a(n,e);var t=u(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=l},bmeg:function(e,t,n){"use strict";var r=n("nKUr");t.a=function(){return Object(r.jsx)("div",{id:"geometry"})}},ddIo:function(e,t,n){"use strict";var r=n("nKUr"),o=n("g4pe"),i=n.n(o);t.a=function(e){var t=e.url,n=e.title,o=e.description,a=void 0===o?"DecimalSystem is a powerful base conversion library that can convert any (real) number to any base (over 1), including non-integer bases like base PI.":o,s=e.keywords,c=void 0===s?"base, radix, base converter, base convert, base conversion, number, number system, decimal, non-integer, non-int, hex, system, decimal system, decimalsystem":s,u=e.author,p=void 0===u?"Jonah Uellenberg":u;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:n}),Object(r.jsx)("meta",{property:"og:type",content:"website"}),Object(r.jsx)("meta",{property:"description",content:a}),Object(r.jsx)("meta",{property:"og:description",content:a}),Object(r.jsx)("meta",{property:"og:title",content:n}),Object(r.jsx)("meta",{property:"og:url",content:t}),Object(r.jsx)("link",{href:t,rel:"canonical"}),Object(r.jsx)("meta",{name:"author",content:p}),Object(r.jsx)("meta",{name:"keywords",content:c})]})})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),i=n("KckH"),a=n("kG2m");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},oBXg:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t,n){e.forEach((function(e){n.objects[e].label=t}))}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}}},[["FExj",0,1]]]);