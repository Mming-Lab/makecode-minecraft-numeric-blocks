# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

これはMinecraft用のMakeCode拡張機能で、数値ブロック機能を提供します。この拡張機能により、エージェントがブロックを検査して、異なる色の羊毛ブロックに基づいて数値（0-9）を返すことができます。

## ビルドと開発コマンド

- `pxt build` - 拡張機能をビルド
- `pxt deploy` - 拡張機能をデプロイ
- `pxt test` - テストを実行
- `make build` - Makefile経由の代替ビルドコマンド
- `make deploy` - Makefile経由の代替デプロイコマンド（デフォルトターゲット）
- `make test` - Makefile経由の代替テストコマンド

## アーキテクチャ

拡張機能は以下で構成されています：

- **`numericBlock.ts`** - 羊毛ブロックIDを数値（0-9）にマッピングする`inspectNumericBlock`関数を含むメイン機能
- **`main.ts`** - エントリーポイント（現在は空）
- **`test.ts`** - テストファイル（現在は最小限）
- **`main.blocks`** - MakeCode用のビジュアルブロック定義
- **`pxt.json`** - プロジェクト設定とメタデータ
- **`_locales/ja/`** - 日本語ローカライゼーションファイル

## 主要な実装詳細

`numericBlock.ts`の中核となる関数`agent.inspectNumericBlock(direction)`は、指定された方向のブロックを検査して以下を返します：
- 異なる色の羊毛ブロックに対して0-9（BLACK_WOOL=0、BROWN_WOOL=1など）
- 数値ブロックでない場合はnull（警告メッセージ付き）

## テスト

テストは`test.ts`に配置されていますが、現在は最小限です。このファイルには、拡張機能として使用される際はテストがコンパイルされないことが記載されています。

## ローカライゼーション

プロジェクトは日本語ローカライゼーションをサポートしており、UI文字列とJSDocドキュメントの両方について`_locales/ja/`に文字列ファイルがあります。