import Nav from './components/Nav'
import Home from './pages/home'
import About from './pages/About'
import Package from './pages/Package'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import WAFloatingButton from './components/WAFloatingButton'
import Footer from './components/Footer'

export default function App() {
  document.documentElement.classList.add('scroll-smooth')

  return (
    <div className='scrollbar scrollbar-thumb-primary scroll-smooth scrollbar-track-fourth h-screen overflow-y-scroll'>
      <Nav />
      <WAFloatingButton />
      <Home />
      <div className='bg-tertiary pt-24 pb-20 -mb-4'>
        <div className='max-xl:px-4 container mx-auto space-y-16'>
          <About />
          <Package />
          <Gallery />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  )
}
