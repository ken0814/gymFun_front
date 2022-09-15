import{Z as Re,$ as Be,a0 as Te,a1 as ir,A as L,E as t,a2 as sr,v as w,y as S,M as c,a3 as cr,a4 as ur,O as Ie,a5 as dr,a6 as q,a7 as ae,a8 as hr,t as fr,a9 as ge,z as vr,r as y,q as xe,m as pr,H as P,aa as gr,x as A,ab as Z,B as br,C as Me,ac as xr,ad as mr,ae as wr,af as _e,R as yr,n as Cr,ag as $e,D as zr,ah as Sr,V as _r,X as ne,ai as $r,F as Ar,aj as Fr,ak as Ae,al as Fe,U as be,am as Pr,an as z,ao as Pe}from"./index.01c5b813.js";var Er=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rr=/^\w*$/;function Br(o,a){if(Re(o))return!1;var n=typeof o;return n=="number"||n=="symbol"||n=="boolean"||o==null||Be(o)?!0:Rr.test(o)||!Er.test(o)||a!=null&&o in Object(a)}var Tr="Expected a function";function we(o,a){if(typeof o!="function"||a!=null&&typeof a!="function")throw new TypeError(Tr);var n=function(){var v=arguments,b=a?a.apply(this,v):v[0],h=n.cache;if(h.has(b))return h.get(b);var u=o.apply(this,v);return n.cache=h.set(b,u)||h,u};return n.cache=new(we.Cache||Te),n}we.Cache=Te;var Ir=500;function Mr(o){var a=we(o,function(v){return n.size===Ir&&n.clear(),v}),n=a.cache;return a}var kr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Dr=/\\(\\)?/g,Lr=Mr(function(o){var a=[];return o.charCodeAt(0)===46&&a.push(""),o.replace(kr,function(n,v,b,h){a.push(b?h.replace(Dr,"$1"):v||n)}),a});const Wr=Lr;function Vr(o,a){return Re(o)?o:Br(o,a)?[o]:Wr(ir(o))}var Or=1/0;function Hr(o){if(typeof o=="string"||Be(o))return o;var a=o+"";return a=="0"&&1/o==-Or?"-0":a}function Nr(o,a){a=Vr(a,o);for(var n=0,v=a.length;o!=null&&n<v;)o=o[Hr(a[n++])];return n&&n==v?o:void 0}function an(o,a,n){var v=o==null?void 0:Nr(o,a);return v===void 0?n:v}const Ur=L({name:"Eye",render(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),t("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Kr=L({name:"EyeOff",render(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),t("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),t("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),t("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),t("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),jr=L({name:"ChevronDown",render(){return t("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Xr=sr("clear",t("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},t("g",{fill:"currentColor","fill-rule":"nonzero"},t("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Yr=w("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[S(">",[c("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[S("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),S("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),c("placeholder",`
 display: flex;
 `),c("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[cr({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),me=L({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(o){return ur("-base-clear",Yr,Ie(o,"clsPrefix")),{handleMouseDown(a){a.preventDefault()}}},render(){const{clsPrefix:o}=this;return t("div",{class:`${o}-base-clear`},t(dr,null,{default:()=>{var a,n;return this.show?t("div",{key:"dismiss",class:`${o}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},q(this.$slots.icon,()=>[t(ae,{clsPrefix:o},{default:()=>t(Xr,null)})])):t("div",{key:"icon",class:`${o}-base-clear__placeholder`},(n=(a=this.$slots).placeholder)===null||n===void 0?void 0:n.call(a))}}))}}),Zr=L({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(o,{slots:a}){return()=>{const{clsPrefix:n}=o;return t(hr,{clsPrefix:n,class:`${n}-base-suffix`,strokeWidth:24,scale:.85,show:o.loading},{default:()=>o.showArrow?t(me,{clsPrefix:n,show:o.showClear,onClear:o.onClear},{placeholder:()=>t(ae,{clsPrefix:n,class:`${n}-base-suffix__arrow`},{default:()=>q(a.default,()=>[t(jr,null)])})}):null})}}}),qr={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"},Gr=o=>{const{textColor2:a,textColor3:n,textColorDisabled:v,primaryColor:b,primaryColorHover:h,inputColor:u,inputColorDisabled:i,borderColor:s,warningColor:d,warningColorHover:f,errorColor:g,errorColorHover:C,borderRadius:W,lineHeight:_,fontSizeTiny:le,fontSizeSmall:V,fontSizeMedium:ie,fontSizeLarge:$,heightTiny:B,heightSmall:H,heightMedium:E,heightLarge:se,actionColor:R,clearColor:T,clearColorHover:F,clearColorPressed:I,placeholderColor:N,placeholderColorDisabled:U,iconColor:ce,iconColorDisabled:ue,iconColorHover:K,iconColorPressed:de}=o;return Object.assign(Object.assign({},qr),{countTextColor:n,heightTiny:B,heightSmall:H,heightMedium:E,heightLarge:se,fontSizeTiny:le,fontSizeSmall:V,fontSizeMedium:ie,fontSizeLarge:$,lineHeight:_,lineHeightTextarea:_,borderRadius:W,iconSize:"16px",groupLabelColor:R,groupLabelTextColor:a,textColor:a,textColorDisabled:v,textDecorationColor:a,caretColor:b,placeholderColor:N,placeholderColorDisabled:U,color:u,colorDisabled:i,colorFocus:u,groupLabelBorder:`1px solid ${s}`,border:`1px solid ${s}`,borderHover:`1px solid ${h}`,borderDisabled:`1px solid ${s}`,borderFocus:`1px solid ${h}`,boxShadowFocus:`0 0 0 2px ${ge(b,{alpha:.2})}`,loadingColor:b,loadingColorWarning:d,borderWarning:`1px solid ${d}`,borderHoverWarning:`1px solid ${f}`,colorFocusWarning:u,borderFocusWarning:`1px solid ${f}`,boxShadowFocusWarning:`0 0 0 2px ${ge(d,{alpha:.2})}`,caretColorWarning:d,loadingColorError:g,borderError:`1px solid ${g}`,borderHoverError:`1px solid ${C}`,colorFocusError:u,borderFocusError:`1px solid ${C}`,boxShadowFocusError:`0 0 0 2px ${ge(g,{alpha:.2})}`,caretColorError:g,clearColor:T,clearColorHover:F,clearColorPressed:I,iconColor:ce,iconColorDisabled:ue,iconColorHover:K,iconColorPressed:de,suffixTextColor:a})},Jr={name:"Input",common:fr,self:Gr},Qr=Jr,ke=vr("n-input");function en(o){let a=0;for(const n of o)a++;return a}function te(o){return o===""||o==null}function on(o){const a=y(null);function n(){const{value:h}=o;if(!h||!h.focus){b();return}const{selectionStart:u,selectionEnd:i,value:s}=h;if(u==null||i==null){b();return}a.value={start:u,end:i,beforeText:s.slice(0,u),afterText:s.slice(i)}}function v(){var h;const{value:u}=a,{value:i}=o;if(!u||!i)return;const{value:s}=i,{start:d,beforeText:f,afterText:g}=u;let C=s.length;if(s.endsWith(g))C=s.length-g.length;else if(s.startsWith(f))C=f.length;else{const W=f[d-1],_=s.indexOf(W,d-1);_!==-1&&(C=_+1)}(h=i.setSelectionRange)===null||h===void 0||h.call(i,C,C)}function b(){a.value=null}return xe(o,b),{recordCursor:n,restoreCursor:v}}const Ee=L({name:"InputWordCount",setup(o,{slots:a}){const{mergedValueRef:n,maxlengthRef:v,mergedClsPrefixRef:b}=pr(ke),h=P(()=>{const{value:u}=n;return u===null||Array.isArray(u)?0:en(u)});return()=>{const{value:u}=v,{value:i}=n;return t("span",{class:`${b.value}-input-word-count`},gr(a.default,{value:i===null||Array.isArray(i)?"":i},()=>[u===void 0?h.value:`${h.value} / ${u}`]))}}}),rn=w("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[c("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),c("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),c("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[S("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),S("&::placeholder","color: #0000;"),S("&:-webkit-autofill ~",[c("placeholder","display: none;")])]),A("round",[Z("textarea","border-radius: calc(var(--n-height) / 2);")]),c("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[S("span",`
 width: 100%;
 display: inline-block;
 `)]),A("textarea",[c("placeholder","overflow: visible;")]),Z("autosize","width: 100%;"),A("autosize",[c("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),w("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),c("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),c("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[S("+",[c("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),Z("textarea",[c("placeholder","white-space: nowrap;")]),c("eye",`
 transition: color .3s var(--n-bezier);
 `),A("textarea","width: 100%;",[w("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),A("resizable",[w("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),c("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),c("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),A("pair",[c("input-el, placeholder","text-align: center;"),c("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[w("icon",`
 color: var(--n-icon-color);
 `),w("base-icon",`
 color: var(--n-icon-color);
 `)])]),A("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[c("border","border: var(--n-border-disabled);"),c("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `),c("placeholder","color: var(--n-placeholder-color-disabled);"),c("separator","color: var(--n-text-color-disabled);",[w("icon",`
 color: var(--n-icon-color-disabled);
 `),w("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),c("suffix, prefix","color: var(--n-text-color-disabled);",[w("icon",`
 color: var(--n-icon-color-disabled);
 `),w("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),Z("disabled",[c("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[S("&:hover",`
 color: var(--n-icon-color-hover);
 `),S("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),S("&:hover",[c("state-border","border: var(--n-border-hover);")]),A("focus","background-color: var(--n-color-focus);",[c("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),c("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),c("state-border",`
 border-color: #0000;
 z-index: 1;
 `),c("prefix","margin-right: 4px;"),c("suffix",`
 margin-left: 4px;
 `),c("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[w("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),w("base-clear",`
 font-size: var(--n-icon-size);
 `,[c("placeholder",[w("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),S(">",[w("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),w("base-icon",`
 font-size: var(--n-icon-size);
 `)]),w("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(o=>A(`${o}-status`,[Z("disabled",[w("base-loading",`
 color: var(--n-loading-color-${o})
 `),c("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${o});
 `),c("state-border",`
 border: var(--n-border-${o});
 `),S("&:hover",[c("state-border",`
 border: var(--n-border-hover-${o});
 `)]),S("&:focus",`
 background-color: var(--n-color-focus-${o});
 `,[c("state-border",`
 box-shadow: var(--n-box-shadow-focus-${o});
 border: var(--n-border-focus-${o});
 `)]),A("focus",`
 background-color: var(--n-color-focus-${o});
 `,[c("state-border",`
 box-shadow: var(--n-box-shadow-focus-${o});
 border: var(--n-border-focus-${o});
 `)])])]))]),nn=Object.assign(Object.assign({},Me.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),ln=L({name:"Input",props:nn,setup(o){const{mergedClsPrefixRef:a,mergedBorderedRef:n,inlineThemeDisabled:v,mergedRtlRef:b}=br(o),h=Me("Input","-input",rn,Qr,o,a),u=y(null),i=y(null),s=y(null),d=y(null),f=y(null),g=y(null),C=y(null),W=on(C),_=y(null),{localeRef:le}=xr("Input"),V=y(o.defaultValue),ie=Ie(o,"value"),$=mr(ie,V),B=wr(o),{mergedSizeRef:H,mergedDisabledRef:E,mergedStatusRef:se}=B,R=y(!1),T=y(!1),F=y(!1),I=y(!1);let N=null;const U=P(()=>{const{placeholder:e,pair:r}=o;return r?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[le.value.placeholder]:[e]}),ce=P(()=>{const{value:e}=F,{value:r}=$,{value:l}=U;return!e&&(te(r)||Array.isArray(r)&&te(r[0]))&&l[0]}),ue=P(()=>{const{value:e}=F,{value:r}=$,{value:l}=U;return!e&&l[1]&&(te(r)||Array.isArray(r)&&te(r[1]))}),K=_e(()=>o.internalForceFocus||R.value),de=_e(()=>{if(E.value||o.readonly||!o.clearable||!K.value&&!T.value)return!1;const{value:e}=$,{value:r}=K;return o.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(T.value||r):!!e&&(T.value||r)}),he=P(()=>{const{showPasswordOn:e}=o;if(e)return e;if(o.showPasswordToggle)return"click"}),j=y(!1),De=P(()=>{const{textDecoration:e}=o;return e?Array.isArray(e)?e.map(r=>({textDecoration:r})):[{textDecoration:e}]:["",""]}),ye=y(void 0),Le=()=>{var e,r;if(o.type==="textarea"){const{autosize:l}=o;if(l&&(ye.value=(r=(e=_.value)===null||e===void 0?void 0:e.$el)===null||r===void 0?void 0:r.offsetWidth),!i.value||typeof l=="boolean")return;const{paddingTop:p,paddingBottom:x,lineHeight:m}=window.getComputedStyle(i.value),M=Number(p.slice(0,-2)),k=Number(x.slice(0,-2)),D=Number(m.slice(0,-2)),{value:X}=s;if(!X)return;if(l.minRows){const Y=Math.max(l.minRows,1),pe=`${M+k+D*Y}px`;X.style.minHeight=pe}if(l.maxRows){const Y=`${M+k+D*l.maxRows}px`;X.style.maxHeight=Y}}},We=P(()=>{const{maxlength:e}=o;return e===void 0?void 0:Number(e)});yr(()=>{const{value:e}=$;Array.isArray(e)||ve(e)});const Ve=Cr().proxy;function G(e){const{onUpdateValue:r,"onUpdate:value":l,onInput:p}=o,{nTriggerFormInput:x}=B;r&&z(r,e),l&&z(l,e),p&&z(p,e),V.value=e,x()}function J(e){const{onChange:r}=o,{nTriggerFormChange:l}=B;r&&z(r,e),V.value=e,l()}function Oe(e){const{onBlur:r}=o,{nTriggerFormBlur:l}=B;r&&z(r,e),l()}function He(e){const{onFocus:r}=o,{nTriggerFormFocus:l}=B;r&&z(r,e),l()}function Ne(e){const{onClear:r}=o;r&&z(r,e)}function Ue(e){const{onInputBlur:r}=o;r&&z(r,e)}function Ke(e){const{onInputFocus:r}=o;r&&z(r,e)}function je(){const{onDeactivate:e}=o;e&&z(e)}function Xe(){const{onActivate:e}=o;e&&z(e)}function Ye(e){const{onClick:r}=o;r&&z(r,e)}function Ze(e){const{onWrapperFocus:r}=o;r&&z(r,e)}function qe(e){const{onWrapperBlur:r}=o;r&&z(r,e)}function Ge(){F.value=!0}function Je(e){F.value=!1,e.target===g.value?Q(e,1):Q(e,0)}function Q(e,r=0,l="input"){const p=e.target.value;if(ve(p),o.type==="textarea"){const{value:m}=_;m&&m.syncUnifiedContainer()}if(N=p,F.value)return;W.recordCursor();const x=Qe(p);if(x)if(!o.pair)l==="input"?G(p):J(p);else{let{value:m}=$;Array.isArray(m)?m=[m[0],m[1]]:m=["",""],m[r]=p,l==="input"?G(m):J(m)}Ve.$forceUpdate(),x||Ae(W.restoreCursor)}function Qe(e){const{allowInput:r}=o;return typeof r=="function"?r(e):!0}function eo(e){Ue(e),e.relatedTarget===u.value&&je(),e.relatedTarget!==null&&(e.relatedTarget===f.value||e.relatedTarget===g.value||e.relatedTarget===i.value)||(I.value=!1),ee(e,"blur"),C.value=null}function oo(e,r){Ke(e),R.value=!0,I.value=!0,Xe(),ee(e,"focus"),r===0?C.value=f.value:r===1?C.value=g.value:r===2&&(C.value=i.value)}function ro(e){o.passivelyActivated&&(qe(e),ee(e,"blur"))}function no(e){o.passivelyActivated&&(R.value=!0,Ze(e),ee(e,"focus"))}function ee(e,r){e.relatedTarget!==null&&(e.relatedTarget===f.value||e.relatedTarget===g.value||e.relatedTarget===i.value||e.relatedTarget===u.value)||(r==="focus"?(He(e),R.value=!0):r==="blur"&&(Oe(e),R.value=!1))}function to(e,r){Q(e,r,"change")}function ao(e){Ye(e)}function lo(e){Ne(e),o.pair?(G(["",""]),J(["",""])):(G(""),J(""))}function io(e){const{onMousedown:r}=o;r&&r(e);const{tagName:l}=e.target;if(l!=="INPUT"&&l!=="TEXTAREA"){if(o.resizable){const{value:p}=u;if(p){const{left:x,top:m,width:M,height:k}=p.getBoundingClientRect(),D=14;if(x+M-D<e.clientX&&e.clientY<x+M&&m+k-D<e.clientY&&e.clientY<m+k)return}}e.preventDefault(),R.value||Ce()}}function so(){var e;T.value=!0,o.type==="textarea"&&((e=_.value)===null||e===void 0||e.handleMouseEnterWrapper())}function co(){var e;T.value=!1,o.type==="textarea"&&((e=_.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function uo(){E.value||he.value==="click"&&(j.value=!j.value)}function ho(e){if(E.value)return;e.preventDefault();const r=p=>{p.preventDefault(),Pe("mouseup",document,r)};if(Fe("mouseup",document,r),he.value!=="mousedown")return;j.value=!0;const l=()=>{j.value=!1,Pe("mouseup",document,l)};Fe("mouseup",document,l)}function fo(e){var r;switch((r=o.onKeydown)===null||r===void 0||r.call(o,e),e.key){case"Escape":fe();break;case"Enter":vo(e);break}}function vo(e){var r,l;if(o.passivelyActivated){const{value:p}=I;if(p){o.internalDeactivateOnEnter&&fe();return}e.preventDefault(),o.type==="textarea"?(r=i.value)===null||r===void 0||r.focus():(l=f.value)===null||l===void 0||l.focus()}}function fe(){o.passivelyActivated&&(I.value=!1,Ae(()=>{var e;(e=u.value)===null||e===void 0||e.focus()}))}function Ce(){var e,r,l;E.value||(o.passivelyActivated?(e=u.value)===null||e===void 0||e.focus():((r=i.value)===null||r===void 0||r.focus(),(l=f.value)===null||l===void 0||l.focus()))}function po(){var e;!((e=u.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function go(){var e,r;(e=i.value)===null||e===void 0||e.select(),(r=f.value)===null||r===void 0||r.select()}function bo(){E.value||(i.value?i.value.focus():f.value&&f.value.focus())}function xo(){const{value:e}=u;(e==null?void 0:e.contains(document.activeElement))&&e!==document.activeElement&&fe()}function mo(e){if(o.type==="textarea"){const{value:r}=i;r==null||r.scrollTo(e)}else{const{value:r}=f;r==null||r.scrollTo(e)}}function ve(e){const{type:r,pair:l,autosize:p}=o;if(!l&&p)if(r==="textarea"){const{value:x}=s;x&&(x.textContent=(e!=null?e:"")+`\r
`)}else{const{value:x}=d;x&&(e?x.textContent=e:x.innerHTML="&nbsp;")}}function wo(){Le()}const ze=y({top:"0"});function yo(e){var r;const{scrollTop:l}=e.target;ze.value.top=`${-l}px`,(r=_.value)===null||r===void 0||r.syncUnifiedContainer()}let oe=null;$e(()=>{const{autosize:e,type:r}=o;e&&r==="textarea"?oe=xe($,l=>{!Array.isArray(l)&&l!==N&&ve(l)}):oe==null||oe()});let re=null;$e(()=>{o.type==="textarea"?re=xe($,e=>{var r;!Array.isArray(e)&&e!==N&&((r=_.value)===null||r===void 0||r.syncUnifiedContainer())}):re==null||re()}),zr(ke,{mergedValueRef:$,maxlengthRef:We,mergedClsPrefixRef:a});const Co={wrapperElRef:u,inputElRef:f,textareaElRef:i,isCompositing:F,focus:Ce,blur:po,select:go,deactivate:xo,activate:bo,scrollTo:mo},zo=Sr("Input",b,a),Se=P(()=>{const{value:e}=H,{common:{cubicBezierEaseInOut:r},self:{color:l,borderRadius:p,textColor:x,caretColor:m,caretColorError:M,caretColorWarning:k,textDecorationColor:D,border:X,borderDisabled:Y,borderHover:pe,borderFocus:So,placeholderColor:_o,placeholderColorDisabled:$o,lineHeightTextarea:Ao,colorDisabled:Fo,colorFocus:Po,textColorDisabled:Eo,boxShadowFocus:Ro,iconSize:Bo,colorFocusWarning:To,boxShadowFocusWarning:Io,borderWarning:Mo,borderFocusWarning:ko,borderHoverWarning:Do,colorFocusError:Lo,boxShadowFocusError:Wo,borderError:Vo,borderFocusError:Oo,borderHoverError:Ho,clearSize:No,clearColor:Uo,clearColorHover:Ko,clearColorPressed:jo,iconColor:Xo,iconColorDisabled:Yo,suffixTextColor:Zo,countTextColor:qo,iconColorHover:Go,iconColorPressed:Jo,loadingColor:Qo,loadingColorError:er,loadingColorWarning:or,[be("padding",e)]:rr,[be("fontSize",e)]:nr,[be("height",e)]:tr}}=h.value,{left:ar,right:lr}=Pr(rr);return{"--n-bezier":r,"--n-count-text-color":qo,"--n-color":l,"--n-font-size":nr,"--n-border-radius":p,"--n-height":tr,"--n-padding-left":ar,"--n-padding-right":lr,"--n-text-color":x,"--n-caret-color":m,"--n-text-decoration-color":D,"--n-border":X,"--n-border-disabled":Y,"--n-border-hover":pe,"--n-border-focus":So,"--n-placeholder-color":_o,"--n-placeholder-color-disabled":$o,"--n-icon-size":Bo,"--n-line-height-textarea":Ao,"--n-color-disabled":Fo,"--n-color-focus":Po,"--n-text-color-disabled":Eo,"--n-box-shadow-focus":Ro,"--n-loading-color":Qo,"--n-caret-color-warning":k,"--n-color-focus-warning":To,"--n-box-shadow-focus-warning":Io,"--n-border-warning":Mo,"--n-border-focus-warning":ko,"--n-border-hover-warning":Do,"--n-loading-color-warning":or,"--n-caret-color-error":M,"--n-color-focus-error":Lo,"--n-box-shadow-focus-error":Wo,"--n-border-error":Vo,"--n-border-focus-error":Oo,"--n-border-hover-error":Ho,"--n-loading-color-error":er,"--n-clear-color":Uo,"--n-clear-size":No,"--n-clear-color-hover":Ko,"--n-clear-color-pressed":jo,"--n-icon-color":Xo,"--n-icon-color-hover":Go,"--n-icon-color-pressed":Jo,"--n-icon-color-disabled":Yo,"--n-suffix-text-color":Zo}}),O=v?_r("input",P(()=>{const{value:e}=H;return e[0]}),Se,o):void 0;return Object.assign(Object.assign({},Co),{wrapperElRef:u,inputElRef:f,inputMirrorElRef:d,inputEl2Ref:g,textareaElRef:i,textareaMirrorElRef:s,textareaScrollbarInstRef:_,rtlEnabled:zo,uncontrolledValue:V,mergedValue:$,passwordVisible:j,mergedPlaceholder:U,showPlaceholder1:ce,showPlaceholder2:ue,mergedFocus:K,isComposing:F,activated:I,showClearButton:de,mergedSize:H,mergedDisabled:E,textDecorationStyle:De,mergedClsPrefix:a,mergedBordered:n,mergedShowPasswordOn:he,placeholderStyle:ze,mergedStatus:se,textAreaScrollContainerWidth:ye,handleTextAreaScroll:yo,handleCompositionStart:Ge,handleCompositionEnd:Je,handleInput:Q,handleInputBlur:eo,handleInputFocus:oo,handleWrapperBlur:ro,handleWrapperFocus:no,handleMouseEnter:so,handleMouseLeave:co,handleMouseDown:io,handleChange:to,handleClick:ao,handleClear:lo,handlePasswordToggleClick:uo,handlePasswordToggleMousedown:ho,handleWrapperKeydown:fo,handleTextAreaMirrorResize:wo,getTextareaScrollContainer:()=>i.value,mergedTheme:h,cssVars:v?void 0:Se,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender})},render(){var o,a;const{mergedClsPrefix:n,mergedStatus:v,themeClass:b,type:h,onRender:u}=this,i=this.$slots;return u==null||u(),t("div",{ref:"wrapperElRef",class:[`${n}-input`,b,v&&`${n}-input--${v}-status`,{[`${n}-input--rtl`]:this.rtlEnabled,[`${n}-input--disabled`]:this.mergedDisabled,[`${n}-input--textarea`]:h==="textarea",[`${n}-input--resizable`]:this.resizable&&!this.autosize,[`${n}-input--autosize`]:this.autosize,[`${n}-input--round`]:this.round&&h!=="textarea",[`${n}-input--pair`]:this.pair,[`${n}-input--focus`]:this.mergedFocus,[`${n}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},t("div",{class:`${n}-input-wrapper`},ne(i.prefix,s=>s&&t("div",{class:`${n}-input__prefix`},s)),h==="textarea"?t($r,{ref:"textareaScrollbarInstRef",class:`${n}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var s,d;const{textAreaScrollContainerWidth:f}=this,g={width:this.autosize&&f&&`${f}px`};return t(Ar,null,t("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${n}-input__textarea-el`,(s=this.inputProps)===null||s===void 0?void 0:s.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(d=this.inputProps)===null||d===void 0?void 0:d.style,g],onBlur:this.handleInputBlur,onFocus:C=>this.handleInputFocus(C,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?t("div",{class:`${n}-input__placeholder`,style:[this.placeholderStyle,g],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?t(Fr,{onResize:this.handleTextAreaMirrorResize},{default:()=>t("div",{ref:"textareaMirrorElRef",class:`${n}-input__textarea-mirror`,key:"mirror"})}):null)}}):t("div",{class:`${n}-input__input`},t("input",Object.assign({type:h==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":h},this.inputProps,{ref:"inputElRef",class:[`${n}-input__input-el`,(o=this.inputProps)===null||o===void 0?void 0:o.class],style:[this.textDecorationStyle[0],(a=this.inputProps)===null||a===void 0?void 0:a.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:s=>this.handleInputFocus(s,0),onInput:s=>this.handleInput(s,0),onChange:s=>this.handleChange(s,0)})),this.showPlaceholder1?t("div",{class:`${n}-input__placeholder`},t("span",null,this.mergedPlaceholder[0])):null,this.autosize?t("div",{class:`${n}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&ne(i.suffix,s=>s||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?t("div",{class:`${n}-input__suffix`},[ne(i["clear-icon-placeholder"],d=>(this.clearable||d)&&t(me,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>d,icon:()=>{var f,g;return(g=(f=this.$slots)["clear-icon"])===null||g===void 0?void 0:g.call(f)}})),this.internalLoadingBeforeSuffix?null:s,this.loading!==void 0?t(Zr,{clsPrefix:n,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?s:null,this.showCount&&this.type!=="textarea"?t(Ee,null,{default:d=>{var f;return(f=i.count)===null||f===void 0?void 0:f.call(i,d)}}):null,this.mergedShowPasswordOn&&this.type==="password"?t("div",{class:`${n}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?q(i["password-visible-icon"],()=>[t(ae,{clsPrefix:n},{default:()=>t(Ur,null)})]):q(i["password-invisible-icon"],()=>[t(ae,{clsPrefix:n},{default:()=>t(Kr,null)})])):null]):null)),this.pair?t("span",{class:`${n}-input__separator`},q(i.separator,()=>[this.separator])):null,this.pair?t("div",{class:`${n}-input-wrapper`},t("div",{class:`${n}-input__input`},t("input",{ref:"inputEl2Ref",type:this.type,class:`${n}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:s=>this.handleInputFocus(s,1),onInput:s=>this.handleInput(s,1),onChange:s=>this.handleChange(s,1)}),this.showPlaceholder2?t("div",{class:`${n}-input__placeholder`},t("span",null,this.mergedPlaceholder[1])):null),ne(i.suffix,s=>(this.clearable||s)&&t("div",{class:`${n}-input__suffix`},[this.clearable&&t(me,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var d;return(d=i["clear-icon"])===null||d===void 0?void 0:d.call(i)},placeholder:()=>{var d;return(d=i["clear-icon-placeholder"])===null||d===void 0?void 0:d.call(i)}}),s]))):null,this.mergedBordered?t("div",{class:`${n}-input__border`}):null,this.mergedBordered?t("div",{class:`${n}-input__state-border`}):null,this.showCount&&h==="textarea"?t(Ee,null,{default:s=>{var d;return(d=i.count)===null||d===void 0?void 0:d.call(i,s)}}):null)}});export{Ur as E,Zr as N,ln as _,Qr as a,Nr as b,Vr as c,an as g,Br as i,Hr as t};
