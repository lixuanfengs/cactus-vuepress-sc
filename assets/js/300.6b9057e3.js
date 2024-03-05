(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{648:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_7-1-编码和解码的基本介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-编码和解码的基本介绍"}},[s._v("#")]),s._v(" 7.1 编码和解码的基本介绍")]),s._v(" "),t("ol",[t("li",[s._v("编写网络应用程序时，因为数据在网络中传输的都是二进制字节码数据，在发送数据时就需要编码，接收数据时就需要解码[示意图]")]),s._v(" "),t("li",[t("code",[s._v("codec")]),s._v("（编解码器）的组成部分有两个："),t("code",[s._v("decoder")]),s._v("（解码器）和 "),t("code",[s._v("encoder")]),s._v("（编码器）。"),t("code",[s._v("encoder")]),s._v(" 负责把业务数据转换成字节码数据，"),t("code",[s._v("decoder")]),s._v(" 负责把字节码数据转换成业务数据")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://lixuanfengs.github.io/blog-images/cactus-vuepress-img/chapter07_01.png",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"_7-2-netty-本身的编码解码的机制和问题分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-netty-本身的编码解码的机制和问题分析"}},[s._v("#")]),s._v(" 7.2 Netty 本身的编码解码的机制和问题分析")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("Netty")]),s._v(" 自身提供了一些 "),t("code",[s._v("codec")]),s._v("(编解码器)")]),s._v(" "),t("li",[t("code",[s._v("Netty")]),s._v(" 提供的编码器 "),t("code",[s._v("StringEncoder")]),s._v("，对字符串数据进行编码 "),t("code",[s._v("ObjectEncoder")]),s._v("，对Java对象进行编码...")]),s._v(" "),t("li",[t("code",[s._v("Netty")]),s._v(" 提供的解码器 "),t("code",[s._v("StringDecoder")]),s._v(",对字符串数据进行解码 "),t("code",[s._v("ObjectDecoder")]),s._v("，对 "),t("code",[s._v("Java")]),s._v(" 对象进行解码...")]),s._v(" "),t("li",[t("code",[s._v("Netty")]),s._v(" 本身自带的 "),t("code",[s._v("ObjectDecoder")]),s._v(" 和 "),t("code",[s._v("ObjectEncoder")]),s._v(" 可以用来实现 "),t("code",[s._v("POJO")]),s._v(" 对象或各种业务对象的编码和解码，底层使用的仍是Java序列化技术,而Java序列化技术本身效率就不高，存在如下问题\n"),t("ul",[t("li",[s._v("无法跨语言")]),s._v(" "),t("li",[s._v("序列化后的体积太大，是二进制编码的5倍多。")]),s._v(" "),t("li",[s._v("序列化性能太低")])])]),s._v(" "),t("li",[s._v("=>引出新的解决方案["),t("code",[s._v("Google")]),s._v(" 的 "),t("code",[s._v("Protobuf")]),s._v("]")])]),s._v(" "),t("h2",{attrs:{id:"_7-3-protobuf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-protobuf"}},[s._v("#")]),s._v(" 7.3 Protobuf")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("Protobuf")]),s._v(" 基本介绍和使用示意图")]),s._v(" "),t("li",[t("code",[s._v("Protobuf")]),s._v(" 是 "),t("code",[s._v("Google")]),s._v(" 发布的开源项目，全称 "),t("code",[s._v("Google Protocol Buffers")]),s._v("，是一种轻便高效的结构化数据存储格式，可以用于结构化数据串行化，或者说序列化。它很适合做数据存储或 "),t("code",[s._v("RPC")]),s._v(" [远程过程调用 "),t("code",[s._v("remote procedure call")]),s._v(" ]数据交换格式。目前很多公司 "),t("code",[s._v("http + json tcp + protobuf")])]),s._v(" "),t("li",[s._v("参考文档：https://developers.google.com/protocol-buffers/docs/proto 语言指南")]),s._v(" "),t("li",[t("code",[s._v("Protobuf")]),s._v(" 是以 "),t("code",[s._v("message")]),s._v(" 的方式来管理数据的.")]),s._v(" "),t("li",[s._v("支持跨平台、跨语言，即[客户端和服务器端可以是不同的语言编写的]（支持目前绝大多数语言，例如 "),t("code",[s._v("C++")]),s._v("、"),t("code",[s._v("C#")]),s._v("、"),t("code",[s._v("Java")]),s._v("、"),t("code",[s._v("python")]),s._v(" 等）")]),s._v(" "),t("li",[s._v("高性能，高可靠性")]),s._v(" "),t("li",[s._v("使用 "),t("code",[s._v("protobuf")]),s._v(" 编译器能自动生成代码，"),t("code",[s._v("Protobuf")]),s._v(" 是将类的定义使用 "),t("code",[s._v(".proto")]),s._v(" 文件进行描述。说明，在 "),t("code",[s._v("idea")]),s._v(" 中编写 "),t("code",[s._v(".proto")]),s._v(" 文件时，会自动提示是否下载 "),t("code",[s._v(".ptoto")]),s._v(" 编写插件.可以让语法高亮。")]),s._v(" "),t("li",[s._v("然后通过 "),t("code",[s._v("protoc.exe")]),s._v(" 编译器根据 "),t("code",[s._v(".proto")]),s._v(" 自动生成 "),t("code",[s._v(".java")]),s._v(" 文件")]),s._v(" "),t("li",[t("code",[s._v("protobuf")]),s._v(" 使用示意图")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://lixuanfengs.github.io/blog-images/cactus-vuepress-img/chapter07_02.png",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"_7-4-protobuf-快速入门实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-protobuf-快速入门实例"}},[s._v("#")]),s._v(" 7.4 Protobuf 快速入门实例")]),s._v(" "),t("p",[s._v("编写程序，使用 "),t("code",[s._v("Protobuf")]),s._v(" 完成如下功能")]),s._v(" "),t("ol",[t("li",[s._v("客户端可以发送一个 "),t("code",[s._v("StudentPoJo")]),s._v(" 对象到服务器(通过 "),t("code",[s._v("Protobuf")]),s._v(" 编码)")]),s._v(" "),t("li",[s._v("服务端能接收 "),t("code",[s._v("StudentPoJo")]),s._v(" 对象，并显示信息(通过 "),t("code",[s._v("Protobuf")]),s._v(" 解码)")]),s._v(" "),t("li",[s._v("具体看老师演示步骤")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("proto\n\nsyntax "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proto3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//版本")]),s._v("\noption java_outer_classname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"StudentPOJO"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//生成的外部类名，同时也是文件名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//protobuf 使用message 管理数据")]),s._v("\nmessage "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//会在 StudentPOJO 外部类生成一个内部类 Student， 他是真正发送的POJO对象")]),s._v("\n    int32 id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Student 类中有 一个属性 名字为 id 类型为int32(protobuf类型) 1表示属性序号，不是值")]),s._v("\n    string name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n编译\nprotoc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exe"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("java_out"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Student"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("proto\n将生成的 "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StudentPOJO")]),s._v(" 放入到项目使用"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Copy")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("clipboardErrorCopied")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"_7-5-protobuf-快速入门实例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-protobuf-快速入门实例-2"}},[s._v("#")]),s._v(" 7.5 Protobuf 快速入门实例 2")]),s._v(" "),t("ol",[t("li",[s._v("编写程序，使用 "),t("code",[s._v("Protobuf")]),s._v(" 完成如下功能")]),s._v(" "),t("li",[s._v("客户端可以随机发送 "),t("code",[s._v("StudentPoJo")]),s._v(" / "),t("code",[s._v("WorkerPoJo")]),s._v(" 对象到服务器(通过 "),t("code",[s._v("Protobuf")]),s._v(" 编码)")]),s._v(" "),t("li",[s._v("服务端能接收 "),t("code",[s._v("StudentPoJo")]),s._v(" / "),t("code",[s._v("WorkerPoJo")]),s._v(" 对象(需要判断是哪种类型)，并显示信息(通过 "),t("code",[s._v("Protobuf")]),s._v(" 解码)")]),s._v(" "),t("li",[s._v("具体看老师演示步骤")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("proto\n\nsyntax "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proto3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\noption optimize_for "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SPEED")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加快解析")]),s._v("\noption java_package"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.cactusli.netty.codec2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//指定生成到哪个包下")]),s._v("\noption java_outer_classname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MyDataInfo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 外部类名, 文件名")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//protobuf 可以使用message 管理其他的message")]),s._v("\nmessage "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyMessage")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//定义一个枚举类型")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DataType")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StudentType")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在proto3 要求enum的编号从0开始")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WorkerType")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用data_type 来标识传的是哪一个枚举类型")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DataType")]),s._v(" data_type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//表示每次枚举类型最多只能出现其中的一个, 节省空间")]),s._v("\n    oneof dataBody "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),s._v(" student "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Worker")]),s._v(" worker "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\nmessage "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    int32 id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Student类的属性")]),s._v("\n    string name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nmessage "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Worker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    string name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    int32 age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Copy")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("clipboardErrorCopied")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);