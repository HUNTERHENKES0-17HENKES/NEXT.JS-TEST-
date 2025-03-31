import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'
import AdminLanding from './landing'
import AdminDashboard from './dashboard'

export default function Admin() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const authCookie = getCookie('auth')
    if (!authCookie) {
      router.push('/login')
    }
  }, [router])

  // If not authenticated, don't render anything
  const authCookie = getCookie('auth')
  if (!authCookie) {
    return null
  }

  // Show landing page at /admin
  if (router.pathname === '/admin') {
    return <AdminLanding />
  }

  // Show dashboard at /admin/dashboard
  if (router.pathname === '/admin/dashboard') {
    return <AdminDashboard />
  }

  // For all other admin routes, show dashboard
  return <AdminDashboard />
} 