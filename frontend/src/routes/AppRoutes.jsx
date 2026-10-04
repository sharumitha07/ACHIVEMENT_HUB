import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import StudentProfileSetup from '../pages/StudentProfileSetup';
import StudentDashboard from '../pages/StudentDashboard';
import AddAchievement from '../pages/AddAchievement';
import MyAchievements from '../pages/MyAchievements';
import StudentProfile from '../pages/StudentProfile';
import StaffDashboard from '../pages/StaffDashboard';
import StudentDetails from '../pages/StudentDetails';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />    
        <Route path="/student/profile-setup" element={<StudentProfileSetup />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/add-achievement" element={<AddAchievement />} />
        <Route path="/student/achievements" element={<MyAchievements />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/staff/dashboard" element={<StaffDashboard />} />
        <Route path="/staff/student/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;