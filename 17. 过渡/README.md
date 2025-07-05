# 1. CSS 过渡

CSS 过渡能控制一段时间内属性的值如何变成另一个值。因此，我们可以让属性的值逐渐变化，自然一些，不那么突兀。例如：

```css
button {
    color: magenta;
    transition: color 200ms ease-in 50ms;
}

button:hover {
    color: rebeccapurple;
    transition: color 200ms ease-out 50ms;
}
```

在这个例子中，当鼠标悬停在按钮上时，文本的颜色不是瞬间变化的。我们利用 CSS 过渡，让按钮文本的颜色在 200 毫米内由 magenta 逐渐变为 rebeccapurple，而且开始过渡前还有 50 毫秒延迟。颜色的变化，不管耗时多久，都是过渡。加上 CSS 属性 transition 后，颜色在一段时间内逐渐变化，而且肉眼能察觉到变化。

就算还想支持 IE9 或更旧版本的浏览器，现在也可以使用 CSS 过渡。如果浏览器不支持 CSS 过渡相关的属性，变化立即完成，而不逐渐过渡，对最终结果完全没有影响。同样，如果属性或提供给属性的值不支持动画，变化也立即完成，而不逐渐过渡。

>这里所说的支持动画，是指属性可以通过过渡或动画（下一章的话题）以动画的形式表示值的变化。支持动画的属性参见附录 A。

有时，我们想瞬间改变值。虽然前面用链接颜色举例，但是链接颜色通常在悬停时是立即改变的，知会看得见发生了交互，表明悬停其上的元素是链接。类似地，在自动补全的列表框中，不能慢慢显现选项，而是要立即把选项显示出来，不能比用户输入的速度慢。立即改变值通常能提供最好的用户体验。

另一些情况下，你可能想逐渐改变属性的值，让用户注意即将发生的事。例如，为了让纸牌游戏更贴近现实，可能会在 200 毫秒的时间段以动画的形式表翻牌动作。倘若没有动画，用户可能察觉不到发生了什么。

再举个例子，你可能想在 200 毫秒的时间段内展开或呈现下拉菜单（如果立即展开，不太协调）。利用过渡功能，可以让下拉菜单慢慢显示出来。在下图中，我们过渡的是缩放变形对子菜单高度的改变。CSS 变形经常这么用，详情参见本章后文。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC17%E7%AB%A0%EF%BC%9A%E8%BF%87%E6%B8%A1/%E8%BF%87%E6%B8%A1%E7%9A%84%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81%E3%80%81%E4%B8%AD%E9%97%B4%E7%8A%B6%E6%80%81%E5%92%8C%E6%9C%80%E7%BB%88%E7%8A%B6%E6%80%81.gif)

<br>

# 2. 定义过渡的属性

在 CSS 中，过渡使用四个属性定义：transition-property、transition-duration、transition-timing-function 和 transition-delay。此外，还有个简写属性 transition，可一次声明全部四个属性。

为了实现上图章的下拉导航栏，四个 CSS 过渡属性都使用了，此外还用其他属性定义了过渡的始态和终态。上图中的过渡效果是用下述代码定义的：

```css
nav li ul {
    transition-property: transform;
    transition-duration: 200ms;
    transition-timing-function: ease-in;
    transition-delay: 50ms;
    transform: scale(1, 0);
    transform-origin: top center;
}

nav li:hover ul {
    transform: scale(1, 1);
}
```

注意，这个过渡示例是用 :hover 状态触发样式变化事件的，除此之外还可以通过其他方式触发。例如，可以添加或删除类，也可以改变状态，比如把输入框的状态由 :invalid 变为 :valid，或由 :checked 变成 :not(:checked)。甚至，还可以利用 :nth-last-of-type 等选择符在斑马纹表格末尾追加一行，或者在列表的末尾追加一个列表项目。

在上图中，嵌套列表的始态为 transform: scale(1, 0)，而且使用 transform-origin: top center 设置了原点。终态为 transform: scale(1, 1)，变形原点始终不变。

>变形属性的详细说明参见第 16 章。

在这个例子中，过渡的属性是 transform，触发 hover 事件时，在 200 毫秒的时段内由旧值 transform: scale(1, 0) 平滑过渡到新值 transform: scale(1, 1)，即嵌套的无序列表放大到默认的原始尺寸。这个过渡延迟 50 毫秒开始，整个过程是渐入式的，起初速度较慢，然后逐渐加快。

过渡就在应用到元素上的常规样式中声明。当目标属性的值发生变化时，如果为目标属性设置了过渡效果，浏览器将应用过渡效果，逐渐由旧值变成新值。

注意，所有与过渡有关的属性都在 ul 元素的非悬停状态上声明。悬停状态仅用于改变变形效果，而不是过渡效果。这样做的好处是，悬停时目录将下拉打开，而且悬停状态结束后目录还会上拉关闭。

<br>

如果像下面这样把过渡相关的属性应用到悬停状态上：

```css
nav li ul {
    transform: scale(1, 0);
    transform-origin: top center;
}

nav li:hover ul {
    transition-property: transform;
    transition-duration: 200ms;
    transition-timing-function: ease-in;
    transition-delay: 50ms;
    transform: scale(1, 1);
}
```

非悬停状态下，元素将使用默认的过渡值，即瞬间过渡。对前例来说，悬停时菜单将下拉打开，但是悬停状态结束后菜单立即消失，这是因为，在非悬停状态下。过渡属性不再应用到元素上。

当然，你可能就想要这样的效果，即慢慢下拉打开，但是立即消失。如果真是这样，过渡效果就要应用到悬停状态上。否则，应该把过渡属性直接应用到元素上，这样在进入和退出悬停状态时都有过渡效果。退出状态时，过渡时序是反过来的。反向过渡是默认行为，如果想覆盖，可以在始态和终态声明不同的过渡效果。

<br>

这里所说的始态是指页面加载时元素所处的状态。始态可能是元素始终处于的状态，例如在元素选择符上设置的属性，而元素的 :hover 状态就不是始态。始态也可能是可编辑内容的元素获得焦点时的状态（:focus），例如：

```css
/* 匹配元素所有状态的选择符 */
p[contenteditable] {
    background-color: rgba(0, 0, 0, 0);
}

/* 匹配元素部分状态的选择符 */
p[contenteditable]:focus {
    /* 覆盖声明 */
    background-color: rgba(0, 0, 0, 0.1);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC17%E7%AB%A0%EF%BC%9A%E8%BF%87%E6%B8%A1/%E5%8C%B9%E9%85%8D%E5%85%83%E7%B4%A0%E9%83%A8%E5%88%86%E7%8A%B6%E6%80%81%E7%9A%84%E9%80%89%E6%8B%A9%E7%AC%A6.gif)

在这个示例中，始态始终是完全透明的背景，仅当用户让元素获得焦点才会变化。这就是本章一直说的始态或默认值。不管状态怎么变化，比如从始态变为终态（在前例中是获得焦点），匹配元素所有状态的选择符中声明的过渡属性对元素一直有影响。

<br>

始态还可能是可变的临时状态，例如复选框的 :checked，或者表单控件的 :valid，又或者类的增删：

```css
/* 匹配元素部分状态的选择符 */
input:valid {
    border-color: green;
}

/* 前一个选择符不匹配时，匹配元素部分状态的选择符 */
input:invalid {
    border-color: red;
}

/* 匹配元素部分状态的选择符，不管输入框中的内容是否有效 */
input:focus {
    /* 互斥的声明 */
    border-color: yellow;
}
```

在这个示例中，:valid 和 :invalid 选择符都能匹配部分状态下的元素，但是不能同时匹配。而 :focus 选择符能匹配任何情况下获得焦点的输入框，不管输入的内容同时还有没有匹配 :valid 或 :invalid 选择符，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC17%E7%AB%A0%EF%BC%9A%E8%BF%87%E6%B8%A1/%E8%BE%93%E5%85%A5%E6%A1%86%E5%9C%A8%E6%9C%89%E6%95%88%E3%80%81%E6%97%A0%E6%95%88%E5%92%8C%E8%8E%B7%E5%BE%97%E7%84%A6%E7%82%B9%E7%8A%B6%E6%80%81%E4%B8%8B%E7%9A%84%E5%A4%96%E8%A7%82.gif)

这种情况下，始态指初始值，可能是 :valid，也可能是 :invalid。而终态与始态（:valid 或 :invalid）相反。

<br>

记住，始态和终态可以应用不同的过渡值，但是进入某一状态时一定会使用当前状态定义的值。请看下面的示例代码，这里设置的过渡在 2 秒的时段内下拉打开菜单，但是上拉关闭只用 200 毫秒：

```css
nav li ul {
    transition-property: transform;
    transition-duration: 200ms;
    transition-timing-function: ease-in;
    transition-delay: 50ms;
    transform: scale(1, 0);
    transform-origin: top center;
}

nav li:hover ul {
    transition-property: transform;
    transition-duration: 2s;
    transition-timing-function: linear;
    transition-delay: 1s;
    transform: scale(1, 1);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC17%E7%AB%A0%EF%BC%9A%E8%BF%87%E6%B8%A1/dd_menu.gif)

这样的用户体验非常糟糕，但是却很好地体现了这一点。悬停时，打开导航耗时整整 2 秒钟。但是关闭时，短短 0.2 秒就结束了。鼠标悬停在列表元素上时，应用的是终态（悬停状态）定义的过渡属性，生效的是为悬停状态定义的 transition-duration: 2s。如果鼠标没有悬停在菜单上，返回默认的缩小状态，使用的是始态（nav li ul 选择符）中定义的过渡属性，因此关闭菜单耗时 200ms。

请仔细观察这个示例，尤其是默认状态下的过渡样式。如果用户把鼠标从父级导航元素或作为子元素的下拉菜单上移开，下拉菜单延迟 50 毫秒才开始持续 200 毫秒的过渡。这其实是一种合宜的用户体验，在关闭菜单之前给用户留个机会（不过时间较短），把鼠标再移到菜单上。

定义过渡效果的四个属性虽然可以分别声明，但是更常使用简写属性。介绍简写属性之前，先讨论一下各个单独属性，掌握各属性的作用。

<br>

## 1. 限制受过渡影响的属性

transition-property 属性指定想应用过渡效果的 CSS 属性名称。这样便可以限定只在特定的属性上应用过渡效果，而其他属性值的变化则瞬间完成。

```css
transition-property

取值：none | [ all | <property-name> ]#
初始值：all
适用于：所有元素，以及 :before 和 :after 伪元素
计算值：指定的值
继承性：否
动画性：否
```

transition-property 属性的值以逗号分隔的属性列表。或者是 none，表示不过渡任何属性，还可以是默认值 all，即过渡所有支持动画的属性。以逗号分隔的属性列表中也可以包含关键字 all。

如果只有关键字 all，或者默认为 all，那么所有支持动画的属性将一起过渡。假设我们想在悬停时改变一个框体的外观：

```css
div {
    color: #ff0000;
    border: 1px solid #00ff00;
    border-radius: 0;
    transform: scale(1) rotate(0deg);
    opacity: 1;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.1);
    width: 50px;
    padding: 100px;
}

div:hover {
    color: #000000;
    border: 5px dashed #000000;
    border-radius: 50%;
    transform: scale(2) rotate(-10deg);
    opacity: 0.5;
    box-shadow: -3px -3px rgba(255, 0, 0, 0.5);
    width: 100px;
    padding: 20px;
}
```

当鼠标指针移到 div 元素时，始态与悬停状态（终态）值不同的每个属性都将变为悬停状态声明的值。transition-property 属性用于定义哪些属性的变化以动画形式持续一段时间（而不是瞬间变化）。所有属性都将从默认值变为悬停状态下的值，但是只有 transition-property 列出的支持动画的属性在指定的持续时间内逐渐过渡。不支持动画的属性，例如 border-style，立即从一个值变成下一个值。

如果 transition-property 属性的值只有 all，或者是逗号分隔的一组值中的最后一个，那么所有支持动画的属性将一起过渡。如果不想过渡全部属性，要逐一列出受过渡属性影响的各属性（以逗号分隔）。

因此，如果想过渡全部属性，下面两个样式基本上是等效的：

```css
div {
    color: #ff0000;
    border: 1px solid #00ff00;
    border-radius: 0;
    transform: scale(1) rotate(0deg);
    opacity: 1;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.1);
    width: 50px;
    padding: 100px;
    transition-property: color, border, border-radius, transform, opacity, box-shadow, width, padding;
    transition-duration: 1s;
}

div {
    color: #ff0000;
    border: 1px solid #00ff00;
    border-radius: 0;
    transform: scale(1) rotate(0deg);
    opacity: 1;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.1);
    width: 50px;
    padding: 100px;
    transition-property: all;
    transition-duration: 1s;
}
```

两个样式中声明的 transition-property 属性都将过渡列出的所有属性，但是前者只过渡值可能有变化的八个属性，即在其他样式规则块中可能声明的属性。当前样式规则块中也声明了这八个属性，但这不是强制要求。

后一个样式规则中的 transition-property: all 指明，由样式变化事件导致值有变化的所有支持动画的属性，不管属性的值在哪个 CSS 规则块中发生变化，都在一秒钟的时段内过渡。能被该选择符匹配的所有元素的支持动画的全部属性都将逐渐过渡，而不只是当前样式块中声明的属性。

<br>

这里，前一个版本只把过渡效果应用到列出的八个属性上，不过这样能精确控制过渡哪个属性。单独声明各属性可以为每个属性指定不同的速度、延迟和持续时间：

```css
div {
    color: #ff0000;
    border: 1px solid #0f0;
    border-radius: 0;
    transform: scale(1) rotate(0deg);
    opacity: 1;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.1);
    width: 50px;
    padding: 100px;
}

.foo {
    color: #00ff00;
    transition-property: color, border, border-radius, transform, opacity, box-shadow, width, padding;
    transition-duration: 1s;
}
```

```html
<div class="foo">Hello</div>
```

<br>

如果想分开定义各属性的过渡效果，把属性一个个列出来，中间以逗号分隔。如果绝大部分属性持续的时间相同，而且延迟和步调也一致，只有少数属性例外，可以先使用 all，然后再为例外的属性单独定义时间、速度或步调。此时要把 all 放在首位。

```css
div {
    color: #f00;
    border: 1px solid #00ff00;
    border-radius: 0;
    transform: scale(1) rotate(0deg);
    opacity: 1;
    box-shadow: 0px 0px rgba(0, 0, 0, 0.1);
    width: 50px;
    padding: 100px;
    transition-property: all, border-radius, opacity;
    transition-duration: 1s, 2s, 3s;
}
```

在这组逗号分隔的值中，all 表示样式规则中列出的所有属性，以及继承的所有 CSS 属性，还有其他匹配该元素或由该元素继承的其他 CSS 规则块中的全部属性。

在上述示例中，获得新值的所有属性将采用相同的持续时间、延迟和时序函数过渡，不过单独声明的 border-radius 和 opacity 例外。这两个属性在 all 后面单独列出，可以与其他属性采用相同的时间、延迟和时序函数，也可以指定不同的时间、延迟和时序函数。这里，除 border-radius 和 opacity 之外的所有属性，过渡的持续时间为 1 秒，而 border-radius 属性的持续时间为 2 秒，opacity 属性的持续时间为 3 秒（transition-duration 属性在下一节介绍）。

>在逗号分隔的一组值中，all 必须放在首位。在 all 前面声明的属性涵盖在 all 之中，这样本想为前面的属性设定的其他过渡属性值将被覆盖。

<br>

### 禁用过渡效果

默认情况下没有过渡效果，然而如果设置了过渡，而后又想在特定的情况下撤销过渡效果，可以使用 transition-property: none 覆盖整个过渡声明，禁用所有属性的过渡效果。none 关键字只能作为该属性的唯一一个值，不能放在以逗号分隔的一组值中。如果想撤销部分属性的过渡效果，只能列出仍想过渡的属性。transition-property 属性不能排除不想过渡的属性，只能涵盖想过渡的属性。

>另一种方法是把属性的延迟和持续时间都设为 0s。这样，变化瞬间显现，就像没有应用 CSS 过渡效果一样。

<br>

### 过渡事件

在 DOM 中，不管是哪个方向的过渡，不管过渡持续多久、延迟多长，也不管过渡的属性是单独声明的还是涵盖在 all 中，过渡结束后都会触发 transitionend 事件。有时看似单个声明的属性，却会触发多个 transitionend 事件，因为简写属性中每个支持动画的属性有各自的 transitionend 事件。以下述样式为例：

```css
div {
    color: #f00;
    border: 1px solid #00ff00;
    border-radius: 0;
    transform: scale(1) rotate(0deg);
    opacity: 1;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.1);
    width: 50px;
    padding: 100px;
    transition-property: all, border-radius, opacity;
    transition-duration: 1s, 2s, 3s;
}
```

过渡结束时，将触发 8 次 transitionend 事件。例如，单单一个 border-radius 过渡就会触发 4 次 transitionend 事件，下面 4 个单独的属性各触发一次：

* border-bottom-left-radius
* border-bottom-right-radius
* border-top-right-radius
* border-top-left-radius

padding 属性也是 4 个独立属性的简写形式：

* padding-top
* padding-right
* padding-bottom
* padding-left

border 属性触发 8 次 transitionend 事件，border-width 简写属性对应 4 次，border-color 简写属性又对应 4 次：

* border-left-width
* border-right-width
* border-top-width
* border-bottom-width
* border-top-color
* border-left-color
* border-right-color
* border-bottom-color

然而，border-style 属性不触发 transitionend 事件，因为 border-style 属性不支持动画。

我们怎么知道 border-stye 属性不支持动画？我么还可以假设它不支持，因为 solid 和 dashed 两个值之间没有符合逻辑的中点。为了证明这一点，可以查阅附录 A 中列出的支持动画的属性列表，或者属性的规范。

这里，列出的 8 个属性将触发 21 次 transitionend 事件，因为其中包含前后两个状态下值有变化的简写属性。对 all 来说，至少触发 21 次 transitionend 事件：前后状态涵盖的 8 个属性中每个独立的属性触发一次，此外可能还有继承或在影响该元素的其他样式块中声明的属性。

transitionend 事件可以像这样监听：

```javascript
document.querySelector("div").addEventListener("transitionend", function (e) {
    console.log(e.propertyName);
});
```

transitionend 事件有三个与该事件有关的属性：

1. propertyName：结束过渡的 CSS 属性的名称。
2. pseudoElement：应用过渡效果的伪元素，前面有两个冒号。如果过渡效果应用到常规的 DOM 节点上，返回空字符串。
3. elapsedTime：过渡持续的时间，单位为秒。返回的值通常是 transition-duration 属性声明的时间。

仅当属性成功过渡到新值后才会触发 transitionend 事件。倘若过渡被中断了，例如在其他地方对同一元素的同一属性做了修改，transitionend 事件不会被触发。

如果属性返回初始值，又触发一次 transitionend 事件。这次事件在过渡开始时就触发，即使原方向的过渡还未结束。

<br>

## 2. 设置过渡持续时间

transition-duration 属性的值是以逗号分隔的时间长度列表，单位为秒（s）或毫秒（ms）。这些值指定从一个状态过渡到另一个状态历时多久。

```css
transition-duration

取值：<time>#
初始值：0s
适用于：所有元素，以及 :before 和 :after 伪元素
计算值：指定的值
继承性：否
动画性：否
```

如果在两个状态之间来回过渡，而只有其中一个状态声明了持续时间，那么这个持续时间只在向那个状态过渡时起作用。请看下面两个样式规则：

```css
input:invalid {
    transition-duration: 1s;
    background-color: red;
}

input:valid {
    transition-duration: 0.2s;
    background-color: green;
}
```

如果两个状态声明的 transition-duration 值不一样，过渡的持续时间为目标状态声明的 transition-duration 值。在上述示例中，如果输入框中的内容无效，变为红色背景的过程持续 1 秒，而内容有效时，变为绿色背景的过程只持续 200 毫秒。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC17%E7%AB%A0%EF%BC%9A%E8%BF%87%E6%B8%A1/transition_duration.gif)

<br>

transition-duration 属性的值是正数，单位为秒（s）或毫秒（ms）。规范要求必须带时间单位，就算设为零秒，也要写成 0s。默认情况下，属性值的变化是瞬间完成的，看不到动画效果，因此过渡持续时间的默认值为 0s。

如果 transition-delay 属性的值不是正值，而且没有声明 transition-duration，那么声明的 transition-property 不起作用，即不触发 transitionend 事件。只要设置的过渡总时间大于零秒，可以直接设为 0s，也可以不声明 transition-duration，默认为 0s，过渡效果就会应用，而且过渡结束时会触发 transitionend 事件。

transition-duration 的值不能为负，如果持续时间列表中有一个是负值，整个属性值都将失效。

以前面那个超长的 transition-property 声明为例，我们可以为所有属性声明统一的持续时间，也可以单独为各属性声明不同的持续时间，还可以让余下的属性使用相同的持续时间。如果想让全部属性使用相同的持续时间，设置过渡时只要声明一个 transition-duration 值：

```css
div {
    color: #ff0000;
    transition-property: color, border, border-radius, transform, opacity, box-shadow, width, padding;
    transition-duration: 200ms;
}
```

<br>

此外，也可以在 transition-duration 属性中声明一组以逗号分隔的时间值，各值相同，而且与 transition-property 属性列出的值数量相等。如果想让各属性持续不同的时间，要在一组以逗号分隔的值中设置不同的时长：

```css
div {
    color: #ff0000;
    transition-property: color, border, border-radius, transform, opacity, box-shadow, width, padding;
    transition-duration: 200ms, 180ms, 160ms, 140ms, 120ms, 100ms, 1s, 2s;
}
```

<br>

如果声明的属性数量与持续时间的数量不一致，根据各浏览器制定的规则处理。如果持续时间的数量比属性多，忽略多出的持续时间。如果属性的数量比持续时间多，重复使用前面的持续时间。在下面的示例中，color、border-radius、opacity 和 width 的持续时间为 100 毫秒，border、transform、box-shadow 和 padding 的持续时间为 200 毫秒。

```css
div {
    transition-property: color, border, border-radius, transform, opacity, box-shadow, width, padding;
    transition-duration: 100ms, 200ms;
}
```

如果恰好声明两个持续时间，奇数位上的属性使用第一个持续时间，偶数位上的属性使用第二个持续时间。

<br>

我们要考虑用户体验。如果过渡太慢，网站会给人速度慢或无响应的感觉，一个微不足道的效果却吸引了过多的注意力。如果过渡太快，用户可能察觉不到。虽然过渡的持续时间可以设为任何正值，但是也不能过于离谱，应该记住过渡的目的是增强效果，不能牺牲用户体验。效果持续时间以能让人看到为原则，但是不能太久，以免喧宾夺主。一般来说，持续时间在 100 到 200 毫秒之间的过渡效果最好，用户能看到动画过程，而且不至于分散注意力。

我们想让下拉菜单具有良好的用户体验，因此把两个属性的过渡持续时间都设为 200 毫秒：

```css
nav li ul {
    transition-property: transform, opacity;
    transition-duration: 200ms;
}
```

<br>

## 3. 调整过渡的内部时序

你是否希望过渡慢速开始，然后逐渐加快？或者快速开始，逐渐减速走向终点？又或者先平稳行进，然后步进甚至弹跳数次？transition-timing-function 属性用于控制过渡的步调。

```css
transition-timing-function

取值：<timing-function>#
初始值：ease
适用于：所有元素，以及 :before 和 :after 伪元素
计算值：指定的值
继承性：否
动画性：否
```

transition-timing-function 可以取的值有 ease、linear、ease-in、ease-out、ease-in-out、step-start、step-end、steps(n, start)（n 是步进的次数）、steps(n, end) 和 cubic-bezier(x1, y1, x2, y2)（这些也是 animation-timing-function 属性的有效值，详情参见第 18 章）。

除步进关键字之外，其他关键字定义的是渐进时序函数，是描述平滑曲线的三次方贝塞尔函数的别名。规范预定义了五个渐进函数，见下表。

| 时序函数       | 说明                                       | 三次方贝塞尔值                   |
| -------------- | ------------------------------------------ | -------------------------------- |
| cubic-bezier() | 指定一个三次方贝塞尔曲线                   | cubic-bezier(x1, y1, x2, y2)     |
| ease           | 慢速开始，然后加速，再慢下来，结束时特别慢 | cubic-bezier(0.25, 0.1, 0.25, 1) |
| linear         | 整个过渡过程保持相同的速度                 | cubic-bezier(0, 0, 1, 1)         |
| ease-in        | 慢速开始，然后加速                         | cubic-bezier(0.42, 0, 1, 1)      |
| ease-out       | 快速开始，然后减速                         | cubic-bezier(0, 0, 0.58, 1)      |
| ease-in-out    | 与 ease 类似，中间较快，两端很慢，但不同速 | cubic-bezier(0.42, 0, 0.58, 1)   |

三次方贝塞尔曲线函数接受四个数字参数。上表中列出的五个具名渐进函数对应的曲线如下图所示。例如，linear 等同于 cubic-bezier(0, 0, 1, 1)。三次方贝塞尔函数的第一个和第三个参数必须在 0 和 +1 之间。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC17%E7%AB%A0%EF%BC%9A%E8%BF%87%E6%B8%A1/%E5%85%B7%E5%90%8D%E4%B8%89%E6%AC%A1%E6%96%B9%E8%B4%9D%E5%A1%9E%E5%B0%94%E5%AF%B9%E5%BA%94%E7%9A%84%E6%9B%B2%E7%BA%BF.png)

<br>

cubic-bezier() 函数的四个数字参数定义一个方框中两个手柄的 x 和 y 坐标。这两个手柄位于从方框左下角和右上角延伸出来的两条直线的末端。曲线使用这两个角和两个手柄的坐标经过贝塞尔函数计算得出。

下面通过几条曲线及对应的值来了解一下贝塞尔函数，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC17%E7%AB%A0%EF%BC%9A%E8%BF%87%E6%B8%A1/%E5%9B%9B%E6%9D%A1%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF%E5%8F%8A%E6%89%80%E7%94%A8%E7%9A%84%20cubic-bezier%28%29%20%E5%87%BD%E6%95%B0%E5%80%BC.png)

先看第一个例子。前两个值对应于 x1 和 y1，分别为 0.5 和 1。这两个值确定第一个手柄的位置，即横向走一半（x1 = 0.5），纵向走到方框的顶边（y1 = 1）。x2，y2 坐标的值为 0.5，0，对应的点在方框底边的中点，第二个手柄就在这个位置。曲线就由这两个手柄的位置确定。

在第二个例子中，手柄的位置对调了，得到的曲线也变了。第三个和第四个例子中手柄的位置也是颠倒的。注意，手柄的位置对调后，得到的曲线是不一样的。

<br>

预定义的关键字毕竟有限，若想自由控制动画，要使用三次方贝塞尔函数，自己提供四个浮点数。如果你能熟练应用微积分，或者经常使用 Freehand 或 Illustrator 等程序，也许能在脑中构想出三次方贝塞尔函数。如若不然，可以使用一些在线工具，例如 http://cubic-bezier.com/，自己尝试不同的值。你还可以使用这些在线工具比较常用的关键字，或者与自己定义的三次方贝塞尔函数对比。

如下图所示，http://easings.net 网站额外提供了很多三次方贝塞尔函数值，你可以利用这些值实现更栩栩如生的动画。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC17%E7%AB%A0%EF%BC%9A%E8%BF%87%E6%B8%A1/%E5%88%AB%E4%BA%BA%E4%B8%BA%E6%88%91%E4%BB%AC%E5%AE%9A%E4%B9%89%E7%9A%84%E4%B8%80%E4%BA%9B%E6%9C%89%E7%94%A8%E7%9A%84%E4%B8%89%E6%AC%A1%E6%96%B9%E8%B4%9D%E5%A1%9E%E5%B0%94%E5%87%BD%E6%95%B0.png)

这些动画的名称是由网站的创作人员起的，不在 CSS 规范中，因此使用时要按照下表写：

| 非官方名称     | 三次方贝塞尔函数值                      |
| -------------- | --------------------------------------- |
| easeInSine     | cubic-bezier(0.47, 0, 0.745, 0.715)     |
| easeOutSine    | cubic-bezier(0.39, 0.575, 0.565, 1)     |
| easeInOutSine  | cubic-bezier(0.445, 0.05, 0.55, 0.95)   |
| easeInQuad     | cubic-bezier(0.55, 0.085, 0.68, 0.53)   |
| easeOutQuad    | cubic-bezier(0.25, 0.46, 0.45, 0.94)    |
| easeInOutQuad  | cubic-bezier(0.455, 0.03, 0.515, 0.955) |
| easeInCubic    | cubic-bezier(0.215, 0.61, 0.355, 1)     |
| easeOutCubic   | cubic-bezier(0.215, 0.61, 0.355, 1)     |
| easeInOutCubic | cubic-bezier(0.645, 0.045, 0.355, 1)    |
| easeInQuart    | cubic-bezier(0.895, 0.03, 0.685, 0.22)  |
| easeOutQuart   | cubic-bezier(0.165, 0.84, 0.44, 1)      |
| easeInOutQuart | cubic-bezier(0.77, 0, 0.175, 1)         |
| easeInQuint    | cubic-bezier(0.755, 0.05, 0.855, 0.06)  |
| easeOutQuint   | cubic-bezier(0.23, 1, 0.32, 1)          |
| easeInOutQuint | cubic-bezier(0.86, 0, 0.07, 1)          |
| easeInExpo     | cubic-bezier(0.95, 0.05, 0.795, 0.035)  |
| easeOutExpo    | cubic-bezier(0.19, 1, 0.22, 1)          |
| easeInOutExpo  | cubic-bezier(1, 0, 0, 1)                |
| easeInCirc     | cubic-bezier(0.6, 0.04, 0.98, 0.335)    |
| easeOutCirc    | cubic-bezier(0.075, 0.82, 0.165, 1)     |
| easeInOutCirc  | cubic-bezier(0.785, 0.135, 0.15, 0.86)  |
| easeInBack     | cubic-bezier(0.6, -0.28, 0.735, 0.045)  |
| easeOutBack    | cubic-bezier(0.175, 0.885, 0.32, 1.275) |
| easeInOutBack  | cubic-bezier(0.68, -0.55, 0.265, 1.55)  |

<br>

### 步进时序

此外，还可以使用步进时序函数。规范预定义了两个步进值。

| 时序函数        | 定义                                                      |
| --------------- | --------------------------------------------------------- |
| step-start      | 整个过渡都处在最终关键帧上。等同于 steps(1, start)        |
| step-end        | 整个过渡都处在初始关键帧上。等同于 steps(1, end)          |
| steps(n, start) | 显示 n 个固定镜头，其中第一个固定镜头占整个过渡的百分之 n |
| steps(n, end)   | 显示 n 个固定镜头，前百分之 n 的时间处于初始值状态        |

如下图所示，使用步进函数时，从初始值到最终值的变化过程分为多步，而不是平滑过渡。

步进函数把过渡分成等距的几个步骤。定义步进时，要为函数提供步进次数和方向。方向有两个：start 和 end。使用 start 时，第一步在动画的开头，使用 end 时，最后一步在动画的末尾。例如，steps(5, end) 等跳跃五步，时间点分别为 0%、20%、40%、60% 和 80%。而 steps(5, start) 等距跳跃的时间点分别为 20%、40%、60%、80% 和 100%。

step-start 函数等同于 steps(1, start)。使用这个函数时，过渡的属性从一开始便处于最终值状态，一直持续到过渡结束。step-end 函数等同于 steps(1, end)，它把过渡的属性设为初始值，在过渡持续的整个时间段内都保持这个值。

>步进时序，尤其是 start 和 end 的确切含义，在第 18 章深入讨论。

<br>

仍以前面那个超长的 transition-property 声明为例，我们可以为所有属性声明统一的时序函数，也可以单独为各属性声明不同的时序函数等。下面的样式规则为所有过渡的属性设置统一的时序函数：

```css
div {
    transition-property: color, border-width, border-color, border-radius, transform, opacity, box-shadow, width, padding;
    transition-duration: 200ms;
    transition-timing-function: ease-in;
}
```

此外，还可以为每个属性设置不同的节奏，不过这样的用户体验非常糟糕。

<br>

谨记，transition-timing-function 不改变过渡的持续时间，这是 transition-duration 属性的功用。transition-timing-function 只控制设定的时间段内过渡的行进节奏。请看下面的样式：

```css
div {
    transition-property: color, border-width, border-color, border-radius, transform, opacity, box-shadow, width, padding;
    transition-duration: 200ms;
    transition-timing-function: ease, ease-in, ease-out, ease-in-out, linear, step-end, step-start, steps(5, start), steps(3, end);
}
```

这里，我们分别为九个属性设置了不同的时序函数，只要过渡的持续时间和延迟相同，所有属性的过渡都在同一时间开始和结束。时序函数控制持续时间内过渡的行进节奏，但不改变耗时（顺便说一下，上述过渡的用户体验非常糟糕，请不要这么做）。

为了找到最合适的效果，最好的方法是逐个试验不同的时序函数。在测试的过程中，把 transition-duration 的值设大一些，这样能更好地看清不同函数之间的差别。如果速度太快，很难与渐进函数区分开。发布最终结果时，别忘了把速度调快。

<br>

## 4. 延迟过渡

transition-delay 属性在元素上发生触发过渡的变化与开始过渡之间引入一定的延迟。

```css
transition-delay

取值：<time>#
初始值：0s
适用于：所有元素，以及 :before 和 :after 伪元素
计算值：指定的值
继承性：否
动画性：否
```

把 transition-delay 设为 0s（默认值），过渡立即开始，即一旦元素的状态发生变化就开始过渡。例如，我们熟悉的 a:hover 就是这种效果。

如果 transition-delay 的 `<time>` 值不是 0s，定义的是从属性的值开始变化的那一刻（此时还未应用 transition 或 transition-property）到 transition 或 transition-property 声明的属性开始以动画形式变为最终值之间的时间间隔。

有趣的是，`<time>` 值可以为负。负值的效果参见本章后面负的延迟值一节。

还以前面声明了 8 个（或 21 个）属性的 transition-property 为例，如果想让所有属性都立即开始过渡，可以不声明 transition-delay 属性，也可以把值设为 0s。此外，还可以让一半的属性立即开始过渡，而余下的属性等待 200 毫秒再开始过渡，如下所示：

```css
div {
    transition-property: color, border, border-radius, transform, opacity, box-shadow, width, padding;
    transition-duration: 200ms;
    transition-timing-function: linear;
    transition-delay: 0s, 200ms;
}
```

这里，我们把 transition-delay: 0s, 200ms 应用到一系列属性上，而且每个属性的过渡效果持续 200 毫秒。在这组过渡的属性中，color、border-radius、opacity 和 width 立即开始过渡。余下的属性则等到奇数位的属性过渡结束后才开始过渡，因为我们为余下的属性设置的 transition-delay 等于应用于全部过渡属性的 transition-duration。

与 transition-duration 和 transition-timing-function 一样，如果 transition-delay 列出的值（以逗号分隔）比 transition-property 列出的值（以逗号分隔）多，多出的延迟值将被忽略。而如果 transition-property 列出的值（以逗号分隔）比 transition-delay 列出的值（以逗号分隔）多，将重复使用延迟值。

我们甚至可以声明九个不同的 transition-delay 值，让每个属性在前一个属性过渡结束后再开始过渡，如下所示：

```css
div {
    transition-property: color, border-width, border-color, border-radius, transform, opacity, box-shadow, width, padding;
    transition-duration: 200ms;
    transition-timging-function: linear;
    transition-delay: 0s, 0.2s, 0.4s, 0.6s, 0.8s, 1s, 1.2s, 1.4s, 1.6s;
}
```























































