namespace agent {
    /**
     * Inspects a numeric's block in the specified direction and returns the Value
     * @param direction the direction in which to inspect
     */
    //% group="Numeric Block"
    //% blockId=minecraftinspectNumericBlockt 
    //% block="agent numeric inspect %direction"
    //% direction.shadow=minecraftAgentSixDirection
    //% weight=9999
    export function inspectNumericBlock(direction: number): number {

        const blockId: number = agent.inspect(AgentInspection.Block, direction);
        switch (blockId) {
            case BLACK_WOOL:
                return 0;
            case BROWN_WOOL:
                return 1;
            case RED_WOOL:
                return 2;
            case ORANGE_WOOL:
                return 3;
            case YELLOW_WOOL:
                return 4;
            case GREEN_WOOL:
                return 5;
            case BLUE_WOOL:
                return 6;
            case PURPLE_WOOL:
                return 7;
            case GRAY_WOOL:
                return 8;
            case WOOL:
                return 9;
            default:
                player.warningMessage("Not Numeric Block. Value is null.");
                return null;
        }

    };
}
namespace blocks {
    /**
    * Arrange numeric blocks
    * @param Start
    * @param Direction
    * @param Length
    */
    //% group="Numeric Block"
    //% blockId=minecraftnumline
    //% block="Arrange numeric blocks| Start:%pos=minecraftCreateWorldPosition| Direction:%direction| Length:%length"
    //% direction.defl=2
    //% length.defl=6
    //% length.min=2 length.max=10
    //% length.defl=6
    //% weight=9999
    export function numline(startPos: Position, direction: CardinalDirection, length: number) {

        //0:下Down(y-), 1:上Up(y+), 2:北North(z-), 3:南South(z+), 4:西West(x-), 5:東Eastx+)
        const 方向ベクトル: Position =
            direction === CardinalDirection.Down ? world(0, -1, 0)
                : direction === CardinalDirection.Up ? world(0, 1, 0)
                    : direction === CardinalDirection.North ? world(0, 0, -1)
                        : direction === CardinalDirection.South ? world(0, 0, 1)
                            : direction === CardinalDirection.West ? world(-1, 0, 0)
                                : world(1, 0, 0);

        const 数字ブロック配列: Block[] = [
            BLACK_WOOL,     // NO0
            BROWN_WOOL,     // NO1
            RED_WOOL,       // NO2
            ORANGE_WOOL,    // NO3
            YELLOW_WOOL,    // NO4
            GREEN_WOOL,     // NO5
            BLUE_WOOL,      // NO6
            PURPLE_WOOL,    // NO7
            GRAY_WOOL,      // NO8
            WOOL,           // NO9
        ];

        //数字ブロック配列をシャッフルして長さ分取得
        for (let i = 数字ブロック配列.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [数字ブロック配列[i], 数字ブロック配列[j]] = [数字ブロック配列[j], 数字ブロック配列[i]];
        }
        const ランダム数字ブロック配列 = 数字ブロック配列.slice(0, length);

        //ブロック設置ループ
        for (let i = 0; i < ランダム数字ブロック配列.length; i++) {
            const 移動: Position = world(方向ベクトル.getValue(Axis.X) * i, 方向ベクトル.getValue(Axis.Y) * i, 方向ベクトル.getValue(Axis.Z) * i);
            const 配置座標: Position = positions.add(startPos, 移動);
            blocks.place(ランダム数字ブロック配列[i], 配置座標)
        }
    }
}