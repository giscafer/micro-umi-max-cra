const pro = process.env.NODE_ENV === 'production';

const appName = 'subApp';

module.exports = {
  webpack: (config) => {
    config.output.library = `${appName}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.publicPath = !pro ? 'http://localhost:7100' : '/';
    config.output.chunkLoadingGlobal = `webpackJsonp_${appName}`;
    config.output.globalObject = 'window';

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;

    config.hot = false;
    // config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
