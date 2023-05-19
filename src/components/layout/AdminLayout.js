import React from 'react'
import { Outlet } from "react-router-dom";
import AdminHeader from '../header/AdminHeader';

const AdminLayout = () => {
  return (
    <>
      <div>
        <AdminHeader />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout
