(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-455360a4"],{"0c94":function(a,t,e){},"166a":function(a,t,e){},3860:function(a,t,e){"use strict";var i=e("604c");t["a"]=i["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return i["a"].options.computed.classes.call(this)}},methods:{genData:i["a"].options.methods.genData}})},5168:function(a,t,e){"use strict";var i=e("0c94"),s=e.n(i);s.a},"604c":function(a,t,e){"use strict";e.d(t,"a",(function(){return o}));e("4de4"),e("7db0"),e("c740"),e("4160"),e("caad"),e("c975"),e("fb6a"),e("a434"),e("a9e3"),e("2532"),e("159b");var i=e("5530"),s=(e("166a"),e("a452")),n=e("7560"),l=e("58df"),r=e("d9bd"),o=Object(l["a"])(s["a"],n["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(i["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var a=this;return this.items.filter((function(t,e){return a.toggleMethod(a.getValue(t,e))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var a=this;if(!this.multiple)return function(t){return a.internalValue===t};var t=this.internalValue;return Array.isArray(t)?function(a){return t.includes(a)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(r["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(a,t){return null==a.value||""===a.value?t:a.value},onClick:function(a){this.updateInternalValue(this.getValue(a,this.items.indexOf(a)))},register:function(a){var t=this,e=this.items.push(a)-1;a.$on("change",(function(){return t.onClick(a)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(a,e)},unregister:function(a){if(!this._isDestroyed){var t=this.items.indexOf(a),e=this.getValue(a,t);this.items.splice(t,1);var i=this.selectedValues.indexOf(e);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(e);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(a){return a!==e})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(a,t){var e=this.getValue(a,t);a.isActive=this.toggleMethod(e)},updateItemsState:function(){var a=this;this.$nextTick((function(){if(a.mandatory&&!a.selectedItems.length)return a.updateMandatory();a.items.forEach(a.updateItem)}))},updateInternalValue:function(a){this.multiple?this.updateMultiple(a):this.updateSingle(a)},updateMandatory:function(a){if(this.items.length){var t=this.items.slice();a&&t.reverse();var e=t.find((function(a){return!a.disabled}));if(e){var i=this.items.indexOf(e);this.updateInternalValue(this.getValue(e,i))}}},updateMultiple:function(a){var t=Array.isArray(this.internalValue)?this.internalValue:[],e=t.slice(),i=e.findIndex((function(t){return t===a}));this.mandatory&&i>-1&&e.length-1<1||null!=this.max&&i<0&&e.length+1>this.max||(i>-1?e.splice(i,1):e.push(a),this.internalValue=e)},updateSingle:function(a){var t=a===this.internalValue;this.mandatory&&t||(this.internalValue=t?void 0:a)}},render:function(a){return a("div",this.genData(),this.$slots.default)}});o.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"7e58":function(a,t,e){},9296:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"col-4 card"},[e("h1",{staticClass:"b__title"},[a._v(" 如何获取金币? ")]),e("div",{staticClass:"rounded-borders mt-3 mb-3"},[a._v(" 关于如何获取金币，这里有详细介绍 "),e("router-link",{staticClass:"font-weight-bold",attrs:{to:"/topic/5f5ed360eb94dc22e5f8b70b"}},[a._v("获取金币的方法")])],1),e("ads_box_list")],1)},s=[],n={name:"rightpanel"},l=n,r=e("2877"),o=Object(r["a"])(l,i,s,!1,null,"937f1c22",null);t["a"]=o.exports},"9f4f":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row m-100"},[e("div",{staticClass:"col-8 card"},[e("h1",{staticClass:"b__title"},[a._v(" 升级VIP ")]),a.vip_configs?e("ul",{staticClass:"product-info"},[e("div",{staticClass:"ccp_four_item_list cl"},a._l(a.vip_configs,(function(t){return e("div",{key:t.id,staticClass:"ccpoil_product col-6",class:{active:a.select_id==t.id},attrs:{"data-code":"0",title:"年度VIP"},on:{click:function(e){return a.select_item(t["id"])}}},[e("div",{staticClass:"ccpoil_product_name"},[a._v(a._s(t["title"]))]),t.day_pay?e("div",{staticClass:"ccpoil_marketing"},[a._v(a._s(t.day_pay)+" 元/天")]):a._e(),t.add_gold?e("div",{staticClass:"ccpoil_marketing "},[a._v(" 赠送 "),e("span",{staticClass:"font-weight-bold mr-1 ml-1 add_gold"},[a._v(a._s(t.add_gold))]),a._v(" 金币 ")]):a._e(),e("div",{staticClass:"ccpoil_price"},[e("div",{staticClass:"ccpoil_currency"},[a._v("￥")]),e("div",{staticClass:"ccpoil_final_price"},[a._v(a._s(t["amount"]))])])])})),0),a.faka?e("div",{staticClass:"vip__code"},[e("div",{staticClass:"tip flex"},[e("span",{staticClass:"q-mr-xs"},[a._v("支持使用微信，支付宝购买卡密，激活。")]),a._m(0),e("span",[a.avaliable_conf.faka?e("a",{staticClass:"text-red",attrs:{href:a.avaliable_conf.faka,target:"_blank"}},[a._v("购买卡密")]):a._e()])])]):a._e()]):a._e(),e("div",{staticClass:"pay_way mt-4"},[e("p",[a._v("支付方式:")]),e("v-btn-toggle",{staticClass:"flex-wrap",attrs:{group:""},model:{value:a.pay_way,callback:function(t){a.pay_way=t},expression:"pay_way"}},a._l(a.avaliable_payways,(function(t){return e("v-btn",{key:t.pay_way,class:{"v-item--active":t.pay_way==a.pay_way},attrs:{value:t.pay_way}},[a._v(" "+a._s(t.name)+" ")])})),1)],1),e("div",{staticClass:"submit xxbtn mt-3"},[e("v-btn",{staticClass:"pay-button",attrs:{color:"error",loading:a.pay_loading,large:"",dark:"",depressed:""},on:{click:function(t){return a.click_pay()}}},[a._v(" 点击支付 ")])],1)]),e("rightpanel")],1)},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"q-mr-xs"},[e("a",{staticClass:"text-red",attrs:{href:"/vip/code",target:"_blank"}},[a._v("卡密激活")])])}],n=(e("4160"),e("c975"),e("159b"),e("53ca")),l=e("a026"),r=e("f51c"),o=e("ada0"),u=e("9296"),c={name:"vip",components:{rightpanel:u["a"]},data:function(){return{vip_configs:r["configs"],avaliable_conf:o,pay_way:o.defalut,which_pay:o.defalut,select_id:"1year",pay_url:"",pay_loading:!1,avaliable_payways:[]}},created:function(){window._t=this,this.update_payways(),this.$ga.event({eventCategory:"buy_vip",eventAction:"show",eventLabel:"islogin",eventValue:this.$store.state.hasLogin})},computed:{faka:function(){var a=this.get_pay_item(this.select_id);if(a)return a.faka}},methods:{get_pay_item:function(a){for(var t=0;t<this.vip_configs.length;++t){var e=this.vip_configs[t];if(e["id"]==a)return e}},update_payways:function(){var a=this;this.avaliable_payways=[];var t=this.get_pay_item(this.select_id);this.avaliable_conf.list.forEach((function(e){if(0!=e.avaliable&&(!e["only_mobile"]||a.is_mobile())){e["platform"];var i=e["pay_amounts"];i?(Array.isArray(i)&&i.indexOf(t["amount"])>=0&&a.avaliable_payways.push(e),"object"===Object(n["a"])(i)&&i["min"]&&i["max"]&&t["amount"]>=i["min"]&&i["max"]>=t["amount"]&&a.avaliable_payways.push(e)):a.avaliable_payways.push(e)}})),t.faka&&this.avaliable_payways.push({name:"购买卡密",pay_way:"faka"})},on_id_change:function(){l["a"].nextTick(this.update_payways())},select_item:function(a){this.select_id=a,this.update_payways()},click_pay:function(){var a=this;if("faka"==this.pay_way){var t=this.get_pay_item(this.select_id);return this.navigateToUrl(t.faka)}if("crypto"==this.pay_way)return this.$router.push("/pay/crypto?vip_id="+this.select_id);this.pay_url=!1;var e={"pay-way":this.pay_way,"vip-id":this.select_id};this.pay_loading=!0,this.$axios.post("/app/pay/payment",e).then((function(t){a.pay_loading=!1;var e=t.data;a.$messageX("请求支付成功，请稍等 ，正在跳转");var i=e.pay_data.read_url;setTimeout((function(){a.navigateToUrl(i)}),200),a.pay_url=i})).catch((function(t){var e="请求支付失败，请重新尝试或者更换支付方式";a.$messageX(e),a.pay_loading=!1}))}}},p=c,d=(e("5168"),e("2877")),h=e("6544"),y=e.n(h),_=e("8336"),f=e("a609"),v=Object(d["a"])(p,i,s,!1,null,"65a3bf5d",null);t["default"]=v.exports;y()(v,{VBtn:_["a"],VBtnToggle:f["a"]})},a609:function(a,t,e){"use strict";var i=e("5530"),s=(e("7e58"),e("3860")),n=e("a9ad"),l=e("58df");t["a"]=Object(l["a"])(s["a"],n["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var a=this.setTextColor(this.color,Object(i["a"])({},s["a"].options.methods.genData.call(this)));return this.group?a:this.setBackgroundColor(this.backgroundColor,a)}}})},ada0:function(a){a.exports=JSON.parse('{"list":[{"name":"微信支付","pay_way":"wxpay","which_pay":"tspay","avaliable":false},{"name":"支付宝H5","pay_way":"alipay","which_pay":"tspay","pay_amounts":{"min":100,"max":500},"avaliable":true},{"name":"支付宝(荐)","pay_way":"alipay_h5","which_pay":"jxdonglang","avaliable":false},{"name":"支付宝1","pay_way":"ALIPAY2ALIQR","which_pay":"mypay","avaliable":false},{"name":"微信支付","pay_way":"wxwap","which_pay":"typay","pay_amounts":[100,200],"avaliable":true},{"name":"微信支付2","pay_way":"802","which_pay":"typay","platform":["ios"],"avaliable":true},{"name":"支付宝2","pay_way":"zfbwap","pay_amounts":[100,200],"which_pay":"typay","avaliable":true},{"name":"支付宝3","pay_way":"zfbvipwap","which_pay":"typay","pay_amounts":[100,200],"avaliable":true},{"name":"支付宝H5","pay_way":"sw516AlipayH5","which_pay":"gobuypay","avaliable":false},{"name":"支付宝扫码","pay_way":"sw516Alipay","which_pay":"gobuypay","avaliable":false},{"name":"数字货币(USDT)","pay_way":"crypto","which_pay":"xpay","avaliable":true,"class":"red"}],"tips":"如果碰到支付失败，请尝试更换支付方式，谢谢","defalut":"alipay"}')},f51c:function(a){a.exports=JSON.parse('{"configs":[{"id":"halfyear","days":90,"amount":100,"title":"三个月VIP","description":"三个月不限制看下载任何内容","actual_amount":100,"vip_degree":"vip2","day_pay":"0.5","add_gold":1000},{"id":"1year","days":365,"amount":200,"title":"一年VIP","description":"一年不限制看下载任何内容","actual_amount":200,"every_month":12,"vip_degree":"vip3","day_pay":"0.2","add_gold":2000,"faka1":"https://www.junwfk.com//details/B82441C4"},{"id":"3year","days":1096,"amount":300,"title":"三年VIP","description":"三年不限制看下载任何内容","actual_amount":300,"vip_degree":"vip4","day_pay":"0.1","add_gold":3000,"faka1":"https://www.junwfk.com//details/B82441C4"},{"id":"forever","days":36500,"amount":500,"title":"终身VIP","description":"终身VIP,不限制看下载任何内容","actual_amount":500,"vip_degree":"vip4","day_pay":"0.1","add_gold":3000,"faka1":"https://www.junwfk.com//details/D9146AE9"}]}')}}]);
//# sourceMappingURL=chunk-455360a4.366f7900.js.map