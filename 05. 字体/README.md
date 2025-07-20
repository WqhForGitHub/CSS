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

<br>

# 3. 字重

讲完 @font-face 及其描述符之后，回到字体属性。基本上，我们都用过正常和加粗的文本，这是两个最基本的字重。css 的 font-weight 属性可以精确控制字重。

```css
font-weight

取值：normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 4500 | 600 | 700 | 800 | 900
初始值：normal
适用于：所有元素
计算值：其中一个数值（100 等），或者一个数值加一个相对值（bolder 或 lighter）
备注：有对应的 @font-face 描述符
继承性：是
动画性：否
```

一般来说，字重越大，字体越黑、越粗。标识字型粗细的方式有很多种。例如，SwitzeraADF 字体族有很多变体，例如 SwitzeraADF Bold、SwitzeraADF Extra Bold、SwitzeraADF Light 和 SwitzeraADF Regular，这些变体的字形基本一样，不过字重个不相同。

假如想在文档中使用 SwitzeraADF 不同粗细的变体，可以直接通过 font-family 属性指定，但是完全没必要这么做。毕竟编写下面这样的样式表没什么乐趣可言：

```css
h1 {
    font-family: 'SwitzeraADF Extra Bold', sans-serif;
}

h2 {
    font-family: 'SwitzeraADF Bold', sans-serif;
}

h3 {
    font-family: 'SwitzeraADF Bold', sans-serif;
}

h4,p {
    font-family: SwitzeraADF Regular, sans-serif;
}

small {
    font-family: 'SwitzeraADF Light', sans-serif;
}
```

这样写很繁琐。更合理的做法是，为整个文档指定一个字体族，然后为不同的元素设定不同的字重。为此，可以使用 @font-face 和不同的 font-weight 值。下面是一个十分简单的 font-weight 声明：

```css
b {
    font-weight: bold;
}
```

这个声明的意思是，b 元素应该使用粗体字型显示，即比常规字型粗一些的字型。一般来说这就是我们想要的行为，毕竟 b 元素就是用于加粗文本的。

其实在背后，显示 b 元素时会使用一个较粗的字型。因此，如果一个段落使用 Times 显示，其中有部分加粗文本，那么这个段落其实是使用同一字体的两个字型显示的：Times 和 TimesBold。常规文本使用 Times 显示，加粗文本使用 TimesBold 显示。

<br>

## 1. 字重的工作方式

为了弄清用户代理如何确定一个字体变体的粗细（或字重），先要理解关键字 100 到 900。这些数字关键字对应于字体设计中的九级字重。如果一个字体族中有全部九级字重，那么这些数字就直接对应于预定义的级别，100 是最细的，900 是最粗的。

其实，这些数字并不表示字重本身。css 规范只是说，每个数字对应的权重至少和前面的数字具有相同的字重。因此，100、200、300 和 400 可能都对应于同样细的变体。500 和 600 对应于同样粗的变体。700、800 和 900 则对应同样较粗的变体。只要后面的数字关键字对应的粗细不比前面的数字关键字细就行。

一般，这些数字对应于常见的变体名称（先不考虑 font-weight 的其他值）。400 对应于 normal，700 对应于 bold。其他数字不与 font-weight 的其他关键字对应，不过可以对应于常见的变体名称。在字体的变体重，以 normal regular roman 或 book 等表示的可以分配给数字 400，以 medium 表示的可以分配给数字 500。然而，如果只有一个变体，而且以 medium 表示，那么应该分配给 400， 而非 500。

如果给定的字体族重字重的等级少于 9 个，用户代理要做更多工作。遇到这种情况，用户代理必须填补既定方式的空缺：

* 如果 500 未分配，与 400 对应的字重一样。
* 如果 300 未分配，将其对应于比 400 细的那个变体。如果没有这样一个变体，字重与 400 一样。此时，通常为 normal 或 medium 变体。200 和 100 也是这样处理的。
* 如果 600 未分配，将其对应于比 500 黑的下一个变体。如果没有这样一个变体，字重与 500 一样。700、800 和 900 也是这样处理的。

为了更清楚地说明这种字重处理机制，下面看三个指定字重的例子。第一个例子假设 Karrank% 字体族是 opentype 字体，定义了 9 级字重。此时，9 个数字分别对应 9 级字重，而且关键字 normal 和 bold 分别对应数字 400 和 700.这是最简单的情况，现实重很少遇见（很少有字体族会提供 9 级字重，如果提供的话，价格通常不菲）。

第二个例子假设字体族为本节开头通过的 SwitzeraADF。假设 SwitzeraADF 的变体按照下表所示的对应关系分配了数值。

| 字型                   | 分配的关键字 | 分配的数字    |
| ---------------------- | ------------ | ------------- |
| SwitzeraADF Light      |              | 100, 200, 300 |
| SwitzeraADF Regular    | normal       | 400           |
| SwitzeraADF Medium     |              | 500           |
| SwitzeraADF Bold       | bold         | 600, 700      |
| SwitzeraADF Extra Bold |              | 800, 900      |

前三个数值分配给最细的字型。Regular 字型对应关键词 normal，对应数字 400。因为有 medium 字型，所以分配给数字 500。没有字型可分配给 600，因此将其对应到 bold 字型上。bold 字型还对应 700 和 bold。最后，800 和 900 分配给 extra bold 字型。注意，仅当这个字型的最高的两级字重时，才会这样分配。否则，用户代理可能忽略这个字型，把 800 和 900 分配给 bold 字型或其他变体。

最后一个例子以精简版 Times 为例。在下表中，只有两个字重变体：timesRegular 和 timesBold。

| 字型         | 分配的关键字 | 分配的数字              |
| ------------ | ------------ | ----------------------- |
| TimesRegular | normal       | 100, 200, 300, 400, 500 |
| TimesBold    | bold         | 600, 700, 800, 900      |

关键字 normal 和 bold 分别分配给常规字重和加粗字重，这与预期一样的。数字关键字方面，100 到 300 分配给 regular 字型，因为没有更细的字型了/400 也分配给 regular 字型，这也符合预期，但是 500？它也分配给 regular（或 normal）字型，因为没有 medium 字型。根据前述机制，将其分配给与 400 一样的字型。余下的数字关键字，700 分配给 bold，而由于缺少更粗的字型，所以把 800 和 900 分配给下一个较细的字型，即 bold。最后，600 分配个下一个较粗的字型，即 bold。

font-weight 可以继承，因此如果把一个段落的字重设为 bold：

```css
p.one {
    font-weight: bold;
}
```

那么，这个段落的所有子代都将继承粗体，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC5%E7%AB%A0%EF%BC%9A%E5%AD%97%E4%BD%93/%E7%BB%A7%E6%89%BF%E5%AD%97%E9%87%8D.png)

上述机制没什么反常之处，不过讲到最后两个关键字（bolder 和 lighter）时，你会发现有些不同往常的地方。一般来说，这两个关键字的效果跟你预期一样：渲染的文本比父元素的字重更重或更轻。先来看 bolder。

<br>

## 2. 增大字重

如果把一个元素的字重设为 bolder，用户代理首先要确定从父元素继承的 font-weight 值是什么，然后选择比继承的字重高一级的最小数字。如果找不到，用户代理把元素的字重设为下一个数字值，直到 900。到顶后，就把字重设为 900。下述各种情况的渲染结果如下图所示。

```css
p {
    font-weight: normal;
}

p em {
    font-weight: bolder; /* 文本为粗体，求值结果为 700 */
}

h1 {
    font-wegiht: bold;
}

h1 b {
    font-weight: bolder; /* 如果没有更粗的字型，其值结果为 800 */
}

div {
    font-weight: 100; /* 假设有 light 字型，说明见下文 */
}

div strong {
    font-weight: bolder; /* 文本为常规字型，字重为 400 */
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC5%E7%AB%A0%EF%BC%9A%E5%AD%97%E4%BD%93/%E6%8A%8A%E6%96%87%E6%9C%AC%E5%8F%98%E5%BE%97%E6%9B%B4%E7%B2%97.png)

在第一个示例中，用户代理顺着字重等级向上爬，把 normal 变成 bold。用数字表示，就是从 400 变成 700。在第二个示例中，h1 的字重已经设为 bold。如果没有更粗的字型，用户代理会把 h1 中 b 的字重设为 800，因为这是从 700（等同于 bold）起的下一级。因为 800 和 700 对应同一个字型，所以 h1 中常规的文本和加粗的文本在视觉上没有区别，但字重是不同的。

在最后一个示例中，我们把段落的字重设为最细的字型，而且假设存在 light 变体。此外，再假设这个字体族重还有 regular 和 bold 字型。段落中的 em 将使用 normal 字型，因为这是字体族中下一个较粗的字型。然而，如果字体族中只有 regular 和 bold 字型？此时，声明的求值结果如下：

```css
/* 假设只有 regular 和 bold 两个字型 */
p {
    font-weight: 100; /* 看起来跟 normal 字重一样 */
}

p span {
    font-weight: bolder; /* 对应于 700 */
}
```

可以看出，100 被分配给 normal 字型，不过其字重仍是 100。因此，p 元素重的 span 将继承这个 100，经计算得到的下一个较粗的字型是 bold，其对应的数字字重为 700。

下面更进一步，增加两个规则和一些标记，演示处理过程（结果见下图）：

```css
/* 假设只有 regular 和 bold 两个字型 */
p {
    font-weight: 100; /* 看起来跟 normal 字重一样 */
}

p span {
    font-weight: 400; /* 同样如此 */
}

strong {
    font-weight: bolder; /* 比父元素更粗 */
}

strong b {
    font-weight: bolder; /* 继续加粗 */
}
```

```html
<p>
    This paragraph contains elements of increasing weight: there is an
    <em>emphasized element which contains a <strong>strongly emphasized
    element, and that contains a <b>boldface element</b></strong></em>.
</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC5%E7%AB%A0%EF%BC%9A%E5%AD%97%E4%BD%93/%E5%AD%97%E9%87%8D%E4%B8%8D%E6%96%AD%E5%A2%9E%E5%8A%A0.png)

对后两个嵌套元素来说，font-weight 经计算得到的值逐渐增加，因为两个地方都用了关键字 bolder。如果把段落中的文本换成各元素对应的 font-weight 数字，得到的结果如下：

```html
<p>
    100 <span> 400 <strong> 700 <b> 800 </b></strong> </span>
</p>
```

前三个字重相比，增加的幅度较大，分别从 100 增加到 400，以及从 400 增加到 bold（700）。因为没有比 700 更粗的字型了，所以用户代理把 font-weight 的值上移一个数字级别（800）。此外，如果在 b 元素中插入一个 strong 元素，得到的结果如下：

```html
<p>
    100 <span> 400 <strong> 700 <b> 800 <strong> 900 </strong></b></strong></span>
</p>
```

如果最内层的 strong 元素中还有一个 b 元素，那个 b 元素的字重将变成 900，因为 font-weight 永远不能大于 900。假设只有两个字型，那么文本要么是常规粗细，要么是加粗的，如下图所示。

```html
<p>
    regular <span> regular <strong> bold <b> bold <strong> bold</strong> </b> </strong> </span>
</p>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC5%E7%AB%A0%EF%BC%9A%E5%AD%97%E4%BD%93/%E8%A7%86%E8%A7%89%E4%B8%8A%E7%9C%8B%E5%88%B0%E7%9A%84%E5%AD%97%E9%87%8D%EF%BC%88%E4%BB%A5%E6%95%B0%E5%80%BC%E8%A1%A8%E7%A4%BA%EF%BC%89.png)

<br>

## 3. 减小字重

你可能猜到了，lighter 的工作方式类似，只不过是让用户代理向下减少字重。简单修改一下前面的示例，lighter 的作用就十分明确了：

```css
/* 假设只有 regular 和 bold 两个字型 */
p {
    font-weight: 900; /* 尽量使用最粗的，看起来跟 bold 一样 */
}

p span {
    font-weight: 700; /* 也是 bold */
}

strong {
    font-weight: lighter; /* 比父元素细一些 */
}

b {
    font-weight: lighter; /* 继续变细 */
}
```

```html
<p>
    900 <span> 700 <strong> 400 <b> 300 <strong> 200</strong></b></strong></span>
</p>
<!-- 或者用关键字表示 -->
<p>
    bold <span> bold <strong> regular <b> regular <strong> regular </strong></b></strong></span>
</p>
```

先不管符不符合常理，从下图重可以看出，段落中主文本的字重是 900。把 strong 中文本的字重设为 lighter 后，得到的是较细的字型，即这里的常规字型，以数值衡量的话，是 400（等同于 normal）。接下来减小为 300，这也相当于 normal，因为没有更细的字型存在。自此之后，用户代理一次只能减少一个字重等级，直到 100（上例中没有体现）。第二个段落展示哪些文本为粗体，哪些为增长粗细。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC5%E7%AB%A0%EF%BC%9A%E5%AD%97%E4%BD%93/%E6%96%87%E6%9C%AC%E9%80%90%E6%B8%90%E5%8F%98%E7%BB%86.png)

<br>

## 4. font-weight 描述符

使用 font-weight 描述符可以为字型指定 font-weight 属性支持的字重等级。例如，下述规则为五个字型分配六个不同的字重：

```css
@font-face {
    font-family: "SwitzeraADF";
    font-weight: normal;
    src: url("f/SwitzeraADF-Regular.otf") format("opentype");
}

@font-face {
    font-family: "SwitzeraADF";
    font-weight: bold;
    src: url("f/SwitzeraADF-Bold.otf") format("opentype");
}

@font-face {
    font-family: "SwitzeraADF";
    font-weight: 300;
    src: url("f/SwiteraADF-Light.otf") format("opentype");
}

@font-face {
    font-family: "SwiteraADF";
    font-weight: 500;
    src: url("f/SwitzeraADF-DemiBold.otf") format("opentype");
}

@font-face {
    font-family: "SwiteraADF";
    font-weight: 700;
    src: url("f/SwitzeraADF-Bold.otf") format("opentype");
}

@font-face {
    font-family: "SwitzeraADF";
    font-weight: 900;
    src: url("f/SwitzeraADF-ExtraBold.otf") format("opentype");
}
```

这样分配之后，创作人员便可使用多个字重等级。下述规则的结果如下图所示。

```css
h1, h2, h3, h4 {
    font: 225% SwitzeraADF, Helvetica, sans-serif;
}

h1 {
    font-weight: 900;
}

h2 {
    font-weight: 180%;
    font-weight: 700;
}

h3 {
    font-size: 150%;
    font-weight: 500;
}

h4 {
    font-size: 125%;
    font-weight: 300;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC5%E7%AB%A0%EF%BC%9A%E5%AD%97%E4%BD%93/%E4%BD%BF%E7%94%A8%E5%88%86%E9%85%8D%E4%BA%86%E5%AD%97%E9%87%8D%E7%9A%84%E5%AD%97%E5%9E%8B.png)

不管何时，用户代理都会使用 5.3.1 节所述的解析算法根据 font-weight 属性的值选择字型。font-weight 描述符的值可以是 font-weight 属性可取的任何一个值，但 inherit 关键字除外。











