const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.bing.com');

  // 滚动截屏：fullPage
  await page.screenshot({ path: 'test/bing.png', fullPage: true, clip: { x: 100, y: 100, height: 30, width: 50 } });

  await browser.close();
})();
