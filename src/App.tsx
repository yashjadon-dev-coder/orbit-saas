import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-background min-h-screen">
      <div className="scan-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
