function login(id,pw){
    return (dispatch,getState) =>{
        dispatch({type: 'LOGIN',payload : {id,pw}})
    }
}
function loginOut(){
    return (dispatch,getState) =>{
        dispatch({type: 'LOGINOUT',payload : {id:'',pw:''}})
    }
}

export const logins ={login,loginOut}