(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{651:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sentinel-服务的熔断和降级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-服务的熔断和降级"}},[t._v("#")]),t._v(" Sentinel：服务的熔断和降级")]),t._v(" "),a("p",[t._v("Sentinel 以流量为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。")]),t._v(" "),a("p",[t._v("Sentinel 分为两个部分:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("sentinel：核心包。在一定程度上可以将 Sentinel Java 客户端理解为『流量防火墙』")])]),t._v(" "),a("li",[a("p",[t._v("sentinel-dashboard：基于 Spring Boot 开发的控制台。打包后可以直接运行，不需要额外的 Tomcat 等应用容器。Sentinel 控制台不仅能展示服务流控、熔断降级相关的数据，还可以通过配置的方式动态的为 Sentinel 客户端下发流量控制的指令。")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("Sentinel 的熔断、服务降级是作用于『"),a("strong",[t._v("被调用方、被调用方、被调用方")]),t._v("』的。在验证的过程中，你会发现，你只需要起一个服务"),a("small",[t._v("（被调服务）")]),t._v("，而无需另一个服务"),a("small",[t._v("（调用方）")]),t._v("来帮助你验证。")])]),t._v(" "),a("h2",{attrs:{id:"_1-sentinel-dashboard-的下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-sentinel-dashboard-的下载安装"}},[t._v("#")]),t._v(" 1. sentinel-dashboard 的下载安装")]),t._v(" "),a("p",[t._v("我们需要下载并安装的是 sentinel-dashBoard ，下载地址："),a("a",{attrs:{href:"https://github.com/alibaba/Sentinel/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/alibaba/Sentinel/releases"),a("OutboundLink")],1),t._v(" 。")]),t._v(" "),a("blockquote",[a("p",[t._v("注意：启动 sentinel-dashboard 需要 JDK 版本为 1.8 及以上版本。")])]),t._v(" "),a("p",[t._v("使用如下命令启动控制台：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("java -Dserver.port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8774")]),t._v(" -Dproject.name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sentinel-dashboard -jar sentinel-dashboard-1.8.1.jar\n")])])]),a("ul",[a("li",[a("p",[a("code",[t._v("-Dserver.port=8774")])]),t._v(" "),a("p",[t._v("用于指定 Sentinel 控制台端口为 8774 。默认是 8080 。我们给它改成不常用的端口。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("-Dproject.name=sentinel-dashboard")])]),t._v(" "),a("p",[t._v("指定 Sentinel 控制台程序的名称。")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("如果你有多张网卡的话，你还需要指定使用哪张网卡"),a("small",[t._v("（IP）")]),t._v("来接受各个微服务上报的信息：")]),t._v(" "),a("p",[a("code",[t._v("-Dcsp.sentinel.heartbeat.client.ip=192.168.xxx.xxx")])])]),t._v(" "),a("p",[t._v("访问网址："),a("a",{attrs:{href:"http://127.0.0.1:8774",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8774"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("从 1.6.0 起，sentinel-dashboard 引入基本的登录功能，默认用户名和密码都是 "),a("code",[t._v("sentinel")]),t._v(" 。当然也可以通过 JVM 参数的方式进行修改。")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("-Dsentinel.dashboard.auth.username=sentinel")])]),t._v(" "),a("p",[t._v("用于指定控制台的登录用户名为 sentinel ；")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("-Dsentinel.dashboard.auth.password=123456")])]),t._v(" "),a("p",[t._v("用于指定控制台的登录密码为 123456；如果省略这两个参数，默认用户和密码均为 sentinel；")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("-Dserver.servlet.session.timeout=7200")])]),t._v(" "),a("p",[t._v("用于指定 Spring Boot 服务端 session 的过期时间，如 7200 表示 7200 秒；60m 表示 60 分钟，默认为 30 分钟；")])])]),t._v(" "),a("p",[t._v("Sentinel 本身就是一个 Spring Boot 应用，所以修改 jar 包内部的 application.properties 文件也是可以修改配置的。")]),t._v(" "),a("h2",{attrs:{id:"_2-微服务集成-sentinel-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-微服务集成-sentinel-客户端"}},[t._v("#")]),t._v(" 2. 微服务集成 Sentinel 客户端")]),t._v(" "),a("p",[t._v("通过 maven 坐标在微服务模块 department-service"),a("small",[t._v("（服务提供者）")]),t._v("、employee-service"),a("small",[t._v("（服务消费者）")]),t._v("中加入 sentinel 客户端：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alibaba.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-alibaba-sentinel"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("并添加 sentinel-dashboard 的路径：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sentinel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("transport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8719")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值，可省略")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dashboard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8774")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志设置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("root")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" INFO\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' "$'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CONSOLE_LOG_PATTERN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\\n      "),a("span",{pre:!0,attrs:{class:"token directive important"}},[t._v("%clr(${LOG_LEVEL_PATTERN:%5p}) \\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token directive important"}},[t._v("%clr([%15.15t]){faint} \\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token directive important"}},[t._v("%clr(%-40.40logger{39}){cyan} \\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token directive important"}},[t._v("%clr(:){faint} \\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token directive important"}},[t._v('%m%n${LOG_EXCEPTION_CONVERSION_WORD:%wEx}}"')]),t._v("\n")])])]),a("p",[t._v("只需要完成上述的配置，代码不需要有任何的调整，我们就可以通过实时监控查看服务内的流量 QPS 以及平均响应时长等信息。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("只有服务接口被访问的情况下，在 sentinel 里面才可以看到监控信息。这可能会让你『等』一段时间。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/spring-cloud-alibaba//img/sentinel-01.png",alt:"sentinel-plus-01"}})]),t._v(" "),a("h2",{attrs:{id:"_3-sentinel-实现服务降级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-sentinel-实现服务降级"}},[t._v("#")]),t._v(" 3. Sentinel 实现服务降级")]),t._v(" "),a("p",[t._v("默认情况下，当你所请求的服务抛出异常时，你看到的是一个 500 的页面。当然，虽然被调用服务也可以通过 @ControllerAdvice 对 Controller 抛出的异常进行捕获处理，让你看到一个更友好的错误信息。不过，实际上，这都代表你没有获得合法的、理想的、正常的返回结果。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("服务『降级』是一个专业名词，它的背后的逻辑含义就是『退而求其次』。这个概念的思路、思维和 Java 8 的 Optional 的 "),a("code",[t._v("op.orElseGet()")]),t._v(" 是一样的：理想情况下，你应该返回一个 iPhone 12 Plus 给我，万一没有，那你返回个 iPhone 12 给我，我先拿着再说。这样总比你抛个异常或者返回个 null 给我要强很多。")])]),t._v(" "),a("h3",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("p",[t._v("Sentinel 默认『帮』我们实现了类似 @ControllerAdvice / @RestControllerAdvice 的功能，只需要在你的 Controller 方法上使用 "),a("strong",[t._v("@SentinelResource")]),t._v(" 注解即可：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SentinelResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fallback "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"indexFallback"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 看这里，看这里，看这里")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 参数没用上")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意后被方法的参数，必须是 N + 1 。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexFallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" ... "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"后备方法：对接口的访问被降级了！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上述方法的逻辑和关系非常简单，当 "),a("code",[t._v("index()")]),t._v(" 方法抛出异常时，因为 "),a("strong",[t._v("@SentinelResource")]),t._v(" 注解的 "),a("strong",[t._v("fallback")]),t._v(" 属性的指定，"),a("code",[t._v("indexFallback()")]),t._v(" 方法会被调用，indexFallback 方法的返回结果将会『顶替』index 方法返回，以避免给用户返回 500 的页面。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("如果你的代码中还有一个 Advice 在为 Controller 提供统一异常处理，此时，Advice 里的异常处理代码不会执行。因为这个异常已经被 Sentinel 处理掉了，没有抛到 Advice 处。")])]),t._v(" "),a("h3",{attrs:{id:"抽离出后备类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽离出后备类"}},[t._v("#")]),t._v(" 抽离出后备类")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("基本使用")]),t._v(" 的示例中，后备方法是直接写在 Controller 中的，为了避免 Controller 中的代码越来越臃肿，我们可以把后备方法处理到一个独立的类中。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoControllerFallback")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexFallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"后备方法：对接口的访问被降级了！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("后备有 3 点注意的地方：")]),t._v(" "),a("ol",[a("li",[t._v("后备类应该是一个被 Spring IoC 容器托管的单例对象："),a("strong",[t._v("@Component")]),t._v(" 。")]),t._v(" "),a("li",[t._v("后备方法必须是一个静态方法："),a("strong",[t._v("static")]),t._v(" 。")]),t._v(" "),a("li",[t._v("后备方法的参数数量仍然必须是 N + 1 。")])]),t._v(" "),a("p",[t._v("有了后备类之后，我们的 Controller 中的 @SentinelResource 注解就要变动成如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SentinelResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    fallbackClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoControllerFallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 看这里，看这里，看这里")]),t._v("\n    fallback "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"indexFallback"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("如果你的代码中同时有后备类、后备方法和 Advice，是后备类的代码被触发执行。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("降级的响应状态码")]),t._v(" "),a("p",[t._v("在没有使用 Sentinel 降级功能时，Spring MVC 的 HTTP 返回是 500"),a("small",[t._v("（因为 Controller 抛出了异常）")]),t._v("。而在使用了 fallback 方法后，Spring MVC 的 HTTP 返回的则是 200 ，理论上，本次请求收到的就是一个成功响应。")])]),t._v(" "),a("h2",{attrs:{id:"_4-熔断的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-熔断的概念"}},[t._v("#")]),t._v(" 4. 熔断的概念")]),t._v(" "),a("p",[t._v("微服务架构的系统通常会包含多个微服务，各个微服务可能部署在不同的机器上并通过网络进行通信，那么就不可避免会遇到 "),a("code",[t._v("网络请求超时")]),t._v("、"),a("code",[t._v("微服务不可用")]),t._v(" 等问题，这就会进一步引起依赖它的微服务不可用，这样不断引发服务故障的现象称为『"),a("strong",[t._v("雪崩效应")]),t._v("』，最终的结果是整个应用系统瘫痪。")]),t._v(" "),a("p",[t._v("为了解决上述问题，编程领域"),a("small",[t._v("（参考现实生活）")]),t._v("提出了"),a("strong",[t._v("熔断器")]),t._v("：")]),t._v(" "),a("p",[t._v("使用熔断器模式，如果请求出现异常，所有请求都会直接返回，而不会等待或阻塞，这样可以减少资源的浪费。")]),t._v(" "),a("p",[t._v("熔断器所造成的这种现象也叫『"),a("strong",[t._v("快速失败")]),t._v("（fast fall）』。")]),t._v(" "),a("h2",{attrs:{id:"_5-sentinel-的熔断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-sentinel-的熔断"}},[t._v("#")]),t._v(" 5. sentinel 的熔断")]),t._v(" "),a("p",[t._v("在 sentinel-dashboard 上你可以看到有 "),a("code",[t._v("降级规则")]),t._v("，它指的就是『"),a("strong",[t._v("设置当满足什么条件时，对服务进行降级")]),t._v("』。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/spring-cloud-alibaba//img/sentinel-02.png",alt:"sentinel-02"}})]),t._v(" "),a("p",[t._v("sentinel 支持 3 种降级规则：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("慢调用比例：这是一个依赖于响应时间的熔断规则。当资源在 "),a("code",[t._v("统计时长")]),t._v(" 内的请求的 "),a("code",[t._v("慢请求")]),t._v("（"),a("strong",[t._v("响应时间超过你所设置的 n 毫秒")]),t._v("）数累计超过指定比例，那么对资源的访问就被熔断，资源进入降级状态，持续若干秒。例如:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/spring-cloud-alibaba//img/sentinel-fuse-01.png",alt:"sentinel-plus-01"}})])]),t._v(" "),a("li",[a("p",[t._v("异常比例：当资源在 "),a("code",[t._v("统计时长")]),t._v(" 内的请求的异常比例超你所指定的比，那么对资源的访问就被熔断，资源进入降级状态，持续若干秒。例如:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/spring-cloud-alibaba//img/sentinel-fuse-02.png",alt:"sentinel-plus-02"}})])]),t._v(" "),a("li",[a("p",[t._v("异常数：和上面的异常比例有些类似，不过它是累计异常数量，而非比值。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/spring-cloud-alibaba//img/sentinel-fuse-03.png",alt:"sentinel-plus-03"}})])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("熔断的响应状态码")]),t._v(" "),a("p",[t._v("触发了 Sentinel 的熔断功能后，被调方 Spring MVC 返回 HTTP 请求的响应状态码既不是 500 ，也不是 200 ，而是 429 。当然，我们可以不用深究具体是多少，但是它并不是一个 200 的正常返回！")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("体会下降级与熔断的细微区别")]),t._v(" "),a("ol",[a("li",[t._v("响应状态码不同：\n"),a("ul",[a("li",[t._v("降级的 HTTP 响应状态码依次是 "),a("code",[t._v("200 - 200 - 200 - 200 -...")]),t._v("；")]),t._v(" "),a("li",[t._v("熔断的 HTTP 响应状态码依次是 "),a("code",[t._v("500 - 429 - 429 - 429 -...")]),t._v("；")])])]),t._v(" "),a("li",[t._v("它们各自保护的对象有细微区别。\n"),a("ul",[a("li",[t._v("降级保护的是当前请求，你看到的返回信息依次是 "),a("code",[t._v("自定义信息 - 自定义信息 - 自定义信息 - 自定义信息 - ...")]),t._v("；")]),t._v(" "),a("li",[t._v("熔断是保护下次、后续请求，你看到的返回信息依次是 "),a("code",[t._v("500 信息 - 自定义信息 - 自定义信息 - 自定义信息 - ...")])])])])])]),t._v(" "),a("h2",{attrs:{id:"_6-自定义熔断返回信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-自定义熔断返回信息"}},[t._v("#")]),t._v(" 6. 自定义熔断返回信息")]),t._v(" "),a("p",[t._v("Sentinel 在熔断器激活的情况选购下，Sentinel 返回的默认信息是 "),a("code",[t._v("Blocked by Sentinel (flow limiting)")]),t._v(" ，如果你对默认信息不满意，你可以自定义熔断返回信息。")]),t._v(" "),a("p",[t._v("Sentinel 提供了 "),a("strong",[t._v("BlockExceptionHandler")]),t._v(" 接口。当无论因何原因触发了 Sentinel 阻断用户的正常请求，Sentinel 都将『进入』到用户自定义的 "),a("strong",[t._v("BlockExceptionHandler")]),t._v(" 接口的实现类中，执行 "),a("strong",[t._v("handle")]),t._v(" 方法，并传入当前的请求、响应对象以及异常对象，并以 "),a("strong",[t._v("handle")]),t._v(" 方法的执行结果作为返回，回传给用户。")]),t._v(" "),a("p",[t._v("通过对 handle 方法的异常参数的判断，你可以直到当前发生了什么状况：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyBlockExceptionHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlockExceptionHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlockException")]),t._v(" ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"限流了"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DegradeException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"熔断了"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"其它原因"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ParamFlowException   "热点参数限流";')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// SystemBlockException "系统规则（负载/...不满足要求）";')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// AuthorityException   "授权规则不通过";')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// http 状态码")]),t._v("\n        response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStatus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCharacterEncoding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json;charset=utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContentType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json;charset=utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 利用 spring mvc 默认的 json 库 jackson")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectMapper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("需要说明的是：不止因为熔断这一个原因会导致 "),a("strong",[t._v("BlockExceptionhandler")]),t._v(" 的 "),a("strong",[t._v("handle")]),t._v(" 方法的执行，因此，需要对 handle 方法的 BlockException 参数对象进行 "),a("strong",[t._v("instanceof")]),t._v(" 判断，熔断对应的异常类型正是 "),a("strong",[t._v("DegradeException")]),t._v(" 。")])])}),[],!1,null,null,null);s.default=e.exports}}]);