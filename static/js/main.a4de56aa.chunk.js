(this["webpackJsonphotel-page"]=this["webpackJsonphotel-page"]||[]).push([[0],{10:function(e,n,t){e.exports=t(18)},15:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(6),o=t.n(c),i=(t(15),t(16),t(3)),l=t(1),s=t(2);function m(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  height: 1rem;\n  p {\n    margin-right: 10px;\n  }\n  select {\n    border-radius: 5px;\n    border: 1px solid #ffffff;\n    padding: 0.25rem 0.5rem;\n    color: #ffffff;\n    background-color: rgba(255,105,15,0.5)\n  }\n"]);return m=function(){return e},e}var f=s.a.div(m()),p=function(e){var n=e.handleCurrencyChange,t=e.currency;return r.a.createElement(f,null,r.a.createElement("p",null,"Currency"),r.a.createElement("select",{name:"currency",id:"currency",form:"currencyForm",onChange:n,value:t},r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"SGD"},"SGD"),r.a.createElement("option",{value:"CNY"},"CNY"),r.a.createElement("option",{value:"KRW"},"KRW")))};function u(){var e=Object(l.a)(["\n  height: 62px;\n  color: #ffffff;\n  background-color: #ff690f;\n  display: flex;\n  font-size: 1rem;\n  padding: 0 2rem;\n  justify-content: space-between;\n  align-items: center;\n"]);return u=function(){return e},e}var d=s.a.div(u()),h=function(e){var n=e.handleCurrencyChange;return r.a.createElement(d,null,r.a.createElement("h1",null,"Your Hotel.com"),r.a.createElement(p,{handleCurrencyChange:n,currency:e.currency}))};function g(){var e=Object(l.a)(["\n  width: 850px;\n  height: 250px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n  box-shadow: 0 0 2px 0 rgba(19,26,31,0.12),0 2px 4px 0 rgba(19,26,31,0.22);\n  margin-bottom: 2rem;\n  display: flex;\n\n  .img{\n    img{\n      width: 250px;\n      height: 250px;\n      border-bottom-left-radius: 8px;\n      border-top-left-radius: 8px;\n      object-fit: cover;\n      object-position: 50% 50%;\n    }\n  }\n\n  .info {\n    padding: 1rem 2rem;\n    width: 300px;\n    /* height: 180px; */\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    position: relative;\n\n    &__main {\n      &__name {\n        font-size: 1.5rem;\n        font-weight: 600;\n      }\n\n      &__address {\n        font-size: 0.75em;\n        padding: 0.5rem 0;\n        word-wrap: normal;\n      }\n\n      &__stars {\n        color: rgb(254, 186, 2);\n      }\n    }\n\n    &__rating {\n      color: #ffffff;\n      width: 30px;\n      height: 30px;\n      line-height: 30px;\n      font-weight: 600;\n      text-align: center;\n      background-color: #003580;\n      border-radius: 8px;\n    }\n\n    &__competitors{\n      width: 100%;\n      align-items: flex-end;\n      display: flex;\n      justify-content: flex-start;\n      overflow-y: hidden;\n      overflow-x: auto;\n      border-top: 1px solid rgba(200, 200, 200, 0.5);\n      padding-top: 10px;\n\n      &__item {\n        height: 45px;\n        padding: 0 1rem;\n        font-size: 0.7rem;\n        line-height: 0.7rem;\n        display: flex;\n        flex-flow: column;\n        justify-content: center;\n        align-items: center;\n        white-space: nowrap;\n\n        .name {\n          font-weight: 800;\n          margin-bottom: -0.5rem;\n        }\n      }\n\n      &__item.highlight {\n        border-radius: 5px;\n        color: #008009;\n        background-color: rgba(0,128,9,0.05);\n        }\n    }\n  }\n\n  .deal{\n    display: flex;\n    flex-flow: column-reverse;\n    margin: 1rem auto;\n    position: relative;\n    border-left: 1px solid rgba(200, 200, 200, 0.5);\n    padding-left: 1rem;\n\n    &__price {\n      font-weight: 750;\n      font-size: 1.25rem;\n    }\n\n    &__button {\n      color: #ffffff;\n      background-color: #333333;\n      border-radius: 2px;\n      width: 120px;\n      height: 35px;\n      line-height: 35px;\n      font-weight: 600;\n      text-align: center;\n      margin-top: 0.6rem;\n      box-shadow: 0 0 2px 0 rgba(19,26,31,0.12),0 2px 4px 0 rgba(19,26,31,0.22);\n    }\n\n    &__button.cursor{\n      cursor: pointer;\n      background-color: #ff690f;\n      &:hover {\n        transform: scale(1.05);\n      }\n    }\n\n    &__savedCost {\n      height: 15px;\n      color: #bf323b;\n      font-size: 0.8rem;\n      font-weight: 800;\n      line-height: 15px;\n      padding: 5px 0;\n    }\n\n    &__tax {\n      display: flex;\n      flex-flow: column;\n      justify-content: flex-start;\n      height: 15px;\n      font-size: 0.8rem;\n      line-height: 10px;\n      margin: 1rem 0;\n\n      p {\n        margin-top: -5px;  \n      }\n\n      p.fees {\n        color: #008009;\n        font-weight: 800;\n        margin-top: -0.5rem;  \n      }\n    }\n\n  }\n"]);return g=function(){return e},e}function x(){var e=Object(l.a)(["\n  padding: 5rem;\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n"]);return x=function(){return e},e}var _=s.a.div(x()),v=s.a.div(g()),b=function(e){var n=e.hoteldata;return r.a.createElement(_,null,n.map((function(n){return r.a.createElement(v,{key:n.id},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:n.photo,alt:""})),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info__main"},r.a.createElement("div",{className:"info__main__name"},n.name),r.a.createElement("div",{className:"info__main__address"},n.address),r.a.createElement("div",{className:"info__main__stars"},function(e){e=Math.round(e);for(var n="",t=0;t<e;t++)n+="\u2605";return n}(n.stars))),r.a.createElement("div",{className:"info__rating"},n.rating),r.a.createElement("div",{className:"info__competitors"},n.price&&n.price.competitionSet.length>1&&n.price.savedCost>0?n.price.competitionSet.map((function(e){return"Our Price"===e.name?r.a.createElement("div",{className:"info__competitors__item highlight"},r.a.createElement("p",{className:"name"},e.name),r.a.createElement("p",{className:"price"},Math.round(e.price).toLocaleString())):r.a.createElement("div",{className:"info__competitors__item"},r.a.createElement("p",{className:"name"},e.name),r.a.createElement("p",{className:"price"},Math.round(e.price).toLocaleString()))})):"")),r.a.createElement("div",{className:"deal"},n.price?r.a.createElement("div",{className:"deal__button cursor"},"Book now!"):r.a.createElement("div",{className:"deal__button"},"Unavaiable"),n.price&&n.price.taxes_and_fees?r.a.createElement("div",{className:"deal__tax"},r.a.createElement("p",null,"Price includes:"),r.a.createElement("p",{className:"fees"},n.price.taxes_and_fees.tax?"taxes: $".concat(n.price.taxes_and_fees.tax):""),r.a.createElement("p",{className:"fees"},n.price.taxes_and_fees.hotel_fees?"hotel fees: $".concat(n.price.taxes_and_fees.hotel_fees):"")):"",n.price&&n.price.savedCost>0?r.a.createElement("div",{className:"deal__savedCost"},"Saved up to $",Math.round(n.price.savedCost).toLocaleString()," !"):"",r.a.createElement("div",{className:"deal__price"},n.price?(t=e.currency,a=n.price.price,a=Math.round(a),["KRW","JPY","IDR"].includes(t)&&(a=a.toLocaleString()),"".concat(t," ").concat(a)):"")));var t,a})))},E=t(4),w=t.n(E),y=t(9),j=function(e){return fetch("https://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo/1/".concat(e)).then((function(e){return e.json()})).then((function(e){return e}))},C=function(e){var n=Object(a.useState)([]),t=Object(i.a)(n,2),r=t[0],c=t[1],o=Object(a.useCallback)(Object(y.a)(w.a.mark((function n(){var t,a,r,o,l,s,m;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([fetch("https://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo").then((function(e){return e.json()})).then((function(e){return e})),j(e)]);case 2:t=n.sent,a=Object(i.a)(t,2),r=a[0],o=a[1],l={},o.forEach((function(e){var n=[{name:"Our Price",price:e.price}];if(e.competitors)for(var t in e.competitors){var a={name:t,price:e.competitors[t]};n.push(a)}n.sort((function(e,n){return e.price-n.price})),e.competitionSet=n;var r=n[n.length-1].price-e.price;e.savedCost=r,l[e.id]=e})),r.map((function(e){return e.price=l[e.id],e})),s=[],m=[],r.forEach((function(e){e.price?m.push(e):s.push(e)})),m.sort((function(e,n){return n.price.savedCost-e.price.savedCost})),m=m.concat(s),c(m);case 15:case"end":return n.stop()}}),n)}))),[e]);return Object(a.useEffect)((function(){o()}),[o]),[r,o]},N=function(){var e=Object(a.useState)("USD"),n=Object(i.a)(e,2),t=n[0],c=n[1],o=C(t),l=Object(i.a)(o,2),s=l[0],m=l[1];return Object(a.useEffect)((function(){c(window.localStorage.getItem("hotelPageCurrency")?window.localStorage.getItem("hotelPageCurrency"):"USD"),m(t)}),[t,m]),r.a.createElement(a.Fragment,null,r.a.createElement(h,{handleCurrencyChange:function(e){c(e.target.value),window.localStorage.setItem("hotelPageCurrency",e.target.value)},currency:t}),r.a.createElement(b,{currency:t,hoteldata:s}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a4de56aa.chunk.js.map