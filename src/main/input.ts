export const KeyboardEvents = {
  up: { key: "KeyW", active: false, action: 'none' },
  down: { key: "KeyS", active: false, action: 'none' },
  left: { key: "KeyA", active: false, action: 'none' },
  right: { key: "KeyD", active: false, action: 'none' },
  space: { key: "Space", active: false, action: 'none' },
};

const onKeyDown = (event: KeyboardEvent) => {
  for (const key in KeyboardEvents) {
    if (Object.prototype.hasOwnProperty.call(KeyboardEvents, key)) {
      if (event.code === KeyboardEvents[key as keyof typeof KeyboardEvents].key) {
        KeyboardEvents[key as keyof typeof KeyboardEvents].active = true;
        KeyboardEvents[key as keyof typeof KeyboardEvents].action = 'hold';
      }
    }
  }
};

const onKeyUp = (event: KeyboardEvent) => {
  for (const key in KeyboardEvents) {
    if (Object.prototype.hasOwnProperty.call(KeyboardEvents, key)) {
      if (event.code === KeyboardEvents[key as keyof typeof KeyboardEvents].key) {
        KeyboardEvents[key as keyof typeof KeyboardEvents].active = false;
        KeyboardEvents[key as keyof typeof KeyboardEvents].action = 'press';
      }
    }
  }
};

export const restartAllKeys = () => {
  for (const key in KeyboardEvents) {
    if (Object.prototype.hasOwnProperty.call(KeyboardEvents, key)) {
      if (KeyboardEvents[key as keyof typeof KeyboardEvents].action !== "hold") {
        KeyboardEvents[key as keyof typeof KeyboardEvents].active = false;
        KeyboardEvents[key as keyof typeof KeyboardEvents].action = 'none';
      }
    }
  }
};

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
