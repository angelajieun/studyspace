import React from "react";
import qs from 'qs';

function About({ location }) {
  console.log(location);
  const query = qs.parse(location.search, { ignoreQueryPrefix : true});
  console.log(query);
  const detail = query.detail === "true"; // url 파람, 쿼리 파싱값은 문자열

  return (
    <div>
      <h1>소개</h1>
      <p>소개 페이지 {detail && <b> detail값이 트류면 나온다</b>}</p>
    </div>
  );
}

export default About;
