import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/notFound/NotFound";
import Details from "./pages/details/Details";
import { useEffect, useState } from "react";
import axios from "axios";
import products from "./Data";
import Cart from "./pages/cart/Cart";
import { CartProvider } from "./CartContext";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { AuthProvider } from "./AuthContext";
import Loading from "./assests/images/loading.gif";
import "./responsive.css";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import CheckOut from "./pages/checkout/CheckOut";

function App() {
  const [loading, setLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // duration in milliseconds (4 seconds)

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <img src={Loading} alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <AuthProvider>
            <Header />
            <Routes>
              <Route
                exact={true}
                path="/"
                element={<Home products={products} />}
              />
              <Route exact={true} path="/about" element={<About />} />
              <Route exact={true} path="/contact" element={<Contact />} />
              <Route
                exact={true}
                path="/products"
                element={<Products products={products} />}
              />
              <Route
                exact={true}
                path="/cart"
                element={
                  <Cart setTotalAmount={setTotalAmount} products={products} />
                }
              />
              <Route
                exact={true}
                path="/products/details/:id"
                element={<Details products={products} />}
              />
              <Route exact={true} path="*" element={<NotFound />} />
              <Route exact={true} path="/register" element={<Register />} />
              <Route exact={true} path="/login" element={<Login />} />
              <Route
                exact={true}
                path="/checkout"
                element={<CheckOut totalAmount={totalAmount} />}
              />
            </Routes>
            <Footer />
          </AuthProvider>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
