# 1. 元素框基础

不管是什么元素，css 都假定每个元素都生成一个或多个矩形框，我们称之为元素框（以后的规范可能会允许元素生成非矩形框，而其实现在就有着方面的提议，不过目前生成的框还都是矩形的）。各元素框的中心是内容区域，四周有可选的内边距、边框、轮廓和外边距，之所以说这些区域是可选的，是因为它们的宽度都可以设为零，即把它们从元素框上删除。下图展示了一个内容区域，四周围绕着内边距、边框和外边距。

外边距、边框和内边距都有分别针对每一边的属性，例如 margin-left 或 border-bottom。也有简写属性，例如 padding。而轮廓没有针对各边的属性。默认情况下，内容区的背景（例如颜色或平铺的图像）出现在内边距范围内。外边距区域始终是透明的，因此透过它能看到父元素。内边距不能为负值，但是外边距可以。稍后会说明把外边距设为负值的效果。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E5%86%85%E5%AE%B9%E5%8C%BA%E5%9F%9F%E5%8F%8A%E5%85%B6%E5%9B%9B%E5%91%A8.png)

边框的线型由样式定义，例如设为 solid 或 inset，边框的颜色由 border-color 属性设定。如未设定颜色，边框的颜色与元素中内容的前景色相同。比如说，段落中的文本是白色，如果创作人员没有明确声明使用其他颜色，那么段落四周的边框也是白色的。如果边框的线型有间隙，那么默认情况下，从间隙中能看到元素的背景。最后，边框的宽度不能为负数。

元素框各组成部分受很多属性的影响，例如 width 或 border-right。本书将使用其中多数属性，但是不会深入讨论。

<br>

## 1. 重要概念概览

下面简要说明一下我们将讨论的不同框体，以及后文将用到的重要术语：

常规流动

​	即渲染西方语言时从左至右、从上到下的顺序，以及传统的 HTML 文档采用的文本布局方式。注意，对非西方语言来说，流动方向可能会变。多数元素都采	用常规的流动方式，除非元素浮动了、定位了，放入弹性盒或采用栅格布局了。不过本章只讨论常规流动方式下的元素。

非置换元素

​	内容包含在文档中的元素。例如，段落（p）是非置换元素，因为段落中的文本内容在元素自身中。

置换元素

​	为其他内容占位的元素。典型的置换元素是 img，它指向一个图像文件，那个图像就插在 img 元素在文档流中的位置上。多数表单元素也是置换元素（例如 	`<input type="radio">`）。

根元素

​	位于文档树顶端的元素。在 HTML 文档中，根元素是 html。在 XML 文档中，根元素可以是语言允许的任何元素，例如，RSS 文件的根元素是 rss。

块级框

​	段落、标题或 div 等元素生成的框。在常规流动模式下，块级框在框体前后都换行，因此块级框是纵向堆叠的。display: block 声明能把任何元素生成的框体	变成块级框。

行内框

​	strong 或 span 等元素生成的框体。行内框前后不换行。display: inline 声明能把任何元素生成的框体变成行内框。

行内块级框

​	内部特征像块级框，外部特征像行内框。行内块级框的行为与置换元素相似，但不完全相同。比如说把一个 div 元素像行内图像那样插入一行文本，这样一想	你就明白了。

除此之外还有其他框体，例如单元格框，但是基于各种各样的原因（那些框体太过复杂，一本书也讲不完，而且没有多少作者能驾驭，只这一点就够了），本书不做讨论。

<br>

## 2. 容纳块

还有一种框体要深入说明，因为涉及的知识够多，所以单开一节。这种框体是容纳块（containing block）。

每个元素的框体都相对容纳块放置，说得简单点就是，容纳块是元素框体的布局上下文。为了确定框体的容纳块，css 定义了一系列规则。不过我们只会说明与本书内容有关的那些规则，以免话题展开太多。

在使用常规流动方式渲染的西文文本中，容纳块由离元素最近的那个生成列表项目或块级框（包含所有与表格有关的框体，例如单元格生成的框体）的祖辈元素的边界构成。以下述标记为例：

```html
<body>
    <div>
        <p>This is a paragraph.</p>
    </div>
</body>
```

在这段十分简单的标记中，p 元素的块级框的容纳块是 div 元素的块级框，因为这是祖辈元素的框体中离 p 元素最近的，而且生成的是块级框或列表项目（这里，div 元素生成的是块级框）。类似地，div 元素的容纳块是 body 元素的框体。因此，p 元素的布局依赖 div 元素的布局，而 div 元素的布局又依赖 body 元素的布局。

继续下去，body 元素的布局依赖 html 元素的布局。html 元素对应的是初始容纳块（initial containing block），它的独特之处是，其尺寸由视区（屏幕媒体中的浏览器窗口，印刷媒体中的可打印区域）决定，而非根元素中内容的尺寸。初始容纳块与其他容纳块的差异极小，而且通常并不重要，但是你要知道有这么一种容纳块。

<br>

# 2. 调整元素的显示方式

为 display 属性设值可以影响用户代理显示元素的方式。既然我们开始深入讲解视觉格式化了，那就用前文学过的概念多讨论 display 属性的两个值。

```css
display

取值：[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>
定义：见下
初始值：inline
适用于：所有元素
计算值：指定的值
继承性：否
动画性：否

<display-outside>
	block | inline | run-in

<display-inside>
	flow | flow-root | table | flex | grid | ruby

<display-listitem>
	list-item && <display-outside>? && [ flow | flow-root ]?

<display-internal>
	table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | 		table-caption | ruby-base | ruby-text | ruby-base-container | ruby-text-container

<display-box>
	contents | none

<display-legacy>
	inline-block | inline-list-item | inline-table | inline-flex | inline-grid
```

我们将忽略旁注（ruby）和表格相关的值，因为对本章的内容来说，它们太过复杂。我们还将忽略 list-item 这个值，因为它与块级框特别相似。我们将用大量时间讨论块级框和行内框，不过在此之前先讨论调整元素显示方式对布局的影响，随后再说明 inline-block 这个值。

<br>

## 1. 改变显示方式

装饰文档时，若能改变元素生成的框体类型显然很方便。例如，假设 nav 元素中有一系列链接，我们想纵向布局，显示为侧边栏：

```html
<nav>
    <a href="index.html">WidgetCo Home</a>
    <a href="products.html">Products</a>
    <a href="services.html">Services</a>
    <a href="fun.html">Widgety Fun!</a>
    <a href="support.html">Support</a>
    <a href="about.html" id="current">About Us</a>
    <a href="contact.html">Contact</a>
</nav>
```

为此，可以把链接分别放在单元格中，也可以把每一个链接都放在一个 nav 元素中，或者直接把各个链接变成块级元素，像下面这样：

```css
nav a {
    display: block;
}
```

这个规则把 nav 元素中的每个 a 元素变成块级元素。如果再添加一些样式，可以得到类似下图所示的结果。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E6%8A%8A%E6%98%BE%E7%A4%BA%E6%96%B9%E5%BC%8F%E7%94%B1%E8%A1%8C%E5%86%85%E5%8F%98%E6%88%90%E5%9D%97%E7%BA%A7.png)

这样修改元素的显示方式之后，在不支持 css 的浏览器中，导航链接将显示为行内元素，而在支持 css 的浏览器中，导航链接将显示为块级元素。把链接变成块级元素之后，可以像 div 或 p 元素那样装饰，整个元素框都变成链接的了。因此，用户把鼠标指针悬停在元素框上的任何位置都能单击链接。

此外，你可能还想把元素变成行内显示方式。假设有这么一个显示人名的无序列表：

```html
<ul id="rollcall">
    <li>Bob C.</li>
    <li>Marcio G.</li>
    <li>Eric M.</li>
    <li>Kat M.</li>
    <li>Tristan N.</li>
    <li>Arun R.</li>
    <li>Doron R.</li>
    <li>Susie W.</li>
</ul>
```

现在我们想把这些人名显示为行内元素，而且在人名之间（以及整个列表的前后）加上竖线。为此，只能改变显示方式。下述规则的效果如下图所示。

```css
#rollcall li {
    display: inline;
    border-right: 1px solid;
    padding: 0 0.33em;
}

#rollcall li:first-child {
    border-left: 1px solid;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E6%8A%8A%E6%98%BE%E7%A4%BA%E6%96%B9%E5%BC%8F%E7%94%B1%E5%88%97%E8%A1%A8%E9%A1%B9%E7%9B%AE%E6%94%B9%E4%B8%BA%E8%A1%8C%E5%86%85.png)

你可以根据设计需要灵活使用不同的显示方式，只有想不到，没有做不到。

然而，要注意，我们改变的是元素的显示方式，而不是元素的本性。也就是说，把段落生成的框体变成行内框并不会把段落变成行内元素。例如，HTML 元素有些是块级元素，有些则是行内元素（其实还有些是流动元素，不过暂且不提）。行内元素可以作为块级元素的后代，但是反过来一般不行。比如说，span 元素可以放在一个段落中，但是却不能把段落放在 span 元素中。

不论怎样装饰元素，这一点要成立。以下述标记为例：

```html
<span style="display: block;">
    <p style="display: inline;">this is wrong!</p>
</span>
```

这段标记是不对的，因为块级元素（p）嵌套在行内元素（span）中。虽然改变了显示方式，但这一点是变不了的。display 属性的名称就表明，它是影响元素显示方式的，而不能改变元素的种类。

了解这些知识之后，下面深入讨论不同的框体：块级框、行内框、行内块级框和列表项目框。

<br>

## 2. 块级框

块级框的行为有时可以预测，有时又让人捉摸不透。例如，框体位置在横轴和纵轴上的处理方式就有所不同。为了充分理解块级框的处理方式，必须知道一些界限和区域，如下图所示。

默认情况下，块级框的宽度（width）等于左内边界到右内边界的距离，高度（height）等于上内边界到下内边界的距离。这两个属性可用于生成块级框的元素。

这些属性的处理方式可以使用 box-sizing 属性调整。

```css
box-sizing

取值：content-box | padding-box | border-box
初始值：content-box
适用于：能设定 width 或 height 的所有元素
计算值：指定的值
继承性：否
动画性：否
```

这个属性用于改变 width 和 height 值得具体意义。如果声明 width: 400px，而且不为 box-sizing 设值，那么元素的内容框将为 400 像素宽，内边距和边框等都在此基础上增加。如果声明 box-sizing: border-box，那么元素框从左边框的外边界到右边框的外边界相距 400 像素。边框或内边距都在这个尺寸计算，即内容区的宽度相应减少。这两种情况如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/box-sizing%20%E7%9A%84%E6%95%88%E6%9E%9C.png)

这里提到 box-sizing 属性，是因为它作用于能设定 width 或 height 的所有元素。通常，这是指生成块级框的元素，不过也能用于行内置换元素（如图像），以及行内块级框。

这些宽度、高度，以及内边距和外边距在一起，决定着文档的布局方式。多数情况下，文档的高度和宽度由浏览器自动确定，而且是根据可用显示区域确定的，此外还受一些其他因素的影响。通过 css，可以直接控制元素的尺寸和显示方式。

<br>

## 3. 横向格式化

横向格式化往往比你想的复杂。之所以复杂，部分是由于 box-sizing 的默认行为。使用默认值 content-box 时，为 width 设定的值是内容区的宽度，而不是整个元素框的可见宽度。以下述标记为例：

```html
<p style="width: 200px;">wideness?</p>
```

这个段落中的内容为 200 像素宽。如果有背景，看的就相当清楚了。此时，如果有内边距、边框或外边距的话，将增加到这个宽度之上。假设我们是这样设定的：

```html
<p style="width: 200px; padding: 10px; margin: 20px;">wideness?</p>
```

那么，元素框的可见区域将是 220 像素宽，因为我们在内容区的左右各添加了 10 像素宽的内边距。外边距又是元素的两侧添加 20 像素，因此这个元素框的总体宽度为 260 像素。结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E5%8A%A0%E4%B8%8A%E5%86%85%E8%BE%B9%E8%B7%9D%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D.png)

如果修改样式，把 box-sizing 设为 border-box，那么结果就不同了。此时，元素框的可见区域为 200 像素宽，内容区域为 180 像素宽。因为两侧的外边距共 40 像素，所以元素框的总体宽度为 240 像素，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E5%87%8F%E5%8E%BB%E5%86%85%E8%BE%B9%E8%B7%9D.png)

在这两种情况下，常规流动方式下块级框各组成部分的横向尺寸始终等于容纳块的宽度。假设一个 div 元素中有两个段落，div 元素的外边距为 1em，box-sizing 属性使用默认值。

那么，每个段落的内容区宽度（即 width 的值），加上左右内边距、边框和外边距，得到的和始终等于 div 元素内容区的宽度。

假设 div 元素的宽度为 30em。那么，段落的内容区宽度，加上内边距、边框和外边距之和为 30em。下图中段落四周的空白其实是段落的外边距。如果 div 元素有内边距，空白区域大，不过这里没有。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E5%85%83%E7%B4%A0%E6%A1%86%E7%9A%84%E5%AE%BD%E5%BA%A6%E7%AD%89%E4%BA%8E%E5%AE%B9%E7%BA%B3%E5%9D%97%E7%9A%84%E5%AE%BD%E5%BA%A6.png)

<br>

## 4. 横向格式化属性

横向格式化属性有七个，分别为 margin-left、border-left、padding-left、width、padding-right、border-right 和 margin-right。这七个属性影响块级框的横向布局，如下图所示。

这七个值的值加在一起要等于元素容纳块的宽度，而这一宽度通常为块级元素的父元素的 width 值（因为块级元素的父元素几乎都是块级元素）。

在这七个属性中，只有三个属性的值能设为 auto：元素内容区的宽度、左外边距和右外边距。余下的几个属性，要么设为具体的值，要么使用默认值（零）。下图展示了元素框的哪些部分能设为 auto，而哪些部分不能。

width 属性的值要么设为 auto，要么设为某种类型的非负值。在横向格式化中使用 auto，可能得到不同的结果。

<br>

## 5. 使用 auto

在 width、margin-left 和 margin-right 三个属性中，如果把其中一个设为 auto，另两个设为具体的值，那么设为 auto 的那个属性的具体长度要能满足元素框的宽度等于父元素的宽度。假如七个属性的值之和必须等于 500 像素，右外边距的宽度设为 100px，左外边距设为 auto，而且没有设定内边距或边框，那么左外边距的宽度将是 300 像素。

```css
div {
    width: 500px;
}

/* 设为 auto 的左外边距最终计算的结果为 300px */
p {
    margin-left: auto;
    margin-right: 100px;
    width: 100px;
}
```

从某种意义上说，auto 可用于补全总和所缺的尺寸。然而，如果把这三个属性的值都设为 100px，没有一个设为 auto，情况又如何？

如果把这三个属性都设为 auto 之外的值，用 css 术语来说就是过约束了，那么 margin-right 将被强制设为 auto。也就是说，如果左右外边距的宽度都设为 100px 的话，用户代理会把右外边距重置为 auto。此时，右外边距的宽度自动设定，不过要满足元素的总宽度等于容纳块的宽度。下述样式的结果如下图所示：

```css
div {
    width: 500px;
}

/* 右外边距被强制设为 300px */
p {
    margin-left: 100px;
    margin-right: 100px;
    width: 100px;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E8%A6%86%E7%9B%96%E8%AE%BE%E5%AE%9A%E7%9A%84%20margin-right%20%E5%80%BC.png)

如果左右外边距都明确设为 auto，那么 width 的值是满足总宽度（即父元素的内容区宽度）所需的任何值。下述样式的结果如下图所示：

```css
p {
    margin-left: 100px;
    margin-right: 100px;
    width: auto;
}
```

下图所示的情况是最常见的，即设定左右外边距而不设定 width。下述样式的结果与下图完全一样：

```css
/* 与前面一样 */
p {
    margin-left: 100px;
    margin-right: 100px;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E8%87%AA%E5%8A%A8%E7%A1%AE%E5%AE%9A%E5%AE%BD%E5%BA%A6.png)

你可能想知道把 box-sizing 设为其他值（例如 padding-box）会怎样。前面所讲的内容假定用的是 content-box，不过换成其他值后依然成立。正是因为这样，本节才只讨论 width 和两侧的外边距，而没有涉及内边距或边框。不管把 box-sizing 设为什么值，本节及下一节讨论的 width: auto 处理方式不变，因为 box-sizing 决定的是 width 从何处算起，而不是它与外边距的关系。

<br>

## 6. 多个 auto

下面来看着三个属性（width、margin-left 和 margin-right）中有两个设为 auto 的情况。如果两侧的外边距都设为 auto，如下述代码所示，那么外边距的长度相等，元素在父元素内居中显示，如下图所示。

```css
div {
    width: 500px;
}

/* 两侧的外边距都是 100 像素宽，因为 （500-300）/ 2 = 100 */
p {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/width%20%E8%AE%BE%E4%B8%BA%E5%85%B7%E4%BD%93%E7%9A%84%E5%80%BC.png)

在常规流动方式下，若想让元素在块级框中居中显示，正确的方式是把两侧的外边距设为同样的宽度（弹性盒和栅格布局中还有其他方法，不过这不在本节的讨论范围之内）。

此外，还可以把某一边的外边距和 width 设为 auto。此时，设为 auto 的那个外边距等于零。

```css
div {
    width: 500px;
}

/* 左外边距的计算结果为 0，width 则等于 400px */u
p {
    margin-left: auto;
    margin-right: 100px;
    width: auto;
}
```

width 则被设为填满容纳块所需的值。对上例来说，width 的值为 400 像素，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E5%AE%BD%E5%BA%A6%E5%92%8C%E5%B7%A6%E5%A4%96%E8%BE%B9%E8%B7%9D%E9%83%BD%E8%AE%BE%E4%B8%BA%20auto%20%E7%9A%84%E6%83%85%E5%86%B5.png)

最后，如果这三个属性都设为 auto？答案是，两侧的外边距被设为零，而 width 则要多宽有多宽。这跟默认值是一样的，即两侧的外边距和宽度都不明确声明值。此时，外边距默认为零，而 width 默认为 auto。

注意，因为横向外边距不折叠，所以父元素的内边距、边框和外边距可能会影响子代。这影响不太直接，例如元素的外边距（等）可能导致子元素有偏移。下述样式的结果如下图所示。

```css
div {
    padding: 50px;
    background: silver;
}

p {
    margin: 30px;
    padding: 0;
    background: white;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E5%81%8F%E7%A7%BB%E9%9A%90%E8%97%8F%E5%9C%A8%E7%88%B6%E5%85%83%E7%B4%A0%E7%9A%84%E5%A4%96%E8%BE%B9%E8%B7%9D%E5%92%8C%E5%86%85%E8%BE%B9%E8%B7%9D%E4%B9%8B%E4%B8%AD.png)

<br>

## 7. 负外边距

目前来看，一切都相当简单，但是为何我之前说有些地方是复杂的？这是因为外边距还有一种取值，即负值。是的，外边距可以设为负值。设为负值能实现一些有趣的效果。

还记得吗，七个横向属性之和始终等于父元素的 width。只要这几个属性的值都大于或等于零，元素就不可能比父元素的内容区宽。然而，下述样式便出现意外了，如下图所示：

```css
div {
    width: 500px;
    border: 3px solid black;
}

p.wide {
    margin-left: 10px;
    width: auto;
    margin-right: -50px;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E6%8A%8A%E5%A4%96%E8%BE%B9%E8%B7%9D%E8%AE%BE%E4%B8%BA%E8%B4%9F%E5%80%BC%EF%BC%8C%E5%AD%90%E5%85%83%E7%B4%A0%E6%AF%94%E7%88%B6%E5%85%83%E7%B4%A0%E5%AE%BD%E4%BA%86.png)









































