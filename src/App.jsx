import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import BookRide from './pages/BookRide'
import DriverRegistration from './pages/DriverRegistration'
import Auth from './pages/Auth'
import Help from './pages/Help'
import Safety from './pages/Safety'
import Business from './pages/Business'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookRide />} />
          <Route path="/drive" element={<DriverRegistration />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/help" element={<Help />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
