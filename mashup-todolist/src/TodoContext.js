import React, { useReducer, createContext, useContext } from 'react'

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

function todoReducer(state, action){ // 3가지 액션을 만들것임, create, toggle, remove
  switch (action.type) {
    case 'create':
      return;


    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
}

const TodoStatecontext = createContext();
export const TodoDispatchContext = createContext();

export function TodoProvider( { children } ) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  // console.log(state); // 초기값 배열
  return (
    <TodoStatecontext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStatecontext.Provider>
  )
}

export function useTodoState(){
  return useContext(TodoStatecontext);
}



