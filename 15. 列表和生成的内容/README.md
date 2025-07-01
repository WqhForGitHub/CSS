# 1. 列表

从某种意义上讲，非叙述性文本都可以视作列表。人口普查数据、太阳系、家谱、菜单，甚至你的所有朋友都可以使用列表或列表的列表表示。列表的多样性决定了它的重要性，不过在列表样式方面 CSS 能做的还不够丰富，真是遗憾。

调整列表样式最简单的（也是支持最广泛的）方式是改变记号类型。在无序列表中，记号指显示在每个项目前面的圆点。在有序列表中，记号可以是字母、数字或其他计数系统中的符号。记号甚至还可以用图像代替。这些都通过不同的列表样式属性实现。

<br>

## 1. 列表的类型

若想改变列表项目所用的记号类型，使用 list-style-type 属性。

```css
list-style-type

取值：disc | circle | square | disclosure-open | disclosure-closed | decimal | decimal-leading-zero | arabic-indic | armenian | upper-armenian | lower-armenian | bengali | cambodian | khmer | cjk-decimal | devanagari | gujarati | grumukhi | georgian | hebrew | kannada | lao | malayalam | mongolian | myanmar | oritya | persian | lower-roman | upper-roman | tamil | telugu | thai | tibetan | lower-alpha | lower-latin | upper-alpha | upper-latin | cjk-earthly-branch | cjk-heavenly-stem | lower-greek | hiragama | hiragama-iroha | latakana | katakana-iroha | japanese-informal | japanese-formal | korean-hangul-formal | korean-hanja-informal | korean-hanja-formal | simp-chinese-informal | simp-chinese-formal | trad-chinese-informal | trad-chinese-formal | ethiopic-numeric | <string> | none | inherit
初始值：disc
适用于：display 属性的值为 list-item 的元素
继承性：否
计算值：指定的值
```

是的，可用的关键字可真不少，而这还不是 list-style-type 属性整个历史上可用的全部值。有些值，例如 urdu 和 hangul-consonant，只有那么一两个浏览器支持。较旧的值没有得到广泛支持，而上面列出的值基本上所有浏览器都支持。下图给出了一些例子。

list-style-type 属性，以及与列表相关的其他所有属性都只能应用到 display 属性的值为 list-item 的元素上，但是 CSS 并不区分有序列表和无序列表的项目。因此，可以让有序列表使用圆点，而非数字。其实，list-style-type 属性的默认值就是 disc，因此自然地，你会认为，如未明确声明未其他值，所有列表（不管有序还是无序）中的项目都讲使用圆点做记号。这是符合逻辑的判断，但事实上，使用什么记号是由用户代理决定的。即使用户代理没有预先定义 ol { list-style-type: decimal; } 这样的规则，也可能会禁止把有序的记号应用到无序列表上，反之亦然。一定要小心，不要依赖这个特性。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E5%88%97%E8%A1%A8%E6%A0%B7%E5%BC%8F%E7%B1%BB%E5%9E%8B%E7%A4%BA%E4%BE%8B.png)

<br>

以前，CSS2.1 规定，用户代理应该把无法识别的关键字值视为 decimal。截至 2017 年年初，CSSListandCountersModule 没有严格规定，而是说可以回落到 disc 或 none（例如，如果把有序列表类型应用到无序列表上，Chrome 默认为 none）。

如果不想显示记号，应该使用的值是 none。none 的作用是禁止在本该显示记号的位置上出现任何内容，不过却不阻断有序列表的计数。因此，下述标记将得到如下图所示的结果：

```css
ol li {
    list-style-type: decimal;
}

li.off {
    list-style-type: none;
}
```

```html
<ol>
    <li>Item the first
    <li class="off">Item the second
    <li>Item the third
    <li class="off">Item the fourth
    <li>Item the fifth
</ol>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E7%A6%81%E6%AD%A2%E6%98%BE%E7%A4%BA%E5%88%97%E8%A1%A8%E9%A1%B9%E7%9B%AE%E7%9A%84%E8%AE%B0%E5%8F%B7.png)

list-style-type 的值是继承的，因此如果希望嵌套的列表使用不同的记号，要分别定义。你可能还要为嵌套的列表显式声明样式，因为用户代理的样式表中可能已有定义。假如用户代理定义了下述样式：

```css
ul {
    list-style-type: disc;
}

ul ul {
    list-style-type: circle;
}

ul ul ul {
    list-style-type: square;
}
```

如果是这样，实际上的确可能是这样，或者是类似的样式，就必须自己声明样式，覆盖用户代理的样式。仅使用继承的值可能无法满足你的需求。

<br>

### 字符串记号

CSS 还允许创作人员指定字符串值为列表的记号。这样，只要能从键盘上打出来的字符都能用作记号，只要你不介意列表中的每个记号都使用相同的字符串就行。下述样式得到的结果如下图所示：

```css
.list01 {list-style-type: "%";}
.list02 {list-style-type: "Hi! ";}
.list03 {list-style-type: "†";}
.list04 {list-style-type: "⌘";}
.list05 {list-style-type: "🤔";}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%AE%B0%E5%8F%B7%E7%A4%BA%E4%BE%8B.png)

>截至 2017 年年末，只有 Firefox 族浏览器支持字符串记号。

<br>

## 2. 列表项目图像

有时，常规的文本记号还不够。你可能想使用图像设定记号，这可以利用 list-style-image 属性实现。

```css
list-style-image

取值：<uri> | <image> | none | inherit
初始值：none
适用于：display 属性的值为 list-item 的元素
继承性：是
计算值：<uri> 值计算为绝对 URI，否则为 none
```

这个属性的用法如下：

```css
ul li {
    list-style-image: url(ohio.gif);
}
```

是的，就这么简单。提供一个 url() 值就把记号换成图像了，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E4%BD%BF%E7%94%A8%E5%9B%BE%E5%83%8F%E4%BD%9C%E4%B8%BA%E8%AE%B0%E5%8F%B7.png)

<br>

当然，选择图像时要小心，否则就会出现下图那样难看的结果：

```css
ul li {
    list-style-image: url(big-ohio.gif);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E4%BD%BF%E7%94%A8%E7%89%B9%E5%88%AB%E5%A4%A7%E7%9A%84%E5%9B%BE%E5%83%8F%E4%BD%9C%E4%B8%BA%E8%AE%B0%E5%8F%B7.png)

<br>

一般来说，最好提供一个后备记号类型，以防图像无法加载、损坏了，或者用户代理无法显示所用的格式。具体方法是，为列表再声明一个 list-style-type 属性：

```css
ul li {
    list-style-image: url(ohio.png);
    list-style-type: square;
}
```

使用 list-style-image 时还可以把值设为默认的 none。这是个好习惯，因为 list-style-image 是继承的，因此嵌套列表也将使用指定的图像作为记号，除非明确设定不这么做：

```css
ul {
    list-style-image: url(ohio.gif);
    list-style-type: square;
}

ul ul {
    list-style-image: none;
}
```

嵌套的列表继承 square 类型的记号，而且设定不使用图像，因此所用的记号为实心方，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E5%9C%A8%E5%AD%90%E5%88%97%E8%A1%A8%E4%B8%AD%E7%A6%81%E7%94%A8%E5%9B%BE%E5%83%8F%E8%AE%B0%E5%8F%B7.png)

>注意，现实中可能不会得到这样的结果，因为用户代理或许已经为 ul ul 定义了 list-style-type，从而导致 square 值不被继承。实际得到的记号可能是空心圆、圆点或其他符号。

<br>

list-style-image 的值可以是任何图像值，包括渐变图像。因此，下述样式将得到如下图所示的结果。

```css
.list01 {
    list-style-image: radial-gradient(closest-side, orange, orange 60%, blue 60%, blue 95%, transparent);
}

.list02 {
    list-style-image: linear-gradient(45deg, red, red 50%, orange 50%, orange);
}

.list03 {
    list-style-image: repeating-linear-gradient(-45deg, red, red 1px, yellow 1px, yellow 3px);
}

.list04 {
    list-style-image: radial-gradient(farthest-side at bottom right, lightblue, lightblue 50%, violet, indigo, blue, green, yellow, orange, red, lightblue);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E6%B8%90%E5%8F%98%E5%88%97%E8%A1%A8%E8%AE%B0%E5%8F%B7.png)

渐变记号的一个缺点是尺寸特别小。这个尺寸不受 CSS 的控制，浏览器认为什么尺寸合适就使用什么尺寸。记号的尺寸受字号等的影响，随列表项目的内容而缩放，但也只此而已。

>CSS 提供了直接装饰列表记号的方式，即 ::marker 伪元素，但截至 2017 年年初，没有任何用户代理支持。

>截至 2017 年年初，只有 WebKit/Blink 族浏览器支持使用渐变图像值作为列表记号。

<br>

## 3. 列表记号的位置

使用 CSS 还可以影响列表项目的一个外观：在列表项目内容的外部还是内部显示记号。记号的位置使用 list-style-position 属性设定。

```css
list-style-position

取值：inside | outside | inherit
初始值：outside
适用于：display 属性的值为 list-item 的元素
继承性：是
计算值：指定的值
```

设为 outside 时（默认值），记号在 Web 诞生以来的位置上。如果想把记号向内推一点，离内容更近，把 list-style-position 的值设为 inside。此时，记号放在列表项目的内容之内。规范没有规定具体方式，下图是其中一种可能。

```css
li.first {
    list-style-position: inside;
}

li.second {
    list-style-position: outside;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E6%8A%8A%E8%AE%B0%E5%8F%B7%E6%94%BE%E5%9C%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E7%9B%AE%E7%9A%84%E5%86%85%E9%83%A8%E5%92%8C%E5%A4%96%E9%83%A8.png)

实际处理中，位置设为 inside 的记号好似一个插在列表项目内容开头的行内元素。但这并不是说记号真的是行内元素，放在内部的记号是无法独立于其他内容直接装饰的，除非把其他内容放在 span 等元素中。只是从布局的角度看，其表现像是行内元素而已。

<br>

## 4. 列表样式的简写属性

简单起见，前面三个列表样式属性可以合并为一个属性：list-style。

```css
list-style

取值：[ <list-style-type> || <list-style-image> || <list-style-position> ] | inherit
初始值：参见各单独属性
适用于：display 属性的值为 list-item 的元素
继承性：是
计算值：参见各单独属性
```

例如：

```css
li {
    list-style: url(ohio.gif) square inside;
}
```

从下图中可以看到，三个值都应用到列表项目上了。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E4%B8%80%E6%AC%A1%E8%AE%BE%E5%AE%9A%E4%B8%89%E4%B8%AA%E5%80%BC.png)

<br>

list-style 的值可以按任何顺序列出，而且任何一个值都可以省略。只要有一个值，其余的都将使用默认值。例如，下面两个规则得到的结果是一样的：

```css
li.norm {
    list-style: url(img42.gif);
}

li.odd {
    list-style: url(img42.gif) disc outside; /* 作用相同 */
}
```

前面的规则也会以同样的方式被覆盖。例如：

```css
li {
    list-style-type: square;
}

li {
    list-style: url(img42.gif);
}

li {
    list-style: url(img42.gif) disc outside; /* 作用相同 */
}
```

结果与上图一样，因为蕴含的 list-style-type 值是 disc，它将把前面声明的 square 覆盖，第三个规则中显式声明的 disc 值也将把它覆盖。

<br>

## 5. 列表的布局

了解过如何装饰列表记号之后，我们来看看列表在不同浏览器中是如何排布的。先看没有标记，也没有放入列表的三个列表项目，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E4%B8%89%E4%B8%AA%E5%88%97%E8%A1%A8%E9%A1%B9%E7%9B%AE.png)

<br>

四周的边框表明，列表项目本质上是类似块级的元素。其实，list-item 值生成的就是块级框。现在，加上记号，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E5%8A%A0%E4%B8%8A%E8%AE%B0%E5%8F%B7.png)

<br>

记号与列表项目内容之间的距离不是 CSS 定义的，CSS 并未提供控制这一距离的方式。

放在列表项目内部外部的记号对其他元素的布局没有影响，而且对列表项目自身的布局也没有影响。记号只是悬挂在内容边界的外侧，与之相隔一定的距离，不管内容的边界在何处，记号始终随之而动。记号好像相对列表项目的内容绝对定位一样，比如 position: absolute; left: -1.5em。当记号在列表项目的内部时，像是放在内容开头的行内元素。

目前，我们还没有考虑真正的列表容器。也就是说，图中没有标出 ul 或 ol 元素。下面加上，如下图所示（图中的虚线边框）。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E5%8A%A0%E4%B8%8A%E5%88%97%E8%A1%A8%E5%AE%B9%E5%99%A8.png)

与列表项目一样，列表元素也是块级框，包含所有后代元素。然而，可以看到，记号不仅在列表元素的内容外部，还在列表元素内容区的外部。列表通常具有的缩进还未指定。

截至写作本书时，多数浏览器都会为外层的列表元素设定内边距或外边距，缩进显示列表项目。例如，用户代理可能会应用下面这样的规则：

```css
ul, ol {
    margin-left: 40px;
}
```

这是 Internet Explorer 和 Opera 使用的基本规则。而多数基于 Gecko 的浏览器使用类似下面的规则：

```css
ul, ol {
    padding-left: 40px;
}
```

不能说这两种做法是错的，但是若想去掉列表项目的缩进，二者的差异可能导致一些问题。下图展示了两种方式的区别。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E4%BD%BF%E7%94%A8%E5%A4%96%E8%BE%B9%E8%B7%9D%E5%92%8C%E5%86%85%E8%BE%B9%E8%B7%9D%E5%AE%9E%E7%8E%B0%E7%9A%84%E7%BC%A9%E8%BF%9B.png)

>40px 这个距离是早期 Web 浏览器的遗留，那时缩进列表用的是像素值（块级引用的缩进量也是这么多）。更合适的缩进量可能是 2.5em，因为这样缩进能随字号的变化而变。

<br>

若想改变列表的缩进距离，笔者强烈建议同时指定内边距和外边距，从而保证跨浏览器兼容性。例如，如果想使用内边距缩进列表，使用下述规则：

```css
ul {
    margin-left: 0;
    padding-left: 1em;
}
```

如果想用外边距，编写类似下面的规则：

```css
ul {
    margin-left: 1em;
    padding-left: 0;
}
```

不管使用哪种方法，都要记住一点：记号的位置是相对列表项目的内容而定的，因此可能会悬挂在文档主体文本之外，甚至超出浏览器窗口的边界。使用特别大的图像或特别长的文本字符串作为列表记号就能看到后果，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E5%A4%A7%E8%AE%B0%E5%8F%B7%E5%AF%B9%E5%88%97%E8%A1%A8%E5%B8%83%E5%B1%80%E7%9A%84%E5%BD%B1%E5%93%8D.png)

<br>

>列表记号的位置
>
>很多创作人员都希望能控制记号与列表项目内容之间的距离。CSS2 提供了相关的方式，包括 marker-offset 属性和 display 属性的 marker 值。从具体的实现来看，这些并不是最佳的方式，因此 CSS2.1 把这些特性删除了。
>
>截至 2017 年年初，CSS3 Listsand Counters 模块的草案定义了一种更为简洁的方式，即 ::marker 伪元素。假如在变为推荐标准之前没有修改这个模块，有一天你就可以编写这样的规则：li::marker { margin-right: 0.125em; color: goldenrod; }

<br>

# 2. 生成的内容

CSS 定义了生成内容的方式。这样的内容通过 CSS 插入，而不通过标记或内容表示。

例如，列表记号就是生成的内容。在列表项目的标记中没有任何内容是表示记号的，而且创作人员也没有在文档的内容中编写记号。记号是由浏览器自动生成的。对无序列表来说，记号是某种符号，例如空心圆、圆点或实心方框。而在有序列表中，记号默认是递增的计数器，每多一个列表项目加一（如前面几节所属，记号还可以换成图像或符号）。

若想知道如何影响列表记号，定制有序列表（或其他元素）的计数方式，必须先学习生成内容的基本知识。

<br>

## 1. 插入生成的内容

生成的内容使用 ::before 和 ::after 伪元素插入文档。这两个伪元素把 content 属性（参见下一节）指定的内容插入元素的内容之前或之后。

例如，打印文档时可能想在每个超链接前面加上文本（link）。这个需求可通过下述规则实现，效果见下图：

```css
a[href]::before {
    content: "(link)";
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E7%94%9F%E6%88%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9.png)

<br>

注意，生成的内容与元素的内容之间没有空格。这是因为前例中的内容里没有空格。如果想在生成的内容和真正的内容之间加入一个空格，要像下面这样修改声明：

```css
a[href]::before {
    content: "(link) ";
}
```

这是个很小的差异，但是却有较大的影响。

类似地，你可能想在指向 PDF 文档的链接末尾插入一个小图标。实现这个需求的规则如下：

```css
a.pdf-doc::after {
    content: url(pdf-doc-icon.gif);
}
```

如果想进一步装饰这样的链接，例如在四周添加边框，需要再编写一个规则：

```css
a.pdf-doc {
    border: 1px solid gray;
}
```

这两个规则得到的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E7%94%9F%E6%88%90%E5%9B%BE%E6%A0%87.png)<br>

注意，链接的边框一直延展到生成的内容周围，就像上图中链接的下划线会延伸到 “（link）” 文本下方一样。这是因为生成的内容位于元素框的内部。从 CSS 2.1 开始，除了列表记号，无法把生成的内容放在元素框的外部。

你可能以为通过定位能解决这个问题，但是 CSS2 和 CSS2.1 明确禁止浮动或定位 ::before 和 ::after。列表样式相关的属性，以及表格相关的属性也禁止使用。此外，还有下述限制：

* 如果 ::before 或 ::after 选择符的目标是块级元素，那么 display 属性的值只能为 none、inline、block 或 marker。其他值都当作 block。
* 如果 ::before 或 ::after 选择符的目标是行内元素，那么 display 属性的值只能为 none 或 inline。其他值都当作 inline。

<br>

例如：

```css
em::after {
    content: " (!) ";
    display: block;
}
```

因为 em 是行内元素，所以生成的内容不能设为块级。因此，block 值将被重置为 inline。然而，在下述示例中，生成的内容可以设为块级的，因为目标元素也是块级的：

```css
h1::before {
    content: "New Section";
    display: block;
    color: gray;
}
```

结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E7%94%9F%E6%88%90%E5%9D%97%E7%BA%A7%E5%86%85%E5%AE%B9.png)

<br>

生成的内容比较特别的一点是，它会从依附的元素上继承属性值。因此，对下述规则来说，生成的文本将是绿色，与段落中内容的颜色相同：

```css
p {
    color: green;
}

p::before {
    content: "::: ";
}
```

如果想让生成的内容显示为紫色，一个简单的声明就够了：

```css
p::before {
    content: "::: ";
    color: purple;
}
```

当然，只有能够被继承的属性才会继承。特别指出这一点是因为这会影响实现某些效果的方式。请看下述规则：

```css
h1 {
    border-top: 3px solid black;
    padding-top: 0.25em;
}

h1::before {
    content: "New Section";
    display: block;
    color: gray;
    border-bottom: 1px dotted black;
    margin-bottom: 0.5em;
}
```

由于生成的内容放在 h1 的元素框内部，因此生成的文本将出现在元素框的上边框下方。此外，生成的文本也在内边距内侧，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E6%8A%8A%E4%BD%8D%E7%BD%AE%E8%80%83%E8%99%91%E5%9C%A8%E5%86%85.png)

<br>

我们为生成的内容（已设为块级）设定了下外边距，因此元素的内容将向下移动 0.5em。不管怎么看，这个示例中生成的内容把 h1 元素分成了两半：生成的内容框和真正的内容框。这是因为我们为生成的内容声明了 display: block。如果改成 display: inline，结果将变成下图那样：

```css
h1 {
    border-top: 3px solid black;
    padding-top: 0.25em;
}

h1::before {
    content: "New Section";
    display: inline;
    color: gray;
    border-bottom: 1px dotted black;
    margin-bottom: 0.5em;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E6%8A%8A%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9%E6%94%B9%E6%88%90%E8%A1%8C%E5%86%85%E6%A1%86.png)

注意边框的位置，不过内边距还在。其实生成的内容的下外边距也在，只不过因为生成的是行内框，所以外边距对行高没有影响，因此外边距也就没有视觉效果。

掌握生成内容的基础知识之后，接下来学习如何指定生成的内容。

<br>

## 2. 指定内容

为了生成内容，肯定需要一种方式描述要生成什么内容。前面已经见过，生成的内容使用 content 属性指定，但是这个属性的功能比前文所见的要强大很多。

```css
content

取值：normal | [ <string> | <uri> | <counter> | attr(<identifier>) | open-quote | close-quote | no-open-quote | no-close-quote ]+ | inherit
初始值：normal
适用于：::before 和 ::after 伪元素
继承性：否
计算值：<uri> 值计算为绝对 URI，引用的属性计算为最终字符串，否则为指定的值
```

前文已经用过字符串和 URI 值，计数器在本章后文介绍。下面先深入讨论一下字符串和 URI，然后再将 attr() 和引号。

字符串值显示为字面量，即使其中包含某种标记也是如此。因此，下述规则将把字符串原封不动地插入文档，如下图所示：

```css
h2::before {
    content: "<em>&para;</em>";
    color: gray;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8E%9F%E5%B0%81%E4%B8%8D%E5%8A%A8%E5%9C%B0%E6%98%BE%E7%A4%BA%E5%87%BA%E6%9D%A5.png)

<br>

这意味着，如果想在生成的内容中换行，不能使用 `<br>`。正确的做法是使用字符串 \A，这是 CSS 表示换行符的方式（源自 Unicode 换行符，其十六进制表示为 A）。相反，如果一个较长的字符串值分为多行编写，要使用 \ 字符转义换行符。具体做法如下述规则所示，结果见下图：

```css
h2::before {
    content: "We insert this text before all H2 elements because \
        it is a good idea to show how these things work. It may be a bit long \
        but the point should be clearly made.  ";
    color: gray;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E5%8E%BB%E9%99%A4%E6%8F%92%E5%85%A5%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E6%8D%A2%E8%A1%8C%E7%AC%A6.png)

此外，还可以使用转义符引用十六进制的 Unicode 值，例如 \00AB。

>写作本书时，插入转义的内容（例如 \A 和 \00AB）尚未得到广泛支持，即便是一定程序上支持生成的内容的浏览器也是如此。

值为 URI 时，指向的外部资源（图像、电影、声音片段，或者用户代理支持的其他媒体文件）将插入文档中的恰当位置。如果出于什么原因，用户代理不支持引用的资源，例如在不支持 SVG 的浏览器中插入 SVG 图像，或者在打印的文档中插入一部电影，那么用户代理要完全忽略资源，什么也不插入。

<br>

### 插入属性值

有时，你可能想把元素的属性值显示在文档中。举个简单的例子，可以像下面这样把每个链接的 href 属性值放在链接后面：

```css
a[href]::after {
    content: attr(href);
}
```

同样，这会导致生成的内容与真正的内容拥挤在一起。为了解决这个问题，可以在声明中添加一些字符串值，如下所示，结果见下图所示：

```css
a[href]::after {
    content: " [" attr(href) "] ";
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E6%8F%92%E5%85%A5%20URL.png)

<br>

打印文档所用的样式就可以这么做。任何属性的值都可以作为生成的内容插入文档，例如 alt 文本、class 或 id 的值等。创作人员可以像下面这样把块级引用的引文信息列出来：

```css
blockquote::after {
    content: "(" attr(cite) ")";
    display: block;
    text-align: right;
    font-style: italic;
}
```

再复杂一些，还可以把旧文档的文本颜色和链接颜色值显示出来：

```css
body::before {
    content: "Text: " attr(text) " | Link: " attr(link) " | Visited: " attr(vlink)" | Active: " attr(alink);
    display: block;
    padding: 0.33em;
    border: 1px solid;
    text-align: center;
    color: red;
}
```

注意，如果引用的属性不存在，所在的位置将显示空字符串。下图就是这样，这是把前面的规则应用到 body 元素没有 alink 属性的文档上得到的结果。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E8%B7%B3%E8%BF%87%E7%BC%BA%E5%B0%91%E7%9A%84%E5%B1%9E%E6%80%A7.png)

可以看到，插入文档的文本是 "Active: "（包括末尾的空格），但是后面没有内容了。这样就保证了，仅当属性的值存在时才将其插入文档。

>CSS2.x 规定，对属性的引用返回的是未经解析的字符串。因此，如果属性的值中有标记或字符实体，将原封不动显示出来。

<br>

### 生成引号

引号是一种特殊形式的生成的内容，CSS2.x 为管理引号及其嵌套行为提供了强大的功能。引号使用 quotes 属性和 open-quote 等值生成。

```css
quotes

取值：[<string> <string>]+ | none | inherit
初始值：各用户代理有所不同
适用于：所有元素
继承性：是
计算值：指定的值
```

研究取值句法之后你会发现，除了关键字 none 和 inherit 之外，唯一有效的值是一对或多对字符串。字符串对中的第一个字符串定义开始引号，第二个字符串定义结束引号。因此，下面两个声明中只有第一个声明是有效的：

```css
quotes: '"' "'"; /* 有效 */
quotes: '"'; /* 无效 */
```

第一个规则还说明了如何在字符串两侧使用字符串的引号：双引号两侧用单引号，单引号两侧则使用双引号。

来看一个简单的例子。假设你在创建一个 XML 格式，用于存储自己喜欢的名言。其中一个条目如下所示：

```xml
<quotation>
	<quote>I hate quotations.</quote>
    <quotee></quotee>
</quotation>
```

为了以一种恰当的方式表示数据，可以应用下述规则，得到的结果如下图所示：

```css
quotation {
    display: block;
}

quote {
    quotes: '"' '""';
}

quote::before {
    content: open-quote;
}

quote::after {
    content: close-quote;
}

quotee::before {
    content: " (";
}

quotee::after {
    content: ")";
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E6%8F%92%E5%85%A5%E5%BC%95%E5%8F%B7%E5%92%8C%E5%85%B6%E4%BB%96%E5%86%85%E5%AE%B9.png)

open-quote 和 close-quote 两个值的作用是在恰当的位置上插入正确的引号（因为不同的语言使用不同的引号）。插入的引号来自 quotes 属性的值。因此，在这里在开头和结尾插入的都是双引号。

quotes 可以定义任意多个嵌套层级使用的引号。例如，英语常见的做法是先用双引号，然后在下一层中使用单引号。弯引号可以使用下述规则实现：

```css
quotation {
    display: block;
}

quote {
    quotes: "\201C" "\201D" "\2018" "\2019";
}

quote::before, q::before {
    content: open-quote;
}

quote::after, q::after {
    content: close-quote;
}
```

把这些规则应用到下述标记上得到的结果如下图所示。

```xml
<quotation>
 <quote> In the beginning, there was nothing. And God said: <q>Let there
  be light!</q> And there was still nothing, but you could see it.</quote>
</quotation>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC15%E7%AB%A0%EF%BC%9A%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9/%E5%B5%8C%E5%A5%97%E7%9A%84%E5%BC%AF%E5%BC%95%E5%8F%B7.png)

如果引号嵌套的层级比定义的引号对多，后续的层级都使用最后一对引号。因此，如果把下述规则应用到上图中的标记上，内层使用的引号将与外层一样：

```css
quote {
    quotes: '\201C' '\201D';
}
```

>上述规则使用的是弯引号的十六进制 Unicode 码位。如果你编写的 CSS 使用 UTF-8 字符编码（确实应该这么做），那么就可以不像前面的示例那样转义十六进制码位，而是直接输入弯引号字符。

使用生成的引号还能实现另一种常见的排版效果。如果引用的文本分为多段，每一段结尾处的引号通常不显示（最后一段除外），只显示段落开头的引号。这个效果可以使用 no-close-quote 实现：

```css
blockquote {
    quotes: '"' '"' '"' '"' '"' '"';
}

blockquote p::before {
    content: open-quote;
}

blockquote p::after {
    content: no-close-quote;
}
```

此时，每一段的开头有个双引号，但是结尾处没有引号。最后一段也是如此，因此如果想为最后一段添加结束引号，要为最后一段设置类，然后把 ::after 伪元素的内容设为 close-quote。

这个值的重要作用是在不生成引号的基础上减少引用的嵌套层级。正因为如此，每一段的开头才都显示双引号，而不是交替使用单双引号，直到抵达第三段再使用双引号。no-close-quote 在每一段结尾处引用嵌套，因此每一段的开头都位于同一嵌套层级。

这一点尤为重要，因为 CSS2.1 规范指出，引用层深与源文档或格式化结构的嵌套层级无关。也就是说，一旦一个引用层级开始，直至遇到声明了 close-quote 的元素才结束，此时嵌套引用减少一层。

对应地，还有 no-open-quote 关键字，其效果与 no-close-quote 是相反的。这个关键字增加一层嵌套层级，但不生成引号。

<br>

## 3. 计数器

我们对计数器都不陌生。例如，有序列表中列表项目的记号就是计数器。在 CSS1 中，没有办法修改计数器，因为没有这个需要：HTML 为有序列表定义了计数行为，无需多此一举。XML 兴起之后，却需要有一种方法用于定义计数器。然而，CSS2 提供的计数行为不像 HTML 那么简单。两个新属性和 content 的两个新值能实现多数计数格式，包括由多个样式实现的小节计数，例如 "VII.2.c"。

<br>

### 重置和增量

创建计数器的基本过程是先设置计数器的起点，然后增加一定的量。前者使用 counter-reset 属性设置。

```css
counter-reset

取值：[<identifier><integer>?]+ | none | inherit
初始值：各用户代理有所不同
适用于：所有元素
继承性：否
计算值：指定的值
```

计数器标识符是由创作人员创建的标注。例如，可以把小节计数器命名为 subsection、subsec、ss 或 bob。重置（或递增）标识符就能创建标识符。在下述规则中，我们通过重置创建 chapter 计数器：

```css
h1 {
    counter-reset: chapter;
}
```

默认情况下，计数器重置为零。如果想重置为其他数，在标识符后声明：

```css
h1#ch4 {
    counter-reset: Chapter 4;
}
```

使用多个标识符和整数对还可以一次性重置多个标识符。如果缺少整数，默认为零：

```css
h1 {
    counter-reset: Chapter 4 section -1 subsec figure 1;
}
```

从前例可以看出，负值是允许的。把计数器设为 -32768，然后从那里开始计数是完全可行的。

>CSS 没有规定用户代理应该如何处理采用非数字计数格式时的负数值。例如，没有规定显示格式为 upper-alpha 时如何处理计数器中的 -5 值。





















































