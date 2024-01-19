import { scale } from "../consts/consts";

export const scalePos = (x: number, y: number, s = scale):[x:number, y:number] => [x * s, y * s];
