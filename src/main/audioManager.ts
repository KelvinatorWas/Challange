export default class AudioManager {
  private audioContext:AudioContext | undefined;
  allSounds:{
    [key:string]:{
      [key:string]:{buffer: AudioBuffer, active:boolean};
    }
  } = {};

  constructor() {
    this.init();
  }

  private init() {
    this.audioContext = new window.AudioContext();
    this.initSounds();
  }

  private initSounds() {
    if (!this.audioContext) return;
    // Piano
    this.addInstrumentSound('piano', 'A4', 'A4.mp3');
    this.addInstrumentSound('piano', 'C4', 'C4.mp3');
    this.addInstrumentSound('piano', 'G4', 'G4.mp3');
    this.addInstrumentSound('piano', 'D4', 'D4.mp3');
    this.addInstrumentSound('piano', 'E4', 'E4.mp3');
    this.addInstrumentSound('piano', 'F4', 'F4.mp3');
  }

  private async addInstrumentSound(instrument:string, noteName:string, fileName:string) {
    if (!this.audioContext) return;

    try {
      const response = await fetch(`./src/assets/sounds/${instrument}/${fileName}`);
      const audioData = await response.arrayBuffer();
      const buffer = await this.audioContext.decodeAudioData(audioData);

      if (!this.allSounds[instrument]) {
        this.allSounds[instrument] = {};
      }

      this.allSounds[instrument][noteName] = { buffer, active: false };
    } catch (error) {
      console.error(`Error loading sound: ${error}`);
    }
  }

  playSound(instrument:string, name:string) {
    if (!this.audioContext || name === "none") return;

    if (!this.allSounds[instrument][name].active) {
      const source = this.audioContext.createBufferSource();

      source.buffer = this.allSounds[instrument][name].buffer;
      source.connect(this.audioContext.destination);
      source.start(0);

      this.allSounds[instrument][name].active = true;
    }
  }

  stopSound(instrument:string, name:string) {
    if (name === "none") return;
    if (this.allSounds[instrument] && this.allSounds[instrument][name]) {
      if (this.allSounds[instrument][name].active) this.allSounds[instrument][name].active = false;
    }
  }
}
