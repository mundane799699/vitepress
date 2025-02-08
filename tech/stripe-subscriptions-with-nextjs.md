# Next.js接入stripe订阅详细教程

## 前言


之前申请stripe成功了，现在需要将stripe接入到我的网站中。于是我在油管找到了一个视频，并且跟着做了下来，现在把整个细节分享一下，主要是给开发者也就是程序员看的。原视频地址是https://www.youtube.com/watch?v=R9PwoQwVpPQ

另外，想开发出海产品但还没有stripe账户的朋友可以参考我这篇[【公众号】独立开发者申请英国公司开通stripe一条龙教程](https://mp.weixin.qq.com/s/eRRz6c-cmW8LoGdiVtj40g)。

## 效果演示

访问https://stripe-subscriptions-jet.vercel.app
这是我已经完成的演示网站，已经部署到了vercel。

![](https://cdn.mundane.ink/202502041618845.png)

点击登录，刚登录以后是这样的：
![](https://cdn.mundane.ink/202502041622720.png)

然后我们购买，支付

![](https://cdn.mundane.ink/202502041623498.png)

卡号随便填，因为这里是测试模式

![](https://cdn.mundane.ink/202502041625707.png)

支付完成以后回到原来的页面再刷新，可以看到界面已经显示我是高级用户了。这个流程就是今天这篇文章要实现的效果。

![](https://cdn.mundane.ink/202502041626351.png)

![](https://cdn.mundane.ink/202502041628347.png)

## 技术栈介绍

视频作者提供了代码，地址是https://github.com/burakorkmez/stripe-subscriptions
有两个分支，master和starter-code。master是已经改完的代码，starter-code是视频中刚开始的代码。我就直接用的master分支，把一些配置改成自己的就能直接运行了。

用户认证：kinde

数据库：mongodb

数据库orm: prisma

## 设置mongodb

首先你需要到<https://www.mongodb.com>注册一个账号，这是免费的。

然后创建一个新项目。

![](https://cdn.mundane.ink/202502041644164.png)

创建完项目以后点击create a cluster

![](https://cdn.mundane.ink/202502041647392.png)

选择免费套餐，地区选择一个离你近一点的，我选的香港。然后点击创建。

![](https://cdn.mundane.ink/202502041649305.png)

![](https://cdn.mundane.ink/202502041653896.png)

把这个用户对应的密码复制下来，粘贴到一个地方，一会儿会用到。然后点击Create Database User创建一个用户。

![](https://cdn.mundane.ink/202502041803968.png)

接着点击Drivers，选择node.js，复制下面的连接地址，同样粘贴到一个地方，一会儿有用。如果连接地址中的密码没有显示而是类似`mongodb+srv://zfyoung799699:<db_password>@cluster0.p9ix1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`这种的话，那就用到刚才记下的密码了，把`<db_password>`替换成刚才的密码即可。

然后需要把这个地址修改一下，在`.net/`后面加上`stripe_db`，这是数据库名称。比如原来的是`mongodb+srv://zfyoung799699:<db_password>@cluster0.p9ix1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`，改完以后就变成`mongodb+srv://zfyoung799699:<db_password>@cluster0.p9ix1.mongodb.net/stripe_db?retryWrites=true&w=majority&appName=Cluster0`

![](https://cdn.mundane.ink/202502041804817.png)

![](https://cdn.mundane.ink/202502041805303.png)

另外还有一步是设置网络访问权限。点击Network Access，点击edit，选择ALLOW ACCESS FROM ANYWHERE，然后点击确定。如果不这样设置一下的话，一会儿本地或者vercel都是连不上这个数据库的。

![](https://cdn.mundane.ink/202502041808434.png)

![](https://cdn.mundane.ink/202502041809041.png)

## 设置prisma

在终端中执行：

```bash
npx prisma init
```

这个命令将会创建一个prisma的文件夹和一个.evn的环境变量文件。将刚才的mongodb的连接地址粘贴进去：

```
DATABASE_URL=mongodb+srv://zfyoung799699:SS7vMF4Wv3XyLiJE@cluster0.symjq.mongodb.net/stripe_db?retryWrites=true&w=majority&appName=Cluster0
```

然后编辑prisma/schema.prisma这个文件，修改配置，定义两个model，User和Subscription，分别对应两张表，用户表和订阅信息表。具体的我就不写出来了，详细的看代码吧。

![](https://cdn.mundane.ink/202502062117281.png)

然后在终端执行：

```bash
npx prisma db push
```

这个命令会将刚才定义的数据结构同步到mongodb，并建表

![](https://cdn.mundane.ink/202502062128625.png)

![](https://cdn.mundane.ink/202502062128658.png)

接着创建一个prisma.ts文件，这里不细讲了，可以看原视频或者代码

![](https://cdn.mundane.ink/202502062130445.png)

## 使用kinde进行身份验证

首先你需要到<https://kinde.com>注册一个账号，这是免费的。然后登录。

点击switch business

![](https://cdn.mundane.ink/202502062140589.png)

add business

![](https://cdn.mundane.ink/202502062141591.png)

创建一个business，名称自己定义，不能和别人的名称重复

![](https://cdn.mundane.ink/202502062143525.png)

点击进入这个新创建的business

![](https://cdn.mundane.ink/202502062146492.png)

一步一步按照截图来走

![](https://cdn.mundane.ink/202502062147376.png)

![](https://cdn.mundane.ink/202502062147519.png)

登录方式选择email和google

![](https://cdn.mundane.ink/202502062149915.png)

选择Connect

![](https://cdn.mundane.ink/202502062150223.png)

复制环境变量，粘贴到.env文件中

![](https://cdn.mundane.ink/202502062158782.png)

接着去创建一个接口，`src/app/api/auth/[kindeAuth]/route.ts`

![](https://cdn.mundane.ink/202502062202143.png)

修改一下Navbar.tsx的代码

![](https://cdn.mundane.ink/202502062205391.png)

现在点击登录按钮你会发现你可以登录了，并且在kinde的后台中可以看到登录的用户

## 理解用户认证回调

这个图表示了用户的登录认证逻辑，首先点击登录按钮，kinde处理完登录以后会跳转到/auth/callback页面，在这个页面进行是否是新用户的判断，然后跳转到主页。所以接下来我们要去创建一个auth/callback的中转页。

![](https://cdn.mundane.ink/202502062209619.png)

auth/callback/page.tsx的最终代码如下

![](https://cdn.mundane.ink/202502062225220.png)

同时需要修改.env中的环境变量配置

![](https://cdn.mundane.ink/202502062228112.png)

这时候再登录，你可以在mongodb中看到登录的用户数据。

## stripe订阅设置

打开你的stripe后台，把测试模式打开。因为我们是在开发阶段，所以就用测试模式就好了。等调试完成以后，再把一些环境变量换成生产环境的就可以了。

![](https://cdn.mundane.ink/202502071139273.png)

点击产品目录，进入之后点击创建产品

![](https://cdn.mundane.ink/202502071157501.png)

填写产品名称、金额，然后点击添加产品

![](https://cdn.mundane.ink/202502071219910.png)

接着我们点击刚刚创建好的产品

![](https://cdn.mundane.ink/202502071223510.png)

点击三个小点，点击创建支付链接

![](https://cdn.mundane.ink/202502071224738.png)

勾选允许商家客户提供税号

![](https://cdn.mundane.ink/202502071229347.png)

编辑一下支付成功以后显示的提示，按你自己的意愿来填就可以了

![](https://cdn.mundane.ink/202502071230090.png)

最后点击创建链接

![](https://cdn.mundane.ink/202502071234075.png)

复制这个支付链接，粘贴到.env文件中

![](https://cdn.mundane.ink/202502071235828.png)

![](https://cdn.mundane.ink/202502071238663.png)

然后我们回到产品目录，继续创建年度的价格，操作和刚才一样

![](https://cdn.mundane.ink/202502071240103.png)

![](https://cdn.mundane.ink/202502071241424.png)

![](https://cdn.mundane.ink/202502071244038.png)

![](https://cdn.mundane.ink/202502071246121.png)

![](https://cdn.mundane.ink/202502071247122.png)

![](https://cdn.mundane.ink/202502071247880.png)

![](https://cdn.mundane.ink/202502071248198.png)

然后还要复制price id，粘贴到.env文件

![](https://cdn.mundane.ink/202502071642326.png)

![](https://cdn.mundane.ink/202502071646009.png)

编辑Pricing.tsx，设置paymentLink:

![](https://cdn.mundane.ink/202502071649266.png)

这时候你点击pricing中的Buy Now按钮，就可以跳转到支付页面发起支付了。

然后这里有个问题，就是如果是未登录的用户，点击了这个购买按钮以后，需要先跳转登录。视频作者是这样处理的。将/api/auth/login作为跳转链接，这个接口现在由kinde来接管。如果未登录就会跳转kinde的登录，然后跳到/auth/callback页面，这是在.env文件里配置过的。在/auth/callback这个页面我们进行逻辑处理，是登录后跳转主页还是登录后跳转checkout页面。具体我就不细讲了，可以自己看一下代码。

![](https://cdn.mundane.ink/202502071716486.png)

## webhook

在完成上述步骤以后，还有一个问题，就是用户虽然可以支付，但是我们的mongodb数据库中依然是不知道这个用户已经支付了的。这个时候就需要webhook了。

webhook在这里的意思，简单来说就是你定义一个接口地址，告诉stripe。当一些事件发生比如支付成功的时候，stripe会调用你的接口发送消息给你的服务。你的服务收到消息之后就可以根据消息具体是什么情况来更新数据库。

打开stripe后台，点击开发人员 -> Overview

![](https://cdn.mundane.ink/202502071740633.png)

复制私钥，注意要复制私钥，不是公钥

![](https://cdn.mundane.ink/202502071743315.png)

粘贴到.env

![](https://cdn.mundane.ink/202502071744738.png)

然后我们点webhook，添加本地侦听器

![](https://cdn.mundane.ink/202502071843402.png)

下载这个stripe cli，将其添加到你电脑的环境变量。然后使用`stripe login`这个命令登录

![](https://cdn.mundane.ink/202502071844015.png)

![](https://cdn.mundane.ink/202502081339854.png)

![](https://cdn.mundane.ink/202502081341593.png)

![](https://cdn.mundane.ink/202502071846956.png)

然后运行`stripe listen --forward-to localhost:3000/api/webhooks/stripe`这行命令，复制whsec_...286b这行秘钥，粘贴到.env中。需要注意的是这个webhook的secret在本地调试的时候，每次都是不一样的

![](https://cdn.mundane.ink/202502071851372.png)

![](https://cdn.mundane.ink/202502071852989.png)

接下来我们就要去创建这个监听webhook的接口了，里面的逻辑稍微有点多，具体的可以自己看代码

![](https://cdn.mundane.ink/202502071856752.png)

然后我们测试一下，点击购买按钮，支付，回到mongodb数据库，应该可以看到Subscription这张表中就有记录了，并且用户的plan由free变成了premium

![](https://cdn.mundane.ink/202502071932661.png)

接下来我们还需要更新一下src/app/premium这个页面和Navbar中的逻辑，因为有些东西是只有premium才有权限看到的。具体的还是那句话，看代码，这里不细说了。

![](https://cdn.mundane.ink/202502072006766.png)

## 创建客户门户

回到stripe后台，输入门户，点击进入客户门户

![](https://cdn.mundane.ink/202502081207356.png)

激活链接，如果是未激活状态的话

![](https://cdn.mundane.ink/202502081209646.png)

拉到下面，在订阅中添加那两个产品

![](https://cdn.mundane.ink/202502081209332.png)

接着复制链接，保存更改

![](https://cdn.mundane.ink/202502081211638.png)

然后还需要做一件事，点击产品目录，点击进入产品

![](https://cdn.mundane.ink/202502081212161.png)

点击进入10美元的那个价格

![](https://cdn.mundane.ink/202502081214636.png)

拉到下面，向上销售，选择99美元那个价格。这样设置了以后，用户在购买10美元的订阅时，旁边会显示一个提示，提示用户切购买99美元的年度订阅可以节省21美元。用户一点击就能直接切换成99美元的年度订阅。这样做有助于卖出更高的价格。

![](https://cdn.mundane.ink/202502081214212.png)

将刚才的门户链接粘贴到.env文件中。现在所需要的环境变量都已经齐全了。

![](https://cdn.mundane.ink/202502081220641.png)

将这个变量设置到Billing Portal这个链接中

![](https://cdn.mundane.ink/202502081222865.png)

然后我们测试一下，点击这里

![](https://cdn.mundane.ink/202502081224658.png)

![](https://cdn.mundane.ink/202502081225247.png)

用户在这里能管理他们的订阅，可以进行取消、更改等操作

![](https://cdn.mundane.ink/202502081226332.png)

接着我们补充一下webhook中的逻辑。当用户取消订阅后，将他的plan改成free。这样用户在页面中就无法看到premium按钮和billing portal按钮了。具体就不多讲了，可以到时候自己翻代码看一下。

![](https://cdn.mundane.ink/202502081230667.png)

## 部署到vercel

首先将代码提交到github，然后进入你的vercel账户，将项目导入。

![](https://cdn.mundane.ink/202502081242072.png)

复制.env文件中的所有内容，粘贴到环境变量

![](https://cdn.mundane.ink/202502081245728.png)

但是环境变量这里有些和本地开发时是不同的，这里我们先部署，后面修改。先部署是为了生成项目的线上地址，我们需要这个地址。



等部署完成以后，我们复制这个线上地址。

![](https://cdn.mundane.ink/202502081251221.png)

然后我们回到kinde的后台，点击这里。注意现在所在的这个business是否是你要修改的business，如果不是就点左下角的头像切换一下。

![](https://cdn.mundane.ink/202502081253426.png)

添加两个线上地址。这两个线上地址的前缀就是刚才我们复制的vercel的线上地址，然后点报错

![](https://cdn.mundane.ink/202502081256561.png)

然后我们回到vercel项目，点击Settings，Environment Variables，对环境变量进行修改。将这三个环境变量设置成线上的环境变量。其实只要把localhost:3000改成线上地址就行了。

![](https://cdn.mundane.ink/202502081302593.png)

然后我们还需要修改一下STRIPE_WEBHOOK_SECRET这个环境变量。回到stripe后台，我们点开发人员 -> webhooks

![](https://cdn.mundane.ink/202502081306190.png)

点击添加接收端

![](https://cdn.mundane.ink/202502081307566.png)

监听事件选择checkout.session.completed和customer.subscription.deleted

![](https://cdn.mundane.ink/202502081308396.png)

![](https://cdn.mundane.ink/202502081310050.png)

最后输入你的线上的webhook地址

![](https://cdn.mundane.ink/202502081312710.png)

然后我们复制这个webhook的密钥，将其替换掉vercel的STRIPE_WEBHOOK_SECRET这个环境变量

![](https://cdn.mundane.ink/202502081313342.png)

![](https://cdn.mundane.ink/202502081315194.png)

最后保存，重新部署。需要注意的是，目前是stripe的test mode。如果你关闭了test mode，实现真正的收款。到时候STRIPE_SECRET_KEY和STRIPE_WEBHOOK_SECRET这两个环境变量可能都需要重新替换一下，还包括价格id、付款链接、门户链接。



最后，让我们测试一下。

![](https://cdn.mundane.ink/202502081323656.png)



## 线上地址和代码

我这个项目的演示地址是https://stripe-subscriptions-jet.vercel.app

代码地址是https://github.com/mundane799699/stripe-subscriptions

## 结语

做这个教程真的不易，光是截图就很麻烦。如果帮助到了您，麻烦点个小小的赞(如果是在公众号内)。

如果还是有问题，请加我微信咨询或讨论。

**请备注：stripe接入技术咨询(不备注不会通过)**

![](https://cdn.mundane.ink/202402032206594.png)