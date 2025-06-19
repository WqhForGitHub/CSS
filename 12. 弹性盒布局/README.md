

CSS Flexible Box Module Level 1（简称 Flexbox，弹性盒）把以往艰巨的布局任务变得极为简单，例如很多类型的页面、小组件、应用和图库。有了弹性盒，通常不再需要使用 CSS 框架。本章将教你如何使用少数几行 CSS 实现网站需要的几乎所有布局方式。

# 1. 弹性盒基础

弹性盒是一种简单而强大的布局方式，我们通过弹性盒指明空间的分布方式、内容的对齐方式和元素的视觉顺序，把不同的组件放置在页面中。内容可以轻易横向或纵向排布，还可以沿着一个轴布局，或者折断成多行。这只是几个例子，可以实现的布局还有很多很多。

使用弹性盒，内容的呈现顺序不再受源码顺序的限制。然而，这只是视觉上的调整，弹性盒相关的属性不会改变屏幕阅读器堆内容的读取顺序。

>规范指定，屏幕阅读器应采用源码顺序，但是 Firebox 目前采用的是视觉顺序。辅助功能社区对此有讨论，结论是 Firebox 的这一缺陷可能是正确的行为，因此将来规范可能会做修改。

弹性盒模型布局最突出一个特点可能是，能让元素堆不同的屏幕尺寸和不同的显示设备做好适应准备。弹性盒在响应式网站中表现极好，因为内容能根据可用空间的大小增减尺寸。

弹性盒依赖父子关系。在元素上声明 display: flex 或 display: inline-flex 便激活弹性盒布局，而这个元素随之称为弹性容器，负责在所占的空间内布置子元素，控制子元素的布局。弹性容器的子元素称为弹性元素。以下述样式和标记为例，结果如下图所示。

```html
<div id="one">
    <p>flex item with <br> two longer lines</p>
    <span>flex item</span>
    <p>flex item</p>
</div>

<div id="two">
    <span>flex item with <br> two longer lines</span>
    <span>flex item</span>
    <p>flex item</p>
</div>
```

```css
div#one {
    display: flex;
}

div#two {
    display: inline-flex;
}

div {
    border: 1px dashed; 
    background: silver;
}

div > * {
    border: 1px solid;
    background: #AAA;
}

div p {
    margin: 0;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E5%BC%B9%E6%80%A7%E5%AE%B9%E5%99%A8%E7%9A%84%E4%B8%A4%E7%A7%8D%E7%B1%BB%E5%9E%8B.png)

注意，div 的每个子元素都变成一个弹性元素，而且是以相同方式布局的。不管是段落还是 span 元素，都变成弹性元素（如果不把段落的外边距去掉，会有一些区别）。

上面两个弹性容器之间唯一的区别是，一个使用 display: flex 得到，另一个使用 display: inline-flex 得到。第一个 div 元素生成的是块级框，弹性元素在其中布局。而第二个 div 元素生成的是行内块级框，弹性元素在其中布局。

>写作本书时，CSS 正在引进新的模式，把 display: flex 的值分为单个的关键字。在这个新系统中，上面两种弹性容器要使用 display: flex block 和 display: flex inline 声明。flex 和 inline-flex 这两个旧值仍能正常使用，无需担心。不过，遇到 inline flex 或 flex inline 这样的值时你要知道是什么意思。

记住，把一个元素设为弹性容器之后，例如上图中那两个 div 元素，只有直接子元素使用弹性盒布局，其他后代元素不受影响，这一点十分重要。然而，你也可以把后代元素也设为弹性容器，实现特别复杂的布局。

在弹性容器中，各元素在主轴上排列。主轴可以是横向的，也可以是纵向的，因此可以把元素布置为列或行。主轴采用书写模式设置的方向，深入讨论见本章后面深入理解各种轴一节。

如上图中的第一个 div 元素所示，如果弹性元素没有占满容器的整个主轴（这里指宽度），将出现一些空白。这些空白的具体处理方式可由几个属性控制，详情参见后文。子元素可以全部靠左、全部靠右、全部居中，也可以均匀分布，把多出的空间平均分配在子元素之间或四周。

除了均匀分布空白之外，还可以增加部分弹性元素的尺寸，把多出的空间分给一个、多个或全部弹性元素。如果容器的空间不足以放下所有弹性元素，可以通过相关属性指明缩减弹性元素的尺寸，或者允许换行。

此外，子元素可以相对容器或其他子元素对齐，可以靠容器底部对齐，可以靠容器顶部对齐，也可以在容器中居中对齐。此外还可以拉伸，占满整个容器。不管同辈元素之间的内容长度相差多少，使用一个声明就可以让所有同辈元素具有相同的尺寸。

<br>

## 1. 一个简单的例子

假设我们想创建一个导航栏，显示一组链接。这正是弹性盒能处理的问题。代码如下：

```html
<nav>
	<a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/blog">Blog</a>
    <a href="/jobs">Careers</a>
    <a href="/contact">Contact Us</a>
</nav>
```

```css
nav {
    display: flex;
}
```

在上述代码中，我们把 nav 元素的 display 属性设为 flex，把它变成一个弹性容器，而它的子元素，即那些链接，变成弹性元素。链接还是链接，不过在呈现方式上变成了弹性元素。现在，那些链接不再是行内框了，它们身处容器的弹性格式化上下文中。因此，布局时，a 元素之间的空白将被完全忽略。如果你曾使用 HTML 注释抑制链接、列表项目等元素之间的空白，你便知道这是多么重要的一点。

下面为链接添加一些 CSS：

```css
nav {
    display: flex;
    border-bottom: 1px solid #ccc;
}

a {
    margin: 0 5px;
    padding: 5px 15px;
    border-radius: 3px 3px 0 0;
    background-color: #ddaa00;
    text-decoration: none;
    color: #ffffff;
}

a:hover, a:focus, a:active {
    background-color: #ffcc22;
    color: black;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E6%A0%87%E7%AD%BE%E5%BC%8F%E5%AF%BC%E8%88%AA%E6%A0%8F.gif)

目前来看，这也没什么大不了的，因为使用以前的 CSS 技术也能实现这种效果。但是仔细观察一下，你会发现使用弹性盒更简洁。

在设计上，弹性盒对方向是没有认识的。而块级元素和行内元素则不同，前者纵向移动，而后者横向移动。Web 的设计初衷是为了在显示器上显示网页，因此对横向尺寸有限制，而纵向则可以无限滚动。纵向移动的布局不再适应现代的应用，不同的用户代理和不同的视区方向可能改变浏览方向，或者增减尺寸，而且不同的语言有不同的书写模式。

多年以来，纵向居中和多栏布局始终没有得到重视。而有些布局是不应该被忽视的，例如确保并排放置的多个框体构成一个等高的栅格，按钮或详情链接固定在各框体的底部，而且按钮的内容完美地纵向居中，如下图所示。或者确保内容长度不等的图库中每个框体的高度都一样，而且两行图片完美对齐，如下图所示。有了弹性盒，这些要求都能轻易实现。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E4%BD%BF%E7%94%A8%E5%BC%B9%E6%80%A7%E7%9B%92%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80%EF%BC%8C%E6%8C%89%E9%92%AE%E9%9D%A0%E5%BA%95%E9%83%A8%E5%AF%B9%E9%BD%90.png)

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E4%BD%BF%E7%94%A8%E5%BC%B9%E6%80%A7%E7%9B%92%E5%AE%8C%E7%BE%8E%E5%AF%B9%E9%BD%90%E5%9B%BE%E5%BA%93%E4%B8%AD%E7%9A%84%E5%90%84%E5%88%97.png)

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E7%94%B1%E5%A4%9A%E4%B8%AA%E7%BB%84%E4%BB%B6%E6%9E%84%E6%88%90%E7%9A%84%E5%B0%8F%E7%BB%84%E4%BB%B6%EF%BC%8C%E5%85%A8%E9%83%BD%E7%BA%B5%E5%90%91%E5%B1%85%E4%B8%AD.png)

>在使用浮动实现布局之前，经常使用表格布局。表格不应该用于布局，原因由很多：表格布局没有语义，难以更新布局，可访问性不好，代码过多，难以复制文本。鉴于此，表格适合显示表格类数据。

<br>

经典的 Holy Grail 布局，即一个页头、三个宽度不同但高度相等的分栏、再加一个页脚，可以使用多种方式实现，但都不简单，除非使用弹性盒。这种布局可以使用下述 HTML 表示：

```html
<header>Header</header>
<main>
	<nav>Links</nav>
    <aside>Aside content</aside>
    <article>Document content</article>
</main>
<footer>Footer</footer>
```

多数设计方式得到的分栏高度看起来是相等的，但是为 aside、article 和 nav 加上背景后，便会发现，其实高度并不相同。为了得到表面傻瓜等高的分栏，我们通常会根据 CSS 中为各栏声明的宽度，精心制作一个图像，添加到父元素的背景中，而且要设定特别大的内边距和负外边距，再插入清除浮动的生成内容，使尽各种技巧。

这些小伎俩把 CSS 搞得乱七八糟（HTML 也受到一定影响），旧的布局方法让人晕头转向。很多人开始使用 YUI grids、Bootstrap、Foundation、960 grid 等 CSS 布局库，只为在开发过程中多一丝清净。希望本书能让你认识到，不使用 CSS 框架也能让布局样式简洁名了。

在阅读本章的过程中谨记一点：弹性盒的目的是实现一种特定的布局，即一维内容分布。也就是说，弹性盒最适合沿一个方向（或轴）布置内容。虽然可以使用弹性盒实现栅格式的布局（二维排列），但这不是弹性盒的最初目的。如果你需要的是二维布局，请阅读第 13 章。

<br>

# 2. 弹性容器

首先要完全理解的概念是弹性容器，也叫容器框。display: flex 或 display: inline-flex 声明的目标元素变成弹性容器，为其元素生成弹性格式化上下文。

这些子元素不论是 DOM 节点、文本节点，还是生成的内容，都称为弹性元素。弹性容器中的绝对定位子元素也是弹性元素，不过确定其尺寸和位置时，将其视作弹性容器中唯一的弹性元素。

先来学习能应用到弹性容器上的 CSS 属性，包括对弹性元素的布局有影响的几个属性。弹性元素本身也是一个重要的概念，必须理解，我们将在 12.9 节讨论。

图一中的示例使用 display 属性把三个弹性元素并排显示，从左至右，在一行里。再声明几个属性，我们还可以让它们靠容器的底部对齐、重新排列它们的显示顺序，或者让它们从左至右或从上到下排列。甚至，还可以把它们分成多行。

有时只有一个弹性元素，有时却有很多个。有时我们知道一个节点有多少子元素，有时子元素的数量却不在我们的掌控之中。即便知道元素的数量，可能也不知道容器的宽度。我们需要适应性强的 CSS，即便不知道有多少弹性元素，不知道弹性容器有多宽（比如响应式布局），也能正确处理布局。这些问题看起来棘手，但是使用弹性盒都能轻易解决，只需使用一些新属性。

<br>

## 1. flex-direction 属性

如果你想要的布局是从上到下、从左至右、从右至左的，抑或是从下到上的，可以使用 flex-direction 属性控制排布弹性元素的主轴。

```css
flex-direction

取值：row | row-reverse | column | column-reverse
初始值：row
适用于：弹性容器
计算值：指定的值
继承性：否
动画性：否
```

flex-direction 属性指定在弹性容器中如何摆放弹性元素，即定义弹性容器的主轴，弹性元素就沿这个轴排布（详情参见本章后面深入理解各种轴一节）。

以下述简单的标记为例：

```html
<ol>
	<li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ol>
```

假设语言的书写方向是从左至右，在这个简单的列表上分别应用 flex-direction 属性的四个值得到的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/flex-direction%20%E5%B1%9E%E6%80%A7%E7%9A%84%E5%9B%9B%E4%B8%AA%E5%80%BC.png)

默认值 row 的效果看起来与一堆行内元素或浮动元素没有什么区别。你是被表象迷惑了，稍后具体讲解。现在请注意 flex-direction 属性的其他几个值对列表项目布置方式的影响。

例如，可以使用 flex-direction: row-reverse 反向排布各列表项目，设为 flex-direction: column 时，弹性元素从上到下排布，而设为 flex-direction: column-reverse 时，弹性元素从下到上排布，如上图所示。

前面说过，我们假设语言是从左至右书写的，因为对 row 来说，主轴的方向（排布弹性元素的方向）就是当前书写模式的方向。稍后讨论书写模式对弹性方向和布局的影响。

>不要使用 flex-direction 修改从右至左书写语言的布局。正确的做法是使用 dir 属性，或者 6.10.1 节介绍过的 CSS writing-mode 属性。writing-mode 能在横向和纵向之间切换，指明语言的方向。如果想进一步了解语言方向对弹性盒的影响，请翻到 12.2.2 节。

<br>

在英语这样的语言中，column 值把弹性容器的主轴方向设为当前书写模式下块级元素的移动方向。在横向书写模式中，如英语，指的是纵轴，在纵向书写模式中，如传统日语，指的是横轴。

因此，方向声明为 column 时，弹性元素按它们在源文档中的顺序显示，不过是从上到下显示，而不是从左至右显示，也就是一个弹性元素显示在另一个弹性元素下方，而不是并排显示。来看下述样式：

```css
nav {
	display: flex;
    flex-direction: column;
    border-right: 1px solid #ccc;
}

a {
	margin: 5px;
    padding: 5px 15px;
    border-radius: 3px;
    background-color: #ccc;
    text-decoration: none;
    color: black;
}

a:hover, a:focus, a:active {
	background-color: #aaa;
    text-decoration: underline;
}
```

标记不变，与前面那个横排的标签式导航链接一样，只改几个 CSS 属性就能变成侧边栏式导航。我们把 flex-direction 的值由默认的 row 改成了 column，把边框从底边移到了右边，还修改了颜色，以及 border-radius 和 margin 的值，得到的新布局如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E6%94%B9%E5%8F%98%E5%BC%B9%E6%80%A7%E6%96%B9%E5%90%91%E5%8F%AF%E8%83%BD%E5%AE%8C%E5%85%A8%E6%94%B9%E5%8F%98%E5%B8%83%E5%B1%80.gif)

column-reverse 值的效果与 column 类似，不过主轴的方向式相反的，起点是下方、终点在上方，由下向上指，如上两个图所示。这个值只颠倒外观，阅读顺序和 Tab 键顺序保持不变，与底层标记一样。

目前所学的知识异常强大，不费吹灰之力就能实现各种布局。如果把前面那个导航放在一个完整的文档中，你会发现，只使用几个弹性盒属性便能轻易改变布局。

下面在前面的 HTML 标记中添加一些内容，把导航作为一个组件，放到首页中：

```css
* {
  outline: 1px #ccc solid;
  margin: 10px;
  padding: 10px;
}

body, nav, main, article {
  display: flex;
}

body, article {
  flex-direction: column;
}
```

```html
<body>
  <header><h1>My Page's title!</h1></header>
  <nav>
  <a href="#1">Home</a>
  <a href="#2">About</a>
  <a href="#3">Blog</a>
  <a href="#4">Careers</a>
  <a href="#5">Contact Us</a>
  </nav>
  <main>
  <article>
  <img alt="" src="img1.jpg">
  <p>This is some awesome content that is on the page.</p>
  <button>Go Somewhere</button>
  </article>
  <article>
  <img alt="" src="img2.jpg">
  <p>This is more content than the previous box, but less than the next.</p>
  <button>Click Me</button>
  </article>
  <article>
  <img alt="" src="img3.jpg">
  <p>We have lots of content here to show that content can grow, and everything can be the same size if you use flexbox. Even if this has tons of text, it will line up with the other sections.</p>
  <button>Do Something</button>
  </article>
  </main>
  <footer>Copyright &copy; 2018</footer>
</body>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E9%A6%96%E9%A1%B5%E5%B8%83%E5%B1%80.png)

是的，弹性容器也可以是弹性元素，如这里的导航、主内容区和文章所示。body 和 article 的弹性方向是 column，而 nav 和 main 使用默认值 row。就那么两行 CSS。

别误会，其实上图使用的样式不止这两行。我们为所有元素设置了边框、外边距和内边距，以便清除地分清哪些是弹性元素（我可不会把这个不太好看的网站放到网上）。除了这些样式之外，我们只是把 body、nav、main 和 article 声明为弹性容器，从而把所有导航链接、主内容区中的文章、图像、段落和按钮等变成弹性元素。

<br>

## 2. 其他书写方向

如果你的网站使用的是英语等从左至右书写的语言，可能希望弹性元素从左至右、从上到下排布。此时，使用默认值或者设为 row 即可。然而，如果使用的是阿拉伯语等从右至左书写的语言，可能想从右至左、从上到下排布弹性元素。此时，也是使用默认值或者设为 row 即可。

flex-direction: row 按照文本方向（即书写模式）布置弹性元素，不管语言是从左至右书写的，还是从右至左书写的。多数网站用的是从左至右书写的语言，不过也有一些网站使用从右至左书写的语言，甚至还有的网站使用从上到下书写的语言。弹性盒定义的是单向布局。修改书写模式后，弹性盒能自动转换弹性方向。

书写模式由 writing-mode、direction 和 text-orientation 属性设定，也可以使用 HTML 的 dir 属性设置（详情参见第 6 章）。如果书写模式是从右至左，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E4%B9%A6%E5%86%99%E6%96%B9%E5%90%91%E4%B8%BA%E4%BB%8E%E5%8F%B3%E8%87%B3%E5%B7%A6%E6%97%B6.png)

>如果 CSS direction 属性的值与元素上 dir 属性的值不同，CSS 属性的值比 HTML 属性优先级高。规范强烈建议使用 HTML 属性设置书写模式。

<br>

世界上还有纵向书写的语言，例如汉语拼音字母、埃及象形文字、平假名、片假名、汉语、韩语、麦罗埃草书和象形文字、蒙古语、欧甘文字、古土耳其语、八思语及其部分日语。这些语言仅在指定纵向书写模式时才纵向排列。否则，这些语言都横向排列。如果指定纵向的书写模式，所有内容都是纵向的，不管是上面列举的某种竖写语言，还是英语。

从上到下书写的语言，writing-mode 属性的值是 horizontal-tb，此时主轴由从左至右的方向顺时针旋转 90 度，因此 flex-direction: row 从上到下，而 flex-direction: column。从右至左，把 flex-direction 属性的各个值应用到下述标记上得到的结果如下图所示。

```html
<ol lang="jp">
	<li>一</li>
    <li>二</li>
    <li>三</li>
    <li>四</li>
    <li>五</li>
</ol>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E4%B9%A6%E5%86%99%E6%A8%A1%E5%BC%8F%E4%B8%BA%E7%AB%96%E5%90%91%E5%9B%9B%E4%B8%AA%E5%80%BC%E7%9A%84%E6%95%88%E6%9E%9C.png)

你没看错，行是竖的，列是横的。不仅如此，column 的方向是从右至左，而 column-reverse 是从左至右。把这些值应用到从上到下、从右至左书写的语言上就是这样的效果。

好的，我们已经讲了弹性方向与书写模式之间的关系。但是目前所举的例子都只有一行或一列弹性元素，如果弹性元素的主维度（row 时的宽度之和，column 时的高度之和）在弹性容器中放不下怎么？我们可以让放不下的元素溢出，也可以换行。后文还会说明缩减弹性元素的尺寸，以便放得下。

<br>

## 3. 换行

如果弹性元素在弹性容器得主轴傻瓜放不下，默认情况下弹性元素不会换行，也不会自行调整尺寸。如果通过 flex 属性设定允许弹性元素缩减尺寸（见 12.12 节），那就缩减尺寸，否则，弹性元素将从容器框的边界溢出。

这个行为受我们的控制。我们可以在容器上设置 flex-wrap 属性，允许弹性元素换行，变成多行或多列。而不让弹性元素从容器中溢出，或者缩减尺寸，挤在同一行。

```css
flex-wrap

取值：nowrap | wrap | wrap-reverse
初始值：nowrap
适用于：弹性容器
计算值：指定的值
继承性：否
动画性：否
```

flex-wrap 属性的作用是限制弹性容器只能显示一行，或者允许弹性元素在必要时显示多行。允许换行时，wrap 和 wrap-reverse 决定多出的行显示在第一行之前还是之后。

默认情况下，不管有多少弹性元素，全部在一行里绘制。这往往不是我们想要的效果。遇到这种情况就要请出 flex-wrap 属性了。设为 wrap 或 wrap-reverse 时，如果弹性元素超出了弹性容器的边界，将换行显示放不下的弹性元素。

下图展示 flex-direction 的值为 row 时（而且语言是从左至右书写的）flex-wrap 属性三个值的效果。图中的示例有两行弹性元素，可以看出，后续的行添加在垂轴上（这里是纵轴）。

一般情况下，换行时，对 row 和 row-reverse 来说垂轴从上指向下方。对 column 和 column-reverse 来说，垂轴与语言的横排方向一样。wrap-reverse 值得作用与 wrap 类似，不过额外得行添加在第一行前面，而不是后面。

设为 wrap-reverse 时，垂轴的方向相反：对 row 和 row-reverse 来说，后续的行在上方绘制。对 column 和 column-reverse 来说，后续的行在前一列的左侧绘制。类似地，在从右至左书写的语言中，设为 row wrap-reverse 和 row-reverse wrap-reverse 时，新行也添加到上方，但是设为 column wrap-reverse 和 column-reverse wrap-reverse 时，新行添加到右侧，即与语言的书写方向和垂轴的方向相反。

这些轴稍后再讨论，下面先来看能同时设置弹性方向和换行方式的简写属性。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E6%A8%AA%E6%8E%92%E6%97%B6flex-wrap%E5%B1%9E%E6%80%A7%E4%B8%89%E4%B8%AA%E5%80%BC%E7%9A%84%E6%95%88%E6%9E%9C.png)

<br>

## 4. 定义弹性流

flex-flow 属性用于定义主轴和垂轴的方向，以及是否允许弹性元素换行。

```css
flex-flow

取值：<flex-direction> || <flex-wrap>
初始值：row nowrap
适用于：弹性容器
计算值：指定的值
继承性：否
动画性：否
```

flex-flow 属性是 flex-direction 和 flex-wrap 两个属性的简写形式，用于定义弹性容器的换行方式及主轴和垂轴的方向。

把 display 属性设为 flex 或 inline-flex 后，省略 flex-flow、flex-direction 和 flex-wrap 相当于声明下述三个规则中的任何一个，结果如图所示：

```css
flex-flow: row;
flex-flow: nowrap;
flex-flow: row nowrap;
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E6%A8%AA%E6%8E%92%E4%B8%8D%E6%8D%A2%E8%A1%8C%E7%9A%84%E5%BC%B9%E6%80%A7%E6%B5%81.png)

在从左至右的书写模式下，声明前面给出的任何一个值，或者完全省略 flex-flow 属性，得到的弹性容器的主轴是横向的，而且不换行。上图中的弹性元素在横轴上均匀分布，而且显示在同一行，超过 500 像素宽的容器后溢出。

如果想要的是反向纵排且允许换行的弹性流，使用下述声明中的任何一个都可以：

```css
flex-flow: column-reverse wrap;
flex-flow: wrap column-reverse;
```

在从左至右书写的语言中，上述声明使弹性元素从下向上排，而且从左侧开始，新列添加在右侧。在日语等纵向书写模式中，得到的列是横排的，从左至右流动，换行时上部多出的内容显示在下一列的底部。

我们多次用到主轴和垂轴，但是还没有深入说明它们是什么意思。现在该说说了。

<br>

### 深入理解各种轴

首先，弹性元素沿主轴排布。各行弹性元素沿垂轴的方向添加。

在介绍 flex-wrap 属性之前，所有示例都只有一行弹性元素。那一行弹性元素在主轴上排布，沿主方向，从主轴起边指向主轴终边。根据所设的 flex-direction 属性，弹性元素可能并排着排布，也可能从上到下或从下到上排布，沿主轴的方向显示为一行或一列。如下图所示。

可以看出，下图中有大量术语，其中很多是新的，要说明一下。下面对各术语做个简单的定义。

主轴

内容沿此轴流动。在弹性盒中，指弹性元素流动的方向。

主轴尺寸

主轴方向上内容的总长度。

主轴起边

主轴上内容开始流动的那一端。

主轴终边

主轴上内容流向的那一端，与主轴起边相对。

垂轴

块级元素沿此轴堆叠。在弹性盒中，指放置新弹性元素行的方向（前提是允许换行）。

垂轴尺寸

垂轴方向上内容的总长度。

垂轴起边

垂轴上块级元素开始堆叠的那一边。

垂轴终边

垂轴上与起边相对的那一边。

这些要素的位置取决于弹性方向、换行方式和书写模式。图解每种书写模式有点难，下面仅以从左至右书写的语言为例。各种情况见下表。

>注意，书写模式反转后，一切都反过来了，这一点一定要理解。为了便于更好地说明（和弄清）弹性布局，本章后续的内容和示例都基于从左至右的书写模式，但是会提及书写模式对各弹性属性和功能的影响。

从左至右书写模式下主轴和垂轴的维度和方向，及其起边和终边的位置

|          | row      | row-reverse | column   | column-reverse |
| -------- | -------- | ----------- | -------- | -------------- |
| 主轴     | 从左至右 | 从右至左    | 从上到下 | 从下到上       |
| 主轴起边 | 左边     | 右边        | 顶边     | 底边           |
| 主轴终边 | 右边     | 左边        | 底边     | 顶边           |
| 主轴尺寸 | 宽度     | 宽度        | 高度     | 高度           |
| 主轴维度 | 横向     | 横向        | 纵向     | 纵向           |
| 垂轴     | 从上到下 | 从上到下    | 从左至右 | 从左至右       |
| 垂轴起边 | 顶边     | 顶边        | 左边     | 左边           |
| 垂轴终边 | 底边     | 底边        | 右边     | 右边           |
| 垂轴尺寸 | 高度     | 高度        | 宽度     | 宽度           |
| 垂轴维度 | 纵向     | 纵向        | 横向     | 横向           |

对 flex-direction 来说，我们知道弹性元素从主轴起边开始在弹性容器的主轴上排布。如果使用 flex-wrap 属性允许一行中放不下的弹性元素换行，垂轴的方向决定额外的行在什么方向上添加。

学过 12.2.4 节介绍的 flex-flow 简写属性之后我们知道，可以把原本将超出容器主轴尺寸的弹性元素换行显示，每一行中的弹性元素沿主轴方向排布，从主轴起边流向主轴终边，但是额外的行沿垂轴方向排布，从垂轴起边流向垂轴终边。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E4%BB%8E%E5%B7%A6%E8%87%B3%E5%8F%B3%E4%B9%A6%E5%86%99%E6%A8%A1%E5%BC%8F%E4%B8%8B%E4%B8%BB%E8%BD%B4%E5%92%8C%E5%9E%82%E8%BD%B4%E5%90%84%E6%9C%AF%E8%AF%AD%E7%9A%84%E4%BD%8D%E7%BD%AE.png)

垂轴始终与主轴垂直。从图可以看出，横排弹性元素时，垂轴是纵向的。额外的行就沿垂轴方向添加。图中的示例设置的是 flex-grow: row wrap 和 flex-flow: row-reverse wrap，而且语言是横向书写的，因此额外的行添加在现有行的下方。

垂轴尺寸与主轴尺寸相对，不管语言是从右至左还是从左至右书写的（不含从上到下书写的语言），对 row 和 row-reverse 来说是高度，对 column 和 column-reverse 来说是宽度。各行弹性元素都在弹性容器中，第一行放在垂轴起边，后续各行依次向垂轴终边排开。

wrap-reverse 值反转垂轴的方向。正常情况下，如果把 flex-direction 设为 row 或 row-reverse，垂轴从上到下，垂轴起边在上部，垂轴终边在下部。但是如果把  flex-wrap 设为 wrap-reverse，垂轴起边和垂轴终边的位置将对调，垂轴起边在下部，而垂轴终边在上部，垂轴从下指向上方。因此，额外的行将添加到前一行的上方。

如果把 flex-direction 设为 column 或 column-reverse，默认情况下，在从左至右书写的语言中，垂轴从左指向右方，新行添加在前一行的右侧。如图所示，如果把 flex-wrap 设为 wrap-reverse，垂轴的方向将反过来，垂轴起边在右侧，垂轴终边在左侧，垂轴由右指向左方，因此额外的行添加到前一行的左侧。

>为了清楚地表示弹性元素行的高度和流动方向，两图在弹性容器上声明了 align-items: flex-start 和 align-content: flex-start。这两个属性在后面的章节介绍。

了解了这些术语和维度之后，下面回到 flex-wrap 属性上。

<br>

## 5. flex-wrap 续谈

默认值 nowrap 禁止换行，因此前文讨论的垂轴方向没有任何意义，毕竟根本不会出现第二行。如果可能出现额外的行（flex-wrap 设为 wrap 或 wrap-reverse 时），那些行将沿垂轴方向添加。第一行放在垂轴的起边，额外的行则向垂轴终边排开。

使用 flex-wrap: wrap-reverse 可以反转垂轴的方向，把新行添加到前一行的上方或左侧。下图中最后一个示例用的就是 wrap-reverse。可以看到，第一行弹性元素从垂轴起边开始，不过后续各行却沿反方向添加。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E7%AB%96%E6%8E%92%E5%BC%B9%E6%80%A7%E5%85%83%E7%B4%A0%E6%97%B6flex-wrap%E5%B1%9E%E6%80%A7%E4%B8%89%E4%B8%AA%E5%80%BC%E7%9A%84%E6%95%88%E6%9E%9C.png)

与横排相比，使用的 flex-wrap 值还是那三个，不过 flex-direction 属性的值是 column，而不是 row。这里，弹性元素沿纵轴排布。但是与横排时一样，如果没有通过 flex-wrap 属性启用换行（显式在容器上设置 flex-wrap: nowrap，或者不声明这个属性，默认为 nowrap），不会出现新行，即便弹性元素将超出弹性容器的边界，也不会换行。

弹性流动方向为 column 时，如果弹性元素在弹性容器中放不下，而且禁止换行，那么弹性元素将从弹性容器中溢出，这一点与弹性流动方向为 row 时一样。然而，使用 min-width: 0 或类似的技术能让弹性元素缩小尺寸，以便在容器中能放得下。不过，弹性元素不能无限缩小，小于边框、内边距和外边距之和。

如果在弹性容器上设置了 flex-flow: column wrap，当空间不够，在一行里放不下全部弹性元素时，将出现换行。多出的弹性元素将放在沿垂轴方向放置的一个新行里。这里，新行是纵排的（一列），在前一行的右侧，如下图中的 flex-flow: column wrap 示例情况类似，不过垂轴起边和垂轴终边的位置将对调，因此第一列在右方，而后续各列（弹性元素行）添加到第一行的左侧。

可以看出，flex-direction 和 flex-wrap 对布局有很大影响，而且二者之间也有不小的影响。如果想设置其中某一个属性，最好两个都设置，此时可以使用规范强烈推荐的 flex-flow 属性。

<br>

# 3. 布置弹性元素

目前所举的例子都没有涉及每一行中弹性元素的具体位置，我们不知道如何确定弹性元素的位置。横排的弹性元素横向展开似乎是理所当然的，但是为什么所有元素都靠主轴起边一侧紧挨在一起？为什么不增加弹性元素的尺寸，填满全部可用空间？为什么不让弹性元素在一行里均匀分布？

下面举个例子，请看下图。看到左上角的空白了吗？这是从下到上、从右至左的流动方式，新弹性元素放在前一个弹性元素的上方，新行放在前一行的左侧。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E4%B8%BB%E8%BD%B4%E7%BB%88%E8%BE%B9%E5%92%8C%E5%9E%82%E8%BD%B4%E7%BB%88%E8%BE%B9%E7%9A%84%E6%96%B9%E5%90%91%E5%87%BA%E7%8E%B0%E7%A9%BA%E7%99%BD.png)

默认情况下，不管把 flex-flow 设为什么值，在弹性容器中放完全部弹性元素后留下的空白始终出现在主轴终边和垂轴终边的方向。不过有属性能调整这一行为。

<br>

# 4. 弹性容器

在目前所举得例子中，如果弹性元素不能填满整个弹性容器，弹性元素将统一向主轴起边靠紧。不过，弹性元素也可以紧靠主轴终边，或者在弹性容器中居中，甚至可以在主轴上均匀分布。

弹性布局规范提供的一些属性能控制空间的分布情况，除了 display 和 flex-flow 之外，CSS Flexible Box Layout Module Level 1 还提供了一些能应用到弹性容器上的属性，包括 justify-content、align-content 和 align-items。

justify-content 属性控制一行里的弹性元素在主轴上如何分布。align-content 属性定义各弹性元素行在弹性容器的垂轴上如何分布。align-items 属性定义各行里的弹性元素在垂轴上如何分布。先看一行里的弹性元素是如何布置的。

<br>

# 5. 调整内容

justify-content 属性指明在弹性容器的主轴上如何分布各行里的弹性元素。这个属性应用于弹性容器上，不能用到单个弹性元素上。

```css
justify-content

取值：flex-start | flex-end | center | space-between | space-around | space-evenly
初始值：flex-start
适用于：弹性容器
计算值：指定的值
继承性：否
动画性：否
```

justify-content 属性定义如何把弹性容器的空间分配给弹性元素的四周或者弹性元素之间。六个可选值的效果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/%E5%A3%B0%E6%98%8Eflex%20initial%E6%97%B6%20%E5%BC%B9%E6%80%A7%E5%85%83%E7%B4%A0%E8%83%BD%E7%BC%A9%E5%B0%8F%20%E4%BD%86%E6%98%AF%E4%B8%8D%E4%BC%9A%E5%A2%9E%E5%A4%A7.png)





































# 12.4 弹性容器







# 12.5 调整内容

**`justify-content 属性指明在弹性容器的主轴上如何分布各行里的弹性元素。这个属性应用于弹性容器上，不能用到单个弹性元素上。`**

```css
justify-content

取值：flex-start | flex-end | center | space-between | space-around | space-evenly
初始值：flex-start
适用于：弹性容器
计算值：指定的值
继承性：否
动画性：否
```





# 12.6 对齐元素

```css
align-items

取值：flex-start | flex-end | center | baseline | stretch
初始值：stretch
适用于：弹性容器
计算值：指定的值
继承性：否
动画性：否
```







# 12.7 align-self 属性

**`这个属性在单个元素上覆盖 align-items 属性的值`**

```css
align-self

取值：auto | flex-start | flex-end | center | baseline | stretch
初始值：auto
适用于：弹性元素
继承性：否
百分数：不适用
动画性：否
```
```html
<section>
    <div>Item #1</div>
    <div>Item #2</div>
    <div>Item #3</div>
</section>
```

```css
.section {
    display: flex;
    align-items: center;
    height: 120px;
    background: beige;
}


div {
    height: 60px;
    background: cyan;
    margin: 5px;
}


div:nth-child(3) {
    align-self: flex-end;
    background: pink;
}
```





# 12.8 对齐内容

```css
align-content

取值：flex-start | flex-end | center | space-between | space-around | space-evenly | stretch
初始值：stretch
适用于：分为多行显示的弹性容器
计算值：指定的值
继承性：否
动画性：否
```



```html
<section>
    <div class="olive">Olive</div>
    <div class="coral">Coral</div>
    <div class="deepskyblue">
        Deep
        <br />
        sky
        <br />
        blue
    </div>
    <div class="orchid">Orchid</div>
    <div class="slateblue">Slateblue</div>
    <div class="maroon">Maroon</div>
</section>
```



```css
section {
    border: solid 1.5px tomato;
    height: 300px;
    width: 300px;
    flex-wrap: wrap;
    gap: 0.2rem;
    display: block;
    align-content: center;
}

.olive {
    background-color: olive;
}

.coral {
    background-color: coral;
}

.deepskyblue {
    background: deepskyblue;
}

.orchid {
    background-color: orchid;
}

.slateblue {
    background-color: slateblue;
    color: white;
}

.maroon {
    background-color: maroon;
    color: white;
}
```





# 12.9 弹性元素







# 12.10 适用于弹性元素的属性





 

# 12.11 flex 属性

```css
flex

取值：[ <flex-grow> <flex-shrink>? || <flex-basis> ] | none
初始值：0 1 auto
适用于：弹性元素（弹性容器的子元素）
百分数：只能作为 flex-basis 的值，相对父元素内的主轴尺寸计算
计算值：参见各单独属性
继承性：否
动画性：参见各单独属性
```





# 12.12 flex-grow 属性

```css
flex-grow

取值：<number>
初始值：0
适用于：弹性元素（弹性容器的子元素）
计算值：指定的值
继承性：否
动画性：是
```



**`flex-grow 的值始终是一个数字。负数无效。如果愿意，可以不使用整数，只要大于或等于零即可。这个属性的值设定弹性增长因子，决定分配弹性容器的可用空间时相对其他同辈弹性元素能增大多少。如果弹性容器中有多余的空间，多出的空间将根据各弹性元素的非零增长因子按比例分配给各个弹性元素。`**

**`例如有个宽度为 750px 的横排弹性容器，里面有三个弹性元素，而且都设置了 width: 100px。因此，弹性元素共占 300 像素的空间，余下 450 像素的空间（因为 750 - 300 = 450）。这是下图的中的第一种情况。此时，所有弹性元素都不允许增大。`**

**`在下图中的第二种情况里，只为一个弹性元素（第三个）设定了增长因子。我们声明的是 flex-grow: 1，不过可以使用浏览器能理解的任何正数。此时，两个弹性元素没有增长因子，而第三个弹性元素有，因此所有可用空间都将分给设定了增长因子的那个弹性元素。所以，450 像素的可用空间都将添加到第三个弹性元素上，最终宽度为 550 像素。样式中为第三个弹性元素声明的 width: 100px 将被覆盖。`**

**`在第三种情况和第四种情况中，虽然设定的弹性增长因子不同，但是得到的弹性元素宽度是一样的。先看第三种情况，这里各弹性元素的增长因子为 1、1 和 3。三个因子之和为 5。各因子除以总和，得到比例。这三个因子除以 5 后得到 0.2、0.2 和 0.6。`**

**`这些比例乘以可用空间，得到增大的量。因此：`**

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/12-42.png)

**`1. 450px ⨉ 0.2 = 90 px`**

**`2. 450px ⨉ 0.2 = 90 px`**

**`3. 450px ⨉ 0.6 = 270 px`**

**`这些就是增加到弹性元素 100 像素初始宽度上的量。因此，最终得到的宽度分别为 190 像素、190 像素和 370 像素。`**

**`第四种情况得到的结果与此相同，因为比例是一样的。假设增长因子变成了 0.5、1 和 1.5。经过计算，第一个弹性元素获得可用空间的六分之一，第二个弹性元素获得三分之一，而第三个弹性元素获得一半。那么最终得到的弹性元素的宽度分别为 175、250 和 425 像素。如果声明的增长因子是 0.1、0.1 和 0.3，或者是 25、25 或 75，抑或任何最终能化简为 1:1:3 的组合，得到的结果都是一样的。`**

**`下面来看弹性元素的 width 值和增长因子都不同的情况。在下图中的第二个例子里，弹性元素的宽度分别为 100 像素、250 像素和 100 像素，增长因子分别为 1、1 和 3，容器的宽度为 750 像素。因此，多出的 300 像素（因为 750 - 450 = 300）空间将分成 5 份，每一份占 60 像素（300 / 5）。这意味着，flex=-grow 值为 1 的第一个和第二个弹性元素均增加 60 像素，而最后一个弹性元素将增加 180 像素，因为它的 flex-grow 值为 3。`**

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/12-43.png)

**`总结一下，弹性容器的可用空间，以及各弹性元素的增长因子和最终宽度如下：`** 

**`可用空间：750px - (100px + 250px + 100px) = 300px`**

**`增长因子：1 + 1 + 3 = 5`**

**`每一份增长因子所占的宽度：300px / 5 = 60px`**

**`弹性增长时，根据原宽度和增长因子计算得到的宽度分别为：`**

**`弹性元素 1 = 100px + (1 ⨉ 60px) = 160px`**

**`弹性元素 2 = 250px + (1 ⨉ 60px) = 310px`**

**`弹性元素 3 = 100px + (3 ⨉ 60px) = 280px`**

**`三者之和为 750 像素。`**





## 1. 在 flex 属性中设定增长因子                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

​                                                              





​                                                



# 12.13 flex-shrink 属性

```css
flex-shrink

取值：<number>
初始值：1
适用于：弹性元素（弹性容器的子元素）
计算值：指定的值
继承性：否
动画性：是
```

​                                                                                                                                                                                                         







# 12.14 flex-basis 属性

```css
flex-basis

取值：content | [ <length> | <percentage> ]
初始值：auto
适用于：弹性元素（弹性容器的子元素）
百分数：相对弹性容器内的主轴尺寸计算
计算值：指定的值，长度值计算为绝对长度
继承性：否
动画性：<width>
```





## 1. content 关键字

**`写作本书时，多数浏览器都不支持 content 关键字，不过微软的 Edge 12+ 除外，但是却等于内容的宽度或高度。使用 content 时，在支持的环境中，弹性基准等于弹性元素中内容的尺寸，即最长一行内容或最宽（或最高）那个媒体对象在主轴上的长度。`**

**`在得到全面支持以前，可以轻易使用腻子脚本让浏览器支持 flex-basis: content；因为它相当于在弹性元素上声明 flex-basis: auto; width: auto; 或 flex-basis: auto; height: auto;（主轴为纵向时）。然而，在 fle             x 简写声明中使用 content 时，不支持这个关键字的浏览器将忽略整个声明。`**





## 2. 自动确定弹性基准    

**`设为 auto 时，不管是显式声明的还是取默认值，flex-basis 等于元素在主轴方向上的尺寸，就像没把元素变成弹性元素一样。如果 width 或 height 的值是长度，弹性基准就等于那个长度。而如果 width 或 height 也是 auto，那么弹性基准回落为 content。`**





## 3. 默认值

**`如果既没有声明 flex-basis，也没有声明 flex，那么弹性元素的主轴尺寸是未弹性变形时元素的尺寸，因为默认值是 auto。`** 

**`在下图中，各弹性元素的弹性基准默认为 auto，增长因子默认为 0，缩减因子默认为 1。那么，各弹性元素的弹性基准为各自的 width 值。因此，在第一个例子中，各弹性元素的弹性基准为 100、200 和 300 像素；在第二个例子中，各弹性元素的弹性基准为 200、400 和 200 像素。两个例子中弹性元素的宽度之和分别为 600 像素和 800 像素，都比主轴尺寸为 540 像素的容器大，因此两种情况下的每个弹性元素都将按比例缩小。`**

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/12-54.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

**`在第一个例子中，我们想把 600 像素的元素放在 540 像素的容器中，因此各弹性元素要缩小 10%，分别变成 90、180 和 270 像素宽。在第二个例子中，我们想把 800 像素的元素放在 540 像素的容器中，因此各弹性元素要缩小 32.5%，分别变成 135、270 和 135 像素宽。`** 





## 4. 长度单位

**`在前面的示例中，弹性基准为 auto 时，默认等于为各弹性元素声明的宽度。除此之外还有其他选择，例如弹性基准的值可以与 width 和 height 使用相同的长度的单位。`** 

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/12-55.png)

**`如果既设定了 flex-basis，又设定了 width（或主轴为纵向时的 height），弹性基准的优先级比宽度（或高度）高。我们把基准值添加到下图中的第一个例子里，各弹性元素的 CSS 如下：`** 

```css
.flex-container {
    width: 540px;
}

.item1 {
    width: 100px;
    flex-basis: 300px;
}

.item2 {
    width: 200px;
    flex-basis: 200px;
}

.item3 {
    width: 300px;
    flex-basis: 100px;
}
```

**`虽然声明的弹性基准可以覆盖弹性元素的主轴尺寸，但是主轴尺寸还受其他属性的影响，例如 min-width、min-height、max-width 和 max-height。这些属性不会被忽略。因此，如果在一个元素上声明了 flex-basis: 100px 和 min-width: 500px，尽管弹性基准比最小宽度小，但还是以最小宽度为准。`** 





### 1. 百分数

**`flex-basis 的百分数值相对弹性容器的主轴尺寸计算。`**





## 5. 零基准

**`flex-basis: auto 来说，基准为弹性元素的内容在主轴方向上的尺寸。如果每个弹性元素的基准都是 0，那么可用空间将是整个弹性容器的主轴尺寸。两种情况下，可用空间都根据各弹性元素的增长因子按比例分配。`** 

**`基准为 0 时，弹性容器的尺寸根据增长因子按比例分给各个弹性元素。此时，由 height、width 或 content 定义的主轴方向上的原尺寸不在考虑范围内，然而 min-width、max-width、min-height 和 max-height 对弹性尺寸有一定的影响。`** 

**`如图所示，基准为 auto 时，只有多出的空间按比例分配给允许增大的弹性元素。还是假设 "flex: x x auto" 文本的宽度为 110 像素，那么在第一个例子中，多出的 210 像素要分为 6 份，每份 35 像素，因此弹性元素的宽度分别为 180、145 和 215 像素。`** 

**`在第二个例子中，基准为 0，全部 540 像素的空间都用于分配。540 像素的空间分为 6 份，每份 90 像素。因此，弹性元素的宽度分别为 180、90 和 270 像素。中间一个弹性元素的宽度为 90 像素，而其中的内容比 110 像素窄，所以这个弹性元素中的内容不换行。`** 







# 12.15 flex 简写属性

| 弹性值               | 说明                                                         |
| -------------------- | ------------------------------------------------------------ |
| **`flex: initial`**  | **`这个值根据 width 或 height 属性（由主轴方向决定）确定弹性元素的尺寸，而且允许缩小。`** |
| **`flex: auto`**     | **`这个值也根据 width 或 height 属性确定弹性元素的尺寸，但是元素是完全弹性的，既可以缩小也可以增大。`** |
| **`flex: none`**     | **`这个值还是据 width 或 height 属性确定弹性元素的尺寸，但是元素完全没有弹性，不能缩小也不能增大。`** |
| **`flex: <number>`** | **`这个值把弹性元素的增长因子设为 <number> 指定的数，同时把缩减因子设为 1，把基准也设为 0.这意味着，width 或 height 属性的值相当于最小尺寸，弹性元素在有多余的空间时将增大。`** |





## 1. initial 值

```css
flex: initial;
flex: 0 1 auto;
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/12-59.png)



## 2. auto 值

```css
flex: auto;
flex: 1 1 auto;
```



![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/12-60.png)



## 3. 使用 none 禁止弹性变形

```css
flex: none;
flex: 0 0 auto;
```



![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/12-61.png)





## 4. 数字值

```css
flex: 3;
flex: 3 1 0;
```



![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC12%E7%AB%A0%EF%BC%9A%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80/12-62.png)                                                                                                                                                                                   









# 12.16 order 属性

```css
order

取值：<integer>
初始值：0
适用于：弹性元素以及弹性容器中绝对定位的子元素
计算值：指定的值
继承性：否
动画性：是
```



