# Begin-React
<small><i><b></b></i></small>
## JSX 사용하기
<small><i><b>className / style은 객체 형태로</b></i></small>
 ```js
  // App.js 코드
import React, { Component } from 'react';
import Hello from './Hello';
import './App.css';
class App extends Component {
  render() {
    const name = '젤라님';
    const style = {
      backgroundColor : 'black',
      color: 'aqua',
      fontsize : 24, // 기본단위 px
      padding : '1rem',
    }
    // 주석
    return (
      <React.Fragment>
        {/* JSX 주석 */}
        <Hello name={name}
          // 컴포넌트 불러오는 곳의 주석
        />
        <div style={style}>{name}</div>
        <div className="gray-box"></div>00
      </React.Fragment>
    );
  }
}

export default App;
```

## Props (prop-ertie-s 의 줄임말)
<small><i><b>props는 객체 형태로 받아진다</b></i></small>
 ```js
  ///Hello.js 코드
import React from 'react';

function Hello(props){
  console.log(props); // 객체 형태로 반환해준다.
  // {name : '젤라'}
  return <div>안녕하세요 {props.name}</div>
}
export default Hello;
 ```
<small><i><b>props의 값을 비구조 할당으로 받기</b></i></small>
 ```js
 // App.js 코드
 <Hello name='젤라' color='orange' /> {/* 여기서 name, color 보내는것이 props의 값이 되는것이다. */}

 // Hello.js 코드
import React from 'react';

function Hello(props){
  const { name, color } = props;
  return (
    <div style={{color}}>안녕하세요 {name}</div>
  )
}
////////////////// 아래의 처럼 변경
function Hello({ name, color }) {
  return (
    <div style={{ color }}>안녕하세요 {name}</div>
  )
}
export default Hello;
 ```
<small><i><b>defaultProps 값 설정하기</b></i></small>
```js
// Hello.js 코드
import React from 'react';

function Hello({ name, color }) {
  return (
    <div style={{ color }}>안녕하세요 {name}</div>
  )
}

Hello.defaultProps = {
  name : '이름없음'
}
export default Hello;

// App.js 코드
<React.Fragment>
  <Hello name='젤라' color='orange' />
  <Hello color='pink' />
</React.Fragment>
//으로 name 값을 설정 안하면 defaultProps 값을 사용하게 된다.
```
## props.children
<small><i><b>props.children 값 사용하기</b></i></small>
<small><i>값이 <'div'> 안에 있는게 아니라, 컴포넌트 안에 <'Wrapper'>값이 있을때 걔를 조회하려고 할때 쓰는 것.</i></small>
```js
// App.js 코드
import React, { Component } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Hello name='젤라' color='orange' />
        <Hello color='pink' />
      </Wrapper>
    );
  }
}

export default App;

// Wrapper.js code
import React from 'react';

function Wrapper(){
  const style = {
    border: '2px solid black',
    padding: '16px',
  }
  return (
    <div style={style}></div>
  )
}
export default Wrapper;
```
<small><i><b>근데 이렇게만 사용하면 화면에는 wrapper 관련 style 밖에 안나온다. 그래서 wrapper 컴포넌트에다가
children 이라고 해서 값을 받고 return 값에 children을 넣어줘야 함.</b></i></small>
```js
// Wrapper.js code
import React from 'react';

function Wrapper({children}){
  const style = {
    border: '2px solid black',
    padding: '16px',
  }
  return (
    <div style={style}>{children}</div>
  )
}
export default Wrapper;
```
## 조건부 랜더링
<small><i><b>삼항 연산 또는 true 값 보내기</b></i></small>
```js
<Hello name='젤라' isSpecial={true} />
//  isSpecial={true} === isSpecial
// true 값이 기본  default 값임

function Hello({ name, isSpecial }) {
  return (
    <div>
      {isSpecial ? <b>*</b> : null} 
      {/* 참고로 {null}, {undefind} 값은 경우는 화면에 안나타나는데 {0} 은 숫자가 나타남.
                  falsy 한 값은 다 안나타 나는데 0은 예외다.
      아래도 같은 코드임 */ }
      {isSpecial && <b>*</b>} // 앞에 true 면 뒤에값을 출력하게 되니까 이렇게도 사용
      안녕하세요 {name}
    </div>
  )
}
```
