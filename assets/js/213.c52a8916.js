(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{581:function(t,s,a){"use strict";a.r(s);var e=a(47),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"用户和权限管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户和权限管理"}},[t._v("#")]),t._v(" 用户和权限管理")]),t._v(" "),a("p",[t._v("MySQL 是一个多用户数据库管理系统，除了默认存在的 root 用户外可以额外地在创建用户，设置密码，并指定新用户对数据库的操作权限。")]),t._v(" "),a("p",[t._v("以上所说操作依赖于超级管理员账户 root ，即只有 root 账户才能执行上述所说操作。")]),t._v(" "),a("h2",{attrs:{id:"用户管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户管理"}},[t._v("#")]),t._v(" 用户管理")]),t._v(" "),a("p",[t._v("使用 "),a("strong",[t._v("CREATE USER")]),t._v(" 语句可以创建新账户。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USER")]),t._v(" 用户名 IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("不要使用其它的、间接的方式来创建型账户。")])]),t._v(" "),a("p",[t._v("如果需要删除已有用户账户，使用 "),a("strong",[t._v("DROP USER")]),t._v(" 语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USER")]),t._v(" 用户名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果需要修改已有用户账户的密码，使用 "),a("strong",[t._v("SET PASSWORD")]),t._v(" 语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" PASSWORD "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" 用户名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'新密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"访问权限管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问权限管理"}},[t._v("#")]),t._v(" 访问权限管理")]),t._v(" "),a("p",[t._v("在新建用户后必须分配访问权限，因为『用户账号』和『访问权限』是两个独立的概念：")]),t._v(" "),a("ul",[a("li",[t._v("用户账号决定是否可以连接、登陆数据库；")]),t._v(" "),a("li",[t._v("访问权限决定了能对数据库做哪些操作。")])]),t._v(" "),a("p",[t._v("因此，纯粹的新用户逻辑上没有任何使用价值（他们可以登录、连接到 MySQL，但不能进行任何数据库操作）。")]),t._v(" "),a("p",[t._v("在进行权限判断、控制时，MySQL 可以细化到设置用户从 A 电脑登陆的时候有某种权限，从 B 电脑登陆时又是其他的权限。因为，它使用『用户名』和『主机名』来认定用户身份 "),a("strong",[t._v("user@host")]),t._v(" 。例如 "),a("strong",[t._v("tom@192.168.1.110")]),t._v(" 。")]),t._v(" "),a("p",[t._v("在设置用户的权限时，如果没有特别指定是他从“哪台”电脑上登录时的权限，那么就使用 "),a("strong",[t._v("%")]),t._v(" 表示其从任何电脑上登录时的权限，即 "),a("strong",[t._v("用户名")]),t._v(" 等同于 "),a("strong",[t._v("用户名@%")]),t._v("，这里的 % 表示所有电脑。")]),t._v(" "),a("p",[t._v("为设置权限，使用 "),a("strong",[t._v("GRANT")]),t._v(" 语句，"),a("strong",[t._v("GRANT")]),t._v(" 要求你至少给出以下信息：")]),t._v(" "),a("ul",[a("li",[t._v("要授予的权限")]),t._v(" "),a("li",[t._v("要被授予访问权限的数据库或表")]),t._v(" "),a("li",[t._v("用户名")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GRANT")]),t._v(" 权限"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 权限"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" 数据库"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("表 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" 用户名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("数据库.表名")]),t._v(" 部分可以使用通配符 "),a("strong",[t._v("*")]),t._v(" 。"),a("strong",[t._v("A.*")]),t._v(" 表示 A 数据库下的所有表。"),a("strong",[t._v("*.*")]),t._v(" 表示所有数据库中的所有表。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("常见权限")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ALL")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("所有权限")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("SHOW DATABASES")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("允许使用 SHOW DATABASES 语句")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("允许使用 CREATE TABLE 语句")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DROP")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("允许使用 DROP TABLE 语句")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("INSERT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("允许使用 INSERT 语句")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("允许使用 DELETE 语句")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("UPDATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("允许使用 UPDATE 语句")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("允许使用 SELECT 语句")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("USAGE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("无访问权限")])])])]),t._v(" "),a("p",[t._v("GRANT 操作的反向操作是 REVOKE，用它来剥夺特定的权限：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REVOKE")]),t._v(" 权限"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 权限"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" 数据库"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" 用户名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);