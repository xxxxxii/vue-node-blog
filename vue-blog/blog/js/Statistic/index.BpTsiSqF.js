import{q as t}from"../vue3-apexcharts/vue3-apexcharts.B0Wu495k.js";import{u as s}from"../index.znN4wgHg.js";import{l as e,p as a}from"../vuetify/vuetify.B5LN5fWA.js";import{d as o,f as r,a3 as i,a4 as n,a5 as p,aa as l,e as d,a6 as m,$ as h,u as c}from"../@vue/@vue.se5cR7rz.js";import"../pinia/pinia.BbTWbE4q.js";import"../vue-demi/vue-demi.Dq6ymT-8.js";import"../vue-router/vue-router.mGcueMCj.js";/* empty css                   */import"../@codemirror/@codemirror.D_c5iCkF.js";import"../axios/axios.CURSphCx.js";import"../qs/qs.zgy740DY.js";import"../call-bind/call-bind.B6-k6Qo9.js";import"../get-intrinsic/get-intrinsic.DbCd8zmJ.js";import"../es-errors/es-errors.Bza6HHKb.js";import"../has-symbols/has-symbols.BjfDv0FJ.js";import"../has-proto/has-proto.DxUgyt-t.js";import"../function-bind/function-bind.Ckw9YnhN.js";import"../hasown/hasown.DsboJJ18.js";import"../set-function-length/set-function-length.CD3sdOQl.js";import"../define-data-property/define-data-property.DLMKZuvS.js";import"../es-define-property/es-define-property.FRbcrN3S.js";import"../gopd/gopd.j5l6Efxt.js";import"../has-property-descriptors/has-property-descriptors.CY2YXBa2.js";import"../side-channel/side-channel.C0C-PkVA.js";import"../object-inspect/object-inspect.C5JAGb_X.js";import"../@unhead/@unhead.AH35KKg0.js";import"../unhead/unhead.CbQJPbn2.js";import"../hookable/hookable.cD8DNH7C.js";const u={class:"d-flex jsb"},j=l("div",{class:"text-h6"},"Statistics",-1),f={class:"d-flex than-label mt-2"},x=l("div",{class:"ml-1"},"than last month",-1),v={class:"d-flex jsb mt-5"},y={class:"text-h4"},b=o({__name:"index",props:{chartData:{default:[47,23,42,30,47,75,65]},chartColor:{},up:{type:Boolean,default:!0},value:{default:"2,524"}},setup(o){const b=s(),g=o,w=r((()=>({chart:{type:"area",width:160,height:60,sparkline:{enabled:!0}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(){return""}}},marker:{show:!1}},colors:[g.chartColor?g.chartColor:b.settings.primary]}))),k=r((()=>[{data:g.chartData}]));return(s,o)=>(i(),n(a,{class:"tjjj pa-4"},{default:p((()=>[l("div",u,[j,d(e,{icon:"mdi-dots-horizontal"})]),l("div",f,[s.up?(i(),n(e,{key:0,size:"small",class:m(["than-text",{"than-text-green":!s.up}]),icon:"mdi-arrow-up-bold"},null,8,["class"])):(i(),n(e,{key:1,size:"small",class:m(["than-text",{"than-text-green":!s.up}]),icon:"mdi-arrow-down-bold"},null,8,["class"])),l("div",{class:m(["than-text",{"than-text-green":!s.up}]),style:{"font-size":"15px","font-weight":"500"}}," 20 ",2),l("div",{class:m(["than-text",{"than-text-green":!s.up}]),style:{"font-size":"15px","font-weight":"500"}}," % ",2),x]),l("div",v,[l("div",y,h(s.value),1),d(c(t),{type:"area",height:"60",width:"160",options:w.value,series:k.value},null,8,["options","series"])])])),_:1}))}});export{b as default};