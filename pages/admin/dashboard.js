import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { deleteCookie, getCookie } from 'cookies-next'

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')
  const [users, setUsers] = useState([])
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    adminUsers: 0,
    systemUptime: 0
  })

  useEffect(() => {
    // Check if user is authenticated as admin
    const authCookie = getCookie('auth')
    if (!authCookie) {
      router.push('/admin/landing')
      return
    }

    // Fetch live data every second
    const fetchData = async () => {
      try {
        // Simulate API calls
        const mockData = {
          totalUsers: Math.floor(Math.random() * 1000) + 500,
          activeUsers: Math.floor(Math.random() * 500) + 200,
          adminUsers: Math.floor(Math.random() * 20) + 5,
          systemUptime: (Math.random() * 0.5 + 99.5).toFixed(1)
        }
        setStats(mockData)

        // Simulate user data
        const mockUsers = [
          { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' }
        ]
        setUsers(mockUsers)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    // Initial fetch
    fetchData()

    // Set up interval for live updates
    const interval = setInterval(fetchData, 1000)

    // Cleanup interval on unmount
    return () => clearInterval(interval)
  }, [router])

  const logout = () => {
    deleteCookie('auth')
    router.push('/admin/landing')
  }

  const handleDeleteUser = (userId) => {
    // In a real app, this would make an API call
    console.log('Delete user:', userId)
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
        <h1 style={{ margin: 0 }}>Admin Dashboard</h1>
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

      <div style={{ display: 'flex', minHeight: 'calc(100vh - 64px)' }}>
        {/* Sidebar */}
        <nav style={{
          width: '250px',
          backgroundColor: 'white',
          padding: '1rem',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveTab('overview')}
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: activeTab === 'overview' ? '#0070f3' : 'transparent',
                color: activeTab === 'overview' ? 'white' : '#333',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('users')}
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: activeTab === 'users' ? '#0070f3' : 'transparent',
                color: activeTab === 'users' ? 'white' : '#333',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              User Management
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: activeTab === 'settings' ? '#0070f3' : 'transparent',
                color: activeTab === 'settings' ? 'white' : '#333',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              System Settings
            </button>
            <button
              onClick={() => router.push('/admin/games')}
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              Games Section
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '2rem' }}>
          {activeTab === 'overview' && (
            <>
              <h2>System Overview</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                marginTop: '1rem'
              }}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  <h3>Total Users</h3>
                  <p style={{ fontSize: '2rem', margin: '0.5rem 0' }}>{stats.totalUsers}</p>
                </div>
                <div style={{
                  backgroundColor: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  <h3>Active Users</h3>
                  <p style={{ fontSize: '2rem', margin: '0.5rem 0' }}>{stats.activeUsers}</p>
                </div>
                <div style={{
                  backgroundColor: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  <h3>Admin Users</h3>
                  <p style={{ fontSize: '2rem', margin: '0.5rem 0' }}>{stats.adminUsers}</p>
                </div>
                <div style={{
                  backgroundColor: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  <h3>System Uptime</h3>
                  <p style={{ fontSize: '2rem', margin: '0.5rem 0' }}>{stats.systemUptime}%</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                marginTop: '2rem'
              }}>
                <h3>Recent Activity</h3>
                <div style={{ marginTop: '1rem' }}>
                  <div style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                    <p style={{ margin: 0 }}>New user registration: Sarah Wilson</p>
                    <small style={{ color: '#666' }}>2 minutes ago</small>
                  </div>
                  <div style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                    <p style={{ margin: 0 }}>System backup completed successfully</p>
                    <small style={{ color: '#666' }}>1 hour ago</small>
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <p style={{ margin: 0 }}>Security patch applied to production</p>
                    <small style={{ color: '#666' }}>3 hours ago</small>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'users' && (
            <>
              <h2>User Management</h2>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                marginTop: '1rem'
              }}>
                <div style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                  <button
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Add New User
                  </button>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f8f9fa' }}>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>Name</th>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>Email</th>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>Role</th>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id} style={{ borderTop: '1px solid #eee' }}>
                        <td style={{ padding: '1rem' }}>{user.name}</td>
                        <td style={{ padding: '1rem' }}>{user.email}</td>
                        <td style={{ padding: '1rem' }}>{user.role}</td>
                        <td style={{ padding: '1rem' }}>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            style={{
                              padding: '0.5rem 1rem',
                              backgroundColor: '#dc3545',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'settings' && (
            <>
              <h2>System Settings</h2>
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                marginTop: '1rem'
              }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h3>Notifications</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <input type="checkbox" id="emailNotifications" />
                    <label htmlFor="emailNotifications">Email Notifications</label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                    <input type="checkbox" id="systemAlerts" />
                    <label htmlFor="systemAlerts">System Alerts</label>
                  </div>
                </div>

                <div>
                  <h3>Security Settings</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <input type="checkbox" id="twoFactorAuth" />
                    <label htmlFor="twoFactorAuth">Two-Factor Authentication</label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                    <input type="checkbox" id="sessionTimeout" />
                    <label htmlFor="sessionTimeout">Session Timeout</label>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
} 
