#/bin/sh

# 画像の拡張子
# ext=".webp"
ext=".png"

# 入力画像
original="favicon-square.png"


## andriod
# 配列を定義
android_icons=("16" "32" "96" "192")

# html
android_html_path="./android-icons/andriod_icons.html"
echo "<!-- android-icon -->" > ${android_html_path}
echo "<link rel="icon" type="image/png" href="%PUBLIC_URL%/icons/${original}">" >> ${android_html_path}
# マニフェスト
android_manifest_path="./android-icons/manifest.json"
echo "{\"icons\":[" > ${android_manifest_path}

# 配列の要素を順に取り出す
for size in "${android_icons[@]}"; do
    # 画像のリサイズと保存
    convert ${original} -resize x$size -gravity center -crop ${size}x${size}+0+0 android-icons/${size}x${size}${ext}

    # html
    echo "<link rel="icon" type="image/png" sizes="${size}x${size}" href="%PUBLIC_URL%/icons/android-icons/${size}x${size}${ext}">" >> ${android_html_path}
    # マニフェスト
    echo "{\"src\": \"icons/android-icons/${size}x${size}.png\",\"type\": \"image/png\",\"sizes\": \"${size}x${size}\"}, " >> ${android_manifest_path}
done
# マニフェスト
echo "]}" >> ${android_manifest_path}




## ios
# 配列を定義
apple_icons=("57" "60" "72" "76" "114" "120" "144" "152" "180")

# html
apple_html_path="./apple-icons/apple_icons.html"
echo "<!-- apple-touch-icon -->" > ${apple_html_path}
echo "<link rel="apple-touch-icon" href="%PUBLIC_URL%/icons/${original}">" >> ${apple_html_path}
# マニフェスト
apple_manifest_path="./apple-icons/manifest.json"
echo "{\"icons\":[" > ${apple_manifest_path}

# 配列の要素を順に取り出す
for size in "${apple_icons[@]}"; do
    # 画像のリサイズと保存
    convert ${original} -resize x$size -gravity center -crop ${size}x${size}+0+0 apple-icons/${size}x${size}${ext}
    
    # html
    echo "<link rel="apple-touch-icon" sizes="${size}x${size}" href="%PUBLIC_URL%/icons/apple-icons/${size}x${size}${ext}">" >> ${apple_html_path}
    # マニフェスト
    echo "{\"src\": \"icons/apple-icons/${size}x${size}.png\",\"type\": \"image/png\",\"sizes\": \"${size}x${size}\"}, " >> ${apple_manifest_path}
done
# マニフェスト
echo "]}" >> ${apple_manifest_path}


## windows
# html
windows_html_path="./windows-icons/windows_icons.html"
size="144"

# 画像のリサイズと保存
convert ${original} -resize x$size -gravity center -crop ${size}x${size}+0+0 windows-icons/${size}x${size}${ext}
# html
echo "<!-- MicrosoftのWindows OSでサイトをライブタイル -->" > ${windows_html_path}
echo "<meta name=\"msapplication-TileImage\" content=\"%PUBLIC_URL%/icons/windows-icons/${size}x${size}${ext}\">" >> ${windows_html_path}