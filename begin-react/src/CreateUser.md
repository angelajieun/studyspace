## 배열 항목 추가하기
<small><i><b>concat() 이용하여 추가한다. </b></i></small>

<small>useState 를 이용하며, 스프레드 연산으로 사용하여 업데이트 하거나, concat() 를 이용하여 배열에 추가해 줄 수 있음</small>
```js
// App.js code
import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({ // 객체형태로 넣어준것이고
      ...inputs,
      [name] : value,
    });
  };
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

  const nextId = useRef(4); // 컴포넌트가 리랜더링 되고 얘는 4임. id:3에 끝나서 그 다음 4부터 시작하게 초기값 4라고 써준거임
  const onCreate = () => {
    const user = {
      id : nextId.current,
      // ...inputs, 라고 써도 아래와 같음
      username,
      email
    };
    // setUsers([...users, user]); // 얘는 배열 형태로 넣어준것, 기존배열 users를 복사해서 user에다가 새로이 넣어줌
    setUsers(users.concat(user)); // 1. concat을 이용하여 배열에 추가 해줄 수도 있음
    // 2. push 이런거 사용하면 업데이트가 되지 않으며, 기존 데이터를 변경해서는 안됨.
    nextId.current += 1;
  };

  return (
    <React.Fragment>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        />
      <UserList users={ users }/>
    </React.Fragment>
  );
}
export default App;
```
## 배열 항목 삭제하기
<small><i><b>filter() 를 이용하여 삭제한다.</b></i></small>
```js
// UserList.js code
import React from 'react';

function User({ user, onRemove}){
  const { username, email, id} = user;
  return (
    <div>
      <b>{username}</b><br />
      <span>{email}</span>
      <button onClick={() => onRemove(id)}>삭제</button>
      {/* 새로운 함수를 넣어준다 왜냐면
          onclick 하면 파라미터를 보내주고 싶기 때문
          onClick 하면 익명 함수를 호출해줄꺼고 props 로 받아온 onRemove에 파라미터 id를 보낼거다.
          onclick={onRemove(id)} -> 이렇게 onRemove를 호출해버리면 랜더링될때 삭제된다.

          그래서 함수에 넣어서 불러준다.
      */}
    </div>
  )
}
function UserList({ users, onRemove }) {
  return (
    <div>
      {
        users.map(
          user => (
          <User user={user} key={user.id} onRemove={onRemove}/>
          )
        )
      }
    </div>
  )
}
export default UserList;
```

## 배열 항목 수정하기
<small><i><b>배열 안에 있는 원소를 업데이트 할때는 map() 함수를 사용하여 구현할 수 있으며, 특정 객체를 업데이트 할때도 동일하게 새로운 객체를 만들어서 특정값을 넣어서 할 수 있음 </b></i></small>
```js
//App.js code
const onToggle = id => {
  setUsers(users.map(
    user => user.id == id ? {...user, active : !user.active} : user
  ));
};
<UserList users={ users } onRemove={onRemove} onToggle={onToggle} />

//UserList.js code
<b
  style={{
    color: active ? 'green' : 'black',
    cursor : 'point'
  }}
  onClick={() => onToggle(id)}
>{username}</b>
```
