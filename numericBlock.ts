namespace agent {
    //% group="Actions" weight=210 blockGap=30
    //% blockId=minecraftinspectNumericBlockt 
    //% block="agent numeric inspect %direction"
    //% direction.shadow=minecraftAgentSixDirection
    //% blockGap=8
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
                return null;
        }

    };
}
