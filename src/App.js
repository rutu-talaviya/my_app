import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
 import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
// import Menproduct from '../src/Pages/Menproduct'
// import Womenproduct from '../src/Pages/Womenproduct'
// import Kidsproduct from '../src/Pages/Kidsproduct'
import men_banner from './Components/Assets/men_banner.jpg'
import women_banner from './Components/Assets/women_banner.avif'
import kids_banner from './Components/Assets/kid_banner.jfif'
import LoginSingup from './Pages/LoginSingup'
import ShopCategory from '../src/Pages/ShopCategory'

const App = () => {

  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens' element={<ShopCategory banner={men_banner} category="Men"/>}/>
        <Route path='/Womens' element={<ShopCategory banner={women_banner} category="Women"/>}/>
        <Route path='/Kids' element={<ShopCategory banner={kids_banner} category="Kid"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Login' element={<LoginSingup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
