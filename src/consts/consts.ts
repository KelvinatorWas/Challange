import { Color } from 'pixi.js';

export const COLORS = {
  BLACK: new Color("rgb(0, 0, 0)"),
  WHITE: new Color("rgb(255, 255, 255)"),
  RED: new Color("rgb(255, 0, 0)"),
  GREEN: new Color("rgb(0, 255, 0)"),
  BLUE: new Color("rgb(0, 0, 255)"),
  GRAY: new Color("rgb(100, 100, 100)"),
  YELLLOW: new Color("rgb(255, 255, 0)"),
  LIGHT_PURPLE: new Color('#4e4275'),
};

export type HitScoreType = 'perfect' | 'bad' | "good" | "missed" | "early" | "none";

export type HitScores = {
  // eslint-disable-next-line no-unused-vars
  [key in HitScoreType]: number;
};

export const SCORE_VALUES: HitScores = {
  perfect: 50,
  good: 25,
  early: 10,
  bad: 5,
  missed: -50,
  none: 0,
};

export const scale = 4;
