import{_ as E,g as _,r as e,o as a,f as n,w as o,a as c,c as v,b as f,F as h,C as i,e as b,t as g,d as T}from"./index.f52bfa96.js";const G={data(){return{API_IMAGE:"http://localhost:3000",carousel:0}},computed:{product(){var r;return(r=_().product)!=null&&r.product?_().product.product:null},breadcrumbs(){const r=[{text:"Accueil",disabled:!1,to:{name:"home"}}];return this.product&&r.push({text:this.product.categoryId.name,disabled:!1,to:{name:"category",params:{category:this.product.categoryId.name}}}),r}},async created(){const r=this.$route.params.id;await _().fetchProduct(r)},methods:{async addToCart(r){console.log("product",r),await _().addToCart(r).then(()=>{this.product.isSold=!0})}}},U=T("p",{class:"font-weight-bold"},"Ajouter au panier",-1);function B(r,s,L,N,d,t){const y=e("v-breadcrumbs"),A=e("v-carousel-item"),I=e("v-carousel"),w=e("v-img"),m=e("v-col"),p=e("v-row"),k=e("v-card-title"),x=e("v-card-text"),C=e("v-chip"),P=e("v-btn"),V=e("v-card-actions"),M=e("v-card"),S=e("v-container");return a(),n(S,null,{default:o(()=>[c(y,{items:t.breadcrumbs},null,8,["items"]),t.product?(a(),n(p,{key:0},{default:o(()=>[c(m,{cols:"12",md:"6"},{default:o(()=>[t.product.imageUrl?(a(),n(I,{key:0,height:300,"show-arrows":"hover","hide-delimiters":"",modelValue:d.carousel,"onUpdate:modelValue":s[0]||(s[0]=l=>d.carousel=l)},{default:o(()=>[(a(!0),v(h,null,f(t.product.imageUrl,(l,u)=>(a(),n(A,{key:u,src:`${d.API_IMAGE}/${l}`,cover:""},null,8,["src"]))),128))]),_:1},8,["modelValue"])):i("",!0),t.product?(a(),n(p,{key:1},{default:o(()=>[(a(!0),v(h,null,f(t.product.imageUrl,(l,u)=>(a(),n(m,{class:"mt-1",key:u},{default:o(()=>[c(w,{src:`${d.API_IMAGE}/${l}`,alt:"product",width:"100%",height:"100px",onClick:F=>d.carousel=u,style:{cursor:"pointer"}},null,8,["src","onClick"])]),_:2},1024))),128))]),_:1})):i("",!0)]),_:1}),c(m,{cols:"12",md:"6"},{default:o(()=>[c(M,null,{default:o(()=>[c(k,null,{default:o(()=>[b(g(t.product.title),1)]),_:1}),c(x,{innerHTML:t.product.description},null,8,["innerHTML"]),c(C,{class:"ma-2 font-weight-bold",color:"primary"},{default:o(()=>[b(g(t.product.price)+"\u20AC ",1)]),_:1}),c(V,null,{default:o(()=>[c(P,{disabled:!!t.product.isSold,color:"primary",class:"ma-2",text:"",onClick:s[1]||(s[1]=l=>t.addToCart(t.product))},{default:o(()=>[U]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})):i("",!0)]),_:1})}const j=E(G,[["render",B]]);export{j as default};
