let init = {
    id : '',
    pw : '',
    isLogin : false
}

function reducer (state=init,action){
    const {type, payload} = action;
    switch (type) {
        case "LOGIN":
            console.log('로긘');
            return {...state,id : payload.id , pw : payload.pw, isLogin:true};
        case "LOGOUT":
            console.log('로그아웃');
            return { isLogin:false};
        default:
            return state;
            
    }
}

export default reducer;