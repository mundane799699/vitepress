# 手把手教你使用semrush分析AI导航站出口流量发现需求
最近被赫兹老师和浅滩小虾米两个公众号大佬推了一波，所以这周额外加更一篇，作为送给新读者的礼物。

## 购买semrush会员

首先去淘宝买个semrush会员

![](https://cdn.mundane.ink/20260514095137306.png)

## 选取一个导航站

我这里选的是https://theresanaiforthat.com

![](https://cdn.mundane.ink/20260514095813582.png)

## 分析

进入控制台，流量与市场，开始，在输入框中输入域名，点击分析按钮

![](https://cdn.mundane.ink/20260514095948257.png)

分析完成以后点来源与目标

![](https://cdn.mundane.ink/20260514100101466.png)

选择目标这个tab

![](https://cdn.mundane.ink/20260514100148987.png)

点击类别，全选，去掉成人分类

![](https://cdn.mundane.ink/20260514100254442.png)

导出csv

![](https://cdn.mundane.ink/20260514100328102.png)

## AI分析

直接把csv文件扔给AI分析，推荐使用chatgpt或者claude

![](https://cdn.mundane.ink/20260514100501609.png)

以下是我这边的AI分析的结果：

数据先消化一下：633 个域名，4 月份从 TAAFT 出口流量约 39 万次。流量最高的（Google、Anthropic、OpenAI、Reddit、Stripe 等）跟个人开发者没什么关系，真正有意思的是 **100–3000 访问量这一段的长尾**——这里有 287 个站点，里面藏着大量"单点功能 AI 包装器"和"垂直小工具"，正是个人开发者能下场打的范围。

下面是我从数据中梳理出的几个清晰的机会方向。

## 方向一：单点图像处理工具（最确定的机会）

这一类是数据里增长最猛的：

- **objectremover.com** 254 访问，+840%（就是抹除物体一个功能）
- **imggen.ai** 1136 访问，+2043%
- **extendimage.ai** 182 访问，+243%（图像扩展/outpainting）
- **dewatermark.ai**、**erase.bg**、**hama.app**、**letsenhance.io**（+189%）、**bigjpg.com**、**upscayl.org**、**clipdrop.co**（+227%）

特征非常一致：**一个域名 = 一个动词**（remove / enhance / extend / upscale / erase）。后端基本都是开源模型（LaMa、Real-ESRGAN、SAM、SD inpainting）+ Replicate/Fal/Modal。一个人两周能上线。SEO 关键词非常精准（"remove background from image"），不用打品牌战。能下场的细分点还很多：去人像/去 logo/去阴影、特定行业的图像清洗（电商商品图、房产图、车辆图）。

## 方向二：学生/学习类工具（最大的未开发蓝海）

这是数据里最让我意外的发现。**有大约 20 个站点都卡在 127 访问量这条线上**（榜单刚好截断的位置），全是学习工具：

studdy.ai、studentai.app、studyninja.ai、gradesai.com、knowt.com、learnq.ai、to-teach.ai、tutorai.me、tutorly.ai、jamworks.com、shiken.ai、retinello.com、photosolve.io、turbolearn.ai、scribbr.com、langchats.com（+366%，语言学习）……

127 这个数字意味着它们刚刚冒头，没有谁建立起优势。功能大同小异（拍题/录课转笔记/抽认卡/做题）。空白点：**单一学科 + 单一国家考试体系**——比如"日本中学数学"、"中国考研政治"、"印度 JEE 物理"、"美国 AP Bio"。每个垂直市场都足够小让大厂看不上，足够大让一个人养活自己。

## 方向三：垂直行业（人少、付费意愿高）

数据里这些领域几乎是单点存在，没有挤进来的人：

- **建筑/室内设计**：aiai.com（766）、getfloorplan.com（176，从图纸生成 3D 户型）、morphstudio.com（127）
- **食品/营养**：passiolife.com（食物识别）、candycall.io（205）
- **写作/编辑垂直**：authorvoices.ai（小说作者，+243%）、scripai.com（剧本，+216%）
- **法律**：harvey.ai（110）是大厂方向，但中小法律细分（合同审查、判例检索、地方法规）几乎空白

垂直行业的优势是 **SEO 竞争小 + 用户付费意愿强 + LLM 已经够用**，比拼通用 AI 工具好做得多。

## 方向四：游戏/娱乐周边生成器（典型独立开发者作品）

这些一看就是单人项目，但都活了下来：

- **skinmc.net** 263 访问（Minecraft 皮肤）
- **freefire-name.com** 188 访问（Free Fire 游戏名）
- **theselyricsdonotexist.com** 226 访问，+380%
- **moodplaylist.com** 238 访问（按心情生成歌单）
- **taranify.com**、**deepbeat.org**（说唱歌词）、**aijinglemaker.com**（广告歌）

模式很清楚：**某个有粉丝的游戏/兴趣社区 + 一个 AI 生成器**。Roblox、原神、Valorant、Pokémon TCG、桌游、跑团 DnD……每个都有现成需求。

## 方向五：短视频生成（最热的红利窗口）

- **shortmake.com** 426 访问，**+826%**
- **videodubber.ai** +202%
- **firecut.ai**、**wisecut.ai**、**vozo.ai**、**canvid.com**、**motionelements.com**（+325%）

这块完全是被 TikTok/Reels/Shorts 的内容缺口推起来的。垂直切法：特定平台（TikTok 专属比例 + 字幕样式）、特定行业（电商商品视频、房产带看视频、餐厅视频）、特定语言市场（小语种配音 + 文化适配）。

## 我会怎么挑

如果非要排序，**性价比从高到低**：

1. **方向三（垂直行业）**——长期最稳，付费用户最值钱，竞争最少，但需要你对那个行业有一点了解或者愿意学。
2. **方向二（学科垂直学习工具）**——市场被大量同质化产品分摊，但你只要选对一个细分考试体系就能切走一块。
3. **方向一（单点图像工具）**——上线最快、验证最快，但壁垒最低，靠 SEO 和先发抢窗口期，做出第一个版本不超过两周。
4. **方向四（兴趣社区生成器）**——做着开心，能赚点钱，难做大。适合作为练手或副业。
5. **方向五（短视频）**——红利真实，但 Adobe / CapCut / 各大厂都在挤，单人做需要找一个非常窄的角度。

需要的话，我可以继续帮你从这 633 个里筛某一类（比如把所有"学习类"或"图像处理类"都提出来对比功能差异），或者针对你感兴趣的某个方向做更深的拆解。



## 找几个看一下

https://getfloorplan.com。从草图生成3d图。

![](https://cdn.mundane.ink/20260514101011721.png)

https://freefire-name.com。典型的靠adsense广告盈利的网站。

![](https://cdn.mundane.ink/20260514101229022.png)

## 原文链接

<https://dreamfree.xyz/other/analyse_target_traffic.html>
