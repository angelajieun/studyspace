import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding : 48px 32px 24px;
  border-bottom:1px solid #e9ecef;
  h1 {
    margin:0;
    font-size:36px;
    color:#343a40;
  }
  .day {
    margin-top:4px;
    color:#868e96;
    font-size:20px;
  }
  .taskes-left {
    color:#20c997;
    font-size:18px;
    margin-top:40px;
    font-weight:bold;
  }
`
function TodoHead() {
  const todos = useTodoState();
  // console.log(todos);
  // const undoneTasks = todos.filter();
  // console.log(todos.map());
  return (
    <TodoHeadBlock>
      <h1>2019.12.25</h1>
      <p className="day">수요일</p>
      <p className="taskes-left">오늘 해야할 일 2개</p>
    </TodoHeadBlock>
  );
}

export default TodoHead;