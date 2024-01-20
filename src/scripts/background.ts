/* eslint-disable no-param-reassign */
import { Container, Graphics } from "pixi.js";
import { Vec2, direct, randomInt } from "../utils/extraMath";
import { COLORS } from "../consts/consts";
import { ParticleSystem } from "./particles";
import { GAME_DATA } from "../main";

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
  particleSystem = new ParticleSystem();

  constructor(WindowSize:Vec2) {
    this.createBackgroundParticles(WindowSize, 100, 2, 360, 0.1);
    this.backgroundContainer.addChild(this.particleSystem.particleContainer);
  }

  createParticle(
    pos: Vec2,
    scale: number,
    angle: number,
    speed: number,
  ) {
    const particle = new Graphics();
    [particle.x, particle.y] = pos;
    particle.beginFill(COLORS.LIGHT_PURPLE, 0.1);
    particle.drawRect(pos[0], pos[1], 16 * scale, 16 * scale);
    particle.endFill();
    particle.scale.x = scale;
    particle.scale.y = scale;

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
      const newSpeed = randomInt(1, speed) / 10;
      const newPos:Vec2 = [randomInt(0, pos[0]), randomInt(0, pos[1])];
      this.createParticle(newPos, scale, newAngle, newSpeed);
    }
  }

  update(dt: number) {
    //  i
    const posx = randomInt(0, 1280);
    const posy = randomInt(0, 720);

    let color = COLORS.BLACK;

    if (GAME_DATA.hitType === 'YOU WON!!') {
      const keys = Object.keys(COLORS);
      const key = randomInt(0, keys.length - 1);
      color = COLORS[keys[key] as keyof typeof COLORS];
    }

    this.particleSystem.createParticleSpark([posx, 0], 1, 2, [-180, 180], 100, color, 0.01);
    this.particleSystem.createParticleSpark([posx, 720], 1, 2, [-90, 90], 100, color, 0.01);
    this.particleSystem.createParticleSpark([0, posy], 1, 2, [0, 180], 100, color, 0.01);
    this.particleSystem.createParticleSpark([1280, posy], 1, 2, [-180, 0], 100, color, 0.01);

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
      block.angle += 0.1 * dt;
      sprite.angle += 1 * dt;
      sprite.updateTransform();

      if (sprite.x < 0) { sprite.x = 1400; block.angle = randomInt(-360, 360); }
      if (sprite.x > 1400) sprite.x = 0;
      if (sprite.y < 0) { sprite.y = 900; block.angle = randomInt(-360, 360); }
      if (sprite.y > 900) sprite.y = 0;
    });

    this.particleSystem.update(dt);
  }
}
