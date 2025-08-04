import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#f8b20eff',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './src/assets/pinkFloyd.png',
  fullDecal: './src/assets/pinkFloyd.png',
});

export default state;