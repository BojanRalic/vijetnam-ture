'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryPageContent } from '@/content/data'

function Lightbox({ image, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
        aria-label="Zatvori"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        src={image.src}
        alt={image.alt}
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <p className="text-white text-lg font-medium">{image.alt}</p>
        {image.location && (
          <p className="text-white/60 text-sm mt-1">{image.location}</p>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function GalleryFull() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-olive-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/istrazujemo-1.webp)" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-20 w-48 h-48 border border-gold-400/30 rounded-full" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase mb-4">
              Queen of Compass · Vijetnam
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              Galerija
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="h-px w-16 bg-white/40" />
              <p className="text-white text-lg md:text-xl tracking-wider">Trenuci koji ostaju</p>
              <div className="h-px w-16 bg-white/40" />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/80 text-base md:text-lg mb-8"
            >
              Autentični Vijetnam kroz objektiv naših putnika.
            </motion.p>
            <a
              href="/"
              className="inline-block px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Nazad na Početnu
            </a>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-olive-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-olive-600 font-semibold tracking-wider text-sm mb-4">
              TRENUTCI KOJI OSTAJU
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-olive-800">
              Sve fotografije
            </h2>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryPageContent.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.05 }}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => setSelectedImage(image)}
                  className="relative group w-full overflow-hidden rounded-2xl cursor-zoom-in"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium">{image.alt}</p>
                    {image.location && (
                      <p className="text-white/70 text-sm">{image.location}</p>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
