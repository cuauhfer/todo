(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(8),a=n.n(o),r=n(2),i=n(3),s=n(9),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(s.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggleDone":return e.map((function(e){return e.id===t.payload?Object(i.a)(Object(i.a)({},e),{},{done:!e.done}):e}));default:return e}},l=n(0),u=function(e){var t=e.todo,n=e.index,c=e.handleToggleDone,o=e.handleDelete;return Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsxs)("span",{id:"desc".concat(t.id),className:!0===t.done?"complete":"",children:[n+1,". ",t.desc]}),Object(l.jsxs)("span",{className:"controls",children:[Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){c(t.id)},children:"Hecho"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){o(t.id)},children:"Borrar"})]})]})},j=function(e){var t=e.todos,n=e.handleToggleDone,c=e.handleDelete;return Object(l.jsx)("ul",{className:"list-group",children:t.map((function(e,t){return Object(l.jsx)(u,{todo:e,index:t,handleDelete:c,handleToggleDone:n},e.id)}))})},b=n(6),h=function(e){var t=e.handleAdd,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(r.a)(t,2),o=n[0],a=n[1];return[o,function(e){var t=e.target;a(Object(i.a)(Object(i.a)({},o),{},Object(b.a)({},t.name,t.value)))},function(){a(e)}]}({description:""}),o=Object(r.a)(n,3),a=o[0],s=o[1],d=o[2];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(a.description.trim().length<1)){var n={id:(new Date).getTime(),desc:a.description,done:!1};t(n),d()}},children:[Object(l.jsx)("input",{type:"text",name:"description",placeholder:"Nueva tarea ...",autoComplete:"off",value:a.description,onChange:s}),Object(l.jsx)("button",{type:"submit",className:"btn btn-success",children:"Agregar"})]})})},p=(n(15),function(){return JSON.parse(localStorage.getItem("todos"))||[]}),O=function(){var e=Object(c.useReducer)(d,[],p),t=Object(r.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"To-Do App  "}),Object(l.jsx)("hr",{}),Object(l.jsx)("h4",{children:"Agregar tarea"}),Object(l.jsx)(h,{handleAdd:function(e){o({type:"add",payload:e})}}),Object(l.jsxs)("h4",{children:["Tareas ",Object(l.jsxs)("small",{children:["(",n.length,")"]})]}),Object(l.jsx)(j,{todos:n,handleToggleDone:function(e){o({type:"toggleDone",payload:e})},handleDelete:function(e){o({type:"delete",payload:e})}})]})};n(16);a.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.713a671c.chunk.js.map