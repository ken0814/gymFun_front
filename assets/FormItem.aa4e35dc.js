import{m as te,n as We,q as $e,s as Be,t as De,v as V,x as Z,y as G,z as je,A as Me,B as ze,C as de,r as Q,D as ge,E,G as xe,H as _,J as ce,K as Ye,M as we,O as se,P as ke,Q as Ue,R as Ke,U as N,V as Je,W as Ze,X as Ge,Y as qe}from"./index.8f7fe4e0.js";import{g as Le}from"./Input.806eded6.js";function Qe(r,e,n){var t;const i=te(r,null);if(i===null)return;const o=(t=We())===null||t===void 0?void 0:t.proxy;$e(n,a),a(n.value),Be(()=>{a(void 0,n.value)});function a(u,l){const g=i[e];l!==void 0&&s(g,l),u!==void 0&&f(g,u)}function s(u,l){u[l]||(u[l]=[]),u[l].splice(u[l].findIndex(g=>g===o),1)}function f(u,l){u[l]||(u[l]=[]),~u[l].findIndex(g=>g===o)||u[l].push(o)}}const Xe={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right"},en=r=>{const{heightSmall:e,heightMedium:n,heightLarge:t,textColor1:i,errorColor:o,warningColor:a,lineHeight:s,textColor3:f}=r;return Object.assign(Object.assign({},Xe),{blankHeightSmall:e,blankHeightMedium:n,blankHeightLarge:t,lineHeight:s,labelTextColor:i,asteriskColor:o,feedbackTextColorError:o,feedbackTextColorWarning:a,feedbackTextColor:f})},nn={name:"Form",common:De,self:en},Ve=nn,tn=V("form",[Z("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[V("form-item",{width:"auto",marginRight:"18px"},[G("&:last-child",{marginRight:0})])])]),re=je("n-form"),Ie=je("n-form-item-insts");var rn=globalThis&&globalThis.__awaiter||function(r,e,n,t){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function s(l){try{u(t.next(l))}catch(g){a(g)}}function f(l){try{u(t.throw(l))}catch(g){a(g)}}function u(l){l.done?o(l.value):i(l.value).then(s,f)}u((t=t.apply(r,e||[])).next())})};const an=Object.assign(Object.assign({},de.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:r=>r.preventDefault()},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),Un=Me({name:"Form",props:an,setup(r){const{mergedClsPrefixRef:e}=ze(r);de("Form","-form",tn,Ve,r,e);const n={},t=Q(void 0),i=f=>{const u=t.value;(u===void 0||f>=u)&&(t.value=f)};function o(f,u=()=>!0){return rn(this,void 0,void 0,function*(){return yield new Promise((l,g)=>{const d=[];for(const x of xe(n)){const k=n[x];for(const m of k)m.path&&d.push(m.internalValidate(null,u))}Promise.all(d).then(x=>{if(x.some(k=>!k.valid)){const k=x.filter(m=>m.errors).map(m=>m.errors);f&&f(k),g(k)}else f&&f(),l()})})})}function a(){for(const f of xe(n)){const u=n[f];for(const l of u)l.restoreValidation()}}return ge(re,{props:r,maxChildLabelWidthRef:t,deriveMaxChildLabelWidth:i}),ge(Ie,{formItems:n}),Object.assign({validate:o,restoreValidation:a},{mergedClsPrefix:e})},render(){const{mergedClsPrefix:r}=this;return E("form",{class:[`${r}-form`,this.inline&&`${r}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});function B(){return B=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},B.apply(this,arguments)}function on(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,ne(r,e)}function he(r){return he=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},he(r)}function ne(r,e){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},ne(r,e)}function sn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function le(r,e,n){return sn()?le=Reflect.construct.bind():le=function(i,o,a){var s=[null];s.push.apply(s,o);var f=Function.bind.apply(i,s),u=new f;return a&&ne(u,a.prototype),u},le.apply(null,arguments)}function fn(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function pe(r){var e=typeof Map=="function"?new Map:void 0;return pe=function(t){if(t===null||!fn(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return le(t,arguments,he(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ne(i,t)},pe(r)}var ln=/%[sdj%]/g,dn=function(){};typeof process<"u"&&process.env;function ve(r){if(!r||!r.length)return null;var e={};return r.forEach(function(n){var t=n.field;e[t]=e[t]||[],e[t].push(n)}),e}function j(r){for(var e=arguments.length,n=new Array(e>1?e-1:0),t=1;t<e;t++)n[t-1]=arguments[t];var i=0,o=n.length;if(typeof r=="function")return r.apply(null,n);if(typeof r=="string"){var a=r.replace(ln,function(s){if(s==="%%")return"%";if(i>=o)return s;switch(s){case"%s":return String(n[i++]);case"%d":return Number(n[i++]);case"%j":try{return JSON.stringify(n[i++])}catch{return"[Circular]"}break;default:return s}});return a}return r}function un(r){return r==="string"||r==="url"||r==="hex"||r==="email"||r==="date"||r==="pattern"}function S(r,e){return!!(r==null||e==="array"&&Array.isArray(r)&&!r.length||un(e)&&typeof r=="string"&&!r)}function cn(r,e,n){var t=[],i=0,o=r.length;function a(s){t.push.apply(t,s||[]),i++,i===o&&n(t)}r.forEach(function(s){e(s,a)})}function Fe(r,e,n){var t=0,i=r.length;function o(a){if(a&&a.length){n(a);return}var s=t;t=t+1,s<i?e(r[s],o):n([])}o([])}function mn(r){var e=[];return Object.keys(r).forEach(function(n){e.push.apply(e,r[n]||[])}),e}var Re=function(r){on(e,r);function e(n,t){var i;return i=r.call(this,"Async Validation Error")||this,i.errors=n,i.fields=t,i}return e}(pe(Error));function gn(r,e,n,t,i){if(e.first){var o=new Promise(function(d,x){var k=function(c){return t(c),c.length?x(new Re(c,ve(c))):d(i)},m=mn(r);Fe(m,n,k)});return o.catch(function(d){return d}),o}var a=e.firstFields===!0?Object.keys(r):e.firstFields||[],s=Object.keys(r),f=s.length,u=0,l=[],g=new Promise(function(d,x){var k=function(v){if(l.push.apply(l,v),u++,u===f)return t(l),l.length?x(new Re(l,ve(l))):d(i)};s.length||(t(l),d(i)),s.forEach(function(m){var v=r[m];a.indexOf(m)!==-1?Fe(v,n,k):cn(v,n,k)})});return g.catch(function(d){return d}),g}function hn(r){return!!(r&&r.message!==void 0)}function pn(r,e){for(var n=r,t=0;t<e.length;t++){if(n==null)return n;n=n[e[t]]}return n}function Se(r,e){return function(n){var t;return r.fullFields?t=pn(e,r.fullFields):t=e[n.field||r.fullField],hn(n)?(n.field=n.field||r.fullField,n.fieldValue=t,n):{message:typeof n=="function"?n():n,fieldValue:t,field:n.field||r.fullField}}}function Pe(r,e){if(e){for(var n in e)if(e.hasOwnProperty(n)){var t=e[n];typeof t=="object"&&typeof r[n]=="object"?r[n]=B({},r[n],t):r[n]=t}}return r}var Te=function(e,n,t,i,o,a){e.required&&(!t.hasOwnProperty(e.field)||S(n,a||e.type))&&i.push(j(o.messages.required,e.fullField))},vn=function(e,n,t,i,o){(/^\s+$/.test(n)||n==="")&&i.push(j(o.messages.whitespace,e.fullField))},fe,bn=function(){if(fe)return fe;var r="[a-fA-F\\d:]",e=function(b){return b&&b.includeBoundaries?"(?:(?<=\\s|^)(?="+r+")|(?<="+r+")(?=\\s|$))":""},n="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",t="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+t+":){7}(?:"+t+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+t+":){6}(?:"+n+"|:"+t+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+t+":){5}(?::"+n+"|(?::"+t+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+t+":){4}(?:(?::"+t+"){0,1}:"+n+"|(?::"+t+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+t+":){3}(?:(?::"+t+"){0,2}:"+n+"|(?::"+t+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+t+":){2}(?:(?::"+t+"){0,3}:"+n+"|(?::"+t+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+t+":){1}(?:(?::"+t+"){0,4}:"+n+"|(?::"+t+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+t+"){0,5}:"+n+"|(?::"+t+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+n+"$)|(?:^"+i+"$)"),a=new RegExp("^"+n+"$"),s=new RegExp("^"+i+"$"),f=function(b){return b&&b.exact?o:new RegExp("(?:"+e(b)+n+e(b)+")|(?:"+e(b)+i+e(b)+")","g")};f.v4=function(h){return h&&h.exact?a:new RegExp(""+e(h)+n+e(h),"g")},f.v6=function(h){return h&&h.exact?s:new RegExp(""+e(h)+i+e(h),"g")};var u="(?:(?:[a-z]+:)?//)",l="(?:\\S+(?::\\S*)?@)?",g=f.v4().source,d=f.v6().source,x="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",k="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",m="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",v="(?::\\d{2,5})?",c='(?:[/?#][^\\s"]*)?',M="(?:"+u+"|www\\.)"+l+"(?:localhost|"+g+"|"+d+"|"+x+k+m+")"+v+c;return fe=new RegExp("(?:^"+M+"$)","i"),fe},Oe={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},X={integer:function(e){return X.number(e)&&parseInt(e,10)===e},float:function(e){return X.number(e)&&!X.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!X.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Oe.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(bn())},hex:function(e){return typeof e=="string"&&!!e.match(Oe.hex)}},yn=function(e,n,t,i,o){if(e.required&&n===void 0){Te(e,n,t,i,o);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;a.indexOf(s)>-1?X[s](n)||i.push(j(o.messages.types[s],e.fullField,e.type)):s&&typeof n!==e.type&&i.push(j(o.messages.types[s],e.fullField,e.type))},xn=function(e,n,t,i,o){var a=typeof e.len=="number",s=typeof e.min=="number",f=typeof e.max=="number",u=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,l=n,g=null,d=typeof n=="number",x=typeof n=="string",k=Array.isArray(n);if(d?g="number":x?g="string":k&&(g="array"),!g)return!1;k&&(l=n.length),x&&(l=n.replace(u,"_").length),a?l!==e.len&&i.push(j(o.messages[g].len,e.fullField,e.len)):s&&!f&&l<e.min?i.push(j(o.messages[g].min,e.fullField,e.min)):f&&!s&&l>e.max?i.push(j(o.messages[g].max,e.fullField,e.max)):s&&f&&(l<e.min||l>e.max)&&i.push(j(o.messages[g].range,e.fullField,e.min,e.max))},J="enum",wn=function(e,n,t,i,o){e[J]=Array.isArray(e[J])?e[J]:[],e[J].indexOf(n)===-1&&i.push(j(o.messages[J],e.fullField,e[J].join(", ")))},kn=function(e,n,t,i,o){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(n)||i.push(j(o.messages.pattern.mismatch,e.fullField,n,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(n)||i.push(j(o.messages.pattern.mismatch,e.fullField,n,e.pattern))}}},p={required:Te,whitespace:vn,type:yn,range:xn,enum:wn,pattern:kn},qn=function(e,n,t,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(n,"string")&&!e.required)return t();p.required(e,n,i,a,o,"string"),S(n,"string")||(p.type(e,n,i,a,o),p.range(e,n,i,a,o),p.pattern(e,n,i,a,o),e.whitespace===!0&&p.whitespace(e,n,i,a,o))}t(a)},Fn=function(e,n,t,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(n)&&!e.required)return t();p.required(e,n,i,a,o),n!==void 0&&p.type(e,n,i,a,o)}t(a)},Rn=function(e,n,t,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(n===""&&(n=void 0),S(n)&&!e.required)return t();p.required(e,n,i,a,o),n!==void 0&&(p.type(e,n,i,a,o),p.range(e,n,i,a,o))}t(a)},Sn=function(e,n,t,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(n)&&!e.required)return t();p.required(e,n,i,a,o),n!==void 0&&p.type(e,n,i,a,o)}t(a)},Pn=function(e,n,t,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(n)&&!e.required)return t();p.required(e,n,i,a,o),S(n)||p.type(e,n,i,a,o)}t(a)},On=function(e,n,t,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(n)&&!e.required)return t();p.required(e,n,i,a,o),n!==void 0&&(p.type(e,n,i,a,o),p.range(e,n,i,a,o))}t(a)},_n=function(e,n,t,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(n)&&!e.required)return t();p.required(e,n,i,a,o),n!==void 0&&(p.type(e,n,i,a,o),p.range(e,n,i,a,o))}t(a)},An=function(e,n,t,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(n==null&&!e.required)return t();p.required(e,n,i,a,o,"array"),n!=null&&(p.type(e,n,i,a,o),p.range(e,n,i,a,o))}t(a)},En=function(e,n,t,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(n)&&!e.required)return t();p.required(e,n,i,a,o),n!==void 0&&p.type(e,n,i,a,o)}t(a)},$n="enum",jn=function(e,n,t,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(n)&&!e.required)return t();p.required(e,n,i,a,o),n!==void 0&&p[$n](e,n,i,a,o)}t(a)},Mn=function(e,n,t,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(n,"string")&&!e.required)return t();p.required(e,n,i,a,o),S(n,"string")||p.pattern(e,n,i,a,o)}t(a)},zn=function(e,n,t,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(n,"date")&&!e.required)return t();if(p.required(e,n,i,a,o),!S(n,"date")){var f;n instanceof Date?f=n:f=new Date(n),p.type(e,f,i,a,o),f&&p.range(e,f.getTime(),i,a,o)}}t(a)},Ln=function(e,n,t,i,o){var a=[],s=Array.isArray(n)?"array":typeof n;p.required(e,n,i,a,o,s),t(a)},me=function(e,n,t,i,o){var a=e.type,s=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(S(n,a)&&!e.required)return t();p.required(e,n,i,s,o,a),S(n,a)||p.type(e,n,i,s,o)}t(s)},Vn=function(e,n,t,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(n)&&!e.required)return t();p.required(e,n,i,a,o)}t(a)},ee={string:qn,method:Fn,number:Rn,boolean:Sn,regexp:Pn,integer:On,float:_n,array:An,object:En,enum:jn,pattern:Mn,date:zn,url:me,hex:me,email:me,required:Ln,any:Vn};function be(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var ye=be(),ie=function(){function r(n){this.rules=null,this._messages=ye,this.define(n)}var e=r.prototype;return e.define=function(t){var i=this;if(!t)throw new Error("Cannot configure a schema with no rules");if(typeof t!="object"||Array.isArray(t))throw new Error("Rules must be an object");this.rules={},Object.keys(t).forEach(function(o){var a=t[o];i.rules[o]=Array.isArray(a)?a:[a]})},e.messages=function(t){return t&&(this._messages=Pe(be(),t)),this._messages},e.validate=function(t,i,o){var a=this;i===void 0&&(i={}),o===void 0&&(o=function(){});var s=t,f=i,u=o;if(typeof f=="function"&&(u=f,f={}),!this.rules||Object.keys(this.rules).length===0)return u&&u(null,s),Promise.resolve(s);function l(m){var v=[],c={};function M(b){if(Array.isArray(b)){var P;v=(P=v).concat.apply(P,b)}else v.push(b)}for(var h=0;h<m.length;h++)M(m[h]);v.length?(c=ve(v),u(v,c)):u(null,s)}if(f.messages){var g=this.messages();g===ye&&(g=be()),Pe(g,f.messages),f.messages=g}else f.messages=this.messages();var d={},x=f.keys||Object.keys(this.rules);x.forEach(function(m){var v=a.rules[m],c=s[m];v.forEach(function(M){var h=M;typeof h.transform=="function"&&(s===t&&(s=B({},s)),c=s[m]=h.transform(c)),typeof h=="function"?h={validator:h}:h=B({},h),h.validator=a.getValidationMethod(h),h.validator&&(h.field=m,h.fullField=h.fullField||m,h.type=a.getType(h),d[m]=d[m]||[],d[m].push({rule:h,value:c,source:s,field:m}))})});var k={};return gn(d,f,function(m,v){var c=m.rule,M=(c.type==="object"||c.type==="array")&&(typeof c.fields=="object"||typeof c.defaultField=="object");M=M&&(c.required||!c.required&&m.value),c.field=m.field;function h(q,I){return B({},I,{fullField:c.fullField+"."+q,fullFields:c.fullFields?[].concat(c.fullFields,[q]):[q]})}function b(q){q===void 0&&(q=[]);var I=Array.isArray(q)?q:[q];!f.suppressWarning&&I.length&&r.warning("async-validator:",I),I.length&&c.message!==void 0&&(I=[].concat(c.message));var $=I.map(Se(c,s));if(f.first&&$.length)return k[c.field]=1,v($);if(!M)v($);else{if(c.required&&!m.value)return c.message!==void 0?$=[].concat(c.message).map(Se(c,s)):f.error&&($=[f.error(c,j(f.messages.required,c.field))]),v($);var C={};c.defaultField&&Object.keys(m.value).map(function(R){C[R]=c.defaultField}),C=B({},C,m.rule.fields);var T={};Object.keys(C).forEach(function(R){var y=C[R],O=Array.isArray(y)?y:[y];T[R]=O.map(h.bind(null,R))});var w=new r(T);w.messages(f.messages),m.rule.options&&(m.rule.options.messages=f.messages,m.rule.options.error=f.error),w.validate(m.value,m.rule.options||f,function(R){var y=[];$&&$.length&&y.push.apply(y,$),R&&R.length&&y.push.apply(y,R),v(y.length?y:null)})}}var P;if(c.asyncValidator)P=c.asyncValidator(c,m.value,b,m.source,f);else if(c.validator){try{P=c.validator(c,m.value,b,m.source,f)}catch(q){console.error==null||console.error(q),f.suppressValidatorError||setTimeout(function(){throw q},0),b(q.message)}P===!0?b():P===!1?b(typeof c.message=="function"?c.message(c.fullField||c.field):c.message||(c.fullField||c.field)+" fails"):P instanceof Array?b(P):P instanceof Error&&b(P.message)}P&&P.then&&P.then(function(){return b()},function(q){return b(q)})},function(m){l(m)},s)},e.getType=function(t){if(t.type===void 0&&t.pattern instanceof RegExp&&(t.type="pattern"),typeof t.validator!="function"&&t.type&&!ee.hasOwnProperty(t.type))throw new Error(j("Unknown rule type %s",t.type));return t.type||"string"},e.getValidationMethod=function(t){if(typeof t.validator=="function")return t.validator;var i=Object.keys(t),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?ee.required:ee[this.getType(t)]||void 0},r}();ie.register=function(e,n){if(typeof n!="function")throw new Error("Cannot register a validator by type, validator is not a function");ee[e]=n};ie.warning=dn;ie.messages=ye;ie.validators=ee;function In(r){const e=te(re,null);return{mergedSize:_(()=>r.size!==void 0?r.size:(e==null?void 0:e.props.size)!==void 0?e.props.size:"medium")}}function Tn(r){const e=te(re,null),n=_(()=>{if(t.value==="top")return;const{labelWidth:d}=r;if(d!==void 0&&d!=="auto")return ce(d);if(d==="auto"||(e==null?void 0:e.props.labelWidth)==="auto"){const x=e==null?void 0:e.maxChildLabelWidthRef.value;return x!==void 0?ce(x):void 0}if((e==null?void 0:e.props.labelWidth)!==void 0)return ce(e.props.labelWidth)}),t=_(()=>{const{labelPlacement:d}=r;return d!==void 0?d:e!=null&&e.props.labelPlacement?e.props.labelPlacement:"top"}),i=_(()=>{const{labelAlign:d}=r;if(d)return d;if(e!=null&&e.props.labelAlign)return e.props.labelAlign}),o=_(()=>{var d;return[(d=r.labelProps)===null||d===void 0?void 0:d.style,r.labelStyle,{width:n.value}]}),a=_(()=>{const{showRequireMark:d}=r;return d!==void 0?d:e==null?void 0:e.props.showRequireMark}),s=_(()=>{const{requireMarkPlacement:d}=r;return d!==void 0?d:(e==null?void 0:e.props.requireMarkPlacement)||"right"}),f=Q(!1),u=_(()=>{const{validationStatus:d}=r;if(d!==void 0)return d;if(f.value)return"error"}),l=_(()=>{const{showFeedback:d}=r;return d!==void 0?d:(e==null?void 0:e.props.showFeedback)!==void 0?e.props.showFeedback:!0}),g=_(()=>{const{showLabel:d}=r;return d!==void 0?d:(e==null?void 0:e.props.showLabel)!==void 0?e.props.showLabel:!0});return{validationErrored:f,mergedLabelStyle:o,mergedLabelPlacement:t,mergedLabelAlign:i,mergedShowRequireMark:a,mergedRequireMarkPlacement:s,mergedValidationStatus:u,mergedShowFeedback:l,mergedShowLabel:g}}function Cn(r){const e=te(re,null),n=_(()=>{const{rulePath:a}=r;if(a!==void 0)return a;const{path:s}=r;if(s!==void 0)return s}),t=_(()=>{const a=[],{rule:s}=r;if(s!==void 0&&(Array.isArray(s)?a.push(...s):a.push(s)),e){const{rules:f}=e.props,{value:u}=n;if(f!==void 0&&u!==void 0){const l=Le(f,u);l!==void 0&&(Array.isArray(l)?a.push(...l):a.push(l))}}return a}),i=_(()=>t.value.some(a=>a.required)),o=_(()=>i.value||r.required);return{mergedRules:t,mergedRequired:o}}const{cubicBezierEaseInOut:_e}=Ye;function Nn({name:r="fade-down",fromOffset:e="-4px",enterDuration:n=".3s",leaveDuration:t=".3s",enterCubicBezier:i=_e,leaveCubicBezier:o=_e}={}){return[G(`&.${r}-transition-enter-from, &.${r}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),G(`&.${r}-transition-enter-to, &.${r}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),G(`&.${r}-transition-leave-active`,{transition:`opacity ${t} ${o}, transform ${t} ${o}`}),G(`&.${r}-transition-enter-active`,{transition:`opacity ${n} ${i}, transform ${n} ${i}`})]}const Hn=V("form-item",{display:"grid",lineHeight:"var(--n-line-height)"},[V("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 `,[we("asterisk",`
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),we("asterisk-placeholder",`
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]),V("form-item-blank",{gridArea:"blank",minHeight:"var(--n-blank-height)"}),Z("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 `,[V("form-item-label",`
 height: var(--n-blank-height);
 line-height: var(--n-blank-height);
 box-sizing: border-box;
 white-space: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `)]),Z("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: var(--n-label-height) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[Z("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),V("form-item-label",{display:"flex",alignItems:"flex-end",justifyContent:"var(--n-label-text-align)"})]),V("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),V("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[G("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),V("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[Z("warning",{color:"var(--n-feedback-text-color-warning)"}),Z("error",{color:"var(--n-feedback-text-color-error)"}),Nn({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);var Ae=globalThis&&globalThis.__awaiter||function(r,e,n,t){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function s(l){try{u(t.next(l))}catch(g){a(g)}}function f(l){try{u(t.throw(l))}catch(g){a(g)}}function u(l){l.done?o(l.value):i(l.value).then(s,f)}u((t=t.apply(r,e||[])).next())})};const Wn=Object.assign(Object.assign({},de.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,showLabel:{type:Boolean,default:void 0},labelProps:Object});function Ee(r,e){return(...n)=>{try{const t=r(...n);return!e&&(typeof t=="boolean"||t instanceof Error||Array.isArray(t))||(t==null?void 0:t.then)?t:(t===void 0||qe("form-item/validate",`You return a ${typeof t} typed value in the validator method, which is not recommended. Please use `+(e?"`Promise`":"`boolean`, `Error` or `Promise`")+" typed value instead."),!0)}catch(t){qe("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(t);return}}}const Kn=Me({name:"FormItem",props:Wn,setup(r){Qe(Ie,"formItems",se(r,"path"));const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=ze(r),t=te(re,null),i=In(r),o=Tn(r),{validationErrored:a}=o,{mergedRequired:s,mergedRules:f}=Cn(r),{mergedSize:u}=i,{mergedLabelPlacement:l,mergedLabelAlign:g}=o,d=Q([]),x=Q(ke()),k=t?se(t.props,"disabled"):Q(!1),m=de("Form","-form-item",Hn,Ve,r,e);$e(se(r,"path"),()=>{r.ignorePathChange||v()});function v(){d.value=[],a.value=!1,r.feedback&&(x.value=ke())}function c(){q("blur")}function M(){q("change")}function h(){q("focus")}function b(){q("input")}function P(w,R){return Ae(this,void 0,void 0,function*(){let y,O,H,D;return typeof w=="string"?(y=w,O=R):w!==null&&typeof w=="object"&&(y=w.trigger,O=w.callback,H=w.shouldRuleBeApplied,D=w.options),yield new Promise((Y,U)=>{q(y,H,D).then(({valid:K,errors:W})=>{K?(O&&O(),Y()):(O&&O(W),U(W))})})})}const q=(w=null,R=()=>!0,y={suppressWarning:!0})=>Ae(this,void 0,void 0,function*(){const{path:O}=r;y?y.first||(y.first=r.first):y={};const{value:H}=f,D=t?Le(t.props.model,O||""):void 0,Y={},U={},K=(w?H.filter(z=>Array.isArray(z.trigger)?z.trigger.includes(w):z.trigger===w):H).filter(R).map((z,L)=>{const F=Object.assign({},z);if(F.validator&&(F.validator=Ee(F.validator,!1)),F.asyncValidator&&(F.asyncValidator=Ee(F.asyncValidator,!0)),F.renderMessage){const A=`__renderMessage__${L}`;U[A]=F.message,F.message=A,Y[A]=F.renderMessage}return F});if(!K.length)return{valid:!0};const W=O!=null?O:"__n_no_path__",ae=new ie({[W]:K}),{validateMessages:oe}=(t==null?void 0:t.props)||{};return oe&&ae.messages(oe),yield new Promise(z=>{ae.validate({[W]:D},y,L=>{L!=null&&L.length?(d.value=L.map(F=>{const A=(F==null?void 0:F.message)||"";return{key:A,render:()=>A.startsWith("__renderMessage__")?Y[A]():A}}),L.forEach(F=>{var A;!((A=F.message)===null||A===void 0)&&A.startsWith("__renderMessage__")&&(F.message=U[F.message])}),a.value=!0,z({valid:!1,errors:L})):(v(),z({valid:!0}))})})});ge(Ue,{path:se(r,"path"),disabled:k,mergedSize:i.mergedSize,mergedValidationStatus:o.mergedValidationStatus,restoreValidation:v,handleContentBlur:c,handleContentChange:M,handleContentFocus:h,handleContentInput:b});const I={validate:P,restoreValidation:v,internalValidate:q},$=Q(null);Ke(()=>{$.value!==null&&(t==null||t.deriveMaxChildLabelWidth(Number(getComputedStyle($.value).width.slice(0,-2))))});const C=_(()=>{var w;const{value:R}=u,{value:y}=l,O=y==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:H},self:{labelTextColor:D,asteriskColor:Y,lineHeight:U,feedbackTextColor:K,feedbackTextColorWarning:W,feedbackTextColorError:ae,feedbackPadding:oe,[N("labelHeight",R)]:z,[N("blankHeight",R)]:L,[N("feedbackFontSize",R)]:F,[N("feedbackHeight",R)]:A,[N("labelPadding",O)]:Ce,[N("labelTextAlign",O)]:Ne,[N(N("labelFontSize",y),R)]:He}}=m.value;let ue=(w=g.value)!==null&&w!==void 0?w:Ne;return y==="top"&&(ue=ue==="right"?"flex-end":"flex-start"),{"--n-bezier":H,"--n-line-height":U,"--n-blank-height":L,"--n-label-font-size":He,"--n-label-text-align":ue,"--n-label-height":z,"--n-label-padding":Ce,"--n-asterisk-color":Y,"--n-label-text-color":D,"--n-feedback-padding":oe,"--n-feedback-font-size":F,"--n-feedback-height":A,"--n-feedback-text-color":K,"--n-feedback-text-color-warning":W,"--n-feedback-text-color-error":ae}}),T=Je("form-item",_(()=>{var w;return`${u.value[0]}${l.value[0]}${((w=g.value)===null||w===void 0?void 0:w[0])||""}`}),C,r);return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:$,mergedClsPrefix:e,mergedRequired:s,feedbackId:x,renderExplains:d},o),i),I),{cssVars:n?void 0:C,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){var r;const{$slots:e,mergedClsPrefix:n,mergedShowLabel:t,mergedShowRequireMark:i,mergedRequireMarkPlacement:o,onRender:a}=this,s=i!==void 0?i:this.mergedRequired;return a==null||a(),E("div",{class:[`${n}-form-item`,this.themeClass,`${n}-form-item--${this.mergedSize}-size`,`${n}-form-item--${this.mergedLabelPlacement}-labelled`,!t&&`${n}-form-item--no-label`],style:this.cssVars},t&&(this.label||e.label)?E("label",Object.assign({},this.labelProps,{class:[(r=this.labelProps)===null||r===void 0?void 0:r.class,`${n}-form-item-label`],style:this.mergedLabelStyle,ref:"labelElementRef"}),o!=="left"?e.label?e.label():this.label:null,s?E("span",{class:`${n}-form-item-label__asterisk`},o!=="left"?"\xA0*":"*\xA0"):o==="right-hanging"&&E("span",{class:`${n}-form-item-label__asterisk-placeholder`},"\xA0*"),o==="left"?e.label?e.label():this.label:null):null,E("div",{class:[`${n}-form-item-blank`,this.mergedValidationStatus&&`${n}-form-item-blank--${this.mergedValidationStatus}`]},e),this.mergedShowFeedback?E("div",{key:this.feedbackId,class:`${n}-form-item-feedback-wrapper`},E(Ze,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:f}=this;return Ge(e.feedback,u=>{var l;const{feedback:g}=this,d=u||g?E("div",{key:"__feedback__",class:`${n}-form-item-feedback__line`},u||g):this.renderExplains.length?(l=this.renderExplains)===null||l===void 0?void 0:l.map(({key:x,render:k})=>E("div",{key:x,class:`${n}-form-item-feedback__line`},k())):null;return d?f==="warning"?E("div",{key:"controlled-warning",class:`${n}-form-item-feedback ${n}-form-item-feedback--warning`},d):f==="error"?E("div",{key:"controlled-error",class:`${n}-form-item-feedback ${n}-form-item-feedback--error`},d):f==="success"?E("div",{key:"controlled-success",class:`${n}-form-item-feedback ${n}-form-item-feedback--success`},d):E("div",{key:"controlled-default",class:`${n}-form-item-feedback`},d):null})}})):null)}});export{Un as _,Kn as a};
