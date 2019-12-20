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