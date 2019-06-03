module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@views": "./src/views",
            "@stores": "./src/stores",
            "@images": "./src/assets/images"
          }
        }
      ]
    ]
  };
};
