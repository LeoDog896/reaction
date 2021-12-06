var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let m;function $(t){m=t}const b=[],y=[],x=[],w=[],_=Promise.resolve();let k=!1;function v(t){x.push(t)}let E=!1;const N=new Set;function O(){if(!E){E=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];$(e),A(e.$$)}for($(null),b.length=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];N.has(e)||(N.add(e),e())}x.length=0}while(b.length);for(;w.length;)w.pop()();k=!1,E=!1,N.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const W=new Set;function T(t,e){-1===t.$$.dirty[0]&&(b.push(t),k||(k=!0,_.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(c,l,i,s,a,f,d,h=[-1]){const p=m;$(c);const g=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(p?p.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:l.target||p.$$.root};d&&d(g.root);let b=!1;if(g.ctx=i?i(c,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&a(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&T(c,t)),e})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();l.intro&&((y=c.$$.fragment)&&y.i&&(W.delete(y),y.i(x))),function(t,n,c,l){const{fragment:i,on_mount:u,on_destroy:s,after_update:a}=t.$$;i&&i.m(n,c),l||v((()=>{const n=u.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(v)}(c,l.target,l.anchor,l.customElement),O()}var y,x;$(p)}function D(t,e,n){const o=t.slice();return o[11]=e[n],o[13]=n,o}function I(t){let e,n,o,r,c,f,g=t[11]/1e3+"";function m(){return t[6](t[13])}return{c(){e=s("span"),n=a(g),o=a("s "),r=s("span"),r.textContent="(x)",h(r,"class","clickable svelte-fr9lst"),h(e,"class","time svelte-fr9lst")},m(t,u){i(t,e,u),l(e,n),l(e,o),l(e,r),c||(f=d(r,"click",m),c=!0)},p(e,o){t=e,1&o&&g!==(g=t[11]/1e3+"")&&p(n,g)},d(t){t&&u(e),c=!1,f()}}}function L(t){let e,n,o,r,c=t[0].reduce(G)/t[0].length/1e3+"";return{c(){e=s("span"),n=a("~"),o=a(c),r=a("s"),h(e,"class","right svelte-fr9lst")},m(t,c){i(t,e,c),l(e,n),l(e,o),l(e,r)},p(t,e){1&e&&c!==(c=t[0].reduce(G)/t[0].length/1e3+"")&&p(o,c)},d(t){t&&u(e)}}}function j(e){let n,r,c,m,$,b,y,x,w=e[1].text+"",_=e[0],k=[];for(let t=0;t<_.length;t+=1)k[t]=I(D(e,_,t));let v=e[0].length>1&&L(e);return{c(){n=s("main"),r=s("button"),c=a(w),m=f(),$=s("div");for(let t=0;t<k.length;t+=1)k[t].c();b=f(),v&&v.c(),g(r,"background-color",e[1].color),h(r,"class","svelte-fr9lst"),h($,"id","dates"),h($,"class","svelte-fr9lst")},m(t,o){i(t,n,o),l(n,r),l(r,c),l(n,m),l(n,$);for(let t=0;t<k.length;t+=1)k[t].m($,null);l($,b),v&&v.m($,null),y||(x=[d(window,"keydown",e[5]),d(r,"click",e[3])],y=!0)},p(t,[e]){if(2&e&&w!==(w=t[1].text+"")&&p(c,w),2&e&&g(r,"background-color",t[1].color),5&e){let n;for(_=t[0],n=0;n<_.length;n+=1){const o=D(t,_,n);k[n]?k[n].p(o,e):(k[n]=I(o),k[n].c(),k[n].m($,b))}for(;n<k.length;n+=1)k[n].d(1);k.length=_.length}t[0].length>1?v?v.p(t,e):(v=L(t),v.c(),v.m($,null)):v&&(v.d(1),v=null)},i:t,o:t,d(t){t&&u(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(k,t),v&&v.d(),y=!1,o(x)}}}const G=(t,e)=>t+e;function H(t,e,n){let o;var r;!function(t){t.WAITING="#42a1f5",t.HOLD="#f5da42",t.NOW="#15eb47"}(r||(r={}));let c,l=[];function i(t){n(0,l=[...l.slice(0,t),...l.slice(t+1)])}const u={waiting:{color:r.WAITING,text:"Click to measure reaction speed"},hold:{color:r.HOLD,text:"Wait..."},now:{color:r.NOW,text:"NOW!"}};let s="waiting";function a(){switch(s){case"waiting":n(4,s="hold"),setTimeout((()=>{n(4,s="now"),c=Date.now()}),(t=3e3,e=6e3,Math.random()*(e-t)+t));break;case"now":n(0,l=[...l,Date.now()-c]),c=void 0,n(4,s="waiting")}var t,e}return t.$$.update=()=>{16&t.$$.dirty&&n(1,o=u[s])},[l,o,i,a,s,t=>{" "!=t.key&&"Enter"!=t.key||a()},t=>i(t)]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),C(this,t,H,j,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
