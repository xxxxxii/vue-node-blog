System.register(["./element-plus-legacy.js","./@element-plus-legacy.js","./friendlink-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./copy-to-clipboard-legacy.js","./toggle-selection-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./vue-demi-legacy.js","./pinia-plugin-persist-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var t,a,n,s,i,c,o,u,r,d,g,y,p,h,j,f,m,b,k;return{setters:[e=>{t=e.f,a=e.t,n=e.I,s=e.J,i=e.L},e=>{c=e.G,o=e.E,u=e.v,r=e.H},e=>{d=e.l,g=e.a},e=>{y=e._},e=>{p=e.r,h=e.o,j=e.c,f=e.g,m=e.Z,b=e.$,k=e.t},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"pd-20 bg-fff"};e("default",y({name:"friendlink-index",setup:()=>({Edit:c,Delete:o,View:u,Search:r}),data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.list()},methods:{async list(){try{let e=await d(this.cur);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.list()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let l=e.id;this.$router.push({name:"friendlink-edit",params:{id:l}})},async handleDel(e){let l=e.id;try{let e=await g(l);200===e.code?(this.$message({message:"删除成功 ^_^",type:"success"}),this.list()):this.$message({message:e.msg,type:"success"})}catch(t){console.log(t)}}}},[["render",function(e,c,o,u,r,d){const g=t,y=p("router-link"),C=a,w=n,S=s,v=i;return h(),j("div",l,[f(C,{type:"flex",class:"mt-10 mb-10",justify:"end"},{default:m((()=>[f(y,{to:"/friendlink/add"},{default:m((()=>[f(g,{type:"primary",round:""},{default:m((()=>[b("新增")])),_:1})])),_:1})])),_:1}),f(S,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",onSelectionChange:d.handleSelectionChange},{default:m((()=>[f(w,{type:"selection"}),f(w,{prop:"id",width:"60",label:"编号"}),f(w,{prop:"title",width:"120",label:"标题"}),f(w,{prop:"link",width:"260",label:"链接"}),f(w,{prop:"sort",label:"排序"}),f(w,{prop:"createdAt",label:"发布时间"},{default:m((e=>[b(k(e.row.createdAt),1)])),_:1}),f(w,{fixed:"right",width:"100",label:"操作"},{default:m((e=>[f(g,{icon:u.Edit,circle:"",onClick:l=>d.toEdit(e.row)},null,8,["icon","onClick"]),f(g,{icon:u.Delete,circle:"",onClick:l=>d.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),f(C,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:m((()=>[f(v,{background:"",layout:"prev, pager, next",onCurrentChange:d.handleCurrentChange,"page-size":10,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])}]]))}}}));