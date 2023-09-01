# asyncTest
비동기 테스트용
1. 콘솔창에 다음과 같이 출력되도록 코드를 작성하세요.> 시작!> [3초 뒤…]> 3초 끝났어!

2. 콘솔창에 다음과 같이 출력되도록 코드를 작성하세요.> 시작!> [3초 뒤…]> 3초 끝났어!> done.

3. 다음 반복문을 다른 형태로 변경해 보세요.
```
const arr = [1, 2, 3, 4, 5];
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] * i);
}
console.log(newArr);
```
4.sleep 함수를 만들어주세요. sleep(3) → 3초 쉬는거다.
```
const sleep = time => new Promise(res => setTimeout(res, time))
```

5.아래와 같은 결과값이 나오도록 코드를 작성하세요. 단 한 줄로 표현하여야 합니다. (함수 체이닝은 한 줄로 인정합니다.)
```
const request = {
  url: 'www.test.com/list',
  params: {
    page: 1,
    pageSize: 100,
    currency: 'USD'
  }
};

// request.params 객체 안에는 다른 값도 들어올 수 있습니다.
// 즉 request.params.page 처럼은 사용할 수 없습니다. 
const url = `여기에 들어올 정답`;
console.log(url);
// 출력
// www.test.com/list?page=1&pageSize=100&currency=USD
```
6.아래 함수의 결과 값을 예측해보세요. [ 결과와 그 결과의 이유를 생각해 보며 풀어 봅시다. ]

6-1. keyword: 실행 컨텍스트
```
var x = 1;

function first() {
  var x = 10;
  second();
}

function second() {
  console.log(x);
}

first();
second();
```
6-2. keyword: 실행 컨텍스트, 호이스팅
```
var a = 1;
function outer () {
  function inner () {
    console.log(a);
    var a = 3;
    console.log(a);
  }
  inner();
  console.log(a);
}
outer();
console.log(a);
```
6-3. keyword: 클로저
```
function closureExam() {
  var message = "Hello";
  var count = 1;
  console.log(message);
  return function () {
    var message = "bye";
    console.log(message);
    console.log(count);
    count++;
  };
}
var hello1 = closureExam();
hello1();
hello1();
var hello2 = closureExam();
hello2();
hello2();
```
6-4. 결과 값을 생각하고 개선해보세요. keyword: this
```
function askPassword(password, ok, fail) {
  if (password === 'rockstar') ok();
  else fail();
}

const user = {
  name: 'John',
  loginOk() {
    console.log(`${this.name}님이 로그인하였습니다.`);
  },
  loginFail() {
    console.log(`${this.name}님이 로그인에 실패하였습니다.`);
  }
};

askPassword('rockstar', user.loginOk, user.loginFail);
```
6-5. keyword: this
```
const user = {
  firstName: '보라',
  sayHi() {
    const func = function() {
      console.log('1', this);
    };
    func();
    const arrow = () => {
      console.log('2', this);
    };
    arrow();
  }
};

user.sayHi();
```
6-6. keyword: 비동기
```
var i;
for (i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}
```
6-7. keyword: 비동기
```
console.log('hi')

setTimeout(function() {
  console.log('0.1')
}, 100)

setTimeout(function() {
  console.log('0')
}, 0)

Promise.resolve()
  .then(function() {
    console.log('first')
  })
  .then(function() {
    console.log('second')
  })

console.log('end')
```
6-8. keyword: 비동기
```
const a = () => {
  console.log("a 시작");
  b();
  console.log("a 끝");
};

const b = async () => {
  console.log("b 시작");
  await c();
  console.log("b 끝");
};

const c = async () => {
  console.log("c 시작");
  await d();
  console.log("c 끝");
};

const d = () => {
  console.log("d")
};

a();
```
6-9. 총 소요시간은 몇 초 일까요? keyword: 동기
```
(async () => {
  async function A() {
    console.log('A');
    for (let i = 0; i < 10E+9; i++) {
      // 약 9초 소요
    }
  }
  console.log('C');
  async function B() {
    console.log('B');
    for (let i = 0; i < 10E+8; i++) {
      // 약 1초 소요
    }
  }

  await Promise.all([A(), B()]);
})();
```
6-10. 총 소요시간은 몇 초 일까요? keyword: 비동기
```
(async () => {
  const A = new Promise(res => {
    console.log('A');
    setTimeout(res, 9000);
  });
  console.log('C');
  const B = new Promise(res => {
    console.log('B');
    setTimeout(res, 1000);
  });

  await Promise.all([A, B]);
})();
```
6-11. keyword: async/await
```
(async () => {
  async function fn1() {
    console.log('fn1 a');
    console.log('fn1 b');
    console.log('fn1 c');
    return 'fn1 done';
  }

  async function fn2() {
    console.log('fn2 d');
    console.log('fn2 f');
    console.log('fn2 g');
    return 'fn2 done';
  }
  const a = fn1();
  a.then(e => console.log(e));
  const b = fn2();
  console.log(b);
})();
console.log('hi');
```
6-12. keyword: 얕은 복사 / 깊은 복사
```
const baseObj = {
  a: {name: '명호', age: 26},
  b: {name: '지윤', age: 26},
};

const tempA = baseObj.a;
tempA.name = '민수';
const tempB = baseObj.a;

const A = tempA === tempB;
const B = {name: '민수', age: 26} === tempA;
console.log(A, B);
console.log(baseObj.a);
```
6-13. keyword: Promise, async/await
```
const sleep = async time => new Promise(res => setTimeout(res, time));
(async () => {
  new Promise(async (resolve, reject) => {
    await sleep(3000);
    console.log('3초 기다렸습니다.');
    resolve();
  });
  console.log('test1 context 입니다.');
})();
```
6-14. keyword: Promise, async/await
```
(async () => {
  const promiseReturn = await new Promise(resolve => {
    console.log('여기는 Promise 안 입니다.');
    resolve('resolve 값 입니다.');
  }).then(data => {
    console.log('여기는 then 안 입니다.');
    return 'then 값 입니다.';
  });
  console.log(promiseReturn);
})();
```
6-15. keyword: Promise, async/await
```
(async () => {
  const promiseReturn = new Promise(resolve => {
    console.log('여기는 Promise 안 입니다.');
    resolve('resolve 값 입니다.');
  }).then(data => {
    console.log('여기는 then 안 입니다.');
    return 'then 값 입니다.';
  });
  console.log(promiseReturn);
})();
```
6-16. keyword: Promise, async/await
```
(async () => {
  console.log('START');

  setTimeout(() => {
    console.log('setTimeout');
  }, 0);

  Promise.resolve('Promise').then(res => {
    console.log(res);
  });

  console.log('END');
})();
```
6-17. keyword: Promise, async/await
```
(async () => {
  const myPromise = () => Promise.resolve('myPromise');

  const myFunc = async () => {
    console.log('Inner function');
    console.log(await myPromise());
    console.log('goOut function');
  };

  console.log('Before Function');
  myFunc();
  console.log('After Function');
})();
```
6-18. keyword: Promise
```
(async () => {
  let sum = 0;
  const myPromise = new Promise(resolve => {
    resolve('Promise Resolve');
    sum++;
  });

  const reulst = [await myPromise, sum];
  console.log(reulst);
}();
```
7. 아래 함수의 내용을 채워주세요.
7-1. pipe 함수를 완성시켜주세요
```
const pipeline = (...funcs) => {
  // 여기에 코드를 작성. 아래는 정답
  // return (arg) => funcs.reduce((x, func) => func(x), arg)
}
const fun = pipeline(x => x * 3, x => x + 1, x => x / 2);
console.log(fun(3)); // Should print 5
```
 해설 예정
