/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
;(function(e, t) {
    var n = e.jQuery || e.Cowboy || (e.Cowboy = {}),
        r;
    n.throttle = r = function(e, r, i, s) {
        function a() {
            function p() {
                u = +(new Date), i.apply(n, l)
            }

            function v() {
                o = t
            }
            var n = this,
                a = +(new Date) - u,
                l = arguments;
            s && !o && p(), o && clearTimeout(o), s === t && a > e ? p() : r !== !0 && (o = setTimeout(s ? v : p, s === t ? e - a : e))
        }
        var o, u = 0;
        return typeof r != "boolean" && (s = i, i = r, r = t), n.guid && (a.guid = i.guid = i.guid || n.guid++), a
    }, n.debounce = function(e, n, i) {
        return i === t ? r(e, n, !1) : r(e, i, n !== !1)
    }
})(this);
(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function i(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function s(t,n){var s=t.type,o,u,a,f,l,c,h,p,d;t=e.Event(t),t.type=n,o=t.originalEvent,u=e.event.props,s.search(/^(mouse|click)/)>-1&&(u=L);if(o)for(h=u.length,f;h;)f=u[--h],t[f]=o[f];s.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(s.search(/^touch/)!==-1){a=i(o),s=a.touches,l=a.changedTouches,c=s&&s.length?s[0]:l&&l.length?l[0]:r;if(c)for(p=0,d=C.length;p<d;p++)f=C[p],t[f]=c[f]}return t}function o(t){var n={},r,i;while(t){r=e.data(t,x);for(i in r)r[i]&&(n[i]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function u(t,n){var r;while(t){r=e.data(t,x);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function a(){B=!1}function f(){B=!0}function l(){q=0,P.length=0,H=!1,f()}function c(){a()}function h(){p(),O=setTimeout(function(){O=0,l()},e.vmouse.resetTimerDuration)}function p(){O&&(clearTimeout(O),O=0)}function d(t,n,r){var i;if(r&&r[t]||!r&&u(n.target,t))i=s(n,t),e(n.target).trigger(i);return i}function v(t){var n=e.data(t.target,T);if(!H&&(!q||q!==n)){var r=d("v"+t.type,t);r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}}function m(t){var n=i(t).touches,r,s;if(n&&n.length===1){r=t.target,s=o(r);if(s.hasVirtualBinding){q=I++,e.data(r,T,q),p(),c(),D=!1;var u=i(t).touches[0];M=u.pageX,_=u.pageY,d("vmouseover",t,s),d("vmousedown",t,s)}}}function g(e){if(B)return;D||d("vmousecancel",e,o(e.target)),D=!0,h()}function y(t){if(B)return;var n=i(t).touches[0],r=D,s=e.vmouse.moveDistanceThreshold,u=o(t.target);D=D||Math.abs(n.pageX-M)>s||Math.abs(n.pageY-_)>s,D&&!r&&d("vmousecancel",t,u),d("vmousemove",t,u),h()}function b(e){if(B)return;f();var t=o(e.target),n;d("vmouseup",e,t);if(!D){var r=d("vclick",e,t);r&&r.isDefaultPrevented()&&(n=i(e).changedTouches[0],P.push({touchID:q,x:n.clientX,y:n.clientY}),H=!0)}d("vmouseout",e,t),D=!1,h()}function w(t){var n=e.data(t,x),r;if(n)for(r in n)if(n[r])return!0;return!1}function E(){}function S(t){var n=t.substr(1);return{setup:function(r,i){w(this)||e.data(this,x,{});var s=e.data(this,x);s[t]=!0,A[t]=(A[t]||0)+1,A[t]===1&&F.bind(n,v),e(this).bind(n,E),j&&(A.touchstart=(A.touchstart||0)+1,A.touchstart===1&&F.bind("touchstart",m).bind("touchend",b).bind("touchmove",y).bind("scroll",g))},teardown:function(r,i){--A[t],A[t]||F.unbind(n,v),j&&(--A.touchstart,A.touchstart||F.unbind("touchstart",m).unbind("touchmove",y).unbind("touchend",b).unbind("scroll",g));var s=e(this),o=e.data(this,x);o&&(o[t]=!1),s.unbind(n,E),w(this)||s.removeData(x)}}}var x="virtualMouseBindings",T="virtualTouchID",N="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),C="clientX clientY pageX pageY screenX screenY".split(" "),k=e.event.mouseHooks?e.event.mouseHooks.props:[],L=e.event.props.concat(k),A={},O=0,M=0,_=0,D=!1,P=[],H=!1,B=!1,j="addEventListener"in n,F=e(n),I=1,q=0,R;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var U=0;U<N.length;U++)e.event.special[N[U]]=S(N[U]);j&&n.addEventListener("click",function(t){var n=P.length,r=t.target,i,s,o,u,a,f;if(n){i=t.clientX,s=t.clientY,R=e.vmouse.clickDistanceThreshold,o=r;while(o){for(u=0;u<n;u++){a=P[u],f=0;if(o===r&&Math.abs(a.x-i)<R&&Math.abs(a.y-s)<R||e.data(o,T)===a.touchID){t.preventDefault(),t.stopPropagation();return}}o=o.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function i(t,n,r){var i=r.type;r.type=n,e.event.dispatch.call(t,r),r.type=i}var s=e(n);e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)});var o=e.mobile.support.touch,u="touchmove scroll",a=o?"touchstart":"mousedown",f=o?"touchend":"mouseup",l=o?"touchmove":"mousemove";e.event.special.scrollstart={enabled:!0,setup:function(){function t(e,t){s=t,i(n,s?"scrollstart":"scrollstop",e)}var n=this,r=e(n),s,o;r.bind(u,function(n){if(!e.event.special.scrollstart.enabled)return;s||t(n,!0),clearTimeout(o),o=setTimeout(function(){t(n,!1)},50)})}},e.event.special.tap={tapholdThreshold:750,setup:function(){var t=this,n=e(t);n.bind("vmousedown",function(r){function o(){clearTimeout(c)}function u(){o(),n.unbind("vclick",a).unbind("vmouseup",o),s.unbind("vmousecancel",u)}function a(e){u(),f===e.target&&i(t,"tap",e)}if(r.which&&r.which!==1)return!1;var f=r.target,l=r.originalEvent,c;n.bind("vmouseup",o).bind("vclick",a),s.bind("vmousecancel",u),c=setTimeout(function(){i(t,"taphold",e.Event("taphold",{target:f}))},e.event.special.tap.tapholdThreshold)})}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t;return{time:(new Date).getTime(),coords:[n.pageX,n.pageY],origin:e(t.target)}},stop:function(e){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e;return{time:(new Date).getTime(),coords:[t.pageX,t.pageY]}},handleSwipe:function(t,n){n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold&&t.origin.trigger("swipe").trigger(t.coords[0]>n.coords[0]?"swipeleft":"swiperight")},setup:function(){var t=this,n=e(t);n.bind(a,function(t){function i(t){if(!s)return;o=e.event.special.swipe.stop(t),Math.abs(s.coords[0]-o.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()}var s=e.event.special.swipe.start(t),o;n.bind(l,i).one(f,function(){n.unbind(l,i),s&&o&&e.event.special.swipe.handleSwipe(s,o),s=o=r})})}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)}}})}(e,this)});
(function(e) {
    e.fn.videoModal = function(t) {
        return this.each(function() {
            function i() {
                if (document.all && document.documentMode === undefined) return;
                e(r).tap(function() {
                    if (e(window).width() <= n.breakpoint_width) return !0;
                    var t = e(this).prop("href").split("v=");
                    if (t !== null && t !== undefined && t[1] !== undefined) {
                        var r = t[1],
                            i = r.indexOf("&");
                        return i !== -1 && (r = r.substring(0, i)), s(r), !1
                    }
                    return !0
                })
            }

            function s(t) {
                e("body").prepend('<div id="video-modal"><iframe src="//www.youtube.com/embed/' + t + '?wmode=transparent&autoplay=1" id="youtube-video" frameborder="0" allowfullscreen="true"></iframe><i><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><g><path class="icon" d="M19.6,10.5L16,14.1l-3.6-3.6c-0.1-0.1-0.3-0.1-0.5,0l-1.4,1.4c-0.1,0.1-0.1,0.3,0,0.5l3.6,3.6l-3.6,3.6 c-0.1,0.1-0.1,0.3,0,0.5l1.4,1.4c0.1,0.1,0.3,0.1,0.5,0l3.6-3.6l3.6,3.6c0.1,0.1,0.3,0.1,0.5,0l1.4-1.4c0.1-0.1,0.1-0.3,0-0.5 L17.8,16l3.6-3.6c0.1-0.1,0.1-0.3,0-0.5l-1.4-1.4C19.9,10.4,19.7,10.4,19.6,10.5z" /><path class="icon" d="M16,30.9c-8.3,0-15-6.7-15-15S7.7,1,16,1s15,6.7,15,15S24.3,30.9,16,30.9z M16,3C8.8,3,3,8.8,3,16 c0,7.2,5.9,13,13,13s13-5.8,13-13C29,8.8,23.2,3,16,3z" /></g></svg></i></div>'), e("#video-modal").fadeIn(n.animation_duration), e(window).resize(function() {
                    u()
                }), "onorientationchange" in window && (window.addEventListener ? window.addEventListener("orientationchange", function() {
                    u()
                }, !1) : window.attachEvent("orientationchange", function() {
                    u()
                })), u(), e("#video-modal").find("i").tap(function() {
                    o()
                })
            }

            function o() {
                e("#video-modal").find("i").unbind("tap"), e("#video-modal").fadeOut(n.animation_duration, function() {
                    e(window).unbind("resize", u), "onorientationchange" in window && window.removeEventListener("orientationchange"), e("#video-modal").remove()
                })
            }

            function u() {
                var t = e(window).width(),
                    r = e(window).height();
                if (t <= n.breakpoint_width) {
                    o();
                    return
                }
                var i = Math.ceil(t - n.padding * 2);
                i = i > n.maximum_width ? n.maximum_width : i;
                var s = Math.ceil(i / n.ratio_width * n.ratio_height);
                s > Math.ceil(r - n.padding * 2) && (s = Math.ceil(r - n.padding * 2), i = Math.ceil(s / n.ratio_height * n.ratio_width)), e("#video-modal i").css({
                    "margin-top": s * -0.5 - 44,
                    "margin-right": i * -0.5 - 44
                }), e("#youtube-video").css({
                    width: i + "px",
                    height: s + "px",
                    "margin-top": s * -0.5 + "px",
                    "margin-left": i * -0.5 + "px"
                })
            }
            var n = e.extend({
                    animation_duration: 400,
                    breakpoint_width: 760,
                    maximum_width: 1024,
                    padding: 80,
                    ratio_width: 16,
                    ratio_height: 9
                }, t),
                r = this;
            i()
        })
    }
})(jQuery);
! function(e, t) {
    function n() {
        r.READY || (y.determineEventTypes(), g.each(r.gestures, function(e) {
            w.register(e)
        }), y.onTouch(r.DOCUMENT, p, w.detect), y.onTouch(r.DOCUMENT, d, w.detect), r.READY = !0)
    }
    var r = function E(e, t) {
        return new E.Instance(e, t || {})
    };
    r.VERSION = "1.1.3", r.defaults = {
        behavior: {
            userSelect: "none",
            touchAction: "pan-y",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, r.DOCUMENT = document, r.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, r.HAS_TOUCHEVENTS = "ontouchstart" in e, r.IS_MOBILE = /mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent), r.NO_MOUSEEVENTS = r.HAS_TOUCHEVENTS && r.IS_MOBILE || r.HAS_POINTEREVENTS, r.CALCULATE_INTERVAL = 25;
    var i = {},
        s = r.DIRECTION_DOWN = "down",
        o = r.DIRECTION_LEFT = "left",
        u = r.DIRECTION_UP = "up",
        a = r.DIRECTION_RIGHT = "right",
        f = r.POINTER_MOUSE = "mouse",
        l = r.POINTER_TOUCH = "touch",
        c = r.POINTER_PEN = "pen",
        h = r.EVENT_START = "start",
        p = r.EVENT_MOVE = "move",
        d = r.EVENT_END = "end",
        v = r.EVENT_RELEASE = "release",
        m = r.EVENT_TOUCH = "touch";
    r.READY = !1, r.plugins = r.plugins || {}, r.gestures = r.gestures || {};
    var g = r.utils = {
            extend: function(e, n, r) {
                for (var i in n) !n.hasOwnProperty(i) || e[i] !== t && r || (e[i] = n[i]);
                return e
            },
            on: function(e, t, n) {
                e.addEventListener(t, n, !1)
            },
            off: function(e, t, n) {
                e.removeEventListener(t, n, !1)
            },
            each: function(e, n, r) {
                var i, s;
                if ("forEach" in e) e.forEach(n, r);
                else if (e.length !== t) {
                    for (i = 0, s = e.length; s > i; i++)
                        if (n.call(r, e[i], i, e) === !1) return
                } else
                    for (i in e)
                        if (e.hasOwnProperty(i) && n.call(r, e[i], i, e) === !1) return
            },
            inStr: function(e, t) {
                return e.indexOf(t) > -1
            },
            inArray: function(e, t) {
                if (e.indexOf) {
                    var n = e.indexOf(t);
                    return -1 === n ? !1 : n
                }
                for (var r = 0, i = e.length; i > r; r++)
                    if (e[r] === t) return r;
                return !1
            },
            toArray: function(e) {
                return Array.prototype.slice.call(e, 0)
            },
            hasParent: function(e, t) {
                for (; e;) {
                    if (e == t) return !0;
                    e = e.parentNode
                }
                return !1
            },
            getCenter: function(e) {
                var t = [],
                    n = [],
                    r = [],
                    i = [],
                    s = Math.min,
                    o = Math.max;
                return 1 === e.length ? {
                    pageX: e[0].pageX,
                    pageY: e[0].pageY,
                    clientX: e[0].clientX,
                    clientY: e[0].clientY
                } : (g.each(e, function(e) {
                    t.push(e.pageX), n.push(e.pageY), r.push(e.clientX), i.push(e.clientY)
                }), {
                    pageX: (s.apply(Math, t) + o.apply(Math, t)) / 2,
                    pageY: (s.apply(Math, n) + o.apply(Math, n)) / 2,
                    clientX: (s.apply(Math, r) + o.apply(Math, r)) / 2,
                    clientY: (s.apply(Math, i) + o.apply(Math, i)) / 2
                })
            },
            getVelocity: function(e, t, n) {
                return {
                    x: Math.abs(t / e) || 0,
                    y: Math.abs(n / e) || 0
                }
            },
            getAngle: function(e, t) {
                var n = t.clientX - e.clientX,
                    r = t.clientY - e.clientY;
                return 180 * Math.atan2(r, n) / Math.PI
            },
            getDirection: function(e, t) {
                var n = Math.abs(e.clientX - t.clientX),
                    r = Math.abs(e.clientY - t.clientY);
                return n >= r ? e.clientX - t.clientX > 0 ? o : a : e.clientY - t.clientY > 0 ? u : s
            },
            getDistance: function(e, t) {
                var n = t.clientX - e.clientX,
                    r = t.clientY - e.clientY;
                return Math.sqrt(n * n + r * r)
            },
            getScale: function(e, t) {
                return e.length >= 2 && t.length >= 2 ? this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1]) : 1
            },
            getRotation: function(e, t) {
                return e.length >= 2 && t.length >= 2 ? this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0]) : 0
            },
            isVertical: function(e) {
                return e == u || e == s
            },
            setPrefixedCss: function(e, t, n, r) {
                var i = ["", "Webkit", "Moz", "O", "ms"];
                t = g.toCamelCase(t);
                for (var s = 0; s < i.length; s++) {
                    var o = t;
                    if (i[s] && (o = i[s] + o.slice(0, 1).toUpperCase() + o.slice(1)), o in e.style) {
                        e.style[o] = (null == r || r) && n || "";
                        break
                    }
                }
            },
            toggleBehavior: function(e, t, n) {
                if (t && e && e.style) {
                    g.each(t, function(t, r) {
                        g.setPrefixedCss(e, r, t, n)
                    });
                    var r = n && function() {
                        return !1
                    };
                    "none" == t.userSelect && (e.onselectstart = r), "none" == t.userDrag && (e.ondragstart = r)
                }
            },
            toCamelCase: function(e) {
                return e.replace(/[_-]([a-z])/g, function(e) {
                    return e[1].toUpperCase()
                })
            }
        },
        y = r.event = {
            preventMouseEvents: !1,
            started: !1,
            shouldDetect: !1,
            on: function(e, t, n, r) {
                var i = t.split(" ");
                g.each(i, function(t) {
                    g.on(e, t, n), r && r(t)
                })
            },
            off: function(e, t, n, r) {
                var i = t.split(" ");
                g.each(i, function(t) {
                    g.off(e, t, n), r && r(t)
                })
            },
            onTouch: function(e, t, n) {
                var s = this,
                    o = function(i) {
                        var o, u = i.type.toLowerCase(),
                            a = r.HAS_POINTEREVENTS,
                            f = g.inStr(u, "mouse");
                        f && s.preventMouseEvents || (f && t == h && 0 === i.button ? (s.preventMouseEvents = !1, s.shouldDetect = !0) : a && t == h ? s.shouldDetect = 1 === i.buttons || b.matchType(l, i) : f || t != h || (s.preventMouseEvents = !0, s.shouldDetect = !0), a && t != d && b.updatePointer(t, i), s.shouldDetect && (o = s.doDetect.call(s, i, t, e, n)), o == d && (s.preventMouseEvents = !1, s.shouldDetect = !1, b.reset()), a && t == d && b.updatePointer(t, i))
                    };
                return this.on(e, i[t], o), o
            },
            doDetect: function(e, t, n, r) {
                var i = this.getTouchList(e, t),
                    s = i.length,
                    o = t,
                    u = i.trigger,
                    a = s;
                t == h ? u = m : t == d && (u = v, a = i.length - (e.changedTouches ? e.changedTouches.length : 1)), a > 0 && this.started && (o = p), this.started = !0;
                var f = this.collectEventData(n, o, i, e);
                return t != d && r.call(w, f), u && (f.changedLength = a, f.eventType = u, r.call(w, f), f.eventType = o, delete f.changedLength), o == d && (r.call(w, f), this.started = !1), o
            },
            determineEventTypes: function() {
                var t;
                return t = r.HAS_POINTEREVENTS ? e.PointerEvent ? ["pointerdown", "pointermove", "pointerup pointercancel lostpointercapture"] : ["MSPointerDown", "MSPointerMove", "MSPointerUp MSPointerCancel MSLostPointerCapture"] : r.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], i[h] = t[0], i[p] = t[1], i[d] = t[2], i
            },
            getTouchList: function(e, t) {
                if (r.HAS_POINTEREVENTS) return b.getTouchList();
                if (e.touches) {
                    if (t == p) return e.touches;
                    var n = [],
                        i = [].concat(g.toArray(e.touches), g.toArray(e.changedTouches)),
                        s = [];
                    return g.each(i, function(e) {
                        g.inArray(n, e.identifier) === !1 && s.push(e), n.push(e.identifier)
                    }), s
                }
                return e.identifier = 1, [e]
            },
            collectEventData: function(e, t, n, r) {
                var i = l;
                return g.inStr(r.type, "mouse") || b.matchType(f, r) ? i = f : b.matchType(c, r) && (i = c), {
                    center: g.getCenter(n),
                    timeStamp: Date.now(),
                    target: r.target,
                    touches: n,
                    eventType: t,
                    pointerType: i,
                    srcEvent: r,
                    preventDefault: function() {
                        var e = this.srcEvent;
                        e.preventManipulation && e.preventManipulation(), e.preventDefault && e.preventDefault()
                    },
                    stopPropagation: function() {
                        this.srcEvent.stopPropagation()
                    },
                    stopDetect: function() {
                        return w.stopDetect()
                    }
                }
            }
        },
        b = r.PointerEvent = {
            pointers: {},
            getTouchList: function() {
                var e = [];
                return g.each(this.pointers, function(t) {
                    e.push(t)
                }), e
            },
            updatePointer: function(e, t) {
                e == d || e != d && 1 !== t.buttons ? delete this.pointers[t.pointerId] : (t.identifier = t.pointerId, this.pointers[t.pointerId] = t)
            },
            matchType: function(e, t) {
                if (!t.pointerType) return !1;
                var n = t.pointerType,
                    r = {};
                return r[f] = n === (t.MSPOINTER_TYPE_MOUSE || f), r[l] = n === (t.MSPOINTER_TYPE_TOUCH || l), r[c] = n === (t.MSPOINTER_TYPE_PEN || c), r[e]
            },
            reset: function() {
                this.pointers = {}
            }
        },
        w = r.detection = {
            gestures: [],
            current: null,
            previous: null,
            stopped: !1,
            startDetect: function(e, t) {
                this.current || (this.stopped = !1, this.current = {
                    inst: e,
                    startEvent: g.extend({}, t),
                    lastEvent: !1,
                    lastCalcEvent: !1,
                    futureCalcEvent: !1,
                    lastCalcData: {},
                    name: ""
                }, this.detect(t))
            },
            detect: function(e) {
                if (this.current && !this.stopped) {
                    e = this.extendEventData(e);
                    var t = this.current.inst,
                        n = t.options;
                    return g.each(this.gestures, function(r) {
                        !this.stopped && t.enabled && n[r.name] && r.handler.call(r, e, t)
                    }, this), this.current && (this.current.lastEvent = e), e.eventType == d && this.stopDetect(), e
                }
            },
            stopDetect: function() {
                this.previous = g.extend({}, this.current), this.current = null, this.stopped = !0
            },
            getCalculatedData: function(e, t, n, i, s) {
                var o = this.current,
                    u = !1,
                    a = o.lastCalcEvent,
                    f = o.lastCalcData;
                a && e.timeStamp - a.timeStamp > r.CALCULATE_INTERVAL && (t = a.center, n = e.timeStamp - a.timeStamp, i = e.center.clientX - a.center.clientX, s = e.center.clientY - a.center.clientY, u = !0), (e.eventType == m || e.eventType == v) && (o.futureCalcEvent = e), (!o.lastCalcEvent || u) && (f.velocity = g.getVelocity(n, i, s), f.angle = g.getAngle(t, e.center), f.direction = g.getDirection(t, e.center), o.lastCalcEvent = o.futureCalcEvent || e, o.futureCalcEvent = e), e.velocityX = f.velocity.x, e.velocityY = f.velocity.y, e.interimAngle = f.angle, e.interimDirection = f.direction
            },
            extendEventData: function(e) {
                var t = this.current,
                    n = t.startEvent,
                    r = t.lastEvent || n;
                (e.eventType == m || e.eventType == v) && (n.touches = [], g.each(e.touches, function(e) {
                    n.touches.push({
                        clientX: e.clientX,
                        clientY: e.clientY
                    })
                }));
                var i = e.timeStamp - n.timeStamp,
                    s = e.center.clientX - n.center.clientX,
                    o = e.center.clientY - n.center.clientY;
                return this.getCalculatedData(e, r.center, i, s, o), g.extend(e, {
                    startEvent: n,
                    deltaTime: i,
                    deltaX: s,
                    deltaY: o,
                    distance: g.getDistance(n.center, e.center),
                    angle: g.getAngle(n.center, e.center),
                    direction: g.getDirection(n.center, e.center),
                    scale: g.getScale(n.touches, e.touches),
                    rotation: g.getRotation(n.touches, e.touches)
                }), e
            },
            register: function(e) {
                var n = e.defaults || {};
                return n[e.name] === t && (n[e.name] = !0), g.extend(r.defaults, n, !0), e.index = e.index || 1e3, this.gestures.push(e), this.gestures.sort(function(e, t) {
                    return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
                }), this.gestures
            }
        };
    r.Instance = function(e, t) {
            var i = this;
            n(), this.element = e, this.enabled = !0, g.each(t, function(e, n) {
                delete t[n], t[g.toCamelCase(n)] = e
            }), this.options = g.extend(g.extend({}, r.defaults), t || {}), this.options.behavior && g.toggleBehavior(this.element, this.options.behavior, !0), this.eventStartHandler = y.onTouch(e, h, function(e) {
                i.enabled && e.eventType == h ? w.startDetect(i, e) : e.eventType == m && w.detect(e)
            }), this.eventHandlers = []
        }, r.Instance.prototype = {
            on: function(e, t) {
                var n = this;
                return y.on(n.element, e, t, function(e) {
                    n.eventHandlers.push({
                        gesture: e,
                        handler: t
                    })
                }), n
            },
            off: function(e, t) {
                var n = this;
                return y.off(n.element, e, t, function(e) {
                    var r = g.inArray({
                        gesture: e,
                        handler: t
                    });
                    r !== !1 && n.eventHandlers.splice(r, 1)
                }), n
            },
            trigger: function(e, t) {
                t || (t = {});
                var n = r.DOCUMENT.createEvent("Event");
                n.initEvent(e, !0, !0), n.gesture = t;
                var i = this.element;
                return g.hasParent(t.target, i) && (i = t.target), i.dispatchEvent(n), this
            },
            enable: function(e) {
                return this.enabled = e, this
            },
            dispose: function() {
                var e, t;
                for (g.toggleBehavior(this.element, this.options.behavior, !1), e = -1; t = this.eventHandlers[++e];) g.off(this.element, t.gesture, t.handler);
                return this.eventHandlers = [], y.off(this.element, i[h], this.eventStartHandler), null
            }
        },
        function(e) {
            function t(t, r) {
                var i = w.current;
                if (!(r.options.dragMaxTouches > 0 && t.touches.length > r.options.dragMaxTouches)) switch (t.eventType) {
                    case h:
                        n = !1;
                        break;
                    case p:
                        if (t.distance < r.options.dragMinDistance && i.name != e) return;
                        var f = i.startEvent.center;
                        if (i.name != e && (i.name = e, r.options.dragDistanceCorrection && t.distance > 0)) {
                            var l = Math.abs(r.options.dragMinDistance / t.distance);
                            f.pageX += t.deltaX * l, f.pageY += t.deltaY * l, f.clientX += t.deltaX * l, f.clientY += t.deltaY * l, t = w.extendEventData(t)
                        }(i.lastEvent.dragLockToAxis || r.options.dragLockToAxis && r.options.dragLockMinDistance <= t.distance) && (t.dragLockToAxis = !0);
                        var c = i.lastEvent.direction;
                        t.dragLockToAxis && c !== t.direction && (t.direction = g.isVertical(c) ? t.deltaY < 0 ? u : s : t.deltaX < 0 ? o : a), n || (r.trigger(e + "start", t), n = !0), r.trigger(e, t), r.trigger(e + t.direction, t);
                        var m = g.isVertical(t.direction);
                        (r.options.dragBlockVertical && m || r.options.dragBlockHorizontal && !m) && t.preventDefault();
                        break;
                    case v:
                        n && t.changedLength <= r.options.dragMaxTouches && (r.trigger(e + "end", t), n = !1);
                        break;
                    case d:
                        n = !1
                }
            }
            var n = !1;
            r.gestures.Drag = {
                name: e,
                index: 50,
                handler: t,
                defaults: {
                    dragMinDistance: 10,
                    dragDistanceCorrection: !0,
                    dragMaxTouches: 1,
                    dragBlockHorizontal: !1,
                    dragBlockVertical: !1,
                    dragLockToAxis: !1,
                    dragLockMinDistance: 25
                }
            }
        }("drag"), r.gestures.Gesture = {
            name: "gesture",
            index: 1337,
            handler: function(e, t) {
                t.trigger(this.name, e)
            }
        },
        function(e) {
            function t(t, r) {
                var i = r.options,
                    s = w.current;
                switch (t.eventType) {
                    case h:
                        clearTimeout(n), s.name = e, n = setTimeout(function() {
                            s && s.name == e && r.trigger(e, t)
                        }, i.holdTimeout);
                        break;
                    case p:
                        t.distance > i.holdThreshold && clearTimeout(n);
                        break;
                    case v:
                        clearTimeout(n)
                }
            }
            var n;
            r.gestures.Hold = {
                name: e,
                index: 10,
                defaults: {
                    holdTimeout: 500,
                    holdThreshold: 2
                },
                handler: t
            }
        }("hold"), r.gestures.Release = {
            name: "release",
            index: 1 / 0,
            handler: function(e, t) {
                e.eventType == v && t.trigger(this.name, e)
            }
        }, r.gestures.Swipe = {
            name: "swipe",
            index: 40,
            defaults: {
                swipeMinTouches: 1,
                swipeMaxTouches: 1,
                swipeVelocityX: .6,
                swipeVelocityY: .6
            },
            handler: function(e, t) {
                if (e.eventType == v) {
                    var n = e.touches.length,
                        r = t.options;
                    if (n < r.swipeMinTouches || n > r.swipeMaxTouches) return;
                    (e.velocityX > r.swipeVelocityX || e.velocityY > r.swipeVelocityY) && (t.trigger(this.name, e), t.trigger(this.name + e.direction, e))
                }
            }
        },
        function(e) {
            function t(t, r) {
                var i, s, o = r.options,
                    u = w.current,
                    a = w.previous;
                switch (t.eventType) {
                    case h:
                        n = !1;
                        break;
                    case p:
                        n = n || t.distance > o.tapMaxDistance;
                        break;
                    case d:
                        !g.inStr(t.srcEvent.type, "cancel") && t.deltaTime < o.tapMaxTime && !n && (i = a && a.lastEvent && t.timeStamp - a.lastEvent.timeStamp, s = !1, a && a.name == e && i && i < o.doubleTapInterval && t.distance < o.doubleTapDistance && (r.trigger("doubletap", t), s = !0), (!s || o.tapAlways) && (u.name = e, r.trigger(u.name, t)))
                }
            }
            var n = !1;
            r.gestures.Tap = {
                name: e,
                index: 100,
                handler: t,
                defaults: {
                    tapMaxTime: 250,
                    tapMaxDistance: 10,
                    tapAlways: !0,
                    doubleTapDistance: 20,
                    doubleTapInterval: 300
                }
            }
        }("tap"), r.gestures.Touch = {
            name: "touch",
            index: -1 / 0,
            defaults: {
                preventDefault: !1,
                preventMouse: !1
            },
            handler: function(e, t) {
                return t.options.preventMouse && e.pointerType == f ? void e.stopDetect() : (t.options.preventDefault && e.preventDefault(), void(e.eventType == m && t.trigger("touch", e)))
            }
        },
        function(e) {
            function t(t, r) {
                switch (t.eventType) {
                    case h:
                        n = !1;
                        break;
                    case p:
                        if (t.touches.length < 2) return;
                        var i = Math.abs(1 - t.scale),
                            s = Math.abs(t.rotation);
                        if (i < r.options.transformMinScale && s < r.options.transformMinRotation) return;
                        w.current.name = e, n || (r.trigger(e + "start", t), n = !0), r.trigger(e, t), s > r.options.transformMinRotation && r.trigger("rotate", t), i > r.options.transformMinScale && (r.trigger("pinch", t), r.trigger("pinch" + (t.scale < 1 ? "in" : "out"), t));
                        break;
                    case v:
                        n && t.changedLength < 2 && (r.trigger(e + "end", t), n = !1)
                }
            }
            var n = !1;
            r.gestures.Transform = {
                name: e,
                index: 45,
                defaults: {
                    transformMinScale: .01,
                    transformMinRotation: 1
                },
                handler: t
            }
        }("transform"), "function" == typeof define && define.amd ? define([], function() {
            return r
        }) : "undefined" != typeof module && module.exports ? module.exports = r : e.Hammer = r
}(window);
! function(e) {
    e.matchMedia = e.matchMedia || function(e) {
        var t, n = e.documentElement,
            r = n.firstElementChild || n.firstChild,
            i = e.createElement("body"),
            s = e.createElement("div");
        return s.id = "mq-test-1", s.style.cssText = "position:absolute;top:-100em", i.style.background = "none", i.appendChild(s),
            function(e) {
                return s.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(i, r), t = 42 === s.offsetWidth, n.removeChild(i), {
                    matches: t,
                    media: e
                }
            }
    }(e.document)
}(this),
function(e) {
    function t() {
        E(!0)
    }
    var n = {};
    e.respond = n, n.update = function() {};
    var r = [],
        i = function() {
            var t = !1;
            try {
                t = new e.XMLHttpRequest
            } catch (n) {
                t = new e.ActiveXObject("Microsoft.XMLHTTP")
            }
            return function() {
                return t
            }
        }(),
        s = function(e, t) {
            var n = i();
            n && (n.open("GET", e, !0), n.onreadystatechange = function() {
                4 !== n.readyState || 200 !== n.status && 304 !== n.status || t(n.responseText)
            }, 4 !== n.readyState && n.send(null))
        },
        o = function(e) {
            return e.replace(n.regex.minmaxwh, "").match(n.regex.other)
        };
    if (n.ajax = s, n.queue = r, n.unsupportedmq = o, n.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g
    }, n.mediaQueriesSupported = e.matchMedia && null !== e.matchMedia("only all") && e.matchMedia("only all").matches, !n.mediaQueriesSupported) {
        var u, a, f, l = e.document,
            c = l.documentElement,
            h = [],
            p = [],
            d = [],
            v = {},
            m = 30,
            g = l.getElementsByTagName("head")[0] || c,
            y = l.getElementsByTagName("base")[0],
            b = g.getElementsByTagName("link"),
            w = function() {
                var e, t = l.createElement("div"),
                    n = l.body,
                    r = c.style.fontSize,
                    i = n && n.style.fontSize,
                    s = !1;
                return t.style.cssText = "position:absolute;font-size:1em;width:1em", n || (n = s = l.createElement("body"), n.style.background = "none"), c.style.fontSize = "100%", n.style.fontSize = "100%", n.appendChild(t), s && c.insertBefore(n, c.firstChild), e = t.offsetWidth, s ? c.removeChild(n) : n.removeChild(t), c.style.fontSize = r, i && (n.style.fontSize = i), e = f = parseFloat(e)
            },
            E = function(t) {
                var n = "clientWidth",
                    r = c[n],
                    i = "CSS1Compat" === l.compatMode && r || l.body[n] || r,
                    s = {},
                    o = b[b.length - 1],
                    v = (new Date).getTime();
                if (t && u && m > v - u) return e.clearTimeout(a), a = e.setTimeout(E, m), void 0;
                u = v;
                for (var y in h)
                    if (h.hasOwnProperty(y)) {
                        var S = h[y],
                            x = S.minw,
                            T = S.maxw,
                            N = null === x,
                            C = null === T,
                            L = "em";
                        x && (x = parseFloat(x) * (x.indexOf(L) > -1 ? f || w() : 1)), T && (T = parseFloat(T) * (T.indexOf(L) > -1 ? f || w() : 1)), S.hasquery && (N && C || !(N || i >= x) || !(C || T >= i)) || (s[S.media] || (s[S.media] = []), s[S.media].push(p[S.rules]))
                    }
                for (var A in d) d.hasOwnProperty(A) && d[A] && d[A].parentNode === g && g.removeChild(d[A]);
                d.length = 0;
                for (var O in s)
                    if (s.hasOwnProperty(O)) {
                        var M = l.createElement("style"),
                            _ = s[O].join("\n");
                        M.type = "text/css", M.media = O, g.insertBefore(M, o.nextSibling), M.styleSheet ? M.styleSheet.cssText = _ : M.appendChild(l.createTextNode(_)), d.push(M)
                    }
            },
            S = function(e, t, r) {
                var i = e.replace(n.regex.comments, "").replace(n.regex.keyframes, "").match(n.regex.media),
                    s = i && i.length || 0;
                t = t.substring(0, t.lastIndexOf("/"));
                var u = function(e) {
                        return e.replace(n.regex.urls, "$1" + t + "$2$3")
                    },
                    a = !s && r;
                t.length && (t += "/"), a && (s = 1);
                for (var f = 0; s > f; f++) {
                    var l, c, d, v;
                    a ? (l = r, p.push(u(e))) : (l = i[f].match(n.regex.findStyles) && RegExp.$1, p.push(RegExp.$2 && u(RegExp.$2))), d = l.split(","), v = d.length;
                    for (var m = 0; v > m; m++) c = d[m], o(c) || h.push({
                        media: c.split("(")[0].match(n.regex.only) && RegExp.$2 || "all",
                        rules: p.length - 1,
                        hasquery: c.indexOf("(") > -1,
                        minw: c.match(n.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: c.match(n.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    })
                }
                E()
            },
            x = function() {
                if (r.length) {
                    var t = r.shift();
                    s(t.href, function(n) {
                        S(n, t.href, t.media), v[t.href] = !0, e.setTimeout(function() {
                            x()
                        }, 0)
                    })
                }
            },
            T = function() {
                for (var t = 0; t < b.length; t++) {
                    var n = b[t],
                        i = n.href,
                        s = n.media,
                        o = n.rel && "stylesheet" === n.rel.toLowerCase();
                    i && o && !v[i] && (n.styleSheet && n.styleSheet.rawCssText ? (S(n.styleSheet.rawCssText, i, s), v[i] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(i) && !y || i.replace(RegExp.$1, "").split("/")[0] === e.location.host) && ("//" === i.substring(0, 2) && (i = e.location.protocol + i), r.push({
                        href: i,
                        media: s
                    })))
                }
                x()
            };
        T(), n.update = T, n.getEmValue = w, e.addEventListener ? e.addEventListener("resize", t, !1) : e.attachEvent && e.attachEvent("onresize", t)
    }
}(this);
var requirejs, require, define;
(function(e) {
    function h(e, t) {
        return f.call(e, t)
    }

    function p(e, t) {
        var n, r, i, s, o, a, f, l, h, p, d, v = t && t.split("/"),
            m = u.map,
            g = m && m["*"] || {};
        if (e && e.charAt(0) === ".")
            if (t) {
                v = v.slice(0, v.length - 1), e = e.split("/"), o = e.length - 1, u.nodeIdCompat && c.test(e[o]) && (e[o] = e[o].replace(c, "")), e = v.concat(e);
                for (h = 0; h < e.length; h += 1) {
                    d = e[h];
                    if (d === ".") e.splice(h, 1), h -= 1;
                    else if (d === "..") {
                        if (h === 1 && (e[2] === ".." || e[0] === "..")) break;
                        h > 0 && (e.splice(h - 1, 2), h -= 2)
                    }
                }
                e = e.join("/")
            } else e.indexOf("./") === 0 && (e = e.substring(2));
        if ((v || g) && m) {
            n = e.split("/");
            for (h = n.length; h > 0; h -= 1) {
                r = n.slice(0, h).join("/");
                if (v)
                    for (p = v.length; p > 0; p -= 1) {
                        i = m[v.slice(0, p).join("/")];
                        if (i) {
                            i = i[r];
                            if (i) {
                                s = i, a = h;
                                break
                            }
                        }
                    }
                if (s) break;
                !f && g && g[r] && (f = g[r], l = h)
            }!s && f && (s = f, a = l), s && (n.splice(0, a, s), e = n.join("/"))
        }
        return e
    }

    function d(t, r) {
        return function() {
            return n.apply(e, l.call(arguments, 0).concat([t, r]))
        }
    }

    function v(e) {
        return function(t) {
            return p(t, e)
        }
    }

    function m(e) {
        return function(t) {
            s[e] = t
        }
    }

    function g(n) {
        if (h(o, n)) {
            var r = o[n];
            delete o[n], a[n] = !0, t.apply(e, r)
        }
        if (!h(s, n) && !h(a, n)) throw new Error("No " + n);
        return s[n]
    }

    function y(e) {
        var t, n = e ? e.indexOf("!") : -1;
        return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
    }

    function b(e) {
        return function() {
            return u && u.config && u.config[e] || {}
        }
    }
    var t, n, r, i, s = {},
        o = {},
        u = {},
        a = {},
        f = Object.prototype.hasOwnProperty,
        l = [].slice,
        c = /\.js$/;
    r = function(e, t) {
        var n, r = y(e),
            i = r[0];
        return e = r[1], i && (i = p(i, t), n = g(i)), i ? n && n.normalize ? e = n.normalize(e, v(t)) : e = p(e, t) : (e = p(e, t), r = y(e), i = r[0], e = r[1], i && (n = g(i))), {
            f: i ? i + "!" + e : e,
            n: e,
            pr: i,
            p: n
        }
    }, i = {
        require: function(e) {
            return d(e)
        },
        exports: function(e) {
            var t = s[e];
            return typeof t != "undefined" ? t : s[e] = {}
        },
        module: function(e) {
            return {
                id: e,
                uri: "",
                exports: s[e],
                config: b(e)
            }
        }
    }, t = function(t, n, u, f) {
        var l, c, p, v, y, b = [],
            w = typeof u,
            E;
        f = f || t;
        if (w === "undefined" || w === "function") {
            n = !n.length && u.length ? ["require", "exports", "module"] : n;
            for (y = 0; y < n.length; y += 1) {
                v = r(n[y], f), c = v.f;
                if (c === "require") b[y] = i.require(t);
                else if (c === "exports") b[y] = i.exports(t), E = !0;
                else if (c === "module") l = b[y] = i.module(t);
                else if (h(s, c) || h(o, c) || h(a, c)) b[y] = g(c);
                else {
                    if (!v.p) throw new Error(t + " missing " + c);
                    v.p.load(v.n, d(f, !0), m(c), {}), b[y] = s[c]
                }
            }
            p = u ? u.apply(s[t], b) : undefined;
            if (t)
                if (l && l.exports !== e && l.exports !== s[t]) s[t] = l.exports;
                else if (p !== e || !E) s[t] = p
        } else t && (s[t] = u)
    }, requirejs = require = n = function(s, o, a, f, l) {
        if (typeof s == "string") return i[s] ? i[s](o) : g(r(s, o).f);
        if (!s.splice) {
            u = s, u.deps && n(u.deps, u.callback);
            if (!o) return;
            o.splice ? (s = o, o = a, a = null) : s = e
        }
        return o = o || function() {}, typeof a == "function" && (a = f, f = l), f ? t(e, s, o, a) : setTimeout(function() {
            t(e, s, o, a)
        }, 4), n
    }, n.config = function(e) {
        return n(e)
    }, requirejs._defined = s, define = function(e, t, n) {
        t.splice || (n = t, t = []), !h(s, e) && !h(o, e) && (o[e] = [e, t, n])
    }, define.amd = {
        jQuery: !0
    }
})(), define("libs/almond", function() {}), define("modules/gallery", [], function() {
    function e(e, t) {
        this.init(e, t)
    }

    function t() {
        window.requestAnimFrame === undefined && (window.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                window.setTimeout(e, 1e3 / 60)
            }
        }())
    }

    function n() {
        var e = ["webkit", "Moz", "O", "ms"],
            t = this;
        t.styleTransform = "transform", e.every(function(e) {
            var n = e + "Transform";
            return typeof document.body.style[n] != "undefined" ? (t.styleTransform = n, !1) : !0
        }), t.styleTransformOrigin = "transformOrigin", e.every(function(e) {
            var n = e + "TransformOrigin";
            return typeof document.body.style[n] != "undefined" ? (t.styleTransformOrigin = n, !1) : !0
        }), t.stylePerspective = null, typeof document.body.style.perspective != "undefined" && (t.stylePerspective = "perspective"), e.every(function(e) {
            var n = e + "Perspective";
            return typeof document.body.style[n] != "undefined" ? (t.stylePerspective = n, !1) : !0
        });
        var n = navigator.userAgent.toLowerCase();
        this.isAndroid = n.indexOf("android") > -1 ? !0 : !1
    }

    function r(e) {
        return e >= this.items.length ? e % this.items.length : e < 0 ? r.call(this, this.items.length + e % this.items.length) : e
    }

    function i(e) {
        var t, n, i, s, o, u;
        this.offset = typeof e == "number" ? e : this.offset;
        var a = Math.floor((this.offset + this.itemWidth / 2) / this.itemWidth),
            f = this.element.clientWidth / 2,
            l = this.offset - a * this.itemWidth,
            c = l < 0 ? 1 : -1,
            h = this.items.length >> 1,
            p = -c * l * 2 / this.itemWidth;
        this.selectedItem = r.call(this, Math.floor((this.offset + this.itemWidth / 2) / this.itemWidth)), i = r.call(this, a), o = -l / 2, u = this.settings.scaleOfDeselectedItem + (1 - this.settings.scaleOfDeselectedItem) * (1 - p), t = this.items[i], t.style.left = f + o + "px", t.style[this.styleTransform] = "translate(-50%, -50%) scale(" + u + ")";
        for (n = 1; n <= h; ++n) i = r.call(this, a - n), o = (this.itemWidth * n - l) / 2, t = this.items[i], t.style.left = f + o + "px", t.style[this.styleTransform] = "translate(-50%, -50%) scale(" + this.settings.scaleOfDeselectedItem + ")", i = r.call(this, a + n), o = (this.itemWidth * n - l) / 2, t = this.items[i], t.style.left = f + o + "px", t.style[this.styleTransform] = "translate(-50%, -50%) scale(" + this.settings.scaleOfDeselectedItem + ")"
    }
    return e.prototype.init = function(e, r) {
        r = typeof r != "object" ? {} : r, r.aspectRatioWidth = r.aspectRatioWidth === undefined || typeof r.aspectRatioWidth != "number" ? 16 : r.aspectRatioWidth, r.aspectRatioHeight = r.aspectRatioHeight === undefined || typeof r.aspectRatioHeight != "number" ? 9 : r.aspectRatioHeight, r.itemSelector = r.itemSelector === undefined || typeof r.itemSelector != "string" ? "li.item" : r.itemSelector, r.keyboardIsEnabled = r.keyboardIsEnabled === undefined || typeof r.keyboardIsEnabled != "boolean" ? !1 : r.keyboardIsEnabled, r.keyboardNextKeys = r.keyboardNextKeys === undefined || typeof r.keyboardNextKeys != "object" || r.keyboardNextKeys.isArray === !1 ? [32, 34, 39, 40] : r.keyboardNextKeys, r.keyboardPrevKeys = r.keyboardPrevKeys === undefined || typeof r.keyboardPrevKeys != "object" || r.keyboardPrevKeys.isArray === !1 ? [33, 37, 38] : r.keyboardPrevKeys, r.nextButton = r.nextButton === undefined || typeof r.nextButton != "object" ? null : r.nextButton, r.prevButton = r.prevButton === undefined || typeof r.prevButton != "object" ? null : r.prevButton, r.scaleOfDeselectedItem = r.scaleOfDeselectedItem === undefined || typeof r.scaleOfDeselectedItem != "number" ? .6 : r.scaleOfDeselectedItem, r.selectedIndex = r.selectedIndex === undefined || typeof r.selectedIndex != "number" ? 0 : r.selectedIndex, r.selectedItem = r.selectedItem === undefined || typeof r.selectedItem != "object" ? null : r.selectedItem;
        var i, s, o;
        this.element = e, this.hammertime = Hammer(this.element, {
            drag_block_horizontal: !0,
            drag_block_vertical: !1,
            prevent_default: !0
        }), this.items = this.element.querySelectorAll(r.itemSelector), this.settings = r, this.itemWidth = 1e3;
        if (this.settings.selectedItem !== null)
            for (s = 0, o = this.items.length; s < o; ++s) {
                i = this.items[s];
                if (i === this.settings.settings.selectedItem) {
                    this.settings.selectedItem = s;
                    break
                }
            }
        this.selectedItem = this.settings.selectedIndex, this.enabled = !1, this.pressed = !1, this.timeConstant = 200, this.offset = this.target = 0, t.call(this), n.call(this), this.element.style.cursor = "default", this.element.style.display = "block", this.element.style.margin = "0", this.element.style.overflow = "hidden", this.element.style.padding = "0", this.element.style.position = "relative";
        for (s = 0, o = this.items.length; s < o; ++s) i = this.items[s], i.style.left = "50%", i.style.position = "absolute", i.style.top = "50%", i.style.width = "100%", i.style[this.styleTransformOrigin] = "center center", i.style[this.styleTransform] = "translate(-50%, -50%)";
        this.enable(), this.resize()
    }, e.prototype.destroy = function() {
        this.disable(), this.element.removeAttribute("style");
        var e, t;
        for (e = 0, t = this.items.length; e < t; ++e) this.items[e].className = "", this.items[e].removeAttribute("style")
    }, e.prototype.enable = function() {
        this.enabled = !0, this.hammertime.on("dragstart drag dragend", this.touchHandler.bind(this)), this.settings.keyboardIsEnabled && document.addEventListener("keydown", this.keyboardHandler.bind(this)), this.settings.nextButton !== null && (this.settings.nextButton.addEventListener("tap", this.nextItem.bind(this)), this.settings.nextButton.addEventListener("mousedown", this.nextButtonDownHandler.bind(this)), this.settings.nextButton.addEventListener("mouseout", this.nextButtonUpHandler.bind(this)), this.settings.nextButton.addEventListener("mouseup", this.nextButtonUpHandler.bind(this))), this.settings.prevButton !== null && (this.settings.prevButton.addEventListener("tap", this.prevItem.bind(this)), this.settings.prevButton.addEventListener("mousedown", this.prevButtonDownHandler.bind(this)), this.settings.prevButton.addEventListener("mouseout", this.prevButtonUpHandler.bind(this)), this.settings.prevButton.addEventListener("mouseup", this.prevButtonUpHandler.bind(this))), i.call(this, this.selectedItem * this.itemWidth)
    }, e.prototype.disable = function() {
        this.enabled = !1, this.hammertime.off("dragstart drag dragend", this.touchHandler.bind(this)), this.settings.keyboardIsEnabled && document.removeEventListener("keydown", this.keyboardHandler.bind(this)), this.settings.nextButton !== null && (this.settings.nextButton.removeEventListener("tap", this.nextItem.bind(this)), this.settings.nextButton.removeEventListener("mousedown", this.nextButtonDownHandler.bind(this)), this.settings.nextButton.removeEventListener("mouseout", this.nextButtonUpHandler.bind(this)), this.settings.nextButton.removeEventListener("mouseup", this.nextButtonUpHandler.bind(this))), this.settings.prevButton !== null && (this.settings.prevButton.removeEventListener("tap", this.prevItem.bind(this)), this.settings.prevButton.removeEventListener("mousedown", this.prevButtonDownHandler.bind(this)), this.settings.prevButton.removeEventListener("mouseout", this.prevButtonUpHandler.bind(this)), this.settings.prevButton.removeEventListener("mouseup", this.prevButtonUpHandler.bind(this)))
    }, e.prototype.getIndex = function() {
        return this.selectedItem
    }, e.prototype.getItem = function() {
        return this.items[this.selectedItem]
    }, e.prototype.resize = function() {
        this.itemWidth = this.element.offsetWidth * 3;
        var e = Math.round(this.element.offsetWidth / this.settings.aspectRatioWidth * this.settings.aspectRatioHeight);
        this.element.style.height = e + "px", this.redraw()
    }, e.prototype.setIndex = function(e) {
        if (this.enabled === !1) return;
        this.pressed = !1;
        var t = this.offset - (this.selectedItem - e) * this.itemWidth,
            n = this.offset - t;
        n > this.items.length * this.itemWidth * .5 ? t += this.items.length * this.itemWidth : n < this.items.length * this.itemWidth * -0.5 && (t -= this.items.length * this.itemWidth), t = Math.round(t / this.itemWidth) * this.itemWidth, this.target = t;
        if (this.offset !== this.target) return this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimFrame(this.autoScroll.bind(this)), !0
    }, e.prototype.setItem = function(e) {
        if (this.enabled === !1) return;
        var t, n;
        for (t = 0, n = this.items.length; t < n; ++t)
            if (this.items[t] === e) {
                this.setIndex(t);
                return
            }
    }, e.prototype.nextItem = function() {
        if (this.enabled === !1) return;
        this.setIndex(this.selectedItem + 1)
    }, e.prototype.prevItem = function() {
        if (this.enabled === !1) return;
        this.setIndex(this.selectedItem - 1)
    }, e.prototype.redraw = function() {
        if (this.enabled === !1) return;
        var e = this;
        setTimeout(function() {
            i.call(e, e.selectedItem * e.itemWidth)
        }, 10)
    }, e.prototype.track = function() {
        var e, t, n, r;
        e = Date.now(), t = e - this.timestamp, this.timestamp = e, n = this.offset - this.frame, this.frame = this.offset, r = 1e3 * n / (1 + t), this.velocity = .8 * r + .2 * this.velocity
    }, e.prototype.autoScroll = function() {
        var e, t;
        this.amplitude && (e = Date.now() - this.timestamp, t = this.amplitude * Math.exp(-e / this.timeConstant), Math.abs(t) > 1 ? (i.call(this, this.target - t), requestAnimFrame(this.autoScroll.bind(this))) : (i.call(this, this.target), this.stylePerspective !== null && (this.element.style[this.stylePerspective] = "1000")))
    }, e.prototype.touchHandler = function(e) {
        if (this.enabled === !1) return;
        switch (e.type) {
            case "dragstart":
                this.stylePerspective !== null && this.isAndroid && (this.element.style[this.stylePerspective] = "none"), this.pressed = !0, this.reference = e.gesture.touches[0].clientX, this.velocity = this.amplitude = 0, this.frame = this.offset, this.timestamp = Date.now(), clearInterval(this.ticker), this.ticker = setInterval(this.track.bind(this), 100);
                break;
            case "drag":
                var t, n;
                if (this.pressed) {
                    t = e.gesture.touches[0].clientX, n = this.reference - t;
                    if (n > 2 || n < -2) this.reference = t, i.call(this, this.offset + n)
                }
                break;
            case "dragend":
                this.pressed = !1, clearInterval(this.ticker), this.target = this.offset;
                if (this.velocity > 10 || this.velocity < -10) this.amplitude = .9 * this.velocity, this.target = this.offset + this.amplitude;
                this.target = Math.round(this.target / this.itemWidth) * this.itemWidth, this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimFrame(this.autoScroll.bind(this)), this.stylePerspective !== null && (this.element.style[this.stylePerspective] = "1000")
        }
    }, e.prototype.keyboardHandler = function(e) {
        this.settings.keyboardNextKeys.indexOf(e.which) > -1 && this.nextItem(), this.settings.keyboardPrevKeys.indexOf(e.which) > -1 && this.prevItem()
    }, e.prototype.nextButtonDownHandler = function(e) {
        this.nextItem(), clearInterval(this.nextButtonTicker), this.nextButtonTicker = setInterval(this.nextItem.bind(this), 1e3), e.preventDefault()
    }, e.prototype.nextButtonUpHandler = function(e) {
        clearInterval(this.nextButtonTicker), e.preventDefault()
    }, e.prototype.prevButtonDownHandler = function(e) {
        this.prevItem(), clearInterval(this.prevButtonTicker), this.prevButtonTicker = setInterval(this.prevItem.bind(this), 1e3), e.preventDefault()
    }, e.prototype.prevButtonUpHandler = function(e) {
        clearInterval(this.prevButtonTicker), e.preventDefault()
    }, e
}), define("modules/google-map", [], function() {
    function e(e, t) {
        this.init(e, t)
    }
    return e.prototype.init = function(e, t) {
        t = typeof t != "object" ? {} : t, t.aspectRatioWidth = t.aspectRatioWidth === undefined || typeof t.aspectRatioWidth != "number" ? 16 : t.aspectRatioWidth, t.aspectRatioHeight = t.aspectRatioHeight === undefined || typeof t.aspectRatioHeight != "number" ? 9 : t.aspectRatioHeight, t.canPan = t.canPan === undefined || typeof t.canPan != "boolean" ? !0 : t.canPan, t.mapZoom = t.mapZoom === undefined || typeof t.mapZoom != "number" ? 16 : t.mapZoom, t.markerImg = t.markerImage === undefined || typeof t.markerImage != "string" ? "assets/img/marker.png" : t.markerImage, t.markerLatitude = t.markerLatitude === undefined || typeof t.markerLatitude != "number" ? 34.235926 : t.markerLatitude, t.markerLongitude = t.markerLongitude === undefined || typeof t.markerLongitude != "number" ? -77.949227 : t.markerLongitude, t.markerUrl = t.markerUrl === undefined || typeof t.markerUrl != "string" ? null : t.markerUrl, t.markerWidth = t.markerWidth === undefined || typeof t.markerWidth != "number" ? 100 : t.markerWidth, t.markerHeight = t.markerHeight === undefined || typeof t.markerHeight != "number" ? 100 : t.markerHeight, this.element = e, this.settings = t, this.latlng = new google.maps.LatLng(this.settings.markerLatitude, this.settings.markerLongitude), this.map = new google.maps.Map(this.element, {
            center: this.latlng,
            disableDoubleClickZoom: !this.settings.canPan,
            draggable: this.settings.canPan,
            keyboardShortcuts: this.settings.canPan,
            mapTypeControlOptions: {
                mapTypeIds: google.maps.MapTypeId.ROADMAP
            },
            scrollwheel: !1,
            panControl: !1,
            zoomControl: !0,
            scaleControl: !1,
            streetViewControl: !1,
            zoom: this.settings.mapZoom
        });
        var n = new google.maps.MarkerImage(this.settings.markerImg, new google.maps.Size(this.settings.markerWidth, this.settings.markerHeight), new google.maps.Point(0, 0), new google.maps.Point(this.settings.markerWidth / 2, this.settings.markerHeight), new google.maps.Size(this.settings.markerWidth, this.settings.markerHeight)),
            r = new google.maps.Marker({
                position: this.latlng,
                map: this.map,
                icon: n
            });
        this.settings.markerUrl !== null && google.maps.event.addListener(r, "click", function() {
            window.open(t.markerUrl, "_blank")
        }), this.resize()
    }, e.prototype.destroy = function() {
        this.element.removeAttribute("style")
    }, e.prototype.resize = function() {
        var e = Math.round(this.element.offsetWidth / this.settings.aspectRatioWidth * this.settings.aspectRatioHeight);
        this.element.style.height = e + "px", this.map.setCenter(this.latlng)
    }, e
}), define("modules/helpers", [], function() {
    return function() {
        if ("createTouch" in document) try {
            var e = /:hover/;
            for (var t = 0; t < document.styleSheets.length; t++) {
                var n = document.styleSheets[t];
                for (var r = n.cssRules.length - 1; r >= 0; r--) {
                    var i = n.cssRules[r];
                    i.type === CSSRule.STYLE_RULE && e.test(i.selectorText) && n.deleteRule(r)
                }
            }
        } catch (s) {}
    }
}), define("modules/history", [], function() {
    function f() {
        return !!window.history && !!history.pushState
    }

    function l() {
        var e = document.body || document.documentElement,
            t = e.style,
            n = "transition";
        if (typeof t[n] == "string") return !0;
        v = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"], n = "Transition";
        for (var r = 0; r < v.length; r++)
            if (typeof t[v[r] + n] == "string") return !0;
        return !1
    }

    function c(f) {
        if (u) {
            a = f;
            return
        }
        o !== null && (o.abort(), o = null);
        if (i === f) return;
        o = $.ajax({
            dataType: "html",
            type: "GET",
            url: f,
            success: function(l) {
                i = f, o = null;
                var h = $(l).filter("title").text(),
                    p = $(l).filter("#content").html(),
                    d = $(l).filter("#styles").html();
                u = !0, document.title = h, e.removeClass(), t.removeClass().addClass("animated fadeOut"), setTimeout(function() {
                    t.html(p).removeClass().addClass("animated fadeIn"), n.html(d), r.pageLoaded(), setTimeout(function() {
                        t.removeClass(), u = !1, a !== null && (c(a), a = null)
                    }, s)
                }, s), window._gaq !== undefined && window._gaq.push(["_trackEvent", h, i])
            },
            error: function() {
                o = null
            }
        })
    }
    var e, t, n, r, i = document.URL,
        s = 10,
        o = null,
        u = !1,
        a = null;
    return function(o) {
        e = $("body"), t = $("#content"), n = $("#styles"), r = o, l() && (s = 500), f() && (e.on("tap", "a", function(e) {
            var t = $(this).prop("href");
            t !== "" && (i !== t && history.pushState(null, null, t), c(t), e.preventDefault())
        }), window.addEventListener("popstate", function(e) {
            var t = location.pathname;
            c(t)
        }))
    }
}), define("modules/item-list", [], function() {
    function e(e, t) {
        this.init(e, t)
    }
    return e.prototype.init = function(e, t) {
        t = typeof t != "object" ? {} : t, t.itemSelector = t.itemSelector === undefined || typeof t.itemSelector != "string" ? "li.item" : t.itemSelector, t.nextButton = t.nextButton === undefined || typeof t.nextButton != "object" ? null : t.nextButton, t.prevButton = t.prevButton === undefined || typeof t.prevButton != "object" ? null : t.prevButton, t.selectedItem = t.selectedItem === undefined || typeof t.selectedItem != "number" ? 0 : t.selectedItem, this.element = e, this.items = this.element.querySelectorAll(t.itemSelector), this.settings = t, this.selectedItem = this.settings.selectedItem, this.enable()
    }, e.prototype.destroy = function() {
        this.disable()
    }, e.prototype.enable = function() {
        this.settings.nextButton !== null && this.settings.nextButton.addEventListener("click", this.nextButtonClickHandler.bind(this)), this.settings.prevButton !== null && this.settings.prevButton.addEventListener("click", this.prevButtonClickHandler.bind(this)), this.setItem(this.selectedItem)
    }, e.prototype.disable = function() {
        this.settings.nextButton !== null && this.settings.nextButton.removeEventListener("click", this.nextButtonClickHandler.bind(this)), this.settings.prevButton !== null && this.settings.prevButton.removeEventListener("click", this.prevButtonClickHandler.bind(this))
    }, e.prototype.getItem = function() {
        return this.selectedItem
    }, e.prototype.setItem = function(e) {
        e = e < 0 ? this.items.length - 1 : e, e = e >= this.items.length ? 0 : e, this.selectedItem = e;
        var t, n;
        for (t = 0, n = this.items.length; t < n; ++t) t === this.selectedItem ? this.items[t].style.display = "block" : this.items[t].style.display = "none"
    }, e.prototype.nextItem = function() {
        this.setItem(this.selectedItem + 1)
    }, e.prototype.prevItem = function() {
        this.setItem(this.selectedItem - 1)
    }, e.prototype.nextButtonClickHandler = function(e) {
        this.nextItem(), e.preventDefault()
    }, e.prototype.prevButtonClickHandler = function(e) { 
        this.prevItem(), e.preventDefault()
    }, e
}), define("modules/load-more-posts", [], function() {
    return function() {
        $("#load-more-posts").tap(function(e) {
            e.preventDefault();
            var t = $(this),
                n = t.attr("href"),
                r = t.attr("data-ajax-append"),
                i = $(r),
                s = n.match(/offset=(.*)/)[1],
                o = parseInt(s) + 10,
                u = $.get(n, function(e) {
                    e ? (t.attr("href", n.replace("offset=" + s, "offset=" + o)), i.append(e)) : t.text("Sorry, No More Posts")
                })
        })
    }
}), define("modules/menu", [], function() {
    function e(e, t) {
        var n = $("body");
        $("[data-" + e + "-toggle]").tap(function() {
            n.hasClass("show-" + e) ? n.removeClass("show-" + e) : n.removeClass("show-artist-menu show-main-menu show-mobile-menu show-artist-resources").addClass("show-" + e)
        }), t && $(".menu-overlay, #content").bind("tap", function() {
            if (n.hasClass("show-" + e)) return n.removeClass("show-" + e), !1
        })
    }
    return e
}), define("modules/menus", [], function() {
    function e(e) {
        var t = e.prop("href");
        return t = t.substring(0, t.length - 1), document.URL.indexOf(t) > -1 ? !0 : !1
    }

    function t(e) {
        var t = e.prop("href");
        return t === document.URL ? !0 : !1
    }

    function n() {
        $("#main-menu .nav > ul > li").each(function() {
            $(this).removeClass("active");
            var e = t($(this).find("> a"));
            e && $(this).addClass("active")
        }), $(".mobile-menu ul > li").each(function() {
            $(this).removeClass("active");
            var e = t($(this).find("> a"));
            e && $(this).addClass("active")
        }), $(".footer .nav > ul > li").each(function() {
            $(this).removeClass("active");
            var e = t($(this).find("> a"));
            e && $(this).addClass("active")
        })
    }

    function r() {
        n()
    }
    return r.prototype.update = n, r
}), define("modules/newsletter-signup", [], function() {
    return function() {
        var e = $('form[name="newsletter_signup"]');
        e.submit(function(t) {
            t.preventDefault();
            var n = {};
            $.each(e.serializeArray(), function(e, t) {
                n[t.name] = t.value
            }), e.find("label.form-error").remove(), $.ajax({
                type: "POST",
                url: "/newsletter",
                data: n,
                dataType: "json",
                success: function(t) {
                    t.success === 1 ? (e.find(":input").not(":button, :submit, :reset, :hidden, :checkbox, :radio").val(""), e.find(":checkbox, :radio").prop("checked", !1), $el = e.find(".feedback").first(), $el.html("Thanks for signing up."), e.find("input").hide(), e.find("button").hide()) : (t.errorType === "api" && ($el = e.find("input").first(), $('<label class="form-error">An unknown error has occured. Please try again later.</label>').insertAfter($el)), t.errorType === "validation" && $.each(t.errors, function(t, n) {
                        var r = e.find('[name="' + t + '"]');
                        r.addClass("error"), $errorBox = e.find(".error-box"), $('<label class="form-error">' + n + "</label>").appendTo($errorBox)
                    }))
                }
            })
        })
    }
}), define("modules/contact-signup", [], function() {
    return function() {
    }
}), define("modules/splash", [], function() {
    return function() {
        var e = $("#splash");
        setTimeout(function() {
            e.fadeOut(500, function() {
                e.remove()
            })
        }, 250)
    }
}), define("modules/toggle-view", [], function() {
    function e() {
        this.enable()
    }
    return e.prototype.enable = function(e) {
        $("[data-toggle-view]").click(function() {
            $($(this).data("toggle-view")).toggle()
        })
    }, e.prototype.disable = function(e) {
        $("[data-toggle-view]").unbind("click")
    }, e
}), require(["modules/gallery", "modules/google-map", "modules/helpers", "modules/history", "modules/item-list", "modules/load-more-posts", "modules/menu", "modules/menus", "modules/newsletter-signup", "modules/contact-signup", "modules/splash", "modules/toggle-view"], function(e, t, n, r, i, s, o, u, a, f, l, c) {
    function E() {
        w = [], $(".youtube-video").videoModal();
        var n = $("#google-map");
        if (n.length > 0) {
            var r = new t(n.get(0), {
                markerImage: "/assets/img/theme/marker.png",
                markerLatitude: 35.2326823,
                markerLongitude: -80.836015,
                markerUrl: "https://www.google.com/maps/@35.2012418,-80.8120253,14z",
                markerWidth: 20,
                markerHeight: 35
            });
            w.push(r)
        }
        var o = $(".gallery, .gallery-home");
        o.length > 0 && o.each(function() {
            var t = new e($(this).get(0), {
                keyboardIsEnabled: !0,
                nextButton: $(this).find(".next").get(0),
                prevButton: $(this).find(".prev").get(0)
            });
            w.push(t)
        });
        var u = $(".testimonials");
        u.length > 0 && u.each(function() {
            var e = new i($(this).get(0), {
                itemSelector: "div.testimonial",
                nextButton: $(this).find(".next").get(0),
                prevButton: $(this).find(".prev").get(0)
            })
        }), $(".header-home i.down, .header-event i.down").tap(function() {
            var e = $(".header").height();
            $("html, body").animate({
                scrollTop: e
            }, 250)
        });
        var l = new s,
            h = new a,
            p = new f,
            d = new c;
        g.update()
    }

    function S() {
        var e = $(window).height(),
            t = $(window).width();
        if ($(".header-home").length > 0)
            if (e >= 541 && t >= 1025) {
                var n = e - 65 - 130 - 20;
                $(".header-home div.image").css("max-height", n + "px"), $(".header").css("height", e + "px"), $(".page").css("margin-top", e + "px")
            } else $(".header-home div.image").css("max-height", "none"), $(".header").css("height", "auto"), $(".page").css("margin-top", "0");
        if ($(".issuuembed").length > 0) {
            var r = $(".issuuembed").width(),
                i = Math.ceil(r / 525 * 340);
            $(".issuuembed").css("height", i)
        }
        $(".page").css("min-height", Math.ceil(e)), $("body").removeClass("show-artist-menu show-main-menu show-mobile-menu show-artist-resources");
        for (var s = 0, o = w.length; s < o; ++s) w[s].resize()
    }

    function x() {
        var e = $(window).height(),
            t = $(".header").height();
        $(window).scrollTop() > t ? $(".footer").addClass("show") : $(".footer").removeClass("show")
    }
    window.badBrowser = !1;
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var h = parseFloat(RegExp.$1);
        if (h <= 8) return
    }
    var p = new n,
        d = new o("artist-menu", !0),
        v = new o("main-menu", !0),
        m = new o("mobile-menu", !0),
        g = new u,
        y = new o("artist-resources", !1),
        b = new l("splash"),
        w = [];
    $("body").addClass("javascript-enabled"), E(), $(window).resize($.throttle(250, S)), S(), $(window).scroll($.throttle(25, x)), x()
}), define("main", function() {});
(function() {
    (function(e, t, n) {
        var r, i, s;
        s = "slidesjs";
        i = {
            width: 940,
            height: 528,
            start: 1,
            navigation: {
                active: !0,
                effect: "slide"
            },
            pagination: {
                active: !0,
                effect: "slide"
            },
            play: {
                active: !1,
                effect: "slide",
                interval: 5e3,
                auto: !1,
                swap: !0,
                pauseOnHover: !1,
                restartDelay: 2500
            },
            effect: {
                slide: {
                    speed: 500
                },
                fade: {
                    speed: 300,
                    crossfade: !0
                }
            },
            callback: {
                loaded: function() {},
                start: function() {},
                complete: function() {}
            }
        };
        r = function() {
            function t(t, n) {
                this.element = t;
                this.options = e.extend(!0, {}, i, n);
                this._defaults = i;
                this._name = s;
                this.init()
            }
            return t
        }();
        r.prototype.init = function() {
            var n, r, i, s, o, u, a = this;
            n = e(this.element);
            this.data = e.data(this);
            e.data(this, "animating", !1);
            e.data(this, "total", n.children().not(".slidesjs-navigation", n).length);
            e.data(this, "current", this.options.start - 1);
            e.data(this, "vendorPrefix", this._getVendorPrefix());
            if (typeof TouchEvent != "undefined") {
                e.data(this, "touch", !0);
                this.options.effect.slide.speed = this.options.effect.slide.speed / 2
            }
            n.css({
                overflow: "hidden"
            });
            n.slidesContainer = n.children().not(".slidesjs-navigation", n).wrapAll("<div class='slidesjs-container'>", n).parent().css({
                overflow: "hidden",
                position: "relative"
            });
            e(".slidesjs-container", n).wrapInner("<div class='slidesjs-control'>", n).children();
            e(".slidesjs-control", n).css({
                position: "relative",
                left: 0
            });
            e(".slidesjs-control", n).children().addClass("slidesjs-slide").css({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 0,
                display: "none",
                webkitBackfaceVisibility: "hidden"
            });
            e.each(e(".slidesjs-control", n).children(), function(t) {
                var n;
                n = e(this);
                return n.attr("slidesjs-index", t)
            });
            if (this.data.touch) {
                e(".slidesjs-control", n).on("touchstart", function(e) {
                    return a._touchstart(e)
                });
                e(".slidesjs-control", n).on("touchmove", function(e) {
                    return a._touchmove(e)
                });
                e(".slidesjs-control", n).on("touchend", function(e) {
                    return a._touchend(e)
                })
            }
            n.fadeIn(0);
            this.update();
            this.data.touch && this._setuptouch();
            e(".slidesjs-control", n).children(":eq(" + this.data.current + ")").eq(0).fadeIn(0, function() {
                return e(this).css({
                    zIndex: 10
                })
            });
            if (this.options.navigation.active) {
                o = e("<a>", {
                    "class": "slidesjs-previous slidesjs-navigation",
                    href: "#",
                    title: "Previous",
                    text: "Previous"
                }).appendTo(n);
                r = e("<a>", {
                    "class": "slidesjs-next slidesjs-navigation",
                    href: "#",
                    title: "Next",
                    text: "Next"
                }).appendTo(n)
            }
            e(".slidesjs-next", n).click(function(e) {
                e.preventDefault();
                a.stop(!0);
                return a.next(a.options.navigation.effect)
            });
            e(".slidesjs-previous", n).click(function(e) {
                e.preventDefault();
                a.stop(!0);
                return a.previous(a.options.navigation.effect)
            });
            if (this.options.play.active) {
                s = e("<a>", {
                    "class": "slidesjs-play slidesjs-navigation",
                    href: "#",
                    title: "Play",
                    text: "Play"
                }).appendTo(n);
                u = e("<a>", {
                    "class": "slidesjs-stop slidesjs-navigation",
                    href: "#",
                    title: "Stop",
                    text: "Stop"
                }).appendTo(n);
                s.click(function(e) {
                    e.preventDefault();
                    return a.play(!0)
                });
                u.click(function(e) {
                    e.preventDefault();
                    return a.stop(!0)
                });
                this.options.play.swap && u.css({
                    display: "none"
                })
            }
            if (this.options.pagination.active) {
                i = e("<ul>", {
                    "class": "slidesjs-pagination"
                }).appendTo(n);
                e.each(new Array(this.data.total), function(t) {
                    var n, r;
                    n = e("<li>", {
                        "class": "slidesjs-pagination-item"
                    }).appendTo(i);
                    r = e("<a>", {
                        href: "#",
                        "data-slidesjs-item": t,
                        html: t + 1
                    }).appendTo(n);
                    return r.click(function(t) {
                        t.preventDefault();
                        a.stop(!0);
                        return a.goto(e(t.currentTarget).attr("data-slidesjs-item") * 1 + 1)
                    })
                })
            }
            e(t).bind("resize", function() {
                return a.update()
            });
            this._setActive();
            this.options.play.auto && this.play();
            return this.options.callback.loaded(this.options.start)
        };
        r.prototype._setActive = function(t) {
            var n, r;
            n = e(this.element);
            this.data = e.data(this);
            r = t > -1 ? t : this.data.current;
            e(".active", n).removeClass("active");
            return e(".slidesjs-pagination li:eq(" + r + ") a", n).addClass("active")
        };
        r.prototype.update = function() {
            var t, n, r;
            t = e(this.element);
            this.data = e.data(this);
            e(".slidesjs-control", t).children(":not(:eq(" + this.data.current + "))").css({
                display: "none",
                left: 0,
                zIndex: 0
            });
            r = t.width();
            n = this.options.height / this.options.width * r;
            this.options.width = r;
            this.options.height = n;
            return e(".slidesjs-control, .slidesjs-container", t).css({
                width: r,
                height: n
            })
        };
        r.prototype.next = function(t) {
            var n;
            n = e(this.element);
            this.data = e.data(this);
            e.data(this, "direction", "next");
            t === void 0 && (t = this.options.navigation.effect);
            return t === "fade" ? this._fade() : this._slide()
        };
        r.prototype.previous = function(t) {
            var n;
            n = e(this.element);
            this.data = e.data(this);
            e.data(this, "direction", "previous");
            t === void 0 && (t = this.options.navigation.effect);
            return t === "fade" ? this._fade() : this._slide()
        };
        r.prototype.goto = function(t) {
            var n, r;
            n = e(this.element);
            this.data = e.data(this);
            r === void 0 && (r = this.options.pagination.effect);
            t > this.data.total ? t = this.data.total : t < 1 && (t = 1);
            if (typeof t == "number") return r === "fade" ? this._fade(t) : this._slide(t);
            if (typeof t == "string") {
                if (t === "first") return r === "fade" ? this._fade(0) : this._slide(0);
                if (t === "last") return r === "fade" ? this._fade(this.data.total) : this._slide(this.data.total)
            }
        };
        r.prototype._setuptouch = function() {
            var t, n, r, i;
            t = e(this.element);
            this.data = e.data(this);
            i = e(".slidesjs-control", t);
            n = this.data.current + 1;
            r = this.data.current - 1;
            r < 0 && (r = this.data.total - 1);
            n > this.data.total - 1 && (n = 0);
            i.children(":eq(" + n + ")").css({
                display: "block",
                left: this.options.width
            });
            return i.children(":eq(" + r + ")").css({
                display: "block",
                left: -this.options.width
            })
        };
        r.prototype._touchstart = function(t) {
            var n, r;
            n = e(this.element);
            this.data = e.data(this);
            r = t.originalEvent.touches[0];
            this._setuptouch();
            e.data(this, "touchtimer", Number(new Date));
            e.data(this, "touchstartx", r.pageX);
            e.data(this, "touchstarty", r.pageY);
            return t.stopPropagation()
        };
        r.prototype._touchend = function(t) {
            var n, r, i, s, o, u, a, f = this;
            n = e(this.element);
            this.data = e.data(this);
            u = t.originalEvent.touches[0];
            s = e(".slidesjs-control", n);
            if (s.position().left > this.options.width * .5 || s.position().left > this.options.width * .1 && Number(new Date) - this.data.touchtimer < 250) {
                e.data(this, "direction", "previous");
                this._slide()
            } else if (s.position().left < -(this.options.width * .5) || s.position().left < -(this.options.width * .1) && Number(new Date) - this.data.touchtimer < 250) {
                e.data(this, "direction", "next");
                this._slide()
            } else {
                i = this.data.vendorPrefix;
                a = i + "Transform";
                r = i + "TransitionDuration";
                o = i + "TransitionTimingFunction";
                s[0].style[a] = "translateX(0px)";
                s[0].style[r] = this.options.effect.slide.speed * .85 + "ms"
            }
            s.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                i = f.data.vendorPrefix;
                a = i + "Transform";
                r = i + "TransitionDuration";
                o = i + "TransitionTimingFunction";
                s[0].style[a] = "";
                s[0].style[r] = "";
                return s[0].style[o] = ""
            });
            return t.stopPropagation()
        };
        r.prototype._touchmove = function(t) {
            var n, r, i, s, o;
            n = e(this.element);
            this.data = e.data(this);
            s = t.originalEvent.touches[0];
            r = this.data.vendorPrefix;
            i = e(".slidesjs-control", n);
            o = r + "Transform";
            e.data(this, "scrolling", Math.abs(s.pageX - this.data.touchstartx) < Math.abs(s.pageY - this.data.touchstarty));
            if (!this.data.animating && !this.data.scrolling) {
                t.preventDefault();
                this._setuptouch();
                i[0].style[o] = "translateX(" + (s.pageX - this.data.touchstartx) + "px)"
            }
            return t.stopPropagation()
        };
        r.prototype.play = function(t) {
            var n, r, i, s = this;
            n = e(this.element);
            this.data = e.data(this);
            if (!this.data.playInterval) {
                if (t) {
                    r = this.data.current;
                    this.data.direction = "next";
                    this.options.play.effect === "fade" ? this._fade() : this._slide()
                }
                e.data(this, "playInterval", setInterval(function() {
                    r = s.data.current;
                    s.data.direction = "next";
                    return s.options.play.effect === "fade" ? s._fade() : s._slide()
                }, this.options.play.interval));
                i = e(".slidesjs-container", n);
                if (this.options.play.pauseOnHover) {
                    i.unbind();
                    i.bind("mouseenter", function() {
                        return s.stop()
                    });
                    i.bind("mouseleave", function() {
                        return s.options.play.restartDelay ? e.data(s, "restartDelay", setTimeout(function() {
                            return s.play(!0)
                        }, s.options.play.restartDelay)) : s.play()
                    })
                }
                e.data(this, "playing", !0);
                e(".slidesjs-play", n).addClass("slidesjs-playing");
                if (this.options.play.swap) {
                    e(".slidesjs-play", n).hide();
                    return e(".slidesjs-stop", n).show()
                }
            }
        };
        r.prototype.stop = function(t) {
            var n;
            n = e(this.element);
            this.data = e.data(this);
            clearInterval(this.data.playInterval);
            this.options.play.pauseOnHover && t && e(".slidesjs-container", n).unbind();
            e.data(this, "playInterval", null);
            e.data(this, "playing", !1);
            e(".slidesjs-play", n).removeClass("slidesjs-playing");
            if (this.options.play.swap) {
                e(".slidesjs-stop", n).hide();
                return e(".slidesjs-play", n).show()
            }
        };
        r.prototype._slide = function(t) {
            var n, r, i, s, o, u, a, f, l, c, h = this;
            n = e(this.element);
            this.data = e.data(this);
            if (!this.data.animating && t !== this.data.current + 1) {
                e.data(this, "animating", !0);
                r = this.data.current;
                if (t > -1) {
                    t -= 1;
                    c = t > r ? 1 : -1;
                    i = t > r ? -this.options.width : this.options.width;
                    o = t
                } else {
                    c = this.data.direction === "next" ? 1 : -1;
                    i = this.data.direction === "next" ? -this.options.width : this.options.width;
                    o = r + c
                }
                o === -1 && (o = this.data.total - 1);
                o === this.data.total && (o = 0);
                this._setActive(o);
                a = e(".slidesjs-control", n);
                t > -1 && a.children(":not(:eq(" + r + "))").css({
                    display: "none",
                    left: 0,
                    zIndex: 0
                });
                a.children(":eq(" + o + ")").css({
                    display: "block",
                    left: c * this.options.width,
                    zIndex: 10
                });
                this.options.callback.start(r + 1);
                if (this.data.vendorPrefix) {
                    u = this.data.vendorPrefix;
                    l = u + "Transform";
                    s = u + "TransitionDuration";
                    f = u + "TransitionTimingFunction";
                    a[0].style[l] = "translateX(" + i + "px)";
                    a[0].style[s] = this.options.effect.slide.speed + "ms";
                    return a.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                        a[0].style[l] = "";
                        a[0].style[s] = "";
                        a.children(":eq(" + o + ")").css({
                            left: 0
                        });
                        a.children(":eq(" + r + ")").css({
                            display: "none",
                            left: 0,
                            zIndex: 0
                        });
                        e.data(h, "current", o);
                        e.data(h, "animating", !1);
                        a.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd");
                        a.children(":not(:eq(" + o + "))").css({
                            display: "none",
                            left: 0,
                            zIndex: 0
                        });
                        h.data.touch && h._setuptouch();
                        return h.options.callback.complete(o + 1)
                    })
                }
                return a.stop().animate({
                    left: i
                }, this.options.effect.slide.speed, function() {
                    a.css({
                        left: 0
                    });
                    a.children(":eq(" + o + ")").css({
                        left: 0
                    });
                    return a.children(":eq(" + r + ")").css({
                        display: "none",
                        left: 0,
                        zIndex: 0
                    }, e.data(h, "current", o), e.data(h, "animating", !1), h.options.callback.complete(o + 1))
                })
            }
        };
        r.prototype._fade = function(t) {
            var n, r, i, s, o, u = this;
            n = e(this.element);
            this.data = e.data(this);
            if (!this.data.animating && t !== this.data.current + 1) {
                e.data(this, "animating", !0);
                r = this.data.current;
                if (t) {
                    t -= 1;
                    o = t > r ? 1 : -1;
                    i = t
                } else {
                    o = this.data.direction === "next" ? 1 : -1;
                    i = r + o
                }
                i === -1 && (i = this.data.total - 1);
                i === this.data.total && (i = 0);
                this._setActive(i);
                s = e(".slidesjs-control", n);
                s.children(":eq(" + i + ")").css({
                    display: "none",
                    left: 0,
                    zIndex: 10
                });
                this.options.callback.start(r + 1);
                if (this.options.effect.fade.crossfade) {
                    s.children(":eq(" + this.data.current + ")").stop().fadeOut(this.options.effect.fade.speed);
                    return s.children(":eq(" + i + ")").stop().fadeIn(this.options.effect.fade.speed, function() {
                        s.children(":eq(" + i + ")").css({
                            zIndex: 0
                        });
                        e.data(u, "animating", !1);
                        e.data(u, "current", i);
                        return u.options.callback.complete(i + 1)
                    })
                }
                return s.children(":eq(" + r + ")").stop().fadeOut(this.options.effect.fade.speed, function() {
                    s.children(":eq(" + i + ")").stop().fadeIn(u.options.effect.fade.speed, function() {
                        return s.children(":eq(" + i + ")").css({
                            zIndex: 10
                        })
                    });
                    e.data(u, "animating", !1);
                    e.data(u, "current", i);
                    return u.options.callback.complete(i + 1)
                })
            }
        };
        r.prototype._getVendorPrefix = function() {
            var e, t, r, i, s;
            e = n.body || n.documentElement;
            r = e.style;
            i = "transition";
            s = ["Moz", "Webkit", "Khtml", "O", "ms"];
            i = i.charAt(0).toUpperCase() + i.substr(1);
            t = 0;
            while (t < s.length) {
                if (typeof r[s[t] + i] == "string") return s[t];
                t++
            }
            return !1
        };
        return e.fn[s] = function(t) {
            return this.each(function() {
                if (!e.data(this, "plugin_" + s)) return e.data(this, "plugin_" + s, new r(this, t))
            })
        }
    })(jQuery, window, document)
}).call(this);
$(function() {
    var e = $("#ajax-contact");
    var t = $("#form-messages");
    $(e).submit(function(n) {
        n.preventDefault();
        var r = $(e).serialize();
        $.ajax({
            type: "POST",
            url: $(e).attr("action"),
            data: r
        }).done(function(e) {
            $(t).removeClass("error");
            $(t).addClass("success");
            $(t).text(e);
            $("#name").val("");
            $("#email").val("");
            $("#message").val("");
            $('#form-messages').removeClass('displaynone');
            $( ".submit" ).hide();
        }).fail(function(e) {
            $(t).removeClass("success");
            $(t).addClass("error");
            if (e.responseText !== "") {
                $(t).text('<p>'+e.responseText+'</p>')
            } else {
                $(t).text("<p>Oops! An error occured and your message could not be sent.</p>")
            }
        })
    })
})

$( ".submit" ).click(function() {
  $('#form-messages').removeClass('displaynone');
});

// This puts the image of the art after the artist's bio
$( window ).on("load resize", function() {
    if($(window).width() < 1024) {
        $(".page-artist .column-small").each(function() {
            var item = $(this);
            item.insertAfter(item.next());
        });
    } else {
        $(".page-artist .column-large").each(function() {
            var item = $(this);
            item.insertAfter(item.next());
        });
    }
})