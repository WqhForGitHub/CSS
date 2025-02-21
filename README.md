



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





## 二、垂直居中



### 1. 单行内联元素垂直居中

```html
<div id="box">
    <span>单行内联元素垂直居中</span>
</div>

<style>
    #box {
        height: 120px;
        line-height: 120px;
        border: 2px dashed #f69c55;
    }
</style>
```



### 2. 多行内联元素垂直居中

**`1. 利用 flex 布局`**

**`利用 flex 布局实现垂直居中，其中 flex-direction: column 定义主轴方向为纵向。这种方式在较老的浏览器存在兼容性问题。`**

```html
<div class="parent">
    <p>
        Dance like nobody is watching, code like everybody is.
        Dance like nobody is watching, code like everybody is.
        Dance like nobody is watching, code like everybody is.
    </p>
</div>

<style>
    .parent {
        height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px dashed #f69c55;
    }
</style>
```



**`2. 利用表布局（table）`**

**`利用表布局的 vertical-align: middle 可以实现子元素的垂直居中`**

```html
<div class="parent">
    <p class="child">
        The more technology you learn, the more you realize how little you know.
        The more technology you learn, the more you realize how little you know.
        The more technology you learn, the more you realize how little you know.
    </p>
</div>

<style>
    .parent {
        display: table;
        height: 140px;
        border: 2px dashed #f69c55;
    }
    
    .child {
        display: table-cell;
        vertical-align: middle;
    }
</style>
```





### 3. 块级元素垂直居中

**`1. 使用 absolute + 负 margin（已知高度宽度）`**

**`通过绝对定位元素距离顶部 50%，并设置 margin-top 向上偏移元素高度的一半，就可以实现了。`**

```html
<div class="parent">
    <div class="child">固定高度的块级元素垂直居中</div>
</div>

<style>
    .parent {
        position: relative;
    }
    
    .child {
        position: absolute;
        top: 50%;
        height: 100px;
        margin-top: -50px;
    }
</style>
```



**`2. 使用 absolute + transform`**

**`当垂直居中的元素的高度和宽度未知时，可以借助 CSS3 中的 transform 属性向 Y 轴反向偏移 50% 的方法实现垂直居中。但是部分浏览器存在兼容性的问题。`**

```html
<div class="parent">
    <div class="child">未知高度的块级元素垂直居中</div>
</div>

<style>
    .parent {
        position: relative;
    }
    
    .child {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
```



**`3. 使用 flex + align-items`**

**`通过设置 flex 布局中的属性 align-items，使子元素垂直居中`**

```html
<div class="parent">
    <div class="child">未知高度的块级元素垂直居中</div>
</div>

<style>
    .parent {
        display: flex;
        align-items: center;
    }
</style>
```



**`4. 使用 table-cell + vertical-align`**

**`通过将父元素转化为一个表格单元格显示（类似 <td> 和 <th>），再通过设置 vertical-align 属性，使表格单元格内容垂直居中。`**

```html
<div class="parent">
    <div class="child">Demo</div>
</div>

<style>
    .parent {
        display: table-cell;
        vertical-align: middle;
    }
</style>
```





## 三、水平垂直居中



```html
// 下面例子直接共用
<body>
    <div id="container">
        <div id="center" style="width: 100px;height: 100px;background-color: #666">center</div>
    </div>
</body>
```



### 方法1：绝对定位与负边距实现（已知高度宽度）

**`这种方式需要知道被垂直居中元素的高和宽，才能计算出 margin 值，兼容所有浏览器。`**

```css
#container {
    position: relative;
}

#center {
    postition: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
}
```



### 方法2：绝对定位与 margin: auto（已知高度宽度）

**`这种方式无需知道被垂直居中元素的高和宽，但不能兼容低版本的 IE 浏览器。`**

```css
#container {
    position: relative;
    height: 100px;
}

#center {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
```



### 方法3：绝对定位 + CSS3（未知元素的高宽）

**`利用 css3 的transform，可以轻松的在未知元素的高宽的情况下实现元素的垂直居中。`**

```css
#container {
    position: relative;
}

#center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```





### 方法4：flex 布局

**`利用 flex 布局，其中 justify-content 用于设置或检索弹性盒子元素在主轴方向上的对齐方式，而 align-items 属性定义 flex 子项在 flex 容器的当前行的侧轴方向上的对齐方式。不能兼容低版本的 IE 浏览器。`**

```css
#container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```





### 方法5：flex/grid 与 margin: auto（最简单写法）

**`容器元素设为 flex 布局或是 grid 布局，子元素只要写 margin: auto 即可。不能兼容低版本的 IE 浏览器。`**

```css
#container {
    height: 100vh;
    display: grid;
}

#center {
    margin: auto;
}
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





# 如何清除浮动



## 一、浮动到底是什么？

**`浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。由于浮动框脱离文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。`** 



## 二、浮动有什么特点？

**`浮动的特点，可以用八个字总结：脱标、贴边、字围和收缩。`** 

**`一个浮动的内联元素（比如 span img 标签）不需要设置 display: block 就可以设置宽度。`** 

```html
<div>
    这是一段文字
</div>

<style>
    div {
        float: left;
        background: greenyellow;
    }
</style>
```

**`得到以下的效果：`** 

**`我们都知道 div 标签是块级元素，会独占一行，然而上面的例子中将 div 设置为左浮后，其宽度不再是占满一行，而是收紧为内部元素的宽度，这就是浮动第四个特征的含义。`** 



## 三、浮动有什么缺点？

**`先看下面这段代码：`** 

```html
<style>
    .parent {
        border: solid 5px;
        width: 300px;
    }
    
    .child:nth-child(1) {
        height: 100px;
        width: 100px;
        background-color: yellow;
        float: left;
    }
    
    .child:nth-child(2) {
        height: 100px;
        width: 100px;
        background-color: red;
        float: left;
    }
    
    .child:nth-child(3) {
        height: 100px;
        width: 100px;
        background-color: greenyellow;
        float: left;
    }
</style>

<body>
    <div class="parent"> 
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>
```

**`我们想让父容器包裹着三个浮动元素，然而事与愿违，得到却是这样的结果，这就是浮动带来副作用，父容器高度塌陷，于是清理浮动就显得至关重要。`** 



## 四、如何清理浮动？

**`清除浮动不是不用浮动，清除浮动产生的父容器高度塌陷。`** 



### 1. clear: both

**`在最后一个子元素新添加最后一个冗余元素，然后将其设置 clear: both，这样就可以清除浮动。这里强调一点，即在父元素末尾添加的元素必须是一个块级元素，否则无法撑起父级元素高度。`** 

```html
<div id="wrap">
    <div id="inner"></div>
    <div style="clear: both;"></div>
</div>
```

```css
#wrap {
    border: 1px solid;
}

#inner {
    float: left;
    width: 200px;
    height: 200px;
    background: pink;
}
```





### 2. 伪元素清除浮动

**`上面那种方法固然可以清除浮动，但是我们不想在页面中添加这些没有意义的冗余元素，此时如何清除浮动吗？结合 :after 伪元素和 IEhack，可以兼容当前主流的各大浏览器，这里的 IEhack 指的是触发 hasLayout。`** 

```html
<div id="wrap" class="clearfix">
    <div id="inner"></div>
</div>
```



```css
#wrap {
    border: 1px solid;
}

#inner {
    float: left;
    width: 200px;
    height: 200px;
    background: pink;
}

.clearfix:after {
    content: "";
    display: block;
    clear: both;
    height: 0;
    line-height: 0;
    visibility: hidden;
}
```

**`给浮动元素的父容器添加一个 clearfix 的 class，然后给这个 class 添加一个 :after 伪元素，实现元素末尾添加一个看不见的块元素来清理浮动。这是通用的清理浮动方案，推荐使用。`** 





### 3. 给父元素使用 overflow: hidden

**`这种方案让父容器形成了 BFC（块级格式上下文），而 BFC 可以包含浮动，通常用来解决浮动父元素高度塌陷的问题。`** 



#### BFC 的触发方式

**`我们可以给父元素添加以下属性来触发 BFC：`** 

* **`float 为 left | right`** 
* **`overflow 为 hidden | auto | scroll`** 
* **`display 为 table-cell | table-caption | inline-block`** 
* **`position 为 absolute | fixed`** 

**`这里可以给父元素设置 overflow: auto，但是为了兼容 IE 最好使用 overflow: hidden。`** 

**`但这种方法有个缺陷：如果有内容出了盒子，用这种方法就会把多的部分裁切掉，所以这时候不能使用。`** 



#### BFC 的主要特征：

* **`BFC 容器是一个隔离的容器，和其他元素互不干扰，所以我们可以用触发两个元素的 BFC 来解决垂直边距折叠问题。`** 
* **`BFC 不会重叠浮动元素`** 
* **`BFC 可以包含浮动，这可以清除浮动。`** 





### 4. br 标签清除浮动

**`br 标签存在一个属性：clear。这个属性就是能够清除浮动的利器，在 br 标签中设置属性 clear，并赋值 all。即能清除掉浮动`**

```html
<div id="wrap">
	<div id="inner"></div>
    <br clear="all" />
</div>
```

```css
#wrap {
    border: 1px solid;
}

#inner {
    float: left;
    width: 200px;
    height: 200px;
    background: pink;
}
```













# display: none 

**`display: none 不会从 DOM 树中移除。它只是将元素设置为不可见，但元素仍然存在于 DOM 中。`**

**`display: none 元素会完全从文档流中移除。他不占据任何空间，就像元素不存在一样。其他元素会重新排列以填充它留下的空间。`**