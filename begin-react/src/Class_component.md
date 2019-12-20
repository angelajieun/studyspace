## 클래스형 컴포넌트
<small><i><b>클래스형 컴포넌트 소개</b></i></small>
```js
// 1. import 할때 Component 를 받고,
// 2. class Hello extends Component 로 선언해주고
// 3. render() 안에 return 해줘야 하고,
// 4. props 를 this로 해서 받아야 한다.
  // this.props;
  // this.props.color;
  // this.props.isSpecial;

import React, { Component } from 'react';

class Hello extends Component {
  static defaultProps = {
    name : '이름없음',
  }
  render(){
    const { color, isSpecial, name } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 { name }
      </div>
    )
  }
}
export default Hello;
```
## 클래스형 컴포넌트
<small><i><b>커스텀 메서드 만들기</b></i></small>
<small>클래스 내부에 함수를 선언하는것을 의미 </small>
#### render() 라는것은 Component 자체적으로 가지고 있는 메서드인것.
```js
// Counter_Class_component.js code
import React, { Component } from 'react';

class Counter extends Component {
  handleIncrease(){
    console.log(this); // 1. this 가 바뀜 그래서 그걸 해결해야됨. 3가지 방법이 있음
  }
  handleDecrease(){
    console.log('22');
  }
  render() {
    return (
      <div>
       <h1>0</h1>
       <button onClick={this.handleIncrease}>+1</button>
       <button onClick={this.handleDecrease}>-1</button>
     </div>
    )
  }
}
export default Counter;
```
<small><i><b>1. constructor 이용하기</b></i></small>
```js
class Counter extends Component {
  constructor(props){ // 2.constructor 는 props 를 가져와야됨.
    super(props); //3. super 로 가져와야함
    this.handleIncrease = this.handleIncrease.bind(this); // 4. this 바인드 시키기
    this.handleDecrease = this.handleDecrease.bind(this);
  }
}
```
<small><i><b>2.화살표 함수 이용하기 </b></i></small>
```js
class Counter extends Component {
  handleIncrease = () => {
    console.log(this); // this 잘 나옴.
  }
  handleDecrease = () => {
    console.log('22');
  }
}
```
<small><i><b>3.Class Properies 라는 문법으로 바벨꽂아서 ...</b></i></small>
```js
class Counter extends Component {
  state = {
    counter : 0
  }
}
```

### <small><i><b>상태 업데이트 하기 </b></i></small>
<small><i><b>state 는 무조건 객체 형태이여야 한다. (useState는 객체든, 배열이든 되었지만 얘는 객체) </b></i></small>
```js
constructor(props){
  super(props);
  this.state = {
    counter : 0 // 2. 이 값이 컴포넌트의 상태가 되는 것이고.
  }
}
handleIncrease = () => {
  // this.state.counter += 1; // 1. 이렇게 하면 안되고 this.setState() 라는 함수는 사용해야됨
  this.setState({ 
    counter: this.state.counter + 1, // 3. 이걸 조회하려면, this.state.counter 로 조회할 수가 있다.
  });
}
```
### <small><i><b>state 안에 유지될 값과 업데이트 될 값 구분 </b></i></small>
<small><i><b>setState 안에 값을 안 넣으면 업데이트가 안되고 그냥 유지, 객체로 또 담으면, 불변성 유지 해줘야됨</b></b></i></small>
```js
class Counter extends Component {
  constructor(props){
    super(props);
    this.state = { // 무조건 객체 형태이여야 한다.
      counter : 0 ,
      fixed: 1,
      updateMe: {
        toggleMe: false,
        dontChangeMe: 1
      }
    }
  }
  handleToggle = () => {
    this.setState({
      updateMe: { // updateMe 가 전체 랜더링
        ...this.state.updateMe, // 값이 유지되려는 것도 있기 때문에 복사하고 
        toggleMe: !this.state.updateMe.toggleMe // 해당것만 업데이트.
      }
    });
  };
}
```
### setState 함수형 업데이트
<small><i><b>setState() 를 함수형 형태로 바뀌면 결과값도 달라진다. </b></i></small>
```js
handleIncrease = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
    this.setState(state => ({
      counter: state.counter + 1
    }));
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };
```
이렇게 되면 3번 불러서 3씩 더해짐
```js
handleDecrease = () => {
    this.setState({
      counter : this.state.counter - 1,
    });
    this.setState({
      counter : this.state.counter - 1,
    });
    this.setState({
      counter : this.state.counter - 1,
    });
  }
```
이렇게 되면 그냥 한번만 불림.
즉, 여러번 쓸려면 함수형 업데이트를 해야 제대로 이루어짐.
