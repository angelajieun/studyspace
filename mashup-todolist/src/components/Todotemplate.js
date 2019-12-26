import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  display:flex;
  flex-direction:column;  
  width:512px;
  height:768px;
  position:relative;
  background-color:#fff;
  border-radius:20px;
  box-shadow:0 0 8px rgba(0,0,0,.04);
  margin:50px auto 30px;

`

function Todotemplate({ children }) {
  return (
    <React.Fragment>
      <TodoTemplateBlock>{children}</TodoTemplateBlock>
    </React.Fragment>
  );
}

export default Todotemplate;