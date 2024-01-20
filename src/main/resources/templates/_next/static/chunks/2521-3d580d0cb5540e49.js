"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2521],{2521:function(e,r,t){t.d(r,{U:function(){return e3}});var o=t(67294),n=t(64761);function a(e,r){return t=>{if("string"!=typeof t||0===t.trim().length)throw Error(r);return`${e}-${t}`}}var i=t(36289),l=t(15851),c=t(68216);let s={context:"Accordion component was not found in the tree",itemContext:"Accordion.Item component was not found in the tree",value:"Accordion.Item component was rendered with invalid value or without value"},[d,f]=(0,c.R)(s.context);function u({children:e,multiple:r,value:t,defaultValue:n,onChange:c,id:f,loop:u,transitionDuration:p,disableChevronRotation:m,chevronPosition:b,chevronSize:y,order:v,chevron:g,variant:h,radius:O,classNames:w,styles:j,unstyled:x}){let P=(0,i.M)(f),[C,k]=(0,l.C)({value:t,defaultValue:n,finalValue:r?[]:null,onChange:c});return o.createElement(d,{value:{isItemActive:e=>Array.isArray(C)?C.includes(e):e===C,onChange:e=>{let r=Array.isArray(C)?C.includes(e)?C.filter(r=>r!==e):[...C,e]:e===C?null:e;k(r)},getControlId:a(`${P}-control`,s.value),getRegionId:a(`${P}-panel`,s.value),transitionDuration:p,disableChevronRotation:m,chevronPosition:b,chevronSize:y,order:v,chevron:g,loop:u,variant:h,radius:O,classNames:w,styles:j,unstyled:x}},e)}let[p,m]=(0,c.R)(s.itemContext);var b=t(56817),y=(0,b.k)((e,r)=>({item:function(e,{variant:r,radius:t}){let o="dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3],n="dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],a=e.fn.radius(t);return"default"===r?{color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,borderBottom:`1px solid ${o}`}:"contained"===r?{border:`1px solid ${o}`,transition:"background-color 150ms ease","&[data-active]":{backgroundColor:n},"&:first-of-type":{borderTopRightRadius:a,borderTopLeftRadius:a,"& > [data-accordion-control]":{borderTopRightRadius:a,borderTopLeftRadius:a}},"&:last-of-type":{borderBottomRightRadius:a,borderBottomLeftRadius:a,"& > [data-accordion-control]":{borderBottomRightRadius:a,borderBottomLeftRadius:a}},"& + &":{borderTop:0}}:"filled"===r?{borderRadius:a,"&[data-active]":{backgroundColor:n}}:"separated"===r?{borderRadius:a,backgroundColor:n,border:"1px solid transparent",transition:"background-color 150ms ease","& + &":{marginTop:e.spacing.md},"&[data-active]":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,borderColor:o}}:{}}(e,r)})),v=t(64523),g=Object.defineProperty,h=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,j=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))O.call(r,t)&&j(e,t,r[t]);if(h)for(var t of h(r))w.call(r,t)&&j(e,t,r[t]);return e},P=(e,r)=>{var t={};for(var o in e)O.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&h)for(var o of h(e))0>r.indexOf(o)&&w.call(e,o)&&(t[o]=e[o]);return t};let C={},k=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("AccordionItem",C,e),{children:a,className:i,value:l}=t,c=P(t,["children","className","value"]),s=f(),{classes:d,cx:u}=y({variant:s.variant,radius:s.radius},{name:"Accordion",classNames:s.classNames,styles:s.styles,unstyled:s.unstyled});return o.createElement(p,{value:{value:l}},o.createElement(v.x,x({ref:r,className:u(d.item,i),"data-active":s.isItemActive(l)||void 0},c),a))});k.displayName="@mantine/core/AccordionItem";var E=t(16650),R=Object.defineProperty,N=Object.defineProperties,S=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,$=(e,r,t)=>r in e?R(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,T=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&$(e,t,r[t]);if(I)for(var t of I(r))D.call(r,t)&&$(e,t,r[t]);return e},L=(e,r)=>N(e,S(r)),B=(e,r)=>{var t={};for(var o in e)A.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&I)for(var o of I(e))0>r.indexOf(o)&&D.call(e,o)&&(t[o]=e[o]);return t},z=(0,b.k)((e,r)=>{var{transitionDuration:t,chevronPosition:o,chevronSize:n}=r,a=B(r,["transitionDuration","chevronPosition","chevronSize"]);return{icon:{display:"flex",alignItems:"center",justifyContent:"center",marginRight:"left"===o?0:e.spacing.sm,marginLeft:"left"===o?e.spacing.lg:0},chevron:{display:"flex",alignItems:"center",justifyContent:"center",transition:`transform ${t}ms ease`,marginRight:"right"===o?0:e.spacing.sm,marginLeft:"right"===o?e.spacing.lg:0,width:n,minWidth:n,"&[data-rotate]":{transform:"rotate(180deg)"}},label:{color:"inherit",fontWeight:400,flex:1,overflow:"hidden",textOverflow:"ellipsis"},itemTitle:{margin:0,padding:0},control:L(T(T(T({},e.fn.focusStyles()),e.fn.fontStyles()),function(e,{variant:r}){return"default"===r||"contained"===r?e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]}):{}}(e,a)),{width:"100%",display:"flex",alignItems:"center",flexDirection:"right"===o?"row-reverse":"row",padding:`${e.spacing.md}px ${e.spacing.md/2}px`,paddingLeft:"right"===o?`calc(${e.spacing.sm}px + 4px)`:null,textAlign:"left",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,"&:disabled":T({opacity:.4,cursor:"not-allowed"},e.fn.hover({backgroundColor:"transparent"}))})}}),F=t(34736),M=Object.defineProperty,_=Object.defineProperties,H=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,Z=(e,r,t)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,q=(e,r)=>{for(var t in r||(r={}))V.call(r,t)&&Z(e,t,r[t]);if(K)for(var t of K(r))W.call(r,t)&&Z(e,t,r[t]);return e},J=(e,r)=>_(e,H(r)),U=(e,r)=>{var t={};for(var o in e)V.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&K)for(var o of K(e))0>r.indexOf(o)&&W.call(e,o)&&(t[o]=e[o]);return t};let G={},Q=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("AccordionControl",G,e),{disabled:a,onKeyDown:i,onClick:l,chevron:c,children:s,className:d,icon:u}=t,p=U(t,["disabled","onKeyDown","onClick","chevron","children","className","icon"]),b=f(),{value:y}=m(),{classes:v,cx:g}=z({transitionDuration:b.transitionDuration,chevronPosition:b.chevronPosition,chevronSize:b.chevronSize,variant:b.variant,radius:b.radius},{name:"Accordion",classNames:b.classNames,styles:b.styles,unstyled:b.unstyled}),h=b.isItemActive(y),O="number"==typeof b.order,w=`h${b.order}`,j=o.createElement(F.k,J(q({},p),{ref:r,"data-accordion-control":!0,disabled:a,className:g(v.control,d),onClick:e=>{null==l||l(e),b.onChange(y)},type:"button","data-active":h||void 0,"aria-expanded":h,"aria-controls":b.getRegionId(y),id:b.getControlId(y),unstyled:b.unstyled,onKeyDown:(0,E.R)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:b.loop,orientation:"vertical",onKeyDown:i})}),o.createElement("div",{className:v.chevron,"data-rotate":!b.disableChevronRotation&&h||void 0},c||b.chevron),o.createElement("div",{className:v.label},s),u&&o.createElement("div",{className:v.icon},u));return O?o.createElement(w,{className:v.itemTitle},j):j});Q.displayName="@mantine/core/AccordionControl";var X=Object.defineProperty,Y=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,er=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,eo=Object.prototype.propertyIsEnumerable,en=(e,r,t)=>r in e?X(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ea=(e,r)=>{for(var t in r||(r={}))et.call(r,t)&&en(e,t,r[t]);if(er)for(var t of er(r))eo.call(r,t)&&en(e,t,r[t]);return e},ei=(e,r)=>Y(e,ee(r)),el=(0,b.k)((e,r)=>({panel:ei(ea({},e.fn.fontStyles()),{wordBreak:"break-word",lineHeight:e.lineHeight}),content:{padding:e.spacing.md,paddingTop:`calc(${e.spacing.xs}px / 2)`}})),ec=t(73678),es=t(73935),ed=t(37048),ef=t(34731),eu=Object.defineProperty,ep=Object.defineProperties,em=Object.getOwnPropertyDescriptors,eb=Object.getOwnPropertySymbols,ey=Object.prototype.hasOwnProperty,ev=Object.prototype.propertyIsEnumerable,eg=(e,r,t)=>r in e?eu(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eh=(e,r)=>{for(var t in r||(r={}))ey.call(r,t)&&eg(e,t,r[t]);if(eb)for(var t of eb(r))ev.call(r,t)&&eg(e,t,r[t]);return e},eO=(e,r)=>ep(e,em(r)),ew=(e,r)=>{var t={};for(var o in e)ey.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&eb)for(var o of eb(e))0>r.indexOf(o)&&ev.call(e,o)&&(t[o]=e[o]);return t};function ej(e){return(null==e?void 0:e.current)?e.current.scrollHeight:"auto"}let ex="undefined"!=typeof window&&window.requestAnimationFrame;var eP=t(12756),eC=Object.defineProperty,ek=Object.getOwnPropertySymbols,eE=Object.prototype.hasOwnProperty,eR=Object.prototype.propertyIsEnumerable,eN=(e,r,t)=>r in e?eC(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eS=(e,r)=>{for(var t in r||(r={}))eE.call(r,t)&&eN(e,t,r[t]);if(ek)for(var t of ek(r))eR.call(r,t)&&eN(e,t,r[t]);return e},eI=(e,r)=>{var t={};for(var o in e)eE.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&ek)for(var o of ek(e))0>r.indexOf(o)&&eR.call(e,o)&&(t[o]=e[o]);return t};let eA={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},eD=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Collapse",eA,e),{children:a,in:i,transitionDuration:l,transitionTimingFunction:c,style:s,onTransitionEnd:d,animateOpacity:f}=t,u=eI(t,["children","in","transitionDuration","transitionTimingFunction","style","onTransitionEnd","animateOpacity"]),p=(0,n.rZ)(),m=(0,ec.J)(),b=!!p.respectReducedMotion&&m,y=b?0:l,{systemStyles:g,rest:h}=(0,eP.x)(u),O=function({transitionDuration:e,transitionTimingFunction:r="ease",onTransitionEnd:t=()=>{},opened:n}){let a=(0,o.useRef)(null),i={display:"none",height:"0px",overflow:"hidden"},[l,c]=(0,o.useState)(n?{}:i),s=e=>{(0,es.flushSync)(()=>c(e))},d=e=>{s(r=>eh(eh({},r),e))};function f(t){let o=e||function(e){if(!e||"string"==typeof e)return 0;let r=e/36;return Math.round((4+15*r**.25+r/5)*10)}(t);return{transition:`height ${o}ms ${r}`}}(0,ed.l)(()=>{n?ex(()=>{d({willChange:"height",display:"block",overflow:"hidden"}),ex(()=>{let e=ej(a);d(eO(eh({},f(e)),{height:e}))})}):ex(()=>{let e=ej(a);d(eO(eh({},f(e)),{willChange:"height",height:e})),ex(()=>d({height:"0px",overflow:"hidden"}))})},[n]);let u=e=>{if(e.target===a.current&&"height"===e.propertyName){if(n){let e=ej(a);e===l.height?s({}):d({height:e}),t()}else"0px"===l.height&&(s(i),t())}};return function(e={}){var{style:r={},refKey:t="ref"}=e,o=ew(e,["style","refKey"]);let i=o[t];return eO(eh({"aria-hidden":!n},o),{[t]:(0,ef.l)(a,i),onTransitionEnd:u,style:eh(eh({boxSizing:"border-box"},r),l)})}}({opened:i,transitionDuration:y,transitionTimingFunction:c,onTransitionEnd:d});return 0===y?i?o.createElement(v.x,eS({},h),a):null:o.createElement(v.x,eS({},O(eS(eS({style:s,ref:r},h),g))),o.createElement("div",{style:{opacity:i||!f?1:0,transition:f?`opacity ${y}ms ${c}`:"none"}},a))});eD.displayName="@mantine/core/Collapse";var e$=Object.defineProperty,eT=Object.defineProperties,eL=Object.getOwnPropertyDescriptors,eB=Object.getOwnPropertySymbols,ez=Object.prototype.hasOwnProperty,eF=Object.prototype.propertyIsEnumerable,eM=(e,r,t)=>r in e?e$(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,e_=(e,r)=>{for(var t in r||(r={}))ez.call(r,t)&&eM(e,t,r[t]);if(eB)for(var t of eB(r))eF.call(r,t)&&eM(e,t,r[t]);return e},eH=(e,r)=>eT(e,eL(r)),eK=(e,r)=>{var t={};for(var o in e)ez.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&eB)for(var o of eB(e))0>r.indexOf(o)&&eF.call(e,o)&&(t[o]=e[o]);return t};let eV={};function eW(e){let r=(0,n.N4)("AccordionPanel",eV,e),{children:t,className:a}=r,i=eK(r,["children","className"]),l=f(),{value:c}=m(),{classNames:s,styles:d,unstyled:u}=f(),{classes:p,cx:b}=el({variant:l.variant,radius:l.radius},{name:"Accordion",classNames:s,styles:d,unstyled:u});return o.createElement(eD,eH(e_({},i),{className:b(p.panel,a),in:l.isItemActive(c),transitionDuration:l.transitionDuration,role:"region",id:l.getRegionId(c),"aria-labelledby":l.getControlId(c)}),o.createElement("div",{className:p.content},t))}eW.displayName="@mantine/core/AccordionPanel";var eZ=t(56057),eq=Object.defineProperty,eJ=Object.defineProperties,eU=Object.getOwnPropertyDescriptors,eG=Object.getOwnPropertySymbols,eQ=Object.prototype.hasOwnProperty,eX=Object.prototype.propertyIsEnumerable,eY=(e,r,t)=>r in e?eq(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,e0=(e,r)=>{for(var t in r||(r={}))eQ.call(r,t)&&eY(e,t,r[t]);if(eG)for(var t of eG(r))eX.call(r,t)&&eY(e,t,r[t]);return e},e1=(e,r)=>eJ(e,eU(r)),e5=(e,r)=>{var t={};for(var o in e)eQ.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&eG)for(var o of eG(e))0>r.indexOf(o)&&eX.call(e,o)&&(t[o]=e[o]);return t};let e6={multiple:!1,disableChevronRotation:!1,transitionDuration:200,chevronPosition:"right",variant:"default",chevronSize:24,chevron:o.createElement(eZ.D,null)};function e3(e){let r=(0,n.N4)("Accordion",e6,e),{id:t,loop:a,children:i,multiple:l,value:c,defaultValue:s,onChange:d,transitionDuration:f,disableChevronRotation:p,chevronPosition:m,chevronSize:b,order:y,chevron:g,classNames:h,styles:O,unstyled:w,variant:j,radius:x}=r,P=e5(r,["id","loop","children","multiple","value","defaultValue","onChange","transitionDuration","disableChevronRotation","chevronPosition","chevronSize","order","chevron","classNames","styles","unstyled","variant","radius"]);return o.createElement(u,{id:t,multiple:l,value:c,defaultValue:s,onChange:d,loop:a,transitionDuration:f,disableChevronRotation:p,chevronPosition:m,chevronSize:b,order:y,chevron:g,variant:j,radius:x,classNames:h,styles:O,unstyled:w},o.createElement(v.x,e1(e0({},P),{"data-accordion":!0}),i))}e3.Item=k,e3.Control=Q,e3.Panel=eW,e3.displayName="@mantine/core/Accordion"},56057:function(e,r,t){t.d(r,{D:function(){return d}});var o=t(67294),n=Object.defineProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&c(e,t,r[t]);if(a)for(var t of a(r))l.call(r,t)&&c(e,t,r[t]);return e};function d(e){return o.createElement("svg",s({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:16,height:16},e),o.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}}}]);