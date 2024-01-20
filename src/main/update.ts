import {
  GAME_DATA,
  PlayButton,
  background,
  hitareaParticles,
  platform,
  player,
  restartGameData,
} from "../main";
import { loadAttack } from "../scripts/player";
import { restartAllKeys } from "./input";

const score = document.getElementById("score");
const hscore = document.getElementById("highscore");
const noteAmount = document.getElementById("current-note-amount");
const hitType = document.getElementById("hit-type");

const update = (dt: number) => {
  platform.sortChildren();
  player.update(dt);
  hitareaParticles.update(dt);
  background.update(dt);
  restartAllKeys();

  if (!GAME_DATA.allCurrentNotes && GAME_DATA.songs.length && GAME_DATA.playing) {
    loadAttack(platform, player.hitmarkers);
  }

  if (GAME_DATA.songs.length === 0 && !GAME_DATA.allCurrentNotes) {
    const highscore = GAME_DATA.highscore < GAME_DATA.score
      ? GAME_DATA.score : GAME_DATA.highscore;

    GAME_DATA.highscore = highscore;

    restartGameData();
    GAME_DATA.hitType = 'YOU WON!!';
    localStorage.setItem('hscore', JSON.stringify(highscore));
    if (PlayButton) PlayButton.classList.remove('hide');
  }

  if (score && hitType && noteAmount && hscore) {
    if (+score.innerText.slice(7) !== GAME_DATA.score) score.innerText = `Score: ${GAME_DATA.score}`;
    if (+hscore.innerText.slice(11) !== GAME_DATA.highscore) hscore.innerText = `Highscore: ${GAME_DATA.highscore}`;
    if (hitType.innerText !== GAME_DATA.hitType && GAME_DATA.hitType !== '') hitType.innerText = `${GAME_DATA.hitType}`;
    if (+noteAmount.innerText.slice(12) !== GAME_DATA.allCurrentNotes) noteAmount.innerText = `Notes Left: ${GAME_DATA.allCurrentNotes}`;
  }
};

export default update;
