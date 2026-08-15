import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={`animate-fade-in ${styles.homeContainer}`}>
      
      {/* Banner de Anúncio Fake (como na referência) */}
      <div className={styles.adBanner}>
        <img src="https://via.placeholder.com/728x90.png?text=ADVERTISEMENT+BANNER" alt="Ad" />
      </div>

      <div className={styles.mainGrid}>
        
        {/* Tier List */}
        <Link href="/tier-list" className={`${styles.gridCard} ${styles.largeCard}`}>
          <div className={styles.cardBg} style={{ backgroundImage: "url('/images/cards/63.png')" }}></div>
          <div className={styles.cardContent}>
            <h2>TIER LIST</h2>
            <span>Last updated today</span>
          </div>
        </Link>

        {/* Top Decks Speed */}
        <Link href="/top-decks" className={`${styles.gridCard} ${styles.largeCard}`}>
          <div className={styles.cardBg} style={{ backgroundImage: "url('/images/cards/62.png')" }}></div>
          <div className={styles.cardContent}>
            <h2>TOP DECKS: RANKED</h2>
            <span>Last updated an hour ago</span>
          </div>
        </Link>

        {/* Top Decks Rush */}
        <Link href="/top-decks" className={`${styles.gridCard} ${styles.largeCard}`}>
          <div className={styles.cardBg} style={{ backgroundImage: "url('/images/cards/60.png')" }}></div>
          <div className={styles.cardContent}>
            <h2>TOP DECKS: CASUAL</h2>
            <span>Last updated an hour ago</span>
          </div>
        </Link>

        {/* Farming & Events */}
        <Link href="#" className={`${styles.gridCard} ${styles.largeCard}`}>
          <div className={styles.cardBg} style={{ backgroundImage: "url('/images/cards/32.png')" }}></div>
          <div className={styles.cardContent}>
            <h2>FARMING & EVENTS</h2>
            <span>Event ends in: 8 D 14:11:41</span>
          </div>
        </Link>

        {/* Leaks & Updates */}
        <Link href="#" className={`${styles.gridCard} ${styles.largeCard}`}>
          <div className={styles.cardBg} style={{ backgroundImage: "url('/images/cards/34.png')" }}></div>
          <div className={styles.cardContent}>
            <h2>LEAKS & UPDATES</h2>
            <span>Last updated 2 days ago</span>
          </div>
        </Link>

        {/* Guides */}
        <Link href="#" className={`${styles.gridCard} ${styles.largeCard}`}>
          <div className={styles.cardBg} style={{ backgroundImage: "url('/images/cards/58.png')" }}></div>
          <div className={styles.cardContent}>
            <h2>GUIDES</h2>
            <span>Last updated 1 month ago</span>
          </div>
        </Link>

      </div>

      {/* Small Buttons Row */}
      <div className={styles.smallGrid}>
        <Link href="#" className={styles.smallBtn}>GEM GUIDE</Link>
        <Link href="/cards" className={styles.smallBtn}>CARD DATABASE</Link>
        <Link href="#" className={styles.smallBtn}>TOURNAMENTS</Link>
        <Link href="#" className={styles.smallBtn}>PACK OPENER</Link>
        <Link href="#" className={styles.smallBtn}>SHOP</Link>
      </div>

    </div>
  )
}
