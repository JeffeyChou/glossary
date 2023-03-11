---
cover: https://cdn.pixabay.com/photo/2022/07/14/06/55/servers-7320576__480.png
title: 从零开始使用便宜VPS搭建节点，开启CDN后可以油管4k
excerpt: 购买自己的vps和域名，套上cf搭建自己的节点
tags:
- VPS
rating: ⭐
status: complete
destination: 10-blog/source/_posts
share: false
obsidianUIMode: source
refplus: true
abbrlink: 6941
categories:
  - VPS
date: 2023-01-30 10:22:04
updated: 2023-02-17 16:17:11
---
# 准备工作

## VPS 准备
### 购买VPS
这里我本着便宜的原则，直接使用了 **hosteons** 的vps，年付 `18$` ，购买了一个配置为 *一核CPU, 512MB, 10GB SSD, 默认分配一个IPv4 和一个 IPv6* 的`OVZ` 机型，目前网站上还有最低年付 `16$` 的OVZ机型， 且支持支付宝支付。目前有洛杉矶和纽约的机房

目前`IPv4` 比较稀缺，所以也有主机商售卖 **IPv6 only** 的vps。虽然说 IPv6 也可以搭建梯子，但是实际搭建需要的很多下载资源以及你的网络情况决定了使用 `IPv4` 会有更好的效果，所以建议购买有 `IPv4` 的VPS

如果觉得我的教程还不错的话可以使用下我的[推广链接](https://my.hosteons.com/aff.php?aff=1811)

OVZ 机型的特点就是便宜，但几乎每个主机商都存在OVZ超售的情况，所以实际得到的性能可能没有那么高。且无法升级内核，也就是无法开启BBR加速（BBR加速原理就是暴力TCP发包，显著提高垃圾VPS的节点速度），但是可以通过大佬们的魔改BBR内核来实现开启BBR。

购买完成后等待服务器分配VPS， 我当时购买时等了十几分钟吧。完成后我选择了一个 `Debian10` 的系统，然后到设置里面选择开启 `TUN/TAP` （为了后面使用BBR加速）

这里记得记录下你的Root 密码以及 主机的 ip 地址，后面我们使用 SSH工具连接需要该记录

此时打开你的命令行终端，输入 `ping 你的主机ip` 即可查看自己区域到主机的网络是否被墙，如果丢包严重或者ping 不通，可以去主机售后那发工单申请更换主机IP，我第一次给分配了一个乌克兰的IP，直接ping不了，发工单后客服给我换了个IP，ping 通过了。


### 域名准备
#### 购买域名
同样是便宜的原则，我选用了 [dynadot](https://www.dynadot.com/) 这个域名商的服务，同样支持支付宝支付。同样便宜的选择还有 [namesilo](https://www.namesilo.com/) 这里选择一个便宜的，方便自己的域名即可。


#### 迁移域名到cloudflare解析
下单完成后来到自己域名的管理界面，到 **DNS解析** 这个选项里有个 `name servers` 的选项，如果这里已经存在记录，则把他们全部删除，然后填入我们后面在cloudflare 的记录，这里保持窗口即可

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/fKgazOm.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">这里的栏填入我们cloud flare 的指定服务器记录
    </div>
</center>




我们到cloud flare那里注册个账户，然后根据提示把域名迁移到cloud flare里去，方便我们后面使用cloud flare 的CDN加速

创建后在主页点击添加站点，然后根据提示完成操作即可。

计划中选择 **Free** 即可，DNS记录中我们先跳过，如果提示直接点击确认即可。

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/7sJgcoz.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">添加域名
    </div>
</center>

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/0Cnpzos.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">把这两项记录填到前面的栏里
    </div>
</center>

完成后稍等片刻（大概3-10分钟）cf就会发邮件过来通知域名解析迁移完成

#### 设置二级域名解析
打开cloud flare 的DNS管理面板，把先前的所以解析都删除，然后给自己 的二级域名添加一个 `A`记录，图中我第一个记录便是用于搭建梯子走加密流量的二级域名；第二个记录是自己的根域名解析，在名称填入 `@` 即可；最后一个是 **CNAME** 记录，用于内容记录的别名，这里我用于设置我的 github page 转发了。

后面的代理状态有个小云朵，开启便是启用cloud flare 的CDN加速，打开后再去 Ping 自己的二级域名就会发现不是自己的主机IP了。

开启 CDN 后是加速还是减速看自己的VPS 质量，像我买的垃圾 VPS 使用后就是加速了，其他高级 VPS 如 搬瓦工的 GIA、CN2线路主机开启后可能就是减速了。

建议是先保持关闭，后面如果需要再打开。

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/aV1YNCq.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">添加域名解析记录
    </div>
</center>



### SSH 工具
这里建议大伙自己搜索下对应平台的SSH连接工具，按自己喜好安装。
这里我使用的是 `FinalShell` 是闭源且是国人开发的，安全性不是特别能保证，但有自带的海外加速功能，我使用其他Windows平台上的工具上很难连接上我的主机，无奈之下出此下策了。

[FinalShell下载地址](http://www.hostbuf.com/t/988.html)

安装后打开，添加新连接，填入主机对应的IP, 端口(默认是`22` 如果是特殊机型建议找商家确定)

连接用户名填： root
密码填自己给vps装系统时的提交的root密码

连接成功后首先建议先给自己创建一个普通用户，以后使用普通用户登录（新手使用Linux 用 root 用户操作很危险），同时建议修改SSH登录方式为 密钥登录，静止root 用户使用 SSH 连接主机。

完成后直接依次输入下面对应指令完成操作即可

---
# X-ui 面板部署
直接输入命令：

```bash
# 更新软件源 & 安装 curl, socat
apt update -y
apt install -y curl socat

# 添加shots NDS解析记录（防止ipv6解析失败403)
# 这一步暂时跳过，如果后面使用wget命令
# 运行别人的脚本时发现一直在连接
# 且连接的域名ip为ipv6
# 可以添加对应的ipv4地址到hosts
# 最后刷新DNS缓存
vim /etc/hosts

# OVZ 开启BBR 加速
# 运行后添加端口 443 ，后面可以自己修改配置文件
curl https://raw.githubusercontent.com/linhua55/lkl_study/master/get-rinetd.sh | bash
# 后续可以使用如下命令按需修改端口
vi /etc/rinetd-bbr.conf
# 修改完成后重启服务
service rinetd-bbr restart

# 安装 x-ui
# 安装完成后注意记录下自己的端口、用户名和密码
# x-ui 默认端口为 54321, 建议申请一个10000-50000端口，以防占用一些约定俗成的端口
bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)


# 申请SSL泛域名证书
x-ui
# 然后选择16
# 这里需要
# 你的cloud flare global api
# cloud flare 注册邮箱
# 你购买的域名（一级域名）
# 完成后在 /root/cert 在可以找到.cer（公钥）, .key（私钥）后缀的证书

```

完成后到浏览器输入 `你的主机ip:你的x-ui端口` 即可打开你的x-ui面板

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/KKdd6fD.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">x-ui面板设置
    </div>
</center>

> (可选)：在设置里可以填入自己上面得到的公钥和私钥路径，以及自定一个 xui 根路径
> 完成后重启面板就只能通过自己的域名和对应路径访问了
> `你的二级域名:x-ui端口/x-ui面板路径`
> 后面如果开启CDN加速后该访问方法行不通，因为CDN转发后的IP不是你主机的IP了，只能通过输入主机IP的方法访问。（浏览器会提示该站点不安全）

回到入站列表设置
新建一个 **VLESS + WS +TLS** 的节点，注意 WS 的路径填一个不冲突的
端口选择 `443` （约定俗成的https访问端口）
<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/04LmvEz.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">新建节点设置
    </div>
</center>

完成后复制节点信息，或者手机扫描二维码添加到自己对应的v2ray内核软件即可。(Qv2ray、V2rayN、V2rayNG)

PC端需要检查下端口是否是 `443` ，以及是否开启 `TLS` ，请求头检查

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/isDa8iA.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">节点设置
    </div>
</center>

完成后启动节点便可以开始冲浪了。

----
# 多用户单端口设置
因为https 默认走的端口是 443，我们为了降低 GFW 审查异常流量（比如大流量通过 非443 端口）的概率，我们自己建节点单节点就直接使用 443端口了

如果有多用户合租的需求，我们又想让所有节点共用 443 端口，那么就需要在主机开启 nginx 的反代理服务了，将我们其他端口的流量使用 443端口转发，这样看起来就是 443接管了所有流量。

具体教程在我的另外一篇教程里。

