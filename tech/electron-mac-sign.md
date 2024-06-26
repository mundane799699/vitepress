# electron 开发之 mac 签名和公证

## 生成 csr

从苹果开发者网站申请一个证书前，

需要在本地生成一个 csr 文件，

钥匙串访问——证书助理——从证书颁发机构请求证书

![](https://cdn.mundane.ink/202406261309783.png)

![](https://cdn.mundane.ink/202406261309993.png)

![img](https://static-insistime.vincentqiao.com/13_insistime_editor/52e3f94968b7a530a5bccc112.webp)

## 创建证书

csr 文件准备好后，就可以在苹果开发者网站创建证书了，

地址： https://developer.apple.com/account/resources/certificates/list

点击加号创建证书，

我要将应用发布到 mac 端，是我自己的网站，但是不经过 app store，

那么需要的证书是 Developer ID Application

![](https://cdn.mundane.ink/202406261310947.png)

![](https://cdn.mundane.ink/202406261315078.png)

接着按提示选择刚准备好的 csr 文件，

![](https://cdn.mundane.ink/202406261315669.png)

接着证书就创建好了，点击下载到本地。

![](https://cdn.mundane.ink/202406261316037.png)

## 导入和查看证书

双击下载好的证书，即可导入证书，

![](https://cdn.mundane.ink/202406261317701.png)

在钥匙串中就能看到导入的证书了，

![](https://cdn.mundane.ink/202406261317833.png)

## Identifiers

接着还需要创建 app 对应的 identifier，

同样的在下面这个地址进行创建，

https://developer.apple.com/account/resources/identifiers/list/bundleId

点击加号后选择第一种类型，

![](https://cdn.mundane.ink/202406261318268.png)

接着选择 app 类型，

![](https://cdn.mundane.ink/202406261319761.png)

接着填写你的 bundle id 就行，就是类似 com.xx.xx，

![](https://cdn.mundane.ink/202406261319886.png)

## 修改 electron-builder.json5

因为我使用 electron-builder 打包的，所以修改这个文件，修改如下：

```json
/**
 * @see https://www.electron.build/configuration/configuration
 */
{
  "appId": "ink.mundane.redarchive",
  "asar": true,
  "productName": "RedArchive",
  "directories": {
    "output": "release"
  },
  "files": ["dist", "dist-electron"],
  "mac": {
    "icon": "public/icon.png",
    "target": [
      {
        "target": "dmg",
        "arch": ["arm64", "x64"]
      }
    ],
    "artifactName": "${productName}-Mac-${arch}-${version}-Installer.${ext}",
    "hardenedRuntime": true,
    "gatekeeperAssess": false,
    "entitlements": "build/entitlements.mac.plist",
    "entitlementsInherit": "build/entitlements.mac.plist",
    "notarize": false
  },
  "win": {
    "icon": "public/icon.png",
    "target": [
      {
        "target": "nsis",
        "arch": ["x64"]
      }
    ],
    "verifyUpdateCodeSignature": false,
    "artifactName": "${productName}-Windows-${version}-Setup.${ext}"
  },
  "nsis": {
    "oneClick": false,
    "perMachine": false,
    "allowToChangeInstallationDirectory": true,
    "deleteAppDataOnUninstall": true
  },
  "linux": {
    "target": ["AppImage"],
    "artifactName": "${productName}-Linux-${version}.${ext}"
  },
  "publish": {
    "provider": "generic",
    "channel": "latest",
    "url": "https://cdn.dreamfree.xyz/updater/"
  },
  "releaseInfo": {
    "releaseNotesFile": "releaseNotesFiles/release-0.0.4.md"
  },
  "afterSign": "scripts/notarize.js"
}
```

build/entitlements.mac.plist 文件：

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>com.apple.security.cs.allow-jit</key>
  <true/>
  <key>com.apple.security.cs.allow-unsigned-executable-memory</key>
  <true/>
  <key>com.apple.security.cs.debugger</key>
  <true/>
</dict>
</plist>
```

scripts/notarize.js 文件

```javascript
require("dotenv").config();
const { notarize } = require("@electron/notarize");

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;
  console.log("electronPlatformName = ", electronPlatformName);
  console.log("appOutDir = ", appOutDir);
  if (electronPlatformName !== "darwin") {
    return;
  }

  const appName = context.packager.appInfo.productFilename;

  return await notarize({
    tool: "notarytool",
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_APP_SPECIFIC_PASSWORD,
    teamId: process.env.APPLE_TEAM_ID,
  });
};
```

.env 文件：

```
APPLE_ID=xxx
APPLE_APP_SPECIFIC_PASSWORD=xxx
APPLE_TEAM_ID=xxx
```

需要安装的依赖：

```shell
npm install --save-dev @electron/notarize electron-builder
npm install dotenv
```

其中需要注意的是，在 electron-builder.json5 中，需要把 notarize 设置为 false 或者是

```json
notarize: {
    teamId: "xxx"
}
```

不然就会报一个`Cannot destructure property 'appBundleId' of 'options' as it is undefined. failedTask=build stackTrace=TypeError: Cannot destructure property 'appBundleId' of 'options' as it is undefined. at MacPackager.generateNotarizeOptions`这样的错误，参考<https://github.com/electron-userland/electron-builder/issues/8103>

notarize.js 这个文件是为了在打包完之后自动执行公证，可以看到 electron-builder.json5 中最后有一句：

```json
afterSign: "scripts/notarize.js"
```

最后执行：

```shell
npm run build
```

## 效果

![](https://cdn.mundane.ink/202406261344366.JPG)

## 参考

> <https://claude.ai>
>
> [Electron-开发实践：Mac 应用包签名和公证](https://blog.vincentqiao.com/electron-mac-sign)
>
> <https://github.com/electron-userland/electron-builder/issues/8103>
>
> <https://github.com/electron/notarize/issues/175>
>
> [Electron 签名和公证](https://juejin.cn/post/7216536069284593701)
>
> [Electron 应用如何在 macOS 系统进行签名和公证](https://juejin.cn/post/7288609217959067683)
>
> [electron 构建 Mac app 后续的签名公证爬坑指南](https://juejin.cn/post/7080781730814099493)
>
> <https://www.electron.build/code-signing>
>
> <https://www.electron.build/configuration/mac#NotarizeNotaryOptions>
>
> <https://kilianvalkhof.com/2019/electron/notarizing-your-electron-application>
>
> <https://www.electronjs.org/zh/docs/latest/tutorial/code-signing>
>
> <https://www.electronjs.org/zh/docs/latest/tutorial/mac-app-store-submission-guide>
