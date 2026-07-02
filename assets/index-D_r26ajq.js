(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();var Lm={exports:{}},Rd={};var b0;function zb(){if(b0)return Rd;b0=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(s,l,d){var m=null;if(d!==void 0&&(m=""+d),l.key!==void 0&&(m=""+l.key),"key"in l){d={};for(var p in l)p!=="key"&&(d[p]=l[p])}else d=l;return l=d.ref,{$$typeof:r,type:s,key:m,ref:l!==void 0?l:null,props:d}}return Rd.Fragment=n,Rd.jsx=i,Rd.jsxs=i,Rd}var w0;function Gb(){return w0||(w0=1,Lm.exports=zb()),Lm.exports}var u=Gb(),Dm={exports:{}},Je={};var S0;function Vb(){if(S0)return Je;S0=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),M=Symbol.iterator;function A(k){return k===null||typeof k!="object"?null:(k=M&&k[M]||k["@@iterator"],typeof k=="function"?k:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,H={};function K(k,te,de){this.props=k,this.context=te,this.refs=H,this.updater=de||D}K.prototype.isReactComponent={},K.prototype.setState=function(k,te){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,te,"setState")},K.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function ae(){}ae.prototype=K.prototype;function F(k,te,de){this.props=k,this.context=te,this.refs=H,this.updater=de||D}var Z=F.prototype=new ae;Z.constructor=F,B(Z,K.prototype),Z.isPureReactComponent=!0;var W=Array.isArray;function ee(){}var q={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function pe(k,te,de){var xe=de.ref;return{$$typeof:r,type:k,key:te,ref:xe!==void 0?xe:null,props:de}}function oe(k,te){return pe(k.type,te,k.props)}function Te(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function Oe(k){var te={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(de){return te[de]})}var ke=/\/+/g;function qe(k,te){return typeof k=="object"&&k!==null&&k.key!=null?Oe(""+k.key):te.toString(36)}function ot(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(ee,ee):(k.status="pending",k.then(function(te){k.status==="pending"&&(k.status="fulfilled",k.value=te)},function(te){k.status==="pending"&&(k.status="rejected",k.reason=te)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function P(k,te,de,xe,Ae){var Ze=typeof k;(Ze==="undefined"||Ze==="boolean")&&(k=null);var Ve=!1;if(k===null)Ve=!0;else switch(Ze){case"bigint":case"string":case"number":Ve=!0;break;case"object":switch(k.$$typeof){case r:case n:Ve=!0;break;case y:return Ve=k._init,P(Ve(k._payload),te,de,xe,Ae)}}if(Ve)return Ae=Ae(k),Ve=xe===""?"."+qe(k,0):xe,W(Ae)?(de="",Ve!=null&&(de=Ve.replace(ke,"$&/")+"/"),P(Ae,te,de,"",function(da){return da})):Ae!=null&&(Te(Ae)&&(Ae=oe(Ae,de+(Ae.key==null||k&&k.key===Ae.key?"":(""+Ae.key).replace(ke,"$&/")+"/")+Ve)),te.push(Ae)),1;Ve=0;var mt=xe===""?".":xe+":";if(W(k))for(var Zt=0;Zt<k.length;Zt++)xe=k[Zt],Ze=mt+qe(xe,Zt),Ve+=P(xe,te,de,Ze,Ae);else if(Zt=A(k),typeof Zt=="function")for(k=Zt.call(k),Zt=0;!(xe=k.next()).done;)xe=xe.value,Ze=mt+qe(xe,Zt++),Ve+=P(xe,te,de,Ze,Ae);else if(Ze==="object"){if(typeof k.then=="function")return P(ot(k),te,de,xe,Ae);throw te=String(k),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return Ve}function ce(k,te,de){if(k==null)return k;var xe=[],Ae=0;return P(k,xe,"","",function(Ze){return te.call(de,Ze,Ae++)}),xe}function ve(k){if(k._status===-1){var te=k._result;te=te(),te.then(function(de){(k._status===0||k._status===-1)&&(k._status=1,k._result=de)},function(de){(k._status===0||k._status===-1)&&(k._status=2,k._result=de)}),k._status===-1&&(k._status=0,k._result=te)}if(k._status===1)return k._result.default;throw k._result}var at=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},tt={map:ce,forEach:function(k,te,de){ce(k,function(){te.apply(this,arguments)},de)},count:function(k){var te=0;return ce(k,function(){te++}),te},toArray:function(k){return ce(k,function(te){return te})||[]},only:function(k){if(!Te(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return Je.Activity=E,Je.Children=tt,Je.Component=K,Je.Fragment=i,Je.Profiler=l,Je.PureComponent=F,Je.StrictMode=s,Je.Suspense=g,Je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,Je.__COMPILER_RUNTIME={__proto__:null,c:function(k){return q.H.useMemoCache(k)}},Je.cache=function(k){return function(){return k.apply(null,arguments)}},Je.cacheSignal=function(){return null},Je.cloneElement=function(k,te,de){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var xe=B({},k.props),Ae=k.key;if(te!=null)for(Ze in te.key!==void 0&&(Ae=""+te.key),te)!J.call(te,Ze)||Ze==="key"||Ze==="__self"||Ze==="__source"||Ze==="ref"&&te.ref===void 0||(xe[Ze]=te[Ze]);var Ze=arguments.length-2;if(Ze===1)xe.children=de;else if(1<Ze){for(var Ve=Array(Ze),mt=0;mt<Ze;mt++)Ve[mt]=arguments[mt+2];xe.children=Ve}return pe(k.type,Ae,xe)},Je.createContext=function(k){return k={$$typeof:m,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:d,_context:k},k},Je.createElement=function(k,te,de){var xe,Ae={},Ze=null;if(te!=null)for(xe in te.key!==void 0&&(Ze=""+te.key),te)J.call(te,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(Ae[xe]=te[xe]);var Ve=arguments.length-2;if(Ve===1)Ae.children=de;else if(1<Ve){for(var mt=Array(Ve),Zt=0;Zt<Ve;Zt++)mt[Zt]=arguments[Zt+2];Ae.children=mt}if(k&&k.defaultProps)for(xe in Ve=k.defaultProps,Ve)Ae[xe]===void 0&&(Ae[xe]=Ve[xe]);return pe(k,Ze,Ae)},Je.createRef=function(){return{current:null}},Je.forwardRef=function(k){return{$$typeof:p,render:k}},Je.isValidElement=Te,Je.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:ve}},Je.memo=function(k,te){return{$$typeof:v,type:k,compare:te===void 0?null:te}},Je.startTransition=function(k){var te=q.T,de={};q.T=de;try{var xe=k(),Ae=q.S;Ae!==null&&Ae(de,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(ee,at)}catch(Ze){at(Ze)}finally{te!==null&&de.types!==null&&(te.types=de.types),q.T=te}},Je.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},Je.use=function(k){return q.H.use(k)},Je.useActionState=function(k,te,de){return q.H.useActionState(k,te,de)},Je.useCallback=function(k,te){return q.H.useCallback(k,te)},Je.useContext=function(k){return q.H.useContext(k)},Je.useDebugValue=function(){},Je.useDeferredValue=function(k,te){return q.H.useDeferredValue(k,te)},Je.useEffect=function(k,te){return q.H.useEffect(k,te)},Je.useEffectEvent=function(k){return q.H.useEffectEvent(k)},Je.useId=function(){return q.H.useId()},Je.useImperativeHandle=function(k,te,de){return q.H.useImperativeHandle(k,te,de)},Je.useInsertionEffect=function(k,te){return q.H.useInsertionEffect(k,te)},Je.useLayoutEffect=function(k,te){return q.H.useLayoutEffect(k,te)},Je.useMemo=function(k,te){return q.H.useMemo(k,te)},Je.useOptimistic=function(k,te){return q.H.useOptimistic(k,te)},Je.useReducer=function(k,te,de){return q.H.useReducer(k,te,de)},Je.useRef=function(k){return q.H.useRef(k)},Je.useState=function(k){return q.H.useState(k)},Je.useSyncExternalStore=function(k,te,de){return q.H.useSyncExternalStore(k,te,de)},Je.useTransition=function(){return q.H.useTransition()},Je.version="19.2.4",Je}var x0;function Ip(){return x0||(x0=1,Dm.exports=Vb()),Dm.exports}var x=Ip(),Um={exports:{}},Nd={},Pm={exports:{}},Bm={};var _0;function Hb(){return _0||(_0=1,(function(r){function n(P,ce){var ve=P.length;P.push(ce);e:for(;0<ve;){var at=ve-1>>>1,tt=P[at];if(0<l(tt,ce))P[at]=ce,P[ve]=tt,ve=at;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var ce=P[0],ve=P.pop();if(ve!==ce){P[0]=ve;e:for(var at=0,tt=P.length,k=tt>>>1;at<k;){var te=2*(at+1)-1,de=P[te],xe=te+1,Ae=P[xe];if(0>l(de,ve))xe<tt&&0>l(Ae,de)?(P[at]=Ae,P[xe]=ve,at=xe):(P[at]=de,P[te]=ve,at=te);else if(xe<tt&&0>l(Ae,ve))P[at]=Ae,P[xe]=ve,at=xe;else break e}}return ce}function l(P,ce){var ve=P.sortIndex-ce.sortIndex;return ve!==0?ve:P.id-ce.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var m=Date,p=m.now();r.unstable_now=function(){return m.now()-p}}var g=[],v=[],y=1,E=null,M=3,A=!1,D=!1,B=!1,H=!1,K=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function Z(P){for(var ce=i(v);ce!==null;){if(ce.callback===null)s(v);else if(ce.startTime<=P)s(v),ce.sortIndex=ce.expirationTime,n(g,ce);else break;ce=i(v)}}function W(P){if(B=!1,Z(P),!D)if(i(g)!==null)D=!0,ee||(ee=!0,Oe());else{var ce=i(v);ce!==null&&ot(W,ce.startTime-P)}}var ee=!1,q=-1,J=5,pe=-1;function oe(){return H?!0:!(r.unstable_now()-pe<J)}function Te(){if(H=!1,ee){var P=r.unstable_now();pe=P;var ce=!0;try{e:{D=!1,B&&(B=!1,ae(q),q=-1),A=!0;var ve=M;try{t:{for(Z(P),E=i(g);E!==null&&!(E.expirationTime>P&&oe());){var at=E.callback;if(typeof at=="function"){E.callback=null,M=E.priorityLevel;var tt=at(E.expirationTime<=P);if(P=r.unstable_now(),typeof tt=="function"){E.callback=tt,Z(P),ce=!0;break t}E===i(g)&&s(g),Z(P)}else s(g);E=i(g)}if(E!==null)ce=!0;else{var k=i(v);k!==null&&ot(W,k.startTime-P),ce=!1}}break e}finally{E=null,M=ve,A=!1}ce=void 0}}finally{ce?Oe():ee=!1}}}var Oe;if(typeof F=="function")Oe=function(){F(Te)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,qe=ke.port2;ke.port1.onmessage=Te,Oe=function(){qe.postMessage(null)}}else Oe=function(){K(Te,0)};function ot(P,ce){q=K(function(){P(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return M},r.unstable_next=function(P){switch(M){case 1:case 2:case 3:var ce=3;break;default:ce=M}var ve=M;M=ce;try{return P()}finally{M=ve}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(P,ce){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ve=M;M=P;try{return ce()}finally{M=ve}},r.unstable_scheduleCallback=function(P,ce,ve){var at=r.unstable_now();switch(typeof ve=="object"&&ve!==null?(ve=ve.delay,ve=typeof ve=="number"&&0<ve?at+ve:at):ve=at,P){case 1:var tt=-1;break;case 2:tt=250;break;case 5:tt=1073741823;break;case 4:tt=1e4;break;default:tt=5e3}return tt=ve+tt,P={id:y++,callback:ce,priorityLevel:P,startTime:ve,expirationTime:tt,sortIndex:-1},ve>at?(P.sortIndex=ve,n(v,P),i(g)===null&&P===i(v)&&(B?(ae(q),q=-1):B=!0,ot(W,ve-at))):(P.sortIndex=tt,n(g,P),D||A||(D=!0,ee||(ee=!0,Oe()))),P},r.unstable_shouldYield=oe,r.unstable_wrapCallback=function(P){var ce=M;return function(){var ve=M;M=ce;try{return P.apply(this,arguments)}finally{M=ve}}}})(Bm)),Bm}var E0;function $b(){return E0||(E0=1,Pm.exports=Hb()),Pm.exports}var zm={exports:{}},ja={};var C0;function Fb(){if(C0)return ja;C0=1;var r=Ip();function n(g){var v="https://react.dev/errors/"+g;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)v+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function d(g,v,y){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:""+E,children:g,containerInfo:v,implementation:y}}var m=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,v){if(g==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return ja.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ja.createPortal=function(g,v){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(n(299));return d(g,v,null,y)},ja.flushSync=function(g){var v=m.T,y=s.p;try{if(m.T=null,s.p=2,g)return g()}finally{m.T=v,s.p=y,s.d.f()}},ja.preconnect=function(g,v){typeof g=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(g,v))},ja.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},ja.preinit=function(g,v){if(typeof g=="string"&&v&&typeof v.as=="string"){var y=v.as,E=p(y,v.crossOrigin),M=typeof v.integrity=="string"?v.integrity:void 0,A=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;y==="style"?s.d.S(g,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:E,integrity:M,fetchPriority:A}):y==="script"&&s.d.X(g,{crossOrigin:E,integrity:M,fetchPriority:A,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},ja.preinitModule=function(g,v){if(typeof g=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var y=p(v.as,v.crossOrigin);s.d.M(g,{crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&s.d.M(g)},ja.preload=function(g,v){if(typeof g=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var y=v.as,E=p(y,v.crossOrigin);s.d.L(g,y,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},ja.preloadModule=function(g,v){if(typeof g=="string")if(v){var y=p(v.as,v.crossOrigin);s.d.m(g,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else s.d.m(g)},ja.requestFormReset=function(g){s.d.r(g)},ja.unstable_batchedUpdates=function(g,v){return g(v)},ja.useFormState=function(g,v,y){return m.H.useFormState(g,v,y)},ja.useFormStatus=function(){return m.H.useHostTransitionStatus()},ja.version="19.2.4",ja}var T0;function Wb(){if(T0)return zm.exports;T0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),zm.exports=Fb(),zm.exports}var M0;function qb(){if(M0)return Nd;M0=1;var r=$b(),n=Ip(),i=Wb();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(s(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,o=t;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return g(c),e;if(h===o)return g(c),t;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=h;else{for(var w=!1,_=c.child;_;){if(_===a){w=!0,a=c,o=h;break}if(_===o){w=!0,o=c,a=h;break}_=_.sibling}if(!w){for(_=h.child;_;){if(_===a){w=!0,a=h,o=c;break}if(_===o){w=!0,o=h,a=c;break}_=_.sibling}if(!w)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,M=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ae=Symbol.for("react.consumer"),F=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),Te=Symbol.iterator;function Oe(e){return e===null||typeof e!="object"?null:(e=Te&&e[Te]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Symbol.for("react.client.reference");function qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case K:return"Profiler";case H:return"StrictMode";case W:return"Suspense";case ee:return"SuspenseList";case pe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case D:return"Portal";case F:return e.displayName||"Context";case ae:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:qe(e.type)||"Memo";case J:t=e._payload,e=e._init;try{return qe(e(t))}catch{}}return null}var ot=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve={pending:!1,data:null,method:null,action:null},at=[],tt=-1;function k(e){return{current:e}}function te(e){0>tt||(e.current=at[tt],at[tt]=null,tt--)}function de(e,t){tt++,at[tt]=e.current,e.current=t}var xe=k(null),Ae=k(null),Ze=k(null),Ve=k(null);function mt(e,t){switch(de(Ze,t),de(Ae,e),de(xe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vg(t),e=Hg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}te(xe),de(xe,e)}function Zt(){te(xe),te(Ae),te(Ze)}function da(e){e.memoizedState!==null&&de(Ve,e);var t=xe.current,a=Hg(t,e.type);t!==a&&(de(Ae,e),de(xe,a))}function Vr(e){Ae.current===e&&(te(xe),te(Ae)),Ve.current===e&&(te(Ve),Cd._currentValue=ve)}var Rs,co;function fe(e){if(Rs===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Rs=t&&t[1]||"",co=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rs+e+co}var ue=!1;function _e(e,t){if(!e||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(Y){var $=Y}Reflect.construct(e,[],ie)}else{try{ie.call()}catch(Y){$=Y}e.call(ie.prototype)}}else{try{throw Error()}catch(Y){$=Y}(ie=e())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(Y){if(Y&&$&&typeof Y.stack=="string")return[Y.stack,$.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),w=h[0],_=h[1];if(w&&_){var N=w.split(`
`),V=_.split(`
`);for(c=o=0;o<N.length&&!N[o].includes("DetermineComponentFrameRoot");)o++;for(;c<V.length&&!V[c].includes("DetermineComponentFrameRoot");)c++;if(o===N.length||c===V.length)for(o=N.length-1,c=V.length-1;1<=o&&0<=c&&N[o]!==V[c];)c--;for(;1<=o&&0<=c;o--,c--)if(N[o]!==V[c]){if(o!==1||c!==1)do if(o--,c--,0>c||N[o]!==V[c]){var ne=`
`+N[o].replace(" at new "," at ");return e.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",e.displayName)),ne}while(1<=o&&0<=c);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?fe(a):""}function Qe(e,t){switch(e.tag){case 26:case 27:case 5:return fe(e.type);case 16:return fe("Lazy");case 13:return e.child!==t&&t!==null?fe("Suspense Fallback"):fe("Suspense");case 19:return fe("SuspenseList");case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return fe("Activity");default:return""}}function Mt(e){try{var t="",a=null;do t+=Qe(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var et=Object.prototype.hasOwnProperty,_a=r.unstable_scheduleCallback,$t=r.unstable_cancelCallback,uo=r.unstable_shouldYield,Pn=r.unstable_requestPaint,An=r.unstable_now,xt=r.unstable_getCurrentPriorityLevel,_t=r.unstable_ImmediatePriority,Qt=r.unstable_UserBlockingPriority,dn=r.unstable_NormalPriority,Ns=r.unstable_LowPriority,oi=r.unstable_IdlePriority,Vi=r.log,bu=r.unstable_setDisableYieldValue,Hr=null,ye=null;function Ia(e){if(typeof Vi=="function"&&bu(e),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(Hr,e)}catch{}}var Re=Math.clz32?Math.clz32:Os,Za=Math.log,li=Math.LN2;function Os(e){return e>>>=0,e===0?32:31-(Za(e)/li|0)|0}var Ea=256,wr=262144,Ca=4194304;function er(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hi(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,h=e.suspendedLanes,w=e.pingedLanes;e=e.warmLanes;var _=o&134217727;return _!==0?(o=_&~h,o!==0?c=er(o):(w&=_,w!==0?c=er(w):a||(a=_&~e,a!==0&&(c=er(a))))):(_=o&~h,_!==0?c=er(_):w!==0?c=er(w):a||(a=o&~e,a!==0&&(c=er(a)))),c===0?0:t!==0&&t!==c&&(t&h)===0&&(h=c&-c,a=t&-t,h>=a||h===32&&(a&4194048)!==0)?t:c}function Et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function La(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $r(){var e=Ca;return Ca<<=1,(Ca&62914560)===0&&(Ca=4194304),e}function ho(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ci(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $i(e,t,a,o,c,h){var w=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var _=e.entanglements,N=e.expirationTimes,V=e.hiddenUpdates;for(a=w&~a;0<a;){var ne=31-Re(a),ie=1<<ne;_[ne]=0,N[ne]=-1;var $=V[ne];if($!==null)for(V[ne]=null,ne=0;ne<$.length;ne++){var Y=$[ne];Y!==null&&(Y.lane&=-536870913)}a&=~ie}o!==0&&ui(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(w&~t))}function ui(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Re(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function he(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Re(a),c=1<<o;c&t|e[o]&t&&(e[o]|=t),a&=~c}}function js(e,t){var a=t&-t;return a=(a&42)!==0?1:tr(a),(a&(e.suspendedLanes|t))!==0?0:a}function tr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ha(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sr(){var e=ce.p;return e!==0?e:(e=window.event,e===void 0?32:h0(e.type))}function In(e,t){var a=ce.p;try{return ce.p=e,t()}finally{ce.p=a}}var en=Math.random().toString(36).slice(2),pt="__reactFiber$"+en,Rn="__reactProps$"+en,Le="__reactContainer$"+en,xr="__reactEvents$"+en,Fi="__reactListeners$"+en,fo="__reactHandles$"+en,di="__reactResources$"+en,Se="__reactMarker$"+en;function Ee(e){delete e[pt],delete e[Rn],delete e[xr],delete e[Fi],delete e[fo]}function gt(e){var t=e[pt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Le]||a[pt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Kg(e);e!==null;){if(a=e[pt])return a;e=Kg(e)}return t}e=a,a=e.parentNode}return null}function nt(e){if(e=e[pt]||e[Le]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function At(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Nt(e){var t=e[di];return t||(t=e[di]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[Se]=!0}var Ot=new Set,Bn={};function fa(e,t){ta(e,t),ta(e+"Capture",t)}function ta(e,t){for(Bn[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var on=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hn={},_r={};function Er(e){return et.call(_r,e)?!0:et.call(hn,e)?!1:on.test(e)?_r[e]=!0:(hn[e]=!0,!1)}function nr(e,t,a){if(Er(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ma(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function zn(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rt(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(w){a=""+w,h.call(this,w)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(w){a=""+w},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fr(e){if(!e._valueTracker){var t=Xn(e)?"checked":"value";e._valueTracker=Rt(e,t,""+e[t])}}function ar(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=Xn(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function fn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ks=/[\n"\\]/g;function Gn(e){return e.replace(ks,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function mn(e,t,a,o,c,h,w,_){e.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.type=w:e.removeAttribute("type"),t!=null?w==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ft(t)):e.value!==""+Ft(t)&&(e.value=""+Ft(t)):w!=="submit"&&w!=="reset"||e.removeAttribute("value"),t!=null?hi(e,w,Ft(t)):a!=null?hi(e,w,Ft(a)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+Ft(_):e.removeAttribute("name")}function Da(e,t,a,o,c,h,w,_){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),t!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||t!=null)){Fr(e);return}a=a!=null?""+Ft(a):"",t=t!=null?""+Ft(t):a,_||t===e.value||(e.value=t),e.defaultValue=t}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=_?e.checked:!!o,e.defaultChecked=!!o,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(e.name=w),Fr(e)}function hi(e,t,a){t==="number"&&fn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function na(e,t,a,o){if(e=e.options,t){t={};for(var c=0;c<a.length;c++)t["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=t.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ft(a),t=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Wi(e,t,a){if(t!=null&&(t=""+Ft(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ft(a):""}function mo(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(s(92));if(ot(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Ft(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Fr(e)}function qi(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var el=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fi(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||el.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function po(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in t)o=t[c],t.hasOwnProperty(c)&&a[c]!==o&&fi(e,c,o)}else for(var h in t)t.hasOwnProperty(h)&&fi(e,h,t[h])}function Xe(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ct=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jt(e){return Ct.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function rt(){}var pn=null;function bt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wt=null,kt=null;function Wt(e){var t=nt(e);if(t&&(e=t.stateNode)){var a=e[Rn]||null;e:switch(e=t.stateNode,t.type){case"input":if(mn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gn(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var c=o[Rn]||null;if(!c)throw Error(s(90));mn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&ar(o)}break e;case"textarea":Wi(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&na(e,!!a.multiple,t,!1)}}}var ge=!1;function Vn(e,t,a){if(ge)return e(t,a);ge=!0;try{var o=e(t);return o}finally{if(ge=!1,(wt!==null||kt!==null)&&(zh(),wt&&(t=wt,e=kt,kt=wt=null,Wt(t),e)))for(t=0;t<e.length;t++)Wt(e[t])}}function gn(e,t){var a=e.stateNode;if(a===null)return null;var o=a[Rn]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tn=!1;if(It)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){tn=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{tn=!1}var Gt=null,Kn=null,xn=null;function pa(){if(xn)return xn;var e,t=Kn,a=t.length,o,c="value"in Gt?Gt.value:Gt.textContent,h=c.length;for(e=0;e<a&&t[e]===c[e];e++);var w=a-e;for(o=1;o<=w&&t[a-o]===c[h-o];o++);return xn=c.slice(e,1<o?1-o:void 0)}function nn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ga(){return!0}function an(){return!1}function qt(e){function t(a,o,c,h,w){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=w,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(a=e[_],this[_]=a?a(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ga:an,this.isPropagationStopped=an,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),t}var st={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=qt(st),Yt=E({},st,{view:0,detail:0}),rr=qt(Yt),ln,aa,_n,Cr=E({},Yt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ec,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(ln=e.screenX-_n.screenX,aa=e.screenY-_n.screenY):aa=ln=0,_n=e),ln)},movementY:function(e){return"movementY"in e?e.movementY:aa}}),ir=qt(Cr),Yi=E({},Cr,{dataTransfer:0}),mi=qt(Yi),Kl=E({},Yt,{relatedTarget:0}),Xi=qt(Kl),Ql=E({},st,{animationName:0,elapsedTime:0,pseudoElement:0}),Tr=qt(Ql),tl=E({},st,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jl=qt(tl),Ki=E({},st,{data:0}),nl=qt(Ki),al={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zl(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wu[e])?!!t[e]:!1}function ec(){return Zl}var Su=E({},Yt,{key:function(e){if(e.key){var t=al[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=nn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ec,charCode:function(e){return e.type==="keypress"?nn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xu=qt(Su),gi=E({},Cr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tc=qt(gi),go=E({},Yt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ec}),nc=qt(go),rl=E({},st,{propertyName:0,elapsedTime:0,pseudoElement:0}),ah=qt(rl),ac=E({},Cr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_u=qt(ac),rc=E({},st,{newState:0,oldState:0}),Eu=qt(rc),il=[9,13,27,32],sl=It&&"CompositionEvent"in window,Qi=null;It&&"documentMode"in document&&(Qi=document.documentMode);var Cu=It&&"TextEvent"in window&&!Qi,Tu=It&&(!sl||Qi&&8<Qi&&11>=Qi),ol=" ",Ma=!1;function Mu(e,t){switch(e){case"keyup":return il.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ic(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ji=!1;function sc(e,t){switch(e){case"compositionend":return ic(t);case"keypress":return t.which!==32?null:(Ma=!0,ol);case"textInput":return e=t.data,e===ol&&Ma?null:e;default:return null}}function oc(e,t){if(Ji)return e==="compositionend"||!sl&&Mu(e,t)?(e=pa(),xn=Kn=Gt=null,Ji=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tu&&t.locale!=="ko"?null:t.data;default:return null}}var lc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ll(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lc[e.type]:t==="textarea"}function yo(e,t,a,o){wt?kt?kt.push(o):kt=[o]:wt=o,t=qh(t,"onChange"),0<t.length&&(a=new Hn("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Zi=null,es=null;function Au(e){Dg(e,0)}function cl(e){var t=At(e);if(ar(t))return e}function yi(e,t){if(e==="change")return t}var cc=!1;if(It){var uc;if(It){var ts="oninput"in document;if(!ts){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),ts=typeof dc.oninput=="function"}uc=ts}else uc=!1;cc=uc&&(!document.documentMode||9<document.documentMode)}function ul(){Zi&&(Zi.detachEvent("onpropertychange",rh),es=Zi=null)}function rh(e){if(e.propertyName==="value"&&cl(es)){var t=[];yo(t,es,e,bt(e)),Vn(Au,t)}}function Ru(e,t,a){e==="focusin"?(ul(),Zi=t,es=a,Zi.attachEvent("onpropertychange",rh)):e==="focusout"&&ul()}function Vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(es)}function Nu(e,t){if(e==="click")return cl(t)}function Hf(e,t){if(e==="input"||e==="change")return cl(t)}function Ou(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ua=typeof Object.is=="function"?Object.is:Ou;function Is(e,t){if(Ua(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!et.call(t,c)||!Ua(e[c],t[c]))return!1}return!0}function hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fc(e,t){var a=hc(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hc(a)}}function ih(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ih(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=fn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=fn(e.document)}return t}function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ku=It&&"documentMode"in document&&11>=document.documentMode,ns=null,dl=null,hl=null,mc=!1;function as(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mc||ns==null||ns!==fn(o)||(o=ns,"selectionStart"in o&&ju(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),hl&&Is(hl,o)||(hl=o,o=qh(dl,"onSelect"),0<o.length&&(t=new Hn("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=ns)))}function vi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var bo={animationend:vi("Animation","AnimationEnd"),animationiteration:vi("Animation","AnimationIteration"),animationstart:vi("Animation","AnimationStart"),transitionrun:vi("Transition","TransitionRun"),transitionstart:vi("Transition","TransitionStart"),transitioncancel:vi("Transition","TransitionCancel"),transitionend:vi("Transition","TransitionEnd")},fl={},sh={};It&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function bi(e){if(fl[e])return fl[e];if(!bo[e])return e;var t=bo[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in sh)return fl[e]=t[a];return e}var oh=bi("animationend"),pc=bi("animationiteration"),lh=bi("animationstart"),ml=bi("transitionrun"),$f=bi("transitionstart"),Iu=bi("transitioncancel"),ch=bi("transitionend"),Lu=new Map,rs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rs.push("scrollEnd");function Pa(e,t){Lu.set(e,t),fa(t,[e])}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Aa=[],wo=0,gc=0;function Ba(){for(var e=wo,t=gc=wo=0;t<e;){var a=Aa[t];Aa[t++]=null;var o=Aa[t];Aa[t++]=null;var c=Aa[t];Aa[t++]=null;var h=Aa[t];if(Aa[t++]=null,o!==null&&c!==null){var w=o.pending;w===null?c.next=c:(c.next=w.next,w.next=c),o.pending=c}h!==0&&Nn(a,c,h)}}function Mr(e,t,a,o){Aa[wo++]=e,Aa[wo++]=t,Aa[wo++]=a,Aa[wo++]=o,gc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function yc(e,t,a,o){return Mr(e,t,a,o),za(e)}function is(e,t){return Mr(e,null,null,t),za(e)}function Nn(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&t!==null&&(c=31-Re(a),e=h.hiddenUpdates,o=e[c],o===null?e[c]=[t]:o.push(t),t.lane=a|536870912),h):null}function za(e){if(50<vd)throw vd=0,im=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Wr={};function gl(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ra(e,t,a,o){return new gl(e,t,a,o)}function wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ga(e,t){var a=e.alternate;return a===null?(a=ra(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ss(e,t,a,o,c,h){var w=0;if(o=e,typeof e=="function")wi(e)&&(w=1);else if(typeof e=="string")w=Ab(e,a,xe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pe:return e=ra(31,a,t,c),e.elementType=pe,e.lanes=h,e;case B:return sr(a.children,c,h,t);case H:w=8,c|=24;break;case K:return e=ra(12,a,t,c|2),e.elementType=K,e.lanes=h,e;case W:return e=ra(13,a,t,c),e.elementType=W,e.lanes=h,e;case ee:return e=ra(19,a,t,c),e.elementType=ee,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:w=10;break e;case ae:w=9;break e;case Z:w=11;break e;case q:w=14;break e;case J:w=16,o=null;break e}w=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return t=ra(w,a,t,c),t.elementType=e,t.type=o,t.lanes=h,t}function sr(e,t,a,o){return e=ra(7,e,o,t),e.lanes=a,e}function os(e,t,a){return e=ra(6,e,null,t),e.lanes=a,e}function Du(e){var t=ra(18,null,null,0);return t.stateNode=e,t}function Ls(e,t,a){return t=ra(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yl=new WeakMap;function or(e,t){if(typeof e=="object"&&e!==null){var a=yl.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Mt(t)},yl.set(e,t),t)}return{value:e,source:t,stack:Mt(t)}}var Ar=[],lr=0,Ds=null,Us=0,Ra=[],Va=0,Ha=null,$a=1,cr="";function ur(e,t){Ar[lr++]=Us,Ar[lr++]=Ds,Ds=e,Us=t}function So(e,t,a){Ra[Va++]=$a,Ra[Va++]=cr,Ra[Va++]=Ha,Ha=e;var o=$a;e=cr;var c=32-Re(o)-1;o&=~(1<<c),a+=1;var h=32-Re(t)+c;if(30<h){var w=c-c%5;h=(o&(1<<w)-1).toString(32),o>>=w,c-=w,$a=1<<32-Re(t)+c|a<<c|o,cr=h+e}else $a=1<<h|a<<c|o,cr=e}function bc(e){e.return!==null&&(ur(e,1),So(e,1,0))}function wc(e){for(;e===Ds;)Ds=Ar[--lr],Ar[lr]=null,Us=Ar[--lr],Ar[lr]=null;for(;e===Ha;)Ha=Ra[--Va],Ra[Va]=null,cr=Ra[--Va],Ra[Va]=null,$a=Ra[--Va],Ra[Va]=null}function ls(e,t){Ra[Va++]=$a,Ra[Va++]=cr,Ra[Va++]=Ha,$a=t.id,cr=t.overflow,Ha=e}var $n=null,Bt=null,ct=!1,Si=null,Fa=!1,Ps=Error(s(519));function Rr(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xi(or(t,e)),Ps}function dr(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[pt]=e,t[Rn]=o,a){case"dialog":ft("cancel",t),ft("close",t);break;case"iframe":case"object":case"embed":ft("load",t);break;case"video":case"audio":for(a=0;a<wd.length;a++)ft(wd[a],t);break;case"source":ft("error",t);break;case"img":case"image":case"link":ft("error",t),ft("load",t);break;case"details":ft("toggle",t);break;case"input":ft("invalid",t),Da(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ft("invalid",t);break;case"textarea":ft("invalid",t),mo(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||zg(t.textContent,a)?(o.popover!=null&&(ft("beforetoggle",t),ft("toggle",t)),o.onScroll!=null&&ft("scroll",t),o.onScrollEnd!=null&&ft("scrollend",t),o.onClick!=null&&(t.onclick=rt),t=!0):t=!1,t||Rr(e,!0)}function xo(e){for($n=e.return;$n;)switch($n.tag){case 5:case 31:case 13:Fa=!1;return;case 27:case 3:Fa=!0;return;default:$n=$n.return}}function Nr(e){if(e!==$n)return!1;if(!ct)return xo(e),ct=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wm(e.type,e.memoizedProps)),a=!a),a&&Bt&&Rr(e),xo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Bt=Xg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Bt=Xg(e)}else t===27?(t=Bt,$o(e.type)?(e=Cm,Cm=null,Bt=e):Bt=t):Bt=$n?ni(e.stateNode.nextSibling):null;return!0}function Pe(){Bt=$n=null,ct=!1}function qr(){var e=Si;return e!==null&&(yr===null?yr=e:yr.push.apply(yr,e),Si=null),e}function xi(e){Si===null?Si=[e]:Si.push(e)}var _o=k(null),cs=null,Wa=null;function hr(e,t,a){de(_o,t._currentValue),t._currentValue=a}function qa(e){e._currentValue=_o.current,te(_o)}function Qn(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function vl(e,t,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var w=c.child;h=h.firstContext;e:for(;h!==null;){var _=h;h=c;for(var N=0;N<t.length;N++)if(_.context===t[N]){h.lanes|=a,_=h.alternate,_!==null&&(_.lanes|=a),Qn(h.return,a,e),o||(w=null);break e}h=_.next}}else if(c.tag===18){if(w=c.return,w===null)throw Error(s(341));w.lanes|=a,h=w.alternate,h!==null&&(h.lanes|=a),Qn(w,a,e),w=null}else w=c.child;if(w!==null)w.return=c;else for(w=c;w!==null;){if(w===e){w=null;break}if(c=w.sibling,c!==null){c.return=w.return,w=c;break}w=w.return}c=w}}function Bs(e,t,a,o){e=null;for(var c=t,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var w=c.alternate;if(w===null)throw Error(s(387));if(w=w.memoizedProps,w!==null){var _=c.type;Ua(c.pendingProps.value,w.value)||(e!==null?e.push(_):e=[_])}}else if(c===Ve.current){if(w=c.alternate,w===null)throw Error(s(387));w.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Cd):e=[Cd])}c=c.return}e!==null&&vl(t,e,a,o),t.flags|=262144}function _i(e){for(e=e.firstContext;e!==null;){if(!Ua(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function be(e){cs=e,Wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return Eo(cs,e)}function zs(e,t){return cs===null&&be(e),Eo(e,t)}function Eo(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Wa===null){if(e===null)throw Error(s(308));Wa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wa=Wa.next=t;return a}var Ei=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Uu=r.unstable_scheduleCallback,us=r.unstable_NormalPriority,yn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new Ei,data:new Map,refCount:0}}function Co(e){e.refCount--,e.refCount===0&&Uu(us,function(){e.controller.abort()})}var En=null,ds=0,Tt=0,To=null;function Sc(e,t){if(En===null){var a=En=[];ds=0,Tt=dm(),To={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ds++,t.then(bl,bl),t}function bl(){if(--ds===0&&En!==null){To!==null&&(To.status="fulfilled");var e=En;En=null,Tt=0,To=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ci(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var c=0;c<a.length;c++)(0,a[c])(t)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Yr=P.S;P.S=function(e,t){ug=An(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sc(e,t),Yr!==null&&Yr(e,t)};var rn=k(null);function Mo(){var e=rn.current;return e!==null?e:Jt.pooledCache}function wl(e,t){t===null?de(rn,rn.current):de(rn,t.pool)}function Xr(){var e=Mo();return e===null?null:{parent:yn._currentValue,pool:e}}var Ao=Error(s(460)),Ln=Error(s(474)),Sl=Error(s(542)),xc={then:function(){}};function ya(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fn(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(rt,rt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bu(e),e;default:if(typeof t.status=="string")t.then(rt,rt);else{if(e=Jt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=o}},function(o){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bu(e),e}throw Ti=t,Ao}}function Ya(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ti=a,Ao):a}}var Ti=null;function Gs(){if(Ti===null)throw Error(s(459));var e=Ti;return Ti=null,e}function Bu(e){if(e===Ao||e===Sl)throw Error(s(483))}var Mi=null,Ro=0;function Ai(e){var t=Ro;return Ro+=1,Mi===null&&(Mi=[]),Fn(Mi,e,t)}function Ke(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function fr(e,t){throw t.$$typeof===M?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function uh(e){function t(z,L){if(e){var G=z.deletions;G===null?(z.deletions=[L],z.flags|=16):G.push(L)}}function a(z,L){if(!e)return null;for(;L!==null;)t(z,L),L=L.sibling;return null}function o(z){for(var L=new Map;z!==null;)z.key!==null?L.set(z.key,z):L.set(z.index,z),z=z.sibling;return L}function c(z,L){return z=Ga(z,L),z.index=0,z.sibling=null,z}function h(z,L,G){return z.index=G,e?(G=z.alternate,G!==null?(G=G.index,G<L?(z.flags|=67108866,L):G):(z.flags|=67108866,L)):(z.flags|=1048576,L)}function w(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function _(z,L,G,re){return L===null||L.tag!==6?(L=os(G,z.mode,re),L.return=z,L):(L=c(L,G),L.return=z,L)}function N(z,L,G,re){var Ue=G.type;return Ue===B?ne(z,L,G.props.children,re,G.key):L!==null&&(L.elementType===Ue||typeof Ue=="object"&&Ue!==null&&Ue.$$typeof===J&&Ya(Ue)===L.type)?(L=c(L,G.props),Ke(L,G),L.return=z,L):(L=ss(G.type,G.key,G.props,null,z.mode,re),Ke(L,G),L.return=z,L)}function V(z,L,G,re){return L===null||L.tag!==4||L.stateNode.containerInfo!==G.containerInfo||L.stateNode.implementation!==G.implementation?(L=Ls(G,z.mode,re),L.return=z,L):(L=c(L,G.children||[]),L.return=z,L)}function ne(z,L,G,re,Ue){return L===null||L.tag!==7?(L=sr(G,z.mode,re,Ue),L.return=z,L):(L=c(L,G),L.return=z,L)}function ie(z,L,G){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=os(""+L,z.mode,G),L.return=z,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case A:return G=ss(L.type,L.key,L.props,null,z.mode,G),Ke(G,L),G.return=z,G;case D:return L=Ls(L,z.mode,G),L.return=z,L;case J:return L=Ya(L),ie(z,L,G)}if(ot(L)||Oe(L))return L=sr(L,z.mode,G,null),L.return=z,L;if(typeof L.then=="function")return ie(z,Ai(L),G);if(L.$$typeof===F)return ie(z,zs(z,L),G);fr(z,L)}return null}function $(z,L,G,re){var Ue=L!==null?L.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return Ue!==null?null:_(z,L,""+G,re);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case A:return G.key===Ue?N(z,L,G,re):null;case D:return G.key===Ue?V(z,L,G,re):null;case J:return G=Ya(G),$(z,L,G,re)}if(ot(G)||Oe(G))return Ue!==null?null:ne(z,L,G,re,null);if(typeof G.then=="function")return $(z,L,Ai(G),re);if(G.$$typeof===F)return $(z,L,zs(z,G),re);fr(z,G)}return null}function Y(z,L,G,re,Ue){if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return z=z.get(G)||null,_(L,z,""+re,Ue);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case A:return z=z.get(re.key===null?G:re.key)||null,N(L,z,re,Ue);case D:return z=z.get(re.key===null?G:re.key)||null,V(L,z,re,Ue);case J:return re=Ya(re),Y(z,L,G,re,Ue)}if(ot(re)||Oe(re))return z=z.get(G)||null,ne(L,z,re,Ue,null);if(typeof re.then=="function")return Y(z,L,G,Ai(re),Ue);if(re.$$typeof===F)return Y(z,L,G,zs(L,re),Ue);fr(L,re)}return null}function Ce(z,L,G,re){for(var Ue=null,Dt=null,Me=L,it=L=0,vt=null;Me!==null&&it<G.length;it++){Me.index>it?(vt=Me,Me=null):vt=Me.sibling;var Ut=$(z,Me,G[it],re);if(Ut===null){Me===null&&(Me=vt);break}e&&Me&&Ut.alternate===null&&t(z,Me),L=h(Ut,L,it),Dt===null?Ue=Ut:Dt.sibling=Ut,Dt=Ut,Me=vt}if(it===G.length)return a(z,Me),ct&&ur(z,it),Ue;if(Me===null){for(;it<G.length;it++)Me=ie(z,G[it],re),Me!==null&&(L=h(Me,L,it),Dt===null?Ue=Me:Dt.sibling=Me,Dt=Me);return ct&&ur(z,it),Ue}for(Me=o(Me);it<G.length;it++)vt=Y(Me,z,it,G[it],re),vt!==null&&(e&&vt.alternate!==null&&Me.delete(vt.key===null?it:vt.key),L=h(vt,L,it),Dt===null?Ue=vt:Dt.sibling=vt,Dt=vt);return e&&Me.forEach(function(Xo){return t(z,Xo)}),ct&&ur(z,it),Ue}function ze(z,L,G,re){if(G==null)throw Error(s(151));for(var Ue=null,Dt=null,Me=L,it=L=0,vt=null,Ut=G.next();Me!==null&&!Ut.done;it++,Ut=G.next()){Me.index>it?(vt=Me,Me=null):vt=Me.sibling;var Xo=$(z,Me,Ut.value,re);if(Xo===null){Me===null&&(Me=vt);break}e&&Me&&Xo.alternate===null&&t(z,Me),L=h(Xo,L,it),Dt===null?Ue=Xo:Dt.sibling=Xo,Dt=Xo,Me=vt}if(Ut.done)return a(z,Me),ct&&ur(z,it),Ue;if(Me===null){for(;!Ut.done;it++,Ut=G.next())Ut=ie(z,Ut.value,re),Ut!==null&&(L=h(Ut,L,it),Dt===null?Ue=Ut:Dt.sibling=Ut,Dt=Ut);return ct&&ur(z,it),Ue}for(Me=o(Me);!Ut.done;it++,Ut=G.next())Ut=Y(Me,z,it,Ut.value,re),Ut!==null&&(e&&Ut.alternate!==null&&Me.delete(Ut.key===null?it:Ut.key),L=h(Ut,L,it),Dt===null?Ue=Ut:Dt.sibling=Ut,Dt=Ut);return e&&Me.forEach(function(Bb){return t(z,Bb)}),ct&&ur(z,it),Ue}function Kt(z,L,G,re){if(typeof G=="object"&&G!==null&&G.type===B&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case A:e:{for(var Ue=G.key;L!==null;){if(L.key===Ue){if(Ue=G.type,Ue===B){if(L.tag===7){a(z,L.sibling),re=c(L,G.props.children),re.return=z,z=re;break e}}else if(L.elementType===Ue||typeof Ue=="object"&&Ue!==null&&Ue.$$typeof===J&&Ya(Ue)===L.type){a(z,L.sibling),re=c(L,G.props),Ke(re,G),re.return=z,z=re;break e}a(z,L);break}else t(z,L);L=L.sibling}G.type===B?(re=sr(G.props.children,z.mode,re,G.key),re.return=z,z=re):(re=ss(G.type,G.key,G.props,null,z.mode,re),Ke(re,G),re.return=z,z=re)}return w(z);case D:e:{for(Ue=G.key;L!==null;){if(L.key===Ue)if(L.tag===4&&L.stateNode.containerInfo===G.containerInfo&&L.stateNode.implementation===G.implementation){a(z,L.sibling),re=c(L,G.children||[]),re.return=z,z=re;break e}else{a(z,L);break}else t(z,L);L=L.sibling}re=Ls(G,z.mode,re),re.return=z,z=re}return w(z);case J:return G=Ya(G),Kt(z,L,G,re)}if(ot(G))return Ce(z,L,G,re);if(Oe(G)){if(Ue=Oe(G),typeof Ue!="function")throw Error(s(150));return G=Ue.call(G),ze(z,L,G,re)}if(typeof G.then=="function")return Kt(z,L,Ai(G),re);if(G.$$typeof===F)return Kt(z,L,zs(z,G),re);fr(z,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,L!==null&&L.tag===6?(a(z,L.sibling),re=c(L,G),re.return=z,z=re):(a(z,L),re=os(G,z.mode,re),re.return=z,z=re),w(z)):a(z,L)}return function(z,L,G,re){try{Ro=0;var Ue=Kt(z,L,G,re);return Mi=null,Ue}catch(Me){if(Me===Ao||Me===Sl)throw Me;var Dt=ra(29,Me,null,z.mode);return Dt.lanes=re,Dt.return=z,Dt}}}var Vs=uh(!0),dh=uh(!1),hs=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ri(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var c=o.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),o.pending=t,t=za(e),Nn(e,null,a),t}return Mr(e,o,t,a),za(e)}function Ni(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,he(e,a)}}function Vu(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var w={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=w:h=h.next=w,a=a.next}while(a!==null);h===null?c=h=t:h=h.next=t}else c=h=t;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var _c=!1;function No(){if(_c){var e=To;if(e!==null)throw e}}function xl(e,t,a,o){_c=!1;var c=e.updateQueue;hs=!1;var h=c.firstBaseUpdate,w=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var N=_,V=N.next;N.next=null,w===null?h=V:w.next=V,w=N;var ne=e.alternate;ne!==null&&(ne=ne.updateQueue,_=ne.lastBaseUpdate,_!==w&&(_===null?ne.firstBaseUpdate=V:_.next=V,ne.lastBaseUpdate=N))}if(h!==null){var ie=c.baseState;w=0,ne=V=N=null,_=h;do{var $=_.lane&-536870913,Y=$!==_.lane;if(Y?(yt&$)===$:(o&$)===$){$!==0&&$===Tt&&(_c=!0),ne!==null&&(ne=ne.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var Ce=e,ze=_;$=t;var Kt=a;switch(ze.tag){case 1:if(Ce=ze.payload,typeof Ce=="function"){ie=Ce.call(Kt,ie,$);break e}ie=Ce;break e;case 3:Ce.flags=Ce.flags&-65537|128;case 0:if(Ce=ze.payload,$=typeof Ce=="function"?Ce.call(Kt,ie,$):Ce,$==null)break e;ie=E({},ie,$);break e;case 2:hs=!0}}$=_.callback,$!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=c.callbacks,Y===null?c.callbacks=[$]:Y.push($))}else Y={lane:$,tag:_.tag,payload:_.payload,callback:_.callback,next:null},ne===null?(V=ne=Y,N=ie):ne=ne.next=Y,w|=$;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;Y=_,_=Y.next,Y.next=null,c.lastBaseUpdate=Y,c.shared.pending=null}}while(!0);ne===null&&(N=ie),c.baseState=N,c.firstBaseUpdate=V,c.lastBaseUpdate=ne,h===null&&(c.shared.lanes=0),Bo|=w,e.lanes=w,e.memoizedState=ie}}function Hs(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Ec(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Hs(a[e],t)}var Oo=k(null),Oi=k(0);function Cc(e,t){e=to,de(Oi,e),de(Oo,t),to=e|t.baseLanes}function ia(){de(Oi,to),de(Oo,Oo.current)}function Hu(){to=Oi.current,te(Oo),te(Oi)}var sa=k(null),cn=null;function ji(e){var t=e.alternate;de(vn,vn.current&1),de(sa,e),cn===null&&(t===null||Oo.current!==null||t.memoizedState!==null)&&(cn=e)}function fs(e){de(vn,vn.current),de(sa,e),cn===null&&(cn=e)}function $u(e){e.tag===22?(de(vn,vn.current),de(sa,e),cn===null&&(cn=e)):oa()}function oa(){de(vn,vn.current),de(sa,sa.current)}function Wn(e){te(sa),cn===e&&(cn=null),te(vn)}var vn=k(0);function ms(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_m(a)||Em(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kr=0,Fe=null,St=null,Cn=null,_l=!1,$s=!1,ps=!1,ki=0,Na=0,Ii=null,Fs=0;function bn(){throw Error(s(321))}function Fu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ua(e[a],t[a]))return!1;return!0}function Wu(e,t,a,o,c,h){return Kr=h,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?Rh:ws,ps=!1,h=a(o,c),ps=!1,$s&&(h=jo(t,a,o,c)),hh(e),h}function hh(e){P.H=Ml;var t=St!==null&&St.next!==null;if(Kr=0,Cn=St=Fe=null,_l=!1,Na=0,Ii=null,t)throw Error(s(300));e===null||C||(e=e.dependencies,e!==null&&_i(e)&&(C=!0))}function jo(e,t,a,o){Fe=e;var c=0;do{if($s&&(Ii=null),Na=0,$s=!1,25<=c)throw Error(s(301));if(c+=1,Cn=St=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=od,h=t(a,o)}while($s);return h}function Tc(){var e=P.H,t=e.useState()[0];return t=typeof t.then=="function"?El(t):t,e=e.useState()[0],(St!==null?St.memoizedState:null)!==e&&(Fe.flags|=1024),t}function Mc(){var e=ki!==0;return ki=0,e}function qu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Yu(e){if(_l){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_l=!1}Kr=0,Cn=St=Fe=null,$s=!1,Na=ki=0,Ii=null}function va(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?Fe.memoizedState=Cn=e:Cn=Cn.next=e,Cn}function Tn(){if(St===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=St.next;var t=Cn===null?Fe.memoizedState:Cn.next;if(t!==null)Cn=t,St=e;else{if(e===null)throw Fe.alternate===null?Error(s(467)):Error(s(310));St=e,e={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Cn===null?Fe.memoizedState=Cn=e:Cn=Cn.next=e}return Cn}function Ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function El(e){var t=Na;return Na+=1,Ii===null&&(Ii=[]),e=Fn(Ii,e,t),t=Fe,(Cn===null?t.memoizedState:Cn.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?Rh:ws),e}function Rc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return El(e);if(e.$$typeof===F)return On(e)}throw Error(s(438,String(e)))}function Or(e){var t=null,a=Fe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=Fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ac(),Fe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=oe;return t.index++,a}function jr(e,t){return typeof t=="function"?t(e):t}function ko(e){var t=Tn();return Xu(t,St,e)}function Xu(e,t,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var w=c.next;c.next=h.next,h.next=w}t.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{t=c.next;var _=w=null,N=null,V=t,ne=!1;do{var ie=V.lane&-536870913;if(ie!==V.lane?(yt&ie)===ie:(Kr&ie)===ie){var $=V.revertLane;if($===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),ie===Tt&&(ne=!0);else if((Kr&$)===$){V=V.next,$===Tt&&(ne=!0);continue}else ie={lane:0,revertLane:V.revertLane,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(_=N=ie,w=h):N=N.next=ie,Fe.lanes|=$,Bo|=$;ie=V.action,ps&&a(h,ie),h=V.hasEagerState?V.eagerState:a(h,ie)}else $={lane:ie,revertLane:V.revertLane,gesture:V.gesture,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(_=N=$,w=h):N=N.next=$,Fe.lanes|=ie,Bo|=ie;V=V.next}while(V!==null&&V!==t);if(N===null?w=h:N.next=_,!Ua(h,e.memoizedState)&&(C=!0,ne&&(a=To,a!==null)))throw a;e.memoizedState=h,e.baseState=w,e.baseQueue=N,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ku(e){var t=Tn(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,h=t.memoizedState;if(c!==null){a.pending=null;var w=c=c.next;do h=e(h,w.action),w=w.next;while(w!==c);Ua(h,t.memoizedState)||(C=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),a.lastRenderedState=h}return[h,o]}function fh(e,t,a){var o=Fe,c=Tn(),h=ct;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=t();var w=!Ua((St||c).memoizedState,a);if(w&&(c.memoizedState=a,C=!0),c=c.queue,td(Li.bind(null,o,c,e),[e]),c.getSnapshot!==t||w||Cn!==null&&Cn.memoizedState.tag&1){if(o.flags|=2048,Io(9,{destroy:void 0},Cl.bind(null,o,c,a,t),null),Jt===null)throw Error(s(349));h||(Kr&127)!==0||mh(o,t,a)}return a}function mh(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Fe.updateQueue,t===null?(t=Ac(),Fe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Cl(e,t,a,o){t.value=a,t.getSnapshot=o,Dn(t)&&Qu(e)}function Li(e,t,a){return a(function(){Dn(t)&&Qu(e)})}function Dn(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ua(e,a)}catch{return!0}}function Qu(e){var t=is(e,2);t!==null&&vr(t,e,2)}function Nc(e){var t=va();if(typeof e=="function"){var a=e;if(e=a(),ps){Ia(!0);try{a()}finally{Ia(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:e},t}function Ws(e,t,a,o){return e.baseState=a,Xu(e,St,typeof o=="function"?o:jr)}function gs(e,t,a,o,c){if(Bc(e))throw Error(s(485));if(e=t.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){h.listeners.push(w)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=t.pending,a===null?(h.next=t.pending=h,Oc(t,h)):(h.next=a.next,t.pending=a.next=h)}}function Oc(e,t){var a=t.action,o=t.payload,c=e.state;if(t.isTransition){var h=P.T,w={};P.T=w;try{var _=a(c,o),N=P.S;N!==null&&N(w,_),ph(e,t,_)}catch(V){Ju(e,t,V)}finally{h!==null&&w.types!==null&&(h.types=w.types),P.T=h}}else try{h=a(c,o),ph(e,t,h)}catch(V){Ju(e,t,V)}}function ph(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){gh(e,t,o)},function(o){return Ju(e,t,o)}):gh(e,t,a)}function gh(e,t,a){t.status="fulfilled",t.value=a,Zu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Oc(e,a)))}function Ju(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,Zu(t),t=t.next;while(t!==o)}e.action=null}function Zu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Tl(e,t){return t}function qs(e,t){if(ct){var a=Jt.formState;if(a!==null){e:{var o=Fe;if(ct){if(Bt){t:{for(var c=Bt,h=Fa;c.nodeType!==8;){if(!h){c=null;break t}if(c=ni(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Bt=ni(c.nextSibling),o=c.data==="F!";break e}}Rr(o)}o=!1}o&&(t=a[0])}}return a=va(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:t},a.queue=o,a=Pc.bind(null,Fe,o),o.dispatch=a,o=Nc(!1),h=Ys.bind(null,Fe,!1,o.queue),o=va(),c={state:t,dispatch:null,action:e,pending:null},o.queue=c,a=gs.bind(null,Fe,c,h,a),c.dispatch=a,o.memoizedState=e,[t,a,!1]}function yh(e){var t=Tn();return vh(t,St,e)}function vh(e,t,a){if(t=Xu(e,t,Tl)[0],e=ko(jr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=El(t)}catch(w){throw w===Ao?Sl:w}else o=t;t=Tn();var c=t.queue,h=c.dispatch;return a!==t.memoizedState&&(Fe.flags|=2048,Io(9,{destroy:void 0},Ff.bind(null,c,a),null)),[o,h,e]}function Ff(e,t){e.action=t}function bh(e){var t=Tn(),a=St;if(a!==null)return vh(t,a,e);Tn(),t=t.memoizedState,a=Tn();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function Io(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=Fe.updateQueue,t===null&&(t=Ac(),Fe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function ed(){return Tn().memoizedState}function jc(e,t,a,o){var c=va();Fe.flags|=e,c.memoizedState=Io(1|t,{destroy:void 0},a,o===void 0?null:o)}function kc(e,t,a,o){var c=Tn();o=o===void 0?null:o;var h=c.memoizedState.inst;St!==null&&o!==null&&Fu(o,St.memoizedState.deps)?c.memoizedState=Io(t,h,a,o):(Fe.flags|=e,c.memoizedState=Io(1|t,h,a,o))}function wh(e,t){jc(8390656,8,e,t)}function td(e,t){kc(2048,8,e,t)}function Wf(e){Fe.flags|=4;var t=Fe.updateQueue;if(t===null)t=Ac(),Fe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Sh(e){var t=Tn().memoizedState;return Wf({ref:t,nextImpl:e}),function(){if((Pt&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function xh(e,t){return kc(4,2,e,t)}function Ic(e,t){return kc(4,4,e,t)}function _h(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,a){a=a!=null?a.concat([e]):null,kc(4,4,_h.bind(null,t,e),a)}function nd(){}function Eh(e,t){var a=Tn();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Fu(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function Qr(e,t){var a=Tn();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Fu(t,o[1]))return o[0];if(o=e(),ps){Ia(!0);try{e()}finally{Ia(!1)}}return a.memoizedState=[o,t],o}function ad(e,t,a){return a===void 0||(Kr&1073741824)!==0&&(yt&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=hg(),Fe.lanes|=e,Bo|=e,a)}function Ch(e,t,a,o){return Ua(a,t)?a:Oo.current!==null?(e=ad(e,a,o),Ua(e,t)||(C=!0),e):(Kr&42)===0||(Kr&1073741824)!==0&&(yt&261930)===0?(C=!0,e.memoizedState=a):(e=hg(),Fe.lanes|=e,Bo|=e,t)}function rd(e,t,a,o,c){var h=ce.p;ce.p=h!==0&&8>h?h:8;var w=P.T,_={};P.T=_,Ys(e,!1,t,a);try{var N=c(),V=P.S;if(V!==null&&V(_,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ne=Ci(N,o);Lo(e,t,ne,Ur(e))}else Lo(e,t,o,Ur(e))}catch(ie){Lo(e,t,{then:function(){},status:"rejected",reason:ie},Ur())}finally{ce.p=h,w!==null&&_.types!==null&&(w.types=_.types),P.T=w}}function id(){}function vs(e,t,a,o){if(e.tag!==5)throw Error(s(476));var c=Lc(e).queue;rd(e,c,t,ve,a===null?id:function(){return bs(e),a(o)})}function Lc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ve,baseState:ve,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:ve},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bs(e){var t=Lc(e);t.next===null&&(t=e.alternate.memoizedState),Lo(e,t.next.queue,{},Ur())}function Dc(){return On(Cd)}function Th(){return Tn().memoizedState}function sd(){return Tn().memoizedState}function qf(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ur();e=Xa(a);var o=Ri(t,e,a);o!==null&&(vr(o,t,a),Ni(o,t,a)),t={cache:Pu()},e.payload=t;return}t=t.return}}function Uc(e,t,a){var o=Ur();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bc(e)?Mh(t,a):(a=yc(e,t,a,o),a!==null&&(vr(a,e,o),Ah(a,t,o)))}function Pc(e,t,a){var o=Ur();Lo(e,t,a,o)}function Lo(e,t,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bc(e))Mh(t,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var w=t.lastRenderedState,_=h(w,a);if(c.hasEagerState=!0,c.eagerState=_,Ua(_,w))return Mr(e,t,c,0),Jt===null&&Ba(),!1}catch{}if(a=yc(e,t,c,o),a!==null)return vr(a,e,o),Ah(a,t,o),!0}return!1}function Ys(e,t,a,o){if(o={lane:2,revertLane:dm(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bc(e)){if(t)throw Error(s(479))}else t=yc(e,a,o,2),t!==null&&vr(t,e,2)}function Bc(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function Mh(e,t){$s=_l=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ah(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,he(e,a)}}var Ml={readContext:On,use:Rc,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useLayoutEffect:bn,useInsertionEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useSyncExternalStore:bn,useId:bn,useHostTransitionStatus:bn,useFormState:bn,useActionState:bn,useOptimistic:bn,useMemoCache:bn,useCacheRefresh:bn};Ml.useEffectEvent=bn;var Rh={readContext:On,use:Rc,useCallback:function(e,t){return va().memoizedState=[e,t===void 0?null:t],e},useContext:On,useEffect:wh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,jc(4194308,4,_h.bind(null,t,e),a)},useLayoutEffect:function(e,t){return jc(4194308,4,e,t)},useInsertionEffect:function(e,t){jc(4,2,e,t)},useMemo:function(e,t){var a=va();t=t===void 0?null:t;var o=e();if(ps){Ia(!0);try{e()}finally{Ia(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=va();if(a!==void 0){var c=a(t);if(ps){Ia(!0);try{a(t)}finally{Ia(!1)}}}else c=t;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Uc.bind(null,Fe,e),[o.memoizedState,e]},useRef:function(e){var t=va();return e={current:e},t.memoizedState=e},useState:function(e){e=Nc(e);var t=e.queue,a=Pc.bind(null,Fe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:nd,useDeferredValue:function(e,t){var a=va();return ad(a,e,t)},useTransition:function(){var e=Nc(!1);return e=rd.bind(null,Fe,e.queue,!0,!1),va().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=Fe,c=va();if(ct){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Jt===null)throw Error(s(349));(yt&127)!==0||mh(o,t,a)}c.memoizedState=a;var h={value:a,getSnapshot:t};return c.queue=h,wh(Li.bind(null,o,h,e),[e]),o.flags|=2048,Io(9,{destroy:void 0},Cl.bind(null,o,h,a,t),null),a},useId:function(){var e=va(),t=Jt.identifierPrefix;if(ct){var a=cr,o=$a;a=(o&~(1<<32-Re(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ki++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Fs++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Dc,useFormState:qs,useActionState:qs,useOptimistic:function(e){var t=va();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ys.bind(null,Fe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Or,useCacheRefresh:function(){return va().memoizedState=qf.bind(null,Fe)},useEffectEvent:function(e){var t=va(),a={impl:e};return t.memoizedState=a,function(){if((Pt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ws={readContext:On,use:Rc,useCallback:Eh,useContext:On,useEffect:td,useImperativeHandle:ys,useInsertionEffect:xh,useLayoutEffect:Ic,useMemo:Qr,useReducer:ko,useRef:ed,useState:function(){return ko(jr)},useDebugValue:nd,useDeferredValue:function(e,t){var a=Tn();return Ch(a,St.memoizedState,e,t)},useTransition:function(){var e=ko(jr)[0],t=Tn().memoizedState;return[typeof e=="boolean"?e:El(e),t]},useSyncExternalStore:fh,useId:Th,useHostTransitionStatus:Dc,useFormState:yh,useActionState:yh,useOptimistic:function(e,t){var a=Tn();return Ws(a,St,e,t)},useMemoCache:Or,useCacheRefresh:sd};ws.useEffectEvent=Sh;var od={readContext:On,use:Rc,useCallback:Eh,useContext:On,useEffect:td,useImperativeHandle:ys,useInsertionEffect:xh,useLayoutEffect:Ic,useMemo:Qr,useReducer:Ku,useRef:ed,useState:function(){return Ku(jr)},useDebugValue:nd,useDeferredValue:function(e,t){var a=Tn();return St===null?ad(a,e,t):Ch(a,St.memoizedState,e,t)},useTransition:function(){var e=Ku(jr)[0],t=Tn().memoizedState;return[typeof e=="boolean"?e:El(e),t]},useSyncExternalStore:fh,useId:Th,useHostTransitionStatus:Dc,useFormState:bh,useActionState:bh,useOptimistic:function(e,t){var a=Tn();return St!==null?Ws(a,St,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Or,useCacheRefresh:sd};od.useEffectEvent=Sh;function ld(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var cd={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=Ur(),c=Xa(o);c.payload=t,a!=null&&(c.callback=a),t=Ri(e,c,o),t!==null&&(vr(t,e,o),Ni(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=Ur(),c=Xa(o);c.tag=1,c.payload=t,a!=null&&(c.callback=a),t=Ri(e,c,o),t!==null&&(vr(t,e,o),Ni(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ur(),o=Xa(a);o.tag=2,t!=null&&(o.callback=t),t=Ri(e,o,a),t!==null&&(vr(t,e,a),Ni(t,e,a))}};function Al(e,t,a,o,c,h,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,w):t.prototype&&t.prototype.isPureReactComponent?!Is(a,o)||!Is(c,h):!0}function Nh(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&cd.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Rl(e){pl(e)}function Oh(e){console.error(e)}function jh(e){pl(e)}function zc(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function kh(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ud(e,t,a){return a=Xa(a),a.tag=3,a.payload={element:null},a.callback=function(){zc(e,t)},a}function f(e){return e=Xa(e),e.tag=3,e}function b(e,t,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){kh(t,a,o)}}var w=a.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(e.callback=function(){kh(t,a,o),typeof c!="function"&&(zo===null?zo=new Set([this]):zo.add(this));var _=o.stack;this.componentDidCatch(o.value,{componentStack:_!==null?_:""})})}function S(e,t,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Bs(t,a,c,!0),a=sa.current,a!==null){switch(a.tag){case 31:case 13:return cn===null?Gh():a.alternate===null&&jn===0&&(jn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===xc?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),lm(e,o,c)),!1;case 22:return a.flags|=65536,o===xc?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),lm(e,o,c)),!1}throw Error(s(435,a.tag))}return lm(e,o,c),Gh(),!1}if(ct)return t=sa.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,o!==Ps&&(e=Error(s(422),{cause:o}),xi(or(e,a)))):(o!==Ps&&(t=Error(s(423),{cause:o}),xi(or(t,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=or(o,a),c=ud(e.stateNode,o,c),Vu(e,c),jn!==4&&(jn=2)),!1;var h=Error(s(520),{cause:o});if(h=or(h,a),yd===null?yd=[h]:yd.push(h),jn!==4&&(jn=2),t===null)return!0;o=or(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ud(a.stateNode,o,e),Vu(a,e),!1;case 1:if(t=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(zo===null||!zo.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=f(c),b(c,e,a,o),Vu(a,c),!1}a=a.return}while(a!==null);return!1}var T=Error(s(461)),C=!1;function j(e,t,a,o){t.child=e===null?dh(t,null,a,o):Vs(t,e.child,a,o)}function I(e,t,a,o,c){a=a.render;var h=t.ref;if("ref"in o){var w={};for(var _ in o)_!=="ref"&&(w[_]=o[_])}else w=o;return be(t),o=Wu(e,t,a,w,h,c),_=Mc(),e!==null&&!C?(qu(e,t,c),ti(e,t,c)):(ct&&_&&bc(t),t.flags|=1,j(e,t,o,c),t.child)}function O(e,t,a,o,c){if(e===null){var h=a.type;return typeof h=="function"&&!wi(h)&&h.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=h,U(e,t,h,o,c)):(e=ss(a.type,null,o,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,!Ss(e,c)){var w=h.memoizedProps;if(a=a.compare,a=a!==null?a:Is,a(w,o)&&e.ref===t.ref)return ti(e,t,c)}return t.flags|=1,e=Ga(h,o),e.ref=t.ref,e.return=t,t.child=e}function U(e,t,a,o,c){if(e!==null){var h=e.memoizedProps;if(Is(h,o)&&e.ref===t.ref)if(C=!1,t.pendingProps=o=h,Ss(e,c))(e.flags&131072)!==0&&(C=!0);else return t.lanes=e.lanes,ti(e,t,c)}return je(e,t,a,o,c)}function Q(e,t,a,o){var c=o.children,h=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=t.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~h}else o=0,t.child=null;return le(e,t,h,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wl(t,h!==null?h.cachePool:null),h!==null?Cc(t,h):ia(),$u(t);else return o=t.lanes=536870912,le(e,t,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(wl(t,h.cachePool),Cc(t,h),oa(),t.memoizedState=null):(e!==null&&wl(t,null),ia(),oa());return j(e,t,c,a),t.child}function X(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function le(e,t,a,o,c){var h=Mo();return h=h===null?null:{parent:yn._currentValue,pool:h},t.memoizedState={baseLanes:a,cachePool:h},e!==null&&wl(t,null),ia(),$u(t),e!==null&&Bs(e,t,o,!0),t.childLanes=c,null}function me(e,t){return t=Jr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function we(e,t,a){return Vs(t,e.child,null,a),e=me(t,t.pendingProps),e.flags|=2,Wn(t),t.memoizedState=null,e}function De(e,t,a){var o=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ct){if(o.mode==="hidden")return e=me(t,o),t.lanes=536870912,X(null,e);if(fs(t),(e=Bt)?(e=Yg(e,Fa),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:$a,overflow:cr}:null,retryLane:536870912,hydrationErrors:null},a=Du(e),a.return=t,t.child=a,$n=t,Bt=null)):e=null,e===null)throw Rr(t);return t.lanes=536870912,null}return me(t,o)}var h=e.memoizedState;if(h!==null){var w=h.dehydrated;if(fs(t),c)if(t.flags&256)t.flags&=-257,t=we(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(C||Bs(e,t,a,!1),c=(a&e.childLanes)!==0,C||c){if(o=Jt,o!==null&&(w=js(o,a),w!==0&&w!==h.retryLane))throw h.retryLane=w,is(e,w),vr(o,e,w),T;Gh(),t=we(e,t,a)}else e=h.treeContext,Bt=ni(w.nextSibling),$n=t,ct=!0,Si=null,Fa=!1,e!==null&&ls(t,e),t=me(t,o),t.flags|=4096;return t}return e=Ga(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function lt(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function je(e,t,a,o,c){return be(t),a=Wu(e,t,a,o,void 0,c),o=Mc(),e!==null&&!C?(qu(e,t,c),ti(e,t,c)):(ct&&o&&bc(t),t.flags|=1,j(e,t,a,c),t.child)}function Lt(e,t,a,o,c,h){return be(t),t.updateQueue=null,a=jo(t,o,a,c),hh(e),o=Mc(),e!==null&&!C?(qu(e,t,h),ti(e,t,h)):(ct&&o&&bc(t),t.flags|=1,j(e,t,a,h),t.child)}function Be(e,t,a,o,c){if(be(t),t.stateNode===null){var h=Wr,w=a.contextType;typeof w=="object"&&w!==null&&(h=On(w)),h=new a(o,h),t.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=cd,t.stateNode=h,h._reactInternals=t,h=t.stateNode,h.props=o,h.state=t.memoizedState,h.refs={},zu(t),w=a.contextType,h.context=typeof w=="object"&&w!==null?On(w):Wr,h.state=t.memoizedState,w=a.getDerivedStateFromProps,typeof w=="function"&&(ld(t,a,w,o),h.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(w=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),w!==h.state&&cd.enqueueReplaceState(h,h.state,null),xl(t,o,h,c),No(),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){h=t.stateNode;var _=t.memoizedProps,N=Xs(a,_);h.props=N;var V=h.context,ne=a.contextType;w=Wr,typeof ne=="object"&&ne!==null&&(w=On(ne));var ie=a.getDerivedStateFromProps;ne=typeof ie=="function"||typeof h.getSnapshotBeforeUpdate=="function",_=t.pendingProps!==_,ne||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(_||V!==w)&&Nh(t,h,o,w),hs=!1;var $=t.memoizedState;h.state=$,xl(t,o,h,c),No(),V=t.memoizedState,_||$!==V||hs?(typeof ie=="function"&&(ld(t,a,ie,o),V=t.memoizedState),(N=hs||Al(t,a,N,o,$,V,w))?(ne||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=V),h.props=o,h.state=V,h.context=w,o=N):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{h=t.stateNode,Gu(e,t),w=t.memoizedProps,ne=Xs(a,w),h.props=ne,ie=t.pendingProps,$=h.context,V=a.contextType,N=Wr,typeof V=="object"&&V!==null&&(N=On(V)),_=a.getDerivedStateFromProps,(V=typeof _=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==ie||$!==N)&&Nh(t,h,o,N),hs=!1,$=t.memoizedState,h.state=$,xl(t,o,h,c),No();var Y=t.memoizedState;w!==ie||$!==Y||hs||e!==null&&e.dependencies!==null&&_i(e.dependencies)?(typeof _=="function"&&(ld(t,a,_,o),Y=t.memoizedState),(ne=hs||Al(t,a,ne,o,$,Y,N)||e!==null&&e.dependencies!==null&&_i(e.dependencies))?(V||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,Y,N),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,Y,N)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=Y),h.props=o,h.state=Y,h.context=N,o=ne):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),o=!1)}return h=o,lt(e,t),o=(t.flags&128)!==0,h||o?(h=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),t.flags|=1,e!==null&&o?(t.child=Vs(t,e.child,null,c),t.child=Vs(t,null,a,c)):j(e,t,a,c),t.memoizedState=h.state,e=t.child):e=ti(e,t,c),e}function $e(e,t,a,o){return Pe(),t.flags|=256,j(e,t,a,o),t.child}var ut={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Un(e){return{baseLanes:e,cachePool:Xr()}}function la(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Dr),e}function kr(e,t,a){var o=t.pendingProps,c=!1,h=(t.flags&128)!==0,w;if((w=h)||(w=e!==null&&e.memoizedState===null?!1:(vn.current&2)!==0),w&&(c=!0,t.flags&=-129),w=(t.flags&32)!==0,t.flags&=-33,e===null){if(ct){if(c?ji(t):oa(),(e=Bt)?(e=Yg(e,Fa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:$a,overflow:cr}:null,retryLane:536870912,hydrationErrors:null},a=Du(e),a.return=t,t.child=a,$n=t,Bt=null)):e=null,e===null)throw Rr(t);return Em(e)?t.lanes=32:t.lanes=536870912,null}var _=o.children;return o=o.fallback,c?(oa(),c=t.mode,_=Jr({mode:"hidden",children:_},c),o=sr(o,c,a,null),_.return=t,o.return=t,_.sibling=o,t.child=_,o=t.child,o.memoizedState=Un(a),o.childLanes=la(e,w,a),t.memoizedState=ut,X(null,o)):(ji(t),Oa(t,_))}var N=e.memoizedState;if(N!==null&&(_=N.dehydrated,_!==null)){if(h)t.flags&256?(ji(t),t.flags&=-257,t=Zr(e,t,a)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,t=null):(oa(),_=o.fallback,c=t.mode,o=Jr({mode:"visible",children:o.children},c),_=sr(_,c,a,null),_.flags|=2,o.return=t,_.return=t,o.sibling=_,t.child=o,Vs(t,e.child,null,a),o=t.child,o.memoizedState=Un(a),o.childLanes=la(e,w,a),t.memoizedState=ut,t=X(null,o));else if(ji(t),Em(_)){if(w=_.nextSibling&&_.nextSibling.dataset,w)var V=w.dgst;w=V,o=Error(s(419)),o.stack="",o.digest=w,xi({value:o,source:null,stack:null}),t=Zr(e,t,a)}else if(C||Bs(e,t,a,!1),w=(a&e.childLanes)!==0,C||w){if(w=Jt,w!==null&&(o=js(w,a),o!==0&&o!==N.retryLane))throw N.retryLane=o,is(e,o),vr(w,e,o),T;_m(_)||Gh(),t=Zr(e,t,a)}else _m(_)?(t.flags|=192,t.child=e.child,t=null):(e=N.treeContext,Bt=ni(_.nextSibling),$n=t,ct=!0,Si=null,Fa=!1,e!==null&&ls(t,e),t=Oa(t,o.children),t.flags|=4096);return t}return c?(oa(),_=o.fallback,c=t.mode,N=e.child,V=N.sibling,o=Ga(N,{mode:"hidden",children:o.children}),o.subtreeFlags=N.subtreeFlags&65011712,V!==null?_=Ga(V,_):(_=sr(_,c,a,null),_.flags|=2),_.return=t,o.return=t,o.sibling=_,t.child=o,X(null,o),o=t.child,_=e.child.memoizedState,_===null?_=Un(a):(c=_.cachePool,c!==null?(N=yn._currentValue,c=c.parent!==N?{parent:N,pool:N}:c):c=Xr(),_={baseLanes:_.baseLanes|a,cachePool:c}),o.memoizedState=_,o.childLanes=la(e,w,a),t.memoizedState=ut,X(e.child,o)):(ji(t),a=e.child,e=a.sibling,a=Ga(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(w=t.deletions,w===null?(t.deletions=[e],t.flags|=16):w.push(e)),t.child=a,t.memoizedState=null,a)}function Oa(e,t){return t=Jr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Jr(e,t){return e=ra(22,e,null,t),e.lanes=0,e}function Zr(e,t,a){return Vs(t,e.child,null,a),e=Oa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ks(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Qn(e.return,t,a)}function ei(e,t,a,o,c,h){var w=e.memoizedState;w===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:h}:(w.isBackwards=t,w.rendering=null,w.renderingStartTime=0,w.last=o,w.tail=a,w.tailMode=c,w.treeForkCount=h)}function Do(e,t,a){var o=t.pendingProps,c=o.revealOrder,h=o.tail;o=o.children;var w=vn.current,_=(w&2)!==0;if(_?(w=w&1|2,t.flags|=128):w&=1,de(vn,w),j(e,t,o,a),o=ct?Us:0,!_&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ks(e,a,t);else if(e.tag===19)Ks(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=t.child,c=null;a!==null;)e=a.alternate,e!==null&&ms(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=t.child,t.child=null):(c=a.sibling,a.sibling=null),ei(t,!1,c,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ms(e)===null){t.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}ei(t,!0,a,null,h,o);break;case"together":ei(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function ti(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Bo|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Bs(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Ga(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ga(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ss(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&_i(e)))}function Jn(e,t,a){switch(t.tag){case 3:mt(t,t.stateNode.containerInfo),hr(t,yn,e.memoizedState.cache),Pe();break;case 27:case 5:da(t);break;case 4:mt(t,t.stateNode.containerInfo);break;case 10:hr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fs(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(ji(t),t.flags|=128,null):(a&t.child.childLanes)!==0?kr(e,t,a):(ji(t),e=ti(e,t,a),e!==null?e.sibling:null);ji(t);break;case 19:var c=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Bs(e,t,a,!1),o=(a&t.childLanes)!==0),c){if(o)return Do(e,t,a);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),de(vn,vn.current),o)break;return null;case 22:return t.lanes=0,Q(e,t,a,t.pendingProps);case 24:hr(t,yn,e.memoizedState.cache)}return ti(e,t,a)}function Ka(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)C=!0;else{if(!Ss(e,a)&&(t.flags&128)===0)return C=!1,Jn(e,t,a);C=(e.flags&131072)!==0}else C=!1,ct&&(t.flags&1048576)!==0&&So(t,Us,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Ya(t.elementType),t.type=e,typeof e=="function")wi(e)?(o=Xs(e,o),t.tag=1,t=Be(null,t,e,o,a)):(t.tag=0,t=je(null,t,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===Z){t.tag=11,t=I(null,t,e,o,a);break e}else if(c===q){t.tag=14,t=O(null,t,e,o,a);break e}}throw t=qe(e)||e,Error(s(306,t,""))}}return t;case 0:return je(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,c=Xs(o,t.pendingProps),Be(e,t,o,c,a);case 3:e:{if(mt(t,t.stateNode.containerInfo),e===null)throw Error(s(387));o=t.pendingProps;var h=t.memoizedState;c=h.element,Gu(e,t),xl(t,o,null,a);var w=t.memoizedState;if(o=w.cache,hr(t,yn,o),o!==h.cache&&vl(t,[yn],a,!0),No(),o=w.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:w.cache},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){t=$e(e,t,o,a);break e}else if(o!==c){c=or(Error(s(424)),t),xi(c),t=$e(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Bt=ni(e.firstChild),$n=t,ct=!0,Si=null,Fa=!0,a=dh(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Pe(),o===c){t=ti(e,t,a);break e}j(e,t,o,a)}t=t.child}return t;case 26:return lt(e,t),e===null?(a=e0(t.type,null,t.pendingProps,null))?t.memoizedState=a:ct||(a=t.type,e=t.pendingProps,o=Yh(Ze.current).createElement(a),o[pt]=t,o[Rn]=e,ba(o,a,e),Ye(o),t.stateNode=o):t.memoizedState=e0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return da(t),e===null&&ct&&(o=t.stateNode=Qg(t.type,t.pendingProps,Ze.current),$n=t,Fa=!0,c=Bt,$o(t.type)?(Cm=c,Bt=ni(o.firstChild)):Bt=c),j(e,t,t.pendingProps.children,a),lt(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ct&&((c=o=Bt)&&(o=pb(o,t.type,t.pendingProps,Fa),o!==null?(t.stateNode=o,$n=t,Bt=ni(o.firstChild),Fa=!1,c=!0):c=!1),c||Rr(t)),da(t),c=t.type,h=t.pendingProps,w=e!==null?e.memoizedProps:null,o=h.children,wm(c,h)?o=null:w!==null&&wm(c,w)&&(t.flags|=32),t.memoizedState!==null&&(c=Wu(e,t,Tc,null,null,a),Cd._currentValue=c),lt(e,t),j(e,t,o,a),t.child;case 6:return e===null&&ct&&((e=a=Bt)&&(a=gb(a,t.pendingProps,Fa),a!==null?(t.stateNode=a,$n=t,Bt=null,e=!0):e=!1),e||Rr(t)),null;case 13:return kr(e,t,a);case 4:return mt(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Vs(t,null,o,a):j(e,t,o,a),t.child;case 11:return I(e,t,t.type,t.pendingProps,a);case 7:return j(e,t,t.pendingProps,a),t.child;case 8:return j(e,t,t.pendingProps.children,a),t.child;case 12:return j(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,hr(t,t.type,o.value),j(e,t,o.children,a),t.child;case 9:return c=t.type._context,o=t.pendingProps.children,be(t),c=On(c),o=o(c),t.flags|=1,j(e,t,o,a),t.child;case 14:return O(e,t,t.type,t.pendingProps,a);case 15:return U(e,t,t.type,t.pendingProps,a);case 19:return Do(e,t,a);case 31:return De(e,t,a);case 22:return Q(e,t,a,t.pendingProps);case 24:return be(t),o=On(yn),e===null?(c=Mo(),c===null&&(c=Jt,h=Pu(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),t.memoizedState={parent:o,cache:c},zu(t),hr(t,yn,c)):((e.lanes&a)!==0&&(Gu(e,t),xl(t,null,null,a),No()),c=e.memoizedState,h=t.memoizedState,c.parent!==o?(c={parent:o,cache:o},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),hr(t,yn,o)):(o=h.cache,hr(t,yn,o),o!==c.cache&&vl(t,[yn],a,!0))),j(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function wn(e){e.flags|=4}function Di(e,t,a,o,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(gg())e.flags|=8192;else throw Ti=xc,Ln}else e.flags&=-16777217}function Ir(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!i0(t))if(gg())e.flags|=8192;else throw Ti=xc,Ln}function Gc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$r():536870912,e.lanes|=t,Fc|=t)}function dd(e,t){if(!ct)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function un(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function zv(e,t,a){var o=t.pendingProps;switch(wc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(t),null;case 1:return un(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),qa(yn),Zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?wn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qr())),un(t),null;case 26:var c=t.type,h=t.memoizedState;return e===null?(wn(t),h!==null?(un(t),Ir(t,h)):(un(t),Di(t,c,null,o,a))):h?h!==e.memoizedState?(wn(t),un(t),Ir(t,h)):(un(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&wn(t),un(t),Di(t,c,e,o,a)),null;case 27:if(Vr(t),a=Ze.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&wn(t);else{if(!o){if(t.stateNode===null)throw Error(s(166));return un(t),null}e=xe.current,Nr(t)?dr(t):(e=Qg(c,o,a),t.stateNode=e,wn(t))}return un(t),null;case 5:if(Vr(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&wn(t);else{if(!o){if(t.stateNode===null)throw Error(s(166));return un(t),null}if(h=xe.current,Nr(t))dr(t);else{var w=Yh(Ze.current);switch(h){case 1:h=w.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=w.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=w.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=w.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=w.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?w.createElement("select",{is:o.is}):w.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?w.createElement(c,{is:o.is}):w.createElement(c)}}h[pt]=t,h[Rn]=o;e:for(w=t.child;w!==null;){if(w.tag===5||w.tag===6)h.appendChild(w.stateNode);else if(w.tag!==4&&w.tag!==27&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===t)break e;for(;w.sibling===null;){if(w.return===null||w.return===t)break e;w=w.return}w.sibling.return=w.return,w=w.sibling}t.stateNode=h;e:switch(ba(h,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&wn(t)}}return un(t),Di(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&wn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(s(166));if(e=Ze.current,Nr(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,c=$n,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[pt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||zg(e.nodeValue,a)),e||Rr(t,!0)}else e=Yh(e).createTextNode(o),e[pt]=t,t.stateNode=e}return un(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Nr(t),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[pt]=t}else Pe(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;un(t),e=!1}else a=qr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Wn(t),t):(Wn(t),null);if((t.flags&128)!==0)throw Error(s(558))}return un(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Nr(t),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[pt]=t}else Pe(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;un(t),c=!1}else c=qr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Wn(t),t):(Wn(t),null)}return Wn(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Gc(t,t.updateQueue),un(t),null);case 4:return Zt(),e===null&&pm(t.stateNode.containerInfo),un(t),null;case 10:return qa(t.type),un(t),null;case 19:if(te(vn),o=t.memoizedState,o===null)return un(t),null;if(c=(t.flags&128)!==0,h=o.rendering,h===null)if(c)dd(o,!1);else{if(jn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=ms(e),h!==null){for(t.flags|=128,dd(o,!1),e=h.updateQueue,t.updateQueue=e,Gc(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)vc(a,e),a=a.sibling;return de(vn,vn.current&1|2),ct&&ur(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&An()>Ph&&(t.flags|=128,c=!0,dd(o,!1),t.lanes=4194304)}else{if(!c)if(e=ms(h),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,Gc(t,e),dd(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!ct)return un(t),null}else 2*An()-o.renderingStartTime>Ph&&a!==536870912&&(t.flags|=128,c=!0,dd(o,!1),t.lanes=4194304);o.isBackwards?(h.sibling=t.child,t.child=h):(e=o.last,e!==null?e.sibling=h:t.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=An(),e.sibling=null,a=vn.current,de(vn,c?a&1|2:a&1),ct&&ur(t,o.treeForkCount),e):(un(t),null);case 22:case 23:return Wn(t),Hu(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(un(t),t.subtreeFlags&6&&(t.flags|=8192)):un(t),a=t.updateQueue,a!==null&&Gc(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&te(rn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qa(yn),un(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Gv(e,t){switch(wc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qa(yn),Zt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Vr(t),null;case 31:if(t.memoizedState!==null){if(Wn(t),t.alternate===null)throw Error(s(340));Pe()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Pe()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(vn),null;case 4:return Zt(),null;case 10:return qa(t.type),null;case 22:case 23:return Wn(t),Hu(),e!==null&&te(rn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qa(yn),null;case 25:return null;default:return null}}function Fp(e,t){switch(wc(t),t.tag){case 3:qa(yn),Zt();break;case 26:case 27:case 5:Vr(t);break;case 4:Zt();break;case 31:t.memoizedState!==null&&Wn(t);break;case 13:Wn(t);break;case 19:te(vn);break;case 10:qa(t.type);break;case 22:case 23:Wn(t),Hu(),e!==null&&te(rn);break;case 24:qa(yn)}}function hd(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var h=a.create,w=a.inst;o=h(),w.destroy=o}a=a.next}while(a!==c)}}catch(_){Ht(t,t.return,_)}}function Uo(e,t,a){try{var o=t.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var w=o.inst,_=w.destroy;if(_!==void 0){w.destroy=void 0,c=t;var N=a,V=_;try{V()}catch(ne){Ht(c,N,ne)}}}o=o.next}while(o!==h)}}catch(ne){Ht(t,t.return,ne)}}function Wp(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ec(t,a)}catch(o){Ht(e,e.return,o)}}}function qp(e,t,a){a.props=Xs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(e,t,o)}}function fd(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ht(e,t,c)}}function xs(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ht(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ht(e,t,c)}else a.current=null}function Yp(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ht(e,e.return,c)}}function Yf(e,t,a){try{var o=e.stateNode;cb(o,e.type,a,t),o[Rn]=t}catch(c){Ht(e,e.return,c)}}function Xp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$o(e.type)||e.tag===4}function Xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$o(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kf(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=rt));else if(o!==4&&(o===27&&$o(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Kf(e,t,a),e=e.sibling;e!==null;)Kf(e,t,a),e=e.sibling}function Ih(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&$o(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ih(e,t,a),e=e.sibling;e!==null;)Ih(e,t,a),e=e.sibling}function Kp(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);ba(t,o,a),t[pt]=e,t[Rn]=a}catch(h){Ht(e,e.return,h)}}var Qs=!1,qn=!1,Qf=!1,Qp=typeof WeakSet=="function"?WeakSet:Set,ca=null;function Vv(e,t){if(e=e.containerInfo,vm=tf,e=vo(e),ju(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var w=0,_=-1,N=-1,V=0,ne=0,ie=e,$=null;t:for(;;){for(var Y;ie!==a||c!==0&&ie.nodeType!==3||(_=w+c),ie!==h||o!==0&&ie.nodeType!==3||(N=w+o),ie.nodeType===3&&(w+=ie.nodeValue.length),(Y=ie.firstChild)!==null;)$=ie,ie=Y;for(;;){if(ie===e)break t;if($===a&&++V===c&&(_=w),$===h&&++ne===o&&(N=w),(Y=ie.nextSibling)!==null)break;ie=$,$=ie.parentNode}ie=Y}a=_===-1||N===-1?null:{start:_,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(bm={focusedElem:e,selectionRange:a},tf=!1,ca=t;ca!==null;)if(t=ca,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ca=e;else for(;ca!==null;){switch(t=ca,h=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=t,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Ce=Xs(a.type,c);e=o.getSnapshotBeforeUpdate(Ce,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ze){Ht(a,a.return,ze)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)xm(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ca=e;break}ca=t.return}}function Jp(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Zs(e,a),o&4&&hd(5,a);break;case 1:if(Zs(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(w){Ht(a,a.return,w)}else{var c=Xs(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(w){Ht(a,a.return,w)}}o&64&&Wp(a),o&512&&fd(a,a.return);break;case 3:if(Zs(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ec(e,t)}catch(w){Ht(a,a.return,w)}}break;case 27:t===null&&o&4&&Kp(a);case 26:case 5:Zs(e,a),t===null&&o&4&&Yp(a),o&512&&fd(a,a.return);break;case 12:Zs(e,a);break;case 31:Zs(e,a),o&4&&tg(e,a);break;case 13:Zs(e,a),o&4&&ng(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Qv.bind(null,a),yb(e,a))));break;case 22:if(o=a.memoizedState!==null||Qs,!o){t=t!==null&&t.memoizedState!==null||qn,c=Qs;var h=qn;Qs=o,(qn=t)&&!h?eo(e,a,(a.subtreeFlags&8772)!==0):Zs(e,a),Qs=c,qn=h}break;case 30:break;default:Zs(e,a)}}function Zp(e){var t=e.alternate;t!==null&&(e.alternate=null,Zp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ee(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Sn=null,mr=!1;function Js(e,t,a){for(a=a.child;a!==null;)eg(e,t,a),a=a.sibling}function eg(e,t,a){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(Hr,a)}catch{}switch(a.tag){case 26:qn||xs(a,t),Js(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qn||xs(a,t);var o=Sn,c=mr;$o(a.type)&&(Sn=a.stateNode,mr=!1),Js(e,t,a),xd(a.stateNode),Sn=o,mr=c;break;case 5:qn||xs(a,t);case 6:if(o=Sn,c=mr,Sn=null,Js(e,t,a),Sn=o,mr=c,Sn!==null)if(mr)try{(Sn.nodeType===9?Sn.body:Sn.nodeName==="HTML"?Sn.ownerDocument.body:Sn).removeChild(a.stateNode)}catch(h){Ht(a,t,h)}else try{Sn.removeChild(a.stateNode)}catch(h){Ht(a,t,h)}break;case 18:Sn!==null&&(mr?(e=Sn,Wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Zc(e)):Wg(Sn,a.stateNode));break;case 4:o=Sn,c=mr,Sn=a.stateNode.containerInfo,mr=!0,Js(e,t,a),Sn=o,mr=c;break;case 0:case 11:case 14:case 15:Uo(2,a,t),qn||Uo(4,a,t),Js(e,t,a);break;case 1:qn||(xs(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&qp(a,t,o)),Js(e,t,a);break;case 21:Js(e,t,a);break;case 22:qn=(o=qn)||a.memoizedState!==null,Js(e,t,a),qn=o;break;default:Js(e,t,a)}}function tg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Zc(e)}catch(a){Ht(t,t.return,a)}}}function ng(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Zc(e)}catch(a){Ht(t,t.return,a)}}function Hv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qp),t;default:throw Error(s(435,e.tag))}}function Lh(e,t){var a=Hv(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var c=Jv.bind(null,e,o);o.then(c,c)}})}function pr(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=e,w=t,_=w;e:for(;_!==null;){switch(_.tag){case 27:if($o(_.type)){Sn=_.stateNode,mr=!1;break e}break;case 5:Sn=_.stateNode,mr=!1;break e;case 3:case 4:Sn=_.stateNode.containerInfo,mr=!0;break e}_=_.return}if(Sn===null)throw Error(s(160));eg(h,w,c),Sn=null,mr=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ag(t,e),t=t.sibling}var Ui=null;function ag(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pr(t,e),gr(e),o&4&&(Uo(3,e,e.return),hd(3,e),Uo(5,e,e.return));break;case 1:pr(t,e),gr(e),o&512&&(qn||a===null||xs(a,a.return)),o&64&&Qs&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ui;if(pr(t,e),gr(e),o&512&&(qn||a===null||xs(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[Se]||h[pt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),ba(h,o,a),h[pt]=e,Ye(h),o=h;break e;case"link":var w=a0("link","href",c).get(o+(a.href||""));if(w){for(var _=0;_<w.length;_++)if(h=w[_],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){w.splice(_,1);break t}}h=c.createElement(o),ba(h,o,a),c.head.appendChild(h);break;case"meta":if(w=a0("meta","content",c).get(o+(a.content||""))){for(_=0;_<w.length;_++)if(h=w[_],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){w.splice(_,1);break t}}h=c.createElement(o),ba(h,o,a),c.head.appendChild(h);break;default:throw Error(s(468,o))}h[pt]=e,Ye(h),o=h}e.stateNode=o}else r0(c,e.type,e.stateNode);else e.stateNode=n0(c,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?r0(c,e.type,e.stateNode):n0(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Yf(e,e.memoizedProps,a.memoizedProps)}break;case 27:pr(t,e),gr(e),o&512&&(qn||a===null||xs(a,a.return)),a!==null&&o&4&&Yf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(pr(t,e),gr(e),o&512&&(qn||a===null||xs(a,a.return)),e.flags&32){c=e.stateNode;try{qi(c,"")}catch(Ce){Ht(e,e.return,Ce)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Yf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Qf=!0);break;case 6:if(pr(t,e),gr(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ce){Ht(e,e.return,Ce)}}break;case 3:if(Qh=null,c=Ui,Ui=Xh(t.containerInfo),pr(t,e),Ui=c,gr(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Zc(t.containerInfo)}catch(Ce){Ht(e,e.return,Ce)}Qf&&(Qf=!1,rg(e));break;case 4:o=Ui,Ui=Xh(e.stateNode.containerInfo),pr(t,e),gr(e),Ui=o;break;case 12:pr(t,e),gr(e);break;case 31:pr(t,e),gr(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Lh(e,o)));break;case 13:pr(t,e),gr(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Uh=An()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Lh(e,o)));break;case 22:c=e.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,V=Qs,ne=qn;if(Qs=V||c,qn=ne||N,pr(t,e),qn=ne,Qs=V,gr(e),o&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(a===null||N||Qs||qn||Nl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){N=a=t;try{if(h=N.stateNode,c)w=h.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{_=N.stateNode;var ie=N.memoizedProps.style,$=ie!=null&&ie.hasOwnProperty("display")?ie.display:null;_.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Ce){Ht(N,N.return,Ce)}}}else if(t.tag===6){if(a===null){N=t;try{N.stateNode.nodeValue=c?"":N.memoizedProps}catch(Ce){Ht(N,N.return,Ce)}}}else if(t.tag===18){if(a===null){N=t;try{var Y=N.stateNode;c?qg(Y,!0):qg(N.stateNode,!1)}catch(Ce){Ht(N,N.return,Ce)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Lh(e,a))));break;case 19:pr(t,e),gr(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Lh(e,o)));break;case 30:break;case 21:break;default:pr(t,e),gr(e)}}function gr(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(Xp(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,h=Xf(e);Ih(e,h,c);break;case 5:var w=a.stateNode;a.flags&32&&(qi(w,""),a.flags&=-33);var _=Xf(e);Ih(e,_,w);break;case 3:case 4:var N=a.stateNode.containerInfo,V=Xf(e);Kf(e,V,N);break;default:throw Error(s(161))}}catch(ne){Ht(e,e.return,ne)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;rg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Jp(e,t.alternate,t),t=t.sibling}function Nl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uo(4,t,t.return),Nl(t);break;case 1:xs(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&qp(t,t.return,a),Nl(t);break;case 27:xd(t.stateNode);case 26:case 5:xs(t,t.return),Nl(t);break;case 22:t.memoizedState===null&&Nl(t);break;case 30:Nl(t);break;default:Nl(t)}e=e.sibling}}function eo(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,c=e,h=t,w=h.flags;switch(h.tag){case 0:case 11:case 15:eo(c,h,a),hd(4,h);break;case 1:if(eo(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(V){Ht(o,o.return,V)}if(o=h,c=o.updateQueue,c!==null){var _=o.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)Hs(N[c],_)}catch(V){Ht(o,o.return,V)}}a&&w&64&&Wp(h),fd(h,h.return);break;case 27:Kp(h);case 26:case 5:eo(c,h,a),a&&o===null&&w&4&&Yp(h),fd(h,h.return);break;case 12:eo(c,h,a);break;case 31:eo(c,h,a),a&&w&4&&tg(c,h);break;case 13:eo(c,h,a),a&&w&4&&ng(c,h);break;case 22:h.memoizedState===null&&eo(c,h,a),fd(h,h.return);break;case 30:break;default:eo(c,h,a)}t=t.sibling}}function Jf(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Co(a))}function Zf(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Co(e))}function Pi(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ig(e,t,a,o),t=t.sibling}function ig(e,t,a,o){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Pi(e,t,a,o),c&2048&&hd(9,t);break;case 1:Pi(e,t,a,o);break;case 3:Pi(e,t,a,o),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Co(e)));break;case 12:if(c&2048){Pi(e,t,a,o),e=t.stateNode;try{var h=t.memoizedProps,w=h.id,_=h.onPostCommit;typeof _=="function"&&_(w,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Ht(t,t.return,N)}}else Pi(e,t,a,o);break;case 31:Pi(e,t,a,o);break;case 13:Pi(e,t,a,o);break;case 23:break;case 22:h=t.stateNode,w=t.alternate,t.memoizedState!==null?h._visibility&2?Pi(e,t,a,o):md(e,t):h._visibility&2?Pi(e,t,a,o):(h._visibility|=2,Vc(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),c&2048&&Jf(w,t);break;case 24:Pi(e,t,a,o),c&2048&&Zf(t.alternate,t);break;default:Pi(e,t,a,o)}}function Vc(e,t,a,o,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var h=e,w=t,_=a,N=o,V=w.flags;switch(w.tag){case 0:case 11:case 15:Vc(h,w,_,N,c),hd(8,w);break;case 23:break;case 22:var ne=w.stateNode;w.memoizedState!==null?ne._visibility&2?Vc(h,w,_,N,c):md(h,w):(ne._visibility|=2,Vc(h,w,_,N,c)),c&&V&2048&&Jf(w.alternate,w);break;case 24:Vc(h,w,_,N,c),c&&V&2048&&Zf(w.alternate,w);break;default:Vc(h,w,_,N,c)}t=t.sibling}}function md(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,c=o.flags;switch(o.tag){case 22:md(a,o),c&2048&&Jf(o.alternate,o);break;case 24:md(a,o),c&2048&&Zf(o.alternate,o);break;default:md(a,o)}t=t.sibling}}var pd=8192;function Hc(e,t,a){if(e.subtreeFlags&pd)for(e=e.child;e!==null;)sg(e,t,a),e=e.sibling}function sg(e,t,a){switch(e.tag){case 26:Hc(e,t,a),e.flags&pd&&e.memoizedState!==null&&Rb(a,Ui,e.memoizedState,e.memoizedProps);break;case 5:Hc(e,t,a);break;case 3:case 4:var o=Ui;Ui=Xh(e.stateNode.containerInfo),Hc(e,t,a),Ui=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=pd,pd=16777216,Hc(e,t,a),pd=o):Hc(e,t,a));break;default:Hc(e,t,a)}}function og(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function gd(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];ca=o,cg(o,e)}og(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lg(e),e=e.sibling}function lg(e){switch(e.tag){case 0:case 11:case 15:gd(e),e.flags&2048&&Uo(9,e,e.return);break;case 3:gd(e);break;case 12:gd(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Dh(e)):gd(e);break;default:gd(e)}}function Dh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];ca=o,cg(o,e)}og(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uo(8,t,t.return),Dh(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Dh(t));break;default:Dh(t)}e=e.sibling}}function cg(e,t){for(;ca!==null;){var a=ca;switch(a.tag){case 0:case 11:case 15:Uo(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,ca=o;else e:for(a=e;ca!==null;){o=ca;var c=o.sibling,h=o.return;if(Zp(o),o===a){ca=null;break e}if(c!==null){c.return=h,ca=c;break e}ca=h}}}var $v={getCacheForType:function(e){var t=On(yn),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return On(yn).controller.signal}},Fv=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Jt=null,ht=null,yt=0,Vt=0,Lr=null,Po=!1,$c=!1,em=!1,to=0,jn=0,Bo=0,Ol=0,tm=0,Dr=0,Fc=0,yd=null,yr=null,nm=!1,Uh=0,ug=0,Ph=1/0,Bh=null,zo=null,Zn=0,Go=null,Wc=null,no=0,am=0,rm=null,dg=null,vd=0,im=null;function Ur(){return(Pt&2)!==0&&yt!==0?yt&-yt:P.T!==null?dm():Sr()}function hg(){if(Dr===0)if((yt&536870912)===0||ct){var e=wr;wr<<=1,(wr&3932160)===0&&(wr=262144),Dr=e}else Dr=536870912;return e=sa.current,e!==null&&(e.flags|=32),Dr}function vr(e,t,a){(e===Jt&&(Vt===2||Vt===9)||e.cancelPendingCommit!==null)&&(qc(e,0),Vo(e,yt,Dr,!1)),ci(e,a),((Pt&2)===0||e!==Jt)&&(e===Jt&&((Pt&2)===0&&(Ol|=a),jn===4&&Vo(e,yt,Dr,!1)),_s(e))}function fg(e,t,a){if((Pt&6)!==0)throw Error(s(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Et(e,t),c=o?Yv(e,t):om(e,t,!0),h=o;do{if(c===0){$c&&!o&&Vo(e,t,0,!1);break}else{if(a=e.current.alternate,h&&!Wv(a)){c=om(e,t,!1),h=!1;continue}if(c===2){if(h=t,e.errorRecoveryDisabledLanes&h)var w=0;else w=e.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){t=w;e:{var _=e;c=yd;var N=_.current.memoizedState.isDehydrated;if(N&&(qc(_,w).flags|=256),w=om(_,w,!1),w!==2){if(em&&!N){_.errorRecoveryDisabledLanes|=h,Ol|=h,c=4;break e}h=yr,yr=c,h!==null&&(yr===null?yr=h:yr.push.apply(yr,h))}c=w}if(h=!1,c!==2)continue}}if(c===1){qc(e,0),Vo(e,t,0,!0);break}e:{switch(o=e,h=c,h){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Vo(o,t,Dr,!Po);break e;case 2:yr=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(c=Uh+300-An(),10<c)){if(Vo(o,t,Dr,!Po),Hi(o,0,!0)!==0)break e;no=t,o.timeoutHandle=$g(mg.bind(null,o,a,yr,Bh,nm,t,Dr,Ol,Fc,Po,h,"Throttled",-0,0),c);break e}mg(o,a,yr,Bh,nm,t,Dr,Ol,Fc,Po,h,null,-0,0)}}break}while(!0);_s(e)}function mg(e,t,a,o,c,h,w,_,N,V,ne,ie,$,Y){if(e.timeoutHandle=-1,ie=t.subtreeFlags,ie&8192||(ie&16785408)===16785408){ie={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rt},sg(t,h,ie);var Ce=(h&62914560)===h?Uh-An():(h&4194048)===h?ug-An():0;if(Ce=Nb(ie,Ce),Ce!==null){no=h,e.cancelPendingCommit=Ce(xg.bind(null,e,t,h,a,o,c,w,_,N,ne,ie,null,$,Y)),Vo(e,h,w,!V);return}}xg(e,t,h,a,o,c,w,_,N)}function Wv(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!Ua(h(),c))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vo(e,t,a,o){t&=~tm,t&=~Ol,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var c=t;0<c;){var h=31-Re(c),w=1<<h;o[h]=-1,c&=~w}a!==0&&ui(e,a,t)}function zh(){return(Pt&6)===0?(bd(0),!1):!0}function sm(){if(ht!==null){if(Vt===0)var e=ht.return;else e=ht,Wa=cs=null,Yu(e),Mi=null,Ro=0,e=ht;for(;e!==null;)Fp(e.alternate,e),e=e.return;ht=null}}function qc(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),no=0,sm(),Jt=e,ht=a=Ga(e.current,null),yt=t,Vt=0,Lr=null,Po=!1,$c=Et(e,t),em=!1,Fc=Dr=tm=Ol=Bo=jn=0,yr=yd=null,nm=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var c=31-Re(o),h=1<<c;t|=e[c],o&=~h}return to=t,Ba(),a}function pg(e,t){Fe=null,P.H=Ml,t===Ao||t===Sl?(t=Gs(),Vt=3):t===Ln?(t=Gs(),Vt=4):Vt=t===T?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Lr=t,ht===null&&(jn=1,zc(e,or(t,e.current)))}function gg(){var e=sa.current;return e===null?!0:(yt&4194048)===yt?cn===null:(yt&62914560)===yt||(yt&536870912)!==0?e===cn:!1}function yg(){var e=P.H;return P.H=Ml,e===null?Ml:e}function vg(){var e=P.A;return P.A=$v,e}function Gh(){jn=4,Po||(yt&4194048)!==yt&&sa.current!==null||($c=!0),(Bo&134217727)===0&&(Ol&134217727)===0||Jt===null||Vo(Jt,yt,Dr,!1)}function om(e,t,a){var o=Pt;Pt|=2;var c=yg(),h=vg();(Jt!==e||yt!==t)&&(Bh=null,qc(e,t)),t=!1;var w=jn;e:do try{if(Vt!==0&&ht!==null){var _=ht,N=Lr;switch(Vt){case 8:sm(),w=6;break e;case 3:case 2:case 9:case 6:sa.current===null&&(t=!0);var V=Vt;if(Vt=0,Lr=null,Yc(e,_,N,V),a&&$c){w=0;break e}break;default:V=Vt,Vt=0,Lr=null,Yc(e,_,N,V)}}qv(),w=jn;break}catch(ne){pg(e,ne)}while(!0);return t&&e.shellSuspendCounter++,Wa=cs=null,Pt=o,P.H=c,P.A=h,ht===null&&(Jt=null,yt=0,Ba()),w}function qv(){for(;ht!==null;)bg(ht)}function Yv(e,t){var a=Pt;Pt|=2;var o=yg(),c=vg();Jt!==e||yt!==t?(Bh=null,Ph=An()+500,qc(e,t)):$c=Et(e,t);e:do try{if(Vt!==0&&ht!==null){t=ht;var h=Lr;t:switch(Vt){case 1:Vt=0,Lr=null,Yc(e,t,h,1);break;case 2:case 9:if(ya(h)){Vt=0,Lr=null,wg(t);break}t=function(){Vt!==2&&Vt!==9||Jt!==e||(Vt=7),_s(e)},h.then(t,t);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:ya(h)?(Vt=0,Lr=null,wg(t)):(Vt=0,Lr=null,Yc(e,t,h,7));break;case 5:var w=null;switch(ht.tag){case 26:w=ht.memoizedState;case 5:case 27:var _=ht;if(w?i0(w):_.stateNode.complete){Vt=0,Lr=null;var N=_.sibling;if(N!==null)ht=N;else{var V=_.return;V!==null?(ht=V,Vh(V)):ht=null}break t}}Vt=0,Lr=null,Yc(e,t,h,5);break;case 6:Vt=0,Lr=null,Yc(e,t,h,6);break;case 8:sm(),jn=6;break e;default:throw Error(s(462))}}Xv();break}catch(ne){pg(e,ne)}while(!0);return Wa=cs=null,P.H=o,P.A=c,Pt=a,ht!==null?0:(Jt=null,yt=0,Ba(),jn)}function Xv(){for(;ht!==null&&!uo();)bg(ht)}function bg(e){var t=Ka(e.alternate,e,to);e.memoizedProps=e.pendingProps,t===null?Vh(e):ht=t}function wg(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Lt(a,t,t.pendingProps,t.type,void 0,yt);break;case 11:t=Lt(a,t,t.pendingProps,t.type.render,t.ref,yt);break;case 5:Yu(t);default:Fp(a,t),t=ht=vc(t,to),t=Ka(a,t,to)}e.memoizedProps=e.pendingProps,t===null?Vh(e):ht=t}function Yc(e,t,a,o){Wa=cs=null,Yu(t),Mi=null,Ro=0;var c=t.return;try{if(S(e,c,t,a,yt)){jn=1,zc(e,or(a,e.current)),ht=null;return}}catch(h){if(c!==null)throw ht=c,h;jn=1,zc(e,or(a,e.current)),ht=null;return}t.flags&32768?(ct||o===1?e=!0:$c||(yt&536870912)!==0?e=!1:(Po=e=!0,(o===2||o===9||o===3||o===6)&&(o=sa.current,o!==null&&o.tag===13&&(o.flags|=16384))),Sg(t,e)):Vh(t)}function Vh(e){var t=e;do{if((t.flags&32768)!==0){Sg(t,Po);return}e=t.return;var a=zv(t.alternate,t,to);if(a!==null){ht=a;return}if(t=t.sibling,t!==null){ht=t;return}ht=t=e}while(t!==null);jn===0&&(jn=5)}function Sg(e,t){do{var a=Gv(e.alternate,e);if(a!==null){a.flags&=32767,ht=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ht=e;return}ht=e=a}while(e!==null);jn=6,ht=null}function xg(e,t,a,o,c,h,w,_,N){e.cancelPendingCommit=null;do Hh();while(Zn!==0);if((Pt&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(h=t.lanes|t.childLanes,h|=gc,$i(e,a,h,w,_,N),e===Jt&&(ht=Jt=null,yt=0),Wc=t,Go=e,no=a,am=h,rm=c,dg=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Zv(dn,function(){return Mg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,c=ce.p,ce.p=2,w=Pt,Pt|=4;try{Vv(e,t,a)}finally{Pt=w,ce.p=c,P.T=o}}Zn=1,_g(),Eg(),Cg()}}function _g(){if(Zn===1){Zn=0;var e=Go,t=Wc,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=ce.p;ce.p=2;var c=Pt;Pt|=4;try{ag(t,e);var h=bm,w=vo(e.containerInfo),_=h.focusedElem,N=h.selectionRange;if(w!==_&&_&&_.ownerDocument&&ih(_.ownerDocument.documentElement,_)){if(N!==null&&ju(_)){var V=N.start,ne=N.end;if(ne===void 0&&(ne=V),"selectionStart"in _)_.selectionStart=V,_.selectionEnd=Math.min(ne,_.value.length);else{var ie=_.ownerDocument||document,$=ie&&ie.defaultView||window;if($.getSelection){var Y=$.getSelection(),Ce=_.textContent.length,ze=Math.min(N.start,Ce),Kt=N.end===void 0?ze:Math.min(N.end,Ce);!Y.extend&&ze>Kt&&(w=Kt,Kt=ze,ze=w);var z=fc(_,ze),L=fc(_,Kt);if(z&&L&&(Y.rangeCount!==1||Y.anchorNode!==z.node||Y.anchorOffset!==z.offset||Y.focusNode!==L.node||Y.focusOffset!==L.offset)){var G=ie.createRange();G.setStart(z.node,z.offset),Y.removeAllRanges(),ze>Kt?(Y.addRange(G),Y.extend(L.node,L.offset)):(G.setEnd(L.node,L.offset),Y.addRange(G))}}}}for(ie=[],Y=_;Y=Y.parentNode;)Y.nodeType===1&&ie.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<ie.length;_++){var re=ie[_];re.element.scrollLeft=re.left,re.element.scrollTop=re.top}}tf=!!vm,bm=vm=null}finally{Pt=c,ce.p=o,P.T=a}}e.current=t,Zn=2}}function Eg(){if(Zn===2){Zn=0;var e=Go,t=Wc,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=ce.p;ce.p=2;var c=Pt;Pt|=4;try{Jp(e,t.alternate,t)}finally{Pt=c,ce.p=o,P.T=a}}Zn=3}}function Cg(){if(Zn===4||Zn===3){Zn=0,Pn();var e=Go,t=Wc,a=no,o=dg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Zn=5:(Zn=0,Wc=Go=null,Tg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(zo=null),ha(a),t=t.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(Hr,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=P.T,c=ce.p,ce.p=2,P.T=null;try{for(var h=e.onRecoverableError,w=0;w<o.length;w++){var _=o[w];h(_.value,{componentStack:_.stack})}}finally{P.T=t,ce.p=c}}(no&3)!==0&&Hh(),_s(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===im?vd++:(vd=0,im=e):vd=0,bd(0)}}function Tg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Co(t)))}function Hh(){return _g(),Eg(),Cg(),Mg()}function Mg(){if(Zn!==5)return!1;var e=Go,t=am;am=0;var a=ha(no),o=P.T,c=ce.p;try{ce.p=32>a?32:a,P.T=null,a=rm,rm=null;var h=Go,w=no;if(Zn=0,Wc=Go=null,no=0,(Pt&6)!==0)throw Error(s(331));var _=Pt;if(Pt|=4,lg(h.current),ig(h,h.current,w,a),Pt=_,bd(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(Hr,h)}catch{}return!0}finally{ce.p=c,P.T=o,Tg(e,t)}}function Ag(e,t,a){t=or(a,t),t=ud(e.stateNode,t,2),e=Ri(e,t,2),e!==null&&(ci(e,2),_s(e))}function Ht(e,t,a){if(e.tag===3)Ag(e,e,a);else for(;t!==null;){if(t.tag===3){Ag(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(zo===null||!zo.has(o))){e=or(a,e),a=f(2),o=Ri(t,a,2),o!==null&&(b(a,o,t,e),ci(o,2),_s(o));break}}t=t.return}}function lm(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Fv;var c=new Set;o.set(t,c)}else c=o.get(t),c===void 0&&(c=new Set,o.set(t,c));c.has(a)||(em=!0,c.add(a),e=Kv.bind(null,e,t,a),t.then(e,e))}function Kv(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Jt===e&&(yt&a)===a&&(jn===4||jn===3&&(yt&62914560)===yt&&300>An()-Uh?(Pt&2)===0&&qc(e,0):tm|=a,Fc===yt&&(Fc=0)),_s(e)}function Rg(e,t){t===0&&(t=$r()),e=is(e,t),e!==null&&(ci(e,t),_s(e))}function Qv(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Rg(e,a)}function Jv(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(t),Rg(e,a)}function Zv(e,t){return _a(e,t)}var $h=null,Xc=null,cm=!1,Fh=!1,um=!1,Ho=0;function _s(e){e!==Xc&&e.next===null&&(Xc===null?$h=Xc=e:Xc=Xc.next=e),Fh=!0,cm||(cm=!0,tb())}function bd(e,t){if(!um&&Fh){um=!0;do for(var a=!1,o=$h;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var w=o.suspendedLanes,_=o.pingedLanes;h=(1<<31-Re(42|e)+1)-1,h&=c&~(w&~_),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,kg(o,h))}else h=yt,h=Hi(o,o===Jt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Et(o,h)||(a=!0,kg(o,h));o=o.next}while(a);um=!1}}function eb(){Ng()}function Ng(){Fh=cm=!1;var e=0;Ho!==0&&db()&&(e=Ho);for(var t=An(),a=null,o=$h;o!==null;){var c=o.next,h=Og(o,t);h===0?(o.next=null,a===null?$h=c:a.next=c,c===null&&(Xc=a)):(a=o,(e!==0||(h&3)!==0)&&(Fh=!0)),o=c}Zn!==0&&Zn!==5||bd(e),Ho!==0&&(Ho=0)}function Og(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var w=31-Re(h),_=1<<w,N=c[w];N===-1?((_&a)===0||(_&o)!==0)&&(c[w]=La(_,t)):N<=t&&(e.expiredLanes|=_),h&=~_}if(t=Jt,a=yt,a=Hi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Vt===2||Vt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&$t(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Et(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&$t(o),ha(a)){case 2:case 8:a=Qt;break;case 32:a=dn;break;case 268435456:a=oi;break;default:a=dn}return o=jg.bind(null,e),a=_a(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&$t(o),e.callbackPriority=2,e.callbackNode=null,2}function jg(e,t){if(Zn!==0&&Zn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hh()&&e.callbackNode!==a)return null;var o=yt;return o=Hi(e,e===Jt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(fg(e,o,t),Og(e,An()),e.callbackNode!=null&&e.callbackNode===a?jg.bind(null,e):null)}function kg(e,t){if(Hh())return null;fg(e,t,!0)}function tb(){fb(function(){(Pt&6)!==0?_a(_t,eb):Ng()})}function dm(){if(Ho===0){var e=Tt;e===0&&(e=Ea,Ea<<=1,(Ea&261888)===0&&(Ea=256)),Ho=e}return Ho}function Ig(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jt(""+e)}function Lg(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function nb(e,t,a,o,c){if(t==="submit"&&a&&a.stateNode===c){var h=Ig((c[Rn]||null).action),w=o.submitter;w&&(t=(t=w[Rn]||null)?Ig(t.formAction):w.getAttribute("formAction"),t!==null&&(h=t,w=null));var _=new Hn("action","action",null,o,c);e.push({event:_,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ho!==0){var N=w?Lg(c,w):new FormData(c);vs(a,{pending:!0,data:N,method:c.method,action:h},null,N)}}else typeof h=="function"&&(_.preventDefault(),N=w?Lg(c,w):new FormData(c),vs(a,{pending:!0,data:N,method:c.method,action:h},h,N))},currentTarget:c}]})}}for(var hm=0;hm<rs.length;hm++){var fm=rs[hm],ab=fm.toLowerCase(),rb=fm[0].toUpperCase()+fm.slice(1);Pa(ab,"on"+rb)}Pa(oh,"onAnimationEnd"),Pa(pc,"onAnimationIteration"),Pa(lh,"onAnimationStart"),Pa("dblclick","onDoubleClick"),Pa("focusin","onFocus"),Pa("focusout","onBlur"),Pa(ml,"onTransitionRun"),Pa($f,"onTransitionStart"),Pa(Iu,"onTransitionCancel"),Pa(ch,"onTransitionEnd"),ta("onMouseEnter",["mouseout","mouseover"]),ta("onMouseLeave",["mouseout","mouseover"]),ta("onPointerEnter",["pointerout","pointerover"]),ta("onPointerLeave",["pointerout","pointerover"]),fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fa("onBeforeInput",["compositionend","keypress","textInput","paste"]),fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ib=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wd));function Dg(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var h=void 0;if(t)for(var w=o.length-1;0<=w;w--){var _=o[w],N=_.instance,V=_.currentTarget;if(_=_.listener,N!==h&&c.isPropagationStopped())break e;h=_,c.currentTarget=V;try{h(c)}catch(ne){pl(ne)}c.currentTarget=null,h=N}else for(w=0;w<o.length;w++){if(_=o[w],N=_.instance,V=_.currentTarget,_=_.listener,N!==h&&c.isPropagationStopped())break e;h=_,c.currentTarget=V;try{h(c)}catch(ne){pl(ne)}c.currentTarget=null,h=N}}}}function ft(e,t){var a=t[xr];a===void 0&&(a=t[xr]=new Set);var o=e+"__bubble";a.has(o)||(Ug(t,e,2,!1),a.add(o))}function mm(e,t,a){var o=0;t&&(o|=4),Ug(a,e,o,t)}var Wh="_reactListening"+Math.random().toString(36).slice(2);function pm(e){if(!e[Wh]){e[Wh]=!0,Ot.forEach(function(a){a!=="selectionchange"&&(ib.has(a)||mm(a,!1,e),mm(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wh]||(t[Wh]=!0,mm("selectionchange",!1,t))}}function Ug(e,t,a,o){switch(h0(t)){case 2:var c=kb;break;case 8:c=Ib;break;default:c=Nm}a=c.bind(null,t,a,e),c=void 0,!tn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(t,a,{capture:!0,passive:c}):e.addEventListener(t,a,!0):c!==void 0?e.addEventListener(t,a,{passive:c}):e.addEventListener(t,a,!1)}function gm(e,t,a,o,c){var h=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var w=o.tag;if(w===3||w===4){var _=o.stateNode.containerInfo;if(_===c)break;if(w===4)for(w=o.return;w!==null;){var N=w.tag;if((N===3||N===4)&&w.stateNode.containerInfo===c)return;w=w.return}for(;_!==null;){if(w=gt(_),w===null)return;if(N=w.tag,N===5||N===6||N===26||N===27){o=h=w;continue e}_=_.parentNode}}o=o.return}Vn(function(){var V=h,ne=bt(a),ie=[];e:{var $=Lu.get(e);if($!==void 0){var Y=Hn,Ce=e;switch(e){case"keypress":if(nn(a)===0)break e;case"keydown":case"keyup":Y=xu;break;case"focusin":Ce="focus",Y=Xi;break;case"focusout":Ce="blur",Y=Xi;break;case"beforeblur":case"afterblur":Y=Xi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=ir;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=mi;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=nc;break;case oh:case pc:case lh:Y=Tr;break;case ch:Y=ah;break;case"scroll":case"scrollend":Y=rr;break;case"wheel":Y=_u;break;case"copy":case"cut":case"paste":Y=Jl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=tc;break;case"toggle":case"beforetoggle":Y=Eu}var ze=(t&4)!==0,Kt=!ze&&(e==="scroll"||e==="scrollend"),z=ze?$!==null?$+"Capture":null:$;ze=[];for(var L=V,G;L!==null;){var re=L;if(G=re.stateNode,re=re.tag,re!==5&&re!==26&&re!==27||G===null||z===null||(re=gn(L,z),re!=null&&ze.push(Sd(L,re,G))),Kt)break;L=L.return}0<ze.length&&($=new Y($,Ce,null,a,ne),ie.push({event:$,listeners:ze}))}}if((t&7)===0){e:{if($=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",$&&a!==pn&&(Ce=a.relatedTarget||a.fromElement)&&(gt(Ce)||Ce[Le]))break e;if((Y||$)&&($=ne.window===ne?ne:($=ne.ownerDocument)?$.defaultView||$.parentWindow:window,Y?(Ce=a.relatedTarget||a.toElement,Y=V,Ce=Ce?gt(Ce):null,Ce!==null&&(Kt=d(Ce),ze=Ce.tag,Ce!==Kt||ze!==5&&ze!==27&&ze!==6)&&(Ce=null)):(Y=null,Ce=V),Y!==Ce)){if(ze=ir,re="onMouseLeave",z="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(ze=tc,re="onPointerLeave",z="onPointerEnter",L="pointer"),Kt=Y==null?$:At(Y),G=Ce==null?$:At(Ce),$=new ze(re,L+"leave",Y,a,ne),$.target=Kt,$.relatedTarget=G,re=null,gt(ne)===V&&(ze=new ze(z,L+"enter",Ce,a,ne),ze.target=G,ze.relatedTarget=Kt,re=ze),Kt=re,Y&&Ce)t:{for(ze=sb,z=Y,L=Ce,G=0,re=z;re;re=ze(re))G++;re=0;for(var Ue=L;Ue;Ue=ze(Ue))re++;for(;0<G-re;)z=ze(z),G--;for(;0<re-G;)L=ze(L),re--;for(;G--;){if(z===L||L!==null&&z===L.alternate){ze=z;break t}z=ze(z),L=ze(L)}ze=null}else ze=null;Y!==null&&Pg(ie,$,Y,ze,!1),Ce!==null&&Kt!==null&&Pg(ie,Kt,Ce,ze,!0)}}e:{if($=V?At(V):window,Y=$.nodeName&&$.nodeName.toLowerCase(),Y==="select"||Y==="input"&&$.type==="file")var Dt=yi;else if(ll($))if(cc)Dt=Hf;else{Dt=Vf;var Me=Ru}else Y=$.nodeName,!Y||Y.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?V&&Xe(V.elementType)&&(Dt=yi):Dt=Nu;if(Dt&&(Dt=Dt(e,V))){yo(ie,Dt,a,ne);break e}Me&&Me(e,$,V),e==="focusout"&&V&&$.type==="number"&&V.memoizedProps.value!=null&&hi($,"number",$.value)}switch(Me=V?At(V):window,e){case"focusin":(ll(Me)||Me.contentEditable==="true")&&(ns=Me,dl=V,hl=null);break;case"focusout":hl=dl=ns=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,as(ie,a,ne);break;case"selectionchange":if(ku)break;case"keydown":case"keyup":as(ie,a,ne)}var it;if(sl)e:{switch(e){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Ji?Mu(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(Tu&&a.locale!=="ko"&&(Ji||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Ji&&(it=pa()):(Gt=ne,Kn="value"in Gt?Gt.value:Gt.textContent,Ji=!0)),Me=qh(V,vt),0<Me.length&&(vt=new nl(vt,e,null,a,ne),ie.push({event:vt,listeners:Me}),it?vt.data=it:(it=ic(a),it!==null&&(vt.data=it)))),(it=Cu?sc(e,a):oc(e,a))&&(vt=qh(V,"onBeforeInput"),0<vt.length&&(Me=new nl("onBeforeInput","beforeinput",null,a,ne),ie.push({event:Me,listeners:vt}),Me.data=it)),nb(ie,e,V,a,ne)}Dg(ie,t)})}function Sd(e,t,a){return{instance:e,listener:t,currentTarget:a}}function qh(e,t){for(var a=t+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=gn(e,a),c!=null&&o.unshift(Sd(e,c,h)),c=gn(e,t),c!=null&&o.push(Sd(e,c,h))),e.tag===3)return o;e=e.return}return[]}function sb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pg(e,t,a,o,c){for(var h=t._reactName,w=[];a!==null&&a!==o;){var _=a,N=_.alternate,V=_.stateNode;if(_=_.tag,N!==null&&N===o)break;_!==5&&_!==26&&_!==27||V===null||(N=V,c?(V=gn(a,h),V!=null&&w.unshift(Sd(a,V,N))):c||(V=gn(a,h),V!=null&&w.push(Sd(a,V,N)))),a=a.return}w.length!==0&&e.push({event:t,listeners:w})}var ob=/\r\n?/g,lb=/\u0000|\uFFFD/g;function Bg(e){return(typeof e=="string"?e:""+e).replace(ob,`
`).replace(lb,"")}function zg(e,t){return t=Bg(t),Bg(e)===t}function Xt(e,t,a,o,c,h){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||qi(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&qi(e,""+o);break;case"className":ma(e,"class",o);break;case"tabIndex":ma(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ma(e,a,o);break;case"style":po(e,o,h);break;case"data":if(t!=="object"){ma(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=jt(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(t!=="input"&&Xt(e,t,"name",c.name,c,null),Xt(e,t,"formEncType",c.formEncType,c,null),Xt(e,t,"formMethod",c.formMethod,c,null),Xt(e,t,"formTarget",c.formTarget,c,null)):(Xt(e,t,"encType",c.encType,c,null),Xt(e,t,"method",c.method,c,null),Xt(e,t,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=jt(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=rt);break;case"onScroll":o!=null&&ft("scroll",e);break;case"onScrollEnd":o!=null&&ft("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=jt(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ft("beforetoggle",e),ft("toggle",e),nr(e,"popover",o);break;case"xlinkActuate":zn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":zn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":zn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":zn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":zn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":zn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":zn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":zn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":zn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":nr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zt.get(a)||a,nr(e,a,o))}}function ym(e,t,a,o,c,h){switch(a){case"style":po(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?qi(e,o):(typeof o=="number"||typeof o=="bigint")&&qi(e,""+o);break;case"onScroll":o!=null&&ft("scroll",e);break;case"onScrollEnd":o!=null&&ft("scrollend",e);break;case"onClick":o!=null&&(e.onclick=rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),t=a.slice(2,c?a.length-7:void 0),h=e[Rn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(t,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):nr(e,a,o)}}}function ba(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",e),ft("load",e);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var w=a[h];if(w!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Xt(e,t,h,w,a,null)}}c&&Xt(e,t,"srcSet",a.srcSet,a,null),o&&Xt(e,t,"src",a.src,a,null);return;case"input":ft("invalid",e);var _=h=w=c=null,N=null,V=null;for(o in a)if(a.hasOwnProperty(o)){var ne=a[o];if(ne!=null)switch(o){case"name":c=ne;break;case"type":w=ne;break;case"checked":N=ne;break;case"defaultChecked":V=ne;break;case"value":h=ne;break;case"defaultValue":_=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,t));break;default:Xt(e,t,o,ne,a,null)}}Da(e,h,_,N,V,w,c,!1);return;case"select":ft("invalid",e),o=w=h=null;for(c in a)if(a.hasOwnProperty(c)&&(_=a[c],_!=null))switch(c){case"value":h=_;break;case"defaultValue":w=_;break;case"multiple":o=_;default:Xt(e,t,c,_,a,null)}t=h,a=w,e.multiple=!!o,t!=null?na(e,!!o,t,!1):a!=null&&na(e,!!o,a,!0);return;case"textarea":ft("invalid",e),h=c=o=null;for(w in a)if(a.hasOwnProperty(w)&&(_=a[w],_!=null))switch(w){case"value":o=_;break;case"defaultValue":c=_;break;case"children":h=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(91));break;default:Xt(e,t,w,_,a,null)}mo(e,o,c,h);return;case"option":for(N in a)a.hasOwnProperty(N)&&(o=a[N],o!=null)&&(N==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Xt(e,t,N,o,a,null));return;case"dialog":ft("beforetoggle",e),ft("toggle",e),ft("cancel",e),ft("close",e);break;case"iframe":case"object":ft("load",e);break;case"video":case"audio":for(o=0;o<wd.length;o++)ft(wd[o],e);break;case"image":ft("error",e),ft("load",e);break;case"details":ft("toggle",e);break;case"embed":case"source":case"link":ft("error",e),ft("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Xt(e,t,V,o,a,null)}return;default:if(Xe(t)){for(ne in a)a.hasOwnProperty(ne)&&(o=a[ne],o!==void 0&&ym(e,t,ne,o,a,void 0));return}}for(_ in a)a.hasOwnProperty(_)&&(o=a[_],o!=null&&Xt(e,t,_,o,a,null))}function cb(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,w=null,_=null,N=null,V=null,ne=null;for(Y in a){var ie=a[Y];if(a.hasOwnProperty(Y)&&ie!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":N=ie;default:o.hasOwnProperty(Y)||Xt(e,t,Y,null,o,ie)}}for(var $ in o){var Y=o[$];if(ie=a[$],o.hasOwnProperty($)&&(Y!=null||ie!=null))switch($){case"type":h=Y;break;case"name":c=Y;break;case"checked":V=Y;break;case"defaultChecked":ne=Y;break;case"value":w=Y;break;case"defaultValue":_=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,t));break;default:Y!==ie&&Xt(e,t,$,Y,o,ie)}}mn(e,w,_,N,V,ne,h,c);return;case"select":Y=w=_=$=null;for(h in a)if(N=a[h],a.hasOwnProperty(h)&&N!=null)switch(h){case"value":break;case"multiple":Y=N;default:o.hasOwnProperty(h)||Xt(e,t,h,null,o,N)}for(c in o)if(h=o[c],N=a[c],o.hasOwnProperty(c)&&(h!=null||N!=null))switch(c){case"value":$=h;break;case"defaultValue":_=h;break;case"multiple":w=h;default:h!==N&&Xt(e,t,c,h,o,N)}t=_,a=w,o=Y,$!=null?na(e,!!a,$,!1):!!o!=!!a&&(t!=null?na(e,!!a,t,!0):na(e,!!a,a?[]:"",!1));return;case"textarea":Y=$=null;for(_ in a)if(c=a[_],a.hasOwnProperty(_)&&c!=null&&!o.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Xt(e,t,_,null,o,c)}for(w in o)if(c=o[w],h=a[w],o.hasOwnProperty(w)&&(c!=null||h!=null))switch(w){case"value":$=c;break;case"defaultValue":Y=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&Xt(e,t,w,c,o,h)}Wi(e,$,Y);return;case"option":for(var Ce in a)$=a[Ce],a.hasOwnProperty(Ce)&&$!=null&&!o.hasOwnProperty(Ce)&&(Ce==="selected"?e.selected=!1:Xt(e,t,Ce,null,o,$));for(N in o)$=o[N],Y=a[N],o.hasOwnProperty(N)&&$!==Y&&($!=null||Y!=null)&&(N==="selected"?e.selected=$&&typeof $!="function"&&typeof $!="symbol":Xt(e,t,N,$,o,Y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ze in a)$=a[ze],a.hasOwnProperty(ze)&&$!=null&&!o.hasOwnProperty(ze)&&Xt(e,t,ze,null,o,$);for(V in o)if($=o[V],Y=a[V],o.hasOwnProperty(V)&&$!==Y&&($!=null||Y!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,t));break;default:Xt(e,t,V,$,o,Y)}return;default:if(Xe(t)){for(var Kt in a)$=a[Kt],a.hasOwnProperty(Kt)&&$!==void 0&&!o.hasOwnProperty(Kt)&&ym(e,t,Kt,void 0,o,$);for(ne in o)$=o[ne],Y=a[ne],!o.hasOwnProperty(ne)||$===Y||$===void 0&&Y===void 0||ym(e,t,ne,$,o,Y);return}}for(var z in a)$=a[z],a.hasOwnProperty(z)&&$!=null&&!o.hasOwnProperty(z)&&Xt(e,t,z,null,o,$);for(ie in o)$=o[ie],Y=a[ie],!o.hasOwnProperty(ie)||$===Y||$==null&&Y==null||Xt(e,t,ie,$,o,Y)}function Gg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ub(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],h=c.transferSize,w=c.initiatorType,_=c.duration;if(h&&_&&Gg(w)){for(w=0,_=c.responseEnd,o+=1;o<a.length;o++){var N=a[o],V=N.startTime;if(V>_)break;var ne=N.transferSize,ie=N.initiatorType;ne&&Gg(ie)&&(N=N.responseEnd,w+=ne*(N<_?1:(_-V)/(N-V)))}if(--o,t+=8*(h+w)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vm=null,bm=null;function Yh(e){return e.nodeType===9?e:e.ownerDocument}function Vg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function wm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sm=null;function db(){var e=window.event;return e&&e.type==="popstate"?e===Sm?!1:(Sm=e,!0):(Sm=null,!1)}var $g=typeof setTimeout=="function"?setTimeout:void 0,hb=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,fb=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(e){return Fg.resolve(null).then(e).catch(mb)}:$g;function mb(e){setTimeout(function(){throw e})}function $o(e){return e==="head"}function Wg(e,t){var a=t,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),Zc(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")xd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,xd(a);for(var h=a.firstChild;h;){var w=h.nextSibling,_=h.nodeName;h[Se]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=w}}else a==="body"&&xd(e.ownerDocument.body);a=c}while(a);Zc(t)}function qg(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function xm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xm(a),Ee(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function pb(e,t,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Se])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=ni(e.nextSibling),e===null)break}return null}function gb(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ni(e.nextSibling),e===null))return null;return e}function Yg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ni(e.nextSibling),e===null))return null;return e}function _m(e){return e.data==="$?"||e.data==="$~"}function Em(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yb(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ni(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Cm=null;function Xg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ni(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Kg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Qg(e,t,a){switch(t=Yh(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function xd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ee(e)}var ai=new Map,Jg=new Set;function Xh(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ao=ce.d;ce.d={f:vb,r:bb,D:wb,C:Sb,L:xb,m:_b,X:Cb,S:Eb,M:Tb};function vb(){var e=ao.f(),t=zh();return e||t}function bb(e){var t=nt(e);t!==null&&t.tag===5&&t.type==="form"?bs(t):ao.r(e)}var Kc=typeof document>"u"?null:document;function Zg(e,t,a){var o=Kc;if(o&&typeof t=="string"&&t){var c=Gn(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Jg.has(c)||(Jg.add(c),e={rel:e,crossOrigin:a,href:t},o.querySelector(c)===null&&(t=o.createElement("link"),ba(t,"link",e),Ye(t),o.head.appendChild(t)))}}function wb(e){ao.D(e),Zg("dns-prefetch",e,null)}function Sb(e,t){ao.C(e,t),Zg("preconnect",e,t)}function xb(e,t,a){ao.L(e,t,a);var o=Kc;if(o&&e&&t){var c='link[rel="preload"][as="'+Gn(t)+'"]';t==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Gn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Gn(a.imageSizes)+'"]')):c+='[href="'+Gn(e)+'"]';var h=c;switch(t){case"style":h=Qc(e);break;case"script":h=Jc(e)}ai.has(h)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ai.set(h,e),o.querySelector(c)!==null||t==="style"&&o.querySelector(_d(h))||t==="script"&&o.querySelector(Ed(h))||(t=o.createElement("link"),ba(t,"link",e),Ye(t),o.head.appendChild(t)))}}function _b(e,t){ao.m(e,t);var a=Kc;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Gn(o)+'"][href="'+Gn(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Jc(e)}if(!ai.has(h)&&(e=E({rel:"modulepreload",href:e},t),ai.set(h,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ed(h)))return}o=a.createElement("link"),ba(o,"link",e),Ye(o),a.head.appendChild(o)}}}function Eb(e,t,a){ao.S(e,t,a);var o=Kc;if(o&&e){var c=Nt(o).hoistableStyles,h=Qc(e);t=t||"default";var w=c.get(h);if(!w){var _={loading:0,preload:null};if(w=o.querySelector(_d(h)))_.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ai.get(h))&&Tm(e,a);var N=w=o.createElement("link");Ye(N),ba(N,"link",e),N._p=new Promise(function(V,ne){N.onload=V,N.onerror=ne}),N.addEventListener("load",function(){_.loading|=1}),N.addEventListener("error",function(){_.loading|=2}),_.loading|=4,Kh(w,t,o)}w={type:"stylesheet",instance:w,count:1,state:_},c.set(h,w)}}}function Cb(e,t){ao.X(e,t);var a=Kc;if(a&&e){var o=Nt(a).hoistableScripts,c=Jc(e),h=o.get(c);h||(h=a.querySelector(Ed(c)),h||(e=E({src:e,async:!0},t),(t=ai.get(c))&&Mm(e,t),h=a.createElement("script"),Ye(h),ba(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function Tb(e,t){ao.M(e,t);var a=Kc;if(a&&e){var o=Nt(a).hoistableScripts,c=Jc(e),h=o.get(c);h||(h=a.querySelector(Ed(c)),h||(e=E({src:e,async:!0,type:"module"},t),(t=ai.get(c))&&Mm(e,t),h=a.createElement("script"),Ye(h),ba(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function e0(e,t,a,o){var c=(c=Ze.current)?Xh(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Qc(a.href),a=Nt(c).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Qc(a.href);var h=Nt(c).hoistableStyles,w=h.get(e);if(w||(c=c.ownerDocument||c,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,w),(h=c.querySelector(_d(e)))&&!h._p&&(w.instance=h,w.state.loading=5),ai.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(e,a),h||Mb(c,e,a,w.state))),t&&o===null)throw Error(s(528,""));return w}if(t&&o!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Jc(a),a=Nt(c).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Qc(e){return'href="'+Gn(e)+'"'}function _d(e){return'link[rel="stylesheet"]['+e+"]"}function t0(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Mb(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),ba(t,"link",a),Ye(t),e.head.appendChild(t))}function Jc(e){return'[src="'+Gn(e)+'"]'}function Ed(e){return"script[async]"+e}function n0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Gn(a.href)+'"]');if(o)return t.instance=o,Ye(o),o;var c=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ye(o),ba(o,"style",c),Kh(o,a.precedence,e),t.instance=o;case"stylesheet":c=Qc(a.href);var h=e.querySelector(_d(c));if(h)return t.state.loading|=4,t.instance=h,Ye(h),h;o=t0(a),(c=ai.get(c))&&Tm(o,c),h=(e.ownerDocument||e).createElement("link"),Ye(h);var w=h;return w._p=new Promise(function(_,N){w.onload=_,w.onerror=N}),ba(h,"link",o),t.state.loading|=4,Kh(h,a.precedence,e),t.instance=h;case"script":return h=Jc(a.src),(c=e.querySelector(Ed(h)))?(t.instance=c,Ye(c),c):(o=a,(c=ai.get(h))&&(o=E({},a),Mm(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Ye(c),ba(c,"link",o),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Kh(o,a.precedence,e));return t.instance}function Kh(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,w=0;w<o.length;w++){var _=o[w];if(_.dataset.precedence===t)h=_;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Tm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Mm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qh=null;function a0(e,t,a){if(Qh===null){var o=new Map,c=Qh=new Map;c.set(a,o)}else c=Qh,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[Se]||h[pt]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var w=h.getAttribute(t)||"";w=e+w;var _=o.get(w);_?_.push(h):o.set(w,[h])}}return o}function r0(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Ab(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function i0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Rb(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Qc(o.href),h=t.querySelector(_d(c));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Jh.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=h,Ye(h);return}h=t.ownerDocument||t,o=t0(o),(c=ai.get(c))&&Tm(o,c),h=h.createElement("link"),Ye(h);var w=h;w._p=new Promise(function(_,N){w.onload=_,w.onerror=N}),ba(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Jh.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Am=0;function Nb(e,t){return e.stylesheets&&e.count===0&&ef(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&ef(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+t);0<e.imgBytes&&Am===0&&(Am=62500*ub());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ef(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Am?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Jh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ef(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zh=null;function ef(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zh=new Map,t.forEach(Ob,e),Zh=null,Jh.call(e))}function Ob(e,t){if(!(t.state.loading&4)){var a=Zh.get(e);if(a)var o=a.get(null);else{a=new Map,Zh.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var w=c[h];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(a.set(w.dataset.precedence,w),o=w)}o&&a.set(null,o)}c=t.instance,w=c.getAttribute("data-precedence"),h=a.get(w)||o,h===o&&a.set(null,c),a.set(w,c),this.count++,o=Jh.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Cd={$$typeof:F,Provider:null,Consumer:null,_currentValue:ve,_currentValue2:ve,_threadCount:0};function jb(e,t,a,o,c,h,w,_,N){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ho(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ho(0),this.hiddenUpdates=ho(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function s0(e,t,a,o,c,h,w,_,N,V,ne,ie){return e=new jb(e,t,a,w,N,V,ne,ie,_),t=1,h===!0&&(t|=24),h=ra(3,null,null,t),e.current=h,h.stateNode=e,t=Pu(),t.refCount++,e.pooledCache=t,t.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:t},zu(h),e}function o0(e){return e?(e=Wr,e):Wr}function l0(e,t,a,o,c,h){c=o0(c),o.context===null?o.context=c:o.pendingContext=c,o=Xa(t),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ri(e,o,t),a!==null&&(vr(a,e,t),Ni(a,e,t))}function c0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Rm(e,t){c0(e,t),(e=e.alternate)&&c0(e,t)}function u0(e){if(e.tag===13||e.tag===31){var t=is(e,67108864);t!==null&&vr(t,e,67108864),Rm(e,67108864)}}function d0(e){if(e.tag===13||e.tag===31){var t=Ur();t=tr(t);var a=is(e,t);a!==null&&vr(a,e,t),Rm(e,t)}}var tf=!0;function kb(e,t,a,o){var c=P.T;P.T=null;var h=ce.p;try{ce.p=2,Nm(e,t,a,o)}finally{ce.p=h,P.T=c}}function Ib(e,t,a,o){var c=P.T;P.T=null;var h=ce.p;try{ce.p=8,Nm(e,t,a,o)}finally{ce.p=h,P.T=c}}function Nm(e,t,a,o){if(tf){var c=Om(o);if(c===null)gm(e,t,o,nf,a),f0(e,o);else if(Db(c,e,t,a,o))o.stopPropagation();else if(f0(e,o),t&4&&-1<Lb.indexOf(e)){for(;c!==null;){var h=nt(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var w=er(h.pendingLanes);if(w!==0){var _=h;for(_.pendingLanes|=2,_.entangledLanes|=2;w;){var N=1<<31-Re(w);_.entanglements[1]|=N,w&=~N}_s(h),(Pt&6)===0&&(Ph=An()+500,bd(0))}}break;case 31:case 13:_=is(h,2),_!==null&&vr(_,h,2),zh(),Rm(h,2)}if(h=Om(o),h===null&&gm(e,t,o,nf,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else gm(e,t,o,null,a)}}function Om(e){return e=bt(e),jm(e)}var nf=null;function jm(e){if(nf=null,e=gt(e),e!==null){var t=d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=m(t),e!==null)return e;e=null}else if(a===31){if(e=p(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nf=e,null}function h0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case _t:return 2;case Qt:return 8;case dn:case Ns:return 32;case oi:return 268435456;default:return 32}default:return 32}}var km=!1,Fo=null,Wo=null,qo=null,Td=new Map,Md=new Map,Yo=[],Lb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f0(e,t){switch(e){case"focusin":case"focusout":Fo=null;break;case"dragenter":case"dragleave":Wo=null;break;case"mouseover":case"mouseout":qo=null;break;case"pointerover":case"pointerout":Td.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Md.delete(t.pointerId)}}function Ad(e,t,a,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},t!==null&&(t=nt(t),t!==null&&u0(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Db(e,t,a,o,c){switch(t){case"focusin":return Fo=Ad(Fo,e,t,a,o,c),!0;case"dragenter":return Wo=Ad(Wo,e,t,a,o,c),!0;case"mouseover":return qo=Ad(qo,e,t,a,o,c),!0;case"pointerover":var h=c.pointerId;return Td.set(h,Ad(Td.get(h)||null,e,t,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Md.set(h,Ad(Md.get(h)||null,e,t,a,o,c)),!0}return!1}function m0(e){var t=gt(e.target);if(t!==null){var a=d(t);if(a!==null){if(t=a.tag,t===13){if(t=m(a),t!==null){e.blockedOn=t,In(e.priority,function(){d0(a)});return}}else if(t===31){if(t=p(a),t!==null){e.blockedOn=t,In(e.priority,function(){d0(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function af(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Om(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);pn=o,a.target.dispatchEvent(o),pn=null}else return t=nt(a),t!==null&&u0(t),e.blockedOn=a,!1;t.shift()}return!0}function p0(e,t,a){af(e)&&a.delete(t)}function Ub(){km=!1,Fo!==null&&af(Fo)&&(Fo=null),Wo!==null&&af(Wo)&&(Wo=null),qo!==null&&af(qo)&&(qo=null),Td.forEach(p0),Md.forEach(p0)}function rf(e,t){e.blockedOn===t&&(e.blockedOn=null,km||(km=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ub)))}var sf=null;function g0(e){sf!==e&&(sf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){sf===e&&(sf=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],c=e[t+2];if(typeof o!="function"){if(jm(o||a)===null)continue;break}var h=nt(a);h!==null&&(e.splice(t,3),t-=3,vs(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Zc(e){function t(N){return rf(N,e)}Fo!==null&&rf(Fo,e),Wo!==null&&rf(Wo,e),qo!==null&&rf(qo,e),Td.forEach(t),Md.forEach(t);for(var a=0;a<Yo.length;a++){var o=Yo[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Yo.length&&(a=Yo[0],a.blockedOn===null);)m0(a),a.blockedOn===null&&Yo.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],w=c[Rn]||null;if(typeof h=="function")w||g0(a);else if(w){var _=null;if(h&&h.hasAttribute("formAction")){if(c=h,w=h[Rn]||null)_=w.formAction;else if(jm(c)!==null)continue}else _=w.action;typeof _=="function"?a[o+1]=_:(a.splice(o,3),o-=3),g0(a)}}}function y0(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(w){return c=w})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function Im(e){this._internalRoot=e}of.prototype.render=Im.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,o=Ur();l0(a,o,e,t,null,null)},of.prototype.unmount=Im.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;l0(e.current,2,null,e,null,null),zh(),t[Le]=null}};function of(e){this._internalRoot=e}of.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Yo.length&&t!==0&&t<Yo[a].priority;a++);Yo.splice(a,0,e),a===0&&m0(e)}};var v0=n.version;if(v0!=="19.2.4")throw Error(s(527,v0,"19.2.4"));ce.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Pb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lf.isDisabled&&lf.supportsFiber)try{Hr=lf.inject(Pb),ye=lf}catch{}}return Nd.createRoot=function(e,t){if(!l(e))throw Error(s(299));var a=!1,o="",c=Rl,h=Oh,w=jh;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(w=t.onRecoverableError)),t=s0(e,1,!1,null,null,a,o,null,c,h,w,y0),e[Le]=t.current,pm(e),new Im(t)},Nd.hydrateRoot=function(e,t,a){if(!l(e))throw Error(s(299));var o=!1,c="",h=Rl,w=Oh,_=jh,N=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(w=a.onCaughtError),a.onRecoverableError!==void 0&&(_=a.onRecoverableError),a.formState!==void 0&&(N=a.formState)),t=s0(e,1,!0,t,a??null,o,c,N,h,w,_,y0),t.context=o0(null),a=t.current,o=Ur(),o=tr(o),c=Xa(o),c.callback=null,Ri(a,c,o),a=o,t.current.lanes=a,ci(t,a),_s(t),e[Le]=t.current,pm(e),new of(t)},Nd.version="19.2.4",Nd}var A0;function Yb(){if(A0)return Um.exports;A0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),Um.exports=qb(),Um.exports}var Xb=Yb();const Kb="modulepreload",Qb=function(r){return"/"+r},R0={},N0=function(n,i,s){let l=Promise.resolve();if(i&&i.length>0){let v=function(y){return Promise.all(y.map(E=>Promise.resolve(E).then(M=>({status:"fulfilled",value:M}),M=>({status:"rejected",reason:M}))))};var m=v;document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),g=p?.nonce||p?.getAttribute("nonce");l=v(i.map(y=>{if(y=Qb(y),y in R0)return;R0[y]=!0;const E=y.endsWith(".css"),M=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${M}`))return;const A=document.createElement("link");if(A.rel=E?"stylesheet":Kb,E||(A.as="script"),A.crossOrigin="",A.href=y,g&&A.setAttribute("nonce",g),document.head.appendChild(A),E)return new Promise((D,B)=>{A.addEventListener("load",D),A.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${y}`)))})}))}function d(p){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=p,window.dispatchEvent(g),!g.defaultPrevented)throw p}return l.then(p=>{for(const g of p||[])g.status==="rejected"&&d(g.reason);return n().catch(d)})};function Lf(r,n){var i={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&n.indexOf(s)<0&&(i[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)n.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(i[s[l]]=r[s[l]]);return i}function Jb(r,n,i,s){function l(d){return d instanceof i?d:new i(function(m){m(d)})}return new(i||(i=Promise))(function(d,m){function p(y){try{v(s.next(y))}catch(E){m(E)}}function g(y){try{v(s.throw(y))}catch(E){m(E)}}function v(y){y.done?d(y.value):l(y.value).then(p,g)}v((s=s.apply(r,n||[])).next())})}const Zb=r=>r?(...n)=>r(...n):(...n)=>fetch(...n);class Lp extends Error{constructor(n,i="FunctionsError",s){super(n),this.name=i,this.context=s}}class ew extends Lp{constructor(n){super("Failed to send a request to the Edge Function","FunctionsFetchError",n)}}class O0 extends Lp{constructor(n){super("Relay Error invoking the Edge Function","FunctionsRelayError",n)}}class j0 extends Lp{constructor(n){super("Edge Function returned a non-2xx status code","FunctionsHttpError",n)}}var gp;(function(r){r.Any="any",r.ApNortheast1="ap-northeast-1",r.ApNortheast2="ap-northeast-2",r.ApSouth1="ap-south-1",r.ApSoutheast1="ap-southeast-1",r.ApSoutheast2="ap-southeast-2",r.CaCentral1="ca-central-1",r.EuCentral1="eu-central-1",r.EuWest1="eu-west-1",r.EuWest2="eu-west-2",r.EuWest3="eu-west-3",r.SaEast1="sa-east-1",r.UsEast1="us-east-1",r.UsWest1="us-west-1",r.UsWest2="us-west-2"})(gp||(gp={}));class tw{constructor(n,{headers:i={},customFetch:s,region:l=gp.Any}={}){this.url=n,this.headers=i,this.region=l,this.fetch=Zb(s)}setAuth(n){this.headers.Authorization=`Bearer ${n}`}invoke(n){return Jb(this,arguments,void 0,function*(i,s={}){var l;let d,m;try{const{headers:p,method:g,body:v,signal:y,timeout:E}=s;let M={},{region:A}=s;A||(A=this.region);const D=new URL(`${this.url}/${i}`);A&&A!=="any"&&(M["x-region"]=A,D.searchParams.set("forceFunctionRegion",A));let B;v&&(p&&!Object.prototype.hasOwnProperty.call(p,"Content-Type")||!p)?typeof Blob<"u"&&v instanceof Blob||v instanceof ArrayBuffer?(M["Content-Type"]="application/octet-stream",B=v):typeof v=="string"?(M["Content-Type"]="text/plain",B=v):typeof FormData<"u"&&v instanceof FormData?B=v:(M["Content-Type"]="application/json",B=JSON.stringify(v)):v&&typeof v!="string"&&!(typeof Blob<"u"&&v instanceof Blob)&&!(v instanceof ArrayBuffer)&&!(typeof FormData<"u"&&v instanceof FormData)?B=JSON.stringify(v):B=v;let H=y;E&&(m=new AbortController,d=setTimeout(()=>m.abort(),E),y?(H=m.signal,y.addEventListener("abort",()=>m.abort())):H=m.signal);const K=yield this.fetch(D.toString(),{method:g||"POST",headers:Object.assign(Object.assign(Object.assign({},M),this.headers),p),body:B,signal:H}).catch(W=>{throw new ew(W)}),ae=K.headers.get("x-relay-error");if(ae&&ae==="true")throw new O0(K);if(!K.ok)throw new j0(K);let F=((l=K.headers.get("Content-Type"))!==null&&l!==void 0?l:"text/plain").split(";")[0].trim(),Z;return F==="application/json"?Z=yield K.json():F==="application/octet-stream"||F==="application/pdf"?Z=yield K.blob():F==="text/event-stream"?Z=K:F==="multipart/form-data"?Z=yield K.formData():Z=yield K.text(),{data:Z,error:null,response:K}}catch(p){return{data:null,error:p,response:p instanceof j0||p instanceof O0?p.context:void 0}}finally{d&&clearTimeout(d)}})}}var nw=class extends Error{constructor(r){super(r.message),this.name="PostgrestError",this.details=r.details,this.hint=r.hint,this.code=r.code}},aw=class{constructor(r){var n,i,s;this.shouldThrowOnError=!1,this.method=r.method,this.url=r.url,this.headers=new Headers(r.headers),this.schema=r.schema,this.body=r.body,this.shouldThrowOnError=(n=r.shouldThrowOnError)!==null&&n!==void 0?n:!1,this.signal=r.signal,this.isMaybeSingle=(i=r.isMaybeSingle)!==null&&i!==void 0?i:!1,this.urlLengthLimit=(s=r.urlLengthLimit)!==null&&s!==void 0?s:8e3,r.fetch?this.fetch=r.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(r,n){return this.headers=new Headers(this.headers),this.headers.set(r,n),this}then(r,n){var i=this;this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const s=this.fetch;let l=s(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async d=>{let m=null,p=null,g=null,v=d.status,y=d.statusText;if(d.ok){var E,M;if(i.method!=="HEAD"){var A;const K=await d.text();K===""||(i.headers.get("Accept")==="text/csv"||i.headers.get("Accept")&&(!((A=i.headers.get("Accept"))===null||A===void 0)&&A.includes("application/vnd.pgrst.plan+text"))?p=K:p=JSON.parse(K))}const B=(E=i.headers.get("Prefer"))===null||E===void 0?void 0:E.match(/count=(exact|planned|estimated)/),H=(M=d.headers.get("content-range"))===null||M===void 0?void 0:M.split("/");B&&H&&H.length>1&&(g=parseInt(H[1])),i.isMaybeSingle&&i.method==="GET"&&Array.isArray(p)&&(p.length>1?(m={code:"PGRST116",details:`Results contain ${p.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},p=null,g=null,v=406,y="Not Acceptable"):p.length===1?p=p[0]:p=null)}else{var D;const B=await d.text();try{m=JSON.parse(B),Array.isArray(m)&&d.status===404&&(p=[],m=null,v=200,y="OK")}catch{d.status===404&&B===""?(v=204,y="No Content"):m={message:B}}if(m&&i.isMaybeSingle&&(!(m==null||(D=m.details)===null||D===void 0)&&D.includes("0 rows"))&&(m=null,v=200,y="OK"),m&&i.shouldThrowOnError)throw new nw(m)}return{error:m,data:p,count:g,status:v,statusText:y}});return this.shouldThrowOnError||(l=l.catch(d=>{var m;let p="",g="",v="";const y=d?.cause;if(y){var E,M,A,D;const K=(E=y?.message)!==null&&E!==void 0?E:"",ae=(M=y?.code)!==null&&M!==void 0?M:"";p=`${(A=d?.name)!==null&&A!==void 0?A:"FetchError"}: ${d?.message}`,p+=`

Caused by: ${(D=y?.name)!==null&&D!==void 0?D:"Error"}: ${K}`,ae&&(p+=` (${ae})`),y?.stack&&(p+=`
${y.stack}`)}else{var B;p=(B=d?.stack)!==null&&B!==void 0?B:""}const H=this.url.toString().length;return d?.name==="AbortError"||d?.code==="ABORT_ERR"?(v="",g="Request was aborted (timeout or manual cancellation)",H>this.urlLengthLimit&&(g+=`. Note: Your request URL is ${H} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(y?.name==="HeadersOverflowError"||y?.code==="UND_ERR_HEADERS_OVERFLOW")&&(v="",g="HTTP headers exceeded server limits (typically 16KB)",H>this.urlLengthLimit&&(g+=`. Your request URL is ${H} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{error:{message:`${(m=d?.name)!==null&&m!==void 0?m:"FetchError"}: ${d?.message}`,details:p,hint:g,code:v},data:null,count:null,status:0,statusText:""}})),l.then(r,n)}returns(){return this}overrideTypes(){return this}},rw=class extends aw{select(r){let n=!1;const i=(r??"*").split("").map(s=>/\s/.test(s)&&!n?"":(s==='"'&&(n=!n),s)).join("");return this.url.searchParams.set("select",i),this.headers.append("Prefer","return=representation"),this}order(r,{ascending:n=!0,nullsFirst:i,foreignTable:s,referencedTable:l=s}={}){const d=l?`${l}.order`:"order",m=this.url.searchParams.get(d);return this.url.searchParams.set(d,`${m?`${m},`:""}${r}.${n?"asc":"desc"}${i===void 0?"":i?".nullsfirst":".nullslast"}`),this}limit(r,{foreignTable:n,referencedTable:i=n}={}){const s=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(s,`${r}`),this}range(r,n,{foreignTable:i,referencedTable:s=i}={}){const l=typeof s>"u"?"offset":`${s}.offset`,d=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(l,`${r}`),this.url.searchParams.set(d,`${n-r+1}`),this}abortSignal(r){return this.signal=r,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:r=!1,verbose:n=!1,settings:i=!1,buffers:s=!1,wal:l=!1,format:d="text"}={}){var m;const p=[r?"analyze":null,n?"verbose":null,i?"settings":null,s?"buffers":null,l?"wal":null].filter(Boolean).join("|"),g=(m=this.headers.get("Accept"))!==null&&m!==void 0?m:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${d}; for="${g}"; options=${p};`),d==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(r){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${r}`),this}};const k0=new RegExp("[,()]");var cu=class extends rw{eq(r,n){return this.url.searchParams.append(r,`eq.${n}`),this}neq(r,n){return this.url.searchParams.append(r,`neq.${n}`),this}gt(r,n){return this.url.searchParams.append(r,`gt.${n}`),this}gte(r,n){return this.url.searchParams.append(r,`gte.${n}`),this}lt(r,n){return this.url.searchParams.append(r,`lt.${n}`),this}lte(r,n){return this.url.searchParams.append(r,`lte.${n}`),this}like(r,n){return this.url.searchParams.append(r,`like.${n}`),this}likeAllOf(r,n){return this.url.searchParams.append(r,`like(all).{${n.join(",")}}`),this}likeAnyOf(r,n){return this.url.searchParams.append(r,`like(any).{${n.join(",")}}`),this}ilike(r,n){return this.url.searchParams.append(r,`ilike.${n}`),this}ilikeAllOf(r,n){return this.url.searchParams.append(r,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(r,n){return this.url.searchParams.append(r,`ilike(any).{${n.join(",")}}`),this}regexMatch(r,n){return this.url.searchParams.append(r,`match.${n}`),this}regexIMatch(r,n){return this.url.searchParams.append(r,`imatch.${n}`),this}is(r,n){return this.url.searchParams.append(r,`is.${n}`),this}isDistinct(r,n){return this.url.searchParams.append(r,`isdistinct.${n}`),this}in(r,n){const i=Array.from(new Set(n)).map(s=>typeof s=="string"&&k0.test(s)?`"${s}"`:`${s}`).join(",");return this.url.searchParams.append(r,`in.(${i})`),this}notIn(r,n){const i=Array.from(new Set(n)).map(s=>typeof s=="string"&&k0.test(s)?`"${s}"`:`${s}`).join(",");return this.url.searchParams.append(r,`not.in.(${i})`),this}contains(r,n){return typeof n=="string"?this.url.searchParams.append(r,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(r,`cs.{${n.join(",")}}`):this.url.searchParams.append(r,`cs.${JSON.stringify(n)}`),this}containedBy(r,n){return typeof n=="string"?this.url.searchParams.append(r,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(r,`cd.{${n.join(",")}}`):this.url.searchParams.append(r,`cd.${JSON.stringify(n)}`),this}rangeGt(r,n){return this.url.searchParams.append(r,`sr.${n}`),this}rangeGte(r,n){return this.url.searchParams.append(r,`nxl.${n}`),this}rangeLt(r,n){return this.url.searchParams.append(r,`sl.${n}`),this}rangeLte(r,n){return this.url.searchParams.append(r,`nxr.${n}`),this}rangeAdjacent(r,n){return this.url.searchParams.append(r,`adj.${n}`),this}overlaps(r,n){return typeof n=="string"?this.url.searchParams.append(r,`ov.${n}`):this.url.searchParams.append(r,`ov.{${n.join(",")}}`),this}textSearch(r,n,{config:i,type:s}={}){let l="";s==="plain"?l="pl":s==="phrase"?l="ph":s==="websearch"&&(l="w");const d=i===void 0?"":`(${i})`;return this.url.searchParams.append(r,`${l}fts${d}.${n}`),this}match(r){return Object.entries(r).forEach(([n,i])=>{this.url.searchParams.append(n,`eq.${i}`)}),this}not(r,n,i){return this.url.searchParams.append(r,`not.${n}.${i}`),this}or(r,{foreignTable:n,referencedTable:i=n}={}){const s=i?`${i}.or`:"or";return this.url.searchParams.append(s,`(${r})`),this}filter(r,n,i){return this.url.searchParams.append(r,`${n}.${i}`),this}},iw=class{constructor(r,{headers:n={},schema:i,fetch:s,urlLengthLimit:l=8e3}){this.url=r,this.headers=new Headers(n),this.schema=i,this.fetch=s,this.urlLengthLimit=l}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(r,n){const{head:i=!1,count:s}=n??{},l=i?"HEAD":"GET";let d=!1;const m=(r??"*").split("").map(v=>/\s/.test(v)&&!d?"":(v==='"'&&(d=!d),v)).join(""),{url:p,headers:g}=this.cloneRequestState();return p.searchParams.set("select",m),s&&g.append("Prefer",`count=${s}`),new cu({method:l,url:p,headers:g,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit})}insert(r,{count:n,defaultToNull:i=!0}={}){var s;const l="POST",{url:d,headers:m}=this.cloneRequestState();if(n&&m.append("Prefer",`count=${n}`),i||m.append("Prefer","missing=default"),Array.isArray(r)){const p=r.reduce((g,v)=>g.concat(Object.keys(v)),[]);if(p.length>0){const g=[...new Set(p)].map(v=>`"${v}"`);d.searchParams.set("columns",g.join(","))}}return new cu({method:l,url:d,headers:m,schema:this.schema,body:r,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit})}upsert(r,{onConflict:n,ignoreDuplicates:i=!1,count:s,defaultToNull:l=!0}={}){var d;const m="POST",{url:p,headers:g}=this.cloneRequestState();if(g.append("Prefer",`resolution=${i?"ignore":"merge"}-duplicates`),n!==void 0&&p.searchParams.set("on_conflict",n),s&&g.append("Prefer",`count=${s}`),l||g.append("Prefer","missing=default"),Array.isArray(r)){const v=r.reduce((y,E)=>y.concat(Object.keys(E)),[]);if(v.length>0){const y=[...new Set(v)].map(E=>`"${E}"`);p.searchParams.set("columns",y.join(","))}}return new cu({method:m,url:p,headers:g,schema:this.schema,body:r,fetch:(d=this.fetch)!==null&&d!==void 0?d:fetch,urlLengthLimit:this.urlLengthLimit})}update(r,{count:n}={}){var i;const s="PATCH",{url:l,headers:d}=this.cloneRequestState();return n&&d.append("Prefer",`count=${n}`),new cu({method:s,url:l,headers:d,schema:this.schema,body:r,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit})}delete({count:r}={}){var n;const i="DELETE",{url:s,headers:l}=this.cloneRequestState();return r&&l.append("Prefer",`count=${r}`),new cu({method:i,url:s,headers:l,schema:this.schema,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit})}};function Yd(r){"@babel/helpers - typeof";return Yd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Yd(r)}function sw(r,n){if(Yd(r)!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,n);if(Yd(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function ow(r){var n=sw(r,"string");return Yd(n)=="symbol"?n:n+""}function lw(r,n,i){return(n=ow(n))in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,r}function I0(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function cf(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?I0(Object(i),!0).forEach(function(s){lw(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):I0(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var cw=class ov{constructor(n,{headers:i={},schema:s,fetch:l,timeout:d,urlLengthLimit:m=8e3}={}){this.url=n,this.headers=new Headers(i),this.schemaName=s,this.urlLengthLimit=m;const p=l??globalThis.fetch;d!==void 0&&d>0?this.fetch=(g,v)=>{const y=new AbortController,E=setTimeout(()=>y.abort(),d),M=v?.signal;if(M){if(M.aborted)return clearTimeout(E),p(g,v);const A=()=>{clearTimeout(E),y.abort()};return M.addEventListener("abort",A,{once:!0}),p(g,cf(cf({},v),{},{signal:y.signal})).finally(()=>{clearTimeout(E),M.removeEventListener("abort",A)})}return p(g,cf(cf({},v),{},{signal:y.signal})).finally(()=>clearTimeout(E))}:this.fetch=p}from(n){if(!n||typeof n!="string"||n.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new iw(new URL(`${this.url}/${n}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit})}schema(n){return new ov(this.url,{headers:this.headers,schema:n,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit})}rpc(n,i={},{head:s=!1,get:l=!1,count:d}={}){var m;let p;const g=new URL(`${this.url}/rpc/${n}`);let v;const y=A=>A!==null&&typeof A=="object"&&(!Array.isArray(A)||A.some(y)),E=s&&Object.values(i).some(y);E?(p="POST",v=i):s||l?(p=s?"HEAD":"GET",Object.entries(i).filter(([A,D])=>D!==void 0).map(([A,D])=>[A,Array.isArray(D)?`{${D.join(",")}}`:`${D}`]).forEach(([A,D])=>{g.searchParams.append(A,D)})):(p="POST",v=i);const M=new Headers(this.headers);return E?M.set("Prefer",d?`count=${d},return=minimal`:"return=minimal"):d&&M.set("Prefer",`count=${d}`),new cu({method:p,url:g,headers:M,schema:this.schemaName,body:v,fetch:(m=this.fetch)!==null&&m!==void 0?m:fetch,urlLengthLimit:this.urlLengthLimit})}};class uw{constructor(){}static detectEnvironment(){var n;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((n=navigator.userAgent)===null||n===void 0)&&n.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const i=globalThis.process;if(i){const s=i.versions;if(s&&s.node){const l=s.node,d=parseInt(l.replace(/^v/,"").split(".")[0]);return d>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${d} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${d} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const n=this.detectEnvironment();if(n.constructor)return n.constructor;let i=n.error||"WebSocket not supported in this environment.";throw n.workaround&&(i+=`

Suggested solution: ${n.workaround}`),new Error(i)}static createWebSocket(n,i){const s=this.getWebSocketConstructor();return new s(n,i)}static isWebSocketSupported(){try{const n=this.detectEnvironment();return n.type==="native"||n.type==="ws"}catch{return!1}}}const dw="2.98.0",hw=`realtime-js/${dw}`,fw="1.0.0",lv="2.0.0",L0=lv,yp=1e4,mw=1e3,pw=100;var Jo;(function(r){r[r.connecting=0]="connecting",r[r.open=1]="open",r[r.closing=2]="closing",r[r.closed=3]="closed"})(Jo||(Jo={}));var ea;(function(r){r.closed="closed",r.errored="errored",r.joined="joined",r.joining="joining",r.leaving="leaving"})(ea||(ea={}));var Gi;(function(r){r.close="phx_close",r.error="phx_error",r.join="phx_join",r.reply="phx_reply",r.leave="phx_leave",r.access_token="access_token"})(Gi||(Gi={}));var vp;(function(r){r.websocket="websocket"})(vp||(vp={}));var $l;(function(r){r.Connecting="connecting",r.Open="open",r.Closing="closing",r.Closed="closed"})($l||($l={}));class gw{constructor(n){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=n??[]}encode(n,i){if(n.event===this.BROADCAST_EVENT&&!(n.payload instanceof ArrayBuffer)&&typeof n.payload.event=="string")return i(this._binaryEncodeUserBroadcastPush(n));let s=[n.join_ref,n.ref,n.topic,n.event,n.payload];return i(JSON.stringify(s))}_binaryEncodeUserBroadcastPush(n){var i;return this._isArrayBuffer((i=n.payload)===null||i===void 0?void 0:i.payload)?this._encodeBinaryUserBroadcastPush(n):this._encodeJsonUserBroadcastPush(n)}_encodeBinaryUserBroadcastPush(n){var i,s;const l=(s=(i=n.payload)===null||i===void 0?void 0:i.payload)!==null&&s!==void 0?s:new ArrayBuffer(0);return this._encodeUserBroadcastPush(n,this.BINARY_ENCODING,l)}_encodeJsonUserBroadcastPush(n){var i,s;const l=(s=(i=n.payload)===null||i===void 0?void 0:i.payload)!==null&&s!==void 0?s:{},m=new TextEncoder().encode(JSON.stringify(l)).buffer;return this._encodeUserBroadcastPush(n,this.JSON_ENCODING,m)}_encodeUserBroadcastPush(n,i,s){var l,d;const m=n.topic,p=(l=n.ref)!==null&&l!==void 0?l:"",g=(d=n.join_ref)!==null&&d!==void 0?d:"",v=n.payload.event,y=this.allowedMetadataKeys?this._pick(n.payload,this.allowedMetadataKeys):{},E=Object.keys(y).length===0?"":JSON.stringify(y);if(g.length>255)throw new Error(`joinRef length ${g.length} exceeds maximum of 255`);if(p.length>255)throw new Error(`ref length ${p.length} exceeds maximum of 255`);if(m.length>255)throw new Error(`topic length ${m.length} exceeds maximum of 255`);if(v.length>255)throw new Error(`userEvent length ${v.length} exceeds maximum of 255`);if(E.length>255)throw new Error(`metadata length ${E.length} exceeds maximum of 255`);const M=this.USER_BROADCAST_PUSH_META_LENGTH+g.length+p.length+m.length+v.length+E.length,A=new ArrayBuffer(this.HEADER_LENGTH+M);let D=new DataView(A),B=0;D.setUint8(B++,this.KINDS.userBroadcastPush),D.setUint8(B++,g.length),D.setUint8(B++,p.length),D.setUint8(B++,m.length),D.setUint8(B++,v.length),D.setUint8(B++,E.length),D.setUint8(B++,i),Array.from(g,K=>D.setUint8(B++,K.charCodeAt(0))),Array.from(p,K=>D.setUint8(B++,K.charCodeAt(0))),Array.from(m,K=>D.setUint8(B++,K.charCodeAt(0))),Array.from(v,K=>D.setUint8(B++,K.charCodeAt(0))),Array.from(E,K=>D.setUint8(B++,K.charCodeAt(0)));var H=new Uint8Array(A.byteLength+s.byteLength);return H.set(new Uint8Array(A),0),H.set(new Uint8Array(s),A.byteLength),H.buffer}decode(n,i){if(this._isArrayBuffer(n)){let s=this._binaryDecode(n);return i(s)}if(typeof n=="string"){const s=JSON.parse(n),[l,d,m,p,g]=s;return i({join_ref:l,ref:d,topic:m,event:p,payload:g})}return i({})}_binaryDecode(n){const i=new DataView(n),s=i.getUint8(0),l=new TextDecoder;if(s===this.KINDS.userBroadcast)return this._decodeUserBroadcast(n,i,l)}_decodeUserBroadcast(n,i,s){const l=i.getUint8(1),d=i.getUint8(2),m=i.getUint8(3),p=i.getUint8(4);let g=this.HEADER_LENGTH+4;const v=s.decode(n.slice(g,g+l));g=g+l;const y=s.decode(n.slice(g,g+d));g=g+d;const E=s.decode(n.slice(g,g+m));g=g+m;const M=n.slice(g,n.byteLength),A=p===this.JSON_ENCODING?JSON.parse(s.decode(M)):M,D={type:this.BROADCAST_EVENT,event:y,payload:A};return m>0&&(D.meta=JSON.parse(E)),{join_ref:null,ref:null,topic:v,event:this.BROADCAST_EVENT,payload:D}}_isArrayBuffer(n){var i;return n instanceof ArrayBuffer||((i=n?.constructor)===null||i===void 0?void 0:i.name)==="ArrayBuffer"}_pick(n,i){return!n||typeof n!="object"?{}:Object.fromEntries(Object.entries(n).filter(([s])=>i.includes(s)))}}class cv{constructor(n,i){this.callback=n,this.timerCalc=i,this.timer=void 0,this.tries=0,this.callback=n,this.timerCalc=i}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var sn;(function(r){r.abstime="abstime",r.bool="bool",r.date="date",r.daterange="daterange",r.float4="float4",r.float8="float8",r.int2="int2",r.int4="int4",r.int4range="int4range",r.int8="int8",r.int8range="int8range",r.json="json",r.jsonb="jsonb",r.money="money",r.numeric="numeric",r.oid="oid",r.reltime="reltime",r.text="text",r.time="time",r.timestamp="timestamp",r.timestamptz="timestamptz",r.timetz="timetz",r.tsrange="tsrange",r.tstzrange="tstzrange"})(sn||(sn={}));const D0=(r,n,i={})=>{var s;const l=(s=i.skipTypes)!==null&&s!==void 0?s:[];return n?Object.keys(n).reduce((d,m)=>(d[m]=yw(m,r,n,l),d),{}):{}},yw=(r,n,i,s)=>{const l=n.find(p=>p.name===r),d=l?.type,m=i[r];return d&&!s.includes(d)?uv(d,m):bp(m)},uv=(r,n)=>{if(r.charAt(0)==="_"){const i=r.slice(1,r.length);return Sw(n,i)}switch(r){case sn.bool:return vw(n);case sn.float4:case sn.float8:case sn.int2:case sn.int4:case sn.int8:case sn.numeric:case sn.oid:return bw(n);case sn.json:case sn.jsonb:return ww(n);case sn.timestamp:return xw(n);case sn.abstime:case sn.date:case sn.daterange:case sn.int4range:case sn.int8range:case sn.money:case sn.reltime:case sn.text:case sn.time:case sn.timestamptz:case sn.timetz:case sn.tsrange:case sn.tstzrange:return bp(n);default:return bp(n)}},bp=r=>r,vw=r=>{switch(r){case"t":return!0;case"f":return!1;default:return r}},bw=r=>{if(typeof r=="string"){const n=parseFloat(r);if(!Number.isNaN(n))return n}return r},ww=r=>{if(typeof r=="string")try{return JSON.parse(r)}catch{return r}return r},Sw=(r,n)=>{if(typeof r!="string")return r;const i=r.length-1,s=r[i];if(r[0]==="{"&&s==="}"){let d;const m=r.slice(1,i);try{d=JSON.parse("["+m+"]")}catch{d=m?m.split(","):[]}return d.map(p=>uv(n,p))}return r},xw=r=>typeof r=="string"?r.replace(" ","T"):r,dv=r=>{const n=new URL(r);return n.protocol=n.protocol.replace(/^ws/i,"http"),n.pathname=n.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),n.pathname===""||n.pathname==="/"?n.pathname="/api/broadcast":n.pathname=n.pathname+"/api/broadcast",n.href};class Gm{constructor(n,i,s={},l=yp){this.channel=n,this.event=i,this.payload=s,this.timeout=l,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(n){this.timeout=n,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(n){this.payload=Object.assign(Object.assign({},this.payload),n)}receive(n,i){var s;return this._hasReceived(n)&&i((s=this.receivedResp)===null||s===void 0?void 0:s.response),this.recHooks.push({status:n,callback:i}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const n=i=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=i,this._matchReceive(i)};this.channel._on(this.refEvent,{},n),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(n,i){this.refEvent&&this.channel._trigger(this.refEvent,{status:n,response:i})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:n,response:i}){this.recHooks.filter(s=>s.status===n).forEach(s=>s.callback(i))}_hasReceived(n){return this.receivedResp&&this.receivedResp.status===n}}var U0;(function(r){r.SYNC="sync",r.JOIN="join",r.LEAVE="leave"})(U0||(U0={}));class Vd{constructor(n,i){this.channel=n,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const s=i?.events||{state:"presence_state",diff:"presence_diff"};this.channel._on(s.state,{},l=>{const{onJoin:d,onLeave:m,onSync:p}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Vd.syncState(this.state,l,d,m),this.pendingDiffs.forEach(g=>{this.state=Vd.syncDiff(this.state,g,d,m)}),this.pendingDiffs=[],p()}),this.channel._on(s.diff,{},l=>{const{onJoin:d,onLeave:m,onSync:p}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(l):(this.state=Vd.syncDiff(this.state,l,d,m),p())}),this.onJoin((l,d,m)=>{this.channel._trigger("presence",{event:"join",key:l,currentPresences:d,newPresences:m})}),this.onLeave((l,d,m)=>{this.channel._trigger("presence",{event:"leave",key:l,currentPresences:d,leftPresences:m})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(n,i,s,l){const d=this.cloneDeep(n),m=this.transformState(i),p={},g={};return this.map(d,(v,y)=>{m[v]||(g[v]=y)}),this.map(m,(v,y)=>{const E=d[v];if(E){const M=y.map(H=>H.presence_ref),A=E.map(H=>H.presence_ref),D=y.filter(H=>A.indexOf(H.presence_ref)<0),B=E.filter(H=>M.indexOf(H.presence_ref)<0);D.length>0&&(p[v]=D),B.length>0&&(g[v]=B)}else p[v]=y}),this.syncDiff(d,{joins:p,leaves:g},s,l)}static syncDiff(n,i,s,l){const{joins:d,leaves:m}={joins:this.transformState(i.joins),leaves:this.transformState(i.leaves)};return s||(s=()=>{}),l||(l=()=>{}),this.map(d,(p,g)=>{var v;const y=(v=n[p])!==null&&v!==void 0?v:[];if(n[p]=this.cloneDeep(g),y.length>0){const E=n[p].map(A=>A.presence_ref),M=y.filter(A=>E.indexOf(A.presence_ref)<0);n[p].unshift(...M)}s(p,y,g)}),this.map(m,(p,g)=>{let v=n[p];if(!v)return;const y=g.map(E=>E.presence_ref);v=v.filter(E=>y.indexOf(E.presence_ref)<0),n[p]=v,l(p,v,g),v.length===0&&delete n[p]}),n}static map(n,i){return Object.getOwnPropertyNames(n).map(s=>i(s,n[s]))}static transformState(n){return n=this.cloneDeep(n),Object.getOwnPropertyNames(n).reduce((i,s)=>{const l=n[s];return"metas"in l?i[s]=l.metas.map(d=>(d.presence_ref=d.phx_ref,delete d.phx_ref,delete d.phx_ref_prev,d)):i[s]=l,i},{})}static cloneDeep(n){return JSON.parse(JSON.stringify(n))}onJoin(n){this.caller.onJoin=n}onLeave(n){this.caller.onLeave=n}onSync(n){this.caller.onSync=n}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var P0;(function(r){r.ALL="*",r.INSERT="INSERT",r.UPDATE="UPDATE",r.DELETE="DELETE"})(P0||(P0={}));var Hd;(function(r){r.BROADCAST="broadcast",r.PRESENCE="presence",r.POSTGRES_CHANGES="postgres_changes",r.SYSTEM="system"})(Hd||(Hd={}));var so;(function(r){r.SUBSCRIBED="SUBSCRIBED",r.TIMED_OUT="TIMED_OUT",r.CLOSED="CLOSED",r.CHANNEL_ERROR="CHANNEL_ERROR"})(so||(so={}));class mu{constructor(n,i={config:{}},s){var l,d;if(this.topic=n,this.params=i,this.socket=s,this.bindings={},this.state=ea.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=n.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},i.config),this.timeout=this.socket.timeout,this.joinPush=new Gm(this,Gi.join,this.params,this.timeout),this.rejoinTimer=new cv(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=ea.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(m=>m.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=ea.closed,this.socket._remove(this)}),this._onError(m=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,m),this.state=ea.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=ea.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",m=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,m),this.state=ea.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Gi.reply,{},(m,p)=>{this._trigger(this._replyEventName(p),m)}),this.presence=new Vd(this),this.broadcastEndpointURL=dv(this.socket.endPoint),this.private=this.params.config.private||!1,!this.private&&(!((d=(l=this.params.config)===null||l===void 0?void 0:l.broadcast)===null||d===void 0)&&d.replay))throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(n,i=this.timeout){var s,l,d;if(this.socket.isConnected()||this.socket.connect(),this.state==ea.closed){const{config:{broadcast:m,presence:p,private:g}}=this.params,v=(l=(s=this.bindings.postgres_changes)===null||s===void 0?void 0:s.map(A=>A.filter))!==null&&l!==void 0?l:[],y=!!this.bindings[Hd.PRESENCE]&&this.bindings[Hd.PRESENCE].length>0||((d=this.params.config.presence)===null||d===void 0?void 0:d.enabled)===!0,E={},M={broadcast:m,presence:Object.assign(Object.assign({},p),{enabled:y}),postgres_changes:v,private:g};this.socket.accessTokenValue&&(E.access_token=this.socket.accessTokenValue),this._onError(A=>n?.(so.CHANNEL_ERROR,A)),this._onClose(()=>n?.(so.CLOSED)),this.updateJoinPayload(Object.assign({config:M},E)),this.joinedOnce=!0,this._rejoin(i),this.joinPush.receive("ok",async({postgres_changes:A})=>{var D;if(this.socket._isManualToken()||this.socket.setAuth(),A===void 0){n?.(so.SUBSCRIBED);return}else{const B=this.bindings.postgres_changes,H=(D=B?.length)!==null&&D!==void 0?D:0,K=[];for(let ae=0;ae<H;ae++){const F=B[ae],{filter:{event:Z,schema:W,table:ee,filter:q}}=F,J=A&&A[ae];if(J&&J.event===Z&&mu.isFilterValueEqual(J.schema,W)&&mu.isFilterValueEqual(J.table,ee)&&mu.isFilterValueEqual(J.filter,q))K.push(Object.assign(Object.assign({},F),{id:J.id}));else{this.unsubscribe(),this.state=ea.errored,n?.(so.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=K,n&&n(so.SUBSCRIBED);return}}).receive("error",A=>{this.state=ea.errored,n?.(so.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(A).join(", ")||"error")))}).receive("timeout",()=>{n?.(so.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(n,i={}){return await this.send({type:"presence",event:"track",payload:n},i.timeout||this.timeout)}async untrack(n={}){return await this.send({type:"presence",event:"untrack"},n)}on(n,i,s){return this.state===ea.joined&&n===Hd.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(async()=>await this.subscribe())),this._on(n,i,s)}async httpSend(n,i,s={}){var l;if(i==null)return Promise.reject("Payload is required for httpSend()");const d={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(d.Authorization=`Bearer ${this.socket.accessTokenValue}`);const m={method:"POST",headers:d,body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:i,private:this.private}]})},p=await this._fetchWithTimeout(this.broadcastEndpointURL,m,(l=s.timeout)!==null&&l!==void 0?l:this.timeout);if(p.status===202)return{success:!0};let g=p.statusText;try{const v=await p.json();g=v.error||v.message||g}catch{}return Promise.reject(new Error(g))}async send(n,i={}){var s,l;if(!this._canPush()&&n.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:d,payload:m}=n,p={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(p.Authorization=`Bearer ${this.socket.accessTokenValue}`);const g={method:"POST",headers:p,body:JSON.stringify({messages:[{topic:this.subTopic,event:d,payload:m,private:this.private}]})};try{const v=await this._fetchWithTimeout(this.broadcastEndpointURL,g,(s=i.timeout)!==null&&s!==void 0?s:this.timeout);return await((l=v.body)===null||l===void 0?void 0:l.cancel()),v.ok?"ok":"error"}catch(v){return v.name==="AbortError"?"timed out":"error"}}else return new Promise(d=>{var m,p,g;const v=this._push(n.type,n,i.timeout||this.timeout);n.type==="broadcast"&&!(!((g=(p=(m=this.params)===null||m===void 0?void 0:m.config)===null||p===void 0?void 0:p.broadcast)===null||g===void 0)&&g.ack)&&d("ok"),v.receive("ok",()=>d("ok")),v.receive("error",()=>d("error")),v.receive("timeout",()=>d("timed out"))})}updateJoinPayload(n){this.joinPush.updatePayload(n)}unsubscribe(n=this.timeout){this.state=ea.leaving;const i=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Gi.close,"leave",this._joinRef())};this.joinPush.destroy();let s=null;return new Promise(l=>{s=new Gm(this,Gi.leave,{},n),s.receive("ok",()=>{i(),l("ok")}).receive("timeout",()=>{i(),l("timed out")}).receive("error",()=>{l("error")}),s.send(),this._canPush()||s.trigger("ok",{})}).finally(()=>{s?.destroy()})}teardown(){this.pushBuffer.forEach(n=>n.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=ea.closed,this.bindings={}}async _fetchWithTimeout(n,i,s){const l=new AbortController,d=setTimeout(()=>l.abort(),s),m=await this.socket.fetch(n,Object.assign(Object.assign({},i),{signal:l.signal}));return clearTimeout(d),m}_push(n,i,s=this.timeout){if(!this.joinedOnce)throw`tried to push '${n}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let l=new Gm(this,n,i,s);return this._canPush()?l.send():this._addToPushBuffer(l),l}_addToPushBuffer(n){if(n.startTimeout(),this.pushBuffer.push(n),this.pushBuffer.length>pw){const i=this.pushBuffer.shift();i&&(i.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${i.event}`,i.payload))}}_onMessage(n,i,s){return i}_isMember(n){return this.topic===n}_joinRef(){return this.joinPush.ref}_trigger(n,i,s){var l,d;const m=n.toLocaleLowerCase(),{close:p,error:g,leave:v,join:y}=Gi;if(s&&[p,g,v,y].indexOf(m)>=0&&s!==this._joinRef())return;let M=this._onMessage(m,i,s);if(i&&!M)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(m)?(l=this.bindings.postgres_changes)===null||l===void 0||l.filter(A=>{var D,B,H;return((D=A.filter)===null||D===void 0?void 0:D.event)==="*"||((H=(B=A.filter)===null||B===void 0?void 0:B.event)===null||H===void 0?void 0:H.toLocaleLowerCase())===m}).map(A=>A.callback(M,s)):(d=this.bindings[m])===null||d===void 0||d.filter(A=>{var D,B,H,K,ae,F;if(["broadcast","presence","postgres_changes"].includes(m))if("id"in A){const Z=A.id,W=(D=A.filter)===null||D===void 0?void 0:D.event;return Z&&((B=i.ids)===null||B===void 0?void 0:B.includes(Z))&&(W==="*"||W?.toLocaleLowerCase()===((H=i.data)===null||H===void 0?void 0:H.type.toLocaleLowerCase()))}else{const Z=(ae=(K=A?.filter)===null||K===void 0?void 0:K.event)===null||ae===void 0?void 0:ae.toLocaleLowerCase();return Z==="*"||Z===((F=i?.event)===null||F===void 0?void 0:F.toLocaleLowerCase())}else return A.type.toLocaleLowerCase()===m}).map(A=>{if(typeof M=="object"&&"ids"in M){const D=M.data,{schema:B,table:H,commit_timestamp:K,type:ae,errors:F}=D;M=Object.assign(Object.assign({},{schema:B,table:H,commit_timestamp:K,eventType:ae,new:{},old:{},errors:F}),this._getPayloadRecords(D))}A.callback(M,s)})}_isClosed(){return this.state===ea.closed}_isJoined(){return this.state===ea.joined}_isJoining(){return this.state===ea.joining}_isLeaving(){return this.state===ea.leaving}_replyEventName(n){return`chan_reply_${n}`}_on(n,i,s){const l=n.toLocaleLowerCase(),d={type:l,filter:i,callback:s};return this.bindings[l]?this.bindings[l].push(d):this.bindings[l]=[d],this}_off(n,i){const s=n.toLocaleLowerCase();return this.bindings[s]&&(this.bindings[s]=this.bindings[s].filter(l=>{var d;return!(((d=l.type)===null||d===void 0?void 0:d.toLocaleLowerCase())===s&&mu.isEqual(l.filter,i))})),this}static isEqual(n,i){if(Object.keys(n).length!==Object.keys(i).length)return!1;for(const s in n)if(n[s]!==i[s])return!1;return!0}static isFilterValueEqual(n,i){return(n??void 0)===(i??void 0)}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(n){this._on(Gi.close,{},n)}_onError(n){this._on(Gi.error,{},i=>n(i))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(n=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=ea.joining,this.joinPush.resend(n))}_getPayloadRecords(n){const i={new:{},old:{}};return(n.type==="INSERT"||n.type==="UPDATE")&&(i.new=D0(n.columns,n.record)),(n.type==="UPDATE"||n.type==="DELETE")&&(i.old=D0(n.columns,n.old_record)),i}}const Vm=()=>{},uf={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},_w=[1e3,2e3,5e3,1e4],Ew=1e4,Cw=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Tw{constructor(n,i){var s;if(this.accessTokenValue=null,this.apiKey=null,this._manuallySetToken=!1,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=yp,this.transport=null,this.heartbeatIntervalMs=uf.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=Vm,this.ref=0,this.reconnectTimer=null,this.vsn=L0,this.logger=Vm,this.conn=null,this.sendBuffer=[],this.serializer=new gw,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._heartbeatSentAt=null,this._resolveFetch=l=>l?(...d)=>l(...d):(...d)=>fetch(...d),!(!((s=i?.params)===null||s===void 0)&&s.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=i.params.apikey,this.endPoint=`${n}/${vp.websocket}`,this.httpEndpoint=dv(n),this._initializeOptions(i),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(i?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=uw.createWebSocket(this.endpointURL())}catch(n){this._setConnectionState("disconnected");const i=n.message;throw i.includes("Node.js")?new Error(`${i}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${i}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:this.vsn}))}disconnect(n,i){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const s=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(s),this._setConnectionState("disconnected")},typeof this.conn.close=="function"&&(n?this.conn.close(n,i??""):this.conn.close()),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(n){const i=await n.unsubscribe();return this.channels.length===0&&this.disconnect(),i}async removeAllChannels(){const n=await Promise.all(this.channels.map(i=>i.unsubscribe()));return this.channels=[],this.disconnect(),n}log(n,i,s){this.logger(n,i,s)}connectionState(){switch(this.conn&&this.conn.readyState){case Jo.connecting:return $l.Connecting;case Jo.open:return $l.Open;case Jo.closing:return $l.Closing;default:return $l.Closed}}isConnected(){return this.connectionState()===$l.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(n,i={config:{}}){const s=`realtime:${n}`,l=this.getChannels().find(d=>d.topic===s);if(l)return l;{const d=new mu(`realtime:${n}`,i,this);return this.channels.push(d),d}}push(n){const{topic:i,event:s,payload:l,ref:d}=n,m=()=>{this.encode(n,p=>{var g;(g=this.conn)===null||g===void 0||g.send(p)})};this.log("push",`${i} ${s} (${d})`,l),this.isConnected()?m():this.sendBuffer.push(m)}async setAuth(n=null){this._authPromise=this._performAuth(n);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){var n;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(i){this.log("error","error in heartbeat callback",i)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this._heartbeatSentAt=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(i){this.log("error","error in heartbeat callback",i)}this._wasManualDisconnect=!1,(n=this.conn)===null||n===void 0||n.close(mw,"heartbeat timeout"),setTimeout(()=>{var i;this.isConnected()||(i=this.reconnectTimer)===null||i===void 0||i.scheduleTimeout()},uf.HEARTBEAT_TIMEOUT_FALLBACK);return}this._heartbeatSentAt=Date.now(),this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(i){this.log("error","error in heartbeat callback",i)}this._setAuthSafely("heartbeat")}onHeartbeat(n){this.heartbeatCallback=n}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(n=>n()),this.sendBuffer=[])}_makeRef(){let n=this.ref+1;return n===this.ref?this.ref=0:this.ref=n,this.ref.toString()}_leaveOpenTopic(n){let i=this.channels.find(s=>s.topic===n&&(s._isJoined()||s._isJoining()));i&&(this.log("transport",`leaving duplicate topic "${n}"`),i.unsubscribe())}_remove(n){this.channels=this.channels.filter(i=>i.topic!==n.topic)}_onConnMessage(n){this.decode(n.data,i=>{if(i.topic==="phoenix"&&i.event==="phx_reply"&&i.ref&&i.ref===this.pendingHeartbeatRef){const v=this._heartbeatSentAt?Date.now()-this._heartbeatSentAt:void 0;try{this.heartbeatCallback(i.payload.status==="ok"?"ok":"error",v)}catch(y){this.log("error","error in heartbeat callback",y)}this._heartbeatSentAt=null,this.pendingHeartbeatRef=null}const{topic:s,event:l,payload:d,ref:m}=i,p=m?`(${m})`:"",g=d.status||"";this.log("receive",`${g} ${s} ${l} ${p}`.trim(),d),this.channels.filter(v=>v._isMember(s)).forEach(v=>v._trigger(l,d,m)),this._triggerStateCallbacks("message",i)})}_clearTimer(n){var i;n==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):n==="reconnect"&&((i=this.reconnectTimer)===null||i===void 0||i.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=n=>this._onConnError(n),this.conn.onmessage=n=>this._onConnMessage(n),this.conn.onclose=n=>this._onConnClose(n),this.conn.readyState===Jo.open&&this._onConnOpen())}_teardownConnection(){if(this.conn){if(this.conn.readyState===Jo.open||this.conn.readyState===Jo.connecting)try{this.conn.close()}catch(n){this.log("error","Error closing connection",n)}this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null}this._clearAllTimers(),this._terminateWorker(),this.channels.forEach(n=>n.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).then(()=>{this.accessTokenValue&&(this.channels.forEach(i=>{i.updateJoinPayload({access_token:this.accessTokenValue})}),this.sendBuffer=[],this.channels.forEach(i=>{i._isJoining()&&(i.joinPush.sent=!1,i.joinPush.send())})),this.flushSendBuffer()}).catch(i=>{this.log("error","error waiting for auth on connect",i),this.flushSendBuffer()}),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const n=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(n),this.workerRef.onerror=i=>{this.log("worker","worker error",i.message),this._terminateWorker()},this.workerRef.onmessage=i=>{i.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_onConnClose(n){var i;this._setConnectionState("disconnected"),this.log("transport","close",n),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(i=this.reconnectTimer)===null||i===void 0||i.scheduleTimeout(),this._triggerStateCallbacks("close",n)}_onConnError(n){this._setConnectionState("disconnected"),this.log("transport",`${n}`),this._triggerChanError(),this._triggerStateCallbacks("error",n);try{this.heartbeatCallback("error")}catch(i){this.log("error","error in heartbeat callback",i)}}_triggerChanError(){this.channels.forEach(n=>n._trigger(Gi.error))}_appendParams(n,i){if(Object.keys(i).length===0)return n;const s=n.match(/\?/)?"&":"?",l=new URLSearchParams(i);return`${n}${s}${l}`}_workerObjectUrl(n){let i;if(n)i=n;else{const s=new Blob([Cw],{type:"application/javascript"});i=URL.createObjectURL(s)}return i}_setConnectionState(n,i=!1){this._connectionState=n,n==="connecting"?this._wasManualDisconnect=!1:n==="disconnecting"&&(this._wasManualDisconnect=i)}async _performAuth(n=null){let i,s=!1;if(n)i=n,s=!0;else if(this.accessToken)try{i=await this.accessToken()}catch(l){this.log("error","Error fetching access token from callback",l),i=this.accessTokenValue}else i=this.accessTokenValue;s?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=i&&(this.accessTokenValue=i,this.channels.forEach(l=>{const d={access_token:i,version:hw};i&&l.updateJoinPayload(d),l.joinedOnce&&l._isJoined()&&l._push(Gi.access_token,{access_token:i})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(n="general"){this._isManualToken()||this.setAuth().catch(i=>{this.log("error",`Error setting auth in ${n}`,i)})}_triggerStateCallbacks(n,i){try{this.stateChangeCallbacks[n].forEach(s=>{try{s(i)}catch(l){this.log("error",`error in ${n} callback`,l)}})}catch(s){this.log("error",`error triggering ${n} callbacks`,s)}}_setupReconnectionTimer(){this.reconnectTimer=new cv(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},uf.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(n){var i,s,l,d,m,p,g,v,y,E,M,A;switch(this.transport=(i=n?.transport)!==null&&i!==void 0?i:null,this.timeout=(s=n?.timeout)!==null&&s!==void 0?s:yp,this.heartbeatIntervalMs=(l=n?.heartbeatIntervalMs)!==null&&l!==void 0?l:uf.HEARTBEAT_INTERVAL,this.worker=(d=n?.worker)!==null&&d!==void 0?d:!1,this.accessToken=(m=n?.accessToken)!==null&&m!==void 0?m:null,this.heartbeatCallback=(p=n?.heartbeatCallback)!==null&&p!==void 0?p:Vm,this.vsn=(g=n?.vsn)!==null&&g!==void 0?g:L0,n?.params&&(this.params=n.params),n?.logger&&(this.logger=n.logger),(n?.logLevel||n?.log_level)&&(this.logLevel=n.logLevel||n.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(v=n?.reconnectAfterMs)!==null&&v!==void 0?v:(D=>_w[D-1]||Ew),this.vsn){case fw:this.encode=(y=n?.encode)!==null&&y!==void 0?y:((D,B)=>B(JSON.stringify(D))),this.decode=(E=n?.decode)!==null&&E!==void 0?E:((D,B)=>B(JSON.parse(D)));break;case lv:this.encode=(M=n?.encode)!==null&&M!==void 0?M:this.serializer.encode.bind(this.serializer),this.decode=(A=n?.decode)!==null&&A!==void 0?A:this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${this.vsn}`)}if(this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=n?.workerUrl}}}var Xd=class extends Error{constructor(r,n){super(r),this.name="IcebergError",this.status=n.status,this.icebergType=n.icebergType,this.icebergCode=n.icebergCode,this.details=n.details,this.isCommitStateUnknown=n.icebergType==="CommitStateUnknownException"||[500,502,504].includes(n.status)&&n.icebergType?.includes("CommitState")===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function Mw(r,n,i){const s=new URL(n,r);if(i)for(const[l,d]of Object.entries(i))d!==void 0&&s.searchParams.set(l,d);return s.toString()}async function Aw(r){return!r||r.type==="none"?{}:r.type==="bearer"?{Authorization:`Bearer ${r.token}`}:r.type==="header"?{[r.name]:r.value}:r.type==="custom"?await r.getHeaders():{}}function Rw(r){const n=r.fetchImpl??globalThis.fetch;return{async request({method:i,path:s,query:l,body:d,headers:m}){const p=Mw(r.baseUrl,s,l),g=await Aw(r.auth),v=await n(p,{method:i,headers:{...d?{"Content-Type":"application/json"}:{},...g,...m},body:d?JSON.stringify(d):void 0}),y=await v.text(),E=(v.headers.get("content-type")||"").includes("application/json"),M=E&&y?JSON.parse(y):y;if(!v.ok){const A=E?M:void 0,D=A?.error;throw new Xd(D?.message??`Request failed with status ${v.status}`,{status:v.status,icebergType:D?.type,icebergCode:D?.code,details:A})}return{status:v.status,headers:v.headers,data:M}}}}function df(r){return r.join("")}var Nw=class{constructor(r,n=""){this.client=r,this.prefix=n}async listNamespaces(r){const n=r?{parent:df(r.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:n})).data.namespaces.map(s=>({namespace:s}))}async createNamespace(r,n){const i={namespace:r.namespace,properties:n?.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:i})).data}async dropNamespace(r){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${df(r.namespace)}`})}async loadNamespaceMetadata(r){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${df(r.namespace)}`})).data.properties}}async namespaceExists(r){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${df(r.namespace)}`}),!0}catch(n){if(n instanceof Xd&&n.status===404)return!1;throw n}}async createNamespaceIfNotExists(r,n){try{return await this.createNamespace(r,n)}catch(i){if(i instanceof Xd&&i.status===409)return;throw i}}};function eu(r){return r.join("")}var Ow=class{constructor(r,n="",i){this.client=r,this.prefix=n,this.accessDelegation=i}async listTables(r){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${eu(r.namespace)}/tables`})).data.identifiers}async createTable(r,n){const i={};return this.accessDelegation&&(i["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${eu(r.namespace)}/tables`,body:n,headers:i})).data.metadata}async updateTable(r,n){const i=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${eu(r.namespace)}/tables/${r.name}`,body:n});return{"metadata-location":i.data["metadata-location"],metadata:i.data.metadata}}async dropTable(r,n){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${eu(r.namespace)}/tables/${r.name}`,query:{purgeRequested:String(n?.purge??!1)}})}async loadTable(r){const n={};return this.accessDelegation&&(n["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${eu(r.namespace)}/tables/${r.name}`,headers:n})).data.metadata}async tableExists(r){const n={};this.accessDelegation&&(n["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${eu(r.namespace)}/tables/${r.name}`,headers:n}),!0}catch(i){if(i instanceof Xd&&i.status===404)return!1;throw i}}async createTableIfNotExists(r,n){try{return await this.createTable(r,n)}catch(i){if(i instanceof Xd&&i.status===409)return await this.loadTable({namespace:r.namespace,name:n.name});throw i}}},jw=class{constructor(r){let n="v1";r.catalogName&&(n+=`/${r.catalogName}`);const i=r.baseUrl.endsWith("/")?r.baseUrl:`${r.baseUrl}/`;this.client=Rw({baseUrl:i,auth:r.auth,fetchImpl:r.fetch}),this.accessDelegation=r.accessDelegation?.join(","),this.namespaceOps=new Nw(this.client,n),this.tableOps=new Ow(this.client,n,this.accessDelegation)}async listNamespaces(r){return this.namespaceOps.listNamespaces(r)}async createNamespace(r,n){return this.namespaceOps.createNamespace(r,n)}async dropNamespace(r){await this.namespaceOps.dropNamespace(r)}async loadNamespaceMetadata(r){return this.namespaceOps.loadNamespaceMetadata(r)}async listTables(r){return this.tableOps.listTables(r)}async createTable(r,n){return this.tableOps.createTable(r,n)}async updateTable(r,n){return this.tableOps.updateTable(r,n)}async dropTable(r,n){await this.tableOps.dropTable(r,n)}async loadTable(r){return this.tableOps.loadTable(r)}async namespaceExists(r){return this.namespaceOps.namespaceExists(r)}async tableExists(r){return this.tableOps.tableExists(r)}async createNamespaceIfNotExists(r,n){return this.namespaceOps.createNamespaceIfNotExists(r,n)}async createTableIfNotExists(r,n){return this.tableOps.createTableIfNotExists(r,n)}},Df=class extends Error{constructor(r,n="storage",i,s){super(r),this.__isStorageError=!0,this.namespace=n,this.name=n==="vectors"?"StorageVectorsError":"StorageError",this.status=i,this.statusCode=s}};function Uf(r){return typeof r=="object"&&r!==null&&"__isStorageError"in r}var hf=class extends Df{constructor(r,n,i,s="storage"){super(r,s,n,i),this.name=s==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=n,this.statusCode=i}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}},hv=class extends Df{constructor(r,n,i="storage"){super(r,i),this.name=i==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=n}};const kw=r=>r?(...n)=>r(...n):(...n)=>fetch(...n),Iw=r=>{if(typeof r!="object"||r===null)return!1;const n=Object.getPrototypeOf(r);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},wp=r=>{if(Array.isArray(r))return r.map(i=>wp(i));if(typeof r=="function"||r!==Object(r))return r;const n={};return Object.entries(r).forEach(([i,s])=>{const l=i.replace(/([-_][a-z])/gi,d=>d.toUpperCase().replace(/[-_]/g,""));n[l]=wp(s)}),n},Lw=r=>!r||typeof r!="string"||r.length===0||r.length>100||r.trim()!==r||r.includes("/")||r.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(r);function Kd(r){"@babel/helpers - typeof";return Kd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Kd(r)}function Dw(r,n){if(Kd(r)!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,n);if(Kd(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function Uw(r){var n=Dw(r,"string");return Kd(n)=="symbol"?n:n+""}function Pw(r,n,i){return(n=Uw(n))in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,r}function B0(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function Ge(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?B0(Object(i),!0).forEach(function(s){Pw(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):B0(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}const z0=r=>{var n;return r.msg||r.message||r.error_description||(typeof r.error=="string"?r.error:(n=r.error)===null||n===void 0?void 0:n.message)||JSON.stringify(r)},Bw=async(r,n,i,s)=>{if(r&&typeof r=="object"&&"status"in r&&"ok"in r&&typeof r.status=="number"&&!i?.noResolveJson){const l=r,d=l.status||500;if(typeof l.json=="function")l.json().then(m=>{const p=m?.statusCode||m?.code||d+"";n(new hf(z0(m),d,p,s))}).catch(()=>{if(s==="vectors"){const m=d+"";n(new hf(l.statusText||`HTTP ${d} error`,d,m,s))}else{const m=d+"";n(new hf(l.statusText||`HTTP ${d} error`,d,m,s))}});else{const m=d+"";n(new hf(l.statusText||`HTTP ${d} error`,d,m,s))}}else n(new hv(z0(r),r,s))},zw=(r,n,i,s)=>{const l={method:r,headers:n?.headers||{}};return r==="GET"||r==="HEAD"||!s?Ge(Ge({},l),i):(Iw(s)?(l.headers=Ge({"Content-Type":"application/json"},n?.headers),l.body=JSON.stringify(s)):l.body=s,n?.duplex&&(l.duplex=n.duplex),Ge(Ge({},l),i))};async function Od(r,n,i,s,l,d,m){return new Promise((p,g)=>{r(i,zw(n,s,l,d)).then(v=>{if(!v.ok)throw v;if(s?.noResolveJson)return v;if(m==="vectors"){const y=v.headers.get("content-type");if(v.headers.get("content-length")==="0"||v.status===204)return{};if(!y||!y.includes("application/json"))return{}}return v.json()}).then(v=>p(v)).catch(v=>Bw(v,g,s,m))})}function fv(r="storage"){return{get:async(n,i,s,l)=>Od(n,"GET",i,s,l,void 0,r),post:async(n,i,s,l,d)=>Od(n,"POST",i,l,d,s,r),put:async(n,i,s,l,d)=>Od(n,"PUT",i,l,d,s,r),head:async(n,i,s,l)=>Od(n,"HEAD",i,Ge(Ge({},s),{},{noResolveJson:!0}),l,void 0,r),remove:async(n,i,s,l,d)=>Od(n,"DELETE",i,l,d,s,r)}}const Gw=fv("storage"),{get:Qd,post:zi,put:Sp,head:Vw,remove:Dp}=Gw,Gr=fv("vectors");var yu=class{constructor(r,n={},i,s="storage"){this.shouldThrowOnError=!1,this.url=r,this.headers=n,this.fetch=kw(i),this.namespace=s}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(r,n){return this.headers=Ge(Ge({},this.headers),{},{[r]:n}),this}async handleOperation(r){var n=this;try{return{data:await r(),error:null}}catch(i){if(n.shouldThrowOnError)throw i;if(Uf(i))return{data:null,error:i};throw i}}},Hw=class{constructor(r,n){this.downloadFn=r,this.shouldThrowOnError=n}then(r,n){return this.execute().then(r,n)}async execute(){var r=this;try{return{data:(await r.downloadFn()).body,error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(Uf(n))return{data:null,error:n};throw n}}};let mv;mv=Symbol.toStringTag;var $w=class{constructor(r,n){this.downloadFn=r,this.shouldThrowOnError=n,this[mv]="BlobDownloadBuilder",this.promise=null}asStream(){return new Hw(this.downloadFn,this.shouldThrowOnError)}then(r,n){return this.getPromise().then(r,n)}catch(r){return this.getPromise().catch(r)}finally(r){return this.getPromise().finally(r)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var r=this;try{return{data:await(await r.downloadFn()).blob(),error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(Uf(n))return{data:null,error:n};throw n}}};const Fw={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},G0={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var Ww=class extends yu{constructor(r,n={},i,s){super(r,n,s,"storage"),this.bucketId=i}async uploadOrUpdate(r,n,i,s){var l=this;return l.handleOperation(async()=>{let d;const m=Ge(Ge({},G0),s);let p=Ge(Ge({},l.headers),r==="POST"&&{"x-upsert":String(m.upsert)});const g=m.metadata;typeof Blob<"u"&&i instanceof Blob?(d=new FormData,d.append("cacheControl",m.cacheControl),g&&d.append("metadata",l.encodeMetadata(g)),d.append("",i)):typeof FormData<"u"&&i instanceof FormData?(d=i,d.has("cacheControl")||d.append("cacheControl",m.cacheControl),g&&!d.has("metadata")&&d.append("metadata",l.encodeMetadata(g))):(d=i,p["cache-control"]=`max-age=${m.cacheControl}`,p["content-type"]=m.contentType,g&&(p["x-metadata"]=l.toBase64(l.encodeMetadata(g))),(typeof ReadableStream<"u"&&d instanceof ReadableStream||d&&typeof d=="object"&&"pipe"in d&&typeof d.pipe=="function")&&!m.duplex&&(m.duplex="half")),s?.headers&&(p=Ge(Ge({},p),s.headers));const v=l._removeEmptyFolders(n),y=l._getFinalPath(v),E=await(r=="PUT"?Sp:zi)(l.fetch,`${l.url}/object/${y}`,d,Ge({headers:p},m?.duplex?{duplex:m.duplex}:{}));return{path:v,id:E.Id,fullPath:E.Key}})}async upload(r,n,i){return this.uploadOrUpdate("POST",r,n,i)}async uploadToSignedUrl(r,n,i,s){var l=this;const d=l._removeEmptyFolders(r),m=l._getFinalPath(d),p=new URL(l.url+`/object/upload/sign/${m}`);return p.searchParams.set("token",n),l.handleOperation(async()=>{let g;const v=Ge({upsert:G0.upsert},s),y=Ge(Ge({},l.headers),{"x-upsert":String(v.upsert)});return typeof Blob<"u"&&i instanceof Blob?(g=new FormData,g.append("cacheControl",v.cacheControl),g.append("",i)):typeof FormData<"u"&&i instanceof FormData?(g=i,g.append("cacheControl",v.cacheControl)):(g=i,y["cache-control"]=`max-age=${v.cacheControl}`,y["content-type"]=v.contentType),{path:d,fullPath:(await Sp(l.fetch,p.toString(),g,{headers:y})).Key}})}async createSignedUploadUrl(r,n){var i=this;return i.handleOperation(async()=>{let s=i._getFinalPath(r);const l=Ge({},i.headers);n?.upsert&&(l["x-upsert"]="true");const d=await zi(i.fetch,`${i.url}/object/upload/sign/${s}`,{},{headers:l}),m=new URL(i.url+d.url),p=m.searchParams.get("token");if(!p)throw new Df("No token returned by API");return{signedUrl:m.toString(),path:r,token:p}})}async update(r,n,i){return this.uploadOrUpdate("PUT",r,n,i)}async move(r,n,i){var s=this;return s.handleOperation(async()=>await zi(s.fetch,`${s.url}/object/move`,{bucketId:s.bucketId,sourceKey:r,destinationKey:n,destinationBucket:i?.destinationBucket},{headers:s.headers}))}async copy(r,n,i){var s=this;return s.handleOperation(async()=>({path:(await zi(s.fetch,`${s.url}/object/copy`,{bucketId:s.bucketId,sourceKey:r,destinationKey:n,destinationBucket:i?.destinationBucket},{headers:s.headers})).Key}))}async createSignedUrl(r,n,i){var s=this;return s.handleOperation(async()=>{let l=s._getFinalPath(r),d=await zi(s.fetch,`${s.url}/object/sign/${l}`,Ge({expiresIn:n},i?.transform?{transform:i.transform}:{}),{headers:s.headers});const m=i?.download?`&download=${i.download===!0?"":i.download}`:"";return{signedUrl:encodeURI(`${s.url}${d.signedURL}${m}`)}})}async createSignedUrls(r,n,i){var s=this;return s.handleOperation(async()=>{const l=await zi(s.fetch,`${s.url}/object/sign/${s.bucketId}`,{expiresIn:n,paths:r},{headers:s.headers}),d=i?.download?`&download=${i.download===!0?"":i.download}`:"";return l.map(m=>Ge(Ge({},m),{},{signedUrl:m.signedURL?encodeURI(`${s.url}${m.signedURL}${d}`):null}))})}download(r,n,i){const s=typeof n?.transform<"u"?"render/image/authenticated":"object",l=this.transformOptsToQueryString(n?.transform||{}),d=l?`?${l}`:"",m=this._getFinalPath(r),p=()=>Qd(this.fetch,`${this.url}/${s}/${m}${d}`,{headers:this.headers,noResolveJson:!0},i);return new $w(p,this.shouldThrowOnError)}async info(r){var n=this;const i=n._getFinalPath(r);return n.handleOperation(async()=>wp(await Qd(n.fetch,`${n.url}/object/info/${i}`,{headers:n.headers})))}async exists(r){var n=this;const i=n._getFinalPath(r);try{return await Vw(n.fetch,`${n.url}/object/${i}`,{headers:n.headers}),{data:!0,error:null}}catch(s){if(n.shouldThrowOnError)throw s;if(Uf(s)&&s instanceof hv){const l=s.originalError;if([400,404].includes(l?.status))return{data:!1,error:s}}throw s}}getPublicUrl(r,n){const i=this._getFinalPath(r),s=[],l=n?.download?`download=${n.download===!0?"":n.download}`:"";l!==""&&s.push(l);const d=typeof n?.transform<"u"?"render/image":"object",m=this.transformOptsToQueryString(n?.transform||{});m!==""&&s.push(m);let p=s.join("&");return p!==""&&(p=`?${p}`),{data:{publicUrl:encodeURI(`${this.url}/${d}/public/${i}${p}`)}}}async remove(r){var n=this;return n.handleOperation(async()=>await Dp(n.fetch,`${n.url}/object/${n.bucketId}`,{prefixes:r},{headers:n.headers}))}async list(r,n,i){var s=this;return s.handleOperation(async()=>{const l=Ge(Ge(Ge({},Fw),n),{},{prefix:r||""});return await zi(s.fetch,`${s.url}/object/list/${s.bucketId}`,l,{headers:s.headers},i)})}async listV2(r,n){var i=this;return i.handleOperation(async()=>{const s=Ge({},r);return await zi(i.fetch,`${i.url}/object/list-v2/${i.bucketId}`,s,{headers:i.headers},n)})}encodeMetadata(r){return JSON.stringify(r)}toBase64(r){return typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r)}_getFinalPath(r){return`${this.bucketId}/${r.replace(/^\/+/,"")}`}_removeEmptyFolders(r){return r.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(r){const n=[];return r.width&&n.push(`width=${r.width}`),r.height&&n.push(`height=${r.height}`),r.resize&&n.push(`resize=${r.resize}`),r.format&&n.push(`format=${r.format}`),r.quality&&n.push(`quality=${r.quality}`),n.join("&")}};const qw="2.98.0",nh={"X-Client-Info":`storage-js/${qw}`};var Yw=class extends yu{constructor(r,n={},i,s){const l=new URL(r);s?.useNewHostname&&/supabase\.(co|in|red)$/.test(l.hostname)&&!l.hostname.includes("storage.supabase.")&&(l.hostname=l.hostname.replace("supabase.","storage.supabase."));const d=l.href.replace(/\/$/,""),m=Ge(Ge({},nh),n);super(d,m,i,"storage")}async listBuckets(r){var n=this;return n.handleOperation(async()=>{const i=n.listBucketOptionsToQueryString(r);return await Qd(n.fetch,`${n.url}/bucket${i}`,{headers:n.headers})})}async getBucket(r){var n=this;return n.handleOperation(async()=>await Qd(n.fetch,`${n.url}/bucket/${r}`,{headers:n.headers}))}async createBucket(r,n={public:!1}){var i=this;return i.handleOperation(async()=>await zi(i.fetch,`${i.url}/bucket`,{id:r,name:r,type:n.type,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:i.headers}))}async updateBucket(r,n){var i=this;return i.handleOperation(async()=>await Sp(i.fetch,`${i.url}/bucket/${r}`,{id:r,name:r,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:i.headers}))}async emptyBucket(r){var n=this;return n.handleOperation(async()=>await zi(n.fetch,`${n.url}/bucket/${r}/empty`,{},{headers:n.headers}))}async deleteBucket(r){var n=this;return n.handleOperation(async()=>await Dp(n.fetch,`${n.url}/bucket/${r}`,{},{headers:n.headers}))}listBucketOptionsToQueryString(r){const n={};return r&&("limit"in r&&(n.limit=String(r.limit)),"offset"in r&&(n.offset=String(r.offset)),r.search&&(n.search=r.search),r.sortColumn&&(n.sortColumn=r.sortColumn),r.sortOrder&&(n.sortOrder=r.sortOrder)),Object.keys(n).length>0?"?"+new URLSearchParams(n).toString():""}},Xw=class extends yu{constructor(r,n={},i){const s=r.replace(/\/$/,""),l=Ge(Ge({},nh),n);super(s,l,i,"storage")}async createBucket(r){var n=this;return n.handleOperation(async()=>await zi(n.fetch,`${n.url}/bucket`,{name:r},{headers:n.headers}))}async listBuckets(r){var n=this;return n.handleOperation(async()=>{const i=new URLSearchParams;r?.limit!==void 0&&i.set("limit",r.limit.toString()),r?.offset!==void 0&&i.set("offset",r.offset.toString()),r?.sortColumn&&i.set("sortColumn",r.sortColumn),r?.sortOrder&&i.set("sortOrder",r.sortOrder),r?.search&&i.set("search",r.search);const s=i.toString(),l=s?`${n.url}/bucket?${s}`:`${n.url}/bucket`;return await Qd(n.fetch,l,{headers:n.headers})})}async deleteBucket(r){var n=this;return n.handleOperation(async()=>await Dp(n.fetch,`${n.url}/bucket/${r}`,{},{headers:n.headers}))}from(r){var n=this;if(!Lw(r))throw new Df("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const i=new jw({baseUrl:this.url,catalogName:r,auth:{type:"custom",getHeaders:async()=>n.headers},fetch:this.fetch}),s=this.shouldThrowOnError;return new Proxy(i,{get(l,d){const m=l[d];return typeof m!="function"?m:async(...p)=>{try{return{data:await m.apply(l,p),error:null}}catch(g){if(s)throw g;return{data:null,error:g}}}}})}},Kw=class extends yu{constructor(r,n={},i){const s=r.replace(/\/$/,""),l=Ge(Ge({},nh),{},{"Content-Type":"application/json"},n);super(s,l,i,"vectors")}async createIndex(r){var n=this;return n.handleOperation(async()=>await Gr.post(n.fetch,`${n.url}/CreateIndex`,r,{headers:n.headers})||{})}async getIndex(r,n){var i=this;return i.handleOperation(async()=>await Gr.post(i.fetch,`${i.url}/GetIndex`,{vectorBucketName:r,indexName:n},{headers:i.headers}))}async listIndexes(r){var n=this;return n.handleOperation(async()=>await Gr.post(n.fetch,`${n.url}/ListIndexes`,r,{headers:n.headers}))}async deleteIndex(r,n){var i=this;return i.handleOperation(async()=>await Gr.post(i.fetch,`${i.url}/DeleteIndex`,{vectorBucketName:r,indexName:n},{headers:i.headers})||{})}},Qw=class extends yu{constructor(r,n={},i){const s=r.replace(/\/$/,""),l=Ge(Ge({},nh),{},{"Content-Type":"application/json"},n);super(s,l,i,"vectors")}async putVectors(r){var n=this;if(r.vectors.length<1||r.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return n.handleOperation(async()=>await Gr.post(n.fetch,`${n.url}/PutVectors`,r,{headers:n.headers})||{})}async getVectors(r){var n=this;return n.handleOperation(async()=>await Gr.post(n.fetch,`${n.url}/GetVectors`,r,{headers:n.headers}))}async listVectors(r){var n=this;if(r.segmentCount!==void 0){if(r.segmentCount<1||r.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(r.segmentIndex!==void 0&&(r.segmentIndex<0||r.segmentIndex>=r.segmentCount))throw new Error(`segmentIndex must be between 0 and ${r.segmentCount-1}`)}return n.handleOperation(async()=>await Gr.post(n.fetch,`${n.url}/ListVectors`,r,{headers:n.headers}))}async queryVectors(r){var n=this;return n.handleOperation(async()=>await Gr.post(n.fetch,`${n.url}/QueryVectors`,r,{headers:n.headers}))}async deleteVectors(r){var n=this;if(r.keys.length<1||r.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return n.handleOperation(async()=>await Gr.post(n.fetch,`${n.url}/DeleteVectors`,r,{headers:n.headers})||{})}},Jw=class extends yu{constructor(r,n={},i){const s=r.replace(/\/$/,""),l=Ge(Ge({},nh),{},{"Content-Type":"application/json"},n);super(s,l,i,"vectors")}async createBucket(r){var n=this;return n.handleOperation(async()=>await Gr.post(n.fetch,`${n.url}/CreateVectorBucket`,{vectorBucketName:r},{headers:n.headers})||{})}async getBucket(r){var n=this;return n.handleOperation(async()=>await Gr.post(n.fetch,`${n.url}/GetVectorBucket`,{vectorBucketName:r},{headers:n.headers}))}async listBuckets(r={}){var n=this;return n.handleOperation(async()=>await Gr.post(n.fetch,`${n.url}/ListVectorBuckets`,r,{headers:n.headers}))}async deleteBucket(r){var n=this;return n.handleOperation(async()=>await Gr.post(n.fetch,`${n.url}/DeleteVectorBucket`,{vectorBucketName:r},{headers:n.headers})||{})}},Zw=class extends Jw{constructor(r,n={}){super(r,n.headers||{},n.fetch)}from(r){return new eS(this.url,this.headers,r,this.fetch)}async createBucket(r){var n=()=>super.createBucket,i=this;return n().call(i,r)}async getBucket(r){var n=()=>super.getBucket,i=this;return n().call(i,r)}async listBuckets(r={}){var n=()=>super.listBuckets,i=this;return n().call(i,r)}async deleteBucket(r){var n=()=>super.deleteBucket,i=this;return n().call(i,r)}},eS=class extends Kw{constructor(r,n,i,s){super(r,n,s),this.vectorBucketName=i}async createIndex(r){var n=()=>super.createIndex,i=this;return n().call(i,Ge(Ge({},r),{},{vectorBucketName:i.vectorBucketName}))}async listIndexes(r={}){var n=()=>super.listIndexes,i=this;return n().call(i,Ge(Ge({},r),{},{vectorBucketName:i.vectorBucketName}))}async getIndex(r){var n=()=>super.getIndex,i=this;return n().call(i,i.vectorBucketName,r)}async deleteIndex(r){var n=()=>super.deleteIndex,i=this;return n().call(i,i.vectorBucketName,r)}index(r){return new tS(this.url,this.headers,this.vectorBucketName,r,this.fetch)}},tS=class extends Qw{constructor(r,n,i,s,l){super(r,n,l),this.vectorBucketName=i,this.indexName=s}async putVectors(r){var n=()=>super.putVectors,i=this;return n().call(i,Ge(Ge({},r),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}async getVectors(r){var n=()=>super.getVectors,i=this;return n().call(i,Ge(Ge({},r),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}async listVectors(r={}){var n=()=>super.listVectors,i=this;return n().call(i,Ge(Ge({},r),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}async queryVectors(r){var n=()=>super.queryVectors,i=this;return n().call(i,Ge(Ge({},r),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}async deleteVectors(r){var n=()=>super.deleteVectors,i=this;return n().call(i,Ge(Ge({},r),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}},nS=class extends Yw{constructor(r,n={},i,s){super(r,n,i,s)}from(r){return new Ww(this.url,this.headers,r,this.fetch)}get vectors(){return new Zw(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new Xw(this.url+"/iceberg",this.headers,this.fetch)}};const pv="2.98.0",uu=30*1e3,xp=3,Hm=xp*uu,aS="http://localhost:9999",rS="supabase.auth.token",iS={"X-Client-Info":`gotrue-js/${pv}`},_p="X-Supabase-Api-Version",gv={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},sS=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,oS=600*1e3;class Jd extends Error{constructor(n,i,s){super(n),this.__isAuthError=!0,this.name="AuthError",this.status=i,this.code=s}}function Ne(r){return typeof r=="object"&&r!==null&&"__isAuthError"in r}class lS extends Jd{constructor(n,i,s){super(n,i,s),this.name="AuthApiError",this.status=i,this.code=s}}function cS(r){return Ne(r)&&r.name==="AuthApiError"}class Fl extends Jd{constructor(n,i){super(n),this.name="AuthUnknownError",this.originalError=i}}class lo extends Jd{constructor(n,i,s,l){super(n,s,l),this.name=i,this.status=s}}class zr extends lo{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function $m(r){return Ne(r)&&r.name==="AuthSessionMissingError"}class tu extends lo{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class ff extends lo{constructor(n){super(n,"AuthInvalidCredentialsError",400,void 0)}}class mf extends lo{constructor(n,i=null){super(n,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=i}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function uS(r){return Ne(r)&&r.name==="AuthImplicitGrantRedirectError"}class V0 extends lo{constructor(n,i=null){super(n,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=i}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class dS extends lo{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Ep extends lo{constructor(n,i){super(n,"AuthRetryableFetchError",i,void 0)}}function Fm(r){return Ne(r)&&r.name==="AuthRetryableFetchError"}class H0 extends lo{constructor(n,i,s){super(n,"AuthWeakPasswordError",i,"weak_password"),this.reasons=s}}class Cp extends lo{constructor(n){super(n,"AuthInvalidJwtError",400,"invalid_jwt")}}const jf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),$0=` 	
\r=`.split(""),hS=(()=>{const r=new Array(128);for(let n=0;n<r.length;n+=1)r[n]=-1;for(let n=0;n<$0.length;n+=1)r[$0[n].charCodeAt(0)]=-2;for(let n=0;n<jf.length;n+=1)r[jf[n].charCodeAt(0)]=n;return r})();function F0(r,n,i){if(r!==null)for(n.queue=n.queue<<8|r,n.queuedBits+=8;n.queuedBits>=6;){const s=n.queue>>n.queuedBits-6&63;i(jf[s]),n.queuedBits-=6}else if(n.queuedBits>0)for(n.queue=n.queue<<6-n.queuedBits,n.queuedBits=6;n.queuedBits>=6;){const s=n.queue>>n.queuedBits-6&63;i(jf[s]),n.queuedBits-=6}}function yv(r,n,i){const s=hS[r];if(s>-1)for(n.queue=n.queue<<6|s,n.queuedBits+=6;n.queuedBits>=8;)i(n.queue>>n.queuedBits-8&255),n.queuedBits-=8;else{if(s===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(r)}"`)}}function W0(r){const n=[],i=m=>{n.push(String.fromCodePoint(m))},s={utf8seq:0,codepoint:0},l={queue:0,queuedBits:0},d=m=>{pS(m,s,i)};for(let m=0;m<r.length;m+=1)yv(r.charCodeAt(m),l,d);return n.join("")}function fS(r,n){if(r<=127){n(r);return}else if(r<=2047){n(192|r>>6),n(128|r&63);return}else if(r<=65535){n(224|r>>12),n(128|r>>6&63),n(128|r&63);return}else if(r<=1114111){n(240|r>>18),n(128|r>>12&63),n(128|r>>6&63),n(128|r&63);return}throw new Error(`Unrecognized Unicode codepoint: ${r.toString(16)}`)}function mS(r,n){for(let i=0;i<r.length;i+=1){let s=r.charCodeAt(i);if(s>55295&&s<=56319){const l=(s-55296)*1024&65535;s=(r.charCodeAt(i+1)-56320&65535|l)+65536,i+=1}fS(s,n)}}function pS(r,n,i){if(n.utf8seq===0){if(r<=127){i(r);return}for(let s=1;s<6;s+=1)if((r>>7-s&1)===0){n.utf8seq=s;break}if(n.utf8seq===2)n.codepoint=r&31;else if(n.utf8seq===3)n.codepoint=r&15;else if(n.utf8seq===4)n.codepoint=r&7;else throw new Error("Invalid UTF-8 sequence");n.utf8seq-=1}else if(n.utf8seq>0){if(r<=127)throw new Error("Invalid UTF-8 sequence");n.codepoint=n.codepoint<<6|r&63,n.utf8seq-=1,n.utf8seq===0&&i(n.codepoint)}}function pu(r){const n=[],i={queue:0,queuedBits:0},s=l=>{n.push(l)};for(let l=0;l<r.length;l+=1)yv(r.charCodeAt(l),i,s);return new Uint8Array(n)}function gS(r){const n=[];return mS(r,i=>n.push(i)),new Uint8Array(n)}function ql(r){const n=[],i={queue:0,queuedBits:0},s=l=>{n.push(l)};return r.forEach(l=>F0(l,i,s)),F0(null,i,s),n.join("")}function yS(r){return Math.round(Date.now()/1e3)+r}function vS(){return Symbol("auth-callback")}const xa=()=>typeof window<"u"&&typeof document<"u",jl={tested:!1,writable:!1},vv=()=>{if(!xa())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(jl.tested)return jl.writable;const r=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(r,r),globalThis.localStorage.removeItem(r),jl.tested=!0,jl.writable=!0}catch{jl.tested=!0,jl.writable=!1}return jl.writable};function bS(r){const n={},i=new URL(r);if(i.hash&&i.hash[0]==="#")try{new URLSearchParams(i.hash.substring(1)).forEach((l,d)=>{n[d]=l})}catch{}return i.searchParams.forEach((s,l)=>{n[l]=s}),n}const bv=r=>r?(...n)=>r(...n):(...n)=>fetch(...n),wS=r=>typeof r=="object"&&r!==null&&"status"in r&&"ok"in r&&"json"in r&&typeof r.json=="function",du=async(r,n,i)=>{await r.setItem(n,JSON.stringify(i))},kl=async(r,n)=>{const i=await r.getItem(n);if(!i)return null;try{return JSON.parse(i)}catch{return i}},wa=async(r,n)=>{await r.removeItem(n)};class Pf{constructor(){this.promise=new Pf.promiseConstructor((n,i)=>{this.resolve=n,this.reject=i})}}Pf.promiseConstructor=Promise;function pf(r){const n=r.split(".");if(n.length!==3)throw new Cp("Invalid JWT structure");for(let s=0;s<n.length;s++)if(!sS.test(n[s]))throw new Cp("JWT not in base64url format");return{header:JSON.parse(W0(n[0])),payload:JSON.parse(W0(n[1])),signature:pu(n[2]),raw:{header:n[0],payload:n[1]}}}async function SS(r){return await new Promise(n=>{setTimeout(()=>n(null),r)})}function xS(r,n){return new Promise((s,l)=>{(async()=>{for(let d=0;d<1/0;d++)try{const m=await r(d);if(!n(d,null,m)){s(m);return}}catch(m){if(!n(d,m)){l(m);return}}})()})}function _S(r){return("0"+r.toString(16)).substr(-2)}function ES(){const n=new Uint32Array(56);if(typeof crypto>"u"){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",s=i.length;let l="";for(let d=0;d<56;d++)l+=i.charAt(Math.floor(Math.random()*s));return l}return crypto.getRandomValues(n),Array.from(n,_S).join("")}async function CS(r){const i=new TextEncoder().encode(r),s=await crypto.subtle.digest("SHA-256",i),l=new Uint8Array(s);return Array.from(l).map(d=>String.fromCharCode(d)).join("")}async function TS(r){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),r;const i=await CS(r);return btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function nu(r,n,i=!1){const s=ES();let l=s;i&&(l+="/PASSWORD_RECOVERY"),await du(r,`${n}-code-verifier`,l);const d=await TS(s);return[d,s===d?"plain":"s256"]}const MS=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function AS(r){const n=r.headers.get(_p);if(!n||!n.match(MS))return null;try{return new Date(`${n}T00:00:00.0Z`)}catch{return null}}function RS(r){if(!r)throw new Error("Missing exp claim");const n=Math.floor(Date.now()/1e3);if(r<=n)throw new Error("JWT has expired")}function NS(r){switch(r){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const OS=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function au(r){if(!OS.test(r))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Wm(){const r={};return new Proxy(r,{get:(n,i)=>{if(i==="__isUserNotAvailableProxy")return!0;if(typeof i=="symbol"){const s=i.toString();if(s==="Symbol(Symbol.toPrimitive)"||s==="Symbol(Symbol.toStringTag)"||s==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${i}" property of the session object is not supported. Please use getUser() instead.`)},set:(n,i)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${i}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(n,i)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${i}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function jS(r,n){return new Proxy(r,{get:(i,s,l)=>{if(s==="__isInsecureUserWarningProxy")return!0;if(typeof s=="symbol"){const d=s.toString();if(d==="Symbol(Symbol.toPrimitive)"||d==="Symbol(Symbol.toStringTag)"||d==="Symbol(util.inspect.custom)"||d==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(i,s,l)}return!n.value&&typeof s=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),n.value=!0),Reflect.get(i,s,l)}})}function q0(r){return JSON.parse(JSON.stringify(r))}const Bl=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),kS=[502,503,504];async function Y0(r){var n;if(!wS(r))throw new Ep(Bl(r),0);if(kS.includes(r.status))throw new Ep(Bl(r),r.status);let i;try{i=await r.json()}catch(d){throw new Fl(Bl(d),d)}let s;const l=AS(r);if(l&&l.getTime()>=gv["2024-01-01"].timestamp&&typeof i=="object"&&i&&typeof i.code=="string"?s=i.code:typeof i=="object"&&i&&typeof i.error_code=="string"&&(s=i.error_code),s){if(s==="weak_password")throw new H0(Bl(i),r.status,((n=i.weak_password)===null||n===void 0?void 0:n.reasons)||[]);if(s==="session_not_found")throw new zr}else if(typeof i=="object"&&i&&typeof i.weak_password=="object"&&i.weak_password&&Array.isArray(i.weak_password.reasons)&&i.weak_password.reasons.length&&i.weak_password.reasons.reduce((d,m)=>d&&typeof m=="string",!0))throw new H0(Bl(i),r.status,i.weak_password.reasons);throw new lS(Bl(i),r.status||500,s)}const IS=(r,n,i,s)=>{const l={method:r,headers:n?.headers||{}};return r==="GET"?l:(l.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},n?.headers),l.body=JSON.stringify(s),Object.assign(Object.assign({},l),i))};async function He(r,n,i,s){var l;const d=Object.assign({},s?.headers);d[_p]||(d[_p]=gv["2024-01-01"].name),s?.jwt&&(d.Authorization=`Bearer ${s.jwt}`);const m=(l=s?.query)!==null&&l!==void 0?l:{};s?.redirectTo&&(m.redirect_to=s.redirectTo);const p=Object.keys(m).length?"?"+new URLSearchParams(m).toString():"",g=await LS(r,n,i+p,{headers:d,noResolveJson:s?.noResolveJson},{},s?.body);return s?.xform?s?.xform(g):{data:Object.assign({},g),error:null}}async function LS(r,n,i,s,l,d){const m=IS(n,s,l,d);let p;try{p=await r(i,Object.assign({},m))}catch(g){throw console.error(g),new Ep(Bl(g),0)}if(p.ok||await Y0(p),s?.noResolveJson)return p;try{return await p.json()}catch(g){await Y0(g)}}function Bi(r){var n;let i=null;PS(r)&&(i=Object.assign({},r),r.expires_at||(i.expires_at=yS(r.expires_in)));const s=(n=r.user)!==null&&n!==void 0?n:r;return{data:{session:i,user:s},error:null}}function X0(r){const n=Bi(r);return!n.error&&r.weak_password&&typeof r.weak_password=="object"&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.message&&typeof r.weak_password.message=="string"&&r.weak_password.reasons.reduce((i,s)=>i&&typeof s=="string",!0)&&(n.data.weak_password=r.weak_password),n}function Zo(r){var n;return{data:{user:(n=r.user)!==null&&n!==void 0?n:r},error:null}}function DS(r){return{data:r,error:null}}function US(r){const{action_link:n,email_otp:i,hashed_token:s,redirect_to:l,verification_type:d}=r,m=Lf(r,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),p={action_link:n,email_otp:i,hashed_token:s,redirect_to:l,verification_type:d},g=Object.assign({},m);return{data:{properties:p,user:g},error:null}}function K0(r){return r}function PS(r){return r.access_token&&r.refresh_token&&r.expires_in}const qm=["global","local","others"];class BS{constructor({url:n="",headers:i={},fetch:s}){this.url=n,this.headers=i,this.fetch=bv(s),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)}}async signOut(n,i=qm[0]){if(qm.indexOf(i)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${qm.join(", ")}`);try{return await He(this.fetch,"POST",`${this.url}/logout?scope=${i}`,{headers:this.headers,jwt:n,noResolveJson:!0}),{data:null,error:null}}catch(s){if(Ne(s))return{data:null,error:s};throw s}}async inviteUserByEmail(n,i={}){try{return await He(this.fetch,"POST",`${this.url}/invite`,{body:{email:n,data:i.data},headers:this.headers,redirectTo:i.redirectTo,xform:Zo})}catch(s){if(Ne(s))return{data:{user:null},error:s};throw s}}async generateLink(n){try{const{options:i}=n,s=Lf(n,["options"]),l=Object.assign(Object.assign({},s),i);return"newEmail"in s&&(l.new_email=s?.newEmail,delete l.newEmail),await He(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:l,headers:this.headers,xform:US,redirectTo:i?.redirectTo})}catch(i){if(Ne(i))return{data:{properties:null,user:null},error:i};throw i}}async createUser(n){try{return await He(this.fetch,"POST",`${this.url}/admin/users`,{body:n,headers:this.headers,xform:Zo})}catch(i){if(Ne(i))return{data:{user:null},error:i};throw i}}async listUsers(n){var i,s,l,d,m,p,g;try{const v={nextPage:null,lastPage:0,total:0},y=await He(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(s=(i=n?.page)===null||i===void 0?void 0:i.toString())!==null&&s!==void 0?s:"",per_page:(d=(l=n?.perPage)===null||l===void 0?void 0:l.toString())!==null&&d!==void 0?d:""},xform:K0});if(y.error)throw y.error;const E=await y.json(),M=(m=y.headers.get("x-total-count"))!==null&&m!==void 0?m:0,A=(g=(p=y.headers.get("link"))===null||p===void 0?void 0:p.split(","))!==null&&g!==void 0?g:[];return A.length>0&&(A.forEach(D=>{const B=parseInt(D.split(";")[0].split("=")[1].substring(0,1)),H=JSON.parse(D.split(";")[1].split("=")[1]);v[`${H}Page`]=B}),v.total=parseInt(M)),{data:Object.assign(Object.assign({},E),v),error:null}}catch(v){if(Ne(v))return{data:{users:[]},error:v};throw v}}async getUserById(n){au(n);try{return await He(this.fetch,"GET",`${this.url}/admin/users/${n}`,{headers:this.headers,xform:Zo})}catch(i){if(Ne(i))return{data:{user:null},error:i};throw i}}async updateUserById(n,i){au(n);try{return await He(this.fetch,"PUT",`${this.url}/admin/users/${n}`,{body:i,headers:this.headers,xform:Zo})}catch(s){if(Ne(s))return{data:{user:null},error:s};throw s}}async deleteUser(n,i=!1){au(n);try{return await He(this.fetch,"DELETE",`${this.url}/admin/users/${n}`,{headers:this.headers,body:{should_soft_delete:i},xform:Zo})}catch(s){if(Ne(s))return{data:{user:null},error:s};throw s}}async _listFactors(n){au(n.userId);try{const{data:i,error:s}=await He(this.fetch,"GET",`${this.url}/admin/users/${n.userId}/factors`,{headers:this.headers,xform:l=>({data:{factors:l},error:null})});return{data:i,error:s}}catch(i){if(Ne(i))return{data:null,error:i};throw i}}async _deleteFactor(n){au(n.userId),au(n.id);try{return{data:await He(this.fetch,"DELETE",`${this.url}/admin/users/${n.userId}/factors/${n.id}`,{headers:this.headers}),error:null}}catch(i){if(Ne(i))return{data:null,error:i};throw i}}async _listOAuthClients(n){var i,s,l,d,m,p,g;try{const v={nextPage:null,lastPage:0,total:0},y=await He(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(s=(i=n?.page)===null||i===void 0?void 0:i.toString())!==null&&s!==void 0?s:"",per_page:(d=(l=n?.perPage)===null||l===void 0?void 0:l.toString())!==null&&d!==void 0?d:""},xform:K0});if(y.error)throw y.error;const E=await y.json(),M=(m=y.headers.get("x-total-count"))!==null&&m!==void 0?m:0,A=(g=(p=y.headers.get("link"))===null||p===void 0?void 0:p.split(","))!==null&&g!==void 0?g:[];return A.length>0&&(A.forEach(D=>{const B=parseInt(D.split(";")[0].split("=")[1].substring(0,1)),H=JSON.parse(D.split(";")[1].split("=")[1]);v[`${H}Page`]=B}),v.total=parseInt(M)),{data:Object.assign(Object.assign({},E),v),error:null}}catch(v){if(Ne(v))return{data:{clients:[]},error:v};throw v}}async _createOAuthClient(n){try{return await He(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:n,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(Ne(i))return{data:null,error:i};throw i}}async _getOAuthClient(n){try{return await He(this.fetch,"GET",`${this.url}/admin/oauth/clients/${n}`,{headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(Ne(i))return{data:null,error:i};throw i}}async _updateOAuthClient(n,i){try{return await He(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${n}`,{body:i,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(Ne(s))return{data:null,error:s};throw s}}async _deleteOAuthClient(n){try{return await He(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${n}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(i){if(Ne(i))return{data:null,error:i};throw i}}async _regenerateOAuthClientSecret(n){try{return await He(this.fetch,"POST",`${this.url}/admin/oauth/clients/${n}/regenerate_secret`,{headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(Ne(i))return{data:null,error:i};throw i}}}function Q0(r={}){return{getItem:n=>r[n]||null,setItem:(n,i)=>{r[n]=i},removeItem:n=>{delete r[n]}}}const ro={debug:!!(globalThis&&vv()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class wv extends Error{constructor(n){super(n),this.isAcquireTimeout=!0}}class zS extends wv{}async function GS(r,n,i){ro.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",r,n);const s=new globalThis.AbortController;n>0&&setTimeout(()=>{s.abort(),ro.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",r)},n),await Promise.resolve();try{return await globalThis.navigator.locks.request(r,n===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:s.signal},async l=>{if(l){ro.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",r,l.name);try{return await i()}finally{ro.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",r,l.name)}}else{if(n===0)throw ro.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",r),new zS(`Acquiring an exclusive Navigator LockManager lock "${r}" immediately failed`);if(ro.debug)try{const d=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(d,null,"  "))}catch(d){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",d)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await i()}})}catch(l){if(l?.name==="AbortError"&&n>0)return ro.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock",r),console.warn(`@supabase/gotrue-js: Lock "${r}" was not released within ${n}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`),await Promise.resolve().then(()=>globalThis.navigator.locks.request(r,{mode:"exclusive",steal:!0},async d=>{if(d){ro.debug&&console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)",r,d.name);try{return await i()}finally{ro.debug&&console.log("@supabase/gotrue-js: navigatorLock: released (stolen)",r,d.name)}}else return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"),await i()}));throw l}}function VS(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function Sv(r){if(!/^0x[a-fA-F0-9]{40}$/.test(r))throw new Error(`@supabase/auth-js: Address "${r}" is invalid.`);return r.toLowerCase()}function HS(r){return parseInt(r,16)}function $S(r){const n=new TextEncoder().encode(r);return"0x"+Array.from(n,s=>s.toString(16).padStart(2,"0")).join("")}function FS(r){var n;const{chainId:i,domain:s,expirationTime:l,issuedAt:d=new Date,nonce:m,notBefore:p,requestId:g,resources:v,scheme:y,uri:E,version:M}=r;{if(!Number.isInteger(i))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${i}`);if(!s)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(m&&m.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${m}`);if(!E)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(M!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${M}`);if(!((n=r.statement)===null||n===void 0)&&n.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${r.statement}`)}const A=Sv(r.address),D=y?`${y}://${s}`:s,B=r.statement?`${r.statement}
`:"",H=`${D} wants you to sign in with your Ethereum account:
${A}

${B}`;let K=`URI: ${E}
Version: ${M}
Chain ID: ${i}${m?`
Nonce: ${m}`:""}
Issued At: ${d.toISOString()}`;if(l&&(K+=`
Expiration Time: ${l.toISOString()}`),p&&(K+=`
Not Before: ${p.toISOString()}`),g&&(K+=`
Request ID: ${g}`),v){let ae=`
Resources:`;for(const F of v){if(!F||typeof F!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${F}`);ae+=`
- ${F}`}K+=ae}return`${H}
${K}`}class Yn extends Error{constructor({message:n,code:i,cause:s,name:l}){var d;super(n,{cause:s}),this.__isWebAuthnError=!0,this.name=(d=l??(s instanceof Error?s.name:void 0))!==null&&d!==void 0?d:"Unknown Error",this.code=i}}class kf extends Yn{constructor(n,i){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i,message:n}),this.name="WebAuthnUnknownError",this.originalError=i}}function WS({error:r,options:n}){var i,s,l;const{publicKey:d}=n;if(!d)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(n.signal instanceof AbortSignal)return new Yn({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else if(r.name==="ConstraintError"){if(((i=d.authenticatorSelection)===null||i===void 0?void 0:i.requireResidentKey)===!0)return new Yn({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:r});if(n.mediation==="conditional"&&((s=d.authenticatorSelection)===null||s===void 0?void 0:s.userVerification)==="required")return new Yn({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:r});if(((l=d.authenticatorSelection)===null||l===void 0?void 0:l.userVerification)==="required")return new Yn({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:r})}else{if(r.name==="InvalidStateError")return new Yn({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:r});if(r.name==="NotAllowedError")return new Yn({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="NotSupportedError")return d.pubKeyCredParams.filter(p=>p.type==="public-key").length===0?new Yn({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:r}):new Yn({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:r});if(r.name==="SecurityError"){const m=window.location.hostname;if(xv(m)){if(d.rp.id!==m)return new Yn({message:`The RP ID "${d.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new Yn({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="TypeError"){if(d.user.id.byteLength<1||d.user.id.byteLength>64)return new Yn({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:r})}else if(r.name==="UnknownError")return new Yn({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new Yn({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}function qS({error:r,options:n}){const{publicKey:i}=n;if(!i)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(n.signal instanceof AbortSignal)return new Yn({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else{if(r.name==="NotAllowedError")return new Yn({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="SecurityError"){const s=window.location.hostname;if(xv(s)){if(i.rpId!==s)return new Yn({message:`The RP ID "${i.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new Yn({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="UnknownError")return new Yn({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new Yn({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}class YS{createNewAbortSignal(){if(this.controller){const i=new Error("Cancelling existing WebAuthn API call for new one");i.name="AbortError",this.controller.abort(i)}const n=new AbortController;return this.controller=n,n.signal}cancelCeremony(){if(this.controller){const n=new Error("Manually cancelling existing WebAuthn API call");n.name="AbortError",this.controller.abort(n),this.controller=void 0}}}const XS=new YS;function KS(r){if(!r)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(r);const{challenge:n,user:i,excludeCredentials:s}=r,l=Lf(r,["challenge","user","excludeCredentials"]),d=pu(n).buffer,m=Object.assign(Object.assign({},i),{id:pu(i.id).buffer}),p=Object.assign(Object.assign({},l),{challenge:d,user:m});if(s&&s.length>0){p.excludeCredentials=new Array(s.length);for(let g=0;g<s.length;g++){const v=s[g];p.excludeCredentials[g]=Object.assign(Object.assign({},v),{id:pu(v.id).buffer,type:v.type||"public-key",transports:v.transports})}}return p}function QS(r){if(!r)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(r);const{challenge:n,allowCredentials:i}=r,s=Lf(r,["challenge","allowCredentials"]),l=pu(n).buffer,d=Object.assign(Object.assign({},s),{challenge:l});if(i&&i.length>0){d.allowCredentials=new Array(i.length);for(let m=0;m<i.length;m++){const p=i[m];d.allowCredentials[m]=Object.assign(Object.assign({},p),{id:pu(p.id).buffer,type:p.type||"public-key",transports:p.transports})}}return d}function JS(r){var n;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const i=r;return{id:r.id,rawId:r.id,response:{attestationObject:ql(new Uint8Array(r.response.attestationObject)),clientDataJSON:ql(new Uint8Array(r.response.clientDataJSON))},type:"public-key",clientExtensionResults:r.getClientExtensionResults(),authenticatorAttachment:(n=i.authenticatorAttachment)!==null&&n!==void 0?n:void 0}}function ZS(r){var n;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const i=r,s=r.getClientExtensionResults(),l=r.response;return{id:r.id,rawId:r.id,response:{authenticatorData:ql(new Uint8Array(l.authenticatorData)),clientDataJSON:ql(new Uint8Array(l.clientDataJSON)),signature:ql(new Uint8Array(l.signature)),userHandle:l.userHandle?ql(new Uint8Array(l.userHandle)):void 0},type:"public-key",clientExtensionResults:s,authenticatorAttachment:(n=i.authenticatorAttachment)!==null&&n!==void 0?n:void 0}}function xv(r){return r==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(r)}function J0(){var r,n;return!!(xa()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((r=navigator?.credentials)===null||r===void 0?void 0:r.create)=="function"&&typeof((n=navigator?.credentials)===null||n===void 0?void 0:n.get)=="function")}async function e1(r){try{const n=await navigator.credentials.create(r);return n?n instanceof PublicKeyCredential?{data:n,error:null}:{data:null,error:new kf("Browser returned unexpected credential type",n)}:{data:null,error:new kf("Empty credential response",n)}}catch(n){return{data:null,error:WS({error:n,options:r})}}}async function t1(r){try{const n=await navigator.credentials.get(r);return n?n instanceof PublicKeyCredential?{data:n,error:null}:{data:null,error:new kf("Browser returned unexpected credential type",n)}:{data:null,error:new kf("Empty credential response",n)}}catch(n){return{data:null,error:qS({error:n,options:r})}}}const n1={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},a1={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function If(...r){const n=l=>l!==null&&typeof l=="object"&&!Array.isArray(l),i=l=>l instanceof ArrayBuffer||ArrayBuffer.isView(l),s={};for(const l of r)if(l)for(const d in l){const m=l[d];if(m!==void 0)if(Array.isArray(m))s[d]=m;else if(i(m))s[d]=m;else if(n(m)){const p=s[d];n(p)?s[d]=If(p,m):s[d]=If(m)}else s[d]=m}return s}function r1(r,n){return If(n1,r,n||{})}function i1(r,n){return If(a1,r,n||{})}class s1{constructor(n){this.client=n,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(n){return this.client.mfa.enroll(Object.assign(Object.assign({},n),{factorType:"webauthn"}))}async _challenge({factorId:n,webauthn:i,friendlyName:s,signal:l},d){var m;try{const{data:p,error:g}=await this.client.mfa.challenge({factorId:n,webauthn:i});if(!p)return{data:null,error:g};const v=l??XS.createNewAbortSignal();if(p.webauthn.type==="create"){const{user:y}=p.webauthn.credential_options.publicKey;if(!y.name){const E=s;if(E)y.name=`${y.id}:${E}`;else{const A=(await this.client.getUser()).data.user,D=((m=A?.user_metadata)===null||m===void 0?void 0:m.name)||A?.email||A?.id||"User";y.name=`${y.id}:${D}`}}y.displayName||(y.displayName=y.name)}switch(p.webauthn.type){case"create":{const y=r1(p.webauthn.credential_options.publicKey,d?.create),{data:E,error:M}=await e1({publicKey:y,signal:v});return E?{data:{factorId:n,challengeId:p.id,webauthn:{type:p.webauthn.type,credential_response:E}},error:null}:{data:null,error:M}}case"request":{const y=i1(p.webauthn.credential_options.publicKey,d?.request),{data:E,error:M}=await t1(Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:y,signal:v}));return E?{data:{factorId:n,challengeId:p.id,webauthn:{type:p.webauthn.type,credential_response:E}},error:null}:{data:null,error:M}}}}catch(p){return Ne(p)?{data:null,error:p}:{data:null,error:new Fl("Unexpected error in challenge",p)}}}async _verify({challengeId:n,factorId:i,webauthn:s}){return this.client.mfa.verify({factorId:i,challengeId:n,webauthn:s})}async _authenticate({factorId:n,webauthn:{rpId:i=typeof window<"u"?window.location.hostname:void 0,rpOrigins:s=typeof window<"u"?[window.location.origin]:void 0,signal:l}={}},d){if(!i)return{data:null,error:new Jd("rpId is required for WebAuthn authentication")};try{if(!J0())return{data:null,error:new Fl("Browser does not support WebAuthn",null)};const{data:m,error:p}=await this.challenge({factorId:n,webauthn:{rpId:i,rpOrigins:s},signal:l},{request:d});if(!m)return{data:null,error:p};const{webauthn:g}=m;return this._verify({factorId:n,challengeId:m.challengeId,webauthn:{type:g.type,rpId:i,rpOrigins:s,credential_response:g.credential_response}})}catch(m){return Ne(m)?{data:null,error:m}:{data:null,error:new Fl("Unexpected error in authenticate",m)}}}async _register({friendlyName:n,webauthn:{rpId:i=typeof window<"u"?window.location.hostname:void 0,rpOrigins:s=typeof window<"u"?[window.location.origin]:void 0,signal:l}={}},d){if(!i)return{data:null,error:new Jd("rpId is required for WebAuthn registration")};try{if(!J0())return{data:null,error:new Fl("Browser does not support WebAuthn",null)};const{data:m,error:p}=await this._enroll({friendlyName:n});if(!m)return await this.client.mfa.listFactors().then(y=>{var E;return(E=y.data)===null||E===void 0?void 0:E.all.find(M=>M.factor_type==="webauthn"&&M.friendly_name===n&&M.status!=="unverified")}).then(y=>y?this.client.mfa.unenroll({factorId:y?.id}):void 0),{data:null,error:p};const{data:g,error:v}=await this._challenge({factorId:m.id,friendlyName:m.friendly_name,webauthn:{rpId:i,rpOrigins:s},signal:l},{create:d});return g?this._verify({factorId:m.id,challengeId:g.challengeId,webauthn:{rpId:i,rpOrigins:s,type:g.webauthn.type,credential_response:g.webauthn.credential_response}}):{data:null,error:v}}catch(m){return Ne(m)?{data:null,error:m}:{data:null,error:new Fl("Unexpected error in register",m)}}}}VS();const o1={url:aS,storageKey:rS,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:iS,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1};async function Z0(r,n,i){return await i()}const ru={};class Zd{get jwks(){var n,i;return(i=(n=ru[this.storageKey])===null||n===void 0?void 0:n.jwks)!==null&&i!==void 0?i:{keys:[]}}set jwks(n){ru[this.storageKey]=Object.assign(Object.assign({},ru[this.storageKey]),{jwks:n})}get jwks_cached_at(){var n,i;return(i=(n=ru[this.storageKey])===null||n===void 0?void 0:n.cachedAt)!==null&&i!==void 0?i:Number.MIN_SAFE_INTEGER}set jwks_cached_at(n){ru[this.storageKey]=Object.assign(Object.assign({},ru[this.storageKey]),{cachedAt:n})}constructor(n){var i,s,l;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const d=Object.assign(Object.assign({},o1),n);if(this.storageKey=d.storageKey,this.instanceID=(i=Zd.nextInstanceID[this.storageKey])!==null&&i!==void 0?i:0,Zd.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!d.debug,typeof d.debug=="function"&&(this.logger=d.debug),this.instanceID>0&&xa()){const m=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(m),this.logDebugMessages&&console.trace(m)}if(this.persistSession=d.persistSession,this.autoRefreshToken=d.autoRefreshToken,this.admin=new BS({url:d.url,headers:d.headers,fetch:d.fetch}),this.url=d.url,this.headers=d.headers,this.fetch=bv(d.fetch),this.lock=d.lock||Z0,this.detectSessionInUrl=d.detectSessionInUrl,this.flowType=d.flowType,this.hasCustomAuthorizationHeader=d.hasCustomAuthorizationHeader,this.throwOnError=d.throwOnError,this.lockAcquireTimeout=d.lockAcquireTimeout,d.lock?this.lock=d.lock:this.persistSession&&xa()&&(!((s=globalThis?.navigator)===null||s===void 0)&&s.locks)?this.lock=GS:this.lock=Z0,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new s1(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.persistSession?(d.storage?this.storage=d.storage:vv()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Q0(this.memoryStorage)),d.userStorage&&(this.userStorage=d.userStorage)):(this.memoryStorage={},this.storage=Q0(this.memoryStorage)),xa()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(m){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",m)}(l=this.broadcastChannel)===null||l===void 0||l.addEventListener("message",async m=>{this._debug("received broadcast notification from other tab or client",m);try{await this._notifyAllSubscribers(m.data.event,m.data.session,!1)}catch(p){this._debug("#broadcastChannel","error",p)}})}d.skipAutoInitialize||this.initialize().catch(m=>{this._debug("#initialize()","error",m)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(n){if(this.throwOnError&&n&&n.error)throw n.error;return n}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${pv}) ${new Date().toISOString()}`}_debug(...n){return this.logDebugMessages&&this.logger(this._logPrefix(),...n),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var n;try{let i={},s="none";if(xa()&&(i=bS(window.location.href),this._isImplicitGrantCallback(i)?s="implicit":await this._isPKCECallback(i)&&(s="pkce")),xa()&&this.detectSessionInUrl&&s!=="none"){const{data:l,error:d}=await this._getSessionFromURL(i,s);if(d){if(this._debug("#_initialize()","error detecting session from URL",d),uS(d)){const g=(n=d.details)===null||n===void 0?void 0:n.code;if(g==="identity_already_exists"||g==="identity_not_found"||g==="single_identity_not_deletable")return{error:d}}return{error:d}}const{session:m,redirectType:p}=l;return this._debug("#_initialize()","detected session in URL",m,"redirect type",p),await this._saveSession(m),setTimeout(async()=>{p==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",m):await this._notifyAllSubscribers("SIGNED_IN",m)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(i){return Ne(i)?this._returnResult({error:i}):this._returnResult({error:new Fl("Unexpected error during initialization",i)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(n){var i,s,l;try{const d=await He(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(s=(i=n?.options)===null||i===void 0?void 0:i.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:(l=n?.options)===null||l===void 0?void 0:l.captchaToken}},xform:Bi}),{data:m,error:p}=d;if(p||!m)return this._returnResult({data:{user:null,session:null},error:p});const g=m.session,v=m.user;return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",g)),this._returnResult({data:{user:v,session:g},error:null})}catch(d){if(Ne(d))return this._returnResult({data:{user:null,session:null},error:d});throw d}}async signUp(n){var i,s,l;try{let d;if("email"in n){const{email:y,password:E,options:M}=n;let A=null,D=null;this.flowType==="pkce"&&([A,D]=await nu(this.storage,this.storageKey)),d=await He(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:M?.emailRedirectTo,body:{email:y,password:E,data:(i=M?.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:M?.captchaToken},code_challenge:A,code_challenge_method:D},xform:Bi})}else if("phone"in n){const{phone:y,password:E,options:M}=n;d=await He(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:y,password:E,data:(s=M?.data)!==null&&s!==void 0?s:{},channel:(l=M?.channel)!==null&&l!==void 0?l:"sms",gotrue_meta_security:{captcha_token:M?.captchaToken}},xform:Bi})}else throw new ff("You must provide either an email or phone number and a password");const{data:m,error:p}=d;if(p||!m)return await wa(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:p});const g=m.session,v=m.user;return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",g)),this._returnResult({data:{user:v,session:g},error:null})}catch(d){if(await wa(this.storage,`${this.storageKey}-code-verifier`),Ne(d))return this._returnResult({data:{user:null,session:null},error:d});throw d}}async signInWithPassword(n){try{let i;if("email"in n){const{email:d,password:m,options:p}=n;i=await He(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:d,password:m,gotrue_meta_security:{captcha_token:p?.captchaToken}},xform:X0})}else if("phone"in n){const{phone:d,password:m,options:p}=n;i=await He(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:d,password:m,gotrue_meta_security:{captcha_token:p?.captchaToken}},xform:X0})}else throw new ff("You must provide either an email or phone number and a password");const{data:s,error:l}=i;if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!s||!s.session||!s.user){const d=new tu;return this._returnResult({data:{user:null,session:null},error:d})}return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),this._returnResult({data:Object.assign({user:s.user,session:s.session},s.weak_password?{weakPassword:s.weak_password}:null),error:l})}catch(i){if(Ne(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithOAuth(n){var i,s,l,d;return await this._handleProviderSignIn(n.provider,{redirectTo:(i=n.options)===null||i===void 0?void 0:i.redirectTo,scopes:(s=n.options)===null||s===void 0?void 0:s.scopes,queryParams:(l=n.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:(d=n.options)===null||d===void 0?void 0:d.skipBrowserRedirect})}async exchangeCodeForSession(n){return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(n))}async signInWithWeb3(n){const{chain:i}=n;switch(i){case"ethereum":return await this.signInWithEthereum(n);case"solana":return await this.signInWithSolana(n);default:throw new Error(`@supabase/auth-js: Unsupported chain "${i}"`)}}async signInWithEthereum(n){var i,s,l,d,m,p,g,v,y,E,M;let A,D;if("message"in n)A=n.message,D=n.signature;else{const{chain:B,wallet:H,statement:K,options:ae}=n;let F;if(xa())if(typeof H=="object")F=H;else{const pe=window;if("ethereum"in pe&&typeof pe.ethereum=="object"&&"request"in pe.ethereum&&typeof pe.ethereum.request=="function")F=pe.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof H!="object"||!ae?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");F=H}const Z=new URL((i=ae?.url)!==null&&i!==void 0?i:window.location.href),W=await F.request({method:"eth_requestAccounts"}).then(pe=>pe).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!W||W.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const ee=Sv(W[0]);let q=(s=ae?.signInWithEthereum)===null||s===void 0?void 0:s.chainId;if(!q){const pe=await F.request({method:"eth_chainId"});q=HS(pe)}const J={domain:Z.host,address:ee,statement:K,uri:Z.href,version:"1",chainId:q,nonce:(l=ae?.signInWithEthereum)===null||l===void 0?void 0:l.nonce,issuedAt:(m=(d=ae?.signInWithEthereum)===null||d===void 0?void 0:d.issuedAt)!==null&&m!==void 0?m:new Date,expirationTime:(p=ae?.signInWithEthereum)===null||p===void 0?void 0:p.expirationTime,notBefore:(g=ae?.signInWithEthereum)===null||g===void 0?void 0:g.notBefore,requestId:(v=ae?.signInWithEthereum)===null||v===void 0?void 0:v.requestId,resources:(y=ae?.signInWithEthereum)===null||y===void 0?void 0:y.resources};A=FS(J),D=await F.request({method:"personal_sign",params:[$S(A),ee]})}try{const{data:B,error:H}=await He(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:A,signature:D},!((E=n.options)===null||E===void 0)&&E.captchaToken?{gotrue_meta_security:{captcha_token:(M=n.options)===null||M===void 0?void 0:M.captchaToken}}:null),xform:Bi});if(H)throw H;if(!B||!B.session||!B.user){const K=new tu;return this._returnResult({data:{user:null,session:null},error:K})}return B.session&&(await this._saveSession(B.session),await this._notifyAllSubscribers("SIGNED_IN",B.session)),this._returnResult({data:Object.assign({},B),error:H})}catch(B){if(Ne(B))return this._returnResult({data:{user:null,session:null},error:B});throw B}}async signInWithSolana(n){var i,s,l,d,m,p,g,v,y,E,M,A;let D,B;if("message"in n)D=n.message,B=n.signature;else{const{chain:H,wallet:K,statement:ae,options:F}=n;let Z;if(xa())if(typeof K=="object")Z=K;else{const ee=window;if("solana"in ee&&typeof ee.solana=="object"&&("signIn"in ee.solana&&typeof ee.solana.signIn=="function"||"signMessage"in ee.solana&&typeof ee.solana.signMessage=="function"))Z=ee.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof K!="object"||!F?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");Z=K}const W=new URL((i=F?.url)!==null&&i!==void 0?i:window.location.href);if("signIn"in Z&&Z.signIn){const ee=await Z.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},F?.signInWithSolana),{version:"1",domain:W.host,uri:W.href}),ae?{statement:ae}:null));let q;if(Array.isArray(ee)&&ee[0]&&typeof ee[0]=="object")q=ee[0];else if(ee&&typeof ee=="object"&&"signedMessage"in ee&&"signature"in ee)q=ee;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in q&&"signature"in q&&(typeof q.signedMessage=="string"||q.signedMessage instanceof Uint8Array)&&q.signature instanceof Uint8Array)D=typeof q.signedMessage=="string"?q.signedMessage:new TextDecoder().decode(q.signedMessage),B=q.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in Z)||typeof Z.signMessage!="function"||!("publicKey"in Z)||typeof Z!="object"||!Z.publicKey||!("toBase58"in Z.publicKey)||typeof Z.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");D=[`${W.host} wants you to sign in with your Solana account:`,Z.publicKey.toBase58(),...ae?["",ae,""]:[""],"Version: 1",`URI: ${W.href}`,`Issued At: ${(l=(s=F?.signInWithSolana)===null||s===void 0?void 0:s.issuedAt)!==null&&l!==void 0?l:new Date().toISOString()}`,...!((d=F?.signInWithSolana)===null||d===void 0)&&d.notBefore?[`Not Before: ${F.signInWithSolana.notBefore}`]:[],...!((m=F?.signInWithSolana)===null||m===void 0)&&m.expirationTime?[`Expiration Time: ${F.signInWithSolana.expirationTime}`]:[],...!((p=F?.signInWithSolana)===null||p===void 0)&&p.chainId?[`Chain ID: ${F.signInWithSolana.chainId}`]:[],...!((g=F?.signInWithSolana)===null||g===void 0)&&g.nonce?[`Nonce: ${F.signInWithSolana.nonce}`]:[],...!((v=F?.signInWithSolana)===null||v===void 0)&&v.requestId?[`Request ID: ${F.signInWithSolana.requestId}`]:[],...!((E=(y=F?.signInWithSolana)===null||y===void 0?void 0:y.resources)===null||E===void 0)&&E.length?["Resources",...F.signInWithSolana.resources.map(q=>`- ${q}`)]:[]].join(`
`);const ee=await Z.signMessage(new TextEncoder().encode(D),"utf8");if(!ee||!(ee instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");B=ee}}try{const{data:H,error:K}=await He(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:D,signature:ql(B)},!((M=n.options)===null||M===void 0)&&M.captchaToken?{gotrue_meta_security:{captcha_token:(A=n.options)===null||A===void 0?void 0:A.captchaToken}}:null),xform:Bi});if(K)throw K;if(!H||!H.session||!H.user){const ae=new tu;return this._returnResult({data:{user:null,session:null},error:ae})}return H.session&&(await this._saveSession(H.session),await this._notifyAllSubscribers("SIGNED_IN",H.session)),this._returnResult({data:Object.assign({},H),error:K})}catch(H){if(Ne(H))return this._returnResult({data:{user:null,session:null},error:H});throw H}}async _exchangeCodeForSession(n){const i=await kl(this.storage,`${this.storageKey}-code-verifier`),[s,l]=(i??"").split("/");try{if(!s&&this.flowType==="pkce")throw new dS;const{data:d,error:m}=await He(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:n,code_verifier:s},xform:Bi});if(await wa(this.storage,`${this.storageKey}-code-verifier`),m)throw m;if(!d||!d.session||!d.user){const p=new tu;return this._returnResult({data:{user:null,session:null,redirectType:null},error:p})}return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",d.session)),this._returnResult({data:Object.assign(Object.assign({},d),{redirectType:l??null}),error:m})}catch(d){if(await wa(this.storage,`${this.storageKey}-code-verifier`),Ne(d))return this._returnResult({data:{user:null,session:null,redirectType:null},error:d});throw d}}async signInWithIdToken(n){try{const{options:i,provider:s,token:l,access_token:d,nonce:m}=n,p=await He(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:s,id_token:l,access_token:d,nonce:m,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Bi}),{data:g,error:v}=p;if(v)return this._returnResult({data:{user:null,session:null},error:v});if(!g||!g.session||!g.user){const y=new tu;return this._returnResult({data:{user:null,session:null},error:y})}return g.session&&(await this._saveSession(g.session),await this._notifyAllSubscribers("SIGNED_IN",g.session)),this._returnResult({data:g,error:v})}catch(i){if(Ne(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithOtp(n){var i,s,l,d,m;try{if("email"in n){const{email:p,options:g}=n;let v=null,y=null;this.flowType==="pkce"&&([v,y]=await nu(this.storage,this.storageKey));const{error:E}=await He(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:p,data:(i=g?.data)!==null&&i!==void 0?i:{},create_user:(s=g?.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:g?.captchaToken},code_challenge:v,code_challenge_method:y},redirectTo:g?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:E})}if("phone"in n){const{phone:p,options:g}=n,{data:v,error:y}=await He(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:p,data:(l=g?.data)!==null&&l!==void 0?l:{},create_user:(d=g?.shouldCreateUser)!==null&&d!==void 0?d:!0,gotrue_meta_security:{captcha_token:g?.captchaToken},channel:(m=g?.channel)!==null&&m!==void 0?m:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:v?.message_id},error:y})}throw new ff("You must provide either an email or phone number.")}catch(p){if(await wa(this.storage,`${this.storageKey}-code-verifier`),Ne(p))return this._returnResult({data:{user:null,session:null},error:p});throw p}}async verifyOtp(n){var i,s;try{let l,d;"options"in n&&(l=(i=n.options)===null||i===void 0?void 0:i.redirectTo,d=(s=n.options)===null||s===void 0?void 0:s.captchaToken);const{data:m,error:p}=await He(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},n),{gotrue_meta_security:{captcha_token:d}}),redirectTo:l,xform:Bi});if(p)throw p;if(!m)throw new Error("An error occurred on token verification.");const g=m.session,v=m.user;return g?.access_token&&(await this._saveSession(g),await this._notifyAllSubscribers(n.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",g)),this._returnResult({data:{user:v,session:g},error:null})}catch(l){if(Ne(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async signInWithSSO(n){var i,s,l,d,m;try{let p=null,g=null;this.flowType==="pkce"&&([p,g]=await nu(this.storage,this.storageKey));const v=await He(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in n?{provider_id:n.providerId}:null),"domain"in n?{domain:n.domain}:null),{redirect_to:(s=(i=n.options)===null||i===void 0?void 0:i.redirectTo)!==null&&s!==void 0?s:void 0}),!((l=n?.options)===null||l===void 0)&&l.captchaToken?{gotrue_meta_security:{captcha_token:n.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:p,code_challenge_method:g}),headers:this.headers,xform:DS});return!((d=v.data)===null||d===void 0)&&d.url&&xa()&&!(!((m=n.options)===null||m===void 0)&&m.skipBrowserRedirect)&&window.location.assign(v.data.url),this._returnResult(v)}catch(p){if(await wa(this.storage,`${this.storageKey}-code-verifier`),Ne(p))return this._returnResult({data:null,error:p});throw p}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async n=>{const{data:{session:i},error:s}=n;if(s)throw s;if(!i)throw new zr;const{error:l}=await He(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:i.access_token});return this._returnResult({data:{user:null,session:null},error:l})})}catch(n){if(Ne(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async resend(n){try{const i=`${this.url}/resend`;if("email"in n){const{email:s,type:l,options:d}=n,{error:m}=await He(this.fetch,"POST",i,{headers:this.headers,body:{email:s,type:l,gotrue_meta_security:{captcha_token:d?.captchaToken}},redirectTo:d?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:m})}else if("phone"in n){const{phone:s,type:l,options:d}=n,{data:m,error:p}=await He(this.fetch,"POST",i,{headers:this.headers,body:{phone:s,type:l,gotrue_meta_security:{captcha_token:d?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:m?.message_id},error:p})}throw new ff("You must provide either an email or phone number and a type")}catch(i){if(Ne(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async getSession(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async i=>i))}async _acquireLock(n,i){this._debug("#_acquireLock","begin",n);try{if(this.lockAcquired){const s=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),l=(async()=>(await s,await i()))();return this.pendingInLock.push((async()=>{try{await l}catch{}})()),l}return await this.lock(`lock:${this.storageKey}`,n,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const s=i();for(this.pendingInLock.push((async()=>{try{await s}catch{}})()),await s;this.pendingInLock.length;){const l=[...this.pendingInLock];await Promise.all(l),this.pendingInLock.splice(0,l.length)}return await s}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(n){this._debug("#_useSession","begin");try{const i=await this.__loadSession();return await n(i)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let n=null;const i=await kl(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",i),i!==null&&(this._isValidSession(i)?n=i:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!n)return{data:{session:null},error:null};const s=n.expires_at?n.expires_at*1e3-Date.now()<Hm:!1;if(this._debug("#__loadSession()",`session has${s?"":" not"} expired`,"expires_at",n.expires_at),!s){if(this.userStorage){const m=await kl(this.userStorage,this.storageKey+"-user");m?.user?n.user=m.user:n.user=Wm()}if(this.storage.isServer&&n.user&&!n.user.__isUserNotAvailableProxy){const m={value:this.suppressGetSessionWarning};n.user=jS(n.user,m),m.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:n},error:null}}const{data:l,error:d}=await this._callRefreshToken(n.refresh_token);return d?this._returnResult({data:{session:null},error:d}):this._returnResult({data:{session:l},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(n){if(n)return await this._getUser(n);await this.initializePromise;const i=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser());return i.data.user&&(this.suppressGetSessionWarning=!0),i}async _getUser(n){try{return n?await He(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:n,xform:Zo}):await this._useSession(async i=>{var s,l,d;const{data:m,error:p}=i;if(p)throw p;return!(!((s=m.session)===null||s===void 0)&&s.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new zr}:await He(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(d=(l=m.session)===null||l===void 0?void 0:l.access_token)!==null&&d!==void 0?d:void 0,xform:Zo})})}catch(i){if(Ne(i))return $m(i)&&(await this._removeSession(),await wa(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:i});throw i}}async updateUser(n,i={}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(n,i))}async _updateUser(n,i={}){try{return await this._useSession(async s=>{const{data:l,error:d}=s;if(d)throw d;if(!l.session)throw new zr;const m=l.session;let p=null,g=null;this.flowType==="pkce"&&n.email!=null&&([p,g]=await nu(this.storage,this.storageKey));const{data:v,error:y}=await He(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:i?.emailRedirectTo,body:Object.assign(Object.assign({},n),{code_challenge:p,code_challenge_method:g}),jwt:m.access_token,xform:Zo});if(y)throw y;return m.user=v.user,await this._saveSession(m),await this._notifyAllSubscribers("USER_UPDATED",m),this._returnResult({data:{user:m.user},error:null})})}catch(s){if(await wa(this.storage,`${this.storageKey}-code-verifier`),Ne(s))return this._returnResult({data:{user:null},error:s});throw s}}async setSession(n){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(n))}async _setSession(n){try{if(!n.access_token||!n.refresh_token)throw new zr;const i=Date.now()/1e3;let s=i,l=!0,d=null;const{payload:m}=pf(n.access_token);if(m.exp&&(s=m.exp,l=s<=i),l){const{data:p,error:g}=await this._callRefreshToken(n.refresh_token);if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!p)return{data:{user:null,session:null},error:null};d=p}else{const{data:p,error:g}=await this._getUser(n.access_token);if(g)return this._returnResult({data:{user:null,session:null},error:g});d={access_token:n.access_token,refresh_token:n.refresh_token,user:p.user,token_type:"bearer",expires_in:s-i,expires_at:s},await this._saveSession(d),await this._notifyAllSubscribers("SIGNED_IN",d)}return this._returnResult({data:{user:d.user,session:d},error:null})}catch(i){if(Ne(i))return this._returnResult({data:{session:null,user:null},error:i});throw i}}async refreshSession(n){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(n))}async _refreshSession(n){try{return await this._useSession(async i=>{var s;if(!n){const{data:m,error:p}=i;if(p)throw p;n=(s=m.session)!==null&&s!==void 0?s:void 0}if(!n?.refresh_token)throw new zr;const{data:l,error:d}=await this._callRefreshToken(n.refresh_token);return d?this._returnResult({data:{user:null,session:null},error:d}):l?this._returnResult({data:{user:l.user,session:l},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(i){if(Ne(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async _getSessionFromURL(n,i){try{if(!xa())throw new mf("No browser detected.");if(n.error||n.error_description||n.error_code)throw new mf(n.error_description||"Error in URL with unspecified error_description",{error:n.error||"unspecified_error",code:n.error_code||"unspecified_code"});switch(i){case"implicit":if(this.flowType==="pkce")throw new V0("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new mf("Not a valid implicit grant flow url.");break;default:}if(i==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!n.code)throw new V0("No code detected.");const{data:ae,error:F}=await this._exchangeCodeForSession(n.code);if(F)throw F;const Z=new URL(window.location.href);return Z.searchParams.delete("code"),window.history.replaceState(window.history.state,"",Z.toString()),{data:{session:ae.session,redirectType:null},error:null}}const{provider_token:s,provider_refresh_token:l,access_token:d,refresh_token:m,expires_in:p,expires_at:g,token_type:v}=n;if(!d||!p||!m||!v)throw new mf("No session defined in URL");const y=Math.round(Date.now()/1e3),E=parseInt(p);let M=y+E;g&&(M=parseInt(g));const A=M-y;A*1e3<=uu&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${A}s, should have been closer to ${E}s`);const D=M-E;y-D>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",D,M,y):y-D<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",D,M,y);const{data:B,error:H}=await this._getUser(d);if(H)throw H;const K={provider_token:s,provider_refresh_token:l,access_token:d,expires_in:E,expires_at:M,refresh_token:m,token_type:v,user:B.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:K,redirectType:n.type},error:null})}catch(s){if(Ne(s))return this._returnResult({data:{session:null,redirectType:null},error:s});throw s}}_isImplicitGrantCallback(n){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),n):!!(n.access_token||n.error_description)}async _isPKCECallback(n){const i=await kl(this.storage,`${this.storageKey}-code-verifier`);return!!(n.code&&i)}async signOut(n={scope:"global"}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(n))}async _signOut({scope:n}={scope:"global"}){return await this._useSession(async i=>{var s;const{data:l,error:d}=i;if(d&&!$m(d))return this._returnResult({error:d});const m=(s=l.session)===null||s===void 0?void 0:s.access_token;if(m){const{error:p}=await this.admin.signOut(m,n);if(p&&!(cS(p)&&(p.status===404||p.status===401||p.status===403)||$m(p)))return this._returnResult({error:p})}return n!=="others"&&(await this._removeSession(),await wa(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(n){const i=vS(),s={id:i,callback:n,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",i),this.stateChangeEmitters.delete(i)}};return this._debug("#onAuthStateChange()","registered callback with id",i),this.stateChangeEmitters.set(i,s),(async()=>(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(i)})))(),{data:{subscription:s}}}async _emitInitialSession(n){return await this._useSession(async i=>{var s,l;try{const{data:{session:d},error:m}=i;if(m)throw m;await((s=this.stateChangeEmitters.get(n))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",d)),this._debug("INITIAL_SESSION","callback id",n,"session",d)}catch(d){await((l=this.stateChangeEmitters.get(n))===null||l===void 0?void 0:l.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",n,"error",d),console.error(d)}})}async resetPasswordForEmail(n,i={}){let s=null,l=null;this.flowType==="pkce"&&([s,l]=await nu(this.storage,this.storageKey,!0));try{return await He(this.fetch,"POST",`${this.url}/recover`,{body:{email:n,code_challenge:s,code_challenge_method:l,gotrue_meta_security:{captcha_token:i.captchaToken}},headers:this.headers,redirectTo:i.redirectTo})}catch(d){if(await wa(this.storage,`${this.storageKey}-code-verifier`),Ne(d))return this._returnResult({data:null,error:d});throw d}}async getUserIdentities(){var n;try{const{data:i,error:s}=await this.getUser();if(s)throw s;return this._returnResult({data:{identities:(n=i.user.identities)!==null&&n!==void 0?n:[]},error:null})}catch(i){if(Ne(i))return this._returnResult({data:null,error:i});throw i}}async linkIdentity(n){return"token"in n?this.linkIdentityIdToken(n):this.linkIdentityOAuth(n)}async linkIdentityOAuth(n){var i;try{const{data:s,error:l}=await this._useSession(async d=>{var m,p,g,v,y;const{data:E,error:M}=d;if(M)throw M;const A=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,n.provider,{redirectTo:(m=n.options)===null||m===void 0?void 0:m.redirectTo,scopes:(p=n.options)===null||p===void 0?void 0:p.scopes,queryParams:(g=n.options)===null||g===void 0?void 0:g.queryParams,skipBrowserRedirect:!0});return await He(this.fetch,"GET",A,{headers:this.headers,jwt:(y=(v=E.session)===null||v===void 0?void 0:v.access_token)!==null&&y!==void 0?y:void 0})});if(l)throw l;return xa()&&!(!((i=n.options)===null||i===void 0)&&i.skipBrowserRedirect)&&window.location.assign(s?.url),this._returnResult({data:{provider:n.provider,url:s?.url},error:null})}catch(s){if(Ne(s))return this._returnResult({data:{provider:n.provider,url:null},error:s});throw s}}async linkIdentityIdToken(n){return await this._useSession(async i=>{var s;try{const{error:l,data:{session:d}}=i;if(l)throw l;const{options:m,provider:p,token:g,access_token:v,nonce:y}=n,E=await He(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(s=d?.access_token)!==null&&s!==void 0?s:void 0,body:{provider:p,id_token:g,access_token:v,nonce:y,link_identity:!0,gotrue_meta_security:{captcha_token:m?.captchaToken}},xform:Bi}),{data:M,error:A}=E;return A?this._returnResult({data:{user:null,session:null},error:A}):!M||!M.session||!M.user?this._returnResult({data:{user:null,session:null},error:new tu}):(M.session&&(await this._saveSession(M.session),await this._notifyAllSubscribers("USER_UPDATED",M.session)),this._returnResult({data:M,error:A}))}catch(l){if(await wa(this.storage,`${this.storageKey}-code-verifier`),Ne(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}})}async unlinkIdentity(n){try{return await this._useSession(async i=>{var s,l;const{data:d,error:m}=i;if(m)throw m;return await He(this.fetch,"DELETE",`${this.url}/user/identities/${n.identity_id}`,{headers:this.headers,jwt:(l=(s=d.session)===null||s===void 0?void 0:s.access_token)!==null&&l!==void 0?l:void 0})})}catch(i){if(Ne(i))return this._returnResult({data:null,error:i});throw i}}async _refreshAccessToken(n){const i=`#_refreshAccessToken(${n.substring(0,5)}...)`;this._debug(i,"begin");try{const s=Date.now();return await xS(async l=>(l>0&&await SS(200*Math.pow(2,l-1)),this._debug(i,"refreshing attempt",l),await He(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:n},headers:this.headers,xform:Bi})),(l,d)=>{const m=200*Math.pow(2,l);return d&&Fm(d)&&Date.now()+m-s<uu})}catch(s){if(this._debug(i,"error",s),Ne(s))return this._returnResult({data:{session:null,user:null},error:s});throw s}finally{this._debug(i,"end")}}_isValidSession(n){return typeof n=="object"&&n!==null&&"access_token"in n&&"refresh_token"in n&&"expires_at"in n}async _handleProviderSignIn(n,i){const s=await this._getUrlForProvider(`${this.url}/authorize`,n,{redirectTo:i.redirectTo,scopes:i.scopes,queryParams:i.queryParams});return this._debug("#_handleProviderSignIn()","provider",n,"options",i,"url",s),xa()&&!i.skipBrowserRedirect&&window.location.assign(s),{data:{provider:n,url:s},error:null}}async _recoverAndRefresh(){var n,i;const s="#_recoverAndRefresh()";this._debug(s,"begin");try{const l=await kl(this.storage,this.storageKey);if(l&&this.userStorage){let m=await kl(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!m&&(m={user:l.user},await du(this.userStorage,this.storageKey+"-user",m)),l.user=(n=m?.user)!==null&&n!==void 0?n:Wm()}else if(l&&!l.user&&!l.user){const m=await kl(this.storage,this.storageKey+"-user");m&&m?.user?(l.user=m.user,await wa(this.storage,this.storageKey+"-user"),await du(this.storage,this.storageKey,l)):l.user=Wm()}if(this._debug(s,"session from storage",l),!this._isValidSession(l)){this._debug(s,"session is not valid"),l!==null&&await this._removeSession();return}const d=((i=l.expires_at)!==null&&i!==void 0?i:1/0)*1e3-Date.now()<Hm;if(this._debug(s,`session has${d?"":" not"} expired with margin of ${Hm}s`),d){if(this.autoRefreshToken&&l.refresh_token){const{error:m}=await this._callRefreshToken(l.refresh_token);m&&(console.error(m),Fm(m)||(this._debug(s,"refresh failed with a non-retryable error, removing the session",m),await this._removeSession()))}}else if(l.user&&l.user.__isUserNotAvailableProxy===!0)try{const{data:m,error:p}=await this._getUser(l.access_token);!p&&m?.user?(l.user=m.user,await this._saveSession(l),await this._notifyAllSubscribers("SIGNED_IN",l)):this._debug(s,"could not get user data, skipping SIGNED_IN notification")}catch(m){console.error("Error getting user data:",m),this._debug(s,"error getting user data, skipping SIGNED_IN notification",m)}else await this._notifyAllSubscribers("SIGNED_IN",l)}catch(l){this._debug(s,"error",l),console.error(l);return}finally{this._debug(s,"end")}}async _callRefreshToken(n){var i,s;if(!n)throw new zr;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const l=`#_callRefreshToken(${n.substring(0,5)}...)`;this._debug(l,"begin");try{this.refreshingDeferred=new Pf;const{data:d,error:m}=await this._refreshAccessToken(n);if(m)throw m;if(!d.session)throw new zr;await this._saveSession(d.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",d.session);const p={data:d.session,error:null};return this.refreshingDeferred.resolve(p),p}catch(d){if(this._debug(l,"error",d),Ne(d)){const m={data:null,error:d};return Fm(d)||await this._removeSession(),(i=this.refreshingDeferred)===null||i===void 0||i.resolve(m),m}throw(s=this.refreshingDeferred)===null||s===void 0||s.reject(d),d}finally{this.refreshingDeferred=null,this._debug(l,"end")}}async _notifyAllSubscribers(n,i,s=!0){const l=`#_notifyAllSubscribers(${n})`;this._debug(l,"begin",i,`broadcast = ${s}`);try{this.broadcastChannel&&s&&this.broadcastChannel.postMessage({event:n,session:i});const d=[],m=Array.from(this.stateChangeEmitters.values()).map(async p=>{try{await p.callback(n,i)}catch(g){d.push(g)}});if(await Promise.all(m),d.length>0){for(let p=0;p<d.length;p+=1)console.error(d[p]);throw d[0]}}finally{this._debug(l,"end")}}async _saveSession(n){this._debug("#_saveSession()",n),this.suppressGetSessionWarning=!0,await wa(this.storage,`${this.storageKey}-code-verifier`);const i=Object.assign({},n),s=i.user&&i.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!s&&i.user&&await du(this.userStorage,this.storageKey+"-user",{user:i.user});const l=Object.assign({},i);delete l.user;const d=q0(l);await du(this.storage,this.storageKey,d)}else{const l=q0(i);await du(this.storage,this.storageKey,l)}}async _removeSession(){this._debug("#_removeSession()"),this.suppressGetSessionWarning=!1,await wa(this.storage,this.storageKey),await wa(this.storage,this.storageKey+"-code-verifier"),await wa(this.storage,this.storageKey+"-user"),this.userStorage&&await wa(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const n=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{n&&xa()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",n)}catch(i){console.error("removing visibilitychange callback failed",i)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const n=setInterval(()=>this._autoRefreshTokenTick(),uu);this.autoRefreshTicker=n,n&&typeof n=="object"&&typeof n.unref=="function"?n.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(n);const i=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=i,i&&typeof i=="object"&&typeof i.unref=="function"?i.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(i)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const n=this.autoRefreshTicker;this.autoRefreshTicker=null,n&&clearInterval(n);const i=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,i&&clearTimeout(i)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const n=Date.now();try{return await this._useSession(async i=>{const{data:{session:s}}=i;if(!s||!s.refresh_token||!s.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const l=Math.floor((s.expires_at*1e3-n)/uu);this._debug("#_autoRefreshTokenTick()",`access token expires in ${l} ticks, a tick lasts ${uu}ms, refresh threshold is ${xp} ticks`),l<=xp&&await this._callRefreshToken(s.refresh_token)})}catch(i){console.error("Auto refresh tick failed with error. This is likely a transient error.",i)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(n){if(n.isAcquireTimeout||n instanceof wv)this._debug("auto refresh token tick lock not available");else throw n}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!xa()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(n){this._debug("#visibilityChangedCallback","error",n)}},window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(n){console.error("_handleVisibilityChange",n)}}async _onVisibilityChanged(n){const i=`#_onVisibilityChanged(${n})`;this._debug(i,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),n||(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(i,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(n,i,s){const l=[`provider=${encodeURIComponent(i)}`];if(s?.redirectTo&&l.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),s?.scopes&&l.push(`scopes=${encodeURIComponent(s.scopes)}`),this.flowType==="pkce"){const[d,m]=await nu(this.storage,this.storageKey),p=new URLSearchParams({code_challenge:`${encodeURIComponent(d)}`,code_challenge_method:`${encodeURIComponent(m)}`});l.push(p.toString())}if(s?.queryParams){const d=new URLSearchParams(s.queryParams);l.push(d.toString())}return s?.skipBrowserRedirect&&l.push(`skip_http_redirect=${s.skipBrowserRedirect}`),`${n}?${l.join("&")}`}async _unenroll(n){try{return await this._useSession(async i=>{var s;const{data:l,error:d}=i;return d?this._returnResult({data:null,error:d}):await He(this.fetch,"DELETE",`${this.url}/factors/${n.factorId}`,{headers:this.headers,jwt:(s=l?.session)===null||s===void 0?void 0:s.access_token})})}catch(i){if(Ne(i))return this._returnResult({data:null,error:i});throw i}}async _enroll(n){try{return await this._useSession(async i=>{var s,l;const{data:d,error:m}=i;if(m)return this._returnResult({data:null,error:m});const p=Object.assign({friendly_name:n.friendlyName,factor_type:n.factorType},n.factorType==="phone"?{phone:n.phone}:n.factorType==="totp"?{issuer:n.issuer}:{}),{data:g,error:v}=await He(this.fetch,"POST",`${this.url}/factors`,{body:p,headers:this.headers,jwt:(s=d?.session)===null||s===void 0?void 0:s.access_token});return v?this._returnResult({data:null,error:v}):(n.factorType==="totp"&&g.type==="totp"&&(!((l=g?.totp)===null||l===void 0)&&l.qr_code)&&(g.totp.qr_code=`data:image/svg+xml;utf-8,${g.totp.qr_code}`),this._returnResult({data:g,error:null}))})}catch(i){if(Ne(i))return this._returnResult({data:null,error:i});throw i}}async _verify(n){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async i=>{var s;const{data:l,error:d}=i;if(d)return this._returnResult({data:null,error:d});const m=Object.assign({challenge_id:n.challengeId},"webauthn"in n?{webauthn:Object.assign(Object.assign({},n.webauthn),{credential_response:n.webauthn.type==="create"?JS(n.webauthn.credential_response):ZS(n.webauthn.credential_response)})}:{code:n.code}),{data:p,error:g}=await He(this.fetch,"POST",`${this.url}/factors/${n.factorId}/verify`,{body:m,headers:this.headers,jwt:(s=l?.session)===null||s===void 0?void 0:s.access_token});return g?this._returnResult({data:null,error:g}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+p.expires_in},p)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",p),this._returnResult({data:p,error:g}))})}catch(i){if(Ne(i))return this._returnResult({data:null,error:i});throw i}})}async _challenge(n){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async i=>{var s;const{data:l,error:d}=i;if(d)return this._returnResult({data:null,error:d});const m=await He(this.fetch,"POST",`${this.url}/factors/${n.factorId}/challenge`,{body:n,headers:this.headers,jwt:(s=l?.session)===null||s===void 0?void 0:s.access_token});if(m.error)return m;const{data:p}=m;if(p.type!=="webauthn")return{data:p,error:null};switch(p.webauthn.type){case"create":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:KS(p.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:QS(p.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(i){if(Ne(i))return this._returnResult({data:null,error:i});throw i}})}async _challengeAndVerify(n){const{data:i,error:s}=await this._challenge({factorId:n.factorId});return s?this._returnResult({data:null,error:s}):await this._verify({factorId:n.factorId,challengeId:i.id,code:n.code})}async _listFactors(){var n;const{data:{user:i},error:s}=await this.getUser();if(s)return{data:null,error:s};const l={all:[],phone:[],totp:[],webauthn:[]};for(const d of(n=i?.factors)!==null&&n!==void 0?n:[])l.all.push(d),d.status==="verified"&&l[d.factor_type].push(d);return{data:l,error:null}}async _getAuthenticatorAssuranceLevel(n){var i,s,l,d;if(n)try{const{payload:A}=pf(n);let D=null;A.aal&&(D=A.aal);let B=D;const{data:{user:H},error:K}=await this.getUser(n);if(K)return this._returnResult({data:null,error:K});((s=(i=H?.factors)===null||i===void 0?void 0:i.filter(Z=>Z.status==="verified"))!==null&&s!==void 0?s:[]).length>0&&(B="aal2");const F=A.amr||[];return{data:{currentLevel:D,nextLevel:B,currentAuthenticationMethods:F},error:null}}catch(A){if(Ne(A))return this._returnResult({data:null,error:A});throw A}const{data:{session:m},error:p}=await this.getSession();if(p)return this._returnResult({data:null,error:p});if(!m)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:g}=pf(m.access_token);let v=null;g.aal&&(v=g.aal);let y=v;((d=(l=m.user.factors)===null||l===void 0?void 0:l.filter(A=>A.status==="verified"))!==null&&d!==void 0?d:[]).length>0&&(y="aal2");const M=g.amr||[];return{data:{currentLevel:v,nextLevel:y,currentAuthenticationMethods:M},error:null}}async _getAuthorizationDetails(n){try{return await this._useSession(async i=>{const{data:{session:s},error:l}=i;return l?this._returnResult({data:null,error:l}):s?await He(this.fetch,"GET",`${this.url}/oauth/authorizations/${n}`,{headers:this.headers,jwt:s.access_token,xform:d=>({data:d,error:null})}):this._returnResult({data:null,error:new zr})})}catch(i){if(Ne(i))return this._returnResult({data:null,error:i});throw i}}async _approveAuthorization(n,i){try{return await this._useSession(async s=>{const{data:{session:l},error:d}=s;if(d)return this._returnResult({data:null,error:d});if(!l)return this._returnResult({data:null,error:new zr});const m=await He(this.fetch,"POST",`${this.url}/oauth/authorizations/${n}/consent`,{headers:this.headers,jwt:l.access_token,body:{action:"approve"},xform:p=>({data:p,error:null})});return m.data&&m.data.redirect_url&&xa()&&!i?.skipBrowserRedirect&&window.location.assign(m.data.redirect_url),m})}catch(s){if(Ne(s))return this._returnResult({data:null,error:s});throw s}}async _denyAuthorization(n,i){try{return await this._useSession(async s=>{const{data:{session:l},error:d}=s;if(d)return this._returnResult({data:null,error:d});if(!l)return this._returnResult({data:null,error:new zr});const m=await He(this.fetch,"POST",`${this.url}/oauth/authorizations/${n}/consent`,{headers:this.headers,jwt:l.access_token,body:{action:"deny"},xform:p=>({data:p,error:null})});return m.data&&m.data.redirect_url&&xa()&&!i?.skipBrowserRedirect&&window.location.assign(m.data.redirect_url),m})}catch(s){if(Ne(s))return this._returnResult({data:null,error:s});throw s}}async _listOAuthGrants(){try{return await this._useSession(async n=>{const{data:{session:i},error:s}=n;return s?this._returnResult({data:null,error:s}):i?await He(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:i.access_token,xform:l=>({data:l,error:null})}):this._returnResult({data:null,error:new zr})})}catch(n){if(Ne(n))return this._returnResult({data:null,error:n});throw n}}async _revokeOAuthGrant(n){try{return await this._useSession(async i=>{const{data:{session:s},error:l}=i;return l?this._returnResult({data:null,error:l}):s?(await He(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:s.access_token,query:{client_id:n.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new zr})})}catch(i){if(Ne(i))return this._returnResult({data:null,error:i});throw i}}async fetchJwk(n,i={keys:[]}){let s=i.keys.find(p=>p.kid===n);if(s)return s;const l=Date.now();if(s=this.jwks.keys.find(p=>p.kid===n),s&&this.jwks_cached_at+oS>l)return s;const{data:d,error:m}=await He(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(m)throw m;return!d.keys||d.keys.length===0||(this.jwks=d,this.jwks_cached_at=l,s=d.keys.find(p=>p.kid===n),!s)?null:s}async getClaims(n,i={}){try{let s=n;if(!s){const{data:A,error:D}=await this.getSession();if(D||!A.session)return this._returnResult({data:null,error:D});s=A.session.access_token}const{header:l,payload:d,signature:m,raw:{header:p,payload:g}}=pf(s);i?.allowExpired||RS(d.exp);const v=!l.alg||l.alg.startsWith("HS")||!l.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(l.kid,i?.keys?{keys:i.keys}:i?.jwks);if(!v){const{error:A}=await this.getUser(s);if(A)throw A;return{data:{claims:d,header:l,signature:m},error:null}}const y=NS(l.alg),E=await crypto.subtle.importKey("jwk",v,y,!0,["verify"]);if(!await crypto.subtle.verify(y,E,m,gS(`${p}.${g}`)))throw new Cp("Invalid JWT signature");return{data:{claims:d,header:l,signature:m},error:null}}catch(s){if(Ne(s))return this._returnResult({data:null,error:s});throw s}}}Zd.nextInstanceID={};const l1=Zd,c1="2.98.0";let Gd="";typeof Deno<"u"?Gd="deno":typeof document<"u"?Gd="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Gd="react-native":Gd="node";const u1={"X-Client-Info":`supabase-js-${Gd}/${c1}`},d1={headers:u1},h1={schema:"public"},f1={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},m1={};function eh(r){"@babel/helpers - typeof";return eh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},eh(r)}function p1(r,n){if(eh(r)!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,n);if(eh(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function g1(r){var n=p1(r,"string");return eh(n)=="symbol"?n:n+""}function y1(r,n,i){return(n=g1(n))in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,r}function ey(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function kn(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?ey(Object(i),!0).forEach(function(s){y1(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):ey(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}const v1=r=>r?(...n)=>r(...n):(...n)=>fetch(...n),b1=()=>Headers,w1=(r,n,i)=>{const s=v1(i),l=b1();return async(d,m)=>{var p;const g=(p=await n())!==null&&p!==void 0?p:r;let v=new l(m?.headers);return v.has("apikey")||v.set("apikey",r),v.has("Authorization")||v.set("Authorization",`Bearer ${g}`),s(d,kn(kn({},m),{},{headers:v}))}};function S1(r){return r.endsWith("/")?r:r+"/"}function x1(r,n){var i,s;const{db:l,auth:d,realtime:m,global:p}=r,{db:g,auth:v,realtime:y,global:E}=n,M={db:kn(kn({},g),l),auth:kn(kn({},v),d),realtime:kn(kn({},y),m),storage:{},global:kn(kn(kn({},E),p),{},{headers:kn(kn({},(i=E?.headers)!==null&&i!==void 0?i:{}),(s=p?.headers)!==null&&s!==void 0?s:{})}),accessToken:async()=>""};return r.accessToken?M.accessToken=r.accessToken:delete M.accessToken,M}function _1(r){const n=r?.trim();if(!n)throw new Error("supabaseUrl is required.");if(!n.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(S1(n))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var E1=class extends l1{constructor(r){super(r)}},C1=class{constructor(r,n,i){var s,l;this.supabaseUrl=r,this.supabaseKey=n;const d=_1(r);if(!n)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",d),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",d),this.storageUrl=new URL("storage/v1",d),this.functionsUrl=new URL("functions/v1",d);const m=`sb-${d.hostname.split(".")[0]}-auth-token`,p={db:h1,realtime:m1,auth:kn(kn({},f1),{},{storageKey:m}),global:d1},g=x1(i??{},p);if(this.storageKey=(s=g.auth.storageKey)!==null&&s!==void 0?s:"",this.headers=(l=g.global.headers)!==null&&l!==void 0?l:{},g.accessToken)this.accessToken=g.accessToken,this.auth=new Proxy({},{get:(y,E)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(E)} is not possible`)}});else{var v;this.auth=this._initSupabaseAuthClient((v=g.auth)!==null&&v!==void 0?v:{},this.headers,g.global.fetch)}this.fetch=w1(n,this._getAccessToken.bind(this),g.global.fetch),this.realtime=this._initRealtimeClient(kn({headers:this.headers,accessToken:this._getAccessToken.bind(this)},g.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(y=>this.realtime.setAuth(y)).catch(y=>console.warn("Failed to set initial Realtime auth token:",y)),this.rest=new cw(new URL("rest/v1",d).href,{headers:this.headers,schema:g.db.schema,fetch:this.fetch,timeout:g.db.timeout,urlLengthLimit:g.db.urlLengthLimit}),this.storage=new nS(this.storageUrl.href,this.headers,this.fetch,i?.storage),g.accessToken||this._listenForAuthEvents()}get functions(){return new tw(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(r){return this.rest.from(r)}schema(r){return this.rest.schema(r)}rpc(r,n={},i={head:!1,get:!1,count:void 0}){return this.rest.rpc(r,n,i)}channel(r,n={config:{}}){return this.realtime.channel(r,n)}getChannels(){return this.realtime.getChannels()}removeChannel(r){return this.realtime.removeChannel(r)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var r=this,n,i;if(r.accessToken)return await r.accessToken();const{data:s}=await r.auth.getSession();return(n=(i=s.session)===null||i===void 0?void 0:i.access_token)!==null&&n!==void 0?n:r.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:r,persistSession:n,detectSessionInUrl:i,storage:s,userStorage:l,storageKey:d,flowType:m,lock:p,debug:g,throwOnError:v},y,E){const M={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new E1({url:this.authUrl.href,headers:kn(kn({},M),y),storageKey:d,autoRefreshToken:r,persistSession:n,detectSessionInUrl:i,storage:s,userStorage:l,flowType:m,lock:p,debug:g,throwOnError:v,fetch:E,hasCustomAuthorizationHeader:Object.keys(this.headers).some(A=>A.toLowerCase()==="authorization")})}_initRealtimeClient(r){return new Tw(this.realtimeUrl.href,kn(kn({},r),{},{params:kn(kn({},{apikey:this.supabaseKey}),r?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,n)=>{this._handleTokenChanged(r,"CLIENT",n?.access_token)})}_handleTokenChanged(r,n,i){(r==="TOKEN_REFRESHED"||r==="SIGNED_IN")&&this.changedAccessToken!==i?(this.changedAccessToken=i,this.realtime.setAuth(i)):r==="SIGNED_OUT"&&(this.realtime.setAuth(),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const _v=(r,n,i)=>new C1(r,n,i);function T1(){if(typeof window<"u")return!1;const r=globalThis.process;if(!r)return!1;const n=r.version;if(n==null)return!1;const i=n.match(/^v(\d+)\./);return i?parseInt(i[1],10)<=18:!1}T1()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const Ev=`(function initAsciiWebglOverlayShared(globalScope) {
  const WEBGL_OVERLAY_TYPES = [
    'lightning-rails',
    'atmospheric-folds',
    'network-dome',
    'ambient-starfield',
    'terrain-mesh',
    'topology-dots',
    'radial-burst',
  ];
  const WEBGL_DEFAULT_MOUSE_X = -1000;
  const WEBGL_DEFAULT_MOUSE_Y = -1000;
  const WEBGL_OVERLAY_VERTEX_SHADER = \`
attribute vec2 aVertexPosition;
void main() {
  gl_Position = vec4(aVertexPosition, 0.0, 1.0);
}
\`;
  const WEBGL_OVERLAY_FRAGMENT_SHADER = \`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_mouseActive;
uniform float u_lineSpread;
uniform float u_intensity;
uniform float u_lightning;
uniform float u_pulse;
uniform float u_mouseInfluence;
uniform float u_grain;
uniform vec3 u_tint;

float hash(float n) {
  return fract(sin(n) * 753.5453123);
}

float noise(float x) {
  float i = floor(x);
  float f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(hash(i), hash(i + 1.0), f);
}

float lightning(vec2 uv, vec2 a, vec2 b, float t) {
  vec2 ab = b - a;
  float len = length(ab);
  if (len < 0.01) return 0.0;

  vec2 dir = ab / len;
  vec2 pa = uv - a;
  float h = clamp(dot(pa, dir) / len, 0.0, 1.0);
  float dist = length(pa - dir * (h * len));
  float env = sin(h * 3.14159265);

  float offset = (noise(h * 15.0 - t * 20.0) - 0.5) * 0.1 * env;
  offset += (noise(h * 40.0 + t * 30.0) - 0.5) * 0.03 * env;
  float d = abs(dist + offset);

  return (0.0003 / (d + 0.0003) + 0.00002 / (d * d + 0.00002)) * env;
}

float pulseBand(float distanceToRail, float y, float t, float speed, float offset, float strength) {
  float pulseY = fract(t * speed + offset) * 4.0 - 2.0;
  return smoothstep(0.4, 0.0, abs(y - pulseY)) * strength / (distanceToRail + 0.002);
}

float wave(float y, float t, float offset, float amplitude) {
  return sin(y * 10.0 + t * 2.0 + offset) * amplitude;
}

void main() {
  vec2 safeResolution = max(u_resolution.xy, vec2(1.0));
  vec2 uv = gl_FragCoord.xy / safeResolution;
  uv = uv * 2.0 - 1.0;
  uv.x *= safeResolution.x / safeResolution.y;

  vec2 mouseUV = u_mouse / safeResolution;
  mouseUV = mouseUV * 2.0 - 1.0;
  mouseUV.x *= safeResolution.x / safeResolution.y;

  float spreadMix = clamp((u_lineSpread - 0.1) / 0.45, 0.0, 1.0);
  float spread = mix(0.12, 0.2, spreadMix);
  float pulseSpeed = max(0.1, u_pulse);
  float intensity = clamp(u_intensity, 0.0, 1.0);
  float lightningAmount = clamp(u_lightning, 0.0, 1.8);
  float mouseInfluence = clamp(u_mouseInfluence, 0.0, 2.0);
  float grainAmount = clamp(u_grain, 0.0, 0.12);
  float t = u_time * 0.5;
  float outerOffset = spread + mix(0.016, 0.028, spreadMix);
  float waveAmplitude = (0.004 + lightningAmount * 0.0015) * (0.85 + spreadMix * 0.25);

  float d1 = abs(uv.x - (-spread));
  float d2 = abs(uv.x - 0.0);
  float d3 = abs(uv.x - spread);

  float baseIntensity = mix(0.003, 0.0065, intensity);
  float glow = baseIntensity / (d1 + 0.002);
  glow += baseIntensity / (d2 + 0.002);
  glow += baseIntensity / (d3 + 0.002);

  glow += pulseBand(d1, uv.y, t, 0.2 * pulseSpeed, 0.0, 0.018 + intensity * 0.016) * 1.2;
  glow += pulseBand(d2, uv.y, t, 0.25 * pulseSpeed, 0.3, 0.018 + intensity * 0.016) * 1.2;
  glow += pulseBand(d3, uv.y, t, 0.15 * pulseSpeed, 0.7, 0.018 + intensity * 0.016) * 1.2;

  float wD1a = abs(uv.x - (-outerOffset + wave(uv.y, t, 0.0, waveAmplitude)));
  float wD1b = abs(uv.x - (-(spread - 0.02) + wave(uv.y, t, 1.0, waveAmplitude)));
  float wD2a = abs(uv.x - (-0.02 + wave(uv.y, t, 2.0, waveAmplitude)));
  float wD2b = abs(uv.x - ( 0.02 + wave(uv.y, t, 3.0, waveAmplitude)));
  float wD3a = abs(uv.x - ((spread - 0.02) + wave(uv.y, t, 4.0, waveAmplitude)));
  float wD3b = abs(uv.x - (outerOffset + wave(uv.y, t, 5.0, waveAmplitude)));

  float wavePulseStrength = (0.003 + intensity * 0.005) * (0.35 + lightningAmount * 0.2);
  glow += pulseBand(wD1a, uv.y, t, 0.3 * pulseSpeed, 0.1, wavePulseStrength);
  glow += pulseBand(wD1b, uv.y, t, 0.22 * pulseSpeed, 0.6, wavePulseStrength);
  glow += pulseBand(wD2a, uv.y, t, 0.28 * pulseSpeed, 0.2, wavePulseStrength);
  glow += pulseBand(wD2b, uv.y, t, 0.32 * pulseSpeed, 0.8, wavePulseStrength);
  glow += pulseBand(wD3a, uv.y, t, 0.35 * pulseSpeed, 0.4, wavePulseStrength);
  glow += pulseBand(wD3b, uv.y, t, 0.25 * pulseSpeed, 0.9, wavePulseStrength);

  vec2 p1 = vec2(-spread, mouseUV.y);
  vec2 p2 = vec2(0.0, mouseUV.y);
  vec2 p3 = vec2(spread, mouseUV.y);

  float flickerGate = step(0.15, noise(t * (40.0 + pulseSpeed * 12.0)));
  float flicker = flickerGate * (noise(t * (100.0 + pulseSpeed * 20.0)) * 0.7 + 0.3);
  float mouseActivation = clamp(u_mouseActive, 0.0, 1.0) * mouseInfluence;
  float mouseRadius = mix(1.4, 2.7, clamp(mouseInfluence * 0.5, 0.0, 1.0));

  glow += lightning(uv, p1, mouseUV, t) * smoothstep(mouseRadius, 0.0, length(mouseUV - p1)) * mouseActivation * flicker * lightningAmount;
  glow += lightning(uv, p2, mouseUV, t + 10.0) * smoothstep(mouseRadius, 0.0, length(mouseUV - p2)) * mouseActivation * flicker * lightningAmount;
  glow += lightning(uv, p3, mouseUV, t + 20.0) * smoothstep(mouseRadius, 0.0, length(mouseUV - p3)) * mouseActivation * flicker * lightningAmount;

  float distToCenter = length(uv);
  glow += (0.014 + intensity * 0.03) / (distToCenter + 0.02);

  vec3 tintColor = max(u_tint, vec3(0.06));
  vec3 railColor = mix(tintColor * 0.55, tintColor * 1.15, 0.72);
  vec3 highlightColor = mix(tintColor, vec3(1.0), 0.2 + intensity * 0.18);
  float shimmer = 0.8 + 0.2 * sin(t * (1.5 + pulseSpeed * 0.15) - distToCenter * 5.0);
  float falloff = 1.0 - smoothstep(0.3, 2.2, distToCenter);

  vec3 finalColor = railColor * glow * shimmer;
  finalColor += highlightColor * pow(max(glow, 0.0), 1.28) * (0.05 + lightningAmount * 0.02);
  finalColor *= falloff;
  float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  finalColor += (n - 0.5) * grainAmount * 0.32;
  finalColor = max(finalColor, vec3(0.0));

  float luminance = dot(finalColor, vec3(0.2126, 0.7152, 0.0722));
  float alpha = clamp(luminance * (1.2 + intensity * 1.4), 0.0, 0.98);
  gl_FragColor = vec4(finalColor, alpha);
}
\`;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function lerpChannel(from, to, amount) {
    return clamp(Math.round(from + (to - from) * amount), 0, 255);
  }

  function parseHexColor(value, fallback) {
    const fallbackColor = fallback || { r: 153, g: 187, b: 255 };
    if (typeof value !== 'string') return fallbackColor;
    const trimmed = value.trim();
    const match = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(trimmed);
    if (!match) return fallbackColor;
    const hex =
      match[1].length === 3
        ? match[1].split('').map((char) => char + char).join('')
        : match[1];
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };
  }

  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function createWebglProgram(gl, vertexSource, fragmentSource) {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) {
      if (vertexShader) gl.deleteShader(vertexShader);
      if (fragmentShader) gl.deleteShader(fragmentShader);
      return null;
    }
    const program = gl.createProgram();
    if (!program) {
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return null;
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }

  function rgbaColor(color, alpha) {
    return 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + clamp(alpha, 0, 1) + ')';
  }

  function mixColor(colorA, colorB, amount) {
    return {
      r: lerpChannel(colorA.r, colorB.r, amount),
      g: lerpChannel(colorA.g, colorB.g, amount),
      b: lerpChannel(colorA.b, colorB.b, amount),
    };
  }

  function scaleColor(color, factor) {
    return {
      r: clamp(Math.round(color.r * factor), 0, 255),
      g: clamp(Math.round(color.g * factor), 0, 255),
      b: clamp(Math.round(color.b * factor), 0, 255),
    };
  }

  function getWebglOverlayType(value) {
    switch (String(value || '').trim()) {
      case 'atmospheric-folds':
      case 'network-dome':
      case 'ambient-starfield':
      case 'terrain-mesh':
      case 'topology-dots':
      case 'radial-burst':
        return String(value).trim();
      default:
        return 'lightning-rails';
    }
  }

  function isCanvasOverlayType(overlayType) {
    return getWebglOverlayType(overlayType) !== 'lightning-rails';
  }

  function getWebglOverlayFragmentSource() {
    return WEBGL_OVERLAY_FRAGMENT_SHADER;
  }

  function getWebglOverlayUniformValues(settings) {
    const tint = parseHexColor(settings?.webglOverlayColor, { r: 153, g: 187, b: 255 });
    return {
      overlayType: getWebglOverlayType(settings?.webglOverlayType),
      opacity: clamp(Number(settings?.webglOverlayOpacity ?? 1) || 0, 0, 1),
      intensity: clamp(Number(settings?.webglOverlayIntensity ?? 0.45) || 0, 0, 1),
      lineSpread: clamp(Number(settings?.webglOverlayLineSpread ?? 0.25) || 0, 0.1, 0.55),
      pulseSpeed: clamp(Number(settings?.webglOverlayPulseSpeed ?? 1) || 0, 0.2, 4),
      lightning: 1,
      mouseInfluence: clamp(Number(settings?.webglOverlayMouseInfluence ?? 1) || 0, 0, 2),
      grain: clamp(Number(settings?.webglOverlayGrain ?? 0.02) || 0, 0, 0.12),
      tint,
      tintR: clamp(tint.r / 255, 0, 1),
      tintG: clamp(tint.g / 255, 0, 1),
      tintB: clamp(tint.b / 255, 0, 1),
    };
  }

  function ensureWebglOverlayResources(gl, fragmentSource = WEBGL_OVERLAY_FRAGMENT_SHADER) {
    if (!gl) return null;
    const program = createWebglProgram(gl, WEBGL_OVERLAY_VERTEX_SHADER, fragmentSource);
    if (!program) return null;
    const attribLocation = gl.getAttribLocation(program, 'aVertexPosition');
    if (attribLocation < 0) {
      gl.deleteProgram(program);
      return null;
    }
    const buffer = gl.createBuffer();
    if (!buffer) {
      gl.deleteProgram(program);
      return null;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), gl.STATIC_DRAW);
    return {
      program,
      attribLocation,
      buffer,
      uniforms: {
        resolution: gl.getUniformLocation(program, 'u_resolution'),
        time: gl.getUniformLocation(program, 'u_time'),
        mouse: gl.getUniformLocation(program, 'u_mouse'),
        mouseActive: gl.getUniformLocation(program, 'u_mouseActive'),
        lineSpread: gl.getUniformLocation(program, 'u_lineSpread'),
        intensity: gl.getUniformLocation(program, 'u_intensity'),
        lightning: gl.getUniformLocation(program, 'u_lightning'),
        pulse: gl.getUniformLocation(program, 'u_pulse'),
        mouseInfluence: gl.getUniformLocation(program, 'u_mouseInfluence'),
        grain: gl.getUniformLocation(program, 'u_grain'),
        tint: gl.getUniformLocation(program, 'u_tint'),
      },
    };
  }

  function disposeWebglOverlayResources(gl, resources) {
    if (!gl || !resources) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.useProgram(null);
    if (resources.buffer) gl.deleteBuffer(resources.buffer);
    if (resources.program) gl.deleteProgram(resources.program);
  }

  function renderShaderOverlayFrame(gl, resources, viewportWidth, viewportHeight, now, startTime, mouseState, uniformValues) {
    if (!gl || !resources || viewportWidth <= 0 || viewportHeight <= 0) return;
    gl.viewport(0, 0, viewportWidth, viewportHeight);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(resources.program);
    gl.bindBuffer(gl.ARRAY_BUFFER, resources.buffer);
    gl.enableVertexAttribArray(resources.attribLocation);
    gl.vertexAttribPointer(resources.attribLocation, 2, gl.FLOAT, false, 0, 0);
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    gl.uniform2f(resources.uniforms.resolution, viewportWidth, viewportHeight);
    gl.uniform1f(resources.uniforms.time, Math.max(0, now - startTime) * 0.001);
    gl.uniform2f(
      resources.uniforms.mouse,
      mouseState?.x ?? WEBGL_DEFAULT_MOUSE_X,
      viewportHeight - (mouseState?.y ?? WEBGL_DEFAULT_MOUSE_Y)
    );
    gl.uniform1f(resources.uniforms.mouseActive, clamp(mouseState?.active ?? 0, 0, 1));
    gl.uniform1f(resources.uniforms.lineSpread, uniformValues.lineSpread);
    gl.uniform1f(resources.uniforms.intensity, uniformValues.intensity);
    gl.uniform1f(resources.uniforms.lightning, uniformValues.lightning);
    gl.uniform1f(resources.uniforms.pulse, uniformValues.pulseSpeed);
    gl.uniform1f(resources.uniforms.mouseInfluence, uniformValues.mouseInfluence);
    gl.uniform1f(resources.uniforms.grain, uniformValues.grain);
    gl.uniform3f(resources.uniforms.tint, uniformValues.tintR, uniformValues.tintG, uniformValues.tintB);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  function updateScenePointer(state, mouseState, width, height, smoothing) {
    if (!state) return;
    const hasMouse =
      Number.isFinite(mouseState?.x) &&
      Number.isFinite(mouseState?.y) &&
      mouseState.x > WEBGL_DEFAULT_MOUSE_X * 0.5 &&
      mouseState.y > WEBGL_DEFAULT_MOUSE_Y * 0.5;
    const mouseNormX = hasMouse ? (mouseState.x / Math.max(width, 1) - 0.5) * 2 : 0;
    const mouseNormY = hasMouse ? (mouseState.y / Math.max(height, 1) - 0.5) * 2 : 0;
    const amount = clamp(Number(smoothing) || 0.04, 0.01, 0.2);
    state.pointerX += (mouseNormX - state.pointerX) * amount;
    state.pointerY += (mouseNormY - state.pointerY) * amount;
  }

  function drawGlow(ctx, x, y, radius, color, alpha, verticalScale) {
    const scaleY = Math.max(0.2, Number(verticalScale) || 1);
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(1, scaleY);
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
    gradient.addColorStop(0, rgbaColor(color, alpha));
    gradient.addColorStop(0.45, rgbaColor(scaleColor(color, 0.78), alpha * 0.42));
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawGrain(ctx, width, height, nowSeconds, amount, color) {
    if (amount <= 0.002) return;
    const count = Math.round(24 + amount * 220);
    ctx.save();
    ctx.globalCompositeOperation = 'overlay';
    ctx.fillStyle = rgbaColor(color, 0.018 + amount * 0.08);
    for (let index = 0; index < count; index += 1) {
      const seed = index * 12.713 + nowSeconds * 2.3;
      const gx = ((Math.sin(seed) * 43758.5453) % 1 + 1) % 1;
      const gy = ((Math.sin(seed * 1.67) * 24634.6345) % 1 + 1) % 1;
      ctx.fillRect(Math.floor(gx * width), Math.floor(gy * height), 1, 1);
    }
    ctx.restore();
  }

  function createCanvasOverlaySceneState(overlayType) {
    const normalizedType = getWebglOverlayType(overlayType);
    if (normalizedType === 'network-dome') {
      return {
        type: normalizedType,
        value: {
          pointerX: 0,
          pointerY: 0,
          lines: Array.from({ length: 72 }, (_, index) => ({
            offset: index / 72,
            speed: 0.35 + Math.random() * 0.65,
            particles: [Math.random(), Math.random(), Math.random()],
          })),
        },
      };
    }
    if (normalizedType === 'ambient-starfield') {
      return {
        type: normalizedType,
        value: {
          pointerX: 0,
          pointerY: 0,
          stars: Array.from({ length: 520 }, () => ({
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
            z: Math.random(),
            twinkle: Math.random() * Math.PI * 2,
            speed: 0.45 + Math.random() * 0.8,
            size: 0.6 + Math.random() * 1.25,
          })),
        },
      };
    }
    if (normalizedType === 'terrain-mesh') {
      return { type: normalizedType, value: { pointerX: 0, pointerY: 0 } };
    }
    if (normalizedType === 'topology-dots') {
      return { type: normalizedType, value: { pointerX: 0, pointerY: 0 } };
    }
    if (normalizedType === 'radial-burst') {
      return {
        type: normalizedType,
        value: {
          pointerX: 0,
          pointerY: 0,
          lines: Array.from({ length: 240 }, () => ({
            angle: Math.random() * Math.PI * 2,
            speed: 0.00022 + Math.random() * 0.0005,
            lengthOffset: Math.random(),
            colorOffset: Math.random(),
            widthOffset: Math.random(),
            alphaOffset: Math.random(),
          })),
        },
      };
    }
    return { type: normalizedType, value: { pointerX: 0, pointerY: 0 } };
  }

  function renderLightningRailsCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, sceneState) {
    const timeSeconds = Math.max(0, now - startTime) * 0.001 * (0.75 + uniformValues.pulseSpeed * 0.55);
    const state = sceneState || { pointerX: 0, pointerY: 0 };
    updateScenePointer(state, mouseState, width, height, 0.05);
    const primaryColor = mixColor(uniformValues.tint, { r: 255, g: 255, b: 255 }, 0.14);
    const accentColor = mixColor(uniformValues.tint, { r: 255, g: 210, b: 255 }, 0.18);
    const spread = 0.14 + uniformValues.lineSpread * 0.22;
    const rails = [width * (0.5 - spread), width * 0.5, width * (0.5 + spread)];
    const centerX = width * 0.5 + state.pointerX * width * 0.04 * uniformValues.mouseInfluence;
    const centerY = height * 0.5 + state.pointerY * height * 0.03 * uniformValues.mouseInfluence;

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    drawGlow(ctx, centerX, centerY, Math.max(width, height) * 0.32, uniformValues.tint, 0.05 + uniformValues.intensity * 0.06, 1);

    for (let railIndex = 0; railIndex < rails.length; railIndex += 1) {
      const railX = rails[railIndex];
      const railGradient = ctx.createLinearGradient(railX, 0, railX, height);
      railGradient.addColorStop(0, rgbaColor(primaryColor, 0));
      railGradient.addColorStop(0.15, rgbaColor(primaryColor, 0.12 + uniformValues.intensity * 0.12));
      railGradient.addColorStop(0.85, rgbaColor(primaryColor, 0.14 + uniformValues.intensity * 0.14));
      railGradient.addColorStop(1, rgbaColor(primaryColor, 0));
      ctx.strokeStyle = railGradient;
      ctx.lineWidth = 1.1 + uniformValues.intensity * 1.4;
      ctx.beginPath();
      ctx.moveTo(railX, 0);
      ctx.lineTo(railX, height);
      ctx.stroke();

      for (let pulseIndex = 0; pulseIndex < 2; pulseIndex += 1) {
        const offset = railIndex * 0.33 + pulseIndex * 0.47;
        const pulseY = (((timeSeconds * (0.18 + uniformValues.pulseSpeed * 0.12) + offset) % 1) * 1.2 - 0.1) * height;
        drawGlow(
          ctx,
          railX + Math.sin(timeSeconds * 2.2 + offset * 7) * width * 0.01,
          pulseY,
          14 + uniformValues.intensity * 20,
          accentColor,
          0.12 + uniformValues.intensity * 0.12,
          1.35
        );
      }

      if (Number.isFinite(mouseState?.x) && Number.isFinite(mouseState?.y) && mouseState.x > WEBGL_DEFAULT_MOUSE_X * 0.5) {
        const anchorY = clamp(mouseState.y, 0, height);
        const segments = 11;
        ctx.strokeStyle = rgbaColor(accentColor, 0.08 + uniformValues.intensity * 0.14);
        ctx.lineWidth = 1 + uniformValues.intensity * 0.9;
        ctx.beginPath();
        ctx.moveTo(railX, anchorY);
        for (let segmentIndex = 1; segmentIndex <= segments; segmentIndex += 1) {
          const progress = segmentIndex / segments;
          const px = railX + (mouseState.x - railX) * progress;
          const wave = Math.sin(progress * Math.PI * 4 + timeSeconds * 8 + railIndex) * height * 0.012;
          const py = anchorY + (mouseState.y - anchorY) * progress + wave;
          ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
    }

    drawGrain(ctx, width, height, timeSeconds, uniformValues.grain, accentColor);
    ctx.restore();
  }

  function renderAtmosphericFoldsCanvas(ctx, width, height, now, startTime, uniformValues) {
    const time = Math.max(0, now - startTime) * 0.001 * 0.09 * uniformValues.pulseSpeed;
    const folds = 28;
    const foldWidth = (width / folds) * (2.4 + uniformValues.lineSpread * 1.8);
    const driftAmplitude = width * (0.03 + uniformValues.lineSpread * 0.03);
    const midColor = mixColor({ r: 14, g: 60, b: 120 }, uniformValues.tint, 0.58);
    const cyanColor = mixColor({ r: 0, g: 160, b: 240 }, uniformValues.tint, 0.68);
    const highlightColor = mixColor({ r: 180, g: 240, b: 255 }, uniformValues.tint, 0.42);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    for (let index = 0; index < folds; index += 1) {
      const normalizedX = index / Math.max(folds - 1, 1);
      const xPos = normalizedX * width + Math.sin(time * 2 + index) * driftAmplitude;
      const baseIntensity = Math.sin(normalizedX * Math.PI) * 0.6 + 0.4;
      const waveIntensity = (Math.sin(time * 3 + index * 0.4) + 1) * 0.5;
      const finalIntensity = baseIntensity * waveIntensity * (0.62 + uniformValues.intensity * 0.9);
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, rgbaColor(midColor, 0));
      gradient.addColorStop(0.4, rgbaColor(midColor, finalIntensity * 0.18));
      gradient.addColorStop(0.72, rgbaColor(cyanColor, finalIntensity * 0.3));
      gradient.addColorStop(1, rgbaColor(highlightColor, finalIntensity * 0.52));
      ctx.fillStyle = gradient;
      ctx.fillRect(xPos - foldWidth * 0.5, 0, foldWidth, height);
    }
    drawGlow(ctx, width * 0.78, height, height * 0.58, cyanColor, 0.08 + uniformValues.intensity * 0.08, 0.85);
    ctx.restore();
  }

  function _renderPerspectiveGridCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, sceneState) {
    const time = Math.max(0, now - startTime) * 0.001;
    const state = sceneState || { pointerX: 0, pointerY: 0, particles: [] };
    updateScenePointer(state, mouseState, width, height, 0.04);
    const horizon = height * (0.36 + state.pointerY * 0.04 * uniformValues.mouseInfluence);
    const centerX = width * 0.5 + state.pointerX * width * 0.08 * uniformValues.mouseInfluence;
    const color = mixColor({ r: 255, g: 255, b: 255 }, uniformValues.tint, 0.65);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.strokeStyle = rgbaColor(color, 0.11 + uniformValues.intensity * 0.12);
    ctx.lineWidth = 1;

    const verticalCount = Math.round(10 + uniformValues.lineSpread * 18);
    for (let index = 0; index <= verticalCount; index += 1) {
      const t = index / Math.max(verticalCount, 1);
      const xBottom = t * width;
      const xTop = centerX + (t - 0.5) * width * 0.08;
      ctx.beginPath();
      ctx.moveTo(xBottom, height);
      ctx.lineTo(xTop, horizon);
      ctx.stroke();
    }

    const depthCount = Math.round(10 + uniformValues.lineSpread * 16);
    for (let index = 0; index < depthCount; index += 1) {
      const progress = (index + ((time * (0.6 + uniformValues.pulseSpeed * 0.8)) % 1)) / Math.max(depthCount, 1);
      const eased = progress * progress;
      const y = horizon + eased * (height - horizon);
      const inset = width * 0.5 * (1 - Math.pow(progress, 0.72));
      ctx.beginPath();
      ctx.moveTo(centerX - inset, y);
      ctx.lineTo(centerX + inset, y);
      ctx.stroke();
    }

    for (let index = 0; index < state.particles.length; index += 1) {
      const particle = state.particles[index];
      const px = width * (0.5 + particle.x * (0.42 + uniformValues.lineSpread * 0.2)) + state.pointerX * width * 0.04;
      const py = horizon + ((particle.y + time * (0.1 + uniformValues.pulseSpeed * 0.05) * particle.size) % 1) * (height - horizon);
      const alpha = 0.08 + uniformValues.intensity * 0.14;
      ctx.fillStyle = rgbaColor(color, alpha);
      ctx.beginPath();
      ctx.arc(px, py, particle.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function renderNetworkDomeCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, sceneState) {
    const time = Math.max(0, now - startTime) * 0.001;
    const state = sceneState || { pointerX: 0, pointerY: 0, lines: [] };
    updateScenePointer(state, mouseState, width, height, 0.05);
    const cx = width * 0.5 + state.pointerX * width * 0.03 * uniformValues.mouseInfluence;
    const cy = height * (1.02 + state.pointerY * 0.02 * uniformValues.mouseInfluence);
    const radius = Math.max(width, height) * (0.62 + uniformValues.lineSpread * 0.2);
    const lineColor = mixColor({ r: 16, g: 185, b: 129 }, uniformValues.tint, 0.42);
    const particleColor = mixColor({ r: 52, g: 211, b: 153 }, uniformValues.tint, 0.36);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    drawGlow(ctx, cx, cy, radius * 0.7, lineColor, 0.08 + uniformValues.intensity * 0.08, 0.75);

    for (let index = 0; index < state.lines.length; index += 1) {
      const line = state.lines[index];
      const longitude = line.offset * Math.PI * 2 + time * (0.18 + line.speed * 0.12) * uniformValues.pulseSpeed;
      ctx.beginPath();
      let started = false;
      for (let segmentIndex = 0; segmentIndex <= 42; segmentIndex += 1) {
        const latitude = (segmentIndex / 42) * (Math.PI / 2.15);
        const x = Math.sin(latitude) * Math.cos(longitude);
        const y = Math.cos(latitude);
        const z = Math.sin(latitude) * Math.sin(longitude);
        if (z < -0.62) continue;
        const scale = 0.55 + z * 0.45;
        const screenX = cx + x * radius * scale;
        const screenY = cy - y * radius * scale * 0.72;
        if (!started) {
          ctx.moveTo(screenX, screenY);
          started = true;
        } else {
          ctx.lineTo(screenX, screenY);
        }
      }
      ctx.strokeStyle = rgbaColor(lineColor, 0.05 + uniformValues.intensity * 0.14);
      ctx.lineWidth = 0.6 + (index % 5 === 0 ? 0.6 : 0);
      ctx.stroke();

      for (let particleIndex = 0; particleIndex < line.particles.length; particleIndex += 1) {
        const particleT = (line.particles[particleIndex] + time * (0.18 + uniformValues.pulseSpeed * 0.08)) % 1;
        const latitude = particleT * (Math.PI / 2.15);
        const x = Math.sin(latitude) * Math.cos(longitude);
        const y = Math.cos(latitude);
        const z = Math.sin(latitude) * Math.sin(longitude);
        if (z < -0.3) continue;
        const scale = 0.55 + z * 0.45;
        const screenX = cx + x * radius * scale;
        const screenY = cy - y * radius * scale * 0.72;
        ctx.fillStyle = rgbaColor(particleColor, 0.12 + uniformValues.intensity * 0.24);
        ctx.beginPath();
        ctx.arc(screenX, screenY, 0.9 + scale * 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    drawGrain(ctx, width, height, time, uniformValues.grain, particleColor);
    ctx.restore();
  }

  function renderAmbientStarfieldCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, sceneState) {
    const time = Math.max(0, now - startTime) * 0.001;
    const state = sceneState || { pointerX: 0, pointerY: 0, stars: [] };
    updateScenePointer(state, mouseState, width, height, 0.04);
    const starColor = mixColor({ r: 96, g: 255, b: 180 }, uniformValues.tint, 0.72);
    const warmColor = mixColor({ r: 245, g: 180, b: 90 }, uniformValues.tint, 0.32);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    drawGlow(ctx, width * 0.5 + state.pointerX * width * 0.05, height * 0.08, Math.max(width, height) * 0.34, starColor, 0.05 + uniformValues.intensity * 0.06, 0.62);
    drawGlow(ctx, width * 0.9, height * 0.9, Math.max(width, height) * 0.26, warmColor, 0.04 + uniformValues.intensity * 0.05, 0.9);

    const visibleCount = Math.round(260 + uniformValues.lineSpread * 260);
    for (let index = 0; index < visibleCount; index += 1) {
      const star = state.stars[index];
      const depth = (((star.z - time * (0.08 + uniformValues.pulseSpeed * 0.06) * star.speed) % 1) + 1) % 1;
      const safeDepth = Math.max(depth, 0.035);
      const x = width * 0.5 + ((star.x + state.pointerX * 0.24 * uniformValues.mouseInfluence) / (safeDepth * 2)) * width * 0.18;
      const y = height * 0.5 + ((star.y + state.pointerY * 0.18 * uniformValues.mouseInfluence) / (safeDepth * 2)) * height * 0.18;
      if (x < -8 || x > width + 8 || y < -8 || y > height + 8) continue;
      const twinkle = 0.78 + (Math.sin(time * 2.2 + star.twinkle) + 1) * 0.11;
      const alpha = clamp((1 - safeDepth) * (0.16 + uniformValues.intensity * 0.42) * twinkle, 0.04, 0.86);
      const radius = clamp((1 - safeDepth) * (0.65 + uniformValues.lineSpread) * star.size + 0.15, 0.35, 2.6);
      if (radius > 1.05) {
        ctx.fillStyle = rgbaColor(starColor, alpha * 0.18);
        ctx.beginPath();
        ctx.arc(x, y, radius * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = rgbaColor(starColor, alpha);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    drawGrain(ctx, width, height, time, uniformValues.grain, starColor);
    ctx.restore();
  }

  function renderTerrainMeshCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, sceneState) {
    const time = Math.max(0, now - startTime) * 0.001 * 0.9 * uniformValues.pulseSpeed;
    const state = sceneState || { pointerX: 0, pointerY: 0 };
    updateScenePointer(state, mouseState, width, height, 0.04);
    const lineCount = Math.round(24 + uniformValues.lineSpread * 16);
    const points = Math.round(36 + uniformValues.lineSpread * 22);
    const meshColor = mixColor({ r: 168, g: 162, b: 158 }, uniformValues.tint, 0.48);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.translate(0, -height * 0.08 + state.pointerY * height * 0.03 * uniformValues.mouseInfluence);
    ctx.strokeStyle = rgbaColor(meshColor, 0.1 + uniformValues.intensity * 0.16);
    ctx.lineWidth = 0.7 + uniformValues.intensity * 0.4;

    for (let lineIndex = 0; lineIndex <= lineCount; lineIndex += 1) {
      ctx.beginPath();
      for (let pointIndex = 0; pointIndex <= points; pointIndex += 1) {
        const x = (pointIndex / points) * width;
        const yBase = height * 0.18 + (lineIndex / Math.max(lineCount, 1)) * height * 0.92;
        const wave1 = Math.sin(x * 0.003 + time + lineIndex * 0.11 + state.pointerX * 0.8) * (22 + uniformValues.intensity * 22);
        const wave2 = Math.sin(x * 0.007 - time * 0.8) * (10 + uniformValues.intensity * 12);
        const wave3 = Math.cos(lineIndex * 0.18 + time * 1.1 + state.pointerY * 0.7) * (10 + uniformValues.intensity * 8);
        const perspectiveShift = ((lineIndex / Math.max(lineCount, 1)) - 0.5) * state.pointerX * width * 0.07 * uniformValues.mouseInfluence;
        const y = yBase + wave1 + wave2 + wave3;
        if (pointIndex === 0) ctx.moveTo(x + perspectiveShift, y);
        else ctx.lineTo(x + perspectiveShift, y);
      }
      ctx.stroke();
    }
    drawGrain(ctx, width, height, time, uniformValues.grain, meshColor);
    ctx.restore();
  }

  function _renderRevenueBarsCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, sceneState) {
    const time = Math.max(0, now - startTime) * 0.001 * (1.15 + uniformValues.pulseSpeed * 0.35);
    const state = sceneState || { pointerX: 0, pointerY: 0, detail: [] };
    updateScenePointer(state, mouseState, width, height, 0.04);
    const count = Math.round(44 + uniformValues.lineSpread * 60);
    const barWidth = width / Math.max(count, 1);
    const barColor = mixColor({ r: 17, g: 17, b: 17 }, uniformValues.tint, 0.54);
    const reflectionColor = mixColor({ r: 204, g: 204, b: 204 }, uniformValues.tint, 0.32);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';

    for (let index = 0; index < count; index += 1) {
      const x = index * barWidth;
      const center = (index / Math.max(count - 1, 1)) * 2 - 1;
      const envelope = Math.max(0, 1 - Math.abs(center) * 1.25);
      const noise1 = Math.sin(index * 0.22 + time * 1.8) * Math.cos(index * 0.11 + time * 0.8);
      const noise2 = Math.sin(index * 0.45 - time * 1.35) * 0.5;
      const noise3 = state.detail[index % state.detail.length];
      const scaleY = Math.max(0.08, Math.abs(noise1 + noise2 + noise3) * (0.22 + uniformValues.intensity * 0.42) * envelope);
      const barHeight = scaleY * height * 0.6;
      const skew = state.pointerX * uniformValues.mouseInfluence * width * 0.03;
      const yShift = -state.pointerY * uniformValues.mouseInfluence * height * 0.03;
      ctx.fillStyle = rgbaColor(barColor, 0.7 + uniformValues.intensity * 0.2);
      ctx.fillRect(x + skew, height * 0.5 - barHeight + yShift, Math.max(1, barWidth * 0.62), barHeight);
      ctx.fillStyle = rgbaColor(reflectionColor, 0.09 + uniformValues.intensity * 0.12);
      ctx.fillRect(x + skew, height * 0.5 + 4 + yShift, Math.max(1, barWidth * 0.62), barHeight * 0.58);
    }

    drawGrain(ctx, width, height, time, uniformValues.grain, reflectionColor);
    ctx.restore();
  }

  function renderTopologyDotsCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, sceneState) {
    const time = Math.max(0, now - startTime) * 0.001 * (0.95 + uniformValues.pulseSpeed * 0.45);
    const state = sceneState || { pointerX: 0, pointerY: 0 };
    updateScenePointer(state, mouseState, width, height, 0.04);
    const step = Math.max(10, Math.round(22 - uniformValues.lineSpread * 10));
    const dotColor = mixColor({ r: 96, g: 165, b: 250 }, uniformValues.tint, 0.72);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    for (let x = 0; x <= width; x += step) {
      for (let y = 0; y <= height; y += step) {
        const waveX = Math.sin(x * 0.01 + time + state.pointerX * 0.9) * (18 + uniformValues.intensity * 26);
        const waveY = Math.cos(y * 0.01 + time * 0.7 + state.pointerY * 0.8) * (16 + uniformValues.intensity * 22);
        const targetY = height * 0.5 + waveX + waveY;
        const distance = Math.abs(y - targetY);
        const radius = Math.max(0.4, 2.6 - distance * (0.011 + uniformValues.lineSpread * 0.004));
        const alpha = Math.max(0.04, 0.8 - distance * (0.0038 - uniformValues.lineSpread * 0.0005));
        if (alpha <= 0.04 && radius <= 0.5) continue;
        const screenX = x + state.pointerX * 7 * uniformValues.mouseInfluence;
        const screenY = y + state.pointerY * 6 * uniformValues.mouseInfluence;
        ctx.fillStyle = rgbaColor(dotColor, alpha);
        ctx.beginPath();
        ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    drawGrain(ctx, width, height, time, uniformValues.grain, dotColor);
    ctx.restore();
  }

  function renderRadialBurstCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, sceneState) {
    const elapsedMilliseconds = Math.max(0, now - startTime);
    const elapsedSeconds = elapsedMilliseconds * 0.001;
    const state = sceneState || { pointerX: 0, pointerY: 0, lines: [] };
    updateScenePointer(state, mouseState, width, height, 0.05);
    const lineCount = Math.round(170 + uniformValues.lineSpread * 150);
    while (state.lines.length < lineCount) {
      state.lines.push({
        angle: Math.random() * Math.PI * 2,
        speed: 0.00022 + Math.random() * 0.0005,
        lengthOffset: Math.random(),
        colorOffset: Math.random(),
        widthOffset: Math.random(),
        alphaOffset: Math.random(),
      });
    }

    const centerX = width * 0.5 + state.pointerX * width * 0.06 * uniformValues.mouseInfluence;
    const centerY = height * 0.5 + state.pointerY * height * 0.045 * uniformValues.mouseInfluence;
    const maxRadius = Math.max(width, height) * (0.55 + uniformValues.intensity * 0.32);
    const innerRadius = Math.max(18, Math.min(width, height) * (0.09 + (1 - uniformValues.lineSpread) * 0.05));
    const primaryColor = mixColor({ r: 59, g: 130, b: 246 }, uniformValues.tint, 0.45);
    const accentColor = mixColor({ r: 139, g: 92, b: 246 }, uniformValues.tint, 0.35);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    drawGlow(ctx, centerX, centerY, maxRadius * 0.42, uniformValues.tint, 0.08 + uniformValues.intensity * 0.08, 1);

    for (let index = 0; index < lineCount; index += 1) {
      const line = state.lines[index];
      line.angle += line.speed * (0.75 + uniformValues.pulseSpeed * 0.55);
      const currentAngle = line.angle + state.pointerX * 0.08 * uniformValues.mouseInfluence;
      const pulse = Math.sin(elapsedMilliseconds * 0.0021 + line.lengthOffset * Math.PI * 2) * 0.2 + 0.82;
      const length = maxRadius * (0.62 + pulse * (0.24 + uniformValues.intensity * 0.22));
      const startX = centerX + Math.cos(currentAngle) * innerRadius;
      const startY = centerY + Math.sin(currentAngle) * innerRadius;
      const endX = centerX + Math.cos(currentAngle) * length;
      const endY = centerY + Math.sin(currentAngle) * length;
      const lineColor = line.colorOffset > 0.5 ? primaryColor : accentColor;
      const opacityBase = 0.08 + uniformValues.intensity * 0.22 + line.alphaOffset * 0.12;
      const opacity = opacityBase * (0.75 + Math.sin(elapsedMilliseconds * 0.0012 + line.alphaOffset * Math.PI * 2) * 0.25);
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, rgbaColor(lineColor, 0));
      gradient.addColorStop(0.18, rgbaColor(lineColor, opacity));
      gradient.addColorStop(0.82, rgbaColor(lineColor, opacity * 0.52));
      gradient.addColorStop(1, rgbaColor(lineColor, 0));
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1 + line.widthOffset * (1.2 + uniformValues.intensity * 1.1);
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
    drawGrain(ctx, width, height, elapsedSeconds, uniformValues.grain, accentColor);
    ctx.restore();
  }

  function renderCanvasOverlayFrame(ctx, width, height, now, startTime, uniformValues, mouseState, sceneState) {
    const overlayType = getWebglOverlayType(uniformValues?.overlayType);
    const state = sceneState || createCanvasOverlaySceneState(overlayType).value;
    switch (overlayType) {
      case 'atmospheric-folds':
        renderAtmosphericFoldsCanvas(ctx, width, height, now, startTime, uniformValues);
        return;
      case 'network-dome':
        renderNetworkDomeCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, state);
        return;
      case 'ambient-starfield':
        renderAmbientStarfieldCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, state);
        return;
      case 'terrain-mesh':
        renderTerrainMeshCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, state);
        return;
      case 'topology-dots':
        renderTopologyDotsCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, state);
        return;
      case 'radial-burst':
        renderRadialBurstCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, state);
        return;
      case 'lightning-rails':
      default:
        renderLightningRailsCanvas(ctx, width, height, now, startTime, uniformValues, mouseState, state);
    }
  }

  globalScope.__ASCII_WEBGL_OVERLAY_SHARED__ = {
    WEBGL_OVERLAY_TYPES,
    getWebglOverlayType,
    isCanvasOverlayType,
    getWebglOverlayFragmentSource,
    getWebglOverlayUniformValues,
    ensureWebglOverlayResources,
    disposeWebglOverlayResources,
    renderShaderOverlayFrame,
    createCanvasOverlaySceneState,
    renderCanvasOverlayFrame,
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);
`,Cv=typeof globalThis<"u"?globalThis:window;Cv.__ASCII_WEBGL_OVERLAY_SHARED__||new Function(Ev)();const Ms=Cv.__ASCII_WEBGL_OVERLAY_SHARED__;if(!Ms)throw new Error("Failed to initialize shared WebGL overlay runtime");const zl={standard:" .:-=+*#%@",blocks:" ░▒▓█",detailed:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",minimal:" ·░█",binary:" 01","letters-alphabet":"ABCDEFGHIJKLMNOPQRSTUVWXYZ","letters-lowercase":"abcdefghijklmnopqrstuvwxyz","letters-mixed":"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz","letters-symbols":"@#$%&*+=-<>~",braille:" ⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿"},ty={standard:zl.braille,sparse:" ⠁⠂⠄⠈⠐⠠⡀⢀⣀⣿",dense:" ⠃⠇⠏⠟⠿"},M1={alphabet:"letters-alphabet",lowercase:"letters-lowercase",mixed:"letters-mixed",symbols:"letters-symbols"},gf=" アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",A1="o",R1=[0/64,48/64,12/64,60/64,3/64,51/64,15/64,63/64,32/64,16/64,44/64,28/64,35/64,19/64,47/64,31/64,8/64,56/64,4/64,52/64,11/64,59/64,7/64,55/64,40/64,24/64,36/64,20/64,43/64,27/64,39/64,23/64,2/64,50/64,14/64,62/64,1/64,49/64,13/64,61/64,34/64,18/64,46/64,30/64,33/64,17/64,45/64,29/64,10/64,58/64,6/64,54/64,9/64,57/64,5/64,53/64,42/64,26/64,38/64,22/64,41/64,25/64,37/64,21/64],ny={binary:" 010101",brackets:" []/\\<>",symbols:" $_+",mixed:" 01[]/\\<>$_+|",matrix:" 01{}[]/\\<>|_+-"},N1=100,ay={"amber-classic":{low:{r:20,g:12,b:6},high:{r:255,g:223,b:178}},"cyan-night":{low:{r:6,g:16,b:22},high:{r:166,g:240,b:255}},"violet-haze":{low:{r:17,g:10,b:26},high:{r:242,g:198,b:255}},"lime-pulse":{low:{r:10,g:18,b:8},high:{r:226,g:255,b:162}},"mono-ice":{low:{r:12,g:12,b:12},high:{r:245,g:248,b:255}}},Tp=" .,:;irsXA253hMHGS#9B&@",O1="  .·•◦oO●",j1=180,k1=24,yf=340,ry=56,jd=640,I1=56,iy=150,L1=350,Rf=-1e3,Nf=-1e3,D1=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform float u_mouseActive;
  uniform float u_lineSpread;
  uniform float u_intensity;
  uniform float u_lightning;
  uniform float u_pulse;
  uniform float u_mouseInfluence;
  uniform float u_grain;
  uniform vec3 u_tint;

  float hash(float n) {
    return fract(sin(n) * 753.5453123);
  }

  float noise(float x) {
    float i = floor(x);
    float f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(hash(i), hash(i + 1.0), f);
  }

  float lightning(vec2 uv, vec2 a, vec2 b, float t) {
    vec2 ab = b - a;
    float len = length(ab);
    if (len < 0.01) return 0.0;

    vec2 dir = ab / len;
    vec2 pa = uv - a;
    float h = clamp(dot(pa, dir) / len, 0.0, 1.0);
    float dist = length(pa - dir * (h * len));
    float env = sin(h * 3.14159265);

    float offset = (noise(h * 15.0 - t * 20.0) - 0.5) * 0.1 * env;
    offset += (noise(h * 40.0 + t * 30.0) - 0.5) * 0.03 * env;
    float d = abs(dist + offset);

    return (0.0003 / (d + 0.0003) + 0.00002 / (d * d + 0.00002)) * env;
  }

  float pulseBand(float distanceToRail, float y, float t, float speed, float offset, float strength) {
    float pulseY = fract(t * speed + offset) * 4.0 - 2.0;
    return smoothstep(0.4, 0.0, abs(y - pulseY)) * strength / (distanceToRail + 0.002);
  }

  float wave(float y, float t, float offset, float amplitude) {
    return sin(y * 10.0 + t * 2.0 + offset) * amplitude;
  }

  void main() {
    vec2 safeResolution = max(u_resolution.xy, vec2(1.0));
    vec2 uv = gl_FragCoord.xy / safeResolution;
    uv = uv * 2.0 - 1.0;
    uv.x *= safeResolution.x / safeResolution.y;

    vec2 mouseUV = u_mouse / safeResolution;
    mouseUV = mouseUV * 2.0 - 1.0;
    mouseUV.x *= safeResolution.x / safeResolution.y;

    float spreadMix = clamp((u_lineSpread - 0.1) / 0.45, 0.0, 1.0);
    float spread = mix(0.12, 0.2, spreadMix);
    float pulseSpeed = max(0.1, u_pulse);
    float intensity = clamp(u_intensity, 0.0, 1.0);
    float lightningAmount = clamp(u_lightning, 0.0, 1.8);
    float mouseInfluence = clamp(u_mouseInfluence, 0.0, 2.0);
    float grainAmount = clamp(u_grain, 0.0, 0.12);
    float t = u_time * 0.5;
    float outerOffset = spread + mix(0.016, 0.028, spreadMix);
    float waveAmplitude = (0.004 + lightningAmount * 0.0015) * (0.85 + spreadMix * 0.25);

    float d1 = abs(uv.x - (-spread));
    float d2 = abs(uv.x - 0.0);
    float d3 = abs(uv.x - spread);

    float baseIntensity = mix(0.003, 0.0065, intensity);
    float glow = baseIntensity / (d1 + 0.002);
    glow += baseIntensity / (d2 + 0.002);
    glow += baseIntensity / (d3 + 0.002);

    glow += pulseBand(d1, uv.y, t, 0.2 * pulseSpeed, 0.0, 0.018 + intensity * 0.016) * 1.2;
    glow += pulseBand(d2, uv.y, t, 0.25 * pulseSpeed, 0.3, 0.018 + intensity * 0.016) * 1.2;
    glow += pulseBand(d3, uv.y, t, 0.15 * pulseSpeed, 0.7, 0.018 + intensity * 0.016) * 1.2;

    float wD1a = abs(uv.x - (-outerOffset + wave(uv.y, t, 0.0, waveAmplitude)));
    float wD1b = abs(uv.x - (-(spread - 0.02) + wave(uv.y, t, 1.0, waveAmplitude)));
    float wD2a = abs(uv.x - (-0.02 + wave(uv.y, t, 2.0, waveAmplitude)));
    float wD2b = abs(uv.x - ( 0.02 + wave(uv.y, t, 3.0, waveAmplitude)));
    float wD3a = abs(uv.x - ((spread - 0.02) + wave(uv.y, t, 4.0, waveAmplitude)));
    float wD3b = abs(uv.x - (outerOffset + wave(uv.y, t, 5.0, waveAmplitude)));

    float wavePulseStrength = (0.003 + intensity * 0.005) * (0.35 + lightningAmount * 0.2);
    glow += pulseBand(wD1a, uv.y, t, 0.3 * pulseSpeed, 0.1, wavePulseStrength);
    glow += pulseBand(wD1b, uv.y, t, 0.22 * pulseSpeed, 0.6, wavePulseStrength);
    glow += pulseBand(wD2a, uv.y, t, 0.28 * pulseSpeed, 0.2, wavePulseStrength);
    glow += pulseBand(wD2b, uv.y, t, 0.32 * pulseSpeed, 0.8, wavePulseStrength);
    glow += pulseBand(wD3a, uv.y, t, 0.35 * pulseSpeed, 0.4, wavePulseStrength);
    glow += pulseBand(wD3b, uv.y, t, 0.25 * pulseSpeed, 0.9, wavePulseStrength);

    vec2 p1 = vec2(-spread, mouseUV.y);
    vec2 p2 = vec2(0.0, mouseUV.y);
    vec2 p3 = vec2(spread, mouseUV.y);

    float flickerGate = step(0.15, noise(t * (40.0 + pulseSpeed * 12.0)));
    float flicker = flickerGate * (noise(t * (100.0 + pulseSpeed * 20.0)) * 0.7 + 0.3);
    float mouseActivation = clamp(u_mouseActive, 0.0, 1.0) * mouseInfluence;
    float mouseRadius = mix(1.4, 2.7, clamp(mouseInfluence * 0.5, 0.0, 1.0));

    glow += lightning(uv, p1, mouseUV, t) * smoothstep(mouseRadius, 0.0, length(mouseUV - p1)) * mouseActivation * flicker * lightningAmount;
    glow += lightning(uv, p2, mouseUV, t + 10.0) * smoothstep(mouseRadius, 0.0, length(mouseUV - p2)) * mouseActivation * flicker * lightningAmount;
    glow += lightning(uv, p3, mouseUV, t + 20.0) * smoothstep(mouseRadius, 0.0, length(mouseUV - p3)) * mouseActivation * flicker * lightningAmount;

    float distToCenter = length(uv);
    glow += (0.014 + intensity * 0.03) / (distToCenter + 0.02);

    vec3 tintColor = max(u_tint, vec3(0.06));
    vec3 railColor = mix(tintColor * 0.55, tintColor * 1.15, 0.72);
    vec3 highlightColor = mix(tintColor, vec3(1.0), 0.2 + intensity * 0.18);
    float shimmer = 0.8 + 0.2 * sin(t * (1.5 + pulseSpeed * 0.15) - distToCenter * 5.0);
    float falloff = 1.0 - smoothstep(0.3, 2.2, distToCenter);

    vec3 finalColor = railColor * glow * shimmer;
    finalColor += highlightColor * pow(max(glow, 0.0), 1.28) * (0.05 + lightningAmount * 0.02);
    finalColor *= falloff;
    float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
    finalColor += (n - 0.5) * grainAmount * 0.32;
    finalColor = max(finalColor, vec3(0.0));

    float luminance = dot(finalColor, vec3(0.2126, 0.7152, 0.0722));
    float alpha = clamp(luminance * (1.2 + intensity * 1.4), 0.0, 0.98);
    gl_FragColor = vec4(finalColor, alpha);
  }
`;function R(r,n,i){return Math.max(n,Math.min(i,r))}function U1(r){switch(r){case"up":return{dx:0,dy:-1};case"down":return{dx:0,dy:1};case"left":return{dx:-1,dy:0};case"top-left":return{dx:-Math.SQRT1_2,dy:-Math.SQRT1_2};case"top-right":return{dx:Math.SQRT1_2,dy:-Math.SQRT1_2};case"bottom-left":return{dx:-Math.SQRT1_2,dy:Math.SQRT1_2};case"bottom-right":return{dx:Math.SQRT1_2,dy:Math.SQRT1_2};default:return{dx:1,dy:0}}}function hu(r){const{dx:n,dy:i}=U1(r),s=-i,l=n,d=(n<0?n:0)+(i<0?i:0),m=(n>0?n:0)+(i>0?i:0),p=(s<0?s:0)+(l<0?l:0),g=(s>0?s:0)+(l>0?l:0);return{dx:n,dy:i,perpX:s,perpY:l,primaryMin:d,primarySpan:Math.max(1e-4,m-d),secondaryMin:p,secondarySpan:Math.max(1e-4,g-p)}}function fu(r,n,i,s,l){const d=r/Math.max(i-1,1),m=n/Math.max(s-1,1),p=d*l.dx+m*l.dy,g=d*l.perpX+m*l.perpY,v=R((p-l.primaryMin)/l.primarySpan,0,1),y=R((g-l.secondaryMin)/l.secondarySpan,0,1);return{primaryNorm:v,secondaryNorm:y}}function Up(r){if(typeof r!="string")return{r:255,g:255,b:255};const n=r.trim(),i=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(n);if(!i)return{r:255,g:255,b:255};const s=i[1].length===3?i[1].split("").map(l=>l+l).join(""):i[1];return{r:Number.parseInt(s.slice(0,2),16),g:Number.parseInt(s.slice(2,4),16),b:Number.parseInt(s.slice(4,6),16)}}function sy(r,n={r:255,g:255,b:255}){if(typeof r!="string")return n;const i=/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i.exec(r);return i?{r:R(Math.round(Number(i[1])||0),0,255),g:R(Math.round(Number(i[2])||0),0,255),b:R(Math.round(Number(i[3])||0),0,255)}:n}function Bf(r){return r==="dither"||r==="dither2"}function P1(r){return r==="halftone"||Bf(r)}function B1(r){return r?.backgroundColor||"#000000"}function z1(r){return Bf(r)?.5:1}function G1(r,n){const i=R(Math.round(Number(n)||4),2,8),s=R(Number(r)||0,0,1);return Math.round(s*(i-1))/(i-1)}function V1(r){return r-Math.floor(r)}function oy(r){return r*r*r*(r*(r*6-15)+10)}function Ym(r,n,i){return r+(n-r)*i}function vf(r,n){return V1(Math.sin(r*127.1+n*311.7)*43758.5453123)}function H1(r,n){const i=Math.floor(r),s=Math.floor(n),l=i+1,d=s+1,m=r-i,p=n-s,g=oy(m),v=oy(p),y=vf(i,s)*2-1,E=vf(l,s)*2-1,M=vf(i,d)*2-1,A=vf(l,d)*2-1;return Ym(Ym(y,E,g),Ym(M,A,g),v)}function ly(r,n,i,s){let l=0,d=1,m=r,p=n;const g=R(i,.5,8),v=R(s,0,1);for(let y=0;y<4;y+=1)l+=d*Math.abs(H1(m,p)),m*=g,p*=g,d*=v;return l}function Tv(r,n,i,s,l,d){const m=i*s,p=ly(r-m,n-m,l,d);return ly(r+p,n+p,l,d)}function $1(r,n){return R1[n%8*8+r%8]-.25}function Xm(r,n,i){const s=R(Math.round(Number(n)||4),2,8),l=1/(s-1),d=R(r+i*l-.2,0,1);return Math.floor(d*(s-1)+.5)/(s-1)}function F1(r,n,i){if(i!=="color")return r;const s=R(n,0,1);return{r:R(Math.round(r.r*s),0,255),g:R(Math.round(r.g*s),0,255),b:R(Math.round(r.b*s),0,255)}}function W1(r){if(!r||typeof r.length!="number")return!1;for(let n=0;n<r.length;n+=4)if(r[n]||r[n+1]||r[n+2]||r[n+3])return!0;return!1}function cy(r){return Ms.getWebglOverlayType(r)}function uy(r){return Ms.isCanvasOverlayType(r)}function dy(r){return Ms.getWebglOverlayFragmentSource(r)}function hy(r,n=D1){return Ms.ensureWebglOverlayResources(r,n)}function kd(r,n){Ms.disposeWebglOverlayResources(r,n)}function q1(r){return Ms.getWebglOverlayUniformValues(r)}function fy(r,n){const i=r||{x:Rf,y:Nf,lastMove:-1e9,active:0},s=n-i.lastMove,l=s<iy?1:Math.max(0,1-(s-iy)/L1);return i.active+=(l-i.active)*.15,i}function my(r,n,i,s,l,d,m,p){Ms.renderShaderOverlayFrame(r,n,i,s,l,d,m,p)}function py(r,n,i,s){if(!r||n<=0||i<=0)return null;try{const l=new Uint8Array(n*i*4);if(typeof r.finish=="function"&&r.finish(),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,l),!W1(l))return null;const d=s||document.createElement("canvas");(d.width!==n||d.height!==i)&&(d.width=n,d.height=i);const m=d.getContext("2d");if(!m)return null;const p=m.createImageData(n,i),g=n*4;for(let v=0;v<i;v+=1){const y=(i-v-1)*g,E=y+g;p.data.set(l.subarray(y,E),v*g)}return m.putImageData(p,0,0),d}catch{return null}}function gy(r,n,i,s){if(!r)return{width:0,height:0};if(n){const m=i&&i.getBoundingClientRect()||s&&s.getBoundingClientRect()||n.getBoundingClientRect(),p=n.getBoundingClientRect(),g=Math.max(0,m.left-p.left),v=Math.max(0,m.top-p.top),y=Math.max(1,m.width),E=Math.max(1,m.height);r.style.left=`${g}px`,r.style.top=`${v}px`,r.style.width=`${y}px`,r.style.height=`${E}px`}const l=Math.max(1,Math.floor(r.clientWidth||1)),d=Math.max(1,Math.floor(r.clientHeight||1));return(r.width!==l||r.height!==d)&&(r.width=l,r.height=d),{width:r.width,height:r.height}}function Y1(r,n){if(!r||!r.width||!r.height)return null;const i=n||document.createElement("canvas");(i.width!==r.width||i.height!==r.height)&&(i.width=r.width,i.height=r.height);const s=i.getContext("2d");return s?(s.clearRect(0,0,i.width,i.height),s.drawImage(r,0,0),i):null}function X1(r,n,i){const s=R((i-r)/Math.max(n-r,Number.EPSILON),0,1);return s*s*(3-2*s)}function gu(r,n,i){return R(Math.round(r+(n-r)*i),0,255)}function Pp(r){const n=String(r?.retroDuotone||"amber-classic");return ay[n]||ay["amber-classic"]}function K1(r,n){let i=r;return i=(i-128)*n.contrast+128,i+=n.brightness*2,i=R(i,0,255),n.invert&&(i=255-i),i}function Mp(r,n){return[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]][n%4][r%4]/16}function Km(r,n,i,s,l,d=-Math.PI/2){if(!(!r||!Number.isFinite(s)||s<=0||l<3)){for(let m=0;m<l;m+=1){const p=d+m/l*Math.PI*2,g=n+Math.cos(p)*s,v=i+Math.sin(p)*s;m===0?r.moveTo(g,v):r.lineTo(g,v)}r.closePath()}}function Q1(r,n,i,s,l,d=0){if(!r||l<=0)return;const m=(Number(d)||0)*Math.PI/180;switch(n){case"square":{const p=l*2;if(Math.abs(m)<=1e-4){r.fillRect(i-l,s-l,p,p);return}r.save(),r.translate(i,s),r.rotate(m),r.fillRect(-l,-l,p,p),r.restore();return}case"diamond":r.save(),r.translate(i,s),r.rotate(m),r.beginPath(),Km(r,0,0,l,4,Math.PI/4),r.fill(),r.restore();return;case"pentagon":r.save(),r.translate(i,s),r.rotate(m),r.beginPath(),Km(r,0,0,l,5),r.fill(),r.restore();return;case"hexagon":r.save(),r.translate(i,s),r.rotate(m),r.beginPath(),Km(r,0,0,l,6),r.fill(),r.restore();return;default:r.beginPath(),r.arc(i,s,l,0,Math.PI*2),r.fill()}}function J1(r,n,i,s,l){const d=R(Number(s??0)||0,0,3);if(d<=0)return 0;const m=R(r/255,0,1),p=Mp(n,i),g=(Math.sin((n+1)*7.31+(i+1)*3.17+l*.75)+1)*.5,v=p*.72+g*.28,E=R((m-.5)*(.65+d*1.95)+.5,0,1)-v,M=1.1+d*2.2;return R(E*M,0,1)}function Mv(r){const n=/rgba?\(\s*(\d+(?:\.\d+)?)\s*[, ]\s*(\d+(?:\.\d+)?)\s*[, ]\s*(\d+(?:\.\d+)?)(?:\s*[,/]\s*(\d*(?:\.\d+)?))?/i.exec(String(r||""));if(n){const s=R(Math.round(Number(n[1])||0),0,255),l=R(Math.round(Number(n[2])||0),0,255),d=R(Math.round(Number(n[3])||0),0,255),m=n[4];if(m!=null&&m!==""){const p=R(Number(m)||0,0,1);return`rgba(${255-s}, ${255-l}, ${255-d}, ${p})`}return`rgb(${255-s}, ${255-l}, ${255-d})`}const i=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(r||"").trim());if(i){const s=i[1].length===3?i[1].split("").map(p=>p+p).join(""):i[1],l=Number.parseInt(s.slice(0,2),16),d=Number.parseInt(s.slice(2,4),16),m=Number.parseInt(s.slice(4,6),16);return`rgb(${255-l}, ${255-d}, ${255-m})`}return"rgb(255, 255, 255)"}function Z1(r){const n=/rgba?\(\s*(\d+(?:\.\d+)?)\s*[, ]\s*(\d+(?:\.\d+)?)\s*[, ]\s*(\d+(?:\.\d+)?)(?:\s*[,/]\s*(\d*(?:\.\d+)?))?/i.exec(String(r||""));if(n)return{r:R(Math.round(Number(n[1])||0),0,255),g:R(Math.round(Number(n[2])||0),0,255),b:R(Math.round(Number(n[3])||0),0,255),a:n[4]!=null&&n[4]!==""?R(Number(n[4])||0,0,1):1};const i=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(r||"").trim());if(i){const s=i[1].length===3?i[1].split("").map(l=>l+l).join(""):i[1];return{r:Number.parseInt(s.slice(0,2),16),g:Number.parseInt(s.slice(2,4),16),b:Number.parseInt(s.slice(4,6),16),a:1}}return null}function yy({r,g:n,b:i,a:s=1}){const l=R(Math.round(Number(r)||0),0,255),d=R(Math.round(Number(n)||0),0,255),m=R(Math.round(Number(i)||0),0,255),p=R(Number(s)||0,0,1);return p<.999?`rgba(${l}, ${d}, ${m}, ${p})`:`rgb(${l}, ${d}, ${m})`}function ex(r,n,i){const s=R((Number(r)||0)/255,0,1),l=R((Number(n)||0)/255,0,1),d=R((Number(i)||0)/255,0,1),m=Math.max(s,l,d),p=Math.min(s,l,d),g=m-p;let v=0;return g>1e-6&&(m===s?v=(l-d)/g%6:m===l?v=(d-s)/g+2:v=(s-l)/g+4,v*=60,v<0&&(v+=360)),{h:v,s:m<=0?0:g/m,v:m}}function tx(r,n,i){const s=((Number(r)||0)%360+360)%360,l=R(Number(n)||0,0,1),d=R(Number(i)||0,0,1),m=d*l,p=s/60,g=m*(1-Math.abs(p%2-1));let v=0,y=0,E=0;p>=0&&p<1?(v=m,y=g):p<2?(v=g,y=m):p<3?(y=m,E=g):p<4?(y=g,E=m):p<5?(v=g,E=m):(v=m,E=g);const M=d-m;return{r:Math.round((v+M)*255),g:Math.round((y+M)*255),b:Math.round((E+M)*255)}}function nx(r){const n=Z1(r);if(!n)return Mv(r);const{r:i,g:s,b:l,a:d}=n,m=Math.max(i,s,l),p=Math.min(i,s,l);if((m<=0?0:(m-p)/m)<.06)return yy({r:255-i,g:255-s,b:255-l,a:d});const v=ex(i,s,l),y=R((.299*i+.587*s+.114*l)/255,0,1),E=R(Math.pow(1-y,1.2),0,1),M=R(v.s*1.08+.04,0,1),A=tx(v.h,M,E);return yy({...A,a:d})}function si(r,n,i=!1){return!!n?.themeOutputInvert!=!!i?nx(r):r}function ax(r){if(!r||r==="source")return null;const[n,i]=String(r).split(":").map(s=>Number(s));return!Number.isFinite(n)||!Number.isFinite(i)||n<=0||i<=0?null:n/i}function rx(r,n,i){const s=Math.max(1,Number(r)||1),l=Math.max(1,Number(n)||1),d=Math.max(1e-4,Number(i)||s/l),m=s/l;let p=0,g=0,v=s,y=l;return m>d?(v=l*d,p=(s-v)*.5):m<d&&(y=s/d,g=(l-y)*.5),{cropX:p,cropY:g,cropWidth:v,cropHeight:y}}function ix(r){if(r.style==="letters"){const n=M1[r.letterSet]||"letters-alphabet";return zl[n]||zl["letters-alphabet"]}if(r.style==="braille")return ty[r.brailleVariant]||ty.standard;if(r.style==="claude")return zl.blocks;if(r.style==="halftone"||Bf(r.style))return Tp;if(r.style==="retro"||r.style==="winamp")return A1;if(r.style==="terminal"){const n=String(r.terminalCharset||"binary");return ny[n]||ny.binary}if(r.style==="classic"&&r.charset==="custom"){const n=typeof r.customCharset=="string"?r.customCharset.slice(0,N1):"";return n.length>0?n:zl.standard}return zl[r.charset]||zl.standard}function Qm(r,n,i,s,l){const d=i*s+n,m=r[d]??0,p=n>0?r[d-1]??m:m,g=n+1<s?r[d+1]??m:m,v=i>0?r[d-s]??m:m,y=i+1<l?r[d+s]??m:m,E=Math.abs(g-p),M=Math.abs(y-v);return R((E+M)/510,0,1)}function sx(r,n,i,s,l,d,m){if(!r)return 0;let p=0,g=0;const v=Math.min(s,n+d),y=Math.min(l,i+m);for(let E=i;E<y;E+=1)for(let M=n;M<v;M+=1)p+=r[E*s+M]??0,g+=1;return g>0?p/g:0}function ox(r,n,i,s,l,d,m){if(!r)return{r:0,g:0,b:0};let p=0,g=0,v=0,y=0;const E=Math.min(s,n+d),M=Math.min(l,i+m);for(let A=i;A<M;A+=1)for(let D=n;D<E;D+=1){const B=(A*s+D)*4;p+=r[B]??0,g+=r[B+1]??0,v+=r[B+2]??0,y+=1}return y<=0?{r:0,g:0,b:0}:{r:p/y,g:g/y,b:v/y}}function lx(r,n,i,s,l){if(l.style==="claude"){const d=R(s+30,0,255);return{r:R(Math.floor(d*1.02),0,255),g:R(Math.floor(d*.52),0,255),b:R(Math.floor(d*.1),0,255)}}if(l.style==="terminal"){const d=R(s+28,0,255);return{r:R(Math.floor(d*.14),0,96),g:d,b:R(Math.floor(d*.24),0,116)}}if(l.style==="retro"||l.style==="winamp"){const d=Pp(l),m=R(Math.floor(s*1.04+12),0,255),p=R(Math.pow(m/255,.94),0,1);return{r:gu(d.low.r,d.high.r,p),g:gu(d.low.g,d.high.g,p),b:gu(d.low.b,d.high.b,p)}}if(l.colorMode==="color")return{r:R(Math.floor(r),0,255),g:R(Math.floor(n),0,255),b:R(Math.floor(i),0,255)};if(l.colorMode==="green"){const d=R(s+20,0,255);return{r:R(Math.floor(d*.2),0,255),g:d,b:R(Math.floor(d*.3),0,255)}}if(l.colorMode==="amber"){const d=R(s+18,0,255);return{r:d,g:R(Math.floor(d*.72),0,255),b:R(Math.floor(d*.16),0,255)}}if(l.colorMode==="custom"){const d=Up(l.customColor),m=s/255;return{r:R(Math.floor(d.r*m),0,255),g:R(Math.floor(d.g*m),0,255),b:R(Math.floor(d.b*m),0,255)}}return{r:s,g:s,b:s}}function cx(r){return r.style==="terminal"?{r:96,g:255,b:164}:r.style==="claude"?{r:255,g:186,b:118}:r.style==="retro"||r.style==="winamp"?{...Pp(r).high}:r.colorMode==="green"?{r:110,g:255,b:175}:r.colorMode==="amber"?{r:255,g:192,b:118}:r.colorMode==="custom"?Up(r.customColor):r.colorMode==="color"?{r:176,g:214,b:255}:{r:255,g:255,b:255}}function ux(r,n,i,s,l){const d=R(Number(s??0)||0,0,1);if(!r||n<=0||i<=0||d<=.001)return;const{r:m,g:p,b:g}=cx(l),v=Math.max(1,Math.min(n,i)),y=Math.max(10,v*(.055+d*.24)),E=R(.018+d*.34,0,.62),M=y*1.35,A=Z=>si(`rgba(${m}, ${p}, ${g}, ${R(Z,0,1).toFixed(3)})`,l);r.save(),r.globalCompositeOperation=l?.themeOutputInvert?"multiply":"screen",r.globalAlpha=1;const D=r.createLinearGradient(0,0,0,y);D.addColorStop(0,A(E*1.12)),D.addColorStop(.58,A(E*.44)),D.addColorStop(1,A(0)),r.fillStyle=D,r.fillRect(0,0,n,y);const B=r.createLinearGradient(0,i,0,i-y);B.addColorStop(0,A(E*1.12)),B.addColorStop(.58,A(E*.44)),B.addColorStop(1,A(0)),r.fillStyle=B,r.fillRect(0,i-y,n,y);const H=r.createLinearGradient(0,0,y,0);H.addColorStop(0,A(E)),H.addColorStop(.58,A(E*.4)),H.addColorStop(1,A(0)),r.fillStyle=H,r.fillRect(0,0,y,i);const K=r.createLinearGradient(n,0,n-y,0);K.addColorStop(0,A(E)),K.addColorStop(.58,A(E*.4)),K.addColorStop(1,A(0)),r.fillStyle=K,r.fillRect(n-y,0,y,i);const ae=E*.9,F=(Z,W)=>{const ee=r.createRadialGradient(Z,W,0,Z,W,M);ee.addColorStop(0,A(ae)),ee.addColorStop(.65,A(ae*.28)),ee.addColorStop(1,A(0)),r.fillStyle=ee,r.fillRect(Z-M,W-M,M*2,M*2)};F(0,0),F(n,0),F(0,i),F(n,i),r.restore()}function dx(r,n,i,s=0,l=0,d=1,m=1,p=0){const g=r/255;if(i.style==="halftone"){const E=Tp,M=(Math.sin((s*.82+l*.33)*1.55)+Math.cos((s*.27-l*.94)*1.25)+2)*.25,A=R(Math.pow(g,.9)*.8+M*.2,0,1),D=Math.floor(A*(E.length-1));return E[R(D,0,E.length-1)]}if(i.style==="braille"){const E=String(i.brailleVariant||"standard"),M=E==="dense"?.11:E==="sparse"?-.08:0,A=(Math.sin((s*.73+l*.41)*1.37)+Math.cos((s*.29-l*.88)*1.11)+2)*.25,D=R(p*1.55+Math.max(0,g-.45)*.28,0,1),B=R(Math.pow(g,.88)*.82+A*.11+D*.24+M,0,1),H=Math.floor(B*(n.length-1));return n[R(H,0,n.length-1)]}if(i.style==="dotcross"){const E="  .·:oO",M="  ·+xX#",A=(Math.sin((s*.82+l*.33)*1.55)+Math.cos((s*.27-l*.94)*1.25)+2)*.25,D=R(Math.pow(g,.9)*.82+A*.18,0,1),B=Math.floor(D*(E.length-1)),H=Math.floor(D*(M.length-1)),K=R(p*1.4+Math.max(0,D-.5)*.22,0,1),ae=(Math.sin((s+1)*1.71+(l+1)*2.37)+Math.cos((s+1)*.83-(l+1)*1.29)+2)*.25;return(K>R(.46+ae*.28,0,1)?M[R(H,0,M.length-1)]:E[R(B,0,E.length-1)])||" "}if(i.style==="particles"){const E=R(i.particleDensity??.5,.05,1),M=d>1?s/(d-1)*2-1:0,A=m>1?l/(m-1)*2-1:0,D=1-R(Math.sqrt(M*M+A*A),0,1),B=Math.pow(D,1.35)*E*.42,H=R(p*1.6+Math.max(0,g-.45)*.24,0,1),ae=((Math.sin((s+1)*12.9898+(l+1)*78.233)+1)*.5-.5)*(.18-E*.08),F=R((i.brightness??0)/50,-1,1)*.12,Z=R(Math.pow(g,.74+(1-E)*.2)+B*.62+H*.28+(E-.5)*.68+ae*.3+F*.16,0,1),W=typeof i.particleChar=="string"&&i.particleChar?i.particleChar[0]:"●",ee=W==="●"?O1:`  .·•◦${W}${W}${W}`,q=Math.floor(Z*(ee.length-1));return ee[R(q,0,ee.length-1)]}let v=g;if(i.style==="retro"||i.style==="winamp"){const E=R(Number(i.retroNoise??.45)||0,0,1),A=((Math.sin((s+1)*12.9898+(l+1)*78.233)+1)*.5-.5)*E*.22;v=R(Math.pow(g,.78)+A,0,1);const D=10+Math.round(E*16);v=Math.round(v*D)/Math.max(1,D)}i.style==="terminal"&&(v=Math.pow(g,.82));const y=Math.floor(v*(n.length-1));return n[R(y,0,n.length-1)]}function Id(r,n,i,s,l,d=0,m=0,p=1,g=1,v=0,y=0){let E=0,M=1,A=.5,D=0;if(l.style==="particles"){const W=R(l.particleDensity??.5,.05,1),ee=p>1?d/(p-1)*2-1:0,q=g>1?m/(g-1)*2-1:0,J=1-R(Math.sqrt(ee*ee+q*q),0,1),pe=Math.pow(J,1.4)*W,oe=R(y,0,1);A=W,D=pe,E=pe*(24+W*72)+oe*(18+W*34),M=1+pe*.45+oe*.22}const B=R(s+E,0,255),H=l.style==="particles"?(()=>{const W=B/255,ee=R((W-.46)*(1.5+A*.35)+.5,0,1),q=Math.pow(ee,.8),J=14+A*24+D*18;return R(Math.floor(q*255+J),0,255)})():B,K=l.style==="particles"?R((l.brightness??0)/50,-1,1):0,ae=l.style==="particles"?(()=>{const W=8+A*8+Math.max(0,K)*28,ee=1+Math.max(0,K)*.12,J=(H+W-128)*ee+128;return R(Math.floor(J),0,255)})():H,F=l.style==="particles"?R(.04+Math.max(0,K)*.18,.04,.24):0;if(l.style==="claude"){const W=R(s+36,0,255),ee=R(Math.floor(W*1.03),0,255),q=R(Math.floor(W*.5),0,255),J=R(Math.floor(W*.08),0,255);return`rgb(${ee}, ${q}, ${J})`}if(l.style==="retro"||l.style==="winamp"){const W=R(Number(l.retroNoise??.45)||0,0,1),ee=Pp(l),q=p>1?d/(p-1)*2-1:0,J=g>1?m/(g-1)*2-1:0,pe=1-R(Math.sqrt(q*q+J*J),0,1)*.32,oe=Math.sin((d+1)*12.9898+(m+1)*78.233),Te=Math.sin(d*.13+m*.07)*5,Oe=Math.sin((d+1)*41.13+(m+1)*17.37+s*.031),ke=R(s*1.06+14+Te+oe*(3+W*7.5)+Oe*(1+W*16),0,255),qe=R(Math.pow(ke*pe/255,.86),0,1),ot=gu(ee.low.r,ee.high.r,qe),P=gu(ee.low.g,ee.high.g,qe),ce=gu(ee.low.b,ee.high.b,qe);return`rgb(${ot}, ${P}, ${ce})`}if(l.style==="terminal"){const W=R(s+32,0,255),ee=(d+m&1)===0?1:.84,q=R(Math.floor(W*ee),0,255),J=R(Math.floor(q*.12),0,72),pe=R(Math.floor(q*.2),0,88);return`rgb(${J}, ${q}, ${pe})`}if(l.colorMode==="color"){let W=R(Math.floor(r*M+E*.22+v),0,255),ee=R(Math.floor(n*M+E*.28+v),0,255),q=R(Math.floor(i*M+E*.2+v),0,255);if(l.style==="particles"){const J=.72+A*.16,pe=ae;W=R(Math.floor(pe*(1-J)+W*J),0,255),ee=R(Math.floor(pe*(1-J)+ee*J),0,255),q=R(Math.floor(pe*(1-J)+q*J),0,255),W=R(Math.floor(W*(1-F)+255*F),0,255),ee=R(Math.floor(ee*(1-F)+249*F),0,255),q=R(Math.floor(q*(1-F)+236*F),0,255)}return`rgb(${W}, ${ee}, ${q})`}if(l.colorMode==="green"){const W=R((l.style==="particles"?ae:B)+25,0,255);return`rgb(${Math.floor(W*.2)}, ${W}, ${Math.floor(W*.3)})`}if(l.colorMode==="amber"){const W=R((l.style==="particles"?ae:B)+20,0,255);return`rgb(${W}, ${Math.floor(W*.7)}, ${Math.floor(W*.15)})`}if(l.colorMode==="custom"){const W=l.style==="particles"?ae:B,ee=Up(l.customColor),q=R(W/255,0,1),J=R(Math.floor(ee.r*q),0,255),pe=R(Math.floor(ee.g*q),0,255),oe=R(Math.floor(ee.b*q),0,255);return`rgb(${J}, ${pe}, ${oe})`}const Z=l.style==="particles"?ae:B;if(l.style==="particles"){const W=R(Math.floor(Z*(1-F)+255*F),0,255),ee=R(Math.floor(Z*(1-F)+249*F),0,255),q=R(Math.floor(Z*(1-F)+236*F),0,255);return`rgb(${W}, ${ee}, ${q})`}return`rgb(${Z}, ${Z}, ${Z})`}function hx(r,n,i,s,l,d,m){const p=d.overlayPreset||"none",g=R(d.overlayStrength??.4,0,1);if(p==="none"||g<=0)return r;if(p==="noise"){const v=R(d.noiseScale??24,4,120),y=R(d.noiseSpeed??1,0,4),E=hu(d.noiseDirection||"right"),{primaryNorm:M,secondaryNorm:A}=fu(n,i,s,l,E),D=Math.max(s,l),B=m*y*2.4,H=(M*D+17.3)/v,K=(A*D-9.7)/v,ae=Math.sin(H+B)*Math.cos(K-B*.73),F=Math.sin(M*D*1.37+A*D*2.11+B*6.2),Z=16+g*72;return R(r+(ae*.65+F*.35)*Z,0,255)}if(p==="waves"){if(d.style==="dither2")return r;const v=R(Number(d.dither2WaveAmplitude??.3)||0,0,1),y=R(Number(d.dither2WaveFrequency??3)||0,.5,8),E=R(Number(d.dither2WaveSpeed??.05)||0,0,.25),M=d.dither2AnimationEnabled!==!1,A=s>1?n/(s-1):.5,D=l>1?i/(l-1):.5,B=s/Math.max(l,1),H=(A-.5)*B,K=.5-D,F=R(Tv(H,K,M?m:0,E,y,v),0,1),Z=r/255,W=R(Z*(.76+F*.38)+(F-.5)*(.18+v*.26),0,1);return R(W*255,0,255)}if(p==="intervals"||p==="lines"){const v=R(d.intervalSpacing??12,4,64),y=R(d.intervalSpeed??1,0,4),E=R(d.intervalWidth??2,1,8),M=hu(d.intervalDirection||"down"),{primaryNorm:A,secondaryNorm:D}=fu(n,i,s,l,M),B=Math.max(s,l),H=A*B,K=D*B,F=(m*y*v*1.7%v+v)%v,Z=(H+F)%v,W=Math.min(Z,v-Z),ee=1-R(W/E,0,1),q=Math.sin(H/v*Math.PI*2+m*y*1.8+K/Math.max(B,1)*1.1),J=g*88;return R(r+ee*J*.85+q*J*.32,0,255)}if(p==="beam"){const v=.45+g*2.2,y=.08+g*.22,E=hu(d.beamDirection||"right"),{primaryNorm:M}=fu(n,i,s,l,E),D=(m*v%1.2+1.2)%1.2-.1,B=Math.abs(M-D),H=Math.max(0,1-B/y);return R(r+H*(34+g*120),0,255)}if(p==="glitch"){const v=hu(d.glitchDirection||"right"),{primaryNorm:y,secondaryNorm:E}=fu(n,i,s,l,v),M=Math.max(s,l),A=E*M,D=2+Math.floor((1-g)*3),B=Math.floor(A/D),H=Math.floor(m*(.75+g*1.35)),ae=(Math.sin((B+1)*19.73+H*7.11)+1)*.5>.74?1:0,F=.12+(Math.sin((B+1)*6.37)+1)*.5*(.22+g*.34),Z=(Math.sin((B+1)*2.91)+1)*.5,W=(m*F+Z)%1,ee=.12+g*.28,q=(y-W+1)%1,J=Math.max(0,1-q/ee),pe=Math.max(0,Math.sin(q*Math.PI*(5+g*8)-m*(2+g*5))),oe=ae*(J*(18+g*86)+pe*(6+g*26)),Te=ae*Math.sin(y*Math.PI*2*(2+g*4)-m*(1.4+g*2.2))*(3+g*14),Oe=Math.sin((n+1)*17.7+(i+1)*29.3+m*9.1)*(1.5+g*4.5);return R(r+oe+Te+Oe+E*.5,0,255)}if(p==="crt"){const v=hu(d.crtDirection||"down"),{primaryNorm:y,secondaryNorm:E}=fu(n,i,s,l,v),M=Math.max(s,l),A=y*M,D=E*M,B=n/Math.max(s-1,1)*2-1,H=i/Math.max(l-1,1)*2-1,K=B*B*.84+H*H*1.12,F=(1-(1-R(K,0,1)))*(24+g*116),Z=Math.sin((A+m*(34+g*24))*Math.PI),W=Math.sin((D+m*8.5)*2.9),ee=Math.sin(m*61)*.55+Math.sin(m*23)*.45,J=(m*(.12+g*.24)%1+1)%1,pe=Math.abs(y-J),oe=Math.max(0,1-pe/(.045+g*.08)),Oe=Math.sin((D+1)*14.37+Math.floor(m*12)*1.91)>.72?1:0,qe=((m*(.55+g*1.35)+D*.037)%1+1)%1,ot=Math.abs(y-qe),P=Math.max(0,1-ot/(.014+g*.03)),ce=Math.max(0,Math.sin(y*170-m*(28+g*58)+D*2.4)),ve=Oe*(P*(8+g*34)+ce*(2+g*10)),at=Math.pow(r/255,1.35)*(22+g*72),tt=Math.pow(1-r/255,1.2)*(8+g*24),k=Z*(14+g*36)+W*(6+g*14)+ee*(5+g*14)+oe*(18+g*64)+ve+at-tt;return R(r+k-F,0,255)}return r}function fx({sourceImage:r,sourceVideo:n,sourceStream:i,settings:s,onProcessingChange:l,onFpsChange:d,onCanvasReady:m}){const p=x.useRef(null),g=x.useRef(null),v=x.useRef(null),y=x.useRef(null),E=x.useRef(null),[M,A]=x.useState(900),[D,B]=x.useState(0),H=x.useRef(null),K=x.useRef(null),ae=x.useRef(null),F=x.useRef(null),Z=x.useRef(null),W=x.useRef(null),ee=x.useRef(0),q=x.useRef(null),J=x.useRef(null),pe=x.useRef(null),oe=x.useRef(null),Te=x.useRef(null),Oe=x.useRef(!1),ke=x.useRef(0),qe=x.useRef(0),ot=x.useRef({laneCount:0,primaryCount:0,speeds:[],phases:[],lengths:[]}),P=x.useRef({inside:!1,x:0,y:0}),ce=x.useRef({x:Rf,y:Nf,lastMove:-1e9,active:0}),ve=x.useRef([]),at=x.useMemo(()=>ix(s),[s]),tt=x.useMemo(()=>q1(s),[s]),k=B1(s),te=s.renderFont||'"Helvetica Neue", Helvetica, Arial, sans-serif',de=cy(s.webglOverlayType),xe=!!s.webglLayerEnabled&&!!s.webglOverlayAffectsAscii,Ae=!!s.webglLayerEnabled&&!xe,Ze=Ae&&(s.webglOverlayPosition||"behind")==="behind",Ve=uy(de);x.useEffect(()=>{W.current=tt},[tt]);const mt=x.useCallback(()=>{const fe=cy(W.current?.overlayType);if(uy(fe)){const xt=E.current;if(!xt)return null;let _t=pe.current;return _t||(_t=document.createElement("canvas"),pe.current=_t),Y1(xt,_t)}const ue=y.current,_e=Z.current;if(!ue||!_e)return null;const Qe=Math.max(1,_e.drawingBufferWidth||ue.width||1),Mt=Math.max(1,_e.drawingBufferHeight||ue.height||1);if(!Qe||!Mt)return null;let et=J.current;et||(et=document.createElement("canvas"),J.current=et);const _a=py(_e,Qe,Mt,et);if(_a)return _a;let $t=q.current;if(!$t||!$t.canvas||!$t.gl||$t.gl.isContextLost?.()||$t.shaderKey!==fe||$t.width!==Qe||$t.height!==Mt){$t?.gl&&$t.resources&&kd($t.gl,$t.resources);const xt=document.createElement("canvas");xt.width=Qe,xt.height=Mt;const _t=xt.getContext("webgl",{alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0})||xt.getContext("experimental-webgl"),Qt=hy(_t,dy(fe));if(!_t||!Qt)return Qt&&kd(_t,Qt),null;$t={canvas:xt,gl:_t,resources:Qt,shaderKey:fe,width:Qe,height:Mt},q.current=$t}const Pn=performance.now(),An=fy({...ce.current},Pn);return my($t.gl,$t.resources,Qe,Mt,Pn,ee.current,An,W.current),py($t.gl,Qe,Mt,et)},[]);x.useEffect(()=>{if(typeof m!="function")return;const fe=Ae?Ve?E.current||null:y.current||null:null;return m(v.current||null,fe,mt),()=>{m(null,null,null)}},[Ve,mt,m,Ae]),x.useEffect(()=>()=>{q.current?.gl&&q.current?.resources&&kd(q.current.gl,q.current.resources),q.current=null},[]),x.useEffect(()=>{const fe=p.current;if(!fe)return;const ue=new ResizeObserver(_e=>{const Qe=_e[0]?.contentRect?.width||900;A(Math.max(320,Qe))});return ue.observe(fe),()=>ue.disconnect()},[]),x.useEffect(()=>()=>{K.current&&(cancelAnimationFrame(K.current),K.current=null),ae.current&&(cancelAnimationFrame(ae.current),ae.current=null),F.current&&(cancelAnimationFrame(F.current),F.current=null),Te.current=null,H.current&&(H.current.pause(),H.current.srcObject=null,H.current.src=""),d(0)},[d]),x.useEffect(()=>{if(!n&&!i)return;Oe.current=!1,l(!0),K.current&&cancelAnimationFrame(K.current),H.current&&(H.current.pause(),H.current.srcObject=null,H.current.src="");const fe=document.createElement("video");i?fe.srcObject=i:fe.src=n,fe.muted=!0,fe.loop=!0,fe.playsInline=!0,H.current=fe;const ue=async()=>{try{await fe.play(),B(_e=>_e+1)}catch{l(!1)}};return fe.addEventListener("loadeddata",ue),fe.addEventListener("loadedmetadata",ue),i&&ue(),()=>{fe.removeEventListener("loadeddata",ue),fe.removeEventListener("loadedmetadata",ue),fe.pause(),fe.srcObject=null,fe.src="",K.current&&cancelAnimationFrame(K.current),H.current=null}},[n,i,l]),x.useEffect(()=>{const fe=y.current,ue=!!s.webglLayerEnabled&&!Ve;if(!fe)return;if(ae.current&&(cancelAnimationFrame(ae.current),ae.current=null),!ue){Z.current=null;const et=fe.getContext("webgl");et&&(et.viewport(0,0,et.drawingBufferWidth||1,et.drawingBufferHeight||1),et.clearColor(0,0,0,0),et.clear(et.COLOR_BUFFER_BIT)),q.current?.gl&&q.current?.resources&&(!s.webglLayerEnabled||Ve)&&(kd(q.current.gl,q.current.resources),q.current=null);return}const _e=fe.getContext("webgl",{alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});if(!_e)return;Z.current=_e;const Qe=hy(_e,dy(de));if(!Qe)return;ee.current=performance.now();const Mt=()=>{ae.current=requestAnimationFrame(Mt),gy(fe,p.current,g.current,v.current);const et=performance.now(),_a=fy(ce.current,et);my(_e,Qe,fe.width,fe.height,et,ee.current,_a,W.current)};return Mt(),()=>{ae.current&&(cancelAnimationFrame(ae.current),ae.current=null),Z.current=null,kd(_e,Qe)}},[Ve,de,s.webglLayerEnabled,s.webglOverlayIntensity,s.webglOverlayLineSpread,s.webglOverlayPulseSpeed,s.webglOverlayMouseInfluence,s.webglOverlayGrain,s.webglOverlayColor]),x.useEffect(()=>{const fe=E.current,ue=!!s.webglLayerEnabled&&Ve;if(!fe)return;F.current&&(cancelAnimationFrame(F.current),F.current=null);const _e=fe.getContext("2d");if(!_e)return;if(!ue){_e.clearRect(0,0,fe.width||1,fe.height||1);return}de==="atmospheric-folds"?oe.current=null:(!oe.current||oe.current.type!==de)&&(oe.current=Ms.createCanvasOverlaySceneState(de)),ee.current=performance.now();const Qe=()=>{F.current=requestAnimationFrame(Qe);const{width:Mt,height:et}=gy(fe,p.current,g.current,v.current),_a=performance.now();Ms.renderCanvasOverlayFrame(_e,Mt,et,_a,ee.current,W.current,ce.current,oe.current?.value)};return Qe(),()=>{F.current&&(cancelAnimationFrame(F.current),F.current=null)}},[Ve,de,s.webglLayerEnabled,s.webglOverlayIntensity,s.webglOverlayLineSpread,s.webglOverlayPulseSpeed,s.webglOverlayMouseInfluence,s.webglOverlayGrain,s.webglOverlayColor]),x.useEffect(()=>{const fe=v.current;if(!fe)return;const ue=fe.getContext("2d");if(!ue)return;const _e=(n||i)&&H.current&&H.current.readyState>=2?H.current:r;if(!_e){ue.clearRect(0,0,fe.width,fe.height),fe.width=M,fe.height=500,ue.fillStyle=k,ue.fillRect(0,0,fe.width,fe.height),ue.fillStyle="#9ca3af",ue.font=`16px ${te}`,ue.textAlign="center",ue.fillText("Upload an image or video to render ASCII art",fe.width/2,fe.height/2),l(!1),d(0);return}const Qe=_e.videoWidth||_e.naturalWidth,Mt=_e.videoHeight||_e.naturalHeight;if(!Qe||!Mt)return;const _a=ax(s.outputAspect)||Qe/Mt,$t=R(s.fontSize,6,22),uo=R(s.charSpacing??1,.7,2),Pn=`${$t}px ${te}`;ue.font=Pn;const An=ue.measureText("M").width,xt=Math.max($t*.45,An||$t*.62),_t=z1(s.style),Qt=xt*uo*_t,dn=$t*uo*_t,Ns=P1(s.style)?R(s.spacing??1,1,3):1,oi=Qt*Ns,Vi=dn*Ns,bu=(oi-Qt)*.5,Hr=(Vi-dn)*.5,ye=Math.max(16,Math.floor(M/oi)),Ia=oi/Math.max(Vi,1),Re=Math.max(12,Math.round(1/_a*ye*Ia)),Za=Math.floor(ye*oi),li=Math.ceil(Re*Vi);fe.width=Za,fe.height=li;const Os=document.createElement("canvas");Os.width=ye,Os.height=Re;const Ea=Os.getContext("2d",{willReadFrequently:!0});if(!Ea)return;const wr=()=>{K.current=null;const Ca=performance.now();ke.current+=1,qe.current||(qe.current=Ca);const er=Ca-qe.current;if(er>=500){const Se=Math.round(ke.current*1e3/er);d(Number.isFinite(Se)?Se:0),ke.current=0,qe.current=Ca}let Hi;try{const Se=ye*oi/Math.max(Re*Vi,1),{cropX:Ee,cropY:gt,cropWidth:nt,cropHeight:At}=rx(Qe,Mt,Se);if(Ea.clearRect(0,0,ye,Re),Ea.drawImage(_e,Ee,gt,nt,At,0,0,ye,Re),xe){const Nt=mt();Nt&&Nt.width&&Nt.height&&(Ea.save(),Ea.globalCompositeOperation="screen",Ea.globalAlpha=R(s.webglOverlayOpacity??1,0,1),Ea.drawImage(Nt,0,0,ye,Re),Ea.restore())}Hi=Ea.getImageData(0,0,ye,Re)}catch(Se){console.warn("ASCII renderer failed to read source pixels (likely cross-origin canvas taint).",Se),l(!1),d(0);return}const Et=Hi.data,La=new Float32Array(ye*Re),$r=Ca*.001;for(let Se=0;Se<Re;Se+=1)for(let Ee=0;Ee<ye;Ee+=1){const gt=Se*ye+Ee,nt=gt*4,At=Et[nt],Nt=Et[nt+1],Ye=Et[nt+2],Ot=.299*At+.587*Nt+.114*Ye,Bn=K1(Ot,s);La[gt]=hx(Bn,Ee,Se,ye,Re,s,$r)}if(s.ditherType==="bayer")for(let Se=0;Se<Re;Se+=1)for(let Ee=0;Ee<ye;Ee+=1){const gt=Se*ye+Ee,At=(Mp(Ee,Se)-.5)*255*s.ditherStrength;La[gt]=R(La[gt]+At,0,255)}if(s.ditherType==="floyd-steinberg"||s.ditherType==="atkinson"){const Se=new Float32Array(La);for(let Ee=0;Ee<Re;Ee+=1)for(let gt=0;gt<ye;gt+=1){const nt=Ee*ye+gt,At=Se[nt],Nt=255/Math.max(2,at.length-1),Ye=Math.round(At/Nt)*Nt,Ot=(At-Ye)*s.ditherStrength;Se[nt]=R(Ye,0,255),s.ditherType==="floyd-steinberg"?(gt+1<ye&&(Se[nt+1]+=Ot*7/16),gt-1>=0&&Ee+1<Re&&(Se[nt+ye-1]+=Ot*3/16),Ee+1<Re&&(Se[nt+ye]+=Ot*5/16),gt+1<ye&&Ee+1<Re&&(Se[nt+ye+1]+=Ot/16)):(gt+1<ye&&(Se[nt+1]+=Ot/8),gt+2<ye&&(Se[nt+2]+=Ot/8),gt-1>=0&&Ee+1<Re&&(Se[nt+ye-1]+=Ot/8),Ee+1<Re&&(Se[nt+ye]+=Ot/8),gt+1<ye&&Ee+1<Re&&(Se[nt+ye+1]+=Ot/8),Ee+2<Re&&(Se[nt+ye*2]+=Ot/8))}for(let Ee=0;Ee<La.length;Ee+=1)La[Ee]=R(Se[Ee],0,255)}const ho=s.overlayPreset==="matrix",ci=R(s.overlayStrength??.45,0,1),$i=R(s.hoverStrength??k1,4,64),ui=R(s.mouseAreaSize??j1,40,640),he=R(s.mouseSpread??1,.25,3),js=s.mouseInteractionMode==="push"?-1:1;let tr=null;const ha=P.current,Sr=ha.inside,In=ve.current.filter(Se=>Ca-Se.startedAt<jd);In.length!==ve.current.length&&(ve.current=In);const en=In.length>0;if(ho){const Se=R(s.matrixScale??18,6,48),Ee=R(s.matrixSpeed??1,.1,4),gt=hu(s.matrixDirection||"down"),nt=R(Se/12,.6,4),At=Math.max(ye,Re),Nt=Math.max(ye,Re),Ye=Math.max(6,Math.ceil(Nt/nt)),Ot=ot.current;(Ot.laneCount!==Ye||Ot.primaryCount!==At||Ot.speeds.length!==Ye)&&(ot.current={laneCount:Ye,primaryCount:At,speeds:Array.from({length:Ye},()=>.55+Math.random()*1.85),phases:Array.from({length:Ye},()=>Math.random()*(At+36)),lengths:Array.from({length:Ye},()=>Math.max(7,Math.round(At*(.2+Math.random()*.38))))});const Bn=ot.current;tr=new Float32Array(ye*Re);const fa=new Float32Array(Ye),ta=new Float32Array(Ye);for(let on=0;on<Ye;on+=1){const hn=Bn.lengths[on],_r=At+hn+12,Er=($r*Bn.speeds[on]*Ee*At+Bn.phases[on])%_r-hn;fa[on]=Er,ta[on]=hn,Math.random()<.0032&&(Bn.speeds[on]=.55+Math.random()*1.85,Bn.phases[on]=Math.random()*(At+36),Bn.lengths[on]=Math.max(7,Math.round(At*(.2+Math.random()*.38))))}for(let on=0;on<Re;on+=1)for(let hn=0;hn<ye;hn+=1){const _r=on*ye+hn,{primaryNorm:Er,secondaryNorm:nr}=fu(hn,on,ye,Re,gt),ma=R(Math.floor(nr*Ye),0,Ye-1),zn=Er*(At-1),Ft=fa[ma]-zn;if(Ft<0||Ft>ta[ma])continue;const Xn=1-Ft/(ta[ma]+1);tr[_r]=Xn*(44+ci*148+Xn*(62+ci*30))}}ue.clearRect(0,0,Za,li),Ze||(ue.fillStyle=k,ue.fillRect(0,0,Za,li)),ue.font=Pn,ue.textBaseline="top";const pt=R(s.bgDither??0,0,3),Rn=R(s.inverseDither??0,0,3),Le=R(s.opacity??1,0,1),xr=R(s.vignette??0,0,1),Fi=R(s.borderGlow??0,0,1),fo=Mv(k);ue.globalAlpha=Le;for(let Se=0;Se<Re;Se+=1)for(let Ee=0;Ee<ye;Ee+=1){const gt=Se*ye+Ee,nt=gt*4,At=Math.round(La[gt]),Nt=Et[nt],Ye=Et[nt+1],Ot=Et[nt+2],Bn=ye>1?Ee/(ye-1)*2-1:0,fa=Re>1?Se/(Re-1)*2-1:0,ta=1-R(Math.sqrt(Bn*Bn+fa*fa),0,1),on=ta*ta*I1,hn=on*.72,_r=Math.sqrt(Bn*Bn+fa*fa)/Math.SQRT2,Er=Math.pow(R(1-_r,0,1),1+xr*2),nr=1-xr+xr*Er,ma=Le*nr;if(ma<=.002)continue;ue.globalAlpha=ma;const zn=R(Math.round(At+on),0,255),Ft=J1(zn,Ee,Se,Rn,$r),Xn=Ft>.12,Rt=R(Math.round(zn+(255-zn*2)*Ft),0,255),Fr=Qm(La,Ee,Se,ye,Re),ar=Ee*oi+bu,fn=Se*Vi+Hr;if(pt>0){const Xe=At/255,zt=Mp(Ee,Se),Ct=(Math.sin((Ee+1)*7.31+(Se+1)*3.17+$r*.75)+1)*.5,jt=zt*.72+Ct*.28,rt=R(Xe*(.92+pt*.9)-jt+.34,0,1);if(rt>.04){const pn=R(.18+rt*(.85+pt*.5),.12,1),bt=Math.max(.45,Math.min(Qt,dn)*pn),wt=(Qt-bt)*.5,kt=(dn-bt)*.5,Wt=lx(Nt,Ye,Ot,At,s),ge=R(rt*(.05+pt*.34),0,1);ue.fillStyle=si(`rgba(${Wt.r}, ${Wt.g}, ${Wt.b}, ${ge.toFixed(3)})`,s),ue.fillRect(ar+wt,fn+kt,bt,bt)}}if(Ft>.01){const Xe=R(Ft*(.08+Rn*.34),0,1);if(Xe>.005){const zt=ue.globalAlpha;ue.globalAlpha=zt*Xe,ue.fillStyle=fo,ue.fillRect(ar,fn,Qt,dn),ue.globalAlpha=zt}}if(ho){const Xe=tr?tr[gt]:0,zt=6+(s.overlayStrength??.45)*14,Ct=R((Rt-128)*(1.2+ci*.55)+128,0,255),jt=R(Math.round(Ct*.38+Xe*.78+zt),0,255);if(jt<20)continue;const rt=$r*(10+R(s.matrixSpeed??1,.1,4)*16),pn=Math.sin((Ee+1)*2.17+rt*1.7)+Math.cos((Se+1)*1.93-rt*1.1),bt=Math.sin((Ee+1)*91.13+(Se+1)*37.77+rt*5.3+Xe*.06),wt=pn*.28+bt*.72;let kt=Math.floor(R((wt+2)/4,0,1)*(gf.length-1));Math.sin((Math.floor(rt*2.6)+Ee*13+Se*7)*12.9898)>.93&&(kt=1+(Math.floor(rt*11)+Ee*3+Se*5)%(gf.length-1));const ge=gf[R(kt,1,gf.length-1)];if(ge===" ")continue;const Vn=Xe>182,gn=R(.08+jt/620+(Vn?.12:0),0,.56),It=R(Math.floor(72+jt*.58),0,255),tn=R(Math.floor(It*.24),0,160),Ta=R(Math.floor(It*.34),0,180);let Gt=ar,Kn=fn;if(Sr||en){const pa=Gt+Qt*.5,nn=Kn+dn*.5;let ga=0,an=0;if(Sr){const qt=ha.x-pa,st=ha.y-nn,Hn=Math.hypot(qt,st);if(Hn>1e-4&&Hn<ui){const Yt=1-Hn/ui,rr=Math.pow(Yt,1/he),ln=rr*rr*$i*js;ga+=qt/Hn*ln,an+=st/Hn*ln}}if(en)for(let qt=0;qt<In.length;qt+=1){const st=In[qt],Hn=Ca-st.startedAt;if(Hn>=jd)continue;const Yt=R(Hn/jd,0,1),rr=pa-st.x,ln=nn-st.y,aa=Math.hypot(rr,ln);if(aa>=yf)continue;const _n=1-aa/yf,Cr=ry*_n*(1-Yt*.55)*(1.25+Math.sin(Yt*Math.PI)*.45);let ir=1,Yi=0;if(aa>1e-4)ir=rr/aa,Yi=ln/aa;else{const mi=(gt+st.seed)*.61803398875;ir=Math.cos(mi),Yi=Math.sin(mi)}ga+=ir*Cr,an+=Yi*Cr}Gt+=ga,Kn+=an}const xn=`rgba(${tn}, ${It}, ${Ta}, ${gn})`;if(ue.fillStyle=si(xn,s,Xn),ue.fillText(ge,Gt,Kn),Vn)ue.fillStyle=si("rgb(236, 248, 240)",s,Xn);else{const pa=R(Math.floor(64+jt*.52),0,225),nn=R(Math.floor(pa*.28+Ct*.08),0,180),ga=R(Math.floor(pa*.36+Ct*.12),0,195),an=`rgb(${nn}, ${pa}, ${ga})`;ue.fillStyle=si(an,s,Xn)}ue.fillText(ge,Gt,Kn);continue}let ks=ar,Gn=fn,mn=ks+Qt*.5,Da=Gn+dn*.5;if(!Bf(s.style)&&(Sr||en)){let Xe=0,zt=0;if(Sr){const Ct=ha.x-mn,jt=ha.y-Da,rt=Math.hypot(Ct,jt);if(rt>1e-4&&rt<ui){const pn=1-rt/ui,bt=Math.pow(pn,1/he),wt=bt*bt*$i*js;Xe+=Ct/rt*wt,zt+=jt/rt*wt}}if(en)for(let Ct=0;Ct<In.length;Ct+=1){const jt=In[Ct],rt=Ca-jt.startedAt;if(rt>=jd)continue;const pn=R(rt/jd,0,1),bt=mn-jt.x,wt=Da-jt.y,kt=Math.hypot(bt,wt);if(kt>=yf)continue;const Wt=1-kt/yf,ge=ry*Wt*(1-pn*.55)*(1.25+Math.sin(pn*Math.PI)*.45);let Vn=1,gn=0;if(kt>1e-4)Vn=bt/kt,gn=wt/kt;else{const It=(gt+jt.seed)*.61803398875;Vn=Math.cos(It),gn=Math.sin(It)}Xe+=Vn*ge,zt+=gn*ge}ks+=Xe,Gn+=zt,mn+=Xe,Da+=zt}if(s.style==="halftone"){const Xe=String(s.halftoneShape||"circle"),zt=R(Number(s.halftoneSize??1)||1,.4,2.2),Ct=R(Number(s.halftoneRotation??0)||0,-180,180),jt=Rt/255,rt=(Math.sin((Ee*.82+Se*.33)*1.55)+Math.cos((Ee*.27-Se*.94)*1.25)+2)*.25,pn=R(Math.pow(jt,.92)*.82+rt*.18,0,1),wt=Math.max(.1,Math.min(Qt,dn)*.5)*pn*zt;if(wt<.35)continue;const kt=Id(Nt,Ye,Ot,Rt,s,Ee,Se,ye,Re,hn);ue.fillStyle=si(kt,s,Xn),Q1(ue,Xe,mn,Da,wt,Ct);continue}if(s.style==="dither"){const Xe=s.overlayPreset==="waves",zt=R(Math.round(Number(s.ditherColorNum??4)||4),2,8),Ct=Xe?R(Number(s.ditherWaveAmplitude??.3)||0,0,1):0,jt=Xe?R(Number(s.ditherWaveFrequency??3)||0,.5,8):3,rt=Xe?R(Number(s.ditherWaveSpeed??.05)||0,0,.25):0,pn=Xe?R(Number(s.ditherMouseRadius??.3)||0,.05,.8):.05,bt=Xe&&s.ditherAnimationEnabled!==!1,wt=Xe&&s.ditherMouseInteractionEnabled!==!1,kt=ye>1?Ee/(ye-1):.5,Wt=Re>1?Se/(Re-1):.5,ge=bt?$r*(rt*24+.001):0,Vn=jt*Math.PI*2;let gn=Xe?Math.sin(Wt*Vn+ge)*.5+Math.cos((kt*.85-Wt*.32)*Vn-ge*1.1)*.3+Math.sin((kt+Wt*.7)*Vn*.6+ge*.7)*.2:0,It=0;if(wt&&ha.inside){const Hn=R(ha.x/Math.max(Za,1),0,1),Yt=R(ha.y/Math.max(li,1),0,1),rr=kt-Hn,ln=Wt-Yt,aa=Math.hypot(rr,ln),_n=R(1-aa/pn,0,1);It=_n*_n,gn+=It*.9,mn-=rr*Qt*It*(1.2+Ct*1.1),Da-=ln*dn*It*(1.1+Ct)}const tn=Xe?R(gn*.5+.5,0,1):.5,Ta=R(Rt/255,0,1),Gt=Xe?R(Ta*(.74+tn*.12)+tn*(.18+Ct*.24)+It*.14,0,1):Ta,Kn=G1(Gt,zt);if(Kn<=.001)continue;const pa=Math.max(.18,Math.min(Qt,dn)*.52)*R(.14+Kn*(.86+(Xe?Ct*.18:0)),.1,1.08);if(pa<.28)continue;const nn=bt?Math.sin(ge*.9+kt*10+Wt*6)*.06:0,ga=R(.2+Kn*.78+(Xe?tn*.08:0)+nn,0,1),an=R(.2+Kn*.7+It*.12,.12,.96),qt=R(Math.round(ga*255),0,255),st=sy(Id(Nt,Ye,Ot,qt,s,Ee,Se,ye,Re,hn,Fr));Kn>.58&&(ue.fillStyle=si(`rgba(${st.r}, ${st.g}, ${st.b}, ${(an*.18).toFixed(3)})`,s,Xn),ue.beginPath(),ue.arc(mn,Da,pa*1.8,0,Math.PI*2),ue.fill()),ue.fillStyle=si(`rgba(${st.r}, ${st.g}, ${st.b}, ${an.toFixed(3)})`,s,Xn),ue.beginPath(),ue.arc(mn,Da,pa,0,Math.PI*2),ue.fill();continue}if(s.style==="dither2"){const Xe=s.overlayPreset==="waves",zt=R(Math.round(Number(s.dither2ColorNum??4)||4),2,8),Ct=R(Math.round(Number(s.dither2PixelSize??2)||2),1,8),jt=Xe?R(Number(s.dither2WaveAmplitude??.3)||0,0,1):0,rt=Xe?R(Number(s.dither2WaveFrequency??3)||0,.5,8):3,pn=Xe?R(Number(s.dither2WaveSpeed??.05)||0,0,.25):0,bt=Xe?R(Number(s.dither2MouseRadius??1)||0,.1,1.5):.1,wt=Xe&&s.dither2AnimationEnabled!==!1,kt=Xe&&s.dither2MouseInteractionEnabled!==!1,Wt=Math.floor(Ee/Ct)*Ct,ge=Math.floor(Se/Ct)*Ct,Vn=Math.min(Ct,ye-Wt),gn=Math.min(Ct,Re-ge),It=ox(Et,Wt,ge,ye,Re,Vn,gn),tn=ye>1?Ee/(ye-1):.5,Ta=Re>1?Se/(Re-1):.5,Gt=Za/Math.max(li,1),Kn=(tn-.5)*Gt,xn=.5-Ta,pa=wt?$r:0,nn=sx(La,Wt,ge,ye,Re,Vn,gn)/255,ga=Qm(La,Wt,ge,ye,Re),an=R((nn-.5)*(1.9+ga*.18)+.5,0,1);let qt=Xe?Tv(Kn,xn,pa,pn,rt,jt):.5,st=0;if(kt&&ha.inside){const Jl=R(ha.x/Math.max(Za,1),0,1),Ki=R(ha.y/Math.max(li,1),0,1),nl=(Jl-.5)*Gt,al=.5-Ki,pi=Math.hypot(Kn-nl,xn-al);st=1-X1(0,bt,pi),qt-=.5*st}const Hn=R(qt,0,1),Yt=R(an*(Xe?.86+Hn*.24:1)+(Xe?(Hn-.5)*(.12+jt*.16):0)+ga*.08+st*.08,0,1),rr=R(Math.round(Yt*255),0,255),ln=F1(sy(Id(It.r,It.g,It.b,rr,s,Ee,Se,ye,Re,hn,Fr)),Yt,s.colorMode),aa=$1(Ee,Se),_n=Xm(ln.r/255,zt,aa),Cr=Xm(ln.g/255,zt,aa),ir=Xm(ln.b/255,zt,aa),Yi=R(_n*.2126+Cr*.7152+ir*.0722,0,1);if(Yi<=.001)continue;const mi=Qt,Kl=dn,Xi=R(.16+Yi*.76+st*.08,.16,.84),Ql=R(Xi*.22,0,.24),Tr=`rgba(${Math.round(_n*255)}, ${Math.round(Cr*255)}, ${Math.round(ir*255)}, ${Xi.toFixed(3)})`,tl=`rgba(${Math.round(_n*255)}, ${Math.round(Cr*255)}, ${Math.round(ir*255)}, ${Ql.toFixed(3)})`;Ql>.01&&(ue.fillStyle=si(tl,s,Xn),ue.fillRect(ar-Qt*.12,fn-dn*.12,mi+Qt*.24,Kl+dn*.24)),ue.fillStyle=si(Tr,s,Xn),ue.fillRect(ar,fn,mi,Kl);continue}if(s.style==="line"){const Xe=Rt/255,zt=R(s.lineLength??1,.1,2.5),Ct=R(s.lineWidth??1,.2,2.5),jt=R(s.lineThickness??1.6,.2,8),rt=s.lineRotation??0,pn=(Math.sin((Ee*.79+Se*.41)*1.37)+Math.cos((Ee*.33-Se*.93)*1.09)+2)*.25,bt=rt*Math.PI/180+(pn-.5)*.55,kt=Math.max(.8,Math.min(Qt,dn)*Ct)*R(Xe*zt,.05,1.5);if(kt<.6)continue;const Wt=kt*.5,ge=mn-Math.cos(bt)*Wt,Vn=Da-Math.sin(bt)*Wt,gn=mn+Math.cos(bt)*Wt,It=Da+Math.sin(bt)*Wt,tn=R(jt,.2,Math.max(.2,Math.min(Qt,dn)*1.4)),Ta=Id(Nt,Ye,Ot,Rt,s,Ee,Se,ye,Re,hn);ue.strokeStyle=si(Ta,s,Xn),ue.lineWidth=tn,ue.lineCap="round",ue.beginPath(),ue.moveTo(ge,Vn),ue.lineTo(gn,It),ue.stroke();continue}const hi=s.style==="dotcross"||s.style==="braille"||s.style==="particles"?Qm(La,Ee,Se,ye,Re):0,na=String(s.brailleVariant||"standard"),Wi=s.style==="braille"?8+hi*40+(na==="dense"?10:na==="sparse"?-4:4):0,mo=R(s.particleDensity??.5,.05,1),qi=s.style==="particles"?hi*44+(mo-.5)*12:0,el=s.style==="braille"?R(Rt+Wi,0,255):s.style==="particles"?R(Rt+qi,0,255):Rt,fi=dx(el,at,s,Ee,Se,ye,Re,hi);if(fi===" ")continue;const po=Id(Nt,Ye,Ot,el,s,Ee,Se,ye,Re,hn,hi);ue.fillStyle=si(po,s,Xn),ue.fillText(fi,ks,Gn)}Fi>.001&&ux(ue,Za,li,Fi,s),ue.globalAlpha=1,Oe.current||(Oe.current=!0,l(!1));const di=s.overlayPreset!=="none"||xe;((n||i)&&H.current||di||P.current.inside||ve.current.length>0)&&(K.current=requestAnimationFrame(wr))};return Te.current=()=>{K.current||wr()},ke.current=0,qe.current=0,wr(),()=>{K.current&&(cancelAnimationFrame(K.current),K.current=null),Te.current=null}},[r,n,i,D,s,M,at,l,d,k,te,Ze,xe,mt]);const Zt=fe=>{const ue=v.current;if(!ue)return null;const _e=ue.getBoundingClientRect();if(!_e.width||!_e.height||fe.clientX<_e.left||fe.clientX>_e.right||fe.clientY<_e.top||fe.clientY>_e.bottom)return null;const Qe=R(fe.clientX-_e.left,0,_e.width),Mt=R(fe.clientY-_e.top,0,_e.height),et=Qe/_e.width*ue.width,_a=Mt/_e.height*ue.height;return{x:R(et,0,ue.width),y:R(_a,0,ue.height),xClient:Qe,yClient:Mt,clientHeight:_e.height}},da=fe=>{const ue=Ae?Ve?E.current||v.current:y.current||v.current:v.current;if(!ue)return null;const _e=ue.getBoundingClientRect();if(!_e.width||!_e.height||fe.clientX<_e.left||fe.clientX>_e.right||fe.clientY<_e.top||fe.clientY>_e.bottom)return null;const Qe=R(fe.clientX-_e.left,0,_e.width),Mt=R(fe.clientY-_e.top,0,_e.height);return{xClient:Qe,yClient:Mt,clientHeight:_e.height}},Vr=fe=>{const ue=Zt(fe);ue?P.current={inside:!0,x:ue.x,y:ue.y}:P.current={...P.current,inside:!1};const _e=da(fe);_e?ce.current={...ce.current,x:_e.xClient,y:_e.yClient,lastMove:performance.now()}:ce.current={...ce.current,x:Rf,y:Nf},typeof Te.current=="function"&&Te.current()},Rs=()=>{P.current={...P.current,inside:!1},ce.current={...ce.current,x:Rf,y:Nf,lastMove:-1e9,active:0},typeof Te.current=="function"&&Te.current()},co=fe=>{const ue=Zt(fe),_e=performance.now();if(ue){P.current={inside:!0,x:ue.x,y:ue.y};const Mt={x:ue.x,y:ue.y,startedAt:_e,seed:Math.random()*Math.PI*2};ve.current=[...ve.current.slice(-2),Mt]}const Qe=da(fe);Qe&&(ce.current={...ce.current,x:Qe.xClient,y:Qe.yClient,lastMove:_e}),typeof Te.current=="function"&&Te.current()};return u.jsxs("div",{ref:p,className:"ascii-renderer",onPointerMove:Vr,onPointerLeave:Rs,onPointerDown:co,children:[u.jsx("div",{ref:g,className:"ascii-renderer-stage",style:{backgroundColor:Ze?"transparent":k},children:u.jsx("canvas",{ref:v,"aria-label":"ASCII art preview"})}),u.jsx("canvas",{ref:y,className:"ascii-renderer-gl-layer","aria-hidden":"true",style:{display:s.webglLayerEnabled&&!Ve?"block":"none",opacity:Ae?R(s.webglOverlayOpacity??1,0,1):0,zIndex:(s.webglOverlayPosition||"behind")==="above"?3:1}}),u.jsx("canvas",{ref:E,className:"ascii-renderer-gl-layer","aria-hidden":"true",style:{display:s.webglLayerEnabled&&Ve?"block":"none",opacity:Ae?R(s.webglOverlayOpacity??1,0,1):0,zIndex:(s.webglOverlayPosition||"behind")==="above"?3:1}})]})}const mx={classic:"Classic ASCII",braille:"Braille",halftone:"Halftone",dither:"Dot Screen",dither2:"Dither",dotcross:"Dot Cross",line:"Line",particles:"Particles",claude:"Claude Code",retro:"Retro Art",terminal:"Terminal"},px={standard:"Standard (@%#*+=-:. )",blocks:"Blocks (█▓▒░ )",detailed:"Detailed ($@B%8&WM... )",minimal:"Minimal (·░█)",binary:"Binary (01)",custom:"Custom","letters-alphabet":"Letters (A-Z)","letters-lowercase":"Letters (a-z)","letters-mixed":"Letters (Aa)","letters-symbols":"Letters (Symbols)"},gx={standard:"Standard",sparse:"Sparse",dense:"Dense"},yx={circle:"Circle",square:"Square",diamond:"Diamond",pentagon:"Pentagon",hexagon:"Hexagon"},vx={"amber-classic":"Amber Classic","cyan-night":"Cyan Night","violet-haze":"Violet Haze","lime-pulse":"Lime Pulse","mono-ice":"Mono Ice"},bx={binary:"101010",brackets:"[]/\\<>",symbols:"$_+",mixed:"Mixed Terminal",matrix:"{}[]|/\\_+-"},wx={none:"None","floyd-steinberg":"Floyd-Steinberg",bayer:"Bayer (Ordered)",atkinson:"Atkinson"},Sx={grayscale:"Grayscale",color:"Full Color",green:"Matrix Green",amber:"Amber Monitor",custom:"Custom"},xx={none:"None",noise:"Noise Field",waves:"Waves",intervals:"Intervals",beam:"Beam Sweep",glitch:"Glitch",crt:"CRT Monitor",matrix:"Matrix Rain"},_x={attract:"Attract",push:"Push"},Ex=[{key:"up",label:"Up",icon:"↑"},{key:"down",label:"Down",icon:"↓"},{key:"left",label:"Left",icon:"←"},{key:"right",label:"Right",icon:"→"},{key:"top-left",label:"Top Left",icon:"↖"},{key:"top-right",label:"Top Right",icon:"↗"},{key:"bottom-left",label:"Bottom Left",icon:"↙"},{key:"bottom-right",label:"Bottom Right",icon:"↘"}],iu={'"Helvetica Neue", Helvetica, Arial, sans-serif':"Helvetica Neue",'"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif':"Inter",'"Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif':"Poppins",'"Space Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif':"Space Grotesk",'"VT323", "Arial", sans-serif':"VT323 (Pixel)"},Cx={"lightning-rails":"Lightning Rails","atmospheric-folds":"Atmospheric Folds","network-dome":"Network Dome","ambient-starfield":"Ambient Starfield","terrain-mesh":"Terrain Mesh","topology-dots":"Topology Dots","radial-burst":"Radial Burst"},Tx={behind:"Behind",above:"Above"},Mx={false:"Separate",true:"ASCII FX"},Ax="#00ff99",zf="#99bbff",Rx="linear-gradient(90deg, #ff4d4d 0%, #ffd24d 17%, #6dff6d 33%, #4dffff 50%, #4d6dff 67%, #d24dff 83%, #ff4d4d 100%)";function $d(r,n,i){return Math.max(n,Math.min(i,r))}function Nx(r){return r==="halftone"||r==="dither"||r==="dither2"}function Av(r,n=zf){return/^#[0-9a-fA-F]{6}$/.test(r||"")?r.toLowerCase():n}function Ox(r,n=zf){const i=Av(r,n);return{r:Number.parseInt(i.slice(1,3),16),g:Number.parseInt(i.slice(3,5),16),b:Number.parseInt(i.slice(5,7),16)}}function jx(r,n,i){const s=$d(r/255,0,1),l=$d(n/255,0,1),d=$d(i/255,0,1),m=Math.max(s,l,d),p=Math.min(s,l,d),g=(m+p)/2,v=m-p;if(v===0)return{h:0,s:0,l:g};const y=g>.5?v/(2-m-p):v/Math.max(m+p,Number.EPSILON);let E;switch(m){case s:E=(l-d)/v+(l<d?6:0);break;case l:E=(d-s)/v+2;break;default:E=(s-l)/v+4;break}return{h:E/6*360,s:y,l:g}}function Jm(r,n,i){let s=i;return s<0&&(s+=1),s>1&&(s-=1),s<1/6?r+(n-r)*6*s:s<1/2?n:s<2/3?r+(n-r)*(2/3-s)*6:r}function kx(r,n,i){const s=(r%360+360)%360/360,l=$d(n,0,1),d=$d(i,0,1);if(l===0){const M=Math.round(d*255).toString(16).padStart(2,"0");return`#${M}${M}${M}`}const m=d<.5?d*(1+l):d+l-d*l,p=2*d-m,g=Math.round(Jm(p,m,s+1/3)*255),v=Math.round(Jm(p,m,s)*255),y=Math.round(Jm(p,m,s-1/3)*255);return`#${g.toString(16).padStart(2,"0")}${v.toString(16).padStart(2,"0")}${y.toString(16).padStart(2,"0")}`}function Ix(r,n=zf){const{r:i,g:s,b:l}=Ox(r,n);return jx(i,s,l)}function vy({label:r,sliderId:n,pickerId:i,value:s,fallback:l,onChange:d}){const m=Av(s,l),p=Ix(m,l),g=v=>{const y=Number(v),E=p.s<.08?.75:p.s;d(kx(y,E,p.l))};return u.jsxs("div",{className:"control-row",children:[u.jsx("label",{htmlFor:i,children:r}),u.jsxs("div",{className:"hue-color-inputs",children:[u.jsx("input",{id:n,className:"hue-slider",type:"range",min:0,max:360,step:1,"aria-label":`${r} hue`,title:`${r} hue`,value:Math.round(p.h),onChange:v=>g(v.target.value),style:{background:Rx}}),u.jsx("input",{id:i,className:"control-color",type:"color","aria-label":r,value:m,onChange:v=>d(v.target.value)})]})]})}function We({label:r,value:n,min:i,max:s,step:l,onChange:d,suffix:m=""}){return u.jsxs("div",{className:"control-row",children:[u.jsxs("div",{className:"split-line",children:[u.jsx("span",{className:"control-label",children:r}),u.jsxs("span",{className:"control-value",children:[n,m]})]}),u.jsx("input",{type:"range",min:i,max:s,step:l,value:n,onChange:p=>d(Number(p.target.value))})]})}function ri({label:r,value:n,options:i,onChange:s}){return u.jsxs("div",{className:"control-row",children:[u.jsx("label",{children:r}),u.jsx("select",{className:"control-select",value:n,onChange:l=>s(l.target.value),children:Object.entries(i).map(([l,d])=>u.jsx("option",{value:l,children:d},l))})]})}function su({value:r,onChange:n,ariaLabel:i}){return u.jsx("div",{className:"tab-buttons fx-direction-tabs",role:"tablist","aria-label":i,children:Ex.map(s=>u.jsx("button",{type:"button",role:"tab","aria-label":s.label,title:s.label,"aria-selected":r===s.key,className:r===s.key?"active direction-icon-button":"direction-icon-button",onClick:()=>n(s.key),children:u.jsx("span",{"aria-hidden":"true",children:s.icon})},s.key))})}function Lx({settings:r,onChange:n}){const[i,s]=x.useState(()=>r.webglLayerEnabled?"webgl":"ascii"),l=r.webglLayerEnabled?i:"ascii",d=l==="webgl",m=r.style==="dither"||r.style==="dither2",p=y=>{const E=y==="webgl"?"webgl":"ascii";s(E),E==="webgl"&&!r.webglLayerEnabled&&n("webglLayerEnabled",!0)},g=()=>{n("webglLayerEnabled",!1),s("ascii")},v=u.jsx(ri,{label:"Dither Algorithm",value:r.ditherType,options:wx,onChange:y=>n("ditherType",y)});return u.jsxs("div",{className:"controls-panel interactive",children:[u.jsxs("div",{className:"control-row",children:[u.jsx("span",{className:"control-label",children:"Layer"}),u.jsxs("div",{className:"tab-buttons layer-tabs",role:"tablist","aria-label":"Render Layer",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":l==="ascii",className:l==="ascii"?"active":"",onClick:()=>p("ascii"),children:"ASCII"}),r.webglLayerEnabled?u.jsx("button",{type:"button",role:"tab","aria-selected":l==="webgl",className:l==="webgl"?"active":"",onClick:()=>p("webgl"),children:"WEBGL"}):u.jsx("button",{type:"button",className:"layer-add-button",onClick:()=>p("webgl"),children:"ADD LAYER"})]})]}),!d&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"control-row",children:[u.jsx("span",{className:"control-label",children:"Art Style"}),u.jsx("div",{className:"style-buttons",children:Object.entries(mx).map(([y,E])=>u.jsx("button",{type:"button",className:r.style===y?"active":"",onClick:()=>n("style",y),children:E},y))})]}),r.style==="classic"?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"control-grid-3",children:[u.jsx(ri,{label:"Font",value:r.renderFont,options:iu,onChange:y=>n("renderFont",y)}),u.jsx(ri,{label:"Character Set",value:r.charset,options:px,onChange:y=>n("charset",y)}),v]}),r.charset==="custom"&&u.jsxs("div",{className:"control-row",children:[u.jsx("label",{htmlFor:"custom-charset-input",children:"Custom Character Sequence"}),u.jsx("input",{id:"custom-charset-input",type:"text",maxLength:100,className:"control-text",value:typeof r.customCharset=="string"?r.customCharset:"",onChange:y=>n("customCharset",y.target.value),placeholder:"aura"})]})]}):r.style==="braille"?u.jsxs("div",{className:"control-grid-3",children:[u.jsx(ri,{label:"Font",value:r.renderFont,options:iu,onChange:y=>n("renderFont",y)}),u.jsx(ri,{label:"Braille Set",value:r.brailleVariant||"standard",options:gx,onChange:y=>n("brailleVariant",y)}),v]}):r.style==="halftone"?u.jsxs("div",{className:"control-grid-3",children:[u.jsx(ri,{label:"Font",value:r.renderFont,options:iu,onChange:y=>n("renderFont",y)}),u.jsx(ri,{label:"Halftone Shape",value:r.halftoneShape||"circle",options:yx,onChange:y=>n("halftoneShape",y)}),v]}):m?v:r.style==="retro"?u.jsxs("div",{className:"control-grid-3",children:[u.jsx(ri,{label:"Font",value:r.renderFont,options:iu,onChange:y=>n("renderFont",y)}),u.jsx(ri,{label:"Retro Duotone",value:r.retroDuotone||"amber-classic",options:vx,onChange:y=>n("retroDuotone",y)}),v]}):r.style==="terminal"?u.jsxs("div",{className:"control-grid-3",children:[u.jsx(ri,{label:"Font",value:r.renderFont,options:iu,onChange:y=>n("renderFont",y)}),u.jsx(ri,{label:"Terminal Set",value:r.terminalCharset||"binary",options:bx,onChange:y=>n("terminalCharset",y)}),v]}):u.jsxs("div",{className:"control-grid-2",children:[u.jsx(ri,{label:"Font",value:r.renderFont,options:iu,onChange:y=>n("renderFont",y)}),v]}),r.style==="particles"&&u.jsxs(u.Fragment,{children:[u.jsx(We,{label:"Particle Density",value:r.particleDensity,min:.1,max:1,step:.05,onChange:y=>n("particleDensity",y)}),u.jsxs("div",{className:"control-row",children:[u.jsx("label",{children:"Particle Char"}),u.jsx("input",{type:"text",maxLength:1,className:"control-text",value:r.particleChar,onChange:y=>n("particleChar",y.target.value||"*")})]})]}),r.style==="halftone"&&u.jsxs(u.Fragment,{children:[u.jsx(We,{label:"Halftone Size",value:r.halftoneSize??1,min:.4,max:2.2,step:.05,suffix:"x",onChange:y=>n("halftoneSize",y)}),u.jsx(We,{label:"Halftone Rotation",value:r.halftoneRotation??0,min:-180,max:180,step:1,suffix:"deg",onChange:y=>n("halftoneRotation",y)})]}),r.style==="dither"&&u.jsx(u.Fragment,{children:u.jsx(We,{label:"Color Levels",value:r.ditherColorNum??4,min:2,max:8,step:1,onChange:y=>n("ditherColorNum",y)})}),r.style==="dither2"&&u.jsxs(u.Fragment,{children:[u.jsx(We,{label:"Color Levels",value:r.dither2ColorNum??4,min:2,max:8,step:1,onChange:y=>n("dither2ColorNum",y)}),u.jsx(We,{label:"Pixel Size",value:r.dither2PixelSize??2,min:1,max:8,step:1,onChange:y=>n("dither2PixelSize",y)})]}),r.style==="retro"&&u.jsx(We,{label:"Retro Noise",value:r.retroNoise??.45,min:0,max:1,step:.05,onChange:y=>n("retroNoise",y)}),r.style==="line"&&u.jsxs(u.Fragment,{children:[u.jsx(We,{label:"Line Length",value:r.lineLength,min:.1,max:2.5,step:.05,onChange:y=>n("lineLength",y)}),u.jsx(We,{label:"Line Width",value:r.lineWidth,min:.2,max:2.5,step:.05,onChange:y=>n("lineWidth",y)}),u.jsx(We,{label:"Line Thickness",value:r.lineThickness,min:.2,max:8,step:.1,suffix:"px",onChange:y=>n("lineThickness",y)}),u.jsx(We,{label:"Line Rotation",value:r.lineRotation,min:-180,max:180,step:1,suffix:"deg",onChange:y=>n("lineRotation",y)})]}),u.jsxs("div",{className:"control-columns",children:[u.jsxs("div",{className:"control-column",children:[u.jsx(We,{label:"Brightness",value:r.brightness,min:-50,max:50,step:1,onChange:y=>n("brightness",y)}),u.jsx(We,{label:"BG Dither",value:r.bgDither??0,min:0,max:3,step:.05,onChange:y=>n("bgDither",y)}),u.jsx(We,{label:"Inverse Dither",value:r.inverseDither??0,min:0,max:3,step:.05,onChange:y=>n("inverseDither",y)}),u.jsx(We,{label:"Character Spacing",value:r.charSpacing,min:.7,max:2,step:.05,suffix:"x",onChange:y=>n("charSpacing",y)}),Nx(r.style)&&u.jsx(We,{label:"Spacing",value:r.spacing??1,min:1,max:3,step:.05,suffix:"x",onChange:y=>n("spacing",y)}),u.jsx(We,{label:"Vignette",value:r.vignette??0,min:0,max:1,step:.05,onChange:y=>n("vignette",y)})]}),u.jsxs("div",{className:"control-column",children:[u.jsx(We,{label:"Contrast",value:r.contrast,min:.5,max:2.5,step:.1,onChange:y=>n("contrast",y)}),r.ditherType!=="none"&&u.jsx(We,{label:"Dither Strength",value:r.ditherStrength,min:0,max:2,step:.05,onChange:y=>n("ditherStrength",y)}),u.jsx(We,{label:"Font Size",value:r.fontSize,min:6,max:20,step:1,suffix:"px",onChange:y=>n("fontSize",y)}),u.jsx(We,{label:"Opacity",value:r.opacity??1,min:0,max:1,step:.05,onChange:y=>n("opacity",y)}),u.jsx(We,{label:"Border Glow",value:r.borderGlow??0,min:0,max:1,step:.05,onChange:y=>n("borderGlow",y)})]})]}),u.jsxs("div",{className:"control-row",children:[u.jsxs("div",{className:"control-row-head",children:[u.jsx("span",{className:"control-label",children:"Color Mode"}),u.jsxs("label",{className:"check-line compact",children:[u.jsx("input",{type:"checkbox",checked:r.invert,onChange:y=>n("invert",y.target.checked)}),u.jsx("span",{children:"Invert Color"})]})]}),u.jsx("div",{className:"tab-buttons color-mode-tabs",role:"tablist","aria-label":"Color Mode",children:Object.entries(Sx).map(([y,E])=>u.jsx("button",{type:"button",title:E,role:"tab","aria-selected":r.colorMode===y,className:r.colorMode===y?"active":"",onClick:()=>n("colorMode",y),children:E},y))})]}),r.colorMode==="custom"&&u.jsx(vy,{label:"Custom Color",sliderId:"custom-color-hue-slider",pickerId:"custom-color-picker",value:r.customColor,fallback:Ax,onChange:y=>n("customColor",y)}),u.jsxs("div",{className:"control-section",children:[u.jsxs("div",{className:"control-row",children:[u.jsx("span",{className:"control-label",children:"FX Preset"}),u.jsx("div",{className:"tab-buttons fx-preset-tabs",role:"tablist","aria-label":"FX Preset",children:Object.entries(xx).map(([y,E])=>u.jsx("button",{type:"button",title:E,role:"tab","aria-selected":r.overlayPreset===y,className:r.overlayPreset===y?"active":"",onClick:()=>n("overlayPreset",y),children:E},y))})]}),r.overlayPreset!=="none"&&u.jsxs(u.Fragment,{children:[u.jsx(We,{label:"FX Strength",value:r.overlayStrength,min:.05,max:1,step:.05,onChange:y=>n("overlayStrength",y)}),r.overlayPreset==="noise"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"control-row",children:[u.jsx("span",{className:"control-label",children:"Direction"}),u.jsx(su,{value:r.noiseDirection,onChange:y=>n("noiseDirection",y),ariaLabel:"Noise Direction"})]}),u.jsx(We,{label:"Noise Scale",value:r.noiseScale,min:4,max:96,step:1,onChange:y=>n("noiseScale",y)}),u.jsx(We,{label:"Noise Speed",value:r.noiseSpeed,min:0,max:3,step:.1,onChange:y=>n("noiseSpeed",y)})]}),r.overlayPreset==="waves"&&u.jsx(u.Fragment,{children:r.style==="dither"?u.jsxs(u.Fragment,{children:[u.jsx(We,{label:"Wave Amplitude",value:r.ditherWaveAmplitude??.3,min:0,max:1,step:.05,onChange:y=>n("ditherWaveAmplitude",y)}),u.jsx(We,{label:"Wave Frequency",value:r.ditherWaveFrequency??3,min:.5,max:8,step:.1,onChange:y=>n("ditherWaveFrequency",y)}),u.jsx(We,{label:"Wave Speed",value:r.ditherWaveSpeed??.05,min:0,max:.2,step:.005,onChange:y=>n("ditherWaveSpeed",y)}),u.jsx(We,{label:"Mouse Radius",value:r.ditherMouseRadius??.3,min:.05,max:.8,step:.01,onChange:y=>n("ditherMouseRadius",y)}),u.jsx("div",{className:"control-row",children:u.jsxs("div",{className:"control-row-head",children:[u.jsx("span",{className:"control-label",children:"Motion"}),u.jsxs("label",{className:"check-line compact",children:[u.jsx("input",{type:"checkbox",checked:r.ditherAnimationEnabled!==!1,onChange:y=>n("ditherAnimationEnabled",y.target.checked)}),u.jsx("span",{children:"Animate"})]})]})}),u.jsx("div",{className:"control-row",children:u.jsxs("div",{className:"control-row-head",children:[u.jsx("span",{className:"control-label",children:"Interaction"}),u.jsxs("label",{className:"check-line compact",children:[u.jsx("input",{type:"checkbox",checked:r.ditherMouseInteractionEnabled!==!1,onChange:y=>n("ditherMouseInteractionEnabled",y.target.checked)}),u.jsx("span",{children:"Mouse Reactive"})]})]})})]}):u.jsxs(u.Fragment,{children:[u.jsx(We,{label:"Wave Amplitude",value:r.dither2WaveAmplitude??.3,min:0,max:1,step:.05,onChange:y=>n("dither2WaveAmplitude",y)}),u.jsx(We,{label:"Wave Frequency",value:r.dither2WaveFrequency??3,min:.5,max:8,step:.1,onChange:y=>n("dither2WaveFrequency",y)}),u.jsx(We,{label:"Wave Speed",value:r.dither2WaveSpeed??.05,min:0,max:.2,step:.005,onChange:y=>n("dither2WaveSpeed",y)}),u.jsx(We,{label:"Mouse Radius",value:r.dither2MouseRadius??1,min:.1,max:1.5,step:.05,onChange:y=>n("dither2MouseRadius",y)}),u.jsx("div",{className:"control-row",children:u.jsxs("div",{className:"control-row-head",children:[u.jsx("span",{className:"control-label",children:"Motion"}),u.jsxs("label",{className:"check-line compact",children:[u.jsx("input",{type:"checkbox",checked:r.dither2AnimationEnabled!==!1,onChange:y=>n("dither2AnimationEnabled",y.target.checked)}),u.jsx("span",{children:"Animate"})]})]})}),u.jsx("div",{className:"control-row",children:u.jsxs("div",{className:"control-row-head",children:[u.jsx("span",{className:"control-label",children:"Interaction"}),u.jsxs("label",{className:"check-line compact",children:[u.jsx("input",{type:"checkbox",checked:r.dither2MouseInteractionEnabled!==!1,onChange:y=>n("dither2MouseInteractionEnabled",y.target.checked)}),u.jsx("span",{children:"Mouse Reactive"})]})]})})]})}),r.overlayPreset==="intervals"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"control-row",children:[u.jsx("span",{className:"control-label",children:"Direction"}),u.jsx(su,{value:r.intervalDirection,onChange:y=>n("intervalDirection",y),ariaLabel:"Intervals Direction"})]}),u.jsx(We,{label:"Interval Spacing",value:r.intervalSpacing,min:4,max:36,step:1,onChange:y=>n("intervalSpacing",y)}),u.jsx(We,{label:"Interval Speed",value:r.intervalSpeed,min:0,max:3,step:.1,onChange:y=>n("intervalSpeed",y)}),u.jsx(We,{label:"Interval Width",value:r.intervalWidth,min:1,max:8,step:1,onChange:y=>n("intervalWidth",y)})]}),r.overlayPreset==="beam"&&u.jsxs("div",{className:"control-row",children:[u.jsx("span",{className:"control-label",children:"Direction"}),u.jsx(su,{value:r.beamDirection,onChange:y=>n("beamDirection",y),ariaLabel:"Beam Direction"})]}),r.overlayPreset==="glitch"&&u.jsxs("div",{className:"control-row",children:[u.jsx("span",{className:"control-label",children:"Direction"}),u.jsx(su,{value:r.glitchDirection,onChange:y=>n("glitchDirection",y),ariaLabel:"Glitch Direction"})]}),r.overlayPreset==="crt"&&u.jsxs("div",{className:"control-row",children:[u.jsx("span",{className:"control-label",children:"Direction"}),u.jsx(su,{value:r.crtDirection,onChange:y=>n("crtDirection",y),ariaLabel:"CRT Direction"})]}),r.overlayPreset==="matrix"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"control-row",children:[u.jsx("span",{className:"control-label",children:"Direction"}),u.jsx(su,{value:r.matrixDirection,onChange:y=>n("matrixDirection",y),ariaLabel:"Matrix Direction"})]}),u.jsx(We,{label:"Matrix Scale",value:r.matrixScale,min:6,max:48,step:1,onChange:y=>n("matrixScale",y)}),u.jsx(We,{label:"Matrix Speed",value:r.matrixSpeed,min:.1,max:3.5,step:.1,onChange:y=>n("matrixSpeed",y)})]})]})]}),!m&&u.jsxs("div",{className:"control-section control-section-separated",children:[u.jsxs("div",{className:"control-row",children:[u.jsx("span",{className:"control-label",children:"Mouse Interaction"}),u.jsx("div",{className:"tab-buttons",role:"tablist","aria-label":"Mouse Interaction",children:Object.entries(_x).map(([y,E])=>u.jsx("button",{type:"button",role:"tab","aria-selected":r.mouseInteractionMode===y,className:r.mouseInteractionMode===y?"active":"",onClick:()=>n("mouseInteractionMode",y),children:E},y))})]}),u.jsx(We,{label:"Hover Strength",value:r.hoverStrength,min:4,max:64,step:1,onChange:y=>n("hoverStrength",y)}),u.jsx(We,{label:"Area Size",value:r.mouseAreaSize,min:40,max:640,step:1,suffix:"px",onChange:y=>n("mouseAreaSize",y)}),u.jsx(We,{label:"Spread",value:r.mouseSpread,min:.25,max:3,step:.05,suffix:"x",onChange:y=>n("mouseSpread",y)})]})]}),d&&u.jsxs("div",{className:"control-section control-section-separated",children:[u.jsx("div",{className:"control-row",children:u.jsx("span",{className:"control-label",children:"WebGL Overlay"})}),u.jsxs("div",{className:"control-row",children:[u.jsx("span",{className:"control-label",children:"Layer Type"}),u.jsx("div",{className:"tab-buttons fx-preset-tabs",role:"tablist","aria-label":"WebGL Layer Type",children:Object.entries(Cx).map(([y,E])=>u.jsx("button",{type:"button",title:E,role:"tab","aria-selected":(r.webglOverlayType||"lightning-rails")===y,className:(r.webglOverlayType||"lightning-rails")===y?"active":"",onClick:()=>n("webglOverlayType",y),children:E},y))})]}),u.jsxs("div",{className:"control-row",children:[u.jsx("span",{className:"control-label",children:"Affects ASCII"}),u.jsx("div",{className:"tab-buttons",role:"tablist","aria-label":"WebGL ASCII Effect",children:Object.entries(Mx).map(([y,E])=>{const M=String(!!r.webglOverlayAffectsAscii)===y;return u.jsx("button",{type:"button",role:"tab","aria-selected":M,className:M?"active":"",onClick:()=>n("webglOverlayAffectsAscii",y==="true"),children:E},y)})})]}),!r.webglOverlayAffectsAscii&&u.jsxs("div",{className:"control-row",children:[u.jsx("span",{className:"control-label",children:"Placement"}),u.jsx("div",{className:"tab-buttons",role:"tablist","aria-label":"WebGL Placement",children:Object.entries(Tx).map(([y,E])=>u.jsx("button",{type:"button",role:"tab","aria-selected":(r.webglOverlayPosition||"behind")===y,className:(r.webglOverlayPosition||"behind")===y?"active":"",onClick:()=>n("webglOverlayPosition",y),children:E},y))})]}),u.jsx(We,{label:"Opacity",value:r.webglOverlayOpacity??1,min:0,max:1,step:.05,onChange:y=>n("webglOverlayOpacity",y)}),u.jsx(We,{label:"Intensity",value:r.webglOverlayIntensity??.45,min:0,max:1,step:.05,onChange:y=>n("webglOverlayIntensity",y)}),u.jsx(We,{label:"Line Spread",value:r.webglOverlayLineSpread??.25,min:.1,max:.55,step:.01,onChange:y=>n("webglOverlayLineSpread",y)}),u.jsx(We,{label:"Pulse Speed",value:r.webglOverlayPulseSpeed??1,min:.2,max:4,step:.05,onChange:y=>n("webglOverlayPulseSpeed",y)}),u.jsx(We,{label:"Mouse Influence",value:r.webglOverlayMouseInfluence??1,min:0,max:2,step:.05,onChange:y=>n("webglOverlayMouseInfluence",y)}),u.jsx(We,{label:"Film Grain",value:r.webglOverlayGrain??.02,min:0,max:.12,step:.005,onChange:y=>n("webglOverlayGrain",y)}),u.jsx(vy,{label:"WebGL Color",sliderId:"webgl-overlay-hue-slider",pickerId:"webgl-overlay-color-picker",value:r.webglOverlayColor,fallback:zf,onChange:y=>n("webglOverlayColor",y)}),u.jsx("div",{className:"control-row",children:u.jsx("button",{type:"button",className:"webgl-remove-action",onClick:g,children:"Remove Layer"})})]})]})}function Dx(r,n){return r.label&&r.label.trim()?r.label.trim():`Camera ${n+1}`}function Ux({onUpload:r,isProcessing:n,onSourceModeChange:i,sourceMode:s,cameraError:l,cameraDeviceId:d,onCameraDeviceChange:m,sourceCaptureResolution:p,sourceCaptureResolutionOptions:g,onSourceCaptureResolutionChange:v,sourceUploadMaxMbLabel:y}){const[E,M]=x.useState(!1),[A,D]=x.useState([]),B=x.useRef(null);x.useEffect(()=>{let W=!0;const ee=async()=>{if(navigator.mediaDevices?.enumerateDevices)try{const J=(await navigator.mediaDevices.enumerateDevices()).filter(pe=>pe.kind==="videoinput");if(!W)return;D(J),!d&&J.length>0&&m?.(J[0].deviceId)}catch{W&&D([])}};return ee(),navigator.mediaDevices?.addEventListener?.("devicechange",ee),()=>{W=!1,navigator.mediaDevices?.removeEventListener?.("devicechange",ee)}},[d,m]);const H=W=>{if(W.preventDefault(),W.stopPropagation(),!(s!=="upload"||n)){if(W.type==="dragenter"||W.type==="dragover"){M(!0);return}W.type==="dragleave"&&M(!1)}},K=W=>{W.preventDefault(),W.stopPropagation(),M(!1),!(s!=="upload"||n)&&W.dataTransfer.files&&W.dataTransfer.files[0]&&r(W.dataTransfer.files[0])},ae=W=>{W.preventDefault(),W.target.files&&W.target.files[0]&&r(W.target.files[0])},F=s==="upload",Z=s==="camera";return u.jsxs("div",{className:"upload-widget interactive",children:[u.jsx("div",{className:"upload-head",children:u.jsx("span",{className:"label",children:"Source"})}),u.jsxs("div",{className:"upload-controls-row",children:[u.jsx("button",{type:"button",className:`source-mode-button interactive ${F?"is-active":""}`,onClick:()=>i?.("upload"),disabled:n,children:"Image / Video"}),u.jsx("button",{type:"button",className:`source-mode-button interactive ${Z?"is-active":""}`,onClick:()=>i?.("camera"),disabled:n,children:"Live Cam"}),u.jsxs("label",{className:"source-resolution-inline",children:[u.jsx("span",{children:"Quality"}),u.jsx("select",{className:"control-select",value:String(p||320),onChange:W=>{const ee=Number(W.target.value);Number.isFinite(ee)&&v?.(ee)},disabled:n,"aria-label":"Source capture quality",children:(g||[320,480,720]).map(W=>u.jsx("option",{value:W,children:W},W))})]})]}),Z&&u.jsxs("div",{className:"control-row",children:[u.jsx("label",{children:"Camera Device"}),u.jsxs("div",{className:"camera-device-menu",role:"tablist","aria-orientation":"vertical","aria-label":"Camera devices",children:[A.length===0&&u.jsx("div",{className:"camera-device-empty",children:"No camera detected"}),A.map((W,ee)=>{const q=W.deviceId||"",J=d===q;return u.jsx("button",{type:"button",role:"tab",className:`camera-device-item interactive ${J?"is-active":""}`,"aria-selected":J,onClick:()=>m?.(q),disabled:n||!q,children:Dx(W,ee)},W.deviceId||`${W.groupId}-${ee}`)})]})]}),F&&u.jsxs("div",{className:`upload-dropzone ${E?"is-drag-active":""}`,onDragEnter:H,onDragLeave:H,onDragOver:H,onDrop:K,onClick:()=>{n||B.current?.click()},children:[u.jsx("input",{ref:B,type:"file",accept:"image/*,video/*",onChange:ae,className:"upload-input",disabled:n}),u.jsx("div",{children:"Drop image/video or click to browse"}),u.jsx("div",{className:"upload-hint",children:"Supports: JPG, PNG, GIF, MP4, WebM"}),u.jsxs("div",{className:"upload-hint",children:["Max: ",y||"1MB"," (Free 1MB / Pro 10MB)"]})]}),n&&u.jsx("div",{className:"processing-indicator",children:"Processing source…"}),l&&u.jsx("div",{className:"camera-error",children:l})]})}const Fd=typeof window<"u"&&typeof window.location?.hostname=="string"?window.location.hostname.toLowerCase():"",Px=new Set(["localhost","127.0.0.1","::1"]),Gf=Fd==="asc11.com"||Fd.endsWith(".asc11.com"),Ap=Fd===""||Px.has(Fd)||Fd.endsWith(".local"),Bx=Gf?"https://api.asc11.com":"",zx=Gf?"sb_publishable_Pr7O3Wj9BfFWAD_MT_9hFg_E5BynUEA":"",Gx="https://api.asc11.com",Vx="sb_publishable_Pr7O3Wj9BfFWAD_MT_9hFg_E5BynUEA",Xl=Gf?Bx:Gx,As=Gf?zx:Vx,ka=!!(Xl&&As),se=ka?_v(Xl,As,{auth:{persistSession:!0,autoRefreshToken:!0}}):null;function Bp({className:r="",title:n="Copy"}){return u.jsxs("svg",{className:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[u.jsx("title",{children:n}),u.jsx("rect",{x:"9",y:"9",width:"10",height:"10",rx:"1.8",stroke:"currentColor",strokeWidth:"1.8"}),u.jsx("path",{d:"M6 15H5.2C4.54 15 4 14.46 4 13.8V5.2C4 4.54 4.54 4 5.2 4H13.8C14.46 4 15 4.54 15 5.2V6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}const Zm=16,Hx=16,$x=12,Fx={width:224,height:224,resize:"contain"},Wx=new Set([".mp4",".webm",".mov",".m4v",".ogv"]);function qx(r){const n=String(r||"").trim();if(!n)return"";const i=n.lastIndexOf(".");return i<0?"":n.slice(i).toLowerCase()}function Yx(r){if(String(r?.mime_type||"").toLowerCase().startsWith("video/"))return!0;const i=String(r?.path||"");return i.startsWith("data:video/")?!0:Wx.has(qx(i))}function Xx(r){return r.split("/").map(n=>encodeURIComponent(n)).join("/")}function by(r,n){const i=String(n||"").trim();if(!i||typeof window>"u")return"";const s=String(window.location.origin||"").replace(/\/$/,"");return s?`${s}/${r}/${encodeURIComponent(i)}`:""}function Kx(r){if(!r||typeof r!="object")return!1;const n=String(r.code||"").toUpperCase(),i=Number(r.status),s=`${String(r.message||"")} ${String(r.details||"")} ${String(r.hint||"")}`.toLowerCase();return n==="PGRST204"||n==="42703"||i===400&&/column|does not exist|schema cache|unknown field|could not find/i.test(s)?s.includes("slug"):!1}function Qx({onSelect:r,refreshToken:n=0,uploadActions:i=null,authUserId:s=""}){const[l,d]=x.useState([]),[m,p]=x.useState(!0),[g,v]=x.useState(""),[y,E]=x.useState(""),[M,A]=x.useState(""),[D,B]=x.useState(Zm),H=x.useRef(null),K=x.useRef(null);x.useEffect(()=>{let J=!0;return(async()=>{try{if(p(!0),v(""),ka&&se){let ke=null,qe=null;if({data:ke,error:qe}=await se.from("gallery_assets").select("id, user_id, name, path, folder, bucket, mime_type, slug, created_at").order("created_at",{ascending:!1}).order("path",{ascending:!0}),qe&&Kx(qe)&&({data:ke,error:qe}=await se.from("gallery_assets").select("id, user_id, name, path, folder, bucket, mime_type, created_at").order("created_at",{ascending:!1}).order("path",{ascending:!0})),qe)throw qe;if(!J)return;const ot=Array.isArray(ke)?ke.filter(P=>typeof P?.path=="string"&&P.path.trim().length>0).map(P=>{const ce=Yx(P);if(P.path.startsWith("data:"))return{id:P.id||P.path,name:P.name||(ce?"video":"image"),path:P.path,folder:P.folder||".",bucket:P.bucket||"library-images",src:P.path,originalSrc:P.path,assetType:ce?"video":"image",slug:typeof P.slug=="string"?P.slug:"",ownerId:typeof P.user_id=="string"?P.user_id:""};const ve=typeof P.bucket=="string"&&P.bucket?P.bucket:"library-images",{data:at}=se.storage.from(ve).getPublicUrl(P.path),{data:tt}=ce?{data:null}:se.storage.from(ve).getPublicUrl(P.path,{transform:Fx});return{id:P.id||P.path,name:P.name||P.path.split("/").at(-1)||(ce?"video":"image"),path:P.path,folder:P.folder||".",bucket:ve,src:tt?.publicUrl||at?.publicUrl||"",originalSrc:at?.publicUrl||"",assetType:ce?"video":"image",slug:typeof P.slug=="string"?P.slug:"",ownerId:typeof P.user_id=="string"?P.user_id:""}}):[];d(ot),B(Math.min(Zm,ot.length));return}if(!Ap)throw new Error("Library is unavailable on this host. Configure runtime settings.");const oe=await fetch("/api/gallery"),Te=await oe.json();if(!oe.ok)throw new Error(Te?.error||"Unable to load gallery");if(!J)return;const Oe=Array.isArray(Te.images)?Te.images.map(ke=>({...ke,slug:typeof ke?.slug=="string"?ke.slug:""})):[];d(Oe),B(Math.min(Zm,Oe.length))}catch(oe){if(!J)return;v(oe instanceof Error?oe.message:"Unable to load gallery")}finally{J&&p(!1)}})(),()=>{J=!1}},[s,n]);const ae=x.useMemo(()=>l.slice(0,D),[l,D]),F=D<l.length,Z=m&&ae.length===0,W=m?"Loading...":`${ae.length}/${l.length} assets`;x.useEffect(()=>{const J=H.current,pe=K.current;if(!J||!pe||!F||m||g)return;const oe=new IntersectionObserver(Te=>{Te.some(Oe=>Oe.isIntersecting)&&B(Oe=>Math.min(Oe+Hx,l.length))},{root:J,rootMargin:"200px 0px",threshold:.01});return oe.observe(pe),()=>oe.disconnect()},[l.length,F,m,g]);const ee=async J=>{if(!J||typeof J!="object")return;if(!ka||!se){v("Library deletion is unavailable on this host.");return}if(!s||J.ownerId!==s){v("You can only delete your own library assets.");return}const pe=String(J.id||"").trim();if(!pe){v("Missing asset id.");return}const oe=String(J.name||"this asset").trim()||"this asset";if(window.confirm(`Delete "${oe}" from Library?`)){E(pe),v("");try{const{error:Oe}=await se.from("gallery_assets").delete().eq("id",pe).eq("user_id",s);if(Oe)throw Oe;const ke=String(J.path||"").trim(),qe=String(J.bucket||"library-images").trim()||"library-images";ke&&!ke.startsWith("data:")&&await se.storage.from(qe).remove([ke]).catch(()=>{}),d(ot=>ot.filter(P=>P.id!==pe))}catch(Oe){v(Oe instanceof Error?Oe.message:"Failed to delete asset.")}finally{E("")}}},q=async J=>{const pe=String(J?.id||"").trim(),oe=by("library",J?.slug||J?.id);if(!(!pe||!oe))try{await navigator.clipboard.writeText(oe),A(pe),window.setTimeout(()=>{A(Te=>Te===pe?"":Te)},1400)}catch{v("Failed to copy permalink.")}};return u.jsxs("div",{className:"gallery-browser interactive",children:[u.jsxs("div",{className:"gallery-header",children:[u.jsxs("div",{className:"gallery-header-main",children:[u.jsx("span",{className:"label",children:"Browse Library"}),u.jsx("span",{className:"gallery-subtitle gallery-subtitle-inline",children:W})]}),i?u.jsx("div",{className:"library-upload-actions gallery-header-upload-actions",children:i}):null]}),g&&u.jsx("div",{className:"gallery-error",children:g}),!g&&u.jsxs("div",{className:"gallery-grid",ref:H,children:[Z?Array.from({length:$x}).map((J,pe)=>u.jsx("div",{className:"asset-card-shell",children:u.jsxs("div",{className:"gallery-item gallery-item-skeleton","aria-hidden":"true",children:[u.jsx("div",{className:"gallery-skeleton-media"}),u.jsx("span",{className:"gallery-skeleton-line gallery-skeleton-line-name"})]})},`gallery-skeleton-${pe+1}`)):ae.map(J=>{const pe=Ap?`/gallery-files/${Xx(J.path)}`:"",oe=J.src||pe,Te=J.originalSrc||J.src||pe;if(!oe||!Te)return null;const Oe=!!(s&&J.ownerId&&J.ownerId===s),ke=y&&String(J.id||"")===y,qe=by("library",J.slug||J.id),ot=M&&String(J.id||"")===M;return u.jsxs("div",{className:"asset-card-shell",children:[u.jsxs("button",{type:"button",className:"gallery-item",onClick:()=>r({...J,src:oe,originalSrc:Te}),disabled:!!ke,children:[J.assetType==="video"?u.jsx("video",{src:oe,muted:!0,playsInline:!0,preload:"metadata"}):u.jsx("img",{src:oe,alt:J.name,loading:"lazy"}),u.jsx("span",{className:"gallery-item-name",children:J.name})]}),qe&&u.jsx("button",{type:"button",className:`asset-card-permalink interactive ${Oe?"has-delete":""}`,"aria-label":`Copy permalink for ${J.name||"asset"}`,title:ot?"Copied":"Copy permalink",onClick:P=>{P.stopPropagation(),q(J)},disabled:!!ke,children:ot?"✓":u.jsx(Bp,{className:"asset-card-permalink-icon"})}),Oe&&u.jsx("button",{type:"button",className:"asset-card-delete interactive","aria-label":`Delete ${J.name||"asset"}`,title:"Delete",onClick:P=>{P.stopPropagation(),ee(J)},disabled:!!ke,children:ke?"...":"×"})]},J.id||J.path)}),F&&!Z&&u.jsx("div",{ref:K,className:"gallery-load-more",children:"Loading more..."})]}),!m&&!g&&l.length===0&&u.jsxs("div",{className:"gallery-empty",children:["No assets found in ",u.jsx("code",{children:"library-images"}),"."]})]})}const zp='a, area, [role="link"]';function Yl(r,n,i){return Math.max(n,Math.min(i,r))}function Gp(r,n){if(typeof r!="string")return n;const i=r.trim(),s=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(i);return s?s[1].length===3?`#${s[1].split("").map(d=>d+d).join("").toLowerCase()}`:i.toLowerCase():n}function Jx(r,n,i){if(!r?.head)return;let s=r.head.querySelector('meta[name="viewport"]');s||(s=r.createElement("meta"),s.setAttribute("name","viewport"),r.head.appendChild(s)),s.setAttribute("content",`width=${n}, height=${i}, initial-scale=1`)}function Zx(r){if(!r?.body)return;r.querySelectorAll(zp).forEach(i=>{i instanceof Element&&(i.setAttribute("data-ascii-link-disabled","true"),i.removeAttribute("href"),i.removeAttribute("target"),i.removeAttribute("rel"),i.removeAttribute("xlink:href"),i instanceof HTMLElement&&(i.setAttribute("aria-disabled","true"),(i.tabIndex>=0||i.hasAttribute("tabindex"))&&i.setAttribute("tabindex","-1")))})}function e2(r){if(!r?.head)return;const n=r.createElement("script");n.setAttribute("data-ascii-template-link-guard","true"),n.textContent=`
(() => {
  const disableLinks = () => {
    const nodes = document.querySelectorAll('${zp}');
    nodes.forEach((node) => {
      node.setAttribute('data-ascii-link-disabled', 'true');
      node.removeAttribute('href');
      node.removeAttribute('target');
      node.removeAttribute('rel');
      node.removeAttribute('xlink:href');
      if (typeof node.tabIndex === 'number' && node.tabIndex >= 0) node.setAttribute('tabindex', '-1');
      if (node.hasAttribute('tabindex')) node.setAttribute('tabindex', '-1');
      node.setAttribute('aria-disabled', 'true');
    });
  };
  disableLinks();
  document.addEventListener('click', (event) => {
    const target = event.target && event.target.closest ? event.target.closest('[data-ascii-link-disabled="true"]') : null;
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();
  }, true);
  document.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
  }, true);
})();
`,r.head.appendChild(n)}function t2(r,n){if(!r?.head)return;const i=Gp(n,"#000000"),s=r.createElement("style");s.setAttribute("data-ascii-template-sanitizer","true"),s.textContent=`
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}
body {
  background-color: ${i};
  transform: scale(var(--ascii-preview-content-scale, 1));
  transform-origin: top center;
  width: calc(100% / var(--ascii-preview-content-scale, 1));
  min-height: calc(100vh / var(--ascii-preview-content-scale, 1));
}
a[data-ascii-link-disabled="true"],
area[data-ascii-link-disabled="true"],
[role="link"][data-ascii-link-disabled="true"] {
  pointer-events: none !important;
  cursor: default !important;
}
`,r.head.appendChild(s)}function n2(r,n){if(!r?.documentElement)return;const i=Yl(Number(n)||1,.5,1);r.documentElement.style.setProperty("--ascii-preview-content-scale",String(i))}function a2(r,n){!r?.documentElement||!r?.body||(r.documentElement.setAttribute("data-ascii-template-theme",n),r.body.setAttribute("data-ascii-template-theme",n),r.documentElement.classList.toggle("dark",n==="dark"),r.documentElement.classList.toggle("light",n==="light"))}function r2(r,n){const i=Yl(Number(n.viewportWidth)||1280,240,2560),s=Yl(Number(n.viewportHeight)||960,240,2560),l=Gp(n.backgroundColor,"#000000"),d=Yl(Number(n.contentScale)||1,.5,1),m=`<meta name="viewport" content="width=${i}, height=${s}, initial-scale=1" data-ascii-template-preview-viewport="true" />`,p=`<style data-ascii-template-sanitizer>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}
body {
  background-color: ${l};
  transform: scale(${d});
  transform-origin: top center;
  width: calc(100% / ${d});
  min-height: calc(100vh / ${d});
}
a,
area,
[role="link"] {
  pointer-events: none !important;
  cursor: default !important;
}
</style>`,g=`<script data-ascii-template-link-guard>
(() => {
  const nodes = document.querySelectorAll('${zp}');
  nodes.forEach((node) => {
    node.setAttribute('data-ascii-link-disabled', 'true');
    node.removeAttribute('href');
    node.removeAttribute('target');
    node.removeAttribute('rel');
    node.removeAttribute('xlink:href');
    if (typeof node.tabIndex === 'number' && node.tabIndex >= 0) node.setAttribute('tabindex', '-1');
    if (node.hasAttribute('tabindex')) node.setAttribute('tabindex', '-1');
    node.setAttribute('aria-disabled', 'true');
  });
})();
<\/script>`;return/<!doctype|<html[\s>]/i.test(r)?/<\/head>/i.test(r)?r.replace(/<\/head>/i,`${m}
${p}
${g}
</head>`):`${m}
${p}
${g}
${r}`:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    ${m}
    ${p}
    ${g}
  </head>
  <body>${r}</body>
</html>`}function Rv(r,n={}){const i=typeof r=="string"?r.trim():"";if(!i)return"";const s=typeof n.token=="string"&&n.token?n.token:"__ASCII_DITHER_ASSET__",l=typeof n.assetMarkup=="string"?n.assetMarkup.trim():"",d=n.theme==="light"?"light":"dark",m=Yl(Number(n.viewportWidth)||1280,240,2560),p=Yl(Number(n.viewportHeight)||960,240,2560),g=Gp(n.backgroundColor,d==="light"?"#ffffff":"#000000"),v=Yl(Number(n.contentScale)||1,.5,1),y=i.includes(s)?i.replace(s,l):`${l}
${i}`;if(typeof DOMParser>"u")return r2(y,{viewportWidth:m,viewportHeight:p,backgroundColor:g,contentScale:v});const M=new DOMParser().parseFromString(y,"text/html");return a2(M,d),Jx(M,m,p),Zx(M),e2(M),t2(M,g),n2(M,v),`<!doctype html>
${M.documentElement.outerHTML}`}const i2="__ASCII_DITHER_ASSET__",Rp={width:1280,height:960};function wy(r,n){const i=String(n||"").trim();if(!i||typeof window>"u")return"";const s=String(window.location.origin||"").replace(/\/$/,"");return s?`${s}/${r}/${encodeURIComponent(i)}`:""}function s2(r,n={}){const i=n.theme==="light"?"light":"dark",s=Number(n.viewportWidth)>0?Number(n.viewportWidth):Rp.width,l=Number(n.viewportHeight)>0?Number(n.viewportHeight):Rp.height,d=typeof n.backgroundColor=="string"?n.backgroundColor:"#000000";return Rv(r,{token:i2,assetMarkup:'<div data-template-thumb-asset aria-hidden="true" style="position:absolute;inset:0;pointer-events:none;z-index:0;"></div>',theme:i,backgroundColor:d,viewportWidth:s,viewportHeight:l})}function o2({templates:r,loading:n,error:i,onSelect:s,onDelete:l,authUserId:d="",theme:m="dark",devicePreset:p,backgroundColor:g="#000000",uploadActions:v=null}){const[y,E]=x.useState(""),[M,A]=x.useState(""),D=Array.isArray(r)?r:[],B=n?"Loading...":`${D.length} template${D.length===1?"":"s"}`,H=p&&Number(p.width)>0&&Number(p.height)>0?p:Rp,K=`${H.width} / ${H.height}`,ae=async Z=>{if(!Z||typeof l!="function")return;const W=String(Z.id||"").trim();if(!W)return;const ee=String(Z.name||"this template").trim()||"this template";if(window.confirm(`Delete "${ee}" from Templates?`)){E(W);try{await l(Z)}catch{}finally{E("")}}},F=async Z=>{const W=String(Z?.id||"").trim(),ee=wy("templates",Z?.slug||Z?.id);if(!(!W||!ee))try{await navigator.clipboard.writeText(ee),A(W),window.setTimeout(()=>{A(q=>q===W?"":q)},1400)}catch{}};return u.jsxs("div",{className:"template-browser interactive",children:[u.jsxs("div",{className:"gallery-header",children:[u.jsxs("div",{className:"gallery-header-main",children:[u.jsx("span",{className:"label",children:"Templates"}),u.jsx("span",{className:"gallery-subtitle gallery-subtitle-inline",children:B})]}),u.jsx("div",{className:"template-meta-row",children:v})]}),i?u.jsx("div",{className:"gallery-error",children:i}):D.length>0?u.jsx("div",{className:"template-grid",children:D.map(Z=>{const W=String(Z.id||""),ee=!!(y&&W===y),q=!!(d&&Z.ownerId===d),J=wy("templates",Z.slug||Z.id),pe=!!(M&&W===M);return u.jsxs("div",{className:"asset-card-shell template-card-shell",children:[u.jsxs("button",{type:"button",className:"template-item",onClick:()=>s?.(Z.id),disabled:ee,children:[u.jsx("div",{className:"template-item-frame-wrap","aria-hidden":"true",style:{"--template-thumb-aspect":K,"--template-thumb-bg":g},children:u.jsx("iframe",{title:`${Z.name||"Template"} thumbnail`,className:"template-item-frame",loading:"lazy",sandbox:"allow-scripts",srcDoc:s2(Z.html,{theme:m,backgroundColor:g,viewportWidth:H.width,viewportHeight:H.height})})}),u.jsx("span",{className:"template-item-name",children:Z.name||"Untitled Template"}),u.jsx("span",{className:"template-item-type",children:(Z.type||"general").toUpperCase()}),u.jsx("span",{className:"template-item-summary",children:Z.summary||"No description available for this template."})]}),J&&u.jsx("button",{type:"button",className:`asset-card-permalink interactive ${q?"has-delete":""}`,"aria-label":`Copy permalink for ${Z.name||"template"}`,title:pe?"Copied":"Copy permalink",onClick:oe=>{oe.stopPropagation(),F(Z)},disabled:ee,children:pe?"✓":u.jsx(Bp,{className:"asset-card-permalink-icon"})}),q&&u.jsx("button",{type:"button",className:"asset-card-delete interactive","aria-label":`Delete ${Z.name||"template"}`,title:"Delete",onClick:oe=>{oe.stopPropagation(),ae(Z)},disabled:ee,children:ee?"...":"×"})]},Z.id)})}):u.jsxs("div",{className:"gallery-empty",children:["No templates found. Upload HTML files to ",u.jsx("code",{children:"templates-html"}),"."]})]})}function l2({className:r=""}){return u.jsx("svg",{className:r,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:u.jsx("path",{d:"M12.8 3.2L16.8 7.2M3.2 16.8H7.2L16.8 7.2L12.8 3.2L3.2 12.8V16.8Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"square",strokeLinejoin:"miter"})})}const c2=9;function Sy(r,n){const i=String(n||"").trim();if(!i||typeof window>"u")return"";const s=String(window.location.origin||"").replace(/\/$/,"");return s?`${s}/${r}/${encodeURIComponent(i)}`:""}function u2(r){if(!r)return"";const n=new Date(r);return Number.isNaN(n.getTime())?"":n.toLocaleString([],{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function d2(r){if(!r||typeof r!="object")return"";if(typeof r.preview_url=="string"&&r.preview_url)return r.preview_url;const n=r.source&&typeof r.source=="object"?r.source:null;return(typeof n?.type=="string"?n.type:r.source_type||"")==="video"?"":typeof n?.url=="string"?n.url:""}function h2({creations:r,loading:n,error:i,onSelect:s,onReload:l,onDelete:d,onEdit:m,onFeature:p,authUserId:g="",isAdminUser:v=!1,viewMode:y="featured",onViewModeChange:E}){const[M,A]=x.useState(""),[D,B]=x.useState(""),[H,K]=x.useState(""),ae=Array.isArray(r)?r:[],F=n&&ae.length===0,Z=y==="featured",W=y==="upcoming",ee=n?"Loading...":`${ae.length} ${W?"public ":Z?"featured ":""}creation${ae.length===1?"":"s"}`,q=async oe=>{if(!oe||typeof d!="function")return;const Te=String(oe.id||"").trim();if(!Te)return;const Oe=String(oe.name||"this creation").trim()||"this creation";if(window.confirm(`Delete "${Oe}" from Creations?`)){A(Te);try{await d(oe)}catch{}finally{A("")}}},J=async oe=>{const Te=String(oe?.id||"").trim(),Oe=Sy("creations",oe?.slug||oe?.id);if(!(!Te||!Oe))try{await navigator.clipboard.writeText(Oe),K(Te),window.setTimeout(()=>{K(ke=>ke===Te?"":ke)},1400)}catch{}},pe=async oe=>{if(!oe||typeof p!="function")return;const Te=String(oe.id||"").trim();if(Te){B(Te);try{await p(oe)}catch{}finally{B("")}}};return u.jsxs("div",{className:"gallery-browser interactive",children:[u.jsxs("div",{className:"gallery-header",children:[u.jsxs("div",{className:"gallery-header-main",children:[u.jsx("span",{className:"label",children:"Creations"}),u.jsx("span",{className:"gallery-subtitle gallery-subtitle-inline",children:ee})]}),u.jsxs("div",{className:"template-meta-row",children:[u.jsx("button",{type:"button",className:`export-copy creations-header-button ${Z?"is-active":""}`,onClick:()=>E?.("featured"),disabled:n,children:"FEATURED"}),u.jsx("button",{type:"button",className:`export-copy creations-header-button ${W?"is-active":""}`,onClick:()=>E?.("upcoming"),disabled:n,children:"UPCOMING"}),u.jsx("button",{type:"button",className:"export-copy",onClick:()=>l?.(),disabled:n,children:"REFRESH"})]})]}),i?u.jsx("div",{className:"gallery-error",children:i}):F||ae.length>0?u.jsx("div",{className:"gallery-grid",children:F?Array.from({length:c2}).map((oe,Te)=>u.jsx("div",{className:"asset-card-shell",children:u.jsxs("div",{className:"gallery-item creation-item gallery-item-skeleton","aria-hidden":"true",children:[u.jsx("div",{className:"gallery-skeleton-media"}),u.jsx("span",{className:"gallery-skeleton-line gallery-skeleton-line-name"}),u.jsx("span",{className:"gallery-skeleton-line gallery-skeleton-line-meta"})]})},`creations-skeleton-${Te+1}`)):ae.map(oe=>{const Te=d2(oe),Oe=u2(oe.created_at),ke=M&&String(oe.id||"")===M,qe=D&&String(oe.id||"")===D,ot=!!(v||g&&oe.ownerId===g),P=ot,ce=ot,ve=!!(v&&typeof p=="function"),at=Sy("creations",oe.slug||oe.id),tt=H&&String(oe.id||"")===H,k=["asset-card-permalink","interactive"];return P&&k.push("has-delete"),ce&&k.push("has-edit"),ve&&k.push("has-feature"),u.jsxs("div",{className:"asset-card-shell",children:[u.jsxs("button",{type:"button",className:"gallery-item creation-item",onClick:()=>s?.(oe),disabled:!!ke,children:[Te?u.jsx("img",{src:Te,alt:oe.name||"Creation",loading:"lazy"}):u.jsx("div",{className:"creation-item-placeholder",children:"No preview"}),u.jsx("span",{className:"gallery-item-name",children:oe.name||"Untitled Creation"}),u.jsx("span",{className:"creation-item-meta",children:Oe||"Unknown date"})]}),at&&u.jsx("button",{type:"button",className:k.join(" "),"aria-label":`Copy permalink for ${oe.name||"creation"}`,title:tt?"Copied":"Copy permalink",onClick:te=>{te.stopPropagation(),J(oe)},disabled:!!ke,children:tt?"✓":u.jsx(Bp,{className:"asset-card-permalink-icon"})}),ve&&u.jsx("button",{type:"button",className:`asset-card-feature interactive ${oe.featured?"is-featured":""}`,"aria-label":`${oe.featured?"Unfeature":"Feature"} ${oe.name||"creation"}`,title:oe.featured?"Unfeature":"Feature",onClick:te=>{te.stopPropagation(),pe(oe)},disabled:!!(ke||qe),children:qe?"…":oe.featured?"★":"☆"}),ce&&u.jsx("button",{type:"button",className:`asset-card-edit interactive ${P?"has-delete":""}`,"aria-label":`Edit ${oe.name||"creation"}`,title:"Edit",onClick:te=>{te.stopPropagation(),m?.(oe)},disabled:!!(ke||qe),children:u.jsx(l2,{className:"asset-card-permalink-icon"})}),P&&u.jsx("button",{type:"button",className:"asset-card-delete interactive","aria-label":`Delete ${oe.name||"creation"}`,title:"Delete",onClick:te=>{te.stopPropagation(),q(oe)},disabled:!!(ke||qe),children:ke?"...":"×"})]},oe.id||`${oe.name}-${oe.created_at||""}`)})}):u.jsx("div",{className:"gallery-empty",children:W?"No public creations found yet.":"No creations found. Use Publish to create one."})]})}function bf(r,n){const i=[],s=/(\[[^\]]+\]\(https?:\/\/[^\s)]+\)|`[^`]+`|\*\*[^*]+\*\*)/g;let l=0,d,m=0;for(;(d=s.exec(r))!==null;){const p=d.index,g=d[0];if(p>l&&i.push(r.slice(l,p)),g.startsWith("`")&&g.endsWith("`"))i.push(u.jsx("code",{children:g.slice(1,-1)},`${n}-code-${m}`));else if(g.startsWith("**")&&g.endsWith("**"))i.push(u.jsx("strong",{children:g.slice(2,-2)},`${n}-strong-${m}`));else if(g.startsWith("[")){const v=/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/.exec(g);v?i.push(u.jsx("a",{href:v[2],target:"_blank",rel:"noreferrer",children:v[1]},`${n}-link-${m}`)):i.push(g)}else i.push(g);l=p+g.length,m+=1}return l<r.length&&i.push(r.slice(l)),i}function f2({markdown:r}){const n=String(r||"").replace(/\r/g,"").split(`
`),i=[];let s=0,l=0;for(;s<n.length;){const d=n[s];if(!d.trim()){s+=1;continue}if(d.startsWith("```")){const g=[];for(s+=1;s<n.length&&!n[s].startsWith("```");)g.push(n[s]),s+=1;s<n.length&&(s+=1),i.push(u.jsx("pre",{children:u.jsx("code",{children:g.join(`
`)})},`md-${l}`)),l+=1;continue}const m=/^(#{1,3})\s+(.+)$/.exec(d);if(m){const g=m[1].length,v=m[2],y=bf(v,`h-${l}`);g===1&&i.push(u.jsx("h1",{children:y},`md-${l}`)),g===2&&i.push(u.jsx("h2",{children:y},`md-${l}`)),g===3&&i.push(u.jsx("h3",{children:y},`md-${l}`)),s+=1,l+=1;continue}if(/^-\s+/.test(d)){const g=[];for(;s<n.length&&/^-\s+/.test(n[s]);)g.push(n[s].replace(/^-\s+/,"")),s+=1;i.push(u.jsx("ul",{children:g.map((v,y)=>u.jsx("li",{children:bf(v,`li-${l}-${y}`)},`md-${l}-li-${y}`))},`md-${l}`)),l+=1;continue}if(/^\d+\.\s+/.test(d)){const g=[];for(;s<n.length&&/^\d+\.\s+/.test(n[s]);)g.push(n[s].replace(/^\d+\.\s+/,"")),s+=1;i.push(u.jsx("ol",{children:g.map((v,y)=>u.jsx("li",{children:bf(v,`oli-${l}-${y}`)},`md-${l}-li-${y}`))},`md-${l}`)),l+=1;continue}const p=[];for(;s<n.length&&n[s].trim()&&!n[s].startsWith("```")&&!/^(#{1,3})\s+/.test(n[s])&&!/^-\s+/.test(n[s])&&!/^\d+\.\s+/.test(n[s]);)p.push(n[s].trim()),s+=1;i.push(u.jsx("p",{children:bf(p.join(" "),`p-${l}`)},`md-${l}`)),l+=1}return u.jsx("div",{className:"markdown-renderer",children:i})}const m2=`
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,p2=`
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec3 u_click;
varying vec2 v_uv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

vec2 toCentered(vec2 unit) {
  vec2 centered = unit * 2.0 - 1.0;
  centered.x *= u_resolution.x / max(u_resolution.y, 1.0);
  return centered;
}

void main() {
  vec2 uv = v_uv;
  vec2 centered = toCentered(uv);
  vec2 mouse = toCentered(u_mouse);
  vec2 toMouse = mouse - centered;
  float mouseDist = length(toMouse);
  float mouseInfluence = smoothstep(0.75, 0.0, mouseDist);
  vec2 warpedUv = uv + toMouse * (mouseInfluence * 0.035);

  vec2 px = floor(warpedUv * u_resolution * 0.5);
  float tick = floor(u_time * 10.0);

  // Keep this minimal: two hash lookups + checkerboard dithering.
  float grainA = hash(px + vec2(tick, tick * 0.27));
  float grainB = hash(px * 0.5 + vec2(41.0, 73.0));
  float grain = mix(grainA, grainB, 0.32);
  float dither = mod(floor(px.x) + floor(px.y), 2.0);

  float speckles = step(0.88 - dither * 0.06, grain);
  float haze = smoothstep(0.92, 0.18, length(centered));
  float subtlePulse = 0.94 + 0.06 * sin(u_time * 0.45);
  float mouseGlow = smoothstep(0.44, 0.0, mouseDist) * 0.2;

  float clickExplosion = 0.0;
  if (u_click.z >= 0.0 && u_click.z < 2.0) {
    vec2 click = toCentered(u_click.xy);
    float clickDist = length(centered - click);
    float ringRadius = u_click.z * 0.55;
    float ring = exp(-pow((clickDist - ringRadius) * 26.0, 2.0));
    float core = smoothstep(0.24, 0.0, clickDist);
    float decay = exp(-u_click.z * 1.9);
    clickExplosion = (ring * 0.62 + core * 0.3) * decay;
  }

  float intensity =
    (speckles * 0.22 + grain * 0.08 + dither * 0.03 + mouseGlow + clickExplosion) * haze * subtlePulse;

  vec3 base = vec3(0.01, 0.012, 0.018);
  vec3 color = base + vec3(intensity);
  float alpha = clamp(0.2 + intensity * 0.75, 0.0, 0.85);

  gl_FragColor = vec4(color, alpha);
}
`;function xy(r,n,i){const s=r.createShader(n);return s?(r.shaderSource(s,i),r.compileShader(s),r.getShaderParameter(s,r.COMPILE_STATUS)?s:(r.deleteShader(s),null)):null}function g2(r,n,i){const s=xy(r,r.VERTEX_SHADER,n),l=xy(r,r.FRAGMENT_SHADER,i);if(!s||!l)return s&&r.deleteShader(s),l&&r.deleteShader(l),null;const d=r.createProgram();return d?(r.attachShader(d,s),r.attachShader(d,l),r.linkProgram(d),r.deleteShader(s),r.deleteShader(l),r.getProgramParameter(d,r.LINK_STATUS)?d:(r.deleteProgram(d),null)):(r.deleteShader(s),r.deleteShader(l),null)}function ep({className:r=""}){const n=x.useRef(null);return x.useEffect(()=>{const i=n.current;if(!i)return;const s=i.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"})||i.getContext("experimental-webgl");if(!s)return;const l=g2(s,m2,p2);if(!l){s.getExtension("WEBGL_lose_context")?.loseContext();return}const d=s.createBuffer();if(!d){s.deleteProgram(l);return}s.bindBuffer(s.ARRAY_BUFFER,d),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),s.STATIC_DRAW);const m=s.getAttribLocation(l,"a_position"),p=s.getUniformLocation(l,"u_resolution"),g=s.getUniformLocation(l,"u_time"),v=s.getUniformLocation(l,"u_mouse"),y=s.getUniformLocation(l,"u_click");let E=0,M=!0,A=0;const D={x:.5,y:.5},B={x:.5,y:.5},H={x:.5,y:.5,time:-1},K=q=>{const J=i.getBoundingClientRect();if(!J.width||!J.height)return;const pe=(q.clientX-J.left)/J.width,oe=(q.clientY-J.top)/J.height;D.x=Math.min(Math.max(pe,0),1),D.y=1-Math.min(Math.max(oe,0),1)},ae=q=>{K(q)},F=q=>{K(q),H.x=D.x,H.y=D.y,H.time=performance.now()*.001},Z=()=>{D.x=.5,D.y=.5},W=()=>{const q=i.getBoundingClientRect(),J=Math.min(window.devicePixelRatio||1,1.5),pe=Math.max(1,Math.round(q.width*J)),oe=Math.max(1,Math.round(q.height*J));(i.width!==pe||i.height!==oe)&&(i.width=pe,i.height=oe),s.viewport(0,0,i.width,i.height)},ee=q=>{if(!M)return;if(q-A<1e3/30){E=requestAnimationFrame(ee);return}A=q,W(),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(l),s.bindBuffer(s.ARRAY_BUFFER,d),s.enableVertexAttribArray(m),s.vertexAttribPointer(m,2,s.FLOAT,!1,0,0),s.uniform2f(p,i.width,i.height);const J=q*.001;if(B.x+=(D.x-B.x)*.12,B.y+=(D.y-B.y)*.12,s.uniform1f(g,J),v&&s.uniform2f(v,B.x,B.y),y){const pe=H.time>=0?J-H.time:-1;s.uniform3f(y,H.x,H.y,pe>2?-1:pe)}s.drawArrays(s.TRIANGLES,0,6),E=requestAnimationFrame(ee)};return window.addEventListener("resize",W),window.addEventListener("pointermove",ae,{passive:!0}),window.addEventListener("pointerdown",F,{passive:!0}),window.addEventListener("blur",Z),E=requestAnimationFrame(ee),()=>{M=!1,cancelAnimationFrame(E),window.removeEventListener("resize",W),window.removeEventListener("pointermove",ae),window.removeEventListener("pointerdown",F),window.removeEventListener("blur",Z),s.deleteBuffer(d),s.deleteProgram(l)}},[]),u.jsx("canvas",{ref:n,className:r,"aria-hidden":"true"})}const y2=`# Changelog

Major user-facing releases only.

## v0.8.1 - 2026-03-14
### Dot Screen + Dither Art Styles

- Added two new dot-based art styles: **Dot Screen** and **Dither**.
- Brought both styles into the shared editor system with standard **Color Mode**, **Light Mode**, and **Invert** behavior.
- Refined **Dither** so it uses the uploaded image/video content directly while preserving animated FX behavior.
- Moved wave motion controls into the shared **Waves** FX preset and aligned both styles with the broader FX pipeline.
- Added a dedicated **Spacing** control next to **Character Spacing** so dot, pixel, and square styles can open up the gap between rendered cells without changing the underlying shape scale.
- Tuned dot density and contrast so the new styles better match the scale and punch of the existing renderer styles.

## v0.8.0 - 2026-03-12
### WebGL Layer + Light Mode Refinement

### WEBGL Layer

- Added a dedicated **WebGL overlay layer** with its own control surface instead of treating motion overlays as a one-off effect.
- Expanded the WebGL layer into a selectable system of generative variants including **Lightning Rails**, **Atmospheric Folds**, **Network Dome**, **Ambient Starfield**, **Terrain Mesh**, **Topology Dots**, and **Radial Burst**.
- Added stronger WebGL controls including **layer type tabs**, **hue/color tuning**, **opacity tuning**, **Separate vs ASCII FX compositing**, **Behind vs Above placement**, and **remove layer** actions.
- Refined the Lightning Rails treatment with a redesigned shader and stronger color response.
- Improved WebGL behavior across the app with fixes for **ASCII FX animation**, **layer placement**, **mouse-coordinate mapping**, and **canvas/WebGL parallax alignment**.
- Improved **Template** WebGL reliability so template previews and exports better preserve layer rendering and animation behavior.

### Improve Light Mode

- Reworked light mode so it focuses on the **ASCII canvas stage** instead of fully re-skinning the entire editor chrome.
- Improved light-background readability in the sidebar and control surface while avoiding the earlier over-bright full-UI treatment.
- Strengthened light-mode inversion and tuned **contrast parity** so ASCII output stays closer to the dark-theme rendering baseline.
- Preserved ASCII **foreground hue** under light backgrounds so custom colors retain their character instead of washing out.
- Boosted light-mode ASCII **color saturation** for clearer, more vivid results on bright canvases.

## v0.7.0 - 2026-03-04
### Creation Publishing + Shareability Upgrade

- Added a full **Publish Creation** flow with preview, title, description, keywords, and visibility controls.
- Added **creation editing** UI for published items (metadata updates without leaving the app).
- Added **friendly permalinks** and route support across:
  - Library (\`/library\`, \`/library/:slug\`)
  - Templates (\`/templates\`, \`/templates/:slug\`)
  - Creations (\`/creations\`, \`/creations/:slug\`)
  - App modals/pages (\`/login\`, \`/pricing\`, \`/terms\`, \`/privacy\`)
- Improved browser history behavior so prev/next navigation works consistently across routes.

### Library / Templates / Creations Experience

- Refined card-grid browsing for all three sections with improved header layout and clearer actions.
- Added hover actions for owned items (open permalink, edit where applicable, delete with confirmation).
- Added placeholder/skeleton loading states for smoother perceived performance.
- Added featured-content behavior so highlighted items can be surfaced broadly.

### Export Experience Overhaul

- Reworked Export modal into clearer, task-based tabs (HTML+JS, React, Image, MP4, GIF).
- Added stronger export controls:
  - Image: PNG/JPG/WEBP with quality settings
  - MP4/GIF: resolution + quality controls with sensible defaults
- Improved export reliability and copy/download feedback.
- Clarified separation between:
  - **Host on ГОШКРЯК** (hosted JS export)
  - **Publish** (shareable creation)
- Added plan-aware export behavior, including watermark handling for free vs pro usage.

### Rendering Controls + Style Expansion

- Added and refined advanced controls including:
  - **Inverse Dither**
  - **BG Dither**
  - **Opacity**
  - **Vignette**
  - **Border Glow**
- Improved randomization behavior to preserve key framing settings and produce more intentional outcomes.
- Expanded style-specific controls:
  - Halftone shape options
  - Halftone rotation
  - Additional terminal/retro customization options

### Responsive + Layout Improvements

- Improved mobile spacing and control positioning for browser panels and bottom overlays.
- Improved right sidebar behavior and sizing consistency across breakpoints.
- Added sidebar toggle controls for more focused editing on smaller viewports.

### SEO + Social Sharing Pass

- Improved page-level metadata for primary routes and share pages.
- Added social preview image support across key public pages.
- Improved public-link consistency for richer sharing and indexing.

---

## v0.6.0 - 2026-02-27
### Platform Foundation Release

- Launched cloud-backed library/templates/presets/creations workflows.
- Introduced account system and profile surface.
- Added authenticated save/upload/publish flows.
- Shipped initial production export suite and publish pipeline.

---

## v0.5.0 - 2026-02-15
### Interaction + FX Refinement

- Expanded interactive ASCII behavior and effect controls.
- Improved responsiveness and editor usability during live tuning.

---

## v0.4.0 - 2026-02-15
### MP4 Export Introduction

- Added MP4 export workflow for animated ASCII output.

---

## v0.3.0 - 2026-02-14
### Presets System

- Added save/load preset management for repeatable styling.

---

## v0.2.0 - 2026-02-14
### Style System Expansion

- Added broader styling and FX controls for creative exploration.

---

## v0.1.0 - 2026-02-14
### Initial Release

- First release of the ASCII renderer and core editor UI.
`,_y=["classic","braille","halftone","dither","dither2","dotcross","line","particles","claude","retro","terminal"],Ey={classic:"Classic ASCII",braille:"Braille",halftone:"Halftone",dither:"Dot Screen",dither2:"Dither",dotcross:"Dot Cross",line:"Line",particles:"Particles",claude:"Claude Code",retro:"Retro Art",terminal:"Terminal"},tp="#050505",Cy=["standard","blocks","detailed","minimal","binary","custom","letters-alphabet","letters-lowercase","letters-mixed","letters-symbols","braille"],Wd=100,Nv={alphabet:"letters-alphabet",lowercase:"letters-lowercase",mixed:"letters-mixed",symbols:"letters-symbols"},Ty=["standard","sparse","dense"],My=["circle","square","diamond","pentagon","hexagon"],Vp={binary:" 010101",brackets:" []/\\<>",symbols:" $_+",mixed:" 01[]/\\<>$_+|",matrix:" 01{}[]/\\<>|_+-"},Ay=Object.keys(Vp),Ov={"amber-classic":{low:{r:20,g:12,b:6},high:{r:255,g:223,b:178}},"cyan-night":{low:{r:6,g:16,b:22},high:{r:166,g:240,b:255}},"violet-haze":{low:{r:17,g:10,b:26},high:{r:242,g:198,b:255}},"lime-pulse":{low:{r:10,g:18,b:8},high:{r:226,g:255,b:162}},"mono-ice":{low:{r:12,g:12,b:12},high:{r:245,g:248,b:255}}},Ry=Object.keys(Ov),Ny=["none","floyd-steinberg","bayer","atkinson"],Oy=["grayscale","color","green","amber","custom"],jy=["attract","push"],Cs=["up","down","left","right","top-left","top-right","bottom-left","bottom-right"],ky=Cs,Iy=Cs,v2=["*",".","+","x","#","@",":"],Ly=["none","noise","waves","intervals","beam","glitch","crt","matrix"],b2=["script","react","image","video","gif"],Ld=[{value:"png",label:"PNG",ext:"png",mime:"image/png",supportsQuality:!1},{value:"jpg",label:"JPG",ext:"jpg",mime:"image/jpeg",supportsQuality:!0},{value:"webp",label:"WEBP",ext:"webp",mime:"image/webp",supportsQuality:!0}],w2=[720,1080,2160],S2=[{value:"text",label:"Text Glyphs"},{value:"dots",label:"Circle Dots"}],x2=[.5,1,1.5,2],_2=[64,96,128,160,192,256,320],E2=[2,3,4,6,8,10,12],C2=[320,480,720,1080],T2=[320,480,720,1080,1440,2160],M2=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],A2=["#000000","#030712","#0b0f19","#111827","#1f2937","#1a1a1a"],R2=["#00ff99","#22d3ee","#f97316","#eab308","#f43f5e","#a78bfa"],np=["source","16:9","4:3","1:1","3:4","9:16"],N2={source:"Original","16:9":"16:9","4:3":"4:3","1:1":"1:1","3:4":"3:4","9:16":"9:16"},Dy=['"Helvetica Neue", Helvetica, Arial, sans-serif','"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif','"Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif','"Space Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif','"VT323", "Arial", sans-serif'],O2=["lightning-rails","atmospheric-folds","network-dome","ambient-starfield","terrain-mesh","topology-dots","radial-burst"],j2=["behind","above"],dt={charset:"standard",customCharset:" .:-=+*#%@",brailleVariant:"standard",fontSize:10,hoverStrength:24,mouseInteractionMode:"attract",mouseAreaSize:180,mouseSpread:1,charSpacing:1,spacing:1,renderFont:'"Helvetica Neue", Helvetica, Arial, sans-serif',outputAspect:"source",contrast:1,brightness:0,opacity:1,vignette:0,borderGlow:0,bgDither:0,inverseDither:0,invert:!1,ditherType:"floyd-steinberg",ditherStrength:.8,style:"classic",halftoneShape:"circle",halftoneSize:1,halftoneRotation:0,colorMode:"grayscale",terminalCharset:"binary",retroDuotone:"amber-classic",retroNoise:.45,backgroundColor:"#000000",customColor:"#00ff99",ditherWaveColor:"#808080",ditherAnimationEnabled:!0,ditherMouseInteractionEnabled:!0,ditherMouseRadius:.3,ditherColorNum:4,ditherWaveAmplitude:.3,ditherWaveFrequency:3,ditherWaveSpeed:.05,dither2WaveColor:"#666666",dither2AnimationEnabled:!0,dither2MouseInteractionEnabled:!0,dither2MouseRadius:1,dither2ColorNum:4,dither2PixelSize:2,dither2WaveAmplitude:.3,dither2WaveFrequency:3,dither2WaveSpeed:.05,particleDensity:.5,particleChar:"*",letterSet:"alphabet",claudeDensity:.7,lineLength:1,lineWidth:1,lineThickness:1.6,lineRotation:0,overlayPreset:"noise",overlayStrength:.45,noiseScale:24,noiseSpeed:1,noiseDirection:"right",intervalSpacing:12,intervalSpeed:1,intervalWidth:2,intervalDirection:"down",beamDirection:"right",glitchDirection:"right",crtDirection:"down",matrixDirection:"down",matrixScale:18,matrixSpeed:1,webglLayerEnabled:!1,webglOverlayType:"lightning-rails",webglOverlayPosition:"behind",webglOverlayAffectsAscii:!1,webglOverlayOpacity:1,webglOverlayIntensity:.45,webglOverlayLineSpread:.25,webglOverlayPulseSpeed:1,webglOverlayLightning:1,webglOverlayMouseInfluence:1,webglOverlayGrain:.02,webglOverlayColor:"#99bbff"},Ko={type:"procedural",proceduralPreset:"flow",proceduralSpeed:1,proceduralScale:1},k2=[320,480,720],I2=320,Il=.5,oo="Made in ГОШКРЯК",Mn={LIBRARY:"library",CREATIONS:"creations",RENDER:"render",TEMPLATE_LIBRARY:"template-library",TEMPLATE_PREVIEW:"template-preview"},Es={FEATURED:"featured",UPCOMING:"upcoming"},L2=Object.freeze({creation:"creations",template:"templates",library:"library"}),Uy=Object.freeze({creations:"creation",templates:"template",library:"library"}),D2=Object.freeze({login:"login",terms:"terms",privacy:"privacy",pricing:"pricing"}),U2=Object.freeze({login:"login",terms:"terms",privacy:"privacy",pricing:"pricing"}),P2="__ASCII_DITHER_ASSET__",ap=960,ou=[{id:"desktop",label:"Desktop",width:960,height:ap},{id:"tablet",label:"Tablet",width:768,height:ap},{id:"mobile",label:"Mobile",width:392,height:ap}],B2={overlayStrength:.5,matrixScale:15,matrixSpeed:.1},jv="ascii-dither-template-fps",z2=new Set(["const","let","var","function","return","if","else","for","while","switch","case","break","continue","new","try","catch","finally","throw","class","extends","import","from","export","default","async","await","null","true","false","typeof","instanceof","void","delete"]),rp=/(<!--.*?-->|\/\/.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|<\/?[a-zA-Z][\w:-]*|\/?>|\b[a-zA-Z_]\w*\b|\b\d+(?:\.\d+)?\b|[{}()[\].,;:+\-*/%<>=!&|^~?])/g,Gl={standard:" .:-=+*#%@",blocks:" ░▒▓█",detailed:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",minimal:" ·░█",binary:" 01","letters-alphabet":"ABCDEFGHIJKLMNOPQRSTUVWXYZ","letters-lowercase":"abcdefghijklmnopqrstuvwxyz","letters-mixed":"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz","letters-symbols":"@#$%&*+=-<>~",braille:" ⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿"},Py={standard:Gl.braille,sparse:" ⠁⠂⠄⠈⠐⠠⡀⢀⣀⣿",dense:" ⠃⠇⠏⠟⠿"},G2="o",By={...Vp},V2=new Set([".png",".jpg",".jpeg",".webp",".gif",".bmp",".avif"]),Hp=new Set([".mp4",".webm",".mov",".m4v",".ogv"]),kv=new Set([".html",".htm"]),ip="published-scripts",Ll="creations-media",zy="library-images",wf="templates-html",Gy="https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/esm",Pr="Storage is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY (or VITE_SUPABASE_ANON_KEY) in .env.local.",Qa="Sign in to use this feature.",sp=typeof window<"u"&&window.location?.origin?window.location.origin:void 0,H2="/terms/index.html",$2="/privacy/index.html",F2=39,op=`$${F2} one-time`,Dl="free",Np=1,Op=10,W2=Np*1024*1024,q2=Op*1024*1024,Vy="create-checkout-session",Y2="generate-metadata",X2="admin-manage-users",Hy=["Publish hosted JS exports","Export HTML/JS, full quality image, video, gif","No watermark on exports","Custom templates and publish creations","Private shares","Import 10mb image/video"],Dd="Sign in to ГОШКРЯК",K2=5e3,$y=68,Q2=500,J2=500,Z2=Q2+J2,Fy=["terms","privacy"],Sf={terms:{title:"Terms of Service",url:H2,offsetX:-36,offsetY:-28},privacy:{title:"Privacy Policy",url:$2,offsetX:36,offsetY:28}},xf=6,e_=40,t_=46,_f=Object.freeze({library:0,templates:0,creations:0,presets:0,exports:0}),lp=/((?:https?:\/\/|www\.)[^\s<>"'`]+)/gi,Ts=12,Vl=88,Hl=240,Ud="asc11_pro_checkout_pending",Ef="ГОШКРЯК",cp="ГОШКРЯК | ASCII Art Generator for Images and Video",n_="Create ASCII art for websites and marketing from images, video, live cam, and templates with advanced dithering and export tools.",Wy="ascii editor, ascii art generator, image to ascii, video to ascii, live cam ascii, webgl background, marketing design",a_="/og/home.jpg",up=Object.freeze({home:"/og/home.jpg",login:"/og/login.png",pricing:"/og/pricing.png",terms:"/og/terms.png",privacy:"/og/privacy.png",library:"/og/library.jpg",templates:"/og/templates.png",creations:"/og/creations.png"});let Pd=null,Bd=null;async function r_(){if(Pd)return Pd;if(Bd)return Bd;Bd=(async()=>{const[{FFmpeg:r},{fetchFile:n,toBlobURL:i}]=await Promise.all([N0(()=>import("./index-CUxsIblL.js"),[]),N0(()=>import("./index-607UPNXL.js"),[])]),s=new r,l=await i(`${Gy}/ffmpeg-core.js`,"text/javascript"),d=await i(`${Gy}/ffmpeg-core.wasm`,"application/wasm");return await s.load({coreURL:l,wasmURL:d}),Pd={ffmpeg:s,fetchFile:n},Pd})();try{return await Bd}catch(r){throw Pd=null,r}finally{Bd=null}}async function i_(r,n={}){if(!(r instanceof Blob))throw new Error("Missing WebM source for browser conversion.");const i=n.format==="gif"?"gif":"mp4",s=i==="gif"?Math.max(1,Math.min(240,Number(n.fps)||12)):Math.max(12,Math.min(60,Number(n.fps)||30)),l=Math.max(320,Math.min(1080,Number(n.gifResolution)||320)),d=Math.max(320,Math.min(2160,Number(n.mp4Resolution)||320)),m=$p(n.mp4Quality),{ffmpeg:p,fetchFile:g}=await r_(),v=`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,y=`input-${v}.webm`,E=`output-${v}.${i}`;try{await p.writeFile(y,await g(r)),i==="gif"?await p.exec(["-y","-i",y,"-vf",`scale=${l}:-1:flags=lanczos,fps=${s},split[s0][s1];[s0]palettegen=stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=5`,"-loop","0",E]):await p.exec(["-y","-i",y,"-vf",`scale=if(gte(iw\\,ih)\\,-2\\,${d}):if(gte(iw\\,ih)\\,${d}\\,-2),scale=trunc(iw/2)*2:trunc(ih/2)*2`,"-an","-c:v","libx264","-preset",m.preset,"-crf",String(m.crf),"-pix_fmt","yuv420p","-movflags","+faststart","-r",String(s),E]);const M=await p.readFile(E);if(!(M instanceof Uint8Array))throw new Error(`Unexpected ${i.toUpperCase()} output from converter.`);return new Blob([M],{type:i==="gif"?"image/gif":"video/mp4"})}finally{await p.deleteFile(y).catch(()=>{}),await p.deleteFile(E).catch(()=>{})}}function Ul(r){const n=Math.sin(r)*1e4;return n-Math.floor(n)}async function s_(r){const n=`Bearer ${r}`,{data:i,error:s}=await se.functions.invoke(Vy,{body:{},headers:{Authorization:n}});if(!s)return i;const l=Sa(s,"Failed to start Stripe checkout."),m=(Number(s?.status??s?.context?.status??s?.response?.status??s?.originalError?.status??0)||0)>=400||/non-2xx status code|http error|failed to send a request/i.test(l);if(!/401|unauthorized|jwt|auth/i.test(l)&&!m)throw s;const p=`${String(Xl||"").replace(/\/$/,"")}/functions/v1/${Vy}`;if(!p||!As)throw s;const g=await fetch(p,{method:"POST",headers:{"Content-Type":"application/json",apikey:As,Authorization:n},body:JSON.stringify({})});let v=null;try{v=await g.json()}catch{v=null}if(!g.ok){const y=typeof v?.error=="string"&&v.error.trim()?v.error:`Checkout session request failed (${g.status}).`;throw new Error(y)}return v}async function o_(r,n){const i=`${String(Xl||"").replace(/\/$/,"")}/functions/v1/${Y2}`;if(!i||!As)throw new Error("Metadata function is unavailable. Missing Supabase configuration.");const s=String(r||"").trim();if(!s)throw new Error("Missing access token for metadata generation.");const l=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json",apikey:As,Authorization:`Bearer ${s}`},body:JSON.stringify(n??{})});let d=null;try{d=await l.json()}catch{d=null}if(!l.ok){const m=typeof d?.error=="string"&&d.error.trim()?d.error:`Metadata request failed (${l.status}).`,p=new Error(m);throw p.status=Number(l.status||0),p}return d}async function dp(r,n){const i=`${String(Xl||"").replace(/\/$/,"")}/functions/v1/${X2}`;if(!i||!As)throw new Error("Admin management function is unavailable. Missing Supabase configuration.");const s=String(r||"").trim();if(!s)throw new Error("Missing access token for admin action.");const l=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json",apikey:As,Authorization:`Bearer ${s}`},body:JSON.stringify(n??{})});let d=null;try{d=await l.json()}catch{d=null}if(!l.ok){const m=typeof d?.error=="string"&&d.error.trim()?d.error:`Admin action failed (${l.status}).`,p=new Error(m);throw p.status=Number(l.status||0),p}return d}function l_(r){return String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Sa(r,n){if(r&&typeof r=="object"){if("message"in r&&typeof r.message=="string"&&r.message.trim())return r.message;if("error_description"in r&&typeof r.error_description=="string"&&r.error_description.trim())return r.error_description}return n}function Cf(r){if(!r||typeof r!="object")return!1;const n=String(r.code||"").toUpperCase(),i=Number(r.status),s=`${String(r.message||"")} ${String(r.details||"")} ${String(r.hint||"")}`.toLowerCase();return i===404||n==="PGRST204"||n==="PGRST205"?!0:s.includes("could not find the table")||s.includes("relation")&&s.includes("does not exist")}function qy(r){if(!r||typeof r!="object")return!1;const n=Number(r.status??r.statusCode??r.code??0),i=String(r.code||"").toUpperCase(),s=`${String(r.message||"")} ${String(r.details||"")} ${String(r.hint||"")}`.toLowerCase();return n===401||n===403||i==="PGRST301"||i==="401"||i==="42501"?!0:s.includes("jwt")||s.includes("unauthorized")||s.includes("forbidden")||s.includes("permission denied")||s.includes("insufficient privilege")||s.includes("invalid token")||s.includes("token expired")}function c_(r){if(!r)return"";const n=new Date(r);return Number.isNaN(n.getTime())?"":n.toLocaleString([],{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function u_({sourceType:r,settings:n}){const i=(E,M)=>String(E||"").trim().replace(/\s+/g," ").slice(0,M),s=r==="video",l=s?"motion design presentation":r==="image"?"image composition":"procedural composition",d=String(n?.style||"classic").trim().toLowerCase().replace(/[^a-z0-9]+/g," ").trim(),m=String(n?.colorMode||"grayscale").trim().toLowerCase().replace(/[^a-z0-9]+/g," ").trim(),p=String(n?.ditherType||"floyd steinberg").trim().toLowerCase().replace(/[^a-z0-9]+/g," ").trim(),g=i(`${d?d.replace(/\b\w/g,E=>E.toUpperCase()):"Classic"} ASCII ${s?"Motion Design":"Render"}`,Vl),v=i(s?`Animated ${l} with scaled typography and feature-focused visual hooks, using ${d||"classic"} style, ${m||"grayscale"} color mode, and ${p||"floyd steinberg"} dithering in ГОШКРЯК.`:`Generated ${l} using ${d||"classic"} style, ${m||"grayscale"} color mode, and ${p||"floyd steinberg"} dithering in ГОШКРЯК.`,Hl),y=Qo(["ascii","asc11",d||"classic",m||"grayscale",p||"floyd steinberg",s?"motion":r==="image"?"image":"procedural",...s?["motion design","product presentation","instagram slide","feature hooks"]:[],"dither","generative"],Ts);return{title:g||"ASCII Render",description:v||"Generated ASCII composition from ГОШКРЯК.",keywords:y.length?y:["ascii","asc11","dither"],source:"local"}}function Ie(r,n,i){return Math.max(n,Math.min(i,r))}function Tf(r){const n=String(r||"").trim().toLowerCase();return n==="jpeg"?"jpg":n==="jpg"||n==="png"||n==="webp"?n:"png"}function $p(r){const n=String(r||"medium").toLowerCase();return n==="low"?{quality:"low",crf:28,preset:"veryfast",bitrateFactor:.72}:n==="high"?{quality:"high",crf:19,preset:"medium",bitrateFactor:1.3}:{quality:"medium",crf:23,preset:"fast",bitrateFactor:1}}function d_(r,n,i){const s=Ie(Number(r)||320,320,2160),l=Ie(Number(n)||30,12,60),{bitrateFactor:d}=$p(i),p={320:1.4,480:2.2,720:4.2,1080:7.2,1440:11.8,2160:18.5}[s]||1.4,g=Math.max(.6,l/30);return Ie(p*g*d,1,24)}function h_(r,n,i,s,l,d){const m=Math.max(0,Math.min(d,s/2,l/2));r.beginPath(),r.moveTo(n+m,i),r.lineTo(n+s-m,i),r.quadraticCurveTo(n+s,i,n+s,i+m),r.lineTo(n+s,i+l-m),r.quadraticCurveTo(n+s,i+l,n+s-m,i+l),r.lineTo(n+m,i+l),r.quadraticCurveTo(n,i+l,n,i+l-m),r.lineTo(n,i+m),r.quadraticCurveTo(n,i,n+m,i),r.closePath()}function Yy(r,n,i,s=oo){if(!r||!Number.isFinite(n)||!Number.isFinite(i)||n<=0||i<=0)return;const l=String(s||oo).trim();if(!l)return;const d=Math.max(1,Math.min(n,i)),m=Ie(Math.round(d*.028),11,34),p=Ie(Math.round(d*.03),10,28),g=Ie(Math.round(m*.7),8,22),v=Ie(Math.round(m*.48),6,14),y=Math.round(m*1.18),E=Ie(Math.round(m*.44),6,16);r.save(),r.font=`600 ${m}px "Helvetica Neue", Helvetica, Arial, sans-serif`;const A=Math.max(0,r.measureText(l).width)+g*2,D=y+v*2,B=Math.max(0,n-p-A),H=Math.max(0,i-p-D);h_(r,B,H,A,D,E),r.fillStyle="rgba(0, 0, 0, 0.56)",r.fill(),r.lineWidth=1,r.strokeStyle="rgba(255, 255, 255, 0.26)",r.stroke(),r.font=`600 ${m}px "Helvetica Neue", Helvetica, Arial, sans-serif`,r.textAlign="right",r.textBaseline="bottom",r.shadowColor="rgba(0, 0, 0, 0.42)",r.shadowBlur=Math.max(2,Math.round(m*.25)),r.fillStyle="rgba(255, 255, 255, 0.94)",r.fillText(l,n-p-g,i-p-v),r.restore()}function vu(r=""){const n=String(r||"").trim();if(!n)return"";const i=n.lastIndexOf(".");return i<0?"":n.slice(i).toLowerCase()}function Mf(r){if(!r?.types)return!1;const n=r.types;return typeof n.includes=="function"?n.includes("Files"):typeof n.contains=="function"?n.contains("Files"):!1}function Br(r,n=""){if(!r||typeof r!="object")return!1;const i=String(r.code||"").toUpperCase(),s=Number(r.status),l=`${String(r.message||"")} ${String(r.details||"")} ${String(r.hint||"")}`.toLowerCase(),d=String(n||"").trim().toLowerCase(),m=d?l.includes(d):!1;return i==="PGRST204"||i==="42703"||s===400&&/column|does not exist|schema cache|unknown field|could not find/i.test(l)?d?m:!0:!1}function Xy(r){const n=Array.from(r?.items||[]);let i=!1,s=!1;for(const l of n){if(l?.kind!=="file")continue;const d=typeof l.type=="string"?l.type.toLowerCase():"";d.includes("html")&&(i=!0),(d.startsWith("image/")||d.startsWith("video/"))&&(s=!0)}return i?"html":s?"media":"file"}function Qo(r,n=Ts){const i=[],s=new Set,l=Ie(Number(n)||Ts,1,24),d=Array.isArray(r)?r:String(r||"").split(",").map(m=>m.trim()).filter(Boolean);for(const m of d){const p=String(m||"").trim().toLowerCase().replace(/\s+/g," ").slice(0,32);if(!(!p||s.has(p))&&(s.add(p),i.push(p),i.length>=l))break}return i}function Ky(r){return r?typeof r.type=="string"&&r.type.toLowerCase().includes("html")?!0:kv.has(vu(r.name)):!1}function Qy(r){if(!r)return!1;const n=typeof r.type=="string"?r.type.toLowerCase():"";if(n.startsWith("image/")||n.startsWith("video/"))return!0;const i=vu(r.name);return V2.has(i)||Hp.has(i)}function Jy(r){if(!r)return!1;if((typeof r.type=="string"?r.type.toLowerCase():"").startsWith("video/"))return!0;const i=vu(r.name||"");return Hp.has(i)}function Zy(r){const n=String(r||"").trim();if(!n)return"dropped-template.html";const i=n.replace(/[^a-zA-Z0-9._/-]/g,"-");return i?kv.has(vu(i))?i:`${i}.html`:"dropped-template.html"}function ev(r){const n=vu(r),s=(n?String(r||"").slice(0,-n.length):String(r||"")).replace(/[-_]+/g," ").replace(/\s+/g," ").trim();return s?s.split(" ").filter(Boolean).map(l=>l.charAt(0).toUpperCase()+l.slice(1)).join(" "):"Dropped Template"}function tv(r){if(typeof r!="string"||!r.trim())return"Dropped HTML template.";const n=r.replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," "),i=n.match(/<title[^>]*>([\s\S]*?)<\/title>/i),s=n.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i),d=(i?.[1]||s?.[1]||n).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();return d?d.length>140?`${d.slice(0,137).trimEnd()}...`:d:"Dropped HTML template."}function Wl(r,n="asset"){return String(r||"").trim().replace(/[^a-zA-Z0-9._-]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||n}function Af(r,n){const i=String(r||"uploads").split("/").map(m=>Wl(m,"uploads")).filter(Boolean).join("/"),s=Wl(n,"asset"),l=new Date().toISOString().replace(/[-:.TZ]/g,""),d=typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${i}/${l}-${d}-${s}`}function nv(r,n){const i=String(r||"").trim(),s=String(n).trim();if(!i||!s)return"";try{const l=new URL(i),d="/storage/v1/object/public/",m=l.pathname.indexOf(d);if(m<0)return"";const p=l.pathname.slice(m+d.length);return p.startsWith(`${s}/`)?decodeURIComponent(p.slice(s.length+1)):""}catch{return""}}function th(r,n="item"){return String(r||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||n}function lu(r){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(r||"").trim())}function Pl(r){if(!r||typeof r!="object")return"";const n=th(r.slug||"","");if(n)return n;const i=String(r.id||"").trim().toLowerCase();return th(i,"")}function hp(r){if(!r)return null;const i=String(r.pathname||"").trim().split("/").map(p=>p.trim().toLowerCase()).filter(Boolean);if(i.length>=2){const p=Uy[i[0]],g=decodeURIComponent(i[1]||"").trim(),v=th(g,"");if(p&&(v||g))return{kind:p,value:v,rawValue:g,match:"slug"}}if(i.length===1){const p=Uy[i[0]];if(p)return{kind:p,value:"",match:"list"}}const s=new URLSearchParams(String(r.search||"")),l=String(s.get("creation")||"").trim();if(l)return{kind:"creation",value:l,match:"id"};const d=String(s.get("template")||"").trim();if(d)return{kind:"template",value:d,match:"id"};const m=String(s.get("library")||"").trim();return m?{kind:"library",value:m,match:"id"}:null}function zd(r){if(!r)return"";const i=String(r.pathname||"").trim().split("/").map(s=>s.trim().toLowerCase()).filter(Boolean);return i.length!==1?"":U2[i[0]]||""}function ii(r,n=""){return String(r||"").replace(/\s+/g," ").trim()||n}function Ja({name:r,property:n,content:i=""}){if(typeof document>"u")return;const s=r?`meta[name="${r}"]`:`meta[property="${n}"]`;let l=document.head.querySelector(s);l||(l=document.createElement("meta"),r&&l.setAttribute("name",r),n&&l.setAttribute("property",n),document.head.appendChild(l)),l.setAttribute("content",String(i||""))}function f_(r){if(typeof document>"u")return;let n=document.head.querySelector('link[rel="canonical"]');n||(n=document.createElement("link"),n.setAttribute("rel","canonical"),document.head.appendChild(n)),n.setAttribute("href",r)}function m_(r){const n=String(r?.message||"").toLowerCase();return!!(String(r?.statusCode||r?.status||"").trim()==="403"||n.includes("row-level security")||n.includes("violates row-level security"))}function p_(r){return new Promise((n,i)=>{try{const s=new FileReader;s.onload=()=>{const l=typeof s.result=="string"?s.result:"";if(!l){i(new Error("Unable to read media file."));return}n(l)},s.onerror=()=>i(new Error("Unable to read media file.")),s.readAsDataURL(r)}catch{i(new Error("Unable to read media file."))}})}function io(r){return new Promise((n,i)=>{try{const s=new FileReader;s.onload=()=>{const l=typeof s.result=="string"?s.result:"";if(!l){i(new Error("Unable to read blob data."));return}n(l)},s.onerror=()=>i(new Error("Unable to read blob data.")),s.readAsDataURL(r)}catch{i(new Error("Unable to read blob data."))}})}function fp(r,n=2,i=4096){const s=Ie(Math.round(Number(r)||0),n,i);return s%2===0?s:s<=n?n:s-1}function g_(r,n,i){const s=Math.max(1,Number(r)||1),l=Math.max(1,Number(n)||1),d=fp(i,32,4096),m=Math.min(1,d/Math.max(s,l));return{width:fp(Math.max(2,Math.round(s*m)),2,4096),height:fp(Math.max(2,Math.round(l*m)),2,4096)}}async function y_(r,n={}){if(!(r instanceof Blob))throw new Error("Video source is unavailable for code export.");if(typeof window>"u"||typeof document>"u")throw new Error("Inline video export is unavailable in this environment.");if(typeof window.MediaRecorder>"u")throw new Error("MediaRecorder is unavailable in this browser.");if(typeof document.createElement("canvas").captureStream!="function")throw new Error("Canvas stream capture is unavailable in this browser.");const s=URL.createObjectURL(r),l=document.createElement("video");l.preload="metadata",l.muted=!0,l.playsInline=!0,l.loop=!1,l.crossOrigin="anonymous";let d=null,m=null,p=null,g=null;try{await new Promise((J,pe)=>{let oe=!1,Te=null;const Oe=()=>{l.onloadedmetadata=null,l.onerror=null,Te&&(window.clearTimeout(Te),Te=null)},ke=qe=>{oe||(oe=!0,Oe(),pe(new Error(qe)))};l.onloadedmetadata=()=>{oe||(oe=!0,Oe(),J())},l.onerror=()=>ke("Unable to decode source video."),Te=window.setTimeout(()=>ke("Timed out reading source video metadata."),12e3),l.src=s,l.load()});const v=Number.isFinite(l.duration)&&l.duration>0?l.duration:0;if(!v)throw new Error("Source video duration is unavailable.");const y=Math.max(1,l.videoWidth||1),E=Math.max(1,l.videoHeight||1),M=Ie(Number(n.fps)||6,1,24),A=Ie(Number(n.maxEdge)||128,32,4096),D=Ie(Number(n.maxBytes)||100*1024,8*1024,8*1024*1024),B=g_(y,E,A),H=Ie(Math.round(D*8/Math.max(.25,v)*.82),12e3,32e4),K=document.createElement("canvas");K.width=B.width,K.height=B.height;const ae=K.getContext("2d");if(!ae)throw new Error("Unable to initialize video export canvas.");d=K.captureStream(M);const Z=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(J=>window.MediaRecorder.isTypeSupported(J))||"",W={videoBitsPerSecond:H};Z&&(W.mimeType=Z);const ee=[];m=new window.MediaRecorder(d,W);const q=await new Promise((J,pe)=>{let oe=!1;const Te=()=>{l.onended=null,l.onerror=null,p&&(cancelAnimationFrame(p),p=null),g&&(window.clearTimeout(g),g=null)},Oe=ot=>{oe||(oe=!0,Te(),pe(new Error(ot)))},ke=()=>{try{ae.drawImage(l,0,0,K.width,K.height)}catch{}l.ended||(p=requestAnimationFrame(ke))};m.ondataavailable=ot=>{ot.data&&ot.data.size>0&&ee.push(ot.data)},m.onerror=()=>Oe("Video encoding failed."),m.onstop=()=>{if(!oe){if(oe=!0,Te(),!ee.length){pe(new Error("No video frames were encoded."));return}J(new Blob(ee,{type:m.mimeType||Z||"video/webm"}))}},l.onended=()=>{m.state!=="inactive"&&m.stop()},l.onerror=()=>Oe("Source video playback failed.");const qe=Math.max(4e3,Math.round(v*1e3)+5e3);g=window.setTimeout(()=>{m.state!=="inactive"&&m.stop()},qe),l.currentTime=0,ae.clearRect(0,0,K.width,K.height),m.start(200),l.play().then(()=>{ke()}).catch(()=>{m.state!=="inactive"&&m.stop(),Oe("Autoplay was blocked while preparing inline video export.")})});return{blob:q,width:B.width,height:B.height,durationSeconds:v,fps:M,targetBytes:D,actualBytes:q.size,exceededTarget:q.size>D}}finally{if(p&&cancelAnimationFrame(p),g&&window.clearTimeout(g),m&&m.state!=="inactive")try{m.stop()}catch{}d&&d.getTracks().forEach(v=>v.stop());try{l.pause()}catch{}l.removeAttribute("src"),l.load?.(),URL.revokeObjectURL(s)}}function v_(r,n="bin"){const i=String(r||"").toLowerCase().trim();if(!i.includes("/"))return n;const s=i.split("/")[1]?.split(";")[0]?.trim()||"";return s?s==="jpeg"?"jpg":s==="svg+xml"?"svg":s==="quicktime"?"mov":s==="x-matroska"?"mkv":s==="x-msvideo"?"avi":s.replace(/[^a-z0-9]+/g,"")||n:n}function Of(r){if(!r||typeof r!="object")return"";const n=r.user_metadata||{},i=[n.full_name,n.name,n.display_name,n.preferred_username,r.email];for(const s of i){const l=String(s||"").trim();if(l)return l}return""}function b_(r){const n=Of(r);if(!n)return"";const i=n.split(/\s+/).map(s=>s.trim()).filter(Boolean);return i.length?i.length===1?i[0].slice(0,2).toUpperCase():`${i[0][0]||""}${i[1][0]||""}`.toUpperCase():n.charAt(0).toUpperCase()}function jp(r){const n=String(r||"").trim();if(!n)return"";const i=/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(n)?n:`https://${n}`;try{const s=new URL(i);return s.protocol!=="http:"&&s.protocol!=="https:"?"":s.toString()}catch{return""}}function w_(r){const n=Number(r);return!Number.isFinite(n)||n<0?0:Math.trunc(n)}function av(r){const n=Number(r);if(!Number.isFinite(n)||n<0)return"0 MB";const i=n/(1024*1024);return i>=10?`${i.toFixed(1)} MB`:`${i.toFixed(2)} MB`}function S_(r){const n=String(r||"");if(!n.trim())return n;const i=[];let s=0;lp.lastIndex=0;let l=lp.exec(n);for(;l;){const[d]=l,m=l.index,p=m+d.length;m>s&&i.push(n.slice(s,m));const g=jp(d);g?i.push(u.jsx("a",{href:g,target:"_blank",rel:"noreferrer noopener",children:d},`${g}-${m}`)):i.push(d),s=p,l=lp.exec(n)}return s<n.length&&i.push(n.slice(s)),i}function br(r,n="#ffffff"){if(typeof r!="string")return n;const i=r.trim(),s=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(i);return s?s[1].length===3?`#${s[1].split("").map(d=>d+d).join("").toLowerCase()}`:i.toLowerCase():n}function kp(r,n="#ffffff"){const i=br(r,n),s=255-Number.parseInt(i.slice(1,3),16),l=255-Number.parseInt(i.slice(3,5),16),d=255-Number.parseInt(i.slice(5,7),16);return`#${s.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}${d.toString(16).padStart(2,"0")}`}function Iv(r){return r==="dither"||r==="dither2"}function mp(r){return br(r?.backgroundColor,"#000000")}function x_(r){const n=String(r?.colorMode||"grayscale");return n==="color"?"#7dc3ff":n==="green"?"#7fff9f":n==="amber"?"#ffc86b":n==="custom"?br(r?.customColor,"#fff27b"):"#f4f6ff"}function Lv(r,n=24){if(!r||!r.width||!r.height)return!1;try{const i=Math.max(8,Math.min(192,Math.floor(n))),s=document.createElement("canvas");s.width=i,s.height=i;const l=s.getContext("2d",{willReadFrequently:!0});if(!l)return!1;l.clearRect(0,0,s.width,s.height),l.drawImage(r,0,0,s.width,s.height);const{data:d}=l.getImageData(0,0,s.width,s.height);for(let m=0;m<d.length;m+=4)if(d[m]||d[m+1]||d[m+2]||d[m+3])return!0}catch{return!1}return!1}function __(r){if(!r||!r.width||!r.height)return null;try{const n=r.getContext("webgl2",{preserveDrawingBuffer:!0})||r.getContext("webgl",{preserveDrawingBuffer:!0})||r.getContext("webgl2")||r.getContext("webgl");if(!n)return null;const i=Math.max(1,n.drawingBufferWidth||r.width||1),s=Math.max(1,n.drawingBufferHeight||r.height||1),l=new Uint8Array(i*s*4);typeof n.finish=="function"&&n.finish(),n.readPixels(0,0,i,s,n.RGBA,n.UNSIGNED_BYTE,l);const d=document.createElement("canvas");d.width=i,d.height=s;const m=d.getContext("2d");if(!m)return null;const p=m.createImageData(i,s),g=i*4;for(let v=0;v<s;v+=1){const y=(s-v-1)*g,E=y+g;p.data.set(l.subarray(y,E),v*g)}return m.putImageData(p,0,0),Lv(d)?d:null}catch{return null}}function rv(r,n,i,s,l=1,d=null){if(!r||!n||i<=0||s<=0)return!1;const m=Ie(Number(l)||0,0,1);if(m<=.001)return!1;const p=E=>{try{const M=document.createElement("canvas"),D=Math.min(1,512/Math.max(i,s,1));M.width=Math.max(1,Math.floor(i*D)),M.height=Math.max(1,Math.floor(s*D));const B=M.getContext("2d",{willReadFrequently:!0});return B?(B.clearRect(0,0,M.width,M.height),B.drawImage(E,0,0,M.width,M.height),Lv(M,96)):!1}catch{return!1}},g=E=>{r.save(),r.globalAlpha=m,r.globalCompositeOperation="screen",r.drawImage(E,0,0,i,s),r.restore()};if(p(n))return g(n),!0;const v=typeof d=="function"?d():null;if(v&&p(v))return g(v),!0;const y=__(n);return y&&p(y)?(g(y),!0):(g(n),!0)}function E_(r,n,i={}){const s=br(i.dark,"#000000"),l=br(i.light,kp(s,"#ffffff")),d={...r},m=!!r.invert;return n==="light"?(d.backgroundColor=l,d.invert=m,d.themeOutputInvert=!0,d.colorMode=r.colorMode,d):(d.backgroundColor=s,d.invert=m,d.themeOutputInvert=!1,d)}function C_({device:r}){return r==="mobile"?u.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[u.jsx("rect",{x:"7",y:"2.8",width:"10",height:"18.4",rx:"2",ry:"2",fill:"none",stroke:"currentColor",strokeWidth:"1.6"}),u.jsx("circle",{cx:"12",cy:"18.4",r:"0.9",fill:"currentColor"})]}):r==="tablet"?u.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[u.jsx("rect",{x:"4.5",y:"2.7",width:"15",height:"18.6",rx:"1.8",ry:"1.8",fill:"none",stroke:"currentColor",strokeWidth:"1.6"}),u.jsx("circle",{cx:"12",cy:"18.7",r:"0.85",fill:"currentColor"})]}):u.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[u.jsx("rect",{x:"3.1",y:"4.6",width:"17.8",height:"12.2",rx:"1.4",ry:"1.4",fill:"none",stroke:"currentColor",strokeWidth:"1.6"}),u.jsx("path",{d:"M9 20.1h6.1M11.8 16.8v3.3",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}function T_({theme:r}){return r==="light"?u.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[u.jsx("circle",{cx:"12",cy:"12",r:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.7"}),u.jsx("path",{d:"M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.6 5.4l-1.7 1.7M7.1 16.9l-1.7 1.7M18.6 18.6l-1.7-1.7M7.1 7.1 5.4 5.4",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})]}):u.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u.jsx("path",{d:"M19.2 14.7a7.6 7.6 0 1 1-9.9-9.9A8.3 8.3 0 0 0 19.2 14.7Z",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"})})}function M_(){return u.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[u.jsx("path",{d:"M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),u.jsx("path",{d:"M15 21V3",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function A_(){return u.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"user-avatar-icon",children:[u.jsx("circle",{cx:"12",cy:"8.2",r:"3.3",fill:"none",stroke:"currentColor",strokeWidth:"1.7"}),u.jsx("path",{d:"M5.5 19.1c1.7-3.6 4.1-5 6.5-5s4.8 1.4 6.5 5",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})]})}function R_(){return u.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"login-action-icon login-google-icon",children:[u.jsx("path",{d:"M21.56 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h5.36a4.6 4.6 0 0 1-1.99 3.01v2.5h3.22c1.88-1.73 2.97-4.28 2.97-7.54Z",fill:"#4285F4"}),u.jsx("path",{d:"M12 22c2.7 0 4.96-.9 6.62-2.19l-3.22-2.5c-.9.6-2.05.95-3.4.95-2.62 0-4.84-1.77-5.63-4.15H3.04v2.58A10 10 0 0 0 12 22Z",fill:"#34A853"}),u.jsx("path",{d:"M6.37 14.11a5.98 5.98 0 0 1 0-3.82V7.71H3.04a10 10 0 0 0 0 8.98l3.33-2.58Z",fill:"#FBBC04"}),u.jsx("path",{d:"M12 5.74c1.47 0 2.79.5 3.83 1.49l2.87-2.87A9.96 9.96 0 0 0 12 2a10 10 0 0 0-8.96 5.71l3.33 2.58C7.16 7.51 9.38 5.74 12 5.74Z",fill:"#EA4335"})]})}function N_(){return u.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"login-action-icon login-email-icon",children:[u.jsx("rect",{x:"3.1",y:"5.4",width:"17.8",height:"13.2",rx:"1.6",ry:"1.6",fill:"none",stroke:"currentColor",strokeWidth:"1.6"}),u.jsx("path",{d:"m4.7 7 7.3 6 7.3-6",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]})}function ua({variant:r="button"}){const n=r==="modal",i=x.useId().replace(/:/g,""),s=`${n?"login-modal":"login-button"}-gradient-${i}`,l=n?"login-svg-line-border login-svg-line-border-modal":"login-svg-line-border login-svg-line-border-button";return u.jsxs("svg",{className:l,viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",focusable:"false",children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:s,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#e2e8f0",stopOpacity:n?"0.08":"0.06"}),u.jsx("stop",{offset:"38%",stopColor:"#f8fafc",stopOpacity:n?"0.4":"0.34"}),u.jsx("stop",{offset:"70%",stopColor:"#e2e8f0",stopOpacity:n?"0.2":"0.16"}),u.jsx("stop",{offset:"100%",stopColor:"#e2e8f0",stopOpacity:"0.08"})]})}),n?u.jsx("rect",{className:"login-svg-line-rect",x:"0.5",y:"0.5",width:"99",height:"99",pathLength:"100",style:{stroke:`url(#${s})`}}):u.jsx("rect",{className:"login-svg-line-rect",x:"0.5",y:"0.5",width:"99",height:"99",pathLength:"100",style:{stroke:`url(#${s})`}})]})}function iv({user:r}){const n=b_(r);return n?u.jsx("span",{children:n}):u.jsx(A_,{})}function Dv(r){return String(r??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function O_(){return["position:absolute","top:0","left:0","right:0","bottom:auto","height:100vh","z-index:0","pointer-events:none","overflow:hidden"].join(";")}function j_(){return`<div data-ascii-dither-bg aria-hidden="true" style="${O_()}"></div>`}function Uv(r){const n="ascii-dither-background.js",i=typeof r=="string"?r.trim():"";if(!i)return n;try{const g=new URL(i,"https://ascii-dither.local").pathname.split("/").filter(Boolean).at(-1)||"";if(g.toLowerCase().endsWith(".js"))return g}catch{}const d=i.split("?")[0].split("#")[0].split("/").filter(Boolean).at(-1)||"";return d.toLowerCase().endsWith(".js")?d:n}function k_(r,n="ascii-dither-background.js"){const l=((typeof r=="string"?r.trim():"").split("?")[0].split("#")[0].split("/").filter(Boolean).at(-1)||n).replace(/[^a-zA-Z0-9._-]/g,"-");return l?l.toLowerCase().endsWith(".js")?l:`${l}.js`:n}function I_(r){const n=/<script>\s*([\s\S]*?)\s*<\/script>\s*$/i.exec(r),i=n?r.slice(0,n.index).trim():r.trim(),s=n?`${n[1].trim()}
`:`${r.trim()}
`;return{mountMarkup:i,runtimeCode:s}}function L_(r){return r?r.startsWith("<!--")||r.startsWith("//")?"comment":r.startsWith('"')||r.startsWith("'")||r.startsWith("`")?"string":/^<\/?[a-zA-Z][\w:-]*$/.test(r)||r==="/>"||r===">"?"tag":/^\d+(?:\.\d+)?$/.test(r)?"number":z2.has(r)?"keyword":/^[{}()[\].,;:+\-*/%<>=!&|^~?]$/.test(r)?"punct":"plain":"plain"}function D_(r){const n=String(r??""),i=[];let s=0;rp.lastIndex=0;let l=rp.exec(n);for(;l;){const d=l.index,m=l[0];d>s&&i.push({type:"plain",value:n.slice(s,d)}),i.push({type:L_(m),value:m}),s=d+m.length,l=rp.exec(n)}return s<n.length&&i.push({type:"plain",value:n.slice(s)}),i}function U_(r){if(r.style==="letters"){const n=Nv[r.letterSet]||"letters-alphabet";return Gl[n]||Gl["letters-alphabet"]}if(r.style==="braille")return Py[r.brailleVariant]||Py.standard;if(Iv(r.style))return Gl.minimal;if(r.style==="retro"||r.style==="winamp")return G2;if(r.style==="terminal"){const n=String(r.terminalCharset||"binary");return By[n]||By.binary}if(r.style==="classic"&&r.charset==="custom"){const n=typeof r.customCharset=="string"?r.customCharset.slice(0,Wd):"";return n.length>0?n:Gl.standard}return Gl[r.charset]||Gl.standard}function P_(r,n){const i=Ie(r/255,0,1),s=Math.floor(i*Math.max(0,n.length-1));return n[Ie(s,0,Math.max(0,n.length-1))]||" "}function pp({code:r,className:n=""}){const i=String(r??"").replace(/\r/g,"").split(`
`),s=`export-code-block export-code-highlighted ${n}`.trim();return u.jsx("div",{className:s,role:"region","aria-label":`Export code preview, ${i.length} lines`,children:u.jsx("div",{className:"export-code-lines",children:i.map((l,d)=>u.jsxs("div",{className:"export-code-line",children:[u.jsx("span",{className:"export-code-line-number","aria-hidden":"true",children:d+1}),u.jsxs("span",{className:"export-code-line-content",children:[D_(l).map((m,p)=>u.jsx("span",{className:`export-code-token export-code-token-${m.type}`,children:m.value},`code-line-${d}-token-${p}`)),l.length===0&&" "]})]},`code-line-${d}`))})})}function qd(r,n={}){const i=JSON.stringify(r,null,2),s=n.source&&typeof n.source=="object"?n.source:Ko,l=Number(n.targetFps),d=[12,20,30,60].includes(l)?l:30,m=Math.min(12,d),p=JSON.stringify(s,null,2).replace(/<\/script/gi,"<\\/script"),g=JSON.stringify({enableInteractionEffects:n.enableInteractionEffects!==!1,transparentBackground:n.transparentBackground!==!1,enableAlphaMask:n.enableAlphaMask!==!1,alphaMaskEnd:85,enableFadeIn:n.enableFadeIn!==!1,fadeInDurationMs:900,pauseWhenOffscreen:n.pauseWhenOffscreen!==!1,adaptivePerformance:n.adaptivePerformance!==!1,maxFps:d,idleFps:m,visibilityThreshold:.01,reportFps:n.reportFps===!0,enableWatermark:n.enableWatermark===!0,watermarkText:typeof n.watermarkText=="string"&&n.watermarkText.trim()?n.watermarkText.trim():oo}),v=JSON.stringify({standard:" .:-=+*#%@",blocks:" ░▒▓█",detailed:" .'`^\",:;Il!i><~+_-?][}{1)(|\\\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",minimal:" ·░█",binary:" 01","letters-alphabet":"ABCDEFGHIJKLMNOPQRSTUVWXYZ","letters-lowercase":"abcdefghijklmnopqrstuvwxyz","letters-mixed":"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz","letters-symbols":"@#$%&*+=-<>~",braille:" ⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿"}),y=JSON.stringify({standard:" ⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿",sparse:" ⠁⠂⠄⠈⠐⠠⡀⢀⣀⣿",dense:" ⠃⠇⠏⠟⠿"}),E=JSON.stringify(" アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"),M=JSON.stringify(" .,:;irsXA253hMHGS#9B&@"),A=JSON.stringify("o"),D=JSON.stringify(Vp),B=JSON.stringify(Ov);return`${j_()}
<script>
(() => {
  const SETTINGS = ${i};
  const EXPORT_OPTIONS = ${g};
  const SOURCE = ${p};
  const IS_TRANSPARENT_BG = Boolean(EXPORT_OPTIONS.transparentBackground);
  const WATERMARK_LABEL = String(EXPORT_OPTIONS.watermarkText || ${JSON.stringify(oo)});

  const CHARSETS = ${v};
  const BRAILLE_VARIANTS = ${y};
  const MATRIX_CHARS = ${E};
  const HALFTONE_CHARS = ${M};
  const RETRO_CHARS = ${A};
  const TERMINAL_CHARSET_PRESETS = ${D};
  const RETRO_DUOTONE_PALETTES = ${B};
  const HOVER_ATTRACT_RADIUS = 180;
  const CLICK_BURST_RADIUS = 340;
  const CLICK_BURST_STRENGTH = 56;
  const CLICK_BURST_DURATION_MS = 640;
  const FPS_MESSAGE_TYPE = ${JSON.stringify(jv)};
  const IS_TEMPLATE_PREVIEW_RUNTIME = EXPORT_OPTIONS.reportFps === true;
  const TEMPLATE_PREVIEW_RUNTIME_KEY = '__asciiTemplatePreviewRuntime__';
  const runtimeScope = typeof window !== 'undefined' ? window : globalThis;
  const previewRuntimeId = IS_TEMPLATE_PREVIEW_RUNTIME ? String(Date.now()) + '-' + Math.random().toString(36).slice(2) : '';
  const SHOULD_REPORT_FPS =
    EXPORT_OPTIONS.reportFps === true &&
    typeof window.parent !== 'undefined' &&
    window.parent !== window;

  if (IS_TEMPLATE_PREVIEW_RUNTIME) {
    const existingRuntime = runtimeScope[TEMPLATE_PREVIEW_RUNTIME_KEY];
    if (existingRuntime && typeof existingRuntime.destroy === 'function') {
      try {
        existingRuntime.destroy();
      } catch {
        // Ignore stale runtime destroy errors.
      }
    }
    runtimeScope[TEMPLATE_PREVIEW_RUNTIME_KEY] = { id: previewRuntimeId, destroy: null };
  }

  const mount = document.querySelector('[data-ascii-dither-bg]');
  if (!mount) return;

  if (typeof mount.__asciiDitherDestroy === 'function') {
    mount.__asciiDitherDestroy();
  }

  mount.style.position = 'absolute';
  mount.style.inset = '';
  mount.style.top = '0';
  mount.style.left = '0';
  mount.style.right = '0';
  mount.style.bottom = 'auto';
  mount.style.height = '100vh';
  mount.style.zIndex = '0';
  mount.style.pointerEvents = 'none';
  mount.style.overflow = 'hidden';
  mount.style.background = 'transparent';
  const fadeInDurationMs = Math.max(0, Number(EXPORT_OPTIONS.fadeInDurationMs ?? 900) || 900);
  if (EXPORT_OPTIONS.enableFadeIn === true && fadeInDurationMs > 0) {
    mount.style.opacity = '0';
    mount.style.transition = 'opacity ' + fadeInDurationMs + 'ms ease';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        mount.style.opacity = '1';
      });
    });
  } else {
    mount.style.opacity = '1';
    mount.style.removeProperty('transition');
  }

  const parent = mount.parentElement;
  if (parent && window.getComputedStyle(parent).position === 'static') {
    parent.style.position = 'relative';
  }

  const backgroundLayer = document.createElement('div');
  Object.assign(backgroundLayer.style, {
    position: 'absolute',
    inset: '0',
    pointerEvents: 'none',
    zIndex: '0',
    background: IS_TRANSPARENT_BG ? 'transparent' : getEffectiveBackgroundColor(SETTINGS)
  });

  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    transform: 'translate(-50%, -50%)',
    display: 'block',
    zIndex: '2'
  });

  const webglCanvas = document.createElement('canvas');
  Object.assign(webglCanvas.style, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    transform: 'translate(-50%, -50%)',
    display: 'none',
    opacity: '0',
    zIndex: '1',
    pointerEvents: 'none'
  });
  const webglShaderCanvas = document.createElement('canvas');
  Object.assign(webglShaderCanvas.style, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    transform: 'translate(-50%, -50%)',
    display: 'none',
    opacity: '0',
    zIndex: '1',
    pointerEvents: 'none'
  });
  const legacyAlphaMaskStop = Math.max(0, Math.min(100, Number(EXPORT_OPTIONS.alphaMaskStop ?? 85) || 85));
  const alphaMaskEndRaw = Number(EXPORT_OPTIONS.alphaMaskEnd ?? legacyAlphaMaskStop);
  const alphaMaskEnd = Math.max(0, Math.min(100, Number.isFinite(alphaMaskEndRaw) ? alphaMaskEndRaw : legacyAlphaMaskStop));
  if (EXPORT_OPTIONS.enableAlphaMask !== false) {
    const alphaMaskValue =
      'linear-gradient(to bottom, black 0%, black ' + alphaMaskEnd + '%, transparent 100%)';
    mount.setAttribute('data-alpha-mask', 'bottom-' + alphaMaskEnd);
    canvas.style.setProperty('mask-image', alphaMaskValue);
    canvas.style.setProperty('-webkit-mask-image', alphaMaskValue);
    webglCanvas.style.setProperty('mask-image', alphaMaskValue);
    webglCanvas.style.setProperty('-webkit-mask-image', alphaMaskValue);
    webglShaderCanvas.style.setProperty('mask-image', alphaMaskValue);
    webglShaderCanvas.style.setProperty('-webkit-mask-image', alphaMaskValue);
  } else {
    mount.removeAttribute('data-alpha-mask');
    canvas.style.removeProperty('mask-image');
    canvas.style.removeProperty('-webkit-mask-image');
    webglCanvas.style.removeProperty('mask-image');
    webglCanvas.style.removeProperty('-webkit-mask-image');
    webglShaderCanvas.style.removeProperty('mask-image');
    webglShaderCanvas.style.removeProperty('-webkit-mask-image');
  }

  let watermarkLayer = null;
  if (EXPORT_OPTIONS.enableWatermark === true) {
    watermarkLayer = document.createElement('div');
    Object.assign(watermarkLayer.style, {
      position: 'absolute',
      right: '14px',
      bottom: '12px',
      zIndex: '4',
      pointerEvents: 'none',
      userSelect: 'none',
      font: '600 12px "Helvetica Neue", Helvetica, Arial, sans-serif',
      letterSpacing: '0.03em',
      color: 'rgba(255, 255, 255, 0.92)',
      padding: '4px 8px',
      borderRadius: '999px',
      border: '1px solid rgba(255, 255, 255, 0.24)',
      background: 'rgba(0, 0, 0, 0.5)',
      textShadow: '0 1px 1px rgba(0, 0, 0, 0.45)',
    });
    watermarkLayer.textContent = WATERMARK_LABEL;
  }

  if (watermarkLayer) {
    mount.replaceChildren(backgroundLayer, webglCanvas, webglShaderCanvas, canvas, watermarkLayer);
  } else {
    mount.replaceChildren(backgroundLayer, webglCanvas, webglShaderCanvas, canvas);
  }

  const ctx = canvas.getContext('2d');
  const webglCtx = webglCanvas.getContext('2d');
  const webglShaderGl =
    webglShaderCanvas.getContext('webgl', { alpha: true, premultipliedAlpha: false }) ||
    webglShaderCanvas.getContext('experimental-webgl', { alpha: true, premultipliedAlpha: false });
  const sampleCanvas = document.createElement('canvas');
  const sampleCtx = sampleCanvas.getContext('2d', { willReadFrequently: true });
  const webglSampleCanvas = document.createElement('canvas');
  const webglSampleCtx = webglSampleCanvas.getContext('2d', { willReadFrequently: true });
  if (!ctx || !webglCtx || !sampleCtx || !webglSampleCtx) throw new Error('Could not create canvas context');

  let source = null;
  let stream = null;
  let sourceLoopHandler = null;
  let rafId = null;
  let webglRafId = null;
  let intersectionObserver = null;
  let resizeObserver = null;
  let bounds = { left: 0, top: 0, width: 1, height: 1 };
  let viewWidth = 1;
  let viewHeight = 1;
  let renderWidth = 1;
  let renderHeight = 1;
  let pointer = { inside: false, x: 0, y: 0 };
  let clickBursts = [];
  let matrixRainState = { laneCount: 0, primaryCount: 0, speeds: [], phases: [], lengths: [] };
  let isInViewport = true;
  let isPageVisible = document.visibilityState !== 'hidden';
  let pendingForceRender = false;
  let lastRenderTime = 0;
  let fpsFrameCount = 0;
  let fpsWindowStart = 0;
  let lastReportedSignature = '';
  let lastFrameDurationMs = 0;
  let lastCharCount = 0;
  let webglScene = null;
  let webglStartTime = performance.now();
  let webglMouseState = null;
  let webglShaderResources = null;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function reportFps(value, details = {}) {
    if (!SHOULD_REPORT_FPS) return;
    const normalized = Math.max(0, Math.round(Number(value) || 0));
    const normalizedChars = Math.max(0, Math.round(Number(details.chars) || 0));
    const normalizedFrameMs = Math.max(0, Math.round((Number(details.frameMs) || 0) * 10) / 10);
    const signature = normalized + '|' + normalizedChars + '|' + normalizedFrameMs;
    if (signature === lastReportedSignature) return;
    lastReportedSignature = signature;
    try {
      window.parent.postMessage(
        {
          type: FPS_MESSAGE_TYPE,
          fps: normalized,
          chars: normalizedChars,
          frameMs: normalizedFrameMs,
          instanceId: previewRuntimeId,
        },
        '*'
      );
    } catch {
      // Ignore cross-frame postMessage errors.
    }
  }

  function getDirectionVector(direction) {
    switch (direction) {
      case 'up':
        return { dx: 0, dy: -1 };
      case 'down':
        return { dx: 0, dy: 1 };
      case 'left':
        return { dx: -1, dy: 0 };
      case 'top-left':
        return { dx: -Math.SQRT1_2, dy: -Math.SQRT1_2 };
      case 'top-right':
        return { dx: Math.SQRT1_2, dy: -Math.SQRT1_2 };
      case 'bottom-left':
        return { dx: -Math.SQRT1_2, dy: Math.SQRT1_2 };
      case 'bottom-right':
        return { dx: Math.SQRT1_2, dy: Math.SQRT1_2 };
      case 'right':
      default:
        return { dx: 1, dy: 0 };
    }
  }

  function getDirectionProjection(direction) {
    const { dx, dy } = getDirectionVector(direction);
    const perpX = -dy;
    const perpY = dx;
    const primaryMin = (dx < 0 ? dx : 0) + (dy < 0 ? dy : 0);
    const primaryMax = (dx > 0 ? dx : 0) + (dy > 0 ? dy : 0);
    const secondaryMin = (perpX < 0 ? perpX : 0) + (perpY < 0 ? perpY : 0);
    const secondaryMax = (perpX > 0 ? perpX : 0) + (perpY > 0 ? perpY : 0);
    return {
      dx,
      dy,
      perpX,
      perpY,
      primaryMin,
      primarySpan: Math.max(0.0001, primaryMax - primaryMin),
      secondaryMin,
      secondarySpan: Math.max(0.0001, secondaryMax - secondaryMin),
    };
  }

  function projectDirection(x, y, cols, rows, projection) {
    const xNorm = x / Math.max(cols - 1, 1);
    const yNorm = y / Math.max(rows - 1, 1);
    const primaryRaw = xNorm * projection.dx + yNorm * projection.dy;
    const secondaryRaw = xNorm * projection.perpX + yNorm * projection.perpY;
    const primaryNorm = clamp((primaryRaw - projection.primaryMin) / projection.primarySpan, 0, 1);
    const secondaryNorm = clamp((secondaryRaw - projection.secondaryMin) / projection.secondarySpan, 0, 1);
    return { primaryNorm, secondaryNorm };
  }

  function applyTone(gray) {
    let value = gray;
    value = (value - 128) * SETTINGS.contrast + 128;
    value += SETTINGS.brightness * 2;
    value = clamp(value, 0, 255);
    if (SETTINGS.invert) value = 255 - value;
    return value;
  }

  function bayerThreshold(x, y) {
    const matrix = [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5]
    ];
    return matrix[y % 4][x % 4] / 16;
  }

  function drawRegularPolygon(ctx, centerX, centerY, radius, sides, rotation) {
    if (!ctx || !Number.isFinite(radius) || radius <= 0 || sides < 3) return;
    const baseRotation = Number.isFinite(rotation) ? rotation : -Math.PI / 2;
    for (let i = 0; i < sides; i += 1) {
      const angle = baseRotation + (i / sides) * Math.PI * 2;
      const px = centerX + Math.cos(angle) * radius;
      const py = centerY + Math.sin(angle) * radius;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
  }

  function drawHalftoneShape(ctx, shape, centerX, centerY, radius, rotationDeg = 0) {
    if (!ctx || radius <= 0) return;
    const rotation = ((Number(rotationDeg) || 0) * Math.PI) / 180;
    switch (shape) {
      case 'square': {
        const side = radius * 2;
        if (Math.abs(rotation) <= 0.0001) {
          ctx.fillRect(centerX - radius, centerY - radius, side, side);
          return;
        }
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);
        ctx.fillRect(-radius, -radius, side, side);
        ctx.restore();
        return;
      }
      case 'diamond':
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);
        ctx.beginPath();
        drawRegularPolygon(ctx, 0, 0, radius, 4, Math.PI / 4);
        ctx.fill();
        ctx.restore();
        return;
      case 'pentagon':
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);
        ctx.beginPath();
        drawRegularPolygon(ctx, 0, 0, radius, 5, -Math.PI / 2);
        ctx.fill();
        ctx.restore();
        return;
      case 'hexagon':
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);
        ctx.beginPath();
        drawRegularPolygon(ctx, 0, 0, radius, 6, -Math.PI / 2);
        ctx.fill();
        ctx.restore();
        return;
      case 'circle':
      default:
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
    }
  }

  function shouldApplyInverseDither(gray, x, y, strength, timeSeconds) {
    const amount = clamp(Number(strength ?? 0) || 0, 0, 3);
    if (amount <= 0) return 0;
    const tone = clamp(gray / 255, 0, 1);
    const threshold = bayerThreshold(x, y);
    const drift = (Math.sin((x + 1) * 7.31 + (y + 1) * 3.17 + timeSeconds * 0.75) + 1) * 0.5;
    const pattern = threshold * 0.72 + drift * 0.28;
    const transitioned = clamp((tone - 0.5) * (0.65 + amount * 1.95) + 0.5, 0, 1);
    const edge = transitioned - pattern;
    const softness = 1.1 + amount * 2.2;
    return clamp(edge * softness, 0, 1);
  }

  function invertCssColor(color) {
    const rgbMatch =
      /rgba?\\(\\s*(\\d+(?:\\.\\d+)?)\\s*[, ]\\s*(\\d+(?:\\.\\d+)?)\\s*[, ]\\s*(\\d+(?:\\.\\d+)?)(?:\\s*[,/]\\s*(\\d*(?:\\.\\d+)?))?/i.exec(
        String(color || '')
      );
    if (rgbMatch) {
      const r = clamp(Math.round(Number(rgbMatch[1]) || 0), 0, 255);
      const g = clamp(Math.round(Number(rgbMatch[2]) || 0), 0, 255);
      const b = clamp(Math.round(Number(rgbMatch[3]) || 0), 0, 255);
      const alphaRaw = rgbMatch[4];
      if (alphaRaw != null && alphaRaw !== '') {
        const alpha = clamp(Number(alphaRaw) || 0, 0, 1);
        return 'rgba(' + (255 - r) + ', ' + (255 - g) + ', ' + (255 - b) + ', ' + alpha + ')';
      }
      return 'rgb(' + (255 - r) + ', ' + (255 - g) + ', ' + (255 - b) + ')';
    }
    const hexMatch = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(color || '').trim());
    if (hexMatch) {
      const hex =
        hexMatch[1].length === 3
          ? hexMatch[1].split('').map((char) => char + char).join('')
          : hexMatch[1];
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return 'rgb(' + (255 - r) + ', ' + (255 - g) + ', ' + (255 - b) + ')';
    }
    return 'rgb(255, 255, 255)';
  }

  function parseCssColor(color) {
    const rgbMatch =
      /rgba?\\(\\s*(\\d+(?:\\.\\d+)?)\\s*[, ]\\s*(\\d+(?:\\.\\d+)?)\\s*[, ]\\s*(\\d+(?:\\.\\d+)?)(?:\\s*[,/]\\s*(\\d*(?:\\.\\d+)?))?/i.exec(
        String(color || '')
      );
    if (rgbMatch) {
      return {
        r: clamp(Math.round(Number(rgbMatch[1]) || 0), 0, 255),
        g: clamp(Math.round(Number(rgbMatch[2]) || 0), 0, 255),
        b: clamp(Math.round(Number(rgbMatch[3]) || 0), 0, 255),
        a: rgbMatch[4] != null && rgbMatch[4] !== '' ? clamp(Number(rgbMatch[4]) || 0, 0, 1) : 1,
      };
    }

    const hexMatch = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(color || '').trim());
    if (hexMatch) {
      const hex =
        hexMatch[1].length === 3
          ? hexMatch[1].split('').map((char) => char + char).join('')
          : hexMatch[1];
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
        a: 1,
      };
    }

    return null;
  }

  function formatCssColor(color) {
    const red = clamp(Math.round(Number(color?.r) || 0), 0, 255);
    const green = clamp(Math.round(Number(color?.g) || 0), 0, 255);
    const blue = clamp(Math.round(Number(color?.b) || 0), 0, 255);
    const alpha = clamp(Number(color?.a ?? 1) || 0, 0, 1);
    if (alpha < 0.999) return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  }

  function rgbToHsv(r, g, b) {
    const red = clamp((Number(r) || 0) / 255, 0, 1);
    const green = clamp((Number(g) || 0) / 255, 0, 1);
    const blue = clamp((Number(b) || 0) / 255, 0, 1);
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const delta = max - min;
    let hue = 0;

    if (delta > 0.000001) {
      if (max === red) hue = ((green - blue) / delta) % 6;
      else if (max === green) hue = (blue - red) / delta + 2;
      else hue = (red - green) / delta + 4;
      hue *= 60;
      if (hue < 0) hue += 360;
    }

    return {
      h: hue,
      s: max <= 0 ? 0 : delta / max,
      v: max,
    };
  }

  function hsvToRgb(h, s, v) {
    const hue = ((Number(h) || 0) % 360 + 360) % 360;
    const sat = clamp(Number(s) || 0, 0, 1);
    const value = clamp(Number(v) || 0, 0, 1);
    const chroma = value * sat;
    const segment = hue / 60;
    const x = chroma * (1 - Math.abs((segment % 2) - 1));
    let red = 0;
    let green = 0;
    let blue = 0;

    if (segment >= 0 && segment < 1) {
      red = chroma;
      green = x;
    } else if (segment < 2) {
      red = x;
      green = chroma;
    } else if (segment < 3) {
      green = chroma;
      blue = x;
    } else if (segment < 4) {
      green = x;
      blue = chroma;
    } else if (segment < 5) {
      red = x;
      blue = chroma;
    } else {
      red = chroma;
      blue = x;
    }

    const match = value - chroma;
    return {
      r: Math.round((red + match) * 255),
      g: Math.round((green + match) * 255),
      b: Math.round((blue + match) * 255),
    };
  }

  function preserveHueAgainstLightBackground(color) {
    const parsed = parseCssColor(color);
    if (!parsed) return invertCssColor(color);

    const { r, g, b, a } = parsed;
    const maxChannel = Math.max(r, g, b);
    const minChannel = Math.min(r, g, b);
    const saturation = maxChannel <= 0 ? 0 : (maxChannel - minChannel) / maxChannel;
    if (saturation < 0.06) {
      return formatCssColor({ r: 255 - r, g: 255 - g, b: 255 - b, a });
    }

    const hsv = rgbToHsv(r, g, b);
    const luminance = clamp((0.299 * r + 0.587 * g + 0.114 * b) / 255, 0, 1);
    const remappedValue = clamp(Math.pow(1 - luminance, 1.2), 0, 1);
    const remappedSaturation = clamp(hsv.s * 1.08 + 0.04, 0, 1);
    return formatCssColor({
      ...hsvToRgb(hsv.h, remappedSaturation, remappedValue),
      a,
    });
  }

  function applyOutputPolarity(color, localInvert = false) {
    const shouldInvert = Boolean(SETTINGS.themeOutputInvert) !== Boolean(localInvert);
    if (!shouldInvert) return color;
    return preserveHueAgainstLightBackground(color);
  }

  function lerpChannel(from, to, amount) {
    return clamp(Math.round(from + (to - from) * amount), 0, 255);
  }

  const WEBGL_DEFAULT_MOUSE_X = -1000;
  const WEBGL_DEFAULT_MOUSE_Y = -1000;
  const WEBGL_MOUSE_IDLE_MS = 150;
  const WEBGL_MOUSE_FADE_MS = 350;
  webglMouseState = { x: WEBGL_DEFAULT_MOUSE_X, y: WEBGL_DEFAULT_MOUSE_Y, lastMove: -1e9, active: 0 };
  ${Ev}
  const webglOverlayShared = (typeof globalThis !== 'undefined' ? globalThis : window).__ASCII_WEBGL_OVERLAY_SHARED__;
  const WEBGL_OVERLAY_VERTEX_SHADER = ${JSON.stringify(`
attribute vec2 aVertexPosition;
void main() {
  gl_Position = vec4(aVertexPosition, 0.0, 1.0);
}
`)};
  const WEBGL_OVERLAY_FRAGMENT_SHADER = ${JSON.stringify(`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_mouseActive;
uniform float u_lineSpread;
uniform float u_intensity;
uniform float u_lightning;
uniform float u_pulse;
uniform float u_mouseInfluence;
uniform float u_grain;
uniform vec3 u_tint;

float hash(float n) {
  return fract(sin(n) * 753.5453123);
}

float noise(float x) {
  float i = floor(x);
  float f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(hash(i), hash(i + 1.0), f);
}

float lightning(vec2 uv, vec2 a, vec2 b, float t) {
  vec2 ab = b - a;
  float len = length(ab);
  if (len < 0.01) return 0.0;

  vec2 dir = ab / len;
  vec2 pa = uv - a;
  float h = clamp(dot(pa, dir) / len, 0.0, 1.0);
  float dist = length(pa - dir * (h * len));
  float env = sin(h * 3.14159265);

  float offset = (noise(h * 15.0 - t * 20.0) - 0.5) * 0.1 * env;
  offset += (noise(h * 40.0 + t * 30.0) - 0.5) * 0.03 * env;
  float d = abs(dist + offset);

  return (0.0003 / (d + 0.0003) + 0.00002 / (d * d + 0.00002)) * env;
}

float pulseBand(float distanceToRail, float y, float t, float speed, float offset, float strength) {
  float pulseY = fract(t * speed + offset) * 4.0 - 2.0;
  return smoothstep(0.4, 0.0, abs(y - pulseY)) * strength / (distanceToRail + 0.002);
}

float wave(float y, float t, float offset, float amplitude) {
  return sin(y * 10.0 + t * 2.0 + offset) * amplitude;
}

void main() {
  vec2 safeResolution = max(u_resolution.xy, vec2(1.0));
  vec2 uv = gl_FragCoord.xy / safeResolution;
  uv = uv * 2.0 - 1.0;
  uv.x *= safeResolution.x / safeResolution.y;

  vec2 mouseUV = u_mouse / safeResolution;
  mouseUV = mouseUV * 2.0 - 1.0;
  mouseUV.x *= safeResolution.x / safeResolution.y;

  float spreadMix = clamp((u_lineSpread - 0.1) / 0.45, 0.0, 1.0);
  float spread = mix(0.12, 0.2, spreadMix);
  float pulseSpeed = max(0.1, u_pulse);
  float intensity = clamp(u_intensity, 0.0, 1.0);
  float lightningAmount = clamp(u_lightning, 0.0, 1.8);
  float mouseInfluence = clamp(u_mouseInfluence, 0.0, 2.0);
  float grainAmount = clamp(u_grain, 0.0, 0.12);
  float t = u_time * 0.5;
  float outerOffset = spread + mix(0.016, 0.028, spreadMix);
  float waveAmplitude = (0.004 + lightningAmount * 0.0015) * (0.85 + spreadMix * 0.25);

  float d1 = abs(uv.x - (-spread));
  float d2 = abs(uv.x - 0.0);
  float d3 = abs(uv.x - spread);

  float baseIntensity = mix(0.003, 0.0065, intensity);
  float glow = baseIntensity / (d1 + 0.002);
  glow += baseIntensity / (d2 + 0.002);
  glow += baseIntensity / (d3 + 0.002);

  glow += pulseBand(d1, uv.y, t, 0.2 * pulseSpeed, 0.0, 0.018 + intensity * 0.016) * 1.2;
  glow += pulseBand(d2, uv.y, t, 0.25 * pulseSpeed, 0.3, 0.018 + intensity * 0.016) * 1.2;
  glow += pulseBand(d3, uv.y, t, 0.15 * pulseSpeed, 0.7, 0.018 + intensity * 0.016) * 1.2;

  float wD1a = abs(uv.x - (-outerOffset + wave(uv.y, t, 0.0, waveAmplitude)));
  float wD1b = abs(uv.x - (-(spread - 0.02) + wave(uv.y, t, 1.0, waveAmplitude)));
  float wD2a = abs(uv.x - (-0.02 + wave(uv.y, t, 2.0, waveAmplitude)));
  float wD2b = abs(uv.x - ( 0.02 + wave(uv.y, t, 3.0, waveAmplitude)));
  float wD3a = abs(uv.x - ((spread - 0.02) + wave(uv.y, t, 4.0, waveAmplitude)));
  float wD3b = abs(uv.x - (outerOffset + wave(uv.y, t, 5.0, waveAmplitude)));

  float wavePulseStrength = (0.003 + intensity * 0.005) * (0.35 + lightningAmount * 0.2);
  glow += pulseBand(wD1a, uv.y, t, 0.3 * pulseSpeed, 0.1, wavePulseStrength);
  glow += pulseBand(wD1b, uv.y, t, 0.22 * pulseSpeed, 0.6, wavePulseStrength);
  glow += pulseBand(wD2a, uv.y, t, 0.28 * pulseSpeed, 0.2, wavePulseStrength);
  glow += pulseBand(wD2b, uv.y, t, 0.32 * pulseSpeed, 0.8, wavePulseStrength);
  glow += pulseBand(wD3a, uv.y, t, 0.35 * pulseSpeed, 0.4, wavePulseStrength);
  glow += pulseBand(wD3b, uv.y, t, 0.25 * pulseSpeed, 0.9, wavePulseStrength);

  vec2 p1 = vec2(-spread, mouseUV.y);
  vec2 p2 = vec2(0.0, mouseUV.y);
  vec2 p3 = vec2(spread, mouseUV.y);

  float flickerGate = step(0.15, noise(t * (40.0 + pulseSpeed * 12.0)));
  float flicker = flickerGate * (noise(t * (100.0 + pulseSpeed * 20.0)) * 0.7 + 0.3);
  float mouseActivation = clamp(u_mouseActive, 0.0, 1.0) * mouseInfluence;
  float mouseRadius = mix(1.4, 2.7, clamp(mouseInfluence * 0.5, 0.0, 1.0));

  glow += lightning(uv, p1, mouseUV, t) * smoothstep(mouseRadius, 0.0, length(mouseUV - p1)) * mouseActivation * flicker * lightningAmount;
  glow += lightning(uv, p2, mouseUV, t + 10.0) * smoothstep(mouseRadius, 0.0, length(mouseUV - p2)) * mouseActivation * flicker * lightningAmount;
  glow += lightning(uv, p3, mouseUV, t + 20.0) * smoothstep(mouseRadius, 0.0, length(mouseUV - p3)) * mouseActivation * flicker * lightningAmount;

  float distToCenter = length(uv);
  glow += (0.014 + intensity * 0.03) / (distToCenter + 0.02);

  vec3 tintColor = max(u_tint, vec3(0.06));
  vec3 railColor = mix(tintColor * 0.55, tintColor * 1.15, 0.72);
  vec3 highlightColor = mix(tintColor, vec3(1.0), 0.2 + intensity * 0.18);
  float shimmer = 0.8 + 0.2 * sin(t * (1.5 + pulseSpeed * 0.15) - distToCenter * 5.0);
  float falloff = 1.0 - smoothstep(0.3, 2.2, distToCenter);

  vec3 finalColor = railColor * glow * shimmer;
  finalColor += highlightColor * pow(max(glow, 0.0), 1.28) * (0.05 + lightningAmount * 0.02);
  finalColor *= falloff;
  float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  finalColor += (n - 0.5) * grainAmount * 0.32;
  finalColor = max(finalColor, vec3(0.0));

  float luminance = dot(finalColor, vec3(0.2126, 0.7152, 0.0722));
  float alpha = clamp(luminance * (1.2 + intensity * 1.4), 0.0, 0.98);
  gl_FragColor = vec4(finalColor, alpha);
}
`)};

  function parseHexColor(value, fallback) {
    const fallbackColor = fallback || { r: 153, g: 187, b: 255 };
    if (typeof value !== 'string') return fallbackColor;
    const trimmed = value.trim();
    const match = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(trimmed);
    if (!match) return fallbackColor;
    const hex = match[1].length === 3
      ? match[1].split('').map((char) => char + char).join('')
      : match[1];
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16)
    };
  }

  function parseRgbString(value, fallback) {
    const safeFallback = fallback || { r: 255, g: 255, b: 255 };
    if (typeof value !== 'string') return safeFallback;
    const match = /rgba?\\(\\s*([\\d.]+)\\s*,\\s*([\\d.]+)\\s*,\\s*([\\d.]+)/i.exec(value);
    if (!match) return safeFallback;
    return {
      r: clamp(Math.round(Number(match[1]) || 0), 0, 255),
      g: clamp(Math.round(Number(match[2]) || 0), 0, 255),
      b: clamp(Math.round(Number(match[3]) || 0), 0, 255),
    };
  }

  const DITHER_TWO_BAYER_MATRIX_8 = [
    0 / 64, 48 / 64, 12 / 64, 60 / 64, 3 / 64, 51 / 64, 15 / 64, 63 / 64,
    32 / 64, 16 / 64, 44 / 64, 28 / 64, 35 / 64, 19 / 64, 47 / 64, 31 / 64,
    8 / 64, 56 / 64, 4 / 64, 52 / 64, 11 / 64, 59 / 64, 7 / 64, 55 / 64,
    40 / 64, 24 / 64, 36 / 64, 20 / 64, 43 / 64, 27 / 64, 39 / 64, 23 / 64,
    2 / 64, 50 / 64, 14 / 64, 62 / 64, 1 / 64, 49 / 64, 13 / 64, 61 / 64,
    34 / 64, 18 / 64, 46 / 64, 30 / 64, 33 / 64, 17 / 64, 45 / 64, 29 / 64,
    10 / 64, 58 / 64, 6 / 64, 54 / 64, 9 / 64, 57 / 64, 5 / 64, 53 / 64,
    42 / 64, 26 / 64, 38 / 64, 22 / 64, 41 / 64, 25 / 64, 37 / 64, 21 / 64
  ];

  function isWaveDitherStyle(style) {
    return style === 'dither' || style === 'dither2';
  }

  function supportsShapeSpacing(style) {
    return style === 'halftone' || isWaveDitherStyle(style);
  }

  function getDitherWaveBaseColor(settings) {
    return parseHexColor(settings?.ditherWaveColor, { r: 128, g: 128, b: 128 });
  }

  function getDitherTwoWaveBaseColor(settings) {
    return parseHexColor(settings?.dither2WaveColor, { r: 102, g: 102, b: 102 });
  }

  function getWaveDitherBaseColor(settings) {
    return settings?.style === 'dither2' ? getDitherTwoWaveBaseColor(settings) : getDitherWaveBaseColor(settings);
  }

  function getEffectiveBackgroundColor(settings) {
    return settings?.backgroundColor || '#000000';
  }

  function getStyleCellScale(style) {
    return isWaveDitherStyle(style) ? 0.5 : 1;
  }

  function quantizeUnit(value, steps) {
    const safeSteps = clamp(Math.round(Number(steps) || 4), 2, 8);
    const normalized = clamp(Number(value) || 0, 0, 1);
    return Math.round(normalized * (safeSteps - 1)) / (safeSteps - 1);
  }

  function fract(value) {
    return value - Math.floor(value);
  }

  function smoothstep(edge0, edge1, value) {
    if (edge0 === edge1) return value >= edge1 ? 1 : 0;
    const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
  }

  function fade(value) {
    return value * value * value * (value * (value * 6 - 15) + 10);
  }

  function mixValues(a, b, t) {
    return a + (b - a) * t;
  }

  function ditherTwoHash(x, y) {
    return fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453123);
  }

  function ditherTwoNoise(x, y) {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const x1 = x0 + 1;
    const y1 = y0 + 1;
    const tx = x - x0;
    const ty = y - y0;
    const u = fade(tx);
    const v = fade(ty);
    const n00 = ditherTwoHash(x0, y0) * 2 - 1;
    const n10 = ditherTwoHash(x1, y0) * 2 - 1;
    const n01 = ditherTwoHash(x0, y1) * 2 - 1;
    const n11 = ditherTwoHash(x1, y1) * 2 - 1;
    return mixValues(mixValues(n00, n10, u), mixValues(n01, n11, u), v);
  }

  function ditherTwoFbm(x, y, waveFrequency, waveAmplitude) {
    let value = 0;
    let amp = 1;
    let px = x;
    let py = y;
    let freq = clamp(waveFrequency, 0.5, 8);
    for (let octave = 0; octave < 4; octave += 1) {
      value += amp * Math.abs(ditherTwoNoise(px, py));
      px *= freq;
      py *= freq;
      amp *= clamp(waveAmplitude, 0, 1);
    }
    return value;
  }

  function ditherTwoPattern(x, y, timeSeconds, waveSpeed, waveFrequency, waveAmplitude) {
    const shift = timeSeconds * waveSpeed;
    const warp = ditherTwoFbm(x - shift, y - shift, waveFrequency, waveAmplitude);
    return ditherTwoFbm(x + warp, y + warp, waveFrequency, waveAmplitude);
  }

  function ditherTwoBayerThreshold(x, y) {
    return DITHER_TWO_BAYER_MATRIX_8[(y % 8) * 8 + (x % 8)] - 0.25;
  }

  function ditherTwoQuantizeChannel(value, colorSteps, threshold) {
    const safeSteps = clamp(Math.round(Number(colorSteps) || 4), 2, 8);
    const step = 1 / (safeSteps - 1);
    const biased = clamp(value + threshold * step - 0.2, 0, 1);
    return Math.floor(biased * (safeSteps - 1) + 0.5) / (safeSteps - 1);
  }

  function modulateDitherTwoColor(baseColor, mixedLevel, colorMode) {
    if (colorMode !== 'color') return baseColor;
    const intensity = clamp(mixedLevel, 0, 1);
    return {
      r: clamp(Math.round(baseColor.r * intensity), 0, 255),
      g: clamp(Math.round(baseColor.g * intensity), 0, 255),
      b: clamp(Math.round(baseColor.b * intensity), 0, 255),
    };
  }

  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function createWebglProgram(gl, vertexSource, fragmentSource) {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) {
      if (vertexShader) gl.deleteShader(vertexShader);
      if (fragmentShader) gl.deleteShader(fragmentShader);
      return null;
    }
    const program = gl.createProgram();
    if (!program) {
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return null;
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }

  function ensureWebglShaderResources(gl) {
    if (!gl) return null;
    if (webglShaderResources) return webglShaderResources;
    webglShaderResources = webglOverlayShared.ensureWebglOverlayResources(gl);
    return webglShaderResources;
  }

  function disposeWebglShaderResources() {
    if (!webglShaderGl || !webglShaderResources) return;
    webglOverlayShared.disposeWebglOverlayResources(webglShaderGl, webglShaderResources);
    webglShaderResources = null;
  }

  function updateWebglMouseActivity(now, width, height) {
    if (pointer.inside) {
      webglMouseState.x = clamp((pointer.x / Math.max(renderWidth, 1)) * width, 0, width);
      webglMouseState.y = clamp((pointer.y / Math.max(renderHeight, 1)) * height, 0, height);
      webglMouseState.lastMove = now;
    } else {
      webglMouseState.x = WEBGL_DEFAULT_MOUSE_X;
      webglMouseState.y = WEBGL_DEFAULT_MOUSE_Y;
    }
    const timeSinceMove = now - webglMouseState.lastMove;
    const targetMouseActive =
      timeSinceMove < WEBGL_MOUSE_IDLE_MS
        ? 1
        : Math.max(0, 1 - (timeSinceMove - WEBGL_MOUSE_IDLE_MS) / WEBGL_MOUSE_FADE_MS);
    webglMouseState.active += (targetMouseActive - webglMouseState.active) * 0.15;
  }

  function rgbaColor(color, alpha) {
    return 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + clamp(alpha, 0, 1) + ')';
  }

  function mixColor(colorA, colorB, amount) {
    return {
      r: lerpChannel(colorA.r, colorB.r, amount),
      g: lerpChannel(colorA.g, colorB.g, amount),
      b: lerpChannel(colorA.b, colorB.b, amount)
    };
  }

  function scaleColor(color, factor) {
    return {
      r: clamp(Math.round(color.r * factor), 0, 255),
      g: clamp(Math.round(color.g * factor), 0, 255),
      b: clamp(Math.round(color.b * factor), 0, 255)
    };
  }

  function getWebglOverlayType(value) {
    return webglOverlayShared.getWebglOverlayType(value);
  }

  function getWebglUniformValues() {
    return webglOverlayShared.getWebglOverlayUniformValues(SETTINGS);
  }

  function isWebglLayerActive() {
    return Boolean(SETTINGS.webglLayerEnabled);
  }

  function isWebglAsciiFxEnabled() {
    return isWebglLayerActive() && Boolean(SETTINGS.webglOverlayAffectsAscii);
  }

  function isSeparateWebglVisible(uniformValues) {
    return isWebglLayerActive() && !Boolean(SETTINGS.webglOverlayAffectsAscii) && (uniformValues?.opacity ?? 0) > 0.001;
  }

  function usesShaderOverlay(uniformValues) {
    return Boolean(webglShaderGl) && !webglOverlayShared.isCanvasOverlayType(uniformValues?.overlayType);
  }

  function syncWebglLayerStyle(uniformValues) {
    const visible = isSeparateWebglVisible(uniformValues);
    const useShader = visible && usesShaderOverlay(uniformValues);
    const targetZIndex = SETTINGS.webglOverlayPosition === 'above' ? '3' : '1';
    webglCanvas.style.display = visible && !useShader ? 'block' : 'none';
    webglCanvas.style.opacity = visible && !useShader ? String(uniformValues.opacity) : '0';
    webglCanvas.style.zIndex = targetZIndex;
    webglShaderCanvas.style.display = useShader ? 'block' : 'none';
    webglShaderCanvas.style.opacity = useShader ? String(uniformValues.opacity) : '0';
    webglShaderCanvas.style.zIndex = targetZIndex;
  }

  function syncOverlayCanvasSize(targetCanvas, targetCtx, width, height, pixelRatio) {
    const ratio = Math.max(1, Number(pixelRatio) || 1);
    const nextWidth = Math.max(1, Math.round(width * ratio));
    const nextHeight = Math.max(1, Math.round(height * ratio));
    if (targetCanvas.width !== nextWidth || targetCanvas.height !== nextHeight) {
      targetCanvas.width = nextWidth;
      targetCanvas.height = nextHeight;
    }
    targetCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function syncShaderCanvasSize(width, height, pixelRatio) {
    const ratio = Math.max(1, Number(pixelRatio) || 1);
    const nextWidth = Math.max(1, Math.round(width * ratio));
    const nextHeight = Math.max(1, Math.round(height * ratio));
    if (webglShaderCanvas.width !== nextWidth || webglShaderCanvas.height !== nextHeight) {
      webglShaderCanvas.width = nextWidth;
      webglShaderCanvas.height = nextHeight;
    }
  }

  function getWebglMouseState(width, height) {
    if (!pointer.inside || renderWidth <= 0 || renderHeight <= 0) {
      return { x: WEBGL_DEFAULT_MOUSE_X, y: WEBGL_DEFAULT_MOUSE_Y };
    }
    return {
      x: clamp((pointer.x / Math.max(renderWidth, 1)) * width, 0, width),
      y: clamp((pointer.y / Math.max(renderHeight, 1)) * height, 0, height)
    };
  }

  function renderShaderOverlayFrame(width, height, now, uniformValues) {
    const gl = webglShaderGl;
    if (!gl || width <= 0 || height <= 0) return;
    const resources = ensureWebglShaderResources(gl);
    if (!resources) return;
    updateWebglMouseActivity(now, width, height);
    webglOverlayShared.renderShaderOverlayFrame(
      gl,
      resources,
      webglShaderCanvas.width,
      webglShaderCanvas.height,
      now,
      webglStartTime,
      webglMouseState,
      uniformValues
    );
  }

  function ensureWebglSceneState(overlayType) {
    const normalizedType = getWebglOverlayType(overlayType);
    if (webglScene && webglScene.type === normalizedType) return webglScene.value;
    webglScene = webglOverlayShared.createCanvasOverlaySceneState(normalizedType);
    return webglScene?.value || null;
  }

  function updateScenePointer(state, mouseState, width, height, smoothing) {
    if (!state) return;
    const hasMouse =
      Number.isFinite(mouseState?.x) &&
      Number.isFinite(mouseState?.y) &&
      mouseState.x > WEBGL_DEFAULT_MOUSE_X * 0.5 &&
      mouseState.y > WEBGL_DEFAULT_MOUSE_Y * 0.5;
    const mouseNormX = hasMouse ? (mouseState.x / Math.max(width, 1) - 0.5) * 2 : 0;
    const mouseNormY = hasMouse ? (mouseState.y / Math.max(height, 1) - 0.5) * 2 : 0;
    const amount = clamp(Number(smoothing) || 0.04, 0.01, 0.2);
    state.pointerX += (mouseNormX - state.pointerX) * amount;
    state.pointerY += (mouseNormY - state.pointerY) * amount;
  }

  function drawGlow(ctx, x, y, radius, color, alpha, verticalScale) {
    const scaleY = Math.max(0.2, Number(verticalScale) || 1);
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(1, scaleY);
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
    gradient.addColorStop(0, rgbaColor(color, alpha));
    gradient.addColorStop(0.45, rgbaColor(scaleColor(color, 0.78), alpha * 0.42));
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawGrain(ctx, width, height, nowSeconds, amount, color) {
    if (amount <= 0.002) return;
    const count = Math.round(24 + amount * 220);
    ctx.save();
    ctx.globalCompositeOperation = 'overlay';
    ctx.fillStyle = rgbaColor(color, 0.018 + amount * 0.08);
    for (let index = 0; index < count; index += 1) {
      const seed = index * 12.713 + nowSeconds * 2.3;
      const gx = ((Math.sin(seed) * 43758.5453) % 1 + 1) % 1;
      const gy = ((Math.sin(seed * 1.67) * 24634.6345) % 1 + 1) % 1;
      ctx.fillRect(Math.floor(gx * width), Math.floor(gy * height), 1, 1);
    }
    ctx.restore();
  }

  function renderLightningRailsWebgl(ctx, width, height, now, uniformValues, mouseState, sceneState) {
    const timeSeconds = Math.max(0, now - webglStartTime) * 0.001 * (0.75 + uniformValues.pulseSpeed * 0.55);
    const state = sceneState || { pointerX: 0, pointerY: 0 };
    updateScenePointer(state, mouseState, width, height, 0.05);
    const primaryColor = mixColor(uniformValues.tint, { r: 255, g: 255, b: 255 }, 0.14);
    const accentColor = mixColor(uniformValues.tint, { r: 255, g: 210, b: 255 }, 0.18);
    const spread = 0.14 + uniformValues.lineSpread * 0.22;
    const rails = [
      width * (0.5 - spread),
      width * 0.5,
      width * (0.5 + spread)
    ];
    const centerX = width * 0.5 + state.pointerX * width * 0.04 * uniformValues.mouseInfluence;
    const centerY = height * 0.5 + state.pointerY * height * 0.03 * uniformValues.mouseInfluence;

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    drawGlow(ctx, centerX, centerY, Math.max(width, height) * 0.32, uniformValues.tint, 0.05 + uniformValues.intensity * 0.06, 1);

    for (let railIndex = 0; railIndex < rails.length; railIndex += 1) {
      const railX = rails[railIndex];
      const railGradient = ctx.createLinearGradient(railX, 0, railX, height);
      railGradient.addColorStop(0, rgbaColor(primaryColor, 0));
      railGradient.addColorStop(0.15, rgbaColor(primaryColor, 0.12 + uniformValues.intensity * 0.12));
      railGradient.addColorStop(0.85, rgbaColor(primaryColor, 0.14 + uniformValues.intensity * 0.14));
      railGradient.addColorStop(1, rgbaColor(primaryColor, 0));
      ctx.strokeStyle = railGradient;
      ctx.lineWidth = 1.1 + uniformValues.intensity * 1.4;
      ctx.beginPath();
      ctx.moveTo(railX, 0);
      ctx.lineTo(railX, height);
      ctx.stroke();

      for (let pulseIndex = 0; pulseIndex < 2; pulseIndex += 1) {
        const offset = railIndex * 0.33 + pulseIndex * 0.47;
        const pulseY = (((timeSeconds * (0.18 + uniformValues.pulseSpeed * 0.12) + offset) % 1) * 1.2 - 0.1) * height;
        drawGlow(
          ctx,
          railX + Math.sin(timeSeconds * 2.2 + offset * 7) * width * 0.01,
          pulseY,
          14 + uniformValues.intensity * 20,
          accentColor,
          0.12 + uniformValues.intensity * 0.12,
          1.35
        );
      }

      if (Number.isFinite(mouseState?.x) && Number.isFinite(mouseState?.y) && mouseState.x > WEBGL_DEFAULT_MOUSE_X * 0.5) {
        const anchorY = clamp(mouseState.y, 0, height);
        const segments = 11;
        ctx.strokeStyle = rgbaColor(accentColor, 0.08 + uniformValues.intensity * 0.14);
        ctx.lineWidth = 1 + uniformValues.intensity * 0.9;
        ctx.beginPath();
        ctx.moveTo(railX, anchorY);
        for (let segmentIndex = 1; segmentIndex <= segments; segmentIndex += 1) {
          const progress = segmentIndex / segments;
          const px = railX + (mouseState.x - railX) * progress;
          const wave = Math.sin(progress * Math.PI * 4 + timeSeconds * 8 + railIndex) * height * 0.012;
          const py = anchorY + (mouseState.y - anchorY) * progress + wave;
          ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
    }

    drawGrain(ctx, width, height, timeSeconds, uniformValues.grain, accentColor);
    ctx.restore();
  }

  function renderAtmosphericFoldsWebgl(ctx, width, height, now, uniformValues) {
    const time = Math.max(0, now - webglStartTime) * 0.001 * 0.09 * uniformValues.pulseSpeed;
    const folds = 28;
    const foldWidth = (width / folds) * (2.4 + uniformValues.lineSpread * 1.8);
    const driftAmplitude = width * (0.03 + uniformValues.lineSpread * 0.03);
    const midColor = mixColor({ r: 14, g: 60, b: 120 }, uniformValues.tint, 0.58);
    const cyanColor = mixColor({ r: 0, g: 160, b: 240 }, uniformValues.tint, 0.68);
    const highlightColor = mixColor({ r: 180, g: 240, b: 255 }, uniformValues.tint, 0.42);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    for (let index = 0; index < folds; index += 1) {
      const normalizedX = index / Math.max(folds - 1, 1);
      const xPos = normalizedX * width + Math.sin(time * 2 + index) * driftAmplitude;
      const baseIntensity = Math.sin(normalizedX * Math.PI) * 0.6 + 0.4;
      const waveIntensity = (Math.sin(time * 3 + index * 0.4) + 1) * 0.5;
      const finalIntensity = baseIntensity * waveIntensity * (0.62 + uniformValues.intensity * 0.9);
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, rgbaColor(midColor, 0));
      gradient.addColorStop(0.4, rgbaColor(midColor, finalIntensity * 0.18));
      gradient.addColorStop(0.72, rgbaColor(cyanColor, finalIntensity * 0.3));
      gradient.addColorStop(1, rgbaColor(highlightColor, finalIntensity * 0.52));
      ctx.fillStyle = gradient;
      ctx.fillRect(xPos - foldWidth * 0.5, 0, foldWidth, height);
    }
    drawGlow(ctx, width * 0.78, height, height * 0.58, cyanColor, 0.08 + uniformValues.intensity * 0.08, 0.85);
    ctx.restore();
  }

  function renderPerspectiveGridWebgl(ctx, width, height, now, uniformValues, mouseState, sceneState) {
    const time = Math.max(0, now - webglStartTime) * 0.001;
    const state = sceneState || { pointerX: 0, pointerY: 0, particles: [] };
    updateScenePointer(state, mouseState, width, height, 0.04);
    const horizon = height * (0.36 + state.pointerY * 0.04 * uniformValues.mouseInfluence);
    const centerX = width * 0.5 + state.pointerX * width * 0.08 * uniformValues.mouseInfluence;
    const color = mixColor({ r: 255, g: 255, b: 255 }, uniformValues.tint, 0.65);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.strokeStyle = rgbaColor(color, 0.11 + uniformValues.intensity * 0.12);
    ctx.lineWidth = 1;

    const verticalCount = Math.round(10 + uniformValues.lineSpread * 18);
    for (let index = 0; index <= verticalCount; index += 1) {
      const t = index / Math.max(verticalCount, 1);
      const xBottom = t * width;
      const xTop = centerX + (t - 0.5) * width * 0.08;
      ctx.beginPath();
      ctx.moveTo(xBottom, height);
      ctx.lineTo(xTop, horizon);
      ctx.stroke();
    }

    const depthCount = Math.round(10 + uniformValues.lineSpread * 16);
    for (let index = 0; index < depthCount; index += 1) {
      const progress = (index + ((time * (0.6 + uniformValues.pulseSpeed * 0.8)) % 1)) / Math.max(depthCount, 1);
      const eased = progress * progress;
      const y = horizon + eased * (height - horizon);
      const inset = width * 0.5 * (1 - Math.pow(progress, 0.72));
      ctx.beginPath();
      ctx.moveTo(centerX - inset, y);
      ctx.lineTo(centerX + inset, y);
      ctx.stroke();
    }

    for (let index = 0; index < state.particles.length; index += 1) {
      const particle = state.particles[index];
      const px = width * (0.5 + particle.x * (0.42 + uniformValues.lineSpread * 0.2)) + state.pointerX * width * 0.04;
      const py = horizon + ((particle.y + time * (0.1 + uniformValues.pulseSpeed * 0.05) * particle.size) % 1) * (height - horizon);
      const alpha = 0.08 + uniformValues.intensity * 0.14;
      ctx.fillStyle = rgbaColor(color, alpha);
      ctx.beginPath();
      ctx.arc(px, py, particle.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function renderNetworkDomeWebgl(ctx, width, height, now, uniformValues, mouseState, sceneState) {
    const time = Math.max(0, now - webglStartTime) * 0.001;
    const state = sceneState || { pointerX: 0, pointerY: 0, lines: [] };
    updateScenePointer(state, mouseState, width, height, 0.05);
    const cx = width * 0.5 + state.pointerX * width * 0.03 * uniformValues.mouseInfluence;
    const cy = height * (1.02 + state.pointerY * 0.02 * uniformValues.mouseInfluence);
    const radius = Math.max(width, height) * (0.62 + uniformValues.lineSpread * 0.2);
    const lineColor = mixColor({ r: 16, g: 185, b: 129 }, uniformValues.tint, 0.42);
    const particleColor = mixColor({ r: 52, g: 211, b: 153 }, uniformValues.tint, 0.36);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    drawGlow(ctx, cx, cy, radius * 0.7, lineColor, 0.08 + uniformValues.intensity * 0.08, 0.75);

    for (let index = 0; index < state.lines.length; index += 1) {
      const line = state.lines[index];
      const longitude = line.offset * Math.PI * 2 + time * (0.18 + line.speed * 0.12) * uniformValues.pulseSpeed;
      ctx.beginPath();
      let started = false;
      for (let segmentIndex = 0; segmentIndex <= 42; segmentIndex += 1) {
        const latitude = (segmentIndex / 42) * (Math.PI / 2.15);
        const x = Math.sin(latitude) * Math.cos(longitude);
        const y = Math.cos(latitude);
        const z = Math.sin(latitude) * Math.sin(longitude);
        if (z < -0.62) continue;
        const scale = 0.55 + z * 0.45;
        const screenX = cx + x * radius * scale;
        const screenY = cy - y * radius * scale * 0.72;
        if (!started) {
          ctx.moveTo(screenX, screenY);
          started = true;
        } else {
          ctx.lineTo(screenX, screenY);
        }
      }
      ctx.strokeStyle = rgbaColor(lineColor, 0.05 + uniformValues.intensity * 0.14);
      ctx.lineWidth = 0.6 + (index % 5 === 0 ? 0.6 : 0);
      ctx.stroke();

      for (let particleIndex = 0; particleIndex < line.particles.length; particleIndex += 1) {
        const particleT = (line.particles[particleIndex] + time * (0.18 + uniformValues.pulseSpeed * 0.08)) % 1;
        const latitude = particleT * (Math.PI / 2.15);
        const x = Math.sin(latitude) * Math.cos(longitude);
        const y = Math.cos(latitude);
        const z = Math.sin(latitude) * Math.sin(longitude);
        if (z < -0.3) continue;
        const scale = 0.55 + z * 0.45;
        const screenX = cx + x * radius * scale;
        const screenY = cy - y * radius * scale * 0.72;
        ctx.fillStyle = rgbaColor(particleColor, 0.12 + uniformValues.intensity * 0.24);
        ctx.beginPath();
        ctx.arc(screenX, screenY, 0.9 + scale * 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    drawGrain(ctx, width, height, time, uniformValues.grain, particleColor);
    ctx.restore();
  }

  function renderAmbientStarfieldWebgl(ctx, width, height, now, uniformValues, mouseState, sceneState) {
    const time = Math.max(0, now - webglStartTime) * 0.001;
    const state = sceneState || { pointerX: 0, pointerY: 0, stars: [] };
    updateScenePointer(state, mouseState, width, height, 0.04);
    const starColor = mixColor({ r: 96, g: 255, b: 180 }, uniformValues.tint, 0.72);
    const warmColor = mixColor({ r: 245, g: 180, b: 90 }, uniformValues.tint, 0.32);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    drawGlow(ctx, width * 0.5 + state.pointerX * width * 0.05, height * 0.08, Math.max(width, height) * 0.34, starColor, 0.05 + uniformValues.intensity * 0.06, 0.62);
    drawGlow(ctx, width * 0.9, height * 0.9, Math.max(width, height) * 0.26, warmColor, 0.04 + uniformValues.intensity * 0.05, 0.9);

    const visibleCount = Math.round(260 + uniformValues.lineSpread * 260);
    for (let index = 0; index < visibleCount; index += 1) {
      const star = state.stars[index];
      const depth = (((star.z - time * (0.08 + uniformValues.pulseSpeed * 0.06) * star.speed) % 1) + 1) % 1;
      const safeDepth = Math.max(depth, 0.035);
      const x = width * 0.5 + ((star.x + state.pointerX * 0.24 * uniformValues.mouseInfluence) / (safeDepth * 2)) * width * 0.18;
      const y = height * 0.5 + ((star.y + state.pointerY * 0.18 * uniformValues.mouseInfluence) / (safeDepth * 2)) * height * 0.18;
      if (x < -8 || x > width + 8 || y < -8 || y > height + 8) continue;
      const twinkle = 0.78 + (Math.sin(time * 2.2 + star.twinkle) + 1) * 0.11;
      const alpha = clamp((1 - safeDepth) * (0.16 + uniformValues.intensity * 0.42) * twinkle, 0.04, 0.86);
      const radius = clamp((1 - safeDepth) * (0.65 + uniformValues.lineSpread) * star.size + 0.15, 0.35, 2.6);
      if (radius > 1.05) {
        ctx.fillStyle = rgbaColor(starColor, alpha * 0.18);
        ctx.beginPath();
        ctx.arc(x, y, radius * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = rgbaColor(starColor, alpha);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    drawGrain(ctx, width, height, time, uniformValues.grain, starColor);
    ctx.restore();
  }

  function renderTerrainMeshWebgl(ctx, width, height, now, uniformValues, mouseState, sceneState) {
    const time = Math.max(0, now - webglStartTime) * 0.001 * 0.9 * uniformValues.pulseSpeed;
    const state = sceneState || { pointerX: 0, pointerY: 0 };
    updateScenePointer(state, mouseState, width, height, 0.04);
    const lineCount = Math.round(24 + uniformValues.lineSpread * 16);
    const points = Math.round(36 + uniformValues.lineSpread * 22);
    const meshColor = mixColor({ r: 168, g: 162, b: 158 }, uniformValues.tint, 0.48);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.translate(0, -height * 0.08 + state.pointerY * height * 0.03 * uniformValues.mouseInfluence);
    ctx.strokeStyle = rgbaColor(meshColor, 0.1 + uniformValues.intensity * 0.16);
    ctx.lineWidth = 0.7 + uniformValues.intensity * 0.4;

    for (let lineIndex = 0; lineIndex <= lineCount; lineIndex += 1) {
      ctx.beginPath();
      for (let pointIndex = 0; pointIndex <= points; pointIndex += 1) {
        const x = (pointIndex / points) * width;
        const yBase = height * 0.18 + (lineIndex / Math.max(lineCount, 1)) * height * 0.92;
        const wave1 = Math.sin(x * 0.003 + time + lineIndex * 0.11 + state.pointerX * 0.8) * (22 + uniformValues.intensity * 22);
        const wave2 = Math.sin(x * 0.007 - time * 0.8) * (10 + uniformValues.intensity * 12);
        const wave3 = Math.cos(lineIndex * 0.18 + time * 1.1 + state.pointerY * 0.7) * (10 + uniformValues.intensity * 8);
        const perspectiveShift = ((lineIndex / Math.max(lineCount, 1)) - 0.5) * state.pointerX * width * 0.07 * uniformValues.mouseInfluence;
        const y = yBase + wave1 + wave2 + wave3;
        if (pointIndex === 0) ctx.moveTo(x + perspectiveShift, y);
        else ctx.lineTo(x + perspectiveShift, y);
      }
      ctx.stroke();
    }
    drawGrain(ctx, width, height, time, uniformValues.grain, meshColor);
    ctx.restore();
  }

  function renderSoundBarsWebgl(ctx, width, height, now, uniformValues, mouseState, sceneState) {
    const time = Math.max(0, now - webglStartTime) * 0.001 * (1.15 + uniformValues.pulseSpeed * 0.35);
    const state = sceneState || { pointerX: 0, pointerY: 0, detail: [] };
    updateScenePointer(state, mouseState, width, height, 0.04);
    const count = Math.round(44 + uniformValues.lineSpread * 60);
    const barWidth = width / Math.max(count, 1);
    const barColor = mixColor({ r: 17, g: 17, b: 17 }, uniformValues.tint, 0.54);
    const reflectionColor = mixColor({ r: 204, g: 204, b: 204 }, uniformValues.tint, 0.32);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';

    for (let index = 0; index < count; index += 1) {
      const x = index * barWidth;
      const center = (index / Math.max(count - 1, 1)) * 2 - 1;
      const envelope = Math.max(0, 1 - Math.abs(center) * 1.25);
      const noise1 = Math.sin(index * 0.22 + time * 1.8) * Math.cos(index * 0.11 + time * 0.8);
      const noise2 = Math.sin(index * 0.45 - time * 1.35) * 0.5;
      const noise3 = state.detail[index % state.detail.length];
      const scaleY = Math.max(0.08, Math.abs(noise1 + noise2 + noise3) * (0.22 + uniformValues.intensity * 0.42) * envelope);
      const barHeight = scaleY * height * 0.6;
      const skew = state.pointerX * uniformValues.mouseInfluence * width * 0.03;
      const yShift = -state.pointerY * uniformValues.mouseInfluence * height * 0.03;
      ctx.fillStyle = rgbaColor(barColor, 0.7 + uniformValues.intensity * 0.2);
      ctx.fillRect(x + skew, height * 0.5 - barHeight + yShift, Math.max(1, barWidth * 0.62), barHeight);
      ctx.fillStyle = rgbaColor(reflectionColor, 0.09 + uniformValues.intensity * 0.12);
      ctx.fillRect(x + skew, height * 0.5 + 4 + yShift, Math.max(1, barWidth * 0.62), barHeight * 0.58);
    }

    drawGrain(ctx, width, height, time, uniformValues.grain, reflectionColor);
    ctx.restore();
  }

  function renderTopologyDotsWebgl(ctx, width, height, now, uniformValues, mouseState, sceneState) {
    const time = Math.max(0, now - webglStartTime) * 0.001 * (0.95 + uniformValues.pulseSpeed * 0.45);
    const state = sceneState || { pointerX: 0, pointerY: 0 };
    updateScenePointer(state, mouseState, width, height, 0.04);
    const step = Math.max(10, Math.round(22 - uniformValues.lineSpread * 10));
    const dotColor = mixColor({ r: 96, g: 165, b: 250 }, uniformValues.tint, 0.72);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    for (let x = 0; x <= width; x += step) {
      for (let y = 0; y <= height; y += step) {
        const waveX = Math.sin(x * 0.01 + time + state.pointerX * 0.9) * (18 + uniformValues.intensity * 26);
        const waveY = Math.cos(y * 0.01 + time * 0.7 + state.pointerY * 0.8) * (16 + uniformValues.intensity * 22);
        const targetY = height * 0.5 + waveX + waveY;
        const distance = Math.abs(y - targetY);
        const radius = Math.max(0.4, 2.6 - distance * (0.011 + uniformValues.lineSpread * 0.004));
        const alpha = Math.max(0.04, 0.8 - distance * (0.0038 - uniformValues.lineSpread * 0.0005));
        if (alpha <= 0.04 && radius <= 0.5) continue;
        const screenX = x + state.pointerX * 7 * uniformValues.mouseInfluence;
        const screenY = y + state.pointerY * 6 * uniformValues.mouseInfluence;
        ctx.fillStyle = rgbaColor(dotColor, alpha);
        ctx.beginPath();
        ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    drawGrain(ctx, width, height, time, uniformValues.grain, dotColor);
    ctx.restore();
  }

  function renderRadialBurstWebgl(ctx, width, height, now, uniformValues, mouseState, sceneState) {
    const elapsedMilliseconds = Math.max(0, now - webglStartTime);
    const elapsedSeconds = elapsedMilliseconds * 0.001;
    const state = sceneState || { pointerX: 0, pointerY: 0, lines: [] };
    updateScenePointer(state, mouseState, width, height, 0.05);
    const lineCount = Math.round(170 + uniformValues.lineSpread * 150);
    while (state.lines.length < lineCount) {
      state.lines.push({
        angle: Math.random() * Math.PI * 2,
        speed: 0.00022 + Math.random() * 0.0005,
        lengthOffset: Math.random(),
        colorOffset: Math.random(),
        widthOffset: Math.random(),
        alphaOffset: Math.random()
      });
    }

    const centerX = width * 0.5 + state.pointerX * width * 0.06 * uniformValues.mouseInfluence;
    const centerY = height * 0.5 + state.pointerY * height * 0.045 * uniformValues.mouseInfluence;
    const maxRadius = Math.max(width, height) * (0.55 + uniformValues.intensity * 0.32);
    const innerRadius = Math.max(18, Math.min(width, height) * (0.09 + (1 - uniformValues.lineSpread) * 0.05));
    const primaryColor = mixColor({ r: 59, g: 130, b: 246 }, uniformValues.tint, 0.45);
    const accentColor = mixColor({ r: 139, g: 92, b: 246 }, uniformValues.tint, 0.35);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    drawGlow(ctx, centerX, centerY, maxRadius * 0.42, uniformValues.tint, 0.08 + uniformValues.intensity * 0.08, 1);

    for (let index = 0; index < lineCount; index += 1) {
      const line = state.lines[index];
      line.angle += line.speed * (0.75 + uniformValues.pulseSpeed * 0.55);
      const currentAngle = line.angle + state.pointerX * 0.08 * uniformValues.mouseInfluence;
      const pulse = Math.sin(elapsedMilliseconds * 0.0021 + line.lengthOffset * Math.PI * 2) * 0.2 + 0.82;
      const length = maxRadius * (0.62 + pulse * (0.24 + uniformValues.intensity * 0.22));
      const startX = centerX + Math.cos(currentAngle) * innerRadius;
      const startY = centerY + Math.sin(currentAngle) * innerRadius;
      const endX = centerX + Math.cos(currentAngle) * length;
      const endY = centerY + Math.sin(currentAngle) * length;
      const lineColor = line.colorOffset > 0.5 ? primaryColor : accentColor;
      const opacityBase = 0.08 + uniformValues.intensity * 0.22 + line.alphaOffset * 0.12;
      const opacity = opacityBase * (0.75 + Math.sin(elapsedMilliseconds * 0.0012 + line.alphaOffset * Math.PI * 2) * 0.25);
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, rgbaColor(lineColor, 0));
      gradient.addColorStop(0.18, rgbaColor(lineColor, opacity));
      gradient.addColorStop(0.82, rgbaColor(lineColor, opacity * 0.52));
      gradient.addColorStop(1, rgbaColor(lineColor, 0));
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1 + line.widthOffset * (1.2 + uniformValues.intensity * 1.1);
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
    drawGrain(ctx, width, height, elapsedSeconds, uniformValues.grain, accentColor);
    ctx.restore();
  }

  function renderWebglOverlayFrame(targetCtx, width, height, now, uniformValues, mouseState) {
    webglOverlayShared.renderCanvasOverlayFrame(
      targetCtx,
      width,
      height,
      now,
      webglStartTime,
      uniformValues,
      mouseState,
      ensureWebglSceneState(uniformValues.overlayType)
    );
  }

  function blendWebglIntoData(data, width, height, now, uniformValues) {
    if (!data || !isWebglAsciiFxEnabled()) return;
    webglSampleCanvas.width = Math.max(1, width);
    webglSampleCanvas.height = Math.max(1, height);
    webglSampleCtx.setTransform(1, 0, 0, 1, 0, 0);
    webglSampleCtx.clearRect(0, 0, width, height);
    if (usesShaderOverlay(uniformValues)) {
      syncShaderCanvasSize(width, height, 1);
      renderShaderOverlayFrame(width, height, now, uniformValues);
      webglSampleCtx.drawImage(webglShaderCanvas, 0, 0, width, height);
    } else {
      renderWebglOverlayFrame(
        webglSampleCtx,
        width,
        height,
        now,
        uniformValues,
        getWebglMouseState(width, height)
      );
    }
    const overlayData = webglSampleCtx.getImageData(0, 0, width, height).data;
    for (let index = 0; index < data.length; index += 4) {
      const alpha = (overlayData[index + 3] / 255) * uniformValues.opacity;
      if (alpha <= 0.001) continue;
      const nextRed = 255 - ((255 - data[index]) * (255 - overlayData[index])) / 255;
      const nextGreen = 255 - ((255 - data[index + 1]) * (255 - overlayData[index + 1])) / 255;
      const nextBlue = 255 - ((255 - data[index + 2]) * (255 - overlayData[index + 2])) / 255;
      data[index] = Math.round(data[index] + (nextRed - data[index]) * alpha);
      data[index + 1] = Math.round(data[index + 1] + (nextGreen - data[index + 1]) * alpha);
      data[index + 2] = Math.round(data[index + 2] + (nextBlue - data[index + 2]) * alpha);
      data[index + 3] = 255;
    }
  }

  function getRetroDuotonePalette() {
    const key = String(SETTINGS.retroDuotone || 'amber-classic');
    return RETRO_DUOTONE_PALETTES[key] || RETRO_DUOTONE_PALETTES['amber-classic'];
  }

  function selectCharset() {
    if (SETTINGS.style === 'letters') {
      const legacySet = String(SETTINGS.letterSet || 'alphabet').toLowerCase();
      return CHARSETS['letters-' + legacySet] || CHARSETS['letters-alphabet'];
    }
    if (SETTINGS.style === 'braille') return BRAILLE_VARIANTS[SETTINGS.brailleVariant] || BRAILLE_VARIANTS.standard;
    if (SETTINGS.style === 'claude') return CHARSETS.blocks;
    if (SETTINGS.style === 'halftone') return HALFTONE_CHARS;
    if (isWaveDitherStyle(SETTINGS.style)) return HALFTONE_CHARS;
    if (SETTINGS.style === 'retro' || SETTINGS.style === 'winamp') return RETRO_CHARS;
    if (SETTINGS.style === 'terminal') {
      const key = String(SETTINGS.terminalCharset || 'binary');
      return TERMINAL_CHARSET_PRESETS[key] || TERMINAL_CHARSET_PRESETS.binary;
    }
    if (SETTINGS.style === 'classic' && SETTINGS.charset === 'custom') {
      const customSet = typeof SETTINGS.customCharset === 'string'
        ? SETTINGS.customCharset.slice(0, ${Wd})
        : '';
      return customSet.length > 0 ? customSet : CHARSETS.standard;
    }
    if (SETTINGS.style === 'matrix') return MATRIX_CHARS;
    return CHARSETS[SETTINGS.charset] || CHARSETS.standard;
  }

  function getLocalEdgeContrast(values, x, y, cols, rows) {
    const idx = y * cols + x;
    const center = values[idx] ?? 0;
    const left = x > 0 ? values[idx - 1] ?? center : center;
    const right = x + 1 < cols ? values[idx + 1] ?? center : center;
    const up = y > 0 ? values[idx - cols] ?? center : center;
    const down = y + 1 < rows ? values[idx + cols] ?? center : center;
    const gradientX = Math.abs(right - left);
    const gradientY = Math.abs(down - up);
    return clamp((gradientX + gradientY) / 510, 0, 1);
  }

  function sampleBlockValue(values, startX, startY, cols, rows, blockWidth, blockHeight) {
    if (!values) return 0;
    let total = 0;
    let count = 0;
    const maxX = Math.min(cols, startX + blockWidth);
    const maxY = Math.min(rows, startY + blockHeight);
    for (let y = startY; y < maxY; y += 1) {
      for (let x = startX; x < maxX; x += 1) {
        total += values[y * cols + x] ?? 0;
        count += 1;
      }
    }
    return count > 0 ? total / count : 0;
  }

  function sampleBlockRgb(data, startX, startY, cols, rows, blockWidth, blockHeight) {
    if (!data) return { r: 0, g: 0, b: 0 };
    let totalR = 0;
    let totalG = 0;
    let totalB = 0;
    let count = 0;
    const maxX = Math.min(cols, startX + blockWidth);
    const maxY = Math.min(rows, startY + blockHeight);
    for (let y = startY; y < maxY; y += 1) {
      for (let x = startX; x < maxX; x += 1) {
        const offset = (y * cols + x) * 4;
        totalR += data[offset] ?? 0;
        totalG += data[offset + 1] ?? 0;
        totalB += data[offset + 2] ?? 0;
        count += 1;
      }
    }
    if (count <= 0) return { r: 0, g: 0, b: 0 };
    return {
      r: totalR / count,
      g: totalG / count,
      b: totalB / count,
    };
  }

  function getBackgroundDitherColor(r, g, b, gray) {
    if (SETTINGS.style === 'claude') {
      const intensity = clamp(gray + 30, 0, 255);
      return {
        r: clamp(Math.floor(intensity * 1.02), 0, 255),
        g: clamp(Math.floor(intensity * 0.52), 0, 255),
        b: clamp(Math.floor(intensity * 0.1), 0, 255),
      };
    }
    if (SETTINGS.style === 'terminal') {
      const phosphor = clamp(gray + 28, 0, 255);
      return {
        r: clamp(Math.floor(phosphor * 0.14), 0, 96),
        g: phosphor,
        b: clamp(Math.floor(phosphor * 0.24), 0, 116),
      };
    }
    if (SETTINGS.style === 'retro' || SETTINGS.style === 'winamp') {
      const palette = getRetroDuotonePalette();
      const sepia = clamp(Math.floor(gray * 1.04 + 12), 0, 255);
      const tone = clamp(Math.pow(sepia / 255, 0.94), 0, 1);
      return {
        r: lerpChannel(palette.low.r, palette.high.r, tone),
        g: lerpChannel(palette.low.g, palette.high.g, tone),
        b: lerpChannel(palette.low.b, palette.high.b, tone),
      };
    }
    if (SETTINGS.colorMode === 'color') {
      return {
        r: clamp(Math.floor(r), 0, 255),
        g: clamp(Math.floor(g), 0, 255),
        b: clamp(Math.floor(b), 0, 255),
      };
    }
    if (SETTINGS.colorMode === 'green') {
      const intensity = clamp(gray + 20, 0, 255);
      return {
        r: clamp(Math.floor(intensity * 0.2), 0, 255),
        g: intensity,
        b: clamp(Math.floor(intensity * 0.3), 0, 255),
      };
    }
    if (SETTINGS.colorMode === 'amber') {
      const intensity = clamp(gray + 18, 0, 255);
      return {
        r: intensity,
        g: clamp(Math.floor(intensity * 0.72), 0, 255),
        b: clamp(Math.floor(intensity * 0.16), 0, 255),
      };
    }
    if (SETTINGS.colorMode === 'custom') {
      const rawColor = typeof SETTINGS.customColor === 'string' ? SETTINGS.customColor.trim() : '';
      const match = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(rawColor);
      const hex =
        match && match[1].length === 3
          ? match[1].split('').map((char) => char + char).join('')
          : match
            ? match[1]
            : 'ffffff';
      const baseR = parseInt(hex.slice(0, 2), 16);
      const baseG = parseInt(hex.slice(2, 4), 16);
      const baseB = parseInt(hex.slice(4, 6), 16);
      const intensity = gray / 255;
      return {
        r: clamp(Math.floor(baseR * intensity), 0, 255),
        g: clamp(Math.floor(baseG * intensity), 0, 255),
        b: clamp(Math.floor(baseB * intensity), 0, 255),
      };
    }
    return { r: gray, g: gray, b: gray };
  }

  function getBorderGlowColor() {
    if (SETTINGS.style === 'terminal') return { r: 96, g: 255, b: 164 };
    if (SETTINGS.style === 'claude') return { r: 255, g: 186, b: 118 };
    if (SETTINGS.style === 'retro' || SETTINGS.style === 'winamp') {
      const palette = getRetroDuotonePalette();
      return { ...palette.high };
    }
    if (SETTINGS.colorMode === 'green') return { r: 110, g: 255, b: 175 };
    if (SETTINGS.colorMode === 'amber') return { r: 255, g: 192, b: 118 };
    if (SETTINGS.colorMode === 'custom') {
      const rawColor = typeof SETTINGS.customColor === 'string' ? SETTINGS.customColor.trim() : '';
      const match = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(rawColor);
      const hex = match ? (match[1].length === 3 ? match[1].split('').map((char) => char + char).join('') : match[1]) : 'ffffff';
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
      };
    }
    if (SETTINGS.colorMode === 'color') return { r: 176, g: 214, b: 255 };
    return { r: 255, g: 255, b: 255 };
  }

  function drawBorderGlowOverlay(ctx, width, height, strength) {
    const glowStrength = clamp(Number(strength ?? 0) || 0, 0, 1);
    if (!ctx || width <= 0 || height <= 0 || glowStrength <= 0.001) return;
    const glowColor = getBorderGlowColor();
    const shortestEdge = Math.max(1, Math.min(width, height));
    const glowSize = Math.max(10, shortestEdge * (0.055 + glowStrength * 0.24));
    const edgeAlpha = clamp(0.018 + glowStrength * 0.34, 0, 0.62);
    const cornerRadius = glowSize * 1.35;
    const edgeColor = (alpha) =>
      applyOutputPolarity(
        'rgba(' + glowColor.r + ', ' + glowColor.g + ', ' + glowColor.b + ', ' + clamp(alpha, 0, 1).toFixed(3) + ')'
      );

    ctx.save();
    ctx.globalCompositeOperation = SETTINGS.themeOutputInvert ? 'multiply' : 'screen';
    ctx.globalAlpha = 1;

    const top = ctx.createLinearGradient(0, 0, 0, glowSize);
    top.addColorStop(0, edgeColor(edgeAlpha * 1.12));
    top.addColorStop(0.58, edgeColor(edgeAlpha * 0.44));
    top.addColorStop(1, edgeColor(0));
    ctx.fillStyle = top;
    ctx.fillRect(0, 0, width, glowSize);

    const bottom = ctx.createLinearGradient(0, height, 0, height - glowSize);
    bottom.addColorStop(0, edgeColor(edgeAlpha * 1.12));
    bottom.addColorStop(0.58, edgeColor(edgeAlpha * 0.44));
    bottom.addColorStop(1, edgeColor(0));
    ctx.fillStyle = bottom;
    ctx.fillRect(0, height - glowSize, width, glowSize);

    const left = ctx.createLinearGradient(0, 0, glowSize, 0);
    left.addColorStop(0, edgeColor(edgeAlpha));
    left.addColorStop(0.58, edgeColor(edgeAlpha * 0.4));
    left.addColorStop(1, edgeColor(0));
    ctx.fillStyle = left;
    ctx.fillRect(0, 0, glowSize, height);

    const right = ctx.createLinearGradient(width, 0, width - glowSize, 0);
    right.addColorStop(0, edgeColor(edgeAlpha));
    right.addColorStop(0.58, edgeColor(edgeAlpha * 0.4));
    right.addColorStop(1, edgeColor(0));
    ctx.fillStyle = right;
    ctx.fillRect(width - glowSize, 0, glowSize, height);

    const cornerAlpha = edgeAlpha * 0.9;
    const drawCorner = (x, y) => {
      const radial = ctx.createRadialGradient(x, y, 0, x, y, cornerRadius);
      radial.addColorStop(0, edgeColor(cornerAlpha));
      radial.addColorStop(0.65, edgeColor(cornerAlpha * 0.28));
      radial.addColorStop(1, edgeColor(0));
      ctx.fillStyle = radial;
      ctx.fillRect(x - cornerRadius, y - cornerRadius, cornerRadius * 2, cornerRadius * 2);
    };
    drawCorner(0, 0);
    drawCorner(width, 0);
    drawCorner(0, height);
    drawCorner(width, height);
    ctx.restore();
  }

  function charFromGray(gray, charset, x, y, cols, rows, edgeContrast = 0) {
    const normalized = gray / 255;
    if (SETTINGS.style === 'halftone') {
      const dotRamp = HALFTONE_CHARS;
      const screen =
        (Math.sin((x * 0.82 + y * 0.33) * 1.55) + Math.cos((x * 0.27 - y * 0.94) * 1.25) + 2) * 0.25;
      const adjusted = clamp(Math.pow(normalized, 0.9) * 0.8 + screen * 0.2, 0, 1);
      const idx = Math.floor(adjusted * (dotRamp.length - 1));
      return dotRamp[clamp(idx, 0, dotRamp.length - 1)];
    }
    if (SETTINGS.style === 'braille') {
      const variant = String(SETTINGS.brailleVariant || 'standard');
      const variantBias = variant === 'dense' ? 0.11 : variant === 'sparse' ? -0.08 : 0;
      const screen =
        (Math.sin((x * 0.73 + y * 0.41) * 1.37) + Math.cos((x * 0.29 - y * 0.88) * 1.11) + 2) * 0.25;
      const concentration = clamp(edgeContrast * 1.55 + Math.max(0, normalized - 0.45) * 0.28, 0, 1);
      const adjusted = clamp(
        Math.pow(normalized, 0.88) * 0.82 + screen * 0.11 + concentration * 0.24 + variantBias,
        0,
        1
      );
      const idx = Math.floor(adjusted * (charset.length - 1));
      return charset[clamp(idx, 0, charset.length - 1)];
    }
    if (SETTINGS.style === 'dotcross') {
      const dotRamp = '  .·:oO';
      const crossRamp = '  ·+xX#';
      const screen =
        (Math.sin((x * 0.82 + y * 0.33) * 1.55) + Math.cos((x * 0.27 - y * 0.94) * 1.25) + 2) * 0.25;
      const adjusted = clamp(Math.pow(normalized, 0.9) * 0.82 + screen * 0.18, 0, 1);
      const dotIdx = Math.floor(adjusted * (dotRamp.length - 1));
      const crossIdx = Math.floor(adjusted * (crossRamp.length - 1));
      const edgeMix = clamp(edgeContrast * 1.4 + Math.max(0, adjusted - 0.5) * 0.22, 0, 1);
      const weave =
        (Math.sin((x + 1) * 1.71 + (y + 1) * 2.37) + Math.cos((x + 1) * 0.83 - (y + 1) * 1.29) + 2) * 0.25;
      const useCross = edgeMix > clamp(0.46 + weave * 0.28, 0, 1);
      const glyph = useCross
        ? crossRamp[clamp(crossIdx, 0, crossRamp.length - 1)]
        : dotRamp[clamp(dotIdx, 0, dotRamp.length - 1)];
      return glyph || ' ';
    }
    if (SETTINGS.style === 'particles') {
      const density = clamp(SETTINGS.particleDensity ?? 0.5, 0.05, 1);
      const nx = cols > 1 ? (x / (cols - 1)) * 2 - 1 : 0;
      const ny = rows > 1 ? (y / (rows - 1)) * 2 - 1 : 0;
      const center = 1 - clamp(Math.sqrt(nx * nx + ny * ny), 0, 1);
      const centerBias = Math.pow(center, 1.35) * density * 0.42;
      const edgeBoost = clamp(edgeContrast * 1.6 + Math.max(0, normalized - 0.45) * 0.24, 0, 1);
      const grain = (Math.sin((x + 1) * 12.9898 + (y + 1) * 78.233) + 1) * 0.5;
      const jitter = (grain - 0.5) * (0.18 - density * 0.08);
      const brightnessBias = clamp((SETTINGS.brightness ?? 0) / 50, -1, 1) * 0.12;
      const threshold = clamp(
        1 - density - centerBias * 0.95 - edgeBoost * 0.42 + jitter * 0.9 - brightnessBias * 0.25,
        0.01,
        0.95
      );
      const fillBias = Math.pow(normalized, 0.82) * 0.18 + edgeBoost * 0.15 + Math.max(0, brightnessBias) * 0.1;
      return normalized + fillBias >= threshold ? (SETTINGS.particleChar || '*') : ' ';
    }
    let adjusted = normalized;
    if (SETTINGS.style === 'retro' || SETTINGS.style === 'winamp') {
      const retroNoise = clamp(Number(SETTINGS.retroNoise ?? 0.45) || 0, 0, 1);
      const grain = (Math.sin((x + 1) * 12.9898 + (y + 1) * 78.233) + 1) * 0.5;
      const jitter = (grain - 0.5) * retroNoise * 0.22;
      adjusted = clamp(Math.pow(normalized, 0.78) + jitter, 0, 1);
      const bands = 10 + Math.round(retroNoise * 16);
      adjusted = Math.round(adjusted * bands) / Math.max(1, bands);
    }
    if (SETTINGS.style === 'terminal') adjusted = Math.pow(normalized, 0.82);
    if (SETTINGS.style === 'matrix') adjusted = Math.pow(normalized, 0.7);
    const idx = Math.floor(adjusted * (charset.length - 1));
    return charset[clamp(idx, 0, charset.length - 1)];
  }

  function colorFromMode(r, g, b, gray, x, y, cols, rows, edgeContrast = 0) {
    let particleBoost = 0;
    let particleColorGain = 1;
    if (SETTINGS.style === 'particles') {
      const density = clamp(SETTINGS.particleDensity ?? 0.5, 0.05, 1);
      const nx = cols > 1 ? (x / (cols - 1)) * 2 - 1 : 0;
      const ny = rows > 1 ? (y / (rows - 1)) * 2 - 1 : 0;
      const center = 1 - clamp(Math.sqrt(nx * nx + ny * ny), 0, 1);
      const centerGlow = Math.pow(center, 1.4) * density;
      const edgeGlow = clamp(edgeContrast, 0, 1);
      particleBoost = centerGlow * (24 + density * 72) + edgeGlow * (18 + density * 34);
      particleColorGain = 1 + centerGlow * 0.45 + edgeGlow * 0.22;
    }
    const boostedGray = clamp(gray + particleBoost, 0, 255);

    if (SETTINGS.style === 'claude') {
      const intensity = clamp(gray + 36, 0, 255);
      const red = clamp(Math.floor(intensity * 1.03), 0, 255);
      const green = clamp(Math.floor(intensity * 0.5), 0, 255);
      const blue = clamp(Math.floor(intensity * 0.08), 0, 255);
      return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }

    if (SETTINGS.style === 'retro' || SETTINGS.style === 'winamp') {
      const retroNoise = clamp(Number(SETTINGS.retroNoise ?? 0.45) || 0, 0, 1);
      const palette = getRetroDuotonePalette();
      const nx = cols > 1 ? (x / (cols - 1)) * 2 - 1 : 0;
      const ny = rows > 1 ? (y / (rows - 1)) * 2 - 1 : 0;
      const vignette = 1 - clamp(Math.sqrt(nx * nx + ny * ny), 0, 1) * 0.32;
      const grain = Math.sin((x + 1) * 12.9898 + (y + 1) * 78.233);
      const shimmer = Math.sin(x * 0.13 + y * 0.07) * 5;
      const noise = Math.sin((x + 1) * 41.13 + (y + 1) * 17.37 + gray * 0.031);
      const warm = clamp(
        gray * 1.06 + 14 + shimmer + grain * (3 + retroNoise * 7.5) + noise * (1 + retroNoise * 16),
        0,
        255
      );
      const tone = clamp(Math.pow((warm * vignette) / 255, 0.86), 0, 1);
      const red = lerpChannel(palette.low.r, palette.high.r, tone);
      const green = lerpChannel(palette.low.g, palette.high.g, tone);
      const blue = lerpChannel(palette.low.b, palette.high.b, tone);
      return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }

    if (SETTINGS.style === 'terminal') {
      const phosphor = clamp(gray + 32, 0, 255);
      const scanShade = ((x + y) & 1) === 0 ? 1 : 0.84;
      const green = clamp(Math.floor(phosphor * scanShade), 0, 255);
      const red = clamp(Math.floor(green * 0.12), 0, 72);
      const blue = clamp(Math.floor(green * 0.2), 0, 88);
      return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }

    if (SETTINGS.colorMode === 'color') {
      const boostedR = clamp(Math.floor(r * particleColorGain + particleBoost * 0.22), 0, 255);
      const boostedG = clamp(Math.floor(g * particleColorGain + particleBoost * 0.28), 0, 255);
      const boostedB = clamp(Math.floor(b * particleColorGain + particleBoost * 0.2), 0, 255);
      return 'rgb(' + boostedR + ', ' + boostedG + ', ' + boostedB + ')';
    }

    if (SETTINGS.colorMode === 'green') {
      const intensity = clamp(boostedGray + 25, 0, 255);
      return 'rgb(' + Math.floor(intensity * 0.2) + ', ' + intensity + ', ' + Math.floor(intensity * 0.3) + ')';
    }

    if (SETTINGS.colorMode === 'amber') {
      const intensity = clamp(boostedGray + 20, 0, 255);
      return 'rgb(' + intensity + ', ' + Math.floor(intensity * 0.7) + ', ' + Math.floor(intensity * 0.15) + ')';
    }

    if (SETTINGS.colorMode === 'custom') {
      const rawColor = typeof SETTINGS.customColor === 'string' ? SETTINGS.customColor.trim() : '';
      const match = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(rawColor);
      const hex = match ? (match[1].length === 3 ? match[1].split('').map((char) => char + char).join('') : match[1]) : 'ffffff';
      const baseR = parseInt(hex.slice(0, 2), 16);
      const baseG = parseInt(hex.slice(2, 4), 16);
      const baseB = parseInt(hex.slice(4, 6), 16);
      const intensity = boostedGray / 255;
      const red = clamp(Math.floor(baseR * intensity), 0, 255);
      const green = clamp(Math.floor(baseG * intensity), 0, 255);
      const blue = clamp(Math.floor(baseB * intensity), 0, 255);
      return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }

    return 'rgb(' + boostedGray + ', ' + boostedGray + ', ' + boostedGray + ')';
  }

  function applyOverlayFx(gray, x, y, cols, rows, timeSeconds) {
    const preset = SETTINGS.overlayPreset || 'none';
    const strength = clamp(SETTINGS.overlayStrength ?? 0.4, 0, 1);
    if (preset === 'none' || strength <= 0) return gray;

    if (preset === 'noise') {
      const scale = clamp(SETTINGS.noiseScale ?? 24, 4, 120);
      const speed = clamp(SETTINGS.noiseSpeed ?? 1, 0, 4);
      const projection = getDirectionProjection(SETTINGS.noiseDirection || 'right');
      const { primaryNorm, secondaryNorm } = projectDirection(x, y, cols, rows, projection);
      const flowSpan = Math.max(cols, rows);
      const phase = timeSeconds * speed * 2.4;
      const axisPrimary = (primaryNorm * flowSpan + 17.3) / scale;
      const axisSecondary = (secondaryNorm * flowSpan - 9.7) / scale;
      const coherent = Math.sin(axisPrimary + phase) * Math.cos(axisSecondary - phase * 0.73);
      const grain = Math.sin(primaryNorm * flowSpan * 1.37 + secondaryNorm * flowSpan * 2.11 + phase * 6.2);
      const amount = 16 + strength * 72;
      return clamp(gray + (coherent * 0.65 + grain * 0.35) * amount, 0, 255);
    }

    if (preset === 'waves') {
      if (SETTINGS.style === 'dither2') return gray;
      const waveAmplitude = clamp(Number(SETTINGS.dither2WaveAmplitude ?? 0.3) || 0, 0, 1);
      const waveFrequency = clamp(Number(SETTINGS.dither2WaveFrequency ?? 3) || 0, 0.5, 8);
      const waveSpeed = clamp(Number(SETTINGS.dither2WaveSpeed ?? 0.05) || 0, 0, 0.25);
      const animationEnabled = SETTINGS.dither2AnimationEnabled !== false;
      const px = cols > 1 ? x / (cols - 1) : 0.5;
      const py = rows > 1 ? y / (rows - 1) : 0.5;
      const aspect = cols / Math.max(rows, 1);
      const uvX = (px - 0.5) * aspect;
      const uvY = 0.5 - py;
      const patternTime = animationEnabled ? timeSeconds : 0;
      const field = clamp(ditherTwoPattern(uvX, uvY, patternTime, waveSpeed, waveFrequency, waveAmplitude), 0, 1);
      const baseLevel = gray / 255;
      const mixedLevel = clamp(
        baseLevel * (0.76 + field * 0.38) + (field - 0.5) * (0.18 + waveAmplitude * 0.26),
        0,
        1
      );
      return clamp(mixedLevel * 255, 0, 255);
    }

    if (preset === 'intervals' || preset === 'lines') {
      const spacing = clamp(SETTINGS.intervalSpacing ?? 12, 4, 64);
      const speed = clamp(SETTINGS.intervalSpeed ?? 1, 0, 4);
      const width = clamp(SETTINGS.intervalWidth ?? 2, 1, 8);
      const projection = getDirectionProjection(SETTINGS.intervalDirection || 'down');
      const { primaryNorm, secondaryNorm } = projectDirection(x, y, cols, rows, projection);
      const flowSpan = Math.max(cols, rows);
      const axisCoord = primaryNorm * flowSpan;
      const crossCoord = secondaryNorm * flowSpan;
      const offsetRaw = timeSeconds * speed * spacing * 1.7;
      const offset = ((offsetRaw % spacing) + spacing) % spacing;
      const phase = (axisCoord + offset) % spacing;
      const distance = Math.min(phase, spacing - phase);
      const lineMask = 1 - clamp(distance / width, 0, 1);
      const wave =
        Math.sin((axisCoord / spacing) * Math.PI * 2 + timeSeconds * speed * 1.8 + (crossCoord / Math.max(flowSpan, 1)) * 1.1);
      const amount = strength * 88;
      return clamp(gray + lineMask * amount * 0.85 + wave * amount * 0.32, 0, 255);
    }

    if (preset === 'beam') {
      const speed = 0.45 + strength * 2.2;
      const width = 0.08 + strength * 0.22;
      const projection = getDirectionProjection(SETTINGS.beamDirection || 'right');
      const { primaryNorm } = projectDirection(x, y, cols, rows, projection);
      const sweepRaw = (timeSeconds * speed) % 1.2;
      const center = ((sweepRaw + 1.2) % 1.2) - 0.1;
      const distance = Math.abs(primaryNorm - center);
      const beam = Math.max(0, 1 - distance / width);
      return clamp(gray + beam * (34 + strength * 120), 0, 255);
    }

    if (preset === 'glitch') {
      const projection = getDirectionProjection(SETTINGS.glitchDirection || 'right');
      const { primaryNorm, secondaryNorm } = projectDirection(x, y, cols, rows, projection);
      const flowSpan = Math.max(cols, rows);
      const secondaryCoord = secondaryNorm * flowSpan;
      const laneHeight = 2 + Math.floor((1 - strength) * 3);
      const lane = Math.floor(secondaryCoord / laneHeight);
      const windowTick = Math.floor(timeSeconds * (0.75 + strength * 1.35));
      const laneChance = (Math.sin((lane + 1) * 19.73 + windowTick * 7.11) + 1) * 0.5;
      const laneActive = laneChance > 0.74 ? 1 : 0;
      const laneSpeed =
        0.12 + ((Math.sin((lane + 1) * 6.37) + 1) * 0.5) * (0.22 + strength * 0.34);
      const lanePhase = (Math.sin((lane + 1) * 2.91) + 1) * 0.5;
      const head = (timeSeconds * laneSpeed + lanePhase) % 1;
      const trailLength = 0.12 + strength * 0.28;
      const distanceAcross = (primaryNorm - head + 1) % 1;
      const trail = Math.max(0, 1 - distanceAcross / trailLength);
      const scanPulse = Math.max(
        0,
        Math.sin(distanceAcross * Math.PI * (5 + strength * 8) - timeSeconds * (2 + strength * 5))
      );
      const rowGlow = laneActive * (trail * (18 + strength * 86) + scanPulse * (6 + strength * 26));
      const syncTear =
        laneActive *
        Math.sin(primaryNorm * Math.PI * 2 * (2 + strength * 4) - timeSeconds * (1.4 + strength * 2.2)) *
        (3 + strength * 14);
      const staticNoise = Math.sin((x + 1) * 17.7 + (y + 1) * 29.3 + timeSeconds * 9.1) * (1.5 + strength * 4.5);
      return clamp(gray + rowGlow + syncTear + staticNoise + secondaryNorm * 0.5, 0, 255);
    }

    if (preset === 'crt') {
      const projection = getDirectionProjection(SETTINGS.crtDirection || 'down');
      const { primaryNorm, secondaryNorm } = projectDirection(x, y, cols, rows, projection);
      const flowSpan = Math.max(cols, rows);
      const primaryCoord = primaryNorm * flowSpan;
      const secondaryCoord = secondaryNorm * flowSpan;
      const nx = (x / Math.max(cols - 1, 1)) * 2 - 1;
      const ny = (y / Math.max(rows - 1, 1)) * 2 - 1;
      const radial = nx * nx * 0.84 + ny * ny * 1.12;
      const curvature = 1 - clamp(radial, 0, 1);
      const edgeFalloff = (1 - curvature) * (24 + strength * 116);
      const scanline = Math.sin((primaryCoord + timeSeconds * (34 + strength * 24)) * Math.PI);
      const triad = Math.sin((secondaryCoord + timeSeconds * 8.5) * 2.9);
      const flicker = Math.sin(timeSeconds * 61) * 0.55 + Math.sin(timeSeconds * 23) * 0.45;
      const rollRaw = (timeSeconds * (0.12 + strength * 0.24)) % 1;
      const rollCenter = (rollRaw + 1) % 1;
      const rollDistance = Math.abs(primaryNorm - rollCenter);
      const rollGlow = Math.max(0, 1 - rollDistance / (0.045 + strength * 0.08));
      const laneToken = Math.sin((secondaryCoord + 1) * 14.37 + Math.floor(timeSeconds * 12) * 1.91);
      const laneActive = laneToken > 0.72 ? 1 : 0;
      const streakRaw = (timeSeconds * (0.55 + strength * 1.35) + secondaryCoord * 0.037) % 1;
      const streakHead = (streakRaw + 1) % 1;
      const streakDistance = Math.abs(primaryNorm - streakHead);
      const streakCore = Math.max(0, 1 - streakDistance / (0.014 + strength * 0.03));
      const streakTicks = Math.max(
        0,
        Math.sin(primaryNorm * 170 - timeSeconds * (28 + strength * 58) + secondaryCoord * 2.4)
      );
      const glitchStreak = laneActive * (streakCore * (8 + strength * 34) + streakTicks * (2 + strength * 10));
      const overdrive = Math.pow(gray / 255, 1.35) * (22 + strength * 72);
      const crush = Math.pow(1 - gray / 255, 1.2) * (8 + strength * 24);
      const boost =
        scanline * (14 + strength * 36) +
        triad * (6 + strength * 14) +
        flicker * (5 + strength * 14) +
        rollGlow * (18 + strength * 64) +
        glitchStreak +
        overdrive -
        crush;
      return clamp(gray + boost - edgeFalloff, 0, 255);
    }

    return gray;
  }

  function drawError(message) {
    ctx.clearRect(0, 0, renderWidth, renderHeight);
    webglCtx.clearRect(0, 0, renderWidth, renderHeight);
    if (webglShaderGl) {
      webglShaderGl.viewport(0, 0, webglShaderCanvas.width || 1, webglShaderCanvas.height || 1);
      webglShaderGl.clearColor(0, 0, 0, 0);
      webglShaderGl.clear(webglShaderGl.COLOR_BUFFER_BIT);
    }
    ctx.fillStyle = '#fca5a5';
    ctx.font = '16px ' + (SETTINGS.renderFont || 'Helvetica, Arial, sans-serif');
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(message, renderWidth / 2, renderHeight / 2);
  }

  function readBounds() {
    const rect = mount.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width || mount.clientWidth || window.innerWidth || 1));
    const height = Math.max(1, Math.round(rect.height || mount.clientHeight || window.innerHeight || 1));
    return {
      left: rect.left,
      top: rect.top,
      width,
      height,
      right: rect.left + width,
      bottom: rect.top + height
    };
  }

  function resize() {
    bounds = readBounds();
    viewWidth = bounds.width;
    viewHeight = bounds.height;
  }

  function parseAspectRatio(aspectValue) {
    if (!aspectValue || aspectValue === 'source') return null;
    const parts = String(aspectValue).split(':');
    if (parts.length !== 2) return null;
    const w = Number(parts[0]);
    const h = Number(parts[1]);
    if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) return null;
    return w / h;
  }

  function getSourceSize(element) {
    return {
      width: element.videoWidth || element.naturalWidth || 0,
      height: element.videoHeight || element.naturalHeight || 0
    };
  }

  function getCoverCropRect(sourceWidth, sourceHeight, targetAspect) {
    const safeSourceWidth = Math.max(1, Number(sourceWidth) || 1);
    const safeSourceHeight = Math.max(1, Number(sourceHeight) || 1);
    const safeTargetAspect = Math.max(0.0001, Number(targetAspect) || safeSourceWidth / safeSourceHeight);
    const sourceAspect = safeSourceWidth / safeSourceHeight;
    let cropX = 0;
    let cropY = 0;
    let cropWidth = safeSourceWidth;
    let cropHeight = safeSourceHeight;

    if (sourceAspect > safeTargetAspect) {
      cropWidth = safeSourceHeight * safeTargetAspect;
      cropX = (safeSourceWidth - cropWidth) * 0.5;
    } else if (sourceAspect < safeTargetAspect) {
      cropHeight = safeSourceWidth / safeTargetAspect;
      cropY = (safeSourceHeight - cropHeight) * 0.5;
    }

    return { cropX, cropY, cropWidth, cropHeight };
  }

  function proceduralField(x, y, cols, rows, timeSeconds) {
    const nx = cols > 1 ? (x / (cols - 1)) * 2 - 1 : 0;
    const ny = rows > 1 ? (y / (rows - 1)) * 2 - 1 : 0;
    const scale = clamp(SOURCE.proceduralScale ?? 1, 0.45, 2.4);
    const speed = clamp(SOURCE.proceduralSpeed ?? 1, 0.2, 3.5);
    const t = timeSeconds * speed;
    const radius = Math.sqrt(nx * nx + ny * ny);
    const angle = Math.atan2(ny, nx);
    const flow = Math.sin((nx * 3.6 + t * 1.2) * scale);
    const drift = Math.cos((ny * 4.8 - t * 0.9) * scale);
    const ring = Math.sin((radius * 13.5 - t * 2.35 + angle * 2.6) * scale);
    const grain = Math.sin((nx * 18.7 + ny * 11.3 + t * 4.7) * scale);
    return clamp((flow * 0.33 + drift * 0.26 + ring * 0.31 + grain * 0.1 + 1) * 0.5, 0, 1);
  }

  function isActiveForRendering() {
    const requiresInView = EXPORT_OPTIONS.pauseWhenOffscreen !== false;
    return isPageVisible && (!requiresInView || isInViewport);
  }

  function isPlayableVideoSource(value) {
    return Boolean(value && typeof value.play === 'function' && typeof value.pause === 'function');
  }

  function syncSourcePlayback(shouldRun) {
    if (!source || source.kind === 'procedural' || SOURCE.type === 'image') return;
    if (!isPlayableVideoSource(source)) return;
    if (SOURCE.type === 'camera' && stream) {
      const tracks = typeof stream.getVideoTracks === 'function' ? stream.getVideoTracks() : stream.getTracks();
      tracks.forEach((track) => {
        track.enabled = shouldRun;
      });
    }
    if (shouldRun) {
      source.play().catch(() => {});
      return;
    }
    source.pause();
  }

  function requiresContinuousRendering(interactionEnabled = Boolean(EXPORT_OPTIONS.enableInteractionEffects)) {
    return (
      SOURCE.type !== 'image' ||
      SETTINGS.overlayPreset !== 'none' ||
      isWebglAsciiFxEnabled() ||
      (interactionEnabled && (pointer.inside || clickBursts.length > 0))
    );
  }

  function getTargetFps(interactionEnabled) {
    const maxFps = clamp(Number(EXPORT_OPTIONS.maxFps ?? 30) || 30, 6, 60);
    if (EXPORT_OPTIONS.adaptivePerformance === false) return maxFps;
    const idleFps = clamp(Number(EXPORT_OPTIONS.idleFps ?? 12) || 12, 1, maxFps);
    const isInteractive = interactionEnabled && (pointer.inside || clickBursts.length > 0);
    return isInteractive ? maxFps : idleFps;
  }

  function handleRenderActivityChange(forceNextFrame = false) {
    if (!isActiveForRendering()) {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (webglRafId) {
        cancelAnimationFrame(webglRafId);
        webglRafId = null;
      }
      pendingForceRender = false;
      pointer = { ...pointer, inside: false };
      if (clickBursts.length) clickBursts = [];
      syncSourcePlayback(false);
      reportFps(0);
      return;
    }

    syncSourcePlayback(true);
    scheduleSeparateWebglRender(forceNextFrame);
    if (forceNextFrame) {
      scheduleRender(true);
      return;
    }
    if (requiresContinuousRendering()) {
      scheduleRender();
    }
  }

  function handleDocumentVisibilityChange() {
    const nextVisible = document.visibilityState !== 'hidden';
    if (nextVisible === isPageVisible) return;
    isPageVisible = nextVisible;
    handleRenderActivityChange(nextVisible);
  }

  function handleIntersection(entries) {
    const entry = entries && entries[0];
    if (!entry) return;
    const nextInViewport = entry.isIntersecting && entry.intersectionRatio > 0;
    if (nextInViewport === isInViewport) return;
    isInViewport = nextInViewport;
    handleRenderActivityChange(nextInViewport);
  }

  function handleWindowResize() {
    resize();
    scheduleSeparateWebglRender(true);
    scheduleRender(true);
  }

  function scheduleRender(force = false) {
    if (force) pendingForceRender = true;
    if (!isActiveForRendering()) {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      return;
    }
    if (!rafId) rafId = requestAnimationFrame(renderFrame);
  }

  function renderSeparateWebgl(now) {
    webglRafId = null;
    if (!isActiveForRendering()) return;
    const uniformValues = getWebglUniformValues();
    syncWebglLayerStyle(uniformValues);
    if (!isSeparateWebglVisible(uniformValues)) return;
    const dpr = window.devicePixelRatio || 1;
    syncOverlayCanvasSize(webglCanvas, webglCtx, renderWidth || viewWidth || 1, renderHeight || viewHeight || 1, dpr);
    syncShaderCanvasSize(renderWidth || viewWidth || 1, renderHeight || viewHeight || 1, dpr);
    if (usesShaderOverlay(uniformValues)) {
      renderShaderOverlayFrame(renderWidth || viewWidth || 1, renderHeight || viewHeight || 1, now, uniformValues);
      webglCtx.clearRect(0, 0, renderWidth || viewWidth || 1, renderHeight || viewHeight || 1);
    } else {
      renderWebglOverlayFrame(
        webglCtx,
        renderWidth || viewWidth || 1,
        renderHeight || viewHeight || 1,
        now,
        uniformValues,
        getWebglMouseState(renderWidth || viewWidth || 1, renderHeight || viewHeight || 1)
      );
      if (webglShaderGl) {
        webglShaderGl.viewport(0, 0, webglShaderCanvas.width || 1, webglShaderCanvas.height || 1);
        webglShaderGl.clearColor(0, 0, 0, 0);
        webglShaderGl.clear(webglShaderGl.COLOR_BUFFER_BIT);
      }
    }
    scheduleSeparateWebglRender();
  }

  function scheduleSeparateWebglRender(force = false) {
    const uniformValues = getWebglUniformValues();
    const shouldRun = isActiveForRendering() && isSeparateWebglVisible(uniformValues);
    syncWebglLayerStyle(uniformValues);
    if (!shouldRun) {
      if (webglRafId) {
        cancelAnimationFrame(webglRafId);
        webglRafId = null;
      }
      webglCtx.clearRect(0, 0, renderWidth || viewWidth || 1, renderHeight || viewHeight || 1);
      if (webglShaderGl) {
        webglShaderGl.viewport(0, 0, webglShaderCanvas.width || 1, webglShaderCanvas.height || 1);
        webglShaderGl.clearColor(0, 0, 0, 0);
        webglShaderGl.clear(webglShaderGl.COLOR_BUFFER_BIT);
      }
      return;
    }
    if (force && webglRafId) {
      cancelAnimationFrame(webglRafId);
      webglRafId = null;
    }
    if (!webglRafId) webglRafId = requestAnimationFrame(renderSeparateWebgl);
  }

  function toCanvasPoint(event) {
    const rect = canvas.getBoundingClientRect();
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!inside) return null;
    const x = ((event.clientX - rect.left) / Math.max(rect.width, 1)) * renderWidth;
    const y = ((event.clientY - rect.top) / Math.max(rect.height, 1)) * renderHeight;
    return { x: clamp(x, 0, renderWidth), y: clamp(y, 0, renderHeight) };
  }

  function handleWindowPointerMove(event) {
    const point = toCanvasPoint(event);
    if (!point) {
      if (pointer.inside) {
        pointer = { ...pointer, inside: false };
        scheduleSeparateWebglRender(true);
        scheduleRender();
      }
      return;
    }
    pointer = { inside: true, x: point.x, y: point.y };
    scheduleSeparateWebglRender(true);
    scheduleRender();
  }

  function handleWindowPointerDown(event) {
    const point = toCanvasPoint(event);
    if (!point) return;
    pointer = { inside: true, x: point.x, y: point.y };
    clickBursts = [
      ...clickBursts.slice(-2),
      { x: point.x, y: point.y, startedAt: performance.now(), seed: Math.random() * Math.PI * 2 }
    ];
    scheduleSeparateWebglRender(true);
    scheduleRender();
  }

  function handleWindowBlur() {
    if (!pointer.inside) return;
    pointer = { ...pointer, inside: false };
    scheduleSeparateWebglRender(true);
    scheduleRender();
  }

  async function loadSource() {
    if (SOURCE.type === 'procedural') {
      return { kind: 'procedural' };
    }

    if (SOURCE.type === 'camera') {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
      const video = document.createElement('video');
      video.srcObject = stream;
      video.muted = true;
      video.playsInline = true;
      await video.play();
      return video;
    }

    if (SOURCE.type === 'video') {
      const video = document.createElement('video');
      video.src = SOURCE.url;
      video.preload = 'auto';
      video.crossOrigin = 'anonymous';
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      sourceLoopHandler = () => {
        try {
          video.currentTime = 0.001;
          const resumePromise = video.play();
          if (resumePromise && typeof resumePromise.catch === 'function') {
            resumePromise.catch(() => {});
          }
          scheduleRender(true);
        } catch {
          // Ignore loop recovery errors to keep render alive.
        }
      };
      video.addEventListener('ended', sourceLoopHandler);
      await new Promise((resolve, reject) => {
        video.onloadeddata = resolve;
        video.onerror = reject;
      });
      video.currentTime = 0;
      await video.play();
      return video;
    }

    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = SOURCE.url;
    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });
    return image;
  }

  function renderFrame(now) {
    rafId = null;
    if (!source) return;
    if (!isActiveForRendering()) {
      syncSourcePlayback(false);
      return;
    }
    const interactionEnabled = Boolean(EXPORT_OPTIONS.enableInteractionEffects);
    if (interactionEnabled) {
      clickBursts = clickBursts.filter((burst) => now - burst.startedAt < CLICK_BURST_DURATION_MS);
    } else if (clickBursts.length) {
      clickBursts = [];
    }
    const forceRender = pendingForceRender;
    pendingForceRender = false;
    const targetFps = getTargetFps(interactionEnabled);
    const minFrameInterval = 1000 / Math.max(1, targetFps);
    if (!forceRender && lastRenderTime > 0 && now - lastRenderTime < minFrameInterval) {
      scheduleRender();
      return;
    }
    lastRenderTime = now;
    const frameStartedAt = performance.now();
    fpsFrameCount += 1;
    if (!fpsWindowStart) fpsWindowStart = now;
    const proceduralMode = source.kind === 'procedural';

    const fontSize = clamp(SETTINGS.fontSize || 10, 6, 24);
    const charSpacing = clamp(SETTINGS.charSpacing ?? 1, 0.7, 2);
    const renderFont = SETTINGS.renderFont || 'Helvetica, Arial, sans-serif';
    const fontDeclaration = fontSize + 'px ' + renderFont;
    ctx.font = fontDeclaration;
    const measuredCharWidth = ctx.measureText('M').width;
    const charWidth = Math.max(fontSize * 0.45, measuredCharWidth || fontSize * 0.62);
    const cellScale = getStyleCellScale(SETTINGS.style);
    const drawCellWidth = charWidth * charSpacing * cellScale;
    const drawCellHeight = fontSize * charSpacing * cellScale;
    const shapeSpacing = supportsShapeSpacing(SETTINGS.style) ? clamp(SETTINGS.spacing ?? 1, 1, 3) : 1;
    const cellWidth = drawCellWidth * shapeSpacing;
    const cellHeight = drawCellHeight * shapeSpacing;
    const cellInsetX = (cellWidth - drawCellWidth) * 0.5;
    const cellInsetY = (cellHeight - drawCellHeight) * 0.5;
    const cols = Math.max(24, Math.floor(viewWidth / cellWidth));
    let contentAspect = viewWidth / Math.max(viewHeight, 1);
    const requestedAspect = parseAspectRatio(SETTINGS.outputAspect);
    let sourceSize = null;

    if (!proceduralMode) {
      sourceSize = getSourceSize(source);
      if (!sourceSize.width || !sourceSize.height) {
        scheduleRender();
        return;
      }
      contentAspect = requestedAspect || sourceSize.width / sourceSize.height;

      if (SOURCE.type === 'video' && isPlayableVideoSource(source)) {
        const sourceDuration = Number(source.duration);
        if (Number.isFinite(sourceDuration) && sourceDuration > 0) {
          const sourceFps = clamp(Number(SOURCE.fps) || 6, 1, 24);
          const loopThreshold = clamp(Math.max(0.24, 2 / sourceFps), 0.12, 0.75);
          if (sourceDuration - source.currentTime <= loopThreshold) {
            try {
              source.currentTime = 0.001;
              if (source.paused) {
                source.play().catch(() => {});
              }
              scheduleRender(true);
            } catch {
              // Ignore near-end seek errors and keep rendering.
            }
          }
        }
      }
    }

    const cellAspectRatio = cellWidth / Math.max(cellHeight, 1);
    const rows = Math.max(12, Math.round((1 / Math.max(contentAspect, 0.0001)) * cols * cellAspectRatio));
    const outputWidth = Math.max(1, Math.floor(cols * cellWidth));
    const outputHeight = Math.max(1, Math.ceil(rows * cellHeight));
    const dpr = window.devicePixelRatio || 1;
    const webglUniformValues = getWebglUniformValues();
    if (
      outputWidth !== renderWidth ||
      outputHeight !== renderHeight ||
      canvas.width !== Math.max(1, Math.round(outputWidth * dpr)) ||
      canvas.height !== Math.max(1, Math.round(outputHeight * dpr))
    ) {
      renderWidth = outputWidth;
      renderHeight = outputHeight;
      canvas.width = Math.max(1, Math.round(renderWidth * dpr));
      canvas.height = Math.max(1, Math.round(renderHeight * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = fontDeclaration;
    }
    syncWebglLayerStyle(webglUniformValues);
    syncOverlayCanvasSize(webglCanvas, webglCtx, outputWidth, outputHeight, dpr);
    syncShaderCanvasSize(outputWidth, outputHeight, dpr);
    if (!isSeparateWebglVisible(webglUniformValues)) {
      webglCtx.clearRect(0, 0, outputWidth, outputHeight);
      if (webglShaderGl) {
        webglShaderGl.viewport(0, 0, webglShaderCanvas.width || 1, webglShaderCanvas.height || 1);
        webglShaderGl.clearColor(0, 0, 0, 0);
        webglShaderGl.clear(webglShaderGl.COLOR_BUFFER_BIT);
      }
    }
    lastCharCount = cols * rows;

    const charset = selectCharset();
    const timeSeconds = now * 0.001;
    const grayscale = new Float32Array(cols * rows);
    let data;

    sampleCanvas.width = cols;
    sampleCanvas.height = rows;

    if (proceduralMode) {
      const proceduralPreset = SOURCE.proceduralPreset || 'flow';
      const proceduralPixels = new Uint8ClampedArray(cols * rows * 4);
      data = proceduralPixels;

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const idx = y * cols + x;
          const offset = idx * 4;
          const field = proceduralField(x, y, cols, rows, timeSeconds);
          const pulse = 0.5 + 0.5 * Math.sin(timeSeconds * 1.8 + x * 0.06 - y * 0.04);
          const mixed = clamp(field * 0.78 + pulse * 0.22, 0, 1);
          const baseGray = Math.floor(mixed * 255);

          let r = baseGray;
          let g = baseGray;
          let b = baseGray;

          if (proceduralPreset === 'plasma') {
            r = clamp(Math.floor(baseGray * 0.72 + 92 * (0.5 + 0.5 * Math.sin(timeSeconds * 1.1 + y * 0.09))), 0, 255);
            g = clamp(Math.floor(baseGray * 0.48 + 74 * (0.5 + 0.5 * Math.cos(timeSeconds * 1.6 + x * 0.07))), 0, 255);
            b = clamp(Math.floor(baseGray * 0.84 + 102 * (0.5 + 0.5 * Math.sin(timeSeconds * 1.35 + (x + y) * 0.05))), 0, 255);
          } else if (proceduralPreset === 'mono') {
            const mono = clamp(Math.floor(baseGray * 1.08), 0, 255);
            r = mono;
            g = mono;
            b = mono;
          } else {
            r = clamp(Math.floor(baseGray * 0.64 + 86 * (0.5 + 0.5 * Math.sin(timeSeconds * 1.2 + x * 0.11))), 0, 255);
            g = clamp(Math.floor(baseGray * 0.82 + 64 * (0.5 + 0.5 * Math.sin(timeSeconds * 1.45 + y * 0.08))), 0, 255);
            b = clamp(Math.floor(baseGray * 0.58 + 74 * (0.5 + 0.5 * Math.cos(timeSeconds * 1.05 + (x - y) * 0.07))), 0, 255);
          }

          proceduralPixels[offset] = r;
          proceduralPixels[offset + 1] = g;
          proceduralPixels[offset + 2] = b;
          proceduralPixels[offset + 3] = 255;

          const toned = applyTone(baseGray);
          grayscale[idx] = applyOverlayFx(toned, x, y, cols, rows, timeSeconds);
        }
      }
    } else {
      const sampleTargetAspect = (cols * cellWidth) / Math.max(rows * cellHeight, 1);
      const { cropX, cropY, cropWidth, cropHeight } = getCoverCropRect(
        sourceSize.width,
        sourceSize.height,
        sampleTargetAspect
      );
      sampleCtx.drawImage(source, cropX, cropY, cropWidth, cropHeight, 0, 0, cols, rows);
      const pixels = sampleCtx.getImageData(0, 0, cols, rows);
      data = pixels.data;

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const idx = y * cols + x;
          const offset = idx * 4;
          const r = data[offset];
          const g = data[offset + 1];
          const b = data[offset + 2];
          const baseGray = 0.299 * r + 0.587 * g + 0.114 * b;
          const toned = applyTone(baseGray);
          grayscale[idx] = applyOverlayFx(toned, x, y, cols, rows, timeSeconds);
        }
      }
    }

    if (isWebglAsciiFxEnabled()) {
      blendWebglIntoData(data, cols, rows, now, webglUniformValues);
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const idx = y * cols + x;
          const offset = idx * 4;
          const r = data[offset];
          const g = data[offset + 1];
          const b = data[offset + 2];
          const baseGray = 0.299 * r + 0.587 * g + 0.114 * b;
          const toned = applyTone(baseGray);
          grayscale[idx] = applyOverlayFx(toned, x, y, cols, rows, timeSeconds);
        }
      }
    }

    if (SETTINGS.ditherType === 'bayer') {
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const idx = y * cols + x;
          const threshold = bayerThreshold(x, y);
          const offset = (threshold - 0.5) * 255 * SETTINGS.ditherStrength;
          grayscale[idx] = clamp(grayscale[idx] + offset, 0, 255);
        }
      }
    }

    if (SETTINGS.ditherType === 'floyd-steinberg' || SETTINGS.ditherType === 'atkinson') {
      const work = new Float32Array(grayscale);
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const idx = y * cols + x;
          const oldValue = work[idx];
          const step = 255 / Math.max(2, charset.length - 1);
          const newValue = Math.round(oldValue / step) * step;
          const error = (oldValue - newValue) * SETTINGS.ditherStrength;
          work[idx] = clamp(newValue, 0, 255);

          if (SETTINGS.ditherType === 'floyd-steinberg') {
            if (x + 1 < cols) work[idx + 1] += (error * 7) / 16;
            if (x - 1 >= 0 && y + 1 < rows) work[idx + cols - 1] += (error * 3) / 16;
            if (y + 1 < rows) work[idx + cols] += (error * 5) / 16;
            if (x + 1 < cols && y + 1 < rows) work[idx + cols + 1] += error / 16;
          } else {
            if (x + 1 < cols) work[idx + 1] += error / 8;
            if (x + 2 < cols) work[idx + 2] += error / 8;
            if (x - 1 >= 0 && y + 1 < rows) work[idx + cols - 1] += error / 8;
            if (y + 1 < rows) work[idx + cols] += error / 8;
            if (x + 1 < cols && y + 1 < rows) work[idx + cols + 1] += error / 8;
            if (y + 2 < rows) work[idx + cols * 2] += error / 8;
          }
        }
      }
      for (let i = 0; i < grayscale.length; i += 1) {
        grayscale[i] = clamp(work[i], 0, 255);
      }
    }

    ctx.clearRect(0, 0, renderWidth, renderHeight);
    ctx.font = fontDeclaration;
    ctx.textBaseline = 'top';
    const hoverAttractStrength = clamp(SETTINGS.hoverStrength ?? 24, 4, 64);
    const hoverAreaSize = clamp(SETTINGS.mouseAreaSize ?? HOVER_ATTRACT_RADIUS, 40, 640);
    const hoverSpread = clamp(SETTINGS.mouseSpread ?? 1, 0.25, 3);
    const hoverDirection = SETTINGS.mouseInteractionMode === 'push' ? -1 : 1;
    const bgDitherStrength = clamp(Number(SETTINGS.bgDither ?? 0) || 0, 0, 3);
    const inverseDitherStrength = clamp(Number(SETTINGS.inverseDither ?? 0) || 0, 0, 3);
    const foregroundOpacity = clamp(Number(SETTINGS.opacity ?? 1) || 0, 0, 1);
    const vignetteStrength = clamp(Number(SETTINGS.vignette ?? 0) || 0, 0, 1);
    const borderGlowStrength = clamp(Number(SETTINGS.borderGlow ?? 0) || 0, 0, 1);
    const effectiveBackgroundColor = getEffectiveBackgroundColor(SETTINGS);
    const invertedBackground = invertCssColor(effectiveBackgroundColor);
    const hasPointerAttraction = interactionEnabled && pointer.inside;
    const hasBurst = interactionEnabled && clickBursts.length > 0;
    const matrixMode = SETTINGS.overlayPreset === 'matrix';
    const matrixStrength = clamp(SETTINGS.overlayStrength ?? 0.45, 0, 1);
    let matrixBoost = null;

    if (matrixMode) {
      const matrixScale = clamp(SETTINGS.matrixScale ?? 15, 6, 48);
      const matrixSpeed = clamp(SETTINGS.matrixSpeed ?? 0.1, 0.1, 4);
      const laneScale = clamp(matrixScale / 12, 0.6, 4);
      const projection = getDirectionProjection(SETTINGS.matrixDirection || 'down');
      const primaryCount = Math.max(cols, rows);
      const secondaryCount = Math.max(cols, rows);
      const laneCount = Math.max(6, Math.ceil(secondaryCount / laneScale));
      if (
        matrixRainState.laneCount !== laneCount ||
        matrixRainState.primaryCount !== primaryCount ||
        matrixRainState.speeds.length !== laneCount
      ) {
        matrixRainState = {
          laneCount,
          primaryCount,
          speeds: Array.from({ length: laneCount }, () => 0.55 + Math.random() * 1.85),
          phases: Array.from({ length: laneCount }, () => Math.random() * (primaryCount + 36)),
          lengths: Array.from({ length: laneCount }, () =>
            Math.max(7, Math.round(primaryCount * (0.2 + Math.random() * 0.38)))
          ),
        };
      }

      matrixBoost = new Float32Array(cols * rows);
      const laneHeads = new Float32Array(laneCount);
      const laneLengths = new Float32Array(laneCount);
      for (let lane = 0; lane < laneCount; lane += 1) {
        const trailLength = matrixRainState.lengths[lane];
        const cycle = primaryCount + trailLength + 12;
        const head =
          ((timeSeconds * matrixRainState.speeds[lane] * matrixSpeed * primaryCount +
            matrixRainState.phases[lane]) %
            cycle) -
          trailLength;
        laneHeads[lane] = head;
        laneLengths[lane] = trailLength;

        if (Math.random() < 0.0032) {
          matrixRainState.speeds[lane] = 0.55 + Math.random() * 1.85;
          matrixRainState.phases[lane] = Math.random() * (primaryCount + 36);
          matrixRainState.lengths[lane] = Math.max(7, Math.round(primaryCount * (0.2 + Math.random() * 0.38)));
        }
      }

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const idx = y * cols + x;
          const { primaryNorm, secondaryNorm } = projectDirection(x, y, cols, rows, projection);
          const lane = clamp(Math.floor(secondaryNorm * laneCount), 0, laneCount - 1);
          const primary = primaryNorm * (primaryCount - 1);
          const distance = laneHeads[lane] - primary;
          if (distance < 0 || distance > laneLengths[lane]) continue;
          const falloff = 1 - distance / (laneLengths[lane] + 1);
          matrixBoost[idx] = falloff * (44 + matrixStrength * 148 + falloff * (62 + matrixStrength * 30));
        }
      }
    }

    ctx.globalAlpha = foregroundOpacity;
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        const idx = y * cols + x;
        const pixelOffset = idx * 4;
        const gray = Math.round(grayscale[idx]);
        const inverseCoverage = shouldApplyInverseDither(gray, x, y, inverseDitherStrength, timeSeconds);
        const invertCell = inverseCoverage > 0.12;
        const mappedGray = clamp(Math.round(gray + (255 - gray * 2) * inverseCoverage), 0, 255);
        const r = data[pixelOffset];
        const g = data[pixelOffset + 1];
        const b = data[pixelOffset + 2];
        const localEdgeContrast = getLocalEdgeContrast(grayscale, x, y, cols, rows);
        const nx = cols > 1 ? (x / (cols - 1)) * 2 - 1 : 0;
        const ny = rows > 1 ? (y / (rows - 1)) * 2 - 1 : 0;
        const radial = Math.sqrt(nx * nx + ny * ny) / Math.SQRT2;
        const vignetteCore = Math.pow(clamp(1 - radial, 0, 1), 1 + vignetteStrength * 2);
        const vignetteFactor = 1 - vignetteStrength + vignetteStrength * vignetteCore;
        const cellAlpha = foregroundOpacity * vignetteFactor;
        if (cellAlpha <= 0.002) continue;
        ctx.globalAlpha = cellAlpha;
        const baseX = x * cellWidth + cellInsetX;
        const baseY = y * cellHeight + cellInsetY;
        if (bgDitherStrength > 0) {
          const tone = gray / 255;
          const threshold = bayerThreshold(x, y);
          const drift = (Math.sin((x + 1) * 7.31 + (y + 1) * 3.17 + timeSeconds * 0.75) + 1) * 0.5;
          const pattern = threshold * 0.72 + drift * 0.28;
          const coverage = clamp(tone * (0.92 + bgDitherStrength * 0.9) - pattern + 0.34, 0, 1);
          if (coverage > 0.04) {
            const dotFactor = clamp(0.18 + coverage * (0.85 + bgDitherStrength * 0.5), 0.12, 1);
            const dotSize = Math.max(0.45, Math.min(drawCellWidth, drawCellHeight) * dotFactor);
            const insetX = (drawCellWidth - dotSize) * 0.5;
            const insetY = (drawCellHeight - dotSize) * 0.5;
            const tint = getBackgroundDitherColor(r, g, b, gray);
            const alpha = clamp(coverage * (0.05 + bgDitherStrength * 0.34), 0, 1);
            ctx.fillStyle = applyOutputPolarity(
              'rgba(' + tint.r + ', ' + tint.g + ', ' + tint.b + ', ' + alpha.toFixed(3) + ')'
            );
            ctx.fillRect(baseX + insetX, baseY + insetY, dotSize, dotSize);
          }
        }

        if (inverseCoverage > 0.01) {
          const invAlpha = clamp(inverseCoverage * (0.08 + inverseDitherStrength * 0.34), 0, 1);
          if (invAlpha > 0.005) {
            const previousAlpha = ctx.globalAlpha;
            ctx.globalAlpha = previousAlpha * invAlpha;
            ctx.fillStyle = invertedBackground;
            ctx.fillRect(baseX, baseY, drawCellWidth, drawCellHeight);
            ctx.globalAlpha = previousAlpha;
          }
        }

        const baseColor = colorFromMode(r, g, b, mappedGray, x, y, cols, rows);
        ctx.fillStyle = applyOutputPolarity(baseColor, invertCell);
        let drawX = baseX;
        let drawY = baseY;
        let centerX = drawX + drawCellWidth * 0.5;
        let centerY = drawY + drawCellHeight * 0.5;

        if (!isWaveDitherStyle(SETTINGS.style) && (hasPointerAttraction || hasBurst)) {
          let offsetX = 0;
          let offsetY = 0;

          if (hasPointerAttraction) {
            const dx = pointer.x - centerX;
            const dy = pointer.y - centerY;
            const distance = Math.hypot(dx, dy);
            if (distance > 0.0001 && distance < hoverAreaSize) {
              const falloff = 1 - distance / hoverAreaSize;
              const spreadFactor = Math.pow(falloff, 1 / hoverSpread);
              const pull = spreadFactor * spreadFactor * hoverAttractStrength * hoverDirection;
              offsetX += (dx / distance) * pull;
              offsetY += (dy / distance) * pull;
            }
          }

          if (hasBurst) {
            for (let burstIndex = 0; burstIndex < clickBursts.length; burstIndex += 1) {
              const burst = clickBursts[burstIndex];
              const age = now - burst.startedAt;
              if (age >= CLICK_BURST_DURATION_MS) continue;
              const progress = clamp(age / CLICK_BURST_DURATION_MS, 0, 1);
              const dx = centerX - burst.x;
              const dy = centerY - burst.y;
              const distance = Math.hypot(dx, dy);
              if (distance >= CLICK_BURST_RADIUS) continue;
              const falloff = 1 - distance / CLICK_BURST_RADIUS;
              const impulse =
                CLICK_BURST_STRENGTH *
                falloff *
                (1 - progress * 0.55) *
                (1.25 + Math.sin(progress * Math.PI) * 0.45);
              let dirX = 1;
              let dirY = 0;
              if (distance > 0.0001) {
                dirX = dx / distance;
                dirY = dy / distance;
              } else {
                const angle = (idx + burst.seed) * 0.61803398875;
                dirX = Math.cos(angle);
                dirY = Math.sin(angle);
              }
              offsetX += dirX * impulse;
              offsetY += dirY * impulse;
            }
          }

          drawX += offsetX;
          drawY += offsetY;
          centerX += offsetX;
          centerY += offsetY;
        }

        if (matrixMode) {
          const boost = matrixBoost ? matrixBoost[idx] : 0;
          const ambient = 6 + matrixStrength * 14;
          const baseContrast = clamp((mappedGray - 128) * (1.2 + matrixStrength * 0.55) + 128, 0, 255);
          const composedGray = clamp(Math.round(baseContrast * 0.38 + boost * 0.78 + ambient), 0, 255);
          if (composedGray < 20) continue;

          const glyphClock = timeSeconds * (10 + clamp(SETTINGS.matrixSpeed ?? 0.1, 0.1, 4) * 16);
          const drift =
            Math.sin((x + 1) * 2.17 + glyphClock * 1.7) +
            Math.cos((y + 1) * 1.93 - glyphClock * 1.1);
          const scramble = Math.sin((x + 1) * 91.13 + (y + 1) * 37.77 + glyphClock * 5.3 + boost * 0.06);
          const noise = drift * 0.28 + scramble * 0.72;
          let mapped = Math.floor(clamp((noise + 2) / 4, 0, 1) * (MATRIX_CHARS.length - 1));
          const jumpToken = Math.sin((Math.floor(glyphClock * 2.6) + x * 13 + y * 7) * 12.9898);
          if (jumpToken > 0.93) {
            mapped = 1 + ((Math.floor(glyphClock * 11) + x * 3 + y * 5) % (MATRIX_CHARS.length - 1));
          }
          const char = MATRIX_CHARS[clamp(mapped, 1, MATRIX_CHARS.length - 1)];
          if (char === ' ') continue;

          const isHead = boost > 182;
          const glowAlpha = clamp(0.08 + composedGray / 620 + (isHead ? 0.12 : 0), 0, 0.56);
          const glowGreen = clamp(Math.floor(72 + composedGray * 0.58), 0, 255);
          const glowRed = clamp(Math.floor(glowGreen * 0.24), 0, 160);
          const glowBlue = clamp(Math.floor(glowGreen * 0.34), 0, 180);
          const glowColor = 'rgb(' + glowRed + ', ' + glowGreen + ', ' + glowBlue + ')';
          const glowShadowColor = 'rgba(' + glowRed + ', ' + glowGreen + ', ' + glowBlue + ', ' + glowAlpha + ')';
          ctx.fillStyle = applyOutputPolarity(glowColor, invertCell);
          ctx.shadowColor = applyOutputPolarity(glowShadowColor, invertCell);
          ctx.shadowBlur = isHead ? Math.max(3, fontSize * 0.75) : Math.max(1.5, fontSize * 0.32);
          ctx.fillText(char, drawX, drawY);
          ctx.shadowBlur = 0;
          continue;
        }

        if (SETTINGS.style === 'halftone') {
          const halftoneShape = String(SETTINGS.halftoneShape || 'circle');
          const halftoneSize = clamp(Number(SETTINGS.halftoneSize ?? 1) || 1, 0.4, 2.2);
          const halftoneRotation = clamp(Number(SETTINGS.halftoneRotation ?? 0) || 0, -180, 180);
          const normalized = mappedGray / 255;
          const screen =
            (Math.sin((x * 0.82 + y * 0.33) * 1.55) + Math.cos((x * 0.27 - y * 0.94) * 1.25) + 2) * 0.25;
          const dotLevel = clamp(Math.pow(normalized, 0.92) * 0.82 + screen * 0.18, 0, 1);
          const maxRadius = Math.max(0.1, Math.min(drawCellWidth, drawCellHeight) * 0.5);
          const radius = maxRadius * dotLevel * halftoneSize;
          if (radius < 0.35) continue;

          drawHalftoneShape(ctx, halftoneShape, centerX, centerY, radius, halftoneRotation);
          continue;
        }

        if (SETTINGS.style === 'dither') {
          const wavesEnabled = SETTINGS.overlayPreset === 'waves';
          const colorSteps = clamp(Math.round(Number(SETTINGS.ditherColorNum ?? 4) || 4), 2, 8);
          const waveAmplitude = wavesEnabled ? clamp(Number(SETTINGS.ditherWaveAmplitude ?? 0.3) || 0, 0, 1) : 0;
          const waveFrequency = wavesEnabled ? clamp(Number(SETTINGS.ditherWaveFrequency ?? 3) || 0, 0.5, 8) : 3;
          const waveSpeed = wavesEnabled ? clamp(Number(SETTINGS.ditherWaveSpeed ?? 0.05) || 0, 0, 0.25) : 0;
          const mouseRadius = wavesEnabled ? clamp(Number(SETTINGS.ditherMouseRadius ?? 0.3) || 0, 0.05, 0.8) : 0.05;
          const animationEnabled = wavesEnabled && SETTINGS.ditherAnimationEnabled !== false;
          const mouseEnabled = wavesEnabled && SETTINGS.ditherMouseInteractionEnabled !== false;
          const px = cols > 1 ? x / (cols - 1) : 0.5;
          const py = rows > 1 ? y / (rows - 1) : 0.5;
          const phase = animationEnabled ? timeSeconds * (waveSpeed * 24 + 0.001) : 0;
          const frequency = waveFrequency * Math.PI * 2;
          let waveField = wavesEnabled
            ? Math.sin(py * frequency + phase) * 0.5 +
              Math.cos((px * 0.85 - py * 0.32) * frequency - phase * 1.1) * 0.3 +
              Math.sin((px + py * 0.7) * frequency * 0.6 + phase * 0.7) * 0.2
            : 0;
          let mouseBoost = 0;

          if (mouseEnabled && pointer.inside) {
            const pointerNormX = clamp(pointer.x / Math.max(renderWidth, 1), 0, 1);
            const pointerNormY = clamp(pointer.y / Math.max(renderHeight, 1), 0, 1);
            const dx = px - pointerNormX;
            const dy = py - pointerNormY;
            const distance = Math.hypot(dx, dy);
            const falloff = clamp(1 - distance / mouseRadius, 0, 1);
            mouseBoost = falloff * falloff;
            waveField += mouseBoost * 0.9;
            centerX -= dx * drawCellWidth * mouseBoost * (1.2 + waveAmplitude * 1.1);
            centerY -= dy * drawCellHeight * mouseBoost * (1.1 + waveAmplitude);
          }

          const waveNormalized = wavesEnabled ? clamp(waveField * 0.5 + 0.5, 0, 1) : 0.5;
          const baseLevel = clamp(mappedGray / 255, 0, 1);
          const mixedLevel = wavesEnabled
            ? clamp(
                baseLevel * (0.74 + waveNormalized * 0.12) +
                  waveNormalized * (0.18 + waveAmplitude * 0.24) +
                  mouseBoost * 0.14,
                0,
                1
              )
            : baseLevel;
          const quantized = quantizeUnit(mixedLevel, colorSteps);
          if (quantized <= 0.001) continue;

          const maxRadius = Math.max(0.18, Math.min(drawCellWidth, drawCellHeight) * 0.52);
          const radius = maxRadius * clamp(0.14 + quantized * (0.86 + (wavesEnabled ? waveAmplitude * 0.18 : 0)), 0.1, 1.08);
          if (radius < 0.28) continue;

          const shimmer = animationEnabled ? Math.sin(phase * 0.9 + px * 10 + py * 6) * 0.06 : 0;
          const lightness = clamp(0.2 + quantized * 0.78 + (wavesEnabled ? waveNormalized * 0.08 : 0) + shimmer, 0, 1);
          const alpha = clamp(0.2 + quantized * 0.7 + mouseBoost * 0.12, 0.12, 0.96);
          const displayGray = clamp(Math.round(lightness * 255), 0, 255);
          const tint = parseRgbString(colorFromMode(r, g, b, displayGray, x, y, cols, rows, localEdgeContrast));

          if (quantized > 0.58) {
            ctx.fillStyle = applyOutputPolarity(
              'rgba(' + tint.r + ', ' + tint.g + ', ' + tint.b + ', ' + (alpha * 0.18).toFixed(3) + ')',
              invertCell
            );
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius * 1.8, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.fillStyle = applyOutputPolarity(
            'rgba(' + tint.r + ', ' + tint.g + ', ' + tint.b + ', ' + alpha.toFixed(3) + ')',
            invertCell
          );
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.fill();
          continue;
        }

        if (SETTINGS.style === 'dither2') {
          const wavesEnabled = SETTINGS.overlayPreset === 'waves';
          const colorSteps = clamp(Math.round(Number(SETTINGS.dither2ColorNum ?? 4) || 4), 2, 8);
          const pixelSize = clamp(Math.round(Number(SETTINGS.dither2PixelSize ?? 2) || 2), 1, 8);
          const waveAmplitude = wavesEnabled ? clamp(Number(SETTINGS.dither2WaveAmplitude ?? 0.3) || 0, 0, 1) : 0;
          const waveFrequency = wavesEnabled ? clamp(Number(SETTINGS.dither2WaveFrequency ?? 3) || 0, 0.5, 8) : 3;
          const waveSpeed = wavesEnabled ? clamp(Number(SETTINGS.dither2WaveSpeed ?? 0.05) || 0, 0, 0.25) : 0;
          const mouseRadius = wavesEnabled ? clamp(Number(SETTINGS.dither2MouseRadius ?? 1) || 0, 0.1, 1.5) : 0.1;
          const animationEnabled = wavesEnabled && SETTINGS.dither2AnimationEnabled !== false;
          const mouseEnabled = wavesEnabled && SETTINGS.dither2MouseInteractionEnabled !== false;
          const sampleX = Math.floor(x / pixelSize) * pixelSize;
          const sampleY = Math.floor(y / pixelSize) * pixelSize;

          const blockCols = Math.min(pixelSize, cols - sampleX);
          const blockRows = Math.min(pixelSize, rows - sampleY);
          const sampledColor = sampleBlockRgb(data, sampleX, sampleY, cols, rows, blockCols, blockRows);
          const sampleNormX = cols > 1 ? x / (cols - 1) : 0.5;
          const sampleNormY = rows > 1 ? y / (rows - 1) : 0.5;
          const aspect = outputWidth / Math.max(outputHeight, 1);
          const uvX = (sampleNormX - 0.5) * aspect;
          const uvY = 0.5 - sampleNormY;
          const patternTime = animationEnabled ? timeSeconds : 0;
          const sourceLevel = sampleBlockValue(grayscale, sampleX, sampleY, cols, rows, blockCols, blockRows) / 255;
          const blockEdgeBoost = getLocalEdgeContrast(grayscale, sampleX, sampleY, cols, rows);
          const contrastedSource = clamp((sourceLevel - 0.5) * (1.9 + blockEdgeBoost * 0.18) + 0.5, 0, 1);
          let field = wavesEnabled
            ? ditherTwoPattern(uvX, uvY, patternTime, waveSpeed, waveFrequency, waveAmplitude)
            : 0.5;
          let mouseEffect = 0;

          if (mouseEnabled && pointer.inside) {
            const pointerNormX = clamp(pointer.x / Math.max(renderWidth, 1), 0, 1);
            const pointerNormY = clamp(pointer.y / Math.max(renderHeight, 1), 0, 1);
            const mouseX = (pointerNormX - 0.5) * aspect;
            const mouseY = 0.5 - pointerNormY;
            const distance = Math.hypot(uvX - mouseX, uvY - mouseY);
            mouseEffect = 1 - smoothstep(0, mouseRadius, distance);
            field -= 0.5 * mouseEffect;
          }

          const waveNormalized = clamp(field, 0, 1);
          const mixedLevel = clamp(
            contrastedSource * (wavesEnabled ? 0.86 + waveNormalized * 0.24 : 1) +
              (wavesEnabled ? (waveNormalized - 0.5) * (0.12 + waveAmplitude * 0.16) : 0) +
              blockEdgeBoost * 0.08 +
              mouseEffect * 0.08,
            0,
            1
          );
          const displayGray = clamp(Math.round(mixedLevel * 255), 0, 255);
          const baseColor = modulateDitherTwoColor(
            parseRgbString(
              colorFromMode(
                sampledColor.r,
                sampledColor.g,
                sampledColor.b,
                displayGray,
                x,
                y,
                cols,
                rows,
                localEdgeContrast
              )
            ),
            mixedLevel,
            SETTINGS.colorMode
          );
          const threshold = ditherTwoBayerThreshold(x, y);
          const red = ditherTwoQuantizeChannel(baseColor.r / 255, colorSteps, threshold);
          const green = ditherTwoQuantizeChannel(baseColor.g / 255, colorSteps, threshold);
          const blue = ditherTwoQuantizeChannel(baseColor.b / 255, colorSteps, threshold);
          const luminance = clamp(red * 0.2126 + green * 0.7152 + blue * 0.0722, 0, 1);
          if (luminance <= 0.001) continue;

          const drawWidth = drawCellWidth;
          const drawHeight = drawCellHeight;
          const baseAlpha = clamp(0.16 + luminance * 0.76 + mouseEffect * 0.08, 0.16, 0.84);
          const glowAlpha = clamp(baseAlpha * 0.22, 0, 0.24);
          const color = 'rgba(' +
            Math.round(red * 255) + ', ' +
            Math.round(green * 255) + ', ' +
            Math.round(blue * 255) + ', ' +
            baseAlpha.toFixed(3) + ')';
          const glow = 'rgba(' +
            Math.round(red * 255) + ', ' +
            Math.round(green * 255) + ', ' +
            Math.round(blue * 255) + ', ' +
            glowAlpha.toFixed(3) + ')';

          if (glowAlpha > 0.01) {
            ctx.fillStyle = applyOutputPolarity(glow, invertCell);
            ctx.fillRect(
              baseX - drawCellWidth * 0.12,
              baseY - drawCellHeight * 0.12,
              drawWidth + drawCellWidth * 0.24,
              drawHeight + drawCellHeight * 0.24
            );
          }

          ctx.fillStyle = applyOutputPolarity(color, invertCell);
          ctx.fillRect(baseX, baseY, drawWidth, drawHeight);
          continue;
        }

        if (SETTINGS.style === 'line') {
          const normalized = mappedGray / 255;
          const lengthScale = clamp(SETTINGS.lineLength ?? 1, 0.1, 2.5);
          const widthScale = clamp(SETTINGS.lineWidth ?? 1, 0.2, 2.5);
          const thicknessSetting = clamp(SETTINGS.lineThickness ?? 1.6, 0.2, 8);
          const rotationDeg = SETTINGS.lineRotation ?? 0;
          const screen =
            (Math.sin((x * 0.79 + y * 0.41) * 1.37) + Math.cos((x * 0.33 - y * 0.93) * 1.09) + 2) * 0.25;
          const angle = (rotationDeg * Math.PI) / 180 + (screen - 0.5) * 0.55;
          const spanBase = Math.max(0.8, Math.min(drawCellWidth, drawCellHeight) * widthScale);
          const span = spanBase * clamp(normalized * lengthScale, 0.05, 1.5);
          if (span < 0.6) continue;
          const half = span * 0.5;
          const x0 = centerX - Math.cos(angle) * half;
          const y0 = centerY - Math.sin(angle) * half;
          const x1 = centerX + Math.cos(angle) * half;
          const y1 = centerY + Math.sin(angle) * half;
          const thicknessPx = clamp(
            thicknessSetting,
            0.2,
            Math.max(0.2, Math.min(drawCellWidth, drawCellHeight) * 1.4)
          );
          const lineColor = colorFromMode(r, g, b, mappedGray, x, y, cols, rows);
          ctx.strokeStyle = applyOutputPolarity(lineColor, invertCell);
          ctx.lineWidth = thicknessPx;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(x0, y0);
          ctx.lineTo(x1, y1);
          ctx.stroke();
          continue;
        }

        const edgeContrast =
          SETTINGS.style === 'dotcross' || SETTINGS.style === 'braille' || SETTINGS.style === 'particles'
            ? getLocalEdgeContrast(grayscale, x, y, cols, rows)
            : 0;
        const brailleVariant = String(SETTINGS.brailleVariant || 'standard');
        const brailleBoost =
          SETTINGS.style === 'braille'
            ? 8 + edgeContrast * 40 + (brailleVariant === 'dense' ? 10 : brailleVariant === 'sparse' ? -4 : 4)
            : 0;
        const particleDensity = clamp(SETTINGS.particleDensity ?? 0.5, 0.05, 1);
        const particleBoost =
          SETTINGS.style === 'particles' ? edgeContrast * 44 + (particleDensity - 0.5) * 12 : 0;
        const glyphGray =
          SETTINGS.style === 'braille'
            ? clamp(mappedGray + brailleBoost, 0, 255)
            : SETTINGS.style === 'particles'
              ? clamp(mappedGray + particleBoost, 0, 255)
              : mappedGray;
        const char = charFromGray(glyphGray, charset, x, y, cols, rows, edgeContrast);
        if (char === ' ') continue;
        const glyphColor = colorFromMode(r, g, b, glyphGray, x, y, cols, rows, edgeContrast);
        ctx.fillStyle = applyOutputPolarity(glyphColor, invertCell);
        ctx.fillText(char, drawX, drawY);
      }
    }

    if (borderGlowStrength > 0.001) {
      drawBorderGlowOverlay(ctx, renderWidth, renderHeight, borderGlowStrength);
    }
    ctx.globalAlpha = 1;
    lastFrameDurationMs = Math.max(0, performance.now() - frameStartedAt);
    const fpsElapsed = now - fpsWindowStart;
    if (fpsElapsed >= 500) {
      const nextFps = Math.round((fpsFrameCount * 1000) / fpsElapsed);
      reportFps(Number.isFinite(nextFps) ? nextFps : 0, {
        chars: lastCharCount,
        frameMs: lastFrameDurationMs,
      });
      fpsFrameCount = 0;
      fpsWindowStart = now;
    }

    if (requiresContinuousRendering(interactionEnabled)) {
      scheduleRender();
    }
  }

  async function start() {
    resize();
    document.addEventListener('visibilitychange', handleDocumentVisibilityChange);
    window.addEventListener('resize', handleWindowResize);
    if (typeof IntersectionObserver === 'function') {
      const visibilityThreshold = clamp(Number(EXPORT_OPTIONS.visibilityThreshold ?? 0.01) || 0.01, 0, 1);
      intersectionObserver = new IntersectionObserver(handleIntersection, {
        threshold: [0, visibilityThreshold, 0.25],
      });
      intersectionObserver.observe(mount);
    }
    if (typeof ResizeObserver === 'function') {
      resizeObserver = new ResizeObserver(() => {
        resize();
        scheduleSeparateWebglRender(true);
        scheduleRender(true);
      });
      resizeObserver.observe(mount);
    }
    if (EXPORT_OPTIONS.enableInteractionEffects) {
      window.addEventListener('pointermove', handleWindowPointerMove, { passive: true });
      window.addEventListener('pointerdown', handleWindowPointerDown, { passive: true });
      window.addEventListener('blur', handleWindowBlur);
    }
    source = await loadSource();
    handleRenderActivityChange(true);
  }

  start().catch((error) => {
    reportFps(0);
    drawError('Export source failed: ' + (error && error.message ? error.message : 'Unknown error'));
  });

  window.__asciiDitherExportDestroy = function() {
    reportFps(0);
    if (rafId) cancelAnimationFrame(rafId);
    if (webglRafId) cancelAnimationFrame(webglRafId);
    if (stream) stream.getTracks().forEach((track) => track.stop());
    document.removeEventListener('visibilitychange', handleDocumentVisibilityChange);
    window.removeEventListener('resize', handleWindowResize);
    if (intersectionObserver) intersectionObserver.disconnect();
    if (resizeObserver) resizeObserver.disconnect();
    if (sourceLoopHandler && source && typeof source.removeEventListener === 'function') {
      source.removeEventListener('ended', sourceLoopHandler);
      sourceLoopHandler = null;
    }
    window.removeEventListener('pointermove', handleWindowPointerMove);
    window.removeEventListener('pointerdown', handleWindowPointerDown);
    window.removeEventListener('blur', handleWindowBlur);
    disposeWebglShaderResources();
    mount.replaceChildren();
    delete mount.__asciiDitherDestroy;
    if (IS_TEMPLATE_PREVIEW_RUNTIME) {
      const runtimeEntry = runtimeScope[TEMPLATE_PREVIEW_RUNTIME_KEY];
      if (runtimeEntry && runtimeEntry.id === previewRuntimeId) {
        delete runtimeScope[TEMPLATE_PREVIEW_RUNTIME_KEY];
      }
    }
  };
  mount.__asciiDitherDestroy = window.__asciiDitherExportDestroy;
  if (IS_TEMPLATE_PREVIEW_RUNTIME) {
    const runtimeEntry = runtimeScope[TEMPLATE_PREVIEW_RUNTIME_KEY];
    if (runtimeEntry && runtimeEntry.id === previewRuntimeId) {
      runtimeEntry.destroy = window.__asciiDitherExportDestroy;
    }
  }
})();
<\/script>`}function Pv(r,n={}){const i=typeof n.externalScriptSrc=="string"&&n.externalScriptSrc.trim()?n.externalScriptSrc.trim():"./ascii-dither-background.js",s=qd(r,n),{mountMarkup:l,runtimeCode:d}=I_(s);return{primaryCode:`${l}
<script src="${Dv(i)}"><\/script>
`,primaryLabel:"HTML File",primaryFileName:"ascii-dither-background.html",primaryMimeType:"text/html;charset=utf-8",jsCode:d,jsFileName:Uv(i),externalScriptSrc:i,mountMarkup:l}}function B_(r,n={}){const i=typeof n.externalScriptSrc=="string"&&n.externalScriptSrc.trim()?n.externalScriptSrc.trim():"./ascii-dither-background.js",s=Pv(r,{...n,externalScriptSrc:i});return{primaryCode:`import { useEffect, useRef } from 'react'

export default function AsciiDitherBackground() {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    host.style.position = 'absolute'
    host.style.inset = ''
    host.style.top = '0'
    host.style.left = '0'
    host.style.right = '0'
    host.style.bottom = 'auto'
    host.style.height = '100vh'
    host.style.zIndex = '0'
    host.style.pointerEvents = 'none'
    host.style.overflow = 'hidden'

    host.innerHTML = \`${Bv(s.mountMarkup)}\`

    const script = document.createElement('script')
    script.src = ${JSON.stringify(i)}
    script.async = true
    host.appendChild(script)

    return () => {
      const mount = host.querySelector('[data-ascii-dither-bg]')
      if (mount && typeof mount.__asciiDitherDestroy === 'function') {
        mount.__asciiDitherDestroy()
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      host.innerHTML = ''
    }
  }, [])

  return <div ref={hostRef} aria-hidden="true" />
}
`,primaryLabel:"React Component File",primaryFileName:"AsciiDitherBackground.jsx",primaryMimeType:"text/jsx;charset=utf-8",jsCode:s.jsCode,jsFileName:s.jsFileName,externalScriptSrc:i}}function Bv(r){return String(r).replace(/\\/g,"\\\\").replace(/`/g,"\\`").replace(/\$\{/g,"\\${")}function sv(r,n={}){const i=qd(r,n),s='<div data-ascii-dither-bg aria-hidden="true"></div>',m=(i.match(/<script>\n?([\s\S]*?)<\/script>/i)?.[1]||"").trim().replace(/const mount = document\.querySelector\('\[data-ascii-dither-bg\]'\);/,"const mount = host.querySelector('[data-ascii-dither-bg]') || document.querySelector('[data-ascii-dither-bg]');").split(`
`).map(p=>`    ${p}`).join(`
`);return`import { useEffect, useRef } from 'react'

export default function AsciiDitherBackground() {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    host.style.position = 'absolute'
    host.style.inset = ''
    host.style.top = '0'
    host.style.left = '0'
    host.style.right = '0'
    host.style.bottom = 'auto'
    host.style.height = '100vh'
    host.style.zIndex = '0'
    host.style.pointerEvents = 'none'
    host.style.overflow = 'hidden'

    host.innerHTML = \`${Bv(s)}\`;
${m}

    return () => {
      const mount = host.querySelector('[data-ascii-dither-bg]')
      if (mount && typeof mount.__asciiDitherDestroy === 'function') {
        mount.__asciiDitherDestroy()
      }
      host.innerHTML = ''
    }
  }, [])

  return <div ref={hostRef} aria-hidden="true" />
}
`}function z_(r,n,i={}){return Rv(r,{token:P2,assetMarkup:n,theme:i.theme==="light"?"light":"dark",backgroundColor:i.backgroundColor,viewportWidth:i.viewportWidth,viewportHeight:i.viewportHeight,contentScale:i.contentScale})}function G_(){const[r,n]=x.useState(null),[i,s]=x.useState(null),[l,d]=x.useState(null),[m,p]=x.useState("upload"),[g,v]=x.useState(""),[y,E]=x.useState(Mn.LIBRARY),[M,A]=x.useState([]),[D,B]=x.useState(""),[H,K]=x.useState(!1),[ae,F]=x.useState(""),[Z,W]=x.useState([]),[ee,q]=x.useState(!1),[J,pe]=x.useState(""),[oe,Te]=x.useState(Es.FEATURED),[Oe,ke]=x.useState(""),[qe,ot]=x.useState(null),[P,ce]=x.useState(null),[ve,at]=x.useState("dark"),[tt,k]=x.useState("desktop"),[te,de]=x.useState(Ko),[xe,Ae]=x.useState(!1),[Ze,Ve]=x.useState(""),[mt,Zt]=x.useState(I2),[da,Vr]=x.useState(0),[Rs,co]=x.useState({chars:0,frameMs:0,instanceId:""}),[fe,ue]=x.useState(!1),[_e,Qe]=x.useState(!1),[Mt,et]=x.useState(!1),[_a,$t]=x.useState(!1),[uo,Pn]=x.useState(!1),[An,xt]=x.useState(!1),[_t,Qt]=x.useState(!1),[dn,Ns]=x.useState(!1),[oi,Vi]=x.useState(!1),[bu,Hr]=x.useState("_"),[ye,Ia]=x.useState({terms:!1,privacy:!1}),[Re,Za]=x.useState({terms:{x:24,y:24},privacy:{x:72,y:72}}),[li,Os]=x.useState(""),[Ea,wr]=x.useState(!1),[Ca,er]=x.useState("file"),[Hi,Et]=x.useState(""),[La,$r]=x.useState(0),[ho,ci]=x.useState(0),[$i,ui]=x.useState(null),[he,js]=x.useState(null),[tr,ha]=x.useState(""),[Sr,In]=x.useState(""),[en,pt]=x.useState("signin"),[Rn,Le]=x.useState(""),[xr,Fi]=x.useState(Dl),[fo,di]=x.useState(!1),[Se,Ee]=x.useState(!1),[gt,nt]=x.useState(""),[At,Nt]=x.useState(!1),[Ye,Ot]=x.useState(!1),[Bn,fa]=x.useState(0),[ta,on]=x.useState(""),[hn,_r]=x.useState(""),[Er,nr]=x.useState(""),[ma,zn]=x.useState(_f),[Ft,Xn]=x.useState(!1),[Rt,Fr]=x.useState(!1),[ar,fn]=x.useState(!1),[ks,Gn]=x.useState([]),[mn,Da]=x.useState(!1),[hi,na]=x.useState(""),[Wi,mo]=x.useState(1),[qi,el]=x.useState(!1),[fi,po]=x.useState(null),[Xe,zt]=x.useState(!1),[Ct,jt]=x.useState(""),[rt,pn]=x.useState(""),[bt,wt]=x.useState(!1),[kt,Wt]=x.useState(!1),[ge,Vn]=x.useState("script"),[gn,It]=x.useState("COPY"),[tn,Ta]=x.useState(!0),[Gt,Kn]=x.useState(!0),[xn,pa]=x.useState(!0),[nn,ga]=x.useState(!0),[an,qt]=x.useState(!0),[st,Hn]=x.useState(!0),[Yt,rr]=x.useState(30),[ln,aa]=x.useState(!0),[_n,Cr]=x.useState("./ascii-dither-background.js"),[ir,Yi]=x.useState(100),[mi,Kl]=x.useState(128),[Xi,Ql]=x.useState(6),[Tr,tl]=x.useState(!1),[Jl,Ki]=x.useState(""),[nl,al]=x.useState(!1),[pi,wu]=x.useState(!1),[Zl,ec]=x.useState(!1),[Su,xu]=x.useState(!1),[gi,tc]=x.useState(!1),[go,nc]=x.useState(!1),[rl,ah]=x.useState(""),[ac,_u]=x.useState(""),[rc,Eu]=x.useState(""),[il,sl]=x.useState(""),[Qi,Cu]=x.useState(!1),[Tu,ol]=x.useState(""),[Ma,Mu]=x.useState(null),[ic,Ji]=x.useState(""),[sc,oc]=x.useState(""),[lc,ll]=x.useState(""),[yo,Zi]=x.useState(""),[es,Au]=x.useState(!1),[cl,yi]=x.useState(""),[cc,uc]=x.useState({visible:!1,message:"",tone:"success"}),[ts,dc]=x.useState(Ko),[ul,rh]=x.useState("ascii-dither-export"),[Ru,Vf]=x.useState(6),[Nu,Hf]=x.useState(30),[Ou,Ua]=x.useState(12),[Is,hc]=x.useState(320),[fc,ih]=x.useState("ascii-dither-export"),[vo,ju]=x.useState("png"),[ku,ns]=x.useState(720),[dl,hl]=x.useState(92),[mc,as]=x.useState(""),[vi,bo]=x.useState("ascii-dither-export"),[fl,sh]=x.useState("text"),[bi,oh]=x.useState(1),[pc,lh]=x.useState(!0),[ml,$f]=x.useState(!0),[Iu,ch]=x.useState("#ffffff"),[Lu,rs]=x.useState(""),[Pa,pl]=x.useState(320),[Aa,wo]=x.useState("medium"),[gc,Ba]=x.useState(""),[Mr,yc]=x.useState(!1),[is,Nn]=x.useState(""),[za,Wr]=x.useState([]),[gl,ra]=x.useState(1),[wi,Ga]=x.useState(""),[vc,ss]=x.useState("save-01"),[sr,os]=x.useState(()=>JSON.stringify(dt,null,2)),[Du,Ls]=x.useState(!1),[yl,or]=x.useState(!0),Ar=x.useRef(null),lr=x.useRef(null),Ds=x.useRef(null),Us=x.useRef(null),Ra=x.useRef(null),Va=x.useRef(null),Ha=x.useRef({key:"",source:null}),$a=x.useRef(null),cr=x.useRef(!1),ur=x.useRef(!1),So=x.useRef(0),bc=x.useRef(null),wc=x.useRef(null),ls=x.useRef(null),$n=x.useRef(""),Bt=x.useRef(null),ct=x.useRef(null),Si=x.useRef(null),Fa=x.useRef(0),Ps=x.useRef({active:!1,windowType:"",pointerId:null,offsetX:0,offsetY:0}),Rr=x.useRef(null),dr=x.useRef(null),xo=x.useRef(!1),Nr=x.useRef(!1),[Pe,qr]=x.useState({...dt,...(window.__GK_PRESET__||{})}),[xi,_o]=x.useState(0),cs=y===Mn.LIBRARY,Wa=y===Mn.CREATIONS,hr=y===Mn.RENDER,qa=y===Mn.TEMPLATE_LIBRARY,Qn=y===Mn.TEMPLATE_PREVIEW,vl=hr,Bs=qa||Qn,_i=!0,be=!0,On=be?q2:W2,zs=be?"PRO":"FREE",Eo=`${be?Op:Np}MB`,Ei=ye.terms||ye.privacy,Uu=en==="forgot",us=en==="reset",yn=x.useMemo(()=>jp(Er),[Er]),Pu=x.useMemo(()=>S_(hn),[hn]),Co=x.useMemo(()=>{const f=String(Ct||"").trim().toLowerCase();return f?ks.filter(b=>{const S=String(b?.email||"").toLowerCase(),T=String(b?.display_name||"").toLowerCase(),C=String(b?.id||"").toLowerCase();return S.includes(f)||T.includes(f)||C.includes(f)}):ks},[ks,Ct]),En=f=>({"--login-stagger-order":f});x.useEffect(()=>{if(!be){pl(320),hc(320),ns(720),Cu(!1);return}hc(f=>Ie(Number(f)||320,320,1080)),ns(f=>Ie(Number(f)||720,720,2160))},[be]);const ds=x.useCallback(f=>f==="terms"?ct.current:f==="privacy"?Si.current:null,[]),Tt=x.useCallback((f,b="success")=>{const S=String(f||"").trim();S&&(uc({visible:!0,message:S,tone:b==="error"?"error":"success"}),lr.current&&clearTimeout(lr.current),lr.current=setTimeout(()=>{uc(T=>({...T,visible:!1})),lr.current=null},2400))},[]),To=x.useMemo(()=>Array.from({length:t_},(f,b)=>{const S=(b+1)*(Bn+1);return{id:`${Bn}-${b}`,left:4+Ul(S*1.21)*92,delay:Math.round(Ul(S*2.17)*220),duration:1300+Math.round(Ul(S*3.91)*1400),rotate:-42+Ul(S*4.73)*84,hue:44+Math.round(Ul(S*5.37)*30),size:4+Math.round(Ul(S*6.11)*7),drift:-90+Math.round(Ul(S*7.13)*180)}}),[Bn]),Sc=x.useCallback(()=>{const f=Bt.current;f&&(f.style.setProperty("--login-flash-x","50%"),f.style.setProperty("--login-flash-y","50%"),f.style.setProperty("--login-flash-strength","0"),Vi(!1))},[]),bl=x.useCallback((f,b)=>{const S=Bt.current;if(!S)return;const T=S.getBoundingClientRect(),C=f-T.left,j=b-T.top;S.style.setProperty("--login-flash-x",`${C.toFixed(2)}px`),S.style.setProperty("--login-flash-y",`${j.toFixed(2)}px`);const I=f<T.left?T.left-f:f>T.right?f-T.right:0,O=b<T.top?T.top-b:b>T.bottom?b-T.bottom:0,U=Math.hypot(I,O),Q=Math.max(T.width,T.height)*.5+170,X=Math.max(0,Math.min(1,1-U/Q));S.style.setProperty("--login-flash-strength",X.toFixed(3)),Vi(X>.01)},[]),Ci=x.useCallback((f,b={})=>{if(typeof window>"u")return;const S=D2[f];if(!S)return;const T=b?.replace===!0,C=new URL(window.location.href),j=`/${S}`;if(C.pathname===j&&!C.searchParams.has("creation")&&!C.searchParams.has("template")&&!C.searchParams.has("library"))return;const I=`${C.pathname}${C.search}${C.hash}`;C.pathname=j,C.searchParams.delete("creation"),C.searchParams.delete("template"),C.searchParams.delete("library");const O=window.history.state&&typeof window.history.state=="object"?window.history.state:{},U=T?O:{...O,asc11Modal:!0,modalKind:f,fromPath:I};T?window.history.replaceState(U,"",`${C.pathname}${C.search}${C.hash}`):window.history.pushState(U,"",`${C.pathname}${C.search}${C.hash}`),_o(Q=>Q+1)},[]),Yr=x.useCallback(()=>{if(typeof window>"u"||!zd(window.location))return;const b=window.history.state&&typeof window.history.state=="object"?window.history.state:{};if(b.asc11Modal&&window.history.length>1){window.history.back();return}const S=typeof b.fromPath=="string"&&b.fromPath.startsWith("/")?b.fromPath:"/";window.history.replaceState({},"",S),_o(T=>T+1)},[]),rn=x.useCallback((f={})=>{const b=f?.syncRoute!==!1,S=f?.routeKind==="terms"||f?.routeKind==="privacy"?f.routeKind:"login",T=f?.replaceRoute===!0;dr.current&&(window.clearTimeout(dr.current),dr.current=null),ue(!1),Qe(!1),et(!1),Pn(!1),xt(!1),fn(!1),di(!1),Ot(!1),xo.current=!0,Nr.current=!1,Ns(!1),Qt(!0),b&&Ci(S,{replace:T})},[Ci]),Mo=x.useCallback(f=>{if(typeof window>"u")return{x:24,y:24};const b=Sf[f]||Sf.terms,S=12,T=Math.min(Math.max(window.innerWidth*.92,0),760),C=Math.min(Math.max(window.innerHeight*.84,0),620),j=Math.max(S,window.innerWidth-T-S),I=Math.max(S,window.innerHeight-C-S),O=(window.innerWidth-T)*.5+(b.offsetX||0),U=(window.innerHeight-C)*.5+(b.offsetY||0);return{x:Ie(O,S,j),y:Ie(U,S,I)}},[]),wl=x.useCallback((f,b={})=>{if(f!=="terms"&&f!=="privacy")return;const S=b?.syncRoute!==!1,T=b?.replaceRoute===!0;rn({syncRoute:!1}),Ia(C=>({...C,[f]:!0})),Za(C=>({...C,[f]:Mo(f)})),S&&Ci(f,{replace:T})},[Mo,rn,Ci]),Xr=x.useCallback((f="",b={})=>{const S=b?.syncRoute!==!1;if(Ps.current={active:!1,windowType:"",pointerId:null,offsetX:0,offsetY:0},Os(""),f==="terms"||f==="privacy"){Ia(j=>({...j,[f]:!1}));const C=typeof window<"u"?zd(window.location):"";if(S&&C===f){const j=typeof window<"u"&&window.history.state&&typeof window.history.state=="object"?window.history.state:{};if(typeof window<"u"&&j.asc11Modal&&window.history.length>1){window.history.back();return}Ci("login",{replace:!0})}return}Ia({terms:!1,privacy:!1});const T=typeof window<"u"?zd(window.location):"";if(S&&(T==="terms"||T==="privacy")){const C=typeof window<"u"&&window.history.state&&typeof window.history.state=="object"?window.history.state:{};if(typeof window<"u"&&C.asc11Modal&&window.history.length>1){window.history.back();return}Ci("login",{replace:!0})}},[Ci]),Ao=x.useCallback((f,b)=>{if(!Ei||b.button!==0||f!=="terms"&&f!=="privacy"||!ye[f])return;const S=ds(f);if(!S)return;const T=S.getBoundingClientRect();Ps.current={active:!0,windowType:f,pointerId:b.pointerId,offsetX:b.clientX-T.left,offsetY:b.clientY-T.top},Os(f),b.currentTarget.setPointerCapture?.(b.pointerId),b.preventDefault()},[ds,Ei,ye]),Ln=x.useCallback((f={})=>{const b=f?.syncRoute!==!1,S=f?.immediate===!0;if(!(!xo.current&&!Nr.current)){if(dr.current&&(window.clearTimeout(dr.current),dr.current=null),Xr("",{syncRoute:!1}),S){xo.current=!1,Nr.current=!1,Qt(!1),Ns(!1),b&&Yr();return}Nr.current=!0,Ns(!0),dr.current=window.setTimeout(()=>{xo.current=!1,Nr.current=!1,Qt(!1),Ns(!1),dr.current=null},Z2),b&&Yr()}},[Xr,Yr]),Sl=x.useCallback(async()=>{if(typeof window>"u")return;const f=window.AudioContext||window.webkitAudioContext;if(!f)return;let b=Rr.current;(!b||b.state==="closed")&&(b=new f,Rr.current=b),b.state==="suspended"&&await b.resume();const S=b.currentTime+.003,T=.18+Math.random()*.34,C=S+T,j=b.createGain(),I=b.createBiquadFilter(),O=["sine","triangle","sawtooth","square"],U=[82.41,98,110,123.47,146.83,164.81,196,220,246.94,293.66,329.63],Q=U[Math.floor(Math.random()*U.length)]||146.83;I.type=Math.random()>.52?"lowpass":"bandpass",I.frequency.setValueAtTime(560+Math.random()*2800,S),I.Q.setValueAtTime(.35+Math.random()*3.2,S),j.gain.setValueAtTime(1e-4,S),j.gain.exponentialRampToValueAtTime(.06+Math.random()*.09,S+.018),j.gain.exponentialRampToValueAtTime(1e-4,C),I.connect(j),j.connect(b.destination);const X=Math.random()>.62?2:1,le=[];for(let me=0;me<X;me+=1){const we=b.createOscillator();we.type=O[Math.floor(Math.random()*O.length)]||"triangle";const De=(Math.random()-.5)*(me===0?18:34),lt=me===0?1:Math.random()>.5?2:.5;we.frequency.setValueAtTime(Q*lt,S),we.detune.setValueAtTime(De,S),we.connect(I),we.start(S),we.stop(C+.035),le.push(we)}window.setTimeout(()=>{le.forEach(me=>me.disconnect()),I.disconnect(),j.disconnect()},Math.ceil((T+.12)*1e3))},[]),xc=x.useCallback(f=>{const b=f.target instanceof Element?f.target:null;b&&(b.closest(".login-modal-shell")||b.closest(".login-legal-window")||Sl())},[Sl]),ya=x.useCallback(()=>{d(f=>(f&&f.getTracks().forEach(b=>b.stop()),null))},[]);x.useEffect(()=>()=>{ya()},[ya]),x.useEffect(()=>()=>{Ar.current&&clearTimeout(Ar.current)},[]),x.useEffect(()=>()=>{dr.current&&(window.clearTimeout(dr.current),dr.current=null)},[]),x.useEffect(()=>()=>{const f=Rr.current;f&&f.state!=="closed"&&f.close(),Rr.current=null},[]),x.useEffect(()=>{xo.current=_t},[_t]),x.useEffect(()=>{Nr.current=dn},[dn]),x.useEffect(()=>{_t||Sc()},[Sc,_t]),x.useEffect(()=>{if(!_t){Hr("_");return}if(typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){Hr(`${Dd}_`);return}let b=null,S=null,T=!1;const C=()=>{if(T)return;let j=0;Hr("_");const I=()=>{if(T)return;if(j<Dd.length){j+=1,Hr(`${Dd.slice(0,j)}_`),b=window.setTimeout(I,$y);return}const O=Dd.length*$y,U=Math.max(220,K2-O);S=window.setTimeout(C,U)};b=window.setTimeout(I,180)};return C(),()=>{T=!0,b&&window.clearTimeout(b),S&&window.clearTimeout(S)}},[_t]),x.useEffect(()=>{_t||Xr("",{syncRoute:!1})},[Xr,_t]),x.useEffect(()=>{if(!_t)return;const f=C=>{bl(C.clientX,C.clientY)},b=C=>{bl(C.clientX,C.clientY)},S=()=>{Sc()};window.addEventListener("pointermove",f,{passive:!0}),window.addEventListener("pointerdown",b,{passive:!0}),window.addEventListener("blur",S);const T=Bt.current;if(T){const C=T.getBoundingClientRect();bl(C.left+C.width*.5,C.top+C.height*.5)}return()=>{window.removeEventListener("pointermove",f),window.removeEventListener("pointerdown",b),window.removeEventListener("blur",S)}},[Sc,_t,bl]),x.useEffect(()=>{if(!_t||!Ei)return;const f=S=>{const T=Ps.current;if(!T.active||T.pointerId!==null&&S.pointerId!==T.pointerId)return;const C=T.windowType;if(C!=="terms"&&C!=="privacy"||!ye[C])return;const j=ds(C),I=j?.offsetWidth||0,O=j?.offsetHeight||0,U=12,Q=Math.max(U,window.innerWidth-I-U),X=Math.max(U,window.innerHeight-O-U),le=Ie(S.clientX-T.offsetX,U,Q),me=Ie(S.clientY-T.offsetY,U,X);Za(we=>({...we,[C]:{x:le,y:me}}))},b=S=>{const T=Ps.current;T.active&&(T.pointerId!==null&&S.pointerId!==T.pointerId||(Ps.current={active:!1,windowType:"",pointerId:null,offsetX:0,offsetY:0},Os("")))};return window.addEventListener("pointermove",f),window.addEventListener("pointerup",b),window.addEventListener("pointercancel",b),()=>{window.removeEventListener("pointermove",f),window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b)}},[ds,Ei,ye,_t]),x.useEffect(()=>{if(!_t||!Ei)return;const f=()=>{Za(S=>{let T=!1;const C={...S};for(const j of Fy){if(!ye[j])continue;const I=ds(j),O=I?.offsetWidth||Math.min(Math.max(window.innerWidth*.92,0),760),U=I?.offsetHeight||Math.min(Math.max(window.innerHeight*.84,0),620),Q=12,X=Math.max(Q,window.innerWidth-O-Q),le=Math.max(Q,window.innerHeight-U-Q),me=S[j]||{x:Q,y:Q},we=Ie(me.x,Q,X),De=Ie(me.y,Q,le);(we!==me.x||De!==me.y)&&(C[j]={x:we,y:De},T=!0)}return T?C:S})},b=window.requestAnimationFrame(f);return window.addEventListener("resize",f),()=>{window.cancelAnimationFrame(b),window.removeEventListener("resize",f)}},[ds,Ei,ye,_t]),x.useEffect(()=>{if(!_t&&!fo&&!Ye&&!ar)return;const f=b=>{if(b.key==="Escape"){if(b.preventDefault(),ar){fn(!1);return}if(Ye){Ot(!1);return}if(fo){Nt(!1),di(!1),Yr();return}if(Ei){Xr();return}Ln()}};return window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f)}},[Yr,Xr,Ln,Ei,fo,Ye,ar,_t]),x.useEffect(()=>{Pe.style==="winamp"&&qr(f=>f.style==="winamp"?{...f,style:"retro"}:f)},[Pe.style]),x.useEffect(()=>{if(he?.id){on(Of(he));return}on(""),_r(""),nr(""),zn(_f),Fr(!1),fn(!1),Gn([]),na(""),mo(1),el(!1),jt(""),pn("")},[he?.id]),x.useEffect(()=>{if(!ka||!se)return;let f=!0;se.auth.getSession().then(({data:S,error:T})=>{if(f){if(T){Le(T.message),ui(null),js(null);return}ui(S.session||null),js(S.session?.user||null)}}).catch(S=>{f&&Le(S instanceof Error?S.message:"Failed to initialize auth session.")});const{data:{subscription:b}}=se.auth.onAuthStateChange((S,T)=>{if(f)if(ui(T||null),js(T?.user||null),S==="SIGNED_IN"){if(typeof window<"u"&&/type=recovery/.test(String(window.location.hash||""))){pt("reset"),In(""),Le("Set your new password to finish account recovery."),rn(),xt(!1);return}Le("Signed in."),Ln(),xt(!1),fn(!1)}else if(S==="SIGNED_OUT"){if(Le("Signed out."),di(!1),Ot(!1),Nt(!1),typeof window<"u")try{window.sessionStorage.removeItem(Ud)}catch{}xt(!1),fn(!1),Yr()}else S==="PASSWORD_RECOVERY"&&(pt("reset"),In(""),Le("Set your new password to finish account recovery."),rn(),xt(!1),fn(!1))});return()=>{f=!1,b.unsubscribe()}},[Yr,Ln,rn]),x.useEffect(()=>{if(typeof window>"u")return;const f=window.location.hash||"";/type=recovery/.test(f)&&(pt("reset"),In(""),Le("Set your new password to finish account recovery."),rn())},[rn]);const Fn=x.useCallback((f="",b={})=>{const S=b?.syncRoute!==!1,T=b?.replaceRoute===!0;f&&nt(f),ue(!1),Qe(!1),et(!1),Pn(!1),xt(!1),Ot(!1),Ln({syncRoute:!1,immediate:!0}),di(!0),S&&Ci("pricing",{replace:T})},[Ln,Ci]),Ya=x.useCallback((f={})=>{const b=f?.syncRoute!==!1;Nt(!1),di(!1),b&&Yr()},[Yr]),Ti=x.useCallback(()=>{Ot(!1)},[]),Gs=x.useCallback((f="СНЯТЫ ВСЕ ОГРАНИЧЕНИЯ. ПОЛЬЗУЙСЯ КАК СВОИМ.")=>{if(Nt(!1),nt(f),di(!1),Ot(!0),fa(b=>b+1),typeof window<"u")try{window.sessionStorage.removeItem(Ud)}catch{}},[]);x.useEffect(()=>{if(typeof window>"u")return;const f=()=>{_o(b=>b+1)};return window.addEventListener("popstate",f),()=>{window.removeEventListener("popstate",f)}},[]);const Bu=x.useCallback(()=>{if(typeof window>"u")return;const f=zd(window.location);if(f==="pricing"){Fn("",{syncRoute:!1});return}if(f==="login"){Ya({syncRoute:!1}),rn({syncRoute:!1}),Xr("",{syncRoute:!1});return}if(f==="terms"||f==="privacy"){Ya({syncRoute:!1}),rn({syncRoute:!1}),Ia({terms:f==="terms",privacy:f==="privacy"}),Za(b=>({...b,[f]:Mo(f)}));return}Ya({syncRoute:!1}),Ln({syncRoute:!1,immediate:!0})},[Xr,Ya,Ln,Mo,rn,Fn]);x.useEffect(()=>{Bu()},[xi,Bu]);const Mi=x.useCallback(async f=>{if(!se||!f)return Fi(Dl),Dl;try{const{data:b,error:S}=await se.from("user_entitlements").select("plan").eq("user_id",f).maybeSingle();if(S)throw S;const T=b?.plan==="pro"?"pro":Dl;return Fi(T),T}catch{return Fi(Dl),Dl}},[]),Ro=x.useCallback(async f=>{if(!se||!f)return Fr(!1),!1;try{const{data:b,error:S}=await se.from("admins").select("user_id").eq("user_id",f).maybeSingle();if(S)throw S;const T=!!b?.user_id;return Fr(T),T}catch{return Fr(!1),!1}},[se]),Ai=x.useCallback(async()=>{if(!se||!he?.id){_r(""),nr(""),zn(_f);return}Xn(!0);try{const f=async(me,we)=>{let De=se.from(me).select("id",{count:"exact",head:!0}).eq("user_id",he.id);typeof we=="function"&&(De=we(De));const{count:lt,error:je}=await De;if(je){if(Cf(je))return 0;throw je}return w_(lt)};let b=null;const{data:S,error:T}=await se.from("user_profiles").select("display_name, bio, website").eq("user_id",he.id).maybeSingle();if(!T||T.code==="PGRST116")b=S;else if(!Cf(T))throw T;const[C,j,I,O,U]=await Promise.all([f("gallery_assets"),f("template_assets"),f("creations"),f("presets"),f("creations",me=>me.not("script_path","is",null).neq("script_path",""))]),Q=String(b?.display_name||"").trim()||Of(he),X=String(b?.bio||"").trim(),le=String(b?.website||"").trim();on(Q),_r(X),nr(le),zn({library:C,templates:j,creations:I,presets:O,exports:U})}catch(f){Le(Sa(f,"Failed to load account profile.")),zn(_f)}finally{Xn(!1)}},[he?.id]);x.useEffect(()=>{if(!he?.id){Fi(Dl);return}Mi(he.id)},[he,Mi]),x.useEffect(()=>{if(!he?.id){Fr(!1);return}Ro(he.id)},[he,Ro]),x.useEffect(()=>{he?.id&&Ai()},[he,Ai]),x.useEffect(()=>{!An||!he?.id||Ai()},[he,Ai,An]),x.useEffect(()=>{if(typeof window>"u")return;const f=new URL(window.location.href),b=f.searchParams.get("billing");let S=!1;try{S=window.sessionStorage.getItem(Ud)==="1"}catch{S=!1}if(!(!b&&!S)){if(b==="success"||S)xr==="pro"?Gs("Payment confirmed. Pro features are now active."):(nt("Payment received. Activating Pro..."),Fn("",{syncRoute:!0}),Nt(!0));else if(b==="cancel"){nt("Checkout canceled."),Nt(!1),Fn("",{syncRoute:!0});try{window.sessionStorage.removeItem(Ud)}catch{}}f.searchParams.delete("billing"),window.history.replaceState({},"",`${f.pathname}${f.search}${f.hash}`)}},[Fn,Gs,xr]),x.useEffect(()=>{if(!he?.id||!At)return;let f=!1,b=0,S=null;const T=12,C=1500,j=async()=>{if(f)return;b+=1;const I=await Mi(he.id);if(!f){if(I==="pro"){Gs();return}if(b>=T){Nt(!1),nt("Payment received. Activation is still processing. Please refresh in a moment.");return}S=window.setTimeout(j,C)}};return S=window.setTimeout(j,900),()=>{f=!0,S&&window.clearTimeout(S)}},[he,At,Gs,Mi]),x.useEffect(()=>{xr!=="pro"||!At||Gs()},[At,Gs,xr]);const Ke=x.useCallback((f=Qa)=>!0,[he,rn]),fr=x.useCallback((f="Upgrade to Pro to use this feature.")=>Ke("Sign in to access this feature.")?be?!0:(Fn(f),!1):!1,[be,Fn,Ke]),uh=x.useCallback(async()=>{if(Ke("Sign in to upgrade to Pro.")){if(be){nt("Your account already has Pro access."),Fn("",{syncRoute:!0});return}if(!se){nt(Pr),Fn("",{syncRoute:!0});return}Ee(!0),nt("Redirecting to Stripe checkout...");try{const{data:f,error:b}=await se.auth.getUser();if(b||!f?.user)throw Le("Session expired. Sign in again to upgrade."),pt("signin"),In(""),rn(),new Error("Missing authenticated user for checkout session.");let{data:{session:S},error:T}=await se.auth.getSession();if(T)throw T;if(!S?.access_token){const{data:O,error:U}=await se.auth.refreshSession();if(U)throw U;S=O.session}const{access_token:C=""}=S||{};if(!C)throw Le("Session expired. Sign in again to upgrade."),pt("signin"),In(""),rn(),new Error("Missing access token for checkout session.");const j=await s_(C),I=typeof j?.url=="string"?j.url:"";if(!I)throw new Error("Checkout session created but redirect URL was missing.");if(typeof window<"u")try{window.sessionStorage.setItem(Ud,"1")}catch{}window.location.assign(I)}catch(f){const b=Sa(f,"Failed to start Stripe checkout.");/401|unauthorized|missing authorization|session expired|jwt/i.test(b)&&(Le("Session expired. Sign in again to upgrade."),pt("signin"),In(""),rn()),nt(Sa(f,"Failed to start Stripe checkout."))}finally{Ee(!1)}}},[be,rn,Ke,se]),Vs=x.useCallback(async()=>{if(!ka||!se){Le(Pr);return}wt(!0),Le("Redirecting to Google sign-in...");try{const{error:f}=await se.auth.signInWithOAuth({provider:"google",options:{redirectTo:sp}});if(f)throw f}catch(f){Le(f instanceof Error?f.message:"Google sign-in failed.")}finally{wt(!1)}},[]),dh=x.useCallback(async()=>{if(!ka||!se){Le(Pr);return}const f=String(tr||"").trim(),b=String(Sr||"");if(!f){Le("Enter an email address.");return}if(!b){Le("Enter a password.");return}wt(!0),Le(en==="signup"?"Creating account...":"Signing in...");try{if(en==="signup"){const{data:S,error:T}=await se.auth.signUp({email:f,password:b,options:{emailRedirectTo:sp}});if(T)throw T;const C=!!S?.session;Le(C?"Account created and signed in.":`Account created. Check ${f} to confirm your email.`)}else{const{error:S}=await se.auth.signInWithPassword({email:f,password:b});if(S)throw S;Le("Signed in.")}}catch(S){Le(S instanceof Error?S.message:"Email authentication failed.")}finally{wt(!1)}},[tr,en,Sr]),hs=x.useCallback(async()=>{if(!ka||!se){Le(Pr);return}const f=String(tr||"").trim();if(!f){Le("Enter your account email to reset password.");return}wt(!0),Le("Sending password reset email...");try{const{error:b}=await se.auth.resetPasswordForEmail(f,{redirectTo:sp});if(b)throw b;Le(`Reset email sent to ${f}. Check your inbox.`)}catch(b){Le(b instanceof Error?b.message:"Failed to send reset email.")}finally{wt(!1)}},[tr]),zu=x.useCallback(async()=>{if(!ka||!se){Le(Pr);return}const f=String(Sr||"");if(!f){Le("Enter a new password.");return}wt(!0),Le("Updating password...");try{const{error:b}=await se.auth.updateUser({password:f});if(b)throw b;if(typeof window<"u"&&window.location.hash){const S=`${window.location.pathname}${window.location.search}`;window.history.replaceState({},document.title,S)}pt("signin"),In(""),Le("Password updated. You can now sign in.")}catch(b){Le(b instanceof Error?b.message:"Failed to update password.")}finally{wt(!1)}},[Sr]),Gu=x.useCallback(async()=>{if(!ka||!se){Le(Pr);return}wt(!0);try{const{error:f}=await se.auth.signOut();if(f)throw f;xt(!1),fn(!1),Ln()}catch(f){Le(f instanceof Error?f.message:"Failed to sign out.")}finally{wt(!1)}},[Ln]),Xa=x.useCallback(async()=>{if(!se)return"";let{data:{session:f},error:b}=await se.auth.getSession();if(b)throw b;if(!f?.access_token){const{data:S,error:T}=await se.auth.refreshSession();if(T)throw T;f=S?.session??null}return String(f?.access_token||"").trim()},[se]),Ri=x.useCallback(async f=>{let T=1,C=0;for(;T<=2e3;){const j=await dp(f,{action:"list_users",page:T,perPage:200}),I=Array.isArray(j?.users)?j.users:[];if(C+=I.length,!j?.hasMore||I.length===0)return C;T+=1}throw new Error("User count pagination limit reached.")},[]),Ni=x.useCallback(async(f=1)=>{if(!(!se||!he?.id||!Rt)){Da(!0),na("");try{const b=await Xa();if(!b)throw new Error("Session expired. Sign in again.");const S=await dp(b,{action:"list_users",page:f,perPage:e_}),T=Array.isArray(S?.users)?S.users:[],C=Number(S?.total),j=Number.isFinite(C)&&C>=0,I=j?Math.floor(C):null;Gn(T),mo(Number(S?.page)||f),el(!!S?.hasMore),j?(po(I),zt(!1)):f===1&&fi===null&&(zt(!0),(async()=>{try{const O=await Ri(b);po(O)}catch{}finally{zt(!1)}})()),T.length===0&&na("No users found on this page.")}catch(b){na(Sa(b,"Failed to load users.")),zt(!1)}finally{Da(!1)}}},[fi,he?.id,Ri,Xa,Rt,se]),Vu=x.useCallback(()=>{if(Ke("Sign in to manage users.")){if(!Rt){Le("Admin access required.");return}xt(!1),fn(!0),mo(1),mn||Ni(1)}},[mn,Rt,Ni,Ke,xt]),_c=x.useCallback(()=>{fn(!1),na(""),jt(""),po(null),zt(!1)},[]),No=x.useCallback(async(f,b)=>{if(!(!se||!he?.id||!Rt)&&f&&!(b!=="free"&&b!=="pro")){pn(f),na("");try{const S=await Xa();if(!S)throw new Error("Session expired. Sign in again.");await dp(S,{action:"set_plan",userId:f,plan:b}),Gn(T=>T.map(C=>C.id===f?{...C,plan:b}:C)),f===he.id&&Fi(b),na(`Updated ${f.slice(0,8)} to ${b.toUpperCase()}.`)}catch(S){na(Sa(S,"Failed to update plan."))}finally{pn("")}}},[he?.id,Xa,Rt,se]),xl=x.useCallback(async()=>{if(!Ke()||!se)return;if(!he?.id){Le("Sign in to update profile.");return}const f=String(ta||"").trim(),b=String(hn||"").trim(),S=String(Er||"").trim(),T=S?jp(S):"";if(S&&!T){Le("Enter a valid website URL.");return}Wt(!0);try{const{error:C}=await se.from("user_profiles").upsert({user_id:he.id,display_name:f||null,bio:b||null,website:T||null},{onConflict:"user_id"});if(C&&!Cf(C))throw C;const{error:j}=await se.auth.updateUser({data:{display_name:f}});if(j)throw j;S!==T&&nr(T),Ai(),Le(C&&Cf(C)?"Display name saved. Run latest DB migrations to enable bio/website persistence.":"Profile settings saved.")}catch(C){Le(C instanceof Error?C.message:"Failed to update profile.")}finally{Wt(!1)}},[hn,ta,he,Er,Ai,Ke]),Hs=x.useCallback(async()=>{K(!0),F("");try{if(ka&&se){let T=null,C=null;if({data:T,error:C}=await se.from("template_assets").select("id, user_id, name, path, type, summary, html, bucket, slug, created_at").order("created_at",{ascending:!1}).order("path",{ascending:!0}),C&&Br(C,"slug")&&({data:T,error:C}=await se.from("template_assets").select("id, user_id, name, path, type, summary, html, bucket, created_at").order("created_at",{ascending:!1}).order("path",{ascending:!0})),C)throw C;const j=Array.isArray(T)?T.filter(I=>typeof I?.path=="string"&&I.path.trim().length>0).map((I,O)=>({id:I.id||I.path||`template-${O+1}`,name:I.name||"Untitled Template",path:I.path,type:I.type||"general",summary:I.summary||"",html:typeof I.html=="string"?I.html:"",bucket:I.bucket||"templates-html",slug:typeof I.slug=="string"?I.slug:"",ownerId:typeof I.user_id=="string"?I.user_id:""})):[];A(j),B("templates"),ke(I=>I&&j.some(O=>O.id===I)?I:j[0]?.id||"");return}if(!Ap)throw new Error("Templates are unavailable on this host. Configure runtime settings.");const f=await fetch("/api/templates",{cache:"no-store"}),b=await f.json();if(!f.ok)throw new Error(b?.error||"Unable to load templates.");const S=Array.isArray(b?.templates)?b.templates:[];A(S),B(typeof b?.root=="string"?b.root:""),ke(T=>T&&S.some(C=>C.id===T)?T:S[0]?.id||"")}catch(f){A([]),B(""),ke(""),F(f instanceof Error?f.message:"Unable to load templates.")}finally{K(!1)}},[he?.id]);x.useEffect(()=>{Hs()},[Hs]),x.useEffect(()=>{qa&&Hs()},[qa,Hs]);const Ec=x.useCallback(async(f=oe)=>{const b=f===Es.UPCOMING?Es.UPCOMING:Es.FEATURED,S=b===Es.UPCOMING,T=b===Es.FEATURED;q(!0),pe("");try{if(!ka||!se){W([]),pe("Creations are unavailable on this host. Configure runtime settings.");return}let C=se.from("creations").select("id, user_id, name, description, keywords, preview_url, source, source_type, settings, script_url, script_path, slug, is_public, featured, created_at").order("created_at",{ascending:!1});S?C=C.eq("is_public",!0):T&&(C=C.eq("featured",!0));const{data:j,error:I}=await C;let O=j,U=I;if(U&&(Br(U,"slug")||Br(U,"is_public")||Br(U,"featured"))){const X=!Br(U,"slug"),le=!Br(U,"is_public"),me=!Br(U,"featured"),we=["id","user_id","name","description","keywords","preview_url","source","source_type","settings","script_url","script_path",...X?["slug"]:[],...le?["is_public"]:[],...me?["featured"]:[],"created_at"];let De=se.from("creations").select(we.join(", ")).order("created_at",{ascending:!1});S&&le?De=De.eq("is_public",!0):T&&me&&(De=De.eq("featured",!0));const lt=await De;O=lt.data,U=lt.error}if(U)throw U;const Q=Array.isArray(O)?O.map((X,le)=>({id:X.id||`creation-${le+1}`,name:X.name||"Untitled Creation",description:typeof X.description=="string"?X.description:"",keywords:Qo(X.keywords,Ts),preview_url:typeof X.preview_url=="string"?X.preview_url:"",source:X.source&&typeof X.source=="object"?X.source:{},source_type:typeof X.source_type=="string"?X.source_type:"procedural",settings:X.settings&&typeof X.settings=="object"?X.settings:{},script_url:typeof X.script_url=="string"?X.script_url:"",script_path:typeof X.script_path=="string"?X.script_path:"",slug:typeof X.slug=="string"?X.slug:"",is_public:typeof X.is_public=="boolean"?X.is_public:!0,featured:typeof X.featured=="boolean"?X.featured:!1,ownerId:typeof X.user_id=="string"?X.user_id:"",created_at:X.created_at||""})):[];W(Q)}catch(C){W([]),pe(Sa(C,"Failed to list creations."))}finally{q(!1)}},[he?.id,oe,Rt]),Oo=x.useCallback(f=>{const b=f===Es.UPCOMING?Es.UPCOMING:Es.FEATURED;Te(S=>S===b?S:b)},[]);x.useEffect(()=>{Wa&&Ec(oe)},[oe,ho,Wa,Ec]);const Oi=x.useCallback(f=>{if(!f)return;const b=Qn,S=Jy(f),T=Number(f.size);if(Number.isFinite(T)&&T>On){Ve(`File is ${av(T)}. ${Eo} max for ${zs} users.`),Et(`Source upload limit: FREE ${Np}MB / PRO ${Op}MB`);return}ls.current=f,Ae(!0),E(b?Mn.TEMPLATE_PREVIEW:Mn.RENDER),p("upload"),Ve(""),ya();const C=URL.createObjectURL(f);if(S)n(null),s(C),b&&de({type:"video",url:C});else{s(null);const j=new Image;j.onload=()=>{if(n(j),b){let I="";const O=j.naturalWidth||j.width||0,U=j.naturalHeight||j.height||0;if(O>0&&U>0)try{const Q=Math.min(1,mt/Math.max(O,U)),X=Math.max(1,Math.round(O*Q)),le=Math.max(1,Math.round(U*Q)),me=document.createElement("canvas");me.width=X,me.height=le;const we=me.getContext("2d");we&&(we.drawImage(j,0,0,X,le),I=me.toDataURL("image/jpeg",Il))}catch{I=""}de(I?{type:"image",url:I}:Ko)}Ae(!1)},j.onerror=()=>{b&&de(Ko),Ae(!1)},j.src=C}},[Qn,mt,On,Eo,zs,ya]),Cc=x.useCallback((f,b)=>{qr(S=>{if(f==="customCharset"){const T=typeof b=="string"?b.slice(0,Wd):String(b??"").slice(0,Wd);return{...S,customCharset:T}}return f==="style"&&b==="dither2"?{...S,style:b,backgroundColor:tp,overlayPreset:"noise"}:f==="style"&&b==="dither"?{...S,style:b,overlayPreset:"noise"}:f==="style"?{...S,style:b,overlayPreset:"noise",...b==="dither2"?{backgroundColor:tp}:{}}:f==="overlayPreset"&&b==="matrix"&&S.overlayPreset!=="matrix"?{...S,overlayPreset:b,...B2}:{...S,[f]:b}})},[]),ia=x.useCallback((f,b="",S={})=>{const T=S?.replace===!0;if(typeof window>"u")return;const C=L2[f],j=th(b,""),I=C?j?`/${C}/${encodeURIComponent(j)}`:`/${C}`:"/",O=new URL(window.location.href);O.pathname===I&&!O.searchParams.has("creation")&&!O.searchParams.has("template")&&!O.searchParams.has("library")||(O.pathname=I,O.searchParams.delete("creation"),O.searchParams.delete("template"),O.searchParams.delete("library"),T?window.history.replaceState({},"",`${O.pathname}${O.search}${O.hash}`):window.history.pushState({},"",`${O.pathname}${O.search}${O.hash}`),_o(U=>U+1))},[]),Hu=x.useCallback((f,b=null,S=null)=>{Ds.current=f,Us.current=b,Ra.current=typeof S=="function"?S:null},[]),sa=x.useCallback((f,b,S)=>{if(!f||b<=0||S<=0)return!1;const T=Ds.current;if(!T||!T.width||!T.height)return!1;f.clearRect(0,0,b,S),f.fillStyle=mp(Pe),f.fillRect(0,0,b,S);const C=Us.current,j=!!Pe.webglLayerEnabled&&!Pe.webglOverlayAffectsAscii;if(j&&C&&C.width&&C.height){let I=1,O=!0;try{const U=typeof window<"u"?window.getComputedStyle(C):null;O=String(U?.display||C.style.display||"block").toLowerCase()!=="none",I=Ie(Number(C.style.opacity||U?.opacity||1),0,1)}catch{I=Ie(Number(C.style.opacity||1),0,1)}O&&I>.001&&Pe.webglOverlayPosition==="behind"&&rv(f,C,b,S,I,Ra.current)}if(f.drawImage(T,0,0,b,S),j&&C&&C.width&&C.height){let I=1,O=!0;try{const U=typeof window<"u"?window.getComputedStyle(C):null;O=String(U?.display||C.style.display||"block").toLowerCase()!=="none",I=Ie(Number(C.style.opacity||U?.opacity||1),0,1)}catch{I=Ie(Number(C.style.opacity||1),0,1)}O&&I>.001&&Pe.webglOverlayPosition==="above"&&rv(f,C,b,S,I,Ra.current)}return!0},[Pe.backgroundColor,Pe.webglLayerEnabled,Pe.webglOverlayAffectsAscii,Pe.webglOverlayPosition]),cn=x.useCallback(()=>{const f=Ds.current;if(!f||!f.width||!f.height)return null;const b=document.createElement("canvas");b.width=f.width,b.height=f.height;const S=b.getContext("2d");return S&&sa(S,b.width,b.height)?b:null},[sa]),ji=x.useCallback(f=>{if(!f||!f.width||!f.height)return"";try{const b=Math.min(1,mt/Math.max(f.width,f.height)),S=Math.max(1,Math.round(f.width*b)),T=Math.max(1,Math.round(f.height*b)),C=document.createElement("canvas");C.width=S,C.height=T;const j=C.getContext("2d");return j?(j.drawImage(f,0,0,S,T),C.toDataURL("image/jpeg",Il)):""}catch{return""}},[mt]),fs=x.useCallback((f,b="image/jpeg",S=Il)=>!f||!f.width||!f.height?Promise.resolve(null):new Promise(T=>{try{const C=Math.min(1,mt/Math.max(f.width,f.height)),j=Math.max(1,Math.round(f.width*C)),I=Math.max(1,Math.round(f.height*C)),O=document.createElement("canvas");O.width=j,O.height=I;const U=O.getContext("2d");if(!U){T(null);return}U.drawImage(f,0,0,j,I),O.toBlob(Q=>T(Q instanceof Blob?Q:null),b,S)}catch{T(null)}}),[mt]),$u=x.useCallback(f=>{if(!f)return"";const b=f.naturalWidth||f.width||0,S=f.naturalHeight||f.height||0;if(!b||!S)return"";try{const T=Math.min(1,mt/Math.max(b,S)),C=Math.max(1,Math.round(b*T)),j=Math.max(1,Math.round(S*T)),I=document.createElement("canvas");I.width=C,I.height=j;const O=I.getContext("2d");return O?(O.drawImage(f,0,0,C,j),I.toDataURL("image/jpeg",Il)):""}catch{return""}},[mt]),oa=x.useCallback(()=>{if(r){const f=$u(r);if(f)return{type:"image",url:f}}if(hr){const f=cn(),b=ji(f);if(b)return{type:"image",url:b}}return Ko},[ji,cn,$u,hr,r]),Wn=x.useCallback(async()=>{const f=ls.current instanceof Blob?ls.current:null,b=String(f?.type||"").toLowerCase(),S=!!(f&&b.startsWith("video/"));if(!!!(i&&S))return Ha.current={key:"",source:null},oa();const C=Ie(Number(ir)||100,24,1024),j=Math.round(C*1024),I=Ie(Number(mi)||128,64,320),O=Ie(Number(Xi)||6,1,24),U=typeof f.name=="string"?f.name:"",Q=Number(f.lastModified)||0,X=[i,U,f.size,f.type,Q,j,I,O].join("|");if(Ha.current.key===X&&Ha.current.source)return Ha.current.source;try{const le=await y_(f,{maxBytes:j,maxEdge:I,fps:O}),we={type:"video",url:await io(le.blob),mimeType:le.blob.type||b||"video/webm",width:le.width,height:le.height,fps:le.fps,sizeBytes:le.actualBytes,targetBytes:le.targetBytes};return Ha.current={key:X,source:we},we}catch{return Ha.current={key:"",source:null},oa()}},[oa,Xi,mi,ir,i]);x.useEffect(()=>{if(!(!fe||ge!=="script"&&ge!=="react")){if(tl(!1),dc(oa()),i){Ki("Video source detected. COPY / DOWNLOAD / PUBLISH will encode the full video with your size settings.");return}Ki("")}},[oa,ge,fe,i]);const vn=x.useCallback(async f=>{if(!Qy(f))return;const b=Jy(f),S=b?"Video":"Image",T=Number(f?.size);if(Number.isFinite(T)&&T>On){Et(`${S} is ${av(T)}. ${Eo} max for ${zs} users.`);return}if(!he?.id){Et("Sign in to upload media to your library.");return}if(!(!ka||!se)){Et(`Uploading ${S.toLowerCase()} to library...`);try{const{data:{session:C},error:j}=await se.auth.getSession();if(j)throw j;const I=C?.user?.id,O=C?.access_token;if(!I||!O)throw new Error("Session expired. Sign in again to upload media.");const U=Af(`images/${Wl(I,"user")}`,f.name||(b?"video":"image")),{error:Q}=await se.storage.from(zy).upload(U,f,{cacheControl:"31536000",contentType:f?.type||"application/octet-stream",upsert:!1,headers:{authorization:`Bearer ${O}`}}),X=!!(Q&&m_(Q));if(Q&&!X)throw Q;const le=X?await p_(f):"",me=X?le:U,we=X?"inline-data":zy,De=X?`inline/${Wl(I,"user")}`:U.includes("/")?U.split("/").slice(0,-1).join("/"):".",{error:lt}=await se.from("gallery_assets").upsert({user_id:I,name:f.name||U.split("/").at(-1)||(b?"video":"image"),path:me,folder:De||".",bucket:we,mime_type:String(f?.type||"").trim()||null,size_bytes:Number.isFinite(T)?Math.round(T):null},{onConflict:"path"});if(lt)throw lt;Et(X?`${S} added to library: ${f.name||S.toLowerCase()} (storage fallback mode)`:`${S} added to library: ${f.name||S.toLowerCase()}`),$r(je=>je+1)}catch(C){Et(C instanceof Error?C.message:"Failed to upload media to library.")}}},[he,On,Eo,zs]),ms=x.useCallback(f=>{f&&(Oi(f),vn(f))},[Oi,vn]),Kr=x.useCallback(async(f,b)=>{if(!Ky(f))return;if(!he?.id){Et("Sign in to upload templates to your library.");return}if(!be){Et("Upgrade to Pro to upload templates."),Fn("Pro is required to add HTML templates.");return}if(!ka||!se)return;const S=String(b||"").trim();if(!S){Et("Template upload skipped: HTML file is empty.");return}Et("Uploading template...");try{const{data:{session:T},error:C}=await se.auth.getSession();if(C)throw C;const j=T?.user?.id,I=T?.access_token;if(!j||!I)throw new Error("Session expired. Sign in again to upload templates.");const O=Zy(f.name||"template.html"),U=Af(`templates/${Wl(j,"user")}`,O),Q=new Blob([S],{type:"text/html;charset=utf-8"}),{error:X}=await se.storage.from(wf).upload(U,Q,{cacheControl:"31536000",contentType:"text/html; charset=utf-8",upsert:!1,headers:{authorization:`Bearer ${I}`}});if(X)throw X;const le=U.includes("/")?U.split("/").slice(0,-1).join("/"):".",me=ev(f.name||O),we=le==="."?"general":le.split("/")[0]?.toLowerCase()||"general",De=tv(S),{error:lt}=await se.from("template_assets").upsert({user_id:j,name:me,path:U,type:we,summary:De,html:S,bucket:wf},{onConflict:"path"});if(lt)throw lt;Et(`Template added: ${me}`),await Hs()}catch(T){Et(T instanceof Error?T.message:"Failed to upload template.")}},[he,be,Hs,Fn]),Fe=x.useCallback(async f=>{if(f)try{const S=(await f.text()).trim();if(!S)throw new Error("Dropped HTML file is empty.");Kr(f,S);const T=Zy(f.name),C=T.includes("/")?T.split("/").slice(0,-1).join("/"):".",j=C==="."?"":C.split("/")[0],I=j?j.toLowerCase():"general",O={id:`dropped-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:ev(f.name||T),path:T,type:I,summary:tv(S),html:S,bucket:"dropped"};A(U=>{const X=(Array.isArray(U)?U:[]).filter(le=>le.path!==O.path);return[O,...X]}),B("dropped/template"),F(""),ke(O.id),de(oa()),E(Mn.TEMPLATE_PREVIEW)}catch(b){F(b instanceof Error?b.message:"Failed to load dropped HTML template.")}},[oa,Kr]);x.useEffect(()=>{const f=()=>{So.current=0,wr(!1),er("file")},b=j=>{Mf(j.dataTransfer)&&(So.current+=1,er(Xy(j.dataTransfer)),wr(!0))},S=j=>{Mf(j.dataTransfer)&&(j.preventDefault(),er(Xy(j.dataTransfer)),wr(!0),j.dataTransfer&&(j.dataTransfer.dropEffect="copy"))},T=j=>{Mf(j.dataTransfer)&&(So.current=Math.max(0,So.current-1),So.current===0&&wr(!1))},C=j=>{if(!Mf(j.dataTransfer))return;j.preventDefault();const I=Array.from(j.dataTransfer?.files||[]);if(!I.length){f();return}const O=I.find(Q=>Ky(Q));if(O){Fe(O),f();return}const U=I.find(Q=>Qy(Q));U&&ms(U),f()};return window.addEventListener("dragenter",b),window.addEventListener("dragover",S),window.addEventListener("dragleave",T),window.addEventListener("drop",C),()=>{window.removeEventListener("dragenter",b),window.removeEventListener("dragover",S),window.removeEventListener("dragleave",T),window.removeEventListener("drop",C),f()}},[ms,Fe]),x.useEffect(()=>{fe||Mt||(al(!1),wu(!1))},[fe,Mt]),x.useEffect(()=>()=>{lr.current&&(clearTimeout(lr.current),lr.current=null)},[]);const St=x.useCallback(f=>{const b=(f||"").trim();if(!b)return"";const S=b.replace(/[^a-zA-Z0-9._-]/g,"-");return S?S.toLowerCase().endsWith(".json")?S:`${S}.json`:""},[]),Cn=x.useCallback(f=>{const b=(f||"").trim();if(!b)return"";const S=b.replace(/[^a-zA-Z0-9._-]/g,"-");return S?S.toLowerCase().endsWith(".mp4")?S:`${S}.mp4`:""},[]),_l=x.useCallback(f=>{const b=(f||"").trim();if(!b)return"";const S=b.replace(/[^a-zA-Z0-9._-]/g,"-");return S?S.toLowerCase().endsWith(".gif")?S:`${S}.gif`:""},[]),$s=x.useCallback((f,b="png")=>{const S=(f||"").trim();if(!S)return"";const T=S.replace(/[^a-zA-Z0-9._-]/g,"-");if(!T)return"";const C=String(b||"png").replace(/[^a-zA-Z0-9]/g,"").toLowerCase()||"png";return new RegExp(`\\.${C}$`,"i").test(T)?T:`${T}.${C}`},[]),ps=x.useCallback(f=>{const b=(f||"").trim();if(!b)return"";const S=b.replace(/[^a-zA-Z0-9._-]/g,"-");return S?S.toLowerCase().endsWith(".svg")?S:`${S}.svg`:""},[]),ki=x.useCallback(f=>{let b=0,S=2;for(const T of f||[]){const j=(typeof T?.name=="string"?T.name:"").replace(/\.json$/i,""),I=/^save-(\d+)$/i.exec(j);if(!I)continue;const O=I[1],U=Number(O);Number.isFinite(U)&&(b=Math.max(b,U),S=Math.max(S,O.length))}return`save-${String(b+1).padStart(S,"0")}`},[]),Na=x.useCallback(f=>{if(!f||typeof f!="object"||Array.isArray(f))throw new Error("Preset must contain a JSON object.");const b={...dt,...f};b.style==="letters"&&(b.style="classic",b.charset=Nv[b.letterSet]||"letters-alphabet"),_y.includes(b.style)||(b.style=dt.style),Cy.includes(b.charset)||(b.charset=dt.charset),Ty.includes(b.brailleVariant)||(b.brailleVariant=dt.brailleVariant),My.includes(b.halftoneShape)||(b.halftoneShape=dt.halftoneShape),Ay.includes(b.terminalCharset)||(b.terminalCharset=dt.terminalCharset),Ry.includes(b.retroDuotone)||(b.retroDuotone=dt.retroDuotone),Ny.includes(b.ditherType)||(b.ditherType=dt.ditherType),Oy.includes(b.colorMode)||(b.colorMode=dt.colorMode),jy.includes(b.mouseInteractionMode)||(b.mouseInteractionMode=dt.mouseInteractionMode),Ly.includes(b.overlayPreset)||(b.overlayPreset=dt.overlayPreset),ky.includes(b.intervalDirection)||(b.intervalDirection=dt.intervalDirection),Iy.includes(b.beamDirection)||(b.beamDirection=dt.beamDirection),Cs.includes(b.noiseDirection)||(b.noiseDirection=dt.noiseDirection),Cs.includes(b.glitchDirection)||(b.glitchDirection=dt.glitchDirection),Cs.includes(b.crtDirection)||(b.crtDirection=dt.crtDirection),Cs.includes(b.matrixDirection)||(b.matrixDirection=dt.matrixDirection),np.includes(b.outputAspect)||(b.outputAspect=dt.outputAspect),Dy.includes(b.renderFont)||(b.renderFont=dt.renderFont),typeof b.backgroundColor!="string"&&(b.backgroundColor=dt.backgroundColor),b.customColor=br(b.customColor,dt.customColor),b.ditherWaveColor=br(b.ditherWaveColor,dt.ditherWaveColor),b.dither2WaveColor=br(b.dither2WaveColor,dt.dither2WaveColor),b.webglOverlayColor=br(b.webglOverlayColor,dt.webglOverlayColor),typeof b.ditherAnimationEnabled!="boolean"&&(b.ditherAnimationEnabled=dt.ditherAnimationEnabled),typeof b.ditherMouseInteractionEnabled!="boolean"&&(b.ditherMouseInteractionEnabled=dt.ditherMouseInteractionEnabled),typeof b.dither2AnimationEnabled!="boolean"&&(b.dither2AnimationEnabled=dt.dither2AnimationEnabled),typeof b.dither2MouseInteractionEnabled!="boolean"&&(b.dither2MouseInteractionEnabled=dt.dither2MouseInteractionEnabled),typeof b.webglLayerEnabled!="boolean"&&(b.webglLayerEnabled=dt.webglLayerEnabled),O2.includes(b.webglOverlayType)||(b.webglOverlayType=dt.webglOverlayType),j2.includes(b.webglOverlayPosition)||(b.webglOverlayPosition=dt.webglOverlayPosition),typeof b.webglOverlayAffectsAscii!="boolean"&&(b.webglOverlayAffectsAscii=dt.webglOverlayAffectsAscii),typeof b.customCharset!="string"&&(b.customCharset=dt.customCharset),b.customCharset=b.customCharset.slice(0,Wd),(typeof b.particleChar!="string"||!b.particleChar)&&(b.particleChar=dt.particleChar),typeof b.invert!="boolean"&&(b.invert=dt.invert);const S=["fontSize","hoverStrength","mouseAreaSize","mouseSpread","charSpacing","spacing","contrast","brightness","opacity","vignette","borderGlow","bgDither","inverseDither","ditherStrength","particleDensity","claudeDensity","halftoneSize","halftoneRotation","retroNoise","overlayStrength","noiseScale","noiseSpeed","intervalSpacing","intervalSpeed","intervalWidth","matrixScale","matrixSpeed","webglOverlayOpacity","webglOverlayIntensity","webglOverlayLineSpread","webglOverlayPulseSpeed","webglOverlayMouseInfluence","webglOverlayGrain","ditherMouseRadius","ditherColorNum","ditherWaveAmplitude","ditherWaveFrequency","ditherWaveSpeed","dither2MouseRadius","dither2ColorNum","dither2PixelSize","dither2WaveAmplitude","dither2WaveFrequency","dither2WaveSpeed","lineLength","lineWidth","lineThickness","lineRotation"];for(const T of S){const C=Number(b[T]);b[T]=Number.isFinite(C)?C:dt[T]}return b},[]),Ii=x.useCallback((f,b)=>{try{const S=Na(b),T=document.createElement("canvas");T.width=240,T.height=180;const C=T.getContext("2d");if(!C)return"";const j=mp(S),I=S.colorMode||"grayscale",O=String(S.style||"classic"),U=Ey[O]||O,Q=Iv(O)?x_(S):I==="color"?"#7dc3ff":I==="green"?"#7fff9f":I==="amber"?"#ffc86b":I==="custom"?br(S.customColor,"#fff27b"):"#f4f6ff",X=C.createLinearGradient(0,0,T.width,T.height);X.addColorStop(0,"#070b12"),X.addColorStop(1,j),C.fillStyle=X,C.fillRect(0,0,T.width,T.height),C.strokeStyle="rgba(255, 255, 255, 0.08)",C.lineWidth=1;for(let le=0;le<=T.height;le+=12)C.beginPath(),C.moveTo(0,le+.5),C.lineTo(T.width,le+.5),C.stroke();return C.fillStyle=Q,C.font='500 18px "Helvetica Neue", Helvetica, Arial, sans-serif',C.textBaseline="top",C.fillText((f||"Preset").replace(/\.json$/i,"").slice(0,16),14,14),C.fillStyle="rgba(255, 255, 255, 0.84)",C.font='600 44px "Helvetica Neue", Helvetica, Arial, sans-serif',C.fillText(U.toUpperCase().slice(0,8),14,62),C.fillStyle="rgba(255, 255, 255, 0.56)",C.font='500 12px "Helvetica Neue", Helvetica, Arial, sans-serif',C.fillText(`Charset ${String(S.charset||"standard").toUpperCase()}`,14,142),C.fillText(`Dither ${String(S.ditherType||"none").toUpperCase()}`,14,158),T.toDataURL("image/jpeg",.74)}catch{return""}},[Na]),Fs=x.useCallback(async()=>{if(!ka||!se){Wr([]),Ga(""),Nn(Pr);return}if(!he){Wr([]),Ga(""),Nn("Sign in to manage presets.");return}try{const{data:f,error:b}=await se.from("presets").select("name, updated_at, settings").eq("user_id",he.id).order("updated_at",{ascending:!1}).order("name",{ascending:!0});if(b)throw b;const S=Array.isArray(f)?f.filter(T=>typeof T?.name=="string"&&T.name.trim().length>0).map(T=>({name:T.name,size:0,updatedAt:T.updated_at||"",previewDataUrl:Ii(T.name,T.settings),style:typeof T?.settings?.style=="string"?T.settings.style:""})):[];Wr(S),Nn(""),ss(T=>{const C=(T||"").trim();return C&&!/^save-\d+$/i.test(C)?T:ki(S)})}catch(f){Nn(Sa(f,"Failed to list presets."))}},[he,Ii,ki]);x.useEffect(()=>{_e&&Fs()},[_e,Fs]);const bn=x.useCallback(async f=>{const b=St(f);if(!b){Nn("Choose a preset to open.");return}if(!Ke("Sign in to open saved presets.")){Nn(Qa);return}if(se)try{const{data:S,error:T}=await se.from("presets").select("name, settings").eq("user_id",he.id).eq("name",b).maybeSingle();if(T)throw T;if(!S)throw new Error(`Preset not found: ${b}`);const C=S.settings??null,j=Na(C);qr(j),os(JSON.stringify(j,null,2)),Ls(!1),Ga(b),ss(b.replace(/\.json$/i,"")),Nn(`Opened preset ${b}`)}catch(S){Nn(Sa(S,"Failed to open preset."))}},[he,Na,St,Ke]),Fu=x.useCallback(async()=>{const f=St(vc||wi);if(!f){Nn("Enter a preset name.");return}if(!Ke("Sign in to save presets.")){Nn(Qa);return}if(!se)return;let b;try{const S=sr.trim()?JSON.parse(sr):Pe;b=Na(S)}catch{Nn("JSON editor contains invalid JSON.");return}try{const S=new Date().toISOString(),{data:T,error:C}=await se.from("presets").upsert({user_id:he.id,name:f,settings:b,updated_at:S},{onConflict:"user_id,name"}).select("name, updated_at, user_id").single();if(C)throw C;const j={name:T?.name||f,size:JSON.stringify(b).length,updatedAt:T?.updated_at||S,previewDataUrl:Ii(f,b),style:b.style||""},I=[...za.filter(O=>O.name!==j.name),j].sort((O,U)=>{const Q=Date.parse(O.updatedAt||"")||0,X=Date.parse(U.updatedAt||"")||0;return Q!==X?X-Q:String(O.name||"").localeCompare(String(U.name||""))});Wr(I),Ga(f),ss(ki(I)),qr(b),os(JSON.stringify(b,null,2)),Ls(!1),Nn(`Saved preset ${f}`),await Fs()}catch(S){Nn(Sa(S,"Failed to save preset."))}},[he,Ii,ki,Na,St,Fs,sr,za,vc,wi,Pe,Ke]),Wu=x.useCallback(async f=>{const b=St(f||wi);if(!b){Nn("Choose a preset to delete.");return}if(!Ke("Sign in to delete presets.")){Nn(Qa);return}if(!(!se||!window.confirm(`Delete preset "${b}"?`)))try{const{error:T}=await se.from("presets").delete().eq("user_id",he.id).eq("name",b);if(T)throw T;const C=za.filter(j=>j.name!==b);Wr(C),Ga(j=>j===b?"":j),ss(ki(C)),Nn(`Deleted preset ${b}`),await Fs()}catch(T){Nn(Sa(T,"Failed to delete preset."))}},[he,ki,St,Fs,za,wi,Ke]),hh=x.useCallback(()=>{try{const f=JSON.parse(sr),b=Na(f);qr(b),os(JSON.stringify(b,null,2)),Ls(!1),Nn("Applied JSON to controls.")}catch(f){Nn(f instanceof Error?f.message:"Invalid JSON.")}},[Na,sr]);x.useEffect(()=>{if(Du)return;const f=JSON.stringify(Pe,null,2);os(b=>b===f?b:f)},[Du,Pe]),x.useEffect(()=>{np.includes(Pe.outputAspect)||qr(f=>({...f,outputAspect:"source"}))},[Pe.outputAspect]);const jo=x.useCallback(async f=>{const b=Qn,S=f&&typeof f=="object"?f:null,T=Pl(S);ot(S),ce(null);const C=(U,Q="image/png")=>U?U instanceof Blob?U:U instanceof ArrayBuffer?new Blob([U],{type:Q}):ArrayBuffer.isView(U)?new Blob([U],{type:Q}):null:null,j=(U,Q="image/png")=>{const X=C(U,Q);return X?(Oi(X),!0):!1};Ve(""),Ae(!0),E(b?Mn.TEMPLATE_PREVIEW:Mn.RENDER),p("upload"),ya(),s(null);const I=[];S?(typeof S.src=="string"&&S.src&&I.push(S.src),typeof S.originalSrc=="string"&&S.originalSrc&&I.push(S.originalSrc)):typeof f=="string"&&f&&I.push(f);const O=[...new Set(I.filter(Boolean))];for(const U of O)try{const Q=await fetch(U);if(!Q.ok)continue;const X=await Q.blob();if(j(X,Q.headers.get("content-type")||"image/png")){T&&!b&&ia("library",T);return}}catch{}Ve("Failed to load selected library asset."),Ae(!1)},[Oi,Qn,ia,ya]),Tc=x.useCallback(async f=>{try{const b=Qn;if(!navigator.mediaDevices?.getUserMedia)throw new Error("This browser does not support webcam access.");ya();const S={width:{ideal:mt,max:mt},height:{ideal:mt,max:mt},...f?{deviceId:{exact:f}}:{facingMode:"user"}},T=await navigator.mediaDevices.getUserMedia({video:S,audio:!1});Ve(""),E(b?Mn.TEMPLATE_PREVIEW:Mn.RENDER),Ae(!0),ls.current=null,n(null),s(null),p("camera"),d(T),b&&de({type:"camera"})}catch(b){p("upload"),Ve(b instanceof Error?b.message:"Unable to access webcam.")}},[Qn,mt,ya]),Mc=x.useCallback(()=>{if(ya(),p("upload"),Ae(!1),!r&&!i){if(Qn){de(Ko),E(Mn.TEMPLATE_PREVIEW);return}E(Mn.LIBRARY)}},[Qn,r,i,ya]),qu=x.useCallback(async f=>{if(p(f),Ve(""),f==="camera"){l||await Tc(g);return}l&&Mc()},[l,Tc,Mc,g]),Yu=x.useCallback(async f=>{v(f),m==="camera"&&l&&await Tc(f)},[m,l,Tc]),va=x.useCallback(()=>{ls.current=null,n(null),s(null),Ve(""),p("upload"),ya(),Ae(!1),Vr(0),et(!1),ce(null),E(Mn.LIBRARY),ia("library")},[ia,ya]),Tn=x.useCallback(()=>{et(!1),ce(null),E(Mn.TEMPLATE_LIBRARY),ia("template")},[ia]),Ac=x.useCallback(()=>{et(!1),ot(null),E(Mn.CREATIONS),ia("creation")},[ia]),El=x.useCallback(f=>{const b=f.target.files?.[0];b&&(ms(b),f.target.value="")},[ms]),Rc=x.useCallback(f=>{const b=f.target.files?.[0];b&&(Fe(b),f.target.value="")},[Fe]),Or=x.useMemo(()=>{const f=M[0]||null;return Oe&&M.find(b=>b.id===Oe)||f},[M,Oe]);x.useEffect(()=>{if(typeof window>"u")return;const f=new URL(window.location.href),b=f.pathname,S=`${f.origin}${b}`,T=new URL(a_,f.origin).toString(),C=Be=>{const $e=String(Be||"").trim();if(!$e)return T;try{return new URL($e,f.origin).toString()}catch{return T}},j=Be=>C(up[Be]),I=Be=>Array.isArray(Be)?Be.map($e=>ii($e,"")).filter(Boolean).join(", "):ii(Be,Wy),O=Be=>{const $e=ii(Be,cp);return $e===cp?$e:`${$e} · ${Ef}`},U=(Be,$e)=>{const ut=ii($e,"").toLowerCase();return!ut||!Array.isArray(Be)?null:Be.find(Un=>Pl(Un).toLowerCase()===ut)||null},Q=zd(window.location),X=hp(window.location);let le=cp,me=n_,we=Wy,De=j("home"),lt="index, follow",je="website";if(Q==="login")le="Login",me="Sign in to ГОШКРЯК to save presets, publish creations, and unlock export workflows.",we="asc11 login, ascii editor sign in",De=j("login"),lt="noindex, nofollow";else if(Q==="pricing")le="Pricing",me="Compare Free and Pro plans for ГОШКРЯК and unlock advanced ASCII export and publishing features.",we="asc11 pricing, ascii editor pro",De=j("pricing"),lt="noindex, nofollow";else if(Q==="terms")le="Terms of Service",me="Review ГОШКРЯК Terms of Service for account, publishing, and export usage.",we="asc11 terms, ascii editor terms, terms of service",De=j("terms");else if(Q==="privacy")le="Privacy Policy",me="Review ГОШКРЯК Privacy Policy for data handling, storage, and account security.",we="asc11 privacy, ascii editor privacy policy",De=j("privacy");else if(X?.kind==="library")if(X.match==="list")le="Library",me="Browse the ГОШКРЯК asset library of images and video sources for ASCII rendering.",we="asc11 library, ascii assets, image library",De=j("library");else{const Be=ii(X.value,"").toLowerCase(),$e=qe&&Pl(qe).toLowerCase()===Be?qe:null,ut=ii($e?.name,"Library Asset");le=ut,me=`${ut} in the ГОШКРЯК library. Use it as a source for ASCII rendering and exports.`,we=`${ut}, ASCII library asset, ГОШКРЯК`,De=C($e?.src||$e?.originalSrc||up.library),je="article"}else if(X?.kind==="template")if(X.match==="list")le="Templates",me="Explore ГОШКРЯК templates and preview ASCII overlays in responsive UI layouts.",we="asc11 templates, ascii templates, ui templates",De=j("templates");else{const Be=ii(X.value,"").toLowerCase(),$e=(Or&&Pl(Or).toLowerCase()===Be?Or:null)||U(M,Be),ut=ii($e?.name,"Template"),Un=ii($e?.summary,"");le=ut,me=Un||`${ut} template for ГОШКРЯК. Preview and customize ASCII rendering for this layout.`,we=`${ut}, ГОШКРЯК template, ASCII template`,De=j("templates"),je="article"}else if(X?.kind==="creation")if(X.match==="list")le="Creations",me="Discover published ГОШКРЯК creations and remix ASCII styles from shared compositions.",we="asc11 creations, ascii art creations, shared ascii",De=j("creations");else{const Be=ii(X.value,"").toLowerCase(),$e=(P&&Pl(P).toLowerCase()===Be?P:null)||U(Z,Be),ut=ii($e?.name,"Creation"),Un=ii($e?.description,""),la=I($e?.keywords),kr=$e?.preview_url||($e?.source&&typeof $e.source=="object"?$e.source.url:"");le=ut,me=Un||`${ut} on ГОШКРЯК. Explore and remix this ASCII creation.`,we=la||`${ut}, ГОШКРЯК creation, ASCII art`,De=C(kr||up.creations),je="article"}const Lt=O(le);document.title=Lt,f_(S),Ja({name:"description",content:me}),Ja({name:"keywords",content:we}),Ja({name:"robots",content:lt}),Ja({property:"og:site_name",content:Ef}),Ja({property:"og:type",content:je}),Ja({property:"og:title",content:Lt}),Ja({property:"og:description",content:me}),Ja({property:"og:url",content:S}),Ja({property:"og:image",content:De}),Ja({property:"og:image:alt",content:`${le} on ${Ef}`}),Ja({name:"twitter:card",content:"summary_large_image"}),Ja({name:"twitter:title",content:Lt}),Ja({name:"twitter:description",content:me}),Ja({name:"twitter:image",content:De}),Ja({name:"twitter:image:alt",content:`${le} on ${Ef}`})},[P,qe,xi,Z,Or,M]);const jr=x.useCallback(f=>{const b=f&&typeof f=="object"?f:M.find(C=>C.id===f)||M[0]||null,S=typeof b?.id=="string"&&b.id?b.id:M[0]?.id||"";ke(S),ce(null),de(oa()),E(Mn.TEMPLATE_PREVIEW);const T=Pl(b);T&&ia("template",T)},[oa,ia,M]),ko=x.useCallback(async f=>{if(!f||typeof f!="object")return;ce(f);const b=Pl(f);b&&ia("creation",b);const S=f.settings&&typeof f.settings=="object"?f.settings:{},T=Na(S);qr(T),os(JSON.stringify(T,null,2)),Ls(!1);const C=f.source&&typeof f.source=="object"?f.source:{},j=typeof C.type=="string"?C.type:f.source_type||"procedural",I=typeof C.url=="string"?C.url:"",O=typeof f.preview_url=="string"?f.preview_url:"",U=I||O;if(j==="video"&&I)try{const Q=await fetch(I);if(!Q.ok)throw new Error("Failed to load creation video source.");const X=await Q.blob();Oi(new Blob([X],{type:X.type||"video/mp4"})),Et(`Loaded creation: ${f.name||"Untitled Creation"}`);return}catch(Q){Et(Sa(Q,"Failed to load creation video."))}if(U){await jo({src:U,originalSrc:U});return}n(null),s(null),ya(),p("upload"),E(Mn.RENDER),Et(`Loaded styles for ${f.name||"Untitled Creation"}. Add a source image or video.`)},[Oi,jo,Na,ia,ya]),Xu=x.useCallback(async f=>{if(!f||typeof f!="object")return;if(!Ke("Sign in to delete templates."))throw new Error(Qa);if(!se)throw new Error(Pr);const b=typeof f.ownerId=="string"?f.ownerId:"";if(!he?.id||b!==he.id)throw new Error("You can only delete your own templates.");const S=String(f.id||"").trim();if(!S)throw new Error("Invalid template id.");const T=String(f.path||"").trim(),C=String(f.bucket||wf).trim()||wf,{error:j}=await se.from("template_assets").delete().eq("id",S).eq("user_id",he.id);if(j)throw j;T&&!T.startsWith("data:")&&await se.storage.from(C).remove([T]).catch(()=>{});let I="";A(O=>{const U=O.filter(Q=>Q.id!==S);return I=U[0]?.id||"",U}),ke(O=>O===S?I:O),Et(`Template deleted: ${f.name||"Untitled Template"}`)},[he,Ke,se]),Ku=x.useCallback(async f=>{if(!f||typeof f!="object")return;if(!Ke("Sign in to delete creations."))throw new Error(Qa);if(!se)throw new Error(Pr);const b=typeof f.ownerId=="string"?f.ownerId:"";if(!!!(he?.id&&(Rt||b===he.id)))throw new Error("You can only delete your own creations unless you are an admin.");const T=String(f.id||"").trim();if(!T)throw new Error("Invalid creation id.");let C=se.from("creations").delete().eq("id",T);Rt||(C=C.eq("user_id",he.id));const{error:j}=await C;if(j)throw j;const I=String(f.script_path||"").trim();I&&await se.storage.from(ip).remove([I]).catch(()=>{});const O=new Set,U=nv(f.preview_url,Ll);U&&O.add(U);const Q=f?.source&&typeof f.source=="object"?f.source.url:"",X=nv(Q,Ll);X&&O.add(X),O.size>0&&await se.storage.from(Ll).remove(Array.from(O)).catch(()=>{}),W(le=>le.filter(me=>me.id!==T)),ce(le=>le?.id===T?null:le),Et(`Creation deleted: ${f.name||"Untitled Creation"}`)},[he,Rt,Ke,se]),fh=x.useCallback(async f=>{if(!f||typeof f!="object")return;if(!Ke("Sign in to feature creations."))throw new Error(Qa);if(!Rt)throw new Error("Only admins can feature creations.");if(!se)throw new Error(Pr);const b=String(f.id||"").trim();if(!b)throw new Error("Invalid creation id.");const S=!f.featured,{error:T}=await se.from("creations").update({featured:S}).eq("id",b);if(T)throw T;W(C=>oe===Es.FEATURED&&!S?C.filter(j=>j.id!==b):C.map(j=>j.id===b?{...j,featured:S}:j)),ce(C=>C?.id===b?{...C,featured:S}:C),Tt(S?"Creation featured.":"Creation unfeatured.")},[oe,Rt,Ke,Tt,se]),mh=x.useCallback(()=>{const f=I=>I[Math.floor(Math.random()*I.length)],b=(I,O)=>Math.floor(Math.random()*(O-I+1))+I,S=(I,O,U=.1)=>{const Q=Math.round((O-I)/U);return Number((I+Math.floor(Math.random()*(Q+1))*U).toFixed(1))};Fa.current+=1;const T=Fa.current%5===0,C=f(_y),j=C==="claude"?"amber":C==="terminal"?"green":C==="retro"?"color":C==="halftone"||C==="dither"||C==="dither2"||C==="dotcross"||C==="line"?"grayscale":f(Oy);qr(I=>({...I,charset:f(Cy.filter(O=>O!=="custom")),brailleVariant:f(Ty),fontSize:b(8,16),hoverStrength:b(12,44),mouseInteractionMode:f(jy),mouseAreaSize:b(120,320),mouseSpread:S(.6,1.8,.05),charSpacing:S(.85,1.35,.05),spacing:C==="halftone"||C==="dither"||C==="dither2"?S(1,2.2,.05):1,renderFont:f(Dy),contrast:S(.7,2.2),brightness:b(-25,25),bgDither:S(0,.85,.05),inverseDither:T?S(.1,.9,.05):0,invert:Math.random()>.65,halftoneShape:f(My),halftoneSize:S(.6,1.8,.05),halftoneRotation:b(-180,180),ditherType:f(Ny),ditherStrength:S(.2,1.8),style:C,colorMode:j,terminalCharset:f(Ay),retroDuotone:f(Ry),retroNoise:S(0,1,.05),backgroundColor:C==="dither2"?tp:f(A2),customColor:f(R2),particleDensity:S(.2,1),particleChar:f(v2),claudeDensity:S(.4,1),overlayPreset:f(Ly),overlayStrength:S(.15,.9),noiseScale:b(8,64),noiseSpeed:S(.2,2.6),noiseDirection:f(Cs),intervalSpacing:b(6,24),intervalSpeed:S(.2,2.4),intervalWidth:b(1,5),intervalDirection:f(ky),beamDirection:f(Iy),glitchDirection:f(Cs),crtDirection:f(Cs),matrixDirection:f(Cs),matrixScale:b(8,42),matrixSpeed:S(.25,2.8),webglLayerEnabled:I.webglLayerEnabled,webglOverlayType:I.webglOverlayType,webglOverlayOpacity:I.webglOverlayOpacity,webglOverlayIntensity:S(.15,.85,.05),webglOverlayLineSpread:S(.12,.42,.01),webglOverlayPulseSpeed:S(.4,2.8,.05),webglOverlayMouseInfluence:S(.2,1.5,.05),webglOverlayGrain:S(0,.08,.01),webglOverlayColor:f(["#7ba3ff","#99bbff","#70e1ff","#d0d9ff","#98ffe3"]),lineLength:S(.4,2.2,.05),lineWidth:S(.35,2.1,.05),lineThickness:S(.4,4.8,.1),lineRotation:b(-180,180),ditherWaveColor:f(["#808080","#a3a3a3","#9ca3af","#c4c4c4","#7f8ea3"]),ditherAnimationEnabled:Math.random()>.2,ditherMouseInteractionEnabled:Math.random()>.15,ditherMouseRadius:S(.12,.5,.01),ditherColorNum:b(2,6),ditherWaveAmplitude:S(.1,.65,.05),ditherWaveFrequency:S(1.5,5.5,.1),ditherWaveSpeed:S(.01,.12,.005),dither2WaveColor:f(["#666666","#737373","#808080","#6b7280","#7c7c7c"]),dither2AnimationEnabled:Math.random()>.15,dither2MouseInteractionEnabled:Math.random()>.1,dither2MouseRadius:S(.45,1.2,.05),dither2ColorNum:b(2,6),dither2PixelSize:b(1,4),dither2WaveAmplitude:S(.1,.55,.05),dither2WaveFrequency:S(2,4.5,.1),dither2WaveSpeed:S(.01,.1,.005)}))},[]),Cl=x.useMemo(()=>{const f=br(Pe.backgroundColor,"#000000");return{dark:f,light:kp(f,"#ffffff")}},[Pe.backgroundColor]),Li=ve==="light"?Cl.light:Cl.dark,Dn=x.useMemo(()=>E_(Pe,ve,Cl),[Pe,ve,Cl]),Qu=x.useMemo(()=>qd(Dn,{enableInteractionEffects:tn,transparentBackground:Gt,enableAlphaMask:xn,enableFadeIn:nn,pauseWhenOffscreen:an,adaptivePerformance:st,targetFps:Yt,enableWatermark:!be,watermarkText:oo,source:ts}),[st,Dn,xn,nn,tn,an,Yt,Gt,ts,be]),Nc=x.useMemo(()=>sv(Dn,{enableInteractionEffects:tn,transparentBackground:Gt,enableAlphaMask:xn,enableFadeIn:nn,pauseWhenOffscreen:an,adaptivePerformance:st,targetFps:Yt,enableWatermark:!be,watermarkText:oo,source:ts}),[st,Dn,xn,nn,tn,an,Yt,Gt,ts,be]),Ws=x.useCallback((f,b=_n)=>{const S={enableInteractionEffects:tn,transparentBackground:Gt,enableAlphaMask:xn,enableFadeIn:nn,pauseWhenOffscreen:an,adaptivePerformance:st,targetFps:Yt,enableWatermark:!be,watermarkText:oo,source:f,externalScriptSrc:b};return ge==="react"?B_(Dn,S):Pv(Dn,S)},[st,xn,nn,_n,tn,an,ge,Yt,Gt,be,Dn]),gs=x.useMemo(()=>!ln||ge!=="script"&&ge!=="react"?null:Ws(ts,_n),[Ws,_n,ts,ln,ge]),Oc=x.useMemo(()=>ge==="react"?Nc:Qu,[Qu,ge,Nc]),ph=x.useMemo(()=>String(Oc||"").replace(/\r/g,"").split(`
`).length,[Oc]),gh=x.useMemo(()=>String(gs?.primaryCode||"").replace(/\r/g,"").split(`
`).length,[gs]),Ju=x.useMemo(()=>String(gs?.jsCode||"").replace(/\r/g,"").split(`
`).length,[gs]),Zu=x.useMemo(()=>{const f=Tf(vo);return Ld.find(b=>b.value===f)||Ld[0]},[vo]),Tl=ge==="script"||ge==="react",qs=Tl&&!be,yh=ge==="video"||ge==="gif",vh=ge==="image",Ff=ge==="svg",bh=ge==="react"?gn==="COMPONENT COPIED"?"COPIED":"COPY COMPONENT":gn==="HTML COPIED"?"COPIED":"COPY HTML",Io=gn==="JS COPIED"?"COPIED":"COPY JS",ed="HOST ON ГОШКРЯК uploads and hosts only the JavaScript file. It does not publish to Creations. Pro only.",jc=x.useMemo(()=>Qo(il,Ts),[il]),kc=x.useMemo(()=>Qo(yo,Ts),[yo]),wh=!!rl,td=ac.trim().length>0&&rc.trim().length>0&&jc.length>0,Wf=!!(Ma&&typeof Ma=="object"),Sh=!!ic,xh=sc.trim().length>0&&lc.trim().length>0&&kc.length>0,Ic=wh&&td&&!Zl&&!Su&&!pi,_h=Wf&&Sh&&xh&&!go&&!gi,ys=x.useMemo(()=>Math.max(1,Math.ceil(za.length/xf)),[za.length]),nd=x.useMemo(()=>{const b=(Ie(Number(gl)||1,1,ys)-1)*xf;return za.slice(b,b+xf)},[za,gl,ys]),Eh=Ca==="html"?"Drop to use this HTML template":Ca==="media"?"Drop to use this image or video source":"Drop file to import";x.useEffect(()=>{ra(f=>Ie(Number(f)||1,1,ys))},[ys]);const Qr=x.useMemo(()=>ou.find(f=>f.id===tt)||ou.find(f=>f.id==="desktop")||ou[0],[tt]),ad=x.useMemo(()=>ou.find(f=>f.id==="desktop")||ou[0],[]),Ch=x.useMemo(()=>Qr.id==="desktop"?"100%":`min(100%, ${Qr.width}px)`,[Qr.id,Qr.width]),rd=x.useMemo(()=>qd(Dn,{enableInteractionEffects:tn,transparentBackground:!1,enableAlphaMask:xn,enableFadeIn:nn,pauseWhenOffscreen:an,adaptivePerformance:st,targetFps:Yt,reportFps:!0,source:te}),[st,xn,nn,tn,an,Yt,te,Dn]),id=x.useMemo(()=>Or?.html?z_(Or.html,rd,{theme:ve,backgroundColor:Li,viewportWidth:Qr.width,viewportHeight:Qr.height,contentScale:1}):"",[Or,Qr.height,Qr.width,rd,ve,Li]);x.useEffect(()=>{if(!Qn)return;Vr(0),co({chars:0,frameMs:0,instanceId:""});const f=b=>{const S=Va.current?.contentWindow;if(!S||b.source!==S)return;const T=b.data;if(!T||typeof T!="object"||T.type!==jv)return;const C=Math.max(0,Math.round(Number(T.fps)||0));Vr(Number.isFinite(C)?C:0);const j=Math.max(0,Math.round(Number(T.chars)||0)),I=Math.max(0,Number(T.frameMs)||0),O=typeof T.instanceId=="string"?T.instanceId:"";co({chars:Number.isFinite(j)?j:0,frameMs:Number.isFinite(I)?I:0,instanceId:O}),typeof window<"u"&&(window.__ASCII_TEMPLATE_PREVIEW_PERF__={fps:Number.isFinite(C)?C:0,chars:Number.isFinite(j)?j:0,frameMs:Number.isFinite(I)?I:0,instanceId:O,receivedAt:Date.now()})};return window.addEventListener("message",f),()=>{window.removeEventListener("message",f),Vr(0),co({chars:0,frameMs:0,instanceId:""})}},[Qn,id]);const vs=x.useCallback(async()=>{tl(!0),i&&Ki("Encoding source video for code export...");try{const f=await Wn();if(dc(f),f?.type==="video"&&Number.isFinite(f.sizeBytes)&&Number.isFinite(f.targetBytes)){const S=Math.max(1,Math.round(f.sizeBytes/1024)),T=Math.max(1,Math.round(f.targetBytes/1024));Ki(f.sizeBytes>f.targetBytes?`Embedded full video: ${S}KB (target ${T}KB).`:`Embedded full video: ${S}KB.`)}else Ki(i?"Video embedding unavailable. Falling back to image snapshot.":"");if(ln&&(ge==="script"||ge==="react")){const S=Ws(f,_n);return{mode:"split",primaryCode:S.primaryCode,primaryLabel:S.primaryLabel,jsCode:S.jsCode,primaryFileName:S.primaryFileName,primaryMimeType:S.primaryMimeType,jsFileName:S.jsFileName}}return{mode:"single",code:ge==="react"?sv(Dn,{enableInteractionEffects:tn,transparentBackground:Gt,enableAlphaMask:xn,enableFadeIn:nn,pauseWhenOffscreen:an,adaptivePerformance:st,targetFps:Yt,enableWatermark:!be,watermarkText:oo,source:f}):qd(Dn,{enableInteractionEffects:tn,transparentBackground:Gt,enableAlphaMask:xn,enableFadeIn:nn,pauseWhenOffscreen:an,adaptivePerformance:st,targetFps:Yt,enableWatermark:!be,watermarkText:oo,source:f}),fileName:ge==="react"?"AsciiDitherBackground.jsx":"ascii-dither-background.html",mimeType:ge==="react"?"text/jsx;charset=utf-8":"text/html;charset=utf-8"}}finally{tl(!1)}},[Ws,Wn,_n,ln,ge,Dn,st,xn,nn,tn,an,Yt,Gt,be,i]),Lc=x.useCallback((f,b="COPY")=>{It(f),Ar.current&&clearTimeout(Ar.current),Ar.current=setTimeout(()=>{It(b),Ar.current=null},1400)},[]),bs=x.useCallback(async(f,b)=>{try{await navigator.clipboard.writeText(f),Lc(b)}catch{Lc("FAILED")}},[Lc]);x.useEffect(()=>{if(typeof window>"u")return;const f=hp(window.location);if(!(!f||f.match!=="list")){if(f.kind==="library"){E(Mn.LIBRARY);return}if(f.kind==="template"){E(Mn.TEMPLATE_LIBRARY);return}f.kind==="creation"&&E(Mn.CREATIONS)}},[xi]),x.useEffect(()=>{if(!se||typeof window>"u")return;const f=hp(window.location);if(!f||f.match==="list")return;const b=String(f?.rawValue||"").trim(),S=String(f?.value||"").trim(),T=`${xi}:${f.kind}:${f.match}:${b||S}:${he?.id||"anon"}:${$i?.expires_at||0}`;if($n.current===T)return;$n.current=T;let C=!1;return(async()=>{try{const j=async()=>{if(!he?.id||!ka||!Xl||!As)return se;try{const O=await Xa();return O?_v(Xl,As,{auth:{persistSession:!1,autoRefreshToken:!1,detectSessionInUrl:!1},global:{headers:{Authorization:`Bearer ${O}`}}}):se}catch{return se}},I=async(O,U={})=>{const Q=U?.retryOnEmpty===!0;let X=await j(),le=await O(X);if(!he?.id)return le;const me=!!(le?.error&&qy(le.error)),we=!!(Q&&!le?.error&&!le?.data);if(me||we){try{await se.auth.refreshSession()}catch{}X=await j(),le=await O(X)}if(X!==se&&(!le?.error&&!le?.data||qy(le?.error))){const lt=await O(se);if(lt?.data||!lt?.error)return lt}return le};if(f.kind==="creation"){let O=null,U=null;if(f.match==="id"?{data:O,error:U}=await I(Q=>Q.from("creations").select("id, name, description, keywords, preview_url, source, source_type, settings, script_url, slug, created_at").eq("id",f.value).maybeSingle(),{retryOnEmpty:!0}):({data:O,error:U}=await I(Q=>Q.from("creations").select("id, name, description, keywords, preview_url, source, source_type, settings, script_url, slug, created_at").eq("slug",b||S).order("created_at",{ascending:!1}).limit(1).maybeSingle(),{retryOnEmpty:!0}),!U&&!O&&b&&S&&b!==S&&({data:O,error:U}=await I(Q=>Q.from("creations").select("id, name, description, keywords, preview_url, source, source_type, settings, script_url, slug, created_at").eq("slug",S).order("created_at",{ascending:!1}).limit(1).maybeSingle(),{retryOnEmpty:!0})),U&&Br(U,"slug")?lu(b||S)?{data:O,error:U}=await I(Q=>Q.from("creations").select("id, name, description, keywords, preview_url, source, source_type, settings, script_url, created_at").eq("id",b||S).maybeSingle(),{retryOnEmpty:!0}):(O=null,U=null):!U&&!O&&lu(b||S)&&({data:O,error:U}=await I(Q=>Q.from("creations").select("id, name, description, keywords, preview_url, source, source_type, settings, script_url, slug, created_at").eq("id",b||S).maybeSingle(),{retryOnEmpty:!0}))),U)throw U;if(!O)throw new Error("Shared creation not found or is private.");if(C)return;await ko(O),Et(`Loaded shared creation: ${O.name||f.value}`);return}if(f.kind==="template"){let O=null,U=null;if(f.match==="id"?{data:O,error:U}=await I(X=>X.from("template_assets").select("id, user_id, name, path, type, summary, html, bucket, slug, created_at").eq("id",f.value).maybeSingle(),{retryOnEmpty:!0}):({data:O,error:U}=await I(X=>X.from("template_assets").select("id, user_id, name, path, type, summary, html, bucket, slug, created_at").eq("slug",b||S).order("created_at",{ascending:!1}).limit(1).maybeSingle(),{retryOnEmpty:!0}),!U&&!O&&b&&S&&b!==S&&({data:O,error:U}=await I(X=>X.from("template_assets").select("id, user_id, name, path, type, summary, html, bucket, slug, created_at").eq("slug",S).order("created_at",{ascending:!1}).limit(1).maybeSingle(),{retryOnEmpty:!0})),U&&Br(U,"slug")?lu(b||S)?{data:O,error:U}=await I(X=>X.from("template_assets").select("id, user_id, name, path, type, summary, html, bucket, created_at").eq("id",b||S).maybeSingle(),{retryOnEmpty:!0}):(O=null,U=null):!U&&!O&&lu(b||S)&&({data:O,error:U}=await I(X=>X.from("template_assets").select("id, user_id, name, path, type, summary, html, bucket, slug, created_at").eq("id",b||S).maybeSingle(),{retryOnEmpty:!0}))),U)throw U;if(!O)throw new Error("Template not found or is private.");if(C)return;const Q={id:O.id||O.path||`template-${Date.now()}`,name:O.name||"Untitled Template",path:O.path||"",type:O.type||"general",summary:O.summary||"",html:typeof O.html=="string"?O.html:"",bucket:O.bucket||"templates-html",slug:typeof O.slug=="string"?O.slug:"",ownerId:typeof O.user_id=="string"?O.user_id:""};A(X=>X.some(le=>le.id===Q.id)?X:[Q,...X]),jr(Q),Et(`Loaded template: ${Q.name}`);return}if(f.kind==="library"){let O=null,U=null;if(f.match==="id"?{data:O,error:U}=await I(je=>je.from("gallery_assets").select("id, user_id, name, path, folder, bucket, mime_type, slug, created_at").eq("id",f.value).maybeSingle(),{retryOnEmpty:!0}):({data:O,error:U}=await I(je=>je.from("gallery_assets").select("id, user_id, name, path, folder, bucket, mime_type, slug, created_at").eq("slug",b||S).order("created_at",{ascending:!1}).limit(1).maybeSingle(),{retryOnEmpty:!0}),!U&&!O&&b&&S&&b!==S&&({data:O,error:U}=await I(je=>je.from("gallery_assets").select("id, user_id, name, path, folder, bucket, mime_type, slug, created_at").eq("slug",S).order("created_at",{ascending:!1}).limit(1).maybeSingle(),{retryOnEmpty:!0})),U&&Br(U,"slug")?lu(b||S)?{data:O,error:U}=await I(je=>je.from("gallery_assets").select("id, user_id, name, path, folder, bucket, mime_type, created_at").eq("id",b||S).maybeSingle(),{retryOnEmpty:!0}):(O=null,U=null):!U&&!O&&lu(b||S)&&({data:O,error:U}=await I(je=>je.from("gallery_assets").select("id, user_id, name, path, folder, bucket, mime_type, slug, created_at").eq("id",b||S).maybeSingle(),{retryOnEmpty:!0}))),U)throw U;if(!O)throw new Error("Library asset not found or is private.");if(C)return;const Q=String(O.path||"").trim();if(!Q)throw new Error("Library asset path is missing.");const X=String(O.bucket||"library-images").trim()||"library-images",le=String(O.mime_type||"").toLowerCase(),me=vu(Q),we=le.startsWith("video/")||Hp.has(me);let De="",lt="";if(Q.startsWith("data:"))De=Q,lt=Q;else{const je=se.storage.from(X),{data:Lt}=je.getPublicUrl(Q),Be=String(Lt?.publicUrl||"").trim();if(lt=Be,we)De=Be;else{const $e=Math.max(160,Math.min(640,Number(mt)||320)),{data:ut}=je.getPublicUrl(Q,{transform:{width:$e,height:$e,resize:"contain"}});De=String(ut?.publicUrl||"").trim()||Be,lt=De}}if(!De)throw new Error("Unable to resolve library asset URL.");await jo({id:O.id||Q,name:O.name||Q.split("/").at(-1)||"Asset",slug:typeof O.slug=="string"?O.slug:"",src:De,originalSrc:lt||De}),Et(`Loaded library asset: ${O.name||f.value}`)}}catch(j){if(C)return;Tt(Sa(j,"Unable to open shared link."),"error")}})(),()=>{C=!0}},[$i?.expires_at,he?.id,Xa,xi,ko,jo,jr,Tt,se]);const Dc=x.useCallback(async()=>{if(!be&&(ge==="script"||ge==="react")){fr("Upgrade to Pro to copy HTML/JS/React export code.");return}const f=await vs();if(f.mode==="split"){await bs(f.primaryCode,f.primaryLabel==="React Component File"?"COMPONENT COPIED":"HTML COPIED");return}await bs(f.code,"COPIED")},[bs,ge,vs,be,fr]),Th=x.useCallback(async()=>{if(!be&&(ge==="script"||ge==="react")){fr("Upgrade to Pro to copy HTML/JS/React export code.");return}const f=await vs();f.mode==="split"&&await bs(f.jsCode,"JS COPIED")},[bs,ge,vs,be,fr]),sd=x.useCallback(async()=>{if(!se)throw new Error(Pr);const f=he?.id;if(!f)throw new Error("Session expired. Sign in again to publish.");const b=await Wn();dc(b);const S=Ws(b,"./ascii-dither-background.js"),T=k_(Uv(_n),S.jsFileName||"ascii-dither-background.js"),C=new Date().toISOString().replace(/[-:.TZ]/g,""),j=typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10),I=`exports/${C}-${j}-${T}`,{error:O}=await se.storage.from(ip).upload(I,new Blob([S.jsCode],{type:"text/javascript;charset=utf-8"}),{cacheControl:"31536000",contentType:"text/javascript; charset=utf-8",upsert:!1});if(O)throw O;const{data:U}=se.storage.from(ip).getPublicUrl(I),Q=U?.publicUrl||"";if(!Q)throw new Error("Published file uploaded, but public URL could not be resolved.");return{ownerId:f,refreshedSource:b,objectPath:I,publishedUrl:Q}},[he,Ws,Wn,_n,se]),qf=x.useCallback(async()=>{if(!(ge!=="script"&&ge!=="react")){if(!fr("Upgrade to Pro to host JavaScript files on ГОШКРЯК.")){Tt(he?"Pro is required to host JavaScript exports.":Qa,"error");return}al(!0);try{const{publishedUrl:f}=await sd();aa(!0),Cr(f),Tt("Hosted on ГОШКРЯК.")}catch(f){Tt(f instanceof Error?f.message:"Failed to host JavaScript file.","error")}finally{al(!1)}}},[he,ge,fr,Tt,sd]),Uc=x.useCallback(async(f,b={})=>{if(!se)throw new Error(Pr);const S=b?.settings&&typeof b.settings=="object"?b.settings:null,C=(typeof b?.sourceType=="string"?b.sourceType:"")||(i?"video":r?"image":"procedural"),j={style:S?.style??Pe.style,colorMode:S?.colorMode??Pe.colorMode,outputAspect:S?.outputAspect??Pe.outputAspect,ditherType:S?.ditherType??Pe.ditherType,charset:S?.charset??Pe.charset},I=()=>u_({sourceType:C,settings:j});if(ur.current)return I();let O=String($i?.access_token||"").trim();if(!O){const{data:{session:we}}=await se.auth.getSession();O=String(we?.access_token||"").trim()}if(!O){const{data:we}=await se.auth.refreshSession();O=String(we?.session?.access_token||"").trim()}if(!O)return ur.current=!0,I();const U={imageDataUrl:f,sourceType:C,settings:j};let Q=null;try{Q=await o_(O,U)}catch(we){const De=Sa(we,"Failed to generate metadata.");if((Number(we?.status??we?.response?.status??we?.context?.status??0)||0)===401||/401|unauthorized|jwt|auth|session expired|missing authorization|failed to fetch|networkerror/i.test(De))return ur.current=!0,I();throw we}const X=String(Q?.title||"").trim().slice(0,Vl),le=String(Q?.description||"").trim().slice(0,Hl),me=Qo(Q?.keywords,Ts);return!X||!le||!me.length?(ur.current=!0,I()):{title:X,description:le,keywords:me,source:"remote"}},[$i?.access_token,Pe.charset,Pe.colorMode,Pe.ditherType,Pe.outputAspect,Pe.style,r,i,se]),Pc=x.useCallback(async()=>{if(!cr.current){cr.current=!0,ec(!0),xu(!1),ol("Preparing preview image..."),ah(""),_u(""),Eu(""),sl(""),$a.current=null;try{const f=cn(),b=await fs(f,"image/jpeg",Il);if(!(b instanceof Blob))throw new Error("Unable to capture publish preview from the canvas.");$a.current=b;const S=await io(b);ah(S),ol("Generating title, description, and keywords..."),xu(!0);const T=await Uc(S);_u(T.title),Eu(T.description),sl(T.keywords.join(", ")),ol(T?.source==="local"?"Metadata ready (local fallback). Review and publish.":"Metadata ready. Review and publish.")}catch(f){ol(Sa(f,"Failed to prepare publish metadata."))}finally{cr.current=!1,ec(!1),xu(!1)}}},[io,fs,Uc,cn]),Lo=x.useCallback(async f=>{const b=String(f?.preview_url||"").trim(),S=f?.source&&typeof f.source=="object"?f.source:null,C=(typeof S?.type=="string"?S.type.toLowerCase():"")==="video"?"":String(S?.url||"").trim(),j=[b,C].filter(Boolean);for(const O of j){if(O.startsWith("data:"))return O;try{const U=await fetch(O,{cache:"no-store"});if(!U.ok)continue;const Q=await U.blob();if(!(Q instanceof Blob)||Q.size<=0)continue;return await io(Q)}catch{}}const I=await fs(cn(),"image/jpeg",Il);return I instanceof Blob?io(I):""},[io,fs,cn]),Ys=x.useCallback(()=>{gi||($t(!1),Mu(null),Ji(""),oc(""),ll(""),Zi(""),Au(!1),yi(""),nc(!1))},[gi]),Bc=x.useCallback(f=>{if(!f||typeof f!="object")return;if(!Ke("Sign in to edit creations.")){Tt(Qa,"error");return}if(!!!(he?.id&&(Rt||f.ownerId===he.id))){Tt("You can only edit your own creations unless you are an admin.","error");return}const T=typeof f.is_public=="boolean"?!f.is_public:!1,C=f?.source&&typeof f.source=="object"?f.source:null,I=(typeof C?.type=="string"?C.type.toLowerCase():"")==="video"?"":String(C?.url||"").trim(),O=String(f.preview_url||"").trim()||I;ue(!1),Qe(!1),Pn(!1),xt(!1),et(!1),Ln(),Mu(f),Ji(O),oc(String(f.name||"").slice(0,Vl)),ll(String(f.description||"").slice(0,Hl)),Zi(Qo(f.keywords,Ts).join(", ")),Au(be?T:!1),yi(""),tc(!1),nc(!1),$t(!0)},[he?.id,Ln,Rt,be,Ke,Tt]),Mh=x.useCallback(async()=>{if(!(!Ma||typeof Ma!="object")&&!(go||gi)){nc(!0),yi("Generating title, description, and keywords...");try{const f=await Lo(Ma);if(!f)throw new Error("Unable to prepare a preview image for metadata generation.");Ji(f);const b=await Uc(f,{sourceType:Ma.source_type,settings:Ma.settings});oc(b.title),ll(b.description),Zi(b.keywords.join(", ")),yi(b?.source==="local"?"Metadata ready (local fallback). Review and save.":"Metadata ready. Review and save.")}catch(f){yi(Sa(f,"Failed to regenerate metadata."))}finally{nc(!1)}}},[Ma,Uc,go,gi,Lo]),Ah=x.useCallback(async()=>{if(!Ma||typeof Ma!="object")return;if(!Ke("Sign in to edit creations.")){Tt(Qa,"error");return}if(!se)return;const f=String(he?.id||"").trim(),b=String(Ma.ownerId||"").trim();if(!!!(f&&(Rt||b===f))){Tt("You can only edit your own creations unless you are an admin.","error");return}const T=String(Ma.id||"").trim();if(!T){Tt("Invalid creation id.","error");return}const C=sc.trim().slice(0,Vl),j=lc.trim().slice(0,Hl),I=Qo(yo,Ts);if(!C||!j||I.length===0){yi("Title, description, and keywords are required.");return}tc(!0),yi("Saving creation updates...");try{const O=be?!!es:!1,U={name:C,description:j,keywords:I};let Q=null,X=se.from("creations").update({...U,is_public:!O}).eq("id",T);if(Rt||(X=X.eq("user_id",f)),{error:Q}=await X,Q&&Br(Q,"is_public")){let le=se.from("creations").update(U).eq("id",T);Rt||(le=le.eq("user_id",f)),{error:Q}=await le}if(Q)throw Q;W(le=>le.map(me=>me.id===T?{...me,name:C,description:j,keywords:I,is_public:!O}:me)),ce(le=>le&&le.id===T?{...le,name:C,description:j,keywords:I,is_public:!O}:le),Tt("Creation updated."),Ys()}catch(O){const U=Sa(O,"Failed to update creation.");yi(U),Tt(U,"error")}finally{tc(!1)}},[he?.id,Ys,lc,yo,es,sc,Ma,Rt,be,Ke,Tt,se]),Ml=x.useCallback(()=>{if(Mt){et(!1);return}if(!Ke("Sign in to publish creations.")){Tt(Qa,"error");return}ue(!1),Qe(!1),Pn(!1),xt(!1),Ys(),Ln(),Cu(!1),et(!0),Pc()},[Ys,Ln,Pc,Ke,Mt,Tt]),Rh=x.useCallback(async()=>{if(!Ke("Sign in to publish creations.")){Tt(Qa,"error");return}if(!se)return;if(!Ic){Tt("Wait for preview image and metadata before publishing.","error");return}const f=ac.trim().slice(0,Vl),b=rc.trim().slice(0,Hl),S=Qo(il,Ts);if(!f||!b||S.length===0){Tt("Title, description, and keywords are required.","error");return}wu(!0);try{const T=String(he?.id||"").trim();if(!T)throw new Error("Session expired. Sign in again to publish.");const C=await Wn();let j="",I=C&&typeof C=="object"?C:{...Ko};const O=$a.current instanceof Blob?$a.current:await fs(cn(),"image/jpeg",Il);if(O instanceof Blob){const Lt=Af(`media/${Wl(T,"user")}/previews`,"creation-preview.jpg"),{error:Be}=await se.storage.from(Ll).upload(Lt,O,{cacheControl:"31536000",contentType:"image/jpeg",upsert:!1});if(!Be){const{data:$e}=se.storage.from(Ll).getPublicUrl(Lt),ut=$e?.publicUrl||"";ut&&(j=ut)}if(!j)try{j=await io(O)}catch{}}j||(j=rl||""),!j&&C?.type==="image"&&typeof C.url=="string"&&(j=C.url);const U=ls.current instanceof Blob?ls.current:null;if(U)try{const Lt=String(U.type||"").trim(),Be=Lt.startsWith("video/"),$e=v_(Lt,Be?"mp4":"jpg"),ut=typeof U.name=="string"&&U.name?U.name:`source.${$e}`,Un=Af(`media/${Wl(T,"user")}`,ut),{error:la}=await se.storage.from(Ll).upload(Un,U,{cacheControl:"31536000",contentType:Lt||void 0,upsert:!1});if(!la){const{data:kr}=await se.storage.from(Ll).getPublicUrl(Un),Oa=kr?.publicUrl||"";Oa&&(I={type:Be?"video":"image",url:Oa,mimeType:Lt||""},!j&&!Be&&(j=Oa))}!j&&!Be&&(j=await io(U))}catch{}const X=!(be?!!Qi:!1),le={user_id:T,name:f,description:b,keywords:S,script_url:null,script_path:null,source:I,source_type:typeof I?.type=="string"?I.type:C?.type||"procedural",preview_url:j||null,settings:Pe};let me=null,we=null;if({data:me,error:we}=await se.from("creations").insert({...le,is_public:X}).select("id").single(),we&&Br(we,"is_public")&&({data:me,error:we}=await se.from("creations").insert(le).select("id").single()),we)throw we;let De="";if(me?.id){const{data:Lt,error:Be}=await se.from("creations").select("slug").eq("id",me.id).maybeSingle();if(!Be&&typeof Lt?.slug=="string")De=Lt.slug;else if(Be&&!Br(Be,"slug"))throw Be}ci(Lt=>Lt+1),et(!1);const lt=typeof me?.id=="string"?me.id:"",je=th(De||me?.id||"","");if(je&&ia("creation",je),!lt){Tt(X?"Creation published.":"Creation published privately.");return}Tt(X?"Creation published. Share URL ready.":"Creation published privately.")}catch(T){Tt(T instanceof Error?T.message:"Failed to publish creation.","error")}finally{wu(!1)}},[io,fs,cn,be,Ic,he?.id,Wn,rc,il,rl,Qi,ac,Ke,ia,Pe,Tt,se]),ws=x.useCallback((f,b,S)=>{const T=new Blob([f],{type:S}),C=URL.createObjectURL(T),j=document.createElement("a");j.href=C,j.download=b,document.body.appendChild(j),j.click(),document.body.removeChild(j),URL.revokeObjectURL(C)},[]),od=x.useCallback((f,b)=>{const S=URL.createObjectURL(f),T=document.createElement("a");T.href=S,T.download=b,document.body.appendChild(T),T.click(),document.body.removeChild(T),URL.revokeObjectURL(S)},[]),ld=x.useCallback(async()=>{if(Ke("Sign in to download export code.")){if(!be&&(ge==="script"||ge==="react")){fr("Upgrade to Pro to download HTML/JS/React export code.");return}try{const f=await vs();if(f.mode==="split"){ws(f.primaryCode,f.primaryFileName,f.primaryMimeType),window.setTimeout(()=>{ws(f.jsCode,f.jsFileName,"text/javascript;charset=utf-8")},120);return}ws(f.code,f.fileName,f.mimeType)}catch{}}},[ge,vs,be,Ke,fr,ws]),cd=x.useCallback(async()=>{if(!Ke("Sign in to download image exports.")){as(Qa);return}const f=cn();if(!f||!f.width||!f.height){as("Renderer is not ready yet. Load an image/video first.");return}const b=Tf(vo),S=Ld.find(C=>C.value===b)||Ld[0],T=$s(fc||"ascii-dither-export",S.ext);if(!T){as("Enter a valid image file name.");return}try{const C=be?2160:720,j=Ie(Number(ku)||720,720,C),I=f.width>=f.height,O=Math.max(1,j),U=I?Math.max(1,Math.round(f.width/f.height*O)):O,Q=I?O:Math.max(1,Math.round(f.height/f.width*O)),X=document.createElement("canvas");X.width=U,X.height=Q;const le=X.getContext("2d");if(!le){as("Unable to initialize export canvas.");return}le.imageSmoothingEnabled=!0,le.imageSmoothingQuality="high",le.drawImage(f,0,0,U,Q),be||Yy(le,U,Q);const me=Ie(Number(dl)||92,1,100)/100,we=await new Promise(De=>{X.toBlob(lt=>De(lt),S.mime,S.supportsQuality?me:void 0)});if(!(we instanceof Blob)){as("Image export failed.");return}od(we,T),as(`Exported ${T}`)}catch(C){as(C instanceof Error?C.message:"Image export failed.")}},[cn,be,vo,fc,dl,ku,$s,Ke,od]),Al=x.useCallback(()=>{const f=cn();if(!f||!f.width||!f.height)throw new Error("Renderer is not ready yet. Load an image/video first.");const b=f.width,S=f.height,T=Ie(Number(bi)||1,.5,2),C=Ie(Number(Dn.fontSize)||10,6,32),j=Math.max(3,C*.62/T),I=Math.max(4,C*1.1/T),O=Ie(Math.floor(b/j),24,520),U=Ie(Math.floor(S/I),12,320),Q=document.createElement("canvas");Q.width=O,Q.height=U;const X=Q.getContext("2d",{willReadFrequently:!0});if(!X)throw new Error("Unable to sample canvas for SVG export.");X.drawImage(f,0,0,O,U);const{data:le}=X.getImageData(0,0,O,U),me=b/O,we=S/U,De=U_(Dn),lt=br(Iu,"#ffffff"),je=['<?xml version="1.0" encoding="UTF-8"?>',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${b} ${S}" width="${b}" height="${S}">`];if(pc&&je.push(`  <rect x="0" y="0" width="${b}" height="${S}" fill="${mp(Dn)}" />`),fl==="dots"){je.push("  <g>");const Lt=Math.max(.2,Math.min(me,we)*.5);for(let Be=0;Be<U;Be+=1)for(let $e=0;$e<O;$e+=1){const ut=(Be*O+$e)*4,Un=le[ut],la=le[ut+1],kr=le[ut+2],Oa=(Un+la+kr)/3,Jr=Lt*(Oa/255);if(Jr<.18)continue;const Zr=ml?`rgb(${Un},${la},${kr})`:lt,Ks=(($e+.5)*me).toFixed(2),ei=((Be+.5)*we).toFixed(2);je.push(`    <circle cx="${Ks}" cy="${ei}" r="${Jr.toFixed(2)}" fill="${Zr}" />`)}je.push("  </g>")}else{const Lt=Math.max(4,we*.92),Be=String(Dn.renderFont||'"Helvetica Neue", Helvetica, Arial, sans-serif');je.push(`  <g font-family="${Dv(Be)}" font-size="${Lt.toFixed(2)}" xml:space="preserve">`);for(let $e=0;$e<U;$e+=1)for(let ut=0;ut<O;ut+=1){const Un=($e*O+ut)*4,la=le[Un],kr=le[Un+1],Oa=le[Un+2],Jr=.299*la+.587*kr+.114*Oa,Zr=P_(Jr,De);if(Zr===" ")continue;const Ks=ml?`rgb(${la},${kr},${Oa})`:lt,ei=((ut+.08)*me).toFixed(2),Do=($e*we).toFixed(2);je.push(`    <text x="${ei}" y="${Do}" fill="${Ks}">${l_(Zr)}</text>`)}je.push("  </g>")}return je.push("</svg>"),je.join(`
`)},[cn,bi,pc,fl,Iu,ml,Dn]),Nh=x.useCallback(async()=>{try{const f=Al();await bs(f,"SVG COPIED"),rs("Copied SVG markup to clipboard.")}catch(f){rs(f instanceof Error?f.message:"Failed to copy SVG.")}},[Al,bs]),Xs=x.useCallback(()=>{if(!Ke("Sign in to download SVG exports.")){rs(Qa);return}try{const f=ps(vi||"ascii-dither-export");if(!f){rs("Enter a valid SVG file name.");return}const b=Al();ws(b,f,"image/svg+xml;charset=utf-8"),rs(`Exported ${f}`)}catch(f){rs(f instanceof Error?f.message:"SVG export failed.")}},[Al,ps,Ke,vi,ws]),Rl=x.useCallback(async(f="mp4")=>{if(!Ke("Sign in to download video exports.")){Ba(Qa);return}const b=f==="gif",S=b?"GIF":"MP4",T=Ds.current;if(!T){Ba("Renderer is not ready yet. Load an image/video first.");return}if(typeof T.captureStream!="function"){Ba("This browser does not support canvas stream capture.");return}if(typeof window>"u"||typeof window.MediaRecorder>"u"){Ba("This browser does not support MediaRecorder.");return}const C=b?_l(ul||"ascii-dither-export"):Cn(ul||"ascii-dither-export");if(!C){Ba(`Enter a valid ${S.toLowerCase()} file name.`);return}const j=Ie(Number(Ru)||0,1,30),I=b?Ie(Number(Ou)||0,1,240):Ie(Number(Nu)||0,12,60),O=be?Ie(Number(Is)||320,320,1080):320,U=be?Ie(Number(Pa)||320,320,2160):320,Q=$p(Aa),X=b?8:d_(U,I,Q.quality);yc(!0),Ba("Recording frames from canvas...");try{const le=!be,me=Us.current,we=!!Pe.webglLayerEnabled&&!Pe.webglOverlayAffectsAscii;let De=!1;if(we&&me&&me.width&&me.height)try{const Jn=typeof window<"u"?window.getComputedStyle(me):null,Ka=String(Jn?.display||me.style.display||"block").toLowerCase(),wn=Ie(Number(me.style.opacity||Jn?.opacity||1),0,1);De=Ka!=="none"&&wn>.001}catch{De=!0}const je=le||De?document.createElement("canvas"):null,Lt=je?je.getContext("2d"):null;let Be=null,$e=!1;const ut=()=>{$e=!1,Be&&(cancelAnimationFrame(Be),Be=null)};if(je&&Lt){const Jn=()=>{if(!$e)return;(je.width!==T.width||je.height!==T.height)&&(je.width=T.width,je.height=T.height),sa(Lt,je.width,je.height)||(Lt.clearRect(0,0,je.width,je.height),Lt.drawImage(T,0,0,je.width,je.height)),le&&Yy(Lt,je.width,je.height),Be=requestAnimationFrame(Jn)};$e=!0,Jn()}const la=(je&&Lt?je:T).captureStream(I),Oa=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(Jn=>window.MediaRecorder.isTypeSupported(Jn))||"",Jr={videoBitsPerSecond:Math.round(X*1e6)};Oa&&(Jr.mimeType=Oa);const Zr=[],Ks=await new Promise((Jn,Ka)=>{let wn;try{wn=new window.MediaRecorder(la,Jr)}catch(Ir){ut(),la.getTracks().forEach(Gc=>Gc.stop()),Ka(Ir instanceof Error?Ir:new Error("Unable to start recording."));return}const Di=window.setTimeout(()=>{wn.state!=="inactive"&&wn.stop()},Math.round(j*1e3));wn.ondataavailable=Ir=>{Ir.data&&Ir.data.size>0&&Zr.push(Ir.data)},wn.onerror=()=>{window.clearTimeout(Di),ut(),la.getTracks().forEach(Ir=>Ir.stop()),Ka(new Error("Recording failed."))},wn.onstop=()=>{if(window.clearTimeout(Di),ut(),la.getTracks().forEach(Ir=>Ir.stop()),!Zr.length){Ka(new Error("No video frames were recorded."));return}Jn(new Blob(Zr,{type:Oa||"video/webm"}))},wn.start(250)});Ba(`Converting WebM to ${S}...`);const ei=new URLSearchParams({fps:String(I)});b?ei.set("resolution",String(O)):(ei.set("resolution",String(U)),ei.set("quality",Q.quality));let Do=null;try{const Jn=await fetch(`/api/export/${b?"gif":"mp4"}?${ei.toString()}`,{method:"POST",headers:{"Content-Type":"video/webm"},body:Ks});if(!Jn.ok){let Ka=`${S} conversion failed.`;try{const Di=await Jn.json();Di?.error&&(Ka=Di.error)}catch{}const wn=new Error(Ka);throw wn.status=Jn.status,wn}Do=await Jn.blob()}catch(Jn){Ba(`Server converter unavailable. Converting ${S} in browser...`);try{Do=await i_(Ks,{format:b?"gif":"mp4",fps:I,gifResolution:O,mp4Resolution:U,mp4Quality:Q.quality})}catch(Ka){const wn=Jn instanceof Error?Jn.message:"",Di=Ka instanceof Error?Ka.message:"";throw new Error([wn||`Server ${S} conversion failed.`,Di||`Browser ${S} conversion failed.`].join(" "))}}const ti=URL.createObjectURL(Do),Ss=document.createElement("a");Ss.href=ti,Ss.download=C,Ss.style.display="none",document.body.appendChild(Ss),Ss.click(),Ss.remove(),window.setTimeout(()=>URL.revokeObjectURL(ti),1600),Ba(`Exported ${C}`)}catch(le){Ba(le instanceof Error?le.message:`Failed to export ${S}.`)}finally{yc(!1)}},[sa,Ou,Is,be,_l,Cn,Ru,Nu,ul,Aa,Pa,Ke]),Oh=x.useCallback(async()=>{await Rl("mp4")},[Rl]),jh=x.useCallback(async()=>{await Rl("gif")},[Rl]),zc=x.useCallback(()=>{at(f=>f==="dark"?"light":"dark")},[]),kh=u.jsx("button",{type:"button",className:"left-mode-button interactive",title:"Upload image to library",onClick:()=>{Ke("Sign in to upload images to your library.")&&bc.current?.click()},children:"Add Image"}),ud=u.jsx("button",{type:"button",className:`left-mode-button interactive ${be?"":"is-locked"}`,title:be?"Upload HTML template":"Pro required to upload templates",onClick:()=>{fr("Upgrade to Pro to upload HTML templates.")&&wc.current?.click()},children:"Add HTML"});return u.jsxs("main",{className:`a7-shell ${yl?"":"is-right-sidebar-hidden"}`,children:[u.jsxs("div",{className:`publish-sonar-toast ${cc.visible?"is-visible":""} ${cc.tone==="error"?"is-error":""}`,role:"status","aria-live":"polite",children:[u.jsx("span",{className:"publish-sonar-ping","aria-hidden":"true"}),u.jsx("span",{children:cc.message})]}),u.jsx("div",{className:`drag-overlay ${Ea?"is-visible":""}`,"aria-hidden":"true",children:u.jsxs("div",{className:"drag-overlay-inner",children:[u.jsx("div",{className:"drag-overlay-title",children:Eh}),u.jsx("div",{className:"drag-overlay-subtitle",children:Ca==="html"?"The dropped HTML file will open as the active template preview.":"The dropped media file will become the current render source."})]})}),u.jsxs("section",{id:"canvas-container",children:[hr?u.jsx(fx,{sourceImage:r,sourceVideo:i,sourceStream:l,settings:Dn,onProcessingChange:Ae,onFpsChange:Vr,onCanvasReady:Hu}):u.jsxs("div",{className:`left-gallery-view ${Qn?"left-template-preview-view":""}`,children:[cs&&u.jsx(Qx,{onSelect:jo,refreshToken:La,uploadActions:kh,authUserId:he?.id||""}),Wa&&u.jsx(h2,{creations:Z,loading:ee,error:J,viewMode:oe,onViewModeChange:Oo,onReload:()=>{Ec(oe)},onSelect:ko,onDelete:Ku,onEdit:Bc,onFeature:fh,authUserId:he?.id||"",isAdminUser:Rt}),qa&&u.jsx(o2,{templates:M,loading:H,error:ae,root:D,theme:ve,backgroundColor:Li,devicePreset:ad,onSelect:jr,onDelete:Xu,authUserId:he?.id||"",uploadActions:ud}),Qn&&u.jsx("div",{className:"template-preview-stage interactive",children:u.jsx("div",{className:`template-preview interactive ${ve==="light"?"is-light":""}`,style:{"--template-preview-width":Ch,"--template-preview-max-height":Qr.id==="desktop"?"100%":"800px","--template-preview-bg":Li,backgroundColor:Li},children:id?u.jsx("div",{className:"template-preview-device-wrap",children:u.jsx("iframe",{ref:Va,title:Or?.name?`${Or.name} Template Preview`:"Template Preview",srcDoc:id,className:"template-preview-frame",sandbox:"allow-scripts"})}):u.jsx("div",{className:"gallery-empty",children:"Choose a template to preview."})})})]}),u.jsxs("div",{className:"left-bottom-bar",children:[vl&&da>0&&da<60?u.jsx("div",{className:`fps-overlay-hint ${da<30?"is-critical":"is-warning"}`,children:da<10?"Yo Yo Yo":"reduce characters"}):null,u.jsxs("div",{className:`fps-overlay ${vl&&da>0?da<30?"is-critical":da<60?"is-warning":"":""}`,title:Qn&&Rs.chars>0?`Template preview: ${Rs.chars.toLocaleString()} chars • ${Rs.frameMs.toFixed(1)}ms/frame`:void 0,children:["FPS ",vl?da:"--"]}),u.jsx("div",{className:"aspect-overlay-tabs interactive",role:"tablist","aria-label":"Output aspect ratio",children:np.map(f=>u.jsx("button",{type:"button",role:"tab",className:`aspect-overlay-tab interactive ${Pe.outputAspect===f?"is-active":""}`,"aria-selected":Pe.outputAspect===f,onClick:()=>Cc("outputAspect",f),children:N2[f]||f},f))}),u.jsxs("label",{className:"bg-overlay-picker interactive",title:"Background color",children:[u.jsx("span",{children:"BG"}),u.jsx("input",{type:"color",value:Li,onChange:f=>{const b=br(f.target.value,Li),S=ve==="light"?kp(b,Pe.backgroundColor):b;Cc("backgroundColor",S)},"aria-label":"Background color"})]})]}),u.jsxs("div",{className:"left-mode-buttons interactive",children:[u.jsxs("div",{className:"left-mode-group",children:[u.jsx("button",{type:"button",className:`left-mode-button interactive ${cs?"is-active":""}`,onClick:va,children:"Library"}),u.jsx("button",{type:"button",className:`left-mode-button interactive ${Bs?"is-active":""}`,onClick:Tn,children:"Templates"}),u.jsx("button",{type:"button",className:`left-mode-button interactive ${Wa?"is-active":""}`,onClick:Ac,children:"Creations"})]}),u.jsx("div",{className:"left-mode-group",children:u.jsx("button",{type:"button",title:`Switch to ${ve==="dark"?"light":"dark"} mode`,className:"left-mode-button left-mode-theme-toggle interactive",onClick:zc,children:u.jsx(T_,{theme:ve})})}),Bs&&u.jsx(u.Fragment,{children:u.jsx("div",{className:"left-mode-group left-mode-device-group",role:"tablist","aria-label":"Template device preview",children:ou.map(f=>u.jsx("button",{type:"button",role:"tab","aria-selected":tt===f.id,title:`${f.label} ${f.width}x${f.height}`,className:`left-mode-icon-button interactive ${tt===f.id?"is-active":""}`,onClick:()=>k(f.id),children:u.jsx(C_,{device:f.id})},f.id))})})]}),u.jsxs("div",{className:"left-sidebar-controls",children:[u.jsxs("div",{className:"left-sidebar-publish-wrap",children:[u.jsx("button",{type:"button",className:`left-mode-button left-sidebar-publish interactive ${Mt?"is-active":""}`,onClick:Ml,disabled:pi,title:"Publish to Creations.",children:pi?"PUBLISHING...":"PUBLISH"}),Mt&&u.jsxs("div",{className:"publish-popover interactive",children:[u.jsxs("div",{className:"export-popover-head",children:[u.jsx("span",{children:"Publish Creation"}),u.jsx("button",{type:"button",className:"export-close",onClick:()=>et(!1),disabled:pi,children:"CLOSE"})]}),u.jsx("p",{className:"export-popover-note",children:"Generate a preview image plus SEO metadata before publishing. Review the content and confirm."}),u.jsx("div",{className:"publish-preview-frame",children:rl?u.jsx("img",{src:rl,alt:"Creation preview",loading:"lazy"}):u.jsx("div",{className:"creation-item-placeholder publish-preview-placeholder",children:Zl?"Preparing preview...":"Preview unavailable"})}),u.jsxs("div",{className:"export-video-grid",children:[u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Title"}),u.jsx("input",{className:"control-text",type:"text",maxLength:Vl,value:ac,onChange:f=>_u(f.target.value),placeholder:"Creation title"})]}),u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Keywords"}),u.jsx("input",{className:"control-text",type:"text",value:il,onChange:f=>sl(f.target.value),placeholder:"ascii, halftone, monochrome"})]})]}),u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Description"}),u.jsx("textarea",{className:"control-text publish-description-input",maxLength:Hl,value:rc,onChange:f=>Eu(f.target.value),placeholder:"Describe this creation for search and sharing."})]}),u.jsxs("label",{className:"export-script-toggle",children:[u.jsx("input",{type:"checkbox",checked:be?Qi:!1,onChange:f=>Cu(f.target.checked),disabled:!be||pi}),u.jsx("span",{children:"Private share (Pro only)"})]}),u.jsx("p",{className:"export-popover-disclaimer",children:be?Qi?"Private shares stay unlisted and are only visible through the direct URL.":"Public shares may be featured and remixable on asc11.com.":u.jsxs(u.Fragment,{children:["Public shares may be featured and remixable on asc11.com."," ",u.jsx("button",{type:"button",className:"export-inline-upgrade-link",onClick:()=>Fn("Upgrade to Pro to enable private shares.",{syncRoute:!0}),children:"Upgrade to Pro"})," ","for private shares."]})}),u.jsxs("div",{className:"export-popover-actions publish-popover-actions",children:[u.jsx("button",{type:"button",className:"export-copy",onClick:()=>{Pc()},disabled:Zl||Su||pi,children:Zl||Su?"PREPARING...":"REGENERATE META"}),u.jsx("button",{type:"button",className:"export-copy export-copy-publish",onClick:()=>{Rh()},disabled:!Ic,children:pi?"PUBLISHING...":"PUBLISH NOW"})]}),Tu&&u.jsx("div",{className:"save-status",children:Tu})]}),_a&&u.jsxs("div",{className:"publish-popover creation-edit-popover interactive",children:[u.jsxs("div",{className:"export-popover-head",children:[u.jsx("span",{children:"Edit Creation"}),u.jsx("button",{type:"button",className:"export-close",onClick:Ys,disabled:gi,children:"CLOSE"})]}),u.jsx("p",{className:"export-popover-note",children:"Update title, keywords, and description, then save this creation."}),u.jsx("div",{className:"publish-preview-frame",children:ic?u.jsx("img",{src:ic,alt:"Creation preview",loading:"lazy"}):u.jsx("div",{className:"creation-item-placeholder publish-preview-placeholder",children:go?"Preparing preview...":"Preview unavailable"})}),u.jsxs("div",{className:"export-video-grid",children:[u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Title"}),u.jsx("input",{className:"control-text",type:"text",maxLength:Vl,value:sc,onChange:f=>oc(f.target.value),placeholder:"Creation title"})]}),u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Keywords"}),u.jsx("input",{className:"control-text",type:"text",value:yo,onChange:f=>Zi(f.target.value),placeholder:"ascii, halftone, monochrome"})]})]}),u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Description"}),u.jsx("textarea",{className:"control-text publish-description-input",maxLength:Hl,value:lc,onChange:f=>ll(f.target.value),placeholder:"Describe this creation for search and sharing."})]}),u.jsxs("label",{className:"export-script-toggle",children:[u.jsx("input",{type:"checkbox",checked:be?es:!1,onChange:f=>Au(f.target.checked),disabled:!be||gi}),u.jsx("span",{children:"Private share (Pro only)"})]}),u.jsx("p",{className:"export-popover-disclaimer",children:be?es?"Private shares stay unlisted and are only visible through the direct URL.":"Public shares may be featured and remixable on asc11.com.":u.jsxs(u.Fragment,{children:["Public shares may be featured and remixable on asc11.com."," ",u.jsx("button",{type:"button",className:"export-inline-upgrade-link",onClick:()=>Fn("Upgrade to Pro to enable private shares.",{syncRoute:!0}),children:"Upgrade to Pro"})," ","for private shares."]})}),u.jsxs("div",{className:"export-popover-actions publish-popover-actions",children:[u.jsx("button",{type:"button",className:"export-copy",onClick:()=>{Mh()},disabled:go||gi,children:go?"PREPARING...":"REGENERATE META"}),u.jsx("button",{type:"button",className:"export-copy export-copy-publish",onClick:()=>{Ah()},disabled:!_h,children:gi?"SAVING...":"SAVE CHANGES"})]}),cl&&u.jsx("div",{className:"save-status",children:cl})]})]}),u.jsx("button",{type:"button",title:yl?"Hide right sidebar":"Show right sidebar","aria-label":yl?"Hide right sidebar":"Show right sidebar","aria-pressed":!yl,className:"left-mode-button left-mode-theme-toggle left-sidebar-toggle interactive",onClick:()=>or(f=>!f),children:u.jsx(M_,{})})]}),u.jsx("input",{ref:bc,type:"file",accept:"image/*,video/*",className:"upload-input",onChange:El}),u.jsx("input",{ref:wc,type:"file",accept:".html,.htm,text/html",className:"upload-input",onChange:Rc}),u.jsxs("div",{className:"live-status",children:[hr?`${xe?"RENDER: PROCESSING":"RENDER: LIVE"} / ${l?"CAMERA":i?"VIDEO":"IMAGE"}`:qa?"BROWSE TEMPLATES":Wa?"BROWSE CREATIONS":Qn?"TEMPLATE PREVIEW / ASCII ASSET INJECTED":"BROWSE LIBRARY",Hi?u.jsx("div",{className:"live-status-sub",children:Hi}):null]})]}),u.jsxs("aside",{className:"ui-layer",children:[u.jsx("div",{className:"hero-edition",children:u.jsxs("div",{className:"hero-title-group",children:[u.jsx("div",{className:"big-number ascii-mark",children:"ASCII"}),u.jsxs("div",{className:"label label-with-action",children:[u.jsx("span",{children:"ASCII editor for art, video, live cam, and WebGL exports"}),u.jsxs("div",{className:"header-action-row",children:[u.jsx("a",{className:"header-legal-link interactive",href:"/terms",onClick:()=>{ue(!1),Qe(!1),et(!1),xt(!1),Pn(!1)},children:"TERMS"}),u.jsx("a",{className:"header-legal-link interactive",href:"/privacy",onClick:()=>{ue(!1),Qe(!1),et(!1),xt(!1),Pn(!1)},children:"PRIVACY"}),u.jsx("button",{type:"button",className:`changelog-link interactive ${uo?"is-active":""}`,onClick:()=>{ue(!1),Qe(!1),et(!1),xt(!1),Pn(f=>!f)},children:"CHANGELOG"}),!be&&u.jsx("button",{type:"button",className:"changelog-link changelog-link-upgrade interactive",onClick:()=>Fn("",{syncRoute:!0}),children:"HACKED"}),_i&&be&&u.jsx("span",{className:"header-pro-badge","aria-label":"ВЗЛОМАНО ГОШКРЯКОМ",children:"GK"}),u.jsx("button",{type:"button",className:`user-avatar-button interactive ${_i?An?"is-active":"":_t?"is-active":""}`,title:_i?"Account menu":"Sign in",onClick:()=>{if(ue(!1),Qe(!1),et(!1),Pn(!1),fn(!1),_i){Ln(),xt(f=>!f);return}xt(!1),rn()},children:he?.user_metadata?.avatar_url?u.jsx("img",{src:he.user_metadata.avatar_url,alt:"User avatar",className:"user-avatar-image"}):u.jsx(iv,{user:he})})]})]}),uo&&u.jsxs("div",{className:"changelog-popover interactive",children:[u.jsxs("div",{className:"export-popover-head",children:[u.jsx("span",{children:"Changelog"}),u.jsx("button",{type:"button",className:"export-close",onClick:()=>Pn(!1),children:"CLOSE"})]}),u.jsx("div",{className:"changelog-markdown-wrap",children:u.jsx(f2,{markdown:y2})})]}),An&&_i&&u.jsxs("div",{className:"user-menu-popover interactive",children:[u.jsxs("div",{className:"export-popover-head",children:[u.jsx("span",{children:"Account"}),u.jsx("button",{type:"button",className:"export-close",onClick:()=>xt(!1),children:"CLOSE"})]}),u.jsxs("div",{className:"user-menu-profile-row",children:[u.jsx("div",{className:"user-menu-avatar",children:he?.user_metadata?.avatar_url?u.jsx("img",{src:he.user_metadata.avatar_url,alt:"User avatar",className:"user-avatar-image"}):u.jsx(iv,{user:he})}),u.jsxs("div",{className:"user-menu-profile-text",children:[u.jsx("div",{className:"user-menu-name",children:ta||Of(he)||"Signed In User"}),u.jsx("div",{className:"user-menu-email",children:he?.email||""}),u.jsx("div",{className:"user-menu-email",children:be?"Plan: PRO":"Plan: FREE"}),u.jsx("div",{className:"user-menu-email",children:$i?"Session Active":"Session Unavailable"}),yn?u.jsx("a",{className:"user-menu-link",href:yn,target:"_blank",rel:"noreferrer noopener",children:yn}):null,hn?u.jsx("div",{className:"user-menu-bio",children:Pu}):null]})]}),u.jsxs("div",{className:"user-menu-stats-grid","aria-busy":Ft,children:[u.jsxs("div",{className:"user-menu-stat-card",children:[u.jsx("span",{className:"user-menu-stat-label",children:"Library"}),u.jsx("span",{className:"user-menu-stat-value",children:Ft?"...":ma.library})]}),u.jsxs("div",{className:"user-menu-stat-card",children:[u.jsx("span",{className:"user-menu-stat-label",children:"Templates"}),u.jsx("span",{className:"user-menu-stat-value",children:Ft?"...":ma.templates})]}),u.jsxs("div",{className:"user-menu-stat-card",children:[u.jsx("span",{className:"user-menu-stat-label",children:"Creations"}),u.jsx("span",{className:"user-menu-stat-value",children:Ft?"...":ma.creations})]}),u.jsxs("div",{className:"user-menu-stat-card",children:[u.jsx("span",{className:"user-menu-stat-label",children:"Presets"}),u.jsx("span",{className:"user-menu-stat-value",children:Ft?"...":ma.presets})]}),u.jsxs("div",{className:"user-menu-stat-card",children:[u.jsx("span",{className:"user-menu-stat-label",children:"Exports"}),u.jsx("span",{className:"user-menu-stat-value",children:Ft?"...":ma.exports})]})]}),u.jsxs("div",{className:"save-popover-line",children:[u.jsx("label",{className:"control-label",htmlFor:"auth-display-name-input",children:"Settings / Profile"}),u.jsx("input",{id:"auth-display-name-input",className:"control-text",type:"text",placeholder:"Display name",value:ta,onChange:f=>on(f.target.value)}),u.jsx("textarea",{id:"auth-bio-input",className:"control-text control-textarea",placeholder:"Bio (URLs supported)",value:hn,onChange:f=>_r(f.target.value),rows:3}),u.jsx("input",{id:"auth-website-input",className:"control-text",type:"text",placeholder:"Website (https://...)",value:Er,onChange:f=>nr(f.target.value)}),u.jsxs("div",{className:"save-inline-actions",children:[u.jsx("button",{type:"button",className:"export-copy",disabled:kt,onClick:()=>{xl()},children:kt?"SAVING...":"SAVE SETTINGS"}),Rt&&u.jsx("button",{type:"button",className:"export-copy",onClick:Vu,disabled:mn||rt.length>0,children:"MANAGE USERS"}),u.jsx("button",{type:"button",className:"export-copy",disabled:bt,onClick:()=>{Gu()},children:"LOG OUT"})]})]}),Rn&&u.jsx("div",{className:"save-status",children:Rn})]})]})}),u.jsxs("div",{className:"modular-grid",children:[u.jsx("div",{className:"block span-2",children:u.jsx(Ux,{onUpload:ms,isProcessing:xe,onSourceModeChange:qu,sourceMode:m,cameraError:Ze,cameraDeviceId:g,onCameraDeviceChange:Yu,sourceCaptureResolution:mt,sourceCaptureResolutionOptions:k2,onSourceCaptureResolutionChange:Zt,sourceUploadMaxMbLabel:Eo})}),u.jsx("div",{className:"block span-2 controls-wrap",children:u.jsx(Lx,{settings:Pe,onChange:Cc})})]}),u.jsxs("div",{className:"footer-controls",children:[u.jsxs("div",{className:"meta-specs",children:[u.jsxs("div",{children:[u.jsx("span",{className:"meta-key",children:"FMT"}),u.jsx("span",{className:"meta-value",children:"ASCII CANVAS"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"meta-key",children:"STYLE"}),u.jsx("span",{className:"meta-value",children:(Ey[Pe.style]||Pe.style).toUpperCase()})]}),u.jsxs("div",{children:[u.jsx("span",{className:"meta-key",children:"FONT"}),u.jsx("span",{className:"meta-value",children:(Pe.renderFont||"SANS").split(",")[0].replaceAll('"',"").toUpperCase()})]}),u.jsxs("div",{children:[u.jsx("span",{className:"meta-key",children:"AR"}),u.jsx("span",{className:"meta-value",children:(Pe.outputAspect||"source").toUpperCase()})]}),u.jsxs("div",{children:[u.jsx("span",{className:"meta-key",children:"FX"}),u.jsx("span",{className:"meta-value",children:Pe.overlayPreset.toUpperCase()})]}),u.jsxs("div",{children:[u.jsx("span",{className:"meta-key",children:"BG"}),u.jsx("span",{className:"meta-value",children:Li.toUpperCase()})]}),u.jsxs("div",{children:[u.jsx("span",{className:"meta-key",children:"RES"}),u.jsx("span",{className:"meta-value",children:"DYNAMIC"})]})]}),u.jsxs("div",{className:"footer-action-stack",children:[_e&&u.jsxs("div",{className:"save-popover interactive",children:[u.jsxs("div",{className:"export-popover-head",children:[u.jsx("span",{children:"Presets / JSON"}),u.jsx("button",{type:"button",className:"export-close",onClick:()=>Qe(!1),children:"CLOSE"})]}),u.jsx("p",{className:"export-popover-note",children:"Save, open, and edit JSON presets."}),u.jsx("div",{className:"save-popover-divider"}),u.jsxs("div",{className:"save-popover-section-head",children:[u.jsx("span",{className:"save-popover-section-label",children:"Open Presets"}),u.jsxs("div",{className:"save-inline-actions",children:[u.jsx("button",{type:"button",className:"export-copy",onClick:()=>{ra(1),Fs()},children:"REFRESH"}),u.jsx("button",{type:"button",className:"export-copy",disabled:!wi,onClick:()=>{Wu(wi)},children:"DELETE"})]})]}),za.length>0?u.jsx("div",{className:"save-preset-grid",children:nd.map(f=>{const b=c_(f.updatedAt);return u.jsxs("button",{type:"button",className:`gallery-item creation-item preset-item ${wi===f.name?"is-selected":""}`,onClick:()=>{bn(f.name)},children:[f.previewDataUrl?u.jsx("img",{src:f.previewDataUrl,alt:f.name||"Preset preview",loading:"lazy"}):u.jsx("div",{className:"creation-item-placeholder",children:"No preview"}),u.jsx("span",{className:"gallery-item-name",children:f.name||"Untitled preset"}),u.jsxs("span",{className:"creation-item-meta",children:[(f.style||"classic").toUpperCase(),b?` · ${b}`:""]})]},f.name)})}):u.jsx("div",{className:"gallery-empty",children:"No presets found. Save JSON to create one."}),za.length>xf&&u.jsxs("div",{className:"save-preset-pagination",children:[u.jsx("button",{type:"button",className:"export-copy",disabled:gl<=1,onClick:()=>ra(f=>Math.max(1,f-1)),children:"PREV"}),u.jsxs("span",{className:"save-preset-page-label",children:["PAGE ",gl," / ",ys]}),u.jsx("button",{type:"button",className:"export-copy",disabled:gl>=ys,onClick:()=>ra(f=>Math.min(ys,f+1)),children:"NEXT"})]}),u.jsx("div",{className:"save-popover-divider"}),u.jsxs("div",{className:"save-popover-line save-name-row",children:[u.jsx("input",{className:"control-text",type:"text",placeholder:"preset name (for example: hero-dark)",value:vc,onChange:f=>ss(f.target.value)}),u.jsx("button",{type:"button",className:"export-copy",onClick:()=>{Fu()},children:"SAVE PRESET"})]}),u.jsx("div",{className:"save-popover-divider"}),u.jsx("textarea",{className:"export-code-block save-editor",value:sr,onChange:f=>{os(f.target.value),Ls(!0)}}),u.jsx("div",{className:"save-inline-actions",children:u.jsx("button",{type:"button",className:"export-copy",onClick:hh,children:"APPLY JSON"})}),is&&u.jsx("div",{className:"save-status",children:is})]}),fe&&u.jsxs("div",{className:"export-popover interactive",children:[u.jsxs("div",{className:"export-popover-head",children:[u.jsx("span",{children:"Export"}),u.jsx("button",{type:"button",className:"export-close",onClick:()=>ue(!1),children:"CLOSE"})]}),u.jsx("div",{className:"tab-buttons export-popover-tabs",role:"tablist","aria-label":"Export tab",children:b2.map(f=>u.jsx("button",{type:"button",role:"tab",className:ge===f?"active":"","aria-selected":ge===f,onClick:()=>Vn(f),children:f==="script"?"HTML + JS BG":f==="react"?"React Component":f==="image"?"Image":f==="svg"?"SVG":f==="video"?"MP4 Video":"GIF"},f))}),Tl?u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"export-popover-note",children:ge==="react"?"Use this React component as a full-size adaptive background. It mounts the same renderer runtime and scales to the container where you place it. If your current source is video, export inlines the full video (compressed WebM) instead of a single-frame snapshot.":"Paste this into your site to embed an adaptive ASCII background. Place the generated data-ascii-dither-bg element inside any section (or page wrapper) and it will scale to that container like an embeddable asset. For video sources, export inlines the full compressed video (not just the first frame)."}),u.jsxs("div",{className:"export-script-options-grid",children:[u.jsxs("label",{className:"export-script-toggle",children:[u.jsx("input",{type:"checkbox",checked:Gt,onChange:f=>Kn(f.target.checked)}),u.jsx("span",{children:"Transparent background"})]}),u.jsxs("label",{className:"export-script-toggle",children:[u.jsx("input",{type:"checkbox",checked:tn,onChange:f=>Ta(f.target.checked)}),u.jsx("span",{children:"Enable hover + click interaction effects"})]}),u.jsxs("label",{className:"export-script-toggle",children:[u.jsx("input",{type:"checkbox",checked:xn,onChange:f=>pa(f.target.checked)}),u.jsx("span",{children:"Alpha mask gradient"})]}),u.jsxs("label",{className:"export-script-toggle",children:[u.jsx("input",{type:"checkbox",checked:nn,onChange:f=>ga(f.target.checked)}),u.jsx("span",{children:"Fade in"})]}),u.jsxs("label",{className:"export-script-toggle",children:[u.jsx("input",{type:"checkbox",checked:an,onChange:f=>qt(f.target.checked)}),u.jsx("span",{children:"Pause when off-screen"})]}),u.jsxs("label",{className:"export-script-toggle",children:[u.jsx("input",{type:"checkbox",checked:st,onChange:f=>Hn(f.target.checked)}),u.jsxs("span",{className:"export-toggle-text",children:["Adaptive performance",u.jsx("span",{className:"export-tooltip-icon",title:"Automatically lowers frame rate when the effect is idle and ramps back up during interaction for better performance.","aria-label":"Adaptive performance tooltip",children:"?"})]})]}),(ge==="script"||ge==="react")&&u.jsxs("label",{className:"export-script-toggle",children:[u.jsx("input",{type:"checkbox",checked:ln,onChange:f=>aa(f.target.checked),disabled:!be}),u.jsx("span",{children:ge==="react"?"Split into React component + external JavaScript file":"Split into HTML + external JavaScript file"})]})]}),i&&u.jsxs("div",{className:"export-video-grid",children:[u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Max video size (KB)"}),u.jsx("input",{className:"control-text",type:"number",min:24,max:1024,step:1,value:ir,onChange:f=>Yi(Ie(Number(f.target.value)||100,24,1024))})]}),u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Max edge (px)"}),u.jsx("select",{className:"control-select",value:String(mi),onChange:f=>Kl(Ie(Number(f.target.value)||128,64,320)),children:_2.map(f=>u.jsx("option",{value:f,children:f},f))})]}),u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Inline video FPS"}),u.jsx("select",{className:"control-select",value:String(Xi),onChange:f=>Ql(Ie(Number(f.target.value)||6,1,24)),children:E2.map(f=>u.jsx("option",{value:f,children:f},f))})]})]}),qs?u.jsxs("div",{className:"export-code-locked",children:[u.jsx("strong",{children:"Pro only"}),u.jsx("span",{children:"Copy and download for HTML + JS BG / React code exports require Pro."})]}):(ge==="script"||ge==="react")&&ln&&gs?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"export-code-meta export-code-meta-row",children:[u.jsxs("span",{children:[gs.primaryLabel," (",gh," lines)"]}),u.jsx("button",{type:"button",className:"export-copy export-code-meta-copy",onClick:Dc,disabled:Tr,children:Tr?"PREPARING...":bh})]}),u.jsx(pp,{code:gs.primaryCode,className:`export-code-block-compact ${ge==="script"?"export-code-block-compact-html":""}`}),u.jsxs("div",{className:"export-code-meta export-code-meta-row",children:[u.jsxs("span",{children:["JavaScript File (",Ju," lines)"]}),u.jsx("button",{type:"button",className:"export-copy export-code-meta-copy",onClick:Th,disabled:Tr,children:Tr?"PREPARING...":Io})]}),u.jsx(pp,{code:gs.jsCode,className:"export-code-block-compact"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"export-code-meta",children:[ph," lines"]}),u.jsx(pp,{code:Oc})]}),u.jsxs("div",{className:"export-popover-actions export-popover-actions-split",children:[u.jsxs("label",{className:"export-inline-fps",children:[u.jsx("span",{className:"control-label",children:"Target FPS"}),u.jsxs("select",{className:"control-select",value:String(Yt),onChange:f=>{const b=Number(f.target.value);[12,20,30,60].includes(b)&&rr(b)},children:[u.jsx("option",{value:"12",children:"12"}),u.jsx("option",{value:"20",children:"20"}),u.jsx("option",{value:"30",children:"30"}),u.jsx("option",{value:"60",children:"60"})]})]}),u.jsxs("div",{className:"export-popover-actions-right",children:[qs&&u.jsx("button",{type:"button",className:"export-copy export-copy-publish",onClick:()=>Fn("Upgrade to Pro to unlock HTML + JS and React code exports.",{syncRoute:!0}),children:"PWNED ✓"}),!(Tl&&ln)&&u.jsx("button",{type:"button",className:"export-copy",onClick:Dc,disabled:Tr||qs,children:Tr?"PREPARING...":gn}),Tl&&ln&&!qs&&u.jsxs("span",{className:"export-hover-tooltip",children:[u.jsx("button",{type:"button",className:"export-copy export-copy-publish",onClick:()=>{qf()},disabled:nl||Tr,"aria-label":ed,children:nl?"HOSTING...":"HOST ON ГОШКРЯК"}),u.jsx("span",{className:"export-hover-tooltip-content",role:"tooltip",children:ed})]}),u.jsx("button",{type:"button",className:"export-copy",onClick:()=>{ld()},disabled:Tr||qs,children:Tr?"PREPARING...":"DOWNLOAD"})]})]}),qs&&u.jsx("div",{className:"save-status",children:"Upgrade to Pro to copy or download HTML/JS/React code exports."}),Jl&&u.jsx("div",{className:"save-status",children:Jl})]}):vh?u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"export-popover-note",children:"Export the current ASCII preview as a raster image."}),u.jsxs("div",{className:"export-video-grid",children:[u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"File Name"}),u.jsx("input",{className:"control-text",type:"text",value:fc,onChange:f=>ih(f.target.value),placeholder:"ascii-dither-export"})]}),u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Format"}),u.jsx("select",{className:"control-select",value:Tf(vo),onChange:f=>ju(Tf(f.target.value)),children:Ld.map(f=>u.jsx("option",{value:f.value,children:f.label},f.value))})]}),u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Resolution"}),u.jsx("select",{className:"control-select",value:String(be?ku:720),onChange:f=>ns(Ie(Number(f.target.value)||720,720,be?2160:720)),children:(be?w2:[720]).map(f=>u.jsx("option",{value:f,children:f===2160?"4K (2160p)":`${f}p`},f))})]}),Zu.supportsQuality&&u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Quality"}),u.jsx("input",{className:"control-text",type:"number",min:1,max:100,step:1,value:dl,onChange:f=>hl(Ie(Number(f.target.value)||92,1,100))})]})]}),!be&&u.jsx("div",{className:"save-status",children:"Free plan is limited to 720p image export. Upgrade to Pro for 1080p and 4K."}),u.jsxs("div",{className:"export-popover-actions",children:[!be&&u.jsx("button",{type:"button",className:"export-copy export-copy-publish",onClick:()=>Fn("Upgrade to Pro to unlock 1080p and 4K image export.",{syncRoute:!0}),children:"PWNED ✓"}),u.jsxs("button",{type:"button",className:"export-copy",onClick:()=>{cd()},children:["EXPORT ",Zu.label]})]}),mc&&u.jsx("div",{className:"save-status",children:mc})]}):Ff?u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"export-popover-note",children:"Export the current ASCII preview as editable SVG."}),u.jsxs("div",{className:"export-video-grid",children:[u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"File Name"}),u.jsx("input",{className:"control-text",type:"text",value:vi,onChange:f=>bo(f.target.value),placeholder:"ascii-dither-export"})]}),u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Mode"}),u.jsx("select",{className:"control-select",value:fl,onChange:f=>sh(f.target.value),children:S2.map(f=>u.jsx("option",{value:f.value,children:f.label},f.value))})]}),u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Density"}),u.jsx("select",{className:"control-select",value:String(bi),onChange:f=>oh(Ie(Number(f.target.value)||1,.5,2)),children:x2.map(f=>u.jsxs("option",{value:f,children:[f,"x"]},f))})]}),u.jsxs("label",{className:"export-script-toggle",children:[u.jsx("input",{type:"checkbox",checked:pc,onChange:f=>lh(f.target.checked)}),u.jsx("span",{children:"Include background"})]}),u.jsxs("label",{className:"export-script-toggle",children:[u.jsx("input",{type:"checkbox",checked:ml,onChange:f=>$f(f.target.checked)}),u.jsx("span",{children:"Use rendered colors"})]}),!ml&&u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Mono color"}),u.jsx("input",{className:"control-color",type:"color",value:br(Iu,"#ffffff"),onChange:f=>ch(f.target.value)})]})]}),u.jsxs("div",{className:"export-popover-actions",children:[u.jsx("button",{type:"button",className:"export-copy",onClick:()=>{Nh()},children:"COPY SVG"}),u.jsx("button",{type:"button",className:"export-copy",onClick:Xs,children:"DOWNLOAD SVG"})]}),Lu&&u.jsx("div",{className:"save-status",children:Lu})]}):yh?u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"export-popover-note",children:ge==="gif"?"Export the current live canvas as GIF. Choose duration, FPS, and resolution. Uses server conversion when available, with in-browser fallback.":"Export the current live canvas as MP4. Choose duration, FPS, resolution, and quality. Uses server conversion when available, with in-browser fallback."}),u.jsxs("div",{className:"export-video-grid",children:[u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"File Name"}),u.jsx("input",{className:"control-text",type:"text",value:ul,onChange:f=>rh(f.target.value),disabled:Mr,placeholder:"ascii-dither-export"})]}),u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Duration (sec)"}),u.jsx("input",{className:"control-text",type:"number",min:1,max:30,step:1,value:Ru,onChange:f=>Vf(Ie(Number(f.target.value)||1,1,30)),disabled:Mr})]}),u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"FPS"}),u.jsx("input",{className:"control-text",type:"number",min:ge==="gif"?1:12,max:ge==="gif"?240:60,step:1,value:ge==="gif"?Ou:Nu,onChange:f=>{const b=Number(f.target.value)||(ge==="gif"?12:24);if(ge==="gif"){Ua(Ie(b,1,240));return}Hf(Ie(b,12,60))},disabled:Mr})]}),ge==="gif"&&u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Resolution"}),u.jsx("select",{className:"control-select",value:String(be?Is:320),onChange:f=>hc(Ie(Number(f.target.value)||320,320,1080)),disabled:Mr,children:(be?C2:[320]).map(f=>u.jsx("option",{value:f,children:f},f))})]}),ge!=="gif"&&u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Resolution"}),u.jsx("select",{className:"control-select",value:String(be?Pa:320),onChange:f=>pl(Ie(Number(f.target.value)||320,320,2160)),disabled:Mr,children:(be?T2:[320]).map(f=>u.jsx("option",{value:f,children:f===2160?"4K (2160p)":`${f}p`},f))})]}),ge!=="gif"&&u.jsxs("label",{className:"export-video-field",children:[u.jsx("span",{className:"control-label",children:"Video Quality"}),u.jsx("select",{className:"control-select",value:Aa,onChange:f=>wo(f.target.value),disabled:Mr,children:M2.map(f=>u.jsx("option",{value:f.value,children:f.label},f.value))})]})]}),ge==="gif"&&!be&&u.jsx("div",{className:"save-status",children:"Free plan is limited to 320p GIF. Upgrade to Pro for up to 1080p."}),ge!=="gif"&&!be&&u.jsx("div",{className:"save-status",children:"Free plan is limited to 320p MP4. Upgrade to Pro for up to 4K."}),u.jsxs("div",{className:"export-popover-actions",children:[!be&&u.jsx("button",{type:"button",className:"export-copy export-copy-publish",onClick:()=>Fn(ge==="gif"?"Upgrade to Pro to unlock up to 1080p GIF export.":"Upgrade to Pro to unlock up to 4K MP4 export.",{syncRoute:!0}),children:"PWNED ✓"}),u.jsx("button",{type:"button",className:"export-copy",disabled:Mr,onClick:()=>{ge==="gif"?jh():Oh()},children:Mr?"EXPORTING...":ge==="gif"?"EXPORT GIF":"EXPORT MP4"})]}),gc&&u.jsx("div",{className:"save-status",children:gc})]}):null]}),u.jsxs("div",{className:"footer-actions",children:[u.jsx("button",{className:`action-circle interactive ${_e?"is-active":""}`,onClick:()=>{Ke("Sign in to access presets.")&&(ue(!1),et(!1),Pn(!1),xt(!1),Qe(f=>!f))},children:"PRESETS"}),u.jsx("button",{className:"action-circle interactive",onClick:mh,children:"RANDOM"}),u.jsx("button",{className:`action-circle interactive ${fe?"is-active":""}`,onClick:()=>{Ke("Sign in to access export.")&&(Qe(!1),et(!1),Pn(!1),xt(!1),Ln(),ue(f=>!f))},children:"EXPORT"})]})]})]})]}),ar&&_i&&Rt&&u.jsx("div",{className:"admin-users-modal-backdrop interactive",role:"presentation",onClick:_c,children:u.jsxs("div",{className:"admin-users-modal interactive",role:"dialog","aria-modal":"true","aria-label":"Manage users",onClick:f=>f.stopPropagation(),children:[u.jsxs("div",{className:"export-popover-head",children:[u.jsx("span",{children:"Manage Users"}),u.jsx("button",{type:"button",className:"export-close",onClick:_c,children:"CLOSE"})]}),u.jsx("p",{className:"export-popover-note",children:"Admin-only controls. Change user plans between Free and Pro."}),u.jsx("p",{className:"admin-users-total",children:Xe||mn&&fi===null?"Total users: ...":fi===null?"Total users: —":`Total users: ${fi.toLocaleString()}`}),u.jsxs("div",{className:"admin-users-toolbar",children:[u.jsxs("label",{className:"admin-users-search",children:[u.jsx("span",{className:"control-label",children:"Search"}),u.jsx("input",{className:"control-text",type:"text",value:Ct,onChange:f=>jt(f.target.value),placeholder:"Email, name, or user id"})]}),u.jsx("div",{className:"admin-users-toolbar-actions",children:u.jsx("button",{type:"button",className:"export-copy",disabled:mn,onClick:()=>{Ni(Wi)},children:mn?"LOADING...":"REFRESH"})})]}),u.jsxs("div",{className:"admin-users-pagination-row",children:[u.jsx("button",{type:"button",className:"export-copy",disabled:mn||Wi<=1,onClick:()=>{Ni(Math.max(1,Wi-1))},children:"PREV"}),u.jsxs("span",{className:"save-preset-page-label",children:["PAGE ",Wi]}),u.jsx("button",{type:"button",className:"export-copy",disabled:mn||!qi,onClick:()=>{Ni(Wi+1)},children:"NEXT"})]}),u.jsx("div",{className:"admin-users-list","aria-busy":mn,children:mn?u.jsx("div",{className:"gallery-empty",children:"Loading users..."}):Co.length===0?u.jsx("div",{className:"gallery-empty",children:"No users found."}):Co.map(f=>{const b=String(f?.id||""),S=f?.plan==="pro"?"pro":"free",T=rt===b;return u.jsxs("div",{className:"admin-users-row",children:[u.jsxs("div",{className:"admin-users-row-meta",children:[u.jsx("div",{className:"admin-users-row-name",children:String(f?.display_name||"User")}),u.jsx("div",{className:"admin-users-row-email",children:String(f?.email||"")}),u.jsx("div",{className:"admin-users-row-id",children:b})]}),u.jsxs("div",{className:"admin-users-row-actions",children:[u.jsx("button",{type:"button",className:`export-copy admin-plan-button ${S==="free"?"is-selected":""}`,disabled:T||rt.length>0||S==="free",onClick:()=>{No(b,"free")},children:"FREE"}),u.jsx("button",{type:"button",className:`export-copy admin-plan-button ${S==="pro"?"is-selected":""}`,disabled:T||rt.length>0||S==="pro",onClick:()=>{No(b,"pro")},children:"PRO"})]})]},b)})}),hi&&u.jsx("div",{className:"save-status",children:hi})]})}),_t&&u.jsxs("div",{className:`login-modal-backdrop interactive ${dn?"is-closing":""}`,role:"presentation",onPointerDown:xc,children:[u.jsxs("div",{className:"login-modal-webgl-wrap","aria-hidden":"true",children:[u.jsx("div",{className:"login-modal-webgl-gradient"}),u.jsx(ep,{className:"login-modal-webgl-canvas"})]}),u.jsx("div",{className:"login-modal-dither-layer","aria-hidden":"true"}),u.jsx("div",{className:"login-modal-shell interactive",role:"dialog","aria-modal":"true","aria-label":"Sign in",onClick:f=>f.stopPropagation(),children:u.jsxs("div",{ref:Bt,className:`login-modal-card interactive ${oi?"is-flash-active":""}`,children:[u.jsx(ua,{variant:"modal"}),u.jsxs("div",{className:"login-modal-head-row",children:[u.jsx("span",{className:"login-modal-kicker login-stagger-item",style:En(0),children:"Sign In"}),u.jsxs("button",{type:"button",className:"export-close login-close login-stagger-item",style:En(1),onClick:Ln,children:[u.jsx(ua,{}),"CLOSE"]})]}),u.jsx("p",{className:"login-modal-title login-stagger-item",style:En(2),"aria-label":Dd,children:u.jsx("span",{className:"login-title-typewriter",children:bu})}),u.jsx("p",{className:"login-modal-subtitle login-stagger-item",style:En(3),children:us?"Set a new password to finish account recovery.":Uu?"Enter your email and we will send a password reset link.":"Use Google or your email and password to access all features."}),!us&&!Uu&&u.jsxs(u.Fragment,{children:[u.jsxs("button",{type:"button",className:"export-copy login-google-button login-stagger-item",style:En(4),disabled:bt,onClick:()=>{Vs()},children:[u.jsx(ua,{}),u.jsxs("span",{className:"login-action-content",children:[u.jsx(R_,{}),u.jsx("span",{children:"CONTINUE WITH GOOGLE"})]})]}),u.jsx("div",{className:"login-divider login-stagger-item",style:En(5),role:"separator","aria-label":"Or continue with email",children:u.jsx("span",{children:"OR"})}),u.jsxs("div",{className:"tab-buttons login-auth-tabs",role:"tablist","aria-label":"Email authentication mode",children:[u.jsxs("button",{type:"button",role:"tab","aria-selected":en==="signin",className:`login-stagger-item ${en==="signin"?"active":""}`,style:En(6),onClick:()=>{pt("signin"),Le("")},children:[u.jsx(ua,{}),"Sign In"]}),u.jsxs("button",{type:"button",role:"tab","aria-selected":en==="signup",className:`login-stagger-item ${en==="signup"?"active":""}`,style:En(7),onClick:()=>{pt("signup"),Le("")},children:[u.jsx(ua,{}),"Sign Up"]})]})]}),u.jsxs("label",{className:"export-video-field login-stagger-item",style:En(8),children:[u.jsx("span",{className:"control-label",children:"Email"}),u.jsx("input",{className:"control-text",type:"email",autoComplete:"email",placeholder:"you@example.com",value:tr,onChange:f=>ha(f.target.value)})]}),Uu?u.jsxs(u.Fragment,{children:[u.jsxs("button",{type:"button",className:"export-copy login-email-submit login-stagger-item",style:En(13),disabled:bt,onClick:()=>{hs()},children:[u.jsx(ua,{}),"SEND RESET EMAIL"]}),u.jsxs("button",{type:"button",className:"export-close login-secondary-button login-stagger-item",style:En(14),disabled:bt,onClick:()=>{pt("signin"),Le("")},children:[u.jsx(ua,{}),"BACK TO SIGN IN"]})]}):u.jsxs(u.Fragment,{children:[u.jsxs("label",{className:"export-video-field login-stagger-item",style:En(10),children:[u.jsxs("div",{className:"login-password-label-row",children:[u.jsx("span",{className:"control-label",children:us?"New Password":"Password"}),en==="signin"&&u.jsx("button",{type:"button",className:"login-link-button login-stagger-item",style:En(11),disabled:bt,onClick:()=>{pt("forgot"),In(""),Le("")},children:"Forgot password?"})]}),u.jsx("input",{className:"control-text",type:"password",autoComplete:us||en==="signup"?"new-password":"current-password",placeholder:us?"Enter your new password":"Enter your password",value:Sr,onChange:f=>In(f.target.value)})]}),u.jsxs("button",{type:"button",className:"export-copy login-email-submit login-stagger-item",style:En(13),disabled:bt,onClick:()=>{us?zu():dh()},children:[u.jsx(ua,{}),us?"UPDATE PASSWORD":u.jsxs("span",{className:"login-action-content",children:[u.jsx(N_,{}),u.jsx("span",{children:en==="signup"?"SIGN UP WITH EMAIL":"SIGN IN WITH EMAIL"})]})]}),us&&u.jsxs("button",{type:"button",className:"export-close login-secondary-button login-stagger-item",style:En(14),disabled:bt,onClick:()=>{pt("signin"),Le("")},children:[u.jsx(ua,{}),"BACK TO SIGN IN"]})]}),u.jsxs("p",{className:"login-modal-legal login-stagger-item",style:En(15),children:["By continuing, you agree to our"," ",u.jsx("button",{type:"button",className:"login-legal-link-button",onClick:()=>wl("terms"),children:"Terms of Service"})," ","and"," ",u.jsx("button",{type:"button",className:"login-legal-link-button",onClick:()=>wl("privacy"),children:"Privacy Policy"}),"."]}),Rn&&u.jsx("div",{className:"save-status login-stagger-item",style:En(16),children:Rn})]})}),Ei&&u.jsx("div",{className:"login-legal-window-layer interactive",role:"presentation",children:Fy.map((f,b)=>{if(!ye[f])return null;const S=Sf[f]||Sf.terms,T=Re[f]||{x:24,y:24},C=f==="terms"?ct:Si,j=li===f;return u.jsxs("section",{ref:C,className:`login-legal-window interactive ${j?"is-dragging":""}`,style:{left:`${Math.round(T.x)}px`,top:`${Math.round(T.y)}px`,zIndex:1+b},onClick:I=>I.stopPropagation(),children:[u.jsxs("header",{className:"login-legal-window-head",onPointerDown:I=>Ao(f,I),children:[u.jsx("span",{className:"login-modal-kicker",children:S.title}),u.jsxs("button",{type:"button",className:"export-close login-legal-window-close",onPointerDown:I=>I.stopPropagation(),onClick:()=>Xr(f),children:[u.jsx(ua,{}),"CLOSE"]})]}),u.jsx("div",{className:"login-legal-window-body",children:u.jsx("iframe",{title:`${S.title} window`,src:S.url,className:"login-legal-window-frame"})})]},f)})})]}),fo&&u.jsxs("div",{className:"pricing-modal-backdrop interactive",role:"presentation",onClick:Ya,children:[u.jsxs("div",{className:"login-modal-webgl-wrap","aria-hidden":"true",children:[u.jsx("div",{className:"login-modal-webgl-gradient"}),u.jsx(ep,{className:"login-modal-webgl-canvas"})]}),u.jsx("div",{className:"login-modal-dither-layer","aria-hidden":"true"}),u.jsx("div",{className:"pricing-modal-shell interactive",role:"dialog","aria-modal":"true","aria-label":"Pricing",onClick:f=>f.stopPropagation(),children:u.jsxs("div",{className:"pricing-modal-card interactive",children:[u.jsx(ua,{variant:"modal"}),u.jsxs("div",{className:"login-modal-head-row",children:[u.jsx("span",{className:"login-modal-kicker",children:"Pricing"}),u.jsxs("button",{type:"button",className:"export-close login-close",onClick:Ya,children:[u.jsx(ua,{}),"CLOSE"]})]}),u.jsx("p",{className:"login-modal-title pricing-title",children:"Unlock Pro"}),u.jsx("p",{className:"login-modal-subtitle pricing-subtitle",children:"One-time payment. No subscription."}),u.jsxs("div",{className:"pricing-grid",children:[u.jsxs("section",{className:"pricing-plan pricing-plan-free",children:[u.jsx("h3",{children:"Free"}),u.jsx("p",{className:"pricing-plan-price",children:"$0"}),u.jsxs("ul",{children:[u.jsx("li",{children:"ASCII editor controls"}),u.jsx("li",{children:"Watermark on exports"}),u.jsx("li",{children:"Some export options, max 720p"}),u.jsx("li",{children:"Read-only library browsing"}),u.jsx("li",{children:"Import 1mb image/video"})]})]}),u.jsxs("section",{className:"pricing-plan pricing-plan-pro",children:[u.jsx("h3",{children:"Pro"}),u.jsx("p",{className:"pricing-plan-price",children:op}),u.jsx("ul",{children:Hy.map(f=>u.jsx("li",{children:f},f))})]})]}),u.jsxs("section",{className:"pricing-faq",children:[u.jsx("h4",{children:"FAQ"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("strong",{children:"What are source upload limits?"}),u.jsx("span",{children:"Free users can upload up to 1MB per image/video source. Pro users can upload up to 10MB."})]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Is Pro a subscription?"}),u.jsxs("span",{children:["No. Pro is a one-time payment of ",op,"."]})]}),u.jsxs("li",{children:[u.jsx("strong",{children:"What happens if I exceed the limit?"}),u.jsx("span",{children:"The source file will be rejected and you’ll see a limit message before processing starts."})]})]})]}),u.jsxs("div",{className:"pricing-actions",children:[be?u.jsxs("button",{type:"button",className:"export-copy pricing-upgrade-button",disabled:!0,children:[u.jsx(ua,{}),"PRO ACTIVE"]}):u.jsxs("button",{type:"button",className:"export-copy pricing-upgrade-button",onClick:()=>{uh()},disabled:Se,children:[u.jsx(ua,{}),Se?"REDIRECTING...":`UPGRADE TO PRO - ${op.toUpperCase()}`]}),u.jsxs("button",{type:"button",className:"export-close pricing-cancel-button",onClick:Ya,children:[u.jsx(ua,{}),"CONTINUE FREE"]})]}),gt&&u.jsx("div",{className:"save-status",children:gt})]})})]}),Ye&&u.jsxs("div",{className:"pricing-modal-backdrop interactive pro-success-backdrop",role:"presentation",onClick:Ti,children:[u.jsxs("div",{className:"login-modal-webgl-wrap","aria-hidden":"true",children:[u.jsx("div",{className:"login-modal-webgl-gradient"}),u.jsx(ep,{className:"login-modal-webgl-canvas"})]}),u.jsx("div",{className:"login-modal-dither-layer","aria-hidden":"true"}),u.jsx("div",{className:"pro-success-modal-shell interactive",role:"dialog","aria-modal":"true","aria-label":"ГОШКРЯК UNLIMITED",onClick:f=>f.stopPropagation(),children:u.jsxs("div",{className:"pro-success-modal-card interactive",children:[u.jsx(ua,{variant:"modal"}),u.jsx("div",{className:"pro-success-confetti-layer","aria-hidden":"true",children:To.map(f=>u.jsx("span",{className:"pro-success-confetti-piece",style:{"--confetti-left":`${f.left}%`,"--confetti-delay":`${f.delay}ms`,"--confetti-duration":`${f.duration}ms`,"--confetti-rotate":`${f.rotate}deg`,"--confetti-hue":String(f.hue),"--confetti-size":`${f.size}px`,"--confetti-drift":`${f.drift}px`}},f.id))}),u.jsxs("div",{className:"login-modal-head-row",children:[u.jsx("span",{className:"login-modal-kicker",children:"Success"}),u.jsxs("button",{type:"button",className:"export-close login-close",onClick:Ti,children:[u.jsx(ua,{}),"CLOSE"]})]}),u.jsx("p",{className:"login-modal-title pricing-title pro-success-title",children:"Pro Unlocked"}),u.jsx("p",{className:"login-modal-subtitle pricing-subtitle pro-success-subtitle",children:"Payment confirmed. Your Pro features are now active."}),u.jsx("div",{className:"pro-success-body",children:u.jsx("ul",{children:Hy.map(f=>u.jsx("li",{children:f},`success-${f}`))})}),u.jsx("div",{className:"pricing-actions",children:u.jsxs("button",{type:"button",className:"export-copy pricing-upgrade-button pro-success-button",onClick:Ti,children:[u.jsx(ua,{}),"AWESOME"]})})]})})]})]})}Xb.createRoot(document.getElementById("root")).render(u.jsx(x.StrictMode,{children:u.jsx(G_,{})}));
