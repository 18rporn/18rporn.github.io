(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1128b208"],{"143a":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"sub-navbar node-header node-header-with-node cat_list"},[i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.forum_conf.name)+" "),t.forum_topic_data?i("span",{staticClass:"total"},[t._v("共有 "+t._s(t.forum_topic_data.total_count)+" 个视频 ")]):t._e(),i("div",{staticClass:"pull-right"})]),i("div",{staticClass:"summary",attrs:{id:"node-summary"},domProps:{innerHTML:t._s(t.forum_conf.description)}})])]),i("div",{staticClass:"main-container container ",attrs:{id:"main"}},[i("div",{staticClass:"row m-100"},[i("div",{staticClass:"col-9 pr-4 mpr-0 video_container"},[i("ads_banner_list"),t.forum_topic_data?i("div",{staticClass:"topics topics-node border-0 card"},[t.forum_top_topic_data&&t.forum_top_topic_data.datas&&t.forum_top_topic_data.datas.length>0?i("div",{staticClass:"card-body item-list mb-4"},[i("video_list",{attrs:{set_top:!0,video_list:t.forum_top_topic_data.datas}})],1):t._e(),i("q-separator"),i("div",{staticClass:"card-body item-list"},[i("video_list",{attrs:{video_list:t.forum_topic_data.datas}})],1),i("v-pagination",{staticClass:"mt-3",attrs:{length:t.page_num,"total-visible":t.is_mobile()?4:7,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},on:{input:t.on_page_change},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1):t._e(),i("page_loading")],1),i("div",{staticClass:"sidebar col-3"},[i("tags"),i("ads_box_list",{staticClass:"mt-4"}),i("div",{staticClass:"card"},[i("v-btn",{staticClass:"ma-2 full-width",attrs:{outlined:"",color:"primary"},on:{click:function(a){return t.go("/upload/video")}}},[i("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("fas fa-cloud-upload-alt")]),t._v(" 上传视频 ")],1)],1),i("item_tip")],1)])])])},o=[],e=(i("b0c0"),i("077f")),n=i("7676"),c=i.n(n),_=i("ec8e"),d=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"sub-navbar node-header"},[i("div",{staticClass:"container"},[i("ul",{staticClass:"filter nav nav-pills"},[i("li",[i("a",{staticClass:"all-nodes",on:{click:t.on_click_show_node}},[t._v("全部 "),i("span",{staticClass:"caret-right"})])]),i("li",{class:{active:"cn"==t.show_what}},[i("router-link",{attrs:{to:"/videos/cn"}},[t._v("中文精品")])],1),i("li",{class:{active:"jav_censored"==t.show_what}},[i("router-link",{attrs:{to:"/videos/jav_censored"}},[t._v(" 日本有码 ")])],1),i("li",{class:{active:"jav_uncensored"==t.show_what}},[i("router-link",{attrs:{to:"/videos/jav_uncensored"}},[t._v("日本无码")])],1),i("li",{class:{active:"vr"==t.show_what}},[i("router-link",{attrs:{to:"/videos/vr"}},[t._v("日本VR")])],1),i("li",{class:{active:"eu"==t.show_what}},[i("router-link",{attrs:{to:"/videos/eu"}},[t._v("欧美")])],1)])])])},r=[],l={name:"tab",props:{show_what:void 0},data:function(){return{show_node_dialog:!1}},methods:{on_click_show_node:function(){this.show_node_dialog=!0,this.$forceUpdate()}}},p=l,u=i("2877"),h=Object(u["a"])(p,d,r,!1,null,"65d5ee70",null),v=h.exports,f={name:"c_video_list",mixins:[e["a"],_["a"]],components:{video_index_tab:v},data:function(){return{page:1,page_num:void 0,fid:void 0,forum_conf:void 0,forum_topic_data:void 0,forum_top_topic_data:void 0,video_class_name:""}},created:function(){window._t=this,this.load_page()},methods:{load_page:function(){this.load_list(),this.load_top_list(),this.forum_conf=this.get_forum(this.fid),this.video_class_name=this.video_col_class_name(),this.set_title(this.forum_conf.name)},on_page_change:function(){this.$router.push({query:c()(this.$route.query,{page:this.page})})},on_load_top_topic:function(t){this.forum_top_topic_data=t.data},on_load_topic:function(t){this.forum_topic_data=t.data,this.page_num=parseInt(this.forum_topic_data.total_count/this._g.PER_PAGE_COUNT)},load_list:function(){var t=this.getUrlVars();t.page&&(this.page=parseInt(t.page)),this.fid=this.$route.params.id;var a=(this.page-1)*this._g.PER_PAGE_COUNT;this.get_topic_list({fid:this.fid,start:a,limit:this._g.PER_PAGE_COUNT,settotop:!1,from_cache:this.from_cache(),online_videos:!0,cb:this.on_load_topic})},load_top_list:function(){var t=this.getUrlVars(),a=!this.$web_conf.debug;t.from_cache&&(a=JSON.parse(t.from_cache)),this.get_topic_list({fid:this.fid,start:0,limit:this._g.PER_PAGE_COUNT,settotop:!0,from_cache:a,online_videos:!0,cb:this.on_load_top_topic})}},watch:{$route:function(t,a){this.forum_topic_data=void 0,this.load_page()}}},m=f,g=(i("f2ec"),i("fe09")),b=i("6544"),w=i.n(b),C=i("8336"),k=i("132d"),E=i("891e"),P=Object(u["a"])(m,s,o,!1,null,"19dd16fa",null);a["default"]=P.exports;P.options.components=Object.assign(Object.create(P.options.components||null),P.options.components||{},{QSeparator:g["x"]}),w()(P,{VBtn:C["a"],VIcon:k["a"],VPagination:E["a"]})},"9ef4":function(t,a,i){},f2ec:function(t,a,i){"use strict";var s=i("9ef4"),o=i.n(s);o.a}}]);
//# sourceMappingURL=chunk-1128b208.5daa0bd5.js.map