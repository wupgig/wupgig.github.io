(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{694:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spring-security-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-security-注解"}},[t._v("#")]),t._v(" Spring Security 注解")]),t._v(" "),a("h2",{attrs:{id:"_1-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-注解"}},[t._v("#")]),t._v(" 1. 注解")]),t._v(" "),a("p",[a("strong",[t._v("Spring Security 默认是禁用注解的")]),a("small",[t._v("（讨厌）")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("这是非常操蛋的第三点。")])]),t._v(" "),a("p",[t._v("要想开启注解功能需要在配置类上加入 "),a("strong",[t._v("@EnableMethodSecurity")]),t._v(" 注解来判断用户对某个控制层的方法是否具有访问权限。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableGlobalMethodSecurity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prePostEnabled "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebSecurityConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebSecurityConfigurerAdapter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Spring Security 支持三套注解：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("#")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("注解")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("jsr250 注解")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("@DenyAll")]),t._v("、"),a("strong",[t._v("@PermitAll")]),t._v("、"),a("strong",[t._v("@RolesAllowed")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("secured 注解")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("@Secured")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prePost 注解")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("@PreAuthorize")]),t._v("、"),a("strong",[t._v("@PostAuthorize")])])])])]),t._v(" "),a("p",[t._v("通常按照惯例：")]),t._v(" "),a("ul",[a("li",[t._v("基于『角色』的鉴权，可以使用 jsr250 注解；")]),t._v(" "),a("li",[t._v("基于『权限』的鉴权，可以使用 prePost 注解。")])]),t._v(" "),a("h2",{attrs:{id:"_2-jsr-250-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-jsr-250-注解"}},[t._v("#")]),t._v(" 2. JSR-250 注解")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RolesAllowed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USER"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里可以省略前缀 ROLE_，但是数据库中的角色信息必须以 ROLE_ 开头")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/user-can-do"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user can do"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RolesAllowed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USER"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ADMIN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/admin-can-do"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("admin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin can do"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("@DenyAll")]),t._v("、"),a("strong",[t._v("@PermitAll")]),t._v("、"),a("strong",[t._v("@RolesAllowed")]),t._v(" 三个注解的功能显而易见。")]),t._v(" "),a("p",[t._v("不过有一个容易误解的地方: "),a("code",[t._v(".permitAll()")]),t._v(" 和 "),a("code",[t._v(".anonymous()")]),t._v(" 的区别：")]),t._v(" "),a("p",[t._v("Spring Security 为了统一，给「"),a("strong",[t._v("未登录")]),t._v("」的用户赋予了一个角色："),a("strong",[t._v("匿名用户")]),t._v(" 。")]),t._v(" "),a("p",[t._v("配置类中的配置 "),a("code",[t._v('.antMatchers("/anonCanDo").anonymous()')]),t._v(" 表示匿名用户可访问，自然也就是用户不需要登录认证即可访问该 URI 。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("一旦用户经过登陆后，其身份无论在是什么，他都不再是匿名用户了，即，它失去了匿名用户这个身份。此时，如果他再去访问匿名用户可登陆的 URI 反而是显示没有权限！")]),t._v(" "),a("p",[t._v("不过，这里不用太大惊小怪，因为 Shiro 也是这样。")])]),t._v(" "),a("p",[a("code",[t._v('.antMatchers("/", "/users").permitAll()')]),t._v(" 就没有这个问题。它是指无论是否登陆，登陆后无论是什么身份都能访问。"),a("strong",[t._v("所以，你心里想要表达的『匿名用户也可以访问』大概率是指 "),a("code",[t._v(".permitAll()")]),t._v("，而非 "),a("code",[t._v(".anonymous()")]),t._v(" 。")])]),t._v(" "),a("h2",{attrs:{id:"_3-secured-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-secured-注解"}},[t._v("#")]),t._v(" 3. Secured 注解")]),t._v(" "),a("p",[a("strong",[t._v("@Secured")]),t._v(" 注解是 jsr250 标准出现之前，Spring Security 框架自己定义的注解。")]),t._v(" "),a("p",[t._v("@Secured 标注于方法上，表示只有具有它所指定的角色的用户才可以调用该方法。如果当前用户不具备所要求的角色，那么，将会抛出 "),a("strong",[t._v("AccessDenied")]),t._v(" 异常。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// @Secured("IS_AUTHENTICATED_ANONYMOUSLY")')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// @Secured("ADMIN")')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Secured")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USER"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ADMIN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里可以省略前缀 ROLE_")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("admin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_4-prepost-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-prepost-注解"}},[t._v("#")]),t._v(" 4. PrePost 注解")]),t._v(" "),a("p",[t._v("PrePost 注解也是 jsr250 标准出现之前，Spring Security 框架自己定义的注解。")]),t._v(" "),a("p",[t._v("PrePost 注解的功能比 Secured 注解的功能更强大，它可以通过使用 Spring EL 来表达具有逻辑判断的校验规则。")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("@PreAuthorize")]),t._v(" 注解：适合进入方法前的权限验证；")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("@PostAuthorize")]),t._v(" 注解：使用并不多，在方法执行后再进行权限验证。")])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PreAuthorize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"hasAuthority('ADMIN')\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里可以省略前缀 ROLE_")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("admin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样只要拥有角色 ADMIN 的用户才可以访问此方法。")])])}),[],!1,null,null,null);s.default=e.exports}}]);