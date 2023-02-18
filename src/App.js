
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Homepage/HomePage';
import NavBar from './Components/Navbar/NavBar';
import ContactUsSection from './Components/ContactUsSection copy/ContactUsSection';
import CallForPaper from './Components/CallForPaper/CallForPaper';
import Committee from './Components/Committee/Committee';


////ADDED
import Publication from './Components/Publication/Publication';
import Publish from './Components/Publish/Publish';
import Papers from './Components/Papers/Papers';
import Status from './Components/Status/Status';
import Login from './Components/Sign/Login';
import Register from './Components/Sign/Register';
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


///////

import Registration from './Components/Registration/Registration';
import ImpDates from './Components/ImpDates/ImpDates';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ImpDates />
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/call-for-paper' exact element={<CallForPaper />} />
        <Route path='/committee' exact element={<Committee />} />
        <Route path='/publication' exact element={<Publication />} />
        <Route path='/publish' exact element={<Publish />} />
        <Route path='/registration' exact element={<Registration />} />
        <Route path='/papers' exact element={<Papers />} />
        <Route path='/uploadagain' exact element={<Uploadagain />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
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
