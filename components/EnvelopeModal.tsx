'use client'

import { useEffect, useState } from 'react'
import { AdventDay } from '@/data/adventData'
import styles from './EnvelopeModal.module.css'

interface EnvelopeModalProps {
  day: AdventDay
  onClose: () => void
}

export default function EnvelopeModal({ day, onClose }: EnvelopeModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)

  useEffect(() => {
    // Animáció indítása
    setIsOpen(true)
    setTimeout(() => {
      setIsEnvelopeOpen(true)
    }, 500)
  }, [])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleClose = () => {
    setIsEnvelopeOpen(false)
    setTimeout(() => {
      setIsOpen(false)
      setTimeout(onClose, 300)
    }, 300)
  }

  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.show : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={`${styles.envelopeContainer} ${isOpen ? styles.show : ''}`}>
        <div className={`${styles.envelope} ${isEnvelopeOpen ? styles.open : ''}`}>
          <div className={styles.envelopeFront}>
            <div className={styles.envelopeTop}></div>
            <div className={styles.envelopeBody}></div>
          </div>
          <div className={`${styles.envelopeBack} ${isEnvelopeOpen ? styles.show : ''}`}>
            <div className={styles.letter}>
              <div className={styles.letterContent}>
                <h2 className={styles.letterTitle}>{day.title}</h2>
                <p className={styles.letterText}>{day.content}</p>
                {day.task && (
                  <div className={styles.task}>
                    <strong>Feladat:</strong> {day.task}
                  </div>
                )}
                {day.link && (
                  <a
                    href={day.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    🔗 Kattints ide a linkhez
                  </a>
                )}
                <button className={styles.closeButton} onClick={handleClose}>
                  Bezárás
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

