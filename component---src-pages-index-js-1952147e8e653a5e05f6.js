(self.webpackChunkcelestia_modular_summit=self.webpackChunkcelestia_modular_summit||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,c,l,m;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(m=e.entries();!(c=m.next()).done;)if(!o.has(c.value[0]))return!1;for(m=e.entries();!(c=m.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(m=e.entries();!(c=m.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],o[l[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function m(){c=e(l.map((function(e){return e.props}))),u.canUseDOM?t(c):r&&(c=r(c))}var u=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),m()},o.componentDidUpdate=function(){m()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),m()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(u,"canUseDOM",s),u}}},9687:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Me}});var n,a,i,o,s=r(7294),c=r(396),l=r(1721),m=r(1597),u=function(e){return s.createElement(m.StaticQuery,{query:"1803319986",render:function(t){var r=e.filename.match(/[^\\]*\.(\w+)$/)[1],n=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return n?"svg"===r||"gif"===r?s.createElement("img",{src:n.node.publicURL,alt:e.alt}):s.createElement(c.G,{alt:e.alt,image:n.node.childImageSharp.gatsbyImageData,imgStyle:{}}):null}})},p=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return s.createElement("div",{className:"member"},s.createElement("div",{className:"image mx-auto"},s.createElement("div",{className:"overlay"}),s.createElement(u,{alt:this.props.member.name,filename:this.props.member.image})),s.createElement("div",{className:"name"},this.props.member.name),s.createElement("div",{className:"company"},this.props.member.org),s.createElement("div",{className:"title"},this.props.member.title))},t}(s.Component),d=[{name:"Mustafa Al-Bassam",org:"Celestia Labs",title:"Co-founder, CEO",image:"members/MustafaAl-Bassam.png"},{name:"Uri Kolodny",org:"StarkWare",title:"Co-founder, CEO",image:"members/UriKolodny.png"},{name:"Zaki Manian",org:"Sommelier",title:"Co-founder",image:"members/ZakiManian.png"},{name:"Tarun Chitra",org:"Gauntlet",title:"Founder, CEO",image:"members/TarunChitra.png"},{name:"Anatoly Yakovenko",org:"Solana",title:"Co-founder",image:"members/AnatolyYakovenko.png"},{name:"Anurag Arjun",org:"Polygon Technology",title:"Co-founder",image:"members/AnuragAryun.png"},{name:"Alex Gluchowski",org:"Matter Labs",title:"Co-founder, CEO",image:"members/AlexGluchowski.png"},{name:"John Adler",org:"Celestia Labs",title:"Co-founder, CRO",image:"members/JohnAdler.png"},{name:"James Prestwich",org:"Nomad",title:"Founder, CTO",image:"members/JamesPrestwich.png"},{name:"Morgan Beller",org:"NfX",title:"General Partner",image:"members/MorganBeller.png"},{name:"Alex Evans",org:"Bain Capital Crypto",title:"Partner",image:"members/AlexEvans.png"},{name:"protolambda",org:"Optimism",title:"Researcher at Optimism",image:"members/Proto.png"},{name:"Balder Bomans",org:"Maven 11",title:"Managing Parter, CIO",image:"members/BalderBomans.png"},{name:"Sreeram Kannan",org:"University of Washington",title:"Associate Professor",image:"members/SreeramKannan.png"},{name:"Matt Garnett",org:"ConsenSys",title:"Researcher",image:"members/MattGarnett.png"},{name:"Ismail Khoffi",org:"Celestia Labs",title:"Co-founder, CTO",image:"members/IsmailKhoffi.png"},{name:"Ye Zhang",org:"Scroll Tech",title:"Co-Founder, Researcher",image:"members/YeZhang.png"},{name:"Eli Krenzke",org:"Polychain Capital",title:"Partner",image:"members/EliKrenzke.png"},{name:"Alex Obadia",org:"Flashbots",title:"Researcher, Steward",image:"members/AlexObadia.png"},{name:"Can Gurel",org:"Delphi Digital",title:"Research Analyst",image:"members/CanGurel.png"},{name:"Guillermo Angeris",org:"Bain Capital Crypto",title:"Research Partner",image:"members/Guille.png"},{name:"Louis Guthman",org:"StarkWare",title:"Ecosystem Lead",image:"members/LouisGuthman.png"},{name:"Will Nuelle",org:"Galaxy Digital",title:"Principle Investments",image:"members/WillNuelle.png"},{name:"Alex North",org:"Protocol Labs",title:"Software Engineer",image:"members/AlexNorth.png"},{name:"Marko Baricevic",org:"Interchain GmbH",title:"Product Owner of Cosmos SDK",image:"members/MarkoBaricevic.png"},{name:"Emily Herbert",org:"Fuel Labs",title:"Software Engineer",image:"members/EmilyHerbert.png"},{name:"Sean Braithwaite",org:"",title:"",image:"members/SeanBraithwaite.png"},{name:"Mathjis van Esch",org:"Maven 11",title:"Associate Partner",image:"members/Mathjis.png"},{name:"Eric Wall",org:"EricaDAO",title:"Blogger",image:"members/EricWall.png"}],f=[{name:"Delphi Digital",image:"projects/delphi-digital.svg"},{name:"Maven 11 Capital",image:"projects/maven11.svg"},{name:"Solana",image:"projects/solana.svg"},{name:"Scroll Tech",image:"projects/scroll.svg"},{name:"Starkware",image:"projects/starkware.svg"},{name:"Polygon",image:"projects/polygon.svg"},{name:"Polychain Capital",image:"projects/polychain-capital.svg"},{name:"Optimism",image:"projects/optimism.svg"},{name:"Nomad",image:"projects/nomad.svg"},{name:"NFX",image:"projects/nfx.svg"},{name:"Protocol Labs",image:"projects/protocol-labs.svg"},{name:"Galaxy Digital",image:"projects/galaxy-digital.svg"},{name:"Fuel",image:"projects/fuel.svg"},{name:"G",image:"projects/g.svg"},{name:"Interchain Foundation",image:"projects/interchain-foundation.svg"},{name:"Flashbots",image:"projects/flashbots.svg"},{name:"zkSync",image:"projects/zkSync.svg"},{name:"Celestia",image:"projects/celestia.svg"},{name:"Blockchain Capital",image:"projects/blockchain-capital.svg"}],g=[{name:"Starkware",image:"projects/starkware.svg"},{name:"Blockchain Capital",image:"projects/blockchain-capital.svg"},{name:"Delphi Digital",image:"projects/delphi-digital.svg"},{name:"Bain Capital",image:"projects/bain-capital.svg"}],h=[{title:"Intro to Modular Summit",time:"9:30 AM - 9:40 PM",speakers:"Balder Bomans"},{title:"Defining Modular Layers",time:"9:40 AM - 10:10 AM",speakers:"Mustafa Al-Bassam"},{title:"Small Pieces Loosely Joined",time:"10:10 AM - 10:40 AM",speakers:"Alex Evans"},{title:"Cosmos: The Modular Past and Future",time:"10:40 AM - 11:10 AM",speakers:"Zaki Manian"},{title:"L1s, L2s, L3s",time:"11:25 AM - 11:55 AM",speakers:"Uri Kolodny"},{title:"Scaling Execution: Zero Knowledge",time:"11:55 AM – 12:25pm",speakers:"Alex Gluchowski, Ye Zhang, Louis Guthman, Zaki Manian (moderator)"},{title:"MEV on Modular Blockchains",time:"12:25 PM – 1:00pm",speakers:"Tarun Chitra, Guillermo Angeris, Sean Braithwaite, Alex Obadia"},{type:"Break",title:"Lunch",time:"1 PM - 2 PM",speakers:""},{title:"Understanding Modularity: Rollup Security Paradigms",time:"2:10 PM - 2:40 PM",speakers:"Eric Wall"},{title:"Modular Design across the Blockchain Ecosystem",time:"2:40 PM - 3:10 PM",speakers:"Ismail Khoffi (moderator), Alex North , Marko Baricevic, James Prestwich"},{title:"Scaling Execution: Optimistic",time:"3:10 PM - 3:40 PM",speakers:"Can Gurel (moderator), Proto, John Adler, Emily Herbert"},{title:"Investing in the Modular Stack",time:"3:55 PM - 4:25 PM",speakers:"Aleks Larsen, Morgan Beller, Michael Jordan, Eli Krenzke, Mathijs van Esch"},{title:"The Data Availability Landscape",time:"4:25 PM - 4:55 PM",speakers:"Sreeram Kannan (moderator), John Adler, Anurag Arjun, Matt Garnett"},{title:"The Counter Thesis - Monolithic vs. Modular",time:"4:55 PM - 5:30 PM",speakers:" Tarun Chitra (mod), Mustafa Al-Bassam, Anatoly Yakovenko"},{type:"Break",title:"Networking Drinks",time:"5:30 PM",speakers:""}],b=function(e){return s.createElement(m.StaticQuery,{query:"1803319986",render:function(t){var r=e.filename.match(/[^\\]*\.(\w+)$/)[1],n=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return n?"svg"===r||"gif"===r?s.createElement("img",{src:n.node.publicURL,alt:e.alt}):s.createElement(c.G,{alt:e.alt,image:n.node.childImageSharp.gatsbyImageData,imgStyle:{}}):null}})},y=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return s.createElement("div",{className:"Break"===this.props.presentation.type?"presentation schedule-pause":0===this.props.index?"presentation first":"presentation"},s.createElement("div",{className:"inner"},s.createElement("div",{className:"row justify-content-between align-items-center"},s.createElement("div",{className:"col-auto"},s.createElement("div",{className:"title"},this.props.presentation.title),s.createElement("div",{className:"time"},this.props.presentation.time),s.createElement("div",{className:"speakers"},s.createElement("span",null,"Speakers: ")," ",this.props.presentation.speakers)))))},t}(s.Component),v=r(5697),E=r.n(v),A=r(4839),w=r.n(A),T=r(2993),C=r.n(T),S=r(6494),k=r.n(S),M="bodyAttributes",N="htmlAttributes",O="titleAttributes",j={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},P=(Object.keys(j).map((function(e){return j[e]})),"charset"),x="cssText",L="href",B="http-equiv",I="innerHTML",R="itemprop",D="name",G="property",U="rel",H="src",q="target",Y={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},K="defaultTitle",F="defer",z="encodeSpecialCharacters",W="onChangeClientState",_="titleTemplate",Z=Object.keys(Y).reduce((function(e,t){return e[Y[t]]=t,e}),{}),V=[j.NOSCRIPT,j.SCRIPT,j.STYLE],X="data-react-helmet",J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},$=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},te=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},re=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ne=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ae=function(e){var t=le(e,j.TITLE),r=le(e,_);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=le(e,K);return t||n||void 0},ie=function(e){return le(e,W)||function(){}},oe=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ee({},e,t)}),{})},se=function(e,t){return t.filter((function(e){return void 0!==e[j.BASE]})).map((function(e){return e[j.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},ce=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&fe("Helmet: "+e+' should be of type "Array". Instead found type "'+J(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||r===U&&"canonical"===e[r].toLowerCase()||c===U&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==I&&s!==x&&s!==R||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=k()({},n[s],a[s]);n[s]=c}return e}),[]).reverse()},le=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},me=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){me(e)}),0)}),ue=function(e){return clearTimeout(e)},pe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||me:r.g.requestAnimationFrame||me,de="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ue:r.g.cancelAnimationFrame||ue,fe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ge=null,he=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,m=e.styleTags,u=e.title,p=e.titleAttributes;ve(j.BODY,n),ve(j.HTML,a),ye(u,p);var d={baseTag:Ee(j.BASE,r),linkTags:Ee(j.LINK,i),metaTags:Ee(j.META,o),noscriptTags:Ee(j.NOSCRIPT,s),scriptTags:Ee(j.SCRIPT,l),styleTags:Ee(j.STYLE,m)},f={},g={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(f[e]=r),n.length&&(g[e]=d[e].oldTags)})),t&&t(),c(e,f,g)},be=function(e){return Array.isArray(e)?e.join(""):e},ye=function(e,t){void 0!==e&&document.title!==e&&(document.title=be(e)),ve(j.TITLE,t)},ve=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(X),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var m=i.indexOf(c);-1!==m&&i.splice(m,1)}for(var u=i.length-1;u>=0;u--)r.removeAttribute(i[u]);a.length===i.length?r.removeAttribute(X):r.getAttribute(X)!==o.join(",")&&r.setAttribute(X,o.join(","))}},Ee=function(e,t){var r=document.head||document.querySelector(j.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===I)r.innerHTML=t.innerHTML;else if(n===x)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(X,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},Ae=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},we=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Y[r]||r]=e[r],t}),t)},Te=function(e,t,r){switch(e){case j.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[X]=!0,a=we(r,n),[s.createElement(j.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=Ae(r),i=be(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+ne(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ne(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case M:case N:return{toComponent:function(){return we(t)},toString:function(){return Ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[X]=!0,n);return Object.keys(t).forEach((function(e){var r=Y[e]||e;if(r===I||r===x){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),s.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===I||e===x)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+ne(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===V.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},Ce=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,m=e.title,u=void 0===m?"":m,p=e.titleAttributes;return{base:Te(j.BASE,t,n),bodyAttributes:Te(M,r,n),htmlAttributes:Te(N,a,n),link:Te(j.LINK,i,n),meta:Te(j.META,o,n),noscript:Te(j.NOSCRIPT,s,n),script:Te(j.SCRIPT,c,n),style:Te(j.STYLE,l,n),title:Te(j.TITLE,{title:u,titleAttributes:p},n)}},Se=w()((function(e){return{baseTag:se([L,q],e),bodyAttributes:oe(M,e),defer:le(e,F),encode:le(e,z),htmlAttributes:oe(N,e),linkTags:ce(j.LINK,[U,L],e),metaTags:ce(j.META,[D,P,B,G,R],e),noscriptTags:ce(j.NOSCRIPT,[I],e),onChangeClientState:ie(e),scriptTags:ce(j.SCRIPT,[H,I],e),styleTags:ce(j.STYLE,[x],e),title:ae(e),titleAttributes:oe(O,e)}}),(function(e){ge&&de(ge),e.defer?ge=pe((function(){he(e,(function(){ge=null}))})):(he(e),ge=null)}),Ce)((function(){return null})),ke=(a=Se,o=i=function(e){function t(){return Q(this,t),re(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!C()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case j.SCRIPT:case j.NOSCRIPT:return{innerHTML:t};case j.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return ee({},n,((t={})[r.type]=[].concat(n[r.type]||[],[ee({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case j.TITLE:return ee({},a,((t={})[n.type]=o,t.titleAttributes=ee({},i),t));case j.BODY:return ee({},a,{bodyAttributes:ee({},i)});case j.HTML:return ee({},a,{htmlAttributes:ee({},i)})}return ee({},a,((r={})[n.type]=ee({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=ee({},t);return Object.keys(e).forEach((function(t){var n;r=ee({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Z[r]||r]=e[r],t}),t)}(te(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case j.LINK:case j.META:case j.NOSCRIPT:case j.SCRIPT:case j.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=te(e,["children"]),n=ee({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(a,n)},$(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(s.Component),i.propTypes={base:E().object,bodyAttributes:E().object,children:E().oneOfType([E().arrayOf(E().node),E().node]),defaultTitle:E().string,defer:E().bool,encodeSpecialCharacters:E().bool,htmlAttributes:E().object,link:E().arrayOf(E().object),meta:E().arrayOf(E().object),noscript:E().arrayOf(E().object),onChangeClientState:E().func,script:E().arrayOf(E().object),style:E().arrayOf(E().object),title:E().string,titleAttributes:E().object,titleTemplate:E().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=Ce({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ke.renderStatic=ke.rewind;var Me=function(){return s.createElement("main",null,s.createElement(ke,null,s.createElement("title",null,"The Modular Summit")),s.createElement("section",{className:"header-section"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row justify-content-end"},s.createElement("div",{className:"col-auto"},s.createElement("div",{className:"row justify-content-end"},s.createElement("div",{className:"col-auto pe-2 pe-md-5"},s.createElement("a",{href:"/#schedule"},"Schedule")),s.createElement("div",{className:"col-auto"},s.createElement("a",{href:"/#speakers"},"Speakers"))))))),s.createElement("section",{className:"hero-section mt-5 pb-5"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-12 col-lg-8 col-xl-6 hero-text"},s.createElement("h1",null,"The Modular Summit"),s.createElement("div",{className:"subtitle"},"Envision the modular future with us."),s.createElement("div",{className:"hosted"},"Hosted by Maven 11 and Celestia"),s.createElement("div",{className:"row"},s.createElement("div",{className:"col-12"},s.createElement("div",{className:"time-box"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-12 time"},"Thu, April 21, 2022  ",s.createElement("span",null,"•"),"  9:00 AM – 5:00 PM CEST")),s.createElement("div",{className:"row justify-content-between align-items-center"},s.createElement("div",{className:"col-12 col-md-auto"},"Het Sieraad BV., Amsterdam",s.createElement("br",null),"1 Postjesweg",s.createElement("br",null),"1057 DT Amsterdam",s.createElement("br",null),"Netherlands"),s.createElement("div",{className:"col-12 col-md-auto pt-4 pt-md-0"},s.createElement("div",{className:"row justify-content-center justify-content-md-end"},s.createElement("div",{className:"col-auto"},s.createElement("a",{href:"#",target:"_blank",rel:"noreferrer"},s.createElement("button",{className:"button-simple"},"Register"))),s.createElement("div",{className:"col-auto px-0"},s.createElement("a",{href:"https://goo.gl/maps/ivRUyv2ctvrHtUbq6",target:"_blank",rel:"noreferrer"},s.createElement("button",{className:"map-button","aria-label":"Map"})))))))))),s.createElement("div",{className:"col-12 col-lg-4 col-xl-6"},s.createElement("div",{className:"hero-image"},s.createElement(c.S,{src:"../images/hero-image.svg",alt:"The Modular Summit",width:625,height:541,placeholder:"blurred",__imageData:r(3585)})))))),s.createElement("section",{className:"sponsors-section pt-5 pb-5"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-12"},s.createElement("h4",{className:"text-center text-sm-start"},"Sponsors"))),s.createElement("div",{className:"row align-items-center"},g.map((function(e,t){return s.createElement("div",{className:"col col-12 col-sm-6 col-md-3 text-center py-4 px-md-4",key:t},s.createElement(b,{alt:e.name,filename:e.image}))}))))),s.createElement("section",{className:"speakers-section pt-5",id:"speakers"},s.createElement("div",{className:"container"},s.createElement("h2",{className:"with-decor"},"Speakers"),s.createElement("div",{className:"row team-members justify-content-center"},d.map((function(e,t){return s.createElement("div",{className:"col col-6 col-md-4 col-lg-3 col-xl-2 text-center",key:t},s.createElement(p,{member:e}))})),s.createElement("div",{className:"clear"})))),s.createElement("section",{className:"schedule-section pb-5",id:"schedule"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row justify-content-between align-items-center"},s.createElement("div",{className:"col-auto"},s.createElement("h2",{className:"with-decor"},"Schedule")),s.createElement("div",{className:"col-12 col-sm-auto pt-4 pt-sm-0"},s.createElement("button",{className:"button-simple w-100"},"Watch Livestream"))),s.createElement("div",{className:"row mt-5"},h.map((function(e,t){return s.createElement("div",{className:"col-12",key:t},s.createElement(y,{index:t,presentation:e}))}))))),s.createElement("section",{className:"projects-section py-5"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-12"},s.createElement("h4",null,"Featured projects"))),s.createElement("div",{className:"row mt-2 align-items-center"},f.map((function(e,t){return s.createElement("div",{className:"col-6 col-sm-4 col-md-3 col-lg-2 text-center p-4",key:t},s.createElement(b,{alt:e.name,filename:e.image}))}))))))}},3585:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAACEUlEQVQ4y6WUS2gTURSGqzsXLYgrH6C4UXHjQuhSEFeu3blQxI0LFVoEV9qdSG2wsW2MfRhbM32ZGGgjikRciDZaUURJayFoW4m0qbYjmczcO3M/mQlNGylONAcOXDjn/+7PPYdbV7dBvLZ0NSeLynJs1fZrXtXVEtHiAilrmYwskLMtESvmqQnYWciRMJdIC93LGWnw05EVUKC7amCTnqXX+E5GGiw6AqEUSqn/d6kZC3ySBQ+iaoWtxrIjyzBg0z8DjIsBii1BileCGOfbIBvzdeX2eZqrQYwLgUqN1HqwkxFkrA/nVRT1RvMFivs92OMRZPwPjdUTTqu0hno7WGoY6fXgbsP6qIDdCXt19X4INaGVNOMRnLQ2WVqDbMyzrD4MYbWHcB37OST7oKT5OIR1M4TreK249AgWk/A1jpPq9270BbqafBJmH+I8H0AO/kUjT0/xtHGBy1slnPy8a32tcLaV1axq4pNHckwf+4a2X6e53mHu+GxZaF7rwLoVwrzRCdMjMDPqD72+3aRvb4H2nSYvGhdJHc4zdugHVsdtnGcDOC+j2I/veU/jnv2X+tQ06swU747miO7TCe8p0LrDLK3URNRbEXcAor8beyziD+w/uMzwgRW6dhuc26Jo2bb2MTCf8IZAZhgr0IUc7avuHS812KKpQYoTmx3RXG+LMlB/IsgnBV/iQiTuio3EvwGOzeQZeKTaaAAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/683c9845a7fddf64235a121ccf9b7d09/42032/hero-image.svg","srcSet":"/static/683c9845a7fddf64235a121ccf9b7d09/700eb/hero-image.svg 156w,\\n/static/683c9845a7fddf64235a121ccf9b7d09/276fa/hero-image.svg 313w,\\n/static/683c9845a7fddf64235a121ccf9b7d09/42032/hero-image.svg 625w","sizes":"(min-width: 625px) 625px, 100vw"},"sources":[{"srcSet":"/static/683c9845a7fddf64235a121ccf9b7d09/d2b8d/hero-image.webp 156w,\\n/static/683c9845a7fddf64235a121ccf9b7d09/5413b/hero-image.webp 313w,\\n/static/683c9845a7fddf64235a121ccf9b7d09/99876/hero-image.webp 625w","type":"image/webp","sizes":"(min-width: 625px) 625px, 100vw"}]},"width":625,"height":541}')}}]);
//# sourceMappingURL=component---src-pages-index-js-1952147e8e653a5e05f6.js.map