import React , {useState} from 'react'
// import Detail from '../com/Detail'
import { Container,Row, Col ,Form, FormGroup } from 'reactstrap'
import {Link} from "react-router-dom"
import '../styles/Login.css'

const Login = () => {

  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')


  return (
  //  <Detail title='login'>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='text-center'>
            <h3 className='bold'>Login</h3>
            <Form className='form'>
              <FormGroup className='group'>
                  <input type='email' placeholder='이메일' value={email} onChange={e=>setEmail(e.target.value)} />
              </FormGroup>
              <FormGroup className='group'>
                  <input type='password' placeholder='비밀번호' value={password} onChange={e=>setPassword(e.target.value)}/>
              </FormGroup>
<Link to='/login'>
              <button type='submit' className='a_btn'>Login</button></Link>
              <p>아이디가 없나요?{""}<br></br>
              <Link to='/sign'>회원가입</Link></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  //  </Detail>
  )
}

export default Login