import Navigation from '@/components/Navigation'
import GalleryFull from '@/components/GalleryFull'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata = {
  title: 'Galerija | Queen of Compass',
  description: 'Fotografije iz Vijetnama — autentični trenuci, prirodne lepote i kulturna blaga koje smo otkrili zajedno.',
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
