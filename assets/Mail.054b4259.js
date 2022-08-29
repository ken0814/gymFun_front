import{_ as A,a as v,r as D,H as U,N as j,o as u,c as p,e as a,w as i,d as s,F as w,br as f,S as _,f as V,bn as z,p as L,i as P,j as y,l as $,bo as h,g as H}from"./index.3e9d597f.js";import{E as O}from"./EditCalendarOutlined.9516ccd3.js";import{_ as T}from"./Modal.71bd6656.js";import{_ as q}from"./Table.6be9d272.js";import{_ as G}from"./Pagination.cf1dad0a.js";import{_ as J}from"./Input.c9e6e44a.js";import{a as K,_ as Q}from"./FormItem.2cde2501.js";import"./Popover.1db92518.js";import"./Warning.59ca7edf.js";import"./Select.b31d3496.js";const m=c=>(L("data-v-3897d080"),c=c(),P(),c),R=m(()=>s("div",{class:"flex justify-content-space-between",id:"section01"},[s("h1",null,"\u6211\u7684\u4FE1\u7BB1")],-1)),W=m(()=>s("h1",null,"\u67E5\u770B / \u56DE\u5FA9\u8A0A\u606F",-1)),X={class:"flex justify-content-flex-end",id:"btnSection"},Y=y("\u9001\u51FA"),Z=y("\u522A\u9664\u4FE1\u4EF6"),ee={id:"section02"},te=m(()=>s("thead",null,[s("tr",null,[s("th",null,"\u5BC4\u4EF6\u4EBA"),s("th",null,"\u4FE1\u4EF6\u5167\u5BB9"),s("th",null,"\u6642\u9593"),s("th",null,"\u67E5\u770B / \u56DE\u5FA9")])],-1)),se={key:1},ne=m(()=>s("td",{colspan:"4",style:{"text-align":"center"}},"\u6C92\u6709\u4FE1\u4EF6",-1)),oe=[ne],ae={__name:"Mail",setup(c){const e=v({message_id:"",sender_id:"",senderMessage:"",messageContent:"",showModal:!1,submitting:!1,idx:-1}),l=v([]),r=D(1),d=5;U(()=>l.slice(r.value*d-d,r.value*d));const M=(n,t)=>{e.idx=t,e.message_id=l[t].message._id,e.sender_id=n,e.showModal=!0,e.senderMessage=l[t].message.content},C=async()=>{e.submitting=!0;const n={content:e.messageContent};try{await f.post("/messages/"+e.sender_id,n),_.fire({icon:"success",title:"\u6210\u529F",text:"\u9001\u51FA\u6210\u529F"}),e.submitting=!1,e.showModal=!1,e.messageContent=""}catch(t){_.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message}),e.submitting=!1,e.showModal=!1,e.messageContent=""}},S=async()=>{try{await f.delete("/messages/"+e.message_id),_.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),l.splice(e.idx,1),e.submitting=!1,e.showModal=!1}catch(n){_.fire({icon:"error",title:"\u5931\u6557",text:n.isAxiosError?n.response.data.message:n.message}),e.submitting=!1,e.showModal=!1}};return(async()=>{try{const{data:n}=await f.get("/messages");for(const t in n.result.messages)l.push({...n.result.messages[t]})}catch(n){_.fire({icon:"error",title:"\u5931\u6557",text:n.isAxiosError&&n.response.data?n.response.data.message:"\u767C\u751F\u932F\u8AA4"})}})(),(n,t)=>{const b=J,x=K,g=$,k=Q,E=T,B=j,F=q,I=G;return u(),p(w,null,[R,a(E,{show:e.showModal,"onUpdate:show":t[3]||(t[3]=o=>e.showModal=o),"mask-closable":!0,preset:"card",style:{width:"500px"},id:"modal"},{default:i(()=>[W,a(k,{model:e,onSubmit:V(C,["prevent"])},{default:i(()=>[a(x,{path:"messageContent",label:"\u8A0A\u606F\u5167\u5BB9"},{default:i(()=>[a(b,{type:"textarea",placeholder:"\u8F38\u5165\u8A0A\u606F",value:e.senderMessage,"onUpdate:value":t[0]||(t[0]=o=>e.senderMessage=o),disabled:!0},null,8,["value"])]),_:1}),a(x,{path:"messageContent",label:"\u56DE\u8986\u8A0A\u606F"},{default:i(()=>[a(b,{type:"textarea",placeholder:"\u8F38\u5165\u8A0A\u606F",value:e.messageContent,"onUpdate:value":t[1]||(t[1]=o=>e.messageContent=o)},null,8,["value"])]),_:1}),s("div",X,[a(g,{color:"#475F77","attr-type":"submit",loading:e.submitting},{default:i(()=>[Y]),_:1},8,["loading"]),a(g,{color:"#D74B4B",onClick:t[2]||(t[2]=o=>S()),loading:e.submitting},{default:i(()=>[Z]),_:1},8,["loading"])])]),_:1},8,["model","onSubmit"])]),_:1},8,["show"]),s("div",ee,[a(F,{bordered:!1,"single-line":!1,id:"table"},{default:i(()=>[te,s("tbody",null,[l.length>0?(u(!0),p(w,{key:0},z(l,(o,N)=>(u(),p("tr",{key:o._id},[s("td",null,h(o.senderProfile.name),1),s("td",null,h(o.message.content),1),s("td",null,h(new Date(o.message.date).toLocaleDateString()),1),s("td",null,[a(g,{color:"#475F77",onClick:ie=>M(o.sender._id,N+(r.value-1)*d)},{default:i(()=>[a(B,{size:"25",color:"#fff",component:H(O)},null,8,["component"])]),_:2},1032,["onClick"])])]))),128)):(u(),p("tr",se,oe))])]),_:1})]),a(I,{page:r.value,"onUpdate:page":t[4]||(t[4]=o=>r.value=o),"page-count":Math.ceil(l.length/d)},null,8,["page","page-count"])],64)}}},be=A(ae,[["__scopeId","data-v-3897d080"]]);export{be as default};
