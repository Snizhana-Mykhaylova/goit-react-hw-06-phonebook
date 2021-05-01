(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={input:"filter_input__3rGOU"}},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(7),u=n.n(o),i=n(4),s=n(3),b=n(5),l=n(15),j=n(2),m=n(31),d=Object(s.b)("contscts/addContact",(function(t,e){return{payload:{id:Object(m.a)(),name:t,number:e}}})),f=Object(s.b)("contacts/filterChange"),h=Object(s.b)("contacts/deleteContact"),p=Object(s.c)([],(a={},Object(b.a)(a,d,(function(t,e){var n=e.payload;return[].concat(Object(l.a)(t),[n])})),Object(b.a)(a,h,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),O=Object(s.c)("",Object(b.a)({},f,(function(t,e){return e.payload}))),x=Object(j.b)({contacts:p,filter:O}),v=Object(s.a)({reducer:{phonebook:x}}),_=n(12),C=n(13),N=n(17),g=n(16),y=n(6),k=n.n(y),w=n(1),S=function(t){Object(N.a)(n,t);var e=Object(g.a)(n);function n(){var t;Object(_.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.number,a=t.state.name;t.props.onSubmit(a,n),t.formReset()},t.formReset=function(){t.setState({name:"",number:""})},t}return Object(C.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("form",{onSubmit:this.handleSubmit,className:k.a.form,children:[Object(w.jsxs)("label",{className:k.a.input,children:["Name",Object(w.jsx)("input",{value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]}),Object(w.jsxs)("label",{className:k.a.input,children:["Number",Object(w.jsx)("input",{value:this.state.number,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(w.jsx)("button",{className:k.a.button,children:"Add contact"})]})}}]),n}(c.Component),A=Object(i.b)(null,(function(t){return{onSubmit:function(e,n){return t(d(e,n))}}}))(S),D=n(8),z=n.n(D),I=n(27),L=Object(i.b)((function(t){var e=t.phonebook;return{contacts:function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e.contacts,e.filter)}}),(function(t){return{onDeleteContact:function(e){return t(h(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(w.jsx)("ul",{children:e.map((function(t){return Object(w.jsxs)("li",{className:z.a.contactItem,children:[t.name,":",Object(w.jsx)("span",{className:z.a.number,children:I.format(t.number,"NNN-NN-NN")}),Object(w.jsx)("button",{className:z.a.button,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})),q=n(14),J=n.n(q),Z=function(t){var e=t.value,n=t.onChange;return Object(w.jsxs)("label",{children:["Find contacts by name",Object(w.jsx)("input",{className:J.a.input,type:"text",value:e,onChange:n})]})},B=Object(i.b)((function(t){return{value:t.phonebook.filter}}),(function(t){return{onChange:function(e){return t(f(e.target.value))}}}))(Z);Z.defaultProps={value:""};n(28);var E=function(){return Object(w.jsxs)("div",{className:"containerApp",children:[Object(w.jsx)("h1",{children:"Phonebook"}),Object(w.jsx)(A,{}),Object(w.jsx)("h2",{children:"Contacts"}),Object(w.jsx)(B,{}),Object(w.jsx)(L,{})]})};u.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(i.a,{store:v,children:Object(w.jsx)(E,{})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"form_form__1jp82",input:"form_input__1HwQh",button:"form_button__3LqjL"}},8:function(t,e,n){t.exports={contactItem:"contacts_contactItem__20TnE",number:"contacts_number__24waS",button:"contacts_button__3eH0D"}}},[[29,1,2]]]);
//# sourceMappingURL=main.07c5d590.chunk.js.map