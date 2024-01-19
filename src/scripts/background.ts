/* eslint-disable no-param-reassign */
import { Container, Graphics } from "pixi.js";
import { Vec2, direct, randomInt } from "../utils/extraMath";

type BackgroundParticle = {
  sprite: Graphics,
  scale: number,
  angle: number,
  speed: number;
}

export class Background {
  particles: BackgroundParticle[] = [];
  backgroundContainer: Container = new Container();
  gravity = 2;

  constructor(WindowSize:Vec2) {
    this.createBackgroundParticles(WindowSize, 100, 3, 360, 0.1);
  }

  createParticle(
    pos: Vec2,
    scale: number,
    angle: number,
    speed: number,
  ) {
    const particle = new Graphics();
    [particle.x, particle.y] = pos;
    particle.beginFill();
    particle.drawRect(pos[0], pos[1], 16 * scale, 16 * scale);
    particle.lineStyle({ color: 0x4e4275, width: 2 });
    particle.endFill();
    particle.scale.x = scale;
    particle.scale.y = scale;

    [particle.pivot.x, particle.pivot.y] = [0.5, 0.5];
    particle.angle = angle;

    this.backgroundContainer.addChild(particle);
    this.particles.push({
      sprite: particle,
      scale,
      angle,
      speed,
    });
  }

  // eslint-disable-next-line max-len
  createBackgroundParticles(pos: Vec2, amount: number, scale = 1, angle = 60, speed = 0.1) {
    for (let i = 0; i < amount; i++) {
      const newAngle = randomInt(-angle, angle);
      const newPos:Vec2 = [randomInt(0, pos[0]), randomInt(0, pos[1])];
      this.createParticle(newPos, scale, newAngle, speed);
    }
  }

  update(dt: number) {
    //  i
    this.particles.forEach((block) => {
      const {
        sprite,
        angle,
        speed,
      } = block;

      const dir = direct(angle, speed);
      sprite.x += dir[0] * dt;
      sprite.y += dir[1] * dt;
      sprite.transform.scale.x = block.scale;
      sprite.transform.scale.y = block.scale;
      sprite.updateTransform();

      if (sprite.x < 0) sprite.x = 1280;
      if (sprite.x > 1280) sprite.x = 0;
      if (sprite.y < 0) sprite.y = 720;
      if (sprite.y > 720) sprite.y = 0;
    });
  }
}
