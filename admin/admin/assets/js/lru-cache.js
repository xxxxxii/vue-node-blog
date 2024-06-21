var t,i,e,s,h,l,n,o,a,r,c,u,d,f,p,g,w,v,S,_,b,m,W,y,A,O,F,E,k,T,z,M,C,x,R,D,L,G,U,j,N,I,H,P,B,q,V,X,Y,J,K,Q,Z=Object.defineProperty,$=(t,i,e)=>(((t,i,e)=>{i in t?Z(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e})(t,"symbol"!=typeof i?i+"":i,e),e),tt=(t,i,e)=>{if(!i.has(t))throw TypeError("Cannot "+e)},it=(t,i,e)=>(tt(t,i,"read from private field"),e?e.call(t):i.get(t)),et=(t,i,e)=>{if(i.has(t))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(t):i.set(t,e)},st=(t,i,e,s)=>(tt(t,i,"write to private field"),s?s.call(t,e):i.set(t,e),e),ht=(t,i,e,s)=>({set _(s){st(t,i,s,e)},get _(){return it(t,i,s)}}),lt=(t,i,e)=>(tt(t,i,"access private method"),e);const nt="object"==typeof performance&&performance&&"function"==typeof performance.now?performance:Date,ot=new Set,at="object"==typeof process&&process?process:{},rt=(t,i,e,s)=>{"function"==typeof at.emitWarning?at.emitWarning(t,i,e,s):console.error("[".concat(e,"] ").concat(i,": ").concat(t))};let ct=globalThis.AbortController,ut=globalThis.AbortSignal;if(void 0===ct){ut=class{constructor(){$(this,"onabort"),$(this,"_onabort",[]),$(this,"reason"),$(this,"aborted",!1)}addEventListener(t,i){this._onabort.push(i)}},ct=class{constructor(){$(this,"signal",new ut),e()}abort(t){var i,e;if(!this.signal.aborted){this.signal.reason=t,this.signal.aborted=!0;for(const i of this.signal._onabort)i(t);null==(e=(i=this.signal).onabort)||e.call(i,t)}}};let i="1"!==(null==(t=at.env)?void 0:t.LRU_CACHE_IGNORE_AC_WARNING);const e=()=>{i&&(i=!1,rt("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.","NO_ABORT_CONTROLLER","ENOTSUP",e))}}const dt=t=>t&&t===Math.floor(t)&&t>0&&isFinite(t),ft=t=>dt(t)?t<=Math.pow(2,8)?Uint8Array:t<=Math.pow(2,16)?Uint16Array:t<=Math.pow(2,32)?Uint32Array:t<=Number.MAX_SAFE_INTEGER?pt:null:null;class pt extends Array{constructor(t){super(t),this.fill(0)}}const gt=class t{constructor(e,s){if($(this,"heap"),$(this,"length"),!it(t,i))throw new TypeError("instantiate Stack using Stack.create(n)");this.heap=new s(e),this.length=0}static create(e){const s=ft(e);if(!s)return[];st(t,i,!0);const h=new t(e,s);return st(t,i,!1),h}push(t){this.heap[this.length++]=t}pop(){return this.heap[--this.length]}};i=new WeakMap,et(gt,i,!1);let wt=gt;const vt=class t{constructor(i){et(this,A),et(this,z),et(this,D),et(this,G),et(this,j),et(this,H),et(this,B),et(this,V),et(this,Y),et(this,K),et(this,e,void 0),et(this,s,void 0),et(this,h,void 0),et(this,l,void 0),et(this,n,void 0),$(this,"ttl"),$(this,"ttlResolution"),$(this,"ttlAutopurge"),$(this,"updateAgeOnGet"),$(this,"updateAgeOnHas"),$(this,"allowStale"),$(this,"noDisposeOnSet"),$(this,"noUpdateTTL"),$(this,"maxEntrySize"),$(this,"sizeCalculation"),$(this,"noDeleteOnFetchRejection"),$(this,"noDeleteOnStaleGet"),$(this,"allowStaleOnFetchAbort"),$(this,"allowStaleOnFetchRejection"),$(this,"ignoreFetchAbort"),et(this,o,void 0),et(this,a,void 0),et(this,r,void 0),et(this,c,void 0),et(this,u,void 0),et(this,d,void 0),et(this,f,void 0),et(this,p,void 0),et(this,g,void 0),et(this,w,void 0),et(this,v,void 0),et(this,S,void 0),et(this,_,void 0),et(this,b,void 0),et(this,m,void 0),et(this,W,void 0),et(this,y,void 0),et(this,F,(()=>{})),et(this,E,(()=>{})),et(this,k,(()=>{})),et(this,T,(()=>!1)),et(this,C,(t=>{})),et(this,x,((t,i,e)=>{})),et(this,R,((t,i,e,s)=>{if(e||s)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");return 0})),$(this,I,"LRUCache");const{max:L=0,ttl:U,ttlResolution:N=1,ttlAutopurge:P,updateAgeOnGet:q,updateAgeOnHas:X,allowStale:J,dispose:Q,disposeAfter:Z,noDisposeOnSet:tt,noUpdateTTL:ht,maxSize:nt=0,maxEntrySize:at=0,sizeCalculation:ct,fetchMethod:ut,noDeleteOnFetchRejection:pt,noDeleteOnStaleGet:gt,allowStaleOnFetchRejection:vt,allowStaleOnFetchAbort:St,ignoreFetchAbort:_t}=i;if(0!==L&&!dt(L))throw new TypeError("max option must be a nonnegative integer");const bt=L?ft(L):Array;if(!bt)throw new Error("invalid max value: "+L);if(st(this,e,L),st(this,s,nt),this.maxEntrySize=at||it(this,s),this.sizeCalculation=ct,this.sizeCalculation){if(!it(this,s)&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if("function"!=typeof this.sizeCalculation)throw new TypeError("sizeCalculation set to non-function")}if(void 0!==ut&&"function"!=typeof ut)throw new TypeError("fetchMethod must be a function if specified");if(st(this,n,ut),st(this,W,!!ut),st(this,r,new Map),st(this,c,new Array(L).fill(void 0)),st(this,u,new Array(L).fill(void 0)),st(this,d,new bt(L)),st(this,f,new bt(L)),st(this,p,0),st(this,g,0),st(this,w,wt.create(L)),st(this,o,0),st(this,a,0),"function"==typeof Q&&st(this,h,Q),"function"==typeof Z?(st(this,l,Z),st(this,v,[])):(st(this,l,void 0),st(this,v,void 0)),st(this,m,!!it(this,h)),st(this,y,!!it(this,l)),this.noDisposeOnSet=!!tt,this.noUpdateTTL=!!ht,this.noDeleteOnFetchRejection=!!pt,this.allowStaleOnFetchRejection=!!vt,this.allowStaleOnFetchAbort=!!St,this.ignoreFetchAbort=!!_t,0!==this.maxEntrySize){if(0!==it(this,s)&&!dt(it(this,s)))throw new TypeError("maxSize must be a positive integer if specified");if(!dt(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");lt(this,z,M).call(this)}if(this.allowStale=!!J,this.noDeleteOnStaleGet=!!gt,this.updateAgeOnGet=!!q,this.updateAgeOnHas=!!X,this.ttlResolution=dt(N)||0===N?N:1,this.ttlAutopurge=!!P,this.ttl=U||0,this.ttl){if(!dt(this.ttl))throw new TypeError("ttl must be a positive integer if specified");lt(this,A,O).call(this)}if(0===it(this,e)&&0===this.ttl&&0===it(this,s))throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!it(this,e)&&!it(this,s)){const i="LRU_CACHE_UNBOUNDED";if((t=>!ot.has(t))(i)){ot.add(i);rt("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",i,t)}}}static unsafeExposeInternals(t){return{starts:it(t,_),ttls:it(t,b),sizes:it(t,S),keyMap:it(t,r),keyList:it(t,c),valList:it(t,u),next:it(t,d),prev:it(t,f),get head(){return it(t,p)},get tail(){return it(t,g)},free:it(t,w),isBackgroundFetch:i=>{var e;return lt(e=t,V,X).call(e,i)},backgroundFetch:(i,e,s,h)=>{var l;return lt(l=t,B,q).call(l,i,e,s,h)},moveToTail:i=>{var e;return lt(e=t,K,Q).call(e,i)},indexes:i=>{var e;return lt(e=t,D,L).call(e,i)},rindexes:i=>{var e;return lt(e=t,G,U).call(e,i)},isStale:i=>{var e;return it(e=t,T).call(e,i)}}}get max(){return it(this,e)}get maxSize(){return it(this,s)}get calculatedSize(){return it(this,a)}get size(){return it(this,o)}get fetchMethod(){return it(this,n)}get dispose(){return it(this,h)}get disposeAfter(){return it(this,l)}getRemainingTTL(t){return it(this,r).has(t)?1/0:0}*entries(){for(const t of lt(this,D,L).call(this))void 0===it(this,u)[t]||void 0===it(this,c)[t]||lt(this,V,X).call(this,it(this,u)[t])||(yield[it(this,c)[t],it(this,u)[t]])}*rentries(){for(const t of lt(this,G,U).call(this))void 0===it(this,u)[t]||void 0===it(this,c)[t]||lt(this,V,X).call(this,it(this,u)[t])||(yield[it(this,c)[t],it(this,u)[t]])}*keys(){for(const t of lt(this,D,L).call(this)){const i=it(this,c)[t];void 0===i||lt(this,V,X).call(this,it(this,u)[t])||(yield i)}}*rkeys(){for(const t of lt(this,G,U).call(this)){const i=it(this,c)[t];void 0===i||lt(this,V,X).call(this,it(this,u)[t])||(yield i)}}*values(){for(const t of lt(this,D,L).call(this)){void 0===it(this,u)[t]||lt(this,V,X).call(this,it(this,u)[t])||(yield it(this,u)[t])}}*rvalues(){for(const t of lt(this,G,U).call(this)){void 0===it(this,u)[t]||lt(this,V,X).call(this,it(this,u)[t])||(yield it(this,u)[t])}}[Symbol.iterator](){return this.entries()}find(t,i={}){for(const e of lt(this,D,L).call(this)){const s=it(this,u)[e],h=lt(this,V,X).call(this,s)?s.__staleWhileFetching:s;if(void 0!==h&&t(h,it(this,c)[e],this))return this.get(it(this,c)[e],i)}}forEach(t,i=this){for(const e of lt(this,D,L).call(this)){const s=it(this,u)[e],h=lt(this,V,X).call(this,s)?s.__staleWhileFetching:s;void 0!==h&&t.call(i,h,it(this,c)[e],this)}}rforEach(t,i=this){for(const e of lt(this,G,U).call(this)){const s=it(this,u)[e],h=lt(this,V,X).call(this,s)?s.__staleWhileFetching:s;void 0!==h&&t.call(i,h,it(this,c)[e],this)}}purgeStale(){let t=!1;for(const i of lt(this,G,U).call(this,{allowStale:!0}))it(this,T).call(this,i)&&(this.delete(it(this,c)[i]),t=!0);return t}info(t){const i=it(this,r).get(t);if(void 0===i)return;const e=it(this,u)[i],s=lt(this,V,X).call(this,e)?e.__staleWhileFetching:e;if(void 0===s)return;const h={value:s};if(it(this,b)&&it(this,_)){const t=it(this,b)[i],e=it(this,_)[i];if(t&&e){const i=t-(nt.now()-e);h.ttl=i,h.start=Date.now()}}return it(this,S)&&(h.size=it(this,S)[i]),h}dump(){const t=[];for(const i of lt(this,D,L).call(this,{allowStale:!0})){const e=it(this,c)[i],s=it(this,u)[i],h=lt(this,V,X).call(this,s)?s.__staleWhileFetching:s;if(void 0===h||void 0===e)continue;const l={value:h};if(it(this,b)&&it(this,_)){l.ttl=it(this,b)[i];const t=nt.now()-it(this,_)[i];l.start=Math.floor(Date.now()-t)}it(this,S)&&(l.size=it(this,S)[i]),t.unshift([e,l])}return t}load(t){this.clear();for(const[i,e]of t){if(e.start){const t=Date.now()-e.start;e.start=nt.now()-t}this.set(i,e.value,e)}}set(t,i,s={}){var n,a,p,S,_;if(void 0===i)return this.delete(t),this;const{ttl:F=this.ttl,start:T,noDisposeOnSet:z=this.noDisposeOnSet,sizeCalculation:M=this.sizeCalculation,status:D}=s;let{noUpdateTTL:L=this.noUpdateTTL}=s;const G=it(this,R).call(this,t,i,s.size||0,M);if(this.maxEntrySize&&G>this.maxEntrySize)return D&&(D.set="miss",D.maxEntrySizeExceeded=!0),this.delete(t),this;let U=0===it(this,o)?void 0:it(this,r).get(t);if(void 0===U)U=0===it(this,o)?it(this,g):0!==it(this,w).length?it(this,w).pop():it(this,o)===it(this,e)?lt(this,H,P).call(this,!1):it(this,o),it(this,c)[U]=t,it(this,u)[U]=i,it(this,r).set(t,U),it(this,d)[it(this,g)]=U,it(this,f)[U]=it(this,g),st(this,g,U),ht(this,o)._++,it(this,x).call(this,U,G,D),D&&(D.set="add"),L=!1;else{lt(this,K,Q).call(this,U);const e=it(this,u)[U];if(i!==e){if(it(this,W)&&lt(this,V,X).call(this,e)){e.__abortController.abort(new Error("replaced"));const{__staleWhileFetching:i}=e;void 0===i||z||(it(this,m)&&(null==(n=it(this,h))||n.call(this,i,t,"set")),it(this,y)&&(null==(a=it(this,v))||a.push([i,t,"set"])))}else z||(it(this,m)&&(null==(p=it(this,h))||p.call(this,e,t,"set")),it(this,y)&&(null==(S=it(this,v))||S.push([e,t,"set"])));if(it(this,C).call(this,U),it(this,x).call(this,U,G,D),it(this,u)[U]=i,D){D.set="replace";const t=e&&lt(this,V,X).call(this,e)?e.__staleWhileFetching:e;void 0!==t&&(D.oldValue=t)}}else D&&(D.set="update")}if(0===F||it(this,b)||lt(this,A,O).call(this),it(this,b)&&(L||it(this,k).call(this,U,F,T),D&&it(this,E).call(this,D,U)),!z&&it(this,y)&&it(this,v)){const t=it(this,v);let i;for(;i=null==t?void 0:t.shift();)null==(_=it(this,l))||_.call(this,...i)}return this}pop(){var t;try{for(;it(this,o);){const t=it(this,u)[it(this,p)];if(lt(this,H,P).call(this,!0),lt(this,V,X).call(this,t)){if(t.__staleWhileFetching)return t.__staleWhileFetching}else if(void 0!==t)return t}}finally{if(it(this,y)&&it(this,v)){const i=it(this,v);let e;for(;e=null==i?void 0:i.shift();)null==(t=it(this,l))||t.call(this,...e)}}}has(t,i={}){const{updateAgeOnHas:e=this.updateAgeOnHas,status:s}=i,h=it(this,r).get(t);if(void 0!==h){const t=it(this,u)[h];if(lt(this,V,X).call(this,t)&&void 0===t.__staleWhileFetching)return!1;if(!it(this,T).call(this,h))return e&&it(this,F).call(this,h),s&&(s.has="hit",it(this,E).call(this,s,h)),!0;s&&(s.has="stale",it(this,E).call(this,s,h))}else s&&(s.has="miss");return!1}peek(t,i={}){const{allowStale:e=this.allowStale}=i,s=it(this,r).get(t);if(void 0===s||!e&&it(this,T).call(this,s))return;const h=it(this,u)[s];return lt(this,V,X).call(this,h)?h.__staleWhileFetching:h}async fetch(t,i={}){const{allowStale:e=this.allowStale,updateAgeOnGet:s=this.updateAgeOnGet,noDeleteOnStaleGet:h=this.noDeleteOnStaleGet,ttl:l=this.ttl,noDisposeOnSet:n=this.noDisposeOnSet,size:o=0,sizeCalculation:a=this.sizeCalculation,noUpdateTTL:c=this.noUpdateTTL,noDeleteOnFetchRejection:d=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:f=this.allowStaleOnFetchRejection,ignoreFetchAbort:p=this.ignoreFetchAbort,allowStaleOnFetchAbort:g=this.allowStaleOnFetchAbort,context:w,forceRefresh:v=!1,status:S,signal:_}=i;if(!it(this,W))return S&&(S.fetch="get"),this.get(t,{allowStale:e,updateAgeOnGet:s,noDeleteOnStaleGet:h,status:S});const b={allowStale:e,updateAgeOnGet:s,noDeleteOnStaleGet:h,ttl:l,noDisposeOnSet:n,size:o,sizeCalculation:a,noUpdateTTL:c,noDeleteOnFetchRejection:d,allowStaleOnFetchRejection:f,allowStaleOnFetchAbort:g,ignoreFetchAbort:p,status:S,signal:_};let m=it(this,r).get(t);if(void 0===m){S&&(S.fetch="miss");const i=lt(this,B,q).call(this,t,m,b,w);return i.__returned=i}{const i=it(this,u)[m];if(lt(this,V,X).call(this,i)){const t=e&&void 0!==i.__staleWhileFetching;return S&&(S.fetch="inflight",t&&(S.returnedStale=!0)),t?i.__staleWhileFetching:i.__returned=i}const h=it(this,T).call(this,m);if(!v&&!h)return S&&(S.fetch="hit"),lt(this,K,Q).call(this,m),s&&it(this,F).call(this,m),S&&it(this,E).call(this,S,m),i;const l=lt(this,B,q).call(this,t,m,b,w),n=void 0!==l.__staleWhileFetching&&e;return S&&(S.fetch=h?"stale":"refresh",n&&h&&(S.returnedStale=!0)),n?l.__staleWhileFetching:l.__returned=l}}get(t,i={}){const{allowStale:e=this.allowStale,updateAgeOnGet:s=this.updateAgeOnGet,noDeleteOnStaleGet:h=this.noDeleteOnStaleGet,status:l}=i,n=it(this,r).get(t);if(void 0!==n){const i=it(this,u)[n],o=lt(this,V,X).call(this,i);return l&&it(this,E).call(this,l,n),it(this,T).call(this,n)?(l&&(l.get="stale"),o?(l&&e&&void 0!==i.__staleWhileFetching&&(l.returnedStale=!0),e?i.__staleWhileFetching:void 0):(h||this.delete(t),l&&e&&(l.returnedStale=!0),e?i:void 0)):(l&&(l.get="hit"),o?i.__staleWhileFetching:(lt(this,K,Q).call(this,n),s&&it(this,F).call(this,n),i))}l&&(l.get="miss")}delete(t){var i,e,s,n;let a=!1;if(0!==it(this,o)){const s=it(this,r).get(t);if(void 0!==s)if(a=!0,1===it(this,o))this.clear();else{it(this,C).call(this,s);const l=it(this,u)[s];if(lt(this,V,X).call(this,l)?l.__abortController.abort(new Error("deleted")):(it(this,m)||it(this,y))&&(it(this,m)&&(null==(i=it(this,h))||i.call(this,l,t,"delete")),it(this,y)&&(null==(e=it(this,v))||e.push([l,t,"delete"]))),it(this,r).delete(t),it(this,c)[s]=void 0,it(this,u)[s]=void 0,s===it(this,g))st(this,g,it(this,f)[s]);else if(s===it(this,p))st(this,p,it(this,d)[s]);else{const t=it(this,f)[s];it(this,d)[t]=it(this,d)[s];const i=it(this,d)[s];it(this,f)[i]=it(this,f)[s]}ht(this,o)._--,it(this,w).push(s)}}if(it(this,y)&&(null==(s=it(this,v))?void 0:s.length)){const t=it(this,v);let i;for(;i=null==t?void 0:t.shift();)null==(n=it(this,l))||n.call(this,...i)}return a}clear(){var t,i,e;for(const s of lt(this,G,U).call(this,{allowStale:!0})){const e=it(this,u)[s];if(lt(this,V,X).call(this,e))e.__abortController.abort(new Error("deleted"));else{const l=it(this,c)[s];it(this,m)&&(null==(t=it(this,h))||t.call(this,e,l,"delete")),it(this,y)&&(null==(i=it(this,v))||i.push([e,l,"delete"]))}}if(it(this,r).clear(),it(this,u).fill(void 0),it(this,c).fill(void 0),it(this,b)&&it(this,_)&&(it(this,b).fill(0),it(this,_).fill(0)),it(this,S)&&it(this,S).fill(0),st(this,p,0),st(this,g,0),it(this,w).length=0,st(this,a,0),st(this,o,0),it(this,y)&&it(this,v)){const t=it(this,v);let i;for(;i=null==t?void 0:t.shift();)null==(e=it(this,l))||e.call(this,...i)}}};I=Symbol.toStringTag,e=new WeakMap,s=new WeakMap,h=new WeakMap,l=new WeakMap,n=new WeakMap,o=new WeakMap,a=new WeakMap,r=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap,w=new WeakMap,v=new WeakMap,S=new WeakMap,_=new WeakMap,b=new WeakMap,m=new WeakMap,W=new WeakMap,y=new WeakMap,A=new WeakSet,O=function(){const t=new pt(it(this,e)),i=new pt(it(this,e));st(this,b,t),st(this,_,i),st(this,k,((e,s,h=nt.now())=>{if(i[e]=0!==s?h:0,t[e]=s,0!==s&&this.ttlAutopurge){const t=setTimeout((()=>{it(this,T).call(this,e)&&this.delete(it(this,c)[e])}),s+1);t.unref&&t.unref()}})),st(this,F,(e=>{i[e]=0!==t[e]?nt.now():0})),st(this,E,((e,l)=>{if(t[l]){const n=t[l],o=i[l];if(!n||!o)return;e.ttl=n,e.start=o,e.now=s||h();const a=e.now-o;e.remainingTTL=n-a}}));let s=0;const h=()=>{const t=nt.now();if(this.ttlResolution>0){s=t;const i=setTimeout((()=>s=0),this.ttlResolution);i.unref&&i.unref()}return t};this.getRemainingTTL=e=>{const l=it(this,r).get(e);if(void 0===l)return 0;const n=t[l],o=i[l];if(!n||!o)return 1/0;return n-((s||h())-o)},st(this,T,(e=>{const l=i[e],n=t[e];return!!n&&!!l&&(s||h())-l>n}))},F=new WeakMap,E=new WeakMap,k=new WeakMap,T=new WeakMap,z=new WeakSet,M=function(){const t=new pt(it(this,e));st(this,a,0),st(this,S,t),st(this,C,(i=>{st(this,a,it(this,a)-t[i]),t[i]=0})),st(this,R,((t,i,e,s)=>{if(lt(this,V,X).call(this,i))return 0;if(!dt(e)){if(!s)throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");if("function"!=typeof s)throw new TypeError("sizeCalculation must be a function");if(e=s(i,t),!dt(e))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}return e})),st(this,x,((i,e,h)=>{if(t[i]=e,it(this,s)){const e=it(this,s)-t[i];for(;it(this,a)>e;)lt(this,H,P).call(this,!0)}st(this,a,it(this,a)+t[i]),h&&(h.entrySize=e,h.totalCalculatedSize=it(this,a))}))},C=new WeakMap,x=new WeakMap,R=new WeakMap,D=new WeakSet,L=function*({allowStale:t=this.allowStale}={}){if(it(this,o))for(let i=it(this,g);lt(this,j,N).call(this,i)&&(!t&&it(this,T).call(this,i)||(yield i),i!==it(this,p));)i=it(this,f)[i]},G=new WeakSet,U=function*({allowStale:t=this.allowStale}={}){if(it(this,o))for(let i=it(this,p);lt(this,j,N).call(this,i)&&(!t&&it(this,T).call(this,i)||(yield i),i!==it(this,g));)i=it(this,d)[i]},j=new WeakSet,N=function(t){return void 0!==t&&it(this,r).get(it(this,c)[t])===t},H=new WeakSet,P=function(t){var i,e;const s=it(this,p),l=it(this,c)[s],n=it(this,u)[s];return it(this,W)&&lt(this,V,X).call(this,n)?n.__abortController.abort(new Error("evicted")):(it(this,m)||it(this,y))&&(it(this,m)&&(null==(i=it(this,h))||i.call(this,n,l,"evict")),it(this,y)&&(null==(e=it(this,v))||e.push([n,l,"evict"]))),it(this,C).call(this,s),t&&(it(this,c)[s]=void 0,it(this,u)[s]=void 0,it(this,w).push(s)),1===it(this,o)?(st(this,p,st(this,g,0)),it(this,w).length=0):st(this,p,it(this,d)[s]),it(this,r).delete(l),ht(this,o)._--,s},B=new WeakSet,q=function(t,i,e,s){const h=void 0===i?void 0:it(this,u)[i];if(lt(this,V,X).call(this,h))return h;const l=new ct,{signal:o}=e;null==o||o.addEventListener("abort",(()=>l.abort(o.reason)),{signal:l.signal});const a={signal:l.signal,options:e,context:s},c=(s,h=!1)=>{const{aborted:n}=l.signal,o=e.ignoreFetchAbort&&void 0!==s;if(e.status&&(n&&!h?(e.status.fetchAborted=!0,e.status.fetchError=l.signal.reason,o&&(e.status.fetchAbortIgnored=!0)):e.status.fetchResolved=!0),n&&!o&&!h)return d(l.signal.reason);const r=f;return it(this,u)[i]===f&&(void 0===s?r.__staleWhileFetching?it(this,u)[i]=r.__staleWhileFetching:this.delete(t):(e.status&&(e.status.fetchUpdated=!0),this.set(t,s,a.options))),s},d=s=>{const{aborted:h}=l.signal,n=h&&e.allowStaleOnFetchAbort,o=n||e.allowStaleOnFetchRejection,a=o||e.noDeleteOnFetchRejection,r=f;if(it(this,u)[i]===f){!a||void 0===r.__staleWhileFetching?this.delete(t):n||(it(this,u)[i]=r.__staleWhileFetching)}if(o)return e.status&&void 0!==r.__staleWhileFetching&&(e.status.returnedStale=!0),r.__staleWhileFetching;if(r.__returned===r)throw s};e.status&&(e.status.fetchDispatched=!0);const f=new Promise(((i,s)=>{var o;const r=null==(o=it(this,n))?void 0:o.call(this,t,h,a);r&&r instanceof Promise&&r.then((t=>i(void 0===t?void 0:t)),s),l.signal.addEventListener("abort",(()=>{e.ignoreFetchAbort&&!e.allowStaleOnFetchAbort||(i(void 0),e.allowStaleOnFetchAbort&&(i=t=>c(t,!0)))}))})).then(c,(t=>(e.status&&(e.status.fetchRejected=!0,e.status.fetchError=t),d(t)))),p=Object.assign(f,{__abortController:l,__staleWhileFetching:h,__returned:void 0});return void 0===i?(this.set(t,p,{...a.options,status:void 0}),i=it(this,r).get(t)):it(this,u)[i]=p,p},V=new WeakSet,X=function(t){if(!it(this,W))return!1;const i=t;return!!i&&i instanceof Promise&&i.hasOwnProperty("__staleWhileFetching")&&i.__abortController instanceof ct},Y=new WeakSet,J=function(t,i){it(this,f)[i]=t,it(this,d)[t]=i},K=new WeakSet,Q=function(t){t!==it(this,g)&&(t===it(this,p)?st(this,p,it(this,d)[t]):lt(this,Y,J).call(this,it(this,f)[t],it(this,d)[t]),lt(this,Y,J).call(this,it(this,g),t),st(this,g,t))};let St=vt;export{St as L};