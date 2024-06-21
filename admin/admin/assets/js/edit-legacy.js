System.register(["./element-plus-legacy.js","./md-editor-v3-legacy.js","./@vue-legacy.js","./category-legacy.js","./article-legacy.js","./tag-legacy.js","./upload-legacy.js","./tinymce-legacy.js","./index-legacy.js","./@qiun-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./copy-to-clipboard-legacy.js","./toggle-selection-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./@vavt-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./medium-zoom-legacy.js","./markdown-it-legacy.js","./mdurl-legacy.js","./uc.micro-legacy.js","./entities-legacy.js","./linkify-it-legacy.js","./punycode.js-legacy.js","./markdown-it-image-figures-legacy.js","./markdown-it-task-lists-legacy.js","./lru-cache-legacy.js","./sys_app-legacy.js","./pinia-legacy.js","./vue-demi-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,t,d,s,o,u,i,r,m,c,n,p,g,y,f,h,_,V,b,v,j,w,k,U,x,C,S,I,$,A,D,q,N,z,E,T,F,P,L,O,B,G,H,M,R,X,Z,J,K,Q,W,Y,ee,le;return{setters:[e=>{a=e.u,t=e.v,d=e.w,s=e.r,o=e.s,u=e.q,i=e.x,r=e.y,m=e.A,c=e.B,n=e.a,p=e.C,g=e.D,y=e.F,f=e.f,h=e.n,_=e.t,V=e.G,b=e.p,v=e.H},e=>{j=e.E},e=>{w=e.d,k=e.o,U=e.c,x=e.g,C=e.ak,S=e.al,I=e.u,$=e.r,A=e.a,D=e.Z,q=e.w,N=e.e,z=e.$,E=e.f,T=e.X,F=e.aa,P=e.v},e=>{L=e.f},e=>{O=e.f,B=e.d,G=e.u},e=>{H=e.s},e=>{M=e.u,R=e.a},e=>{X=e._,Z=e.t},e=>{J=e.c,K=e.a,Q=e.t,W=e.d,Y=e.b,ee=e.f},e=>{le=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent="[data-v-de6ac1d1] .tiny-textarea{height:436px}.cover div[data-v-de6ac1d1]{width:120px;height:90px;margin:5px;cursor:pointer}.w-300[data-v-de6ac1d1]{width:300px!important}[data-v-de6ac1d1] .el-drawer{width:280px!important}[data-v-de6ac1d1] .el-drawer__body{padding:0}\n",document.head.appendChild(l);const ae={style:{width:"100%"}},te=w({__name:"index",setup:e=>(e,l)=>(k(),U("div",ae,[x(I(j),C(S(e.$attrs)),null,16)]))}),de={class:"content-wrap"},se={class:"mr-10 ml-10"},oe={class:"mr-10 ml-10 mb-20"},ue={class:"cover row"};e("default",le({name:"article-edit",components:{Vue3Tinymce:X},data:()=>({setting:Z,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!1,autoDes:!1,picNum:1,taglist:[],params:{id:0,cid:0,sub_cid:[],title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"",status:"0",pv:1,link:""},field:[],fieldParams:{},dialogImageUrl:"",dialogVisible:!1,disabled:!1,paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]},cur:1,keywords:"",drawer:!1,drawerList:["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]}),computed:{},async mounted(){this.setting.images_upload_url=await M()},async created(){this.params.id=this.$route.params.id,await this.detail(),await this.query(),this.searchTag()},unmounted(){},methods:{tinymce(){this.loading=!1},handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},selectCover(e){this.params.img=e},async searchTag(e){try{let l=await H(this.cur,e,100);if(200===l.code){let e=[];l.data.list.forEach((l=>{e.push({label:l.name,value:l.id})})),this.taglist=e}}catch(l){console.log(l)}},async query(){try{let e=await L();if(200===e.code){let l=e.data,a=J(this.params.cid,l);this.categorySelected=a,this.findField(this.params.cid);let t=K(Q(l));this.cateList=K(l),this.category=[...t]}}catch(e){console.log(e)}},handleChange(e){-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},async findField(e){try{let l=await O(e);200===l.code&&(this.field=l.data.fields)}catch(l){console.log(l)}},async detail(){try{let e=await B(this.params.id);if(200===e.code){let l=e.data;l.content=W(l.content),l.attr=l.attr?l.attr.split(","):[],l.sub_cid=l.sub_cid?l.sub_cid.split(",").map((e=>Number(e))):[],l.tag_id=l.tag_id?l.tag_id.split(",").map((e=>Number(e))):[],l.status=l.status.toString(),l.updatedAt=new Date(l.createdAt),this.params=l,this.fieldParams=l.field,this.loading=!1}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){return-1===e.type.indexOf("image")?(this.$message("上传文件只能是图片格式"),!1):e.size/1024/1024>.2?(this.$message("上传图片必须小于200k"),!1):void 0},async upload(e){let l=new FormData;l.append("file",e.file);let a=await R(l);200===a.code&&(this.params.img=a.data.path)},async update(){try{let e={...this.params};e.attr=e.attr.toString(),e.sub_cid=e.sub_cid.toString(),e.tag_id=e.tag_id.toString(),!e.img&&this.autoImg&&(e.img=Y(e.content)[0]),!e.description&&this.autoDes&&(e.description=ee(e.content).substr(0,255)),delete e.category;let l=await G({...e,field:this.fieldParams});200==l.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:l.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;0!=this.params.cid?this.update():this.$message({message:"请选择栏目",type:"success"})}))}}},[["render",function(e,l,j,w,C,S){const I=a,L=t,O=d,B=s,G=o,H=u,M=i,R=r,X=m,Z=c,J=$("MostlyCloudy"),K=n,Q=p,W=g,Y=y,ee=f,le=h,ae=_,ie=te,re=V,me=b,ce=v;return k(),U("div",de,[A("div",se,[x(L,{modelValue:e.activeName,"onUpdate:modelValue":l[0]||(l[0]=l=>e.activeName=l),onTabClick:S.handleClick},{default:D((()=>[x(I,{label:"基本信息",name:"first"}),x(I,{label:"扩展信息",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),A("div",oe,[q((k(),N(me,{ref:"params",model:e.params,"label-width":"90px"},{default:D((()=>[q(A("div",null,[x(ae,{gutter:20},{default:D((()=>[x(G,{sm:24,md:12},{default:D((()=>[x(B,{label:"文章栏目"},{default:D((()=>[x(O,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":l[1]||(l[1]=l=>e.categorySelected=l),options:e.category,onChange:S.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1})])),_:1}),x(G,{sm:24,md:12},{default:D((()=>[x(B,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:100,message:"标题不能超过100个字",trigger:"blur"}]},{default:D((()=>[x(H,{modelValue:e.params.title,"onUpdate:modelValue":l[2]||(l[2]=l=>e.params.title=l)},null,8,["modelValue"])])),_:1})])),_:1}),x(G,{sm:24,md:12},{default:D((()=>[x(B,{label:"tag标签"},{default:D((()=>[x(M,{modelValue:e.params.tag_id,"onUpdate:modelValue":l[3]||(l[3]=l=>e.params.tag_id=l),options:e.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":S.searchTag},null,8,["modelValue","options","remote-method"])])),_:1})])),_:1}),x(G,{sm:24,md:12},{default:D((()=>[x(B,{label:"内容属性"},{default:D((()=>[x(X,{modelValue:e.params.attr,"onUpdate:modelValue":l[4]||(l[4]=l=>e.params.attr=l),onChange:S.handleAttr},{default:D((()=>[x(R,{label:"1"},{default:D((()=>[z("头条")])),_:1}),x(R,{label:"2"},{default:D((()=>[z("推荐")])),_:1}),x(R,{label:"3"},{default:D((()=>[z("轮播")])),_:1}),x(R,{label:"4"},{default:D((()=>[z("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),x(G,{sm:24,md:12},{default:D((()=>[x(B,{label:"发布时间"},{default:D((()=>[x(Z,{modelValue:e.params.createdAt,"onUpdate:modelValue":l[5]||(l[5]=l=>e.params.createdAt=l),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1})])),_:1}),x(G,{sm:24,md:12},{default:D((()=>[x(B,{class:"row",label:"缩略图"},{default:D((()=>[x(W,{class:"avatar-uploader","http-request":S.upload,"show-file-list":!1,"before-upload":S.beforeUpload},{default:D((()=>[x(Q,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:D((()=>[x(K,{class:"avatar-uploader-icon"},{default:D((()=>[x(J)])),_:1})])),_:1})])),_:1},8,["http-request","before-upload"]),e.params.img?(k(),N(Q,{key:0,placement:"right",width:400,trigger:"hover"},{reference:D((()=>[x(Y,{class:"avatar-uploader-icon pointer ml-10",src:e.params.img},null,8,["src"])])),default:D((()=>[x(Y,{style:{width:"100%"},src:e.params.img},null,8,["src"])])),_:1})):E("",!0),x(ee,{type:"primary",class:"ml-10",onClick:l[6]||(l[6]=l=>e.drawer=!0)},{default:D((()=>[z(" 默认封面图 ")])),_:1}),x(le,{modelValue:e.drawer,"onUpdate:modelValue":l[7]||(l[7]=l=>e.drawer=l),title:"默认封面图",class:"w-300","with-header":!1},{default:D((()=>[A("div",ue,[(k(!0),U(T,null,F(e.drawerList,((e,l)=>(k(),N(Y,{key:l,src:e,onClick:l=>S.selectCover(e),fit:"cover"},null,8,["src","onClick"])))),128))])])),_:1},8,["modelValue"]),x(H,{class:"ml-10 flex-1",modelValue:e.params.img,"onUpdate:modelValue":l[8]||(l[8]=l=>e.params.img=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),x(B,{label:"内容摘要"},{default:D((()=>[x(H,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:e.params.description,"onUpdate:modelValue":l[9]||(l[9]=l=>e.params.description=l)},null,8,["modelValue"])])),_:1}),x(B,{label:"文章内容"},{default:D((()=>[x(ie,{modelValue:e.params.content,"onUpdate:modelValue":l[10]||(l[10]=l=>e.params.content=l)},null,8,["modelValue"])])),_:1}),x(ae,{gutter:20},{default:D((()=>[x(G,{sm:24,md:12,lg:8},{default:D((()=>[x(B,{label:"自动封面"},{default:D((()=>[x(R,{modelValue:e.autoImg,"onUpdate:modelValue":l[12]||(l[12]=l=>e.autoImg=l)},{default:D((()=>[z(" 文章第 "),x(H,{modelValue:e.picNum,"onUpdate:modelValue":l[11]||(l[11]=l=>e.picNum=l),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),z("张图 ")])),_:1},8,["modelValue"])])),_:1})])),_:1}),x(G,{sm:24,md:12,lg:8},{default:D((()=>[x(B,{label:"提取描述"},{default:D((()=>[x(R,{modelValue:e.autoDes,"onUpdate:modelValue":l[13]||(l[13]=l=>e.autoDes=l)},{default:D((()=>[z("提取文章描述")])),_:1},8,["modelValue"])])),_:1})])),_:1}),x(G,{sm:24,md:12,lg:8},{default:D((()=>[x(B,{label:"是否显示"},{default:D((()=>[x(re,{modelValue:e.params.status,"onUpdate:modelValue":l[14]||(l[14]=l=>e.params.status=l),value:"0"},{default:D((()=>[z("发布")])),_:1},8,["modelValue"]),x(re,{modelValue:e.params.status,"onUpdate:modelValue":l[15]||(l[15]=l=>e.params.status=l),value:"1"},{default:D((()=>[z("不发布")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[P,0==e.activeIndex]]),q(A("div",null,[x(ae,{gutter:20},{default:D((()=>[x(G,{sm:24,md:12},{default:D((()=>[x(B,{label:"短标题",prop:"name"},{default:D((()=>[x(H,{modelValue:e.params.short_title,"onUpdate:modelValue":l[16]||(l[16]=l=>e.params.short_title=l)},null,8,["modelValue"])])),_:1})])),_:1}),x(G,{sm:24,md:12},{default:D((()=>[x(B,{label:"SEO标题"},{default:D((()=>[x(H,{modelValue:e.params.seo_title,"onUpdate:modelValue":l[17]||(l[17]=l=>e.params.seo_title=l)},null,8,["modelValue"])])),_:1})])),_:1}),x(G,{sm:24,md:12},{default:D((()=>[x(B,{label:"SEO关键词"},{default:D((()=>[x(H,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":l[18]||(l[18]=l=>e.params.seo_keywords=l)},null,8,["modelValue"])])),_:1})])),_:1}),x(G,{sm:24,md:12},{default:D((()=>[x(B,{label:"SEO描述"},{default:D((()=>[x(H,{modelValue:e.params.seo_description,"onUpdate:modelValue":l[19]||(l[19]=l=>e.params.seo_description=l)},null,8,["modelValue"])])),_:1})])),_:1}),x(G,{sm:24,md:12},{default:D((()=>[x(B,{label:"来源"},{default:D((()=>[x(H,{modelValue:e.params.source,"onUpdate:modelValue":l[20]||(l[20]=l=>e.params.source=l)},null,8,["modelValue"])])),_:1})])),_:1}),x(G,{sm:24,md:12},{default:D((()=>[x(B,{label:"作者"},{default:D((()=>[x(H,{modelValue:e.params.author,"onUpdate:modelValue":l[21]||(l[21]=l=>e.params.author=l)},null,8,["modelValue"])])),_:1})])),_:1}),x(G,{sm:24,md:12},{default:D((()=>[x(B,{label:"外链跳转"},{default:D((()=>[x(H,{modelValue:e.params.link,"onUpdate:modelValue":l[22]||(l[22]=l=>e.params.link=l),max:"120"},null,8,["modelValue"])])),_:1})])),_:1}),(k(!0),U(T,null,F(e.field,((e,l)=>(k(),N(G,{sm:24,md:12,lg:8,key:l},{default:D((()=>[x(B,{label:e.field_cname},{default:D((()=>["1"===e.field_type?(k(),N(H,{key:0,modelValue:e.field_values,"onUpdate:modelValue":l=>e.field_values=l,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):"2"===e.field_type?(k(),N(H,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.field_values,"onUpdate:modelValue":l=>e.field_values=l},null,8,["modelValue","onUpdate:modelValue"])):(k(),N(H,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:e.field_values,"onUpdate:modelValue":l=>e.field_values=l},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])])),_:2},1024)))),128)),x(G,{sm:24,md:12},{default:D((()=>[x(B,{label:"浏览数"},{default:D((()=>[x(H,{modelValue:e.params.pv,"onUpdate:modelValue":l[23]||(l[23]=l=>e.params.pv=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[P,1==e.activeIndex]]),x(B,null,{default:D((()=>[x(ee,{type:"primary",onClick:l[24]||(l[24]=e=>S.submit("params"))},{default:D((()=>[z("保存")])),_:1})])),_:1})])),_:1},8,["model"])),[[ce,e.loading]])])])}],["__scopeId","data-v-de6ac1d1"]]))}}}));