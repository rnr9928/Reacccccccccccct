import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/logo.png'

import {Container,Row} from "reactstrap"

const nav_link =[
  {
    path:'login',
    display: 'Home'
  },
  {
    path:'shop',
    display: 'Shop'
  },
  {
    path:'cart',
    display: 'Cart'
  },
  {
    path:'home',
    display: 'Login'
  },
  {
    path:'sign',
    display: 'Sign'
  },
]


const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className='nav_wrapper'>
            <div className='logo'>
            <img src={logo} alt='logo' />
            </div>
            </div>
           
          <div className='navigation'>
            <ul className='menu'>
              {
                nav_link.map((item,index) =>(
                  <li className='nav_item' key={index}>
                    <NavLink to={item.path} className={(navClass)=> 
                    navClass.isActive ? 'nav_active' : ''}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
            </div>
            
        </Row>
      </Container>
      </header>
  )
}

export default Header