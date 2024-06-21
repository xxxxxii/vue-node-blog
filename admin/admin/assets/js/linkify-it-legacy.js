System.register(["./uc.micro-legacy.js"],(function(t,_){"use strict";var e,s,r,i;return{setters:[t=>{e=t.A,s=t.C,r=t.Z,i=t.P}],execute:function(){function _(t){return Array.prototype.slice.call(arguments,1).forEach((function(_){_&&Object.keys(_).forEach((function(e){t[e]=_[e]}))})),t}function c(t){return Object.prototype.toString.call(t)}function n(t){return"[object Function]"===c(t)}function o(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}t("L",f);const h={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1},l={"http:":{validate:function(t,_,e){const s=t.slice(_);return e.re.http||(e.re.http=new RegExp("^\\/\\/"+e.re.src_auth+e.re.src_host_port_strict+e.re.src_path,"i")),e.re.http.test(s)?s.match(e.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,_,e){const s=t.slice(_);return e.re.no_http||(e.re.no_http=new RegExp("^"+e.re.src_auth+"(?:localhost|(?:(?:"+e.re.src_domain+")\\.)+"+e.re.src_domain_root+")"+e.re.src_port+e.re.src_host_terminator+e.re.src_path,"i")),e.re.no_http.test(s)?_>=3&&":"===t[_-3]||_>=3&&"/"===t[_-3]?0:s.match(e.re.no_http)[0].length:0}},"mailto:":{validate:function(t,_,e){const s=t.slice(_);return e.re.mailto||(e.re.mailto=new RegExp("^"+e.re.src_email_name+"@"+e.re.src_host_strict,"i")),e.re.mailto.test(s)?s.match(e.re.mailto)[0].length:0}}},a="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",u="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function p(t){const _=t.re=function(t){const _={};t=t||{},_.src_Any=e.source,_.src_Cc=s.source,_.src_Z=r.source,_.src_P=i.source,_.src_ZPCc=[_.src_Z,_.src_P,_.src_Cc].join("|"),_.src_ZCc=[_.src_Z,_.src_Cc].join("|");const c="[><｜]";return _.src_pseudo_letter="(?:(?![><｜]|"+_.src_ZPCc+")"+_.src_Any+")",_.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",_.src_auth="(?:(?:(?!"+_.src_ZCc+"|[@/\\[\\]()]).)+@)?",_.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",_.src_host_terminator="(?=$|[><｜]|"+_.src_ZPCc+")(?!"+(t["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+_.src_ZPCc+"))",_.src_path="(?:[/?#](?:(?!"+_.src_ZCc+"|"+c+"|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!"+_.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+_.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+_.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+_.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+_.src_ZCc+"|[']).)+\\'|\\'(?="+_.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+_.src_ZCc+"|[.]|$)|"+(t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+_.src_ZCc+"|$)|;(?!"+_.src_ZCc+"|$)|\\!+(?!"+_.src_ZCc+"|[!]|$)|\\?(?!"+_.src_ZCc+"|[?]|$))+|\\/)?",_.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',_.src_xn="xn--[a-z0-9\\-]{1,59}",_.src_domain_root="(?:"+_.src_xn+"|"+_.src_pseudo_letter+"{1,63})",_.src_domain="(?:"+_.src_xn+"|(?:"+_.src_pseudo_letter+")|(?:"+_.src_pseudo_letter+"(?:-|"+_.src_pseudo_letter+"){0,61}"+_.src_pseudo_letter+"))",_.src_host="(?:(?:(?:(?:"+_.src_domain+")\\.)*"+_.src_domain+"))",_.tpl_host_fuzzy="(?:"+_.src_ip4+"|(?:(?:(?:"+_.src_domain+")\\.)+(?:%TLDS%)))",_.tpl_host_no_ip_fuzzy="(?:(?:(?:"+_.src_domain+")\\.)+(?:%TLDS%))",_.src_host_strict=_.src_host+_.src_host_terminator,_.tpl_host_fuzzy_strict=_.tpl_host_fuzzy+_.src_host_terminator,_.src_host_port_strict=_.src_host+_.src_port+_.src_host_terminator,_.tpl_host_port_fuzzy_strict=_.tpl_host_fuzzy+_.src_port+_.src_host_terminator,_.tpl_host_port_no_ip_fuzzy_strict=_.tpl_host_no_ip_fuzzy+_.src_port+_.src_host_terminator,_.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+_.src_ZPCc+"|>|$))",_.tpl_email_fuzzy='(^|[><｜]|"|\\(|'+_.src_ZCc+")("+_.src_email_name+"@"+_.tpl_host_fuzzy_strict+")",_.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+_.src_ZPCc+"))((?![$+<=>^`|｜])"+_.tpl_host_port_fuzzy_strict+_.src_path+")",_.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+_.src_ZPCc+"))((?![$+<=>^`|｜])"+_.tpl_host_port_no_ip_fuzzy_strict+_.src_path+")",_}(t.__opts__),h=t.__tlds__.slice();function l(t){return t.replace("%TLDS%",_.src_tlds)}t.onCompile(),t.__tlds_replaced__||h.push(a),h.push(_.src_xn),_.src_tlds=h.join("|"),_.email_fuzzy=RegExp(l(_.tpl_email_fuzzy),"i"),_.link_fuzzy=RegExp(l(_.tpl_link_fuzzy),"i"),_.link_no_ip_fuzzy=RegExp(l(_.tpl_link_no_ip_fuzzy),"i"),_.host_fuzzy_test=RegExp(l(_.tpl_host_fuzzy_test),"i");const u=[];function p(t,_){throw new Error('(LinkifyIt) Invalid schema "'+t+'": '+_)}t.__compiled__={},Object.keys(t.__schemas__).forEach((function(_){const e=t.__schemas__[_];if(null===e)return;const s={validate:null,link:null};if(t.__compiled__[_]=s,"[object Object]"===c(e))return function(t){return"[object RegExp]"===c(t)}(e.validate)?s.validate=function(t){return function(_,e){const s=_.slice(e);return t.test(s)?s.match(t)[0].length:0}}(e.validate):n(e.validate)?s.validate=e.validate:p(_,e),void(n(e.normalize)?s.normalize=e.normalize:e.normalize?p(_,e):s.normalize=function(t,_){_.normalize(t)});!function(t){return"[object String]"===c(t)}(e)?p(_,e):u.push(_)})),u.forEach((function(_){t.__compiled__[t.__schemas__[_]]&&(t.__compiled__[_].validate=t.__compiled__[t.__schemas__[_]].validate,t.__compiled__[_].normalize=t.__compiled__[t.__schemas__[_]].normalize)})),t.__compiled__[""]={validate:null,normalize:function(t,_){_.normalize(t)}};const m=Object.keys(t.__compiled__).filter((function(_){return _.length>0&&t.__compiled__[_]})).map(o).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+_.src_ZPCc+"))("+m+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+_.src_ZPCc+"))("+m+")","ig"),t.re.schema_at_start=RegExp("^"+t.re.schema_search.source,"i"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),function(t){t.__index__=-1,t.__text_cache__=""}(t)}function m(t,_){const e=t.__index__,s=t.__last_index__,r=t.__text_cache__.slice(e,s);this.schema=t.__schema__.toLowerCase(),this.index=e+_,this.lastIndex=s+_,this.raw=r,this.text=r,this.url=r}function d(t,_){const e=new m(t,_);return t.__compiled__[e.schema].normalize(e,t),e}function f(t,e){if(!(this instanceof f))return new f(t,e);var s;e||(s=t,Object.keys(s||{}).reduce((function(t,_){return t||h.hasOwnProperty(_)}),!1)&&(e=t,t={})),this.__opts__=_({},h,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=_({},l,t),this.__compiled__={},this.__tlds__=u,this.__tlds_replaced__=!1,this.re={},p(this)}f.prototype.add=function(t,_){return this.__schemas__[t]=_,p(this),this},f.prototype.set=function(t){return this.__opts__=_(this.__opts__,t),this},f.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;let _,e,s,r,i,c,n,o,h;if(this.re.schema_test.test(t))for(n=this.re.schema_search,n.lastIndex=0;null!==(_=n.exec(t));)if(r=this.testSchemaAt(t,_[2],n.lastIndex),r){this.__schema__=_[2],this.__index__=_.index+_[1].length,this.__last_index__=_.index+_[0].length+r;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(o=t.search(this.re.host_fuzzy_test),o>=0&&(this.__index__<0||o<this.__index__)&&null!==(e=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(i=e.index+e[1].length,(this.__index__<0||i<this.__index__)&&(this.__schema__="",this.__index__=i,this.__last_index__=e.index+e[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(h=t.indexOf("@"),h>=0&&null!==(s=t.match(this.re.email_fuzzy))&&(i=s.index+s[1].length,c=s.index+s[0].length,(this.__index__<0||i<this.__index__||i===this.__index__&&c>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=i,this.__last_index__=c))),this.__index__>=0},f.prototype.pretest=function(t){return this.re.pretest.test(t)},f.prototype.testSchemaAt=function(t,_,e){return this.__compiled__[_.toLowerCase()]?this.__compiled__[_.toLowerCase()].validate(t,e,this):0},f.prototype.match=function(t){const _=[];let e=0;this.__index__>=0&&this.__text_cache__===t&&(_.push(d(this,e)),e=this.__last_index__);let s=e?t.slice(e):t;for(;this.test(s);)_.push(d(this,e)),s=s.slice(this.__last_index__),e+=this.__last_index__;return _.length?_:null},f.prototype.matchAtStart=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return null;const _=this.re.schema_at_start.exec(t);if(!_)return null;const e=this.testSchemaAt(t,_[2],_[0].length);return e?(this.__schema__=_[2],this.__index__=_.index+_[1].length,this.__last_index__=_.index+_[0].length+e,d(this,0)):null},f.prototype.tlds=function(t,_){return t=Array.isArray(t)?t:[t],_?(this.__tlds__=this.__tlds__.concat(t).sort().filter((function(t,_,e){return t!==e[_-1]})).reverse(),p(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,p(this),this)},f.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),"mailto:"!==t.schema||/^mailto:/i.test(t.url)||(t.url="mailto:"+t.url)},f.prototype.onCompile=function(){}}}}));