"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[453],{1748:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var i=t(4270),c=t(3957),s=t(3433),r=t(9439),a=t(2791),l=t(1087),u=t(4304),o=t(9613),m=t(3394),d=t(184),f=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],i=e[1],c=(0,a.useState)(!1),f=(0,r.Z)(c,2),h=f[0],x=f[1],j=(0,a.useState)(0),_=(0,r.Z)(j,2),v=_[0],g=_[1],Z=(0,a.useState)(!1),b=(0,r.Z)(Z,2),p=b[0],N=b[1],k=(0,u.Z)(),C=k.loading,S=k.error,w=k.getAllComics;(0,a.useEffect)((function(){y(v,!0)}),[]);var y=function(n,e){x(!e),w(n).then(q)},q=function(n){var e=!1;n.length<8&&(e=!0),i((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(n))})),x((function(n){return!1})),g((function(n){return n+8})),N((function(n){return e}))};var A=function(n){var e=n.map((function(n,e){return(0,d.jsx)("li",{className:"comics__item",tabIndex:0,children:(0,d.jsxs)(l.rU,{to:"/comics/".concat(n.id),children:[(0,d.jsx)("img",{src:n.thumbnail,alt:n.title,className:"comics__item-img"}),(0,d.jsx)("div",{className:"comics__item-name",children:n.title}),(0,d.jsx)("div",{className:"comics__item-price",children:n.price})]})},e)}));return(0,d.jsx)("ul",{className:"comics__grid",children:e})}(t),E=S?(0,d.jsx)(o.Z,{}):null,F=C&&!h?(0,d.jsx)(m.Z,{}):null;return(0,d.jsxs)("div",{className:"comics__list",children:[E,F,A,(0,d.jsx)("button",{className:"button button__main button__long",disabled:h,style:{display:p?"none":""},onClick:function(){return y(v)},children:(0,d.jsx)("div",{className:"inner",children:"load more"})})]})},h=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i.q,{children:[(0,d.jsx)("meta",{name:"description",content:"Page with list of comics"}),(0,d.jsx)("title",{children:"Comics page"})]}),(0,d.jsx)(c.Z,{}),(0,d.jsx)(f,{})]})}}}]);
//# sourceMappingURL=453.818e5e84.chunk.js.map