import{_ as m,o as l,c as p,d as a,p as u,h}from"./index.dd322045.js";const d="http://localhost:3000",_={name:"App",data:()=>({items:[{id:"xl-tshirt"}],stripe:"",elements:""}),mounted(){this.includeStripe("js.stripe.com/v3/",function(){this.configureStripe(),this.initialize(),this.checkStatus()}.bind(this))},methods:{async initialize(){console.log("${baseUrl}",d);const e=this.items,t=await fetch(`${d}/products/create-payment-intent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:e})}),{clientSecret:s}=await t.json(),o={theme:"stripe"};this.elements=this.stripe.elements({appearance:o,clientSecret:s});const n={layout:"tabs"};this.elements.create("payment",n).mount("#payment-element")},async handleSubmit(e){e.preventDefault(),this.setLoading(!0);const t=this.elements,{error:s}=await this.stripe.confirmPayment({elements:t,confirmParams:{return_url:"http://localhost:5173/checkoutConfirm"}});s.type==="card_error"||s.type==="validation_error"?this.showMessage(s.message):this.showMessage("An unexpected error occurred."),this.setLoading(!1)},async checkStatus(){const e=new URLSearchParams(window.location.search).get("payment_intent_client_secret");if(!e)return;const{paymentIntent:t}=await this.stripe.retrievePaymentIntent(e);switch(t.status){case"succeeded":this.showMessage("Payment succeeded!");break;case"processing":this.showMessage("Your payment is processing.");break;case"requires_payment_method":this.showMessage("Your payment was not successful, please try again.");break;default:this.showMessage("Something went wrong.");break}},includeStripe(e,t){let s=document,o="script",n=s.createElement(o),i=s.getElementsByTagName(o)[0];n.src="//"+e,t&&n.addEventListener("load",function(r){t(null,r)},!1),i.parentNode.insertBefore(n,i)},configureStripe(){this.stripe=Stripe("pk_test_51KoZfDGKgHwrTKo1KgJ9LvJYHmjrzjbomTzTa0YJIA1Y2JtfyHZiCP0h99gQWsiU8OejLKHu8PTRvcZ2gsZFWvIg00evohgQNm")},showMessage(e){const t=document.querySelector("#payment-message");t.classList.remove("hidden"),t.textContent=e,setTimeout(function(){t.classList.add("hidden"),e.textContent=""},4e3)},setLoading(e){e?(document.querySelector("#submit").disabled=!0,document.querySelector("#spinner").classList.remove("hidden"),document.querySelector("#button-text").classList.add("hidden")):(document.querySelector("#submit").disabled=!1,document.querySelector("#spinner").classList.add("hidden"),document.querySelector("#button-text").classList.remove("hidden"))}}},c=e=>(u("data-v-3274420d"),e=e(),h(),e),y={id:"payment-form"},g=c(()=>a("div",{id:"payment-element"},null,-1)),f=c(()=>a("div",{class:"spinner hidden",id:"spinner"},null,-1)),S=c(()=>a("span",{id:"button-text"},"Pay now",-1)),w=[f,S],b=c(()=>a("div",{id:"payment-message",class:"hidden"},null,-1));function v(e,t,s,o,n,i){return l(),p("form",y,[g,a("button",{id:"submit",onClick:t[0]||(t[0]=(...r)=>i.handleSubmit&&i.handleSubmit(...r))},w),b])}const k=m(_,[["render",v],["__scopeId","data-v-3274420d"]]);export{k as default};
