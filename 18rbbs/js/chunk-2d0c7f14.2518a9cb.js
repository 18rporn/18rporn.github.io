(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7f14"],{5388:function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"loginh"},[t("div",{staticClass:"universal contentBox"},[t("div",{staticClass:"content"},[t("div",{staticClass:"form"},[t("form",[t("div",{staticClass:"username"},[t("div",{staticClass:"inputBox"},[t("span",{staticClass:"inputBoxTips",class:{none:e.user.username&&e.user.username.length>0}},[e._v("用户名/邮箱")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{type:"username",autocomplete:"new-password",value:""},domProps:{value:e.user.username},on:{input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}})])]),t("div",{staticClass:"password"},[t("div",{staticClass:"inputBox"},[t("span",{staticClass:"inputBoxTips",class:{none:e.user.password&&e.user.password.length>0}},[e._v("请输入密码")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",autocomplete:"new-password",value:""},domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}})])]),e._m(0),t("div",{staticClass:"submit xxbtn"},[t("a",{staticClass:"btn btn-primary full-width",attrs:{disabled:e.submit_loading},on:{click:e.on_submit}},[e._v(e._s(e.$l("login")))])]),e._m(1)])])])])])},a=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[t("input",{attrs:{type:"checkbox",checked:"checked"}}),t("label",[e._v("记住我")]),t("a",{staticClass:"fr",attrs:{href:"/"}},[e._v("忘记密码？")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v(" 还没有账号？ "),t("a",{attrs:{href:"/user/register"}},[e._v("立即注册")])])}],n=(t("ac1f"),t("5319"),t("4b13"),{name:"login",data:function(){return{submit_loading:!1,user:{},referrer:""}},created:function(){if(this.$store.state.hasLogin)return this.$router.replace("/");window._t=this,document.referrer&&(this.referrer=document.referrer)},beforeRouteEnter:function(e,s,t){t((function(e){e.referrer=s.path}))},methods:{on_submit:function(){var e=this;if(!this.user.username||this.user.username.length<4)return this.$message("用户名过短,不少于4位",{theme:"error",position:"top-left",duration:5e3});if(!this.user.password||this.user.password.length<=6)return this.$message("密码过短，不能少于6位",{theme:"error",position:"top-left",duration:5e3});this.submit_loading=!0;var s=this.user;return s.referrer=this.referrer,this.$axios.post("/app/user/login",s).then((function(s){e.loading=!1;var t=s.data,r=t.user,a=t.token;e.$message("登录成功，正在跳转",{theme:"normal",position:"top-left",duration:5e3}),e.$store.commit("login",{userinfo:r,token:a}),e.referrer||(e.referrer="/"),e.$router.push(e.referrer)})).catch((function(s){e.submit_loading=!1})),!1}}}),i=n,o=t("2877"),u=Object(o["a"])(i,r,a,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c7f14.2518a9cb.js.map