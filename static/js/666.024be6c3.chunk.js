"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[666],{9613:function(e,r,n){n.d(r,{Z:function(){return c}});var a=n.p+"static/media/error.42292aa12b6bc303ce99.gif",t=n(184),c=function(){return(0,t.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"error img"})}},5999:function(e,r,n){n.r(r),n.d(r,{default:function(){return T}});var a=n(9439),t=n(2791),c=n(4270),s=n(4304),i=n(3394),o=n(9613),l=n.p+"static/media/mjolnir.61f31e1809f12183a524.png",u=n(184),h=function(e){var r=e.char,n=r.name,a=r.description,t=r.thumbnail,c=r.homepage,s=r.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(i={objectFit:"unset"}),(0,u.jsxs)("div",{className:"randomchar__block",children:[(0,u.jsx)("img",{src:t,style:i,alt:"Random character",className:"randomchar__img"}),(0,u.jsxs)("div",{className:"randomchar__info",children:[(0,u.jsx)("p",{className:"randomchar__name",children:n}),(0,u.jsx)("p",{className:"randomchar__descr",children:a}),(0,u.jsxs)("div",{className:"randomchar__btns",children:[(0,u.jsx)("a",{href:c,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"homepage"})}),(0,u.jsx)("a",{href:s,className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=function(){var e=(0,t.useState)({}),r=(0,a.Z)(e,2),n=r[0],c=r[1],d=(0,s.Z)(),m=d.loading,f=d.error,p=d.getCharacter,x=d.clearError;(0,t.useEffect)((function(){_()}),[]);var v=function(e){c(e)},_=function(){x();var e=Math.floor(400*Math.random()+1011e3);p(e).then(v)},j=f?(0,u.jsx)(o.Z,{}):null,b=m?(0,u.jsx)(i.Z,{}):null,g=m||f?null:(0,u.jsx)(h,{char:n});return(0,u.jsxs)("div",{className:"randomchar",children:[j,b,g,(0,u.jsxs)("div",{className:"randomchar__static",children:[(0,u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,u.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,u.jsx)("button",{onClick:_,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"try it"})}),(0,u.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})},m=n(3433),f=n(6983),p=n(5660),x=function(e){var r=(0,t.useState)([]),n=(0,a.Z)(r,2),c=n[0],l=n[1],h=(0,t.useState)(!1),d=(0,a.Z)(h,2),x=d[0],v=d[1],_=(0,t.useState)(210),j=(0,a.Z)(_,2),b=j[0],g=j[1],N=(0,t.useState)(!1),Z=(0,a.Z)(N,2),k=Z[0],y=Z[1],w=(0,s.Z)(),C=w.loading,S=w.error,E=w.getAllCharacters;(0,t.useEffect)((function(){F(b,!0)}),[]);var F=function(e,r){v(!r),E(e).then(T)},T=function(e){var r=!1;e.length<9&&(r=!0),l((function(r){return[].concat((0,m.Z)(r),(0,m.Z)(e))})),v((function(e){return!1})),g((function(e){return e+9})),y((function(e){return r}))},A=(0,t.useRef)([]),q=function(e){A.current.forEach((function(e){return e.classList.remove("char__item_selected")})),A.current[e].classList.add("char__item_selected")};var I=function(r){var n=r.map((function(r,n){var a={objectFit:"cover"};return r.thumbnail.includes("image_not_available")&&(a={objectFit:"unset"}),(0,u.jsx)(f.Z,{timeout:500,classNames:"char__item",children:(0,u.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return A.current[n]=e},onClick:function(){e.onCharSelected(r.id),q(n)},onKeyDown:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(r.id),q(n))},children:[(0,u.jsx)("img",{src:r.thumbnail,alt:r.name,style:a}),(0,u.jsx)("div",{className:"char__name",children:r.name})]},r.id)},r.id)}));return(0,u.jsx)("ul",{className:"char__grid",children:(0,u.jsx)(p.Z,{component:null,children:n})})}(c),B=S?(0,u.jsx)(o.Z,{}):null,L=C&&!x?(0,u.jsx)(i.Z,{}):null;return(0,u.jsxs)("div",{className:"char__list",children:[B,L,I,(0,u.jsx)("button",{className:"button button__main button__long",disabled:x,style:{display:k?"none":""},onClick:function(){return F(b)},children:(0,u.jsx)("div",{className:"inner",children:"load more"})})]})},v=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,u.jsxs)("div",{className:"skeleton",children:[(0,u.jsxs)("div",{className:"pulse skeleton__header",children:[(0,u.jsx)("div",{className:"pulse skeleton__circle"}),(0,u.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,u.jsx)("div",{className:"pulse skeleton__block"}),(0,u.jsx)("div",{className:"pulse skeleton__block"}),(0,u.jsx)("div",{className:"pulse skeleton__block"})]})]})},_=function(e){var r=e.char,n=r.name,a=r.description,t=r.thumbnail,c=r.homepage,s=r.wiki,i=r.comics,o={objectFit:"cover"};return t.includes("image_not_available")&&(o={objectFit:"unset"}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"char__basics",children:[(0,u.jsx)("img",{src:t,style:o,alt:n}),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"char__info-name",children:n}),(0,u.jsxs)("div",{className:"char__btns",children:[(0,u.jsx)("a",{href:c,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"homepage"})}),(0,u.jsx)("a",{href:s,className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,u.jsx)("div",{className:"char__descr",children:a}),(0,u.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,u.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics for this character",i.map((function(e,r){return(0,u.jsx)("li",{className:"char__comics-item",children:e.name},r)}))]})]})},j=function(e){var r=(0,t.useState)(null),n=(0,a.Z)(r,2),c=n[0],l=n[1],h=(0,s.Z)(),d=h.loading,m=h.error,f=h.getCharacter,p=h.clearError;(0,t.useEffect)((function(){x()}),[e.charId]);var x=function(){var r=e.charId;r&&(p(),f(r).then(j))},j=function(e){l(e)},b=c||d||m?null:(0,u.jsx)(v,{}),g=m?(0,u.jsx)(o.Z,{}):null,N=d?(0,u.jsx)(i.Z,{}):null,Z=d||m||!c?null:(0,u.jsx)(_,{char:c});return(0,u.jsxs)("div",{className:"char__info",children:[b,g,N,Z]})},b=n(5705),g=n(7670),N=n(1087),Z=function(){var e=(0,t.useState)(null),r=(0,a.Z)(e,2),n=r[0],c=r[1],i=(0,s.Z)(),l=i.error,h=i.loading,d=i.getCharacterByName,m=i.clearError,f=function(e){c(e)},p=l?(0,u.jsx)("div",{className:"char__search-critical-error",children:(0,u.jsx)(o.Z,{})}):null,x=n?n.length>0?(0,u.jsxs)("div",{className:"char__search-wrapper",children:[(0,u.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",n[0].name," page?"]}),(0,u.jsx)(N.rU,{to:"/characters/".concat(n[0].id),className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"To page"})})]}):(0,u.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,u.jsxs)("div",{className:"char__search-form",children:[(0,u.jsx)(b.J9,{initialValues:{charName:""},validationSchema:g.Ry({charName:g.Z_().required("This field is required")}),onSubmit:function(e){var r,n=e.charName;r=n,m(),d(r).then(f)},children:(0,u.jsxs)(b.l0,{children:[(0,u.jsx)("label",{className:"char__search-label",children:"Or find a character by name:"}),(0,u.jsxs)("div",{className:"char__search-wrapper",children:[(0,u.jsx)(b.gN,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,u.jsx)("button",{type:"submit",className:"button button__main",disabled:h,children:(0,u.jsx)("div",{className:"inner",children:"find"})})]}),(0,u.jsx)(b.Bc,{component:"div",className:"char__search-error",name:"charName"})]})}),x,p]})},k=n(5671),y=n(3144),w=n(136),C=n(7277),S=function(e){(0,w.Z)(n,e);var r=(0,C.Z)(n);function n(){var e;(0,k.Z)(this,n);for(var a=arguments.length,t=new Array(a),c=0;c<a;c++)t[c]=arguments[c];return(e=r.call.apply(r,[this].concat(t))).state={error:!1},e}return(0,y.Z)(n,[{key:"componentDidCatch",value:function(e,r){console.log(e,r),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,u.jsx)(o.Z,{}):this.props.children}}]),n}(t.Component),E=S,F=n.p+"static/media/vision.067d4ae1936d64a577ce.png",T=function(){var e=(0,t.useState)(null),r=(0,a.Z)(e,2),n=r[0],s=r[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c.q,{children:[(0,u.jsx)("meta",{name:"description",content:"Marvel information portal"}),(0,u.jsx)("title",{children:"Marvel information portal"})]}),(0,u.jsx)(E,{children:(0,u.jsx)(d,{})}),(0,u.jsxs)("div",{className:"char__content",children:[(0,u.jsx)(E,{children:(0,u.jsx)(x,{onCharSelected:function(e){s(e)}})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(E,{children:(0,u.jsx)(j,{charId:n})}),(0,u.jsx)(E,{children:(0,u.jsx)(Z,{})})]})]}),(0,u.jsx)("img",{className:"bg-decoration",src:F,alt:"vision"})]})}},4304:function(e,r,n){n.d(r,{Z:function(){return i}});var a=n(4165),t=n(5861),c=n(9439),s=n(2791),i=function(){var e=function(){var e=(0,s.useState)(!1),r=(0,c.Z)(e,2),n=r[0],i=r[1],o=(0,s.useState)(null),l=(0,c.Z)(o,2),u=l[0],h=l[1],d=(0,s.useCallback)(function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var n,t,c,s,o,l=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",t=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},i(!0),e.prev=4,e.next=7,fetch(r,{method:n,body:t,headers:c});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return o=e.sent,i(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),i(!1),h(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(r){return e.apply(this,arguments)}}(),[]);return{loading:n,error:u,request:d,clearError:(0,s.useCallback)((function(){return h(null)}),[])}}(),r=e.loading,n=e.error,i=e.request,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=4df5a79f3e7d26c68fa7625a98ad38d7",h=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var r,n,t=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:210,e.next=3,i("".concat(l,"characters?limit=9&offset=").concat(r,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(v));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("".concat(l,"characters/").concat(r,"?&").concat(u));case 2:return n=e.sent,e.abrupt("return",v(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var r,n,t=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:0,e.next=3,i("".concat(l,"comics?limit=8&offset=").concat(r,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(x));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("".concat(l,"comics/").concat(r,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",x(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("".concat(l,"characters?name=").concat(r,"&").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data.results.map(v));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),x=function(e){var r;return{id:e.id,title:e.title,price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"NOT AVAILABLE",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,pageCount:e.pageCount?"".concat(e.pageCount," pages"):"No information about the number of pages",description:e.description||"There is no description",language:(null===(r=e.textObjects[0])||void 0===r?void 0:r.language)||"en-us"}},v=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.length>10?e.comics.items.slice(0,10):e.comics.items}};return{loading:r,error:n,clearError:o,getAllCharacters:h,getCharacter:d,getCharacterByName:p,getAllComics:m,getComic:f}}}}]);
//# sourceMappingURL=666.024be6c3.chunk.js.map