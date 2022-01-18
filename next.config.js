const webpack = require('webpack');
const path = require('path');
// const { parsed: myEnv } = require('dotenv').config({
//   path: `./deploy/environment/.env.${process.env.BRIBRAIN_ENV}`,
// });
module.exports = {
  dir: './src',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  assetPrefix: '/',
  // async rewrites() {
  //   return [
  //     { source: '/:path*', destination: '/:path*' },
  //     {
  //       source: '/link5/:path*',
  //       destination: `${process.env.MF_BRIBRAIN_LINK5}/:path*`,
  //     },
  //   ];
  // },
  // webpack(config) {
  //   config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
  //   return config;
  // },
};
