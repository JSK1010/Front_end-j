import React,{useEffect,useState} from 'react'
import './Register.Styles.scss'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
 
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const[error,setError]=useState('');
function handleChange(event){
  setUsername(event.target.value);
}


const focus=e=>
{
  setError('');
}

function handleChangeP(event){
  setPassword(event.target.value);
}


async function handleClick(event){
  event.preventDefault();
    const response = await fetch(process.env.REACT_APP_hosting+"/done_signin", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,password
      }),
    })

    const data = await response.json();
    

    if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			navigate('/papers')
		}
    else if(data.message == 'User not verified') {
      setError("Email not verified");
    } 
    else {
			setError("Invalid Credentials");
		}


}
  return (
    <div className='publication'>
        <div className='content resp_reg'>
          
        <form>
        <h3 className='sign'>Log in</h3>
        <div className="email">
          <label>Email address</label>
          <input
          onChange={handleChange}
            type="email"
            name='username'
            onFocus={focus}
            className="form-control emailinp"
            placeholder="Enter email"
          ></input>
        </div>
        <div className="email">
          <label>Password</label>
          <input
          onChange={handleChangeP}
            type="password"
            name='password'
            onFocus={focus}
            className="form-control emailinp"
            placeholder="Enter password"
          />
        </div>
        <div className='d-grid sub'>
        <p className="error">{error}</p>
       </div>
        <div className="d-grid sub">
          <button type="submit" onClick={handleClick} className="btn btn-primary">
            Log in
          </button>
        </div>
        <div className="d-grid right">
<a href="/#/Password">Forgot password</a>
        </div>

      </form>

      <p className='footer'>New User<Link className='link' to='/register'>Register</Link></p>





          </div>

          </div>

  )
  }
export default Login;