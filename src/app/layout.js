import './globals.css'
import './footer.css'

import Link from 'next/link'

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
            <Link href="/" className="logo">Pindorama Meta</Link>
            <nav className="nav-links">
              <Link href="/cards" className="nav-link">Cartas</Link>
              <Link href="/tier-list" className="nav-link">Tier List</Link>
              <Link href="/top-decks" className="nav-link">Top Decks</Link>
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
            <div className="discord-banner">
              <div className="discord-logo">
                <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="Discord" width="40" />
                <h2>DISCORD</h2>
              </div>
              <div className="discord-stats">
                <span>👥 76174</span>
                <span>🟢 8817</span>
                <span>JOIN THE COMMUNITY</span>
              </div>
              <div className="discord-text">
                <h3>TOP PLAYER COMMUNITY</h3>
                <ul>
                  <li>Torneios Semanais e Ligas</li>
                  <li>Discussões com os melhores jogadores do game</li>
                  <li>Ajuda para novos jogadores e dicas de deck</li>
                </ul>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-icon">📺</a>
              <a href="#" className="social-icon">▶️</a>
              <a href="#" className="social-icon">🐦</a>
            </div>

            <p style={{ marginTop: '1rem', color: '#6b7280' }}>
              &copy; {new Date().getFullYear()} Pindorama Meta. Não afiliado aos criadores originais do jogo.<br/>
              Terms of Service | Contact | Server Status
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
