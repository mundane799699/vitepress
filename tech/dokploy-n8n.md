# dokploy光速部署n8n并设置域名和https

1. 在你的vps或者服务器上安装dokploy，这步不赘述了。我用的是hostinger，镜像自带dokploy。进入dokploy面板，点击create project

![](https://cdn.mundane.ink/202506042155539.png)

2. 起个名字，比如n8n

![](https://cdn.mundane.ink/202506042156305.png)

3. 点击create service, 点击template

![](https://cdn.mundane.ink/202506042156723.png)

4. 搜索n8n，点击create

![](https://cdn.mundane.ink/202506042157883.png)

5. 点击confirm

![](https://cdn.mundane.ink/202506042157615.png)

6. 点击environment，修改域名和时区

![](https://cdn.mundane.ink/202506042159507.png)

7. 点击domains这个tab，修改域名，开启https, 证书选择let's encrypt

![](https://cdn.mundane.ink/202506042201895.png)

8. 到你的域名dns管理的地方，比如我这边是cloudflare。增加一条A记录，指向服务器ip。

![](https://cdn.mundane.ink/202506042203078.png)

9. 回到dokploy，点击deploy

![](https://cdn.mundane.ink/202506042204084.png)

10. 打开刚才设置的域名，大功告成。如果显示https不安全，就重启一下浏览器。

![](https://cdn.mundane.ink/202506042205307.png)

11. vps推荐：我使用的是hostinger。2核8g内存8TB带宽100g磁盘，两年期限。用了别人的分销链接，最终是998拿下的。如果你也有需要，可以用我的分销链接，最终我们都能拿到优惠：https://hostinger.com.hk?REFERRALCODE=VPS666
