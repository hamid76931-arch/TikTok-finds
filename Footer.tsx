import React from 'react'
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} TikTok Finds. All rights reserved.
          </p>
          <p className="mt-1">Products are fulfilled through AliExpress.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
