import { promises as fs } from 'fs'
import path from 'path'
import Link from 'next/link'
import styles from './page.module.css'

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'cards.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  const cards = JSON.parse(fileContents)
  
  return cards.map((card) => ({
    id: card.id,
  }))
}

export default async function CardDetailPage({ params }) {
  const filePath = path.join(process.cwd(), 'public', 'cards.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  const cards = JSON.parse(fileContents)
  
  const card = cards.find(c => c.id === params.id)

  if (!card) {
    return <div>Carta não encontrada</div>
  }

  return (
    <div className="animate-fade-in">
      <Link href="/cards" className={styles.backLink}>
        &larr; Voltar para Cartas
      </Link>

      <div className={`glass-panel ${styles.container}`}>
        <div className={styles.imageSection}>
          <img 
            src={card.image ? `/images/cards/${card.image}` : '/images/cards/placeholder.png'} 
            alt={card.name} 
            className={styles.cardImage} 
          />
        </div>
        
        <div className={styles.detailsSection}>
          <h1 className={styles.title}>{card.name}</h1>
          <p style={{ color: '#8b949e' }}>ID: {card.id}</p>

          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <div className={styles.statLabel}>Custo</div>
              <div className={styles.statValue}>{card.cost ?? '-'}</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statLabel}>Força</div>
              <div className={styles.statValue}>{card.force ?? '-'}</div>
            </div>
            {card.habilidade_tipo && (
              <div className={styles.statBox}>
                <div className={styles.statLabel}>Tipo de Habilidade</div>
                <div className={styles.statValue}>{card.habilidade_tipo}</div>
              </div>
            )}
            {card.habilidade_valor !== undefined && (
              <div className={styles.statBox}>
                <div className={styles.statLabel}>Valor da Habilidade</div>
                <div className={styles.statValue}>{card.habilidade_valor}</div>
              </div>
            )}
            {card.gatilho && (
              <div className={styles.statBox}>
                <div className={styles.statLabel}>Gatilho</div>
                <div className={styles.statValue}>{card.gatilho}</div>
              </div>
            )}
          </div>

          {card.effect && card.effect.trim() !== '' && (
            <div className={styles.effectBox}>
              <div className={styles.effectTitle}>Efeito</div>
              <div className={styles.effectText}>{card.effect}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
