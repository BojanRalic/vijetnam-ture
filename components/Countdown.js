'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { value: timeLeft.days, label: 'Dana' },
    { value: timeLeft.hours, label: 'Sati' },
    { value: timeLeft.minutes, label: 'Minuta' },
    { value: timeLeft.seconds, label: 'Sekundi' },
  ]

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="bg-olive-600 rounded-2xl px-3 py-3 sm:px-5 sm:py-4 shadow-xl">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tabular-nums">
                00
              </span>
            </div>
            <span className="text-sm sm:text-base text-olive-600 font-medium mt-3 block">{unit.label}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="bg-olive-600 rounded-2xl px-3 py-3 sm:px-5 sm:py-4 shadow-xl">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tabular-nums">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-sm sm:text-base text-olive-600 font-medium mt-3 block">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function Countdown() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })

  return (
    <section ref={sectionRef} className="bg-olive-50 py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-olive-600 font-semibold tracking-wider text-sm mb-2">
            DO POLASKA OSTALO
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-olive-800">
            Rezervišite svoje mesto na vreme
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-lg mx-auto">
          {/* Tura Avgust */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center gap-6"
          >
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-olive-600 text-white text-sm font-bold rounded-full mb-3">
                08.04. – 22.04.2026
              </span>
              <h3 className="text-xl font-serif font-bold text-olive-800">Tura Avgust</h3>
            </div>
            <CountdownTimer targetDate="2026-04-08T00:00:00" />
          </motion.div>

          {/* Tura Jul */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center gap-6"
          >
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-olive-600 text-white text-sm font-bold rounded-full mb-3">
                05.06. – 19.06.2026
              </span>
              <h3 className="text-xl font-serif font-bold text-olive-800">Tura Jul</h3>
            </div>
            <CountdownTimer targetDate="2026-06-05T00:00:00" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
