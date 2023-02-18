import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Updatestatus.Styles.scss';
import jwt from 'jwt-decode'
import Card from './Card';
import Axios from 'axios';
import FileDownload from 'js-file-download'
const Sip = () => {
  const navigate = useNavigate();


const [valid,setValid]=useState('');
const [email,setEmail]=useState('');
//////
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
const [Pdfid, setPdfid] = useState('');
//////

async function getpdfinfos() {


  
  const req = await fetch(process.env.REACT_APP_hosting+'/getpdfinfos', {
    headers: {
      'x-access-token': localStorage.getItem('token'),
    },
  })

  const data = await req.json()
  
  if (data.status === 'ok') {
     
   setEmail(data.file); 
   setAuthor_Name(data.Author_Name);
   setAuthor_Type(data.Author_Type);
   setInstitution(data.Institution);
   setAddress(data.Address);
   setMobile(data.Mobile);
   setIEEE_no(data.IEEE_No);
   setCoauthors(data.Coauthors);
   setCoauthors_Affiliation(data.Affiliation);
   setPaper_Title(data.Paper_Title);
   setDomain(data.Domain);
   setPdfid(data.Pdfid)
  
  }
  
  
  else{
    navigate('/updatestatuslogin');
  }


}


const getList = (count) => {
  const arr = []

  for(let i = 0; i < count; i++){
  
    if(Domain[i]==='SIP'){
      arr.push(<Card email={email[i]} Author_Name={Author_Name[i]} Author_Type={Author_Type[i]} Institution={Institution[i]} Address={Address[i]} onc={getpdf} Mobile={Mobile[i]} IEEE_no={IEEE_No[i]} Coauthors={Coauthors[i]} Affiliation={Coauthors_Affiliation[i]} Paper_Title={Paper_Title[i]} Domain={Domain[i]} Pdfid={Pdfid[i]}/>)
}
  }
  return arr;
}


function getpdf(e){
  const em = e.currentTarget.getAttribute("data-id")
  const down = e.currentTarget.getAttribute("pdfid")
  populateQuote();
if(valid==true){

  Axios({
    url:process.env.REACT_APP_hosting+"/getpdf/"+em,
    method:"GET",
    responseType:'blob'
  }).then((res)=>{
    const file = new Blob(
      [res.data], 
      {type: 'application/pdf'});
//Build a URL from the file
    const fileURL = URL.createObjectURL(file);
//Open the URL on new Window
FileDownload(res.data,"SIP"+down+'.pdf')
    
  })
}
else{

navigate('/updatestatuslogin')
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
    getpdfinfos();
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


  return (
    <div className='publication'>
      

        <div className="container">
        <div className="containerboxx">
        {getList(Author_Name.length)}



 </div>

</div>

     
        </div>
      
      )
  
  }
export default Sip ;