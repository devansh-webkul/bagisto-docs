(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{458:function(t,s,a){t.exports=a.p+"assets/img/bagisto_shipments.e6134a4b.jpg"},459:function(t,s,a){t.exports=a.p+"assets/img/bagisto_ship_order_id.367b77a9.jpg"},518:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"shipments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shipments"}},[t._v("#")]),t._v(" Shipments")]),t._v(" "),e("p",[t._v("In this section, we will check all the shipments' API.")]),t._v(" "),e("h2",{attrs:{id:"get-shipments-from-all-orders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-shipments-from-all-orders"}},[t._v("#")]),t._v(" Get shipments from all orders")]),t._v(" "),e("p",[t._v("You can get all the shipments of the Bagisto store. To get the shipments of the store, the customer must be logged in to the Bagisto store. You can achieve this job by using the "),e("code",[t._v("shipments")]),t._v(" API call resource.")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Headers")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("Info")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Accept")]),t._v(" "),e("td",[t._v("application/json")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Authorization")]),t._v(" "),e("td",[t._v("Bearer "),e("code",[t._v("token-string")])]),t._v(" "),e("td",[t._v("Use only when you pass "),e("code",[t._v("?token=true")])])])])])]),t._v(" "),e("li",[e("p",[t._v("Request")]),t._v(" "),e("p",[e("code",[t._v("GET <host>/api/shipments(?limit,page,pagination)")])])]),t._v(" "),e("li",[e("p",[t._v("Params")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Info")]),t._v(" "),e("th",[t._v("Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("limit")]),t._v(" "),e("td",[t._v("Maximum number of records in each request")]),t._v(" "),e("td",[t._v("Number")])]),t._v(" "),e("tr",[e("td",[t._v("page")]),t._v(" "),e("td",[t._v("Records for specific page based on the limit")]),t._v(" "),e("td",[t._v("Number")])]),t._v(" "),e("tr",[e("td",[t._v("pagination")]),t._v(" "),e("td",[t._v("Will display all the records if set to "),e("code",[t._v("0")])]),t._v(" "),e("td",[t._v("Number")])])])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If you are using pagination and want to know more info about responses then check the "),e("a",{attrs:{href:"./explanation"}},[t._v("explanation")]),t._v(" portion.")])]),t._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("h4",{attrs:{id:"_1-get-all-shipments-with-pagination"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-get-all-shipments-with-pagination"}},[t._v("#")]),t._v(" 1. Get all shipments with pagination")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Headers")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("Info")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Accept")]),t._v(" "),e("td",[t._v("application/json")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Authorization")]),t._v(" "),e("td",[t._v("Bearer "),e("code",[t._v("token-string")])]),t._v(" "),e("td",[t._v("Use only when you pass "),e("code",[t._v("?token=true")])])])])])]),t._v(" "),e("li",[e("p",[t._v("Request")]),t._v(" "),e("p",[e("code",[t._v("GET http(s)://example.com/api/shipments?page=1")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If you didn't use the page (?page=x) filter, then it returns the data of the first page by default.")]),t._v(" "),e("p",[e("code",[t._v("GET http(s)://example.com/api/shipments")])])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Response")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_qty"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"carrier_title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DHL Shipping"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"track_number"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234566"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inventory_source"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Default"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contact_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Detroit Warehouse"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contact_email"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warehouse@example.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contact_number"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234567899"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"US"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MI"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"city"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Detroit"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"street"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12th Street"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postcode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"48127"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"items"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"links"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"meta"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:a(458),alt:"bagisto_shipments"}})])]),t._v(" "),e("h4",{attrs:{id:"_2-get-all-shipments-without-pagination"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-get-all-shipments-without-pagination"}},[t._v("#")]),t._v(" 2. Get all shipments without pagination")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Headers")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("Info")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Accept")]),t._v(" "),e("td",[t._v("application/json")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Authorization")]),t._v(" "),e("td",[t._v("Bearer "),e("code",[t._v("token-string")])]),t._v(" "),e("td",[t._v("Use only when you pass "),e("code",[t._v("?token=true")])])])])])]),t._v(" "),e("li",[e("p",[t._v("Request")]),t._v(" "),e("p",[e("code",[t._v("GET http(s)://example.com/api/shipments?pagination=0")])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Response")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_qty"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"carrier_title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DHL Shipping"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"track_number"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234566"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inventory_source"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Default"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contact_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Detroit Warehouse"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contact_email"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warehouse@example.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contact_number"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234567899"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"US"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MI"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"city"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Detroit"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"street"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12th Street"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postcode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"48127"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"items"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ...\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"get-shipments-by-order-s-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-shipments-by-order-s-id"}},[t._v("#")]),t._v(" Get shipments by order's id")]),t._v(" "),e("p",[t._v("To get the details of a  specific order's shipment, you have to pass an "),e("code",[t._v("order_id")]),t._v(" as a query parameter in API URL. By using this resource and query parameter, you will get only a single shipment detail in API response based on the provided "),e("code",[t._v("order_id")]),t._v(".")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Headers")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("Info")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Accept")]),t._v(" "),e("td",[t._v("application/json")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Authorization")]),t._v(" "),e("td",[t._v("Bearer "),e("code",[t._v("token-string")])]),t._v(" "),e("td",[t._v("Use only when you pass "),e("code",[t._v("?token=true")])])])])])]),t._v(" "),e("li",[e("p",[t._v("Request")]),t._v(" "),e("p",[e("code",[t._v("GET <host>/api/shipments(?order_id,limit,page,pagination)")])])]),t._v(" "),e("li",[e("p",[t._v("Params")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Info")]),t._v(" "),e("th",[t._v("Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("order_id")]),t._v(" "),e("td",[t._v("Order's ID")]),t._v(" "),e("td",[t._v("Number")])]),t._v(" "),e("tr",[e("td",[t._v("limit")]),t._v(" "),e("td",[t._v("Maximum number of records in each request")]),t._v(" "),e("td",[t._v("Number")])]),t._v(" "),e("tr",[e("td",[t._v("page")]),t._v(" "),e("td",[t._v("Records for specific page based on the limit")]),t._v(" "),e("td",[t._v("Number")])]),t._v(" "),e("tr",[e("td",[t._v("pagination")]),t._v(" "),e("td",[t._v("Will display all the records if set to "),e("code",[t._v("0")])]),t._v(" "),e("td",[t._v("Number")])])])])])]),t._v(" "),e("h3",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("h4",{attrs:{id:"_1-get-all-shipments-by-order-s-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-get-all-shipments-by-order-s-id"}},[t._v("#")]),t._v(" 1. Get all shipments by order's id")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Headers")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("Info")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Accept")]),t._v(" "),e("td",[t._v("application/json")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Authorization")]),t._v(" "),e("td",[t._v("Bearer "),e("code",[t._v("token-string")])]),t._v(" "),e("td",[t._v("Use only when you pass "),e("code",[t._v("?token=true")])])])])])]),t._v(" "),e("li",[e("p",[t._v("Request")]),t._v(" "),e("p",[e("code",[t._v("GET http(s)://example.com/api/shipments?order_id=3&pagination=0")])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Response")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_qty"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"carrier_code"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"carrier_title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DHL Shipping"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"track_number"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234566"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inventory_source"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"items"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("h4",{attrs:{id:"_2-get-all-shipments-by-order-s-id-for-specific-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-get-all-shipments-by-order-s-id-for-specific-page"}},[t._v("#")]),t._v(" 2. Get all shipments by order's id for specific page")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Headers")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("Info")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Accept")]),t._v(" "),e("td",[t._v("application/json")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Authorization")]),t._v(" "),e("td",[t._v("Bearer "),e("code",[t._v("token-string")])]),t._v(" "),e("td",[t._v("Use only when you pass "),e("code",[t._v("?token=true")])])])])])]),t._v(" "),e("li",[e("p",[t._v("Request")]),t._v(" "),e("p",[e("code",[t._v("GET http(s)://example.com/api/shipments?order_id=3&page=1")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If you didn't use the page (?page=x) filter, then it returns the data of the first page by default.")]),t._v(" "),e("p",[e("code",[t._v("GET http(s)://example.com/api/shipments?order_id=3")])])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Response")]),t._v(" "),e("p",[e("img",{attrs:{src:a(459),alt:"bagisto_ship_order_id"}})])]),t._v(" "),e("h2",{attrs:{id:"get-shipment-by-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-shipment-by-id"}},[t._v("#")]),t._v(" Get shipment by id")]),t._v(" "),e("p",[t._v("To get the details of a specific shipment, you have to pass a "),e("code",[t._v("shipment_id")]),t._v(" as a request payload in the API URL.")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Headers")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("Info")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Accept")]),t._v(" "),e("td",[t._v("application/json")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Authorization")]),t._v(" "),e("td",[t._v("Bearer "),e("code",[t._v("token-string")])]),t._v(" "),e("td",[t._v("Use only when you pass "),e("code",[t._v("?token=true")])])])])])]),t._v(" "),e("li",[e("p",[t._v("Request")]),t._v(" "),e("p",[e("code",[t._v("GET http(s)://example.com/api/shipments/{id}")])])])]),t._v(" "),e("h3",{attrs:{id:"examples-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("h4",{attrs:{id:"_1-let-s-fetch-specific-shipment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-let-s-fetch-specific-shipment"}},[t._v("#")]),t._v(" 1. Let's fetch specific shipment")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Headers")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("Info")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Accept")]),t._v(" "),e("td",[t._v("application/json")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Authorization")]),t._v(" "),e("td",[t._v("Bearer "),e("code",[t._v("token-string")])]),t._v(" "),e("td",[t._v("Use only when you pass "),e("code",[t._v("?token=true")])])])])])]),t._v(" "),e("li",[e("p",[t._v("Request")]),t._v(" "),e("p",[e("code",[t._v("GET http(s)://example.com/api/shipments/1")])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Response")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_qty"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"carrier_code"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"carrier_title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DHL Shipping"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"track_number"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234566"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email_sent"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inventory_source"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"items"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);