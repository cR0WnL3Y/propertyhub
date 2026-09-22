import React from 'react'

const Register = ({showRegister, setShowRegister}) => {
  return (
    <div className="create-account-container">
        <h1 className="login-header">Create an account</h1>
        <p className="login-to-account">Already have an account? <button onClick={() => setShowRegister(!showRegister)}>
        {showRegister ? 'Log in' : 'Create an account'}
      </button></p>
      <form className="register-form">
        <div className="first-n-last-name">
          <div>
            <label htmlFor="first-name"></label>
              <input 
                  id="first-name"
                  className="first-n-last-name"
                  type="text"
                  required
                  placeholder="First name"
              />
          </div>
            <div>
            <label htmlFor="last-name"></label>
              <input 
                  id="last-name"
                  className="first-n-last-name"
                  type="text"
                  required
                  placeholder="Last name"
              />
            </div>
          </div>
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
        <p id="terms-n-agreement"><input type="checkbox" /> I agree to the <a href="/">Terms & Conditions</a></p>
        <button id="register-button" type="submit">Create account</button>
      </form>
    </div>
  )
}

export default Register
