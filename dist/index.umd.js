!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.yNot={})}(this,function(e){"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var t,n=(function(e,t){var n;n=function(){var e,t=!1,n=function(e){if(e){var t,n=Object.keys(e),o=n.length;for(t=0;t<o;t++)this[n[t]]=e[n[t]]}};n.prototype={toString:function(){return JSON.stringify(this)},setValue:function(e,t){return this[e]=t,this}};var o=function(e){var t=[];return"#text"!==e.nodeName&&"#comment"!==e.nodeName&&(t.push(e.nodeName),e.attributes&&(e.attributes.class&&t.push(e.nodeName+"."+e.attributes.class.replace(/ /g,".")),e.attributes.id&&t.push(e.nodeName+"#"+e.attributes.id))),t},s=function(e){var t,n,s,i,a,r,l,u={},c={},d=e.length;for(r=0;r<d;r++)for(t=(n=e[r]).length,s=o(n),l=0;l<t;l++)(a=(i=s[l])in u)||i in c?a&&(delete u[i],c[i]=!0):u[i]=!0;return u},i=function(e,t){var n,o,i=s(e),a=s(t),r={},l=Object.keys(i),u=l.length;for(o=0;o<u;o++)a[n=l[o]]&&(r[n]=!0);return r},a=function(e){return delete e.outerDone,delete e.innerDone,delete e.valueDone,!e.childNodes||e.childNodes.every(a)},r=function(e,t){var n,o;if(!["nodeName","value","checked","selected","data"].every(function(n){return e[n]===t[n]}))return!1;if(Boolean(e.attributes)!==Boolean(t.attributes))return!1;if(Boolean(e.childNodes)!==Boolean(t.childNodes))return!1;if(e.attributes){if(n=Object.keys(e.attributes),o=Object.keys(t.attributes),n.length!==o.length)return!1;if(!n.every(function(n){return e.attributes[n]===t.attributes[n]}))return!1}if(e.childNodes){if(e.childNodes.length!==t.childNodes.length)return!1;if(!e.childNodes.every(function(e,n){return r(e,t.childNodes[n])}))return!1}return!0},l=function(e,t,n,o,s){var a,r,u;if(!e||!t)return!1;if(e.nodeName!==t.nodeName)return!1;if("#text"===e.nodeName)return!!s||e.data===t.data;if(e.nodeName in n)return!0;if(e.attributes&&t.attributes){if(e.attributes.id){if(e.attributes.id!==t.attributes.id)return!1;if(e.nodeName+"#"+e.attributes.id in n)return!0}if(e.attributes.class&&e.attributes.class===t.attributes.class)if(e.nodeName+"."+e.attributes.class.replace(/ /g,".")in n)return!0}return!!o||(r=e.childNodes?e.childNodes.slice().reverse():[],u=t.childNodes?t.childNodes.slice().reverse():[],r.length===u.length&&(s?r.every(function(e,t){return e.nodeName===u[t].nodeName}):(a=i(r,u),r.every(function(e,t){return l(e,u[t],a,!0,!0)}))))},u=function(e){return JSON.parse(JSON.stringify(e))},c=function(e,t,n,s){var a,r,u,c=0,d=[],h=e.length,f=t.length,p=Array.apply(null,new Array(h+1)).map(function(){return[]}),m=i(e,t),_=h===f;for(_&&e.some(function(e,n){var s=o(e),i=o(t[n]);return s.length!==i.length?(_=!1,!0):(s.some(function(e,t){if(e!==i[t])return _=!1,!0}),!_||void 0)}),a=0;a<h;a++)for(u=e[a],r=0;r<f;r++)n[a]||s[r]||!l(u,t[r],m,_)?p[a+1][r+1]=0:(p[a+1][r+1]=p[a][r]?p[a][r]+1:1,p[a+1][r+1]>=c&&(c=p[a+1][r+1],d=[a+1,r+1]));return 0!==c&&{oldValue:d[0]-c,newValue:d[1]-c,length:c}},d=function(e,t){return Array.apply(null,new Array(e)).map(function(){return t})};function h(e,t,n){var o=e[t];e[t]=e[n],e[n]=o}var f=function(){this.list=[]};f.prototype={list:!1,add:function(e){this.list.push.apply(this.list,e)},forEach:function(e){var t,n=this.list.length;for(t=0;t<n;t++)e(this.list[t])}};var p=function(e){var t,n,o={debug:!1,diffcap:10,maxDepth:!1,maxChildCount:50,maxChildDiffCount:3,valueDiffing:!0,textDiff:function(){arguments[0].data=arguments[3]},preVirtualDiffApply:function(){},postVirtualDiffApply:function(){},preDiffApply:function(){},postDiffApply:function(){},filterOuterDiff:null,compress:!1};for(t in void 0===e&&(e={}),o)this[t]=void 0===e[t]?o[t]:e[t];var s={addAttribute:"addAttribute",modifyAttribute:"modifyAttribute",removeAttribute:"removeAttribute",modifyTextElement:"modifyTextElement",relocateGroup:"relocateGroup",removeElement:"removeElement",addElement:"addElement",removeTextElement:"removeTextElement",addTextElement:"addTextElement",replaceElement:"replaceElement",modifyValue:"modifyValue",modifyChecked:"modifyChecked",modifySelected:"modifySelected",modifyComment:"modifyComment",action:"action",route:"route",oldValue:"oldValue",newValue:"newValue",element:"element",group:"group",from:"from",to:"to",name:"name",value:"value",data:"data",attributes:"attributes",nodeName:"nodeName",childNodes:"childNodes",checked:"checked",selected:"selected"};if(this.compress)for(t in n=0,this._const={},s)this._const[t]=n,n++;else this._const=s};return p.Diff=n,p.prototype={diff:function(t,n){var o=this.nodeToObj(t),s=this.nodeToObj(n);return e=0,this.debug&&(this.t1Orig=this.nodeToObj(t),this.t2Orig=this.nodeToObj(n)),this.tracker=new f,this.findDiffs(o,s)},findDiffs:function(n,o){var s;do{if(this.debug&&(e+=1)>this.diffcap)throw window.diffError=[this.t1Orig,this.t2Orig],new Error("surpassed diffcap:"+JSON.stringify(this.t1Orig)+" -> "+JSON.stringify(this.t2Orig));0===(s=this.findNextDiff(n,o,[])).length&&(r(n,o)||(t?(console.error("Could not find remaining diffs!"),console.log({t1:n,t2:o})):(t=!0,a(n),s=this.findNextDiff(n,o,[])))),s.length>0&&(t=!1,this.tracker.add(s),this.applyVirtual(n,s))}while(s.length>0);return this.tracker.list},findNextDiff:function(e,t,n){var o,s;if(this.maxDepth&&n.length>this.maxDepth)return[];if(!e.outerDone){if(o=this.findOuterDiff(e,t,n),this.filterOuterDiff&&(s=this.filterOuterDiff(e,t,o))&&(o=s),o.length>0)return e.outerDone=!0,o;e.outerDone=!0}if(!e.innerDone){if((o=this.findInnerDiff(e,t,n)).length>0)return o;e.innerDone=!0}if(this.valueDiffing&&!e.valueDone){if((o=this.findValueDiff(e,t,n)).length>0)return e.valueDone=!0,o;e.valueDone=!0}return[]},findOuterDiff:function(e,t,o){var s,i,a,l,c,d,h=this,f=[];if(e.nodeName!==t.nodeName)return[(new n).setValue(h._const.action,h._const.replaceElement).setValue(h._const.oldValue,u(e)).setValue(h._const.newValue,u(t)).setValue(h._const.route,o)];if(o.length&&this.maxChildCount&&e.childNodes&&t.childNodes&&e.childNodes.length>this.maxChildCount&&t.childNodes.length>this.maxChildCount){for(var p=e.childNodes.length<t.childNodes.length?e.childNodes.length:t.childNodes.length,m=0,_=0;m<this.maxChildDiffCount&&_<p;)r(e.childNodes[_],t.childNodes[_])||m++,_++;if(m===this.maxChildDiffCount)return[(new n).setValue(h._const.action,h._const.replaceElement).setValue(h._const.oldValue,u(e)).setValue(h._const.newValue,u(t)).setValue(h._const.route,o)]}if(e.data!==t.data)return"#text"===e.nodeName?[(new n).setValue(h._const.action,h._const.modifyTextElement).setValue(h._const.route,o).setValue(h._const.oldValue,e.data).setValue(h._const.newValue,t.data)]:[(new n).setValue(h._const.action,h._const.modifyComment).setValue(h._const.route,o).setValue(h._const.oldValue,e.data).setValue(h._const.newValue,t.data)];for(i=e.attributes?Object.keys(e.attributes).sort():[],a=t.attributes?Object.keys(t.attributes).sort():[],l=i.length,d=0;d<l;d++)-1===(c=a.indexOf(s=i[d]))?f.push((new n).setValue(h._const.action,h._const.removeAttribute).setValue(h._const.route,o).setValue(h._const.name,s).setValue(h._const.value,e.attributes[s])):(a.splice(c,1),e.attributes[s]!==t.attributes[s]&&f.push((new n).setValue(h._const.action,h._const.modifyAttribute).setValue(h._const.route,o).setValue(h._const.name,s).setValue(h._const.oldValue,e.attributes[s]).setValue(h._const.newValue,t.attributes[s])));for(l=a.length,d=0;d<l;d++)s=a[d],f.push((new n).setValue(h._const.action,h._const.addAttribute).setValue(h._const.route,o).setValue(h._const.name,s).setValue(h._const.value,t.attributes[s]));return f},nodeToObj:function(e){var t,n,o,s,i={};if(i.nodeName=e.nodeName,"#text"===i.nodeName||"#comment"===i.nodeName)i.data=e.data;else{if(e.attributes&&e.attributes.length>0)for(i.attributes={},n=(t=Array.prototype.slice.call(e.attributes)).length,s=0;s<n;s++)i.attributes[(o=t[s]).name]=o.value;if("TEXTAREA"===i.nodeName)i.value=e.value;else if(e.childNodes&&e.childNodes.length>0)for(i.childNodes=[],n=(t=Array.prototype.slice.call(e.childNodes)).length,s=0;s<n;s++)i.childNodes.push(this.nodeToObj(t[s]));this.valueDiffing&&(void 0!==e.checked&&e.type&&-1!==["radio","checkbox"].indexOf(e.type.toLowerCase())?i.checked=e.checked:void 0!==e.value&&(i.value=e.value),void 0!==e.selected&&(i.selected=e.selected))}return i},objToNode:function(e,t){var n,o,s,i,a,r;if("#text"===e.nodeName)n=document.createTextNode(e.data);else if("#comment"===e.nodeName)n=document.createComment(e.data);else{if("svg"===e.nodeName||t?(n=document.createElementNS("http://www.w3.org/2000/svg",e.nodeName),t=!0):n=document.createElement(e.nodeName),e.attributes)for(a=(s=Object.keys(e.attributes)).length,r=0;r<a;r++)n.setAttribute(o=s[r],e.attributes[o]);if(e.childNodes)for(a=(i=e.childNodes).length,r=0;r<a;r++)n.appendChild(this.objToNode(i[r],t));this.valueDiffing&&(e.value&&(n.value=e.value),e.checked&&(n.checked=e.checked),e.selected&&(n.selected=e.selected))}return n},findInnerDiff:function(e,t,o){var s,i,a,r,l,h=e.subsets&&e.subsetsAge--?e.subsets:e.childNodes&&t.childNodes?function(e,t){for(var n,o,s,i=e.childNodes?e.childNodes:[],a=t.childNodes?t.childNodes:[],r=d(i.length,!1),l=d(a.length,!1),u=[],h=!0,f=function(){return arguments[1]},p=function(e){r[h.oldValue+e]=!0,l[h.newValue+e]=!0};h;)if(h=c(i,a,r,l))for(u.push(h),n=(o=Array.apply(null,new Array(h.length)).map(f)).length,s=0;s<n;s++)p(o[s]);return e.subsets=u,e.subsetsAge=100,u}(e,t):[],f=e.childNodes?e.childNodes:[],p=t.childNodes?t.childNodes:[],m=[],_=0,V=this;if(h.length>0&&(m=this.attemptGroupRelocation(e,t,h,o)).length>0)return m;for(i=Math.max(f.length,p.length),f.length!==p.length&&(s=!0),l=0;l<i;l+=1)a=f[l],r=p[l],s&&(a&&!r?"#text"===a.nodeName?(m.push((new n).setValue(V._const.action,V._const.removeTextElement).setValue(V._const.route,o.concat(_)).setValue(V._const.value,a.data)),_-=1):(m.push((new n).setValue(V._const.action,V._const.removeElement).setValue(V._const.route,o.concat(_)).setValue(V._const.element,u(a))),_-=1):r&&!a&&m.push("#text"===r.nodeName?(new n).setValue(V._const.action,V._const.addTextElement).setValue(V._const.route,o.concat(_)).setValue(V._const.value,r.data):(new n).setValue(V._const.action,V._const.addElement).setValue(V._const.route,o.concat(_)).setValue(V._const.element,u(r)))),a&&r&&(m=m.concat(this.findNextDiff(a,r,o.concat(_)))),_+=1;return e.innerDone=!0,m},attemptGroupRelocation:function(e,t,o,s){var i,a,r,c,h,f,p,m,_,V=this,g=function(e,t,n){var o,s,i,a,r,l=e.childNodes?d(e.childNodes.length,!0):[],u=t.childNodes?d(t.childNodes.length,!0):[],c=0,h=n.length;for(o=0;o<h;o++){for(i=(r=n[o]).oldValue+r.length,a=r.newValue+r.length,s=r.oldValue;s<i;s+=1)l[s]=c;for(s=r.newValue;s<a;s+=1)u[s]=c;c+=1}return{gaps1:l,gaps2:u}}(e,t,o),v=g.gaps1,b=g.gaps2,y=Math.min(v.length,b.length),N=[];for(m=0,p=0;m<y;p+=1,m+=1)if(!0===v[m])if("#text"===(c=e.childNodes[p]).nodeName){if("#text"===t.childNodes[m].nodeName&&c.data!==t.childNodes[m].data){for(f=p;e.childNodes.length>f+1&&"#text"===e.childNodes[f+1].nodeName;)if(t.childNodes[m].data===e.childNodes[f+=1].data){h=!0;break}if(!h)return N.push((new n).setValue(V._const.action,V._const.modifyTextElement).setValue(V._const.route,s.concat(m)).setValue(V._const.oldValue,c.data).setValue(V._const.newValue,t.childNodes[m].data)),N}N.push((new n).setValue(V._const.action,V._const.removeTextElement).setValue(V._const.route,s.concat(m)).setValue(V._const.value,c.data)),v.splice(m,1),y=Math.min(v.length,b.length),m-=1}else N.push((new n).setValue(V._const.action,V._const.removeElement).setValue(V._const.route,s.concat(m)).setValue(V._const.element,u(c))),v.splice(m,1),y=Math.min(v.length,b.length),m-=1;else if(!0===b[m])"#text"===(c=t.childNodes[m]).nodeName?(N.push((new n).setValue(V._const.action,V._const.addTextElement).setValue(V._const.route,s.concat(m)).setValue(V._const.value,c.data)),v.splice(m,0,!0),y=Math.min(v.length,b.length),p-=1):(N.push((new n).setValue(V._const.action,V._const.addElement).setValue(V._const.route,s.concat(m)).setValue(V._const.element,u(c))),v.splice(m,0,!0),y=Math.min(v.length,b.length),p-=1);else if(v[m]!==b[m]){if(N.length>0)return N;if(r=o[v[m]],(a=Math.min(r.newValue,e.childNodes.length-r.length))!==r.oldValue){for(i=!1,_=0;_<r.length;_+=1)l(e.childNodes[a+_],e.childNodes[r.oldValue+_],[],!1,!0)||(i=!0);if(i)return[(new n).setValue(V._const.action,V._const.relocateGroup).setValue("groupLength",r.length).setValue(V._const.from,r.oldValue).setValue(V._const.to,a).setValue(V._const.route,s)]}}return N},findValueDiff:function(e,t,o){var s=[],i=this;return e.selected!==t.selected&&s.push((new n).setValue(i._const.action,i._const.modifySelected).setValue(i._const.oldValue,e.selected).setValue(i._const.newValue,t.selected).setValue(i._const.route,o)),(e.value||t.value)&&e.value!==t.value&&"OPTION"!==e.nodeName&&s.push((new n).setValue(i._const.action,i._const.modifyValue).setValue(i._const.oldValue,e.value).setValue(i._const.newValue,t.value).setValue(i._const.route,o)),e.checked!==t.checked&&s.push((new n).setValue(i._const.action,i._const.modifyChecked).setValue(i._const.oldValue,e.checked).setValue(i._const.newValue,t.checked).setValue(i._const.route,o)),s},applyVirtual:function(e,t){var n,o=t.length;if(0===o)return!0;for(n=0;n<o;n++)this.applyVirtualDiff(e,t[n]);return!0},getFromVirtualRoute:function(e,t){var n,o,s=e;for(t=t.slice();t.length>0;){if(!s.childNodes)return!1;o=t.splice(0,1)[0],n=s,s=s.childNodes[o]}return{node:s,parentNode:n,nodeIndex:o}},applyVirtualDiff:function(e,t){var n,o,s,i,a,r,l,c=this.getFromVirtualRoute(e,t[this._const.route]),d=c.node,h=c.parentNode,f=c.nodeIndex,p=[],m=this,_={diff:t,node:d};if(this.preVirtualDiffApply(_))return!0;switch(t[this._const.action]){case this._const.addAttribute:d.attributes||(d.attributes={}),d.attributes[t[this._const.name]]=t[this._const.value],"checked"===t[this._const.name]?d.checked=!0:"selected"===t[this._const.name]?d.selected=!0:"INPUT"===d.nodeName&&"value"===t[this._const.name]&&(d.value=t[this._const.value]);break;case this._const.modifyAttribute:d.attributes[t[this._const.name]]=t[this._const.newValue],"INPUT"===d.nodeName&&"value"===t[this._const.name]&&(d.value=t[this._const.value]);break;case this._const.removeAttribute:delete d.attributes[t[this._const.name]],0===Object.keys(d.attributes).length&&delete d.attributes,"checked"===t[this._const.name]?d.checked=!1:"selected"===t[this._const.name]?delete d.selected:"INPUT"===d.nodeName&&"value"===t[this._const.name]&&delete d.value;break;case this._const.modifyTextElement:d.data=t[this._const.newValue];break;case this._const.modifyValue:d.value=t[this._const.newValue];break;case this._const.modifyComment:d.data=t[this._const.newValue];break;case this._const.modifyChecked:d.checked=t[this._const.newValue];break;case this._const.modifySelected:d.selected=t[this._const.newValue];break;case this._const.replaceElement:(o=u(t[this._const.newValue])).outerDone=!0,o.innerDone=!0,o.valueDone=!0,h.childNodes[f]=o;break;case this._const.relocateGroup:for(a=(s=d.childNodes.splice(t[this._const.from],t.groupLength).reverse()).length,l=0;l<a;l++)d.childNodes.splice(t[m._const.to],0,s[l]);d.subsets&&d.subsets.forEach(function(e){t[m._const.from]<t[m._const.to]&&e.oldValue<=t[m._const.to]&&e.oldValue>t[m._const.from]?(e.oldValue-=t.groupLength,(n=e.oldValue+e.length-t[m._const.to])>0&&(p.push({oldValue:t[m._const.to]+t.groupLength,newValue:e.newValue+e.length-n,length:n}),e.length-=n)):t[m._const.from]>t[m._const.to]&&e.oldValue>t[m._const.to]&&e.oldValue<t[m._const.from]?(e.oldValue+=t.groupLength,(n=e.oldValue+e.length-t[m._const.to])>0&&(p.push({oldValue:t[m._const.to]+t.groupLength,newValue:e.newValue+e.length-n,length:n}),e.length-=n)):e.oldValue===t[m._const.from]&&(e.oldValue=t[m._const.to])});break;case this._const.removeElement:h.childNodes.splice(f,1),h.subsets&&h.subsets.forEach(function(e){e.oldValue>f?e.oldValue-=1:e.oldValue===f?e.delete=!0:e.oldValue<f&&e.oldValue+e.length>f&&(e.oldValue+e.length-1===f?e.length--:(p.push({newValue:e.newValue+f-e.oldValue,oldValue:f,length:e.length-f+e.oldValue-1}),e.length=f-e.oldValue))}),d=h;break;case this._const.addElement:i=t[this._const.route].slice(),r=i.splice(i.length-1,1)[0],d=this.getFromVirtualRoute(e,i).node,(o=u(t[this._const.element])).outerDone=!0,o.innerDone=!0,o.valueDone=!0,d.childNodes||(d.childNodes=[]),r>=d.childNodes.length?d.childNodes.push(o):d.childNodes.splice(r,0,o),d.subsets&&d.subsets.forEach(function(e){e.oldValue>=r?e.oldValue+=1:e.oldValue<r&&e.oldValue+e.length>r&&(p.push({newValue:e.newValue+e.length-(n=e.oldValue+e.length-r),oldValue:r+1,length:n}),e.length-=n)});break;case this._const.removeTextElement:h.childNodes.splice(f,1),"TEXTAREA"===h.nodeName&&delete h.value,h.subsets&&h.subsets.forEach(function(e){e.oldValue>f?e.oldValue-=1:e.oldValue===f?e.delete=!0:e.oldValue<f&&e.oldValue+e.length>f&&(e.oldValue+e.length-1===f?e.length--:(p.push({newValue:e.newValue+f-e.oldValue,oldValue:f,length:e.length-f+e.oldValue-1}),e.length=f-e.oldValue))}),d=h;break;case this._const.addTextElement:i=t[this._const.route].slice(),r=i.splice(i.length-1,1)[0],(o={}).nodeName="#text",o.data=t[this._const.value],(d=this.getFromVirtualRoute(e,i).node).childNodes||(d.childNodes=[]),r>=d.childNodes.length?d.childNodes.push(o):d.childNodes.splice(r,0,o),"TEXTAREA"===d.nodeName&&(d.value=t[this._const.newValue]),d.subsets&&d.subsets.forEach(function(e){e.oldValue>=r&&(e.oldValue+=1),e.oldValue<r&&e.oldValue+e.length>r&&(p.push({newValue:e.newValue+e.length-(n=e.oldValue+e.length-r),oldValue:r+1,length:n}),e.length-=n)});break;default:console.log("unknown action")}d.subsets&&(d.subsets=d.subsets.filter(function(e){return!e.delete&&e.oldValue!==e.newValue}),p.length&&(d.subsets=d.subsets.concat(p))),_.newNode=o,this.postVirtualDiffApply(_)},apply:function(e,t){var n,o=t.length;if(0===o)return!0;for(n=0;n<o;n++)if(!this.applyDiff(e,t[n]))return!1;return!0},getFromRoute:function(e,t){t=t.slice();for(var n,o=e;t.length>0;){if(!o.childNodes)return!1;n=t.splice(0,1)[0],o=o.childNodes[n]}return o},applyDiff:function(e,t){var n,o,s,i,a,r,l,u=this.getFromRoute(e,t[this._const.route]),c=this,d={diff:t,node:u};if(this.preDiffApply(d))return!0;switch(t[this._const.action]){case this._const.addAttribute:if(!u||!u.setAttribute)return!1;u.setAttribute(t[this._const.name],t[this._const.value]);break;case this._const.modifyAttribute:if(!u||!u.setAttribute)return!1;u.setAttribute(t[this._const.name],t[this._const.newValue]);break;case this._const.removeAttribute:if(!u||!u.removeAttribute)return!1;u.removeAttribute(t[this._const.name]);break;case this._const.modifyTextElement:if(!u||3!==u.nodeType)return!1;this.textDiff(u,u.data,t[this._const.oldValue],t[this._const.newValue]);break;case this._const.modifyValue:if(!u||void 0===u.value)return!1;u.value=t[this._const.newValue];break;case this._const.modifyComment:if(!u||void 0===u.data)return!1;this.textDiff(u,u.data,t[this._const.oldValue],t[this._const.newValue]);break;case this._const.modifyChecked:if(!u||void 0===u.checked)return!1;u.checked=t[this._const.newValue];break;case this._const.modifySelected:if(!u||void 0===u.selected)return!1;u.selected=t[this._const.newValue];break;case this._const.replaceElement:u.parentNode.replaceChild(this.objToNode(t[this._const.newValue],"http://www.w3.org/2000/svg"===u.namespaceURI),u);break;case this._const.relocateGroup:for(a=(i=Array.apply(null,new Array(t.groupLength)).map(function(){return u.removeChild(u.childNodes[t[c._const.from]])})).length,r=0;r<a;r++)0===r&&(o=u.childNodes[t[c._const.to]]),u.insertBefore(i[r],o||null);break;case this._const.removeElement:u.parentNode.removeChild(u);break;case this._const.addElement:l=(s=t[this._const.route].slice()).splice(s.length-1,1)[0],(u=this.getFromRoute(e,s)).insertBefore(this.objToNode(t[this._const.element],"http://www.w3.org/2000/svg"===u.namespaceURI),u.childNodes[l]||null);break;case this._const.removeTextElement:if(!u||3!==u.nodeType)return!1;u.parentNode.removeChild(u);break;case this._const.addTextElement:if(l=(s=t[this._const.route].slice()).splice(s.length-1,1)[0],n=document.createTextNode(t[this._const.value]),!(u=this.getFromRoute(e,s))||!u.childNodes)return!1;u.insertBefore(n,u.childNodes[l]||null);break;default:console.log("unknown action")}return d.newNode=n,this.postDiffApply(d),!0},undo:function(e,t){var n,o=t.length;for(t=t.slice(),o||(t=[t]),t.reverse(),n=0;n<o;n++)this.undoDiff(e,t[n])},undoDiff:function(e,t){switch(t[this._const.action]){case this._const.addAttribute:t[this._const.action]=this._const.removeAttribute,this.applyDiff(e,t);break;case this._const.modifyAttribute:h(t,this._const.oldValue,this._const.newValue),this.applyDiff(e,t);break;case this._const.removeAttribute:t[this._const.action]=this._const.addAttribute,this.applyDiff(e,t);break;case this._const.modifyTextElement:case this._const.modifyValue:case this._const.modifyComment:case this._const.modifyChecked:case this._const.modifySelected:case this._const.replaceElement:h(t,this._const.oldValue,this._const.newValue),this.applyDiff(e,t);break;case this._const.relocateGroup:h(t,this._const.from,this._const.to),this.applyDiff(e,t);break;case this._const.removeElement:t[this._const.action]=this._const.addElement,this.applyDiff(e,t);break;case this._const.addElement:t[this._const.action]=this._const.removeElement,this.applyDiff(e,t);break;case this._const.removeTextElement:t[this._const.action]=this._const.addTextElement,this.applyDiff(e,t);break;case this._const.addTextElement:t[this._const.action]=this._const.removeTextElement,this.applyDiff(e,t);break;default:console.log("unknown action")}}},p},e.exports?t=e.exports=n():t.diffDOM=n()}(t={exports:{}},t.exports),t.exports),o=function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function s(e){return function(e){return"[object Object]"===Object.prototype.toString.call(e)}(e)?JSON.stringify(function(e){return Object.keys(e).sort().reduce(function(t,n){var s;return o({},t,((s={})[n]=e[n],s))},{})}(function(e){return Object.entries(e).reduce(function(e,t){var n,s=t[1];return"function"==typeof s?e:o({},e,((n={})[t[0]]=s,n))},{})}(e))):JSON.stringify(e)}function i(e,t){return e.reduce(function(e,n,o){var i=s(n),a=t.findIndex(function(e){return s(e)===i});if(a>-1)return e.concat([[o,a]])},[])}var a=function(){return/^<([a-z]+)([^>]*?)(\/?>|(>([\s\S]*?)<\/\1>))$/i};function r(e){var t,n,o=(t=e.trim(),(n=t.match(a()))?{tag:n[1],attributes:n[2]||"",innerHTML:n[5]||""}:null);if(!o)throw new Error("source: "+e+"; Not a valid element! check render()");var s=document.createElement(o.tag);s.innerHTML=o.innerHTML;var i=o.attributes;if(i){var r={};i.trim().replace(/([a-zA-Z]+)=([^'"]+|(['"])([^'"]+)\3)/g,function(e,t,n){return r[t]=n.replace(/['"]/g,""),e}),Object.entries(r).forEach(function(e){s.setAttribute(e[0],e[1])})}return s}function l(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];var s=e.parentElement;if(s){var i;if(!(i=Array.isArray(t)?t.concat(n):[t].concat(n)).length)throw new Error("Need to provide new DOM!");for(var a=e,r=i.length-1;r>=0;r--){var l=i[r];s.insertBefore(l,a),a=l}s.removeChild(e)}}var u,c=new n({preVirtualDiffApply:function(e){},preDiffApply:function(e){if("modifyValue"===e.diff.action)return!0}}),d=(u=function(e){return!(e[1]instanceof h)},function(e){return Object.entries(e).reduce(function(t,n){var o,s=n[0],i=n[1];return u([s,i],e)?Object.assign(t,((o={})[s]=i,o)):t},{})}),h=function(){function e(e){void 0===e&&(e={}),this.parent=null,this.renderOption={},this.props={},this.lastRenderSnapshot="",this.lastComponentsSnapshot={},this.mounted=!1,this.propsFunc=function(){return{}},this.renderOption=e,this.initProps(e.props)}return e.prototype.init=function(){return this.lastComponentsSnapshot=this.components(),this.update(),this.lastRenderSnapshot=this.render(),this},e.prototype.components=function(){return{}},e.prototype.didMount=function(){},e.prototype.didUpdate=function(){},e.prototype.willUnMount=function(){},e.prototype.shouldUpdate=function(){},e.prototype.render=function(){return"<div/>"},e.prototype.setState=function(e){var t=this;if(!e)throw new Error("You need to pass in a valid props object");var n=Object.entries(e).reduce(function(e,n){var o,s=n[0],i=n[1];if(!(s in t.state))return e;var a=i!==t.state[s];return{newState:Object.assign(e.newState,(o={},o[s]=i,o)),hasChanged:e.hasChanged||a}},{hasChanged:!1,newState:this.state});n.hasChanged&&(this.state=n.newState,this.update())},e.prototype.updateSelf=function(){if(this.shouldUpdateSelf()){var e=this.renderOption.el,t=this.ref,n=this.render();if(this.lastRenderSnapshot=n,n&&n.trim()){var o=r(n);if(t)return this.hasChildren()&&this.replaceSlotWithChild(this.lastComponentsSnapshot,o,!1),void this.patch(o);this.ref=o,!!e&&"string"==typeof e&&(document.querySelector(e).append(this.ref),this.mounted||this.mount())}}},e.prototype.update=function(){this.props=this.propsFunc(),this.updateChildren(),this.updateSelf()},e.prototype.updateChildren=function(){var e=this,t=this.components();if(this.hasChildren(t)){var n=this.lastComponentsSnapshot;Object.entries(t).forEach(function(t){var o=t[0],a=t[1],u=n[o];if(Array.isArray(a)&&Array.isArray(u)){a.forEach(function(t){return e.initChild(t)});var c=u.length,h=a.length,f=function e(t,n,o){void 0===o&&(o=0);var a=t.length,r=n.length;if(a===r)return t.reduce(function(e,t,i){var a=n[i];return"function"==typeof t&&"function"==typeof a?e:s(t)!==s(a)?e.concat([{index:i+o,oldValue:t,newValue:a,type:"E"}]):e},[]);if(a>r){if(0===r)return t.map(function(e,t){return{index:t+o,oldValue:e,newValue:void 0,type:"D"}});var l=i(t,n);return l.length===r?t.reduce(function(e,t,n){return l.some(function(e){return e[0]===n})?e:{index:n+o,oldValue:t,newValue:void 0,type:"D"}},[]):e(t.slice(0,r),n).concat(e(t.slice(r),[],r))}if(0===a)return n.map(function(e,t){return{index:t+o,oldValue:void 0,newValue:e,type:"A"}});var u=i(t,n);return u.length===a?n.reduce(function(e,t,n){return u.some(function(e){return e[1]===n})?e:e.concat([{index:n+o,oldValue:void 0,newValue:t,type:"A"}])},[]):e(t,n.slice(0,a)).concat(e([],n.slice(a),a))}(u.map(function(e){return e.props}).map(d),a.map(function(e){return e.props}).map(d)).reduce(function(e,t){return"E"===t.type&&e.update.push(t),"D"===t.type&&e.del.push(t),"A"===t.type&&e.add.push(t),e},{update:[],add:[],del:[]}),p=f.add,m=f.del;if(f.update.forEach(function(e){var t=e.index,n=u[t];n.propsFunc=a[t].propsFunc,n.update()}),p.length&&p.length===h+c){var _=e.ref.querySelector(o);_&&l(_,a.map(function(e){return e.ref})),a.forEach(function(e){return e.mount()}),e.lastComponentsSnapshot[o]=a}else{var V=u.map(function(e){return e.ref});p.forEach(function(t,n){var s=t.index,i=a[s];s<c?(!function(e,t){var n=e.parentElement;n&&n.insertBefore(t,e)}(V[s],i.ref),e.lastComponentsSnapshot[o].splice(s+n,0,i)):(!function(e,t){var n=e.parentElement;if(n){var o=e.nextElementSibling;o?n.insertBefore(t,o):n.appendChild(t)}}(s===c?u[c-1].ref:a[s-1].ref,i.ref),e.lastComponentsSnapshot[o][s]=i);i.mount()})}var g=m.length===c;m.forEach(function(t,n){var s,i,a=t.index,d=u[a];if(e.lastComponentsSnapshot[o].splice(a-n,1),d.willUnMount(),g&&a===c-1)return l(d.ref,r(o));(i=(s=d.ref).parentElement)&&i.removeChild(s)})}else Array.isArray(a)||Array.isArray(u)||u.update()})}},e.prototype.hasChildren=function(e){return void 0===e&&(e=this.lastComponentsSnapshot),Object.keys(e).length>0},e.prototype.initChild=function(e){e.parent=this},e.prototype.replaceSlotWithChild=function(e,t,n){var o=this;void 0===t&&(t=this.ref),void 0===n&&(n=!0),Object.entries(e).forEach(function(e){var t=e[0],s=e[1],i=null;if(Array.isArray(s)?s.length&&(s.forEach(function(e){return o.initChild(e)}),i=s.map(function(e){return n?e.ref:r(e.ref.outerHTML)})):(o.initChild(s),s.ref&&(i=n?s.ref:r(s.ref.outerHTML))),i){var a=o.ref.querySelector(t);a&&l(a,i)}n&&(Array.isArray(s)?s.forEach(function(e){e.ref&&e.mount()}):s.ref&&s.mount())})},e.prototype.shouldUpdateSelf=function(){var e=this.shouldUpdate();return"boolean"==typeof e?e:this.render()!==this.lastRenderSnapshot},e.prototype.initProps=function(e){e&&(e&&"function"==typeof e?(this.propsFunc=e,this.props=e()):console.log("props should be function!"))},e.prototype.updateChain=function(){this.didUpdate(),this.parent&&this.parent instanceof e&&this.parent.updateChain()},e.prototype.register=function(){this.replaceSlotWithChild(this.lastComponentsSnapshot)},e.prototype.mount=function(){this.register(),this.didMount(),this.mounted=!0},e.prototype.patch=function(e){var t=c.diff(this.ref,e);c.apply(this.ref,t),this.updateChain()},e}();e.Component=h});
//# sourceMappingURL=index.umd.js.map
