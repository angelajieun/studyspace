import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남'); // 마운트 될때
  //   // props -> state
  //   // Rest API
  //   // setInterval, setTimeout;
  //   return () => { // 언마운트 될때
  //     //clearInterval, clearTimeout
  //     console.log("화면에서 사라짐");
  //   };
  // },[]); // [] 을 deps(댑스) 라고 하는데 의존되는 값들을 넣어주는거고 비여있으면 처음 실행 될때 (마운트일때 언마운트일때 한번만)만 호출함

  useEffect(() => {
    // console.log(user);
    return () => {
      // console.log(user);
      // 값이 바뀌기 전에 나타나고 그 다음 return 으로 바뀜.
    }
  }, [user]); // user 값이 설정 될때나, 값이 바뀔때마다 호출이 된다. 마운트 될때도 나타나는거다.

  // userEffect Hook
  // useMemo Hook (성능을 최적화 하기 위해서 사용됨)


  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: active ? 'green' : 'black'
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(
  UserList,
  // (prevProps, nextProps) => nextProps.user === prevProps.user // 사용할라면 최신상태의 users값을 사용하지 않기 때문에 잘 확인하고 써야됨.
  );

  // 연산된 