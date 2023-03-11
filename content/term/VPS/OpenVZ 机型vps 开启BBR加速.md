---
cover: https://cdn.pixabay.com/photo/2022/07/21/13/18/computer-7336233__480.png
title: OpenVZ 机型 vps 开启 BBR 加速
excerpt: OVZ 开启 BBR 加速
tags:
- openvz
- BBR
rating: ⭐
status: complete
destination: 10-blog/source/\_posts
share: false
obsidianUIMode: source
abbrlink: 21004
categories:
- VPS
date: 2023-01-28 12:05:12
---

# 前言

BBR 是由 Google 开发的一款开源的阻塞控制算法，主要是用来给服务器加速的。打个比方，比如你有一台搬瓦工的 VPS，你在上面架设了个网站，正常情况下你在国内下载你 VPS 上面的文件，可能平均速度只有 100kb/s，但是如果你安装并开启了 BBR，可能这个下载速度会提升到 1M/s，这就是 BBR 的作用。当然，BBR 的作用还不止这些，总之，BBR 就是使用 tcp 暴力发包的原理进行实现提速。

OpenVZ 架构的 VPS，好处是便宜，丢了不心疼。坏处是内核不独立，各种受限。BBR 出世之时本是不支持 OpenVZ 的，后来有魔改版问世才有了支持，但一般来说仍有前置条件：必须有  `TUN/TAP`  功能。此功能在一些服务商的 VPS 是没有的，也有一些提供但默认是关闭的，需要在面板中手动开启。[^1]

# 方法

### ikl- Haproxy[^2]

#### 作者仓库

https://github.com/mzz2017/lkl-haproxy

> 需要开启 `TUN/TAP` 和至少 `256M` 空余内存
> Debian/Ubuntu/CentOS

```bash
wget --no-cache -O lkl-haproxy.sh https://github.com/mzz2017/lkl-haproxy/raw/master/lkl-haproxy.sh && bash lkl-haproxy.sh
```

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/2WomFZQ.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">按命令行提示完成操作即可
    </div>
</center>

---

### 94ish.me 五合一脚本

```bash
wget -N --no-check-certificate "https://gist.github.com/zeruns/a0ec603f20d1b86de6a774a8ba27588f/raw/4f9957ae23f5efb2bb7c57a198ae2cffebfb1c56/tcp.sh" && chmod +x tcp.sh && ./tcp.sh
```

### Rinetd

> `64bit`系统、不需要开启`TUN/TAP`、`256M` 以上内存

#### Debian | Ubuntu

```bash
#适用于单网卡（单IP）服务器：
wget https://github.com/tcp-nanqinlang/lkl-rinetd/releases/download/1.1.0/tcp_nanqinlang-rinetd-debianorubuntu.sh
bash tcp_nanqinlang-rinetd-debianorubuntu.sh
#如果提示only support OpenVZ !，则使用下面这个脚本
wget https://github.com/tcp-nanqinlang/lkl-rinetd/releases/download/1.1.0-nocheckvirt/tcp_nanqinlang-rinetd-debianorubuntu-nocheckvirt.sh
bash tcp_nanqinlang-rinetd-debianorubuntu-nocheckvirt.sh

#适用于多网卡（多IP）服务器，会为所有网卡（所有IP）提供加速：
wget https://github.com/tcp-nanqinlang/lkl-rinetd/releases/download/1.1.0/tcp_nanqinlang-rinetd-debianorubuntu-multiNIC.sh
bash tcp_nanqinlang-rinetd-debianorubuntu-multiNIC.sh
#如果提示only support OpenVZ !，则使用下面这个脚本
wget https://github.com/tcp-nanqinlang/lkl-rinetd/releases/download/1.1.0-nocheckvirt/tcp_nanqinlang-rinetd-debianorubuntu-nocheckvirt-multiNIC.sh
bash tcp_nanqinlang-rinetd-debianorubuntu-nocheckvirt-multiNIC.sh
```

#### CentOS 7

```bash
#和上面一样，也分单网卡和多网卡版本
#单网卡
wget https://github.com/tcp-nanqinlang/lkl-rinetd/releases/download/1.1.0/tcp_nanqinlang-rinetd-centos.sh
bash tcp_nanqinlang-rinetd-centos.sh
#如果提示only support OpenVZ !，则使用下面这个脚本
wget https://github.com/tcp-nanqinlang/lkl-rinetd/releases/download/1.1.0-nocheckvirt/tcp_nanqinlang-rinetd-centos-nocheckvirt.sh
bash tcp_nanqinlang-rinetd-centos-nocheckvirt.sh

#多网卡
wget https://github.com/tcp-nanqinlang/lkl-rinetd/releases/download/1.1.0/tcp_nanqinlang-rinetd-centos.sh
bash tcp_nanqinlang-rinetd-centos.sh
#如果提示only support OpenVZ !，则使用下面这个脚本
wget https://github.com/tcp-nanqinlang/lkl-rinetd/releases/download/1.1.0-nocheckvirt/tcp_nanqinlang-rinetd-debianorubuntu-nocheckvirt-multiNIC.sh
bash tcp_nanqinlang-rinetd-debianorubuntu-nocheckvirt-multiNIC.sh
```

---

### ikl by linhua55

```bash
apt update
apt install curl
curl https://raw.githubusercontent.com/linhua55/lkl_study/master/get-rinetd.sh | bash

# 后续可以使用如下命令按需修改端口
vi /etc/rinetd-bbr.conf

# 修改完成后重启服务
service rinetd-bbr restart
```

# 参考资料

[^1]: Sobaigu.com. (2021). *OpenVZ 架构一键开启 BBR 加速的方法 | 搜百谷*. [online] Available at: https://sobaigu.com/linux-bbr-openvz.html [Accessed 28 Jan. 2023].
[^2]: Blueskyxn.com. (2021). *OVZ / NAT BBR 安装方案 【支持 OpenVZ】*. [online] Available at: https://www.blueskyxn.com/202102/3952.html [Accessed 28 Jan. 2023].
