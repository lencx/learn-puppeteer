const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.bing.com');

  await page.screenshot({ path: 'test/bing2.png' });

  await browser.close();
})();
