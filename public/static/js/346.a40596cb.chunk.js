"use strict";(self.webpackChunkfull_stack_demo=self.webpackChunkfull_stack_demo||[]).push([[346],{346:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(791),s=a(689),l=a(294),o=a(289),r=a(882),i=a(184);const c=()=>{const e=(0,n.useContext)(o.Z),{id:t}=(0,s.UO)(),a=parseInt(t,10),c=(0,s.s0)(),u=e.items.find((e=>e.id===a)),[p,d]=(0,n.useState)({pName:u.pName,pDescription:u.pDescription,price:u.price,imgUrl:u.imgUrl}),m=(e,t)=>{d((a=>({...a,[e]:t})))};return(0,i.jsxs)("div",{className:"max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md",children:[(0,i.jsx)("h2",{className:"text-2xl font-semibold text-gray-800 mb-8",children:"Edit Product"}),(0,i.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{await l.Z.put("http://localhost:5000/api/update-product/".concat(a),p)}catch(t){console.log(t)}finally{alert("Product Updated Successfully"),c("/")}},children:[(0,i.jsx)(r.Z,{text:"Product Name",name:"pName",type:"text",value:p.pName,onChange:e=>m("pName",e.target.value)}),(0,i.jsx)(r.Z,{text:"Description",name:"pDescription",type:"text",value:p.pDescription,onChange:e=>m("pDescription",e.target.value)}),(0,i.jsx)(r.Z,{text:"Price",name:"price",type:"number",value:p.price,onChange:e=>m("price",e.target.value)}),(0,i.jsx)(r.Z,{text:"Image URL",name:"imgUrl",type:"text",value:p.imgUrl,onChange:e=>m("imgUrl",e.target.value)}),(0,i.jsx)("button",{type:"submit",className:"bg-blue-500 text-white w-full py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-green",children:"Update"})]})]})}},882:(e,t,a)=>{a.d(t,{Z:()=>s});a(791);var n=a(184);const s=e=>{const{text:t="",name:a,...s}=e,l="".concat(a,"-input");return(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-semibold mb-2",htmlFor:l,children:t}),(0,n.jsx)("input",{id:l,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",...s})]})}}}]);
//# sourceMappingURL=346.a40596cb.chunk.js.map