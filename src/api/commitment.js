class Commitment {
  static PENDING = "Pending";
  static FULFILLED = "FulFilled";
  static REJECTED = "Rejected";

  constructor(exec) {
    this.status = Commitment.PENDING;
    this.result = null;
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];
    try {
      exec(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  /**
   * resolve 也要在事件循环末尾执行
   *
   * @param {*} result
   */
  resolve(result) {
    setTimeout(() => {
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.FULFILLED;
        this.result = result;
        this.resolveCallbacks.forEach((callback) => {
          callback(result);
        });
      }
    });
  }

  /**
   * reject 也要在事件循环末尾执行
   *
   * @param {*} result
   */
  reject(result) {
    setTimeout(() => {
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.REJECTED;
        this.result = result;
        this.rejectCallbacks.forEach((callback) => {
          callback(result);
        });
      }
    });
  }

  /**
   * then应当是在resovle或者reject之后才能够获取结果
   * 
   * 并且要返回Commitment以支持链式调用
   *
   * @param {*} onFulfilled
   * @param {*} onRejected
   */
  then(onFulfilled, onRejected) {
    return new Commitment((resolve, reject) => {
      onFulfilled = typeof onFulfilled === "function" ? onFulfilled : () => {};
      onRejected = typeof onRejected === "function" ? onRejected : () => {};
      if (this.status === Commitment.FULFILLED) {
        setTimeout(() => {
          onFulfilled(this.result);
        });
      } else if (this.status === Commitment.REJECTED) {
        setTimeout(() => {
          onRejected(this.result);
        });
      } else if (this.status === Commitment.PENDING) {
        this.resolveCallbacks.push(onFulfilled);
        this.rejectCallbacks.push(onRejected);
      }
    });
  }
}

console.log("第一步");
new Commitment((resolve, reject) => {
  setTimeout(() => {
    console.log("第二步");
    resolve("这次一定");
  });
}).then(
  (result) => console.log(result),
  (result) => console.log(result.message)
).then(() => {
    console.log("fajgalgj")
}, () => {
    console.log("error....")
})
console.log("第三步");
