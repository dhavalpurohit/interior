(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9395:function(e,i,s){Promise.resolve().then(s.bind(s,317))},6949:function(){"use strict";let e;let i=document.querySelector(".next"),s=document.querySelector(".prev"),n=document.querySelectorAll(".slider-item").length,r=1;i&&(i.addEventListener("click",()=>{console.log("next"),r++,clearTimeout(e),updateImage()}),s.addEventListener("click",()=>{console.log("prev"),r--,clearTimeout(e),updateImage()}));let a=document.querySelector(".image-slider");function updateImage(){r>n?r=1:r<1&&(r=n),a&&(a.style.transform="translateX(-".concat((r-1)*800,"px)")),e=setTimeout(()=>{r++,updateImage()},2e3)}updateImage()},317:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return Home}});var n=s(2266),r=s(6197),a=s(1282),l=s.n(a);function Slider(){let e=[{url:"slide-1.png",title:"High Quality Furniture",discription:"Lorem ipsum dolor sit amet consectetur. Aenean lacus turpis vitae nisl pharetra a nibh sit fames.",btn:!0,link:"#",offer:null,class:""},{url:"slide-2.png",title:" Discount Up to",discription:"Lorem ipsum dolor sit amet consectetur",btn:!1,link:"#",offer:70,class:"offers"}],[i,s]=(0,r.useState)(0);return(0,n.jsxs)("div",{className:"slider",children:[(0,n.jsx)("div",{className:"image-slider",children:e.length>0?e.map((e,i)=>(0,n.jsx)("div",{className:"slider-item "+e.class,style:{backgroundImage:"url("+e.url+")"},children:(0,n.jsxs)("div",{className:"slider-content",children:[(0,n.jsx)("div",{className:"slider-title",children:e.title}),null!==e.offer?(0,n.jsxs)("div",{className:"offer-percent",children:[e.offer,"%"]}):(0,n.jsx)("span",{}),(0,n.jsx)("p",{children:e.discription}),e.btn?(0,n.jsx)("button",{className:"button",children:"Explore Now"}):(0,n.jsx)("span",{})]})},i)):(0,n.jsx)("div",{children:"No List"})}),(0,n.jsxs)("div",{className:"slider-button-content",children:[(0,n.jsx)("div",{className:"slider-button prev",onClick:()=>{i>0&&s(i-1)},children:(0,n.jsxs)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M1 11.2084H21.0702",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,n.jsx)("path",{d:"M11.0349 1L21.07 11.2083L11.0349 21.4167",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})}),(0,n.jsx)("div",{className:"slider-button next",onClick:()=>{i<e.length-1&&s(i+1)},children:(0,n.jsxs)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M1 11.2084H21.0702",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,n.jsx)("path",{d:"M11.0349 1L21.07 11.2083L11.0349 21.4167",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})})]})]})}function ItemCard(e){return(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)(l(),{className:"card-image",src:e.items.image,alt:"chair",width:100,height:100}),(0,n.jsxs)("div",{className:"card-content",children:[(0,n.jsx)("div",{className:"brand-name",children:e.items.brand_name}),(0,n.jsxs)("div",{className:"card-item-name",children:[(0,n.jsx)("div",{children:e.items.item_name}),(0,n.jsx)("span",{children:"..."})]}),(0,n.jsx)("div",{className:"rating",children:[void 0,void 0,void 0,void 0,void 0].map(()=>(0,n.jsx)(l(),{src:"/rate.png",alt:"rate",width:16,height:16}))}),(0,n.jsxs)("div",{className:"price-cart",children:[(0,n.jsxs)("div",{className:"price-cart-value",children:["$",e.items.price]}),(0,n.jsx)("div",{className:"shopping-bag",children:(0,n.jsx)(l(),{src:"/shopping-bag.svg",alt:"shopping-bag",width:18,height:18})})]})]})]})}let t=["All Product","Chair","Table","Sofa","FootStool","Office"],c={data:[{id:1,category:"Chair",brand_name:"IKEA",item_name:"Muren Armchairs 1",price:120,image:"/chair.png"},{id:2,category:"Table",brand_name:"IKEA",item_name:"Muren Armchairs 2",price:130,image:"/chair2.png"},{id:3,category:"Office",brand_name:"IKEA",item_name:"Muren Armchairs 3",price:140,image:"/chair.png"},{id:4,category:"Sofa",brand_name:"IKEA",item_name:"Muren Armchairs 4",price:150,image:"/chair2.png"},{id:5,category:"FootStool",brand_name:"IKEA",item_name:"Muren Armchairs 5",price:160,image:"/chair.png"}]};function Landing(){let[e,i]=(0,r.useState)(0),[s,a]=(0,r.useState)("All Product");return console.log("activeCate",s),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"landing",children:[(0,n.jsxs)("div",{className:"section-title",children:[(0,n.jsx)("h2",{children:"Special Offers"}),(0,n.jsx)(l(),{src:"/star.png",alt:"star",width:30,height:30})]}),(0,n.jsx)(Slider,{}),(0,n.jsxs)("div",{className:"item-section",children:[(0,n.jsxs)("div",{className:"section-title",children:[(0,n.jsx)("h2",{children:"Best Seller"}),(0,n.jsx)("a",{href:"#",children:"View All"})]}),(0,n.jsxs)("div",{className:"item-tab",children:[(0,n.jsx)("ul",{className:"tab-list",children:t.length>0?t.map((s,r)=>(0,n.jsx)("li",{onClick:()=>[i(r),a(s)],className:e===r?"active":"",children:s},r)):(0,n.jsx)("div",{children:"No List"})}),(0,n.jsxs)("div",{className:"sort-by",children:[(0,n.jsx)("span",{children:"Sort by"}),(0,n.jsx)("div",{className:"select-dropdown",children:(0,n.jsxs)("select",{children:[(0,n.jsx)("option",{value:"low",children:"Low-High"}),'"',(0,n.jsx)("option",{value:"high",children:"High-Low"}),(0,n.jsx)("option",{value:"new",children:"New First"})]})})]})]})]})]}),(0,n.jsx)("div",{className:"item-card-section",children:c.data.length>0?c.data.map((e,i)=>{if("All Product"===s||s===e.category)return(0,n.jsx)(ItemCard,{items:e},i)}):(0,n.jsx)("div",{children:"No Item"})})]})}function Search(){return(0,n.jsxs)("div",{className:"search",children:[(0,n.jsx)("img",{src:"/search.svg",alt:"search"}),(0,n.jsx)("input",{type:"text",placeholder:"Search For Products . . ."})]})}function Header(){return(0,n.jsxs)("header",{children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{className:"active",children:(0,n.jsx)("a",{href:"#",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"New Items"})})]}),(0,n.jsx)(Search,{}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",className:"bell-dot",children:(0,n.jsx)("img",{src:"/bell.svg",alt:"bell",width:30,height:30})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("img",{src:"/shopping-bag.svg",alt:"shopping-bag",width:30,height:30})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("img",{src:"/log-in.svg",alt:"log-in",width:30,height:30})})})]})]})}function FilterOption(e){let[i,s]=(0,r.useState)(!0);return(0,n.jsxs)("div",{className:"filter-option",children:[(0,n.jsxs)("div",{className:"filter-option-header",children:[(0,n.jsx)("div",{className:"filter-sub-title",children:e.items.title}),(0,n.jsx)("div",{className:"collapse-icon",onClick:()=>{s(!i)},children:(0,n.jsx)("svg",{className:i?"rotate-180":"",width:"20",height:"11",viewBox:"0 0 20 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{id:"Vector",d:"M18.9044 10L10.0572 1L1.20991 10",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})})]}),(0,n.jsx)("ul",{className:"collapse"+(i?" in":""),children:e.items.list.length>0?e.items.list.map((e,i)=>(0,n.jsxs)("li",{children:[(0,n.jsx)("input",{type:"checkbox",id:e.value}),(0,n.jsx)("label",{htmlFor:e.value,children:e.name})]},i)):(0,n.jsx)("div",{children:"No List"})})]})}function PriceRange(){return(0,n.jsxs)("div",{className:"filter-option",children:[(0,n.jsx)("div",{className:"filter-option-header",children:(0,n.jsx)("div",{className:"filter-sub-title",children:"Price Range"})}),(0,n.jsxs)("div",{className:"range-value",children:[(0,n.jsx)("span",{id:"start",children:"$0"}),(0,n.jsx)("span",{id:"end",children:"$100"})]}),(0,n.jsx)("div",{className:"slider",children:(0,n.jsx)("div",{className:"progress"})}),(0,n.jsxs)("div",{className:"range-input",children:[(0,n.jsx)("input",{type:"range",className:"range-min",min:"0",max:"10000",value:"2500",step:"100"}),(0,n.jsx)("input",{type:"range",className:"range-max",min:"0",max:"10000",value:"7500",step:"100"})]})]})}let d=[{store:{title:"Store",list:[{id:1,name:"HTML",value:"ikea"},{id:2,name:"Americon Signature",value:"americonsign"},{id:4,name:"iFurnholic",value:"ifurnholic"},{id:5,name:"informa",value:"informa"},{id:6,name:"Dove’s Furniture",value:"doves"},{id:7,name:"HTML",value:"ikea1"},{id:8,name:"Americon Signature",value:"americonsign1"},{id:9,name:"iFurnholic",value:"ifurnholic1"},{id:10,name:"informa",value:"informa1"},{id:11,name:"Dove’s Furniture",value:"doves1"}]},product:{title:"Product",list:[{id:12,name:"HTML",value:"ikea12"},{id:13,name:"Americon Signature",value:"americonsign1"},{id:14,name:"iFurnholic",value:"ifurnholic1"},{id:15,name:"informa",value:"informa1"},{id:16,name:"Dove’s Furniture",value:"doves1"},{id:17,name:"HTML",value:"ikea12"},{id:18,name:"Americon Signature",value:"americonsign12"},{id:19,name:"iFurnholic",value:"ifurnholic12"},{id:20,name:"informa",value:"informa12"},{id:21,name:"Dove’s Furniture",value:"doves12"}]}}];function SideMenu(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"sidebar-header",children:(0,n.jsx)("h1",{children:"Interiour"})}),(0,n.jsxs)("div",{className:"filter-section",children:[(0,n.jsxs)("div",{className:"filter-top",children:[(0,n.jsxs)("div",{className:"filter-title",children:[(0,n.jsx)(l(),{src:"/filter-icon.png",alt:"filter-icon",width:30,height:15}),(0,n.jsx)("span",{children:"Filter"})]}),(0,n.jsx)("a",{href:"#",children:"Reset Filter"})]}),(0,n.jsx)(FilterOption,{items:d[0].store}),(0,n.jsx)("hr",{className:"center-border"}),(0,n.jsx)(FilterOption,{items:d[0].product}),(0,n.jsx)("hr",{className:"center-border"}),(0,n.jsx)(PriceRange,{})]})]})}function Home(){let[e,i]=(0,r.useState)(!0);return(0,n.jsxs)("main",{children:[(0,n.jsx)("aside",{className:e?"aside-open":"aside-close",children:(0,n.jsx)(SideMenu,{})}),(0,n.jsxs)("div",{className:"right-content",children:[(0,n.jsx)(Header,{}),(0,n.jsx)(Landing,{}),!e&&(0,n.jsxs)("div",{className:"menu-toggle",onClick:()=>{i(!e)},children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})]})]})}s(5418),s(1019),s(6949)},5418:function(){},1019:function(){}},function(e){e.O(0,[111,321,553,744],function(){return e(e.s=9395)}),_N_E=e.O()}]);