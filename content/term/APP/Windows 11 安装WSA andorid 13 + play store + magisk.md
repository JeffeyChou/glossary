---
cover: 'https://cdn.pixabay.com/photo/2016/11/18/12/55/light-1834289__480.jpg'
title: Windows 11 安装WSA andorid 13 + play store + magisk
excerpt: cmd一键部署WSA套件
tags:
  - WSA
  - 安装教程
rating: ⭐
status: complete
destination: 10-blog/source/_posts
share: false
obsidianUIMode: source
abbrlink: 24452
categories:
  - 软件
date: 2023-01-27 11:03:41
---
# 安装准备

### 操作设备规格：

本人所使用的设备操作系统信息为：
版本	Windows 11 专业工作站版 Insider Preview
版本	22H2
安装日期	‎1/‎21/‎2023
操作系统版本	25281.1000
体验	Windows Feature Experience Pack 1000.25281.1000.0
区域：美国

### 开启虚拟机设置

使用 `win` 键打开搜素框， 键入 **windows功能** ，打开设置后 选中 *虚拟机平台* , 点按确定后将提示重启设备，保存后个人工作后即可进行重启

### 安装好adb

这一步是方便后续使用WSAtools GUI 安装 APK文件

---

# 安装WSA

去[网盘](https://www.mediafire.com/file/obddq4979ucw2zn/WSA_2211.40000.10.0_x64_Release-Nightly-with-magisk-a468fd94(25205)-canary-MindTheGapps-13.0-RemovedAmazon.7z/file) 下载WSA andoroid13 预览版安装文件，下载后解压缩，重命名该文件夹为 `WSA` 方便后续使用命令行安装

解压缩后打开文件夹，右键 **Install.ps1** 文件，选择使用power shell 运行

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/dcwqlGV.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">一键部署安装
    </div>
</center>

完成后即可看到play store magisk 自动安装上去

回到商店搜索 **WSATools** 安装即可， 这个是我们后续安装APK文件的地方

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/9eocoYp.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">WSATools
    </div>
</center>

完成打开系统搜索框，会有一个 *子系统设置* 的项目，打开。

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/IVIpjJM.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">WSA设置
    </div>
</center>

进去后在 **系统 -> 系统资源** 勾选连续，以免后续使用WSATools 时可能会出现系统调度跟不上导致无法安装apk的情况

然后在 **开发人员 -> 开发人员模式** 勾选打开。

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/hAMpS9v.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">开发人员模式
    </div>
</center>

回到系统一栏，此时点击 **文件** 就可以出现WSA 运行的画面，这就完成了设置

然后打开 WSATools 项目，在右下角的设置图标中打开设置，配置上自己 ADB 的可执行文件路径，此时便可以使用 WSATools 安装apk 文件了

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/cE1Og8j.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">根据自己安装位置修改
    </div>
</center>
