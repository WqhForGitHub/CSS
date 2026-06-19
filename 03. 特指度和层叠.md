# 1. 特指度

由第 2 章得知，我们可以使用多种不同的方法选择元素。实际上，同一个元素可能会被两个或多个规则选择，而且每个规则的选择符不尽相同。以下面三对规则为例，假设每一对规则匹配相同的元素：

```css
h1 {
    color: red;
}

body h1 {
    color: green;
}

h2.grape {
    color: purple;
}

h2 {
    color: silver;
}

html > body table tr[id="totals"] td ul > li {
    color: maroon;
}

li#answer {
    color: navy;
}
```

每对规则中只有一个能胜出，因为匹配的元素只能显示为其中一个颜色。那么我们如何知道哪个规则胜出？

答案隐藏在每个选择符的特指度中。用户代理会计算每个规则中选择符的特指度，然后将其依附到规则中的每个声明上。如果两个或多个属性声明有冲突，特指度最高的声明胜出。

>冲突的解决机制可不是这么简单的。所有样式冲突（包括特指度）都由层叠处理，3.3 节将专门讨论这个问题。

选择符的特指度由选择符本身的组成部分决定。一个特指度值由四部分构成，例如 0, 0, 0, 0。选择符的特指度通过下述规则确定：

* 选择符中的每个 ID 属性值加 0, 1, 0, 0。
* 选择符中的每个类属性值、属性选择或伪类加 0, 0, 1, 0。
* 选择符中的每个元素和伪元素加 0, 0, 0, 1。伪类到底有没有特指度在 CSS2 中表述的有些自相矛盾，不过 CSS2.1 明确指出，伪元素有特指度。
* 连结符和通用选择符不增加特指度。

例如，下面给出几个规则中选择符的特指度：

```css
h1 {
    color: red; /* 特指度 = 0, 0, 0, 1 */
}

p em {
    color: purple; /* 特指度 = 0, 0, 0, 2 */
}

.grape {
    color: purple; /* 特指度 = 0, 0, 1, 0 */
}

*.bright {
    color: yellow; /* 特指度 = 0, 0, 1, 0 */
}

p.bright em.dark {
    color: maroon; /* 特指度 = 0, 0, 2, 2 */
}

#id216 {
    color: blue; /* 特指度 = 0, 1, 0, 0 */
}

div#sidebar *[href] {
    color: silver; /* 特指度 = 0, 1, 1, 1 */
}
```

假如一个 em 元素能被这里的第二个和第五个规则匹配，那么它显示为红褐色，因为第五个规则的特指度大于第二个规则的特指度。

现在做一个练习，计算本节开头那几对规则的特指度：

```css
h1 {
    color: red; /* 0, 0, 0, 1 */
}

body h1 {
    color: green; /* 0, 0, 0, 2（胜出） */
}

h2.grape {
    color: purple; /* 0, 0, 1, 1（胜出） */
}

h2 {
    color: silver; /* 0, 0, 0, 1 */
}

html > body table tr[id="totals"] td ul > li {
    color: maroon; /* 0, 0, 1, 7 */
}

li#answer {
    color: navy; /* 0, 1, 0, 1（胜出） */
}
```

我已经指出每一对中的胜者，即特指度较高的规则。注意特指度的比较方式。在第二对中，h2.grape 选择符胜出，因为它多一个 1: 0, 0, 1 ,1 大于 0, 0, 0, 1。在第三对中，后一个规则胜出，因为 0, 1, 0, 1 大于 0, 0, 1, 7。特指度值 0, 0, 1, 0 其实比 0, 0, 0, 13 大。

这是因为特指度是从左向右比较的。特指度 1, 0, 0, 0 比所有以 0 开头的特指度大，不管后面的数有多大。同样，0, 1, 0, 1 大于 0, 0, 1, 7，因为两者位于第二位的 1 比后者位于第二位的 0 大。

<br>

## 1. 声明和特指度

选择符的特指度确定之后，其值将赋予关联的每个声明。对下述规则来说：

```css
h1 {
    color: silver;
    background: black;
}
```

为了计算特指度，用户代理必须把规则打散成单独的规则。因此，上述规则将变成：

```css
h1, h2.section {
    color: silver;
    background: black;
}
```

在用户代理看来是这样的：

```css
h1 {
    color: silver; /* 0, 0, 0, 1 */
}

h1 {
    background: black; /* 0, 0, 0, 1 */
}

h2.section {
    color: silver;  /* 0, 0, 1, 1 */
}

h2.section {
    background: black; /* 0, 0, 1, 1 */
}
```

如果多个规则匹配同一个元素，而且部分声明之间有冲突，特指度就发挥作用了。例如，对下面规则来说：

```css
/* 0, 0, 0, 2 */
h1 + p {
    color: black;
    font-style: italic;
}

/* 0, 0, 0, 1 */
p {
    color: gray;
    background: white;
    font-style: normal;
}

/* 0, 0, 1, 0 */
*.aside {
    color: black;
    background: silver;
}
```

应用到下述标记后渲染得到的结果如下图所示。

```html
<h1>Greetings!</h1>
<p class="aside">
It's a fine way to start a day, don't you think?
</p>
<p>
There are many ways to greet a person, but the words are not so important as the act of greeting itself.
</p>
<h1>Salutations!</h1>
<p>
There is nothing finer than a hearty welcome from one's fellow man.
</p>
<p class="aside">
Although a thick and juicy hamburger with bacon and mushrooms runs a close second.
</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC3%E7%AB%A0%EF%BC%9A%E7%89%B9%E6%8C%87%E5%BA%A6%E5%92%8C%E5%B1%82%E5%8F%A0/%E4%B8%8D%E5%90%8C%E8%A7%84%E5%88%99%E5%AF%B9%E6%96%87%E6%A1%A3%E7%9A%84%E5%BD%B1%E5%93%8D.png)

在任何情况下，用户代理都会确定哪些规则与元素匹配，然后找出所有相关的声明，计算各自的特指度，判断哪些规则胜出，再把胜出的规则应用到元素上，得到装饰后的结果。每个元素、选择符和声明都要经历这一系列操作。幸好，用户代理能自动处理一切。这个行为是层叠（本章后文讨论）的重要部分。

<br>

## 2. 通用选择符的特指度

通用选择符不增加特指度。也就是说，它的特指度为 0, 0, 0, 0，这与没有特指度是不同的（参见 3.2 节）。因此，对下面两个规则来说，div 元素中的段落将显示为黑色，其他元素则显示为灰色：

```css
div p {
    color: black; /* 0, 0, 0, 2 */
}

* {
    color: gray; /* 0, 0, 0, 0 */
}
```

你可能猜到了，包含通用选择符的选择符，它的特指度不因有通用选择符的存在而改变。下面两个选择符的特指度相等：

```css
div p /* 0, 0, 0, 2 */
body * strong /* 0, 0, 0, 2 */
```

连结符不同，它根本没有特指度，即连零都没有。因此，连结符对选择符的总特指度没有影响。

<br>

## 3. ID 和属性选择符的特指度

ID 选择符和选择 id 属性的属性选择符之间在特指度上是有区别的，这一点一定要注意。来看前述示例中的第三对规则：

```css
html > body table tr[id="totals"] td ul > li {
    color: maroon; /* 0, 0, 1, 7 */
}

li#answer {
    color: navy; /* 0, 1, 0, 1 */
}
```

第二个规则中的 ID 选择符（#answer）为选择符的总特指度贡献 0, 1, 0, 0。然而，第一个规则中的属性选择符（[id="totals"]）为总特指度贡献 0, 0, 1, 0。因此，对下述规则来说，id 为 meadow 的元素将显示为绿色：

```css
#meadow {
    color: green; /* 0, 1, 0, 0 */
}

*[id="meadow"] {
    color: red; /* 0, 0, 1, 0 */
}
```

<br>

## 4. 行内样式的特指度

目前见到的特指度都以零开头，因此你可能会想。那一位为什么要存在？存在必定有用。那一位是为行内样式声明保留的，行内样式声明的特指度比其他声明都高。对下面的规则和标记片段来说：

```css
h1 {
    color: red;
}
```

```html
<h1 style="color: green;">The Meadow Party</h1>
```

即便那个规则会应用到 h1 元素上，但是 h1 元素中的文本仍将显示为绿色。这是因为行内声明的特指度为 1, 0, 0, 0。

这意味着，就算是带 id 属性的元素匹配一个规则，也要位于行内样式声明。修改前面的示例，加上 id：

```css
h1#meadow {
    color: red;
}
```

```html
<h1 id="meadow" style="color: green;">The Meadow Party</h1>
```

因为行内声明的特指度高，所以 h1 元素中的文本仍是绿色的。

<br>

## 5. 重要性

有时某个声明可能非常重要，超过其他所有声明。CSS 称之为重要声明。这种声明要在声明末尾的分号之前插入 !important，例如：

```css
p.dark {
    color: #333 !important;
    background: white;
}
```

这里，颜色值 #333 使用 !important 标记，而背景色 white 没有。如果想把两个声明都标记为重要的，每个声明中都要插入 !important：

```css
p.dark {
    color: #333 !important;
    background: white !important;
}
```

!important 的位置必须正确，否则声明将失效。!important 始终放在声明末尾的分号之前。对值为多个关键字的属性（例如 font）来说，!important 的位置尤其重要：

```css
p.light {
    color: yellow;
    font: smaller Times, serif !important;
}
```

如果把 !important 放在 font 声明的其他位置，整个声明都将失效，而且整个样式都不会应用到元素上。

>我发现有编程经验的人会本能地把这个句法理解为不重要。不管出于什么原因选择了感叹号（!），也不管其他语言为其赋予了怎样的含义，在 CSS 中感叹号的意思并非不。这只是巧合，习惯就好。

带有 !important 的声明对特指度没有影响，但是会与不重要的声明分开处理。其实，所有带 !important 的声明会放在一起，而特指度冲突就在这个范围内解决。同样，非重要的声明作为一个整体，其中的冲突使用特指度解决。因此，重要声明和非重要声明冲突时，重要声明始终胜出。

下述规则和标记片段的结果如下图所示。

```css
h1 {
    font-style: italic;
    color: gray !important;
}

.title {
    color: black;
    background: silver;
}

* {
    background: black !important;
}
```

```html
<h1 class="title">NightWing</h1>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC3%E7%AB%A0%EF%BC%9A%E7%89%B9%E6%8C%87%E5%BA%A6%E5%92%8C%E5%B1%82%E5%8F%A0/%E9%87%8D%E8%A6%81%E8%A7%84%E5%88%99%E5%88%99%E5%A7%8B%E7%BB%88%E8%83%9C%E5%87%BA.png)

>重要声明及其处理方式在 3.3 节深入讨论。

<br>

# 2. 继承

特指度对理解声明是如何应用到文档上的很重要，此外，还有一个重要的概念，即继承。继承指某些样式不仅应用到所指的元素上，还应用到元素的后代上。例如，为 h1 元素设定的颜色还会应用到 h1 中的文本上，即使文本包含在子元素上。

```css
h1 {
    color: gray;
}
```

```html
<h1>Meerkat <em>Central</em></h1>
```

h1 中的常规文本和 em 中的文本都将显示为灰色，因为 em 元素从 h1 元素的样式中继承了 color 属性。如果后代元素无法继承属性值，em 中的文本将显示为黑色，而不是灰色，因此要分别为它们设定颜色。

继承对无序列表也适用。假设为 ul 元素应用 color: gray; 样式：

```css
ul {
    color: gray;
}
```

我们希望应用到 ul 上的这个样式也应用到其中的列表项目，以及列表项目的内容上。得益于继承，事实的确如此，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC3%E7%AB%A0%EF%BC%9A%E7%89%B9%E6%8C%87%E5%BA%A6%E5%92%8C%E5%B1%82%E5%8F%A0/%E7%BB%A7%E6%89%BF%E6%A0%B7%E5%BC%8F.png)

通过文档的树状图更容易理解继承的工作方式。下图是一个十分简单的文档的树状图，文档中有两个列表，一个无序列表，一个有序列表。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC3%E7%AB%A0%EF%BC%9A%E7%89%B9%E6%8C%87%E5%BA%A6%E5%92%8C%E5%B1%82%E5%8F%A0/%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E6%A0%91%E7%8A%B6%E5%9B%BE.png)

把声明 color: gray。应用到 ul 元素上后，那个元素将使用声明的样式渲染。这个值再沿着树状图向下传播到后代元素，直到没有后代为止。属性值绝不向上传播，即元素的样式绝不传给祖辈元素。

>在 HTML 中，向上传播规则有个例外：应用到 body 元素上的背景样式会传给 html 元素。html 是文档的根元素，用于定义渲染文档的画布。这一例外仅发生在为 body 元素定义了背景而没有为 html 元素定义背景的情况下。

继承是 CSS 根基之一，通常无需刻意考虑。不过，有几点要留意。

首先，很多属性是不继承的，这通常是为了避免得到意外的结果，例如，border 属性（设定元素的边框）就不继承。看一眼下图便能揭示个中缘由。如果继承边框，文档将变得杂乱无章，除非编写样式时付出额外的精力去掉继承的边框。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC3%E7%AB%A0%EF%BC%9A%E7%89%B9%E6%8C%87%E5%BA%A6%E5%92%8C%E5%B1%82%E5%8F%A0/%E8%BE%B9%E6%A1%86%E4%B8%8D%E7%BB%A7%E6%89%BF%E7%9A%84%E5%8E%9F%E5%9B%A0.png)

此外，基于同样的原因，多数盒模型属性也不继承，包括外边距、内边距、背景和边框。试想，你肯定不想让段落中的所有链接都从父元素那里继承 30 像素的左外边距。

其次，继承的值没有特指度，连零都没有。这看起来似乎只是理论上的不同，但是等你了解到继承的值没有特指度将产生怎样的结果时，便会发现这种差距决不能忽视。分析下述规则和标记片段，与下图所示的结果比较一下。

```css
* {
    color: gray;
}

h1#page-title {
    color: black;
}
```

```html
<h1 id="page-title">Meerkat <em>Central</em></h1>
<p>
	Welcome to the best place on the web for meerkat information!
</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC3%E7%AB%A0%EF%BC%9A%E7%89%B9%E6%8C%87%E5%BA%A6%E5%92%8C%E5%B1%82%E5%8F%A0/%E9%9B%B6%E7%89%B9%E6%8C%87%E5%BA%A6%E6%88%98%E8%83%9C%E6%97%A0%E7%89%B9%E6%8C%87%E5%BA%A6.png)

因为通用选择符应用于全部元素，而且特指度为零，所以它声明的颜色 gray 击败继承的颜色 black（由于继承的值根本没有特指度）。因此，em 元素渲染为灰色，而不是黑色。

这个例子充分体现了滥用通用选择符的潜在危险。通用选择符能匹配任何元素，它往往会终结继承。这个问题有变通解决方法，但是通常最好从一开始就不滥用通用选择符。

继承的值没有特指度是很关键的一点，决不能忽略。例如，假设我们使用下面的样式表把工具栏中的所有文本显示为黑底白字：

```css
#toolbar {
    color: white;
    background: black;
}
```

只要 id 为 toolbar 的元素中都是纯文本，就能得到所要的效果。然而，如果工具栏中都是超链接（a 元素），那么超链接将显示为用户代理自带的样式。在 Web 浏览器中，很可能显示为蓝色，因为浏览器的内部样式表中可能有这么一个规则：

```css
a:link {
    color: blue;
}
```

如果不想使用默认样式，必须像下面这样声明：

```css
#toolbar {
    color: white;
    background: black;
}

#toolbar a:link {
    color: white;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC3%E7%AB%A0%EF%BC%9A%E7%89%B9%E6%8C%87%E5%BA%A6%E5%92%8C%E5%B1%82%E5%8F%A0/%E7%9B%B4%E6%8E%A5%E6%8A%8A%E6%A0%B7%E5%BC%8F%E5%BA%94%E7%94%A8%E5%88%B0%E7%9B%B8%E5%85%B3%E5%85%83%E7%B4%A0%E4%B8%8A.png)

此外，使用前一章介绍的 inherit 也能得到相同的结果。把规则改成下面这样：

```css
#toolbar {
    color: white;
    background: black;
}

#toolbar a:link {
    color: inherit;
}
```

现在得到的结果跟上图一样，因为第二个规则的选择符有特指度，而且明确指定 color 的值继承而来。

<br>

# 3. 层叠

目前，本章一直回避了一个十分重要的问题：如果两个特指度相等的规则应用到同一个元素上会发生什么？浏览器如何解决这样的冲突？例如，对下面的规则来说：

```css
h1 {
    color: red;
}

h1 {
    color: blue;
}
```

哪一个规则胜出？两个规则的特指度都是 0, 0, 0, 1，因此它们的权重相同，都应该应用到元素上。但事实上并非如此，因为元素的内容不可能既是红色的，又是蓝色的。那到底是什么颜色？

层叠样式表这个名称可以提供一点线索：CSS 采用层叠机制把样式组合在一起，即结合继承和特指度的一些规则。CSS 的层叠规则如下：

1. 找到匹配特定元素的所有规则。
2. 按显式权重排序应用到特定元素上的所有声明。以 !important 标记的规则比没有这一标记的权重高。
3. 按来源排序应用到特定元素上的所有声明。声明有三个来源：创作人员、读者和用户代理。正常情况下，创作人员编写的样式击败读者提供的样式。读者样式中以 !important 标记的声明比其他样式权重高，包括创作人员编写的样式中以 !important 标记的声明。创作人员和读者样式覆盖用户代理的默认样式。
4. 按特指度排序应用到特定元素上的所有声明。特指度高的声明具有较高的权重。
5. 按声明的前后位置排序应用到特定元素上的所有声明。样式表或文档中靠后的声明权重较高。导入的样式表中的声明放在当前样式表中所有声明的前面。

## 1. 按权重和来源排序

如果两个规则应用到同一个元素上，而其中一个以 !important 标记，那么有此标记的规则胜出：

```css
p {
    color: gray !important;
}
```

```html
<p style="color: black;">Well, <em>hello</em> there!</p>
```

虽然有个颜色由段落的 style 属性提供，但是 !important 标记的规则依然胜出，因此段落将显示为灰色。em 元素会继承灰色。

<br>

注意，如果 !important 在行内样式中，那么行内样式将胜出。因此，对下属规则和标记来说，段落（及其后代元素）将显示为黑色：

```css
p {
    color: gray !important;
}
```

```html
<p style="color: black !important;">Well, <em>hello</em> there!</p>
```

如果显式权重相同，就要考虑规则的来源。如果匹配元素的两个样式权重相同，而一个在创作人员编写的样式表中，另一个在读者提供的样式表中，那么元素将使用创作人员编写的样式表中的样式。例如，假设下面两个样式分别来自指定的位置：

```css
p em {
    color: black; /* 创作人员编写的样式表 */
}

p em {
    color: yellow; /* 读者提供的样式表 */
}
```

此时，段落中的强调文本显示为黑色，而不是黄色，因为同样的权重下，创作人员编写的样式战胜读者提供的样式。然而，如果两个规则都用 !important 标记，那情况就变了：

```css
p em {
    color: black !important; /* 创作人员编写的样式表 */
}

p em {
    color: yellow !important; /* 读者提供的样式表 */
}
```

现在，段落中的强调文本将显示为黄色，而不是黑色。

有时，这里还牵涉到用户代理的默认样式（通常受用户偏好设置的影响）。在所有来源中，默认样式中的声明式影响力最低的。因此，如果创作人员为锚记定义了规则（例如声明颜色为 white），那么用户代理默认的样式将被覆盖。

综上，在声明的权重上，基本要考虑五个方面，下面按权重从高到低列出：

1. 读者提供的样式中以 !important 标记的声明
2. 创作人员编写的样式中以 !important 标记的声明
3. 创作人员编写的常规声明。
4. 读者提供的常规声明。
5. 用户代理的默认声明。

创作人员通常只考虑前四点，因为创作人员编写的任何样式都会覆盖用户代理的默认样式。

<br>

## 2. 按特指度排序

如果应用到一个元素上的声明由冲突，而且各声明的显式权重和来源相同，那么应该按特指度排序，特指度最高的声明胜出。例如：

```css
p#bright {
    color: silver;
}

p {
    color: black;
}
```

对上面的规则来说，段落中的文本将显示为银色，如下图所示。为什么？因为 p#bright 的特指度是 0, 1, 0, 1，而 p 的特指度是 0, 0, 0, 1，虽然后一个规则在样式表中的位置靠后，但是前一个规则的特指度更高。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC3%E7%AB%A0%EF%BC%9A%E7%89%B9%E6%8C%87%E5%BA%A6%E5%92%8C%E5%B1%82%E5%8F%A0/%E7%89%B9%E6%8C%87%E5%BA%A6%E8%BE%83%E9%AB%98%E7%9A%84%E5%A3%B0%E6%98%8E%E8%83%9C%E5%87%BA.png)

<br>

## 3. 按前后位置排序

最后，如果两个规则的显式权重、来源和特指度都相同，那么在样式表中的位置靠后的规则胜出。回过头来看本节开头那个例子，文档的样式表中有下面两个规则：

```css
h1 {
    color: red;
}

h1 {
    color: blue;
}
```

此时，文档中所有 h1 元素的 color 值将取 blue，而不是 red。二者在显式权重和来源上是一样的，而且选择符的特指度也相等，因此靠后的声明胜出。

那么，如果来自不同样式表的规则有冲突了？例如，对下面的样式表来说：

```css
@import url(basic.css);
h1 {
    color: blue;
}
```

如果 h1 { color: red } 在 basic.css 中，情况如何？basic.css 中的全部内容相当于出现于 @import 所在的位置。因此，当前样式表中的规则出现在 @import 导入的样式之后。如果显式权重和特指度相同，当前样式表中的声明胜出。来看下面的规则：

```css
p em {
    color: purple; /* 在导入的样式表中 */
}

p em {
    color: gray; /* 在当前样式表中 */
}
```

此时，第二个规则胜出，因为它是后声明的那个。

就是因为前后位置有影响，所以通常才推荐按照一定的顺序编写链接的样式。链接样式的推荐顺序是 link-visited-focus-hover-active（LVFHA），如下所示：

```css
a:link {
    color: blue;
}

a:visited {
    color: purple;
}

a:focus {
    color: green;
}

a:hover {
    color: red;
}

a:active {
    color: orange;
}
```

读取本章的内容之后我们知道，这些选择符的特指度相等，都是 0, 0, 1, 0。因为它们的显式权重、来源和特指度都一样，所以最后一个匹配的规则将胜出。单击或激活（例如使用键盘）未访问的链接时，匹配其中四个规则，:link、:focus、:hover 和 :active。因此，这四个规则中的最后一个胜出。对 LVFHA 顺序来说，:active 将胜出，这通常正是创作人员想要的。

假设我们忽略推荐的顺序，按照字母顺序排列链接样式的各个伪类，写成这样：

```css
a:active {
    color: orange;
}

a:focus {
    color: green;
}

a:hover {
    color: red;
}

a:link {
    color: blue;
}

a:visited {
    color: purple;
}
```

此时，任何链接都不会匹配 :hover、:focus 或 :active 样式，因为 :link 和 :visited 规则在它们三个后面。链接要么已访问，要么未访问，因此 :link 和 :visited 总是会把其他的规则覆盖掉。

再来看一个创作人员可能会使用的顺序。此时，只有未访问的链接有悬停样式，已访问的链接没有。不过，已访问和未访问的链接都有激活样式：

```css
a:link {
    color: blue;
}

a:hover {
    color: red;
}

a:visited {
    color: purple;
}

a:focus {
    color: green;
}

a:active {
    color: orange;
}
```

这种冲突只发生在所有状态都设定相同的属性之时。如果不同的状态设定不同的属性，那么前后位置就没有关系了。对下面的情况来说，链接样式可以写为任何顺序，不管怎么写都能起作用：

```css
a:link {
    font-weight: bold;
}

a:visited {
    font-style: italic;
}

a:focus {
    color: green;
}

a:hover {
    color: red;
}

a:active {
    background: yellow;
}
```

你可能还发现了，:link 和 :visited 样式的顺序没关系。写成 LVFHA 或 VLFHA 都可以。

把伪类串在一起可以消除这一系列问题。下面几个规则可以写成任何顺序，不会出现谁覆盖谁的情况：

```css
a:link {
    color: blue;
}

a:visited {
    color: purple;
}

a:link:hover {
    color: red;
}

a:visited:hover {
    color: gray;
}
```

这几个规则分别应用于链接的不同状态，因此相互之间不冲突。因此，调换顺序之后对文档的装饰效果没有影响。后两个规则的特指度相同，但这无关紧要。悬停在未访问的链接上时，其样式不受针对悬停在已访问链接上的规则影响。反之亦然。如果加上激活状态，顺序就又变重要了。对下面的规则来说：

```css
a:link {
    color: blue;
}

a:visited {
    color: purple;
}

a:link::hover {
    color: red;
}

a:visited:hover {
    color: gray;
}

a:link:active {
    color: orange;
}

a:visited:active {
    color: silver;
}
```

如果把激活状态的样式移到悬停状态的样式前面，二者都将忽略。这里的原因是特指度有冲突。解决的方法是增加串联的伪类数量，如下所示：

```css
a:link:hover:active {
    color: orange;
}

a:visited:hover:active {
    color: silver;
}
```

这样做增加了选择符的特指度（都变成了 0, 0, 3, 1），但是它们不再冲突了，因为选择的状态是互斥的。一个链接不可能既处于未访问、悬停的激活状态，又处于已访问、悬停的激活状态，因此只有其中一个规则将匹配，并应用对应的样式。

<br>

## 4. CSS 之外的表现提示

文档除了 CSS 之外可能包含表现提示，例如 font 元素。这种表现提示的特指度为 0，而且认为出现在创作人员编写的样式表的开头。表现提示将被创作人员编写的样式或读者提供的样式覆盖，但是不会被用户代理的默认样式覆盖。CSS3 把 CSS 外部的表现提示视作用户代理默认样式表的一部分，而且假定出现在默认样式表的最后（不过，写作本书时，规范没有这么表述）。

































