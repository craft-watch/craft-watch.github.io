(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9i+O":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/taster",function(){return r("WbrO")}])},WbrO:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("xG9w"),u=r("zRbM"),i=r("83Vu"),s=r("BtBB"),c=r("e/f6"),f=a.a.createElement,l=function(e){for(var t=o.a.filter(e,(function(e){return!Object(c.a)(e).keg&&!e.mixed&&e.available})),r=o.a.groupBy(t,(function(e){return e.brewery.shortName})),n=o.a.shuffle(o.a.flatten(o.a.map(r,(function(e,t){var r=o.a.size(e),n=r>=10?6:r>=5?5:4;return o.a.times(n,(function(){return t}))})))),a=new Set,u=0;a.size<20;)a.add(o.a.sample(r[n[u++]]));return Array.from(a)};t.default=function(){var e=Object(n.useState)([]),t=e[0],r=e[1];return Object(n.useEffect)((function(){var e=l(s.d);r(o.a.sortBy(o.a.sortBy(e,(function(e){return e.name})),(function(e){return e.brewery.shortName})))}),[]),f(u.a,{title:"Craft Watch - Taster menu",description:"Taster menu of beer prices from across the UK"},f(i.a,{title:"Taster menu",desc:f(a.a.Fragment,null,f("p",null,"We've put together a randomly curated selection of ",20," beers to inspire you."),f("p",null,"Refresh the page to get another selection!"),f("p",null,"Every item here can be delivered directly to your doorstep from the brewery's online shop.")),capturedAt:s.b,items:t,allBreweries:s.a,categories:s.c}))}}},[["9i+O",0,2,3,1,4]]]);