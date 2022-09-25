import React from 'react'
import img from '../assets/images/home.jpg'
import { Container,Row,Col } from 'reactstrap'
import '../styles/Home.css'
import {Link} from "react-router-dom"


const Home = () => {
  return (
	<section className='section'>
   <Container>
    <Row>
      <Col lg='6' md='6'>
        <div className='content'>
          <p className='subtitle'>---------------------------------------------------------------------</p>
          <h2> 나만의 상점 OPEN</h2>
          <h2>지금 80% 세일!!</h2>
          <p>---------------------------------------------------------------------
          
          </p>
          <button className='buy'><Link to='/shop'>SHOP GOGO</Link></button>
        </div>
        <div className='lol'>
          <img  src={img} alt='lol' />
        </div>
      </Col>
    </Row>
   </Container>
  </section>
  )
}

export default Home