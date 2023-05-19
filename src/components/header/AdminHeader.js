import React from "react";
import { Link } from "react-router-dom";
const navLinks = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/users",
    label: "Userss",
  },
  {
    href: "/content",
    label: "Content",
  },
  {
    href: "/monitoring",
    label: "Monitoring",
  },
];

const AdminHeader = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-white text-lg">Admin Panel</h1>
        </div>
        <div className="flex items-center">
        <ul className="flex list-none grow">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
              className="text-gray-300 hover:text-white mr-4"
                to={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
          </ul>
          
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
