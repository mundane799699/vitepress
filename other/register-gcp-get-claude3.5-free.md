# 注册谷歌云获取300刀赠金配合lobechat免费使用claude3.5(需绑卡)

### 步骤

#### 1. 注册谷歌云

打开https://cloud.google.com/vertex-ai?hl=zh_cn

注册谷歌云，绑定信用卡，获得300美金的免费额度，3个月到期

#### 2. 启用Vertex AI API

访问https://console.cloud.google.com/marketplace/product/google/aiplatform.googleapis.com为你的项目启用Vertex AI API

#### 3. 申请Claude模型

访问https://console.cloud.google.com/vertex-ai并申请访问Claude模型

#### 4. 创建[服务账户](https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts/create?walkthrough_id=iam--create-service-account#step_index=1)

- 选择你之前创建的项目ID。
- 确保为服务账户授予"Vertex AI用户"或"Vertex AI管理员"的角色。
- 在你刚创建的服务账户页面，转到"密钥"标签，点击"添加密钥"。
- 选择"创建新密钥"并选择"JSON"作为密钥类型。
- 密钥文件将自动下载。该文件包含worker所需的变量，如project_id、private_key和client_email

#### 5. 下载cf worker脚本

https://github.com/cg-dot/vertexai-cf-workers

中文版：

https://github.com/danielnie001/vertexai-cf-workers-cn/blob/main/README_CN.md

#### 6. 部署cf worker

打开https://dash.cloudflare.com

创建worker，然后把刚才下载的代码复制进去

接着设置4个环境变量，参考https://github.com/cg-dot/vertexai-cf-workers

环境变量的值在那个json密钥文件中

#### 7. 在lobechat中使用Claude3.5

https://lobechat.com.cn/

### 参考

> https://github.com/cg-dot/vertexai-cf-workers
>
> https://github.com/danielnie001/vertexai-cf-workers-cn/blob/main/README_CN.md
