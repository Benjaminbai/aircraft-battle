import { _decorator, Collider, Collider2D, Component, Contact2DType, Node, PhysicsSystem2D } from 'cc';
import { EnemyControl } from './EnemyControl';
import { BulletControl } from './BulletControl';
const { ccclass, property } = _decorator;

@ccclass('BgControl')
export class BgControl extends Component {
    start() {
        PhysicsSystem2D.instance.on(
            Contact2DType.BEGIN_CONTACT,
            this.onBeginContact,
            this
        )
    }

    update(deltaTime: number) {
        for (let item of this.node.children) {
            const { x, y } = item.getPosition()
            const moveY = y - 100 * deltaTime
            item.setPosition(x, moveY)
            if (moveY < -870) {
                item.setPosition(x, moveY + 852 * 2)
            }
        }
    }

    onBeginContact(self: Collider2D, other: Collider2D) {
        if (other.tag === 1 && self.tag === 0) {
            other.getComponent(EnemyControl).die()
            self.getComponent(BulletControl).die()
        } else if (other.tag === 0 && self.tag === 1) {
            other.getComponent(BulletControl).die()
            self.getComponent(EnemyControl).die()
        }
    }
}

