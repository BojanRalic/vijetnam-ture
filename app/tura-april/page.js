import Navigation from '@/components/Navigation'
import HeroTura from '@/components/HeroTura'
import Itinerary from '@/components/Itinerary'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata = {
  title: 'Tura April – Program Putovanja | Queen of Compass',
  description: '15 dana kroz Vijetnam. Tura April: 08.04. – 22.04.2026. Hanoi, Pu Luong, Tam Coc, Ha Long, Da Nang, Hoi An.',
  openGraph: {
    title: 'Tura April | Autentični Vijetnam – Queen of Compass',
    description: '15 dana kroz pravi Vijetnam. 08.04. – 22.04.2026. Hanoi, Pu Luong, Ha Long Bay, Da Nang, Hoi An.',
    type: 'website',
    locale: 'sr_RS',
    url: 'https://vietnam-trip-website.vercel.app/tura-april',
    siteName: 'Queen of Compass',
    images: [
      {
        url: '/images/8-april.webp',
        width: 1200,
        height: 630,
        alt: 'Tura April – Autentični Vijetnam, Queen of Compass',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tura April | Queen of Compass',
    description: '15 dana kroz pravi Vijetnam. 08.04. – 22.04.2026.',
    images: ['/images/8-april.webp'],
  },
}

export default function TuraApril() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroTura
        tourName="Tura April"
        dates="08.04. – 22.04.2026"
        backgroundImage="/images/8-april.webp"
        description="15 dana. Luksuzno putovanje. Dva vodića koji tamo žive."
      />
      <Itinerary />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </main>
  )
}
