export const degToRad = (deg:number) => (deg * Math.PI) / 180;
export const radToDeg = (rad:number) => (rad * 180) / Math.PI;
export type Vec2 = [x:number, y:number];
export const randomInt = (min: number, max: number): number => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  return Math.round(randomNum);
};

export const direct = (angle:number, speed:number):Vec2 => {
  let pos:Vec2 = [0, 0];
  const rad = degToRad(angle - 90);
  pos = [radToDeg(Math.cos(rad) * speed), radToDeg(Math.sin(rad) * speed)];
  return pos;
};
