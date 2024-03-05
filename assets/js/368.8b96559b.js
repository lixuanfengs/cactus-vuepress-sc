(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{719:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("这一章节，我们的目标是通过Kubernetes（下面简称k8s，因为k和s之间有8个字符，所以俗称k8s）部署一个高可用的FEBS Cloud微服务权限系统，所以在此之前你需要掌握Kubernetes的基本知识。如果您还未曾接触过Kubernetes，可以通过我的博客https://mrbird.cc/tags/Kubernetes/或者购买"),e("a",{attrs:{href:"https://search.jd.com/Search?keyword=Kubernetes%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97(%E7%AC%AC4%E7%89%88)&enc=utf-8&pvid=c886a398bdef458695bdf7a425c3518a",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Kubernetes权威指南(第4版)》"),e("OutboundLink")],1),t._v("书籍学习。")]),t._v(" "),e("p",[t._v("此外，我们只对febs-auth、febs-gateway、febs-server-system、febs-server-test和nacos等服务通过K8s进行集群部署（因为这些才是核心所在）。而像febs-monitor-admin、ELK等周边服务，我们部署一个实例即可（这章就不再部署Prometheus和Skywalking了，因为上个章节刚刚讲述过，所以不再赘述）。剩下的数据层，如Redis，MySQL数据库等，一般也不会通过k8s来搭建，通常是由公司DBA搭建提供，或者直接从阿里云、腾讯云等云平台购买高可用实例，所以这章，数据层面也是用Docker部署一个实例即可。")]),t._v(" "),e("p",[t._v("总之，通过这一章节，你会学习到如何搭建一个可靠的K8S微服务集群，并且通过K8S解决传统方式部署微服务集群环境的痛点。这一章内容复杂度较高，希望读者阅读的时候仔细一点，以避免不必要的问题发生，下面让我们开始吧。")]),t._v(" "),e("h2",{attrs:{id:"集群环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群环境准备"}},[t._v("#")]),t._v(" 集群环境准备")]),t._v(" "),e("p",[t._v("我的电脑配置为：CPU12核心，RAM 32GB。在开始本章之前，我们需要通过Vagrant搭建好虚拟机环境（看到这一章的读者应该已经知道怎么用Vagrant了吧，以防万一我还是贴出Vagrant教程："),e("a",{attrs:{href:"https://mrbird.cc/Create-Virtual-Machine-By-Vagrant.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Vagrant创建CentOS虚拟机"),e("OutboundLink")],1),t._v("），具体的环境及配置如下表所示：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("操作系统")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("IP")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("角色")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("CPU核心数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("运行内存")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Hostname")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("CentOS 7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("192.168.33.11")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Master")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2G")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("master")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("CentOS 7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("192.168.33.12")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Node1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("4G")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("node1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("CentOS 7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("192.168.33.13")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Node2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("4G")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("node2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("CentOS 7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("192.168.33.14")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Node3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("4G")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("node3")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("CentOS 7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("192.168.33.15")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NFS")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1G")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("nfs")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("CentOS 7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("192.168.33.16")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Extend")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("6G")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("extend")])])])]),t._v(" "),e("p",[t._v("对应的Vagrantfile为：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Vagrant.configure("2") do |config|\n  config.vm.box = "centos7"\n  config.vm.define "master" do |master|\n  \tmaster.vm.network "private_network", ip: "192.168.33.11"\n  \tmaster.vm.hostname = "master"\n  \tmaster.vm.provider "virtualbox" do |v|\n\t  v.memory = 2048\n\t  v.cpus = 2\n\tend\n  end\n\n  config.vm.define "node1" do |node1|\n  \tnode1.vm.network "private_network", ip: "192.168.33.12"\n  \tnode1.vm.hostname = "node1"\n  \tnode1.vm.provider "virtualbox" do |v|\n\t  v.memory = 4096\n\t  v.cpus = 2\n\tend\n  end\n\n  config.vm.define "node2" do |node2|\n  \tnode2.vm.network "private_network", ip: "192.168.33.13"\n  \tnode2.vm.hostname = "node2"\n  \tnode2.vm.provider "virtualbox" do |v|\n\t  v.memory = 4096\n\t  v.cpus = 2\n\tend\n  end\n  config.vm.define "node3" do |node3|\n  \tnode3.vm.network "private_network", ip: "192.168.33.14"\n  \tnode3.vm.hostname = "node3"\n  \tnode3.vm.provider "virtualbox" do |v|\n\t  v.memory = 4096\n\t  v.cpus = 2\n\tend\n  end\n  config.vm.define "nfs" do |nfs|\n  \tnfs.vm.network "private_network", ip: "192.168.33.15"\n  \tnfs.vm.hostname = "nfs"\n  \tnfs.vm.provider "virtualbox" do |v|\n\t  v.memory = 1024\n\t  v.cpus = 1\n\tend\n  end\n  config.vm.define "extend" do |extend|\n  \textend.vm.network "private_network", ip: "192.168.33.16"\n  \textend.vm.hostname = "extend"\n  \textend.vm.provider "virtualbox" do |v|\n\t  v.memory = 6144\n\t  v.cpus = 2\n\tend\n  end\nend\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br"),e("span",{staticClass:"line-number"},[t._v("44")]),e("br"),e("span",{staticClass:"line-number"},[t._v("45")]),e("br"),e("span",{staticClass:"line-number"},[t._v("46")]),e("br"),e("span",{staticClass:"line-number"},[t._v("47")]),e("br"),e("span",{staticClass:"line-number"},[t._v("48")]),e("br"),e("span",{staticClass:"line-number"},[t._v("49")]),e("br"),e("span",{staticClass:"line-number"},[t._v("50")]),e("br"),e("span",{staticClass:"line-number"},[t._v("51")]),e("br"),e("span",{staticClass:"line-number"},[t._v("52")]),e("br"),e("span",{staticClass:"line-number"},[t._v("53")]),e("br")])]),e("p",[t._v("解释下这些虚拟机的作用：")]),t._v(" "),e("ol",[e("li",[t._v("Master（192.168.33.11）、Node1（192.168.33.12）、Node2（192.168.33.13）、Node3（192.168.33.14）用于搭建k8s集群环境，即后续的微服务集群部署；")]),t._v(" "),e("li",[t._v("NFS（192.168.33.15）虚拟机用于搭建NFS（Network File System，网络文件系统），作为k8s集群的第三方网络存储；")]),t._v(" "),e("li",[t._v("EXTEND（192.168.33.16）虚拟机用于安装第三方服务，如数据库，ELK等。")])]),t._v(" "),e("p",[t._v("由于虚拟机较多，所以后续我将直接使用这些虚拟机的Hostname作为它们的名字，请务必记住它们的作用和对应的IP地址，比如当我提到extend虚拟机时，表示192.168.33.16这台虚拟机。")]),t._v(" "),e("p",[t._v("使用Vagrant通过上面的Vagrantfile创建这6台虚拟机，创建好后如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s2.ax1x.com/2019/12/06/QYYWDJ.png",alt:"524.png"}})]),t._v(" "),e("p",[t._v("使用Vagrant ssh登录这些虚拟机，并且"),e("strong",[t._v("后续的所有命令都是使用root账号完成的")]),t._v("！！")]),t._v(" "),e("h2",{attrs:{id:"部署项目准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署项目准备"}},[t._v("#")]),t._v(" 部署项目准备")]),t._v(" "),e("p",[t._v("这章要部署的项目代码采用截至2019年12月6日19点55分最新的FEBS Cloud项目代码，对应群（519057656）文件 -> 教程源码 -> 9-源码。")]),t._v(" "),e("p",[t._v("下载后解压，使用IDEA和WebStorm导入即可。")])])}),[],!1,null,null,null);e.default=a.exports}}]);