# float 和 display:inline-block 区别
## float
* 脱离文档流，当上一行有空白，当前元素会在上行补位排列。
* 默认顶部对齐。
* 适合当有左右两个不同浮动方向时选用。
## inline-block
* 不脱离文档流，以每行最高元素高度为行高，不会出现补位排列
* 默认baseline对齐，可对inline-block元素设置vertical-align:top等设置对齐方式
* 适合将元素在同一方向上按行排列
