var p={exports:{}},r={},u=React;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=u,f=Symbol.for("react.element"),R=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,v=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function d(t,e,s){var o,n={},a=null,m=null;s!==void 0&&(a=""+s),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(m=e.ref);for(o in e)h.call(e,o)&&!y.hasOwnProperty(o)&&(n[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)n[o]===void 0&&(n[o]=e[o]);return{$$typeof:f,type:t,key:a,ref:m,props:n,_owner:v.current}}r.Fragment=R;r.jsx=d;r.jsxs=d;p.exports=r;var l=p.exports,c={},O=ReactDOM,i=O;c.createRoot=i.createRoot,c.hydrateRoot=i.hydrateRoot;const E=()=>l.jsx("div",{children:"ComponentOne"});function x(){class t extends HTMLElement{constructor(){super()}connectedCallback(){this.mountPoint=document.createElement("div"),this.attachShadow({mode:"open"}).appendChild(this.mountPoint),c.createRoot(this.mountPoint).render(l.jsx(E,{}))}}t.WebcomponentName="component-one",window.customElements.get(t.WebcomponentName)||window.customElements.define(t.WebcomponentName,t)}x();
