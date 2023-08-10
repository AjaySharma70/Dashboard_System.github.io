import { useState } from 'react';
import Home from './Pages/Home';
import Members from './Pages/Members';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Billings from './Pages/Billings';
import Apphub from './Pages/Apphub';
import Addinvoice from './Pages/Addinvoice';
import Integ from './Pages/integ';
//import Updateinvoice from './Pages/Updateinvoice';
import Addmembers from './Pages/Addmembers';
//import Updatemembers from './Pages/Updatemembers';
import Invoice from './Pages/Invoice';
import Settings from './Pages/Settings';
import Users from './Pages/Users';
import Addusers from './Pages/Addusers';
import Updateusers from './Pages/Updateusers';
import Roles from './Pages/Roles';
import Addroles from './Pages/Addroles';
  
//import Addorgprofile from './Pages/Addorgprofile';
//import Updateroles from './Pages/Updateroles';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './Pages/ProtectedRoute';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Addmessage from './Pages/Addmessage';




function App() {

/*
  const [userId, setUserId] = useState("");

  const getUserIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setUserId(id);
  };

*/

  const [roleId, setRoleId] = useState("");

  const getRoleIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setRoleId(id);
  };

  const [memberId, setMemberId] = useState("");

  const getMemberIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setMemberId(id);
  };

  const [billingId, setBillingId] = useState("");

  const getBillingIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBillingId(id);
  };

  /*
  const [profileId, setProfileId] = useState("");

  const getProfileIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setProfileId(id);
  };

  */


  return (

    <Router>
      <UserAuthContextProvider>

        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/addmessage' element={<ProtectedRoute><Addmessage /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<ProtectedRoute><Profile /*getProfileId={getProfileIdHandler}*/ /></ProtectedRoute>} />
          {/*<Route path='/addorgprofile' element={<ProtectedRoute><Addorgprofile id={profileId} setProfileId={setProfileId}/></ProtectedRoute>} />*/}
          <Route path='/billings' element={<ProtectedRoute><Billings getBillingId={getBillingIdHandler} /></ProtectedRoute>} />
          <Route path='/apphub' element={<ProtectedRoute><Apphub /></ProtectedRoute>} />
          <Route path='/addinvoice' element={<ProtectedRoute><Addinvoice id={billingId} setBillingId={setBillingId} /></ProtectedRoute>} />
          {/*<Route path='/updateinvoice' element={<Updateinvoice />} />*/}
          <Route path='/members' element={<ProtectedRoute><Members getMemberId={getMemberIdHandler} /></ProtectedRoute>} />
          <Route path='/addmembers' element={<ProtectedRoute><Addmembers id={memberId} setMemberId={setMemberId} /></ProtectedRoute>} />
          {/*<Route path='/updatemembers' element={<Updatemembers />} />*/}
          <Route path='/invoice' element={<ProtectedRoute><Invoice /></ProtectedRoute>} />
          <Route path='/settings' element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path='/integ' element={<ProtectedRoute><Integ /></ProtectedRoute>} />
          <Route path='/users' element={<ProtectedRoute><Users /*getUserId={getUserIdHandler}*/ /></ProtectedRoute>} />
          <Route path='/addusers' element={<ProtectedRoute><Addusers /*id={userId} setUserId={setUserId}*/ /></ProtectedRoute>} />
          <Route path='/updateusers/:id' element={<ProtectedRoute><Addusers /></ProtectedRoute>} />

          <Route path='/roles' element={<ProtectedRoute><Roles getRoleId={getRoleIdHandler} /></ProtectedRoute>} />
          <Route path='/addroles' element={<ProtectedRoute><Addroles id={roleId} setRoleId={setRoleId} /></ProtectedRoute>} />
          {/*<Route path='/updateroles' element={<RequireAuth><Updateroles /></RequireAuth>} />*/}
        </Routes>
      </UserAuthContextProvider>
    </Router>




  );
}

export default App;
