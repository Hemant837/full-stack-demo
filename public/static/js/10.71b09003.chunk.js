"use strict";(self.webpackChunkfull_stack_demo=self.webpackChunkfull_stack_demo||[]).push([[10],{10:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=a(791),l=a(294),o=a(289),n=a(882),r=a(184);const c=()=>{const[e,t]=(0,s.useState)(""),[a,c]=(0,s.useState)(""),[d,u]=(0,s.useState)(""),[m,i]=(0,s.useState)(!1),x=(0,s.useContext)(o.Z),h=x.userId;return console.log(x.userId),(0,s.useEffect)((()=>{(async()=>{try{const e=await l.Z.get("http://localhost:5000/api/profile-data/".concat(h)),{fullName:t,userEmail:a}=e.data;c(t),u(a)}catch(e){t(e.response.data.error),console.error("Error fetching profile data:",e)}})()}),[h]),(0,r.jsxs)("div",{className:"max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold text-gray-800 mb-4",children:"My Profile"}),e&&(0,r.jsx)("p",{className:"mb-4 text-red-600",children:e}),(0,r.jsxs)("form",{children:[(0,r.jsx)(n.Z,{text:"Your Name",name:"name",type:"text",disabled:!m,value:a,onChange:e=>c(e.target.value)}),(0,r.jsx)(n.Z,{text:"Email",name:"email",type:"email",disabled:!m,value:d,onChange:e=>u(e.target.value)})]})]})}},882:(e,t,a)=>{a.d(t,{Z:()=>l});a(791);var s=a(184);const l=e=>{const{text:t="",name:a,...l}=e,o="".concat(a,"-input");return(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-semibold mb-2",htmlFor:o,children:t}),(0,s.jsx)("input",{id:o,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",...l})]})}}}]);
//# sourceMappingURL=10.71b09003.chunk.js.map