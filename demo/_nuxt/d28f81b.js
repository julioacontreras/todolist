(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{294:function(t,e,n){"use strict";t.exports=function(t){const e=function(t){try{return JSON.parse(t)}catch(e){return t}}(t);return void 0===e?null:e}},295:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));n(34),n(300),n(301),n(143),n(41),n(54);var r=n(82),c=n(302),o=function(t){c("tasks",JSON.stringify(t))},l={tasks:[]},f=Object(r.defineStore)({id:"tasks",state:function(){return l},actions:{clear:function(){for(;this.tasks.length>0;)this.tasks.pop();o(this.tasks)},checkAll:function(t){this.tasks.forEach((function(e){e.checked=t})),o(this.tasks)},check:function(t,e){var n=this.findTaskById(t);n&&(n.checked=e),o(this.tasks)},findTaskById:function(t){return this.tasks.find((function(e){return e.id===t}))},remove:function(t){var e=this.tasks.findIndex((function(e){return e.id===t}));e>=0&&this.tasks.splice(e,1),o(this.tasks)},create:function(label){var t=this.tasks.length+1;this.tasks.push({id:t,icon:"circle",label:label,checked:!1}),o(this.tasks)},load:function(){var t;this.tasks=(t=c("tasks"))?JSON.parse(t):[]}},getters:{status:function(){var t=this.tasks.filter((function(t){return!0===t.checked})),e=this.tasks.length;return"".concat(t.length,"/").concat(e)}}})},296:function(t,e,n){"use strict";n.r(e);var r=n(0),c=function(t){return t?"check-circle":"circle"},o=Object(r.h)({props:{checked:{type:Boolean,required:!0}},setup:function(){return{getIcon:c}}}),l=n(28),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-icon",{staticClass:"cursor-pointer",class:{"text-primary":t.checked,"text-disabled hover:text-primary":!t.checked},attrs:{icon:t.getIcon(t.checked),size:"is-dashboard"}})}),[],!1,null,null,null);e.default=component.exports},297:function(t,e,n){"use strict";n.r(e);var r=n(28),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("b-icon",{staticClass:"pr-4 pt-1 cursor-pointer text-disabled hover:text-primary",attrs:{icon:"close",size:"is-dashboard"}})}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,n){"use strict";var r=n(2),c=n(64).find,o=n(142),l="find",f=!0;l in[]&&Array(1).find((function(){f=!1})),r({target:"Array",proto:!0,forced:f},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},301:function(t,e,n){"use strict";var r=n(2),c=n(64).findIndex,o=n(142),l="findIndex",f=!0;l in[]&&Array(1).findIndex((function(){f=!1})),r({target:"Array",proto:!0,forced:f},{findIndex:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},302:function(t,e,n){"use strict";(function(e){var r=n(303),c=n(294),o=n(304),l="localStorage"in e&&e.localStorage?e.localStorage:r;function f(t,e){return 1===arguments.length?d(t):h(t,e)}function d(t){const e=l.getItem(t);return c(e)}function h(t,e){try{return l.setItem(t,JSON.stringify(e)),!0}catch(t){return!1}}f.set=h,f.get=d,f.remove=function(t){return l.removeItem(t)},f.clear=function(){return l.clear()},f.backend=function(t){return t&&(l=t),l},f.on=o.on,f.off=o.off,t.exports=f}).call(this,n(40))},303:function(t,e,n){"use strict";var r={};t.exports={getItem:function(t){return t in r?r[t]:null},setItem:function(t,e){return r[t]=e,!0},removeItem:function(t){return!!(t in r)&&delete r[t]},clear:function(){return r={},!0}}},304:function(t,e,n){"use strict";(function(e){var r=n(294),c={};function o(t){t||(t=e.event);var n=c[t.key];n&&n.forEach((function(e){e(r(t.newValue),r(t.oldValue),t.url||t.uri)}))}t.exports={on:function(t,n){c[t]?c[t].push(n):c[t]=[n],e.addEventListener?e.addEventListener("storage",o,!1):e.attachEvent?e.attachEvent("onstorage",o):e.onstorage=o},off:function(t,e){var n=c[t];n.length>1?n.splice(n.indexOf(e),1):c[t]=[]}}}).call(this,n(40))},306:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(295),o=n(297),l=n(296),f=Object(r.h)({components:{Close:o.default,Check:l.default},setup:function(){var t=Object(c.a)(),e=Object(r.J)(!1);return{checkAllTasks:function(){e.value=!e.value,t.checkAll(e.value)},removeAllTasks:function(){t.clear()},checked:e,status:Object(r.b)((function(){return t.status}))}}}),d=n(28),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group pl-4 pt-2 pb-2 flex items-center"},[n("div",{staticClass:"w-12"},[n("div",{staticClass:"opacity-0 group-hover:opacity-100",attrs:{role:"check-all-tasks"},on:{click:t.checkAllTasks}},[n("check",{attrs:{checked:t.checked}})],1)]),t._v(" "),n("div",{staticClass:"flex flex-col flex-grow"},[n("p",{staticClass:"w-full flex text-base text-primary justify-center font-semibold uppercase"},[t._v("\n      Listado de tareas - "),n("span",{attrs:{role:"status"}},[t._v(t._s(t.status))])])]),t._v(" "),n("div",{staticClass:"w-12 flex justify-end pr-3"},[n("div",{staticClass:"opacity-0 group-hover:opacity-100",attrs:{role:"remove-all-tasks"},on:{click:t.removeAllTasks}},[n("close")],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);