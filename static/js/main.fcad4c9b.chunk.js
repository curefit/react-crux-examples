(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{212:function(e,t,a){e.exports=a(472)},217:function(e,t,a){},468:function(e,t,a){},472:function(e,t,a){"use strict";a.r(t);var l=a(1),i=a.n(l),d=a(5),n=a.n(d),r=(a(217),a(62)),o=a(8),s=a(9),c=a(11),p=a(10),m=a(12),y=a(7),E=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{color:"#999",padding:20}},i.a.createElement("i",null,"Note: The example page is not tied to a API server. So all create, edit and delete calls will fail. For your development please make sure your server is listening to /models"))}}]),t}(l.Component),u={modelName:"employees",title:"All Employees",creationTitle:"Employee",editModal:!0,fields:[{title:"Name",field:"name",editable:!0,representative:!0,display:!0},{title:"Age",editable:!0,display:!0,field:"age"},{title:"Email Address",field:"emailAddress",editable:!0,display:!0}],createModal:!0},b=y.CruxComponentCreator.create(u),f=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{padding:20}},i.a.createElement("div",{style:{display:"flex",padding:20,borderBottom:"1px solid #EEE"}},i.a.createElement("div",{style:{width:500}},i.a.createElement(b,null)),i.a.createElement("pre",null,JSON.stringify(u,null,2))),i.a.createElement(E,null))}}]),t}(l.Component),g={modelName:"employees",title:"Employees",creationTitle:"Employee",editModal:!0,fields:[{title:"Name",field:"name",editable:!0,representative:!0,display:!0},{title:"Age",editable:!0,display:!0,field:"age"},{title:"Email Address",field:"emailAddress",editable:!0,display:!0},{title:"Gender",field:"gender",editable:!0,display:!0,type:"select",foreign:{modelName:"genders",key:"id",title:"displayName"}}],createModal:!0},h=y.CruxComponentCreator.create(g),O=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{padding:20}},i.a.createElement("div",{style:{display:"flex",padding:20,borderBottom:"1px solid #EEE"}},i.a.createElement("div",{style:{width:500}},i.a.createElement(h,null)),i.a.createElement("pre",null,JSON.stringify(g,null,2))),i.a.createElement(E,null))}}]),t}(l.Component),v={modelName:"employees",title:"Employees (Creation Disabled)",creationTitle:"Employee",editModal:!0,fields:[{title:"Name",field:"name",editable:!0,representative:!0,display:!0},{title:"Age",editable:!0,display:!0,field:"age"},{title:"Email Address",field:"emailAddress",editable:!0,display:!0}],createModal:!1},N=y.CruxComponentCreator.create(v),C={modelName:"employees",title:"Employees (Edit Disabled)",creationTitle:"Employee",editModal:!1,fields:[{title:"Name",field:"name",editable:!0,representative:!0,display:!0},{title:"Age",editable:!0,display:!0,field:"age"},{title:"Email Address",field:"emailAddress",editable:!0,display:!0}],createModal:!0},I=y.CruxComponentCreator.create(C),T={modelName:"employees",title:"Employees (Hide Columns)",creationTitle:"Employee",editModal:!0,fields:[{title:"Name",field:"name",editable:!0,representative:!0,display:!0},{title:"Age",editable:!0,display:!0,field:"age"},{title:"Email Address",field:"emailAddress",editable:!0,display:!1}],createModal:!0},j=y.CruxComponentCreator.create(T),x={modelName:"employees",title:"Employees (Selective Edits)",creationTitle:"Employee",editModal:!0,fields:[{title:"Name",field:"name",editable:!1,representative:!0,display:!0},{title:"Age",editable:!0,display:!0,field:"age"},{title:"Email Address",field:"emailAddress",editable:!0,display:!0}],createModal:!1},A=y.CruxComponentCreator.create(x),M=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{padding:20}},i.a.createElement("div",{style:{display:"flex",padding:20,borderBottom:"1px solid #EEE"}},i.a.createElement("div",{style:{width:500}},i.a.createElement(N,null)),i.a.createElement("pre",null,JSON.stringify(v,null,2))),i.a.createElement("div",{style:{display:"flex",padding:20,borderBottom:"1px solid #EEE"}},i.a.createElement("div",{style:{width:500}},i.a.createElement(I,null)),i.a.createElement("pre",null,JSON.stringify(C,null,2))),i.a.createElement("div",{style:{display:"flex",padding:20,borderBottom:"1px solid #EEE"}},i.a.createElement("div",{style:{width:500}},i.a.createElement(j,null)),i.a.createElement("pre",null,JSON.stringify(T,null,2))),i.a.createElement("div",{style:{display:"flex",padding:20,borderBottom:"1px solid #EEE"}},i.a.createElement("div",{style:{width:500}},i.a.createElement(A,null)),i.a.createElement("pre",null,JSON.stringify(x,null,2))),i.a.createElement(E,null))}}]),t}(l.Component),R={modelName:"employees",title:"Employees with list of free-form Tags",creationTitle:"Employee",editModal:!0,fields:[{title:"Name",field:"name",editable:!0,representative:!0,display:!0},{title:"Age",editable:!0,display:!0,field:"age"},{title:"Tags",editable:!0,display:!0,field:"tags",type:"iterable",iterabletype:{title:"Tag"}}],createModal:!0},w=y.CruxComponentCreator.create(R),S=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{padding:20}},i.a.createElement("div",{style:{display:"flex",padding:20,borderBottom:"1px solid #EEE"}},i.a.createElement("div",{style:{width:500}},i.a.createElement(w,null)),i.a.createElement("pre",null,JSON.stringify(R,null,2))),i.a.createElement(E,null))}}]),t}(l.Component),L={modelName:"employees",title:"Employees with list of free-form Tags",creationTitle:"Employee",editModal:!0,fields:[{title:"Name",field:"name",editable:!0,representative:!0,display:!0},{title:"Address",editable:!0,display:!0,field:"address",type:"nested",fields:[{title:"Address Type",field:"type",display:!0,editable:!0,type:"select",foreign:{modelName:"addressTypes",key:"typeId",title:"displayName"}},{title:"Address Line 1",field:"addressLine1",display:!0,editable:!0},{title:"Address Type",field:"addressLine2",display:!0,editable:!0},{title:"City",field:"city",display:!0,editable:!0},{title:"ZipCode",field:"zipcode",display:!0,editable:!0,type:"tinyinput"}]}],createModal:!0},k=y.CruxComponentCreator.create(L),D=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{padding:20}},i.a.createElement("div",{style:{display:"flex",padding:20,borderBottom:"1px solid #EEE"}},i.a.createElement("div",{style:{width:500}},i.a.createElement(k,null)),i.a.createElement("pre",null,JSON.stringify(L,null,2))),i.a.createElement(E,null))}}]),t}(l.Component),_=a(476),B=a(478),W=a(477),J=a(475),P=a(60),Z=(a(468),{modelName:"employees",title:"Employees with list of enumerable roles",creationTitle:"Employee",editModal:!0,fields:[{title:"Name",field:"name",editable:!0,representative:!0,display:!0},{title:"Age",editable:!0,display:!0,field:"age"},{title:"Roles",editable:!0,display:!0,field:"roles",type:"iterable",iterabletype:{title:"Role",type:"select",foreign:{modelName:"roles",key:"roleId",title:"roleName"}}}],createModal:!0}),G=y.CruxComponentCreator.create(Z),H=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{padding:20}},i.a.createElement("div",{style:{display:"flex",padding:20,borderBottom:"1px solid #EEE"}},i.a.createElement("div",{style:{width:500}},i.a.createElement(G,null)),i.a.createElement("pre",null,JSON.stringify(Z,null,2))),i.a.createElement(E,null))}}]),t}(l.Component),F={modelName:"employees",title:"Employees with Work Experience",creationTitle:"Employee",editModal:!0,fields:[{title:"Name",field:"name",editable:!0,representative:!0,display:!0},{title:"Past Experience",editable:!0,display:!0,field:"history",type:"iterable",iterabletype:{title:"Company",type:"nested",fields:[{title:"Company Name",field:"companyName",display:!0,editable:!0},{title:"Duration",field:"duration",display:!0,editable:!0,type:"nested",fields:[{title:"Number",field:"number",display:!0,editable:!0},{title:"Months/Years",field:"durationType",display:!0,editable:!0,type:"select",foreign:{modelName:"durationTypes",key:"typeId",title:"displayName"}}]}]}}],createModal:!0},U=y.CruxComponentCreator.create(F),V=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{padding:20}},i.a.createElement("div",{style:{display:"flex",padding:20,borderBottom:"1px solid #EEE"}},i.a.createElement("div",{style:{width:500}},i.a.createElement(U,null)),i.a.createElement("pre",null,JSON.stringify(F,null,2))),i.a.createElement(E,null))}}]),t}(l.Component),Y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(_.a,null,i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.a.createElement("div",{style:{flexDirection:"column",width:200,padding:20,color:"white",zIndex:2,position:"fixed",backgroundColor:"#333",height:"100%"}},i.a.createElement("div",{style:{fontWeight:"bold",display:"flex",justifyContent:"center"}},"React CRUX Examples"),i.a.createElement("div",{style:{height:20}}),i.a.createElement("div",{style:{height:40,paddingLeft:4}},i.a.createElement(J.a,{to:"/"},"Simple Table + Form")),i.a.createElement("div",{style:{height:40,paddingLeft:4}},i.a.createElement(J.a,{to:"/options"},"Edit, Create Options")),i.a.createElement("div",{style:{height:40,paddingLeft:4}},i.a.createElement(J.a,{to:"/multi"},"Multiple Components")),i.a.createElement("div",{style:{height:40,paddingLeft:4}},i.a.createElement(J.a,{to:"/select"},"Select")),i.a.createElement("div",{style:{height:40,paddingLeft:4}},i.a.createElement(J.a,{to:"/iterable"},"Iterable")),i.a.createElement("div",{style:{height:40,paddingLeft:4}},i.a.createElement(J.a,{to:"/iterableofselect"},"Iterable of Select")),i.a.createElement("div",{style:{height:40,paddingLeft:4}},i.a.createElement(J.a,{to:"/nested"},"Nested")),i.a.createElement("div",{style:{height:40,paddingLeft:4}},i.a.createElement(J.a,{to:"/iterableofnested"},"Iterable of Nested"))),i.a.createElement("div",{style:{flexDirection:"column",flex:1,marginLeft:200}},i.a.createElement(B.a,null,i.a.createElement(W.a,{path:"/",exact:!0,component:f}),i.a.createElement(W.a,{path:"/options",exact:!0,component:M}),i.a.createElement(W.a,{path:"/select",component:O}),i.a.createElement(W.a,{path:"/iterable",component:S}),i.a.createElement(W.a,{path:"/nested",component:D}),i.a.createElement(W.a,{path:"/iterableofselect",component:H}),i.a.createElement(W.a,{path:"/iterableofnested",component:V})))))}}]),t}(l.Component);var z=Object(P.connect)(function(e){return Object(r.a)({},e)},function(e){return{}})(Y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(52),Q=a(209),q=a(210);var X={mediaTypes:[{typeId:"IMAGE",title:"Image"},{typeId:"VIDEO",title:"Video"}],partTypes:[{typeId:"RUNNING",title:"Running"},{typeId:"MOBILITY",title:"Mobility"},{typeId:"GROUP_WORKOUT",title:"Group Workout"},{typeId:"STRETCH",title:"Stretch"},{typeId:"COOLDOWN",title:"Cool Down"},{typeId:"WATER_BREAK",title:"Water Break"},{typeId:"MOBILIZER",title:"Mobilizer"},{typeId:"ZMR",title:"ZMR"}],groupWorkoutTypes:[{typeId:"SINGLE",title:"Single"},{typeId:"SEQUENTIAL",title:"Compound - Sequential"},{typeId:"PARALLEL",title:"Compound - Parallel",display:"In Parallel"},{typeId:"STATION",title:"Compound - Station Based",display:"Station Based"},{typeId:"PARTNER",title:"Compound - Partner Based",display:"Partner Based"}],timeUnits:[{typeId:"MINS",title:"minutes"},{typeId:"SECONDS",title:"seconds"}],genders:[{id:"MALE",displayName:"Male"},{id:"FEMALE",displayName:"Female"},{id:"OTHER",displayName:"Other"}],bodyParts:[{_id:"5b06a80642e13c066120aed5",title:"Triceps",typeId:"5b06a7ee42e13c066120aed4",__v:0,updatedDate:"2018-05-24T11:54:46.937Z",createdDate:"2018-05-24T11:54:46.937Z",version:1,tags:[]},{_id:"5b07b06c42e13c066120aee3",title:"Delts",typeId:"5b06a7ee42e13c066120aed4",__v:0,updatedDate:"2018-05-25T06:42:52.858Z",createdDate:"2018-05-25T06:42:52.858Z",version:1,tags:[]},{_id:"5b07b08cc3947d289fc4ab52",title:"Hamstrings ",typeId:"5b06a7ee42e13c066120aed4",__v:0,updatedDate:"2018-05-25T06:43:24.631Z",createdDate:"2018-05-25T06:43:24.631Z",version:1,tags:[]},{_id:"5b07b0a2c3947d289fc4ab53",title:"Inner Chest",typeId:"5b06a7ee42e13c066120aed4",__v:0,updatedDate:"2018-05-25T06:43:46.248Z",createdDate:"2018-05-25T06:43:46.248Z",version:1,tags:[]},{_id:"5b07b1a6c3947d289fc4ab5a",title:"Quads",typeId:"5b06a7ee42e13c066120aed4",__v:0,updatedDate:"2018-05-25T06:48:06.768Z",createdDate:"2018-05-25T06:48:06.768Z",version:1,tags:[]}],bodyPartTypes:[{_id:"5a1ea8a65e32122591374b6e",title:"Bone",tags:[]},{_id:"5b06a7ee42e13c066120aed4",title:"Muscle",tags:[]}],bodyPartTagss:[],employees:[{name:"John Doe",age:"31",emailAddress:"johndoe@cruxcomponent.com",gender:"MALE",tags:["Tag1","Tag2","Tag3"],roles:["OWNER","MANAGER"]},{name:"John Hancock",age:"16",emailAddress:"johnhancock@cruxcomponent.com",tags:["Tag2"],roles:["VIEWER","EDITOR"]},{name:"Jane Doe",age:"42",emailAddress:"janedoe@cruxcomponent.com",gender:"FEMALE",roles:["VIEWER"]},{name:"Ankit Gupta",age:"33",emailAddress:"ankit.gupta@cruxcomponent.com",gender:"MALE",tags:["Tag4","Tag4"]}],durationTypes:[{typeId:"MONTH",displayName:"Months"},{typeId:"YEAR",displayName:"Years"}],roles:[{roleId:"OWNER",roleName:"Owner"},{roleId:"MANAGER",roleName:"Manager"},{roleId:"VIEWER",roleName:"Viewer"},{roleId:"EDITOR",roleName:"Editor"},{roleId:"REVIEWER",roleName:"Reviewer"}],addressTypes:[{typeId:"HOME",displayName:"Home"},{typeId:"OFFICE",displayName:"Office"},{typeId:"OTHER",displayName:"Other"}]},$=Object(K.c)({crux:Object(y.CruxReducerFactory)(X),user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"USER_LOGOUT"===t.type||t.type,"FETCH_USER_COMPLETED"===t.type?Object(r.a)({},e,t.myDetails):Object(r.a)({},e)}}),ee=Object(K.d)($,Object(K.a)(q.a,Object(Q.createLogger)()));n.a.render(i.a.createElement(function(){return i.a.createElement(P.Provider,{store:ee},i.a.createElement(z,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[212,2,1]]]);
//# sourceMappingURL=main.fcad4c9b.chunk.js.map