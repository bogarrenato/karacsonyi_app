'use client'

import { useEffect, useState } from 'react'

interface Snowflake {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export default function Snowflakes() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const createSnowflakes = () => {
      const count = 50
      const newSnowflakes: Snowflake[] = []
      
      for (let i = 0; i < count; i++) {
        newSnowflakes.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 2, // Csökkentett delay, hogy hamarabb kezdjenek esni
          duration: 10 + Math.random() * 20,
          size: 0.5 + Math.random() * 1.5,
        })
      }
      
      setSnowflakes(newSnowflakes)
    }

    createSnowflakes()
    
    // Újra létrehozzuk a hópihéket, ha szükséges
    const interval = setInterval(() => {
      createSnowflakes()
    }, 30000) // 30 másodpercenként újra létrehozza
    
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="snowflake"
          style={{
            left: `${snowflake.left}%`,
            animationDelay: `${snowflake.delay}s`,
            animationDuration: `${snowflake.duration}s`,
            fontSize: `${snowflake.size}em`,
          }}
        >
          ❄
        </div>
      ))}
    </>
  )
}

