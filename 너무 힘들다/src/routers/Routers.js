import {Routes , Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'
import Write from '../pages/Write'
import Login from '../pages/Login'
import Sign from '../pages/Sign'


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home' />}/>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='productDetail' element={<ProductDetail/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='write' element={<Write/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='sign' element={<Sign/>}/>
  </Routes>
    
  
}

export default Routers