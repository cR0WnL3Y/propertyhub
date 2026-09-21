import React from 'react'

const Login = () => {
  return (
    <div>
        <h1 className="login-header">Login...</h1>
        <p className="go-n-create-account">Don't have an account? <a href="/" id="sign-up-link"> Sign Up</a></p>
      <form className="form">
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
            placeholder="Password"
        />
        </div>
        <button id="login-button" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
