(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{779:function(e,a,t){"use strict";t.r(a);var s=t(47),l=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue-后台管理系统框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-后台管理系统框架"}},[e._v("#")]),e._v(" Vue 后台管理系统框架")]),e._v(" "),t("h2",{attrs:{id:"整体框架思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体框架思路"}},[e._v("#")]),e._v(" 整体框架思路")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("每次访问系统时，根据系统路由守卫，每次都会判断当前用户是否登录，如果登录还会判断 Token 是否过期"),t("small",[e._v("（Token 的生成和过期时间都是后台设置的）")]),e._v("，我们将登录成功之后，后台返回的 Token 保存在 localStorage 里面本地存储起来（也就是路由守卫每次会去本地 localStorage 里面获取 Token）。")])]),e._v(" "),t("li",[t("p",[e._v("如果登录成功之后，进入会根据当前用户获取用户角色和对应菜单权限，渲染左侧菜单栏"),t("small",[e._v("（Demo 里面的路由数据源是存放 Vuex 状态管理中的，你可以根据实际情况从后台 api 获取，数据格式保持一致即可）")]),e._v("。")])]),e._v(" "),t("li",[t("p",[e._v("右侧 Tab 栏默认会有 “首页” 存在，且不能被移除，其功能主要也是通过 Vuex 状态管理来实现的，渲染左侧菜单的同时，也会去右侧渲染 Tab 栏，我们将右侧 Tab 栏中的数据存放在 Vuex 中的 Tabs 数组中，且赋予默认值（首页）相关属性，activeItem 则表示当前选中的 tab, 通过点击左侧菜单，调用 Vuex 中 clickMenuItem 方法，去管理 Tabs 状态（即如果 Tabs 中已存在该菜单下的界面，则 Tabs 直接切换到对应界面，如果 Tabs 中不存在，则加入到 Tabs 中，且切换到对应界面），删除右侧指定 tab 时，也是调用 Vuex 中 closeTab 方法，从而去管理 Tabs 数组，然后结合路由去实现对应界面切换。说白了，就是用过界面的一些操作，去管理 Vuex 中对应属性状态，根据这些状态的变化，界面也会跟着变化（这个是 Vue 数据驱动视图原理，不需要人为修改 Dom ,可在 Vue 官网进行了解）。")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);