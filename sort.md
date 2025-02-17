### @explicitHints true
### @hideIteration true 
### @flyoutOnly 0

# sort
## Sorting of numbers
Return to the Minecraft screen and the numerical block will change at random.<br>
Let's use the ``||agent:numeric inspect||`` to check the numerical value of the numerical block and arrange the blocks in numerical order.<br>



```template
player.onChat("sort", function () {
    agent.teleport(world(1, 0, 2), WEST)
    player.say(agent.inspectNumericBlock(FORWARD))
})
```

```ghost
let 数値 = 0
let 前数値 = 0
let 変更 = 0
player.onChat("sort", function () {
    while (true) {
        while (agent.detect(AgentDetection.Block, FORWARD)) {
            数値 = agent.inspectNumericBlock(FORWARD)
            if (前数値 > 数値) {
                agent.destroy(FORWARD)
                agent.collectAll()
                agent.move(LEFT, 1)
                agent.destroy(FORWARD)
                agent.collectAll()
                agent.place(FORWARD)
                agent.transfer(1, 2, 1)
                agent.move(RIGHT, 1)
                agent.place(FORWARD)
                変更 = 1
            } else {
                agent.move(RIGHT, 1)
            }
            前数値 = 数値
        }
        agent.move(LEFT, 5)
        if (変更 == 0) {
            break;
        }
        前数値 = 0
        変更 = 0
    }
    player.say("END")
})

```