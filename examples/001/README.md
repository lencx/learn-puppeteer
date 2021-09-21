# screenshot

## 参数

- `options`
  - `path` \<string> - 保存图像的文件路径，屏幕截图类型将从文件扩展名中推断出来
    - 如果 `path` 是相对路径，则相对于当前工作目录解析
    - 如果不提供路径，图片则不会保存至磁盘
  - `fullPage` \<boolean> - 滚动整个页面截屏，默认为 `false`，
    - **为 `true` 时不可与 `clip` 同时使用**
  - `clip` \<Object> - 指定页面剪切区域，有四个参数：
    - `x` - 剪辑区域左上角 x 坐标
    - `y` - 剪辑区域左上角 y 坐标
    - `width` - 裁剪区域宽度
    - `height` - 裁剪区域高度
  - `type` \<string> - 指定截图类型，可以是 `jpeg` 或 `png`。默认为 `png`
  - `quality` \<number> - 图像质量，介于 0-100 之间。不适用于png图像
  - `encoding` \<string> - 图像编码，可选值 `base64` 或 `binary`。默认为 `binary`
  - `omitBackground` \<boolean> - 隐藏默认的白色背景，并允许捕获具有透明度的屏幕截图。默认为 `false`
  - `captureBeyondViewport` \<boolean> - 捕获超出视口的屏幕截图。如果为 `false`，则退回到旧行为，并按视口大小剪切屏幕截图。默认为 `true`
- `returns` \<Promise<string|Buffer>> - 使用捕获的屏幕截图解析为缓冲区或 `base64` 字符串（取决于 `encoding` 的值）的承诺

### 注意

注意 `OS X` 上的屏幕截图至少需要 `1/6` 秒。有关讨论，请参阅 [Headless screenshots slow dramatically with repeated use](https://crbug.com/741689)。

## 参考

- [page.screenshot([options])](https://pptr.dev/#?product=Puppeteer&version=v10.2.0&show=api-pagescreenshotoptions)
