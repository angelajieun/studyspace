## createContext, useContext API 사용하기
<small><i><b>Props 전달을 위해 전달전달 하는것을 쉽게 사용할 수 있음 </b></i></small>
<small>
  리액트의 Context API 를 사용하면, 프로젝트 안에서 전역적으로 사용 할 수 있는 값을 관리 할 수 있습니다. 여기서 제가 "상태" 가 아닌 "값" 이라고 언급을 했는데요, 이 값은 꼭 상태를 가르키지 않아도 됩니다. 이 값은 함수일수도 있고, 어떤 외부 라이브러리 인스턴스일수도 있고 심지어 DOM 일 수도 있습니다.
</small>

```js
const UserDispatch = React.createContext(null);
```
#### Context 를 만들면, Context 안에 Provider 라는 컴포넌트가 들어있는데 이 컴포넌트를 통하여 Context 의 값을 정할 수 있습니다. 이 컴포넌트를 사용할 때, value 라는 값을 설정해주면 됩니다.
```js
<UserDispatch.Provider value={dispatch}>...</UserDispatch.Provider>
```

useContext 는 (여기 안에 있는 컨텍스틑) 값을 읽어와서 사용할 수 있게 해주는 리액트 내장된 Hook.

```js
import React, {createContext, useContext} from 'react';

const MyContext = createContext('defaultValue');

function child(){
  const text = useContext(MyContext);
  return <div>hello :) {text}</div>
}

function GrandParent(){
  return <child />
}

function ContextSample(){
  return (
    <MyContext.Provider value="good"> 
    {/* 여기 있는 값이 Mycontxt 로 값이 전달되고 useContext 를 그래도 불러와서 text 를 사용 */}
      <Grandparent />
    </MyContext.Provider>
  )

}
export default ContextSample;
```