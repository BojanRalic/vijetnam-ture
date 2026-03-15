import Navigation from '@/components/Navigation'
import HeroTura from '@/components/HeroTura'
import Itinerary from '@/components/Itinerary'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollToTop from '@/components/ScrollToTop'
import { itineraryContentJul } from '@/content/data'

export const metadata = {
  title: 'Tura Jul – Plan i Program | Queen of Compass',
  description: '15 dana kroz Vijetnam. Tura Jul: 05.06. – 19.06.2026. Hanoi, Tam Coc, Ha Long, Hue, Da Nang, Hoi An.',
}

export default function TuraJul() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroTura
        tourName="Tura Jul"
        dates="05.06. – 19.06.2026"
        backgroundImage="/images/istrazujemo-1.webp"
        description="15 dana. 12 putnika. Dva voditelja koji tamo žive."
      />
      <Itinerary data={itineraryContentJul} />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </main>
  )
}
