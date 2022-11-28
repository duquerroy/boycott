import{_ as k,g as s,r as t,o as _,c as v,d as l,t as i,a as o,w as e,F as f,b as P,f as F,e as d}from"./index.f52bfa96.js";const $={name:"App",data(){return{products:[],API_IMAGE:"http://localhost:3000"}},computed:{total(){return this.products.reduce((a,r)=>a+r.item.price,0).toFixed(2)}},async created(){await s().fetchCartProducts();const c=s().productsInCart;c&&(this.products=c.map(a=>a))},mounted(){s().$subscribe((c,a)=>{console.log("state",a.productsInCart);const r=a.productsInCart;this.products=r.map(m=>m)})},methods:{async removeFromCart(c){await s().removeFromCart(c)}}},E=l("h1",null,"Mon panier",-1),M={class:"d-flex justify-md-space-between align-center"};function B(c,a,r,m,u,p){const h=t("v-img"),C=t("v-card-title"),I=t("v-chip"),w=t("v-icon"),A=t("v-btn"),g=t("v-card-actions"),b=t("v-card"),x=t("v-col"),y=t("v-row");return _(),v(f,null,[E,l("h3",null,"Total: "+i(p.total)+"$",1),o(y,null,{default:e(()=>[(_(!0),v(f,null,P(u.products,n=>(_(),F(x,{key:n.item._id,cols:"12"},{default:e(()=>[o(b,null,{default:e(()=>[l("div",M,[l("div",null,[o(h,{src:`${u.API_IMAGE}/${n.item.imageUrl[0]}`,width:"100",class:"my-4 ml-4"},null,8,["src"])]),o(C,null,{default:e(()=>[d(i(n.item.title),1)]),_:2},1024),o(I,{class:"ma-2 font-weight-bold",color:"primary"},{default:e(()=>[d(i(n.item.price)+"$ ",1)]),_:2},1024),o(g,null,{default:e(()=>[o(A,{color:"primary",class:"ma-2",text:"",onClick:G=>p.removeFromCart(n)},{default:e(()=>[o(w,{class:"mr-2",color:"black"},{default:e(()=>[d(" mdi-trash-can ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1})],64)}const N=k($,[["render",B]]);export{N as default};
