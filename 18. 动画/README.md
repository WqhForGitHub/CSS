# 1. 定义关键帧

若想为元素添加动画效果，要有一个关键帧，而这又要求有一个具名关键帧动画。首先，要使用 @keyframes 规则定义可复用的 CSS 关键帧动画，并为动画起个名称。然后，通过这个名称把对应的动画效果应用到元素或伪元素上。

一个 @keyframes 规则有一个动画标识符（即动画的名称），以及一到多个关键帧块。每个关键帧块有一到多个关键帧选择符，声明属性及其值。整个 @keyframes 规则设置一个动画效果的完整迭代过程。动画可以迭代零次或多次，这主要取决于 animation-iteration-count 属性的值（参见 18.4.3 节）。

每个关键帧块中有一到多个关键帧选择符。关键帧选择符是动画持续时间内的时间点，可以是百分数，也可以是关键字 from 或 to。动画的一般结构如下：

```css
@keyframes animation_identifier {
    keyframe_selector {
        property: value;
        property: value;
    }
    
    keyframe_selector {
        property: value;
        property: value;
    }
}
```

下面举几个例子：

```css
@keyframes fadeout {
    from {
        opacity: 1;
    }
    
    to {
        opacity: 0;
    }
}

@keyframes color-pop {
    0% {
        color: black;
        background-color: white;
    }
    
    /* 动画的三分之一处 */
    33% {
        color: gray;
        background-color: yellow;
    }
    
    100% {
        color： white;
        background-color: orange;
    }
}
```

上述第一组关键帧把元素的 opacity 设为 1（完全不透明），然后以动画形式变成 0（完全透明）。第二组关键帧把元素的前景设为黑色、背景设为白色，然后以动画的形式把黑色前景变成灰色、再变成白色，把白色背景变成黄色、再变成橙色。

注意，关键帧没有指明动画的持续时间，这由一个专门的 CSS 属性设定。关键帧的作用是设置由这个状态变成那个状态，或者再播放动画的某个时刻呈现某个状态。鉴于此，关键帧的选择符采用百分数，或者 from 和 to。倘若在选择符中使用时间值（例如 1.5s），将导致关键帧失效。

<br>

# 2. 设置关键帧动画

创建动画的第一步是使用 @keyframes 为动画起个名称，并在一对花括号中定义关键帧。截至目前，这跟媒体查询（参见第 20 章）很像。

在一对花括号中有一系列关键帧选择符，其后有一段 CSS，声明想以动画的形式改变的属性。定义好关键帧之后，要使用 animation-name 属性把动画附加到元素上。这个属性在 18.4.1 节讨论。

先看 @ 规则声明，其后是动画的名称和一对花括号：

```css
@keyframes nameOfAnimation {}
```

<br>

## 为动画命名

为动画起的名称是一个标识符或字符串。起初，关键帧的名称必须为标识符，但是规范和浏览器也支持放在引号里的字符串。

标识符不放在引号中，而且有特定的规则。标识符可以使用的字符有 a-z、A-Z、0-9、连字符（-）、下划线（_），以及 ISO 10646 字符集中 U+00A0 及以上的字符。ISO 10646 是要给通用字符集，这意味着我们可以使用 Unicode 标准中匹配正则表达式 [ - _a-zA-Z0-9\u00A0-\u10FFFF] 的任何字符。但是，标识符不能以数字（0-9）或两个连字符开头。以一个连字符开头是可以的，但是后面跟着的不能是数字。如果非要这么做，可以使用反斜线转义数字或连字符。

动画名称中的转义字符必须使用反斜线（\）转义。例如，Q&A! 必须写成 Q\&A\!。能通过键盘输入的字符，但是字母或数字，例如 !、@、#、$，必须使用反斜线转义。

此外，别使用本章出现的关键字命名动画。比如说本章后文即将介绍的各动画属性的值，例如 none、paused、running、infinite、backwards 和 forwards。虽然规范没有明文禁止，但是在 animation 简写属性（见 18.5 节）中使用这样的名称可能导致动画效果失效。因此，尽管可以把动画命名为 paused（或其他关键字），但笔者强烈反对这么做。

<br>

# 3. 关键帧选择符

关键帧选择符指明声明的属性值应用到动画的哪个时间点，即动画播放到某个时刻希望属性为什么值。如果想设定动画开头的值，在 0% 记号处声明。如果想让属性在动画结束时变成另一个值，在 100% 记号处声明属性的值。如果想让属性在动画的三分之一处变成某个值，在 33% 记号处声明。这些记号就是关键帧选择符。

关键帧选择符可以是以逗号分隔的一组百分数，也可以是关键字 from 或 to。关键字 from 等于 0%，关键字 to 等于 100%。关键帧选择符表示目标关键帧在动画持续时间内位于百分之几的位置。关键帧由选择符后的属性值块中声明。百分数值必须带上 % 号。也就是说，0 不是有效的关键帧选择符。

```css
@keyframes W {
    from {
        left: 0;
        top: 0;
    }
    
    25%, 75% {
        top: 100%;
    }
    
    50% {
        top: 50%;
    }
    
    to {
        left: 100%;
        top: 0;
    }
}
```

这个名为 W 的 @keyframes 动画，附加到非静态定位的元素上之后，将沿着 W 形路径移动元素。W 动画有五个关键帧，分别位于 0%、25%、50%、75% 和 100% 记号处。from 就是 0%，to 就是 100%。

由于为 25% 和 75% 两个记号设置的属性是相同的，因此可以把这两个关键帧选择符写在一起，以逗号分开。这与常规的选择符是一样的，一组选择符可以使用逗号放在一起。把多个选择符写在同一行（如上例所示），还是一行写一个选择符完全由你自己决定。下述写法与前面的代码作用一样：

```css
25%,
75% {
    top: 100%;
}
```

注意，选择符无需按升序排列。在前例中，我们把 25% 和 75% 写在同一行，而 50% 记号在它们后面。为了易于辨别，强烈建议从 0% 写到 100%。然而，如这个示例中的 75% 记号所示，这不是强制要求。你可以先定义最后一个记号，最后再定义第一个记号，可以随机排列，也可以按照自己的喜好排列。

<br>

## 1. 省略 from 和 to 值

如未指定 0% 或 from 关键帧，用户代理（浏览器）将使用要应用动画效果的属性的原始值构建一个 0% 关键帧。这就跟使用没有应用动画效果时属性的值声明 0% 关键帧一样，只不过相应的属性不能受其他动画的影响（详情参见 18.4.1 节）。类似地，如果没有定义 100% 或 to 关键帧，而且没有应用其他动画，浏览器将使用没有动画效果时属性的值构建一个虚设的 100% 关键帧。

假设有个改变 background-color 的动画：

```css
@keyframes change_bgcolor {
    45% {
        background-color: green;
    }
    
    55% {
        background-color: blue;
    }
}
```

而且一开始，元素上设置了 background-color: red，那么实际应用的动画是下面这样的：

```css
@keyframes change_bgcolor {
    0% {
        background-color: red;
    }
    
    45% {
        background-color: green;
    }
    
    55% {
        background-color: blue;
    }
    
    100% {
        background-color: red;
    }
}
```

<br>

此外，我们知道，相同的关键帧可以写在一起，选择符用逗号分隔。因此，这个虚构的动画还可以写成：

```css
@keyframes change_bgcolor {
    0%,
    100% {
        background-color: red;
    }
    
    45% {
        background-color: green;
    }
    
    55% {
        background-color: blue;
    }
}
```

注意，background-color: red。声明其实不是这个关键帧动画的一部分。如果我们把元素在默认状态下的背景色设为黄色，那么 0% 和 100% 记号处的背景将是黄色的，在播放动画的过程中，背景色先由黄色变成绿色。再变成蓝色，最后又变回黄色：

```css
@keyframes change_bgcolor {
    0%,
    100% {
        background-color: yellow;
    }
    
    45% {
        background-color: green;
    }
    
    55% {
        background-color: blue;
    }
}
```

change-bgcolor 动画可以附加到很多元素上，而具体的动画过程根据无动画状态下元素的 background-color 属性值而有所不同。

目前，我们一直使用整数百分数，其实非整数，例如 33.33% 也是完全有效的。负的百分数、超过 100% 的值、非百分数，以及 to 和 from 之外的关键字是无效的，将被忽略。

<br>

## 2. 重复关键帧属性

在 webkit 最初实现的实验性动画中（使用 -webkit- 前缀），每个关键帧只能声明一次，如果多次声明，只有最后一个声明起作用，之前的关键帧选择符块被忽略。现在则不然。如今，与 CSS 中的其他机制一样，具有相同值的关键帧将层叠。在标准的句法中（不用前缀），前述 W 动画可以声明两次 to 或 100%，left 属性的值将被覆盖：

```css
@keyframes W {
    from, to {
        top: 0;
        left: 0;
    }
    
    25%, 75% {
        top: 100%;
    }
    
    50% {
        top: 50%;
    }
    
    to {
        left: 100%;
    }
}
```

注意，第一个关键帧选择符中既有 from、也有 to。因此，那个选择符块会为 to 关键帧设定 top 和 left。而后，to 关键帧的 left 值在最后一个关键帧块中被覆盖。

<br>

## 3. 支持动画的属性

特别注意，不是所有属性都支持动画。在动画的关键帧中列出的不支持动画的属性，直接被忽略（同理，浏览器无法识别的属性和值也将被忽略）。

附录 A 完整列出了支持动画的属性。本书在介绍各属性时也标出了是否支持动画。

>18.4.7 节讨论的 animation-timing-function 属性虽然不支持动画，但是不会被忽略。如果关键帧选择符块中有 animation-timing-function 声明，所在块中的属性在变成下一个关键帧的过程中将使用 animation-timing-function 设定的时序函数。

如果两个属性值没有中间点，得到的动画效果可能与预期不符，可能无法正确以动画形式呈现，或者根本没有动画效果。例如，不应该让元素的高度在 height: auto 和 height: 300px 之间以动画形式变化，因为 auto 和 300px 之间没有中间点。动画效果可能还有，但是不同浏览器的处理方式不同：firefox 不渲染动画。如果 auto 等同于 0，safari 会渲染动画。目前，opera 和 chrome 直接跳到动画前后状态之间一半的位置，这可能并不是 50% 关键帧选择符，具体情况视 animation-timing-function 的值而定。也就是说，在没有中间点这个问题上，不同的浏览器对不同的属性有不同的处理方式，无法保证一定能得到预期的结果。

为每个属性都声明位于 0% 和 100% 位置上的值基本上能得到符合预期的动画效果。

<br>

例如，如果声明了 border-radius: 50%。最好也声明 border-radius: 0。因为 border-radius 的默认值是 none，不是 0，而 none 和其他值之间没有中间点。请比较下面两个动画：

```css
@keyframes round {
    100% {
        border-radius: 50%;
    }
}

@keyframes square_to_round {
    0% {
        border-radius: 0%;
    }
    
    100% {
        border-radius: 50%;
    }
}
```

round 动画在设定的持续时间内从元素原本的 border-radius 值变成 border-radius: 50%，square_to_round 动画在设定的持续时间内从 border-radius: 0% 变成 border-radius: 50%。如果元素一开始是直角，那这两个动画的效果完全一样。但是，如果元素起初就有圆角，那么 square_to_round 动画在开始播放之前将瞬间把元素变成直角。这可能与你预期的不一样。有时，可以省略 from 或 to 关键帧，利用元素未应用动画效果之前的属性值。

解决这个问题最好的方法是不用 square_to_round 动画，而用 round 动画，并且保证元素自身显式设定了 border-radius。

只要至少有一个块中有一个支持动画的属性，而且其值与未应用动画效果之间的值不同，并且两个值之间有中间点，那个属性的变化就能以动画形式呈现。

<br>

## 4. 不支持动画但不被忽略的属性

上述中间点规则有两个例外：visibility 和 animation-timing-function。

虽然 visibility: hidden 和 visibility: visible 之间没有中间点，但是 visibility 属性支持动画。从 hidden 变成 visible 时，可见性的值从一个值直接跳到发生变化的下一个关键帧。

尽管 animation-timing-function 属性不支持动画，但是如果在关键帧块中声明了，所在块中的属性值将使用它设定的时序函数。动画时序的变化不以动画形式呈现，而是直接变成新值，并且只在转到下一个关键帧时起作用（详情参见 18.4.7 节）。

<br>

## 5. 通过脚本编辑 @keyframes 动画

关键帧规则在出现的那一刻还会应用可以通过 API 查找、追加和删除。@keyframes 动画中声明的关键帧块可以使用 appendRule(n) 或 deleteRule(n) 修改，其中 n 是关键帧的完整选择符。关键帧的内容可通过 findRule(n) 获取。

```css
@keyframes W {
    from, to {
        top: 0;
        left: 0;
    }
    
    25%, 75% {
        top: 100%;
    }
    
    50% {
        top: 50%;
    }
    
    to {
        left: 100%;
    }
}
```

appendRule()、deleteRule() 和 findRule() 三个方法的参数都是完整的关键帧选择符。以 W 动画为例，如果想获取 25% / 75% 关键帧的内容，传入的参数为 25%，75%：

```javascript
// 获取指定关键帧的选择符和内容
var aRule = myAnimation.fineRule("25%", "75%").cssText;

// 删除 50% 关键帧
myAnimation.deleteRule("50%");

// 在动画末尾添加 53% 关键帧
myAnimation.appendRule("53% { top: 50% }");
```

在 myAnimation.findRule("25%, 75%").cssText。语句中，myAnimation 是一个关键帧动画的名称，返回的结果是匹配 25%，75% 的关键帧。如果只有 25% 或 75% 关键帧，匹配不到任何关键帧。如果用的是 W 动画，这个语句返回 25%, 75% { top: 100% }。

类似地，myAnimation.deleteRule("50%") 将删除最后一个 50% 关键帧。因此，如果有多个 50% 关键帧，排在最后的那个将被删除。反过来，myAnimation.appendRule("53% { top: 50% }") 将在 @keyframes 块中最后一个关键帧的后面追加 53% 关键帧。

动画有三个事件，animationstart、animationend 和 animationiteration，分别在动画的开头和结尾，以及一次迭代结束与下一次迭代开始之间触发。只要动画中定义的关键帧规则有效，就会触发 animationstart 和 animationend 事件，即使关键帧规则为空也是如此。animationitertaion 事件仅在动画由多次迭代时才会触发，因为 animationiteration 不能与 animationend 事件同时触发。

<br>

# 4. 把动画应用到元素上

定义好关键帧动画便可以把动画应用到元素和伪元素上。为了把动画附加到元素上，并控制动画的播放过程，CSS 提供了多个相关的属性。若想保证动画效果能显示出来，至少要指明动画的名称，以及持续时间（不然动画瞬间就结束了）。

在元素上声明动画属性的方式有两种：一种是单独声明各个属性，另一种是使用 animation 简写属性一次性声明全部属性（抑或二者结合）。我们先来学习各个单独的属性，然后再介绍如何把全部声明浓缩在 animation 简写属性中。

下面逐一介绍各个单独的属性。

## 1. 指定动画的名称

animation-name 属性的值为一个逗号分隔的列表，指定想应用的关键帧动画的名称。这里所说的名称是指使用 @keyframes 规则定义动画时设定的无引号标识符或有引号的字符串（抑或二者混用）。

```css
animation-name

取值：[ <single-animation-name> | none ]#
初始值：none
适用于：所有元素，以及 ::before 和 ::after 伪元素
计算值：指定的值
继承性：否
动画性：否
```

默认值为 none，表示没有动画效果。根据 CSS 层叠机制，可以使用 none 值覆盖其他地方应用的动画（这也是不建议使用 none 命名动画的原因，除非你疯了）。如果想应用动画，把值设为 @keyframes 的标识符，即动画的名称。

下述示例使用 18.3.1 节定义的 change_bgcolor 关键帧动画：

```css
div {
    animation-name: change_bgcolor;
}
```

这个规则把 change_bgcolor 动画应用到所有 div 元素上。

如果想应用多个动画，以逗号分开多个 @keyframes 标识符：

```css
div {
    animation-name: change_bgcolor, round, W;
}
```

如果指定的一系列关键帧标识符中有一个不存在，不会导致所有动画都无法应用，只是那个不存在的动画被忽略，其他有效的动画仍将应用。被忽略后，如果后来又通过某种方式变成有效的动画了，在变有效的那一刻又会开始应用。请看下面的代码：

```css
div {
    animation-name: change_bgcolor, spin, round, W;
}
```

在这个示例中，假设没有定义 spin 关键帧动画。spin 动画不会应用，但是 change_bgcolor、round 和 W 将应用。如果通过脚本编程添加了名为 spin 的关键帧动画，在它出现的那一刻将应用到元素上。

为了应用多个动画，我们在 animation-name 属性的值中设定了多个以逗号分隔的关键帧动画标识符。如果这些动画中有重复的属性，后面的动画将覆盖前面动画中相同属性的值。例如，如果同时在两个关键帧动画中改变元素的背景色，后列出的动画将覆盖先列出的动画中设定的背景，不过前提是属性（这里指的是背景色）是同时以动画形式变化的。详细说明参见 18.6 节。

例如有如下代码，假设各动画持续 10 秒钟：

```css
div {
    animation-name: change_bgcolor, bg-shift;
}

@keyframes bg-shift {
    0%, 100% {
        background-color: blue;
    }
    
    35% {
        background-color: orange;
    }
    
    55% {
        background-color: red;
    }
    
    65% {
        background-color: purple;
    }
}

@keyframes change_bgcolor {
    0%, 100% {
        background-color: yellow;
    }
    
    45% {
        background-color: green;
    }
    
    55% {
        background-color: blue;
    }
}
```

这里，元素的背景将由蓝色变为橙色，再变成红色，然后变成紫色，最后又变回蓝色，这个变化过程由 bg-shift 动画设置。因为它在后面列出，所以它定义的关键帧优先级更高。为相同的属性设置的多个动画在同一时刻播放，起作用的是在 animation-name 属性的值中后列出的动画。

<br>

省略 from（0%）或 to（100%）关键帧的动画有些特殊。例如，我们把 bg-shift 中定义的第一个关键帧删掉：

```css
div {
    animation-name: change_bgcolor, bg-shift;
}

@keyframes bg-shift {
    35% {
        background-color: orange;
    }
    
    55% {
        background-color: red;
    }
    
    65% {
        background-color: purple;
    }
}

@keyframes change_bgcolor {
    0%, 100% {
        background-color: yellow;
    }
    
    45% {
        background-color: green;
    }
    
    55% {
        background-color: blue;
    }
}
```

现在，bg-shift 动画没有定义首尾两个关键帧的背景色。遇到没有定义 0% 或 100% 关键帧的情况，用户代理会使用相应属性的计算值构建 0%/100% 关键帧。使用的计算值可能是未应用动画效果时属性的值，也可能是 animation-name 列出的前一个动画中的属性值。

较旧的浏览器采用前一种方式，但是后者规范做了调整，选择了后一种方式。从 2017 年年末开始，较新的浏览器在动画的前 3.5 秒从黄色变成橙色，后 3.5 秒从紫色变成蓝色。较旧的浏览器在动画开始和结束时将显示透明背景。

仅当不同的关键帧块在同一时刻改变相同属性的值时才需要考虑这些。这里，同时改变的是 background-color。倘若一个关键帧块改变的是 background-color，而另一个改变的是 padding，那么这两个动画就没有冲突，背景色和内边距将同时改变。

只把动画应用到元素上还不足让动画呈现出来，动画虽然能播放，但是瞬间就结束。此时，关键帧中的属性都会经历变化，而且 animationstart 和 animationend   事件也会触发。若想看到动画效果，至少要让动画持续一定的时间。而这由 animation-duration 属性设定。

<br>

## 2. 定义动画的时长

animation-duration 属性定义动画迭代一次用时多久，单位为秒（s）或毫秒（ms）。

```css
animation-duration

取值：<time>#
初始值：0s
适用于：所有元素，以及 ::before 和 ::after 伪元素
计算值：指定的值
继承性：否
动画性：否
```

animation-duration 属性定义动画中全部关键帧完成一次循环所用的时间长度，单位为秒（s）或毫秒（ms）。如果不声明 animation-duration，动画仍将播放，只不过持续时间为 0s，看不到实际效果，而且 animationstart 和 animationend 事件也会触发。这个属性的值不能为负数。

指定持续时间时，必须带上单位，即秒（s）或毫秒（ms）。如果有多个动画，可以分别为各个动画设定持续时间，值之间以逗号分隔：

```css
div {
    animation-name: change_bgcolor, round, W;
    animation-duration: 200ms, 100ms, 0.5s;
}
```

如果一组以逗号分隔的持续时间中有无效的值，例如 animation-duration: 200ms, 0, 0.5s，整个声明都失效，相当于声明 animation-duration: 0s。0 不是有效的时间值。

一般来说，animation-name 有多少个值，animation-duration 就应该有多少个值。如果只提供一个持续时间，所有动画都播放那么长的时间。假如 animation-duration 的值比 animation-name 的值少，也不会导致什么问题，缺少的值将成组复制。因此，对下述规则来说：

```css
div {
    animation-name: change_bgcolor, spin, round, W;
    animation-duration: 200ms, 5s;
    /* 等效于 '200ms, 5s, 200ms, 5s' */
}
```

round 动画将持续 200ms，W 动画将持续 5s。

如果 animation-duration 的值比 animation-name 的值多，多出的值将被忽略。如果列出的动画不存在，animation-name 和 animation-duration 声明不会失效，不存在的动画及其持续时间将被忽略：

```css
div {
    animation-name: change_bgcolor, spinner, round, W;
    animation-duration: 200ms, 5s, 100ms, 0.5s;
}
```

在这个示例中，持续时间 5s 对应于 spinner。可是，spinner 动画就不存在，因此 5s 和 spinner 都被忽略。如果后来 spinner 动画又出现了，它会应用到 div 元素上，而且持续时间为 5 秒。

<br>

## 3. 声明动画的迭代次数

只声明必须的 animation-name 属性，动画将播放一次，而且只播放一次。如果希望迭代的次数不是默认的一次，使用 animation-iteration-count 属性设定。

```css
animation-iteration-count

取值：[ <number> | infinite ]#
初始值：1
适用于：所有元素，以及 ::before 和 ::after 伪元素
计算值：指定的值
继承性：否
动画性：否
```

默认情况下，动画播放一次（因为默认值是 1）。如果给 animation-iteration-count 属性提供其他值，可以是任何数字或关键字 infinite，而且 animation-delay 属性的值中没有负值，动画将重复指定的次数。

下述声明分别让动画重复 2次、5次和 13次：

```css
animation-iteration-count: 2;
animation-iteration-count: 5;
animation-iteration-count: 13;
```

如果 animation-iteration-count 的值不是整数，动画将在最后一次循环的中途结束。动画仍将播放，只是在最后一次迭代时中途停止。例如，animation-iteration-count: 0.25 迭代 1.25 次，在第二次迭代的 25% 处中断。如果值为 0.25，动画持续 8 秒，动画只播放 25%，即 2 秒后停止。

不允许设为负值。如果提供的值无效，将重置为默认值 1，只迭代一次。

有趣的是，0 是 animation-iteration-count 属性的有效值。设为 0 时，动画依然播放，只不过迭代零次。与 animation-duration: 0s 类似，这也会触发 animationstart 和 animationend 事件。

如果把多个动画附加到一个元素或伪元素上，animation-name、animation-duration 和 animation-iteration-count 的值都是一个以逗号分隔的列表：

```css
.flag {
    animation-name: red, white, blue;
    animation-duration: 2s, 4s, 6s;
    animation-iteration-count: 3, 5;
}
```

那么，animation-iteration-count（以及其他动画属性）的值将按照 animation-name 属性的值按顺序分配。多出的值将被忽略。缺少的值（例如上述中的 animation-iteration-count）根据现有的值重复。

在上述示例中，名称的数量比次数值多，因此次数值将重复：red 和 blue 动画迭代三次，white 动画迭代五次。持续时间的数量与名称的数量相等，因此持续时间值不重复。red 动画持续两秒，迭代三次，因此共计用时六秒。white 动画持续四秒，迭代五次，共计用时 20 秒。blue 动画每次迭代用时六秒，迭代三次，整个动画效果共计用时 18 秒。

无效的值将导致整个声明失效，受影响的动画只播放一次。

虽然这三个动画持续时间不同，但是如果想让它们同时结束，可以通过 animation-iteration-count 属性控制：

```css
.flag {
    animation-name: red, white, blue;
    animation-duration: 2s, 4s, 6s;
    animation-iteration-count: 6, 3, 2;
}
```

在这个示例中，red、white 和 blue 都共计用时 12 秒，因为持续时间与迭代次数的乘积都等于 12 秒。

<br>

## 4. 设置动画的播放方向

使用 animation-direction 属性可以控制动画是从 0% 关键帧向 100% 关键帧播放，还是从 100% 关键帧向 0% 关键帧播放。可以让所有迭代都按照相同的方向播放，也可以隔一个循环变换一次方向。

```css
animation-direction

取值：[ normal | reverse | alternate | alternate-reverse ]#
初始值：normal
适用于：所有元素，以及 ::before 和 ::after 伪元素
计算值：指定的值
继承性：否
动画性：否
```

animation-direction 属性定义按什么方向播放动画的关键帧。可取的值有四个：

animation-direction: normal

设为 normal 时（或者省略，默认为 normal），动画的每次迭代都从 0% 关键帧向 100% 关键帧播放。

animation-direction: reverse

reverse 值逆序播放各次迭代，即从 100% 关键帧向 0% 关键帧播放。逆转动画的方向也就逆转了 animation-timing-function（参见 18.4.7 节）。

animation-direction: alternate

alternate 值的意思是第一次迭代（以及后续各奇数次迭代）从 0% 向 100% 播放，第二次迭代（以及后续各偶数次迭代）方向相反，从 100% 向 0% 播放。

animation-direction: alternate-reverse

alternate-reverse 值与 alternate 值类似，只不过是反过来的。第一次迭代（以及后续各奇数次迭代）从 100% 向 0% 播放，第二次迭代（以及后续各偶数次迭代）方向相反，从 0% 向 100% 播放。

```css
.ball {
    animation-name: bouncing;
    animation-duration: 400ms;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
}

@keyframes bouncing {
    from {
        transform: translateY(500px);
    }
    
    to {
        transform: translateY(0);
    }
}
```

这是个弹跳球动画，但是我们想在动画开始时让球下落，而不是抛向空中：即先下后上，而不是先上后下。因此，最符合需求的值在 animation-direction: alternate-reverse。

这是让球跳动的一种基本方式。球在弹跳的过程中，到达顶点时速度最慢，到达最低点时速度最快。举这个例子是为了说明 alternate-reverse 动画的方向。后文还将改进这个动画，加上时序，让弹跳过程更贴近实际（参见 18.4.7 节）。届时还将讨论逆向迭代时 animation-timing-function 是如何逆转的。

<br>

## 5. 延迟播放动画

animation-delay 属性定义浏览器把动画附加到元素上之后等待多久开始第一次迭代。

```css
animation-delay

取值：<time>#
初始值：0s
适用于：所有元素，以及 ::before 和 ::after 伪元素
计算值：指定的值
继承性：否
动画性：否
```

animation-delay 属性设定把动画附加到元素上之后隔多久开始播放动画，单位为秒（s）或毫秒（ms）。

默认情况下，动画附加到元素上之后立即开始迭代，没有延迟。正值延迟播放动画，当 animation-delay 属性的值中列出的时间过去之后才开始。如果设为负值，动画立即开始播放，不过是从动画的中途开始。

把 animation-delay 设为负值能实现一些有趣的效果。负的延迟致使动画立即开始播放，但是却从动画的中途开始。例如，在元素上声明了 animation-delay: -4s 和 animation-duration: 10s，元素大概将从整个动画的 40% 处立即开始播放。并在六秒后结束。

这里用了大概这个词，因为动画不一定正好从 40% 关键帧开始播放，动画的 40% 记号何时开始取决于 animation-timing-function 属性的值。如果声明的是 animation-timing-function: linear，那么就动画的 40% 处开始播放。

```css
div {
    animation-name: move;
    animation-duration: 10s;
    animation-delay: -4s;
    animation-timing-function: linear;
}

@keyframes move {
    from {
        transform: translateX(0);
    }
    
    to {
        transform: translateX(1000px);
    }
}
```

































