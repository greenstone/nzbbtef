(this["webpackJsonpnzbbtef-prototype"]=this["webpackJsonpnzbbtef-prototype"]||[]).push([[0],{10:function(e,a,t){e.exports=t.p+"static/media/logo.9e343206.svg"},12:function(e,a,t){e.exports=t(19)},17:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),o=t.n(r),c=(t(17),t(3)),s=t(4),i=t(6),u=t(5),m=t(2),d=t(7),p=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).handleChange=t.handleChange.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"handleChange",value:function(e){this.props.onFieldChange(e.target.value)}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"nzbbtef"},"Band Combo (NZBBTEF)"),l.a.createElement("input",{className:"form-control",id:"nzbbtef",type:"text",name:"nzbbtef",value:this.props.value,onChange:this.handleChange})))}}]),a}(n.Component),b=(t(18),function(e){var a=e.token;return l.a.createElement("div",{className:"col-sm-auto my-1"},l.a.createElement("div",{className:"card ".concat(a.type)},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"token"},a.colour?l.a.createElement("div",{className:"colour"},a.colour.label," ",l.a.createElement("div",{className:"sample",style:{background:a.colour.value}})):l.a.createElement("div",{className:"value text-monospace"},l.a.createElement("strong",null,a.value)),l.a.createElement("div",{className:"metadata"},l.a.createElement("small",null,a.type,a.col&&" (".concat(a.col,")")))),a.tokens&&l.a.createElement(v,{tokens:a.tokens}))))}),v=function(e){var a=e.tokens;return l.a.createElement("div",{className:"form-row my-n1"},a.map((function(e){return"WS"!==e.type&&l.a.createElement(b,{token:e,key:e.key||"".concat(e.line,":").concat(e.col)})})))},E=v,h=t(11),f=function(e){var a=e.validator;return l.a.createElement("div",{className:"col-sm-auto my-1"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("span",{className:"mr-2"},a.label),a.validator?l.a.createElement("span",{className:"badge badge-pill badge-success"},"Yes"):l.a.createElement("span",{className:"badge badge-pill badge-danger"},"No"))))},g=function(e){var a=e.validators;return l.a.createElement("div",{className:"form-row my-n1"},Object.entries(a).map((function(e){var a=Object(h.a)(e,2),t=a[0],n=a[1];return l.a.createElement(f,{key:t,validator:n})})))},N={Metal:"M",Uncoloured:"M","Pale Orange":"PO","Neon Orange":"NO","Fluoro Orange":"NO","Pale Pink":"PP","Neon Pink":"NP","Fluoro Pink":"NP","Hot Pink":"NP","Dark Pink":"CP","Pale Blue":"PB","Light Blue":"LB","Medium Blue":"B","Dark Blue":"DB","Neon Green":"NG","Fluoro Green":"NG","Light Green":"LG","Lime Green":"LG","Pale Green":"PG","Medium Green":"G","Dark Green":"DG","Light Purple":"LPu",Black:"K",Grey:"Gr",White:"W",Red:"R",Orange:"O",Yellow:"Y",Pink:"P",Crimson:"CP",Purple:"Pu",Blue:"B",Green:"G",Brown:"Br"},k={metal:"M",uncoloured:"M",paleorange:"PO",neonorange:"NO",fluoroorange:"NO",palepink:"PP",neonpink:"NP",fluoropink:"NP",hotpink:"NP",crimson:"CP",darkpink:"CP",lightpurple:"LPu",paleblue:"PB",lightblue:"LB",mediumblue:"B",darkblue:"DB",neongreen:"NG",fluorogreen:"NG",lightgreen:"LG",limegreen:"LG",palegreen:"PG",mediumgreen:"G",darkgreen:"DG",black:"K",grey:"Gr",white:"W",red:"R",orange:"O",yellow:"Y",pink:"P",purple:"Pu",blue:"B",green:"G",brown:"Br"},y=function(e,a){return Object.keys(a).reduce((function(e,t){return e.replace(new RegExp("\\b".concat(t,"\\b"),"gi"),a[t])}),e)},B=function(e){return y(y(e,N),k)},P=t(1),C=P.compile({symbol:{match:/\S+\son\s/,value:function(e){return e.match(/\S+/)[0]}},symbolColour:/^[a-zA-Z]+/,bandColour:/[a-zA-Z]+$/,WS:/[ \t]+/,error:P.error}),G=P.compile({bandColour:/^[a-zA-Z]+/,inscription:{match:/\(\S+\)/,value:function(e){return e.match(/[^()]+/)[0]}},error:P.error}),O=P.compile({symbolBand:/\w+\s\S+\son\s\w+/,partSeparator:/\/\//,bandSeparator:/\//,legSeparator:/-/,colouredIdBand:/[a-zA-Z]+\(\S+\)/,uncolouredIdBand:/\(\S+\)/,nullBand:/x/,colouredBand:/[a-zA-Z]+/,WS:/[ \t]+/,error:P.error}),w=function(e){return O.reset(e),Array.from(O).map((function(e){switch(e.type){case"symbolBand":C.reset(e.value);break;case"uncolouredIdBand":G.reset("M".concat(e.value));break;case"colouredIdBand":G.reset(e.value)}switch(e.type){case"symbolBand":return Object.assign({},e,{type:"tokenisedSymbolBand"},{tokens:Array.from(C)});case"uncolouredIdBand":case"colouredIdBand":return Object.assign({},e,{type:"tokenisedIdBand"},{tokens:Array.from(G)});default:return e}})).filter((function(e){return"WS"!==e.type}))},F={M:{label:"Metal",value:"linear-gradient(to right,#808080, #ddd, #808080)"},PO:{label:"Pale Orange",value:"#FFD03B"},NO:{label:"Neon Orange",value:"#FFB343"},PP:{label:"Pale Pink",value:"#FBC6B7"},NP:{label:"Neon Pink",value:"#FF4BF2"},LPu:{label:"Light Purple",value:"#AE5DFF"},PB:{label:"Pale Blue",value:"#9EC7F8"},LB:{label:"Light Blue",value:"#2B8FB3"},B:{label:"Medium Blue",value:"#2B8FB3"},DB:{label:"Dark Blue",value:"#0000D6"},NG:{label:"Neon Green",value:"#00FF00"},LG:{label:"Light Green",value:"#ABFE82"},PG:{label:"Pale Green",value:"#4DC350"},G:{label:"Medium Green",value:"#00A800"},DG:{label:"Dark Green",value:"#003A00"},K:{label:"Black",value:"#000000"},Gr:{label:"Grey",value:"#808080"},W:{label:"White",value:"#ffffff"},R:{label:"Red",value:"#DA0000"},O:{label:"Orange",value:"#FF6600"},Y:{label:"Yellow",value:"#F4EE00"},P:{label:"Pink",value:"#FE94FE"},CP:{label:"Crimson",value:"#CC044B"},Pu:{label:"Purple",value:"#9900CC"},Br:{label:"Brown",value:"#996633"}},S=function e(a){return a.map((function(a){var t=["symbolColour","bandColour","colouredBand"].includes(a.type);return Object.assign({},a,{isColourToken:t},t&&{colour:F[a.value]},a.tokens&&{tokens:e(a.tokens)})}))},j=function(e,a){return e.reduce((function(e,t){return t.includes(a)?e+=1:e}),0)},D=function(e){return e.filter((function(e){return e.type.includes("Separator")})).map((function(e){return e.type})).join(" ").trim()},L=function(e){return Object.values(e).reduce((function(e,a){return a.validator&&e}),!0)},z=function(e){return j(D(e).split(" "),"legSeparator")<=1},A=function(e){return D(e).split("legSeparator").reduce((function(e,a){return j(a.split(" "),"partSeparator")<=1&&e}),!0)},M=function e(a){return a.reduce((function(a,t){var n=Object.assign({},t.tokens&&{areChildrenValid:{validator:e(t.tokens)}},t.isColourToken&&{validColour:{validator:void 0!==t.colour}},{validPredecessors:{validator:a}});return L(n)}),!0)},T=function(e){var a={legSeparators:{label:"Leg separators valid?",validator:z(e)},partSeparators:{label:"Part separators valid?",validator:A(e)},colours:{label:"Colours valid?",validator:M(e)}};return{isValid:L(a),validators:a}},W=function(e){var a=e.findIndex((function(e){return"partSeparator"===e.type})),t=a>=0;return t&&e.splice(a,1),[{type:"tibia",key:"tibia",tokens:t?e.slice(0,a):[]},{type:"tarsus",key:"tarsus",tokens:t?e.slice(a,e.length):e}].filter((function(e){return e.tokens.length>0}))},I=function(e){return function(e){var a=e.findIndex((function(e){return"legSeparator"===e.type})),t=a>=0;return t&&e.splice(a,1),(t?[{type:"left",key:"left",tokens:e.slice(0,a)},{type:"right",key:"right",tokens:e.slice(a,e.length)}]:[{type:"unspecified",key:"unspecified",tokens:e}]).filter((function(e){return e.tokens.length>0}))}(e).map((function(e){return Object.assign({},e,{tokens:W(e.tokens)})}))},Z=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={nzbbtef:""},t.handleNZBBTEFChange=t.handleNZBBTEFChange.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"handleNZBBTEFChange",value:function(e){this.setState({nzbbtef:e})}},{key:"render",value:function(){var e=B(this.state.nzbbtef),a=w(e),t=S(a),n=T(t),r=n.isValid&&I(t);return l.a.createElement("div",{className:"nzbbtef"},l.a.createElement("section",{className:"sticky-top mb-5 py-3 bg-light"},l.a.createElement("div",{className:"container"},l.a.createElement(p,{onFieldChange:this.handleNZBBTEFChange,value:this.state.nzbbtef}))),l.a.createElement("div",{className:"container"},l.a.createElement("section",{className:"my-5"},l.a.createElement("h2",null,"1. Colour Transformation"),l.a.createElement("p",null,"The first step is to convert long colour names into short colour names.",l.a.createElement("br",null),"This is so that colours with one words (e.g. Dark Green) can be appropriately processed."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9 mb-3"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},e?l.a.createElement("samp",null,e):l.a.createElement("span",null,"No input specified")))),l.a.createElement("div",{className:"col-md-3 small"},l.a.createElement("ol",null,l.a.createElement("li",null,"Colours can be written as one or one words (Pale Blue or PaleBlue)"),l.a.createElement("li",null,"Colour names are case insensitive"),l.a.createElement("li",null,"Colour names do not feature elsewhere (e.g. as symbols or as inscriptions)"))))),l.a.createElement("section",{className:"my-5"},l.a.createElement("h2",null,"2. Tokenisation"),l.a.createElement("p",null,"The second step is to recognise the constituent parts in order to figure out the structure of the band combo."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9 mb-3"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},a&&a.length>0?l.a.createElement(E,{tokens:a}):l.a.createElement("span",null,"No input specified")))),l.a.createElement("div",{className:"col-md-3 small"},l.a.createElement("ol",null,l.a.createElement("li",null,"ID bands without a colour are designated as 'M' (metal)"),l.a.createElement("li",null,l.a.createElement("code",null,"WS")," tokens (whitespace) are removed"))))),l.a.createElement("section",{className:"my-5"},l.a.createElement("h2",null,"3. Get Colours"),l.a.createElement("p",null,"Match up the 'short colour' values with the corresponding CSS value."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9 mb-3"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},t&&t.length>0?l.a.createElement(E,{tokens:t}):l.a.createElement("span",null,"No input specified")))),l.a.createElement("div",{className:"col-md-3 small"},l.a.createElement("ol",null,l.a.createElement("li",null,"As colours have been standardised to 'short colours', simple lookups can be done to get CSS values"),l.a.createElement("li",null,"Invalid colours do not return a colour value"))))),l.a.createElement("section",{className:"my-5"},l.a.createElement("h2",null,"Validation"),l.a.createElement("p",null,"Run validations across entire band combo."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9 mb-3"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},n&&l.a.createElement(g,{validators:n.validators})))),l.a.createElement("div",{className:"col-md-3 small"}))),l.a.createElement("section",{className:"my-5"},l.a.createElement("h2",null,"Structure Creation"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9 mb-3"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},r&&r.length>0?l.a.createElement(E,{tokens:r}):l.a.createElement("span",null,"No valid input received")))),l.a.createElement("div",{className:"col-md-3 small"})))))}}]),a}(n.Component),x=t(10),R=t.n(x);var Y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"bg-light py-5"},l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:R.a,alt:"NZBBTEF",className:"mb-3"}),l.a.createElement("h1",null,"Prototype"),l.a.createElement("p",{className:"lead"},"New Zealand Bird Band Text Exchange Format"),l.a.createElement("ul",{className:"list-unstyled mb-0"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://gist.github.com/georgemoon/0c06e7ad0004ae9c47dd4ac0e1b425d5"},"Working Document")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/electricmagnetic/nzbbtef-prototype"},"Prototype Repository"))))),l.a.createElement("main",null,l.a.createElement(Z,null)),l.a.createElement("footer",{className:"bg-light py-5"},l.a.createElement("div",{className:"container"},l.a.createElement("p",null,"A project of ",l.a.createElement("a",{href:"https://electricmagnetic.net"},"ElectricMagnetic")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.2eed406e.chunk.js.map