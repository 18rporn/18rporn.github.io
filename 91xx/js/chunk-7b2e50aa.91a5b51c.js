(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b2e50aa"],{"17b3":function(t,e,a){},"4b22":function(t,e,a){"use strict";var i=a("5a26"),s=a.n(i);s.a},"4d18":function(t,e,a){},"5a26":function(t,e,a){},"891e":function(t,e,a){"use strict";a("99af"),a("d81d"),a("a9e3"),a("d3b7"),a("25f0");var i=a("2909"),s=a("5530"),n=(a("17b3"),a("9d26")),r=a("dc22"),l=a("a9ad"),o=a("de2c"),u=a("7560"),c=a("58df");e["a"]=Object(c["a"])(l["a"],Object(o["a"])({onVisible:["init"]}),u["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(s["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var a=e%2===0?1:0,s=Math.floor(e/2),n=this.length-s+1+a;if(this.value>s&&this.value<n){var r=this.value-s+2,l=this.value+s-2-a;return[1,"..."].concat(Object(i["a"])(this.range(r,l)),["...",this.length])}if(this.value===s){var o=this.value+s-1-a;return[].concat(Object(i["a"])(this.range(1,o)),["...",this.length])}if(this.value===n){var u=this.value-s+1;return[1,"..."].concat(Object(i["a"])(this.range(u,this.length)))}return[].concat(Object(i["a"])(this.range(1,s)),["..."],Object(i["a"])(this.range(n,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var i=t;i<=e;i++)a.push(i);return a},genIcon:function(t,e,a,i,s){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{type:"button","aria-label":s},on:a?{}:{click:i}},[t(n["a"],[e])])])},genItem:function(t,e){var a=this,i=e===this.value&&(this.color||"primary"),s=e===this.value,n=s?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":s,"aria-label":this.$vuetify.lang.t(n,e)},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(a,i){return t("li",{key:i},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},e489:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notifications card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-title  clearfix"},[t._v(" 所有通知 "),a("span",{staticClass:"counter"},[t._v(t._s(t.total_count))]),t._m(0)]),t.message_list?a("div",{staticClass:"message-list"},[a("ul",t._l(t.message_list,(function(t){return a("message_item",{key:t["_id"],attrs:{message_data:t}})})),1),t.page_num>1?a("v-pagination",{staticClass:"mt-3",attrs:{length:t.page_num,"total-visible":t.is_mobile()?4:7,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},on:{input:t.on_page_change},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1):a("div",{staticClass:"notification-group"},[a("div",{staticClass:"no-records"},[t._v("没有通知")])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"actions"},[a("a",{staticClass:"text-danger",attrs:{id:"btn-remove-all","data-remote":"true",rel:"nofollow","data-method":"delete",href:"/notifications/clean"}},[a("i",{staticClass:"fa fa-trash"}),t._v(" "),a("span",[t._v("清空")])])])}],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[t._m(0),a("div",{staticClass:"message-content"},[a("h2",[t._v("系统消息 · "),a("time",{staticClass:"b2timeago",attrs:{datetime:"{[message.time]}",itemprop:"datePublished","data-tid":"19"}},[t._v(" "+t._s(t.showDate(t.message_data.time))+" ")])]),a("div",{domProps:{innerHTML:t._s(t.message_data.message_html)}})])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-icon"},[a("img",{staticClass:"avatar",attrs:{src:"https://cdn.jsdelivr.net/gh/hrkacc/img@2.4.2/wp-content/themes/b2/Assets/fontend/images/default-avatar.png"}})])}],l={name:"message_item",props:{message_data:void 0},created:function(){}},o=l,u=(a("4b22"),a("2877")),c=Object(u["a"])(o,n,r,!1,null,null,null),h=c.exports,g={name:"notify",components:{message_item:h},data:function(){return{page_num:void 0,page:1,message_list:[],total_count:void 0,PAGE_LIMIT:30}},created:function(){this.load_message_list(this.page)},methods:{on_page_change:function(t){this.pgae=parseInt(t),this.load_message_list(this.page)},load_message_list:function(t){var e=this,a=(parseInt(t)-1)*this.PAGE_LIMIT,i=this.PAGE_LIMIT;this.$axios.get("/app/message/list",{params:{id:this.id,start:a,limit:i}}).then((function(t){e.message_list=t.data.messages,e.total_count=t.data.total_count,e.on_message_loaded()})).catch((function(t){}))},on_message_loaded:function(){for(var t=this,e=[],a=0;a<this.message_list.length;++a)1==this.message_list[a].status&&e.push(this.message_list[a]["_id"]);e&&this.$axios.post("/app/message/read",{user_message_ids:e}).then((function(e){t.update_user_info()})).catch((function(t){}))}}},v=g,d=(a("e650"),a("6544")),p=a.n(d),m=a("891e"),f=Object(u["a"])(v,i,s,!1,null,null,null);e["default"]=f.exports;p()(f,{VPagination:m["a"]})},e650:function(t,e,a){"use strict";var i=a("4d18"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-7b2e50aa.91a5b51c.js.map