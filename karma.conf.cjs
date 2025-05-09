// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const { join } = require('path');
const karmaJasmine = require('karma-jasmine');
const karmaChromeLauncher = require('karma-chrome-launcher');
const karmaJasmineHtmlReporter = require('karma-jasmine-html-reporter');
const karmaCoverageIstanbulReporter = require('karma-coverage-istanbul-reporter');
const angularKarmaPlugin = require('@angular-devkit/build-angular/plugins/karma');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      karmaJasmine,
      karmaChromeLauncher,
      karmaJasmineHtmlReporter,
      karmaCoverageIstanbulReporter,
      angularKarmaPlugin
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: join(__dirname, './coverage/re-shop'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
