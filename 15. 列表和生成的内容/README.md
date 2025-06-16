<h2 id="jamfz">15.1 列表</h2>
<h3 id="p0G7S">列表的类型</h3>
|                                                                 list-style-type<br/>取值<br/>初始值：disc<br/>适用于：display 属性的值为 list-item 的元素<br/>继承性：是<br/>计算值：指定的值 |
| --- |


![](https://cdn.nlark.com/yuque/0/2024/png/166664/1730272944780-831a6fe1-a31a-4813-b8c8-7c8ef098fc15.png)



```css
ol li {list-style-type: decimal;}
li.off {list-style-type: none;}
```

```html
<ol>
  <li>Item the first</li>
  <li class="off">Item the second</li>
  <li>Item the third</li>
  <li class="off">Item the fourth</li>
  <li>Item the fifth</li>
</ol>
```

![](https://cdn.nlark.com/yuque/0/2024/png/166664/1730273121672-aaa21a27-5456-43e8-819f-e1c772e4343d.png)



**字符串记号**

```css
.list01 {list-style-type: "%";}
.list02 {list-style-type: "Hi! ";}
.list03 {list-style-type: "†";}
.list04 {list-style-type: "⌘";}
.list05 {list-style-type: "🤔";}
```

![](https://cdn.nlark.com/yuque/0/2024/png/166664/1730273224128-cb960f8a-fd7d-4212-a02e-6c78759b2d9e.png)



<h3 id="uQCc1">列表项目图像</h3>
|                                                           list-style-image<br/>取值：<uri>  |  <image>  |  none  |  inherit<br/>初始值：none<br/>适用于：display 属性的值为 list-item 的元素<br/>继承性：是<br/>计算值：<uri>值计算为绝对 URI；否则为 none |
| --- |


```css
ul li {list-style-image: url(ohio.gif);}
```

![](https://cdn.nlark.com/yuque/0/2024/png/166664/1730273556633-864faeda-27c2-4e75-a833-e4d48af4e989.png)



```css
ul {list-style-image: url(ohio.gif); list-style-type: square;}
ul ul {list-style-image: none;}
```

![](https://cdn.nlark.com/yuque/0/2024/png/166664/1730273702858-c478914d-19db-43e5-a9b2-f98ead31a610.png)



<h3 id="Ej0TL">列表记号的位置</h3>
|                                                               list-style-position<br/>取值：inside  |  outside  |  inherit<br/>初始值：outside<br/>适用于：display 属性的值为 list-item 的元素<br/>继承性：是<br/>计算值：指定的值 |
| --- |


```css
li.first {list-style-position: inside;}
li.second {list-style-position: outside;}
```

![](https://cdn.nlark.com/yuque/0/2024/png/166664/1730273993198-8cd0caf8-f586-4e74-ba42-966adcc2f9e5.png)



<h3 id="o9lW1">列表样式的简写属性</h3>
|                                                                    list-style<br/>取值：[  <list-style-type>  ||  <list-style-image>  ||  <list-style-position> ]  |  inherit<br/>初始值：参见各单独属性<br/>适用于：display 属性的值为 list-item 的元素<br/>继承性：是<br/>计算值：参见各单独属性 |
| --- |


```css
li {list-style: url(ohio.gif) square inside;}
```

![](https://cdn.nlark.com/yuque/0/2024/png/166664/1730274275298-69a8cf43-9f2b-4421-ad49-e04dd93c6d44.png)

<h3 id="npvi4">列表的布局</h3>


---

<h2 id="X0gNK">15.2 生成的内容</h2>
<h3 id="odspG">插入生成的内容</h3>
<h3 id="v7uMz">指定内容</h3>
|                                                                          content<br/>取值<br/>初始值：normal<br/>适用于：::before 和 ::after 伪元素<br/>继承性：否<br/>计算值：<uri> 值计算为绝对 URI；引用的属性计算为最终字符串；否则为指定的值 |
| --- |


  

**插入属性值**



**生成引号**

|                                                                         quotes<br/>取值<br/>初始值：各用户代理有所不同<br/>适用于：所有元素<br/>继承性：是<br/>计算值：指定的值 |
| --- |


<h3 id="mI41l">计数器</h3>


**重置和增量**

|                                                             counter-reset<br/>取值<br/>初始值：各用户代理有所不同<br/>适用于：所有元素<br/>继承性：否<br/>计算值：指定的值 |
| --- |


|                                                            counter-increment<br/>初始值：各用户代理有所不同<br/>适用于：所有元素<br/>继承性：否<br/>计算值：指定的值 |
| --- |


<h2 id="y2J0E"></h2>


