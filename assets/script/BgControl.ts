import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BgControl')
export class BgControl extends Component {
    start() {

    }

    update(deltaTime: number) {
        for(let item of this.node.children) {
            const { x, y } = item.getPosition()
            const moveY = y - 100 * deltaTime
            item.setPosition(x, moveY)
            if(moveY < -870) {
                item.setPosition(x, moveY + 852 * 2)
            }
        }
    }
}

