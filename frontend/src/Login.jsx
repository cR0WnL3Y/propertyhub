import React from 'react'

const Login = ({ showRegister, setShowRegister}) => {
  return (
    <div className="login-container">
        <h1 className="login-header">Welcome back</h1>
        <p className="go-n-create-account">Don't have an account? <button onClick={() => setShowRegister(!showRegister)}>
        {showRegister ? 'Log in' : 'Create account'}
      </button></p>
      <form className="login-form">
        <div>
        <label htmlFor="email"></label>
        <input 
            id="email"
            type="text"
            required
            placeholder="Email"
        />
        </div>
        <div>
        <label htmlFor="password"></label>
        <input 
            id="password"
            type="password"
            required
            placeholder="Enter your password"
        />
        </div>
        <button id="login-button" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
