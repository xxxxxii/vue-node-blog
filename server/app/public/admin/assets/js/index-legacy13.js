System.register(["./element-plus-legacy.js","./json-editor-vue3-legacy.js","./index-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./jsoneditor-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var t,n,o,s,l,c,d,r,i,u,m,p,g;return{setters:[e=>{t=e.r,n=e.f,o=e.p},e=>{s=e.J},e=>{l=e.e,c=e.i},e=>{d=e._},e=>{r=e.r,i=e.o,u=e.c,m=e.g,p=e.Z,g=e.$},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".vjs-tree[data-v-0219c322]{height:calc(100vh - 300px);overflow:auto;width:100%}[data-v-0219c322] .jsoneditor-menu,[data-v-0219c322] .jsoneditor-statusbar{display:none}[data-v-0219c322] .jsoneditor-outer{border:none}[data-v-0219c322] .jsoneditor-vue3 .jsoneditor-menu,[data-v-0219c322] .jsoneditor-vue3 .jsoneditor-statusbar{display:none}[data-v-0219c322] .jsoneditor-vue3 .jsoneditor-outer{border:none}[data-v-0219c322] .jsoneditor{border:1px solid #f2f2f2}[data-v-0219c322] .jsoneditor-outer.has-main-menu-bar{margin-top:0;padding-top:0}[data-v-0219c322] .ace-jsoneditor .ace_gutter{background-color:#f2f2f2}\n",document.head.appendChild(a);const j={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};e("default",d({name:"menu-index",components:{JsonEditorVue:s},data:()=>({hasJsonFlag:!0,val:{},params:{id:0,content:{}}}),computed:{},async mounted(){},async created(){await this.find()},unmounted(){},methods:{changeJson(e){console.log(e),console.log(this.params)},async find(){try{let e=await l();if(200==e.code){const{id:a,content:t}=e.data;this.params={id:a,content:JSON.parse(t)}}}catch(e){console.error(e)}},async update(){try{const{id:e,content:a}=this.params;let t={id:e,content:JSON.stringify(a)};200==(await c(t)).code&&(this.$message({message:"更新成功^_^",type:"success"}),location.reload())}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,a,s,l,c,d){const y=r("json-editor-vue"),v=t,h=n,f=o;return i(),u("div",j,[m(f,{ref:"params",model:e.params,"label-width":"84px"},{default:p((()=>[m(v,{label:"菜单配置"},{default:p((()=>[m(y,{class:"w-p100 vjs-tree",modelValue:e.params.content,"onUpdate:modelValue":a[0]||(a[0]=a=>e.params.content=a),onChange:d.changeJson,mode:"code"},null,8,["modelValue","onChange"])])),_:1}),m(v,null,{default:p((()=>[m(h,{type:"primary",onClick:a[1]||(a[1]=e=>d.submit("params"))},{default:p((()=>[g("保存")])),_:1})])),_:1})])),_:1},8,["model"])])}],["__scopeId","data-v-0219c322"]]))}}}));