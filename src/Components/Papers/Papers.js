import './Paper.Styles.scss'
import { Link, Navigate, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import jwt from 'jwt-decode'
import FileBase64 from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


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
  const [uploadedFile, setUploadedFile] = useState({});
  
//CONTENTS OF FORM



  const [Author_Name, setAuthor_Name] = useState('');
  const [Author_Type, setAuthor_Type] = useState('');
  const [Institution, setInstitution] = useState('');
  const [Address, setAddress] = useState('');
  const [Mobile, setMobile] = useState('');
  const [IEEE_No, setIEEE_no] = useState('');
  const [Coauthors, setCoauthors] = useState('');
  const [Coauthors_Affiliation, setCoauthors_Affiliation] = useState('');
  const [Paper_Title, setPaper_Title] = useState('');
  const [Domain, setDomain] = useState('');


//////////////////
const onAuthorName =e=>{
  setAuthor_Name(e.target.value);
}

const onAuthorType =e=>{
  setAuthor_Type(e.target.value);
}

const onInstitution =e=>{
  setInstitution(e.target.value);
}

const onAddress =e=>{
  setAddress(e.target.value);
}

const onMobile =e=>{
  setMobile(e.target.value);
}
const onIEEE =e=>{
  setIEEE_no(e.target.value);
}

const onCoauthor =e=>{
  setCoauthors(e.target.value);
}

const onAffiliation =e=>{
  setCoauthors_Affiliation(e.target.value);
}

const onPaper =e=>{
  setPaper_Title(e.target.value);
}

const onDomain =e=>{
  setDomain(e.target.value);
  console.log('got')
  //console.log(Author_Name,Author_Type,Institution,Address,Mobile,IEEE_No,Coauthors,Coauthors_Affiliation,Paper_Title,Domain);
}
////////////////////



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
  formData.append('Author_Name',Author_Name);
  formData.append('Author_Type',Author_Type);
  formData.append('Institution',Institution);
  formData.append('Address',Address);
  formData.append('Mobile',Mobile);
  formData.append('IEEE_no',IEEE_No);
  formData.append('Coauthors',Coauthors);
  formData.append('Affiliation',Coauthors_Affiliation);
  formData.append('Paper_Title',Paper_Title);
  formData.append('Domain',Domain);
  formData.append('user',user);

  try{

const res=await axios.post(process.env.REACT_APP_hosting+'/upload',formData,{
  headers:{'Content-Type': 'multipart/form-data',
  'x-access-token': localStorage.getItem('token')}
});

const {fileName , filePath}=res.data;

if(fileName===undefined){
  throw res.data;
}
setUploadedFile(fileName,filePath);
setError('Uploaded')
SetStatusColor('green');

console.log({'fileName':fileName,'filepath':filePath})

  }catch(err){

    if(err['error'] === 500){
      console.log('Problem with server');
      console.log(err);
    }
    if(err['error'] === 600){
      console.log('Only pdfs are allowed');
      setError('Only Pdf');
      SetStatusColor('red');
    }
    else{
      console.log(err.response.data.msg);
    }
  }

}
}



async function checker() {
  const req = await fetch(process.env.REACT_APP_hosting+'/getComments', {
    headers: {
      'x-access-token': localStorage.getItem('token'),
    },
  })
  

  const data = await req.json()
  console.log('FROM CHECKER')
  console.log(data)
  if (data.status == 'ok') {
    
    if(data.waiting=='G'){
      navigate('/status')
    }

    else if(data.decision){
        
      navigate('/uploadagain')
    }
    else{
        return;
      }

    }
    

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
      setUser(data.who.email);
      checker();
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
	}
  , [])














	
  return (
   
   
<div>
<div className="formbold-main-wrapper">
  <div className="formbold-form-wrapper">
    <form onSubmit={onSubmit} method="POST">
    

  <div className='container'>

        <div className="row">

             <div className='col-lg-6'>
            <label htmlFor="firstname" className="formbold-form-label">Author Name </label>
              <input
              required
              type="text"
              name="Author Name"
              id="Author Name"
              placeholder=""
              onChange={onAuthorName}
              className="formbold-form-input"
              />   
             </div>


              <div className='col-lg-6 col-sm-12'>
              <label htmlFor="cars" className="formbold-form-label">Author Type</label>
              <select name="cars" className="formbold-form-input" onChange={onAuthorType} required="required">
              <option value="">---select---</option>
  <option value="Student / Research Scholar">Student / Research Scholar</option>
  <option value="Faculty">Faculty</option>
  <option value="Industry">Industry</option>
  <option value="Others">Others</option>

</select>
              
              
            
              </div>
      
        </div>  
        
  </div>

       
  <div className='container'>

<div className="row">

     <div className='col-lg-6'>
    <label htmlFor="Name of the Institution / Organization" className="formbold-form-label">Name of the Institution / Organization</label>
      <input
      required
      type="text"
      name="Name of the Institution / Organization"
      placeholder=""
      onChange={onInstitution}
      className="formbold-form-input"
      />   
     </div>


      <div className='col-lg-6 col-sm-12'>
      <label htmlFor="Institution / Organization Address" className="formbold-form-label">Institution / Organization Address</label>
      <input
      required
      name="Institution / Organization Address"
      placeholder=""
      onChange={onAddress}
      className="formbold-form-input"
      />
    
      </div>

</div>  

</div>




  <div className='container'>

<div className="row">

     <div className='col-lg-6'>
    <label htmlFor="Mobile No" className="formbold-form-label">Mobile No</label>
      <input
      required
      type="text"
      name="Mobile No"
      placeholder=""
      onChange={onMobile}
      className="formbold-form-input"
      />   
     </div>


      <div className='col-lg-6 col-sm-12'>
      <label htmlFor="IEEE Membership No." className="formbold-form-label">IEEE Membership No.</label>
      <input
      required
      name="IEEE Membership No."
      placeholder=""
      onChange={onIEEE}
      className="formbold-form-input"
      />
    
      </div>

</div>  

</div>

<hr className='line'></hr>
     

<div className='container'>

<div className="row">

     <div className='col-lg-6'>
    <label htmlFor="List of Co-Author Name (Comma Separated)" className="formbold-form-label">List of Co-Author Name
(Comma Separated)</label>
      <input
      required
      type="text"
      name="List of Co-Author Name (Comma Separated)"
     
      placeholder=""
      onChange={onCoauthor}
      className="formbold-form-input"
      />   
     </div>


      <div className='col-lg-6 col-sm-12'>
      <label htmlFor="Co-Author Affiliation (Comma Separated)" className="formbold-form-label">Co-Author Affiliation
(Comma Separated)</label>
      <input
      required
      name="Co-Author Affiliation (Comma Separated)"
      placeholder=""
      onChange={onAffiliation}
      className="formbold-form-input"
      />
    
      </div>

</div>  

</div>


<hr className='line'></hr>


<div className='container'>

<div className="row">

     <div className='col-lg-6'>
    <label htmlFor="Paper Title" className="formbold-form-label">Paper Title</label>
      <input
      required
      type="Paper Title"
      name="firstname"
      id="firstname"
      placeholder=""
      onChange={onPaper}
      className="formbold-form-input"
      />   
     </div>


      <div className='col-lg-6 col-sm-12'>
      <label htmlFor="email" className="formbold-form-label">Domain of the Paper</label>
      <select name="paperDomain" id="paperDomain" className="formbold-form-input" required="required" onChange={onDomain}>
                                        <option value="">---select---</option>
                                        <option value="SES">Smart Electronics Systems</option><option value="WC">Wireless Communication</option><option value="NGN">Next Generation Wireless Networks</option><option value="SARF">Smart Antenna and RF Technologies for next generation Communication</option><option value="SIP">Signal and Image Processing</option><option value="ACISS">Advanced Computing and Information Systems Security</option><option value="WIE">Women in Engineering</option>                                    </select>
    
      </div>

</div>  

</div>



        <div className="formbold-input-file">
          <div className="formbold-filename-wrapper">
        
          </div>
         
          <label htmlFor="upload" className="formbold-input-label">
        


          <div className="custom-file">
  <input required type="file" className="custom-file-input" id="customFile" onChange={filechange}/>
  <label className="custom-file-label " htmlFor="customFile">{filename}</label>
  <span className='status' style={{color:statusColor}}>{error}</span>
</div>
       
              
          </label>
        </div>

        <button type='submit' className="formbold-btn">
            Post the paper for review
        </button>
        
       
<div className='status'>
<Link to='/status'><button className="pub subm" role="button">Status</button></Link>
</div>
    </form>
    


  </div>
</div>

</div>

  )
}




export default Papers;