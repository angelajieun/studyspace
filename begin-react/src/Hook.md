## useState Hook
<small><i><b>useState를 통한 동적 상태 관리</b></i></small>
```js
const [state, setState] = useState(0);                                       
```

## useRef Hook
<small><i><b>useRef로 특정 Dom 선택하기</b></i></small>
```js
const refContainer = useRef(initialValue);
```
## useEffect Hook
<small><i><b>마운트,언마운트,업데이트시 사용가능</b></i></small>
##### 화면에 나타날때 마운트, 사라질때 언마운트
```js
//첫번째 파라미터에서는 함수, 두번째는 deps..
useEffect(() => {
  console.log('컨포넌트가 화면에 나타남');
  // props 로 받은 값을 컴포넌트의 로컬 상태로 설정
  // 외부 API 요청 (REST API 등)
  // 라이브러리 사용 (D3, Video.js 등...)
  // setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
  return () => { // // Clean up 함수
    console.log('컨포넌트가 화면에 사라짐');
    // setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
    // 라이브러리 인스턴스 제거

    // 바뀌기 직전에도 호출되고, 사라지고 난후에도 호출되고
  };
},[]); // [deps] 댑스값을 안넣으면 최신의 상태값이 나타나지 않음.
// }); 뎁스가 아예 없는 경우면 컴포넌트가 리랜더링되면 얘도 계속 리랜더링됨.
```

## useMemo Hook
<small><i><b>이전에 연산된 값을 재사용 (성능을 최적화 하기 위해서 사용)</b></i></small>
```js
// useMemo는 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산 할 것입니다.
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

## useCallback Hook
<small><i>useMemo 는 특정 결과값을 재사용 할 때 사용하는 반면, <b>useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용합니다.</b></i></small>
```js
// 메모이제이션된 콜백을 반환합니다.
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

# 질문!!!!! deps 에 받는게 무엇무엇인지 헷갈림
```js
const onCreate = useCallback(() => {
  const user = {
    id : nextId.current,
    username,
    email
  };
  setUsers(users => users.concat(user));
  setInputs({
    username : '',
    email : '',
  });
  nextId.current += 1;
},[username, email]); // 질문... deps 에 nextId 값은 안받아도됨? useRef라?
```

## Ract.memo Hook
<small><i><b>컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정</b></i></small>
```js
//함수는 const 로 담고 React.memo로 감싸준다.
const User = React.memo(function User({ user, onRemove, onToggle}){
  const { username, email, id, active} = user;
  useEffect(() => {
  },[user]);
  return (
    <div> /// </div>
  )
});
// export 로 호출하는 컴포넌트를 React.memo 로 감싸준다.
export default React.memo(CreateUser);
```

##### 'users' 를 받고 있기때문에 리스트 배열이 바뀌면 부르고 있다. 그걸 해결하기 위해서는 useState 로 함수형 업데이를 이용하여 deps를 빼줄 수 있다.

```js
const onRemove = useCallback(id => {
  setUsers(users.filter(user => user.id !== id));
}, [users]);

  // 이것을
const onRemove = useCallback(id => {
  setUsers(users => users.filter(user => user.id !== id));
}, []);

// 이렇게 setUsers 에 users 를 인자로 받아서 사용
```
##### React.memo 의 두번째 인자에는 리랜더링 할지 조건을 넣어줄 수 있는데 넣어주면, 그것말고 업데이트 될애가 있는지 없는지, 고정값이여도 되는지 확인하고 해야한다.
```js
export default React.memo(
  UserList,
  (prevProps, nextProps) => prevProps.users === nextProps.users
  // false를 반환하면 리랜더링을 하게 하는거
  // true 를 반환하면 리랜더링 안하게 하는거
);
```

## useReducer Hook
<small><i><b>컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있습니다.</b><br>
상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고, 심지어 다른 파일에 작성 후 불러와서 사용 할 수도 있지요.</i></small>
```js
// useState의 대체 함수입니다. 
// (state, action) => newState의 형태로 reducer를 받고 dispatch 메서드와 짝의 형태로 현재 state를 반환합니다.
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

### useReducer 는 액션을 기반으로 상태를 업데이트 합니다.
<small>dispatch( { type : 'text' } );<br>
액션 객체라는것은 업데이트 할때 참조하는 객체,
<b>type</b> 이라는것으로 어떤거를 업데이트 할지 명시 <br>
<b>다른 파일에서 작성해서도 불러올 수 있는 장점있음.</b><br>
</small>

#### reducer 사용방법
```js
//reducer : 상태를 업데이트 하는 함수
function reducer(state, action) { // 현재 상태와 (state), action 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 것.
  switch(action.type){
    case 'text' :
      return state + 1;
    case 'DECREMENT' :
      return state - 1;
    default : 
    return state;
  }
  return nextState;
}
```

#### useReducer 사용방법
```js
const [number, dispatch] = useReducer(reducer,0);
// number라는 현재 상태,
// dispatch는 액션을 발생시키는 함수 (보내다)
```

```js
// counter.js code
// import React, {useState} from 'react';
// function Counter(){
//   const [number, setNumber] = useState(0);
//   const onIncrease = () => {
//     setNumber(prevNumber => prevNumber + 1);
//   }
//   const onDecrease = () => {
//     setNumber(prevNumber => prevNumber - 1);
//   }
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   )
// }
// export default Counter;

/* use Reducer 로 사용해보기 */

import React, {useReducer} from 'react';

//1. reducer 라는 함수는 만든다.
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      // return state;
      throw new Error('action Error');
  }
}

function Counter(){
  // 2. 비구조할당으로 넣어주고
  const [number, dispatch] = useReducer(reducer,0);

  const onIncrease = () => {
    // 3. dispatch 에 type 설정
    dispatch({
      type: 'INCREMENT'
    });
  }

  const onDecrease = () => {
    dispatch({
      type: 'DECREMENT'
    });
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
## Custom Hook 만들기
<small><i><b>자주 사용하게 되는것을 Hook으로 만들어서 사용 </b></i></small>
```js
const onChange = (e) => {
  const  {name, value} = e.terget;
  setInputs({...inputs, [name] : value});
}
```

#### 커스텀 훅을 만들때는 use.. 시작해서 함수를 만들어 주고, return 을 통해 원하는걸 반환시키면 된다.
<small>맨 위에 import 시켜줘서 사용.</small>
```js
import { useState, useCallback} from 'react';

function useInputs(initialForm){
  const {form, setForm} = useState(initialForm);
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setForm(form => ({
      ...form,
     [name] : value
    },[]));
  });
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}

export default useInputs;
```
