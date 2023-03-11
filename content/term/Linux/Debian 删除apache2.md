---
cover: https://cdn.pixabay.com/photo/2014/10/22/12/44/tattoo-497932__480.jpg
title: Debian 删除apache2
excerpt: 关闭apache2防止使用Nginx出现问题
tags:
- Debian
- Linus
- apache
- nginx
rating: ⭐
status: complete
destination: 10-blog/source/_posts
share: false
obsidianUIMode: source
refplus: true
abbrlink: 20915
categories:
- Linux
date: 2023-01-29 15:37:22
---

首先停止apache2 服务

```bash
service apache2 stop
```

使用命令查看到服务已经停止。

```bash
systemctl status apache2
```

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/Iu3vS6E.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">停止运行apache
    </div>
</center>

依次输入如下命令删除apache2对应的文件

```bash
apt --purge remove apache2 -y
apt --purge remove apache2-doc -y
apt --purge remove apache2-data -y
apt --purge remove apache2-bin -y
apt --purge remove apache2-utils -y
```

检查是否有残留文件：

```bash
dpkg -l | grep apache2
```

当显示没有文件存在时(显示空白，没有任何输出)表明卸载完成。
