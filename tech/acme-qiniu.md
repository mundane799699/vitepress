# acme.sh自动部署/更新七牛云https证书

## 4行命令搞定

```bash
export QINIU_AK="xxxxxxxx"
export QINIU_SK="xxxxxxxx"
export QINIU_CDN_DOMAIN="cdn.mundane.ink"
acme.sh --deploy -d mundane.ink --deploy-hook qiniu
```
## 参考
![](https://cdn.mundane.ink/202412241637948.png)

文档地址：
<https://github.com/acmesh-official/acme.sh/wiki/deployhooks#13-deploy-your-certificate-to-qiniucom>
