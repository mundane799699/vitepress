# 起因

昨天晚上小红书收藏导出的项目有个用户加我微信说同步出问题了，于是我赶紧排查了一下。先把java服务停了，然后把mysql服务停了。看了一下好像没什么问题，结果重新启动的时候就报错了。一直报`Starting MySQL..The server quit without updating PID file ([FAILED]sql/mysql.pid).`

# 开始折腾

其实这种问题之前也遇到过好几次了，只要把/data/mysql下的mysql-bin.index以及其他比如mysql-bin.000001之类的文件删除就能重新启动了，参考<https://blog.csdn.net/ydyang1126/article/details/72473828>

但是这次还是启动失败，于是我慌了，开始各种搜索寻找方案，差点就想找人求助了。

试了一圈方案，比如chmod -R 777 ...，chown -R mysql:mysql ...等，依然启动不起来。

# 问题的解决

在尝试多次以后已经是凌晨12点多了，我开始冷静下来，觉得这样无脑尝试下去不是办法，得看启动失败报了什么错。

于是问kimi

![](https://cdn.mundane.ink/202405041626488.png)

于是我看了一下错误日志，位置是/data/mysql/mysql-error.log

![](https://cdn.mundane.ink/202405041630207.png)

我注意到disk is full这句，这是说磁盘已满吗？其实我一开始也看过mysql-error.log这个文件，但是我看到这几句都是前几天的，应该和现在没什么关系。但是现在我联想到kimi说的磁盘空间不足也会导致mysql无法启动，就在想是不是磁盘的问题。于是又开始问kimi。

![](https://cdn.mundane.ink/202405041633618.png)

![](https://cdn.mundane.ink/202405041634083.png)

果然是磁盘没有剩余空间了，可是为什么呢？最近我也没有放什么大文件啊。突然我想到了，之前在解析小红书详情的时候，我把笔记图片下载到了本地，会不会是这个原因？我打开图片存放目录一看，妈呀这也存的太多了，应该就是图片太多的原因了。于是将图片删除。

![](https://cdn.mundane.ink/202405041636412.png)

一下子多了33G出来，看来之前的图片有30多G。

然后开始尝试启动，这次终于成功了，舒服了。

![](https://cdn.mundane.ink/202405041638948.png)

后面赶紧修改代码，把保存图片这个逻辑删除，小小的服务器真的承受不了这么多。

用户也终于不再嗷嗷叫了。

![](https://cdn.mundane.ink/202405041642732.jpg)

# 参考

> <https://blog.csdn.net/ydyang1126/article/details/72473828>
>
> <https://www.cnblogs.com/linjiqin/p/3544472.html>