import os
import time

import pandas as pd
import random

# CSVファイルを読み込む
color_df = pd.read_csv('./colors.csv')
parts_df = pd.read_csv('./parts.csv')

# aとbベクトルを取得
vector_hex = color_df['HEX'].astype(str)
vector_parts = parts_df['parts'].astype(str)

# 各要素の外積を計算し、文字列結合を行う
names = [part + hex for part in vector_parts for hex in vector_hex]
paths = [part + '/' + hex for part in vector_parts for hex in vector_hex]


def gen_imports(names, paths) -> str:
    # インポート文を生成
    imports = []
    for name, path in zip(names, paths):
        import_line = f'import {name} from "./layers/{path}.png";'
        imports.append(import_line)

    layers_import_sentence = '\n'.join(imports)

    print(layers_import_sentence)

    return layers_import_sentence

def gen_hexs(vector_hex) -> str:
  hexs = [hex for hex in vector_hex]
  hex_string = ', '.join(f"'{hex}'" for hex in vector_hex)

  hexs_sentence = f"export const hexs = [{hex_string}];"

  print(hexs_sentence)

  return(hexs_sentence)

def gen_hash(names) -> str:
  formatted_names = [f"  {name}: {name}," for name in names]
  layers_hash_sentence = "export const layers = {\n" + '\n'.join(formatted_names) + "\n};"

  print(layers_hash_sentence)

  return(layers_hash_sentence)

def gen_random(vector_parts) -> str:
  random_parts = {part: part + random.choice(vector_hex) for part in vector_parts}

  random_parts_sentences = [f"export const init{part.capitalize()}Layer = {random_parts[part]};" for part in random_parts]

  random_parts_sentence = '\n'.join(random_parts_sentences)

  # 結果を表示
  print(random_parts_sentence)

  return(random_parts_sentence)


def write_to_file(content, filename="output.txt"):
    # ファイルが存在する場合
    if os.path.exists(filename):
        # 現在のUnix時間を取得
        unix_time = int(time.time())

        old_ver = f"{filename.rsplit('.', 1)[0]}.{unix_time}"

        # 既存のファイルをoldディレクトリに移動し、Unix時間を拡張子として追加
        os.rename(filename, old_ver)

    # 新しい内容をテキストファイルに出力
    with open(filename, "w") as file:
        file.write(content)


if __name__ == "__main__":
  imports_str = gen_imports(names, paths)
  hexs_str = gen_hexs(vector_hex)
  hash_str = gen_hash(names)
  random_str = gen_random(vector_parts)

  # すべての文字列を改行2つで連結
  generated_program = f"{imports_str}\n\n{hexs_str}\n\n{hash_str}\n\n{random_str}"

  # 連結された文字列をテキストファイルに出力
  write_to_file(generated_program, '../colorsAndLayers.js')