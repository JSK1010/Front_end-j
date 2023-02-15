import React,{useEffect,useState} from 'react'
import './Register.Styles.scss'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
 
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const [error,SetError]=useState('');
function handleChange(event){
  setUsername(event.target.value);
}

function handleChangeP(event){
  setPassword(event.target.value);
}

const focus=e=>
{
  SetError('');
}

async function handleClick(event){
  event.preventDefault();
  const response = await fetch("https://vit-vitecon-back.onrender.com/done_signup", {
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
    if (data.status === 'ok') {
      console.log(data);
      navigate('/login');
		}
    else{
      SetError(data.status);
    }


}





  return (
    <div className='publication'>
        <div className='content resp_reg'>
          
        <form>
        <h3 className='sign'>Create Account</h3>
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
            className="form-control emailinp"
            placeholder="Enter password"
            onFocus={focus}
          />
        </div>
        <div className='d-grid sub'>
        <p className="error">{error}</p>
       </div>
       
        <div className="d-grid sub">
          <button type="submit" onClick={handleClick} className="btn btn-primary">
            Signup
          </button>
        </div>

      </form>
      <p className='footer'>Already an user <Link className='link' to='/login'>Log in</Link></p>

           




          </div>

          </div>

  )
  }
export default Register