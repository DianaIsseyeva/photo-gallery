(this["webpackJsonppizza-app"]=this["webpackJsonppizza-app"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(20),r=n.n(c),s=n(16),i=n(37),u=n(6),o=n(17),j=(n(50),n(4)),l=(n(51),n(2)),d=n(5),b=n.n(d),p=n(13),h=n(11),m=n.n(h),O="FETCH_PRODUCTS",f="FETCH_PRODUCTS_SUCCESS",x="FETCH_PRODUCTS_ERROR",v="CREATE_NEW_PRODUCT",y="OPEN_CURRENT_PRODUCT",g="FETCH_ORDERS",N="FETCH_ORDERS_SUCCESS",E="FETCH_ORDERS_ERROR",k="DELETE_ORDER",C=function(e){return{type:f,value:e}},T=function(e){return{type:x,error:e}},R=function(){return{type:O}},w=function(){return{type:O}},D=function(e){return{type:x,error:e}},S=function(e){return{type:N,value:e}},_=function(e){return{type:E,error:e}},P=(n(71),n(0)),F=function(e){var t=e.image,n=e.name,a=e.price,c=e.edit,r=e.deleteItem;return Object(P.jsxs)("div",{className:"row",children:[Object(P.jsxs)("div",{className:"nameBlock",children:[Object(P.jsx)("img",{src:t,className:"img",alt:"product"}),Object(P.jsxs)("div",{className:"nameBlock",children:[Object(P.jsx)("p",{className:"text",children:n}),Object(P.jsxs)("p",{children:[a," KZT"]})]})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("button",{className:"btn",onClick:c,children:"Edit"}),Object(P.jsx)("button",{className:"btn",onClick:r,children:"Delete"})]})]})},I=(n(73),function(e){var t=Object(u.c)((function(e){return e.menu.products})),n=Object(u.b)(),c=function(t){e.history.push({pathname:"/current-product/edit"}),n({type:y,value:t})},r=function(t){n(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){var a,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"SEND_DELETE_REQUEST"}),t.prev=1,t.next=4,m.a.delete("https://base-july2021-default-rtdb.firebaseio.com/dishes/".concat(e.id,".json"),e);case 4:return n({type:"SEND_DELETE_SUCCESS"}),t.prev=5,a=[],t.next=9,m.a.get("https://base-july2021-default-rtdb.firebaseio.com/dishes.json");case 9:(c=t.sent).data&&(Object.keys(c.data).forEach((function(e){var t={name:c.data[e].name,price:c.data[e].price,image:c.data[e].image,id:e};a.push(t)})),n(C(a))),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),n(T(t.t0));case 16:t.next=21;break;case 18:t.prev=18,t.t1=t.catch(1),n({type:"SEND_DELETE_ERROR"});case 21:case"end":return t.stop()}}),t,null,[[1,18],[5,13]])})));return function(e){return t.apply(this,arguments)}}()}(t)),e.history.push({pathname:"/"})};return Object(a.useEffect)((function(){n(function(){var e=Object(p.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:O}),e.prev=1,n=[],e.next=5,m.a.get("https://base-july2021-default-rtdb.firebaseio.com/dishes.json");case 5:(a=e.sent).data&&(Object.keys(a.data).forEach((function(e){var t={name:a.data[e].name,price:a.data[e].price,image:a.data[e].image,id:e};n.push(t)})),t(C(n))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(T(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[n]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("div",{className:"addDish",children:[Object(P.jsx)("h2",{children:"Dishes"}),Object(P.jsx)("button",{className:"btn",onClick:function(){e.history.push({pathname:"/product/admin"})},children:"Add new Dish"})]}),Object(P.jsx)("div",{className:"menuBlock",children:Object(P.jsx)("div",{className:"menu",children:t.map((function(e){return Object(P.jsx)(F,{name:e.name,image:e.image,price:e.price,edit:function(){return c(e)},deleteItem:function(){return r(e)}},e.id)}))})})]})}),U=n(15),B=(n(74),function(e){var t=Object(u.b)(),n=Object(u.c)((function(e){return e.menu.newProduct})),a=function(e){var a;t((a=Object(l.a)(Object(l.a)({},n),{},Object(U.a)({},e.target.name,e.target.value)),{type:v,value:a}))};return Object(P.jsxs)("form",{children:[Object(P.jsxs)("label",{className:"inputRow",children:[Object(P.jsx)("span",{className:"input",children:"Title: "}),Object(P.jsx)("input",{className:"inputText",type:"text",name:"name",onChange:a,value:n.name})]}),Object(P.jsxs)("label",{className:"inputRow",children:[Object(P.jsx)("span",{className:"input",children:"Price: "}),Object(P.jsx)("input",{className:"inputText",type:"number",name:"price",onChange:a,value:n.price})]}),Object(P.jsxs)("label",{className:"inputRow",children:[Object(P.jsx)("span",{className:"input",children:"Image: "})," ",Object(P.jsx)("input",{className:"inputText",type:"text",name:"image",onChange:a,value:n.image})]}),Object(P.jsx)("button",{className:"btn",type:"submit",onClick:function(a){a.preventDefault(),t(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){var a,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(R()),t.prev=1,t.next=4,m.a.post("https://base-july2021-default-rtdb.firebaseio.com/dishes.json",{name:e.name,price:e.price,image:e.image});case 4:return n(w()),t.prev=5,a=[],t.next=9,m.a.get("https://base-july2021-default-rtdb.firebaseio.com/dishes.json");case 9:(c=t.sent).data&&(Object.keys(c.data).forEach((function(e){var t={name:c.data[e].name,price:c.data[e].price,image:c.data[e].image,id:e};a.push(t)})),n(C(a))),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),n(T(t.t0));case 16:t.next=21;break;case 18:t.prev=18,t.t1=t.catch(1),n(D());case 21:case"end":return t.stop()}}),t,null,[[1,18],[5,13]])})));return function(e){return t.apply(this,arguments)}}()}(n)),e.history.push({pathname:"/"})},children:"Save"}),Object(P.jsx)("button",{className:"btn",type:"submit",onClick:function(){e.history.push({pathname:"/"})},children:"Back"})]})}),L=n(40),z=function(e){var t=Object(u.c)((function(e){return e.menu.currentProduct})),n=Object(a.useState)(Object(l.a)({},t)),c=Object(L.a)(n,2),r=c[0],s=c[1],i=Object(u.b)(),o=function(e){s(Object(l.a)(Object(l.a)({},r),{},Object(U.a)({},e.target.name,e.target.value)))};return Object(P.jsxs)("form",{children:[Object(P.jsxs)("label",{className:"inputRow",children:[Object(P.jsx)("span",{className:"input",children:"Title: "}),Object(P.jsx)("input",{className:"inputText",type:"text",name:"name",onChange:o,value:r.name})]}),Object(P.jsxs)("label",{className:"inputRow",children:[Object(P.jsx)("span",{className:"input",children:"Price: "}),Object(P.jsx)("input",{className:"inputText",type:"number",name:"price",onChange:o,value:r.price})]}),Object(P.jsxs)("label",{className:"inputRow",children:[Object(P.jsx)("span",{className:"input",children:"Image: "})," ",Object(P.jsx)("input",{className:"inputText",type:"text",name:"image",onChange:o,value:r.image})]}),Object(P.jsx)("img",{src:r.image,alt:"something"})," ",Object(P.jsx)("br",{}),Object(P.jsx)("button",{className:"btn",type:"submit",onClick:function(t){var n;t.preventDefault(),i((n=r,function(){var e=Object(p.a)(b.a.mark((function e(t){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(R()),e.prev=1,e.next=4,m.a.put("https://base-july2021-default-rtdb.firebaseio.com/dishes/".concat(n.id,".json"),n);case 4:return e.prev=4,a=[],e.next=8,m.a.get("https://base-july2021-default-rtdb.firebaseio.com/dishes.json");case 8:(c=e.sent).data&&(Object.keys(c.data).forEach((function(e){var t={name:c.data[e].name,price:c.data[e].price,image:c.data[e].image,id:e};a.push(t)})),t(C(a))),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),t(T(e.t0));case 15:t(w()),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(1),t(D());case 21:case"end":return e.stop()}}),e,null,[[1,18],[4,12]])})));return function(t){return e.apply(this,arguments)}}())),e.history.push({pathname:"/"})},children:"Save"}),Object(P.jsx)("button",{className:"btn",type:"submit",onClick:function(){e.history.push({pathname:"/"})},children:"Back"})]})},H=(n(75),n(76),n(77),function(e){return Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:e.to,exact:e.exact,className:"NavigationItem",children:e.children})})}),K=function(){return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{className:"NavBlock",children:[Object(P.jsx)("h1",{className:"title",children:"Turtle Pizza Admin"}),Object(P.jsxs)("ul",{className:"NavigationItems",children:[Object(P.jsx)(H,{to:"/",exact:!0,children:"Dishes"}),Object(P.jsx)("span",{className:"line",children:"|"}),Object(P.jsx)(H,{to:"/product/orders",exact:!0,children:"Orders"})]})]})})},Z=function(){return Object(P.jsx)("header",{className:"Toolbar",children:Object(P.jsx)("nav",{children:Object(P.jsx)(K,{})})})},A=(n(79),function(e){return Object(P.jsxs)("div",{className:"Layout",children:[Object(P.jsx)(Z,{}),Object(P.jsx)("main",{className:"Layout-Content",children:e.children})]})}),J=n(83),Q=(n(80),function(e){var t=e.name,n=e.counter,a=e.price;return Object(P.jsx)("div",{children:Object(P.jsxs)("p",{children:[n," x ",t," ",a," KZT"]})})}),W=function(e){var t=e.eachOrder;return Object(P.jsx)("div",{children:t.map((function(e){return Object(P.jsx)("div",{children:Object(P.jsx)(Q,{name:e.dish.name,price:e.dish.price,counter:e.dish.count,id:e.dish.id})},Object(J.a)())}))})},q=(n(81),function(){var e=Object(u.c)((function(e){return e.cart.orders})),t=Object(u.c)((function(e){return e.cart.delivery})),n=Object(u.b)(),c=function(e){n(function(e){var t="";return e.map((function(e){return t=e.dish})),function(){var e=Object(p.a)(b.a.mark((function e(n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:k,value:[]}),e.prev=1,e.next=4,m.a.delete("https://base-july2021-default-rtdb.firebaseio.com/orders/".concat(t.id,".json"),t);case 4:return e.prev=4,e.next=7,m.a.get("https://base-july2021-default-rtdb.firebaseio.com/orders.json");case 7:(a=e.sent).data&&Object.keys(a.data).forEach(function(){var e=Object(p.a)(b.a.mark((function e(t){var c,r,s,i,u,o,j;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c="",r="",s=Object.entries(a.data[t].order),i=[],u=0;case 5:if(!(u<s.length)){e.next=17;break}return c=s[u][0],r=s[u][1],e.next=10,m.a.get("https://js-7-march-default-rtdb.firebaseio.com/dishes/".concat(c,".json"));case 10:o=e.sent,j=r*o.data.price,s[u]={dish:Object(l.a)(Object(l.a)({},o.data),{},{count:r,id:t,bill:j})},i.push(s[u]);case 14:u++,e.next=5;break;case 17:n(S(i));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),n(_(e.t0));case 14:e.next=20;break;case 17:e.prev=17,e.t1=e.catch(1),n(_(e.t1));case 20:case"end":return e.stop()}}),e,null,[[1,17],[4,11]])})));return function(t){return e.apply(this,arguments)}}()}(e))},r=function(e){var n=0;return e.map((function(e){return n+=parseInt(e.dish.price)*parseInt(e.dish.count)})),n+=t};return Object(a.useEffect)((function(){n(function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:g,value:[]}),e.prev=1,e.next=4,m.a.get("https://base-july2021-default-rtdb.firebaseio.com/orders.json");case 4:(n=e.sent).data&&Object.keys(n.data).forEach(function(){var e=Object(p.a)(b.a.mark((function e(a){var c,r,s,i,u,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c="",r="",s=Object.entries(n.data[a].order),i=[],u=0;case 5:if(!(u<s.length)){e.next=16;break}return c=s[u][0],r=s[u][1],e.next=10,m.a.get("https://base-july2021-default-rtdb.firebaseio.com/dishes/".concat(c,".json"));case 10:o=e.sent,s[u]={dish:Object(l.a)(Object(l.a)({},o.data),{},{count:r,id:a})},i.push(s[u]);case 13:u++,e.next=5;break;case 16:t(S(i));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(_(e.t0));case 11:case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n]),Object(P.jsx)("div",{children:e.map((function(e){return Object(P.jsxs)("div",{className:"order",children:[Object(P.jsx)(W,{eachOrder:e}),Object(P.jsxs)("p",{children:["Delivery ",t," KZT"]}),Object(P.jsxs)("p",{children:["Total: ",r(e)," KZT"]}),Object(P.jsx)("button",{className:"btnComplete",onClick:function(){return c(e)},children:"Complete order"})]},Object(J.a)())}))})});var G=function(){return Object(P.jsx)(A,{children:Object(P.jsxs)(j.c,{children:[Object(P.jsx)(j.a,{path:"/product/admin",component:B,exact:!0}),Object(P.jsx)(j.a,{path:"/",component:I,exact:!0}),Object(P.jsx)(j.a,{path:"/current-product/edit",component:z,exact:!0}),Object(P.jsx)(j.a,{path:"/product/orders",component:q,exact:!0})]})})},M={products:[],loading:!1,error:null,newProduct:"",currentProduct:""},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(l.a)(Object(l.a)({},e),{},{newProduct:t.value});case O:return Object(l.a)({},e);case f:return Object(l.a)(Object(l.a)({},e),{},{products:t.value});case x:return Object(l.a)(Object(l.a)({},e),{},{error:t.error});case y:return Object(l.a)(Object(l.a)({},e),{},{currentProduct:t.value});default:return e}},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},Y=n(39),$={orders:[],error:null,delivery:500},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(l.a)(Object(l.a)({},e),{},{orders:t.value});case N:var n=Object(Y.a)(e.orders);return n.push(t.value),Object(l.a)(Object(l.a)({},e),{},{orders:n});case E:return Object(l.a)(Object(l.a)({},e),{},{error:t.error});case k:return Object(l.a)(Object(l.a)({},e),{},{orders:t.value});default:return e}},te=Object(s.c)({menu:V,cart:ee}),ne=Object(s.d)(te,Object(s.a)(i.a)),ae=Object(P.jsx)(u.a,{store:ne,children:Object(P.jsx)(o.a,{children:Object(P.jsx)(G,{})})});r.a.render(ae,document.getElementById("root")),X()}},[[82,1,2]]]);
//# sourceMappingURL=main.c6b4a522.chunk.js.map