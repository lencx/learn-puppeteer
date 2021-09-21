const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.bing.com/search?q=puppeteer');

  // 滚动截屏：fullPage
  await page.screenshot({ path: 'test/001-fullpage.png', fullPage: true });

  /**
   * TODO:
   * 期望结果 - 期望滚动截取一个内容长图，但截图的内容区域为空白
   * 原因分析 - 元素未加载完成，就对其进行了截屏，继续探索 API
   */

  await browser.close();
})();
