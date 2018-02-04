var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

driver.get('https://localhost:3000/index/index');
driver.findElement(By.id('thumb')).sendKeys('webdriver');
driver.findElement(By.id('su')).click();
driver.wait(until.titleIs('webdriver_百度搜索'), 1000);
driver.quit();