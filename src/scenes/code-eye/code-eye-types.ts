export interface EyeDimensions {
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  halfWidth: number;
  halfHeight: number;
  irisRadius: number;
  pupilRadius: number;
  scale: number;
}

export interface CodeEyePalette {
  name: string;
  background: string;
  fieldGlyphs: string[];
  scleraGlyphs: string[];
  irisOuter: string[];
  irisMid: string[];
  irisInner: string[];
  pupil: string[];
  highlight: string[];
  eyelidRim: string[];
}

export const CODE_VOCABULARY = {
  signature: [
    "FORGED THROUGH CURIOSITY",
    "THE LAST KNIGHT",
    "RESILIENCE IS ARCHITECTURE",
    "PATTERNS IN THE STORM",
    "CONSCIOUSNESS OBSERVING CODE",
    "FROM ZERO TO DEPLOYMENT",
    "DISCIPLINE BREEDS FREEDOM",
  ],
  keywords: [
    "const", "async", "await", "kernel", "matrix", "vector",
    "interface", "type", "resolve", "execute", "render", "shader",
    "pipeline", "buffer", "compute", "stream", "transform", "origin",
    "armoury", "forge", "quest", "alliance", "curiosity", "resilience",
  ],
  sclera: [
    "01010011", "01000101", "01000101", "0xFA91", "0x88BC",
    "λ => x", "∫ dt", "∇ · E = 0", "O(log N)", "E = mc²",
  ],
};
