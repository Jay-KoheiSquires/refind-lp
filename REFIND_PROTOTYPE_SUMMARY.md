# REFIND Shopify移行プロトタイプ まとめ

作成日: 2024年12月14日

---

## プロジェクト概要

### 背景
- REFINDはBASEでジュエリーECを運営中
- Shopifyへの移行を検討
- チームがShopifyの機能をイメージできないまま議論していた

### 目的
- Shopify移行後のサイトイメージを先に作成
- 各パーツがShopifyのどの機能で実現できるかを可視化
- 議論を具体化し、移行を加速させる

---

## 成果物

### プロトタイプURL
https://jay-koheisquires.github.io/refind-prototype/

### GitHubリポジトリ
https://github.com/Jay-KoheiSquires/refind-prototype

---

## 作成したページ（全5ページ）

### index.html（トップ）
- ヒーローバナー
- 横スクロール商品マーキー
- おすすめ商品一覧
- モアサナイト説明セクション
- カテゴリー紹介
- レビューカルーセル
- ニュースレター登録

### product.html（商品詳細）
- 商品画像ギャラリー
- 価格・セール表示
- カラー/サイズ選択
- カート追加・今すぐ購入ボタン
- 決済ボタン（Shop Pay/Apple Pay/PayPay）
- 商品説明・スペック
- レビュー一覧
- 関連商品

### collections.html（商品一覧）
- ヒーローバナー
- フィルター・ソート
- 商品グリッド
- ページネーション

### cart.html（カート）
- カート内商品リスト
- 数量変更・削除
- 注文サマリー（小計・送料・合計）
- 決済ボタン
- おすすめ商品

### about.html（ブランド紹介）
- ブランドストーリー
- モアサナイトとは
- 品質へのこだわり
- FAQ

---

## 実装した機能・UI

### Shopify機能ヒントシステム
- 右下の「メモを見る」ボタンでイントロモーダル表示
- 緑枠で囲まれた部分にホバー/タップで説明表示
- 「説明を隠す」で非表示可能

### リッチUI/UX
- 横スクロールマーキー（商品画像が自動で流れる）
- スクロールリビールアニメーション
- ホバーエフェクト

### モバイル対応（90%がスマホユーザー向け）
- 全ページにモバイルボトムナビゲーション
- タッチスワイプ対応カルーセル
- レスポンシブレイアウト

### 想定Shopify機能
- 商品管理（画像250枚まで、バリエーション、在庫自動管理）
- ワンクリック決済（Shop Pay / Apple Pay / PayPay）
- レビュー機能（Looxアプリ想定）
- アップセル（カート追加時のおすすめ表示）

---

## 技術仕様

### 使用技術
- HTML5
- CSS3（CSS Variables、Flexbox、Grid）
- JavaScript（Vanilla JS）

### フォント
- 英語: Outfit (Google Fonts)
- 日本語: Zen Kaku Gothic New (Google Fonts)

### カラーパレット
| 名前 | HEX |
|------|-----|
| Accent Gold | #d4af37 |
| BG Dark | #0a0a0a |
| BG Light | #111111 |
| Text Primary | #ffffff |
| Text Muted | #999999 |
| Border | #333333 |

### ブレイクポイント
- Mobile: 〜767px
- Tablet: 768px〜1023px
- Desktop: 1024px〜

---

## Figmaへのインポート

### 方法
html.to.design プラグインを使用

### インポートしたページ
1. index.html（トップ）
2. product.html（商品詳細）
3. collections.html（商品一覧）
4. cart.html（カート）
5. about.html（ブランド紹介）

### デザインスペック
https://github.com/Jay-KoheiSquires/refind-prototype/blob/main/DESIGN_SPEC.md

---

## Shopify構築工数見積もり

### パターンA: 既存テーマカスタマイズ（おすすめ）
**2〜4週間**

| 作業 | 工数 |
|------|------|
| ストア初期設定 | 1〜2日 |
| テーマ選定・購入 | 1日 |
| テーマカスタマイズ | 3〜5日 |
| 商品データ移行 | 1〜2日 |
| アプリ導入・設定 | 2〜3日 |
| テスト・調整 | 2〜3日 |

費用: テーマ $0〜$350 + アプリ月額 $30〜50程度

### パターンB: カスタムテーマ開発
**1〜2ヶ月**
費用: 50〜150万円程度（外注の場合）

---

## LINEでの共有文

```
お疲れ様です！

Shopify移行の件、議論を進める中でイメージしづらい部分もあるかと思い、先にプロトタイプを作成してみました

https://jay-koheisquires.github.io/refind-prototype/

移行後のサイトイメージを実際に見ていただいた方が、話が早いかなと思いまして

右下の「メモを見る」を押すと、各パーツがShopifyのどの機能で実現できるか説明が出るようにしています

想定している機能
・商品管理（画像250枚まで、バリエーション、在庫自動管理）
・ワンクリック決済（ShopPay/ApplePay/PayPay）
・レビュー機能（写真付きレビュー、自動依頼メール）
・アップセル（カート追加時のおすすめ表示）

スマホ表示も作り込んでいるので、ぜひスマホでもご確認ください

このプロトをベースに、デザインの細かい部分はFigmaで詰められればと思っています

お時間あるときに触っていただけると嬉しいです！
```

---

## 次のステップ

1. チームにLINEで共有
2. Figmaでデザインレビュー・調整
3. フィードバックを元にプロトタイプ修正
4. Shopifyテーマ選定・構築開始

---

## ファイル構成

```
refind-prototype/
├── index.html          # トップページ
├── product.html        # 商品詳細
├── collections.html    # 商品一覧
├── cart.html           # カート
├── about.html          # ブランド紹介
├── DESIGN_SPEC.md      # デザイン仕様書
├── css/
│   ├── style.css       # 共通スタイル
│   ├── product.css     # 商品詳細用
│   ├── cart.css        # カート用
│   └── shopify-hints.css # ヒントシステム用
├── js/
│   ├── main.js         # 共通JS
│   ├── product.js      # 商品詳細用
│   ├── cart.js         # カート用
│   └── shopify-hints.js # ヒントシステム
└── assets/             # 画像等
```

---

質問あればLINEで！
