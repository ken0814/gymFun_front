import{_ as I,r as g,bk as V,bH as R,N as T,b as k,o as l,c as A,d as a,e as o,w as t,g as n,F,bG as U,S as j,l as G,bI as M,bJ as $,bq as d,bK as u,j as _,bL as q,p as z,i as H,bM as J,bN as K}from"./index.8f7fe4e0.js";const B=i=>(z("data-v-b95c3b4a"),i=i(),H(),i),Y={class:"nav_container"},O={class:"flex",id:"hamburger"},P=B(()=>a("h1",null,"GYMFUN",-1)),Q=B(()=>a("img",{src:J,id:"logo"},null,-1)),W={id:"nav_button"},X=_("\u627E\u8AB2\u7A0B"),Z=_("\u627E\u6559\u7DF4"),tt=_("\u627E\u5B78\u54E1"),ot=_("TDEE\u8A08\u7B97\u6A5F"),et=_("\u95DC\u65BC\u6211\u5011"),st=_("\u5B78\u54E1\u4E2D\u5FC3"),_t=_("\u767B\u51FA"),nt=B(()=>a("img",{src:K},null,-1)),at={class:"flex D-column",id:"drawerButton"},ct=_("\u627E\u8AB2\u7A0B"),lt=_("\u627E\u6559\u7DF4"),dt=_("\u627E\u5B78\u54E1"),ut=_("TDEE\u8A08\u7B97\u6A5F"),it=_("\u95DC\u65BC\u6211\u5011"),rt=_("\u767B\u5165"),ft=_("\u7BA1\u7406\u54E1\u5F8C\u53F0"),ht=_("\u5B78\u54E1\u4E2D\u5FC3"),pt=_("\u6559\u7DF4\u4E2D\u5FC3"),mt=_("\u767B\u51FA"),Bt={class:"flex",id:"admin_container"},vt={class:"flex D-column justify-content-flex-start",id:"admin_buttonBox"},Et=["src"],bt=_("\u500B\u4EBA\u8CC7\u6599"),gt=_("\u6211\u7684\u8AB2\u7A0B"),kt=_("\u6211\u7684\u4FE1\u7BB1"),xt={id:"info"},wt={__name:"Layout",setup(i){const h=g(""),p=g(!1),x=()=>{p.value=!0},v=V(),{logout:E}=v,{isLogin:r,isAdmin:m,isStudent:w,isCoach:y,avatar:C}=R(v);return(async()=>{try{const{data:c}=await U.get("/users/profile");h.value=c.result.image}catch(c){j.fire({icon:"error",title:"\u5931\u6557",text:c.isAxiosError&&c.response.data?c.response.data.message:"\u767C\u751F\u932F\u8AA4"})}})(),(c,f)=>{const S=T,e=G,s=k("RouterLink"),N=q,D=M,L=k("RouterView");return l(),A(F,null,[a("nav",null,[a("div",Y,[a("div",O,[o(e,{onClick:f[0]||(f[0]=b=>x()),color:"#354B5E"},{default:t(()=>[o(S,{size:"25",color:"#fff",component:n($)},null,8,["component"])]),_:1}),o(s,{to:"/"},{default:t(()=>[P]),_:1})]),o(s,{to:"/"},{default:t(()=>[Q]),_:1}),a("div",W,[o(s,{to:"/findCourse"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[X]),_:1})]),_:1}),o(s,{to:"/findCoach"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[Z]),_:1})]),_:1}),o(s,{to:"/findStudent"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[tt]),_:1})]),_:1}),o(s,{to:"/calculator"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[ot]),_:1})]),_:1}),o(s,{to:"/about"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[et]),_:1})]),_:1}),o(s,{to:"/student"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[st]),_:1})]),_:1}),o(e,{color:"#D74B4B",onClick:n(E)},{default:t(()=>[_t]),_:1},8,["onClick"])])])]),o(D,{show:p.value,"onUpdate:show":f[1]||(f[1]=b=>p.value=b),width:200,placement:"left"},{default:t(()=>[o(N,{class:"flex"},{default:t(()=>[o(s,{to:"/"},{default:t(()=>[nt]),_:1}),a("div",at,[o(s,{to:"/findCourse"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[ct]),_:1})]),_:1}),o(s,{to:"/findCoach"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[lt]),_:1})]),_:1}),o(s,{to:"/findStudent"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[dt]),_:1})]),_:1}),o(s,{to:"/calculator"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[ut]),_:1})]),_:1}),o(s,{to:"/about"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[it]),_:1})]),_:1}),o(s,{to:"/login"},{default:t(()=>[n(r)?u("",!0):(l(),d(e,{key:0,color:"#D74B4B"},{default:t(()=>[rt]),_:1}))]),_:1}),o(s,{to:"/admin/"},{default:t(()=>[n(m)?(l(),d(e,{key:0,color:"#354B5E"},{default:t(()=>[ft]),_:1})):u("",!0)]),_:1}),o(s,{to:"/student/"},{default:t(()=>[n(r)&&!n(m)&&n(w)?(l(),d(e,{key:0,color:"#354B5E"},{default:t(()=>[ht]),_:1})):u("",!0)]),_:1}),o(s,{to:"/coach/"},{default:t(()=>[n(r)&&!n(m)&&n(y)?(l(),d(e,{key:0,color:"#354B5E"},{default:t(()=>[pt]),_:1})):u("",!0)]),_:1}),n(r)?(l(),d(e,{key:0,color:"#D74B4B",onClick:n(E)},{default:t(()=>[mt]),_:1},8,["onClick"])):u("",!0)])]),_:1})]),_:1},8,["show"]),a("div",Bt,[a("div",vt,[a("img",{src:h.value===""?n(C):h.value,id:"avatar"},null,8,Et),o(s,{to:"/student/"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[bt]),_:1})]),_:1}),o(s,{to:"/student/course"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[gt]),_:1})]),_:1}),o(s,{to:"/student/mail"},{default:t(()=>[o(e,{color:"#354B5E"},{default:t(()=>[kt]),_:1})]),_:1})]),a("div",xt,[o(L)])])],64)}}},St=I(wt,[["__scopeId","data-v-b95c3b4a"]]);export{St as default};
