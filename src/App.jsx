import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ListItems from './pages/ListItems'
import { StockContextProvider } from './context/StockContext'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className='container'>
      <StockContextProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<Home />}/> 
              <Route path='items/*' element={<ListItems />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </StockContextProvider>
    </div>
  )
}

export default App
