import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';
function countActiveUsers(users){
  return users.filter(user => user.active).length;
}

const initialState = {
  users : [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]
}
function reducer(state, action){
  switch (action, type) {
    case 'CHANGE_INPUT' : 
    return {
      ...state,
      input : {
        ...state.inputs,
        [action.name] : action.value
      }
    };
    defaut : 
    throw new Error('Error');
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs(
    {
      username : '',
      email : '',
    }
  );
  const nextID = uesRef = 4;
  const { users } = state;
  const {username, email} = state.inputs;

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    dispatch({
      type : 'CHANGE_INPUT',
      name,
      value
    })
  },[]);

  return (
    <React.Fragment>
      <CreateUser username={username} email={email} onChange={onChange}/>
      <UserList users={users} />
      <div>활성 사용자 수 : 0</div>
    </React.Fragment>
  );
}

export default App;
