//rafce
import React from 'react'
import FotoInicio from './components/FotoInicio'
import ItemListConteiner from './components/ItemListConteiner'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Loading from './components/Loading'
import Eventos from './components/Eventos'
import {ShoppingCartProvider} from './context/ShoppingCartContext'




const App = () => {
  return (
    <div>
      
        <ShoppingCartProvider>
          <BrowserRouter>
            <NavBar/>        
              <Routes>
                <Route exact path="/evento" element={<Eventos/>}/>
                <Route exact path="/" element={<FotoInicio/>}/>
                <Route exact path="/catalogo" element={<ItemListConteiner greeting="Algunos Buscan la Mejor Empresa, Nosotros la Creamos"/>}/>
                <Route exact path='/cart' element={<Cart/>}/>
                <Route  exact path='/cargo/:cargo' element={<ItemListConteiner/>}/> 
                <Route  exact path='/item/:id' element={<ItemDetailContainer/>}/>
              </Routes>
          </BrowserRouter>
        </ShoppingCartProvider>
      </div>
    
    
  )
}


export default App
