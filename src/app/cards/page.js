'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function CardsPage() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')
  
  // Filters
  const [filterRarity, setFilterRarity] = useState('')
  const [filterCost, setFilterCost] = useState('')
  const [filterPower, setFilterPower] = useState('')

  useEffect(() => {
    fetch('/cards.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])

  const filteredCards = cards.filter(card => {
    // Busca por nome
    const matchName = card.nome.toLowerCase().includes(search.toLowerCase())
    
    // Filtro de raridade
    const matchRarity = filterRarity === '' || card.raridade.toLowerCase() === filterRarity.toLowerCase()
    
    // Filtro de custo
    const matchCost = filterCost === '' || card.custo_materia.toString() === filterCost
    
    // Filtro de poder (faixas)
    let matchPower = true
    if (filterPower !== '') {
      const power = parseInt(card.poder) || 0
      if (filterPower === 'low') matchPower = power < 20
      else if (filterPower === 'med') matchPower = power >= 20 && power <= 50
      else if (filterPower === 'high') matchPower = power > 50
    }

    return matchName && matchRarity && matchCost && matchPower
  })

  // Obtem valores unicos para os botoes de filtro
  const uniqueRarities = [...new Set(cards.map(c => c.raridade).filter(r => r))]
  const uniqueCosts = [...new Set(cards.map(c => c.custo_materia).filter(c => c !== undefined && c !== null))].sort((a,b) => a-b)

  return (
    <div className={`animate-fade-in ${styles.layout}`}>
      
      {/* Sidebar de Filtros */}
      <aside className={styles.sidebar}>
        <div className={styles.filterSection}>
          <input
            type="text"
            placeholder="Buscar pelo nome..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.filterSection}>
          <h3>Raridade</h3>
          <div className={styles.filterGroup}>
            <button className={`${styles.filterBtn} ${filterRarity === '' ? styles.active : ''}`} onClick={() => setFilterRarity('')}>Todas</button>
            {uniqueRarities.map(r => (
              <button 
                key={r} 
                className={`${styles.filterBtn} ${filterRarity === r.toLowerCase() ? styles.active : ''}`}
                onClick={() => setFilterRarity(r.toLowerCase())}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.filterSection}>
          <h3>Custo de Matéria</h3>
          <div className={styles.filterGroup}>
            <button className={`${styles.filterBtn} ${filterCost === '' ? styles.active : ''}`} onClick={() => setFilterCost('')}>Todos</button>
            {uniqueCosts.map(c => (
              <button 
                key={c} 
                className={`${styles.filterBtn} ${filterCost === c.toString() ? styles.active : ''}`}
                onClick={() => setFilterCost(c.toString())}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.filterSection}>
          <h3>Poder (Força)</h3>
          <div className={styles.filterGroup}>
            <button className={`${styles.filterBtn} ${filterPower === '' ? styles.active : ''}`} onClick={() => setFilterPower('')}>Todos</button>
            <button className={`${styles.filterBtn} ${filterPower === 'low' ? styles.active : ''}`} onClick={() => setFilterPower('low')}>0 - 19</button>
            <button className={`${styles.filterBtn} ${filterPower === 'med' ? styles.active : ''}`} onClick={() => setFilterPower('med')}>20 - 50</button>
            <button className={`${styles.filterBtn} ${filterPower === 'high' ? styles.active : ''}`} onClick={() => setFilterPower('high')}>51+</button>
          </div>
        </div>

        <button 
          className={styles.clearBtn}
          onClick={() => {
            setSearch('')
            setFilterRarity('')
            setFilterCost('')
            setFilterPower('')
          }}
        >
          Limpar Filtros
        </button>

      </aside>

      {/* Grid de Cartas */}
      <main className={styles.mainContent}>
        <div className={styles.resultsHeader}>
          <h2>Encontradas: {filteredCards.length} cartas</h2>
        </div>
        
        <div className={styles.grid}>
          {filteredCards.map((card) => (
            <Link key={card.id} href={`/cards/${card.id}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={card.texture_path}
                  alt={card.nome}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <h3>{card.nome}</h3>
                <div className={styles.stats}>
                  <span className={styles.power}>⚔️ {card.poder || 0}</span>
                  <span className={styles.cost}>🔵 {card.custo_materia || 0}</span>
                </div>
              </div>
            </Link>
          ))}
          {filteredCards.length === 0 && (
            <div className={styles.noResults}>
              Nenhuma carta encontrada com esses filtros.
            </div>
          )}
        </div>
      </main>

    </div>
  )
}
