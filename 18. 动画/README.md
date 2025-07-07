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

这个线性动画示例持续 10 秒，延迟 -4 秒。因此，动画将从动画的 40% 处立即开始播放，在 6 秒的时间内把 div 元素向原位置的右侧平移 400 像素。

如果设置动画循环 10 次，延迟为 -600 毫秒，而持续时间为 200 毫秒，那么元素将从第四次迭代的开头立即开始播放动画：

```css
.ball {
    animation-name: bounce;
    animation-duration: 200ms;
    aniation-delay: -600ms;
    animation-iteration-count: 10;
    animation-timing-function: ease-in;
    animation-direction: alternate;
}

@keyframes bounce {
    form {
        transform: translateY(0);
    }
    
    to {
        transform: translateY(500px);
    }
}
```

这个动画共计用时不是 2000 毫秒（200ms ⨉ 10 = 2000ms，即 2 秒），也不是以常规方向开始的，而是从第四次迭代的开头以反方向立即开始，共计用时 1400 毫秒（1.4 秒）。

这个动画以反方向开始的原因是 animation-direction 的值为 alternate，即偶数次迭代的方向是反的，从 100% 关键字向 0% 关键帧播放。第四次迭代（偶数次迭代）是第一个可见的迭代。

这个动画将立即触发 animationstart 事件。animationend 事件将在 1400 毫秒之后触发。小球是被跑起的，而不是弹回的，在 200 毫秒、400 毫秒、600 毫秒、800 毫秒、1000 毫秒和1200 毫秒之后共 6 次触发 animationiteration 事件。虽然我们把迭代次数设为 10，但是只触发了 6 次 animationitertaion 事件，这是因为只迭代了 7 次。缺少 3 次迭代的原因是 animation-delay 为负值，而且最后一次迭代与 animationend 事件同时结束。注意，如果 animationiteration 事件与 animatinend 事件同时触发，animationiteration 事件不会发生。

继续讨论之前，先深入了解一下动画事件。

<br>

## 6. 动画事件

与动画有关的事件有三个：animationstart、animationiteration 和 animationend。每个事件都有三个只读属性：animationName、elapsedTime 和 pseudoElement，在所有浏览器中都无需使用前缀。

animationstart 事件在动画开始播放时触发。如有延迟，等 animation-delay 设定的时间过后触发。否则，立即触发。如果 animation-delay 为负值，animationstart 事件立即触发，在支持 elapsedTime 的浏览器中，它的值等于延迟的绝对值。而在仍需使用前缀的浏览器中，elapsedTime 等于 0。

```css
.noAnimationEnd {
    animation-name: myAnimation;
    animation-duration: 1s;
    animation-itertaion-count: infinite;
}

.startAndEndSimultanceously {
    animation-name: myAnimation;
    animation-duration: 0s;
    animation-iteration-count: infinite;
}
```

animationend 事件在动画播放结束时触发。如果把 animation-iteration-count 的值设为 infinite，而且 animation-duration 设定的时间大于 0，animationend 事件永不触发。如果把 animation-duration 设为零秒，或者缺省为零秒，就算迭代无数次，animationstart 和 animationend 事件基本上同时触发，而且按此顺序。

animationiteration 事件在两次迭代之间触发。迭代结束后动画也结束的话，触发 animationend 事件。animationiteration 和 animationend 事件不会同时触发。

```css
.noAnimationIteration {
    animation-name: myAnimation;
    animation-duration: 1s;
    animation-iteration-count: 1;
}
```

在 .noAnimationIteration 示例中，animation-iteration-count 的值为 1，因此迭代第一次也是唯一一次之后动画就结束。不论何时，只要 animationiteration 和 animationend 事件可能同时触发，只有 animationend 事件会真的触发，而 animationiteration 事件不触发。迭代结束后，如果没有新的迭代开始，就不触发 animationiteration 事件。

如果没有声明 animation-iteration-count 属性，或者把值设为 1 或更小的值，不触发 animationiteration 事件。只要一次迭代（即便不是完整的迭代）结束后又开始一次迭代，而且新迭代的持续时间大于 0s，animationiteration 事件就会触发。

```css
.noAnimationIteration {
    animation-name: myAnimation;
    animation-duration: 1s;
    animation-iteration-count: 4;
    animation0-delay: -3s;
}
```

如果由于 animation-delay 为负值而导致动画的迭代次数比 animation-iteration-count 设定的次数少，没有迭代的循环不触发 animationiteration 事件。在上述示例代码中，一次 animationiteration 事件也不触发，因为前三次循环没有迭代（由于 animation-delay 的值为 -3s），而最后一次循环结束后整个动画也就结束了。

在这个示例中，animationstart 事件的 elapsedTime 属性值为 3，即延迟的绝对值。

<br>

### 动画链

我们可以利用 animation-delay 属性把多个动画串在一次，让下一个动画在前一个动画结束后立即开始：

```css
.rainbow {
    animation-name: red, orange, yellow, blue, green;
    animation-duration: 1s, 3s, 5s, 7s, 11s;
    animation-delay: 3s, 4s, 7s, 12s, 19s;
}
```

在这个示例中，red 动画延迟三秒、持续一秒，因此 animationed 事件在四秒后触发。后续各动画都在前一个动画结束后开始。我们称这样的效果为 CSS 动画链。

因为第二个动画的延迟为四秒，所以 orange 动画将在第四秒开始内插 @keyframes 属性值，即 red 动画结束后立即开始。orange 动画持续三秒、延迟四秒，在第七秒结束。第三个动画（yellow）的延迟就是七秒，因而它将在 yellow 动画结束后立即开始。

这个示例在同一个元素上应用动画链。除此之外，还可以使用 animation-delay 属性在不同的元素上应用动画链：

```css
li:first-of-type {
    animation-name: red;
    animation-duration: 1s;
    animation-delay: 3s;
}

li:nth-of-type(2) {
    animation-name: orange;
    animation-duration: 3s;
    animation-delay: 4s;
}

li:nth-of-type(3) {
    animation-name: yellow;
    animation-duration: 5s;
    animation-delay: 7s;
}

li:nth-of-type(4) {
    animation-name: green;
    animation-duration: 7s;
    animation-delay: 12s;
}

li:nth-of-type(5) {
    animation-name: blue;
    animation-duration: 11s;
    animation-delay: 19s;
}
```

如果想让一组列表元素按顺序播放动画，把多个动画衔接在一起，各列表元素的 animation-delay 值要等于前一个动画的 animation-duration 和 animation-delay 值之和。

虽然可以使用 JavaScript 通过 animationend 事件判断何时附加后续动画（参见下文），不过使用 CSS 动画属性（animation-delay）把动画衔接在一起更合适。请注意一点，动画在 UI 线程中的优先级最低。因此，如果运行的脚本占用了用户界面（UI）线程，特定的浏览器在处理有动画效果的特定属性和值时将忽略延迟，等到 UI 线程空闲时才开始播放更多的动画。

>动画的性能
>
>有些（不是全部）动画在所有浏览器中都在 UI 线程中播放。在多数浏览器中，不透明度或变形动画由 GPU（Graphics Processing Unit，图形处理器）执行，而不是 CPU（Central Processing Unit，中央处理器），因此无需等到 UI 线程空闲下来。如果这些属性不是动画的一部分，UI 线程不可用会导致视觉效果卡顿：
>
>
>
>/* 不要这样做 */
>
>```css
>* {
>    transform: translatZ(0);
>}
>```
>
>在支持 3D 变形（参见第 16 章）的设备和浏览器中，把元素放入 3D 空间后，元素位于单独的层中，动画效果没有卡顿。鉴于此，人们经常使用前面建议不要使用的 translateZ 技巧。使用这个技巧把少数几个元素放在单独的层中是没问题的，不过有些设备的视频内存是有限的。每个单独的层都要消耗视频内存，而且要花时间从 UI 线程中移到 GPU 中合成的层里。因此创建的层越多，性能损耗越大。
>
>为了提升性能，只要可能，就应该把 transform 和 opacity 放到动画中，而 top、left、bottom、right 和 visibility 则不要这么做。把 CPU 的消耗交给 GPU 不仅能提升性能，如果修改盒模型属性的话，浏览器要重排并重绘，这对性能也不利。不要一股脑把一切都交给 GPU，否则你会遇到新的性能问题。

如果想使用 JavaScript，还可以通过监听 animationend 事件启动后续动画，从而实现动画链：

```html
<script>
    document.querySelectorAll("li")[0].addEventListener("animationend", function(e) {
        document.querySelectorAll("li")[1].style.animationName = "orange";
    }, false);
    
    document.querySelectorAll("li")[1].addEventListener("animationend", function(e) {
        document,querySelectorAll("li")[2].style.animationName = "yellow";
    }, false);
    
    document.querySelectorAll("li")[2].addEventListener("animationend", function(e) {
        document.querySelectorAll("li")[3].style.animationName = "green";
    }, false);
    
    document.querySelectorAll("li")[3].addEventListener("animationend", function(e) {
        document.querySelectorAll("li")[4].style.animationName = "blue";
    }, false);
</script>

<style>
    li:first-of-type {
        animation-name: red;8
        animation-duration: 1s;
    }
    
    li:nth-of-type(2) {
        animation-duration: 3s;
    }
    
    li:nth-of-type(3) {
        animation-duration: 5s;
    }
    
    li:nth-of-type(4) {
        animation-duration: 7s;
    }
    
    li:nth-of-type(5) {
        animation-duration: 11s;
    }
</style>
```

在这个示例中，我们为前四个列表项目分别定义了一个事件处理程序，监听相应列表项目的 animationend 事件。触发 animationend 事件时，事件监听器程序会为后一个列表项目添加一个 animation-name 声明。

从上述样式可以看到，这个动画链根本没使用 animation-delay。这里采用的做法是，通过 JavaScript 事件监听器在触发 animationend 事件时设置 animation-name 属性，从而把动画附加到相应的元素上。

注意，只有第一个列表项目的样式中有 animation-name 声明。其他列表项目的样式中只有 animation-duration 声明，而没有 animation-name 声明，因此也就没有附加动画。添加 animation-name 声明的目的就是附加并启动动画。如果想启动或重启动画，必须先把动画名称删除，然后再加回来，就在这一刻，所有动画属性，包括 animation-delay，都将生效。

其实，下述代码：

```html
<script>
    document.querySelectorAll("li")[2].addEventListener("animationend", function(e) {
        document.querySelectorAll("li")[3].style.animationName = "green";
    }, false);
    
    document.querySelectorAll("li")[3].addEventListener("animationend", function(e) {
        document.querySelectorAll("li")[4].style.animationName = "blue";
    }, false);
</script>

<style>
    li:nth-of-type(4) {
        animation-duration: 7s;
    }
    
    li:nth-of-type(5) {
        animation-duration: 11s;
    }
</style>
```

还可以写成：

```html
<script>
    document.querySelectorAll("li")[2].addEventListener("animationend", function(e) {
        document.querySelectorAll("li")[3].style.animationName = "green";
        document.querySelectorAll("li")[4].style.animationName = "blue";
    }, false);
</script>

<style>
    li:nth-of-type(4) {
        animation-duration: 7s;
    }
    
    li:nth-of-type(5) {
        animation-delay: 7s;
        animation-duration: 11s;
    }
</style>
```

我们在同一时间添加 green 和 blue 两个动画名称，此时第五个元素的延迟将起作用，开始计时。

>在播放动画的过程中改变动画属性的值（而不是名称）对动画没有影响，但是删除或增加 animation-name 声明却有影响。例如，在动画的中途不能把持续时间由 100ms 改成 400ms，延迟一旦开始计时也不能把 -200ms 改成 5s。然而，把动画删除然后再附加到元素上，可以停止再重新开始播放动画。在上述 JavaScript 示例中，为了开始播放动画，我们把动画应用到元素上。
>此外，在元素上设置 display: none 将终止动画。把 display 改成导致元素可见的值，动画将从头开始播放。如果 animation-delay 是正值。延迟必须在 animationstart 时间触发之前结束，而且要在其他动画开始播放之前。如果延迟是负值，动画将从迭代的中途开始，这与通过其他方式应用动画是完全一样。

<br>

### 延迟动画中的迭代

虽然没有 animation-iteration-delay 这样的属性，但是我们可以利用 animation-delay 属性，以及关键帧声明造成的延迟，或者使用 JavaScript 伪造。使用哪种方法最好，取决于迭代的次数、性能，以及延迟的时长是否都相等。

延迟动画中的迭代是什么意思？有时，我们想多次播放动画，并且想在两次迭代之间加上一定的等待时间。

假设我们想增大元素三次，但是在每次用时一秒的迭代之间等待四秒。为此，可以在关键帧定义中声明延迟，然后迭代三次：

```css
.animation3times {
    background-color: red;
    animation: color_and_scale_after_delay;
    animation-iteration-count: 3;
    animation-duration: 5s;
}

@keyframes color_and_scale_after_delay {
    80% {
        transform: scale(1);
        background-color: red;
    }
    
    80.1% {
        background-color: green;
        transform: scale(0.5);
    }
    
    100% {
        background-color: yellow;
        transform: scale(1.5);
    }
}
```

注意，第一个关键帧的选择符是 80%，而且块中声明的属性与默认状态是一致的。这个动画将播放三次，前 80% 的时间（持续 5 秒，因此是 4 秒）保持默认状态，在最后一秒由绿色变成黄色，尺寸由小变大，然后开始下一次迭代，三次迭代后停止。

这个方法适用于迭代任何次数的动画。然而，仅当每两次迭代之间的延迟都相等，而且不想以其他时序（例如延迟六秒）播放动画时，这才是一种好的方法。如果想让每两次迭代之间的延迟有变化，但不想改变尺寸和颜色变化持续的时间，要新定义一个 @keyframes 规则。

若想在迭代之间添加不同的延迟，可以创建一个动画，然后精心设置，实现三种不同的延迟：

```css
.animate3times {
    background-color: red;
    animation: color_and_scale_3_times;
    animation-iteration-count: 1;
    animation-duration: 15s;
}

@keyframes color_and_scale_3_times {
    0%, 13.32%, 20.01, 40%, 60%, 46.67%, 93.32% {
        transform: scale(1);
        background-color: red;
    }
    
    13.33%, 40.01%, 93.33% {
        background-color: green;
        transform: scale(0.5);
    }
    
    20%, 46.66%, 100% {
        background-color: yellow;
        transform: scale(1.5);
    }
}
```

这个方法所用的代码不易写出，难以维护。而且只适用于单次循环的动画。如果想改变动画的迭代次数和迭代之间的延迟，要重新定义一个 @keyframes 规则。这个示例还没有前一个稳固，不过却在迭代之间添加了不同的延迟。

有一种方法适用于多数浏览器，而且动画规范也提到了：多次应用同一个动画，每次设置不同的 animation-delay 值。

```css
.animate3times {
    animation: color_and_scale, color_and_scale, color_and_scale;
    animation-delay: 0, 4s, 10s;
    animation-duration: 1s;
}

@keyframes color_and_scale {
    0% {
        background-color: green;
        transform: scale(0.5);
    }
    
    100% {
        background-color: yellow;
        transform: scale(1.5);
    }
}
```

这里，同一个动画附加了三次，每一次的延迟都不同。这样每次动画迭代结束后才开始播放下一个。

如果同时播放的动画有重叠，使用的属性值来自最后一个声明的动画。有多个动画在同一时间改变相同的属性时也是如此，在动画名称列表中后列出的动画将覆盖之前动画中的相同顺序ing。这里我们附加三次 color_and_scale 动画，但是延迟不同，color_and_scale 动画最后一次迭代将覆盖之前尚未结束的迭代所用的属性值。

模拟 animation-iteration-delay 属性最安全、最可靠，也是跨浏览器支持情况最好的方法是使用动画事件。触发 animationend 事件时，从元素上拆离动画，等到迭代延迟结束后再重新附加。如果迭代之间的延迟都相等，可以使用 setInterval。如果不同，使用 setTimeout。

```javascript
var iteration = 0;
var el = document.getElementById("myElement");

el.addEventListener("animationend", function(e) {
    var time = ++iteration * 1000;
    
    el.classList.remove("animationClass");
    
    setTimeout(function() {
        el.classList.add("animationClass");
    }, time);
});
```

这个示例无限次播放 myElement 元素上的动画，每迭代一次增加一秒延迟。

<br>

## 7. 改变动画的内部时序

好了，编写脚本是很好玩，不过我们还是回到纯 CSS 上。下面讨论时序函数。与 transition-timing-function 属性类似，animation-timing-function 属性指明动画在一次循环（或迭代）中如何演进。

```css
animation-timing-function

取值：[ ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps(<integer>, start) | steps(<integer>, end) | cubic-bezier(<number>, <number>, <number>, <number>) ]#
初始值：ease
适用于：所有元素，以及 ::before 和 ::after 伪元素
计算值：指定的值
继承性：否
动画性：否
```

除步进时序函数之外（参见步进时序函数一节）的其他时序函数都是贝塞尔曲线。与 transition-timing-function 属性一样，CSS 规范预定义了五个贝塞尔曲线关键字，如下图所示，简介见下表。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC17%E7%AB%A0%EF%BC%9A%E8%BF%87%E6%B8%A1/%E5%85%B7%E5%90%8D%E4%B8%89%E6%AC%A1%E6%96%B9%E8%B4%9D%E5%A1%9E%E5%B0%94%E5%AF%B9%E5%BA%94%E7%9A%84%E6%9B%B2%E7%BA%BF.png)

| 时序函数    | 三次方贝塞尔值                   |
| ----------- | -------------------------------- |
| ease        | cubic-bezier(0.25, 0.1, 0.25, 1) |
| linear      | cubic-bezier(0, 0, 1, 1)         |
| ease-in     | cubic-bezier(0.42, 0, 1, 1)      |
| ease-out    | cubic-bezier(0, 0, 0.58, 1)      |
| ease-in-out | cubic-bezier(0.42, 0, 0.58, 1)   |

使用 Lea Verou 的三次方贝塞尔可视化工具（cubic-bezier.com）可以实时预览自己创建的贝塞尔曲线。

默认的时序函数 ease，开头较慢，然后逐渐加速，最后又慢下来。ease-in-out 函数与之很像，不过开头阶段的加速度更快。linear 函数从名称上能看出，播放的速度保持不变。

使用 ease-in 函数的动画开始时较慢，然后加速，最后突然停止。与之相反，ease-out 时序函数全速开始，然后逐渐慢下来，直至动画迭代结束。

如果这些预定义的时序函数不满足你的要求，可以使用贝塞尔曲线函数自己创建时序函数。这个函数接受四个值，例如：

```css
animation-timing-function: cubic-bezier(0.2, 0.4, 0.6, 0.8);
```

贝塞尔曲线通过参数以一定的数字原理定义曲线，常在二维图形应用中使用。附录 A 中有几个自定义的曲线示例。

贝塞尔曲线有四个参数，分别定义两个手柄的端点位置。在 CSS 中，手柄从 0,0 和 1, 1 两个点延伸出来。前两个参数定义曲线上第一点（或手柄）的 x 坐标和 y 坐标，后两个参数定义第二个手柄的 x 坐标和 y 坐标。x 坐标的值必须在 0 到 1 之间，否则得不到贝塞尔曲线。y 坐标的值不受限制。自己创建贝塞尔曲线时请记住一点：曲线越陡，运动的速度越快，曲线越平，运动的速度越慢。

虽然 x 坐标的值必须在 0 和 1 之间，但是 y 坐标的值可以大于 1，也可以小于 0。此时，可以得到一种弹跳效果，动画在值之间来回跳动，而不是一直向一个方向演进。请看下面的时序函数，对应的贝塞尔曲线很奇特，如下图所示：

```css
.snake {
    animation-naem: shrink;
    animation-duration: 10s;
    animation-timing-function: cubic-bezier(0, 4, 1, -4);
    animation-fill-mode: both;
}

@keyframes shrink {
    0% {
        width: 500px;
    }
    
    100% {
        width: 100px;
    }
}
```

这里，animation-timing-function 曲线把要以动画形式改变的属性的值移到了 0% 和 100% 关键帧设定的范围之外。在这个示例中，我们把元素的宽度由 500px 缩小为 100px。然而，由于 cubic-bezier 值的关系，元素的宽度在缩小的过程中其实会变的比 0% 关键帧定义的 500px 宽、比 100% 关键帧定义的 100px 窄，如下图所示。

一开始，这个元素的宽度为 0% 关键帧定义的 500px。然后迅速缩小为约 40px，这比 100% 关键帧定义的 width: 100px 要窄。接着，由 40px 慢慢增大到 750px，这比一开始的 500px 宽。最后，迅速缩小到 width: 100px，结束动画的此次迭代。

你可能注意到了，动画创建的曲线与我们定义的贝塞尔曲线是一致的。因为这条 S 曲线超出了常规的范围框，所以在播放动画的过程中元素的宽度会变得比 100px  窄、比 500px 宽。

这条贝塞尔曲线像一条蛇一样，因为一个 y 坐标为正值，一个 y  坐标为负值。如果两个 y 坐标都为大于 1 的正值，或者都为小于 -1 的负值，那么贝塞尔曲线是弧形的，在设定的某个值上部或下部，而不会呈 S 曲线，在两个边界值之间来回跳动。

animation-timing-function 设定的时序函数针对的是正常方向的动画，即由 0% 关键帧向 100% 关键帧演进。反向播放动画时，即由 100% 关键帧向 0% 关键帧演进，时序函数将反转。

还记得前文那个弹跳球示例吗？小球弹跳的过程与实际不太相符，因为那个例子用的是默认的 ease 时序函数。我们可以把 animation-timing-function 设为 ease-in，让小球下落时，在向 100% 关键帧（即最低点）运动的过程中速度越来越快。小球向上弹回时，动画是反向播放的，即由 100% 指向 0%，因此 animation-timing-function 也是反过来的，变成 ease-out，在接近顶点的过程中速度越来越慢：

```css
.ball {
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
    animation-direction: alternate;
}

@keyframes bounce {
    0% {
        transform: translateY(0);
    }
    
    100% {
        transform: translateY(500px);
    }
}
```

<br>

### 步进时序函数

步进时序函数，step-start、step-end 和 steps()，不是贝塞尔曲线，其实根本不是曲线。步进函数定义的是补间效果。steps() 函数在实现小人动画时最有用。

steps() 时序函数把动画分成一系列等长的步幅。steps() 接受两个参数：步数和变化点（稍后细说）。

步数是第一个参数，其值必须是正整数。动画时长将平均分成步数对应的段数。例如，如果动画的持续时间为 1 秒，步数为 5，那么动画的每一步时长为 200 毫秒，元素将在页面中重新绘制 5 次，间隔 200 毫秒，每次间隔播放动画的 20%。

可以通过翻书效果理解步进函数。书中的每一页有一幅图，页与页之间有细微的差异，就像电影的一帧帧画面一样。在快速翻动页面的过程中，图像的变化将形成动画效果。使用子图集，加上 background-position 属性和 steps() 时序函数，可以实现类似的动画。

下图是一个子图集，各个小图之间有细微的差异，就像画在书本的每一页上一样。

我们要创建一个容器元素，把尺寸设为子图集中单张图那么大，并把子图集设为容器的背景图。然后，使用 steps() 时序函数，以动画形式改变 background-position，一次只看到子图集上的一副小图。提供给 steps() 时序函数的步数等于子图集中图像的数量。步数定义完成一次动画背景图要定格多少次。

在上图中的子图集里，各图像的尺寸为 56 ⨉ 100 像素，总尺寸为 1232 ⨉ 100 像素。首先，把容器的尺寸设为单张图的大小，即 56 ⨉ 100 像素。然后把子图集设为容器的背景。background-position 属性的初始值（默认值）是 topleft，等同于 0 0.默认值是个好选择，不支持 CSS 动画的旧浏览器将显示子图集中的第一张图。

```css
.dancer {
    height: 100px;
    width: 56px;
    background-image: url(../images/dancer.png);
}
```

这里的关键是使用 steps() 改变 background-position 的值，让每一帧显示子图集中的一张图。使用 steps() 时序函数时，背景图不是连续不断滑入的，而是一次次（与步数相等）移入的。

因此，这个动画只需改变 background-position 的左右位置。子图集的宽度为 1232 像素，因此我们要把背景图从 0 0 （左上角）移到 -1232px 0，把子图集完全放到 56 ⨉ 100 像素的 div 视区以外。

把背景图的位置设为 -1232px 0，子图集将完全移到左边，超出容纳块的视区。在 100% 记号处，通过 56 ⨉ 100 像素的 div 区域完全看不到子图集，除非 background-repeat 允许沿 x 轴平铺图像。但我们并不希望出现这样的结果。

我们想要的效果是：

```css
@keyframes dance_in_place {
    from {
        background-position: 0 0;
    }
    
    to {
        background-position: -1232px 0;
    }
}

.dancer {
    background-image: url(../images/dancer.png);
    animation-name: dance_in_place;
    animation-duration: 4s;
    animation-timing-function: steps(22, end);
    animation-iteration-count: infinite;
}
```

看似复杂的动画我们轻易就实现了：像在书本上一样，在一帧上一次看到子图集中的一张图。关键帧只需移动背景图即可。

以上讲的是第一个参数，即步数。第二个参数可取这两个值中的一个：start 和 end。

这个参数指明第一步的变化发生在间隔的开头还是结尾。默认值 end 在第一步的结尾变化。也就是说，对 200 毫秒的步长来说，动画中的第一次变化等到 200 毫秒之后才会发生。设为 start 时，第一次变化在第一步的开头发生，即动画开始后立即变化。下图根据下述样式画出了这两个值的时间线。

```css
@keyframes grayfade {
    from {
        background-color: #BBB;
    }
    
    to {
        background-color: #333;
    }
}

.quickfader {
    animation: grayfade 1s steps(5, start) forwards;
}

.slowfader {
    animation: grayfade 1s steps(5, end) forwards;
}
```

时间线上的各个方框表示那一步的间隔中元素的背景色。注意，在 end 时间线中，第一段间隔中元素的背景色与动画开始前一样。这是因为动画等到第一帧的末尾才改变颜色（变成第一步与第二步之间的颜色）。

而在 start 时间线中，第一段间隔在开头立即改变颜色，瞬间由原背景色变成第一步与第二步之间的颜色。这就好像向前跳一段间隔，把 end 时间线中第二步的背景色移到了 start 时间线中第一步的位置。

在两个动画的结尾也能看到类似的效果，在 start 时间线中，第五步的背景色与元素的最终背景色一样。在 end 时间线中，第五步的背景色是第四步与第五步之间的颜色，直到第五步末尾，即动画结束时才变成最终的颜色。

第二个参数的作用很难说得清。你可以这样理解：在动画的正常方向中，start 值相当于跳过 0% 关键帧，因为第一次变化在动画开始后立即发生，而 end 值相当于跳过 100% 关键帧。

>如果想像上述示例一样在动画结束后保留最终的背景色，而不是重置为起初的颜色，要使用关键字 forwards。详情参见 18.4.9 节。

step-start 值等同于 steps(1, start)，只有一步，显示 100% 关键帧。step-end 值等同于 steps(1, end)，只显示 0% 关键帧。

<br>

### 再添加一个动画

回到前面的小人动画。那个动画是一个小人在跳舞，不过多数人在跳舞时会摆动身体。我们可以再添加一个动画，实现左右和前后运动效果：

```css
@keyframes move_around {
    0%, 100% {
        transform: translate(0, -40px) scale(0.9);
    }
    
    25% {
        transform: translate(40px, 0) scale(1);
    }
    
    50% {
        transform: translate(0, 40px) scale(1.1);
    }
    
    75% {
        transform: translate(-40px, 0) scale(1);
    }
}
```

我们又定义了一个关键帧动画，名为 move_around。然后在各动画属性中添加一个值，用逗号与现有的值分开，为跳舞的人附加第二个动画：

```css
.dancer {
    background-image: url(../images/dancer.png);
    animation-name: dance_in_place, move_around;
    animation-duration: 4s, 16s;
    animation-timing-function: steps(22, end), steps(5, end);
    animation-iteration-count: infinite;
}
```

注意，除 animation-iteration-count 之外，其他各动画属性都有两个以逗号分隔的值。还记得吗，如果动画属性列出的逗号分隔的值与 animation-name 属性列出的数量不一致，缺少的值将从现有值中复制，直至数量相等。我们希望两个动画都无限持续下去，因此只提供了一个 infinite 值。浏览器将重复 animation-iteration-count 列出的值（这里列出的是一个 infinite），直至数量与声明的动画数相同。

<br>

### 以动画形式改变时序函数

animation-timing-functon 属性不支持动画，但是可以放在关键帧中，修改动画的当前时序。

与支持动画的属性不同，animation-timing-function 属性的值无法内插。如果放在 @keyframes 规则中定义的关键帧里，播放到当前关键帧时，其中声明的属性将使用 animation-timing-function 声明的新时序函数，如下图所示。

```css
@keyframes width {
    0% {
        width: 200px;
        animation-timing-function: linear;
    }
    
    50% {
        width: 350px;
        animation-timing-function: ease-in;
    }
    
    100% {
        width: 500px;
    }
}
```

在上述示例中，动画播放到一半时，我们把 width 属性的线性时序变成了渐入时序，如图所示。ease-in 时序从时序函数变化的那个关键帧开始生效。

在 to 或 100% 关键帧中设定 animation-timing-function 对动画没有任何影响。在其他关键帧中改变时序函数，动画将从 animation-timing-function 声明所在的关键帧开始使用新的时序函数，直到下一个覆盖默认时序或有 animation-timing-function 声明的关键帧。

关键帧中声明的 animation-timing-function，只对当前关键帧块中的属性有影响。只有播放到包含那些属性的关键帧时，新的时序函数才生效。届时，时序函数将变成那个块中声明的值，或者变回最初为元素分配的时序函数。以前文所举的 W 动画为例：

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

从概念上将，应用到元素或伪元素上的动画会为 @keyframes 规则中的每个属性创建关键帧，好似单独播放每个属性的动画一样。对 W 动画来说，好像是同时播放两个动画，W_part1 和 W_part2：

```css
@keyframes W_part1 {
    from, to {
        top: 0;
    }
    
    25%, 75% {
        top: 100%;
    }
    
    50% {
        top: 50%;
    }
}

@keyframes W_part2 {
    from {
        left: 0;
    }
    
    to {
        left: 100%;
    }
}
```

在某个关键帧中设定的 animation-timing-function，只应用到那个关键帧中定义的属性上：

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
        animation-timing-function: ease-in;
        top: 50%;
    }
    
    to {
        left: 100%;
        top: 0;
    }
}
```

上述代码只把 top 属性的 animation-timing-function 变成 ease-in，left 属性不受影响，也就是说只对 W 动画的 W_part1 部分起作用，而且只影响那个动画的中点到 75% 记号处这一段。

然而，在下述动画中，animation-timing-function 不起作用，因为所在的关键帧块中没有声明任何属性：

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
        animation-timing-function: ease-in;
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

那么，在动画的中途改变时序函数有什么用？在弹跳球示例中，所处的环境没有摩擦力，小球一直弹跳，没有动量损失。小球下降时加速，上升时减速，因此每隔一次迭代，动画的播放方向由 normal 变成 reverse，时序函数则由 ease-in 变成 ease-out。

现实中，摩擦力是存在的，动量有损失。小球不可能无限弹跳下去。如果想让小球弹跳的过程符合自然规律，每次触底弹起的高度要矮一些，因为有能量损耗。为此，我们要定义一个弹跳多次的动画，每次弹跳都有动量损失，而且在顶点和最低点之间来回切换 ease-in 和 ease-out：

```css
@keyframes bounce {
    0% {
        transform: translateY(0);
        animation-timing-function: ease-in;
    }
    
    30% {
        transform: translateY(100px);
        animation-timing-function: ease-in;
    }
    
    58% {
        transform: translateY(200px);
        animation-timing-function: ease-in;
    }
    
    80% {
        transform: translateY(300px);
        animation-timing-function: ease-in;
    }
    
    95% {
        transform: translateY(360px);
        animation-timing-function: ease-in;
    }
    
    15%, 45%, 71%, 89%, 100% {
        transform: translateY(380px);
        animation-timing-function: ease-out;
    }
}
```

这个动画的弹跳高度逐渐减小，最终停止。

这个动画只有一次迭代，因此不能依赖 animation-direction 改变时序函数。虽然每次弹跳都有动量损失，但是我们要保证小球在下降时受重力作用有加速，而在接近顶点过程中速度逐渐减慢。因为只有一次迭代，所以我们在关键帧中声明 animation-timing-function，控制时序。每次到达顶点，把时序切换为 ease-in，而到达最低点时（即触底反弹），又切换为 ease-out。

<br>

## 8. 设置动画的播放状态

如果想暂停和继续播放动画，可以使用 animation-play-state 属性定义动画是播放还是暂停的。

```css
animation-play-state

取值：[ running | paused ]#
初始值：running
适用于：所有元素，以及 ::before 和 ::after 伪元素
计算值：指定的值
继承性：否
动画性：否
```

设为默认值 running 时，动画正常播放。设为 paused 时，动画暂停。此时，动画依然应用到元素上，只是在暂停前播放到的位置停住。如果在迭代中途停止，已经发生变化的属性停在当前的值。再次设为 running，或者回到默认值，动画从停止的位置继续播放，就像控制动画的时钟停止后又开始行走了一样。

如果在动画的延迟阶段设置 animation-play-state: paused，延迟时钟也暂停，把 animation-play-state 设为 running 之后继续计时。

<br>

## 9. 动画的填充模式

animation-fill-mode 属性定义动画播放结束后是否应用原来的属性值。

```css
animation-fill-mode

取值：[ none | forwards | backwards | both ]#
初始值：none
适用于：所有元素，以及 ::before 和 ::after 伪元素
计算值：指定的值
继承性：否
动画性：否
```

这个属性的作用体现在，默认情况下动画所做的改动只在动画播放的过程中有效，一旦动画结束，属性将还原为动画之前的值。因此，如果动画把背景由红色变成蓝色，（默认情况下）动画结束后背景将还原为红色。

类似地，如果 animation-delay 为正值，动画不会立即改变属性的值，而是在延迟结束，触发 animationstart 事件后才开始改变。

使用 animation-fill-mode 属性可以定义触发 animationstart 事件之前和触发 animationend 事件之后动画如何影响元素。我们可以设定，让 0% 关键帧中设定的属性值在延迟期间就应用到元素上，或者在触发 animationend 事件之后继续应用到元素上。

animation-fill-mode 属性的默认值是 none，意思是动画不播放就没有效果：0% 关键帧（或反向播放动画时的 100% 关键帧）块中设定的属性值在 animation-delay 结束、触发 animationstart 事件之前不应用到元素上。

设为 backwards 时，0% 或 from 关键帧（如果有的话）中定义的属性值在动画应用到元素上的那一刻就起作用。0% 关键帧（animation-direction 属性的值为 reversed 或 reversed-alternate 时，为 100% 关键帧）定义的属性值立即应用，而不等待 animation-delay 时间结束。

forwards 值的意思是动画播放结束后，即 animation-iteration-count 设定的迭代次数全部结束，触发了 animationend 事件，当时的属性值继续应用在元素上。如果 animation-iteration-count 的值是整数，应用的属性值来自 100% 关键帧。如果最后一次迭代是反向的，则来自 0% 关键帧。

both 值包含 backwards 和 forwards 两个值的效果，即把动画附加到元素上之后立即应用属性值，而且触发 animationend 事件之后，属性的值得以保留。

如果animation-iteration-count 的值不是整数，而是浮点数，那么最后一次迭代不以 0% 或 100% 关键帧结尾，而是在一次动画循环的中途停止播放。如果把 animation-fill-mode 设为 forwards 或 both，触发 animationend 事件时的属性值将应用到元素上。例如 animation-iteration-count 为 6.5，animation-timing-function 为 linear，触发 animationend 事件时，50% 记号中的属性值将保留下来（不管有没有显式声明 50% 关键帧），好似在那一刻把 animation-play-state 设为 pause。

例如，对下述代码来说：

```css
@keyframes move_me {
    0% {
        transform: translateX(0);
    }
    
    100% {
        transform: translateX(1000px);
    }
}

.moved {
    transform: translateX(0);
    animation-name: moved_me;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: 0.6;
    animation-fill-mode: forwards;
}
```

这个动画只迭代 0.6 次。这个持续 10 秒的线性动画将在 60% 记号处停止，即动画播放了 6 秒，元素向右平移了 600 像素。animation-fill-mode 的值为 forwards 或 both 时，元素向右平移 600 像素后动画停止，而且就停在原位置右侧 600 像素的位置上。元素将无限期停在那个位置，直到从元素上拆离动画。如果没有 animation-fill-mode: forwards，类为 moved 的元素上将立即回到原始位置，因为 moved 选择符后的代码块中定义了 translateX(0)。

>在 safari 9 及之前的版本中，forwards 和 both 都把 100% 关键帧中的属性值应用到元素上，而不管最后一次迭代的方向，也不管动画是以 100% 关键帧结束的还是在其他位置结束的。对上述示例来说，在 safari 9 中，.moved 元素向右平移 600 像素后停止，然后立即跳到右侧 1000 像素处，然后停在那里。在 safari 9 及之前的版本中，不管最后一次迭代的方向是 normal 还是 reverse，也不管动画在一次循环的 25% 还是 75% 结束，只要声明了 animation-fill-mode: forwards，动画都会跳到 100% 关键帧，停在那里。这是遵守旧版规范的行为，希望浏览器的开发人员能跟上新版规范和其他主流浏览器的步伐。

<br>

# 5. 写为一个属性

使用 animation 简写属性，无需分别定义 8 个属性，在一行声明中就能为元素定义全部动画属性。animation 属性的值是一个列表，以空格分隔，分别对应各个单独属性。如果要在元素或伪元素上应用多个动画，在列出的各动画之间加上逗号。

```css
animation

取值：[ <animation-name> || <animation-duration> || <animation-timing-function> || <animation-delay> || <animation-iteration-count> || <animation-direction> || <animation-fill-mode> || <animation-play-state> ]#
初始值：0s ease 0s 1 normal none running none
适用于：所有元素，以及 ::before 和 ::after 伪元素
计算值：指定的值
继承性：否
动画性：否
```

animation 简写属性的值为前述各动画属性的值，包括 animation-duration、animation-timing-function、animation-delay、animation-iteration-count、animation-direction、animation-fill-mode、animation-play-state 和 animation-name。例如，下面两个规则是完全等效的：

```css
#animated {
    animation: 200ms ease-in 50ms 1 normal running forwards slidedown;
}

#animated {
    animation-name: slidedown;
    animation-duration: 200ms;
    animation-timing-function: ease-in;
    animation-delay: 50ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-direction: normal;
    animation-play-state: running;
}
```

在 animation 简写属性中，无需声明所有值。未声明的值将被设为默认值（或初始值）。前面示例中的简写属性比较长，其中有三个属性的值是默认值，因此无需写出。

特别注意，如果在简写属性中没有声明全部八个值，未声明的属性将采用相应属性的初始值。各单独属性的初始值（或默认值）如下：

```css
animation-name: none;
animation-duration: 0s;
animation-timing-function: ease;
animation-delay: 0;
animation-iteration-count: 1;
animation-fill-mode: none;
animation-direction: normal;
animation-play-state: running;
```

简写属性中有些值的顺序是重要的。其一，有两个时间相关的属性，分别为 `<animation-duration>` 和 `<animation-delay>`。如果列出两个时间值，第一个始终为持续时间。如果有第二个，解释为延迟。

其二，animation-name 的位置也很重要。如果动画标识符的值与某个动画属性的值相同（不应该这么做，这里只是假设），那么 animation-name 应该放在最后。在之前的位置上的关键字，只要是某个动画属性的有效值，例如 ease 或 running，就会假定为相应属性的值，而不会解释为 animation-name 的值。注意，none 基本上是唯一不能作为动画名称的词。

下述代码：

```css
#failedAnimation {
    animation: paused 2s;
}
```

等效于：

```css
#failedAnimation {
    animation-name: none;
    animation-duration: 2s;
    animation-delay: 0;
    animation-timing-function: ease;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-direction: normal;
    animation-play-state: paused;
}
```

paused 是有效的动画名称。在上述简写属性中，你可能以为附加到元素上的是名为 paused、持续 2s 的动画。其实不然。这是因为，简写属性中的词首先检查是不是 animation-name 之外某个动画属性的有效值，而 paused 是 animation-play-state 属性的有效值。

下述代码：

```css
#anotherFailedAnimation {
    animation: running 2s ease-in-out forwards;
}
```

等效于：

```css
#anotherFailedAnimation {
    animation-name: none;
    animation-duration: 2s;
    animation-delay: 0s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-direction: normal;
    animation-play-state: running;
}
```

开发者可能定义了一个名为 running 的关键帧动画。但是，浏览器将把 running 赋予 animation-play-state 属性，而不是 animation-name 属性。由于没有声明 animation-name，所以没有动画附加到元素上。绕开这个问题的方法是：

```css
#aSuccessfulIfInadvisableAnimation {
    animation: running 2s ease-in-out forwards running;
}
```

这个规则把第一个 running 赋值给 animation-play-state 属性，把第二个 running 赋值给 animation-name 属性。再次声明，不建议这么做。因为混淆和出错的风险太大了。

根据上述说明，animation: 2s 3s 4s。看起来是有效的声明，像是这样定义的：

```css
#invalidName {
    animation-name: 4s;
    animation-duration: 2s;
    animation-delay: 3s;
}
```

但是，18.2 节说过，4s 不是有效的标识符。标识符不能以数字开头，除非转义。如果想变为有效的声明，可以写成 animation: 2s 3s \4s。

如果想在一个元素或伪元素上附加多个动画，以逗号分开各动画：

```css
.snowflake {
    animation: 3s ease-in 200ms 32 forwards falling, 1.5s linear 200ms 64 spinning;
}
```

雪花将旋转下落 96 秒，每 3 秒旋转两次。最后一次循环结束后，雪花将停留在 falling 动画的 100% 关键帧。我们为 falling 动画声明了六个动画属性，为 spinning 动画声明了五个动画属性，二者之间以逗号分隔。

你可能经常见到别人在第一个位置声明动画名称（这样可读性更好，因为动画属性的关键字值也是有效的关键帧标识符），但这不是最佳实践。鉴于此，我们才把动画名称放在最后。

综上，使用 animation 简写属性是个不错的主意。但是要记住，持续时间、延迟和名称的位置很重要，而且省略的值将被设为默认值。此外，最好别使用关键字作为动画的标识符。

<br>

# 6. 动画、特指度和优先顺序

动画在特指度和层叠规则方面有些特殊，确定把哪个属性值应用到元素上时，会错误地覆盖层叠样式中地其他所有值（截至 2017 年年末）。

## 1. 特指度和 !important

一般来说，通过 ID 选择符应用到元素上的属性，其权重为 1-0-0，这应该比元素选择符的 0-0-1 权重高。然而，如果属性的值是以关键帧动画形式改变的，应用到元素上时，属性及其值好像是通过行内样式添加的一样。

目前，在所有支持动画的浏览器中，关键帧设定的属性值都好像在行内声明的一样，而且加上了 !important，例如 `<div style="keyframe-property: value !important">`。根据规范，这是错误的行为。规范指出，动画覆盖常规的规则，但是能被带有 !important 的规则覆盖。在 2017 年年末之前实现的浏览器中，这是个 bug，最终应该会被修正。或者，规范可能会做修改。

尽管如此，不要在动画声明块中使用 !important。这样做是无效的，反而会导致相应的属性和值被忽略。

<br>

## 2. 动画顺序

如果有多个动画为同一个属性指定了不同的值，最后一个应用的动画将覆盖之前动画中声明的值：

```css
#colorchange {
    animation-name: red, green, blue;
    animation-duration: 11s, 9s, 6s;
}
```

在上述代码示例中，如果 red、green 和 blue 三个关键帧动画把 color 属性改变为名称对应的颜色，把 animation-name 和 animation-duration 属性应用到 #colorchange 元素上之后，前六秒 blue 动画中的属性值生效，接下来的三秒 green 动画中的属性值生效，最后两秒 red 动画中的属性值生效，而后回归属性的默认值。这里，如果 blue 关键字动画中的 0% 关键帧没有声明 color 属性，颜色将按顺序取自 green 动画、red 动画和元素的 currentColor 值。缺少 100% 关键帧时也是如此。

在动画开始之前，元素的默认属性不受影响，而且在动画结束后，属性将还原为原来的值，除非把 animation-fill-mode 设为 none 以外的值。如果加上 animation-fill-mode: both，color 始终为蓝色，因为最后一个动画（blue）覆盖了前面的 green 动画，而它又覆盖了开头的 red 动画。

<br>

## 3. display: none 对动画迭代的影响

如果把元素的 display 属性设为 none，元素或其后代上的动画迭代将停止，好似把动画从元素上拆离来了一样。把 display 属性变为某个可见的值之后，所有动画属性重新应用到元素上，动画将从头开始播放：

```css
.snowflake {
    animation: spin 2s linear 5s 20;
}
```

在这个示例中，雪花将旋转 20 次，每次用时 2 秒钟，而且第一次旋转等待 5 秒才开始。如果 15 秒后把 .snowflake 元素的 display 属性设为 none，元素在消失之前已经完成了 5 次旋转（等待 5 秒钟，5 次旋转各用 2 秒钟）。如果把 display 属性的值改成 none 以外的值，动画将从头开始播放：延迟 5 秒之后开始旋转 20 次。从视线中消失之前已经迭代了多少次循环并没有关系。

<br>































