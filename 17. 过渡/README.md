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

在这个示例中，每个属性的过渡效果都在 1.8 秒后结束，但是各自的持续时间和延迟不尽相同。每个属性的 transition-duration 值加上 transition-delay 值必须等于 1.8 秒。

通常，我们希望所有过渡在同一时间开始。此时，只需为 transition-delay 属性提供一个值，这个值将应用到所有属性上。在下拉菜单中，我们设置的延迟是 50 毫秒。这个延迟至不太长，不会引起用户的注意，也不让应用显得很慢。在某种程序上，50 毫秒的延迟能防止导航菜单意外展开，例如用户把鼠标从页面的一部分移到另一部分的过程中可能会不小心经过或悬停在菜单项上。

<br>

### 负的延迟值

如果 transition-delay 的值为负数，而且绝对值比 transition-duration 的值小，从中间某个位置立即开始过渡。例如：

```css
div {
    transform: translateX(0);
    transition-property: transform;
    transition-duration: 200ms;
    transition-delay: -150ms;
    transition-timing-function: linear;
}

div:hover {
    transform: translateX(200px);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC17%E7%AB%A0%EF%BC%9A%E8%BF%87%E6%B8%A1/negative_delay.gif)

这里，我们把 transition-delay 的值设为 -150ms，而过渡持续 200ms，那么过渡将从 3/4 处开始，持续 50 毫秒。对本例中的线性时序函数而言，悬停时元素立即沿 x 轴平移 150px，然后在 50 毫秒的时间范围内慢慢从 150 像素处平移到 200 像素处。

如果 transition-delay 的值为负数，但是绝对值大于或等于 transition-duration 的值，属性的值瞬间变化，就像没有应用 transition 属性一样，因此也就不触发 transitionend 事件。

从悬停状态过渡回到原始状态时，默认情况下，还使用相同的 transition-delay 值。在上述示例中，由于悬停状态没有覆盖 transition-delay，因此元素将瞬间平移到整个过渡的 75% 处（即正向过渡的 25% 处），然后慢慢平移到原始状态。鼠标移开后，元素在 x 轴上跳到 50 像素处，然后用 50 毫秒的时间返回原位置，即沿 x 轴平移 0 像素。

<br>

## 5. transition 简写属性

transition 简写属性把目前介绍的四个属性合而为一：transition-property、transition-duration、transition-timing-function 和 transition-delay。

```css
transition

取值：<single-transition>#
初始值：all 0s ease 0s
适用于：所有元素，以及 :before 和 :after 伪元素
计算值：指定的值
继承性：否
动画性：否
<single-transition> = [ [ none | <transition-property> ] || <time> || <transition-timing-function> || <time> ]#
```

transition 属性的值可以是 none，或者任意个以逗号分隔的单次过渡。单次过渡包含：应用过渡效果的一个属性，或者关键字 all，把过渡应用到全部属性上，过渡的持续时间，时序函数，以及延迟。

如果 transition 简写属性中的单次过渡没有声明要过渡的属性，那么此次过渡默认为 all。如果没有声明 transition-timing-function 值，默认为 ease。如果只有一个时间值，设定的是持续时间，而没有延迟，好似把 transition-delay 设为 0s 一样。

把单次过渡中，持续时间和延迟值的顺序很重要：解析为时间得第一个值设定的是持续时间。如果在逗号之间或语句末尾还有时间值，那就是延迟。

下面三个样式规则声明的过渡效果是等效的：

```css
nav li ul {
    transition: transform 200ms ease-in 50ms,
        opacity 200ms ease-in 50ms;
}

nav li ul {
    transition: all 200ms ease-in 50ms;
}

nav li ul {
    transition: 200ms ease-in 50ms;
}
```

在第一个示例中，我们用简写形式为两个属性定义过渡效果。因为在悬停状态下我们想过渡全部属性，所有可以像第二个示例那样使用关键字 all。由于 all 是默认值，因此在简写形式中可以只提供持续时间、时序函数和延迟。如果时序函数不是 ease-in，而是 ease，还可以省略时序函数，因为 ease 是默认值。

持续时间必须设定，否则过渡效果不可见。换句话说，transition 属性中唯有 transition-duration 部分是真正必须的。

如果只想延迟菜单从闭合到展开的变化过程，仍要设置持续时间，只不过是设为 0s。记住，解析为时间的第一个值设定的是持续时间，第二个才是延迟：

```css
nav li ul {
    transition: 0s 200ms;
}
```

>这个过渡等待 200 毫秒才完全打开菜单，没有逐渐变化的过程。这样的用户体验非常糟糕。如果把选择符 nav li ul 改成 *，或许可以在愚人节捉弄一下别人。

<br>

如果有一组以逗号分隔的过渡（而不是只有一个过渡），而且值中有 none，那么整个过渡声明都将失效，从而被忽略。

```css
div {
    transition-property: color, border-width, border-color, border-radius, transform, opacity, box-shadow, width, padding;
    transition-duration: 200ms, 180ms, 160ms, 140ms, 120ms, 100ms, 1s, 2s, 3s;
    transition-timing-function: ease, ease-in, ease-out, ease-in-out, linear, step-end, step-start, steps(5, start), steps(3, end);
    transition-delay: 0s, 0.2s, 0.4s, 0.6s, 0.8s, 1s, 1.2s, 1.4s, 1.6s;
}

div {
    transition: color 200ms,
        border-width 180ms ease-in 200ms,
        border-color 160ms ease-out 400ms,
        border-radius 140ms ease-in-out 600ms,
        transform: 120ms linear 800ms,
        opacity 100ms step-end 1s,
        box-shadow 1s step-start 1.2s,
        width 2s steps(5, start) 1.4s,
        padding 3s steps(3, end) 1.6s;
}
```

上述两个 CSS 规则在功能上是等效的：可以使用四个单独的属性分别声明，也可以在简写属性中声明一组以逗号分隔的多个过渡。然而，两种写法不能混在一起：transition: transform, opacity 200ms ease-in 50ms 在延迟 50 毫秒后在 200 毫秒的时间范围内以渐进方式不透明度，但是 transform 将瞬间变化，不触发 transitionend 事件。

<br>

# 3. 反向过渡：退回起点

在前面的示例中，我们都只声明了一个过渡。所有过渡都应用在默认状态上，由 hover 事件触发。这些情况下，当鼠标移开后，各属性通过相同的过渡回到默认状态，延迟相同，但时序函数是相反的。

如果只在全局状态中声明过渡，鼠标悬停和移开状态使用相同的 transition 声明，因为选择符能匹配两个状态。如果不想完全复用整个过渡，覆盖部分过渡的属性，可以在全局状态下（而不只是悬停状态）中声明不同的过渡值。

在不同状态中声明的过渡只对所在的状态有效：

```css
a {
    background: yellow;
    transition: 200ms background-color linear 0s;
}

a:hover {
    background-color: orange;
    /* 转到 :hover 状态时的延迟 */
    transition: 50ms;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC17%E7%AB%A0%EF%BC%9A%E8%BF%87%E6%B8%A1/reverse.gif)

在这个示例中，当用户把鼠标悬停到链接上时，50 毫秒之后背景色才会慢慢变成橙色。而鼠标从链接上移开后，背景色立即开始过渡到黄色。在这两个方向中，过渡都耗时 200 毫秒，而且都采用线性变化方式。50 毫秒的延迟是在 :hover 状态（橙色）中声明的，因此在背景色变为橙色的过程中应用。

在前面的下拉菜单示例中，触发 :hover 事件后，菜单延迟 50 毫秒，在 200 毫秒的时间范围内采用渐入式时序展开。这个过渡使用 transition 属性在默认（非悬停）状态中设置。鼠标移开后，延迟 50 毫秒，各属性在 200 毫秒的时间范围内以渐出式时序返回原始状态。这种逆转效果式对非悬停状态中 transition 值的响应。这是默认的行为，是可控的。但是默认行为提供的用户体验最好，因此你可能并不想调整，然而你要知道确实可以调整。

<br>

折叠菜单时如果想快一会慢一会（现实中不会这么做，因为用户体验不好，这里故意这么做，只是为了演示），可以声明两个不同的过渡：

```css
nav ul ul {
    transform: scale(1, 0);
    opacity: 0;
    transition: all 4s steps(8, start) 1s;
}

nav li:hover ul {
    transform: scale(1, 1);
    opacity: 1;
    transition: all 200ms linear 50ms;
}
```

过渡是向着目标状态行进的，样式发生变化时，使用的是过渡属性的新值，而不是旧值。我们把平顺的线性动画放在 :hover 状态中。所用的过渡属性是目标状态中声明的。在上述示例中，当用户把鼠标悬停在下拉菜单的父级 li 元素上时，菜单快速逐渐打开，这个动作延迟 50 毫秒，耗时 200 毫秒。当用户把鼠标从下拉菜单或父级 li 元素上移开后，过渡效果等待一秒后在四秒钟内完成，整个过程分为八步。

如果只声明一个 transition 属性，应该放在起始状态中，因为我们希望设置的过渡在变成任何状态时都生效，例如悬停或类有变化。我们希望任何变化都能触发过渡，因此一般把唯一的 transition 声明放在默认的（特指度小）原始状态样式规则块中。如果想进一步控制，为不同的行进方向设置不同的过渡效果，要在涉及的所有类和 UI 状态中声明 transition 属性。

>祖辈元素和后代元素上都有过渡效果时要小心。过渡的属性发生变化后立即过渡祖辈或后代节点可能导致意料之外的后果。如果后代元素的过渡效果在祖辈元素的过渡效果之前结束，后代元素将继续过渡，所用的值（仍在过渡中）继承自父元素。这可能不是你想要的效果。

<br>

## 逆转中断的过渡

如果过渡还未结束却被打断了（例如下拉菜单未完全打开之前鼠标移开了），属性的值将还原为过渡开始前的值，而且这个过程也有过渡效果。因为逆转部分过渡时将重复使用持续时间和时序函数，而这可能对用户体验带来不好甚至糟糕的影响，所以 CSS 过渡规范规定，逆转的过渡持续的时间较短。

在下拉菜单示例中，我们在默认状态中把 transition-delay 设为 50ms，而且没有在悬停状态中声明过渡相关的属性，因此浏览器在开始逆转或结束过渡之前将等待 50 毫秒。

如果正向动画结束了，已经过渡到最终的值，并且触发了 transitionend 事件，逆转时所有浏览器都将复用 transition-delay 值。

如下表所示，如果过渡没有结束，例如结束之前用户把鼠标从导航上移开了，除 microsoft edge 之外的所有浏览器在逆转时都将复用延迟值。有些浏览器也复用 transition-duration 值，但是 edge 和 firefox 实现了规范中所说的逆转缩减因子。

| 浏览器  | 逆转延迟 | 过渡时间 | 实耗时间C |
| ------- | -------- | -------- | --------- |
| Chrome  | 有       | 200ms    | 0.200s    |
| Chrome  | 有       | 200ms    | 0.250s    |
| Safari  | 有       | 200ms    | 0.200s    |
| Firefox | 有       | 38ms     | 0.038s    |
| Opera   | 有       | 200ms    | 0.250s    |
| Edge    | 无       | 38ms     | 0.038s    |

假设过渡开始 75 毫秒后用户把鼠标从菜单上移开了。这意味着，下拉菜单还未完全打开，也未完全变成不透明就要慢慢关闭。在关闭菜单之前，浏览器将等待 50 毫秒，就像展开菜单前等待 50 毫秒一样。

这其实是一个好的用户体验，在关闭之前等待几毫秒能防止用户意外移出菜单导致的急闪行为。如上图所示，除 microsoft edge 之外的所有浏览器都会这么做。

虽然我们只给浏览器留出 75 毫秒的时间部分展开下拉菜单，但是有些浏览器在逆时仍将耗时 200 毫秒，即用完 transition-duration 属性声明的值。其他浏览器，例如 firefox 和 edge，则实现了 CSS 规范中所说的逆转缩减因子和逆转调整开始值。实现这两个值的浏览器逆转部分过渡所用的时间与原值相近，但不一定相等。

对步进时序函数来说，firefox 和 edge 会把时间向下取整为已完成的步数。比如有个耗时 10 秒、分为 10 步的过渡，3.25 秒之后开始逆转，那么正向过渡停止在第三步和第四步之间的 1/4 处（完成了 3 步，即整个过渡的 30%），因此逆时针将耗时 3 秒。在下述示例中，鼠标移开后，div 元素的宽度将增加到 130 像素，然后开始逐渐返回 100 像素：

```css
div {
    width: 100px;
    transition: width 10s steps(10, start);
}

div:hover {
    width: 200px;
}
```

虽然逆转的持续时间将向下取整为已完成的最大步数，但是逆转的整个过程仍将分为声明的步数，而不是已完成的步数。上述示例在 3.25 秒处中断，因此逆时针将在 3 秒钟的时间内完成 10 步。逆转时每一步的持续时间将缩短，变成 300 毫秒，而且每一步宽度缩小 3 像素，而非 10 像素。

如果是通过过渡改变背景位置实现的小人动画，效果十分糟糕。规范和具体的实现可以会做出改变，让逆转的步骤数与执行到中途的过渡保持一致。目前，其他浏览器在逆转时将耗时 10 秒钟，在 10 秒内分 10 步逆转正向过渡已完成的 3 步，一秒一步，一步宽度减少 3 像素。

未实现反向缩减时序的浏览器将耗时整整 10 秒（而非 3 秒），把整个过渡分为 10 步，逆转正向完成的 30%。无论起初的过渡有没有完成，也不管采用何种时序函数，这些浏览器在逆转过渡时都i昂使用原始过渡的完整持续时间，如果 transition-delay 为负值，再从中减去延迟的绝对值。在上述步进示例中，反向过渡将耗时 10 秒钟。在导航菜单示例中，不管下拉菜单有没有完全展开，逆转都将用时 200 毫秒。

对实现了逆转时序调整机制的浏览器来说，如果是线性时序函数，两个方向的持续时间相同。如果是步进时序函数，逆转过渡的持续时间等于完成最后一步所用的时间。如果是其他 cubic-bezier 函数，持续时间与中断前已完成的进程成比例。如果 transition-delay 为负值，延迟也按比例减少。延迟为正值的话，两个方向则保持不变。

任何浏览器都不会在悬停状态触发 transitionend 事件，因为过渡根本未结束。但是，当反向过渡把菜单完全折叠起来后，在所有浏览器中都会触发 transitionend 事件。反向过渡把菜单完全折叠起来后，在所有浏览器中都会触发 transitionend 事件。反向过渡的 elapsedTime 值取决于浏览器是在 200 毫秒内关闭菜单，还是用部分打开菜单所用的时间关闭菜单。

若想覆盖这些值，在始态和终态（例如针对未悬停和悬停的样式）中都要声明过渡属性。这对逆向缩减机制虽然没有影响，但是却能进一步控制。

<br>

# 4. 支持动画的属性和值

着手实现过渡和动画之前，要明确一点：不是所有属性都支持动画。支持动画的 CSS 属性均可应用过渡（或动画）效果。那么，哪些属性支持动画？

>附录 A 列出了支持动画的属性，但是 CSS 在不断变化着，支持动画的属性列表很有可能会增加新成员。

判断属性是否支持动画的关键是确定其取值能否内插。插值指在两个数据点之间插入一个数据点。判断属性的值是否支持动画的关键准则是计算值能否内插。如果属性的计算值是关键字，不能内插。如果关键字能计算未某种数值，则能内插。简单而言，如果能找到属性的两个值的中间点，那么属性的值可能就支持动画。

例如，display 属性的 block 和 inline-block 值不是数值，因此没有中间点，从而不支持动画。transform 属性的 rotate(10deg) 和 rotate(20deg) 值有中间点，是 rotate(15deg)，因此支持动画。

border 属性是 border-style、border-width 和 border-color 的简写形式（各自又是各单边属性的简写）。虽然 border-style 属性的值没有中间点，但是 border-width 属性的长度单位值是数值，支持动画。medium、thick 和 thin 等关键字值有等效的数值（border-width 属性把关键字计算为长度），因此这些值是可内插的。

border-color 属性的颜色是数值（具名颜色都表示十六进制颜色值），因此颜色也支持动画。如果从 border: red solid 3px 过渡到 border: blue dashed 10px，边框宽度和边框颜色而将按照设定的速度过渡，而 border-style 将在过渡开始时（延迟过后）直接由 solid 变成 dashed。

如附录 A 所示，数字值基本都支持动画。不能转换为数值的关键字中一般不支持动画。参数值为数值的 CSS 函数，一般支持动画。不过 visibility 例外：虽然 visible 和 hidden 两个值之间没有中间点，但是可见与不可见之间却可以内插值。如果想插值，visibility 属性的初始值或目标值必须有一个为 visible。在过渡结束时，值将由 vsisible 变成 hidden。如果是从 hidden 过渡到 visible，在过渡开始时变化。

auto 通常应该视作不支持动画的值，最好别在动画和过渡中使用。规范规定，auto 不支持动画，但是有些浏览器把 auto（例如 height: auto）对应的数字值解释为 0px。对 height、width、top、bottom、left、right 和 margin 等属性来说，auto 值不支持动画。

有时，换个属性或值可能就行了。例如，不要从 height: 0 变到 height: auto，可以从 max-height: 0 变到 max-height: 100vh，这样一般就能得到所需的效果。在 min-height 和 min-width 属性中，auto 值支持动画，因为 min-height: auto 的计算结果为零。

<br>

## 1. 属性值是如何内插的

如果值能落在两个或多个已知值之间就能内插。可内插的值可在过渡和动画中使用。

数字以浮点数内插。整数以自然数内插，以自然数的形式递增或递减。

在 CSS 中，长度值和百分数转换为实数。如果过渡或以动画形式呈现 calc()，或者在长度值和百分数之间变化，值将转换为 calc() 函数，以实数的形式内插。

过渡的颜色，不管是 HSLA、RGB，还是具名颜色，都转换为对应的 RGBA 值，在 RGBA 色彩空间中内插。

以动画的形式改变字重时，如果用的是关键字，例如 bold，将转换为数字值，然后以 100 的倍数步进播放动画。这个行为未来可能会变，允许字重使用任何整数值。届时，内插的字重为整数，而不是 100 的倍数。

如果支持动画的属性值有多个部分，各部分单独内插。例如，text-shadow 的值有四部分：颜色、x、y 和 blur。颜色按照 color 值内插，而 x、y 和 blur 部分按长度内插。盒子投影还有两个部分：inset（可选）和 spread。spread 部分的值是长度，因此就按照长度值内插。inset 关键字无法转换为数值，可以从一个内凹阴影过渡到另一个内凹阴影，或者从一个外凸阴影过渡到另一个外凸阴影，但是不能从一个内凹阴影逐渐过渡到一个外凸阴影。

类似地，渐变也可以过渡，但是仅当两端的过渡是具有相同数量色标的同类渐变（线性或径向）。各色标的颜色以颜色值内插，色标的位置以长度值和百分数内插。

<br>

### 内插重复的值

如果属性的值为一个列表，各个值将按照相应的类型内插，前提是前后状态中列表里的值或可重复的值数目相等，而且每对值都可以内插。

```css
.img {
    background-image: url(1.gif), url(2.gif), url(3.gif), url(4.gif), url(5.gif), url(6.gif), url(7.gif), url(8.gif), url(9.gif), url(10.gif), url(11.gif), url(12.gif);
    background-size: 10px 10px, 20px 20px, 30px, 30px, 40px 40px;
    transition: background-size 1s ease-in 0s;
}

.img:hover {
    background-size: 25px 25px, 50px 50px, 75px 75px, 100px 100px;
}
```

假如我们要过渡四个背景尺寸，而列出的值单位都为像素，那么从过渡前状态中的第三个 background-size 就可以逐渐过渡到目标状态中的第三个 background-size 值。在上述示例中，鼠标悬停在图像上时，背景图 1、6 和 10 的高度和宽度将从 10px 过渡到 25px。类似地，背景图 3、7 和 11 的高度和宽度将从 30px 过渡到 75px。其他背景图以此类推。

因此，background-size 的值将重复三次，就像把 CSS 写成下面这样：

```css
.img {
    background-size: 10px 10px, 20px 20px, 30px 30px, 40px 40px,
        10px 10px, 20px 20px, 30px 30px, 40px 40px,
        10px 10px, 20px 20px, 30px 30px, 40px 40px;
}

.img:hover {
    background-size: 25px 25px, 50px 50px, 75px 75px, 100px 100px,
        25px 25px, 50px 50px, 75px 75px, 100px 100px,
        25px 25px, 50px 50px, 75px 75px, 100px 100px;
}
```

如果以逗号分隔的值数目与背景图的数量不一致，将复制，直到数目相等，即使 :hover 状态中的值与始态不一致。

```css
.img:hover {
    background-size: 33px 33px, 66px 66px, 99px 99px;
}
```

如果始态中声明四个 background-size 值，:hover 状态声明三个 background-size 值，而且都是像素值，背景图仍为 12个，那么在这两个状态之间过渡时，悬停状态和始态中的值都要复制（分别复制三次和四次），直到有 12 个值为止，好似下面这样声明一样：

```css
.img {
    background-size: 10px 10px, 20px 20px, 30px 30px,
        40px 40px, 10px 10px, 20px 20px,
        30px 30px, 40px 40px, 10px 10px,
        20px 20px, 30px 30px, 40px 40px;
}

.img:hover {
    background-size: 33px 33px, 66px 66px, 99px 99px,
        33px 33px, 66px 66px, 99px 99px,
        33px 33px, 66px 66px, 99px 99px,
        33px 33px, 66px 66px, 99px 99px;
}
```

如果有一对值无法内插，例如 background-size 从默认状态的 contain 变成悬停状态的 cover，根据规范，整个列表都不可插值。然而，有些浏览器会忽略无法插值的值对，继续以动画形式改变其他可内插的值。

有些属性值可由浏览器推出隐含的值，这些属性能以动画的形式改变。以投影为例，浏览器能推出 box-shadow: transparent 0 0 0 或 box-shadow: inset transparent 0 0 0 隐含的投影，替换前后状态中没有显示声明的值。本章的在线演示中有这样的例子。

只有可内插的值才能触发 transitionend 事件。

前面说过，visibility 属性的动画形式与其他属性不同：如果以动画的形式变成或过渡到 visible，又或者以动画的形式从 visible 变成或过渡到其他值，以单独的一步内插。在过渡或播放动画的过程中，只要时序函数的输出在 0 和 1 之间，元素就始终不可见。如果是从 hidden 过渡到 visible，在一开始切花可见状态。如果是从 visible 过渡到 hidden，在结束时切换可见状态。注意，这个行为可用步进时序函数控制。

如果不小心加入了一个无法过渡的属性，也不用担心。整个声明不会失效。浏览器将把不支持动画的属性剔除，过渡余下的属性。注意，不支持动画的属性或不存在的 CSS 属性并没有被忽略，浏览器只是跳过无法识别或不支持动画的属性，它们仍在原来的位置，以免逗号分隔的其他过渡属性应用到错误的属性上。

>只有当下不受 CSS 动画影响的属性才能过渡。如果元素有动画效果，只要属性当前不受动画控制，仍然可以过渡。CSS 动画在第 18 章介绍。

<br>

# 5. 过渡是效果增强

浏览器对过渡的支持极好。所有浏览器，包括 safari、chrome、opera、firefox、edge 和 internet explorer（从 IE10 开始），都支持 CSS 过渡。

过渡是对用户界面的效果增强。即使没有得到全面支持，也不妨碍你使用。如果某个浏览器不支持 CSS 过渡，本想以过渡效果呈现的变化仍会发生，只不过触发样式重新计算事件时，始态将瞬间过渡到终态。

用户可能会错过有趣的（也可能是恼人的）效果，但不会错过任何内容。

过渡算是一种渐进增强，因此无需为旧版 IE 浏览器打腻子脚本（polyfill）。为了支持 IE9 及之前的版本，是可以用 JavaScript 腻子脚本，在 android 4.3 之前的版本中也可以使用带前缀的过渡属性，不过这么做没多大意义。

<br>

# 6. 打印过渡

打印网页或 Web 应用时，使用的是针对印刷媒体的样式表。如果 style 元素的 media 属性只匹配 screen，那么 CSS 对打印出来的页面根本没有影响。

通常，我们不设定 media 属性。这跟设定 media="all" 一样，也就是默认值。打印有过渡效果的元素时，可能会忽略内插的值，也可能会打印当前状态下属性的值，具体取决于浏览器。

纸张上看不到元素的过渡效果，在某些浏览器中，例如 chrome，纸上打印出来的是调用 print 函数时所处的状态（前提是过渡的属性能打印出来）。如果变化的是背景色，那么前后状态中的背景色都不会打印，因为背景色一般不打印。然而，如果是文本颜色从一个值变成另一个值，，彩色打印机或 PDF 打印机将打印 color 属性的当前值。

在另一些浏览器中，例如 firefox，打印过渡开始前还是开始后的值取决于过渡是如何开始的。如果是鼠标悬停触发的，打印的是非悬停状态下的值，因为在打印对话框中操作时鼠标不可能还悬停在那个元素上。如果过渡是通过增加类触发的，打印的是过渡开始后的值，即使过渡尚未结束。打印程序就像忽略过渡属性一样。

倘若有单独的印刷样式表或针对印刷品的 @media 规则，浏览器将单独计算样式。在印刷样式中，样式没有变化，因此也就没有过渡。在打印程序看来，属性值是瞬间变化的，没有耗费一定时间的过渡效果。































































