#!/bin/sh

# 元の画像のファイル名
input="favicon-original.png"

# 画像の高さを取得
height=$(identify -format "%h" $input)

# 画像を拡張
convert $input -gravity center -background white -extent ${height}x${height} favicon-square.png
