'use client'

import { useState } from 'react'
import AdventCard from './AdventCard'
import EnvelopeModal from './EnvelopeModal'
import { adventData, AdventDay } from '@/data/adventData'
import styles from './AdventCalendar.module.css'

export default function AdventCalendar() {
  const [selectedDay, setSelectedDay] = useState<AdventDay | null>(null)
  const [showEnvelope, setShowEnvelope] = useState(false)
  const [spinningDay, setSpinningDay] = useState<number | null>(null)

  const handleDayClick = (day: AdventDay) => {
    // Indítsuk el a forgó animációt
    setSpinningDay(day.day)
    setSelectedDay(day)

    // 2 másodperc után jelenjen meg a boríték
    setTimeout(() => {
      setSpinningDay(null)
      setShowEnvelope(true)
    }, 2000)
  }

  const handleCloseEnvelope = () => {
    setShowEnvelope(false)
    setSelectedDay(null)
  }

  return (
    <>
      <div className={styles.calendar}>
        {adventData.map((day) => (
          <AdventCard
            key={day.day}
            day={day}
            onClick={() => handleDayClick(day)}
            isSpinning={spinningDay === day.day}
          />
        ))}
      </div>
      {showEnvelope && selectedDay && (
        <EnvelopeModal day={selectedDay} onClose={handleCloseEnvelope} />
      )}
    </>
  )
}

