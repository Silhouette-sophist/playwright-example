const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

/**
 * 自定义Promise，规范：https://promisesaplus.com/
 */
class Promise {

    /**
     * 构造时会传递要执行的代码逻辑，其中使用到的resolve和reject回调函数参数是由Promise提供
     * 
     * @param {*} executor 
     */
  constructor(executor) {
    // promise状态
    this.status = PENDING;
    // 成功的结果
    this.value = undefined;
    // 失败的原因
    this.reason = undefined;

    // 拒绝和成功的回调，在promise处于pending状态添加回调。会在promise被解决（成功|失败）时候被遍历执行
    this.onResolveCallbacks = [];
    this.onRejectedCallbacks = [];

    // 当前promise解决的回调
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolveCallbacks.forEach((callback) => {
          callback();
        });
      }
    };

    // 当前promise被拒绝|失败的回调
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => {
          callback();
        });
      }
    };
    
    // 调用用户传递进来的executor，内部在执行完成时使用resolve和reject进行回调
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  /**
   * then 方法获取结果，可链式调用。注意，应当返回Promise，可进行链式调用！
   *
   * @param {*} onFulfilled
   * @param {*} onRejected
   */
  then(onFulfilled, onRejected) {
    let wrapPromise = new Promise((resolve, reject) => {
      // 根据状态分别去成功的结果，还是失败的原因
      if (this.status === FULFILLED) {
        // try {
        //   let ret = onFulfilled(this.value);
        //   console.log(ret);
        //   resolve(ret);
        // } catch (e) {
        //   console.log(e);
        //   reject(e);
        // }
        // 注意：这里要通过异步方式使用刚刚创建的wrapPromise
        setTimeout(() => {
          this.promiseCallbackSafely(true, wrapPromise, onFulfilled, resolve, reject);
        });
      } else if (this.status === REJECTED) {
        // try {
        //   let ret = onRejected(this.reason);
        //   console.log(ret);
        //   reject(ret);
        // } catch (e) {
        //   console.log(e);
        //   reject(e);
        // }
        // 注意：这里要通过异步方式使用刚刚创建的wrapPromise
        this.promiseCallbackSafely(true, wrapPromise, onRejected, resolve, reject);
      }
      if (this.status === PENDING) {
        this.onResolveCallbacks.push(() => {
          //   try {
          //     let ret = onFulfilled(this.value);
          //     console.log(ret);
          //     resolve(ret);
          //   } catch (e) {
          //     console.log(e);
          //     reject(e);
          //   }
          // 注意：这里要通过异步方式使用刚刚创建的wrapPromise
          this.promiseCallbackSafely(true, wrapPromise, onFulfilled, resolve, reject);
        });
        this.onRejectedCallbacks.push(() => {
          //   try {
          //     let ret = onRejected(this.reason);
          //     console.log(ret);
          //     reject(ret);
          //   } catch (e) {
          //     console.log(e);
          //     reject(e);
          //   }
          // 注意：这里要通过异步方式使用刚刚创建的wrapPromise
          this.promiseCallbackSafely(false, wrapPromise, onRejected, resolve, reject);
        });
      }
    });
    return wrapPromise;
  }

  /**
   * 递归解析promise的结果，一直解析到不是promise形式
   *
   * @param {*} newPromise
   * @param {*} tmpResult
   * @param {*} resolve
   * @param {*} reject
   * @returns
   */
  resolvePromise(newPromise, tmpResult, resolve, reject) {
    if (newPromise === tmpResult) {
      return reject(new TypeError("出错了"));
    }
    // 如果是Promise就需要继续分析
    if (
      (typeof tmpResult === "object" && tmpResult !== null) ||
      typeof tmpResult === "function"
    ) {
      let called = false;
      try {
        let then = tmpResult.then;
        if (typeof then === "function") {
          then.call(
            tmpResult,
            (y) => {
              if (called) return;
              called = true;
              this.resolvePromise(newPromise, y, resolve, reject);
            },
            (reason) => {
              if (called) return;
              called = true;
              reject(reason);
            }
          );
        } else {
          resolve(tmpResult);
        }
      } catch (e) {
        reject(e);
      }
    } else {
      resolve(tmpResult);
    }
  }

  /**
   * 在Promise处理（成功|失败）时进行安全方式回调
   * 
   * @param {*} success 
   * @param {*} returnPromise 
   * @param {*} callback 
   * @param {*} resolve 
   * @param {*} reject 
   */
  promiseCallbackSafely(success, returnPromise, callback, resolve, reject) {
    try {
      let ret = success ? callback(this.value) : callback(this.reason);
      console.log(`ret is ${ret}, ${success}`);
      this.resolvePromise(returnPromise, ret, resolve, reject);
    } catch (e) {
      console.log(`error is ${e}, ${success}`);
      reject(e);
    }
  }
}

module.exports = Promise;
