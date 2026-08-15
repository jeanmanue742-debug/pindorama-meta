import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={`animate-fade-in ${styles.hero}`}>
      <h1 className={styles.title}>Bem-vindo ao Pindorama Meta</h1>
      <p className={styles.subtitle}>
        A sua fonte definitiva para encontrar os melhores decks, consultar cartas e acompanhar a Tier List do Pindorama Card Game.
      </p>

      <div className={styles.featuresGrid}>
        <Link href="/cards" className={`glass-panel ${styles.featureCard}`}>
          <div className={styles.featureIcon}>🎴</div>
          <h2 className={styles.featureTitle}>Banco de Cartas</h2>
          <p className={styles.featureDesc}>
            Explore todas as cartas do jogo. Pesquise por nome, efeito, custo e status.
          </p>
        </Link>

        <Link href="/tier-list" className={`glass-panel ${styles.featureCard}`}>
          <div className={styles.featureIcon}>🏆</div>
          <h2 className={styles.featureTitle}>Tier List</h2>
          <p className={styles.featureDesc}>
            Descubra quais são os decks mais fortes no meta atual e suba de rank.
          </p>
        </Link>

        <Link href="/top-decks" className={`glass-panel ${styles.featureCard}`}>
          <div className={styles.featureIcon}>⚔️</div>
          <h2 className={styles.featureTitle}>Top Decks</h2>
          <p className={styles.featureDesc}>
            Inspire-se nos decks campeões de torneios e monte a sua estratégia vencedora.
          </p>
        </Link>
      </div>
    </div>
  )
}
