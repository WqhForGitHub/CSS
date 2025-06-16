# 11.1 基本概念



## 1. 定位的类型

```css
position

取值：static | relative | sticky | absolute | fixed
初始值：static
适用于：所有元素
计算值：指定的值
继承性：否
动画性：否
```



| 属性值         | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| **`static`**   | **`正常生成元素框。块级元素生成矩形框，位于文档流中；行内元素生成一个或多个行框，随父元素流动。`** |
| **`relative`** | **`元素框偏移一定的距离。元素的形状与未定义时一样，而且元素所占的空间也与正常情况下相同。`** |
| **`absolute`** | **`元素框完全从文档流中移除，相对容纳块定位。此时，容纳块可能是文档中的另一个元素，也可能是初始容纳块。正常情况下元素在文档流中占据的空间不复存在，好似元素没有出现过一样。不管元素在常规的文档流中生成什么类型的框体，定位后生成的都是块级框。`** |
| **`fixed`**    | **`元素框的行为类似于 absolute。不过容纳块是视区自身。`**    |
| **`sticky`**   | **`元素一开始留在常规的文档流中，达到触发粘滞的条件时，从常规的文档流中移除，不过在常规文档流中所占的空间得以保留。此时，相当于相对容纳块绝对定位。触发粘滞的条件失效后，元素回到常规文档流中最初的位置。`** |





## 2. 容纳块

**`一般而言，容纳块指包含另一个元素的框体。比如说，在常规文档流中，根元素（HTML 中的 html）是 body 元素的容纳块，body 元素又是其所有子元素的容纳块，以此类推。但是对定位元素来说，容纳块完全取决于定位类型。`** 

**`对非根元素来说，如果 position 属性的值是 relative 或 static，其容纳块由最近的块级、单元格或行内块级祖辈元素框体的内容边界划定。`** 

**`对非根元素来说，如果 position 属性的值是 absolute，其容纳块是 position 属性的值不是 static 的最近的祖辈元素（任何类型）。具体规则如下：`** 

* **`如果祖辈元素是块级元素，容纳块是那个元素的内边距边界，即由边框限定的区域。`** 
* **`如果祖辈元素是行内元素，容纳块是祖辈元素的内容边界。在由左至右书写的语言中，容纳块的顶边和左边是祖辈元素中第一个框体的内容边界的顶边和左边，底边和右边是最后一个框体的内容边界的底边和右边。在从右向左书写的语言中，容纳块的右边界是第一个框体内容区的右边界，左边界是最后一个框体内容区的左边界；顶边和底边与前述情况一样。`**                 
* **`如果没有祖辈元素，元素的容纳块是初始容纳块。`**                                                                                                                                                                                                                                                                                                                                                                                                                          



# 11.2 偏移属性

```css
top, right, bottom, left

取值：<length> | <percentage> | auto
初始值：auto
适用于：定位元素
百分数：上下偏移相对容纳块的高度计算，左右偏移相对容纳块的宽度计算
计算值：定位方式为 relative 或 sticky 的元素，参见介绍相应定位类型的章节。静态定位计算为 auto；设为长度值时，计算为相应的绝对长度；设为百分数值时，计算为指定的值；其他情况计算为 auto
继承性：否
动画性：<length>，<percentage>
```

**`这些属性指定距容纳块最近的边的偏移。例如，top 属性指定定位元素的上外边距边界距容纳块的顶边多远。`**

```css
top: 50%;
bottom: 0;
left: 50%;
right: 0;
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC11%E7%AB%A0%EF%BC%9A%E5%AE%9A%E4%BD%8D/11-1.png)



```      css
top: 50%;
bottom: -2em;
left: 75%;
right: -7em;
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC11%E7%AB%A0%EF%BC%9A%E5%AE%9A%E4%BD%8D/11-2.png)



# 11.3 宽度和高度



## 2. 限制宽度和高度

```css
min-width, min-height

取值：<length> | <percentage>
初始值：0
适用于：除非置换行内元素和表格元素之外的所有元素
百分数：最小宽度相对容纳块的宽度计算，最小高度相对容纳块的高度计算
计算值：设为百分数时，计算结果为指定的值；设为长度值时，计算结果为绝对长度；其他情况计算为 none
继承性：否
动画性：<length>, <percentage>            
```



```css
max-width, max-height

取值：<length> | <percentage> | none
初始值：none
适用于：除非置换行内元素和表格元素之外的所有元素
百分数：最大宽度相对容纳块的宽度计算，最大高度相对容纳块的高度计算
计算值：设为百分数时，计算结果为指定的值；设为长度值时，计算结果为绝对长度；其他情况计算为 none
继承性：否
动画性：<length>, <percentage>
```





# 11.4 内容溢出和裁剪



## 1. 溢出

```css
overflow

取值：visible | hidden | scroll | auto
初始值：visible
适用于：块级元素和置换元素
计算值：指定的值
继承性：否
动画性：否
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC11%E7%AB%A0%EF%BC%9A%E5%AE%9A%E4%BD%8D/11-6.png)



# 11.5 元素的可见性

```css
visibility

取值：visible | hidden | collapse                                                     
适用于：所有元素
计算值：指定的值
继承性：是
动画性：否
```

**`这个属性相当简单。如果设定 visibility: visible，与你所想的一样，元素是可见的。如果设定 visibility: hidden，元素不可见。在不可见状态下，元素依然像可见时那样影响文档的布局。也就是说，元素还在那里，只是你看不见，就像声明 opacity: 0 一样。注意这与 display: none 之间的区别。后者导致元素不显示，完全从文档中移除，因此对文档的布局不再有任何的影响。下述样式和标记把段落中一部分的可见性设为 hidden，得到的结果如图所示。`**



**`hidden`**

```                                                                                                                                                                                                                                                                                          css
<!DOCTYPE html>
<html>
<head>
<style>
.hidden {
  visibility: hidden;
}
</style>
</head>
<body>

<h1>Visibility Hidden Example</h1>

<div>This is a visible element.</div>
<div class="hidden">This element is hidden, but still takes up space.</div>
<div>This is another visible element.</div>

</body>
</html>
```



**`可见性为 hidden 的元素，其后代元素可以设为 visible。尽管祖辈元素不可见了，但是后代元素将出现在常规位置。为此，我们要把后代元素的可见性明确声明为 visible，因为 visibility 属性是继承的：`**

```css
p.clear {
    visibility: hidden;
}

p.clear em {
    visibility: visible;
}
```



​               

**`collapse`**

```css
<!DOCTYPE html>
<html>
<head>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

.collapse {
  visibility: collapse;
} 
</style>
</head>
<body>

<h1>Visibility Collapse Example</h1>

<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Cell 1</td>
      <td class="collapse">Row 1, Cell 2</td>
      <td>Row 1, Cell 3</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 2, Cell 3</td>
    </tr>
  </tbody>
</table>

</body>
</html>
```







# 11.6 绝对定位



## 1. 绝对定位元素的容纳块

**`绝对定位的元素完全从文档流中移除，其位置相对容 块确定，外边距的边界使用偏移属性（top、left 等）划定。绝对定位的元素不围绕其他元素的内容流动，而且其内容也不围绕定位元素流动。这表明，绝对定位的元素可能会叠放到其他元素上，或者被其他元素覆盖（稍后说明如何控制叠放顺序）。`**

**`绝对定位元素的容纳块是 position 属性的值不是 static 的最近的祖辈元素。通常，创作人员选定用作绝对定位元素的容纳块的元素后，会把 position 的值设为 relative，而且不设置偏移。`**



### 1. 初始包含块定位 

**`当一个 position: absolute 的元素没有已定位的祖先元素时，它会相对于初始包含块进行定位。初始包含块通常是 <html> 元素，在视觉媒体中，它对应于浏览器视口。`**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Absolute Positioning - Initial Containing Block</title>
  <style>
    body {
      height: 300px; /* 确保 body 有一定的高度 */
    }
    .absolute-element {
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: lightblue;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="absolute-element">
    This is an absolutely positioned element relative to the initial containing block.
  </div>
</body>
</html>
```



![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC11%E7%AB%A0%EF%BC%9A%E5%AE%9A%E4%BD%8D/11-7.png)

**`在这个例子中，.absolute-element 没有已定位的祖先元素，因此它相对于 <html> 元素（视口）进行定位。元素将会出现在距离视口左上角 20px 的位置。`**



### 2. 相对于最近的已定位祖先元素定位

**`当一个 position: absolute 的元素有已定位的祖先元素时，它会相对于这个最近的已定位祖先元素进行定位。`**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Absolute Positioning - Relative to Ancestor</title>
  <style>
    .relative-container {
      position: relative;
      width: 300px;
      height: 200px;
      background-color: lightgray;
    }
    .absolute-element {
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: lightblue;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="relative-container">
    <div class="absolute-element">
      This is an absolutely positioned element relative to the nearest positioned ancestor.
    </div>
  </div>
</body>
</html>
```



![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC11%E7%AB%A0%EF%BC%9A%E5%AE%9A%E4%BD%8D/11-8.png)

**`在这个例子中，.relative-container 的 position 属性被设置为 relative，因此它成为了 .absolute-element 的最近的已定位祖先元素。.absolute-element 将会相对于 .relative-container 的左上角进行定位，出现在距离 .relative-container 左上角 20px 的位置。`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                



### 3. 绝对定位的元素变成容纳块

**`当一个元素的 position 属性设置为 absolute 时，该元素会创建一个新的包含块，用于其后台绝对定位元素的定位参考。这个新的包含块由该元素本身的内容边界构成。`**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Absolute Positioning - Containing Block</title>
  <style>
    .outer-container {
      position: relative; /* 创建定位上下文 */
      width: 400px;
      height: 300px;
      background-color: lightgray;
      padding: 20px;
    }
    .absolute-container {
      position: absolute; /* 绝对定位，并成为包含块 */
      top: 50px;
      left: 50px;
      width: 200px;
      height: 150px;
      background-color: lightblue;
      padding: 10px;
    }
    .inner-element {
      position: absolute; /* 相对于 .absolute-container 定位 */
      bottom: 10px;
      right: 10px;
      background-color: lightcoral;
      padding: 5px;
    }
  </style>
</head>
<body>
  <div class="outer-container">
    <div class="absolute-container">
      This is the absolute container.
      <div class="inner-element">
        Inner Element
      </div>
    </div>
  </div>
</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC11%E7%AB%A0%EF%BC%9A%E5%AE%9A%E4%BD%8D/11-9.png)

**`.outer-container 的 position 设置为 relative，创建了一个定位上下文。.absolute-container 的 position 设置为 absolute，相对于 .outer-container 进行定位。同时，.absolute-container 自身也成为了一个包含块。.inner-element 的 position 设置为 absolute，它会相对于 .absolute-container 的内容边界进行定位。因此，.inner-element 会出现在 .absolute-container 的右下角。`**





## 2. 绝对定位元素的位置和尺寸







## 3. 自动确定边界的位置

**`top、right、bottom 和 left 属性用于精确定位已定位的元素。你可以使用 auto 关键字作为这些属性的值，让浏览器自动计算元素的位置。`**

* **`top: auto：元素顶边将位于其正常文档流中的位置。`** 
* **`right: auto：元素右边将位于其正常文档流中的位置。`** 
* **`bottom: auto：元素底边将位于其正常文档流中的位置。`** 
* **`left: auto：元素左边将位于其正常文档流中的位置。`** 

```html
<!DOCTYPE html>
<html>
<head>
<title>CSS Positioning</title>
<style>
  .container {
    position: relative;
    width: 300px;
    height: 200px;
    border: 1px solid black;
  }

  .box {
    position: absolute;
    width: 100px;
    height: 50px;
    background-color: lightblue;
  }

  .top-left {
    top: auto;
    left: auto;
  }

  .bottom-right {
    bottom: auto;
    right: auto;
  }
</style>
</head>
<body>

<div class="container">
  <div class="box top-left">Top Left</div>
  <div class="box bottom-right">Bottom Right</div>
</div>

</body>
</html>
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC11%E7%AB%A0%EF%BC%9A%E5%AE%9A%E4%BD%8D/11-10.png)                                                                                                         







## 4. 非置换元素的位置和尺寸



### 1. 横向布局

```css
left + margin-left + border-left-width + padding-left + width + padding-right + border-right-width + margin-right + right = 包含块的宽度
```



#### 1. 过约束条件

```css
left + margin-left + border-left-width + padding-left + width + padding-right + border-right-width + margin-right + right > 包含块的宽度
```



**`你提到的是浏览器在 CSS 绝对定位元素出现过约束时，调整属性以满足布局的规则优先级。你给出的“从低到高”的优先级顺序实际上描述的是调整的倾向性，而不是真正的“优先级”。更准确地说，浏览器会按照以下顺序来考虑调整哪些属性，以解决过约束：`** 

1. **`margin-right: 如果 margin-right 设置为非 auto 值，则会被调整为 auto，并重新计算。这是最先被考虑调整的属性。`** 
2. **`right: 如果 right 设置为非 auto 值，则会被调整。`** 
3. **`width: 如果 width 设置为非 auto 值，则会被调整。`** 
4. **`left: 如果 left 设置为非 auto 值，则会被调整。`** 
5. **`margin-left: 如果 margin-left 设置为非 auto 值，则会被调整。`** 



#### 2. 为什么 margin-right 最先被调整

**`浏览器首先调整 margin-right 的原因是，调整外边距通常对元素的视觉效果影响最小。如果 margin-right 可以设置为 auto，浏览器可以通过调整外边距来解决过约束，而无需改变元素的位置或尺寸。`** 



#### 3. 示例

```html
<!DOCTYPE html>
<html>
<head>
<title>CSS Positioning</title>
<style>
  .container {
    position: relative;
    width: 500px;
    height: 300px;
    border: 1px solid black;
  }

  .box {
    position: absolute;
    top: 50px;
    left: 20px;
    width: 400px;
    right: 20px;
    margin-right: 50px; /* 这个值会导致过约束 */
    background-color: lightblue;
  }
</style>
</head>
<body>

<div class="container">
  <div class="box">
    This is an absolutely positioned element with over-constrained width.
  </div>
</div>

</body>
</html>
```



![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC11%E7%AB%A0%EF%BC%9A%E5%AE%9A%E4%BD%8D/11-11.png)



**`在这个例子中，.box 元素的 left 为 20px，width 为 400px，right 为 20px，margin-right 为 50px。由于这些值的总和超过了包含块的宽度，浏览器会首先将 margin-right 调整为 auto，并重新计算其值，以满足布局要求。`**





### 2. 纵向布局

```css
top + margin-top + border-top-width + padding-top + height + padding-bottom + border-bottom-width + margin-bottom + bottom = 包含块的高度
```



#### 1. 过约束条件

```css
top + margin-top + border-top-width + padding-top + height + padding-bottom + border-bottom-width + margin-bottom + bottom > 包含块的高度
```



#### 2. 为什么 margin-bottom 最先被调整

**`浏览器之所以首先调整 margin-bottom 的值，是因为这种调整通常不会改变元素的上边缘位置和高度，而是调整元素与其包含块下边缘的距离。这在许多情况下是比较理想的，因为它允许元素保持其原始尺寸和顶部位置。`** 

**`浏览器处理纵向过约束的规则优先级如下（从低到高）：`** 

1. **`margin-bottom: 如果 margin-bottom 设置为非 auto 值，则会被调整为 auto，并重新计算。`** 
2. **`bottom: 如果 bottom 设置为非 auto 值，则会被调整。`** 
3. **`height: 如果 height 设置为非 auto 值，则会被调整。`** 
4. **`top: 如果 top 设置为非 auto 值，则会被调整。`** 
5. **`margin-top: 如果 margin-top 设置为非 auto 值，则会被调整。`** 



#### 3. 示例

```html
<!DOCTYPE html>
<html>
<head>
<title>CSS Positioning</title>
<style>
  .container {
    position: relative;
    width: 500px;
    height: 300px;
    border: 1px solid black;
  }

  .box {
    position: absolute;
    top: 20px;
    height: 200px;
    bottom: 20px;
    margin-bottom: 50px; /* 这个值会导致过约束 */
    left: 50px;
    width: 400px;
    background-color: lightblue;
  }
</style>
</head>
<body>

<div class="container">
  <div class="box">
    This is an absolutely positioned element with over-constrained height.
  </div>
</div>

</body>
</html>
```



![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC11%E7%AB%A0%EF%BC%9A%E5%AE%9A%E4%BD%8D/11-12.png)



**`在这个例子中，.box 元素的 top 为 20px，height 为 200px，bottom 为 20px，margin-bottom 为 50px。由于这些值的总和超过了包含块的高度，浏览器会首先将 margin-bottom 调整为 auto，并重新计算其值，margin-bottom 的值已经被浏览器调整为 10px，以满足等式：20px + 0 + 0 + 0 + 200px + 0 + 0 + 10px + 20px = 300px。`**







## 5. 置换元素的位置和尺寸



### 1.  横向布局

1. **`如果把 width 设为 auto，width 的具体值由元素内容的内在宽度确定。因此，如果图像自身的宽度是 50 像素，那么计算得到的值是 50px。如果明确声明了 width（例如 100px 或 50%），那就使用设定的值。`** 
2. **`在从左至右书写的语言中，如果 left 的值是 auto，auto 将替换为静态位置。在从右至左书写的语言中，right 属性的 auto 值将被替换为静态位置。`** 
3. **`如果 left 或 right 的值仍是 auto（也就是说，在前一步中没有被替换），把margin-left 或 margin-right 的 auto 值替换为 0。`** 
4. **`如果此时 margin-left 和 margin-right 的值仍为 auto，把二者设为相等的值，即让元素居中显示在容纳块中。`** 
5. **`最后，如果还有一个属性的值为 auto，修改为满足等式所需的值。`** 





#### 1. 过约束条件

**`与非置换元素一样，如果导致过约束，用户代理将忽略 right（从左至右书写的语言）或 left（从右至左书写的语言）的值。因此，在下述示例中，为 right 声明的值将被计算得到的 50px 覆盖：`**

```html
<div style="position: relative; width: 300px;">
    <img src="frown.gif" alt="a frowny face" style="position: absolute; top: 0; left: 50px; right: 125px; width: 200px; margin: 0;">
</div>
```











### 2. 纵向布局

1. **`如果把 height 设为 auto，height 的具体值由元素内容的内在高度确定。因此，如果图像自身的高度是 50 像素，那么计算得到的值是 50px。如果明确声明了  height（例如 100px 或 50%），那就使用设定的值。`** 
2. **`如果 top 的值是 auto，替换为置换元素的静态位置。`** 
3. **`如果 bottom 的值是 auto，把值为 auto 的 margin-top 或 margin-bottom 替换为 0。`** 
4. **`如果此时 margin-top 和 margin-bottom 的值仍为 auto，把二者设为相等的值，即让元素居中显示在容纳块中。`** 
5. **`最后，如果还有一个属性的值为 auto，修改为满足等式所需的值。`** 





#### 1. 过约束条件  

**`与非置换元素一样，如果过约束了，用户代理将忽略 bottom 的值。`**

​                                                                                                          







## 6. Z 轴上的位置

```css
z-index

取值：<integer> | auto
初始值：auto
适用于：定位元素
计算值：指定的值
继承性：否
动画性：是
```





### 1. 值是 auto

**`盒子不会创建一个新的局部层叠上下文。盒子在当前层叠上下文的层叠等级是 0。`** 







### 2. 值是 `<integer>`



**`盒子在当前层叠上下文的层叠等级就是 <integer> 的值。盒子还会创建一个局部层叠上下文。这意味着该元素的后代元素不会和该元素的外部元素比较 z-index。`**



**`当一个元素满足创建堆叠上下文的条件（例如，position: relative; 和 z-index: <integer> ），它会发生以下两件事：`** 

1. **`层叠等级：该元素在当前堆叠上下文中的层叠等级由 <integer> 值决定。这意味着该元素会根据其 z-index 值，相对于同一堆叠上下文中的其他元素进行堆叠。`** 
2. **`局部堆叠上下文：该元素会创建一个新的局部堆叠上下文。这意味着该元素的所有后代元素都将位于这个新的堆叠上下文中。关键在于，这些后台元素的 z-index 值只与该堆叠上下文中的其他元素进行比较，而不会与该元素外部的元素进行比较。`** 



**`重点总结：`**

* **`z-index 的值只在同一个堆叠上下文中才有意义。`** 
* **`创建堆叠上下文的元素就像一个容器，其后代元素的堆叠顺序被限制在该容器内。`** 
* **`这允许你创建模块化的 UI 组件，而不用担心组件内部的 z-index 值会影响到页面上的其他元素。`** 

 

```html
<div class="container" style="position: relative; z-index: 1;">
    <div class="box" style="position: absolute; z-index: 10;">Box inside container</div>
</div>

<div class="sibling" style="position: relative; z-index: 2;">Sibling</div>
```



![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC11%E7%AB%A0%EF%BC%9A%E5%AE%9A%E4%BD%8D/11-13.png)



**`在这个例子中：`** 

* **`.container 创建了一个堆叠上下文，因为它的 position 是 relative 并且 z-index: 1。`** 
* **`.box 的 z-index 是 10，但这意味着它在 .container 内部的堆叠顺序。`** 
* **`.sibling 的 z-index 是 2，它与 .container 在根堆叠上下文中进行比较。`** 

**`因此，.sibling 会覆盖 .container，即使 .box 的 z-index 值更高。这是因为 .box 的 z-index 只在其父元素 .container 创建的局部堆叠上下文中有效。`** 



​                                                                                                                                                                                                                 



 



# 11.7 固定定位

**`固定定位元素的容纳块是视区。固定定位的元素完全从文档流中移除，其位置与文档中的任何一部分都没关系。`**











# 11.8 相对定位



**`在相对定位中，元素从常规的位置移开了，但是其占据的空间并没有消失。`**

​                                             

## 1. 过约束

```css
strong {
    position: relative;
    top: 10px;
    bottom: 20px;                                                                                                                                     
}
```

**`这里提供的两个值可能得到差别很大的结果。如果只考虑 top: 20px，元素将向下移动 10 像素，但是 bottom: 20px 显然会应用到元素上，把元素向上移动 20 像素。CSS 2.1 规定，如果相对定位出现过约束，把其中一个值设为另一个值的相反数。因此，bottom 始终等于 -top。这意味着，上例将被视作：`**

```css
strong {
    position: relative;
    top: 10px;
    bottom: -10px;
}
```

**`因此，strong 元素将向下移动 10 像素。规范还考虑了书写方向。对相对定位来说，在从左至右书写的语言中，right 始终等于 -left；在从右至左书写的语言中，反过来，left 始终等于 -right。`**

**`前面几节讲过，相对定位的元素为其子元素确立新的容纳块。这个容纳块相对元素的新位置而言。`**







# 11.9 粘滞定位

​                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

​                                                                                                                                                                                          

​                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

​                                                                            

​                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       



​                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
