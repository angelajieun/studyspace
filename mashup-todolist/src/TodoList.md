# TodoList 만들기

### styled-components 에서 createGlobalStyle 사용하기

```js
import { createGlobalStyle } from 'styled-components';

<React.Fragment>
  <GlobalStyle />
  <div></div>
</React.Fragment>

// createGlobalStyle 을 사용하면 전역에서 사용 가능
```

### useState 사용
```js
const [open, setOpen] = useState(false); // setOpen은 open값을 업데이트 하는 함수

const onToggle = () => {
  setOpen(!open);
}

<CircleButton open={open} onClick={onToggle}></CircleButton>
```

### 값이 true 이면 컴포넌트 보여지게 설정
```js
// 이렇게도 사용 가능. css로 opacity :0 true면 1 이렇게 안해도됨.
return (
  {open && (
    <InsertFormPositioner>
      <InsertForm>
        <Input placeholder="입력해주세요." autoFocus></Input>
      </InsertForm>
    </InsertFormPositioner>
  )}
)
```

### Input 에 자동 포커스 설정
```js
<Input placeholder="입력해주세요." autoFocus></Input>
```

## reducer 만들기
<small><i>
1. 먼저, useReducer 를 사용하여 상태를 관리하는 TodoProvider 라는 컴포넌트를 만들어보세요.<br>
2. 초기값 설정.
</i></small>

```js
//2. 
const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성',
    done: true,
  },
]
```
<small><i>
3. todoReducer 함수 만들기
</i></small>

```js
// 참고
const [state, dispatch] = useReducer(reducer, initialArg, init);
// (state, action) => newState의 형태로 reducer를 받고 dispatch 메서드와 짝의 형태로 현재 state를 반환합니다.
//  useReducer는 자세한 업데이트를 트리거 하는 컴포넌트의 성능을 최적화할 수 있게 하는데,
//  이것은 콜백 대신 dispatch를 전달 할 수 있기 때문입니다.
```

```js
function todoReducer(state, action){ // 3가지 액션을 만들것임, create, toggle, remove
  switch (action.type) {
    case 'create':
      return;

    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
}
function TodoContext() {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)
  return <div></div>
}
```
<small><i>
4. createContext 만들기
state 와 dispatch 를 Context 통하여 다른 컴포넌트에서 바로 사용 할 수 있게 해줄건데요.
</i></small>
```js
const TodoStatecontext = createContext()
const TodoDispatchContext = createContext();

function TodoContext() {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)
  return (
    <TodoStatecontext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        ....
      </TodoDispatchContext.Provider>
    </TodoStatecontext.Provider>
  )
}
// createContext 를 만들면 Provider라는 컴포넌트가 들어있는데,
// 이 컴포넌트를 통해 Context 값을 정할수 있어 value로 전달하면 됩니다.

```

<small><i>
4-1. Context 에서 사용 할 값을 지정 할 때에는 위와 같이 Provider 컴포넌트를 렌더링 하고 <br>
value 를 설정해주면 됩니다.
</i></small>
```js
//이렇게 하면 다른 컴포넌트에서 state 나 dispatch를 사용하고 싶을 때 다음과 같이 할 수 있습니다.
import React, { useContext } from 'react';
import { TodoStateContext, TodoDispatchContext } from '../TodoContext';

function Sample() {
  const state = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);
  return <div>Sample</div>;
}
```

<small><i>
4-2. 생성한 provider 템플릿을 app.js에서 사용하기
</i></small>
```js
export function TodoProvider( { children } ) {

}
// export 를 하고 App.js 에 호출
import { TodoProvider } from './TodoContext';

function App() {
  return(
    <TodoProvider>
      // children 넣어주기
    </TodoProvider>
  )
}
```
<small><i>
5. useContext 로 생성한 createContext 값 이용해보기
</i></small>
```js


```