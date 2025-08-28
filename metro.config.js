const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

console.log('[metro.config] usando alias @ ->', path.resolve(__dirname, 'src'));

const config = {
  resolver: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
      '@presentation': path.resolve(__dirname, 'src/presentation'),
    },
  },
};

//module.exports = mergeConfig(getDefaultConfig(__dirname), config);
module.exports = wrapWithReanimatedMetroConfig(mergeConfig(getDefaultConfig(__dirname), config));
