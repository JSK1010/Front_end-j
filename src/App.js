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
import Adminlogin from './Components/Adminlogin/Adminlogin';
import Ses from './Components/Updatestatus/Ses';
import Ngwct from './Components/Updatestatus/Ngwct';
import Awn from './Components/Updatestatus/Awn';
import Sarf from './Components/Updatestatus/Sarf';
import Sip from './Components/Updatestatus/Sip';
import Aciss from './Components/Updatestatus/Aciss';
import Wie from './Components/Updatestatus/Wie';
import ForgotPasswordForm from './Components/ForgotPassword/ForgotPasswordForm';
import Password from './Components/Sign/Password';
import Newpassword from './Components/Sign/Newpassword';


///////



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/papers' exact element={<Papers />} />
        <Route path='/uploadagain' exact element={<Uploadagain />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/forgotPassword' exact element={<ForgotPasswordForm />} />
        <Route path='/Password' exact element={<Password />} />
        <Route path='/Newpassword' exact element={<Newpassword />} />
        <Route path='/verify' exact element={<Verify />} />
        <Route path='/Admin' exact element={<Admin />} />
        <Route path='/status' exact element={<Status />} />
        <Route path='/Adminlogin' exact element={<Adminlogin />} />
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
