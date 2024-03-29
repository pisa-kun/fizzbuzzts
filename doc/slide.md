---
marp: true
theme: uncover
header: "**CodeStyle** __Marp Slide__"
footer: "by **hoge**"
---

<!--
color:black
_footer: 'Photo by https://www.skycrew-t.com/www/uyuni/'
-->
![bg brightness:0.9](uy2.jpg)

# コーディング規約勉強会(仮)
第一回 : なぜ規約は必要なのか？

---

![bg left:40%](images.jpg)

### コーディング規約とは

「コーディング規約」は多数のプログラマが参加するプロジェクトにおいて、プログラム品質を均等にするために定める文書。
変数などの命名規則、禁止事項、コメントの付け方など。

---
### コーディング規約の内容

プロジェクトの規模や特性、参加メンバーのスキル、使用言語などにより変更すべきだが、たいてい以下が書かれている。

- 目的
- プロジェクトの構成
- 命名規則
- コーディングスタイル
- 禁止事項
- 制限事項
- 推奨事項

---

### 規約がないとどうなるか？

---

### FizzBuzz問題を解いてみよう
**0**から100までの数字を画面に表示する。
ただし、3の倍数のときは**Fizz**と表示し、5の倍数のときは**Buzz**と表示し、15の倍数のときは**FizzBuzz**と表示する。

- プログラミング言語はお任せします
- 制限時間は10分
- 書いたファイルを**a**においてください

---

### 簡単な解説

```typescript
func fizzbuzz(x :number){
    if(x === 0) console.log("0")
    if(x % 15 == 0){
        console.log("FizzBuzz")
    }else if(x % 3 == 0){
        console.log("Fizz")
    }else if(x%5==0)
    {
        console.log("Buzz");
    }else{console.log(x)}
}

```

---

### 個人的にやっておいてほしいこと

ファイルの配置、関数を別ファイルに分離する。
```typescript
src
  - index.ts // エントリポイント
  - fizzbuzz 
    - fizzbuzz.ts // 関数ロジックをまとめたファイル
    - fizzbuzz.test.ts // テストファイル(※)
```

---

### FizzBuzz問題を解いてわかること

- 個人毎にコードの書き方が違う
- コードは書く時間よりも圧倒的に**読む時間**のほうが長い
  - 同じプロジェクトでコードが統一されていないと、レビュワーへの負担が大きい

---
### 次回以降
既存のコーディング規約を全員で読みましょう。余裕があれば、他社や有名なルールも読みましょう。
そのあと、改善したほうがいい点や追加したほうがいいものを追加して規約を修正しましょう。
