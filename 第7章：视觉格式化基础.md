# 7.1 元素框基础

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-1.png)

<br>

## 1. 重要概念概览

<br>

## 2. 容纳块

<br>

# 7.2 调整元素的显示方式

<br>

## 1. 改变显示方式

<br>

## 2. 块级框

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-2.png)

<br>

**`默认情况下，块级框的宽度（width）等于左内边界到右内边界的距离，高度（height）等于上内边界到下内边界的距离。这两个属性可用于生成块级框的元素。这些属性的处理方式可以使用 box-sizing 属性调整。`**

```css
box-sizing

取值：content-box | padding-box | border-box
初始值：content-box
适用于：能设定 width 或 height 的所有元素
计算值：指定的值
继承性：否
动画性：否
```

<br>

**`示例`**

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>box-sizing 示例</title>
    <style>
        .container {
            width: 400px;
            border: 1px solid #ccc;
            padding: 10px;
        }

        .box {
            width: 200px;
            height: 100px;
            padding: 20px;
            border: 10px solid #f00;
            margin: 20px;
            background-color: #f0f0f0;
            text-align: center;
            font-size: 16px;
        }

        .content-box {
            box-sizing: content-box; /* 默认值 */
        }

        .border-box {
            box-sizing: border-box;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box content-box">
            content-box
            <br>
            Width: 200px
        </div>
        <div class="box border-box">
            border-box
            <br>
            Width: 200px
        </div>
    </div>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-3.png)

<br>

## 3. 横向格式化

**`在这两种情况下，常规流动方式下块级框各组成部分的横向尺寸始终等于容纳块的宽度。假设一个 div 元素中有两个段落，div 元素的外边距为 1em，box-sizing 属性使用默认值。那么，每个段落的内容区宽度（即 width 的值），加上左右内边距、边框和外边距，得到的和始终等于 div 元素内容区的宽度。`** 

<br>

## 4. 横向格式化属性

**`横向格式化属性有七个，分别为 margin-left、border-left、padding-left、width、padding-right、border-right 和 margin-left。这七个属性影响块级框的横向布局。这七个属性的值加在一起要等于元素容纳块的宽度，而这一宽度通常为块级元素的父元素的 width 值（因为块级元素的父元素几乎都是块级元素）。`** 

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-4.png)

<br>

**`在这七个属性中，只有三个属性的值能设为 auto：元素内容区的宽度、左外边距和右外边距。余下的几个属性，要么设为具体的值，要么使用默认值（零）。如图展示了元素框的哪些部分能设为 auto，而哪些部分不能。`** 

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-5.png)

**`width 属性的值要么设为 auto，要么设为某种类型的非负值。在横向格式化中使用 auto，可能得到不同的结果。`**

<br>

## 5. 使用 auto

```css
div {
    width: 500px;
}

p {
    width: 100px;
    margin-left: auto; /* 设为 auto 的左外边距最终计算的结果为 300px */
    margin-right: 100px;
}
```

<br>

### 过约束

**`如果左右外边距和宽度设为 100px 的话，用户代理会把右外边距重置为 auto。此时，右外边距的宽度自动设定，要满足元素的总宽度等于容纳块的宽度。`**

```css
div {
    width: 500px;
}

p {
    width: 100px;
    margin-left: 100px;
    margin-right: 100px; /* 右外边距被强制设为 300px */
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-6.png)

<br>

### 自动确定宽度

```css
p {
    margin-left: 100px;
    margin-right: 100px;          
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-7.png)

<br>

## 6. 多个 auto

### 两侧外边距为 auto

**`两侧的外边距都是 100 像素宽，因为（500 - 300）/ 2 = 100`**

```css
div {
    width: 500px;
}

p {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-7.png)

<br>

### 一边外边距和 width 设为 auto

**`设为 auto 的那个外边距等于零。width 则被设为填满容纳块所需的值。`**

```css
div {
    width: 500px;
}

p {
    width: auto;
    margin-left: auto;
    margin-right: 100px;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-8.png)

<br>

### 三个都设为 auto

**`两侧的外边距被设为零，而 width 则要多宽有多宽。这跟默认情况是一样的，即两侧的外边距和宽度都不明确声明值，此时，外边距默认为零，而 width 默认为 auto`**

<br>

**`横向外边距不折叠，所以父元素的内边距、边框和外边距可能会影响子代。这影响不太直接，例如元素的外边距可能导致子元素有偏移。`**

```css
div {
    padding: 50px;
    background: silver；
}

p {
    margin: 30px;
    padding: 0;
    background: white;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-9.png)

<br>

## 7. 负外边距

### 子元素比父元素宽

**`右外边距为负值`**

```css
div {
    width: 500px;
    border: 3px solid black;
}

p.wide {
    width: auto;
    margin-left: 10px;
    margin-right: -50px;
}
```

**`用算式计算：`** 

**`10px + 0 + 0 + 540px + 0 + 0 - 50px = 500px`** 

**`其中，540px 对应于 width: auto，即满足算式左右两边所需的值。尽管子元素超出了父元素，但是这里并没有违背规范，因为七个属性的值加在一起等于总宽度。`**

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-10.png)

<br>

**`左外边距为负值`**

```css
div {
    width: 500px;
    border: 3px solid black;
}

p.wide {
    width: auto;
    margin-left: -50px;
    margin-right: 10px;
    border: 3px solid gray;
}
```

**`用算式计算：`** 

**`-50px + 3px + 0 + width + 0 + 3px + 10px = 500px`** 

**`其中 width 值为 534px。`** 

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-11.png)

<br>

### 右外边距可能为负值

```css
div {
    width: 500px;
    border: 3px solid black;
}

p.width {
    width: 600px;
    margin-left: 10px;
    margin-right: auto;
    border: 3px solid gray;
}
```

**`此时，算式要这样列：`** 

**`10px + 3px + 0 + 600px + 0 + 3px - 116px = 500px`** 

**`右外边距的计算结果为 -116px。即便明确声明为其他具体的值，右外边距也会被强制设为 -116px，因为规则就是这样制定的：倘若元素的尺寸出现过约束，右外边距要被重置为满足算式所需的任何值。`** 

<br>

## 8. 百分数

<br>

## 9. 置换元素

**`width 为 auto 时，置换元素的 width 等于内容自身的宽度。如果图像自身的宽度为 20 像素，下述示例中的图像将为 20 像素宽：`** 

```html
<img src="smile.svg" style="display: block; width: auto; margin: 0;">
```

**`如果图像自身的宽度为 100 像素，那么它就占 100 像素宽。`**

<br>

## 10. 纵向格式化

<br>

## 11. 纵向格式化属性

**`与横向格式化一样，纵向格式化也涉及七个属性：margin-top、border-top、padding-top、height、padding-bottom、border-bottom 和 margin-bottom。这些属性作用的区域如图。这七个属性的值加在一起必须等于块级框的容纳块的高度。通常，这是块级框父元素的 height 值（因为块级元素的父元素几乎都是块级元素）。`**

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-12.png)

**`这七个属性中只有三个可以设为 auto：元素的高度和上下外边距。上下内边距和边框必须设为具体的值，否则取默认值零（假设未声明边框样式）。如果设定了边框样式（border-style），那么边框的宽度默认为不具体的 medium。如图展示了元素框的哪些部分可以设为 auto，而哪些部分不能。`** 

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-13.png)                     

**`奇怪的是，在常规流动模式下，如果把块级框的 margin-top 或 margin-bottom 设为 auto，二者都自动计算为 0。如此看来，常规流动模式下的元素无法轻易在容纳块中纵向居中。这也意味着，如果把元素的上下外边距设为 auto，最终会被重置为 0，不会体现在元素框上。`**

**`height 属性要么设为 auto，要么设为某种类型的非负值，决不能小于零。`**

<br>

## 12. 百分数高度

```html
<div style="height: 6em;">
    <p style="height: 50%;">Half as ta  ll</p>
</div>
```

<br>

**`百分比高度不会生效`**

```html
<div style="height: auto;">
    <p style="height: 50%;">Not half as tall; height reset to auto</p>
</div>                                               
```

<br>

## 13. 自动调整高度

**`在常规流动模式下的块级框如果高度是自动调整的，而且子代都是块级元素，那么默认的高度是从最上边那个块级子代元素的上边框外侧到最下边那个块级子代元素的下边框外侧之间的距离。因此，子元素的外边距游离在所属元素的外部。`** 

**`然而，如果块级元素有上内边距或下内边距，或者有上边框或下边框，那么其高度是从最上边那个子元素的上外边距的外边界到最下边那个子元素的下外边距的外边界之间的距离。`** 

<br>

## 14. 折叠纵向外边距

### ul 和 li 之间的外边距折叠

```html
<!DOCTYPE html>
<html>
<head>
<title>ul li 外边距折叠示例</title>
<style>
  ul {
    width: 300px;
    background-color: #f0f0f0;
    margin-top: 20px; /* ul 的上外边距 */
  }
  li {
    margin-top: 10px; /* li 的上外边距 */
    margin-bottom: 10px; /* li 的下外边距 */
    background-color: #c0c0c0;
  }
</style>
</head>
<body>
  <ul>
    <li>列表项 1</li>
    <li>列表项 2</li>
    <li>列表项 3</li>
  </ul>
</body>
</html>
```

**`在这个例子中：`** 

- **`ul 元素设置了 margin-top: 20px。`** 
- **`li 元素设置了 margin-top: 10px 和 margin-bottom: 10px。`** 

**`由于外边距折叠，ul 的上外边距和第一个 li 的上外边距会发生折叠，最终 ul 的上外边距会是 20px，而不是 30px。`**

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-14.png)

<br>

### 添加边框或内边距阻止外边距重叠

```html
<!DOCTYPE html>
<html>
<head>
<title>ul li 外边距折叠示例</title>
<style>
  ul {
    width: 200px;
    list-style: none;
    padding: 0;
  }
  li {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc; /* 添加边框 */
    padding: 5px;
  }
</style>
</head>
<body>
  <ul>
    <li>列表项 1</li>
    <li>列表项 2</li>
    <li>列表项 3</li>
  </ul>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-15.png)

<br>

## 15. 负外边距和折叠

### 外边距都是负值

**`折叠后的外边距等于其中绝对值最大的外边距`**

```html
<!DOCTYPE html>
<html>
<head>
<title>负外边距折叠示例</title>
<style>
  .container {
    width: 300px;
    height: 200px;
    background-color: #f0f0f0;
    position: relative;
  }
  .box1 {
    width: 100px;
    height: 100px;
    background-color: #c0c0c0;
    position: absolute;
    top: 50px;
    left: 50px;
    margin-right: -20px; /* 负外边距 */
    margin-bottom: -30px; /* 负外边距 */
  }
  .box2 {
    width: 100px;
    height: 100px;
    background-color: #a0a0a0;
    position: absolute;
    top: 50px;
    left: 200px;
    margin-left: -40px; /* 负外边距 */
    margin-top: -50px; /* 负外边距 */
  }
</style>
</head>
<body>
  <div class="container">
    <div class="box1">Box 1</div>
    <div class="box2">Box 2</div>
  </div>
</body>
</html>
```

**`在这个例子中：`** 

* **`.box1 的 margin-right 为 -20px，margin-bottom 为 -30px。`** 
* **`.box2 的 margin-left 为 -40px，margin-top 为 -50px。`** 

**`由于外边距都是负值，折叠后的外边距等于其中绝对值最大的外边距。在这个例子中，.box2 的 margin-top 的绝对值最大（-50px），因此，.box2 会向上移动 50px。`**

<br>

### 外边距有正有负

**`当相邻元素的外边距有正有负时，折叠后的外边距等于最大的正外边距和最小的负外边距之和。`** 

```html
<!DOCTYPE html>
<html>
<head>
<title>负外边距和折叠示例</title>
<style>
  .box1 {
    margin-bottom: 20px;
    background-color: #f0f0f0;
    height: 100px;
  }
  .box2 {
    margin-top: -10px; /* 负外边距 */
    background-color: #c0c0c0;
    height: 100px;
  }
</style>
</head>
<body>
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
</body>
</html>
```

**`在这个例子中：`** 

* **`.box1 的 margin-bottom 为 20px`** 
* **`.box2 的 margin-top 为 -10px`** 

**`由于存在外边距折叠，实际 .box1 和 .box2 之间的距离为 20px + （-10px）= 10px`**

<br>

## 16. 列表项目

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-16.png)

<br>

# 7.3 行内元素

## 1. 行布局

<br>

## 2. 基本术语和概念

<br>

## 3. 行内非置换元素

### 行框的构成

**`首先，对非置换元素或匿名文本来说，font-size 值决定内容区的高度。如果行内元素的 font-size 为 15px，那么其内容区的高度就是 15 像素，因为元素中的所有字体框高度都是 15 像素，如下图。`**

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-17.png)

<br>

**`接下来要考虑的是元素的 line-height 值，以及它与 font-size 值之差。如果行内非置换元素的 font-size 为 15px、line-height 为 21px，那么二者之差为 6 像素。用户代理把这 6 像素一分为二，一半添加到内容区上部，一半添加到内容区下部，得到行内框。这个过程如图所示。`**

![               ](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC7%E7%AB%A0%EF%BC%9A%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%9F%BA%E7%A1%80/7-18.png)

<br>

​             





​                                                                                                                                                    



 

​                                                              
