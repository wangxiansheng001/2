// var webdriver = require('selenium-webdriver'),
// By = webdriver.By,
// until = webdriver.until;

// var driver = new webdriver.Builder()
// .forBrowser('chrome')
// .build();

// driver.get('https://localhost:3000/index/index');
// driver.findElement(By.id('thumb')).sendKeys('webdriver');
// driver.findElement(By.id('su')).click();
// driver.wait(until.titleIs('webdriver_百度搜索'), 1000);
// driver.quit();


const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://localhost:3000/index/index');
    await driver.findElement(By.id('thumb'));
   const _animation = driver.findElement(By.id('animation'));
    await driver.wait(_animation.isDisplayed(), 5000);
  } finally {
    await driver.quit();
  }
})();