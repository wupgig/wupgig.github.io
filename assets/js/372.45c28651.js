(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{739:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"集合工具类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合工具类"}},[t._v("#")]),t._v(" 集合工具类")]),t._v(" "),a("p",[t._v("guava 的『想法』：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("对于选择存放对象"),a("small",[t._v("（的引用）")]),t._v("的容器而言，guava 更偏爱、推荐使用集合，而非数组；")])]),t._v(" "),a("li",[a("p",[t._v("对集合的各种操作，guava 又推荐通过『"),a("strong",[t._v("迭代器")]),t._v("』来完成，而非循环遍历。")])])]),t._v(" "),a("p",[t._v("对于集合的常见操作有：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("#")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("操作")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("方法")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("判空")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Iterables.isEmpty")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("批量添加元素")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Iterables.addAll")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选中/选出某些元素")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Iterables.filter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("剃除某些元素")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Iterables.filter 间接实现")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("形变")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Iterables.transform")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("比较")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Iterables.elementsEqual")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("Guava 中的集合的工具方法大多存在于 "),a("strong",[t._v("Iterables")]),t._v(" 工具类中，显而易见它是 for "),a("strong",[t._v("Iterable")]),t._v(" 的。注意，是 Iterable，而非 Iterator 。Iterable 是 Collection 接口的父接口。")])]),t._v(" "),a("h2",{attrs:{id:"判空"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判空"}},[t._v("#")]),t._v(" 判空")]),t._v(" "),a("p",[t._v("guava 在 "),a("em",[t._v("com.google.common.collect")]),t._v(" 包下提供了 "),a("strong",[t._v("Iterables")]),t._v(" 工具类。其中有一个 "),a("strong",[t._v(".isEmpty")]),t._v(" 方法，可用于对集合的判空：")]),t._v(" "),a("p",[t._v("伪代码如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterables")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 抛出异常\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterables")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterables")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),a("h2",{attrs:{id:"批量添加元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#批量添加元素"}},[t._v("#")]),t._v(" 批量添加元素")]),t._v(" "),a("p",[t._v("guava 在 "),a("em",[t._v("com.google.common.collect")]),t._v(" 包下提供了 "),a("strong",[t._v("Iterables")]),t._v(" 工具类。其中有一个 "),a("strong",[t._v(".addAll")]),t._v(" 方法，可用于对参数集合进行批量添加操作：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterables")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("em",[t._v(".addAll")]),t._v(" 之后，原集合"),a("small",[t._v("（第一个参数）")]),t._v("会发生变化。")]),t._v(" "),a("h2",{attrs:{id:"选中-选出某些元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选中-选出某些元素"}},[t._v("#")]),t._v(" 选中/选出某些元素")]),t._v(" "),a("p",[t._v("guava 在 "),a("em",[t._v("com.google.common.collect")]),t._v(" 包下提供了 "),a("strong",[t._v("Iterables")]),t._v(" 和 "),a("strong",[t._v("Collections2")]),t._v(" 工具类。")]),t._v(" "),a("p",[t._v("它们中都存在一个 "),a("strong",[t._v(".filter")]),t._v(" 方法用于从集合中『"),a("strong",[t._v("选出")]),t._v("』符合条件的元素。")]),t._v(" "),a("p",[t._v("伪代码如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果：{ 2, 4, 6, 8 }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterables")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果：{ 1, 3, 4, 7 }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("注意，这两个方法返回的是源集合的一个『"),a("strong",[t._v("视图")]),t._v("』"),a("small",[t._v("（View）")]),t._v("，符合第二个参数所表示的匹配规则的元素，会被添加进这个『"),a("strong",[t._v("视图")]),t._v("』中。")]),t._v(" "),a("p",[t._v("由于返回的是源集合的『"),a("strong",[t._v("视图")]),t._v("』，而非一个『"),a("strong",[t._v("真实集合")]),t._v("』，所以该方法的返回值有一些特殊/有趣的地方：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("由于返回的结果是源集合的一个视图而已，所以对其中一个的操作，会影响到另一个。")])]),t._v(" "),a("li",[a("p",[t._v("对返回的结果的操作，逻辑上仍然要满足之前的『"),a("strong",[t._v("匹配规则")]),t._v("』。")])])]),t._v(" "),a("p",[a("em",[t._v("IterableUtils")]),t._v(" 工具类的 "),a("strong",[t._v("find")]),t._v(" 可以可以实现 循环，查找、选中的功能，不过它只会返回第一个满足条件的元素。")]),t._v(" "),a("h2",{attrs:{id:"剃除某些元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#剃除某些元素"}},[t._v("#")]),t._v(" 剃除某些元素")]),t._v(" "),a("p",[t._v("实际上并没有专门的、直接的剔除方法。剔除集合中的某些元素是借助 "),a("strong",[t._v("Collections2")]),t._v(" 的 "),a("strong",[t._v(".filter")]),t._v(" 方法间接实现的。")]),t._v(" "),a("p",[t._v("由于返回的是源集合的一个视图，所以当我们操作返回结果时会影响到源集合，所以我们只需要对返回结果调用 "),a("strong",[t._v("clear")]),t._v(" 方法清除视图中的元素，即等同于从源集合中删除这些元素：")]),t._v(" "),a("p",[t._v("伪代码如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" oth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" input "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\noth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nlist "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("Iterables 中的 "),a("em",[t._v(".filter")]),t._v(" 无法实现该功能，因为它的返回结果是 Iterable，而 Iterable 中没有后续要使用到的 "),a("em",[t._v(".clear")]),t._v(" 方法。")])]),t._v(" "),a("h2",{attrs:{id:"形变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#形变"}},[t._v("#")]),t._v(" 形变")]),t._v(" "),a("p",[t._v("形变"),a("small",[t._v("（transform）")]),t._v("是指以一个集合作为『素材』生成另一个集合。")]),t._v(" "),a("p",[t._v("例如，『手头』有一个 Student 的集合，现在需要获得一个包含所有这些 Student 的 Name 的集合。")]),t._v(" "),a("p",[t._v("当然，所生成/返回的集合中的元素，一定是与源集合有逻辑上的关系的。")]),t._v(" "),a("p",[t._v("guava 在 "),a("em",[t._v("Iterables")]),t._v(" 中提供了 "),a("strong",[t._v(".transform")]),t._v(" 方法实现形变。伪代码如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterable")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterables")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" input "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nlist "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("em",[t._v(".transform")]),t._v(" 方法的第二个参数指明了形变规则，即，所生成集合中的元素的由来，也就是如何通过源集合中的元素生成结果集合中的元素。")]),t._v(" "),a("p",[t._v("由于 guava 的 "),a("em",[t._v(".transform")]),t._v(" "),a("small",[t._v("（包括上述的 "),a("em",[t._v(".filter")]),t._v(" 方法）")]),t._v("中采用了懒求值"),a("small",[t._v("（lazy-evaluated）")]),t._v("策略，所以为了防止『莫名其妙的错误』，通常可以再 "),a("em",[t._v(".transform")]),t._v(" 方法返回后，立即生成一个新的集合。")]),t._v(" "),a("blockquote",[a("p",[t._v("懒求值"),a("small",[t._v("（lazy-evaluated）")]),t._v("和立即求值"),a("small",[t._v("（eager-evaluated）")]),t._v("是两种不同的策略，本身没有好坏之分。")])]),t._v(" "),a("p",[t._v("Guava 的采用了 lazy-evaluated 策略；而 JDK 8 的 stream 则采用了 eager-evaluated 策略。")]),t._v(" "),a("p",[a("strong",[t._v("Collecions2")]),t._v(" 类和 "),a("strong",[t._v("Lists")]),t._v(" 类中也提供了 "),a("strong",[t._v("transform")]),t._v(" 方法，同能一样，也是参数类型和返回值类型不同。")]),t._v(" "),a("h2",{attrs:{id:"比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较"}},[t._v("#")]),t._v(" 比较")]),t._v(" "),a("p",[t._v("Guava 通过 "),a("strong",[t._v("Iterables")]),t._v(" 类提供了 "),a("strong",[t._v(".elementsEqual")]),t._v(" 方法用于比较两个容器。")]),t._v(" "),a("p",[t._v("实际上，在迭代器工具类 "),a("strong",[t._v("Iterators")]),t._v(" 中也有一个 "),a("strong",[t._v("elementsEqual")]),t._v(" 方法用于比较两个容器，只不过它所需的参数是两个迭代器类型。")])])}),[],!1,null,null,null);s.default=e.exports}}]);