(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d08f43fc"],{"166a":function(t,e,i){},1704:function(t,e,i){},"18fb":function(t,e,i){},"2f71":function(t,e,i){},3408:function(t,e,i){},"3ad0":function(t,e,i){},4274:function(t,e,i){"use strict";var s=i("18fb"),o=i.n(s);o.a},"5d41":function(t,e,i){var s=i("23e7"),o=i("861d"),n=i("825a"),a=i("5135"),l=i("06cf"),r=i("e163");function c(t,e){var i,s,u=arguments.length<3?t:arguments[2];return n(t)===u?t[e]:(i=l.f(t,e))?a(i,"value")?i.value:void 0===i.get?void 0:i.get.call(u):o(s=r(t))?c(s,e,u):void 0}s({target:"Reflect",stat:!0},{get:c})},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("4de4"),i("7db0"),i("c740"),i("4160"),i("caad"),i("c975"),i("fb6a"),i("a434"),i("a9e3"),i("2532"),i("159b");var s=i("5530"),o=(i("166a"),i("a452")),n=i("7560"),a=i("58df"),l=i("d9bd"),r=Object(a["a"])(o["a"],n["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(s["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(l["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var s=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,s))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex((function(e){return e===t}));this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});r.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"61d2":function(t,e,i){},"899c":function(t,e,i){},"8e5c":function(t,e,i){"use strict";var s=i("1704"),o=i.n(s);o.a},"9d65":function(t,e,i){"use strict";var s=i("d9bd"),o=i("a026");e["a"]=o["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(s["d"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},b48a:function(t,e,i){},b853:function(t,e,i){"use strict";var s=i("2f71"),o=i.n(s);o.a},db42:function(t,e,i){},e49f:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mb-4 row col-padding-0 release_thread"},[i("node_list_dialog",{attrs:{dialog_title:"请选择板块",show:t.show_node_dialog},on:{"update:show":function(e){t.show_node_dialog=e},on_select_forum:t.on_dialog_select_forum}}),t.editor?t._e():i("div",{staticClass:"col-9"},[i("div",{staticClass:"card pa-3"},[i("q-card-section",{staticClass:"p-0 mb-4"},[i("q-skeleton",{attrs:{height:"40px"}})],1),i("q-card-section",{staticClass:"p-0 mb-4"},[i("q-skeleton",{attrs:{height:"60px"}})],1),i("q-card-section",{staticClass:"p-0"},[i("q-skeleton",{attrs:{height:"450px"}})],1)],1)]),t.post_success?i("div",{staticClass:"col-9 pr-2 mpr-0",staticStyle:{"margin-bottom":"16px"}},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header"},[t._v("提示")]),i("div",{staticClass:"card-body"},[i("span",{staticClass:"mr-4"},[t._v(" "+t._s(t.post_success_tip))]),i("v-btn",{attrs:{color:"white darken-1",text:""},on:{click:function(e){t.post_success=!1}}},[t._v("继续编辑")]),i("div",{staticClass:"mt-3"},[i("v-btn",{attrs:{color:"white darken-1",text:""},on:{click:function(e){return t.go("/topic/"+t.edit_id+"?edit=true")}}},[t._v("查看(可能未更新) ")])],1)],1)])]):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:t.editor&&!t.post_success,expression:"editor && !post_success"}],staticClass:"col-9 pr-2 mpr-0"},[i("div",{staticClass:"card card-lg pa-3"},[i("h1",{staticClass:"b__title mb-5"},[t._v(" 发布 ")]),i("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onSubmit(e)},reset:function(e){return e.preventDefault(),e.stopPropagation(),t.onReset(e)}}},[i("div",{staticClass:"mb-3"},[i("span",[t._v(" "+t._s(t.$l("thread.node"))+": ")]),i("span",{staticClass:"select_node",on:{click:t.on_select_node}},[t._v("请选择板块")]),t.this_forum_conf.name?i("span",{staticClass:"ml-2 font-weight-bold"},[t._v(" / "+t._s(t.this_forum_conf.name))]):t._e(),i("node_list_dialog",{attrs:{cl:""},on:{on_select_forum:t.on_dialog_select_forum}}),i("q-btn",{staticClass:"padding_none none",attrs:{unelevated:"",color:"black",label:t.show_select_forum_text?t.show_select_forum_text:"请选择"}},[i("q-menu",[i("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[t._l(t.forums_options,(function(e){return i("q-item",{key:e.fid,attrs:{clickable:""},on:{click:function(i){return t.on_select_forum(e)}}},[i("q-item-section",[t._v(t._s(e.name))]),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),i("q-menu",{attrs:{anchor:"top right",self:"top left"}},[i("q-list",t._l(e.list,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e.fid,attrs:{dense:"",clickable:""},on:{click:function(i){return t.on_select_forum(e)}}},[i("q-item-section",[t._v(t._s(e.name))])],1)})),1)],1)],1)})),i("q-separator")],2)],1)],1)],1),i("q-input",{staticClass:"mb-3",attrs:{label:"标题"},model:{value:t.thread.title,callback:function(e){t.$set(t.thread,"title",e)},expression:"thread.title"}}),i("div",{staticClass:"card-body  markdown-toc entry-content markdown ql-container ql-snow",attrs:{id:"editor"}}),t.editor_setting.release&&t.editor_setting.release.buy?i("v-row",{staticClass:"mt-5",staticStyle:{"margin-left":"0px","margin-right":"0px"}},[t.editor_setting.release.buy_content?i("q-btn",{staticClass:"mr-5",attrs:{unelevated:"",color:"primary",icon:"far fa-plus-square",label:t.$l("thread.attach_content")},on:{click:function(e){return t.on_show_attach_content_dialog(void 0)}}}):t._e(),!1&t.editor_setting.release.buy_theav?i("q-btn",{attrs:{unelevated:"",size:"sm",color:"primary",icon:"far fa-plus-square",label:t.add_buy_theav_open?"移除付费影片":"添加付费影片"},on:{click:t.add_buy_theav}}):t._e()],1):t._e(),t.buy_contents&&t.buy_contents.length>0?i("div",{staticClass:"mt-5  card buy_contents"},[i("h6",[t._v(t._s(t.$l("thread.attach_content"))+":")]),t._l(t.buy_contents,(function(e,s){return i("v-row",{key:s},[i("v-col",[t._v(" * "),e.gold?i("span",[t._v("价格:"),i("span",{staticClass:"text-theme-color"},[t._v(t._s(e.gold)+"金币")])]):t._e(),i("span",{staticClass:"ml-2"},[t._v(t._s(e.content))]),e.upload_files&&e.upload_files.length>0?i("span",{staticClass:"ml-2 text-theme-color"},[t._v(" "+t._s(e.upload_files.length)+"个文件 ")]):t._e(),i("span",[i("v-btn",{staticClass:"ma-2",attrs:{tile:"",outlined:"",color:"success"},on:{click:function(i){return t.on_show_attach_content_dialog(e)}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v(" 编辑 ")],1)],1)])],1)}))],2):t._e(),t.add_buy_theav_open&&t.this_forum_conf.release&&t.this_forum_conf.release.buy?i("div",{staticClass:"mt-5  bbt-module"},[i("h6",[t._v("付费影片:")]),i("v-row",{staticClass:"item buy_price",attrs:{cols:"12"}},[t._v(" 购买价格: "),i("q-input",{staticClass:"col-3",attrs:{outlined:"",placeholder:"0-2000金币",label:"金币"},model:{value:t.buy_theav.price,callback:function(e){t.$set(t.buy_theav,"price",e)},expression:"buy_theav.price"}}),i("q-input",{attrs:{outlined:"",label:"请输入影片ID"},model:{value:t.buy_theav.id,callback:function(e){t.$set(t.buy_theav,"id",e)},expression:"buy_theav.id"}})],1)],1):t._e(),t.editor_setting.release&&t.editor_setting.release.video?i("div",{staticClass:"mt-5"},[t.show_attach_content_dialog?i("attach_content",{attrs:{buy_content:t.buy_content,show:t.show_attach_content_dialog},on:{"update:buy_content":function(e){t.buy_content=e},on_submit:t.on_submit_buy_content,"update:show":function(e){t.show_attach_content_dialog=e}}}):t._e()],1):t._e(),t.thread.setting?i("div",{staticClass:"setting card q-gutter-sm mt-3"},[i("h1",{staticClass:"b__title forum_title"},[t._v(" 设置 ")]),i("q-checkbox",{attrs:{label:"不可回复",color:"primary"},model:{value:t.thread.setting.not_reply,callback:function(e){t.$set(t.thread.setting,"not_reply",e)},expression:"thread.setting.not_reply"}})],1):t._e(),i("div",{staticClass:"submit xxbtn mt-3 cl"},[i("q-btn",{staticClass:"float-right",attrs:{padding:"0px",color:"theme-color",loading:t.release_loading,icon:"far fa-edit","text-color":"theme-color",label:"发布"},on:{click:t.on_release}})],1)],1)])]),i("div",{staticClass:"col-3"},[i("h6",[t._v("注册事项")]),i("div",[t._v(" * 严禁儿童色情和兽交，一禁发现，立即删除并封号。 ")]),i("div",[t._v(" * 违反台湾，美国和荷兰法律的内容，不允许发布 ")]),i("ads_box_list",{staticClass:"mt-4"})],1),i("remote-script",{attrs:{src:"https://"+t.$web_conf.set_host+"/static/quill/quill.js"}}),i("remote-script",{attrs:{src:"https://"+t.$web_conf.set_host+"/static/quill/quill.htmlEditButton.min.js?11"}}),t.loaded_quill?i("remote-script",{attrs:{src:"https://"+t.$web_conf.set_host+"/static/js/editor/image-resize.min.js"}}):t._e(),i("remote-script",{attrs:{src:"https://"+t.$web_conf.set_host+"/static/js/lib/resumable.min.js"}})],1)},o=[],n=(i("c975"),i("b0c0"),i("e439"),i("5d41"),i("7e84"));function a(t,e){while(!Object.prototype.hasOwnProperty.call(t,e))if(t=Object(n["a"])(t),null===t)break;return t}function l(t,e,i){return l="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var s=a(t,e);if(s){var o=Object.getOwnPropertyDescriptor(s,e);return o.get?o.get.call(i):o.value}},l(t,e,i||t)}var r=i("d4ec"),c=i("bee2"),u=i("262e"),d=i("2caf"),h=(i("b48a"),i("077f")),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-dialog",{staticClass:"xx_dialog",attrs:{persistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("q-card",{staticStyle:{"min-width":"40%"}},[i("q-card-section",{staticClass:"row items-center q-pb-none "},[i("div",{staticClass:"text-h6 title "},[t._v(t._s(t.$l("thread.attach_content")))]),i("q-space"),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),i("q-card-section",[i("v-row",{staticClass:"item  mb-3 buy_price",attrs:{cols:"1"}},[i("span",{staticClass:"mr-3"},[t._v("购买价格:")]),i("q-input",{staticClass:"col-3",attrs:{type:"number",outlined:"",placeholder:"0-2000金币",label:"金币"},model:{value:t.buy_content.price,callback:function(e){t.$set(t.buy_content,"price",e)},expression:"buy_content.price"}})],1),i("v-row",[i("q-input",{attrs:{outlined:"",label:"请输入内容"},model:{value:t.buy_content.content,callback:function(e){t.$set(t.buy_content,"content",e)},expression:"buy_content.content"}})],1),i("v-row",{staticClass:"mt-3"},[i("v-btn",{attrs:{color:"white darken-1 ml-4 mr-4",text:""},on:{click:t.on_show_upload_file_dialog}},[i("v-icon",[t._v("add")]),t._v(" "+t._s(t.$l("thread.upload_file"))+" ")],1)],1),this.buy_content.upload_files.length>0?i("div",{staticClass:"mb-3 mt-2"},[i("h5",{staticClass:"text-h6 title"},[t._v("文件列表")]),i("div",[i("v-list-item-group",{attrs:{color:"primary"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.buy_content.upload_files,(function(e,s){return i("v-list-item",{key:s},[i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(e.file_name)+" ")]),i("v-list-item-content",[i("q-input",{staticClass:"col-8",attrs:{type:"text",placeholder:"请设置文字显示的名字，不用加后缀名，比如mp4,torrent",label:"请设置文字显示的名字"},model:{value:e.set_name,callback:function(i){t.$set(e,"set_name",i)},expression:"upload_file.set_name"}})],1),i("v-icon",{staticClass:"delete",attrs:{title:t.$l("delete"),dark:""},on:{click:function(i){return t.on_delete_upload_file(e)}}},[t._v("delete ")])],1)],1)})),1)],1)]):t._e(),i("v-row",[i("v-col",[i("q-btn",{staticClass:"float-lg-right",attrs:{color:"primary",label:"确定"},on:{click:t.on_sure}}),i("q-btn",{staticClass:"mr-3 float-lg-right",attrs:{color:"grey",label:"取消"},on:{click:t.on_close_dialog}})],1)],1),i("v-row",[t.show_upload_file_dialog?i("upload_file",{staticClass:"mt-5",attrs:{show:t.show_upload_file_dialog},on:{upload_complete:t.on_upload_complete,upload_hide:t.on_upload_hide,"update:show":function(e){t.show_upload_file_dialog=e}}}):t._e()],1)],1)],1)],1)},p=[],f=(i("4de4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-dialog",{staticClass:"xx_dialog",attrs:{persistent:""},on:{hide:t.on_hide},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("q-card",[i("q-card-section",{staticClass:"row items-center q-pb-none "},[i("div",{staticClass:"text-h6 title "},[t._v(t._s(t.$l("thread.upload_file")))]),i("q-space"),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),i("q-card-section",[i("v-alert",{directives:[{name:"show",rawName:"v-show",value:!t.uploading_file_name,expression:"!uploading_file_name"}],attrs:{text:"",type:"info"}},[t._v(" 上传的视频文件，请不要打包成压缩包（比如zip,rar）,请上传原始的视频文件。 ")]),t.uploading_file_name?i("v-alert",{attrs:{text:"",type:"error",icon:!1}},[i("span",{staticClass:"title"},[t._v("文件名:")]),t._v(" "),i("span",[t._v(" "+t._s(t.uploading_file_name))])]):t._e(),t.uploading_file_name?i("q-linear-progress",{staticClass:"q-mt-sm mb-3",attrs:{dark:"",stripe:"",rounded:"",size:"20px",value:t.upload_progress,color:"red"}}):t._e(),t.browse_loading?i("v-alert",{attrs:{text:"",type:"error",icon:!1}},[i("p",[i("span",[i("span",[t._v("上传进度:")]),t._v(" "+t._s((100*this.upload_progress).toFixed(2))+"% ")])]),i("p",{staticClass:"red"},[t._v(" 正在上传，请不要关闭此窗口 ")])]):t._e(),i("div",{staticClass:"xxbtn"},[i("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.video_upload_resumable,expression:"video_upload_resumable"}],staticClass:"full-width",attrs:{id:"browseButton",icon:"cloud",padding:"0px",color:"theme-color","text-color":"theme-color",loading:t.browse_loading,label:t.browse_button_label}}),t.video_upload_resumable?t._e():i("div",[i("q-skeleton",{attrs:{animation:t.animation,width:"100%",height:"46px"}})],1)],1)],1)],1)],1)}),m=[],v={name:"upload_file",props:{show:void 0},destroyed:function(){this.cancel_upload(),console.log("call destroyed")},created:function(){this.upload_init(),window._upload_file_dialog=this},data:function(){return{call_cancel:!1,orginal_title:document.title,video_upload_resumable:void 0,uploading_file_name:void 0,upload_progress:0,browse_loading:!1,upload_complete:!1,browse_button_label:this.$l("videos.upload"),upload_token:void 0}},watch:{show:function(t,e){this.$emit("update:show",t),console.log("call watch show change")}},methods:{cancel_upload:function(){this.video_upload_resumable&&(this.video_upload_resumable.cancel(),this.call_cancel=!0,this.set_title(this.orginal_title))},on_hide:function(){console.log("call upload file dialog on hide"),this.cancel_upload(),this.$emit("upload_hide",{})},on_close_dialog:function(){},on_upload_error:function(){},on_upload_complete:function(){console.log("this.call_cancel:",this.call_cancel),this.call_cancel||(console.log("call on_upload_complete"),this.upload_complete=!0,this.set_title(this.orginal_title),this.$emit("upload_complete",{file_name:this.uploading_file_name,token:this.upload_token}),this.$q.notify({message:"已成功上传文件。",color:"primary"}),this.show=!1)},on_upload_progress:function(){this.upload_progress=this.video_upload_resumable.progress();var t="("+parseInt(100*this.upload_progress)+"%)正在上传";this.set_title(t),this.browse_loading=!0},on_add_upload_file:function(t,e){console.log("fileAdded:",t,e);var i=this.video_upload_resumable.getSize(),s=i/1024/1024;s>10240||(this.video_upload_resumable.upload(),this.uploading_file_name=this.video_upload_resumable.files[0].fileName)},upload_init:function(){var t=this;return window.Resumable?document.getElementById("browseButton")?void this.$axios.get("/app/upload/token").then((function(e){console.log("[upload token]response:",e);var i=e.data.nid,s=t.$config.space_confs[i].static_hosts[0],o="https://"+s+"/upload";console.log("upload_target:",o),t.upload_token=e.data.token,t.video_upload_resumable=new window.Resumable({target:o,query:{token:t.upload_token,network:"xx"}}),t.video_upload_resumable.assignBrowse(document.getElementById("browseButton")),t.video_upload_resumable.on("fileAdded",t.on_add_upload_file),t.video_upload_resumable.on("filesAdded",t.on_add_upload_file),t.video_upload_resumable.on("progress",t.on_upload_progress),t.video_upload_resumable.on("error",t.on_upload_error),t.video_upload_resumable.on("complete",t.on_upload_complete)})).catch((function(e){console.log("[upload_file]error:",e),t.show=!1,t.$q.notify({message:"获取上传文件凭证失败，请重试.",color:"primary"}),t.$emit("on_upload_error",{})})):setTimeout(this.upload_init,100):(console.log("no Resumable"),setTimeout(this.upload_init,100))}}},b=v,g=(i("8e5c"),i("2877")),y=i("fe09"),w=i("6544"),C=i.n(w),k=i("0798"),x=Object(g["a"])(b,f,m,!1,null,"78a6845a",null),O=x.exports;x.options.components=Object.assign(Object.create(x.options.components||null),x.options.components||{},{QDialog:y["n"],QCard:y["h"],QCardSection:y["j"],QSpace:y["D"],QBtn:y["f"],QLinearProgress:y["v"],QSkeleton:y["B"]}),x.options.directives=Object.assign(Object.create(x.options.directives||null),x.options.directives||{},{ClosePopup:y["a"]}),C()(x,{VAlert:k["a"]});var j={name:"attach_content",components:{upload_file:O},props:{show:void 0,buy_content:{price:0,content:"",upload_files:[]}},created:function(){console.log("create attach_content:",this.buy_content)},data:function(){return{show_upload_file_dialog:!1}},watch:{show:function(t,e){console.log("call watch show change"),this.$emit("update:show",t)}},methods:{on_sure:function(){if(!this.buy_content.content||this.buy_content.content.length<=1)return this.$q.notify({message:"内空不能为空！",color:"primary"});if(this.buy_content.upload_files&&this.buy_content.upload_files.length>0)for(var t=0;t<this.buy_content.upload_files.length;++t){var e=this.buy_content.upload_files[t];if(!e.set_name)return this.$q.notify({message:"请设置上传文件的显示名称！",color:"primary"})}this.$emit("on_submit",this.buy_content),console.log("[on_sure]:",this.show),this.show=!1,this.$emit("update:show",this.show)},on_close_dialog:function(){var t=this;this.buy_content.upload_files&&this.buy_content.upload_files.length>0?this.$q.dialog({title:"提示",message:"已有文件上传完成，是否确定关闭？",cancel:"取消",persistent:!0,ok:"确定"}).onOk((function(){t.show=!1})).onCancel((function(){})).onDismiss((function(){})):this.show=!1},on_upload_hide:function(){console.log("call on_upload_hide"),this.show_upload_file_dialog=!1},on_upload_complete:function(t){console.log("on_upload_complete:",t);for(var e=0;e<this.buy_content.upload_files.length;++e){var i=this.buy_content.upload_files[e];if(i.token==t.token)return console.log("重复:",t),!1}this.buy_content.upload_files.push(t),this.show_upload_file_dialog=!1},on_delete_upload_file:function(t){var e=this;console.log("on_delete_upload_file:",t),this.$q.dialog({title:"提示",message:"是否确定删除此上传文件？",cancel:"取消",persistent:!0,ok:"确定"}).onOk((function(){e.buy_content.upload_files=e.buy_content.upload_files.filter((function(e){return e.token!=t.token})),console.log("this.buy_content.upload_files:",e.buy_content.upload_files)})).onCancel((function(){})).onDismiss((function(){}))},on_show_upload_file_dialog:function(){var t=this;console.log("call on_show_upload_file_dialog"),this.show_upload_file_dialog=!1,this.$nextTick((function(){t.show_upload_file_dialog=!0})),this.$forceUpdate()}}},$=j,I=(i("4274"),i("8336")),q=i("62ad"),B=i("132d"),A=i("5530"),V=(i("61d2"),i("a9ad")),S=i("1c87"),L=i("4e82"),Q=i("7560"),N=i("f2e7"),z=i("5607"),T=i("80d2"),M=i("d9bd"),R=i("58df"),E=Object(R["a"])(V["a"],S["a"],Q["a"],Object(L["a"])("listItemGroup"),Object(N["b"])("inputValue")),D=E.extend().extend({name:"v-list-item",directives:{Ripple:z["a"]},inheritAttrs:!1,inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(A["a"])(Object(A["a"])({"v-list-item":!0},S["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(S["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(M["d"])("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=Object(A["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="listitem",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t}},render:function(t){var e=this,i=this.generateRouteLink(),s=i.tag,o=i.data;o.attrs=Object(A["a"])(Object(A["a"])({},o.attrs),this.genAttrs()),o[this.to?"nativeOn":"on"]=Object(A["a"])(Object(A["a"])({},o[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===T["l"].enter&&e.click(t),e.$emit("keydown",t)}}),this.inactive&&(s="div"),this.inactive&&this.to&&(o.on=o.nativeOn,delete o.nativeOn);var n=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(s,this.setTextColor(this.color,o),n)}}),G=(i("c740"),i("0481"),i("a434"),i("4069"),i("b85c")),P=(i("3ad0"),i("8dd9")),H=(P["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(A["a"])(Object(A["a"])({},P["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,i=Object(G["a"])(this.groups);try{for(i.s();!(e=i.n()).done;){var s=e.value;s.toggle(t)}}catch(o){i.e(o)}finally{i.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(A["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}}),i("ac1f"),i("466d"),i("ade3")),U=(i("db42"),i("9d26")),J=(i("498a"),i("a026")),F=J["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var i=e.data,s=e.children;return i.staticClass="v-list-item__icon ".concat(i.staticClass||"").trim(),t("div",i,s)}}),W=i("7e2b"),K=i("9d65"),X=i("3206"),Y=i("0789"),Z=Object(R["a"])(W["a"],K["a"],V["a"],Object(X["a"])("list"),N["a"]),tt=(Z.extend().extend({name:"v-list-group",directives:{ripple:z["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(U["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(F,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(D,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(H["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(A["a"])(Object(A["a"])({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(T["j"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(F,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,i=this._uid===t;i&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=i}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(Y["a"],this.genItems())])}}),i("899c"),i("604c")),et=Object(R["a"])(tt["a"],V["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(A["a"])(Object(A["a"])({},tt["a"].options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(A["a"])(Object(A["a"])({},tt["a"].options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}}),it=(J["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var i=e.data,s=e.children,o=void 0===s?[]:s;i.staticClass=i.staticClass?"v-list-item__action ".concat(i.staticClass):"v-list-item__action";var n=o.filter((function(t){return!1===t.isComment&&" "!==t.text}));return n.length>1&&(i.staticClass+=" v-list-item__action--stack"),t("div",i,o)}}),i("a9e3"),i("3408"),i("24b2")),st=i("a236"),ot=Object(R["a"])(V["a"],it["a"],st["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(A["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(A["a"])({height:Object(T["d"])(this.size),minWidth:Object(T["d"])(this.size),width:Object(T["d"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),nt=ot,at=(nt.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(A["a"])(Object(A["a"])({"v-list-item__avatar--horizontal":this.horizontal},nt.options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=nt.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}}),Object(T["e"])("v-list-item__action-text","span"),Object(T["e"])("v-list-item__content","div")),lt=Object(T["e"])("v-list-item__title","div"),rt=(Object(T["e"])("v-list-item__subtitle","div"),i("0fd9")),ct=Object(g["a"])($,_,p,!1,null,"48853c34",null),ut=ct.exports;ct.options.components=Object.assign(Object.create(ct.options.components||null),ct.options.components||{},{QDialog:y["n"],QCard:y["h"],QCardSection:y["j"],QSpace:y["D"],QBtn:y["f"],QInput:y["r"]}),ct.options.directives=Object.assign(Object.create(ct.options.directives||null),ct.options.directives||{},{ClosePopup:y["a"]}),C()(ct,{VBtn:I["a"],VCol:q["a"],VIcon:B["a"],VListItem:D,VListItemContent:at,VListItemGroup:et,VListItemTitle:lt,VRow:rt["a"]});var dt={release:{buy:!0,buy_theav:!0,buy_content:!0,setting:!0,update_file:!1,upload_video:!1}},ht={price:0,content:"",upload_files:[]},_t={name:"thread",mixins:[h["a"]],components:{attach_content:ut},created:function(){var t=this;window._t=this,this.$store.state.hasLogin||this.$q.dialog({title:this.$l("title_board_message"),message:"对不起，请先登录",cancel:!1,ok:this.$l("login"),persistent:!0}).onOk((function(e){t.$router.push("/user/login")})),this.create_editor(),this.forums_options=[],this.update_forums_options(this.$forum_conf.forums,this.forums_options);var e=this.getUrlVars();if(e.fid){var i=this.get_forum(e.fid);console.log("this_forum_conf:",i),i&&this.on_select_forum(i)}e.edit_id&&(this.edit_id=e.edit_id),console.log("forums_options:",this.forums_options)},data:function(){return{show_attach_content_dialog:!1,show_node_dialog:!1,editor_setting:{},loaded_quill:!1,editor:void 0,title:"",release_loading:!1,add_buy_content_open:!1,add_buy_download_open:!1,add_buy_theav_open:!1,attach_file_upload:void 0,thread:{title:"",setting:{not_reply:!1},fid:void 0},buy_download:{price:20},buy_content:Object.assign({},ht),buy_theav:{price:100,id:""},post_success:!1,post_success_tip:"恭喜你，已成功提交，请等待审核通过。",edit_id:"",show_loading:!1,forums_options:[],forums_options_disabled:!1,this_forum_conf:Object.create(dt),select_forum_conf:void 0,show_select_forum_text:void 0,post_response:void 0,buy_contents:[]}},methods:{update_setting:function(){this.editor_setting.release=dt.release,this.this_forum_conf.release&&(this.editor_setting.release=this.this_forum_conf.release),this.this_forum_conf.setting&&(this.thread.setting=this.this_forum_conf.setting),this.$forceUpdate()},on_dialog_select_forum:function(t){this.on_select_forum(t),this.show_node_dialog=!1,this.$forceUpdate()},on_select_forum:function(t){this.select_forum_conf=this.this_forum_conf=t;var e=this.this_forum_conf.release;e||(e={}),this.this_forum_conf.release=Object.assign({},dt.release,e);var i=[];this.show_select_forum_text="",this.get_forum_list(this.select_forum_conf.fid,i);for(var s=0;s<i.length;++s)this.show_select_forum_text+=i[s]["name"]+"/";this.show_select_forum_text=this.show_select_forum_text.substr(0,this.show_select_forum_text.length-1),this.thread.fid=this.this_forum_conf.fid,this.update_setting()},on_release:function(){var t=this,e={thread_inner_html:this.editor.root.innerHTML,edit_id:this.edit_id,thread:this.thread};this.buy_contents&&this.buy_contents.length>0&&(e["buy_contents"]=this.buy_contents),this.add_buy_theav_open&&(e["buy_theav"]=this.buy_theav),this.release_loading=!0,this.$axios.post("/app/release/thread",e).then((function(e){t.release_loading=!1,e&&(t.post_success=!0,t.post_response=e),t.edit_id=e.data.id})).catch((function(e){t.release_loading=!1,t.$message("发布话题出错，请稍等再试或者联系我们。")}))},onReset:function(){},create_forum_list:function(){},on_select_node:function(){this.show_node_dialog=!1,this.show_node_dialog=!0,this.$forceUpdate()},add_buy_theav:function(){this.add_buy_theav_open=!this.add_buy_theav_open},show_edit:function(){var t=this;this.edit_id&&(console.log("show_edit:",this.edit_id),this.show_loading=!0,this.get_topic({id:this.edit_id,from_cache:!1,cb:function(e){t.thread=Object.assign(t.thread,e),t.thread.title=e.title,e.setting&&(t.thread.setting=e.setting),console.log("thread.content:",e.content),t.editor.root.innerHTML=e.content,console.log("thread.content2:"),e.buy_contents&&(t.buy_contents=e.buy_contents),console.log("this.buy_contents:",t.buy_contents),e.buy_theav&&(t.buy_theav=Object.assign(t.buy_theav,e.buy_theav),t.buy_theav.id&&(t.add_buy_theav_open=!0),t.thread.forum=e.fid,t.this_forum_conf=t.get_forum(e.fid),t.on_select_forum(t.this_forum_conf)),t.$forceUpdate(),t.show_loading=!1}}))},on_load_editor:function(){this.show_edit()},on_show_attach_content_dialog:function(t){var e=this;console.log("buy_content:",t),t||(t=Object.assign({},ht),t.upload_files=[]),t&&(this.buy_content=t),this.show_attach_content_dialog=!1,this.$nextTick((function(){e.show_attach_content_dialog=!0,e.$forceUpdate()})),this.$forceUpdate()},on_submit_buy_content:function(t){console.log("on_submit_buy_content:",t);for(var e=!0,i=0;i<this.buy_contents.length;++i)if(this.buy_contents[i]==t){e=!1;break}e&&this.buy_contents.push(t),console.log("[on_submit_buy_content] is_add:",e),this.$forceUpdate()},create_editor:function(){console.log("call create_editor");var t=window.Quill;t&&!this.loaded_quill&&(this.loaded_quill=!0);var e=window.ImageResize;if(!t||!e)return setTimeout(this.create_editor,100);var i=document.getElementById("editor");if(!i)return setTimeout(this.create_editor,100);if(!window.htmlEditButton)return setTimeout(this.create_editor,100);var s=[["bold","italic","underline","strike"],["blockquote","code-block"],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{align:[]}],["link","image"],["clean"]];try{t.register("modules/htmlEditButton",window.htmlEditButton);var o=t.import("blots/block"),a=function(t){Object(u["a"])(i,t);var e=Object(d["a"])(i);function i(){return Object(r["a"])(this,i),e.apply(this,arguments)}return Object(c["a"])(i,null,[{key:"formats",value:function(t){return i.tagName.indexOf(t.tagName)+1}}]),i}(o);a.blotName="header",a.tagName=["H1","H2"],t.register(a);var h=function(t){Object(u["a"])(i,t);var e=Object(d["a"])(i);function i(){return Object(r["a"])(this,i),e.apply(this,arguments)}return i}(o);h.tagName="div",h.blotName="div",h.allowedChildren=o.allowedChildren,h.allowedChildren.push(o),t.register(h);var _=t.import("blots/block/embed"),p=function(t){Object(u["a"])(i,t);var e=Object(d["a"])(i);function i(){return Object(r["a"])(this,i),e.apply(this,arguments)}return Object(c["a"])(i,[{key:"format",value:function(t,e){"height"===t||"width"===t?e?this.domNode.setAttribute(t,e):this.domNode.removeAttribute(t,e):l(Object(n["a"])(i.prototype),"format",this).call(this,t,e)}}],[{key:"create",value:function(t){var e=l(Object(n["a"])(i),"create",this).call(this);return e.setAttribute("src",t),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",!0),e}},{key:"formats",value:function(t){var e={};return t.hasAttribute("height")&&(e.height=t.getAttribute("height")),t.hasAttribute("width")&&(e.width=t.getAttribute("width")),e}},{key:"value",value:function(t){return t.getAttribute("src")}}]),i}(_);p.blotName="video",p.tagName="iframe",t.register(p);try{this.editor=new t("#editor",{modules:{toolbar:s,htmlEditButton:{msg:"修改HTML源码",okText:"确定",cancelText:"取消",buttonHTML:"&lt;&gt;",buttonTitle:"显示HTML源码",syntax:!1},imageResize:{displayStyles:{backgroundColor:"black",border:"none",color:"white"},displaySize:!0}},theme:"snow"})}catch(f){console.error("[new Quill]e:",f),location.reload()}this.on_load_editor()}catch(f){console.log("create editor error:",f)}}}},pt=_t,ft=(i("b853"),Object(g["a"])(pt,s,o,!1,null,null,null));e["default"]=ft.exports;ft.options.components=Object.assign(Object.create(ft.options.components||null),ft.options.components||{},{QCardSection:y["j"],QSkeleton:y["B"],QBtn:y["f"],QMenu:y["x"],QList:y["w"],QItem:y["s"],QItemSection:y["t"],QIcon:y["p"],QSeparator:y["A"],QInput:y["r"],QCheckbox:y["k"]}),ft.options.directives=Object.assign(Object.create(ft.options.directives||null),ft.options.directives||{},{ClosePopup:y["a"]}),C()(ft,{VBtn:I["a"],VCol:q["a"],VIcon:B["a"],VRow:rt["a"]})}}]);
//# sourceMappingURL=chunk-d08f43fc.6baa937b.js.map