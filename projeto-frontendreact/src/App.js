import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Filters from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import Footer from './Components/Footer/Footer';
import { ProductList } from './Components/assents/productsList';
import { useState, useEffect } from 'react';

function App() {
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchName, setSearchName] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems && storedCartItems.length > 0) {
      setCartItems(storedCartItems);
      setShowCart(true);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowCart(true)
  }

  const removeFromCart = (itemName) => {
    const itemIndex = cartItems.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
      const updatedCartItems = cartItems.filter((_, index) => index !== itemIndex);
      setCartItems(updatedCartItems);
  
      if (updatedCartItems.length === 0) {
        setShowCart(false);
      }
    }
  }

  



  return (
    <div className="App">
      <Header
      />
      <Filters
        searchName={searchName}
        setSearchName={setSearchName}
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
      />
      <div className="content-wrapper">
        <Home
          ProductList={ProductList}
          addToCart={addToCart}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          searchName={searchName}
          minFilter={minFilter}
          maxFilter={maxFilter}
        />
        {showCart && (
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            ProductList={ProductList}
          />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
