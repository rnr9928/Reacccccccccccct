import React , {useState} from 'react'
// import Detail from '../com/Detail'
import { Container,Row, Col ,Form, FormGroup } from 'reactstrap'
import {Link} from "react-router-dom"
import '../styles/Login.css'

const Sign = () => {

  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [username,setUsername] = useState('');

  return (
  //  <Detail title='login'>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='text-center'>
            <h3 className='bold'>Sign</h3>
            <Form className='form'>
              <FormGroup className='group'>
                  <input type='text' placeholder='이름' value={username} onChange={e=>setUsername(e.target.value)} />
              </FormGroup>
              <FormGroup className='group'>
                  <input type='password' placeholder='비밀번호' value={password} onChange={e=>setPassword(e.target.value)}/>
              </FormGroup>
              <FormGroup className='group'>
                  <input type='email' placeholder='이메일'value={email} onChange={e=>setEmail(e.target.value)} />
              </FormGroup>

              <button type='submit' className='a_btn'>회원가입하기</button>
              <p>아이디가 있나요?{""}
              <Link to='/login'>로그인 하기</Link></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  //  </Detail>
  )
}

export default Sign