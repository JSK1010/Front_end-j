import './Admin.Styles.scss'
import { Link, Navigate, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import jwt from 'jwt-decode'
import FileBase64 from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
 
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const[error,setError]=useState('');
const [valid,setValid]=useState('');
const [user, setUser] = useState('');
const play="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"


function review1(revert){
  navigate('/'+revert);
}


async function populateQuote() {
  const req = await fetch('http://localhost:5000/validation_papers', {
    headers: {
      'x-access-token': localStorage.getItem('token'),
    },
  })

  const data = await req.json()
  if (data.status === 'ok') {
    setValid(true);
    setUser(data.who.email);
  
  } else {
    setValid(false);
    navigate('/login');
  }
  console.log({'user_validation':valid});

}



useEffect(() => {
  const token = localStorage.getItem('token')
  if (token) {
    
    const user = jwt(token)
    console.log(user['username'])
    if (!user) {
      console.log("invalid")
      localStorage.removeItem('token')
      navigate("/updatestatuslogin")
    } else {
      if(user['username']=='admin@gmail.com'){
      console.log("token passed")
      populateQuote();
      }
      else{
        console.log("invalid")
      localStorage.removeItem('token')
      navigate("/updatestatuslogin")
      }
    }
  }
  else{
    navigate("/updatestatuslogin")
  }
}, [])




async function handleClick(event){
  event.preventDefault();
  const response = await fetch("http://localhost:5000/reviewer", {
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
			navigate('/reviewer');
		} else {
			setError("Invalid Credentials");
		}


}
  return (
    <div className='publication'>
        <div className='content'>
            <h1 className='heading-secondary'>Choose Your Role</h1>
            <div id="containeradmin">
            <div class="button" onClick={() => review1('Ses')} id="button-7">
    <div id="dub-arrow"><img src={play} alt="" /></div>
    <a className='alink' href="#">Smart Electronic Systems</a>
  </div>

  <div class="button" onClick={() => review1('Wc')} id="button-7">
    <div id="dub-arrow"><img src={play} alt="" /></div>
    <a className='alink' href="#">Wireless Communication</a>
  </div>
  <div class="button" onClick={() => review1('Ngn')} id="button-7">
    <div id="dub-arrow"><img src={play} alt="" /></div>
    <a className='alink' href="#">Next Generation Wireless Networks</a>
  </div>
  <div class="button" onClick={() => review1('Sarf')} id="button-7">
    <div id="dub-arrow"><img src={play} alt="" /></div>
    <a className='alink' href="#">Smart Antenna and RF Technologies for next generation Communication</a>
  </div>
  <div class="button" onClick={() => review1('Sip')} id="button-7">
    <div id="dub-arrow"><img src={play} alt="" /></div>
    <a className='alink' href="#">Signal and Image Processing</a>
  </div>
  <div class="button" onClick={() => review1('Aciss')} id="button-7">
    <div id="dub-arrow"><img src={play} alt="" /></div>
    <a className='alink' href="#">Advanced Computing and Information Systems Security</a>
  </div>
  <div class="button" onClick={() => review1('Wie')} id="button-7">
    <div id="dub-arrow"><img src={play} alt="" /></div>
    <a className='alink' href="#">Women in Engineering</a>
  </div>

  

  </div>
           
        </div>
      </div>
    

  )
  }
export default Login;