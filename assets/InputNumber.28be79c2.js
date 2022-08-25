import{y as le,z as u,az as Me,Q as Se,bv as Ce,C as De,B as W,Z as Te,$ as ie,a0 as Fe,a2 as Pe,r as N,H as _e,a1 as Ae,a3 as h,q as Oe,a7 as ke,V as Ue,a9 as q,ad as X,bQ as $e,K as Z,O as J,bR as Y,ag as x}from"./index.a4fdb704.js";import{e as Ee,a as Le}from"./FormItem.a0d727fd.js";import{A as He}from"./Upload.c6662227.js";const ze=le({name:"Remove",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),je=n=>{const{textColorDisabled:r}=n;return{iconColorDisabled:r}},Ge=Me({name:"InputNumber",common:Se,peers:{Button:Ce,Input:Ee},self:je}),Ke=Ge;function Qe(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function We(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function $(n){return n==null?!0:!Number.isNaN(n)}function ee(n,r){return n==null?"":r===void 0?String(n):n.toFixed(r)}function E(n){if(n===null)return null;if(typeof n=="number")return n;{const r=Number(n);return Number.isNaN(r)?null:r}}const qe=De([W("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),W("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),ne=800,te=100,Xe=Object.assign(Object.assign({},ie.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),en=le({name:"InputNumber",props:Xe,setup(n){const{mergedBorderedRef:r,mergedClsPrefixRef:p,mergedRtlRef:D}=Te(n),a=ie("InputNumber","-input-number",qe,Ke,n,p),{localeRef:g}=Fe("InputNumber"),B=Pe(n),{mergedSizeRef:re,mergedDisabledRef:ue,mergedStatusRef:ae}=B,c=N(null),L=N(null),H=N(null),T=N(n.defaultValue),oe=_e(n,"value"),d=Ae(oe,T),v=N(""),F=e=>{const t=String(e).split(".")[1];return t?t.length:0},se=e=>{const t=[n.min,n.max,n.step,e].map(l=>l===void 0?0:F(l));return Math.max(...t)},de=h(()=>{const{placeholder:e}=n;return e!==void 0?e:g.value.placeholder}),M=h(()=>{const e=E(n.step);return e!==null?e===0?1:Math.abs(e):1}),z=h(()=>{const e=E(n.min);return e!==null?e:null}),j=h(()=>{const e=E(n.max);return e!==null?e:null}),I=e=>{const{value:t}=d;if(e===t){V();return}const{"onUpdate:value":l,onUpdateValue:i,onChange:s}=n,{nTriggerFormInput:f,nTriggerFormChange:b}=B;s&&x(s,e),i&&x(i,e),l&&x(l,e),T.value=e,f(),b()},o=({offset:e,doUpdateIfValid:t,fixPrecision:l,isInputing:i})=>{const{value:s}=v;if(i&&We(s))return!1;const f=(n.parse||Qe)(s);if(f===null)return t&&I(null),null;if($(f)){const b=F(f),{precision:R}=n;if(R!==void 0&&R<b&&!l)return!1;let m=parseFloat((f+e).toFixed(R!=null?R:se(f)));if($(m)){const{value:k}=j,{value:U}=z;if(k!==null&&m>k){if(!t||i)return!1;m=k}if(U!==null&&m<U){if(!t||i)return!1;m=U}return n.validator&&!n.validator(m)?!1:(t&&I(m),m)}}return!1},V=()=>{const{value:e}=d;if($(e)){const{format:t,precision:l}=n;t?v.value=t(e):e===null||l===void 0||F(e)>l?v.value=ee(e,void 0):v.value=ee(e,l)}else v.value=String(e)};V();const fe=h(()=>o({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),P=h(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),_=h(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function ce(e){const{onFocus:t}=n,{nTriggerFormFocus:l}=B;t&&x(t,e),l()}function me(e){var t,l;if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;const i=o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(i!==!1){const b=(l=c.value)===null||l===void 0?void 0:l.inputElRef;b&&(b.value=String(i||"")),d.value===i&&V()}else V();const{onBlur:s}=n,{nTriggerFormBlur:f}=B;s&&x(s,e),f()}function ge(e){const{onClear:t}=n;t&&x(t,e)}function A(){const{value:e}=_;if(!e){Q();return}const{value:t}=d;if(t===null)n.validator||I(G());else{const{value:l}=M;o({offset:l,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function O(){const{value:e}=P;if(!e){K();return}const{value:t}=d;if(t===null)n.validator||I(G());else{const{value:l}=M;o({offset:-l,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const ve=ce,he=me;function G(){if(n.validator)return null;const{value:e}=z,{value:t}=j;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function pe(e){ge(e),I(null)}function be(e){var t,l,i;!((t=H.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((l=L.value)===null||l===void 0)&&l.$el.contains(e.target)&&e.preventDefault(),(i=c.value)===null||i===void 0||i.activate()}let w=null,y=null,S=null;function K(){S&&(window.clearTimeout(S),S=null),w&&(window.clearInterval(w),w=null)}function Q(){C&&(window.clearTimeout(C),C=null),y&&(window.clearInterval(y),y=null)}function xe(){S=window.setTimeout(()=>{w=window.setInterval(()=>{O()},te)},ne),X("mouseup",document,()=>{window.setTimeout(K,0)},{once:!0})}let C=null;function Ie(){C=window.setTimeout(()=>{y=window.setInterval(()=>{A()},te)},ne),X("mouseup",document,()=>{window.setTimeout(Q,0)},{once:!0})}const Ve=()=>{y||A()},we=()=>{w||O()};function ye(e){var t,l;if(e.key==="Enter"){if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((l=c.value)===null||l===void 0||l.deactivate())}else if(e.key==="ArrowUp"){if(!_.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&A()}else if(e.key==="ArrowDown"){if(!P.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&O()}}function Re(e){v.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&o({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Oe(d,()=>{V()});const Ne={focus:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.blur()}},Be=ke("InputNumber",D,p);return Object.assign(Object.assign({},Ne),{rtlEnabled:Be,inputInstRef:c,minusButtonInstRef:L,addButtonInstRef:H,mergedClsPrefix:p,mergedBordered:r,uncontrolledValue:T,mergedValue:d,mergedPlaceholder:de,displayedValueInvalid:fe,mergedSize:re,mergedDisabled:ue,displayedValue:v,addable:_,minusable:P,mergedStatus:ae,handleFocus:ve,handleBlur:he,handleClear:pe,handleMouseDown:be,handleAddClick:Ve,handleMinusClick:we,handleAddMousedown:Ie,handleMinusMousedown:xe,handleKeyDown:ye,handleUpdateDisplayedValue:Re,mergedTheme:a,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:Ue(()=>{const{self:{iconColorDisabled:e}}=a.value,[t,l,i,s]=$e(e);return{textColorTextDisabled:`rgb(${t}, ${l}, ${i})`,opacityDisabled:`${s}`}})})},render(){const{mergedClsPrefix:n,$slots:r}=this,p=()=>u(Y,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>Z(r["minus-icon"],()=>[u(J,{clsPrefix:n},{default:()=>u(ze,null)})])}),D=()=>u(Y,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>Z(r["add-icon"],()=>[u(J,{clsPrefix:n},{default:()=>u(He,null)})])});return u("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},u(Le,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var a;return this.showButton&&this.buttonPlacement==="both"?[p(),q(r.prefix,g=>g?u("span",{class:`${n}-input-number-prefix`},g):null)]:(a=r.prefix)===null||a===void 0?void 0:a.call(r)},suffix:()=>{var a;return this.showButton?[q(r.suffix,g=>g?u("span",{class:`${n}-input-number-suffix`},g):null),this.buttonPlacement==="right"?p():null,D()]:(a=r.suffix)===null||a===void 0?void 0:a.call(r)}}))}});export{en as _};
