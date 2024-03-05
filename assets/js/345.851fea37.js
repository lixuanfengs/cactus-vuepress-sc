(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{693:function(e,n,a){"use strict";a.r(n);var s=a(0),t=Object(s.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("因为我们的验证码服务是免认证的，所以只要知道了地址就可以频繁的去获取验证码，这无形之中给服务器增加了很大的压力，甚至可能导致服务器宕机。")]),e._v(" "),n("p",[e._v("为了解决这个问题，我们可以在网关处整合阿里巴巴开源的"),n("a",{attrs:{href:"https://github.com/alibaba/Sentinel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sentinel"),n("OutboundLink")],1),e._v("流量哨兵来限制验证码的获取频率。")]),e._v(" "),n("h2",{attrs:{id:"整合sentinel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#整合sentinel"}},[e._v("#")]),e._v(" 整合Sentinel")]),e._v(" "),n("p",[e._v("根据其官方"),n("a",{attrs:{href:"https://github.com/alibaba/Sentinel/wiki/%E7%BD%91%E5%85%B3%E9%99%90%E6%B5%81",target:"_blank",rel:"noopener noreferrer"}},[e._v("wiki"),n("OutboundLink")],1),e._v("所述，我们需要在febs-gateway模块的pom里引入如下依赖：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<dependency>\n    <groupId>com.alibaba.csp</groupId>\n    <artifactId>sentinel-zuul-adapter</artifactId>\n    <version>1.6.3</version>\n</dependency>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[e._v("然后在febs-gateway模块下的cc.mrbird.febs.gateway.filter路径下新建"),n("code",[e._v("FebsGatewaySentinelFilter")]),e._v("过滤器：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@Slf4j\n@Configuration\npublic class FebsGatewaySentinelFilter {\n\n    @Bean\n    public ZuulFilter sentinelZuulPreFilter() {\n        return new SentinelZuulPreFilter();\n    }\n\n    @Bean\n    public ZuulFilter sentinelZuulPostFilter() {\n        return new SentinelZuulPostFilter();\n    }\n\n    @Bean\n    public ZuulFilter sentinelZuulErrorFilter() {\n        return new SentinelZuulErrorFilter();\n    }\n\n    @PostConstruct\n    public void doInit() {\n        initGatewayRules();\n    }\n\n    /**\n     * 定义验证码请求限流，限流规则：\n     *  60秒内同一个IP，同一个 key最多访问 10次\n     */\n    private void initGatewayRules() {\n        Set<ApiDefinition> definitions = new HashSet<>();\n        Set<ApiPredicateItem> predicateItems = new HashSet<>();\n\n        predicateItems.add(new ApiPathPredicateItem().setPattern("/auth/captcha"));\n        ApiDefinition definition = new ApiDefinition("captcha")\n                .setPredicateItems(predicateItems);\n        definitions.add(definition);\n        GatewayApiDefinitionManager.loadApiDefinitions(definitions);\n\n        Set<GatewayFlowRule> rules = new HashSet<>();\n\n        rules.add(new GatewayFlowRule("captcha")\n                .setResourceMode(SentinelGatewayConstants.RESOURCE_MODE_CUSTOM_API_NAME)\n                .setParamItem(\n                        new GatewayParamFlowItem()\n                                .setParseStrategy(SentinelGatewayConstants.PARAM_PARSE_STRATEGY_URL_PARAM)\n                                .setFieldName("key")\n                                .setMatchStrategy(SentinelGatewayConstants.PARAM_MATCH_STRATEGY_EXACT)\n                                .setParseStrategy(SentinelGatewayConstants.PARAM_PARSE_STRATEGY_CLIENT_IP)\n                )\n                .setCount(10)\n                .setIntervalSec(60)\n        );\n        GatewayRuleManager.loadRules(rules);\n    }\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br"),n("span",{staticClass:"line-number"},[e._v("35")]),n("br"),n("span",{staticClass:"line-number"},[e._v("36")]),n("br"),n("span",{staticClass:"line-number"},[e._v("37")]),n("br"),n("span",{staticClass:"line-number"},[e._v("38")]),n("br"),n("span",{staticClass:"line-number"},[e._v("39")]),n("br"),n("span",{staticClass:"line-number"},[e._v("40")]),n("br"),n("span",{staticClass:"line-number"},[e._v("41")]),n("br"),n("span",{staticClass:"line-number"},[e._v("42")]),n("br"),n("span",{staticClass:"line-number"},[e._v("43")]),n("br"),n("span",{staticClass:"line-number"},[e._v("44")]),n("br"),n("span",{staticClass:"line-number"},[e._v("45")]),n("br"),n("span",{staticClass:"line-number"},[e._v("46")]),n("br"),n("span",{staticClass:"line-number"},[e._v("47")]),n("br"),n("span",{staticClass:"line-number"},[e._v("48")]),n("br"),n("span",{staticClass:"line-number"},[e._v("49")]),n("br"),n("span",{staticClass:"line-number"},[e._v("50")]),n("br"),n("span",{staticClass:"line-number"},[e._v("51")]),n("br"),n("span",{staticClass:"line-number"},[e._v("52")]),n("br"),n("span",{staticClass:"line-number"},[e._v("53")]),n("br"),n("span",{staticClass:"line-number"},[e._v("54")]),n("br"),n("span",{staticClass:"line-number"},[e._v("55")]),n("br")])]),n("p",[e._v("在"),n("code",[e._v("initGatewayRules")]),e._v("方法中，我们定义了具体的限流逻辑。")]),e._v(" "),n("p",[e._v("Sentinel 1.6.0 引入了 Sentinel API Gateway Adapter Common 模块，此模块中包含网关限流的规则和自定义 API 的实体和管理逻辑：")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("GatewayFlowRule")]),e._v("：网关限流规则，针对 API Gateway 的场景定制的限流规则，可以针对不同 route 或自定义的 API 分组进行限流，支持针对请求中的参数、Header、来源 IP 等进行定制化的限流。")]),e._v(" "),n("li",[n("code",[e._v("ApiDefinition")]),e._v("：用户自定义的 API 定义分组，可以看做是一些 URL 匹配的组合。比如我们可以定义一个 API 叫 my_api，请求 path 模式为 "),n("code",[e._v("/foo/**")]),e._v(" 和 "),n("code",[e._v("/baz/**")]),e._v(" 的都归到 my_api 这个 API 分组下面。限流的时候可以针对这个自定义的 API 分组维度进行限流。")])]),e._v(" "),n("p",[e._v("回头看"),n("code",[e._v("initGatewayRules")]),e._v("方法，我们通过"),n("code",[e._v("ApiDefinition")]),e._v("定义了一个API分组，名称为"),n("code",[e._v("captcha")]),e._v("，匹配的URL为"),n("code",[e._v("/auth/captcha")]),e._v("；然后通过"),n("code",[e._v("GatewayFlowRule")]),e._v("指定了限流的规则。其中网关限流规则 GatewayFlowRule 的字段解释如下：")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("resource")]),e._v("：资源名称，可以是网关中的 route 名称或者用户自定义的 API 分组名称。")]),e._v(" "),n("li",[n("code",[e._v("resourceMode")]),e._v("：规则是针对 API Gateway 的 route（RESOURCE_MODE_ROUTE_ID）还是用户在 Sentinel 中定义的 API 分组（RESOURCE_MODE_CUSTOM_API_NAME），默认是 route。")]),e._v(" "),n("li",[n("code",[e._v("grade")]),e._v("：限流指标维度，同限流规则的 grade 字段。\ncount：限流阈值")]),e._v(" "),n("li",[n("code",[e._v("intervalSec")]),e._v("：统计时间窗口，单位是秒，默认是 1 秒。")]),e._v(" "),n("li",[n("code",[e._v("controlBehavior")]),e._v("：流量整形的控制效果，同限流规则的 controlBehavior 字段，目前支持快速失败和匀速排队两种模式，默认是快速失败。")]),e._v(" "),n("li",[n("code",[e._v("burst")]),e._v("：应对突发请求时额外允许的请求数目。")]),e._v(" "),n("li",[n("code",[e._v("maxQueueingTimeoutMs")]),e._v("：匀速排队模式下的最长排队时间，单位是毫秒，仅在匀速排队模式下生效。")]),e._v(" "),n("li",[n("code",[e._v("paramItem")]),e._v("：参数限流配置。若不提供，则代表不针对参数进行限流，该网关规则将会被转换成普通流控规则；否则会转换成热点规则。其中的字段：")])]),e._v(" "),n("ol",[n("li",[n("code",[e._v("parseStrategy")]),e._v("：从请求中提取参数的策略，目前支持提取来源 IP（PARAM_PARSE_STRATEGY_CLIENT_IP）、Host（PARAM_PARSE_STRATEGY_HOST）、任意 Header（PARAM_PARSE_STRATEGY_HEADER）和任意 URL 参数（PARAM_PARSE_STRATEGY_URL_PARAM）四种模式。")]),e._v(" "),n("li",[n("code",[e._v("fieldName")]),e._v("：若提取策略选择 Header 模式或 URL 参数模式，则需要指定对应的 header 名称或 URL 参数名称。")]),e._v(" "),n("li",[n("code",[e._v("pattern")]),e._v("：参数值的匹配模式，只有匹配该模式的请求属性值会纳入统计和流控；若为空则统计该请求属性的所有值。（1.6.2 版本开始支持）")]),e._v(" "),n("li",[n("code",[e._v("matchStrategy")]),e._v("：参数值的匹配策略，目前支持精确匹配（PARAM_MATCH_STRATEGY_EXACT）、子串匹配（PARAM_MATCH_STRATEGY_CONTAINS）和正则匹配（PARAM_MATCH_STRATEGY_REGEX）。（1.6.2 版本开始支持）")])]),e._v(" "),n("p",[e._v("用户可以通过 GatewayRuleManager.loadRules(rules) 手动加载网关规则，或通过 GatewayRuleManager.register2Property(property) 注册动态规则源动态推送（推荐方式）。")]),e._v(" "),n("p",[e._v("所以上面的限流规则为：60秒内同一个IP，同一个key最多访问10次。")]),e._v(" "),n("p",[e._v("重启febs-gateway模块，在浏览器地址栏多次访问http://localhost:8301/auth/captcha?key=777774396请求，当第11次时，响应如下所示：")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://s2.ax1x.com/2019/08/14/mFJFsS.png",alt:"95.png"}})]),e._v(" "),n("p",[e._v("说明我们的限流处理是OK的。")]),e._v(" "),n("h2",{attrs:{id:"自定义限流异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义限流异常"}},[e._v("#")]),e._v(" 自定义限流异常")]),e._v(" "),n("p",[e._v("默认情况下，当接口超出流量限制后，Sentinel返回如下格式的JSON报文：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{"code":429, "message":"Sentinel block exception", "route":"captcha"}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);