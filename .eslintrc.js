module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
  },
  rules: {
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'no-console': 1,
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.config.prod.js',
      },
    },
  },
};
