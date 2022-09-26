import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import {Link} from "react-router-dom"
import img from '../assets/images/cart.jpg'
import '../styles/Cart.css'


const Cart = () => {
  return (
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
  )
}

export default Cart