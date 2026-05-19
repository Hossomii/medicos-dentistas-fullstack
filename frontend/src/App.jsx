import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import Home from '@/pages/Home/index'
import Voluntario from '@/pages/Voluntario/index'
import '@/styles/global.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/voluntario" element={<Voluntario/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
