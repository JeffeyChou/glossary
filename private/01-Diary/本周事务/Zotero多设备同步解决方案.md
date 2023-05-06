---
date: 2023-05-06 14:48:40
categories: haha 
destination: 
excerpt: 使用zotero+zotfile+onedrive 解决多设备同步附件的问题
katex: true
obsidianUIMode: source
rating: ⭐⭐
draft: true
tags:  
- Zotero
title: "Zotero多设备同步解决方案"
share: false
updated: 2023-05-06 16:19:53
---

# 如何解决多设备下Zotero的同步问题?

## 你需要准备

- Zotero 以及对应账号
- Zotero 扩展： Zotfile
- 可选（至少一个作为你的附件同步选项）：
    1. Tera Cloud 
    2. 坚果云
    3. Onedrive

## 使用Onedrive 作为同步中端

这也是我目前推荐的配置，只需要配置好自己的网络链接和各个设备上的Onedrive自动同步，就可以直接多设备查看自己的PDF附件，直接在网盘上的PDF文件进行批注，实现多设备同步。

原理：
	- 使用zotero自带的同步服务同步自己的文献库数据
	- 使用插件扩展 Zotfile自动重命名、移动自己的PDF附件到网盘
	- 使用Onedrive 作为自己的同步盘
	- 只要设备上登录自己的zotero和Onedrive账号，就可以抓取自己文献的数据库以及查看自己的附件

---

### Zotero & Zotfile 设置

首先在自己电脑的本地非Onedrive处建立一个自己的文献库，并且**为已链接的附件使用相对路径**

#### Zotero设置

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/FjETkdC.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">本地文献库设置
    </div>
</center>

其次到同步设置上登录自己的Zotero账号，作为同步自己的文献数据库设置。

**可选**：
	如果自己的文献库较小（小于500MB），或者自己有WebDAV网盘，可以勾选文件同步（多一个备份选择）

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/gBVAHMy.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">Zotero 账号设置
    </div>
</center>

---

#### Zotfile设置

在*Location of Files* 中选择 *Custom Location*, 并且选择自己的**Onedrive盘位置**。

可以勾选启用子文件夹，当附件文件过多时可以方便自己查找，这里我是按照年份建立子文件夹

也可以在文件重命名设置中将第一个参数设置为年份，在自己电脑资源管理器中可以勾选按名称排序也可以有同样效果。

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/F0cP5Nh.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">Zotfile设置
    </div>
</center>

这是我的文件重命名规则，按自己喜好修改。

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/bQFsOIp.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">重命名规则
    </div>
</center>

在其他设备（Android则只需要Zoo for zotero 和 Onedrive并登陆自己账号就行，不需要特别设置）也完成同样操作后就完成基本设置了。

### 工作流

1. 从网络中获取文献以及对应的PDF文件（可以直接拖入PDF文件，Zotero会自动抓取元数据生成条目）
2. 右键该条目，重命名并且移动该条目：
    <center>
        <img style="border-radius: 0.3125em;
        box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
        src="https://search.pstatic.net/common?src=https://i.imgur.com/tUSAxA7.png">
        <br>
        <div style="color:orange; border-bottom: 1px solid #d9d9d9;
        display: inline-block;
        color: #999;
        padding: 2px;">操作
        </div>
    </center>
3. 此时条目下的PDF文件变成链接的附件，且文件被移动到Onedrive对应的目录中，我们对PDF的所有批注都是在Onedrive中的文件进行修改的，实现了多设备同步的目标。
4. 在Win设备、Mac、平板上查看并批注：
    - Win设备：登录自己的Zotero和Onedrive账号，**注意文献库最好也建立在个本地，登录账号后会自动同步条目信息**。打开条目的PDF文件会自动打开链接的条目，也就是对应的Onedrive文件。
    - Mac设备、平板：同win设备类似。
    - iPhone, Android设备：下载zotero软件（Android可以用zoo for Zotero)，以及PDF批注软件（Onedrive也有PDFP批注功能）。登录zotero查看自己要看的文献的名称，到Onedrive对应的目录查找打开即可进行批注。

## 使用坚果云、TeraCloud等WebDAV网盘

原理类似，只不过不需要使用Zotfile移动到另一个地方，只需要回到前面
[Zotfile设置](private/01-Diary/本周事务/Zotero多设备同步解决方案.md#Zotfile设置) 选择 *Attach copy of stored of file(s)* ，[Zotero设置](private/01-Diary/本周事务/Zotero多设备同步解决方案.md#Zotero设置)勾选*文件同步*并且设置好自己的网盘即可。Zotero会自动将附件通过WebDAV同步到网盘。

### 工作流
1. 保持文献到自己的文献库
2. Zotero后台会自动上传文件到网盘
3. 在新设备中登录自己的Zotero，直接即可打开对应条目的PDF文件

### 缺点

极大受限于自己网盘的能力，且没有版本管理，有时自己修改后没有及时同步到网盘，在另一个设备打开就没有看到笔记。且每次打开文件都会通过WebDAV比对文件信息。没有Onedrive集成到Win设备那么方便。不过好处是那怕网页端Zotero也可以查看自己的文献。