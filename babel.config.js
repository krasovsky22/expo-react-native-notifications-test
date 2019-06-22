module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      'babel-plugin-styled-components',
      [
        'module-resolver', {
          "root": ["./"],
          'alias': {
            '@assets': './assets',
            '@stores': './stores',
            '@models': './models',
            '@screens': './screens',
            '@constants': './constants',
            '@navigation': './navigation',
            '@components': './components'
          }
        }
      ]
    ],
    presets: ['babel-preset-expo'],
  };
};
