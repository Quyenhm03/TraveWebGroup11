import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import registerImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'
import Google from '../assets/images/google.png'
import { GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebaseConfig'

const Register = () => {
   const [credentials, setCredentials] = useState({
      userName: undefined,
      email: undefined,
      password: undefined
   })

   const {dispatch} = useContext(AuthContext)
   const navigate = useNavigate()

   const handleChange = e => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
   }

   const handleClick = async e => {
      e.preventDefault()

      try {
         const res = await fetch(`${BASE_URL}/auth/register`, {
            method:'post',
            headers: {
               'content-type':'application/json'
            },
            body: JSON.stringify(credentials)
         })
         const result = await res.json()

         if(!res.ok) alert(result.message)

         dispatch({type:'REGISTER_SUCCESS'})
         navigate('/login')
      } catch(err) {
         alert(err.message)
      }
   }

   const handleGoogleClick = async() =>{
      dispatch({type:'LOGIN_START'})

      try{
         const provider = new GoogleAuthProvider()
         const auth = getAuth(app)

         const result = await signInWithPopup(auth, provider)
         const res = await fetch(`${BASE_URL}/auth/google`, {
            method:'post',
            headers: {
               'content-type':'application/json'
            },
            credentials:'include',
            body: JSON.stringify({
               name: result.user.displayName,
               email: result.user.email,
               photo: result.user.photoURL
            })
         })

         const dt = await res.json()
         if(!res.ok) alert(dt.message)
         console.log(dt.data)

         dispatch({type:"LOGIN_SUCCESS", payload:dt.data})
         navigate('/')
      } catch (err) {
         dispatch({type:"LOGIN_FAILURE", payload:err.message})
      }
   }

   return (
      <section>
         <Container>
            <Row>
               <Col lg='8' className='m-auto'>
                  <div className="login__container d-flex justify-content-between">
                     <div className="login__img">
                        <img src={registerImg} alt="" />
                     </div>

                     <div className="login__form">
                        <div className="user">
                           <img src={userIcon} alt="" />
                        </div>
                        <h2>Register</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input type="text" placeholder='Username' id='username' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
                           </FormGroup>
                           <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
                        </Form>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                        <Button className='btn secondary__btn auth__btn' type='submit' onClick={handleGoogleClick}>
                           <div className='auth__btn__content'>
                              <img src={Google} alt="" />
                              <span>Continue with google</span>
                           </div>
                        </Button>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default Register
