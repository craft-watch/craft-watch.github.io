(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7ECC":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new",function(){return n("8Zr7")}])},"8Zr7":function(e,t,n){"use strict";n.r(t);var r=n("rePB"),a=n("q1tI"),i=n.n(a),c=n("xG9w"),s=n("zRbM"),o=n("BtBB"),l=n("FdL+"),u=i.a.createElement;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){return u(s.a,{title:"New beers",desc:"Daily updates and prices of new beers from across UK brewery online shops",longDesc:u(i.a.Fragment,null,u("p",null,"These are the latest beer and cider releases from breweries, updated daily!"),u("p",null,"Every item here can be delivered directly to your doorstep from the brewery's online shop.")),breweries:o.a.breweries},u(l.a,{inventory:f(f({},o.a),{},{items:c.a.filter(o.a.items,(function(e){return e.new&&!e.brewery.new}))})}))}},"FdL+":function(e,t,n){"use strict";var r=n("rePB"),a=n("q1tI"),i=n.n(a),c=n("xG9w"),s=n("YtlM"),o=i.a.createElement,l=function(e){return o("div",{className:"section"},o("h4",null,e.title),c.a.map(e.selections.selections,(function(t,n){return o("label",{key:n,className:"selectable"},n,o("input",{type:"checkbox",checked:t,onChange:function(){return e.selections.toggle(n)}}),o("span",{className:"checkmark"},t?"\u2713":""))})),c.a.size(e.selections.selections)>1&&o("div",null,o("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!0)}},"All"),o("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!1)}},"None")))},u=function(e){var t=Object(a.useState)(!1),n=t[0],r=t[1];return n?o("div",{className:"menu"},o("div",{className:"menu-button"},o("span",{onClick:function(){return r(!1)}},"\xd7")),o("div",{className:"content"},e.children),o("div",{className:"info"},"Data captured: ",e.capturedAt.local().format("lll"),".")):o("div",{className:"menu-hamburger"},o("div",{onClick:function(){return r(!0)}},"Refine search ..."))},m=n("YFqc"),f=n.n(m),p=n("AgaG"),d=n("e/f6"),b=i.a.createElement,y=i.a.createElement,v=function(e){var t=e.item;return y(f.a,{href:"/".concat(Object(d.b)(t.brewery.shortName))},y("a",null,t.brewery.shortName))},w=function(e){var t=e.item;return y("a",{href:t.url},y("img",{alt:"",src:t.thumbnailUrl,width:"100px",height:"100px"}),t.available||y("div",{className:"sold-out"},"Out of stock"))},O=function(e){var t=e.item,n=t.new&&!t.brewery.new,r=t.new&&t.brewery.new,a=Object(d.a)(t).format===s.a.Keg,i=!a&&c.a.any(c.a.rest(t.offers),(function(e){return e.format===s.a.Keg})),o=t.mixed;return y("div",{className:"tooltip"},y("a",{className:"item-link",href:t.url},t.name),y("p",{className:"summary"},t.summary),y("p",{className:"summary"},n&&y("span",{className:"pill new"},"NEW !!!"),r&&y("span",{className:"pill just-added"},"Just added"),a&&y("span",{className:"pill keg"},"Minikeg"),i&&y("span",{className:"pill keg"},"Minikeg available"),o&&y("span",{className:"pill mixed"},"Mixed case")),void 0!==t.desc&&y(j,{item:t}))},g=function(e){var t=e.item;return y(i.a.Fragment,null,void 0!==t.abv?"".concat(t.abv.toFixed(1),"%"):"?")},h=function(e){var t=e.item;return y(i.a.Fragment,null,y(N,{offer:Object(d.a)(t)}),c.a.size(t.offers)>1&&y("details",null,y("summary",null,c.a.size(t.offers)-1," more"),c.a.map(c.a.rest(t.offers),(function(e,t){return y(N,{key:t,offer:e})}))))},N=function(e){var t=e.offer,n=P(t),r=E(t);return y("div",{className:"offer"},"\xa3",x(t)," ",y("span",{className:"summary hide-small"},"/ ",r),y("p",{className:"summary"},t.quantity>1?"".concat(t.quantity," \xd7 ").concat(null!==n&&void 0!==n?n:"".concat(r,"s")):n))},j=function(e){var t,n=e.item;return y("span",{className:"tooltip-text hide-small",style:{display:"hidden"}},void 0!==n.desc&&(t=n.desc,c.a.map(t.split("\n"),(function(e,t){return b("p",{key:t},e)}))),y("div",{className:"disclaimer"},"\xa9 ",n.brewery.shortName))},k=function(e,t){var n=c.a.groupBy(e,(function(e){return e.categories[0]||"Other"}));return c.a.map(t.concat("Other"),(function(e){return{name:e,data:n[e]}}))},P=function(e){return void 0===e.sizeMl?void 0:e.sizeMl<1e3?"".concat(e.sizeMl," ml"):"".concat(e.sizeMl/1e3," litres")},E=function(e){switch(e.format){case s.a.Bottle:return"bottle";case s.a.Can:return"can";case s.a.Keg:return"keg";default:return"item"}},x=function(e){return M(e).toFixed(2).replace(/\.00/,"")},M=function(e){return e.totalPrice/e.quantity},C=function(e){return y(p.b,{sections:k(e.items,e.categories)},y(p.a,{name:"Brewery",className:"brewery",render:function(e){return y(v,{item:e})},selector:function(e){return e.brewery}}),y(p.a,{className:"thumbnail",render:function(e){return y(w,{item:e})}}),y(p.a,{name:"Name",className:"name",render:function(e){return y(O,{item:e})},selector:function(e){return e.name}}),y(p.a,{name:"ABV",className:"hide-tiny",render:function(e){return y(g,{item:e})},selector:function(e){return e.abv}}),y(p.a,{name:"Price",className:"price",render:function(e){return y(h,{item:e})},selector:function(e){return M(Object(d.a)(e))}}))},B=i.a.createElement;function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var F=function(e){return c.a.uniq(c.a.map(e,(function(e){return e.brewery.shortName})))},z=function(e){var t=function(e,t){return c.a.object(c.a.map(e,(function(e){return[e,t]})))},n=Object(a.useState)(t(e,!0)),i=n[0],s=n[1];return{selections:i,toggle:function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i);t[e]=!t[e],s(t)},setGlobal:function(e){s(t(c.a.keys(i),e))},setKeys:function(e){s(t(e,!0))}}};t.a=function(e){var t=e.inventory,n=z(["Out of stock"]),r=z(F(t.items)),o=z(["Regular","Mixed case","Minikeg"]);Object(a.useEffect)((function(){return r.setKeys(F(t.items))}),[t.items]);var m=function(e){return r.selections[e.brewery.shortName]},f=function(e){var t=Object(d.a)(e).format===s.a.Keg;return o.selections.Regular&&!t&&!e.mixed||o.selections["Mixed case"]&&e.mixed||o.selections.Minikeg&&t},p=function(e){return n.selections["Out of stock"]||e.available};return B(i.a.Fragment,null,B("div",{className:"how-to-use"},"Click on an image to go to the brewery shop!"),B(u,{capturedAt:t.capturedAt},B(l,{title:"Formats",selections:o}),B(l,{title:"Availability",selections:n}),c.a.size(r.selections)>1&&B(l,{title:"Breweries",selections:r})),B("main",null,B(C,{items:t.items.filter((function(e){return m(e)&&f(e)&&p(e)})),categories:t.categories})))}},YtlM:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Bottle="BOTTLE",e.Can="CAN",e.Keg="KEG"}(r||(r={}))}},[["7ECC",1,2,6,5,0,3,4]]]);