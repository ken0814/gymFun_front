import{Q as ve,R as K,U as fe,a2 as Z,r as $,m as ge,H as j,a1 as J,a3 as q,Z as O,ao as me,ag as I,B as E,D as _,C as B,X as y,Y as P,y as ee,$ as L,V as U,ae as H,a7 as oe,a8 as te,z as D,a9 as _e,a6 as xe,bj as Ce,bl as we,_ as Re,a as Se,N as ze,o as Y,c as Q,d as a,e as u,w as z,g as V,F as W,bm as ke,f as ye,bn as Be,bo as X,h as De,I as Ee,T as Te,L as $e,p as Ie,i as Fe,j as G,bp as Ve,l as Le}from"./index.a4fdb704.js";import{b as Ue,a as He,_ as Me}from"./FormItem.a0d727fd.js";import{_ as Ae}from"./Select.a3bbdfa0.js";import"./fade-in-scale-up.cssr.b4fa04df.js";import"./Popover.1a213390.js";const je={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px"},Pe=o=>{const{borderColor:e,primaryColor:n,baseColor:r,textColorDisabled:l,inputColorDisabled:b,textColor2:t,opacityDisabled:c,borderRadius:s,fontSizeSmall:v,fontSizeMedium:h,fontSizeLarge:f,heightSmall:p,heightMedium:w,heightLarge:x,lineHeight:k}=o;return Object.assign(Object.assign({},je),{labelLineHeight:k,buttonHeightSmall:p,buttonHeightMedium:w,buttonHeightLarge:x,fontSizeSmall:v,fontSizeMedium:h,fontSizeLarge:f,boxShadow:`inset 0 0 0 1px ${e}`,boxShadowActive:`inset 0 0 0 1px ${n}`,boxShadowFocus:`inset 0 0 0 1px ${n}, 0 0 0 2px ${K(n,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${n}`,boxShadowDisabled:`inset 0 0 0 1px ${e}`,color:r,colorDisabled:b,textColor:t,textColorDisabled:l,dotColorActive:n,dotColorDisabled:e,buttonBorderColor:e,buttonBorderColorActive:n,buttonBorderColorHover:e,buttonColor:r,buttonColorActive:r,buttonTextColor:t,buttonTextColorActive:n,buttonTextColorHover:n,opacityDisabled:c,buttonBoxShadowFocus:`inset 0 0 0 1px ${n}, 0 0 0 2px ${K(n,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:s})},Ne={name:"Radio",common:ve,self:Pe},ne=Ne,Oe={name:String,value:{type:[String,Number],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,validator:()=>(me("radio","`checked-value` is deprecated, please use `checked` instead."),!0),default:void 0}},ae=fe("n-radio-group");function N(o){const e=Z(o,{mergedSize(d){const{size:g}=o;if(g!==void 0)return g;if(t){const{mergedSizeRef:{value:C}}=t;if(C!==void 0)return C}return d?d.mergedSize.value:"medium"},mergedDisabled(d){return!!(o.disabled||t!=null&&t.disabledRef.value||d!=null&&d.disabled.value)}}),{mergedSizeRef:n,mergedDisabledRef:r}=e,l=$(null),b=$(null),t=ge(ae,null),c=$(o.defaultChecked),s=j(o,"checked"),v=J(s,c),h=q(()=>t?t.valueRef.value===o.value:v.value),f=q(()=>{const{name:d}=o;if(d!==void 0)return d;if(t)return t.nameRef.value}),p=$(!1);function w(){if(t){const{doUpdateValue:d}=t,{value:g}=o;I(d,g)}else{const{onUpdateChecked:d,"onUpdate:checked":g}=o,{nTriggerFormInput:C,nTriggerFormChange:m}=e;d&&I(d,!0),g&&I(g,!0),C(),m(),c.value=!0}}function x(){r.value||h.value||w()}function k(){x()}function R(){p.value=!1}function i(){p.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:O(o).mergedClsPrefixRef,inputRef:l,labelRef:b,mergedName:f,mergedDisabled:r,uncontrolledChecked:c,renderSafeChecked:h,focus:p,mergedSize:n,handleRadioInputChange:k,handleRadioInputBlur:R,handleRadioInputFocus:i}}N.props=Oe;const Ge=E("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[_("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),E("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),_("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[B("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),y("checked",{boxShadow:"var(--n-box-shadow-active)"},[B("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),_("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),P("disabled",`
 cursor: pointer;
 `,[B("&:hover",[_("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),y("focus",[B("&:not(:active)",[_("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),y("disabled",`
 cursor: not-allowed;
 `,[_("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[B("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),y("checked",`
 opacity: 1;
 `)]),_("label",{color:"var(--n-text-color-disabled)"}),E("radio-input",`
 cursor: not-allowed;
 `)])]),Ke=ee({name:"Radio",props:Object.assign(Object.assign({},L.props),N.props),setup(o){const e=N(o),n=L("Radio","-radio",Ge,ne,o,e.mergedClsPrefix),r=U(()=>{const{mergedSize:{value:v}}=e,{common:{cubicBezierEaseInOut:h},self:{boxShadow:f,boxShadowActive:p,boxShadowDisabled:w,boxShadowFocus:x,boxShadowHover:k,color:R,colorDisabled:i,textColor:d,textColorDisabled:g,dotColorActive:C,dotColorDisabled:m,labelPadding:S,labelLineHeight:T,[H("fontSize",v)]:M,[H("radioSize",v)]:A}}=n.value;return{"--n-bezier":h,"--n-label-line-height":T,"--n-box-shadow":f,"--n-box-shadow-active":p,"--n-box-shadow-disabled":w,"--n-box-shadow-focus":x,"--n-box-shadow-hover":k,"--n-color":R,"--n-color-disabled":i,"--n-dot-color-active":C,"--n-dot-color-disabled":m,"--n-font-size":M,"--n-radio-size":A,"--n-text-color":d,"--n-text-color-disabled":g,"--n-label-padding":S}}),{inlineThemeDisabled:l,mergedClsPrefixRef:b,mergedRtlRef:t}=O(o),c=oe("Radio",t,b),s=l?te("radio",U(()=>e.mergedSize.value[0]),r,o):void 0;return Object.assign(e,{rtlEnabled:c,cssVars:l?void 0:r,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender})},render(){const{$slots:o,mergedClsPrefix:e,onRender:n,label:r}=this;return n==null||n(),D("label",{class:[`${e}-radio`,this.themeClass,{[`${e}-radio--rtl`]:this.rtlEnabled,[`${e}-radio--disabled`]:this.mergedDisabled,[`${e}-radio--checked`]:this.renderSafeChecked,[`${e}-radio--focus`]:this.focus}],style:this.cssVars},D("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),D("div",{class:`${e}-radio__dot-wrapper`},"\xA0",D("div",{class:[`${e}-radio__dot`,this.renderSafeChecked&&`${e}-radio__dot--checked`]})),_e(o.default,l=>!l&&!r?null:D("div",{ref:"labelRef",class:`${e}-radio__label`},l||r)))}}),qe=E("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[_("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[y("checked",{backgroundColor:"var(--n-button-border-color-active)"}),y("disabled",{opacity:"var(--n-opacity-disabled)"})]),y("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[E("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),_("splitor",{height:"var(--n-height)"})]),E("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[E("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),_("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),B("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[_("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),B("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[_("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),P("disabled",`
 cursor: pointer;
 `,[B("&:hover",[_("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),P("checked",{color:"var(--n-button-text-color-hover)"})]),y("focus",[B("&:not(:active)",[_("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),y("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),y("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Ye(o,e,n){var r;const l=[];let b=!1;for(let t=0;t<o.length;++t){const c=o[t],s=(r=c.type)===null||r===void 0?void 0:r.name;s==="RadioButton"&&(b=!0);const v=c.props;if(s!=="RadioButton"){l.push(c);continue}if(t===0)l.push(c);else{const h=l[l.length-1].props,f=e===h.value,p=h.disabled,w=e===v.value,x=v.disabled,k=(f?2:0)+(p?0:1),R=(w?2:0)+(x?0:1),i={[`${n}-radio-group__splitor--disabled`]:p,[`${n}-radio-group__splitor--checked`]:f},d={[`${n}-radio-group__splitor--disabled`]:x,[`${n}-radio-group__splitor--checked`]:w},g=k<R?d:i;l.push(D("div",{class:[`${n}-radio-group__splitor`,g]}),c)}}return{children:l,isButtonGroup:b}}const Qe=Object.assign(Object.assign({},L.props),{name:String,value:[String,Number],defaultValue:{type:[String,Number],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),We=ee({name:"RadioGroup",props:Qe,setup(o){const e=$(null),{mergedSizeRef:n,mergedDisabledRef:r,nTriggerFormChange:l,nTriggerFormInput:b,nTriggerFormBlur:t,nTriggerFormFocus:c}=Z(o),{mergedClsPrefixRef:s,inlineThemeDisabled:v,mergedRtlRef:h}=O(o),f=L("Radio","-radio-group",qe,ne,o,s),p=$(o.defaultValue),w=j(o,"value"),x=J(w,p);function k(m){const{onUpdateValue:S,"onUpdate:value":T}=o;S&&I(S,m),T&&I(T,m),p.value=m,l(),b()}function R(m){const{value:S}=e;!S||S.contains(m.relatedTarget)||c()}function i(m){const{value:S}=e;!S||S.contains(m.relatedTarget)||t()}xe(ae,{mergedClsPrefixRef:s,nameRef:j(o,"name"),valueRef:x,disabledRef:r,mergedSizeRef:n,doUpdateValue:k});const d=oe("Radio",h,s),g=U(()=>{const{value:m}=n,{common:{cubicBezierEaseInOut:S},self:{buttonBorderColor:T,buttonBorderColorActive:M,buttonBorderRadius:A,buttonBoxShadow:re,buttonBoxShadowFocus:le,buttonBoxShadowHover:ie,buttonColorActive:se,buttonTextColor:de,buttonTextColorActive:ue,buttonTextColorHover:ce,opacityDisabled:be,[H("buttonHeight",m)]:he,[H("fontSize",m)]:pe}}=f.value;return{"--n-font-size":pe,"--n-bezier":S,"--n-button-border-color":T,"--n-button-border-color-active":M,"--n-button-border-radius":A,"--n-button-box-shadow":re,"--n-button-box-shadow-focus":le,"--n-button-box-shadow-hover":ie,"--n-button-color-active":se,"--n-button-text-color":de,"--n-button-text-color-hover":ce,"--n-button-text-color-active":ue,"--n-height":he,"--n-opacity-disabled":be}}),C=v?te("radio-group",U(()=>n.value[0]),g,o):void 0;return{selfElRef:e,rtlEnabled:d,mergedClsPrefix:s,mergedValue:x,handleFocusout:i,handleFocusin:R,cssVars:v?void 0:g,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){var o;const{mergedValue:e,mergedClsPrefix:n,handleFocusin:r,handleFocusout:l}=this,{children:b,isButtonGroup:t}=Ye(Ce(we(this)),e,n);return(o=this.onRender)===null||o===void 0||o.call(this),D("div",{onFocusin:r,onFocusout:l,ref:"selfElRef",class:[`${n}-radio-group`,this.rtlEnabled&&`${n}-radio-group--rtl`,this.themeClass,t&&`${n}-radio-group--button-group`],style:this.cssVars},b)}});const F=o=>(Ie("data-v-98571705"),o=o(),Fe(),o),Xe={class:"container flex"},Ze=F(()=>a("div",{class:"flex",id:"section01"},[a("div",null,[a("div",null,[a("h1",null,"BMR \u8207 TDEE \u4ECB\u7D39"),a("div",{id:"BMRTDEE_hr"}),a("p",null,"\u7576\u4F60\u8981\u589E\u808C\u3001\u6E1B\u8102\u6216\u662F\u7DAD\u6301\u9AD4\u91CD\u6642\uFF0C\u53EF\u4EE5\u900F\u904E BMR \u8207 TDEE \u4F86\u4E86\u89E3\u4E00\u5929\u6240\u9700\u7684\u71B1\u91CF\u9700\u8981\u591A\u5C11\u3002 \u63A5\u4E0B\u4F86\u5C07\u6703\u4ECB\u7D39 BMR \u3001 TDEE \u8B93\u4F60\u66F4\u6709\u6548\u7387\u5730\u671D\u4F60\u7684\u76EE\u6A19\u9081\u9032 !")]),a("div",null,[a("h2",null,"BMR ( \u57FA\u790E\u4EE3\u8B1D\u7387 )"),a("h2",null,"\u300C\u4E00\u6574\u5929\u4E0D\u9700\u8981\u79FB\u52D5\u4E5F\u80FD\u6D88\u8017\u7684\u71B1\u91CF\u300D"),a("p",null,"\u4F60\u53EF\u80FD\u66FE\u7D93\u807D\u904E\u6709\u4E9B\u4EBA\u547C\u5438\u5C31\u6703\u80D6\u3001\u6709\u4E9B\u4EBA\u537B\u8EBA\u8457\u4E5F\u80FD\u7626\uFF1F\u9019\u5176\u5BE6\u8DDF\u57FA\u790E\u4EE3\u8B1D\u7387(BMR)\u5F88\u6709\u95DC\u4FC2\u3002\u5373\u70BA\u8EAB\u9AD4\u9700\u8981\u7DAD\u6301\u904B\u4F5C\u3001\u4F11\u606F\u3001\u7DAD\u6301\u751F\u547D\u6240\u6D88\u8017\u7684\u6700\u4F4E\u80FD\u91CF\uFF0C\u9019\u4E5F\u662F\u70BA\u4EC0\u9EBC\u8981\u6709\u5145\u8DB3\u7684\u7761\u7720\uFF0C\u56E0\u70BA\u7761\u89BA\u6642\u4E5F\u662F\u6703\u6D88\u8017\u71B1\u91CF\u7684\uFF01")]),a("div",null,[a("h2",null,"TDEE ( \u6BCF\u65E5\u7E3D\u6D88\u8017\u71B1\u91CF )"),a("h2",null,"\u300C\u7DAD\u6301\u9AD4\u91CD\u6240\u9700\u7684\u6BCF\u65E5\u7E3D\u71B1\u91CF\u300D"),a("p",null,"\u8EAB\u9AD4\u4E00\u6574\u5929\u6240\u6D88\u8017\u6389\u7684\u71B1\u91CF\u3002\u4E5F\u6709\u4EBA\u7A31\u70BA\u7DAD\u6301\u9AD4\u91CD\u7684\u71B1\u91CF\uFF0C\u56E0\u70BA\u7576\u651D\u53D6\u7684\u5361\u8DEF\u91CC = TDEE\uFF0C\u9AD4\u91CD\u6703\u7DAD\u6301\u3002")])])],-1)),Je={class:"flex",id:"section02"},eo=F(()=>a("h1",null,"TDEE \u8A08\u7B97\u6A5F",-1)),oo=F(()=>a("hr",{id:"calculator_hr"},null,-1)),to={class:"flex justify-content-space-between",id:"text"},no=G("TDEE \u6BCF\u65E5\u7E3D\u6D88\u8017\u71B1\u91CF\u70BA :"),ao=G("\u9001\u51FA"),ro=F(()=>a("div",{id:"section03"},null,-1)),lo={class:"flex D-column",id:"footer"},io={class:"flex",id:"footerIcon_section"},so={href:"https://fb.com"},uo={href:"https://www.instagram.com/"},co={href:"https://twitter.com"},bo={href:"https://line.me/zh-hant/"},ho=F(()=>a("p",null,"Copyright \xA9 2022 kenli",-1)),po={__name:"TDEECalculator",setup(o){const e=Se({gender:"",age:"",height:"",weight:"",activelyLevel:null,value:""}),n=[{label:"\u4E45\u5750 / \u6C92\u6709\u904B\u52D5",value:1.2},{label:"\u6BCF\u5468 1 ~ 3 \u5929",value:1.375},{label:"\u6BCF\u5468 3 ~ 5 \u5929",value:1.55},{label:"\u6BCF\u5468 6 ~ 7 \u5929",value:1.725},{label:"\u9577\u6642\u9593\u904B\u52D5\u6216\u9AD4\u529B\u52DE\u52D5\u8005",value:1.9}],r=[{value:"male",label:"\u7537"},{value:"female",label:"\u5973"}],l=()=>{if(e.gender==="male"){const b=(10*e.weight+6.25*e.height-5*e.age+5)*e.activelyLevel;e.value=Math.round(b)}else{const b=(10*e.weight+6.25*e.height-5*e.age-161)*e.activelyLevel;e.value=Math.round(b)}};return(b,t)=>{const c=Ve,s=Ke,v=We,h=Ue,f=He,p=Ae,w=Le,x=Me,k=ke,R=ze;return Y(),Q(W,null,[a("div",Xe,[u(k,{cols:"xs:1 xl:2",responsive:"screen"},{default:z(()=>[u(c,null,{default:z(()=>[Ze]),_:1}),u(c,null,{default:z(()=>[a("div",Je,[a("div",null,[eo,oo,u(x,{model:e,onSubmit:ye(l,["prevent"])},{default:z(()=>[u(h,{path:"gender",label:"\u6027\u5225",size:"small"},{default:z(()=>[u(v,{value:e.gender,"onUpdate:value":t[0]||(t[0]=i=>e.gender=i),name:"radiogroup"},{default:z(()=>[(Y(),Q(W,null,Be(r,i=>u(s,{key:i.value,value:i.value},{default:z(()=>[G(X(i.label),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1}),u(h,{path:"age",label:"\u5E74\u9F61",size:"small"},{default:z(()=>[u(f,{placeholder:"\u8F38\u5165\u5E74\u9F61",value:e.age,"onUpdate:value":t[1]||(t[1]=i=>e.age=i)},null,8,["value"])]),_:1}),u(h,{path:"height",label:"\u8EAB\u9AD8",size:"small"},{default:z(()=>[u(f,{placeholder:"\u8F38\u5165\u8EAB\u9AD8",value:e.height,"onUpdate:value":t[2]||(t[2]=i=>e.height=i)},null,8,["value"])]),_:1}),u(h,{path:"weight",label:"\u9AD4\u91CD",size:"small"},{default:z(()=>[u(f,{placeholder:"\u8F38\u5165\u9AD4\u91CD",value:e.weight,"onUpdate:value":t[3]||(t[3]=i=>e.weight=i)},null,8,["value"])]),_:1}),u(h,{path:"activelyLevel",label:"\u6BCF\u5468\u6D3B\u52D5\u91CF",size:"small"},{default:z(()=>[u(p,{value:e.activelyLevel,"onUpdate:value":t[4]||(t[4]=i=>e.activelyLevel=i),options:n,placeholder:"\u9078\u64C7\u6BCF\u5468\u6D3B\u52D5\u91CF"},null,8,["value"])]),_:1}),a("div",to,[no,a("h2",null,X(e.value),1),u(w,{"attr-type":"submit",color:"#D74B4B"},{default:z(()=>[ao]),_:1})])]),_:1},8,["model","onSubmit"])])])]),_:1})]),_:1})]),ro,a("div",lo,[a("div",io,[a("a",so,[u(R,{size:"25",color:"#fff",component:V(De)},null,8,["component"])]),a("a",uo,[u(R,{size:"25",color:"#fff",component:V(Ee)},null,8,["component"])]),a("a",co,[u(R,{size:"25",color:"#fff",component:V(Te)},null,8,["component"])]),a("a",bo,[u(R,{size:"25",color:"#fff",component:V($e)},null,8,["component"])])]),ho])],64)}}},xo=Re(po,[["__scopeId","data-v-98571705"]]);export{xo as default};