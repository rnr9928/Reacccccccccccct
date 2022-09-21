import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <img className="header_logo" src={ require('./img/logo.png') } />

        <div className='header_search'>
            <input className='header_serachInput' type="text"/>
            <img className="header_searchIcon" src={ require('./img/search.png') } />
        </div>


        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_option1'>ㅎㅇ요</span>
                <span className='header_option2'>로그인</span>
            </div>

            <div className='header_option'>
            <span className='header_option1'>돌아가기</span>
                <span className='header_option2'>주문내역</span>
            </div>

        </div>
    </div>
  )
}

export default Header