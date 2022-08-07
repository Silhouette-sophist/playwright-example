"use strict";
console.log("===========================普通函数，注意调用时传递实参！！！==========================");
/**
 * 普通函数，注意调用时传递实参！！！
 *
 * @param firstParam
 * @param secondParam
 * @returns
 */
function simpleFunction(firstParam, secondParam) {
    let ret = `simpleFunction called with ${firstParam} and ${secondParam}`;
    console.log(ret);
    return ret;
}
simpleFunction("first", "second");
console.log("=======================一阶高阶函数，同样调用时传递实参，此时在一阶高阶函数中调用，也就是一阶高阶函数中需要传递具体的函数类型实例！！！==============================");
/**
 * 一阶高阶函数，同样调用时传递实参，此时在一阶高阶函数中调用，也就是一阶高阶函数中需要传递具体的函数类型实例！！！
 *
 * @param firstFunction
 * @param secondFunction
 */
function higherFunction(firstFunction, secondFunction) {
    console.log(firstFunction("higherFunction"));
    console.log(secondFunction("higherFunction"));
}
let firstFunction = function (name) {
    return `first-param function called with ${name}`;
};
let secondFunction = (name) => `sedoncd-param function called with ${name}`;
higherFunction(firstFunction, secondFunction);
console.log("=======================二阶高阶函数，同样调用传递时传递实参，但是会有两处调用：- 二阶高阶函数中，会调用一阶函数，所以需要给一阶函数传递函数实例！！！- 二阶高阶函数被调用的地方，需要传递给二阶高阶函数传递一阶函数实例！！！==============================");
/**
 * 二阶高阶函数，同样调用传递时传递实参，但是会有两处调用：
 *     - 二阶高阶函数中，会调用一阶函数，所以需要给一阶函数传递函数实例！！！
 *     - 二阶高阶函数被调用的地方，需要传递给二阶高阶函数传递一阶函数实例！！！
 *
 * @param seniorFunction
 * @returns
 */
function seniorHigherFunction(seniorFunction) {
    let firstrFunction = (firstParam) => `firstrFunction called with ${firstParam}`;
    let secondFunction = (secondParam) => `secondFunction called with ${secondParam}`;
    // 注意内部调用了一阶函数，需要给其传递普通函数实例
    return seniorFunction(firstrFunction, secondFunction);
}
/**
 * 注意调用了二阶函数，需要给其传递一阶函数实例
 */
seniorHigherFunction((firstFunction, secondFunction) => {
    let firstFunctionRet = firstFunction(`outer called seniorHigherFunction`);
    console.log(firstFunctionRet);
    let secondFunctionRet = secondFunction(`outer called seniorHigherFunction`);
    console.log(secondFunctionRet);
    return `outer called finished`;
});
