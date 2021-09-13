(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{591:function(t,v,_){"use strict";_.r(v);var e=_(47),o=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"restful-接口的幂等性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#restful-接口的幂等性"}},[t._v("#")]),t._v(" RESTful 接口的幂等性")]),t._v(" "),_("p",[t._v("产生『"),_("strong",[t._v("重复数据或数据不一致")]),t._v("』"),_("small",[t._v("（假定程序业务代码没问题）")]),t._v("，绝大部分就是发生了重复的请求，重复请求是指『"),_("strong",[t._v("同一个请求因为某些原因被多次提交")]),t._v("』。导致这个情况会有几种场景：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("微服务场景，在我们传统应用架构中调用接口，要么成功，要么失败。但是在微服务架构下，会有第三个情况『未知』，也就是超时。如果超时了，微服务框架会进行重试；")])]),t._v(" "),_("li",[_("p",[t._v("用户交互的时候多次点击。如：快速点击按钮多次；")])]),t._v(" "),_("li",[_("p",[t._v("MQ 消息中间件，消息重复消费；")])]),t._v(" "),_("li",[_("p",[t._v("第三方平台的接口"),_("small",[t._v("（如：支付成功回调接口）")]),t._v("，因为异常也会导致多次异步回调；")])]),t._v(" "),_("li",[_("p",[t._v("其他中间件/应用服务根据自身的特性，也有可能进行重试。")])])]),t._v(" "),_("p",[t._v("接口的幂等性实际上就是『"),_("strong",[t._v("接口可重复调用")]),t._v("』，在调用方多次调用的情况下，接口『"),_("strong",[t._v("最终得到的结果是一致的")]),t._v("』。")]),t._v(" "),_("blockquote",[_("p",[t._v("以『增删改查』四大操作来看，『删除』和『查询』操作天然是幂等的，没有"),_("small",[t._v("（或不在乎）")]),t._v("重复提交/重复请求问题。因此，幂等需求通常是用在『新增』和『修改』类型的业务上。")]),t._v(" "),_("p",[t._v("而『修改』类型的业务通过 SQL 改造和 last_upated_at 字段的结合，也可以实现幂等，而无需下述的 token 和去重表方案。")]),t._v(" "),_("p",[t._v("因此，幂等性的处理重点集中在『新增』型业务上。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/other/img/%E5%B9%82%E7%AD%89-1.png",alt:""}})]),t._v(" "),_("p",[t._v("上述方案适用绝大部分场景。主要思想：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("服务端提供了发送 token 的接口。我们在分析业务的时候，哪些业务是存在幂等问题的，就必须在执行业务前，先去获取 token，服务器会把 token 保存到 redis 中。"),_("small",[t._v("（微服务肯定是分布式了，如果单机就适用 jvm 缓存）。")])])]),t._v(" "),_("li",[_("p",[t._v("然后调用业务接口请求时，把 token 携带过去，一般放在请求头部。")])]),t._v(" "),_("li",[_("p",[t._v("服务器判断 token 是否存在 redis 中，存在表示第一次请求，可以继续执行业务，执行业务完成后，最后需要把 redis 中的 token 删除。")])]),t._v(" "),_("li",[_("p",[t._v("如果判断 token 不存在 redis 中，就表示是重复操作，直接返回重复标记给 client，这样就保证了业务代码，不被重复执行。")])])]),t._v(" "),_("blockquote",[_("p",[t._v("其实，这里的 token 起到的就是全局唯一 ID 的作用。")])]),t._v(" "),_("p",[t._v("这里的重点在于："),_("strong",[t._v("要先删除 token ，再执行业务代码")]),t._v(" 。")]),t._v(" "),_("p",[t._v("因为『后删除 token』的缺陷太致命：如果进行业务处理成功后，删除 redis 中的 token 失败了，那么 token 仍存在于 Redis 中，这时如果发起了第二次请求，那么因为 token 的存在，会认为该操作未被执行过，这样就导致了有可能会发生重复请求。")]),t._v(" "),_("blockquote",[_("p",[t._v("当然，『先删除 token』也有缺点，如果先删除 token 成功，而随后执行业务逻辑失败，那么需要再返回信息中告知请求方，在重新获得 token，而不能/无法重复利用之前的 token 。")])])])}),[],!1,null,null,null);v.default=o.exports}}]);