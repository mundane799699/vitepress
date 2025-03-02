# windows安装postgresql安装失败与解决
## 起因
这几天需要在windows本地安装postgresql，遇到了问题，写篇博客记录一下。

## 问题发生

首先是安装完成后报了这个错误：

Problem running post-install step.Installation may not complete correctly.The database cluster initialisation failed.

![](https://cdn.mundane.ink/202503021908701.png)

然后就google上搜索这个问题，尝试过卸载重装、赋予文件夹权限、新建user等多种方式均失败。

后面按照这篇[PostgreSQL 安装时出现数据库集群初始化失败的问题解决方案分享](https://blog.csdn.net/JueHenDaDa/article/details/144893222)

打算手动初始化，然后手动启动服务，但还是报错，大概是这样的：
``` bash
PS D:\software\PostgreSQL\15\bin> initdb.exe -D "D:\software\PostgreSQL\15\data" -U postgres -W
initdb: 错误: program "postgres" was found by "D:/software/PostgreSQL/15/bin/initdb.exe" but was not the same version as initdb
```



后面在stackoverflow上搜到了这个问题的解决方案，原帖地址在这里：
https://stackoverflow.com/questions/54631443/win-10-postgresql-11-database-cluster-initialisation-failed
![](https://cdn.mundane.ink/202503021859052.png)



总结起来解决方案就是把注册表里的一个autorun删掉。有的人是没的，但我是有的。设置这个autorun的原因可以看我这篇博客：
[VSCode解决终端的中文乱码问题](https://dreamfree.xyz/tech/vscode-terminal-Chinese-garbled-characters.html)

最终成功解决，看看效果：
![](https://cdn.mundane.ink/202503021902024.png)

![](https://cdn.mundane.ink/202503021903306.png)

## 参考
[PostgreSQL 安装时出现数据库集群初始化失败的问题解决方案分享](https://blog.csdn.net/JueHenDaDa/article/details/144893222)
[Win 10 Postgresql 11 database cluster initialisation failed](https://stackoverflow.com/questions/54631443/win-10-postgresql-11-database-cluster-initialisation-failed)
[PostgreSQL安装异常：Problem running post-install step。](https://blog.csdn.net/hx7013/article/details/124126849)
