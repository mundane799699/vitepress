# VSCode解决终端的中文乱码问题

## 问题展示

![](https://cdn.mundane.ink/202407031405161.png)

## 解决以后

![](https://cdn.mundane.ink/202407031410389.png)

## 解决方法

![](https://cdn.mundane.ink/202407031411554.png)

1. 打开 settings.json 文件

![](https://cdn.mundane.ink/202407031413350.png)

![](https://cdn.mundane.ink/202407031414893.png)

2. 修改 settings.json，重点是红框中的两行

   ![](https://cdn.mundane.ink/202407031414333.png)

   ```shell
   "terminal.integrated.profiles.windows": {
       "PowerShell": {
           "source": "PowerShell",
           "args": ["-NoLogo", "-NoExit", "-Command", "chcp 65001 >$null"]
       },
       "Command Prompt": {
           "path": ["${env:windir}\\Sysnative\\cmd.exe", "${env:windir}\\System32\\cmd.exe"],
           "args": ["/K", "chcp 65001"]
       }
   },
   "terminal.integrated.defaultProfile.windows": "Command Prompt"
   ```

## 更新

升级到windows11后又乱码了，依然是这个配置但是就是不起作用。

尝试过勾选beta版自动替换UTF-8可以解决这个问题，但同时也会带来更多的问题。

![](https://cdn.mundane.ink/202408181253618.png)

最终解决方案：

1. win+R，输入regedit

![](https://cdn.mundane.ink/202408181254978.png)

2. 注册表编辑器里打开HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor，新建一个变量命名为autorun，数据填为chcp 65001

![](https://cdn.mundane.ink/202408181254313.png)

参考：

> [Win11 下Visual Studio 2022编译时控制台乱码问题解决](https://blog.csdn.net/Megassi/article/details/126404128)
