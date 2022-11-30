import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ContactPage from "./components/ContactPage/ContactPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { getItemFromAPI } from "./services/firebase"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartContextProvider } from "./storage/cartContext"
import CartView from "./components/CartView/CartView"
import Checkout from "./components/Checkout/Checkout"
import Home from "./components/Home/Home"

function App() {
  getItemFromAPI();
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<ItemListContainer />} />
            <Route path="/games/:categoryid" element={<ItemListContainer />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView/>}/>
            <Route path="/checkout/:orderid" element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
