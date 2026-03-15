import Navigation from '@/components/Navigation'
import Itinerary from '@/components/Itinerary'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata = {
  title: 'Tura Avgust – Plan i Program | Queen of Compass',
  description: '15 dana kroz Vijetnam. Tura Avgust: 08.04. – 22.04.2026. Hanoi, Pu Luong, Tam Coc, Ha Long, Da Nang, Hoi An.',
}

export default function TuraAvgust() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-8 bg-olive-50 text-center">
        <p className="text-olive-600 font-semibold tracking-wider text-sm mb-2">08.04. – 22.04.2026</p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-olive-800">Tura Avgust</h1>
      </div>
      <Itinerary />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </main>
  )
}
