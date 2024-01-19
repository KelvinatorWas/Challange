/* eslint-disable no-unused-vars */
import { Container, Sprite } from "pixi.js";
import { scalePos } from "../utils/scalePos";
import { Marker } from "./marker";
import { audioManager, hitareaParticles } from "../main";
import { COLORS, scale } from "../consts/consts";
import { ParticleSystem } from "./particles";

type HitMarkerKeys = 'up' | 'down' | 'left' | 'right';

type HitColors = (keyof typeof COLORS);

export type HitMarker = {
  hitmarker: Sprite;
  pos: [x: number, y: number];
  scale: number;
  rot: number;
  pressed: boolean;
  markers:Marker[];
  key: HitMarkerKeys;
  color: HitColors;
  active: () => void;
  update: (dt:number) => void;
};

export const initHitArea = (container: Container, pos: [x: number, y: number]) => {
  const dir = Sprite.from('./src/assets/hitarea.png');
  const sPos = scalePos(pos[0], pos[1]);
  dir.position.set(sPos[0], sPos[1]);

  dir.scale.x = scale;
  dir.scale.y = scale;

  container.addChild(dir);
  // eslint-disable-next-line no-param-reassign
  container.sortableChildren = true;

  const particleSys = new ParticleSystem();
  dir.addChild(particleSys.particleContainer);

  return { dir, particleSys };
};

const initHitMarker = (container: Container, pos: [x: number, y: number], rot = 0, key:HitMarkerKeys = 'down', color:HitColors = 'GREEN'): HitMarker => {
  const dir = Sprite.from('./src/assets/dir.png');
  const sPos = scalePos(pos[0], pos[1], 1);
  dir.tint = COLORS[color];
  dir.position.set(sPos[0], sPos[1]);
  dir.zIndex = 2;

  dir.anchor.x = 0.5;
  dir.anchor.y = 0.5;
  dir.angle = rot;
  dir.scale.x = 1;
  dir.scale.y = 1;

  container.addChild(dir);

  return {
    hitmarker: dir,
    pos: sPos,
    rot,
    scale: 1,
    pressed: false,
    markers: [],
    key,
    color,
    active() {
      if (this.pressed) {
        this.scale = 0.8;
      } else {
        this.scale = 1;
      }
    },
    update(dt:number) {
      this.hitmarker.scale.x = this.scale;
      this.hitmarker.scale.y = this.scale;

      this.markers.forEach(
        (marker, index) => {
          marker.update(dt);
          const dist = Math.floor(marker.pos[1]) - Math.floor(this.pos[1]);
          // console.log(dist);
          if ((dist < 10 && dist >= -10) && this.pressed) {
            if (dist < 3 && dist > -3) console.log("perfect");
            audioManager.playSound("piano", marker.sound);
            delete this.markers[index];
            marker.marker.removeFromParent();
            audioManager.stopSound("piano", marker.sound);
            hitareaParticles.createParticleSpark(sPos, 30, 0.5, 180, 50, COLORS[color], 0.05);

            this.pressed = false;
          }

          if (marker.dead) {
            delete this.markers[index];
          }
        },
      );
    },
  };
};

export default initHitMarker;
