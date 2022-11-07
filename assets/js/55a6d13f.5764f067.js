"use strict";(self.webpackChunkdocusaurus_openapi_docs=self.webpackChunkdocusaurus_openapi_docs||[]).push([[5557],{11172:function(e,t,s){s.r(t),s.d(t,{assets:function(){return y},contentTitle:function(){return g},default:function(){return f},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return w}});var o=s(83117),a=s(80102),n=(s(67294),s(3905)),r=s(26389),i=s(94891),p=s(74933),l=s(47507),d=(s(24310),s(63303)),c=(s(75035),s(85162)),m=["components"],u={id:"login-user",title:"Logs user into the system",description:"",sidebar_label:"Logs user into the system",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"",operationId:"loginUser",parameters:[{name:"username",in:"query",description:"The user name for login",required:!0,schema:{type:"string"}},{name:"password",in:"query",description:"The password for login in clear text",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",headers:{"X-Rate-Limit":{description:"calls per hour allowed by the user",schema:{type:"integer",format:"int32"}},"X-Expires-After":{description:"date in UTC when token expires",schema:{type:"string",format:"date-time"}}},content:{"application/json":{schema:{type:"string"},examples:{response:{value:"OK"}}},"application/xml":{schema:{type:"string"},examples:{response:{value:"<Message> OK </Message>"}}},"text/plain":{examples:{response:{value:"OK"}}}}},400:{description:"Invalid username/password supplied"}},method:"get",path:"/user/login",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Logs user into the system",description:{content:"",type:"text/plain"},url:{path:["user","login"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The user name for login",type:"text/plain"},key:"username",value:""},{disabled:!1,description:{content:"(Required) The password for login in clear text",type:"text/plain"},key:"password",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/petstore/swagger-petstore-yaml"},g=void 0,h={unversionedId:"petstore/login-user",id:"petstore/login-user",title:"Logs user into the system",description:"",source:"@site/docs/petstore/login-user.api.mdx",sourceDirName:"petstore",slug:"/petstore/login-user",permalink:"/new-docs-openapi/docs/petstore/login-user",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/petstore/login-user.api.mdx",tags:[],version:"current",frontMatter:{id:"login-user",title:"Logs user into the system",description:"",sidebar_label:"Logs user into the system",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"",operationId:"loginUser",parameters:[{name:"username",in:"query",description:"The user name for login",required:!0,schema:{type:"string"}},{name:"password",in:"query",description:"The password for login in clear text",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",headers:{"X-Rate-Limit":{description:"calls per hour allowed by the user",schema:{type:"integer",format:"int32"}},"X-Expires-After":{description:"date in UTC when token expires",schema:{type:"string",format:"date-time"}}},content:{"application/json":{schema:{type:"string"},examples:{response:{value:"OK"}}},"application/xml":{schema:{type:"string"},examples:{response:{value:"<Message> OK </Message>"}}},"text/plain":{examples:{response:{value:"OK"}}}}},400:{description:"Invalid username/password supplied"}},method:"get",path:"/user/login",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Logs user into the system",description:{content:"",type:"text/plain"},url:{path:["user","login"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The user name for login",type:"text/plain"},key:"username",value:""},{disabled:!1,description:{content:"(Required) The password for login in clear text",type:"text/plain"},key:"password",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/petstore/swagger-petstore-yaml"},sidebar:"openApiSidebar",previous:{title:"Creates list of users with given input list",permalink:"/new-docs-openapi/docs/petstore/create-users-with-list-input"},next:{title:"Logs out current logged in user session",permalink:"/new-docs-openapi/docs/petstore/logout-user"}},y={},w=[{value:"Logs user into the system",id:"logs-user-into-the-system",level:2}],b={toc:w};function f(e){var t=e.components,s=(0,a.Z)(e,m);return(0,n.kt)("wrapper",(0,o.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"logs-user-into-the-system"},"Logs user into the system"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(p.Z,{className:"paramsItem",param:{name:"username",in:"query",description:"The user name for login",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(p.Z,{className:"paramsItem",param:{name:"password",in:"query",description:"The password for login in clear text",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Response Headers")),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"X-Rate-Limit"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null,(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"calls per hour allowed by the user")))),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"X-Expires-After"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null,(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"date in UTC when token expires")))))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string")))))),(0,n.kt)(c.Z,{label:"Response",value:"Response",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:"OK",language:"json",mdxType:"ResponseSamples"})))),(0,n.kt)(c.Z,{label:"application/xml",value:"application/xml",mdxType:"TabItem"},(0,n.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string")))))),(0,n.kt)(c.Z,{label:"Response",value:"Response",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:"<Message> OK </Message>",language:"xml",mdxType:"ResponseSamples"})))),(0,n.kt)(c.Z,{label:"text/plain",value:"text/plain",mdxType:"TabItem"},(0,n.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Response",value:"Response",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:"OK",language:"shell",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Invalid username/password supplied")),(0,n.kt)("div",null)))))}f.isMDXComponent=!0}}]);