import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BulletControl')
export class BulletControl extends Component {
    isDead: boolean = false
    start() {

    }

    update(deltaTime: number) {
        if (this.isDead) return
        const { x, y } = this.node.getPosition();
        const moveY = y + 500 * deltaTime;
        this.node.setPosition(x, moveY);
        // 判断超出屏幕销毁子弹
        if (moveY > 800) {
            this.node.destroy();
        }
    }

    die() {
        if (this.isDead) return
        this.isDead = true
        setTimeout(() => {
            this.node?.destroy?.()
        }, 10);
    }
}

