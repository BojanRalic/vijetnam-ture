import Navigation from '@/components/Navigation'
import HeroTura from '@/components/HeroTura'
import Itinerary from '@/components/Itinerary'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollToTop from '@/components/ScrollToTop'
import { itineraryContentJun } from '@/content/data'

export const metadata = {
  title: 'Tura Jun – Program Putovanja | Queen of Compass',
  description: '15 dana kroz Vijetnam. Tura Jun: 05.06. – 19.06.2026. Hanoi, Tam Coc, Ha Long, Da Nang, Hue, Hoi An.',
  openGraph: {
    title: 'Tura Jun | Autentični Vijetnam – Queen of Compass',
    description: '15 dana kroz pravi Vijetnam. 05.06. – 19.06.2026. Hanoi, Tam Coc, Ha Long Bay, Da Nang, Hue, Hoi An.',
    type: 'website',
    locale: 'sr_RS',
    url: 'https://vietnam-trip-website.vercel.app/tura-jun',
    siteName: 'Queen of Compass',
    images: [
      {
        url: '/images/istrazujemo-1.webp',
        width: 1200,
        height: 630,
        alt: 'Tura Jun – Autentični Vijetnam, Queen of Compass',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tura Jun | Queen of Compass',
    description: '15 dana kroz pravi Vijetnam. 05.06. – 19.06.2026.',
    images: ['/images/istrazujemo-1.webp'],
  },
}

export default function TuraJun() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroTura
        tourName="Tura Jun"
        dates="05.06. – 19.06.2026"
        backgroundImage="/images/istrazujemo-1.webp"
        description="15 dana. Luksuzno putovanje. Dva vodića koji tamo žive."
      />
      <Itinerary data={itineraryContentJun} />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </main>
  )
}
