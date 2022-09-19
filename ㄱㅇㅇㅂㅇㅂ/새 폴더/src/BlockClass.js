import React, { Component } from 'react'

// 생명주기 <=  작업을 하면서 원하는 분기가 필요한데 그 분기에 맞게 작업을 컨트롤 하려면
// 화면을 그려주는 시기와 state 값이 변했을때 같은 이런 작업들은 리엑트에서 지원해주는 함수들이 lifecycle 함수임
// 생긴건 함수형과 많이 다르지 않음
//  클래스로 선언 됬고 리액트에서 제공하는 Component라는 클래스를 상속 받아온다.

// 1. mounting : 그려주고 컴포넌트가 시작될때 처음 한번 실행
// 2. updating : state가 업데이트 되고 UI가 그려질때
// 3. unmounting : 컴포넌트가 화면에서 사라질 때 

// UI 세팅과정
// constructure -> render -> dom이 업데이트 되고 -> componentDidMount
// 이후 값이 변하면
// componentDidUpdate(state가 변하면 업데이틑 해주는 함수)
export default class BlockClass extends Component {
    // constructor lifecycle 함수중 하나고 
    // 생성자 컴포넌트가 생성되면 제일 첨으로 실행되는 함수
    constructor(props){
        // super() 자식 클래스가 생성될 때 부모 클래스의 생성자를 참조하는 방법
        //  react 클래스 컴포넌트의 부모 클래스는 react.Component가 된다 
        // super를 쓰는 이유 super를 사용하기 전에는 constructor안에서 this를 쓸 수 가 없다
        super(props)
        //  함수형에서 userState함수를 썻지만
        //  클래스 컴포넌트에선 state값을 객체로 사용
        //  이 state값이 변경되면 다시 리렌더링

        // 똑같다
        // let [num,setNum] = useState(0);
        // let [name,setNum] = useState(ㅎㅇㅀㅇㅎㅇㅀ);
        
        this.state={
            num:0,
            name:`ㅎㅇㅀㅇㅎㅇㅀ`

        }
        console.log('constructor');
    }
    //  
componentDidMount(){
    // 작업을 하면 여기서 주로 데이터 베이스 값을 가져온다.
    // componentDidMount 이놈이 UI를 그려준 다음에 실행되는 함수이기 때문
    // UI를 그리기전에 데이터를 가져와봤자 넣어줄수 가 없기  때문에
    // componentDidMount lifecycle 함수를 이용한다
    console.log('componentDidMount');
}
componentDidUpdate(){
    //  전에 말했던 함수형에서 useState() 함수 class 컴포넌트에서는 setState()이 함수
    //  state 값이 변하는 것은 비동기라고 했는데 그 값을 변한뒤의 값을 update에서 확인할 수 있다.
    console.log(this.state);
    console.log('componentDidUpdate');
}
add = () =>{
    //  class 컴포넌트에서 state 값을 변하게 하고 싶으면 setState() 함수를 이용해서 값을 수정
    //  setState 함수의 매개변수 안에 객체에서 바꾸고 싶은 키와 값을 넣어준다
    // 객체의 값을 추가해주면 여러 state 값을 같이 수정할 수 있다.
    this.setState({num:this.state.num + 1, name: "ㅎㅇㄹ"})
    // console.log(this.state);
}

  render() {
    // console.log('render');
    return (
      <div>
        {/* class 컴포넌트에선 this가 계속 붙는다  */}
        <button onClick={this.add}>👍</button>
        {/* props값을 사용해보자 부모 컴포넌트에서 받아서 */}
        <div>{this.props.test}</div>
      </div>
    )
  }
}