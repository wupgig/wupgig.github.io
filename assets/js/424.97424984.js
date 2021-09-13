(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{792:function(a,t,e){"use strict";e.r(t);var r=e(47),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"rabbitmq-解压版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-解压版"}},[a._v("#")]),a._v(" RabbitMQ 解压版")]),a._v(" "),e("h2",{attrs:{id:"写在前面的话"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在前面的话"}},[a._v("#")]),a._v(" 写在前面的话")]),a._v(" "),e("p",[a._v("有些软件对于安装路径有一定的要求，例如：路径中不能有空格，不能有中英文，不能有特殊符号，等等。")]),a._v(" "),e("p",[a._v("为了避免不必要的麻烦，也懒得一一辨别踩坑，我们人为作出「"),e("strong",[a._v("统一的约定")]),a._v("」：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("安装版的软件，一律安装在软件的默认安装路径，不要去改变它。"),e("small",[a._v("默认在哪就是哪，别动。")])])]),a._v(" "),e("li",[e("p",[a._v("解压版的软件，一律安装在："),e("strong",[a._v("D:\\ProgramFiles")]),a._v(" 。这是一个没中文、没空格的路径！")])])]),a._v(" "),e("h2",{attrs:{id:"安装-erlang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-erlang"}},[a._v("#")]),a._v(" 安装 Erlang")]),a._v(" "),e("p",[a._v("由于 RabbitMQ 是用 Erlang 语言编写的，因此需要先安装 Erlang 。")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("通过 "),e("a",{attrs:{href:"http://www.erlang.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[e("em",[a._v("http://www.erlang.org/downloads")]),e("OutboundLink")],1),a._v(" 获取对应安装文件进行安装。安装到默认路径。")])]),a._v(" "),e("li",[e("p",[a._v("增加环境变量 "),e("em",[e("code",[a._v("ERLANG_HOME=C:\\Program Files\\erl10.5")])]),e("small",[a._v("（这里的目录是我的安装目录，你要换成自己的目录）")])])]),a._v(" "),e("li",[e("p",[a._v("修改环境变量 Path，在原来的值后面加上 "),e("em",[e("code",[a._v(";%ERLANG_HOME%\\bin")])])])])]),a._v(" "),e("h2",{attrs:{id:"安装-rabbitmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-rabbitmq"}},[a._v("#")]),a._v(" 安装 RabbitMQ")]),a._v(" "),e("p",[a._v("下载 RabbitMQ ，当前"),e("small",[a._v("（2019-12-1）")]),a._v("最新版本是 "),e("a",{attrs:{href:"https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.8.1/rabbitmq-server-windows-3.8.1.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("3.8.1"),e("OutboundLink")],1),a._v(" 。")]),a._v(" "),e("p",[a._v("解压到 "),e("em",[e("code",[a._v("D:\\ProgramFiles\\")])]),a._v(" 目录下。"),e("small",[a._v("（这是我的解压目录。各人根据各自情况可调整，或创建此目录和我保持一致）。")])]),a._v(" "),e("p",[a._v("双击 "),e("em",[e("code",[a._v("sbin\\rabbitmq-server.bat")])]),a._v("，启动 RabbitMQ Server，会看到类似如下信息：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("...\n\nStarting broker... completed with 0 plugins.\n")])])]),e("h2",{attrs:{id:"启动管理页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动管理页面"}},[a._v("#")]),a._v(" 启动管理页面")]),a._v(" "),e("p",[a._v("我们可以通过 Web 进行管理 RabbitMQ 。")]),a._v(" "),e("p",[a._v("在命令行上运行 RabbitMQ 解压/安装目录下的 "),e("em",[e("code",[a._v("sbin")])]),a._v(" 目录下的 "),e("em",[e("code",[a._v("rabbitmq-plugins.bat")])]),a._v(" 命令。"),e("strong",[a._v("由于执行该命令需要附带参数，因此不能靠双击运行。")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" rabbitmq-plugins.bat "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rabbitmq_management\n")])])]),e("p",[a._v("会看到类似如下内容:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Enabling plugins on node xxx:\n...\n\nstarted 3 plugins.\n")])])]),e("p",[a._v("通过浏览器访问 "),e("a",{attrs:{href:"http://localhost:15672",target:"_blank",rel:"noopener noreferrer"}},[e("em",[a._v("http://localhost:15672")]),e("OutboundLink")],1),a._v("，并通过默认用户 "),e("strong",[a._v("guest")]),a._v(" 进行登录，密码也是 "),e("strong",[a._v("guest")]),a._v("，登录后的页面：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/windows/img/rabbitmq-install-01.png",alt:"rabbitmq-install-01)"}})]),a._v(" "),e("p",[a._v("比如 channels / exchanges / queues 等，可以逐个点进去看下详细情况。")]),a._v(" "),e("p",[e("small",[a._v("如果要添加新用户的话，点击 Admin 选项卡，进行添加。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);