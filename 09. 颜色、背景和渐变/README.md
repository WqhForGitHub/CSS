<h2 id="SFpjV">9.1 颜色</h2>
<h3 id="VA2Pe">前景色</h3>
|                                                                             color<br/>取值：<color><br/>初始值：由用户代理指定<br/>适用于：所有元素<br/>计算值：指定的值<br/>继承性：是<br/>动画性：是 |
| --- |


<h3 id="ns9ll">对边框的影响</h3>
<h3 id="ebEir">对表单元素的影响</h3>
<h3 id="aCznD">继承颜色</h3>


---

<h2 id="dJYw4">9.2 背景</h2>
<h3 id="QsSs3">背景色</h3>
|                                                                             background-color<br/>取值：<color><br/>初始值：transparent<br/>适用于：所有元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：是 |
| --- |




<h3 id="t0p3a">裁剪背景</h3>
|                                                                             background-clip<br/>取值：[ border-box  |  padding-box  |  content-box  |  text ]#<br/>初始值：border-box<br/>适用于：所有元素<br/>计算值：声明的值<br/>继承性：否<br/>动画性：否 |
| --- |




![](https://cdn.nlark.com/yuque/0/2024/png/166664/1730603957160-77e88f77-9e47-49a0-b1c4-5e722e93b16b.png)



<h3 id="bznxb">背景图</h3>
|                                                                      background-image<br/>取值：[  <image>#  |  none]<br/>初始值：none<br/>适用于：所有元素<br/>计算值：指定的值，不过所有 URL 都会变成绝对 URL<br/>继承性：否<br/>动画性：否 |
| --- |


<h3 id="T5J2P">背景定位</h3>
|                                                                       background-position<br/>取值：<position>#<br/>初始值：0% 0%<br/>适用于：块级元素和置换元素<br/>百分数：指代元素或源图像上相应的点<br/>计算值：指定 <length> 时是绝对长度偏移，否则是百分数值<br/>继承性：否<br/>动画性：是 |
| --- |




<h3 id="O4wJK">改变定位框</h3>
|                                                                        background-origin<br/>取值：[  border-box  |  padding-box  |  content-box  ]#<br/>初始值：padding-box<br/>适用于：所有元素<br/>计算值：声明的值<br/>继承性：否<br/>动画性：否 |
| --- |


<h3 id="KVsrn">背景重复方式（或不重复）</h3>
|                                                                        background-repeat<br/>取值：<repeat-style>#<br/>展开：<repeat-style> = repeat-x  |  repeat-y  |  [  repeat  |  space  |  round  |  no-repeat  ]{1,2}<br/>初始值：repeat<br/>适用于：所有元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |




<h3 id="RL5VW">背景黏附</h3>
|                                                                         background-attachment<br/>取值：[  scroll  |  fixed  |  local  ]#<br/>初始值：scroll<br/>适用于：所有元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |


<h3 id="ZBkZl">控制背景图的尺寸</h3>
|                                                                        background-size<br/>取值：[ [ <length>  |  <percentage>  |  auto  ]{1,2}  |  cover  |  contain  ]#<br/>初始值：auto<br/>适用于：所有元素<br/>计算值：声明的值，不过长度会计算出绝对值，缺少的部分由 auto 关键字补全<br/>继承性：否<br/>动画性：是 |
| --- |




<h3 id="i78jM">写为一个属性</h3>
|                                                                        background<br/>取值：<br/>初始值：参见各单独属性<br/>适用于：所有元素<br/>百分数：参见各单独属性<br/>计算值：参见各单独属性<br/>继承性：否<br/>动画性：参见各单独属性 |
| --- |











# 3. 渐变

渐变指从一个颜色到另一个颜色的平滑过渡。例如，白色到黑色的渐变从白色开始。经过一系列不同深度的灰色之后，最终变为黑色。渐变的平缓或骤变程序取决于渐变的作用空间。如果在 100 像素的长度内由白色变为黑色，渐变累进的过程中每次变暗 1%，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E6%B8%90%E5%8F%98%E7%9A%84%E7%B4%AF%E8%BF%9B%E8%BF%87%E7%A8%8B.png)

## 1. 线性渐变

线性渐变指沿线性向量填充得到的渐变。这个向量称为梯度线。然而，这条线可能不像你想的那么简单。下面是一些较为简单的渐变，结果如下图所示。

```css
#ex01 {
    background-image: linear-gradient(purple, gold);
}

#ex02 {
    background-image: linear-gradient(90deg, purple, gold);
}

#ex03 {
    background-image: linear-gradient(to left, purple, gold);
}

#ex04 {
    background-image: linear-gradient(-135deg, purple, gold, navy);
}

#ex05 {
    background-image: linear-gradient(to bottom left, purple, gold, navy);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%80%E4%BA%9B%E7%AE%80%E5%8D%95%E7%9A%84%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98.png)

第一个可能是最简单的渐变了，只有两个颜色。这里，渐变从背景定位区域的顶部由第一个颜色变到背景定位区域底部的第二个颜色。

这个渐变之所以从上到下，是因为渐变的默认方向是 to bottom，这与 180deg 和其他等量值的作用是一样的。如果想使用其他方向，可以在声明渐变时先提供一个方向。如图中的其他渐变都这么做了。

线性渐变的基本句法如下：

```css
linear-gradient([[ <angle> | to <side-or-quadrant> ],]? [ <color-stop> [, <color-hint>]? ]#, <color-stop>);
```

色标（color stop）和中色点（color hint）的作用稍后探讨。现在你只需要记住基本的格式：开头是一个可选的方向，然后列出一系列色标和中色点，结尾又是一个色标。

使用 top 和 right 等关键字指明某一边或象限时必须结合关键词 to，这样描述的方向为梯度线指向的方向。因此，linear-gradient(0deg, red, green) 声明的渐变从底部的红色过渡到顶部的绿色，因为梯度线指向零度（元素的顶部），所以终点是绿色。使用角度值时无需加上 to，to 45deg 是无效的，将被忽略。

<br>

### 渐变颜色

渐变中的颜色值可以使用任何类型，包括带 alpha 通道的值（例如 rgba()）和 transparent 等关键字。因此，完全可以从不透明度为零的颜色的开始（或到不透明度为零的颜色终止），实现部分淡出的渐变效果。以下述规则为例，其结果如下图所示。

```css
#ex01 {
    background-image: linear-gradient(to right, rgb(200, 200, 200), rgb(255, 255, 255));
}

#ex02 {
    background-image: linear-gradient(to right, rgba(200, 200, 200, 1), rgba(200, 200, 200, 0));
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E9%80%90%E6%B8%90%E5%8F%98%E6%88%90%E7%99%BD%E8%89%B2%E4%B8%8E%E9%80%90%E6%B8%90%E5%8F%98%E6%88%90%E9%80%8F%E6%98%8E.png)

可以看到，第一个示例从浅灰色逐渐变成白色，而第二个示例从同样不透明的浅灰色逐渐变成透明，因此通过透明的部分可以看到父元素的黄色背景。

当然，渐变中的颜色不限于两个。只要你能接受，想用多少颜色都可以。来看下面这个渐变：

```css
#wdim {
    background-image: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red, orange, yellow, green, blue, indigo, violet);
}
```

这里，梯度线指向 90 度，即元素的右边。这个渐变共有 14 个色标，两两之间以逗号分隔，而且用的都是颜色名称。各颜色均匀分布在梯度上，第一个颜色在线头，最后一个颜色在线尾。色标之间不同的颜色尽量平滑混合，结果如图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%B2%BF%E6%A2%AF%E5%BA%A6%E7%BA%BF%E5%88%86%E5%B8%83%E7%9A%84%E8%89%B2%E6%A0%87.png)

未指明色标的位置时，各色标均匀分布。如果指定了位置呢？

<br>

### 定位色标

`<color-stop>` 的完整句法如下：

```css
<color> [ <length> | <percentage> ]?
```

1. 在每个颜色值之后可以（但不强求）提供一个位置值。这样可以把常规情况下均匀累进的色标变换成其他方式。

先介绍较简单的长度值。我们来实现一条彩虹（只有一条），各颜色相距 25 像素，如下图所示：

```css
#spectrum {
    background-image: linear-gradient(90deg, red, orange 25px, yellow 50px, green 75px, blue 100px, indigo 125px, violet 150px);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%AF%8F%E9%9A%94%2025%20%E5%83%8F%E7%B4%A0%E6%94%BE%E4%B8%80%E4%B8%AA%E8%89%B2%E6%A0%87.png)

<br>

2. 相反地，如果色标的位置超出了梯度线末端，渐变将在梯度线的末尾结束。下述规则的结果如下图所示。

```css
#spectrum {
    background-image: linear-gradient(90deg, red, orange 200px, yellow 400px, green 600px, blue 800px, indigo 1000px, violet 1200px);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%89%B2%E6%A0%87%E5%A4%AA%E8%BF%9C%EF%BC%8C%E8%A3%81%E5%89%AA%E6%B8%90%E5%8F%98.png)

最后一个色标在 1200 像素处，但是梯度线没有这么长，因此渐变大概在蓝色处结束。在超出范围之前，只能显示这么多渐变。

注意，在前述两个示例和图示中，第一个颜色（red）没有长度值。此时，假定色标位于梯度线的开头。类似地，如果最后一个色标没有位置，假定在梯度线的末端（但是请注意，循环渐变则不然，详情参见 9.3.4 节）。

<br>

3. 色标位置的长度值不限于像素值，任何长度值都可以，em，英寸等都能用。此外，在同一个渐变甚至可以混用不同的单位，但是一般不推荐这么做，个中缘由稍后说明。如果愿意，还可以使用负的长度值。此时，色标放在梯度线起点的前方。与梯度线末端的情况一样，起点之前的颜色会被裁剪掉，如下图所示：

```css
#spectrum {
    background-image: linear-gradient(90deg, red -200px, orange 200px, yellow 400px, green 600px, blue 800px, indigo 1000px, violet 1200px);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%89%B2%E6%A0%87%E7%9A%84%E4%BD%8D%E7%BD%AE%E4%B8%BA%E8%B4%9F%E5%80%BC%EF%BC%8C%E8%A3%81%E5%89%AA%E6%B8%90%E5%8F%98.png)

<br>

4. 百分数值相对梯度线的总长度计算。位于 50% 处的色标在梯度线的中点。继续以彩虹为例。这一次我们不每隔 25 像素放一个色标了，而是每隔梯度线长度的 10% 放一个色标。规则如下，结果如下图所示：

```css
#spectrum {
    background-image: linear-gradient(90deg, red, orange 10%, yellow 20%, green 30%, blue 40%, indigo 50%, violet 60%);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%AF%8F%E9%9A%94%E9%95%BF%E5%BA%A6%E7%9A%84%2010%25%20%E6%94%BE%E4%B8%80%E4%B8%AA%E8%89%B2%E6%A0%87.png)

与前面一样，因为最后一个色标在梯度线末端之前，所以最后一个颜色（violet）一直延伸到渐变的末端。这里，除了各色标占据的范围更宽之外，其他都与使用长度值时差不多。

<br>

5. 如果某些色标没有位置值，而其他的色标有，那么没有位置值得色标将均匀分布在有位置值得色标之间。以下述规则为例：

```css
#spectrum {
    background-image: linear-gradient(90deg, red, orange, yellow 50%, green, blue, indigo 95%, violet);
}
```

red 和 violet 没有明确指定位置，因此它们的位置值分别为 0% 和 100%。orange、green 和 blue 则均匀分布在两边明确定义了位置的色标之间。

这意味着，orange 将放在 red 0% 和 yellow 50% 的中点，即 25% 处，而 green 和 blue 在 yellow 50% 和 indigo 95% 之间。两点相差 45%，这一跨度要分成三份，因为四个值之间有三段。计算后得到的位置为 65% 和 80%。最终得到的结果如下图所示，这与下述声明的结果完全一样：

```css
#spectrum {
    background-image: linear-gradient(90deg, red 0%, orange 25%, yellow 50%, green 65%, blue 80%, indigo 95%, violet 100%);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%9C%A8%E6%98%8E%E7%A1%AE%E6%8C%87%E6%98%8E%E4%BD%8D%E7%BD%AE%E7%9A%84%E8%89%B2%E6%A0%87%E4%B9%8B%E9%97%B4%E5%9D%87%E5%8C%80%E5%88%86%E5%B8%83%E8%89%B2%E6%A0%87.png)

<br>

6. 渐变中的每个色标都没指定位置时，各色标沿梯度线均匀分布采用的也是这种机制。如果色标都没位置，第一个假定为 0%，最后一个假定为 100%，其余的色标则均匀分布在二者之间。

你可能想知道把两个色标放在同一点上会出现什么情况，如下所示：

```css
#spectrum {
    background-image: linear-gradient(90deg, red 0%, orange, yellow, green 50%, blue 50%, indigo, violet);
}
```

此时，两个色标将叠放在一起，如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%89%B2%E6%A0%87%E9%87%8D%E5%8F%A0%E7%9A%84%E6%95%88%E6%9E%9C.png)

渐变依然正常沿梯度线过渡，但是在 50% 处，由绿色直接变成蓝色，跨度为零。因此，渐变从 33.3% 处的黄色（0% 到 50% 之间的三分之二处）过渡到 50% 处的绿色，然后立即变成蓝色，再由 50% 处的蓝色过渡到 75% 处（50% 和 100% 的中点）的靛蓝色。

<br>

7. 这种急变效果可用于实现条纹，如下图所示，所用的代码如下：

```css
.stripes {
    background-image: linear-gradient(90deg, gray 0%, gray 25%, transparent 25%, transparent 50%, gray 50%, gray 75%, transparent 75%, transparent 100%);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%80%A5%E5%81%9C%E6%95%88%E6%9E%9C%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%9D%A1%E7%BA%B9.png)

<br>

8. 把两个色标叠放再同一位置是这种情况，那么把后面的色标放在前一个色标之前？比如这样：

```css
#spectrum {
    background-image: linear-gradient(90deg, red 0%, orange, yellow, green 50%, blue 40%, indigo, violet);
}
```

此时，有违常规的色标（这里的 blue）将放在之前色标中位置值最大的位置上。在这个示例中，blue 的位置值为 50%，因为这是前面那个色标的位置。因此，这与前面的把绿色和蓝色叠放在一起的效果是一样的。

这里的关键是，色标的位置将设为之前明确指定位置的色标中最大的那个。因此，在下述规则中，indigo 色标的位置将被设为 50%：

```css
#spectrum {
    background-image: linear-gradient(90deg, red 0%, orange, yellow 50%, green, blue, indigo 33%, violet);
}
```

这里，在 indigo 色标前面指定的最大位置是 yellow 色标的 50%。因此，这个渐变先从红色过渡到橘色再过渡到黄色，然后立即变成靛蓝色，再过渡到蓝紫色。从黄色到绿色到蓝色再到靛蓝色的过渡都只跨零距离。结果如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%A4%84%E7%90%86%E4%B8%8D%E6%AD%A3%E5%B8%B8%E4%BD%8D%E7%BD%AE%E4%B8%8A%E7%9A%84%E8%89%B2%E6%A0%87.png)

正是因为这样，一般才不建议在一个渐变中混用不同的单位。假如混用 rem 和百分数，有可能使用百分数定位的色标在前面使用 rem 定位的色标之前。

<br>

### 设置中色点

现在，我们知道色标的作用了。然而，你可能还记得，线性渐变的句法还支持在每个色标后设置中色点（color hint）：

```css
linear-gradient([[ <angle> | to <side-or-quadrant> ],]? [ <color-stop> [, <color-hint>]? ]#, <color-stop>)
```

`<color-hint>` 的作用是修改两侧两个色标的混合模式。默认情况下，两个色标之间的混合模式是线性的。因此，下述规则得到的结果是下图所示那样：

```css
linear-gradient {
    to right, #000 25%, rgb(90%, 90%, 90%) 75%;
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%A4%E4%B8%AA%E8%89%B2%E6%A0%87%E4%B9%8B%E9%97%B4%E7%9A%84%E7%BA%BF%E6%80%A7%E6%B7%B7%E5%90%88%E6%A8%A1%E5%BC%8F.png)

从 25% 处到 75% 处的混合是恒定的线性累进过程，由黑色（#000）过渡到浅灰色（rgb(90%, 90%, 90%)）。二者的中点，即 50% 处，灰色的浓淡程度正好是两侧两个色标差值的一半，即 rgb(45%, 45%, 45%)。

通过中色点可以改变累进的中点。例如，把原本该在中点处的 rgb(45%, 45%, 45%) 移到两个色标之间的其他位置。下述 CSS 得到的结果如下图所示。

```css
#ex01 {
    background: linear-gradient(to right, #000 25%, rgb(90%, 90%, 90%) 75%);
}

#ex02 {
    background: linear-gradient(to right, #000 25%, 33%, rgb(90%, 90%, 90%) 75%);
}

#ex03 {
    background: linear-gradient(to right, #000 25%, 67%, rgb(90%, 90%, 90%) 75%);
}

#ex04 {
    background: linear-gradient(to right, #000 25%, 25%, rgb(90%, 90%, 90%) 75%);
}

#ex05 {
    background: linear-gradient(to right, #000 25%, 75%, rgb(90%, 90%, 90%) 75%);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%8D%E5%90%8C%E4%B8%AD%E8%89%B2%E7%82%B9%E7%9A%84%E9%BB%91%E8%89%B2%E5%88%B0%E7%81%B0%E8%89%B2%E6%B8%90%E5%8F%98.png)

在第一个示例中（#ex01），使用的是默认的线性累进，中色（45% 黑）在两个色标的中点。

在第二个示例中（#ex02），中色在梯度线的 33% 处。第一个色标在 25% 处，中色在 33% 处，第二个色标在 75% 处。

在第三个示例中（#ex03），中色点在梯度线的 67% 处。因此，渐变从 25% 处的黑色过渡到 67% 处的中色，然后再从 67% 处的中色过渡到 75% 处的浅灰色。

第四个示例和第五个示例展示把中色点放在色标的位置上会得到什么结果。可以看出，结果是颜色急变。

中色点有个不容易理解的行为，即色标到中色点再到色标的累进过程不是两个线性累进这么简单，而是带有一点曲折。下面通过示例说明。如下两个规则看似创建的是相同的渐变，但其实不然，如下图所示。

```css
#ex01 {
    background: linear-gradient(to right, 
        #000 25%, 
        rgb(45%, 45%, 45%) 67%, /* 这是一个色标 */
        rgb(90%, 90%, 90%) 75%);
}

#ex02 {
	background: linear-gradient(to right, 
        #000 25%, 
        67%, /* 这是一个中色点 */
        rgb(90%, 90%, 90%) 75%);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%A4%E6%AC%A1%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98%E4%B8%8E%E4%B8%80%E4%B8%AA%E5%B8%A6%E6%9C%89%E4%B8%AD%E8%89%B2%E7%82%B9%E7%9A%84%E8%BF%87%E6%B8%A1.png)

注意，两个示例中灰色的累进过程是不同的。在第一个示例中，先是黑色到 rgb(45%, 45%, 45%) 的线性累进，然后是 rgb(45%, 45%, 45%) 到 rgb(90%, 90%, 90%) 的线性累进。在第二个示例中，黑色到浅灰色的累进距离相同，但是中色点在 67% 处，因此得到的渐变将尽量在整个范围内平滑一些。两个示例中位于 25%、67% 和 75% 处的颜色都是一样的，但是浓淡程度的变化却不同。

>熟悉动画的人可能会想在中色点上应用渐进函数（例如 ease-in），进一步控制的混合方式。但是截至 2017 年年末还不可以这么做，不过这一功能正在讨论中。

<br>

### 梯度线剖析

掌握色标位置的基本知识之后，该讲解梯度线是如何构建的以及是如何产生所需效果的了。

下面设置一个简单的渐变，以此为例进行说明：

```css
linear-gradient {
    55deg, #4097FF, #FFBE00, #4097FF
}
```

那么，这个一维结构（斜 55 度的直线）是如何创建两维渐变填充的呢？首先，根据指定的角度放置梯度线，确定起点和终点。这条梯度线及由它得到的渐变如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%A2%AF%E5%BA%A6%E7%BA%BF%E7%9A%84%E4%BD%8D%E7%BD%AE%E5%92%8C%E5%A4%A7%E5%B0%8F.png)

首先要明确的一点是，图中的方框不是元素，而是线性渐变图像自身（记得吗，渐变创建的是图像）。渐变图像的尺寸和形状由很多因素决定，至于是由元素背景的尺寸还是 background-size 属性的值决定，稍后再讨论。现在我们只关注图像。

<br>

## 2. 径向渐变

线性渐变能实现特别棒的效果，不过有时你可能想要圆形渐变，比如说聚光灯、圆形阴影、圆形发光等效果。径向渐变的句法与线性渐变类似，不过也有一些区别：

```css
radial-gradient([[ <shape> || <size> ] [ at <position> ]?, | at <position>, ]? [ <color-stop> [, <color-hint>?] [, <color-stop>]+ ])
```

简单来说，你可以声明形状和尺寸（可选），可以声明渐变的中心点在何处（可选），然后声明两个或多个色标，色标之间还可以指定中色点（可选）。形状和尺寸还有些选项，下面逐一说明。

先来看一个简单的径向渐变（有可能是最简单的了）在不同形状的元素中呈现的效果，如下图。

```css
.radial {
    background-image: radial-gradient(purple, gold);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98%E5%9C%A8%E4%B8%8D%E5%90%8C%E5%BD%A2%E7%8A%B6%E4%B8%AD%E5%91%88%E7%8E%B0%E7%9A%84%E6%95%88%E6%9E%9C.png)

这几种情况都没有声明位置，因此使用默认的 center。此外，由于没有声明形状，除方形元素之外都是椭圆形，在方形元素中，形状为圆形。最后，因为没有声明色标或中色点的位置，所以第一个色标放在梯度射线的开头，最后一个色标放在射线的末尾，二者之间为线性混合。

是的，这里是梯度射线，其作用与线性渐变中的梯度线一样。梯度射线从渐变的中心向右眼延伸，渐变的其他部分据此构建（稍后详细说明梯度射线）。

<br>

### 形状和尺寸

1. 首先，径向渐变只有两种可用的形状值（因此也就只能有两种形状），即 circle 和 ellipse。径向渐变的形状可以显式声明，也可以由渐变图像的尺寸推导出来。

再看尺寸。一同往常，指定径向渐变的尺寸时可以只提供一个非负长度值（得到的是圆形），也可以提供两个非负长度值（得到的是椭圆形）。假如有下述径向渐变：

```css
radial-gradient(50px, purple, gold)
```

这是个圆形径向渐变，由中心点处的紫色过渡到 50 像素以外的金色。如果再添加一个长度值，得到的将是椭圆形渐变，宽度与第一个长度相等，高度与第二个长度相等：

```css
radial-gradient(50px 100px, purple, gold)
```

这两个渐变如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%A4%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98.png)

注意，渐变的形状与所在图形的尺寸和形状没有任何关系。如果创建的是圆形渐变，得到就是一个圆，即便在矩形渐变图像中也是如此。同样，椭圆渐变得到的始终是椭圆形，即便在方形渐变图像中也是如此（不过看起来像是圆形，因为椭圆的宽度和高度相等）。

<br>

2. 尺寸也可以使用百分数值，不过只能用于设定椭圆形。圆形不能用百分数指定尺寸，因为无法确定百分数相对哪一轴计算（比如对高 100 像素、宽 500 像素的图像来说，10% 相当于 10 像素还是 50 像素呢）。如果试图为圆形渐变设置百分数值，整个声明都将失效。

为椭圆渐变设置百分数值，跟之前一样，第一个值相对横轴计算，第二个值相对纵轴计算。下述渐变在不同尺寸的图像中得到的结果如下图所示。

```css
radial-gradient(50% 25%, purple, gold)
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%BD%BF%E7%94%A8%E7%99%BE%E5%88%86%E6%95%B0%E8%AE%BE%E5%AE%9A%E6%A4%AD%E5%9C%86%E6%B8%90%E5%8F%98%E7%9A%84%E5%B0%BA%E5%AF%B8.png)

设置椭圆渐变的尺寸时，还可以混用长度值和百分数值，当然注意事项也跟之前一样。如果比较确定，完全可以把椭圆径向渐变的高度设为 10 像素，宽度设为元素宽度的一半，如下图所示：

```css
radial-gradient(50% 10px, purple, gold)
```

<br>

3. 当然，长度值和百分数值不是设定径向渐变尺寸的唯一方式。除此之外，还可以使用四个关键字，各自的效果见下表。

| 关键字                    | 作用                                                         |
| ------------------------- | ------------------------------------------------------------ |
| closest-side              | 径向渐变的形状为圆形时，梯度射线的末端正好接触渐变图像上距径向渐变中心点最近的那一边。形状为椭圆时，梯度射线的末端在横轴和纵轴上都正好接触最近的边 |
| farthest-side             | 径向渐变的形状为圆形时，梯度射线的末端正好接触渐变图像上距径向渐变中心点最远的那一边。形状为椭圆时，梯度射线的末端在横轴和纵轴上都正好接触最远的边 |
| closest-corner            | 径向渐变的形状为圆形时，梯度射线的末端正好接触渐变图像上距径向渐变中心点最近的那一角。形状为椭圆时，梯度射线的末端依然正好接触最近的那一角，而且椭圆的宽高比与设为 closest-side 时一样 |
| farthest-corner（默认值） | 径向渐变的形状为圆形时，梯度射线的末端正好接触渐变图像上距径向渐变中心点最远的那一角。形状为椭圆时，梯度射线的末端依然正好接触最远的那一角，而且椭圆的宽高比与设为 farthest-side 时一样。注意：这是径向渐变的默认尺寸值，如未声明尺寸值，就使用这个值。 |

为了更清楚地理解这几个关键字的效果，请看下图，图中包含各关键字应用到圆形和椭圆渐变上的效果。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98%E5%90%84%E5%B0%BA%E5%AF%B8%E5%85%B3%E9%94%AE%E5%AD%97%E7%9A%84%E6%95%88%E6%9E%9C.png)

设定椭圆径向渐变的尺寸时，关键字不能与长度值或百分数值混用。因此，closest-side 25px 是无效的，将被忽略。

从上图中你可能注意到了，渐变不是从图像的中心开始的。这是因为我们把渐变放到其他位置了，详情参见下一节。

<br>

### 定位径向渐变

1. 如果想把径向渐变的中心放在默认的 center 以外的位置，可以使用对 background-position 属性来说任何有效的位置值。这里不再赘述复杂的句法，如果想回顾，请翻到介绍 background-position 属性那一节（参见 9.2.4 节）。

我所说的任何有效的位置值包括允许的长度值、百分数值和关键字等的任何有效组合。而且，如果省略两个位置值中的一个，那个位置的推导方式也与 background-position 属性一样。举个例子，center 等效于 center center。径向渐变位置与背景位置之间主要的区别是，前者的默认值是 center，而非 0% 0%。

下面举些例子，结果如下图所示。

```css
radial-gradient(at bottom left, purple, gold);
radial-gradient(at center right, purple, gold);
radial-gradient(at 30px 30px, purple, gold);
radial-gradient(at 25% 66%, purple, gold);
radial-gradient(at 30px 66%, purple, gold);
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%94%B9%E5%8F%98%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98%E7%9A%84%E4%B8%AD%E5%BF%83%E7%82%B9%E4%BD%8D%E7%BD%AE.png)

<br>

2. 上述径向渐变都没有明确设定尺寸，因为默认为 farthest-corner。这种默认的行为是合理的，却不是唯一的可能。下面在上述渐变中添加尺寸，看看结果有何变化（见下图）。

```css
radial-gradient(30px at bottom left, purple, gold);
radial-gradient(30px 15px at center right, purple, gold);
radial-gradient(50% 15% at 30px 30px, purple, gold);
radial-gradient(farthest-side at 25% 66%, purple, gold);
radial-gradient(farthest-corner at 30px 66%, purple, gold);
```

很好。那么，如果想实现稍微复杂的渐变，不止两个颜色呢？下面探讨色标。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%94%B9%E5%8F%98%E6%98%8E%E7%A1%AE%E8%AE%BE%E5%AE%9A%E5%B0%BA%E5%AF%B8%E7%9A%84%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98%E7%9A%84%E4%B8%AD%E5%BF%83%E7%82%B9%E4%BD%8D%E7%BD%AE.png)

<br>

### 径向渐变的色标和梯度射线

1. 径向渐变色标的句法和处理方式与线性渐变一样。仍以可能是最简单的径向渐变为例，后面给出了明确声明的等效写法：

```css
radial-gradient(purple, gold);
radial-gradient(purple 0%, gold 100%);
```

径向渐变的梯度射线从中心向外延伸。在 0% 处（起点，也是渐变的中心点），射线上的颜色是紫色。在 100% 处（终点），射线上的颜色是金色。在这两点之间，由紫色平滑过渡到金色，超出终点后，颜色为纯金色。

如果在紫色和金色之间添加一个色标，但不指定它的位置，那么新增的色标将放在起点和终点的中间，颜色的过渡也将相应改变，如下图所示。

```css
radial-gradient(100px circle at center, purple 0%, green, gold 100%);
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%A2%9E%E5%8A%A0%E4%B8%80%E4%B8%AA%E8%89%B2%E6%A0%87.png)

<br>

2. 如果写成 green 50%，得到的结果是一样的。我想你应该明白了。梯度射线上的颜色由紫色到绿色再到金色平滑过渡，超过射线终点后为纯金色。

据此看出（线性渐变）梯度线和梯度射线之间的一个区别：线性渐变由梯度线上各点的颜色沿着与梯度线垂直的方向由两侧延伸得到。径向渐变的情况类似，不过是从梯度射线上向外延伸出无数条线，而且那些线是梯度射线终点构成的椭圆的同心小椭圆和大椭圆。具体方式如下图所示，图中的各个椭圆由梯度射线上不同的点向外延伸得到。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%A2%AF%E5%BA%A6%E5%B0%84%E7%BA%BF%E5%92%8C%E7%94%B1%E5%85%B6%E6%B4%BE%E7%94%9F%E5%87%BA%E6%9D%A5%E7%9A%84%E4%B8%80%E4%BA%9B%E6%A4%AD%E5%9C%86.png)

这就引出一个问题：梯度射线的终点（即 100% 处）是如何确定？终点是梯度射线与所尺寸得到的形状相交的那一点。圆形渐变的情况很简单，梯度射线的终点距形状中心点的距离就是尺寸值指定的长度。因此，对 25px circle 渐变来说，射线的终点距中心点 25 像素。

<br>

3. 椭圆渐变的确定方式基本相同，不过距中心点的距离由椭圆的横轴决定。对 40px 20px ellipse 渐变来说，射线的终点在中心点正右方，二者相距 40 像素。详情如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%AE%BE%E5%AE%9A%E6%A2%AF%E5%BA%A6%E5%B0%84%E7%BA%BF%E7%9A%84%E7%BB%88%E7%82%B9.png)

线性渐变的梯度线与径向渐变的梯度射线之间的另一个区别是，超出终点的部分依然可见。你可能还记得，梯度线只从 0% 处画到 100% 处，超过这一点就没有了。梯度线绝不会比渐变图像最长的轴短，而且通常都更长。而在径向渐变中，径向渐变的尺寸可以设为比渐变图像小，此时，最后一个色标的颜色将从终点一直向外延伸（前面几幅图很多都是这种情况）。

<br>

4. 反过来，如果色标的位置超过了射线的终点，在那个色标之后可能还会看到对应的颜色。以下述渐变为例，其结果如下图所示。

```css
radial-gradient(50px circle at center, purple, green, gold 80px)
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%89%B2%E6%A0%87%E7%9A%84%E4%BD%8D%E7%BD%AE%E8%B6%85%E8%BF%87%E7%BB%88%E7%82%B9.png)

第一个色标没有指定位置，因此设为 0%，即中心点。最后一个色标的位置设为 80px，因此在各个方向上都距中心点 80 像素。位于中间的 green 色标在二者的中间（距中心点 40 像素）。因此，这个渐变在 80 像素处为金色，超出那一点之后的部分也是金色。

<br>

5. 即便明确把圆形的尺寸设为 50 像素，依然如此。圆形的半径仍是 50 像素，只是最后一个色标的位置使得结果不那么明显。如果像下面这样声明：

```css
radial-gradient(80px circle at center, purple, green, gold)
```

或者更简单一点，像这样：

```css
radial-gradient(80px, purple, green, gold)
```

得到的结果不变。

使用百分数设定色标的位置时，也是这种情况。下面两个渐变与前面的示例得到的结果是一样的：

```css
radial-gradient(50px, purple, green, gold 160%)
radial-gradient(80px, purple, green, gold 100%)
```

<br>

6. 那么，如果把色标的位置设为负值？结果基本上与线性渐变一样：位置为负的色标用于确定起点的颜色，在结果中是不可见的。因此，下述渐变得到的结果如下图所示。

```css
radial-gradient(80px, purple -40px, green, gold)
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E8%89%B2%E6%A0%87%E4%BD%8D%E7%BD%AE%E4%B8%BA%E8%B4%9F%E5%80%BC%E6%97%B6%E7%9A%84%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F.png)

对上述渐变来说，第一个色标的位置是 -40px，最后一个色标的位置是 80px（因为最后一个色标没有显式声明位置，所以默认为终点），而中间那个色标的位置在二者的中点。上述渐变得到的结果与下面这样显式声明式一样的：

```css
radial-gradient(80px, purple -40px, green 20px, gold 80px)
```

这个渐变的中心之所以是紫绿色的，是因为它由 1/3 紫色和 2/3 绿色混合而成。从中心点开始，先过渡到绿色，再过渡到金色。梯度射线上紫绿色混合的余下部分，即在负值范围内的那一部分，是不可见的。

<br>

### 极端情况

1. 我们知道如何为径向渐变声明尺寸和位置了，但问题也随之而来：如果圆形渐变的半径为零，或者椭圆渐变的高度或宽度为零会得到什么结果？这样的情况没有你想象中那么难出现，除了可以使用 0px 或 0% 把径向渐变的尺寸明确设为零之外，像下面这样的声明也能导致这样的结果：

```css
radial-gradient(closest-corner circle at top right, purple, gold)
```

渐变的尺寸设为 closest-corner，而中心点移到 top right（右上）角了，因此最近的角距中心点的距离为零像素。这可怎么办？

规范十分明确地指出，遇到这种情况时应该按照圆的半径为大于零的特别小的值渲染渐变。这个半径有多小？可以是十亿分之一像素、一皮米或一普朗克长度。但是，再小也不是零，因此渐变仍是圆形的，只不过这个圆形特别小，有可能根本看不到。如果确实看不到，得到的将是以最后一个色标的颜色填充的纯色。

<br>

2. 椭圆渐变的尺寸为零时，规范定义的行为有所不同。以下述渐变为例：

```css
radial-gradient(0px 50% at center, purple, gold)
```

规范规定，如果椭圆的宽度为零，渲染渐变时把椭圆的高度当做特别大的值，把椭圆的宽度当做比零大的特别小的值。也就是说，相当于渲染一个线性渐变，以过椭圆中心的纵轴对称。规范还说，在这种情况下，使用百分数值设定的色标位置将解析为 0px。通常，这样得到的结果是以最后一个色标的颜色填充的纯色。

<br>

3. 如果使用长度值设定色标的位置，得到的将是纵向对称的横向线性渐变。例如下述渐变，其结果如下图所示。

```css
radial-gradient(0px 50% at center, purple 0px, gold 100px)
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E5%AE%BD%E5%BA%A6%E4%B8%BA%E9%9B%B6%E7%9A%84%E6%A4%AD%E5%9C%86%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98.png)

结果怎么会这样？首先，前面说过，规范规定，横向宽度为 0px 时，当做不为零但极小的一个值。为了便于说明，假设为千分之一像素（0.001 px）。此时，椭圆的宽度为千分之一像素，而高度为图像的一半。其次，为了便于说明，假设高度为 100 像素。因此，第一个椭圆形的宽度为千分之一像素，高度为 100 像素，即宽高比为 0.001:100，或 1:100000。

那么，沿梯度射线绘制的每个椭圆的宽高比都是 1:100000。这意味着，梯度射线上距起点 0.5 像素处的椭圆宽度为 1 像素，高度为 100000 像素。在 1 像素处，宽度为 2 像素，高度为 200000 像素。在 5 像素处，宽度为 10 像素，高度为一百万像素。在 50 像素处，宽度为 100 像素，高度为一千万像素。以此类推。其他位置的尺寸如下图所示。

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E7%89%B9%E5%88%AB%E7%89%B9%E5%88%AB%E9%AB%98%E7%9A%84%E6%A4%AD%E5%9C%86.png)

这些椭圆绘制出来的其实是一系列竖线，因此你看到的是一个对称的线性渐变。严格来说，并不是竖线，但看到的却是。得到的结果之所以是纵向对称的横向渐变，是因为椭圆的中心在渐变的中心点，两边都绘制出了颜色。按理说这应该是径向渐变，但看到的结果却不尽然。

<br>

4. 反过来，如果椭圆有宽度但没高度，结果又大不相同了。你可能以为得到的将是以横轴对称的纵向渐变，但其实不然。结果将是与最后一个色标同色的纯色（若是稍后要讲的循环渐变，结果也是纯色，但颜色是渐变的中值色）。因此，下述两个渐变得到的结果都是纯金色。

```css
radial-gradient(50% 0px at center, purple, gold)
radial-gradient(50% 0px at center, purple 0px, gold 100px)
```

为什么高度为零时结果变了？这与构建径向渐变的梯度射线有关。同样，根据规范，零距离视作特别小的非零数。跟前面一样，我们假设 0px 被解析为 0.001px，而 50% 的计算结果为 100 像素。此时，宽高比为 100:0.001，即 100000:1。

因此，椭圆的高度为 1 像素时，宽度必定是 100000 像素。但是最后一个色标在 100 像素处。在那一点绘制的椭圆，宽度为 100 像素，高度为千分之一像素。紫色到金色的过渡在那千分之一像素范围内也是有的。不过，在那之后的部分将是金色，即最后一个色标的颜色。因此，我们只能看到金色。

你可能以为，把最后一个色标的位置设为 100000px 时，将看到一条细长的紫色线横穿图像。确实可能，前提是浏览器把 0px 解析为 0.001px。如果浏览器把零距离解析为 0.00000001px，要把最后要给色标的位置向外移特别长一段距离才能看到那条细线。当然，这还是假设浏览器会计算并绘制这样的椭圆，而不是草草了事。说实话，更有可能是后一种情况。如果是我负责编写浏览器渲染渐变的代码，我就会这么做。

那么，如果椭圆的宽度和高度都是零？此时，规范规定，采用宽度为零的处理机制。因此，得到的将是对称的线性渐变。

>截至 2017 年年末，浏览器对这些极端情况的支持还不稳定。这还算好的，有些浏览器甚至会在所有情况下都使用最后一个色标的颜色填充，而有些浏览器在某些情况下则拒绝绘制这样的渐变。

<br>

## 3. 处理渐变图像

<br>

## 4. 循环渐变

```css
background: repeating-linear-gradient
```

<br>

# 4. 盒子投影

前面的章节探讨过 text-shadow 属性，其作用是为非置换元素中的文本添加投影。有个类似的属性，用于为元素所在的框体创建投影，即 box-shadow。

```css
box-shadow

取值：none | [inset? && <length>{2, 4} && <color>?]#
初始值：none
适用于：所有元素
计算值：<length> 值计算为绝对长度值，<color> 值按内部方式处理，此外为指定的值
继承性：否
动画性：是
```

在主要介绍背景和渐变的一章中讨论投影好像不太合适，但是笔者这么做是有缘由的，稍后告诉你。

1. 下面举个简单的例子。这个盒子投影向元素框下方偏移 10 像素、向右偏移 10 像素，没有展开尺寸，也不模糊，颜色为半不透明的黑色。此外，身后的 body 元素有一个重复的背景。得到的结果如下图所示。

```css
#box {
    background: silver;
    border: medium solid;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E7%9B%92%E5%AD%90%E6%8A%95%E5%BD%B1.png)

可以看到，透过半不透明（如果不习惯，可以说成半透明）的投影能看到 body 元素的背景。因为没有设置模糊和展开距离，所以投影的外形完全模仿元素框本身。至少，看起来是这样。

<br>

2. 之所以说投影看起来是模仿元素框的形状，是因为投影只在元素边框的外边界以外才看得到。这一点从上图中看不出来，因为元素的背景是不透明的。你可能以为投影会延伸到元素背后，但事实并非如此。以下述代码为例，其结果如下图所示。

```css
#box {
    background: transparent;
    border: thin dashed;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E7%9B%92%E5%AD%90%E6%8A%95%E5%BD%B1%E4%B8%8D%E6%98%AF%E4%B8%80%E4%B8%AA%E5%AE%8C%E6%95%B4%E7%9A%84%E5%9B%BE%E5%BD%A2.png)

看起来好像是元素的内容（及内边距和边框）区域破坏了部分投影。而事实是，根据规范，盒子投影就是这样绘制的，根本不会出现在那些区域。但是，如下图所示，带投影看的元素框背后的背景却能透过元素看见。正是因为 box-shadow 属性与背景和边框有这一层关系（可能让人觉得匪夷所思），所以才在这里介绍，而没在之前的章节讨论。

前面定义的盒子投影设定了两个长度值。第一个定义横向偏移，第二个定义纵向偏移。正数把投影向下和向右移动，负数把投影向上和向左移动。

<br>

3. 如果提供第三个值，定义的是模糊距离，即指定给模糊留出多少空间。第四个值定义展开距离，这会改变投影的尺寸。正值在模糊之前延伸投影，负值使投影变小。下述代码得到的结果如下图所示。

```css
.box:nth-of-type(1) {
    box-shadow: 1em 1em 2px rgba(0, 0, 0, 0.5);
}

.box:nth-of-type(2) {
    box-shadow: 2em 0.5em 0.25em rgba(128, 0, 0, 0.5);
}

.box:nth-of-type(3) {
    box-shadow: 0.5em 2ch 1vw 13px rgba(0, 128, 0, 0.5);
}

.box:nth-of-type(4) {
    box-shadow: -10px 25px 5px -5px rgba(0, 128, 128, 0.5);
}

.box:nth-of-type(5) {
    box-shadow: 0.67em 1.33em 0 -0.1em rgba(0, 0, 0, 0.5);
}

.box:nth-of-type(6) {
    box-shadow: 0.67em 1.33em 0.2em -0.1em rgba(0, 0, 0, 0.5);
}

.box:nth-of-type(7) {
    box-shadow: 0 0 2ch 2ch rgba(128, 128, 0, 0.5);
}
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E6%A8%A1%E7%B3%8A%E8%B7%9D%E7%A6%BB%E5%92%8C%E5%B1%95%E5%BC%80%E8%B7%9D%E7%A6%BB%E4%B8%8D%E5%90%8C%E7%9A%84%E6%8A%95%E5%BD%B1.png)

你可能注意到了，上图中有些框体带有圆角（通过 border-radius 属性实现），而相应的投影也变成了与之匹配的曲线。还好，这是默认行为。

<br>

4. box-shadow 还有一点没有涉及，即 inset 关键字。如果在 box-shadow 属性的值中加上 inset，投影在框体内部渲染，（从视觉上来讲）不再浮动在画布之上，而像是向内凹陷的。下面在前面那一系列示例的基础上实现内凹的投影，结果如下图所示。

```css
.box:nth-of-type(1) {
    box-shadow: inset 1em 1em 2px rgba(0, 0, 0, 0.5);
}

.box:nth-of-type(2) {
    box-shadow: inset 2em 0.5em 0.25em rgba(128, 0, 0, 0.5);
}

.box:nth-of-type(3) {
    box-shadow: 0.5em 2ch 1vw 13px rgba(0, 128, 0, 0.5) inset;
}

.box:nth-of-type(4) {
    box-shadow: inset -10px 25px 5px -5px rgba(0, 128, 128, 0.5);
}

.box:nth-of-type(5) {
    box-shadow: 0.67em 1.33em 0 -0.1em rgba(0, 0, 0, 0.5) inset;
}

.box:nth-of-type(6) {
    box-shadow: inset 0.67em 0.33em 0.2em -0.1em rgba(0, 0, 0, 0.5);
}

.box:nth-of-type(7) {
    box-shadow: 0 0 2ch 2ch rgba(128, 128, 0, 0.5) inset;
}                                                                                                      
```

![](https://front-end-1257950569.cos.ap-guangzhou.myqcloud.com/CSS%20%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%EF%BC%88%E7%AC%AC4%E7%89%88%EF%BC%89/%E7%AC%AC9%E7%AB%A0%EF%BC%9A%E9%A2%9C%E8%89%B2%E3%80%81%E8%83%8C%E6%99%AF%E5%92%8C%E6%B8%90%E5%8F%98/%E4%B8%8D%E5%90%8C%E7%9A%84%E5%86%85%E5%87%B9%E6%8A%95%E5%BD%B1.png)

注意，inset 关键字可以在其他值前面，也可以在后面，唯独不能在长度和颜色之间。0 0 0.1em inset gray 这样的值是无效的，将被忽略，因为 inset 关键字的位置不对。

<br>

5. 最后，与文本投影一样，一个元素可以应用任意多个盒子投影，各投影之间以逗号分隔。而且，部分投影可以是内凹的，部分可以是外凸的。下述示例只是无限可能中的两例：

```css
#shadowbox {
    background: #EEE;
    box-shadow: inset 1ch 1ch 0.25ch rgba(0, 0, 0, 0.25), 1.5ch 1.5ch 0.4ch rgba(0, 0, 0, 0.33);
}

#wacky {
    box-shadow: inset 10px 2vh 0.77em 1ch red, 1cm 1in 0 -1px cyan inset, 2ch 3ch 0.5ch hsla(117, 100%, 50%, 0.343),
        -2ch -3ch 0.5ch hsla(297, 100%, 50%, 0.23);
}
```

>filter 属性也能为元素创建投影，不过较之 box-shadow，其行为更接近 text-shadow，而且投影将同时应用到元素框和文本上。详情参见第 19 章。

