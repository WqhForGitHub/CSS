<h2 id="OxHB1">字体族</h2>
<h3 id="r1H4c">使用通用字体族</h3>
|                                                                font-family<br/>取值：[  <family-name>  |  <generic-family>  ]#<br/>初始值：由用户代理指定<br/>适用于：所有元素<br/>计算值：指定的值<br/>继承性：是<br/>动画性：否 |
| --- |




---

<h2 id="PCxum">使用 @font-face </h2>
1. @font-face 的作用是让你在设计中使用自定义的字体。假设你想使用的字体没有广泛安装，而是个十分特别的字体，借助 @font-face 的魔力。你可以定义一个专门的字体族名称，对应于服务器上的一个字体文件。用户代理将下载那个文件，使用它渲染页面中的文本，就好像用户的设备中安装了那个字体一样。下面举个例子：

```css
@font-face {
  font-family: "SwitzeraADF";
  src: url("SwitzeraADF-Regular.otf");
}
```

总结：@font-face 是惰性加载字型的。这表明，仅当需要使用指定的字型渲染文本时，才会加载，否则不加载。其实，浏览器不管是否需要，都会先行加载声明的全部字型，这是浏览器的缺陷。



<h3 id="mB50E">必须的描述符</h3>
1. 描述符中有两个是必需的：font-family 和 src。

|                                                                      font-family<br/>取值：<family-name><br/>初始值：未定义 |
| --- |


|                                                                         src<br/>初始值：未定义 |
| --- |


2. 其实，@font-face 做的是低层定义，是为字体相关的属性服务的。通过描述符 font-family: "SwitzeraADF"；定义一个字体族名称之后，用户代理的字体族名称表中便会出现 "SwitzeraADF"条目，与 Helvetica、Georgia、Courier 等具有同等地位，可以在 font-family 属性的值中引用：

```css
@font-face {
  font-family: "SwitzeraADF";
  src: url("SwitzeraADF-Regular.otf"),
       url("/fonts/SwitzeraADF-Regular.otf");
}

h1 {font-family: SwitzeraADF, Helvetica, sans-serif;}
```

   总结：src 描述符中以逗号分隔的列表用于提供后备字体文件。如此一来，一旦用户代理无法从第一个源下载，就会尝试从下一个源中下载字体文件。    



3. 如果想告诉用户代理所用的字体是什么格式，可以使用可选的 format()：

```css
@font-face {
  font-family: "SwitzeraADF";
  src: url("SwitzeraADF-Regular.otf") format("opentype"),
       url("SwitzeraADF-Regular.true") format("truetype");
}
```

| 值 | 格式 |
| --- | --- |
| embedded-opentype | EOT(Embedded OpenType) |
| opentype | OTF(OpenType) |
| svg | SVG(Scalable Vector Graphics) |
| truetype | TTF(TrueType) |
| woff | WOFF(Web Open Font Format) |


4. 除了使用 url() 和 format() 组合之外，还可以使用 local()（名称表明了作用）指定也已经安装在用户设备中的字体族名称（可以是多个）：

```css
@font-face {
  font-family: "SwitzeraADF";
  src: local("Switzera-Regular"),
       local("SwitzeraADF-Regular"),
       url("SwitzeraADF-Regular.otf") format("opentype"),
       url("SwitzeraADF-Regular.true") format("truetype");
}
```

 总结：这里，用户代理先检查设备中是否有名为 "Switzera-Regular" 或 "SwitzeraADF-Regular" 的字体族，如果有，使用 SwitzeraADF 这个名称指代本地安装的字体；如果没有，尝试从远端下载 url() 中指定的字体文件。   



**万全之策**

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

****

<h3 id="eME6q">其他字体描述符</h3>
下面这些字体描述符是可选的，不必一定在 @font-face 规则中列出。CSS 规定，描述符不像属性那样可以没有默认值。如果没有某个可选的描述符，它的值将被设为默认值。因此，如果未列出 font-weight，其默认值为 normal。

| 描述符 | 默认值 | 说明 |
| --- | --- | --- |
| font-style | normal | 区分常规、斜体和倾斜字型 |
| font-weight | normal | 区分不同的字重（例如加粗） |
| font-stretch | normal | 区分不同的字符宽度（例如紧缩和加宽） |
| font-variant | normal | 区分众多字形变体（例如小号大写字母），在很多方面与 CSS 中的 font-feature-settings 很像 |
| font-feature-settings | normal | 直接访问 OpenType 的低层特性（例如启用连字） |
| unicode-range | U+0-10FFFF | 定义指定字体中可用的字符范围 |


**限制字符范围**

|                                                              unicode-range<br/>取值：<urange>#<br/>初始值：U+0-10FFFF |
| --- |


```css
@font-face {
  font-family: "MyFont";
  src: url("myfont-general.otf") format("opentype");
}

@font-face {
  font-family: "MyFont";
  src: url("myfont-math.otf") format("opentype");
  unicode-range: U+22??;
}
```

<h3 id="bHRHN">组合描述符</h3>
未声明的描述符使用默认值

```css
@font-face {
  font-family: "SwitzeraADF";
  src: url("SwizeraADF-Regular.otf") format("opentype");
}

@font-face {
  font-family: "SwitzeraADF";
  font-weight: bold;
  src: url("SwizeraADF-Bold.otf") format("opentype");
}

@font-face {
  font-family: "SwitzeraADF";
  font-style: italic;
  src: url("SwizeraADF-Italic.otf") format("opentype");
}
```



---

<h2 id="F8LRW">字重</h2>
|                                                              font-weight<br/>取值：normal  |  bold  |  bolder  |  lighter  |  100 |  200  | 300  | 400  |  500  | 600  |  700  |  800  |  900  <br/>初始值：normal<br/>适用于：所有元素<br/>计算值：其中一个数值（100 等），或者一个数值加一个相对值（bolder 或 lighter）<br/>备注：有对应的 @font-face 描述符<br/>继承性：是<br/>动画性：否 |
| --- |


---

<h2 id="tQ8hB">字号</h2>
|                                                              font-size<br/>取值：xx-small  |  x-small  |  small  |  medium  |  large  |  x-large  |  xx-large  |  smaller  |  larger  |  <length>  |  <percentage><br/>初始值：medium<br/>适用于：所有元素<br/>百分数：根据父元素的字号计算<br/>计算值：一个绝对长度<br/>继承性：是<br/>动画性：是（仅限数字关键字） |
| --- |


---

<h2 id="qkRag">字形</h2>
|                                                              font-style<br/>取值：italic  |  oblique  |  normal<br/>初始值：normal<br/>适用于：所有元素<br/>计算值：指定的值<br/>备注：有对应的 @font-face 描述符<br/>继承性：是<br/>动画性：否 |
| --- |


---

<h2 id="Cm9PE">字体拉伸</h2>
|                                                              font-stretch<br/>取值：normal  |  ultra-condensed  |  extra-condensed  |  condensed  |  semi-conodensed  |  expanded  |  extra-expanded  |  ultra-expanded<br/>初始值：normal<br/>适用于：所有元素<br/>继承性：是<br/>动画性：否<br/>备注：有对应的 @font-face 描述符（见下文） |
| --- |


---

<h2 id="sntDT">字距调整</h2>
|                                                           font-kerning<br/>取值：auto  |  normal  |  none<br/>初始值：auto<br/>适用于：所有元素<br/>继承性：是<br/>动画性：否 |
| --- |


---

<h2 id="yScQP">字体变形</h2>
|                                                           font-variant<br/>取值：normal  |  small-caps<br/>初始值：normal<br/>适用于：所有元素<br/>计算值：指定的值<br/>继承性：是<br/>动画性：否<br/>备注：有对应的 @font-face 描述符（见下文） |
| --- |


---

<h2 id="IYrzC">字体特性</h2>
|                                                         font-feature-settings<br/>取值：normal  |  <feature-tag-value>#<br/>初始值：normal  <br/>备注：有对应的 @font-face 描述符（见下文） |
| --- |


---

<h2 id="I3KIc">字体合成</h2>
|                                                          font-synthesis<br/>取值：none  |  weight  ||  style<br/>初始值：weight  style<br/>适用于：所有元素<br/>继承性：是<br/>动画性：否 |
| --- |






