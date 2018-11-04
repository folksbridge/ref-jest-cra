module.exports = {
  extends: ["airbnb", "plugin:jest/recommended"],
  env: {
    browser: true
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "linebreak-style": ["error", "windows"]
  }
};
