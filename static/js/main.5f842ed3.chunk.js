(this["webpackJsonphomework-incubator"]=this["webpackJsonphomework-incubator"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={Header:"Header_Header__YXrb6",HeaderButton:"Header_HeaderButton__eJYAm",HeaderButtonSpan:"Header_HeaderButtonSpan__1xIuE",HeaderButtonOpen:"Header_HeaderButtonOpen__Ji4xG",Nav:"Header_Nav__1_b_j",NavLinkWrapper:"Header_NavLinkWrapper__3eAsu",OpenNav:"Header_OpenNav__3u1GC",Active:"Header_Active__2i71c",Backdrop:"Header_Backdrop__2Psf6"}},function(e,a,t){e.exports={message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",items:"Message_items__2Twrt",name:"Message_name__Tzmp0",text:"Message_text__2fXBO",time:"Message_time__HOFTG"}},,,function(e,a,t){e.exports={Greeting:"Greeting_Greeting__18tza",Error:"Greeting_Error__3LlPC",TotalUser:"Greeting_TotalUser__1OP33",error:"Greeting_error__1uvQ8"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",fake:"SuperCheckbox_fake__4nJz8",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},function(e,a,t){e.exports={HW7Wrapper:"HW7_HW7Wrapper__2W1hI",selectWrapper:"HW7_selectWrapper__2Snh-",radioWrapper:"HW7_radioWrapper__1rbkm",styleSelect:"HW7_styleSelect__Q7sTw"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,,,,function(e,a,t){e.exports={error404:"Pages_error404__26HKk",errorNumber:"Pages_errorNumber__3uDQA"}},function(e,a,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I"}},function(e,a,t){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,a,t){e.exports={customStyle:"SuperEditableSpan_customStyle__11FHD",editableInputStyle:"SuperEditableSpan_editableInputStyle__1qpLV"}},,,,function(e,a,t){e.exports={App:"App_App__1Sc4o"}},,function(e,a,t){e.exports=t(38)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=(t(32),t(25)),u=t.n(o),i=t(2),s=t(6),m=t.n(s),p=t(8);var d=function(){var e=[m.a.Nav],a=Object(n.useState)(!1),t=Object(i.a)(a,2),l=t[0],c=t[1];function o(){c(!1)}return l&&e.push(m.a.OpenNav),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:e.join(" ")},r.a.createElement("div",{className:m.a.NavLinkWrapper},r.a.createElement("div",null,r.a.createElement(p.b,{activeClassName:m.a.Active,onClick:o,to:"/pre-junior"},"PreJunior")),r.a.createElement("div",null,r.a.createElement(p.b,{activeClassName:m.a.Active,onClick:o,to:"/junior"},"Junior"))),r.a.createElement("div",{onClick:function(){c(!l)},className:l?m.a.HeaderButton+" "+m.a.HeaderButtonOpen:m.a.HeaderButton},r.a.createElement("span",{className:m.a.HeaderButtonSpan}))),r.a.createElement("div",{className:m.a.Header}),l?r.a.createElement("div",{onClick:o,className:m.a.Backdrop}):null)},E=t(1),_=t(18),v=t.n(_);var f=function(){return r.a.createElement("div",{className:v.a.error404},r.a.createElement("div",null,r.a.createElement("div",{className:v.a.errorNumber},"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014")))},h=t(7),b=t.n(h);var g=function(e){return r.a.createElement("div",{className:b.a.message},r.a.createElement("div",{className:b.a.avatar},r.a.createElement("img",{src:e.avatar,alt:e.name})),r.a.createElement("div",{className:b.a.items},r.a.createElement("div",{className:b.a.name},e.name),r.a.createElement("div",{className:b.a.text},e.message),r.a.createElement("div",{className:b.a.time},e.time)))},N="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",C="Some Name",k="some text",O="22:00";var S=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(g,{avatar:N,name:C,message:k,time:O}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var j=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var x=function(e){var a=e.data.map((function(a){return r.a.createElement(j,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"},{_id:6,name:"Angular 8",priority:"middle"}];var H=function(){var e=Object(n.useState)(y),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):[]}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(x,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},W=t(10),w=t.n(W),B=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=""===l?"":w.a.error;return r.a.createElement("div",{className:w.a.Greeting},r.a.createElement("input",{value:a,onChange:t,className:o}),l?r.a.createElement("span",{className:w.a.Error},l):null,r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:w.a.TotalUser},c))},T=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),p=m[0],d=m[1],E=a.length;return r.a.createElement(B,{name:o,setNameCallback:function(e){var a=e.currentTarget.value;u(a),d("")},addUser:function(){""!==o?(t(o),alert("Hello ".concat(o," !")),d(""),u("")):d("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!")},error:p,totalUsers:E})},A=t(40);var I=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(T,{users:t,addUserCallback:function(e){t.push({_id:Object(A.a)(),name:e}),l(t),console.log(t)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=t(3),P=t(13),J=t.n(P),G=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(J.a.error," ").concat(u||""),m=""!==c?"".concat(J.a.errorInput," ").concat(o||""):"".concat(J.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},U=t(19),M=t.n(U),L=t(20),X=t.n(L),z=function(e){var a=e.red,t=e.className,n=Object(F.a)(e,["red","className"]),l="".concat(a?X.a.red:X.a.default," ").concat(t||"");return r.a.createElement("button",Object.assign({className:l},n))},D=t(11),K=t.n(D),Q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:K.a.label},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),r.a.createElement("span",{className:K.a.fake}),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var R=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t?"":"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f!",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(t),l(""))},u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],p=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:M.a.column},r.a.createElement(G,{value:t,onChangeText:l,onEnter:o,error:c,className:M.a.blue}),r.a.createElement(z,{red:!1,onClick:o},"delete"),r.a.createElement(Q,{checked:m,onChangeChecked:p},"some text "),r.a.createElement(Q,{checked:m,onChange:function(e){p(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Y=t(21),q=t.n(Y),Z=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],p=l||{},d=p.children,E=p.onDoubleClick,_=p.className,v=Object(F.a)(p,["children","onDoubleClick","className"]),f="".concat(q.a.customStyle," ").concat(_);return console.log(c.value),r.a.createElement(r.a.Fragment,null,s?r.a.createElement(G,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()},className:q.a.editableInputStyle},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:f},v),d||c.value))};function V(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function $(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}V("test",{x:"A",y:2});$("test",{x:"",y:0});var ee=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(Z,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text...",className:"defaultStyle"}})),r.a.createElement(z,{onClick:function(){V("editable-span-value",t)}},"save"),r.a.createElement(z,{onClick:function(){l($("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},ae=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(F.a)(e,["options","onChange","onChangeOption"]),l=a?a.map((function(e,a){return r.a.createElement("option",{title:e,value:e,key:a},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e.currentTarget.value)}},n),l)},te=function(e){e.type,e.name;var a=e.options,t=(e.value,e.onChange,e.onChangeOption,Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),a?a.map((function(e,a){})):[]);return r.a.createElement(r.a.Fragment,null,t)},ne=t(12),re=t.n(ne),le=["x","y","z"];var ce=function(){var e=Object(n.useState)(le[1]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:re.a.HW7Wrapper},r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",{className:re.a.selectWrapper},r.a.createElement(ae,{options:le,value:t,onChangeOption:l,className:re.a.styleSelect})),r.a.createElement("div",{className:re.a.radioWrapper},r.a.createElement(te,{name:"radio",options:le,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var oe=function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(H,null),r.a.createElement(I,null),r.a.createElement(R,null),r.a.createElement(ee,null),r.a.createElement(ce,null))};var ue=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Junior"))},ie="/pre-junior",se="/junior";var me=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:ie})}}),r.a.createElement(E.b,{path:ie,render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(E.b,{path:se,render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(E.b,{render:function(){return r.a.createElement(f,null)}})))};var pe=function(){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(d,null),r.a.createElement(me,null)))};var de=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.5f842ed3.chunk.js.map