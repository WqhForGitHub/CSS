<h2 id="WxCJP">14.1 表格格式化</h2>
<h3 id="rOQNM">表格的视觉排布</h3>
**表格排布规则**

+ 一个行框（row box）包含一个由栅格单元构成的行。
+ 一个行组（row group）框包含的栅格单元就是行组中各行框包含的栅格单元。



<h3 id="gytI3">设定显示方式的值</h3>


<h3 id="eLgvy">匿名表格对象</h3>


<h3 id="PNKsr">表格中的层</h3>
```html
<table style="background: #B84;">
  <tr>
    <td>hey</td>
    <td style="background: #ABC;">there</td>
  </tr>

  <tr>
    <td>what's</td>
    <td>up?</td>
  </tr>

  <tr style="background: #CBA;">
    <td>not</td>
    <td style="background: #ECC;">much</td>
  </tr>
</table>
```

![](https://cdn.nlark.com/yuque/0/2024/png/166664/1730271139059-c6266c5f-d413-4445-8ccc-c90d700e9ba4.png)



<h3 id="aso2R">表题</h3>
|                                                                caption-side<br/>取值：top  |  bottom<br/>初始值：top<br/>适用于：display 属性的值为 table-caption 的元素<br/>计算值：指定的值<br/>继承性：是<br/>动画性：否 |
| --- |




---

<h2 id="ZDb0T">14.2 单元格的边框</h2>
|                                                                  border-collapse<br/>取值：collapse  |  separate  |  inherit<br/>初始值：separate<br/>适用于：display 属性的值为 table 或 table-inline 的元素<br/>继承性：是<br/>计算值：指定的值 |
| --- |




<h3 id="DCE83">分离单元格的边框</h3>
**边框间距**

|                                                                  border-spacing<br/>取值：<length> <length>?<br/>初始值：0<br/>适用于：display 属性的值为 table 或 table-inline 的元素<br/>计算值：两个绝对长度<br/>继承性：是<br/>动画性：是<br/>备注：如果 border-collapse 属性的值不是 separate，忽略这个属性 |
| --- |


```css
table {
  border-collapse: separate; 
  border-spacing: 5px 8px;
  padding: 12px;
  border: 2px solid black;
}

td { border: 1px solid gray;}
td#squeeze {border-width: 5px;}
```

![](https://cdn.nlark.com/yuque/0/2024/png/166664/1730271999145-00e7b57a-d1eb-4924-8348-22300917b24c.png)



**处理空单元格**

|                                                                  empty-cells<br/>取值：show  |  hide<br/>初始值：show<br/>适用于：display 属性的值为 table-cell 的元素<br/>计算值：指定的值<br/>继承性：是<br/>动画性：否<br/>备注：如果 border-collapse 属性的值不是 separate，忽略这个属性 |
| --- |




<h3 id="Nb2Rw">折叠单元格的边框</h3>


---

<h2 id="by8yU">14.3 表格的尺寸</h2>
<h3 id="M9CGG">宽度</h3>
|                                                                table-layout<br/>取值：auto  |  fixed<br/>初始值：auto<br/>适用于：display 属性的值为 table 或 inline-table 的元素<br/>计算值：指定的值<br/>继承性：是<br/>动画性：否 |
| --- |




<h3 id="ExJ86">高度</h3>


<h3 id="iuYxF">对齐方式</h3>




