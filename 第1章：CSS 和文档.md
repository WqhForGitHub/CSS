<h2 id="r8qXT">元素</h2>
<h3 id="cUBpv">置换元素和非置换元素</h3>
1. 置换元素

置换元素指用来置换元素内容的部分不由文档内容直接表示。在 HTML 中，最常见的置换元素要数 img，它的内容由文档之外的图像文件替换。其实，通过下面这个简单的例子可以看出，img 元素没有内容：

```html
<img src="howdy.gif" >
```

input 元素类似，根据类型不同，会替换成单选按钮、复选框或文本输入框。



2. 非置换元素

HTML 元素大部分是非置换元素，即元素的内容由用户代理（通常是浏览器）在元素自身生成的框中显示。例如：<span>hi there</span>是非置换元素，用户代理会显示 "hi there" 文本。段落、标题、单元格、列表，以及 HTML 中其他几乎所有元素都是非置换元素。

<h3 id="Od2hW">元素的显示方式</h3>
1. 块级元素

块级元素（默认）生成一个填满父级元素内容区域的框，旁边不能有其他元素。也就是说，块级元素在元素框的前后都断行。HTML 中最常见的块级元素是 p 和 div。置换元素可以是块级元素，但往往不是。



2. 行内元素

行内元素在一行文本内生成元素框，不打断所在的行。HTML 中最常见的行内元素是 a。此外还有 strong 和 em。这类元素不在自身所在元素的框的前后断行，因此可以出现在另一个元素的内容中，且不影响所在的元素。

注意：HTML 中的块级元素和行内元素虽然有诸多共同点，但是它们之间有个重要的区别：在 HTML 中，块级元素不能出现在行内元素中。但是 CSS 并不限制它们的显示方式，相互之间可以嵌套。

|    display<br/>取值：<br/>定义：见下<br/>默认值：inline<br/>适用于：所有元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否<br/><br/><display-outside><br/>block  |  inline  |  run-in<br/><display-inside><br/>flow  |  flow-root  |  table  |  flex  |  grid  |  ruby<br/><display-internal><br/>table-row-group  |  table-header-group  |  table-footer-group  |  table-row  |  table-cell  |  table-column-group  |  table-column  |  table-caption  |  ruby-base  |  ruby-text  |  ruby-base-container  |  ruby-text-container  <br/><display-box><br/>contents  |  none<br/><display-legacy><br/>inline-block  |  inline-list-item  |  inline-table  |  inline-flex  |  inline-grid |
| --- |










<h2 id="ZlGdp">把 CSS 应用到 HTML 上</h2>
<h3 id="gcrff">link 标签</h3>
```html
<head>
  <link rel="stylesheet" type="text/css" href="sheet1.css" media="all" >
</head>
```



```html
<link rel="stylesheet" type="text/css" href="visual-sheet.css" media="screen, projection">
```



**候选样式表**

```html
<link rel="stylesheet" type="text/css" href="sheet1.css" title="Default" >
<link rel="alternate stylesheet" type="text/css" href="bigtext.css" title="Big Text">
<link rel="alternate stylesheet" type="text/css" href="zany.css" title="Crazy colors!">
```



一旦设定标题，也就是将其定为首选样式表。这意味着，首选样式表优先于候选样式表，显示文档时默认使用。

```html
<link rel="stylesheet" type="text/css" href="sheet1.css" title="Default" media="screen">
<link rel="stylesheet" type="text/css" href="print-sheet1.css" title="Default" media="print">
<link rel="alternate stylesheet" type="text/css" href="bigtext.css" title="Big Text" media="screen" >
<link rel="alternate stylesheet" type="text/css" href="print-bigtext.css" title="Big Text" media="print" >
```

<h3 id="cDSQA">style 元素</h3>
```html
<style type="text/css" media="all"></style>
```

<h3 id="Wt6P1">@import 指令</h3>
```html
<style type="text/css">
  @import url(styles.css); /* @import 放在开头 */
  h1 {color: gray;}
</style>
```

```html
<style type="text/css">
  @import url(styles.css); /* @import 放在开头 */
  @import url(sheet2.css);
  @import url(blueworld.css) screen;
  @import url(zany.css) projection, print;
</style>
```

<h3 id="MuV9B">HTTP 链接</h3>
<h3 id="EnK4e">行内样式</h3>
如果只想为单个元素提供少量样式，不值得动用嵌入式样式表或外部样式表，可以利用 HTML 元素的 style 属性设置行内样式

```html
<p style="color: gray;">
  The most wonderful of all breakfast foods is the 
  waffle —— a ridged and cratered slab of home-cooked, fluffy goodness...
</p>
```









<h2 id="vxhpc">样式表中的内容</h2>
<h3 id="S3EPp">厂商前缀</h3>
| 前缀 | 厂商 |
| --- | --- |
| -epub- | 国际数字出版论坛制定的 ePub 格式 |
| -moz- | 基于 Mozilla 的浏览器（如 Firefox） |
| -ms- | 微软 Internet Explorer |
| -o- | 基于 Opera 的浏览器 |
| -webkit- | 基于 Webkit 的浏览器（如 Safari 和 Chrome） |


如今，编写 CSS 时你完全可以不使用厂商前缀，不过偶尔会遇到别人使用，或者在以前的代码基中见到。

<h3 id="o28Zd">CSS 注释</h3>
```css
/*
h1 {color: gray;}
h2 {color: silver;}
*/
h1 {color: gray;} /* 这个 CSS 注释有好几行 */
h2 {color: silver;} /* 而它放在样式旁边 */
p {color: white;} /* 因此每一行都要 */
pre {color: gray;} /* 放在注释标记里 */
```











<h2 id="UVo0j">媒体查询</h2>
创作人员通过媒体查询定义浏览器在何种媒体环境中使用指定的样式表。过去，实现这一机制的方法是通过 link 元素或 style 元素的 media 属性设定媒体类型，或者为 @import 或 @media 指令提供媒体描述符。媒体查询更进一步，允许创作人员通过媒体描述符根据指定媒体类型的特性选择样式表

<h3 id="hnAaP">用法</h3>
媒体查询可以在下述几个地方使用：

+ link 元素的 media 属性
+ style 元素的 media 属性
+ @import 声明的媒体描述符部分
+ @media 声明的媒体描述符部分

媒体查询可以是简单的媒体类型，也可以是复杂的媒体类型和特性的组合。

<h3 id="la5gj">简单的媒体查询</h3>
```css
h1 {color: maroon};
@media projection {
  body {background: yellow;}
}
```

```css
@media all {
  h1 {color: maroon;}
  body {background: yellow;}
}
```

<h3 id="zNhcP">媒体类型</h3>
媒体查询最基本的形式媒体类型。媒体类型就是指明不同媒体的标注：

**all**

用于所有展示媒体

**print**

为有视力的用户打印文档时使用，也在预览打印效果时使用。

**screen**

在屏幕媒体（如桌面电脑显示器）上展示文档时使用。在桌面计算机上运行的所有 Web 浏览器都是屏幕媒体用户代理。



多个媒体类型使用逗号分隔罗列。下面四种方式都能把一个样式表（或一个规则块）同时应用到屏幕媒体和印刷媒体上：

```html
<link type="text/css" href="frobozz.css" media="screen, print">
<style type="text/css" media="screen,print"></style>
```

```css
@import url(frobozz.css) screen, print;
@media screen, print {}
```

<h3 id="Ot1rN">媒体描述符</h3>
下面两种方式都能把指定的外部样式表应用到彩打上：

```html
<link href="print-color.css" type="text/css" media="print and (color)" rel="stylesheet" >
```

```css
@import url(print-color.css) print and (color);
```



下面连个等式是等效的

```css
@media all and (min-resolution: 96dpi) {}
```

```css
@media (min-resolution: 96dpi) {}
```



媒体查询中可使用的逻辑关键字有两个：

**and**

连接的两个或多个媒体特性必须同时满足条件，整个查询得到的结果才是真值。例如，(color) and (orientation: landscape) and (min-device-width: 800px) 表示三个条件都要满足：当媒体环境是彩色的、横向放着、而且设备的屏幕宽至少为 800 像素，才会应用样式表。

**not**

对整个查询取反。假如所有条件都为真，那样式表不会应用到文档上。例如，not (color) and (orientation: landscape) and (min-device-width: 800px) 表示三个条件都满足时，整个语句得到的结果与之相反。因此，当媒体环境是彩色的、横向放着，而且设备的屏幕宽至少为 800 像素，样式表不会应用到文档上。除此之外的情况下，都将应用样式表。

注意：not 关键字只能在媒体查询的开头使用。（color） and not (min-device-width: 800px) 无效。

**only**

在不支持媒体查询的旧浏览器中隐藏样式表。

注意：only 关键字只能用在媒体查询的开头









<h2 id="fjbtC">特性查询</h2>
根据用户代理是否支持特定的 CSS 属性及其值来应用一段样式。

```css
@supports (color: black) {
  body {color: black;}
  h1 {color: purple;}
  h2 {color: navy;}
}
```

```css
@supports (display: flex) {
  @media screen {}
  @media print {}
}
```

```css
@media screen and (max-width: 30em) {
  @supports (display: flex){
  }
}

@media screen and (min-width: 30em) {
  @supports (display: flex) {
  }
}
```

