---
abbrlink: 45138
destination: 10-blog/source/_posts
excerpt: 简单完成blog的搭建
obsidianUIMode: source
rating: ⭐
share: false
status: complete
tags:
  - blog
title: hexo 博客快速搭建
categories:
  - 博客
date: 2023-01-27 01:07:49
updated: 2023-02-03 13:23:25
---

# 快速开始

‌‌‌ 　　首先确保您的设备上安装了相关软件，包括以下应用程序[^1]：

‌‌‌ 　　- Node.js (按目前来说应该是 16.x 以上的版本)
‌‌‌ 　　- Git

## 安装 Hexo

‌‌‌ 　　完成所有必需的软件安装后，即可以使用 npm 安装 Hexo

```bash
‌‌‌　　npm install -g hexo-cli
```

## 初始化项目

‌‌‌ 　　在您想存放博客文件的地方使用命令行在该位置打开。使用以下命令以创建一个 Hexo 项目：

```bash
‌‌‌　　hexo init Blog
```

‌‌‌ 　　这样便在当前文件夹下创建了一个名为`blog`的文件夹，该位置便是您博客的根目录

## 安装第三方主题

‌‌‌ 　　在 Hexo 5.0 版本上，可以使用 npm 安装主题。以[hexo-theme-async](https://github.com/MaLuns/hexo-theme-async/blob/master/README_zh-CN.md) 为例[^2]：

```bash
‌‌‌　　npm i hexo-theme-async@latest
```

> 注意, 有些主题可能需要安装其他依赖才能正确显示, 为确保正确安装, 请参考对应主题的官方安装文档操作
> 如 async 主题需要 `ejs` 和 `less` 的渲染器, 需要提前安装好.

```bash
‌‌‌　　npm install --save hexo-renderer-less hexo-renderer-ejs
```

‌‌‌ 　　安装完成后在根目录下的`_congif.yml`中修改 `theme` 字段为 `async`

```yml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
‌‌‌　　theme: async
```

## 配置第三方主题

‌‌‌ 　　使用 npm 安装的第三方主题修改配置需要在根目录下新建文件`_config.async.yml` 具体名称需要根据您所安装的主题修改, 我这里使用的是`async`主题, 所以配置文件含有 **async** 字段
‌‌‌ 　　您仅需在  `_config.async.yml`  中自定义您想要覆盖的配置，其余将自动与主题默认配置合并.
‌‌‌ 　　为确保您能正确了解主题的所有配置, 建议是到主题的源码处复制对应的[yaml 配置文件](https://github.com/MaLuns/hexo-theme-async/blob/master/package/hexo-theme-async/_config.yml)

## 快速本地部署

‌‌‌ 　　在博客的根目录下使用命令:

```bash
‌‌‌　　hexo g
```

‌‌‌ 　　即可完成对博客的静态网页编译(generate)

‌‌‌ 　　而使用命令:

```bash
‌‌‌　　hexo s
```

‌‌‌ 　　即可在本地完成部署, 成功后会显示:

‌‌‌ 　　<center>
<img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/3JgYDst.png">
<br>

<div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">本地部署示意
</div>
‌‌‌ 　　</center>

‌‌‌ 　　此时, 在浏览器打开 `http://localhost:4000/` 即可看到您部署的网页:

‌‌‌ 　　<center>
<img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/OmCepeO.png">
<br>

<div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">部署您的第一个博客
</div>
‌‌‌ 　　</center>

‌‌‌ 　　若要清除编译后的静态网页, 使用以下命令:

```bash
‌‌‌　　hexo c
```

‌‌‌ 　　此时, 博客根目录下的 `/public` 目录便被删除

---

# 2 将网页部署到 github.io

‌‌‌ 　　静态博客在网络上发布的一般流程是: **写好文章-> 本地生成静态页面 -> 将网站所需要的文件单独上传 -> 发布成功 ->(可选)上传完整站点数据备份。**

‌‌‌ 　　为简化我们操作, 回归专心于写作, 我将其简化成如下工作流: **本地上传仓库 a -> github action 自动部署 -> 推送到仓库 b，网站展示** [^3]

## 创建仓库

‌‌‌ 　　这里的两个仓库 a, b 分别储存博客的完整源代码, 博客静态编译后的用于发布展示的代码
‌‌‌ 　　由于使用 Github action 需要使用到自己的私钥,强烈建议仓库 a 设置为私有, 而仓库 b 可以凭个人喜好设置为公有或者私有

‌‌‌ 　　 1. 在自己的 github 账号上创建两个仓库, 其中用于展示发布的仓库 b 的仓库名设置为 `您的GitHub用户名.github.io` . 这样是方便后续我们使用 `用户名.github.io` 来访问博客

‌‌‌ 　　 2. 将自己的网站完整源代码推送到仓库 a, 这里推荐使用 vscode 的 source control 直接可视化操作

‌‌‌ 　　<center>
<img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/GJjWSJW.png">
<br>

<div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">使用 VsCode 完成推送
</div>
‌‌‌ 　　</center>

‌‌‌ 　　完成后打开网页即可查看自己的推送结果

## 配置 GitHub Action

‌‌‌ 　　 1. 这里我使用了 `peaceiris/actions-gh-pages` 的配置文件,在根目录下的 `.github` 目录下创建文件夹 `workflow` ,然后在该文件夹下创建新的`.yml` 文件
将对应的配置代码写进去即可

```
‌‌‌　　name: Deploy Hexo Pages
‌‌‌　　on:
  push:
    branches:
      - "master"
‌‌‌　　jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repositories
        uses: actions/checkout@v3
        with:
          submodules: true # Fetch Hexo themes (true OR recursive)
          fetch-depth: 0 # Fetch all history for .GitInfo and .Lastmod
      - name: Setup node
        uses: actions/setup-node@v3
        with:
          node-version: 16.x # 这里填上您设备对应的Node.js 版本
      - name: Setup yarn & Install node_modules
        uses: borales/actions-yarn@v4
        with:
          cmd: install # will run `yarn install` command
      - name: Build
        run: |
          yarn clean
          yarn build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.PERSONAL_TOKEN }}
          external_repository: <username>/<username>.github.io
          publish_branch: master
          publish_dir: ./public
```

‌‌‌ 　　 2. 根据自己情况修改`jobs:steps:uses`和`external_repository:(代码仓库b的地址)`即可。

‌‌‌ 　　 3. 注意到配置文件中有一个`personal_token: ${{ secrets.PERSONAL_TOKEN }}`，我们需要创建个人私钥来完成推送

具体操作参照[官方文档](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) 这里如果需要无过期的私钥，创建 classic 的私钥即可，把 repo 和 workflows 勾选上，然后到 a 仓库的 Secrect and action 界面填上自己的 key. 注意 title 要写成 `PERSONAL_TOKEN`

GitHub Free Plan 帐户不能使用私有仓库中的 GitHub 页面。要将源内容设为私有并使用 GitHub Pages 进行部署，您可以使用此选项将站点从私有存储库部署到公共存储库。

- `peaceiris/homepage`: A private repository running this action with `external_repository: peaceiris/peaceiris.github.io`
- `peaceiris/peaceiris.github.io`: A public repository using GitHub Pages

‌‌‌ 　　<center>
<img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/HYRuLyq.png">
<br>

<div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">私钥创建
</div>
‌‌‌ 　　</center>

‌‌‌ 　　 4. 创建完成后, 每次推送代码到仓库 a, 代码仓库 B 都能同步更新.

# Reference

‌‌‌ 　　:[^4] https://hexo.io/zh-cn/docs/
‌‌‌ 　　:[^5] https://blog.esunr.xyz/2022/06/64163235c30f.html
‌‌‌ 　　:[^6] https://allworldg.xyz/dev/guide-to-setup-blog-with-zero-cost-1/
‌‌‌
