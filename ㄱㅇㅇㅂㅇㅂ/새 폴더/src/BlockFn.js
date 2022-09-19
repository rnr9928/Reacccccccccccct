import React, { useEffect, useState } from 'react'

const BlockFn = () => {
    const [num,setNum] =  useState(0);
    const [num2,setNum2] =  useState(0);

    useEffect(()=>{
        console.log('componentDidMount');
    },[]);

// componentDidUpdate 는 어케 만드냐
useEffect(()=>{
    console.log(num);
    console.log('componentDidUpdate');
},[num,num2]);


    const add= () =>{
        setNum(num+1);
        // console.log(num);
    }
  return (
    <div>
        <button onClick={add}>ADD</button>
        </div>
  )
}

export default BlockFn