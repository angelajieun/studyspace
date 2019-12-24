# styled Components 사용하기
```js
import styled, { css, ThemeProvider } from 'styled-components';
// ThemeProvider 를 사용해서 다른곳에서도 쉽게 사용

// styled css 사용하기
// App.js code
const Circle = styled.div`
  width : 5rem;
  height:5rem;
  background-color:${props => props.color};
  border-radius : 50%;
  /* ${props => props.huge && `
     width:10rem;
     height:10rem;
      // 여기 안에서 props 또 읽어 올 수가 없음 그래서 태그 템플릿 리터럴을 사용 (지금은 그냥 리터럴)
    `} */
  ${props => props.huge && css`
    /* 여기 안에 props 사용 가능 */
    ${props => props.small && `width: 5rem; height:5rem`};
    width:10rem;
    height:10rem;
  `}
`
const palette = {
  blue : '#228be6',
  gray : '#496057',
  pink : '#f06595'
}

function App() {
  <ThemeProvider theme={{ palette }}> {/* ThemeProvider 안에는 하나의 컴포넌트만 있어야 함 */}
    <React.Fragment>
      <Circle color='skyblue' small />
      <Circle color='skyblue' huge />
      <Button color='gray' size='large' outline>Button</Button>
    </React.Fragment>
  </ThemeProvider>
}
```
```js
// Button.js code
const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
}
const sizeStyles = css`
  ${({ size }) =>  css`
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
    `
  }
`
```
# polished lib 사용
```js
// Button.js code
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
      background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${props => props.outline && css`
        color: ${selected};
        background: none;
        border: 1px solid ${selected};
        &:hover {
          background: ${selected};
          color: white;
        }
      `}
    `
  }}
`
```

## 최종 코드
#### App.js 와 Button.js, dialog.js 로 팝업 띄우고 지우는거 까지 구현 코드
```js
// App.js

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

```
```js
// Button.js code

import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
      background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${props => props.outline && css`
        color: ${selected};
        background: none;
        border: 1px solid ${selected};
        &:hover {
          background: ${selected};
          color: white;
        }
      `}
    `
  }}
`
const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
}
const sizeStyles = css`
  ${({ size }) =>  css`
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
    `
  }
`

const fullWidthStyle = css`
  ${props => props.fullWidth && css`
    width: 100%;
    justify-content: center;
    & + & {
      margin-left: 0;
      margin-top: 1rem;
    }
  `}
`;
const StyledButton = styled.button`
   /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  /* ${({theme, color}) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
      background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `
  }} */
  ${colorStyles}
  ${fullWidthStyle}
`
function Button({children, color, size, outline, fullWidth, ...rest}){
  return (
    <StyledButton color={color} size={size} outline={outline} fullWidth={fullWidth} {...rest}>{children}</StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size : 'medium',
}

export default Button;
```

```js
// Dialog.js code

import React, { useState, useEffect } from 'react';
import styled, {keyframes, css} from 'styled-components';
import Button from './Button';

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${props => props.disappear && css`
    animation-name: ${fadeOut};
  `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${props => props.disappear && css`
    animation-name: ${slideDown};
  `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

// style css 상속받아서 그 위에 덮어씌울려면
const ShortMarginButton = styled(Button)`
  & + & {
    margin-left:.5rem;
  }
`;

function Dialog({ title, children, confirmText, cancelText, visible, onConfirm, onCancel }){
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    // visivble true -> false
    if (localVisible && !visible ){
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!animate && !localVisible ) return null;
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <Button color='gray' onClick={onCancel}>{cancelText}</Button>
          <Button color='pink' onClick={onConfirm}>{confirmText}</Button>
        </ButtonGroup>
        <ButtonGroup>
          {/* 상속받아서 사용하는 방법 위에 styled 함수로 사용하여 상속 받고 새로운 const 정의해서 사용 */}
          <ShortMarginButton color='gray'>{cancelText}</ShortMarginButton>
          <ShortMarginButton color='pink'>{confirmText}</ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

Dialog.defaultProps = {
  confirmText : '취소',
  cancelText : '확인'
}

export default Dialog;

```