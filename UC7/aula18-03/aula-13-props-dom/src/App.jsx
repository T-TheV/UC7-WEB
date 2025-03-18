import React from"react";
import Home from"./Pages/Home/index";
import BandDetalhes from"./pages/BandDetalhes/BandDetalhes";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 return(
  <BrowserRouter>
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/band/" element={<BandDetalhes/>} />
   <Route path="/band/:id" element={<BandDetalhes/>} />
  </Routes>
  </BrowserRouter>
 )
}

export default App;