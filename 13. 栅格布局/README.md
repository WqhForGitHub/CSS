# 1. 创建栅格容器

创建栅格的第一步是定义栅格容器。这与定位所用的容纳块和弹性盒布局中的弹性容器的作用很像：栅格容器为其中的内容定义一个栅格格式化上下文。

从这一点上看，栅格布局从弹性盒布局上沿袭了相当多的概念。例如，栅格容器的子元素是栅格元素，就像弹性容器的子元素是弹性元素一样。子元素的子元素不是栅格元素，不过栅格元素自身也可以变作栅格容器，因此它的子元素将变成嵌套栅格的栅格元素。栅格之中可以嵌套栅格，而且层级不限（栅格布局还有子栅格这个概念， 它与嵌套的栅格容器不是一回事，稍后讨论）。

栅格有两种：常规栅格和行内栅格。这两种栅格使用 display 属性的特殊值创建：grid 和 inline-grid。前者生成块级框，后者生成行内框。二者之间的区别如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E5%B8%B8%E8%A7%84%E6%A0%85%E6%A0%BC%E5%92%8C%E8%A1%8C%E5%86%85%E6%A0%85%E6%A0%BC.png)

这与 display 属性的 block 和 inline-block 值十分相似。多数栅格都是块级的，不过你要知道也有创建行内栅格这一选择。

虽然 display: grid 创建的是块级栅格，但是严谨的规范明确指出，栅格容器不是块级容器。意思就是，栅格框在布局中的行为与块级容器很像，但是二者之间仍有诸多区别。

首先，浮动的元素不会打乱栅格容器。这意味着，栅格不会移到浮动元素的下方，而块级容器会。这一差异如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%B5%AE%E5%8A%A8%E5%85%83%E7%B4%A0%E5%AF%B9%E5%9D%97%E7%BA%A7%E5%AE%B9%E5%99%A8%E5%92%8C%E6%A0%85%E6%A0%BC%E5%AE%B9%E5%99%A8%E7%9A%84%E5%BD%B1%E5%93%8D%E4%B8%8D%E4%B8%80%E6%A0%B7.png)

其次，栅格容器的外边距不与其后代的外边距折叠。而块级框的外边距（默认）与其后代的外边距折叠，这是栅格容器与块级框的又一区别。例如，有序列表的第一个列表项目可能有上外边距，但这个外边距将与列表元素的上外边距折叠。然而，栅格元素的上外边距不会与栅格容器的上外边距折叠。这一差异如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E5%A4%96%E8%BE%B9%E8%B7%9D%E4%B8%8D%E6%8A%98%E5%8F%A0.png)

有些 CSS 属性和功能不能用在栅格容器和栅格元素上，如下：

* 栅格容器上的所有 solumn 属性（例如 column-count、columns 等）都被忽略。
* 栅格容器没有 ::first-line 和 ::first-letter 伪元素，如果使用，将被忽略。
* 栅格元素（而非栅格容器）上的 float 和 clear 属性将被忽略。尽管如此，float 属性对栅格容器中子元素的 display 属性的计算值是有影响的，因为栅格元素的 display 值在变成栅格元素之前计算。
* vertical-align 属性对栅格元素不起作用，不过可能会影响栅格元素中的内容（别担心，对齐栅格元素有其他更强大的方式）。

最后，如果为栅格容器声明的 display 值是 inline=grid，而目标元素的浮动的或绝对定位的，那么 display 的计算值将变为 grid（取代 inline-grid）。

定义好栅格容器后，接下来要在容器中设置栅格。讨论具体方式之前，有必要说明几个术语。

<br>

# 2. 基本的栅格术语

前面已经讨论过栅格容器和栅格元素，下面为其做个更准确的定义。如前所述，栅格容器是确立栅格格式化上下文的框体，即定义一个栅格区域，其中的元素根据栅格布局（而非块级布局）规则排布。这一点可以与通过 display: table 创建表格格式化上下文类比。表格自身就是一种栅格系统，因此这样类比还是相当合适的，但是不要以为栅格只是另一种形式的表格。栅格比表格强大得多。

栅格元素是在栅格格式化上下文中参与栅格布局的东西。这通常是栅格容器的子元素，但也可以是元素内容中的匿名文本（即不再元素中的文本）。来看下述代码，得到的结果如下图所示：

```          css
#warning {
    display: grid;
    background: #FCC;
    padding: 0.5em;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(7, 1fr);
}
```

```html
<p id="warning">
    <img src="warning.svg" >
    <strong>Note: </strong>
    This element is a 
    <em>grid container</em>
    with several
    <em>grid items</em>
    inside it.
</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%A0%85%E6%A0%BC%E5%85%83%E7%B4%A0.png)

注意，各元素及元素之间的文本都变成栅格元素了。图像是栅格元素，其他元素和文本块也是栅格元素，一共有 7 个，这些栅格元素都参与栅格布局，然而匿名文本块难以（或无法）使用下文将讨论的栅格属性控制。

>你可能想知道 grid-template-rows 和 grid-template-columns 的作用，别急，下一节讨论。

<br>

在使用栅格属性的过程中，可能会创建或引用栅格布局的多个核心组件，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%A0%85%E6%A0%BC%E7%BB%84%E4%BB%B6.png)

最重要的组件是栅格线。栅格线的位置定义好之后，其他栅格组件也就随之而现了：

* 栅格轨道（grid track）指两条相邻的栅格线之间夹住的整个区域，从栅格容器的一边延伸到对边，即栅格列或栅格行。栅格轨道的尺寸由栅格线的位置决定。可以对比表格中的列和行理解。用适用性更广的语言来说，可以称之为块级轴和行内轴轨道，（对西方语言来说）列轨道在块级轴上，行轨道在行内轴上。
* 栅格单元（grid cell）指四条栅格线限定的区域，内部没有其他栅格线贯穿，类似于单元格。这是栅格布局中区域的最小单位。栅格单元不能直接使用 CSS 栅格属性处理，即没有属性能把一个栅格元素放在指定的栅格单元里（详情参见下一点）。
* 栅格区域（grid area）指任何四条栅格线限定的矩形区域，由一个或多个栅格单元构成。最小的栅格区域是一个栅格单元，最大的栅格区域是栅格中所有的栅格单元。栅格区域能使用 CSS 栅格属性直接处理，定义好栅格区域后即可在其中放置栅格元素。

特别注意，栅格轨道、栅格单元和栅格区域都完全由栅格线建构，不一定非要有相应的栅格元素存在。栅格区域中不一定充满栅格元素，完全可以让部分甚至多数栅格单元空着。此外，栅格元素还可以重叠，方法是定义重叠的栅格区域，或者把栅格线重叠起来。

另外要注意的一点是，栅格线的数量不限，想定义多少就可以定义多少。你可以只定义一系列纵向的栅格线，创建一行多列布局。你也可以反过来，创建多个行轨道但不创建列轨道（当然还是会有一个列轨道，从栅格容器的一边延伸到对边）。

然而，如果栅格元素无法放入你定义的列或行轨道中，或者你明确指定把栅格元素放在轨道的外部，那么栅格系统将自动添加栅格线和轨道。

<br>

# 3. 放置栅格线

放置栅格线可不是一件简单的事。不是说这个概念有多难，而是因为栅格线的放置方式太多了，而且不同的方式使用的句法有细微的差别。

先看两个联系紧密的属性：

```css
grid-template-rows, grid-template-columns

取值：none | <track-list> | <auto-track-list>
初始值：none
适用于：栅格容器
百分数：grid-template-columns 的百分数值相对栅格容器的行内轴尺寸（通常为宽度）计算，grid-template-rows 的百分数值相对栅格容器的块级轴尺寸（通常为高度）计算
计算值：声明的值，长度值计算为绝对长度
继承性：否
动画性：否
```

使用着两个属性可以大致定义栅格模板（grid template, CSS 规范称之为 explicit grid, 显式栅格）中的栅格线。栅格中的一切都依赖栅格线，如果放置不当，整个布局轻易就会垮掉。

>刚接触 CSS 栅格布局时，建议先在纸上或其他电子工具上把自己的想法画出来。有了参考，在使用 CSS 实现栅格时便能轻易看出栅格线的位置及其之间的关系。

`<track-list>` 和 `<auto-track-list>` 的具体句法十分复杂，而且可以嵌套很多层，若想说清要用大量时间和篇幅，因此最好着重讨论涉及的理论。指定栅格线的位置有很多方式，学习具体的方法之前有必要了解一些基础知识。

首先，栅格线始终可以使用数字引用，此外创作人员也可以为其命名。以下图中的栅格为例。在 CSS 中可以使用数字引用栅格线，也可以使用为其指定的名称，又或者二者混用。因此，你可以说一个栅格元素从竖线 3 延伸到线 steve，或者从横线 skylight 延伸到线 2。

注意，一条栅格线可以有多个名称。你可以使用栅格线的任何一个名称引用它，但是不能像类名那样连在一起使用。你可能以为这意味着最好重复使用相同的名称命名栅格线，但稍后你将看到，其实并非全然如此。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%A0%85%E6%A0%BC%E7%BA%BF%E7%9A%84%E7%BC%96%E5%8F%B7%E5%92%8C%E5%90%8D%E7%A7%B0.png)

在上图中，我故意用了看起来傻傻的名称，这是为了表明你可以选择自己喜欢的任何名称，也是为了指出栅格线没有所谓的默认名称。倘若我把第一条栅格线命名为 start，你有可能以为第一条栅格线始终要用这个名称。事实并非如此，如果你想让一个栅格元素从 start 线延伸到 end 线，你要自己定义哪两条栅格线使用这两个名称。幸好，这并不难。

前文说过，定义栅格模板的值有很多模式。下面从易到难逐一讨论。

<br>

## 1. 宽度固定的栅格轨道

首先说明如何创建栅格轨道的宽度是固定的栅格。这里所说的固定，不单指固定的像素或 em 长度，百分数也算固定宽度。宽度固定的栅格线指栅格线之间的距离不随栅格轨道中内容的变化而变。

下面举个例子。以下声明定义的是三个宽度固定的栅格列：

```css
#grid {
    display: grid;
    grid-template-columns: 200px 50% 100px;
}
```

第一条栅格线在距栅格容器起边（默认为左边）200 像素的位置，第二条栅格线距第一条栅格线的距离为栅格容器宽度的一半，第三条栅格线距第二条栅格线 100 像素，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%A0%85%E6%A0%BC%E7%BA%BF%E7%9A%84%E4%BD%8D%E7%BD%AE.png)

虽然第二列的尺寸会随栅格容器的尺寸变化，但是不会随这一列中栅格元素的内容而变。不管第二列中的内容多宽多窄，列的宽度始终为栅格容器宽度的一半。

此外，最后一条栅格线没有接触栅格容器的右边界。这没关系，没有规定必须接触。然而，如果你想让它们接触，稍后会介绍多种方法。

<br>

很好，我们得到了所需的栅格，但是如果想为栅格线命名？只需把想用的名称放在值中的恰当位置，并在两侧加上方括号。名称的数量不限，想要多少个都可以。下面再前例的基础上为栅格线添加一些名称，结果如下图所示：

```css
#grid {
    display: grid;
    grid-template-columns: [start col-a] 200px [col-b] 50% [col-c] 100px [stop end last];
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%A0%85%E6%A0%BC%E7%BA%BF%E7%9A%84%E5%90%8D%E7%A7%B0.png)

添加名称后，值的句法更清晰了：带数字的值设定的是栅格轨道的宽度，而栅格线两侧始终有个宽度值。因此，宽度值为 3 个时，得到的栅格线有 4 条。

<br>

行栅格线的放置方式与列完全一样，如下图所示：

```css
#grid {
    display: grid;
    grid-template-columns: [start col-a] 200px [col-b] 50% [col-c] 100px [stop end last];
    grid-template-rows: [start masthead] 3em [content] 80% [footer] 2em [stop end];
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%A0%85%E6%A0%BC.png)

这里有几点要注意。首先，列和行中都有名为 start 和 end 的栅格线。这完全没问题。行和列不共用命名空间，因此可以像这样再两个上下文中重用名称。

其次，注意 content 行轨道的百分数值，它相对栅格容器的高度计算。因此，对高度为 500 像素的容器来说，content 行的高度为 400 像素。当然，你要事先知道栅格容器的高度，但实际情况并非总是如此。

<br>

你可能以为使用 100% 能让一行占满全部空间，其实不然，如下图所示：content 行轨道的高度与弹性容器相等，因此 footer 行轨道将被完全推到容器外部。

```css
#grid {
    dispaly: grid;
    grid-template-columns: [start col-a] 200px [col-b] 50% [col-c] 100px [stop end last];
    grid-template-rows: [start masthead] 3em [content] 100% [footer] 2em [stop end];
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E8%B6%85%E5%87%BA%E6%A0%85%E6%A0%BC%E5%AE%B9%E5%99%A8.png)

<br>

这种问题的处理方式之一是（可能不是最好的方式），为行的尺寸设定极值，指明行的高度不能小于一个值，也不能大于一个值，让浏览器计算具体的值。这种方法所用的句法是 minmax(a,b)，其中 a 是最小尺寸、b 是最大尺寸。

```css
#grid {
    display: grid;
    grid-template-columns: [start col-a] 200px [col-b] 50% [col-c] 100px [stop end last];
    grid-template-rows: [start masthead] 3em [content] minmax(3em, 100%) [footer] 2em [stop end];
}
```

这样做的意思是，content 行的高度不能小于 3em，而且不能大于栅格容器的高度。此时，浏览器会增加 content 行的高度，直到占满 masthead 和 footer 轨道以外的空间为止。如有必要，浏览器也会减少 content 行的高度，但不会小于 3em。也就是说，具体高度视情况而定。下图展示的是其中一种可能的结果。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E9%80%82%E5%BA%94%E6%A0%85%E6%A0%BC%E5%AE%B9%E5%99%A8%E7%9A%84%E5%B0%BA%E5%AF%B8.png)

类似地，可以使用 minmax() 让 col-b 列占满栅格容器的横向空间。注意，如果 minmax() 中指定的最大值比最小值小，最大值将被忽略，最小值将用于设定宽度固定的轨道长度。因此，minmax(100px, 2em) 在字号小于 50px 时将解析为 100px。

<br>

如果 minmax() 含糊的行为让你不安，可以使用其他替代方式。轨道的高度（或宽度）还可以使用 calc() 计算。例如：

```css
trid-template-rows: [start masthead] 3em [content] calc(100% - 5em) [footer] 2em [stop end];
```

此时，content 行的高度等于栅格容器的高度减去 masthead 和 footer 两行的高度，如前面那张插图所示。

calc() 用着不错，但有时不那么牢靠，因为修改 masthead 或 footer 行的高度后，要调整算式。此外，如果想让一列弹性变形，使用 calc() 很难实现（有时不可能实现）。当然，这种问题有更可靠的处理方式，具体参见下文。

<br>

## 2. 弹性栅格轨道

目前所见的栅格轨道都不具有弹性，其尺寸由长度值或栅格容器的尺寸确定，不受其他因素的影响。与之相比，弹性栅格轨道的尺寸基于弹性容器中非弹性轨道以外的空间确定，或者基于整个轨道中的具体内容而定。

<br>

### 份数单位

如果想把余下的空间分成一定份数，分配给各栏，可以使用 fr 单位。

最简单的情况是，把整个容器平均分成几等份。例如，如果想要四列，可以这样声明：

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

就这个示例而言，它等效于：

```css
grid-template-columns: 25% 25% 25% 25%;
```

得到的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%8A%8A%E5%AE%B9%E5%99%A8%E5%88%86%E6%88%90%E5%9B%9B%E5%88%97.png)

```css
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
```

处理 fr 单位的方式是，拿可用空间除以 fr 值之和，各轨道的尺寸等于 fr 值所对应的份数。

因此，对第一个例子来说，四个 fr 值相加等于 4，可用空间除以 4，所以每一列的宽度为总空间的四分之一。添加一个 1fr 后，可用空间要除以 5，那么每一列的宽度为总空间的五分之一。

<br>

当然，fr 单位前的数字不一定总是 1。假如你想得到三列，中间一列的宽度为其他两列的两倍。那么，可以这样声明：

```css
grid-template-columns: 1fr 2fr 1fr;
```

同样，还是拿总空间除以总和，因此一个 fr 单位占空间的 0.25。如此以来，第一个和第三个轨道的宽度为容器宽度的 25%，而中间一列的宽度为容器宽度的一半，因为那一列的值为 2fr，即 0.25 的两倍，等于 0.5。

<br>

此外，不使用整数也可以。苹果派的食谱可能会像下面这样划分各列：

```css
grid-template-columns: 1fr 3.14159fr 1fr;
```

计算过程留给你完成（这是个锻炼的好机会，万事开头难，但只要记住，先计算 1 + 3.14159 + 1）。

<br>

这样划分容器十分方便，但 fr 可不只是百分数的替代品这么简单，它还有更强大的功能。在某些列的尺寸固定，而部分空间弹性伸缩时，份数单位特别有用。请看下述声明，其结果如下图所示：

```css
grid-template-columns: 15em 1fr 10%;
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E4%B8%8D%E7%AE%A1%E4%BD%99%E4%B8%8B%E5%A4%9A%E5%B0%91%E7%A9%BA%E9%97%B4%EF%BC%8C%E9%83%BD%E5%88%86%E7%BB%99%E4%B8%AD%E9%97%B4%E4%B8%80%E5%88%97.png)

这里，浏览器会为第一个和第三个轨道分配固定的宽度，而栅格容器中余下的空间，不管有多少，都分给中间那个轨道。因此，在 font-size 为浏览器通常的默认值 16px 时，对一个 1000 像素宽的栅格容器来说，第一列的宽度为 240 像素，第三列的宽度为 100 像素。二者之和为 340 像素，因此有 660 像素没有分配出去。份数单位总和为一，即 660 除以 1，得到 660 像素。这 660 像素都分给那个尺寸为 1fr 的轨道。如果栅格容器的宽度增加到 1400 像素，第三列的宽度将变成 140 像素，而中间一列的宽度为 1020 像素。

<br>

就这样，得到的栅格既有宽度固定的列，也有弹性伸缩的列。我们可以更进一步，把可用空间分成任意多份。例如：

```css
width: 100em;
grid-template-columns: 15em 4.5fr 3fr 10%;
```

此时，各列的宽度如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E5%88%97%E7%9A%84%E5%B0%BA%E5%AF%B8%E5%BC%B9%E6%80%A7%E5%8F%98%E5%8C%96.png)

从左至右，各列的宽度分别为 15em、45em、30em 和 10em。第一列的宽度是固定的，为 15em。最后一列的宽度是 100em 的 10%，即 10em。因此，有 75em 的空间要分给弹性变形的列。这两列的尺寸值相加为 7.5fr。对较宽的那一列来说，4.5 ÷ 7.5 等于 0.6，因此其宽度为 0.6 乘以 75em，等于 45em。类似地，3 ÷ 7.5 = 0.4，75em 的 0.4 倍等于 30em。

我承认，准备这个例子时我事先算好了，确保 fr 之和及 width 的值正好能得到整数宽度。这么做纯粹是为了便于你理解。如果你不想使用这么巧合的数字，可以考虑把 width 的值改为 92.5 em 或 1234px。

<br>

如果想为轨道指定最小尺寸或最大尺寸，可以使用 minmax()。在前例的基础上，如果想确保第三列的宽度不小于 5em，可以把 CSS 声明改为：

```css
grid-template-columns: 15em 4.5fr minmax(5em, 3fr) 10%;
```

现在，布局的中间两列是弹性变形的，第三列的最小宽度为 5em。如果再变小，布局中将有三个宽度固定的列（宽度分别为 15em、5em 和 10%），以及一系列尺寸弹性变化的列，其尺寸等于余下的空间（如果有余的话）。经过计算可以得知，弹性变形的那一列最宽为 30.5556em。超过这一宽度，布局中便会出现两个弹性变形的列。

<br>

为了限制列轨道的宽度最大能为多少，而超过那个值就变成固定宽度，你可能会想使用 fr 值声明最小值，但这样做并不能得到预期的结果，因为 minmax() 表达式的最小值部分不允许使用 fr 单位。因此，使用 fr 设定最小值将导致整个声明失效。

下面来看把最小值显式设为 0 的情况：

```css
grid-template-columns: 15em 1fr minmax(0, 500px) 10%;
```

如下图展示的是第三列能为 500 像素宽的情况下栅格的最小宽度。如果栅格再变窄。设定极值那一列的宽度将小于 500 像素。栅格变宽的话，第二列（尺寸为 fr 值得那一列）的宽度将大于零，而第三列的宽度仍是 500 像素。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E4%BD%BF%E7%94%A8%E6%9E%81%E5%80%BC%E8%AE%BE%E5%AE%9A%E5%88%97%E7%9A%84%E5%B0%BA%E5%AF%B8.png)

仔细观察，你会在 15em 和 minmax(0, 500px) 两列的交界处看到 1fr 标注。它之所以在那个位置，是由于 1fr 列的左边界在第二条列栅格线上，而那一列没有宽度，因为没有多余的空间可分配了。类似地，minmax 列在第三条列栅格线上。只是，在这个例子中，第二条列栅格线与第三条列栅格线在同一位置上（因而 1fr 列的宽度才是零）。

<br>

倘若最小值比最大值大，那么整个值将替换为最小值。因此，minmax(500px, 200px) 将视为只有 500px 一个值。显然，你不会这么做，但是保不住混用百分数和份数时会出现这种情况。因此，你可以使用 minmax(10%, 1fr) 设定一列的尺寸，当其宽度小于弹性容器宽度的 10% 时，将固定在 10%。

<br>

份数单位和极值也能用在行上，只是行的尺寸很少这样设定。假设有这样一个布局，首行和尾行的尺寸是固定的，而中间放置内容的行是弹性变形的，而且有下限，例如下面这样：

```css
grid-template-rows: 3em minmax(5em, 1fr) 2em;
```

这样完全可行，但是更多的时候，你会想根据行中的内容的高度设定行的尺寸，而不是弹性容器高度的几分之几。下一节说明具体做法。

<br>

### 根据内容设定轨道尺寸

能设置栅格轨道的尺寸为可用空间的几分之几，或者占据固定的空间的确不错，但是如果想把页面中的某些部分对齐起来，而无法确定各部分有多宽或多高？这时可以使用 min-content 和 max-content。

这两个关键字的字面意思够简单，但是却不那么容器准确说明其作用。其实，max-content 的意思是占据内容所需的最大空间。对大段文本来说（例如博客文章），这个值一般意味着尽量多占据可用空间，为内容提供最大的空间。max-content 也可以指宽度尽量大，以防换行。对常规的文本段落而言，这可能导致列轨道特别宽。

与之相比，min-content 的意思是尽量少占据空间，够显式内容即可。对文本来说，这意味着宽度会尽量收窄，只保证最长的单词（如果有图像或表单输入框的话，指宽度最大的行内元素）能在一行里完整显示。这个值会导致栅格元素中有大量断行，而且特别窄特别高。

这两个关键字的强大之处在于，它们将应用于整个栅格轨道上。例如，如果把一列的尺寸设为 max-content，那么整个列轨道的宽度都与列中最宽的内容一样。下面通过一个显示图像的栅格（12 个）说明这一点，栅格的声明如下，结果如下图所示：

```css
#gallery {
    display: grid;
    grid-template-columns: max-content max-content max-content max-content;
    grid-template-rows: max-content max-content max-content;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E7%94%B1%E5%86%85%E5%AE%B9%E7%A1%AE%E5%AE%9A%E6%A0%85%E6%A0%BC%E8%BD%A8%E9%81%93%E7%9A%84%E5%B0%BA%E5%AF%B8.png)

先看各列。可以看到，每个列轨道的宽度都与轨道上最宽的图像相等。竖放的图像恰好对齐的那一列，其宽度较窄。如果横放图像，列的宽度将变大。各行也是如此。每一行的高度都与行中最高的图像相等。如果行中的图像都矮，那么整行都矮。

<br>

这样做的好处是，内容可以是任何类型。如果为照片加上描述文字，所有行和列的尺寸都会调整，以便放下文本和图像，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%9C%89%E5%A4%9A%E7%A7%8D%E5%86%85%E5%AE%B9%E7%B1%BB%E5%9E%8B%E6%97%B6%E6%A0%85%E6%A0%BC%E8%BD%A8%E9%81%93%E7%9A%84%E5%B0%BA%E5%AF%B8.png)

图中的设计不完整，图像与文本不协调，而且没有限制描述文字的宽度。其实，使用 max-content 值时，列的宽度就应该这样，因为 max-content 的意思是让列的宽度尽量大，以便放下全部内容。

<br>

注意，即使有栅格轨道从栅格容器中溢出，也是这样处理。也就是说，即便我们为栅格容器设置了 width: 250px，图像和说明文字依然像上面那样排布。这就是为什么 max-content 经常出现在 minmax() 语句中，以下述样式为例。这里的两个栅格一个用了 minmax()，一个没用。两种情况下的栅格容器使用橙色背景表示，结果如下图所示。

```css
#g1 {
    display: grid;
    grid-template-columns: max-content max-content max-content max-content;
}

#g2 {
    display: grid;
    grid-template-columns: minmax(0, max-content) minmax(0, max-content) minmax(0, max-content) minmax(0, max-content);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E4%BD%BF%E7%94%A8%E5%8F%8A%E4%B8%8D%E4%BD%BF%E7%94%A8minmax%28%29%E9%99%90%E5%AE%9A%E6%A0%85%E6%A0%BC%E8%BD%A8%E9%81%93%E7%9A%84%E5%B0%BA%E5%AF%B8.png)

在第一个例子中，栅格元素能完全放下其中的内容，但是栅格元素从栅格容器中溢出了。在第二个例子中，由于使用了 minmax()，浏览器将把列的尺寸限定在 0 到 max-content 的范围内，因此各栅格元素将尽量留在栅格容器内。如果改成 minmax(min-content, max-content)，得到的结果与 0, max-content 稍有不同。

第二个例子中的部分图像之所以从栅格单元中溢出了，是因为根据 minmax(0, max-content)，各轨道要保证都在栅格容器的范围之内。不是每个轨道的尺寸都能达到 max-content，大那是将在保证不超出弹性容器的基础上，尽量向那个值靠拢。倘若内容比轨道宽，内容将溢出，与其他轨道重叠。这是栅格的标准行为。

你可能好奇，如果列和行的尺寸都设为 min-content 会发生什么。其实，这与只把列的尺寸设为 min-content 基本上是一样的，因为栅格规范规定，浏览器应该先解析列的尺寸，然后再解析行的尺寸。

<br>

还有一个关键字可用于设定栅格轨道的尺寸，即 auto。用作最小值时，视作栅格元素的最小尺寸，即由 min-width 或 min-height 定义的值。用作最大值时，作用等同于 max-content。但是，不要以为 auto 只能在 minmax() 语句中使用。任何地方都能使用 auto，要么起最小值的作用，要么起最大值的作用，具体情况取决于周围的轨道使用的尺寸值。说实话，这个问题太过复杂，一时说不清。与 CSS 中的很多其他地方一样，auto 的意思是基本上是让浏览器自行决定。有时这么做不会出什么问题，但一般来说应该尽量避免使用 auto。

>最后一句话说的不完全正确，其实使用 auto 值时，栅格元素的尺寸可由 align-content 和 justify-content 属性调整。这个话题在 13.9 节讨论。因为 auto 是唯一有此特性的轨道尺寸值，所以有时还是有理由使用的。

<br>

## 3. 根据轨道中的内容适配

除了关键字 min-content 和 max-content 之外，还可以使用 fit-content() 函数以简练的方式表达特定类型的尺寸模式。这个函数的作用不是那么好理解，但是我们要迎难而上。

fit-content() 函数的参数为一个长度或一个百分数，例如：

```css
#grid {
    display: grid;
    grid-template-columns: 1fr fit-content(150px) 2fr;
}

#grid2 {
    display: grid;
    grid-template-columns: 2fr fit-content(50%) 1fr;
}
```

<br>

分析作用之前，先看一下规范给出的伪公式：

```css
fit-content(argument) => min(max-content, max(min-content, argument))
```

这个公式的基本意思是，先确定 min-content 和指定的参数哪个大，然后拿较大的那个值与 max-content 相比，找出较小的。不怎么好理解？笔者前 17 次确实没读懂。

笔者觉得上述公式这样理解更好：fit-content(arguments) 等价于 minmax(min-content, max-content)，除非参数指定的值设置了更大的上限，类似于 max-width 或 max-height。来看下面的例子：

```css
#example {
    display: grid;
    grid-template-columns: fit-content(50ch);
}
```

这里，参数的值为 50ch，即大约 50 各字符的宽度。因此，上述样式只创建了一列，列中内容的宽度将于指定的尺寸保持一致。

首先假设内容只有 29 个字符长，相当于 29ch（由于用的是等宽字体）。此时，max-content 的值为 29ch，那么列的宽度就是 29ch，因为 29ch 比 50ch 和 min-content 都小。现在，假设在列中添加了一堆文本，共有 256 个字符，宽度为 256ch。因此，max-content 的计算结果为 256ch。这比参数指定的 50ch 大多了，因此列宽度的上限为 min-content 和 50ch 中较大的那个，即 50ch。

<br>

再看一个例子。下述样式的结果如下图所示。

```css
#thefollowing {
    display: grid;
    grid-template-columns: fit-content(50ch) fit-content(50ch) fit-content(50ch);
    font-family: monospace;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E4%BD%BF%E7%94%A8%20fit-content%28%29%20%E8%AE%BE%E5%AE%9A%E6%A0%85%E6%A0%BC%E8%BD%A8%E9%81%93%E7%9A%84%E5%B0%BA%E5%AF%B8.png)

注意，第一列的宽度比其他两列小。29ch 的内容最小就这么宽。另外两列中的内容较多，在 50ch 宽的空间放不下，因此有换行，因为宽度的上限为 50ch。

那么，如果在第二列中添加一个图像会发生什么？我们添加的图像宽度为 500px，在这个例子中比 50ch 要宽。对那一列来说，首先要确定 min-content 和 50ch 哪个较大。前面说过，较大的值是 min-content，计算结果为 500px（图像的宽度）。然后，要确定 500px 和 max-content 哪个较小。如果文本全在一行里渲染，宽度将超过 500px，因此较小的是 500px。综上，现在第二列的宽度为 500 像素。结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%A0%B9%E6%8D%AE%E8%BE%83%E5%AE%BD%E7%9A%84%E5%86%85%E5%AE%B9%E7%A1%AE%E5%AE%9A%E5%B0%BA%E5%AF%B8.png)

比较一下上两图和上图，你会发现第二列中文本的换行位置是不同的，这是因为那一列的宽度变了。但是再看第三列中的文本，换行的位置也变了。

这是因为前两列的尺寸确定之后，第三列可用的空间不足 50ch 了。fit-content(50ch) 依然像前文所述的那样处理，但是可用空间变了。记住，50ch 参数设定的是上限，而不是定值。

这是 fit-content() 的一大优势，由此也看出 minmax() 而不是特别灵活。使用 fit-content()，内容不多时，轨道将缩小为最小的内容尺寸，而在内容较多时，又能为轨道的尺寸设置一个上限。

在前面的例子中，栅格模板的值是重复的，你可能会想，如果栅格轨道的数量不止三四个该怎么办？难道要一个一个把轨道的尺寸写出来吗？其实无需这么做，详情参见下一节。

<br>

### 补充说明

`fit-content(490px)` 是一个 CSS 函数，通常用于定义元素尺寸，尤其是在 CSS Grid 布局中。它表示元素的尺寸应调整为适应内容，但不能超过指定的最大尺寸 `490px`。

以下是 `fit-content(490px)` 的详细解释：

- **适应内容：** 元素会根据其内容自动调整大小。如果内容所需的空间小于 `490px`，则元素会缩小以适应内容。
- **最大尺寸限制：** 元素的最大尺寸被限制为 `490px`。即使内容需要的空间大于 `490px`，元素也不会超过这个尺寸。

<br>

## 4. 重复栅格线

如果你想创建的栅格中各栅格轨道的尺寸是一样的，你或许不想一个一个输入尺寸值。幸好有 repeat()，我们无需一个个输入了。

假设我们想每隔 5em 放置一条列栅格线，而且一共有 10 个列轨道。使用 repeat() 的写法如下：

```css
#grid {
    display: grid;
    grid-template-columns: repeat(10, 5em);
}
```

就这样，我们创建了 10 个列轨道，每个轨道的宽度为 5em，共计 50em。显然，这比输入 10 次 5em 节省时间。

<br>

轨道的尺寸可以使用任何值，可以是 min-content 和 max-content，也可以是 fr 值和 auto 等，而且不限于只提供一个值。假设我们想定义的列结构为 2em-1fr-1fr，然后重复三次。样式的写法如下，结果如下图所示：

```css
#grid {
    display: grid;
    grid-template-columns: repeat(3, 2em 1fr 1fr);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E9%87%8D%E5%A4%8D%E4%B8%80%E4%B8%AA%E8%BD%A8%E9%81%93%E6%A8%A1%E5%BC%8F.png)

注意，最后一个列轨道的宽度为 1fr，而第一个列轨道的宽度为 2em。这是由 repeat() 的写法决定的。如果想平衡两端，在末尾加上一个宽度为 2em 的轨道，只需像下面这样修改：

```css
#grid {
    display: grid;
    grid-template-columns: repeat(3, 2em 1fr 1fr) 2em;
}
```

看到值的最后多了个 2em 了？此时，重复三次之后，最后将多出一列。这表明，在构建栅格时，repeat 可以与其他轨道的尺寸值结合在一起使用，甚至还可以与其他重复模式协作。但是不能在重复中嵌套重复。

<br>

除此之外，repeat() 中几乎可以使用任何值。下述示例直接摘自栅格规范：

```css
#grid {
    display: grid;
    grid-template-columns: repeat(4, 10px [col-start] 250px [col-end]) 10px;
}
```

在这个例子中，一个 10 像素宽的轨道、一条具有栅格线、一个 250 像素宽的轨道和另一个具名栅格线名为 col-start，还有四条栅格线名为 col-end，如下图所示。这完全是可行的，因为栅格线的名称无需是独一无二的。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E9%87%8D%E5%A4%8D%E5%A4%9A%E5%88%97%E5%92%8C%E5%85%B7%E5%90%8D%E6%A0%85%E6%A0%BC%E7%BA%BF.png)

<br>

重复具名栅格线时要注意一点，即相邻的两条具名栅格线将合并为一条具有两个名称的栅格线。也就是说，下面两个声明是等效的：

```css
grid-template-rows: repeat(3, [top] 5em [bottom]);
grid-template-rows: [top] 5em [bottom top] 5em [top bottom] 5em [bottom];
```

>不要担心多条栅格线具有相同的名称会导致什么问题，因为没有任何规定禁止这么做，而且在某些情况下这样做还有一定的好处。13.4.1 节将探讨处理这种情况的一些方式。

<br>

### 自动填充的轨道

还有一种方法能重复简单的模式，直到填满整个栅格容器为止。这种方法没有常规的 repeat() 那么强大（至少现在如此），但有时也很有用。

例如，假设我们想让前面的行模式一直重复，只要不撑破栅格容器即可：

```css
grid-template-rows: repeat(auto-fill, [top] 5em [bottom]);
```

此时，每隔 5em 放置一条行栅格线，直到没有空间为止。因此，对 11em 高的栅格容器来说，等效于下述声明：

```css
grid-template-rows: [top] 5em [bottom top] 5em [bottom];
```

如果栅格容器的高度超过 15em，但是小于 20em，那么等效于下述声明：

```css
grid-template-rows: [top] 5em [bottom top] 5em [top bottom] 5em [bottom];
```

在三个不同高度的栅格容器中，上述自动填充行的示例得到的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E5%9C%A8%E4%B8%89%E4%B8%AA%E9%AB%98%E5%BA%A6%E4%B8%8B%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85%E8%A1%8C.png)

自动重复的局限是，只能有一个可选的栅格线名称，一个尺寸固定的轨道和另一个可选的栅格线名称。因此 [top] 5em [bottom] 是这种模式下值最多的情况。其中的具名栅格线可以去除，只留下 5em，或者只去除其中一个名称。不能重复多个尺寸固定的轨道，也不能重复多个尺寸弹性变化的轨道（这么规定的确是合理的，试想，浏览器要重复几次 1fr 才能填满栅格容器，一次即可）。

>你可能想自动重复多个尺寸不同的轨道，以此定位放在内容栏周围的栏距。通常，没必要这么做，因为栅格线有轨道栏距的概念（也有定义栏距的属性）。我们将在 13.8 节讨论这个话题。

<br>

此外，在一个轨道模板中只能有一个自动重复的模式。因此，下述写法是不准许的：

```css
grid-template-columns: repeat(auto-fill, 4em) repeat(auto-fill, 100px);
```

然而，固定数量的重复模式可以与自动填充的轨道结合在一起使用。例如，可以像下面这样先放三个较宽的列，然后再使用较窄的轨道填充栅格容器中余下的空间（假设空间有余）：

```css
grid-template-columns: repeat(3, 20em) repeat(auto-fill, 2em);
```

当然，反过来也可以：

```css
grid-template-columns: repeat(auto-fill, 2em) repeat(3, 20em);
```

之所以可以这样做，是因为栅格布局算法是先为固定的尺寸的轨道分配空间的，余下的空间才使用自动重复的轨道填充。上述示例的结果是，自动填充一个或多个 2em 宽的列，随后是三个 20em 宽的轨道。前面两个示例的结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E5%9C%A8%E5%9B%BA%E5%AE%9A%E7%9A%84%E5%88%97%E6%97%81%E8%BE%B9%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85%E5%88%97.png)

auto-fill 至少会重复一次轨道模板，即使出于什么原因在栅格容器中放不下也是如此。而且，只要空间足够，能重复多少次就重复多少次，即便某些轨道中没有内容。举个例子，假设自动填充五列，但是只有前三列中有栅格元素。此时，另外两个仍在那儿，在布局中占据一定的空间。

<br>

但是，如果使用 auto-fit，没有栅格元素的轨道将被剔除，除此之外，auto-fit 的行为与 auto-fill 一样。对下述声明来说：

```css
grid-template-columns: repeat(auto-fit, 20em);
```

如果栅格容器中放得下五个列轨道（即容器的宽度要大于 100em），但是有两个轨道中没有栅格元素，那么这两个空的栅格轨道将被剔除，留下三个有栅格元素的列轨道。剔除轨道后留下的空间根据 align-content 和 justify-content 的值处理。下图对 auto-fill 和 auto-fit 做了简单的比较，彩色框中的数字表示所在列的序号。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/auto-fill%20%E4%B8%8E%20auto-fit%20%E6%AF%94%E8%BE%83.png)

<br>

## 5. 栅格区域

有时，你可能只想把栅格画出来，也许是为了好玩，也许是为了给代码一个参照。这个需求或多或少可以使用 grid-template-areas 属性实现。

```css
grid-template-areas

取值：none | <string>
初始值：none
适用于：栅格容器
计算值：声明的值
继承性：否
动画性：否
```

这个属性可说的太多了，不如先来看一个例子。下述规则得到的结果如下图所示：

```css
#grid {
    display: grid;
    grid-template-areas:
        "h h h h"
        "l c c r"
        "l f f f";
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E4%B8%80%E4%BA%9B%E7%AE%80%E5%8D%95%E7%9A%84%E6%A0%85%E6%A0%BC%E5%8C%BA%E5%9F%9F.png)

你的理解是对的，字符串值中的字母用于定义栅格区域的形状。真的，而且并不限于只能使用单个字母。例如，前例可以改成下面这样：

```css
#grid {
    display: grid;
    grid-template-areas: 
        "header header header header"
        "leftside content content rightside"
        "leftside footer footer footer";
}
```

得到的栅格布局与上图中的一样，不过各区域的名称变了（例如 f 变成了 footer）。

<br>

在定义区域的模板中，空白会折叠，因此可以利用空白对齐 grid-template-areas 值中的各列（前例就这么做了）。用于对齐的空白可以是空格，也可以是制表符，你可以挑一个最能惹怒同事的。当然，你也可以只用一个空格把各标识符隔开，而不管名称有没有对齐。字符串之间甚至可以不换行，下述写法与对齐的版本效果是一样的：

```css
grid-template-areas: "h h h h" "l c c r" "l f f f"
```

<br>

但是，不能把多个字符串合并到一起，这样意思就变了。每个字符串（放在一对双引号中）定义栅格中的一行。因此，前一个例子与之前的例子定义的栅格都有三行。如果像下面这样合并为一个字符串：

```css
grid-template-areas: 
	"h h h h
	l c c r
	l f f f";
```

得到的栅格便只有 1 行 12 列，h 区域跨 4 列，f 区域跨 3 列。字符串内部的换行，除了把标识符隔开以外没有任何作用。

<br>

仔细观察这些值，你会发现每个标识符表示一个栅格单元。仍以本节开头的第一个示例为例，请看下图中的结果：

```css
#grid {
    display: grid;
    grid-template-areas:
        "h h h h"
        "l c c r"
        "l f f f";
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E5%B8%A6%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E6%A0%85%E6%A0%BC%E5%8D%95%E5%85%83.png)

得到的布局与前面完全一样，只是这一次我们把 grid-template-areas 值中的标识符放到各栅格单元中了。知道各单元的标识符后，浏览器把名称相同的相邻单元合并为一个区域，不过得到的形状必须是矩形。如果区域形状太复杂，整个模板都将失效。因此，下述样式得不到任何栅格区域：

```css
#grid {
    display: grid;
    grid-template-areas:
        "h h h h"
        "l c c r"
        "l l f f";
}
```

发现没有，l 区域的外形是 L 形的？就这样小小改动之后，整个 grid-template-areas 值都变得无效了。栅格布局以后的版本也许会支持非矩形形状，但是现在只能定义矩形。

<br>

如果只想把部分栅格单元定义为栅格区域的一部分，其他的单元不标注名称，可以使用一个或多个 . 字符占位。假如你只想定义页头、页脚和部分侧边栏区域，余下的栅格单元不命名。那么，可以像下面这样声明，得到的结果如下图所示。

```css
#grid {
    display: grid;
    grid-template-areas:
        "header header header header"
        "left ... ... right"
        "footer footer footer footer";
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%A0%85%E6%A0%BC%E4%B8%AD%E9%83%A8%E5%88%86%E6%A0%85%E6%A0%BC%E5%8D%95%E5%85%83%E6%B2%A1%E6%9C%89%E5%90%8D%E7%A7%B0.png)

上图中的栅格，中间两个栅格单元不属于任何区域，在模板中以空单元标记（. 号）表示。空名单元可以使用一个或多个空标记表示，因此 left . . right 和 left ..... ..... right 的作用是一样的。

栅格单元的名称可以简单一些，也可以发挥创意，表情符号也是可以的。

<br>

定义好栅格区域之后，接下来要使用前面介绍的 grid-template-columns 和 grid-template-rows 定义栅格轨道的尺寸。下面把二者添加到前例中，得到的结果如下图：

```css
#grid {
    display: grid;
    grid-template-areas:
        "header header header header"
        "left ... ... right"
        "footer footer footer footer";
    grid-template-columns: 1fr 20em 20em 1fr;
    grid-template-rows: 40px 10em 3em;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E5%85%B7%E5%90%8D%E5%8C%BA%E5%9F%9F%E5%92%8C%E8%AE%BE%E5%AE%9A%E4%BA%86%E5%B0%BA%E5%AF%B8%E7%9A%84%E8%BD%A8%E9%81%93.png)

<br>

现在，具名栅格区域创建的列和行有轨道尺寸了。如果提供的轨道尺寸数量比区域轨道多，多出的轨道将放在具名区域之后。因此，下述 CSS 得到的结果如下图所示：

```css
#grid {
    display: grid;
    grid-template-areas:
        "header header header header"
        "left ... ... right"
        "footer footer footer footer";
    grid-template-columns: 1fr 20em 20em 1fr 1fr;
    grid-template-rows: 40px 10em 3em 20px;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E5%9C%A8%E5%85%B7%E5%90%8D%E5%8C%BA%E5%9F%9F%E4%B9%8B%E5%90%8E%E5%86%8D%E6%B7%BB%E5%8A%A0%E8%BD%A8%E9%81%93.png)

那么，为区域命名了还怎么为栅格线命名？其实，栅格线已经有名称了：命名栅格区域就自动为首尾两条栅格线命名了。对 header 区域来说，第一条列栅格线和第一条行栅格线的名称都是 header-start，而第二条列栅格线和第二条行栅格线的名称是 header-end。对 footer 区域来说，相关的栅格线将自动命名为 footer-start 和 footer-end。

<br>

栅格线穿过整个栅格区域，因此有很多名称是出现再同一位置的。下述模板得到的栅格线名称如下图所示：

```css
grid-template-areas:
	"header header header header"
	"left ... ... right"
	"footer footer footer footer";
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%A0%87%E5%87%BA%E9%9A%90%E5%90%AB%E7%9A%84%E6%A0%85%E6%A0%BC%E7%BA%BF%E5%90%8D%E7%A7%B0.png)

下面增加点难度，在 CSS 中显式指定栅格线的名称。在下述规则中，我们为栅格中的第一条列栅格线设定的名称是 begin，为第二条行栅格线设定的名称是 content：

```css
#grid {
    display: grid;
    grid-template-areas:
        "header header header header"
        "left ... ... right"
        "footer footer footer footer";
    grid-template-columns: [begin] 1fr 20em 20em 1fr 1fr;
    grid-template-rows: 40px [content] 1fr 3em 20px;
}
```

再次注意，这些栅格线的名称将累加到具名区域隐式创建的栅格线名称上。这是比较有趣的行为，栅格线的名称从不取代现有的栅格线名称，而是累积在一起。

更有趣的是，隐式命名机制还可以反向操作。假设完全不使用 grid-template-areas，而是像下面这样为栅格线命名，得到的结果如下图所示：

```css
grid-template-columns:
	[header-start footer-start] 1fr
	[content-start] 1fr [content-end] 1fr
	[header-end footer-end];
grid-template-rows: 
	[header-start] 3em
	[header-end content-start] 1fr
	[content-end footer-start] 3em
	[footer-end];
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%A0%87%E5%87%BA%E9%9A%90%E5%BC%8F%E5%91%BD%E5%90%8D%E7%9A%84%E6%A0%85%E6%A0%BC%E5%8C%BA%E5%9F%9F.png)

由于栅格线名称的格式是 name-start/name-end，这就隐式为栅格区域定义了名称。老实说，这没有前面那种方法简便，但是多一种方法总是好的，万一用得到。

注意，创建栅格区域不需要全部四条栅格线，但是若想创建所需形状具名栅格区域，可能必须指定四条栅格线。以下述声明为例：

```css
grid-template-columns: 1fr [content-start] 1fr [content-end] 1fr;
grid-template-rows: 3em 1fr 3em;
```

这样也能创建名为 content 的栅格区域，只是该区域所在的行将放在显式定义的行之后。奇怪的是，在显式定义的行后、content 区域所在的行前面会多出一个空行。但这是符合规定的行为。因此，如果想通过命名栅格线创建具名区域，但不提供全部四条栅格线，那么具名区域将偏安一隅，而不在栅格的整体结构中。

因此，还是前面说的，建议一直显式命名栅格区域，隐式生成 -start 和 -end 形式的栅格线名称，不要反过来做。

<br>

# 4. 在栅格中附加元素

我们讲了这么多，还未讨论定义好栅格后如何附加栅格元素，真是难以置信。

## 1. 使用列线和行线

附加栅格元素的方式有很多，可以引用栅格线， 也可以引用栅格区域。先讲把元素附加到栅格线上的四个属性，这比较简单。

```css
grid-row-start, grid-row-end, grid-column-start, grid-column-end

取值：auto | <custom-ident> | [ <integer> && <custom-ident>? ] | [ span && [ <integer> || <custom-ident> ]]
初始值：auto
适用于：栅格元素和绝对定位的元素（前提是容纳块为栅格容器）
计算值：声明的值
继承性：否
动画性：否
```

这几个属性的意思是，我想把元素的边界附加到某条栅格线上。栅格布局丰富多样，通过实例说明可能更好理解。请看下面的样式，想一想结果如何（见下图）：

```css
.grid {
    display: grid;
    width: 50em;
    grid-template-rows: repeat(5, 5em);
    grid-template-columns: repeat(10, 5em);
}

.one {
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 4;
}

.two {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 4;
}

.three {
    grid-row-start: 4;
    grid-column-start: 6;
}
```

这里，我们通过栅格线的编号指明元素应该放在栅格中的什么位置。列的编号从左到右依次增加，行的编号从上到下依次增加。注意，如果省略结束栅格线，例如 .three 那样，那么结束栅格线使用序列中的下一条栅格线。

因此，前例中的 .three 规则与下述样式是完全等效的：

```css
.three {
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 6;
    grid-column-end: 7;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%8A%8A%E5%85%83%E7%B4%A0%E9%99%84%E5%8A%A0%E5%88%B0%E6%A0%85%E6%A0%BC%E7%BA%BF%E4%B8%8A.png)

<br>

此外，还可以使用另一种方式表达相同的目的：把结束值改为 span 1，或者只使用 span，如下所示。

```css
.three {
    grid-row-start: 4;
    grid-row-end: span 1;
    grid-column-start: 6;
    grid-column-end: span;
}
```

如果 span 后面有数字，意思是跨指定数目的栅格轨道。因此，前面的示例可以改为下面这样，得到的结果也是完全一样的：

```css
#grid {
    display: grid;
    grid-template-rows: repeat(5, 5em);
    grid-template-columns: repeat(10, 5em);
}

.one {
    grid-row-start: 2;
    grid-row-end: span 2;
    grid-column-start: 2;
    grid-column-end: span 2;
}

.two {
    grid-row-start: 1;
    grid-row-end: span 2;
    grid-column-start: 5;
    grid-column-end: span 5;
}

.three {
    grid-row-start: 4;
    grid-row-end: span 1;
    grid-column-start: 6;
    grid-column-end: span;
}
```

如果 span 后面没有数字，默认为 1。span 后面的数字不能为零或负数，只能使用正整数。

span 的特殊之处在于，结束和开始栅格线都能使用。span 的具体行为是，向确定了编号的栅格线的反方向计数。也就是说，如果定义了开始栅格线，而把结束栅格线设为 span 值，那么向栅格结束的方向计数。反过来，如果定义了结束栅格线，而开始栅格线是 span 值，那么将向栅格开始的方向计数。

这意味着，下述规则将得到如下图所示的结果：

```css
#grid {
    display: grid;
    grid-rows: repeat(4, 2em);
    grid-columns: repeat(5, 5em);
}

.box01 {
    grid-row-start: 1;
    grid-column-start: 3;
    grid-column-end: span 2;
}

.box02 {
    grid-row-start: 2;
    grid-column-start: span 2;
    grid-column-end: 3;
}

.box03 {
    grid-row-start: 3;
    grid-column-start: 1;
    grid-column-end: span 5;
}

.box04 {
    grid-row-start: 4;
    grid-column-start: span 1;
    grid-column-end: 5;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E8%B7%A8%E5%A4%9A%E6%9D%A1%E6%A0%85%E6%A0%BC%E7%BA%BF.png)

<br>

与 span 后的数字不同，指定栅格线的编号时并不限于只能使用正整数。负数将从显式定义的栅格线从后往前数。因此，若想把一个元素放在栅格右下角那个栅格单元中，而不管栅格中有多少列多少行，可以这样声明：

```css
grid-column-start: -1;
grid-row-start: -1;
```

注意，隐式栅格轨道（这个概念稍后讨论）不能这样做，只有通过 grid-template-* 属性（例如 grid-template-rows）显式定义的栅格线才能使用负数引用。

<br>

当然，引用栅格线也不只限于使用编号。如果栅格线有名称，还可以使用名称引用栅格线（或者二者混用）。如果多余栅格线使用同一个名称，还要加上编号，指明想引用的是哪一条。因此，如果想引用第四条名为 mast-slice 的栅格线，要使用 mast-slice 4。请看下面的样式（结果如下图），了解具体该怎么做：

```css
#grid {
    display: grid;
    grid-template-rows: repeat(5, [R] 4em);
    grid-template-columns: 2em repeat(5, [col-A] 5em [col-B] 5em) 2em;
}

.one {
    grid-row-start: R 2;
    grid-row-end: 5;
    grid-column-start: col-B;
    grid-column-end: span 2;
}

.two {
    grid-row-start: R;
    grid-row-end: span R 2;
}

.three {
    grid-row-start: 9;
    grid-column-start: col-A -2;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%8A%8A%E5%85%83%E7%B4%A0%E9%99%84%E5%8A%A0%E5%88%B0%E5%85%B7%E5%90%8D%E6%A0%85%E6%A0%BC%E7%BA%BF%E4%B8%8A.png)

注意，使用名称引用时，span 后面的值也变了：span 2 col-A 的意思是，栅格元素从起点（第三条 col-A）开始，跨过一个 col-A，在后面一个 col-A 处结束。因此，这个栅格元素其实横跨四个列轨道，因为 col-A 每隔一条列栅格线出现一次。

同样，负数从序列的尾端反向计数，因此 col-A -2 的意思是倒数第二条名为 col-A 的栅格线。由于 .three 没有声明结束线的值，所以都被设为 span 1。也就是说，下述样式与前例中的 .three 样式完全等效：

```css
.three {
    grid-row-start: 9;
    grid-row-end: span 1;
    grid-column-start: col-A -2;
    grid-row-end: span 1;
}
```

<br>除此之外还有一种引用栅格线名称的方式，即通过栅格区域隐式创建的栅格线名称。请看下述样式，得到的结果如下图所示：

```css
grid-template-areas:
	"header header header header"
	"leftside content content rightside"
	"leftside footer footer footer";

#masthead {
    grid-row-start: header;
    grid-column-start: header;
    grid-row-end: 4;
    grid-column-start: leftside / span 1;
}

#main {
    grid-row-start: content;
    grid-row-end: content;
    grid-column-start: content;
}

#navbar {
    grid-row-start: rightside;
    grid-row-end: 3;
    grid-column-start: rightside;
}

#footer {
    grid-row-start: 3;
    grid-row-end: span 1;
    grid-column-start: footer;
    grid-row-end: footer;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC13%E7%AB%A0%EF%BC%9A%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80/%E6%8A%8A%E5%85%83%E7%B4%A0%E9%99%84%E5%8A%A0%E5%88%B0%E5%85%B7%E5%90%8D%E6%A0%85%E6%A0%BC%E7%BA%BF%E4%B8%8A%E7%9A%84%E5%8F%A6%E4%B8%80%E7%A7%8D%E6%96%B9%E5%BC%8F.png)

浏览器遇到你提供的自定义标识符（即你定义的名称）时会在名称后面加上 -start 或 -end，然后寻找相应名称的栅格线。具体加上哪个值，取决于你指定的是开始线还是结束线。因此，前面两行声明是等效的：

```css
grid-column-start: header;
grid-column-end: header;
grid-column-start: header-start;
grid-column-end: header-end;
```

等效的原因前面说过，因为使用 grid-template-areas 显式创建栅格区域时会使用 -start 和 -end 的形式隐式命名区域四周的栅格线。

<br>最后一个可用的值是 auto。这个值有点让人摸不透。根据栅格布局规范，如果把开始或结束栅格线属性的值设为 auto，意思是自动确定位置，自动确定跨度，或者默认跨度为一。实际应用中，具体选择哪条栅格线由栅格流（grid flow，这个概念还未介绍，不过快了）确定。对开始线来说，auto 通常指下一条可用的列或行线。对结束线来说，auto 通常指跨一个栅格单元后的栅格线。注意前两句话中的通常，因为自动机制是没有定数的。

<br>

## 2. 行和列的简写属性

有两个简写属性能简化把元素附加到栅格线上的过程。

```css
grid-row, grid-column

取值：<grid-line> [/ <grid-line> ]?
初始值：auto
适用于：栅格元素和绝对定位元素（前提是容纳块为栅格容器）
计算值：声明的值
继承性：否
动画性：否
```

这两个属性的主要优势是，能简化排布栅格元素时声明开始和结束栅格线的过程。例如：

```css
#grid {
    display: grid;
    grid-template-rows: repeat(10, [R] 1.5em);
    grid-template-columns: 2em repeat(5, [col-A] 5em [col-B] 5em) 2em;
}

.one {
    grid-row: R 3 / 7;
    grid-column: col-B / span 2;
}

.two {
    grid-row: R / span R 2;
    grid-column: col-A 3 / span 2 col-A;
}

.three {
    grid-row: 9;
    grid-column: col-A -2;
}
```

老实说，这比一个一个声明开始和结束线简洁多了。除了变简洁之外，这两个属性的行为大都与前面所说的一样。在以斜线分隔的两部分中，前一部分定义的是开始栅格线，后一部分定义的是结束栅格线。

















































































-
