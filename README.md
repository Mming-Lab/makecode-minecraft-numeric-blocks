
# 数値ブロック (Numeric Block)

Minecraft用のMakeCode拡張機能で、数値ブロック機能を提供します。この拡張機能により、エージェントがブロックを検査して、異なる色の羊毛ブロックに基づいて数値（0-9）を取得できます。

> Open this page at [https://mming-lab.github.io/numericblock/](https://mming-lab.github.io/numericblock/)

## 機能

- **数値ブロック検査**: エージェントが指定した方向のブロックを検査して数値を取得
- **数値ブロック配置**: ワールド内にランダムな数値ブロックを一列に配置（Bedrock Editionアドオンと連携）
- **羊毛ブロックマッピング**: 異なる色の羊毛ブロックが数字0-9を表現
  - 覚えやすいように抵抗のカラーコードに基づいています
  - 黒の羊毛 = 0
  - 茶色の羊毛 = 1
  - 赤の羊毛 = 2
  - オレンジの羊毛 = 3
  - 黄色の羊毛 = 4
  - 緑の羊毛 = 5
  - 青の羊毛 = 6
  - 紫の羊毛 = 7
  - 灰色の羊毛 = 8
  - 白の羊毛 = 9

## 拡張機能として使用

このリポジトリはMakeCodeの**拡張機能**として追加できます。

* [https://minecraft.makecode.com/](https://minecraft.makecode.com/) を開く
* **新しいプロジェクト**をクリック
* 歯車ボタンメニューの**拡張機能**をクリック
* **https://github.com/mming-lab/numericblock** を検索してインポート

## このプロジェクトを編集

このリポジトリをMakeCodeで編集するには:

* [https://minecraft.makecode.com/](https://minecraft.makecode.com/) を開く
* **インポート**をクリックし、次に**URLをインポート**をクリック
* **https://github.com/mming-lab/numericblock** を貼り付けてインポート

## 使用方法

### 基本ブロック

1. **数値ブロックを調査**: `エージェントの〇〇の数値ブロックを調査` ブロックを使用して、任意の方向のブロックを検査し、その数値（0-9、または数値ブロックでない場合はnull）を取得できます。

2. **数値ブロックを並べる**: `数値ブロックを並べる` ブロックを使用して、ランダムにシャッフルされた数値ブロックを一列に配置できます。この機能を使用するには [Bedrock Editionアドオン](../minecraft-numeric-blocks-mcaddon/) のインストールが必要です。

### サンプル: ソートアルゴリズム

数値ブロックを使ったソートアルゴリズムを作成するためのスターターテンプレートです:

```typescript
function 初期化 (開始座標: Position) {
    blocks.numline(開始座標, NORTH_CARDINAL_DIRECTION, 6)
    agent.teleport(positions.add(
    開始座標,
    world(-1, 0, 0)
    ), EAST)
}
player.onChat("sort", function () {
    初期化(world(0, -60, 0))
    // ここにソートアルゴリズムを記述しよう
    player.say(agent.inspectNumericBlock(FORWARD))
})
```

**このコードの動作:**
1. 6個のランダムな数値ブロックを北向きに一列に配置する関数を作成
2. エージェントを最初のブロックの西側に配置し、東を向かせる
3. チャットで "sort" と入力すると、ブロックが初期化される
4. `agent.inspectNumericBlock()` で値を読み取り、エージェントの移動/建築コマンドで並び替える独自のソートアルゴリズムを実装できます

## ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照してください。

#### Metadata (used for search, rendering)

* for PXT/minecraft
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
