(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,c){},70:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(22),s=c.n(a),i=(c(44),c(6)),o=c(3),u=c.n(o),j=c(5),d=c(2),l=c(4),b=c.n(l);var h=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(d.a)(a,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/products");case 2:t=e.sent,r(t.data.products);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),{products:[c,r],callback:[i,o]}},O=c(7),p=c(14);var x=function(e){var t=Object(n.useState)(!1),c=Object(d.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(!1),i=Object(d.a)(s,2),o=i[0],l=i[1],h=Object(n.useState)([]),x=Object(d.a)(h,2),m=x[0],f=x[1],v=Object(n.useState)([]),g=Object(d.a)(v,2),y=g[0],k=g[1],w=Object(n.useState)([]),C=Object(d.a)(w,2),_=C[0],A=C[1];Object(n.useEffect)((function(){e&&function(){var t=Object(j.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("/user/infor",{headers:{Authentication:e}});case 3:c=t.sent,a(!0),k(c.data),1===c.data.role?l(!0):l(!1),f(c.data.cart),console.log(c),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),alert(t.t0.response.data.msg);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var P=function(){var t=Object(j.a)(u.a.mark((function t(c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",alert("Please login to continue buying"));case 2:if(!m.every((function(e){return e._id!==c._id}))){t.next=9;break}return f([].concat(Object(p.a)(m),[Object(O.a)(Object(O.a)({},c),{},{quantity:1})])),t.next=7,b.a.patch("/user/addcart",{cart:[].concat(Object(p.a)(m),[Object(O.a)(Object(O.a)({},c),{},{quantity:1})])},{headers:{Authentication:e}});case 7:t.next=10;break;case 9:alert("This product has been added to your cart");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{isLogged:[r,a],isAdmin:[o,l],cart:[m,f],addCart:P,user:[y,k],history:[_,A]}};var m=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(d.a)(a,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/category");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),{categories:[c,r],callback:[i,o]}},f=c(0),v=Object(n.createContext)(),g=function(e){var t=e.children,c=Object(n.useState)(!1),r=Object(d.a)(c,2),a=r[0],s=r[1];Object(n.useEffect)((function(){if(localStorage.getItem("firstLogin")){var e=function(){var t=Object(j.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("/user/refresh_token");case 2:c=t.sent,console.log(c),s(c.data.accesstoken),setTimeout((function(){e()}),6e5);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}}),[]);var i={token:[a,s],productsAPI:h(),userAPI:x(a),categoryAPI:m()};return Object(f.jsx)(v.Provider,{value:i,children:t})},y=c.p+"static/media/menu.e8db7520.svg",k=c.p+"static/media/close.ea7c95d7.svg",w=c.p+"static/media/cart.d146d6c3.svg";var C=function(){var e=Object(n.useContext)(v),t=Object(d.a)(e.userAPI.isLogged,1)[0],c=Object(d.a)(e.userAPI.isAdmin,1)[0],r=Object(d.a)(e.userAPI.cart,1)[0],a=Object(d.a)(e.userAPI.user,1)[0],s=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/user/logout");case 2:localStorage.clear(),window.location.href="/";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("header",{children:[Object(f.jsx)("div",{className:"menu",children:Object(f.jsx)("img",{src:y,alt:"",width:"30"})}),Object(f.jsx)("div",{className:"logo",children:Object(f.jsx)("h1",{children:Object(f.jsx)(i.b,{to:"/",children:c?"ADMIN":"E-COMMERCE"})})}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:t||c?a.email:""}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/",children:c?"Products":"Shop"})}),c&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/create_product",children:"Create Product"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/category",children:"Categories"})})]}),t?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/history",children:"History"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/",onClick:s,children:"Logout"})})]}):Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/login",children:"Login \u2725 Register"})}),Object(f.jsx)("li",{children:Object(f.jsx)("img",{src:k,alt:"",width:"30",className:"menu"})})]}),c?"":Object(f.jsxs)("div",{className:"cart-icon",children:[Object(f.jsx)("span",{children:r.length}),Object(f.jsx)(i.b,{to:"/cart",children:Object(f.jsx)("img",{src:w,alt:"",width:"30"})})]})]})},_=c(8);var A=function(e){var t=e.product,c=e.deleteProduct,r=Object(n.useContext)(v),a=Object(d.a)(r.userAPI.isAdmin,2),s=a[0],o=(a[1],r.userAPI.addCart);return Object(f.jsx)("div",{className:"row_btn",children:s?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(i.b,{id:"btn_buy",to:"#!",onClick:function(){return c(t._id,t.images.public_id)},children:"Delete"}),Object(f.jsx)(i.b,{id:"btn_view",to:"/edit_product/".concat(t._id),children:"Edit"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(i.b,{id:"btn_buy",to:"#!",onClick:function(){return o(t)},children:"Buy"}),Object(f.jsx)(i.b,{id:"btn_view",to:"/detail/".concat(t._id),children:"View"})]})})};var P=function(e){var t=e.product,c=e.isAdmin,n=e.deleteProduct,r=e.handleCheck;return Object(f.jsxs)("div",{className:"product_card",children:[c&&Object(f.jsx)("input",{type:"checkbox",checked:t.checked,onChange:function(){return r(t._id)}}),Object(f.jsx)("img",{src:t.images.url,alt:""}),Object(f.jsxs)("div",{className:"product_box",children:[Object(f.jsx)("h2",{title:t.title,children:t.title}),Object(f.jsxs)("span",{children:["$",t.price]}),Object(f.jsx)("p",{children:t.description})]}),Object(f.jsx)(A,{product:t,deleteProduct:n})]})};c(70);var N=function(){return Object(f.jsx)("div",{className:"load-page",children:Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:Object(f.jsx)("div",{})})})})})})})})})})};var S=function(){var e=Object(n.useContext)(v),t=Object(d.a)(e.productsAPI.products,2),c=t[0],r=t[1],a=Object(d.a)(e.userAPI.isLogged,2),s=(a[0],a[1],Object(d.a)(e.userAPI.isAdmin,2)),i=s[0],o=(s[1],Object(d.a)(e.token,1)[0]),l=Object(d.a)(e.productsAPI.callback,2),h=l[0],O=l[1],x=Object(n.useState)(!1),m=Object(d.a)(x,2),g=m[0],y=m[1],k=Object(n.useState)(!1),w=Object(d.a)(k,2),C=w[0],_=w[1];console.log(c);var A=function(e){c.forEach((function(t){t._id===e&&(t.checked=!t.checked)})),r(Object(p.a)(c))},S=function(){var e=Object(j.a)(u.a.mark((function e(t,c){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,c),e.prev=1,y(!0),n=b.a.post("/api/destroy",{public_id:c},{headers:{Authentication:o}}),r=b.a.delete("/api/products/".concat(t),{headers:{Authentication:o}}),e.next=7,n;case 7:return e.next=9,r;case 9:O(!h),y(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,c){return e.apply(this,arguments)}}();return g?Object(f.jsx)("div",{children:Object(f.jsx)(N,{})}):Object(f.jsxs)(f.Fragment,{children:[i&&Object(f.jsxs)("div",{className:"delete-all",children:[Object(f.jsx)("span",{children:"Select all"}),Object(f.jsx)("input",{type:"checkbox",checked:C,onChange:function(){c.forEach((function(e){e.checked=!C})),r(Object(p.a)(c)),_(!C)}}),Object(f.jsx)("button",{onClick:function(){c.forEach((function(e){e.checked&&S(e._id,e.images.public_id)}))},children:"Delete All"})]}),Object(f.jsx)("div",{className:"products",children:c.map((function(e){return Object(f.jsx)(P,{product:e,isAdmin:i,deleteProduct:S,handleCheck:A},e._id)}))}),0===c.length&&Object(f.jsx)(N,{})]})};var I=function(){var e=Object(_.g)(),t=Object(n.useContext)(v),c=t.userAPI.addCart,r=Object(d.a)(t.productsAPI.products,1)[0],a=Object(n.useState)([]),s=Object(d.a)(a,2),o=s[0],u=s[1];return Object(n.useEffect)((function(){e.id&&r.forEach((function(t){t._id===e.id&&u(t)}))}),[e.id,r]),0===o.length?null:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"detail",children:[Object(f.jsx)("img",{src:o.images.url,alt:""}),Object(f.jsxs)("div",{className:"box-detail",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("h2",{children:o.title}),Object(f.jsxs)("h6",{children:["#id: ",o.product_id]})]}),Object(f.jsxs)("span",{children:["$ ",o.price]}),Object(f.jsx)("p",{children:o.description}),Object(f.jsx)("p",{children:o.content}),Object(f.jsxs)("p",{children:["Sold: ",o.sold]}),Object(f.jsx)(i.b,{to:"/cart",className:"cart",onClick:function(){return c(o)},children:"Buy Now"})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Related products"}),Object(f.jsx)("div",{className:"products",children:r.map((function(e){return e.category===o.category?Object(f.jsx)(P,{product:e},e._id):null}))})]})]})},E=c(15);var D=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(d.a)(e,2),c=t[0],r=t[1],a=function(e){var t=e.target,n=t.name,a=t.value;r(Object(O.a)(Object(O.a)({},c),{},Object(E.a)({},n,a)))},s=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.a.post("/user/login",Object(O.a)({},c));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"login-page",children:Object(f.jsxs)("form",{onSubmit:s,children:[Object(f.jsx)("h2",{children:"Login"}),Object(f.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:c.email,onChange:a}),Object(f.jsx)("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:c.password,onChange:a}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("button",{type:"submit",children:"Login"}),Object(f.jsx)(i.b,{to:"/register",children:"Register"})]})]})})};var q=function(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(d.a)(e,2),c=t[0],r=t[1],a=function(e){var t=e.target,n=t.name,a=t.value;r(Object(O.a)(Object(O.a)({},c),{},Object(E.a)({},n,a)))},s=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.a.post("/user/register",Object(O.a)({},c));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"login-page",children:Object(f.jsxs)("form",{onSubmit:s,children:[Object(f.jsx)("h2",{children:"Register"}),Object(f.jsx)("input",{type:"text",name:"name",required:!0,placeholder:"Name",value:c.name,onChange:a}),Object(f.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:c.email,onChange:a}),Object(f.jsx)("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:c.password,onChange:a}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("button",{type:"submit",children:"Register"}),Object(f.jsx)(i.b,{to:"/login",children:"Login"})]})]})})},F=c(35),L=c(36),R=c(39),T=c(38),U=c(37),J=c.n(U),Y=function(e){Object(R.a)(c,e);var t=Object(T.a)(c);function c(){return Object(F.a)(this,c),t.apply(this,arguments)}return Object(L.a)(c,[{key:"render",value:function(){var e=this,t=this.props.total;return Object(f.jsx)(J.a,{env:"sandbox",client:{sandbox:"AYi-At1iGrvy-8HrwbFJi-RS6P7LkfGV0KXd4b0FCCq2MU1P0JJtEBQ2RkCDUSJZM_CLAGNOt5PDW_7R",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.tranSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"small",color:"blue",shape:"rect",tagline:!1}})}}]),c}(r.a.Component);var M=function(){var e=Object(n.useContext)(v),t=Object(d.a)(e.userAPI.cart,2),c=t[0],r=t[1],a=Object(n.useState)(0),s=Object(d.a)(a,2),i=s[0],o=s[1],l=Object(d.a)(e.token,1)[0];console.log(c),Object(n.useEffect)((function(){!function(){var e=c.reduce((function(e,t){return e+t.price*t.quantity}),0);o(e)}()}),[c]);var h=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.patch("/user/addCart",{cart:t},{headers:{Authentication:l}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n=t.paymentID,a=t.address,e.next=4,b.a.post("/api/payment",{cart:c,paymentID:n,address:a},{headers:{Authentication:l}});case 4:r([]),h([]),alert("You Have successfully placed an order");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 0===c.length?Object(f.jsx)("h2",{style:{textAlign:"center",fontSize:"5rem"},children:"Cart Empty"}):Object(f.jsxs)("div",{children:[c.map((function(e){return Object(f.jsxs)("div",{className:"detail cart",children:[Object(f.jsx)("img",{src:e.images.url,alt:"",className:"img_container"}),Object(f.jsxs)("div",{className:"box-detail",children:[Object(f.jsx)("h2",{children:e.title}),Object(f.jsxs)("h3",{children:["$ ",e.price*e.quantity]}),Object(f.jsx)("p",{children:e.description}),Object(f.jsx)("p",{children:e.content}),Object(f.jsxs)("div",{className:"amount",children:[Object(f.jsx)("button",{onClick:function(){return t=e._id,void c.forEach((function(e){e._id===t&&(1===e.quantity?e.quantity=1:e.quantity-=1),r(Object(p.a)(c)),h(c)}));var t},children:" - "}),Object(f.jsx)("span",{children:e.quantity}),Object(f.jsx)("button",{onClick:function(){return t=e._id,void c.forEach((function(e){e._id===t&&(e.quantity+=1),r(Object(p.a)(c)),h(c)}));var t},children:" + "})]}),Object(f.jsx)("div",{className:"delete",onClick:function(){return t=e._id,void(window.confirm("Do You want to delete this product ?")&&(c.forEach((function(e,n){e._id===t&&c.splice(n,1)})),r(Object(p.a)(c)),h(c)));var t},children:"X"})]})]},e._id)})),Object(f.jsxs)("div",{className:"total",children:[Object(f.jsxs)("h3",{children:["Total: $ ",i]}),Object(f.jsx)(Y,{total:i,tranSuccess:O})]})]})};var z=function(){var e=Object(n.useContext)(v),t=Object(d.a)(e.userAPI.history,1)[0],c=Object(n.useState)([]),r=Object(d.a)(c,2),a=r[0],s=r[1],i=Object(_.g)();return Object(n.useEffect)((function(){i.id&&t.forEach((function(e){e._id===i.id&&s(e)}))}),[i.id,t]),console.log(a),0===a.length?null:Object(f.jsxs)("div",{className:"history-page",children:[Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Name"}),Object(f.jsx)("th",{children:"Address"}),Object(f.jsx)("th",{children:"Postal Code"}),Object(f.jsx)("th",{children:"Country Code"})]})}),Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:a.address.recipient_name}),Object(f.jsx)("td",{children:a.address.line1+" - "+a.address.city}),Object(f.jsx)("td",{children:a.address.postal_code}),Object(f.jsx)("td",{children:a.address.country_code})]})})]}),Object(f.jsxs)("table",{style:{margin:"30px 0px"},children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{}),Object(f.jsx)("th",{children:"Product"}),Object(f.jsx)("th",{children:"Quantity"}),Object(f.jsx)("th",{children:"Price"})]})}),Object(f.jsx)("tbody",{children:a.cart.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{children:[Object(f.jsx)("img",{src:e.images.url})," "]}),Object(f.jsx)("td",{children:e.title}),Object(f.jsx)("td",{children:e.quantity}),Object(f.jsx)("td",{children:e.price*e.quantity})]},e._id)}))})]})]})};var B=function(){return Object(f.jsx)("div",{children:"404 | Not Found"})};var H=function(){var e=Object(n.useContext)(v),t=Object(d.a)(e.userAPI.history,2),c=t[0],r=t[1],a=Object(d.a)(e.userAPI.isAdmin,1)[0],s=Object(d.a)(e.token,1)[0];return Object(n.useEffect)((function(){s&&function(){var e=Object(j.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=7;break}return e.next=3,b.a.get("/api/payment",{headers:{Authentication:s}});case 3:t=e.sent,r(t.data),e.next=11;break;case 7:return e.next=9,b.a.get("/user/history",{headers:{Authentication:s}});case 9:c=e.sent,r(c.data);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,a,r]),Object(f.jsxs)("div",{className:"history-page",children:[Object(f.jsx)("h2",{children:"ORDER HISTORY"}),Object(f.jsxs)("h4",{children:["You have ",c.length," ordered"]}),Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Payment ID"}),Object(f.jsx)("th",{children:"Date of Purchased"}),Object(f.jsx)("th",{})]})}),Object(f.jsx)("tbody",{children:c.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.paymentID}),Object(f.jsx)("td",{children:e.createdAt}),Object(f.jsx)("td",{children:Object(f.jsx)(i.b,{to:"/history/".concat(e._id),children:"View"})})]},e._id)}))})]})]})};var Q=function(){var e=Object(n.useContext)(v),t=Object(d.a)(e.categoryAPI.categories,1)[0],c=Object(n.useState)(""),r=Object(d.a)(c,2),a=r[0],s=r[1],i=Object(d.a)(e.token,1)[0],o=Object(d.a)(e.categoryAPI.callback,2),l=o[0],h=o[1],O=Object(n.useState)(!1),p=Object(d.a)(O,2),x=p[0],m=p[1],g=Object(n.useState)(""),y=Object(d.a)(g,2),k=y[0],w=y[1],C=function(){var e=Object(j.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!x){e.next=9;break}return e.next=5,b.a.put("/api/category/".concat(k),{name:a},{headers:{Authentication:i}});case 5:c=e.sent,alert(c.data.msg),e.next=13;break;case 9:return e.next=11,b.a.post("/api/category",{name:a},{headers:{Authentication:i}});case 11:n=e.sent,alert(n.data.msg);case 13:m(!1),s(""),h(!l),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(u.a.mark((function e(t,c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(t),s(c),m(!0);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),A=function(){var e=Object(j.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("/api/category/".concat(t),{headers:{Authentication:i}});case 3:c=e.sent,alert(c.data.msg),h(!l),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"categories",children:[Object(f.jsxs)("form",{onSubmit:C,children:[Object(f.jsx)("label",{htmlFor:"category",children:"Category"}),Object(f.jsx)("input",{type:"text",name:"category",value:a,required:!0,onChange:function(e){return s(e.target.value)}}),Object(f.jsx)("button",{type:"submit",children:x?"Update":"Save"})]}),Object(f.jsx)("div",{className:"col",children:t.map((function(e){return Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("p",{children:[e.name," "]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(){return _(e._id,e.name)},children:"Edit"}),Object(f.jsx)("button",{onClick:function(){return A(e._id)},children:"Delete"})]})]},e._id)}))})]})},$=(c(75),{product_id:"",title:"",price:0,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nihil minus id harum omnis totam similique veniam. Quia, maxime ducimus.",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nihil minus id harum omnis totam similique veniam. Quia, maxime ducimus.",category:"",_id:""});var G=function(){var e=Object(n.useContext)(v),t=Object(d.a)(e.categoryAPI.categories,1)[0],c=Object(n.useState)($),r=Object(d.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(!1),o=Object(d.a)(i,2),l=o[0],h=o[1],p=Object(n.useState)(!1),x=Object(d.a)(p,2),m=x[0],g=x[1];console.log(a.description);var y=Object(d.a)(e.userAPI.isAdmin,1)[0],k=Object(d.a)(e.token,1)[0],w=Object(_.f)(),C=Object(_.g)(),A=Object(n.useState)(!1),P=Object(d.a)(A,2),S=P[0],I=P[1],D=Object(d.a)(e.productsAPI.products,1)[0],q=Object(d.a)(e.productsAPI.callback,2),F=q[0],L=q[1];Object(n.useEffect)((function(){C.id?(I(!0),D.forEach((function(e){e._id===C.id&&(s(e),h(e.images))}))):(I(!1),s($),h(!1))}),[C.id,D]);var R=function(){var e=Object(j.a)(u.a.mark((function e(t){var c,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,y){e.next=4;break}return e.abrupt("return",alert("you are not admin"));case 4:if(c=t.target.files[0],console.log(c),c){e.next=8;break}return e.abrupt("return",alert("files not exist"));case 8:if(!(c.size>1048576)){e.next=10;break}return e.abrupt("return",alert("Size too large !"));case 10:if("image/jpeg"===c.type||"image/png"===c.type){e.next=12;break}return e.abrupt("return",alert("files format incorrect"));case 12:return(n=new FormData).append("file",c),g(!0),e.next=17,b.a.post("/api/upload",n,{headers:{"content-type":"multipart/form-data",Authentication:k}});case 17:r=e.sent,g(!1),h(r.data),console.log(r.data),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 26:case"end":return e.stop()}}),e,null,[[1,23]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,y){e.next=3;break}return e.abrupt("return",alert("you are not admin"));case 3:return g(!0),e.next=6,b.a.post("/api/destroy",{public_id:l.public_id},{headers:{Authentication:k}});case 6:e.sent,g(!1),h(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),U=function(e){var t=e.target,c=t.name,n=t.value;s(Object(O.a)(Object(O.a)({},a),{},Object(E.a)({},c,n))),console.log(Object(O.a)(Object(O.a)({},a),{},Object(E.a)({},c,n)))},J=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,y){e.next=4;break}return e.abrupt("return",alert("you are not admin"));case 4:if(l){e.next=6;break}return e.abrupt("return",alert("No image upload"));case 6:if(!S){e.next=11;break}return e.next=9,b.a.put("/api/products/".concat(a._id),Object(O.a)(Object(O.a)({},a),{},{images:l}),{headers:{Authentication:k}});case 9:e.next=13;break;case 11:return e.next=13,b.a.post("/api/products",Object(O.a)(Object(O.a)({},a),{},{images:l}),{headers:{Authentication:k}});case 13:L(!F),w.push("/"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),Y={display:l?"block":"none"};return console.log(l),Object(f.jsxs)("div",{className:"create_product",children:[Object(f.jsxs)("div",{className:"upload",children:[Object(f.jsx)("input",{type:"file",name:"file",id:"file_up",onChange:R}),m?Object(f.jsx)("div",{id:"file_img",children:Object(f.jsx)(N,{})}):Object(f.jsxs)("div",{id:"file_img",style:Y,children:[Object(f.jsx)("img",{src:l?l.url:"",alt:""}),Object(f.jsx)("span",{onClick:T,children:"X"})]})]}),Object(f.jsxs)("form",{onSubmit:J,children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("label",{htmlFor:"product_id",children:"Product ID"}),Object(f.jsx)("input",{type:"text",name:"product_id",id:"porduct_id",required:!0,value:a.product_id,onChange:U,disabled:S})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("label",{htmlFor:"title",children:"Title"}),Object(f.jsx)("input",{type:"text",name:"title",id:"title",required:!0,value:a.title,onChange:U})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("label",{htmlFor:"price",children:"Price"}),Object(f.jsx)("input",{type:"number",name:"price",id:"price",required:!0,value:a.price,onChange:U})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("label",{htmlFor:"description",children:"Description"}),Object(f.jsx)("textarea",{type:"text",name:"description",id:"description",required:!0,value:a.description,row:"5",onChange:U})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("label",{htmlFor:"content",children:"Content"}),Object(f.jsx)("textarea",{type:"text",name:"content",id:"content",required:!0,value:a.content,row:"7",onChange:U})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("label",{htmlFor:"categories",children:"Categories : "}),Object(f.jsxs)("select",{name:"category",value:a.category,onChange:U,children:[Object(f.jsx)("option",{value:"",children:"Please Select a category"}),t.map((function(e){return Object(f.jsx)("option",{value:e._id,children:e.name},e._id)}))]})]}),Object(f.jsx)("button",{type:"submit",children:S?"Update":"Create"})]})]})};var V=function(){var e=Object(n.useContext)(v),t=Object(d.a)(e.userAPI.isLogged,1)[0],c=Object(d.a)(e.userAPI.isAdmin,1)[0];return Object(f.jsxs)(_.c,{children:[Object(f.jsx)(_.a,{path:"/",exact:!0,component:S}),Object(f.jsx)(_.a,{path:"/detail/:id",exact:!0,component:I}),Object(f.jsx)(_.a,{path:"/login",exact:!0,component:t?B:D}),Object(f.jsx)(_.a,{path:"/register",exact:!0,component:t?B:q}),Object(f.jsx)(_.a,{path:"/cart",exact:!0,component:M}),Object(f.jsx)(_.a,{path:"/history",exact:!0,component:t?H:B}),Object(f.jsx)(_.a,{path:"/history/:id",exact:!0,component:t?z:B}),Object(f.jsx)(_.a,{path:"/category",exact:!0,component:c?Q:B}),Object(f.jsx)(_.a,{path:"/create_product",exact:!0,component:c?G:B}),Object(f.jsx)(_.a,{path:"/edit_product/:id",exact:!0,component:c?G:B}),Object(f.jsx)(_.a,{path:"*",exact:!0,component:B})]})};var X=function(){return Object(f.jsx)(g,{children:Object(f.jsx)(i.a,{children:Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(C,{}),Object(f.jsx)(V,{})]})})})};s.a.render(Object(f.jsx)(X,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.8a4f05c1.chunk.js.map