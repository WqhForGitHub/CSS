# 6.1 缩进和行内对齐

## 1. 缩进文本

```css
text-indent

取值：<length> | <percentage>
初始值：0
适用于：块级元素
百分数：相对于所在块级元素的宽度
计算值：百分数如上，长度值得到绝对长度
继承性：是
动画性：是                                           
```

<br>

### 长度值

```html
<!DOCTYPE html>
<html>
<head>
<style>
    
.length-example {
  text-indent: 2em;
  background-color: lightblue;
  padding: 10px;
  margin-bottom: 10px;
}

</style>
</head>

<body>

<div class="length-example">
  <p>This paragraph demonstrates text-indent using a length value (2em).</p>
</div>

</body>
</html>
```



![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-1.png)

<br>

### 百分数

**`相对块级元素的宽度`**

```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
  width: 200px; /* 设置容器的宽度 */
  background-color: lightyellow;
  padding: 10px;
}

p {
  text-indent: 10%; /* 设置第一行缩进为容器宽度的 10% */
}
</style>
</head>
<body>

<div>
  <p>这是一个段落，演示了 text-indent 属性如何使用百分比值来缩进第一行文本。缩进量是容器宽度的 10%。</p>
</div>

</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-2.png)

<br>

### 继承

```html
<!DOCTYPE html>
<html>
<head>
<style>
.parent {
  text-indent: 50px; /* 父元素设置了 text-indent */
  background-color: lightgreen;
  padding: 10px;
}

.child {
  background-color: lightcoral;
  padding: 5px;
}
</style>
</head>
<body>

<div class="parent">
  <p>This is a paragraph in the parent element.</p>
  <div class="child">
    <p>This is a paragraph in the child element. It inherits the text-indent from the parent.</p>
  </div>
</div>

</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-3.png)

<br>

## 2. 文本对齐

**`它控制元素中各文本行的对齐方式`**

```css
text-align

取值：start | end | left | right | center | justify | match-parent | start end
初始值：在 CSS3 中是 start，在 CSS2.1 中，由用户代理指定，有可能根据书写方向而定（例如，英语等西方语言是 left）
适用于：块级元素
计算值：指定的值，match-parent 除外
继承性：是 
动画性：否
备注：CSS2 支持使用 <length> 值，但由于缺少实现，CSS 2.1 将其删掉了
```

```html
<!DOCTYPE html>
<html>
<head>
<style>
/* 示例 1: 左对齐 */
.left {
  text-align: left;
  background-color: lightblue;
  padding: 10px;
  margin-bottom: 10px;
}

/* 示例 2: 居中对齐 */
.center {
  text-align: center;
  background-color: lightgreen;
  padding: 10px;
  margin-bottom: 10px;
}

/* 示例 3: 右对齐 */
.right {
  text-align: right;
  background-color: lightcoral;
  padding: 10px;
  margin-bottom: 10px;
}

/* 示例 4: 两端对齐 */
.justify {
  text-align: justify;
  background-color: lightyellow;
  padding: 10px;
  margin-bottom: 10px;
  width: 300px; /* 需要指定宽度才能看到两端对齐的效果 */
}

/* 示例 5: start 对齐 */
.start {
  text-align: start; /* 根据文档流方向对齐，ltr 时表现为 left，rtl 时表现为 right */
  background-color: lightcyan;
  padding: 10px;
  margin-bottom: 10px;
}

/* 示例 6: end 对齐 */
.end {
  text-align: end; /* 根据文档流方向对齐，ltr 时表现为 right，rtl 时表现为 left */
  background-color: lightpink;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
</head>
<body>

<div class="left">
  <p>This paragraph is left-aligned.</p>
</div>

<div class="center">
  <p>This paragraph is center-aligned.</p>
</div>

<div class="right">
  <p>This paragraph is right-aligned.</p>
</div>

<div class="justify">
  <p>This paragraph is justified. The text is spaced to line up its left and right edges to the left and right edges of the line box, except for the last line.</p>
</div>

<div class="start">
  <p>This paragraph is start-aligned. In a left-to-right (LTR) context, it will be left-aligned.</p>
</div>

<div class="end">
  <p>This paragraph is end-aligned. In a left-to-right (LTR) context, it will be right-aligned.</p>
</div>

</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-4.png)

<br>

## 3. 对齐最后一行

**`有时，你可能想使用不同于其他内容的方式对齐元素的最后一行。例如，在两端对齐的文本块中，可能想左对齐最后一行，或者把左对齐换成居中对齐。此时，可以使用 text-align-last 属性。`**

```      css
text-align-last

取值：auto | start | end | left | right | center | justify
初始值：auto
适用于：块级元素
计算值：指定的值
继承性：是
动画性：否
```

```html
<!DOCTYPE html>
<html>
<head>
<style>
.container {
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}

.text-align-left {
  text-align-last: left;
}

.text-align-center {
  text-align-last: center;
}

.text-align-right {
  text-align-last: right;
}

.text-align-justify {
  text-align: justify; /* 需要先设置 text-align: justify */
  text-align-last: justify;
}

.text-align-start {
  text-align-last: start; /* 根据文档流方向对齐 */
}

.text-align-end {
  text-align-last: end; /* 根据文档流方向对齐 */
}
</style>
</head>
<body>

<h2>text-align-last Examples</h2>

<div class="container text-align-left">
  <p>This is a paragraph with text-align-last set to left. The last line of this paragraph will be aligned to the left.</p>
</div>

<div class="container text-align-center">
  <p>This is a paragraph with text-align-last set to center. The last line of this paragraph will be centered.</p>
</div>

<div class="container text-align-right">
  <p>This is a paragraph with text-align-last set to right. The last line of this paragraph will be aligned to the right.</p>
</div>

<div class="container text-align-justify">
  <p>This is a paragraph with text-align set to justify and text-align-last set to justify. The last line will be justified.</p>
</div>

<div class="container text-align-start">
  <p>This is a paragraph with text-align-last set to start. The last line will be aligned to the start of the text direction.</p>
</div>

<div class="container text-align-end">
  <p>This is a paragraph with text-align-last set to end. The last line will be aligned to the end of the text direction.</p>
</div>

</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-5.png)

<br>

# 6.2 块级对齐

## 1. 行的高度

```css
line-height

取值：<number> | <length> | <percentage> | normal
初始值：normal
适用于：所有元素
百分数：相对于元素的字号
计算值：长度和百分数，得到绝对值，否则，是指定的值
继承性：是
动画性：是
```

<br>

### 1. 带单位的值

- **`px (像素)：使用像素值设置固定的行高`** 
- **`em：相对于当前元素的字体大小。例如，1em 等于当前元素的字体大小`** 
- **`rem：相对于根元素 (<html>) 的字体大小`**

```html
<!DOCTYPE html>
<html>
<head>
<style>
.pixel-example {
  font-size: 16px;
  line-height: 24px; /* 固定行高为 24 像素 */
  background-color: lightblue;
  padding: 10px;
  margin-bottom: 10px;
}

.em-example {
  font-size: 16px;
  line-height: 1.5em; /* 行高为字体大小的 1.5 倍 */
  background-color: lightgreen;
  padding: 10px;
  margin-bottom: 10px;
}

.rem-example {
  font-size: 16px;
  line-height: 1.5rem; /* 行高为根元素字体大小的 1.5 倍 */
  background-color: lightcoral;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
</head>
<body>

<div class="pixel-example">
  <p>This paragraph has a line-height of 24px.</p>
</div>

<div class="em-example">
  <p>This paragraph has a line-height of 1.5em.</p>
</div>

<div class="rem-example">
  <p>This paragraph has a line-height of 1.5rem.</p>
</div>

</body>
</html>
```



<br>

### 2. 行高的继承

- **`继承方式：line-height 属性是可继承的。这意味着，如果没有显式设置子元素的 line-height，子元素会继承父元素的 line-height 值`** 
- **`推荐做法：为了避免不必要的麻烦，建议在根元素（如 body）上设置一个合适的 line-height 值，然后让其他元素继承这个值`** 

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-size: 16px;
  line-height: 1.6; /* 在 body 上设置 line-height */
}

.container {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

p {
  margin: 0; /* 移除 p 元素的默认 margin */
}
</style>
</head>
<body>

<div class="container">
  <p>This paragraph inherits the line-height from the body element.</p>
</div>

<div class="container">
  <p style="line-height: 1.8;">This paragraph overrides the inherited line-height.</p>
</div>

</body>
</html>
```

<br>

### 3. 数字值

- **`定义：当 line-height 设置为纯数字时，这个数字会作为缩放因子，乘以元素的 font-size 来计算行高`** 
- **`优点：推荐使用数字值，因为子元素会继承这个缩放因子，而不是计算后的具体数值。这样可以避免在不同字体大小的元素中出现意外的行高`** 

```html
<!DOCTYPE html>
<html>
<head>
<style>
.parent {
  font-size: 16px;
  line-height: 1.5; /* 数字值 */
  border: 1px solid #ccc;
  padding: 10px;
}

.child {
  font-size: 20px;
  border: 1px solid #ddd;
  padding: 5px;
}
</style>
</head>
<body>

<div class="parent">
  <p>This is a parent element with line-height: 1.5.</p>
  <div class="child">
    <p>This is a child element with a different font-size. The line-height is still based on the parent's scaling factor.</p>
  </div>
</div>

</body>
</html>
```

- **`.parent 的 font-size 为 16px，line-height 为 1.5。因此，.parent 的行高为 16px * 1.5 = 24px。`** 
- **`.child 的 font-size 为 20px，但它继承了父元素的缩放因子 1.5。因此，.child 的行高为 20px * 1.5 = 30px。`** 

<br>

## 2. 纵向对齐文本

```css
vertical-align

取值：baseline | sub | super | top | text-top | middle | bottom | text-bottom | <length> | <percentage>
初始值：baseline
适用于：行内元素和单元格
百分数：相对元素的 line-height 值
计算值：百分数和长度值，得到绝对长度，否则是指定的值
继承性：否
动画性：<length>、<percentage>
备注：用在单元格上时，只能取 baseline、top、middle 和 bottom
```

<br>

### 行内元素

```html
<!DOCTYPE html>
<html>
<head>
<style>

</style>
</head>
<body>

<p>
top:         <img style="vertical-align: top" src="star.png" alt="star"/>
middle:      <img style="vertical-align: middle" src="star.png" alt="star"/>
bottom:      <img style="vertical-align: bottom" src="star.png" alt="star"/>
super:       <img style="vertical-align: super" src="star.png" alt="star"/>
sub:         <img style="vertical-align: sub" src="star.png" alt="star"/>
</p>

<p>
text-top:    <img style="vertical-align: text-top" src="star.png" alt="star"/>
text-bottom: <img style="vertical-align: text-bottom" src="star.png" alt="star"/>
0.2em:       <img style="vertical-align: 0.2em" src="star.png" alt="star"/>
-1em:        <img style="vertical-align: -1em" src="star.png" alt="star"/>
20%:         <img style="vertical-align: 20%" src="star.png" alt="star"/>
-100%:       <img style="vertical-align: -100%" src="star.png" alt="star"/>
</p>


</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-6.png)

<br>

### 单元格

```html
<!DOCTYPE html>
<html>
<head>
<style>
table {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}
    
table,
th,
td {
	border: 1px solid black; 
}

td {
	padding: 0.5em;
    font-family: monospace;
}
    
.bottom {
	vertical-align: bottom;
}
    
.baseline {
	vertical-align: baseline;
}
    
.top {
	vertical-align: top;
}
    
.middle {
	vertical-align: middle;
}
</style>
</head>
<body>

<table>
    <tr class="bottom">
        <td class="baseline">baseline</td>
        <td class="top">top</td>
        <td class="middle">middle</td>
        <td>bottom</td>
        <td>Row's style</td>
        <td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium felis eu sem mattis vulputate.
        </td>
    </tr>
</table>
    
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-7.png)

<br>

### 百分数

```html
<!DOCTYPE html>
<html>
<head>
<style>
.container {
  font-size: 20px;
  line-height: 3em; /* 设置行高，便于观察对齐效果 */
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}

.superscript {
  vertical-align: 50%; /* 相对于 line-height 的 50% */
  font-size: 0.8em; /* 缩小字体，更像上标 */
}

.subscript {
  vertical-align: -50%; /* 相对于 line-height 的 -50% */
  font-size: 0.8em; /* 缩小字体，更像下标 */
}
</style>
</head>
<body>

<h2>vertical-align Percentage Examples</h2>

<div class="container">
  Normal text
  <span class="superscript">Superscript (50%)</span>
  Normal text
</div>

<div class="container">
  Normal text
  <span class="subscript">Subscript (-50%)</span>
  Normal text
</div>

</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-8.png)

<br>

# 6.3 单词间距和字符间距

## 1. 单词间距

**`word-spacing 属性的值为长度，可正可负。指定的长度值追加到单词的标准间距上。其实，word-spacing 属性用于修改单词之间的距离。因此，默认值 normal 等同于把值设为零（0）。`**

```css
word-spacing

取值：<length> | normal
初始值：normal
适用于：所有元素
计算值：normal 的结果是绝对长度 0，否则为指定的具体长度
继承性：是
动画性：是                                                     
```

```html
<!DOCTYPE html>
<html>
<head>
<style>
    
#mozdiv1 {
  word-spacing: 15px;
}

#mozdiv2 {
  word-spacing: 5em;
}

</style>
</head>
<body>
    
<div id="mozdiv1">Lorem ipsum dolor sit amet.</div>
<div id="mozdiv2">Lorem ipsum dolor sit amet.</div>

</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-9.png)

## 2. 字符间距

**`这两个属性之间唯一的区别是，letter-spacing 属性修改的是字符或字母之间的距离。`**

```css
letter-spacing

取值：<length> | normal
初始值：normal
适用于：所有元素
计算值：长度值得到绝对长度，否则是 normal
继承性：是
动画性：是
```

```html
<!DOCTYPE html>
<html>
<head>
<style>

.normal {
  letter-spacing: normal;
}
.em-wide {
  letter-spacing: 0.4em;
}
.em-wider {
  letter-spacing: 1em;
}
.em-tight {
  letter-spacing: -0.05em;
}
.px-wide {
  letter-spacing: 6px;
}

</style>
</head>
<body>
    
<p class="normal">letter spacing</p>
<p class="em-wide">letter spacing</p>
<p class="em-wider">letter spacing</p>
<p class="em-tight">letter spacing</p>
<p class="px-wide">letter spacing</p>

</body>
</html> 
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-10.png)

<br>

# 6.4 文本转换

**`讲完各个对齐属性之后，下面介绍如何使用 text-transform 属性转变文本的大小写`**

```css
text-transform

取值：uppercase | lowercase | capitalize | none
初始值：none
适用于：所有元素
计算值：指定的值
继承性：是
动画性：否
```

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Transform Example</title>
  <style>
    .uppercase { text-transform: uppercase; }
    .lowercase { text-transform: lowercase; }
    .capitalize { text-transform: capitalize; }
    .none { text-transform: none; }    
  </style>
</head>
<body>
  <p class="uppercase">this is some text.</p>
  <p class="lowercase">THIS IS SOME TEXT.</p>
  <p class="capitalize">this is some text.</p>
  <p class="none">This is some Text.</p>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-11.png)

<br>

# 6.5 文本装饰

```css
text-decoration

取值：none | [ underline || overline || line-through || blink ]
初始值：none
适用于：所有元素
计算值：指定的值
继承性：否
动画性：否
```

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Decoration Example</title>
  <style>
    .underline { text-decoration: underline; }
    .overline { text-decoration: overline; }
    .line-through { text-decoration: line-through; }
    .none { text-decoration: none; }
    .custom { text-decoration: underline wavy red; }
    .thick { text-decoration: underline purple 4px; }
  </style>
</head>
<body>
  <p class="underline">This text has an underline.</p>
  <p class="overline">This text has an overline.</p>
  <p class="line-through">This text has a line through it.</p>
  <a class="none" href="#">This link has no underline.</a>
  <p class="custom">This text has a wavy red underline.</p>
  <p class="thick">This text has a thick purple underline.</p>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-12.png)

<br>

## 1. 怪异的装饰

**`属性不被继承，会影响子元素`**

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Decoration Inheritance</title>
  <style>
    .parent {
      text-decoration: line-through;
    }

    .child {
      text-decoration: underline;
      color: red;
      display: inline-block; /* 取消继承效果 */
    }
  </style>
</head>
<body>
  <div class="parent">
    This text has a line through it.
    <a class="child" href="#">This link should have an underline.</a>
  </div>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-13.png)

<br>

# 6.6 文本渲染效果

```                                                         css
text-rendering

取值：auto | optimizeSpped | optimizeLegibility | geometricPrecision
初始值：auto
适用于：所有元素
继承性：是
动画性：是
```

<br>

# 6.7 文本阴影

```css
text-shadow

取值：none | [ <length> || <length> <length> <length>?]#
初始值：none
适用于：所有元素
继承性：否
动画性：是 
```

```css
text-shadow: h-shadow v-shadow blur-radius color;
```

- **`h-shadow：必需。阴影的水平偏移量。正值表示阴影在文本右侧，负值表示阴影在文本左侧`** 
- **`v-shadow：必需。阴影的垂直偏移量。正值表示阴影在文本下方，负值表示阴影在文本上方`** 
- **`blur-radius：可选。阴影的模糊半径。值越大，阴影越模糊。如果未指定，则默认为 0`** 
- **`color：可选。阴影的颜色。如果未指定，则由浏览器决定`** 

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Shadow Example</title>
  <style>
    .shadow-1 { text-shadow: 2px 2px 5px red; }
    .shadow-2 { text-shadow: 3px 3px black; }
    .shadow-3 { text-shadow: -2px -2px 3px blue; }
    .shadow-4 { text-shadow: 2px 2px 4px black, 0 0 8px blue, 0 0 12px darkblue; }
    .shadow-5 { text-shadow: red 2px 5px; }
    .shadow-6 { text-shadow: 2px 2px rgba(0, 0, 0, 0.5); }
  </style>
</head>
<body>
  <p class="shadow-1">This text has a red shadow.</p>
  <p class="shadow-2">This text has a sharp black shadow.</p>
  <p class="shadow-3">This text has a blue shadow on the top-left.</p>
  <p class="shadow-4">This text has multiple shadows.</p>
  <p class="shadow-5">This text has a red shadow.</p>
  <p class="shadow-6">This text has a semi-transparent shadow.</p>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-14.png)

<br>

# 6.8 处理空白

**`它影响用户代理对文档源码中空格、换行符和制表符的处理方式`**

```css
white-space

取值：normal | nowrap | pre | pre-wrap | pre-line
初始值：normal
适用于：全部元素
计算值：指定的值
继承性：否
动画性：否
```

<br>

## normal

**`连续的空白符会被合并，换行符会被当作空格处理。文本会根据容器的宽度自动换行，这是默认值`**

<br>

## nowrap

**`连续的空白符会被合并，但文本不会自动换行。文本会在同一行显示，直到遇到 <br> 标签。`**

<br>

## pre

**`空白符会被保留，文本只会在换行符或 <br> 标签处换行。类似于 HTML 的 <pre> 标签`**

<br>

## pre-wrap

**`空白符会被保留，文本会在换行符、<br> 标签或容器的边界处换行`**

<br>

## pre-line

**`连续的空白符会被合并，但换行符会被保留。文本会在换行 符或容器的边界处换行`**

<br>

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>White Space Example</title>
  <style>
    .normal { white-space: normal; width: 200px; border: 1px solid black; }
    .nowrap { white-space: nowrap; width: 200px; border: 1px solid black; }
    .pre { white-space: pre; width: 200px; border: 1px solid black; }
    .pre-wrap { white-space: pre-wrap; width: 200px; border: 1px solid black; }
    .pre-line { white-space: pre-line; width: 200px; border: 1px solid black; }
  </style>
</head>
<body>
  <p class="normal">
    This   is   some   text
    with   multiple   spaces
    and   line   breaks.
  </p>
  <p class="nowrap">
    This   is   some   text
    with   multiple   spaces
    and   line   breaks.
  </p>
  <p class="pre">
    This   is   some   text
    with   multiple   spaces
    and   line   breaks.
  </p>
  <p class="pre-wrap">
    This   is   some   text
    with   multiple   spaces
    and   line   breaks.
  </p>
  <p class="pre-line">
    This   is   some   text
    with   multiple   spaces
    and   line   breaks.
  </p>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-15.png)

<br>

## 设定制表符的宽度

```css
tab-size

取值：<length> | <integer>
初始值：8
适用于：块级元素
计算值：指定值对应的绝对长度
继承性：是
动画性：是
```

```css
tab-size：<number> | <length>
```

- **`<number>: 一个数字，表示制表符的宽度是空格字符宽度的倍数。必须是非负数`** 
- **`<length>: 一个长度值，表示制表符的固定宽度。必须是非负数`**

<br>

``` html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tab Size Example</title>
  <style>
    .tab-size-4 { tab-size: 4; }
    .tab-size-20px { tab-size: 20px; }
    .tab-size-0 { tab-size: 0; }

    pre {
      white-space: pre; /* 确保制表符有效 */
      border: 1px solid black;
      padding: 10px;
    }
  </style>
</head>
<body>
  <pre class="tab-size-4">
  	This is a line with a tab (tab-size: 4).
  </pre>

  <pre class="tab-size-20px">
  	This is a line with a tab (tab-size: 20px).
  </pre>

  <pre class="tab-size-0">
  	This is a line with a tab (tab-size: 0).
  </pre>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-16.png)

**`注意，如果 white-space 的值导致空白被折叠了，那么 tab-size 就不再起作用了。此时，tab-size 的值还要计算，但是不管源码中有多少制表符，在视觉上都没有体现`**

<br>

# 6.9 换行和断字

```css
hyphens

取值：manual | auto | none
初始值：normal
适用于：所有元素
计算值：指定的值
继承性：是
动画性：否
```

<br>

## word-break

**`如果一串文本太长，一行里放不下，就会软换行。这个概念与换行符和 <br> 元素导致的硬换行是相对的。文本在何处软换行由用户代理（或操作系统）决定，但是创作人员可以使用 word-break 属性影响这一决定`**

```css
word-break

取值：normal | break-all | keep-all
初始值：normal
适用于：所有元素
计算值：指定的值
继承性：是
动画性：是
```

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Word Break Example</title>
  <style>
    .container {
      width: 200px;
      border: 1px solid black;
      margin-bottom: 10px;
      padding: 5px;
    }

    .normal { word-break: normal; }
    .break-all { word-break: break-all; }
    .keep-all { word-break: keep-all; }
  </style>
</head>
<body>
  <div class="container normal">
    <p>This is a long word: supercalifragilisticexpialidocious</p>
    <p>这是一个长句子，包含很多汉字。</p>
  </div>

  <div class="container break-all">
    <p>This is a long word: supercalifragilisticexpialidocious</p>
    <p>这是一个长句子，包含很多汉字。</p>
  </div>

  <div class="container keep-all">
    <p>This is a long word: supercalifragilisticexpialidocious</p>
    <p>这是一个长句子，包含很多汉字。</p>
  </div>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-17.png)

<br>

## line-break

```css
line-break

取值：auto | loose | normal | strict
初始值：auto
适用于：所有元素
计算值：指定的值
继承性：是
动画性：是
```

<br>

## 文本换行

```css
overflow-wrap

取值：normal | break-word
初始值：normal
适用于：所有元素
计算值：指定的值
继承性：是
动画性：是
```

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Overflow Wrap Example</title>
  <style>
    .container {
      width: 200px;
      border: 1px solid black;
      margin-bottom: 10px;
      padding: 5px;
    }

    .normal { overflow-wrap: normal; }
    .break-word { overflow-wrap: break-word; }
    .anywhere { overflow-wrap: anywhere; }
  </style>
</head>
<body>
  <div class="container normal">
    <p>This is a long word: supercalifragilisticexpialidocious</p>
  </div>

  <div class="container break-word">
    <p>This is a long word: supercalifragilisticexpialidocious</p>
  </div>

  <div class="container anywhere">
    <p>This is a long word: supercalifragilisticexpialidocious</p>
  </div>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-18.png)

<br>

**`overflow-wrap: break-word 和 word-break: break-all 看似作用一样，然而并非如此。`**

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Overflow Wrap vs Word Break</title>
  <style>
    .container {
      width: 200px;
      border: 1px solid black;
      margin-bottom: 10px;
      padding: 5px;
    }

    .break-word { overflow-wrap: break-word; }
    .break-all { word-break: break-all; }
  </style>
</head>
<body>
  <h2>overflow-wrap: break-word</h2>
  <div class="container break-word">
    <p>This is a long word: supercalifragilisticexpialidocious</p>
    <p>这是一个长句子，包含很多汉字。</p>
  </div>

  <h2>word-break: break-all</h2>
  <div class="container break-all">
    <p>This is a long word: supercalifragilisticexpialidocious</p>
    <p>这是一个长句子，包含很多汉字。</p>
  </div>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-19.png)

<br>

# 6.10 书写模式

## 1. 设定书写模式

```css
writing-mode

取值：horizontal-tb | vertical-rl | vertical-lr
初始值：horizontal-tb
适用于：除表格行组、表格列组、表格行、表格列、旁注基元素和旁注元素之外的所有元素
计算值：指定的值
继承性：是
动画性：是
```

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Writing Mode Example</title>
  <style>
    .container {
      width: 200px;
      height: 200px;
      border: 1px solid black;
      margin-bottom: 10px;
      padding: 5px;
    }

    .horizontal-tb { writing-mode: horizontal-tb; }
    .vertical-rl { writing-mode: vertical-rl; }
    .vertical-lr { writing-mode: vertical-lr; }
  </style>
</head>
<body>
  <h2>horizontal-tb</h2>
  <div class="container horizontal-tb">
    <p>This is a horizontal text.</p>
  </div>

  <h2>vertical-rl</h2>
  <div class="container vertical-rl">
    <p>This is a vertical text (right to left).</p>
  </div>

  <h2>vertical-lr</h2>
  <div class="container vertical-lr">
    <p>This is a vertical text (left to right).</p>
  </div>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-20.png)

<br>

## 2. 改变文本方向

```css
text-orientation

取值：mixed | upright | sideways
初始值：mixed
适用于：除表格行组、表格行、表格列组和表格列之外的所有元素
计算值：指定的值
继承性：是
动画性：是
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-21.png)

<br>

## 3. 声明方向

```css
direction

取值：ltr | rtl
初始值：ltr
适用于：所有元素
计算值：指定的值
继承性：是
动画性：是
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Direction Example</title>
  <style>
    .container {
      width: 200px;
      border: 1px solid black;
      margin-bottom: 10px;
      padding: 5px;
    }

    .ltr { direction: ltr; }
    .rtl { direction: rtl; }
  </style>
</head>
<body>
  <h2>direction: ltr</h2>
  <div class="container ltr">
    <p>This is a left-to-right text.</p>
  </div>

  <h2>direction: rtl</h2>
  <div class="container rtl">
    <p>This is a right-to-left text.</p>
  </div>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-22.png)

<br>

## unicode-bidi

```css
unicode-bidi

取值：normal | embed | bidi-override
初始值：normal
适用于：所有元素
计算值：指定的值
继承性：否
动画性：是
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC6%E7%AB%A0%EF%BC%9A%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/6-23.png)







​                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
