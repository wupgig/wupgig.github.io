(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{741:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"guava-对-java-集合框架的补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guava-对-java-集合框架的补充"}},[t._v("#")]),t._v(" Guava 对 Java 集合框架的补充")]),t._v(" "),a("p",[t._v("Guava 的不仅仅提供了集合工具类，还提供了几种新的集合类型：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("  新集合 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 说明 \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Multiset")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 一个扩展来设置界面，允许重复的元素。\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Multimap")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 一个扩展来映射接口，以便其键可一次被映射到多个值。\n   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BiMap")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 一个扩展来映射接口，支持反向操作。\n   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 表代表一个特殊的图，其中两个键可以在组合的方式被指定为单个值。\n")])])]),a("h2",{attrs:{id:"multiset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiset"}},[t._v("#")]),t._v(" Multiset")]),t._v(" "),a("p",[a("strong",[t._v("Multiset")]),t._v(" 接口是对 Set 接口的功能扩展，其中它允许在其中存放多个重复的对象。")]),t._v(" "),a("p",[t._v("首先需要明确的是，"),a("strong",[t._v("MultiSet")]),t._v(" 接口虽然在功能/逻辑上是扩展了 Set 接口，但是『"),a("strong",[t._v("它继承的是 Collection 接口，而不是 Set 接口")]),t._v("』。")]),t._v(" "),a("p",[t._v("Multiset 的常用实现类有："),a("strong",[t._v("HashMultiset")]),t._v(" 和 "),a("strong",[t._v("TreeMultiset")]),t._v(" 。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加一个出现的指定元素这个 multiset 。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 增加大量的元素到这个 multiset 。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" occurrences"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确定此 multiset 是否包含指定的元素 。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 true，如果这个 multiset 至少包含一个出现的指定集合中的所有元素。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" elements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回出现的元素的在该 multiset 的数目（元素的数量）。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回集包含在此 multiset 不同的元素。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("elementSet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回此 multiset 的内容的视图，分组在 Multiset.Entry 实例中，每一个都提供了 multiset 的一个元素和元素的计数。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Multiset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("entrySet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比较指定对象与此 multiset 是否相等。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回此 multiset 的哈希码。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hashCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回一个迭代在这个集合中的元素。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterator")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除此 multiset 的单个出现的指定元素，如果存在。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除了一些出现，从该 multiset 的指定元素。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" occurrences"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除所有这一切都包含在指定集合<small>（可选操作）</small>在此集合的元素。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保持那些包含在指定 collection<small>（可选操作）</small>在此集合中的元素。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("retainAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  添加或删除，使得该元素达到所期望的计数的元件的必要出现。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有条件设置元素的计数为一个新值，如在 setCount(对象，INT) 中所述，条件是该元素预期的当前计数。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" oldCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" newCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回该对象的字符串表示。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"multimap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multimap"}},[t._v("#")]),t._v(" Multimap")]),t._v(" "),a("p",[t._v("Multimap 是多重映射接口扩展映射，使得其键一次可被映射到多个值。")]),t._v(" "),a("p",[t._v("需要首先明确的一点是，Multimap 虽然叫 Map 但是它没有继承任何集合框架中的接口。")]),t._v(" "),a("p",[t._v("Multimap 接口的实现类有：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("#")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("ArrayListMultimap")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("key 的行为类似 HashMap，value 的行为类似 ArrayList 。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("HashMultimap")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("key 的行为类似 HashMap，value 的行为类似 HashSet 。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("TreeMultimap")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("key 的行为类似 TreeMap，value 的行为类似 TreeSet。")])])])]),t._v(" "),a("p",[t._v("常用方法：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回此multimap中的视图，从每个不同的键在键的关联值的非空集合映射。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将删除所有multimap中的键值对，留下空。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 true 如果此多重映射包含至少一个键值对，键键和值 value。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsEntry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 true，如果这个 multimap 中至少包含一个键值对的键 key。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回true，如果这个multimap至少包含一个键值对的值值。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回包含在此multimap中，为Map.Entry的情况下，所有的键 - 值对的视图集合。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("entries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比较指定对象与此多重映射是否相等。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回，如果有的话，在这个multimap中键关联的值的视图集合。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回此多重映射的哈希码。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hashCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 true，如果这个multimap中未包含键 - 值对。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回一个视图集合包含从每个键值对这个multimap中的关键，没有折叠重复。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Multiset")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns a view collection of all distinct keys contained in this multimap.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keySet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储键-值对在这个 multimap 中。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储一个键 - 值对在此multimap中的每个值，都使用相同的键 key。 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterable")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储了所有键 - 值对多重映射在这个multimap中，通过返回 multimap.entries() 的顺序. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Multimap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" multimap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除一个键 - 值对用键键，并从该多重映射的值的值，如果这样的存在。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除与键键关联的所有值。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储与相同的键值，替换任何现有值的键的集合。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceValues")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterable")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回此多重映射键 - 值对的数量。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回一个视图集合包含从包含在该 multimap 中的每个键值对的值，而不发生重复 (values().size() == size()) ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"bimap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bimap"}},[t._v("#")]),t._v(" BiMap")]),t._v(" "),a("p",[t._v("BiMap 是一种特殊的映射其保持映射，同时确保没有重复的值是存在于该映射和一个值可以安全地用于获取键背面的倒数映射。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("可以用 "),a("em",[t._v("inverse()")]),t._v(" 反转 "),a("strong",[t._v("BiMap<K, V>")]),t._v(" 的键值映射")])]),t._v(" "),a("li",[a("p",[t._v("保证值是唯一的，因此 "),a("em",[t._v("values()")]),t._v(" 返回 Set 而不是普通的 Collection")])])]),t._v(" "),a("p",[t._v("BiMap 继承自 Map 接口。常用的实现类有：")]),t._v(" "),a("ul",[a("li",[t._v("HashBiMap")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"right"}},[t._v("方法")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("V forcePut(K key, V value)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("另一种 put的 形式是默认删除，在 put(K, V) 运行前的任何现有条目值。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("BiMap<V, K> inverse()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回此 bimap， 每一个 bimap 的值映射到其相关联的键的逆视图。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("V put(K key, V value)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("关联指定值与此映射中（可选操作）指定的键。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("void putAll(Map<? extends K,? extends V> map)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将所有从指定映射此映射（可选操作）的映射。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("Set<V> values()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回此映射中包含 Collection 的值视图。")])])])]),t._v(" "),a("h2",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),a("p",[t._v("Table 代表一个特殊的映射，必须提供两个键才找到一个对应的值。它类似于创建映射的映射。")]),t._v(" "),a("p",[t._v("Table 接口没有继承任何接口，常用的实现类有：")]),t._v(" "),a("ul",[a("li",[t._v("ArrayTable")]),t._v(" "),a("li",[t._v("HashBasedTable")]),t._v(" "),a("li",[t._v("TreeBasedTable")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"right"}},[t._v("方法")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("Set<Table.Cell<R,C,V>> cellSet()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回集合中的所有行键/列键/值三元组。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("void clear()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("从表中删除所有映射。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("Map<R,V> column(C columnKey)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回在给定列键的所有映射的视图。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("Set<C> columnKeySet()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回一组具有表中的一个或多个值的列键。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("Map<C,Map<R,V>> columnMap()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回关联的每一列键与行键对应的映射值的视图。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("boolean contains(Object rowKey, Object columnKey)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回 true，如果表中包含与指定的行和列键的映射。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("boolean containsColumn(Object columnKey)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回 true，如果表中包含与指定列的映射。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("boolean containsRow(Object rowKey)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回 true，如果表中包含与指定的行键的映射关系。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("boolean containsValue(Object value)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回 true，如果表中包含具有指定值的映射。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("boolean equals(Object obj)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("比较指定对象与此表是否相等。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("V get(Object rowKey, Object columnKey)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回对应于给定的行和列键，如果没有这样的映射存在值，返回 null。"),a("br"),t._v(" 返回此表中的哈希码。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("boolean isEmpty()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回true，如果表中没有映射。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("V put(R rowKey, C columnKey, V value)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("关联指定值与指定键。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("void putAll(Table<? extends R,? extends C,? extends V> table)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("复制从指定的表中的所有映射到这个表。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("V remove(Object rowKey, Object columnKey)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果有的话，使用给定键相关联删除的映射。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("Map<C,V> row(R rowKey)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回包含给定行键的所有映射的视图。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("Set<R> rowKeySet()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回一组行键具有在表中的一个或多个值。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("Map<R, Map<C,V>> rowMap()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回关联的每一行按键与键列对应的映射值的视图。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("int size()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回行键/列键/表中的值映射关系的数量。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("Collection<V> values()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回所有值，其中可能包含重复的集合。")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);