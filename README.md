## 디지털시계

### 오류
1. body태그를 css파일에서 .body로 입력했더니 오류 발생. body로 수정하니 정상작동.

2. 전체화면을 까맣게 하기 위해 html 파일에서 viewport 적용.  
body태그에서 height: 100vh 설정.   
스크롤바가 사라지지 않는 문제가 생김.   
margin=0; 을 추가해주니 스크롤바가 사라짐. 이전에는 margin 높이때문에 스크롤바 아래까지 적용됨.

### 수정사항
1. box-sizing : 적용한 너비가 실제 시계의 너비로 정하기 위해 class가 'dayTime'인 요소에 border-box 추가.

2. const로 날짜 따로, 시간 따로 상수를 만들었으나 어차피 동일하게 date를 사용하고, 굳이 따로 만들지 않는게 간결하여 const now 로 통일.

3. 날짜와 시간을 2자리수로 하기 위해 삼항연산 사용. textContent에 바로 적용해도 되지만 변수를 이용해서 정리하는게 깔끔하여 수정.

4. 시계가 1초마다 반복실행되기 위해 setInterval 사용.  onload 이벤트는 불필요하여 삭제.

### 결과
![](https://velog.velcdn.com/images/miracle-21/post/a8ab5b6b-38b0-4556-af05-af6d3ea24260/image.gif)


### 참조
[인프런 - 입문자를 위한 자바스크립트 기초 강의](https://www.inflearn.com/course/%EC%9E%85%EB%AC%B8%EC%9E%90-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B8%B0%EC%B4%88%EA%B0%95%EC%9D%98)
