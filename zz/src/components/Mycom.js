import React from 'react'

// 컴포넌트로 작업하면 일반 태그처럼 우리가 원하는 내용을 태그화해서 사용할 수 있기 때문에
// 코드의 재활용성이 용이해진다.
// 유지보수 편함

// 리액트의 데이터 구조는 단방향 위에서 아래로 데이터를 전달해줄 수 있다.
// 여기서 받은 num 매개변수의 명칭은 props이다.
// 부모 컴포넌트가 자식 컴포넌트한테 데이터를 전달 해줄 수 있다.

// 중괄호 쓰면 => 자바스크립트 구문을 사용하겠다는 ..
// 태그에 class를 추가할땐 className 리액트 어트리뷰트로 추가 해줘야한다
const Mycom = (num) => {
const {name, age, Cname , color} = num;
  return (
    <div className={color + " com"}>
        {name} <br/>
       
    </div>
  )
}

// default 하나만 내보낼 때
export default Mycom

