"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),i=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,l=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,i=l,l=!0,o++):l&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=l,l=!1,s=!0):(s=r(c)===c&&n(c)!==c,i=l,l=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return q},L:function(){return g},M:function(){return x},P:function(){return E},S:function(){return D},_:function(){return i},a:function(){return l},b:function(){return d},g:function(){return m},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=i(e,u);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=i(e,h);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,f);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,l({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=i(e,v);return t?r.createElement(y,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(y,l({},e)),r.createElement("noscript",null,r.createElement(y,l({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],N=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:s().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],M=new Set;let I,R;const j=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:m,class:u,onStartLoad:p,onLoad:g,onError:h}=e,f=i(e,T);const{width:b,height:y,layout:w}=n,v=c(b,y,w),{style:E,className:x}=v,C=i(v,_),k=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(m=u);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,b,y);return(0,r.useEffect)((()=>{I||(I=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void M.add(N);if(R&&M.has(N))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;k.current&&(k.current.innerHTML=a(l({isLoading:!0,isLoaded:M.has(N),image:n},f)),M.has(N)||(t=requestAnimationFrame((()=>{k.current&&(r=i(k.current,N,M,s,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{M.has(N)&&R&&(k.current.innerHTML=R(l({isLoading:M.has(N),isLoaded:M.has(N),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},C,{style:l({},E,s,{backgroundColor:d}),className:x+(m?" "+m:""),ref:k,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));q.propTypes=L,q.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=i(t,O);return s&&console.warn(s),n?r.createElement(e,l({image:n},o)):(console.warn("Image not loaded",a),null)}}const F=z((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:u="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:b,objectPosition:y}=e,w=i(e,C);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=l({objectFit:b,objectPosition:y,backgroundColor:f},h);const{width:v,height:S,layout:L,images:T,placeholder:_,backgroundColor:M}=o,I=c(v,S,L),{style:R,className:j}=I,q=i(I,k),O={fallback:void 0,sources:[]};return T.fallback&&(O.fallback=l({},T.fallback,{srcSet:T.fallback.srcSet?N(T.fallback.srcSet):void 0})),T.sources&&(O.sources=T.sources.map((e=>l({},e,{srcSet:N(e.srcSet)})))),r.createElement(t,l({},q,{style:l({},R,s,{backgroundColor:f}),className:j+(a?" "+a:"")}),r.createElement(g,{layout:L,width:v,height:S},r.createElement(E,l({},m(_,!1,L,v,S,M,b,y))),r.createElement(x,l({"data-gatsby-image-ssr":"",className:p},w,d("eager"===u,!1,O,u,h)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),W={src:s().string.isRequired,alt:S,width:P,height:P,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};F.displayName="StaticImage",F.propTypes=W;const D=z(q);D.displayName="StaticImage",D.propTypes=W},3283:function(e,t,a){a.d(t,{z:function(){return s}});var r=a(7294),n=a(1883);function s(e){return"external"===e.type?r.createElement("a",{className:"button "+e.class,href:e.url,id:e.type},r.createElement("span",{className:"filter animate"}),r.createElement("span",{className:"label"},e.text),e.icon&&r.createElement("svg",{className:"ml-3 icon",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"12"},r.createElement("g",{fill:"none","fill-rule":"evenodd",stroke:"#000","stroke-linecap":"square","stroke-width":"1.2"},r.createElement("path",{d:"M1 5.891h11.21"}),r.createElement("path",{"stroke-linejoin":"bevel",d:"M7.69 1 13 6l-5.31 5"})))):"internal"===e.type?r.createElement(n.Link,{className:"button "+e.class,to:e.url,id:e.type},r.createElement("span",{className:"filter animate"}),r.createElement("span",{className:"label"},e.text),e.icon&&r.createElement("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"12"},r.createElement("g",{fill:"none","fill-rule":"evenodd",stroke:"#000","stroke-linecap":"square","stroke-width":"1.2"},r.createElement("path",{d:"M1 5.891h11.21"}),r.createElement("path",{"stroke-linejoin":"bevel",d:"M7.69 1 13 6l-5.31 5"})))):"trigger"===e.type?r.createElement("button",{className:"button "+e.class,id:e.type,onClick:e.onClick},r.createElement("span",{className:"filter animate"}),r.createElement("span",{className:"label"},e.text),e.icon&&r.createElement("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"12"},r.createElement("g",{fill:"none","fill-rule":"evenodd",stroke:"#000","stroke-linecap":"square","stroke-width":"1.2"},r.createElement("path",{d:"M1 5.891h11.21"}),r.createElement("path",{"stroke-linejoin":"bevel",d:"M7.69 1 13 6l-5.31 5"})))):void 0}},9502:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(7294),n=a(8032);const s=()=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 256 256"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 14.7C0 6.573 6.70714 0 15 0C23.2929 0 30 6.573 30 14.7C30 25.725 15 42 15 42C15 42 0 25.725 0 14.7ZM9.64286 14.7C9.64286 17.598 12.0429 19.95 15 19.95C17.9571 19.95 20.3571 17.598 20.3571 14.7C20.3571 11.802 17.9571 9.45 15 9.45C12.0429 9.45 9.64286 11.802 9.64286 14.7Z",fill:"#4700D4",transform:"scale(5.5)"})),l=()=>r.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M43.0859 14.2111C43.115 14.6125 43.115 15.0139 43.115 15.419C43.115 27.7633 33.209 42 15.0952 42V41.9926C9.7443 42 4.50457 40.5458 0 37.8045C0.778062 37.8933 1.56002 37.9377 2.34394 37.9395C6.77831 37.9432 11.0859 36.5317 14.5745 33.9325C10.3605 33.8568 6.6652 31.2501 5.37428 27.4451C6.85046 27.7152 8.37148 27.6597 9.82035 27.2842C5.22608 26.4036 1.92078 22.5744 1.92078 18.1273V18.0089C3.2897 18.7322 4.82243 19.1336 6.39025 19.178C2.06313 16.4346 0.729312 10.9738 3.34235 6.70423C8.34223 12.5406 15.7192 16.0887 23.6383 16.4642C22.8446 13.2195 23.9288 9.81943 26.4873 7.53853C30.4536 4.00155 36.6918 4.18284 40.4202 7.94365C42.6257 7.53113 44.7394 6.76342 46.6738 5.67569C45.9388 7.83821 44.4002 9.67514 42.3449 10.8424C44.2969 10.6241 46.204 10.1284 48 9.37176C46.6779 11.2512 45.0126 12.8884 43.0859 14.2111",fill:"black"})),i="Modular Summit is happening in Paris, France during ETHCC.",o="We believe in a positive-sum crypto ecosystem, free of maximalism. The Modular Summit invites founders and builders from all corners of the industry to blueprint the new modular ecosystem and the path to sovereign communities.",c="3 Rue Mazarine, 75006 <br/> Paris, France",d="https://goo.gl/maps/GDUyaaYci5UEEWX59",m="Join the official Modular Summit Telegram channel and follow the official Twitter account to connect with attendees and learn about the latest speaker announcements and get access to early bird tickets.",u={text:"Volunteer",class:"primary small",type:"external",url:"https://celestia-intake.typeform.com/to/g5SBXBOV"},p={twitter:"https://twitter.com/modular_summit"};var g=a(3283);function h(){return r.createElement("section",{className:"footer"},r.createElement("div",{className:"container"},r.createElement("div",{className:"details-section-bg"},r.createElement(n.S,{className:"w-full h-full",placeholder:"none",quality:100,alt:"",src:"../../images/sections/footer/footer-bg-image.png",__imageData:a(180)})),r.createElement("div",{className:"flex flex-wrap content"},r.createElement("div",{className:"basis-full lg:basis-9/12"},r.createElement("h2",{className:"mb-8 heading-xl"},i),r.createElement("p",{className:"text-xl mb-[50px] sm:mb-[70px]"},o),r.createElement("div",{className:"flex items-center space-x-4 md:space-x-6 mb-[50px] sm:mb-[60px]"},r.createElement("div",{className:"w-10 h-10"},r.createElement(s,null)),r.createElement("div",null,r.createElement("a",{href:d,className:"map-link",target:"_blank",rel:"noreferrer"},r.createElement("address",{className:"flex items-center address",dangerouslySetInnerHTML:{__html:c}})))),r.createElement("p",{className:"text"},m))),r.createElement("hr",{className:"border-#DFDFDF] my-[50px] sm:w-1/2 w-full"}),r.createElement("div",{className:"flex items-center space-x-8"},r.createElement("div",{className:"basis-auto"},r.createElement(g.z,{class:"button primary small",type:u.type,text:"Apply to speak",url:"https://celestia-intake.typeform.com/to/WYRfdoL4"})),r.createElement("div",{className:"basis-auto"},r.createElement("a",{className:"icon",href:p.twitter,target:"_blank",rel:"noreferrer noopener"},r.createElement(l,null))))))}var f=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("main",null,t)),r.createElement(h,null))}},180:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/38262768db81dcdee1c9e8bba8912b94/78036/footer-bg-image.png","srcSet":"/static/38262768db81dcdee1c9e8bba8912b94/eede4/footer-bg-image.png 361w,\\n/static/38262768db81dcdee1c9e8bba8912b94/c0f43/footer-bg-image.png 722w,\\n/static/38262768db81dcdee1c9e8bba8912b94/78036/footer-bg-image.png 1444w","sizes":"(min-width: 1444px) 1444px, 100vw"},"sources":[{"srcSet":"/static/38262768db81dcdee1c9e8bba8912b94/16492/footer-bg-image.webp 361w,\\n/static/38262768db81dcdee1c9e8bba8912b94/78980/footer-bg-image.webp 722w,\\n/static/38262768db81dcdee1c9e8bba8912b94/796d8/footer-bg-image.webp 1444w","type":"image/webp","sizes":"(min-width: 1444px) 1444px, 100vw"}]},"width":1444,"height":1560}')}}]);
//# sourceMappingURL=commons-db31fafc4b10bf672c5d.js.map