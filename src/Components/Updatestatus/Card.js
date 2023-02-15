import React, { useEffect, useState } from 'react'
const Card = (props) => {

  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const [touch, setTouch] = useState('yes');
  const[accepted_warnings,setAccepted_warnings]=useState(false);

  const handleMessageChange = event => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  
  function major(){

  if (window.confirm("Fill up the Revision box for Major Revision") === true) {
    majorc();
  } 
  }

async function majorc(){
    await fetch('https://vit-vitecon-back.onrender.com/warning/major', {
    headers: {
      'x-access-token': localStorage.getItem('token'),
      'user':props.email,
       'body': JSON.stringify(message)
    },
  });

  
}

function finalized(){
if (window.confirm("Are you sure to finalize this paper !") === true) {
  finalizedc();
} 
}


async function finalizedc(){
    await fetch('https://vit-vitecon-back.onrender.com/finalized', {
    headers: {
      'x-access-token': localStorage.getItem('token'),
      'user':props.email
    },
  });

  
}


function minor(){
if (window.confirm("Fill up the Revision box for Minor Revision") === true) {
  minorc();
} 
}


async function minorc(){
   await fetch('https://vit-vitecon-back.onrender.com/warning/minor', {
    headers: {
      'x-access-token': localStorage.getItem('token'),
      'user':props.email,
      'body': JSON.stringify(message)
    },
  });
}

async function accepted(){
  setAccepted_warnings(true);
  }

function rejected(){
if (window.confirm("Do you want to reject this paper?") === true) {
  rejectedc();
} 
}
async function rejectedc(){
  
  setAccepted_warnings(false);
    await fetch('https://vit-vitecon-back.onrender.com/paper_decision/false', {
    headers: {
      'x-access-token': localStorage.getItem('token'),
      'user':props.email,
      'body': JSON.stringify(message)
    },
  });

}

async function getcolor(){
  const req = await fetch('https://vit-vitecon-back.onrender.com/getcolor', {
    headers: {
      'x-access-token': localStorage.getItem('token'),
      'user':props.email
    },
  })

  const data = await req.json()
  
  if(data.status==='ok'){
    if(data.color==='B'){
    setColor('blue')}
    else if(data.color==='R')
    {setColor('red')}
    else if(data.color==='O'){
      setColor('orange')
    }
    else if(data.color==='G'){
      setColor('green')
      setTouch('no')
    }

    setMessage(data.msg);
  }
  else{
    setColor('black')
  }
  
}

useEffect(() => {

getcolor();


 
}, [])

  return (
     <div className="borderline" style={{borderColor:color}} >

<details>

    <summary> 

       {/* <h3>{props.title}</h3> */}
       <h4>Author Name : {props.Author_Name}</h4>
       {/* <a className='l' onClick={accept}>Accept</a>
       <a className='r' onClick={reject}>Reject</a> */}
     <br></br>
     <br></br>
    </summary>
  <div className='container-fluid'>
    <div className="row border_row1">
    <div className='col-lg-4 content_row '>
     <h5><span className='Q'>Author Type : </span>{props.Author_Type}</h5>
     <h5><span className='Q'>Name of the Institution / Organization : </span>{props.Institution}</h5>
     <h5><span className='Q'>Institution / Organization Address : </span>{props.Address}</h5>
     <h5><span className='Q'>E-Mail Address : </span>{props.email}</h5>
     <h5><span className='Q'>Mobile No :</span> {props.Mobile}</h5>
     <h5><span className='Q'>IEEE Memebership No : </span>{props.IEEE_no}</h5>
     <h5><span className='Q'>List of Co-Author Name : </span>{props.Coauthors}</h5>
     <h5><span className='Q'>Co-Author Affiliation : </span>{props.Affiliation}</h5>
     <h5><span className='Q'>Paper Title:</span> {props.Paper_Title}</h5>
     <h5><span className='Q'>Domain of the Paper: </span>{props.Domain}</h5>
     <h5><span className='Q'>Download the Paper  : </span><a className='download' onClick={props.onc} data-id={props.email}>Click Here</a></h5>
     </div>


      
     <div className='col-lg-4'>
    <div className='rb1'>
      <textarea className='rb1c' value={message}
        onChange={handleMessageChange}></textarea>
    </div>
    
     </div>

     
     
     <div className='col-lg-4'>


     {touch==='no' ? (
      <div className='rb1'>
        <h5>This paper has been accepted</h5>
      </div>
     ):(
     <div>

<button className='btn btn-danger decision' onClick={rejected}>Reject</button>
      <button className='btn btn-success decision' onClick={accepted}>Accept</button>
      <button className='btn btn-outline-success decision' onClick={finalized}>Finalize</button>
      {accepted_warnings ? (
        <div>
        <button className='btn btn-secondary decision btn-sm' onClick={major}>Major Revision</button>
        <button className='btn btn-secondary decision btn-sm' onClick={minor}>Minor Revision</button>
        </div>
      ) : (
       <div></div>
      )}



     </div>
     )}
     
      

    </div>
     </div>
  </div>

</details>
 
   
  
  </div>


  );
}

export default Card;

