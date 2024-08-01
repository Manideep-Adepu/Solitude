(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{6579:function(e,t,s){Promise.resolve().then(s.bind(s,4168))},6463:function(e,t,s){"use strict";var n=s(1169);s.o(n,"usePathname")&&s.d(t,{usePathname:function(){return n.usePathname}}),s.o(n,"useRouter")&&s.d(t,{useRouter:function(){return n.useRouter}})},9140:function(e,t,s){"use strict";s.d(t,{AuthProvider:function(){return o},a:function(){return r}});var n=s(7437),l=s(2265);let a=(0,l.createContext)(),o=e=>{let{children:t}=e,[s,o]=(0,l.useState)(!1);return(0,n.jsx)(a.Provider,{value:{login:()=>o(!0),logout:()=>o(!1),isLoggedIn:()=>s,loggedIn:s},children:t})},r=()=>(0,l.useContext)(a)},4168:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var n=s(7437),l=s(2265),a=s(9140),o=s(6463),r=e=>{let{isOpen:t,onClose:s}=e,[o,r]=(0,l.useState)(""),[i,u]=(0,l.useState)(""),[d,c]=(0,l.useState)(""),[m,b]=(0,l.useState)(""),[x,g]=(0,l.useState)(""),[h,f]=(0,l.useState)(""),[p,j]=(0,l.useState)(""),{login:y}=(0,a.a)();return t?(0,n.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:(0,n.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-8 w-full max-w-md",children:[(0,n.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Register"}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),setTimeout(()=>{o&&i&&d?(console.log("Registration successful"),y(),s()):(j("All fields are required"),console.error("Registration failed"))},1e3)},children:[p&&(0,n.jsx)("p",{className:"text-red-500 mb-4",children:p}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Username"}),(0,n.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300",id:"username",type:"text",value:o,onChange:e=>r(e.target.value),placeholder:"Username",required:!0})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),(0,n.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300",id:"email",type:"email",value:i,onChange:e=>u(e.target.value),placeholder:"Email",required:!0})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),(0,n.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300",id:"password",type:"password",value:d,onChange:e=>c(e.target.value),placeholder:"Password",required:!0})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"address",children:"Address"}),(0,n.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300",id:"address",type:"text",value:m,onChange:e=>b(e.target.value),placeholder:"Address"})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"gender",children:"Gender"}),(0,n.jsxs)("select",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300",id:"gender",value:x,onChange:e=>g(e.target.value),children:[(0,n.jsx)("option",{value:"",children:"Select Gender"}),(0,n.jsx)("option",{value:"Male",children:"Male"}),(0,n.jsx)("option",{value:"Female",children:"Female"}),(0,n.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"phone",children:"Phone Number"}),(0,n.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300",id:"phone",type:"text",value:h,onChange:e=>f(e.target.value),placeholder:"Phone Number"})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,n.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75",type:"submit",children:"Register"}),(0,n.jsx)("button",{className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75",type:"button",onClick:s,children:"Close"})]})]})]})}):null},i=()=>{let[e,t]=(0,l.useState)(""),[s,i]=(0,l.useState)(""),[u,d]=(0,l.useState)(""),[c,m]=(0,l.useState)(!1),[b,x]=(0,l.useState)(!1),{login:g,loggedIn:h}=(0,a.a)(),f=(0,o.useRouter)();return h?(f.push("/"),null):(0,n.jsxs)("div",{className:"flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500",children:[(0,n.jsxs)("div",{className:"w-full max-w-md bg-white rounded-lg shadow-md p-8",children:[(0,n.jsx)("h2",{className:"text-3xl font-extrabold text-center text-gray-900 mb-6",children:"Login"}),(0,n.jsxs)("form",{onSubmit:t=>{t.preventDefault(),m(!0),d(""),setTimeout(()=>{"admin"===e&&"admin"===s?(console.log("Login successful"),g(),f.push("/")):(d("Invalid email or password"),console.error("Login failed")),m(!1)},1e3)},children:[u&&(0,n.jsx)("p",{className:"text-red-500 text-center mb-4",children:u}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),(0,n.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300",id:"email",type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Email",required:!0})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),(0,n.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-300",id:"password",type:"password",value:s,onChange:e=>i(e.target.value),placeholder:"**********",required:!0})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,n.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75",type:"submit",disabled:c,children:c?"Signing In...":"Sign In"}),(0,n.jsx)("a",{className:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",href:"#",children:"Forgot Password?"})]}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("span",{className:"text-gray-700",children:"Don't have an account?"}),(0,n.jsx)("button",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75",type:"button",onClick:()=>x(!0),children:"Register"})]})]})]}),(0,n.jsx)(r,{isOpen:b,onClose:()=>x(!1)})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=6579)}),_N_E=e.O()}]);