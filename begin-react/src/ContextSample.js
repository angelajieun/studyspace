import React, {createContext, useContext} from 'react';

const MyContext = createContext('defaultValue');

function child(){
  const text = useContext(MyContext);
  return <div>hello :) {text}</div>
}

function GrandParent(){
  return <child />
}

function ContextSample(){
  return (
    <MyContext.Provider value="good"> 
    {/* 여기 있는 값이 Mycontxt 로 값이 전달되고 useContext 를 그래도 불러와서 text 를 사용 */}
      <Grandparent />
    </MyContext.Provider>
  )

}
export default ContextSample;