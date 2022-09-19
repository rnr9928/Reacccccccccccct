
import './App.css';
import {img01,img02,img03} from './img';
import Block from './Block';
import { useState } from 'react';
// 가바보
//  플레이어 영역 하나 컴퓨터 영역 
function App() {

  const select={
    sci:{
      name:'가위',
      img: img01
    },
    roc:{
      name:'바위',
      img: img02
    },
    pap:{
      name:'보',
      img: img03
    }
  }

// let a= ['sic','roc','pap']

  const [userSelect, setUserSelect] = useState(null);
  //  컴퓨터 선택 값을 담을 useState
  const [comSelect,setComSelect] = useState(null);

  const [result,setResult] = useState('');
// Math.random() 랜덤값을 받아올것이고
//  받아온 값으로 위에 만들어준 객체에서 값을 가져와야하는데
// let arr = Object.keys(select) 함수로 반환해주면
//  arr 변수 안에 키값만 뽑아서 배열로 받아준다

  function userClick(temp){
    setUserSelect(select[temp]);
    let arr = Object.keys(select);
    // console.log(arr);
    let comRandom = Math.floor(Math.random()*3);
    // console.log(arr[comRandom])
    setComSelect(select[arr[comRandom]])
    // 결과를 가지고 승패를 보여준다
    let player = select[temp];
    let computer= select[arr[comRandom]];
    if(player.name == computer.name)
    {
      setResult('무승부');
    }else if(player.name == "가위")
    {
      let temp = computer.name == "보" ? "이겼다" : "졌다"
      setResult(temp);
    }
    else if(player.name == "바위")
    {
      let temp = computer.name == "가위" ? "이겼다" : "졌다"
      setResult(temp);
    }
    else if (player.name == '보')
    {
      let temp = computer.name == "바위" ? "이겼다" : "졌다"
      setResult(temp);
    }
  }
  // 1. 우리가 만들어놓은 객체의 값이 필요하기 때문에 userClick 함수를 만들었고
  // 그 값을 저장해주는 userSelect변수를 useState함수를 통해서 만들어줬고
  // 2. 버튼을 클릭했을때 그 함수가 실행이 되고 state값이 변하기때문에 다시 
  // 리렌더링 된다. 부모가 리렌더링 됬으니까 자식 컴포넌트도 리렌더링 된다.
  //  Block에 우리는 userClick를 실행하고 setUserSelect함수로 변경한
  // userSelect 값을 props로 넘겨 줬다
  //  Block에서는 props로 넘겨받은 값을 사용해서 img의 경로를 받아서 이미지를 보여줬다
  //  부모가 리렌더링 됐기때문에 자식도 변한 값이 리렌더링 됨
  return (
     <div>
    <div className="App">
      <Block data={userSelect} name="user" test={result}/>
      <Block data={comSelect} name="com"/>
  {/* //  <Block img={img01}/>
  //  <Block img={img02}/>
  //  <Block img={img03}/> */}
   </div>
   <div>
    <button onClick={()=>{userClick('sci')}}>가위</button>
    <button onClick={()=>{userClick('roc')}}>바위</button>
    <button onClick={()=>{userClick('pap')}}>보</button>
   </div>
    </div>
  );
}

export default App;
