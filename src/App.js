import { Appointment } from './Pages/DoctorsDashboard/Appointment';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DoctorsDashboard } from './Pages/DoctorsDashboard/DoctorsDashboard';
import { Home } from './Pages/Homepage/Home';
import { DoctorsProfile } from './Pages/DoctorsDashboard/DoctorsProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors-dashboard" element={<DoctorsDashboard />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/doctors-profile" element={<DoctorsProfile />} />
        </Routes>
      </BrowserRouter>
      
      {/* <Home /> */}
      {/* <DoctorsDashboard/> */}
      {/* <Appointment/> */}
      {/* <DoctorsProfile/> */}
    </>
  );
}

export default App;
