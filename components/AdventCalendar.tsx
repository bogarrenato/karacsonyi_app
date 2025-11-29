'use client'

import { useState, useEffect } from 'react'
import AdventCard from './AdventCard'
import EnvelopeModal from './EnvelopeModal'
import { adventData, AdventDay } from '@/data/adventData'
import styles from './AdventCalendar.module.css'

// Teszteléshez: állítsd be novemberre (pl. 15. nap = november 15)
const TEST_MODE = false // Teszteléshez állítsd true-ra
const TEST_MONTH = 11 // November
const TEST_DAY = 15 // 15. nap
const DISABLE_DATE_RESTRICTION = true // Ha true, akkor minden nap elérhető

export default function AdventCalendar() {
  const [selectedDay, setSelectedDay] = useState<AdventDay | null>(null)
  const [showEnvelope, setShowEnvelope] = useState(false)
  const [spinningDay, setSpinningDay] = useState<number | null>(null)
  const [viewedDays, setViewedDays] = useState<Set<number>>(new Set())
  const [currentDay, setCurrentDay] = useState<number>(0)

  // Aktuális nap számítása (december 1-24 között)
  useEffect(() => {
    const now = new Date()
    let day = 0
    
    if (TEST_MODE) {
      // Teszteléshez: állítsd be a TEST_DAY értékét (pl. 15 = november 15-én tesztelés)
      day = TEST_DAY
      if (day > 24) day = 24 // Maximum 24. nap
    } else {
      // Valós dátum: december 1-24 között
      if (now.getMonth() === 11) { // December = 11 (0-indexed)
        day = now.getDate()
        if (day > 24) day = 24 // Maximum 24. nap
      } else if (now.getMonth() < 11) {
        day = 0 // Még nem december
      } else {
        day = 24 // Már túl vagyunk decemberen
      }
    }
    
    setCurrentDay(day)
    
    // Betöltjük a megtekintett napokat localStorage-ból
    const stored = localStorage.getItem('adventViewedDays')
    if (stored) {
      try {
        const viewed = JSON.parse(stored)
        setViewedDays(new Set(viewed))
      } catch (e) {
        console.error('Error loading viewed days:', e)
      }
    }
  }, [])

  const handleDayClick = (day: AdventDay) => {
    // Csak az aktuális napig lehet bontani (ha nincs letiltva)
    if (!DISABLE_DATE_RESTRICTION && day.day > currentDay) {
      alert('Ez a nap még nem érhető el! Csak az aktuális napig lehet bontani.')
      return
    }

    // Indítsuk el a forgó animációt
    setSpinningDay(day.day)
    setSelectedDay(day)

    // 2 másodperc után jelenjen meg a boríték
    setTimeout(() => {
      setSpinningDay(null)
      setShowEnvelope(true)
      
      // Mentjük el, hogy ezt a napot megnézték
      const newViewed = new Set(viewedDays)
      newViewed.add(day.day)
      setViewedDays(newViewed)
      localStorage.setItem('adventViewedDays', JSON.stringify(Array.from(newViewed)))
    }, 2000)
  }

  const handleCloseEnvelope = () => {
    setShowEnvelope(false)
    setSelectedDay(null)
  }

  return (
    <>
      <div className={styles.calendar}>
        {adventData.map((day) => {
          const isDisabled = !DISABLE_DATE_RESTRICTION && day.day > currentDay
          const isViewed = viewedDays.has(day.day)
          const isCurrentDay = day.day === currentDay && currentDay > 0
          
          return (
            <AdventCard
              key={day.day}
              day={day}
              onClick={() => handleDayClick(day)}
              isSpinning={spinningDay === day.day}
              isDisabled={isDisabled}
              isViewed={isViewed}
              isCurrentDay={isCurrentDay}
            />
          )
        })}
      </div>
      {showEnvelope && selectedDay && (
        <EnvelopeModal day={selectedDay} onClose={handleCloseEnvelope} />
      )}
    </>
  )
}

