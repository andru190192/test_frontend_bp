import { type IOpacityColors, type IColors } from './interface';

export const solidColors: Record<string, string> = {
  white: '#FFFFFF',
  black: '#000000',
  borderGray: '#BDBDBD',
  background: '#E9ECF1',
};

export const opacityColors: Record<string, IOpacityColors | string> = {
  black: {
    30: '#1113184D',
    90: '#111318E5',
  },
};

export const bpColors: Record<string, IColors | string> = {
  yellow: {
    500: '#F4DF66',
  },
  blue: {
    500: '#162559',
  },
};
