import axios from 'axios';
// axios
// 프레임워크에선 ajax 구현할때 axios쓰는편
// 속성은 url필수고 나머지는 전달을 안해도 상관없다
// method는 지정안하면 기본이 디폴트가 Get방식

// axios 설치
// npm i axios
// Get 요청방식

function getWeather(name){
    // thunk가 해주는 일이 Action Createors라는 함수를 만들어주는 것
    // Action Createors 함수는 함수를 반환한다.
    // thunk는 dispatch를 딜레이 시켜주는 역활
    // action 함수는 함수를 반환한다
    // dispatch랑 getState 둘다 함수다
    return async(dispatch,getState) =>{
        const data = await axios({url :  `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a978462333e71671c23ca3f82c2d6085`})
        // console.log(data);
        // console.log(getState());
        dispatch({type:'GET_WEATHER_DATA',payload: data})
        // console.log(getState());
        // getState() 함수는 store 저장소에 있는 state 객체를 반환해준다.
    }

}

export const weather = {getWeather}