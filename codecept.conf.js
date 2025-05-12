const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://aljazeera.com/',
      browser: 'chrome',
      smartWait: 5000,          // Waits up to 5 seconds for elements to appear
      waitForTimeout: 10000,    // Maximum timeout for waiting
      desiredCapabilities: {
        chromeOptions: {
          args: ['--disable-gpu', '--no-sandbox', '--start-maximized']
        }
      },
    }
  },
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/homePageSteps.js', './step_definitions/liveStreamPageSteps.js'],
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy', // Updated Allure Plugin
    },
  },
  include: {
    I: './steps_file.js'
  },
  name: 'test_project2'
}