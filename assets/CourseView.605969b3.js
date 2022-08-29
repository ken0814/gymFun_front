import{_ as $,a as f,r as q,H as A,N as E,o as m,c as b,d as e,e as l,w as i,g as p,F as k,k as F,S as g,bm as L,bn as T,bq as x,h as j,I as U,T as H,L as P,bo as c,p as G,i as J,j as S,br as K,bs as O,bp as Q,l as R}from"./index.85bdb11a.js";import{_ as W}from"./Pagination.b89e5375.js";import{_ as X}from"./Modal.0c3800d5.js";import"./Input.371fb9c9.js";import"./Select.fc55f1d5.js";import"./Popover.4fd91a1c.js";import"./Warning.5af41472.js";const h=u=>(G("data-v-0168bc27"),u=u(),J(),u),Y={class:"flex D-column justify-content-space-between",id:"container"},Z={id:"section01"},ee=h(()=>e("h1",null,"\u8AB2\u7A0B\u5217\u8868",-1)),te=h(()=>e("hr",null,null,-1)),oe=["onClick"],ne=["src"],se=S("\u6C92\u6709\u8AB2\u7A0B"),ae={class:"flex D-column",id:"footer"},ce={class:"flex",id:"footerIcon_section"},le={href:"https://fb.com"},ie={href:"https://www.instagram.com/"},re={href:"https://twitter.com"},_e={href:"https://line.me/zh-hant/"},pe=h(()=>e("p",null,"Copyright \xA9 2022 kenli \xA0 \u7DB2\u7AD9\u70BA\u5B78\u7FD2\u7528\u9014\uFF0C\u7121\u5546\u696D\u4F7F\u7528\u3002\u5716\u7247\u3001\u6587\u5B57\u5747\u53D6\u81EA\u7DB2\u8DEF",-1)),ue={class:"flex D-column",id:"modal"},de={class:"flex D-column align-items-flex-start",id:"modalSection01"},me=["src"],he=h(()=>e("h2",null,"\u8AB2\u7A0B\u4ECB\u7D39",-1)),fe={class:"flex",id:"btnSection"},ge=S("\u7ACB\u5373\u5831\u540D"),we={__name:"CourseView",setup(u){const n=f([]),r=q(1),_=8,C=A(()=>n.slice(r.value*_-_,r.value*_)),t=f({_id:"",name:"",price:"",category:null,time:null,place:0,sell:!1,image:[],description:"",coachName:"",idx:-1,submitting:!1,showModal:!1}),w=f({course:"",status:0}),N=(s,o)=>{t._id=s,o>-1&&(t.name=n[o].name,t.price=n[o].price,t.category=n[o].category,t.time=n[o].time,t.place=n[o].place,t.sell=n[o].sell,t.description=n[o].description,t.image=n[o].image,t.coachName=n[o].profile.name),t.idx=o,t.showModal=!0,t.submitting=!1},I=async()=>{w.course=t._id.toString();try{await K.post("/registration",w),t.showModal=!1,g.fire({icon:"success",title:"\u6210\u529F",text:"\u5831\u540D\u6210\u529F"})}catch(s){t.showModal=!1,g.fire({icon:"error",title:"\u5931\u6557",text:s.response.data.message==="No auth token"?"\u767B\u5165\u5F8C\u624D\u80FD\u5831\u540D":s.isAxiosError&&s.response.data?s.response.data.message:"\u767C\u751F\u932F\u8AA4"})}};return(async()=>{try{const{data:s}=await F.get("/courses/");n.push(...s.result)}catch(s){g.fire({icon:"error",title:"\u5931\u6557",text:s.isAxiosError&&s.response.data?s.response.data.message:"\u767C\u751F\u932F\u8AA4"})}})(),(s,o)=>{const v=O,y=Q,D=L,M=W,d=E,z=R,B=X;return m(),b(k,null,[e("div",Y,[e("div",Z,[ee,te,l(D,{cols:"1 sm:2 md:3 lg:4",responsive:"screen"},{default:i(()=>[n.length>0?(m(!0),b(k,{key:0},T(p(C),(a,V)=>(m(),x(y,{key:a._id},{default:i(()=>[e("a",{onClick:ye=>N(a._id,V+(r.value-1)*_)},[l(v,null,{cover:i(()=>[e("img",{src:a.image},null,8,ne)]),default:i(()=>[e("h2",null,c(a.name),1),e("h3",null,"\u904B\u52D5\u9805\u76EE: "+c(a.category),1),e("h3",null,"\u4E0A\u8AB2\u5730\u9EDE: "+c(a.place),1),e("h3",null,"\u4E0A\u8AB2\u6642\u6BB5: "+c(a.time),1),e("h3",null,"\u50F9\u9322: $ "+c(a.price)+" / \u5802",1)]),_:2},1024)],8,oe)]),_:2},1024))),128)):(m(),x(y,{key:1},{default:i(()=>[l(v,{style:{"text-align":"center"}},{default:i(()=>[se]),_:1})]),_:1}))]),_:1}),l(M,{page:r.value,"onUpdate:page":o[0]||(o[0]=a=>r.value=a),"page-count":Math.ceil(n.length/_)},null,8,["page","page-count"])]),e("div",ae,[e("div",ce,[e("a",le,[l(d,{size:"25",color:"#fff",component:p(j)},null,8,["component"])]),e("a",ie,[l(d,{size:"25",color:"#fff",component:p(U)},null,8,["component"])]),e("a",re,[l(d,{size:"25",color:"#fff",component:p(H)},null,8,["component"])]),e("a",_e,[l(d,{size:"25",color:"#fff",component:p(P)},null,8,["component"])])]),pe])]),l(B,{show:t.showModal,"onUpdate:show":o[2]||(o[2]=a=>t.showModal=a),preset:"card",style:{width:"500px"}},{default:i(()=>[e("div",ue,[e("div",de,[e("h1",null,c(t.name),1),e("img",{src:t.image},null,8,me),e("h3",null,"\u6559\u7DF4: "+c(t.coachName),1),e("h3",null,"\u8AB2\u7A0B\u5730\u9EDE: "+c(t.place),1),e("h3",null,"\u8AB2\u7A0B\u6642\u6BB5: "+c(t.time),1),e("h3",null,"\u8AB2\u7A0B\u50F9\u9322: $ "+c(t.price)+" / \u5802",1),he,e("h4",null,c(t.description),1),e("div",fe,[l(z,{color:"#D74B4B",onClick:o[1]||(o[1]=a=>I())},{default:i(()=>[ge]),_:1})])])])]),_:1},8,["show"])],64)}}},De=$(we,[["__scopeId","data-v-0168bc27"]]);export{De as default};