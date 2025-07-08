# 1. CSS 滤镜

年长的创作人员可能还记得，很久之前，微软在自家浏览器中为 CSS 提供了 filter 属性支持，用于添加 directx 视觉效果。不久之后，CSS 也增加了 filter 属性，概念与微软实现的类似，但两者的作用并不相同。经过几次修订之后，CSS 定义了一些内置的视觉效果滤镜，而且允许从外部文件中加载滤镜。

```css
filter 

取值：[ none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | sepia() | saturate() | url() ]#
初始值：none
适用于：所有元素（在 SVG 中适用于所有图形元素和除 <defs> 元素之外的所有容器元素）
计算值：声明的值
继承性：否
动画性：是
```

从取值句法可以看出，滤镜函数可以有多个，之间以空格分隔，各滤镜按列出的顺序应用。因此，对 `filter: opacity(0.5) blur(1px);`。声明来说，先应用不透明度，得到半透明效果，然后再做模糊处理。如果调换两个函数的位置，应用的顺序随之变化，即先对完全不透明度的元素做模糊处理，然后再变成半透明。

CSS 规范在讨论 filter 时经常提到输入图像，但这不意味着 filter 属性只能用在图像上。任何 HTML 元素都可以使用滤镜，而且 SVG 中的所有图形元素也可以使用。输入图像是应用滤镜之前元素渲染结果的视觉副本。滤镜就应用到这个输入上，得到结果后再渲染到显示媒体上。

允许使用的值其实都是函数，各个函数可用的参数值不尽相同。为了便于理解，笔者对这些函数做了不太严格地分类。

<br>

## 1. 基本滤镜

这些滤镜的作用基本上从名称上就能看出，包括模糊、投影和不透明度变化。

blur(`<length>`)

​	使用高斯模糊对元素的内容做模糊处理，标准偏差由 `<length>` 值定义，设为 0 时不对元素做模糊处理。标准偏差不能设为负值。

opacity( [ `<number>`  |  `<percentage>` ] ) 

​	把透明度滤镜应用到元素上，与 opacity 属性十分相似，0 表示完全透明，1 或 100% 则不对元素做任何改动。不允许使用负值。值可以大于 1 或 100%，不	过计算最终值时将取整为 1 或 100%。

>规范明确指出，filter: opacity() 不是 opacity 属性的替代品或简写形式。其实两者可以同时应用到元素上，得到的结果是一种双重透明效果。

 drop-shadow( `<length>{2,3} <color>`? )

​	创建与元素的 alpha 通道形状一致的投影，带模糊效果，而且可以指定颜色。长度和颜色的处理方式与 box-shadow 属性一样，因此前两个 `<length>` 值可	以为负数，而第三个（定义模糊半径）不可以。如未提供 `<color>` 值，使用的颜色与元素的 color 属性的计算值一样。

<br>

这三个 filter 函数的单独效果以及组合效果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E5%9F%BA%E6%9C%AC%E6%BB%A4%E9%95%9C%E7%9A%84%E6%95%88%E6%9E%9C.png)继续之前，有两点需要进一步说明。首先是 dro-shadow() 的具体运作方式。只看上图，容易误以为投影式沿元素框的边界放置的，因为图中的投影出现在一个方框四周。但这只是因为演示用的图像是 PNG 格式，即光栅图像，而更重要的原因是，这个图像没有 alpha 通道，也就是说白色部分是不透明的。

如果图像有透明部分，drop-shadow() 将用透明部分计算投影。GIF89a、PNG、JPEG2000、SVG，以及其他支持 alpha 通道的图像格式都支持透明度。在有透明部分的图像上应用投影滤镜的效果如下图所示。

注意，下图中的最后一个图像有两个投影，这是通过下述声明实现的：

```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  css
filter: drop-shadow(0 0 0.5em yellow) drop-shadow(0.5em 0.75em 30px gray);
```

可以像这样串联任意个滤镜。举个例子：

```css
filter: blur(3px) drop-shadow(0.5em 0.75em 30px gray) opacity(0.5);
```



![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/alpha%20%E9%80%9A%E9%81%93%E5%AF%B9%E6%8A%95%E5%BD%B1%E6%95%88%E6%9E%9C%E7%9A%84%E5%BD%B1%E5%93%8D.png)得到的元素有点模糊，带有投影，而且是半不透明的。对读者来说这可能不是最好的效果，举这个例子只是为了说明我们可以这么做。所有 filter 函数都可以像这样串联，包括本节涵盖的，以及后文即将介绍的。

<br>

## 2. 颜色滤镜

这一组 filter 函数以某种方式调整元素的颜色表现。有的函数很简单，只是滤去某些颜色，有的则很复杂，以一定的角度变换全部颜色。

注意，下述四个函数中的前三个都接受 `<number>` 或 `<percentage>` 值，而且不能为负值。

grayscale( [ `<number>`  |  `<percentage>`  ] )

​	把元素的颜色变成指定的灰阶。值为 0 时，元素没有任何变化；值为 1 或 100% 时，元素完全变成灰度。

 sepia( [ `<number>`  |  `<percentage>`  ] )

​	值为 0 是，元素没有任何变化；值为 1 或 100% 时，元素完全变成褐色。

invert( [ `<number>`  |  `<percentage>`  ] )

​	值为 0 时，元素没有任何变化；值为 1 或 100% 时，颜色完全反相。值为 0.5 或 50%，在色彩空间的中点停止反相，得到均匀的灰色。

hue-rotate( `<angle>` )

​	在色轮上旋转色相，而饱和度和明度保持不变。值为 0deg 时，元素没有任何变化。值为 360deg 时（旋转一整圈），元素基本上也没有什么变化，不过值得	以保留下来了。`<angle>` 的值可以大于 360deg，也可以为负值。为负值时逆时针旋转，而为正值时顺时针旋转（也就是说，旋转的方式与指南针一样，0° 	在最上边，角度沿顺时针方向增大）。

<br>

如下图给出了上述几个 filter 函数的示例，不过在彩色媒体上才能看到完整的效果。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E9%A2%9C%E8%89%B2%E6%BB%A4%E9%95%9C%E6%95%88%E6%9E%9C.png)

<br>

## 3. 亮度、对比度和饱和度

这些 filter 函数也用于操纵颜色，而且操纵的方式有很大的关联性，处理过图像，尤其是照片的人对这一组函数应该不会感到陌生。

注意，这些函数的值都可以大于 1 和 100%，不过计算最终值时会取整为 1 或 100%。

<br>

brightness( [ `<number>`  |  `<percentage>` ] )

​	调整元素上颜色的亮度。值为 0 时，元素为纯黑色；值为 1 或 100%时，元素没有任何变化。大于 1 和 100% 的值得到的颜色比元素原有的颜色更亮，最终有	可能变成纯白色。

contrast( [ `<number>`  |  `<percentage>` ] )

​	调整元素上颜色的对比度。对比度越高，越容易区分颜色；对比度越小，颜色越接近。值为 0 时，元素变成纯灰色；值为 1 或 100% 时，元素没有任何变	化。大于 1 和 100% 的值得到的颜色比元素原有的对比度大。

saturate( [ `<number>`  |  `<percentage>` ] )

​	调整元素上颜色的饱和度。饱和度越高，颜色越鲜艳；饱和度越低，颜色越黯淡。

​	值为 0 时，元素完全没有饱和度，得到灰度效果；值为 1 或 100% 时，元素没有任何变化。与前面的函数不同，saturate() 允许使用也能应用大于 1 或 100% 	的值，得到的结果是过度饱和。

<br>

下图给出了上述几个 filter 函数的示例，不过在彩色媒体上才能看到完整的效果。此外，值大于 1 时的效果很难在图中表现出来，不过图中注明了。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E4%BA%AE%E5%BA%A6%E3%80%81%E5%AF%B9%E6%AF%94%E5%BA%A6%E5%92%8C%E9%A5%B1%E5%92%8C%E5%BA%A6%E6%BB%A4%E9%95%9C%E7%9A%84%E6%95%88%E6%9E%9C.png)

<br>

## 4. SVG 滤镜

filter 可以取得最后一个值是一个我们比较熟悉的函数：url()。创作人员可以使用这个函数指向 SVG 中定义的滤镜（一般来说比较复杂），这个 SVG 可以嵌入文档，也可以存储在外部文件中。

这个函数的格式是 url(`<uri>`)，其中 `<uri>` 指向一个使用 SVG 句法（具体而言是 `<filter>` 元素）定义的滤镜。引用的目标可以是包含一个滤镜的 SVG 图像，例如 url(wavy.svg)，也可以是 SVG 图像中某个标识符对应的滤镜，例如 url(filters.svg#wavy)。后一种方式的优点是，可以在一个 SVG 中定义多个滤镜，这样便于加载、缓存和引用。

如果 url() 函数指向不存在的文件，或者指向的 SVG 片段不是 `<filter>` 元素，那么这个函数不起作用，而且整个函数列表都将忽略（也就是整个 filter 声明都无效）。

全面说明如何使用 SVG 实现滤镜超出了本书范畴，你只需知道，SVG 提供的滤镜功能十分丰富。下图给出了一些简单的 SVG 滤镜示例，而且简要说明各滤镜的作用（应用这些滤镜的 CSS 是这样的： filter: url(filters.svg#rough)）。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/SVG%20%E6%BB%A4%E9%95%9C%E7%9A%84%E6%95%88%E6%9E%9C.png)

前文所讲的滤镜在 SVG 中都能轻易实现，包括 filter 可取的其他各个函数（其实，规范就是以 SVG 滤镜的形式给出其他各个 filter 函数的定义，以便给实现方一个参照）。记住，CSS 滤镜函数是可以串联的。因此，你可以使用 SVG 定义一个镜面高光滤镜，然后再使用模糊和灰度函数修饰。例如：

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

谨记，滤镜函数是按列出的顺序应用的。鉴于此，我们才把 grayscale() 和 blur() 函数放在通过 url() 导入的聚光灯滤镜后面。如果反过来，徽标将先变成灰度模式，然后模糊处理，最后才应用高光效果。

<br>

# 4. 裁剪和遮罩

除了滤镜和混合之外，使用 CSS 才能裁剪和遮罩。这两个功能的作用是只显示元素的部分区域，可见的区域可以使用各种简单的形状指定，也可以使用完整的图像和 SVG 元素指定。可见的区域可以使用各种简单的形状指定，也可以使用完整的图像和 SVG 元素指定。利用这两个功能可以对布局做些装饰，丰富视觉效果，例如给图像添加画框或锯齿状的边线。

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

inset()

​	值为一到四个长度值或百分数，定义距范围框各边的偏移量。可以使用 round 关键字，或者另一组一到四个长度值或百分数定义圆角。

circle()

​	只接受一个值，为长度、百分数或关键字，定义圆的半径。在一或两个长度或百分数后可以使用 at 关键字指定圆心的位置。

ellipse()

​	值必须为两个长度、百分数或关键字，定义椭圆在纵轴和横轴上的半径。在一或两个长度或百分数后可以使用 at 关键字指定椭圆中心的位置。

polygon()

​	一系列以逗号分隔的 x 和 y 坐标值（二者之间以空格分隔），可用长度或百分数。在坐标值前面可用关键字定义多边形的填充规则。

<br>

如下图给出了这几个裁剪路径的示例，所用的样式如下（图中的虚线框表示裁剪前原图的外边界）。

```css
.ex01 {clip-path: none;}
.ex02 {clip-path: inset(10px 0 25% 2em);}
.ex03 {clip-path: circle(100px at 50% 50%);}
.ex04 {clip-path: ellipse(100px 50px at 75% 25%);}
.ex05 {clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);}
.ex06 {clip-path: polygon(0 0, 50px 100px, 150px 5px, 300px 150px, 0 100%);}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E4%B8%8D%E5%90%8C%E7%9A%84%E8%A3%81%E5%89%AA%E5%BD%A2%E7%8A%B6.png)从上图可以看出，只有位于裁剪形状内部的元素区域才可见。形状外部的区域消失不见了。不过请注意，裁剪后元素所占的空间不变，好似根本没有裁剪一样。也就是说，裁剪并不会导致元素的尺寸变小。裁剪只是限制具体绘制元素的哪些部分。

<br>

## 3. 裁剪框

与裁剪形状不同，裁剪框不使用长度或百分数指定。多数时候，裁剪框直接对应于盒模型中的边界。

比如说，clip-path: border-box 声明的意思是沿边框的外边界裁剪元素。我们通常见到的就是这种效果，因为外边距是透明的。不过要注意，轮廓在边框的外侧绘制，因此如果沿边框的边界裁剪，轮廓会被剪掉。

单独使用时，margin-box、padding-box 和 content-box 分别在外边距、内边距和内容区域的外边界裁剪元素，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E4%B8%8D%E5%90%8C%E7%9A%84%E8%A3%81%E5%89%AA%E6%A1%86.png)

上图中的另一幅图展示的是 SVG 范围框。

view-box

​	使用最近的 SVG 视区（即最近的祖辈）作为裁剪框。

fill-box

​	使用对象范围框作为裁剪框。对象范围框指能放下元素几何尺寸范围内所有部分的最小框体，包括变形（例如旋转），也不包括外围的描边。

stroke-box

​	使用描边范围框作为裁剪框。描边范围框指能放下元素几何尺寸范围内所有部分的最小框体，包括变形（例如旋转），也包括外围的描边。

<br>

这几个值只适用于没有相应 CSS 布局框的 SVG 元素。对这样的元素来说，如果提供了 CSS 样式框（margin-box、border-box、padding-box、content-box），真正使用的是 fill-box。反过来，如果把 SVG 范围框应用到有 CSS 布局框的元素（多数元素都是如此）上，真正使用的是 border-box。

有时可以只使用裁剪框，例如声明 clip-path: content-box，把内容区以外的部分都剪掉。但是与裁剪形状结合在一起使用更能体现裁剪框的作用。假如我们想把一个 ellipse() 裁剪形状应用到元素上，而且只想保留内边距框外边界以里的部分。此时，为了计算椭圆的长短轴，无需从元素的整体尺寸上减去外边距和边框，只需声明 clip-path: ellipse(50% 50%) padding-box。这个声明把椭圆裁剪形状放在元素的中心，横轴和纵轴半径分别为元素引用框的一半（参见第 10 章），而且能根据其他框体的尺寸做调整，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC10%E7%AB%A0%EF%BC%9A%E6%B5%AE%E5%8A%A8%E5%8F%8A%E5%85%B6%E5%BD%A2%E7%8A%B6/%E6%A0%B9%E6%8D%AE%E4%B8%8D%E5%90%8C%E6%A1%86%E4%BD%93%E7%9A%84%E5%B0%BA%E5%AF%B8%E8%B0%83%E6%95%B4%E6%A4%AD%E5%9C%86%E8%A3%81%E5%89%AA%E5%BD%A2%E7%8A%B6.png)注意，在 margin-box 示例中，椭圆也被剪掉了一部分。这是因为外边距是不可见的，如果有一部分外边距落在椭圆裁剪形状中，那一部分也就看不到了。

有趣的是，范围框关键字只能与裁剪形状一起使用，而不能与基于 SVG 的裁剪路径一起使用。SVG 范围框相关的那几个关键字旨在通过 CSS 裁剪 SVG 图像时才可用。

关于 SVG 裁剪路径，有一点要注意：截至 2017 年年末，路径的所有坐标只能使用绝对单位，而不能声明为图像高度和宽度的百分之几，但是 polygon() 形状可以。有些技术使用 SVG 的 clipPathUnits 属性，有时要 SVG 的 transform 属性配合，可以得到相同的结果。下面举个这样的例子，结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC10%E7%AB%A0%EF%BC%9A%E6%B5%AE%E5%8A%A8%E5%8F%8A%E5%85%B6%E5%BD%A2%E7%8A%B6/%E4%BD%BF%E7%94%A8%E5%8F%AF%E7%BC%A9%E6%94%BE%E7%9A%84%20SVG%20%E8%A3%81%E5%89%AA%E8%B7%AF%E5%BE%84%E8%A3%81%E5%89%AA%E5%9B%BE%E5%83%8F.png)

```html
<clipPath id="hexlike" clipPathUnits="objectBoundingBox">
    <polygon points="0.5 0, 0 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
</clipPath>
```

设为 objectBoundingBox，坐标的值将根据所用的范围框而调整。注意，坐标的值都在 0-1 之间。这样绘制出来的裁剪路径与使用百分数定义的 polygon 形状相比，作用是相同的。使用下述声明也能得到与上图中一样的裁剪形状：

```css
clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
```

<br>

## 4. 裁剪填充规则

与浮动形状一样，SVG 形状的填充方式是可以改变的，即路径交汇时到底创建什么样的裁剪形状。这个行为由 clip-rule 属性控制。

nonzreo 和 evenodd 两种填充方式比较抽象，通过示例更容易理解，如下图所示。

可以看出，图中的五角星是从顶部中间的点开始，用直线把后续各点连接在一起而绘制出来的。nonzero 方式填充五角星内部的所有区域，即便是线条交汇的区域。而 evenodd 留出一部分不填充，所以我们才能透过中间部分看到淡蓝色的渐变。

可问题是，截至 2017 年年末，即便是支持 SVG 裁剪路径的浏览器也不支持这个属性，无论 SVG 是嵌套在 HTML 中还是存在外部文件里。因此，如果想把裁剪路径的形状填充方式设为 evenodd，要么使用 CSS polygon 重现 SVG 路径，要么在 SVG 文件中使用 SVG 的 fill-rule 属性。

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

# 6. 对象填充和定位

还有一种遮罩（算是吧）只适用于置换元素，例如图像。使用 object-fit 属性可以改变置换元素在元素框中填充的方式，或者并不完全填满元素框。

```css
object-fit

取值：fill | contain | cover | scale-down | none
初始值：fill
适用于：置换元素
计算值：声明的值
继承性：否
动画性：否
```

只要用过 background-size 属性，对这些值就不会感到陌生。各值得作用一样，只是对象变成了置换元素。

假如有个大小为 50 ⨉ 50 像素的图像，通过下述 CSS 改变其尺寸：

```css
img {
    width: 250px;
    height: 150px;
}
```

默认情况下，我们预计的结果是 50 ⨉ 50 像素的图像将拉伸成 250 ⨉ 150 像素。如果 object-fit 为默认值，即 fill，结果确实如此。

然而，把 object-fit 改成其他值后，行为会发生变化，如下图所示，所用的 CSS 如下：

```css
img {
    width: 250px;
    height: 150px;
    background: silver;
    border: 3px solid;
}

img:nth-of-type(1) {
    object-fit: none;
}

img:nth-of-type(2) {
    object-fit: fill;
}

img:nth-of-type(3) {
    object-fit: cover;
}

img:nth-of-type(4) {
    object-fit: contain;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E5%A1%AB%E5%85%85%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%9B%9B%E7%A7%8D%E6%96%B9%E5%BC%8F.png)

第一个示例使用的是 none，img 元素为 250 像素宽、150 像素高。然而，图像自身是 50 ⨉ 50 像素，即固有尺寸，这是因为我们设置图像不根据元素框的尺寸做调整。第二个示例使用的是 fill，前面说过，这是默认行为。

第三个示例使用的是 cover，图像将放大，直到元素框中没有空白为止，不过图像的宽高比保持不变。也就是说，放大后的图像还是方形的。在这个示例中，img 元素最长的轴为 250px，因此图像将放大为 250 ⨉ 250 像素。这个 250 ⨉ 250 像素的图像放在 250 ⨉ 150 像素的 img 元素中。

第四个示例使用的是 contain，图像也将放大，不过接触到 img 元素的两个边之后就停止。因此，这个示例中的图像尺寸将变成 150 ⨉ 150 像素，放在 250 ⨉ 150 像素的 img 元素框中。

重申一下，你在上图中看到的是四个 img 元素。外层没有 div 或 span 元素，四周也没有其他元素。边框和背景色都是在 img 元素上设置的。img 元素中的图像根据 object-fit 属性的值调整尺寸。img 元素框就好像是内部图像的简单蒙版一样（因此，可以使用前面介绍的属性遮罩和裁剪元素框）。

object-fit 属性还有第五个值，上图没有给出，即 scale-down。这个值的作用与 none 或 contain 相同，就看哪一个得到的尺寸更小。可见，图像始终为固有尺寸，除非 img 元素太小，才以 contain 方式缩小图像。这个值的效果如下图所示，每个 img 元素下方都标有 height 值，width 值均为 100px。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E4%BD%BF%E7%94%A8%20scale-down%20%E7%9A%84%E4%B8%8D%E5%90%8C%E6%83%85%E5%86%B5.png)

<br>

那么，如果置换元素比元素框大或小，如何控制置换元素在元素框中的对齐方式？答案是使用 object-position 属性。

```css
object-position

取值：<position>
初始值：50% 50%
适用于：置换元素
计算值：声明的值
继承性：否
动画性：是
备注：<position> 与 background-position 属性允许取的值完全一样，行为也相同
```

这个属性的取值句法与 mask-position 或 background-position 一样，作用是在未声明 object-fit: fill 的情况下在元素框中指定置换元素的位置。因此，下述 CSS 将得到如下图所示的结果。

```css
img {
    width: 200px;
    height: 100px;
    background: silver;
    border: 1px solid;
    object-fit: none;
}

img:nth-of-type(2) {
    object-position: top left;
}

img:nth-of-type(3) {
    object-position: 67% 100%;
}

img:nth-of-type(4) {
    object-position: left 142%;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E4%BB%A5%E4%B8%8D%E5%90%8C%E7%9A%84%E6%96%B9%E5%BC%8F%E5%AE%9A%E4%BD%8D%E5%AF%B9%E8%B1%A1.png)

注意，上图中的第一个示例使用的值是 50% 50%。尽管 CSS 规则中没有给出。这表明，object-position 的默认值是 50% 50%。后面两个示例展示了不同的 object-position 值在 img 元素框中移动图像的情况。

最后一个示例表明，可以把未缩放的置换元素（如图像）移到边缘，导致部分区域被元素框剪掉，这与背景图像和蒙版的定位一样，背景图和蒙版也有可能在元素的边缘裁剪。

调整过尺寸的置换元素，如果变得比元素框大，例如声明了 objecy-fit: cover，也能定位，不过结果与声明 object-fit: none 时差别很大。下述 CSS 将得到如下图所示的结果：

```css
img {
    width: 200px;
    height: 100px;
    background: silver;
    border: 1px solid;
    object-fit: cover;
}

img:nth-of-type(2) {
    object-position: top left;
}

img:nth-of-type(3) {
    object-position: 67% 100%;
}

img:nth-fo-type(4) {
    object-position: left 142%;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC19%E7%AB%A0%EF%BC%9A%E6%BB%A4%E9%95%9C%E3%80%81%E6%B7%B7%E5%90%88%E3%80%81%E8%A3%81%E5%89%AA%E5%92%8C%E9%81%AE%E7%BD%A9/%E5%AE%9A%E4%BD%8D%E9%87%87%E7%94%A8%E8%A6%86%E7%9B%96%E6%96%B9%E5%BC%8F%E8%B0%83%E6%95%B4%E5%B0%BA%E5%AF%B8%E7%9A%84%E5%AF%B9%E8%B1%A1.png)

如果你对这些结果有疑惑，请阅读 9.2.4 节的详细说明。

































​                                                               
