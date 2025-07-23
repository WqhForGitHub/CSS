# 1. 缩进和行内对齐

首先讨论如何控制文本在一行内的位置。这些操作在攥写新闻稿或报告时经常用到。

不过，在此之前要先明确行内和块级两个术语，因为本章将多次用到。其实，反过来讲更好理解。如果你主要使用某种西方语言，那么块级方向是指从上到下，而行内方向是从左至右。下面为这两个术语下更严格的定义。

块级方向指当前书写模式放置块级元素的方向。比如说，在英语中，块级方向从上到下，或者说是纵向的，例如一个段落（或其他文本元素）放在另一个段落的下面。

行内方向指块级元素中行内元素的书写方向。还以英语为例，行内方向从左至右，或者说是横向的。对阿拉伯语和希伯来语等语言来说，行内方向从右至左。

再看英语。正常情况下，一页英文内容的屏幕上显示时块级方向是纵向的，行内方向是横向的。但是，如果使用 css 变形属性把页面旋转 90 度，那么块级方向就变成了横向，而行内方向变成了纵向（从下到上）。

2017 年出现了相对较新的内容和布局方式，之前的旧布局语言极度依赖横向和纵向这两个概念，不过人们正在转变。本章的后续内容会尽量使用块级方向和行内方向这样的称呼，不过可能会夹杂着部分纵向和横向，敬请谅解。

<br>

## 1. 缩进文本

使用西方语言攥写的书，多数再排版时会缩进一段的第一行，而且段落之间没有空行。以前，一些网站为了让人以为文本有缩进，会在一段的第一个字母前放一个小的透明图像，把文本向后推。css 为缩进文本提供了一种更好的解决方法：text-indent 属性。

```css
text-indent

取值：<length> | <percentage>
初始值：0
适用于：块级元素
百分数：相对于所在块级元素的宽度
计算值：百分数如上，长度值得到绝对长度
继承性：是
动画性：是
```

text-indent 属性把元素的第一行文本缩进指定的长度，缩进的长度可以是负值。这个属性通常用于缩进段落的第一行：

```css
p {
    text-indent: 3em;
}
```

这个规则把段落的第一行缩进 3em，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E6%96%87%E6%9C%AC%E7%BC%A9%E8%BF%9B.png)

text-indent 属性可以用在任何块级元素上，缩进将沿着行内方向展开。text-indent 属性不能用于行内元素或置换元素（如图像）。然而，如果图像在块级元素的第一行里，它将随行中的其他文本一起后移。

>如果想缩进行内元素的首行，可以通过内边距或外边距实现。

text-indent 属性的值可以是负值，这样可以实现一些有趣的效果。最常见的用法是实现悬挂缩进，即首行相比元素的其他内容悬挂在一边。

```css
p {
    text-indent: -4em;
}
```

使用负值时要小心，以防前几个词被浏览器窗口的边缘吃掉。为免出现这种显示问题，建议加上外边距或内边距：

```css
p {
    text-indent: -4em;
    padding-left: 4em;
}
```

不过，负缩进也有其优势，比如说，下面这个例子在文本外显示一个浮动的图像，如下图所示：

```css
p.hang {
    text-indent: -25px;
}
```

```html
<img src="star.gif" style="width: 60px; height: 60px; float: left;" alt="An image of a five-pointed start." />
<p class="hang"> This paragraph has a negatively indented first line, which overlaps the floated image that preceded the text. Subsequent lines do not overlap the image, since they are not indented in any way.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%BD%BF%E7%94%A8%E8%B4%9F%E5%80%BC%E6%96%87%E6%9C%AC%E7%BC%A9%E8%BF%9B%E6%B7%BB%E5%8A%A0%E6%B5%AE%E5%8A%A8%E7%9A%84%E5%9B%BE%E5%83%8F.png)

使用这种方法可以实现多种有趣的设计效果。

>这种效果，即让文本沿着浮动图像的边缘显示，使用 css 浮动形状技术实现更可靠。详情参见第 10 章。

text-indent 属性的值可以使用任何长度单位，包括百分数。在下述示例中，百分数相对父元素的宽度计算缩进量。也就是说，如果把缩进量设为 10%，受其影响的元素额首行缩进的量为父元素宽度的 10%，如下图所示。

```css
div {
    width: 400px;
}

p {
    text-indent: 10%;
}
```

```html
<div>
    <p>This paragraph is contained inside a DIV, which is 400px wide, so the
    first line of the paragraph is indented 40px (400 * 10% = 40).  This is
    because percentages are computed with respect to the width of the element.</p>
</div>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%BD%BF%E7%94%A8%E7%99%BE%E5%88%86%E6%95%B0%E8%AE%BE%E5%AE%9A%E6%96%87%E6%9C%AC%E7%BC%A9%E8%BF%9B.png)

注意，文本缩进只影响元素的第一行，即便有换行也是如此。text-indent 会继承，因此可能会出现预料之外的效果。例如，下述规则和标记得到的结果如下图所示。

```css
div#outer {
    width: 500px;
}

div#inner {
    text-indent: 10%;
}

p {
    width: 200px;
}
```

```html
<div id="outer">
    <div id="inner">
    This first line of the DIV is indented by 50 pixels.
    <p>
    This paragraph is 200px wide, and the first line of the paragraph
    is indented 50px.  This is because computed values for <code>text-indent</code>
    are inherited, instead of the declared values.
    </p>
    </div>
</div>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E7%BB%A7%E6%89%BF%E7%9A%84%E6%96%87%E6%9C%AC%E7%BC%A9%E8%BF%9B.png)

<br>

## 2. 文本对齐

text-align 比 text-indent 还基础，它控制元素中各文本行的对齐方式。

```css
text-align

取值：start | end | left | right | center | justify | match-parent | start end
初始值：在 css3 中是 start。在 css2.1 中，由用户代理指定，有可能根据书写方向而定（例如，英语等西方语言是 left）
适用于：块级元素
计算值：指定的值，match-parent 除外
继承性：是
动画性：否
备注：css2 支持使用 <length> 值，但由于缺少实现，css 2.1 将其删掉了
```

通过下图就能看出目前支持范围最广的三个值的效果。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/text-align%20%E5%B1%9E%E6%80%A7%E9%83%A8%E5%88%86%E5%8F%96%E5%80%BC%E7%9A%84%E8%A1%8C%E4%B8%BA.png)

left、right 和 center 三个值的作用从字面就能看出。text-align 只能用于块级元素（如段落），因此，无法让锚记独立于行中的其他内容而居中显示（你或许也不会想这么做，以免文本重叠）。

在 css 2.1 中，对从左至右书写的语言，text-align 的默认值是 left，从右至左书写的语言默认值为 right（css2.1 没有纵向书写模式的概念）。在 css3 中，对纵向书写的语言，left 和 right 分别对应起边和终边，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E7%BA%B5%E5%90%91%E4%B9%A6%E5%86%99%E6%A8%A1%E5%BC%8F%E4%B8%AD%E7%9A%84%E5%B7%A6%E5%AF%B9%E9%BD%90%E3%80%81%E5%8F%B3%E5%AF%B9%E9%BD%90%E5%92%8C%E5%B1%85%E4%B8%AD%E5%AF%B9%E9%BD%90.png)

毫无疑问，center 使元素中的各行文本居中对齐。你可能以为 text-align: center 的作用与 `<CENTER>` 元素一样，其实不然。`<CENTER>` 不仅影响文本，还能把整个元素（如表格）居中显示，而 text-align 不控制元素的对齐方式，只影响元素中的内容，上图以不同的书写模式为例清楚地说明这一点。

<br>

### 起边和终边对齐

css3 为 text-align 属性增加了一些值，而且还修改了 css2.1 规定的默认值。

新的默认值是 start，意思是文本与元素所在行框的起边对齐。在从左至右书写的语言中（如英语），起边是左边。在从右至左书写的语言中（如阿拉伯语），起边是右边。在竖写语言中，根据具体的书写方向，可能是顶边或底边。这样规定的最终效果是，默认值支持更多语言书写方向，而在目前已知的情况下，大多数时候默认的行为都是一致的。

类似地，end 把文本与行框的终边对齐。在从左至右书写的语言中，终边是右边。在从右至左书写的语言中，终边是左边，以此类推。这些值得效果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E8%B5%B7%E8%BE%B9%E5%92%8C%E7%BB%88%E8%BE%B9%E5%AF%B9%E9%BD%90.png)

<br>

### 两端对齐

justify 对齐方式经常被人忽视，不过它自身也有一些问题。两端对齐的文本，一行的两端都与父元素的边界对齐，单词和字母之间的空白会做调整，从而保证每一行的长度完全一致，如下图所示。印刷品（例如这本书）经常使用两端对齐，在 css 中使用时要多考虑一些方面。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%A4%E7%AB%AF%E5%AF%B9%E9%BD%90.png)

两端对齐的文本要经过拉伸，正好占满父元素左右边界之间的空间。至于如何拉伸，是有用户代理决定的，而跟 css 没有关系（至少截至 2017 年年末是这样）。例如，有些浏览器只在单词之间添加额外的空白，而有些则可能还会在字母之间添加额外的空白（不过，css 规范规定，如果为 letter-spacing 属性设定了长度值，用户代理不应该增加或减少字符之间的间距）。有些用户代理可能会减少部分行中的空白，把文本挤在一起。这些情况将影响元素的外观，甚至可能改变元素的高度，当然这取决于用户代理调整了多少行文本。

>有个属性能更好地控制如何调整文本：text-justify。截至 2017 年年末，基本没有浏览器支持这个属性，firefox 计划支持，chrome 正在试验，不过有些问题。

<br>

### 与父元素一样

还有一个值未介绍：match-parent。浏览器不支持这个值，它的作用基本上被 inherit 涵盖了。text-align: match-parent 声明的作用是让元素的对齐方式与父元素保持一致。

目前看来，它的作用与 inherit 完全一样，不过二者是有区别的：如果父元素的对齐方式设为 start 或 end，match-parent 将把计算得到的 left 或 right 赋予元素。inherit 则不然，应用到元素上的就是 start 或 end。

>严格来说，截至 2017 年年末，start end 也是 text-align 的一个取值，但是这里并未说明，因为它尚未实现，以后的规范可能会被将其删除。

<br>

## 3. 对齐最后一行

有时，你可能想使用不同于其他内容的方式对齐元素的最后一行。例如，在两端对齐的文本块中，可能想左对齐最后一行，或者把左对齐换成居中对齐。此时，可以使用 text-align-last 属性。

```css
text-align-last

取值：auto | start | end | left | right | center | justify
初始值：auto
适用于：块级元素
计算值：指定的值
继承性：是
动画性：否
```

与 text-align 一样，从下图中就能看出这些值的作用。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E6%9C%80%E5%90%8E%E4%B8%80%E8%A1%8C%E4%B8%8D%E5%90%8C%E7%9A%84%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F.png)

如上图所示，元素的最后一行与其他内容的对齐方式不同，具体如何对齐由 text-align-last 属性决定。

仔细看上图，你会发现，除了块级元素的最后一行之外，还有其他行也受这个属性影响。其实，只要一行后面有强制换行，不管是不是在元素的末尾，都受 text-align-last 属性的控制。因此，如果换行是由 `<br>` 标签导致的，那么前面那一行的对齐方式将使用 text-align-last 的值。当然，块级元素的最后一行也受这个属性控制，因为此处的换行是由元素的结尾导致的。

text-align-last 有个有趣的现象：如果元素的第一行也是最后一行，text-align-last 的优先级比 text-align 高。因此，下述样式将把段落居中对齐，而不是靠起边对齐：

```css
p {
    text-align: start;
    text-align-last: center;
}
```

```html
<p>A paragraph.</p>
```

>截至 2017 年年末，safari 和 opera mini 不支持 text-align-last，Internet Explorer 和 edge 只支持 left、right 和 center 三个值。

<br>

# 2. 块级对齐

讲完沿行内方向的对齐方式之后，下面转到纵向对齐上，即沿着块级方向的对齐方式，如上标和纵向对齐（纵向的前提是文本行横向排列）。行的构成是十分复杂的话题，可能要专写一本书，这里只做简要介绍。

## 1. 行的高度

行之间的距离受行的高度影响。注意，这里所说的高度是相对行而言的，假设长轴是宽度方向，即便文本行是竖写的。从现在开始，讲到的属性名称都偏向西方语言及其书写方向，这是早期 css 的人为约定，因为那时只有西方语言能轻易表示出来。

line-height 属性指行的基线之间的距离，与字号无关，决定着元素所在方框的高度是增还是减。很多时候，我们都以为通过 line-height 能增加（或减少）行之间的纵向空间。这其实是一种误解，没有完全理解 line-height 的工作方式。line-height 控制的是行距，是除字体高度之外在文本行上方的额外空间。也就是说，line-height 的值与字体高度之差就是行距。

```css
line-height

取值：<number> | <length> | <percentage> | normal
初始值：normal
适用于：所有元素（不过请参考关于置换元素和块级元素的说明）
百分数：相对于元素的字号
计算值：长度和百分数，得到绝对值。否则，是指定的值
继承性：是
动画性：是
```

对块级元素而言，line-height 定义元素中文本行基线之间的最小距离。注意，定义的是最小距离，不是定死的值，基线之间的距离可能比 line-height 的值大。line-height 不影响置换元素的布局，但是依然应用到置换元素上。

<br>

### 行的构成

文本行中的每个元素构成一个内容区，其高度由字体的高度决定。随内容区出现的是一个行内框，如果不考虑其他因素，其高度与内容区完全相等。line-height 导致的行距是影响行内框高度的因素之一。

元素的行距等于 font-size 的计算结果减去 line-height 的计算结果。这个值是行距的总值。注意，行距可能为负数。行距分为两半，分别放到内容区的上部和下部。算上行距，得到的就是元素的行内框。

举个例子。假设 font-size 是 14 像素（因此内容区也是这么高），line-height 的计算结果为 18 像素。二者之差（4 像素）分成两半，分别放到内容区的上部和下部。因此，行内框的高度为 18 像素，内容区上部和下部分别多出 2 像素。看起来用这种方法描述 line-height 的工作方式好像绕了弯子，不过是有充分理由的。

确定一行内容的全部行内框之后，行框也就确定了。行框恰好包围最高那个行内框的顶端和最低那个行内框的底端。整个过程如下图所示。

<br>

### line-height 的值

下面说明 line-height 属性的取值。使用默认值 normal 时，行之间的空间由用户代理计算。不同的用户代理计算出来的值可能不同，不过一般都是字体高度的 1.2 倍左右，因此行框的高度要比元素的 font-size 值大一些。

line-height 的值可以是长度量（如 18px 或 2em），不过多数情况下首选纯数字。注意，即使使用有效的长度量，例如 4cm，浏览器（或操作系统）使用的具体量也可能与实际不同，因此元素在显示器上显示的高度可能并不是四厘米。

em、ex 和百分数相对元素的 font-size 值计算。下述 css 和 html 得到的结果如下图所示：

```css
body {
    line-height: 18px;
    font-size: 16px;
}

p.cl1 {
    line-height: 1.5em;
}

p.cl2 {
    font-size: 10px;
    line-height: 150%;
}

p.cl3 {
    line-height: 0.33in;
}
```

```html
<p>This paragraph inherits a 'line-height' of 18px from the body, as well as 
a 'font-size' of 16px.</p>
<p class="cl1">This paragraph has a 'line-height' of 27px(18 * 1.5), so 
it will have slightly more line-height than usual.</p>
<p class="cl2">This paragraph has a 'line-height' of 15px (10 * 150%), so 
it will have slightly more line-height than usual.</p>
<p class="cl3">This paragraph has a 'line-height' of 0.33in, so it will have 
slightly more line-height than usual.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/line-height%20%E5%B1%9E%E6%80%A7%E6%B6%89%E5%8F%8A%E7%AE%80%E5%8D%95%E7%9A%84%E8%AE%A1%E7%AE%97.png)

<br>

### 行高的继承

块级元素之间继承的行高有点复杂。从父元素继承 line-height 值时，根据父元素的字号计算，而不根据子元素计算。下述样式和标记的结果如下图所示，结果可能与创作人员设想的不一样：

```css
body {
    font-size: 10px;
}

div {
    line-height: 1em; /* 计算结果为 10px */
}

p {
    font-size: 18px;
}
```

```html
<div>
<p>This paragraph's 'font-size' is 18px, but the inherited 'line-height' 
value is only 10px.  This may cause the lines of text to overlap each 
other by a small amount.</p>
</div>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E8%A1%8C%E9%AB%98%E5%B0%8F%E3%80%81%E5%AD%97%E5%8F%B7%E5%A4%A7%2C%20%E9%97%AE%E9%A2%98%E6%9D%A5%E4%BA%86.png)

这几行为什么如此贴近？因为计算得到的 line-height 值 10px 是段落继承自父元素 div 的。对上图中这样行高太小的问题，一种解决方法是为每个元素设定 line-height，但是这样做不太灵活。更好的方法是使用纯数字，即设定一个换算系数：

```css
body {
    font-size: 10px;
}

div {
    line-height: 1;
}

p {
    font-size: 18px;
}
```

使用纯数字时，继承的将是设定的换算系数，而不是计算得到的值。纯数字将应用到当前元素及其所有子元素上，因此各元素的行高将根据自身的字号计算（见下图）。

```css
div {
    line-height: 1.5;
}

p {
    font-size: 18px;
}
```

```html
<div>
<p>This paragraph's 'font-size' is 18px, and since the 'line-height' 
set for the parent div is 1.5, the 'line-height' for this paragraph
is 27px (18 * 1.5).</p>
</div>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E6%8A%8A%20line-height%20%E8%AE%BE%E4%B8%BA%E7%BA%AF%E6%95%B0%E5%AD%97%EF%BC%88%E6%8D%A2%E7%AE%97%E7%B3%BB%E6%95%B0%EF%BC%89%EF%BC%8C%E8%A7%A3%E5%86%B3%E7%BB%A7%E6%89%BF%E9%97%AE%E9%A2%98.png)

设定 line-height 后，看起来额外的空间是平均增加到文本行的上部和下部的，但其实，额外的空间是增加到行内元素的内容区上部和下部的（或从内容区上部和下部减去），最终得到行内框。假设段落的默认字号为 12pt，对下述规则来说：

```css
p {
    line-height: 16pt;
}
```

因为 12 点高的文本继承的行高是 12 点，所以上述规则将在段落中的每一行上下增加高为 4 点的空间。这部分空间一分为二，分别放到每一行的上部和下部。现在，基线之间的距离是 16 点，这是分配额外空间的间接结果。

如果把 line-height 的值设为 inherit，元素的行高将变成父元素行高的计算值。其实，这与让行高值自然继承没有什么区别，只不过特指度和层叠解析会受影响。

基本了解行的构成之后，下面讨论相对行框的纵向对齐方式，即沿块级方向排列元素的方式。

<br>

## 2. 纵向对齐文本

如果用过 sup 和 sub（上标和下标）元素，或者用过 `<img src="foo.gif" align="middle">` 这样的标记，那么你就用过一些基本的纵向对齐方式。css 中的 vertical-align 属性只能用于行内元素和置换元素（例如图像和表单输入框）。vertical-align 属性不继承。

>鉴于这个属性的名称是 vertical-align，本节将使用纵向和横向指代块级方向和行内方向。

```css
vertical-align

取值：baseline | sub | super | top | text-top | middle | bottom | text-bottom | <length> | <percentage>
初始值：baseline
适用于：行内元素和单元格
百分数：相对元素的 line-height 值
计算值：百分数和长度值，得到绝对长度，否则是指定的值
继承性：否
动画性：<length>、<percentage>
备注：用在单元格上时，只能取 baseline、top、middle 和 bottom
```

vertical-align 的值可以是八个关键字中的一个、百分数或长度值。关键字中有熟悉的，也有不熟悉的：baseline（默认值）、sub、super、bottom、text-bottom、middle、top 和 text-top。下面说明各关键字应用到行内元素上的效果。

>注意，vertical-align 不影响块级元素中文本的对齐方式。不过，vertical-align 可以控制单元格中元素的纵向对齐方式。

<br>

### 基线对齐

vertical-align: baseline 强制元素的基线与父元素的基线对齐。多数时候，浏览器都是这么做的，因为正常情况下一行中所有文本元素的底端应该对齐。

如果目标元素没有基线，例如图像、表单输入框或其他置换元素，元素的底端与父元素的基线对齐，如下图所示。

```css
img {
    vertical-align: baseline;
}
```

```html
<p>The image found in this paragraph <img src="dot.gif" alt="A dot" /> has its 
bottom edge aligned with the baseline of the text in the paragraph.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E6%B2%BF%E5%9F%BA%E7%BA%BF%E5%AF%B9%E9%BD%90%E5%9B%BE%E5%83%8F.png)

这个规则很重要，一些 web 浏览器始终把置换元素的底边放在基线上，即便行中没有其他文本也是如此。举个例子。假如一个单元格中只有一个图像，那个图像会放在基线上。然而在某些浏览器中，基线下方有一点空间，从而导致图像下方出现间隙。其他浏览器把图像紧贴着单元格的边界放置，因此没有间隙。有间隙是对的，不过多数创作人员不在乎。

>如果想进一步了解这个间隙及其解决方法，请阅读 Images，Tables，and Mysterious Gaps（http://mzl.la/19E2dJ7）。这篇文章虽然有些年头了，但是依然有参考价值。

<br>

### 上标和下标

vertical-align: sub 把元素放在下标处，即元素的基线（对置换元素来说是底边线）低于父元素的基线。规范没有定义下沉的距离，因此在不同用户代理中可能不同。

super 的作用与 sub 相反，让元素的基线（或置换元素的底边线）高于父元素的基线。同样，高出多少距离由用户代理决定。

注意，sub 和 super 不改变元素的字号，因此下表和上标中的文本不会变小（或变大）。下标和上标中的文本默认情况下与父元素的字号相等，如下图所示。

```css
span.raise {
    vertical-align: super;
}

span.lower {
    vertical-align: sub;
}
```

```html
<p>This paragraph contains <span class="raise">superscripted</span>
and <span class="lower">subscripted</span>  text.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%8A%E6%A0%87%E5%92%8C%E4%B8%8B%E6%A0%87.png)

>如果确实想让上标和下标中的文本比父元素中的文本小，可以使用 font-size 属性。

<br>

### 底端对齐

vertical-align: bottom 把元素所在行内框的底边与行框的底边对齐。例如，下述标记的结果如下图所示：

```css
.feeder {
    vertical-align: bottom;
}
```

```html
<p>This paragraph, as you can see quite clearly, contains 
a <img src="tall.gif" alt="tall" class="feeder" /> image and 
a <img src="short.gif" alt="short" class="feeder" /> image, 
and then some text which is not tall.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E5%BA%95%E7%AB%AF%E5%AF%B9%E9%BD%90.png)

上图中那个段落的第二行里面两个行内元素，它们的底边是对齐的，而且都低于文本的基线。

vertical-align: text-bottom 相对行中文本的底边对齐。鉴于此，对齐时不考虑置换元素或其他非文本元素，而是基于默认的文本框。默认的文本框由父元素的字号确定。目标元素的行内框与默认文本框的底边对齐。因此，下述标记的结果如下图所示：

```css
img.tbot {
    vertical-align: text-bottom;
}
```

```html
<p>Here: a <img src="tall.gif" style="vertical-align: middle;" alt="tall " /> 
image, and then a <img src="short.gif" class="tbot" alt="short " /> image.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%8E%E6%96%87%E6%9C%AC%E7%9A%84%E5%BA%95%E7%AB%AF%E5%AF%B9%E9%BD%90.png)

<br>

### 顶端对齐

vertical-align: top 的作用与 bottom 相反。同样，vertical-align: text-top 的作用与 text-bottom 相反。下述标记的渲染结果如下图所示：

```css
.up {
    vertical-align: top;
}

.textup {
    vertical-align: text-top;
}
```

```html
<p>Here: a <img src="tall.gif" alt="tall image"> tall image,  and then
<span class="up">some text</span> that's been vertically aligned.</p>
<p>Here: a <img src="tall.gif" class="textup" alt="tall"> image that's been vertically aligned, 
and then a <img src="short.gif" class="textup" alt="short" /> image that's similarly aligned.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%8E%E4%B8%80%E8%A1%8C%E7%9A%84%E9%A1%B6%E7%AB%AF%E5%92%8C%E6%96%87%E6%9C%AC%E7%9A%84%E9%A1%B6%E7%AB%AF%E5%AF%B9%E9%BD%90.png)

对齐后元素的具体位置取决于行中有什么元素、元素有多高，以及父元素的字号。

<br>

### 中线对齐

middle 这个值通常（不是始终）用在图像上。它的作用与字面意思不完全一样。middle 把行内元素所在方框的中线与父元素基线向上偏移 0.5ex 处的线对齐（1ex 等于父元素的 font-size）。详情参见下图。

多数用户代理把 1ex 视作半个 em，因此 middle 通常把元素的纵向中点与父元素基线向上偏移 1/4 em 处的点对齐。但这不是规范定义的距离，所以子啊不同的浏览器中向上偏移的量可能不同。

<br>

### 百分数

百分数不能像 align="middle" 那样对齐图像。把 vertical-align 的值设为百分数，效果是把元素的基线（或置换元素的底边）相对父元素的基线抬升或下沉指定的量（指定的百分数相对元素自身而非父元素的 line-height 计算）。正百分数可能会出现在相邻的行上（见下图），因此使用百分数时要小心。

```css
sub {
    vertical-align: -100%;
}

sup {
    vertical-align: 100%;
}
```

```html
<p>We can either <sup>soar to new heights</sup> or , instead, 
<sub>sink into despair...</sub></p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%AD%E7%BA%BF%E5%AF%B9%E9%BD%90%E7%9A%84%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E.png)

下面分析百分数的计算过程。以下述标记为例：

```html
<div style="font-size: 14px; line-height: 18px;">
    I felt that, if nothing else, I deserved a 
    <span style="vertical-align: 50%;">raise</span> for my efforts.
</div>
```

span 元素的 vertical-align 值为 50%，即抬升 9 像素，这是 span 元素继承的行高（18px）的一半。注意，抬升的值不是 font-size 的一半，即不是 7 像素。

<br>

### 长度值

最后，分析设为长度值时的纵向对齐方式。此时，vertical-align 的效果很简单：把元素抬升或下沉声明的距离。因此，vertical-laign: 5px。把元素从原位置向上抬升 5 像素。长度值为负时，下沉元素。这种简单的对齐方式在 css1 中没有，是在 css2 中增加的。

注意，纵向抬升或下沉的文本不会变成其他行的一部分，也不会与其他行中的文本重叠。如下图所示，有部分纵向抬升的文本出现在段落中间：

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E7%BA%B5%E5%90%91%E5%AF%B9%E9%BD%90%E5%8F%AF%E8%83%BD%E5%AF%BC%E8%87%B4%E8%A1%8C%E5%8F%98%E9%AB%98.png)

可以看出，纵向对齐的元素可能影响行的高度。还记得吗，行框恰好包围最高那个行内框的顶端和最低那个行内框的底端。这包括因纵向对齐而抬升或下沉的行内框。

<br>

# 3. 单词间距和字符间距

讲完行内元素的纵向对齐方式之后，回到行内方向，说明单词间距和字符间距。与之前一样，这些属性也有一些异于直觉的行为。

## 1. 单词间距

word-spacing 属性的值为长度，可正可负。指定的长度值追加到单词的标准间距上。其实，word-spacing 属性用于修改单词之间的距离。因此，默认值 normal 等同于把值设为零（0）。

```css
word-spacing

取值：<length> | normal
初始值：normal
适用于：所有元素
计算值：normal 的结果是绝对长度 0。否则为指定的具体长度
继承性：是
动画性：是
```

设为正长度值时，单词之间的距离增加。设为负值时，单词之间靠地更近：

```css
p.spread {
    word-spacing: 0.5em;
}

p.tight {
    word-spacing: -0.5em;
}

p.base {
    word-spacing: normal;
}

p.norm {
    word-spacing: 0;
}
```

```html
<p class="spread">The spaces between words in this paragraph will be increased by 0.5em.</p>
<p class="tight">The spaces between words in this paragraph will be decreased by 0.5em.</p>
<p class="base">The spaces between words in this paragraph will be normal.</p>
<p class="norm">The spaces between words in this paragraph will be normal.</p>
```

上述规则的效果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%BF%AE%E6%94%B9%E5%8D%95%E8%AF%8D%E4%B9%8B%E9%97%B4%E7%9A%84%E8%B7%9D%E7%A6%BB.png)

目前，我还没有给出单词的准确定义。用最简单的 css 术语来说，单词是指两侧某种空白的非空白字符构成的字符串。这样定义没有具体的语义，只是假设文档中有诸多单词，单词两侧有一个或多个空白字符。支持 css 的用户代理无法得知在具体的语言中哪些是有效的单词，哪些不是。尽管这个定义没有多大意义，不过却表明 word-spacing 不能用于象形文字或非罗马书写体。这个属性可能导致文档难以阅读，如下图所示。因此，使用时要小心。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E7%89%B9%E5%88%AB%E5%AE%BD%E7%9A%84%E5%8D%95%E8%AF%8D%E9%97%B4%E8%B7%9D.png)

<br>

## 2. 字符间距

word-spacing 属性的很多问题在 letter-spacing 属性上也有体现。这两个属性之间唯一的区别是，letter-spacing 属性修改的是字符或字母之间的距离。

```css
letter-spacing

取值：<length> | normal
初始值：normal
适用于：所有元素
计算值：长度值得到绝对长度，否则是 normal
继承性：是
动画性：是
```

与 word-spacing 属性一样，letter-spacing 属性允许取任何长度值。默认值是关键字 normal（等同于 letter-spacing: 0）。指定的长度值将把字符之间的距离增加或减少指定的量。下图展示的是下述标记的结果：

```css
p {
    letter-spacing: 0; /* 与 normal 的效果完全一样 */
}

p.spacious {
    letter-spacing: 0.25em;
}

p.tight {
    letter-spacing: -0.25em;
}
```

```html
<p>The letters in this paragraph are spaced as normal.</p>
<p class="spacious">The letters in this paragraph are spread out a bit.</p>
<p class="tight">The letters in this paragraph are smooshed together a bit.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%8D%E5%90%8C%E7%9A%84%E5%AD%97%E7%AC%A6%E9%97%B4%E8%B7%9D.png)

letter-spacing 可以突出强调效果，这个技术可谓历史悠久。你可能会编写下述声明，得到如下图所示的效果：

```css
strong {
    letter-spacing: 0.2em;
}
```

```html
<p>This paragraph contains <strong>strongly emphasized text</strong> 
which is spread out for extra emphasis.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%BD%BF%E7%94%A8%20letter-spacing%20%E7%AA%81%E5%87%BA%E5%BC%BA%E8%B0%83%E6%95%88%E6%9E%9C.png)

>如果使用的字体带连字特性，而且启用了，调整字符间距或单词间距可能导致这个特性失效。比如说，调整字符间距后，浏览器不会重新计算连字或其他连接。

<br>

## 3. 对齐方式对间距的影响

word-spacing 的值可能会受 text-align 的值影响。如果元素的两端对齐的，为了让文本占满整行的宽度，可能要调整字符和单词之间的距离。鉴于此，创作人员声明的 word-spacing 值可能也要被调整。如果 letter-spacing 的值是长度，不受 text-align 的影响。但是，如果 letter-spacing 的值是 normal，为了使文本两端对齐，可能要修改字符之间的距离。css 未指明如何调整距离，因此用户代理可以采用自认为恰当的算法。

注意，继承的是计算得到的值，因此不管子元素的文本大了还是小了，字符间距都与父元素一样。word-spacing 和 letter-spacing 的值不能是换算系数，因此继承的值只能是经计算得到的值，而不能是换算系数（像 line-height 那样）。因此，你可能会遇到如下图所示的问题：

```css
p {
    letter-spacing: 0.25em;
    font-size: 20px;
}

small {
    font-size: 50%;
}
```

```html
<p>This spacious paragraph features <small>tiny text which is just 
as spacious</small>, even though the author probably wanted the 
spacing to be in proportion to the size of the text.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E7%BB%A7%E6%89%BF%E7%9A%84%E5%AD%97%E7%AC%A6%E9%97%B4%E8%B7%9D.png)

为了让字符间距与文本的大小成比例，只能分别单独设定，如下所示。

```css
p {
    letter-spacing: 0.25em;
}

small {
    font-size: 50%;
    letter-spacing: 0.25em;
}
```

<br>

# 4. 文本转换

讲完各个对齐属性之后，下面介绍如何使用 text-transform 属性转变文本的大小写。

```css
text-transform

取值：uppercase | lowercase | capitalize | none
初始值：none
适用于：所有元素
计算值：指定的值
继承性：是
动画性：否
```

默认值 none 不对文本做任何修改，大小写形式与源文档一样。uppercase 和 lowercase 的作用与字面意思一样，分别把文本转换成大写和小写字母。最后一个值 capitalize 只把各单词的首字母变成大写。下图展示了这些值的效果。

```css
h1 {
    text-transform: capitalize;
}

strong {
    text-transform: uppercase;
}

p.cummings {
    text-transform: lowercase;
}

p.raw {
    text-transform: none;
}
```

```html
<h1>The heading-one at the beginninG</h1>
<p>
By default, text is displayed in the capitalization it has in the source 
document, but <strong>it is possible to change this</strong> using 
the property 'text-transform'.
</p>
<p class="cummings">
For example, one could Create TEXT such as might have been Written by 
the late Poet E.E.Cummings.
</p>
<p class="raw">
If you feel the need to Explicitly Declare the transformation of text
to be 'none', that can be done as well.
</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%8D%E5%90%8C%E7%9A%84%E6%96%87%E6%9C%AC%E8%BD%AC%E6%8D%A2%E6%96%B9%E5%BC%8F.png)

不同的用户代理可能以不同的方式确定单词的起点，因此哪些字母会变成大写取决于用户代理。因此，上图中 h1 元素里的文本 heading-one 可能会渲染成两种形式：Heading-one 或 Heading-One。css 没有规定哪种是正确的，因此两种形式都有可能出现。

此外，你可能注意到了，上图中那个 h1 元素的最后一个字母依然是大写的。这是正确的行为，把 text-transform 设为 capitalize 时，css 只要求用户代理确保各单词的首字母是大写的，而不管余下的字母。

text-transform 属性看似作用不大，但是如果突然决定把所有 h1 元素中的文本都变成大写，就会发现它特别有用。此时，无需一个个修改 h1 元素的内容，把工作交给 text-transform 属性就行了：

```css
h1 {
    text-transform: uppercase;
}
```

```html
<h1>This is an H1 element.</h1>
```

使用 text-transform 的好处有两个。其一，只需编写一个规则就能实现所需的改动，不用自己动手修改 h1 元素自身。其二，如果后来又想把大写改成最初的形式，也十分方便，如下图所示。

```css
h1 {
    text-transform: capitalize;
}
```

```html
<h1>This is an H1 element</h1>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E8%BD%AC%E6%8D%A2%20h1%20%E5%85%83%E7%B4%A0%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99.png)

注意，capitalize 的作用是替换每个单词开头的那个字母。标题常用的大小写约定，例如冠词（a an the）小写，不会得以保留。

<br>

# 5. 文本装饰

接下来介绍 text-decoration，这个属性很吸引人，能实现很多有趣的后果。

```css
text-decoration

取值：none | [ underline || overline || line-through || blink ]
初始值：none
适用于：所有元素
计算值：指定的值
继承性：否
动画性：否
```

你可能猜到了，underline 为元素添加下划线，就像 旧时 HTML 中的 U 元素一样。overline 的作用相反，在文本的上方绘制一条线。line-through 绘制一条贯穿文本中部的线，这也叫删除线，等价于 HTML 中的 S 和 strike 元素。blink 让文本一闪一闪，类似于 Netscape 中备受非议的 blink 标签。下图展示了这些值的效果。

```css
p.emph {
    text-decoration: underline;
}

p.topper {
    text-decoration: overline;
}

p.old {
    text-decoration: line-through;
}

p.annoy {
    text-decoration: blink;
}

p.plain {
    text-decoration: none;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%8D%E5%90%8C%E7%9A%84%E6%96%87%E6%9C%AC%E8%A3%85%E9%A5%B0%E6%95%88%E6%9E%9C.png)

>印刷品中无法展示 blink 的效果，然而不难想象（太容易不过）。顺便说一下，用户代理不一定会闪烁以 blink 装饰的文本。写作本书时，所有已知用户代理要么计划放弃支持，要么已经不支持闪烁效果（Internet Explorer 从未支持过）。

none 值把应用到元素上的装修效果去掉。通常，无装饰的文本以默认的外观显示，不过也不总是如此。例如，链接通常默认带下划线。如果想去掉超链接的下划线，可以使用下述 css 规则：

```css
a {
    text-decoration: none;
}
```

如果使用这样的规则明确去掉了链接的下划线，锚记和常规文本之间在视觉上的唯一区别只有颜色（至少默认情况下是这样，然而也不尽然）。

>注意，把链接的下划线去掉可能会让很多用户不高兴。去不去掉是你自己的选择，由你自己的偏好决定，不过要记住一点：如果链接的颜色与常规文本没有太大的差异，用户可能难以发现文档中的超链接，尤其是那些色盲用户。

一个规则中可以使用多个装饰效果。如果想让超链接既有下划线又有上划线，可以这样做：

```css
a:link, a:visited {
    text-decoration: underline overline;
}
```

不过要注意，如果在同一个元素上应用多个装饰效果，胜出的那个规则会完全取代另一个值。以下述规则为例：

```css
h2.stricken {
    text-decoration: line-through;
}

h2 {
    text-decoration: underline overline;
}
```

此时，类为 stricken 的 h2 元素只有贯穿线，而没有下划线和上划线，因为多个 text-decoration 值是替换的，而不是累积的。

<br>

## 1. 怪异的装饰

下面来看 text-decoration 不寻常的一面。第一个奇怪的行为是，text-decoration 不被继承。这表明，任何装饰线（下划线、上划线或贯穿线）的颜色都与父元素的文本颜色一样。即便后代元素的颜色变了，也是如此，如下图所示。

```css
p {
    text-decoration: underline;
    color: black;
}

strong {
    color: gray;
}
```

```html
<p>This paragraph, which is black and has a black underline, also contains 
<strong>strongly emphasized text</strong> which has the black underline beneath it as 
well.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%8B%E5%88%92%E7%BA%BF%E7%9A%84%E9%A2%9C%E8%89%B2%E4%BF%9D%E6%8C%81%E4%B8%8D%E5%8F%98.png)

那么为什么会这样？因为 text-decoration 的值不被继承，strong 元素假定使用默认值 none。因此，strong 元素没有下划线。可是，strong 元素下面明显有一条线，说没有下划线不是信口开河？真的，确实没有。strong 元素下面那条线其实是段落的下划线，只是恰好跨过了 strong 元素。像下面这样调整加粗元素的样式看得更清楚：

```css
p {
    text-decoration: underline;
    color: black;
}

strong {
    color: gray;
    text-decoration: none;
}
```

```html
<p>This paragraph, which is black and has a black underline, also contains 
<strong>strongly emphasized text</strong> which has the black underline beneath it as 
well.</p>
```

这样修改之后，得到的结果与上图是完全一样的，因为现在你是显式声明 strong 元素没有装饰线。这表明，应用到父元素上的下划线（抑或上划线或贯穿线）在子元素上是无法取消的。

text-decaration 和 vertical-align 同时使用时还会发生更奇怪的事情。下图是其中一种怪异行为。尽管 sup 元素自身没有装饰线，但是它身在一个有上划线的元素中，导致那条线穿过 sup 元素：

```css
p {
    text-decoration: overline;
    font-size: 12px;
}

sup {
    vertical-align: 50%;
    font-size: 12pt;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E8%99%BD%E7%84%B6%E5%A5%87%E6%80%AA%EF%BC%8C%E4%BD%86%E8%BF%99%E6%98%AF%E6%AD%A3%E7%A1%AE%E7%9A%84%E8%A3%85%E9%A5%B0%E8%A1%8C%E4%B8%BA.png)

看到这些问题，你可能会发誓再也不用文本装饰线了。实际上，我只是指出了最为简单的一些情况，这里只是根据规范说梦可能出现的结果。现实中，有些 web 浏览器会去掉子元素的下划线，尽管这样做是不对的。这些浏览器违背规范的原因很简单，创作人员希望如此。来看下述标记：

```css
p {
    text-decoration: underline;
    color: black;
}

strong {
    color: silver;
    text-decoration: none;
}
```

```html
<p>This paragraph, which is black and has a black underline, also contains 
<strong>strongly emphasized text</strong> which should have the black underline beneath it as 
well.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E6%9F%90%E4%BA%9B%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%95%88%E6%9E%9C.png)

注意，很多浏览器还是严格遵守规范的，而上述这种浏览器（或其他用户代理）在未来也可能会严格遵守。如果依赖 none 去掉装饰线，一定要谨记，未来可能会在这上栽跟头，或者当下就可能导致问题。然而，css 的未来版本可能会提供去掉装饰线的方法，而不用像这样错误地使用 none，希望总是有的。

<br>

有种方法能改变装饰线的颜色，但不违反规范。前文说过，为元素设定文本装饰后，整个元素的装饰线都具有相同的颜色，即便是子元素，也不会使用其他颜色。若想让装饰线的颜色与元素的颜色保持一致，必须显式声明装饰线，如下所示：

```css
p {
    text-decoration: underline;
    color: black;
}

strong {
    color: silver;
    text-decoration: underline;
}
```

```html
<p>This paragraph, which is black and has a black underline, also contains 
<strong>strongly emphasized text</strong> which has the black underline 
beneath it as well, but whose gray underline overlays the black underline 
of its parent.</p>
```

在下图中，strong 元素是灰色的，而且有下划线。灰色的下划线在视觉上覆盖了父元素的黑色下划线，因此 strong 元素的装饰线颜色与文本颜色一致。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E8%A7%84%E9%81%BF%E4%B8%8B%E5%88%92%E7%BA%BF%E7%9A%84%E9%BB%98%E8%AE%A4%E8%A1%8C%E4%B8%BA.png)

<br>

# 6. 文本渲染效果

text-rendering 是 css 最近新增的属性，它其实是一个 SVG 属性，支持它的用户代理不会把它视作 css 属性。这个属性的作用是让创作人员指定用户代理在显示文本时应该优先考虑什么方面。

```css
text-rendering

取值：auto | optimizeSpeed | optimizeLegibility | geometricPrecision
初始值：auto
适用于：所有元素
继承性：是
动画性：是
```

optimizeSpeed 和 optimizeLegibility 的作用基本无需过多解释，它们指明首先考虑绘制速度，而不是清晰性特性，如紧排和连字（optimizeSpeed），或者反过来（optimizeLegibility）。

optimizeLegibility 针对的清晰性特性没有明确定义，而且文本渲染效果通常取决于运行用户代理的操作系统，因此具体结果视情况而定。下图中的第一行文本优化的是速度，第二行文本优化的是清晰性。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BC%98%E5%8C%96%E6%96%B9%E5%BC%8F.png)

客观地说，上图中两种优化方式之间的区别很小，不过对可读性可能会产生重大影响。

>即使指定优化速度，某些用户代理仍会优化清晰性。这可能是因为过去几年人们一味追求速度。

geometricPrecision 的作用不太明显，它其实是让用户代理尽量精准地绘制文本，确保能无损缩放，别以为情况始终是这样，现实并非如此。比如说，有些字体会随着字号的变化而改变紧排或连字效果，在字号小时提供较大的字距，字号变大之后又紧缩字距。使用 geometricPrecision 可以让用户代理把文本绘制成一系列 SVG 路径，而不是字形。

即便按照 web 标准通常的规范程度，也没有说清 auto 的作用。SVG 规范是这样说的：

​	用户代理应该在速度、清晰性和几何精度上做适当的权衡，不过较之速度和几何精度，应该倾向于清晰性。

意思就是，用户代理自行决定合适的方法，只要向清晰性倾斜就行。

<br>

# 7. 文本阴影

有时，你非常希望为文本加个阴影。text-shadow 属性应运而生。这个属性的句法起初看似古怪，不过稍加练习就能充分领会。

```css
text-shadow

取值：none | [ <length> || <length> <length> <length> ]#
初始值：none
适用于：所有元素
继承性：否
动画性：是
```

默认情况下，文本没有阴影。如果想，可以为文本定义一个或多个阴影。每个阴影由一个可选的颜色和三个长度值定义，最后一个长度值也是可选的。

颜色设定的是阴影的颜色，因此可以定义绿色、紫色，甚至是白色的阴影。如果省略颜色，阴影的颜色将与文本的颜色相同。

前两个长度是阴影文本的距离。第一个长度值设定横向偏移，第二个长度值设定纵向偏移。若想定义下图中那样不模糊的纯绿色阴影，向文本右侧偏移 5 像素，向文本下部偏移半 em，可以这样写：

```css
text-shadow: green 5px 0.5em;
```

负的长度值把阴影向文本的左侧和上部偏移。下述规则为文本添加一个淡蓝色阴影，向左偏移 5 像素，向上偏移半 em，如下图所示：

```css
text-shadow: rgb(128, 128, 255) -5px -0.5em;
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E7%AE%80%E5%8D%95%E7%9A%84%E9%98%B4%E5%BD%B1.png)

可选的第三个长度值定义阴影的模糊半径。模糊半径的定义是，从阴影的轮廓到模糊效果边界的距离。如果模糊半径为 2 像素，模糊效果将填满阴影轮廓到模糊边界之间的空间。具体的模糊方法没有规定，因此不同的用户代理可能会采用不同的模糊效果。举几个例子。下述样式渲染后的效果如下图所示。

```css
p.cl1 {
    color: black;
    text-shadow: gray 2px 2px 4px;
}

p.cl2 {
    color: white;
    text-shadow: 0 0 4px black;
}

p.cl3 {
    color: black;
    text-shadow: 1em 0.5em 5px red, -0.5em -1em hsla(100, 75%, 25%, 0.33);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E5%88%B0%E5%A4%84%E9%83%BD%E6%98%AF%E9%98%B4%E5%BD%B1.png)

>注意，大量阴影或模板半径较大的文本阴影会损耗性能，尤其是在低功耗和 CPU 能力有限的情况下，例如移动设备。建议创作人员进行充分的测试之后再投放使用阴影的设计。

<br>

# 8. 处理空白

我们介绍了装饰文本的不同方式，下面讨论 white-space 属性，它影响用户代理对文档源码中空格、换行符和制表符的处理方式。

```css
white-space

取值：normal | nowrap | pre | pre-wrap | pre-line
初始值：normal
适用于：全部元素（css 2.1），块级元素（css1 和 css2）
计算值：指定的值
继承性：否
动画性：否
```

这个属性影响浏览器对待单词之间及文本行之间空白的方式。XHTML 在某种程序上已经做了处理，即把空白压缩成一个空格。因此，对下述标记来说，经 web 浏览器渲染后，各单词之间只有一个空格，而且会忽略元素中的换行。

```html
<p>This       paragraph   has         many   spaces                  in it.</p>
```

这种默认的行为可以使用下述声明显式设定：

```css
p {
    white-space: normal;
}
```

这个规则让浏览器采用当前的方式处理空白，即丢掉多余的空白。这种情况下，换行符（回车）变成空白，而且连续的多个空格变成一个空格。

然而，我们可以把 white-space 设为 pre，这样目标元素中的空白将像 XHTML pre 元素那样处理，空白不会被忽略，如下图所示。

```css
p {
    white-space: pre;
}
```

```html
<p>This       paragraph   has       many    spaces             in it.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%BF%9D%E7%95%99%E6%A0%87%E8%AE%B0%E4%B8%AD%E7%9A%84%E7%A9%BA%E7%99%BD.png)

设为 pre 时，浏览器会小心处理额外的空格以及回车。任何元素在这一面，而且仅在这一方面，可以变得像 pre 元素那样。

与之相反的值 nowrap，禁止元素中的文本换行，除非使用 br 元素。css 中的 nowrap，与 HTML 4 中使用 `<td nowrap>` 设定单元格内容不换行差不多，只不过 nowrap 值可以用在任何元素上。下述标记的结果如下图所示。

```css
<p style="white-space: nowrap;">This paragraph is not allowed to wrap,
which means that the only way to end a line is to insert a line-break
element.  If no such element is inserted, then the line will go forever,
forcing the user to scroll horizontally to read whatever can't be
initially displayed <br/>in the browser window.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%BD%BF%E7%94%A8%20white-space%20%E5%B1%9E%E6%80%A7%E7%A6%81%E6%AD%A2%E6%8D%A2%E8%A1%8C.png)

其实，单元格的 nowrap 属性可以换成 white-space：

```css
td {
    white-space: nowrap;
}
```

```html
<table>
    <tr>
        <td>The contents of this cell are not wrapped.</td>
        <td>Neither are the contents this cell.</td>
        <td>Nor this one, or any after it, or any other cell in this table.</td>
        <td>css prevents any wrapping from happening.</td>
    </tr>
</table>
```

css 2.1 引入了 pre-wrap 和 pre-line 两个值，这是之前的版本没有的。创作人员使用这两个值可以更好地控制空白的处理方式。

设为 pre-wrap 时，文本中的空白序列得以保留，但是文本行将正常换行。此时，源码中的换行符以及生成的换行符也保留下来。pre-line 的作用与 pre-wrap 相反，空白序列就像常规文本中那样折叠，但是保留换行。例如，下述标记的结果如下图所示。

```css
<p style="white-space: pre-wrap;">
This  paragraph      has  a  great   many   s p a c e s   within  its textual
  content,   but their    preservation     will    not    prevent   line
    wrapping or line breaking.
</p>
<p style="white-space: pre-line;">
This  paragraph      has  a  great   many   s p a c e s   within  its textual
  content,   but their collapse  will    not    prevent   line
   wrapping or line breaking.
</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E5%A4%84%E7%90%86%E7%A9%BA%E7%99%BD%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E5%BC%8F.png)

下表总结了 white-space 属性的行为。

| 值       | 空白 | 换行符 | 自动换行 |
| -------- | ---- | ------ | -------- |
| pre-line | 折叠 | 保留   | 允许     |
| normal   | 折叠 | 忽略   | 允许     |
| nowrap   | 折叠 | 忽略   | 禁止     |
| pre      | 保留 | 保留   | 禁止     |
| pre-wrap | 保留 | 保留   | 允许     |

<br>

## 设定制表符的宽度

既然 white-space 取某些值时空白会保留下来，那么制表符（即 unicode 码位 0009）也就将显示成制表符了。但是一个制表符等于多少个空格？这就要问 tab-size 属性了。

```css
tab-size

取值：<length> | <integer>
初始值：8
适用于：块级元素
计算值：指定值对应的绝对长度
继承性：是
动画性：是
```

默认情况下，一个制表符相当于八个连续的空格。不过，可以使用 tab-size 属性设为其他整数值。例如，tab-size: 4 将把一个制表符渲染成四个连续空格。

如果提供的是长度值，那么制表符将渲染成指定的长度。例如，tab-size: 10px 将把三个连续的制表符渲染成 30 像素的空白。下述规则的效果如下图所示。

```css
p {
    white-space: pre-wrap;
    margin: 0.5em;
}

code {
    font: 1em monospace, serif;
}

.cl01 {
    tab-size: 8;
}

.cl02 {
    tab-size: 4;
}

.cl03 {
    tab-size: 2;
}

.cl04 {
    tab-size: 0;
}

.cl05 {
    tab-size: 8;
    white-space: normal;
}
```

```
<p class="cl01">			This sentence is preceded by three tabs, set to a length of <code>8</code>.
</p>
<p class="cl02">			This sentence is preceded by three tabs, set to a length of <code>4</code>.
</p>
<p class="cl03">			This sentence is preceded by three tabs, set to a length of <code>2</code>.
</p>
<p class="cl04">			This sentence is preceded by three tabs, set to a length of <code>0</code>.
</p>
<p class="cl05">			This sentence is preceded by three tabs, set to a length of <code>8</code>—but <code>white-space</code> is <code>normal</code>.
</p>

```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%8D%E5%90%8C%E7%9A%84%E5%88%B6%E8%A1%A8%E7%AC%A6%E9%95%BF%E5%BA%A6.png)

注意，如果 white-space 的值导致空白被折叠了（见表），那么 tab-size 就不再起作用。此时，tab-size 的值还要计算，但是不管源码中有多少制表符，在视觉上都没有体现。

>目前，webkit 和 gecko（通过 -moz-tab-size）支持 tab-size 属性。不过，只支持整数值，不支持长度值。

<br>

# 9. 换行和断字

遇到单词较长，而行的长度较短时，最好加上连字符，例如移动设备中的博客文章和《经济学人》的一栏。创作人员可以自己动手插入断字提示（使用 unicode 字符 U+00AD SOFT HYPHEN，或者 HTML 中的 $shy），但是借助 css，无需改动文档就能自动断字。

```css
hyphens

取值：manual | auto | none
初始值：manual
适用于：所有元素
计算值：指定的值
继承性：是
动画性：否
```

使用默认值 manual 时，只在文档中手动插入的连字符（例如 U+00AD 或 `&shy;`）处断字。否则，不断字。而使用 none 值时，即使有手动输入的连字符，也不断字。即，U+00AD 和 `&shy` 将被忽略。

auto 值有趣多了（行为也不太一致），即使没有手动插入连字符，浏览器也会在单词中合适的位置断字，把单词分开。这就带来了一些有趣的问题，比如怎样定义单词，以及何为断字的合适位置。其实，这两个问题完全由所用的语言决定。用户代理应该优先在手动插入的连字符处断字。但情况并非总是如此。下述示例谁当的断字及禁止断字的效果如下图所示：

```css
.cl01 {
    hyphens: auto;
}

.cl02 {
    hyphens: manual;
}

.cl03 {
    hyphens: none;
}
```

```html
<div class="d01">
<p class="cl01">Supercalifragilisticexpialidocious antidisestablishmentarianism.</p>
<p class="cl02">Supercalifragilisticexpialidocious antidisestablishmentarianism.</p>
<p class="cl02">Super&shy;cali&shy;fragi&shy;listic&shy;expi&shy;ali&shy;docious 
anti&shy;dis&shy;establish&shy;ment&shy;arian&shy;ism.</p>
<p class="cl03">Super&shy;cali&shy;fragi&shy;listic&shy;expi&shy;ali&shy;docious 
anti&shy;dis&shy;establish&shy;ment&shy;arian&shy;ism.</p>
</div>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%8D%E5%90%8C%E7%9A%84%E6%96%AD%E5%AD%97%E6%95%88%E6%9E%9C.png)

因为断字与所用的语言有很多关系，而且 css 规范没有准确定义用户代理应该如何断字（连模糊说明都没有），所以在不同的浏览器中断字的方式极有可能不同。

此外，如果选择断字，要谨慎选择在什么元素上断字。hyphens 属性能被继承，因此 body { hyphens: auto } 声明将在文档中的所有元素上应用断字，包括多行文本输入框、代码示例、引用块等。这些元素最好通过类似下面的规则禁止自动断字：

```css
body {
    hyphens: auto;
}

code, var, kbd, samp, tt, dir, listing, plaintext, xmp, abbr, acronym, blockquote, q, textarea, input, option {
    hyphens: manual;
}
```

代码示例和代码块禁止断字的原因应该很明显，尤其是那些使用连字符表示属性和值名称的语言。通过键盘输入的文本也是如此，你肯定不希望 UNIX 命令行示例中出现误导人的连字符。类似的情况还有很多。如果确实想在某些元素中断字，从选择符中把它们删掉即可（在多行文本输入框中输入的过程中自动断字看起来还是不错的）。

>截至 2017 年年末，主流桌面浏览器除了 chrome/bink 之外都支持 hyphens 属性，但是在 safari 和 edge 中要使用厂商前缀。再次注意，断字与所用的语言有很多关系。

<br>

断字还受其他属性的影响，例如 word-break。这个属性的作用是控制不同语言处理文本软换行的方式。

```css
word-break

取值：normal | break-all | keep-all
初始值：normal
适用于：所有元素
计算值：指定的值
继承性：是
动画性：是
```

如果一串文本太长，一行里放不下，就会软换行。这个概念与换行符和 `<br>` 元素导致的硬换行是相对的。文本在何处软换行由用户代理（或操作系统）决定。但是创作人员可以使用 word-break 属性影响这一决定。

默认值 normal 的意思是，按正常方式换行。通俗易懂地说，就是文本在单词之间换行，不过不同语言中单词的定义有所不同。在拉丁系语言中，例如英语，几乎始终在字母序列（例如单词）之间的空格处换行。在象形文字中，例如日语，一个字符就是一个词，因此任何两个字符之间都有可能换行。然而，在其他 CJK 语言中，软换行可能只会出现在不以空格分隔的字符序列之间。

再次说明，这是浏览器处理文本的默认方式，已经沿用了数年。如果使用 break-all，软换行可能（也会）出席那在任何字符之间，即使是在要给词的内部。使用这个值时，连字符不显示，即使换行出现在断字的位置（参见前文对 hyphens 属性的说明）。注意，line-break 属性（参见下文）可能会影响 CJK 文本应用 break-all 的行为。

keep-all 禁止在字符之间软换行，即便对一个符号一个词的 CJK 语言来说也是如此。因此，在日语中，没有空白的字符序列不会出现软换行，即便这样可能导致文本行超出所在元素的长度（这个行为类似于 white-space: pre）。

下图展示了 word-break 属性不同值的效果，下图对各个值得行为做了总结。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E8%B0%83%E6%95%B4%E8%AF%8D%E5%86%85%E6%8D%A2%E8%A1%8C%E8%A1%8C%E4%B8%BA.png)

| 值        | 非 CJK       | CJK          | 是否断字 |
| --------- | ------------ | ------------ | -------- |
| normal    | 照常         | 照常         | 是       |
| break-all | 任何字符之后 | 任何字符之后 | 否       |
| keep-all  | 照常         | 序列两侧     | 是       |

如果你关注的是 CJK 文本，除了 word-break 属性之外，可能还想了解 line-break 属性。

```css
line-break

取值：auto | loose | normal | strict
初始值：auto
适用于：所有元素
计算值：指定的值
继承性：是
动画性：是
```

我们知道，word-break 属性可以影响 CJK 文本行的软换行方式。line-break 属性也能影响这种软换行，尤其是如何处理 CJK 符号两侧的换行，以及 CJK 文本中非 CJK 标点符号（例如感叹号、连字符和省略号）两侧的换行方式。

也就是说，line-break 始终作用于特定的 CJK 字符，而不管内容被声明为什么语言。如果在一段英文中混杂部分 CJK 字符，line-break 仍将应用于那些 CJK 字符，而不应用于文本中的其他字符。此外，如果把内容声明为某种 CJK 语言，line-break 依然将应用于那些 CJK 字符，以及 CJK 文本中的非 CJK 字符，包括标点符号、货币符号和一些其他字符。

哪些字符受这个属性的影响，哪些不受影响，没有权威的列表，让用户代理根据情况变更换行方式。例如，用户代理在处理较短的行时采用宽松的换行规则，在处理较长的行时采用严格的规则。其实，auto 的作用是让用户代理根据需求在 loose、normal 和 strict 之间切换，甚至可以在一个元素的不同行之间切换。

你几乎可以从其他几个值得字面意思推断出它们得基本效果：

loose

​	采用最宽松的换行规则，主要用于文本行较短的情况，例如报纸。

normal

​	采用最常规的换行规则。什么是最常规的规则，没有准确定义，不过前面说过，规范中有建议的行为。

strict

​	采用最严格的换行规则。同样，何为最严格的，也没有准确定义。

<br>

## 文本换行

了解断字和软换行之后，我们不禁会想，如果文本超出了所在容器怎么办？这正是 overflow-wrap 属性要解决的问题。

```css
overflow-wrap

取值：normal | break-word
初始值：normal
适用于：所有元素
计算值：指定的值
继承性：是
动画性：是
```

这个属性的作用再简单不过了。使用默认值 normal 时，按正常方式换行，即在单词之间换行，或者由所用的语言决定。使用 break-word 时，可以在单词的内部换行。下图展示了这两个值之间的区别。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E6%BA%A2%E5%87%BA%E6%8D%A2%E8%A1%8C.png)

>注意，只有 white-space 属性的值允许换行时，overflow-wrap 才会起作用。如果 white-space 禁止换行（假如设为 pre），那么 overflow-wrap 没有任何效果。

overflow-wrap 的复杂性在于其历史和实现。以前，有个名为 word-wrap 的属性，其作用与 overflow-wrap 完全一样。鉴于此，规范明确指出，用户代理必须把 word-wrap 视作 overflow-wrap 属性的别名，当作 overflow-wrap 的简写。

可惜，浏览器并没有完全执行这个规定，word-wrap 得到的支持更广。因此，为了向后兼容，通常二者同时使用：

```css
pre {
    word-wrap: break-word;
    overflow-wrap: break-word;
}
```

截至 2017 年年末，overflow-wrap 得到了非常广泛的支持，可以放心使用了。

overflow-wrap: break-word 和 word-break: break-all 看似作用一样，然而并非如此。为了了解二者的区别，请看上图中第一排中间那个文本框。可以看出，仅当内容有溢出时，overflow-wrap 才起作用。因此，如果能用源码中的空白换行，overflow-wrap 就会在空白处换行。而 word-break: break-all 不同，它在内容接触边界时换行，不管前面有没有空白。

<br>

# 10. 书写模式

如果你阅读的是本书英文版，或者其他主流西方语言的版本，那么文本是从左至右、从上到下排列，这正是英语的流动方向。然而，不是每种语言都是如此。有些语言是从右至左、从上到下排列的，例如希伯来语和阿拉伯语，还有些语言主要采用从上到下的方式书写，此外还可以从左至右书写，例如汉语和日语，也可以从右至左书写，例如蒙古语。

## 1. 设定书写模式

用于指定采用这三种书写模式中的哪一种的属性是 writing-mode。

```css
writing-mode

取值：horizontal-tb | vertical-rl | vertical-lr
初始值：horizontal-tb
适用于：除表格行组、表格列组、表格行、表格列、旁注基元素和旁注元素之外的所有元素
计算值：指定的值
继承性：是
动画性：是
```

默认值 horizontal-tb 的意思是，行内方向为横向，块级方向为从上到下。这涵盖了所有西方语言和部分中东语言，后者在横向书写时可能采用不同的方向。后两个值采用的行内方向是纵向，不过块级方向是从右至左或从左至右。这三个值的效果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%8D%E5%90%8C%E7%9A%84%E4%B9%A6%E5%86%99%E6%A8%A1%E5%BC%8F.png)

注意，两个纵向示例中的各行是串列的，如果把头向右歪，vertical-rl 模式下的文本还算都认得清。而 vertical-lr 模式下得文本就不那么好认了，因为文本是从下向上流动得（至少对英语来说是这样）。这对原本就采用 vertical-lr 流动方式得语言来说不是问题，例如日语。截至 2017 年年末，纵向模式下的行内方向只能是从上到下。

如果想把西方语言的纵向流动方式改成从下到上。可以先在元素上应用 vertical-rl，然后借助 css 变形技术（参见第 16 章）把元素旋转 180°，从而得到从下到上、从左至右的视觉效果。使用 vertical-lr，加上旋转之后，可以得到从下到上、从右至左的流动方式。这两种情况如下图所示。

```css
.flip {
    transform: rotate(180deg);
}

#one {
    writing-mode: vertical-rl;
}

#two {
    writing-mode: vertical-lr;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E5%80%92%E7%BD%AE%E7%BA%B5%E5%90%91%E4%B9%A6%E5%86%99%E6%A8%A1%E5%BC%8F.png)

这样排列文本有违直觉，因为一切都倒置了，看到的与指定的是有出入的。例如，vertical-rl（纵向从右至左）模式下的文本是从左至右流动的。

使用块级框对齐属性（例如 vertical-align）时也会遇到相同的问题。在纵向书写模式下，块级方向是横向。这意味着，纵向对齐的行内元素其实是在横向上移动的，如下图所示。

尽管上标和下标是通过 vertical-align 属性移动的，但是它们及所在行的位置都沿着横向移动。前面说过，纵向位移是相对行框而言的，而根据定义，行框的基线是横向的，就算文本是纵排的也是如此。

乱了？没关系。书写模式确实有点饶人，这是因为思维方式变了，而且 css 规范以前所做的假设与如今的能力有冲突。如果一开始就考虑到有纵向书写模式，vertical-align 属性可能要改成其他名称了，比如 inline-align 之类的（说不定有一天会这样改）。

最后说明一点。如果你用过 css 变形，可能觉得纵向书写模式相当于文本旋转 90°。其实，这两种情况是不同的，原因有二。其一，只有 vertical-rl 模式是这样，而在 vertical-lr 模式下，文本是从下到上流动的。其二，纵向流动的文本基点不变。也就是说，顶还是顶。下面举个例子，结果如下图所示。

```css
.boxed {
    border-top: 3px solid red;
    border-left: 3px dashed tan;
}

#one {
    writing-mode: vertical-rl;
}

#two {
    writing-mode: vertical-lr;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%8D%E5%90%8C%E4%B9%A6%E5%86%99%E6%A8%A1%E5%BC%8F%E4%B8%8B%E7%9A%84%20css%20%E5%9F%BA%E7%82%B9%E6%96%B9%E5%90%91.png)

两种情况下，顶边都是红色实线，左边都是棕黄色虚线。基点没有随文本旋转，因为文本并没有旋转，而是改变了流动方向。

下面开始出现反常行为了。虽然边框不绕着元素所在的方框转动，但是外边距会转动，而这不是 css 规范规定的。

这是因为用户代理的内部样式在块级方向上是相对元素起边和终边的（至少截至 2017 年年末是这样）。对从上到下流动的语言来说，元素块级方向的起边和终边分别是顶边和底边。而在纵向书写模式下，块级方向是从右至左或从左至右。因此，如果把几个段落改成纵排后，没有修改外边距，那么正常情况下的上下外边距将变成左右外边距。这种情况如下图所示，图示效果用的是下述样式：

```css
p {
    margin-top: 1em;
}

#one {
    writing-mode: vertical-rl;
}

#two {
    writing-mode: vertical-lr;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E4%B8%8D%E5%90%8C%E4%B9%A6%E5%86%99%E6%A8%A1%E5%BC%8F%E4%B8%8B%E7%9A%84%20css%20%E5%9F%BA%E7%82%B9%E6%96%B9%E5%90%91.png)

根据声明，两个段落的顶部都有上外边距。每一段两侧的空白是沿块级方向的起边和终边外边距。如果明确把右外边距和左外边距设为零，那么段落两侧的空白将消失。

注意，出现这种情况是因为用户代理默认使用 block-start-margin 这样的属性（其实这并不是，至少目前话不是正式的 css 属性）声明文本元素的外边距。如果使用 margin-top 等属性明确声明上下或两侧的外边距，那么情况将于边框一样，上外边距在顶部，右外边距在右侧等。

<br>

## 2. 改变文本方向

选定书写模式之后，可能还想改变文本行中字符的方向。这么做的原因有很多，尤其是多种书写系统混杂时，例日语中参杂着英语单词或数字。此时，要使用 text-orientation 属性。

```css
text-orientation

取值：mixed | upright | sideways
初始值：mixed
适用于：除表格行组、表格行、表格列组和表格列之外的所有元素
计算值：指定的值
继承性：是
动画性：是
```

text-orientation 属性的作用是控制字符的方向。具体效果最好通过示例说明，下述样式渲染得到的结果如下图所示：

```css
.vrets {
    writing-mode: vertical-lr;
}

#one {
    text-orientation: mixed;
}

#two {
    text-orientation: upright;
}

#thr {
    text-orientation: sideways;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/%E6%96%87%E6%9C%AC%E6%96%B9%E5%90%91.png)

上图上部是日语和英文文本混合的一个段落，基本没什么形式。下面三个副本使用书写模式 vertical-lr。第一个副本使用 text-orientation: mixed，横向书写的字符（英语）侧排，纵向书写的字符（日语）直排。第二个副本中所有字符都是直排的（upright），包括英语字符。第三个副本中所有字符都是侧排的（sideways），包括日语字符。

<br>

## 3. 声明方向

回到 css2。这一版提供了两个用于控制文本方向的属性，它们会改变行内基线的方向。这两个属性是 direction 和 unicode-bidi。

>css 规范明确指出，不建议把 css 的 direction 和 unicode-bidi 属性用在 HTML 文档上。原话是这样的：因为 HTML（或用户代理）能够禁用 css 样式，所以我们建议使用 HTML 的 dir 属性和 <bdo> 元素，确保在缺少样式表的情况下能得到正确的双向布局。本节介绍这两个属性是因为在旧样式表中可能还有它们的身影。

```css
direction

取值：ltr | rtl
初始值：ltr
适用于：所有元素
计算值：指定的值
继承性：是
动画性：是
```

direction 属性影响块级元素中文本的书写方向，表格列布局的方向，内容在横向上溢出元素框的方向，以及两端对齐的元素中最后一行的位置。对行内元素来说，仅当 unicode-bidi 属性设为 embed 或 bidi-override 时（见下文），direction 才起作用。

默认值为 ltr，但是如果浏览器显示的是从右至左的文本，应该变成 rtl。因此，浏览器的内部样式中可能有类似下面的规则：

```css
*:lang(ar), *:lang(he) {
    direction: rtl;
}
```

真实的规则比这长，涵盖所有从右至左书写的语言（不限于阿拉伯语和希伯来语），不过意思很明确了。

css 为解决书写方向做出了努力，但 unicode 处理方向的方式要复杂得多。借助 unicode-bidi 属性，css 创作人员可以利用 unicode 的部分功能。

```css
unicode-bidi

取值：normal | embed | bidi-override
初始值：normal
适用于：所有元素
计算值：指定的值
继承性：否
动画性：是
```

下面直接引用 css2.1 规范中对这些值的说明，规范已经点出了各个值得实质：

normal

​	根据双向算法（bidirectional algorithm），目标元素不打开新的嵌套层级。对于行内元素，跨元素边界隐式重排。

embed

​	对于行内元素，根据双向算法，打开新的嵌套层级。这一级嵌套方向由 direction 属性指定。元素内部隐式重排，在元素开头添加一个 LRE 字符（U+202A，	针对 direction: ltr）或一个 RLE 字符（U+202B，针对 direction: rtl），在元素末尾添加一个 PDF 字符（U+202）。

bidi-override

​	覆盖行内元素的书写方向。对于块级元素，覆盖行内后代的书写方向。这意味着，元素中的文本严格按照 direction 属性依序重排，而双向算法所做的隐式重排将被忽略。此时，在元素的开头添加一个 LRO 字符（U+202D，针对 direction: ltr）或一个 RLO 字符（U+202E，针对 direction: rtl），在元素的末尾添加一个 PDF（U+202C）字符。





























