import{r as s,f as o,p as e}from"./element-plus.js";import{J as t}from"./json-editor-vue3.js";import{e as a,i as r}from"./index.js";import{_ as i}from"./@qiun.js";import{r as n,o as m,c as p,g as l,Z as c,$ as d}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./copy-to-clipboard.js";import"./toggle-selection.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./jsoneditor.js";import"./pinia.js";import"./vue-demi.js";import"./pinia-plugin-persist.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const u={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};const j=i({name:"menu-index",components:{JsonEditorVue:t},data:()=>({hasJsonFlag:!0,val:{},params:{id:0,content:{}}}),computed:{},async mounted(){},async created(){await this.find()},unmounted(){},methods:{changeJson(s){console.log(s),console.log(this.params)},async find(){try{let s=await a();if(200==s.code){const{id:o,content:e}=s.data;this.params={id:o,content:JSON.parse(e)}}}catch(s){console.error(s)}},async update(){try{const{id:s,content:o}=this.params;let e={id:s,content:JSON.stringify(o)};200==(await r(e)).code&&(this.$message({message:"更新成功^_^",type:"success"}),location.reload())}catch(s){console.log(s)}},submit(s){this.$refs[s].validate((s=>{if(!s)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(t,a,r,i,j,f){const h=n("json-editor-vue"),g=s,y=o,v=e;return m(),p("div",u,[l(v,{ref:"params",model:t.params,"label-width":"84px"},{default:c((()=>[l(g,{label:"菜单配置"},{default:c((()=>[l(h,{class:"w-p100 vjs-tree",modelValue:t.params.content,"onUpdate:modelValue":a[0]||(a[0]=s=>t.params.content=s),onChange:f.changeJson,mode:"code"},null,8,["modelValue","onChange"])])),_:1}),l(g,null,{default:c((()=>[l(y,{type:"primary",onClick:a[1]||(a[1]=s=>f.submit("params"))},{default:c((()=>[d("保存")])),_:1})])),_:1})])),_:1},8,["model"])])}],["__scopeId","data-v-0219c322"]]);export{j as default};