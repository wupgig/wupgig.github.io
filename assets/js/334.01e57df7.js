(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{703:function(t,a,n){"use strict";n.r(a);var s=n(47),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"spring-中-transactional-的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-中-transactional-的使用"}},[t._v("#")]),t._v(" Spring 中 @Transactional 的使用")]),t._v(" "),n("p",[t._v("事务管理是应用系统开发中必不可少的一部分。Spring 为事务管理提供了丰富的功能支持。")]),t._v(" "),n("p",[t._v("声明式事务有两种方式：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("一种是在配置文件"),n("small",[t._v("（xml）")]),t._v("中做相关的事务规则声明，")])]),t._v(" "),n("li",[n("p",[t._v("另一种是基于 "),n("strong",[t._v("@Transactional")]),t._v(" 注解的方式。")])])]),t._v(" "),n("p",[t._v("注释配置是目前流行的使用方式。")]),t._v(" "),n("h2",{attrs:{id:"transactional-注解管理事务的实现步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transactional-注解管理事务的实现步骤"}},[t._v("#")]),t._v(" Transactional 注解管理事务的实现步骤")]),t._v(" "),n("p",[t._v("使用 "),n("strong",[t._v("@Transactional")]),t._v(" 注解管理事务的实现步骤分为 2 步：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("在代码配置中添加事务配置信息")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ComponentScan")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.example.service"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包扫描")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableTransactionManagement")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启事务支持")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableAspectJAutoProxy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxyTargetClass "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 强制指定使用 cglib 动态代理")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringServiceConfig")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * PlantformTransactionManager 的具体是先有 4 种：\n     * \n     * - DataSourceTransactionManager for JDBC\n     * - HibernateTransactionManager for Hibernate\n     * - JpaTransactionManager for JPA\n     * - JtaTransactionManager for JTA \n     * \n     * Mybatis 使用的是 JDBC 的那个。\n     *\n     * 不要无脑复制粘贴。\n     */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"txManager"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSourceTransactionManager")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTXManager")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSource")]),t._v(" ds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSourceTransactionManager")]),t._v(" manager "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSourceTransactionManager")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        manager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDataSource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" manager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("将 "),n("strong",[t._v("@Transactional")]),t._v(" 注解添加到合适的方法上，并设置合适的属性信息。")])])]),t._v(" "),n("p",[n("strong",[t._v("@Transactional")]),t._v(" 注解的属性信息")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("属性名")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("当在配置文件中有多个 "),n("em",[t._v("TransactionManager")]),t._v(" ，"),n("br"),t._v("可以用该属性指定选择哪个事务管理器。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("propagation")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("事务的传播行为，默认值为 "),n("em",[t._v("REQUIRED")]),t._v(" 。各种不同的值的含义见下表。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("isolation")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("事务的隔离度，默认值采用 "),n("em",[t._v("DEFAULT")]),t._v(" 。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("timeout")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("事务的超时时间，默认值为 -1 。"),n("br"),t._v("如果超过该时间限制但事务还没有完成，则自动回滚事务。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("read-only")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("指定事务是否为只读事务，默认值为 "),n("em",[t._v("false")]),t._v(" ；"),n("br"),t._v("为了忽略那些不需要事务的方法，比如读取数据，可以设置 read-only 为 "),n("em",[t._v("true")]),t._v(" 。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("rollback-for")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("用于指定能够触发事务回滚的异常类型，"),n("br"),t._v("如果有多个异常类型需要指定，各类型之间可以通过逗号分隔。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("no-rollback-for")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("抛出 "),n("em",[t._v("no-rollback-for")]),t._v(" 指定的异常类型，不回滚事务。")])])])]),t._v(" "),n("p",[t._v("propagation 的各种值的含义：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("传播行为")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("含义")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("REQUIRED")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("当方法调用时，如果不存在当前事务，那么就创建事务；如果之前已经存在了事物，那么就沿用之前的事务。")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("默认值，"),n("strong",[t._v("最常用")]),t._v("。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("SUPPORTS")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("当方法调用时，如果不存在当前事务，就不启用事务；如果当前启用事务，那么就沿用当前事务。")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("——")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("MANATORY")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("方法必须在事务内运行。")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("如果不存在当前事务，则直接抛出异常。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("REQUIRES_NEW")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("无论是否存在当前事务，方法都会在新的事务中运行")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("总是开启一个新事务，执行本方法。"),n("strong",[t._v("次常用")]),t._v("。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("NOT_SUPPORTED")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("不支持事务，不存在当前事务也不会创建新事务；如果存在当前事务则挂起它，直到方法结束后才恢复当前事务")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("适用于那些不支持事务的数据库和SQL语句")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("NEVER")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("不支持事务。")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("MANATORY 的“反面”，如果存在当前事务，就直接抛出异常。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("NESTED")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("嵌套事务。REQUIRES_NEW 的高级版")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("支持当前事务中使用保存点（savepoint），可以回滚到保存点；如果当前事务没有保存点，则完全等价于 REQUIRES_NEW")])])])]),t._v(" "),n("p",[t._v("传播机制本质上描述的是：在一个整体行为中，一个部分行为的失败，会不会对整体行为造成影响，以及造成何种影响。")]),t._v(" "),n("h2",{attrs:{id:"使用位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用位置"}},[t._v("#")]),t._v(" 使用位置")]),t._v(" "),n("p",[t._v("除此可以放在方法上，"),n("strong",[t._v("@Transactional")]),t._v(" 注解也可以添加到类级别上。当把 "),n("strong",[t._v("@Transactional")]),t._v(" 注解放在类级别时，表示所有该类的公共方法都配置相同的事务属性信息。")]),t._v(" "),n("p",[t._v("方法级别的事务属性信息会覆盖类级别的相关配置信息。")]),t._v(" "),n("p",[n("strong",[t._v("@Transactional")]),t._v(" 注解的标注于类上：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Transactional")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("propagation"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Propagation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SUPPORTS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" readOnly"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"employeeService"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmployeeService")]),t._v("\n")])])]),n("h2",{attrs:{id:"注解的事务注意事项-出错未回滚"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注解的事务注意事项-出错未回滚"}},[t._v("#")]),t._v(" 注解的事务注意事项（出错未回滚）")]),t._v(" "),n("p",[t._v("当您对 Spring 的基于注解方式的实现步骤和事务内在实现机制有较好的理解之后，就会更好的使用注解方式的事务管理，避免当系统抛出异常，数据不能回滚的问题。")]),t._v(" "),n("h3",{attrs:{id:"正确的设置-transactional-的-propagation-属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正确的设置-transactional-的-propagation-属性"}},[t._v("#")]),t._v(" 正确的设置 "),n("em",[t._v("@Transactional")]),t._v(" 的 "),n("em",[t._v("propagation")]),t._v(" 属性")]),t._v(" "),n("p",[t._v("本来期望目标方法进行事务管理，但若是错误的配置了 "),n("em",[t._v("propagation")]),t._v(" 属性，使用了以下 3 个值之一，那么将会发生『出错未回滚』的 Bug ：")]),t._v(" "),n("blockquote",[n("p",[t._v("考虑到我们通常情况下不会去改变 "),n("em",[t._v("propagation")]),t._v(" 属性的值，，即一般都是使用它的默认值。因此，因为这个原因导致的『出错未回滚』的情况不大。")])]),t._v(" "),n("dl",[n("dt",[t._v("TransactionDefinition.PROPAGATION_SUPPORTS")]),t._v(" "),n("dd",[t._v("如果当前存在事务，则加入该事务；")]),t._v(" "),n("dd",[t._v("如果当前没有事务，则以非事务的方式继续运行。")]),t._v(" "),n("dt",[t._v("TransactionDefinition.PROPAGATION_NOT_SUPPORTED")]),t._v(" "),n("dd",[t._v("以非事务方式运行，如果当前存在事务，则把当前事务挂起。")]),t._v(" "),n("dt",[t._v("TransactionDefinition.PROPAGATION_NEVER`")]),t._v(" "),n("dd",[t._v("以非事务方式运行，如果当前存在事务，则抛出异常。")])]),t._v(" "),n("h3",{attrs:{id:"正确的设置-transactional-的-rollbackfor-属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正确的设置-transactional-的-rollbackfor-属性"}},[t._v("#")]),t._v(" 正确的设置 "),n("em",[t._v("@Transactional")]),t._v(" 的 "),n("em",[t._v("rollbackFor")]),t._v(" 属性")]),t._v(" "),n("p",[t._v("默认情况下，如果在事务中抛出了未检查异常"),n("small",[t._v("（继承自 RuntimeException 的异常）")]),t._v("或者 Error，则 Spring 将回滚事务；除此之外的异常，Spring 都不会回滚事务！")]),t._v(" "),n("blockquote",[n("p",[t._v("这是造成『"),n("strong",[t._v("出错未回滚")]),t._v("』的最常见原因！")])]),t._v(" "),n("p",[t._v("如果在事务中抛出其他类型的异常，并期望 Spring 能够回滚事务，可以指定 "),n("strong",[t._v("rollbackFor")]),t._v(" 。例：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Transactional")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("propagation"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Propagation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("REQUIRED"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rollbackFor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("若在目标方法中抛出的异常是 "),n("strong",[t._v("rollbackFor")]),t._v(" 指定的异常"),n("small",[t._v("（及其子类）")]),t._v("，事务同样会回滚。")]),t._v(" "),n("h3",{attrs:{id:"transactional-只能应用到-public-方法才有效"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transactional-只能应用到-public-方法才有效"}},[t._v("#")]),t._v(" "),n("em",[t._v("@Transactional")]),t._v(" 只能应用到 "),n("em",[t._v("public")]),t._v(" 方法才有效")]),t._v(" "),n("p",[t._v("只有 "),n("strong",[t._v("@Transactional")]),t._v(" 注解应用到 "),n("strong",[t._v("public")]),t._v(" 方法，才能进行事务管理。")]),t._v(" "),n("p",[t._v("Spring AOP 会检查目标方法的修饰符是不是 "),n("strong",[t._v("public")]),t._v(" ，若不是 "),n("strong",[t._v("public")]),t._v(" ，就不会获取 "),n("strong",[t._v("@Transactional")]),t._v(" 的属性配置信息，最终会造成不会用 "),n("strong",[t._v("TransactionInterceptor")]),t._v(" 来拦截该目标方法进行事务管理。")]),t._v(" "),n("h3",{attrs:{id:"避免-spring-的-aop-的自调用问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#避免-spring-的-aop-的自调用问题"}},[t._v("#")]),t._v(" 避免 Spring 的 AOP 的自调用问题")]),t._v(" "),n("p",[t._v("在 Spring 的 AOP 代理下，只有目标方法由外部调用，目标方法才由 Spring 生成的代理对象来管理，这会造成自调用问题。")]),t._v(" "),n("p",[t._v("若同一类中的其他没有 "),n("strong",[t._v("@Transactional")]),t._v(" 注解的方法内部调用有 "),n("strong",[t._v("@Transactional")]),t._v(" 注解的方法，有 "),n("strong",[t._v("@Transactional")]),t._v(" 注解的方法的事务被忽略，不会发生回滚。")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderService")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertOrder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Transactional")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertOrder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//insert log info")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//insertOrder")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//updateAccount")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v(".insertOrder")]),t._v(" 方法尽管有 "),n("strong",[t._v("@Transactional")]),t._v(" 注解，但它被内部方法 "),n("strong",[t._v("insert")]),t._v(" 方法调用，因此 "),n("strong",[t._v(".insertOrder")]),t._v(" 方法的事务被忽略，出现异常事务不会发生回滚。")]),t._v(" "),n("p",[t._v("『完』")])])}),[],!1,null,null,null);a.default=e.exports}}]);