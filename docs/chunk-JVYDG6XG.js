import{a as y}from"./chunk-QTL5LIPV.js";import{f as S,j as T}from"./chunk-6M5NZW7W.js";import"./chunk-Q3BDIAOK.js";import{a as h}from"./chunk-VJKZEJPQ.js";import{Da as _,Ia as l,Ja as x,Pa as a,Qa as m,T as d,Va as C,Za as c,cb as v,db as D,eb as r,fb as o,gb as p,ib as u,ob as s,rb as U,tb as g,ua as i}from"./chunk-DM4W2OZZ.js";var F=(e,n)=>n.id,E=()=>[S],b=e=>["/dashboard/user",e];function L(e,n){if(e&1&&(r(0,"li",2),p(1,"img",3),r(2,"a",4),s(3),o()()),e&2){let t=u().$implicit;i(),c("alt",t.first_name)("srcset",t.avatar),i(),c("routerLink",g(5,b,t.id)),i(),U(" ",t.first_name," ",t.last_name," ")}}function k(e,n){e&1&&(l(0,L,4,7),a(1,0,E,null,null,null,null,null,null,1),C(),m())}function I(e,n){e&1&&(r(0,"h3"),s(1,"No se encontraron usuarios"),o())}function M(e,n){if(e&1&&(r(0,"ul"),v(1,k,3,0,null,null,F,!1,I,2,0,"h3"),o()),e&2){let t=u();i(),D(t.usersService.users())}}function N(e,n){e&1&&(r(0,"h3"),s(1,"Cargando..."),o())}var f=class e{usersService=d(y);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=_({type:e,selectors:[["ng-component"]],decls:5,vars:0,consts:[[1500,null],["title","Listado de usuarios"],[1,"flex","items-center","my-2","cursor-pointer"],[1,"rounded","w-14",3,"alt","srcset"],[1,"mx-5","hover:underline",3,"routerLink"]],template:function(t,O){t&1&&(p(0,"app-title",1),l(1,M,4,1)(2,N,2,0),a(3,1,null,2,null,null,0,null,x),m())},dependencies:[h,T],encapsulation:2})};export{f as default};