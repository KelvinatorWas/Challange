import * as PIXI from 'pixi.js';
import update from './update';

const gameLoop = (game:PIXI.Application, container:PIXI.Container) => {
  game.ticker.add((dt) => {
    update(dt);
    game.renderer.render(game.stage);
    container.sortChildren();
  });
};

export default gameLoop;
