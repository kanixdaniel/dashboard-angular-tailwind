import{a as y}from"./chunk-MJ2OYAHA.js";import{c as S,g as T}from"./chunk-DX75IJ7V.js";import"./chunk-RQUE56IU.js";import"./chunk-4KSC2CFY.js";import{a as h}from"./chunk-KCT2KUKV.js";import{Ab as C,Eb as c,Kb as v,Lb as D,Mb as r,Nb as o,Ob as p,Ub as u,Ya as i,ac as s,ca as d,dc as U,gc as g,hb as _,nb as l,ob as x,ub as a,vb as m}from"./chunk-MXHP32T4.js";var F=(e,n)=>n.id,E=()=>[S],b=e=>["/dashboard/user",e];function L(e,n){if(e&1&&(r(0,"li",2),p(1,"img",3),r(2,"a",4),s(3),o()()),e&2){let t=u().$implicit;i(),c("alt",t.first_name)("srcset",t.avatar),i(),c("routerLink",g(5,b,t.id)),i(),U(" ",t.first_name," ",t.last_name," ")}}function k(e,n){e&1&&(l(0,L,4,7),a(1,0,E,null,null,null,null,null,null,1),C(),m())}function I(e,n){e&1&&(r(0,"h3"),s(1,"No se encontraron usuarios"),o())}function M(e,n){if(e&1&&(r(0,"ul"),v(1,k,3,0,null,null,F,!1,I,2,0,"h3"),o()),e&2){let t=u();i(),D(t.usersService.users())}}function N(e,n){e&1&&(r(0,"h3"),s(1,"Cargando..."),o())}var f=class e{usersService=d(y);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=_({type:e,selectors:[["ng-component"]],decls:5,vars:0,consts:[[1500,null],["title","Listado de usuarios"],[1,"flex","items-center","my-2","cursor-pointer"],[1,"rounded","w-14",3,"alt","srcset"],[1,"mx-5","hover:underline",3,"routerLink"]],template:function(t,O){t&1&&(p(0,"app-title",1),l(1,M,4,1)(2,N,2,0),a(3,1,null,2,null,null,0,null,x),m())},dependencies:[h,T],encapsulation:2})};export{f as default};
