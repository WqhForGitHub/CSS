# 2.1 样式的基本规则

<br>

# 2.2 群组

```html
<!DOCTYPE html>
<html>
<head>
<title>CSS Grouping Selectors</title>
<style>
  h1, h2, p {
    color: blue;
    font-family: sans-serif;
    text-align: center;
  }

  div, article {
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 10px;
  }

  #intro, .highlight {
    font-weight: bold;
  }
</style>
</head>
<body>

  <h1>This is a heading 1</h1>
  <h2>This is a heading 2</h2>
  <p>This is a paragraph.</p>

  <div>This is a div element.</div>
  <article>This is an article element.</article>

  <p id="intro">This is an introductory paragraph.</p>
  <span class="highlight">This is a highlighted span.</span>

</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-1.png)

<br>

# 2.3 类选择符和 ID 选择符

## 多个类

```html
<li class="left ui-class-selector">
```

```css
li.left.ui-class-selector {}

.left.ui-class-selector {}
```

<br>

# 2.4 属性选择符

**`以下是不同类型的属性选择器：`** 

- **`[attr]：选择具有 attr 属性的元素`** 
- **`[attr=value]：选择 attr 属性的值等于 value 的元素`** 
- **`[attr~=value]：选择 attr 属性的值包含 value 的元素（value 必须是完整的单词，且以空格分隔）`** 
- **`[attr|=value]：选择 attr 属性的值等于 value 或以 value- 开头的元素（用于语言代码匹配）`** 
- **`[attr^=value]：选择 attr 属性的值以 value 开头的元素`** 
- **`[attr$=value]：选择 attr 属性的值以 value 结尾的元素`** 
- **`[attr*=value]：选择 attr 属性的值包含 value 的元素`** 
- **`[attr operator value i]：不区分大小写地匹配属性值`** 
- **`[attr operator value s]：区分大小写地匹配属性值`** 

<br>

```html
<!DOCTYPE html>
<html>
<head>
<title>CSS Attribute Selectors</title>
<style>
  /* 选择具有 title 属性的所有 <a> 元素 */
  a[title] {
    color: purple;
  }

  /* 选择 href 属性等于 "https://example.org" 的所有 <a> 元素 */
  a[href="https://example.org"] {
    color: green;
  }

  /* 选择 href 属性包含 "example" 的所有 <a> 元素 */
  a[href*="example"] {
    font-size: 2em;
  }

  /* 选择 href 属性以 ".org" 结尾的所有 <a> 元素，不区分大小写 */
  a[href$=".org" i] {
    font-style: italic;
  }

  /* 选择 class 属性包含单词 "logo" 的所有 <a> 元素 */
  a[class~="logo"] {
    padding: 2px;
  }

  /* 选择 lang 属性等于 "en-us" 的所有 <div> 元素 */
  div[lang="en-us"] {
    color: blue;
  }

  /* 选择 lang 属性以 "zh" 开头的所有 <div> 元素 */
  div[lang|="zh"] {
    color: red;
  }
</style>
</head>
<body>

  <a href="#internal" title="Internal link">Internal link</a><br>
  <a href="http://example.com">Example link</a><br>
  <a href="#InSensitive">Insensitive internal link</a><br>
  <a href="http://example.org">Example org link</a><br>
  <a href="https://example.org">Example https org link</a><br>
  <a href="https://www.example.com/images/logo.png" class="logo">Logo link</a>

  <div lang="en-us">Hello World! (US English)</div>
  <div lang="zh-Hans-CN">你好世界！(简体中文)</div>
  <div lang="zh-Hant-TW">你好世界！(繁體中文)</div>

</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-2.png)

<br>

# 2.5 根据文档结构选择

## 后代选择符

```html
<!DOCTYPE html>
<html>
<head>
<style>
ul li {
  color: blue;
}

ul div {
  font-weight: bold;
}
</style>
</head>
<body>

<ul class="my-things">
  <li>
    <div>Item 1</div>
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
  <li>
    <div>Item 2</div>
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
</ul>

</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-3.png)

<br>

## 选择子元素

```html
<!DOCTYPE html>
<html>
<head>
<style>
/* 样式化 "my-things" 列表中的直接列表项子元素 */
ul.my-things > li {
  color: blue;
}

/* 样式化 "my-things" 列表中的直接 div 子元素 */
ul.my-things > div {
  font-weight: bold;
}
</style>
</head>
<body>

<ul class="my-things">
  <li>Item 1</li>
  <li>Item 2
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
  <div>This is a div</div>
</ul>

</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-4.png)

<br>

## 选择紧邻同胞元素

```html
<!DOCTYPE html>
<html>
<head>
<style>
/* 选择紧跟在 h1 元素后的 p 元素 */
h1 + p {
  font-size: 18px;
  color: green;
}
</style>
</head>
<body>

<h1>这是一个标题</h1>
<p>这是紧跟在 h1 元素后的段落。</p>
<p>这是另一个段落，但它不是紧跟在 h1 元素后。</p>

</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-5.png)

<br>

## 选择后续同胞

```html
<!DOCTYPE html>
<html>
<head>
<style>
/* 选择 h1 元素后的所有 p 元素 */
h1 ~ p {
  font-size: 16px;
  color: purple;
}
</style>
</head>
<body>

<h1>这是一个标题</h1>
<p>这是 h1 元素后的第一个段落。</p>
<p>这是 h1 元素后的第二个段落。</p>
<div>
  <p>这个段落不在 h1 元素后，所以不会被选中。</p>
</div>

</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-6.png)

<br>

# 2.6 伪类选择符

**`它们允许你基于元素的状态或位置等信息来设置元素的样式，而无需修改 HTML 结构或添加额外的类名`**

<br>

## :hover

**`当鼠标指针悬停在元素上时应用样式`** 

```css
a:hover {
    color: red;
}
```

<br>

## :active

**`当元素被激活时（例如，鼠标点击时）应用样式`** 

```css
button:active {
    background-color: yellow;
}
```

<br>

## :focus

**`当元素获得焦点时（例如，通过点击或 Tab 键）应用样式`** 

```css
input:focus {
    border: 2px solid blue;
}
```

<br>

## :visited

**`用于选择已访问的链接`**

```css
a:visited {
    color: purple;
}                             
```

<br>

## :first-child

**`选择作为父元素的第一个子元素的元素`** 

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>
    Item 3
    <ul>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
      <li>Item 3.3</li>
    </ul>
  </li>
</ul>
```

```css
ul li {
  color: blue;
}

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-8.png)

<br>

## :last-child

**`选择作为父元素的最后一个子元素的元素`** 

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>
    Item 3
    <ul>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
      <li>Item 3.3</li>
    </ul>
  </li>
</ul>
```

```css
ul li {
  color: blue;
}

ul li:last-child {
  border: 1px solid red;
  color: red;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-9.png)



<br>

## :nth-child(n)

**`选择作为父元素的第 n 个子元素的元素色。`**

```css
p:nth-child(3) {
    color: blue;
}
```

**`此规则会将三个 <p> 元素的文本颜色设置为蓝色`**

<br>

### 创建交替颜色的列表

```html
<!DOCTYPE html>
<html>
<head>
<style>
ul {
  list-style-type: none; /* 移除列表的默认样式 */
  padding: 0;
}

li {
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
}

li:nth-child(even) {
  background-color: #f2f2f2; /* 偶数行的背景颜色 */
}
</style>
</head>
<body>

<h2>带有交替颜色的列表</h2>

<ul>
  <li>第一个列表项</li>
  <li>第二个列表项</li>
  <li>第三个列表项</li>
  <li>第四个列表项</li>
  <li>第五个列表项</li>
  <li>第六个列表项</li>
</ul>

</body>
</html>
```

**`在此示例中，:nth-child(even) 伪类用于选择偶数位置的 <li> 元素，并将它们的背景颜色设置为浅灰色，从而创建一个交替颜色的列表`**

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-7.png)

<br>

## :nth-of-type(n)

**`选择父元素的第 n 个指定类型的子元素`** 

```css
p:nth-of-type(3) {
  font-style: italic;
}
```

<br>

**`:nth-child(n) 选择器选择的是父元素下的第 n 个子元素，而不考虑元素的类型。而 :nth-of-type(n) 选择器只选择父元素下特定类型的第 n 个元素`** 

```html
<div>
    <p>第一个段落</p>
    <div>这是一个 div</div>
    <p>第二个段落</p>
    <p>第三个段落</p>
</div>
```

* **`p:nth-child(2) 不会选择任何元素，因为父元素的第二个子元素是一个 <div> 元素。`** 
* **`p:nth-of-type(2) 会选择第二个 <p> 元素（内容为第二个段落）`** 

<br>

## :disabled

**`选择被禁用的表单元素`**

```css
input:disabled {
    background-color: #ddd;
    color: #999;
}
```

<br>

## :checked

**`选择被选中的复选框或单选按钮`**

```css
input[type="checkbox"]:checked + label {
    font-weight: bold;
}
```

<br>

## :not(selector)

**`用于排除选择器选中的元素`**

```css
p:not(.intro) {
    font-size: 14px;
}
```

**`选择所有不包含 intro 类的段落，并将它们的字体大小设置为 14 像素`**

<br>

## :empty

```html
<!DOCTYPE html>
<html>
<head>
<style>
.message {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.message:empty {
  display: none; /* 默认隐藏空的消息框 */
}
</style>
</head>
<body>

<div class="message">
  <p>这是一条消息。</p>
</div>

<div class="message">
  <!-- 这个消息框是空的 -->
</div>

</body>
</html>
```

**`在这个例子中，第一个消息框包含一个 <p> 元素，因此会正常显示。第二个消息框是空的，因此会被 :empty 伪类选择器选中，并被隐藏。`**

<br>

## :required 和 :optional

```css
input:required {
    border-left: 5px solid red;
}

input:optional {
    border-left: 5px solid green;
}
```

**`required 属性的输入框左边会显示 5 像素的红色边框，optional 属性的输入框左边会显示 5 像素的绿色边框`**

<br>

## :valid 和 :invalid

```css
input:valid {
    border-color: green;
}

input:invalid {
    border-color: red;
}
```

**`内容 valid 的输入框边框颜色会显示为绿色，内容 invalid 的输入框边框颜色会显示为红色`**

<br>

## :lang(language)

**`基于元素的语言选择元素`**

```css
:lang(fr) > q {
    quotes: "<<" ">>";
}
```

**`所有法语句子的引号显示为 << 和 >>`**

<br>

## :root

**`选择文档的根元素。在 HTML 中，根元素始终是 <html> 元素。`** 

```css
:root {
    --main-bg-color: coral;
}

body {
    background-color: var(--main-bg-color);
}
```

**`定义一个 CSS 变量 --main-bg-color，并在 body 元素中使用它来设置背景颜色`**

<br>

## :target

```html
<div class="tabs">
  <a href="#tab1">选项卡 1</a>
  <a href="#tab2">选项卡 2</a>
  <a href="#tab3">选项卡 3</a>
</div>

<div id="tab1" class="tab-content">
  <p>这是选项卡 1 的内容。</p>
</div>

<div id="tab2" class="tab-content">
  <p>这是选项卡 2 的内容。</p>
</div>

<div id="tab3" class="tab-content">
  <p>这是选项卡 3 的内容。</p>
</div>
```

```css
.tab-content {
    display: none;
}

.tab-content:target {
    display: block; /* 当 URL 包含相应的 #tabId 时显示 */
}
```

**`在这个例子中，当 URL 包含 #tab1、#tab2 或 #tab3 时，相应的选项卡内容会显示出来`**

<br>

# 2.7 伪元素选择符

**`伪元素 是 CSS 中用于选择元素的特定部分，并允许你设置这些部分的样式，而无需修改 HTML 结构。与伪类不同，伪元素实际上创建了文档中不存在的新的虚拟元素，从而允许你对这些元素进行样式化。`**

<br>

## ::before

**`::before 创建一个伪元素，其将成为匹配选中的元素的第一个子元素。常通过 content 属性来为一个元素添加修饰性内容。此元素默认是行级的`**

```html
<span class="ribbon">Notice where the orange box is.</span>
```

```css
.ribbon {
    background-color: #5bc8f7;
}

.ribbon::before {
    content: "Look at this orange box.";
    background-color: #ffba10;
    border-color: black;
    border-style: dotted;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-10.png)

<br>

## ::after

**`在 CSS 中，::after 会创建一个伪元素，作为所选元素的最后一个子元素。它通常用于为具有 content 属性的元素添加修饰内容。默认情况下，它是行向布局的。`**

```html
<span class="ribbon">看看这段文字后的橙色盒子。</span>
```

```css
.ribbon {
    background-color: #5bc8f7;
}

.ribbon::after {
    content: "这是一个漂亮的橙色盒子。";
    background-color: #ffba10;
    border-color: black;
    border-style: dotted;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-11.png)

<br>

## ::first-line

**`::first-line 在区块容器的第一行应用样式`**

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore.
</p>
```

```css
p::first-line {
    text-transform: uppercase;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-12.png)

<br>

## ::first-letter

**`::first-letter 应用于区块容器第一行的第一个字母，但仅当其前面没有其他内容（例如图像或行内表格）时才有效`**

```html
<p>一些段落，一些段落，一些段落，一些段落。</p>
<p>-特殊标点符号的开头。</p>
<p>_特殊标点符号的开头。</p>
<p>"特殊标点符号的开头。</p>
<p>'特殊标点符号的开头。</p>
<p>*特殊标点符号的开头。</p>
<p>#特殊标点符号的开头。</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>"特殊的汉字标点符号开头。</p>
```

```css
p::first-letter {
    color: red;
    font-size: 150%;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-13.png)

<br>

## ::selection

**`::selection 应用于文档中被用户高亮的部分（比如使用鼠标或其他选择设备选中的部分）`**

```html
This text has special styles when you highlight it.
<p>Also try selecting text in this paragraph.</p>
```

```css
::selection {
    color: gold;
    background-color: red;
}

p::selection {
    color: white;
    background-color: blue;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-14.png)

<br>

## ::placeholder

**`::placeholder 表示 <input> 或 <textarea> 元素中的占位文本`**

```html
<input placeholder="默认不透明度" />
<input placeholder="完全不透明" class="force-opaque" />
```

```css
::placeholder {
    color: green;
}

.force-opaque::placeholder {
    opacity: 1;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-15.png)

<br>

## ::marker

**`::marker 匹配列表的标记框（通常为一个符号或数字）。它作用在任何设置了 display: list-item 的元素或伪元素上，例如 <li> 和 <summary> 元素`**

```html
<ul>
  <li>Peaches</li>
  <li>Apples</li>
  <li>Plums</li>
</ul>
```

```css
ul li::marker {
    color: red;
    font-size: 1.5em;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC2%E7%AB%A0%EF%BC%9A%E9%80%89%E6%8B%A9%E7%AC%A6/2-16.png)



 









 





​                                              
