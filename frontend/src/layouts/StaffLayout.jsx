import { Outlet } from 'react-router-dom';
import StaffSidebar from '../components/StaffSidebar';
import '../styles/staff-sidebar.css';

function StaffLayout() {
  return (
    <div className="staff-layout">
      <StaffSidebar />

      <main className="staff-layout-content">
        <Outlet />
      </main>
    </div>
  );
}

export default StaffLayout;