(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{30:function(e,t,a){e.exports=a(60)},35:function(e,t,a){},36:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),l=a.n(o),c=(a(35),a(36),a(8)),i=a(1),u=(a(37),a(29)),s=a(7),m=a(9),d=a.n(m),f=Object(n.createContext)();function v(e){var t=Object(n.useState)([{countryName:"haifa"},{countryName:"Tel Aviv"}]),a=Object(s.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)("Tel Aviv"),i=Object(s.a)(c,2),u=i[0],m=i[1];return r.a.createElement(f.Provider,{value:{favorits:o,setfavorits:l,chosenCountry:u,setchosenCountry:m}},e.children)}function p(e){var t=e.dateforecast,a=function(e){var t=5*(e-32)/9;return Math.round(t)};return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("tbody",null,r.a.createElement("tr",{style:{backgroundColor:"gray",textAlign:"center"}},function(){try{return t.map((function(e,t){return r.a.createElement("td",{key:t}," ",r.a.createElement("h5",null,function(e){var t=new Date(e),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return console.log(a[t.getDay()]),a[t.getDay()]}(e.Date)),r.a.createElement("h5",null," ",a(e.Temperature.Maximum.Value),"\xb0C"),r.a.createElement("p",null," ",a(e.Temperature.Minimum.Value),"\xb0C"))}))}catch(e){}}()))))}var h=!1,b=!1;function y(){var e=Object(n.useContext)(f),t=Object(n.useState)(e.chosenCountry),a=Object(s.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(!1),i=Object(s.a)(c,2),m=i[0],v=i[1],y=Object(n.useState)("4"),g=Object(s.a)(y,2),E=g[0],x=g[1],j=Object(n.useState)(""),k=Object(s.a)(j,2),N=k[0],O=k[1],C=Object(n.useState)("Delete from favorites"),w=Object(s.a)(C,2),T=w[0],A=w[1],S=Object(n.useState)(""),D=Object(s.a)(S,2),W=D[0],G=D[1];Object(n.useEffect)((function(){var e;d.a.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=A3jUpB5lGWjGhptoO83kzg92ZiY1slgr&q=".concat(o)).then((function(t){e=t.data[0].Key,console.log(e);var a=d.a.get("http://dataservice.accuweather.com/currentconditions/v1/"+e+"?apikey=A3jUpB5lGWjGhptoO83kzg92ZiY1slgr"),n=d.a.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+e+"?apikey=A3jUpB5lGWjGhptoO83kzg92ZiY1slgr");return d.a.all([a,n])})).then(d.a.spread((function(){var e=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1];b=!0,console.log(e.data),x(e.data[0].Temperature.Metric.Value),G(e.data[0].WeatherText),O(t.data.DailyForecasts),console.log(t.data.DailyForecasts[0])}))).catch((function(e){b=!1,alert("Request Error!.\nThe possibility that it is due to the invalid country name!"),console.log(e)}))}),[m,e.favorits]);var M=function(t){var a=e.favorits.find((function(e){return e.countryName==t}));A(a?"Delete from favorites":"Add To favorites")};return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("input",{onChange:function(e){!function(e){M(e),h=!1;/^[A-Za-z ]+$/.test(e)?(h=!0,l(e)):h=!1}(e.target.value)},className:"form-control",type:"text",name:"inp",placeholder:"country Name",defaultValue:e.chosenCountry}),r.a.createElement("br",null),r.a.createElement("div",{className:"row",style:{border:"1px solid black",borderRadius:"3px"}},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h3",null,o),r.a.createElement("h3",null,E,"\xb0C"),r.a.createElement("h2",null,W))),r.a.createElement("div",{className:"col-6",style:{}},r.a.createElement("button",{className:"btn btn-primary",style:{float:"right",margin:"10px"},onClick:function(){h?v(!m):alert("Name of country is invalid !")}},"Get Wether"),r.a.createElement("button",{type:"submit",className:"btn btn-primary",style:{float:"right",margin:"10px"},onClick:function(){h&&b&&"Add To favorites"==T?(e.setfavorits([].concat(Object(u.a)(e.favorits),[{countryName:o}])),A("Delete from favorites")):"Delete from favorites"==T?function(){if(console.log("deleted"),e.setchosenCountry("Tel Aviv"),"Tel Aviv"!=o){A("Add To favorites");var t=e.favorits.findIndex((function(e){return e.countryName==o})),a=e.favorits.filter((function(e,a){return a!=t}));e.setfavorits(a)}else alert("you can not remove default value !")}():alert("Name of country is invalid !")}},T," "))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p,{dateforecast:N}))}function g(){var e=Object(n.useContext)(f);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{padding:"10px",border:"1px solid black",borderRadius:"3px"}},e.favorits.map((function(t,a){return r.a.createElement(c.b,{style:{backgroundColor:"gray",border:"1px solid black",borderRadius:"3px",maxWidth:"150px",minWidth:"150px",margin:"auto",marginTop:"10px",height:"100px",textAlign:"center"},className:"col-6",key:a,to:"/",onClick:function(){e.setchosenCountry(t.countryName)}},r.a.createElement("div",null,"     ",r.a.createElement("div",null,r.a.createElement("h4",{style:{color:"black",paddingTop:"25px"}},t.countryName))))}))))}function E(){return r.a.createElement("div",null,r.a.createElement("div",{className:"",style:{backgroundColor:"gray",height:"100px"}},r.a.createElement(c.b,{to:"/f",className:"btn btn-primary",style:{float:"right",margin:"10px"},onClick:function(){}},"Favorites"),r.a.createElement(c.b,{to:"/",className:"btn btn-primary",style:{float:"right",margin:"10px"},onClick:function(){}},"Home")))}var x=function(){return r.a.createElement("div",null,r.a.createElement(v,null,r.a.createElement(c.a,null,r.a.createElement(E,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(i.a,{exact:!0,path:"/f",render:function(){return r.a.createElement(g,null)}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.2ecd0c16.chunk.js.map