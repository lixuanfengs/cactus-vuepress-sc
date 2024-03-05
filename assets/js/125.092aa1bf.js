(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{474:function(o,t,r){"use strict";r.r(t);var s=r(0),_=Object(s.a)({},(function(){var o=this,t=o._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("p",[o._v("注：该源码分析对应SpringBoot版本为"),t("strong",[o._v("2.1.0.RELEASE")])]),o._v(" "),t("h2",{attrs:{id:"_1-前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[o._v("#")]),o._v(" 1 前言")]),o._v(" "),t("p",[o._v("前面搭建好了自己本地的SpringBoot源码调试环境后，此时我们不要急着下手进入到具体的源码调试细节中，"),t("strong",[o._v("刚开始阅读源码，此时我们一定要对项目结构等有一个整体的认识，然后再进行源码分析调试")]),o._v("。推荐阅读下笔者之前写的的"),t("a",{attrs:{href:"https://juejin.cn/post/6844904067936813063",target:"_blank",rel:"noopener noreferrer"}},[o._v("分析开源项目源码，我们该如何入手分析？"),t("OutboundLink")],1),o._v("一文，干货满满哦。")]),o._v(" "),t("h2",{attrs:{id:"_2-springboot源码模块一览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-springboot源码模块一览"}},[o._v("#")]),o._v(" 2 SpringBoot源码模块一览")]),o._v(" "),t("p",[o._v("我们先来对SpringBoot的源码模块来一个大致的了解，如下图：")]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/6110d3d47253a076a3045e241139bce6.webp",alt:"img"}})]),o._v(" "),t("p",[o._v("从上图可以看到，主要有以下四个模块：")]),o._v(" "),t("ul",[t("li",[t("code",[o._v("**spring-boot-project**")]),o._v("：整个SpringBoot框架全部功能在这个模块实现，SpringBoot项目95%的代码都在这里实现，源码总共有25万行左右。")]),o._v(" "),t("li",[t("code",[o._v("**spring-boot-samples**")]),o._v("：这个是SpringBoot给小伙伴们赠送的福利，里面包含了各种各样使用SpringBoot的简单demo，我们调试阅读源码的时候可以充分利用该模块。")]),o._v(" "),t("li",[t("code",[o._v("**spring-boot-sample-invoker**")]),o._v("：这个模块应该是跟sample模块有关，注意根pom.xml中有这么一句话："),t("code",[o._v("Samples are built via the invoker plugin")]),o._v("，该模块无代码。")]),o._v(" "),t("li",[t("code",[o._v("**spring-boot-tests**")]),o._v("：这个模块SpringBoot的测试模块，跟部署测试和集成测试有关。")])]),o._v(" "),t("p",[o._v("因为SpringBoot的全部功能在spring-boot-project模块实现，因此下面重点来介绍下 spring-boot-project 模块。")]),o._v(" "),t("h2",{attrs:{id:"_3-spring-boot-project源码模块详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-spring-boot-project源码模块详解"}},[o._v("#")]),o._v(" 3 spring-boot-project源码模块详解")]),o._v(" "),t("p",[o._v("先来看下 "),t("code",[o._v("spring-boot-project")]),o._v(" 整体模块结构，如下图，然后我们再逐个来介绍：")]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/94003cc77177de74e2221957747f37e3.webp",alt:"img"}})]),o._v(" "),t("h4",{attrs:{id:"_1-spring-boot-parent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-spring-boot-parent"}},[o._v("#")]),o._v(" 1) spring-boot-parent")]),o._v(" "),t("p",[o._v("这个模块没有代码，是spring-boot模块的父项目，被其他子模块继承。")]),o._v(" "),t("h4",{attrs:{id:"_2-spring-boot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-spring-boot"}},[o._v("#")]),o._v(" 2) spring-boot")]),o._v(" "),t("p",[o._v("这个模块是SpringBoot项目的核心，可以说一些基础核心的功能都在这里实现，为SpringBoot的其他模块组件功能提供了支持，主要包括以下核心功能：")]),o._v(" "),t("ul",[t("li",[t("code",[o._v("SpringApplication")]),o._v("类，这个是SpringBoot的启动类，提供了一个静态的"),t("code",[o._v("run")]),o._v("方法来启动程序，该类主要用来创建并且刷新Spring容器"),t("code",[o._v("ApplicationContext")]),o._v(".")]),o._v(" "),t("li",[o._v("支持选择不同的容器比如Tomcat,Jetty等来作为应用的嵌入容器，这个是SpringBoot的新特性之一。")]),o._v(" "),t("li",[o._v("外部配置支持，这个指的是我们执行"),t("code",[o._v("java -jar xxx.jar")]),o._v("命令时可以带一些参数，比如执行"),t("code",[o._v("java -jar demo.jar --server.port=8888")]),o._v("来将应用端口修改为8888.")]),o._v(" "),t("li",[o._v("该模块内置了一些SpringBoot启动时的生命周期事件和一些容器初始化器("),t("code",[o._v("ApplicationContext")]),o._v(" initializers)，来执行一些SpringBoot启动时的初始化逻辑。")])]),o._v(" "),t("h4",{attrs:{id:"_3-spring-boot-autoconfigure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-spring-boot-autoconfigure"}},[o._v("#")]),o._v(" 3) spring-boot-autoconfigure")]),o._v(" "),t("p",[o._v("这个模块跟SpringBoot的自动配置有关，也是SpringBoot的新特性之一。比如SpringBoot能基于类路径来自动配置某个项目模块，自动配置最为关键的注解是"),t("code",[o._v("@EnableAutoConfiguration")]),o._v(",这个注解能触发Spring上下文的自动配置。另外一个重要的注解是"),t("code",[o._v("@Conditional")]),o._v("。")]),o._v(" "),t("p",[o._v("举个栗子，若"),t("code",[o._v("HSQLDB")]),o._v("在项目的类路径中，且我们没有配置任何其他数据库的连接，此时自动配置就会自动根据类路径来创建相应的"),t("code",[o._v("bean")]),o._v("。")]),o._v(" "),t("p",[o._v("除了根据类路径来进行自动配置外，还有根据容器中是否存在某个bean等方式来进行自动配置，这里不会进入到具体细节中。")]),o._v(" "),t("h4",{attrs:{id:"_4-spring-boot-starters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-spring-boot-starters"}},[o._v("#")]),o._v(" 4) spring-boot-starters")]),o._v(" "),t("p",[o._v("这个模块是跟SpringBoot的起步依赖有关，也是SpringBoot的新特性之一。SpringBoot通过提供众多起步依赖降低项目依赖的复杂度。起步依赖其实就是利用maven项目模型将其他相关的依赖给聚合起来，里面各种依赖的版本号都给定义好，避免用户在引入依赖时出现各种版本冲突，方便了我们的使用。")]),o._v(" "),t("p",[o._v("举个栗子，我们要用到activemq时，此时可以直接引入"),t("code",[o._v("spring-boot-starter-activemq")]),o._v("起步依赖即可，若SpringBoot官网或第三方组织没有提供相应的SpringBoot起步依赖时，此时我们可以进行定制自己的起步依赖。")]),o._v(" "),t("p",[o._v("注意，该模块没有代码，主要是通过maven的pom.xml来组织各种依赖。")]),o._v(" "),t("h4",{attrs:{id:"_5-spring-boot-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-spring-boot-cli"}},[o._v("#")]),o._v(" 5) spring-boot-cli")]),o._v(" "),t("p",[o._v("Spring Boot CLI是一个命令行工具，如果您想使用Spring快速开发，可以使用它。它允许您运行Groovy脚本，这意味着您有一个熟悉的类似Java的语法，而没有那么多样板代码。您还可以引导一个新项目或编写自己的命令。")]),o._v(" "),t("h4",{attrs:{id:"_6-spring-boot-actuator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-spring-boot-actuator"}},[o._v("#")]),o._v(" 6) spring-boot-actuator")]),o._v(" "),t("p",[o._v("这个跟SpringBoot的监控有关，也是SpringBoot的新特性之一。可以通过HTTP端点或JMX等来管理和监控应用。审计、运行状况和度量收集可以自动应用到应用程序。这个监控模块是开箱即用的，提供了一系列端点包括"),t("code",[o._v("HealthEndpoint")]),o._v(", "),t("code",[o._v("EnvironmentEndpoint")]),o._v("和"),t("code",[o._v("BeansEndpoint")]),o._v("等端点。")]),o._v(" "),t("h4",{attrs:{id:"_7-spring-boot-actuator-autoconfigure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-spring-boot-actuator-autoconfigure"}},[o._v("#")]),o._v(" 7) spring-boot-actuator-autoconfigure")]),o._v(" "),t("p",[o._v("这个模块为监控模块提供自动配置的功能，通常也是根据类路径来进行配置。比如"),t("code",[o._v("Micrometer")]),o._v("存在于类路径中，那么将会自动配置"),t("code",[o._v("MetricsEndpoint")]),o._v("。")]),o._v(" "),t("h4",{attrs:{id:"_8-spring-boot-test"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-spring-boot-test"}},[o._v("#")]),o._v(" 8) spring-boot-test")]),o._v(" "),t("p",[o._v("这个模式是spring-boot的跟测试有关的模块，包含了一些帮助我们测试的核心类和注解（比如"),t("code",[o._v("@SpringBootTest")]),o._v("）。")]),o._v(" "),t("h4",{attrs:{id:"_9-spring-boot-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-spring-boot-dependencies"}},[o._v("#")]),o._v(" 9) spring-boot-dependencies")]),o._v(" "),t("p",[o._v("这个模块也没有代码，主要是定义了一些SpringBoot的maven相关的一些依赖及其版本。")]),o._v(" "),t("h4",{attrs:{id:"_10-spring-boot-devtools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-spring-boot-devtools"}},[o._v("#")]),o._v(" 10) spring-boot-devtools")]),o._v(" "),t("p",[o._v("这个模块跟SpringBoot的热部署有关，即修改代码后无需重启应用即生效。")]),o._v(" "),t("h4",{attrs:{id:"_11-spring-boot-docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-spring-boot-docs"}},[o._v("#")]),o._v(" 11) spring-boot-docs")]),o._v(" "),t("p",[o._v("这个模块应该是跟文档相关的模块。")]),o._v(" "),t("h4",{attrs:{id:"_12-spring-boot-properties-migrator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-spring-boot-properties-migrator"}},[o._v("#")]),o._v(" 12) spring-boot-properties-migrator")]),o._v(" "),t("p",[o._v("看到 migrator 这个单词，估计就是跟项目迁移有关，没有去细 究。")]),o._v(" "),t("h4",{attrs:{id:"_13-spring-boot-test-autoconfigure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-spring-boot-test-autoconfigure"}},[o._v("#")]),o._v(" 13) spring-boot-test-autoconfigure")]),o._v(" "),t("p",[o._v("这个模块一看就是跟SpringBoot的测试的自动配置有关。")]),o._v(" "),t("h4",{attrs:{id:"_14-spring-boot-tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-spring-boot-tools"}},[o._v("#")]),o._v(" 14) spring-boot-tools")]),o._v(" "),t("p",[o._v("这个模块一看就是SpringBoot的工具相关的模块，提供了加载，maven插件,metadata和后置处理相关的支持。")]),o._v(" "),t("p",[o._v("上面介绍了这么多spring-boot模块下的子模块，不用慌，我们要进行解读的模块不多，我们真正要看的模块有"),t("code",[o._v("spring-boot")]),o._v("，"),t("code",[o._v("spring-boot-autoconfigure")]),o._v("，"),t("code",[o._v("spring-boot-starters")]),o._v("和"),t("code",[o._v("spring-boot-actuator")]),o._v("模块。")]),o._v(" "),t("h2",{attrs:{id:"_4-用一个思维导图来总结下springboot源码项目的脉络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-用一个思维导图来总结下springboot源码项目的脉络"}},[o._v("#")]),o._v(" 4 用一个思维导图来总结下SpringBoot源码项目的脉络")]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/be3a9ea21dc33532c5a2e46ffcd73c6f.webp",alt:"img"}})]),o._v(" "),t("h2",{attrs:{id:"_5-springboot模块之间的pom关系详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-springboot模块之间的pom关系详解"}},[o._v("#")]),o._v(" 5 SpringBoot模块之间的pom关系详解")]),o._v(" "),t("p",[o._v("前面弄清楚了SpringBoot的各个模块的具体功能，此时我们来看下SpringBoot模块的pom之间的关系是怎样的，因为项目是通过maven构建的，因此还是有必要去研究下这块关系滴。")]),o._v(" "),t("p",[o._v("先看SpringBoot源码项目的pom关系，如下图：")]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/75dec7fcb47b1492794b1a38e176a79c.webp",alt:"img"}}),o._v(" 根据上图可得出以下结论：")]),o._v(" "),t("ul",[t("li",[t("code",[o._v("spring-boot-build(pom.xml)")]),o._v("是项目的根pom，其子pom有"),t("code",[o._v("spring-boot-project(pom.xml)")]),o._v("和"),t("code",[o._v("spring-boot-dependencies(pom.xml)")]),o._v("；")]),o._v(" "),t("li",[t("code",[o._v("spring-boot-dependencies(pom.xml)")]),o._v("主要定义了SpringBoot项目的各种依赖及其版本，其子pom有"),t("code",[o._v("spring-boot-parent(pom.xml)")]),o._v("和"),t("code",[o._v("spring-boot-starter-parent(pom.xml)")]),o._v("；")]),o._v(" "),t("li",[t("code",[o._v("spring-boot-project(pom.xml)")]),o._v("起到聚合module的作用，其子模块并不继承于它，而是继承于"),t("code",[o._v("spring-boot-parent(pom.xml)")]),o._v("；")]),o._v(" "),t("li",[t("code",[o._v("spring-boot-parent(pom.xml)")]),o._v("是"),t("code",[o._v("spring-boot-project(pom.xml)")]),o._v("的子module，但继承的父pom为"),t("code",[o._v("spring-boot-dependencies(pom.xml)")]),o._v("，其定义了一些properties等相关的东西。其子pom为"),t("code",[o._v("spring-boot-project(pom.xml)")]),o._v("的子module（注意除去"),t("code",[o._v("spring-boot-dependencies(pom.xml)")]),o._v("），比如有"),t("code",[o._v("spring-boot(pom.xml)")]),o._v(","),t("code",[o._v("spring-boot-starters(pom.xml)")]),o._v("和"),t("code",[o._v("spring-boot-actuator(pom.xml)")]),o._v("等；")]),o._v(" "),t("li",[t("code",[o._v("spring-boot-starters(pom.xml)")]),o._v("是所有具体起步依赖的父pom，其子pom有"),t("code",[o._v("spring-boot-starter-data-jdbc(pom.xml)")]),o._v("和"),t("code",[o._v("spring-boot-starter-data-redis(pom.xml)")]),o._v("等。")]),o._v(" "),t("li",[t("code",[o._v("spring-boot-starter-parent(pom.xml)")]),o._v("，是我们的所有具体SpringBoot项目的父pom，比如SpringBoot自带的样例的"),t("code",[o._v("spring-boot-samples(pom.xml)")]),o._v("是继承于它的。")])]),o._v(" "),t("p",[o._v("SpringBoot的各模块之间的pom关系有点复杂，确实有点绕，如果看完上面的图片和解释还是不太清楚的话，建议小伙伴们自己打开idea的项目，逐个去捋一下。总之记得SpringBoot的一些父pom无非是做了一些版本管理，聚合模块之间的事情。")]),o._v(" "),t("h2",{attrs:{id:"_6-小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-小结"}},[o._v("#")]),o._v(" 6 小结")]),o._v(" "),t("p",[o._v("好了，前面已经把SpringBoot源码项目的各个模块的功能和模块pom之间的关系给捋清楚了，总之刚开始分析项目源码，有一个整体的大局观很重要。")]),o._v(" "),t("p",[o._v("本来下节想先写SpringBoot的启动流程分析的，但由于之前研究过启动流程，所以就把启动流程分析放后点写了。下一节先对SpringBoot的新特性--自动配置的源码撸起来，因此下一节让我们先来揭开SpringBoot自动配置背后神秘的面纱吧，嘿嘿🤭。")]),o._v(" "),t("p",[t("strong",[o._v("下节预告")]),o._v("： SpringBoot自动配置的相关原理搞起来")]),o._v(" "),t("p",[t("strong",[o._v("原创不易，帮忙点个赞呗！")])]),o._v(" "),t("p",[o._v("参考：")]),o._v(" "),t("ul",[t("li",[o._v("https://github.com/spring-projects/spring-boot/tree/v2.1.0.RELEASE")]),o._v(" "),t("li",[o._v("https://docs.spring.io/spring-boot/docs/1.5.2.RELEASE/reference/htmlsingle/#cli")])])])}),[],!1,null,null,null);t.default=_.exports}}]);