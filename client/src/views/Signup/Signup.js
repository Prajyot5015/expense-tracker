import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

function Signup() {

    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        dob: ''
    })

    const signup = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            dob: user.dob
        })

        if (response.data.success) {
            toast.success(response.data.message)

            setUser({
                fullName: '',
                email: '',
                password: '',
                dob: ''
            })
        }
        else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className='signup-container'>
            <h2>User Registration</h2>

            <form >
                <input
                    type="text"
                    placeholder="Fullname"
                    value={user.fullName}
                    onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />

                <input
                    type="date"
                    placeholder="Date of Birth"
                    value={user.dob}
                    onChange={(e) => setUser({ ...user, dob: e.target.value })}
                />

                <button
                    type='button'
                    onClick={signup}
                    className='link-btn'
                >
                    Register
                </button>
            </form>

            <Link to='/login'>Already have an account? Login</Link>

            <Toaster />
        </div>
    )
}

export default Signup