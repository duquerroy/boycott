import{j as B,k as A,l as P,m as K,o as f,g as I,e as s,n as _,c as g,q as p,s as k,T as S,v as N,f as h,t as y,_ as R,h as v,r as u,b as r,a as d,F as x,d as q}from"./index.5c300703.js";var M=['a[href]:not([tabindex^="-"])','area[href]:not([tabindex^="-"])','input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])','input[type="radio"]:not([disabled]):not([tabindex^="-"])','select:not([disabled]):not([tabindex^="-"])','textarea:not([disabled]):not([tabindex^="-"])','button:not([disabled]):not([tabindex^="-"])','iframe:not([tabindex^="-"])','audio[controls]:not([tabindex^="-"])','video[controls]:not([tabindex^="-"])','[contenteditable]:not([tabindex^="-"])','[tabindex]:not([tabindex^="-"])'],O=9,V=27;function a(t){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.$el=t,this.shown=!1,this._id=this.$el.getAttribute("data-a11y-dialog")||this.$el.id,this._previouslyFocused=null,this._listeners={},this.create()}a.prototype.create=function(){return this.$el.setAttribute("aria-hidden",!0),this.$el.setAttribute("aria-modal",!0),this.$el.setAttribute("tabindex",-1),this.$el.hasAttribute("role")||this.$el.setAttribute("role","dialog"),this._openers=b('[data-a11y-dialog-show="'+this._id+'"]'),this._openers.forEach(function(t){t.addEventListener("click",this._show)}.bind(this)),this._closers=b("[data-a11y-dialog-hide]",this.$el).concat(b('[data-a11y-dialog-hide="'+this._id+'"]')),this._closers.forEach(function(t){t.addEventListener("click",this._hide)}.bind(this)),this._fire("create"),this};a.prototype.show=function(t){return this.shown?this:(this._previouslyFocused=document.activeElement,this.$el.removeAttribute("aria-hidden"),this.shown=!0,T(this.$el),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",t),this)};a.prototype.hide=function(t){return this.shown?(this.shown=!1,this.$el.setAttribute("aria-hidden","true"),this._previouslyFocused&&this._previouslyFocused.focus&&this._previouslyFocused.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",t),this):this};a.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(t){t.removeEventListener("click",this._show)}.bind(this)),this._closers.forEach(function(t){t.removeEventListener("click",this._hide)}.bind(this)),this._fire("destroy"),this._listeners={},this};a.prototype.on=function(t,e){return typeof this._listeners[t]>"u"&&(this._listeners[t]=[]),this._listeners[t].push(e),this};a.prototype.off=function(t,e){var o=(this._listeners[t]||[]).indexOf(e);return o>-1&&this._listeners[t].splice(o,1),this};a.prototype._fire=function(t,e){var o=this._listeners[t]||[],i=new CustomEvent(t,{detail:e});this.$el.dispatchEvent(i),o.forEach(function(l){l(this.$el,e)}.bind(this))};a.prototype._bindKeypress=function(t){!this.$el.contains(document.activeElement)||(this.shown&&t.which===V&&this.$el.getAttribute("role")!=="alertdialog"&&(t.preventDefault(),this.hide(t)),this.shown&&t.which===O&&Y(this.$el,t))};a.prototype._maintainFocus=function(t){this.shown&&!t.target.closest('[aria-modal="true"]')&&!t.target.closest("[data-a11y-dialog-ignore-focus-trap]")&&T(this.$el)};function j(t){return Array.prototype.slice.call(t)}function b(t,e){return j((e||document).querySelectorAll(t))}function T(t){var e=t.querySelector("[autofocus]")||t;e.focus()}function H(t){return b(M.join(","),t).filter(function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)})}function Y(t,e){var o=H(t),i=o.indexOf(document.activeElement);e.shiftKey&&i===0?(o[o.length-1].focus(),e.preventDefault()):!e.shiftKey&&i===o.length-1&&(o[0].focus(),e.preventDefault())}function C(){b("[data-a11y-dialog]").forEach(function(t){new a(t)})}typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",C):window.requestAnimationFrame?window.requestAnimationFrame(C):window.setTimeout(C,16));var G=(t,e)=>{const o=t.__vccOpts||t;for(const[i,l]of e)o[i]=l;return o};const U={name:"A11yDialog",props:{id:{type:String,required:!0},dialogRoot:{type:String,default:"body",required:!1},classNames:{type:Object,default(){return{container:"dialog-container",document:"dialog-content",overlay:"dialog-overlay",title:"dialog-title",closeButton:"dialog-close"}}},role:{type:String,required:!1,default:"dialog",validator(t){return["dialog","alertdialog"].includes(t)}},titleId:{type:String,default:""},closeButtonLabel:{type:String,default:"Close this dialog window"},closeButtonPosition:{type:String,required:!1,default:"first",validator(t){return["first","last","none"].includes(t)}}},emits:["dialog-ref"],setup(t,{emit:e}){let o;const i=B(null),l=A(()=>t.dialogRoot||"body"),c=A(()=>t.titleId||`${t.id}-title`),n=A(()=>["dialog","alertdialog"].includes(t.role)?t.role:"dialog"),w=async()=>{await N(),o=new a(i.value),e("dialog-ref",o)};P(()=>{w()});const E=()=>{o.hide()};return K(()=>{o&&o.destroy(),e("dialog-ref")}),{dialog:o,close:E,portalTarget:l,fullTitleId:c,roleAttribute:n,rootElement:i}}},z=["id","role","aria-labelledby"],J=["data-a11y-dialog-hide"],Z=["aria-label"],W=h(y("\xD7")),Q=["id"],X=["aria-label"],tt=h(y("\xD7"));function et(t,e,o,i,l,c){return f(),I(S,{to:i.portalTarget},[s("div",{ref:"rootElement",id:o.id,class:_(o.classNames.container),role:i.roleAttribute,"aria-hidden":"true","aria-labelledby":i.fullTitleId},[s("div",{"data-a11y-dialog-hide":o.role==="alertdialog"?void 0:!0,tabIndex:"-1",class:_(o.classNames.overlay),onClick:e[0]||(e[0]=n=>o.role==="alertdialog"?void 0:i.close)},null,10,J),s("div",{role:"document",class:_(o.classNames.document)},[o.closeButtonPosition=="first"?(f(),g("button",{key:0,"data-a11y-dialog-hide":"",type:"button","aria-label":o.closeButtonLabel,class:_(o.classNames.closeButton),onClick:e[1]||(e[1]=(...n)=>i.close&&i.close(...n))},[p(t.$slots,"closeButtonContent",{},()=>[W])],10,Z)):k("",!0),s("p",{id:i.fullTitleId,class:_(o.classNames.title)},[p(t.$slots,"title")],10,Q),p(t.$slots,"default"),o.closeButtonPosition=="last"?(f(),g("button",{key:1,"data-a11y-dialog-hide":"",type:"button","aria-label":o.closeButtonLabel,class:_(o.classNames.closeButton),onClick:e[2]||(e[2]=(...n)=>i.close&&i.close(...n))},[p(t.$slots,"closeButtonContent",{},()=>[tt])],10,X)):k("",!0)],2)],10,z)],8,["to"])}var ot=G(U,[["render",et]]);const it={name:"App",components:{"a11y-dialog":ot},data(){return{products:[],API_IMAGE:"http://195.15.226.172:7585",dialog:null,productToremove:null}},computed:{total(){return this.products.reduce((e,o)=>e+o.item.price/100,0).toFixed(2)}},async created(){await v().fetchCartProducts();const t=v().productsInCart;t&&(this.products=t.map(e=>e))},mounted(){v().$subscribe((t,e)=>{console.log("state",e.productsInCart);const o=e.productsInCart;this.products=o.map(i=>i)})},methods:{async removeFromCart(){await v().removeFromCart(this.productToremove),this.dialog=!1},checkout(){this.$router.push("/checkout")},openDialog(t){this.productToremove=t,this.dialog&&(console.log("this.dialog",this.dialog),this.dialog.show())},assignDialogRef(t){console.log("dialog",t),this.dialog=t}}},st=s("h1",null,"Mon panier",-1),nt={class:"px-5"},at=s("span",null,"Voulez-vous vraiment supprimer ce produit de votre panier ? ",-1),lt={class:"mt-5"};function rt(t,e,o,i,l,c){const n=u("v-btn"),w=u("v-img"),E=u("v-chip"),F=u("v-icon"),D=u("v-table"),L=u("v-row"),$=u("a11y-dialog");return f(),g(x,null,[st,s("h3",null,"Total: "+y(c.total)+"$",1),l.products.length>0?(f(),I(n,{key:0,color:"primary",class:"white--text",onClick:c.checkout},{default:r(()=>[h(" Payer ")]),_:1},8,["onClick"])):k("",!0),d(L,null,{default:r(()=>[d(D,{class:"elevation-1 mt-4"},{default:r(()=>[s("tbody",null,[(f(!0),g(x,null,q(l.products,m=>(f(),g("tr",{key:m.item._id},[s("td",null,[d(w,{src:`${l.API_IMAGE}/${m.item.imageUrl[0]}`,width:"100",class:"ma-4"},null,8,["src"])]),s("td",null,[s("h3",nt,y(m.item.title),1)]),s("td",null,[d(E,{class:"ma-2 font-weight-bold",color:"primary"},{default:r(()=>[h(y(m.item.price/100)+"$ ",1)]),_:2},1024)]),s("td",null,[d(n,{class:"ma-2",icon:"",onClick:dt=>c.openDialog(m)},{default:r(()=>[d(F,{color:"black"},{default:r(()=>[h(" mdi-trash-can ")]),_:1})]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1}),d($,{id:"app-dialog",onDialogRef:c.assignDialogRef},{title:r(()=>[at]),default:r(()=>[s("div",lt,[d(n,{"data-a11y-dialog-hide":"app-dialog",color:"primary"},{default:r(()=>[h(" Non ")]),_:1}),d(n,{onClick:c.removeFromCart,"data-a11y-dialog-hide":"app-dialog",class:"ml-5",color:"secondary"},{default:r(()=>[h(" Oui ")]),_:1},8,["onClick"])])]),_:1},8,["onDialogRef"])],64)}const ut=R(it,[["render",rt]]);export{ut as default};
