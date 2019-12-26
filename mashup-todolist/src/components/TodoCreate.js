import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 80px;
  height: 80px;
  background: #38d9a9;
  border-radius: 50%;
  border: none;
  font-size: 60px;
  color: white;
  outline: none;
  transform: translate(-50%, 50%);
  cursor: pointer;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  transition: 0.125s all ease-in;
  z-index: 5;

  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`
//  / InsertForm /Input 
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`
const InsertForm = styled.div`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`
const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`

function TodoCreate(){
  const [open, setOpen] = useState(false); // setOpen은 open값을 업데이트 하는 함수

  const onToggle = () => {
    setOpen(!open);
  }
  return (
    <React.Fragment>
      <CircleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CircleButton>
      {/* <InsertFormPositioner open={open}>
        <InsertForm>
          <Input placeholder="입력해주세요."></Input>
        </InsertForm>
      </InsertFormPositioner> */}
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input placeholder="입력해주세요." autoFocus></Input>
          </InsertForm>
        </InsertFormPositioner>
      )}
    </React.Fragment>
  )
}

export default TodoCreate;