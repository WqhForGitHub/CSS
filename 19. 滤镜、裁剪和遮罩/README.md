# 1. CSS 滤镜



```css
filter 

取值：[ none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | sepia() | saturate() | url() ]#
初始值：none
适用于：所有元素（在 SVG 中适用于所有图形元素和除 <defs> 元素之外的所有容器元素）
计算值：声明的值
继承性：否
动画性：是
```

<br>

## 1. 基本滤镜

这些滤镜的作用基本上从名称上就能看出，包括模糊、投影和不透明度变化。

**blur(`<length>`)**

使用高斯模糊对元素的内容做模糊处理，标准偏差由 `<length>` 值定义，设为 0 时不对元素做模糊处理。标准偏差不能设为负值。

**opacity( [ `<number>`  |  `<percentage>` ] ) **

把透明度滤镜应用到元素上，与 opacity 属性十分相似，0 表示完全透明，1 或 100% 则不对元素做任何改动。不允许使用负值。值可以大于 1 或 100%，不过计算最终值时将取整为 1 或 100%。

 **drop-shadow( `<length>{2,3} <color>`? )**

创建与元素的 alpha 通道形状一致的投影，带模糊效果，而且可以指定颜色。长度和颜色的处理方式与 box-shadow 属性一样，因此前两个 `<length>` 值可以为负数，而第三个（定义模糊半径）不可以。如未提供 `<color>` 值，使用的颜色与元素的 color 属性的计算值一样。

>规范明确指出，filter: opacity() 不是 opacity 属性的替代品或简写形式。其实两者可以同时应用到元素上，得到的结果是一种双重透明效果。

这三个 filter 函数的单独效果以及组合效果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E5%9F%BA%E6%9C%AC%E6%BB%A4%E9%95%9C%E7%9A%84%E6%95%88%E6%9E%9C.png)

如果图像有透明部分，drop-shadow() 将用透明部分计算投影。GIF89a、PNG、JPEG2000、SVG，以及其他支持 alpha 通道的图像格式都支持透明度。在有透明部分的图像上应用投影滤镜的效果如下图所示。

注意，下图中的最后一个图像有两个投影，这是通过下述声明实现的：

```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  css
filter: drop-shadow(0 0 0.5em yellow) drop-shadow(0.5em 0.75em 30px gray);
```

可以像这样串联任意个滤镜。举个例子：

```css
filter: blur(3px) drop-shadow(0.5em 0.75em 30px gray) opacity(0.5);
```



![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/alpha%20%E9%80%9A%E9%81%93%E5%AF%B9%E6%8A%95%E5%BD%B1%E6%95%88%E6%9E%9C%E7%9A%84%E5%BD%B1%E5%93%8D.png)

<br>

## 2. 颜色滤镜

这一组 filter 函数以某种方式调整元素的颜色表现。有的函数很简单，只是滤去某些颜色，有的则很复杂，以一定的角度变换全部颜色。

注意：下述四个函数中的前三个都接受 `<number>` 或 `<percentage>` 值，而且不能为负值。

**grayscale( [ `<number>`  |  `<percentage>`  ] )**

把元素的颜色变成指定的灰阶。值为 0 时，元素没有任何变化；值为 1 或 100% 时，元素完全变成灰度。

 **sepia( [ `<number>`  |  `<percentage>`  ] )**

值为 0 是，元素没有任何变化；值为 1 或 100% 时，元素完全变成褐色。

**invert( [ `<number>`  |  `<percentage>`  ] )**

值为 0 时，元素没有任何变化；值为 1 或 100% 时，颜色完全反相。值为 0.5 或 50%，在色彩空间的中点停止反相，得到均匀的灰色。

**hue-rotate( `<angle>` )**

在色轮上旋转色相，而饱和度和明度保持不变。值为 0deg 时，元素没有任何变化。值为 360deg 时（旋转一整圈），元素基本上也没有什么变化，不过值得以保留下来了。`<angle>` 的值可以大于 360deg，也可以为负值。为负值时逆时针旋转，而为正值时顺时针旋转（也就是说，旋转的方式与指南针一样，0° 在最上边，角度沿顺时针方向增大）。

如下图给出了上述几个 filter 函数的示例，不过在彩色媒体上才能看到完整的效果。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E9%A2%9C%E8%89%B2%E6%BB%A4%E9%95%9C%E6%95%88%E6%9E%9C.png)

<br>

## 3. 亮度、对比度和饱和度

注意：这些函数的值都可以大于 1 和 100%，不过计算最终值时会取整为 1 或 100%。

**brightness( [ `<number>`  |  `<percentage>` ] )**

调整元素上颜色的亮度。值为 0 时，元素为纯黑色；值为 1 或 100%时，元素没有任何变化。大于 1 和 100% 的值得到的颜色比元素原有的颜色更亮，最终有可能变成纯白色。

**contrast( [ `<number>`  |  `<percentage>` ] )**

调整元素上颜色的对比度。对比度越高，越容易区分颜色；对比度越小，颜色越接近。值为 0 时，元素变成纯灰色；值为 1 或 100% 时，元素没有任何变化。大于 1 和 100% 的值得到的颜色比元素原有的对比度大。

**saturate( [ `<number>`  |  `<percentage>` ] )**

调整元素上颜色的饱和度。饱和度越高，颜色越鲜艳；饱和度越低，颜色越黯淡。

值为 0 时，元素完全没有饱和度，得到灰度效果；值为 1 或 100% 时，元素没有任何变化。与前面的函数不同，saturate() 允许使用也能应用大于 1 或 100% 的值，得到的结果是过度饱和。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E4%BA%AE%E5%BA%A6%E3%80%81%E5%AF%B9%E6%AF%94%E5%BA%A6%E5%92%8C%E9%A5%B1%E5%92%8C%E5%BA%A6%E6%BB%A4%E9%95%9C%E7%9A%84%E6%95%88%E6%9E%9C.png)

<br>

## 4. SVG 滤镜

**filter: url()**                      

```css
img.logo {
    filter: url(/assets/filters.sng#spotlight);
}

img.logo.print {
    filter: url(/assets/filters.svg#spotlight) grayscale(100%);
}

img.logo.censored {
    filter: url(/assets/filters.svg#spotlight) blur(3px);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/SVG%20%E6%BB%A4%E9%95%9C%E7%9A%84%E6%95%88%E6%9E%9C.png)

<br>

<h2 id="Og9MJ">19.2 合成和混合</h2>
<h3 id="wmMIk">混合元素</h3>
重叠元素的混合方式可以使用 mix-blend-mode 属性设定。

|                                                                      mix-blend-mode<br/>取值：normal  |  multiply  |  screen  |  overlay  |  darken  |  lighten  |  color-dodge  |  color-burn  |  hard-light  |  soft-light  |  difference  |  exclusion  |  hue  |  saturation  |  color  |  luminosity<br/>初始值：normal<br/>适用于：所有元素<br/>计算值：声明的值<br/>继承性：否<br/>动画性：否 |
| --- |




<h3 id="BNeZg">变暗、变亮、差值和排除</h3>
<h3 id="V82Af">正片叠底、滤色和叠加</h3>
<h3 id="bn7o3">强光和柔光</h3>
<h3 id="oZp4A">颜色减淡和加深</h3>
<h3 id="uGwrN">色相、饱和度、明度和颜色</h3>


---

<h2 id="Xd9PS">19.3 与背景混合</h2>
|                                                            background-blend-mode<br/>取值：[ normal  |  multiply  |  screen  |  overlay  |  darken  |  lighten  |  color-dodge  |  color-burn  |  hard-light  |  soft-light  |  difference  |  exclusion  |  hue  |  saturation  |  color  |  luminosity]#<br/>初始值：normal<br/>适用于：所有元素<br/>计算值：声明的值<br/>继承性：否<br/>动画性：否 |
| --- |




**独立混合**

|                                                                   isolation<br/>取值：auto  |  isolate<br/>初始值：auto<br/>适用于：所有元素（在 SVG 中，适用于容器元素、图形元素和图形引用元素）<br/>计算值：声明的值<br/>继承性：否<br/>动画性：否 |
| --- |





# 4. 裁剪和遮罩

## 1. 裁剪

我们知道，使用 filter 属性能通过 SVG 应用裁剪路径。这是滤镜的合理用途，不过如果只想把元素的一部分剪掉，可以使用 clip-path 属性。

```css
clip-path

取值：none | <url> | [[ inset() | circle() | ellipse() | polygon() ] || [ border-box | padding-box | content-box | margin-box | fill-box | stroke-box | view-box ]]
初始值：none
适用于：所有元素（在 SVG 中适用于所有图形元素和除 <defs> 之外的所有容器元素）
计算值：声明的值
继承性：否
动画性：inset()、circle()、ellipse() 和 polygen() 支持
```

clip-path 属性的作用是定义裁剪形状。元素的可见部分就在这个形状中绘制，而在这个形状外部的部分则被剪掉，留下透明的空白区域。

默认值 none 的意思是不做裁剪，这应该与你所想的一样。如果提供的是 `<uri>` 值（如前例），但是指向的资源不存在，或者没有指向 SVG 文件中的 `<clipath>` 元素，那么不对元素做裁剪。

余下的值，要么是使用 CSS 绘制的形状，要么是引用框，抑或二者兼具。

>截至 2017 年年末，如果 URL 指向的 SVG 嵌套在被裁剪的元素所在的文档中，只有 Chrome 支持这样的裁剪路径。所有浏览器都不支持外部 SVG 文件。

<br>

## 2. 裁剪形状

裁剪路径可以使用四个简单的形状函数定义。这些函数的作用与 shape-outside 中用于浮动形状时一样（参见第 10 章）。这里不再赘述。下面简单回顾一下。

**inset()**

值为一到四个长度值或百分数，定义距范围框各边的偏移量。可以使用 round 关键字，或者另一组一到四个长度值或百分数定义圆角。

**circle()**

只接受一个值，为长度、百分数或关键字，定义圆的半径。在一或两个长度或百分数后可以使用 at 关键字指定圆心的位置。

**ellipse()**

值必须为两个长度、百分数或关键字，定义椭圆在纵轴和横轴上的半径。在一或两个长度或百分数后可以使用 at 关键字指定椭圆中心的位置。

**polygon()**

一系列以逗号分隔的 x 和 y 坐标值（二者之间以空格分隔），可用长度或百分数。在坐标值前面可用关键字定义多边形的填充规则。

如下图给出了这几个裁剪路径的示例，所用的样式如下（图中的虚线框表示裁剪前原图的外边界）。

```css
.ex01 {clip-path: none;}
.ex02 {clip-path: inset(10px 0 25% 2em);}
.ex03 {clip-path: circle(100px at 50% 50%);}
.ex04 {clip-path: ellipse(100px 50px at 75% 25%);}
.ex05 {clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);}
.ex06 {clip-path: polygon(0 0, 50px 100px, 150px 5px, 300px 150px, 0 100%);}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E4%B8%8D%E5%90%8C%E7%9A%84%E8%A3%81%E5%89%AA%E5%BD%A2%E7%8A%B6.png)

从上图可以看出，只有位于裁剪形状内部的元素区域才可见。形状外部的区域消失不见了。不过请注意，裁剪后元素所占的空间不变，好似根本没有裁剪一样。也就是说，裁剪并不会导致元素的尺寸变小。裁剪只是限制具体绘制元素的哪些部分。

<br>

## 3. 裁剪框

与裁剪形状不同，裁剪框不使用长度或百分数指定。多数时候，裁剪框直接对应于盒模型中的边界。

比如说，clip-path: border-box 声明的意思是沿边框的外边界裁剪元素。我们通常见到的就是这种效果，因为外边距是透明的。不过要注意，轮廓在边框的外侧绘制，因此如果沿边框的边界裁剪，轮廓会被剪掉。

单独使用时，margin-box、padding-box 和 content-box 分别在外边距、内边距和内容区域的外边界裁剪元素，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E4%B8%8D%E5%90%8C%E7%9A%84%E8%A3%81%E5%89%AA%E6%A1%86.png)

**view-box**

使用最近的 SVG 视区（即最近的祖辈）作为裁剪框。

**fill-box**

使用对象范围框作为裁剪框。对象范围框指能放下元素几何尺寸范围内所有部分的最小框体，包括变形（例如旋转），也不包括外围的描边。

**stroke-box**

使用描边范围框作为裁剪框。描边范围框指能放下元素几何尺寸范围内所有部分的最小框体，包括变形（例如旋转），也包括外围的描边。

<br>

## 4. 裁剪填充规则

```css
clip-rule

取值：nozero | evenodd
初始值：nonzero
适用于：SVG 中当且仅当为 <clipPath> 元素的子元素时的所有图形元素（<circle>、<ellipse>、<image>、<line>、<path>、<polygon>、<polyline>、<rect>、<text> 和 <use>）
计算值：声明的值
继承性：否
动画性：否
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E5%A1%AB%E5%85%85%E5%BD%A2%E7%8A%B6%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E5%BC%8F.png)

<br>

<h2 id="ECuB6">19.5 蒙版</h2>
<h3 id="nAMoF">定义蒙版</h3>

|                                                                         mask-image<br/>取值：[ none  |  <image>  |  <mask-source> ]#<br/>初始值：none<br/>适用于：所有元素（在 SVG 中适用于所有图形元素和除 <defs> 之外的所有容器元素）<br/>计算值：声明的值<br/>继承性：否<br/>动画性：否<br/>备注：<image> 是任何类型的 <url>、<image()>、<image-set()>、<element()>、<cross-fade()> 或 <gradient>；<mask-source> 是一个url()，指向 SVG 图像中的 <mask>元素 |
| --- |




<h3 id="LXYAn">改变蒙版的模式</h3>
|                                                                             mask-mode<br/>取值：[ alpha  |  luminance  |  match-source ]#<br/>初始值：match-source<br/>适用于：所有元素（在 SVG 中适用于所有图形元素和除 <defs> 之外的所有容器元素）<br/>计算值：声明的值<br/>继承性：否<br/>动画性：否 |
| --- |




<h3 id="eq14d">调整蒙版的尺寸和重复方式</h3>
|                                                                               mask-size<br/>取值：[[ <length>  |  <percentage>  |  auto ]{1,2}  |  cover  |  contain ]#<br/>初始值：auto<br/>适用于：所有元素（在 SVG 中适用于所有图形元素和除 <defs> 之外的所有容器元素）<br/>计算值：声明的值<br/>继承性：否<br/>动画性：<length>，<percentage> |
| --- |


|                                                                               mask-repeat<br/>取值：[ repeat-x  |  repeat-y  |  [ repeat  |  space  |  round  |  no-repeat ]{1,2} ]#<br/>初始值：repeat<br/>适用于：所有元素（在 SVG 中适用于所有图形元素和除 <defs> 之外的所有容器元素）<br/>计算值：声明的值<br/>继承性：否<br/>动画性：是<br/>备注：mask-repeat 属性的关键字值与 background-repeat 属性一样，行为也相同。 |
| --- |




<h3 id="cFbdc">定位蒙版</h3>
|                                                                                 mask-position<br/>取值：<position>#<br/>初始值：0% 0%<br/>适用于：所有元素（在 SVG 中适用于所有图形和除 <defs> 之外的所有容器元素）<br/>计算值：声明的值<br/>继承性：否<br/>动画性：<length>，<percentage><br/>备注：<position> 与 background-position 属性允许取的值完全一样，行为也相同。 |
| --- |


|                                                                                    mask-origin<br/>取值：[ content-box  |  padding-box  |  border-box  |  margin-box  |  fill-box  |  stroke-box  |  view-box ]#<br/>初始值：border-box<br/>适用于：所有元素（在 SVG 中适用于所有图形元素和除 <defs> 之外的所有容器元素）<br/>计算值：声明的值<br/>继承性：否<br/>动画性：否 |
| --- |




<h3 id="IfA6q">裁剪和合成蒙版</h3>
|                                                                                mask-clip<br/>取值：[ content-box  |  padding-box  |  border-box  |  margin-box  |  fill-box  |  stroke-box  |  view-box  |  no-clip ]#<br/>初始值：border-box<br/>适用于：所有元素（在 SVG 中适用于所有图形元素和除 <defs> 之外的所有容器元素）<br/>计算值：声明的值<br/>继承性：否<br/>动画性：否 |
| --- |




|                                                                                mask-composite<br/>取值：[ add  |  subtract  |  intersect  |  exclude ]#<br/>初始值：add<br/>适用于：所有元素（在 SVG 中适用于所有图形元素和除 <defs> 之外的所有容器元素）<br/>计算值：声明的值<br/>继承性：否<br/>动画性：否 |
| --- |




<h3 id="PfL8p">写为一个属性</h3>
|                                                                               mask<br/>取值：[ <mask-image>  ||  <mask-position>  [/ <mask-size> ]?  ||  <mask-repeat>  ||  <mask-clip>  ||  <mask-origin>  ||  <mask-composite>  ||  <mask-mode> ]#<br/>初始值：参见各单独属性<br/>适用于：所有元素（在 SVG 中适用于所有图形元素和除 <defs> 之外的所有容器元素）<br/>计算值：声明的值<br/>继承性：否<br/>动画性：参见各单独属性                |
| --- |




<h3 id="RxC5W">蒙版类型</h3>
|                                                                               mask-type<br/>取值：luminance  |  alpha<br/>初始值：luminance<br/>适用于：SVG <mask> 元素<br/>计算值：声明的值<br/>继承性：否<br/>动画性：否 |
| --- |




<h3 id="KFhTv">遮罩边框图像</h3>


---

<h2 id="p2vBS">19.6 对象填充和定位</h2>
|                                                                              object-fit<br/>取值：fill  |  contain  |  cover  |  scale-down  |  none<br/>初始值：fill<br/>适用于：置换元素<br/>计算值：声明的值<br/>继承性：否<br/>动画性：否 |
| --- |




|                                                                            object-position<br/>取值：<position><br/>初始值：50% 50%<br/>适用于：置换元素<br/>计算值：声明的值<br/>继承性：否<br/>动画性：是<br/>备注：<position> 与 background-position 属性允许取的值完全一样，行为也相同 |
| --- |


​                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

​                                                                                                                          
