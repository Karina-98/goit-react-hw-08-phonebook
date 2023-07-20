"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[876],{6876:function(n,e,t){t.r(e),t.d(e,{default:function(){return mn}});var r,i,a,o,s,l,d,c=t(168),u=t(6487),p=u.ZP.div(r||(r=(0,c.Z)(["\nwidth: 400px;\npadding: 10px;\nmargin: 0 auto;\n"]))),m=t(9434),f=t(2791),x=function(n){return n.contacts.contacts.items},h=function(n){return n.filter.filter},v=u.ZP.h1(i||(i=(0,c.Z)(["\nfont-size: 1.5em;\ntext-align: center;\nmargin-top: 70px;\n\n"]))),g=t(184),Z=function(n){var e=n.children;return(0,g.jsx)(v,{children:e})},y=u.ZP.div(a||(a=(0,c.Z)(["\nwidth: 400px;\npadding: 10px;\nmargin: 0 auto;\n"]))),j=(u.ZP.form(o||(o=(0,c.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nwidth: 300px;\npadding: 20px 30px;\npadding-bottom: 25px;\nborder-radius: 5px;\nmargin-bottom: 35px;\nbox-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);\nborder-radius: 10px;\nbackground-color: white;\n\n"]))),u.ZP.input(s||(s=(0,c.Z)(["\nbox-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\nborder: 1px solid #ccc;\npadding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  margin-bottom:15px;\n  margin-left:10px;\n  color: #333;\n  &:focus {\n    border-bottom: 2px solid #4CAF50;}\n"]))),u.ZP.button(l||(l=(0,c.Z)(["\npadding: 10px 20px;\n  background-color: #4CAF50;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n\n&:hover {\n  background-color: #45a049;}"]))),u.ZP.label(d||(d=(0,c.Z)(["\nmargin-bottom: 30px;\n"])))),b=t(1686),C=t.n(b),I=t(3634),_=t(7562),N=t(7943),z=t(8997),S=t(9055),w=t(4134),L=(0,w.I)({d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"}),k=(0,w.I)({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"}),E=(0,w.I)({d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",displayName:"ArrowForwardIcon"}),P=function(){var n=(0,m.I0)(),e=(0,m.v9)(x);return(0,g.jsx)(y,{children:(0,g.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.target,i=r.name.value,a=r.number.value,o={name:i,number:a};null!==e&&void 0!==e&&e.find((function(n){return n.name===i}))?C().Notify.failure("".concat(i," is already in your contacts")):(n((0,I._5)(o)),t.target.reset())},children:[(0,g.jsxs)(j,{children:["Name",(0,g.jsxs)(_.B,{children:[(0,g.jsx)(N.Z,{pointerEvents:"none",children:(0,g.jsx)(L,{color:"gray.300"})}),(0,g.jsx)(z.I,{mb:30,size:"lg",variant:"filled",placeholder:"Please enter name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})]}),(0,g.jsxs)(j,{children:["Number",(0,g.jsxs)(_.B,{children:[(0,g.jsx)(N.Z,{pointerEvents:"none",children:(0,g.jsx)(k,{color:"gray.300"})}),(0,g.jsx)(z.I,{mb:30,size:"lg",variant:"filled",placeholder:"Please enter number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,g.jsx)(S.z,{colorScheme:"green",rightIcon:(0,g.jsx)(E,{}),type:"submit",children:"Add Contact"})]})})},G=t(1413),A=t(4925),F=t(5812),M=t(5597),R=["size","centerContent"],B=["size"],T=(0,F.m)("div");T.displayName="Box";var q=(0,M.G)((function(n,e){var t=n.size,r=n.centerContent,i=void 0===r||r,a=(0,A.Z)(n,R),o=i?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,g.jsx)(T,(0,G.Z)({ref:e,boxSize:t,__css:(0,G.Z)((0,G.Z)({},o),{},{flexShrink:0,flexGrow:0})},a))}));q.displayName="Square",(0,M.G)((function(n,e){var t=n.size,r=(0,A.Z)(n,B);return(0,g.jsx)(q,(0,G.Z)({size:t,ref:e,borderRadius:"9999px"},r))})).displayName="Circle";var J,O,W,D=t(4808),H=function(){var n=(0,m.I0)(),e=(0,m.v9)(x);return(0,g.jsx)(g.Fragment,{children:e.length>0?(0,g.jsxs)(T,{mb:30,mt:30,children:[(0,g.jsx)("p",{children:"Find contacts by name"}),(0,g.jsx)(z.I,{type:"text",name:"filter",placeholder:"Enter name",onChange:function(e){n((0,D.T)(e.target.value))}})]}):(0,g.jsx)("p",{children:"Please add your first contact"})})},U=(u.ZP.ul(J||(J=(0,c.Z)(["\npadding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n"]))),u.ZP.li(O||(O=(0,c.Z)(["\nmargin-top:20px;\npadding-left:20px;\n\n"]))),u.ZP.span(W||(W=(0,c.Z)(["\nmargin-left: 20px;\nmargin-right: 20px;\n"])))),V=t(2536),$=t(4942),K=t(9439),Q=t(9640),X=t(9886),Y=t(7200),nn=t(6232),en=t(2996),tn=["children","styleType","stylePosition","spacing"],rn=["as"],an=["as"],on=(0,X.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),sn=(0,K.Z)(on,2),ln=sn[0],dn=sn[1],cn=(0,M.G)((function(n,e){var t=(0,nn.jC)("List",n),r=(0,en.Lr)(n),i=r.children,a=r.styleType,o=void 0===a?"none":a,s=r.stylePosition,l=r.spacing,d=(0,A.Z)(r,tn),c=(0,Y.W)(i),u=l?(0,$.Z)({},"& > *:not(style) ~ *:not(style)",{mt:l}):{};return(0,g.jsx)(ln,{value:t,children:(0,g.jsx)(F.m.ul,(0,G.Z)((0,G.Z)({ref:e,listStyleType:o,listStylePosition:s,role:"list",__css:(0,G.Z)((0,G.Z)({},t.container),u)},d),{},{children:c}))})}));cn.displayName="List",(0,M.G)((function(n,e){n.as;var t=(0,A.Z)(n,rn);return(0,g.jsx)(cn,(0,G.Z)({ref:e,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList",(0,M.G)((function(n,e){n.as;var t=(0,A.Z)(n,an);return(0,g.jsx)(cn,(0,G.Z)({ref:e,as:"ul",styleType:"initial",marginStart:"1em"},t))})).displayName="UnorderedList";var un=(0,M.G)((function(n,e){var t=dn();return(0,g.jsx)(F.m.li,(0,G.Z)((0,G.Z)({ref:e},n),{},{__css:t.item}))}));un.displayName="ListItem",(0,M.G)((function(n,e){var t=dn();return(0,g.jsx)(Q.J,(0,G.Z)((0,G.Z)({ref:e,role:"presentation"},n),{},{__css:t.icon}))})).displayName="ListIcon";var pn=function(){var n=(0,m.v9)((function(n){return n.contacts.contacts})),e=n.error,t=n.isLoading,r=(0,m.v9)(x),i=(0,m.v9)(h),a=(0,m.I0)(),o=null===r||void 0===r?void 0:r.filter((function(n){return n.name.toLowerCase().includes(i.toLowerCase())}));return(0,g.jsxs)(g.Fragment,{children:[t&&(0,g.jsx)(V.a,{}),(0,g.jsx)(cn,{spacing:3,children:o.map((function(n){var e=n.id,t=n.name,r=n.phone;return(0,g.jsxs)(un,{children:[(0,g.jsx)(Q.J,{as:k,boxSize:4}),(0,g.jsxs)(U,{children:[t,": ",r]}),(0,g.jsx)(S.z,{colorScheme:"red",type:"button",onClick:function(){a((0,I._f)(e))},children:"Delete"})]},e)}))}),e&&(0,g.jsx)("p",{children:e})]})};function mn(){var n=(0,m.I0)(),e=(0,m.v9)(x);return console.log(e),(0,f.useEffect)((function(){n((0,I.mk)())}),[n]),(0,g.jsxs)(p,{children:[(0,g.jsx)(Z,{children:"Phonebook"}),(0,g.jsx)(P,{}),(0,g.jsx)(Z,{children:"Contacts"}),(0,g.jsx)(H,{}),(0,g.jsx)(pn,{})]})}},7943:function(n,e,t){t.d(e,{Z:function(){return h},x:function(){return v}});var r=t(4942),i=t(1413),a=t(4925),o=t(7562),s=t(5812),l=t(5597),d=t(6992),c=t(184),u=["placement"],p=["className"],m=["className"],f=(0,s.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),x=(0,l.G)((function(n,e){var t,s,l,d=n.placement,p=void 0===d?"left":d,m=(0,a.Z)(n,u),x=(0,o.m)(),h=x.field,v="left"===p?"insetStart":"insetEnd",g=(0,i.Z)((t={},(0,r.Z)(t,v,"0"),(0,r.Z)(t,"width",null!=(s=null==h?void 0:h.height)?s:null==h?void 0:h.h),(0,r.Z)(t,"height",null!=(l=null==h?void 0:h.height)?l:null==h?void 0:h.h),(0,r.Z)(t,"fontSize",null==h?void 0:h.fontSize),t),x.element);return(0,c.jsx)(f,(0,i.Z)({ref:e,__css:g},m))}));x.id="InputElement",x.displayName="InputElement";var h=(0,l.G)((function(n,e){var t=n.className,r=(0,a.Z)(n,p),o=(0,d.cx)("chakra-input__left-element",t);return(0,c.jsx)(x,(0,i.Z)({ref:e,placement:"left",className:o},r))}));h.id="InputLeftElement",h.displayName="InputLeftElement";var v=(0,l.G)((function(n,e){var t=n.className,r=(0,a.Z)(n,m),o=(0,d.cx)("chakra-input__right-element",t);return(0,c.jsx)(x,(0,i.Z)({ref:e,placement:"right",className:o},r))}));v.id="InputRightElement",v.displayName="InputRightElement"},7562:function(n,e,t){t.d(e,{B:function(){return y},m:function(){return Z}});var r=t(1413),i=t(4925),a=t(9439),o=t(9886),s=t(7200),l=t(5597),d=t(6232),c=t(2996),u=t(5812),p=t(6992);var m=t(2791),f=t(184),x=["children","className"],h=(0,o.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),v=(0,a.Z)(h,2),g=v[0],Z=v[1],y=(0,l.G)((function(n,e){var t=(0,d.jC)("Input",n),a=(0,c.Lr)(n),o=a.children,l=a.className,h=(0,i.Z)(a,x),v=(0,p.cx)("chakra-input__group",l),Z={},y=(0,s.W)(o),j=t.field;y.forEach((function(n){var e,r;t&&(j&&"InputLeftElement"===n.type.id&&(Z.paddingStart=null!=(e=j.height)?e:j.h),j&&"InputRightElement"===n.type.id&&(Z.paddingEnd=null!=(r=j.height)?r:j.h),"InputRightAddon"===n.type.id&&(Z.borderEndRadius=0),"InputLeftAddon"===n.type.id&&(Z.borderStartRadius=0))}));var b=y.map((function(e){var t,r,i=function(n){var e=Object.assign({},n);for(var t in e)void 0===e[t]&&delete e[t];return e}({size:(null==(t=e.props)?void 0:t.size)||n.size,variant:(null==(r=e.props)?void 0:r.variant)||n.variant});return"Input"!==e.type.id?(0,m.cloneElement)(e,i):(0,m.cloneElement)(e,Object.assign(i,Z,e.props))}));return(0,f.jsx)(u.m.div,(0,r.Z)((0,r.Z)({className:v,ref:e,__css:(0,r.Z)({width:"100%",display:"flex",position:"relative",isolation:"isolate"},t.group),"data-group":!0},h),{},{children:(0,f.jsx)(g,{value:t,children:b})}))}));y.displayName="InputGroup"},7200:function(n,e,t){t.d(e,{W:function(){return i}});var r=t(2791);function i(n){return r.Children.toArray(n).filter((function(n){return(0,r.isValidElement)(n)}))}}}]);
//# sourceMappingURL=876.d1300d97.chunk.js.map