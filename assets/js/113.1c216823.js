(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{491:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"如何正确使用-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何正确使用-optional"}},[t._v("#")]),t._v(" 如何正确使用 Optional")]),t._v(" "),a("p",[t._v("Java 8 增加了一些很有用的 API，其中一个就是 Optional。目的是从 JDK 级别解决 NPE 问题。大多数新语言都从语法层面上解决了 NPE 问题。")]),t._v(" "),a("p",[t._v("你『"),a("strong",[t._v("不应该")]),t._v("』以如下方式使用 Optional：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("调用它的 "),a("strong",[t._v("isPresent")]),t._v(" 方法")])]),t._v(" "),a("li",[a("p",[t._v("调用它的 "),a("strong",[t._v("get")]),t._v(" 方法")])]),t._v(" "),a("li",[a("p",[t._v("用 Optional 类型作为类/实例属性")])]),t._v(" "),a("li",[a("p",[t._v("用 Optional 类型作为方法参数")])])]),t._v(" "),a("p",[t._v("一句话小结: 使用 Optional 时尽量不要直接调用 Optional 的 "),a("strong",[t._v("get")]),t._v(" 方法, Optional 的 "),a("strong",[t._v("isPresent")]),t._v(" 方法更应该被视为一个私有方法。")]),t._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("p",[t._v("Optional 的 3 种构造方式:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("明确的 "),a("strong",[t._v("Optional.empty()")])]),t._v(" "),a("p",[t._v("它是用来构造一个 Optional 空容器。实际上使用它的机会几乎没有。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Optional.of(obj)")])]),t._v(" "),a("p",[t._v("它要求传入的 obj 不能是 null 值的, 否则还没开始进入角色就倒在了 NullPointerException 异常上了。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Optional.ofNullable(obj)")])]),t._v(" "),a("p",[t._v("它以更智能、宽容的方式来构造一个 Optional 实例，来者不拒。传 null 进到就等价于调用 "),a("code",[t._v("Optional.empty()")]),t._v(", 非 null 就等价于调用 "),a("code",[t._v("Optional.of(obj)")]),t._v(" 。")])])]),t._v(" "),a("p",[t._v("使用 "),a("strong",[t._v("Optional.of(obj)")]),t._v(" 来构造 Optional 实例的场景：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("当我们非常的明确将要传给 "),a("code",[t._v("Optional.of(obj)")]),t._v(" 的 obj 参数不可能为 null 时, 比如它是一个刚 new 出来的对象（例如，"),a("code",[t._v("Optional.of(new User(...))")]),t._v("）, 或者是一个非 null 常量时;")])]),t._v(" "),a("li",[a("p",[t._v("逻辑上 obj 明确不允许为 null 。一旦为 null ，立即报错，抛出 NPE 。不允许接续执行。")])])]),t._v(" "),a("p",[t._v("那怎么去使用一个已有的 Optional 实例？假定我们有一个实例 Optional<User> user。"),a("strong",[t._v("应避免 if(user.isPresent()) { ... } else { ... } 的方式进行应用")]),t._v("。")]),t._v(" "),a("p",[t._v("存在即返回, 无则提供默认值：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orElse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orElse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UNKNOWN_USER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("存在即返回, 无则由函数来产生：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orElseGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchAUserFromDatabase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("p",[t._v("存在才对它做点什么：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifPresent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 而不要下边那样\nif (user.isPresent()) {\n  System.out.println(user.get());\n}\n*/")]),t._v("\n")])])]),a("h2",{attrs:{id:"map-函数隆重登场"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-函数隆重登场"}},[t._v("#")]),t._v(" map 函数隆重登场")]),t._v(" "),a("p",[t._v("当 "),a("strong",[t._v("user.isPresent()")]),t._v(" 为真, 获得它关联的 orders, 为假则返回一个空集合时, 我们用上面的 "),a("strong",[t._v("orElse()")]),t._v(", "),a("strong",[t._v("orElseGet()")]),t._v(" 方法都乏力时, 那原本就是 "),a("strong",[t._v("map")]),t._v(" 函数的责任, 我们可以这样一行：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOrders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orElse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emptyList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 上面避免了我们类似 Java 8 之前的做法\nif(user.isPresent()) {\n  return user.get().getOrders();\n} else {\n  return Collections.emptyList();\n}\n*/")]),t._v("\n")])])]),a("p",[t._v("map  是可能无限级联的, 比如再深一层, 获得用户名的大写形式")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUsername")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orElse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这要搁在以前, 每一级调用的展开都需要放一个 null 值的判断")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUsername")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"optional-的使用场景和使用原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-的使用场景和使用原则"}},[t._v("#")]),t._v(" Optional 的使用场景和使用原则")]),t._v(" "),a("p",[t._v("Optional 通常（只应该）出现在方法的返回值类型部分。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Optional")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Department")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectDepartmentByPrimaryKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("Optional<Department>")]),t._v(" 和 "),a("code",[t._v("Department")]),t._v(" 两种不同类型的返回值，代表着方法的作者对方法的使用者的两种『暗示』和『约定』：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("Department")]),t._v(" 类型的返回值")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("由方法的作者确保该方法 "),a("strong",[t._v("一定会/必须要")]),t._v(" 返回一个非空的 Department 对象。方法的使用者无须判断/担心该方法的返回值为 null 的问题。")])]),t._v(" "),a("li",[a("p",[t._v("即便是出现了返回 null 的问题，责任在方法的作者一方，由他负责修改/调整代码，务必确保该方法返回值为非空。")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Optional<Department>")]),t._v(" 类型的返回值")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("方法的作者在暗示使用者，本方法的返回值 Optional 容器中存放的 Department 对象可能存在，也可能不存在（为 Null）。逻辑上，相当于本方法的返回值有两种可能。")])]),t._v(" "),a("li",[a("p",[t._v("由方法的使用者，在从 Optional 中取出 Department 对象时来判断-处理有可能为 null 的情况。")])]),t._v(" "),a("li",[a("p",[t._v("此时，方法的使用者，必须通过 "),a("code",[t._v(".orElseGet()")]),t._v(" 或 "),a("code",[t._v(".orElseThrow()")]),t._v(" 方法从 Optional 中取值（一定不要使用 "),a("code",[t._v("get()")]),t._v(" 方法从中取 Department 。")])])])])]),t._v(" "),a("p",[t._v("简而言之，"),a("code",[t._v("Optional<T>")]),t._v(" 类型的返回值，就是在强迫你思考："),a("strong",[t._v("这个方法的返回值有可能是 NULL，接下来你需要对这种情况作出处理（给它个默认值，或者抛出异常）")]),t._v(" 。")])])}),[],!1,null,null,null);s.default=e.exports}}]);