(this.webpackJsonptreemap=this.webpackJsonptreemap||[]).push([[0],{78:function(t,e,a){},97:function(t,e,a){},98:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(5),c=a.n(r),i=a(25),d=a.n(i),o=(a(78),a(2)),s=a.n(o),u=a(26),l=a(27),f=a.n(l),p=a(3);a(97);var h=function(){Object(r.useEffect)(Object(u.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json");case 3:a=e.sent,t(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error fetching data:\n",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);var t=function(t){var e=p.a(t),a=p.d();a.size([1e3,600]),e.sum((function(t){return t.value})),a(e);var n=e.children.map((function(t){return t.data.name}));console.log("consoles",n);var r=["3f3d3d","#86cc86e7","#9a9ad4","#c78cc7","#ffc0cb","#e9fa8b","#85eeb9","#fac61c","#f06f6f","#fc3085ef","#75a0a0","#a7d69e","#b64545","#aaa7a7","#01c483","#d644d6","#45a4f1","#fafa4f"],c=p.b().domain(n).range(r);p.c("#chart").append("svg").attr("width",1e3).attr("height",600).selectAll("rect").data(e.descendants()).enter().append("rect").attr("x",(function(t){return t.x0})).attr("y",(function(t){return t.y0})).attr("width",(function(t){return t.x1-t.x0})).attr("height",(function(t){return t.y1-t.y0})).attr("class","tile").attr("data-name",(function(t){return t.data.name})).attr("data-category",(function(t){return t.data.category})).attr("data-value",(function(t){return t.data.value})).style("fill",(function(t){return t.data.category?c(t.data.category):"white"})).style("stroke","white").append("title").attr("id","tooltip").attr("data-value",(function(t){return t.data.value})).text((function(t){return"Game: ".concat(t.data.name,"\nConsole: ").concat(t.data.category,"\n Value: ").concat(t.data.value)}));var i=p.c("#legend").append("svg").attr("width",100).attr("height",600),d=p.b().domain(n).range(r);i.selectAll("rect").data(n).enter().append("rect").attr("x",0).attr("y",(function(t,e){return 30*e})).attr("class","legend-item").attr("width",20).attr("height",20).style("fill",(function(t){return d(t)})),i.selectAll("text").data(n).enter().append("text").attr("x",20).attr("y",(function(t,e){return 12+30*e})).text((function(t){return t})).style("alignment-baseline","middle").style("font-size","15px")};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{id:"title",children:"100 Most Popular Video Games"}),Object(n.jsx)("p",{id:"description",children:"Grouped By Gaming Console"}),Object(n.jsxs)("div",{id:"styling",children:[Object(n.jsx)("div",{id:"chart"}),Object(n.jsx)("div",{id:"legend"})]})]})},g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),r(t),c(t),i(t)}))};d.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),g()}},[[98,1,2]]]);
//# sourceMappingURL=main.7a9b1f37.chunk.js.map