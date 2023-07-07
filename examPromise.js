const sleep = async time => new Promise(res => setTimeout(res, time));

const test1 = async () => {
  new Promise(async (resolve, reject) => {
    await sleep(3000);
    console.log('3초 기다렸습니다.');
    resolve();
  });
  console.log('test1 context 입니다.');
};

const test2 = async () => {
  const promiseReturn = await new Promise(resolve => {
    console.log('여기는 Promise 안 입니다.');
    resolve('resolve 값 입니다.');
  }).then(data => {
    console.log('여기는 then 안 입니다.');
    return 'then 값 입니다.';
  });
  console.log(promiseReturn);
};

const test2_1 = async () => {
  const promiseReturn = new Promise(resolve => {
    console.log('여기는 Promise 안 입니다.');
    resolve('resolve 값 입니다.');
  }).then(data => {
    console.log('여기는 then 안 입니다.');
    return 'then 값 입니다.';
  });
  console.log(promiseReturn);
};

const test3 = async () => {
  console.log('START');

  setTimeout(() => {
    console.log('setTimeout');
  }, 0);

  Promise.resolve('Promise').then(res => {
    console.log(res);
  });

  console.log('END');
};

const test4 = async () => {
  const myPromise = () => Promise.resolve('myPromise');

  const myFunc = async () => {
    console.log('Inner function');
    console.log(await myPromise());
    console.log('goOut function');
  };

  console.log('Before Function');
  myFunc();
  console.log('After Function');
};

const test5 = async () => {
  let sum = 0;
  const myPromise = new Promise(resolve => {
    resolve('Promise Resolve');
    sum++;
  });

  const reulst = [await myPromise, sum];
  console.log(reulst);
};

const test6 = () => {
  const p = new Promise(resolve => {
    setTimeout(() => {
      resolve('promise');
    }, 1000);
  });

  p.then(res => {
    console.log(res);
  });

  setTimeout(() => {
    p.then(console.log);
  }, 2000);
};

const test7 = () => {
  const promise = new Promise((resolve, reject) => {
    console.log('Promise constructor');
    resolve('Resolved value');
  });

  promise.then(value => {
    console.log(value);
  });

  console.log('After promise');
};

const test8 = () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 2000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2 resolved');
    }, 1000);
  });

  Promise.all([promise1, promise2]).then(values => {
    console.log(values);
  });

  console.log('After promises');
};

(async () => {
  // test5();
})();

