import Navigation from '@/components/Navigation'
import HeroTura from '@/components/HeroTura'
import Itinerary from '@/components/Itinerary'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata = {
  title: 'Tura April – Program Putovanja | Queen of Compass',
  description: '15 dana kroz Vijetnam. Tura April: 08.04. – 22.04.2026. Hanoi, Pu Luong, Tam Coc, Ha Long, Da Nang, Hoi An.',
}

export default function TuraApril() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroTura
        tourName="Tura April"
        dates="08.04. – 22.04.2026"
        backgroundImage="/images/8-april.webp"
        description="15 dana. 12 putnika. Dva voditelja koji tamo žive."
      />
      <Itinerary />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </main>
  )
}
