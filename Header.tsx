import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBagIcon, LockIcon } from 'lucide-react'
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingBagIcon className="h-8 w-8 text-pink-500" />
          <span className="text-xl font-bold text-gray-800">TikTok Finds</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            Discover amazing products from our TikTok videos
          </div>
          <Link
            to="/admin/login"
            className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 hover:text-pink-500 transition-colors"
          >
            <LockIcon size={16} />
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header
