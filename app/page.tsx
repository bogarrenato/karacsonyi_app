'use client'

import { useState, useEffect } from 'react'
import AdventCalendar from '@/components/AdventCalendar'
import Snowflakes from '@/components/Snowflakes'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Snowflakes />
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.titleCursive}>Advent</span>
          <span className={styles.titleBold}>Naptár</span>
        </h1>
        <p className={styles.subtitle}>
          Kattints egy napra, hogy megnyisd az ajándékot! 🎁
        </p>
        <AdventCalendar />
      </div>
    </main>
  )
}

