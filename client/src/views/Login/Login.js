import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginNow = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      email: email,
      password: password
    })


    if (response.data.success) {
      toast.success(response.data.message)

      localStorage.setItem('currentUser', JSON.stringify(response.data.data))

      toast.loading('Redirecting to dashboard...')

      setTimeout(() => {
        window.location.href = '/'
      }, 3000)
    } else {
      toast.error(response.data.message)
    }
  }

  return (
    <div className="login-container">
      <h2 >User Login</h2>

      <form >
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type='button'
          onClick={loginNow}
        >
          Login
        </button>
      </form>

      <Link to='/signup' >Don't have an account? Signup</Link>

      <Toaster />
    </div>
  )
}

export default Login