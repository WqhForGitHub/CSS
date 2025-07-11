本章探讨单位。单位可以影响颜色、距离和尺寸等一系列属性，可以帮助定义这些值。单位是 CSS 的重要基础，几乎一切值都离不开它。没有单位，你便无法声明一个图像的四周有 10 像素的空白，也不能声明标题的文本是多大。理解本章讨论的概念，有助于你快速学习和使用 CSS 的其他知识。

# 1. 关键字、字符串和其他文本值

样式表中的一切都是文本，但是有些类型的值表示的是字符串本身，而不是数字或颜色等。表示字符串本身的值有 URL 和让人难以置信的图像。

## 1. 关键字

有时，值用一个词表示，这叫关键字。none 是一个十分常见的关键字，它与 0（零）不同。若想移除 HTML 文档中链接的下划线，可以这样写：

```css
a:link, a:visited {
    text-decoration: none;
}
```

类似地，如果想为链接加上下划线，要使用关键字 underline。

接受关键字的属性，所取的关键字必须在那个属性允许使用的关键字范围之内。如果两个属性使用相同的关键字，在不同的属性中相同的关键字可能具有不一样的行为。例如，letter-spacing 属性的 normal 关键字与 font-style 属性的 normal 关键字就相差很大。

<br>

### 全局关键字

CSS3 定义了几个全局关键字，规范中的每个属性设为与父元素同一属性的值一样。也就是说，这个关键字强制继承，即便是在通常情况下不继承时。很多时候无需这么做，因为多数属性会自动继承。尽管如此，inherit 仍有其用处。

例如，对下面的样式和标记来说：

```css
#toolbar {
    background: blue;
    color: white;
}
```

```html
<div id="toolbar">
    <a href="one.html">One</a> | <a href="two.html">Two</a> |
    <a href="three.html">Three</a>
</div>
```

div 元素将有蓝色背景和白字，而链接将根据浏览器的偏好设置装饰。多数情况下，这里的链接将显示为蓝底蓝字，中间以白色的竖线分隔。

你可以单独编写一个规则，把这个工具栏中的链接设为白色，不过使用 inherit 更便利。只需在样式表中添加下述规则：

```css
#toolbar a {
    color: inherit;
}
```

这样，链接的 color 属性将使用继承的值，而不是用户代理的默认样式。通常，直接指定的样式覆盖继承的样式，但是 inherit 能把这种情况反过来。有时，这样做并不是一个好主意。例如，这里的样式可能与周围的文本融合太深，容易引起可访问性方面的问题，不过你要知道确实可以这么做。

使用 inherit 还能把通常情况下不从父元素继承的属性值强制拉过来。比如说，border 属性不会继承（这是正确的行为）。如果想让 span 继承父元素的边框，只需使用 span { border:  inherit }。不过，更多时候，我们可能只想让 span 的边框颜色与父元素一样。此时，使用 span { border-color: inherit } 即可。

initial 关键字 initial 把属性的值设为预定义的初始值，相当于重设值。例如，font-weigh 属性的默认值是 normal。因此，font-weight: initial 的作用与 font-weight: normal 一样。

这样做看起来有点傻，不过要知道，不是所有属性都有预定义的初始值。例如，color 属性的初始值取决于用户代理。这可不是让你原封不动输入的特殊关键字。它的意思是，color 属性的默认值取决于浏览器等的偏好设置。多数情况下，用户不会修改默认的文本颜色（黑色），但也有人会改，比如改为深灰色，或者亮红色。此时，color: initial 的作用是，让浏览器把元素中文本的颜色设为默认的颜色。

unset 关键字 unset 是 inherit 和 initial 的通用替身。对继承的属性来说，unset 的作用与 inherit 一样。对不继承的属性来说，unset 的作用与 initial 一样。

>截至 2017 年年末，initial、inherit 和 unset 这三个关键字 Opera Mini 都不支持。Internet Explorer 11 之前的版本也不支持。

这三个全局关键字在所有属性中都可以使用。有个特殊的属性只接受这几个全局关键字：all。

```css
all

取值：inherit | initial | unset
初始值：参见各属性
```

all 表示除 direction 和 unicode-bidi 之外的所有属性。因此，如果为一个元素声明 all: inherit，意思是除 direction 和 unicode-bidi 之外的所有属性都从父元素上继承值。对下面的规则和标记来说：

```css
section {
    color: white;
    background: black;
    font-weight: bold;
}

#example {
    all: inherit;
}
```

```html
<section>
    <div id="example">This is a div.</div>
</section>
```

你应该能猜到，div 元素会从 section 元素上继承 color、background 和 font-weight 属性的值。的确，不过除此之外的其他 CSS 属性（除了那两个）也从 section 元素上继承属性值。

如果这就是你想要的行为，那就好。但是，如果只想继承 section 元素的样式中列出的那几个属性值的话。CSS 就要这样写：

```css
section {
    color: white;
    background: black;
    font-weight: bold;
}

#example {
    color: inherit;
    background: inherit;
    font-weight: inherit;
}
```

如果真正想要的是 all: unset，要相应修改样式表。

>截至 2017 年年末，相关人员正在考虑另一个全局关键字，revert。它的作用是把属性值回退到其他来源中设定的值。例如，创作人员可能让元素的所有属性值都不使用自己编写的样式表，而使用用户代理和用户提供的样式表。这个关键字正在商讨中，这里不做深入说明。

>截至 2017 年年末，Opera Mini 和 Microsoft Edge 不支持 all。Edge 正在考虑支持。

<br>

## 2. 字符串

字符串值指放在单引号或双引号内的任意字符序列，定义可取的值时以 `<string>` 表示。下面举两个简单的例子：

"I like to play with strings."

'Strings are fun to play with.'

注意，前后引号要一致。即首尾两个引号是同一种。如若不然，可能导致各种问题，因为以一种引号开头而以另一种引号结尾其实相当于字符串并未结束。这样可能意外导致后续规则变成字符串的一部分。

字符串中还可以有引号，只要不与外层的引号同样就行，此外也可以使用反斜线转义：

"I've always liked to play with strings."

'He said to me, "I' like to play width strings."'

"It's been said that `\"haste makes wate.\`"

'There`\'s` never been a "string theory" that `I\'ve liked.`'

注意，字符串的定界符只能使用 ' 和 "。有时这叫直引号，因此字符串值不能以弯引号或智能引号开头或结尾。不过，这两种引号可以在字符串值中使用（见下面的示例），而且无需转义：

"It's been said that "haste makes waste.""

'There's never been a "string theory" that I've liked.'





























