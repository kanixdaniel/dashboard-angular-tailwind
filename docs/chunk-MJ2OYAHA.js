import{a as c}from"./chunk-RQUE56IU.js";import{J as r,Y as a,ca as n,db as p,qc as i,r as o}from"./chunk-MXHP32T4.js";var f=class t{_http=n(c);#e=p({loading:!0,users:[]});users=i(()=>this.#e().users);loading=i(()=>this.#e().loading);constructor(){this._http.get("https://reqres.in/api/users").pipe(r(1500)).subscribe(e=>{this.#e.set({loading:!1,users:e.data})})}getUserById(e){return this._http.get(`https://reqres.in/api/users/${e}`).pipe(r(1500),o(s=>s.data))}static \u0275fac=function(s){return new(s||t)};static \u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})};export{f as a};