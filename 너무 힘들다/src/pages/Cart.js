import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import {Link} from "react-router-dom"
import img from '../assets/images/cart.jpg'
import '../styles/Cart.css'

const logout=()=>{
	localStorage.removeItem("signUp")
	
  }
  const deleteAccount=()=>{ 
	localStorage.clear()
   
  }
const Cart = () => {
  return (
    <>
    <div className='arar'>
    
    <p>환영해요 {localStorage.getItem('name')}님</p>
    <Link to='/home'>
    <button onClick={logout} className="logout">로그아웃</button>
    </Link>
    <Link to='/home'>
    <button onClick={deleteAccount} className="delete">삭제하기</button>
    </Link>
</div>
    <Container>
    <Row>
      <Col lg='6' md='6'>
        <div className='cart'>
          <Link to='/shop'>
          <img  src={img} alt='cart' />
          </Link>
        </div>
      </Col>
    </Row>
   </Container>
   </>
  )
}


export default Cart