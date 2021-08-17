(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{615:function(t,e,v){"use strict";v.r(e);var s=v(30),_=Object(s.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"代码优化建议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代码优化建议"}},[t._v("#")]),t._v(" 代码优化建议")]),t._v(" "),v("ol",[v("li",[v("p",[v("code",[t._v("80")]),t._v("/"),v("code",[t._v("86")]),t._v("等行， "),v("code",[t._v("validator")]),t._v(" 自定义验证函数是没有意义的。（"),v("code",[t._v("133")]),t._v(" 行除外）")]),t._v(" "),v("blockquote",[v("p",[t._v("只需定义type为"),v("code",[t._v("Function")]),t._v("即可，如传入值非函数，在控制台都会有报错提示。")])])]),t._v(" "),v("li",[v("p",[v("code",[t._v("135")]),t._v(" 行，string类型可改写成：")]),t._v(" "),v("div",{staticClass:"language-js line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[t._v("listType"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'picture'")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("blockquote",[v("p",[t._v("直观的表达可选值。")])])]),t._v(" "),v("li",[v("p",[v("code",[t._v("210")]),t._v("行，这一行代码似乎没起什么作用")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("319")]),t._v("/"),v("code",[t._v("371")]),t._v("行 等多处判断参数是否为函数类型是没必要的，因为props已经限制了参数必须是函数类型。")])])]),t._v(" "),v("h2",{attrs:{id:"组件设计建议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件设计建议"}},[t._v("#")]),t._v(" 组件设计建议")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("文件存入地址应由使用者传入。理由：")]),t._v(" "),v("ul",[v("li",[t._v("文件存入地址是有可能改变的。")]),t._v(" "),v("li",[t._v("通用组件的设计原则应该是不局限在只有我们自己公司用。")])]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://img2.baidu.com/it/u=895714060,705914695&fm=26&fmt=auto&gp=0.jpg"}})]),t._v(" "),v("li",[v("p",[v("code",[t._v("getStsToken")]),t._v(" 获取token的api应由使用者传入。理由：")]),t._v(" "),v("ul",[v("li",[t._v("你已经是一个成熟的组件了，要学会适应不同的api")])])])]),t._v(" "),v("h2",{attrs:{id:"疑问🤔"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#疑问🤔"}},[t._v("#")]),t._v(" 疑问🤔")]),t._v(" "),v("ol",[v("li",[t._v("Element-ui 的 "),v("code",[t._v("listType")]),t._v(" 是有三种类型的（text/picture/picture-card），这里为什么只有两种（text/picture）？ 文档没有说明。")])]),t._v(" "),v("h2",{attrs:{id:"其他"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),v("ol",[v("li",[v("p",[v("code",[t._v("139")]),t._v("行，添加了"),v("code",[t._v("maxSize")]),t._v("配置没有在文档里写明。")])]),t._v(" "),v("li",[v("p",[t._v("看了代码逻辑，只要"),v("code",[t._v("isMultipart")]),t._v("为true，就会强制分片上传。文档应该更清楚的写明：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("partSize")]),t._v(" 配置说明应改为："),v("strong",[t._v("自动开启分片上传的临界点(单位M)。仅在"),v("code",[t._v("isMultipart")]),t._v("为false时生效。")])]),t._v(" "),v("li",[v("code",[t._v("isMultipart")]),t._v(" 配置说明应改为："),v("strong",[t._v("是否强制分片上传")])])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);