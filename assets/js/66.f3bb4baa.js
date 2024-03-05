(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{414:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"基础命令学习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础命令学习"}},[s._v("#")]),s._v(" 基础命令学习")]),s._v(" "),t("h3",{attrs:{id:"查看集群中的节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看集群中的节点"}},[s._v("#")]),s._v(" 查看集群中的节点")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get node")]),s._v("\nNAME          STATUS   ROLES                  AGE   VERSION\nk8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1   Ready    control"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plane"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("master   35h   v1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.14")]),s._v("\nk8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master2   Ready    control"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plane"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("master   23h   v1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.14")]),s._v("\nk8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master3   Ready    control"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plane"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("master   23h   v1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.14")]),s._v("\nk8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1     Ready    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                 23h   v1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.14")]),s._v("\nk8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2     Ready    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                 23h   v1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.14")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -owide可以查到详细的信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get node -owide")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("img",{attrs:{src:"images%5Cimage10.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"kubectl自动补全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubectl自动补全"}},[s._v("#")]),s._v(" kubectl自动补全")]),s._v(" "),t("h4",{attrs:{id:"安装软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装软件"}},[s._v("#")]),s._v(" 安装软件")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum -y install bash-completion")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"配置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[s._v("#")]),s._v(" 配置环境变量")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 bash 中设置当前 shell 的自动补全")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# source <(kubectl completion bash)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加到环境变量中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo  "source <(kubectl completion bash)" >> ~/.bashrc')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"显示集群的配置信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示集群的配置信息"}},[s._v("#")]),s._v(" 显示集群"),t("em",[s._v("的")]),s._v("配置信息")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl config view")]),s._v("\napiVersion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\nclusters"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" cluster"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    certificate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("authority"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" DATA"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("OMITTED\n    server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.2")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".32")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".14")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16443")]),s._v("\n  name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubernetes\ncontexts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    cluster"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubernetes\n    user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("admin\n  name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("admin@kubernetes\ncurrent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("admin@kubernetes\nkind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Config\npreferences"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nusers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("admin\n  user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    client"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("certificate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" REDACTED\n    client"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" REDACTED\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"创建对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建对象"}},[s._v("#")]),s._v(" 创建对象")]),s._v(" "),t("h4",{attrs:{id:"创建资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建资源"}},[s._v("#")]),s._v(" 创建资源")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl  apply -f dashboard.yaml")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"多文件创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多文件创建"}},[s._v("#")]),s._v(" 多文件创建")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl  apply -f dashboard.yaml -f dashboard-user.yaml")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"创建单实例nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建单实例nginx"}},[s._v("#")]),s._v(" 创建单实例nginx")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create deployment nginx --image=nginx")]),s._v("\ndeployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apps"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx created\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"查看资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看资源"}},[s._v("#")]),s._v(" 查看资源")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get deploy")]),s._v("\nNAME    READY   UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("TO"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("DATE   AVAILABLE   AGE\nnginx   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("           48s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"生成yaml文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成yaml文件"}},[s._v("#")]),s._v(" 生成yaml文件")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create deployment nginx2 --image=nginx --dry-run=client -oyaml > nginx2-dp.yaml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\n nginx2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("yaml\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat nginx2-dp.yaml")]),s._v("\napiVersion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v1\nkind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deployment\nmetadata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  creationTimestamp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" null\n  labels"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx2\n  name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx2\nspec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  replicas"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  selector"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    matchLabels"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx2\n  strategy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  template"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    metadata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      creationTimestamp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" null\n      labels"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx2\n    spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      containers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" image"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nstatus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("    \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h3",{attrs:{id:"删除资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除资源"}},[s._v("#")]),s._v(" 删除资源")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n kube-system 加上命名空间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl delete deploy nginx ")]),s._v("\ndeployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apps "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v(" deleted\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"查看资源-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看资源-2"}},[s._v("#")]),s._v(" 查看资源")]),s._v(" "),t("h4",{attrs:{id:"查找当前services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找当前services"}},[s._v("#")]),s._v(" 查找当前services")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl  get service")]),s._v("\nNAME         TYPE        CLUSTER"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("IP   EXTERNAL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("IP   PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   AGE\nkubernetes   ClusterIP   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("TCP   36h\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有命名空间下的全部的 Pods")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pods --all-namespaces")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"查看命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看命名空间"}},[s._v("#")]),s._v(" 查看命名空间")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  kubectl get namespaces")]),s._v("\nNAME                   STATUS   AGE\ndefault                Active   36h\nkube"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("lease        Active   36h\nkube"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("public            Active   36h\nkube"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("system            Active   36h\nkubernetes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dashboar    Active   87m\nkubernetes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dashboard   Active   37m\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h4",{attrs:{id:"更新资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新资源"}},[s._v("#")]),s._v(" 更新资源")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 滚动更新 "frontend" Deployment 的 "nginx" 容器镜像')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl set image deploy nginx nginx=nginx:v2")]),s._v("\ndeployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apps"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx image updated\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否更新成功")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get deploy -oyaml")]),s._v("\nspec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        containers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" image"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"查看日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看日志"}},[s._v("#")]),s._v(" 查看日志")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl  get po -n kube-system")]),s._v("\nNAME                                       READY   STATUS    RESTARTS   AGE\ncalico"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("hs8m5                          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          13h\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl logs -f calico-node-hs8m5 -n kube-system")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  kubectl describe po calico-node-hs8m5 -n kube-system")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看容器的资源使用量 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl top po -n kube-system")]),s._v("\nNAME                                       CPU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cores"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   MEMORY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncalico"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("kube"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("controllers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("5f6d4b864b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ntlpj   2m           19Mi\ncalico"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("hs8m5                          235m         70Mi\ncalico"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("kfhwq                          19m          65Mi\ncalico"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("lhcmw                          22m          63Mi\ncalico"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("tbgv2                          17m          63Mi\ncalico"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vwbs6                          18m          60Mi\ncoredns"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("54d67798b7"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nl65k                   3m           13Mi\ncoredns"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("54d67798b7"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vlwwx                   2m           14Mi\netcd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master1                           24m          102Mi\netcd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("master2                           30m          124Mi\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h4",{attrs:{id:"pod的状态值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pod的状态值"}},[s._v("#")]),s._v(" pod的状态值")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://lixuanfengs.github.io/blog-images/cactus-vuepress-img/image11.png",alt:"img"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);