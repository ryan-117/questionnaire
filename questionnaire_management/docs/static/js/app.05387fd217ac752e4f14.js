webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("MVMM"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{attrs:{id:"header"}},[e("h2",[this._v("问卷管理")]),this._v(" "),e("router-link",{attrs:{tag:"h3",to:"/"}},[this._v("我的问卷")])],1)},staticRenderFns:[]};var s={name:"App",components:{vHeader:i("Z0/y")({name:"header"},a,!1,function(t){i("VQRs")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=i("Z0/y")(s,o,!1,function(t){i("xZ2r")},null,null).exports,c=i("zO6J"),u=i("lC5x"),p=i.n(u),l=i("3cXf"),d=i.n(l),h=function(){return JSON.parse(window.localStorage.getItem("questionnaire"))},v=function(t){window.localStorage.setItem("questionnaire",d()(t))},m={list:[{id:1,title:"问卷调查1",state:1,stateName:"发布中",time:"2018-07-01",questions:[{type:"radio",topic:"单选题",options:["选项1","选项2","选项3","选项4"]},{type:"checkbox",topic:"多选题",options:["选项1","选项2","选项3","选项4"]},{type:"textarea",topic:"文本题",isMandatory:!1}]},{id:2,title:"问卷调查2",state:0,stateName:"未发布",time:"2018-09-01",questions:[{type:"radio",topic:"单选题",options:["选项1","选项2","选项3","选项4"]},{type:"checkbox",topic:"多选题",options:["选项1","选项2","选项3","选项4"]},{type:"textarea",topic:"文本题",isMandatory:!1}]},{id:3,title:"问卷调查3",state:0,stateName:"未发布",time:"2018-06-01",questions:[{type:"radio",topic:"单选题",options:["选项1","选项2","选项3","选项4"]},{type:"checkbox",topic:"多选题",options:["选项1","选项2","选项3","选项4"]},{type:"textarea",topic:"文本题",isMandatory:!1}]},{id:4,title:"问卷调查4",state:2,stateName:"已结束",time:"2018-03-01",questions:[{type:"radio",topic:"单选题",options:["选项1","选项2","选项3","选项4"]},{type:"checkbox",topic:"多选题",options:["选项1","选项2","选项3","选项4"]},{type:"textarea",topic:"文本题",isMandatory:!1}]},{id:5,title:"问卷调查5",state:2,stateName:"已结束",time:"2018-01-01",questions:[{type:"radio",topic:"单选题",options:["选项1","选项2","选项3","选项4"]},{type:"checkbox",topic:"多选题",options:["选项1","选项2","选项3","选项4"]},{type:"textarea",topic:"文本题",isMandatory:!1}]},{id:6,title:"问卷调查6",state:2,stateName:"已结束",time:"2018-01-01",questions:[{type:"radio",topic:"单选题",options:["选项1","选项2","选项3","选项4"]},{type:"checkbox",topic:"多选题",options:["选项1","选项2","选项3","选项4"]},{type:"textarea",topic:"文本题",isMandatory:!1}]}],date:function(t,e){if(void 0===t||void 0===e){var i=new Date;t=i.getFullYear(),e=i.getMonth()}for(var n=new Date(t,e,1),a=n.getDay()||7,s=new Date(t,e+1,0).getDate(),o=new Date(t,e,0).getDate(),r=a-1,c=0,u=[],p=[],l=0;l<6;l++){for(var d=0;d<7;d++){var h=void 0,v=void 0,m=++c-r;m<=0?(h=o+m,v=e):m>s?(h=m-s,v=e+2):(h=m,v=e+1),v>=13&&(v=1),v<=0&&(v=12),u.push({date:m,month:v,showDate:h})}p.push(u.slice()),u.length=0}return t=n.getFullYear(),e=n.getMonth()+1,p[5].every(function(t){return t.month!==e})&&p.pop(),{year:t,month:e,weeks:p}},template:{radio:{type:"radio",topic:"单选题",options:["选项1","选项2","选项3","选项4"]},checkbox:{type:"checkbox",topic:"多选题",options:["选项1","选项2","选项3","选项4"]},textarea:{type:"textarea",topic:"文本题",isMandatory:!1}}},f={name:"List",data:function(){return{quList:[],iterator:{},isShowPrompt:!1,promptText:""}},created:function(){var t=Date.now();this.quList=h()||m.list,this.quList.forEach(function(e){1===e.state&&(1*new Date(e.time.replace(/-/g,","))<t&&(e.state=2,e.stateName="已结束"))})},methods:{checkItem:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;void 0===t.checked?n.a.set(t,"checked",!0):t.checked=null!==e?!e:!t.checked},checkAll:function(t){var e=this;this.quList.forEach(function(i){e.checkItem(i,t)})},showPrompt:function(t){this.promptText=t,this.isShowPrompt=!0},deleteItem:p.a.mark(function t(e){var i;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.showPrompt("确认要删除《"+e.title+"》？");case 2:return i=this.quList.indexOf(e),t.next=5,this.quList.splice(i,1);case 5:case"end":return t.stop()}},t,this)}),deleteCheckedItems:p.a.mark(function t(){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.quList.filter(function(t){return t.checked}).length){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,this.showPrompt("确认要删除所选问卷？");case 5:return t.next=7,this.quList=this.quList.filter(function(t){return!t.checked});case 7:case"end":return t.stop()}},t,this)}),editItem:p.a.mark(function t(e){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.showPrompt("确认要编辑《"+e.title+"》？");case 2:return t.next=4,this.$router.push({name:"Edit",params:{id:e.id}});case 4:case"end":return t.stop()}},t,this)})},computed:{isCheckedAll:function(){return this.quList.every(function(t){return t.checked})}},watch:{quList:{handler:function(t){t.forEach(function(t,e){return t.id=e+1}),v(t)},deep:!0}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t.quList.length?i("div",{staticClass:"list-wrapper"},[i("ul",[i("li"),t._v(" "),i("li",[t._v("标题")]),t._v(" "),i("li",[t._v("截止时间")]),t._v(" "),i("li",[t._v("状态")]),t._v(" "),i("li",[t._v("操作"),i("p",{on:{click:function(e){t.$router.push({name:"Edit",params:{id:0}})}}},[t._v("+ 新建问卷")])])]),t._v(" "),t._l(t.quList,function(e){return i("ul",[i("li",{on:{click:function(i){t.checkItem(e)}}},[i("i",{class:{checked:e.checked}})]),t._v(" "),i("li",{domProps:{textContent:t._s(e.title)}}),t._v(" "),i("li",{domProps:{textContent:t._s(e.time)}}),t._v(" "),i("li",{class:{releasing:1===e.state},domProps:{textContent:t._s(e.stateName)}}),t._v(" "),i("li",[i("router-link",{attrs:{tag:"span",to:"/fill/"+e.id}},[t._v("查看问卷")]),t._v(" "),e.state?i("router-link",{attrs:{tag:"span",to:"/data/"+e.id}},[t._v("查看数据")]):i("span",{on:{click:function(i){t.iterator=t.editItem(e),t.iterator.next()}}},[t._v("编辑")]),t._v(" "),i("span",{on:{click:function(i){t.iterator=t.deleteItem(e),t.iterator.next()}}},[t._v("删除")])],1)])}),t._v(" "),i("div",[i("p",{on:{click:function(e){t.checkAll(t.isCheckedAll)}}},[i("i",{class:{checked:t.isCheckedAll}})]),t._v(" "),i("p",[t._v("全选"),i("span",{on:{click:function(e){t.iterator=t.deleteCheckedItems(),t.iterator.next()}}},[t._v("删除")])])])],2):i("div",{staticClass:"add-wrapper"},[i("p",{on:{click:function(e){t.$router.push({name:"Edit",params:{id:0}})}}},[t._v("+ 新建问卷")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowPrompt,expression:"isShowPrompt"}],staticClass:"overlay"},[i("div",{staticClass:"prompt-box"},[i("header",[i("span",[t._v("提示")]),t._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.isShowPrompt=!1}}},[t._v("×")])]),t._v(" "),i("p",[t._v(t._s(t.promptText))]),t._v(" "),i("footer",[i("span",{on:{click:function(e){t.iterator.next(),t.isShowPrompt=!1}}},[t._v("确定")]),t._v(" "),i("span",{on:{click:function(e){t.isShowPrompt=!1}}},[t._v("取消")])])])])])},staticRenderFns:[]};var x=i("Z0/y")(f,_,!1,function(t){i("bwu7")},"data-v-8902b90a",null).exports,w={name:"Fill",data:function(){return{quData:{},questions:[],answers:{},promptText:"",isShowPrompt:!1}},beforeRouterEnter:function(t,e,i){var n=t.params.id,a={};if(0!==n){var s=h().length;n<0||n>s?(alert("非法路由"),i("")):a=h()[n-1],0===a.state?i():(alert("非法路由"),i("/"))}else i()},created:function(){this.getData()},methods:{getData:function(){var t=this.$route.params.id;this.quData=h()[t-1],this.questions=this.quData.questions,this.questions.forEach(function(t){"checkbox"===t.type?t.answer=[]:t.answer=""})},showPrompt:function(t){this.promptText=t,this.isShowPrompt=!0},checkboxAnswer:function(t,e,i){t.target.checked?i.push(e):i.splice(i.indexOf(e),1)},requireValidate:function(){var t=document.querySelectorAll("textarea");return[].every.call(t,function(t){return!t.hasAttribute("required")||""!==t.value.trim()})},getAnswer:function(){var t=this;this.questions.forEach(function(e,i){t.answers["Q"+(i+1)+"answer"]=e.answer})},sendAnswer:function(){this.getAnswer(),this.$router.push({path:"/"}),console.log("非正式项目，无需发送用户回答数据，打印出来看看就好"),console.log(this.answers)},submitBtn:p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="",0===this.quData.state?(e="问卷尚未发布，无法提交！",this.iterator=null):this.requireValidate()?e="确认提交问卷吗？":(e="有必填项未填写，无法提交！",this.iterator=null),t.next=4,this.showPrompt(e);case 4:return t.next=6,this.sendAnswer();case 6:case"end":return t.stop()}},t,this)}),backBtn:p.a.mark(function t(){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.showPrompt("放弃答题回到主页吗？");case 2:return t.next=4,this.$router.push({path:"/"});case 4:case"end":return t.stop()}},t,this)})}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"qu-wrap"},[i("header",[i("span",{on:{click:function(e){t.iterator=t.backBtn(),t.iterator.next()}}},[t._v("< 返回")]),t._v(" "),i("p",[t._v(t._s(t.quData.title))])]),t._v(" "),i("div",{staticClass:"qu-content"},t._l(t.questions,function(e,n){return i("section",{staticClass:"qu-item"},[i("h3",[t._v(t._s("Q"+(n+1)+"     "+e.topic)+"\n\t\t\t\t\t"),e.isMandatory?i("span",[t._v(" *")]):t._e()]),t._v(" "),"textarea"===e.type?i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"item.answer"}],attrs:{rows:"8",cols:"80",required:e.isMandatory},domProps:{value:e.answer},on:{input:function(i){i.target.composing||t.$set(e,"answer",i.target.value)}}}):i("ul",{staticClass:"options-list"},t._l(e.options,function(a,s){return i("li",[i("label",["radio"===e.type?i("input",{attrs:{type:e.type,name:n+1},on:{change:function(t){e.answer=s}}}):i("input",{attrs:{type:e.type,name:n+1},on:{change:function(i){t.checkboxAnswer(i,s,e.answer)}}}),t._v(" "),i("span",[t._v(t._s(a))])])])}))])})),t._v(" "),i("footer",[i("span",{attrs:{id:"submitBtn"},on:{click:function(e){t.iterator=t.submitBtn(),t.iterator.next()}}},[t._v("提交问卷")])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowPrompt,expression:"isShowPrompt"}],staticClass:"overlay"},[i("div",{staticClass:"prompt-box"},[i("header",[i("span",[t._v("提示")]),t._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.isShowPrompt=!1}}},[t._v("×")])]),t._v(" "),i("p",[t._v(t._s(t.promptText))]),t._v(" "),i("footer",[i("span",{on:{click:function(e){t.isShowPrompt=!1,t.iterator&&t.iterator.next()}}},[t._v("确定")]),t._v(" "),i("span",{on:{click:function(e){t.isShowPrompt=!1}}},[t._v("取消")])])])])])},staticRenderFns:[]};var y=i("Z0/y")(w,k,!1,function(t){i("xiWg")},"data-v-fce67f12",null).exports,q=i("Eoqn"),g=i.n(q),D=(i("7zHj"),i("2hlW"),i("l5KJ"),{name:"Data",data:function(){return{quData:{},scale:""}},beforeRouterEnter:function(t,e,i){var n=t.params.id,a={};if(0!==n){var s=h().length;n<0||n>s?(alert("非法路由"),i("")):a=h()[n-1],0===a.state?i():(alert("非法路由"),i("/"))}else i()},created:function(){this.getData()},methods:{getData:function(){var t=this.$route.params.id;this.quData=h()[t-1]},randomScale:function(){return 100*Math.random().toFixed(2)+"%"},renderEchart:function(t){g.a.init(t).setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"选择人数",type:"pie",radius:"60%",center:["30%","50%"],data:[{value:20,name:"选项1"},{value:30,name:"选项2"},{value:40,name:"选项3"},{value:50,name:"选项4"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}},mounted:function(){var t=this,e=document.querySelectorAll(".echart");[].forEach.call(e,function(e){t.renderEchart(e)})}}),C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"qu-wrap"},[i("header",[i("router-link",{attrs:{tag:"span",to:"/"}},[t._v("< 返回")]),t._v(" "),i("p",[t._v(t._s(t.quData.title))]),t._v(" "),i("p",{attrs:{id:"data-tip"}},[t._v("(随机生成的数据 可能会有不准确)")])],1),t._v(" "),i("div",{staticClass:"qu-content"},t._l(t.quData.questions,function(e,n){return i("div",{staticClass:"qu-item"},[i("section",{staticClass:"qu-data"},[i("h3",[t._v(t._s("Q"+(n+1)+"   "+e.topic))]),t._v(" "),"textarea"!==e.type?t._l(e.options,function(e){return i("p",[t._v(t._s(e))])}):i("p",[t._v("有效回答")])],2),t._v(" "),i("section",{staticClass:"ans-data"},[i("h4",[t._v("数据占比")]),t._v(" "),"radio"===e.type?t._l(e.options,function(e,n){return i("p",{staticClass:"outerBar"},[i("span",{staticClass:"innerBar",style:{width:t.randomScale()}}),t._v(" "),i("span",{staticClass:"scaleNum"})])}):"textarea"===e.type?i("p",{staticClass:"outerBar"},[i("span",{staticClass:"innerBar",style:{width:t.randomScale()}}),t._v(" "),i("span",{staticClass:"scaleNum"})]):i("p",{staticClass:"echart"})],2)])})),t._v(" "),i("footer",[i("router-link",{attrs:{tag:"p",to:"/",id:"backBtn"}},[t._v("返 回")])],1)])])},staticRenderFns:[]};var E=i("Z0/y")(D,C,!1,function(t){i("niNs")},"data-v-55a84dde",null).exports,b=i("IHPB"),P=i.n(b),T={name:"Datepicker",data:function(){return{dates:[],month:void 0,year:void 0}},mounted:function(){this.dates=m.date(),this.year=this.dates.year,this.month=this.dates.month},methods:{getDates:function(t){var e=this.year,i=this.month-1+t;i<0&&(e--,i=11),i>11&&(e++,i=0),this.dates=m.date(e,i),this.year=this.dates.year,this.month=this.dates.month},returnDate:function(t){var e=this.year+"-"+this.formatDate(this.month)+"-"+this.formatDate(t);this.$emit("sendDate",e)},formatDate:function(t){return t<10?"0"+t:t}}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"date-container"},[i("header",[i("p",{staticClass:"date-title"},[i("span",{staticClass:"left-arrow",on:{click:function(e){t.getDates(-1)}}}),t._v(" "),i("span",{domProps:{textContent:t._s(t.year+"年 "+t.month+"月")}}),t._v(" "),i("span",{staticClass:"right-arrow",on:{click:function(e){t.getDates(1)}}})]),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"date-content"},t._l(t.dates.weeks,function(e){return i("ul",[t._l(e,function(e){return[e.month===t.month?i("li",{staticClass:"selectable",on:{click:function(i){t.returnDate(e.showDate)}}},[t._v(t._s(e.showDate))]):i("li",[t._v(t._s(e.showDate))])]})],2)}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"week-title"},[i("ul",[i("li",[t._v("Mon")]),t._v(" "),i("li",[t._v("Tue")]),t._v(" "),i("li",[t._v("Wed")]),t._v(" "),i("li",[t._v("Thu")]),t._v(" "),i("li",[t._v("Fri")]),t._v(" "),i("li",[t._v("Sat")]),t._v(" "),i("li",[t._v("Sun")])])])}]};var N=i("Z0/y")(T,S,!1,function(t){i("UOlH")},"data-v-c59b9196",null).exports,I={name:"Edit",components:{"date-components":N},data:function(){return{index:"",quData:{},questions:[],questionTemplate:{},quList:h(),date:"",title:"",_title:"",topic:"",_topic:"",optionText:"",_optionText:"",curIndex:"",curOptIndex:"",promptText:"",iterator:{},isAdding:!1,titleEditing:!1,topicEditing:!1,isShowPrompt:!1,isShowDatepicker:!1}},beforeRouterEnter:function(t,e,i){var n=t.params.id,a={};if(0!==n){var s=h().length;n<0||n>s?(alert("非法路由"),i("")):a=h()[n-1],0===a.state?i():(alert("非法路由"),i("/"))}else i()},created:function(){this.getData()},computed:{tempTitle:function(){return this.title||this.quData.title}},methods:{getData:function(){var t=this.$route.params.id;if(0===t){var e={};e.id=this.quList.length+1,e.title="问卷调查"+e.id,e.state=0,e.stateName="未发布",e.time="2018-12-31",e.questions=[],this.quData=e}else this.quData=this.quList[t-1];this.date=this.quData.time,this.title=this.quData.title,this.index=this.quData.id-1,this.questionTemplate=m.template,this.questions=[].concat(P()(this.quData.questions))},changeDate:function(t){var e=Date.now();if(1*new Date(t.replace(/-/g,","))<e)return this.iterator=null,void this.showPrompt("选择的日期不能早于当前日期，请重新选择！");this.date=t},cancelTitleEdit:function(){this.titleEditing=!1,this.title=this._title},cancelTopicEdit:function(){this.topicEditing=!1,this.topic=this._topic},cancelOptionEdit:function(){this.curOptIndex="",this.optionText=this._optionText},doneTopicEdit:function(t){this.topicEditing=!1,this.questions[t].topic=this.topic},doneOptionEdit:function(t,e){this.curOptIndex="",this.questions[t].options[e]=this.optionText},switchItem:function(t,e){this.optIndex="",this.curIndex="";var i=e.splice(t,2);e.splice.apply(e,[t,0].concat(P()(i.reverse())))},moveUp:function(t,e){this.switchItem(t-1,e)},moveDown:function(t,e){this.switchItem(t,e)},errorPrompt:function(t){this.iterator=null,this.showPrompt(t)},reuse:function(t){if(10!==this.questions.length){var e=this.questions[t],i=JSON.parse(d()(e));this.questions.splice(t,0,i)}else this.errorPrompt("每份问卷至多10个问题！")},delQuestion:function(t){this.questions.length<=1?this.errorPrompt("每份问卷至少一个问题！"):this.questions.splice(t,1)},delOption:function(t,e){e.length<=2?this.errorPrompt("每个问题至少两个选项"):e.splice(t,1)},addOption:function(t){4!==t.length?t.push("请编辑选项内容"):this.errorPrompt("每个问题至多四个选项")},showPrompt:function(t){this.promptText=t,this.isShowPrompt=!0},addType:function(t){10!==this.questions.length?this.questions.push(this.questionTemplate[t]):this.errorPrompt("每份问卷至多10个问题！")},saveData:function(){this.questions.length<1?this.errorPrompt("每份问卷至少一个问题！"):(this.quData.title=this.title,this.quData.time=this.date,this.quData.questions=[].concat(P()(this.questions)),this.index===this.quList.length?this.quList.push(this.quData):this.quList.splice(this.index,1,this.quData))},backBtn:p.a.mark(function t(){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.showPrompt("确认未保存回到主页吗？");case 2:return t.next=4,this.$router.push({path:"/"});case 4:case"end":return t.stop()}},t,this)}),saveBtn:p.a.mark(function t(){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.showPrompt("确认要保存问卷？");case 2:return t.next=4,this.saveData();case 4:return t.next=6,this.$router.push({path:"/"});case 6:case"end":return t.stop()}},t,this)}),releaseBtn:p.a.mark(function t(){var e=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.showPrompt("确认要保存并发布问卷？");case 2:return t.next=4,e.quData.state=1,e.quData.stateName="发布中",void e.saveData();case 4:return t.next=6,this.$router.push({path:"/"});case 6:case"end":return t.stop()}},t,this)})},directives:{focus:{update:function(t){return t.focus()}}},watch:{quList:{handler:function(t){v(t),this.iterator&&this.iterator.next()}}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"qu-wrap"},[i("header",[i("span",{on:{click:function(e){t.iterator=t.backBtn(),t.iterator.next()}}},[t._v("< 返回")]),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:!t.titleEditing,expression:"!titleEditing"}],on:{click:function(e){t.titleEditing=!0}}},[t._v(t._s(t.tempTitle))]),t._v(" "),i("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.title,expression:"title"}],class:{inlineShow:t.titleEditing},attrs:{type:"text"},domProps:{value:t.title},on:{focus:function(e){t._title=t.title},blur:function(e){t.titleEditing=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.cancelTitleEdit()},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.titleEditing=!1}],input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"qu-content"},[t._l(t.questions,function(e,n){return i("section",{staticClass:"qu-item",class:{nowEditing:t.curIndex===n&&t.topicEditing,optEditing:t.curIndex===n}},[i("h3",{on:{click:function(e){t.curIndex=n,t.curOptIndex="",t.topicEditing=!0}}},[i("span",{staticClass:"qu-num"},[t._v(t._s("Q"+(n+1)))]),t._v(" "),i("span",{staticClass:"qu-topic"},[t._v(t._s(e.topic))]),t._v(" "),i("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.topic,expression:"topic"}],attrs:{type:"text"},domProps:{value:t.topic},on:{focus:function(e){t._topic=t.topic},blur:function(e){t.curIndex="",t.topic=""},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.cancelTopicEdit()},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.doneTopicEdit(n)}],input:function(e){e.target.composing||(t.topic=e.target.value)}}}),t._v(" "),e.isMandatory?i("span",[t._v(" *")]):t._e()]),t._v(" "),"textarea"===e.type?[i("textarea",{attrs:{rows:"8",cols:"80"}}),t._v(" "),i("label",{attrs:{id:"require-check"}},[i("input",{directives:[{name:"model",rawName:"v-model:checked",value:e.isMandatory,expression:"item.isMandatory",arg:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isMandatory)?t._i(e.isMandatory,null)>-1:e.isMandatory},on:{change:function(i){var n=e.isMandatory,a=i.target,s=!!a.checked;if(Array.isArray(n)){var o=t._i(n,null);a.checked?o<0&&t.$set(e,"isMandatory",n.concat([null])):o>-1&&t.$set(e,"isMandatory",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(e,"isMandatory",s)}}}),t._v("\n\t\t\t\t\t\t\t此题是否必填\n\t\t\t\t\t\t")])]:i("ul",{staticClass:"options-list"},t._l(e.options,function(a,s){return i("li",{class:{optionEditing:t.curOptIndex===s}},[i("span",{staticClass:"optionText",on:{click:function(e){t.curIndex=n,t.curOptIndex=s,t.topicEditing=!1}}},[t._v(t._s(a))]),t._v(" "),i("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.optionText,expression:"optionText"}],attrs:{type:"text"},domProps:{value:t.optionText},on:{focus:function(e){t._optionText=t.optionText},blur:function(e){t.curIndex="",t.optionText=""},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.cancelOptionEdit()},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.doneOptionEdit(n,s)}],input:function(e){e.target.composing||(t.optionText=e.target.value)}}}),t._v(" "),i("ul",{staticClass:"opt-ctrl"},[0!==s?i("li",{on:{click:function(i){t.moveUp(s,e.options)}}},[t._v("上移")]):t._e(),t._v(" "),s!==e.options.length-1?i("li",{on:{click:function(i){t.moveDown(s,e.options)}}},[t._v("下移")]):i("li",{on:{click:function(i){t.addOption(e.options)}}},[t._v("添加")]),t._v(" "),i("li",{on:{click:function(i){t.delOption(s,e.options)}}},[t._v("删除")])])])})),t._v(" "),i("ul",{staticClass:"operat-list"},[0!==n?i("li",{on:{click:function(e){t.moveUp(n)}}},[t._v("上移")]):t._e(),t._v(" "),n!==t.questions.length-1?i("li",{on:{click:function(e){t.moveDown(n)}}},[t._v("下移")]):t._e(),t._v(" "),i("li",{on:{click:function(e){t.reuse(n)}}},[t._v("复用")]),t._v(" "),i("li",{on:{click:function(e){t.delQuestion(n)}}},[t._v("删除")])]),t._v(" "),i("div")],2)}),t._v(" "),i("div",{staticClass:"add-box"},[i("p",{staticClass:"qu-type",class:{expand:t.isAdding}},[i("span",{on:{click:function(e){t.addType("radio")}}},[t._v("单选题")]),t._v(" "),i("span",{on:{click:function(e){t.addType("checkbox")}}},[t._v("多选题")]),t._v(" "),i("span",{on:{click:function(e){t.addType("textarea")}}},[t._v("文本题")])]),t._v(" "),i("p",{staticClass:"add-btn",on:{click:function(e){t.isAdding=!t.isAdding}}},[i("span",[t._v("+ 添加问题")])])])],2),t._v(" "),i("footer",[i("div",{staticClass:"date-part"},[i("label",[t._v("问卷截止日期\n\t\t\t\t\t\t"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"text",readonly:"true"},domProps:{value:t.date},on:{click:function(e){t.isShowDatepicker=!t.isShowDatepicker},input:function(e){e.target.composing||(t.date=e.target.value)}}})]),t._v(" "),i("date-components",{directives:[{name:"show",rawName:"v-show",value:t.isShowDatepicker,expression:"isShowDatepicker"}],attrs:{id:"date-picker"},on:{sendDate:t.changeDate}})],1),t._v(" "),i("div",{staticClass:"ctrl-part"},[i("span",{on:{click:function(e){t.iterator=t.saveBtn(),t.iterator.next()}}},[t._v("保存问卷")]),t._v(" "),i("span",{on:{click:function(e){t.iterator=t.releaseBtn(),t.iterator.next()}}},[t._v("发布问卷")])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowPrompt,expression:"isShowPrompt"}],staticClass:"overlay"},[i("div",{staticClass:"prompt-box"},[i("header",[i("span",[t._v("提示")]),t._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.isShowPrompt=!1}}},[t._v("×")])]),t._v(" "),i("p",[t._v(t._s(t.promptText))]),t._v(" "),i("footer",[i("span",{on:{click:function(e){t.isShowPrompt=!1,t.iterator&&t.iterator.next()}}},[t._v("确定")]),t._v(" "),i("span",{on:{click:function(e){t.isShowPrompt=!1}}},[t._v("取消")])])])])])},staticRenderFns:[]};var A=i("Z0/y")(I,M,!1,function(t){i("UkLl")},"data-v-64862834",null).exports;n.a.use(c.a);var L=new c.a({routes:[{path:"/",name:"List",component:x},{path:"/fill/:id",name:"Fill",component:y},{path:"/data/:id",name:"Data",component:E},{path:"/edit/:id",name:"Edit",component:A},{path:"/datepicker",name:"Datepicker",component:N}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:L,components:{App:r},template:"<App/>"})},UOlH:function(t,e){},UkLl:function(t,e){},VQRs:function(t,e){},bwu7:function(t,e){},niNs:function(t,e){},xZ2r:function(t,e){},xiWg:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.05387fd217ac752e4f14.js.map