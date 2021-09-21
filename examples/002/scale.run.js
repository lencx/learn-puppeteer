const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://blog.codinghorror.com/recommended-reading-for-developers/');

  // 保存为 PDF
  await page.pdf({
    path: 'test/002-scale.pdf',
    scale: 0.2,
  });

  await browser.close();
})();
