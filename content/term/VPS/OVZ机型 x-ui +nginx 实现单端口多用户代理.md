---
cover: https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg
title: OVZ机型 x-ui +nginx 实现单端口多用户代理
excerpt: OVZ机型 x-ui +nginx 实现单端口多用户代理
tags:
- VPS
- nginx
rating: ⭐
status: complete
destination: 10-blog/source/_posts
share: false
obsidianUIMode: source
refplus: true
abbrlink: 8767
categories:
- VPS
date: 2023-01-29 16:02:45
---


# 系统初始化
```bash
# 更新软件源
apt update -y
apt install -y curl socat

# 添加shots NDS解析记录（防止ipv6解析失败403)
# 这一步暂时跳过，如果后面使用wget命令
# 运行别人的脚本时发现一直在连接
# 且连接的域名ip为ipv6
# 可以添加对应的ipv4地址到hosts
# 最后刷新DNS缓存
vim /etc/hosts

# OVZ配置BBR
wget --no-cache -O lkl-haproxy.sh https://github.com/mzz2017/lkl-haproxy/raw/master/lkl-haproxy.sh && bash lkl-haproxy.sh

# 安装 x-ui
bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)

# 卸载apache2（部分debian机型重装自带）
# 最后一条命令是检查有没有残留，如果有继续使用命令删除
service apache2 stop
apt --purge remove apache2 -y
apt --purge remove apache2-doc -y
apt --purge remove apache2-data -y
apt --purge remove apache2-bin -y
apt --purge remove apache2-utils -y
dpkg -l | grep apache2

# 安装nginx
apt install nginx

#安装acme：
curl https://get.acme.sh | sh

#添加软链接：
ln -s /root/.acme.sh/acme.sh /usr/local/bin/acme.sh

#切换CA机构：
acme.sh --set-default-ca --server letsencrypt

#申请证书：
# 域名可以是二级域名
acme.sh --issue -d vps.jiefengzhou.com -k ec-256 --webroot /var/www/html

#安装证书&重载nginx:
acme.sh --install-cert -d vps.jiefengzhou.com --ecc --key-file /etc/x-ui/server.key --fullchain-file /etc/x-ui/server.crt --reloadcmd "systemctl force-reload nginx"

```

> host更改教程：[[VPS无法连接raw.githubusercontent.com 解决方法]]
> BBR加速配置： [[OpenVZ 机型vps 开启BBR加速]]
> 删除apache2： [[Debian 删除apache2]]

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/L3OtXew.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">证书安装完成且重载nginx
    </div>
</center>


---
# 站点伪装
### 配置x-ui面板
输入自己的VPS IP 后面加上自己的x-ui端口 如 `test.yourdomain.com:xxxx`

进去后首先更改自己的xray内核，替换到第二新的版本，然后添加一个节点

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/IT8AWnY.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">ws路径那里直接复制自己的uuid进来就行
    </div>
</center>

然后回到面板设置，凭自己喜好更改 **监听端口** 和 **面板根路径**（这根路径是减低别人暴力扫描的威胁）但是一定要记住这几个值，后续需要用到。
> 值得注意的是，有些版本的根路径好像不能识别 `-`，所以如果后面你配置好nginx后无法打开，考虑是否是这个问题。
> 可以配置好x-ui后先执行 `systemctl stop nginx` 把代理服务关闭，直接输入 `自己的VPSip:端口/路径` 试下能否打开，如果可以，那么进行到下一步，把nginx重新打开 `systemctl restart nginx`

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/hgFeoH2.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">这里我的url路径后面就是无法打开，结尾还有个/没写
    </div>
</center>

完成后重启面板，使用新的端口+uuid登录。格式为`VPS对应IP:设定端口/你的路径`
你会发现自己还是登录不上，这是因为你的nginx代理还没有配置好

### 寻找站点
谷歌搜索关键词：intext: 登录 Cloudreve （这是个人网盘网站的关键词）
找一个打开后不会重定向到登录界面的网页，记录它的地址。

（我之前找了一个会重定向的，后面输入面板地址老是在你末尾添加参数如`/login.php/` 导致无法正常访问面板）

### 配置Nginx
使用SSH工具 直接打开nginx配置文件
这里我使用 `FinalShell` 打开 `/etc/nginx/nginx.conf`

```bash
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
    worker_connections 1024;
}

http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    gzip on;

    server {
        listen 443 ssl;

        server_name vps.jiefengzhou.com;  #你的域名
        ssl_certificate       /etc/x-ui/server.crt;  #证书位置
        ssl_certificate_key   /etc/x-ui/server.key; #私钥位置

        ssl_session_timeout 1d;
        ssl_session_cache shared:MozSSL:10m;
        ssl_session_tickets off;
        ssl_protocols    TLSv1.2 TLSv1.3;
        ssl_prefer_server_ciphers off;

        location / {
            proxy_pass https://bgin.com/; #伪装网址
            proxy_redirect off;
            proxy_ssl_server_name on;
            sub_filter_once off;
            sub_filter "bgin.com" $server_name; # 仅域名
            proxy_set_header Host "bgin.com"; # 仅域名
            proxy_set_header Referer $http_referer;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header User-Agent $http_user_agent;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto https;
            proxy_set_header Accept-Encoding "";
            proxy_set_header Accept-Language "zh-CN";
        }


        location /37e00ca3-3fba-4f5e-ae59-4a03b285a6ea {   #节点ws路径
            proxy_redirect off;
            proxy_pass http://127.0.0.1:10000; #你的节点端口
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        location /xui {   #xui路径
            proxy_redirect off;
            proxy_pass http://127.0.0.1:52345;  #xui监听端口
            proxy_http_version 1.1;
            proxy_set_header Host $host;
        }
    }

    server {
        listen 80;
        location /.well-known/ {
               root /var/www/html;
            }
        location / {
                rewrite ^(.*)$ https://$host$1 permanent;
            }
    }
}
```

文件配置好后复制覆盖到源文件， `Ctrl + S` 保存退出， 可以看到文件已被上传。

然后访问 `test.yourdomain.com` 发现已经变成了自己伪装的网站，而访问 `test.yourdomain.com/你的x-ui路径` 变成了面板入口，这时你的伪装就成功了。

> 这里是建议学习下nginx的location参数设置，可以更好个性化你的伪装站点，比如 `location /xui {` 这段是最后匹配的，也就是只要地址以/xui结尾，那么就能访问。而修改成 `location = /xui {` 表示只有域名后面跟着/xui 才能访问，不能多也不能少。

### 导入节点测试
重新打开 x-ui 面板，把节点导入到自己的v2ray内核代理软件中，这里要把服务器改成你的域名，端口改成 `443` ，然后检查下 `ws` 路径和TLS是否开启且服务器 `SNI` 为你的域名。

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/Dy1X4Qp.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">具体配置如下，其中请求头可写可不写，TLS记得打开
    </div>
</center>

检查无误后可以使用节点测试了

---
# 多用户代理
这里实现的思路使用443以外的端口，这里使用的是 `10000+` 的备用端口，然后使用Nginx 反代，使用端口443转发，这样看起来就是共用一个 `443` 端口了

我们只需要在 nginx 的配置文件中添加：

```conf
        location /ary {   #节点ws路径
            proxy_redirect off;
            proxy_pass http://127.0.0.1:10000; #你的节点端口
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
```

完成后保存退出，reload nginx服务即可。
