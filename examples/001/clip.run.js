const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.bing.com');

  // 截取指定区域：clip
  await page.screenshot({ path: 'test/001-clip.png', clip: { x: 100, y: 100, height: 50, width: 50 } });

  await browser.close();
})();
