import React,{useEffect,useState} from 'react'
import './Register.Styles.scss'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
 
const [otp,setOTP]=useState("");
const [password,setPassword]=useState("");
const[error,setError]=useState('');
function handleChange(event){
  setOTP(event.target.value);
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
  const url="https://vitecon.vit.ac.in/api/newPassword"
  await fetch(url, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        otp,password
      }),
    }).then(async res => {
      try{
      var response=await res.json()
     // console.log(response.status) 
      setError(response.status)

      
      if(response.status=='New password is set!'){
        alert(response.status)
        navigate('/login')
      }
      }
      catch{
        setError('Something went wrong')
       
      }
    
    
    })
    
}
    

  



  return (
    <div className='publication'>
        <div className='content resp_reg'>
        <div class='heading'>IEEE 2nd International Conference on <span><img className="vitecon"src='vitecon.png'></img></span></div>
    
        <form>
        <h3 className='sign'>Change Password</h3>
        <div className="email">
          <label>OTP</label>
          <input
          onChange={handleChange}
            type="email"
            name='otp'
            onFocus={focus}
            className="form-control emailinp"
            placeholder=""
          ></input>
        </div>
        <div className="email">
          <label>New Password</label>
          <input
          onChange={handleChangeP}
            type="password"
            name='password'
            onFocus={focus}
            className="form-control emailinp"
            placeholder=""
          />
        </div>
        <div className='d-grid sub'>
        <p className="error">{error}</p>
       </div>
        <div className="d-grid sub">
          <button type="submit" onClick={handleClick} className="btn btn-primary">
            Submit
          </button>
        </div>
        

      </form>

   




          </div>

          </div>

  )
  }
export default Login;
