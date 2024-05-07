# 如何用 vitepress+cloudflare pages 搭建博客

## 起因

想搭建一个自己的博客，一方面当笔记来用，一方面算是自己个人品牌的 seo。看了一圈，挑了 vitepress 这种简单方便的方案，外观也还算还看。虽然很多人都在用这个导致博客门面上会显得有点千篇一律，但其实个人博客更重在内容。

## 搭建 node 环境

这里不赘述了，就是下载 nodejs，然后安装。不懂的可以去 google 一下。记得配置一下国内镜像

```bash
npm config set registry https://registry.npmmirror.com
```

## 下载 vitepress

参考官网<https://vitepress.dev/zh/guide/getting-started>

```bash
npm add -D vitepress
npx vitepress init
```

![](https://cdn.mundane.ink/202404261609512.png)

我这边初始化配置是在根目录的，有的人是和官网里一样是./docs。这个看个人选择。

随后就是设置一下站点的标题和描述，选择主题。

运行一下项目

```bash
npm run docs:dev
```

效果：

![](https://cdn.mundane.ink/202404261614708.png)

当然这是我改了一些配置以后的效果，这里用到了一些工具网站：

去除背景：<https://www.iloveimg.com/>

favicon 制作：比特虫 <https://www.bitbug.net/>

我个人的博客仓库在<https://github.com/mundane799699/vitepress>

## 部署到 cloud flare pages

参考官网<https://vitepress.dev/zh/guide/deploy>，不过写的比较简略

![](https://cdn.mundane.ink/202404261620794.png)

首先进入 cloudflare，然后点这里

![](https://cdn.mundane.ink/202404261621331.png)

进入以后点创建应用程序，选 pages，从 git 创建。记得把你的 vitepress 项目上传到 github。

![](https://cdn.mundane.ink/202404261623646.png)

![](https://cdn.mundane.ink/202404261624793.png)

构建参数这里有一些注意点。构建命令填

```bash
npm run docs:build
```

然后构建目录，如果你的配置是在./docs 下面，那就按照官网填 docs/.vitepress/dist

如果是像我一样在根目录下面，就像我一样填/.vitepress/dist

你可以在自己本机运行 npm run docs:build 看一下，看生成的文件是在哪个目录，那就填哪个目录

环境变量填一个 NODE_VERSION，填 18 及以上

![](https://cdn.mundane.ink/202404261625246.png)

然后点击构建，可以看到构建日志，显示 success 之类的就说明部署成功

![](https://cdn.mundane.ink/202404261633758.png)

## 设置自定义域名

在这里设置你已经购买的域名。我是在 namesilo <https://www.namesilo.com/>买的，比较便宜，支持支付宝支付，还不错。

![](https://cdn.mundane.ink/202404261634027.png)

买完域名以后一般需要将 dns 迁移到 cloudflare 进行域名解析，这里就不再赘述了。主要就是在域名供应商的管理后台，将 name servers 改成 cloud flare 提供的地址，我这边 namesilo 的话，还需要将域名先 unlock 一下。

![](https://cdn.mundane.ink/202404261640337.png)

至此，使用 vitepress+cloud pages 搭建博客就完成了，更多配置的自己去探索吧。这样搭建的优点在于国内访问畅通，无需服务器，域名无需备案，github 提交即构建。最后说一下我博客地址：

[dreamfree.xyz](https://dreamfree.xyz/)

## 参考

> <https://vitepress.dev/>
>
> <https://www.bilibili.com/video/BV1bC411V7du>
>
> <https://www.bilibili.com/video/BV1Sp4y157br>
