import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    }
  ]
}

function reducer(state, action){
  switch(action.type) {
    case 'CHANGE_INPUT':
      // input 안에 있는 특정 값을 바꿔준다.
      return { // 이하 모르겠음 (멀 어떻게 업데이트를 해줘야 되는건지 모르겠음)
        ...state,
        inputs : {
          ...state.inputs,
          [action.name] : action.value
        }
      }
    case 'CREATE_USER' :
      // input 을 초기값으로 설정
      return {
        inputs: initialState.inputs,
        users : state.users.concat(action.user), // 모르겠음
      }
    case 'TOGGLE_USER' :
      return {
        ...state,
        users : {

        }

      }
    default :
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // state에는 inputs, users가 들어 있는 것임
  const {users} = state;
  const { username, email } = state.inputs;
  const nextId = useRef(4);

  const onChange = useCallback(e => {
    const { name, value} = e.target;
    dispatch({
      type : 'CHANGE_INPUT',
      name,
      value
    });
  },[]);

  const onCreate = useCallback(() => {
    dispatch({
      type : 'CREATE_USER',
      user : {
        id: nextId.current,
        username, // 위에서 받아온거 넣어줄거
        email // 동일
      }
    });
    nextId.current + 1;
  }, [username, email]); // 위에서 값이 변한것을 참조를 하기때문
  return (
    <React.Fragment>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users}/>
      <div>활성 사용자 수 : 0</div>
    </React.Fragment>
  );
}
export default App;
