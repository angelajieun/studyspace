// npm node-sass, classnames 설치
import React, { useState } from 'react';
import ButtonClassnames from './components/ButtonClassnames';
import './App.scss';
import CheckBox from './components/CheckBox';

function AppScssClassnames() {
  const [check, setCheck] =  useState(false);
  const onChange = (e) => { 
    setCheck(e.target.checked); 
  }
  return (
    <React.Fragment>
      <div className="App">
        <div className="buttons">
          <ButtonClassnames size='large' outline={true}>BUTTON</ButtonClassnames>
          <ButtonClassnames>BUTTON</ButtonClassnames>
          <ButtonClassnames size="small">BUTTON</ButtonClassnames>
        </div>
        <div className="buttons">
          <ButtonClassnames color='gray' size='large' outline>BUTTON</ButtonClassnames>
          <ButtonClassnames color='gray'>BUTTON</ButtonClassnames>
          <ButtonClassnames color='gray' size="small" 
          onClick={() => {
            console.log(111);
          }}
          onMouseMove={
            () => {
              // console.log(222);
            }
          }
          >BUTTON</ButtonClassnames>
        </div>
      </div>
      <div>
        <CheckBox onChange={onChange} checked={check}>다음 약관 동의</CheckBox>
      </div>
    </React.Fragment>
  );
}

export default AppScssClassnames;
