import React, { useEffect, useRef, useState } from "react";
// import Detail from '../com/Detail'
import Home from "./Home";
import '../styles/Login.css'
import {Link} from "react-router-dom"

function Sign(){
  const name=useRef()
  const email=useRef()
  const password=useRef()
  const [showHome,setShowHome]=useState(false)
  const [show,setShow]=useState(false)
   const localSignUp=localStorage.getItem("signUp")
   const localEmail=localStorage.getItem("email")
   const localPassword=localStorage.getItem("password")
   const localName=localStorage.getItem("name")


  useEffect(()=>{
   if(localSignUp){
       setShowHome(true)
   }
   if(localEmail){
       setShow(true)
   }
  })
  const handleClick=()=>{
      if(name.current.value&&email.current.value&&password.current.value)
     {
       localStorage.setItem("name",name.current.value)
       localStorage.setItem("email",email.current.value)
       localStorage.setItem("password",password.current.value)
       localStorage.setItem("signUp",email.current.value)
       alert('ㅎㅇ')
       
     }
  }

  const handleSignIn=()=>{
   if(email.current.value==localEmail&&password.current.value==localPassword){
       localStorage.setItem("signUp",email.current.value)
       
   }else{
       alert("제대로 입력하세요")
   }
  }
   return(
       <div>
           {showHome?<Home/>:
           (show?
               <div className="ccco">
                       
                       <div className="input_space">
                           <input placeholder="ID" type='text' ref={email} />
                       </div>
                       <div className="input_space">
                           <input placeholder="Password" type='password' ref={password} />
                       </div>
                       <Link to='/login'>
                       <button onClick={handleSignIn}>Sign In</button>
                       </Link>
               </div>
               :
               <div className="ccco">
                       <div className="input_space">
                           <input placeholder="Name" type='text' ref={name} />
                       </div>
                       <div className="input_space">
                           <input placeholder="ID" type='text' ref={email} />
                       </div>
                       <div className="input_space">
                           <input placeholder="Password" type='password' ref={password} />
                       </div>
                      <Link to='/login'>
                       <button onClick={handleClick}>Sign Up</button>
                       </Link>
               </div>)
           }
       </div>
   );
}

export default Sign