import{Aa as v,Eb as P,H as C,Kb as D,Lb as S,Mb as i,Nb as r,Ob as Q,Pb as O,Sb as d,Ub as w,V as b,Ya as p,a as f,ac as a,b as g,bc as E,cc as m,db as x,hb as c,ma as h,na as I,sc as q,z as y,za as _}from"./chunk-MXHP32T4.js";var s=class n{product=v.required();onIncrementQuantity=_();incrementQuantity(){this.onIncrementQuantity.emit(this.product().quantity+1)}loginEffect=q(()=>{console.log(this.product().name)});static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["app-product-card"]],inputs:{product:[1,"product"]},outputs:{onIncrementQuantity:"onIncrementQuantity"},decls:7,vars:3,consts:[[1,"bg-slate-200","w-full","rounded-xl","h-40","flex","justify-center","items-center","flex-col"],[1,"font-bold","text-sm","mx-2"],[1,"bg-blue-500","p-2","rounded","text-white","hover:bg-blue-600","transition-all",3,"click"]],template:function(t,o){t&1&&(i(0,"div",0)(1,"span"),a(2),r(),i(3,"h2",1),a(4),r(),i(5,"button",2),d("click",function(){return o.incrementQuantity()}),a(6),r()()),t&2&&(p(2),E(o.product().name),p(2),m("# ",o.product().id,""),p(2),m(" Agregar ",o.product().quantity," "))},encapsulation:2,changeDetection:0})};var N=(n,e)=>e.id;function $(n,e){if(n&1){let t=O();i(0,"app-product-card",4),d("onIncrementQuantity",function(u){let T=h(t).$implicit,k=w();return I(k.updateProduct(T,u))}),r()}if(n&2){let t=e.$implicit;P("product",t)}}var l=class n{products=x([{id:1,name:"Producto 1",quantity:0},{id:2,name:"Producto 2",quantity:0}]);intervalSubscription=y(1e3).pipe(b(()=>{this.products.update(e=>[...e,{id:e.length+1,name:`Product ${e.length+1}`,quantity:0}])}),C(5)).subscribe();ngOnDestroy(){this.intervalSubscription.unsubscribe()}updateProduct(e,t){this.products.update(o=>o.map(u=>u.id===e.id?g(f({},u),{quantity:t}):u))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["app-input-output"]],decls:6,vars:0,consts:[[1,"text-3xl"],[1,"my-2"],[1,"grid","grid-cols-1","sm:grid-cols-3","gap-2"],[3,"product"],[3,"onIncrementQuantity","product"]],template:function(t,o){t&1&&(i(0,"h1",0),a(1,"Listado de productos"),r(),Q(2,"hr",1),i(3,"div",2),D(4,$,1,1,"app-product-card",3,N),r()),t&2&&(p(4),S(o.products()))},dependencies:[s],encapsulation:2,changeDetection:0})};export{l as default};
