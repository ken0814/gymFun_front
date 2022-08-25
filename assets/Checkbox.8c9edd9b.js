import{Q as te,R as se,z as b,y as K,Z as j,a2 as L,r as P,V as B,a1 as E,a6 as be,H as U,U as ue,ag as i,C as x,B as c,D as R,X as _,E as he,bw as fe,bK as ke,m as ve,a3 as me,$ as N,a7 as xe,a8 as ge,al as pe,J as Ce,ad as ye,ae as H}from"./index.d0332747.js";const ze={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px"},Re=o=>{const{baseColor:u,inputColorDisabled:h,cardColor:z,modalColor:w,popoverColor:d,textColorDisabled:k,borderColor:l,primaryColor:n,textColor2:a,fontSizeSmall:S,fontSizeMedium:f,fontSizeLarge:r,borderRadiusSmall:v,lineHeight:m}=o;return Object.assign(Object.assign({},ze),{labelLineHeight:m,fontSizeSmall:S,fontSizeMedium:f,fontSizeLarge:r,borderRadius:v,color:u,colorChecked:n,colorDisabled:h,colorDisabledChecked:h,colorTableHeader:z,colorTableHeaderModal:w,colorTableHeaderPopover:d,checkMarkColor:u,checkMarkColorDisabled:k,checkMarkColorDisabledChecked:k,border:`1px solid ${l}`,borderDisabled:`1px solid ${l}`,borderDisabledChecked:`1px solid ${l}`,borderChecked:`1px solid ${n}`,borderFocus:`1px solid ${n}`,boxShadowFocus:`0 0 0 2px ${se(n,{alpha:.3})}`,textColor:a,textColorDisabled:k})},we={name:"Checkbox",common:te,self:Re},Se=we,De=b("svg",{viewBox:"0 0 64 64",class:"check-icon"},b("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Te=b("svg",{viewBox:"0 0 100 100",class:"line-icon"},b("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),V=ue("n-checkbox-group"),$e={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Be=K({name:"CheckboxGroup",props:$e,setup(o){const{mergedClsPrefixRef:u}=j(o),h=L(o),{mergedSizeRef:z,mergedDisabledRef:w}=h,d=P(o.defaultValue),k=B(()=>o.value),l=E(k,d),n=B(()=>{var f;return((f=l.value)===null||f===void 0?void 0:f.length)||0}),a=B(()=>Array.isArray(l.value)?new Set(l.value):new Set);function S(f,r){const{nTriggerFormInput:v,nTriggerFormChange:m}=h,{onChange:g,"onUpdate:value":p,onUpdateValue:C}=o;if(Array.isArray(l.value)){const t=Array.from(l.value),A=t.findIndex(F=>F===r);f?~A||(t.push(r),C&&i(C,t,{actionType:"check",value:r}),p&&i(p,t,{actionType:"check",value:r}),v(),m(),d.value=t,g&&i(g,t)):~A&&(t.splice(A,1),C&&i(C,t,{actionType:"uncheck",value:r}),p&&i(p,t,{actionType:"uncheck",value:r}),g&&i(g,t),d.value=t,v(),m())}else f?(C&&i(C,[r],{actionType:"check",value:r}),p&&i(p,[r],{actionType:"check",value:r}),g&&i(g,[r]),d.value=[r],v(),m()):(C&&i(C,[],{actionType:"uncheck",value:r}),p&&i(p,[],{actionType:"uncheck",value:r}),g&&i(g,[]),d.value=[],v(),m())}return be(V,{checkedCountRef:n,maxRef:U(o,"max"),minRef:U(o,"min"),valueSetRef:a,disabledRef:w,mergedSizeRef:z,toggleCheckbox:S}),{mergedClsPrefix:u}},render(){return b("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Me=x([c("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[x("&:hover",[c("checkbox-box",[R("border",{border:"var(--n-border-checked)"})])]),x("&:focus:not(:active)",[c("checkbox-box",[R("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),_("inside-table",[c("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),_("checked",[c("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[c("checkbox-icon",[x(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),_("indeterminate",[c("checkbox-box",[c("checkbox-icon",[x(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),x(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),_("checked, indeterminate",[x("&:focus:not(:active)",[c("checkbox-box",[R("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),c("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[R("border",{border:"var(--n-border-checked)"})])]),_("disabled",{cursor:"not-allowed"},[_("checked",[c("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[R("border",{border:"var(--n-border-disabled-checked)"}),c("checkbox-icon",[x(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),c("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[R("border",{border:"var(--n-border-disabled)"}),c("checkbox-icon",[x(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),R("label",{color:"var(--n-text-color-disabled)"})]),c("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),c("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[R("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),c("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[x(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),he({left:"1px",top:"1px"})])]),R("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 `,[x("&:empty",{display:"none"})])]),fe(c("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),ke(c("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),_e=Object.assign(Object.assign({},N.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Fe=K({name:"Checkbox",props:_e,setup(o){const u=P(null),{mergedClsPrefixRef:h,inlineThemeDisabled:z,mergedRtlRef:w}=j(o),d=L(o,{mergedSize(e){const{size:y}=o;if(y!==void 0)return y;if(n){const{value:s}=n.mergedSizeRef;if(s!==void 0)return s}if(e){const{mergedSize:s}=e;if(s!==void 0)return s.value}return"medium"},mergedDisabled(e){const{disabled:y}=o;if(y!==void 0)return y;if(n){if(n.disabledRef.value)return!0;const{maxRef:{value:s},checkedCountRef:D}=n;if(s!==void 0&&D.value>=s&&!r.value)return!0;const{minRef:{value:$}}=n;if($!==void 0&&D.value<=$&&r.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:k,mergedSizeRef:l}=d,n=ve(V,null),a=P(o.defaultChecked),S=U(o,"checked"),f=E(S,a),r=me(()=>{if(n){const e=n.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return f.value===o.checkedValue}),v=N("Checkbox","-checkbox",Me,Se,o,h);function m(e){if(n&&o.value!==void 0)n.toggleCheckbox(!r.value,o.value);else{const{onChange:y,"onUpdate:checked":s,onUpdateChecked:D}=o,{nTriggerFormInput:$,nTriggerFormChange:I}=d,M=r.value?o.uncheckedValue:o.checkedValue;s&&i(s,M,e),D&&i(D,M,e),y&&i(y,M,e),$(),I(),a.value=M}}function g(e){k.value||m(e)}function p(e){if(!k.value)switch(e.key){case" ":case"Enter":m(e)}}function C(e){switch(e.key){case" ":e.preventDefault()}}const t={focus:()=>{var e;(e=u.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=u.value)===null||e===void 0||e.blur()}},A=xe("Checkbox",w,h),F=B(()=>{const{value:e}=l,{common:{cubicBezierEaseInOut:y},self:{borderRadius:s,color:D,colorChecked:$,colorDisabled:I,colorTableHeader:M,colorTableHeaderModal:O,colorTableHeaderPopover:G,checkMarkColor:J,checkMarkColorDisabled:Q,border:X,borderFocus:Y,borderDisabled:Z,borderChecked:q,boxShadowFocus:W,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:re,colorDisabledChecked:ne,borderDisabledChecked:ae,labelPadding:ce,labelLineHeight:le,[H("fontSize",e)]:ie,[H("size",e)]:de}}=v.value;return{"--n-label-line-height":le,"--n-size":de,"--n-bezier":y,"--n-border-radius":s,"--n-border":X,"--n-border-checked":q,"--n-border-focus":Y,"--n-border-disabled":Z,"--n-border-disabled-checked":ae,"--n-box-shadow-focus":W,"--n-color":D,"--n-color-checked":$,"--n-color-table":M,"--n-color-table-modal":O,"--n-color-table-popover":G,"--n-color-disabled":I,"--n-color-disabled-checked":ne,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":J,"--n-check-mark-color-disabled":Q,"--n-check-mark-color-disabled-checked":re,"--n-font-size":ie,"--n-label-padding":ce}}),T=z?ge("checkbox",B(()=>l.value[0]),F,o):void 0;return Object.assign(d,t,{rtlEnabled:A,selfRef:u,mergedClsPrefix:h,mergedDisabled:k,renderedChecked:r,mergedTheme:v,labelId:pe(),handleClick:g,handleKeyUp:p,handleKeyDown:C,cssVars:z?void 0:F,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){var o;const{$slots:u,renderedChecked:h,mergedDisabled:z,indeterminate:w,privateInsideTable:d,cssVars:k,labelId:l,label:n,mergedClsPrefix:a,focusable:S,handleKeyUp:f,handleKeyDown:r,handleClick:v}=this;return(o=this.onRender)===null||o===void 0||o.call(this),b("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,h&&`${a}-checkbox--checked`,z&&`${a}-checkbox--disabled`,w&&`${a}-checkbox--indeterminate`,d&&`${a}-checkbox--inside-table`],tabindex:z||!S?void 0:0,role:"checkbox","aria-checked":w?"mixed":h,"aria-labelledby":l,style:k,onKeyup:f,onKeydown:r,onClick:v,onMousedown:()=>{ye("selectstart",window,m=>{m.preventDefault()},{once:!0})}},b("div",{class:`${a}-checkbox-box-wrapper`},"\xA0",b("div",{class:`${a}-checkbox-box`},b(Ce,null,{default:()=>this.indeterminate?b("div",{key:"indeterminate",class:`${a}-checkbox-icon`},Te):b("div",{key:"check",class:`${a}-checkbox-icon`},De)}),b("div",{class:`${a}-checkbox-box__border`}))),n!==null||u.default?b("span",{class:`${a}-checkbox__label`,id:l},u.default?u.default():n):null)}});export{Fe as _,Be as a};
