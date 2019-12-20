import React from 'react';

function User( { user }){
  return (
    <div>
      <div>
        <b>Id</b> : {user.id}
      </div>
      <div>
          <b>Username</b> : {user.username}
      </div>
    </div>
  )
}

export default User;