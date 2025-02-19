



# 如何居中一个元素



## 一、水平居中



### 1. 行内元素水平居中

**`利用 text-align: center 可以实现在块级元素内部的行内元素水平居中。此方法对 inline、inline-block、inline-table 和 inline-flex 元素水平居中都有效。`** 

```css
.parent {
    text-align: center;
}
```

**`此外，如果块级元素内部包着也是一个块级元素，我们可以先将其由块级元素改变为行内块元素，再通过设置行内块元素居中以达到水平居中。`** 

```html
<div class="parent">
    <div class="child">Demo</div>
</div>

<style>
    .parent {
        text-align: center;
    }
    
    .child {
        display: inline-block;
    }
</style>
```



### 2. 块级元素的水平居中

**`这种情形可以有多种实现方式，下面我们详细介绍。`** 



**`1. 将该块级元素左右外边距 margin-left 和 margin-right 设置为 auto`**

```css
.child {
    width: 100px;
    margin: 0 auto;
}
```



**`2. 使用 table + margin`**

```html
<div class="parent">
    <div class="child">Demo</div>
</div>

<style>
    .child {
        display: table;
        margin: 0 auto;
    }
</style>
```



**`3. 使用 absolute + transform`**

```html
<div class="parent">
    <div class="child">Demo</div>
</div>

<style>
    .child {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    
    .parent {
        position: relative;
    }
</style>
```



**`4. 使用 flex + justify-content`**

```html
<div class="parent">
    <div class="child">Demo</div>
</div>

<style>
    .parent {
        display: flex;
        justify-content: center;
    }
</style>
```



**`5. 使用 flex + margin`**

```html
<div class="parent">
    <div class="child">Demo</div>
</div>

<style>
    .parent {
        display: flex;
    }
    
    .child {
        margin: 0 auto;
    }
</style>
```



### 3. 多块级元素水平居中

**`1. 利用 flex 布局`**

**`利用弹性布局（flex），实现水平居中，其中 justify-content 用于设置弹性盒子元素在主轴（默认横轴）方向上的对齐方式，本例中设置子元素水平居中显示。`**

```css
#container {
    display: flex;
    justify-content: center;
}
```



**`2. 利用 inline-block`**

**`将要水平排列的块级元素设为 display: inline-block，然后在父级元素上设置 text-align: center，达到与上面的行内元素的水平居中一样的效果。`**

```css
.container {
    text-align: center;
}

.inline-block {
    display: inline-block;
}
```





### 4. 浮动元素水平居中

**`1. 定宽的浮动元素`**

**`注意：样式设置在浮动元素本身`**

```html
.child {
	position: relative;
    left: 50%;
    margin-left: -250px;
}

<div class="parent">
    <span class="child" style="float: left; width: 500px;">我是要居中的浮动元素</span>
</div>
```



**`2. 不定宽的浮动元素`**

**`注意：要清除浮动，给外部元素加上 float。这里的父元素就是外部元素`**

```html
<div class="box">
    <p>我是浮动的</p>
    <p>我也是居中的</p>
</div>

<style>
    .box {
        float: left;
        position: relative;
        left: 50%;
    }
    
    p {
        float: left;
        position: relative;
        right: 50%;
    }
</style>
```



**`3. 通用方法 flex 布局（不管是定宽还是不定宽）`**

**`利用弹性布局（flex）的 justify-content 属性，实现水平居中`**

```html
<div class="parent">
    <span class="child">我是要居中的浮动元素</span>
</div>

<style>
    .parent {
        display: flex;
        justify-content: center;
    }
    
    .child {
        float: left;
        width: 200px;
    }
</style>
```



### 5. 绝对定位元素水平居中

这种方式非常独特，通过子元素绝对定位，外加 margin: 0 auto 来实现。

```html
<div class="parent">
    <div class="child">让绝对定位的元素水平居中对齐</div>
</div>

<style>
    .parent {
        position: relative;
    }
    
    .child {
        position: absolute;
        width: 200px;
        height: 100px;
        background: yellow;
        margin: 0 auto;
        left: 0;
        right: 0;
    }
</style>
```







# 深入理解 BFC



## 一、什么是 BFC

**`Block formatting context 直译为块级格式化上下文。它是一个独立的渲染区域，只有块级元素参与，它规定了内部的块级元素如何布局，并且与这个区域外部毫不相干。通俗地讲，BFC 是一个容器，用于管理块级元素。`** 



## 二、如何创建 BFC

* **`float 为 left | right`** 
* **`overflow 为 hidden | auto | scroll`** 
* **`display 为 table-cell | table-caption | inline-block | inline-flex | flex`**
* **`position 为 absolute | fixed`**
* **`根元素`**



## 三、BFC 布局规则

* **`内部地 Box 会在垂直方向，一个接一个地放置（即块级元素独占一行）`** 
* **`BFC 的区域不会与 float box 重叠`** 
* **`内部的 Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠`** 
* **`计算 BFC 的高度时，浮动元素也参与计算`** 
* **`BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。`** 





## 四、BFC 有哪些特性



### 特性1：BFC 会阻止垂直外边距折叠

**`按照 BFC 的定义，只有同属于一个 BFC 时，两个元素才有可能发生垂直 margin 的重叠，这个包括相邻元素或者嵌套元素，只要他们之间没有阻挡就会发生 margin 重叠。`** 

**`1. 相邻兄弟元素 margin 重叠问题`**

```html
<style>
    p {
        color: #fff;
        background: #888;
        width: 200px;
        line-height: 100px;
        text-align: center;
        margin: 100px;
    }
</style>

<body>
    <p>ABC</p>
    <p>abc</p>
</body>
```

**`上面示例中两个 p 元素之间距离本该为 200px，然而实际上只有 100px，发生了 margin 重叠。遇到这种情形，我们如何处理？只需要在 p 外面包裹一层容器，并触发该容器生成一个 BFC。那么两个 P 便不属于同一个 BFC，就不会发生 margin 重叠了。`** 

```html
<style>
    p {
        color: #fff;
        background: #888;
        width: 200px;
        line-height: 100px;
        text-align: center;
        margin: 100px;
    }
    
    .wrap {
        overflow: hidden;
    }
</style>

<body>
    <p>ABC</p>
    <div class="wrap">
    	<p>abc</p>
    </div>
</body>
```



**`2. 父子元素 margin 重叠问题`**

```html
<style>
    .box {
        width: 100px;
        height: 100px;
        background: #ccc;
    }
    
    .wrap {
        background: yellow;
    }
    
    .wrap h1 {
        background: pink;
        margin: 40px;
        overflow: hidden;
    }
</style>

<body>
    <div class="box">box</div>
    <div class="wrap">
        <h1>h1</h1>
    </div>
</body>
```

**`上图 wrap 元素与 h1 元素之间理论上本该有个 40px 的上下 margin 值，然而实际上父子元素并没有存在 margin 值，与此同时，两个 div 元素的间距为 40px。遇到这种情形，我们如何处理？处理方法其实有很多，在 wrap 元素中添加 overflow: hidden 或者 overflow: auto。使其父元素形成一个 BFC。`** 





### 特性2：BFC 不会重叠浮动元素

利用这个特性，我们可以创造自适应两栏布局。

```html
<style>
    .box1 {
        height: 100px;
        width: 100px;
        float: left;
        background: lightblue;
    }
    
    .box2 {
        width: 200px;
        height: 200px;
        background: #eee;
        overflow: hidden;
    }
</style>

<body>
    <div class="box1">我是一个左浮动元素</div>
    <div class="box2"></div>
</body>
```

**`上图中，文字围绕着浮动元素排列，不过在这里，这显然不是我们想要的。此时我们可以为 .box2 元素的样式加上 overflow: hidden; 使其建立一个 BFC，让其内容消除对外界浮动元素的影响。这个方法可以用来实现两列自适应布局，效果不错，此时左边的宽度固定，右边的内容自适应宽度。如果我们改变文字的大小或者左边浮动元素的大小，两栏布局的结构依然没有改变。`** 





### 特性3：BFC 可以包含浮动，清除浮动

**`我们都知道浮动会脱离文档流，接下来我们看看下面的例子：`**

```html
<style>
    .box1 {
        width: 100px;
        height: 100px;
        float: left;
        border: 1px solid #000;
    }
    
    .box2 {
        width: 100px;
        height: 100px;
        float: left;
        border: 1px solid #000;
    }
    
    .box {
        background: yellow;
        overflow: hidden;
    }
</style>

<body>
    <div class="box">
        <div class="box1"></div>
        <div class="box2"></div>
    </div>
</body>
```

**`由于容器内两个 div 元素浮动，脱离了文档流，父容器内容宽度为零（即发生高度塌陷），未能将子元素包裹住。解决这个问题，只需要把父元素变成一个 BFC 就行了。常用的办法是给父元素设置 overflow: hidden。`** 







# display: none 

**`display: none 不会从 DOM 树中移除。它只是将元素设置为不可见，但元素仍然存在于 DOM 中。`**

**`display: none 元素会完全从文档流中移除。他不占据任何空间，就像元素不存在一样。其他元素会重新排列以填充它留下的空间。`**