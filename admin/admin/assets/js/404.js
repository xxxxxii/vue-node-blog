import{f as o}from"./element-plus.js";import{u as s}from"./index.js";import{_ as r}from"./@qiun.js";import{o as i,c as t,g as e,Z as m,a as p,$ as l}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./copy-to-clipboard.js";import"./toggle-selection.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./vue-demi.js";import"./pinia-plugin-persist.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const a={methods:{logout(){s().logout(),location.reload()},goHome(){this.$router.replace({path:"/home"})}}},j={class:"fourZeroFour"},n=p("h1",null,"找不到了页面或者权限不足😭",-1),u=p("br",null,null,-1);const c=r(a,[["render",function(s,r,p,a,c,d){const f=o;return i(),t("div",j,[n,u,e(f,{size:"mini",onClick:d.goHome,type:"primary"},{default:m((()=>[l("去首页")])),_:1},8,["onClick"]),e(f,{size:"mini",onClick:d.logout,type:"primary"},{default:m((()=>[l("退出登录")])),_:1},8,["onClick"])])}]]);export{c as default};