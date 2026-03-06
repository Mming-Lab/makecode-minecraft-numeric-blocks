### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1

# sort

## JAエージェントに並び替えをさせよう

```template
player.onChat("sort", function () {
    // ここにソートアルゴリズムをプログラムしよう
    player.say(agent.inspectNumericBlock(FORWARD))
})
```