import styles from './page.module.css'
import Link from 'next/link'

export default function TierListPage() {
  return (
    <div className="animate-fade-in">
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Tier List</h1>
        <p style={{ color: '#8b949e' }}>Os decks mais fortes do meta atual de Pindorama.</p>
      </div>

      <div className={styles.tierContainer}>
        {/* Tier S */}
        <div className={`glass-panel ${styles.tierRow}`}>
          <div className={`${styles.tierLabel} ${styles.tierS}`}>Tier S</div>
          <div className={styles.tierContent}>
            <div className={styles.deckItem}>
              <img src="/images/cards/placeholder.png" alt="Deck Placeholder" className={styles.deckImage} />
              <div className={styles.deckName}>Controle Absoluto</div>
            </div>
            <div className={styles.deckItem}>
              <img src="/images/cards/placeholder.png" alt="Deck Placeholder" className={styles.deckImage} />
              <div className={styles.deckName}>Aggro Furioso</div>
            </div>
          </div>
        </div>

        {/* Tier 1 */}
        <div className={`glass-panel ${styles.tierRow}`}>
          <div className={`${styles.tierLabel} ${styles.tier1}`}>Tier 1</div>
          <div className={styles.tierContent}>
            <div className={styles.deckItem}>
              <img src="/images/cards/placeholder.png" alt="Deck Placeholder" className={styles.deckImage} />
              <div className={styles.deckName}>Midrange Clássico</div>
            </div>
          </div>
        </div>

        {/* Tier 2 */}
        <div className={`glass-panel ${styles.tierRow}`}>
          <div className={`${styles.tierLabel} ${styles.tier2}`}>Tier 2</div>
          <div className={styles.tierContent}>
            <div className={styles.deckItem}>
              <img src="/images/cards/placeholder.png" alt="Deck Placeholder" className={styles.deckImage} />
              <div className={styles.deckName}>Combo Surpresa</div>
            </div>
          </div>
        </div>
        
        {/* Tier 3 */}
        <div className={`glass-panel ${styles.tierRow}`}>
          <div className={`${styles.tierLabel} ${styles.tier3}`}>Tier 3</div>
          <div className={styles.tierContent}>
            <p style={{ color: '#8b949e', alignSelf: 'center' }}>Nenhum deck reportado nesta tier ultimamente.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
