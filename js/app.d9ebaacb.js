(function(t){function e(e){for(var i,o,r=e[0],p=e[1],l=e[2],c=0,d=[];c<r.length;c++)o=r[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(t[i]=p[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var p=n[r];0!==a[p]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],p=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=p;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"41f3":function(t,e,n){"use strict";var i=n("f884"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=n("bc3a"),s=n.n(a),o=n("a7fe"),r=n.n(o),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{on:{sendData:function(e){return t.sendToLatest(e)}}}),n("Latest",{attrs:{passthru:t.snipps},on:{deleteSnippet:function(e){return t.deleteSnipp(e)}}}),t.submitting?n("p",{staticClass:"submittingText"},[t._v("Submitting...")]):t._e(),t.loading?n("p",{staticClass:"loadingText"},[t._v("Loading our Snippets...")]):t._e()],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("Upload",{on:{inputData:function(e){return t.sendData(e)}}})],1)},c=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"upload"}},[n("div",{staticClass:"addSnipp"},[n("h2",[t._v("Add a SNIPPet")]),n("p",[t._v("Try Press enter to Upload a Snippet or use the button!")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"text",placeholder:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),n("button",{staticClass:"btn",on:{click:function(e){return t.inputData()}}},[t._v("Add Snippet")])])])},f=[],h={name:"Upload",data:function(){return{title:"",content:"",myInput:""}},methods:{inputData:function(){var t=[this.title,this.content];this.$emit("inputData",t)}}},v=h,g=(n("41f3"),n("2877")),m=Object(g["a"])(v,d,f,!1,null,null,null),b=m.exports,_={name:"Header",components:{Upload:b},props:{inputData:Array},data:function(){return{title:"",content:""}},methods:{sendData:function(t){this.$emit("sendData",t),console.log("(HEADER)This is sendData: ",t)}}},S=_,y=Object(g["a"])(S,u,c,!1,null,"3d33d82b",null),x=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"latestsnipps"}},[n("div",{staticClass:"listSnippet"},[n("h3",[t._v("Our Snippets!")]),n("ol",t._l(t.passthru,(function(e){return n("li",{key:e.id},[n("p",{staticClass:"snippDelete",on:{click:function(n){return t.deleteSnipp(e.id)}}},[t._v("Delete")]),n("p",{staticClass:"snippID"},[t._v(t._s(e.id))]),n("p",{staticClass:"snippLable1"},[t._v("Title:")]),n("p",{staticClass:"snippValue1"},[t._v(t._s(e.title))]),n("p",{staticClass:"snippLable2"},[t._v("Content:")]),n("p",{staticClass:"snippValue2"},[t._v(t._s(e.content))])])})),0)])])},O=[],P={name:"Latestsnipps",props:{passthru:Array},methods:{deleteSnipp:function(t){this.$emit("deleteSnippet",t),console.log("(LATEST)EMIT - deleteSnipp: ",t)}}},T=P,D=(n("a4c7"),Object(g["a"])(T,w,O,!1,null,null,null)),j=D.exports,C="https://www.forverkliga.se/JavaScript/api/api-snippets.php",L="?latest",k={name:"App",data:function(){return{snipps:[],loading:!1,submitting:!1,title:"",content:""}},created:function(){var t=this;this.loading=!0,this.snipps=[],s.a.get(C+L).then((function(e){var n=e.data;t.snipps=n,t.loading=!1}))},methods:{sendToLatest:function(t){this.title=t[0],this.content=t[1],this.addSnipp(),console.log("(APP)This is sendToLatest: ",t)},fetchSnipps:function(){var t=this;this.loading=!0,this.snipps=[],s.a.get(C+L).then((function(e){var n=e.data;t.snipps=n,t.loading=!1}))},addSnipp:function(){var t=this;this.submitting=!0,console.log("(APP)addSnipp: ",this.title,this.content),s.a.post("https://forverkliga.se/JavaScript/api/api-snippets.php?",{add:"add",title:this.title,content:this.content}).then((function(e){console.log("axios returned: ",e),t.submitting=!1,t.fetchSnipps()}))},deleteSnipp:function(t){var e=this;this.submitting=!0,s.a.post("https://forverkliga.se/JavaScript/api/api-snippets.php?",{delete:"delete",id:t}).then((function(t){console.log("axios returned: ",t),e.submitting=!1,e.fetchSnipps()}))}},components:{Header:x,Latest:j}},A=k,E=(n("034f"),Object(g["a"])(A,p,l,!1,null,null,null)),$=E.exports;i["a"].config.productionTip=!1,i["a"].use(r.a,s.a),new i["a"]({render:function(t){return t($)}}).$mount("#app")},7941:function(t,e,n){},"85ec":function(t,e,n){},a4c7:function(t,e,n){"use strict";var i=n("7941"),a=n.n(i);a.a},f884:function(t,e,n){}});
//# sourceMappingURL=app.d9ebaacb.js.map