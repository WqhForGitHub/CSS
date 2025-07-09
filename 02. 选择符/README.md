CSS 的主要优势之一是能轻易为同类型的所有元素应用一组样式。是不是听上去没有想象的那么震撼？那么请这样想想看：编辑一行 CSS 就能改变所有标题的颜色。不喜欢现在使用的蓝色标题？那就修改那行代码，改成紫色、黄色、红褐色，抑或想使用的其他颜色。如此一来，设计师便能集中精力在设计上，而不必为琐事烦扰。下次开会时，如果有人还想要绿色阴影，只需编辑样式，再单击刷新按钮就行了。很酷，只需几秒便能得到的效果，而且每个人都能看得到。

CSS 不能解决所有问题，例如，CSS（至少现在）不能修改 PNG 图像的色彩空间。但是使用 CSS 的确能轻易做些全局性修改。下面先从选择符和结构学起。

# 1. 样式的基本规则

前面说过，CSS 的一个核心优势是可以为文档中某种类型的元素全部应用相同的规则。假如我们想让所有 h2 元素都显示为灰色。以前，我们只能编辑 HTML，在每个 h2 元素中插入 `<font color="gray">...</font>` 标签。就算使用 style 属性，也省不了多少时间，你要为每个 h2 元素设定 style="color: gray;" 属性。这两种方式如下所示：

```html
<h2><font color="gray">This is h2 text</font></h2>
<h2 style="color: gray;">This is h2 text</h2>
```

如果文档中有大量 h2 元素，这将是一个漫长乏味的过程。更糟的是，如果后来决定 h2 元素应该显示成绿色，而不是灰色，就必须重来一次，手动修改所有标签（是的，以前就是这么做的）。

CSS 样式便于修改和编辑，而且能应用到指定的所有文本元素上（下一节说明如何指定）。例如，可以编写如下的规则把所有 h2 元素的颜色设为灰色：

```css
h2 {
    color: gray;
}
```

如果想修改 h2 元素的颜色，比如改为银色，只需修改颜色值：

```css
h2 {
    color: silver;
}
```

<br>

## 1. 元素选择符

元素选择符（element selector）通常是 HTML 元素，但也有例外。例如，在针对 XML 文档的 CSS 文件中，可能有下面这些元素选择符：

```css
quote {
    color: gray;
}

bib {
    color: red;
}

booktitle {
    color: purple;
}

myElement {
    color: red;
}
```

也就是说，文档中的元素是最基本的选择符。在 XML 中，什么都可以作为选择符，因为 XML 允许创建新标记语言，所以什么都可以作为元素名称。然而，为 HTML 文档编写样式时，选择符一般是 HTML 预定义的某个元素，例如 p、h3、em、a，甚至是 html 自身。例如：

```css
html {
    color: black;
}

h1 {
    color: gray;
}

h2 {
    color: silver;
}
```

这个样式表得到的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E6%96%87%E6%A1%A3%E7%9A%84%E7%AE%80%E5%8D%95%E6%A0%B7%E5%BC%8F.png)直接为元素定义全局样式后，可以把样式从一个元素身上移到另一个元素身上。假如我想想让上图中的段落显示为灰色，而不是 h1 元素，没问题，只需把 h1 选择符改为 p:

```css
html {
    color: black;
}

p {
    color: gray;
}

h2 {
    color: silver;
}
```

得到的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E6%8A%8A%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%BA%94%E7%94%A8%E5%88%B0%E5%8F%A6%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%E4%B8%8A.png)

<br>

## 2. 声明和关键字

声明块中有一个或多个声明。声明的格式是固定的，先是属性，然后是冒号，后面再跟上值和分号。冒号和分号后面可以有零个或多个空白。值几乎都是一个关键字或以空格分隔的多个关键字。如果声明中的属性或值有误，整个规则都将被忽略。因此，下面两个声明是无效的：

```css
brain-size: 2cm; /* 未知属性 "brain-size" */
color: ultraviolet; /* 未知值 "ultraviolet" */
```

如果属性的值可以是多个关键字，关键字之间通常以空格分隔，有时则使用斜线（/）或逗号。不是每一个属性都接受多个关键字，不过很多属性（例如 font 属性）都是如此。假如想让段落中的文本使用 Helvetica 字体，并把字号设为中等，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E5%B1%9E%E6%80%A7%E5%80%BC%E5%90%AB%E5%A4%9A%E4%B8%AA%E5%85%B3%E9%94%AE%E5%AD%97%E7%9A%84%E7%BB%93%E6%9E%9C.png)

那么规则可以写成下面这样：

```css
p {
    font: medium Helvetica;
}
```

注意，medium 和 Helvetica 两个关键字（前者设定字号，后者设定字体）之间有个空格。有了空格，用户代理才能把关键字区分开，然后分别应用。分号表示声明结束。

这些以空格分开的词称为关键字，因为它们在一起构成一个属性的值。例如，对下述虚构的规则来说：

```css
rainbow: red orange yellow green blue indigo violet;
```

我们知道没有 rainbow 属性，这里只是以此为例。rainbow 的值是 red orange yellow green blue indigo violet，这七个关键字在一起构成一个完整而唯一的值。我们还可以像下面这样定义 rainbow 的值：

```css
rainbow: infrared red orange yellow green blue indigo violet ultraviolet;
```

rainbow 的新值现在有九个关键字，而不再是七个。这两个值看起来差不多，但二者是完全不同的。这看起来有点抽象，但是对于理解特指度和层叠的细节（参见本书后文）是至关重要的。

可以看出，CSS 关键字通常以空格分隔。在 CSS2.1 中，有个特例：font 属性的值有一处要使用斜线（/）把两个关键字分隔开。下面举个例子：

```css
h2 {
    font: large/150% sans-serif;
}
```

这个斜线把设定元素字号和行号的两个关键字分开。font 声明只有这一个地方允许出现斜线，其他关键字都以空格分隔。

除此之外，其他一些属性的值中也可以使用斜线，比如说（不完整）：

* background
* border-image
* border-radius
* grid
* grid-area
* grid-column
* grid-row
* grid-template
* mask-border

还有一些关键字以逗号分隔。声明多个背景图像、过渡属性和阴影时，相互之间以逗号分隔。此外，函数的参数，例如线性渐变和变形函数，以逗号分隔，如下例所示：

```css
.box {
    box-shadow: inset -1px -1px white, 3px 3px 3px rgba(0, 0, 0, 0.2);
    background-image: url(myimage.png), linear-gradient(180deg, #FFF 0%, #000 100%);
    transform: translate(100px, 200px);
}

a:hover {
    transition: color, background-color 200ms ease-in 50ms;
}
```

以上是简单声明的基本知识，不过声明可以变得十分复杂。下一节开始展现 CSS 的强大功能。

<br>

# 2. 群组

目前，我们学习了如何把一个样式应用到一个选择符上，这是相当简单的技术。如果想把同一个样式应用到多个元素上该怎么做？此时，可以使用多个选择符，或者把多个样式应用到一个元素或一组元素上。

## 1. 群组选择符

假如想让 h2 元素和段落中的文本都显示为灰色，最简单的方法是使用下述声明：

```css
h2, p {
    color: gray;
}
```

规则的左边是 h2 和 p 选择符，之间以逗号分隔。右边的规则（color: gray）应用到前面两个选择符引用的元素上。逗号告诉浏览器，这个规则涉及两个不同的选择符。如果没有逗号，规则的含义完全不同，详情参见 2.5.2 节。

可以放在一起的选择符数量没有限制。例如，如果想让很多元素显示为灰色，可以使用类似下面的规则：

```css
body, table, th, ed, h1, h2, h3, h4, p, pre, strong, em, b, i {
    color: gray;
}
```

群组可以在很大程序上压缩同类样式，这样得到的样式表更短。下面两种写法得到的结果完全一样，但是哪一种写起来更轻松一目了然：

```css
h1 {
    color: purple;
}

h2 {
    color: purple;
}

h3 {
    color: purple;
}

h4 {
    color: purple;
}

h5 {
    color: purple;
}

h6 {
    color: purple;
}

h1, h2, h3, h4, h5, h6 {
    color: purple;
}
```

群组有不同的分发。例如，下面几个群组规则是等效的，只是选择符和声明的分组方式不同：

```css
/* 分组 1 */
h1 {
    color: silver;
    background: white;
}

h2 {
    color: silver;
    background: gray;
}

h3 {
    color: white;
    background: gray;
}

h4 {
    color: silver;
    background: white;
}

b {
    color: gray;
    background: white;
}

/* 分组 2 */
h1, h2, h4 {
    color: silver;
}

h2, h3 {
    background: gray;
}

h1, h4, b {
    background: white;
}

h3 {
    color: white;
}

b {
    color: gray;
}

/* 分组 3 */
h1, h4 {
    color: silver;
    background: white;
}

h2 {
    color: silver;
}

h3 {
    color: white;
}

h2, h3 {
    background: gray;
}

b {
    color: gray;
    background: white;
}
```

这几种分组方式得到的结果是一样的，如下图所示（这些样式用到了群组声明，详情参见 2.2.2 节）。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E4%B8%8D%E5%90%8C%E5%88%86%E7%BB%84%E6%96%B9%E5%BC%8F%E5%BE%97%E5%88%B0%E7%9A%84%E4%B8%80%E8%87%B4%E7%BB%93%E6%9E%9C.png)<br>

### 通用选择符

CSS2 引入了一个新的选择符，名为通用选择符（universal selector），写作星号（*）。这个选择符匹配所有元素，很像是通配符。假如想让文档中的每个元素都显示为红色，可以这样写：

```css
* {
    color: red;
}
```

这个声明与列出文档中每一个元素的群组选择符是等效的。借助通用选择符，只需敲一次按键就能把每个元素的颜色都设为红色。然而要注意，通用选择符虽然便利，但是它的特指度是 0-0-0。而且由于目标是一切元素，可能出现一些意想不到的后果（本书后文讨论）。

<br>

## 2. 群组声明

一个规则可以有多个选择符，同理，也可以有多个声明。如果想让所有 h1 元素的颜色为紫色，字体为 Helvetica，字号为 18 像素，且背景为浅绿色（不介意伤害读者的眼睛），可以像下面这样编写样式：

```css
h1 {
    font: 18px Helvetica;
}

h1 {
    color: purple;
}

h1 {
    background: aqua;
}
```

但是这样做效率低，试想一下有 10 或 15 个样式都要这样写该有多麻烦。其实，我们可以把声明写在一起：

```css
h1 {
    font: 18px Helvetica;
    color: purple;
    background: aqua;
}
```

这与前面分开写的三行效果完全一样。

注意，多个声明写在一起时，千万别忘了结尾的分号。浏览器会忽略样式表中的空白，因此必须保证句法正确，用户代理才能有解析样式表。无需顾虑，样式可以写成下面这样：

```css
h1 {
    font: 18px Helvetica;
    color: purple;
    background: aqua;
}
```

此外，还可以简化 CSS，去掉所有不必须的空格：

```css
h1 {font: 18px Helvetica;color: purple;background: aqua;}
```

对服务器来说，除了空白使用上的不同 ，前面三个样式的作用是一样的，不过第二个样式对人类来说的可读性是最高的，也是开发过程中建议采用的方式（为了提升网络性能，可以选择简化 CSS，不过这通常由服务器脚本、缓存网络或其他服务处理）。如果第二个声明结尾没有分号，用户代理将把样式表解释为：

```css
h1 {
    font: 18px Helvetica;
    color: purple background: aqua;
}
```

因为 background: 不是 color 的有效值，而且 color 的值只能是一个关键字，所以用户代理将忽略整个 color 声明（包括 background: aqua 部分）。别以为浏览器会把 h1 渲染成紫色，但没浅绿色背景。最终得到的是默认颜色（通常为黑色），背景为透明（这也是默认值）。font: 18px Helvetica 声明将起作用，因为它的结尾有分号。

>严格来说，一个规则中的最后一个声明的结尾可以不带分号，但一般建议带上。首先，这样做能让你养成带分号的习惯，毕竟缺少分号是导致渲染错误最常见的根源。其次，如果想在后面加一个声明，不同担心忘记补上分号。最后，如果使用 Sass 这样的预处理器，所有声明通常都要求在结尾上加上分号。为了避免种种问题，编写规则时一定要加上分号。

与群组选择符一样，把声明写在一起也有助于保持样式表短小、意图明确，而且易于维护。

<br>

## 3. 二者结合

我们知道，选择符和声明都可以写在一起。二者结合，只需几个声明便能定义十分复杂的样式。试想，如果想为所有标题赋予一些复杂的样式，而且想让全部标题都使用相同的样式，该怎么做？可以这样做：

```css
h1, h2, h3, h4, h5, h6 {
    color: gray;
    background: white;
    padding: 0.5em;
    border: 1px solid black;
    font-family: Charcoal, sans-serif;
}
```

这里，我们使用的是群组选择符，因此规则右侧的样式将应用于列出的所有标题。此外，声明也是多个写在一起的，所以列出的样式将应用于左侧的所有选择符上。这个规则得到的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E5%90%8C%E6%97%B6%E4%BD%BF%E7%94%A8%E7%BE%A4%E7%BB%84%E9%80%89%E6%8B%A9%E7%AC%A6%E5%92%8C%E7%BE%A4%E7%BB%84%E5%A3%B0%E6%98%8E.png)

这样写比下面一长串好得多。如果分开写，开头可能是这样的：

```css
h1 {
    color: gray;
}

h2 {
    color: gray;
}

h3 {
    color: gray;
}

h4 {
    color: gray;
}

h5 {
    color: gray;
}

h6 {
    color: gray;
}

h1 {
    background: white;
}

h2 {
    background: white;
}

h3 {
    background: white;
}
```

而且要持续很多行。你可以选择编写这一长串样式，但是不建议这么做，否则跟直接使用 style 属性没多大差别。

选择符中除了同类元素之外，还可以有其他元素。为了得到更好的效果，要付出一点精力，但这么做是值得的。

<br>

## 4. 在旧浏览器中使用新元素

HTML（例如 HTML5 规范）在更新的过程中加入了一些新元素。有些浏览器在这些新元素出现之前就已经存在，因此可能无法识别新元素。例如，在 Internet Explorer 9 之前版本中无法选择不支持的元素。解决方法是在 DOM 中创建元素，让浏览器知道元素的存在。

例如，Internet Explorer 8 不识别 `<main>` 元素。使用下述 JavaScript 可以让 Internet Explorer 8 知道 main 的存在：

```javascript
document.createElement("main");
```

运行这段代码后，旧版 Internet Explorer 将认识到元素的存在，从而允许选择并为之赋予样式。

<br>

# 3. 类选择符和 ID 选择符

目前，我们以不同的方式组合了选择符和声明，不过我们使用的选择符十分简单，只是引用文档中的元素。从某种意义上讲，元素选择符很不错，但是有时我们想指代得更明确一些。

除了直接使用文档中得元素之外，还可以使用类选择符和 ID 选择符，这样便能以一种独立于元素的方式赋予样式。这两种选择符可以独立使用，也可以和元素选择符结合在一起使用。然而，这两种选择符要求文档的标记有一定的结构，因此一般要提前构思，做好规划。

假设你在攥写一篇探处理方式的文章，文中有一些提醒，着重指出如何安全处理这个危险物质。你想让这些提醒文字显示为粗体，吸引读者注意。然而，你不知道哪些地方会出现提醒。有些提醒可能是整段文字，还有些是一个长列表中的一个项目或一段文字中的一部分。因此，无法使用元素选择符定义这样的规则。如果这样编写样式：

```css
p {
    font-weight: bold;
    color: red;
}
```

那所有段落都将变成红色粗体字，而不只是那些包含提醒的段落。你需要一种只选择提醒文字的方式，或者更准确地说，一种只选择提醒元素的方式。那么，该怎么做？你需要的是类选择符，借助它为文档中已经通过某种方式的部分赋予样式，而不考虑具体涉及哪些元素。

## 1. 类选择符

应用样式而不关心所涉及的元素，最常使用类选择符。然后，在使用之前，要修改文档的标记，让类选择符起作用。修改方式是设定 class 属性：

为了把类选择符定义的样式应用到元素上，必须为 class 属性赋予适当的值。在前面的示例中，我们把两个元素的 class 属性设为 warning：第一个段落和第二段中的 span 元素。

现在我们要找到一种方法设定了 class 属性的元素赋予样式。在 CSS 中，选择类的句法是在 class 属性的值前面加上点号（.）。除了单独选择类之外，还可以结合元素选择符。

```css
.warning {
    font-weight: bold;
}
```

这个简单的规则应用到前面的标记上得到的结果如下图所示。即，font-weight: bold 声明将应用到 class 属性的值为 warning 的每个元素上（因为这里蕴含着通用选择符）。

>使用 ID 选择符、类选择符、属性选择符、伪类选择符或伪元素选择符时，如果没有依附元素选择符，隐式蕴含通用选择符（使用 * 符号表示）。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E4%BD%BF%E7%94%A8%E7%B1%BB%E9%80%89%E6%8B%A9%E7%AC%A6.png)可以看出，类选择符直接引用元素的 class 属性值，而且前面始终有个点号（.），表明这是类选择符。这个点号把类选择符与可能一起使用的其他选择符（例如元素选择符)分开。例如，你可能想让整段文字都为提醒时才加粗：

```css
p.warning {
    font-weight: bold;
}
```

这个选择符现在匹配 class 属性的值中包含 warning 的 p 元素，其他任何元素，不管有没有这个类，都不匹配。因为第二段中的 span 元素不是段落，所以与这个规则的选择符不匹配，从而不会显示为粗体。

如果想为那个 span 元素赋予不同的样式，可以使用 span.warning 选择符：

```css
p.warning {
    font-weight: bold;
}

span.warning {
    font-style: italic;
}
```

此时，提供段落显示为粗体，而起提醒作用的 span 元素显示为斜体。每个规则只应用于一个元素和类的组合，相互之间没有影响。

此外，还可以先使用通用的类选择符定义一个样式，然后再结合元素选择符，进一步指明适用的元素，如下所示：

```css
.warning {
    font-style: italic;
}

span.warning {
    font-weight: bold;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E7%BB%93%E5%90%88%E9%80%9A%E7%94%A8%E5%92%8C%E7%89%B9%E6%8C%87%E7%9A%84%E9%80%89%E6%8B%A9%E7%AC%A6%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F.png)

此时，所有提醒文字都将显示为斜体，但只有 class 属性的值为 warning 的 span 元素才会显示为粗斜体。

注意前例中通用类选择符的格式：类名前有个点号，但没有元素名，也没有通用选择符。如果想选择具有相同类名的所有元素，可以放心省略通用选择符。

<br>

## 2. 多个类

前一节中的 class 属性只有一个词。根据 HTML 规范，class 属性的值可以是多个词，词之间适用空格分隔。比如你想把某个元素标记为特别重要的提醒，可以这么写：

```html
<p class="urgent warning">When handling plutonium, care nust be taken to avoid the formaition of a critical mass.</p>
<p>With plutonium, <span class="warning">the possibility of implosion is very real, and must be avoided al all costs.</span>. This can be acccomplished by keeping the varipus masses separate.</p>
```

词的顺序无关紧要，写成 warning urgent 也行，结果是完全一样的。

假如你想让 class 属性的值为 warning 的元素显示为粗体，值为 urgent 的元素显示为斜体，而同时拥有二者的元素具有银色背景，样式可以这样写：

```css
.warning {
    font-weight: bold;
}

.urgent {
    font-style: italic;
}

.warning.urgent {
    background: silver;
}
```

把两个类选择符串在一起，选择的是同时具有两个类名的元素，而且对类名的顺序没有要求。可以看出，HTML 源码中写的是 class="urgent warning"，而 CSS 选择符写的是 .warning.urgent。尽管如此，When handling plutonium... 那一段将具有银色背景，如下图所示。这是因为顺序无关紧要（并不是说类的顺序在任何情况下都不重要，本书后文会进一步探讨这个问题）。

如果多个串联的类选择符包含 class 属性中没有的词，将无法匹配。试看下面这个规则：

```css
p.warning.help {
    background: red;
}
```

不出所料，这个选择符匹配的是 class 属性中同时包含 warning 和 help 的 p 元素。因此，无法匹配 class 属性中只有 waning 或 urgent 的 p 属性。然而，却能匹配下述元素：

```html
<p class="urgent warning help">Help me!</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E7%B1%BB%E5%90%8D%E9%80%89%E6%8B%A9%E5%85%83%E7%B4%A0.png)

<br>

## 3. ID 选择符

ID 选择符在某些方面类似于类选择符，不过二者之间有些重要区别。首先，ID 选择符的开头不是点号，而是个散列字元（#），也叫井号、哈希符号、哈希记号或三连棋棋盘。因此，你可能见过类似下面的规则：

```css
*#first-para {
    font-weight: bold;
}
```

这个规则把 id 属性的值为 first-para 的元素中的文本设为粗体。

第二个区别是，ID 选择符引用的不是 class 属性的值，而是 id 属性的值（显而易见）。下面举个例子：

```css
*#lead-para {
    font-weight: bold;
}
```

```html
<p id=" lead-para ">This paragraph will be boldfaced.</p>
<p>This paragraph will NOT be bold.</p>
```

注意，文档中任何元素的 id 属性的值都有可能是 lead-para。这里，我们把第一段的 id 设为 lead-para，不过也可以在第二段或第三段，又或一个无序列表等元素上这么做。

与类选择符一样，ID 选择符中的通用选择符也可以省略。前面的示例还可以写成这样：

```css
#lead-para {
    font-weight: bold;
}
```

这样写与之前的效果一样。

ID 选择符还有一个地方与类选择符相似：ID 选择符不关心所用的元素。有时，你可能知道文档中有某个 ID 值，但是不知道它在哪个元素上（就像处理提醒那个例子一样）。此时，可以直接使用 ID 选择符。例如，你可能知道文档中有个元素的 ID 属性值为 mostImportant，但是你不知道它在段落上、短语上、列表项目上，还是某一节的标题上。你唯一知道的是，每个文档中都有这么一个 ID，依附的元素不定，而且出现的次数不会超过一个。针对这种情况，你可以编写这样的规则：

```css
#mostImportant {
    color: red;
    background: yellow;
}
```

这个规则将匹配下述元素中的任何一个（前面说过，这些元素不能同时出现在一个文档中，因为它们的 ID 值是一样的）：

```html
<h1 id="mostImportant">This is important!</h1>
<em id="mostImportant">This is important!</em>
<ul id="mostImportant">This is important!</ul>
```

<br>

## 4. 在类选择符和 ID 选择符之间选择

如前所示，类可以赋予任意个元素，warning 这个类名赋予了 p 元素和 span 元素，此外还可以赋予更多的元素。而 ID 就不同了，在一个 HTML 文档中，一个 ID 能且只能使用一次。因此，如果文档中有个元素的 id 属性值为 lead-para，其他元素的 id 属性就不能再设为这个值。

>实际上，浏览器不一定总会检查 HTML 中的 ID 是不是唯一的。也就是说，如果 HTML 文档中的多个元素具有相同的 ID 属性，相同的样式可能会应用到每个元素上。这是不正确的行为，但却可能发生。文档中出现多个相同的 ID 值还不利于 DOM 脚本编程，因为 getElementById()等函数预期只有一个 ID 属性为指定值的元素。

与类选择符不同，ID 选择符不能串再一起使用，因为 ID 属性的值不能是以空格分隔的列表。

类选择符和 ID 选择符之间的另一个区别是，用户代理判断该把哪个样式应用到元素上时，ID 选择符的权重更高。下一章将详述这个话题。

此外还要注意，类选择符和 ID 选择符可能是区分大小写的，这取决于文档语言。根据 HTML 规范，类和 ID 的值是区分大小写的，因为类选择符和 ID 选择符的大小写必须与文档中的一致。因此，对于下述 CSS 和 HTML 而言，元素中的文本不会显示为粗体：

```css
p.criticalInfo {
    font-weight: bold;
}
```

```html
<p class="criticalinfo">Don't look down.</p>
```

因为字母 i 的大小写不一样，所以上例中的选择符无法匹配元素。

单纯从句法的角度来说，点号加类名的写法（如 .warning）无法保证一定能用于 XML 文档。写作本书时，点号加类名的写法支持 HTML、SVG 和 MathML。此外，还可能支持未来出现的语言，不过这取决于各语言的规范。井号加 ID 的写法（如 #lead）支持任何能确保文档内元素唯一性的文档语言。唯一性可以通过 id 属性确保，也可以通过其它任何方式，只要属性的值在文档中是唯一的即可。

<br>

# 4. 属性选择符

不管是类选择符还是 ID 选择符，我们选择的其实都是属性的值。前两节使用的句法专门针对 HTML、XHTML、SVG 和 MathML 文档（截至写作本书时）。在其他标记语言中，这样编写的类选择符和 ID 选择符可能无法使用（class 和 id 属性或许根本不存在）。为了解决这个问题，CSS2 引入了属性选择符（attribute selector），根据属性及其值选择元素。属性选择符大致可以分为四类：简单属性选择符、精准属性值选择符、部分匹配属性值选择符和起始值属性选择符。

## 1. 简单属性选择符

如果想选择具有某个属性的元素，而不管属性的值是什么，可以使用简单属性选择符。例如，若想选择具有 class 属性（可以包含任何值）的所有 h1 元素，把文本设为银色，可以这样写：

```css
h1[class] {
    color: silver;
}
```

对下面的标记来说：

```html
<h1 class="hoopla">Hello</h1>
<h1>Serenity</h1>
<h1 class="fancy">Fooling</h1>
```

得到的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E6%A0%B9%E6%8D%AE%E5%B1%9E%E6%80%A7%E9%80%89%E6%8B%A9%E5%85%83%E7%B4%A0.png)

<br>

这种选择符在 XML 文档中特别有用，因为 XML 语言中的元素和属性都是根据目的而选用的。假设有个描述太阳系中各行星的 XML 文档（称之为 PlanetML），我们想选择具有 moons 属性的全部 pml-planet 元素，把文本设为粗体，突出显示有卫星的行星，可以这样写：

```css
pml-planet[moons] {
    font-weight: bold;
}
```

对下面的标记片段来说，这个规则会把第二个和第三个元素的文本变成粗体，而第一个元素不受影响：

```xml
<pml-planet>Venus</pml-planet>
<pml-planet moons="1">Earth</pml-planet>
<pml-planet moons="2">Mars</pml-planet>
```

在 HTML 文档中，你可以发挥自己的想象力，充分利用这一功能。例如，你可以为所有具有 alt 属性的图像编写样式，突出显示格式正确的图像：

```css
img[alt] {
    border: 3px solid red;
}
```

（这个示例更多的是出于诊断目的，即判断图像的标记是否正确，在设计层面没有太大的意义。）

如果想把具有 title 属性的元素（在多数浏览器中，当鼠标悬停在这样的元素上时，会显示提示框）加粗显示，可以这么写：

```css
*[title] {
    font-weight: bold;
}
```

类似地，可以为具有 href 属性的元素（a 元素）编写样式，只应用到超链接上，而不应用到锚记上。

此外，还可以基于多个属性选择。为此，要把多个属性选择符串在一起。例如，若想让同时具有 href 和 title 属性的 HTML 超链接显示为粗体，可以这样写：

```css
a[href][title] {
    font-weight: bold;
}
```

对下述标记来说，第一个连接会显示为粗体，而第二个和第三个链接都不会显示为粗体：

```html
<a href="http://www.w3.org/" title="W3C Home">W3C</a><br />
<a href="http://www.webstandards.org">Standards Info</a><br />
<a title="Not a link">dead.letter</a>
```

<br>

## 2. 根据精准的属性值选择

此外，还可以进一步缩小范围，只选择属性为特定值的元素。比如说我们想把指向 Web 服务器上某个文档的超链接显示为粗体，可以这样写：

```css
a[href="http://www.css-discuss.org/about.html"] {
    font-weight: bold;
}
```

这个规则把 href 属性的值为 http://www.css-discuss.org/about.html 的 a 元素显示为粗体。任何变化，即便没有 www. 部分，或者换成安全协议 https，都无法匹配。

可以为任何元素指定任何属性和值的组合。然而，如果属性和值的组合在文档中未出现，那么选择符不匹配任何元素。同样，XML 语言也很适合使用这种方式应用样式。还以前面的 PlanetML 为例。假设你只想选择 moons 属性的值为 1 的 planet 元素，可以这样写：

```css
planet[moons="1"] {
    font-weight: bold;
}
```

对下面的标记片段来说，这个样式将把第二个元素的文本设为粗体，而第一个和第三个元素不受影响：

```xml
<planet>Venus</planet>
<planet moons="1">Earth</planet>
<planet moons="2">Mars</planet>
```

与选择属性时一样，可以把多个属性和值选择符串在一起。例如，若想把 href 属性的值为 http://www.w3.org/，而且 title 属性的值为 W3C Home 的 HTML 超链接显示为两倍字号，可以这样写：

```css
a[href="http://www.w3.org/"][title="W3C Home"] {
    font-size: 200%;
}
```

对下面的标记来说，这个样式将把第一个链接的文本字号加倍，而第二个和第三个链接不受影响：

```html
<a href="http://www.w3.org/" title="W3C Home">W3C</a><br />
<a href="http://www.webstandards.org" title="Web Standard Organization">Standards Info</a><br />
<a href="http://www.example.org/" title="W3C Home">dead.link</a>
```

结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E6%A0%B9%E6%8D%AE%E5%B1%9E%E6%80%A7%E5%8F%8A%E5%85%B6%E5%80%BC%E9%80%89%E6%8B%A9%E5%85%83%E7%B4%A0.png)

再次说明，这个形式要求属性的值与指定的值完全一致。属性的值是由空格分隔的多个词时（例如 HTML 中的 class 属性）要小心，以防匹配出错。对下面的标记片段来说：

```xml
<planet type="barren rocky">Mercury</planet>
```

若想完全匹配属性的值，只能像下面这样写：

```css
planet[type="barren rocky"] {
    font-weight: bold;
}
```

如果写成 planet[type="barren"]，无法匹配标记，因此也就不起作用。对 HTML 中的 class 属性来说也是如此。对下面的标记来说：

```html
<p class="urgent warning">When handling plutonium, care must be taken to avoid the formation of a critical mass.</p>
```

若想使用精确的属性值选择这个元素，要写成：

```css
p[class="urgent warning"] {
    font-weight: bold;
}
```

这与前文所述的点号加类名写法不同，详情参见下一节。上述规则选择的是 class 属性的值与 "urgent warning" 完全一样的 p 元素，两个词的顺序一模一样，而且中间有个空格。这其实是精确匹配字符串。

此外要知道，ID 选择符与引用 id 属性的属性选择符不完全等效。也就是说，h1#page-title 和 h1[id="page-title"] 之间有些微妙而不容忽视的区别。详情参见 3.1 节。

<br>

## 3. 根据部分属性值选择

有时，我们想根据属性值的一部分选择元素，而不是完整的值。CSS 为这种情况提供了多种选择，以不同的方式匹配属性值的子串。这些方式的概述见下表。

| 形式          | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| [foo\|="bar"] | 选择的元素有 foo 属性，且其值以 bar 和一个英文破折号（U+002D）开头，或者值就是 bar 本身 |
| [foo~="bar"]  | 选择的元素有 foo 属性，且其值是包含 bar 这个词的一组词       |
| [foo*="bar"]  | 选择的元素有 foo 属性，且其值包含字串 bar                    |
| [foo^="bar"]  | 选择的元素有 foo 属性，且其值以 bar 开头                     |
| [foo$="bar"]  | 选择的元素有 foo 属性，且其值以 bar 结尾                     |

<br>

### 一种特别的属性选择符

这些属性选择符中的第一个匹配属性值的一部分，描述起来困难，举个例子就明白了。以下述规则为例：

```css
*[lang|="en"] {
    color: white;
}
```

这个规则选择 lang 属性的值为 en 或者以 en- 开头的元素。因此，对下述示例标记来说，前三个元素会被选中，而后两个不会：

```html
<h1 lang="en">Hello!</h1>
<p lang="en-us">Greetings!</p>
<div lang="en-au">G'day!</div>
<p lang="fr">Bonjour!</p>
<h4 lang="cy-en">Jrooana!</h4>
```

<br>

一般来说，[att|="val"] 形式可用于选择任何属性及其值。假设一个 HTML 文档中有一系列插图，而插图的文件名是 figure-1.gif 和 figure-3.jpg 这样的。使用下述选择符可以匹配所有插图：

```css
img[src|="figure"] {
    border: px solid gray;
}
```

此外，如果你在开发一个 CSS 框架或模式库，没必要提供 "btn btn-small btn-arrow btn-active" 这样冗长的类，可以声明 "btn-small-arrow-active" ，然后使用下述规则选择具有这个类的元素：

```css
*[class|="btn"] {
    border-radius: 5px;
}
```

```html
<button class="btn-small-arrow-active">Click Me</button>
```

这种属性选择符最常用于匹配语言名。详情参见 2.6.6 节。

<br>

### 匹配以空格分隔的一组词中的一个

对值可以为一组以空格分隔的属性来说，可以根据其中有没有某个词来选择元素。HTML 中的 class 属性就是这样，它的值可以是一个或多个词。还以前面的处理文档为例：

```html
<p class="urgent warning">When handling plutonium, care must be taken to avoid the formation of a critical mass.</p>
```

若想选择 class 属性的值包含 warning 的元素，可以使用下述属性选择符：

```css
p[class~="warning"] {
    font-weight: bold;
}
```

注意，选择符中有个波浪号（~）。根据一组以空格分隔的词中是否有某个词选择时，不能忘了这个符号。如果没有波浪号，就变成前一节讨论的精确值匹配属性选择符了。

这个选择符的作用与 2.3.4 节讨论的点号加类名写法一样。也就是说，对 HTML 文档来说，p.warning 和 p[class~="warning"] 是等效的。下面是与前面的 PlanetML 标记等效的 HTML 版本：

```html
<span class="barren rocky">Mercury</span>
<span class="cloudy barren">Venus</span>
<span class="life-bearing cloudy">Earth</span>
```

若想倾斜 class 属性中包含 barren 这个词的所有元素，可以这样写：

```css
span[class~="barren"] {
    font-style: italic;
}
```

这个规则的选择符匹配示例标记中的前两个元素，把它们的文本显示为斜体，如下图所示。这与 span.barren { font-style: italic; } 得到的结果一样。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E6%A0%B9%E6%8D%AE%E9%83%A8%E5%88%86%E5%B1%9E%E6%80%A7%E5%80%BC%E9%80%89%E6%8B%A9%E5%85%83%E7%B4%A0.png)

<br>

那么为什么还要有这样一种属性选择符？因为除了 class 属性之外还可以根据其他属性选择。例如，一个文档中可能有多个图像，但只有部分是插图。此时，可以在 title 属性上使用匹配部分值的选择符，只选择插图：

```css
img[title~="Figure"] {
    border: 1px solid gray;
}
```

这个规则的选择符选择 title 属性的值中包含 Figure 这个词的图像。因此。只要插图的 title 属性是 "Figure 4. A bald-headed elder statesman" 这样的文本，就能被这个规则匹配。其实，img[title~="Figure"] 选择符也会匹配 title 属性的值为 "How to Figure Out Who's in Charge" 的图像。但是，没有 title 属性的图像，或者 title 属性的值中没有 "Figure" 这个词的图像不匹配。

<br>

### 匹配属性值的子串

有时，我们想根据部分属性值选择元素，但是属性的值不是以空格分隔的一组词。此时，可以使用 [att*="val"] 形式匹配出现在属性值内部任何位置的子串。例如，下述 CSS 匹配 class 属性的值中包含子串 cloud 的 span 元素，所以 class 属性的值中有 "cloudy" 的那两个元素都匹配，如下图所示。

```css
span[class*="cloud"] {
    font-style: italic;
}
```

```html
<span class="barren rocky">Mercury</span>
<span class="cloudy barren">Venus</span>
<span class="life-bearing cloudy">Earth</span>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E6%A0%B9%E6%8D%AE%E5%B1%9E%E6%80%A7%E5%80%BC%E4%B8%AD%E7%9A%84%E5%AD%90%E4%B8%B2%E9%80%89%E6%8B%A9%E5%85%83%E7%B4%A0.png)

<br>可以想象，这种选择符有很大用处。假设你想特别显示指向 O'Reilly 网站的链接。此时无需为每个这样的链接设定 class 属性，然后再使用类选择符编写样式，而是可以像下面这样编写规则：

```css
a[href*="oreilly.com"] {
    font-weight: bold;
}
```

这种选择符并不局限于 class 和 href 属性，任何属性都可以，例如 title、alt、src、id 只要属性有值。就可以根据值的子串应用样式。下述规则突出显示源 URL 中包含 "space" 这个字符串的图像：

```css
img[src*="space"] {
    border: 5px solid red;
}
```

<br>类似地，下述规则则突出显示能向用户说明如何操作的 input 元素，以及 title 属性中包含子串 format 的 input 元素：

```css
input[title*="format"] {
    background-color: #dedede;
}
```

```html
<input type="tel" title="Telephone number should be formatted as XXX-XXX-XXXX" pattern="\d{3}\-\d{3}\-\d{4}">
```

模式类的类名经常用于子串属性选择符匹配一系列类。以前面举过的按钮标记为例，我们可以选择类名以 btn 和一个英文破折号开头的元素，以及包含一个英文破折号后跟子串 arrow 的元素：

```css
*[class|="btn"][class*="-arrow"]:after {
    content: "";
}
```

```html
<button class="btn-small-arrow-active">Click Me</button>
```

这种选择符做的是精准匹配，如果选择符中有空白，属性的值中也要有。如果底层文档语言区分大小写，属性的名称和值也要区分大小写。类名、标题、URL 和 ID 的值都区分大小写，但是 HTML 属性值中的关键字，例如输入框的类型，不区分大小写：

```css
input[type="CHeckBoX"] {
    margin-right: 10px;
}
```

```html
<input type="checkbox" name="rightmargin" value="10px">
```

<br>

### 匹配属性值开头的子串

如果想根据属性值开头的子串选择元素，你需要的是 [att^="val"] 形式的属性选择符。如果想以不同方式显示不同类型的链接，就可以使用这种选择符，如下图所示。

```css
a[href^="https:"] {
    font-weight: bold;
}

a[href^="mailto:"] {
    font-style: italic;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E6%A0%B9%E6%8D%AE%E5%B1%9E%E6%80%A7%E5%80%BC%E5%BC%80%E5%A4%B4%E7%9A%84%E5%AD%90%E4%B8%B2%E9%80%89%E6%8B%A9%E5%85%83%E7%B4%A0.png)

<br>

此外，也可以用这种选择符装饰文章中用作插图的图像（例如你在本书中看到的那些）。

假设插图的 alt 属性值都是 Figure 5 这种形式（这一假设完全是合理的），那么就可以像下面这样只选择这些图像：

```css
img[alt^="Figute"] {
    border: 2px solid gray;
    display: block;
    margin: 2em auto;
}
```

这样做的潜在缺点是，alt 属性的值以 Figure 开头的任何 img 元素都会选中，而不管到底是不是插图。这种情况会不会发生，取决于文档。

另外，还可以使用这种选择符选择日程表中排在周一做的事。假设所有事件都有 title 属性，而且其值的格式是 Monday, March 5th, 2012。那么，我们便可以使用 [title^="Monday"] 选择这些事件。

<br>

### 匹配属性值结尾的子串

与匹配开头的子串相对的是匹配结尾的子串，这种选择符的形式为 [att$="val"]。我们经常使用这种选择符根据目标资源的类型装饰链接，例如以独特的方式装饰 PDF 文档，如下图所示。

```css
a[href$=".pdf"] {
    font-weight: bold;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E6%A0%B9%E6%8D%AE%E5%B1%9E%E6%80%A7%E5%80%BC%E7%BB%93%E5%B0%BE%E7%9A%84%E5%AD%90%E4%B8%B2%E9%80%89%E6%8B%A9%E5%85%83%E7%B4%A0.png)

<br>

类似地，还可以根据图像的格式选择图像（肯定事出有因）：

```css
img[src$=".gif"] {}
img[src$=".jpg"] {}
img[src$=".png"] {}
```

对前一节的日程表示例来说，我们使用类似 [title$="2015"] 的选择符选择某一年内发生的事件。

>你可能注意到了，属性选择符中的属性值都放在引号内。如果属性值包含特殊字符、以英文破折号或数字开头，或者是其他无效的标识符，那就必须放在引号内。尽管使用引号是为了把无效的标识符变成有效的值，但是为了安全起见，建议始终把属性选择符中的属性值放在引号内。

<br>

## 4. 不区分大小写的标识符

CSS Selectors Level 4 为属性选择符引入了一个不区分大小写的选项。在结束方括号前加上 i，属性选择符便不管文档语言的要求，匹配属性值时不区分大小写。

假设你想选择所有指向 PDF 文档的链接，但是不知道 URL 是以 .pdf、.PDF 还是 .Pdf 结尾的，此时可以这样写：

```css
a[href$=".PDF" i]
```

加上不起眼的 i 之后，这个选择符便能匹配 href 属性的值以 .pdf 结尾的任何 a 元素，而不管 P、D 和 F 三个字母的大小写。

前文所述的所有属性选择符都可以使用这个不区分大小写的选项。然而要注意，它只针对属性选择符中的值，不涉及属性的名称。因此，在区分大小写的语言中，planet[type*="rock" i] 将匹配下述所有元素：

```xml
<planet type="barren rocky">Mercury</planet>
<planet type="cloudy ROCKY">Venus</planet>
<planet type="life-bearing Rock">Earth</planet>
```

但是不匹配下面这个元素，因为 TYPE 属性与 type 不匹配：

```xml
<planet TYPE="dusty rock">Mars</planet>
```

再次注意，这里说的是元素和属性句法区分大小写的语言。XHTML 就是如此。对不区分大小写的语言，如 HTML5， 这不是问题。

>截至 2017 年年末，Opera Mini、Android 浏览器和 Edge 不支持这个选项。

<br>

# 5. 根据文档结构选择

CSS 功能强大，它通过文档的结构确定使用哪些样式，以及如何应用样式。其实，文档结构在应用样式的过程中起到的作用还有很多。在介绍更强大的选择符之前，先花点儿时间讨论文档结构。

## 1. 理解父子关系

为了弄清选择符和文档的关系，我们要再一次分析文档的结构。以下述十分简单的 HTML 文档为例：

CSS 发挥功能在很大程度上依赖于元素的父子关系。HTML 文档中的元素是一种层次结构（其实，多数结构化文档都是如此），从文档的树状视图可见一斑（见下图）。在这个层级结构中，每个元素都在文档的整体结构中占据一席之地。文档中的元素，要么是另一个元素的父元素，要么是另一个元素的子元素，而且经常二者兼具。

在文档的层级结构中，如果一个元素的位置直接在另一个元素的上方，我们说前者是后者的父元素。例如，在图中，第一个 p 元素是 em 和 strong 元素的父元素，strong 元素是锚记元素（a）的父元素。锚记元素又是另一个 em 元素的父元素。反过来，如果一个元素的位置直接在另一个元素的下方，前者是后者的子元素。因此，上图中的锚记元素是 strong 元素的子元素，strong 元素是 p 元素的子元素，p 元素又是 body 元素的子元素等。

父元素和子元素是祖辈元素和后代元素的特例。二者之间有区别：在树状视图中，如果两个元素所在的层级是连续的，它们之间是父子关系。如果两个元素之间跨两个层级以上，它们之间是祖辈和后代的关系，而不是父子关系（子元素也是后代，父元素也是祖辈）。在上图中，第一个 url 元素是随后两个 li 元素的父元素，此外它还是 li 元素后代（一直延续到嵌套层级最深的那几个 li 元素）的祖辈。

上图中的锚记不仅是 strong 的子元素，还是 p、body 和 html 元素的后代。body 元素是浏览器中默认显示的所有元素的祖辈，而 html 是整个文档的祖辈。鉴于此，HTML 或 XHTML 文档中的 html 元素也称为根元素（root element）。

<br>

## 2. 后代选择符

理解这个结构模型之后，首先得到的好处是定义后代选择符（descendant selector，也叫上下文选择符， contextual selector）。后代选择符定义的规则针对特定的结构。下面举个例子。假设你只想装饰 h1 元素中的 em 元素。你可以为 h1 中的每个 em 元素设定 class 属性，但是这样做跟使用 font 标签一样浪费时间。如果能直接选择 h1 元素中的 em 元素，效率要高得多。

此时，样式规则可以写成这样：

```css
h1 em {
    color: gray;
}
```

这个规则把作为 h1 元素后代的 em 元素中的文本显示为灰色。其他 em 元素，例如段落中的或引文中的，不受这个规则影响。从下图中可以清楚地看出这一点。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E6%A0%B9%E6%8D%AE%E4%B8%8A%E4%B8%8B%E6%96%87%E9%80%89%E6%8B%A9%E5%85%83%E7%B4%A0.png)

在后代选择符中，规则中的选择符由两个或多个空格分隔的选择符构成。选择符之间的空格是一种连结符。如果从右向左读，空格连结符可以理解为在内部是其一部分或者是其后代。因此，h1 em 可以理解为作为 h1 元素后代的 em 元素（从左向右读的话，可以理解为 h1 中的 em 应用后面的样式）。

后代选择符中不只可以使用两个单独的选择符。例如：ol00ol0olll

```css
ul ol ul em {
    color: gray;
}
```

此时，一个无序列表中的有序列表中的无序列表的强调文字将显示为灰色，如下图所示。显然，这针对的是非常具体的结构。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E4%B8%80%E4%B8%AA%E9%9D%9E%E5%B8%B8%E5%85%B7%E4%BD%93%E7%9A%84%E5%90%8E%E4%BB%A3%E9%80%89%E6%8B%A9%E7%AC%A6.png)

后代选择符的功能极其强大，某些绝对无法在 HTML 中实现的效果（至少是不大量使用 font 标签），可以借助后代选择符轻易实现。假设一个文档中有一个侧边栏和一个住区域，侧边栏的背景为蓝色，主区域的背景是白色，而且两个区域中都有一个链接列表。此时不能把所有链接都设为蓝色，否则侧边栏中的链接就看不到了。

这种情况便可以使用后代选择符。我们先把侧边栏元素的 class 属性设为 sidebar，把主区域元素的 class 属性设为 main，然后编写如下的样式：

```css
.sidebar {
    background: blue;
}

main {
    background: white;
}

.sidebar a:link {
    color: white;
}

main a:link {
    color: blue;
}
```

结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E4%BD%BF%E7%94%A8%E5%90%8E%E4%BB%A3%E9%80%89%E6%8B%A9%E7%AC%A6%E4%B8%BA%E7%9B%B8%E5%90%8C%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%85%83%E7%B4%A0%E5%BA%94%E7%94%A8%E4%B8%8D%E5%90%8C%E7%9A%84%E6%A0%B7%E5%BC%8F.png)

>:link 针对尚未访问的链接。详情参见本章后面超链接伪类一节。

再举个例子。假如想把 blockquote 中的 b 元素和常规段落中的 b 元素都显示为灰色，可以这么写：

```css
blockquote b, p b {
    color: gray;
}
```

结果是，段落或引文块中的 b 元素都显示为灰色。

人们经常忽略后代选择符的一点是，两个元素之间的层级间隔可以是无限的。比如说，ul em 选择的是作为 ul 元素后代的任何 em 元素，不管 em 嵌套的有多深。因此，ul em 能选择下述标记中的 em 元素：

```html
<ul>
    <li>List item 1
        <ol>
            <li>List item 1-1</li>
            <li>List item 1-2</li>
            <li>List item 1-3
                <ol>
                    <li>List item 1-3-1</li>
                    <li>List item <em>1-3-2</em></li>
                    <li>List item 1-3-3</li>
                </ol>
            </li>
            <li>List item 1-4</li>
        </ol>
    </li>
</ul>
```

后代选择符一个更容易被人忽视的细节是，它对元素的距离一无所知。也就是说，文档树种两个元素的距离对是否应用规则没有影响。遇到特指度（后文介绍）和相互抵消的规则时这一点很重要。

例如，对下述规则和标记来说（其中有个选择符在 2.6.7 节讨论）：

```css
div:not(.help) span {
    color: gray;
}

div.help span {
    color: red;
}
```

```html
<div class="help">
    <div class="aside">
        This text contains <span>a span element</span> within.
    </div>
</div>
```

第一个样式规则的意思是，class 属性中不包含 help 这个词中的 div 元素中的 span 元素显示为灰色。而第二个样式规则的意思是，class 属性中包含 help 这个词的 div 元素中的 span 元素显示为红色。对上述标记片段来说，两个规则都将应用到 span 元素上。

因为这两个规则的权重相等，而且设为红色的规则在后面，所以 span 元素将应用后者，显示为红色。div class="aside" 离 span 元素的距离比 div class="help" 近，但这无关紧要。再次说明，后代选择符对元素的距离一无所知。两个规则都匹配，但是只有一个颜色起作用，鉴于 CSS 的工作方式，红色胜出（原因参见下一章）。

<br>

## 3. 选择子元素

有时，我们不想选择所有后代元素，而是想缩小范围，只选择一个元素的子元素。比如说，你可能想选择作为 h1 元素的子元素的 strong 元素（而不是层级更深的后代）。为此，要使用子代连结符，即大于号（>）：

```css
h1 > strong {
    color: red;
}
```

这个规则将把第一个 h1 中的 strong 元素显示为红色，第二个则不受影响：

```html
<h1>This is <strong>very</strong> important.</h1>
<h1>This is <em>really <strong>very</strong></em> important.</h1>
```

从右向左，h1 > strong 的意思是，选择的 strong 元素是 h1 元素的直接子代。子代连结符两侧的空格是可选的，因此，h1 > strong、h1 > strong 和 h1>strong 是等效的。你可以根据需要使用或省略空格。

在文档的树状结构中可以清楚地看到，子代选择符选择的是直接连接的元素。下图是文档树的一部分。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E4%B8%80%E4%B8%AA%E6%96%87%E6%A1%A3%E7%89%87%E6%AE%B5.png)

在这个文档树片段中有几个父子关系。例如，a 是 strong 的父元素，而它又是 p 的子元素。匹配这些元素可以使用 p > a 和 a > strong 选择符，但是不能使用 p > strong，因为 strong 是 p 的后代，而非直接子元素。

同一个选择符中还可以同时使用后代选择符和子代选择符。因此，table.summary td > p 选择的 p 元素是 td 元素的子元素，而 td 元素是 class 属性的值中包含 summary 这个词的 table 元素的后代。

<br>

## 4. 选择紧邻同胞元素

假设你想装饰紧跟在一个标题后面的段落，或者为紧跟在一个段落后面的列表设定特殊的外边距。若想选择同一个父元素中紧跟在另一个元素后面的一个元素，要使用紧邻同胞连结符，即一个加号（+）。与子元素连结符类似，加号两侧可以有空格，也可以没有，完全由编写样式的人自行决定。

若想把紧跟在 h1 元素后面的段落的上外边距去掉，这样写：

```css
h1 + p {
    margin-top: 0;
}
```

这个选择符的意思是，选择的 p 元素紧跟在 h1 元素后面，而且二者同属一个父元素。

为了说清这个选择符的工作方式，再次以一个文档树片段为例，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%96%87%E6%A1%A3%E6%A0%91%E7%89%87%E6%AE%B5.png)

在这个片段中，div 元素有两个后代，一个是有序列表，一个是无序列表，而且二者都有三个列表项目。这两个列表是紧邻同胞，每个列表中的列表项目也是紧邻同胞。然而，第一个列表中的列表项目与第二个列表中的列表项目不是紧邻同胞。然而，第一个列表中的列表项目与第二个列表中的项目不是紧邻同胞，因为它们分属不同的父元素（它们最多算是表亲，而 CSS 没有表亲选择符）。

注意，使用一个连结符只能选择紧邻同胞中的第二个元素。因此，对 li + li { font-weight: bold } 来说，只有第二个和第三个项目会显示为粗体，第一个项目不受影响，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E9%80%89%E6%8B%A9%E7%B4%A7%E9%82%BB%E5%90%8C%E8%83%9E.png)

为了正常工作，CSS 要求两个元素的顺序与原始顺序一样。在前面的示例中，ol 元素后面是 ul 元素。因此，可以使用 ol + ul 选择后一个元素，但是不能使用相同的句法选择前一个元素。若想让 ul + ol 成功匹配，有序列表必须紧跟子啊无序列表后面。

注意，两个元素之间的文本不影响紧邻同胞连结符的作用。以下述标记片段为例（文档树与上图一样）：

```html
<div>
    <ol>
        <li>List item 1</li>
        <li>List item 1</li>
        <li>List item 1</li>
    </ol>
    This is some text that is part of the 'div'
    <ul>
        <li>A list item</li>
        <li>Another list item</li>
        <li>Yet another list item</li>
    </ul>
</div>
```

即使两个列表之间有文本，仍然不妨碍使用 ol + ul 匹配第二个列表。这是因为处在中间的文本不算是同胞元素，而是父元素 div 的一部分。如果把那段文本放在 p 元素中，ol + ul 就无法匹配第二个列表。此时，可以写成 ol + p + ul。

如下面的示例所示，紧邻同胞连结符可以与其他连结符搭配使用：

```css
html > body table + ul {
    margin-top: 1.5em;
}
```

这个选择符的意思是，选择的 ul 元素紧跟在身为同胞的 table 元素后面，这个 table 元素是 body 元素的后代，而 body 是 html 的子元素。

与其他连结符一样，紧邻同胞连结符也可以实现复杂的选择符，例如 div#content h1 + div ol。这个选择符的意思是，选择的 ol 元素的 div 元素的后代，div 元素是 h1 的紧邻同胞，而 h1 是 id 属性的值为 content 的 div 元素的后代。

<br>

## 5. 选择后续同胞

Selectors Level 3 引入一个新的同胞连结符号，名为一般同胞连结符。这个连结符使用波浪号（~）表示，选择一个元素后面同属一个父元素的另一个元素。

举个例子。若想让 h2 后面与它同属一个父元素的 ol 元素的文本倾斜，可以编写 h2 ~ ol { font-style: italic; }。两个元素不一定非得是紧邻同胞，不过是的话也能匹配。对下面的标记来说，应用这个规则后得到的结果如下图所示。

```html
<div>
    <h2>Subheadings</h2>
    <p>It is the case that not every heading can be a main heading.  Some headings must be
    subheadings.  Examples include:</p>
    <ol>
        <li>Headings that are less important</li>
        <li>Headings that are subsidiary to more important headlines</li>
        <li>Headings that like to be dominated</li>
    </ol>
    <p>Let’s restate that for the record:
    <ol>
        <li>Headings that are less important</li>
        <li>Headings that are subsidiary to more important headlines</li>
        <li>Headings that like to be dominated</li>
    </ol>
</div>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E9%80%89%E6%8B%A9%E5%90%8E%E7%BB%AD%E5%90%8C%E8%83%9E.png)

可以看出，两个有序列表中的文本都倾斜了。这是因为两个 ol 元素都在 h2 后面，而且同属一个父元素（div 元素）。

<br>

# 6. 伪类选择符

讲到伪类选择符，事情就变得有趣了。利用这种选择符可以为文档中不一定真实存在的结构指定样式，或者为某些元素（甚至文档本身）的特定状态赋予幽灵类。

幽灵类听起来有点古怪，不过这样说却是理解伪类的最好方式。假设你想突出显示一个数据表中相隔的行。为此，你可以为相隔的行设定 class="even" 属性，然后编写 CSS，突出显示具有那个类的行。此外，还可以通过伪类选择符以十分相似的方式实现同样的效果（具体做法参见后文）。

## 1. 拼接伪类

开始之前，先说一下串联。CSS 允许把伪类拼接（串联）在一起。例如，可以把有鼠标悬停其上的未访问链接显示为红色，把有鼠标悬停其上的已访问链接显示为红褐色：

```css
a:link:hover{
    color: red;
}

a:visited:hover {
    color: maroon;
}
```

拼接伪类的顺序其实没什么关系，也可以写成 a:hover:link，它的效果与 `a:link:hover` 一样。此外，还可以分别为其他语言（例如德语）下的未访问链接和已访问链接指定悬停样式：

```css
a:link:hover:lang(de) {
    color: gray;
}

a:visited:hover:lang(de) {
    color: silver;
}
```

留意，别拼接相互排斥的伪类了。例如，链接不可能既已访问又未访问，因此 `a:link:visited` 没有任何意义，匹配不了任何东西。

<br>

## 2. 结构伪类

伪类大多数都是结构上的，即它们指代文档中的标记结构。其中多数依赖标记中的模式，例如选择每隔两个的第三个段落，其他的则用于选择特定的元素类型。所有伪类无一例外都是一个冒号（:）后面跟着一个词，而且可以出现在选择符的任何位置。

深入讨论之前，对伪类要明确一点：伪类始终指代所依附的元素。这听起来有点奇怪，但是有理所当然，不是吗？之所以强调这一点，是因为有几个结构伪类容易让人误以为是描述符，认为指代的是后代元素。

下面笔者举个例子。2003 年，我的第一个孩子出生时，我在网上宣布了这个好消息。有些人对我表示了祝贺，还用 CSS 开起了玩笑，比如 #ericmeyer:first-child 选择符。这个选择符的问题是，它选择的是我，而不是我的女儿，而且我必须是爸妈的第一个孩子才行（碰巧我是）。若想正确选择我的第一个孩子，选择符应该是 #ericmeyer > :first-child。

有人不理解很正常，所以我才在这里提到这个问题。下面几小节还会不断提醒你。你只要记住一点，伪类的效果是把某种幽灵类应用到伪类依附的元素上，这样就够了。

<br>

### 选择根元素

结构伪类的简单由此体现：:root 伪类选择文档的根元素。在 HTML 中，根元素始终是 html。这个选择符的真正用途体现在 XML 语言的样式表中，在不同的 XML 语言中，根元素有所不同。例如，RSS 2.0 的根元素是 rss。有些 XML 语言甚至有多个根元素（当然不是在同一个文档中）。

下面是装饰 HTML 根元素的一个例子，结果如下图所示。

```css
:root {
    border: 10px dotted tray;
}

body {
    border: 10px solid black;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E8%A3%85%E9%A5%B0%E6%A0%B9%E5%85%83%E7%B4%A0.png)

在 HTML 文档中可以直接选择 html 元素，而不使用 :root 伪类。然而这两个选择符的特指度不同，详情参见第 3 章。

<br>

### 选择空元素

使用 :empty 伪类可以选择没有任何子代的元素，甚至连文本节点都没有（包括文本和空白）。CMS 经常生成没有任何内容的空元素，此时便可以使用这个伪类。例如，p:empty { display: none } 能禁止显示空段落。

注意，为了能正确匹配，从解析的角度来看，元素必须真的为空，没有有空白、可见内容或后代元素。对下面几个元素来说，只有第一个和最后一个能被 p:empty 匹配：

```html
<p></p>
<p> </p>
<p> 
</p>
<p><!-- 注释 --></p>
```

第二个和第三个段落不能被 :empty 匹配，因为它们不是空的，而是分别哟一个空格和一个换行符。这两种空白都算文本节点，因此也就不是空的。最后一个段落之所以能匹配，是因为注释不是内容，也不是空白。然而，如果在注释的某一边加上一个空格或一个换行符，p:empty 就无法匹配了。

你可能想使用 *:empty { display: none } 装饰所有空元素，但是这里有一个陷阱，:empty 是能匹配 HTML 文档中的空元素，例如 img 和 input，但是还能匹配里面没有内容的 textarea。就匹配元素的效果而言，img 和 img:empty 其实是一样的（不过二者在特指度上有区别，详情参见下一章）。

```html
<img src="salmon.png" alt="North Pacific Salmon">
<br>
<input type="number" min="-1" max="1" step=".01" />
<textarea></textarea>
```

>截至 2017 年年末，:empty 是唯一一个在匹配时考虑文本节点的 CSS 选择符。Selectors Level 3 中的其他选择符（比如同胞选择符）都只考虑元素，完全忽略文本节点。



































<br>

# 7. 伪元素选择符

**`伪元素 是 CSS 中用于选择元素的特定部分，并允许你设置这些部分的样式，而无需修改 HTML 结构。与伪类不同，伪元素实际上创建了文档中不存在的新的虚拟元素，从而允许你对这些元素进行样式化。`**

<br>

## ::before

**`::before 创建一个伪元素，其将成为匹配选中的元素的第一个子元素。常通过 content 属性来为一个元素添加修饰性内容。此元素默认是行级的`**

```html
<span class="ribbon">Notice where the orange box is.</span>
```

```css
.ribbon {
    background-color: #5bc8f7;
}

.ribbon::before {
    content: "Look at this orange box.";
    background-color: #ffba10;
    border-color: black;
    border-style: dotted;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-10.png)

<br>

## ::after

**`在 CSS 中，::after 会创建一个伪元素，作为所选元素的最后一个子元素。它通常用于为具有 content 属性的元素添加修饰内容。默认情况下，它是行向布局的。`**

```html
<span class="ribbon">看看这段文字后的橙色盒子。</span>
```

```css
.ribbon {
    background-color: #5bc8f7;
}

.ribbon::after {
    content: "这是一个漂亮的橙色盒子。";
    background-color: #ffba10;
    border-color: black;
    border-style: dotted;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-11.png)

<br>

## ::first-line

**`::first-line 在区块容器的第一行应用样式`**

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore.
</p>
```

```css
p::first-line {
    text-transform: uppercase;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-12.png)

<br>

## ::first-letter

**`::first-letter 应用于区块容器第一行的第一个字母，但仅当其前面没有其他内容（例如图像或行内表格）时才有效`**

```html
<p>一些段落，一些段落，一些段落，一些段落。</p>
<p>-特殊标点符号的开头。</p>
<p>_特殊标点符号的开头。</p>
<p>"特殊标点符号的开头。</p>
<p>'特殊标点符号的开头。</p>
<p>*特殊标点符号的开头。</p>
<p>#特殊标点符号的开头。</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>"特殊的汉字标点符号开头。</p>
```

```css
p::first-letter {
    color: red;
    font-size: 150%;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-13.png)

<br>

## ::selection

**`::selection 应用于文档中被用户高亮的部分（比如使用鼠标或其他选择设备选中的部分）`**

```html
This text has special styles when you highlight it.
<p>Also try selecting text in this paragraph.</p>
```

```css
::selection {
    color: gold;
    background-color: red;
}

p::selection {
    color: white;
    background-color: blue;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-14.png)

<br>

## ::placeholder

**`::placeholder 表示 <input> 或 <textarea> 元素中的占位文本`**

```html
<input placeholder="默认不透明度" />
<input placeholder="完全不透明" class="force-opaque" />
```

```css
::placeholder {
    color: green;
}

.force-opaque::placeholder {
    opacity: 1;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-15.png)

<br>

## ::marker

**`::marker 匹配列表的标记框（通常为一个符号或数字）。它作用在任何设置了 display: list-item 的元素或伪元素上，例如 <li> 和 <summary> 元素`**

```html
<ul>
  <li>Peaches</li>
  <li>Apples</li>
  <li>Plums</li>
</ul>
```

```css
ul li::marker {
    color: red;
    font-size: 1.5em;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-16.png)



 









 





​                                              
