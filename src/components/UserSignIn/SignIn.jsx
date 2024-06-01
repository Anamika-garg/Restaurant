import React, { useRef , useState } from 'react'
import './SignIn.css'

// import Template from './Template'
const SignIn = () => {

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div id="signIn">
      <div className="signInContainer">
        <div className="outer-box">
          <div className="heading">Sign In</div>
          <div className='inputWrappingDiv'>
            <label htmlFor="Username"> Username : </label>
            <input type="text" placeholder='Username' className='input' />
          </div>
          <div className='inputWrappingDiv'>
            <label htmlFor="Password"> Password : </label>
            <input placeholder='Password' className='input'
              type={
                showPassword ? "text" : "password"
              }
              value={password}

              onChange={(e) =>
                setPassword(e.target.value)
              } />
            <div className="showPass">
              <input type="checkbox" className='checkbox'
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    } />  Show Password
            </div>
          </div>
          <div className="submit-div">
            <button className='orderNow submitBtn'>Submit</button>
            <p>Don't Have an Account?<a href="#signUp" className='signuplink'>Sign Up here</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
