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
