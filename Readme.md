# CSS Selector

查看源：https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors

举例参考：https://drafts.csswg.org/selectors/

## 基本选择器
### 通用选择器（Universal selector）
选择所有元素。（可选）可以将其限制为特定的名称空间或所有名称空间。
语法：* ns|* *|*
例子：* 将匹配文档的所有元素。

### 元素选择器（Type selector）
按照给定的节点名称，选择所有匹配的元素。
语法：elementname
例子：input 匹配任何 <input> 元素。

### 类选择器（Class selector）
按照给定的 class 属性的值，选择所有匹配的元素。
语法：.classname
例子：.index 匹配任何 class 属性中含有 "index" 类的元素。

### ID选择器（ID selector）
按照 id 属性选择一个与之匹配的元素。需要注意的是，一个文档中，每个 ID 属性都应当是唯一的。
语法：#idname
例子：#toc 匹配 ID 为 "toc" 的元素。

### 属性选择器（Attribute selector）
按照给定的属性，选择所有匹配的元素。
语法：[attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]
例子：[autoplay] 选择所有具有 autoplay 属性的元素（不论这个属性的值是什么）。

## 分组选择器（Grouping selectors)
### 选择器列表（Selector list）
, 是将不同的选择器组合在一起的方法，它选择所有能被列表中的任意一个选择器选中的节点。
语法：A, B
示例：div, span 会同时匹配 <span> 元素和 <div> 元素。

## 组合器（Combinators）
### 后代组合器（Descendant combinator）
（空格）组合器选择前一个元素的后代节点。
语法：A B
例子：div span 匹配所有位于任意 <div> 元素之内的 <span> 元素。

### 直接子代组合器（Child combinator）
> 组合器选择前一个元素的直接子代的节点。
语法：A > B
例子：ul > li 匹配直接嵌套在 <ul> 元素内的所有 <li> 元素。

### 一般兄弟组合器（General sibling combinator）
~ 组合器选择兄弟元素，也就是说，后一个节点在前一个节点后面的任意位置，并且共享同一个父节点。
语法：A ~ B
例子：p ~ span 匹配同一父元素下，<p> 元素后的所有 <span> 元素。

### 紧邻兄弟组合器（Adjacent sibling combinator）
+ 组合器选择相邻元素，即后一个元素紧跟在前一个之后，并且共享同一个父节点。
语法：A + B
例子：h2 + p 会匹配所有紧邻在 <h2> (en-US) 元素后的 <p> 元素。

### 列组合器（Column combinator）
|| 组合器选择属于某个表格行的节点。
语法： A || B
例子： col || td 会匹配所有 <col> 作用域内的 <td> 元素。

## 伪选择器（Pseudo）
### 伪类
: 伪选择器支持按照未被包含在文档树中的状态信息来选择元素。
例子：a:visited 匹配所有曾被访问过的 <a> 元素。

### 伪元素
: 伪选择器支持按照未被包含在文档树中的状态信息来选择元素。
例子：a:visited 匹配所有曾被访问过的 <a> 元素。


# 优先级
参考源：https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity


## 选择器类型
下面列表中，选择器类型的优先级是递增的：

- 类型选择器（例如，h1）和伪元素（例如，::before）
- 类选择器 (例如，.example)，属性选择器（例如，[type="radio"]）和伪类（例如，:hover）
- ID 选择器（例如，#example）。
通配选择符（universal selector）（*）关系选择符（combinators）（+, >, ~, ' ', ||）和 否定伪类（negation pseudo-class）（:not()）对优先级没有影响。（但是，在 :not() 内部声明的选择器会影响优先级）。

您可以访问 "Specificity" in "Cascade and inheritance" 或者 https://specifishity.com 来了解更多关于优先级的详细信息。

给元素添加的内联样式 (例如，style="font-weight:bold") 总会覆盖外部样式表的任何样式，因此可看作是具有最高的优先级。


# 查找Element对象
## 基于HTML方式
- document.getElementById
- document.getElementsByClassName
- document.getElementsByName
- document.getElementsByTagName
- document.getElementsByTagNameNS
  
https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementById

## 基于CSS selector方式
- document.querySelector
- document.querySelectorAll
- element.querySelector
- element.querySelectorAll
https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector
https://developer.mozilla.org/zh-CN/docs/Web/API/Element/querySelector