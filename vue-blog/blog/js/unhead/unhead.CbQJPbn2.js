import{c as t}from"../hookable/hookable.cD8DNH7C.js";import{D as e,I as s,d as o,t as n,a,H as r,N as i,h as l,S as p,p as c,r as d,n as g}from"../@unhead/@unhead.AH35KKg0.js";const f=["templateParams","htmlAttrs","bodyAttrs"],u=o({hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach((e=>{t.props[e]&&(t.key=t.props[e],delete t.props[e])}));const e=n(t)||!!t.key&&`${t.tag}:${t.key}`;e&&(t._d=e)},"tags:resolve":function(t){const e={};t.tags.forEach((t=>{const s=(t.key?`${t.tag}:${t.key}`:t._d)||t._p,o=e[s];if(o){let n=null==t?void 0:t.tagDuplicateStrategy;if(!n&&f.includes(t.tag)&&(n="merge"),"merge"===n){const n=o.props;return["class","style"].forEach((e=>{n[e]&&(t.props[e]?("style"!==e||n[e].endsWith(";")||(n[e]+=";"),t.props[e]=`${n[e]} ${t.props[e]}`):t.props[e]=n[e])})),void(e[s].props={...n,...t.props})}if(t._e===o._e)return o._duped=o._duped||[],t._d=`${o._d}:${o._duped.length+1}`,void o._duped.push(t);if(a(t)>a(o))return}const n=Object.keys(t.props).length+(t.innerHTML?1:0)+(t.textContent?1:0);r.includes(t.tag)&&0===n?delete e[s]:e[s]=t}));const s=[];Object.values(e).forEach((t=>{const e=t._duped;delete t._duped,s.push(t),e&&s.push(...e)})),t.tags=s,t.tags=t.tags.filter((t=>!("meta"===t.tag&&(t.props.name||t.props.property)&&!t.props.content)))}}}),h=o({mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter((t=>["titleTemplate","templateParams","title"].includes(t.tag)&&"server"===t._m)).forEach((t=>{e[t.tag]=t.tag.startsWith("title")?t.textContent:t.props})),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}}),m=["script","link","bodyAttrs"],k=o((t=>({hooks:{"tags:resolve":function(e){for(const s of e.tags.filter((t=>m.includes(t.tag))))Object.entries(s.props).forEach((([e,o])=>{e.startsWith("on")&&"function"==typeof o&&(t.ssr&&i.includes(e)?s.props[e]=`this.dataset.${e}fired = true`:delete s.props[e],s._eventHandlers=s._eventHandlers||{},s._eventHandlers[e]=o)})),t.ssr&&s._eventHandlers&&(s.props.src||s.props.href)&&(s.key=s.key||l(s.props.src||s.props.href))},"dom:renderTag":function({$el:t,tag:e}){var s,o;for(const n of Object.keys((null==t?void 0:t.dataset)||{}).filter((t=>i.some((e=>`${e}fired`===t))))){const a=n.replace("fired","");null==(o=null==(s=e._eventHandlers)?void 0:s[a])||o.call(t,new Event(a.replace("on","")))}}}}))),v=["link","style","script","noscript"],y=o({hooks:{"tag:normalise":({tag:t})=>{t.key&&v.includes(t.tag)&&(t.props["data-hid"]=t._h=l(t.key))}}}),_=o({hooks:{"tags:resolve":t=>{const e=e=>{var s;return null==(s=t.tags.find((t=>t._d===e)))?void 0:s._p};for(const{prefix:s,offset:o}of p)for(const n of t.tags.filter((t=>"string"==typeof t.tagPriority&&t.tagPriority.startsWith(s)))){const t=e(n.tagPriority.replace(s,""));void 0!==t&&(n._p=t+o)}t.tags.sort(((t,e)=>t._p-e._p)).sort(((t,e)=>a(t)-a(e)))}}}),H={meta:"content",link:"href",htmlAttrs:"lang"},T=o((t=>({hooks:{"tags:resolve":e=>{var s;const{tags:o}=e,n=null==(s=o.find((t=>"title"===t.tag)))?void 0:s.textContent,a=o.findIndex((t=>"templateParams"===t.tag)),r=-1!==a?o[a].props:{},i=r.separator||"|";delete r.separator,r.pageTitle=c(r.pageTitle||n||"",r,i);for(const t of o.filter((t=>!1!==t.processTemplateParams))){const e=H[t.tag];e&&"string"==typeof t.props[e]?t.props[e]=c(t.props[e],r,i):(!0===t.processTemplateParams||["titleTemplate","title"].includes(t.tag))&&["innerHTML","textContent"].forEach((e=>{"string"==typeof t[e]&&(t[e]=c(t[e],r,i))}))}t._templateParams=r,t._separator=i,e.tags=o.filter((t=>"templateParams"!==t.tag))}}}))),x=o({hooks:{"tags:resolve":t=>{const{tags:e}=t;let s=e.findIndex((t=>"titleTemplate"===t.tag));const o=e.findIndex((t=>"title"===t.tag));if(-1!==o&&-1!==s){const t=d(e[s].textContent,e[o].textContent);null!==t?e[o].textContent=t||e[o].textContent:delete e[o]}else if(-1!==s){const t=d(e[s].textContent);null!==t&&(e[s].textContent=t,e[s].tag="title",s=-1)}-1!==s&&delete e[s],t.tags=e.filter(Boolean)}}}),$=o({hooks:{"tags:afterResolve":function(t){for(const e of t.tags)"string"==typeof e.innerHTML&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}});let C;function E(o={}){const n=function(e={}){const o=t();o.addHooks(e.hooks||{}),e.document=e.document||(s?document:void 0);const n=!e.document,a=()=>{p.dirty=!0,o.callHook("entries:updated",p)};let r=0,i=[];const l=[],p={plugins:l,dirty:!1,resolvedOptions:e,hooks:o,headEntries:()=>i,use(t){const e="function"==typeof t?t(p):t;e.key&&l.some((t=>t.key===e.key))||(l.push(e),b(e.mode,n)&&o.addHooks(e.hooks||{}))},push(t,e){null==e||delete e.head;const s={_i:r++,input:t,...e};return b(s.mode,n)&&(i.push(s),a()),{dispose(){i=i.filter((t=>t._i!==s._i)),o.callHook("entries:updated",p),a()},patch(t){i=i.map((e=>(e._i===s._i&&(e.input=s.input=t),e))),a()}}},async resolveTags(){const t={tags:[],entries:[...i]};await o.callHook("entries:resolve",t);for(const e of t.entries){const s=e.resolvedInput||e.input;if(e.resolvedInput=await(e.transform?e.transform(s):s),e.resolvedInput)for(const n of await g(e)){const s={tag:n,entry:e,resolvedOptions:p.resolvedOptions};await o.callHook("tag:normalise",s),t.tags.push(s.tag)}}return await o.callHook("tags:beforeResolve",t),await o.callHook("tags:resolve",t),await o.callHook("tags:afterResolve",t),t.tags},ssr:n};return[u,h,k,y,_,T,x,$,...(null==e?void 0:e.plugins)||[]].forEach((t=>p.use(t))),p.hooks.callHook("init",p),p}(o);return n.use(e()),C=n}function b(t,e){return!t||"server"===t&&e||"client"===t&&!e}function j(){return C}export{E as c,j as g};