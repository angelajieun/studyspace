import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }){
  const { username, email, id, active} = user;
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
      style={{
        color: active ? 'green' : 'black',
        cursor : 'point'
      }}
        onClick={() => dispatch({ type: "TOGGLE_USER", id})}
      >{username}</b>&nbsp;
      <span>{email}</span>
      <button onClick={() => dispatch({ type: "REMOVE_USER", id})}>삭제</button>
    </div>
  )
});
function UserList({ users }) {
  return (
    <div>
      {
        users.map(
          user => (
          <User user={user} key={user.id} />
          )
        )
      }
    </div>
  )
}

export default React.memo(UserList,
                          // (prevProps, nextProps) => prevProps.users === nextProps.users
                          // false를 반환하면 리랜더링을 하게 하는거
                          // true 를 반환하면 리랜더링 안하게 하는거
                          );