# CSS 圣杯布局（Holy Grail Layout）和双飞翼布局（Double Wing Layout）详解

圣杯布局和双飞翼布局都是前端经典的 **三栏布局方案**：

> **左侧固定宽度 + 中间自适应 + 右侧固定宽度**

例如：

```
+--------------------------------+
|        Header                  |
+--------------------------------+
|  左侧  |       中间内容      | 右侧 |
| 200px |      auto           |200px |
+--------------------------------+
|        Footer                  |
+--------------------------------+
```

它们诞生于 **CSS 浮动布局时代**，核心解决两个问题：

1. 中间内容优先渲染（HTML 中 main 放最前）
2. 两边固定，中间自适应

([百度智能云][1])

---

# 一、为什么需要圣杯 / 双飞翼？

假设普通写法：

```html
<div class="left">左</div>
<div class="main">中</div>
<div class="right">右</div>
```

CSS：

```css
.left {
  width: 200px;
  float: left;
}

.main {
  width: auto;
}

.right {
  width: 200px;
  float: right;
}
```

问题：

- main 可能不能优先加载
- float 排列困难
- 中间内容宽度计算麻烦

所以希望：

HTML：

```html
<div class="main">中间内容</div>

<div class="left">左边</div>

<div class="right">右边</div>
```

但是视觉：

```
左 | 中 | 右
```

这就是圣杯 / 双飞翼解决的问题。([west.cn][2])

---

# 二、圣杯布局

## 1. HTML结构

```html
<div class="container">
  <div class="main">中间内容</div>

  <div class="left">左侧栏</div>

  <div class="right">右侧栏</div>
</div>
```

注意：

main 在最前。

---

# 2. CSS实现

假设：

```css
.left,
.right {
  width: 200px;
}
```

完整：

```css
.container {
  padding-left: 200px;
  padding-right: 200px;
}

.main,
.left,
.right {
  float: left;
}

.main {
  width: 100%;
}

.left {
  margin-left: -100%;

  position: relative;

  left: -200px;
}

.right {
  margin-left: -200px;

  position: relative;

  right: -200px;
}
```

---

# 三、圣杯布局原理拆解

## 第一步：main占满

```css
.main {
  width: 100%;
  float: left;
}
```

效果：

```
+----------------------+
|       main           |
+----------------------+
```

main 占满整行。

---

## 第二步：container留空间

```css
.container {
  padding-left: 200px;
  padding-right: 200px;
}
```

相当于：

```
|200|-----------|200|
    main
```

提前给左右栏留位置。

---

## 第三步：左边移动回来

左：

```css
.left {
  margin-left: -100%;
}
```

为什么？

因为：

main 宽度 = 100%

例如：

```
浏览器宽度:

1200px


main:

1200px
```

left 原本排下面：

```
main

left
```

负 margin：

```css
margin-left: -1200px;
```

把 left 拉回顶部：

```
left
main
```

---

然后：

```css
left: -200px;
```

再向左移动：

```
+----+
|left|main
+----+
```

---

## 第四步：右边移动

right:

```css
margin-left: -200px;
```

因为右边固定200：

```
main区域:

|----------------|

right 往左挤200
```

然后：

```css
right: -200px;
```

推回右侧。

最终：

```
+-----------------------+

 left | main | right

+-----------------------+
```

---

# 四、双飞翼布局

双飞翼布局本质是：

> 改进圣杯布局，用内部 div 代替 position 定位。

淘宝团队常用这种方案。([百度智能云][3])

---

## 1. HTML结构

多一个盒子：

```html
<div class="container">
  <div class="main">
    <div class="main-content">中间内容</div>
  </div>

  <div class="left">左</div>

  <div class="right">右</div>
</div>
```

区别：

圣杯：

```
main
left
right
```

双飞翼：

```
main
  |
  main-content

left
right
```

---

# 2. CSS

```css
.main,
.left,
.right {
  float: left;
}

.main {
  width: 100%;
}

.main-content {
  margin-left: 200px;

  margin-right: 200px;
}

.left {
  width: 200px;

  margin-left: -100%;
}

.right {
  width: 200px;

  margin-left: -200px;
}
```

---

# 五、双飞翼为什么更简单？

因为：

圣杯：

```
container
   |
   padding
   |
   position relative
   |
   left/right移动
```

双飞翼：

```
container

main
 |
 main-content

margin撑开空间
```

不用：

```css
position: relative;

left: -200px;

right: -200px;
```

所以代码更简单。([php.cn][4])

---

# 六、两者区别总结

| 对比     | 圣杯布局       | 双飞翼布局 |
| -------- | -------------- | ---------- |
| 出现时间 | 较早           | 后出现     |
| 核心     | padding + 定位 | margin     |
| DOM      | 少一个div      | 多一个div  |
| position | 需要           | 不需要     |
| 复杂度   | 高             | 低         |
| 维护     | 一般           | 更容易     |
| 性能     | 接近           | 接近       |

---

# 七、面试重点回答

面试官：

> 圣杯布局和双飞翼布局有什么区别？

推荐回答：

> 两者都是实现三栏布局，中间栏优先加载，左右固定宽度。圣杯布局通过父容器 padding 给左右栏预留空间，再利用负 margin 和 relative 定位调整位置；双飞翼布局是在中间栏增加一个内部元素，通过 margin 给左右栏留空间，避免使用定位，因此结构稍复杂但 CSS 更简单。

---

# 八、现在项目还用吗？

现在：

Vue / React 项目：

基本不会手写圣杯、双飞翼。

更多使用：

## Flex

```css
.container {
  display: flex;
}

.main {
  flex: 1;
}

.left,
.right {
  width: 200px;
}
```

结果：

```
.left  .main  .right

200px  auto  200px
```

---

## Grid

```css
.container {
  display: grid;

  grid-template-columns: 200px 1fr 200px;
}
```

现代开发：

```
Grid > Flex > 双飞翼 > 圣杯
```

---

# 九、为什么还要学？

因为它考察：

- float 原理
- margin负值
- BFC
- 文档流
- CSS布局思想
