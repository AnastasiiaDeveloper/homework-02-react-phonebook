(this.webpackJsonpmodule2phoneb=this.webpackJsonpmodule2phoneb||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(7),r=n.n(o),s=(n(13),n(2)),l=n(3),i=n(5),u=n(4),m=n(1),d=n.n(m),h=(n(14),function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"addContact",value:function(){var t=document.getElementById("name").value,e=this.props.contacts;if(e.some((function(e){return e.name===t})))alert("".concat(t," is already in contacts."));else{var n=document.getElementById("number").value;e.push({id:d()(),name:t,number:n}),this.props.updateContacts(e)}}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"border"},c.a.createElement("h2",null,"Name"),c.a.createElement("input",{id:"name",placeholder:"Enter name..."}),c.a.createElement("h2",null,"Number"),c.a.createElement("input",{id:"number",placeholder:"Enter number..."}),c.a.createElement("button",{onClick:function(){return t.addContact()}},"Add contact"))}}]),n}(a.Component)),f=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"findContactByName",value:function(){var t=document.getElementById("filter").value.toLowerCase();if(t){var e=this.props.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));this.props.showFilteredContacts(e)}else this.props.setDefaultContacts()}},{key:"render",value:function(){var t=this;return c.a.createElement("div",null,c.a.createElement("h2",null,"Find contacts by name"),c.a.createElement("input",{id:"filter",onChange:function(){return t.findContactByName()}}))}}]),n}(a.Component),p=function(t){return c.a.createElement("ul",null,t.contacts.map((function(e){return c.a.createElement("li",null,e.name,": ",e.number,c.a.createElement("button",{onClick:function(){return t.deleteContact(e.id)}}," delete "))})))},b=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:d()(),name:"Rosie Simpson",number:"459-12-56"},{id:d()(),name:"Hermione Kline",number:"443-89-12"},{id:d()(),name:"Eden Clements",number:"645-17-79"},{id:d()(),name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.contacts=t.state.contacts,t.updateContacts=function(e){t.contacts=e,t.setState({contacts:e})},t.setDefaultContacts=function(){t.setState({contacts:t.contacts})},t.showFilteredContacts=function(e){t.setState({contacts:e})},t.deleteContact=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e}))}),t.contacts=t.state.contacts},t}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(h,{updateContacts:this.updateContacts,contacts:this.state.contacts}),c.a.createElement("h1",null,"Contacts"),c.a.createElement(f,{setDefaultContacts:this.setDefaultContacts,showFilteredContacts:this.showFilteredContacts,contacts:this.contacts}),c.a.createElement(p,{contacts:this.state.contacts,deleteContact:this.deleteContact}))}}]),n}(a.Component),C=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n(19)}},[[8,1,2]]]);
//# sourceMappingURL=main.63711809.chunk.js.map