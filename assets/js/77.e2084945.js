(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{445:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-stash-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-的使用"}},[t._v("#")]),t._v(" Git Stash 的使用")]),t._v(" "),a("h2",{attrs:{id:"git-stash-的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-的作用"}},[t._v("#")]),t._v(" Git Stash 的作用")]),t._v(" "),a("p",[t._v("在开发过程中，我们经常会遇到如下两种情况：")]),t._v(" "),a("ul",[a("li",[t._v("开发到一半，需要同步远端代码")]),t._v(" "),a("li",[t._v("手头的工作被打断，需要先做别的需求")])]),t._v(" "),a("p",[t._v("上述两种情况所面对的问题，都不单单是 pull、commit、push 就能解决，或者说，使用 pull、commit、push 并非最有解。这里我们可以通过引入 "),a("strong",[t._v("git stash")]),t._v(" 来解决这些问题。")]),t._v(" "),a("p",[a("strong",[t._v("git stash")]),t._v(" 用于想要保存当前的修改，但是想回到之前最后一次提交的干净的工作仓库时进行的操作。"),a("em",[t._v("git stash")]),t._v(" 将本地的修改保存起来，并且将当前代码切换到 HEAD 提交上.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("简单来说，使用 git stash 还你一个干净的工作目录！\n")])])]),a("p",[t._v("通过 git stash 存储的修改列表，可以通过 "),a("strong",[t._v("git stash list")]),t._v(" 查看。"),a("strong",[t._v("git stash show")]),t._v(" 用于校验，"),a("strong",[t._v("git stash apply")]),t._v(" 用于重新存储。直接执行 git stash 等同于 "),a("strong",[t._v("git stash save")]),t._v(" 。")]),t._v(" "),a("blockquote",[a("p",[t._v("当然，如果是通过 Git 的图形化客户端进行操作，那么对于这些命令就无需花费太多时间和精力进行记忆。")])]),t._v(" "),a("p",[t._v("最新的存储保存在 refs/stash 中。老的存储可以通过相关的参数获得，例如 "),a("code",[t._v("lstash@{0}")]),t._v(" 获取最新的存储，"),a("code",[t._v("stash@{1}")]),t._v(" 获取次新，存储可以直接通过索引的位置来获得 "),a("code",[t._v("stash@{n}")]),t._v(" 。")]),t._v(" "),a("h2",{attrs:{id:"开发到一半-同步远端代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发到一半-同步远端代码"}},[t._v("#")]),t._v(" 开发到一半，同步远端代码")]),t._v(" "),a("p",[t._v("当你的开发进行到一半，但是代码还不想进行提交，然后需要同步去关联远端代码时。")]),t._v(" "),a("ul",[a("li",[t._v("如果你本地的代码和远端代码没有冲突时，可以直接通过 git pull 解决。")]),t._v(" "),a("li",[t._v("但是如果可能发生冲突怎么办？直接 "),a("code",[t._v("git pull")]),t._v(" 会拒绝覆盖当前的修改。")])]),t._v(" "),a("p",[t._v("遇到这种情况，需要先 stash 本地的代码，进行 pull，然后再 pop 出本地代码:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop\n")])])]),a("h2",{attrs:{id:"工作流被打断-需要先做别的需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作流被打断-需要先做别的需求"}},[t._v("#")]),t._v(" 工作流被打断，需要先做别的需求")]),t._v(" "),a("p",[t._v("当开发进行到一半，老板过来跟你说“线上有个bug，你现在给我改好，不然扣你鸡腿”。当然,你可以开一个新的分支，把当前代码提交过去，回头再 merge，具体代码如下：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 繁琐的不优雅的处理办法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... hack hack hack ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b my_wip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WIP"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\nedit emergency fix\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Fix in a hurry"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout my_wip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft HEAD^\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... continue hacking ...")]),t._v("\n")])])]),a("p",[t._v("如果你使用 git stash，那么整个流程就变得很简单了：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更优雅的做法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... hack hack hack ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存开发到一半的代码")]),t._v("\nedit emergency fix\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Fix in a hurry"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将代码追加到最新的提交之后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... continue hacking ...")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);