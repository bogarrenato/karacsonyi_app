'use client'

import { AdventDay } from '@/data/adventData'
import styles from './AdventCard.module.css'

interface AdventCardProps {
  day: AdventDay
  onClick: () => void
  isSpinning: boolean
  isDisabled?: boolean
  isViewed?: boolean
  isCurrentDay?: boolean
}

export default function AdventCard({ 
  day, 
  onClick, 
  isSpinning, 
  isDisabled = false,
  isViewed = false,
  isCurrentDay = false
}: AdventCardProps) {
  const getDayNumberClass = () => {
    if (isCurrentDay) return styles.dayNumberCurrent
    if (isViewed) return styles.dayNumberViewed
    return styles.dayNumber
  }

  return (
    <div
      className={`${styles.card} ${isSpinning ? styles.spinning : ''} ${isDisabled ? styles.disabled : ''}`}
      onClick={isDisabled ? undefined : onClick}
    >
      <div className={styles.cardContent}>
        {day.icon && (
          <div className={styles.icon}>{day.icon}</div>
        )}
        <div className={styles.dayNumberContainer}>
          <div className={getDayNumberClass()}>{day.day}</div>
        </div>
      </div>
    </div>
  )
}

