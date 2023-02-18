import './Status.Styles.scss'
import React, { useEffect, useState } from 'react'
import jwt from 'jwt-decode'
import Axios from 'axios';
import FileDownload from 'js-file-download'
import { useNavigate } from 'react-router-dom';


const Publication = () => {
  const navigate = useNavigate();

  const [valid,setValid]=useState('');



const[decision,setDecision]=useState(false);
const[warning,setWarning]=useState('');
const[revision,setRevision]=useState('');
const[pdf,setPdf]=useState('');
const[user,setUser]=useState('');


async function paperdownload(){
 
  populateQuote();


if(valid===true){


  Axios({
    url:process.env.REACT_APP_hosting+"/getpdf/"+user,
    method:"GET",
    responseType:'blob',
    headers: {
      'x-access-token': localStorage.getItem('token'),
    }
  }).then((res)=>{
    const file = new Blob(
      [res.data], 
      {type: 'application/pdf'});
//Build a URL from the file
    const fileURL = URL.createObjectURL(file);
//Open the URL on new Window
    FileDownload(res.data,pdf+'.pdf')
    
  })
}
else{

navigate('/login')
}
}


async function mypdfinfo(){
  const req = await fetch(process.env.REACT_APP_hosting+'/mypdfinfo', {
    headers: {
      'x-access-token': localStorage.getItem('token'),
      
    },
  })

  const data = await req.json()
  if (data.status === 'ok') {
     setPdf(data.paperid)
    
  }
  else{
    setPdf("error")
  }
}

async function getComments() {
  const req = await fetch(process.env.REACT_APP_hosting+'/getComments', {
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
mypdfinfo()
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
      setUser(user['username'])

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

        {pdf!=0 ? (
      <div className=''>
        <button className='btn btn-lg btn-primary' onClick={paperdownload}>check your paper here</button>
    
      </div>
     ):(
     <div>
      </div>)}
      

   


      </div>

     
    </div>
    
    
    </div>
    
    
      )
}

export default Publication