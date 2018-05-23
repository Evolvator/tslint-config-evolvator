var path = require('path');

module.exports = {
  "extends": [
    "tslint-eslint-rules",
    "tslint-config-airbnb"
  ],
  "rules": {
    "prefer-const": false, // bug in for usage
    "no-increment-decrement": false, // sometimes it is necessary, prohibitions do not lead to good
    "no-unused-variable": true, // todo: import too
    "no-var-keyword": false, // 2.2 in practice, interference
    "function-name": false, // 23.1 is good, but... the rest is dictate
    "max-line-length": false, // 13.12 just no
    "import-name": false, // 23.6 just no
    "one-variable-per-declaration": false, // 13.2 is good, but painfully for experiments
    "variable-name": [ // 23.2 just no, sometimes it is necessary, private variables and so on
      true,
      "ban-keywords",
      "check-format",
      "allow-leading-underscore",
      "allow-trailing-underscore",
      "allow-pascal-case",
      "allow-snake-case"
    ]
  }
};
