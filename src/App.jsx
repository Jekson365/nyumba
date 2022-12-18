import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './pages/about/About'
import { Blog } from './pages/blog/Blog'
import { Contact } from './pages/contact/Contact'
import { Footer } from './pages/home/Footer';
import { Home } from './pages/home/Home'
import { Products } from './pages/products/Products'
import './main.scss'

function App() {
  useEffect(() => {
    AOS.init()
  })
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
