(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{679:function(t,a,s){"use strict";s.r(a);var n=s(47),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"转发和重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转发和重定向"}},[t._v("#")]),t._v(" 转发和重定向")]),t._v(" "),s("h2",{attrs:{id:"view-resolver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view-resolver"}},[t._v("#")]),t._v(" View Resolver")]),t._v(" "),s("p",[t._v("Spring MVC 中的视图解析器"),s("small",[t._v("（View Resolver）")]),t._v("负责解析视图。可以通过在配置文件中定义一个 View Resolver 来配置视图解析器：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("配置文件版：spring-web.xml")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- for jsp --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.springframework.web.servlet.view.InternalResourceViewResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prefix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/WEB-INF/jsp/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("suffix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(".jsp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("代码配置版：SpringWebConfig.java")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InternalResourceViewResolver")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("internalResourceViewResolver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InternalResourceViewResolver")]),t._v(" viewResolver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InternalResourceViewResolver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    viewResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPrefix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/WEB-INF/jsp/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    viewResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSuffix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".jsp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" viewResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("对于一个已知的『"),s("strong",[t._v("逻辑视图名")]),t._v("』，"),s("strong",[t._v("DispatcherServlet")]),t._v(" 会将请求转发到 "),s("code",[t._v("prefix + view_name + suffix")]),t._v(" 的页面。")]),t._v(" "),s("p",[t._v("补充："),s("strong",[t._v("InternalResourceViewResolver")]),t._v(" 是最常用的视图解析器"),s("small",[t._v("（用于 .jsp 场景)")]),t._v("，但不是唯一的一个，Spring MVC 还有其他的视图解析器，例如："),s("strong",[t._v("ThymeleafViewResolver")]),t._v(" 。")]),t._v(" "),s("h2",{attrs:{id:"model-和-modelandview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-和-modelandview"}},[t._v("#")]),t._v(" Model 和 ModelAndView")]),t._v(" "),s("p",[t._v("Spring MVC 提供了一个 "),s("strong",[t._v("Model")]),t._v(" 接口，它功能类似于 "),s("em",[t._v("java.util.Map")]),t._v(" 接口。"),s("strong",[t._v("ModelMap")]),t._v(" 是 "),s("strong",[t._v("Model")]),t._v(" 接口的实现类。")]),t._v(" "),s("p",[t._v("如果 "),s("em",[t._v("Controller")]),t._v(" 的处理方法中有 "),s("em",[t._v("Model")]),t._v(" 或 "),s("em",[t._v("ModeMap")]),t._v(" 作为参数，那么 Spring MVC 会"),s("small",[t._v("（在 Controller 方法外）")]),t._v("创建 "),s("em",[t._v("ModelMap")]),t._v(" 对象，并传入 "),s("em",[t._v("Controller")]),t._v(" 方法。"),s("em",[t._v("ModelMap")]),t._v(" 对象将作为模型数据的存储容器。")]),t._v(" "),s("blockquote",[s("p",[t._v("ModelMap 对象起到的就是一个『"),s("strong",[t._v("结果参数")]),t._v("』的作用。")])]),t._v(" "),s("p",[t._v("在 "),s("em",[t._v("Controller")]),t._v(" 方法中，我们可以从 "),s("em",[t._v("ModelMap")]),t._v(" 对象中，存、取数据。")]),t._v(" "),s("p",[t._v("如果处理方法的返回结果是 "),s("em",[t._v("ModelAndView")]),t._v(" ，则其既包含模型数据信息，也包含视图信息。")]),t._v(" "),s("p",[t._v("在 JSP 页面，可以直接通过 EL 表达式从模型对象中，取出模型数据以供页面展示。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Servlet 3.0 以下版本 EL 表达式功能默认时关闭的，记得要打开它。")])]),t._v(" "),s("h2",{attrs:{id:"转发、重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转发、重定向"}},[t._v("#")]),t._v(" 转发、重定向")]),t._v(" "),s("p",[t._v("如果你的 Controller 的『下一步』是跳转页面显示，那么你只需要在请求处理方法中返回逻辑视图名即可。")]),t._v(" "),s("p",[t._v("如果你的『下一步』操作是触发另一个 "),s("strong",[t._v(".do")]),s("small",[t._v("（或其它什么后缀）")]),t._v("，那么你需要使用转发和重定向。")]),t._v(" "),s("p",[t._v("Spring MVC 中实现转发和重定向非常简单：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("转发")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意，")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forward:<url>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 或 */")]),t._v("\nmav"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setViewName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forward:<url>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mav"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("重定向")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redirect:<url>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 或 */")]),t._v("\nmav"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setViewName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redirect:<url>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mav"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("这里有 2 点注意：")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("forward:")]),t._v(" 和 "),s("strong",[t._v("redirect:")]),t._v(" 后的 "),s("strong",[s("code",[t._v(":")])]),t._v(" 后面没有空格。")])]),t._v(" "),s("li",[s("p",[t._v("这里的 "),s("strong",[t._v("<url>")]),t._v(" 是『"),s("strong",[t._v("方法映射路径")]),t._v("』，即 "),s("strong",[t._v(".do")]),t._v(" 一类，也就是你的另一个 "),s("strong",[t._v("@Controller")]),t._v(" 中的某个 "),s("strong",[t._v("@RequestMapping")]),t._v(" 中的那个值，"),s("small",[t._v("而不是逻辑视图名")]),t._v("。")])])]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forward:/department/main.do"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("hr"),t._v(" "),s("p",[t._v("注意，"),s("code",[t._v('return "main";')]),t._v(" 和 "),s("code",[t._v('return "forward:/main-page";')]),t._v(" 的最终执行的『效果』是一样的，但是执行的过程，走过的『路径』并不同。")]),t._v(" "),s("h2",{attrs:{id:"跳转异常页面-了解、自学"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跳转异常页面-了解、自学"}},[t._v("#")]),t._v(" 跳转异常页面（了解、自学）")]),t._v(" "),s("p",[s("strong",[t._v("全局异常处理后续专项讲解")])]),t._v(" "),s("p",[t._v("在 Webapp 中，一旦发生了异常可以层层上抛，直到抛给 Spring MVC 的 "),s("strong",[t._v("DispacherServlet")]),t._v(" 。而 "),s("strong",[t._v("DispacherServlet")]),t._v(" 可以根据开发者所配置的配置一个『"),s("strong",[t._v("全局异常处理器")]),t._v("』，来决定跳转哪个页面，展示何种信息。")]),t._v(" "),s("p",[t._v("默认情况下，Spring MVC 所使用的异常处理器是："),s("strong",[t._v("SimpleMappingExceptionResolver")]),t._v(" "),s("small",[t._v("（它是注解驱动帮我们配出来的那 19 个 JavaBean 之一）")]),t._v("，它所处理的效果正是我们当前所看到的内容：在一个临时页面上显示异常堆栈信息。")]),t._v(" "),s("p",[t._v("自定义的异常处理器需要实现 Spring MVC 提供的 "),s("strong",[t._v("HandlerExceptionResolver")]),t._v(" 接口，在其中 "),s("strong",[t._v(".resolveException")]),t._v(" 方法中可以根据自定义的逻辑返回 "),s("strong",[t._v("ModelAndView")]),t._v(" 对象，以决定跳转页面和展示信息。")]),t._v(" "),s("p",[t._v("使用自定义的异常处理器，需要在 Spring MVC 配置文件中做出配置：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("customHandleException"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.hemiao.web.exception.MyHandlerExceptionResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);