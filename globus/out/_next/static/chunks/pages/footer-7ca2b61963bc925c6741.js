_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{YFqc:function(e,t,c){e.exports=c("cTJO")},cTJO:function(e,t,c){"use strict";var o=c("J4zp"),n=c("284h");t.__esModule=!0,t.default=void 0;var r,s=n(c("q1tI")),l=c("elyg"),i=c("nOHt"),a=new Map,d=window.IntersectionObserver,f={};var h=function(e,t){var c=r||(d?r=new d((function(e){e.forEach((function(e){if(a.has(e.target)){var t=a.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),a.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return c?(c.observe(e),a.set(e,t),function(){try{c.unobserve(e)}catch(t){console.error(t)}a.delete(e)}):function(){}};function j(e,t,c,o){(0,l.isLocalURL)(t)&&(e.prefetch(t,c,o).catch((function(e){0})),f[t+"%"+c]=!0)}var u=function(e){var t=!1!==e.prefetch,c=s.default.useState(),n=o(c,2),r=n[0],a=n[1],u=(0,i.useRouter)(),b=u&&u.pathname||"/",p=s.default.useMemo((function(){var t=(0,l.resolveHref)(b,e.href);return{href:t,as:e.as?(0,l.resolveHref)(b,e.as):t}}),[b,e.href,e.as]),v=p.href,x=p.as;s.default.useEffect((function(){if(t&&d&&r&&r.tagName&&(0,l.isLocalURL)(v)&&!f[v+"%"+x])return h(r,(function(){j(u,v,x)}))}),[t,r,v,x,u]);var m=e.children,O=e.replace,w=e.shallow,g=e.scroll;"string"===typeof m&&(m=s.default.createElement("a",null,m));var N=s.Children.only(m),y={ref:function(e){e&&a(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,c,o,n,r,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(c))&&(e.preventDefault(),null==s&&(s=o.indexOf("#")<0),t[n?"replace":"push"](c,o,{shallow:r}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,u,v,x,O,w,g)}};return t&&(y.onMouseEnter=function(e){(0,l.isLocalURL)(v)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),j(u,v,x,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(y.href=(0,l.addBasePath)(x)),s.default.cloneElement(N,y)};t.default=u},nI4o:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/footer",function(){return c("yYy+")}])},"yYy+":function(e,t,c){"use strict";c.r(t);var o=c("nKUr"),n=c("YFqc"),r=c.n(n);t.default=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"row footer-link",children:Object(o.jsxs)("ul",{className:"nav-ul",children:[Object(o.jsx)("li",{className:"col-md-3 nav-text footer-link-li",children:Object(o.jsx)(r.a,{href:"/",children:Object(o.jsx)("a",{style:{color:"white","text-decoration":"none"},children:"Home"})})}),Object(o.jsx)("li",{className:"col-md-3 nav-text footer-link-li",children:Object(o.jsx)(r.a,{href:"/about",children:Object(o.jsx)("a",{style:{color:"white","text-decoration":"none"},children:"About Us"})})}),Object(o.jsx)("li",{className:"col-md-3 nav-text footer-link-li",children:Object(o.jsx)(r.a,{href:"/services",children:Object(o.jsx)("a",{style:{color:"white","text-decoration":"none"},children:"Our Services"})})}),Object(o.jsx)("li",{className:"col-md-3 nav-text footer-link-li",children:Object(o.jsx)(r.a,{href:"/contact",children:Object(o.jsx)("a",{style:{color:"white","text-decoration":"none"},children:"Contact"})})})]})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-4",children:Object(o.jsx)(r.a,{href:"/",children:Object(o.jsx)("a",{className:"logo footer-logo display"})})}),Object(o.jsxs)("div",{className:"col-md-4",children:[Object(o.jsx)("h4",{className:"footer-contact-h1",children:"Contact Us"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("svg",{width:"1.5em",height:"2em",viewBox:"0 0 16 16",class:"bi bi-geo-alt location-pin",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("path",{"fill-rule":"evenodd",d:"M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"}),Object(o.jsx)("path",{"fill-rule":"evenodd",d:"M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})]}),Object(o.jsxs)("p",{className:"footer-our-address",children:["214 Tooting High Street,",Object(o.jsx)("br",{})," London, ",Object(o.jsx)("br",{}),"SW17 OSG"]})]}),Object(o.jsxs)("div",{className:"footer-contact-div",children:[Object(o.jsx)("svg",{width:"1.5em",height:"2em",viewBox:"0 0 16 16",class:"bi footer-phone-icon bi-telephone-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{"fill-rule":"evenodd",d:"M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"})}),Object(o.jsx)("p",{className:"footer-ph",children:"02087151292"})]})]}),Object(o.jsxs)("div",{className:"col-md-4",children:[Object(o.jsxs)("div",{className:"footer-time-div",children:[Object(o.jsx)("svg",{width:"1.5em",height:"2em",viewBox:"0 0 16 16",class:"bi bi-clock-fill location-pin ",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{"fill-rule":"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"})}),Object(o.jsx)("p",{className:"footer-our-address",children:"Mon-Fri:"}),Object(o.jsx)("p",{className:"footer-our-address",children:"10:00am - 5:00pm"})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("svg",{width:"1.5em",height:"2em",viewBox:"0 0 16 16",class:"bi bi-chat-dots location-pin",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("path",{"fill-rule":"evenodd",d:"M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"}),Object(o.jsx)("path",{d:"M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]}),Object(o.jsx)("p",{className:"footer-our-address",children:"globuscleaningservices@gmail.com"})]})]})]})]})}}},[["nI4o",0,1,2]]]);