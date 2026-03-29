import Navigation from '@/components/Navigation'
import GalleryFull from '@/components/GalleryFull'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata = {
  title: 'Galerija | Queen of Compass',
  description: 'Fotografije iz Vijetnama — autentični trenuci, prirodne lepote i kulturna blaga koje smo otkrili zajedno.',
  openGraph: {
    title: 'Galerija | Autentični Vijetnam – Queen of Compass',
    description: 'Fotografije iz Vijetnama — autentični trenuci, prirodne lepote i kulturna blaga koje smo otkrili zajedno.',
    type: 'website',
    locale: 'sr_RS',
    url: 'https://vietnam-trip-website.vercel.app/galerija',
    siteName: 'Queen of Compass',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Galerija – Autentični Vijetnam, Queen of Compass',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galerija | Queen of Compass',
    description: 'Fotografije iz Vijetnama — autentični trenuci, prirodne lepote i kulturna blaga.',
    images: ['/images/hero.webp'],
  },
}

export default function Galerija() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <GalleryFull />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </main>
  )
}
