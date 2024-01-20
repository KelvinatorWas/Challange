import * as PIXI from 'pixi.js';
import './style.css';
import gameLoop from './main/gameLoop';
import { initPlayer, loadAttack } from './scripts/player';
import { initHitArea } from './scripts/hitMarker';
import AudioManager from './main/audioManager';
import { Background } from './scripts/background';
// ,
const songs = ['ttls', 'hbd', 'ibs'];

const DEFAULT_GAME_DATA = {
  score: 0,
  hitType: '',
  playing: false,
  allCurrentNotes: 0,
  songs: [...songs],
  highscore: 0,
};

export const GAME_DATA = { ...DEFAULT_GAME_DATA };

export const restartGameData = () => {
  const {
    allCurrentNotes,
    hitType,
    score,
    playing,
  } = { ...DEFAULT_GAME_DATA };
  GAME_DATA.allCurrentNotes = allCurrentNotes;
  GAME_DATA.hitType = hitType;
  GAME_DATA.songs = [...songs];
  GAME_DATA.score = score;
  GAME_DATA.playing = playing;
};

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

  const hscore = localStorage.getItem('hscore');
  if (!hscore) {
    localStorage.setItem('hscore', JSON.stringify(0));
  } else {
    GAME_DATA.highscore = +hscore;
  }

  return { app, container };
};

export const audioManager = new AudioManager();
const { app, container } = initGame();
export const background = new Background([1280, 720]);
container.addChild(background.backgroundContainer);

export const { dir: platform, particleSys: hitareaParticles } = initHitArea(container, [111, 9]);
export const player = initPlayer(platform);

export const PlayButton = document.getElementById('play-btn');
if (PlayButton) {
  PlayButton.addEventListener('click', (e) => {
    e.preventDefault();
    GAME_DATA.hitType = 'TBD';
    if (!GAME_DATA.playing) {
      GAME_DATA.playing = true;
      PlayButton.classList.add('hide');
      loadAttack(platform, player.hitmarkers);
    }
  });
}

gameLoop(app, container);
