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