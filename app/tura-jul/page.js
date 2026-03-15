import Navigation from '@/components/Navigation'
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
      <div className="pt-24 pb-8 bg-olive-50 text-center">
        <p className="text-olive-600 font-semibold tracking-wider text-sm mb-2">05.06. – 19.06.2026</p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-olive-800">Tura Jul</h1>
      </div>
      <Itinerary data={itineraryContentJul} />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </main>
  )
}
