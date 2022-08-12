import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Login = () => {
  

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
     console.log(values)

    },
  });

  return (
    <>
      <Container>
        <div className="login-section">
          <Card className='login-section__content'>
            <div className="titles">
              <h2>User Login</h2>
              <p>Please enter your login info.</p>
            </div>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Control value={formik.values.name} onChange={formik.handleChange} name="name" type="text" placeholder="Your user name" />
              <Form.Control value={formik.values.name} onChange={formik.handleChange} name="password" type="password" placeholder="Your password" />
              
              <Button type='submit'>Login</Button>
            </Form>
            <p>
              Don't have an account? <NavLink to="/login" >Request now</NavLink>
            </p>
          </Card>
        </div>
      </Container>
    </>
  )
}

export default Login






















// import { useRef, useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// import { useDispatch } from 'react-redux'
// import { setCredentials } from '../auth/authSlice'
// import { useLoginMutation } from '../store/api/authApiSlice'

// const Login = () => {

//   const userRef = useRef()
//   const errRef = useRef()
//   const [user, setUser] = useState('')
//   const [pwd, setPwd] = useState('')
//   const [errMsg, setErrMsg] = useState('')
//   const navigate = useNavigate()

//   const [login, { isLoading }] = useLoginMutation()
//   const dispatch = useDispatch()

//   useEffect(() => {
//     userRef.current.focus()
//   }, [])

//   useEffect(() => {
//     setErrMsg('')
//   }, [user, pwd])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const userData = await login({ user, pwd }).unwrap()
//       console.log(userData)
//       dispatch(setCredentials({ ...userData, user }))
//       setUser('')
//       setPwd('')
//       navigate('/cart')
//     } catch (err) {
//       if (!err?.originalStatus) {
//         // isLoading: true until timeout occurs
//         setErrMsg('No Server Response');
//       } else if (err.originalStatus === 400) {
//         setErrMsg('Missing Username or Password');
//       } else if (err.originalStatus === 401) {
//         setErrMsg('Unauthorized');
//       } else {
//         setErrMsg('Login Failed');
//       }
//       errRef.current.focus();
//     }
//   }

//   const handleUserInput = (e) => setUser(e.target.value)
//   const handlePwdInput = (e) => setPwd(e.target.value)

//   return (
//     <>
//  <section className="login">
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

//             <h1>Employee Login</h1>

//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     ref={userRef}
//                     value={user}
//                     onChange={handleUserInput}
//                     autoComplete="off"
//                     required
//                 />

//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     onChange={handlePwdInput}
//                     value={pwd}
//                     required
//                 />
//                 <button>Sign In</button>
//             </form>
//         </section>
//     </>
//   )
// }

// export default Login


