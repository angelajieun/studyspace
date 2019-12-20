import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle}){
  const { username, email, id, active} = user;
  useEffect(() => {
  },[user]);
  return (
    <div>
      <b
      style={{
        color: active ? 'green' : 'black',
        cursor : 'point'
      }}
        onClick={() => onToggle(id)}
      >{username}</b>&nbsp;
      <span>{email}</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  )
});
function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {
        users.map(
          user => (
          <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
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