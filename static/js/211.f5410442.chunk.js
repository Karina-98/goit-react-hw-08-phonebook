"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[211],{6211:function(e,n,i){i.r(n),i.d(n,{default:function(){return ne}});var a=i(4270),r=i(9434),l=i(9273),t=i(1413),s=i(4925),o=i(9439),d=i(9886),c=i(2791);function u(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(i){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function p(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(e){n.forEach((function(n){u(n,e)}))}}function m(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return(0,c.useMemo)((function(){return p.apply(void 0,n)}),n)}var v=i(5597),h=i(6232),f=i(2996),g=i(5812),x=i(6992),b=i(184),Z=["id","isRequired","isInvalid","isDisabled","isReadOnly"],y=["getRootProps","htmlProps"],I=(0,d.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),_=(0,o.Z)(I,2),j=_[0],k=_[1],N=(0,d.k)({strict:!1,name:"FormControlContext"}),C=(0,o.Z)(N,2),R=C[0],S=C[1];var F=(0,v.G)((function(e,n){var i=(0,h.jC)("Form",e),a=function(e){var n=e.id,i=e.isRequired,a=e.isInvalid,r=e.isDisabled,l=e.isReadOnly,d=(0,s.Z)(e,Z),u=(0,c.useId)(),m=n||"field-".concat(u),v="".concat(m,"-label"),h="".concat(m,"-feedback"),f="".concat(m,"-helptext"),g=(0,c.useState)(!1),b=(0,o.Z)(g,2),y=b[0],I=b[1],_=(0,c.useState)(!1),j=(0,o.Z)(_,2),k=j[0],N=j[1],C=(0,c.useState)(!1),R=(0,o.Z)(C,2),S=R[0],F=R[1],P=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:f},e),{},{ref:p(n,(function(e){e&&N(!0)}))})}),[f]),w=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,"data-focus":(0,x.PB)(S),"data-disabled":(0,x.PB)(r),"data-invalid":(0,x.PB)(a),"data-readonly":(0,x.PB)(l),id:void 0!==e.id?e.id:v,htmlFor:void 0!==e.htmlFor?e.htmlFor:m})}),[m,r,S,a,l,v]),B=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:h},e),{},{ref:p(n,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[h]),T=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)((0,t.Z)({},e),d),{},{ref:n,role:"group"})}),[d]),q=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!a,isReadOnly:!!l,isDisabled:!!r,isFocused:!!S,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:y,setHasFeedbackText:I,hasHelpText:k,setHasHelpText:N,id:m,labelId:v,feedbackId:h,helpTextId:f,htmlProps:d,getHelpTextProps:P,getErrorMessageProps:B,getRootProps:T,getLabelProps:w,getRequiredIndicatorProps:q}}((0,f.Lr)(e)),r=a.getRootProps,l=(a.htmlProps,(0,s.Z)(a,y)),d=(0,x.cx)("chakra-form-control",e.className);return(0,b.jsx)(R,{value:l,children:(0,b.jsx)(j,{value:i,children:(0,b.jsx)(g.m.div,(0,t.Z)((0,t.Z)({},r({},n)),{},{className:d,__css:i.container}))})})}));F.displayName="FormControl",(0,v.G)((function(e,n){var i=S(),a=k(),r=(0,x.cx)("chakra-form__helper-text",e.className);return(0,b.jsx)(g.m.div,(0,t.Z)((0,t.Z)({},null==i?void 0:i.getHelpTextProps(e,n)),{},{__css:a.helperText,className:r}))})).displayName="FormHelperText";var P=["isDisabled","isInvalid","isReadOnly","isRequired"],w=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function B(e){var n=function(e){var n,i,a,r=S(),l=e.id,o=e.disabled,d=e.readOnly,c=e.required,u=e.isRequired,p=e.isInvalid,m=e.isReadOnly,v=e.isDisabled,h=e.onFocus,f=e.onBlur,g=(0,s.Z)(e,w),b=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==r?void 0:r.hasFeedbackText)&&(null==r?void 0:r.isInvalid)&&b.push(r.feedbackId);(null==r?void 0:r.hasHelpText)&&b.push(r.helpTextId);return(0,t.Z)((0,t.Z)({},g),{},{"aria-describedby":b.join(" ")||void 0,id:null!=l?l:null==r?void 0:r.id,isDisabled:null!=(n=null!=o?o:v)?n:null==r?void 0:r.isDisabled,isReadOnly:null!=(i=null!=d?d:m)?i:null==r?void 0:r.isReadOnly,isRequired:null!=(a=null!=c?c:u)?a:null==r?void 0:r.isRequired,isInvalid:null!=p?p:null==r?void 0:r.isInvalid,onFocus:(0,x.v0)(null==r?void 0:r.onFocus,h),onBlur:(0,x.v0)(null==r?void 0:r.onBlur,f)})}(e),i=n.isDisabled,a=n.isInvalid,r=n.isReadOnly,l=n.isRequired,o=(0,s.Z)(n,P);return(0,t.Z)((0,t.Z)({},o),{},{disabled:i,readOnly:r,required:l,"aria-invalid":(0,x.Qm)(a),"aria-required":(0,x.Qm)(l),"aria-readonly":(0,x.Qm)(r)})}var T=["htmlSize"],q=(0,v.G)((function(e,n){var i=e.htmlSize,a=(0,s.Z)(e,T),r=(0,h.jC)("Input",a),l=B((0,f.Lr)(a)),o=(0,x.cx)("chakra-input",e.className);return(0,b.jsx)(g.m.input,(0,t.Z)((0,t.Z)({size:i},l),{},{__css:r.field,ref:n,className:o}))}));q.displayName="Input",q.id="Input";var D=(0,d.k)({strict:!1,name:"ButtonGroupContext"}),O=(0,o.Z)(D,2),H=(O[0],O[1]),E=["children","className"];function L(e){var n=e.children,i=e.className,a=(0,s.Z)(e,E),r=(0,c.isValidElement)(n)?(0,c.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,l=(0,x.cx)("chakra-button__icon",i);return(0,b.jsx)(g.m.span,(0,t.Z)((0,t.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},a),{},{className:l,children:r}))}L.displayName="ButtonIcon";var z=i(4942),A=i(2577),G=["label","placement","spacing","children","className","__css"];function M(e){var n=e.label,i=e.placement,a=e.spacing,r=void 0===a?"0.5rem":a,l=e.children,o=void 0===l?(0,b.jsx)(A.$,{color:"currentColor",width:"1em",height:"1em"}):l,d=e.className,u=e.__css,p=(0,s.Z)(e,G),m=(0,x.cx)("chakra-button__spinner",d),v="start"===i?"marginEnd":"marginStart",h=(0,c.useMemo)((function(){var e;return(0,t.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,z.Z)(e,v,n?r:0),(0,z.Z)(e,"fontSize","1em"),(0,z.Z)(e,"lineHeight","normal"),e),u)}),[u,n,v,r]);return(0,b.jsx)(g.m.div,(0,t.Z)((0,t.Z)({className:m},p),{},{__css:h,children:o}))}M.displayName="ButtonSpinner";var Q=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],U=(0,v.G)((function(e,n){var i=H(),a=(0,h.mq)("Button",(0,t.Z)((0,t.Z)({},i),e)),r=(0,f.Lr)(e),l=r.isDisabled,d=void 0===l?null==i?void 0:i.isDisabled:l,u=r.isLoading,p=r.isActive,v=r.children,Z=r.leftIcon,y=r.rightIcon,I=r.loadingText,_=r.iconSpacing,j=void 0===_?"0.5rem":_,k=r.type,N=r.spinner,C=r.spinnerPlacement,R=void 0===C?"start":C,S=r.className,F=r.as,P=(0,s.Z)(r,Q),w=(0,c.useMemo)((function(){var e=(0,t.Z)((0,t.Z)({},null==a?void 0:a._focus),{},{zIndex:1});return(0,t.Z)((0,t.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},a),!!i&&{_focus:e})}),[a,i]),B=function(e){var n=(0,c.useState)(!e),i=(0,o.Z)(n,2),a=i[0],r=i[1];return{ref:(0,c.useCallback)((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:a?"button":void 0}}(F),T=B.ref,q=B.type,D={rightIcon:y,leftIcon:Z,iconSpacing:j,children:v};return(0,b.jsxs)(g.m.button,(0,t.Z)((0,t.Z)({ref:m(n,T),as:F,type:null!=k?k:q,"data-active":(0,x.PB)(p),"data-loading":(0,x.PB)(u),__css:w,className:(0,x.cx)("chakra-button",S)},P),{},{disabled:d||u,children:[u&&"start"===R&&(0,b.jsx)(M,{className:"chakra-button__spinner--start",label:I,placement:"start",spacing:j,children:N}),u?I||(0,b.jsx)(g.m.span,{opacity:0,children:(0,b.jsx)(V,(0,t.Z)({},D))}):(0,b.jsx)(V,(0,t.Z)({},D)),u&&"end"===R&&(0,b.jsx)(M,{className:"chakra-button__spinner--end",label:I,placement:"end",spacing:j,children:N})]}))}));function V(e){var n=e.leftIcon,i=e.rightIcon,a=e.children,r=e.iconSpacing;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(L,{marginEnd:r,children:n}),a,i&&(0,b.jsx)(L,{marginStart:r,children:i})]})}U.displayName="Button";var $,J,K=i(168),W=i(6487),X=W.zo.form($||($=(0,K.Z)(["\n width: 320px;\n"]))),Y=W.zo.label(J||(J=(0,K.Z)(["\n display: flex;\n    flex-direction: column;\n    margin-bottom: 16px;\n"]))),ee=function(){var e=(0,r.I0)();return(0,b.jsxs)(X,{onSubmit:function(n){n.preventDefault();var i=n.currentTarget;e((0,l.Ib)({email:i.elements.email.value,password:i.elements.password.value})),i.reset()},autoComplete:"off",children:[(0,b.jsxs)(Y,{children:["Email",(0,b.jsx)(q,{spacing:3,type:"email",name:"email"})]}),(0,b.jsxs)(Y,{children:["Password",(0,b.jsx)(q,{type:"password",name:"password"})]}),(0,b.jsx)(U,{type:"submit",children:"Log In"})]})};function ne(){return(0,b.jsxs)("div",{children:[(0,b.jsx)(a.q,{children:(0,b.jsx)("title",{children:"Login"})}),(0,b.jsx)(ee,{})]})}}}]);
//# sourceMappingURL=211.f5410442.chunk.js.map