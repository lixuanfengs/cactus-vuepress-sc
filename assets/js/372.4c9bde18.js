(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{720:function(e,s,t){"use strict";t.r(s);var r=t(0),a=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("在本地环境下（或者公司局域网），将Docker镜像推送到Docker Hub速度比较慢，推荐的做法是安装一个第三方的Docker镜像仓库，这里推荐使用Harbor。Harbor是一款开源的Docker镜像存储仓库，其扩展了Docker Distribution，在此基础上添加了我们常用的功能，比如安全认证，RBAC用户权限管理，可视化页面操作等功能。")]),e._v(" "),s("h2",{attrs:{id:"安装harbor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装harbor"}},[e._v("#")]),e._v(" 安装Harbor")]),e._v(" "),s("p",[e._v("登录master虚拟机，在/home/vagrant目录下新建并切换到harbor目录：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mkdir /home/vagrant/harbor\ncd /home/vagrant/harbor\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("下载Harbor离线安装包：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("wget https://storage.googleapis.com/harbor-releases/release-1.8.0/harbor-offline-installer-v1.8.4.tgz\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("下载后解压：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("tar -xzvf harbor-offline-installer-v1.8.4.tgz\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("修改Harbor配置文件：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vi harbor/harbor.yml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("将hostname修改为宿主机IP即可：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QUIYeU.png",alt:"546.png"}})]),e._v(" "),s("p",[e._v("然后执行当前目录下的install.sh脚本进行安装：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sh harbor/install.sh\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("出现如下信息时，安装成功:")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QUTwKx.png",alt:"547.png"}})]),e._v(" "),s("p",[e._v("在Windows上使用浏览器访问：http://192.168.33.11/:")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QUTgGd.png",alt:"548.png"}})]),e._v(" "),s("p",[e._v("默认的用户名密码为：admin，Harbor12345，登录后：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QU7eeK.png",alt:"549.png"}})]),e._v(" "),s("p",[e._v("为了后续推送镜像方便，我们需要给Harbor地址配置域名。因为后续需要在master虚拟机上push Docker镜像，并且需要在node1、node2、node3和extend虚拟机下pull Docker镜像，所以我们需要在这几台虚拟机下添加hosts解析：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vi /etc/hosts\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("添加如下解析：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("192.168.33.11 docker.mrbird.cc\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"创建用户和项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建用户和项目"}},[e._v("#")]),e._v(" 创建用户和项目")]),e._v(" "),s("p",[e._v("在http://192.168.33.11/Harbor管理界面下新增一个用户：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QU7sO0.png",alt:"550.png"}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QU7cwT.png",alt:"551.png"}})]),e._v(" "),s("p",[e._v("用户名为mrbird，密码为Aa112233。")]),e._v(" "),s("p",[e._v("然后新增一个项目：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QU7gTU.png",alt:"552.png"}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QU7WY4.png",alt:"553.png"}})]),e._v(" "),s("p",[e._v("在该项目下添加刚刚创建的mrbird用户：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QU7oOx.png",alt:"554.png"}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QU77m6.png",alt:"555.png"}})]),e._v(" "),s("p",[e._v("接着在master虚拟机上登录Harbor:")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QUH9nP.png",alt:"556"}})]),e._v(" "),s("p",[e._v("用户名和密码就是刚刚在控制台创建的mrbird用户和密码。但是登录失败了，要登录到http docker仓库，需要添加一些配置：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vi /etc/docker/daemon.json\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("添加如下内容：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"insecure-registries": ["docker.mrbird.cc"]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QUHD4e.png",alt:"557.png"}})]),e._v(" "),s("p",[e._v("重启docker：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("service docker restart\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("因为Harbor的install.sh脚本实际上是基于Docker Compose的，所以重启Docker，Harbor也需要重启，重新执行install.sh脚本即可：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sh harbor/install.sh\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("接着重新登录即可：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QUbZ5D.png",alt:"558.png"}})]),e._v(" "),s("h2",{attrs:{id:"测试镜像推拉"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试镜像推拉"}},[e._v("#")]),e._v(" 测试镜像推拉")]),e._v(" "),s("p",[e._v("接着测试下，是否能够顺利的将Docker镜像推送到Harbor仓库中。")]),e._v(" "),s("p",[e._v("从官方Docker Hub中拉取busybox镜像")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker pull busybox\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("然后给该镜像打标签:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker tag busybox:latest docker.mrbird.cc/febs/busybox:latest\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("标签格式为[docker仓库域名]/[项目名称]/[镜像:版本]。")]),e._v(" "),s("p",[e._v("打好标签后，将 "),s("a",{attrs:{href:"http://docker.mrbird.cc/febs/busybox:latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker.mrbird.cc/febs/busybox:latest"),s("OutboundLink")],1),e._v(" 镜像推送到Harbor仓库：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker push docker.mrbird.cc/febs/busybox:latest\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QUbsaT.png",alt:"559.png"}})]),e._v(" "),s("p",[e._v("回到Harbor控制台，可以看到在febs项目下已经存在一个busybox镜像：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QUbyIU.png",alt:"560.png"}})]),e._v(" "),s("p",[e._v("现在Harbor仓库中已经存在busybox镜像了，接着测试下是否可以在别的虚拟机上拉取下来。我们随便挑一台配置了docker.mrbird.cc域名解析的虚拟机进行测试，比如extend，在extend虚拟机上拉取 "),s("a",{attrs:{href:"http://docker.mrbird.cc/febs/busybox:latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker.mrbird.cc/febs/busybox:latest"),s("OutboundLink")],1),e._v(" 镜像：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker pull docker.mrbird.cc/febs/busybox:latest\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QUOFrn.png",alt:"561.png"}})]),e._v(" "),s("p",[e._v("可以看到，从非https服务器上拉取镜像也要修改Docker配置。我们分别修改node1、node2、node3和extend虚拟机的Docker配置：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vi /etc/docker/daemon.json\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("添加如下内容：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"insecure-registries": ["docker.mrbird.cc"]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("然后重启Docker即可。重启Docker后，重新在extend拉取 "),s("a",{attrs:{href:"http://docker.mrbird.cc/febs/busybox:latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker.mrbird.cc/febs/busybox:latest"),s("OutboundLink")],1),e._v(" 镜像：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QUOsdP.png",alt:"562.png"}})]),e._v(" "),s("h2",{attrs:{id:"开启远程docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启远程docker"}},[e._v("#")]),e._v(" 开启远程Docker")]),e._v(" "),s("p",[e._v("后续我们需要在Windows上，通过IDEA的Docker插件远程构建镜像。约定的做法是，通过IDEA Docker插件在master虚拟机上远程构建Docker镜像，再将这些镜像推送到Harbor仓库。")]),e._v(" "),s("p",[e._v("要开启master虚拟机Docker服务远程访问，需要修改master虚拟机上的Docker配置：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vi /lib/systemd/system/docker.service\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("修改的地方如下图所示：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QaT0nP.png",alt:"563.png"}})]),e._v(" "),s("p",[e._v("修改保存后，重启Docker服务：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("systemctl daemon-reload \nsystemctl restart docker.service\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("重启后，验证下2375端口是否是通的：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("curl 192.168.33.11:2375/info\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("如果返回如下JSON说明开启Docker远程服务成功，端口为2735：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{"ID":"ACMU:ND3O:UY2A:VPH4:QVSL:FHZE:OOAY:YN7K:IYTZ:ULAP:YPMW:ZG3O","Containers":48,"ContainersRunning":3,"ContainersPaused":0,"ContainersStopped":45,"Images":24,"Driver":"overlay2","DriverStatus":[["Backing Filesystem","xfs"],["Supports d_type","true"],["Native Overlay Diff","true"]],"SystemStatus":null,"Plugins":{"Volume":["local"],"Network":["bridge","host","macvlan","null","overlay"],"Authorization":null,"Log":["awslogs","fluentd","gcplogs","gelf","journald","json-file","local","logentries","splunk","syslog"]},"MemoryLimit":true,"SwapLimit":true,"KernelMemory":true,"CpuCfsPeriod":true,"CpuCfsQuota":true,"CPUShares":true,"CPUSet":true,"IPv4Forwarding":true,"BridgeNfIptables":true,"BridgeNfIp6tables":true,"Debug":false,"NFd":43,"OomKillDisable":true,"NGoroutines":55,"SystemTime":"2019-12-07T21:33:56.558590193Z","LoggingDriver":"json-file","CgroupDriver":"systemd","NEventsListener":0,"KernelVersion":"3.10.0-957.5.1.el7.x86_64","OperatingSystem":"CentOS Linux 7 (Core)","OSType":"linux","Architecture":"x86_64","IndexServerAddress":"https://index.docker.io/v1/","RegistryConfig":{"AllowNondistributableArtifactsCIDRs":[],"AllowNondistributableArtifactsHostnames":[],"InsecureRegistryCIDRs":["127.0.0.0/8"],"IndexConfigs":{"docker.io":{"Name":"docker.io","Mirrors":["https://dockerhub.azk8s.cn/","https://reg-mirror.qiniu.com/","https://registry.docker-cn.com/"],"Secure":true,"Official":true},"docker.mrbird.cc":{"Name":"docker.mrbird.cc","Mirrors":[],"Secure":false,"Official":false}},"Mirrors":["https://dockerhub.azk8s.cn/","https://reg-mirror.qiniu.com/","https://registry.docker-cn.com/"]},"NCPU":2,"MemTotal":1927319552,"GenericResources":null,"DockerRootDir":"/var/lib/docker","HttpProxy":"","HttpsProxy":"","NoProxy":"","Name":"master","Labels":[],"ExperimentalBuild":false,"ServerVersion":"18.09.0","ClusterStore":"","ClusterAdvertise":"","Runtimes":{"runc":{"path":"runc"}},"DefaultRuntime":"runc","Swarm":{"NodeID":"","NodeAddr":"","LocalNodeState":"inactive","ControlAvailable":false,"Error":"","RemoteManagers":null},"LiveRestoreEnabled":false,"Isolation":"","InitBinary":"docker-init","ContainerdCommit":{"ID":"b34a5c8af56e510852c35414db4c1f4fa6172339","Expected":"b34a5c8af56e510852c35414db4c1f4fa6172339"},"RuncCommit":{"ID":"3e425f80a8c931f88e6d94a8c831b9d5aa481657","Expected":"3e425f80a8c931f88e6d94a8c831b9d5aa481657"},"InitCommit":{"ID":"fec3683","Expected":"fec3683"},"SecurityOptions":["name=seccomp,profile=default"],"ProductLicense":"Community Engine","Warnings":["WARNING: API is accessible on http://0.0.0.0:2375 without encryption.\\n         Access to the remote API is equivalent to root access on the host. Refer\\n         to the \'Docker daemon attack surface\' section in the documentation for\\n         more information: https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface"]}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"构建febs服务docker镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建febs服务docker镜像"}},[e._v("#")]),e._v(" 构建FEBS服务Docker镜像")]),e._v(" "),s("p",[e._v("接着我们需要在IDEA上配置远程Docker服务，并构建febs-auth、febs-gateway、febs-monitor-admin、febs-server-system和febs-server-test微服务模块对应的Docker镜像。")]),e._v(" "),s("p",[e._v("IDEA Ultimate版本已经默认安装了Docker插件（没有的话去插件市场下载安装下就可以了）。点击IDEA -> File -> Settings… -> Build,Execution,Deployment -> Docker：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/Qaqu4O.png",alt:"564.png"}})]),e._v(" "),s("p",[e._v("填写远程Docker地址，如果显示Connection successful说明连接远程Docker服务成功。")]),e._v(" "),s("p",[e._v("接下来开始构建FEBS微服务Docker镜像，代码以群（519057656）文件 -> 教程源码 -> 9-源码的FEBS-Cloud为主。")]),e._v(" "),s("h3",{attrs:{id:"构建febs-auth镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建febs-auth镜像"}},[e._v("#")]),e._v(" 构建febs-auth镜像")]),e._v(" "),s("p",[e._v("后续我们需要搭建多服务实例的认证服务器，他们之间要共享认证信息（令牌等信息），需要一个集中存储这些信息的地方，而RedisTokenStore正好符合这点，所以令牌存储策略应该选择RedisTokenStore，在febs-auth模块的febs-auth.properties配置文件中，将jwt令牌策略关闭，采用RedisTokenStore：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("febs.auth.enableJwt=false\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("准备好后，点击IDEA -> Run -> Edit Configrations…，添加Docker配置：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QdpNad.png",alt:"569.png"}})]),e._v(" "),s("p",[e._v("选择Dockerfile文件地址，并且添加镜像标签为 "),s("a",{attrs:{href:"http://docker.mrbird.cc/febs/febs-auth:latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker.mrbird.cc/febs/febs-auth:latest"),s("OutboundLink")],1),e._v(" ，然后保存即可：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/Qd9MwQ.png",alt:"570.png"}})]),e._v(" "),s("p",[e._v("保存后，构建镜像：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QdCY4A.png",alt:"570.png"}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/12/QylPuq.png",alt:"571.png"}})]),e._v(" "),s("p",[e._v("构建后：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QdCq81.png",alt:"572.png"}})]),e._v(" "),s("p",[e._v("我们可以到master虚拟机上核实一下：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/08/QdPpUH.png",alt:"573.png"}})]),e._v(" "),s("p",[e._v("这证明我们通过远程Docker服务构建镜像是OK的。")]),e._v(" "),s("h3",{attrs:{id:"构建febs-gateway镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建febs-gateway镜像"}},[e._v("#")]),e._v(" 构建febs-gateway镜像")]),e._v(" "),s("p",[e._v("过程和febs-auth类似，修改Docker配置：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/09/Qd4ZX6.png",alt:"574.png"}})]),e._v(" "),s("p",[e._v("选择febs-gateway模块下的Dockerfile，并且将镜像标签改为："),s("a",{attrs:{href:"http://docker.mrbird.cc/febs/febs-gateway:latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker.mrbird.cc/febs/febs-gateway:latest"),s("OutboundLink")],1),e._v(" ，然后保存即可。")]),e._v(" "),s("p",[e._v("接着点击镜像构建，构建结果：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/09/Qd4yj0.png",alt:"576.png"}})]),e._v(" "),s("p",[e._v("构建成功。")]),e._v(" "),s("h2",{attrs:{id:"构建febs-monitor-admin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建febs-monitor-admin"}},[e._v("#")]),e._v(" 构建febs-monitor-admin")]),e._v(" "),s("p",[e._v("在IDEA中修改Docker配置：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/09/Qd5IIg.png",alt:"577.png"}})]),e._v(" "),s("p",[e._v("选择febs-monitor-admin模块下的Dockerfile，并且将镜像标签改为："),s("a",{attrs:{href:"http://docker.mrbird.cc/febs/febs-monitor-admin:latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker.mrbird.cc/febs/febs-monitor-admin:latest"),s("OutboundLink")],1),e._v(" ，然后保存即可。")]),e._v(" "),s("p",[e._v("接着点击镜像构建，构建结果：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/09/Qd5zoF.png",alt:"579.png"}})]),e._v(" "),s("p",[e._v("构建成功。")]),e._v(" "),s("h3",{attrs:{id:"构建febs-server-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建febs-server-system"}},[e._v("#")]),e._v(" 构建febs-server-system")]),e._v(" "),s("p",[e._v("修改Docker配置：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/09/QdIJw8.png",alt:"580.png"}})]),e._v(" "),s("p",[e._v("选择febs-server-system模块下的Dockerfile，并且将镜像标签改为："),s("a",{attrs:{href:"http://docker.mrbird.cc/febs/febs-server-system:latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker.mrbird.cc/febs/febs-server-system:latest"),s("OutboundLink")],1),e._v(" ，然后保存即可。")]),e._v(" "),s("p",[e._v("接着点击镜像构建，构建结果：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/09/QdTCK1.png",alt:"582.png"}})]),e._v(" "),s("h3",{attrs:{id:"构建febs-server-test镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建febs-server-test镜像"}},[e._v("#")]),e._v(" 构建febs-server-test镜像")]),e._v(" "),s("p",[e._v("修改Docker配置：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/09/QdTMrt.png",alt:"583.png"}})]),e._v(" "),s("p",[e._v("选择febs-server-test模块下的Dockerfile，并且将镜像标签改为："),s("a",{attrs:{href:"http://docker.mrbird.cc/febs/febs-server-test:latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker.mrbird.cc/febs/febs-server-test:latest"),s("OutboundLink")],1),e._v(" ，然后保存即可。")]),e._v(" "),s("p",[e._v("接着点击镜像构建，构建结果：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/09/QdbPrn.png",alt:"585.png"}})]),e._v(" "),s("h3",{attrs:{id:"镜像推送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像推送"}},[e._v("#")]),e._v(" 镜像推送")]),e._v(" "),s("p",[e._v("这些镜像都构建好后，我们在master虚拟机上将它们都推送到Harbor仓库，执行下面这条命令批量推送：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("for i in $(docker images | grep docker.mrbird.cc | awk 'BEGIN{OFS=\":\"}{print $1,$2}'); do docker push $i; done\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("推送完毕后，查看Harbor仓库：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/12/11/QsKcfs.png",alt:"586.png"}})]),e._v(" "),s("p",[e._v("可以看到，镜像都已经推送成功。")])])}),[],!1,null,null,null);s.default=a.exports}}]);