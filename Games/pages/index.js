import Link from 'next/link'

export default function Games() {
  const games = [
    {
      title: 'Tic Tac Toe',
      description: 'Classic game of X and O',
      icon: '⭕',
      link: '/games/tictactoe'
    },
    {
      title: 'Number Guessing',
      description: 'Guess the number and win!',
      icon: '🎲',
      link: '/games/numberguess'
    },
    {
      title: 'Memory Game',
      description: 'Test your memory with cards',
      icon: '🎴',
      link: '/games/memory'
    },
    {
      title: 'Snake Game',
      description: 'Classic snake game',
      icon: '🐍',
      link: '/games/snake'
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
        <h1 style={{ margin: 0 }}>Games Section</h1>
        <Link href="/public" style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}>
          Back to Public Section
        </Link>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0070f3 0%, #00a8ff 100%)',
        color: 'white'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Welcome to Our Games Section
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Choose from our collection of fun and interactive games
        </p>
      </section>

      {/* Games Grid */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Available Games</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {games.map((game, index) => (
            <Link
              key={index}
              href={game.link}
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
                {game.icon}
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>{game.title}</h3>
              <p style={{ color: '#666' }}>{game.description}</p>
            </Link>
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
