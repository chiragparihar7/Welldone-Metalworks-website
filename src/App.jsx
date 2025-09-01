import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AppRouter from './Router'

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App
