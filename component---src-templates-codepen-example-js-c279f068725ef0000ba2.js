(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{185:function(t,n,e){"use strict";e.r(n),function(t){var r=e(7),o=e.n(r),i=e(0),c=e(198),a=e(202),u=e(39),l={backgroundColor:u.a.brand,color:u.a.black,padding:"10px 25px",whiteSpace:"nowrap",transition:"background-color 0.2s ease-out",outline:0,border:"none",cursor:"pointer",":hover":{backgroundColor:u.a.white},display:"inline-block",fontSize:16},s=function(n){function e(){return n.apply(this,arguments)||this}o()(e,n);var r=e.prototype;return r.componentDidMount=function(){this.codepenForm.submit()},r.render=function(){var n=this,e=this.props,r=e.location,o=e.pageContext,i=o.action,u=o.payload;return t.createElement(a.a,{location:r},t.createElement(c.a,null,t.createElement("h1",null,"Redirecting to Codepen..."),t.createElement("form",{style:{paddingBottom:"50px"},ref:function(t){n.codepenForm=t},action:i,method:"POST"},t.createElement("input",{type:"hidden",name:"data",value:u}),t.createElement("p",null,"Not automatically redirecting?",t.createElement("br",null),t.createElement("br",null),t.createElement("input",{style:l,type:"submit",value:"Click here"})))))},e}(i.Component);n.default=s}.call(this,e(58))},208:function(t,n,e){var r=e(29),o=e(32),i=e(31),c=/"/g,a=function(t,n,e,r){var o=String(i(t)),a="<"+n;return""!==e&&(a+=" "+e+'="'+String(r).replace(c,"&quot;")+'"'),a+">"+o+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(a),r(r.P+r.F*o(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",e)}},213:function(t,n,e){"use strict";var r=e(29),o=e(86)(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(59)("includes")},214:function(t,n,e){"use strict";var r=e(29),o=e(215);r(r.P+r.F*e(216)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},215:function(t,n,e){var r=e(88),o=e(31);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(o(t))}},216:function(t,n,e){var r=e(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},220:function(t,n,e){"use strict";e(208)("small",function(t){return function(){return t(this,"small","","")}})}}]);
//# sourceMappingURL=component---src-templates-codepen-example-js-c279f068725ef0000ba2.js.map