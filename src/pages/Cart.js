import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import {Link} from "react-router-dom"
import img from '../assets/images/cart.jpg'


const Cart = () => {
  return (
    <Container>
    <Row>
      <Col lg='6' md='6'>
        <div className='content'>
          <button className='buy'><Link to='/shop'>SHOP GOGO</Link></button>
        </div>
        <div className='cart'>
          <img  src={img} alt='cart' />
        </div>
      </Col>
    </Row>
   </Container>
  )
}

export default Cart