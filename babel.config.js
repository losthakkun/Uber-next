module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',             //? Set up .env file for development and production environments
        {
          moduleName: '@env',                     //? Module name to use in your code (default: '@env') (optional) (string)
          path: '.env',                           //? Path to your .env file (optional) (string) (default: '.env')
        },
      ],
    ],
  };
};
