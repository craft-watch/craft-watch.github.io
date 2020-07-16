(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/Eg9":function(e,t,r){"use strict";r.r(t);var n=r("rePB"),a=r("q1tI"),s=r.n(a),i=r("xG9w"),o=r("zRbM"),c=r("BtBB"),u=r("FdL+"),l=r("ehm3"),f=r("YFqc"),m=r.n(f),d=s.a.createElement;function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=Object(l.b)((function(e){return d(o.a,{title:"My favourites",desc:"Daily updates from my favourite breweries",longDesc:i.a.isEmpty(e.favourites.breweries)?d("p",null,"It looks like you haven't set any favourite breweries yet.  Visit the ",d(m.a,{href:"/breweries"},d("a",{className:"emphasise"},"A-Z page"))," to add some."):d("p",null,"This is a personalised view of your favourite breweries.  Add or remove breweries from the ",d(m.a,{href:"/breweries"},d("a",{className:"emphasise"},"A-Z page")),"."),breweries:c.a.breweries},d(u.a,{inventory:b(b({},c.a),{},{items:i.a.filter(c.a.items,(function(t){return e.favourites.breweries.includes(t.brewery.shortName)}))})}))}))},"FdL+":function(e,t,r){"use strict";var n=r("rePB"),a=r("q1tI"),s=r.n(a),i=r("xG9w"),o=r("YtlM"),c=s.a.createElement,u=function(e){return c("div",{className:"section"},c("h4",null,e.title),i.a.map(e.selections.selections,(function(t,r){return c("label",{key:r,className:"selectable"},r,c("input",{type:"checkbox",checked:t,onChange:function(){return e.selections.toggle(r)}}),c("span",{className:"checkmark"},t?"\u2713":""))})),i.a.size(e.selections.selections)>1&&c("div",null,c("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!0)}},"All"),c("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!1)}},"None")))},l=function(e){var t=Object(a.useState)(!1),r=t[0],n=t[1];return r?c("div",{className:"menu"},c("div",{className:"menu-button"},c("span",{onClick:function(){return n(!1)}},"\xd7")),c("div",{className:"content"},e.children),c("div",{className:"info"},"Data captured: ",e.capturedAt.local().format("lll"),".")):c("div",{className:"menu-hamburger"},c("div",{onClick:function(){return n(!0)}},"Refine search ..."))},f=r("AgaG"),m=r("e/f6"),d=s.a.createElement,p=r("qeRX"),b=s.a.createElement,v=function(e){var t=e.datum;return b(p.a,{shortName:t.brewery.shortName},t.brewery.shortName)},y=function(e){var t=e.datum;return b("a",{href:t.url},b("img",{alt:"",src:t.thumbnailUrl,width:"100px",height:"100px"}),t.available||b("div",{className:"sold-out"},"Out of stock"))},w=function(e){var t=e.datum,r=t.new&&!t.brewery.new,n=t.new&&t.brewery.new,a=Object(m.a)(t).format===o.a.Keg,s=!a&&i.a.any(i.a.rest(t.offers),(function(e){return e.format===o.a.Keg})),c=t.mixed;return b("div",{className:"tooltip"},b("a",{className:"item-link",href:t.url},t.name),b("p",{className:"summary"},t.summary),b("p",{className:"summary"},r&&b("span",{className:"pill new"},"NEW !!!"),n&&b("span",{className:"pill just-added"},"Just added"),a&&b("span",{className:"pill keg"},"Keg"),s&&b("span",{className:"pill keg"},"Keg available"),c&&b("span",{className:"pill mixed"},"Mixed case")),void 0!==t.desc&&b(N,{datum:t}))},g=function(e){var t=e.datum;return b(s.a.Fragment,null,void 0!==t.abv?"".concat(t.abv.toFixed(1),"%"):"?")},h=function(e){var t=e.datum;return b(s.a.Fragment,null,b(O,{offer:Object(m.a)(t)}),i.a.size(t.offers)>1&&b("details",null,b("summary",null,i.a.size(t.offers)-1," more"),i.a.map(i.a.rest(t.offers),(function(e,t){return b(O,{key:t,offer:e})}))))},O=function(e){var t=e.offer,r=k(t),n=P(t);return b("div",{className:"offer"},"\xa3",E(t)," ",b("span",{className:"summary hide-small"},"/ ",n),b("p",{className:"summary"},t.quantity>1?"".concat(t.quantity," \xd7 ").concat(null!==r&&void 0!==r?r:"".concat(n,"s")):r))},N=function(e){var t,r=e.datum;return b("span",{className:"tooltip-text hide-small",style:{display:"hidden"}},void 0!==r.desc&&(t=r.desc,i.a.map(t.split("\n"),(function(e,t){return d("p",{key:t},e)}))),b("div",{className:"disclaimer"},"\xa9 ",r.brewery.shortName))},j=function(e,t){var r=i.a.groupBy(e,(function(e){return e.categories[0]||"Other"}));return i.a.map(t.concat("Other"),(function(e){return{name:e,data:r[e]}}))},k=function(e){return void 0===e.sizeMl?void 0:e.sizeMl<1e3?"".concat(e.sizeMl," ml"):"".concat(e.sizeMl/1e3," litres")},P=function(e){switch(e.format){case o.a.Bottle:return"bottle";case o.a.Can:return"can";case o.a.Keg:return"keg";default:return"item"}},E=function(e){return x(e).toFixed(2).replace(/\.00/,"")},x=function(e){return e.totalPrice/e.quantity},B=function(e){return b(f.b,{sections:j(e.items,e.categories)},b(f.a,{render:v,name:"Brewery",className:"brewery",selector:function(e){return e.brewery}}),b(f.a,{render:y,className:"thumbnail"}),b(f.a,{render:w,name:"Name",className:"name",selector:function(e){return e.name}}),b(f.a,{render:g,name:"ABV",className:"hide-tiny",selector:function(e){return e.abv}}),b(f.a,{render:h,name:"Price",className:"price",selector:function(e){return x(Object(m.a)(e))}}))},A=s.a.createElement;function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e){return i.a.uniq(i.a.map(e,(function(e){return e.brewery.shortName})))},D=function(e){var t=function(e,t){return i.a.object(i.a.map(e,(function(e){return[e,t]})))},r=Object(a.useState)(t(e,!0)),n=r[0],s=r[1];return{selections:n,toggle:function(e){var t=S({},n);t[e]=!t[e],s((function(t){var r=S({},t);return r[e]=!r[e],r}))},setGlobal:function(e){s((function(r){return t(i.a.keys(r),e)}))},setKeys:function(e){s(t(e,!0))}}};t.a=function(e){var t=e.inventory,r=D(["Out of stock"]),n=D(C(t.items)),c=D(["Regular","Mixed case","Keg"]);Object(a.useEffect)((function(){return n.setKeys(C(t.items))}),[t.items]);var f=function(e){return n.selections[e.brewery.shortName]},d=function(e){var t=Object(m.a)(e).format===o.a.Keg;return c.selections.Regular&&!t&&!e.mixed||c.selections["Mixed case"]&&e.mixed||c.selections.Keg&&t},p=function(e){return r.selections["Out of stock"]||e.available};return A(s.a.Fragment,null,A("div",{className:"how-to-use"},"Click on an image to go to the brewery shop!"),A(l,{capturedAt:t.capturedAt},A(u,{title:"Formats",selections:c}),A(u,{title:"Availability",selections:r}),i.a.size(n.selections)>1&&A(u,{title:"Breweries",selections:n})),A("main",null,A(B,{items:t.items.filter((function(e){return f(e)&&d(e)&&p(e)})),categories:t.categories})))}},GTeF:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/favourites",function(){return r("/Eg9")}])},YtlM:function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return n})),function(e){e.Bottle="BOTTLE",e.Can="CAN",e.Keg="KEG"}(n||(n={}))},ehm3:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return l}));var a=r("q1tI"),s=r.n(a),i=r("xG9w"),o=s.a.createElement,c=s.a.createContext({favourites:{breweries:[]},onToggle:function(){}}),u=function(e){var t="favourites",r=Object(a.useState)({breweries:[]}),n=r[0],s=r[1],u=function(){var e=window.localStorage.getItem(t);null!==e&&s(JSON.parse(e))};Object(a.useEffect)((function(){window.addEventListener("storage",u),u()}),[]);return o(c.Provider,{value:{favourites:n,onToggle:function(e){var r=new Set(n.breweries);r.has(e)?r.delete(e):r.add(e);var a={breweries:i.a.sortBy(Array.from(r),(function(e){return e}))};window.localStorage.setItem(t,JSON.stringify(a)),u()}}},e.children)},l=function(e){return function(t){return o(c.Consumer,null,(function(r){return o(e,n({},t,r))}))}}}},[["GTeF",1,2,7,6,5,0,3,4]]]);