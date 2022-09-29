//  reducer 함수를 만들어보자.
//  reducer 함수를 만드는데 필요한 매개변수는 2가지
//  state와 action
let init={
    count:0,
};

//  state = init 초기값을 전달해준다.
function reducer(state = init , action){
    // console.log(action);
    switch (action.type){
        case "ADD":
            // 여기에 ADD type이 들어왔을때 동작할 기능
            console.log('플러스');
            // 리듀서가 저장소의 값을 변경해주는데 이 반환값을 받아서 바꿔주는것이기 때문
            // ...state 이렇게 해주는 이유는 객체에 여러 값이 있을 수 있는데 값을 그대로 유지하고 
            // count만 바꾸려하는 이유와 저장소가 변했다고 인지하는 경우가 새로운 주소 객체가 전달되었을때.
            return {...state, count: state.count+1};
            case "REMOVE":
            console.log('마이너스');
            return {...state, count: state.count-1};
            default:
                return state;
              
    }
}

export default reducer;