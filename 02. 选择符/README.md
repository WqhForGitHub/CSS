CSS 的主要优势之一是能轻易为同类型的所有元素应用一组样式。是不是听上去没有想象的那么震撼？那么请这样想想看：编辑一行 CSS 就能改变所有标题的颜色。不喜欢现在使用的蓝色标题？那就修改那行代码，改成紫色、黄色、红褐色，抑或想使用的其他颜色。如此一来，设计师便能集中精力在设计上，而不必为琐事烦扰。下次开会时，如果有人还想要绿色阴影，只需编辑样式，再单击刷新按钮就行了。很酷，只需几秒便能得到的效果，而且每个人都能看得到。

CSS 不能解决所有问题，例如，CSS（至少现在）不能修改 PNG 图像的色彩空间。但是使用 CSS 的确能轻易做些全局性修改。下面先从选择符和结构学起。

# 1. 样式的基本规则

前面说过，CSS 的一个核心优势是可以为文档中某种类型的元素全部应用相同的规则。假如我们想让所有 h2 元素都显示为灰色。以前，我们只能编辑 HTML，在每个 h2 元素中插入 `<font color="gray">...</font>` 标签。就算使用 style 属性，也省不了多少时间，你要为每个 h2 元素设定 style="color: gray;" 属性。这两种方式如下所示：

```html
<h2><font color="gray">This is h2 text</font></h2>
<h2 style="color: gray;">This is h2 text</h2>
```

如果文档中有大量 h2 元素，这将是一个漫长乏味的过程。更糟的是，如果后来决定 h2 元素应该显示成绿色，而不是灰色，就必须重来一次，手动修改所有标签（是的，以前就是这么做的）。

CSS 样式便于修改和编辑，而且能应用到指定的所有文本元素上（下一节说明如何指）。例如，可以编写如下的规则把所有 h2 元素的颜色设为灰色：

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

### 选择唯一的子代

如果想选择带超链接的图像，可以使用 :only-child 伪类。它选择的元素是另一个元素的唯一子元素。假设你想为作为另一个元素唯一子元素的图像加上边框，可以使用：

```css
img:only-child {
    border: 1px solid black;
}
```

这个规则会应用到符合条件的每一个图像上。因此，如果一个段落中只有一个图像，没有其他子元素，那个图像就会独立于周围的文本被选中。如果想选择作为超链接唯一子代的图像，只需把选择符改为（结果见下图）。

```css
a[href] img:only-child {
    border: 2px solid black;
}
```

```html
<a href="http://w3.org/"><img src="w3.png" alt="W3C"></a>
<a href="http://w3.org/"><img src="w3.png" alt="">The W3C</a>
<a href="http://w3.org/"><img src="w3.png" alt=""><em>The W3C</em></a>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E9%80%89%E6%8B%A9%E4%BD%9C%E4%B8%BA%E9%93%BE%E6%8E%A5%E5%94%AF%E4%B8%80%E5%AD%90%E4%BB%A3%E7%9A%84%E5%9B%BE%E5%83%8F.png)

<br>关于 :only-child 伪类，有两点要注意。首先，前文说过，它始终依附在希望是唯一子元素的那个元素上，而不是父元素。由此引出第二点，即在后代选择符上使用 :only-child 伪类时，列出的元素不一定是父子关系。

对前面超链接中的图像示例来说，a[href] img:only-child 匹配的图像是唯一的子元素，而且是 a 元素的后代，而不是 a 元素的子元素。匹配时，那个元素必须是其直接父元素的唯一子元素，而且是链接的后代，但是图像的父元素自身也可以是链接的后代。因此，下面三个图像都能匹配，如下图所示。

```css
a[href] img:only-child {
    border: 5px solid black;
}
```

```html
<a href="http://w3.org/"><img src="w3.png" alt="W3C"></a>
<a href="http://w3.org/"><span><img src="w3.png" alt="W3C"></span></a>
<a href="http://w3.org/">A link to <span>the <img src="w3.png" alt="W3C">web</span> site</a>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E9%80%89%E6%8B%A9%E9%93%BE%E6%8E%A5%E4%B8%AD%E4%BD%9C%E4%B8%BA%E5%94%AF%E4%B8%80%E5%AD%90%E4%BB%A3%E7%9A%84%E5%9B%BE%E5%83%8F.png)

在三个链接中，图像都是其父元素的唯一子元素，而且都是 a 元素的后代。因此，示例中的规则能匹配全部三个图像。如果想限制规则，只让它匹配作为 a 元素唯一子代的图像，要加上子元素连结符，改成 a[href] > img:only-child。这样修改之后，上图中的三个图像，只有第一个图像能匹配。

<br>好了，如果想选择超链接中唯一的图像，而链接中还有其他内容该怎么办？比如说下面这个链接：

```html
<a href="http://w3.org/"><b>•</b><img src="w3.png" alt="W3C"></a>
```

这里，a 元素有两个子代：b 和 img。那个图像不再是父元素（超链接）的唯一子元素，因此无法使用 :only-child 匹配。然而，却能被 :only-of-type 匹配。下述规则和标记的结果如下图所示。

```css
a[href] img:only-of-type {
    border: 5px solid black;
}
```

```html
<a href="http://w3.org/"><b>•</b><img src="w3.png" alt="W3C"></a>
<a href="http://w3.org/"><span><b>•</b><img src="w3.png" alt="W3C"></span></a>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E9%80%89%E6%8B%A9%E5%90%8C%E8%83%9E%E5%85%83%E7%B4%A0%E4%B8%AD%E5%94%AF%E4%B8%80%E7%9A%84%E5%9B%BE%E5%83%8F.png)

这两个伪类之间的区别是，:only-of-type 匹配同胞中唯一的那种元素，而 :only-child 只匹配完全没有同胞的元素。

使用 :only-of-type 可以放心选择段落中的图像，而不必担心段落中有超链接或其他行内元素：

```css
p > img:only-of-type {
    float: right;
    margin: 20px;
}
```

只要同一个段落中的图像不超过两个，那个图像就会浮动显示。使用这个伪类还可以为一节中唯一的 h2 添加额外的样式，例如：

```css
section > h2 {
    margin: 1em 0 0.33em;
    font-size: 1.8rem;
    border-bottom: 1px solid gray;
}

section > h2:only-of-type {
    font-size: 2.4rem;
}
```

对上述示例来说，section 中只有一个 h2 子元素时，h2 将显示的比通常大一些。如果一个 section 中有两个或多个 h2 子元素，它们的大小将相等。有没有其他元素，例如其他级别的标题、段落、表格、列表等，对匹配效果没有影响。

还有一点要澄清：:only-of-type 指代的是元素，而不是其他任何东西。以下述规则和标记为例：

```css
p.unique:only-of-type {
    color: red;
}
```

```html
<div>
    <p class="unique">This paragraph has a 'unique' class.</p>
    <p>This paragraph doesn't have a class at all.</p>
</div>
```

这里，两个段落都不会被选中。为什么？因为两个段落都是 div 的后代，因此不可能是唯一一个段落类型。

这里出现的类型无关紧要。不要误以为类型是一种泛称，对 :only-of-type 来说，类型特指元素类型，因此，p.unique:only-of-type 的意思是，选择的 p 元素的 class 属性中包含 unique 这个词，而且 p 元素是同胞中唯一的一个，而不是作为同胞的段落中唯一一个 class 属性中包含 unique 这个词的 p 元素。

<br>

### 选择第一个和最后一个子代

为一个元素的第一个或最后一个子元素应用特殊的样式是十分常见的需求。比如说，装饰导航栏中的链接时，可能想为第一个或最后一个选项卡（或者同时）赋予特殊的视觉效果。以前的做法是，为它们设定特殊的类。现在，可以让伪类代劳，

:first-child 伪类选择一个元素的第一个子元素。以下述标记为例：

```html
<div>
    <p>These are the necessary steps:</p>
    <ul>
        <li>Insert key</li>
        <li>Turn key <strong>clockwise</strong></li>
        <li>Push accelerator</li>
    </ul>
    <p>
        Do <em>not</em> push the brake at the same time as the accelerator.
    </p>
</div>
```

在这个示例中，第一个 p、第一个 li，以及 strong 和 em 都是相应父元素的第一个子元素。如果有下面两个规则：

```css
p:first-child {
    font-weight: bold;
}

li:first-child {
    text-transform: uppercase;
}
```

得到的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E8%A3%85%E9%A5%B0%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%AD%90%E4%BB%A3.png)

第一个规则把一个元素中的第一个 p 元素显示为粗体。第二个规则把一个元素（对 HTML 来说，必须是 ol 或 ul 元素）中的第一个 li 元素显示为全大写形式。

同样，人们对 p:first-child 这样的选择符最大的误解是，认为它选择的是 p 元素的第一个子元素。还记得伪类的特点？它为所依附的元素设定某种幽灵类。如果添加真正的类，标记将变成：

```html
<div>
    <p class="first-child">These are the necessary steps:</p>
    <ul>
        <li class="first-child">Insert key</li>
        <li>Turn key <strong class="first-child">clockwise</strong></li>
        <li>Push accelerator</li>
    </ul>
    <p>
        Do <em class="first-child">not</em> push the brake at the same time as the accelerator
    </p>
</div>
```

因此，如果想选择一个元素中的第一个 em 子元素，可以使用 em:first-child 选择符。与 :first-child 对应的是 :last-child。还以前面的例子为例，如果只修改伪类，得到的结果如下图所示。

```css
p:last-child {
    font-weight: bold;
}

li:last-child {
    text-transform: uppercase;
}
```

```html
<div>
    <p>These are the necessary steps:</p>
    <ul>
        <li>Insert key</li>
        <li>Turn key <strong>clockwise</strong></li>
        <li>Push accelerator</li>
    </ul>
    <p>
        Do <em>not</em> push the brake at the same time as the accelerator
    </p>
</div>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E8%A3%85%E9%A5%B0%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%AD%90%E4%BB%A3.png)

第一个规则把一个元素中的最后一个 p 元素显示为粗体。第二个规则把一个元素中的最后一个 li 元素显示为全大写形式。如果想选择最后一个段落中的 em 元素，使用 p:last-child em 选择符，它选择的 em 元素是 p 元素的后代，而且 p 元素是另一个元素的最后一个子元素。

有趣的是，这两个伪类结合在一起的效果相当于 :only-child。下述两个规则选择的是相同的元素：

```css
p:only-child {
    color: red;
}

p:first-child:last-child {
    background-color: red;
}
```

这两个规则在一起把段落设为红底红字（这么做显然不好）。

<br>

### 选择第一个和最后一个某种元素

除了选择一个元素中的第一个和最后一个子代之外，还可以选择一个元素中某种元素的第一个或最后一个。例如，选择一个元素中的第一个 table，而不管它前面有什么元素。

```css
table:first-of-type {
    border-top: 2px solid gray;
}
```

注意，这个伪类不应用于整个文档，即上述规则不是选择文档中的第一个表格，其他的表格都不算，而是选择里面有表格的元素中的第一个 table，跳过后面作为同胞的其他 table 元素。因此，对下图所示的文档结构来说，选中的是圈出的那两个节点。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E9%80%89%E6%8B%A9%E7%AC%AC%E4%B8%80%E4%B8%AA%E8%A1%A8%E6%A0%BC.png)

在表格中，如果想选择一行中的第一个数据单元格，而不管前面有没有表头，可以这样：

```css
td:first-of-type {
    border-left: 1px solid red;
}
```

对下述表格行来说，这将选择每一行中的第一个数据单元格：

```html
<tr>
    <th scope="row">Count</th><td>7</td><td>6</td><td>11</td>
</tr>
<tr>
    <td>Q</td><td>X</td><td>-</td>
</tr>
```

倘若使用 td:first-child，第二行中的 td 元素能被选中，但是第一行就无法选中了。

与 :first-of-type 对应的是 :last-of-type，它从同胞元素中选择指定种类元素的最后一个。在某种意义上，:last-of-type 与 :first-of-type 特别相似，只不过它是从同胞元素的最后一个开始向前搜索，直到找到指定的元素类型。对下图所示的文档结构来说，table:last-of-type 选中的是圈出的节点。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E9%80%89%E6%8B%A9%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E8%A1%A8%E6%A0%BC.png)

注意，与 :only-of-type 一样，你是从一组同胞元素中选择一个类型的元素，各组同胞是分开对待的。也就是说，不是把整个文档中某种类型的第一个（或最后一个）元素作为一个整体选择出来。同属一个父元素的元素是一组，而我们是从这样的一组元素中选择某种元素的第一个（或最后一个）。

与前一节末尾所讲的类似，我们可以把这两个伪类连在一起，达到 :only-of-type 的效果。下述两个规则选择的是相同的元素：

```css
table:only-of-type {
    color: red;
}

table:first-of-type:last-of-type {
    background: red;
}
```

<br>

### 选择每 n 个子元素

如果你能选择一个元素的第一个子元素、最后一个子元素和唯一的子元素，那能不能选择每第三个子元素，能不能选择所有偶数位的子元素，又或者能不能选择第 9 个子元素。如果分别为这些需求定义伪类，那数量可就多了。CSS 为此提供的是 :nth-child() 伪类。我们可以在括号中填上整数，甚至是简单的代数式，选择任何想选择的子元素。

先看与 :first-child 等效的 :nth-child(1)。对下述示例来说，选中的是第一个段落和第一个列表项目。

```css
p:nth-child(1) {
    font-weight: bold;
}

li:nth-child(1) {
    text-transform: uppercase;
}
```

```html
<div>
    <p>These are the necessary steps:</p>
    <ul>
        <li>Insert key</li>
        <li>Turn key <strong>clockwise</strong></li>
        <li>Push accelerator</li>
    </ul>
    <p>
        Do <em>not</em> push the brake at the same time as the accelerator
    </p>
</div>
```

如果把 1 改成 2，没有段落会被选中，而中间那个（第二个）列表项目会被选中，如下图所示。

```css
p:nth-child(2) {
    font-weight: bold;
}

li:nth-child(2) {
    text-transform: uppercase;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E8%A3%85%E9%A5%B0%E7%AC%AC%E4%BA%8C%E4%B8%AA%E5%AD%90%E4%BB%A3.png)

括号中可以填上任何整数。如果在某种情况下需要选择作为一个元素第 93 个子元素的有序列表，可以使用 ol:nth-child(93)。这个选择符将匹配第 93 个子元素，前提是它是有序列表（不是子啊同胞中匹配第 93 个有序列表，详细说明参见下一节）。

更强大的是，括号中可以使用简单的代数式定义公式。代数式的形式为 an + b 或 an - b，其中 a 和 b 是具体的整数，n 原封不动。而且，b 和 -b 是可选的，如果不需要，可以不用。

假设我们想从一个无序列表的第一个列表项目开始，选择每第三个列表项目。此时，可以使用下述选择符，选择第一个和第四个列表项目，如下图所示。

```css
ul > li:nth-child(3n + 1) {
    text-transform: uppercase;
}
```

这里的 n 表示 0、1、2、3、4，一直到无穷大。浏览器求解 3 n + 1 时，得到的结果为 1、4、7、10、13 等。如果没有 +1 那部分，只剩下 3n，得到的结果是 0、3、6、9、12 等。因为没有第 0 个列表项目（与数组不同，HTML 元素从第一个数起），所以这个表达式选中的第一个元素是第三个列表项目。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E8%A3%85%E9%A5%B0%E6%AF%8F%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%88%97%E8%A1%A8%E9%A1%B9%E7%9B%AE.png)

正因为元素从 1 数起，要稍微转个圈才能推出 :nth-child(2n) 选择的是偶数位的子代，而 :nth-child(2n+1) 或 :nth-child(2n-1) 选择的是奇数位的子代。你可以选择记住，也可以使用两个特殊的关键字：even 和 odd。想从表格的第一行起每隔一行突出显示，可以这么做，结果如下图所示。

```css
tr:nth-child(odd) {
    background: silver;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E8%A3%85%E9%A5%B0%E8%A1%A8%E6%A0%BC%E4%B8%AD%E9%97%B4%E9%9A%94%E7%9A%84%E8%A1%8C.png)

比间隔元素复杂的情况都要使用代数式 an + b。

注意，如果想让 b 使用负数，要把前面的 + 号删掉，否则选择符无效。对下面两个规则来说，只有第一个会起作用。解析器不解析第二个规则，而是将其忽略。

```css
tr:nth-child(4n-2) {
    background: silver;
}

tr:nth-child(3n + 2) {
    background: red;
}
```

如果想选择从第 9 行起的每一行，可以使用下面两个规则中的一个。二者的共同点是都会选择第 9 行起的每一行，不过后者的特指度更高（参见第 3 章）。

```css
tr:nth-last-child(odd) {
    background: silver;
}

tr:nth-child(8) ~ tr {
    background: silver;
}
```

你可能猜到了，有个与之对应的伪类 :nth-last-child()。它的作用与 :nrth-child() 一样，只不过是从一组同胞的最后一个元素开始，从后向前计算。如果想突出显示表格中间隔的行，而且想让最后一行含在其中，可以使用下述规则中的任意一个：

```css
tr:nth-last-child(odd) {
    background: silver;
}

tr:nth-last-child(2n+1) {
    background: silver; /* 等效 */
}
```

如果更新 DOM，添加或删除了行，无需添加或删除类。借助结构伪类，上述选择符始终能匹配更新后的 DOM 中的奇数行。

只要条件得当，使用 :nth-child() 和 :nth-last-child() 可以选择任何元素。下述规则的结果如下图所示。

```css
li:nth-child(3n + 3) {
    border-left: 5px solid black;
}

li:nth-last-child(4n - 1) {
    border-right: 5px solid black;
    background: silver;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E7%BB%93%E5%90%88nth-child%28%29%20%E5%92%8C%20nth-last-child%28%29.png)

这两个伪类可以串在一起，:nth-child(1):nth-last-child(1) 实现 :only-child 的效果。如果不是想得到较高的特指度，没有任何原因这么做，不过你要知道确实可以这么做。

你可以使用 CSS 确定一个列表有多少个列表项目，然后据此装饰：

```css
li:only-child {
    width: 100%;
}

li:nth-child(1):nth-last-child(2),
li:nth-child(2):nth-last-child(1) {
    width: 50%;
}

li:nth-child(1):nth-last-child(3),
li:nth-child(1):nth-child(3) ~ li {
    width: 33.33%;
}

li:nth-child(1):nth-last-child(4),
li:nth-child(1):nth-last-child(4) ~ li {
    width: 25%;
}
```

在上述示例中，如果列表中只有一个列表项目，宽度为 100%。如果一个列表项目是第一个项目，还是倒数第二个项目，即列表中有两个项目，那么宽度为 50%。如果一个列表项目是第一个项目，还是倒数第三个项目，那么后面两个同胞项目的宽度为 33%。类似地，如果一个列表项目是第一个项目，还是倒数第四个项目，即列表中有四个项目，那么后面三个同胞的宽度为 25%。

<br>

### 选择每第 n 个某种元素

了解相关模式之后你可能猜到了，:nth-child() 和 :nth-last-child() 伪类有对应的 :nth-of-type() 和 :nth-last-of-type()。例如，可以使用 p > a:nth-of-type(even) 在一个段落中从第二个超链接选择间隔的超链接。此时，其他元素（span、strong 等）都被忽略，只考虑超链接，结果如下图所示。

```css
p > a:nth-of-type(even) {
    background: blue;
    color: white;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E9%80%89%E6%8B%A9%E5%81%B6%E6%95%B0%E4%BD%8D%E7%9A%84%E9%93%BE%E6%8E%A5.png)

如果想从最后一个超链接向前数，要使用 p > a:nth-last-of-type(even)。

与之前一样，这两个伪类从同胞元素中选择某一种元素，而不是从整个文档把某一种元素作为一个整体选择出来。每个元素都有自己的一组同胞，而选择就发生在那组同胞中。

你可能猜到了，串在一起的 :nth-of-type(1):nth-last-of-type(1) 相当于 :only-of-type，二者作用相同，只不过前者特指度更高（别急，第 3 章将说明特指度）/

<br>

## 3. 动态伪类

除了结构伪类之外，还有一些与结构有关的伪类，不过它们在页面渲染之后根据页面的变化而变化。也就是说，为了把这些伪类定义的样式应用到文档中的某一部分上，除了文档的结构，还要考虑其他事情，而且通过文档的标记很难准确推出应用样式的方式。

看起来这好像是随机应用样式，然而并非如此。其实，样式是在无法提前预知的条件满足时应用的。话虽如此，但是应用样式的条件其实是定义好的。拿体育比赛来说，如果主队得分了，观众就会沸腾起来。但是，你无法预知一场比赛中主队何时会得分，但是按预计，只要得分，观众就会沸腾起来。我们知道观众在什么情况下会沸腾，但是对何时出现这样的情况却一无所知。

拿锚记来说（a）来说，（在 HTML 及相关的语言中）它的作用是从一个文档链接到另一个文档。锚记始终是锚记，但是有些锚记指向的页面已经访问过，而有些尚未访问。从 HTML 标记中式看不出这一区别的。因为所有锚记的句法都是一样的。若想知道链接到底有没有访问，只能与用户的浏览器历史记录比较。因此，链接基本上有两种状态：已访问和未访问。

### 超链接伪类

CSS2.1 定义了两个只能在超链接上使用的伪类。在 HTML 中，这两个伪类用在具有 href 属性的 a 元素上。在 XML 语言中，这两个伪类在链接到其他资源的元素上应用。这两个伪类的说明见下表。

| 伪类     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| :link    | 指代用作超链接的锚记（即具有 href 属性），而且指向尚未访问的地址 |
| :visited | 指代指向已访问地址的超链接。出于安全考虑，能应用到已访问链接上的样式十分有限。详情参见本章后面已访问链接的隐私保护旁注 |

乍一看上表中的第一个伪类，可能觉得多余。一个锚记未被访问，那它肯定就处于未访问状态，不是吗？如果是这样，我们只需编写：

```css
a {
    color: blue;
}

a:visited {
    color: red;
}
```

这样看似合理，但其实还不够。上述规则中的第一条不仅应用到未访问的链接上，还应用到类似下面的占位链接上：

```html
<a>4. The Lives fo Meerkats</a>
```

这个文本会显示为蓝色，因为 a 元素与 a { color: blue } 规则匹配。所以，为了避免把链接样式应用到占位链接上，要使用 :link 和 :visited 伪类：

```css
a:link {
    color: blue; /* 未访问的链接显示为蓝色 */
}

a:visited {
    color: red; /* 已访问的链接显示为红色 */
}
```

此时，我们可以看一下如何把属性选择符和类选择符与伪类结合在一起使用。假设我们想改变指向站外地址的链接颜色。多数情况下，我们可以使用以特定文本开头的属性选择符。然而，在某些 CMS 中，所有链接使用的都是绝对 URL。此时，可以为每个锚记设定类。比如说：

```html
<a href="/about.html">My About page</a>
<a href="https://www.site.net/" class="external">An external site</a>
```

然后使用下述规则为外部链接应用不同的样式：

```css
a.external:link, a[href^="http"]:link {
    color: slateblue;
}

a.external:visited, a[href^="http"]:visited {
    color: maroon;
}
```

对上述标记中的第二个锚记来说，默认情况下颜色为石蓝色，访问后变成红褐色。而第一个锚记始终显示超链接的默认颜色（通常在未访问时是蓝色，访问后是紫色）。为了提升可用性和可访问性，已访问链接和未访问链接之间要能轻易区分。

>具有特别样式的已访问里链接能让访客知道他们访问过哪些网站，以及哪些还未访问。在大型网站中这样做尤其重要，因为链接太多，记不住（特别是对有认知障碍的人）哪些网站已经访问过。突出显示已访问的链接不仅是 W3C Web Content Accessibility Guidelines 的指导方针之一，而且还便于快速且高效地搜索内容，减轻每个人的压力。

ID 选择符也可以跟伪类结合在一起使用：

```css
a#footer-copyright:link {
    background: yellow;
}

a#footer-copyright:visited {
    background: gray;
}
```

链接状态的这两个伪类可以串在一起，不过这么做没有任何意义：链接不可能既是已访问的又是未访问的。

>有超过十年的时间，已访问的链接可以使用任何可用的CSS属性装饰，与未访问链接没有差别。
>
>然而，大约在2005年，有几个人通过示例揭露，通过视觉样式和简单的DOM脚本就可以判断用户是否访问过特定页面。例如，对:visited{ font-weight: bold; }规则来说，脚本可以找出所有加粗的链接，告诉用户他们访问过哪些网站。更槽糕的是，已访问的网站可能会被服务器偷偷收集。不使用脚本的话，还可以通过背景图像达到相同的效果。
>
>对你来说这可能不是什么严重的问题，但在有些国家，访问某些网站（反对党、未经批准的宗教组织、邪教或腐败网站等）可能招致牢狱之灾。钓鱼网站还可以利用这一点查出用户访问过哪些重要资源。
>
>鉴于此，相关方采取了两个措施：
>
>首先，只能把颜色相关的属性应用到已访问的链接上，包括：color、background-color、column-rule-color、outline-color、border-color，以及各边的边框颜色属性（例如：border-top-color）。除此之外的属性将被忽略。此外，:link定义的样式除了应用到未访问的链接上之外，也会应用到已访问的链接上，因此:link能装饰所有超链接，而不只是装饰所有未访问的超链接。
>其次，如果通过DOM查询已访问链接的样式，返回的值跟未访问时一样。因此，如果把已访问链接的颜色设为紫色，未访问链接的颜色设为蓝色，那么通过DOM查询颜色时，返回的是蓝色，而不是紫色。
>从2017年年未起，这一行为在所有浏览模式中都应用了，而不仅限于隐私浏览模式。
>
>尽管只能使用有限的CSS属性区分已访问链接和未访问链接，但是为了可用性和可访问性，我们还是要充分利用有限的属性把已访问的链接和未访问的链接区分开。

<br>

### 用户操作伪类

CSS 中有几个伪类可以根据用户的操作改变文档的外观。这些动态伪类以前普遍用于装饰超链接，不过现在的应用范围宽得多。这些伪类得说明见下表。

| 伪类    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| :focus  | 指代当前获得输入焦点的元素，即可以接受键盘输入或以某种方式激活 |
| :hover  | 指代鼠标指针放置其上的元素，例如鼠标指针悬停在超链接上       |
| :active | 指代由用户输入激活的元素，例如用户单击超链接时按下鼠标按键的那段时间 |

可以处于 :active 状态的元素有链接、菜单项目，以及可以设定 tabindex 属性的元素。这些元素，加上其他所有交互元素，例如表单控件和可编辑内容的元素，还可以获得焦点。

与 :link 和 :visited 类似，这些伪类最常用于超链接。很多网页都有类似下面的样式：

```css
a:link {
    color: gray;
}

a:visited {
    color: gray;
}

a:focus {
    color: orange;
}

a:hover {
    color: red;
}

a:active {
    color: yellow;
}
```

>这些伪类的顺序可不是随意的，通常推荐的顺序是 link-visited-hover-active，不过后来改成了 link-visited-focus-hover-active。下一章将解释为什么采用这种顺序，并讨论可能想改变或忽略推荐顺序的一些原因。

注意，动态伪类可应用于任何元素，也就是说可用于链接之外的元素。例如，使用下述规则可以突出显示获得键盘输入焦点的表单元素，效果如下图所示。

```css
input:focus {
    background: silver;
    font-weight: bold;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E7%AA%81%E5%87%BA%E6%98%BE%E7%A4%BA%E8%8E%B7%E5%BE%97%E7%84%A6%E7%82%B9%E7%9A%84%E8%A1%A8%E5%8D%95%E5%85%83%E7%B4%A0.gif)

你还可以使用一些特别的技巧为任意应用动态伪类。例如，使用下述规则实现某种突出显示效果：

```css
body *:hover {
    background: yellow;
}
```

这个规则把 body 的任何后代元素处于悬停状态时的背景设为黄色。body 中的标题、段落、列表、表格、图像等一切元素都将变成黄色背景。此外，还可以改变悬停时元素的字体，为元素加上边框，或者浏览器能显示的其他效果。

>虽然可以使用 :focus 以任何方式装饰元素，但是千万别删除获得焦点的元素的全部样式。区分当前获得焦点的元素对可访问性十分重要，尤其是使用键盘在网站或应用中导航时。

<br>

### 动态样式引起的问题

动态伪类有些耐人寻味的问题和怪异行为。例如，可以把已访问链接和未访问链接设为相同的字号，而在悬停时把字号增大，如下图所示。

```css
a:link, a:visited {
    font-size: 13px;
}

a:hover, a:active {
    font-size: 20px;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E5%8A%A8%E6%80%81%E4%BC%AA%E7%B1%BB%E6%94%B9%E5%8F%98%E5%B8%83%E5%B1%80.gif)

可以看出，鼠标指针悬停在那个锚记上时，用户代理增大了它的字号。因为还有 :active 伪类，所有用户在触摸屏上轻点时也会出现这种情况。支持这一行为的用户代理在锚记处于悬停状态时必须重新绘制文档，这可能导致那个链接后面的内容重排。

<br>

## 4. UI 状态伪类

与动态伪类紧密相关的是用户界面状态伪类，简要说明见下表。这些伪类根据用户界面元素（例如复选框）的当前状态应用样式。

| 伪类           | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| :enabled       | 指代启用的用户界面元素（例如表单元素），即接受输入的元素     |
| :disabled      | 指代禁用的用户界面元素（例如表单元素），即不接受输入的元素   |
| :checked       | 指代由用户或文档默认选中的单选按钮或复选框                   |
| :indeterminate | 指代既未选中也没有未选中的单选按钮或复选框。这个状态只能由 DOM 脚本设定，不能由用户设定 |
| :default       | 指代默认选中的单选按钮、复选框或选项                         |
| :valid         | 指代满足所有数据有效性语义的输入框                           |
| :invalid       | 指代不满足所有数据有效性语义的输入框                         |
| :in-range      | 指代输入的值在最小值和最大值之间的输入框                     |
| :out-of-range  | 指代输入的值小于控件允许的最小值或大于控件允许的最大值的输入框 |
| :required      | 指代必须输入值的输入框                                       |
| :optional      | 指代无需一定输入值的输入框                                   |
| :read-write    | 指代可由用户编辑的输入框                                     |
| :read-only     | 指代不能由用户编辑的输入框                                   |

虽然 UI 元素的状态能被用户操作改变，例如用户勾选或不选一个复选框，但是 UI 状态伪类不是单纯动态的，因为它们还受文档结构或 DOM 脚本的影响。

>你可能觉得 :focus 属于这一节，而不是前一节。可是，Selectors Level 3 规范把 :focus 与 :hover 和 :active 归为一组。这可能是因为 CSS2 就是这样分组的，而且那时没有 UI 状态伪类。然而，更重要的原因是，非 UI 元素（例如标题或段落）也可以获得焦点，比如说能自动阅读的浏览器读到某个元素时。就这一点便足以把它与 UI 状态伪类分开。

<br>

### 启用和禁用的 UI 元素

在 DOM 脚本和 HTML5 的支持下，我们可以把一个用户界面元素（或者一组用户界面元素）标记为禁用的。禁用的元素也能显示出来，但是无法选择、激活或与用户交互。若想把元素设为禁用的，可以使用 DOM 脚本，也可以在 HTML5 元素的标记中添加 disabled 属性。

未禁用的元素显然是启用的。这两个状态可以使用 :enabled 和 :disabled 伪类装饰。常见的做法是装饰禁用的元素，启用的元素不做修饰，不过这两个伪类都有用处，如下图所示。

```css
:enabled {
    font-weight: bold;
}

:disabled {
    opacity: 0.5;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E8%A3%85%E9%A5%B0%E5%90%AF%E7%94%A8%E5%92%8C%E7%A6%81%E7%94%A8%E7%9A%84%20UI%20%E5%85%83%E7%B4%A0.png)

<br>

### 选择状态

除了启用和禁用之外，某些 UI 元素还可以选中或不选，HTML 中的复现框和单选按钮就是这种。Selectors Level 3 为这种状态提供了 :checked 伪类，但是不知为何，没有 :unchecked 伪类。此外，还有一个 :indeterminate 伪类，它匹配的 UI 元素是可选择但是既未选中也没不选。这些状态如下图所示。

```css
:checked {
    background: silver;
}

:indeterminate {
    border: red;
}
```

此外，可以使用否定伪类（稍后介绍）选择未被选中的复选框：input[type="checkbox"]:not(:checked)。只有单选按钮和复选框才能被选中。其他元素以及这两个元素，如果未选选中，使用 :not(:checked) 选择。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E8%A3%85%E9%A5%B0%E9%80%89%E4%B8%AD%E5%92%8C%E5%A4%84%E4%BA%8E%E4%B8%8D%E7%A1%AE%E5%AE%9A%E7%8A%B6%E6%80%81%E7%9A%84%20UI%20%E5%85%83%E7%B4%A0.png)

可选元素默认是未被选中的，不过 HTML 文档的编写人员可以通过元素标记中的 checked 属性切换状态，或者使用 DOM 脚本改变元素的选择状态。

除了这两个状态之外，还有一个状态。截至 2017 年年末，这个状态只能由 DOM 脚本或用户代理设定，在标记中做不到这一点。不确定状态存在的目的是从视觉上提示用户需要选中（或不选）某个元素。不过要注意，这只是视觉上的效果，对 UI 元素底层的状态没有影响。元素的底层状态只能是选中或未选中，这取决于文档标记和 DOM 脚本。

前面的示例虽然展示了如何装饰单选按钮，但是通过 CSS 装饰单选按钮和复选框能实现的效果十分有限。然而，使用这些伪类能做的事情却是无限的。例如，可以结合 :checked 和紧邻同胞连结符装饰复选框和单选按钮的标注（label）：

```css
input[type="checkbox"]:checked + label {
    color: red;
    font-style: italic;
}
```

```html
<input id="chbx" type="checkbox"> <label for="chbx">I am a label</label>
```

<br>

### 默认选项伪类

:default 伪类匹配一组相似元素中取默认值的 UI 元素。这个伪类通常用于上下文菜单选项、按钮和选择列表（目录）。如果由几个同名的单选按钮，最初选中的那个单选按钮匹配 :default，即使用户改变了 UI，最初选中的单选按钮已经不匹配 :checked。页面加载时选中的复选框匹配 :default。select 元素中最初选中的一个或多个 option 匹配 :default。:default 伪类还能匹配按钮和菜单选项。

```css
[type="checkbox"]:default + label {
    font-style: italic;
}
```

```html
<input id="chbx" type="checkbox"> <label for="chbx">I am a label</label>
```

<br>

### 可选性伪类

:required 伪类匹配必填的表单控件，这一要求由 required 属性（HTML5）指定。:optional 伪类匹配没有 required 属性的表单控件，或者 required 属性的值为 false 的控件。

若想提交表单，表单中匹配 :required 的元素必须有值，匹配 :optional 的元素可有值也可以没有值。例如：

```css
input:required {
    border: 1px solid #f00;
}

input:optional {
    border: 1px solid #ccc;
}
```

```html
<input type="email" placeholder="enter an email address" required>
<input type="email" placeholder="opptional email address">
<input type="email" placeholder="optional email address" required="false">
```

第一个电子邮件地址输入框匹配 :required 伪类，因为它有 required 属性。第二个输入框是可选的，因此匹配 :optional 伪类。第三个输入框也是可选的，因为虽然有 required 属性，但值是 false。

除了伪类，还可以使用属性选择符。下述选择符与前面的等效：

```css
input[required] {
    border: 1px solid #f00;
}

input:not([required]) {
    border: 1px solid #ccc;
}
```

除了表单输入框之外，其他元素既不能是必填的，也不能是可选的。

<br>

### 有效性伪类

:valid 伪类表示用户输入的值满足全部数据验证条件，而 :invalid 伪类表示用户输入的值不满足全部数据验证条件。

:valid 和 :invalid 两个有效性伪类只适用于能检查数据有效性的元素。因此，div 元素绝不可能匹配它们中的任何一个，而 input 元素可能匹配其中一个，这取决于用户界面的当前状态。

下面的示例为获得焦点的电子邮件地址输入框设定背景图，一个在输入的地址无效时显示，一个在输入的地址有效时显示，如下图所示。

```css
input[type="mail"]:focus {
    background-position: 100% 50%;
    background-repeat: no-repeat;
}

input[type="mail"]:focus:invalid {
    background-image: url(warning.jpg);
}

input[type="email"]:focus:valid {
    background-image: url(checkmark.jpg);
}
```

```html
<input type="email">
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E8%A3%85%E9%A5%B0%E6%9C%89%E6%95%88%E5%92%8C%E6%97%A0%E6%95%88%E7%9A%84%20UI%20%E5%85%83%E7%B4%A0.gif)

>这两个伪类起不起作用取决于用户代理会不会向样式系统报告验证状态，因此某些情况下的效果可能跟预期不符。例如，在 2017 年年末，在多个用户代理中，未输入值的电子邮件输入框匹配 :valid，而空值肯定不是有效的电子邮件地址。在验证逻辑改进之前，使用有效伪类时一定要小心。

<br>

### 范围伪类

范围伪类有两个，:in-range 和 :out-of-range。前者表示用户输入的值在 HTML5 的 min 和 max 属性设定的最小值和最大值范围之内，而后者表示用户输入的值小于控件接受的最小值或大于最大值。

例如，下面几个规则分别装饰一个接受 0~1000 之间数字的输入框的不同状态：

```css
input[type="number"]:focus {
    background-position: 100% 50%;
    background-repeat: no-repeat;
}

input[type="number"]:focus:out-of-range {
    background-image: url(warning.jpg);
}

input[type="number"]:focus:in-range {
    background-image: url(checkmark.jpg);
}
```

```html
<input id="nickels" type="number" min="0" max="1000" />
```

:in-range 和 :out-of-range 伪类只适用于设定了范围的元素。没有范围限制的元素，例如链接或 tel 类型的输入框，不能被它们中的任何一个匹配。

HTML5 还有一个 step 属性。如果一个值由于不匹配步进值而无效，但仍然在 min 和 max 设定的值之间（或等于两个极值），那么所在的元素将匹配 :invalid，同时还匹配 :in-range。也就是说，在范围内的值也可能是无效的。

因此，在下述示例中，输入框中的值将是红色加粗的，因为 23 在范围内，但是不能被 10 整除：

```css
input[type="number"]:invalid {
    color: red;
}

input[type="number"]:in-range {
    font-weight: bold;
}
```

```html
<input id="by-tens" type="number" min="0" max="1000" step="10" value="23" />
```

<br>

### 可变性伪类

可变性伪类有 :read-write 和 :read-only 两个，前者表示输入框可由用户编辑，而后者匹配不能编辑的输入框。只有能被用户编辑的元素才匹配 :read-write。

例如，在 HTML 中，未禁用的非只读 input 元素，以及设定了 contenteditable 属性的元素匹配 :read-write。其他所有元素匹配 :read-only。

默认情况下，下面两个规则都不匹配，因为 textarea 元素是可读可写的，而 pre 元素是只读的。

```css
textarea:read-only {
    opacity: 0.75;
}

pre:read-write:hover {
    border: 1px dashed green;
}
```

然而，却匹配下述元素：

```html
<textarea disabled></textarea>
<pre contenteditable>Type your own code!</pre>
```

因为 textarea 设定了 disabled 属性，变成只读的了，所以能应用第一个规则。类似地，这里的 pre 设定了 contenteditable 属性，现在是可读可写的元素，因此匹配第二个规则。

<br>

## 5. :target 伪类

URL 中有个片段标识符，它所指向的文档片段（在 CSS 中）称为目标。URL 片段标识符指向的目标元素可以使用 :target 伪类特别装饰。

即便不知道片段标识符这个术语，你肯定也见过。比如下面这个 URL：

http://www.w3.org/TR/css3-selectors/#target-pseudo

这个 URL 中的 target-pseudo 部分就是片段标识符，由 # 符号标记。如果对应的页面（http://www.w3.org/TR/css3-selectors/）中有 ID 为 target-pseudo 的元素，那个元素就是片段标识符的目标。

借助 :target 伪类，我们可以突出显示文档中的任何目标元素，或者为不同的目标元素定义不同的样式，例如作为目标的标题使用一个样式，作为目标的表格使用一个样式等。下图是 :target 伪类的实际效果。

```css
*:target {
    border-left: 5px solid gray;
    background: yellow url(target.png) top right no-repeat;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E8%A3%85%E9%A5%B0%E4%B8%80%E4%B8%AA%E7%89%87%E6%AE%B5%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%9B%AE%E6%A0%87.png):target 伪类定义的样式在两种情况下不会应用：

1. 页面中的 URL 中没有片段标识符。
2. 页面的 URL 中有片段标识符，但是文档中没有与之匹配的元素。

不过，更有趣的问题是，如果一个文档中有多个元素与片段标识符匹配怎么办？例如，文档编写人员失误，在文档中放了三个 `<div id="target-pseudo">`。

简单来说，CSS 无需为此提供解决方案，因为 CSS 所做的只是装饰目标。不管浏览器选择三个元素中的某一个，还是同等对待三个元素，:target 样式都会应用到有效的目标上。

<br>

## 6. :lang 伪类

如果想根据文本使用的语言选择元素，可以使用 :lang() 伪类，在匹配方式上，:lang() 伪类与 |= 属性选择符类似。假设想让使用法语编写的元素倾斜显示，可以编写下述规则中的任何一个：

```css
*:lang(fr) {
    font-style: italic;
}

*[lang|="fr"] {
    font-style: italic;
}
```

伪类选择符与属性选择符之间的主要区别是语言信息有多个来源，有时可能来自元素自身之外。对属性选择符来说，元素自身必须有 lang 属性才能匹配。而 :lang 伪类能匹配设定了语言的元素的后代。Selectors Level 3 是这样规定的：

在 HTML 中，语言可以通过 lang 属性判断，也可以通过 meta 元素和协议（例如 HTTP 首部）判断。XML 使用 xml:lang 属性，此外还可能有文档语言专用的方法。

:lang 伪类可以使用各种信息，而 |= 属性选择符只能用于标记中有 lang 属性的元素。因此，伪类比属性选择符更可靠，多数情况下是装饰特定语言的理想之选。

<br>

## 7. 否定伪类

目前介绍的所有选择符有个共同点：都是肯定选择符。也就是说，这些选择符用于指定应该选择的东西，排除不匹配（即不选择）的东西。

如果想反过来，选择不满足条件的元素，可以使用 Selector Level 3 引入的否定伪类 :not()。这个伪类与其他选择符不太一样，而且自身有一些限制。暂不讨论细节，先看一个例子。

假设你想装饰 class 属性不是 moreinfo 的列表项目，如下图所示。以前，这个需求很难实现，而且某些情况下根本实现不了。如果想让除了类为 .moreinfo 之外的列表项目倾斜显示，过去我们要先让所有列表项目都倾斜（一般是通过类选择 ul），然后再通过 .moreinfo 类把特定的列表项目还原。这么做要确保 .moreinfo 样式在源码中的位置靠后，而且要具有相同或更高的特指度。现在，我们可以像这样声明样式：

```css
li:not(.moreinfo) {
    font-style: italic;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E8%A3%85%E9%A5%B0%E6%B2%A1%E6%9C%89%E6%8C%87%E5%AE%9A%E7%B1%BB%E7%9A%84%E5%88%97%E8%A1%A8%E9%A1%B9%E7%9B%AE.png)

:not() 伪类依附在元素上，括号中是简单的选择符。根据 W3C 的定义，简单的选择符指：

一个类型选择符、通用选择符、属性选择符、类选择符、ID 选择符或伪类。

基本上，简单选择符是指没有祖辈-后代关系的选择符。

注意定义中的或，它的意思是 :not() 伪类中只能使用其中一个选择符。不能使用群组选择符，也不能使用连结符，因此不能使用后代选择符，因为后代选择符中分隔元素的空格是连结符。这些限制在未来可能撤销（极有可能），不过就算有这些限制，我们仍然可以通过它做很多事情。

再看前面的示例。假设我们想选择所有 class 为 moreinfo，但不是列表项目的元素。结果如下图所示。

```css
.moreinfo:not(li) {
    font-style: italic;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E8%A3%85%E9%A5%B0%E5%85%B7%E6%9C%89%E7%89%B9%E5%AE%9A%E7%B1%BB%EF%BC%8C%E4%BD%86%E4%B8%8D%E6%98%AF%E5%88%97%E8%A1%A8%E9%A1%B9%E7%9B%AE%E7%9A%84%E5%85%83%E7%B4%A0.png)

用人类语言描述，这个选择符的意思是，选择的元素，其 class 属性中包含 moreinfo 这个词，但不是 li 元素。类似地，li:not(.moreinfo) 的意思是，选择 li 元素，但不包括 class 属性中包含 moreinfo 这个词的 li 元素。

严格来说，:not() 伪类的括号中可以使用通用选择符，但这么做意义不大。毕竟，p:not(*) 的意思是选择不是元素的 p 元素。试想，怎么可能存在不是元素的元素。p:not(p) 与之类似，也选择不了任何元素。此外，还有 p:not(div) 这样的选择符，即选择不是 div 元素的 p 元素，这相当于选择所有 p 元素。可见，没有什么缘由这样做。

否定选择符可在复杂选择符的任何位置使用。因此，若想选择不是 section 元素子代的所有表格，可以使用 *:not(section) > table。类似地，若想选择不在表头中的表头单元格，可以使用 *:not(thead) > tr > th，效果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E8%A3%85%E9%A5%B0%E8%A1%A8%E5%A4%B4%E4%B9%8B%E5%A4%96%E7%9A%84%E8%A1%A8%E5%A4%B4%E5%8D%95%E5%85%83%E6%A0%BC.png)

否定伪类不能嵌套，因此 p:not(:not(p)) 是无效的，将被忽略。逻辑上，这与直接使用 p 没有区别，所以没必要这么做。此外，在括号中不能引用伪元素（稍后说明原因），因为伪元素不是简单选择符。

不过，否定伪类可以串在一起，作用相当于也不是。例如，你可能想选择 class 为 link，但既不是列表项目也不是段落的元素：

```css
*.link:not(li):not(p) {
    font-style: italic;
}
```

这个规则的意思是，选择 class 属性中包含 link 这个词，但不是 li 或 p 的所有元素。

使用否定伪类时要注意，有时真实的效果可能与设想不同。多数情况下，这是因为我们不习惯以否定的方式思考问题。对下面的规则和标记来说：

```css
div:not(.one) p {
    font-weight: normal;
}

div.one p {
    font-weight: bold;
}
```

```html
<div class="one">
    <div class="two">
        <p>I'm paragraph!</p>
    </div>
</div>
```

上述段落将显示为粗体，而不是常规字重。这是因为两个规则都匹配：p 元素是 class 属性中宝不包含 one 这个词的 div 元素（`<div class="two">`）的后代，而且还是 class 元素中包含 one 这个词的 div 元素的后代。两个规则都匹配，因为两个规则都应用。因为二者有冲突，为了解决冲突要用到层叠规则，而结果是第二个样式规则胜出。标记的结构，即 div.two 比 div.one 离这个段落更近，在这里无关紧要。

<br>

# 7. 伪元素选择符

伪元素与伪类很像，为了实现特定的效果，它在文档中插入虚构的元素。CSS2 定义了四个基本的伪元素，分别用于装饰元素的首字母、首行，以及创建和装饰前置和后置内容。CSS2 之后的规范又定义了其他伪元素（例如 ::marker），我们将在相关的章节中探讨。这一节介绍 CSS2 定义的那四个，因为它们由来已久，借此机会还可以讨论伪元素的行为。

伪类使用一个冒号，而伪元素使用一对冒号，例如 ::first-line。这么做是为了把伪元素与伪类区分开。一开始并不是这样的，在 CSS2 中，这两种选择符都使用一个冒号。因此，为了向后兼容，浏览器也接受使用单个冒号的伪元素选择符。但是，不要因为这样就懈怠。为了确保你编写的 CSS 在未来还能继续使用，应该使用正确的冒号个数，毕竟我们无法预知浏览器什么时候不再接受单个冒号的伪元素选择符。

注意，所有伪元素只能出现在选择符最后。p::first-line em 是无效的，因为伪元素在选择符的主词前面（主词是选择符中的最后一个元素）。这也表明一个选择符中只能有一个伪元素，不过在 CSS 以后的版本中可能会取消这一限制。

<br>

## 1. 装饰首字母

::first-letter 伪元素用于装饰任何非行内元素的首字母，或者开头的标点符号和首字母（如果文本以标点符号开头）。下述规则把每一段的首字母设为红色：

```css
p::first-letter {
    color: red;
}
```

::first-letter 伪元素最常用于实现排版效果中的首字母大写或首字母下沉。你可以把每个 p 元素首字母的字号设为其余内容的两倍大，不过最好只应用到第一段的首字母上：

```css
p::first-of-type::first-letter {
    font-size: 200%;
}
```

这个规则的效果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/first-letter%20%E4%BC%AA%E5%85%83%E7%B4%A0%E7%9A%84%E6%95%88%E6%9E%9C.png)

这个规则其实相当于让用户代理装饰每个 p 元素中包围首字母的一个虚构元素。比如这样：

```html
<p>
    <p-first-letter>T</p-first-letter>his is a p element, with a styled first letter
</p>
```

::first-letter 样式只应用于上例中虚构的那个元素里的内容。`<p-first-letter>` 元素不会出现在文档的源码中，也不会出现在 DOM 树中，而是由用户代理动态构建，目的是把 ::first-letter 样式应用到相应的文本上。也就是说，`<p-first-letter>` 是个伪元素。注意，你无需添加任何新标签。用户代理会代为装饰首字母，就像把首字母放到一个元素中一样。

首字母指排版上的第一个字母单元（如果前面没有其他内容的话，例如图像）。规范中使用的词是字母单元，因为有些语言的字母由多个字符构成，例如古斯基的纳维亚语中的 "oe"。首字母前面或后面的标点符号（即便有多个符号），包含在 ::first-letter 伪元素中。

<br>

## 2. 装饰首行

类似地，::first-line 用于装饰元素的首行文本。例如，可以把文档中每个段落的首行字号变大，并显示为紫色：

```css
p::first-line {
    font-size: 150%;
    color: purple;
}
```

在下图中，这个样式应用到每个段落中显示的第一行文本上。不管显示区域有多宽或多窄都是这样。如果首行只包括一段的前五个词，那就只有这五个词显示为紫色的大字。如果首行包含前 30 个词，那么前 30 个词将显示为紫色的大字。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/first-line%20%E4%BC%AA%E5%85%83%E7%B4%A0%E7%9A%84%E6%95%88%E6%9E%9C.png)

从 This 到 only 应该显示为紫色的大字，因此用户代理会加上类似下面的虚构标记：

```html
<p>
    <p-first-line>This is a paragraph of text that has only</p-first-line>
    one stylesheet applied to it.That style causes the first line to
    be big and purple.No other line will have those styles applied.
</p>
```

如果修改了首行里的文本，只剩前七个词了，那么虚构的 `</p-first-line>` 会向前移到 that 后面。如果用户增大或减少了字号，抑或拉宽或缩窄了浏览器窗口，导致文本的宽度有变，首行中的词数随之增多或减少，浏览器能自动调整，只把当前显示的首行里的文本显示为紫色大字。

首行的长度受诸多因素影响，例如字号、字符间距、父级容器的宽度等。对特定的标记和首行宽度而言，首行可能会在某个嵌套的元素中间结束。如果首行把嵌套的元素（例如 em 或超链接）破开了，::first-line 定义的样式只会应用到嵌套元素显示在首行里的那部分上了。

<br>

## 3. 对 ::first-letter 和 ::first-line 的限制

目前，::first-letter 和 ::first-line 伪元素只能应用到块级元素上，例如标题或段落，不能应用到行内元素上，例如超链接。::first-line 和 ::first-letter 样式中可以使用的 CSS 属性也有限制，见下表。

| ::first-letter   | ::first-line     |
| ---------------- | ---------------- |
| 所有字体属性     | 所有字体属性     |
| 所有背景属性     | 所有背景属性     |
| 所有文本装饰属性 | 所有外边距属性   |
| 所有行内排版属性 | 所有内边距属性   |
| 所有行内布局属性 | 所有边框属性     |
| 所有边框属性     | 所有文本装饰属性 |
| box-shadow       | 所有行内排版属性 |
| color            | color            |
| opacity          | opacity          |

<br>

## 4. 装饰（或创建）前置和后置内容元素

假设根据排版效果，需要在 h2 元素前面加上两个银色的方括号：

```css
h2::before {
    content: "]]";
    color: silver;
}
```

使用 CSS 可以插入生成的内容，生成的这些内容可以直接使用 ::before 和 ::after 伪元素装饰。下图是一个例子。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/%E5%9C%A8%E5%85%83%E7%B4%A0%E5%89%8D%E9%9D%A2%E6%8F%92%E5%85%A5%E5%86%85%E5%AE%B9.png)

这个伪元素用于插入并装饰生成的内容。若想把内容放在元素的后面，使用 ::after 伪元素。例如，可以在文档末尾加上结束语：

```css
body::after {
    content: "The End.";
}
```

生成的内容是一个单独的话题，第 15 章将对此进行更为深入的介绍（还包括 ::before 和 ::after 的详细说明）。



























 









 





​                                              
