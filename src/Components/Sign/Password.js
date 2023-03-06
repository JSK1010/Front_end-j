import React, { useEffect, useState } from 'react'
import './Register.Styles.scss'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Password = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, SetError] = useState('');
  function handleChange(event) {
    setemail(event.target.value);
  }

  function handleChangeP(event) {
    setPassword(event.target.value);
  }

  const focus = e => {
    SetError('');
  }

  async function handleClick(event) {
    event.preventDefault();
    const response = await fetch(process.env.REACT_APP_hosting + "/forgotPasswordEmail", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email
      }),
    })

    const data = await response.json();
    if (data.status === 'ok') {
    //  console.log(data);
      navigate('/newPassword');
    }
    else {
      if(data.status){
      SetError(data.status);
    }
  }

  }





  return (
    <div className='publication'>
      <div className='content resp_reg'>
      <div class='heading'>IEEE 2nd International Conference on <span><img className="vitecon"src='vitecon.png'></img></span></div>
    
        <form>
          <h3 className='sign'>Change Password</h3>
          <div className="email">
            <label>Email address</label>

            <input
              onChange={handleChange}
              type="email"
              name='email'
              onFocus={focus}
              className="form-control emailinp"
              placeholder="Enter email"
            ></input>
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
export default Password