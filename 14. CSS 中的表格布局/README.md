看到本章的标题你可能一愣，表格布局？这不正是我们极力避免的吗？确实如此，但本章讨论的不是使用表格布局，而是通过 CSS 排布表格的方式。这个话题看似简单，实则复杂得多。

与文档布局中的其他内容相比，表格不同寻常。在弹性盒和栅格出现之前，只有表格能把不同尺寸的元素整齐排列在一起。例如，不管单元格中的内容是多是少，一行中的所有单元格都具有相同的高度。在同一列中，单元格的宽度也是如此。相邻的单元格可以共用一个边框，即使两个单元格的边框样式差异巨大。在阅读本章的过程中你会发现，这些特性是由表格特有的行为和规则（很多是历史遗留问题）决定的。

<br>

# 1. 表格格式化

在深究单元格的边框是如何绘制的、表格的尺寸是如何确定的之前，先来了解表格的基本构成，以及表格中元素之间的关系。这方面的知识称为表格格式化，它与表格布局是完全不同的话题，只有格式化完成后才能开始布局。

<br>

## 1. 表格的视觉排布

首先要知道如何通过 CSS 定义表格的排布方式。这是基础，掌握之后才能知道如何以最好的方式装饰表格。

对 CSS 而言，表格元素和表格内部元素是两个不同的概念。在 CSS 中，表格内部元素生成矩形框，有内容、内边距和边框，但是没有外边距。因此，外边距无法定义两个单元格之间的间隔。遵守 CSS 规范的浏览器将忽略应用到单元格、行和其他表格内部元素（表题例外，参见 14.1.5 节）上的外边距。

表格排布有六条基本规则。这些规则的基础是单元格，即由绘制表格的栅格线围成的区域。在下图中的两个表格里，栅格单元以虚线表示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC14%E7%AB%A0%EF%BC%9ACSS%20%E4%B8%AD%E7%9A%84%E8%A1%A8%E6%A0%BC%E5%B8%83%E5%B1%80/%E8%A1%A8%E6%A0%BC%E5%B8%83%E5%B1%80%E7%9A%84%E5%9F%BA%E7%A1%80%E6%98%AF%E6%A0%85%E6%A0%BC%E5%8D%95%E5%85%83.png)

在简单的 2 ⨉ 2 表格中，例如上图中左边那个，栅格单元对应的就是单元格。在复杂的表格中，例如上图中右边那个，有些单元格跨多个栅格单元，但是请注意，每个单元格的边界都沿着栅格单元的边界放置。

栅格单元大都是理论上的结果，无法装饰，甚至不能通过文档对象模型（DOM）访问。我们只是通过它说明，在 CSS 的语义下，表格是如何构成的。

<br>

### 表格排布规则

* 一个行框包含一个由栅格单元构成的行。表格中的全部行框按出现在文档源码中的顺序从上到下排列（不过表头行框或表脚行框例外，它们分别出现在表格的开头和结尾）。因此，表格中栅格行的数量与行元素（例如 tr 元素）的数量相等。
* 一个行组框的栅格单元就是行组中各行框包含的栅格单元。
* 一个列框包含一个或多个由栅格单元构成的列。列框按照出现在文档源码中的顺序依次排列。在从左至右书写的语言中，第一个列框位于左侧，在从右至左书写的语言中则位于右侧。
* 一个列组框包含的栅格单元就是列组中各列框包含的栅格单元。
* 虽然单元格可能跨多行或多列，但是 CSS 没有定义具体方式。这一方面由编写文档的语言完成。跨行或跨列的单元格生成一个矩形框，其宽度和高度等于一个或多个栅格单元的宽度和高度。位于这个矩形顶部的行在跨行或跨列的栅格单元的父级行中。在从左至右书写的语言中，这个单元格的矩形框必须在最左边，但是不能与其他单元格的矩形框重叠。而且，这个矩形框必须在文档源码中同一行中靠前的单元格的右侧（对从左至右书写的语言而言）。在从右至左书写的语言中，跨行或跨列的单元格必须在最右边，不能与其他单元格重叠，而且必须在文档源码中同一行中靠前的单元格左侧。
* 单元格的矩形框不能超出表格或行组的最后一个行框。如果表格的结构可能导致这样的结果，单元格必须变小，直至能在表格或行组里放下为止。

>CSS 规范不建议（但也没禁止）定位单元格和其他表格内部元素。比如说，定位包含跨行单元格的行将显著改变表格的布局，这会把行从表格中完全移除，从而在其他行的布局中无需考虑那个跨行的单元格。不过，在目前的浏览器中完全可以定位表格元素。

按照定义，栅格单元都是矩形的，但不一定具有相同的尺寸。一列中的所有栅格单元具有相同的宽度，一行中的所有栅格单元具有相同的高度。但是不同行中的栅格单元不一定具有相同的高度，不同列中的栅格单元也不一定具有相同的宽度。

了解这些基本规则之后，你可能心生一个疑问：那么到底如何确定一个元素是不是单元格？

<br>

## 2. 设定显示方式的值

在 HTML 中，很容易知道哪些元素是表格的组成部分，因为浏览器能处理 tr 和 td 等元素。而在 XML 中，无法确定哪些元素是表格的一部分。此时就要使用 display 的一系列值了。

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

本章只讨论与表格有关的值，其他值则与表格无关。下面简要说明与表格有关的值：

table

​	把元素定义为块级表格。即，定义一个生成块级框的矩形框。显然，对应的 HTML 元素是 table。

inline-table

​      把元素定位为行内表格。即，定义一个生成行内框的矩形框。在与表格无关的值中，与之最接近的是 inline-block。最接近的 HTML 元素是 table，然而 		 HTML 中的表格默认不是行内元素。

table-row

​     把元素定义为由单元格构成的行。对应的 HTML 元素是 tr。

table-row-group

​     把元素定义为由一行或多行构成的行组。对应的 HTML 元素是 tbody。

table-header-group

​     与 table-row-group 十分相似，不过在视觉上，表头行组始终显示在其他行或行组前面，并且显示在上表题后面。如果表格要分为多页打印，用户代理可能会在每一页的顶部重复渲染表头行组（Firebox 就会这么做）。规范没有定义把 table-header-group 应用到多个元素上会得到什么结果。表头行组可以包含多行。对应的 HTML 元素是 thead。

table-footer-group

​     与 table-header-group 十分相似，不过表脚行组始终显示在其他行和行组后面，并且显示在下表题前面。如果表格要分为多页打印，用户代理可能会在每一页的底部重复渲染表脚行组。规范没有定义把 table-footer-gorup 应用到多个元素上会得到什么结果。对应的 HTML 元素是 tfoot。

table-column

​     把元素声明为由单元格构成的列。在 CSS 中，把元素的 display 属性设为这个值没有任何视觉效果，好似设为 none 一样。这个值的作用基本上是定义列中单元格的表现。对应的 HTML 元素是 col。

table-column-group

​    把元素声明为有一列或多列构成的列组。与 table-column 元素一样，table-column-group 元素也不渲染，而是用于定义列组中元素的表现。对应的 HTML 元素是 colgroup。

table-cell

​    把元素定义为表格中的一个单元格。HTML 中的 th 和 td 都是应用 table-cell 的元素。

table-caption

​     定义表题。CSS 没有规定有多个元素使用 caption 时该怎么处理，但是明确提醒了，创作人员不应该在表格或行内表格中的多个元素上应用 display: caption。

<br>

CSS2.1 规范的附录 D 给出了一个应用于 HTML 4.0 的样式表，摘录如下，从中可以一窥这些值的作用：

```css
table {
    display: table;
}

tr {
    display: table-row;
}

thead {
    display: table-header-group;
}

tbody {
    display: table-row-group;
}

tfoot {
    display: table-footer-group;
}

col {
    display: table-column;
}

colgroup {
    display: table-column-group;
}

td,th {
    display: table-cell;
}

caption {
    display: table-caption;
}
```

































