/* eslint-disable no-param-reassign */
import { Color, ParticleContainer, Sprite } from "pixi.js";
import { Vec2, direct, randomInt } from "../utils/extraMath";
import { COLORS } from "../consts/consts";

type Particle = {
  sprite: Sprite,
  scale: number,
  angle: number,
  decay: number;
  speed: number;
}

export class ParticleSystem {
  particles: Particle[] = [];
  // eslint-disable-next-line max-len
  particleContainer: ParticleContainer = new ParticleContainer(1000, { scale: true, position: true });
  gravity = 2;

  createParticle(
    pos: Vec2,
    scale: number,
    angle: number,
    decay: number,
    color: Color,
    speed: number,
  ) {
    const particle = Sprite.from('./src/assets/spark.png');
    [particle.x, particle.y] = pos;
    particle.scale.x = scale;
    particle.scale.y = scale;
    particle.tint = color;
    [particle.anchor.x, particle.anchor.y] = [0.5, 0.5];
    particle.angle = angle;
    this.particleContainer.addChild(particle);
    this.particles.push({
      sprite: particle,
      scale,
      angle,
      decay,
      speed,
    });
  }

  // eslint-disable-next-line max-len
  createParticleSpark(pos: Vec2, amount: number, scale = 1, angle:Vec2 = [-60, 60], decay = 100, color = COLORS.WHITE, speed = 0.1) {
    for (let i = 0; i < amount; i++) {
      const newAngle = randomInt(angle[0], angle[1]);
      const newDecay = randomInt(1, decay) / 100;
      this.createParticle(pos, scale, newAngle, newDecay, color, speed);
    }
  }

  update(dt: number) {
    //  i
    this.particles.forEach((spark, index) => {
      const {
        sprite,
        angle,
        decay,
        speed,
      } = spark;

      const dir = direct(angle, speed);
      sprite.x += dir[0] * dt;
      sprite.y += dir[1] * dt;
      sprite.transform.scale.x = spark.scale;
      sprite.transform.scale.y = spark.scale;
      sprite.updateTransform();

      if (spark.scale >= 0) {
        spark.scale -= decay * dt;
      } else {
        spark.sprite.removeFromParent();
        delete this.particles[index];
      }
    });
  }
}
