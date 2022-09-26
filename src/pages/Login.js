import React from 'react'

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
          <p className='subtitle'>-----------------------------------------------------</p>
          <h2> 나만의 상점 OPEN</h2>
          <h2>지금 100% 세일!!</h2>
          <p>-----------------------------------------------------</p>
         
        </div>
          <div className="container">
    <div className='card'>
      <div className='imgBx'>
        
        <img src='https://img.icons8.com/ios-glyphs/480/league-of-legends.png'></img>
       
      <button className='buy'>SHOP GOGO</button> 
      
      </div>
       <Link to='/shop'>
      <div className='contentBx'>
        <h2>Legue of Legend</h2>
      </div>
       </Link>
     
    </div>
    </div>
      </Col>
    </Row>
   </Container>
  </section>
  )
}

export default Home