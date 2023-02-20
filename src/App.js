import './App.css';
import { Routes, Route } from 'react-router-dom';
import ContactUsSection from './Components/ContactUsSection copy/ContactUsSection';


////ADDED
import Papers from './Components/Papers/Papers';
import Status from './Components/Status/Status';
import Login from './Components/Sign/Login';
import Register from './Components/Sign/Register';
import Verify from './Components/Sign/Verify';
import Uploadagain from './Components/Uploadagain/Uploadagain';
import Admin from './Components/Admin/Admin';
import Updatestatuslogin from './Components/Updatestatuslogin/Updatestatuslogin';
import Ses from './Components/Updatestatus/Ses';
import Ngwct from './Components/Updatestatus/Ngwct';
import Awn from './Components/Updatestatus/Awn';
import Sarf from './Components/Updatestatus/Sarf';
import Sip from './Components/Updatestatus/Sip';
import Aciss from './Components/Updatestatus/Aciss';
import Wie from './Components/Updatestatus/Wie';
import ForgotPasswordForm from './Components/ForgotPassword/ForgotPasswordForm';


///////

import ImpDates from './Components/ImpDates/ImpDates';

function App() {
  return (
    <div className="App">
      <ImpDates />
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/papers' exact element={<Papers />} />
        <Route path='/uploadagain' exact element={<Uploadagain />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/forgotPassword' exact element={<ForgotPasswordForm />} />
        <Route path='/verify' exact element={<Verify />} />
        <Route path='/Admin' exact element={<Admin />} />
        <Route path='/status' exact element={<Status />} />
        <Route path='/updatestatuslogin' exact element={<Updatestatuslogin />} />
        <Route path='/Ses' exact element={<Ses/>} />
        <Route path='/Ngwct' exact element={<Ngwct/>} />
        <Route path='/Awn' exact element={<Awn/>} />
        <Route path='/Sarf' exact element={<Sarf/>} />
        <Route path='/Sip' exact element={<Sip/>} />
        <Route path='/Aciss' exact element={<Aciss/>} />
        <Route path='/Wie' exact element={<Wie/>} />
        
      </Routes>
      <ContactUsSection />
    </div>
  );
}

// <Route path='/keynote' exact element={<Keynote />} />

export default App;
