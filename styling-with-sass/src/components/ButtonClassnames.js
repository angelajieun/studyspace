import React from 'react';
import classNames from 'classnames'; //classnames lib 사용
import './Button.scss';

//size : large, medium, small 만들기
function ButtonClassnames({ children, size = 'medium', color = 'blue', outline, fullWidth, className, ...rest } ){
  return (
    <button className={classNames(
        'Button', size, color,
        {
          outline,
          fullWidth // true, false 로 받아서 true 로 출력
        },
        className
        )}
      {...rest}
    >{children}</button>
  );
}

export default ButtonClassnames;