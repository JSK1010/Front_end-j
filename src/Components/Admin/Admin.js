import './Admin.Styles.scss'
import React, { useEffect, useState } from 'react'
import jwt from 'jwt-decode'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

const [valid,setValid]=useState('');
const play="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"


function review1(revert){
  navigate('/'+revert);
}


async function populateQuote() {
  const req = await fetch(process.env.REACT_APP_hosting+'/validation_papers', {
    headers: {
      'x-access-token': localStorage.getItem('token'),
    },
  })

  const data = await req.json()
  if (data.status === 'ok') {
    setValid(true);
  
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
      if(user['username']==='admin@gmail.com'){
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




  return (
    <div className='publication'>
        <div className='content'>
            <h1 className='heading-secondary'>Choose Your Domain</h1>
            <div id="containeradmin">
            <div class="button" onClick={() => review1('Ses')} id="button-7">
    <div id="dub-arrow"><img src={play} alt="" /></div>
    <a className='alink' href="#">Smart Electronic Systems</a>
  </div>

  <div class="button" onClick={() => review1('Ngwct')} id="button-7">
    <div id="dub-arrow"><img src={play} alt="" /></div>
    <a className='alink' href="#">Next Generation Wireless Communication Techniques</a>
  </div>
  <div class="button" onClick={() => review1('Awn')} id="button-7">
    <div id="dub-arrow"><img src={play} alt="" /></div>
    <a className='alink' href="#">Advanced Wireless Network</a>
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