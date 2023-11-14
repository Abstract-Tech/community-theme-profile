const path = require('path');
const { createConfig } = require('@edx/frontend-build');

const config = createConfig('webpack-prod');

config.devtool = false;

config.cache = {
  type: 'filesystem',
  cacheDirectory: path.resolve(__dirname, '.cache'),
};

config.plugins = config.plugins
  .filter(plugin => (plugin.constructor.name !== 'NewRelicPlugin'))
  .filter(plugin => (plugin.constructor.name !== 'HtmlWebpackNewRelicPlugin'))
  .filter(plugin => (plugin.constructor.name !== 'BundleAnalyzerPlugin'));

module.exports = config;
