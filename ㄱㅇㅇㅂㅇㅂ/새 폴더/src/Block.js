import React from 'react'

const Block = (props) => {
let {data , test , name} = props;
let temp ="";
if(name == "유저"){
    temp = test;
}else{
temp = test == '무승부' ? "무승부" : test == '이겼다' ? '졌다' : "이겼다";
}
  return (
    <div className='block'>
        {/* 선택한 이미지를 props값으로 받아온다 부모 컴포넌트에서 */}
        {/* 값이 있으면 그려라라는 구문 && */}
        <div>{name}</div>
        <img src={data && data.img}/> 
        <div>
            {test}
        </div>
    </div>
  )
}

export default Block