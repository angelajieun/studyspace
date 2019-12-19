import React, { useState, useRef } from 'react';

function InputSample(){
  const [inputs, setInputs] = useState({ // 객체로 상태 관리하기
    name : '',
    nickName : '',
  });
  const { name, nickName } = inputs;

  const nameInput = useRef();

  const onChange = (e) => {
    const { name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const onReset = () => {
    setInputs({
      name : '',
      nickname : '',
    });
    nameInput.current.focus();
  }

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
      <input name="nickName" placeholder="닉네임" onChange={onChange} value={nickName} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {name} ({nickName}) </b>
      </div>
    </div>
  )
}

export default InputSample;