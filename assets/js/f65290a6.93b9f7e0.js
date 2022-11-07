"use strict";(self.webpackChunkdocusaurus_openapi_docs=self.webpackChunkdocusaurus_openapi_docs||[]).push([[5035],{83426:function(e,t,o){o.r(t),o.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return g}});var s=o(83117),n=o(80102),a=(o(67294),o(3905)),i=o(26389),r=o(94891),p=(o(74933),o(47507)),c=(o(24310),o(63303)),d=(o(75035),o(85162)),u=["components"],l={id:"get-inventory",title:"Returns pet inventories by status",description:"Returns a map of status codes to quantities",sidebar_label:"Returns pet inventories by status",hide_title:!0,hide_table_of_contents:!0,api:{tags:["store"],description:"Returns a map of status codes to quantities",operationId:"getInventory",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",additionalProperties:{type:"integer",format:"int32"}}}}}},security:[{api_key:[]}],method:"get",path:"/store/inventory",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Returns pet inventories by status",description:{content:"Returns a map of status codes to quantities",type:"text/plain"},url:{path:["store","inventory"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"api_key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/petstore/swagger-petstore-yaml"},m=void 0,h={unversionedId:"petstore/get-inventory",id:"petstore/get-inventory",title:"Returns pet inventories by status",description:"Returns a map of status codes to quantities",source:"@site/docs/petstore/get-inventory.api.mdx",sourceDirName:"petstore",slug:"/petstore/get-inventory",permalink:"/docs/petstore/get-inventory",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/petstore/get-inventory.api.mdx",tags:[],version:"current",frontMatter:{id:"get-inventory",title:"Returns pet inventories by status",description:"Returns a map of status codes to quantities",sidebar_label:"Returns pet inventories by status",hide_title:!0,hide_table_of_contents:!0,api:{tags:["store"],description:"Returns a map of status codes to quantities",operationId:"getInventory",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",additionalProperties:{type:"integer",format:"int32"}}}}}},security:[{api_key:[]}],method:"get",path:"/store/inventory",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Returns pet inventories by status",description:{content:"Returns a map of status codes to quantities",type:"text/plain"},url:{path:["store","inventory"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"api_key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/petstore/swagger-petstore-yaml"},sidebar:"openApiSidebar",previous:{title:"Petstore Orders",permalink:"/docs/petstore/store"},next:{title:"Place an order for a pet",permalink:"/docs/petstore/place-order"}},y={},g=[{value:"Returns pet inventories by status",id:"returns-pet-inventories-by-status",level:2}],b={toc:g};function f(e){var t=e.components,o=(0,n.Z)(e,u);return(0,a.kt)("wrapper",(0,s.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"returns-pet-inventories-by-status"},"Returns pet inventories by status"),(0,a.kt)("p",null,"Returns a map of status codes to quantities"),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",null,(0,a.kt)("code",null,"property name*"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer")))))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);