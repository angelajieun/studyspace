import React from 'react';

Hello.defaultProps = {
  name: '이름없음'
};

//1.
// function Hello(props){
//   return (
//     <div style={{color:props.color}}>안녕하세요! {props.name}</div>
//   )
// }

//2.
// function Hello({name, color}) {
//   return (
//     <div style={{color}}>안녕하세요! {name}</div>
//   )
// }

//3.
function Hello({ name, color }) {
  return (
    <div style={{ color }}>안녕하세요! {name}</div>
  )
}
export default Hello;

