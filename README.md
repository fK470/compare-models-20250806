# AIモデル性能比較デモ

同一プロンプトで異なるAIモデルが生成したブロック崩しゲームを比較するWebアプリケーション

## 概要

このプロジェクトは、様々なAIモデルの実装能力を視覚的に比較するためのデモアプリケーションです。すべてのモデルに同じプロンプト「Create a Brick Breaker Game using HTML, CSS and JavaScript.」を与え、生成されたゲームの品質を比較できます。

## 比較対象モデル

- **Claude Opus 4.1** - Anthropic最強モデル
- **Claude Sonnet 4** - 高速で賢いClaude Sonnetモデル
- **ChatGPT Free** - OpenAIの無料プラン（GPT-4oまたは4o-mini）
- **GPT OSS 20B** - オープンウェイトGPTモデル
- **Gemini 2.5 Flash** - Google最速のGeminiモデル
- **Gemini 2.5 Pro** - Google最強のGeminiモデル
- **DeepSeek R1** - 推論特化型DeepSeekモデル
- **DeepSeek V3** - 最新のDeepSeek V3モデル
- **Grok 3** - xAIのGrokモデル
- **Qwen 3 235B** - Alibaba超大規模モデル
- **Qwen 3 Coder** - コーディング特化型Qwenモデル

## 開発環境のセットアップ

### 必要な環境
- Node.js 18以上
- npm/yarn/pnpm/bun のいずれか

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開いてアプリケーションを確認できます。

## プロジェクト構成

```
compare-models-20250806/
├── app/                    # Next.js App Router
│   ├── page.tsx           # メインページ（モデル一覧）
│   └── page.module.css    # スタイリング
├── public/
│   └── games/             # 各モデルが生成したゲームのHTMLファイル
│       ├── claude-opus-4.1.html
│       ├── claude-sonnet-4.html
│       ├── chatgpt-free-plan.html
│       └── ...
└── README.md
```

## 使い方

1. アプリケーションを起動
2. 各モデルカードをクリックして詳細を確認
3. 「ゲームをプレイ」ボタンで実際に生成されたゲームをプレイ
4. ゲームの品質、動作、コードの洗練度を比較

## 評価ポイント

各モデルが生成したゲームは以下の観点で比較できます：

- **動作の安定性** - バグなく正常に動作するか
- **ゲーム性** - プレイしやすさ、楽しさ
- **コード品質** - 生成されたコードの可読性と構造
- **デザイン** - 視覚的な完成度
- **機能の充実度** - スコア、ライフ、レベルなどの実装

## ビルドとデプロイ

### プロダクションビルド

```bash
npm run build
```

### プロダクション実行

```bash
npm start
```

## 技術スタック

- [Next.js 15](https://nextjs.org/) - Reactフレームワーク
- TypeScript - 型安全な開発
- CSS Modules - コンポーネントスコープのスタイリング

## ライセンス

このプロジェクトは実験・デモ目的で作成されています。

---

*最終更新: 2025年8月6日*