import './Status.Styles.scss'
import React, { useEffect, useState } from 'react'
import jwt from 'jwt-decode'

import { useNavigate } from 'react-router-dom';


const Publication = () => {
  const navigate = useNavigate();

  const [valid,setValid]=useState('');



const[decision,setDecision]=useState(false);
const[warning,setWarning]=useState('');
const[revision,setRevision]=useState('');
const[check,setCheck]=useState('');

async function getComments() {
  const req = await fetch('http://localhost:5000/getComments', {
    headers: {
      'x-access-token': localStorage.getItem('token'),
    },
  })

  const data = await req.json()
  if (data.status === 'ok') {
    if(data.warning==='R'){
      setWarning('Your paper has been rejected, please correct the form with new details');
    }
    else{setWarning(data.warning);}
    setRevision(data.revision);
    if(data.decision===true){
      setDecision("ACCEPTED")
    }
    else if(data.decision===false){
      setDecision("REJECTED")
    }
    else{
      setDecision("NOT UPDATED")
    }
  } else {
    console.log(data.status);
  }

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
      getComments();
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
        navigate("/login")
			} else {
        console.log("token passed")
				populateQuote()
			}
		}
    else{
      navigate("/login")
    }
	}, [])









  return (
   
   
    <div>
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
       


    
        <div className=''>

          <div className='row'>
            <div className='col-md-5'>  <h4>Paper Status:</h4></div>
            <h3 className='col-md-1'></h3>
            <div className='col-md-6'>  <h6>{decision}</h6></div>
          </div>

          <div className='row'>
            <div className='col-md-5'>  <h4>Revision type: </h4></div>
            <h3 className='col-md-1'></h3>
            <div className='col-md-6'>  <h6>{warning}</h6></div>
          </div>

          <div className='row'>
            <div className='col-md-5'>  <h4>Revision Feedback : </h4></div>
            <h3 className='col-md-1'></h3>
            <div className='col-md-6'>  <h6>{revision}</h6></div>
          </div> 

          
         
        </div>
       
    

   


      </div>

     
    </div>
    
    
    </div>
    
    
      )
}

export default Publication