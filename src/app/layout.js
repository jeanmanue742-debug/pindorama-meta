import './globals.css'

export const metadata = {
  title: 'Pindorama Meta - Top Decks & Tier List',
  description: 'O melhor lugar para encontrar as cartas, decks e tier list do Pindorama Card Game.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className="header glass-panel">
          <div className="container">
            <a href="/" className="logo">Pindorama Meta</a>
            <nav className="nav-links">
              <a href="/cards" className="nav-link">Cartas</a>
              <a href="/tier-list" className="nav-link">Tier List</a>
              <a href="/top-decks" className="nav-link">Top Decks</a>
            </nav>
          </div>
        </header>
        
        <main style={{ padding: '3rem 0', flex: 1 }}>
          <div className="container">
            {children}
          </div>
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Pindorama Meta. Não afiliado aos criadores originais do jogo.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
