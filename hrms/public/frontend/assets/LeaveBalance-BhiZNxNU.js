import u from"./SemicircleChart-BCgSfLL4.js";import{l}from"./leaves-B7m6AF6D.js";import{f as i,j as e,k as o,x as a,q as n,y as d,n as g,a5 as v,F as h,H as y,l as b,K as _}from"./frappe-ui-D0s9hLeI.js";import"./index-6Eoza2Ey.js";const k={class:"flex flex-col w-full"},w={class:"flex flex-row justify-between items-center px-4"},C=a("div",{class:"text-lg text-gray-800 font-bold"},"Leave Balance",-1),B=["onClick"],L={key:0,class:"flex flex-row gap-4 overflow-x-auto py-2 mt-3"},V={class:"text-gray-800 font-bold text-base"},$={class:"text-gray-600 font-normal text-sm w-24 leading-4"},H={__name:"LeaveBalance",setup(E){const f=r=>{const s=["text-[#fb7185]","text-[#f472b6]","text-[#918ef5]"];return s[r%s.length]};return(r,s)=>{const m=i("router-link"),p=i("EmptyState");return e(),o("div",k,[a("div",w,[C,n(l).data?(e(),d(m,{key:0,to:{name:"LeaveApplicationListView"}},{default:g(({navigate:t})=>[a("div",{onClick:t,class:"text-sm text-gray-800 font-semibold cursor-pointer underline underline-offset-2"}," View Leave History ",8,B)]),_:1})):v("",!0)]),n(l).data?(e(),o("div",L,[(e(!0),o(h,null,y(n(l).data,(t,c,x)=>(e(),o("div",{key:c,class:"flex flex-col bg-white border-none rounded-lg drop-shadow-md gap-2 p-4 items-start first:ml-4"},[b(u,{percentage:t.balance_percentage,colorClass:f(x)},null,8,["percentage","colorClass"]),a("div",V,_(`${t.balance_leaves}/${t.allocated_leaves}`),1),a("div",$,_(`${c} balance`),1)]))),128))])):(e(),d(p,{key:1,message:"You have no leaves allocated"}))])}}};export{H as default};
//# sourceMappingURL=LeaveBalance-BhiZNxNU.js.map
