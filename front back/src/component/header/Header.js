import React,{useRef, useState} from 'react'
import {Button,HeaderWrap , HeaderContent, ContentBtn,LoginWrap,LoginInput} from './styledComponent'
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../redux/middleware/loginAction';
import { useDispatch, useSelector } from 'react-redux';

const Header = ({isLogin}) => {
    const idInput = useRef();
    const pwInput = useRef();
    const dispatch = useDispatch();
    
    const [wrapState,setWrapState] = useState(true);
    const userName = useSelector(state =>state.loginReducer.id);

    // useRef 함수는 current 속성을 가지고 있는 객체를 반환한다
    // 객체에 원하는 키값에 값을 넣어줄 수 도 있고
    //  이 값이 바뀌어도 랜더링은 되지않지만 값은 계속 남아있다.
    // props ref로 useRef() 반환한 객체를 넣어준다.

    const login = () =>{
        dispatch(loginAction.login(idInput.value,pwInput.value));
        // console.log(idInput,pwInput);
        // // document.querySelector('태그').value='';
        // idInput.current.value='';
        // pwInput.current.value='';
    }
    const logOut = () =>{
        console.log('logOut')
        dispatch(loginAction.logOut());
       
    }
    const signUp = () =>{
        dispatch(loginAction.signUp(idInput.value,pwInput.value));
       
    }

    const nav = useNavigate();

    const setWrap = () =>{
        setWrapState(!wrapState)
        idInput.value = '';
        pwInput.value = '';
        idInput.current.value='';
        pwInput.current.value='';

    } 
  return (
    <HeaderWrap>
<HeaderContent>
    <ContentBtn onClick={()=>{nav('/')}}>MAIN</ContentBtn>
    <ContentBtn onClick={()=>{nav('/shop')}}>SHOP</ContentBtn>
</HeaderContent>
<LoginWrap>
    {isLogin ? 
    <>
    <div>{userName}로긘됨</div>
    <Button onClick={logOut}>로그아웃</Button>
    </>
:
<>
{wrapState ?
     <>
     <label>아이디: </label>
    <LoginInput ref={idInput} onChange={(e)=>{idInput.value=e.target.value}}/>
    <label>비밀번호: </label>
    <LoginInput ref={pwInput} onChange={(e)=>{pwInput.value=e.target.value}}/>
    <Button onClick={login}>로긘</Button>
    <Button onClick={setWrap}>회원가입 하러가기기</Button>
    </>
     :
     <>
<label>아이디: </label>
    <LoginInput ref={idInput} onChange={(e)=>{idInput.value=e.target.value}}/>
    <label>비밀번호: </label>
    <LoginInput ref={pwInput} onChange={(e)=>{pwInput.value=e.target.value}}/>
    <Button onClick={signUp}>회원가입</Button>
    <Button onClick={setWrap}>로긘 하러가기기</Button>

     </>
     }
</>

    }
</LoginWrap>
    </HeaderWrap>
  )
}

export default Header;