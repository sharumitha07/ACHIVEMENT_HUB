import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/sidebar.css';

function StudentLayout() {
  return (
    <div className="student-layout">
      <Sidebar />

      <main className="student-layout-content">
        <Outlet />
      </main>
    </div>
  );
}

export default StudentLayout;