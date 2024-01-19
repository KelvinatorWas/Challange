import { hitareaParticles, platform, player } from "../main";
import { restartAllKeys } from "./input";

const update = (dt:number) => {
  platform.sortChildren();
  player.update(dt);
  hitareaParticles.update(dt);
  restartAllKeys();
};

export default update;
