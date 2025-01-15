# TELE 🤖

<div align="center">
  <img src="./docs/static/img/tele_banner.png" alt="TELE Banner" width="100%" />
</div>

<div align="center">

📖 [文档](https://teleprotocol.io/agent/)

</div>

## 🌍 README 翻译

[日本語の説明](./README_JA.md) | [한국어 설명](./README_KOR.md) | [English](./README.md) | [Français](./README_FR.md) | [Português](./README_PTBR.md) | [Türkçe](./README_TR.md) | [Русский](./README_RU.md) | [Español](./README_ES.md) | [Italiano](./README_IT.md) | [ไทย](./README_TH.md) | [Deutsch](./README_DE.md) | [Tiếng Việt](./README_VI.md) | [עִברִית](https://github.com/TELE-Protocol/TELE/blob/main/README_HE.md) | [Tagalog](./README_TG.md) | [Polski](./README_PL.md) | [Arabic](./README_AR.md) | [Hungarian](./README_HU.md) | [Srpski](./README_RS.md)

## ✨ 功能

- 🛠️ 功能齐全的 Discord、Twitter 和 Telegram 连接器
- 🔗 支持所有模型（Llama、Grok、OpenAI、Anthropic 等）
- 👥 多代理和房间支持
- 📚 轻松导入并与文档交互
- 💾 可检索的内存和文档存储
- 🚀 高度可扩展 - 创建您自己的操作和客户端
- ☁️ 支持多种模型（本地 Llama、OpenAI、Anthropic、Groq 等）
- 📦 开箱即用！

## 视频教程

[AI Agent 开发学校](https://www.youtube.com/watch?v=ArptLpQiKfI&list=PLx5pnFXdPTRzWla0RaOxALTSTnVq53fKL)

## 🎯 使用案例

- 🤖 聊天机器人
- 🕵️ 自主代理
- 📈 业务流程自动化处理
- 🎮 游戏 NPC
- 🧠 交易

## 💰 如果您计划发行代币

TELE 是 GitHub 上排名第一的开源项目，我们正在推动下一代人机交互的发展，但我们仍然需要您的帮助，以确保代码质量最高，并快速响应影响我们整个构建者社区的关键问题.

为了确保可持续发展和持续创新，我们要求成功启动的项目贡献初始代币分配的 5-10%.

所有贡献都在链上公开跟踪，并专门用于生态系统开发.

### ⚠️ 别忘了给大佬打赏 10%：⚠️
[AM84n1iLdxgVTAyENBcLdjXoyvjentTbu5Q6EpKV1PeG](https://solscan.io/account/AM84n1iLdxgVTAyENBcLdjXoyvjentTbu5Q6EpKV1PeG)

## 🚀 开始使用

### 前置要求(必须):

- [Python 2.7+](https://www.python.org/downloads/)
- [Node.js 23+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [pnpm](https://pnpm.io/installation)


> **Windows 用户注意：** 需要安装 [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install-manual).

## 手动启动 TELE（仅推荐给知道自己在做什么的用户）

```bash
# 克隆仓库
git clone https://github.com/TELE-Protocol/TELE.git

# 切换最新发布的版本
# TELE 的迭代速度非常快，因此我们建议经常切换到最新的发布版本以避免出现问题.
git checkout $(git describe --tags --abbrev=0)
```

### 使用 Gitpod 启动 TELE

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/TELE-Protocol/TELE/tree/main)

### 编辑 .env 文件

将 .env.example 复制为 .env 并填写适当的值.

```
cp .env.example .env
```

注意：.env 是可选的.如果您计划运行多个独立的代理，可以通过角色 JSON 传递密钥.

### 自动启动 TELE

这将运行所有设置并使用默认角色启动机器人.

```bash
sh scripts/start.sh
```

### 编辑角色文件

1. 打开 `packages/core/src/defaultCharacter.ts` 修改默认角色.取消注释并编辑.

2. 加载自定义角色：
    - 使用 `pnpm start --characters="path/to/your/character.json"`
    - 可以同时加载多个角色文件
3. 连接 X (Twitter)
    - 在角色文件中将 `"clients": []` 更改为 `"clients": ["twitter"]` 以连接 X

### 手动启动 TELE

```bash
pnpm i
pnpm build
pnpm start

# 该项目迭代速度很快，有时如果您回到项目，需要清理项目
pnpm clean
```

#### 其他要求

您可能需要安装 Sharp.如果在启动时看到错误，请尝试使用以下命令安装:

```
pnpm install --include=optional sharp
```

### 社区与联系

- [GitHub Issues](https://github.com/TELE-Protocol/TELE/issues). 最适合：使用 TELE 时遇到的错误和功能建议.
- [Discord](https://discord.gg/ai16z). 最适合：分享您的应用程序并与社区互动.
- [Developer Discord](https://discord.gg/3f67SH4rXT). 最适合：获取帮助和插件开发.

## 贡献者



## 项目 Star 历史


