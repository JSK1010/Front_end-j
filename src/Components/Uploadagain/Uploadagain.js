import './Uploadagain.Styles.scss'
import { Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import jwt from 'jwt-decode'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Logout from '../Logout/Logout';
const Papers = () => {
  const navigate = useNavigate();
  // const [selectedFile, setSelectedFile] = useState();
	// const [isFilePicked, setIsFilePicked] = useState(false);

	// const changeHandler = (event) => {
	// 	setSelectedFile(event.target.files[0]);
	// 	setSelectedFile(true);
	// };




  const [item, setItem] = useState({ Name: '', Title: '',Author:'',Keyword:''});
	const [papers, setPapers] = useState('');

  const [statusColor,SetStatusColor]=useState('red');

const [valid,setValid]=useState('');
  const [filename, setFilename] = useState('Upload your paper');
  const [user, setUser] = useState('');
  const [file, setFile] = useState('');
  const [error, setError] = useState('');



const filechange = e =>{
  setError('');
  setFile(e.target.files[0]);
setFilename(e.target.files[0].name);
}


const onSubmit = async e=>{
  populateQuote();
  if(valid){
  e.preventDefault();
  const formData=new FormData();
  formData.append('file',file);
  formData.append('user',user);
  try{
const res=await axios.post( 'https://vitecon.vit.ac.in/api/uploadagain',formData,{
  headers:{'Content-Type': 'application/x-www-form-urlencoded',
  'x-access-token': localStorage.getItem('token'),}
});
const {fileName , filePath}=res.data;
if(fileName===undefined){
  throw res.data;
}
setError('Uploaded')
SetStatusColor('green');

//console.log({'fileName':fileName,'filepath':filePath})

  }catch(err){
    //console.log(err['error'])

    if(err['error'] === 500){
      //console.log('Problem with server');
      setError('Problem with server');
      SetStatusColor('red');
    }
    else if(err['error'] === 600){
      //console.log('Only pdfs are allowed');
      setError('Only Pdf');
      SetStatusColor('red');
    }
    else if(err['error'] === 700){
      //console.log("invalid")
      navigate("/login")
    }
    else{
        //console.log("invalid")
        navigate("/login")

    }
  }

}
}



async function checker() {
  const req = await fetch( 'https://vitecon.vit.ac.in/api/getComments', {
    headers: {
      'x-access-token': localStorage.getItem('token'),
    },
  })

  const data = await req.json()
  if (data.status === 'ok') {
    if(data.decision===true && data.waiting=='G'){
        
     navigate('/status')
    }
    else{
      if(data.decision==true){
        navigate('/uploadagain')
      }
    }
    
  } else {
    //console.log(data.status);
    //console.log("invalid")
    localStorage.removeItem('token')
    navigate("/login")
  }

}




	async function populateQuote() {
		const req = await fetch( 'https://vitecon.vit.ac.in/api/validation_papers', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setValid(true);
      setUser(data.who.email);
      checker()
		} else {
			setValid(false);
      navigate('/login');
		}
    //console.log({'user_validation':valid});

	}

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
      
			const user = jwt(token)
      //console.log(user['username'])
			if (!user) {
        //console.log("invalid")
				localStorage.removeItem('token')
        navigate("/login")
			} else {
        //console.log("token passed")
        
				populateQuote()
			}
		}
    else{
      navigate("/login")
    }
	}, [])














	
  return (
   
   
<div>
<Logout />
<div className="formbold-main-wrapper">
  <div className="formbold-form-wrapper">
    <form className='resp_uploadagain' onSubmit={onSubmit} method="POST">
        
    <div className="custom-file">
  
  <input required type="file" className="custom-file-input" id="customFile" onChange={filechange}/>
  <span className='status' style={{color:statusColor}}>{error}</span>
</div>

<button type='submit' className="formbold-btn post">
            Post the paper for review
        </button>
    </form>
  </div>
</div>

<div className='containerx'>
<Link to='/status'><button id='button'className="container2 pub" role="button">Status</button></Link>
</div>
</div>

  )
}




export default Papers;