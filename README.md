## コードによるメディアデザイン　課題
3FM1-48 中辻 基希
デプロイ済み：https://p5.paon.dev/
Github：https://github.com/katsuji3197/p5app.git

題名：ビジュアル天気アプリ
説明：金沢市の天気をビジュアル表現でリアルタイムで反映するページ、他の天気の表現を確認できるページがあります。

## 使用ツール
- Node.js 20.16.0
- Next.js 14.2.5
- Tailwind CSS
- p5-react
- Typescript

## 実行方法
(Node.jsを使える環境で、カレントディレクトリをp5appにして以下の順にコマンドを入力してください。)
1. npm install -g pnpm (pnpmが既に入っている場合は不要です)
2. pnpm i (本作品で使用するパッケージをインストールします)
3. `.env.example` を `.env.local` にコピーし、下記の環境変数を設定する
4. pnpm dev (環境を立ち上げます。環境変数を変えたあとは再起動してください)
特別な状況でない限り、http://localhost:3000 にアクセスすると実行されます。

## 環境変数

このアプリは `output: "export"` の静的サイトで、天気の取得はブラウザから行います。Next.js はビルド（および `pnpm dev`）のときに `NEXT_PUBLIC_` で始まる環境変数をクライアントの JavaScript へ埋め込みます。サーバー用の環境変数だけではブラウザから読めないため、この名前にしてください。

| 名前 | 用途 |
| --- | --- |
| `NEXT_PUBLIC_OPENWEATHER_API_KEY` | OpenWeatherMap の Current Weather Data API で、金沢市の現在の天気を取得する |

### 取得方法

1. [OpenWeatherMap](https://openweathermap.org/) でアカウントを作成する
2. [API keys](https://home.openweathermap.org/api_keys) を開き、キーを発行する
3. 発行直後は有効になるまで少し時間がかかることがあります

値はこの README や Git に書かず、手元の `.env.local` にだけ置いてください。

```sh
cp .env.example .env.local
```

`.env.local` の `NEXT_PUBLIC_OPENWEATHER_API_KEY=` の右辺に、発行したキーを貼ります。`.env` と `.env.*`（`.env.example` を除く）は `.gitignore` 済みです。

### 未設定のとき

トップページは天気の代わりに、`NEXT_PUBLIC_OPENWEATHER_API_KEY` の設定方法を示すメッセージを表示します。`/sunny` など個別の天気ページは API を呼ばないので、キーがなくても表示できます。

キーを拒否された場合（HTTP 401）も、値の確認と開発サーバーの再起動を案内します。

### 静的書き出しとキーの見え方

`pnpm build` 時点の `NEXT_PUBLIC_OPENWEATHER_API_KEY` が書き出された JS に含まれ、デプロイ先のブラウザから見えます。OpenWeatherMap へのリクエストをブラウザから送る構成のためです。以前リポジトリに入っていたキーは無効化し、新しいキーを発行してください。本番用のビルド前に `.env.local`（またはデプロイ環境の環境変数）へ新しいキーを設定してください。

## p5jsのコード
components/modulesに格納されています。
