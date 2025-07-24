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

你没看错，子元素比父元素宽了。用算式计算，结果是对的：

​	10px + 0 + 0 + 540px + 0 + 0 - 50px = 500px

其中，540px 对应于 width: auto，即满足算式左右两边所需的值。尽管子元素超出了父元素，但是这里并没有违背规范，因为七个属性的值加在一起等于总宽度。这是语义上的伎俩，但却是正确的行为。

下面，加上边框：

```css
div {
    width: 500px;
    border: 3px solid black;
}

p.wide {
    margin-left: 10px;
    width: auto;
    margin-right: -50px;
    border: 3px solid gray;
}
```

此时，变化发生在 width 的计算结果上：

​	10px + 3px + 0 + 534px + 0 + 3px -50px = 500px

如果再加上内边距，width 的值还会变小。

反过来，设为 auto 的右外边距也可能得到负值。比如其他属性设为特定的值时，为了满足元素不能比容纳块的宽的要求，右外边距就有可能为负值。以下述样式为例：

```css
div {
    width: 500px;
    border: 3px solid black;
}

p.wide {
    margin-left: 10px;
    width: 600px;
    margin-right: auto;
    border: 3px solid gray;
}
```

此时，算式要这样列：

​	10px + 3px + 0 + 600px + 0 + 3px - 116px = 500px

右外边距的计算结果为 -116px。即便明确声明为其他具体的值，右外边距也会被强制设为 -116px，因为规则就是这样制定的：倘若元素的尺寸出现过约束，右外边距要被重置为满足算式所需的任何值（如果是从右至左书写的语言，重置的将是左外边距）。

再看一个例子，结果如下图所示，这里把左外边距设为负值：

```css
div {
    width: 500px;
    border: 3px solid black;
}

p.wide {
    margin-left: -50px;
    width: auto;
    margin-right: 10px;
    border: 3px solid gray;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E6%8A%8A%E5%B7%A6%E5%A4%96%E8%BE%B9%E8%B7%9D%E8%AE%BE%E4%B8%BA%E8%B4%9F%E5%80%BC.png)

左外边距为负值时，段落不仅从 div 元素的边框溢出了，还从浏览器窗口的左边溢出了。

注意，内边距、边框和内容宽度（及高度）不能为负数。只有外边距的值可以小于零。

<br>

## 8. 百分数

宽度、内边距和外边距设为百分数时，基本的规则依然适用。其实，这些属性的值设为长度值还是百分数并没什么关系。

百分数有时很有用。假设我们想把元素的内容区宽度设为容纳块的三分之二，左右内边距各为 5%，左外边距为 5%，余下的空间都留给右外边距。此时，可以这样声明：

```html
<p style="width: 67%; padding-right: 5%; padding-left: 5%; margin-right: auto; margin-left: 5%;">playing percentages</p>
```

这里的右外边距将是容纳块宽度的 18%（100% - 67% - 5% - 5% - 5%）。

然而，百分数和长度单位混在一起使用就不那么容易理清了。以下述标记为例：

```html
<p style="width: 67%; padding-right: 2em; padding-left: 2em; margin-right: auto; margin-left: 5em;">mixed lengths</p>
```

此时，元素框可以这样定义：

​	5em + 0 + 2em + 67% + 2em + 0 + auto = 容纳块的宽度

为了确保右外边距的计算结果为零，元素的容纳块必须是 27.272727 em 宽（元素的内容区是 18.272727 em 宽）。假使容纳块比这宽，右外边距的计算结果会变成正值。容纳块比这窄的话，右外边距的计算结果则为负值。

如果混用不同的长度单位，情况更复杂。例如：

```html
<p style="width: 67%; padding-right: 15px; padding-left: 10px; margin-right: auto; margin-left: 5em;">more mixed lengths</p>
```

为了避免情况一直复杂下去，边框不接受百分数，只能设为长度值。这样限制的基本原因是，只使用百分数其实无法创建完全弹性的元素，除非不添加边框，或者使用某种实验性的方案，例如弹性盒布局。

<br>

## 9. 置换元素

目前，我们所讲的都是常规流动模式下非置换块级框的横向格式化。块级置换元素的处理方式要简单些，前面针对非置换块级框的规则都成立，不过有个例外：width 为 auto 时，置换元素的 width 等于内容自身的宽度。如果图像自身的宽度为 20 像素，下述示例中的图像将为 20 像素宽：

```html
<img src="smile.svg" style="display: block; width: auto; margin: 0;">
```

如果图像自身的宽度为 100 像素，那么它就占 100 像素宽。

明确为 width 提供一个值可以覆盖这个规则。比如说，修改前例，同一个图像显示三次，每次设定的宽度都不同：

```html
<img src="smile.svg" style="display: block; width: 25px; margin: 0;">
<img src="smile.svg" style="display: block; width: 50px; margin: 0;">
<img src="smile.svg" style="display: block; width: 100px; margin: 0">
```

这段标记的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E6%94%B9%E5%8F%98%E7%BD%AE%E6%8D%A2%E5%85%83%E7%B4%A0%E7%9A%84%E5%AE%BD%E5%BA%A6.png)

注意，元素的高度随之增加了。如果置换元素的 width 与自身宽度不同，height 的值会按比例变化，除非明确设定 height 的值。反过来亦然，如果设定了 height，而把 width 设为 auto，那么宽度会随着高度按比例变化。

既然提到高度了，下面就来讨论常规流动模式下块级框的纵向格式化。

<br>

## 10. 纵向格式化

块级框的纵向格式化与横向格式化类似，也有一些有趣的行为。元素的内容决定元素的默认高度。内容的宽度对高度也有影响，例如，段落越窄，为了包含内部的所有内容，高度就越高。

通过 css 可以为任何块级元素设定具体的高度。这么做得到的结果取决于多个因素。假设指定的高度大于显示内容所需的高度：

```html
<p style="height: 10em;"></p>
```

此时，多出的高度看起来像是内边距。再假设指定的高度小于显示内容所需的高度：

```html
<p style="height: 3.33em;"></p>
```

那么，浏览器要提供查看全部内容的方式，而且前提是不增加元素框的高度。如果元素的内容比框体高，用户代理的具体行为取决于 overflow 属性。这种情况下的两种显示方式如下图所示。

在 css1 中，对置换元素来说（例如图像），用户代理可以忽略 auto 之外的任何高度值。在 css2 及以上版本中，height 的值不再允许忽略。唯一的例外是涉及百分数的特殊情况。这一点稍后讨论。

与 width 一样，height 默认定义内容区的高度，而不是元素框可见区域的高度。元素框的上下内边距、边框和外边距在高度的基础上增加，除非 box-sizing 属性的值不是 content-box。

<br>

## 11. 纵向格式化属性

与横向格式化一样，纵向格式化也涉及七个属性：margin-top、border-top、height、padding-bottom、border-bottom 和 margin-botttom。这些属性作用的区域见下图。

这七个属性的值加在一起必须等于块级框的容纳块的高度。通常，这是块级框父元素的 height 值（因为块级元素的父元素几乎都是块级元素）。

这七个属性中只有三个可以设为 auto：元素的高度和上下外边距。上下外边距和边框必须设为具体的值，否则取默认值零（假设未声明边框的样式）。如果设定了边框样式（border-style），那么边框的宽度默认为不具体的 medium。下图展示了元素框的哪些部分可以设为 auto，而哪些部分不能。

奇怪的是，在常规流动模式下，如果把块级元素的 margin-top 或 margin-bottom 设为 auto，二者都自动计算为 0。如此看来，常规流动模式下的元素无法轻易在容纳块中纵向居中。这也意味着，如果把元素的上下外边距设为 auto，最终会重置为 0，不会体现在元素框上。

>定位元素和弹性盒元素对设为 auto 的上下外边距的处理方式有所不同。

height 属性要么设为 auto，要么设为某种类型的非负值，决不能小于零。

<br>

## 12. 百分数高度

我们已经知道如何处理值为具体长度的高度，下面花点时间讨论百分数高度。在常规流动模式下，如果把块级框的高度设为百分数，百分数是相对框体的容纳块的高度而言的。对下述标记来说，段落的高度将是 3em：

```html
<div style="height: 6em;">
    <p style="height: 50%;">Half as tall</p>
</div>
```

既然把上下外边距设为 auto 得到的外边距为零，那么针对这个例子，若想纵向居中元素，只能把上下外边距都设为 25%。不过，这样只能把框体居中，里面的内容不居中。

然而，如果未明确声明容纳块的高度，那么百分数高度将被重置为 auto。在上例中，如果把 div 的 height 改为 auto，那么段落的高度将与 div 一样：

```html
<div style="height: auto;">
    <p style="height: 50%;">NOT half as tall; height reset to auto</p>
</div>
```

这两种情况如下图所示（段落边框和 div 边框之间的空白是段落的上外边距）。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E4%B8%8D%E5%90%8C%E6%83%85%E5%86%B5%E4%B8%8B%E7%9A%84%E7%99%BE%E5%88%86%E6%95%B0%E9%AB%98%E5%BA%A6.png)

继续讨论之前，仔细看一下上图中的第一个示例，即那个占据一半高度的段落。看起来，那个段落占据一半高度，但是并没有纵向居中。这是因为容纳块 div 的高度为 6em，占据一半高度的段落是 3em 高。但是，段落的上下外边距均为 1em，所以整个框体的高度是 5em。这意味着，段落可见框体底部到 div 底边的距离是 2em，而不是 1em。初看起来，这可能有点奇怪，但是了解细节之后你便会知道这是合理的。

<br>

## 13. 自动调整高度

在常规流动模式下，声明 height: auto 的块级框是最简单的，此时，框体的高度恰好能放得下里面的内容。常规流动模式下的块级框如果高度是自动调整的，而且子代都是块级元素，那么默认的高度是从最上边那个块级子代元素的上边框外侧到最下边那个块级子代元素的下边框外侧之间额距离。因此，子元素的外边距游离在所属元素的外部（这个行为在下一节说明）。

然而，如果块级元素有上内边距或下内边距，或者有上边框或下边框，那么其高度是从最上边那个子元素的上外边距的外边界到最下边那个子元素的下外边距的外边界之间的距离。

```html
<div style="height: auto; background: silver;">
    <p style="margin-top: 2em; margin-bottom: 2em;">A paragraph</p>
</div>

<div style="height: auto; border-top: 1px solid; border-bottom: 1px solid; background: silver;">
    <p style="margin-top: 2em; margin-bottom: 2em;">Another paragraph</p>
</div>
```

这两种情况如下图所示。

如果把前例中的边框改为内边距，div 元素的高度不变，外边距依然算在其中。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E9%AB%98%E5%BA%A6%E8%87%AA%E5%8A%A8%E8%B0%83%E6%95%B4%E7%9A%84%E5%85%83%E7%B4%A0%E4%B8%AD%E7%9A%84%E5%9D%97%E7%BA%A7%E5%AD%90%E5%85%83%E7%B4%A0.png)

<br>

## 14. 折叠纵向外边距

纵向格式化的另一个重要特征是，相邻的纵向外边距会折叠。只有外边距有这种折叠行为。内边距和边框（如果有的话），绝不与任何区域折叠。

通过纵向罗列的无序列表最易说明外边距折叠行为。假设把下述声明应用到一个有五个项目的列表上：

```css
li {
    margin-top: 10px;
    margin-bottom: 15px;
}
```

每个列表项目都有 10 像素的上外边距和 15 像素的下外边距。然而，渲染时，相邻的两个列表项目之间的距离是 15 像素，而不是 25 像素。这是因为，相邻的外边距在纵轴上折叠了。换句话说就是，较小的外边距被较大的外边距消去了。下图展示了折叠和未折叠外边距之间的差别。

目前实现的用户代理都会折叠相邻的纵向外边距，如下图中的第一个列表所示，因此列表项目之间的空白是 15 像素。第二个列表展示的是用户代理不折叠外边距时的情况，此时列表项目之间的空白是 25 像素。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E6%8A%98%E5%8F%A0%E5%92%8C%E6%9C%AA%E6%8A%98%E5%8F%A0%E7%9A%84%E5%A4%96%E8%BE%B9%E8%B7%9D.png)

如果你不喜欢折叠这个词，可以换成重叠。虽然外边距并不真的会重叠，但是你可以借助下述比拟想象一下这其中到底发生了什么。

假设每个元素（例如段落）是一小片纸，元素中的内容写在纸上。纸片四周有一些透明塑料，表示外边距。先把第一片纸（假如表示 h1 元素）放在画布上，然后在下面再放一片纸（一个段落），向上移动，直到其中一片纸的边缘与另一片纸的边缘接触为止。如果第一片纸的下部有半英寸塑料，第二片纸的上部有三分之一英寸塑料，那么两片纸移到一起时，第一片纸的塑料将碰到第二片纸的上边缘。两片纸平稳放到画布上之后，纸四周的塑料就重叠了。

多个外边距同时出现时也会折叠，例如在列表的末尾。假设把下述规则应用到前例上：

```css
ul {
    margin-bottom: 15px;
}

li {
    margin-top: 10px;
    margin-bottom: 20px;
}

h1 {
    margin-top: 28px;
}
```

列表中最后一个项目的下外边距为 20 像素，ul 元素的外边距为 15 像素，而后面的 h1 元素的上外边距为 28 像素。因此，折叠外边距之后，最后一个 li 元素的底部与 h1 元素的顶部之间的距离为 28 像素，如下图所示。

你可能还记得前一节的示例，为容纳块添加边框或内边距之后，子元素的外边距便包含其中。现在我们在前述规则的基础上为 ul 元素添加边框，看一下效果：

```css
ul {
    margin-bottom: 15px;
    border: 1px solid;
}

li {
    margin-top: 10px;
    margin-bottom: 20px;
}

h1 {
    margin-top: 28px;
}
```

这样修改之后，li 元素的下外边距在父元素（ul）的范围内。此时，只有 ul 和 h1 之间的外边距会出现折叠，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E6%B7%BB%E5%8A%A0%E8%BE%B9%E6%A1%86%E5%90%8E%E6%9C%89%E7%9A%84%E5%A4%96%E8%BE%B9%E8%B7%9D%E6%8A%98%E5%8F%A0%EF%BC%8C%E6%9C%89%E7%9A%84%E4%B8%8D%E6%8A%98%E5%8F%A0.png)

<br>

## 15. 负外边距和折叠

负外边距对纵向格式化有一定影响，比如会影响外边距的折叠。如果两个相邻的外边距都是负值，浏览器取其中绝对值较大的那个，然后从正外边距中减去它的绝对值。也就是说，把负值与正值相加，得到的结果为两个元素之间的距离。下图给出了两个具体的例子。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E7%BA%B5%E5%90%91%E5%A4%96%E8%BE%B9%E8%B7%9D%E4%B8%BA%E8%B4%9F%E7%9A%84%E4%BE%8B%E5%AD%90.png)

注意上下外边距为负时出现的上移现象。这与横向外边距为负时从父元素中溢出没什么区别。以下述规则和标记为例：

```css
p.neg {
    margin-top: -50px;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 0;
    border: 3px soid gray;
}
```

```html
<div style="width: 420px; background-color: silver; padding: 10px; margin-top: 50px; border: 1px solid;">
    <p class="neg">
        A paragraph.
    </p>
    
    A div.
    
</div>
```

从下图中可以看出，由于上外边距为负，那个段落上移了。注意，div 元素中那个段落后面的内容也向上移了 50 像素。其实，那个段落后面常规流动模式下的每个元素都会向上移 50 像素。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E4%B8%8A%E5%A4%96%E8%BE%B9%E8%B7%9D%E4%B8%BA%E8%B4%9F%E6%97%B6%E7%9A%84%E6%95%88%E6%9E%9C.png)

对比一下下述标记与下图中显示的效果：

```css
p.neg {
    margin-bottom: -50px;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 0;
    border: 3px solid gray;
}
```

```html
<div style="width: 420px; margin-top: 50px;">
    <p class="neg">
        A paragraph.
    </p>
</div>
<p>
    The next paragraph.
</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E4%B8%8B%E5%A4%96%E8%BE%B9%E8%B7%9D%E4%B8%BA%E8%B4%9F%E6%97%B6%E7%9A%84%E6%95%88%E6%9E%9C.png)

出现上图中这种情况的原因是，div 后面的元素是参照 div 的底边放置的。可以想见，div 的底边其实在内部那个段落视觉上的底边上部，而 div 后面的元素是从这一位置计算与 div 底边的距离的。对上述规则来说，这个结果是正确的。

下面再看一个例子，这里列表项目、无序列表和段落的外边距都会折叠。无序列表和段落的外边距均为负值，如下所示：

```css
li {
    margin-bottom: 20px;
}

ul {
    margin-bottom: -15px;
}

h1 {
    margin-top: -18px;
}
```

两个负外边距中绝对值较大的那个（-18px）与最大的正外边距（20px）相加，得到 20px - 29px = 2px。因此，列表项目内容区的底边到 h1 元素内容区的顶边之间只有 2 像素，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E6%AD%A3%E8%B4%9F%E5%A4%96%E8%BE%B9%E8%B7%9D%E6%8A%98%E5%8F%A0%E5%9B%BE%E8%A7%A3.png)

如果负外边距导致元素重叠，很难分清哪个元素在上边。你可能注意到了，本节所举的例子都没有使用背景色。如果这么做了，后续元素的背景色可能会遮盖起那面元素的内容。这是可以预见的，因为浏览器是从头到尾按顺序渲染元素的，在常规流动模式下，如果文档中位于后面的元素与前面的元素重叠了，理应遮盖元素的内容。

<br>

## 16. 列表项目

列表项目有些独特的规则。列表项目目前通常有个记号，例如小圆点或数字，但这个记号其实不在列表项目的内容区中，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E5%88%97%E8%A1%A8%E9%A1%B9%E7%9B%AE%E7%9A%84%E5%86%85%E5%AE%B9%E5%8C%BA.png)

在文档的布局方便，css1 没有详细规定记号的位置和效果。鉴于此，css2 引入了专门解决这个问题的属性，例如 marker-offset。然而，由于没有多少浏览器实现，以及想法的变化，css 2.1 又移除了这个属性。不过，已经有了新的想法（可能还没确定具体的句法）。因此，记号的位置远非创作人员能控制的，至少目前是这样。

记号可以放在列表内容区的外部，也可以作为行间内容，放在内容区的开头，这取决于 list-style-position 属性的值。如果把记号放在内部，列表项目与周围元素之间的关系就跟块级元素一模一样，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E6%8A%8A%E8%AE%B0%E5%8F%B7%E6%94%BE%E5%9C%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E7%9B%AE%E5%A4%96%E9%83%A8%E5%92%8C%E5%86%85%E9%83%A8.png)

如果把记号放在内容区外部，记号与内容区的左边（假设是由左至右书写的语言）有一定的距离。不管如何调整列表的样式，记号与内容区边界之间的距离始终不变。有时，记号甚至可能超出列表元素本身，如上图所示。

注意，与常规的块级框一样，列表项目框为其后代定义容纳块。

<br>

# 3. 行内元素

除块级元素之外，行内元素是最为常见的。行内元素的相关属性能实现更有趣的效果。常见的行内元素有 em 和 a 非置换元素，以及置换元素，图像。

注意，本节所述的行为均不适用于表格元素。表格及其内容的行为与块级元素和行内元素有极大的差异，因此 css2 引入了专门的新属性和行为。本书不讨论表格装饰，因为这是一个全新的领域，而且异常繁琐。

行内的非置换元素和置换元素有些许差异，在讲解行内元素构成的过程中将逐一说明。

<br>

## 1. 行布局

首先要明白行内内容是如何布局的。块级元素相对简单，生成的块级框通常不与其他内容共处一行。行内元素就没这么简单了，不信的话，你可以看一下块级元素（例如一个段落）的内部。你可能会有这样的疑问：这些文本行是如何显示出来的？为什么要这样排列？可以采用何种方式控制？

为了弄清文本行是如何生成的，下面以一个文本行特别长的元素为例，如下图所示。注意，我们把整行文本放在一个 span 元素中，并为其设定了边框：

```css
span {
    border: 1px dashed black;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E5%8F%AA%E6%9C%89%E4%B8%80%E8%A1%8C%E5%86%85%E5%AE%B9%E7%9A%84%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0.png)

上图所示的情况非常简单，就是放在块级元素中的一个行内元素。说白了，这与只有两个单词的段落没什么大的区别。这里唯一的区别是，上图中的单词数量多了些，而且放在一个行内元素（span）中。

先从我们熟悉的概念入手，定义元素的宽度。有了宽度的限制，这行文本将分成几行显示，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E5%88%86%E4%B8%BA%E5%A4%9A%E8%A1%8C%E6%98%BE%E7%A4%BA%E7%9A%84%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0.png)其实我们没做什么，只是把单行文本分成了多行，从上到下排列着显示。

在上图中，各行的边框恰巧与上下边重合。这种情况仅当行内文本没有内边距才会发生。注意，边框稍微有点重合。例如，第一行的下边框正好位于第二行上边框的下方。这是因为边框在各行外部的下一像素（假设你用的是显示器）处绘制。既然行与行之间是相互接触的，那么边框肯定会像上图中那样重叠。

如果调整 span 元素的样式，为其设定背景色，那么各行的位置就比较明晰了。如下图所示，图中有四个段落，每个段落的 text-align 值有所不同，而且段落中的各行都有背景色。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E4%B8%8D%E5%90%8C%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F%E4%B8%8B%E7%9A%84%E6%96%87%E6%9C%AC%E8%A1%8C.png)图中的灰色虚线是段落内容区的边界，可以看出，不是每一行都能延伸到段落的边界。对左对齐那一段来说，每一行都靠左边界显示，而行尾在断行处结束。右对齐那段情况正好相反。对居中对齐那段而言，每一行的中线与段落的中线对齐。

最后一段的 text-align 属性值为 justify，因此每一行的宽度与段落的内容区相等，而且都到达了边界处。然而，由于每一行自身的宽度与段落的宽度是不同的，所以要调整字母及单词之间的距离。鉴于此，两端对齐的文本，其 word-spacing 属性的值可能会被覆盖（如果 letter-spacing 属性的值是一个长度，那就无法被覆盖）。

<br>

## 2. 基本术语和概念

深入讨论之前，先学习有关行内布局的一些基本术语。这对理解后续章节的内容尤为重要。

匿名文本

​	不在任何行内元素中的字符串。例如，在 `<p> I'm <em>so</em> happy!</p>` 标记中，I'm 和 happy! 是匿名文本。注意，空格也是匿名文本的一部分，因	为空格也是一种字符。

字体框

​	由字体具体定义，也叫字符框。字形可能比字体框高或矮。css 中的 font-size 属性控制字体框的高度。

内容区

​	对非置换元素而言，内容区有两种定义，css 规范允许用户代理选择其中一个实现。内容区可以是各字符的字体框连在一起构成的方框，也可以是元素中各字	符的字形合在一起构成的方框。简单起见，本书采用前者。对置换元素来说，内容区是元素自身的高度加上内外边距和边框。

行距

​	行距是 font-size 和 line-height 之差。二者之间的差值除以 2 之后分别添加到内容区的上部和下部。内容区多出来的这部分空间叫半行距（显然的）。只有非	置换元素有行距。

行内框

​	内容区加行距后得到的方框。对非置换元素来说，行内框的高度正好等于 line-height 属性的值。对置换元素而言，行内框的高度等于内容区的高度，因为置	换元素没有行距。

行框

​	过一行中各行内框最高点和最低点的方框。也就是说，行框的顶边过最高那个行内框的顶边，行框的底边多最低那个行内框的底边。

此外，css 还定义了一些行为和有用的概念：

* 内容区相当于块级框的内容框。
* 行内元素的背景填充在内容区加内边距所在的区域里。
* 行内元素的边框在内容区外的内边距外侧。
* 非置换行内元素的内边距、边框和外边距在对应的方框上没有纵向效果，即对行内框（及元素所在的行框）的高度没有影响。
* 然而，置换元素的外边距和边框对行内框的高度有影响，进而对元素所在的行框的高度也有影响。

还要注意一点：行内框在一行中纵向对齐的方式由 vertical-align 属性决定。

在继续之前，先来看一下构建行框的具体步骤。这一过程能让你了解一行中的各部分是如何决定行高的。

一行中各元素的行内框高度是这样确定的：

1. 确定行内各非置换元素和匿名文本的 font-size 和 line-height 值，后者减去前者，得到行距。行距除以 2，分别添加到字体框的上部和下部。
2. 确定各置换元素的 height、margin-top、margin-bottom、padding-top、padding-bottom、border-top-width 和 border-bottom-width 值，各值相加。
3. 确定各内容区在一行的基线上方和下方分别超出多少。这不是件简单的事，你要直到各元素和匿名文本的基线在何处，以及一行的基线在何处，然后把它们对齐。另外，要把置换元素的底边与一行的基线对齐。
4. 确定设定了 vertical-align 属性的元素纵向偏移有多少。这是为了查明元素的行内框向上或向下移动了多少，因为纵向对齐改变了元素与基线之间的距离。
5. 知道所有行内框的位置之后，计算行框的高度：基线与最高那个行内框顶边之间的距离加上基线与最低那个行内框底边之间的距离。

下面详细分析整个过程。这是正确装饰行内内容的关键。

<br>

## 3. 行内格式化

首先要知道，不管有没有显式声明，所有元素都有 line-height 值。这个值在很大程度上影响着行内元素的显示，因此要特别注意。

那么，一行的高度式如何确定的？一行的高度（即行框的高度）由其内部的元素及其他内容（例如文本）的高度决定。注意，line-height 影响行内元素和其他行内内容，但不影响块级元素，至少没有直接影响。块级元素可以设定 line-height 值，但是只对块级元素中的行内内容有视觉影响。以下面这个没有内容的段落为例：

```html
<p style="line-height: 0.25em;"></p>
```

因为那个段落没有内容，没什么可显示的，所以我们看不到任何内容。不管这个段落的 line-height 值是多少，是 0.25em 也好，是 25in 也好，没有任何区别，没有内容就没有行框。

块级元素当然可以有 line-height 值，但是这个值将应用于块级元素内部的内容上（不管在不在行内元素中）。从某种程度上讲，块级元素中的各文本行本身就是行内元素，不论是否真的在行内标签中都是如此。如果愿意，可以想象成有个虚构的标签，如下所示：

```html
<p>
    <line>This is a paragraph with a number of</line>
    <line>lines of text which make up the</line>
    <line>contents.</line>
</p>
```

尽管 line 标签并不存在，但是段落的行为就像有这些标签一样，每行文本都从段落上继承样式。为了避免麻烦，你可以为块级元素设定 line-height 值，这样就无需为每个行内元素（虚构的或真实的）设定 line-height 值了。

通过虚构的 line 标签，我们明确了为块级元素设定 line-height 值的效果。根据 css 规范，为块级元素设定 line-height 值的作用是为块级元素中的内容设定行框的最小高度。例如，p.spacious { line-height: 24pt } 的作用是把各行框的最小高度设为 24 点。理论上讲，只有行内元素能继承行高时，其中的内容才会继承。但是，多数文本不在行内元素中。如果你假设各行都在虚构的 line 元素中，这就说得通了。

<br>

## 4. 行内非置换元素

在现有的格式化知识基础上，下面我们来讨论只含非置换元素上（或匿名文本）的行。了解这一点之后，你便能更好地理解行布局中非置换元素和置换元素之间的区别了。

### 行框的构成

首先，对非置换元素或匿名文本来说，font-size 值决定内容区的高度。如果行内元素的 font-size 为 15px，那么其内容区的高度就是 15 像素，因为元素中的所有字体框高度都是 15 像素，如下图所示。

接下来要考虑的是元素的 line-height 值，以及它与 font-size 值之差。如果行内非置换元素的 font-size 为 15px、line-height 为 21px，那么二者之差为 6 像素。用户代理把这 6 像素一分为二，一半添加到内容区上部，一半添加到内容区的下部，得到行内框。这个过程如下图所示。

假设有下述标记：

```html
<p style="font-size: 12px; line-height: 12px;">
    This is text, <em>some of which is emphasized</em>, plus other text <br>
    which is <strong style="font-size: 24px;">strongly emphasized</strong>
    and which is <br>
    larger than the surrounding text.
</p>
```

在这个示例中，多数文本的 font-size 为 12px，但是有个行内非置换元素的字号为 24px。然而，所有文本的 line-height 都是 12px，因为 line-height 是会被继承的属性。因此，strong 元素的 line-height 仍是 12px。

鉴于此，对那些 font-size 和 line-height 都为 12px 的文本来说，内容高度不变（因为 12px 减 12px 等于零），所以行内框的高度为 12 像素。然而，对加粗文本而言，line-height 和 font-size 之差为 -12px。除以 2 之后得到半行距（-6px），然后分别添加到内容区的上部和下部，得到行内框。因为添加的是负值，所以行内框的最终高度为 12 像素。这个 12 像素高的行内框在 24 像素高的内容区里纵向居中显示，因此行内框比内容区小一点。

目前来看，我们对每段文本的分析方式是一样的，而且最终得到的行内框高度相同，但事实要比这复杂。第二行里的各行内框虽然高度相等，但是由于文本都是与基线对齐的，各部分文本并不是平齐的（见下图）。

因为行内框决定着行框的总体高度，所以各行内框的位置特别重要。我们知道，行框的高度是指从最高那个行内框的顶边到最低那个行内框的底边之间的距离，而行框的顶边与前一行的底边是紧凑在一起的。下图中的文本所在的段落如下图所示。

因为行内框决定着行框的总体高度，所以各行内框的位置特别重要。我们知道，行框的高度是指从最高那个行内框的顶边到最低那个行内框的底边之间的距离，而行框的顶边与前一行的底边是紧挨在一起。下图中的文本所在的段落如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E4%B8%80%E4%B8%AA%E6%AE%B5%E8%90%BD%E4%B8%AD%E7%9A%84%E5%90%84%E8%A1%8C%E6%A1%86.png)

从上图可以看出，中间那一行比其他两行要高，但是还不足以包含全部文本。匿名文本所在的行内框决定行框的底边位置，而加粗元素所在的行内框的顶边。因为那个行内框的顶边在元素的内容区内部，所以加粗元素的内容超出了行框，叠加到其他行框上了。最终的结果是，那部分文本显得不太协调。

>稍后将说明对应这种行为的方法，以及实现相同基线间距的方法。

<br>

### 纵向对齐

改变行内框的纵向对齐方式后，仍以相同的过程确定高度。假设我们把 strong 元素的纵向对齐设为 4px：

```html
<p style="font-size: 12px; line-height: 12px;">
    This is text, <em>some of which is emphasized</em>, plus other text<br>
    which is <strong style="font-size: 24px; vertical-align: 4px;">strongly emphasized</strong> and that is <br>
    larger than the surrounding text.
</p>
```

这个小小的改动把 strong 元素向上抬升了 4 像素，而且是内容区与行内框一起移动。现在，strong 元素所在的行内框的顶边是一行中最高的，因此此次修改纵向对齐还把行框的顶边向上移了 4 像素，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E7%BA%B5%E5%90%91%E5%AF%B9%E9%BD%90%E5%BD%B1%E5%93%8D%E8%A1%8C%E6%A1%86%E7%9A%84%E9%AB%98%E5%BA%A6.png)

再来看一种情况。这里，我们在加粗文本那一行里又添加了一个行内元素，而且不是与基线对齐的：

```html
<p style="font-size: 12px; line-height: 12px;">
    This is text, <em>some of which is emphasized</em>, <br>
    plus other text that is <strong style="font-size: 24px;">strong</strong>
    and <span style="vertical-align: top;">tall</span> and is <br>
    larger than the surrounding text.
</p>
```

结果与之前一样，中间那一行的行框比其他行框要高。然而，请注意 tall 的对齐方式，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E4%B8%8E%E8%A1%8C%E6%A1%86%E5%AF%B9%E9%BD%90.png)

这里，tall 文本所在的行内框的顶边与行框的顶边对齐。因为 tall 文本的 font-size 和 line-height 值相等，所以内容区与行内框的高度相等。然而，再看下面这种情况：

```html
<p style="font-size: 12px; line-height: 12px;">
    This is text, <em>some of which is emphasized</em>,<br>
    plus other text that is <strong style="font-size: 24px;">strong</strong>
    and <span style="vertical-align: top; line-height: 2px;">tall</span> and is<br>
    larger than the surrounding text.
</p>
```

现在，tall 文本的 line-height 比 font-size 小，因此其行内框的高度比内容区下。这处细微的变化将改变文本的位置，因为其行内框的顶边要与行框的顶边对齐。此时得到的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E6%96%87%E6%9C%AC%EF%BC%88%E5%86%8D%E6%AC%A1%EF%BC%89%E8%B6%85%E5%87%BA%E8%A1%8C%E6%A1%86.png)

此外，还有可能把 tall 文本的 line-height 设定的比 font-size 大。例如：

```html
<p style="font-size: 12px;line-height: 12px;">
    This is text, <em>some of which is emhasized</em>, plus other text<br>
    that is <strong style="font-size: 24px;">strong</strong>
    ad <span style="vertical-align: top; line-height: 18px;">tall</span>
    and that is<br>
    larger than the surrounding text.
</p>
```

我们把 tall 文本的 line-height 设为 18px，因此 line-height 和 font-size 之差为 6 像素。半行距（3 像素）添加到内容区上之后，得到的行内框为 18 像素高。这个行内框的顶边与行框的顶边对齐。类似地，如果 vertical-align 的值为 bottom。那么行内元素的行内框的底边将与行框的底边对齐。

下面使用本章采用的术语描述 vertical-align 各个关键字值的效果：

top

​	元素行内框的顶边与所在行框的顶边对齐。

bottom

​	元素行内框的底边与所在行框的底边对齐。

text-top

​	元素行内框的顶边与父元素内容区的顶边对齐。

text-bottom

​	元素行内框的底边与父元素内容区的底边对齐。

middle

​	元素行内框的纵向中点与父元素基线以上 0.5ex 处的点对齐。

super

​	向上移动元素的内容区和行内框，无法指定移动距离，不同的用户代理之间可能有区别。

sub

​	与 super 类似，只不过是向下移动。

`<percentage>`

​	向上或向下移动元素，移动的距离等于声明的百分数乘以元素的 line-height 值。

<br>

### 控制行高

读过前面几小节我们知道，修改行内元素的 line-height 值会导致一行中的文本与另一行重叠。但是，之前都是修改单个元素的行高。那么有没有一般性的方法，能让 line-height 的值不导致行之间有重叠？

一种方法是为字号有变化的元素设定单位为 em 的行高。例如：

```css
p {
    line-height: 1em;
}

big {
    font-size: 250%;
    line-height: 1em;
}
```

```html
<p>
    Not only does this paragraph have normal text, but it also<br>
    contains a line in which <big>some big text</big> is found.<br>
    This large text helps illustrate our point.
</p>
```

这里为 big 元素设定的 line-height 值增加了行框的整体高度，为显示 big 元素提供了足够的空间，不会再出现文本重叠，而且也没有改变段落中其他几行的行高。我们把 big 元素的 line-height 值设为 1em，因此 big 元素的行高将与字号相等，还记得，line-height 相对元素自身的 font-size 而言，跟父元素没关系。结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E4%B8%BA%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E8%AE%BE%E5%AE%9A%20line-height%20%E5%B1%9E%E6%80%A7.png)

前几小节的内容一定要理解，添加边框后情况变得更加复杂。假如我们想为超链接添加 5 像素宽的边框：

```css
a:link {
    border: 5px solid blue;
}
```

如果不把 line-height 设为足够大的值，边框将遮盖其他行。为了避免这种情况发生，我们可以通过 line-height 增加未访问链接的行内框尺寸，这与之前处理 big 元素的方式差不多。这里，我们只需让 line-height 的值比链接的字号大 10 像素即可。然而，倘若我们不知道链接的字号为多少像素，就很难保证这一点。

另一种方法是增加整个段落的 line-height 值。这样整个段落中的每一行都受影响，而不仅仅是段落中带边框的超链接。

```css
p {
    line-height: 1.8em;
}

a:link {
    border: 5px solid blue;
}
```

因为每一行上下都增加了一定的空白，所以超链接四周的边框不会与其他行出现重叠，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E5%A2%9E%E5%8A%A0%E8%A1%8C%E9%AB%98%EF%BC%8C%E4%B8%BA%E8%A1%8C%E5%86%85%E7%9A%84%E8%BE%B9%E6%A1%86%E7%95%99%E5%87%BA%E7%A9%BA%E9%97%B4.png)

这里之所以可以使用这种方法，是因为所有文本的字号都相同。如果行内某个元素改变了行框的高度，那么边框情况可能也会发生变化。请看下述规则：

```css
p {
    font-size: 14px;
    line-height: 24px;
}

a:link {
    border: 5px solid blue;
}

big {
    font-size: 150%;
    line-height: 1.5em;
}
```

根据上述规则，段落中 big 元素的行内框高为 31.5 像素（14 ⨉ 1.5 ⨉ 1.5），这也是行框的高度。为了确保基线是对齐的，p 元素的 line-height 必须等于或大于 32px。

<br>

### 基线与行高

行框的具体高度取决于行中各部分之间是如何对齐的，而这又在很大程度上取决于基线落在元素（或匿名文本）的什么位置，因为这个位置决定着行内框是如何摆放的。字体框中基线的位置在每个字体中不尽相同。这个信息内置在字体文件中，除了直接编辑字体文件之外，无法修改。

保持基线对齐更像是一种技艺，而非科学。如果使用相同的单位（例如 em）声明字号和行高，得到的基线很有可能是对齐的。然而，如果混用不同的单位，就困难得多，甚至是不可能的。写作本书时，为了让创作人员能够强制对齐基线，而不管行内有什么内容，相关人员已经提出提案，增加部分属性。如果提案获得通过，网络排版在某些方面将得到极大的简化。不过，提议的属性还都没有实现，离实际使用还远得很。

<br>

### 按比例设定行高

实践证明，设定 line-height 值的最佳方式是使用纯数字。这是因为纯数字相当于比例因子，而这个因子能被继承，而不计算为具体的值。假设我们想把文档中所有元素的 line-height 设为 font-size 的 1.5 倍，可以这么做：

```css
body {
    line-height: 1.5;
}
```

这个比例因子将沿着元素继承关系一层一层向下传递，作为各元素 font-size 值的乘数。因此，下述标记和规则得到的结果如下图所示。

```css
p {
    font-size: 15px;
    line-height: 1.5;
}

small {
    font-size: 66%;
}

big {
    font-size: 200%;
}
```

```html
<p>This paragraph has a line-height of 1.5 times its font-size. In addition,
any elements within it <small>such as this small element</small> also have
line-heights 1.5 times their font-size…and that includes <big>this big
element right here</big>. By using a scaling factor, line-heights scale
to match the font-size of any element.</p>
```

在这个示例中，small 元素的行高为 15 像素，big 元素的行高为 45 像素（行高看起来有些大，不过却与页面的整体设计协调一致）。当然，如果不想让 big 元素中的文本占这么大的行距，可以为其设定 line-height 值，覆盖继承的比例因子：

```css
p {
    font-size: 15px;
    line-height: 1.5;
}

small {
    font-size: 66%;
}

big {
    font-size: 200%;
    line-height: 1em;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E6%8A%8A%20line-height%20%E8%AE%BE%E4%B8%BA%E4%B8%80%E4%B8%AA%E6%AF%94%E4%BE%8B%E5%9B%A0%E5%AD%90.png)

还有一种方法（可能是最简单的方法），即适当地设置样式，使行高恰好能包含行中地内容，没有多余的空间。此时可以把 line-height 设为 1.0，这样乘以 font-size 值之后得到的值与字号一样。因此，每个元素的行内框高度与内容区高度相同，而这正好是内容区的最小高度。

多数字体的字形之间都留有一定的空白，因为字符通常比字体框要小一些。但手写体（草书字体）例外，这种字体的字形往往比字体框大。

<br>

### 加上盒模型属性

从前面的讨论可以了解到，内边距、外边距和边框都可以应用到行内非置换元素上。但是行内元素的这些属性并不影响行框的总体高度。如果为 span 元素设定边框，但不设定外边距或内边距。得到的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E8%A1%8C%E5%86%85%E8%BE%B9%E6%A1%86%E5%92%8C%E8%A1%8C%E6%A1%86%E5%B8%83%E5%B1%80.png)

边框的边界由 font-size 控制，而不受 line-height 影响。也就是说，如果 span 元素的 font-size 值为 12px、line-height 值为 36px，那么内容区的高度为 12px，而边框出现在内容区的四周。

当然，我们可以为行内元素设定内边距，在边框和文本之间添加一些间距：

```css
span {
    padding: 4px;
}
```

注意，内边距并不影响内容区的高度，因此也不影响元素行内框的高度。类似地，行内元素的边框也不影响行框的生成和布局方式，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E5%86%85%E8%BE%B9%E8%B7%9D%E5%92%8C%E8%BE%B9%E6%A1%86%E4%B8%8D%E6%94%B9%E5%8F%98%E8%A1%8C%E9%AB%98.png)

而外边距实际上不会添加到行内非置换元素的上部和下部，因此也就不影响行框的高度。不过行内元素的两端确受外边距的影响。

你应该还记得，行内元素基本上是按一行放置的，然后再分成多个部分。因此，行内元素的外边距会出现在元素的开头和结尾，即左外边距和右外边距。内边距也会出现在两端。因此，虽然内外边距（和边框）不影响行高，但是对元素内容的布局确有影响，它们会在横向上把文本推开。其实，负的左右外边距能让文本靠的更近，甚至出现重叠，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E4%B8%A4%E7%AB%AF%E7%9A%84%E5%86%85%E5%A4%96%E8%BE%B9%E8%B7%9D.png)

行内元素可以想象成外围有一圈塑料的纸片。行内元素分成多行显示就相当于把一个大纸片剪成多个小纸片。然而，每个小纸片不再有额外的塑料边。小纸片上的塑料边还是最初那个大纸片上的塑料边，所以看上去只是大纸片（行内元素）的开头和末尾有塑料边。至少，这是默认的行为。稍后你将发现，还有另一种行为。

如果行内元素有背景色和足量的内边距，导致行的背景出现重叠，那情况又如何？以下述规则为例：

```css
p {
    font-size: 15px;
    line-height: 1em;
}

p span {
    background: #FAA;
    padding-top: 10px;
    padding-bottom: 10px;
}
```

span 元素的内容区高度为 15 像素，而且我们在内容区的上下各添加了 10 像素的内边距。额外增加的内边距没有改变行框的高度，原本这也没什么。但是有了背景色之后就不同了。此时得到的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E8%A1%8C%E5%86%85%E8%83%8C%E6%99%AF%E5%87%BA%E7%8E%B0%E9%87%8D%E5%8F%A0.png)

css 2.1 明确指出，行框是按文本出现在文档中的顺序绘制的：这会导致后面行的边框出现在前面行的边框上。背景色也是这个道理，如上图所示。而 css2 允许用户代理修剪（即不渲染）边框和内边距区域。因此，具体后果在很大程度上取决于用户代理遵守的是哪个规范。

<br>

### 改变断行行为

前一小节讲到，把一个行内非置换元素分成多行显示时，用户代理将其视为断成多块的一长行，每换一行就多一块。这其实是默认行为，可以通过 box-decoration-break 属性改变。

```css
box-decoration-break

取值：slice | clone
初始值：slice
适用于：所有元素
计算值：指定的值
继承性：否
动画性：否
```

默认值 slice 的行为参见前一小节。另一个值 clone 把元素各片段视作单独的框。这意味着什么？请比较下图中的两个示例，除了 box-decoration-break 属性的值不同之外，标记和其他样式都一样。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/%E5%88%87%E6%96%AD%E5%92%8C%E5%85%8B%E9%9A%86%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E7%9A%84%E7%89%87%E6%AE%B5.png)二者之间有很多明显的区别，但也有一些不是那么显而易见，比如，后一个示例中每个片段都有内边距，包括断行处，而且，每个片段四周都有自成一体的边框，而没有被切断。

有一处不太显眼的区别，即二者之间背景图的位置是不同的。在切断版本中，背景图随其他内容一起被切断，因此源图只在其中一个片段里。而在克隆版本中，每个片段中都有一个源图。这意味着，如果背景图不重复，那么每个片段中都将出现一次，而不会只在一个片段中出现。

box-decoration-break 属性最常用于行内框，不过只要存在换行的情况都适用，例如在分页媒体中由于换页而打断的元素。此时，每个片段都是独立的一块。如果设定 box-decoration-break: clone，那么每个片段就是一个副本，单独应用边框、内边距、背景等。多栏布局一样，如果因为换栏而把元素打断了，box-decoration-break 的值将影响渲染方式。

<br>

### 字形与内容区

你可能会尽量避免行内非置换元素的背景重叠，尽管如此，这种情况还是有可能发生，这取决于你所用的字体。根源在于字体的字体框和字形之间可能存在差异。事实是，多数字体的字体框高度与字形高度是不一致的。

听起来十分抽象，但这一点却有实际影响。css 2.1 规范是这么说的，内容区的高度应该由字体确定，但本规范并不规范具体细则，用户代理可以使用字体框，也可以使用字体的最大上伸和下沿值（后一种方式能保证超出字体框上部或下部的字形仍然落在内容区中，但是不同的字体得到的行内框是不同的）。

也就是说，行内非置换元素的绘制区由用户代理确定。如果用户代理把字体框的高度当作内容区的高度，那么行内非置换元素的背景高度等于字体框的高度（即 font-size 的值）。如果用户代理使用字体的最大上伸和下沿值，那么背景的高度可能比字体框高或矮。此时，如果把行内非置换元素的行高设为 1em，背景依然会与其他重叠。





















