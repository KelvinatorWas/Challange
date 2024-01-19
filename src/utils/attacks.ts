const len = (n:number) => n * 4;

type HitMarkerKeys = 'up' | 'down' | 'left' | 'right';

type Note = {
  note:string;
  lenght: number;
  hitmarker: HitMarkerKeys;
};

type Attack = {
  distance: number;
  notes: Note[][];
}

export const Star: Attack = {
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
