import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactBar from './components/ContactBar'
import Home from './pages/Home'
import About from './pages/About'
import Location from './pages/Location'
import ProductsSTS from './pages/ProductsSTS'
import ProductsAL from './pages/ProductsAL'
import Processing from './pages/Processing'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/products/sts" element={<ProductsSTS />} />
          <Route path="/products/al" element={<ProductsAL />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
      <ContactBar />
    </div>
  )
}
