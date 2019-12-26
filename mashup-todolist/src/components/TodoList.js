import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1 1 0px;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem done={true} text="해야할일 1" />
      <TodoItem done={false} text="해야할일 2" />
    </TodoListBlock>
  );
}

export default TodoList;
