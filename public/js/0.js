(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+SZM":function(t,e,n){"use strict";var s={props:{title:{type:String,default:""}},data:function(){return{notification:{show:!1,type:null,message:null}}},watch:{title:function(t){this.updatePageTitle(t)}},updated:function(){localStorage.success&&(this.notification.message=localStorage.success,this.notification.type="success",this.notification.show=!0,localStorage.removeItem(success))},mounted:function(){this.updatePageTitle(this.title),localStorage.success&&(this.notification.message=localStorage.success,this.notification.type="success",this.notification.show=!0,localStorage.removeItem(success))},methods:{updatePageTitle:function(t){document.title=t?"".concat(t," | Monica"):"Monica"},submit:function(){}}},a=(n("Ay7K"),n("KHd+")),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("header",{staticClass:"w-100 ph3 ph5-ns pv2 bg-white bb"},[n("div",{staticClass:"db dt-ns mw9 center w-100"},[t._m(0),t._v(" "),n("nav",{staticClass:"db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns"},[n("inertia-link",{staticClass:"f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib",attrs:{title:"Documentation",href:"/"}},[t._v("\n          Dashboard\n        ")]),t._v(" "),n("inertia-link",{staticClass:"f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib",attrs:{title:"Components",href:"/people"}},[t._v("\n          Contacts\n        ")]),t._v(" "),n("inertia-link",{staticClass:"f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib",attrs:{title:"Gallery of sites built with Tachyons",href:"/gallery/"}},[t._v("\n          Groups\n        ")]),t._v(" "),n("inertia-link",{staticClass:"f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib",attrs:{title:"Gallery of sites built with Tachyons",href:"/gallery/"}},[t._v("\n          Events\n        ")]),t._v(" "),n("inertia-link",{staticClass:"f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib",attrs:{title:"Gallery of sites built with Tachyons",href:"/gallery/"}},[t._v("\n          Journal\n        ")]),t._v(" "),n("inertia-link",{staticClass:"f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib",attrs:{title:"Resources",href:"/resources/"}},[t._v("\n          Settings\n        ")])],1)])]),t._v(" "),t._t("default"),t._v(" "),t.notification.show?["success"==t.notification.type?n("div",{staticClass:"absolute notification ba z-999"},[t._v("\n      success\n    ")]):t._e()]:t._e()],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"db dtc-ns v-mid tl w-10"},[e("a",{staticClass:"dib f5 f4-ns fw6 mt0 mb1 link black-70",attrs:{href:"/",title:"Home"}},[this._v("\n          Monica\n        ")])])}],!1,null,"3f54ed9c",null);e.a=i.exports},"0pB9":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n.select[data-v-2da8b270] {\n  height: 34px;\n  -webkit-transition: all;\n  transition: all;\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  border: 1px solid #c4cdd5;\n}\n.select[data-v-2da8b270]:focus {\n  border: 1px solid #5c6ac4;\n}\n",""])},"2T2J":function(t,e,n){var s=n("Ad1I");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,a);s.locals&&(t.exports=s.locals)},"5V2Q":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n.input[data-v-061dd7e2] {\n  -webkit-transition: all;\n  transition: all;\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  border: 1px solid #c4cdd5;\n}\n.input[data-v-061dd7e2]:focus {\n  border: 1px solid #5c6ac4;\n}\n",""])},"6Vu5":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".notification[data-v-3f54ed9c]{bottom:20px;right:20px;width:450px}",""])},Ad1I:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".contacts li[data-v-7e9cc9af]:last-child{border-bottom:0}",""])},Ay7K:function(t,e,n){"use strict";var s=n("gs1V");n.n(s).a},HjyT:function(t,e,n){var s=n("5V2Q");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,a);s.locals&&(t.exports=s.locals)},I0BT:function(t,e,n){var s=n("0pB9");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,a);s.locals&&(t.exports=s.locals)},IP51:function(t,e,n){"use strict";var s=n("I0BT");n.n(s).a},JYWX:function(t,e,n){"use strict";var s=n("HjyT");n.n(s).a},"KHd+":function(t,e,n){"use strict";function s(t,e,n,s,a,i,r,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),s&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):a&&(l=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return s}))},M4Ns:function(t,e,n){"use strict";var s=n("2T2J");n.n(s).a},gs1V:function(t,e,n){var s=n("6Vu5");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,a);s.locals&&(t.exports=s.locals)},q8qC:function(t,e,n){"use strict";n.r(e);var s=n("+SZM"),a={props:{value:{type:[String,Number],default:""},title:{type:String,default:""},label:{type:String,default:null},name:{type:String,default:""},placeholder:{type:String,default:""},required:{type:Boolean,default:!0},type:{type:String,default:""},id:{type:String,default:""},customClass:{type:String,default:""},width:{type:Number,default:-1},maxlength:{type:Number,default:null}},data:function(){return{classes:""}},created:function(){this.classes=""!=this.customClass?this.customClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0"},methods:{focus:function(){this.$refs.input.focus()},onInput:function(t){this.$emit("input",t.target.value)},onSubmit:function(t){this.$emit("submit",t.target.value)},onBlur:function(t){this.$emit("blur",t.target.value)},onChange:function(t){this.$emit("change",t.target.value)}}},i=(n("JYWX"),n("KHd+")),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("label",{staticClass:"mb2",class:{b:t.required},attrs:{for:t.name}},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),n("input",{ref:"input",class:t.classes,attrs:{id:t.id,type:t.type,required:t.required,name:t.id,placeholder:t.placeholder,maxlength:t.maxlength},domProps:{value:t.value},on:{input:function(e){return t.onInput(e)},blur:function(e){return t.onBlur(e)},change:function(e){return t.onChange(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}}})])}),[],!1,null,"061dd7e2",null).exports,o={props:{value:{type:[String,Number],default:""},options:{type:[Array,Object],default:function(){return[]}},title:{type:String,default:""},label:{type:String,default:null},id:{type:String,default:""},name:{type:String,default:""},excludedId:{type:Number,default:-1},required:{type:Boolean,default:!0},customClass:{type:String,default:""}},data:function(){return{selectedOption:null,classes:""}},created:function(){this.classes=""!=this.customClass?this.customClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0"},watch:{value:function(t){this.selectedOption=t}},mounted:function(){this.selectedOption=this.value},methods:{filterExclude:function(t){var e=this;return t.filter((function(t){return t.id!=e.excludedId}))},focus:function(){this.$refs.select.focus()},onInput:function(t){this.$emit("input",t.target.value)}}},l=(n("IP51"),Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("label",{staticClass:"mb2",attrs:{for:t.name}},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),n("select",{ref:"select",class:t.classes,attrs:{id:t.id,name:t.name,required:t.required},domProps:{value:t.selectedOption},on:{input:t.onInput}},[Array.isArray(t.options)?t._l(t.filterExclude(t.options),(function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v("\n        "+t._s(e.name)+"\n      ")])})):t._l(t.options,(function(e,s){return n("optgroup",{key:s,attrs:{label:e.name}},t._l(t.filterExclude(e.options),(function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v("\n          "+t._s(e.name)+"\n        ")])})),0)}))],2)])}),[],!1,null,"2da8b270",null).exports),c={components:{Layout:s.a,FormInput:r,FormSelect:l},props:{genders:{type:Array,default:null}},data:function(){return{form:{firstname:null,lastname:null,nickname:null,gender:null,errors:[]},loadingState:""}},methods:{submit:function(){var t=this;this.loadingState="loading",axios.post("/people",this.form).then((function(e){localStorage.success=t.$t("account.company_news_update_success"),t.$inertia.visit(e.data.data.url)})).catch((function(e){t.loadingState=null,t.form.errors=_.flatten(_.toArray(e.response.data))}))}}},u=(n("M4Ns"),Object(i.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{attrs:{title:"Add a new contact"}},[n("section",{staticClass:"w-100 ph3 ph5-ns bb"},[n("div",{staticClass:"db mw9 center w-100 breadcrumb f6"},[n("ul",{staticClass:"list ph0 tl db mh0 mv2"},[n("li",{staticClass:"di"},[n("inertia-link",{attrs:{href:"/dashboard"}},[t._v("Dashboard")])],1),t._v(" "),n("li",{staticClass:"di"},[n("inertia-link",{attrs:{href:"/people"}},[t._v(t._s(t.$t("app.breadcrumb_account_home")))])],1),t._v(" "),n("li",{staticClass:"di"},[t._v("\n          "+t._s(t.$t("app.breadcrumb_account_manage_teams"))+"\n        ")])])])]),t._v(" "),n("section",{staticClass:"ph3 ph0-ns"},[n("div",{staticClass:"mt4 mw7 center mb3"},[n("h2",{staticClass:"f3 fw5 ma0"},[t._v(t._s(t.$t("people.people_add_title")))])]),t._v(" "),n("div",{staticClass:"mw7 center br3 ba bg-white mb6"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("errors",{attrs:{errors:t.form.errors}}),t._v(" "),n("div",{staticClass:"pa4-ns ph3 pv2 bb"},[n("div",{staticClass:"mb3"},[n("form-input",{attrs:{id:"first_name","input-type":"text",required:!0,title:t.$t("people.people_add_firstname")},model:{value:t.form.firstname,callback:function(e){t.$set(t.form,"firstname",e)},expression:"form.firstname"}})],1),t._v(" "),n("div",{staticClass:"mb3"},[n("form-input",{attrs:{id:"last_name","input-type":"text",required:!1,title:t.$t("people.people_add_lastname")},model:{value:t.form.lastname,callback:function(e){t.$set(t.form,"lastname",e)},expression:"form.lastname"}})],1),t._v(" "),n("div",{staticClass:"mb3 mb0-ns"},[n("form-input",{attrs:{id:"nickname","input-type":"text",required:!1,title:t.$t("people.people_add_nickname")},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1)]),t._v(" "),n("div",{staticClass:"pa4-ns ph3 pv2 mb3 mb0-ns bb"},[n("form-select",{attrs:{required:!1,title:t.$t("people.people_add_gender"),id:"gender",options:t.genders},model:{value:t.form.gender,callback:function(e){t.$set(t.form,"gender",e)},expression:"form.gender"}})],1),t._v(" "),n("div",{staticClass:"ph4-ns ph3 pv3"},[n("div",{staticClass:"flex-ns justify-between"},[n("div",[n("inertia-link",{staticClass:"btn w-auto-ns w-100 mb2 pb0-ns",attrs:{href:"/people"}},[t._v(t._s(t.$t("app.cancel")))])],1),t._v(" "),n("div",[n("button",{staticClass:"btn w-auto-ns w-100 mb2 pb0-ns",attrs:{name:"save_and_add_another",type:"submit"}},[t._v(t._s(t.$t("people.people_save_and_add_another_cta")))]),t._v(" "),n("button",{staticClass:"btn w-auto-ns w-100 mb2 pb0-ns",attrs:{name:"save",value:"true",type:"submit"}},[t._v(t._s(t.$t("people.people_add_cta")))])])])])],1)])])])}),[],!1,null,"7e9cc9af",null));e.default=u.exports}}]);