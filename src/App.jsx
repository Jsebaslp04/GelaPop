
import { AppRouter } from './componentes/Router/AppRouter'
import { Menu } from './componentes/Menu'
import { Footer } from './componentes/Footer/Footer'
import { FloatingWhatsApp } from './componentes/FloatingWhatsApp/FloatingWhatsApp'
import { CartProvider } from './context/CartContext'
import styles from './App.module.css'

function App() {

  return (
    <CartProvider>
      <Menu />
      <AppRouter />
      <Footer />
      <FloatingWhatsApp />
    </CartProvider>
  )
}

export default App
