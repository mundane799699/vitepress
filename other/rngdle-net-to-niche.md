# 从rngdle.net聊到需求挖掘

好久没写文章了，首先祝大家国庆快乐。

最近我又开始刷x了，看到了别人发的一些关于网站出海、需求挖掘的文章。于是拿去跟哥飞 SEO Agent和chatgpt聊了聊，我觉得还是有些价值的，所以想分享一下。

## 起因

刚开始我是在x看到了这篇文章(地址我会放到文末)。

![](https://cdn.mundane.ink/20261001224626978.png)

思路总结起来就一句话：**顺藤摸瓜，看新冒出来的竞品小站最近靠哪些新词拿到了流量。**

然后我把这篇文章发给了哥飞 SEO  agent，让它评价一下。

![](https://cdn.mundane.ink/20261001225512926.png)

然后agent最后说可以试着跑一遍找词流程，那我肯定就让它跑一遍喽。

![](https://cdn.mundane.ink/20261001225641822.png)

因为库里有别人的沉淀，所以就找到了rngdle.net这个网站。我们看看。

![](https://cdn.mundane.ink/20261001225956581.png)

![](https://cdn.mundane.ink/20261001233016922.png)

确实是很典型的新词新站。

那网站作者是怎样发现这个需求的呢？于是我就去问chatgpt了。

以下是我跟chatgpt的对话。

## 和gpt的对话

### 我：

https://rngdle.net/
这个网站解决的是什么需求？网站作者是怎么发现这个需求的？

### gpt：

我看了一圈，**rngdle.net 本质上不是一个传统“解决刚需”的工具站，而是一个围绕“随机数字 + 稀有度 + 收集/比较”构造出来的轻游戏/好奇心工具站。** 更值得注意的是，它很可能不是从零发现一个新需求，而是**先发现已经开始流行的 RNGdle 玩法，再围绕这个玩法挖掘二级需求和搜索需求**。

### 它到底解决什么需求？

首页一句话其实已经把核心需求说透了：

> “How Rare Is Your Number?”
> 输入 0–1,000,000 的数字，看看它有什么数学特征、模式，以及在全部数字中的稀有程度。 [RNGdle.net](https://rngdle.net/)

比如你输入 `142857`，它会告诉你：

- 有几个不同数字
- 数字之和是多少
- 是否质数、回文、完全平方数、Harshad Number 等
- 有哪些特殊数字排列
- 这个数字在 0–1,000,000 中属于前百分之多少
- 距离它一个数字变化的“更稀有数字”是什么 [RNGdle.net](https://rngdle.net/)

所以它满足的并不是“我必须完成某件工作”的需求，而是三个心理需求叠加：

**好奇心 + 抽卡刺激 + 社交比较。**

你抽到：

> 828828

看到系统告诉你：

> Singular
> Top <0.01%

这种感觉其实和游戏里抽到 SSR 很像。828828 确实会被网站分析成多种特殊模式。 [RNGdle.net](https://rngdle.net/calculator?number=828828&utm_source=chatgpt.com)

所以用户真正想知道的是：

> **“我这个数字牛不牛？”**

而不是：

> “这个数字的数学性质是什么？”

数学只是包装。

------

### 它为什么让人愿意反复回来？

作者后来又加了很多“留存机制”。

网站现在有：

```
Unlimited Rolls → Daily Specimen → Collection → Daily Challenge → Compare → Sandbox → Near Miss → History
```

比如每天只有一个 Daily Specimen，可以积累 collection；Daily Challenge 每天所有人面对同一个挑战，还有 streak。 [RNGdle.net](https://rngdle.net/)

这就从：

> 一个数字计算器

变成了：

> **每天来抽一下的彩票 / 抽卡 / Wordle 式小游戏。**

而且它不涉及钱，所以心理负担非常低。

------

## 但是，这个需求很可能不是 rngdle.net 作者原创发现的

这一点反而是这个网站最值得你研究的地方。

现在还有一个更早、更像“原作”的：

**rngdle.com**

它的玩法非常简单：

> One roll per day. One number. What will yours be?

一天只能抽一个 0–1,000,000 的随机数，根据数字中的特殊模式获得 badge 和 EP，然后排行榜比较。 [RNGdle](https://www.rngdle.com/?utm_source=chatgpt.com)

第三方 RNGdle Tools 甚至明确写了：

> “Thank you to Cam (sparrowpatch) for making rngdle.com”

也就是说，原始 RNGdle 的作者是 **Cam / sparrowpatch**。 [RNGdle Tools](https://rngdle.tools/?utm_source=chatgpt.com)

原站域名 `rngdle.com` 注册于 **2025 年 10 月 22 日**，之后在 **2026 年 4 月 30 日** 被 Andy Baio 的 Waxy.org 推荐。Waxy 当时给出的描述特别有意思：

> “what’s the least amount of interactivity you can have in a game and still have it feel like a game?”

也就是：

**“一个游戏最少能少到什么程度，还能让人觉得它是游戏？”** [Waxy.org](https://waxy.org/2026/04/rngdle/?utm_source=chatgpt.com)

所以**原始 RNGdle 的创意来源**，更像是一个游戏设计实验：

> Wordle 每天猜一个词。
> 那我能不能再极端一点？
> 什么都不用猜。
> 每天只按一下按钮。
> 给你一个随机数字。
> 看你运气怎么样。

这就是非常典型的 **minimal game / daily game** 思路。

------

# 那 rngdle.net 作者又是怎么找到机会的？

这里我没有找到 rngdle.net 作者公开写的“我为什么做这个网站”的 Build in Public 文章，所以以下属于**根据网站结构和时间线做的高概率推断**，不是作者本人的公开说法。

我认为路径很可能是这样的：

**RNGdle.com 火起来 → 出现社区和分享 → 用户开始产生衍生问题 → 有人开始做工具 → rngdle.net 把这些需求系统化。**

有一个非常明显的证据。

rngdle.net 专门有页面解释：

> Entropy Points (EP)

但页面又特意强调：

> RNGdle.net 使用自己的 rarity score，**并不试图复制其他网站的私有 EP 算法。** [RNGdle.net](https://rngdle.net/guides/rngdle-ep)

为什么一个独立网站要专门强调这个？

因为它面对的用户显然已经知道：

> RNGdle
> EP
> badge
> rarity

换句话说：

**它是在承接已经存在的 RNGdle 用户需求。**

------

## 我甚至觉得作者可能是按“关键词需求”反推功能的

你看它的页面布局非常像 SEO 工具站：

- RNGdle Rarity Calculator
- RNGdle EP Explained
- Number Rarity
- Rarity Badges
- Best & Worst Numbers
- Mathematical Stats
- Pattern Atlas
- How Lucky Am I
- Number Finder
- Near Miss Analyzer
- Compare Numbers [RNGdle.net](https://rngdle.net/)

甚至还有这种 URL：

> `/number/36`
> `/number/49`
> `/number/262144`
> `/number/13958`

每个数字都有自己的：

> “How rare is 36?”

页面。 [RNGdle.net](https://rngdle.net/number/36?utm_source=chatgpt.com)

还有大量：

> `/patterns/prime-numbers`
> `/patterns/happy-numbers`
> `/patterns/triple-digits`

这样的页面。 [RNGdle.net](https://rngdle.net/patterns/triple-digits?utm_source=chatgpt.com)

这已经非常明显是：

**工具 + 内容 + Programmatic SEO。**

------

# 我猜作者的需求发现过程大概是这样

可以把它还原成一条非常值得你模仿的路线：

**① 发现一个刚火起来的小产品**

RNGdle.com。

↓

**② 发现用户真的在玩**

有人讨论、分享 roll、比较 EP，甚至出现论坛帖子和第三方工具。比如 osu! 社区就有长达数百帖的 RNGdle 讨论和每日成绩分享。 [osu!](https://osu.ppy.sh/community/forums/topics/2208782?start=10295404&utm_source=chatgpt.com)

↓

**③ 观察原产品“没有满足”的问题**

玩完 RNGdle 后用户自然会产生：

> 我这个数字到底有多稀有？

> 为什么我的 EP 这么高？

> 哪些数字最稀有？

> 质数到底算不算稀有？

> 777777 有多稀有？

> 我能不能无限 roll？

> 能不能比较两个数字？

> 有没有 RNGdle calculator？

↓

**④ 不直接复制游戏，而是做“生态工具”**

于是做：

> RNGdle Number Rarity Lab

↓

**⑤ 把每一个长尾问题变成页面**

```
number × pattern × guide × calculator
```

↓

**⑥ 搜索流量再导回核心工具**

这一步就是典型的 SEO 工具站打法。

------

# 这其实是一个非常经典的“二阶需求”

我觉得这是这个站最值得你学习的一点。

很多人找需求的时候一直想：

> **“世界上还有什么需求没人解决？”**

其实难度非常高。

另一种方法是：

> **“最近有什么东西突然火了？它火起来之后会自然产生什么新需求？”**

比如：

> Wordle 火了
> → Wordle Solver

ChatGPT 火了  

> → Prompt Generator
> → ChatGPT Detector
> → ChatGPT PDF tools

Midjourney 火了  

> → Prompt helper
> → image metadata reader

RNGdle 火了  

> → RNGdle Calculator
> → Rarity Analyzer
> → Badge Explorer
> → Number Finder

这种我把它称为：

**产品的二阶需求 / ecosystem demand。**

它通常比“凭空想一个 SaaS”容易发现得多。

------

而且现在还有一个很强的信号：已经不只是 rngdle.net，一个主题周围已经出现 `rngdle.tools`、`rngdle.io`、`rngdle.org`、`rngdlegame.com`、`rngdle.games` 等多个站点。第三方 `rngdle.tools` 直接说明自己是围绕原 RNGdle 做的分析工具。 [RNGdle Tools](https://rngdle.tools/?utm_source=chatgpt.com)

所以我的判断是：

**rngdle.net 作者大概率不是“发现了人们需要分析随机数字”这个需求。**

更可能是：

> **他发现了 RNGdle 这个正在增长的小趋势，然后发现围绕 RNGdle 存在 calculator / rarity / EP / badges / unlimited roll / stats 等大量长尾需求，于是把它做成了一个 SEO + 游戏工具站。**

这和你之前研究各种 AI 工具站的思路其实很接近：**不一定去造一个全新品类，而是寻找一个最近突然出现、开始增长的产品/玩法，然后抢它周围还没有被满足的搜索意图。** 

如果你是想从 **“我能不能用这种方法找到下一个 rngdle.net”** 的角度研究这个网站，这个案例其实很有价值。我可以进一步把它拆成一套具体的 **“如何提前发现这种刚冒头的小趋势 → 查关键词 → 判断是否值得做站”** 的方法。

### 我：

可以，你进一步把它拆成具体的方法。

### gpt：

可以。这个方法我建议你不要理解成“找关键词”，而是理解成：

> **先找到一个刚开始增长的“母体”，再找它必然产生的二阶需求，最后才用关键词数据验证。**

这比直接打开 Ahrefs/Semrush 找高搜索量低 KD 的词，更容易找到像 `rngdle.net` 这种早期机会。

Google Trends 的 Trending Now 本身就可以看到 100 多个国家和地区、最近 4 小时到 7 天的趋势，而且数据平均约 10 分钟刷新一次，很适合作为“异常变化探测器”。[Google 帮助](https://support.google.com/trends/answer/3076011?hl=en&utm_source=chatgpt.com) Product Hunt 和 GitHub Trending 则更适合提前发现“新产品、新玩法、新技术”——当前 Product Hunt 每天仍持续出现大量新产品，而 GitHub Trending 明确就是展示当前社区最兴奋的项目。[Product Hunt](https://www.producthunt.com/?orderBy=name0&utm_source=chatgpt.com)

## 一套可以每天执行的 SOP

1. **先找“母体”，不要先找需求。** 每天花 20～30 分钟扫 Product Hunt、Hacker News、GitHub Trending、Reddit、X，以及 Google Trends。你找的不是“好产品”，而是过去几天/几周里突然开始反复出现的**新名词**。例如某个新游戏、AI 模型、图片格式、社交玩法、App、开源项目、网络梗、文件格式、新平台功能。Hacker News 现在仍然每天快速聚集技术新品和新项目讨论；Reddit 的 SideProject/indiehackers 社区也持续有开发者分享刚上线的产品。[Hacker News](https://news.ycombinator.com/?utm_source=chatgpt.com)

2. **看到新名词后，马上做“后缀扩展”。** 假设今天发现一个突然开始火的东西叫 `Foo`，不要问“我要不要做一个 Foo”，而是立刻搜索 `foo calculator`、`foo generator`、`foo checker`、`foo viewer`、`foo downloader`、`foo converter`、`foo analyzer`、`foo stats`、`foo tracker`、`foo ranking`、`foo finder`、`foo simulator`、`foo editor`、`foo template`、`foo API`、`foo alternative`、`foo vs`、`foo how to`、`foo meaning`。这一步实际上是在寻找“母体产品不打算做，但用户必然会问”的事情。

3. **去社区里找“用户原话”。** 搜 Reddit、HN、GitHub Issues、Discord 公开内容和 X，重点不是点赞最多的帖子，而是寻找反复出现的句式：`Is there a way to...`、`Does anyone know...`、`How do I...`、`Can I...`、`Why is...`、`I wish...`、`Is there a tool...`。这类语言比关键词工具有价值，因为关键词工具往往要等搜索行为积累之后才有数据。近期 Reddit 的独立开发者讨论里，甚至有人明确采用“先在相关 subreddit 发布一个刚能用的版本，再通过评论观察需求”的方式获取首批用户。[Reddit](https://www.reddit.com/r/SideProject/comments/1vf743e/how_did_you_get_your_first_users_after_launching/?utm_source=chatgpt.com)

4. **判断它是不是“二阶需求”。** 一个非常好的二阶需求通常满足这个关系：

   `母体突然增长 → 用户完成核心行为 → 自然产生下一步问题`

   RNGdle 就是：

   `抽到随机数 → 这个数字牛不牛？ → rarity calculator`

   如果是一个 AI 视频模型：

   `生成视频 → 去哪里生成？ → model playground`

   `生成视频 → prompt 怎么写？ → prompt generator`

   `生成视频 → 哪个模型更好？ → comparison`

   `生成视频 → 一次多少钱？ → pricing calculator`

   `生成视频 → 我的显卡能不能跑？ → VRAM calculator`

   **后一箭越自然，这个需求越好。**

5. **检查 Google 是否已经出现“搜索意图”，但不要死盯搜索量。** 搜索 `Foo`，看 Google autocomplete、People Also Ask、相关搜索以及排名页面。如果一个词 Ahrefs 显示 volume=0，但 Google 已经开始自动补全，这反而可能是非常好的早期信号。你的目标不是找“已经有 10,000 搜索量”的词，而是找“现在只有 50，三个月以后可能有 5,000”的词。

6. **看竞争者，而不是只看 KD。** 搜索第一页。如果结果都是 Reddit、GitHub Issue、论坛、YouTube、母产品官网某个 FAQ，那么这是很强的机会信号，因为 Google **还没有找到一个专门满足这个搜索意图的网站**。相反，如果第一页已经有 8 个专业工具站，即使 KD=5，也不一定值得做。

7. **判断能不能 Programmatic SEO。** 这是 rngdle.net 最漂亮的地方之一。不要只问“能不能做一个页面”，而要问：

   > 一个功能能不能自然生成 100、1,000、10,000 个有不同搜索意图的页面？

   RNGdle 可以做：

   `number/36`
   `number/777777`
   `patterns/prime-numbers`
   `patterns/palindrome`  

   如果是字体识别，可以做：

   `font/xxx`
   `font-vs-font`
   `font-from-logo/xxx`

   如果能形成这种结构，它的价值会比普通单页工具大很多。

8. **判断“分享性”。** 最好的消费型小工具往往不是用完就走，而是能产生一个用户想分享的结果。比如“我的数字稀有度 Top 0.03%”“你的 AI 年龄是 87 岁”“这个头像与动漫角色相似度 94%”。分享结果本身就是分发渠道。rngdle 的精髓也就在这里：结果不是一个冷冰冰的数学答案，而是“我的数字比你的稀有”。

9. **在正式开发前，做一个 30 分钟竞争测试。** 搜：

   `Foo tool`
   `Foo calculator`
   `Foo generator`
   `Foo reddit`
   `Foo github`
   `"Foo" "I wish"`
   `"Foo" "is there a"`
   `"Foo" "how do I"`

   你通常很快就能知道这到底是真需求，还是你自己想象出来的需求。

10. **最后才决定要不要开发。** 对于这种站，我会用下面这个简单评分表，而不是凭感觉。

| 因素         | 0 分     | 1 分         | 2 分                    |
| ------------ | -------- | ------------ | ----------------------- |
| 母体趋势     | 没增长   | 有讨论       | 明显快速增长            |
| 新鲜度       | >2 年    | 半年～2 年   | <6 个月                 |
| 用户主动提问 | 几乎没有 | 偶尔         | 大量重复问题            |
| 搜索意图     | 没有     | 已有蛛丝马迹 | autocomplete/相关词明显 |
| 专门竞争者   | 很多     | 2～3 个      | 几乎没有                |
| 开发成本     | >1 月    | 1～2 周      | 1～3 天 MVP             |
| SEO 扩展     | 只能1页  | 10～50页     | 100+页                  |
| 分享传播     | 几乎没有 | 有一点       | 天然适合晒结果          |
| 使用频率     | 一次性   | 偶尔         | 经常/每日               |
| 商业化       | 很难     | 广告         | 广告/API/订阅/联盟      |

**16～20 分：马上做 MVP。**

**12～15 分：收藏观察。**

**低于 12 分：通常跳过。**

这不是科学公式，而是防止你因为“这个点子听起来挺有意思”就花两个星期开发。

------

## 最重要的一点：不要等关键词工具告诉你机会已经存在

假设一个新产品星期一爆火。

星期一：

> Reddit 出现讨论。

星期二：

> X 上开始传播。

星期三：

> 用户开始问 “xxx calculator?”

星期五：

> Google autocomplete 开始出现。

两周后：

> Google Trends 曲线明显起来。

两个月后：

> Ahrefs 显示 Search Volume 2,400。

很多人是在**最后一步**才发现。

你应该争取在：

> **星期三～星期五**

发现它。

这就是这种打法真正的优势。

------

# 我会重点盯这 6 类“母体”

对你来说，我尤其建议关注下面这些，因为都比较适合独立开发者快速做工具站：

| 母体       | 二阶需求机会                                                 |
| ---------- | ------------------------------------------------------------ |
| 新 AI 模型 | generator / prompt / pricing / comparison / API / calculator |
| 爆火小游戏 | calculator / stats / solver / cheat / rarity / tracker       |
| 新社交玩法 | generator / downloader / viewer / analytics                  |
| 新开源项目 | hosted version / GUI / converter / viewer                    |
| 新文件格式 | viewer / converter / compressor / editor                     |
| 新平台功能 | downloader / helper / formatter / migration / analytics      |

例如 GitHub Trending 突然出现一个 3 天获得几千 Star 的 repo，我不会第一时间想：

> “我能不能复制它？”

我会先想：

> **“如果这个东西真的火了，它的普通用户接下来还会缺什么？”**

这两个问题的价值差距很大。

------

## 还有一个很好用的技巧：观察“笨办法”

这是我非常推荐你重点训练的。

如果你看到用户正在：

**Excel 手工算、复制到 ChatGPT、写 Python 脚本、用 DevTools、打开三个网站来回切换、在 Reddit 发帖让别人帮忙算、用 Google 搜一堆东西自己比较……**

往往就是工具机会。

因为：

> **用户已经在解决这个问题，只是解决方式很差。**

这种需求比“你觉得别人应该需要”可靠得多。

------

# 如果让我每天实际执行

我自己会建立一个 Notion/Excel，只有：

| Date | Trend | Source | Why growing | Secondary need | Existing sites | SEO pages | Build time | Score |
| ---- | ----- | ------ | ----------- | -------------- | -------------- | --------- | ---------- | ----- |
|      |       |        |             |                |                |           |            |       |

每天只记 **3～5 个东西**。

不要一天记 50 个。

一个月下来大概有 100 个候选。

真正值得研究的可能只有：

> 10 个。

真正值得做 MVP 的：

> 2～3 个。

而这 2～3 个，只做 **1～3 天版本**。

上线以后看：

> Google 有没有开始收录
> 有没有长尾 impression
> Reddit 有没有人点
> 有没有人直接搜索品牌词
> 用户到底在点哪个功能

有信号才继续。

没有就停。

这样你不会再陷入：

> **发现点子 → 花一个月开发 → 上线 → 发现没人搜。**

------

而且这套方法其实非常适合你。你本身能独立完成前端、后端、部署和爬虫，因此你的优势不应该是跟别人比“谁能想出更宏大的 SaaS”，而应该是**发现一个微趋势后，比大部分人快几天把可搜索、可分享的工具做出来**。

如果把整套方法压缩成一句话，就是：

> **追踪新名词 → 找用户正在问的第二个问题 → 检查 Google 是否还没有好答案 → 1～3 天做出来 → 用 SEO 页面把这个新词周围的位置占住。**

这其实就是我认为 `rngdle.net` 这个案例最值得学的地方。

## 后续

后续我还会看看rngdle.net的外链。

因为如果记住了这些外链平台，我以后多来扫一扫，下次可能就能在第一时间发现类似rngdle.net这样的新站了，然后顺藤摸瓜。

## 我为什么执着于需求挖掘？

老粉丝可能知道，我这个公众号已经写了好几篇怎么挖掘需求的文章了。

为什么我如此执着于需求挖掘呢？

因为这个步骤太重要了，再怎么去完善它也不为过。

现在做出海网站赚钱，基本上可以分为三步，需求挖掘、产品开发、推广。

做seo的都知道，如果是一个老需求，要靠seo获得流量，从开始推广到有流量，至少几个月。

想快速获得正反馈，那就做新词，也就是新出现的需求，还没什么产品能够满足。

甚至不用推广、不用加外链，自己就能获得流量，因为供小于求，没有人和你竞争。这听起来也太香了吧。

那如何找到这样的新词呢？自然要学习和实践需求挖掘喽。

## 参考

> https://x.com/ios_1261142602/status/2105450466398306714
>
> https://x.com/JiangK82705/status/2104071927312638269
>
> https://x.com/liangzhu_AI/status/2103402474677670352
>
> https://seo.web.cafe/chat/

