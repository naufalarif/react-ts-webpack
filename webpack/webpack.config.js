const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (envVars) => {
  // This env variable will trigger npm start to decide which webpack config will be used
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
}