import Link from 'next/link'

export default function PublicSection() {
  const activities = [
    {
      title: 'Fun Games',
      description: 'Play exciting games like Tic Tac Toe and Number Guessing',
      icon: '🎮',
      link: 'http://localhost:2027'
    },
    {
      title: 'Interactive Tools',
      description: 'Use our collection of interactive tools and calculators',
      icon: '🛠️',
      link: '/public/tools'
    },
    {
      title: 'Learning Center',
      description: 'Explore educational content and tutorials',
      icon: '📚',
      link: '/public/learn'
    }
  ]

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
        <h1 style={{ margin: 0 }}>Public Section</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/user/login" style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px'
          }}>
            User Login
          </Link>
          <Link href="/admin/landing" style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px'
          }}>
            Admin Login
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0070f3 0%, #00a8ff 100%)',
        color: 'white'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Welcome to Our Public Section
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Explore fun activities, interactive tools, and learning resources
        </p>
      </section>

      {/* Activities Section */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Available Activities</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {activities.map((activity, index) => (
            <a
              key={index}
              href={activity.link}
              target={activity.link.startsWith('http') ? '_blank' : undefined}
              rel={activity.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                display: 'block'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                {activity.icon}
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>{activity.title}</h3>
              <p style={{ color: '#666' }}>{activity.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <p>© 2024 Next.js Demo. All rights reserved.</p>
      </footer>
    </div>
  )
} 
