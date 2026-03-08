### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# enブロックを並べ変えよう

## ステップ 1 
英語 ``||agent:inspectNumericBlock||`` を使って数値ブロック調べて、エージェント順番に並べさせよう

<video width="640" height="360" controls>
  <source src="./images/バブルソート.mp4" type="video/mp4">
  お使いのブラウザは動画タグに対応していません。
</video>

```template
{}
```

#### ~ tutorialhint 
```template
player.onChat("numeric", function () {
    player.say(agent.inspectNumericBlock(FORWARD))
})
```

