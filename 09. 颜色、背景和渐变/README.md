# 1. 颜色

对网页的设计要提前做好规划，这样你才能有个粗略的整体构思，尤其要定好配色。如果你打算以黄色显示超链接，就要考虑会不会与文档中某部分的背景色冲突？如果使用过多的颜色，用户会不会看花眼（提示，会的）？如果把超链接的默认颜色换掉了，用户还能不能分辨哪些是链接（例如，如果以相同的颜色显示常规文本和超链接文本，用户就非常难以发现链接。如果未加下划线，用户几乎不可能找到链接）？

css 可以为任何元素设置前景色和背景色。为了彻底弄明白，你要知道元素的前景中有什么、没有什么。一般来说，前景指元素的文本，不过也包括元素四周的边框。因此，有两种方式能直接影响元素的前景色。一是使用 color 属性，二是使用一些边框属性设置边框颜色。

## 1. 前景色

设置元素前景色最简单的方法是使用 color 属性。

```css
color

取值：<color>
初始值：由用户代理指定
适用于：所有元素
计算值：指定的值
继承性：是
动画性：是
```

这个属性的值是一个颜色值，任何有效的类型都可以，例如 #FFCC00 或 rgba(100%, 80%, 0%, 0.5)。

对非置换元素来说，例如段落或 em 元素，color 设定元素中文本的颜色。下述代码得到的结果如下图所示。

```html
<p style="color: gray;">This paragraph has a gray foreground.</p>
<p>This paragraph has the default foreground.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%A3%B0%E6%98%8E%E7%9A%84%E9%A2%9C%E8%89%B2%E5%92%8C%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A2%9C%E8%89%B2.png)

在上图中，默认的前景色是黑色。但不是所有情况下都是如此，用户可能会在浏览器（或其他用户代理）中把默认色设为其他颜色。如果浏览器的默认文本颜色是 green，那么上述示例中的第二段将显示为绿色，而非黑色。但是第一段仍为灰色。

当然，这只是基本的操作，color 的用途不仅限于此。有些段落中的文本可能是提醒用户有潜在的问题。为了突出显示这样的文本，或许你会决定使用红色。此时，只需为每个这样的段落设定 warn 类（`<p class="warn">`），然后应用下述规则：

```css
p.warn {
    color: red;
}
```

在这个文档中，你可能会想让提醒段落中未访问的超链接显示为绿色：

```css
p.warn {
    color: red;
}

p.warn a:link {
    color: green;
}
```

后来，你又改主意了，决定提醒文本应该显示为暗红色，其中的未访问链接应该显示为中紫色。这没什么，我们只需把上述规则改成下面这样，结果如下图所示。

```css
p.warn {
    color: #600;
}

p.warn a:link {
    color: #400040;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%94%B9%E5%8F%98%E9%A2%9C%E8%89%B2.png)

利用 color 属性还可以让特定类型的文本吸引注意力。例如，粗体文本虽然已经够突出了，但是可以使用其他颜色显示，进一步增强效果，例如红褐色：

```css
b, strong {
    color: maroon;
}
```

而后，你又决定把类为 highlight 的单元格中的文本设为淡黄色：

```css
td.highlight {
    color: #FF9;
}
```

如果不为文本设置背景色，用户自定义的颜色可能与你设置的颜色不协调。例如，如果用户把浏览器的背景设为浅黄色，例如 #FFC，那么前述规则的结果将是浅黄色的背景上显示淡黄色的文本。即便背景仍是默认的白色，淡黄色的文本也看不太清。因此，一版建议同时设定前景色和背景色（稍后讨论背景色）。

<br>

## 2. 对边框的影响

color 属性的值将对元素四周的边框产生影响。假设你声明了下述样式，结果如下图所示。

```css
p.aside {
    color: gray;
    border-style: solid;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%BE%B9%E6%A1%86%E9%A2%9C%E8%89%B2%E5%8F%96%E8%87%AA%E5%86%85%E5%AE%B9%E7%9A%84%E9%A2%9C%E8%89%B2.png)

`<p class="aside">` 元素的文本为灰色，边框为中等宽度的灰色实线。这是因为前景色默认应用到边框上。如果愿意，可以使用 border-color 属性覆盖：

```css
p.aside {
    color: gray;
    border-style: solid;
    border-color: black;
}
```

这个规则把文本设为灰色，而边框依然为黑色。border-color 属性的值始终覆盖 color 属性的值。

边框采用前景色行为的根源在于一个特殊的颜色关键字，即 currentColor。元素的 currentColor 值始终未 color 属性的计算值。因此，用户代理的默认样式中有类似下面的规则：

```css
* {
    border-color: currentColor;
}
```

所以，如果没有为边框设定颜色，这条内置的规则将把 color 的值应用到可见的边框上。然而如果为边框设定了颜色，你指定的颜色将覆盖内置的 currentColor 样式。

鉴于此，你还可以改变图像的前景色。图像色彩纷呈，不受 color 属性的影响，但是可以改变图像四周边框的颜色，而且使用 color 或 border-color 属性都可以。因此，虽然下面两个规则分别应用到类为 type1 和 type2 的两个图像上，但是得到的视觉效果却是一样的，如下图所示。

```css
img.type1 {
    border-style: solid;
    color: gray;
}

img.type2 {
    border-style: solid;
    border-color: gray;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%AE%BE%E7%BD%AE%E5%9B%BE%E5%83%8F%E7%9A%84%E8%BE%B9%E6%A1%86%E9%A2%9C%E8%89%B2.png)

<br>

## 3. 对表单元素的影响

理论上，可以为表单元素设置 color 属性。若想把 select 元素的文本设为深灰色，只需这样声明：

```css
select {
    color: rgb(33%, 33%, 33%);
}
```

这个规则可能还会设定 select 元素四周的边框颜色，可能也不会。到底会不会，完全取决于用户代理及其默认样式。

此外，还可以设置输入元素的前景色，但是如下图所示，所有输入元素都将受到影响，包括文本输入框、单选按钮和复选框。

```css
select {
    color: rgb(33%, 33%, 33%);
}

input {
    color: red;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%BF%AE%E6%94%B9%E8%A1%A8%E5%8D%95%E5%85%83%E7%B4%A0%E7%9A%84%E5%89%8D%E6%99%AF%E8%89%B2.png)

注意，上图中复选框旁的文本依然是黑色。这是因为上述规则只把样式应用到 input 和 select 等元素上，对常规段落等没有影响。

此外注意，复选框中的勾号是黑色的。这是因为某些 web 浏览器通常根据操作系统的用户界面构建表单中的小组件。你见到的复选框和勾号其实不是 HTML 文档中的内容，而是插入文档的用户界面小组件，就像图像一样。其实，表单输入框与图像一样，也是置换元素。理论上，css 无法装饰置换元素的内容。

实际上，这条规则执行得并没那么严格，如上图所示，有些输入元素的文本颜色变了，甚至部分 UI 也变了，而有些输入元素则没变。而且，这不是明文规定，因此在不同的浏览器中并不一致。总之，表单元素的样式极难调整，需要格外小心。

<br>

## 4. 继承颜色

color 属性的定义指出，这个属性会被继承。这是合理的行为，因为你声明 `p { color: gray; }` 的意图是想让段落中的所有文本都显示为灰色，包括强调或粗体等。如果的确想让这些元素显示为不同的颜色，也不难，声明下述规则即可，如下图所示。

```css
em {
    color: red;
}

p {
    color: gray;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%8D%E5%90%8C%E7%9A%84%E5%85%83%E7%B4%A0%E4%BD%BF%E7%94%A8%E4%B8%8D%E5%90%8C%E7%9A%84%E9%A2%9C%E8%89%B2.png)

鉴于此，理论上可以把所有常规文本都设为同一个颜色，例如使用 `body { color: red; }` 设为红色。此时，没有特别声明的文本（例如锚记，它们通常使用不同的颜色）都将显示为红色。

<br>

# 2. 背景

默认情况下，背景区域从前景背后的空间一直延伸到边框的外边界。因此，内容框和内边距都子啊元素的背景中，而边框在背景之上绘制（不过可以使用 css 改变这种行为，方法见后）。

通过 css 可以把元素的背景设为纯色，也可以设为一个或多个图像，甚至还可以设为线性渐变或径向渐变。

## 1. 背景色

元素背景的颜色使用 background-color 属性声明，值为任何有效的颜色值。

```css
background-color

取值：<color>
初始值：transparent
适用于：所有元素
计算值：指定的值
继承性：否
动画性：是
```

如果想让背景色稍微超出元素的文本，加上一些内边距。下述代码得到的结果如下图所示。

```css
p {
    background-color: #AEA;
}

p.padded {
    padding: 1em;
}
```

```html
<p>A paragraph.</p>
<p class="padded">A padded paragraph.</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%86%85%E8%BE%B9%E8%B7%9D%E5%AF%B9%E8%83%8C%E6%99%AF%E7%9A%84%E5%BD%B1%E5%93%8D.png)

几乎任何元素都可以有背景色，从 body 到 em 和 a 等行内元素都不例外。background-color 属性的值不继承。这个属性的默认值为 transparent，这是比较合理的，透过没有背景色的元素将能看到祖辈元素的背景。

你可以这样想：一个透明的塑料标志贴在有纹理的墙上，透过标志可以看到墙，但是看到的并不是标志的背景，而是墙的背景（按 css 的术语来说，是这样）。如果为页面设备了背景，透过文档中没有背景的元素将能看到页面的背景。文档中的元素不继承页面的背景，而是透明的。对背景色来说这貌似无关紧要，但是讨论背景图时便能体现着一点的重要性了。

多数时候无需使用关键字 transparent，因为这就是默认值。然而，transparent 还是有其用处的。假如用户在自己的浏览器中为链接设置了白色的背景。设计页面时，你想把锚记的前景设为白色，因此就不能让锚记的背景为白色。为了实现你的设计，要这么声明：

```css
a {
    color: white;
    background-color: transparent;
}
```

如果没设置背景色，白色的前景加上用户设置的白色背景，链接就完全不可见了。这个例子可能不太恰当，但的确有可能发生。

就是因为创作人员和读者都可以设置样式，所以 css 验证工具才会发出这样的警告：设置 color 时没有设置 background-color。这是在提醒你，创作人员设置的颜色可能与用户设置的颜色冲突，而你没有考虑到这种可能性。出现这样的警告不代表你的样式是无效的，只有错误才会导致验证失败。

<br>

### 特殊效果

结合 color 和 background-color 两个属性可以实现一些有趣的效果：

```css
h1 {
    color: white;
    background-color: rgb(20%, 20%, 20%);
    font-family: Airal, sans-serif;
}
```

结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/h1%20%E5%85%83%E7%B4%A0%E7%9A%84%E5%8F%8D%E7%99%BD%E6%95%88%E6%9E%9C.png)

有多少颜色就有多少组合颜色的方式，多到我无法一一列举。不过我将展示一些例子，权当抛砖引玉。

下述规则则稍微有点复杂，结果如下图所示。

```css
body {
    color: black;
    background-color: white;
}

h1, h2 {
    color: yellow;
    background-color: rgb(0, 51, 0);
}

p {
    color: #555;
}

a:link {
    color: black;
    background-color: silver;
}

a:visited {
    color: gray;
    background-color: white;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%80%E4%B8%AA%E6%9B%B4%E4%B8%BA%E5%A4%8D%E6%9D%82%E7%9A%84%E6%A0%B7%E5%BC%8F%E8%A1%A8%E5%BE%97%E5%88%B0%E7%9A%84%E7%BB%93%E6%9E%9C.png)

想一想，为置换元素（例如一个图像）设置背景将得到怎样的效果？暂且不管有透明部分的图像，例如 GIF87a 或 PNG 格式。假设你想为一个 JPEG 图像添加双色边框。此时，可以像下述规则那样为图像设置背景色，再添加一点内边距，结果如下图所示。

```css
img.twotone {
    background-color: red;
    padding: 5px;
    border: 5px solid gold;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%BD%BF%E7%94%A8%E8%83%8C%E6%99%AF%E5%92%8C%E8%BE%B9%E6%A1%86%E4%B8%BA%E5%9B%BE%E5%83%8F%E6%B7%BB%E5%8A%A0%E5%8F%8C%E8%89%B2%E8%BE%B9%E6%A1%86.png)

严格来说，背景延伸到边框的外边界，但是这个边框是连续的纯色，因为看不见背后的背景。哪怕只有一像素的内边距，在图像及其边框之间都会出现一圈背景，实现内部边框的视觉效果。这种技术延伸一下，利用背景图（例如渐变，本章后文讨论）可以实现更复杂的效果。

>注意，css 提供了十分强大的边框功能，结合背景和内边距是一种不错的技巧，但不一定有实际意义。详情参见第 8 章。

还记得表单输入元素？几乎所有输入元素都是置换元素，用户代理会特别对待它们，把内边距应用到表单元素上往往不到应用到图像上的效果。况且，表单中还有非置换元素（如段落）。与表单输入元素的多数样式一样，添加背景色时要小心测试，如无必要，应尽量避免。

<br>

## 2. 裁剪背景

在前一节我们看到，背景会填满元素的整个背景区域。一直以来，背景一直延伸到边框的外边界，因此如果边框有透明部分的话（例如虚线或点线），透过透明的部分将能看到背景色。如今，有个 css 属性能控制背景延伸到何处。这个属性名为 background-clip。

```css
background-clip

取值：[ border-box | padding-box | content-box | text ]#
初始值：border-box
适用于：所有元素
计算值：声明的值
继承性：否
动画性：否
```

默认值是以前一直采用的行为，即背景绘制区域（由 background-clip 定义）延伸到边框的外边界。背景始终绘制到边框的可见部分背后。

如果设为 padding-box，背景只延伸到内边距区域的外边界（即边框的内边界）。因此，边框背后不绘制背景。而 content-box 值把背景限制在元素的内容区内。

下述规则演示这三个值的效果，结果如下图所示。

```css
div[id] {
    color: navy;
    background: silver;
    padding: 1em;
    border: 5px dashed;
}

#ex01 {
    background-clip: border-box;
}

#ex02 {
    background-clip: padding-box;
}

#ex03 {
    background-clip: content-box;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%89%E4%B8%AA%E4%B8%8E%E6%A1%86%E4%BD%93%E6%9C%89%E5%85%B3%E7%9A%84%E8%83%8C%E6%99%AF%E8%A3%81%E5%89%AA%E6%96%B9%E5%BC%8F.png)

看起来很简单，但是有些问题要注意。首先，background-clip 对根元素（在 HTML 中，可能是 html 或 body 元素，这取决于样式是如何编写的）没有效果。原因与根元素背景的绘制方式有关。

其次，background-clip 与 background-repeat 一起使用时可能得到意料之外的结果。稍后讨论。

最后，background-clip 定义背景的裁剪区域，对其他背景属性没有影响。对纯背景色来说，这没什么深层定义，不过下一节讨论背景图时你就会发现这一点的重要性了。

最后一个值，text，把背景裁剪到元素的文本线条。意即，文本将使用背景填充，文本线条之外的背景是透明的。这是为文本添加纹理的一种简单方式。

不过要注意，若想看到效果，要删除元素的前景色。否则，前景色将遮盖背景。下述规则得到的结果如下图所示。

```css
div {
    color: rgb(255, 0, 0);
    background: rgb(0, 0, 255);
    padding: 0 1em;
    margin: 1.5em 1em;
    border: 5px dashed;
    font-weight: bold;
}

#ex01 {
    background-clip: text;
    color: transparent;
}

#ex02 {
    background-clip: text;
    color: rgba(255, 0, 0, 0.5);
}

#ex03 {
    background-clip: text;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%A3%81%E5%89%AA%E8%83%8C%E6%99%AF%E5%88%B0%E6%96%87%E6%9C%AC%E7%BA%BF%E6%9D%A1.png)

在第一个示例中，前景色是完全透明的，蓝色背景只在文本线条中可见。但是，透过段落中的图像看不到背景，因为图像的前景无法设为 transparent。

上图中的第二个示例把前景色设为 rgba(255, 0, 0, 0.5)，即半透明的红色。这一段文本显示为紫色，因为半透明的红色与背后的蓝色混合了。而边框的颜色由半透明的红色与背后的白色背景混合，得到的是淡红色。

在第三个示例中，前景色是不透明的纯红色。文本和边框都是纯红色，完全没有蓝色背景的影子。之所以看不到，是因为背景裁剪到文本线条了，而前景色又把背景色遮盖了。

裁剪到文本线条的行为适用于所有背景，包括稍后讨论的渐变背景和图像背景。然而要注意，如果由于什么原因导致背景没有出现在文本背后，本该使用背景填充的透明文本将完全不可见。

>截至 2017 年年末，只有 firefox 支持 background-clip: text 这种确切形式。然而，几乎每个浏览器，包括 firefox，都支持 -webkit-background-clip: text。

<br>

## 3. 背景图

介绍完前景色和背景色的基础知识之后，下面开始讨论背景图。在 HTML 3.2 时代，可以通过 BODY 元素的 BACKGROUND 属性为文档设定一个背景图：

```html
<BODY BACKGROUND="bg23.gif>"
```

用户代理遇到这样的元素时会加载 bg23.gif 文件，将其平铺在文档的背景中，而且是沿横向和纵向平铺，占满整个文档背景。这个效果通过 css 可以轻易实现，而且 css 提供的功能远比这复杂得多。先从基础讲起。

### 使用图像

首先，要使用 background-image 属性把图像放到背景中。

```css
background-image

取值：[ <image># | none ]
初始值：none
适用于：所有元素
计算值：指定的值，不过所有 URL 都会变成绝对 URL
继承性：否
动画性：否

<image> = [ <uri> | <linear-gradient> | <repeating-linear-gradient> | <radial-gradient> | <repeating-radial-gradient> ]
```

默认值 none 的效果跟你想的一样，即不把任何图像放到背景中。如果需要背景图，至少要为这个属性提供一个其他可用的值，例如：

```css
body {
    background-image: url(bg23.gif);
}
```

加上其他背景属性的默认值，上述规则把 bg23.gif 图像平铺在文档的背景中，如下图所示。稍后你将看到，这不是唯一的选择。

通常，除了背景图之外最好再指定背景色。具体原因稍后再讲（后文还会说明如何同时指定多个图像，不过我们暂且只关注一个元素有一个背景图的情况）。

任何元素，不管是块级元素还是行内元素，都可以有背景图：

```css
p.starry {
    background-image: url(http://www/site.web/pix/stars.gif);
    color: white;
}

a.grid {
    background-image: url(smallgrid.gif);
}
```

```html
<p class="starry">It's the end fo autumn, which means the stars will be brighter than ever!<a href="join.html" class="grid">Join us</a> for a fabulous evening of planets, starts, nebulae, and more...</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E9%80%9A%E8%BF%87%20css%20%E6%8C%87%E5%AE%9A%E8%83%8C%E6%99%AF%E5%9B%BE.png)

从下图可以看出，我们只为段落指定了背景图，文档中的其他部分都没有。我们可以更深入一层，为行内元素指定背景图，例如下图中的超链接。如果你想看到平铺效果，图像要特别小，毕竟几个字母占不了多少空间。

利用背景图可以实现很多效果。你可以为 strong 元素设定背景图，达到强调作用。你也可以为标题设定背景图，添加波浪图案或小点。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%BA%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E5%92%8C%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E8%AE%BE%E5%AE%9A%E8%83%8C%E6%99%AF%E5%9B%BE.png)

你还可以发挥创意，通过属性选择符指定简单的图标，标出指向 PDF、word 文档、电子邮件地址等非常规资源的链接。下述代码得到的结果如下图所示。

```css
a[href] {
    padding-left: 1em;
    background-repeat: no-repeat;
}

a[href$=".pdf"] {
    background-image: url(/i/pdf-icon.png);
}

a[href$=".doc"] {
    background-image: url(/i/msword-icon.png);
}

a[href^="mailto:"] {
    background-image: url(/i/email-icon.png);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E9%80%9A%E8%BF%87%E8%83%8C%E6%99%AF%E5%9B%BE%E4%B8%BA%E9%93%BE%E6%8E%A5%E6%B7%BB%E5%8A%A0%E5%9B%BE%E6%A0%87.gif)

与 background-color 一样，background-image 也不继承。其实，背景相关的属性都不继承。注意，使用 URL 指定背景图时，url() 中的值与常规的处理方式一样，即相对 URL 相对样式表而言。

<br>

### 背景为什么不继承

前文特别指出，背景不继承。通过背景图可以体现继承背景的恶果。假设背景是继承的，如果为 body 指定一个背景图，那个图像会出现在文档中每个元素的背景中，而且在每个元素中都单独平铺中，如下图所示。

注意，图案在每个元素的左上角都重新出现，包括链接。多数时候，这并不是创作人员想要的效果，因此背景相关的属性不会被继承。如果确实想要这样的效果，可以使用类似下面的规则：

```css
* {
    background-image: url(yinyang.png);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E7%BB%A7%E6%89%BF%E8%83%8C%E6%99%AF%E5%AF%B9%E5%B8%83%E5%B1%80%E7%9A%84%E5%BD%B1%E5%93%8D.png)

此外，也可以使用 inherit 值：

```css
body {
    background-image: url(yinyang.png);
}

* {
    background-image: inherit;
}
```

<br>

### 关于背景的良好实践

图像放在所指定的背景色之上。如果完全平铺 JPEG 或其他不透明的图像类型，这一点其实没什么差别，因为完全平铺的图像占满整个背景区域，无法透过图像看到背景色。然而，有 alpha 通道的图像格式（例如 PNG 或 SVG）可能有部分或整体是透明的。导致图像与背景色融合在一起。此外，倘若无法加载图像，用户代理将使用指定的颜色填充背景。试想一下，对一个本该布满星星的段落，如果无法加载背景图，将是怎样一番情景，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E7%BC%BA%E5%B0%91%E8%83%8C%E6%99%AF%E5%9B%BE%E7%9A%84%E5%90%8E%E6%9E%9C.png)

上图表明，使用背景图时最好同时指定背景色，这样至少能保证文本是可见的：

```css
p.starry {
    background-image: url(http://www.site.web/pix/stars.gif);
    background-color: black;
    color: white;
}

a.grid {
    background-image: url(smallgrid.gif);
}
```

```html
<p class="starry">It's the end of autumn, which means the stars will be brighter than ever!<a href="join.html" class="grid">Join us</a> for a fabulous evening of planets, stars, nebulae, and more...</p>
```

此时，如果星空图像无法加载，背景将填满纯黑色。背景色还会填充背景图中的透明区域，或者由于什么原因没有被背景图覆盖的区域（有几个因素会导致后一种情况，稍后说明）。

<br>

## 4. 背景定位

在元素的背景中放好图像之后，能不能指定图像的具体位置？当然没问题，使用 background-position 属性。

```css
background-position

取值：<position>#
初始值：0% 0%
适用于：块级元素和置换元素
百分数：指代元素或源图像上相应的点（参见百分数值一节）
计算值：指定 <length> 时是绝对长度偏移，否则是百分数值
继承性：否
动画性：是

<position> = [ [ left | center | right | top | bottom | <percentage> | <length> ] | [ left | center | right | <percentage> | <length> ] [ top | center | bottom | <percentage> | <length> ] | [ center | [ left | right ] [ <percentage> | <length> ]?] && [ center | [ top | bottom ] [ <percentage> | <length> ]? ]]
```

取值的句法看起来相当吓人，其实也没多么复杂。之所以变成这样，是因为新技术刚刚出现，实现方式还没定下来，而与此同时还要兼顾旧句法（好吧，是有这么一点吓人）。其实，background-position 十分简单。

>本节将使用 background-repeat: no-repeat 禁止平铺背景图。别急，我们还没讲到 background-repeat 属性。在此之前，也别管它的作用。本节用这个声明限制背景图只出现一次。

例如，我们可以使用下述代码把背景图放在 body 元素的中间，如下图所示。

```css
body {
    background-image: url(yinyang.png);
    background-repeat: no-repeat;
    background-position: center;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%B1%85%E4%B8%AD%E6%98%BE%E7%A4%BA%E5%8D%95%E4%B8%AA%E8%83%8C%E6%99%AF%E5%9B%BE.png)

这里，我们只在背景中放了一个图像，然后通过 background-repeat 属性（下一节讨论）禁止重复。任何背景效果都建立在这一个图像之上。这个图像称为源图像。

源图像的位置由 background-position 属性指定，这个属性的值有多种指定方式。首先是关键字：top、bottom、left、right 和 center。通常，关键字成对出现，但也不尽然（如上例所示）。其次是长度值，例如 50px 或 2cm。最后是百分数值，例如 43%。这几种值对背景图位置的影响稍有不同。

<br>

### 关键字

在各种定位方式中，关键字最好理解。各关键字的值就表明了其作用。例如，top right 把源图像放在元素背景的右上角。以一个小的阴阳符号为例：

```css
p {
    background-image: url(yinyang-sm.png);
    background-repeat: no-repeat;
    background-position: top right;
}
```

这个规则在每个段落背景的右上角放一个源图像，而且没有重复。把位置声明为 right top 得到的结果就是下图那样。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%8A%8A%E8%83%8C%E6%99%AF%E5%9B%BE%E6%94%BE%E5%9C%A8%E6%AE%B5%E8%90%BD%E7%9A%84%E5%8F%B3%E4%B8%8A%E8%A7%92.png)

位置关键字的顺序随意，只要不超过两个：一个指定横向位置，一个指定纵向位置。如果使用两个横向位置关键字（right right）或两个纵向位置关键字（top top），整个值将被忽略。

如果只有一个关键字，另一个假定为 center。因此，如果想把背景图放在各个段落的上部居中位置，只需这样声明：

```css
p {
    background-image: url(yinyang-sm.png);
    background-repeat: no-repeat;
    background-position: top;
}
```

<br>

### 百分数值

百分数值的作用与关键字十分接近，不过行为更加复杂。假设你想使用百分数值居中显示源图像，可以轻易做到：

```css
p {
    background-image: url(chrome.jpg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
}
```

这个规则把源图像的中点与元素背景的中点对齐。也就是说，百分数值同时应用到元素和源图像上。

为了弄清这句话的意思，下面深入分析具体处理过程。把源图像居中显示在元素的背景中时，图像上以 50% 50% 表示的点（中点）与背景区域以相同值表示的点对齐。如果把图像放在 0% 0% 处，图像的左上角与元素背景的左上角对齐。100% 100% 则把源图像的右下角与背景区域的右下角对齐。这几个值及其他值的对齐方式如下图所示。

因此，如果想把源图像放在背景区域横向 1/3、纵向 2/3 位置处，要这样声明规则：

```css
p {
    background-image: url(yinyang-sm.png);
    background-repeat: no-repeat;
    background-position: 33% 66%;
}
```

根据上述规则，源图像上横向距左上角 1/3、纵向距左上角 2/3 处的点将于背景中以相同方式确定的点对齐。注意，第一个百分数值始终是横向偏移。如果把上例中的两个百分数对调，那么源图像将放在横向 2/3、纵向 1/3 处。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%8D%E5%90%8C%E7%9A%84%E7%99%BE%E5%88%86%E6%95%B0%E5%AE%9A%E4%BD%8D%E7%BB%93%E6%9E%9C.png)

如果只提供一个百分数值，那个值将作为横向偏移，而纵向偏移假定为 50%。例如：

```css
p {
    background-image: url(yinyang-sm.png);
    background-repeat: no-repeat;
    background-position: 25%;
}
```

这个源图像放在段落背景的横向 1/4、纵向一半处，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%8F%AA%E5%A3%B0%E6%98%8E%E4%B8%80%E4%B8%AA%E7%99%BE%E5%88%86%E6%95%B0%E5%80%BC%E6%97%B6%E7%BA%B5%E5%90%91%E4%BD%8D%E7%BD%AE%E4%B8%BA50%25.png)

下表是关键字与百分数的对应关系。

| 关键字       | 等效的关键字                   | 等效的百分数     |
| ------------ | ------------------------------ | ---------------- |
| center       | center center                  | 50% 50%<br>50%   |
| right        | center right<br>right center   | 100% 50%<br>100% |
| left         | center left<br>left center     | 0% 50%<br>0%     |
| top          | top center<br>center top       | 50% 0%           |
| bottom       | bottom center<br>center bottom | 50% 100%         |
| top left     | left top                       | 0% 0%            |
| top right    | right top                      | 100% 0%          |
| bottom right | right bottom                   | 100% 100%        |
| bottom left  | left bottom                    | 0% 100%          |

你可能不知道，background-position 的默认值是 0% 0%，其作用与 top left 一样。正是因为这样，在没有指定其他位置时，背景图始终从元素背景的左上角开始平铺。

<br>

### 长度值

最后，位置还可以使用长度值指定。这种情况下，长度值是相对元素背景左上角的偏移。源图像上的偏移是左上角。因此，设为 20px 30px 时，源图像的左上角将相对元素背景的左上角向右偏移 20 像素、向下偏移 30 像素。下述代码得到的结果如下图所示（图中还有其他长度值的示例）。

```css
background-image: url(chrome.jpg);
background-repeat: no-repeat;
background-position: 20px 30px;
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%BD%BF%E7%94%A8%E9%95%BF%E5%BA%A6%E5%80%BC%E5%81%8F%E7%A7%BB%E8%83%8C%E6%99%AF%E5%9B%BE.png)

这与百分数值完全不同，这里计算偏移时是相对左上角而言的。也就是说，是源图像的左上角与 background-position 声明的点对齐。

我们可以结合长度值和百分数值，以两种不同的方式实现各种效果。如果想把源图像放在背景的右边，而且向下偏移 10 像素，可以像下面这样声明规则，得到的结果如下图所示。同样，横向值写在首位。

```css
p {
    background-image: url(yinyang.png);
    background-repeat: no-repeat;
    background-position: 100% 10px;
    border: 1px dotted gray;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%B7%B7%E7%94%A8%E7%99%BE%E5%88%86%E6%95%B0%E5%80%BC%E5%92%8C%E9%95%BF%E5%BA%A6%E5%80%BC.png)

类似地，上图中的效果还可以使用 right 10px 实现，因为关键字和长度值及百分数值也可以混用。注意，关键字以外的值对轴的顺序有要求。也就是说，如果使用长度值或百分数值，横向值必须写在首位，纵向值必须写在末位。因此，right 10px 是有效的，而 10px right 是无效的，将被忽略（因为 right 不是有效的纵向关键字）。

<br>

### 负值

使用长度值或百分数值时，可以使用负值把源图像拉到元素的背景区域之外。假如背景中有个特别大的阴阳符号，我们可以居中显示源图像，但是有时我们只想让一部分显示在元素背景的左上角。这个效果是可以实现的，至少在理论上可行。

假设源图像的宽和高都是 300 像素，而且我们只想看到图像右下角的三分之一。这个效果可以这样实现（见下图）：

```css
body {
    background-image: url(yinyang.png);
    background-repeat: no-repeat;
    background-position: -200px -200px;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%BD%BF%E7%94%A8%E8%B4%9F%E7%9A%84%E9%95%BF%E5%BA%A6%E5%80%BC%E5%AE%9A%E4%BD%8D%E6%BA%90%E5%9B%BE%E5%83%8F.png)

如果只想看到图像的右半边，而且纵向居中显示在元素的背景区域中：

```css
body {
    background-image: url(yinyang.png);
    background-repeat: no-repeat;
    background-position: -150px 50%;
}
```

百分数也可以是负的，不过计算过程略为复杂。源图像和元素的尺寸有可能差异很大，这会导致意料之外的结果。例如，下述规则得到的结果如下图所示。

```css
p {
    background-image: url(pix/yinyang.png);
    background-repeat: no-repeat;
    background-position: -10% -10%;
    width: 500px;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%B4%9F%E7%99%BE%E5%88%86%E6%95%B0%E5%80%BC%E5%BE%97%E5%88%B0%E7%9A%84%E4%B8%8D%E5%90%8C%E7%BB%93%E6%9E%9C.png)

上述规则把源图像外部由 -10% -10% 定义的点与各个段落中以相同值定义的点对齐。图像的尺寸是 300 ⨉ 300 像素，因此对齐的是图像上部 30 像素和左边 30 像素确定的点（即 -30px 和 -30px）。上图中几个段落的宽度是相同的（500px），因此背景的横向偏移是左边向左 50 像素。这意味着，源图像的左边在段落内边距左边界左边的 20 像素处。这是由于图像上的 -30px 对齐点要与段落背景的 -50px 对齐点对齐，二者之差为 20 像素。

然而，各段落的高度是不同的，因此每个段落的纵向对齐点是不一样的。假设某个段落的高度恰好也是 300 像素，那么源图像的顶边将正好与元素背景区域的顶边对齐，因为纵向对齐都是 -30px。如果段落的高度是 50 像素，那么对齐点是 -5px，源图像的顶边在背景区域顶边的下部，相距 25 像素。这就是上图中每个背景图的顶部都可见的原因，因为段落的高度都比背景图的高度小。

<br>

### 改变偏移边

好吧，我承认，在前面的讨论中我隐瞒了两件事：第一，background-position 的关键字值不能超过两个。第二，偏移始终相对背景区域的左上角。

在 css 的发展过程中，很长一段时间内确实是这样，但是现在情况变了。其实，只要格式正确，最多可以使用四个关键字实现特殊的功能：指定相对哪边计算偏移。

先来看一个简单的例子：把源图像放在距左上角横向 1/3、纵向 30 像素处。根据前几节的知识，可以这样声明：

```css
background-position: 33% 30px;
```

下面使用四个值的句法实现相同的效果：

```css
background-position: left 33% top 30px;
```

这四个值的意思是，相对左边界横向偏移 33%，相对上边界纵向偏移 30px。

这是默认行为，只不过我们显式指明了。现在，我们把源图像放在距右下角横向 1/3、纵向 30 像素处，如下图所示（简单起见，假设背景图不重复）：

```css
background-position: right 33% bottom 30px;
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%94%B9%E5%8F%98%E6%BA%90%E5%9B%BE%E5%83%8F%E7%9A%84%E5%81%8F%E7%A7%BB%E8%BE%B9.png)





































# 3. 渐变

渐变指从一个颜色到另一个颜色的平滑过渡。例如，白色到黑色的渐变从白色开始。经过一系列不同深度的灰色之后，最终变为黑色。渐变的平缓或骤变程序取决于渐变的作用空间。如果在 100 像素的长度内由白色变为黑色，渐变累进的过程中每次变暗 1%，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E6%B8%90%E5%8F%98%E7%9A%84%E7%B4%AF%E8%BF%9B%E8%BF%87%E7%A8%8B.png)

## 1. 线性渐变

线性渐变指沿线性向量填充得到的渐变。这个向量称为梯度线。然而，这条线可能不像你想的那么简单。下面是一些较为简单的渐变，结果如下图所示。

```css
#ex01 {
    background-image: linear-gradient(purple, gold);
}

#ex02 {
    background-image: linear-gradient(90deg, purple, gold);
}

#ex03 {
    background-image: linear-gradient(to left, purple, gold);
}

#ex04 {
    background-image: linear-gradient(-135deg, purple, gold, navy);
}

#ex05 {
    background-image: linear-gradient(to bottom left, purple, gold, navy);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%80%E4%BA%9B%E7%AE%80%E5%8D%95%E7%9A%84%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98.png)

第一个可能是最简单的渐变了，只有两个颜色。这里，渐变从背景定位区域的顶部由第一个颜色变到背景定位区域底部的第二个颜色。

这个渐变之所以从上到下，是因为渐变的默认方向是 to bottom，这与 180deg 和其他等量值的作用是一样的。如果想使用其他方向，可以在声明渐变时先提供一个方向。如图中的其他渐变都这么做了。

线性渐变的基本句法如下：

```css
linear-gradient([[ <angle> | to <side-or-quadrant> ],]? [ <color-stop> [, <color-hint>]? ]#, <color-stop>);
```

色标（color stop）和中色点（color hint）的作用稍后探讨。现在你只需要记住基本的格式：开头是一个可选的方向，然后列出一系列色标和中色点，结尾又是一个色标。

使用 top 和 right 等关键字指明某一边或象限时必须结合关键词 to，这样描述的方向为梯度线指向的方向。因此，linear-gradient(0deg, red, green) 声明的渐变从底部的红色过渡到顶部的绿色，因为梯度线指向零度（元素的顶部），所以终点是绿色。使用角度值时无需加上 to，to 45deg 是无效的，将被忽略。

<br>

### 渐变颜色

渐变中的颜色值可以使用任何类型，包括带 alpha 通道的值（例如 rgba()）和 transparent 等关键字。因此，完全可以从不透明度为零的颜色的开始（或到不透明度为零的颜色终止），实现部分淡出的渐变效果。以下述规则为例，其结果如下图所示。

```css
#ex01 {
    background-image: linear-gradient(to right, rgb(200, 200, 200), rgb(255, 255, 255));
}

#ex02 {
    background-image: linear-gradient(to right, rgba(200, 200, 200, 1), rgba(200, 200, 200, 0));
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E9%80%90%E6%B8%90%E5%8F%98%E6%88%90%E7%99%BD%E8%89%B2%E4%B8%8E%E9%80%90%E6%B8%90%E5%8F%98%E6%88%90%E9%80%8F%E6%98%8E.png)

可以看到，第一个示例从浅灰色逐渐变成白色，而第二个示例从同样不透明的浅灰色逐渐变成透明，因此通过透明的部分可以看到父元素的黄色背景。

当然，渐变中的颜色不限于两个。只要你能接受，想用多少颜色都可以。来看下面这个渐变：

```css
#wdim {
    background-image: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red, orange, yellow, green, blue, indigo, violet);
}
```

这里，梯度线指向 90 度，即元素的右边。这个渐变共有 14 个色标，两两之间以逗号分隔，而且用的都是颜色名称。各颜色均匀分布在梯度上，第一个颜色在线头，最后一个颜色在线尾。色标之间不同的颜色尽量平滑混合，结果如图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%B2%BF%E6%A2%AF%E5%BA%A6%E7%BA%BF%E5%88%86%E5%B8%83%E7%9A%84%E8%89%B2%E6%A0%87.png)

未指明色标的位置时，各色标均匀分布。如果指定了位置呢？

<br>

### 定位色标

`<color-stop>` 的完整句法如下：

```css
<color> [ <length> | <percentage> ]?
```

1. 在每个颜色值之后可以（但不强求）提供一个位置值。这样可以把常规情况下均匀累进的色标变换成其他方式。

先介绍较简单的长度值。我们来实现一条彩虹（只有一条），各颜色相距 25 像素，如下图所示：

```css
#spectrum {
    background-image: linear-gradient(90deg, red, orange 25px, yellow 50px, green 75px, blue 100px, indigo 125px, violet 150px);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%AF%8F%E9%9A%94%2025%20%E5%83%8F%E7%B4%A0%E6%94%BE%E4%B8%80%E4%B8%AA%E8%89%B2%E6%A0%87.png)

<br>

2. 相反地，如果色标的位置超出了梯度线末端，渐变将在梯度线的末尾结束。下述规则的结果如下图所示。

```css
#spectrum {
    background-image: linear-gradient(90deg, red, orange 200px, yellow 400px, green 600px, blue 800px, indigo 1000px, violet 1200px);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%89%B2%E6%A0%87%E5%A4%AA%E8%BF%9C%EF%BC%8C%E8%A3%81%E5%89%AA%E6%B8%90%E5%8F%98.png)

最后一个色标在 1200 像素处，但是梯度线没有这么长，因此渐变大概在蓝色处结束。在超出范围之前，只能显示这么多渐变。

注意，在前述两个示例和图示中，第一个颜色（red）没有长度值。此时，假定色标位于梯度线的开头。类似地，如果最后一个色标没有位置，假定在梯度线的末端（但是请注意，循环渐变则不然，详情参见 9.3.4 节）。

<br>

3. 色标位置的长度值不限于像素值，任何长度值都可以，em，英寸等都能用。此外，在同一个渐变甚至可以混用不同的单位，但是一般不推荐这么做，个中缘由稍后说明。如果愿意，还可以使用负的长度值。此时，色标放在梯度线起点的前方。与梯度线末端的情况一样，起点之前的颜色会被裁剪掉，如下图所示：

```css
#spectrum {
    background-image: linear-gradient(90deg, red -200px, orange 200px, yellow 400px, green 600px, blue 800px, indigo 1000px, violet 1200px);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%89%B2%E6%A0%87%E7%9A%84%E4%BD%8D%E7%BD%AE%E4%B8%BA%E8%B4%9F%E5%80%BC%EF%BC%8C%E8%A3%81%E5%89%AA%E6%B8%90%E5%8F%98.png)

<br>

4. 百分数值相对梯度线的总长度计算。位于 50% 处的色标在梯度线的中点。继续以彩虹为例。这一次我们不每隔 25 像素放一个色标了，而是每隔梯度线长度的 10% 放一个色标。规则如下，结果如下图所示：

```css
#spectrum {
    background-image: linear-gradient(90deg, red, orange 10%, yellow 20%, green 30%, blue 40%, indigo 50%, violet 60%);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%AF%8F%E9%9A%94%E9%95%BF%E5%BA%A6%E7%9A%84%2010%25%20%E6%94%BE%E4%B8%80%E4%B8%AA%E8%89%B2%E6%A0%87.png)

与前面一样，因为最后一个色标在梯度线末端之前，所以最后一个颜色（violet）一直延伸到渐变的末端。这里，除了各色标占据的范围更宽之外，其他都与使用长度值时差不多。

<br>

5. 如果某些色标没有位置值，而其他的色标有，那么没有位置值得色标将均匀分布在有位置值得色标之间。以下述规则为例：

```css
#spectrum {
    background-image: linear-gradient(90deg, red, orange, yellow 50%, green, blue, indigo 95%, violet);
}
```

red 和 violet 没有明确指定位置，因此它们的位置值分别为 0% 和 100%。orange、green 和 blue 则均匀分布在两边明确定义了位置的色标之间。

这意味着，orange 将放在 red 0% 和 yellow 50% 的中点，即 25% 处，而 green 和 blue 在 yellow 50% 和 indigo 95% 之间。两点相差 45%，这一跨度要分成三份，因为四个值之间有三段。计算后得到的位置为 65% 和 80%。最终得到的结果如下图所示，这与下述声明的结果完全一样：

```css
#spectrum {
    background-image: linear-gradient(90deg, red 0%, orange 25%, yellow 50%, green 65%, blue 80%, indigo 95%, violet 100%);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%9C%A8%E6%98%8E%E7%A1%AE%E6%8C%87%E6%98%8E%E4%BD%8D%E7%BD%AE%E7%9A%84%E8%89%B2%E6%A0%87%E4%B9%8B%E9%97%B4%E5%9D%87%E5%8C%80%E5%88%86%E5%B8%83%E8%89%B2%E6%A0%87.png)

<br>

6. 渐变中的每个色标都没指定位置时，各色标沿梯度线均匀分布采用的也是这种机制。如果色标都没位置，第一个假定为 0%，最后一个假定为 100%，其余的色标则均匀分布在二者之间。

你可能想知道把两个色标放在同一点上会出现什么情况，如下所示：

```css
#spectrum {
    background-image: linear-gradient(90deg, red 0%, orange, yellow, green 50%, blue 50%, indigo, violet);
}
```

此时，两个色标将叠放在一起，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%89%B2%E6%A0%87%E9%87%8D%E5%8F%A0%E7%9A%84%E6%95%88%E6%9E%9C.png)

渐变依然正常沿梯度线过渡，但是在 50% 处，由绿色直接变成蓝色，跨度为零。因此，渐变从 33.3% 处的黄色（0% 到 50% 之间的三分之二处）过渡到 50% 处的绿色，然后立即变成蓝色，再由 50% 处的蓝色过渡到 75% 处（50% 和 100% 的中点）的靛蓝色。

<br>

7. 这种急变效果可用于实现条纹，如下图所示，所用的代码如下：

```css
.stripes {
    background-image: linear-gradient(90deg, gray 0%, gray 25%, transparent 25%, transparent 50%, gray 50%, gray 75%, transparent 75%, transparent 100%);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%80%A5%E5%81%9C%E6%95%88%E6%9E%9C%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%9D%A1%E7%BA%B9.png)

<br>

8. 把两个色标叠放再同一位置是这种情况，那么把后面的色标放在前一个色标之前？比如这样：

```css
#spectrum {
    background-image: linear-gradient(90deg, red 0%, orange, yellow, green 50%, blue 40%, indigo, violet);
}
```

此时，有违常规的色标（这里的 blue）将放在之前色标中位置值最大的位置上。在这个示例中，blue 的位置值为 50%，因为这是前面那个色标的位置。因此，这与前面的把绿色和蓝色叠放在一起的效果是一样的。

这里的关键是，色标的位置将设为之前明确指定位置的色标中最大的那个。因此，在下述规则中，indigo 色标的位置将被设为 50%：

```css
#spectrum {
    background-image: linear-gradient(90deg, red 0%, orange, yellow 50%, green, blue, indigo 33%, violet);
}
```

这里，在 indigo 色标前面指定的最大位置是 yellow 色标的 50%。因此，这个渐变先从红色过渡到橘色再过渡到黄色，然后立即变成靛蓝色，再过渡到蓝紫色。从黄色到绿色到蓝色再到靛蓝色的过渡都只跨零距离。结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%A4%84%E7%90%86%E4%B8%8D%E6%AD%A3%E5%B8%B8%E4%BD%8D%E7%BD%AE%E4%B8%8A%E7%9A%84%E8%89%B2%E6%A0%87.png)

正是因为这样，一般才不建议在一个渐变中混用不同的单位。假如混用 rem 和百分数，有可能使用百分数定位的色标在前面使用 rem 定位的色标之前。

<br>

### 设置中色点

现在，我们知道色标的作用了。然而，你可能还记得，线性渐变的句法还支持在每个色标后设置中色点（color hint）：

```css
linear-gradient([[ <angle> | to <side-or-quadrant> ],]? [ <color-stop> [, <color-hint>]? ]#, <color-stop>)
```

`<color-hint>` 的作用是修改两侧两个色标的混合模式。默认情况下，两个色标之间的混合模式是线性的。因此，下述规则得到的结果是下图所示那样：

```css
linear-gradient {
    to right, #000 25%, rgb(90%, 90%, 90%) 75%;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%A4%E4%B8%AA%E8%89%B2%E6%A0%87%E4%B9%8B%E9%97%B4%E7%9A%84%E7%BA%BF%E6%80%A7%E6%B7%B7%E5%90%88%E6%A8%A1%E5%BC%8F.png)

从 25% 处到 75% 处的混合是恒定的线性累进过程，由黑色（#000）过渡到浅灰色（rgb(90%, 90%, 90%)）。二者的中点，即 50% 处，灰色的浓淡程度正好是两侧两个色标差值的一半，即 rgb(45%, 45%, 45%)。

通过中色点可以改变累进的中点。例如，把原本该在中点处的 rgb(45%, 45%, 45%) 移到两个色标之间的其他位置。下述 CSS 得到的结果如下图所示。

```css
#ex01 {
    background: linear-gradient(to right, #000 25%, rgb(90%, 90%, 90%) 75%);
}

#ex02 {
    background: linear-gradient(to right, #000 25%, 33%, rgb(90%, 90%, 90%) 75%);
}

#ex03 {
    background: linear-gradient(to right, #000 25%, 67%, rgb(90%, 90%, 90%) 75%);
}

#ex04 {
    background: linear-gradient(to right, #000 25%, 25%, rgb(90%, 90%, 90%) 75%);
}

#ex05 {
    background: linear-gradient(to right, #000 25%, 75%, rgb(90%, 90%, 90%) 75%);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%8D%E5%90%8C%E4%B8%AD%E8%89%B2%E7%82%B9%E7%9A%84%E9%BB%91%E8%89%B2%E5%88%B0%E7%81%B0%E8%89%B2%E6%B8%90%E5%8F%98.png)

在第一个示例中（#ex01），使用的是默认的线性累进，中色（45% 黑）在两个色标的中点。

在第二个示例中（#ex02），中色在梯度线的 33% 处。第一个色标在 25% 处，中色在 33% 处，第二个色标在 75% 处。

在第三个示例中（#ex03），中色点在梯度线的 67% 处。因此，渐变从 25% 处的黑色过渡到 67% 处的中色，然后再从 67% 处的中色过渡到 75% 处的浅灰色。

第四个示例和第五个示例展示把中色点放在色标的位置上会得到什么结果。可以看出，结果是颜色急变。

中色点有个不容易理解的行为，即色标到中色点再到色标的累进过程不是两个线性累进这么简单，而是带有一点曲折。下面通过示例说明。如下两个规则看似创建的是相同的渐变，但其实不然，如下图所示。

```css
#ex01 {
    background: linear-gradient(to right, 
        #000 25%, 
        rgb(45%, 45%, 45%) 67%, /* 这是一个色标 */
        rgb(90%, 90%, 90%) 75%);
}

#ex02 {
	background: linear-gradient(to right, 
        #000 25%, 
        67%, /* 这是一个中色点 */
        rgb(90%, 90%, 90%) 75%);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%A4%E6%AC%A1%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98%E4%B8%8E%E4%B8%80%E4%B8%AA%E5%B8%A6%E6%9C%89%E4%B8%AD%E8%89%B2%E7%82%B9%E7%9A%84%E8%BF%87%E6%B8%A1.png)

注意，两个示例中灰色的累进过程是不同的。在第一个示例中，先是黑色到 rgb(45%, 45%, 45%) 的线性累进，然后是 rgb(45%, 45%, 45%) 到 rgb(90%, 90%, 90%) 的线性累进。在第二个示例中，黑色到浅灰色的累进距离相同，但是中色点在 67% 处，因此得到的渐变将尽量在整个范围内平滑一些。两个示例中位于 25%、67% 和 75% 处的颜色都是一样的，但是浓淡程度的变化却不同。

>熟悉动画的人可能会想在中色点上应用渐进函数（例如 ease-in），进一步控制的混合方式。但是截至 2017 年年末还不可以这么做，不过这一功能正在讨论中。

<br>

### 梯度线剖析

掌握色标位置的基本知识之后，该讲解梯度线是如何构建的以及是如何产生所需效果的了。

下面设置一个简单的渐变，以此为例进行说明：

```css
linear-gradient {
    55deg, #4097FF, #FFBE00, #4097FF
}
```

那么，这个一维结构（斜 55 度的直线）是如何创建两维渐变填充的呢？首先，根据指定的角度放置梯度线，确定起点和终点。这条梯度线及由它得到的渐变如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%A2%AF%E5%BA%A6%E7%BA%BF%E7%9A%84%E4%BD%8D%E7%BD%AE%E5%92%8C%E5%A4%A7%E5%B0%8F.png)

首先要明确的一点是，图中的方框不是元素，而是线性渐变图像自身（记得吗，渐变创建的是图像）。渐变图像的尺寸和形状由很多因素决定，至于是由元素背景的尺寸还是 background-size 属性的值决定，稍后再讨论。现在我们只关注图像。

<br>

## 2. 径向渐变

线性渐变能实现特别棒的效果，不过有时你可能想要圆形渐变，比如说聚光灯、圆形阴影、圆形发光等效果。径向渐变的句法与线性渐变类似，不过也有一些区别：

```css
radial-gradient([[ <shape> || <size> ] [ at <position> ]?, | at <position>, ]? [ <color-stop> [, <color-hint>?] [, <color-stop>]+ ])
```

简单来说，你可以声明形状和尺寸（可选），可以声明渐变的中心点在何处（可选），然后声明两个或多个色标，色标之间还可以指定中色点（可选）。形状和尺寸还有些选项，下面逐一说明。

先来看一个简单的径向渐变（有可能是最简单的了）在不同形状的元素中呈现的效果，如下图。

```css
.radial {
    background-image: radial-gradient(purple, gold);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98%E5%9C%A8%E4%B8%8D%E5%90%8C%E5%BD%A2%E7%8A%B6%E4%B8%AD%E5%91%88%E7%8E%B0%E7%9A%84%E6%95%88%E6%9E%9C.png)

这几种情况都没有声明位置，因此使用默认的 center。此外，由于没有声明形状，除方形元素之外都是椭圆形，在方形元素中，形状为圆形。最后，因为没有声明色标或中色点的位置，所以第一个色标放在梯度射线的开头，最后一个色标放在射线的末尾，二者之间为线性混合。

是的，这里是梯度射线，其作用与线性渐变中的梯度线一样。梯度射线从渐变的中心向右眼延伸，渐变的其他部分据此构建（稍后详细说明梯度射线）。

<br>

### 形状和尺寸

1. 首先，径向渐变只有两种可用的形状值（因此也就只能有两种形状），即 circle 和 ellipse。径向渐变的形状可以显式声明，也可以由渐变图像的尺寸推导出来。

再看尺寸。一同往常，指定径向渐变的尺寸时可以只提供一个非负长度值（得到的是圆形），也可以提供两个非负长度值（得到的是椭圆形）。假如有下述径向渐变：

```css
radial-gradient(50px, purple, gold)
```

这是个圆形径向渐变，由中心点处的紫色过渡到 50 像素以外的金色。如果再添加一个长度值，得到的将是椭圆形渐变，宽度与第一个长度相等，高度与第二个长度相等：

```css
radial-gradient(50px 100px, purple, gold)
```

这两个渐变如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%A4%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98.png)

注意，渐变的形状与所在图形的尺寸和形状没有任何关系。如果创建的是圆形渐变，得到就是一个圆，即便在矩形渐变图像中也是如此。同样，椭圆渐变得到的始终是椭圆形，即便在方形渐变图像中也是如此（不过看起来像是圆形，因为椭圆的宽度和高度相等）。

<br>

2. 尺寸也可以使用百分数值，不过只能用于设定椭圆形。圆形不能用百分数指定尺寸，因为无法确定百分数相对哪一轴计算（比如对高 100 像素、宽 500 像素的图像来说，10% 相当于 10 像素还是 50 像素呢）。如果试图为圆形渐变设置百分数值，整个声明都将失效。

为椭圆渐变设置百分数值，跟之前一样，第一个值相对横轴计算，第二个值相对纵轴计算。下述渐变在不同尺寸的图像中得到的结果如下图所示。

```css
radial-gradient(50% 25%, purple, gold)
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%BD%BF%E7%94%A8%E7%99%BE%E5%88%86%E6%95%B0%E8%AE%BE%E5%AE%9A%E6%A4%AD%E5%9C%86%E6%B8%90%E5%8F%98%E7%9A%84%E5%B0%BA%E5%AF%B8.png)

设置椭圆渐变的尺寸时，还可以混用长度值和百分数值，当然注意事项也跟之前一样。如果比较确定，完全可以把椭圆径向渐变的高度设为 10 像素，宽度设为元素宽度的一半，如下图所示：

```css
radial-gradient(50% 10px, purple, gold)
```

<br>

3. 当然，长度值和百分数值不是设定径向渐变尺寸的唯一方式。除此之外，还可以使用四个关键字，各自的效果见下表。

| 关键字                    | 作用                                                         |
| ------------------------- | ------------------------------------------------------------ |
| closest-side              | 径向渐变的形状为圆形时，梯度射线的末端正好接触渐变图像上距径向渐变中心点最近的那一边。形状为椭圆时，梯度射线的末端在横轴和纵轴上都正好接触最近的边 |
| farthest-side             | 径向渐变的形状为圆形时，梯度射线的末端正好接触渐变图像上距径向渐变中心点最远的那一边。形状为椭圆时，梯度射线的末端在横轴和纵轴上都正好接触最远的边 |
| closest-corner            | 径向渐变的形状为圆形时，梯度射线的末端正好接触渐变图像上距径向渐变中心点最近的那一角。形状为椭圆时，梯度射线的末端依然正好接触最近的那一角，而且椭圆的宽高比与设为 closest-side 时一样 |
| farthest-corner（默认值） | 径向渐变的形状为圆形时，梯度射线的末端正好接触渐变图像上距径向渐变中心点最远的那一角。形状为椭圆时，梯度射线的末端依然正好接触最远的那一角，而且椭圆的宽高比与设为 farthest-side 时一样。注意：这是径向渐变的默认尺寸值，如未声明尺寸值，就使用这个值。 |

为了更清楚地理解这几个关键字的效果，请看下图，图中包含各关键字应用到圆形和椭圆渐变上的效果。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98%E5%90%84%E5%B0%BA%E5%AF%B8%E5%85%B3%E9%94%AE%E5%AD%97%E7%9A%84%E6%95%88%E6%9E%9C.png)

设定椭圆径向渐变的尺寸时，关键字不能与长度值或百分数值混用。因此，closest-side 25px 是无效的，将被忽略。

从上图中你可能注意到了，渐变不是从图像的中心开始的。这是因为我们把渐变放到其他位置了，详情参见下一节。

<br>

### 定位径向渐变

1. 如果想把径向渐变的中心放在默认的 center 以外的位置，可以使用对 background-position 属性来说任何有效的位置值。这里不再赘述复杂的句法，如果想回顾，请翻到介绍 background-position 属性那一节（参见 9.2.4 节）。

我所说的任何有效的位置值包括允许的长度值、百分数值和关键字等的任何有效组合。而且，如果省略两个位置值中的一个，那个位置的推导方式也与 background-position 属性一样。举个例子，center 等效于 center center。径向渐变位置与背景位置之间主要的区别是，前者的默认值是 center，而非 0% 0%。

下面举些例子，结果如下图所示。

```css
radial-gradient(at bottom left, purple, gold);
radial-gradient(at center right, purple, gold);
radial-gradient(at 30px 30px, purple, gold);
radial-gradient(at 25% 66%, purple, gold);
radial-gradient(at 30px 66%, purple, gold);
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%94%B9%E5%8F%98%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98%E7%9A%84%E4%B8%AD%E5%BF%83%E7%82%B9%E4%BD%8D%E7%BD%AE.png)

<br>

2. 上述径向渐变都没有明确设定尺寸，因为默认为 farthest-corner。这种默认的行为是合理的，却不是唯一的可能。下面在上述渐变中添加尺寸，看看结果有何变化（见下图）。

```css
radial-gradient(30px at bottom left, purple, gold);
radial-gradient(30px 15px at center right, purple, gold);
radial-gradient(50% 15% at 30px 30px, purple, gold);
radial-gradient(farthest-side at 25% 66%, purple, gold);
radial-gradient(farthest-corner at 30px 66%, purple, gold);
```

很好。那么，如果想实现稍微复杂的渐变，不止两个颜色呢？下面探讨色标。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%94%B9%E5%8F%98%E6%98%8E%E7%A1%AE%E8%AE%BE%E5%AE%9A%E5%B0%BA%E5%AF%B8%E7%9A%84%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98%E7%9A%84%E4%B8%AD%E5%BF%83%E7%82%B9%E4%BD%8D%E7%BD%AE.png)

<br>

### 径向渐变的色标和梯度射线

1. 径向渐变色标的句法和处理方式与线性渐变一样。仍以可能是最简单的径向渐变为例，后面给出了明确声明的等效写法：

```css
radial-gradient(purple, gold);
radial-gradient(purple 0%, gold 100%);
```

径向渐变的梯度射线从中心向外延伸。在 0% 处（起点，也是渐变的中心点），射线上的颜色是紫色。在 100% 处（终点），射线上的颜色是金色。在这两点之间，由紫色平滑过渡到金色，超出终点后，颜色为纯金色。

如果在紫色和金色之间添加一个色标，但不指定它的位置，那么新增的色标将放在起点和终点的中间，颜色的过渡也将相应改变，如下图所示。

```css
radial-gradient(100px circle at center, purple 0%, green, gold 100%);
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%A2%9E%E5%8A%A0%E4%B8%80%E4%B8%AA%E8%89%B2%E6%A0%87.png)

<br>

2. 如果写成 green 50%，得到的结果是一样的。我想你应该明白了。梯度射线上的颜色由紫色到绿色再到金色平滑过渡，超过射线终点后为纯金色。

据此看出（线性渐变）梯度线和梯度射线之间的一个区别：线性渐变由梯度线上各点的颜色沿着与梯度线垂直的方向由两侧延伸得到。径向渐变的情况类似，不过是从梯度射线上向外延伸出无数条线，而且那些线是梯度射线终点构成的椭圆的同心小椭圆和大椭圆。具体方式如下图所示，图中的各个椭圆由梯度射线上不同的点向外延伸得到。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%A2%AF%E5%BA%A6%E5%B0%84%E7%BA%BF%E5%92%8C%E7%94%B1%E5%85%B6%E6%B4%BE%E7%94%9F%E5%87%BA%E6%9D%A5%E7%9A%84%E4%B8%80%E4%BA%9B%E6%A4%AD%E5%9C%86.png)

这就引出一个问题：梯度射线的终点（即 100% 处）是如何确定？终点是梯度射线与所尺寸得到的形状相交的那一点。圆形渐变的情况很简单，梯度射线的终点距形状中心点的距离就是尺寸值指定的长度。因此，对 25px circle 渐变来说，射线的终点距中心点 25 像素。

<br>

3. 椭圆渐变的确定方式基本相同，不过距中心点的距离由椭圆的横轴决定。对 40px 20px ellipse 渐变来说，射线的终点在中心点正右方，二者相距 40 像素。详情如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%AE%BE%E5%AE%9A%E6%A2%AF%E5%BA%A6%E5%B0%84%E7%BA%BF%E7%9A%84%E7%BB%88%E7%82%B9.png)

线性渐变的梯度线与径向渐变的梯度射线之间的另一个区别是，超出终点的部分依然可见。你可能还记得，梯度线只从 0% 处画到 100% 处，超过这一点就没有了。梯度线绝不会比渐变图像最长的轴短，而且通常都更长。而在径向渐变中，径向渐变的尺寸可以设为比渐变图像小，此时，最后一个色标的颜色将从终点一直向外延伸（前面几幅图很多都是这种情况）。

<br>

4. 反过来，如果色标的位置超过了射线的终点，在那个色标之后可能还会看到对应的颜色。以下述渐变为例，其结果如下图所示。

```css
radial-gradient(50px circle at center, purple, green, gold 80px)
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%89%B2%E6%A0%87%E7%9A%84%E4%BD%8D%E7%BD%AE%E8%B6%85%E8%BF%87%E7%BB%88%E7%82%B9.png)

第一个色标没有指定位置，因此设为 0%，即中心点。最后一个色标的位置设为 80px，因此在各个方向上都距中心点 80 像素。位于中间的 green 色标在二者的中间（距中心点 40 像素）。因此，这个渐变在 80 像素处为金色，超出那一点之后的部分也是金色。

<br>

5. 即便明确把圆形的尺寸设为 50 像素，依然如此。圆形的半径仍是 50 像素，只是最后一个色标的位置使得结果不那么明显。如果像下面这样声明：

```css
radial-gradient(80px circle at center, purple, green, gold)
```

或者更简单一点，像这样：

```css
radial-gradient(80px, purple, green, gold)
```

得到的结果不变。

使用百分数设定色标的位置时，也是这种情况。下面两个渐变与前面的示例得到的结果是一样的：

```css
radial-gradient(50px, purple, green, gold 160%)
radial-gradient(80px, purple, green, gold 100%)
```

<br>

6. 那么，如果把色标的位置设为负值？结果基本上与线性渐变一样：位置为负的色标用于确定起点的颜色，在结果中是不可见的。因此，下述渐变得到的结果如下图所示。

```css
radial-gradient(80px, purple -40px, green, gold)
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%89%B2%E6%A0%87%E4%BD%8D%E7%BD%AE%E4%B8%BA%E8%B4%9F%E5%80%BC%E6%97%B6%E7%9A%84%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F.png)

对上述渐变来说，第一个色标的位置是 -40px，最后一个色标的位置是 80px（因为最后一个色标没有显式声明位置，所以默认为终点），而中间那个色标的位置在二者的中点。上述渐变得到的结果与下面这样显式声明式一样的：

```css
radial-gradient(80px, purple -40px, green 20px, gold 80px)
```

这个渐变的中心之所以是紫绿色的，是因为它由 1/3 紫色和 2/3 绿色混合而成。从中心点开始，先过渡到绿色，再过渡到金色。梯度射线上紫绿色混合的余下部分，即在负值范围内的那一部分，是不可见的。

<br>

### 极端情况

1. 我们知道如何为径向渐变声明尺寸和位置了，但问题也随之而来：如果圆形渐变的半径为零，或者椭圆渐变的高度或宽度为零会得到什么结果？这样的情况没有你想象中那么难出现，除了可以使用 0px 或 0% 把径向渐变的尺寸明确设为零之外，像下面这样的声明也能导致这样的结果：

```css
radial-gradient(closest-corner circle at top right, purple, gold)
```

渐变的尺寸设为 closest-corner，而中心点移到 top right（右上）角了，因此最近的角距中心点的距离为零像素。这可怎么办？

规范十分明确地指出，遇到这种情况时应该按照圆的半径为大于零的特别小的值渲染渐变。这个半径有多小？可以是十亿分之一像素、一皮米或一普朗克长度。但是，再小也不是零，因此渐变仍是圆形的，只不过这个圆形特别小，有可能根本看不到。如果确实看不到，得到的将是以最后一个色标的颜色填充的纯色。

<br>

2. 椭圆渐变的尺寸为零时，规范定义的行为有所不同。以下述渐变为例：

```css
radial-gradient(0px 50% at center, purple, gold)
```

规范规定，如果椭圆的宽度为零，渲染渐变时把椭圆的高度当做特别大的值，把椭圆的宽度当做比零大的特别小的值。也就是说，相当于渲染一个线性渐变，以过椭圆中心的纵轴对称。规范还说，在这种情况下，使用百分数值设定的色标位置将解析为 0px。通常，这样得到的结果是以最后一个色标的颜色填充的纯色。

<br>

3. 如果使用长度值设定色标的位置，得到的将是纵向对称的横向线性渐变。例如下述渐变，其结果如下图所示。

```css
radial-gradient(0px 50% at center, purple 0px, gold 100px)
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%AE%BD%E5%BA%A6%E4%B8%BA%E9%9B%B6%E7%9A%84%E6%A4%AD%E5%9C%86%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98.png)

结果怎么会这样？首先，前面说过，规范规定，横向宽度为 0px 时，当做不为零但极小的一个值。为了便于说明，假设为千分之一像素（0.001 px）。此时，椭圆的宽度为千分之一像素，而高度为图像的一半。其次，为了便于说明，假设高度为 100 像素。因此，第一个椭圆形的宽度为千分之一像素，高度为 100 像素，即宽高比为 0.001:100，或 1:100000。

那么，沿梯度射线绘制的每个椭圆的宽高比都是 1:100000。这意味着，梯度射线上距起点 0.5 像素处的椭圆宽度为 1 像素，高度为 100000 像素。在 1 像素处，宽度为 2 像素，高度为 200000 像素。在 5 像素处，宽度为 10 像素，高度为一百万像素。在 50 像素处，宽度为 100 像素，高度为一千万像素。以此类推。其他位置的尺寸如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E7%89%B9%E5%88%AB%E7%89%B9%E5%88%AB%E9%AB%98%E7%9A%84%E6%A4%AD%E5%9C%86.png)

这些椭圆绘制出来的其实是一系列竖线，因此你看到的是一个对称的线性渐变。严格来说，并不是竖线，但看到的却是。得到的结果之所以是纵向对称的横向渐变，是因为椭圆的中心在渐变的中心点，两边都绘制出了颜色。按理说这应该是径向渐变，但看到的结果却不尽然。

<br>

4. 反过来，如果椭圆有宽度但没高度，结果又大不相同了。你可能以为得到的将是以横轴对称的纵向渐变，但其实不然。结果将是与最后一个色标同色的纯色（若是稍后要讲的循环渐变，结果也是纯色，但颜色是渐变的中值色）。因此，下述两个渐变得到的结果都是纯金色。

```css
radial-gradient(50% 0px at center, purple, gold)
radial-gradient(50% 0px at center, purple 0px, gold 100px)
```

为什么高度为零时结果变了？这与构建径向渐变的梯度射线有关。同样，根据规范，零距离视作特别小的非零数。跟前面一样，我们假设 0px 被解析为 0.001px，而 50% 的计算结果为 100 像素。此时，宽高比为 100:0.001，即 100000:1。

因此，椭圆的高度为 1 像素时，宽度必定是 100000 像素。但是最后一个色标在 100 像素处。在那一点绘制的椭圆，宽度为 100 像素，高度为千分之一像素。紫色到金色的过渡在那千分之一像素范围内也是有的。不过，在那之后的部分将是金色，即最后一个色标的颜色。因此，我们只能看到金色。

你可能以为，把最后一个色标的位置设为 100000px 时，将看到一条细长的紫色线横穿图像。确实可能，前提是浏览器把 0px 解析为 0.001px。如果浏览器把零距离解析为 0.00000001px，要把最后要给色标的位置向外移特别长一段距离才能看到那条细线。当然，这还是假设浏览器会计算并绘制这样的椭圆，而不是草草了事。说实话，更有可能是后一种情况。如果是我负责编写浏览器渲染渐变的代码，我就会这么做。

那么，如果椭圆的宽度和高度都是零？此时，规范规定，采用宽度为零的处理机制。因此，得到的将是对称的线性渐变。

>截至 2017 年年末，浏览器对这些极端情况的支持还不稳定。这还算好的，有些浏览器甚至会在所有情况下都使用最后一个色标的颜色填充，而有些浏览器在某些情况下则拒绝绘制这样的渐变。

<br>

## 3. 处理渐变图像

<br>

## 4. 循环渐变

```css
background: repeating-linear-gradient
```

<br>

# 4. 盒子投影

前面的章节探讨过 text-shadow 属性，其作用是为非置换元素中的文本添加投影。有个类似的属性，用于为元素所在的框体创建投影，即 box-shadow。

```css
box-shadow

取值：none | [inset? && <length>{2, 4} && <color>?]#
初始值：none
适用于：所有元素
计算值：<length> 值计算为绝对长度值，<color> 值按内部方式处理，此外为指定的值
继承性：否
动画性：是
```

在主要介绍背景和渐变的一章中讨论投影好像不太合适，但是笔者这么做是有缘由的，稍后告诉你。

1. 下面举个简单的例子。这个盒子投影向元素框下方偏移 10 像素、向右偏移 10 像素，没有展开尺寸，也不模糊，颜色为半不透明的黑色。此外，身后的 body 元素有一个重复的背景。得到的结果如下图所示。

```css
#box {
    background: silver;
    border: medium solid;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E7%9B%92%E5%AD%90%E6%8A%95%E5%BD%B1.png)

可以看到，透过半不透明（如果不习惯，可以说成半透明）的投影能看到 body 元素的背景。因为没有设置模糊和展开距离，所以投影的外形完全模仿元素框本身。至少，看起来是这样。

<br>

2. 之所以说投影看起来是模仿元素框的形状，是因为投影只在元素边框的外边界以外才看得到。这一点从上图中看不出来，因为元素的背景是不透明的。你可能以为投影会延伸到元素背后，但事实并非如此。以下述代码为例，其结果如下图所示。

```css
#box {
    background: transparent;
    border: thin dashed;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E7%9B%92%E5%AD%90%E6%8A%95%E5%BD%B1%E4%B8%8D%E6%98%AF%E4%B8%80%E4%B8%AA%E5%AE%8C%E6%95%B4%E7%9A%84%E5%9B%BE%E5%BD%A2.png)

看起来好像是元素的内容（及内边距和边框）区域破坏了部分投影。而事实是，根据规范，盒子投影就是这样绘制的，根本不会出现在那些区域。但是，如下图所示，带投影看的元素框背后的背景却能透过元素看见。正是因为 box-shadow 属性与背景和边框有这一层关系（可能让人觉得匪夷所思），所以才在这里介绍，而没在之前的章节讨论。

前面定义的盒子投影设定了两个长度值。第一个定义横向偏移，第二个定义纵向偏移。正数把投影向下和向右移动，负数把投影向上和向左移动。

<br>

3. 如果提供第三个值，定义的是模糊距离，即指定给模糊留出多少空间。第四个值定义展开距离，这会改变投影的尺寸。正值在模糊之前延伸投影，负值使投影变小。下述代码得到的结果如下图所示。

```css
.box:nth-of-type(1) {
    box-shadow: 1em 1em 2px rgba(0, 0, 0, 0.5);
}

.box:nth-of-type(2) {
    box-shadow: 2em 0.5em 0.25em rgba(128, 0, 0, 0.5);
}

.box:nth-of-type(3) {
    box-shadow: 0.5em 2ch 1vw 13px rgba(0, 128, 0, 0.5);
}

.box:nth-of-type(4) {
    box-shadow: -10px 25px 5px -5px rgba(0, 128, 128, 0.5);
}

.box:nth-of-type(5) {
    box-shadow: 0.67em 1.33em 0 -0.1em rgba(0, 0, 0, 0.5);
}

.box:nth-of-type(6) {
    box-shadow: 0.67em 1.33em 0.2em -0.1em rgba(0, 0, 0, 0.5);
}

.box:nth-of-type(7) {
    box-shadow: 0 0 2ch 2ch rgba(128, 128, 0, 0.5);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%A8%A1%E7%B3%8A%E8%B7%9D%E7%A6%BB%E5%92%8C%E5%B1%95%E5%BC%80%E8%B7%9D%E7%A6%BB%E4%B8%8D%E5%90%8C%E7%9A%84%E6%8A%95%E5%BD%B1.png)

你可能注意到了，上图中有些框体带有圆角（通过 border-radius 属性实现），而相应的投影也变成了与之匹配的曲线。还好，这是默认行为。

<br>

4. box-shadow 还有一点没有涉及，即 inset 关键字。如果在 box-shadow 属性的值中加上 inset，投影在框体内部渲染，（从视觉上来讲）不再浮动在画布之上，而像是向内凹陷的。下面在前面那一系列示例的基础上实现内凹的投影，结果如下图所示。

```css
.box:nth-of-type(1) {
    box-shadow: inset 1em 1em 2px rgba(0, 0, 0, 0.5);
}

.box:nth-of-type(2) {
    box-shadow: inset 2em 0.5em 0.25em rgba(128, 0, 0, 0.5);
}

.box:nth-of-type(3) {
    box-shadow: 0.5em 2ch 1vw 13px rgba(0, 128, 0, 0.5) inset;
}

.box:nth-of-type(4) {
    box-shadow: inset -10px 25px 5px -5px rgba(0, 128, 128, 0.5);
}

.box:nth-of-type(5) {
    box-shadow: 0.67em 1.33em 0 -0.1em rgba(0, 0, 0, 0.5) inset;
}

.box:nth-of-type(6) {
    box-shadow: inset 0.67em 0.33em 0.2em -0.1em rgba(0, 0, 0, 0.5);
}

.box:nth-of-type(7) {
    box-shadow: 0 0 2ch 2ch rgba(128, 128, 0, 0.5) inset;
}                                                                                                      
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%8D%E5%90%8C%E7%9A%84%E5%86%85%E5%87%B9%E6%8A%95%E5%BD%B1.png)

注意，inset 关键字可以在其他值前面，也可以在后面，唯独不能在长度和颜色之间。0 0 0.1em inset gray 这样的值是无效的，将被忽略，因为 inset 关键字的位置不对。

<br>

5. 最后，与文本投影一样，一个元素可以应用任意多个盒子投影，各投影之间以逗号分隔。而且，部分投影可以是内凹的，部分可以是外凸的。下述示例只是无限可能中的两例：

```css
#shadowbox {
    background: #EEE;
    box-shadow: inset 1ch 1ch 0.25ch rgba(0, 0, 0, 0.25), 1.5ch 1.5ch 0.4ch rgba(0, 0, 0, 0.33);
}

#wacky {
    box-shadow: inset 10px 2vh 0.77em 1ch red, 1cm 1in 0 -1px cyan inset, 2ch 3ch 0.5ch hsla(117, 100%, 50%, 0.343),
        -2ch -3ch 0.5ch hsla(297, 100%, 50%, 0.23);
}
```

>filter 属性也能为元素创建投影，不过较之 box-shadow，其行为更接近 text-shadow，而且投影将同时应用到元素框和文本上。详情参见第 19 章。

