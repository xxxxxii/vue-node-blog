System.register(["./copy-to-clipboard-legacy.js"],(function(n,t){"use strict";var e;return{setters:[n=>{e=n.g}],execute:function(){var t=!0,i=!1,c=!1;function r(n,t,e){var i=n.attrIndex(t),c=[t,e];i<0?n.attrPush(c):n.attrs[i]=c}function l(n,t){for(var e=n[t].level-1,i=t-1;i>=0;i--)if(n[i].level===e)return i;return-1}function o(n,t){return"inline"===n[t].type&&function(n){return"paragraph_open"===n.type}(n[t-1])&&function(n){return"list_item_open"===n.type}(n[t-2])&&function(n){return 0===n.content.indexOf("[ ] ")||0===n.content.indexOf("[x] ")||0===n.content.indexOf("[X] ")}(n[t])}function a(n,e){if(n.children.unshift(function(n,e){var i=new e("html_inline","",0),c=t?' disabled="" ':"";return 0===n.content.indexOf("[ ] ")?i.content='<input class="task-list-item-checkbox"'+c+'type="checkbox">':0!==n.content.indexOf("[x] ")&&0!==n.content.indexOf("[X] ")||(i.content='<input class="task-list-item-checkbox" checked=""'+c+'type="checkbox">'),i}(n,e)),n.children[1].content=n.children[1].content.slice(3),n.content=n.content.slice(3),i)if(c){n.children.pop();var r="task-item-"+Math.ceil(1e7*Math.random()-1e3);n.children[0].content=n.children[0].content.slice(0,-1)+' id="'+r+'">',n.children.push(function(n,t,e){var i=new e("html_inline","",0);return i.content='<label class="task-list-item-label" for="'+t+'">'+n+"</label>",i.attrs=[{for:t}],i}(n.content,r,e))}else n.children.unshift(function(n){var t=new n("html_inline","",0);return t.content="<label>",t}(e)),n.children.push(function(n){var t=new n("html_inline","",0);return t.content="</label>",t}(e))}n("T",e((function(n,e){e&&(t=!e.enabled,i=!!e.label,c=!!e.labelAfter),n.core.ruler.after("inline","github-task-lists",(function(n){for(var e=n.tokens,i=2;i<e.length;i++)o(e,i)&&(a(e[i],n.Token),r(e[i-2],"class","task-list-item"+(t?"":" enabled")),r(e[l(e,i-2)],"class","contains-task-list"))}))})))}}}));