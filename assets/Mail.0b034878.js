import{_ as N,a as v,r as U,H as j,N as z,o as d,c as u,e as a,w as l,d as t,F as w,br as x,S as m,f as A,bn as B,p as D,i as V,j as L,l as P,bo as g,g as T}from"./index.a5ae3475.js";import{E as H}from"./EditCalendarOutlined.c4f9354a.js";import{_ as O}from"./Modal.d50da3c1.js";import{_ as W}from"./Table.28d003f8.js";import{_ as $}from"./Pagination.0faee554.js";import{_ as q}from"./Input.6a210c5c.js";import{a as G,_ as J}from"./FormItem.7cc3184f.js";import"./Popover.cf2314fc.js";import"./Warning.182183a8.js";import"./Select.040f24a7.js";const p=c=>(D("data-v-dca1c714"),c=c(),V(),c),K=p(()=>t("div",{class:"flex justify-content-space-between",id:"section01"},[t("h1",null,"\u6211\u7684\u4FE1\u7BB1")],-1)),Q=p(()=>t("h1",null,"\u67E5\u770B / \u56DE\u5FA9\u8A0A\u606F",-1)),R={class:"flex justify-content-flex-end",id:"btnSection"},X=L("\u9001\u51FA"),Y={id:"section02"},Z=p(()=>t("thead",null,[t("tr",null,[t("th",null,"\u5BC4\u4EF6\u4EBA"),t("th",null,"\u4FE1\u4EF6\u5167\u5BB9"),t("th",null,"\u6642\u9593"),t("th",null,"\u67E5\u770B / \u56DE\u5FA9")])],-1)),ee={key:1},te=p(()=>t("td",{colspan:"4",style:{"text-align":"center"}},"\u6C92\u6709\u8AB2\u7A0B",-1)),ne=[te],se={__name:"Mail",setup(c){const e=v({sender_id:"",senderMessage:"",messageContent:"",showModal:!1,submitting:!1}),i=v([]),r=U(1),_=5;j(()=>i.slice(r.value*_-_,r.value*_));const y=(o,n)=>{e.sender_id=o,e.showModal=!0,e.senderMessage=i[n].message.content},M=async()=>{e.submitting=!0;const o={content:e.messageContent};try{await x.post("/messages/"+e.sender_id,o),m.fire({icon:"success",title:"\u6210\u529F",text:"\u9001\u51FA\u6210\u529F"}),e.submitting=!1,e.showModal=!1}catch(n){m.fire({icon:"error",title:"\u5931\u6557",text:n.isAxiosError?n.response.data.message:n.message}),e.submitting=!1,e.showModal=!1}};return(async()=>{try{const{data:o}=await x.get("/messages");for(const n in o.result.messages)i.push({...o.result.messages[n]})}catch(o){m.fire({icon:"error",title:"\u5931\u6557",text:o.isAxiosError&&o.response.data?o.response.data.message:"\u767C\u751F\u932F\u8AA4"})}})(),(o,n)=>{const f=q,h=G,b=P,S=J,C=O,k=z,E=W,F=$;return d(),u(w,null,[K,a(C,{show:e.showModal,"onUpdate:show":n[2]||(n[2]=s=>e.showModal=s),"mask-closable":!0,preset:"card",style:{width:"500px"},id:"modal"},{default:l(()=>[Q,a(S,{model:e,onSubmit:A(M,["prevent"])},{default:l(()=>[a(h,{path:"messageContent",label:"\u8A0A\u606F\u5167\u5BB9"},{default:l(()=>[a(f,{type:"textarea",placeholder:"\u8F38\u5165\u8A0A\u606F",value:e.senderMessage,"onUpdate:value":n[0]||(n[0]=s=>e.senderMessage=s),disabled:!0},null,8,["value"])]),_:1}),a(h,{path:"messageContent",label:"\u56DE\u8986\u8A0A\u606F"},{default:l(()=>[a(f,{type:"textarea",placeholder:"\u8F38\u5165\u8A0A\u606F",value:e.messageContent,"onUpdate:value":n[1]||(n[1]=s=>e.messageContent=s)},null,8,["value"])]),_:1}),t("div",R,[a(b,{color:"#475F77","attr-type":"submit"},{default:l(()=>[X]),_:1})])]),_:1},8,["model","onSubmit"])]),_:1},8,["show"]),t("div",Y,[a(E,{bordered:!1,"single-line":!1,id:"table"},{default:l(()=>[Z,t("tbody",null,[i.length>0?(d(!0),u(w,{key:0},B(i,(s,I)=>(d(),u("tr",{key:s._id},[t("td",null,g(s.senderProfile.name),1),t("td",null,g(s.message.content),1),t("td",null,g(new Date(s.message.date).toLocaleDateString("zh-TW")),1),t("td",null,[a(b,{color:"#475F77",onClick:ae=>y(s.sender._id,I+(r.value-1)*_)},{default:l(()=>[a(k,{size:"25",color:"#fff",component:T(H)},null,8,["component"])]),_:2},1032,["onClick"])])]))),128)):(d(),u("tr",ee,ne))])]),_:1})]),a(F,{page:r.value,"onUpdate:page":n[3]||(n[3]=s=>r.value=s),"page-count":Math.ceil(i.length/_)},null,8,["page","page-count"])],64)}}},fe=N(se,[["__scopeId","data-v-dca1c714"]]);export{fe as default};