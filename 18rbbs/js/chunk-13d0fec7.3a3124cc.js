(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13d0fec7"],{"4e96":function(t,e,i){"use strict";var a=i("e97f"),s=i.n(a);s.a},"5e85":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-container container row ",attrs:{id:"main"}},[t.topic_data?i("script",{attrs:{type:"application/ld+json"}},[t._v(' { "@context": "http://schema.org", "@type": "VideoObject", "name": "'+t._s(t.video_title())+'", "description": "-", } ')]):t._e(),t.topic_data?i("div",{staticClass:"col-9 pr-4 mpr-0 "},[i("ads_banner_list"),i("div",{staticClass:"card topic-detail video-card border-0 "},[i("h1",{staticClass:"card-header video_title none"},[t._v(t._s(t.video_title()))]),i("div",{staticClass:"card-header media clearfix"},[i("div",{staticClass:"media-body"},[i("h1",{staticClass:"media-heading"},[t.forum_conf?i("router-link",{staticClass:"node",attrs:{to:"/videos/"+t.forum_conf.fid}},[t._v(" "+t._s(t.forum_conf.name)+" ")]):t._e(),i("span",{staticClass:"title"},[t._v(" "+t._s(t.video_title())+" ")])],1),i("div",{staticClass:"info"},[t.topic_data.user&&t.topic_data.user.uid?i("router-link",{staticClass:"user-name",attrs:{to:"/user/"+t.topic_data.user.uid}},[t._v(t._s(t.topic_data.user.username)+" ")]):t._e(),i("span",{staticClass:"hidden-mobile"}),t._v(" · 发布于 "),i("abbr",{staticClass:"timeago"},[t._v(t._s(t.showDate(t.topic_data.release_time)))]),t.topic_data.updated_time&&t.topic_data.updated_time>t.topic_data.release_time?i("span",[t._v(" · 更新于 "),i("abbr",{staticClass:"timeago"},[t._v(t._s(t.showDate(t.topic_data.updated_time)))])]):t._e(),t._v(" · "+t._s(t.topic_data.view_count)+" 观看 ")],1)]),!t.is_mobile()&&t.topic_data.user&&t.topic_data.user.uid?i("div",{staticClass:"avatar media-right"},[i("router-link",{attrs:{title:"",to:"/user/"+t.topic_data.user.uid}},[i("img",{staticClass:"media-object avatar-48",attrs:{src:t.generate_avatar_url(t.topic_data.user)}})]),i("q-tooltip",[t._v(" "+t._s(t.topic_data.user.username)+" ")])],1):t._e()]),i("div",{staticClass:"card-body"},[t.show_view_watch_limit?i("view_watch_limit",{attrs:{topic_data:t.topic_data}}):t._e(),t.show_view_watch_limit?t._e():i("view_video",{attrs:{topic_data:t.topic_data}})],1)]),i("div",{staticClass:"card",attrs:{id:"replies"}},[i("comment_list",{ref:"comment_list",attrs:{topic_data:t.topic_data}})],1),t.topic_data?i("div",{staticClass:"card",attrs:{id:"reply"}},[i("comment_reply",{ref:"comment_reply",attrs:{topic_data:t.topic_data}})],1):t._e(),t.reletad_list?i("releated_list",{attrs:{reletad_list:t.reletad_list}}):t._e(),i("div")],1):i("div",{staticClass:"col-9 pr-4 mpr-0"},[i("q-card",{attrs:{flat:""}},[i("q-skeleton",{staticClass:"mb-2",attrs:{height:"50px",square:""}}),i("q-skeleton",{attrs:{height:"250px",square:""}}),i("q-card-section",[i("q-skeleton",{staticClass:"text-subtitle1",attrs:{type:"text"}}),i("q-skeleton",{staticClass:"text-subtitle1",attrs:{type:"text",width:"50%"}}),i("q-skeleton",{staticClass:"text-caption",attrs:{type:"text"}})],1)],1)],1),i("div",{staticClass:"sidebar col-3"},[i("tags"),i("ads_box_list",{staticClass:"mt-4"}),i("item_tip")],1)])},s=[],o=i("417f"),_=i("077f"),d=i("ec8e"),r=i("d5dc"),c=i("227a"),l=i("c96ad"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show_releated_list?i("div",{staticClass:"card border-0 video-card "},[i("div",{staticClass:"card-title card-header media clearfix "},[t._v("相关视频")]),i("div",{staticClass:" item-list card-boy"},[i("video_list",{attrs:{video_list:t.show_releated_list}})],1),t.is_show_more?i("div",{staticClass:" mt-2 underline"},[i("a",{staticClass:" ",on:{click:t.on_show_more}},[t._v("查看更多")])]):t._e()]):t._e()},h=[],p=(i("fb6a"),{mixins:[_["a"],d["a"]],name:"releated_list",props:{reletad_list:void 0},data:function(){return{video_class_name:"",show_releated_list:void 0,show_length:9}},created:function(){this.video_class_name=this.video_col_class_name(),this.update_show()},methods:{on_show_more:function(){this.show_length+=9,this.update_show()},update_show:function(){this.reletad_list&&(this.reletad_list.datas.length>this.show_length?this.show_releated_list=this.reletad_list.datas.slice(0,this.show_length):this.show_releated_list=this.reletad_list.datas)}},computed:{is_show_more:function(){return!!this.reletad_list&&this.show_length<this.reletad_list.datas.length}}}),u=p,v=i("2877"),m=Object(v["a"])(u,n,h,!1,null,"19015b52",null),f=m.exports,w={name:"video_view",mixins:[_["a"],d["a"]],components:{view_video:o["a"],comment_reply:r["a"],comment_list:c["a"],view_watch_limit:l["a"],releated_list:f},data:function(){return{topic_data:void 0,forum_conf:void 0,edit:!1,reletad_list:void 0}},computed:{is_manager:function(){try{return this.$store.state.user.userinfo.is_manager}catch(t){}return!1},show_view_watch_limit:function(){var t=this.$store.state.user_visit.get_look_list();return!this.$store.state.hasLogin&&t.length>2||!(!(t&&t.length>=5)||this.$store.state.user.userinfo.is_vip)}},created:function(){this.load_video()},methods:{load_video:function(){var t=this.$route.params.id,e=this.getUrlVars();e.edit,this.get_topic({id:t,from_cache:this.from_cache(),releted:!0,edit:e.edit,cb:this.on_load_topic_data})},on_load_topic_data:function(t,e,i){if(this.topic_data=t,this.set_title(this.video_title()),this.forum_conf=this.get_forum(t.fid),this.save_topic_data(t),this.topic_data.video_info&&!this.show_view_watch_limit){var a=this.topic_data.video_info.online_videos[0],s=a.hash_id;this.$store.state.user_visit.push(s)}e&&(this.edit=e),i&&(this.reletad_list=i)}},watch:{$route:function(t,e){this.topic_data=void 0,this.$nextTick(this.load_video)}}},C=w,b=(i("4e96"),i("fe09")),g=Object(v["a"])(C,a,s,!1,null,"63f3d9b0",null);e["default"]=g.exports;g.options.components=Object.assign(Object.create(g.options.components||null),g.options.components||{},{QTooltip:b["K"],QCard:b["h"],QSkeleton:b["B"],QCardSection:b["j"]})},e97f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-13d0fec7.3a3124cc.js.map