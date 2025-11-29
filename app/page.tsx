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
          <span className={styles.titleMain}>Adventi Kalendárium</span>
          <span className={styles.titleYear}>2025</span>
        </h1>
        <p className={styles.subtitle}>
          Kattints, hogy kibontsd a meglepetéseket! 🎁
        </p>
        <AdventCalendar />
      </div>
    </main>
  )
}



