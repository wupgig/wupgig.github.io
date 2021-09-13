(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{642:function(e,t,s){"use strict";s.r(t);var a=s(47),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"spring-webflux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-webflux"}},[e._v("#")]),e._v(" Spring WebFlux")]),e._v(" "),s("p",[e._v("随着响应式编程的流行，Spring 5 增加了响应式编程技术栈：Spring WebFlux 。Spring WebFlux 是完全无阻塞的，可以支持 Reactive Streams 被压，并且可以在诸如 Netty、Undertow 和 Servlet 3.1+ 容器的服务器上运行。")]),e._v(" "),s("blockquote",[s("p",[e._v("Spring WebFlux 与 Spring MVC 这两个 Web 框架分别位于 spring-webflux 和 spring-webmvc 模块中两者处于同等的地位，且相互间是独立的，不存在相互依赖关系。")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/spring-boot/img/spring-webflux-01.png",alt:"spring-webflux-01.png"}})]),e._v(" "),s("p",[e._v("Reactor 是 Spring WebFlux 所基于的响应式库。Reactor 是一个 Reactive Streams 库，它提供了 Mono 和 Flux API 类型，通过一组丰富的操作符来处理 0...1 和 0...N 的数据序列。")]),e._v(" "),s("blockquote",[s("p",[e._v("作为一般规则，WebFlux API 接受一个普通的 Publisher 作为输入，在内部将它调整为 Reactor 类型，使用它们，然后返回 Flux 或 Mono 作为输出。")])]),e._v(" "),s("h2",{attrs:{id:"响应式编程模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式编程模型"}},[e._v("#")]),e._v(" 响应式编程模型")]),e._v(" "),s("p",[e._v("spring-web 模块包含了 spring-webflux 所需要的基础组件，这些基础组件包含 HTTP 抽象、受支持服务器的 Reactive Streams 适配器、编码器和解码器，以及可与 Servlet API 相媲美但遵循非阻塞协议的核心 WebHandler API 等。")]),e._v(" "),s("p",[e._v("在此基础上，Spring WebFlux 提供了两种编程模型的选择：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("带注解的控制器")]),e._v(" "),s("p",[e._v("与 Spring MVC 所使用的注解一样，都是基于 spring-web 模块中的相同的注解。")])]),e._v(" "),s("li",[s("p",[e._v("函数式端点")]),e._v(" "),s("p",[e._v("基于 lambda 的轻量级函数式编程模型。它与注解控制器的最大区别在于，应用程序负责从头到尾的请求处理，通过注解声明意图并被回调。")])])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/spring-boot/img/spring-webflux-02.png",alt:"spring-webflux-02.png"}})]),e._v(" "),s("h2",{attrs:{id:"以-spring-mvc-的方式使用-spring-webflux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以-spring-mvc-的方式使用-spring-webflux"}},[e._v("#")]),e._v(" 以 Spring MVC 的方式使用 Spring WebFlux")]),e._v(" "),s("p",[e._v("WebFlux 可以以你『熟悉』的方式"),s("small",[e._v("（基于注解）")]),e._v("使用，"),s("small",[e._v("让你根本意识不到你所使用的是 spring-webmvc 还是 spring-webflux")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@RestController")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("WorldController")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("UserVO")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("world")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("UserVO")]),e._v(" vo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("UserVO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Mono")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("just")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("vo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("这里和『普通』的 @RequestMapping 的区别就在于它的返回值必须是 "),s("strong",[e._v("Mono")]),e._v(" 或者是 "),s("strong",[e._v("Flux")]),e._v(" 。")]),e._v(" "),s("blockquote",[s("p",[e._v("另外，有些文档说需要使用 @EnableWebFlux 注解启用 WebFlux，但是经测试，不加也可以。")])]),e._v(" "),s("p",[e._v("如果你想『看到熟悉』的页面跳转功能，WebFlux 也是可以的（见最后）。")]),e._v(" "),s("p",[e._v("总之，因为 spring-web 模块的抽象，你使用 spring-webmvc 还是使用 spring-webflux 其实写出来的代码可以一样。")]),e._v(" "),s("h2",{attrs:{id:"另一种使用-webflux-的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#另一种使用-webflux-的方式"}},[e._v("#")]),e._v(" 另一种使用 WebFlux 的方式")]),e._v(" "),s("p",[e._v("Spring WebFlux 包含了一个轻量级的函数式编程模型，其中函数用于路由和请求处理"),s("small",[e._v("（并且相关接口 API 都是基于不可变性而设计的）")]),e._v("。它是上述的基于注解的编程模型的另一种替代方案。")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("HandlerFunction")]),e._v(" "),s("p",[e._v("ServerRequest 和 ServerResponse 是不可变接口，"),s("small",[e._v("它们提供了 JDK 8 对 HTTP 带 Reactive Streams 背压的请求和响应的友好访问。")]),e._v("请求主题由 Reactor 的 Flux 或 Mono 表示。")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("ServerRequest 提供了对于 HTTP Method、URI、Http Header 及请求参数等的访问。")]),e._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Mono")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n")])])])])])]),e._v(" "),s("li",[s("p",[e._v("RouterFunction")])])]),e._v(" "),s("h2",{attrs:{id:"spring-中的响应式编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-中的响应式编程"}},[e._v("#")]),e._v(" Spring 中的响应式编程")]),e._v(" "),s("p",[e._v("spring-web 模块提供底层基础设施和 HTTP 抽象"),s("small",[e._v("（客户端和服务器）")]),e._v("，以构建响应式 Web 应用程序。所有的公共 API 都是围绕 Reactive Streams"),s("small",[e._v("（以 Reactor 作为核心）")]),e._v("来实现的。")]),e._v(" "),s("h3",{attrs:{id:"httphandler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httphandler"}},[e._v("#")]),e._v(" HttpHandler")]),e._v(" "),s("p",[e._v("每个 HTTP 服务器都有一些用于 HTTP 请求处理的 API 。HttpHandler 是一种处理请求和响应的简单契约。")]),e._v(" "),s("p",[e._v("spring-web 模块包含适用于每个受支持服务器的适配器：")]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("o.s.b.web.embedded.netty.NettyWebServer  : Netty started on port(s): 8080\n")])])]),s("hr"),e._v(" "),s("p",[e._v("Spring-Webflux与Thymeleaf整合（Could not resolve view with name 'xxxx'）")]),e._v(" "),s("p",[e._v("在 ServerResponseResultHandler做结果处理时会使用ViewResolverRegistry中注册的视图解析器，但是这个地方debug发现视图解析器是0个。")]),e._v(" "),s("p",[e._v("https://blog.csdn.net/fly_leopard/article/details/88355349")]),e._v(" "),s("p",[e._v("@Configuration\n//@EnableWebFlux\npublic class WebFluxConfig implements WebFluxConfigurer {")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("@Autowired  // 引入spring-boot-starter-thymeleaf自动会注入该bean\nprivate ThymeleafReactiveViewResolver thymeleafReactiveViewResolver;\n\n/**\n * 加入thymeleaf试图解析器，不然找不到view name\n */\n@Override\npublic void configureViewResolvers(ViewResolverRegistry registry) {\n    registry.viewResolver(thymeleafReactiveViewResolver);\n}\n")])])]),s("p",[e._v("}")])])}),[],!1,null,null,null);t.default=n.exports}}]);