"use strict";(self.webpackChunkfull_stack_demo=self.webpackChunkfull_stack_demo||[]).push([[483],{483:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var a=s(791),o=s(689),n=s(87),r=s(294),l=s(289),d=s(882),i=s(184);const c=()=>{const[e,t]=(0,a.useState)(""),[s,c]=(0,a.useState)(""),[u,m]=(0,a.useState)(""),[h,x]=(0,a.useState)(!1),g=(0,o.s0)(),p=(0,a.useContext)(l.Z);return(0,i.jsxs)("div",{className:"max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md",children:[(0,i.jsx)("h2",{className:"text-2xl font-semibold text-gray-800 mb-8",children:"Login"}),u&&(0,i.jsx)("p",{className:"mb-4 text-red-600",children:u}),(0,i.jsxs)("form",{onSubmit:async a=>{a.preventDefault();if(!e.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))return void m("Please enter a valid email address.");if(!(s&&s.length>5))return m("Please enter a password which is at least 6 characters long."),void x(!1);const o={userEmail:e,userPassword:s};x(!0),m("");try{const e=await r.Z.post("http://localhost:5000/api/auth",o);console.log("Auth Page",e.data),200===e.status&&(x(!1),p.login(),localStorage.setItem("userId",e.data.userId),localStorage.setItem("token",e.data.token),g("/products"))}catch(u){m(u.response.data.error||"An error occurred during login. Please try again."),console.error(u)}t(""),c(""),x(!1)},children:[(0,i.jsx)(d.Z,{text:"Email",name:"email",type:"email",value:e,onChange:e=>{t(e.target.value),m("")}}),(0,i.jsx)(d.Z,{text:"Password",name:"password",type:"password",value:s,onChange:e=>{c(e.target.value),m("")}}),(0,i.jsx)("div",{className:"mb-4 font-semibold text-green-600 hover:underline",children:(0,i.jsx)(n.rU,{to:"/forgot-password",children:"Forgot Password?"})}),h&&(0,i.jsx)("div",{className:"my-2 font-semibold",children:"Loading..."}),(0,i.jsx)("button",{type:"submit",className:"bg-blue-500 font-semibold text-white w-full py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue",children:"Log In"})]}),(0,i.jsx)("div",{className:"mt-4 font-semibold text-center hover:underline",children:(0,i.jsx)(n.rU,{to:"/signup",children:"Don't have account? Signup"})})]})}},882:(e,t,s)=>{s.d(t,{Z:()=>o});s(791);var a=s(184);const o=e=>{const{text:t="",name:s,...o}=e,n="".concat(s,"-input");return(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block text-gray-700 text-sm font-semibold mb-2",htmlFor:n,children:t}),(0,a.jsx)("input",{id:n,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",...o})]})}}}]);
//# sourceMappingURL=483.2612cfcc.chunk.js.map