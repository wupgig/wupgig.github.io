(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{499:function(a,s,t){"use strict";t.r(s);var n=t(47),r=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"java-8-nashorn-javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-8-nashorn-javascript"}},[a._v("#")]),a._v(" Java 8 Nashorn JavaScript")]),a._v(" "),t("p",[a._v("从 JDK 1.8 开始，"),t("strong",[a._v("Nashorn")]),a._v(" 取代 Rhino（JDK 1.6, JDK1.7）成为 Java 的嵌入式 JavaScript 引擎。Nashorn 完全支持 ECMAScript 5.1 规范以及一些扩展。它使用基于 JSR 292 的新语言特性，其中包含在 JDK 7 中引入的 invokedynamic ，将 JavaScript 编译成 Java 字节码。")]),a._v(" "),t("blockquote",[t("p",[a._v("Nashorn JavaScript Engine 在 Java 15 已经不可用了。")])]),a._v(" "),t("h2",{attrs:{id:"jjs-交互式编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jjs-交互式编程"}},[a._v("#")]),a._v(" jjs 交互式编程")]),a._v(" "),t("p",[t("strong",[a._v("jjs")]),a._v(" 是个基于 Nashorn 引擎的命令行工具。它接受一些 JavaScript 源代码为参数，并且执行这些源代码。")]),a._v(" "),t("p",[a._v("打开控制台，输入以下命令：")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("$ jjs\njjs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello, World!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nHello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" World"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\njjs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("quit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h2",{attrs:{id:"传递参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传递参数"}},[a._v("#")]),a._v(" 传递参数")]),a._v(" "),t("p",[a._v("打开控制台，输入以下命令：")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("$ jjs "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" a b c\njjs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'字母: '")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("arguments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('", "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n字母"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" c\n")])])]),t("h2",{attrs:{id:"jjs-执行-js-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jjs-执行-js-文件"}},[a._v("#")]),a._v(" jjs 执行 .js 文件")]),a._v(" "),t("p",[a._v("例如，我们创建一个具有如下内容的 sample.js 文件：")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello World!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("打开控制台，输入以下命令：")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("$ jjs sample"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("js\n")])])]),t("p",[a._v("以上程序输出结果为：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Hello World!\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);