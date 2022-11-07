"use strict";(self.webpackChunkdocusaurus_openapi_docs=self.webpackChunkdocusaurus_openapi_docs||[]).push([[6162],{86015:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return T},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return k}});var i=a(83117),r=a(80102),o=(a(67294),a(3905)),n=a(26389),s=a(94891),p=a(74933),l=a(47507),d=a(24310),m=a(63303),c=a(75035),u=a(85162),y=["components"],g={id:"get-pet-by-id",title:"Find pet by ID",description:"Returns a single pet",sidebar_label:"Find pet by ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pet"],description:"Returns a single pet",operationId:"getPetById",parameters:[{name:"petId",in:"path",description:"ID of pet to return",required:!0,deprecated:!0,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{title:"pet",type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},dog:{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},bee:{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"}}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}]}},xml:{name:"Pet"}}},"application/xml":{schema:{title:"pet",type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},dog:{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},bee:{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"}}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}]}},xml:{name:"Pet"}}}}},400:{description:"Invalid ID supplied"},404:{description:"Pet not found"}},security:[{api_key:[]}],method:"get",path:"/pet/{petId}",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Find pet by ID",description:{content:"Returns a single pet",type:"text/plain"},url:{path:["pet",":petId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of pet to return",type:"text/plain"},type:"any",value:"",key:"petId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"api_key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/petstore/swagger-petstore-yaml"},h=void 0,f={unversionedId:"petstore/get-pet-by-id",id:"petstore/get-pet-by-id",title:"Find pet by ID",description:"Returns a single pet",source:"@site/docs/petstore/get-pet-by-id.api.mdx",sourceDirName:"petstore",slug:"/petstore/get-pet-by-id",permalink:"/new-docs-openapi/docs/petstore/get-pet-by-id",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/petstore/get-pet-by-id.api.mdx",tags:[],version:"current",frontMatter:{id:"get-pet-by-id",title:"Find pet by ID",description:"Returns a single pet",sidebar_label:"Find pet by ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pet"],description:"Returns a single pet",operationId:"getPetById",parameters:[{name:"petId",in:"path",description:"ID of pet to return",required:!0,deprecated:!0,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{title:"pet",type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},dog:{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},bee:{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"}}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}]}},xml:{name:"Pet"}}},"application/xml":{schema:{title:"pet",type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},dog:{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},bee:{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"}}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}]}},xml:{name:"Pet"}}}}},400:{description:"Invalid ID supplied"},404:{description:"Pet not found"}},security:[{api_key:[]}],method:"get",path:"/pet/{petId}",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Find pet by ID",description:{content:"Returns a single pet",type:"text/plain"},url:{path:["pet",":petId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of pet to return",type:"text/plain"},type:"any",value:"",key:"petId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"api_key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/petstore/swagger-petstore-yaml"},sidebar:"openApiSidebar",previous:{title:"Update an existing pet",permalink:"/new-docs-openapi/docs/petstore/update-pet"},next:{title:"Updates a pet in the store with form data",permalink:"/new-docs-openapi/docs/petstore/update-pet-with-form"}},b={},k=[{value:"Find pet by ID",id:"find-pet-by-id",level:2}],v={toc:k};function T(e){var t=e.components,a=(0,r.Z)(e,y);return(0,o.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"find-pet-by-id"},"Find pet by ID"),(0,o.kt)("p",null,"Returns a single pet"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(p.Z,{className:"paramsItem",param:{name:"petId",in:"path",description:"ID of pet to return",required:!0,deprecated:!0,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(n.Z,{mdxType:"ApiTabs"},(0,o.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"successful operation")),(0,o.kt)("div",null,(0,o.kt)(s.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"category"),(0,o.kt)("span",{style:{opacity:"0.6"}}," Category")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Category ID",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Category name",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"sub"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Test Sub Category")),(0,o.kt)(d.Z,{collapsible:!1,name:"prop1",required:!1,schemaDescription:"Dumb Property",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"The name given to a pet",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"photoUrls",required:!1,schemaDescription:"The list of URL to a cute photos featuring pet",schemaName:"url[]",qualifierMessage:"**Possible values:** `<= 20`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"friend",required:!1,schemaDescription:void 0,schemaName:"circular(pet)",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"tags"),(0,o.kt)("span",{style:{opacity:"0.6"}}," Tag[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,o.kt)("inlineCode",{parentName:"p"},">= 1"))),(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Tags attached to the pet")),(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Tag name",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:"Pet status in the store",schemaName:"string",qualifierMessage:"**Possible values:** [`available`, `pending`, `sold`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)("div",{className:"discriminatorItem"},(0,o.kt)("div",null,(0,o.kt)("strong",{style:{paddingLeft:"1rem"}},"petType"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{paddingLeft:"1rem"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,o.kt)("inlineCode",{parentName:"p"},"cat"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dog"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bee"),"]")),(0,o.kt)("div",{style:{paddingLeft:"1rem"}},(0,o.kt)("p",null,"Type of a pet")),(0,o.kt)(c.Z,{mdxType:"DiscriminatorTabs"},(0,o.kt)(u.Z,{label:"cat",value:"0-item-discriminator",mdxType:"TabItem"},(0,o.kt)("div",{style:{marginLeft:"-4px"}},(0,o.kt)(d.Z,{collapsible:!1,name:"huntingSkill",required:!1,schemaDescription:"The measured skill for hunting",schemaName:"string",qualifierMessage:"**Possible values:** [`clueless`, `lazy`, `adventurous`, `aggressive`]",defaultValue:"lazy",mdxType:"SchemaItem"}))),(0,o.kt)(u.Z,{label:"dog",value:"1-item-discriminator",mdxType:"TabItem"},(0,o.kt)("div",{style:{marginLeft:"-4px"}},(0,o.kt)(d.Z,{collapsible:!1,name:"packSize",required:!1,schemaDescription:"The size of the pack the dog is from",schemaName:"int32",qualifierMessage:"**Possible values:** `>= 1`",defaultValue:1,mdxType:"SchemaItem"}))),(0,o.kt)(u.Z,{label:"bee",value:"2-item-discriminator",mdxType:"TabItem"},(0,o.kt)("div",{style:{marginLeft:"-4px"}},(0,o.kt)(d.Z,{collapsible:!1,name:"honeyPerDay",required:!1,schemaDescription:"Average amount of honey produced per day in ounces",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))),(0,o.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "id": 0,\n  "category": {\n    "id": 0,\n    "name": "string",\n    "sub": {\n      "prop1": "string"\n    }\n  },\n  "name": "string",\n  "photoUrls": [\n    "string"\n  ],\n  "friend": {},\n  "tags": [\n    {\n      "id": 0,\n      "name": "string"\n    }\n  ],\n  "status": "available",\n  "petType": {\n    "huntingSkill": "lazy"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,o.kt)(u.Z,{label:"application/xml",value:"application/xml",mdxType:"TabItem"},(0,o.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"category"),(0,o.kt)("span",{style:{opacity:"0.6"}}," Category")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Category ID",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Category name",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"sub"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Test Sub Category")),(0,o.kt)(d.Z,{collapsible:!1,name:"prop1",required:!1,schemaDescription:"Dumb Property",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"The name given to a pet",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"photoUrls",required:!1,schemaDescription:"The list of URL to a cute photos featuring pet",schemaName:"url[]",qualifierMessage:"**Possible values:** `<= 20`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"friend",required:!1,schemaDescription:void 0,schemaName:"circular(pet)",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"tags"),(0,o.kt)("span",{style:{opacity:"0.6"}}," Tag[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,o.kt)("inlineCode",{parentName:"p"},">= 1"))),(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Tags attached to the pet")),(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Tag name",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:"Pet status in the store",schemaName:"string",qualifierMessage:"**Possible values:** [`available`, `pending`, `sold`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)("div",{className:"discriminatorItem"},(0,o.kt)("div",null,(0,o.kt)("strong",{style:{paddingLeft:"1rem"}},"petType"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{paddingLeft:"1rem"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,o.kt)("inlineCode",{parentName:"p"},"cat"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dog"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bee"),"]")),(0,o.kt)("div",{style:{paddingLeft:"1rem"}},(0,o.kt)("p",null,"Type of a pet")),(0,o.kt)(c.Z,{mdxType:"DiscriminatorTabs"},(0,o.kt)(u.Z,{label:"cat",value:"0-item-discriminator",mdxType:"TabItem"},(0,o.kt)("div",{style:{marginLeft:"-4px"}},(0,o.kt)(d.Z,{collapsible:!1,name:"huntingSkill",required:!1,schemaDescription:"The measured skill for hunting",schemaName:"string",qualifierMessage:"**Possible values:** [`clueless`, `lazy`, `adventurous`, `aggressive`]",defaultValue:"lazy",mdxType:"SchemaItem"}))),(0,o.kt)(u.Z,{label:"dog",value:"1-item-discriminator",mdxType:"TabItem"},(0,o.kt)("div",{style:{marginLeft:"-4px"}},(0,o.kt)(d.Z,{collapsible:!1,name:"packSize",required:!1,schemaDescription:"The size of the pack the dog is from",schemaName:"int32",qualifierMessage:"**Possible values:** `>= 1`",defaultValue:1,mdxType:"SchemaItem"}))),(0,o.kt)(u.Z,{label:"bee",value:"2-item-discriminator",mdxType:"TabItem"},(0,o.kt)("div",{style:{marginLeft:"-4px"}},(0,o.kt)(d.Z,{collapsible:!1,name:"honeyPerDay",required:!1,schemaDescription:"Average amount of honey produced per day in ounces",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))),(0,o.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:"<root>\n  <id>0</id>\n  <category>\n    <id>0</id>\n    <name>string</name>\n    <sub>\n      <prop1>string</prop1>\n    </sub>\n  </category>\n  <name>string</name>\n  <photoUrls>string</photoUrls>\n  <friend/>\n  <tags>\n    <id>0</id>\n    <name>string</name>\n  </tags>\n  <status>available</status>\n  <petType>\n    <huntingSkill>lazy</huntingSkill>\n  </petType>\n</root>",language:"xml",mdxType:"ResponseSamples"}))))))),(0,o.kt)(u.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Invalid ID supplied")),(0,o.kt)("div",null)),(0,o.kt)(u.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Pet not found")),(0,o.kt)("div",null)))))}T.isMDXComponent=!0}}]);