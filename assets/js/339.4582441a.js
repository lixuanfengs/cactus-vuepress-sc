(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{691:function(e,s,n){"use strict";n.r(s);var a=n(0),r=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("微服务之间服务的调用可以借助Spring Cloud Feign来完成，Spring Cloud Feign内部整合了Spring Cloud Ribbon和Spring Cloud Hystrix，所以它具有客户端负载均衡和服务容错的功能。Spring Cloud Feign本身使用也很简单，但是当我们需要用Feign访问受保护的服务的时候可能会遇到一些问题，这一节我们来逐步解决这些问题。")]),e._v(" "),s("h2",{attrs:{id:"spring-cloud-feign微服务调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-feign微服务调用"}},[e._v("#")]),e._v(" Spring Cloud Feign微服务调用")]),e._v(" "),s("p",[e._v("正如上面所说，微服务间的服务调用可以用Spring Cloud Feign来完成，比如febs-server-test内部调用febs-server-system提供的REST服务，下面演示如何操作。")]),e._v(" "),s("p",[e._v("因为Feign在多个微服务系统里都需要用到，所以我们在他们共有的通用模块febs-common的pom里引入Feign依赖：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-openfeign</artifactId>\n</dependency>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("我们在febs-server-system模块的"),s("code",[e._v("TestController")]),e._v("里新增一个方法，供febs-server-test远程调用演示：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@RestController\npublic class TestController {\n\n    @GetMapping("hello")\n    public String hello(String name) {\n        return "hello" + name;\n    }\n    ......\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("然后在febs-server-test模块的入口类"),s("code",[e._v("FebsServerTestApplication")]),e._v("上使用"),s("code",[e._v("@EnableFeignClients")]),e._v("注解标注，开启Feign Client功能：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("@EnableFeignClients\n@EnableDiscoveryClient\n@SpringBootApplication\n@EnableFebsAuthExceptionHandler\n@EnableGlobalMethodSecurity(prePostEnabled = true)\npublic class FebsServerTestApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(FebsServerTestApplication.class, args);\n    }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("要在febs-server-test模块里通过Feign调用febs-server-system的"),s("code",[e._v("/hello")]),e._v("服务很简单，只需要定义一个Feign Client接口即可。在febs-server-test模块的cc.mrbird.febs.server.test路径下新建service包，在该包下新建"),s("code",[e._v("IHelloService")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@FeignClient(value = "FEBS-Server-System", contextId = "helloServiceClient", fallbackFactory = HelloServiceFallback.class)\npublic interface IHelloService {\n\n    @GetMapping("hello")\n    String hello(@RequestParam("name") String name);\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[s("code",[e._v("IHelloService")]),e._v("上通过"),s("code",[e._v("@FeignClient")]),e._v("注解标注表明这是一个Feign Client，该注解的属性含义如下：")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("value")]),e._v("指定远程服务的名称，这个名称对应febs-server-system模块配置文件application.yml里"),s("code",[e._v("spring.application.name")]),e._v("的配置，即注册到Eureka里的服务名称；")]),e._v(" "),s("li",[s("code",[e._v("contextId")]),e._v("指定这个Feign Client的别名，当我们定义了多个Feign Client并且"),s("code",[e._v("value")]),e._v("值相同（即调用同一个服务）的时候，需要手动通过"),s("code",[e._v("contextId")]),e._v("设置别名，否则程序将抛出异常；")]),e._v(" "),s("li",[s("code",[e._v("fallbackFactory")]),e._v("指定了回退方法，当我们调用远程服务出现异常时，就会调用这个回退方法。"),s("code",[e._v("fallback")]),e._v("也可以指定回退方法，但"),s("code",[e._v("fallbackFactory")]),e._v("指定的回退方法里可以通过"),s("code",[e._v("Throwable")]),e._v("对象打印出异常日志，方便分析问题。")])]),e._v(" "),s("p",[e._v("我们可以定义一个微服务名称常量类，方便后续使用。在febs-common模块下的cc.mrbird.febs.common.entity目录下新建"),s("code",[e._v("FebsServerConstant")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('public class FebsServerConstant {\n\n    public static final String FEBS_AUTH = "FEBS-Auth";\n    public static final String FEBS_CLOUD = "FEBS-Cloud";\n    public static final String FEBS_COMMON = "FEBS-Common";\n    public static final String FEBS_GATEWAY = "FEBS-Gateway";\n    public static final String FEBS_REGISTER = "FEBS-Register";\n    public static final String FEBS_SERVER = "FEBS-Server";\n    public static final String FEBS_SERVER_SYSTEM= "FEBS-Server-System";\n    public static final String FEBS_SERVER_TEST= "FEBS-Server-Test";\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("然后上面的Feign Client可以改造为:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@FeignClient(value = FebsServerConstant.FEBS_SERVER_SYSTEM, contextId = "helloServiceClient", fallbackFactory = HelloServiceFallback .class)\npublic interface IHelloService {\n\n    @GetMapping("hello")\n    String hello(@RequestParam String name);\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("接着定义回退方法"),s("code",[e._v("HelloServiceFallback")]),e._v("。在febs-server-test模块的cc.mrbird.febs.server.test.service路径下新建fallback包，然后在该包下新建"),s("code",[e._v("HelloServiceFallback")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Slf4j\n@Component\npublic class HelloServiceFallback implements FallbackFactory<IHelloService> {\n    @Override\n    public IHelloService create(Throwable throwable) {\n        return new IHelloService() {\n            @Override\n            public String hello(String name) {\n                log.error("调用febs-server-system服务出错", throwable);\n                return "调用出错";\n            }\n        };\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[s("code",[e._v("HelloServiceFallback")]),e._v("实现"),s("code",[e._v("FallbackFactory")]),e._v("，泛型指定为上面定义的"),s("code",[e._v("IHelloService")]),e._v("。因为"),s("code",[e._v("IHelloService")]),e._v("目前只包含一个抽象方法，所以它是一个函数式接口，上面的代码可用Lambda表达式简化为：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Slf4j\n@Component\npublic class HelloServiceFallback implements FallbackFactory<IHelloService> {\n    @Override\n    public IHelloService create(Throwable throwable) {\n        return name -> {\n            log.error("调用febs-server-system服务出错", throwable);\n            return "调用出错";\n        };\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("要让Feign的回退生效，需要在配置文件application.yml里添加如下配置：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("feign:\n  hystrix:\n    enabled: true\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("因为Feign的回退功能是基于Hystrix实现的，所以需要开启它。")]),e._v(" "),s("p",[e._v("使用Feign Client很简单，只需要像调用本地Service那样即可。在febs-server-test的"),s("code",[e._v("TestController")]),e._v("中使用上面定义的"),s("code",[e._v("IHelloService")]),e._v("Feign Client：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@RestController\npublic class TestController {\n    \n    @Autowired\n    private IHelloService helloService;\n    \n    @GetMapping("hello")\n    public String hello(String name){\n        return this.helloService.hello(name);\n    }\n    ......   \n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("p",[e._v("逐步启动febs-register、febs-auth、febs-gateway、febs-server-system和febs-server-test模块，使用PostMan测试一些可用性。")]),e._v(" "),s("p",[e._v("先获取令牌，然后使用PostMan发送 "),s("a",{attrs:{href:"localhost:8301/test/hello"}},[e._v("localhost:8301/test/hello")]),e._v(" GET请求，请求头上携带令牌：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/08/12/exfiCQ.png",alt:"72.png"}})]),e._v(" "),s("p",[e._v("可以看到调用失败了，控制台日志如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("2019-08-12 10:48:33.608 ERROR 6332 --- [nio-8202-exec-1] c.m.f.c.handler.BaseExceptionHandler     : 系统内部异常，异常信息\n\nfeign.FeignException: status 401 reading IHelloService#hello(String)\n\tat feign.FeignException.errorStatus(FeignException.java:78) ~[feign-core-10.1.0.jar:na]\n\tat feign.codec.ErrorDecoder$Default.decode(ErrorDecoder.java:93) ~[feign-core-10.1.0.jar:na]\n\tat feign.SynchronousMethodHandler.executeAndDecode(SynchronousMethodHandler.java:149) ~[feign-core-10.1.0.jar:na]\n\tat feign.SynchronousMethodHandler.invoke(SynchronousMethodHandler.java:78) ~[feign-core-10.1.0.jar:na]\n\t......\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("因为Feign在调用远程服务的时候，并不会帮我们把原HTTP请求头部的内容也携带上，所以访问febs-server-system的"),s("code",[e._v("/hello")]),e._v("服务的时候，请求头部没有访问令牌，于是抛出了401异常。")]),e._v(" "),s("h2",{attrs:{id:"改造feign"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改造feign"}},[e._v("#")]),e._v(" 改造Feign")]),e._v(" "),s("p",[e._v("要解决上面的问题也很简单，只需要拦截Feign请求，手动往请求头上加入令牌即可。")]),e._v(" "),s("p",[e._v("在febs-common模块的cc.mrbird.febs.common.configure路径下新建"),s("code",[e._v("FebsOAuth2FeignConfigure")]),e._v("配置类，在该配置类里注册一个Feign请求拦截器：")])])}),[],!1,null,null,null);s.default=r.exports}}]);