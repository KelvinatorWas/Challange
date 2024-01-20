import {
  GAME_DATA,
  background,
  hitareaParticles,
  platform,
  player,
} from "../main";
import { restartAllKeys } from "./input";

const score = document.getElementById("score");
const hitType = document.getElementById("hit-type");

const update = (dt:number) => {
  platform.sortChildren();
  player.update(dt);
  hitareaParticles.update(dt);
  background.update(dt);
  restartAllKeys();

  if (score !== null && hitType !== null) {
    if (+score.innerText.slice(7) !== GAME_DATA.score) score.innerText = `Score: ${GAME_DATA.score}`;
    if (hitType.innerText !== GAME_DATA.hitType && GAME_DATA.hitType !== '') hitType.innerText = `${GAME_DATA.hitType}`;
  }
};

export default update;
