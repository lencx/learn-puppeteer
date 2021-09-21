# pdf

## 参数

- `options`
  - `path` \<string> - 保存 PDF 的文件路径。与 `screenshot` 类似
    - 如果 `path` 是相对路径，则相对于当前工作目录解析
    - 如果未提供路径，PDF 将不会保存到磁盘
  - `scale` \<number> - 网页渲染的比例。默认为 `1` 缩放量必须介于 `0.1` ~ `2` 之间
  - `displayHeaderFooter` \<boolean> - 显示页眉和页脚。默认为 `false`
