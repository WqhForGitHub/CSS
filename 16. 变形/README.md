<h2 id="jHhuR">                  16.1 坐标系</h2>
![笛卡尔坐标系](https://cdn.nlark.com/yuque/0/2024/png/166664/1730110211908-b13cae5a-c902-45e8-ac34-7bd2cb56f6dc.png)



![绕三个轴旋转](https://cdn.nlark.com/yuque/0/2024/png/166664/1730110247176-1df641ce-880d-4b13-a87a-9786b5e9bb3e.png)



其实对于2D 变形中只需关注全周 360 度极坐标系，即由 x 轴和 y 轴构成的平面。对旋转来说，2D 旋转其实是在绕 z 轴旋转。

![在 xy 平面上旋转](https://cdn.nlark.com/yuque/0/2024/png/166664/1730110405475-ea0ad633-ed2a-432d-b581-59413b789da5.png)



---

<h2 id="iHjLB">16.2 变形</h2>
|                                                                      Transform<br/>取值：<transform-list>  |  none<br/>初始值：None<br/>适用于：除基元行内框之外的所有元素<br/>百分数：相对范围框计算<br/>计算值：指定的值，不过相对长度值会计算为绝对长度<br/>继承性：否<br/>动画性：作为一种变形 |
| --- |


1. 注意：变形的元素有自己的堆叠上下文。经过缩放的元素可能比变形前小或大，不过元素在页面上所占的空间与变形前保持不变。这一点对所有变形函数都成立。
2. 取值句法中的 <transform-list> 也需要说明一下。这个占位符表示一个或多个变形函数，一个接一个，中间以空格分隔，像下面这样：

```css
#example {transform: rotate(30deg) skew(-25deg) scaleY(2);}
```

![](https://cdn.nlark.com/yuque/0/2024/png/166664/1730111036403-0fd12151-04cf-4d6b-a418-7cdf60843aae.png)

3. 变形函数一次只处理一个，从第一个（最左边）开始，一直到最后一个（最右边）。从头到尾的处理顺序是很重要的，顺序变了，得到的结果可能就大有不同。

```css
img#one {translateX(200px) rotate(45deg);}
img#two {rotate(45deg) translateX(200px);}
```

![](https://cdn.nlark.com/yuque/0/2024/png/166664/1730111322293-ecf204ad-919c-48b5-afed-1d79bfc5cf58.png)

总结：在第一个实例中，图像先沿 x 轴移动 200 像素，然后旋转 45°。在第二个示例中，图像先旋转 45°，然后沿 x 轴移动 200 像素，然而这里的 x 轴指的是变形后元素的 x 轴，而不是父元素、页面或视区的 x 轴。也就是说，元素旋转后，其 x 轴（及其他轴）也随之旋转了。所有变形都是相对元素自己的参照系实施的。



**变形函数**

translate()                 scale()          	rotate()               skew()               matrix()

translate3d()             scale3d()      	rotate3d()           skewX()             matrix3d()

translateX()               scaleX()        	rotateX()             skewY()             perspective()

translateY()               scaleY()	      	rotateY()

translateZ()               scaleZ()        	rotateZ()                



**平移函数**

| 函数 | 可取的值 |
| --- | --- |
| translateX(), translateY() | <length>  |  <percentage> |


| 函数 | 可取的值 |
| --- | --- |
| translate() | [  <length>  |  <percentage>  ] [,  <length>  |  <percentage>]? |


| 函数 | 可取的值 |
| --- | --- |
| translateZ() | <length> |


| 函数 | 可取的值 |
| --- | --- |
| translate3d() | [  <length>  |  <percentage> ], [ <length>  |  <percentage>], [  <length>  ] |


