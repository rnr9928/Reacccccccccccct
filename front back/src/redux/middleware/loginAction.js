import axios from 'axios';
// import { user } from '../../../../back/public';

function login(id,pw){
    return async(dispatch,getState)=>{

        const user = await axios({
            method : 'post',
            url:'http://localhost:8000/login',
            data  : { 
                id,pw
            }
        })
        console.log(user);
        if(user.data){
            dispatch({type: "LOGIN",payload:{id,pw}})
        }else{
            alert("회원가입해야함")
        }
    }
}

function logOut(){
    console.log('logOut')
    return (dispatch,getState) =>{
        if(getState().loginReducer.isLogin){
            dispatch({type:"LOGOUT"})
        }
    }
}

function signUp(id,pw,setWrap){
    return async(dispatch,getState)=>{

        const user = await axios({
            method : 'post',
            url:'http://localhost:8000/signUp',
            data  : { 
                id,pw
            }
        })
        console.log(user);
        alert(user.data);
        if(user.data === "가입완료"){
                setWrap();
        }
    }

}

export const loginAction = {login, signUp,logOut}