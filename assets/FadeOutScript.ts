import { _decorator, Component, Node, UIOpacity } from "cc";
const { ccclass, property } = _decorator;

@ccclass("FadeOutScript")
export class FadeOutScript extends Component {
    @property(Node)
    Image:Node;

    flag :number = 0;
    opacityOfImage :number = null;
  start() {}

  btnCallback(){
    this.flag = 1;
  }
  update(deltaTime: number) {
    if(this.flag == 1)
    {
        this.opacityOfImage = this.Image.getComponent(UIOpacity).opacity;
        this.opacityOfImage -=2;
        this.Image.getComponent(UIOpacity).opacity = this.opacityOfImage;
        if(this.opacityOfImage<=0)
        {
            this.flag =0;
        }
    }
  }
}
