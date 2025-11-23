'use client'

import { AdventDay } from '@/data/adventData'
import styles from './AdventCard.module.css'

interface AdventCardProps {
  day: AdventDay
  onClick: () => void
  isSpinning: boolean
}

export default function AdventCard({ day, onClick, isSpinning }: AdventCardProps) {
  return (
    <div
      className={`${styles.card} ${isSpinning ? styles.spinning : ''}`}
      onClick={onClick}
    >
      <div className={styles.cardContent}>
        {day.icon && (
          <div className={styles.icon}>{day.icon}</div>
        )}
        <div className={styles.dayNumberContainer}>
          <div className={styles.snowflake1}>❄</div>
          <div className={styles.snowflake2}>❄</div>
          <div className={styles.snowflake3}>❄</div>
          <div className={styles.snowflake4}>❄</div>
          <div className={styles.dayNumber}>{day.day}</div>
        </div>
      </div>
    </div>
  )
}

