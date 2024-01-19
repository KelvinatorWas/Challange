/* eslint-disable no-unused-vars */
import { Container, Sprite } from "pixi.js";
import { COLORS, scale } from "../consts/consts";

export type Marker = {
  marker: Sprite;
  pos: [x: number, y: number];
  scale: number;
  rot: number;
  dead: boolean,
  sound: string,
  update: (dt:number) => void;
};

export const initMarker = (container: Container, pos: [x: number, y: number], rot = 0, sound = 'C4', color:(keyof typeof COLORS) = 'GREEN'):Marker => {
  const dir = Sprite.from('./src/assets/dir.png');
  dir.position.set(pos[0], pos[1] * scale);
  dir.tint = COLORS[color];
  dir.zIndex = 0;
  dir.anchor.x = 0.5;
  dir.anchor.y = 0.5;
  dir.angle = rot;
  dir.scale.x = 1;
  dir.scale.y = 1;

  container.addChild(dir);

  return {
    marker: dir,
    pos,
    scale: 1,
    rot,
    dead: false,
    sound,
    update(dt:number) {
      this.marker.position.y -= 0.9 * dt;
      this.pos[1] = this.marker.position.y;

      if (this.pos[1] < -100) {
        this.dead = true;
        dir.removeFromParent();
      }
    },
  };
};
