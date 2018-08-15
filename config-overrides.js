const {rewireWorkboxInject, defaultInjectConfig} = require('react-app-rewire-workbox');
const path = require('path');

module.exports = function override(config, env) {

  if (env === "production") {
    console.log("Production build - Adding Workbox for PWAs");
    // Extend the default injection config with required swSrc
    const workboxConfig = {
      ...defaultInjectConfig,
      globDirectory: 'build/',
      globPatterns: ['*.{js,png,html,css}'],
      swSrc: path.join(__dirname, 'src', 'service-worker.js'),
      swDest: path.join(__dirname, 'build', 'service-worker.js'),
    };
    config = rewireWorkboxInject(workboxConfig)(config, env);
  }

  return config;
};