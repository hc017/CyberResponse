import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom"
import Home from './Pages/Home/Home'
import UserLogin from './Pages/LoginRegister/UserLogin'
import UserRegister from './Pages/LoginRegister/UserRegister'
import UserDetails from './Pages/UserDetails/UserDetails'
import TrackComplaint from './Pages/TrackComplaint/TrackComplaint'
import IdMain from './Pages/IncidentDetails/ID_main'
import SuspectD from './Pages/IncidentDetails/SuspectD'
import ComplaintDetails from './Pages/IncidentDetails/Complaint_details'
import Submit from './Pages/IncidentDetails/Submit'
import CheckStatus from './Pages/RegisterComplaint/CheckStatus/CheckStatus'
import CW from './Pages/RegisterComplaint/ComplaintWithdraw/CW'
import DC from './Pages/RegisterComplaint/DraftComplaint/DC'
import UP from './Pages/RegisterComplaint/UpdatePhone/UP'
import UserPhone from './Pages/RegisterComplaint/UserPhone/UserPhone'
import UserProfile from './Pages/UserDetails/Userprofilebar/UserProfile'
import DisplayData from './Pages/ReportIncident/Victim/DisplayData'
import ContactUs from './Pages/ContactUs/ContactUs'
import HowToReport from './Pages/Home/How_to/How_to_report'



const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<UserLogin/>}></Route>
    <Route path='/register' element={<UserRegister/>}></Route>
    <Route path='/userdetails' element={<UserDetails/>}></Route>
    <Route path='/trackcomplaint' element={<TrackComplaint/>}></Route>
    <Route path='/incidentdetails' element={<IdMain/>}></Route>
    <Route path='/suspectdetails' element={<SuspectD/>}></Route>
    <Route path='/complaintdetails' element={<ComplaintDetails/>}></Route>
    <Route path='/submit' element={<Submit/>}></Route>
    <Route path='/checkstatus' element={<CheckStatus/>}></Route>
    <Route path='/complaintwithdrw' element={<CW/>}></Route>
    <Route path='/draftcomplaint' element={<DC/>}></Route>
    <Route path='/updatephone' element={<UP/>}></Route>
    <Route path='/userd' element={<UserPhone/>}></Route>
    <Route path='/userprofile' element={<UserProfile/>}></Route>
    <Route path='/displaydata' element={<DisplayData/>}></Route>
    <Route path='/contactus' element={<ContactUs/>}></Route>
    <Route path="/how_to_report" element={<HowToReport/>}></Route>

   </Routes>
   
  )
}

export default AllRoutes
