import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  HomeIcon,
  PackageIcon,
  SettingsIcon,
  LogOutIcon,
  ExternalLinkIcon,
} from 'lucide-react'
import { setLoggedIn } from '../utils/auth'
const AdminNavbar: React.FC = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    setLoggedIn(false)
    navigate('/admin/login')
  }
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Admin Dashboard</div>
          <div className="flex space-x-6">
            <Link
              to="/admin"
              className="flex items-center space-x-1 hover:text-pink-300"
            >
              <HomeIcon size={18} />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/admin/products"
              className="flex items-center space-x-1 hover:text-pink-300"
            >
              <PackageIcon size={18} />
              <span>Products</span>
            </Link>
            <Link
              to="/admin/settings"
              className="flex items-center space-x-1 hover:text-pink-300"
            >
              <SettingsIcon size={18} />
              <span>Settings</span>
            </Link>
            <Link
              to="/"
              className="flex items-center space-x-1 hover:text-pink-300"
            >
              <ExternalLinkIcon size={18} />
              <span>View Site</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 hover:text-pink-300"
            >
              <LogOutIcon size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default AdminNavbar
