'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function CardsPage() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/cards.json')
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error('Erro ao carregar cartas:', err))
  }, [])

  const filteredCards = cards.filter(card => {
    const term = search.toLowerCase()
    return (
      card.name?.toLowerCase().includes(term) ||
      card.effect?.toLowerCase().includes(term)
    )
  })

  return (
    <div className="animate-fade-in">
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Banco de Cartas</h1>
        <p style={{ color: '#8b949e' }}>Explore todas as cartas do Pindorama.</p>
      </div>

      <div className={styles.searchContainer}>
        <input 
          type="text" 
          className={styles.searchInput}
          placeholder="Pesquisar por nome ou efeito..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.cardsGrid}>
        {filteredCards.length > 0 ? (
          filteredCards.map(card => (
            <Link href={`/cards/${card.id}`} key={card.id} className={styles.cardItem}>
              <img 
                src={card.image ? `/images/cards/${card.image}` : '/images/cards/placeholder.png'} 
                alt={card.name} 
                className={styles.cardImage} 
                loading="lazy"
              />
              <div className={styles.cardName}>{card.name}</div>
            </Link>
          ))
        ) : (
          <div className={styles.emptyState}>Nenhuma carta encontrada.</div>
        )}
      </div>
    </div>
  )
}
