import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  },[inputs]); // 이 함수는 inputs가 바뀔때만 새로 랜더링을 하는것임. 그렇지 않다면 기존에 만든것을 재 사용하게 되는것이다.
  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users => users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]); // dps 를 깜박하면 최신상태가 아닌 그 전에 것을 참조하게 되는것임.

  const onRemove = useCallback(id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users => users.filter(user => user.id !== id));
  },[]);

  const onToggle = useCallback(id => {
    setUsers(users => 
      users.map(user => 
        user.id === id ? {...user, active : !user.active} : user
      )
    );
  }, []);

  // useMemo 첫번째 파라미터는 함수, 두번째 파라미터는 deps
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <React.Fragment>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </React.Fragment>
  );
}

export default App;
