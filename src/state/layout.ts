import { atom } from 'recoil';

export const layoutState = atom<string[]>({
  key: 'layoutState',
  default: [],
});
