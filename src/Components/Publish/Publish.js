import React,{useEffect,useState} from 'react'
import './Publish.Styles.scss'
import { Link, useLocation } from 'react-router-dom'

const Publish = () => {

const[backendData,setBackendData]=useState([{}])



  return (
    <div className='publication'>
        <div className='content'>
            <h1 className='heading-secondary'>Publish Your Paper Here</h1>
            <div className='box'>


            

            
              <Link className='pub' to='/register'><button className="button-57" role="button"><span className="text">Click Here</span><span>Publish!!</span></button></Link>
              
            </div>

            
            
        </div>
      </div>
    
  )
}

export default Publish