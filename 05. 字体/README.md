# 1. 字体族

我们熟知的字体通常包含多个变体，分别针对粗体、斜体等。例如你可能熟悉（至少听说过）的 Times 字体，其实它有多种变体，包括 TimesRegular、TimesBold、TimesItalic、TimesBoldItalic 等。Times 的这些变体各自都是一个字型（font face），我们通常说的 Times，其实是这些不同字型的统称。也就是说，Times 其实是一个字体族（font-family），而不是一个字体。大多数人都会把字体理解为单个实体。

为了覆盖所有情况，css 定义了五种通用字体族：

衬线字体

​	这种字体中的字形宽度各异，而且有衬线。因为字体中不同字符的尺寸不同，所以宽度才有差异。例如，小写字母 i 和小写字母 m 的宽度就不同。衬线是字	符笔划末尾的装饰，例如小写字母 1 顶部和底部的短线，以及大写字母 A 两条竖线底部的短线。Times、Georgia 和 New Century Schoolbook 都是衬线字	体。

无衬线字体

​	这种字体中的字形宽度各异，而且无衬线。Helvetica、Geneva、Verdana、Arial 和 Univers 都是无衬线字体。

等宽字体

​	等宽字体中的字形宽度一样。一般用于显示编程代码或表格数据。这种字体中的各个字符在横向上所占的空间是一样的。因此，尽管小写字母 i 和小写字母 m 	这两个字母本身的宽度不同，但使用等宽字体时二者所占的横向空间一样大。这种字体可以有衬线，也可以无衬线。一个字体不管有没有衬线，只要字符宽度	相同，就把它归类为等宽字体。Courier、Courier New、Consolas 和 Andale Mono 都是等宽字体。

草书字体

​	这种字体尝试模仿人类笔迹或手写体。通常，这种字体在笔划末端有较大的花饰，而且比衬线字体华丽。例如，大写字母 A 左边竖线的底部可能有个小卷，或	者整条线都是花饰卷。Zapf Chancery、Author 和 Comic Sans 都是草书字体。

奇幻字体

​	这种字体（有时也叫装饰字体或展示字体）还真没什么统一的特征，不过可以确定的是，无法将其划归到其他类别中。Western、Woodblock 和 Klingon 都	是奇幻字体。

理论上，任何一款字体都可归为上述通用字体族中的一个。实际情况可能并非如此，不过例外情况总是少的。如果浏览器遇到无法归类为衬线、无衬线、等宽或草书的字体，便会将其放到奇幻篮子里。

## 1. 使用通用字体族

字体族使用 font-family 属性声明。

```css
font-family

取值：[ <family-name> | <generic-family> ]#
初始值：由用户代理指定
适用于：所有元素
计算值：指定的值
继承性：是
动画性：否
```

如果想让一个文档使用无衬线字体，但不介意具体使用哪一款，可以这样声明：

```css
body {
    font-family: sans-serif;
}
```

此时，由浏览器选择一款无衬线字体（例如 Helvetica），然后应用到 body 元素上。借助继承，body 的所有后代都将使用这个字体，除非特指度更高的选择符覆盖了这个属性。

利用这些通用字体族，创作人员可以编写十分复杂的样式表。下述规则得到的结果如下图所示。

```css
body {
    font-family: serif;
}

h1, h2, h3, h4 {
    font-family: sans-serif;
}

code, pre, tt, kbd {
    font-family: monospace;
}

p.signature {
    font-family: cursive;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC5%E7%AB%A0%EF%BC%9A%E5%AD%97%E4%BD%93/%E4%BD%BF%E7%94%A8%E4%B8%8D%E5%90%8C%E7%9A%84%E5%AD%97%E4%BD%93%E6%97%8F.png)

此时，文档中的大部分内容将使用衬线字体（例如 Times），不过 class 为 signature 的段落将使用草书字体（例如 Author）渲染。一级标题到四级标题将使用无衬线字体（例如 Helvetica），而 code、pre、tt 和 kbd 元素将使用等宽字体（例如 Courier）。

<br>

## 2. 指定字体族

不过，创作人员可能想具体指定想使用哪款字体显示一个文档或元素。同样地，用户可能也想创建要给用户样式表，定义具体使用哪款字体显示文档。这两种情况仍然使用 font-family 属性。

假设现在想让所有 h1 都使用 Georgia 字体显示。实现这一需求最简单地规则如下：

```css
h1 {
    font-family: Georgia;
}
```

这样声明后，用户代理会使用 Georgia 字体显示文档中地所有 h1，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC5%E7%AB%A0%EF%BC%9A%E5%AD%97%E4%BD%93/%E4%BD%BF%E7%94%A8%20Georgia%20%E5%AD%97%E4%BD%93%E6%98%BE%E7%A4%BA%20h1%20%E5%85%83%E7%B4%A0.png)

这个规则则假设用户代理中安装了 Georgia 字体。如果没有这款字体，用户代理不会使用这个规则。用户代理不会将其忽略，如果找不到名为 Georgia 的字体，将会使用用户代理的默认字体显示 h1 元素。

然而，不必灰心。结合字体名称和通用字体族，可以尽量让结果与预想接近。接着上例，对下述规则来说，如果用户代理中有 Georgia 字体，就使用 Georgia 字体，否则使用其他无衬线字体：

```css
h1 {
    font-family: Georgia, serif;
}
```

如果你没有安装 Georgia，但是安装了 Times，用户代理可能会使用 Times 显示 h1 元素。即便 Times 与 Georgia 不完全一样，但是足够接近。

鉴于此，笔者强烈始终在 font-family 规则中指定通用字体族。这样做相当于提供一种后备机制，在用户代理找不到匹配的字体时，选择一个字体代替。下面再举几个例子：

```css
h1 {
    font-family: Arial, sans-serif;
}

h2 {
    font-family: Charcoal, sans-serif;
}

p {
    font-family: 'Times New Roman', serif;
}

address {
    font-family: Chicago, sans-serif;
}
```

对字体熟悉的人，可能记得多款相似的字体。假如我们想让文档中的所有段落都使用 Times 显示，不过 Times New Roman、Georgia、New Century Schoolbook 和 New York 也是可以接受的选择（这些都是衬线字体）。首先，定好各字体的顺序，然后一个接一个，以逗号分开：

```css
p {
    font-family: Times, 'Times New Roman', 'New Century Schoolbook', Georgia, 'New York', serif;
}
```

用户代理会按照所列的顺序查找字体。如果找不到列出的任何一款字体，用户代理将选择一款可用的衬线字体。

<br>

### 使用引号

在上例中，你可能注意到了之前没见过的单引号。在 font-family 声明中，如果字体名称中有一个或多个空格（例如 "New York"），或者字体名称中有符号（例如 # 或 $），建议使用引号。因此，名为 Karrank% 的字体就应该放在引号里：

```css
h2 {
    font-family: Wedgie, 'Karrank%', Klingon, fantasy;
}
```

如果没有引号，用户代理可能会忽略那个字体名称，然后接着处理规则后面的部分。

注意，把包含符号的字体名称放在引号里不是强制要求，只是推荐做法，相当于 css 规范中所说的最佳实践。类似地，也推荐把包含空格的字体名称放在引号里。不过，一般来说这不是必须额，现代的用户代理通常不强制要求。然而，与 font-family 中可用的关键字同名的字体名称必须放在引号里。因此，如果有各字体的名称就是 "cursive"，那么一定要把它放在引号里，这样才能与关键字 cursive 区分开：

```css
h2 {
    font-family: Author, "cursive", cursive;
}
```

只有一个词的字体名称无需放在引号里（前提是不与 font-family 中可用的关键字冲突），比如通用字体族的名称（serif、monospace 等）在确实指通用字体族时就从不放在引号里。如果把通用字体族的名称放在引号里，用户代理将假设你指定的是一款字体的名称（例如 "serif"），而不是通用字体族的名称。

使用的引号既可以是单引号，也可以是双引号。注意，如果把 font-family 规则放在 style 属性中（一般不应该这么做），使用的引号要与属性使用的不同。因此，如果 font-family 规则放在双引号里，那么规则内部就要使用单引号，如下所示：

```css
p {
    font-family: sans-serif;
}
```

```html
<!-- 这个示例是正确的（使用单引号） -->
<p style="font-family: 'New Century Schoolbook', Times, serif;">...</p>


<!-- 这个示例是错误的（使用双引号） -->
<p style="font-family: "New Century Schoolbook", Times, serif;">...</p>
```

此时使用双引号的话，将与属性的句法冲突，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC5%E7%AB%A0%EF%BC%9A%E5%AD%97%E4%BD%93/%E4%BD%BF%E7%94%A8%E9%94%99%E8%AF%AF%E7%9A%84%E5%BC%95%E5%8F%B7%E5%AF%BC%E8%87%B4%E7%9A%84%E9%97%AE%E9%A2%98.png)

<br>

# 2. 使用 @font-face

@font-face 的作用是让你在设计中使用自定义的字体。这个特性首次出现在 css2 中，不过直到 21 世纪头十年的后半期才实现。尽管无法保证每个终端用户都能用上你指定的字体，但是这个特性却得到了广泛支持。

假设你想使用的字体没有广泛安装，而是各十分特别的字体，借助 @font-face 的魔力，你可以定义一个专门的字体族名称，对应于服务器上的一个字体文件。用户代理将下载那个文件，使用它渲染页面中的文本，就好像用户的设备中安装了那个字体一样。下面举个例子：

```css
@font-face {
    font-family: "SwitzeraADF";
    src: url("SwitzeraADF-Regular.otf");
}
```

用户代理见到 font-family: SwitzeraADF 声明后，会加载对应的 .otf 文件，然后使用它渲染文本。

>本节示例中的 SwitzeraADF 是由 Arkandis Digital Foundary（http://arkandis.tuxfamily.org/openfonts.html）制作的字型集合。

@font-face 是惰性架子啊字型的。这表明，仅当需要使用指定的字型渲染文本时，才会加载，否则不加载。其实，浏览器不管是否需要，都会先行下载声明的全部字型，这是浏览器的缺陷。

<br>

## 1. 必须的描述符

定义字体的全部参数都在 @font-face {} 结构中编写。这些参数称为描述符，与属性十分相似，格式为 descriptor: value。其实，多数描述符都直接使用现有的属性名，稍后将做详细说明。

描述符中有两个是必需的：font-family 和 src。

```css
font-family

取值：<family-name>
初始值：未定义
```

```css
src

取值：[[ <uri> [format(<string>#)]? ] | <font-face-name> ]#
初始值：未定义
```

src 的作用不言而喻：为定义的字型提供一个或多个源。如果有多个源，之间以逗号分隔。字型的源可以指向任何 URI，不过有个限制：字型必须与样式表同源。因此，不能把 src 指向别人的网站，下载别人的字体。你要在自己的服务器中存储一份本地副本，或者使用同时提供样式表和字体文件的字体托管服务。

>同源限制有个例外：使用 HTTP 首部 Access-Control-Allow-Origin 设定服务器，允许跨站加载。

你可能觉得奇怪，这里的 font-family 和前一节所讲的有何不同？区别是，这里的 font-family 是字体族描述符，而前一节中的 font-family 是字体族属性。如果还不理解，没关系，先这样，慢慢你就会懂的。

其实，@font-face 做的是低层定义，是为字体相关的属性（如 font-family）服务的。通过描述符 font-family: "SwitzeraADF"。定义一个字体族名称之后，用户代理的字体族名称表中便会出现 “SwitzeraADF” 条目，与 Helvetica、Georgia、Courier 等具有同等地位，可以在 font-family 属性的值中引用：

```css
@font-face {
    font-family: "SwitzeraADF"; /* 描述符 */
    src: url("SwitzeraADF-Regular.otf");
}

h1 {
    font-family: SwitzeraADF, Helvetica, sans-serif; /* 属性 */
}
```

注意，font-family 描述符的值和 font-family 属性中出现的那个字体族名是一样的。如果不一样，h1 规则将忽略 font-family 属性值中列出的第一个字体族名称，解析后一个。只要成功下载了字体文件，而且文件的格式是用户代理支持的，那个字体就会像其他字体一样用于渲染文本，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC5%E7%AB%A0%EF%BC%9A%E5%AD%97%E4%BD%93/%E4%BD%BF%E7%94%A8%E4%B8%80%E6%AC%BE%E4%B8%8B%E8%BD%BD%E7%9A%84%E5%AD%97%E4%BD%93.png)

类似地，src 描述符中以逗号分隔的列表用于提供后备字体文件。如此一来，一旦（不管什么原因）用户代理无法从第一个源下载，就会尝试从下一个源中下载字体文件：

```css
@font-face {
    font-family: "SwitzeraADF";
    src: url("SwiteraADF-Regular.otf"),
        url("/fonts/SwitzeraADF-Regular.otf");
}
```

注意，这里也适用同源策略，如果指向其他服务器，通常无法下载，除非设置服务器允许跨源访问。

如果想告诉用户代理所用的字体是什么格式，可以使用可选的 format()：

```css
@font-face {
    font-family: "SwitzeraADF";
    src: url("SwitzeraADF-Regular.otf") format("opentype");
}
```

这样做的好处是，让用户代理跳过不支持的字体格式，从而减少带宽用量，提升加载速度。此外，使用 format() 还能为不带有常规扩展名的字体文件指定格式，以防用户代理不识别：

```css
@font-face {
    font-family: "SwitzeraADF";
    src: url("SwitzeraADF-Regular.otf") format("opentype"),
        url("SwitzeraADF-Regular.true") format("truetype");
}
```

>刹那间的变化
>
>对从事设计或开发有一定年头的人来说，可能还记得以前有刹那间出现无样式内容的日子。早期的浏览器在加载完 css 之前，至少是还未通过 css 确定布局之前，先显示 HTML。因此，有那么一瞬间，浏览器会先显示未经 css 装饰的文本（使用浏览器的默认样式）。
>
>使用自定义字体时也有类似的问题，即刹那间出现未使用指定字体渲染的文本。这一瞬间发生在浏览器加载完页面和 css 布局之后，但是尚未加载自定义的字体之前。此时，文本使用默认字体或后续字体渲染，然后才会变成使用自定义字体渲染。
>
>因为换成自定义字体的过程可能会影响布局，所以创作人员应该谨慎选择后备字体。如果开始使用的字体和后来使用的自定义字体之间在高度上相差较大，页面势必要重新布局。没什么方法能自动规避这一问题，不过 font-size-adjust（稍后介绍）在支持它的用户代理中有一定作用。建议根据想用的自定义字体选择一款高度接近的字体。
>
>出现这一霎那间变化的主要原因一直没变：浏览器在获得所需的全部资源之前已经做好了显示内容的准备，因此浏览器先行显示，然后再替换称经过装饰的版本。霎那间出现无样式内容的问题最终解决了，相信有一天霎那间出现未使用指定字体的现象也能顺利解决。在此之前，我们要面对现实，接受这一问题的存在。

可用的格式值见下表（截至 2017 年年末）。

| 值                | 格式                          |
| ----------------- | ----------------------------- |
| embedded-opentype | EOT(Embedded Opentype)        |
| opentype          | OTF(Opentype)                 |
| svg               | SVG(Scalable Vector Graphics) |
| truetype          | TTF(Truetype)                 |
| woff              | WOFF(Web Open Font Format)    |

除了使用 url() 和 format() 组合之外，还可以使用 local()（名称表明了作用）指定已经安装再用户设备中的字体族名称（可以是多个）：

```css
@font-face {
    font-family: "SwitzeraADF";
    src: local("Switzera-Regular"),
        local("SwitzeraADF-Regular"),
        url("SwitzeraADF-Regular.otf") format("opentype"),
        url("SwitzeraADF-Regular.true") format("truetype");
}
```

这里，用户代理先检查设备中是否有名为 "Switzera-Regular" 或 "SwitzeraADF-Regular" 的字体族，如果有，使用 SwitzeraADF 这个名称指代本地安装的字体。如果没有，尝试从远端下载 url() 中指定的字体文件。

注意，借助这个功能可以为本地安装的字体自定义名称。例如，可以像下面这样为 Helvetica（没有这个字体的话，尝试 Helvetica Neue）起个简短的名称：

```css
@font-face {
    font-family: "H";
    src: local("Helvetica"), local("Helvetica Neue");
}

h1, h2, h3 {
    font-family: H, sans-serif;
}
```

只要用户的设备中安装有 Helvetica，前三级标题便将使用 Helvetica 渲染。这样做看起来有点多此一举，不过再某些情况下确实能减少样式表文件的大小。

<br>

### 万全之策

@font-face 有个棘手的问题要解决：不同时代的不同浏览器支持不同格式的字体（从表中那些可下载的字体格式可见一斑）。为了尽量涵盖较广的场景，应该使用能确保万全的 @font-face 句法。这种句法最初由 paul irish 提出，后经 fontsptring 的人员改进，写法如下：

```css
@font-face {
    font-family: "SwitzeraADF";
    src: url("SwitzeraADF-Regular.eot");
    src: url("SwitzeraADF-Regular.eot?#iefix") format("embedded-opentype"),
        url("SwitzeraADF-Regular.woff") format("woff"),
        url("SwitzeraADF-Regular.ttf") format("truetype"),
        url("SwitzeraADF-Regular.svg#switzera_adf_regular") format("svg");
}
```

下面详细说明。开头的部分，即指定 font-family 名称那一行无需过多解释。随后的两行：

```css
src: url("SwitzeraADF-Regular.eot");
src: url("SwitzeraADF-Regular.eot?#iefix") format("embedded-opentype");
```

这两行为支持 EOT（Embedded Opentype）格式的浏览器（IE6~IE9）提供 EOT 文件。前一行针对兼容模式下的 IE9，后一行针对 IE6~IE8。后一行中的 ?iefix 导致这些浏览器出现一个解析缺陷，从而绕过另一个解析缺陷，即列出多个字体格式时返回 404 响应。IE9 修正了这个问题，但是没有扩充支持的字体格式，因此才需要第一行。

```css
url("SwitzerADF-Regular.woff") format("woff");
```

这一行为支持 web open font format 的浏览器（包含多数现代浏览器）提供 .woff 文件。其实，至此已经涵盖大多数桌面用户了。

```css
url("SwitzeraADF-Regular.ttf") format("truetype");
```

这一行为多数 ios 和 android 设备提供所支持额字体格式，涵盖了多数手持设备用户。

```css
url("SwitzeraADF-Regular.svg#switzera_adf_regular") format("svg");
```

最后一行提供只有旧 ios 设备支持的字体格式，涵盖余下的多数手持设备用户。

如果字形很多，很快就会变得烦琐，即便只输入一遍也很累手腕。幸好，有些服务能根据你提供的字型生成所需的 @font-face，并把字型转换成不同的格式，然后提供一个文件包供你下载。这些服务中最好的一个是 font squirrel 的 @font-face kit generator(http://fontsquirrel.com/fontface/generator)。使用这个生成工具时要谨记一点，必须得到转换和使用字型的授权（详情参见自定义字体的注意事项旁注）。

<br>

## 2. 其他字体描述符

除了必须的 font-family 和 src 描述符，还有几个可选的描述符用于为字型指定属性值。与 font-family 一样，这些描述符也对应于现有的 css 属性（本章后文说明），控制着用户代理相应属性的处理方式。见下表。

| 描述符                | 默认值     | 说明                                                         |
| --------------------- | ---------- | ------------------------------------------------------------ |
| font-style            | normal     | 区分常规、斜体和倾斜字型                                     |
| font-weight           | normal     | 区分不同的字重（例如加粗）                                   |
| font-stretch          | normal     | 区分不同的字符宽度（例如紧缩和加宽）                         |
| font-variant          | normal     | 区分众多字形变体（例如小号大写字母），在很多方面与 css 中的 font-feature-settings 很像 |
| font-feature-settings | normal     | 直接访问 opentype 的低层特性（例如启用连字）                 |
| unicode-range         | U+0-10FFFF | 定义指定字体中可用的字符范围                                 |

这些字体描述符是可选的，不必一定在 @font-face 规则中列出。css 规定，描述符不像属性那样可以没有默认值。如果没有某个可选的描述符，它的值将被设为默认值。因此，如果未列出 font-weight，其值默认为 mormal。

>自定义字体的注意事项
>
>使用自定义的字体时哟啊注意两件事。第一：要有权在网页中使用指定的字体。第二，值不值得使用自定义字体。
>
>与图片库一样，字体族也有许可证，规定使用范围，不是所有字体都准许在 web 中使用。如果想彻底规避这个问题，可以使用 foss（free nd open-source softwware）字体，或者使用 fontdeck 或 typekit 这样的商业服务，让它们处理许可证和字体格式转换。否则，一定要确保自己有权按照想要的方式使用字型，这跟你要保证自己有恰当的授权使用购买的图像一样。
>
>此外，使用的字型越多，web 服务器要处理的资源越多，而且页面越大。多数字型的体积并不大，通常为 50 ~ 100KB，不过，为了华丽的效果，字型会越用越多，而且比较复杂的字型体积是很大的。可以想象，这与图像如出一辙。一如往常，在外观和性能上要做适当的权衡，具体向哪边倾斜要视情况而定。
>
>我们知道图像有优化工具，同样，字体也有优化工具。这些工具通常是做子集处理，即只在字体中留下确实需要用到的符号。typekit 或 fonts.com 等服务可能有这样的工具，或者在请求字体时动态处理。

<br>

### 限制字符范围

有一个字体描述符没有对应的 css 属性（与上表中的其他描述符不同），即 unicode-range。这个描述符用于指定自定义字体可以应用到哪些字符上。使用符号字体，或者想确保只有特定语言使用指定字型时用得到这个描述符。

```css
unicode-range

取值：<urange>#
初始值：U+0-10FFFF
```

默认情况下，这个描述符的值涵盖全部 unicode 字符。这表明，只要字体中有某个字符的字形，就能用它渲染那个字符。多数情况下，这正是我们想要的。然而，有时我们想使用特定的字型渲染特定的内容。下面是从 css fonts module level 3 规范中摘取的两个例子：

```css
unicode-range: U+590-5FF;
unicode-range: U+4E00-9FFF, U+FF00-FF9F, U+30??; /* 日语文字、平假名、片假名 */
```

第一个例子只指定了一个范围，从 unicode 码位 590~5FF。这个范围是希伯来语字符。因此，创作人员可以指定一个希伯来语字体，限制它只用于渲染希伯来语字符，即使字型中还包括其他码位的字形：

```css
@font-face {
    font-family: "CMM-Ahuvah";
    src: url("cmm-ahuvah.otf" format("opentype"));
    unicode-range: U+590-5FF;
}
```

第二个例子指定了多个范围，以逗号分隔，涵盖所有日语字符。里面奇怪的 U+30?? 值是 unicode-range 允许使用的特殊格式，问号是通配符，意思是任何数字。因此，u+30?? 等效于 U+3000-30FF。unicode-range 的值中只允许使用问好这一个特殊的字符。

范围必须是小到大，反过来（例如 U+400-300）会导致解析错误而被忽略。除了范围之外，还可以声明单个码位，例如 U+221E。单个码位通常与其他码位和范围结合起来使用，比如像下面这样：

```css
unicode-range: U+4E00-9FFFF, U+FF00-FF9F, U+30??, U+A5; /* 日语汉字、平假名、片假名、外加货币符号 */
```

可以指定一个码位，让指定的字体渲染唯一的字符。要不要这么做取决于你自己、你的设计、字体文件的大小和用户的网速。

@font-face 是惰性加载的，因此可以使用 unicode-range 限制只下载页面中真正需要用到的字型。假设一个网站中有英语、俄语，还有一些基本的算术运算符，而你并不知道页面中会出现哪些字符。有些页面可能全是英语，有些可能混杂着俄语和算式等。此外，假设这三种内容都用专门的字型。为了确保用户代理只下载真正需要的字型，可以像下面这样组织 @font-face 规则：

```css
@font-face {
    font-family: "MyFont";
    src: url("myfont-general.otf" format("opentype"));
}

@font-face {
    font-family: "MyFont";
    src: url("myfont-cyrillic.otf" format("opentype"));
    unicode-range: U+04??, U+0500-0521F, U+2DE0-2DFF,U+A640-A96F, U+1D2B-1D78;
}

@font-face {
    font-family: "MyFont";
    src: url("myfont-math.otf" format("opentype"));
    unicode-range: U+22??; /* 等效于 U+2200-22FF */
}
```

第一个规则没有指定 unicode 范围，因此始终下载，除非页面中恰巧什么字符也没有（不是不可能）。根据第二个规则，仅当页面中指定 unicode 范围内的字符时才下载 myfont-cyrillic.otf。第三个规则一样，不过是当页面中有基本的算术运算符时才下载。

<br>

## 3. 组合描述符

我们可以把多个描述符组合在一起为字型设定不同的属性，这一点没那么容易想到，不过确实可行。例如，可以指定一个字型为粗体，一个字型为斜体，再指定一个字型为加粗的斜体。

这么做背后的原理是，未声明的描述符使用默认值。以下面三个字型设定规则为例：

```css
@font-face {
    font-family: "SwitzeraADF";
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    src: url("SwitzeraADF-Regular.otf") format("opentype");
}

@font-face {
    font-family: "SwitzeraADF";
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    src: url("SwitzeraADF-Bold.otf") format("opentype");
}

@font-face {
    font-family: "SwitzeraADF";
    font-weight: normal;
    font-style: italic;
    font-stretch: normal;
    src: url("SwitzeraADF-Italic.otf") format("opentype");
}
```

这里我们明确列出了所需的描述符，即便使用默认值，也没有省略。把值为 normal 的描述符去掉之后，效果完全一样：

```css
@font-face {
    font-family: "SwitzeraADF";
    src: url("SwitzeraADF-Regular.otf") format("opentype");
}

@font-face {
    font-family: "SwitzeraADF";
    font-weight: bold;
    src: url("SwitzeraADF-Bold.otf") format("opentype");
}

@font-face {
    font-family: "SwitzeraADF";
    font-style: italic;
    src: url("SwitzeraADF-Italic.otf") format("opentype");
}
```

在这三个规则中，所有 font-stretch 的值都是 normal，而 font-weight 和 font-style 的值各异。如果想让加粗斜体字不拉伸？

```css
@font-face {
    font-family: "SwitzeraADF";
    font-weight: bold;
    font-style: italic;
    font-stretch: normal;
    src: url("SwitzeraADF-Italic.otf") format("opentype");
}
```

如果想得到紧缩的加粗斜体？

```css
@font-face {
    font-family: "SwitzeraADF";
    font-weight: bold;
    font-style: italic;
    font-stretch: condensed;
    src: url("SwitzeraADF-BoldCondItalic.otf") format("opentype");
}
```

如果想得到紧缩的正常字重斜体？

```css
@font-face {
    font-family: "SwitzeraADF";
    font-weight: normal;
    font-style: italic;
    font-stretch: condensed;
    src: url("SwitzeraADF-CondItalic.otf") format("opentype");
}
```

可行性还有很多，我们就此打住。如果把所有取值为 normal 的描述符去掉，得到的结果如下，效果如下图所示。

```css
@font-face {
    font-family: "SwitzeraADF";
    src: url("SwitzeraADF-Regular.otf") format("opentype");
}

@font-face {
    font-family: "SwitzeraADF";
    font-weight: bold;
    src: url("SwitzeraADF-Bold.otf") format("opentype");
}

@font-face {
    font-family: "SwitzeraADF";
    font-style: italic;
    src: url("SwitzeraADF-Italic.otf") format("opentype");
}

@font-face {
    font-family: "SwitzeraADF";
    font-weight: bold;
    font-style: italic;
    src: url("SwitzeraADF-BoldItalic.otf") format("opentype");
}

@font-face {
    font-family: "SwitzeraADF";
    font-weight: bold;
    font-stretch: condensed;
    src: url("SwitzeraADF-BoldCond.otf") format("opentype");
}

@font-face {
    font-family: "SwitzeraADF";
    font-style: italic;
    font-stretch: condensed;
    src: url("SwitzeraADF-CondItalic.otf") format("opentype");
}

@font-face {
    font-family: "SwitzeraADF";
    font-weight: bold;
    font-style: italic;
    font-stretch: condensed;
    src: url("SwitzeraADF-BoldCondItalic.otf") format("opentype");
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC5%E7%AB%A0%EF%BC%9A%E5%AD%97%E4%BD%93/%E4%BD%BF%E7%94%A8%E4%B8%8D%E5%90%8C%E7%9A%84%E5%AD%97%E5%9E%8B.png)

可以看出，只这三个描述符就有这么多组合方式，毕竟 font-weight 有 11 种可能的值，font-stretch 有 10 种可能的值，不过不一定都用得到。其实，多数字体族不会像 switzeraADF 这样提供如此多的字型（共计 24 种），因此没必要所有组合都写出来。然而，你要知道可以这么做，以防某些情况下需要使用特殊的字体渲染紧缩的加粗文本，避免用户代理自行计算。

























