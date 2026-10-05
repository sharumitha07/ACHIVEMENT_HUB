import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

/* Student */
import StudentLayout from '../layouts/StudentLayout';
import StudentProfileSetup from '../pages/StudentProfileSetup';
import StudentDashboard from '../pages/StudentDashboard';
import AddAchievement from '../pages/AddAchievement';
import MyAchievements from '../pages/MyAchievements';
import StudentProfile from '../pages/StudentProfile';
import MyProgress from '../pages/MyProgress';

/* Staff */
import StaffLayout from '../layouts/StaffLayout';
import StaffDashboard from '../pages/StaffDashboard';
import Students from '../pages/Students';
import StudentDetails from '../pages/StudentDetails';
import StaffAchievements from '../pages/StaffAchievements';
import StaffAnalytics from '../pages/StaffAnalytics';

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =================================
            LOGIN
        ================================= */}

        <Route
          path="/"
          element={<Login />}
        />


        {/* =================================
            STUDENT PROFILE SETUP
        ================================= */}

        <Route
          path="/student/profile-setup"
          element={<StudentProfileSetup />}
        />


        {/* =================================
            STUDENT PAGES
            All student pages use StudentLayout
        ================================= */}

        <Route
          path="/student"
          element={<StudentLayout />}
        >

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

          <Route
            path="progress"
            element={<MyProgress />}
          />

          <Route
            path="profile"
            element={<StudentProfile />}
          />

          <Route
            path="feed"
            element={<Home />}
          />

        </Route>


        {/* =================================
            STAFF PAGES
            All staff pages use StaffLayout
        ================================= */}

        <Route
          path="/staff"
          element={<StaffLayout />}
        >

          <Route
            path="dashboard"
            element={<StaffDashboard />}
          />

          <Route
            path="students"
            element={<Students />}
          />

          <Route
            path="student/:id"
            element={<StudentDetails />}
          />

          <Route
            path="achievements"
            element={<StaffAchievements />}
          />

          <Route
            path="analytics"
            element={<StaffAnalytics />}
          />

        </Route>


      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;