(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{687:function(e,s,n){"use strict";n.r(s);var t=n(0),r=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("在搭建febs-auth的时候，我们在认证服务器配置类"),s("code",[e._v("FebsAuthorizationServerConfigure")]),e._v("里使用硬编码的形式配置了client_id，client_secret等信息。硬编码的形式不利于代码维护和升级，所以我们需要将它改造为可配置的方式。")]),e._v(" "),s("p",[e._v("在febs-auth模块的cc.mrbird.febs.auth路径下新建properties包，然后在该包下新建一个Client配置类"),s("code",[e._v("FebsClientsProperties")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Data\npublic class FebsClientsProperties {\n\n    private String client;\n    private String secret;\n    private String grantType = "password,authorization_code,refresh_token";\n    private String scope = "all";\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[s("code",[e._v("client")]),e._v("对应client_id，"),s("code",[e._v("secret")]),e._v("对应client_secret，"),s("code",[e._v("grantType")]),e._v("对应当前令牌支持的认证类型，"),s("code",[e._v("scope")]),e._v("对应认证范围。"),s("code",[e._v("grantType")]),e._v("和"),s("code",[e._v("scope")]),e._v("包含默认值。")]),e._v(" "),s("p",[e._v("接着新建一个和Auth相关的配置类"),s("code",[e._v("FebsAuthProperties")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Data\n@SpringBootConfiguration\n@PropertySource(value = {"classpath:febs-auth.properties"})\n@ConfigurationProperties(prefix = "febs.auth")\npublic class FebsAuthProperties {\n\n    private FebsClientsProperties[] clients = {};\n    private int accessTokenValiditySeconds = 60 * 60 * 24;\n    private int refreshTokenValiditySeconds = 60 * 60 * 24 * 7;\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("p",[s("code",[e._v("clients")]),e._v("属性类型为上面定义的"),s("code",[e._v("FebsClientsProperties")]),e._v("，因为一个认证服务器可以根据多种Client来发放对应的令牌，所以这个属性使用的是数组形式；"),s("code",[e._v("accessTokenValiditySeconds")]),e._v("用于指定access_token的有效时间，默认值为"),s("code",[e._v("60 * 60 * 24")]),e._v("秒；"),s("code",[e._v("refreshTokenValiditySeconds")]),e._v("用于指定refresh_token的有效时间，默认值为"),s("code",[e._v("60 * 60 * 24 * 7")]),e._v("秒。")]),e._v(" "),s("p",[s("code",[e._v('@PropertySource(value = {"classpath:febs-auth.properties"})')]),e._v("用于指定读取的配置文件路径；"),s("code",[e._v('@ConfigurationProperties(prefix = "febs.auth")')]),e._v("指定了要读取的属性的统一前缀名称为"),s("code",[e._v("febs.auth")]),e._v("；"),s("code",[e._v("@SpringBootConfiguration")]),e._v("实质上为"),s("code",[e._v("@Component")]),e._v("的派生注解，用于将"),s("code",[e._v("FebsAuthProperties")]),e._v("纳入到IOC容器中。")]),e._v(" "),s("p",[e._v("自定义配置类还需引入"),s("code",[e._v("spring-boot-configuration-processor")]),e._v("依赖，因为这个依赖会在多个微服务子系统里使用到，所以将其添加到febs-common的pom文件中：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-configuration-processor</artifactId>\n    <optional>true</optional>\n</dependency>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("接下来在febs-auth的resources路径下新建配置文件"),s("code",[e._v("febs-auth.properties")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("febs.auth.accessTokenValiditySeconds=86400\nfebs.auth.refreshTokenValiditySeconds=604800\n\nfebs.auth.clients[0].client=febs\nfebs.auth.clients[0].secret=123456\nfebs.auth.clients[0].grantType=password,authorization_code,refresh_token\nfebs.auth.clients[0].scope=all\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("去除"),s("code",[e._v("febs.auth")]),e._v("前缀，剩下部分和"),s("code",[e._v("FebsAuthProperties")]),e._v("配置类属性名称对应上的话，就会被读取到"),s("code",[e._v("FebsAuthProperties")]),e._v("相应的属性中。数组形式的属性值使用"),s("code",[e._v("[]")]),e._v("加元素下标表示，具体可以参考properties文件的语法。")]),e._v(" "),s("p",[e._v("定义好"),s("code",[e._v("FebsAuthProperties")]),e._v("配置类后，我们就可以在认证服务器配置类"),s("code",[e._v("FebsAuthorizationServerConfigure")]),e._v("中注入使用了，改造"),s("code",[e._v("FebsAuthorizationServerConfigure")]),e._v("，代码如下所示：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Configuration\n@EnableAuthorizationServer\npublic class FebsAuthorizationServerConfigure extends AuthorizationServerConfigurerAdapter {\n\n    @Autowired\n    private AuthenticationManager authenticationManager;\n    @Autowired\n    private RedisConnectionFactory redisConnectionFactory;\n    @Autowired\n    private FebsUserDetailService userDetailService;\n    @Autowired\n    private PasswordEncoder passwordEncoder;\n    @Autowired\n    private FebsAuthProperties authProperties;\n\n    @Override\n    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {\n        FebsClientsProperties[] clientsArray = authProperties.getClients();\n        InMemoryClientDetailsServiceBuilder builder = clients.inMemory();\n        if (ArrayUtils.isNotEmpty(clientsArray)) {\n            for (FebsClientsProperties client : clientsArray) {\n                if (StringUtils.isBlank(client.getClient())) {\n                    throw new Exception("client不能为空");\n                }\n                if (StringUtils.isBlank(client.getSecret())) {\n                    throw new Exception("secret不能为空");\n                }\n                String[] grantTypes = StringUtils.splitByWholeSeparatorPreserveAllTokens(client.getGrantType(), ",");\n                builder.withClient(client.getClient())\n                        .secret(passwordEncoder.encode(client.getSecret()))\n                        .authorizedGrantTypes(grantTypes)\n                        .scopes(client.getScope());\n            }\n        }\n    }\n\n    @Override\n    public void configure(AuthorizationServerEndpointsConfigurer endpoints) {\n        endpoints.tokenStore(tokenStore())\n                .userDetailsService(userDetailService)\n                .authenticationManager(authenticationManager)\n                .tokenServices(defaultTokenServices());\n    }\n\n    @Bean\n    public TokenStore tokenStore() {\n        return new RedisTokenStore(redisConnectionFactory);\n    }\n\n    @Primary\n    @Bean\n    public DefaultTokenServices defaultTokenServices() {\n        DefaultTokenServices tokenServices = new DefaultTokenServices();\n        tokenServices.setTokenStore(tokenStore());\n        tokenServices.setSupportRefreshToken(true);\n        tokenServices.setAccessTokenValiditySeconds(authProperties.getAccessTokenValiditySeconds());\n        tokenServices.setRefreshTokenValiditySeconds(authProperties.getRefreshTokenValiditySeconds());\n        return tokenServices;\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br"),s("span",{staticClass:"line-number"},[e._v("56")]),s("br"),s("span",{staticClass:"line-number"},[e._v("57")]),s("br"),s("span",{staticClass:"line-number"},[e._v("58")]),s("br"),s("span",{staticClass:"line-number"},[e._v("59")]),s("br"),s("span",{staticClass:"line-number"},[e._v("60")]),s("br")])]),s("p",[e._v("修改的地方主要有：")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("configure(ClientDetailsServiceConfigurer clients)")]),e._v("方法由原先硬编码的形式改造成了从配置文件读取配置的形式，并且判断了client和secret不能为空；")]),e._v(" "),s("li",[s("code",[e._v("defaultTokenServices")]),e._v("方法指定有效时间也从原先硬编码的形式改造成了从配置文件读取配置的形式。")])]),e._v(" "),s("p",[e._v("在后续的编码中，参数的配置方式都采取这种形式。")]),e._v(" "),s("p",[e._v("重新启动febs-auth，以debug的方式启动，在"),s("code",[e._v("FebsAuthorizationServerConfigure")]),e._v("的"),s("code",[e._v("configure(ClientDetailsServiceConfigurer clients)")]),e._v("方法上打上断点：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/08/07/e5sesO.png",alt:"63.png"}})]),e._v(" "),s("p",[e._v("可以看到配置参数已经成功读取到。再次发送获取令牌请求，看看是否能够成功获取：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/08/07/e5sWTJ.png",alt:"64.png"}})]),e._v(" "),s("p",[e._v("没有问题，说明我们的改造是OK的。")])])}),[],!1,null,null,null);s.default=r.exports}}]);