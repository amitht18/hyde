export interface Word {
  id: number;
  word: string;
  replacement: string;
  hiddenIn: string;
}


export const intialWord: Word = {
  id: -1,
  word: '',
  replacement: '',
  hiddenIn: ''
}
