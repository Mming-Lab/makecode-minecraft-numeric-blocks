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
    export function numline(pos: Position, direction: CardinalDirection, length: number) {

        //0:下Down(y-), 1:上Up(y+), 2:北North(z-), 3:南South(z+), 4:西West(x-), 5:東Eastx+)
        const cmdCirection: number =
            direction === CardinalDirection.Down ? 0
                : direction === CardinalDirection.Up ? 1
                    : direction === CardinalDirection.North ? 2
                        : direction === CardinalDirection.South ? 3
                            : direction === CardinalDirection.West ? 4
                                : 5;
                                
        player.execute("scriptevent mming:numline " + pos + " " + cmdCirection + " " + length)
    }
}