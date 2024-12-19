<h2 id="Nkq8Y">17.1 CSS 过渡</h2>
CSS 过渡能控制一段时间内属性的值如何变成另一个值。因此，我们可以让属性的值逐渐变化，自然一些，不那么突兀。例如：

```css
button {
  color: magenta;
  transition: color 200ms ease-in 50ms;
}

button:hover {
  color: rebeccapurple;
  transition: color 200ms ease-out 50ms;
}
```



---

<h2 id="y8227">17.2 定义过渡的属性</h2>
<h3 id="tGtS5">限制受过渡影响的属性</h3>
     transition-property 属性指定想应用过渡效果的 CSS 属性名称。这样便可以限定只在特定的属性上应用过渡效果，而其他属性值的变化则瞬间完成。

|                                                             transition-property<br/>取值：none  |  [ all  |  <property-name> ]#<br/>初始值：all<br/>适用于：所有元素，以及 :before 和 :after 伪元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |




<h3 id="oKLYH">设置过渡持续时间</h3>
|                                                               transition-duration<br/>取值：<time>#<br/>初始值：0s<br/>适用于：所有元素，以及 :before 和 :after 伪元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |




<h3 id="dJAHa">调整过渡的内部时序</h3>
|                                                               transition-timing-function<br/>取值：<timing-function>#<br/>初始值：ease<br/>适用于：所有元素，以及 :before 和 :after 伪元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |




<h3 id="P2DJk">延迟过渡</h3>
|                                                                    transition-delay<br/>取值：<time>#<br/>初始值：0s<br/>适用于：所有元素，以及 :before 和 :after 伪元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |




<h3 id="CS8VR">transition 简写属性</h3>
transition 简写属性把目前介绍的四个属性合而为一：transition-property、transition-duration、transition-timing-function 和 transition-delay。

|                                                                       transition<br/>取值：<single-transition>#<br/>初始值：all  0s  ease  0s<br/>适用于：所有元素，以及 :before 和 :after 伪元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否<br/><single-transition> = [ [ none  |  <transition-property> ]  ||  <time>  ||  <transition-timing-function>  ||  <time> ]# |
| --- |


