---
cover: https://cdn.pixabay.com/photo/2020/06/12/14/07/code-5290465__480.jpg
title: VPS无法连接raw.githubusercontent.com 解决方法
excerpt: 通过修改dns解决部分机型无法下载文件
tags:
- Linus
- DNS
rating: ⭐
status: complete
destination: 10-blog/source/_posts
share: false
obsidianUIMode: source
abbrlink: 57544
categories:
- Linux
date: 2023-01-28 13:04:17
---
# 前言
我前段时间搞了个ipv6的vps, 大部分情况下使用 `wget` 命令下载文件返回的地址是ipv4, 但是有些地址（比如我机器对于 *raw.githubusercontent.com* 返回的却是 ipv6 地址，然后就会出现大概率连接不上的情况，在443 time out 中循环。后面修改了host后，默认DNS解析到hosts文件中标记的ipv4 地址，下载速度回到正常。

----

# 查找网站对应的IPv4地址
在网站 `ipaddress.com` 中搜索你对应网站的ip地址，比如我搜索的 **raw.githubusercontent.com** 中得到了如下几个IP地址：

> -   185.199.108.133
> -   185.199.109.133
> -   185.199.110.133
> -   185.199.111.133

选择其中一个放到你的hosts文件中即可。

# 修改VPS的hosts文件
使用SSH工具连接上vps后，键入指令：
```bash
vim /etc/hosts
```

非管理员用户可能提示权限不足，前面还需要加上 `sudo` 提权

进入后就是 vim 的一般模式， 键入 `i` 进入插入模式，使用方向键移动光标到底部， 然后输入自己对应网站的ip地址，后面连续键入两个制表符`TAB` 缩进， 键入对应的网站

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/Q4KRVk3.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">VIM 编辑hosts
    </div>
</center>

完成编辑后 按 `ESC` 回到一般模式， 最后键入 `:wq` 保存并退出

# 刷新DNS缓存
相关指令网上有很多，我使用的是Debian10 系统，所以输入如下指令即可
```bash
/etc/init.d/networking restart
```

同理，无权限请在开头加上 `sudo` 提权

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/2S7zTZU.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">刷新DNS缓存完成
    </div>
</center>

---

一键写入命令
```bash
echo -e "185.199.108.133 \t\t raw.githubusercontent.com" >> /etc/hosts
echo -e "128.1.164.230 \t\t www.aapanel.com" >> /etc/hosts
/etc/init.d/networking restart
```