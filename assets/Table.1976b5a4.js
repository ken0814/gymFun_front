import{t as V,bO as t,y as o,v as C,x as c,ab as j,bx as W,bP as F,A,B as D,C as P,ah as I,H as f,V as K,E as N,U as x}from"./index.85bdb11a.js";const U={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},q=e=>{const{dividerColor:r,cardColor:l,modalColor:n,popoverColor:a,tableHeaderColor:s,tableColorStriped:i,textColor1:d,textColor2:b,borderRadius:g,fontWeightStrong:h,lineHeight:p,fontSizeSmall:v,fontSizeMedium:m,fontSizeLarge:u}=e;return Object.assign(Object.assign({},U),{fontSizeSmall:v,fontSizeMedium:m,fontSizeLarge:u,lineHeight:p,borderRadius:g,borderColor:t(l,r),borderColorModal:t(n,r),borderColorPopover:t(a,r),tdColor:l,tdColorModal:n,tdColorPopover:a,tdColorStriped:t(l,i),tdColorStripedModal:t(n,i),tdColorStripedPopover:t(a,i),thColor:t(l,s),thColorModal:t(n,s),thColorPopover:t(a,s),thTextColor:d,tdTextColor:b,thFontWeight:h})},G={name:"Table",common:V,self:q},J=G,Q=o([C("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[o("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),c("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),c("single-line",[o("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),o("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),c("single-column",[o("tr",[o("&:not(:last-child)",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),c("striped",[o("tr:nth-of-type(even)",[o("td","background-color: var(--n-td-color-striped)")])]),j("bottom-bordered",[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),W(C("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[o("th",`
 background-color: var(--n-th-color-modal);
 `),o("td",`
 background-color: var(--n-td-color-modal);
 `)])),F(C("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[o("th",`
 background-color: var(--n-th-color-popover);
 `),o("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),X=Object.assign(Object.assign({},P.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),Z=A({name:"Table",props:X,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:l,mergedRtlRef:n}=D(e),a=P("Table","-table",Q,J,e,r),s=I("Table",n,r),i=f(()=>{const{size:b}=e,{self:{borderColor:g,tdColor:h,tdColorModal:p,tdColorPopover:v,thColor:m,thColorModal:u,thColorPopover:z,thTextColor:S,tdTextColor:M,borderRadius:k,thFontWeight:R,lineHeight:T,borderColorModal:B,borderColorPopover:y,tdColorStriped:$,tdColorStripedModal:L,tdColorStripedPopover:w,[x("fontSize",b)]:O,[x("tdPadding",b)]:_,[x("thPadding",b)]:E},common:{cubicBezierEaseInOut:H}}=a.value;return{"--n-bezier":H,"--n-td-color":h,"--n-td-color-modal":p,"--n-td-color-popover":v,"--n-td-text-color":M,"--n-border-color":g,"--n-border-color-modal":B,"--n-border-color-popover":y,"--n-border-radius":k,"--n-font-size":O,"--n-th-color":m,"--n-th-color-modal":u,"--n-th-color-popover":z,"--n-th-font-weight":R,"--n-th-text-color":S,"--n-line-height":T,"--n-td-padding":_,"--n-th-padding":E,"--n-td-color-striped":$,"--n-td-color-striped-modal":L,"--n-td-color-striped-popover":w}}),d=l?K("table",f(()=>e.size[0]),i,e):void 0;return{rtlEnabled:s,mergedClsPrefix:r,cssVars:l?void 0:i,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),N("table",{class:[`${r}-table`,this.themeClass,{[`${r}-table--rtl`]:this.rtlEnabled,[`${r}-table--bottom-bordered`]:this.bottomBordered,[`${r}-table--bordered`]:this.bordered,[`${r}-table--single-line`]:this.singleLine,[`${r}-table--single-column`]:this.singleColumn,[`${r}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}});export{Z as _};