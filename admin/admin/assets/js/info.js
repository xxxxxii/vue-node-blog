import{s,t as a}from"./element-plus.js";import{t}from"./article.js";import{r as e}from"./site2.js";import{_ as l,q as c}from"./@qiun.js";import"./js-cookie.js";import{r as o,o as r,e as i,Z as m,g as n,a as p,$ as d,t as u,p as f,b as g}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./copy-to-clipboard.js";import"./toggle-selection.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./vue-demi.js";import"./pinia-plugin-persist.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./vue-router.js";import"./axios.js";/* empty css        */const b=""+new URL("../svg/ico-article.svg",import.meta.url).href,v=""+new URL("../svg/ico-will.svg",import.meta.url).href,j=""+new URL("../svg/ico-message.svg",import.meta.url).href,h=""+new URL("../svg/ico-up.svg",import.meta.url).href,x={name:"home-info",components:{qiunVueUcharts:c},data:()=>({data:{week:0,message:0,tag:0,article:0,version:"v.1.6.0",appName:"ChanCMS",port:"",versionTime:"",author:""},dirname:"",loading:!0,chartData:{},opts:{rotate:!1,rotateLock:!1,color:["#FADC19","#9FDB1D","#00B42A","#3491FA","#165DFF","#722ED1"],padding:[5,5,5,5],dataLabel:!0,enableScroll:!1,legend:{show:!0,position:"right",lineHeight:25},title:{name:"ChanCMS",fontSize:15,color:"#666666"},subtitle:{name:"架构",fontSize:25,color:"#7cb5ec"},extra:{ring:{ringWidth:60,activeOpacity:.5,activeRadius:10,offsetAngle:0,labelWidth:15,border:!0,borderWidth:3,borderColor:"#FFFFFF"}}}}),computed:{},created(){this.chart()},mounted(){this.tongji(),this.runEnv()},methods:{async tongji(){try{let s=await t();200===s.code?(this.data=s.data,this.loading=!1):this.$message({message:s.msg,type:"success"})}catch(s){console.log(s)}},async runEnv(){try{let s=await e();const{code:a,data:t}=s;200===a?this.dirname=t.dirname:this.$message({message:s.msg,type:"success"})}catch(s){console.log(s)}},chart(){this.chartData=JSON.parse(JSON.stringify({series:[{data:[{name:"nodejs",value:40},{name:"mysql",value:10},{name:"vue3",value:40},{name:"javascript",value:90},{name:"css3",value:10},{name:"html5",value:10}]}]}))}}},y=s=>(f("data-v-806b78d6"),s=s(),g(),s),w={class:"bg-fff pd-20 radius-6 row justify-around mb-20"},_={class:"row flex-col align-c"},F=y((()=>p("div",{class:"tj-img"},[p("img",{src:b})],-1))),S=y((()=>p("p",{class:"f-12 text-c mt-5"},"文章内容",-1))),D={class:"f-20 text-c"},q=y((()=>p("sub",{class:"pos-r t-0 f-12"},"篇",-1))),C={class:"row flex-col align-c"},k=y((()=>p("div",{class:"tj-img"},[p("img",{src:v})],-1))),L=y((()=>p("p",{class:"f-12 text-c mt-5"},"文章标签",-1))),z={class:"f-20 text-c"},E=y((()=>p("sub",{class:"pos-r t-0 f-12"},"个",-1))),M=y((()=>p("div",{class:"tj-img"},[p("img",{src:j})],-1))),R=y((()=>p("p",{class:"f-12 text-c mt-5"},"留言信息",-1))),U={class:"f-20 text-c"},A=y((()=>p("sub",{class:"pos-r t-0 f-12"},"条",-1))),O=y((()=>p("div",{class:"tj-img"},[p("img",{src:h})],-1))),N=y((()=>p("p",{class:"f-12 text-c mt-5"},"七日更新",-1))),W={class:"f-20 text-c"},$=y((()=>p("sub",{class:"pos-r t-0 f-12"},"条",-1))),B={class:"row"},J={class:"bg-fff pd-20 radius-6 mb-20 row chart"},T=y((()=>p("div",{class:"bg-fff pd-20 radius-6 mb-20"},[p("div",{class:"mb-12 f-16 c-1d2129 bold"},"系统特色"),p("p",{class:"f-13 mb-6 c-4e5969"}," ChanCMS是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。 "),p("p",{class:"f-13 mb-6 c-4e5969"},"轻量、灵活、稳定、高性能。"),p("p",{class:"f-13 mb-6 c-4e5969"},[p("strong",null,"SEO。"),d("专注于seo,伪静态html和拼音导航，灵活设置关键词和描述。 ")]),p("p",{class:"f-13 mb-6 c-4e5969"},[p("strong",null,"安全。"),d("基于knex,高防sql注入，接口权限校验，为安全提供保障。 ")]),p("p",{class:"f-13 mb-6 c-4e5969"},[p("strong",null,"灵活"),d("。碎片功能，支持零碎文案配置，方便各类灵活文案配置。 ")]),p("p",{class:"f-13 mb-6 c-4e5969"},[p("strong",null,"高扩展。"),d("支持扩展模型，字段配置，可动态生成表，超强扩展。 ")]),p("p",{class:"f-13 mb-6 c-4e5969"},[p("strong",null,"模块化。"),d("一切模块相互独立，互不干扰。 ")]),p("p",{class:"f-13 c-4e5969"},[p("strong",null,"插件化。"),d("灵活开发，支持完整功能模块。 ")])],-1))),H={class:"bg-fff pd-20 radius-6 mb-20"},I=y((()=>p("div",{class:"mb-12 f-16 c-1d2129 bold"},"技术架构",-1))),Q=y((()=>p("p",{class:"f-13 mb-6 c-4e5969"},[p("span",{class:"c-333"},"服务架构："),d("nodejs express mysql ")],-1))),V=y((()=>p("p",{class:"f-13 mb-6"},[p("span",null,"前端架构："),d("vite vue3 element-plus")],-1))),Z={class:"f-13 mb-6"},G=y((()=>p("span",null,"程序路径：",-1))),K={class:"f-13 mb-6"},P=y((()=>p("span",null,"程序版本：",-1))),X={class:"f-13 mb-6"},Y=y((()=>p("span",null,"发布时间：",-1))),ss={class:"f-13 mb-6"},as=y((()=>p("span",null,"技术开发：",-1))),ts=y((()=>p("p",{class:"f-13 mb-6 row"},[p("span",null,"联系微信："),d("yanyutao2014")],-1))),es=y((()=>p("p",{class:"f-13 mb-6 row"},[p("span",null,"联系邮箱："),d("867528315@qq.com")],-1))),ls=y((()=>p("div",{class:"bg-fff pd-20 radius-6 mb-20"},[p("div",{class:"mb-12 f-16 c-1d2129 bold"},"技术服务"),p("p",{class:"f-13 mb-6 c-4e5969 row justify-around"},[p("span",{class:"c-1d2129 col-12 mb-10"},"企业建站"),p("span",{class:"c-1d2129 col-12 mb-10"},"模板开发"),p("span",{class:"c-1d2129 col-12 mb-10"},"模板仿站"),p("span",{class:"c-1d2129 col-12 mb-10"},"模板定制"),p("span",{class:"c-1d2129 col-12"},"小程序开发"),p("span",{class:"c-1d2129 col-12"},"前端开发")])],-1)));const cs=l(x,[["render",function(t,e,l,c,f,g){const b=o("router-link"),v=o("qiun-vue-ucharts"),j=s,h=a;return r(),i(h,{gutter:20},{default:m((()=>[n(j,{xs:24,sm:18,md:18,lg:18,xl:18},{default:m((()=>[p("div",w,[n(b,{class:"c-1d2129",to:"/article"},{default:m((()=>[p("div",_,[F,S,p("p",D,[d(u(t.data.article)+" ",1),q])])])),_:1}),n(b,{class:"c-1d2129",to:"/tag"},{default:m((()=>[p("div",C,[k,L,p("p",z,[d(u(t.data.tag)+" ",1),E])])])),_:1}),n(b,{class:"c-1d2129",to:"/message"},{default:m((()=>[p("div",null,[M,R,p("p",U,[d(u(t.data.message)+" ",1),A])])])),_:1}),p("div",null,[O,N,p("p",W,[d(u(t.data.week)+" ",1),$])])]),p("div",B,[n(h,{gutter:20},{default:m((()=>[n(j,{xs:24,sm:12,md:12,lg:12,xl:12},{default:m((()=>[p("div",J,[n(v,{type:"ring",opts:t.opts,chartData:t.chartData},null,8,["opts","chartData"])])])),_:1}),n(j,{xs:24,sm:12,md:12,lg:12,xl:12},{default:m((()=>[T])),_:1})])),_:1})])])),_:1}),n(j,{xs:24,sm:6,md:6,lg:6,xl:6},{default:m((()=>[p("div",H,[I,Q,V,p("p",Z,[G,d(u(t.dirname),1)]),p("p",K,[P,d(u(t.data.version),1)]),p("p",X,[Y,d(u(t.data.versionTime),1)]),p("p",ss,[as,d(u(t.data.author),1)]),ts,es]),ls])),_:1})])),_:1})}],["__scopeId","data-v-806b78d6"]]);export{cs as default};
