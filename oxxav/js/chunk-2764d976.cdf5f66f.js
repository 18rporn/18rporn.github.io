(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2764d976"],{c82e:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-row",{staticClass:"cate_list"},[e("h2",{staticStyle:{"margin-bottom":"0px"}},[t._v("推荐")]),e("video_list",{attrs:{SET_ROW_COUNT:1,show_node:!0,video_list:t.recommend_javs}})],1)},i=[],n=(e("fb6a"),{name:"recommand_javs",data:function(){return{recommend_javs:void 0}},destroyed:function(){this.listener_init.off()},created:function(){var t=this;this.init(),this.listener_init=this.$hub.on("event:init",(function(){t.init(),t.$forceUpdate()}))},methods:{init:function(){this.update_threads()},update_threads:function(){this.recommend_javs=this.get_recommend_javs()},get_recommend_javs:function(){try{if(this.$store.state.init.data.recommend_javs.datas.length>0){var t=this.$store.state.init.data.recommend_javs.datas;return t.length>8&&(t=t.slice(0,8)),t}}catch(s){}}}}),o=n,r=e("2877"),d=e("6544"),c=e.n(d),_=e("0fd9"),h=Object(r["a"])(o,a,i,!1,null,"7c98658f",null);s["a"]=h.exports;c()(h,{VRow:_["a"]})},d242:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-container container row ",attrs:{id:"main"}},[e("script",{attrs:{type:"application/ld+json"}},[t._v(' { "@context": "http://schema.org", "@type": "WebSite", "name": "'+t._s(t.$web_conf.application_name)+'", "alternateName": "'+t._s(t.$web_conf.application_name)+'", "url": "https://'+t._s(t.$web_conf.current_host)+'", "description": "免费成人福利在线视频,在线看中国色情，日本色情，韩国色情,亚洲色情" } ')]),e("div",{staticClass:"col-9  mpr-0 mpl-0"},[e("ads_banner_list"),e("div",{staticClass:"card border-none video-card cate_list"},[t.last_threads?e("v-row",[e("h2",{},[t._v("最新")]),e("video_list",{attrs:{show_node:!0,video_list:t.last_threads}}),e("div",{staticClass:"card-footer hidden-mobile underline"},[e("router-link",{attrs:{to:"/topics/last"}},[t._v("查看更多最新...")])],1)],1):e("div",[e("q-skeleton",{attrs:{height:"150px",square:""}})],1)],1)],1),e("div",{staticClass:"sidebar col-3 "},[e("tags"),e("recommand_javs",{staticClass:"mt-2"}),e("ads_box_list",{staticClass:"mt-4"}),e("div",{staticClass:"card border-none"},[e("div",{staticClass:"card-body xxbtn"},[e("v-btn",{staticClass:"ma-2 full-width",attrs:{outlined:"",color:"primary"},on:{click:function(s){return t.go("/upload/video")}}},[e("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("fas fa-cloud-upload-alt")]),t._v(" 上传视频 ")],1)],1)]),e("item_tip")],1)])},i=[],n=(e("fb6a"),e("077f")),o=e("ec8e"),r=e("c82e"),d={name:"index",mixins:[n["a"],o["a"]],components:{recommand_javs:r["a"]},data:function(){return{video_class_name:"",show_what:void 0,show_node_dialog:!1,recommend_javs:void 0}},destroyed:function(){this.listener_init.off()},created:function(){var t=this;window._t=this,this.init(),this.listener_init=this.$hub.on("event:init",(function(){t.init(),t.$forceUpdate()})),this.video_class_name=this.video_col_class_name()},methods:{on_click_show_node:function(){this.show_node_dialog=!0,this.$forceUpdate()},on_select_forum:function(t){var s="/forum/"+t.fid;this.$router.push(s)},init:function(){this.update_threads(),this.carousel_threads&&this.carousel_threads.length>0&&(this.slide=this.carousel_threads[0]["id"])},update_threads:function(){this.last_threads=this.get_last_threads(),this.indextop_threads=this.get_indextop_threads(),this.carousel_threads=this.get_carousel_threads(),this.recommend_javs=this.get_recommend_javs()},get_last_threads:function(){try{if(this.$store.state.init.data.last_threads.datas.length>0)return this.$store.state.init.data.last_threads.datas}catch(t){}},get_indextop_threads:function(){try{if(this.$store.state.init.data.indextop_threads.datas.length>0)return this.$store.state.init.data.indextop_threads.datas}catch(t){}},get_carousel_threads:function(){try{if(this.$store.state.init.data.carousel_threads.datas.length>0)return this.$store.state.init.data.carousel_threads.datas}catch(t){}},get_recommend_javs:function(){try{if(this.$store.state.init.data.recommend_javs.datas.length>0){var t=this.$store.state.init.data.recommend_javs.datas;return t.length>8&&(t=t.slice(0,8)),t}}catch(s){}}}},c=d,_=e("2877"),h=e("fe09"),l=e("6544"),u=e.n(l),m=e("8336"),f=e("132d"),v=e("0fd9"),p=Object(_["a"])(c,a,i,!1,null,"400a882f",null);s["default"]=p.exports;p.options.components=Object.assign(Object.create(p.options.components||null),p.options.components||{},{QSkeleton:h["z"]}),u()(p,{VBtn:m["a"],VIcon:f["a"],VRow:v["a"]})}}]);
//# sourceMappingURL=chunk-2764d976.cdf5f66f.js.map