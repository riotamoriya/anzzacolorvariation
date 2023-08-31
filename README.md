# ReactプロジェクトのCI/CD設定手順

GitHub Actionsを使用してReactプロジェクトをAWS S3およびCloudFrontに自動デプロイするための手順を説明します。

## 1. **Amazon S3のセットアップ**

- AWS管理コンソールにログインします。
- S3のダッシュボードで「バケットを作成する」をクリックします。
- バケットの名前として`anzzacolorvariation`を指定し、リージョンとして`us-east-1`を選択します。
- 「静的ウェブホスティング」の設定は行わずに、バケットを作成します。

## 2. **CloudFrontのセットアップ**

- AWS管理コンソールからCloudFrontを開き、適当なディストリビューションを選択します。
- 「オリジンを作成」で先ほどの`anzzacolorvariation`バケットを選択します。
- 適当な設定を行う。特にS3バケットポリシーは指示に従って変更する。
- 「ビヘイビアを作成」で先ほどのオリジンを選択する。パスパターンは、`/anzzacolorvariation/*`とする。
- 配信のIDをメモしておきます。

## 3. **IAMでの権限設定**

- IAMダッシュボードで新しいユーザを作成し、プログラムによるアクセスを許可します。
- 適切なS3およびCloudFrontの権限をユーザに付与します。
- アクセスキーとシークレットキーを生成し、メモしておきます。

## 4. **GitHubのリモートリポジトリの作成**

前提として、GitHubにリモートリポジトリを作成しておく必要があります。以下の手順でリポジトリを作成します：

1. GitHubにログインし、トップページ右上の`+`アイコンをクリックして`New repository`を選択します。
2. リポジトリの名前:"anzzacolorvariation"、説明:"Users_can understand_any_color_variations_of_the_items."、その他の設定を適切に入力・選択します。
3. `Create repository`をクリックしてリポジトリを作成します。

リポジトリが作成されたら、ローカルのプロジェクトディレクトリで以下のコマンドを実行して、リモートリポジトリとの接続を行います：

```bash
git remote add origin [GitHubリポジトリのURL]
git branch -M main
git push -u origin main
```

## 5. **GitHub Secretsの設定**

GitHub ActionsがAWSサービスにアクセスできるようにするため、以下の秘密キーを設定する必要があります。これらはGitHubのリポジトリの設定から追加します。

1. **AWS_ACCESS_KEY_ID**: 先ほどIAMで作成したユーザーのアクセスキーID
2. **AWS_SECRET_ACCESS_KEY**: 同じくIAMで作成したユーザーのシークレットアクセスキー
3. **AWS_REGION**: 使用するAWSのリージョン。この手順では`us-east-1`を指定します。
4. **S3_BUCKET**: デプロイするS3バケットの名前。この手順では`anzzacolorvariation`を指定します。
5. **CLOUDFRONT_DISTRIBUTION_ID**: 先ほど作成したCloudFrontの配信ID

以下の手順で設定を行います：

- GitHubのリポジトリページに移動し、`Settings` > `Secrets`にアクセスします。
- `New repository secret`をクリックして、上記のそれぞれの名前と値を設定します。


## 手順完了後の動作

上記の手順を完了した後、GitHubに`push`を行うと、自動的にReactアプリケーションがビルドされ、`anzzacolorvariation`バケットにデプロイされ、最後にCloudFrontのキャッシュがクリアされます。

> **メモ:** CloudFrontの配信IDは、CloudFrontダッシュボードで各配信の「ID」列に表示されます。このIDは、GitHub Actionsのワークフローファイル内で`${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }}`として参照されます。



# プロジェクト構成

### `containers`
- ステートフルなコンポーネントやビジネスロジックを持つコンポーネント
- データ取得やステートの管理などのロジックを担当

### `pages`
- 特定のルートやURLにマッピングされるページレベルのコンポーネント
- 例: `/about`, `/contact`

### `components`
- 再利用可能なUIコンポーネント
- 例: ボタン、ヘッダー、フッターなど

### `mocks`
- モックデータやテストのためのダミーデータを提供するファイルや関数
- APIのレスポンスを模倣するデータなど

### `cores`
- アプリケーションの核となるロジックや共通のユーティリティ関数
- 設定ファイルや共通のヘルパー関数、APIの呼び出しをラップする関数など


