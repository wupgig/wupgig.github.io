(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{762:function(s,t,a){"use strict";a.r(t);var n=a(47),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"spring-resolvabletype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-resolvabletype"}},[s._v("#")]),s._v(" Spring ResolvableType")]),s._v(" "),a("blockquote",[a("p",[s._v("ResolveableType 与 Java 的 Type 类型体系密切相关。请先了解另一篇笔记《虚拟机中的泛型类型信息》 的内容。")])]),s._v(" "),a("h2",{attrs:{id:"类型擦除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型擦除"}},[s._v("#")]),s._v(" 类型擦除")]),s._v(" "),a("p",[s._v("由于类型擦除，当你在实例化泛型对象时，泛型的信息会受影响，被擦除"),a("small",[s._v("（替换为 Object 等）")]),s._v("。例如：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" stringList "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("上述代码中的 "),a("strong",[s._v("stringList")]),s._v(" 的泛型类型 "),a("strong",[s._v("String")]),s._v(" 会被擦除，变量 "),a("strong",[s._v("stringList")]),s._v(" 的实际类型会变为 "),a("strong",[s._v("ArrayList")]),s._v("，而非 "),a("strong",[s._v("ArrayList<String>")]),s._v(" 。")]),s._v(" "),a("p",[s._v("但是好消息是，"),a("strong",[s._v("类型擦除只影响被实例化的类型参数，如果你使用在类定义中，泛型信息会被保留，在运行时可用")]),s._v("。例如：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringList")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringList")]),s._v(" stringList "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("当你去使用 "),a("em",[s._v("StringList")]),s._v(" 类型时，这里的 "),a("em",[s._v("String")]),s._v(" 信息你是可以通过反射机制获取到的。")]),s._v(" "),a("h2",{attrs:{id:"resolvabletype-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolvabletype-简介"}},[s._v("#")]),s._v(" ResolvableType 简介")]),s._v(" "),a("p",[a("strong",[s._v("ResolvableType")]),s._v(" 是 Spring "),a("strong",[s._v("4.0")]),s._v(" 的 feature 之一。")]),s._v(" "),a("p",[s._v("ResolvableType 为 java Type 体系中的所有类型提供了统一的数据结构以及 API 。")]),s._v(" "),a("p",[s._v("逻辑上，ResolvableType 就是一种特殊的容器，它可以用来包装 Type 类型"),a("small",[s._v("（Class、ParameterizedType、TypeVariable、WildcardType、GenericArrayType）")]),s._v("的数据类型的数据。")]),s._v(" "),a("p",[s._v("这样，你是"),a("strong",[s._v("直接操作")]),s._v(" ResolvableType，而"),a("strong",[s._v("间接操作")]),s._v(" Class、ParameterizedType、TypeVariable 等类型的数据。好处是无论 ResovableType 中封装的是何种 Type 类型， ResolvableType 有统一 API，且更简便好用。")]),s._v(" "),a("h2",{attrs:{id:"简单使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单使用"}},[s._v("#")]),s._v(" 简单使用")]),s._v(" "),a("p",[s._v("以 Class 类型为例，用 ResolvableType 包装 Class 类型的常见方式有：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 其实本质上是一样的")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResolvableType")]),s._v(" type1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResolvableType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResolvableType")]),s._v(" type2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResolvableType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResolvableType")]),s._v(" type3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResolvableType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResolvableType")]),s._v(" type4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResolvableType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("于此同时，ResolvableType 还提供了一个 "),a("strong",[a("code",[s._v(".resolve()")])]),s._v(" 方法，用于反向从 type 对象再反向求出其封装的 Class 对象。")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" clazz1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" type1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// class java.lang.String")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" clazz2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" type2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// class java.lang.String")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" clazz3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" type3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// class java.lang.Integer")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" clazz4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" type4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// class java.util.ArrayList")]),s._v("\n")])])]),a("p",[s._v("借助于这个 "),a("strong",[s._v("ResolvabType")]),s._v(" 对象，可以很方便地求出它"),a("small",[s._v("（"),a("code",[s._v("String.class")]),s._v("）")]),s._v("的直接父类类型、接口类型、泛型参数类型等类型有关信息。")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSuperType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInterfaces")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("需要注意的是这些方法的返回值的类型，仍然是 "),a("strong",[s._v("ResolvableType")]),s._v(" 类型"),a("small",[s._v("（或 "),a("strong",[s._v("ResolvableType")]),s._v(" 类型的数组）")]),s._v("。")]),s._v(" "),a("dl",[a("dt",[s._v("包装域的类型")]),s._v(" "),a("dd",[a("em",[s._v("forField(Field field);")])]),s._v(" "),a("dt",[s._v("包装方法形参的类型")]),s._v(" "),a("dd",[a("em",[s._v("forMethodParameter(Method method, int parameterIndex)")])]),s._v(" "),a("dt",[s._v("包装方法的返回值类型")]),s._v(" "),a("dd",[a("em",[s._v("forMethodReturnType(Method method);")])]),s._v(" "),a("dt",[s._v("等等")]),s._v(" "),a("dd")]),s._v(" "),a("h2",{attrs:{id:"在泛型中的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在泛型中的使用"}},[s._v("#")]),s._v(" 在泛型中的使用")]),s._v(" "),a("p",[s._v("还是曾经的一个例子：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringArrayList")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("在泛型和反射中，我们最常见的需求就是要去【"),a("strong",[s._v("求")]),s._v("】出某个类的父类的泛型实参"),a("small",[s._v("（ActualTypeArguments）")]),s._v("。")]),s._v(" "),a("p",[s._v("通过 ResolvableType 实现这个需求就非常容易了：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResolvableType")]),s._v(" resolvableType "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResolvableType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringArrayList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" resolvableType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSuperType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getGenerics")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);