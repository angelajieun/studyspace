import React, {Component} from 'react';

class ErrorBoundary extends Component {
  state = {
    error : false
  }

  componentDidCatch(error, info){ //error 에 대한 정보, info 는 error가 어디서 발생했는지에 대한 정보
    // 아직 발견하지 못한 에러가 있을때 이렇게 사용자에게 에러가 발생했음을 알려줬을때 사용할 수 있고요.
    console.log({ // santry 라는걸로 로그를 쌓아서 에러를 관리 할 수 있음.
      error,
      info
    });
    this.setState({
      error : true
    });
  }
  render(){
    if(this.state.error) { // true 가 되면 아래 에러가 발생하는 것임.
      return <h1>에러 발생!!</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;