(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{422:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在Linux上使用WireGuard创建内网连接，你可以按照以下步骤进行操作：")]),s._v(" "),a("ol",[a("li",[s._v("安装WireGuard：使用适合你的Linux发行版的包管理器，例如apt、yum或dnf，在系统上安装WireGuard软件包。例如，在Ubuntu上可以使用以下命令进行安装：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo apt update\nsudo apt install wireguard\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("生成密钥对：在每台设备上生成WireGuard所需的公钥和私钥对。你可以使用WireGuard提供的命令行工具"),a("code",[s._v("wg")]),s._v("来生成密钥对。在终端中执行以下命令：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("wg genkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" privatekey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" wg pubkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" publickey\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这将生成一个私钥文件"),a("code",[s._v("privatekey")]),s._v("和一个公钥文件"),a("code",[s._v("publickey")]),s._v("。")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("配置服务器端：选择一台设备作为WireGuard内网的服务器，创建服务器端配置文件。在终端中创建一个新文件（例如"),a("code",[s._v("wg0.conf")]),s._v("）并添加以下内容：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Interface"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nPrivateKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("服务器私钥"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("服务器IP地址/子网掩码"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nListenPort "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("监听端口"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Peer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nPublicKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("客户端公钥"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nAllowedIPs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("客户端IP地址/子网掩码"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("替换"),a("code",[s._v("<服务器私钥>")]),s._v("、"),a("code",[s._v("<服务器IP地址/子网掩码>")]),s._v("、"),a("code",[s._v("<监听端口>")]),s._v("、"),a("code",[s._v("<客户端公钥>")]),s._v("和"),a("code",[s._v("<客户端IP地址/子网掩码>")]),s._v("为实际的值。")]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("配置客户端：为每个加入内网的设备创建客户端配置文件。在终端中创建一个新文件（例如"),a("code",[s._v("wg0.conf")]),s._v("）并添加以下内容：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Interface"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nPrivateKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("客户端私钥"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("客户端IP地址/子网掩码"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Peer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nPublicKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("服务器公钥"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nEndpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("服务器公共IP地址:监听端口"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nAllowedIPs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("内网IP地址/子网掩码"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("替换"),a("code",[s._v("<客户端私钥>")]),s._v("、"),a("code",[s._v("<客户端IP地址/子网掩码>")]),s._v("、"),a("code",[s._v("<服务器公钥>")]),s._v("、"),a("code",[s._v("<服务器公共IP地址:监听端口>")]),s._v("和"),a("code",[s._v("<内网IP地址/子网掩码>")]),s._v("为实际的值。")]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[s._v("启动WireGuard接口：在服务器和客户端上启动WireGuard接口。在终端中执行以下命令：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" wg-quick up wg0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这将启动名为"),a("code",[s._v("wg0")]),s._v("的WireGuard接口。")]),s._v(" "),a("p",[s._v("完成上述步骤后，你的Linux设备就可以使用WireGuard进行内网连接。确保在防火墙中打开所使用的WireGuard监听端口，以允许来自其他设备的连接。")])])}),[],!1,null,null,null);a.default=r.exports}}]);