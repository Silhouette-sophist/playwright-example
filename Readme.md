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
语法：
#### 存在与否
- [attr]            ：包含指定属性
- [attr=value]      ：包含指定属性，且值为value
- [attr~=value]     ：包含指定属性，且值至少有一个值为value
- [attr|=value]     ：包含指定属性，且值为value或者为value-开头
#### 子字符串匹配选择器
- [attr^=value]     ：包含指定属性，且值以value开头的   
- [attr$=value]     ：包含指定属性，且值以value结束的
- [attr*=value]     ：包含指定属性，且值包含value
例子：[autoplay] 选择所有具有 autoplay 属性的元素（不论这个属性的值是什么）。

#### 大小写敏感
**如果你想在大小写不敏感的情况下，匹配属性值的话，你可以在闭合括号之前，使用i值。**

## 分组选择器（Grouping selectors)
### 选择器列表（Selector list）
逗号“,”是将不同的选择器组合在一起的方法，它选择所有能被列表中的任意一个选择器选中的节点。
语法：A, B
示例：div, span 会同时匹配 <span> 元素和 <div> 元素。

## 组合器（Combinators，通过层级关系查找，父子兄弟接点等，完全复用其他选择器功能，超级重要）
### 后代组合器（Descendant combinator）
空格“ ”组合器选择前一个元素的后代节点。
语法：A B
例子：div span 匹配所有位于任意 <div> 元素之内的 <span> 元素。

### 直接子代组合器（Child combinator）
大于号“>”组合器选择前一个元素的直接子代的节点。
语法：A > B
例子：ul > li 匹配直接嵌套在 <ul> 元素内的所有 <li> 元素。

### 一般兄弟组合器（General sibling combinator）
波浪号“~”组合器选择兄弟元素，也就是说，后一个节点在前一个节点后面的任意位置，并且共享同一个父节点。
语法：A ~ B
例子：p ~ span 匹配同一父元素下，<p> 元素后的所有 <span> 元素。

### 紧邻兄弟组合器（Adjacent sibling combinator）
+ 组合器选择相邻元素，即后一个元素紧跟在前一个之后，并且共享同一个父节点。
语法：A + B
例子：h2 + p 会匹配所有紧邻在 <h2> (en-US) 元素后的 <p> 元素。

### 列组合器（Column combinator）
|| 组合器选择属于某个**表格行**的节点。
语法： A || B
例子： col || td 会匹配所有 <col> 作用域内的 <td> 元素。

## 伪选择器（Pseudo）
### 伪类（类似于在已有标签上新增的属性）
冒号“:”伪选择器支持按照未被包含在文档树中的状态信息来选择元素。
例子：a:visited 匹配所有曾被访问过的 <a> 元素。

选择器	描述
:active	在用户激活（例如点击）元素的时候匹配。
:any-link	匹配一个链接的:link和:visited状态。
:blank	匹配空输入值的<input>元素。
:checked	匹配处于选中状态的单选或者复选框。
:current (en-US)	匹配正在展示的元素，或者其上级元素。
:default	匹配一组相似的元素中默认的一个或者更多的 UI 元素。
:dir	基于其方向性（HTMLdir属性或者 CSSdirection属性的值）匹配一个元素。
:disabled	匹配处于关闭状态的用户界面元素
:empty	匹配除了可能存在的空格外，没有子元素的元素。
:enabled	匹配处于开启状态的用户界面元素。
:first	匹配分页媒体的第一页。
:first-child	匹配兄弟元素中的第一个元素。
:first-of-type	匹配兄弟元素中第一个某种类型的元素。
:focus	当一个元素有焦点的时候匹配。
:focus-visible	当元素有焦点，且焦点对用户可见的时候匹配。
:focus-within	匹配有焦点的元素，以及子代元素有焦点的元素。
:future (en-US)	匹配当前元素之后的元素。
:hover	当用户悬浮到一个元素之上的时候匹配。
:indeterminate	匹配未定态值的 UI 元素，通常为复选框。
:in-range	用一个区间匹配元素，当值处于区间之内时匹配。
:invalid	匹配诸如<input>的位于不可用状态的元素。
:lang	基于语言（HTMLlang属性的值）匹配元素。
:last-child	匹配兄弟元素中最末的那个元素。
:last-of-type	匹配兄弟元素中最后一个某种类型的元素。
:left	在分页媒体 (en-US)中，匹配左手边的页。
:link	匹配未曾访问的链接。
:local-link (en-US)	匹配指向和当前文档同一网站页面的链接。
:is()	匹配传入的选择器列表中的任何选择器。
:not	匹配作为值传入自身的选择器未匹配的物件。
:nth-child	匹配一列兄弟元素中的元素——兄弟元素按照an+b形式的式子进行匹配（比如 2n+1 匹配元素 1、3、5、7 等。即所有的奇数个）。
:nth-of-type	匹配某种类型的一列兄弟元素（比如，<p>元素）——兄弟元素按照an+b形式的式子进行匹配（比如 2n+1 匹配元素 1、3、5、7 等。即所有的奇数个）。
:nth-last-child	匹配一列兄弟元素，从后往前倒数。兄弟元素按照an+b形式的式子进行匹配（比如 2n+1 匹配按照顺序来的最后一个元素，然后往前两个，再往前两个，诸如此类。从后往前数的所有奇数个）。
:nth-last-of-type	匹配某种类型的一列兄弟元素（比如，<p>元素），从后往前倒数。兄弟元素按照an+b形式的式子进行匹配（比如 2n+1 匹配按照顺序来的最后一个元素，然后往前两个，再往前两个，诸如此类。从后往前数的所有奇数个）。
:only-child	匹配没有兄弟元素的元素。
:only-of-type	匹配兄弟元素中某类型仅有的元素。
:optional	匹配不是必填的 form 元素。
:out-of-range	按区间匹配元素，当值不在区间内的的时候匹配。
:past (en-US)	匹配当前元素之前的元素。
:placeholder-shown	匹配显示占位文字的 input 元素。
:playing (en-US)	匹配代表音频、视频或者相似的能“播放”或者“暂停”的资源的，且正在“播放”的元素。
:paused (en-US)	匹配代表音频、视频或者相似的能“播放”或者“暂停”的资源的，且正在“暂停”的元素。
:read-only	匹配用户不可更改的元素。
:read-write	匹配用户可更改的元素。
:required	匹配必填的 form 元素。
:right	在分页媒体 (en-US)中，匹配右手边的页。
:root	匹配文档的根元素。
:scope	匹配任何为参考点元素的的元素。
:valid	匹配诸如<input>元素的处于可用状态的元素。
:target	匹配当前 URL 目标的元素（例如如果它有一个匹配当前URL 分段的元素）。
:visited	匹配已访问链接。

### 伪元素（类似于非标签，打破控件粒度）
双冒号“::”伪选择器用于表示无法用 HTML 语义表达的实体。
例子：p::first-line 匹配所有 <p> 元素的第一行。

参考：https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements

选择器	描述
::after	匹配出现在原有元素的实际内容之后的一个可样式化元素。
::before	匹配出现在原有元素的实际内容之前的一个可样式化元素。
::first-letter	匹配元素的第一个字母。
::first-line	匹配包含此伪元素的元素的第一行。
::grammar-error	匹配文档中包含了浏览器标记的语法错误的那部分。
::selection	匹配文档中被选择的那部分。
::spelling-error	匹配文档中包含了浏览器标记的拼写错误的那部分。


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





# Javascript高阶函数再理解
## 普通函数
```typescript
console.log("===========================普通函数，注意调用时传递实参！！！==========================")
/**
 * 普通函数，注意调用时传递实参！！！
 * 
 * @param firstParam 
 * @param secondParam 
 * @returns 
 */
function simpleFunction(firstParam: string, secondParam: string): string {
  let ret = `simpleFunction called with ${firstParam} and ${secondParam}`;
  console.log(ret);
  return ret;
}

simpleFunction("first", "second")
```

### 一阶高阶函数
```typescript
console.log("=======================一阶高阶函数，同样调用时传递实参，此时在一阶高阶函数中调用，也就是一阶高阶函数中需要传递具体的函数类型实例！！！==============================")
/**
 * 一阶高阶函数，同样调用时传递实参，此时在一阶高阶函数中调用，也就是一阶高阶函数中需要传递具体的函数类型实例！！！
 * 
 * @param firstFunction 
 * @param secondFunction 
 */
function higherFunction(firstFunction: (firstParam: string) => string, secondFunction: (secondParam: string) => string) {
    console.log(firstFunction("higherFunction"))
    console.log(secondFunction("higherFunction"))
}

let firstFunction = function(name: string) {
    return `first-param function called with ${name}`
}

let secondFunction = (name: string) => `sedoncd-param function called with ${name}`

higherFunction(firstFunction, secondFunction)
```

### 二阶高阶函数
```typescript
console.log("=======================二阶高阶函数，同样调用传递时传递实参，但是会有两处调用：- 二阶高阶函数中，会调用一阶函数，所以需要给一阶函数传递函数实例！！！- 二阶高阶函数被调用的地方，需要传递给二阶高阶函数传递一阶函数实例！！！==============================")
/**
 * 二阶高阶函数，同样调用传递时传递实参，但是会有两处调用：
 *     - 二阶高阶函数中，会调用一阶函数，所以需要给一阶函数传递函数实例！！！
 *     - 二阶高阶函数被调用的地方，需要传递给二阶高阶函数传递一阶函数实例！！！
 * 
 * @param seniorFunction 
 * @returns 
 */
function seniorHigherFunction(seniorFunction: (firstFunction: (firstParam: string) => string, secondFunction: (secondParam: string) => string) => string) {

    let firstrFunction = (firstParam: string) => `firstrFunction called with ${firstParam}`
    let secondFunction = (secondParam: string) => `secondFunction called with ${secondParam}`

    // 注意内部调用了一阶函数，需要给其传递普通函数实例
    return seniorFunction(firstrFunction, secondFunction)
}

/**
 * 注意调用了二阶函数，需要给其传递一阶函数实例
 */
seniorHigherFunction((firstFunction, secondFunction) => {
    let firstFunctionRet = firstFunction(`outer called seniorHigherFunction`)
    console.log(firstFunctionRet)
    let secondFunctionRet = secondFunction(`outer called seniorHigherFunction`)
    console.log(secondFunctionRet)
    return `outer called finished`
})
```

### 调用总结
**总体来说：函数调用，只负责调用时要传递参数那一层的形参传递实参。关键要区分定义内容和调用位置差异。每一次调用都只负责一层的解析，定义位置只描述类型，而调用位置只描述类型实例**

- 普通函数调用时，只需要传递非函数实参即可
- 一阶高阶函数调用时，只需要传递普通函数实例即可；一阶高阶函数内部定义会使用传递过来的普通函数；而普通函数使用时，只需要传递非函数实参即可
- 二阶高阶函数调用时，只需要传递一阶高阶函数即可；二阶高阶函数内部定义会使用传递过来的一阶高阶函数；使用一阶高阶函数时，又需要传递普通函数实参，当然这个应该是在二阶函数定义内部确定；最后普通函数使用时，只需要传递非函数实参即可


按照调用位置和定义位置分析有：
- 普通函数定义时，直接使用形参；普通函数调用时，会传递形参过来
- 一阶高阶函数定义时，直接使用形参，也就是普通函数的类型，不关注函数具体实现；一阶高阶函数调用时，会传递实参，也就是普通函数实例，需要关注普通函数实现
- 二阶高阶函数定义时，直接使用形参，也就是一阶高阶函数的类型，不关注一阶高阶函数具体实现，只需要关注一阶高阶函数调用；二阶高阶函数调用时，需要传递实参，也就是一阶高阶函数实例，需要关注一阶函数实现；由于二阶高阶函数内部会调用一阶高阶函数，所以这里的调用需要明确给一阶函数指定具体的实参，也就是普通函数实现；另外二阶高阶函数调用时，不需要考虑一阶函数使用的普通函数形参的实现，只需要关注一阶函数使用的普通函数类型


**注意：每次都只是关注临近一层的调用！！！二阶调用只关注二阶所需要使用的一阶高阶函数的实现，因为要传递一阶高阶函数实例进行调用；一阶调用只关注一阶所需要使用的普通函数的实现，因为要传递普通函数实例进行调用；普通函数只关注普通函数所需要使用的非函数的实现，因为要传递非函数实例进行调用**