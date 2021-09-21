# screenshot

## options

- `path`[string] - 保存图像的文件路径，屏幕截图类型将从文件扩展名中推断出来
  - 如果 `path` 是相对路径，则相对于当前工作目录解析
  - 如果不提供路径，图片则不会保存至磁盘
- `fullPage` - 滚动整个页面截屏，默认为 `false`，
  - **为 `true` 时不可与 `clip` 同时使用**
- `clip` - 指定页面剪切区域，有四个参数：
  - `x` - 剪辑区域左上角 x 坐标
  - `y` - 剪辑区域左上角 y 坐标
  - `width` - 裁剪区域宽度
  - `height` - 裁剪区域高度
- `type` - 指定截图类型，可以是 `jpeg` 或 `png`。默认为 `png`
- `quality` - 图像质量，介于 0-100 之间。不适用于png图像

## 参考

- [page.screenshot([options])](https://pptr.dev/#?product=Puppeteer&version=v10.2.0&show=api-pagescreenshotoptions)
