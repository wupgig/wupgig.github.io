(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{441:function(t,n,e){"use strict";e.r(n);var a=e(47),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"gitignore-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitignore-文件"}},[t._v("#")]),t._v(" .gitignore 文件")]),t._v(" "),e("p",[t._v("之前已经提到过，"),e("strong",[t._v(".gitignore")]),t._v(" 是用于屏蔽某些文件被纳入到 Git 管理范围下的配置文件。")]),t._v(" "),e("p",[t._v("简单来说，"),e("strong",[t._v(".gitignore")]),t._v(" 文件就是一个『"),e("strong",[t._v("黑名单")]),t._v("』，在其中列举的文件都不会被 Git 管理，Git 不会关注这些文件的创建、删除、改动，也不会将它们存入到本地版本库，更不会将它们上传到远程仓库。")]),t._v(" "),e("h2",{attrs:{id:"创建-gitignore-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-gitignore-文件"}},[t._v("#")]),t._v(" 创建 .gitignore 文件")]),t._v(" "),e("p",[t._v("在 window 系统中，windows 不允许直接新建文件名以 "),e("code",[t._v(".")]),t._v(" 开头的文件"),e("small",[t._v("（Linux 不存在这个问题）")]),t._v("。所以，只能『间接』创建。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[e("strong",[t._v(".gitignore 文件必须叫 .gitignore ，一定不能错")]),t._v(" 。")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("方法一：先创建，再改名")]),t._v(" "),e("p",[t._v("虽然 Windwos 系统不允许新建的文件命名以 "),e("code",[t._v(".")]),t._v(" 开头，但是它允许文件改名为以 "),e("code",[t._v(".")]),t._v(" 开头的文件"),e("small",[t._v("（好奇怪...）")]),t._v("。")]),t._v(" "),e("p",[t._v("因此，我们可以新建一个普通的 "),e("code",[t._v(".txt")]),t._v(" 文本文件，文件名任意，创建完成后，再将它的名字修改为 "),e("code",[t._v(".gitignore")]),t._v(" 。")])]),t._v(" "),e("li",[e("p",[t._v("方法二：在 "),e("code",[t._v("git bash")]),t._v(" 中使用命令创建")]),t._v(" "),e("p",[t._v("通过 "),e("code",[t._v("git bash")]),t._v(" 创建 "),e("code",[t._v(".gitignore")]),t._v(" 文件，命令为：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" .gitignore\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"gitignore-语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitignore-语法"}},[t._v("#")]),t._v(" .gitignore 语法")]),t._v(" "),e("p",[e("strong",[t._v(".gitignore")]),t._v(" 文件的基本语法：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" #：表示注释\n /：目录层级\n *：通配符\n\n 忽略所有后缀名为 log 的文件，无所谓文件名。无论它位于什么层次结构。\n*.log\n\n 忽略『根目录』下的 target 文件夹\n /target/\n 这里最后的 / 非必须。不过个人建议还是加上，因为可以暗示出它是一个文件夹。\n\n 忽略所有名为 target 的文件夹。无论它位于什么层次结构中。\n target/\n")])])]),e("p",[t._v(".gitignore 文件中有一个 "),e("code",[t._v("!")]),t._v(" 的 "),e("code",[t._v("非")]),t._v(" 的规则，对于它的使用相较而言比较复杂，暂时不要求掌握。")]),t._v(" "),e("h2",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v(".gitignore")]),t._v(" 配置文件的根目录就是当前 Git 工程目录。"),e("code",[t._v(".gitignore")]),t._v(" 配置只对当前 Git 工程有效。")])]),t._v(" "),e("li",[e("p",[t._v("在配置语句的前后面添加空格、Tab、注释等，会导致当前行的配置语句失效。所以，不要添加非必要的空白符。")])]),t._v(" "),e("li",[e("p",[t._v("配置语句对已经 add、commit 的文件无效。")])])]),t._v(" "),e("h2",{attrs:{id:"模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板"}},[t._v("#")]),t._v(" 模板")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("HELP.md\ntarget/\n\n## STS ###\n.apt_generated\n.classpath\n.factorypath\n.project\n.settings\n.springBeans\n.sts4-cache\n\n## IntelliJ IDEA ###\n.idea\n*.iws\n*.iml\n*.ipr\n\n## NetBeans ###\n/nbproject/private/\n/nbbuild/\n/dist/\n/nbdist/\n/.nb-gradle/\nbuild/\n\n## VS Code ###\n.vscode/\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);