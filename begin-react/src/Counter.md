## useState Hook
### useState
<small><i><b>useState를 통한 동적 상태 관리</b></i></small>
```js
// Counter.js code
import React, {useState} from 'react';
// useState 라는 함수는 불러오는것
// https://ko.reactjs.org/docs/hooks-reference.html#usestate
function Counter(){
  const [number, setNumber] = useState(0);
  // 1. number 라는 상태를 사용할 것인데 이것의 기본값을 0으로 사용하겠다.
  // 2. setNumber 는 number를 갱신할 때 사용한다. (함수)
  /* 3. 원래 위에 코드는 아래와 같은 코드 인데 비구조 할당을 사용
    const numberState = useState(0);
    const number = numberState[0];
    const setNumber = numberState[1];
  */
  const onIncrease = () => {
    //상태 변하는 값 이용을 setNumber로 사용하는것.
    setNumber(number + 1);
  }
  const onDecrease = () => {
    setNumber(number - 1);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;
```
<small><i><b>함수형 업데이트 하는 방법 (최적화를 위해서 사용)</b></i></small>
onIncrease 와 onDecrease 에서 setNumber 를 사용 할 때 그 다음 상태를 파라미터로 넣어준것이 아니라, 값을 업데이트 하는 <b>함수를 파라미터</b>로 넣어주었습니다.
```js
// 작동하는 것은 같음 하지만 함수형태로 바꾸고 걔를 바꿈
const onIncrease = () => {
  setNumber(prevNumber => prevNumber + 1);
  //setNumber(number + 1);
}

const onDecrease = () => {
  setNumber(prevNumber => prevNumber - 1);
  //setNumber(number - 1);
}

export default Counter;
```
