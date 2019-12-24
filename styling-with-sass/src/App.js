// npm styled-components js 안에서 css 사용
// npm polish -> lighten, dargen 같은거 사용가능
import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components'; // ThemeProvider 를 사용해서 다른곳에서도 쉽게 사용
import './App.scss';
import Button from './components/Button';
import Dialog from './components/Dialog';

const Circle = styled.div`
  width : 5rem;
  height:5rem;
  background-color:${props => props.color};
  border-radius : 50%;
  ${props => props.huge && css`
    ${props => props.small && `width: 5rem; height:5rem`};
    width:10rem;
    height:10rem;
  `}
`

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue : '#228be6',
  gray : '#496057',
  pink : '#f06595'
}

const ButtonGroup = styled.div`
  & + & {
    margin-top:1rem;
  }
`

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  }
  const onConfirm = () => {
    setDialog(false);
  }
  const onCancel = () => {
    setDialog(false);
  }
  return (
    <ThemeProvider theme={{ palette }}>
      <React.Fragment>
        <AppBlock>
          <ButtonGroup>
            <Button size='small'>Button</Button>
            <Button color='pink'>Button</Button>
            <Button color='gray' size='large'>Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size='small' outline>Button</Button>
            <Button color='pink' outline>Button</Button>
            <Button color='gray' size='large' outline>Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color='gray' size='large' fullWidth onClick={onClick}>Button</Button>
          </ButtonGroup>
        </AppBlock>
        <Circle color='skyblue' small />
        <Circle color='skyblue' huge />
        <Dialog title='정말로 삭제하시겠습니까?'
                confirmText="확인"
                cancelText="삭제"
                onConfirm={onConfirm}
                onCancel={onCancel}
                visible={dialog}
        >
          정말로 삭제하시겠습니까?
        </Dialog>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
