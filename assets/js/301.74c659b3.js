(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{650:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_8-1-基本说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-基本说明"}},[t._v("#")]),t._v(" 8.1 基本说明")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("Netty")]),t._v(" 的组件设计："),s("code",[t._v("Netty")]),t._v(" 的主要组件有 "),s("code",[t._v("Channel")]),t._v("、"),s("code",[t._v("EventLoop")]),t._v("、"),s("code",[t._v("ChannelFuture")]),t._v("、"),s("code",[t._v("ChannelHandler")]),t._v("、"),s("code",[t._v("ChannelPipe")]),t._v(" 等")]),t._v(" "),s("li",[s("code",[t._v("ChannelHandler")]),t._v(" 充当了处理入站和出站数据的应用程序逻辑的容器。例如，实现 "),s("code",[t._v("ChannelInboundHandler")]),t._v(" 接口（或 "),s("code",[t._v("ChannelInboundHandlerAdapter")]),t._v("），你就可以接收入站事件和数据，这些数据会被业务逻辑处理。当要给客户端发送响应时，也可以从 "),s("code",[t._v("ChannelInboundHandler")]),t._v(" 冲刷数据。业务逻辑通常写在一个或者多个 "),s("code",[t._v("ChannelInboundHandler")]),t._v(" 中。"),s("code",[t._v("ChannelOutboundHandler")]),t._v(" 原理一样，只不过它是用来处理出站数据的")]),t._v(" "),s("li",[s("code",[t._v("ChannelPipeline")]),t._v(" 提供了 "),s("code",[t._v("ChannelHandler")]),t._v(" 链的容器。以客户端应用程序为例，如果事件的运动方向是从客户端到服务端的，那么我们称这些事件为出站的，即客户端发送给服务端的数据会通过 "),s("code",[t._v("pipeline")]),t._v(" 中的一系列 "),s("code",[t._v("ChannelOutboundHandler")]),t._v("，并被这些 "),s("code",[t._v("Handler")]),t._v(" 处理，反之则称为入站的")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lixuanfengs.github.io/blog-images/cactus-vuepress-img/chapter08_01.png",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"_8-2编码解码器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2编码解码器"}},[t._v("#")]),t._v(" 8.2编码解码器")]),t._v(" "),s("ol",[s("li",[t._v("当 "),s("code",[t._v("Netty")]),t._v(" 发送或者接受一个消息的时候，就将会发生一次数据转换。入站消息会被解码：从字节转换为另一种格式（比如 "),s("code",[t._v("java")]),t._v(" 对象）；如果是出站消息，它会被编码成字节。")]),t._v(" "),s("li",[s("code",[t._v("Netty")]),t._v(" 提供一系列实用的编解码器，他们都实现了 "),s("code",[t._v("ChannelInboundHadnler")]),t._v(" 或者 "),s("code",[t._v("ChannelOutboundHandler")]),t._v(" 接口。在这些类中，"),s("code",[t._v("channelRead")]),t._v(" 方法已经被重写了。以入站为例，对于每个从入站 "),s("code",[t._v("Channel")]),t._v(" 读取的消息，这个方法会被调用。随后，它将调用由解码器所提供的 "),s("code",[t._v("decode()")]),t._v(" 方法进行解码，并将已经解码的字节转发给 "),s("code",[t._v("ChannelPipeline")]),t._v(" 中的下一个 "),s("code",[t._v("ChannelInboundHandler")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"_8-3-解码器-bytetomessagedecoder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-解码器-bytetomessagedecoder"}},[t._v("#")]),t._v(" 8.3 解码器 - ByteToMessageDecoder")]),t._v(" "),s("ol",[s("li",[t._v("关系继承图")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lixuanfengs.github.io/blog-images/cactus-vuepress-img/chapter08_02.png",alt:"img"}})]),t._v(" "),s("ol",[s("li",[t._v("由于不可能知道远程节点是否会一次性发送一个完整的信息，"),s("code",[t._v("tcp")]),t._v(" 有可能出现粘包拆包的问题，这个类会对入站数据进行缓冲，直到它准备好被处理.")]),t._v(" "),s("li",[t._v("一个关于 "),s("code",[t._v("ByteToMessageDecoder")]),t._v(" 实例分析")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lixuanfengs.github.io/blog-images/cactus-vuepress-img/chapter08_03.png",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lixuanfengs.github.io/blog-images/cactus-vuepress-img/chapter08_04.png",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"_8-4-netty-的-handler-链的调用机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-netty-的-handler-链的调用机制"}},[t._v("#")]),t._v(" 8.4 Netty 的 handler 链的调用机制")]),t._v(" "),s("p",[t._v("实例要求:")]),t._v(" "),s("ol",[s("li",[t._v("使用自定义的编码器和解码器来说明 "),s("code",[t._v("Netty")]),t._v(" 的 "),s("code",[t._v("handler")]),t._v(" 调用机制 客户端发送 "),s("code",[t._v("long")]),t._v(" -> 服务器 服务端发送 "),s("code",[t._v("long")]),t._v(" -> 客户端")]),t._v(" "),s("li",[t._v("案例演示")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lixuanfengs.github.io/blog-images/cactus-vuepress-img/chapter08_05.png",alt:"img"}})]),t._v(" "),s("ol",[s("li",[t._v("结论\n"),s("ul",[s("li",[t._v("不论解码器 "),s("code",[t._v("handler")]),t._v(" 还是编码器 "),s("code",[t._v("handler")]),t._v(" 即接收的消息类型必须与待处理的消息类型一致，否则该 "),s("code",[t._v("handler")]),t._v(" 不会被执行")]),t._v(" "),s("li",[t._v("在解码器进行数据解码时，需要判断缓存区（"),s("code",[t._v("ByteBuf")]),t._v("）的数据是否足够，否则接收到的结果会期望结果可能不一致")])])])]),t._v(" "),s("h2",{attrs:{id:"_8-5-解码器-replayingdecoder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-解码器-replayingdecoder"}},[t._v("#")]),t._v(" 8.5 解码器 - ReplayingDecoder")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("public abstract class ReplayingDecoder<S> extends ByteToMessageDecoder")])]),t._v(" "),s("li",[s("code",[t._v("ReplayingDecoder")]),t._v(" 扩展了 "),s("code",[t._v("ByteToMessageDecoder")]),t._v(" 类，使用这个类，我们不必调用 "),s("code",[t._v("readableBytes()")]),t._v(" 方法。参数 "),s("code",[t._v("S")]),t._v(" 指定了用户状态管理的类型，其中 "),s("code",[t._v("Void")]),t._v(" 代表不需要状态管理")]),t._v(" "),s("li",[t._v("应用实例：使用 "),s("code",[t._v("ReplayingDecoder")]),t._v(" 编写解码器，对前面的案例进行简化[案例演示]")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cactusli"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("netty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inboundhandlerandoutboundhandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("netty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteBuf")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("netty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelHandlerContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("netty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("codec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReplayingDecoder")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyByteToLongDecoder2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReplayingDecoder")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelHandlerContext")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteBuf")]),t._v(" in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyByteToLongDecoder2 被调用"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在 ReplayingDecoder 不需要判断数据是否足够读取，内部会进行处理判断")]),t._v("\n        out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readLong")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Copy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("clipboardErrorCopied")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("ol",[s("li",[s("code",[t._v("ReplayingDecoder")]),t._v("使用方便，但它也有一些局限性：\n"),s("ul",[s("li",[t._v("并不是所有的 "),s("code",[t._v("ByteBuf")]),t._v(" 操作都被支持，如果调用了一个不被支持的方法，将会抛出一个 "),s("code",[t._v("UnsupportedOperationException")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("ReplayingDecoder")]),t._v(" 在某些情况下可能稍慢于 "),s("code",[t._v("ByteToMessageDecoder")]),t._v("，例如网络缓慢并且消息格式复杂时，消息会被拆成了多个碎片，速度变慢")])])])]),t._v(" "),s("h2",{attrs:{id:"_8-6-其它编解码器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-6-其它编解码器"}},[t._v("#")]),t._v(" 8.6 其它编解码器")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lixuanfengs.github.io/blog-images/cactus-vuepress-img/chapter08_06.png",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"_8-6-1-其它解码器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-6-1-其它解码器"}},[t._v("#")]),t._v(" 8.6.1 其它解码器")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("LineBasedFrameDecoder")]),t._v("：这个类在 "),s("code",[t._v("Netty")]),t._v(" 内部也有使用，它使用行尾控制字符（\\n或者\\r\\n）作为分隔符来解析数据。")]),t._v(" "),s("li",[s("code",[t._v("DelimiterBasedFrameDecoder")]),t._v("：使用自定义的特殊字符作为消息的分隔符。")]),t._v(" "),s("li",[s("code",[t._v("HttpObjectDecoder")]),t._v("：一个 "),s("code",[t._v("HTTP")]),t._v(" 数据的解码器")]),t._v(" "),s("li",[s("code",[t._v("LengthFieldBasedFrameDecoder")]),t._v("：通过指定长度来标识整包消息，这样就可以自动的处理黏包和半包消息。")])]),t._v(" "),s("h3",{attrs:{id:"_8-6-2-其它编码器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-6-2-其它编码器"}},[t._v("#")]),t._v(" 8.6.2 其它编码器")]),t._v(" "),s("h2",{attrs:{id:"_8-7-log4j-整合到-netty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-7-log4j-整合到-netty"}},[t._v("#")]),t._v(" 8.7 Log4j 整合到 Netty")]),t._v(" "),s("ol",[s("li",[t._v("在 "),s("code",[t._v("Maven")]),t._v(" 中添加对 "),s("code",[t._v("Log4j")]),t._v(" 的依赖在 "),s("code",[t._v("pom.xml")])])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("log4j"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("log4j"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.2.17"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.slf4j"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("slf4j-api"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.7.25"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.slf4j"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("slf4j-log4j12"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.7.25"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.slf4j"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("slf4j-simple"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.7.25"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Copy to clipboardErrorCopied\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br")])]),s("ol",[s("li",[t._v("配置 "),s("code",[t._v("Log4j")]),t._v("，在 "),s("code",[t._v("resources/log4j.properties")])])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("log4j.rootLogger=DEBUG,stdout\nlog4j.appender.stdout=org.apache.log4j.ConsoleAppender\nlog4j.appender.stdout.layout=org.apache.log4j.PatternLayout\nlog4j.appender.stdout.layout.ConversionPattern=[%p]%C{1}-%m%nCopy to clipboardErrorCopied\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ol",[s("li",[t._v("演示整合")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lixuanfengs.github.io/blog-images/cactus-vuepress-img/chapter08_07.png",alt:"img"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);