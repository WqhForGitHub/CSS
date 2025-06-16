

<h2 id="dNoqS">18.1 定义关键帧</h2>
```css
@keyframes animation_identifer {
  keyframe_selector {
    property: value;
    property: value;
  }

   keyframe_selector {
    property: value;
    property: value;
  }
}

@keyframes fadeout {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes color-pop {
  0% {
    color: black;
    background-color: white;
  }

  33% {
    color: gray;
    background-color: yellow;
  }

  100% {
    color: white;
    background-color: orange;
  }
}
```



---

<h2 id="TmuuE">18.2 设置关键帧动画</h2>
  

---



<h2 id="x3hec">18.3 关键帧选择符</h2>
```css
@keyframes W {
  from: {
    left: 0;
    top: 0;
  }

  25%, 75% {
    top: 100%;
  }

  50% {
    top: 50%;
  }

  to {
    left: 100%;
    top: 0;
  }
}
```



<h3 id="ibJOJ">省略 from 和 to 值</h3>
```css
@keyframes change_bgcolor {
  45% {background-color: green;}
  55% {background-color:blue;}
}
```

```css
@keyframes change_bgcolor {
  0%,
  100% {background-color: red;}
  45% {background-color: green;}
  55% {background-color: blue;}
}
```



<h3 id="gEFiZ">重复关键帧属性</h3>
```css
@keyframes W {
  from, to {
    top: 0;
    left: 0;
  }

  25%, 75% {
    top: 100%;
  }

  50% {
    top: 50%;
  }

  to {
    left: 100%;
  }
}
```



<h3 id="QLlhk">支持动画的属性</h3>
<h3 id="i9OKy">不支持动画但不被忽略的属性</h3>
<h3 id="p8Asb"> 通过脚本编辑 @keyframes 动画</h3>
```css
@keyframes W {
  from, to {
    top: 0;
    left: 0;
  }

  25%, 75% {
    top: 100%;
  }

  50% {
    top: 50%;
  }

  to {
    left: 100%;
  }
}
```



---

<h2 id="AgEXO">18.4 把动画应用到元素上</h2>
<h3 id="RSTgg">指定动画的名称</h3>
animation-name 属性的值为一个逗号分隔的列表，指定想应用的关键帧动画的名称。这里所说的名称是指使用 @keyframes 规则定义动画时设定的无引号标识符或有引号的字符串（抑或二者混用）。

|                                                                  animation-name<br/>取值：[  <single-animation-name>  |  none ]#<br/>初始值：none<br/>适用于：所有元素，以及 ::before 和 ::after 伪元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |


1. 如果指定的一系列的关键帧标识符中有一个不存在，不会导致所有动画都无法应用，只是那个不存在的动画被忽略，其他有效的动画仍将应用。                                                                          被忽略后，如果后来又通过某种方式变成有效的动画了，在变有效的那一刻又会开始应用。

```css
@keyframes change_bgcolor {
  0%,
  100% {background-color: red;}
  45% {background-color: green;}
  55% {background-color: blue;}
}

div {
  animation-name: change_bgcolor;
}
```

```css
div {
  animation-name: change_bgcolor, round, W;
}
```



2. 如果同时在两个关键帧动画中改变元素的背景色，后列出的动画将覆盖先列出的动画中设定的背景，不过前提是属性（这里指的是背景色）是同时以动画形式变化的。

```css
div {animation-name: change_bgcolor, bg-shift;}

@keyframes bg-shift {
  0%, 100% {background-color: blue;}
  35% {background-color: orange;}
  55% {background-color: red;}
  65% {background-color: purple;}
}

@keyframes change_bgcolor {
  0%, 100% {background-color: yellow;}
  45% {background-color: green;}
  65% {background-color: blue;}
}                                                  
```



3. 省略 from（0%）或 to（100%）关键帧的动画有些特殊。例如，我们把 bg-shift 中定义的第一个关键帧删掉：

```css
div {animation-name: change_bgcolor, bg-shift;}

@keyframes bg-shift {
  35% {background-color: orange;}
  55% {background-color: red;}
  65% {background-color: purple;}
}

@keyframes change_bgcolor {
  0%, 100% {background-color: yellow;}
  45% {background-color: green;}
  55% {background-color: blue;}
}
```



<h3 id="JJP2q">定义动画的时长</h3>
animation-duration 属性定义动画迭代一次用时多久，单位为秒（s）或毫秒（ms）。

|                                                            animation-duration<br/>取值：<time>#<br/>初始值：0s<br/>适用于：所有元素，以及 ::before 和 ::after 伪元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |


```css
div {
  animation-name: change_bgcolor, round, W;
  animation-duration: 200ms, 100ms, 0.5s;
}
```



1. 如果只提供一个持续时间，所有动画都播放那么长时间。假如 animation-duration 的值比 animation-name 的值少，也不会导致什么问题，缺少的值将成组复制。因此，对下述规则来说：

```css
div {
  animation-name: change_bgcolor, spin, round, W;
  animation-duration: 200ms, 5s; /* 等效于 200ms, 5s, 200ms, 5s */
}
```



<h3 id="IZvpt">声明动画的迭代次数</h3>
|                                                       animation-iteration-count<br/>取值：[ <number>  |  infinite ]#<br/>初始值：1<br/>适用于：所有元素，以及 ::before 和 ::after 伪元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |


```css
.flag {
  animation-name: red, white, blue;
  animation-duration: 2s, 4s, 6s; 
  animation-iteration-count: 6, 3, 2;
}
```



<h3 id="q7qMu">设置动画的播放方向</h3>
|                                                             animation-direction<br/>取值：[ normal  |  reverse  |  alternate  |  alternate-reverse ]#<br/>初始值：Normal<br/>适用于：所有元素，以及 ::before  和 ::after 伪元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |


animation-direction 属性定义按什么方向播放动画的关键帧。可取的值有四个：

**animation-direction：normal**

设为 normal 时（或者省略，默认为 normal），动画的每次迭代都从 0% 关键帧向 100% 关键帧播放。

**animation-direction：reverse**

reverse 值逆序播放各次迭代，即从 100% 关键帧向 0% 关键帧播放。逆转动画的方向也就逆转了 animation-timing-function。

**animation-direction: alternate**

alternate 值的意思是第一次迭代（以及后续各奇数次迭代）从 0% 向 100% 播放，第二次迭代（以及后续各偶数次迭代）方向相反，从 100% 向 0% 播放。

**animation-direction: alternate-reverse**

alternate-reverse 值与 alternate 值类似，只不过是反过来的。第一次迭代（以及后续各奇数次迭代）从 100% 向 0% 播放，第二次迭代（以及后续各偶数次迭代）方向相反，从 0% 向 100% 播放。

```css
.ball {
  animation-name: bouncing;
  animation-duration: 400ms;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

@keyframes bouncing {
  from {
    tranform: translateY(500px);
  }

  to {
    transform: translateY(0);
  }
}
```



<h3 id="mNBmB">延迟播放动画</h3>
animation-delay 属性定义浏览器把动画附加到元素上之后等待多久开始第一次迭代。

|                                                            animation-delay<br/>取值：<time>#<br/>初始值：0s<br/>适用于：所有元素，以及 ::before 和 ::after 元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |




<h3 id="IKQTX">动画事件</h3>


<h3 id="CH1U7">改变动画的内部时序</h3>
animation-timing-function 属性指明动画在一次循环（或迭代）中如何演进。 

|                                                                animation-timing-function<br/>取值：[ ease  |  linear  |  ease-in  |  ease-out  |  ease-in-out  |  step-start  |  step-end  |  steps(<integer>, start)  |  steps(<integer, end>)  |  cubic-bezier(<number>, <number>, <number>, <number>) ]#<br/>初始值：ease<br/>适用于：所有元素，以及 ::before 和 ::after 伪元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |




<h3 id="Cor8b">设置动画的播放状态</h3>
如果想暂停和继续播放动画，可以使用 animation-play-state 属性定义动画是播放还是暂停的。

|                                                                  animation-play-state<br/>取值：[ running  |  paused ]#<br/>初始值：running<br/>适用于：所有元素，以及 ::before 和 ::after 伪元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |


<h3 id="dyJKw">动画的填充模式</h3>
|                                                                  animation-fill-mode<br/>取值：[ none  |  forwards  |  backwards  |  both ]#<br/>初始值：none<br/>适用于：所有元素，以及 ::before 和 ::after 伪元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |




---

<h2 id="sNutg">18.5 写为一个属性</h2>
|                                                                 animation<br/>取值：[ <animation-name>  ||  <animation-duration>  ||  <animation-timing-function>  ||  <animation-delay>  ||  <animation-iteration-count>  ||  <animation-direction>  ||  <animation-fill-mode>  ||  <animation-play-state> ]#<br/>初始值：0s ease 0s 1 normal none running none<br/>适用于：所有元素，以及 ::before 和 ::after 伪元素<br/>计算值：指定的值<br/>继承性：否<br/>动画性：否 |
| --- |




---

<h2 id="nGT8B">18.6 动画、特指度和优先顺序</h2>
<h3 id="QgM5Z">特指度和 !important</h3>
规范指出：动画覆盖常规的规则，但是能被带有 !important 的规则覆盖。尽管如此，不要在动画声明块中使用 !important。这样做是无效的，反而会导致相应的属性和值被忽略。

<h3 id="FWEPv">动画顺序</h3>
<h3 id="OHbsV">display: none 对动画迭代的影响</h3>
如果把元素的 display 属性设置为 none，元素或其后代上的动画迭代将停止，好似把动画从元素上拆离了一样。把 display 属性变为某个可见的值之后，所有动画属性重新应用到元素上，动画将从头开始播放：

```css
.snowflake {
  animation: spin 2s linear 5s 20;
}
```

在这个示例中，雪花将旋转 20 次，每次用时 2 秒钟，而且第一次旋转等待 5 秒才开始。如果 15 秒后把 .snowflake 元素的 diaplay 属性设为 none，元素在消失之前已经完成了 5 次旋转（等待 5 秒，5 次旋转各用 2 秒钟）。如果把 display 属性的值改成 none 以外的值，动画将从头开始播放：延迟 5 秒之后开始旋转 20 次。从视线中消失之前已经迭代了多少次循环并没有关系。



<h3 id="yySm2">动画和 UI 线程        </h3>
CSS 动画在用户界面（UI）线程中的优先级最低。如果页面加载时附加了多个动画，而且 animation-delay 为正值，延迟结束后倘若 UI 线程不可用，动画不会播放。

有如下假设：

+ 所有动画都需要 UI 线程（也就是说不使用 GPU，参见本章前面“动画链”一节）。
+ 有 20 个动画，animation-delay 属性的值分别为 1s、2s、3s、4s 等，每隔一秒开始播放一个动画。
+ 页面或应用的加载时间很长，在页面中绘制出要应用动画效果的元素与 JavaScript 下载完毕、解析并执行之间相隔 11 秒。

那么，在 UI 线程可用时前 11 个动画的延迟已经结束，因此这 11 个动画将同时开始播放。余下的动画则每隔一秒开始一个。



---

<h2 id="qjaIB">18.7 癫痫和前庭功能失调</h2>
```css
@media (prefers-reduced-motion) {
  * {animation: none !important; transition: none !important;}
}
```

