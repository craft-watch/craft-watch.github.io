(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"FdL+":function(e,t,n){"use strict";var r=n("rePB"),a=n("q1tI"),c=n.n(a),i=n("xG9w"),s=n("YtlM"),o=c.a.createElement,l=function(e){return o("div",{className:"section"},o("h4",null,e.title),i.a.map(e.selections.selections,(function(t,n){return o("label",{key:n,className:"selectable"},n,o("input",{type:"checkbox",checked:t,onChange:function(){return e.selections.toggle(n)}}),o("span",{className:"checkmark"},t?"\u2713":""))})),i.a.size(e.selections.selections)>1&&o("div",null,o("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!0)}},"All"),o("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!1)}},"None")))},u=function(e){var t=Object(a.useState)(!1),n=t[0],r=t[1];return n?o("div",{className:"menu"},o("div",{className:"menu-button"},o("span",{onClick:function(){return r(!1)}},"\xd7")),o("div",{className:"content"},e.children),o("div",{className:"info"},"Data captured: ",e.capturedAt.local().format("lll"),".")):o("div",{className:"menu-hamburger"},o("div",{onClick:function(){return r(!0)}},"Refine search ..."))},m=n("YFqc"),f=n.n(m),d=n("AgaG"),p=n("e/f6"),b=c.a.createElement,y=c.a.createElement,v=function(e){var t=e.datum;return y(f.a,{href:"/".concat(Object(p.b)(t.brewery.shortName))},y("a",null,t.brewery.shortName))},w=function(e){var t=e.datum;return y("a",{href:t.url},y("img",{alt:"",src:t.thumbnailUrl,width:"100px",height:"100px"}),t.available||y("div",{className:"sold-out"},"Out of stock"))},O=function(e){var t=e.datum,n=t.new&&!t.brewery.new,r=t.new&&t.brewery.new,a=Object(p.a)(t).format===s.a.Keg,c=!a&&i.a.any(i.a.rest(t.offers),(function(e){return e.format===s.a.Keg})),o=t.mixed;return y("div",{className:"tooltip"},y("a",{className:"item-link",href:t.url},t.name),y("p",{className:"summary"},t.summary),y("p",{className:"summary"},n&&y("span",{className:"pill new"},"NEW !!!"),r&&y("span",{className:"pill just-added"},"Just added"),a&&y("span",{className:"pill keg"},"Minikeg"),c&&y("span",{className:"pill keg"},"Minikeg available"),o&&y("span",{className:"pill mixed"},"Mixed case")),void 0!==t.desc&&y(j,{datum:t}))},g=function(e){var t=e.datum;return y(c.a.Fragment,null,void 0!==t.abv?"".concat(t.abv.toFixed(1),"%"):"?")},h=function(e){var t=e.datum;return y(c.a.Fragment,null,y(N,{offer:Object(p.a)(t)}),i.a.size(t.offers)>1&&y("details",null,y("summary",null,i.a.size(t.offers)-1," more"),i.a.map(i.a.rest(t.offers),(function(e,t){return y(N,{key:t,offer:e})}))))},N=function(e){var t=e.offer,n=P(t),r=E(t);return y("div",{className:"offer"},"\xa3",x(t)," ",y("span",{className:"summary hide-small"},"/ ",r),y("p",{className:"summary"},t.quantity>1?"".concat(t.quantity," \xd7 ").concat(null!==n&&void 0!==n?n:"".concat(r,"s")):n))},j=function(e){var t,n=e.datum;return y("span",{className:"tooltip-text hide-small",style:{display:"hidden"}},void 0!==n.desc&&(t=n.desc,i.a.map(t.split("\n"),(function(e,t){return b("p",{key:t},e)}))),y("div",{className:"disclaimer"},"\xa9 ",n.brewery.shortName))},k=function(e,t){var n=i.a.groupBy(e,(function(e){return e.categories[0]||"Other"}));return i.a.map(t.concat("Other"),(function(e){return{name:e,data:n[e]}}))},P=function(e){return void 0===e.sizeMl?void 0:e.sizeMl<1e3?"".concat(e.sizeMl," ml"):"".concat(e.sizeMl/1e3," litres")},E=function(e){switch(e.format){case s.a.Bottle:return"bottle";case s.a.Can:return"can";case s.a.Keg:return"keg";default:return"item"}},x=function(e){return B(e).toFixed(2).replace(/\.00/,"")},B=function(e){return e.totalPrice/e.quantity},M=function(e){return y(d.b,{sections:k(e.items,e.categories)},y(d.a,{render:v,name:"Brewery",className:"brewery",selector:function(e){return e.brewery}}),y(d.a,{render:w,className:"thumbnail"}),y(d.a,{render:O,name:"Name",className:"name",selector:function(e){return e.name}}),y(d.a,{render:g,name:"ABV",className:"hide-tiny",selector:function(e){return e.abv}}),y(d.a,{render:h,name:"Price",className:"price",selector:function(e){return B(Object(p.a)(e))}}))},D=c.a.createElement;function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e){return i.a.uniq(i.a.map(e,(function(e){return e.brewery.shortName})))},C=function(e){var t=function(e,t){return i.a.object(i.a.map(e,(function(e){return[e,t]})))},n=Object(a.useState)(t(e,!0)),r=n[0],c=n[1];return{selections:r,toggle:function(e){var t=S({},r);t[e]=!t[e],c((function(t){var n=S({},t);return n[e]=!n[e],n}))},setGlobal:function(e){c((function(n){return t(i.a.keys(n),e)}))},setKeys:function(e){c(t(e,!0))}}};t.a=function(e){var t=e.inventory,n=C(["Out of stock"]),r=C(F(t.items)),o=C(["Regular","Mixed case","Minikeg"]);Object(a.useEffect)((function(){return r.setKeys(F(t.items))}),[t.items]);var m=function(e){return r.selections[e.brewery.shortName]},f=function(e){var t=Object(p.a)(e).format===s.a.Keg;return o.selections.Regular&&!t&&!e.mixed||o.selections["Mixed case"]&&e.mixed||o.selections.Minikeg&&t},d=function(e){return n.selections["Out of stock"]||e.available};return D(c.a.Fragment,null,D("div",{className:"how-to-use"},"Click on an image to go to the brewery shop!"),D(u,{capturedAt:t.capturedAt},D(l,{title:"Formats",selections:o}),D(l,{title:"Availability",selections:n}),i.a.size(r.selections)>1&&D(l,{title:"Breweries",selections:r})),D("main",null,D(M,{items:t.items.filter((function(e){return m(e)&&f(e)&&d(e)})),categories:t.categories})))}},X5zB:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return y}));var r=n("rePB"),a=n("q1tI"),c=n.n(a),i=n("zRbM"),s=n("BtBB"),o=n("IP2g"),l=n("wHSu"),u=n("8tEE"),m=n("FdL+"),f=n("bYa2"),d=c.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=!0;t.default=function(e){var t=e.brewery,n=e.items;return d(i.a,{title:t.name,titleSuffix:d(f.a,{breweryShortName:t.shortName}),desc:"Daily updates of beer prices from ".concat(t.name),longDesc:d(c.a.Fragment,null,d("p",null,"Daily updates of beer prices from ",t.name,", a brewery based in ",t.location,"."),d("p",null,"Every item here can be delivered directly to your doorstep from their online shop."),d("p",{className:"contact"},d("a",{href:t.websiteUrl},d(o.a,{icon:l.b})," ",t.websiteUrl)),void 0!==t.twitterHandle&&d("p",{className:"contact"},d("a",{href:"https://twitter.com/".concat(t.twitterHandle)},d(o.a,{icon:u.b})," @",t.twitterHandle))),breweries:s.a.breweries},d(m.a,{inventory:b(b({},s.a),{},{items:n})}))}},YtlM:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Bottle="BOTTLE",e.Can="CAN",e.Keg="KEG"}(r||(r={}))},nPOr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return n("X5zB")}])}},[["nPOr",1,2,6,5,4,0,3,7,8]]]);