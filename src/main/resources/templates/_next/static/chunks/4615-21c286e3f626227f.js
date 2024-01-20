"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4615],{54615:function(e,t,n){n.d(t,{Z:function(){return G}});var r,s,i=n(85893),a=n(67294),o=n(87462),l=n(63366),p=n(75068);function c(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var u=n(73935),d={disabled:!1},f=a.createContext(null),h=function(e){return e.scrollTop},v="unmounted",m="exited",x="entering",E="entered",g="exiting",y=function(e){function t(t,n){r=e.call(this,t,n)||this;var r,s,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(s=m,r.appearStatus=x):s=E:s=t.unmountOnExit||t.mountOnEnter?v:m,r.state={status:s},r.nextCallback=null,r}(0,p.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===v?{status:m}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==x&&n!==E&&(t=x):(n===x||n===E)&&(t=g)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===x){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this);n&&h(n)}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===m&&this.setState({status:v})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,s=this.props.nodeRef?[r]:[u.findDOMNode(this),r],i=s[0],a=s[1],o=this.getTimeouts(),l=r?o.appear:o.enter;if(!e&&!n||d.disabled){this.safeSetState({status:E},function(){t.props.onEntered(i)});return}this.props.onEnter(i,a),this.safeSetState({status:x},function(){t.props.onEntering(i,a),t.onTransitionEnd(l,function(){t.safeSetState({status:E},function(){t.props.onEntered(i,a)})})})},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:u.findDOMNode(this);if(!t||d.disabled){this.safeSetState({status:m},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:g},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:m},function(){e.props.onExited(r)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=s[0],a=s[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)},n.render=function(){var e=this.state.status;if(e===v)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,l.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(f.Provider,{value:null},"function"==typeof n?n(e,r):a.cloneElement(a.Children.only(n),r))},t}(a.Component);function b(){}y.contextType=f,y.propTypes={},y.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},y.UNMOUNTED=v,y.EXITED=m,y.ENTERING=x,y.ENTERED=E,y.EXITING=g;var C=function(e,t){return e&&t&&t.split(" ").forEach(function(t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=c(e.className,t):e.setAttribute("class",c(e.className&&e.className.baseVal||"",t))})},N=function(e){function t(){for(var t,n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),s=r[0],i=r[1];t.removeClasses(s,"exit"),t.addClass(s,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),s=r[0],i=r[1];t.addClass(s,i?"appear":"enter","active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),s=r[0],i=r[1]?"appear":"enter";t.removeClasses(s,i),t.addClass(s,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,s=r?(r&&n?n+"-":"")+e:n[e],i=r?s+"-active":n[e+"Active"],a=r?s+"-done":n[e+"Done"];return{baseClassName:s,activeClassName:i,doneClassName:a}},t}(0,p.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r,s=this.getClassNames(t)[n+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&i&&(s+=" "+i),"active"===n&&e&&h(e),s&&(this.appliedClasses[t][n]=s,r=s,e&&r&&r.split(" ").forEach(function(t){var n,r;return n=e,r=t,void(n.classList?n.classList.add(r):(n.classList?r&&n.classList.contains(r):-1!==(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+r+" "))||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)))}))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,s=n.active,i=n.done;this.appliedClasses[t]={},r&&C(e,r),s&&C(e,s),i&&C(e,i)},n.render=function(){var e=this.props,t=(e.classNames,(0,l.Z)(e,["classNames"]));return a.createElement(y,(0,o.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(a.Component);N.defaultProps={classNames:""},N.propTypes={};var k=n(8417),S=n(7906),O=n(70444);function w(e,t){if(void 0===e.inserted[t.name])return e.insert("",t,e.sheet,!0)}function R(e,t,n){var r=[],s=(0,O.fp)(e,r,n);return r.length<2?n:s+t(r)}var A=function e(t){for(var n="",r=0;r<t.length;r++){var s=t[r];if(null!=s){var i=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))i=e(s);else for(var a in i="",s)s[a]&&a&&(i&&(i+=" "),i+=a);break;default:i=s}i&&(n&&(n+=" "),n+=i)}}return n},j=((r=(0,k.Z)({key:"css"})).sheet.speedy=function(e){this.isSpeedy=e},r.compat=!0,{css:s=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var s=(0,S.O)(t,r.registered,void 0);return(0,O.My)(r,s,!1),r.key+"-"+s.name},cx:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return R(r.registered,s,A(t))},injectGlobal:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var s=(0,S.O)(t,r.registered);w(r,s)},keyframes:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var s=(0,S.O)(t,r.registered),i="animation-"+s.name;return w(r,{name:s.name,styles:"@keyframes "+i+"{"+s.styles+"}"}),i},hydrate:function(e){e.forEach(function(e){r.inserted[e]=!0})},flush:function(){r.registered={},r.inserted={},r.sheet.flush()},sheet:r.sheet,cache:r,getRegisteredStyles:O.fp.bind(null,r.registered),merge:R.bind(null,r.registered,s)}),T=(j.flush,j.hydrate,j.cx),D=(j.merge,j.getRegisteredStyles,j.injectGlobal,j.keyframes),L=j.css;function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){return(M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}j.sheet,j.cache;var P=function(e){return(0,i.jsx)("div",{className:e.cx("spinner",L(e.getStyles("spinner"),"","")),children:(0,i.jsx)("svg",{viewBox:"25 25 50 50",children:(0,i.jsx)("circle",{cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})})})},F=D({name:"1q8eu9e",styles:"from{transform:rotate(0deg);}to{transform:rotate(360deg);}"}),Z=D({name:"1ca1jnp",styles:"0%{stroke-dasharray:1,200;stroke-dashoffset:0;}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px;}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px;}"}),I={wrapper:function(e){return _({position:"relative"},e)},overlay:function(e,t){var n;return{position:"absolute",height:"100%",width:"100%",top:"0px",left:"0px",display:"flex",textAlign:"center",fontSize:"1.2em",color:"#FFF",backgroundColor:"rgba(0, 0, 0, 0.7)",zIndex:800,transition:"opacity "+(null!=(n=null==t?void 0:t.fadeSpeed)?n:500)+"ms ease-in",opacity:"entering"===e||"entered"===e?1:0}},content:function(){return{margin:"auto"}},spinner:function(){return{position:"relative",margin:"0px auto 10px auto",width:"50px",maxHeight:"100%","&:before":{content:'""',display:"block",paddingTop:"100%"},"& svg":{animation:F+" 2s linear infinite",height:"100%",transformOrigin:"center center",width:"100%",position:"absolute",top:"0",bottom:"0",left:"0",right:"0",margin:"auto","& circle":{animation:Z+" 1.5s ease-in-out infinite",strokeDasharray:"1,200",strokeDashoffset:0,strokeLinecap:"round",stroke:"#FFF"}}}}},U=function(e){function t(){for(var t,n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).wrapperEl=null,t.overlayRef=(0,a.createRef)(),t.state={overflowCSS:void 0},t.getStyles=function(e,n){var r,s,i=t.props.styles,a=void 0===i?{}:i,o=null==I?void 0:null==(r=I[e])?void 0:r.call(I,n,t.props),l=null!=(s=null==a?void 0:a[e])&&s;return l?"function"==typeof l?l(o,t.props):l:o},t.cx=function(e){for(var n=t.props.classNamePrefix,r=void 0===n?"_loading_overlay_":n,s=Array.isArray(e)?e:[e],i=arguments.length,a=Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return T.apply(void 0,s.map(function(e){return e?""+r+e:""}).concat(a))},t}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,M(t,e);var n=t.prototype;return n.componentDidMount=function(){var e,t;if(this.wrapperEl=null!=(e=null==(t=this.overlayRef.current)?void 0:t.parentElement)?e:null,null!==this.wrapperEl){var n=window.getComputedStyle(this.wrapperEl),r=["overflow","overflowX","overflowY"].reduce(function(e,t){return"visible"!==n[t]&&(e[t]="hidden"),e},{});this.setState({overflowCSS:r})}},n.componentDidUpdate=function(e){this.props.active!==e.active&&this.wrapperEl&&(this.wrapperEl.scrollTop=0)},n.render=function(){var e=this,t=this.state.overflowCSS,n=this.props,r=n.children,s=n.className,a=n.onClick,o=n.active,l=n.fadeSpeed,p=n.spinner,c=void 0===p||p,u=n.text,d=n.innerRef;return(0,i.jsxs)("div",{"data-testid":"wrapper",ref:d,className:this.cx(["wrapper",o&&"wrapper--active"],L(this.getStyles("wrapper",o?t:void 0),"",""),s),children:[(0,i.jsx)(N,{in:o,classNames:"_loading-overlay-transition",timeout:void 0===l?500:l,unmountOnExit:!0,nodeRef:this.overlayRef,children:function(t){return(0,i.jsx)("div",{ref:e.overlayRef,"data-testid":"overlay",className:e.cx("overlay",L(e.getStyles("overlay",t),"","")),onClick:a,children:(0,i.jsxs)("div",{className:e.cx("content",L(e.getStyles("content"),"","")),children:[c&&("boolean"==typeof c?(0,i.jsx)(P,{cx:e.cx,getStyles:e.getStyles}):c),u]})})}}),r]})},t}(a.PureComponent);U.displayName="LoadingOverlay";var G=(0,a.forwardRef)(function(e,t){return(0,i.jsx)(U,_({innerRef:t},e))})}}]);