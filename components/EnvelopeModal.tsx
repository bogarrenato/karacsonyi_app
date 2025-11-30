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
          {!isEnvelopeOpen && (
            <div className={styles.envelopeFront}>
              <div className={styles.envelopeTop}></div>
              <div className={styles.envelopeBody}></div>
            </div>
          )}
          <div className={`${styles.envelopeBack} ${isEnvelopeOpen ? styles.show : ''}`}>
            <div className={styles.letter}>
              {day.specialType === 'letter' && (
                <div className={styles.specialPopup}>
                  <div className={styles.elf}>
                    <div className={styles.elfHat}>
                      <div className={styles.elfHatTop}></div>
                      <div className={styles.elfHatBase}></div>
                      <div className={styles.elfHatPom}></div>
                    </div>
                    <div className={styles.elfHead}>
                      <div className={styles.elfFace}>
                        <div className={styles.elfEye}></div>
                        <div className={styles.elfEye}></div>
                        <div className={styles.elfNose}></div>
                        <div className={styles.elfMouth}></div>
                        <div className={styles.elfEar}></div>
                        <div className={styles.elfEar}></div>
                      </div>
                    </div>
                    <div className={styles.elfBody}></div>
                    <div className={styles.elfArms}></div>
                  </div>
                  <div className={styles.speechBubble}>
                    Vigyázz, a rossz gyerekek egy zsák szenet és virgácsot kapnak!
                  </div>
                </div>
              )}
              <div className={styles.letterContent}>
                <h2 className={styles.letterTitle}>{day.title}</h2>
                <p className={styles.letterText}>{day.content}</p>
                {day.imageUrl && (
                  <div className={styles.imageContainer}>
                    <img 
                      src={day.imageUrl} 
                      alt={day.title}
                      className={styles.taskImage}
                    />
                  </div>
                )}
                {day.task && (
                  <div className={styles.task}>
                    <strong>Feladat:</strong> {day.task}
                  </div>
                )}
                {day.links && day.links.length > 0 ? (
                  <div className={styles.linksContainer}>
                    {day.links.map((linkItem, index) => (
                      <div key={index} className={styles.linkItem}>
                        <div className={styles.linkName}>
                          {linkItem.name.split('+').map((name, i, arr) => {
                            const trimmedName = name.trim();
                            // Nagy kezdőbetű minden névhez, de a zárójelben lévő részt ne módosítsuk
                            const parenIndex = trimmedName.indexOf('(');
                            if (parenIndex > 0) {
                              const namePart = trimmedName.substring(0, parenIndex).trim();
                              const parenPart = trimmedName.substring(parenIndex);
                              const capitalizedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
                              return (
                                <span key={i}>
                                  {capitalizedName + parenPart}
                                  {i < arr.length - 1 && ' + '}
                                </span>
                              );
                            }
                            const capitalizedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
                            return (
                              <span key={i}>
                                {capitalizedName}
                                {i < arr.length - 1 && ' + '}
                              </span>
                            );
                          })}
                        </div>
                        <a
                          href={linkItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          🔗 Kattints ide a linkhez
                        </a>
                      </div>
                    ))}
                  </div>
                ) : day.link ? (
                  <a
                    href={day.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    🔗 Kattints ide a linkhez
                  </a>
                ) : null}
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



