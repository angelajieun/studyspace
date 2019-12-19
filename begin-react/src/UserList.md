## 배열 렌더링하기
### array.map();
<small><i><b>map을 사용할때는 고유의값 key 값을 설정해야한다.</b></i></small>
없는경우 map의 index를 사용할~~수는 있지만 사용안하는것이 좋음.
<b>key 값이 있어야 랜더링 할때 그 값을 보고 새로운 것에 대해 그것만 랜더링을 할 수 있기 때문</b>
```js
// UserList.js code
import React from 'react';

function User({user}){
  return (
    <div>
      <b>{user.username}</b><br />
      <span>{user.email}</span>
    </div>
  )
}
function UserList() {
  const users = [
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
  ];

  return (
    <div>
      {
        users.map(
          // user => (<User user={user} />) // 이렇게만 쓰면 console error 에서 unique "key" 라고 뜬다
          user => (<User user={user} key={user.id} />)
          // 권장 x  : (user, index) => (<User user={user} key={index} />)
        )
      }
    </div>
  )
}
export default UserList;
```
## useRef로 컴포넌트 안의 변수 만들기
### 변수의 값을 초기화하고 다시 만들고 싶지 않을때
<small><i> 값을 변경하려면 useState 를 사용해야 되는데 그러면 새로 리랜더링 되는데 <b>값을 변경했을때 그것 때문에 다시 리랜더링 하고 싶지 않을때 useRef 를 사용</b></i></small>

<small>setTimeout, setInterval 을 통해서 만들어진 id,
외부 라이브러리를 사용하여 생성된 인스턴스,
scroll 위치 등을 기억하려고 할 때 사용.</small>

#### useRef 를 사용하면 값을 변경해도 리랜더링 되지 않는다는것을 기억해야한다.
```js
// App.js code
import React, { Component, useRef } from 'react';
import UserList from './UserList';
class App extends Component {
  render() {
    const users = [
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
    ];

    const nextId = useRef(4); // 컴포넌트가 리랜더링 되고 얘는 4임. id:3에 끝나서 그 다음 4부터 시작하게 초기값 4라고 써준거임
    const onCreate = () => {
      console.log(nextId.current); // 4가 나옴 사용하면 그 다음 +1 됨
      nextId.current += 1;
    }

    return (
      <UserList users={ users }/>
    )
  }
}
export default App;
```