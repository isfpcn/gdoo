(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-app-workflow-index"],{1253:function(t,e,a){"use strict";a.r(e);var i=a("d3d6"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"318e":function(t,e,a){"use strict";a.r(e);var i=a("4231"),n=a("1253");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("e855");var r,s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"6375e164",null,!1,i["a"],r);e["default"]=l.exports},4231:function(t,e,a){"use strict";var i={uniSearchBar:a("4eed").default,uniLoadMore:a("1913").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"header",attrs:{id:"header"}},[a("v-uni-scroll-view",{staticClass:"scroll-h",attrs:{id:"tab-bar","scroll-x":!0,"show-scrollbar":!1}},t._l(t.tabBars,(function(e,i){return a("v-uni-view",{key:i,staticClass:"uni-tab-item",attrs:{id:e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabtap(i)}}},[a("v-uni-text",{staticClass:"uni-tab-item-title",class:t.tabIndex==i?"uni-tab-item-title-active":""},[t._v(t._s(e.name))])],1)})),1),a("v-uni-view",{staticClass:"search-controller"},[a("uni-search-bar",{attrs:{radius:"50",placeholder:"搜索主题或文号"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"line-h"})],1),a("v-uni-view",{staticClass:"uni-list uni-list-controller",style:"margin-top:"+t.listTop+"px;"},t._l(t.tabBars[t.tabIndex].data,(function(e,i){return a("v-uni-view",{key:i,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goDetail(e)}}},[a("v-uni-view",{staticClass:"uni-media-list"},[a("v-uni-view",{staticClass:"uni-media-list-body"},[a("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"uni-media-list-text-bottom"},[a("v-uni-text",{staticClass:"desc"},[t._v(t._s(e.name))]),a("v-uni-text",{staticClass:"desc"},[t._v(t._s(e.step.name))])],1)],1)],1)],1)})),1),a("uni-load-more",{attrs:{status:t.tabBars[t.tabIndex].status,"icon-size":16,"content-text":t.tabBars[t.tabIndex].contentText}})],1)},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},a7ff:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-6375e164]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background:#f9f9f9}.header[data-v-6375e164]{position:fixed;top:0;right:0;left:0;z-index:100;background:#fff;width:100vw}.uni-list-controller[data-v-6375e164]{width:100vw}.uni-media-list-logo[data-v-6375e164]{width:%?140?%;height:%?140?%}.uni-media-list-body[data-v-6375e164]{height:auto;-webkit-justify-content:space-around;justify-content:space-around}.uni-media-list-text-top[data-v-6375e164]{font-size:%?28?%;overflow:hidden}.uni-media-list-text-bottom[data-v-6375e164]{\r\n\t/*\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\t*/margin-top:%?15?%}.uni-media-list-text-bottom .desc[data-v-6375e164]{margin-bottom:%?15?%;display:block}.uni-media-list-text-bottom .desc[data-v-6375e164]:last-child{margin-bottom:0}.tabs[data-v-6375e164]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;background-color:#fff;height:100vh}.scroll-h[data-v-6375e164]{width:%?750?%;height:%?80?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;white-space:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #c8c7cc}.line-h[data-v-6375e164]{height:%?1?%;background-color:#ccc}.uni-tab-item[data-v-6375e164]{display:inline-block;\r\n\t\t/*\r\n        padding-left: 70rpx;\r\n        padding-right: 70rpx;\r\n\t\t*/text-align:center;width:33.33333%}.uni-tab-item-title[data-v-6375e164]{color:#555;font-size:%?30?%;height:%?80?%;line-height:%?80?%;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;white-space:nowrap}.uni-tab-item-title-active[data-v-6375e164]{color:#007aff}.swiper-box[data-v-6375e164]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:50vh}.swiper-item[data-v-6375e164]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.scroll-v[data-v-6375e164]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:%?750?%}.search-controller[data-v-6375e164]{padding:%?10?%}.search-result[data-v-6375e164]{margin-top:10px;margin-bottom:20px;text-align:center}.search-result-text[data-v-6375e164]{text-align:center;font-size:14px}body.?%PAGE?%[data-v-6375e164]{background:#f9f9f9}",""]),t.exports=e},c08b:function(t,e,a){var i=a("a7ff");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("c8903b88",i,!0,{sourceMap:!1,shadowMode:!1})},d3d6:function(t,e,a){"use strict";var i=a("ee27");a("99af"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("1913")),o={components:{uniLoadMore:n.default},data:function(){return{tabIndex:0,listTop:103,tabBars:[{name:"待办中",id:"todo",page:1,data:[],status:"more",contentText:{contentdown:"上拉加载更多",contentrefresh:"加载中",contentnomore:"没有更多"}},{name:"已办理",id:"trans",page:1,data:[],status:"more",contentText:{contentdown:"上拉加载更多",contentrefresh:"加载中",contentnomore:"没有更多"}},{name:"已结束",id:"done",page:1,data:[],status:"more",contentText:{contentdown:"上拉加载更多",contentrefresh:"加载中",contentnomore:"没有更多"}}],reload:!1}},onLoad:function(){var t=this;t.getList(0)},mounted:function(){var t=this;uni.createSelectorQuery().in(this).select("#header").boundingClientRect((function(e){t.listTop=e.height-1})).exec()},onPullDownRefresh:function(){var t=this;t.reload=!0;var e=t.tabBars[t.tabIndex];e.page=1,e.status="more",t.getList(t.tabIndex)},onReachBottom:function(){var t=this,e=t.tabBars[t.tabIndex];"noMore"!=e.status&&(e.status="more",this.getList(t.tabIndex))},methods:{ontabtap:function(t){var e=this;e.tabIndex=t,this.switchTab(t)},switchTab:function(t){var e=this,a=e.tabBars[t];0==a.data.length&&e.getList(t)},formatDate:function(t){return dateUtils.formatDate(t)},getList:function(t){var e=this,a=e.tabBars[t];"noMore"!=a.status?e.$api.post("workflow/workflow/index",{option:a.id,page:a.page}).then((function(t){e.reload&&(a.data=[],e.reload=!1,uni.stopPullDownRefresh()),a.data=a.data.concat(t.data),t.current_page>=t.last_page?a.status="noMore":a.page=t.current_page+1})).catch((function(t){})):e.reload&&(e.reload=!1,uni.stopPullDownRefresh())},goDetail:function(t){uni.navigateTo({url:"/pages/webview?title=流程详情&url="+encodeURIComponent("workflow/workflow/edit?process_id="+t.process_id)})}}};e.default=o},e855:function(t,e,a){"use strict";var i=a("c08b"),n=a.n(i);n.a}}]);