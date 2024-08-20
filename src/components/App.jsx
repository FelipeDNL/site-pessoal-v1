import React from 'react';
import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SobreMim from '../pages/PaginaSobreMim';
import Inicial from '../pages/PaginaInicial';
import PaginaCurriculo from '../pages/PaginaCurriculo'
import NavBar from './NavBar/Navbar';
import PaginaPortifolio from '../pages/PaginaPortifolio';

function App() {

  return (
    <BrowserRouter>
      <div className='container-md'>

        <div className='d-flex justify-content-left' style={{ width: '30%', marginLeft: '52%', marginTop: '1%', marginBottom: '1%' }}>
          <NavBar />
        </div>

        <div className="d-flex">
          <div style={{ marginRight: '1%' }}>
            <SobreMim />
          </div>

          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/Curriculo" element={<PaginaCurriculo />} />
            <Route path="/Portifolio" element={<PaginaPortifolio />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
