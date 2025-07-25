# 1. 基本元素框

你可能已经知道，文档中的每个元素都会生成一个矩形框，我们称之为元素框（element box）。这个框体描述元素在文档布局中所占的空间。因此，元素框之间是有影响的，涉及位置和尺寸。假如文档中的第一个元素高 1 英寸，那么下一个元素框至少从文档顶部 1 英寸处开始。如果第一个元素的高度变了，变成了 2 英寸，那么后续各个元素框都将向下移动 1 英寸，因此第二个元素框至少从文档顶部 2 英寸处开始。

默认情况下，渲染出来的文档中，各矩形框的排布方式在视觉上不会出现重叠。而且，某些情况下，元素框会尽量占用较少的空间，但是依然留有足够的间隔，能清楚地分清一部分内容属于哪个元素。

如果元素框是手动定位的，可能出现重叠，此外，在正常流动的元素上应用负的外边距，也会出现视觉上的重叠。

为了弄清外边距、 内边距和边框是如何处理的，必须理解盒模型（box model），如下图所示。

>图没有画出轮廓，这是故意的，讨论到轮廓时希望你能明白个中缘由。

<br>

## 1. 宽度和高度

通常，我们会明确定义一个元素的宽度，但是鉴于一定的历史原因，往往不明确定义元素的高度。默认情况下，元素的宽度指从左内边界和右内边界的距离，元素的高度是指从上内边界到下内边界的距离。毫无意外，控制这两个距离的属性分别名为 width 和 height。

这两个属性有一点要注意：无法应用到行内非置换元素上。比如说，为正常流动模式下生成行内框的超链接声明的 height 和 width，在遵守 css 标准的浏览器中会被忽略。假设应用的是下述规则：

```css
a:link {
    color: red;
    background: silver;
    height: 15px;
    width: 60px;
}
```

那么，链接在未访问的状态下将呈现为银底红字，而其高度和宽度由链接的内容决定，而不是 15 像素高、60 像素宽。但是，如果加上 display 属性，把值设为 inline-block 或 block。那么 height 和 width 的值将被采用，分别设定链接内容区的高度和宽度。

```css
width

取值：<length> | <percentage> | auto
初始值：auto
适用于：除行内非置换元素、表格中的行和行组之外的所有元素
百分数：相对容纳块的宽度
计算值：auto 和百分数值为指定的值，否则为绝对长度，除非没有为元素设定这个属性（此时为 auto）
继承性：否
动画性：是
```

```css
height

取值：<length> | <percentage> | auto
初始值：auto
适用于：除行内非置换元素、表格中的行和行组之外的所有元素
百分数：相对容纳块的高度
计算值：auto 和百分数值为指定的值，否则为绝对长度，除非没有为元素设定这个属性（此时为 auto）
继承性：否
动画性：是
```

>截至 2017 年年末，规范正在考虑 height 和 width 的几个新值：stretch、min-content、max-content 和 fit-content（两种形式）。但是对这些值的支持有限，尚不知道何时能把 height 和 width 设为这些值。

本章为了讨论方便，假定元素的高度始终自动计算。如果一个元素的内容有 8 行，而且各行均为 1/8 英寸高，那么这个元素的高度为 1 英寸。如果元素的内容有 10 行，那么高度为 1.25 英寸。不管是哪种情况，元素的高度都由内容决定，而不受创作人员的控制。正常流动模式下的元素很少直接设定高度。

>使用 box-sizing 属性可以改变 height 和 width 属性的意义。本章不深入讨论，简单来说，可以使用内容框或边框框作为度量基准。本章假定一切都是默认情况，即 height 和 width 指内容区的高度和宽度（box-sizing: content-box）。

<br>

# 2. 内边距

紧邻元素内容区的是内边距（padding），位于内容和边框之间。设定内边距最简单的方法是使用 padding 属性。

```css
padding

取值：[ <length> | <percentage> ]{1,4}
初始值：简写形式没有
适用于：所有元素
百分数：相对容纳块的宽度
计算值：参见各单独属性（padding-top 等）
继承性：否
动画性：是
备注：padding 不能取负值
```

可以看到，这个属性的值可以是任何长度值或百分数值。因此，如果想让所有 h2 元素的四周有 1em 的内边距，轻易就能办到（见下图）：

```css
h2 {
    padding: 2em;
    background-color: silver;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E4%B8%BA%E5%85%83%E7%B4%A0%E6%B7%BB%E5%8A%A0%E5%86%85%E8%BE%B9%E8%B7%9D.png)

从上图可以看出，元素的背景默认延伸到内边距区域。如果背景是透明的，相当于在元素的内容四周添加一些空白。但是，只要背景可见，就会延伸到内边距区域（稍后你将看到，背景还会继续向外延伸）。

>可以使用 background-clip 属性禁止可见背景延伸到内边距区域。

元素默认没有内边距。拿常见的段落之间的间隔来说，常常只用外边距实现（稍后讲到）。如果没有内边距，元素的边框将紧贴内容。因此，如果为元素添加了边框，通常最好再加一些内边距，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E5%86%85%E8%BE%B9%E8%B7%9D%E5%9C%A8%E6%9C%89%E8%BE%B9%E6%A1%86%E7%9A%84%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E4%B8%8A%E7%9A%84%E6%95%88%E6%9E%9C.png)

padding 属性的值可以是任何长度值，从 em 到英寸都行。设定内边距最简单的方式是只提供一个值，这个值将应用到四个边上。然而，有时你想为各边设定不同的内边距值。如果想为所有 h1 元素添加 10 像素上外边距、20 像素右外边距、15 像素下外边距和 5 像素左外边距，只需这么做：

```css
h1 {
    padding: 10px 20px 15px 5px;
}
```

各值的顺序很重要，格式为：

​	padding: top right bottom left

这个顺序也不难记住：从上边开始，顺时针转动。内边距值始终按这个顺序应用到元素上，为了实现所需的效果，一定要正确排列各值/

如果记不住是从上边开始顺时针转的，也可以这样理解：正确的顺序能远离麻烦（TRouBLe），这里的 TRBL 就表示顺序，即 top right bottom left（上右下左）。

各边的值还可以混用不同的长度类型。一个规则中不一定非要使用统一的长度类型，只要有需要，可以随意混用，例如：

```css
/* 不同类型的长度值 */
h2 {
    padding: 14px 5em 0.1in 3ex;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E4%BD%BF%E7%94%A8%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B%E7%9A%84%E9%95%BF%E5%BA%A6%E5%80%BC%E8%AE%BE%E5%AE%9A%E5%86%85%E8%BE%B9%E8%B7%9D.png)

<br>

## 1. 复值

有时，你提供的值有些重复：

```css
/* TRBL - Top Right Bottom Left */
p {
    padding: 0.25em 1em 0.25em 1em;
}
```

遇到这样重复的值无需重复输入。上述规则可以这样写：

```css
p {
    padding: 0.25em 1em;
}
```

这两个值足以表示四个值。但是分别对应哪一边？css 考虑到了少于四个值的情况（其他简写属性也有这种情况），为此定义了几个规则：

* 如果没有针对左边的值，使用针对右边的值。
* 如果没有针对底边的值，使用针对顶边的值。
* 如果没有针对右边的值，使用针对顶边的值。

如果觉得这些规则有点抽象，请看下图。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E5%80%BC%E5%A4%8D%E5%88%B6%E7%9A%84%E6%96%B9%E5%BC%8F.png)

也就是说，如果只为 padding 提供三个值，第四个值（针对左边）复制第二个值（针对右边）。如果提供两个值，第四个值复制第二个，第三个值（针对底边）复制第一个（针对顶边）。最后，如果只提供一个值，其他三边都复制第一个值。

有了这样的机制，创作人员就可以尽量少输入，只提供必要的个数，如下所示：

```css
/* 等同于 0.25em 0 0.5em 0 */
h1 {
    padding: 0.25em 0 0.5em;
}

/* 等同于 0.15em 0.2em 0.15em 0.2em */
h2 {
    padding: 0.15em 0.2em;
}

/* 等同于 0.5em 10px 0.5em 10px */
p {
    padding: 0.5em 10px;
}

/* 等同于 0.1em 0.1em 0.1em 0.1em */
p.close {
    padding: 0.1em;
}
```

这个机制有个小缺憾，你终将遇到。假设你想把 h1 元素的上内边距和左内边距设为 10 像素，把下内边距和右内边距设为 20 像素，必须这样写：

```css
/* 不能简写 */
h1 {
    padding: 10px 20px 20px 10px;
}
```

效果是达到了，但总觉得有些遗憾。可惜，遇到这种情况时不能省略任何一个值。再看一个例子。假设你想把左内边距设为 3em，其他各边都设为 0，要这么写：

```css
h2 {
    padding: 0 0 0 3em;
}
```

我们通常使用外边距把元素的内容区隔开，如果想通过内边距实现也不是不可以，只是有点困难。比如，我们常常把段落之间的间距设为一个空行，使用内边距的化，要这么写：

```css
p {
    margin: 0;
    padding: 0.5em 0;
}
```

上下各 0.5em 的内边距连在一起就是 1em 的间距。既然使用内边距较难，为什么还要这么做？因为这样可以在段落之间插入间隔边框，两个边框相接后，得到一条实线。下述规则的效果如下图所示。

```css
p {
    margin: 0;
    padding: 0.5em 0;
    border-bottom: 1px solid gray;
    border-left: 3px double black;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E4%BD%BF%E7%94%A8%E5%86%85%E8%BE%B9%E8%B7%9D%E4%BB%A3%E6%9B%BF%E5%A4%96%E8%BE%B9%E8%B7%9D.png)

<br>

## 2. 单边内边距

幸好，我们可以单独为元素的某一边设定内边距值，而且四个边都可以单独设定。假设你只想把 h2 元素的左内边距设为 3em。此时，不用大量周章写成 padding: 0 0 0 3em，像下面这样写就行：

```css
h2 {
    padding-left: 3em;
}
```

padding-left 只是为了元素框四边中的一边设定内边距。另外三边对应的属性很容易想到。

```css
padding-top, padding-right, padding-bottom, padding-left

取值：<length> | <percentage>
初始值：0
适用于：所有元素
百分数：相对容纳块的宽度
计算值：百分数值为指定的值，长度值为绝对长度
继承性：否
动画性：是
备注：内边距不能为负值
```

这四个属性的作用从名称上就能看出来。例如，下述两个规则得到的内边距量相同：

```css
h1 {
    padding: 0 0 0 0.25in;
}

h2 {
    padding-left: 0.25in;
}
```

类似地，下述规则得到的内边距也相等：

```css
/* 左内边距的值复制右内边距的值 */
h1 {
    padding: 0.25in 0 0;
}

h2 {
    padding-top: 0.25in;
}
```

下述规则一样：

```css
h1 {
    padding: 0 0.25in;
}

h2 {
    padding-right: 0.25in;
    padding-left: 0.25in;
}
```

一个规则中可以使用多个单边属性，例如：

```css
h2 {
    padding-left: 3em;
    padding-bottom: 2em;
    padding-right: 0;
    padding-top: 0;
    background: silver;
}
```

从下图中可以看出，内边距的值与我们预期的一样。这里直接使用 padding 反而更简单：

```css
h2 {
    padding: 0 0 2em 3em;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E5%90%8C%E6%97%B6%E8%AE%BE%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%8D%95%E8%BE%B9%E5%86%85%E8%BE%B9%E8%B7%9D.png)

一般来说，如果想为多个边设定内边距，使用简写的 padding 更简单。站在文档的角度上来看，其实使用哪种方式都行，因此你可以选择自己最习惯的方式。

<br>

## 3. 内边距的百分数值

元素的内边距可以用百分数值设定。百分数值相对父元素内容区的宽度计算，因此，如果出于什么原因，父元素的宽度变了，内边距也会变。来看下面得示例，其结果如下图所示。

```css
p {
    padding: 10%;
    background-color: silver;
}
```

```html
<div style="width: 600px;">
	<p>
		This paragraph is contained within a DIV that has a width of 600 pixels, so its padding will be 10% of the width of the paragraph's parent element. Given the declared width of 600 pixels, the padding will be 60 pixels on all sides.
	</p>
</div>
<div style="width: 300px;">
	<p>
		This paragraph is contained within a DIV with a width of 300 pixels, so its padding will still be 10% of the width of the paragraph's parent. There will, therefore, be half as much padding on this paragraph as that on the first paragraph.
	</p>
</div>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E7%88%B6%E5%85%83%E7%B4%A0%E7%9A%84%E5%AE%BD%E5%BA%A6%E5%AF%B9%E5%86%85%E8%BE%B9%E8%B7%9D%E7%99%BE%E5%88%86%E6%95%B0%E5%80%BC%E7%9A%84%E5%BD%B1%E5%93%8D.png)

从上图可以看出一些奇怪的地方，随着父元素宽度的变化，不仅两侧的内边距变了，上下内边距也变了。这正是 css 定义的行为。回顾这个属性的定义，你应该还记得，百分数值是相对父元素的宽度计算的。这一点不仅针对左右内边距，也针对上下内边距。因此，对下述样式和标记来说，段落的上内边距为 50 像素：

```css
div p {
    padding-top: 10%;
}
```

```html
<div style="width: 500px;">
    <p>
        This is a paragraph, and its top margin is 10% the width of ites parent
    </p>
</div>
```

如果你觉得这种处理方式有点奇怪，可以这样理解：正常流动模式下的多数元素，其高度恰好够容纳后代元素的内容及其内边距（这也是本章假定的行为）。如果元素的上下内边距相对父元素的高度计算，为了容纳上下内边距，父元素的高度要增加，而高度变化后，上下内边距的值又要随之变化，如此一直下去，进入无限循环。但是元素的上下内边距又不能忽略，因此规范制定人员决定相对父元素内容区的宽度计算上下内边距的百分数值，原因很简单，父元素的宽度不随后代元素的宽度影响。

那么，如果元素没有声明具体的宽度？此时，元素框的总体宽度（包括内边距）由父元素的宽度设定。利用这一点可以实现流动布局，元素的内边距随父元素的尺寸而增大或减少。如果使用百分数值设定元素的内边距，用户改变浏览器窗口的宽度时，内边距会随之变大或减少。当然具体怎么设计由你自己决定。

>定位元素、弹性布局中的元素和栅格布局中的元素，其上下内边距的百分数值多数时候相对格式化上下文的高度计算。

此外，百分数值也可以与长度值混用。因此，如果想把 h2 元素的上下内边距设为 0.5em，把两侧的内边距设为父元素宽度的 10%，可以声明下述规则，结果如下图所示。

```css
h2 {
    padding: 0.5em 10%;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E6%B7%B7%E7%94%A8%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%86%85%E8%BE%B9%E8%B7%9D%E5%80%BC.png)

这里，虽然上下内边距的值是固定不变的，但是两侧的内边距值会随着父元素宽度的变化而变化。

<br>

## 4. 行内元素的内边距

不知你发现了没有，目前对内边距的讨论都是针对生成块级框的元素。如果把内边距应用到行内非置换元素上，情况就有些不同了。

假设你想为加粗强调的文本设定上下内边距：

```css
strong {
    padding-top: 25px;
    padding-bottom: 50px;
}
```

规范允许这么做，但是应用到行内非置换元素上的内边距对行高没有任何影响。因为没有背景的内边距是透明的，所以上述声明其实没有视觉效果。还是那句话，因为行内非置换元素的内边距对元素的行高没有影响。

但是要小心，如果行内非置换元素有被背景色和内边距，其背景会向元素上下延伸。例如：

```css
strong {
    padding-top: 0.5em;
    background-color: silver;
}
```

这个规则的效果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E8%A1%8C%E5%86%85%E9%9D%9E%E7%BD%AE%E6%8D%A2%E5%85%83%E7%B4%A0%E4%B8%8A%E5%86%85%E8%BE%B9%E8%B7%9D%E7%9A%84%E6%95%88%E6%9E%9C.png)

行高没有变，但是因为背景色延伸到内边距区域了，所以背景与前面的行出现了重叠。这样的结果是符合预期的。

上述行为针对行内非置换元素的上下两边，左右两边又是另外一种情况。来看一行中一小段行内非置换元素的情况。如果为这样的元素设定左内边距或右内边距，确实能看到效果，如下图所示。

```css
strong {
    padding-left: 25px;
    background: silver;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E8%AE%BE%E5%AE%9A%E4%BA%86%E5%B7%A6%E5%86%85%E8%BE%B9%E8%B7%9D%E7%9A%84%E8%A1%8C%E5%86%85%E9%9D%9E%E7%BD%AE%E6%8D%A2%E5%85%83%E7%B4%A0.png)

注意，行内非置换元素前方的单词后面和行内元素的边界之间有点空白。如果愿意，可以在行内元素的两侧都添加额外的空白：

```css
strong {
    padding-left: 25px;
    padding-right: 25px;
    background: silver;
}
```

效果跟预期一样，行内元素的左右两侧都有额外的空白，而上下则没有，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E8%A1%8C%E5%86%85%E9%9D%9E%E7%BD%AE%E6%8D%A2%E5%85%83%E7%B4%A0%E7%9A%84%E4%B8%A4%E4%BE%A7%E6%9C%89%2025%20%E5%83%8F%E7%B4%A0%E7%9A%84%E5%86%85%E8%BE%B9%E8%B7%9D.png)

但是，如果行内非置换元素断成多行，情况稍微有点变化。下图展示了有内边距的行内非置换元素断成多行时的效果：

```css
strong {
    padding: 0 25px;
    background: silver;
}
```

左内边距应用到元素的开头，右内边距应用到元素的末尾。默认情况下，内边距不应用到各行的左右两侧。此外，可以看出，如果没有内边距，将在 background 后面断行。仅当内边距改变了元素的内容在一行中开始的位置时，才会影响断行的位置。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E8%A1%8C%E5%86%85%E9%9D%9E%E7%BD%AE%E6%8D%A2%E5%85%83%E7%B4%A0%E7%9A%84%E6%96%87%E6%9C%AC%E6%96%AD%E6%88%90%E4%BA%86%E4%B8%A4%E8%A1%8C%EF%BC%8C%E5%9C%A8%E4%B8%A4%E4%BE%A7%E6%B7%BB%E5%8A%A0%2025%20%E5%83%8F%E7%B4%A0%E5%86%85%E8%BE%B9%E8%B7%9D%E7%9A%84%E6%95%88%E6%9E%9C.png)

>使用 box-decoration-break 属性可以改变断行后每一行两侧应用内边距的方式。详情参见第 7 章。

<br>

## 5. 置换元素的内边距

你可能觉得奇怪，但是内边距也可以应用到置换元素上。最让人惊讶的是，可以为图像设定内边距，例如：

```css
img {
    background: silver;
    padding: 1em;
}
```

不管置换元素是块级还是行内的，内边距都出现在内容四周，而且背景色会填充到内边距区域，如下图所示。从这幅图中可以看出，内边距会把置换元素的边框（这里是一条虚线）推开，远离内容。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E7%BD%AE%E6%8D%A2%E5%85%83%E7%B4%A0%E7%9A%84%E5%86%85%E8%BE%B9%E8%B7%9D.png)

还记得，行内非置换元素的内边距对文本行的高度没有影响。置换元素截然相反，规则完全变了。从下图中可以看出，行内非置换元素的内边距对行高有很大影响。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E7%BD%AE%E6%8D%A2%E5%85%83%E7%B4%A0%E7%9A%84%E5%86%85%E8%BE%B9%E8%B7%9D%E5%AF%B9%E8%A1%8C%E9%AB%98%E7%9A%84%E5%BD%B1%E5%93%8D.png)

稍后你将看到，边框和外边距也有这种影响。

>截至 2017 年年末，作为置换元素的表单元素（例如 input），还没有确定如何装饰。例如，复选框的内边距放在何处是完全无从知晓。因此，写作本书时，很多浏览器会忽略表单元素的内边距（以及其他样式），那些不忽略的浏览器也只是尽自己所能应用样式。

<br>

# 3. 边框

元素的内边距之外的边框。边框是元素的内容和内边距周围的移到多条线段。默认情况下，元素的背景在边框的外边界处终止，不会延伸到外边距区域。边框在外边距内侧。

边框有三个要素：宽度（厚度），样式（外观），颜色。边框宽度的默认值为 medium，对应的具体值视情况而定，通常为 2 像素。尽管如此，但你一般见不到边框，因为默认的边框样式为 none，即不存在（稍后你将发现，这又会重置 border-width 的值）。

最后，默认的边框颜色是元素自身的前景色。如果没有为边框声明颜色，默认与元素中的文本颜色相同。如果元素中没有文本，例如只含图像的表格，那么边框的颜色将与父元素（有可能是 body、div 或另一个 table）的文本颜色相同（因为 color 属性是继承的）。因此，如果一个表格有边框，而 body 是它的父元素，对下述规则而言：

```css
body {
    color: purple;
}
```

默认情况下，表格周围的边框是紫色的（假设用户代理没有为表格设定颜色）。

按照 css 规范的定义，元素的背景延伸到边框的外边界，至少默认情况下是这样。知道这一点很重要，因为有些边框是间断的，例如 dotted 和 dashed，所以元素的背景会出现在边框的间隙中。

>使用 background-clip 属性可以禁止可见背景延伸到边框区域。详情参见第 9 章。

## 1. 边框的样式

样式是边框最重要的要素，不是因为它控制着边框的外观（确实有这功效），而是因为倘若没有样式，你根本看不到边框。那我们就从样式开始。

```css
border-style

取值：[ none | hidden | solid | dotted | dashed | double | groove | ridge | inset | outset ]{1,4}
初始值：简写形式没有
适用于：所有元素
计算值：参见各单独属性（border-top-style 等）
继承性：否
动画性：否
备注：css2 只要求用户代理支持 solid 和 none，其他值（除 hidden）可以解释为 solid。css2.1 没有这一规定。
```

除 inherit 之外，css 为 border-style 属性定义了 10 种不同的样式，包括默认值 none。各样式的效果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E4%B8%8D%E5%90%8C%E7%9A%84%E8%BE%B9%E6%A1%86%E6%A0%B7%E5%BC%8F.png)

hidden 值等价于 none，但在表格上有些区别：解决边框冲突的方式稍有不同。

double 样式的处理方式可能最出乎你的意料。根据定义，两条线的宽度加上二者之间间隙的宽度等于 border-width 的值（下一节讨论）。但是，css 规范没有规定两条线的粗细是否可以不同，或者要始终保持相同的宽度，也没有规定两条线之间的间隙能不能比线宽宽一点或窄一点。这些都用户代理决定，完全不受创作人员的控制。

为了更清楚地展示视觉效果，上图中的边框使用的颜色都是 gray（灰色）。边框样式的外观由边框的颜色决定，但是不同的用户代理采用的具体方式有所不同。不同的浏览器可以采用不同的方式处理 inset、outset、groove 和 ridge 等样式的颜色。例如，下图展示了两种处理内凹边框的方式。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E6%B8%B2%E6%9F%93%E5%86%85%E5%87%B9%E8%BE%B9%E6%A1%86%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%9C%89%E6%95%88%E6%96%B9%E5%BC%8F.png)

注意，其中一个浏览器把下边框和右边框的颜色设为 gray，上边框和左边框的颜色为更深的灰色。而在另一个浏览器中，下边框和右边框要比 gray 淡，上边框和左边框要深一些，但是没有前一个浏览器那么深。

下面为未访问的超链接中的图像定义边框样式。你可以把样式定义为 putset，实现一种突出按钮的外观，如下图所示。

```css
a:link img {
    border-style: outset;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E4%B8%BA%E8%B6%85%E9%93%BE%E6%8E%A5%E4%B8%AD%E7%9A%84%E5%9B%BE%E5%83%8F%E6%B7%BB%E5%8A%A0%E5%A4%96%E5%87%B8%E8%BE%B9%E6%A1%86.png)

默认情况下，边框的颜色与元素的 color 属性值相同，这里有可能是 blue。这是因为图像在超链接中，而超链接的前景色通常是 blue。如果愿意，可以把颜色改为银色：

```css
a:link img {
    border-style: outset;
    color: silver;
}
```

现在，边框的颜色将变成银灰色，因为这是图像的前景色。尽管图像不使用前景色，但是依然会传递给边框。8.3.3 节会介绍改变边框颜色的另一种方式。

不过要记住，边框中的颜色转换又用户代理控制。下面在两个浏览器中比较一下蓝色外凸边框，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E5%A4%96%E5%87%B8%E8%BE%B9%E6%A1%86%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%B8%B2%E6%9F%93%E7%BB%93%E6%9E%9C.png)

你同样会发现，在一个浏览器中，有两边的颜色变淡了，另外两边的颜色变深了。而在另一个浏览器中，只有阴影中的那两边会变深。因此，为了完全掌控各边的颜色，创作人员通常不会使用 outset 样式，任由浏览器发挥，而是分别设定各边的颜色。具体方法稍后说明。

<br>

### 多个样式

一个边框可以有多个样式。例如：

```css
p.aside {
    border-style: solid dashed dotted solid;
}
```

这个段落的上边框为实线，右边框为虚线，下边框为点线，左边框为实线。

这个属性与 padding 一样，值的顺序为上右下左。值少于四个时的复制规则也与 padding 属性一样。因此，下面两个规则的效果一样，如下图所示。

```css
p.new1 {
    border-style: solid none dashed;
}

p.new2 {
    border-style: solid none dashed none;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E7%AD%89%E4%BB%B7%E7%9A%84%E6%A0%B7%E5%BC%8F%E8%A7%84%E5%88%99.png)

<br>

### 单边样式

有时，你可能不想一次性为四个边设置样式，而是只设置一边。此时可以使用单边边框样式属性。

```css
border-top-style, border-right-style, border-bottom-style, border-left-style

取值：none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
初始值：none
适用于：全部元素
计算值：指定的值
继承性：否
动画性：否
```

单边边框样式属性的作用无需过多解释。假如你想修改下边框的样式，使用 border-bottom-style 即可。

border 经常与单边属性结合使用。假如你想为一个标题的三边设置实线边框，但是左边没有边框，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E5%8E%BB%E6%8E%89%E5%B7%A6%E8%BE%B9%E6%A1%86.png)

为此，有两种实现方式，而且二者是等效的：

```css
h1 {
    border-style: solid solid solid none;
}

/* 上下两个规则是等效的 */
h1 {
    border-style: solid;
    border-left-style: none;
}
```

注意，如果使用第二种方式，要把单边属性放在简写形式后面。这是因为 border-style: solid 其实相当于 border-style: solid solid solid solid，如果把 border-left-style: none 放在 border-style 声明前面，简写形式中的值会把单边属性中的值（none）覆盖掉。

<br>

## 2. 边框宽度

设置好边框样式后，接下来要指定宽度。这也没什么难得，使用 border-width 或针对各单边的属性即可。

```css
border-width

取值：[ thin | medium | thick | <length> ]{1,4}
初始值：简写形式没有
适用于：所有元素
计算值：参见各单独属性（border-top-style 等）
继承性：否
动画性：是
```

```css
border-top-width, border-right-width, border-bottom-width, border-left-width

取值：thin | medium | thick | <length>
初始值：medium
适用于：所有元素
计算值：绝对长度，边框样式为 none 或 hidden 时是 0
继承性：否
动画性：是
```

与单边内边距属性类似，这些属性分别用于设定各边的边框宽度。

>截至 2017 年年末，边框宽度仍旧不能使用百分数值，真是可惜。

设定边框宽度的方式有四种，可以直接提供长度值，例如 4px 或 0.1em，也可以使用三个关键字中的一个。可用的三个关键字为 thin、medium（默认值）和 thick。这三个关键字不对应具体的宽度，但是相互之间有一定的差值。根据规范，thick 始终比 medium 宽，而 medium 又比 thin 宽，这也算合情合理。

然而，它们对应的宽度却没有具体定义。一个用户代理可以把它们设为 5px、3px 和 2px，而另一个用户代理可以把它们设为 3px、2px 和 1px。不管用户代理是如何设定的，在整个文档中肯定是保持不变的，不会根据边框出现的位置而变化。如果 medium 对应于 2px，那么不管边框出现在 h1 元素周围还是 p 元素周围，中等宽度的边框始终是 2 像素宽。下图展示了这三个关键字对应值的一种情况，以及相互之间的差异。可以看出，同一关键字对应的值不受内容的影响。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/border-width%20%E5%85%B3%E9%94%AE%E5%AD%97%E5%80%BC%E4%B9%8B%E9%97%B4%E7%9A%84%E5%B7%AE%E5%BC%82.png)

假设有个段落既设定了背景色，也设定了边框样式：

```css
p {
    background-color: silver;
    border-style: solid;
}
```

边框的宽度默认为 medium，但是可以轻易修改：

```css
p {
    background-color: silver;
    border-style: solid;
    border-width: thick;
}
```

当然，边框的宽度可以设为非常大的值，例如 50 像素，如下图所示。

```css
p {
    background-color: silver;
    padding: 0.5em;
    border-style: solid;
    border-width: 50px;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E7%89%B9%E5%88%AB%E5%AE%BD%E7%9A%84%E8%BE%B9%E6%A1%86.png)

此外，也可以单独为每一边设定边框宽度。方法有两个，而且我们都熟悉。第一种方法是使用本节开头提到的单边属性，例如 border-bottom-width。第二种方法是使用 border-width 属性，指定多个值，按规定方式复制值，如下图所示。

```css
h1 {
    border-style: dotted;
    border-width: thin 0;
}

p {
    border-style: solid;
    border-width: 15px 2px 8px 5px;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E5%80%BC%E5%A4%8D%E5%88%B6%E5%92%8C%E5%90%84%E8%BE%B9%E5%AE%BD%E5%BA%A6%E4%B8%8D%E7%AD%89%E7%9A%84%E8%BE%B9%E6%A1%86.png)

<br>

### 完全没有边框

目前，我们设定的边框样式都是可见的，例如 solid 和 outset。如果把 border-style 设为 none？

```css
p {
    border-style: none;
    border-width: 20px;
}
```

虽然边框的宽度为 20px，但样式是 none。此时，边框不仅没有样式，也没有宽度。边框就这么烟消云散了。为什么？

你可能还记得，本章前面是这样说的：样式为 none 的边框不存在。这样表达是经过深思熟虑的，这里就能用这条规则解释。因为边框不存在，也就不可能有宽度，因此不管把边框设为多宽，都将自动设为 0（零）。毕竟，你不能说一个空水杯中有一半的空气。只有杯子里有容物，你才能描述容物的深度。同样的道理，只有边框存在，你才能说边框有多宽。

这一点一定要记住，因为忘记声明边框样式是一个常犯的错误。这会让创作人员困惑不已，因为乍一看样式应该能正确出现。对下述规则来说，尽管把边框的宽度设为 20 像素了，但是任何 h1 元素都不会有边框。

```css
h1 {
    border-width: 20px;
}
```

因为 border-style 的默认值是 none，如果不声明样式，就相当于声明 border-style: none。所以，如果想让边框出现，必须声明边框样式。

<br>

## 3. 边框颜色

与边框的其他两个要素相比，设定边框颜色要简单得多。css 提供的 border-color 属性可以一次设定四个颜色值。

```css
border-color

取值：<color>{1,4}
初始值：简写形式没有
适用于：所有元素
计算值：参见各单独属性（border-top-color 等）
继承性：否
动画性：是
```

如果颜色值少于四个，复制的方式与之前一样。因此，如果想为 h1 元素设置灰色的上下细边框、绿色的左右粗边框，想为 p 元素设置灰色的中等边框，可以使用下述规则，结果如下图所示。

```css
h1 {
    border-style: solid;
    border-width: thin thick;
    border-color: gray green;
}

p {
    border-style: solid;
    border-color: gray;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E4%B8%8D%E5%90%8C%E7%9A%84%E8%BE%B9%E6%A1%86.png)

如上例中的段落，单个颜色值将应用于四个边。如果提供四个颜色值，可以把各边设为不同的颜色。任何类型的颜色值都可以，从具名颜色到十六进制和 RGBA 值都可以：

```css
p {
    border-style: solid;
    border-width: thick;
    border-color: black rgba(25%, 25%, 25%, 0.5) #808080 silver;
}
```

前文说过，如果不声明颜色，默认颜色为元素的前景色。因此下述规则得到的结果如下图所示。

```css
p.shade1 {
    border-style: solid;
    border-width: thick;
    color: gray;
}

p.shade2 {
    border-style: solid;
    border-width: thick;
    color: gray;
    border-color: black;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E8%BE%B9%E6%A1%86%E9%A2%9C%E8%89%B2%E5%8F%96%E8%87%AA%E5%85%83%E7%B4%A0%E7%9A%84%E5%89%8D%E6%99%AF%E8%89%B2%E5%92%8C%20border-color%20%E5%B1%9E%E6%80%A7%E7%9A%84%E5%80%BC.png)

得到的结果是，第一个段落的边框为灰色，取自段落的前景色。而第二个段落的边框为黑色，因为我们使用 border-color 属性显式声明了。

边框颜色也有相应的单边属性，而且用法与单边样式和宽度属性类似。下述规则为标题设置灰色的实线右边框，其他三边则为黑色的实线边框：

```css
h1 {
    border-style: solid;
    border-color: black;
    border-right-color: gray;
}
```

```css
border-top-color, border-right-color, border-bottom-color, border-left-color

取值：<color>
初始值：目标元素的 color 属性值
适用于：所有元素
计算值：如果未指定值，为目标元素 color 属性的计算值，否则为指定的值
继承性：否
动画性：是
```

<br>

### 透明边框

你应该还记得，没有样式的边框也就没有宽度。然而，有时你会想创建有宽度但不可见的边框。此时要把边框的颜色设为 transparent（css2 引入）。

假设我们想让一排三个链接的边框默认不可见，但是鼠标悬停其上时显示内凹边框。此时，常规状态下的链接要有透明的边框。

```css
a:link, a:visited {
    border-style: inset;
    border-width: 5px;
    border-color: transparent;
}

a:hover {
    border-color: gray;
}
```

结果如下图所示。

透明边框在某种程度上相当于内边距，不过透明边框有个额外好处，需要时可以让边框可见。之所以说透明边框相当于内边距，是因为默认情况下元素的背景（假设为可见背景）会延伸到边框区域。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E4%BD%BF%E7%94%A8%E9%80%8F%E6%98%8E%E8%BE%B9%E6%A1%86.gif)

<br>

## 4. 简写的边框属性

可惜，border-color 和 border-style 等简写的属性没有想象中那么有用。例如，你可能想为所有 h1 元素设置灰色的粗实线边框，但是只出现在底边。如果仅用目前讨论的属性，要花点时间才能实现这样的边框。下面给出两种方式：

```css
/* 方式一 */
h1 {
    border-bottom-width: thick;
    border-bottom-style: solid;
    border-bottom-color: gray;
}

/* 方式二 */
h1 {
    border-width: 0 0 thick;
    border-style: none none solid;
    border-color: gray;
}
```

两种方式的输入量都不小，都不算简便。幸好，我们有更好的方法：

```css
h1 {
    border-bottom: thick solid rgb(50%, 40%, 75%);
}
```

这个规则只把边框应用到元素的底边，如下图所示，其它三边使用默认值。而默认的边框样式为 none，所以其他三边不会出现边框。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E4%BD%BF%E7%94%A8%E7%AE%80%E5%86%99%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE%E4%B8%8B%E8%BE%B9%E6%A1%86.png)

你可能猜到了，这样的简写属性一共有四个。

```css
border-top, border-right, border-bottom, border-left

取值：[ <border-width> || <border-style> || <border-color> ]
初始值：简写属性没有
适用于：所有元素
计算值：参见各单独属性
继承性：否
动画性：参见各单独属性
```

借助这些属性可以实现复杂的边框，如下图中那样。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E5%8D%81%E5%88%86%E5%A4%8D%E6%9D%82%E7%9A%84%E8%BE%B9%E6%A1%86.png)

```css
h1 {
    border-left: 3px solid gray;
    border-right: green 0.25em dotted;
    border-top: thick goldenrod inset;
    border-bottom: double rgb(13%, 33%, 53%) 10px;
}
```

可以看到，属性值的顺序并不重要。下述三个规则得到的边框完全一样：

```css
h1 {
    border-bottom: 3px solid gray;
}

h2 {
    border-bottom: solid gray 3px;
}

h3 {
    border-bottom: 3px gray solid;
}
```

有些值还可以忽略，使用默认值，例如：

```css
h3 {
    color: gray;
    border-bottom: 3px solid;
}
```

因为这里没有声明边框颜色，所以使用默认值，即元素的前景色。但是要注意，如果省略边框样式，默认值 none 将导致边框不存在。

而如果只设定样式，边框会出现。假如你想把上边框的样式设为 dashed，宽度使用默认值 medium，颜色与元素的文本颜色相同。此时只需像下面这样声明（结果见下图）：

```css
p.roof {
    border-top: dashed;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E5%85%83%E7%B4%A0%E6%9C%89%E8%99%9A%E7%BA%BF%E4%B8%8A%E8%BE%B9%E6%A1%86.png)

另外要注意，因为这些单边属性只针对某一边，所以其值不会复制，就算复制也没有意义。这些属性的值分别对应一个要素：一个宽度值、一个颜色值和一个样式值。所以，不要试图为同一要素声明多个值：

```css
/* 两个宽度值，错误 */
h3 {
    border-top: thin thick solid purple;
}
```

此时，整个声明是无效的，用户代理会将其忽略。

<br>

## 5. 整个边框

最后还有一个最简单的简写属性：border。

```css
border

取值：[ <border-width> || <border-style> || <border-color> ]
初始值：参见各单独属性
适用于：所有元素
计算值：指定的值
继承性：否
动画性：参见各单独属性
```

这个属性的优点是足够简洁，但这也导致一些限制。在讨论这些限制之前，先来看看 border 的用法。如果想为所有 h1 元素设置银色的粗实线边框，可以使用下述声明，显示的结果如下图所示。

```css
h1 {
    border: thick silver solid;
}
```

这些值应用到全部四个边上。这显然比下面这样声明好一些：

```css
h1 {
    border-top: thick silver solid;
    border-bottom: thick silver solid;
    border-right: thick silver solid;
    border-left: thick silver solid; /* 结果与前面一样 */
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E9%9D%9E%E5%B8%B8%E7%AE%80%E7%9F%AD%E7%9A%84%E8%BE%B9%E6%A1%86%E5%A3%B0%E6%98%8E.png)

border 属性的缺点是，定义的样式、宽度和颜色同时应用于四个边。如果想改变元素的某一边，要使用其他边框属性。同样，这种情况要利用层叠机制：

```css
h1 {
    border: thick goldenrod solid;
    border-left-width: 20px;
}
```

第二个规则覆盖第一个规则的左边框宽度，把 thick 变成 20px，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E5%85%85%E5%88%86%E5%88%A9%E7%94%A8%E5%B1%82%E5%8F%A0%E6%9C%BA%E5%88%B6.png)

前面提到的简写属性注意事项在这里也成立：如果省略某个值，自动使用默认值。这可能导致意料之外的效果。例如：

```css
h4 {
    border-style: dashed solid double;
}

h4 {
    border: medium green;
}
```

第二个规则缺少 border-style 声明，因此将使用默认值 none，所以 h4 元素根本不会有边框。

<br>

## 6. 行内元素的边框

行内元素处理边框的方式你应该不陌生了，规则基本上与之前所讲的内边距处理方式一样。不过，我还是要简单说明一下。

首先，不管把行内元素的边框设为多宽，元素的行高都不会变。下面为加粗文本设置上下边框：

```css
strong {
    border-top: 10px solid hsl(216, 50%, 50%);
    border-bottom: 5px solid #AEA010;
}
```

同样，css 规范允许这么做，但是对行高完全没有影响。然而，因为边框是可见的，因此会渲染出来，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E8%A1%8C%E5%86%85%E9%9D%9E%E7%BD%AE%E6%8D%A2%E5%85%83%E7%B4%A0%E7%9A%84%E8%BE%B9%E6%A1%86.png)

既然要显示出来，那就得有地方放置。

依旧，只是行内元素上下两边的边框是这样，左右两边又是另一番情景。如果为行内元素添加左边框或右边框，边框不仅会显示出来，还会把周围的文本推开，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E6%9C%89%E5%B7%A6%E8%BE%B9%E6%A1%86%E7%9A%84%E8%A1%8C%E5%86%85%E9%9D%9E%E7%BD%AE%E6%8D%A2%E5%85%83%E7%B4%A0.png)

```css
strong {
    border-left: 25px double hsl(216, 50%, 50%);
    background: silver;
}
```

边框与内边距一样，浏览器计算行内元素非置换元素断行的方式不直接受盒模型属性的影响。只不过，边框所占的空间可能会改变行中部分内容的位置，导致出现在行尾的单词有所变动。

>使用 box-decoration-break 属性可以改变行框两端绘制边框的方式。详情参见第 7 章。

而置换元素（例如图像）的边框就不同了，行为跟内边距很像：边框会影响文本行的高度，而且会把周围的文本推开。下述样式得到的结果如下图所示。

```css
img {
    border: 1em solid rgb(216, 108, 54);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E8%A1%8C%E5%86%85%E7%BD%AE%E6%8D%A2%E5%85%83%E7%B4%A0%E7%9A%84%E8%BE%B9%E6%A1%86.png)

<br>

## 7. 圆角边框

元素边框的角是直的，可以使用 border-radius 属性定义一个（或两个）圆角半径，把边角变得圆滑一些。这一次，我们先介绍简写属性，本节末尾再稍微提及各个单独属性。

```css
border-radius

取值：[ <length> | <percentage> ]{1,4} [ / [ <length> | <percentage> ]{1,4}]?
初始值：0
适用于：除表格内的元素之外的所有元素
计算值：两个绝对长度或百分数值
百分数：相对边框框的尺寸计算
继承性：否
动画性：是
```

圆角的半径是一个圆或椭圆的半径，圆或椭圆的四分之一用作边框的圆角。先讲稍微好理解一点的圆。

如果想为元素添加比较明显的圆角，可以这么做：

```css
#example {
    border-radius: 2em;
}
```

结果如下图所示，为了说明方便，笔者在两个角的位置上加了圆（四个角都是通过这种方式处理的）。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E8%BE%B9%E6%A1%86%E5%9C%86%E8%A7%92%E6%98%AF%E5%A6%82%E4%BD%95%E8%AE%A1%E7%AE%97%E7%9A%84.png)

把注意力集中在左上角。左边框在距上边框 2 em 处向内弯曲，上边框在距左边框 2 em 处向内弯曲。整个曲线沿半径为 2 em 的圆外侧绘制。

如果画一个方框，恰好容纳左上角的曲线，那么方框的宽和高都为 2 em，右下角也是如此。单个值得到的是圆形圆角。如果提供单个百分数，得到的结果更接近椭圆。以下述规则为例，结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC8%E7%AB%A0%EF%BC%9A%E5%86%85%E8%BE%B9%E8%B7%9D%E3%80%81%E8%BE%B9%E6%A1%86%E3%80%81%E8%BD%AE%E5%BB%93%E5%92%8C%E5%A4%96%E8%BE%B9%E8%B7%9D/%E7%99%BE%E5%88%86%E6%95%B0%E5%9C%86%E8%A7%92%E5%8D%8A%E5%BE%84%E7%9A%84%E8%AE%A1%E7%AE%97%E6%96%B9%E5%BC%8F.png)

```css
#example {
    border-radius: 33%;
}
```

同样把注意力集中在左上角。左边框从距元素框顶边 33% 高度的位置处向内弯曲。也就是说，如果元素框的高度为 100 像素，就从距元素框顶边 33 像素处向内弯曲。

类似地，上边框从距元素框左边 33% 宽度处向内弯曲。如果元素的宽度为 600 像素，就从距左边 198 像素（600 ⨉ 0.33 = 198）处向内弯曲。

这两点之间的曲线是椭圆的左上四分之一，横轴长 198 像素，纵轴长 33 像素（因此整个椭圆的横轴长 396 像素，纵轴长 66 像素）。

各角的处理方式相同，得到的圆角是对称的，而不是相同的。























