(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5529],{54685:function(e,t,r){"use strict";r.d(t,{e:function(){return y}});var l=r(67294),n=r(64761),a=r(48427),o=r(95117),i=(0,r(56817).k)(()=>({root:{backgroundColor:"transparent",cursor:"pointer",padding:0,border:0}})),s=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))c.call(t,r)&&f(e,r,t[r]);return e},p=(e,t)=>{var r={};for(var l in e)d.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&u)for(var l of u(e))0>t.indexOf(l)&&c.call(e,l)&&(r[l]=e[l]);return r};let h={},b=(0,l.forwardRef)((e,t)=>{let r=(0,n.N4)("Anchor",h,e),{component:a,className:s,unstyled:u}=r,d=p(r,["component","className","unstyled"]),{classes:c,cx:f}=i(null,{name:"Anchor",unstyled:u});return l.createElement(o.x,m(m({component:a||"a",variant:"link",ref:t,className:f(c.root,s)},"button"===a?{type:"button"}:null),d))});b.displayName="@mantine/core/Anchor";let y=(0,a.F)(b)},93284:function(e,t,r){"use strict";r.d(t,{O:function(){return y}});var l=r(67294),n=r(64761),a=r(24241),o=(0,r(56817).k)(e=>({root:{display:"flex",alignItems:"center"},breadcrumb:{lineHeight:1,whiteSpace:"nowrap",WebkitTapHighlightColor:"transparent"},separator:{marginLeft:e.spacing.xs,marginRight:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[7],lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center"}})),i=r(95117),s=r(64523),u=Object.defineProperty,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(e,r,t[r]);if(d)for(var r of d(t))f.call(t,r)&&m(e,r,t[r]);return e},h=(e,t)=>{var r={};for(var l in e)c.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&d)for(var l of d(e))0>t.indexOf(l)&&f.call(e,l)&&(r[l]=e[l]);return r};let b={separator:"/"},y=(0,l.forwardRef)((e,t)=>{let r=(0,n.N4)("Breadcrumbs",b,e),{className:u,children:d,separator:c,classNames:f,styles:m,unstyled:y}=r,_=h(r,["className","children","separator","classNames","styles","unstyled"]),{classes:g,cx:v}=o(null,{classNames:f,styles:m,unstyled:y,name:"Breadcrumbs"}),w=l.Children.toArray(d).reduce((e,t,r,n)=>{var o;let s=(0,a.k)(t)?l.cloneElement(t,{className:v(g.breadcrumb,null==(o=t.props)?void 0:o.className),key:r}):l.createElement("div",{className:g.breadcrumb,key:r},t);return e.push(s),r!==n.length-1&&e.push(l.createElement(i.x,{size:"sm",className:g.separator,key:`separator-${r}`},c)),e},[]);return l.createElement(s.x,p({className:v(g.root,u),ref:t},_),w)});y.displayName="@mantine/core/Breadcrumbs"},67243:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chinh-sach-su-dung",function(){return r(6507)}])},95677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return o},default:function(){return i}});let l=r(38754),n=(r(67294),l._(r(8976)));function a(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}function i(e,t){let r=n.default,l={loading:e=>{let{error:t,isLoading:r,pastDelay:l}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l={...l,...e}),l={...l,...t};let i=l.loader;return(l.loadableGenerated&&(l={...l,...l.loadableGenerated},delete l.loadableGenerated),"boolean"!=typeof l.ssr||l.ssr)?r({...l,loader:()=>null!=i?i().then(a):Promise.resolve(a(()=>null))}):(delete l.webpack,delete l.modules,o(r,l))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return a}});let l=r(38754),n=l._(r(67294)),a=n.default.createContext(null)},8976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let l=r(38754),n=l._(r(67294)),a=r(92254),o=[],i=[],s=!1;function u(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),l=null;function o(){if(!l){let t=new d(e,r);l={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return l.promise()}if(!s){let e=r.webpack?r.webpack():r.modules;e&&i.push(t=>{for(let r of e)if(t.includes(r))return o()})}function u(e,t){!function(){o();let e=n.default.useContext(a.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let i=n.default.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:l.retry}),[]),n.default.useMemo(()=>{var t;return i.loading||i.error?n.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:l.retry}):i.loaded?n.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return u.preload=()=>o(),u.displayName="LoadableComponent",n.default.forwardRef(u)}(u,e)}function f(e,t){let r=[];for(;e.length;){let l=e.pop();r.push(l(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(o).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(s=!0,t());f(i,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let m=c},6507:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return h}});var l=r(35944),n=r(67294),a=r(9008),o=r.n(a),i=r(5152),s=r.n(i),u=r(93284),d=r(54685),c=r(63105),f=r.n(c),m=r(76441);let p=s()(()=>Promise.all([r.e(9755),r.e(2521),r.e(8910),r.e(6991),r.e(2214),r.e(5602),r.e(1804)]).then(r.bind(r,15602)),{loadableGenerated:{webpack:()=>[15602]}});var h=!0;t.default=e=>{let{datalist:t}=e,[r,a]=(0,n.useState)({});(0,n.useEffect)(()=>{let e=f()(t,{slug:"chinh-sach-su-dung"});a(e[0])},[]);let i={title:r.title};return(0,l.BX)("div",{children:[(0,l.tZ)(o(),{children:(0,l.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Trang chủ",item:"".concat(m.GX)},{"@type":"ListItem",position:2,name:"".concat(null==r?void 0:r.title)}]})}})}),(0,l.tZ)(p,{meta:i,children:(0,l.BX)("div",{className:"container",children:[(0,l.BX)(u.O,{className:"no-scrollbar flex overflow-visible overflow-x-scroll py-2 max-md:px-2 max-md:text-12",children:[(0,l.tZ)(d.e,{className:"text-black",href:"/",children:"Trang chủ"}),(0,l.tZ)(d.e,{className:"text-ddv",children:r.title})]}),(0,l.BX)("div",{className:"my-2 grid w-full grid-cols-4 justify-between gap-4 max-md:grid-cols-3",children:[(0,l.tZ)("div",{className:"col-span-1 max-md:hidden",children:(0,l.tZ)("div",{className:"mb-2 flex w-full flex-col justify-between divide-y rounded bg-white py-2",children:t.map((e,t)=>(0,l.tZ)("a",{title:e.title,href:"/".concat(e.slug),children:(0,l.tZ)("p",{className:"p-2 text-left text-16 ".concat("chinh-sach-su-dung"===e.slug?"border-r-4 border-ddv bg-ddvbglight font-bold text-ddv":"bg-white text-black "),children:e.title})},t))})}),(0,l.tZ)("div",{className:"col-span-3",children:(0,l.tZ)("div",{className:"mb-2 flex w-full flex-col justify-between rounded bg-white py-2 px-2",children:(0,l.tZ)("div",{className:"relative break-words p-2 text-18 antialiased",dangerouslySetInnerHTML:{__html:null==r?void 0:r.content}})})})]})]})})]})}},5152:function(e,t,r){e.exports=r(95677)}},function(e){e.O(0,[3105,9774,2888,179],function(){return e(e.s=67243)}),_N_E=e.O()}]);