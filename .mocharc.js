const rimraf = require('rimraf');
rimraf.sync('./allure-results');

module.exports = {
    "reporter": "mocha-multi-reporters",
    //"reporter": "allure-mocha",
    "reporter-option": "configFile=reporterConfig.json",
    "timeout": 2000
}
