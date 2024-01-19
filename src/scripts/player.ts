/* eslint-disable no-unused-vars */
import { Container } from "pixi.js";
import initHitMarker, { HitMarker } from "./hitMarker";
import { KeyboardEvents } from "../main/input";
import { initMarker } from "./marker";
import { Vec2 } from "../utils/extraMath";
import { Star } from "../utils/attacks";

type HitMarkerKeys = 'up' | 'down' | 'left' | 'right';

// const HitKeys:HitMarkerKeys[] = ['up', 'down', 'left', 'right'];

type PlayerHitMarkers = {
  up: HitMarker,
  down: HitMarker,
  left: HitMarker,
  right: HitMarker,
}

type Player = {
  hitmarkers: PlayerHitMarkers,
  update: (dt:number) => void,
  sounds:Set<string>;
  instrument: string;
  active:boolean;
}

const loadAttack = (container:Container, hitmarkers:PlayerHitMarkers) => {
  const { distance, notes } = Star;
  let y = 32;
  for (const noteList of notes) {
    for (const note of noteList) {
      const { pos, rot, color } = hitmarkers[note.hitmarker];
      const markerPos:Vec2 = [pos[0], pos[1] + y];
      hitmarkers[note.hitmarker].markers.push(initMarker(
        container,
        markerPos,
        rot,
        note.note,
        color,
      ));

      y += note.lenght;
    }

    y += distance;
  }
};

export const initPlayer = (container: Container, instrument = 'piano'): Player => {
  const left = initHitMarker(container, [15, 15], 270, "left", "BLUE");
  const down = initHitMarker(container, [33, 15], 180, "down", "RED");
  const up = initHitMarker(container, [50, 15], 0, "up", "GREEN");
  const right = initHitMarker(container, [68, 15], 90, "right", "YELLLOW");
  return {
    hitmarkers: {
      up,
      right,
      left,
      down,
    },
    instrument,
    active: true,
    sounds: new Set(),
    update(dt:number) {
      if (!this.active) return;

      const updateHitMarker = (key: HitMarkerKeys) => {
        if (KeyboardEvents[key].active) this.hitmarkers[key].pressed = true;
        else this.hitmarkers[key].pressed = false;

        this.hitmarkers[key].active();
        this.hitmarkers[key].update(dt);
      };

      updateHitMarker("up");
      updateHitMarker("left");
      updateHitMarker("right");
      updateHitMarker("down");

      if (KeyboardEvents.space.action === "press") {
        loadAttack(container, this.hitmarkers);
      }
    },
  };
};
