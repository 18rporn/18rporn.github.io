(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53dd80ba"],{"6bc2":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-container container"},[t.token||t.user.userinfo.email_verify?s("div",{staticClass:"fit flex flex-center text-center non-selectable q-pa-md card"},[s("v-alert",{staticClass:"full-width",attrs:{text:"",color:"info"}},[s("div",[t._v(" 恭喜你，邮箱已通过验证。 ")]),s("v-divider",{staticClass:"my-4 info",staticStyle:{opacity:"0.22"}}),s("div",[t._v(" 不支持修改邮箱，如果需要修改，请联系客服。 ")])],1)],1):s("div",{staticClass:"card pa-4"},[s("h2",{staticClass:"b__title mb-3"},[t._v(" 邮箱验证 ")]),t.$store.state.hasLogin&&t.user?s("div",[s("q-field",{staticClass:"mb-5",attrs:{hint:"邮箱一经注册不可更改",label:"邮箱","stack-label":""},scopedSlots:t._u([{key:"control",fn:function(){return[s("div",{staticClass:"self-center full-width no-outline",attrs:{tabindex:"0"}},[t._v(t._s(t.user.userinfo.email))])]},proxy:!0}],null,!1,1803863586)}),s("div",{staticClass:"submit xxbtn mb-3"},[s("q-btn",{attrs:{padding:"0px",disable:t.send_disable,loading:t.send_loading,color:"theme-color","text-color":"theme-color",label:t.send_label},on:{click:t.on_send_event}})],1),s("v-alert",{staticClass:"full-width",attrs:{text:"",color:"info"}},[s("div",[t._v(" 如果没有收到邮件，请前往垃圾箱查看。 ")])])],1):s("div",{staticClass:"full-width"},[s("v-alert",{attrs:{text:"",color:"info"}},[s("div",[t._v(" 尚未登录,请先 "),s("router-link",{attrs:{to:"/account/login"}},[t._v("登录")]),s("router-link",{attrs:{to:"/account/register"}},[t._v("注册")])],1)])],1)])])},n=[],a={name:"verify",data:function(){return{user:void 0,token:void 0,send_loading:!1,send_disable:!1,send_label:"发送验证邮件"}},created:function(){window._t=this,this.user=this.$store.state.user,this.token=this.$route.params.token},methods:{on_send_event:function(){var t=this;this.send_loading=!0;var e={action:"resend_email"};this.$axios.post("/app/user/info",e).then((function(e){console.log("response:",e),t.send_disable=!0,t.send_loading=!1,t.$messageX("已发送邮件，请前往邮箱验证！"),t.send_label="已发送邮件，请前往邮箱验证！"})).catch((function(){t.$messageX("网络问题，请重新尝试！"),t.send_loading=!1}))}}},o=a,r=s("2877"),l=s("fe09"),c=s("6544"),d=s.n(c),v=s("0798"),u=s("f3f3"),h=(s("8ce9"),s("7560")),f=h["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(u["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(u["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),_=Object(r["a"])(o,i,n,!1,null,"d21a81e8",null);e["default"]=_.exports;_.options.components=Object.assign(Object.create(_.options.components||null),_.options.components||{},{QField:l["q"],QBtn:l["h"]}),d()(_,{VAlert:v["a"],VDivider:f})},"8ce9":function(t,e,s){}}]);
//# sourceMappingURL=chunk-53dd80ba.7a88bd58.js.map