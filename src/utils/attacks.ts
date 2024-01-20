const len = (n: number) => n * 4;

type HitMarkerKeys = 'up' | 'down' | 'left' | 'right';

type Note = {
  note: string;
  lenght: number;
  hitmarker: HitMarkerKeys;
};

type Attack = {
  distance: number;
  notes: Note[][];
}

const Star: Attack = {
  distance: len(1),
  notes: [
    [
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'G4', lenght: len(1), hitmarker: 'right' },
      { note: 'G4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'A4', lenght: len(1), hitmarker: 'down' },
      { note: 'A4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'G4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'E4', lenght: len(1.5), hitmarker: 'left' },
      { note: 'E4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'G4', lenght: len(1.5), hitmarker: 'up' },
      { note: 'G4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'F4', lenght: len(1.5), hitmarker: 'down' },
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'left' },
      { note: 'E4', lenght: len(1.5), hitmarker: 'left' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'G4', lenght: len(1), hitmarker: 'up' },
      { note: 'G4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'left' },
      { note: 'E4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'G4', lenght: len(1), hitmarker: 'right' },
      { note: 'G4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'A4', lenght: len(1), hitmarker: 'down' },
      { note: 'A4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'G4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'left' },
      { note: 'E4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
  ],
};

const HappyBDay: Attack = {
  distance: len(1),
  notes: [
    [
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'G4', lenght: len(1.5), hitmarker: 'left' },
      { note: 'F4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'right' },
      { note: 'C4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'C5', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'A4', lenght: len(1.5), hitmarker: 'up' },
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'E4', lenght: len(1.5), hitmarker: 'down' },
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'BB4', lenght: len(1), hitmarker: 'left' },
      { note: 'BB4', lenght: len(1.5), hitmarker: 'left' },
    ],
    [
      { note: 'A4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'F4', lenght: len(1.5), hitmarker: 'down' },
      { note: 'G4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'G4', lenght: len(1.5), hitmarker: 'left' },
      { note: 'F4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'right' },
      { note: 'C4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'C5', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'A4', lenght: len(1.5), hitmarker: 'up' },
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'E4', lenght: len(1.5), hitmarker: 'down' },
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'BB4', lenght: len(1), hitmarker: 'left' },
      { note: 'BB4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'A4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'F4', lenght: len(1.5), hitmarker: 'down' },
      { note: 'G4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
    ],
  ],
};
const IBS: Attack = {
  distance: len(1),
  notes: [
    [
      { note: 'G3', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'right' },
      { note: 'C4', lenght: len(1.5), hitmarker: 'right' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'down' },
      { note: 'D4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'up' },
      { note: 'E4', lenght: len(1.5), hitmarker: 'up' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'D4', lenght: len(1.5), hitmarker: 'left' },
      { note: 'E4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'F4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'G4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'G4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'F4', lenght: len(1.5), hitmarker: 'down' },
    ],
    [
      { note: 'E4', lenght: len(1.5), hitmarker: 'left' },
    ],
    [
      { note: 'F4', lenght: len(1), hitmarker: 'down' },
      { note: 'G4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'up' },

    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'right' },
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'left' },
      { note: 'E4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'G3', lenght: len(1.5), hitmarker: 'down' },
    ],
    [
      { note: 'G3', lenght: len(1), hitmarker: 'down' },
      { note: 'C4', lenght: len(1), hitmarker: 'up' },
      { note: 'C4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'C4', lenght: len(1), hitmarker: 'up' },
      { note: 'D4', lenght: len(1), hitmarker: 'left' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'right' },
      { note: 'E4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'right' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'up' },
      { note: 'C4', lenght: len(1), hitmarker: 'down' },
    ],
    [
      { note: 'D4', lenght: len(1), hitmarker: 'up' },
    ],
    [
      { note: 'E4', lenght: len(1), hitmarker: 'right' },
      { note: 'C4', lenght: len(1), hitmarker: 'left' },
    ],
  ],
};

export const SONGS = {
  ttls: Star,
  hbd: HappyBDay,
  ibs: IBS,
};
