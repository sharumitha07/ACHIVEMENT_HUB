import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

import StudentLayout from '../layouts/StudentLayout';

import StudentProfileSetup from '../pages/StudentProfileSetup';
import StudentDashboard from '../pages/StudentDashboard';
import AddAchievement from '../pages/AddAchievement';
import MyAchievements from '../pages/MyAchievements';
import StudentProfile from '../pages/StudentProfile';

import StaffDashboard from '../pages/StaffDashboard';
import StudentDetails from '../pages/StudentDetails';
import MyProgress from '../pages/MyProgress';
function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        
        


        {/* Student Profile Setup */}
        <Route
          path="/student/profile-setup"
          element={<StudentProfileSetup />}
        />


        {/* ================================
            STUDENT PAGES
            All of these use the same Sidebar
        ================================= */}

        <Route path="/student" element={<StudentLayout />}>


          <Route
            path="dashboard"
            element={<StudentDashboard />}
          />

          <Route
            path="achievements"
            element={<MyAchievements />}
          />

          <Route
            path="add-achievement"
            element={<AddAchievement />}
          />
          <Route path="progress" element={<MyProgress />} />

          <Route
            path="profile"
            element={<StudentProfile />}
          />
          <Route
            path="feed"
            element={<Home />}
          />

        </Route>


        {/* ================================
            STAFF PAGES
        ================================= */}

        <Route
          path="/staff/dashboard"
          element={<StaffDashboard />}
        />

        <Route
          path="/staff/student/:id"
          element={<StudentDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;