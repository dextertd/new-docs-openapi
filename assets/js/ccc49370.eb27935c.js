"use strict";(self.webpackChunkdocusaurus_openapi_docs=self.webpackChunkdocusaurus_openapi_docs||[]).push([[6103],{65203:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var a=t(67294),r=t(34334),l=t(10833),i=t(35281),o=t(9460),c=t(39058),s=t(30390),u=t(83117),m=t(95999),d=t(32244);function v(e){var n=e.nextItem,t=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},t&&a.createElement(d.Z,(0,u.Z)({},t,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),n&&a.createElement(d.Z,(0,u.Z)({},n,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){var e,n=(0,o.C)(),t=n.assets,r=n.metadata,i=r.title,c=r.description,s=r.date,u=r.tags,m=r.authors,d=r.frontMatter,v=d.keywords,f=null!=(e=t.image)?e:d.image;return a.createElement(l.d,{title:i,description:c,keywords:v,image:f},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),m.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:m.map((function(e){return e.url})).filter(Boolean).join(",")}),u.length>0&&a.createElement("meta",{property:"article:tag",content:u.map((function(e){return e.label})).join(",")}))}var g=t(39407);function p(e){var n=e.sidebar,t=e.children,r=(0,o.C)(),l=r.metadata,i=r.toc,u=l.nextItem,m=l.prevItem,d=l.frontMatter,f=d.hide_table_of_contents,p=d.toc_min_heading_level,h=d.toc_max_heading_level;return a.createElement(c.Z,{sidebar:n,toc:!f&&i.length>0?a.createElement(g.Z,{toc:i,minHeadingLevel:p,maxHeadingLevel:h}):void 0},a.createElement(s.Z,null,t),(u||m)&&a.createElement(v,{nextItem:u,prevItem:m}))}function h(e){var n=e.content;return a.createElement(o.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},a.createElement(f,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(n,null))))}},39407:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(83117),r=t(80102),l=t(67294),i=t(34334),o=t(38011),c="tableOfContents_bqdL",s=["className"];function u(e){var n=e.className,t=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",n)},l.createElement(o.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},38011:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(83117),r=t(80102),l=t(67294),i=t(86668),o=t(39665),c=t(96841);function s(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}var u=l.memo(s),m=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function d(e){var n=e.toc,t=e.className,s=void 0===t?"table-of-contents table-of-contents__left-border":t,d=e.linkClassName,v=void 0===d?"table-of-contents__link":d,f=e.linkActiveClassName,g=void 0===f?void 0:f,p=e.minHeadingLevel,h=e.maxHeadingLevel,b=(0,r.Z)(e,m),L=(0,i.L)(),E=null!=p?p:L.tableOfContents.minHeadingLevel,H=null!=h?h:L.tableOfContents.maxHeadingLevel,N=(0,o.b)({toc:n,minHeadingLevel:E,maxHeadingLevel:H}),x=(0,l.useMemo)((function(){if(v&&g)return{linkClassName:v,linkActiveClassName:g,minHeadingLevel:E,maxHeadingLevel:H}}),[v,g,E,H]);return(0,c.S)(x),l.createElement(u,(0,a.Z)({toc:N,className:s,linkClassName:v},b))}},96841:function(e,n,t){t.d(n,{S:function(){return c}});var a=t(67294),r=t(86668);function l(e){var n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function i(e,n){var t,a,r=n.anchorTopOffset,i=e.find((function(e){return l(e).top>=r}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(t=e[e.length-1])?t:null}function o(){var e=(0,a.useRef)(0),n=(0,r.L)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function c(e){var n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],r=n;r<=t;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=i(c,{anchorTopOffset:t.current}),u=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}},39665:function(e,n,t){t.d(n,{a:function(){return o},b:function(){return s}});var a=t(80102),r=t(67294),l=["parentIndex"];function i(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,a.Z)(e,l);t>=0?n[t].children.push(i):r.push(i)})),r}function o(e){return(0,r.useMemo)((function(){return i(e)}),[e])}function c(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function s(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return c({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}}}]);