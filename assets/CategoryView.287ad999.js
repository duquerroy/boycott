import{_ as I,P as A,G as w,h as d,r as a,o as u,g as m,b as s,a as t,c as V,d as x,F as S,e as E}from"./index.db3ca775.js";const T={name:"App",components:{Product:A},data(){var e;return{API_IMAGE:"http://localhost:3000",selectedCategorie:(e=this.$route.params)==null?void 0:e.category,page:1,pages:1,products:[],categories:[]}},watch:{selectedCategorie(){this.page=1,this.fetchProducts()}},computed:{breadcrumbs(){var o;const e=[{text:"Accueil",disabled:!1,to:{name:"home"}}];if(this.$route.params){console.log("this.selectedCategorie",this.selectedCategorie);const c=(o=this.selectedCategorie)!=null&&o.name?this.selectedCategorie.name:this.selectedCategorie;console.log("selectCat",c),e.push({text:c,disabled:!0,to:{name:"category",params:{category:c}}})}return e}},async created(){const e=w();await e.fetchCategories(),this.categories=e.categories.categories;const o=this.$route.params.category,c=this.categories.find(_=>_.name===o)._id;await d().fetchProducts(null,c),this.products=d().products.products,console.log("this.products",this.products),this.pages=d().products.pages},methods:{async addToCart(e){console.log("product",e),await d().addToCart(e)},async fetchProducts(e){var c;e&&(this.page=e);const o=d();await o.fetchProducts(this.page,((c=this.selectedCategorie)==null?void 0:c._id)||""),this.products=o.products.products,this.pages=Math.ceil(o.products.totalItems/9)||1,window.scrollTo(0,0)}}},B=E("h2",{class:"headline mb-0"},"Filtrer par cat\xE9gorie",-1);function k(e,o,c,_,l,p){const g=a("v-breadcrumbs"),n=a("v-col"),i=a("v-row"),h=a("v-card-title"),f=a("v-select"),v=a("v-card-text"),C=a("v-card"),b=a("Product"),P=a("v-pagination"),y=a("v-container");return u(),m(y,null,{default:s(()=>[t(i,null,{default:s(()=>[t(n,{cols:"12"},{default:s(()=>[t(g,{items:p.breadcrumbs},null,8,["items"])]),_:1})]),_:1}),t(i,null,{default:s(()=>[t(n,{cols:"6"},{default:s(()=>[t(C,null,{default:s(()=>[t(h,null,{default:s(()=>[B]),_:1}),t(v,null,{default:s(()=>[t(f,{modelValue:l.selectedCategorie,"onUpdate:modelValue":o[0]||(o[0]=r=>l.selectedCategorie=r),items:l.categories,"item-title":"name","item-value":"_id",label:"Categories","return-object":""},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),t(n,{cols:"12",md:"12"},{default:s(()=>[t(i,null,{default:s(()=>[(u(!0),V(S,null,x(l.products,r=>(u(),m(n,{key:r._id,cols:"12",sm:"6",md:"4"},{default:s(()=>[t(b,{product:r,btnText:r.isSold||r.isCart?"Vendu":"Ajouter au panier"},null,8,["product","btnText"])]),_:2},1024))),128))]),_:1}),t(i,null,{default:s(()=>[t(n,{cols:"12"},{default:s(()=>[t(P,{modelValue:l.page,"onUpdate:modelValue":o[1]||(o[1]=r=>l.page=r),length:l.pages,"total-visible":5,onInput:p.fetchProducts,circle:"",color:"primary"},null,8,["modelValue","length","onInput"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const L=I(T,[["render",k]]);export{L as default};
