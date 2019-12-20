## Input
### input 상태 관리하기
<small><i><b>input 의 상태를 관리할 때에는 input 태그의 value 값도 설정해주는 것이 중요합니다.</b></i></small>
```js
import React, { useState } from 'react';

function InputSample(){
  const [text, setText] = useState('');
  const onChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  }
  const onReset = () => {
    setText('');
  }
  return (
    <div>
      <input onChange={onChange} value={text} 
       // input 의 상태를 관리할 때에는 input 태그의 value 값도 설정해주는 것이 중요합니다.
       // 그렇게 해야, 상태가 바뀌었을때 input 의 내용도 업데이트 됩니다.
       // 안하면 input 안에 텍스트가 그대로 있는거임.
      /> 
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  )
}
export default InputSample;
```
### 여러개의 input 상태 관리하기
<small><i><b> 더 좋은 방법은, input 에 name 을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것입니다. 그리고, useState 에서는 문자열이 아니라 객체 형태의 상태를 관리해주어야 합니다.</b></i></small>
```js
const [inputs, setInputs] = useState({ // 객체로 상태 관리하기
  name : '',
  nickName : '',
});
const {name, nickName} = inputs;
// inputs 를 꺼내서 name 이랑 nickName 값을 쉽게 사용하는것
```
<small><i><b>useState 를 객체로 받고 객체 형태를 업데이트 할때는 방식이 조금 다르다.</b></i></small>
```js
// InputSample.js code
import React, { useState } from 'react';

function InputSample(){
  const [inputs, setInputs] = useState({ // 객체로 상태 관리하기
    name : '',
    nickName : '',
  });
  const {name, nickName} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    // 원래는
    // 1. setInputs(value); 이런식으로 넣어줬는데 객체로 넣어줬으니 객체 형태로 받아줘야됨.
    // 2. 객체를 업데이르 할때는 기존의 객체를 우선 복사를 해야됨.
    const nextInputs = {
      ...inputs,
      // 3. name : value, 여기에 name 에다가 [] 를 바로 씌어줌. 이렇게 해서 새로운 객체를 만들어 준거고 그걸 쓰겟다.
      [name] : value,
    }
    // 3. nextInputs[name] = value; 이렇게 넣어주면 되는데 이렇게 안하고 위에다가 넣어줄 수 있음
    setInputs(nextInputs);
  }
  const onReset = () => {

  }
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickName" placeholder="닉네임" onChange={onChange} value={nickName} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
      </div>
    </div>
  )
}
export default InputSample;
```
<small><i><b>nextInputs 에 스프레드 방식으로 ...inputs 새로 객체를 복사하고 그 다음에 값들을 거기에 넣어줘 (불변성을 지켜줘야 함)</b></i></small>
```js
const nextInputs = {
  ...inputs,
  [name] : value,
}
setInputs(nextInputs);
// 결국 아래와 코드가 같음.
setInputs({
  ...inputs,
  [name]: value,
});
```
## useRef Hook
<small><i><b>useRef로 특정 Dom 선택하기</b></i></small>
 예를 들어 포커스를 어느 특정 부분에 놓고 싶을때
```js
import React, { useState } from 'react';

function InputSample(){
  const nameInput = useRef();

  const onReset = () => {
    nameInput.current.focus();
  }

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
      <button onClick={onReset}>초기화</button>
    </div>
  )
}
export default InputSample;
```
##### useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다.