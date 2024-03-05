(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{478:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1 前言")]),t._v(" "),a("p",[t._v("这是 SpringBoot2.1 源码分析专题的第一篇文章，主要讲如何来搭建我们的源码阅读调试环境。如果有经验的小伙伴们可以略过此篇文章。")]),t._v(" "),a("h2",{attrs:{id:"_2-环境安装要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-环境安装要求"}},[t._v("#")]),t._v(" 2 环境安装要求")]),t._v(" "),a("ul",[a("li",[t._v("IntelliJ IDEA")]),t._v(" "),a("li",[t._v("JDK1.8")]),t._v(" "),a("li",[t._v("Maven3.5 以上")])]),t._v(" "),a("h2",{attrs:{id:"_3-从-github-上将-springboot-源码项目下载下来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-从-github-上将-springboot-源码项目下载下来"}},[t._v("#")]),t._v(" 3 从 Github 上将 SpringBoot 源码项目下载下来")]),t._v(" "),a("p",[t._v("首先提供"),a("strong",[t._v("SpringBoot2.1.0")]),t._v("的 github 地址： "),a("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fspring-projects%2Fspring-boot%2Ftree%2Fv2.1.0.RELEASE",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/spring-proj…"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("因为要进行阅读源码和分析源码项目，我们是不是要在里面写一些注释帮助我们阅读理解源码，因此需要将 SpringBoot 源码项目 fork 到自己的 github 仓库中，然后再利用"),a("strong",[t._v("git clone url")]),t._v("命令将已经 fork 到自己 github 仓库的 SpringBoot 源码拉取下来即可。 但由于以上方式往往很慢，通常会超时，所以笔者直接将 SpringBoot 项目直接下载下来，然后再导入 IDEA 中。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/a3cd3199a36c2d81ddd1ffca11498335.webp",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"_4-将-springboot-源码项目导入到-idea-中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-将-springboot-源码项目导入到-idea-中"}},[t._v("#")]),t._v(" 4 将 SpringBoot 源码项目导入到 IDEA 中")]),t._v(" "),a("p",[t._v("将刚才下载的 "),a("code",[t._v("spring-boot2.1.0.RELEASE")]),t._v(" 项目选择 maven 方式导入到 IDEA 中，然后一直 next 即可导入完成，注意选择 JDK 版本是 1.8，maven 版本是 3.5+。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/85eaea6fbe7c4b23a3b4a3cc188f120a.webp",alt:"img"}})]),t._v(" "),a("p",[t._v("此时下载 maven 依赖是一个漫长的等待过程，建议 maven 没有配置（阿-里-云）仓库的小伙伴们配置一下，这样下载速度会快很多。参考"),a("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fzhuzj12345%2Farticle%2Fdetails%2F93200211",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置 maven 使用（阿-里-云）仓库"),a("OutboundLink")],1),t._v("进行配置即可。")]),t._v(" "),a("h2",{attrs:{id:"_5-编译构建-springboot-源码项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-编译构建-springboot-源码项目"}},[t._v("#")]),t._v(" 5 编译构建 SpringBoot 源码项目")]),t._v(" "),a("p",[t._v("此时导入项目后，我们进行编译构建 SpringBoot 源码项目了，在构建之前做两个配置：")]),t._v(" "),a("p",[t._v("1、我们要禁用 maven 的代码检查，在根 "),a("code",[t._v("pom.xml")]),t._v(" 中增加一下配置即可，如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/94f0e6f8c7d5015cde136b42a27a3cfa.webp",alt:"img"}})]),t._v(" "),a("p",[t._v("2、可能有的小伙伴们的 "),a("code",[t._v("pom.xml")]),t._v(" 文件的 project 标签上显示"),a("code",[t._v("java.lang.OutOfMemoryError")]),t._v("错误，这是因为 IDEA 里的 Maven 的 importer 设置的 JVM 最大堆内存过小而导致的，如下图,此时可参考"),a("a",{attrs:{href:"https://blog.csdn.net/w605283073/article/details/85107497",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven 依赖包导入错误（IntelliJ IDEA）"),a("OutboundLink")],1),t._v("解决即可。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/863e78459637e2a17cbf7f83010a6f9c.webp",alt:"img"}})]),t._v(" "),a("p",[t._v("进行了上面的两点配置后，此时我们就可以直接执行以下 maven 命令来编译构建源码项目了。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mvn clean "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DskipTests")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Pfast")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/ca5afaba8223ea1378994cbab03378aa.webp",alt:"img"}}),t._v(" 此时又是漫长的等待，我这里等待 5 分钟左右就显示构建成功了，如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/5635c9e9e36d9e3548dc4a69cba78693.webp",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"_6-运行-springboot-自带的-sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-运行-springboot-自带的-sample"}},[t._v("#")]),t._v(" 6 运行 SpringBoot 自带的 sample")]),t._v(" "),a("p",[t._v("因为 SpringBoot 源码中的 "),a("code",[t._v("spring-boot-samples")]),t._v(" 模块自带了很多 DEMO 样例，我们可以利用其中的一个 sample 来测试运行刚刚构建的 springboot 源码项目即可。但此时发现 "),a("code",[t._v("spring-boot-samples")]),t._v(" 模块是灰色的，如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/5c09d85931ddf508b301d63761d756a9.webp",alt:"img"}})]),t._v(" "),a("p",[t._v("这是因为 "),a("code",[t._v("spring-boot-samples")]),t._v(" 模块没有被添加到根 "),a("code",[t._v("pom.xml")]),t._v(" 中，此时将其添加到根 "),a("code",[t._v("pom.xml")]),t._v(" 中即可，增加如下配置，如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/937641c8dd5d6d7cfae00f8ecddf463b.webp",alt:"img"}}),t._v(" 此时我们挑选 "),a("code",[t._v("spring-boot-samples")]),t._v(" 模块下的 "),a("code",[t._v("spring-boot-sample-tomcat")]),t._v(" 样例项目来测试好了，此时启动"),a("code",[t._v("SampleTomcatApplication")]),t._v("的"),a("code",[t._v("main")]),t._v("函数，启动成功界面如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/15ebc148f1959861b8e380ba30b8063e.webp",alt:"img"}}),t._v(" 然后我们再在浏览器发送一个 HTTP 请求，此时可以看到服务端成功返回响应，说明此时 SpringBoot 源码环境就已经构建成功了，接下来我们就可以进行调试了，如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.statically.io/gh/lixuanfengs/blog-images/master/cactus-blogs/a22fa7628251e5dcbcb0f29d4c363016.webp",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"_7-动手实践环节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-动手实践环节"}},[t._v("#")]),t._v(" 7 动手实践环节")]),t._v(" "),a("p",[t._v("前面已经成功构建了 SpringBoot 的源码阅读环境，小伙伴们记得自己动手搭建一套属于自己的 SpringBoot 源码调试环境哦，阅读源码动手调试很重要，嘿嘿。")])])}),[],!1,null,null,null);a.default=r.exports}}]);