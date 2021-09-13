(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{572:function(a,s,t){"use strict";t.r(s);var e=t(47),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"操作-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作-database"}},[a._v("#")]),a._v(" 操作 Database")]),a._v(" "),t("h2",{attrs:{id:"创建-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-database"}},[a._v("#")]),a._v(" 创建 Database")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("数据库名"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),t("p",[a._v("上面出现的 "),t("strong",[t("code",[a._v("<>")])]),a._v(" 表示此处内容由用户自定义。"),t("strong",[t("code",[a._v("<>")])]),a._v(" 本身并非 SQL 的内容的一部分。")])]),a._v(" "),t("h2",{attrs:{id:"删除-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除-database"}},[a._v("#")]),a._v(" 删除 Database")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("数据库名"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("IF")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXISTS")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("数据库名"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"创建-database-并指定默认字符集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-database-并指定默认字符集"}},[a._v("#")]),a._v(" 创建 Database 并指定默认字符集")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("数据库名"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CHARACTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" utf8mb4 \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COLLATE")]),a._v(" utf8mb4_unicode_ci"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("注意")]),a._v("：因为历史原因，MySQL 中的 "),t("strong",[t("code",[a._v("utf8")])]),a._v(" 并非标准意义上的 utf8 字符编码，"),t("strong",[t("code",[a._v("utf8mb4")])]),a._v(" 才是。"),t("small",[t("code",[a._v("utf8")]),a._v(" 实际上是 "),t("code",[a._v("utf8mb3")]),a._v(" 的一个别名。")])]),a._v(" "),t("p",[t("em",[t("code",[a._v("utf8mb3")])]),a._v(" 存储一个文字时，最多占 3 个字节，而 "),t("em",[t("code",[a._v("utf8mb4")])]),a._v(" 最多可占 4 个字节。所以，如果遇到特别特别生僻的中日韩文字时，"),t("em",[t("code",[a._v("utf8mb3")])]),a._v(" 可能仍会出现乱码问题。")]),a._v(" "),t("h2",{attrs:{id:"数据库引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库引擎"}},[a._v("#")]),a._v(" 数据库引擎")]),a._v(" "),t("p",[a._v("『数据库引擎』是数据库管理系统（DBMS）的底层组件和核心组件，DBMS 就靠它进行创建、查询、更新 和 删除数据操作。")]),a._v(" "),t("p",[a._v("MySQL 支持选用多种数据引擎，不同的数据库引擎具有不同的，各具特色的功能。MySQL 支持的数据库引擎有：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" ENGINES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[t("code",[a._v("InnoDB")])]),a._v(" 引擎是 MySQL 5.5.5 之后的默认引擎。它支持『事务』和『外键』，这是它的两个核心特性。")]),a._v(" "),t("p",[t("strong",[t("code",[a._v("MyISAM")])]),a._v(" 引擎是 MySQL 5.5.5 之前的默认引擎。它支持『全文索引』，并且早期的版本比当时的 InnoDB 更快。")])])}),[],!1,null,null,null);s.default=r.exports}}]);