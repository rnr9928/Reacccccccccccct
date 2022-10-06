import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import {weather,logins} from './middleware';
// import axios from 'axios';
import { useEffect,useState, } from 'react';

// Get 요청 방식
// axios({ url: ''});

// Post 요청 방식
// axios({
//   // method 기본이 GET
//   method : 'post',
//   url : '',
//   data: {
//     // 넘겨줄 값을 넣어주면 된다.
//   }
// })

function App() {
  const dispatch = useDispatch();
  // async function getWeather(){
  //   const data = await axios({url:'https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=a978462333e71671c23ca3f82c2d6085'})
  // console.log(data);
  // }
  // getWeather();
  const [name, setName] = useState('');
  const [id,setId] = useState('');
  const [pw,setPw] = useState('');
  const getWeather = (name) =>{
    dispatch(weather.getWeather(name));

  }
const weatherData =useSelector(state=>state.weather.weatherData);
const isLogin = useSelector(state => state.login.isLogin)
const userName = useSelector(state => state.login.id)
  useEffect(()=>{
console.log(weatherData);
  },[weatherData])

  const login = () =>{
    dispatch(logins.login(id,pw))
  }

  const logOut = () =>{
    dispatch(logins.loginOut())
  }

  return (
    <div className="App">
      <label>도시 이름</label>
      <input onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={()=>{getWeather(name)}}>날씨 검색</button>
      <div>지금 {weatherData && weatherData.data?.name} 날씨는 : {weatherData && weatherData.data?.weather[0]?.main}</div><br/>
    <label>아이디</label> <br/>
    <input onChange={(e) => {setId(e.target.value)}}/><br/>
    <label>비밀번호</label><br/>
    <input onChange={(e)=>{setPw(e.target.value)}}/> <br/>
    <button onClick={login}>로그인</button>
    <div>로긘?</div>{isLogin ? <div>{userName} 유저로긘됨<button onClick={logOut}>로그아웃</button> </div> :<div>로긘안됨</div>}
    </div>
  );
}

export default App;
