import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import tierData from '../../content/tierlist.json'

export const metadata = {
  title: 'Tier List - Pindorama Meta',
  description: 'Os melhores decks do formato atual.',
}

export default function TierList() {
  const tiers = tierData.tiers || [];

  return (
    <div className={`animate-fade-in ${styles.layout}`}>
      <div className={styles.header}>
        <h1>TIER LIST</h1>
        <p>A classificação definitiva dos melhores decks do formato competitivo. Atualizado automaticamente pelos especialistas.</p>
      </div>

      <div className={styles.tierContainer}>
        {tiers.map((tier, index) => (
          <div key={index} className={styles.tierRow}>
            <div 
              className={styles.tierLabel} 
              style={{ 
                backgroundColor: tier.color || '#333',
                color: '#fff',
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}
            >
              <span>{tier.name}</span>
            </div>
            <div className={styles.decksContainer}>
              {tier.decks && tier.decks.map((deck, i) => (
                <div key={i} className={styles.deckCard}>
                  <div className={styles.deckImageWrapper}>
                    <Image 
                      src={deck.image} 
                      alt={deck.deck_name} 
                      fill 
                      className={styles.deckImage} 
                    />
                  </div>
                  <div className={styles.deckInfo}>
                    <span className={styles.deckName}>{deck.deck_name}</span>
                  </div>
                </div>
              ))}
              {(!tier.decks || tier.decks.length === 0) && (
                <div className={styles.emptyDeck}>Nenhum deck classificado neste tier.</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
