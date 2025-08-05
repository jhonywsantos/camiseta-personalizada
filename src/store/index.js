import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#f8b20eff',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './CorpseBride.jpeg',
  fullDecal: './CorpseBride.jpeg',
});

export default state;