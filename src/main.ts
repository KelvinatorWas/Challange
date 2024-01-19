import * as PIXI from 'pixi.js';
import './style.css';
import gameLoop from './main/gameLoop';
import { initPlayer } from './scripts/player';
import { initHitArea } from './scripts/hitMarker';
import AudioManager from './main/audioManager';

const initGame = () => {
  const app = new PIXI.Application({
    width: 1280,
    height: 720,
    backgroundColor: new PIXI.Color("#100e26"),
    antialias: false,
    view: document.getElementById('game-canvas') as HTMLCanvasElement,
  });

  app.ticker.maxFPS = 60;
  const container = new PIXI.Container();
  container.sortChildren();
  app.stage.addChild(container);
  PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.NEAREST;

  return { app, container };
};

export const audioManager = new AudioManager();
const { app, container } = initGame();

export const { dir: platform, particleSys: hitareaParticles } = initHitArea(container, [111, 16]);
export const player = initPlayer(platform);

gameLoop(app, container);
