(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{377:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ajax-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax-基础"}},[t._v("#")]),t._v(" AJAX 基础")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("结合 Postman 验证本章节内容。")])]),t._v(" "),a("h2",{attrs:{id:"_1-基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本概念"}},[t._v("#")]),t._v(" 1. 基本概念")]),t._v(" "),a("p",[t._v("传统 Web 应用的缺点：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("独占式的请求")])]),t._v(" "),a("li",[a("p",[t._v("频繁的页面刷新")])])]),t._v(" "),a("p",[t._v("当下的前端开发通常都会借助 Ajax 技术，Ajax 并没有太多新的内容，但 Ajax 丰富了前端开发的功能。")]),t._v(" "),a("p",[t._v("Ajax 技术的核心概念就是两个：『"),a("strong",[t._v("异步")]),t._v("』和『"),a("strong",[t._v("局部刷新")]),t._v("』。")]),t._v(" "),a("p",[t._v("AJAX 的全称是 Asynchronous JavaScript XML（异步 JavaScript 和 XML），从 AJAX 的组合名称可以看出 AJAX 其实并不是一种技术，而是多种技术的组合，每种技术都有其独特之处，合在一起就成了功能强大的技术。AJAX 的出现揭开了无刷新页面的新时代。")]),t._v(" "),a("p",[t._v("利用 AJAX 技术， Web 前端只需要在后台与服务器进行少量数据交换。")]),t._v(" "),a("p",[t._v("AJAX 采用了异步交互的方式，从而改变了同步交互过程中的“请求 - 等待 - 请求 - 等待”的模式。")]),t._v(" "),a("p",[t._v("异步，是指基于 Ajax 的应用与服务器通信的方式。对于")]),t._v(" "),a("ul",[a("li",[t._v("传统的 Web 应用，每次用户发送请求，向服务器请求获得新数据时，浏览器都会完全丢弃当前页面，而等待重新加载新的页面。而在服务器完全响应之前，用户浏览器将一片空白，用户的动作必须中断。而")]),t._v(" "),a("li",[t._v("异步是指用户发送请求后，无须等待，请求在后台发送，不会阻塞用户当前活动。用户无须等待第一次请求得到完全响应，即可发送第二次请求。")])]),t._v(" "),a("p",[t._v("简单来说，AJAX 的工作原理是通过 "),a("strong",[t._v("xmlHttpRequest")]),t._v(" 对象来向服务器发出异步请求。"),a("strong",[t._v("xmlHttprequest")]),t._v(" 可以同步或异步返回 Web 服务器的响应，并且能以文本或一个 DOM 文档形式返回内容。")]),t._v(" "),a("p",[t._v("普通的 Web 项目的工作流程是：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://uive.gitee.io/img/ajax/ajax_1.png",alt:"ajax_1"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ol",[a("li",[t._v("发起 <请求-1>")]),t._v(" "),a("li",[t._v("获得 <页面-1>")]),t._v(" "),a("li",[t._v("发起 <请求-2>")]),t._v(" "),a("li",[t._v("获得 <页面-2>")]),t._v(" "),a("li",[t._v("发起 <请求-3>")]),t._v(" "),a("li",[t._v("获得 <页面-3>")]),t._v(" "),a("li",[t._v("...")])])]),t._v(" "),a("p",[t._v("Ajax 的 Web 项目的流程是：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://uive.gitee.io/img/ajax/ajax_2.png",alt:"ajax_2"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ol",[a("li",[t._v("发起 <请求-1>")]),t._v(" "),a("li",[t._v("获得 <页面-1>")]),t._v(" "),a("li",[t._v("发起 <请求-2>")]),t._v(" "),a("li",[t._v("获得 数据，修改 <页面-1>")]),t._v(" "),a("li",[t._v("发起 <请求-3>")]),t._v(" "),a("li",[t._v("获得 数据，修改 <页面-1>")]),t._v(" "),a("li",[t._v("...")])])]),t._v(" "),a("p",[t._v("Ajax 的核心是 "),a("strong",[t._v("XMLHttpRequest")]),t._v(" 对象（"),a("small",[t._v("首次出现于 IE5，如今已被 HTML5 制定为正式规范。")]),t._v("）。XMLHttpRequest 提供了异步通信的能力，通过它浏览器可以向服务器发送异步的请求，也可通过它读取服务器响应。")]),t._v(" "),a("p",[t._v("JavaScript 主要完成 Ajax 如下事情：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("创建 "),a("strong",[t._v("XMLHttpRequest")]),t._v(" 对象；")])]),t._v(" "),a("li",[a("p",[t._v("通过 "),a("strong",[t._v("XMLHttpRequest")]),t._v(" 对象向服务器发送请求；")])]),t._v(" "),a("li",[a("p",[t._v("创建回调函数，监视服务器响应状态，在服务器响应完成后，回调函数启动；")])]),t._v(" "),a("li",[a("p",[t._v("回调函数通过 DOM 动态更新 HTML 页面；")])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建XMLHttpRequest对象")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ajax 是异步的，设置回调函数")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 状态发生变化时，函数被回调")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功完成")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断响应状态码")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功，通过 responseText 拿到响应的文本:")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 失败，根据响应码判断失败原因:")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTTP 请求还在继续...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送请求:")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/categories'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置请求头")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//到这一步，请求才正式发出")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-http-请求的-content-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-请求的-content-type"}},[t._v("#")]),t._v(" 2. HTTP 请求的 content-type")]),t._v(" "),a("p",[t._v("HTTP 请求的请求头中会有一个较为重要的键值对："),a("strong",[t._v("content-type")]),t._v("，它的值常见有 2 个："),a("strong",[t._v("application/x-www-form-urlencoded")]),t._v(" 和 "),a("strong",[t._v("application/json")]),t._v(" 。")]),t._v(" "),a("p",[t._v("HTTP 请求的 "),a("strong",[t._v("content-type")]),t._v(" 决定了：本次请求所提交的参数"),a("small",[t._v("（例如，登录请求所携带的用户名和密码信息）")]),t._v("是 "),a("strong",[t._v("Query String")]),t._v(" 格式，还是 "),a("strong",[t._v("JSON String")]),t._v(" 格式。")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("HTTP 请求提交的参数数据，无论是 Query String 格式，还是 JSON String 格式，都只是格式的不同，其数据内容是完全一致的。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("就像同样一句话，"),a("small",[t._v("（在不考虑同音字引起歧义的情况下）")]),t._v("我用拼音写，还是用汉字写，本质上并没有区别，两种写法传递的信息，表达的含义是一样的，它们只是『写法』不同而已。")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Query String")])]),t._v(" "),a("p",[t._v("如果，你的 HTTP 请求头中的 "),a("strong",[t._v("content-type")]),t._v(" 的值为 "),a("strong",[t._v("application/x-www-form-urlencoded")]),t._v(" 。那么，你的登录请求的请求参数"),a("small",[t._v("（用户名和密码）")]),t._v("，就应该是 "),a("strong",[t._v("Query String")]),t._v(" 形式。形如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("username=tom&password=123456\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("JSON String")])]),t._v(" "),a("p",[t._v("如果，你的 HTTP 请求的 "),a("strong",[t._v("content-type")]),t._v(" 的值为 application/json。那么，你的登录请求的参数"),a("small",[t._v("（用户名和密码）")]),t._v("，就因该是 "),a("strong",[t._v("JSON String")]),t._v(" 形式。形如：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("再次强调一遍，上述的两种格式，显而易见，只是格式的不同。它俩表达的含义、传递的数据本质上是一样的！")]),t._v(" "),a("h2",{attrs:{id:"_3-http-响应的-content-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-响应的-content-type"}},[t._v("#")]),t._v(" 3. HTTP 响应的 content-type")]),t._v(" "),a("p",[t._v("HTTP 响应的响应头中也有一个 "),a("strong",[t._v("content-type")]),t._v(" 键值对，它的值我们常见两种："),a("strong",[t._v("text/html")]),t._v(" 和 "),a("strong",[t._v("application/json")]),t._v(" 。")]),t._v(" "),a("p",[t._v("HTTP 响应头中的 content-type 决定了：浏览器接收到你"),a("small",[t._v("（通过 Tomcat）")]),t._v("发回给它的数据之后，它接下来干什么。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果，你的 HTTP 响应的 content-type 的值为 "),a("code",[t._v("text/html")]),t._v(" 。那么，你"),a("small",[t._v("（通过 Tomcat）")]),t._v("回给浏览器的数据『理应』是一个 HTML 格式的字符串。")])]),t._v(" "),a("li",[a("p",[t._v("如果，你的 HTTP 响应的 content-type 的值为 "),a("code",[t._v("application/json")]),t._v(" 。那么，你"),a("small",[t._v("（通过 Tomcat）")]),t._v("回给浏览器的数据『理应』一个 JSON 格式字符串。")])])]),t._v(" "),a("h2",{attrs:{id:"_4-ajax-请求和-content-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-ajax-请求和-content-type"}},[t._v("#")]),t._v(" 4. AJAX 请求和 content-type")]),t._v(" "),a("p",[t._v("当前浏览器发出的是否是 AJAX 请求与 content-type 无关，而是与是否使用了 JavaScript 的 XMLHttpRequest 有关。")]),t._v(" "),a("p",[t._v("所以一个常见的『"),a("strong",[t._v("标准错误答案")]),t._v("』是：HTTP 请求头的 "),a("strong",[t._v("content-type")]),t._v(" 的值为 "),a("strong",[t._v("application/json")]),t._v(" ，则意味着当前请求是 AJAX 请求。")]),t._v(" "),a("p",[t._v("正确的观点应该是：AJAX 请求只和 "),a("strong",[t._v("XMLHttpRequest")]),t._v(" 对象有关。通过 "),a("strong",[t._v("XMLHttpRequest")]),t._v(" 发出的请求就是 AJAX 请求，反之则不是。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("#")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("参数风格")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("content-type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Servlet 获取参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("普通请求一")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("query-string 格式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("application/x-www-form-urlencoded")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("request.getParameter()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("普通请求二")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("json-string 格式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("application/json")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("request.getReader()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AJAX 请求一")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("query-string 格式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("application/x-www-form-urlencoded")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("request.getParameter()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AJAX 请求二")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("json-string 格式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("application/json")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("request.getReader()")])])])]),t._v(" "),a("p",[t._v("其中，"),a("code",[t._v("普通请求二")]),t._v(" 比较少见。")]),t._v(" "),a("h2",{attrs:{id:"_5-application-json-和-request-getreader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-application-json-和-request-getreader"}},[t._v("#")]),t._v(" 5. application/json 和 request.getReader()")]),t._v(" "),a("p",[t._v("由于 Servlet 中的 "),a("strong",[t._v('request.getParameter("...")')]),t._v(" 只对 "),a("strong",[t._v("content-type")]),t._v(" 值为 "),a("strong",[t._v("application/x-www-form-urlencoded")]),t._v(" 的情况有效有效。")]),t._v(" "),a("p",[t._v("当你的请求参数风格是 json-string 风格，即，HTTP 请求头的c ontent-type 值为 application/json 时，你的 Servlet 中的 "),a("strong",[t._v('request.getParameter("...")')]),t._v(" 方法的值为 "),a("strong",[t._v("null")]),t._v("，是获取不到页面提交的参数的。")]),t._v(" "),a("p",[t._v("这种情况下，你需要自己“想办法”从 HTTP 请求的 Body 中，将请求参数取出来：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BufferedReader")]),t._v(" br "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getReader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wholeStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" br"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wholeStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wholeStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_6-人造『奇葩』请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-人造『奇葩』请求"}},[t._v("#")]),t._v(" 6. 人造『奇葩』请求")]),t._v(" "),a("p",[t._v("下面几种请求方式，在我们通过浏览器向后台发出 HTTP 请求时，是无法出现的，浏览器不会组装出这样的 HTTP 请求。它们都是我们通过 postman 这样的客户端工具"),a("small",[t._v("（或其它方式）")]),t._v("人为『造』出来的『奇葩』情况。")]),t._v(" "),a("p",[t._v("这些请求都是属于『看起来合乎 HTTP 规则要求，但是大家都不会这么用』的情况。")]),t._v(" "),a("h3",{attrs:{id:"人造奇葩请求一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#人造奇葩请求一"}},[t._v("#")]),t._v(" 人造奇葩请求一")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("参数格式为 query-string 风格，但是 HTTP 请求头的 content-type 值为 application/json；")])]),t._v(" "),a("li",[a("p",[t._v("参数格式为 json-string 风格，但是 HTTP 请求头的 content-type 值为 application/x-www-form-urlencoded。")])])]),t._v(" "),a("p",[t._v("上面两种都是属于：我口头告诉你我给你的是个苹果，但是实际上我手里递给你的是个梨。")]),t._v(" "),a("p",[t._v("虽然看似没有报错，它俩都属于逻辑上的 bug，本不应该出现这样的情况。")]),t._v(" "),a("h3",{attrs:{id:"人造-奇葩-请求二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#人造-奇葩-请求二"}},[t._v("#")]),t._v(" 人造“奇葩”请求二")]),t._v(" "),a("p",[t._v("发出 GET 请求，提交的参数是 json-string 风格，放在 HTTP 请求体中，HTTP 请求头中 content-type 值为 application/json 。")]),t._v(" "),a("p",[t._v("上诉请求的“奇葩”之处在于：")]),t._v(" "),a("ol",[a("li",[t._v("正常情况下，Get 请求的请求参数一般都是 query-string 风格，"),a("small",[t._v("而不是 json-string；")])]),t._v(" "),a("li",[t._v("正常情况下，Get 请求的请求参数都是拼接在 URL 后面，写在 HTTP 请求行中的，"),a("small",[t._v("而不是在请求体中；")])]),t._v(" "),a("li",[t._v("正常情况下，Get 请求由于请求体中无内容，它的 HTTP 请求头中是没有 content-type 键值对的。")])]),t._v(" "),a("p",[t._v("相较于 "),a("code",[t._v("奇葩请求一")]),t._v(" 而言，这样的请求不算太奇葩，因为，它不是一种错，只是少见。"),a("small",[t._v("大家更习惯于 get 的参数以 query-string 的格式拼接在 URL 后面，放在 HTTP 请求头中，HTTP 请求体空着。")])]),t._v(" "),a("p",[t._v("有可能你会遇到这种请求，它并非特别“奇葩”、罕见。")]),t._v(" "),a("h3",{attrs:{id:"人造奇葩请求三"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#人造奇葩请求三"}},[t._v("#")]),t._v(" 人造奇葩请求三")]),t._v(" "),a("p",[t._v("发出 POST 请求，提交的参数是 query-string，拼接在 URL 后面，放在 HTTP 请求行中。由于 HTTP 请求体中是空的，所有 HTTP 请求头中没有 content-type 键值对。")]),t._v(" "),a("p",[t._v("这种请求的奇葩之处在于：既然你想这么干，为什么不用 get 请求？")]),t._v(" "),a("p",[t._v("『完』")])])}),[],!1,null,null,null);s.default=e.exports}}]);