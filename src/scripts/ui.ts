// eslint-disable-next-line max-classes-per-file
import {
  Color, Container, Graphics, Text,
} from "pixi.js";
import { Vec2 } from "../utils/extraMath";
import { scalePos } from "../utils/scalePos";

// type Monster = {
//   attacks: string[]
// };

// const Piano: Monster = {
//   attacks: ['Falling Star', '2 Attck', '3 Attck', '4 Attck'],
// };

class Button {
  btn: Graphics;
  pos: Vec2;
  text: Text;
  clicked = false;
  constructor(container: Graphics, pos:Vec2, text = 'Button') {
    this.btn = new Graphics();

    this.text = new Text(text, {
      fontFamily: 'Pixelify Sans',
      fontSize: 18,
      fill: 0xFFFFFF,
    });
    this.pos = pos;
    this.init(container);
  }

  init(container: Graphics) {
    const sPos = scalePos(112 + this.pos[0], 128 + this.pos[1]);
    this.pos = sPos;
    const sSize = scalePos(31, 15);
    this.btn.beginFill(new Color('#323154'));
    this.btn.drawRect(sPos[0], sPos[1], sSize[0], sSize[1]);
    this.btn.endFill();

    this.btn.interactive = true;

    // Button
    this.text.anchor.set(0.5);
    this.text.position.set(sPos[0] + sSize[0] / 2, sPos[1] + sSize[1] / 2);

    this.btn.addChild(this.text);
    this.onClick();

    container.addChild(this.btn);
  }

  onClick() {
    this.btn.addEventListener('click', () => { this.clicked = true; });
  }
}

class AttackUI {
  size:Vec2 = [96, 52];
  monster = 'piano';
  show: number;
  index = 0;
  rect:Graphics;
  state: 'goBack' | 'block' | 'menu' = 'menu';
  buttons:{[key:string]:Button} = {};

  constructor(container:Container) {
    this.show = 0;
    this.rect = new Graphics();
    this.init(container);
    this.buttons.attack1 = new Button(this.rect, [7, 7], "Attack 1");
    this.buttons.attack2 = new Button(this.rect, [31 + 18 + 7, 7], "Attack 2");
    this.buttons.attack3 = new Button(this.rect, [31 + 18 + 7, 7 + 7 + 15], "Attack 3");
    this.buttons.goBack = new Button(this.rect, [7, 7 + 7 + 15], "Go Back");

    this.rect.visible = true;
  }

  init(container:Container) {
    const sPos = scalePos(112, 128);
    const sSize = scalePos(this.size[0], this.size[1]);
    this.rect.beginFill(new Color('#445b94'));
    this.rect.drawRect(sPos[0], sPos[1], sSize[0], sSize[1]);
    this.rect.endFill();
    container.addChild(this.rect);
  }

  clickGoBack() {
    if (this.buttons.goBack.clicked) {
      this.state = 'goBack';
      this.buttons.goBack.clicked = false;
      console.log("goBack was clicked");
    }
  }

  update() {
    if (this.state === 'menu') {
      this.clickGoBack();
    }
    this.rect.updateTransform();
  }
}

export class UI {
  size:Vec2 = [96, 52];
  monster = 'piano';
  show: number;
  index = 0;
  rect:Graphics;
  state: 'attack' | 'block' | 'menu' = 'menu';
  buttons:{[key:string]:Button} = {};
  stateMenus:{[key:string]:AttackUI} = {};
  constructor(container:Container) {
    this.stateMenus.attack = new AttackUI(container);
    this.show = 0;
    this.rect = new Graphics();
    this.init(container);
    this.buttons.attack = new Button(this.rect, [7, 7], "Attack");
    this.buttons.block = new Button(this.rect, [31 + 18 + 7, 7], "Block");
    this.buttons.block.onClick();
  }

  hide() {
    if (this.state !== "menu") this.rect.visible = false;
  }

  init(container:Container) {
    const sPos = scalePos(112, 128);
    const sSize = scalePos(this.size[0], this.size[1]);
    this.rect.beginFill(new Color('#445b94'));
    this.rect.drawRect(sPos[0], sPos[1], sSize[0], sSize[1]);
    this.rect.endFill();
    container.addChild(this.rect);
  }

  clickAttack() {
    if (this.buttons.attack.clicked) {
      this.state = 'attack';
      this.buttons.attack.clicked = false;
      console.log("attack was clicked");
      this.rect.position.set(0, -2000);
      this.stateMenus.attack.rect.position.set(0, 0);
    }
  }

  clickBlock() {
    if (this.buttons.block.clicked) {
      this.state = 'block';
      this.buttons.block.clicked = false;
      console.log("block was clicked");
    }
  }

  update() {
    if (this.state === 'menu') {
      this.clickAttack();
      this.clickBlock();
    }
    if (this.state === 'attack') {
      if (this.stateMenus.attack.state === "goBack") {
        this.state = 'menu';
        this.stateMenus.attack.show = 0;
        this.stateMenus.attack.rect.position.set(0, -2000);
        this.rect.position.set(0, 0);
        this.stateMenus.attack.state = 'menu';
      }
      this.stateMenus.attack.update();
    }
    // console.log(this.show);
    this.rect.updateTransform();
  }
}
