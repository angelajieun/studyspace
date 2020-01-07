#API 연동

### Rest API
<small><i><b>클라이언트와 서버간의 소통하는 방식 (데이터 주고 받는 형식)</b></i></small>
#### 1. URI - 정보의 자원을 표현해야 한다.
#### 2. 자원에 대한 행위는 http method (get, post, put, delect) 로 표현.
<small><i><b>1. get -> 가져오기 <br /> 2. post -> 등록하기 <br/> 3. put -> 수정하기 <br/> 4. delect -> 삭제하기</b></i></small>
```js
GET: 데이터 조회
POST: 데이터 등록
PUT: 데이터 수정
DELETE: 데이터 제거
참고로 이 메서드 외에도 PATCH, HEAD 와 같은 메서드들도 있습니다.
```
<small><i>GET /users, GET /users/1<br>
POST /articles<br>Delect /articles/1<br>
PUT /ceticles/1
</i></small>

## axios 사용 (엑시오스)
<small><i><b>axios를 사용해서 GET, PUT, POST, DELETE 등의 메서드로 API 요청을 할 수 있다.</b></i></small>

### https://jsonplaceholder.typicode.com/ 에 있는 api 를 사용하여 실습
```js
// api 를 요청할떄는 3가지를 관리하게되는데,
1. 요청의 결과
2. 로딩 상태
3. 에러
```






<small><i><b></b></i></small>
<small><i><b></b></i></small>
<small><i><b></b></i></small>