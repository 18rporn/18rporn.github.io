(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7f14"],{5388:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col"}),s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"card card-l6"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"card-title"},[t._v("登录 "+t._s(t.$web_conf.application_name))]),s("form",{staticClass:"new_user",attrs:{id:"new_user",action:"/account/sign_in","accept-charset":"UTF-8",method:"post"}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{placeholder:"用户名 / Email",type:"text",name:"user[login]",id:"user_login"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"密码",name:"user[password]",id:"user_password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._m(0),s("div",{staticClass:"form-actions"},[s("input",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{disabled:t.submit_loading,type:"submit",name:"commit",value:"登录"},on:{click:t.on_submit}})])])])]),t._e()]),t._m(2),s("div",{staticClass:"col"})])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{attrs:{name:"user[remember_me]",type:"hidden",value:"0"}}),s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1",name:"user[remember_me]",id:"user_remember_me"}}),s("label",{staticClass:"custom-control-label",attrs:{for:"user_remember_me"}},[t._v("记住登录状态")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-body flex aic jcc"},[s("a",{staticClass:"btn btn-default omniauth-github",attrs:{rel:"nofollow","data-method":"post",href:"/account/auth/github"}},[s("i",{staticClass:"fab fa-github"}),t._v(" GitHub")]),s("a",{staticClass:"btn btn-default omniauth-twitter",attrs:{rel:"nofollow","data-method":"post",href:"/account/auth/twitter"}},[s("i",{staticClass:"fab fa-twitter"}),t._v(" Twitter")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"card"},[s("ul",{staticClass:"list-group list-group-flush"},[s("li",{staticClass:"list-group-item"},[s("a",{attrs:{href:"/account/register"}},[t._v("注册")])]),s("li",{staticClass:"list-group-item"},[s("a",{attrs:{href:"/account/forgot"}},[t._v("忘记了密码?")])])])])])}],i=(s("ac1f"),s("5319"),s("4b13"),{name:"login",data:function(){return{submit_loading:!1,user:{},referrer:""}},created:function(){if(this.$store.state.hasLogin)return this.$router.replace("/");window._t=this,document.referrer&&(this.referrer=document.referrer)},beforeRouteEnter:function(t,e,s){s((function(t){t.referrer=e.path}))},methods:{on_submit:function(){var t=this;if(!this.user.username||this.user.username.length<4)return this.$message("用户名过短,不少于4位",{theme:"error",position:"top-left",duration:5e3});if(!this.user.password||this.user.password.length<=6)return this.$message("密码过短，不能少于6位",{theme:"error",position:"top-left",duration:5e3});this.submit_loading=!0;var e=this.user;return e.referrer=this.referrer,this.$axios.post("/app/user/login",e).then((function(e){t.loading=!1;var s=e.data,r=s.user,a=s.token;t.$message("登录成功，正在跳转",{theme:"normal",position:"top-left",duration:5e3}),t.$store.commit("login",{userinfo:r,token:a}),t.referrer||(t.referrer="/"),t.$router.push(t.referrer)})).catch((function(e){t.submit_loading=!1})),!1}}}),o=i,n=s("2877"),u=Object(n["a"])(o,r,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c7f14.eaad3c49.js.map