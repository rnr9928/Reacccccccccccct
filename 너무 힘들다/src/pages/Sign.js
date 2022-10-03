import React  from 'react'
// import Detail from '../com/Detail'

import {Link} from "react-router-dom"
import '../styles/Login.css'

function Login(){
  const logout=()=>{
      localStorage.removeItem("signUp")
      
  }
  const deleteAccount=()=>{ 
      localStorage.clear()
    
  }
  
  return(
      <div className='arar'>
        
          <p>환영해요 {localStorage.getItem('name')}님</p>
          <Link to='/home'>
          <button onClick={logout} className="logout">로그아웃</button>
          </Link>
          <button onClick={deleteAccount} className="delete">삭제하기</button>
      </div>
  );
}

export default Login