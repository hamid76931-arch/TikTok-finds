import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { isLoggedIn } from '../utils/auth'
interface ProtectedRouteProps {
  children: React.ReactNode
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Check if user is logged in
  const authenticated = isLoggedIn()
  // If not authenticated, redirect to login
  if (!authenticated) {
    return <Navigate to="/admin/login" replace />
  }
  // Otherwise, render the protected component
  return <>{children}</>
}
export default ProtectedRoute
