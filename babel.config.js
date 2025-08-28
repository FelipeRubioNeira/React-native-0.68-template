module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@app': './src',
          '@presentation': './src/presentation',
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
    ],
    'babel-plugin-transform-typescript-metadata',
  ],
};
