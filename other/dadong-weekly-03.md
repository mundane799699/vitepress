# 打洞周报第3期
开始回顾上周进度。相比之前几周，上周的进度是有些滞缓的，但也不是没有收获，一起来看看吧。
![](https://cdn.mundane.ink/202505262256167.png)

## bilibili无限历史记录插件的进展

目前在chrome插件商店是1313个用户。我周末看的时候还是1328个，还少了15个。不知道问题出在了哪里。

![](https://cdn.mundane.ink/202505262123458.png)

上周工作主要是优化了插件的细节，增加了导入功能和增加设置自动同步时间间隔的功能。然后还把代码开源了，开源地址是<https://github.com/mundane799699/bilibili-history-wxt>，在浏览器插件中我也有说明。目前我的时间真的不够用，上周只来得及做这些。免费功能让他们自己去加吧，目前功能已经满足我自己的需求了。

![](https://cdn.mundane.ink/202505262129384.png)

这周的话我打算做个视频再推广一下，不推广还真的不行，你的东西再好，别人也不知道。
还有就是真的要开始搞网页版的登录功能了，不能再把时间花在那些免费功能的优化上了。

## shopify app开发进展

shopify app开发这块的话，周二晚上和跨境电商老板开了个腾讯会议，澄清了一些需求。然后开发也遇到了一些问题，首先是获取店铺的meta title和description。description是获取到了，但是title找遍文档也找不到。搜了一下google，发现有个人也和我一样。
![](https://cdn.mundane.ink/202505262140197.png)

然后去论坛发帖，结果因为是新人，发的帖子被ban了。其实这时候，我应该意识到，自己钻了技术的牛角尖。因为对整个业务来说，获取title其实也不是非要不可，但是自己就是白白浪费了好多时间在这个上面。正确的做法应该是先获取description就行了，title先放一放，先干别的。后面我就跟老板商量，既然获取不到，就用shop name就行了。

然后还有个技术问题，就是这个app有个定时更新的功能。什么意思呢？就是卖家如果为这个app付了钱，成为了付费用户，那么每隔一周，这个shopify app就会自动调用shopify的api获取店铺中的产品数据，更新到数据库中。后面买家用户访问某个特定页面的时候，看到的就是数据库中的最新数据（只是打个比方）。听起来很简单的需求是吧？但是做起来并没那么简单。因为shopify app通常是部署在render上的，但是render是没有定时任务的。

![](https://cdn.mundane.ink/202505262151645.png)

cursor推荐的方案是这样的：首先暴露一个api，调用这个api以后，app会扫描数据库中的用户，看哪些付费用户已经到了一周的期限需要更新了。如果发现有这样的用户，就调shopify的api获取该用户的产品数据，更新到数据库中。然后还需要在github设置一个github action，就是一个定时任务，每天请求一下shopify app暴露出来的这个api。

然后调shopify的api还不是随便就能调的，是需要session凭据的，不过还好shopify的remix模板中已经有了一张表，在app安装的时候就把session存了起来。到时候要调api的时候直接从表里拿出来就好了。

这还不算完，还有用户套餐管理表，因为这就是app的付费点，只有vip用户才能享受自动更新的功能。

![](https://cdn.mundane.ink/202505262200758.png)

这样的话还涉及对接支付，而在shopify app中怎么对接支付这块我还没看过，但是感觉复杂度一下子就上去了。

后面想了半天，我还是决定先从简单的做起，先把UI界面实现。然后对定时更新功能进行拆分，先做更新接口的功能。做完以后我自己用postman之类的工具调接口进行测试，看看能不能成功更新。这步完了以后，我再写github action，用github action来调用app暴露的接口，并测试。再然后，才去看支付那块怎么对接。

这一拆分，感觉就清晰多了，反正这周先修改主页面，然后写settings页面和plans页面。然后做更新功能。

## 优化Readecho后端

readecho.cn的后端用的是java，我直接使用了若依这个脚手架，在业界非常出名。但方便是方便，唯一的问题就是java应用占用的内存太大了。之前就有问题，总是运行一段时间以后莫名其妙的服务就挂了。周末好好排查了一下这个问题，终于找到了原因：

![](https://cdn.mundane.ink/202505262321036.png)

然后我看了一下我这台服务器的日志，确实如此：

![](https://cdn.mundane.ink/202505262303288.png)

![](https://cdn.mundane.ink/202505262304576.png)

主要原因还是我们这个云服务器内存不够大，目前这个云服务器是99一年的那种，只有两核两g。

后来我先把服务器中的mysql进程停了，腾出了100多m的内存。目前reaecho用的mysql是rds，停这个不影响。然后修改了启动命令，将初始内存和最大内存改成了768m，之前是一个g。
```shell
nohup java -Xms768m -Xmx768m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=heapdump_pid%p.hprof -jar ruoyi.jar > app.log 2>&1 &
```

调整完以后果然好多了，不会那么轻易崩了。

话说回来，独立开发能不用java还是别用，用go或者python或者nodejs都比java省内存多了。当然，最重要的还是要能赚到钱。只要能赚到钱，用什么技术都无所谓，毕竟升级一下服务器也花不了多少钱。


## 关于出海工具站

出海工具站这块，这周倒是没少看哥飞的公众号文章，一共看了11篇，收获颇多。印象最深的是这篇：

[看得上小钱，才能赚大钱，积少成多，聚沙成塔](https://mp.weixin.qq.com/s/-MVNa_2q4w6L3haEmlnLvw)

大家没看过的可以去看一下，看看国外的巴基斯坦大佬是如何滚雪球的。在我看来，他最智慧的地方在于将时间的利用效率一步步提升，到最后他直接买别人开发好的软件。他所花的只是投资决策的时间。做了一个决策就能赚到钱，这感觉就和巴菲特一样了。但没有亲身经历的认知是无法做出这个决策的，决策做错了还会亏钱。

还有一点想分享的是，我在上周刷推特的时候找到了一个需求：

![](https://cdn.mundane.ink/202505262232286.png)

事情是这样的，上周有人发现可以用豆包做出擦边的图片(目前已经被豆包修复了)。

但我想说的不是这个，在评论区你可以发现这样的需求：
![](https://cdn.mundane.ink/202505262235246.png)

没错，就是根据图片反推出提示词。什么？你不相信这是一个需求？那请你看看这个

![](https://cdn.mundane.ink/202505262239317.jpg)

![](https://cdn.mundane.ink/202505262241563.png)

在提示词转图片类的网站越来越多的趋势下，你难道不觉得这个根据图片反推出提示词是个好需求吗？

等我有时间，如果没有更好的需求，我就会做这个。看到这里，还没找到需求的朋友已经可以行动了，我只能言尽于此。

## 最近一周刷到的精华分享
[独立开发出海三个月，我犯了这些错](https://mp.weixin.qq.com/s/A4sShiCGFoUKzOcVKNoaAg)
[高效便捷帮别人解决问题才值钱](https://mp.weixin.qq.com/s/y8dmxoLRi4SkM8YT6CoaAw)
[8款独立开发者省钱省时的工具](https://mp.weixin.qq.com/s/LT7KObQ2FB8FLE1GNIjVtg)

[AI工具出海一个月的所思所想](https://mp.weixin.qq.com/s/u3ngPUk4R1d57taJUMF1Rw)

<https://rk7bq9dqat.feishu.cn/docx/FXLSdCyFPolniAxjBXRcwGO4n1b>



## 最近一周对于如何做事的感悟
1. 不要懒，先做起来再说。不要想得太多，做的太少。尽人事，听天命。
2. 将任务分解是一个很有效的降低难度的方法。适当用思维导图，能让自己的头脑更加清晰，行动路线更加明确。

## 结语
这周事情进度没怎么推进还有个原因。周末这两天都有事出去了。希望下周能有更多自己的时间。
