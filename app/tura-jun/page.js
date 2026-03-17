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
}

export default function TuraJun() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroTura
        tourName="Tura Jun"
        dates="05.06. – 19.06.2026"
        backgroundImage="/images/istrazujemo-1.webp"
        description="15 dana. 12 putnika. Dva voditelja koji tamo žive."
      />
      <Itinerary data={itineraryContentJun} />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </main>
  )
}
