import{q as e,r as a,f as s,p as r}from"./element-plus.js";import{c as t}from"./message.js";import{_ as l}from"./@qiun.js";import{o,c as m,g as p,Z as i,$ as n}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const u={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};const d=l({name:"message-add",data:()=>({params:{name:"",tel:"",company:"",content:""},paramsRules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:20,message:"名称长度在 2 到 20 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async create(){try{let e=await t(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(t,l,d,c,g,j){const f=e,b=a,h=s,y=r;return o(),m("div",u,[p(y,{ref:"params",model:t.params,"label-width":"84px",class:"mt-20"},{default:i((()=>[p(b,{label:"姓名",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}],prop:"name"},{default:i((()=>[p(f,{modelValue:t.params.name,"onUpdate:modelValue":l[0]||(l[0]=e=>t.params.name=e)},null,8,["modelValue"])])),_:1}),p(b,{label:"手机号"},{default:i((()=>[p(f,{modelValue:t.params.tel,"onUpdate:modelValue":l[1]||(l[1]=e=>t.params.tel=e)},null,8,["modelValue"])])),_:1}),p(b,{label:"公司名称"},{default:i((()=>[p(f,{modelValue:t.params.company,"onUpdate:modelValue":l[2]||(l[2]=e=>t.params.company=e)},null,8,["modelValue"])])),_:1}),p(b,{label:"留言内容",prop:"content",rules:[{required:!0,message:"请输入内容",trigger:"blur"}]},{default:i((()=>[p(f,{type:"textarea",rows:3,placeholder:"请输入内容",modelValue:t.params.content,"onUpdate:modelValue":l[3]||(l[3]=e=>t.params.content=e)},null,8,["modelValue"])])),_:1}),p(b,null,{default:i((()=>[p(h,{type:"primary",onClick:l[4]||(l[4]=e=>j.submit("params"))},{default:i((()=>[n("保存")])),_:1})])),_:1})])),_:1},8,["model"])])}]]);export{d as default};