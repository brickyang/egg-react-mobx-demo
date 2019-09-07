import { EggPlugin } from 'egg';

const localPlugin: EggPlugin = {
  webpack: {
    enable: true,
    package: 'egg-webpack',
  },
};

export default localPlugin;
