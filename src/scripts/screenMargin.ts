import { Container, Graphics } from "pixi.js";
import { COLORS, scale } from "../consts/consts";

export const topMargin = new Graphics();
export const bottomMargin = new Graphics();

const initScreenMargin = (container:Container) => {
  topMargin.beginFill(COLORS.GRAY);
  topMargin.drawRect(0, 0, 320 * scale, 16 * scale);
  topMargin.endFill();

  bottomMargin.beginFill(COLORS.GRAY);
  bottomMargin.drawRect(0, 164 * scale, 320 * scale, 16 * scale);
  bottomMargin.endFill();

  container.addChild(topMargin, bottomMargin);
};

export default initScreenMargin;
