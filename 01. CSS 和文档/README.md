# 1. Web 样式简介

1994 年，正值 web 开始广泛流行开来，css 的第一个提案发布了。那时，浏览器为用户提供了各种样式的定制功能。例如，用户在 mosaic 的表现偏好设置中可以为单个元素设定字体族、字号和颜色。而文档编写人员却做不到这一点。文档编写人员只能把内容标记成一个个段落、一级级标题、一块块预排格式文本，或者一些其他类型的元素。如果用户愿意，可以把一级标题设为粉红色的小字，而把六级标题设为红色的大字。

css 就是在这样的背景下诞生的。它的目标提供一个简单的声明式样式语言，而且具有一定的灵活性，能为文档编写人员和用户提供等同的样式化功能。层叠样式表中的层叠式指样式可以结合起来使用，而且具有优先级，文档编写人员和用户都有话语权，不过最终的决策权在用户手中。

草案制定的速度很快，到 1996 年年末，css1 完成了。此后，刚组建的 css 工作组开始着手制定 css2，而各浏览器则相互协作，努力实现 css1。单独来看，css 的每一部分都很简单，但把各部分放在一起就变得异常复杂。而且早期实现有些先天不足，例如不同浏览器对盒模型（box model）的实现之间的差异尤其为人诟病。这些问题直接影响到 css 的名声，幸好一些聪明人提出了变通方法，让浏览器的行为保持一致。得益于一致性的提高和高调的开发活动，例如使用 css 重新设计 wired 杂志和 css zen garden，几年之间，css 逐渐开始流行。

不过，在此之前，css2 规范于 1998 年年初定案。随后，css 工作组立即投身 css3 的制定工作，以及 css2 的修订工作（制定 css2.1）。与以往不同的式，css3 由多个（理论上）独立的模块构成，而不是单独一个臃肿的规范。XHTML 规范受此启发，也采用了这种模块式机制。

css3 分成多个模块的根本原因是各模块可以独立演进，尤其是重要的（或受众广德）模块可以按照 w3c 德规划向前推进，而不必受其他模块拖累。事实证明，这样做是对的。截至 2012 年年初，有三个 css3 模块（css color level 3、css namespaces 和 selectors level 3）变成了全力推荐状态，而有七个模块处于候选状态，还有七个模块处在不同德草案状态。如果采用以前的机制，要等其他部分完成才能在一份完成的规范中发布颜色、选择符和命名空间的新条款。得益于模块化，我们无需再等待。

但是，这样做也有缺点，即 css3 规范不能涵盖一切。世界上不再有这种叫法，也不可能再有。即便其他模块在某一时刻到达了 level3，比如说 2016 年年末（然而并没有），selectors level 4 也都开始制定了。那会不会有 css4？css3 那些尚未正式发布的新特性？还有 grid layout，它甚至还没有 level 1？

可见，我们不能指这一摞厚厚的文件说，这就是 css3，而应该分模块学习不同的特性。模块的灵活性有时可以弥补由此引起的语义不足（如果你非要一份独立的完整规范，可以留意 css 工作组每年发布的 snapshot 文档）。

了解这些背景之后，就可以开始学习 css 了。不过在此之前要先了解标记。

<br>

# 2. 元素

元素（element）是文档结构的根基。HTML 中常用的元素有 p、table、span、a 和 div 等。文档中的每个元素都对文档的表现起一定作用。

## 1. 置换元素和非置换元素

css 依赖元素，但并非每个元素都以同样的方式创建。例如，图像和段落是不同类型的元素，span 和 div 也不同。对 css 来说，元素通常有两种形式：置换元素和非置换元素。

### 置换元素

置换元素（replaced element）指用来置换元素内容的部分不由文档内容直接表示。在 HTML 中，最常见的置换元素要数 img，它的内容由文档之外的图像文件替换。其实，通过下面这个简单的例子可以看出，img 元素没有内容：

```html
<img src="howdy.gif">
```

这段标记只包含一个元素名和一个属性。如不指向外部内容（这里通过 src 属性指定一个图像），这个元素什么也表示不了。如果指向的图像文件存在，文档会把那个图像显示出来。否则，浏览器什么也不显示，或者显示图像损坏占位图。

input 元素类似，根据类型的不同，会替换成单选按钮、复选框或文本输入框。

<br>

### 非置换元素

HTML 元素大部分是非置换元素（nonrepalced element），即元素的内容有用户代理（通常是浏览器）在元素自身生成的框中显示。例如，`<span>hi there</span>` 是非置换元素，用户代理会显示 hi there 文本。段落、标题、单元格、列表，以及 HTML 中其他几乎所有元素都是非置换元素。

<br>

## 2. 元素的显示方式

除了置换元素和非置换元素之外，css  还把元素分成块级和行内两种基本类型。除此之外，还有其他显示类型，不过这两种是最常见的。对编写 HTML 标记的人来说，肯定知道它们在 web 浏览器中的显示方式。下图中有这两种元素的示例。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC1%E7%AB%A0%EF%BC%9Acss%20%E5%92%8C%E6%96%87%E6%A1%A3/%E4%B8%80%E4%B8%AA%20HTML%20%E6%96%87%E6%A1%A3%E4%B8%AD%E7%9A%84%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E5%92%8C%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0.png)

<br>

### 块级元素

块级元素（默认）生成一个填满父级元素内容区域的框，旁边不能有其他元素。也就是说，块级元素在元素框的前后都断行。HTML 中最常见的块级元素是 p 和 div。置换元素可以是块级元素，但往往不是。

列表项目是一种特殊的块级元素，它的表现与其他块级元素没有区别。此外还会在元素框旁生成一个记号（无序列表通常是圆点，有序列表通常是数字）。除了多出的这个记号以外，列表项目与其他块级元素之间没有任何区别。

<br>

### 行内元素

行内元素在一行文本内生成元素框，不打断所在的行。HTML 中最常见的行内元素是 a。此外还有 strong 和 em。这类元素不在自身所在元素框的前后断行，因此可以出现在另一个元素的内容中，且不影响所在的元素。

注意，HTML 中的块级元素和行内元素虽然有诸多共同点，但是它们之间有个重要的区别：在 HTML 中，块级元素不能出现在行内元素中。但是 css 并不限制它们的显示方式，相互之间可以嵌套。

为了进一步了解，下面来看一个 css 属性 display。

```css
display

取值：[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>
定义：见下
默认值：inline
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

可以看出，display 属性可以取很多值，前面只提过其中三个：block、inline 和 list-item。其他多数值将在本书的其他章节讨论，例如，grid 和 inline-grid 在专门探讨栅格布局的一章讨论，表格相关的值在探讨 css 表格布局的一章讨论。

现在我们只关注 block 和 inline。来看下述标记：

```html
<body>
    <p>This is a paragraph with <em>an inline element</em> within it.</p>
</body>
```

这里有两个块级元素（body 和 p）及一个行内元素（em）。根据 HTML 规范，em 可以放在 p 里，而反过来却不行。一般地，HTML 层次结构要求，行内元素可以放在块级元素中，反之则不行。

与此不同，css 没有这种限制。在不改变标记的前提下，我们可以像下面这样改变它们的显示方式：

```css
p {
    display:inline;
}

em {
    display: block;
}
```

这会导致行内框中出现一个块级框。这完全是有效的，不违背任何 css 规则。然而，如果在 HTML 中调换元素之间的嵌套关系，就会出问题：

```css
<em><p>This is a paragraph improperly enclosed by an inline element.</p></em>
```

不管通过 css 如何改变显示方式，这都不是有效的 HTML。

改变元素的显示方式对 HTML 文档来说是有用的，不过对 XML 文档而言的作用更大。XML 文档中的元素没有固定的显示方式，而是完全由编写人员定义。例如，试想以下下述片段将如何显示：

```xml
<book>
 <maintitle>Cascading Style Sheets: The Definitive Guide</maintitle>
 <subtitle>Third Edition</subtitle>
 <author>Eric A. Meyer</author>
 <publisher>O'Reilly and Associates</publisher>
 <pubdate>November 2006</pubdate>
 <isbn type="print">978-0-596-52733-4</isbn>
</book>
<book>
 <maintitle>CSS Pocket Reference</maintitle>
 <subtitle>Third Edition</subtitle>
 <author>Eric A. Meyer</author>
 <publisher>O'Reilly and Associates</publisher>
 <pubdate>October 2007</pubdate>
 <isbn type="print">978-0-596-51505-8</isbn>
</book>
```

因为 display 属性的默认值是 inline，所以上述内容默认将显示为行内文本，如下图所示。可以看出，这样显示没有什么用。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC1%E7%AB%A0%EF%BC%9Acss%20%E5%92%8C%E6%96%87%E6%A1%A3/XML%20%E6%96%87%E6%A1%A3%E7%9A%84%E9%BB%98%E8%AE%A4%E6%98%BE%E7%A4%BA%E6%96%B9%E5%BC%8F.png)

可以用 display 定义基本布局：

```css
book, maintitle, subtitle, author, isbn {
    display: block;
}

publisher, pubdate {
    dispaly: inline;
}
```

我们把七个元素中的五个设为块级元素，另外两个设为行内元素。这意味着，各块级元素将像 HTML 中的 div 那样处理，两个行内元素将像 span 那样处理。

由于具有这样影响显示方式的能力，使得 css 在众多情况下都十分有用。我们可以在上述规则的基础上再添加一些样式，得到更好的视觉效果，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC1%E7%AB%A0%EF%BC%9Acss%20%E5%92%8C%E6%96%87%E6%A1%A3/%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8E%E7%9A%84%20XML%20%E6%96%87%E6%A1%A3.png)

在学习如何编写 css 之前，要先知道如何把 css 关联到文档上。毕竟，如果不这么做，css 就没办法影响文档。我们将说明如何在 HTML 文档中关联 css，因为这是最常用的方式。

<br>

# 3. 把 css 应用到 HTML 上

HTML 文档内部有一定的结构，这一点前面已经提及，但是有必要重申一次。以前的网页往往忽略了这一点，我们经常忘记文档内部应该有一定的结构，而这与视觉结构完全是两码事。我们可能急于常见最酷的网页，可能会以各种方式摆放页面的内容，但却忘了网页应该包含结构化的信息。

这种结构正是 HTML 和 css 之间固有关系的一部分，如若不然，二者之间便是泾渭分明。为了更好地理解这一点，下面以一个 HTML 文档为例，逐一说明各部分：

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>01-04</title>
<style type="text/css" media="all">
body {width: 42em;}
</style>
<link rel="stylesheet" type="text/css" href="sheet1.css" media="all" />
<style type="text/css">
@import url(sheet2.css);
/* These are my styles! Yay! */
</style>
</head>
<body>
<h1>Waffles!</h1>
<p style="color: gray;">The most wonderful of all breakfast foods is
the waffle—a ridged and cratered slab of home-cooked, fluffy goodness
that makes every child's heart soar with joy. And they're so easy to make!
Just a simple waffle-maker and some batter, and you're ready for a morning
of aromatic ecstasy!
</p>
</body>
</html>
```

这段标记应用样式后得到的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC1%E7%AB%A0%EF%BC%9Acss%20%E5%92%8C%E6%96%87%E6%A1%A3/%E6%96%87%E6%A1%A3%E7%A4%BA%E4%BE%8B.png)

下面说明这个文档关联 css 的不同方式。

<br>

## 1. link 标签

先看 link 标签：

```html
<link rel="stylesheet" type="text/css" href="sheet1.css" media="all">
```

link 标签少有关注，但它完全是有效的标签，在 HTML 规范中已经存在多年，一直等待重用。它的基本作用是把其他文档与当前文档关联起来。css 使用它链接应用到文档上的样式表。下图中的文档链接了一个名为 sheet1.css 的样式表。

通过 link 标签链接的样式表不是 HTML 文档的一部分，但却供文档使用。我们称这样的样式表为外部样式表（external stylesheet），因为样式表在 HTML 文档外部（想想看）。

为了正确加载外部样式表，link 标签必须放在 head 元素中，不能放在其他元素中。web 浏览器遇到 link 标签时，会查找并加载指定的样式表，使用样式表中的样式渲染 HTML 文档。这一过程如下图所示。图中还通过 @import 声明加载了另一个外部样式表 sheet2.css。@import 声明必须放在所在样式表的开头，此外别无限制。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC1%E7%AB%A0%EF%BC%9Acss%20%E5%92%8C%E6%96%87%E6%A1%A3/%E6%96%87%E6%A1%A3%E5%BA%94%E7%94%A8%E5%A4%96%E9%83%A8%E6%A0%B7%E5%BC%8F%E8%A1%A8%E7%9A%84%E6%96%B9%E5%BC%8F.png)

外部样式表中包含什么？是一系列规则，与前一节和本节的示例 HTML 文档中的类似。只不过，这里的规则存储在单独的文件中。注意，样式表不能有 HTML 或其他标记语言，只能包含样式规则。下面是一个外部样式表的内容：

```css
h1 {
    color: red;
}

h2 {
    color: maroon;
    background: white;
}

h3 {
    color: white;
    background: black;
    font: medium Helvetica;
}
```

仅此而已，没有 HTML 标签或注释，只有一些简单的样式声明。外部样式表保存为纯文本文件，扩展名通常是 .css，例如 shee1.css。

>外部样式表不能包含任何文档标记，只能有 css 规则和 css 注释（参见本章后文）。如果外部样式表中有标记，可能导致部分或全部样式失效。

文件扩展名不是必须的，但是如果文件名不以 .css 结尾，即使在 link 元素中把 type 属性的值设为 text/css，有些旧的浏览器也不会将其识别为包含样式表的文件。其实，如果文件名不以 .css 结尾，有些 web 服务器不会以 text/css 格式伺服文件。不过，修改服务器的配置文件往往便能解决这个问题。

<br>

### 属性

link 标签余下的内容，即那些属性和值比较容易理解。rel 是 relation（关系）的简称，这里指定的关系是 stylesheet。type 属性的值始终为 text/css，说明通过 link 标签加载的数据类型。这样 web 浏览器才知道加载的样式表是 css 样式表，然后确定如何处理加载的数据。以后可能会出现其他样式语言，因此最好声明使用的是哪种语言。

接下来是 href 属性，它的值是样式表的 URL，可以是绝对地址，也可以是相对地址，具体由需求而定。前例使用的是相对 URL。此外，也可以使用绝对 URL，例如 http://meyerweb.com/sheet1.css。

最后是 media 属性，它的值是一个或多个媒体描述符（media descriptor），指明媒体的类型和具有的功能。多个媒体描述符以逗号分开。例如，可以像下面这样链接针对屏幕媒体和投影媒体的样式表：

```html
<link rel="stylesheet" type="text/css" href="visual-sheet.css" media="screen, projection"
```

媒体描述符有时很复杂，本章后文再详细说明。现在就以所示的基本媒体类型为例。

注意，一个文档可以关联多个样式表。如果是这样，最初显示文档时只会使用 rel 属性的值为 stylesheet 的 link 标签链接的样式表。因此，如果想链接两个分别名为 basic.css 和 splash.css 的样式表，可以这么做：

```html
<link rel="stylesheet" type="text/css" href="basic.css">
<link rel="stylesheet" type="text/css" href="splash.css">
```

```html
<p class="a1">This paragraph will be gray only if styles from the stylesheet 'basic.css' are applied.</p>
<p class="b1">This paragraph will be gray only if styles from the stylesheet 'splash.css' are applied.</p>
```

这个示例中没有出现 title 属性，它也是 link 标签的有效属性，但不常用。不过以后可能用得着，如果使用不当，还可能导致意料之外的影响。为什么？下一节探讨。

<br>

### 候选样式表

此外还有候选样式表（alternate stylesheet），定义方式为把 rel 属性的值设为 alternate stylesheet。仅当用户自己选择，文档才会使用候选样式表渲染。

如果浏览器支持候选样式表，会使用 link 元素 title 属性的值生成候选样式表。对下面的示例来说：

```css
<link rel="stylesheet" type="text/css" href="sheet1.css" title="Default">
<link rel="alternate stylesheet" type="text/css" href="bigtext.css" title="Big Text">
<link rel="alternate stylesheet" type="text/css" href="zany.css" title="Crazy colors!">
```

浏览器默认使用第一个样式表（这里是名为 Default 的样式表），此外用户还可以自行选择想使用的样式表。下图展示的是一种选择样式的方式（其实这是 css 开始崭露头角之时的方式）。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC1%E7%AB%A0%EF%BC%9Acss%20%E5%92%8C%E6%96%87%E6%A1%A3/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%90%E4%BE%9B%E5%80%99%E9%80%89%E6%A0%B7%E5%BC%8F%E8%A1%A8%E4%BE%9B%E9%80%89%E6%8B%A9.png)

>截至 2016 年年末，多数基于 gecko 的浏览器，如 firefox 和 opera，都支持候选样式表。internet explorer 原生不支持，不过可以借助 javascript。基于 webkit 的浏览器不支持选择候选样式表。与上图中远古时代的浏览器相比，简直难以置信。

此外，还可以为不同的候选样式表设定相同的 title 值，把它们分组放在一起。利用这一点，用户可以为屏幕和印刷媒体选择不同的外观。

```html
<link rel="stylesheet" type="text/css" href="sheet1.css" title="Default" media="screen">
<link rel="stylesheet" type="text/css" href="print-sheet1.css" title="Default" media="print">
<link rel="alternate stylesheet" type="text/css" href="bigtext.css" title="Big Text" media="screen">
<link rel="alternate stylesheet" type="text/css" href="print-bigtext.css" title="Big Text" media="print">
```

如果用户在支持候选样式表的用户代理选择 Big Text，屏幕媒体将使用 bigtext.css 装饰文档，印刷媒体将使用 print-bigtext.css，任何媒体都不会使用 sheet1.css  或 print-sheet1.css。

为什么会这样？因为一旦为属性为 rel 的 stylesheet 的 link 元素设定标题，也就是将其定为首选样式表（preferred stylesheet）。这意味着，首选样式表优先于候选样式表，显示文档时默认使用。而选择候选样式表之后，首选样式表就不使用了。

另外，如果有一组首选样式表，那么只会使用其中一个，其他的则被忽略。比如下面这个例子：

```html
<link rel="stylesheet" type="text/css" href="sheet1.css" title="Default Layout">
<link rel="stylesheet" type="text/css" href="sheet2.css" title="Default Text Sizes">
<link rel="stylesheet" type="text/css" href="sheet3.css" title="Default Colors">
```

这三个 link 元素声明的都是首选样式表，因为都设定了 title 属性，但是文档只会使用其中一个，另外两个则完全被忽略。可是忽略的是哪两个？不确定，因为 HTML 没有提供相关的方法，无法确定该忽略哪些首选样式表，又该使用哪个首选样式表。

如果不为样式表设定标题，那它就是永久样式表（persistent stylesheet），始终用于显示文档。这通常正是文档编写人员想要的行为。

<br>

## 2. style 元素

style 元素也是一种引入样式表的方式，直接写在文档中：

```html
<style type="text/css">...</style>
```

style 元素应该始终设定 type 属性。对 css 文档来说，正确的值为 text/css，这与 link 元素是一样的。

如前例表示，style 元素始终以 `<style type="text/css">` 开头，后跟一个或多个样式，然后以 `</style>` 标签结尾。style 元素也有 media 属性，与通过 link 元素链接的样式表功能一样。

开始和结束 style 标签之间的样式称为文档样式表（document stylesheet）或嵌入式样式表（embedded stylesheet，因为这种样式表内嵌在文档中）。style 元素可以直接包含应用到文档上的样式，也可以通过 @import 指令引入外部样式表。

<br>

## 3. @import 指令

下面来看可以出现在 style 标签中的内容。首先是链接的外部样式表中也有的 @import 指令：

```css
@import url(sheet2.css);
```

与 link 一样，web 浏览器遇到 @import 指令时会加载外部样式表，使用其他的样式渲染 HTML 文档。二者之间唯一的主要区别在于句法和指令的位置。可以看出，@import 指令在 style 元素内部，而且必须放在其他 css 规则前面，否则不会起作用。比如下面的例子：

```html
<style type="text/css">
@import url(styles.css); /* @import 放在开头 */
h1 {
    color: gray;
}
</style>
```

与 link 一样，一个文档中可以有多个 @import 语句。然而，不同的是，@import 指令导入的每个样式表都会使用，无法指定候选样式表。对下面的代码来说：

```css
@import url(sheet2.css);
@import url(blueworld.css);
@import url(zany.css);
```

三个外部样式表都会加载，而且其中的所有样式都会用于显示文档。

与 link 类似，@import 指令也可以显示导入的样式表应用于何种媒体。方法是在样式表的 URL 后面提供媒体描述符：

```css
@import url(sheet2.css) all;
@import url(blueworld.css) screen;
@import url(zany.css) projection, print;
```

媒体描述符有时很复杂，我们将在第 20 章讨论。

如果一个外部样式表需要用到另一个外部样式表中的样式，@import 指令的作用就体现出来了。我们知道，外部样式表不能包含任何文档标记，也就是不能使用 link 元素，但是可以使用 @import 指令。因此，外部样式表中可能包含下述内容：

```css
@import url(http://example.org/library/layout.css);
@import url(basic-text.css);
@import url(printer.css) print;
body {
    color: red;
}

h1 {
    color: blue;
}
```

当然，你可能不会使用跟这一样的样式，但是希望你能从中看出该怎么做。注意，前例即使用了绝对 URL，也用到了相对 URL，这一点与 link 元素一样。

此外还要注意，与内嵌在文档中一样，@import 指令写在样式表的开头。css 要求样式表中的 @import 指令必须在所有样式规则前面。遵守规范的用户代理会忽略放在样式规则（例如 `body { color: red }`）后面的 @import 指令。

>windows 系统中的旧版 internet explorer 不会忽略任何 @import，即便出现在其他规则后面也不忽略。由于其他浏览器会忽略位置不对的 @import 指令，所以很容易错误地将 @import 指令放在不当的位置，从而改变文档在其他浏览器中的显示效果。

<br>

## 4. HTTP 链接

为文档关联 css 还有一种鲜为人知的方式：使用 HTTP 首部。

在 apache 中，若想使用这种方式，可以在 .htaccess 文件中引用 css 文件。例如：

​	Header add Link "</ui/testing.css>;rel=stylesheet;type=text/css"

这样设置之后，支持这种方式的浏览器在加载受此 ./htaccess 文件管理的文档时便会使用指定的样式表，就像通过 link 元素链接的样式表一样。此外，还可以在服务器的 httpd.conf 文件中添加等效的规则，这样做可能更高效：

​	`<Directory /path/to/ /public/html/directory>`

​	`Header add Link "</ui/testing.css>;rel=stylesheet;type=text/css"`

​	`</Directory>`

在支持这种方式的浏览器中，这样做的效果与前面一样，唯一的区别是设置所在的文件不同。

你可能注意到了支持这种方式的浏览器这种表述。截至 2017 年年末，广泛支持 HTTP 链接样式表的浏览器有 firefox 系列和 opera。因此，这种方式最常在使用这些浏览器中的某一款做开发时使用。鉴于此，在测试服务器中使用 HTTP 链接便可以把开发中的网站与线上公开的网站区分开。如果出于特殊的原因，想隐藏一些样式，不让 webkit 和 internet explorer 系列使用，也可以使用这种方式。

>常用的脚本语言（如 PHP）和 IIS 也有等效的方式，方法是设定 HTTP 首部。此外，还可以使用脚本语言向服务器伺服的文档插入 link 元素。考虑到浏览器的支持，这种方案更牢靠，毕竟所有浏览器都支持 link 元素。

<br>

## 5. 行内样式

如果只想为单个元素提供少量样式，不值得动用嵌入式样式表或外部样式表，可以利用 HTML 元素的 style 属性设置行内样式：

```html
<p style="color: gray;">The most wonderful of all breakfast foods is
	the waffle. a ridged and cratered slab of home-cooked, fluffy goodness...
</p>
```

除了 body 元素之外的标签（如 head 或 title），所有 HTML 标签都能设定 style 属性。

style 属性的句法相当简单。其实，与 style 元素中的样式规则十分相似，不过是把花括号换成双引号。因此，`<p style="color: maroon; background: yellow;">` 将把文本的颜色设为红褐色，背景色设为黄色，而且只适用于那一段文字，文档中的其他部分不受此影响。

注意，style 属性的只只能是一系列规则声明，而不能包含整个样式表。因此，不能在 style 属性中使用 @import 指令，也不能有完整的规则。style 属性的值只能是样式规则花括号之间的那一部分。

建议不建议使用 style 属性。而且，除了 HTML，XML 很少使用这个属性。倘若使用 style 属性，css 的很多重要优点都不复存在了，例如集中管理样式，控制整个文档或网站中所有文档的外观。在很多方面，行内样式都不比 font 标签好多少，不过却提供了一定的灵活性。

<br>

# 4. 样式表中的内容

了解这么多之后，我们不禁要问，样式表中到底有什么内容？其实，我们见过的：

```css
h1 {
    color: maroon;
}

body {
    background: yellow;
}
```

嵌入式样式表中的多数样式都是这样的，有简单的、有复杂的、有短的、有长的。如果文档中有 style 标签，里面很少没有规则。假如没有上例这样的规则，也会有一些 @import 声明。

在深入讨论之前，我们要总览一下样式表中可以有什么内容，不可以有什么内容。

## 1. 标记

样式表中不能有标记。这一点看似理所当然，但总是有人在这上面栽跟头。不过 HTML 注释标记例外，由于历史原因，style 元素中可以有 HTML 注释。

```html
<style type="text/css"><!--
h1 {
    color: maroon;
}

body {
    background: yellow;
}
--></style>
```

仅此而已。

<br>

## 2. 规则的结构

为了进一步说明规则，下面把规则的结构分解开，逐一说明。

一个规则由两个基本部分构成：选择符（selector）和声明块（declaration block）。声明块由一个或多个声明组成，而一个声明抱哈一个属性（property）和对应的值（value）。一个样式表由一系列规则构成。下图展示的是一个规则的各个部分。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC1%E7%AB%A0%EF%BC%9Acss%20%E5%92%8C%E6%96%87%E6%A1%A3/%E4%B8%80%E4%B8%AA%E8%A7%84%E5%88%99%E7%9A%84%E7%BB%93%E6%9E%84.svg)

选择符（图中靠左的那一部分）定义文档中的哪部分受影响。上图选择的是 h1 元素。如果选择符是 p，那选择的则是所有 p 元素（段落）。

图中右边那一部分是声明块，由一个或多个声明组成。一个声明包含一个 css 属性及其值。上图中的声明块包含两个声明，第一个声明把文档中部分文本的颜色设为红色，第二个声明把文档中那一部分的背景设为黄色。因此，文档中的所有 h1 元素（由选择符指定）都将显示为黄底红字。

<br>

## 3. 厂商前缀

有时你会发现，css 中有些内容的前面有个标注，例如 -o-border-image。这叫厂商前缀（vendor prefix），浏览器厂商通过它标记实验性或专属（或二者兼具）的属性、值或其他内容。截至 2016 年年末，市面上有不少厂商前缀，其中最常见的见下表。

| 前缀     | 厂商                                        |
| -------- | ------------------------------------------- |
| -epub-   | 国际数字出版论坛制定的 epub 格式            |
| -moz-    | 基于 mozilla 的浏览器（如 firefox）         |
| -ms-     | 微软 internet explorer                      |
| -o-      | 基于 opera 的浏览器                         |
| -webkit- | 基于 webkit 的浏览器（如 safari 和 chrome） |

从上表中可以看出，厂商前缀的一般格式是一个英文破折号、一个标注和一个英文破折号。不过也有少量前缀不采用这个格式，开头没有破折号。

使用厂商前缀的原因复杂，不是三言两语就能说清的，也不在本书的讨论范围之内。可以说，厂商前缀出现的目的是浏览器厂商为了测试新特性，这么做能保证兼容性，不必担心被过时的行为限制，导致与其他浏览器不兼容。这样做能避免一系列问题，以免扼制 css 的发展。可惜，网页制作者们后来大量使用带前缀的属性，由此引起了一系列新问题。

截至 2016 年年末，厂商前缀的使用趋势有所减缓，因为新版浏览器逐渐删除了对带前缀的属性和值的支持。如今，编写 css 时你完全可以不使用厂商前缀，不过偶尔会遇到别人使用，或者在以前的代码中见到。

<br>

## 4. 处理空白

css 对规则之间的空白基本没有严格要求，而且对规则内部的空白大多也没有严格要求，不过有些例外。

一般来说，css 对待空白的方式跟 HTML 差不多：解析时，连续的空白会合并称一个空白。因此，虚构的 rainbow 规则可以写成下面这几种格式：

rainbow: infrared red orange yellow green blue indigo violet ultraviolet;

rainbow:

​	infrared red orange yellow green blue indigo violet ultraviolet;

rainbow:

​	infrared

​	red

​	orange

​	yellow

​	green

​	blue

​	indigo

​	violet

​	ultraviolet

​	;

当然，除此之外还有其他分隔方式。唯一的要求是，要使用空白分隔，可以是空格、制表符或换行符，可以是单个空白，也可以任意数量随意组合。

同样，规则之间的空白也可以随意使用。下面只是无数种编写方式中的五种：

```css
html{color:black;}
body {background: white;}
p {
    color: gray;}
h2 {
    color: silver ;
}

ol
	{
    color
    	:
	silver
		;
}
```

从第一个规则中可以看出，多数空白可以省略。其实，简化后的 css 通常就是这样的，即把多余的空白都删掉。前两个规则之后的第三个规则适用的空白量一个比一个多，最后一个规则几乎把所有可以分开的额内容都写在单独的一行里。

这些写法都是有效的，你可以从中选一个自己觉得最合理的，即最易于阅读的，然后沿用下去。

其实，有些地方是必须使用空白的。拿前面虚构的 rainbow 示例来说，最常见的是使用空白分隔值中的多个关键字。多个关键字必须使用空白分开。

<br>

## 5. css 注释

css 支持注释。与 c/c++ 注释非常相似，css 注释也放在 /* 和 */ 之间：

​	/* 这是一个 css1 注释 */

与 c++ 一样，css 注释可以分成多行：

​	/* 这是一个 css1 注释，可以分成

​	多行，完全没有问题 */

不过要注意，css 注释不能嵌套。因此，下述示例是错误的：

​	/* 这是一个注释，其中还有

​	一个注释，这是错的，

​	/* 另一个注释 */

​	回到第一个注释 */

>临时注释掉已经包含注释的一大段规则时容易导致注释嵌套。css 不允许注释嵌套，因此外层注释会在内层注释的结束处结束。

可惜，css 没有一直延伸到行尾的注释，即不能使用 // 或 # 等（后者是保留字，用于选择 ID）。在 css 中，注释只能使用 /*  */ 编写。因此，如果想把注释与规则放在同一行，一定要注意如何放置。例如，下面是正确的方式：

```css
/* 这个 css 注释有好几行 */
h1 {
    color: gray;
}

/* 而它放在样式旁边 */
h2 {
    color: silver;
}

/* 因此每一行都要 */
p {
    color: white;
}

/* 放在注释标记里 */
pre {
    color: gray;
}
```

如果各行没有结束标记，那么样式表的多数内容将变成注释的一部分，从而失去作用：

```css
h1 {
    color: gray;
}

/* 这个 css 注释有好几行,
	但是各行没有放在注释标记里，

h2 {
    color: silver;
}

p {
    color: white;
}

pre {
    color: gray;
}

因此最后三个样式
变成了注释的一部分 */
```

在这个示例中，只有第一个规则（h1 { color: gray }）会应用到文档上，余下的规则变成了注释的一部分，被浏览器的渲染引擎忽略。

>对 css 解析器来说，css 注释相当于根本没出现过，并不算作空白。因此，注释可以放在规则内部，甚至可以放在声明内部。

<br>

# 5. 媒体查询

创作人员通过媒体查询（media query）定义浏览器在何种媒体环境中使用指定的样式表。过去，实现这一机制的方法是通过 link 元素或 style 元素的 media 属性设定媒体类型，或者为 @import 或 @media 指令提供媒体描述符。媒体查询更进一步，允许创作人员通过媒体描述符根据指定媒体类型的特性选择样式表。

## 1. 用法

媒体查询可以在下述几个地方使用：

* link 元素的 media 属性。
* style 元素的 media 属性。
* @import 声明的媒体描述符部分。
* @media 声明的媒体描述符部分。

媒体查询可以是简单的媒体类型，也可以是复杂的媒体类型和特性的组合。

<br>

## 2. 简单的媒体查询

在介绍媒体查询的各种可能用法之前，先看几个简单的媒体块。假设我们想在投影环境（例如幻灯片）中使用一些不同的样式。下面是这个 css 中比较简单的两个规则：

```css
h1 {
    color: maroon;
}

@media projecttion {
    body {
        background: yellow;
    }
}
```

针对这个例子，在所有媒体中，h1 元素的颜色都是红褐色，但是，在投影媒体中 body 元素会有一个黄色背景。

一个样式表中可以有任意多个 @media 块，而且每一个都有自己的一套媒体描述符（详情参见本章后文）。如果愿意，可以把所有规则都放在一个 @media 块里，就像下面这样：

```css
@media all {
    h1 {
        color: maroon;
    }
    
    body {
        background: yellow;
    }
}
```

然而，这与去掉首尾两行的效果一模一样，完全没必要。

>这一节采用的缩进方式只是为了条理清晰。@media 块中的规则可以不缩进，如果你觉得缩进能让 css 更易于阅读，可以缩进。

上述示例中的 projection 和 all 就是设定媒体查询的位置。媒体查询包含描述媒体类型的词组和对媒体参数的说明（例如分辨率或显示屏高度），决定块中的 css 何时应用。

<br>

## 3. 媒体类型

媒体查询最基本的形式媒体类型，由 css2 引入。媒体类型就是指明不同媒体的标注：

all

​	用于所有展示媒体

print

​	为有视力的用户打印文档时使用，也在预览打印效果时使用。

screen

​	在屏幕媒体（如桌面电脑的显示器）上展示文档时使用。在桌面计算机上运行的所有 web 浏览器都是屏幕媒体用户代理。

>写作本书时，有些浏览器也支持 projection 类型，能以幻灯片的形式展示文档。有些移动设备的浏览器支持 handheld 类型，但是行为不一致。

多个媒体类型使用逗号分隔罗列。下面四种方式都能把一个样式表（或一个规则块）同时应用到屏幕媒体和印刷媒体上：

```html
<link type="text/css" href="frobozz.css" media="screen, print">
<style type="text/css" media="screen, print">...</style>
```

```css
@import url(frobozz.css) screen, print;
@media screen, print {}
```

为媒体类型加上特性描述符（例如，描述指定媒体的分辨率或色深）之后事情就变得有趣了。

<br>

## 4. 媒体描述符

对于在 link 元素或 @import 声明中设定过媒体类型的人来说，一定不会对媒体查询的位置感到陌生。下面两种方式都能把指定的外部样式表应用到彩打上：

```html
<link href="print-color.css" type="text/css" media="print and (color)" rel="stylesheet">
```

```css
@import url(print-color.css) print and (color);
```

能使用媒体类型的地方都能使用媒体查询。继续以彩打为例，这意味着可以通过一个逗号分隔的列表列出多个查询：

```html
<link href="print-color.css" type="text/css" media="print and (color), screen and (color-depth: 8)" rel="stylesheet">
```

只要其中一个媒体查询的条件得到满足，就会应用指定的样式表。对前面的 @import 声明来说，使用彩色打印机打印文档，或者在色深足够的环境中渲染文档时会使用 print-color.css。如果使用的是黑白打印机，两个查询的条件都不满足，因此 print-color.css 不会应用到文档上。在屏幕等媒体中渲染文档时也是如此。

一个媒体描述符包含一个媒体类型和一个或多个媒体特性列表，其中特性描述符要放在圆括号中。如果没有媒体类型，那就应用到所有媒体上，因此下面两个示例是等效的：

```css
@media all and (min-resolution: 96dpi) {}

@media (min-resolution: 96dpi) {}
```

一般情况下，媒体特性描述符的格式类似于 css 中的一对属性和值。二者之间最大的区别是，特性描述符可以不指定值。因此，任何彩色媒体都符合（color）指定的条件，任何色深为 16 位的彩色媒体都符合（color: 16）指定的条件。其实，不指定值时是在做判断。比如说，（color）的意思是这个媒体是彩色的吗？

多个特性描述符使用逻辑关键字 and 连接。媒体查询中可使用的逻辑关键字有两个：

and

​	连接的两个或多个媒体特性必须同时满足条件，整个查询得到的结果才是真值。例如，（color）and（orientation: landscape）and（min-device-width: 	800px）表示三个条目都满足时，整个语句得到的结果与之相反。因此，当媒体环境是彩色的、横向放着，而且设备的屏幕宽至少为 800 像素，样式表不会应	用到文档上。除此之外的情况下，都将应用样式表。

not

​	对整个查询取反。假如所有条件都为真，那样式表不会应用到文档上。例如，not （color） and （orientation: landscape）and（min-device-width: 		800px）表示三个条目都满足时，整个语句得到的结果与之相反。因此，当媒体环境是彩色的、横向放着，而且设备的屏幕宽至少为 800 像素，样式表不	会应用到文档上。除此之外的情况下，都将应用样式表。

注意，not 关键字只能在媒体查询描述符的开头使用。写为这样的无效的：（color）and not（min-device-width: 800px）。如果真这样写，媒体查询将被忽略。还要注意，太旧的浏览器不支持媒体查询，因此会跳过媒体描述符以 not 开头的样式表。

媒体设备不支持 OR 关键字。不过，分隔多个媒体查询的逗号相当于 OR。例如，screen, print 的意思是，为屏幕或印刷媒体时应用样式。而 screen and（max-color: 2）or（monochrome）是无效的，会被忽略，正确的写法是 screen and（max-color: 2），screen and（monochrome）。

此外还有一个 only 关键词，专门用于保证向后兼容（是的，这是真的）。

only

​	在不支持媒体查询的旧浏览器中隐藏样式表。例如，如果想在所哟媒体中应用一个样式表，但是只在支持媒体查询的浏览器中应用，可以这样写：@import 	url(new.css) only all。在支持媒体查询的浏览器中，only 关键字被忽略，样式表会应用到文档上。而在不支持媒体查询的浏览器中，媒体类型为 only all，而	这是无效的，因此不会应用样式表。注意，only 关键字只能用在媒体查询的开头。

<br>

## 5. 媒体特性描述符和值的类型

目前，我们在示例中见过一些媒体特性描述符了，但这不是全部。下面列出所有可用的描述符（截至 2017 年年末）：

width                                	max-device-height                        	min-color-index

min-width				aspect-ratio				   	max-color-index

max-width		       	min-aspect-ratio			   	monochrome

device-width	           	max-aspect-ratio			  	min-monochrome

min-device-width	  	device-aspect-ratio		       	max-monochrome

max-device-width		min-device-aspect-ratio			resolution

height		 	   	max-device-aspect-ratio	        	min-resolution

min-height		    	color						  	max-resolution

max-height		   	min-color					  	orientation

device-height	       	max-color					  	scan

min-device-height       	color-index						grid



此外，还有两种新增的值：

*  `<ratio>`
* `<resolution>`

描述符和值的完整说明及用法参见第 20 章。

<br>

# 6. 特性查询

2015~2016 年间，css 新增了一个功能：根据用户代理是否支持特定的 css 属性及其值来应用一段样式。这个功能称为特性查询（feature query）。

特性查询在结构上与媒体查询很像。假设我们想在用户代理支持 color 属性时（显然是支持的）为元素设定颜色，可以这样写：

```css
@supports (color: black) {
    body {
        color: black;
    }
    
    h1 {
        color: purple;
    }
    
    h2 {
        color: navy;
    }
}
```

上述代码的意思其实是，如果你能识别并处理 color: black 这样的属性和值组合，那就应用这段样式。否则，跳过这段样式。如果用户代理不支持 @supports，整段样式都会跳过。

特性查询是渐进增强样式的完美方式。比如说你想在浮动布局之外增加栅格布局，可以保留现有的布局方式，在样式表中添加下面这段样式：

```css
@supports (display: grid) {
    section#main {
        display: grid;
    }
    /* 去掉旧布局的样式 */
    /* 栅格布局的样式 */
}
```

这段样式在支持栅格布局的浏览器中应用，它会覆盖旧的页面布局，然后应用通过栅格实现的新布局。不支持栅格布局的旧浏览器很可能也不支持 @supports，因此会跳过整段样式，就像没出现过一样。

特性查询可以嵌套，其实还可以嵌套在媒体查询中，而且反过来嵌套也可以。若想使用弹性盒布局编写针对屏幕和印刷媒体的样式，可以把媒体查询块放在 @supports(display: flex) 块里：

```css
@supports (display: flex) {
    @media screen {
        /* 针对屏幕媒体的弹性盒样式 */
    }
    
    @media print {
        /* 针对印刷媒体的弹性盒样式 */
    }
}
```

反过来，也可以在实现响应式设计的媒体查询块中添加 @supports() 块：

```css
@media screen and (max-width: 30em) {
    @supports (display: flex) {
        /* 针对小屏的弹性盒样式 */
    }
}

@media screen and (min-width: 30em) {
    @supports (display: flex) {
        /* 针对大屏的弹性盒样式 */
    }
}
```

具体如何组织完全由你自己决定。

与媒体查询一样，特性查询也支持使用逻辑运算符。假如想在用户代理同时支持栅格布局和 css 形状时应用一段样式，可以这样写：

```css
@supports (display: grid) and (shape-outside: circle()) {
    /* 栅格和形状样式 */
}
```

这与下述写法是等效的：

```css
@supports (display: grid) {
    @supports (shape-outside: circle()) {
        /* 栅格和形状样式 */
    }
}
```

除了 and 之外，还有其他的运算符可用。css 形状（详情参见第 10 章）体现了 or 的用处，因为很长一段时间以来，webkit 只支持通过带厂商前缀的属性绘制形状。因此，如果想绘制形状，可以使用这样的特性查询：

```css
@supports (shape-outside: circle()) or (-webkit-shape-outside: circle()) {
    /* 绘制形状的样式 */
}
```

带厂商前缀的形状属性和不带厂商前缀的形状属性最好同时使用，但是上例这样做既能兼容 webkit 以后的版本，也能支持其他无需使用厂商前缀的浏览器。

有时，我们想使用的属性与测试的属性不同。还以栅格布局为例，你可能想在支持栅格时修改布局元素的外边距等。下面是简化的版本：

```css
div#main {
    overflow: hidden;
}

div.column {
    float: left;
    margin-right: 1em;
}

div.column:last-child {
    margin-right: 0;
}

@supports (display: grid) {
    div#main {
        display: grid;
        grid-gap: 1em 0;
        overflow: visible;
    }
    
    div#main div.column {
        margin: 0;
    }
}
```

此外，还可以使用取反运算符。例如，下述样式在不支持栅格布局时应用：

```css
@supports not (display: grid) {
    /* 不支持栅格时使用的样式 */
}
```

一个特性查询中可以使用多个逻辑运算符，但是为了保证条例清晰，要使用括号。假如我们想在支持颜色的同时还支持栅格或弹性盒布局中的一个时应用一段样式，可以这样写：

```css
@supports (color: black) and (display: flex) or (display: grid) {
    /* 相关的样式 */
}
```

注意，判断支持栅格或弹性盒的查询放在一对括号里。必须这么做，如若不然，整个表达式都将失效，而块中的样式则会跳过。也就是说，不要写成这样：

```css
@supports (color: black) and (display: flex) or (display: grid) {}
```

最后，你可能想知道，为什么特性查询的测试中既要写也要写值。毕竟，想使用形状时，我们只需要测试支不支持 shape-outside，对吧？这是因为浏览器可能支持某个属性，但不支持它的全部取值。栅格布局就是个很好的例子。如果像下面这样测试是否支持栅格肯定是不行的：

```css
@supports (display) {
    /* 栅格样式 */
}
```

因为连 internet explorer 都支持 display。支持 @supports 的浏览器肯定支持 display 及其很多取值，但不一定支持 grid 这个值。鉴于此，特性查询既要测试属性也要测试值。

>记住，这是特性查询，不是正确性查询。浏览器可能支持所测试的特性，但实现上有缺陷。所以，无法确保浏览器对特性的支持是否正确。特性查询得到肯定结果的意思很简单，表示浏览器支持你想使用的特性，而且以某种方式实现了。















