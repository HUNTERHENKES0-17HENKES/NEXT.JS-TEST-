import { useRouter } from 'next/router'
import { deleteCookie } from 'cookies-next'

export default function AdminLanding() {
  const router = useRouter()

  const logout = () => {
    deleteCookie('auth')
    router.push('/')
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0 }}>Next.js Admin Demo</h1>
        <button
          onClick={logout}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </header>

      {/* Hero Section */}
      <div style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        backgroundColor: '#0070f3',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Admin Login</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          Welcome to the Next.js Admin Dashboard
        </p>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          A powerful and secure admin interface built with Next.js 14.1.0
        </p>
      </div>

      {/* Features Section */}
      <div style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Key Features</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }}>
          {/* Security Feature */}
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔒</div>
            <h3 style={{ marginBottom: '1rem' }}>Secure Authentication</h3>
            <p style={{ color: '#666' }}>
              Advanced security features with protected admin access
            </p>
          </div>

          {/* User Management Feature */}
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👥</div>
            <h3 style={{ marginBottom: '1rem' }}>User Management</h3>
            <p style={{ color: '#666' }}>
              Comprehensive user management system with role-based access
            </p>
          </div>

          {/* System Monitoring Feature */}
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📊</div>
            <h3 style={{ marginBottom: '1rem' }}>System Monitoring</h3>
            <p style={{ color: '#666' }}>
              Real-time system statistics and performance monitoring
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        backgroundColor: '#f8f9fa'
      }}>
        <h2 style={{ marginBottom: '2rem' }}>Ready to Get Started?</h2>
        <button
          onClick={() => router.push('/admin/dashboard')}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          Access Admin Dashboard
        </button>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0 }}>© 2024 Next.js Admin Demo. All rights reserved.</p>
      </footer>
    </div>
  )
} 